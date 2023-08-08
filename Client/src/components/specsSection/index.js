import React from "react";
import Text from "../text";
import styled from "styled-components";
import {ChevronRight, Device, Disc, Screen, Standard} from "../../images/video-editing/icons";
import {SectionTitle} from "../sectionTitle";
import Carousel from 'react-slick'

const SpecsSectionStyled = styled.div`
  padding: 112px 20px;
  background-color: #32393E;

  * {
    box-sizing: border-box;
  }

  .visibleSlider {
    max-width: 1240px;
    margin-top: 48px;
    padding-bottom: 32px;
  }
  
  .slick-list {
    //margin: 0 20px;
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
    height: 290px;

    & > div {
      height: 100%;
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 86px 0 122px 0;
    .visibleSlider {
      max-width: calc(100% - 80px);
    }
  }

  @media screen and (max-width: 800px) {
    padding: 48px 0 90px 0;
  }
`

const SpecsSectionContainer = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const SpecsSectionItemWrapper = styled.div`
  height: 100%;
`

const SpecsSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid #555;
  height: 100%;
  margin: 0 30px;
`

const SpecsSectionItemTitle = styled(Text)`
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

const SpecsSectionItemDesc = styled(Text)`
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

const ArrowStyled = styled.a`
  width: max-content;
  height: max-content;
  z-index: 10;
  
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

const Arrow = (props) => {
    return (
        <ArrowStyled {...props}>
            <ChevronRight />
        </ArrowStyled>
    )
}

export const SpecsSection = () => {
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'visibleSlider',
        nextArrow: (
            <Arrow />
        ),
        prevArrow: (
            <Arrow />
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <SpecsSectionStyled>
            <SpecsSectionContainer>
                <SectionTitle
                    title="Share your story the way you like"
                    desc="Save the ready video project onto your computer hard disk drive, upload it to modern gadgets, share
                    online on popular web hostings or replenish your video collection with a new DVD/Blu-ray disc."
                />
                <Carousel {...settings}>
                    <SpecsSectionItemWrapper>
                        <SpecsSectionItem>
                            <Standard style={{flexShrink: 0}}/>
                            <SpecsSectionItemTitle as="h3">
                                Standard/HDV video file
                            </SpecsSectionItemTitle>
                            <SpecsSectionItemDesc>
                                MP4, AVI, DVD, MOV, MPEG, WMV, MKV, M2TS, etc.
                            </SpecsSectionItemDesc>
                        </SpecsSectionItem>
                    </SpecsSectionItemWrapper>
                    <SpecsSectionItemWrapper>
                        <SpecsSectionItem>
                            <Disc style={{flexShrink: 0}}/>
                            <SpecsSectionItemTitle as="h3">
                                Save to Disc
                            </SpecsSectionItemTitle>
                            <SpecsSectionItemDesc>
                                Create a DVD-video or Blu-ray disc with a menu
                            </SpecsSectionItemDesc>
                        </SpecsSectionItem>
                    </SpecsSectionItemWrapper>
                    <SpecsSectionItemWrapper>
                        <SpecsSectionItem>
                            <Device style={{flexShrink: 0}}/>
                            <SpecsSectionItemTitle as="h3">
                                Devices
                            </SpecsSectionItemTitle>
                            <SpecsSectionItemDesc>
                                Apple iPhone, iPad, Samsung, Sony PSP, BlackBerry
                            </SpecsSectionItemDesc>
                        </SpecsSectionItem>
                    </SpecsSectionItemWrapper>
                    <SpecsSectionItemWrapper>
                        <SpecsSectionItem>
                            <Screen style={{flexShrink: 0}}/>
                            <SpecsSectionItemTitle as="h3">
                                Save for Web
                            </SpecsSectionItemTitle>
                            <SpecsSectionItemDesc>
                                Upload to YouTube, Facebook, Telly, Dropbox
                            </SpecsSectionItemDesc>
                        </SpecsSectionItem>
                    </SpecsSectionItemWrapper>
                </Carousel>
            </SpecsSectionContainer>
        </SpecsSectionStyled>
    )
}
