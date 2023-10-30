import styled from "styled-components";

export const PowerSectionStyled = styled.section`
  padding: 112px 0;

  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 100%;
  
  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 800px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 400px) {
    padding: 48px 0;
    gap: 32px;
  }
`

export const PowerSectionContainer = styled.div`
  max-width: 596px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 72px;
  padding-bottom: 40px;

  @media screen and (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    gap: 48px;
  }
`

export const PowerSectionTitle = styled.h2`
  margin: 0;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`

export const PowerSectionMiniCarouselWrapper = styled.div`
  .slick-slider {
    margin: 0 90px;
  }
  .slick-dots {
    bottom: -40px;
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

  .slick-arrow {
    width: 38px;
    height: 38px;
    box-shadow: 0px 3px 8px 0px rgba(34,60,80,0.2);
    border-radius: 50%;

    &.slick-disabled {
      box-shadow: none;
      
      circle {
        stroke: none;
      }
    }
    &.slick-next {
      right: -70px;
    }

    &.slick-prev {
      left: -70px;
    }
  }
  
  @media screen and (max-width: 600px) {
    width: 100%;
    .slick-slider {
      margin: 0;
    }
  }
`

export const PowerSectionMiniCarouselItem = styled.div`
`

export const PowerSectionMiniCarouselItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PowerSectionMiniCarouselItemTitle = styled.h3`
  margin: 0;
  color: var(--text-black, #000);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;


  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`

export const PowerSectionMiniCarouselItemDesc = styled.p`
  margin: 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */

  @media screen and (max-width: 400px) {
    line-height: normal;
  }
`

export const PowerSectionLargeCarouselWrapper = styled.div``

export const PowerSectionLargeCarouselItem = styled.div`
  padding: 0 16px;

  @media screen and (max-width: 700px) {
    padding: 0 4px;
  }
`

export const PowerSectionLargeCarouselItemImg = styled.img`
  width: 100%;
  max-height: 488px;
  object-fit: cover;
  
  @media screen and (max-width: 1000px) {
    max-height: 265px;
  }

  @media screen and (max-width: 700px) {
    max-height: 164px;
  }
`

export const PowerSectionLink = styled.a`
  border-radius: 3px;
  background: #157BF2;
  padding: 16px 32px;
  color: #FFF;
  
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: max-content;
  margin: 0 auto;
  display: block;
  
  @media screen and (max-width: 400px) {
    width: calc(100% - 32px);
    margin: 0 auto;
    text-align: center;
  }
`
