import styled from "styled-components";
import Text from "../../../components/text";

export const SpecsSectionStyled = styled.div`
  padding: 167px 46px;
  background-color: #32393E;

  @media screen and (max-width: 1280px) {
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
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const SpecsSectionCarouselWrapper = styled.div`
  width: 100%;
  .visibleSlider {
    padding-bottom: 32px;
    width: 100%;
  }

  .slick-dots li {
    width: 25px;

    button {
      margin: 0 auto;
    }

    button:before {
      font-size: 11px;
      color: #9A9997;
    }

    &.slick-active button:before {
      color: #FE9235;
    }
  }

  .slick-slide {

    & > div {
      height: 100%;
    }
  }
  
  @media screen and (max-width: 400px) {
    .visibleSlider {
      margin-top: 48px;
      padding-bottom: 24px;
      width: 100%;
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
  margin: 0 30px;

  @media screen and (max-width: 600px) {
    height: 216px;
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

export const ArrowStyled = styled.a`
  width: max-content;
  height: max-content;
  z-index: 10;
  position: absolute;

  &:before {
    content: none;
  }
  &.slick-next {
    transform: translate(10px, 0px);
    height: 100%;
    display: flex !important;
    align-items: center;
    top: 0;
    right: -33px;
  }
  &.slick-prev {
    transform: translate(-10px, -10px);
    height: 100%;
    display: flex !important;
    align-items: center;
    top: 0;
    left: -33px;

    svg {
      transform: rotate(180deg);
    }
  }
`
