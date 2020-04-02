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
