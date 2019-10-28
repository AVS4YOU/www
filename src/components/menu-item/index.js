import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const DropdownArrowStyle = css`
    &:after{
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-top: 1px solid
        #fff;
        border-left: 1px solid
        #fff;
        transition: .2s linear;
        transform: rotate(-135deg);
        position: absolute;
        right: 10px;
        top: 25px;
    }
`;

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

        &:after{
            transform: rotate(45deg);
            top: 28px;
        }
    }

    &:hover>div {
        opacity: 1;
        visibility: visible;
    }

    ${props => props.isDropdown ? DropdownArrowStyle : ""}
`;

const MenuItem = props => {
    return(
        <StyledMenuItem {...props}> 
            <Text color="#ffffff" fontSize={14} fontWeight={600} textTransform="uppercase">{props.menuItemText}</Text>
            {props.children}
        </StyledMenuItem>
    )
}

MenuItem.propTypes = {
    menuItemText: PropTypes.string,
    backgroundColor: PropTypes.string,
    isDropdown: PropTypes.bool
}

MenuItem.defaultProps = {
    backgroundColor: "transparent",
    isDropdown: true
}

export default MenuItem;