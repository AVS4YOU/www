import styled from "styled-components";

export const FeaturesSectionCarouselWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const FeaturesSectionLgCarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  
  @media screen and (max-width: 830px) {
    .slick-list {
      overflow: visible;
    }
  }
  
  .slick-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    z-index: 10;
    
    bottom: -30px;
    box-shadow: 1px -1px 8px 0px rgba(34,60,80,0.2);
    top: auto;
  }
  
  .slick-prev {
    left: calc(50% - 90px);
  }
  
  .slick-next {
    right: calc(50% - 90px);
  }
`
export const FeaturesSectionLgCarouselItem = styled.div`
  width: 100%;
`

export const FeaturesSectionLgCarouselItemBox = styled.div`
  position: relative;
  max-width: 948px;
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 830px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`

export const FeaturesSectionLgCarouselItemCard = styled.div`
  position: absolute;
  
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0px 0px 8px 0px #FFF inset, 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  width: 348px;
  padding: 22px;
  
  @media screen and (max-width: 1100px) {
    left: 20px;
  }
  
  @media screen and (max-width: 830px) {
    position: static;
    margin-top: -130px;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 60px);
    margin-top: -20px;
  }
`

export const FeaturesSectionLgCarouselItemImg = styled.img`
  margin-left: auto;
  width: 688px;
  
  @media screen and (max-width: 830px) {
    margin: 0 auto;
    width: calc(100% - 80px);
  }
  
  @media screen and (max-width: 600px) {
    width: calc(100% - 30px);
  }
`

export const FeaturesSectionLgCarouselItemTitle = styled.h3`
  margin: 0;

  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const FeaturesSectionLgCarouselItemDesc = styled.p`
  margin: 0;
  
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export const FeaturesSectionLgCarouselControl = styled.div`
  position: absolute;
  bottom: -7px;
  color: #555;
  left: calc(50% - 33px);
  
  display: flex;
  align-items: center;
  gap: 5px;
`

export const FeaturesSectionLgCarouselControlCount = styled.span`
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`

export const FeaturesSectionLgCarouselControlDesc = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const FeaturesSectionSmCarouselWrapper = styled.div`
  width: 100%;
  max-width: 1068px;

  .slick-list {
    overflow: visible;
  }
  
  .slick-current .box {
    margin: 0 32px;
    background: #FFF;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.25);
  }

  .slick-dots {
    bottom: -50px;
    li {
      width: max-content;
      height: max-content;
      button {
        &:before {
          content: none;
        }
        background: #9A9997;
        height: 10px;
        width: 10px;
        border-radius: 50%;
      }
    }

    .slick-active button {
      background: #FE9235;
    }

    li:not(:last-child) {
      margin-right: 7px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    .slick-current .box {
      margin: 0 5px;
    }
  }
  
  @media screen and (max-width: 680px) {
    padding-bottom: 50px;
  }
`

export const FeaturesSectionSmCarouselItem = styled.div`
  height: 123px;
  
  @media screen and (max-width: 830px) {
    height: 135px;
  }
`

export const FeaturesSectionSmCarouselItemBox = styled.div`
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  svg {
    width: 56px;
  }
`

export const FeaturesSectionSmCarouselItemTitle = styled.h3`
  margin: 0;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
