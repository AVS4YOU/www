import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ImageGQL = ({imageName, className, style}) => (
    <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1920, quality: 90) {
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
        edge => edge.node.fluid.originalName === imageName
      )
      if (!image) {
        return null
      }
      return <Img className={className} fluid={image.node.fluid} style={style}/>
    }}
  />
)
export default ImageGQL;