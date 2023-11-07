import React, {useState} from "react";
import Slider from "react-slick";

import {
    PowerSectionStyled,
    PowerSectionContainer,
    PowerSectionTitle,
    PowerSectionMiniCarouselItem,
    PowerSectionMiniCarouselItemTitle,
    PowerSectionMiniCarouselItemDesc,
    PowerSectionMiniCarouselWrapper,
    PowerSectionMiniCarouselItemBox,
    PowerSectionLargeCarouselWrapper,
    PowerSectionLargeCarouselItem,
    PowerSectionLargeCarouselItemImg,
    PowerSectionLink,
} from './powerSection.styled'
import {SliderLeftArrow, SliderRightArrow} from "../../../images/icons";
import powers from './powerSection.data'

const ReviewsCarouselArrow = (props) => {
    const {dir, ...otherProps} = props;

    if (dir === 'right') {
        return (
            <SliderRightArrow {...otherProps} isDisabled={props.className.includes('disabled')}/>
        )
    }

    return (
        <SliderLeftArrow {...otherProps} isDisabled={props.className.includes('disabled')}/>
    )
}

const PowerSectionMiniCarousel = ({t, largeCarousel, setMiniCarousel, miniCarousel}) => {

    const onRef = (carousel) => {
        setMiniCarousel(carousel)
        return carousel
    }

    const beforeChange = (current, next) => {
        if (next === 0) {
            largeCarousel.slickGoTo(1)
        }
        if (next === 1) {
            largeCarousel.slickGoTo(4)
        }
        if (next === 2) {
            largeCarousel.slickGoTo(7)
        }
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        nextArrow: <ReviewsCarouselArrow dir="right"/>,
        prevArrow: <ReviewsCarouselArrow dir="left"/>,
        beforeChange,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
        ]
    }

    return (
        <PowerSectionMiniCarouselWrapper>
            <Slider {...settings} ref={onRef}>
                {
                    powers.map(power => (
                        <PowerSectionMiniCarouselItem key={power.id}>
                            <PowerSectionMiniCarouselItemBox>
                                <PowerSectionMiniCarouselItemTitle>{t(power.title)}</PowerSectionMiniCarouselItemTitle>
                                <PowerSectionMiniCarouselItemDesc>{t(power.desc)}</PowerSectionMiniCarouselItemDesc>
                            </PowerSectionMiniCarouselItemBox>
                        </PowerSectionMiniCarouselItem>
                    ))
                }
            </Slider>
        </PowerSectionMiniCarouselWrapper>
    )
}

const PowerSectionLargeCarousel = ({largeCarousel, setLargeCarousel, miniCarousel}) => {

   const beforeChange = (current, next) => {
        miniCarousel.slickGoTo(Math.floor((next) / 3))
    }

    const onRef = (carousel) => {
        setLargeCarousel(carousel)
        return carousel
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        initialSlide: 1,        beforeChange,
                }
    return (
        <PowerSectionLargeCarouselWrapper>
            <Slider className="imgCarousel" {...settings} ref={onRef}>
                {
                    powers.map((power) => power.img.map(img => (
                        <PowerSectionLargeCarouselItem key={img.id} className="slick">
                            <PowerSectionLargeCarouselItemImg src={img.md} srcSet={`${img.lg} 2x`}/>
                        </PowerSectionLargeCarouselItem>
                    )))
                }
            </Slider>
        </PowerSectionLargeCarouselWrapper>
    )
}

export const PowerSection = ({t}) => {
    const [miniCarousel, setMiniCarousel] = useState(null)
    const [largeCarousel, setLargeCarousel] = useState(null)


    return (
        <PowerSectionStyled>
            <PowerSectionContainer>
                <PowerSectionTitle>{t("Easy Video Maker for Everyone")}</PowerSectionTitle>
                <PowerSectionMiniCarousel
                    t={t} largeCarousel={largeCarousel}
                    setMiniCarousel={setMiniCarousel}
                    miniCarousel={miniCarousel}
                />
            </PowerSectionContainer>
            <PowerSectionLargeCarousel
                miniCarousel={miniCarousel}
                setLargeCarousel={setLargeCarousel}
                largeCarousel={largeCarousel}
            />
            <PowerSectionLink href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">{t("Try AVS Slideshow Maker")}</PowerSectionLink>     
        </PowerSectionStyled>
    )
}
