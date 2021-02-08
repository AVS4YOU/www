import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Text from '../text';
import styled from 'styled-components';
import ImageGQL from '../image-gql';

import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';

import CloseButton from '../../images/common/icons/slider_close.svg';
import LArrowPopup from '../../images/common/icons/slider_arrow_left.svg';
import RArrowPopup from '../../images/common/icons/slider_arrow_right.svg';

const StyledCarouselWrapper = styled.div`

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

    .title-image{
        font-weight: 400;
        font-size: 48px;
        text-align: center;
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .description-image{
        font-weight: 400;
        font-size: 24px;
        text-align: center;
        margin-bottom: 30px;
    }

    .carouselImage{
        ${props => props.maxWidth ? "max-width:" + props.maxWidth + "px;"  : "max-width:722px;"}
          
        display:block !important;
        margin:auto;

        &.popup{
            img{
                object-fit: contain !important;
            }
        }

        &.visible{
            cursor: pointer;
            box-shadow: 0px 3px 6px #ffffff;
            transition: 0.15s linear;
            border: 1px solid #ECEFF5;
        
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

    @media (max-width: 500px) {
        .title-image{
            margin-top: 10px;
            font-size: 28px;
        }
    
        .description-image{
            font-size: 18px;
            max-width: 300px;
            margin: auto;
            margin-bottom: 30px;
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
            ${props => props.maxWidthPopup ? "max-width:" + props.maxWidthPopup + "px;"  : "max-width: 1116px;"}
            padding: 100px;
            box-sizing: border-box;
            height: 90vh;
            max-height: 850px;
            padding: 0;  
            width: auto !important;         
        }

        .slick-track{
            align-items: center;
            display: flex;
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

class ScreenshotsCarousel extends Component {


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
    const titleImage = this.props.titleImage;
    const descriptionImage = this.props.descriptionImage;
    const imageNames =  this.props.imageNames;
    const imageNamesPopup = this.props.imageNamesPopup;
    const altText = this.props.altText;

    const carouselImages = imageNames.length > 0 && 
        imageNames.map((imageName, i) => {
            return(
            <div key={"CarouselItem_"+i} onClick={this.toggleCarousel}>
                {titleImage.length > 0 && <Text className="title-image">{titleImage[i]}</Text>}
                {descriptionImage.length > 0 && <Text className="description-image">{descriptionImage[i]}</Text>}
                <ImageGQL className="carouselImage visible" imageName={imageName} alt={altText[i]}/>
            </div>
            )
        });

    const PopupCarouselImages = imageNamesPopup.length > 0 && 
        imageNamesPopup.map((imageName, i) => {
            return(<div key={"popupCarouselItem_"+i}><ImageGQL className="carouselImage popup" imageName={imageName} alt={altText[i]}/></div>)
        });

    return (
      <StyledCarouselWrapper maxWidth={this.props.maxWidth} id={this.props.id}>

        <StyledPopupCarousel maxWidthPopup={this.props.maxWidthPopup} CarouselIsShow={this.state.CarouselIsShow}>
            <Slider
                className="popupCarousel"
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                fade={true}
                slidesToShow={1}
            >
                {PopupCarouselImages}
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
            {carouselImages}
        </Slider>
      </StyledCarouselWrapper>
    );
  }
}

ScreenshotsCarousel.propTypes = {
    titleImage:  PropTypes.array ,
    descriptionImage: PropTypes.array
}

ScreenshotsCarousel.defaultProps = {
    titleImage:  [] ,
    descriptionImage: []
}

export default ScreenshotsCarousel