import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";

const StyledDropdownElement = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 24px;
    width: auto;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover>h4 {
        color: #fda050;
        text-decoration: underline;
    }
`;

const DropdownElement = props => {
    return(
        <StyledDropdownElement {...props}> 
            {props.headerText !== undefined ? <Text as="h4" lineHeight="3.5vh;" fontWeight={600} fontSize={16}>{props.headerText}</Text> : ""}
            {props.descriptionText !== undefined ? <Text fontSize={14} color="#666">{props.descriptionText}</Text> : ""}
        </StyledDropdownElement>
    )
}

DropdownElement.propTypes = {
    headerText: PropTypes.string,
    descriptionText: PropTypes.string  
}

export default DropdownElement;