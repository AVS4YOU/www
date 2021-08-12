import React, { useRef, useState } from "react";
import Slider from "react-slick";
import StyledSlider from "./styled-slide";
import { ReactSVG } from "react-svg";
const Carousel = (props) => {

    const { Slide, ItemButton } = props;
    const [slideState, setSlideState] = useState({
        activeSlide: 0,
        activeSlide2: 0
    });


    const settings = {
        infinity: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4900,
        dots: true,
        appendDots: dots => <div className="group-button">{dots}</div>,
        customPaging: i => (
            <div className="nFlex">
                <ReactSVG
                    className="btn-el"
                    src={ItemButton[i].src}
                    onClick={() => handleOnClick(i)}
                />
                <span className="textDots">{ItemButton[i].text}</span>
            </div>
        )
    };

    const sliderRef = useRef();

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <StyledSlider>
            <Slider
                ref={sliderRef}
                {...settings}
            >
                {
                    Slide.map((it, i) =>
                        <div className="carousel-slide">
                            <div className="carousel-items">
                                <div className="text-slide">
                                    <h2 className="text-slide-head">{it.header}</h2>
                                    <span className="text-slide-t">{it.text}</span>
                                </div>
                                <div className="loader-line"><div className="loading"></div></div>
                            </div>
                            <img src={it.src} className="image-slide" />
                        </div>
                    )
                }
            </Slider>
        </StyledSlider>
    );
}

export default Carousel;