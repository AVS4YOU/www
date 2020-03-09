import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const ImageGQ = (props) => {
    const data = useStaticQuery(
        graphql`
        query {
            file(relativePath: {eq: "header-image.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1950) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`
    )

    return(
      <Img 
        className={props.className}
        fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="test" />
    )
}

ImageGQ.propTypes = {
    maxWidth: PropTypes.number,
    relativePath: PropTypes.string,
};

ImageGQ.defaultProps = {

};

export default ImageGQ;