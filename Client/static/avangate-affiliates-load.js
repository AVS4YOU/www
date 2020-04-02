
var vId = 'ltu04g==';
var scriptSRC = '/check_affiliate_v2.js';

var protocol = window.location.protocol;
if (protocol.indexOf("https") === 0) document.write(unescape("%3Cscript src='https://secure.avangate.com/content" + scriptSRC + "' type='text/javascript'%3E%3C/script%3E"));
else document.write(unescape("%3Cscript src='http://content.avangate.com" + scriptSRC + "' type='text/javascript'%3E%3C/script%3E"));
