(function () {

    var affKeyArrary = ['campaign_id', 'media_partner_id', 'tracker_id'];
    var affParam = '';

    for (var i = 0; i < affKeyArrary.length; i++) {
        var affKey = affKeyArrary[i];

        if (document.cookie.indexOf(affKey + '=') != -1) {
            var affVal = getCookie(affKey);

            if (!affVal) {
                affParam = "";
                break;
            }

            affParam += '&' + affKey + '=' + affVal;
        }
    }

    if (affParam) {

        var shartitBtnsOneYear = document.querySelectorAll('a[href*="store.avs4you.com/order/checkout.php?PRODS=604110"]');
        var shartitBtnsUnlimited = document.querySelectorAll('a[href*="store.avs4you.com/order/checkout.php?PRODS=604132"]');

        for (var i = 0, len = shartitBtnsOneYear.length; i < len; i++) {
            var newUrl = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919254]=1" + affParam;
            shartitBtnsOneYear[i].setAttribute('href', newUrl);
        }

        for (var i = 0, len = shartitBtnsUnlimited.length; i < len; i++) {
            var newUrl = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1" + affParam;
            shartitBtnsUnlimited[i].setAttribute('href', newUrl);
        }
    }


    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }
  })();
