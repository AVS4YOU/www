#!/bin/bash
region="$5"

export AWS_ACCESS_KEY_ID="$1"
export AWS_SECRET_ACCESS_KEY="$2"
export AWS_DEFAULT_REGION="$region"

FindNameBucket="$3"
UniqNumber=$(date +"%Y%m%d%H%M%S")
NameNewBucket="$FindNameBucket.$UniqNumber"
CloudFrontID="$4"
OriginName="$6"
TOKEN="$7"
CHAT_ID="$8"
MESSAGE="$9"
StartMessage="Deploy from ${BRANCH_NAME} is starting."

echo "New bucket name $NameNewBucket"

get_old_backet_name () {

    aws s3api list-buckets --query "Buckets[].Name" | sed '1d' | sed '$d' | awk -F'"' '{print $2}' > list_backets
    i=0
    
    while read BucketName; do
        case $BucketName in

            $FindNameBucket)
                i=$((i + 1))
                NameBaseBucket=$BucketName
            ;;

            $FindNameBucket*)
                i=$((i + 1))
                NameTrueBucket=$BucketName
            ;;

            *)
                echo "Next Bucket" > /dev/null
        esac
    done < list_backets

    case $i in

        0)
            echo "Bucket not found"
            exit 1;
        ;;

        1)
            NameOldBucket=$NameBaseBucket
            echo "$NameOldBucket bucket found"
        ;;

        2)
            NameOldBucket=$NameTrueBucket
            echo "$NameOldBucket bucket found"
        ;;

        *)
            echo "Too many buckets found "
            exit 1;
    esac

}

prep_bucket_policy_acl () {
    POLICY=$(aws s3api get-bucket-policy --bucket $NameOldBucket | sed "s^$NameOldBucket^$NameNewBucket^g" | jq ".Policy" | tr -d '\\' )
    POLICY="${POLICY%\"}"
    POLICY="${POLICY#\"}"
    echo $POLICY > Bucket_policy.json
    aws s3api get-bucket-acl --bucket $NameOldBucket > Bucket_ACL.json
}

create_new_bucket () {
    aws s3api create-bucket --bucket $NameNewBucket --region $region
    aws s3 website s3://$NameNewBucket/ --index-document index.html --error-document error.html
    aws s3api put-bucket-policy --bucket $NameNewBucket --policy file://Bucket_policy.json
    aws s3api put-bucket-acl --bucket $NameNewBucket --access-control-policy file://Bucket_ACL.json

}

buildSite () {
    echo "=== build site ==="
    cd $WORKSPACE/Client
    yarn
    yarn build
}

deploySite () {
    echo "=== deploy site ==="
    if [ -d $WORKSPACE/Client/public ]; then
        echo "=== write files to bucket ==="
        aws s3 cp $WORKSPACE/Client/public/ s3://$NameNewBucket/ --recursive
    else
        echo 'No directory'
    fi
}

check_deploy () {
    echo "=== modify cloudfront ==="

    curl -Is http://"$NameNewBucket".s3-website-us-east-1.amazonaws.com | head -n 1 | grep 200
    if [ $? -eq 0 ]; then
        echo "site OK"
    else
        echo "site is not available"
        exit 1;
    fi
    
}

modify_cloud_front () {

    aws cloudfront get-distribution-config --id $CloudFrontID > CF_config.json
    ETag=$(cat CF_config.json | jq '.ETag' | tr -d '"')
    sed -i '2,3d' CF_config.json
    sed -i '$d' CF_config.json
    Quantity=$(cat CF_config.json | jq '.Origins.Quantity')

    for (( a = 0; a < $Quantity; a++ ))
    do
        ID=$(cat CF_config.json | jq ".Origins.Items[$a].Id" | tr -d '"')
        if [[ "$ID" == $OriginName ]]; then
            DN=$(cat CF_config.json | jq ".Origins.Items[$a].DomainName" | tr -d '"')
            NEWDN=$(echo $DN | sed "s^$NameOldBucket^$NameNewBucket^")
            echo $NEWDN
            jq -c '.Origins.Items['$a'].DomainName="'$NEWDN'"' CF_config.json > CF_config_tmp.json && mv CF_config_tmp.json CF_config.json
        fi
    done
    aws cloudfront update-distribution --distribution-config=file://CF_config.json --id $CloudFrontID --if-match $ETag > /dev/null
    aws cloudfront create-invalidation --distribution-id $CloudFrontID --paths "/*"
}

delete_old_bucket () {

    if [[ "$NameOldBucket" != $FindNameBucket ]]; then
        echo "=== delete old bucket ==="
        aws s3 rb s3://$NameOldBucket --force
    fi
}

notifyTelegram () {

    URL="https://api.telegram.org/bot$TOKEN/sendMessage"
    curl -s -X POST $URL -d chat_id=$1 -d text="$2"

}

#===main===
echo "$StartMessage"
#notifyTelegram $CHAT_ID "$StartMessage"

get_old_backet_name $FindNameBucket

prep_bucket_policy_acl 
create_new_bucket

buildSite

deploySite

check_deploy
modify_cloud_front

delete_old_bucket
echo "$MESSAGE"
#notifyTelegram $CHAT_ID "$MESSAGE"

echo "=== Finish ==="

