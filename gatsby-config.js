module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins:  
    ['gatsby-plugin-react-helmet', 'gatsby-plugin-react-next', 'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`,
          `Open+Sans:300,400,500,600,700,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  
  ],
};
