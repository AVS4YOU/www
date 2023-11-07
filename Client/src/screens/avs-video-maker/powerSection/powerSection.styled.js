import styled from "styled-components";
import bg from '../../../images/avs-video-maker/power-section-bg.png'

export const PowerSectionStyled = styled.section`
  padding: 112px 0 0 0;

  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 100%;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  border-radius: 50px;
  overflow: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 800px) {
    padding: 48px 0 0 0;
  }

  @media screen and (max-width: 400px) {
    padding: 48px 0 0;
    gap: 32px;
    border-radius: 20px;
  }
`

export const PowerSectionContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 78px;
  padding-bottom: 40px;

  @media screen and (max-width: 600px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    gap: 32px;
  }
`

export const PowerSectionTitle = styled.h2`
  color: var(--text-black, #000);
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  
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
  gap: 32px;
  
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`

export const PowerSectionMiniCarouselItemTitle = styled.h3`
  color: var(--text-black, #000);
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;


  @media screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 30px;
  }
`

export const PowerSectionMiniCarouselItemDesc = styled.p`
  color: var(--text-black, #000);
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  margin: 0;

  @media screen and (max-width: 400px) {
    font-size: 14px;
    line-height: normal;
  }
`

export const PowerSectionLargeCarouselWrapper = styled.div`
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);
  padding: 24px 0;
`
export const PowerSectionLargeCarouselItem = styled.div`
  padding: 0 16px;
  display: flex !important;
  
`

export const PowerSectionLargeCarouselItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
  overflow: hidden;
  height: 488px;
  
  @media screen and (max-width: 1000px) {
    max-height: 208px;
    border-radius: 20px;
  }
`

