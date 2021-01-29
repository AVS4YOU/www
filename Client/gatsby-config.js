module.exports = {
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
  ], 
}
