import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import isDesktop from "../layout"

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

  .slick-next:before, .slick-prev {
    filter: brightness(0.5);
  }

  @media (max-width: 750px) {
    .slick-list{
      padding-bottom: 10;
    }
  }

  @media (max-width: 600px) {
    .slick-slider{
      width: 360px;
      margin: auto;
    }
  }

  @media (max-width: 400px) {
    .slick-slider{
      width: 100%;
    }
  }
`;

const StyledIframe = styled.iframe`
    position: relative;
    z-index: -1;
    border: none;
`;


const ReviewSliderNew = props => {

  const [isVideoEditor, setIsVideoEditor] = useState(false);

  useEffect(() => {
    const pageName = window.location.pathname;
    const isVideoEditorPage = pageName.includes("/avs-video-editor");
    setIsVideoEditor(isVideoEditorPage);
  }, [])

    const settings = {
      dots: true,
      infinite: true,
      swipeToSlide: true,
      swipe: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,

      responsive: [
        {
          breakpoint: 1025,
            settings: {
            swipeToSlide: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
            settings: {
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ],
    };

    return ( 
      <StyledCarouselWrapper>
         {
            isVideoEditor &&
        <Slider {...settings} style={{touchAction:"pan-y"}}>
        
            <StyledIframe className="sliderFrame" id='gdm-vp-snippet-quotations_a74bc47b-9070-4fcb-9b89-f2c8a41d8428' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/a74bc47b-9070-4fcb-9b89-f2c8a41d8428' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
            
            <StyledIframe id='gdm-vp-snippet-quotations_bd5c138a-3fcd-4121-ae0b-f7e0cd2a62fd' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/bd5c138a-3fcd-4121-ae0b-f7e0cd2a62fd' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
            
            <StyledIframe id='gdm-vp-snippet-quotations_77097225-915a-4ed7-aa42-e3dd77cca1aa' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/77097225-915a-4ed7-aa42-e3dd77cca1aa' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
            
            <StyledIframe id='gdm-vp-snippet-quotations_8401fde0-020b-45e9-889b-63e620d5d3a0' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/8401fde0-020b-45e9-889b-63e620d5d3a0' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
            
            <StyledIframe id='gdm-vp-snippet-quotations_77097225-915a-4ed7-aa42-e3dd77cca1aa' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/77097225-915a-4ed7-aa42-e3dd77cca1aa' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
            
        </Slider>
}
{
            !isVideoEditor &&
        <Slider {...settings} style={{touchAction:"pan-y"}}>
        
        <StyledIframe id='gdm-vp-snippet-quotations_af0d15a6-1f3b-4cb7-8d89-cc68f14e7289' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/af0d15a6-1f3b-4cb7-8d89-cc68f14e7289' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_a02edb07-b011-46c9-bd45-a46e37e73256' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/a02edb07-b011-46c9-bd45-a46e37e73256' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_bedfaa45-2263-484a-aa4e-96f37d4777cf' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/bedfaa45-2263-484a-aa4e-96f37d4777cf' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_fffdd00f-7d41-477e-bb35-830176fa1fc9' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/fffdd00f-7d41-477e-bb35-830176fa1fc9' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_70946988-3d6d-4dac-9eac-d28b20289c19' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/70946988-3d6d-4dac-9eac-d28b20289c19' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_484f1985-346a-4f2f-bba5-978c499b3ba7' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/484f1985-346a-4f2f-bba5-978c499b3ba7' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_9275f2ae-2be5-473e-8d94-702aa5ed5804' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/9275f2ae-2be5-473e-8d94-702aa5ed5804' frameborder='0' scrolling='no' height='330px' ></StyledIframe>

        <StyledIframe id='gdm-vp-snippet-quotations_bd24f0b6-3d8a-40fc-89b9-1660bc4124f0' src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/bd24f0b6-3d8a-40fc-89b9-1660bc4124f0' frameborder='0' scrolling='no' height='330px' ></StyledIframe>
        </Slider>
}
      </StyledCarouselWrapper>
    );
}

export default ReviewSliderNew