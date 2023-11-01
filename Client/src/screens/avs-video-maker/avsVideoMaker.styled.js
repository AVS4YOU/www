import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .header-wrapper {
    padding: 0 40px;
  }

  .mobileBlock {
    right: 40px !important;
  }

  @media screen and (max-width: 400px) {
    .mobileBlock {
      right: 16px !important;
    }

    .header-wrapper {
      padding: 0 16px;
    }
  }
`

export const AvsVideoMakerContainer = styled.div`
  max-width: 1432px;
  padding: 32px 40px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`
