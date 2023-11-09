import styled from "styled-components";

export const MakeYourVideoSectionStyled = styled.section`
  border-radius: 50px;
  background: #EEEFF0;
  overflow: hidden;
  * {
    box-sizing: border-box;
  }

  padding: 112px 40px;
  
  @media screen and (max-width: 1200px) {
    padding: 112px 28px;
  }

  @media screen and (max-width: 800px) {
    padding: 48px 28px 40px 28px;
  }

  @media screen and (max-width: 600px) {
    padding: 48px 16px 40px 16px;
  }

  @media screen and (max-width: 400px) {
    border-radius: 20px;
  }
`

export const MakeYourVideoSectionContainer = styled.div`
  max-width: 1432px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 800px) {
    gap: 32px;
  }
`

export const MakeYourVideoSectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 673px;
  text-align: center;

  @media screen and (max-width: 800px) {
    gap: 24px;
  }
`

export const MakeYourVideoSectionTitle = styled.h2`
  margin: 0;
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`

export const MakeYourVideoSectionDesc = styled.p`
  margin: 0;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`
