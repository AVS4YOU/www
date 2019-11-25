import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import Slide1 from '../../images/video-editor/slider1.png';
import Slide2 from '../../images/video-editor/slider2.png';

import Slide1Big from '../../images/video-editor/slider1-2x.png';
import Slide2Big from '../../images/video-editor/slider2-2x.png';

import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';

import CloseButton from '../../images/common/icons/slider_close.svg';
import LArrowPopup from '../../images/common/icons/slider_arrow_left.svg';
import RArrowPopup from '../../images/common/icons/slider_arrow_right.svg';

const StyledCarouselWrapper = styled.div`
    .slick-dots li button:before{
        color: #9A9997;
        opacity: 1;
        font-size: 10px;
    }

    .slick-dots li.slick-active button:before{
        color: #1473E6;
        opacity: 1;
    }

    .slick-dots li{
        margin: 0;
    }

    .slick-list{
        padding-bottom: 20px;
    }

    .visibleSlider{
        max-width: 900px;
        margin: 50px auto;
    }

    .slick-prev, .slick-next, .slick-prev:focus{
        width:45px;
        height:45px;
        background-color: #FAF7F2;
        border-radius: 30px;
        background-image: url(${LeftArrow});
        background-repeat: no-repeat;
        background-position: 45% 50%;
        z-index: 3;
        transition: linear 0.2s;

        &:hover{
            box-shadow: 0 20px 40px rgba(0,0,0,.1);
            background-color: #fff;
            background-image: url(${LeftArrow});
            background-repeat: no-repeat;
            background-position: 45% 50%;
        }

        &:before{
            content: none; 
        }
    }

    .slick-next, .slick-next:focus{
        background-image: url(${RightArrow});
        background-position: 55% 50%;
        background-color: #FAF7F2;
        background-repeat: no-repeat;

        &:hover{
            background-image: url(${RightArrow});
            background-position: 55% 50%;
            background-color: #ffffff;
        }
    }

    .slick-initialized .slick-slide.slick-current{
        z-index: 3 !important;
    }

    .carouselImage{
        max-width:722px;   
        display:block !important;
        margin:auto;

        &.visible{
            cursor: pointer;
            box-shadow: 0px 3px 6px #ffffff;
            transition: 0.15s linear;
        
            &:hover{ 
                box-shadow: 0px 3px 6px #00000029;
            }
        }
    }
    @media (max-width: 1024px) {
        padding: 24px;
        box-sizing: border-box;
        padding-top:0;

        .carouselImage.visible{
            box-shadow: 0px 3px 6px #00000029;
            width: 96% !important;
        }
    }

    @media (max-width: 750px) {
        padding: 0px;

        .carouselImage.visible{
            width: 90% !important;
            box-shadow: 0px 6px 30px #0000004D;

            &:hover{
                box-shadow: 0px 6px 30px #0000004D;
            }
        }

        .slick-list{
            padding-bottom: 40px;
            padding-top: 30px;
        }

        .visibleSlider{
            margin-top:20px;
        }
    }
`;

const StyledPopupCarousel = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
    display: ${props => props.CarouselIsShow ? "block" : "none"};
    background-color: rgba(51, 51, 51, 0.9);

    .popupCarousel{
        margin: auto;
        height: 100vh;
        display: grid;
        align-items: center;

        .carouselImage{
            max-width: 1200px;
            padding: 100px;
            box-sizing: border-box;
        }

        .slick-prev{
            left: 30px;
            background-image: url(${LArrowPopup});
        }
        .slick-next{
            right: 30px;
            background-image: url(${RArrowPopup});
        }

        .slick-prev, .slick-next{
            opacity: 0.7;
            width: 40px;
            height: 41px;        
            background-color: transparent;
            transition: none;

            &:hover{
                opacity: 1;
                background-color: transparent;
                box-shadow: none;
            }
        }

        .slick-next:focus{
            background-image: url(${RArrowPopup}); 
            background-color: transparent;
        }

        .slick-prev:focus{
            background-image: url(${LArrowPopup}); 
            background-color: transparent;
        }
    }

    .closeCarousel{
        background-image: url(${CloseButton});
        width: 40px;
        height: 40px;
        position: absolute;
        top: 30px;
        font-size: 36px;
        right: 30px;
        text-align: center;
        cursor: pointer;
        opacity: 0.7;

        &:hover{
            opacity: 1;
        }
    }
`;

export default class ScreenshotsCarousel extends Component {


    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null,
          CarouselIsShow: false,
          width: 0
        };
        this.toggleCarousel = this.toggleCarousel.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    toggleCarousel(){
        this.state.width > 1050 && this.setState({CarouselIsShow: !this.state.CarouselIsShow})
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
        });

        this.state.width < 1050 && 
            this.setState({ 
                CarouselIsShow: false, 
            });
    }

  render() {
    const isMobile = this.state.width < 1050;

    return (
      <StyledCarouselWrapper id={this.props.id}>

        <StyledPopupCarousel CarouselIsShow={this.state.CarouselIsShow}>
            <Slider
                className="popupCarousel"
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                fade={true}
                slidesToShow={1}
            >
                <img className="carouselImage" src={Slide1Big} alt="slide 1"/>
                <img className="carouselImage" src={Slide2Big} alt="slide 2"/>
            </Slider>
            <div onClick={this.toggleCarousel} className="closeCarousel"></div>
        </StyledPopupCarousel>

        <Slider 
            fade={true}
            arrows={isMobile ? false : true}
            dots={true}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={false}
            focusOnSelect={false}
            className="visibleSlider"
        >
          <img onClick={this.toggleCarousel} className="carouselImage visible" src={Slide1} alt="slide 1"/>
          <img onClick={this.toggleCarousel} className="carouselImage visible" src={Slide2} alt="slide 2"/>
        </Slider>
      </StyledCarouselWrapper>
    );
  }
}