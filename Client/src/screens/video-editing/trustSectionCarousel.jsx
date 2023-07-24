import React, {useMemo} from "react";
import Carousel from "react-slick";
import styled from "styled-components";
import {Quote} from "../../images/video-editing/icons";

const TrustSectionCarouselStyled = styled.div`
  position: relative;
  padding: 47px 22px 18px 22px;

  .quote {
    position: absolute;

    &:nth-child(1) {
      left: 0;
      top: 0;
    }

    &:nth-child(2) {
      right: 25px;
      bottom: 3px;
      transform: rotate(180deg);
    }
  }

  .slick-list {
    padding-bottom: 36px;
  }
  
  .slick-dots li {
    width: 25px;
    button {
      margin: 0 auto;
    }
    button:before {
      font-size: 15px;
      color: #9A9997;
    }
    &.slick-active button:before {
      color: #FE9235;
    }
  }

  .visibleSlider {
    max-width: 1122px;
  }

  .slick-initialized .slick-slide.slick-current {
    z-index: 3 !important;
  }
  
  @media screen and (max-width: 1200px) {
    .visibleSlider {
      max-width: 546px;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    .quote {
      display: none;
    }
  }
`

const TrustSectionCarouselItem = styled.div`
  text-align: center;
`

export const TrustSectionCarousel = () => {
    const style = {
        height: '242px',
        width: '256px',
        overflow: 'hidden',
    }
    const settings = {
        className: 'visibleSlider',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <TrustSectionCarouselStyled>
            <Quote className="quote"/>
            <Quote className="quote"/>
            <Carousel {...settings}>
                <TrustSectionCarouselItem>
                    <iframe id='gdm-vp-snippet-quotations_f874b544-5ae9-42cf-8ebf-25d6d502589a'
                            src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/f874b544-5ae9-42cf-8ebf-25d6d502589a'
                            frameBorder='0'
                            style={style}
                            scrolling='no' height='100%'></iframe>
                </TrustSectionCarouselItem>
                <TrustSectionCarouselItem>
                    <iframe id='gdm-vp-snippet-quotations_f572df8e-bfe8-493c-9008-576bd92c714b'
                            src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/f572df8e-bfe8-493c-9008-576bd92c714b'
                            frameBorder='0'
                            style={style}
                            scrolling='no' height='100%'></iframe>
                </TrustSectionCarouselItem>
                <TrustSectionCarouselItem>
                    <iframe id='gdm-vp-snippet-quotations_e4458b86-a269-43ad-b26c-53c53841abe3'
                            src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/e4458b86-a269-43ad-b26c-53c53841abe3'
                            frameBorder='0'
                            style={style}
                            scrolling='no' height='100%'></iframe>
                </TrustSectionCarouselItem>
                <TrustSectionCarouselItem>
                    <iframe id='gdm-vp-snippet-quotations_a74bc47b-9070-4fcb-9b89-f2c8a41d8428'
                            src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/a74bc47b-9070-4fcb-9b89-f2c8a41d8428'
                            frameBorder='0'
                            style={style}
                            scrolling='no' height='100%'></iframe>
                </TrustSectionCarouselItem>
                <TrustSectionCarouselItem>
                    <iframe id='gdm-vp-snippet-quotations_50e36bf2-5045-4643-ac6d-c81dc415afc1'
                            src='https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/50e36bf2-5045-4643-ac6d-c81dc415afc1'
                            frameBorder='0'
                            style={style}
                            scrolling='no' height='100%'></iframe>
                </TrustSectionCarouselItem>
            </Carousel>
        </TrustSectionCarouselStyled>
    )
}
