import React, {useState} from "react";
import Carousel from 'react-slick'
import styled from "styled-components";

import Transitions from '../../images/video-editing/transitions.png'
import Transformation from '../../images/video-editing/transformation.png'
import TextGraphics from '../../images/video-editing/textGraphics.png'
import VideoOverlay from '../../images/video-editing/video-overlay.png'
import VideoStabilization from '../../images/video-editing/video-stabilization.png'
import ChromaKey from '../../images/video-editing/chroma-key.png'
import ColourCorrectionKey from '../../images/video-editing/colour-correction-key.png'
import FreezeFrame from '../../images/video-editing/freeze-frame.png'
import PlaybackSpeed from '../../images/video-editing/playback-speed.png'

import {
    Transitions as TransitionsIcon,
    Transformation as TransformationIcon,
    TextGraphics as TextGraphicsIcon,
    VideoOverlay as VideoOverlayIcon,
    VideoStabilization as VideoStabilizationIcon,
    ChromaKey as ChromaKeyIcon,
    ColourCorrectionKey as ColourCorrectionKeyIcon,
    FreezeFrame as FreezeFrameIcon,
    PlaybackSpeed as PlaybackSpeedIcon, ChevronRight
} from '../../images/video-editing/icons'

const MakeVideSectionCarouselStyled = styled.div`
  position: relative;

  * {
    box-sizing: border-box;
  }

  .slider1 {
    max-width: 1386px;
  }

  .slick-initialized .slick-slide.slick-current {
    z-index: 3 !important;
  }

  .slider2 {
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
    .slick-list {
      padding: 48px 0;
    }

    .slick-slide {
      &:not(:last-child) {
        padding-right: 30px;
      }

      &.slick-current a {
        background-color: #FFF;
        filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .slider2 {
      width: 1400px;

      .slick-list {
        padding: 48px 30px;
      }

      .slick-slide {
        display: block;
        width: 150px !important;

        &:not(:last-child) {
          padding-right: 30px;
        }

        &.slick-current a {
          background-color: #FFF;
          filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
        }
      }
    }
  }


  @media screen and (max-width: 1400px) {
    .slider2 {
      max-width: 100%;
      margin: 0 auto;
      
      .slick-list {
        padding: 48px 30px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .slider1 {
      .slick-list {
        padding-bottom: 177px;
      }
    }

    .slider2 {
      .slick-list {
        padding: 33px 30px 48px 30px;
      }
    }
  }
  
  @media screen and (max-width: 700px) {
    .slider1 {
      .slick-list {
        padding-bottom: 190px;
      }
    }
  }
`

const MakeVideSectionCarouselItem = styled.div`
  position: relative;
`

const MakeVideSectionCarouselImg = styled.img`
  margin: 0 150px 0 auto;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }
  
  @media screen and (max-width: 700px) {
    width: 100%;
  }
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
  left: calc(50% - 420px);

  @media screen and (max-width: 1400px) {
    left: auto;
    right: 750px;
  }

  @media screen and (max-width: 1200px) {
    right: calc(50% - 174px);
    top: 260px;
  }
  
  @media screen and (max-width: 700px) {
    gap: 12px;
    
    bottom: -150px;
    top: auto;
  }
  
  @media screen and (max-width: 400px) {
    width: 90%;
    right: 15px;
  }
`

const MakeVideSectionCarouselTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`

const MakeVideSectionCarouselDesc = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  max-width: 284px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`

const CarouselPageStyled = styled.a`
  width: 128px !important;
  display: flex !important;
  flex-direction: column;
  padding: 15px;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: #000;
  min-height: 98px;
  border-radius: 5px;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 1400px) {
    width: 100% !important;
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

const ArrowStyled = styled.a`
  width: max-content;
  height: max-content;
  z-index: 10;
  
  &:before {
    content: none;
  }
  &.slick-prev {
    top: calc(50% + 142px);
    left: calc(50% - 400px);
    svg {
      transform: rotate(180deg);
    }
  }
  
  &.slick-next {
    top: calc(50% + 150px);
    left: calc(50% - 240px);
  }

  @media screen and (max-width: 1400px) {
    &.slick-next {
      left: calc(50% - 300px);
    }

    &.slick-prev {
      left: calc(50% - 460px);
    }
  }

  @media screen and (max-width: 1200px) {
    &.slick-next {
      top: calc(50% + 260px);
      left: calc(50% + 50px);
    }

    &.slick-prev {
      top: calc(50% + 252px);
      left: calc(50% - 130px);
    }
  }
  
  @media screen and (max-width: 700px) {
    &.slick-next {
      top: auto;
      bottom: -68px;
    }

    &.slick-prev {
      top: auto;
      bottom: -60px;
    }
  }
