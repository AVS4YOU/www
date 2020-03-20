import React, { memo } from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';

const SelectedStyles = css`
    background-color:#FE9235;
`;

const StyledButton = styled.div`
    border-radius:60px;
    cursor: pointer;
    display: table-cell;
    text-align: center;
    line-height: 47px;
    padding: 0 50px;
    
    
    ${props => props.selected && "background-color:#FE9235;"}

    &:hover .selectorText{
        text-decoration: underline;   
    }

    .selectorText{
        line-height: 47px; 
        pointer-events: none;
        ${props => props.selected ? "color: #ffffff" : "color:#000000"};
    }

    @media (max-width: 1024px) {
        &:hover{
            text-decoration: none;
        }
    }

    ${props => props.selected && SelectedStyles}
    
`;

const StyledCategorySelector = styled.div`
    background-color: #EEEEEE;
    display: table;
    width: auto;
    margin: auto;
    padding:3px;
    border-radius:60px;

    .buttonWrapper{
        display: table-cell;
        align-items: center;
    }
`;

const CategorySelectorComponent = (props) => {

    const renderButtons = props.buttonNames.map((item, index) => (
        <StyledButton className={[index == props.currentContentIndex && "selected", "top-button"]} key={index + "-CategorySelectorButton"} id={index} selected={index == props.currentContentIndex} onClick={props.onClick}>
            <Text className="selectorText">{item}</Text>
        </StyledButton>
    ));

    return(
        <StyledCategorySelector className="top-selector-buttons-wrapper" {...props}>
            {renderButtons}
        </StyledCategorySelector>
    )
}

CategorySelectorComponent.defaultProps = {
    widthButtonsWrapper: 480
};

export default memo(CategorySelectorComponent);