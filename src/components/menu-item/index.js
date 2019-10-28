import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const StyledMenuItem = styled.div`
    ${props => props.backgroundColor ? "background-color:" + props.backgroundColor : "background-color: transparent;"}
    padding: 0 24px;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    align-items: center;
    height:100%;

    &:hover{
        background-color: #F59541;
    }

    &:hover>div {
        opacity: 1;
        visibility: visible;
    }
`;

const MenuItem = props => {
    return(
        <StyledMenuItem {...props}> 
            <Text color="#ffffff" fontWeight={600} textTransform="uppercase">{props.menuItemText}</Text>
            {props.children}
        </StyledMenuItem>
    )
}

MenuItem.propTypes = {
    menuItemText: PropTypes.string,
    backgroundColor: PropTypes.string  
}

MenuItem.defaultProps = {
    backgroundColor: "transparent"
}

export default MenuItem;