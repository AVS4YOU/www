import React, {useState} from "react";
import Slider from "react-slick";

import features from './makeYourVideoSection.data'

import {
    MakeYourVideoSectionLgCarouselItem,
    MakeYourVideoSectionSmCarouselItem,
    MakeYourVideoSectionCarouselWrapper,
    MakeYourVideoSectionLgCarouselWrapper,
    MakeYourVideoSectionSmCarouselWrapper,
    MakeYourVideoSectionSmCarouselItemBox,
    MakeYourVideoSectionSmCarouselItemTitle,
    MakeYourVideoSectionLgCarouselItemBox,
    MakeYourVideoSectionLgCarouselItemImg,
    MakeYourVideoSectionLgCarouselItemCard,
    MakeYourVideoSectionLgCarouselItemTitle,
    MakeYourVideoSectionLgCarouselItemDesc,
    MakeYourVideoSectionLgCarouselControl,
    MakeYourVideoSectionLgCarouselControlCount,
    MakeYourVideoSectionLgCarouselControlDesc,
} from "./makeYourVideoSectionCarousel.styled";
import {
    SliderLeftArrow,
    SliderRightArrow
} from '../../../images/icons'

export const MakeYourVideoSectionCarousel = ({t}) => {
    const [sliderLg, setSliderLg] = useState(null)
    const [sliderSm, setSliderSm] = useState(null)
    const [slideIndex, setSlideIndex] = useState(1)

    const settingsLg = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: sliderSm,
        nextArrow: <SliderRightArrow/>,
        prevArrow: <SliderLeftArrow/>,
        beforeChange: (curr, next) => setSlideIndex(next + 1),
        ref: (slider) => {
            setSliderLg(slider)
            return slider
        },
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    arrows: true,
                }
            }
        ]
    }

    const settingsSm = {
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: sliderLg,
        ref: (slider) => {
            setSliderSm(slider)
            return slider
        },
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    }

    return (
        <MakeYourVideoSectionCarouselWrapper>
            <MakeYourVideoSectionLgCarouselWrapper>
                <Slider {...settingsLg}>
                    {
                        features.map(feature => (
                            <MakeYourVideoSectionLgCarouselItem key={feature.id}
                                                                className={feature.title.toLowerCase().split(' ').join('-')}>
                                <MakeYourVideoSectionLgCarouselItemBox>
                                    <MakeYourVideoSectionLgCarouselItemImg src={feature.img1x}
                                                                           srcSet={`${feature.img2x} 2x`}/>
                                    <MakeYourVideoSectionLgCarouselItemCard>
                                        {feature.icon}
                                        <MakeYourVideoSectionLgCarouselItemTitle>
                                            {t(feature.title)}
                                        </MakeYourVideoSectionLgCarouselItemTitle>
                                        <MakeYourVideoSectionLgCarouselItemDesc>
                                            {t(feature.desc)}
                                        </MakeYourVideoSectionLgCarouselItemDesc>
                                    </MakeYourVideoSectionLgCarouselItemCard>
                                </MakeYourVideoSectionLgCarouselItemBox>
                            </MakeYourVideoSectionLgCarouselItem>
                        ))
                    }
                </Slider>
                <MakeYourVideoSectionLgCarouselControl>
                    <MakeYourVideoSectionLgCarouselControlCount>{slideIndex}</MakeYourVideoSectionLgCarouselControlCount>
                    <MakeYourVideoSectionLgCarouselControlDesc>
                        {t("out of")} {features.length}
                    </MakeYourVideoSectionLgCarouselControlDesc>
                </MakeYourVideoSectionLgCarouselControl>
            </MakeYourVideoSectionLgCarouselWrapper>
            <MakeYourVideoSectionSmCarouselWrapper>
                <Slider {...settingsSm}>
                    {
                        features.map(feature => (
                            <MakeYourVideoSectionSmCarouselItem key={feature.id}>
                                <MakeYourVideoSectionSmCarouselItemBox className="box">
                                    {feature.icon}
                                    <MakeYourVideoSectionSmCarouselItemTitle>
                                        {t(feature.title)}
                                    </MakeYourVideoSectionSmCarouselItemTitle>
                                </MakeYourVideoSectionSmCarouselItemBox>
                            </MakeYourVideoSectionSmCarouselItem>
                        ))
                    }
                </Slider>
            </MakeYourVideoSectionSmCarouselWrapper>
        </MakeYourVideoSectionCarouselWrapper>
    )
}
