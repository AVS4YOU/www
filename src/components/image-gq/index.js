import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ImageGQ = ({src, className}) => (
    <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === src
      )
      if (!image) {
        return null
      }
      return <Img className={className} fluid={image.node.fluid} />
    }}
  />
)
export default ImageGQ;