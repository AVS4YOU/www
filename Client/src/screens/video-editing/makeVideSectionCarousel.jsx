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

  .slick-initialized .slick-slide.slick-current {
    z-index: 3 !important;
  }

  .slider1 {

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
      padding: 40px 0 48px 0;
    }
  }

  .slick-current a {
    background-color: #FFF;
    filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
  }

  @media screen and (min-width: 1386px) {
    .slider2 {
      .slick-slide {
        &:last-child a {
          margin-right: 38px;
        }

        &:first-child a {
          margin-left: 38px;
        }
      }
    }
  }

  @media screen and (max-width: 1386px) {
    .visibleSlider {
      max-width: 100%;
    }
  }


  @media screen and (max-width: 1200px) {
    .slider1 {
      .slick-list {
        padding-bottom: 150px;
      }
      
    }
  }

  @media screen and (max-width: 800px) {
    .slider2 {
      max-width: 700px;
      margin: 0 auto;

      .slick-list {
        padding: 33px 0 48px 0;
      }
    }

    .slick-current a {
      margin-left: 38px;
    }
  }

  @media screen and (max-width: 700px) {
    .slider2 {
      max-width: 100%;

      .slick-list {
        padding: 35px 0 40px 0;
      }

      .slick-slide a {
        margin: 0 auto;
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    .slider1 {
      .slick-list {
        padding-bottom: 200px;
      }
    }
  }
`

const MakeVideSectionCarouselItem = styled.div`
  position: relative;
`

const MakeVideSectionCarouselImg = styled.img`
  margin: 0 210px 0 auto;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
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
  color: #000;
  max-width: 284px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`

const CarouselPageWrapper = styled.div`
  
`

const CarouselPageStyled = styled.a`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: #000;
  min-height: 98px;
  border-radius: 5px;
  margin: 0 14px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
  
  @media screen and (max-width: 700px) {
    max-width: 120px;
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

const MakeVideSectionCarouselBox = styled.div`
  position: absolute;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0px 0px 8px 0px #FFF inset, 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
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
  left: calc(50% - 470px);

  @media screen and (max-width: 1400px) {
    left: auto;
    right: 815px;
  }

  @media screen and (max-width: 1200px) {
    right: calc(50% - 174px);
    top: 260px;
  }

  @media screen and (max-width: 700px) {
    gap: 12px;

    bottom: -95px;
    top: auto;
  }
  
  @media screen and (max-width: 500px) {
    bottom: -160px;
  }

  @media screen and (max-width: 350px) {
    width: calc(100% - 30px);
    right: 15px;
    left: 15px;
  }
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
    left: calc(50% - 465px);

    svg {
      transform: rotate(180deg);
    }
  }

  &.slick-next {
    top: calc(50% + 150px);
    left: calc(50% - 305px);
  }
  
  @media screen and (max-width: 1400px) {
    &.slick-prev {
      left: auto;
      right: 1050px;
    }

    &.slick-next {
      left: auto;
      right: 900px;
    }
  }
  
  @media screen and (max-width: 1200px) {
    &.slick-prev {
      top: auto;
      bottom: -60px;
      right: auto;
      left: calc(50% - 130px);
    }

    &.slick-next {
      top: auto;
      bottom: -66px;
      right: auto;
      left: calc(50% + 37px);
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

  bottom: 46px;
  left: calc(50% - 380px);

  .carousel-index-bold {
    margin: 0;
    font-weight: 700;
  }

  @media screen and (max-width: 1400px) {
    right: 980px;
    left: auto;
  }

  @media screen and (max-width: 1200px) {
    right: auto;
    left: calc(50% - 40px);
    bottom: 0px;
  }
`

const SliderWrapper = styled.div`
  position: relative;
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
            <Arrow/>
        ),
        prevArrow: (
            <Arrow/>
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
        speed: 100,
        ref: (slider) => {
            setSlider2(slider)
            return slider
        },
        beforeChange: (_, index) => setSliderIndex(index + 1),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    return (
        <MakeVideSectionCarouselStyled>
            <SliderWrapper>
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
                <CarouselIndex>
                    <p className="carousel-index-bold">{sliderIndex}</p>
                    out of {data.length}
                </CarouselIndex>
            </SliderWrapper>
            <Carousel {...settings2}>
                {
                    data.map(item => (
                        <CarouselPageWrapper>
                            <CarouselPageStyled>
                                {
                                    item.icon
                                }
                                <CarouselPageText>{item.text}</CarouselPageText>
                            </CarouselPageStyled>
                        </CarouselPageWrapper>
                    ))
                }
            </Carousel>
        </MakeVideSectionCarouselStyled>
    )
}
