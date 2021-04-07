const userAgentID = ['Googlebot', 'Yandex', '*', '/*?'];

const policeDisallow = [
             '/404',
             'da/404',
             'de/404',
             'es/404',
             'fr/404',
             'it/404',
             'jp/404',
             'ko/404',
             'nl/404',
             'pl/404',
             'pt/404',
             'ru/404',
             '/advent-calendar.aspx',
             'da/advent-calendar.aspx',
             'de/advent-calendar.aspx',
             'es/advent-calendar.aspx',
             'fr/advent-calendar.aspx',
             'it/advent-calendar.aspx',
             'jp/advent-calendar.aspx',
             'ko/advent-calendar.aspx',
             'nl/advent-calendar.aspx',
             'pl/advent-calendar.aspx',
             'pt/advent-calendar.aspx',
             'ru/advent-calendar.aspx',
];


module.exports = {
    host: 'https://www.avs4you.com',
    sitemap: 'https://www.avs4you.com/sitemap.xml',
    policy: [{ userAgent: [...userAgentID], disallow: [...policeDisallow] }],
};

