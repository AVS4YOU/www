import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const arrowStyle = css`

    &:after{
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-top: 1px solid ${props => props.arrowColor};
        border-left: 1px solid  ${props => props.arrowColor};
        -webkit-transition: .2s linear;
        transition: .2s linear;
        -webkit-transform: rotate(135deg);
        -ms-transform: rotate(135deg);
        transform: rotate(135deg);
        position: absolute;
        right: 7px;
        top: 28px;
    }
`;

const StyledText = styled.p`
    font-family: 'Open Sans',sans-serif,Arial;
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    text-transform: ${props => props.textTransform};
    ${props => props.display ? "display:" + props.display : ''};
    margin:0;
    ${props => props.lineHeight ? "line-height:" + props.lineHeight : ''};
    ${props => props.arrow && arrowStyle};
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
    lineHeight: PropTypes.string,
    arrow: PropTypes.bool,
    arrowColor: PropTypes.string
};

Text.defaultProps = {
    fontSize: 18,
    color: "#333333",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: "normal",
    arrow: false,
    arrowColor: "#ffffff"
};


export default Text;