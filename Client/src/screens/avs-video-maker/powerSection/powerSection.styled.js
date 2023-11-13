import styled from "styled-components";
import bg from '../../../images/avs-video-maker/power-section-bg.png'

export const PowerSectionStyled = styled.section`
  padding: 112px 0 0 0;

  display: flex;
  flex-direction: column;
  gap: 78px;
  width: 100%;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50px;
  overflow: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 800px) {
    padding: 48px 0 0 0;
  }
  
  @media screen and (max-width: 600px) {
    border-radius: 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 48px 0 0;
    gap: 32px;
  }
`

export const PowerSectionContainer = styled.div`
  max-width: 764px;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 72px;

  @media screen and (max-width: 600px) {
    gap: 32px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 0 16px;
  }
`

export const PowerSectionTitle = styled.h2`
  color: var(--text-black, #000);
  margin: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`

export const PowerSectionMiniCarouselWrapper = styled.div`
  .slick-slider {
    display: grid;
    grid-template-areas: "prev-arrow list next-arrow" "dots dots dots";
    align-items: center;
    column-gap: 32px;
    row-gap: 32px;
  }
  
  .slick-list {
    grid-area: list;
  }

  .slick-dots {
    bottom: auto;
    position: static;
    display: flex !important;
    justify-content: center;
    gap: 12px;
    grid-area: dots;
    transform: none;

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
  }

  .slick-arrow {
    width: 38px;
    height: 38px;
    box-shadow: 0px 3px 8px 0px rgba(34, 60, 80, 0.2);
    border-radius: 50%;
    position: static;
    transform: none;

    &.slick-disabled {
      box-shadow: none;

      circle {
        stroke: none;
      }
    }
    
    &.slick-next {
      grid-area: next-arrow;
    }
    
    &.slick-prev {
      grid-area: prev-arrow;
    }
  }
  
  @media screen and (max-width: 800px) {
    .slick-slider {
      row-gap: 44px;
    }
  }
  
  @media screen and (max-width: 600px) {
    .slick-slider {
      grid-template-areas: "list" "dots";
      padding: 0 16px;
    }
  }
  
  @media screen and (max-width: 400px) {
    .slick-slider {
      row-gap: 40px;
    }
  }
`

export const PowerSectionMiniCarouselItem = styled.div`
`

export const PowerSectionMiniCarouselItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-family: "Montserrat", sans-serif;
  color: var(--text-black, #000);
  
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`

export const PowerSectionMiniCarouselItemTitle = styled.h3`
  text-align: center;
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
  text-align: center;
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
  .slick-list {
    margin: 0 -16px;
  }
  
  @media screen and (max-width: 600px) {
    .slick-list {
      margin: 0;
    }
  }
`
export const PowerSectionLargeCarouselItem = styled.div`
  padding: 0 16px;
  display: flex !important;
  
  @media screen and (max-width: 600px) {
    padding: 0 42px;
  }
`

export const PowerSectionLargeCarouselItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 50px;
  overflow: hidden;
  height: 488px;
  
  @media screen and (max-width: 800px) {
    height: 312px;
    border-radius: 20px;
  }
`
