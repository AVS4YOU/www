import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 1440px;
    margin:auto;
    padding-bottom: 100px;

    @media (max-width: 1500px) {
        max-width: 1240px;
        padding: 0 20px;
        padding-bottom: 100px;
    }



    @media (max-width: 350px) {
        padding: 0 10px;
        padding-bottom: 100px;
    }
`;

const PageContentWrapper = (props) => {
    return(
        <StyledWrapper className={props.className}>
            {props.children}
        </StyledWrapper>
    )
}

export default PageContentWrapper