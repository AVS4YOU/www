$TOKEN = "1341043651:AAGjwG5Wv4eo075KK_uvhZtw1fzWGH8NlU8"
$URL = "https://api.telegram.org/bot$TOKEN/sendMessage"

# dev avs4you
$CHAT_ID = "-378391550"


$branch =  $env:BRANCH_NAME

if ( $branch -eq "test.new" ) {
    # Dep. Automation & Operation
    $CHAT_ID = "-1001346473906"
    $MESSAGE = "new.avs4you.com is deployed to amazon."
}
elseif ( $branch -eq "test.teststatic" ) {
    $MESSAGE = "teststatic.avs4you.com is deployed to amazon."
} 
elseif ( $branch -eq "test.teststatic" ) {
    $MESSAGE = "teststatic.avs4you.com is deployed to amazon."
}
else {
    Write-host "Branch: $branch do not for deploy."
    exit
}

# Invoke-WebRequest -Uri $URL -Body @{chat_id=$CHAT_ID; text=$MESSAGE} -UseBasicParsing
