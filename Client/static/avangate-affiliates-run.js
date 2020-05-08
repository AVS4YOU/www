var AVG_CHECK_AFF_URL_HTTP = "http://content.avangate.com/check_affiliate_js/index.php?";
var AVG_CHECK_AFF_URL_HTTPS = "https://secure.avangate.com/content/check_affiliate_js/index.php?";

function _AVGSetCookie (name, value) {
	if (value == "") value = "-"; 
	var curDate		= new Date();
	var expireDate	= new Date(curDate.getTime() + 24 * 3600 * 1000);
	var nameStr		= name + "=" + escape(value);
	//var expireStr	= "expires=" + expireDate.toGMTString();
	var expireStr	= "";
	var pathStr		= "path=" + "/";
	var cookieVal 	= nameStr + "; " + expireStr + "; " + pathStr + "; ";
	document.cookie = cookieVal;
}

function _AVGGetCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
    }

    var end = document.cookie.indexOf(";", begin);

    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function _checkAvgParams() {
	
	var affChecked = __gup('affChecked');
	
	if(affChecked == 1) {
		return __gup('affp');
	}
	
	return null;
}

function _checkAvgSetDate() {

	var affChecked = __gup('affChecked');

	if(affChecked == 1) {
		return __gup('creationd');
	}

	return null;
}

function _avgProds(cookieData, alreadyChecked, idV) {
	
	if((cookieData == null) && (!alreadyChecked)) {
		
		var protocol = window.location.protocol;
        if (protocol.indexOf("https") === 0) {
        	avgurl = AVG_CHECK_AFF_URL_HTTPS;
        }
        else {
        	avgurl = AVG_CHECK_AFF_URL_HTTP;
        }
        
		var bckurl = document.location.href;
		var checkUrl = avgurl + 'account=' + escape(idV) + '&bk=' + escape(bckurl);
		document.location.href = checkUrl;
	}
	var avgProds = cookieData;
	return avgProds;
}

function __gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  }
  else {
    return results[1];
  }
}

var vId = 'ltu04g==';

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
