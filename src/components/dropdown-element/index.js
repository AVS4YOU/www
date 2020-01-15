import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import Link from '../link';

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

    @media (max-width: 1050px) {
        width: max-content;
        margin: auto;
        margin-bottom: 15px;

        .selected{
            color: #FDA050;
        }
    }
`;
 
const DropdownElement = props => {
    return(
        <StyledDropdownElement {...props}> 
            <Link to={props.path}>
                {props.headerText !== undefined ? <Text className={props.headerTextClass} as="h4" lineHeight="1.5" fontWeight={600} fontSize={16}>{props.headerText}</Text> : ""}
                {props.descriptionText !== undefined && !props.isMobile ? <Text fontSize={14} color="#666">{props.descriptionText}</Text> : ""}
            </Link>
        </StyledDropdownElement>
    )
}

export default DropdownElement;