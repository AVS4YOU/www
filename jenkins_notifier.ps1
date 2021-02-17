$MESSAGE = "new.avs4you.com is deployed to amazon."
$TOKEN = "1341043651:AAGjwG5Wv4eo075KK_uvhZtw1fzWGH8NlU8"
$CHAT_ID = "-1001346473906"
$URL = "https://api.telegram.org/bot$TOKEN/sendMessage"

Invoke-WebRequest -Uri $URL -Body @{chat_id=$CHAT_ID; text=$MESSAGE} -UseBasicParsing
