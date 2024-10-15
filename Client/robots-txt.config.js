const userAgentID = ['Googlebot', 'Yandex', '*'];
const langID = ['en', 'da', 'de', 'es', 'fr', 'it', 'jp', 'ko', 'nl', 'pl', 'pt'];
const disFolderId = ['/*?', '/static', '/page-data'];
const pageID = [
    '/advent-calendar.aspx',
    '/mov-video-editor.aspx',
    '/powerful-video-maker.aspx',
    '/precise-video-cutting-tools.aspx',
    '/installed.aspx',
];

let policeDisallow = [];

policeDisallow.push(...disFolderId);

for(let i = 0; i < langID.length; i++){
    for(let j = 0; j < pageID.length; j++){
        if(i !== 0){
            policeDisallow.push(langID[i] + pageID[j]);
        } else{
            policeDisallow.push(pageID[j]);
        }
    }
}

module.exports = {
    host: 'https://www.avs4you.com',
    sitemap: 'https://www.avs4you.com/sitemap.xml',
    policy: [{ userAgent: userAgentID[2], disallow: [...policeDisallow] }],
};

