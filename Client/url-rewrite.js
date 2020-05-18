/*'use strict';
exports.handler = (event, context, callback) => {

    var request = event.Records[0].cf.request;
    var requestUrl = request.uri;
    var rewritedUrl;

    if (/.com(\/[a-z]{2})?(\/)?$/.test(request.uri)){
        rewritedUrl = requestUrl.replace(/.com(\/[a-z]{2})?/, '.com'+'$1'+'/index.aspx');
    } else {
        rewritedUrl = requestUrl.replace(/(\/)?$/, '') + ".aspx";
    }

    request.uri = rewritedUrl;

    return callback(null, request);
};*/