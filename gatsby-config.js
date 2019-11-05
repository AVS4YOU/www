module.exports = {
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`,`400`,`500`,`600`,`700`,`800`]
          },
        ],
      },
    }
  ],
}
