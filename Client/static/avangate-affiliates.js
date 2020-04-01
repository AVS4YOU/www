
var vId = 'vId';
var scriptSRC = '/check_affiliate_v2.js';

var protocol = window.location.protocol;
if (protocol.indexOf("https") === 0) document.write(unescape("%3Cscript src='https://secure.avangate.com/content" + scriptSRC + "' type='text/javascript'%3E%3C/script%3E"));
else document.write(unescape("%3Cscript src='http://content.avangate.com" + scriptSRC + "' type='text/javascript'%3E%3C/script%3E"));

var avgParams = _checkAvgParams();
var alreadyChecked = false;
if (avgParams != null) {
    _AVGSetCookie('_avgCheck', avgParams);
    alreadyChecked = true;
}
var avgProds = _avgProds(_AVGGetCookie('_avgCheck'), alreadyChecked, vId); //redirect
var AVG_AFF = false;var AVG_PRODS = new Array();
if (avgProds != "-") {
    AVG_AFF = true;
    if(avgProds != 'all') {AVG_PRODS = avgProds.split(',');}
}
