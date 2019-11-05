import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

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

    &>a{
        min-width:100%;
    }

    &>div:first-child {
        margin-top:20px;
    }
`;

var MenuDropdown = props => {
    return( 
        <StyledMenuDropdown>
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