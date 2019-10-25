import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const StyledMenuItem = styled.div`
    background-color: #fff;
    padding: 24px;
    box-sizing: border-box;
    box-shadow: 0px 3px 12px #00000029;
    width: auto;
    opacity: ${props => props.visibly ? 1 : 0 };
    visibility: ${props => props.visibly ? "visible" : "hidden" };
    transition: .2s linear;
    position: absolute;
    &:hover>h4 {
        color: #fda050;
        text-decoration: underline;
    }
    cursor: pointer;
`;

const MenuItem = props => {
    return(
        <StyledMenuItem {...props}> 
            {props.headerText !== undefined ? <Text as="h4" lineHeight="3vh" fontWeight={600} fontSize={16}>{props.headerText}</Text> : ""}
            {props.descriptionText !== undefined ? <Text fontSize={14} color="#666">{props.descriptionText}</Text> : ""}
        </StyledMenuItem>
    )
}

MenuItem.propTypes = {
    visibly: PropTypes.bool  
}

MenuItem.defaultProps = {
    visibly: false
}

export default MenuItem;