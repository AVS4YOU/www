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
        // largeCarousel.slickGoTo(20)
    }

    const settings = {
        infinite: false,
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
        // miniCarousel.slickGoTo(Math.floor((next + 1) / 3))
    }

    const onRef = (carousel) => {
        setLargeCarousel(carousel)
        return carousel
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "300px",
        initialSlide: 1,
        beforeChange,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: "200px",
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: "100px"
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: "50px"
                }
            }
        ]
    }
    return (
        <PowerSectionLargeCarouselWrapper>
            <Slider {...settings} ref={onRef}>
                {
                    powers.map((power) => power.img.map(img => (
                        <PowerSectionLargeCarouselItem key={img.id}>
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
                <PowerSectionTitle>{t("Harness the power of slideshow")}</PowerSectionTitle>
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
            <PowerSectionLink>{t("Try AVS Slideshow Maker")}</PowerSectionLink>
        </PowerSectionStyled>
    )
}
