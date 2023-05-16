#!/bin/bash
readonly REGION="$5"
readonly FIND_NAME_BUCKET="$3"
readonly CLOUD_FRONT_ID="$4"
readonly ORIGIN_NAME="$6"
readonly TOKEN="$7"
readonly CHAT_ID="$8"
readonly MESSAGE="$9"
readonly start_message="Deploy from ${BRANCH_NAME} is starting."
readonly uniq_number=$(date +"%Y%m%d%H%M%S")
readonly name_new_bucket="${FIND_NAME_BUCKET}.${uniq_number}"
name_old_bucket=''

node -v 

export AWS_ACCESS_KEY_ID="$1"
export AWS_SECRET_ACCESS_KEY="$2"
export AWS_DEFAULT_REGION="$REGION"

echo "New bucket name ${name_new_bucket}"

get_old_backet_name() {
  local bucket_name
  local name_base_bucket
  local name_true_bucket
  local i
  
  aws s3api list-buckets --query "Buckets[].Name" \
    | sed '1d' \
    | sed '$d' \
    | awk -F'"' '{print $2}' > list_backets

  i=0
  
  while read bucket_name; do
    case ${bucket_name} in
      ${FIND_NAME_BUCKET})
        i=$((i + 1))
        name_base_bucket=${bucket_name}
      ;;
      ${FIND_NAME_BUCKET}*)
        i=$((i + 1))
        name_true_bucket=${bucket_name}
      ;;
      *)
        echo "Next Bucket" > /dev/null
    esac
  done < list_backets

  case ${i} in
    0)
      echo "Bucket not found"
      exit 1;
    ;;
    1)
      name_old_bucket=${name_base_bucket}
      echo "${name_old_bucket} bucket found"
    ;;
    2)
      name_old_bucket=${name_true_bucket}
      echo "${name_old_bucket} bucket found"
    ;;
    *)
      echo "Too many buckets found "
      exit 1;
  esac
  
  readonly name_old_bucket
}

prep_bucket_policy_acl() {
  local policy
  policy=$(aws s3api get-bucket-policy --bucket ${name_old_bucket} \
    | sed "s^${name_old_bucket}^${name_new_bucket}^g" \
    | jq ".Policy" \
    | tr -d '\\' )
  policy="${policy%\"}"
  policy="${policy#\"}"
  echo ${policy} > bucket_policy.json
  aws s3api get-bucket-acl --bucket ${name_old_bucket} > bucket_acl.json
}

create_new_bucket() {
  aws s3api create-bucket --bucket ${name_new_bucket} --region ${REGION}
  aws s3 website s3://${name_new_bucket}/ \
    --index-document index.html \
    --error-document error.html
  aws s3api put-public-access-block --bucket ${name_new_bucket} --public-access-block-configuration \
   "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
  aws s3api put-bucket-policy \
    --bucket ${name_new_bucket} \
    --policy file://bucket_policy.json
  aws s3api put-bucket-acl \
    --bucket ${name_new_bucket} \
    --access-control-policy file://bucket_acl.json
}

build_site() {
  echo "=== build site ==="
  cd ${WORKSPACE}/Client
  yarn
  yarn build
}

deploy_site() {
  echo "=== deploy site ==="
  if [[ -d "${WORKSPACE}/Client/public" ]]; then
    echo "=== write files to bucket ==="
    aws s3 cp ${WORKSPACE}/Client/public/ s3://${name_new_bucket}/ --recursive
  else
    echo 'No directory'
  fi
}

copy_sitemap() {
  aws s3api head-object --bucket ${name_new_bucket} --key sitemap.xml
    if [[ $? -ne 0 ]]; then
      echo "There is no sitemap file in the new bucket ${name_new_bucket}"
      aws s3api head-object --bucket ${name_old_bucket} --key sitemap.xml
      if [[ $? -eq 0 ]]; then
        echo "The old bucket ${name_old_bucket} has a sitemap file."
        aws s3 cp s3://${name_old_bucket}/sitemap.xml \
          s3://${name_new_bucket}/sitemap.xml
      else
        echo "There is no sitemap file in the old bucket ${name_old_bucket}.
              No action required."
      fi
    else
      echo "The new bucket ${name_new_bucket} has a sitemap file. 
            No action required."
    fi
}

check_deploy() {
  echo "=== check deploy ==="

  
  curl -Is http://"${name_new_bucket}".s3-website-us-east-1.amazonaws.com | head -n 1 | grep 200
    
  if [[ $? -eq 0 ]]; then
    echo "site OK"
  else
    echo "site is not available"
    echo "=== delete new bucket ==="
    delete_bucket "${name_new_bucket}"
    exit 1;
  fi
}

modify_cloud_front() {
  echo "=== modify cloudfront ==="

  local etag
  local quantity
  local id
  local dn
  local newdn

  aws cloudfront get-distribution-config --id ${CLOUD_FRONT_ID} > cf_config.json
  etag=$(cat cf_config.json | jq '.ETag' | tr -d '"')
  sed -i '2,3d' cf_config.json
  sed -i '$d' cf_config.json
  quantity=$(cat cf_config.json | jq '.Origins.Quantity')

  for (( a = 0; a < ${quantity}; a++ )); do
    id=$(cat cf_config.json | jq ".Origins.Items[${a}].Id" | tr -d '"')
    if [[ "${id}" == "${ORIGIN_NAME}" ]]; then
      dn=$(cat cf_config.json | jq ".Origins.Items[${a}].DomainName" | tr -d '"')
      newdn=$(echo ${dn} | sed "s^${name_old_bucket}^${name_new_bucket}^")
      echo ${newdn}
      jq -c '.Origins.Items['${a}'].DomainName="'${newdn}'"' \
        cf_config.json > cf_config_tmp.json \
        && mv cf_config_tmp.json cf_config.json
    fi
  done
  aws cloudfront update-distribution \
    --distribution-config=file://cf_config.json \
    --id ${CLOUD_FRONT_ID} \
    --if-match ${etag} > /dev/null
  aws cloudfront create-invalidation \
    --distribution-id ${CLOUD_FRONT_ID} \
    --paths "/*"
}

delete_bucket() {
  aws s3 rb s3://${1} --force
}

delete_old_bucket() {
  if [[ "${name_old_bucket}" != "${FIND_NAME_BUCKET}" ]]; then
    echo "=== delete old bucket ==="
    delete_bucket "${name_old_bucket}"
  fi
}

notify_telegram() {
  local url
  url="https://api.telegram.org/bot${TOKEN}/sendMessage"
  curl -s -X POST ${url} -d chat_id="$1" -d text="$2"
}

main() {
  echo "${start_message}"
  notify_telegram ${CHAT_ID} "${start_message}"
  get_old_backet_name ${FIND_NAME_BUCKET}
  prep_bucket_policy_acl 
  create_new_bucket
  build_site
  deploy_site
  copy_sitemap
  check_deploy
  modify_cloud_front
  delete_old_bucket
  echo "${MESSAGE}"
  notify_telegram "${CHAT_ID}" "${MESSAGE}"
  echo "=== Finish ==="
}

main
