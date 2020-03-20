import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const arrowStyle = css`

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    &:after{
        content: '';
        width: 4px;
        height: 4px;
        border-top: 1px solid ${props => props.arrowColor};
        border-left: 1px solid  ${props => props.arrowColor};
        transition: .2s linear;
        transform: rotate(${props => props.arrowDeg}deg);
        display: inline-block;
        margin-left: 5px;
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
    ${props => props.align && "text-align: " + props.align};
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
    arrowColor: PropTypes.string,
};

Text.defaultProps = {
    fontSize: 18,
    color: "#333333",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: "normal",
    arrow: false,
    arrowColor: "#ffffff",
    arrowDeg: 135
};


export default Text;