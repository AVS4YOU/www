import React, {useState} from "react";
import Slider from "react-slick";

import features from './featuresSection.data'

import {
    FeaturesSectionLgCarouselItem,
    FeaturesSectionSmCarouselItem,
    FeaturesSectionCarouselWrapper,
    FeaturesSectionLgCarouselWrapper,
    FeaturesSectionSmCarouselWrapper,
    FeaturesSectionSmCarouselItemBox,
    FeaturesSectionSmCarouselItemTitle,
    FeaturesSectionLgCarouselItemBox,
    FeaturesSectionLgCarouselItemImg,
    FeaturesSectionLgCarouselItemCard,
    FeaturesSectionLgCarouselItemTitle,
    FeaturesSectionLgCarouselItemDesc,
} from "./featuresSectionCarousel.styled";
import {
    SliderLeftArrow,
    SliderRightArrow
} from '../../../images/icons'

export const FeaturesSectionCarousel = ({t}) => {
    const [sliderLg, setSliderLg] = useState(null)
    const [sliderSm, setSliderSm] = useState(null)

    const settingsLg = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: sliderSm,
        ref: (slider) => {
            setSliderLg(slider)
            return slider
        },
    }

    const settingsSm = {
        slidesToShow:5,
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
                breakpoint: 700,
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
        <FeaturesSectionCarouselWrapper>
            <FeaturesSectionLgCarouselWrapper>
                <Slider {...settingsLg}>
                    {
                        features.map(feature => (
                            <FeaturesSectionLgCarouselItem key={feature.id} className={feature.title.toLowerCase().split(' ').join('-')}>
                                <FeaturesSectionLgCarouselItemBox>
                                    <FeaturesSectionLgCarouselItemImg src={feature.img1x} srcSet={`${feature.img2x} 2x`} />
                                    <FeaturesSectionLgCarouselItemCard>
                                        {feature.icon}
                                        <FeaturesSectionLgCarouselItemTitle>
                                            {t(feature.title)}
                                        </FeaturesSectionLgCarouselItemTitle>
                                        <FeaturesSectionLgCarouselItemDesc>
                                            {t(feature.desc)}
                                        </FeaturesSectionLgCarouselItemDesc>
                                    </FeaturesSectionLgCarouselItemCard>
                                </FeaturesSectionLgCarouselItemBox>
                            </FeaturesSectionLgCarouselItem>
                        ))
                    }
                </Slider>
            </FeaturesSectionLgCarouselWrapper>
            <FeaturesSectionSmCarouselWrapper>
                <Slider {...settingsSm}>
                    {
                        features.map(feature => (
                            <FeaturesSectionSmCarouselItem key={feature.id}>
                                <FeaturesSectionSmCarouselItemBox className="box">
                                    {feature.icon}
                                    <FeaturesSectionSmCarouselItemTitle>
                                        {t(feature.title)}
                                    </FeaturesSectionSmCarouselItemTitle>
                                </FeaturesSectionSmCarouselItemBox>
                            </FeaturesSectionSmCarouselItem>
                        ))
                    }
                </Slider>
            </FeaturesSectionSmCarouselWrapper>
        </FeaturesSectionCarouselWrapper>
    )
}
