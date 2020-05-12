(function () {
    // define the parameters of Impact Radius Affiliate
    var affKeyArrary = ['campaign_id', 'media_partner_id', 'tracker_id'];

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function setCookie(key, value) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (60 * (40 * 1000)));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    if (affKeyArrary && affKeyArrary.length) {

        for (var i = 0; i < affKeyArrary.length; i++) {
            var affKey = affKeyArrary[i];

            if (window.location.href.search(affKey) != -1) {
                var url = window.location.href;
                var affiliateUrlValue = getParameterByName(affKey, url);
                setCookie(affKey, affiliateUrlValue);
            }
        }
    }
})();