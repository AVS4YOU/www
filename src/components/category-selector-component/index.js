import React, { memo } from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';

const SelectedStyles = css`
    background-color:#FE9235;
`;

const StyledButton = styled.div`
    border-radius:60px;
    cursor: pointer;
    display: block;
    text-align: center;
    line-height: 47px;
    
    ${props => props.selected ? "color: #ffffff" : "color:#000000"};
    ${props => props.selected && "background-color:#FE9235;"}

    &:hover{
        text-decoration: underline;
    }

    @media (max-width: 1024px) {
        &:hover{
            text-decoration: none;
        }
    }

    ${props => props.selected && SelectedStyles}
    
`;

const valOfColumns = props => props.buttonNames.map(() => ("1fr "));

const StyledCategorySelector = styled.div`
    background-color: #EEEEEE;
    display: grid;
    grid-template-columns: ${valOfColumns};
    width:${props => props.widthButtonsWrapper}px;
    margin: auto;
    padding:3px;
    border-radius:60px;

    .buttonWrapper{
        display: inline-flex;
        align-items: center;
    }

    @media (max-width: 1024px) {
        width: 710px;
    }

    @media (max-width: 750px) {
        width: 100%;
        height: 35px;
        font-size: 15px;

    }

    @media (max-width: 450px) {
        height: 28px;
        padding: 1px;
    }
`;

const CategorySelectorComponent = (props) => {

    const renderButtons = props.buttonNames.map((item, index) => (
        <StyledButton key={index + "-CategorySelectorButton"} id={index} selected={index == props.currentContentIndex} onClick={props.onClick}>
            {item}
        </StyledButton>
    ));

    return(
        <StyledCategorySelector className={props.className} {...props}>
            {renderButtons}
        </StyledCategorySelector>
    )
}

CategorySelectorComponent.defaultProps = {
    widthButtonsWrapper: 480
};

export default memo(CategorySelectorComponent);