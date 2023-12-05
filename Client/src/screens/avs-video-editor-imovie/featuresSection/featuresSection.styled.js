import styled from "styled-components";

export const FeaturesSectionStyled = styled.section`
  padding: 112px 40px;

  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 800px) {
    padding: 88px 40px;
  }
  
  @media screen and (max-width: 500px) {
    padding: 48px 16px;
  }
`

export const FeaturesSectionContainer = styled.div`
  max-width: 1168px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 88px;
  
  @media screen and (max-width: 800px) {
    gap: 48px;
  }

  @media screen and (max-width: 500px) {
    gap: 32px;
  }
`

export const FeaturesSectionTitle = styled.h2`
  margin: 0;

  color: var(--text-black, #1E272E);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`

export const FeaturesSectionTitleElement = styled.span`
  color: #FE9235;
`

export const FeaturesSectionList = styled.ul`
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  gap: 224px;
  
  @media screen and (max-width: 1100px) {
    gap: 112px;
  }

  @media screen and (max-width: 500px) {
    gap: 64px;
  }
`

export const FeaturesSectionItem = styled.li`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1101px) {

    .card {
      margin-right: -32px;
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;

      .card {
        margin-left: -32px;
        margin-right: 0;
      }
    }
  }
  
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

export const FeaturesSectionItemImg = styled.img`
  border-radius: 3px;

  @media screen and (max-width: 1100px) {
    height: auto;
    max-width: 560px;
    width: 100%;
  }
`

export const FeaturesSectionItemCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0px 0px 8px 0px #FFF inset, 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);

  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: var(--text-black, #1E272E);
  
  @media screen and (max-width: 1100px) {
    margin-bottom: -32px;
    max-width: 496px;
    width: 100%;
  }
  
  @media screen and (max-width: 500px) {
    margin-bottom: -16px;
    
    padding: 32px;
  }
`

export const FeaturesSectionItemTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

export const FeaturesSectionItemDesc = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`
