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

    $bucketName = "new.avs4you.com"
    $distributionId = "E27SY1BHFO3J2K"
}
elseif ( $branch -eq "test.teststatic" ) {
    Set-AWSCredentials -AccessKey $Env:AccessKeyTest -SecretKey $Env:SecretKeyTest   

    $distributionId = "E5Z32JPP5GABL"
    $bucketName = "teststatic.avs4you.com"
} 
elseif ( $branch -eq "test.teststatic" ) {
    Set-AWSCredentials -AccessKey $Env:AccessKeyProd -SecretKey $Env:SecretKeyProd 

    $bucketName = "www.avs4you.com"
    $distributionId = "E21GNZRPS0AW6N"
}
else {
    Write-host "Branch: $branch do not for deploy."
}

# build site
# buildSite

# deploy site
if ( Test-Path -Path $workDir ) {
   # deploySite $bucketName $workDir
   write-host "if go"
} 
else { 
   write-host "build error"
   exit 
}

# reset cache
# resetCache $distributionId
