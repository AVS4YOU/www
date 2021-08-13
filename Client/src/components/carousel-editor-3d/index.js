import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledSlider from "./styled-slide";
import Img1 from "../../images/avs-audio-editor-3d/1.png";
import Img2 from "../../images/avs-audio-editor-3d/2.png";
import Img3 from "../../images/avs-audio-editor-3d/3.png";
import Img4 from "../../images/avs-audio-editor-3d/4.png";
import Img5 from "../../images/avs-audio-editor-3d/5.png";
import Img6 from "../../images/avs-audio-editor-3d/6.png";
import Img7 from "../../images/avs-audio-editor-3d/7.png";
import Img8 from "../../images/avs-audio-editor-3d/8.png";
import Imgbtn1 from "../../images/avs-audio-editor-3d/group_1.svg";
import Imgbtn2 from "../../images/avs-audio-editor-3d/group_2.svg";
import Imgbtn3 from "../../images/avs-audio-editor-3d/group_3.svg";
import Imgbtn4 from "../../images/avs-audio-editor-3d/group_4.svg";
import Imgbtn5 from "../../images/avs-audio-editor-3d/group_5.svg";
import Imgbtn6 from "../../images/avs-audio-editor-3d/group_6.svg";
import Imgbtn7 from "../../images/avs-audio-editor-3d/group_7.svg";
import Imgbtn8 from "../../images/avs-audio-editor-3d/group_8.svg";
const Carousel = (props) => {

    const [slideState, setSlideState] = useState({
        activeSlide: 0,
        activeSlide2: 0
    });


    const ItemButton = [
        { src: Imgbtn8, text: "Normalize" },
        { src: Imgbtn1, text: "Amplify" },
        { src: Imgbtn2, text: "Fade In/ Fade Out" },
        { src: Imgbtn3, text: "Equalizer" },
        { src: Imgbtn4, text: "Delay" },
        { src: Imgbtn5, text: "Time Stretch/ Pitch Shift Effects" },
        { src: Imgbtn6, text: "Remove noise" },
        { src: Imgbtn7, text: "Special effects" }
    ];
    const Slide = [
        { header: "Normalize", text: "Align the volume of an audio track in accordance with the selected level.", src: Img1 },
        { header: "Amplify", text: "Increase or decrease the sound volume by adjusting its amplitude.", src: Img2 },
        { header: "Fade In/Fade Out", text: "Use this effect to gradually increase and decrease the sound volume.", src: Img3 },
        { header: "Equalizer", text: "Manipulate the frequency of your mix so that everything is balanced and clear.", src: Img4 },
        { header: "Delay Effects", text: "Add an echo to your audio, create the pulsating sound or change the voice of an audio track to make it sound more natural.", src: Img5 },
        { header: "Time Stretch/Pitch Shift Effects", text: "Increase or decrease the speed and the tone of your audio or play your audio backwards with Reverse effect.", src: Img6 },
        { header: "Remove noise", text: "Remove irritating sounds like roaring, hissing, crackling, etc. from your audio tracks making the sound clearer.", src: Img7 },
        { header: "Special effects", text: "Generate tones, silence, noise, instruments or rhythm track.", src: Img8 },
    ];

    const settings = {
        infinity: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        swipe: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        appendDots: dots => <div className="group-button">{dots}</div>,
        customPaging: i => (
            <div className="nFlex">
                <div className="btn-el">
                    <img
                        src={ItemButton[i].src}
                        onClick={() => handleOnClick(i)}
                    />
                </div>
                <span className="textDots">{ItemButton[i].text}</span>
            </div>
        )
    };

    const sliderRef = useRef();

    const handleOnClick = index => {
        sliderRef.current.slickGoTo(index);
    };

    const Carousel = Slide.map((it, i) =>
        <div
            className="carousel-slide"
            key={`carousel-slide-${i}`}
        >
            <div className="carousel-items">
                <div className="text-slide">
                    <h2 className="text-slide-head">{it.header}</h2>
                    <span className="text-slide-t">{it.text}</span>
                </div>
                <div className="loader-line"><div className="loading" /></div>
            </div>
            <img src={it.src} className="image-slide" />
        </div>
    );

    return (
        <StyledSlider>
            <Slider
                ref={sliderRef}
                {...settings}
            >
                {Carousel}
            </Slider>
        </StyledSlider>
    );
}

export default Carousel;