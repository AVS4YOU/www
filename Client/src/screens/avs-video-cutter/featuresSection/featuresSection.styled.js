import styled from "styled-components";

export const FeaturesSectionStyled = styled.section`
  padding: 112px 40px;
  
  @media screen and (max-width: 800px) {
    padding: 88px 40px;
  }
  
  @media screen and (max-width: 500px) {
    padding: 48px 16px;
  }
`

export const FeaturesSectionContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: 72px;
  
  @media screen and (max-width: 1000px) {
    gap: 47px;
  }
  
  @media screen and (max-width: 800px) {
    gap: 15px;
  }
  
  @media screen and (max-width: 500px) {
    gap: 0;
  }
`

export const FeaturesSectionTitle = styled.h2`
  margin: 0;
  color: var(--text-black, #000);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`

export const FeaturesSectionCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media screen and (max-width: 500px) {
    gap: 32px;
  }
`

export const FeaturesSectionCarouselItem = styled.div``

export const FeaturesSectionCarouselItemBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const FeaturesSectionCarouselItemImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`

export const FeaturesSectionCarouselItemCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0 0 8px 0 #FFF inset, 0 8px 24px 0 rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  
  padding: 48px;
  
  margin-right: -32px;
  margin-left: 25px;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (max-width: 1000px) {
    margin: 25px 0 -32px 0;
    max-width: 430px;
  }
  
  @media screen and (max-width: 700px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 32px;
    margin-bottom: -15px;
    margin-left: 15px;
    margin-right: 15px;
  }
`

export const FeaturesSectionCarouselItemCardTitle = styled.h3`
  color: var(--text-black, #000);
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

export const FeaturesSectionCarouselItemCardDesc = styled.p`
  color: var(--text-black, #000);
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: normal;
  }
`

export const FeaturesSectionCarouselControl = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
`

export const FeaturesSectionCarouselControlBox = styled.div`
  color: var(--text-grey-m, #555);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
  font-weight: 400;
  
  display: flex;
  align-items: center;
  gap: 5px;
`

export const FeaturesSectionCarouselControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  svg {
    cursor: pointer;
    box-shadow: 0px 0px 20px 2px rgba(34, 60, 80, 0.2);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    
    circle {
      stroke: none;
    }
  }

  &:disabled {
    svg {
      box-shadow: none;
    }
  }
`

export const FeaturesSectionCarouselControlCurrent = styled.span`
  font-weight: 700;
`
