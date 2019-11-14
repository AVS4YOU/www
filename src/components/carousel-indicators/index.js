import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
    max-width: 40px;
    margin:auto;
`;

const StyledButton = styled.div`
    display: inline-flex;
    border-radius:6px;
    cursor: pointer;
    width:12px;
    height:12px;
    background-color:#9A9997;
    ${props => props.selected && "background-color:#1473E6;"}   
`;

const CarouselIndicators = (props) => {
    return(
        <StyledWrapper>
            <StyledButton selected={props.currentCategory == "video"} onClick={() => props.selectCategory('video')}/>
            <StyledButton selected={props.currentCategory == "audio"} onClick={() => props.selectCategory('audio')}/>
            <StyledButton selected={props.currentCategory == "image"} onClick={() => props.selectCategory('image')}/>
        </StyledWrapper>
    )
}

export default CarouselIndicators