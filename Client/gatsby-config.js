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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js'
      }
    },
    `gatsby-plugin-client-side-redirect`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`, 
  ], 
}
