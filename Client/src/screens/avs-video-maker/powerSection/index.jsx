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
        console.log(next)
        if (next === 0) {
            largeCarousel.slickGoTo(1)
        }
        if (next === 1) {
            largeCarousel.slickGoTo(4)
        }
        if (next === 2) {
            largeCarousel.slickGoTo(7)
        }

        if(next === 3) {
            largeCarousel.slickGoTo(10)
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

const PowerSectionLargeCarousel = ({setLargeCarousel, miniCarousel}) => {

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
        centerPadding: '0px',
        beforeChange,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }
        ]
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
            />
        </PowerSectionStyled>
    )
}