`
const CarouselIndex = styled.div`
  position: absolute;
  z-index: 11;
  display: flex;
  gap: 5px;
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  top: calc(50% + 16px);
  left: calc(50% - 315px);
  
  .carousel-index-bold {
    margin: 0;
    font-weight: 700;
  }
  
  @media screen and (max-width: 1400px) {
    left: calc(50% - 375px);
  }

  @media screen and (max-width: 1200px) {
    top: calc(50% + 130px);
    left: calc(50% - 40px);
  }
  
  @media screen and (max-width: 700px) {
    top: auto;
    bottom: 205px;
  }

  @media screen and (max-width: 660px) {
    bottom: 220px;
  }
  
  @media screen and (max-width: 350px) {
    bottom: 235px;
  }
`



const data = [
    {
        image: Transitions,
        icon: <TransitionsIcon/>,
        text: 'Transitions',
        desc: 'Add transitions to create visual effects between clips.'
    },
    {
        image: Transformation,
        icon: <TransformationIcon/>,
        text: 'Transformation',
        desc: 'Rotation, shift, mirror or zoom. Reproduce the entire image or a part of it.'
    },
    {
        image: TextGraphics,
        icon: <TextGraphicsIcon/>,
        text: 'Text & Graphics',
        desc: 'Add static and animated captions and shapes.',
    },
    {
        image: VideoOverlay,
        icon: <VideoOverlayIcon/>,
        text: 'Video Overlay',
        desc: 'Make a picture in picture effect easily.'
    },
    {
        image: VideoStabilization,
        icon: <VideoStabilizationIcon/>,
        text: 'Video Stabilization',
        desc: 'Fix shaky footages with video stabilization.',
    },
    {
        image: ChromaKey,
        icon: <ChromaKeyIcon/>,
        text: 'Chroma Key',
        desc: 'Change your background with Chroma Key effect.',
    },
    {
        image: ColourCorrectionKey,
        icon: <ColourCorrectionKeyIcon/>,
        text: 'Colour Correction Key',
        desc: 'Make adjustments automatically or apply one of the colour effect.',
    },
    {
        image: FreezeFrame,
        icon: <FreezeFrameIcon/>,
        text: 'Freeze Frame',
        desc: 'Make a still shot from your video clip.',
    },
    {
        image: PlaybackSpeed,
        icon: <PlaybackSpeedIcon/>,
        text: 'Playback Speed',
        desc: 'Correct too slow or too fast episodes speeding up or slowing down your clips.',
    },
]

export const Arrow = (props) => {
    return (
        <ArrowStyled {...props}>
            <ChevronRight/>
        </ArrowStyled>
    )
}
export const MakeVideSectionCarousel = () => {
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)
    const [sliderIndex, setSliderIndex] = useState(1)
    const settings1 = {
        className: 'visibleSlider slider1',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        nextArrow: (
            <Arrow />
        ),
        prevArrow: (
            <Arrow />
        ),
        asNavFor: slider2,
        ref: (slider) => {
            setSlider1(slider)
            return slider
        },
    }

    const settings2 = {
        className: 'visibleSlider slider2',
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: slider1,
        swipeToSlide: true,
        focusOnSelect: true,
        ref: (slider) => {
            setSlider2(slider)
            return slider
        },
        beforeChange: (_, index) => setSliderIndex(index + 1),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <MakeVideSectionCarouselStyled>
            <Carousel {...settings1}>
                {
                    data.map(item => (
                        <MakeVideSectionCarouselItem key={item.text}>
                            <MakeVideSectionCarouselImg src={item.image}/>
                            <MakeVideSectionCarouselBox>
                                {item.icon}
                                <MakeVideSectionCarouselTitle>{item.text}</MakeVideSectionCarouselTitle>
                                <MakeVideSectionCarouselDesc>{item.desc}</MakeVideSectionCarouselDesc>
                            </MakeVideSectionCarouselBox>
                        </MakeVideSectionCarouselItem>
                    ))
                }
            </Carousel>
            <Carousel {...settings2}>
                {
                    data.map(item => (
                        <CarouselPageStyled>
                            {
                                item.icon
                            }
                            <CarouselPageText>{item.text}</CarouselPageText>
                        </CarouselPageStyled>
                    ))
                }
            </Carousel>
            <CarouselIndex>
                <p className="carousel-index-bold">{sliderIndex}</p>
                out of {data.length}
            </CarouselIndex>
        </MakeVideSectionCarouselStyled>
    )
}
