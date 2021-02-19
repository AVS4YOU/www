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


function resetCache ($distributionId) {
    write-host "=== reset cache ==="
    $UniqNumber = Get-Date -Format "yyyyMMddHHmmss"
    $Paths = "/*"

    New-CFInvalidation -DistributionId $distributionId -InvalidationBatch_CallerReference $UniqNumber -Paths_Item $Paths -Paths_Quantity 1 -Force
}

# === main ===

# S3_deploy
Set-AWSCredentials -AccessKey $Env:AccessKey -SecretKey $Env:SecretKey
Set-DefaultAWSRegion us-east-1

$bucketName = "www.avs4you.com"
$workDir = "$ENV:workspace\Client\public"
$distributionId = "E21GNZRPS0AW6N"

$fileFilter = @(
	"web.config",
	"robots.txt"
)                         

# build site
buildSite

# deploy site
if ( Test-Path -Path $workDir ) {
   # Copy-Item -Path "$ENV:workspace\Client\pads" -Destination $workDir -Recurse -Force
   deploySite $bucketName $workDir $fileFilter
} 
else { 
   write-host "build error"
   exit 
}

# reset cache
resetCache $distributionId
