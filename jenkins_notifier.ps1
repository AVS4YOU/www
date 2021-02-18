$MESSAGE = "teststatic.avs4you.com is deployed to amazon."
$TOKEN = "1341043651:AAGjwG5Wv4eo075KK_uvhZtw1fzWGH8NlU8"
$URL = "https://api.telegram.org/bot$TOKEN/sendMessage"


# dev avs4you
$CHAT_ID = "-378391550"
Invoke-WebRequest -Uri $URL -Body @{chat_id=$CHAT_ID; text=$MESSAGE} -UseBasicParsing
