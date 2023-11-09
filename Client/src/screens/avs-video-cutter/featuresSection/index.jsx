import React from "react";
import Carousel from "react-slick";

import {
    FeaturesSectionContainer,
    FeaturesSectionStyled,
    FeaturesSectionTitle,
    FeaturesSectionCarouselWrapper,
    FeaturesSectionCarouselItem,
    FeaturesSectionCarouselItemBox,
} from "./featuresSection.styled";
import {
    SliderLeftArrow,
    SliderRightArrow
} from '../../../images/icons'
import features from "./featuresSection.data";

const FeaturesSectionCarouselArrow = ({dir, ...otherProps}) => {
    console.log(otherProps)
    if(dir === 'next') {
        return  (
            <SliderRightArrow {...otherProps} />
        )
    }

    return (
        <SliderLeftArrow {...otherProps} />
    )
}

const FeaturesSectionCarousel = () => {

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <FeaturesSectionCarouselArrow dir="next" />,
        prevArrow: <FeaturesSectionCarouselArrow dir="prev" />,
    }

    return (
        <FeaturesSectionCarouselWrapper>
            <Carousel {...settings}>
                {
                    features.map(feature => (
                        <FeaturesSectionCarouselItem key={feature.id}>
                            <FeaturesSectionCarouselItemBox>

                            </FeaturesSectionCarouselItemBox>
                        </FeaturesSectionCarouselItem>
                    ))
                }
            </Carousel>
        </FeaturesSectionCarouselWrapper>
    )
}

export const FeaturesSection = ({t}) => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer>
                <FeaturesSectionTitle>{t('Video Cutting Features')}</FeaturesSectionTitle>
                <FeaturesSectionCarousel />
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
