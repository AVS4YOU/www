import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 1440px;
    margin:auto;
`;

const PageContentWrapper = (props) => {
    return(
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}

export default PageContentWrapper