import React, {useRef, useState} from "react";
import Carousel from "react-slick";
import cn from 'classnames'

import {
    FeaturesSectionContainer,
    FeaturesSectionStyled,
    FeaturesSectionTitle,
    FeaturesSectionCarouselWrapper,
    FeaturesSectionCarouselItem,
    FeaturesSectionCarouselItemBox,
    FeaturesSectionCarouselItemImg,
    FeaturesSectionCarouselItemCard,
    FeaturesSectionCarouselItemCardTitle,
    FeaturesSectionCarouselItemCardDesc,
    FeaturesSectionCarouselControl,
    FeaturesSectionCarouselControlBox,
    FeaturesSectionCarouselControlCurrent,
    FeaturesSectionCarouselControlButton,
} from "./featuresSection.styled";
import {
    SliderLeftArrow,
    SliderRightArrow
} from '../../../images/icons'
import features from "./featuresSection.data";

const FeaturesSectionCarousel = ({t}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [disabled, setDisabled] = useState({
        prev: true,
        next: false,
    })
    const [slider, setSlider] = useState(null)

    const onChange = (current) => {
        setDisabled({
            prev: current + 1 === 1,
            next: current + 1 === features.length
        })
        setCurrentSlide(current)
    }

    const onClick = (dir) => {
        if(dir === 'prev') {
            slider.slickGoTo(currentSlide - 1)
        }

        else {
            slider.slickGoTo(currentSlide + 1)
        }
    }

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: onChange,
        ref: (slider) => setSlider(slider)
    }

    return (
        <FeaturesSectionCarouselWrapper>
            <Carousel {...settings}>
                {
                    features.map(feature => (
                        <FeaturesSectionCarouselItem key={feature.id}>
                            <FeaturesSectionCarouselItemBox>
                                <FeaturesSectionCarouselItemCard>
                                    <FeaturesSectionCarouselItemCardTitle>
                                        {t(feature.title)}
                                    </FeaturesSectionCarouselItemCardTitle>
                                    <FeaturesSectionCarouselItemCardDesc>
                                        {t(feature.desc)}
                                    </FeaturesSectionCarouselItemCardDesc>
                                </FeaturesSectionCarouselItemCard>
                                <FeaturesSectionCarouselItemImg
                                    src={feature.img.img1x}
                                    srcSet={`${feature.img.img2x} 2x`}
                                />
                            </FeaturesSectionCarouselItemBox>
                        </FeaturesSectionCarouselItem>
                    ))
                }
            </Carousel>
            <FeaturesSectionCarouselControl>
                <FeaturesSectionCarouselControlButton
                    disabled={disabled.prev}
                    onClick={() => onClick('prev')}
                >
                    <SliderLeftArrow isDisabled={disabled.prev}/>
                </FeaturesSectionCarouselControlButton>
                <FeaturesSectionCarouselControlBox>
                    <FeaturesSectionCarouselControlCurrent>{currentSlide + 1}</FeaturesSectionCarouselControlCurrent>
                    {t('out of')}
                    <span>{features.length}</span>
                </FeaturesSectionCarouselControlBox>
                <FeaturesSectionCarouselControlButton
                    disabled={disabled.next}
                    onClick={() => onClick('next')}
                >
                    <SliderRightArrow isDisabled={disabled.next}/>
                </FeaturesSectionCarouselControlButton>
            </FeaturesSectionCarouselControl>
        </FeaturesSectionCarouselWrapper>
    )
}

export const FeaturesSection = ({t}) => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer>
                <FeaturesSectionTitle>{t('Video Cutting Features')}</FeaturesSectionTitle>
                <FeaturesSectionCarousel t={t}/>
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
