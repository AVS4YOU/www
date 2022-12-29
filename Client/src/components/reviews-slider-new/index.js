import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const StyledCarouselWrapper = styled.div`
.slick-slider .slick-track,
    .slick-slider .slick-list {
      transform: translate3d(0, 0, 0);
      touch-action: pan-y;
    }
  .slick-dots li button:before{
    color: #9A9997;
    opacity: 1;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before{
    color: #1473E6;
    opacity: 1;
  }

  .slick-dots li{
    margin: 0;
  }

  .slick-list{
    padding-bottom: 20px;
  }

  @media (max-width: 750px) {
    .slick-list{
      padding-bottom: 10;
    }
  }

`;

const ReviewSliderNew = props => {

    const settings = {
      dots: true,
      infinite: true,
      swipeToSlide: true,
      swipe: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,

      responsive: [
        {
          breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    };

    return ( 
      <StyledCarouselWrapper>
        <Slider {...settings} style={{touchAction:"pan-y"}}>
        
            <iframe id='gdm-vp-snippet-quotations_a74bc47b-9070-4fcb-9b89-f2c8a41d8428' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/a74bc47b-9070-4fcb-9b89-f2c8a41d8428' frameborder='0' scrolling='no' height='330px' ></iframe>
            
            <iframe id='gdm-vp-snippet-quotations_bd5c138a-3fcd-4121-ae0b-f7e0cd2a62fd' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/bd5c138a-3fcd-4121-ae0b-f7e0cd2a62fd' frameborder='0' scrolling='no' height='330px' ></iframe>

            <iframe id='gdm-vp-snippet-quotations_77097225-915a-4ed7-aa42-e3dd77cca1aa' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/77097225-915a-4ed7-aa42-e3dd77cca1aa' frameborder='0' scrolling='no' height='330px' ></iframe>

            <iframe id='gdm-vp-snippet-quotations_8401fde0-020b-45e9-889b-63e620d5d3a0' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/8401fde0-020b-45e9-889b-63e620d5d3a0' frameborder='0'  scrolling='no' height='330px' ></iframe>
            
            <iframe id='gdm-vp-snippet-quotations_77097225-915a-4ed7-aa42-e3dd77cca1aa' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/77097225-915a-4ed7-aa42-e3dd77cca1aa' frameborder='0'  scrolling='no' height='330px' ></iframe>
        </Slider>
      </StyledCarouselWrapper>
    );
}

export default ReviewSliderNew