import React, {useState} from "react";
import styled from "styled-components";
import Carousel from 'react-slick'

import Image2 from '../../images/video-editing/pic1.1.png'
import Image1 from '../../images/video-editing/pic1.2.png'
import Image3 from '../../images/video-editing/pic1.3.png'
import Elements from '../../images/video-editing/carousel-elements.png'
import {ChevronLeftDisabled, ChevronRight} from "../../images/video-editing/icons";


const CreatorsSectionCarouselStyled = styled.div`
  * {
    box-sizing: border-box;
  }

  .slider1 {
    max-width: 456px;
    margin: 0 auto 50px auto;
    padding-bottom: 40px;

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
  }

  .slider2 {
    max-width: 100%;

    .slick-center .creators-section__item-mask {
      opacity: 0;
    }
  }

  .slick-initialized .slick-slide.slick-current {
    z-index: 3 !important;
  }

  @media screen and (max-width: 800px) {
    .slider1 {
      margin-bottom: 90px;
      padding-bottom: 32px;
    }
  }
  @media screen and (max-width: 600px) {
    .slider1 {
      max-width: 100%;
      margin-bottom: 55px;
      padding-bottom: 36px;
    }
  }
`

const CreatorsSectionCarouselWrapper = styled.div`
  padding: 48px 0;
  background-color: #EEEFF0;
  background-image: url("${Elements}"), url("${Elements}");
  background-repeat: no-repeat, no-repeat;
  background-position: center calc(100% - 17px), center 17px;
  background-size: auto 15px;

  @media screen and (min-width: 1900px) {
    background-size: 100% 15px;
  }

  @media screen and (max-width: 800px) {
    padding: 54px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 32px 0;
    background-position: center calc(100% - 8px), center 8px;
    background-size: auto 8px;
  }
`

const CreatorsSectionCarouselItem = styled.div`

`

const CreatorsSectionCarouselItemTitle = styled.h3`
  margin: 0 0 16px 0;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 30px;
  }
`

const CreatorsSectionCarouselItemDesc = styled.p`
  color: #000;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  max-width: calc(100% - 70px);
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: normal;
  }
`

const ArrowStyled = styled.a`
  width: max-content;
  height: max-content;
  z-index: 10;

  &:before {
    content: none;
  }

  &.slick-next {

    svg:first-child {
      display: block;
      transform: translate(40px, -32px);
    }

    svg:last-child {
      display: none;
      transform: rotate(-180deg) translate(-20px, 34px);
    }

    &.slick-disabled {
      svg:first-child {
        display: none;
      }

      svg:last-child {
        display: block;
      }
    }
  }

  &.slick-prev {
    svg:first-child {
      display: block;
      transform: rotate(180deg) translate(25px,36px);
    }

    svg:last-child {
      display: none;
      transform: translate(-2px,-31px);
    }

    &.slick-disabled {
      svg:first-child {
        display: none;
      }

      svg:last-child {
        display: block;
      }
    }
  }

  @media screen and (max-width: 600px) {
    &.slick-next {
      transform: translate(-10px, -32px);
    }

    &.slick-prev {
      transform: translate(10px, -45px);
    }
  }
`

const CreatorsSectionCarouselImage = styled.img`
  width: 100%;
  height: 100%;
`

const CreatorsSectionCarouselImageWrapper = styled.div`
  position: relative;
`

const CreatorsSectionCarouselImageMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #D9D9D9;
  opacity: 0.7;
  transition: opacity, 300ms ease-in-out;
`

const Arrow = (props) => {
    return (
        <ArrowStyled {...props}>
            <ChevronRight/>
            <ChevronLeftDisabled />
        </ArrowStyled>
    )
}

const data = [
    {
        title: 'Home Video Editing',
        desc: 'Make videos for special occasions such as birthday parties, weddings, family holidays, trips, greeting cards and much more!',
        image: Image1,
    },
    {
        title: 'Business Video Editor',
        desc: 'Create business presentations, video ads for marketing, deliver branded videos and company’s virtual events to grab everyone’s attention. Video recording, editing and sharing - all in one place.',
        image: Image2,
    },
    {
        title: 'Teaching and Learning',
        desc: 'Make the learning process productive and engaging with demos, how-to videos and online courses.\n',
        image: Image3,
    },
]

export const CreatorsSectionCarousel = () => {
    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)
    const settings1 = {
        dots: true,
        className: 'visibleSlider slider1',
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
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                }
            }
        ]
    }
    const settings2 = {
        className: 'visibleSlider slider2',
        dots: false,
        arrows: false,
        asNavFor: slider1,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "33%",
        focusOnSelect: true,
        ref: (slider) => {
            setSlider2(slider)
            return slider
        },
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    centerPadding: "25%",
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: "44px",
                }
            }
        ]

    }
    return (
        <CreatorsSectionCarouselStyled>
            <Carousel {...settings1}>
                {
                    data.map(item => (
                        <CreatorsSectionCarouselItem>
                            <CreatorsSectionCarouselItemTitle>{item.title}</CreatorsSectionCarouselItemTitle>
                            <CreatorsSectionCarouselItemDesc>{item.desc}</CreatorsSectionCarouselItemDesc>
                        </CreatorsSectionCarouselItem>
                    ))
                }
            </Carousel>
            <CreatorsSectionCarouselWrapper>
                <Carousel {...settings2}>
                    {
                        data.map(item => (
                            <>
                                <CreatorsSectionCarouselImageWrapper>
                                    <CreatorsSectionCarouselImage src={item.image}/>
                                    <CreatorsSectionCarouselImageMask className="creators-section__item-mask"/>
                                </CreatorsSectionCarouselImageWrapper>
                            </>
                        ))
                    }
                </Carousel>
            </CreatorsSectionCarouselWrapper>
        </CreatorsSectionCarouselStyled>
    )
}
