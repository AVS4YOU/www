import styled from "styled-components";
import Text from "../../../components/text";

export const SpecsSectionStyled = styled.div`
  padding: 167px 46px;
  background-color: #32393E;

  @media screen and (max-width: 800px) {
    padding: 86px 46px 122px 46px;
  }

  @media screen and (max-width: 800px) {
    padding: 86px 46px 78px 46px;
  }
  
  @media screen and (max-width: 500px) {
    padding: 48px 16px 40px 16px;
  }
  
  * {
    box-sizing: border-box;
  }
`

export const SpecsSectionContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 48px;
  
  @media screen and (max-width: 500px) {
    gap: 24px;
  }
`

export const SpecsSectionCarouselWrapper = styled.div`
  .slick-slider {
    display: grid;
    grid-template-areas: 'list';
  }

  .slick-list {
    grid-area: list;
    margin: 0 -28px 0; // your slide margin
  }

  .slick-arrow {
    position: relative;
    z-index: 1;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    transform: none;
    top: auto;
  }

  .slick-next {
    right: 0;
    grid-area: next-arrow;
  }

  .slick-prev {
    left: 0;
    grid-area: prev-arrow;
  }

  .slick-dots {
    position: static;
    bottom: 0;
    display: flex !important;
    justify-content: center;
    gap: 12px;
    grid-area: dots;

    li {
      width: auto;
      height: auto;

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

  @media screen and (max-width: 1400px) {
    .slick-list {
      margin: 0 -16px; // your slide margin
    }

    .slick-slider {
      grid-template-areas: 'prev-arrow list next-arrow' 'dots dots dots';
      align-items: center;
      column-gap: 16px; // gap between slider and its arrows
      row-gap: 28px; // gap between slider and its dots
    }
    
  }
  @media screen and (max-width: 500px) {
    .slick-slider {
      margin: 0 32px;
    }
    .slick-slider {
      grid-template-areas: 'list' 'dots';
      align-items: center;
      column-gap: 0; // gap between slider and its arrows
      row-gap: 24px; // gap between slider and its dots
    }
  }
`

export const SpecsSectionItemWrapper = styled.div`
  height: 100%;
`

export const SpecsSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid #555;
  height: 290px;
  margin: 0 28px;
  
  @media screen and (max-width: 1400px) {
    margin: 0 16px;
  }
  
  @media screen and (max-width: 800px) {

  }
`

export const SpecsSectionItemTitle = styled(Text)`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin: 32px 0 16px 0;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin: 16px 0 8px 0;
  }
`

export const SpecsSectionItemDesc = styled(Text)`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
