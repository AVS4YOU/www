import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from "prop-types";

const mobileStyles = css`
    visibility: visible;
    opacity: 1;
    width: 100%;
    position: absolute;
    display: block;
    z-index: 5;
    height: 100vh;
    top: 0;
    box-sizing: border-box;
    padding-top: 130px;
    cursor: default;
    transition: .5s linear;
    box-shadow: none;
    z-index: 20;
    overflow: auto;
    min-height: 400px;
    left: auto;
`;

const StyledMenuDropdown = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 3px 12px #00000029;
    width: max-content;
    opacity: ${props => props.visibly ? 1 : 0 };
    visibility: ${props => props.visibly ? "visible" : "hidden" };
    transition: .2s linear;
    position: absolute;
    left: 0;
    top: 100%;
    padding-top: 20px;

    ${props => props.col && "display: grid; grid-template-columns: auto auto"};

    &>a{
        min-width:100%;
    }

    @media (max-width: 1050px) {
        ${mobileStyles}
        right: ${props => props.submenuOpen ? "0" : "-105%"};
        
        &>div:first-child {
            margin-top:0;
        }
    }
`;

var MenuDropdown = props => {

    return( 
        <StyledMenuDropdown {...props}>
            {props.children}
        </StyledMenuDropdown>
    )
}

MenuDropdown.propTypes = {
    visibly: PropTypes.bool  
}

MenuDropdown.defaultProps = {
    visibly: false
}

export default MenuDropdown;