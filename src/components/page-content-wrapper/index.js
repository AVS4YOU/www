import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 1440px;
    margin:auto;

    @media (max-width: 1500px) {
        max-width: 1240px;
        padding: 0 20px;
    }
`;

const PageContentWrapper = (props) => {
    return(
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}

export default PageContentWrapper