import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledText = styled.p`
    font-family: 'Open Sans',sans-serif,Arial;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    ${props => props.display ? "display:" + props.display : ''};
    margin:0;
    ${props => props.lineHeight ? "line-height:" + props.lineHeight : ''};
`;

const Text = props => {
    return(
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
};

Text.propTypes = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    fontWeight: PropTypes.number,
    textTransform: PropTypes.string,
    display: PropTypes.string,
    lineHeight: PropTypes.string
};

Text.defaultProps = {
    fontSize: 18,
    color: "#333333",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: "normal"
};


export default Text;