const excludeSitemap = [
    '/advent-calendar.aspx',
    '/da/advent-calendar.aspx',
    '/de/advent-calendar.aspx',
    '/es/advent-calendar.aspx',
    '/fr/advent-calendar.aspx',
    '/it/advent-calendar.aspx',
    '/jp/advent-calendar.aspx',
    '/ko/advent-calendar.aspx',
    '/nl/advent-calendar.aspx',
    '/pl/advent-calendar.aspx',
    '/pt/advent-calendar.aspx',
];
module.exports = {
    sitemapSize: 5000,
    output: `/sitemap.xml`,
    exclude: [...excludeSitemap],
    query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allFile(filter: {extension: {eq: "md"}}) {
        edges {
          node {
            sourceInstanceName
            modifiedTime
            relativeDirectory
          }
        }
      }
      allSitePage {
        edges {
          node {
            path               
          }
        }
      }
  }`,
   /* resolveSiteUrl: ({site, allSitePage}) => {
      return site.wp.generalSettings.siteUrl
    },*/
    serialize: ({ site, allSitePage, allFile }) =>
    allSitePage.edges.map(edge => {
      const itemPresent= allFile.edges.find(item=>`/${item.node.relativeDirectory}/`===edge.node.path);
      const urlAdress = "https://www.avs4you.com/";
      return {
        url: site.siteMetadata.siteUrl + edge.node.path,
        changefreq: `weekly`,
        priority: (site.siteMetadata.siteUrl + edge.node.path) === urlAdress ? 1.0 : 0.5,
       // lastmod: itemPresent ? itemPresent.node.modifiedTime.split('T')[0] : new Date().toISOString().split('T')[0],
      }
    })
};