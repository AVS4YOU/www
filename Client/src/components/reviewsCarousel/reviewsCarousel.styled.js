import styled from "styled-components";

export const ReviewsCarouselWrapper = styled.div`
  width: 100%;
  padding: 48px 22px;
  position: relative;

  .quotes {
    position: absolute;
  }

  .quotes-left {
    left: 0;
    top: 0;
  }

  .quotes-right {
    right: 0;
    bottom: 0;
    transform: rotateZ(180deg);
  }
  
  @media screen and (max-width: 450px) {
    padding: 34px 18px;
    .quotes {
      width: 62px;
    }
  }
`

export const ReviewsCarouselBox = styled.div`
  position: relative;
  z-index: 1;
  
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
        height: 12px;
        width: 12px;
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
    
    &.slick-next {
      right: -45px;
    }

    &.slick-prev {
      left: -45px;
    }
  }
`

export const ReviewsCarouselItem = styled.div`
  padding: 6px;
`
