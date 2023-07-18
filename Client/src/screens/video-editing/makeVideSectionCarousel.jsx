import React from "react";
import Carousel from 'react-slick'
import styled from "styled-components";

import Transitions from '../../images/video-editing/transitions.png'
import Transformation from '../../images/video-editing/transformation.png'
import TextGraphics from '../../images/video-editing/textGraphics.png'
import VideoOverlay from '../../images/video-editing/video-overlay.png'

import {
    Transitions as TransitionsIcon,
    Transformation as TransformationIcon,
    TextGraphics as TextGraphicsIcon,
    VideoOverlay as VideoOverlayIcon
} from '../../images/video-editing/icons'

const MakeVideSectionCarouselStyled = styled.div`
  position: relative;

  .slick-list {
    padding-bottom: 110px;
  }

  .slick-dots li {
    width: max-content;
    height: max-content;

    &:not(:last-child) {
      margin-right: 25px;
    }

    &.slick-active a {
      background-color: #FFF;
      filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
    }
  }

  .visibleSlider {
    max-width: 1386px;
  }

  .slick-initialized .slick-slide.slick-current {
    z-index: 3 !important;
  }

  @media screen and (max-width: 1200px) {
    .visibleSlider {
      max-width: 546px;
    }
  }
`

const MakeVideSectionCarouselItem = styled.div`
  position: relative;
  padding-right: 221px;
`

const MakeVideSectionCarouselImg = styled.img`
  margin-left: auto;
`

const MakeVideSectionCarouselBox = styled.div`
  position: absolute;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0 0 8px 0 #FFF inset, 0 8px 24px 0 rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  padding: 30px 32px 15px 33px;
  color: #000;
  max-width: 348px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;


  top: 58px;
  left: 376px;
`

const MakeVideSectionCarouselTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const MakeVideSectionCarouselDesc = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  max-width: 284px;
`

const CarouselPageStyled = styled.a`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: #000;
  min-height: 98px;
  min-width: 98px;
  border-radius: 5px;

  &:hover {
    text-decoration: none;
  }
`

const CarouselPageText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`


const imagesAndIcons = [
    {
        image: Transitions,
        icon: <TransitionsIcon/>,
        text: 'Transitions',
    },
    {
        image: Transformation,
        icon: <TransformationIcon/>,
        text: 'Transformation'
    },
    {
        image: TextGraphics,
        icon: <TextGraphicsIcon/>,
        text: 'Text & Graphics'
    },
    {
        image: VideoOverlay,
        icon: <VideoOverlayIcon/>,
        text: 'Video Overlay'
    },
]

export const MakeVideSectionCarousel = () => {
    const settings = {
        className: 'visibleSlider',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        current: 2,
        nextArrow: <div>Hello</div>,
        prevArrow: <div>By</div>,
        customPaging: function (i) {
            return (
                <CarouselPageStyled>
                    {
                        imagesAndIcons[i].icon
                    }
                    <CarouselPageText>{imagesAndIcons[i].text}</CarouselPageText>
                </CarouselPageStyled>
            );
        },
    }

    return (
        <MakeVideSectionCarouselStyled>
            <Carousel {...settings}>
                <MakeVideSectionCarouselItem>
                    <MakeVideSectionCarouselImg src={imagesAndIcons[0].image}/>
                    <MakeVideSectionCarouselBox>
                        <TransitionsIcon/>
                        <MakeVideSectionCarouselTitle>{imagesAndIcons[0].text}</MakeVideSectionCarouselTitle>
                        <MakeVideSectionCarouselDesc>Add transitions to create visual effects between
                            clips.</MakeVideSectionCarouselDesc>
                    </MakeVideSectionCarouselBox>
                </MakeVideSectionCarouselItem>
                <MakeVideSectionCarouselItem>
                    <MakeVideSectionCarouselImg src={imagesAndIcons[1].image}/>
                    <MakeVideSectionCarouselBox>
                        <TransformationIcon/>
                        <MakeVideSectionCarouselTitle>{imagesAndIcons[1].text}</MakeVideSectionCarouselTitle>
                        <MakeVideSectionCarouselDesc>Rotation, shift, mirror or zoom. Reproduce the entire image or a
                            part of it.
                        </MakeVideSectionCarouselDesc>
                    </MakeVideSectionCarouselBox>
                </MakeVideSectionCarouselItem>
                <MakeVideSectionCarouselItem>
                    <MakeVideSectionCarouselImg src={imagesAndIcons[2].image}/>
                    <MakeVideSectionCarouselBox>
                        <TransformationIcon/>
                        <MakeVideSectionCarouselTitle>{imagesAndIcons[2].text}</MakeVideSectionCarouselTitle>
                        <MakeVideSectionCarouselDesc>
                            Add static and animated captions and shapes.
                        </MakeVideSectionCarouselDesc>
                    </MakeVideSectionCarouselBox>
                </MakeVideSectionCarouselItem>
                <MakeVideSectionCarouselItem>
                    <MakeVideSectionCarouselImg src={imagesAndIcons[3].image}/>
                    <MakeVideSectionCarouselBox>
                        <TransformationIcon/>
                        <MakeVideSectionCarouselTitle>{imagesAndIcons[3].text}</MakeVideSectionCarouselTitle>
                        <MakeVideSectionCarouselDesc>
                            Make a picture in picture effect easily.
                        </MakeVideSectionCarouselDesc>
                    </MakeVideSectionCarouselBox>
                </MakeVideSectionCarouselItem>
            </Carousel>
        </MakeVideSectionCarouselStyled>
    )
}
