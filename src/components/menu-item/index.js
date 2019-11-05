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
    background-color: rgba(253,160,78,0);
    padding: 0 24px;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    align-items: center;
    height:100%;
    transition: .2s linear;

    &:hover{
        background-color: rgba(253,160,78,.986);

        &:after{
            transform: rotate(45deg);
            top: 28px;
        }
    }

    &>div{
        min-width: 100%;
    }

    &:hover>div {
        opacity: 1;
        visibility: visible;
    }

    ${props => props.isDropdown ? DropdownArrowStyle : ""}
`;

const MenuItem = props => {

    if(props.isLangSelector ) {
        return(
            <StyledMenuItem {...props}> 
                <Text color="#ffffff" fontSize={14} fontWeight={600} textTransform="uppercase">
                    CurrentLanguage
                </Text>

                
                {props.children}
            </StyledMenuItem>
        )
    } else {
        return(
            <StyledMenuItem {...props}> 
                <Text color="#ffffff" fontSize={14} fontWeight={600} textTransform="uppercase">{props.menuItemText}</Text>
                {props.children}
            </StyledMenuItem>
        )
    }   
}

MenuItem.propTypes = {
    isDropdown: PropTypes.bool,
    isLangSelector: PropTypes.bool
}

MenuItem.defaultProps = {
    isDropdown: true,
    isLangSelector: false
}

export default MenuItem;