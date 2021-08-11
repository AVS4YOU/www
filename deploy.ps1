function deploySite {
    param ( $bucket,
            $workDir,
            $fileFilter 
          )
    
        # delete old files from S3
        write-host "=== delete old files ==="
        deleteOldFiles $bucket $fileFilter
        
        # write files to s3
        write-host "=== write files to bucket ==="
        Write-S3Object -BucketName $bucket -Folder $workDir -KeyPrefix "/" -Recurse  
}

function deleteOldFiles {
    param ( $bucket,
            $fileFilter 
          )
    
    $bucketFiles = (Get-S3Object -BucketName $bucket ).Key
    foreach ( $file in $bucketFiles ) { 
           if ( ($file -like "pads/*") -or ($file -like "downloads/*") -or  ($fileFilter -like $file) ) {
               write-host "* file $file is saved."
           } else {
               write-host "$file is deleted."
               Remove-S3Object -BucketName $bucket -Key $file -Force
           }
    }
}

function buildSite () {
    write-host "=== build site ==="
    Set-Location -Path ((Get-Item -Path ".\").FullName + "\Client")
    cmd.exe /c "yarn"
    cmd.exe /c "yarn build"
    if ( $LASTEXITCODE -eq 1) {exit 1 }
}

function resetCache ( $distributionId ) {
    write-host "=== reset cache ==="
    $UniqNumber = Get-Date -Format "yyyyMMddHHmmss"
    $Paths = "/*"

    New-CFInvalidation -DistributionId $distributionId -InvalidationBatch_CallerReference $UniqNumber -Paths_Item $Paths -Paths_Quantity 1 -Force
}

function notifyTelegram () {
    param (
        $CHAT_ID,
        $MESSAGE
    )

    $TOKEN = "1341043651:AAGjwG5Wv4eo075KK_uvhZtw1fzWGH8NlU8"
    $URL = "https://api.telegram.org/bot$TOKEN/sendMessage"

    Invoke-WebRequest -Uri $URL -Body @{chat_id=$CHAT_ID; text=$MESSAGE} -UseBasicParsing
}

# === main ===

Set-DefaultAWSRegion us-east-1
$workDir = "$ENV:workspace\Client\public"                         

$fileFilter = @(
	"web.config",
	"robots.txt"
) 

#  branch
$branch =  $env:BRANCH_NAME

if ( $branch -eq "test.new" ) {
    Set-AWSCredentials -AccessKey $Env:AccessKeyTest -SecretKey $Env:SecretKeyTest

    $distributionId = "E27SY1BHFO3J2K"
    $bucketName = "new.avs4you.com"
    
    # Dep. Automation & Operation
    $CHAT_ID = "-1001346473906"
    $MESSAGE = "new.avs4you.com is deployed to amazon."
}
elseif ( $branch -eq "test.teststatic" ) {
    Set-AWSCredentials -AccessKey $Env:AccessKeyTest -SecretKey $Env:SecretKeyTest   

    $distributionId = "E5Z32JPP5GABL"
    $bucketName = "teststatic.avs4you.com"
    
    # dev avs4you
    $CHAT_ID = "-378391550"
    $MESSAGE = "teststatic.avs4you.com is deployed to amazon."
} 
elseif ( $branch -eq "production.avs4you" ) {
    Set-AWSCredentials -AccessKey $Env:AccessKeyProd -SecretKey $Env:SecretKeyProd 

    $distributionId = "E21GNZRPS0AW6N"
    $bucketName = "www.avs4you.com"

    # dev avs4you
    $CHAT_ID = "-378391550"
    $MESSAGE = "www.avs4you.com is deployed to amazon."
}
else {
    Write-host "Branch: $branch do not for deploy."
    exit
}

Write-host "Deploy from $branch branch."

# build
buildSite

# deploy site
if ( Test-Path -Path $workDir ) {
   deploySite $bucketName $workDir
} 
else { 
   write-host "build error"
   exit 
}

# reset cache
resetCache $distributionId

# notifications
notifyTelegram $CHAT_ID $MESSAGE
