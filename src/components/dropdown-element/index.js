import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";
import { Link } from 'gatsby';

const StyledDropdownElement = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 24px;
    width: auto;
    margin-bottom: 20px;
    display:block;
    text-decoration: none;

    &:hover h4 {
        color: #fda050; 
        text-decoration: underline;
    }

    &>a{
        text-decoration: none;
    }
`;

const DropdownElement = props => {
    return(
        <StyledDropdownElement {...props}> 
            <Link to={props.path}>
                {props.headerText !== undefined ? <Text as="h4" lineHeight="3.5vh;" fontWeight={600} fontSize={16}>{props.headerText}</Text> : ""}
                {props.descriptionText !== undefined ? <Text fontSize={14} color="#666">{props.descriptionText}</Text> : ""}
            </Link>
        </StyledDropdownElement>
    )
}

DropdownElement.propTypes = {

}

export default DropdownElement;