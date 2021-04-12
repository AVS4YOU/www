module.exports = {
  siteMetadata: {
    title: "avs4you",
    siteUrl: "https://www.avs4you.com",
  },
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Open Sans:200,300,400,400i,500,600,700,800`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        strictMath: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
        output: `/main-sitemap.xml`,
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
        serialize: ({ site, allSitePage, allFile }) =>
        allSitePage.edges.map(edge => {
          const itemPresent= allFile.edges.find(item=>`/${item.node.relativeDirectory}/`===edge.node.path);
          const urlAdress = "https://www.avs4you.com/";
          return {
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: `weekly`,
            priority: (site.siteMetadata.siteUrl + edge.node.path) === urlAdress ? 1.0 : 0.5,
            lastmod: itemPresent ? itemPresent.node.modifiedTime.split('T')[0] : new Date().toISOString().split('T')[0],
          }
        })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: false,
        www: false,
        SymLinksIfOwnerMatch: true,
        siteUrl: 'http://teststatic.avs4you.com/', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `,
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
            RewriteRule ^index.html$ / [L,NC]
            RewriteRule ^free\.aspx$ /downloads.aspx [L,NC]
            RewriteRule ^AVS-System-Info\.aspx$ / [L,NC]
        `,
      },
    },
    `gatsby-plugin-client-side-redirect`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
  ], 
}
