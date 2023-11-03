import React from "react";
import Carousel from 'react-slick'

import {SliderRightArrow} from "../../../images/icons";
import {
    ArrowStyled,
    SpecsSectionContainer,
    SpecsSectionItem, SpecsSectionItemDesc,
    SpecsSectionItemTitle,
    SpecsSectionItemWrapper,
    SpecsSectionStyled
} from './specsSection.styled'
import {SectionTitle} from "../../../components/sectionTitle";
import specs from "./specsSection.data";

const Arrow = (props) => {
    return (
        <ArrowStyled {...props}>
            <SliderRightArrow/>
        </ArrowStyled>
    )
}

export const SpecsSection = ({t}) => {
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'visibleSlider',
        nextArrow: (
            <Arrow/>
        ),
        prevArrow: (
            <Arrow/>
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
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    }
    return (
        <SpecsSectionStyled>
            <SpecsSectionContainer>
                <SectionTitle
                    title={t('Share your story the way you like')}
                    desc={t(`Save the ready video project onto your computer hard disk drive, upload it to modern gadgets, share
                    online on popular web hostings or replenish your video collection with a new DVD/Blu-ray disc.`)}
                />
                <Carousel {...settings}>
                    {
                        specs.map(spec => (
                            <SpecsSectionItemWrapper key={spec.id}>
                                <SpecsSectionItem>
                                    {
                                        spec.icon
                                    }
                                    <SpecsSectionItemTitle as="h3">
                                        {t(spec.title)}
                                    </SpecsSectionItemTitle>
                                    <SpecsSectionItemDesc>
                                        {t(spec.desc)}
                                    </SpecsSectionItemDesc>
                                </SpecsSectionItem>
                            </SpecsSectionItemWrapper>
                        ))
                    }
                </Carousel>
            </SpecsSectionContainer>
        </SpecsSectionStyled>
    )
}
