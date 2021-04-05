module.exports = {
    host: 'https://www.avs4you.com',
    sitemap: 'https://www.avs4you.com/sitemap.xml',
    env: {
        development: {
          policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
  };