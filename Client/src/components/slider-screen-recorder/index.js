import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Text from '../text';


/* */
import Crop from "../../images/editor-screen-recorder/crop_pic.png";
import Rotate from "../../images/editor-screen-recorder/rotare_pic.png";
import SplitJoin from "../../images/editor-screen-recorder/split_and_join_pic.png";
import Trim from "../../images/editor-screen-recorder/trim_pic.png";
import TrimBtn from "../../images/editor-screen-recorder/svg/trim_pic.svg";
import CropBtn from "../../images/editor-screen-recorder/svg/crop_pic.svg";
import RotateBtn from "../../images/editor-screen-recorder/svg/rotate_pic.svg";
import SplitBtn from "../../images/editor-screen-recorder/svg/split_pic.svg";


/* */
import AudioOverlayPic from "../../images/editor-screen-recorder/svg/audio-overlay-pic.svg";
import VideoOverlayPic from "../../images/editor-screen-recorder/svg/video-overlay-pic.svg";
import AudioOverlay from "../../images/editor-screen-recorder/audio-overlay-sl.png";
import VideoOverlay from "../../images/editor-screen-recorder/video-overlay-sl.png";


/* */
import ColorCorPic from "../../images/editor-screen-recorder/svg/color_corr_pic.svg";
import SpeedCtrlPic from "../../images/editor-screen-recorder/svg/speed_ctrl_pic.svg";
import StabPic from "../../images/editor-screen-recorder/svg/stab_pic.svg";
import SpecEffectsPic from "../../images/editor-screen-recorder/svg/spec_effect_pic.svg";
import ColorCor from "../../images/editor-screen-recorder/color_correction.png";
import SpeedCtrl from "../../images/editor-screen-recorder/speed_cntl.png";
import Stab from "../../images/editor-screen-recorder/stabilization_req.png";
import SpecEffects from "../../images/editor-screen-recorder/spec_effects_req.png";


/* */
import PanZoom from "../../images/editor-screen-recorder/pan_and_zoom.png";
import PictInPict from "../../images/editor-screen-recorder/picture_in_picture.png";
import Chromakey from "../../images/editor-screen-recorder/chromakey_req.png";
import AnimCaptions from "../../images/editor-screen-recorder/animated_captions.png";
import TiltShift from "../../images/editor-screen-recorder/tilt_shift.png";
import SlowMotion from "../../images/editor-screen-recorder/slow_motion.png";
import PanZoomPic from "../../images/editor-screen-recorder/svg/pan_zoom_pic.svg";
import PictInPictPic from "../../images/editor-screen-recorder/svg/pict_in_pict.svg";
import ChromakeyPic from "../../images/avs-video-editor-final/cinema-slider/frame/Chroma-Key.svg";
import AnimCaptionsPic from "../../images/avs-video-editor-final/cinema-slider/frame/Text&Graphics.svg";
import TiltShiftPic from "../../images/editor-screen-recorder/svg/tilt_shift_pic.svg";
import SlowMotionPic from "../../images/editor-screen-recorder/svg/slow_motion_pic.svg";



const SliderStyle = styled.div`
max-width: 1180px;
max-height: 100%;
margin: 0 auto;

.image-screen-slider{
  margin-left: auto;
  margin-right: auto;
  width: 696px;
  background-color: #fff; 
  height: 385px; 
}

.screen-recorder-sliders{
  display: -ms-flexbox;
  display: grid;
  grid-row: 1fr;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 45px;
  padding-top: 45px;
  /********                 *****/
  .screen-recorder-slider-left{
      outline: none;
      .img-slider{
              .img-details{
                  position: relative;
                  display: inline-block;
                  width: 696px;
                  height: 385px; 
                  z-index: 3;
                  top: 0px;
                  float: right;
                  }
        }  
  }
  .text-screen-left{
    margin-left: 30px;
  }

  /********                 *****/
  .screen-recorder-slider-right{
    outline: none;
    .img-slider{
            .img-details{
                position: relative;
                display: inline-block;
                width: 696px;
                height: 385px; 
                z-index: 3;
                top: 0px;
                float: right;
                }
      }  
}
.text-screen-right{
  margin-left: 0px;
}
}




.description-text-screen{
  max-width: 454px;
  font-size: 16px;
  line-height: 28px;
  color: #32393E;
  padding-bottom: 21px;
}

.header-text-screen{
  max-width: 454px;
  font-size: 25px;
  line-height: 38px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #32393E;
}

#scrollLinksWrapperRR{
   border-spacing: 0;
   float: left;
   div{
    display: inline-grid;
    display: -ms-inline-flexbox;
   }
   #scrollLinksBtn{
    margin-right: 30px;
   }
}

#containerRR{
  #scrollLinksWrapperRR{
    margin-top: 20px;
  }
}
#text-screen-right-last{
  width: 454px;
  margin-right: 30px;
}
.scrollLinksWrapper {
  padding: 0;
  .scrollToButton {
    display: table-cell;
    min-width: 95px;
    max-width: 95px;
    padding: 5px;
    padding-top: 50px;
    background-size: 36px;
    border: 1px solid rgba(50, 57, 62, 0.15);
    box-sizing: border-box;
    border-radius: 5px;
    background-position: 50% 15px;
    p{
      font-size: 11px;
      color: #32393E;
      height: 38px;
      max-width: 95px;
      vertical-align: middle;
      margin: 0 auto;
    }
  }
}
.scrollLinksWrapper> div:hover{
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
}
}`;


export class ScreenRecorderSlider extends Component {  
  
  render() {  
      const settings = {
          fade: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinity: false,
          centerMode: false,
          swipeToSlide: false,
          autoplay: false, 
          nextArrow: false,
          prevArrow: false,
        };

      const imageSliderTCSJR = [
        {
          image: Trim,
          id: 0,
        },
        {
          image: Crop,
          id: 1,
        },
        {
          image: SplitJoin,
          id: 2,
        },
        {
          image: Rotate,
          id: 3,
        },
      ];

      const imageSliderAV = [
        {
          image: VideoOverlay,
          id: 0,
        },
        {
          image: AudioOverlay,
          id: 1,
        }
      ];

      const imageSliderMake = [
        {
          image: SpecEffects,
          id: 0,
        },
        {
          image: Stab,
          id: 1,
        },
        {
          image: SpeedCtrl,
          id: 2,
        },
        {
          image: ColorCor,
          id: 3,
        }
      ]; 

      const imageSliderOther = [
        {
          image: PanZoom,
          id: 0,
        },
        {
          image: PictInPict,
          id: 1,
        },
        {
          image: Chromakey,
          id: 2,
        },
        {
          image: AnimCaptions,
          id: 3,
        },
        {
          image: TiltShift,
          id: 4,
        },
        {
          image: SlowMotion,
          id: 5,
        }
      ]; 

        const SliderTCSJR = () =>  
        imageSliderTCSJR.map((num, index) => (
          <div className="screen-recorder-slider-left">
            <div className="img-slider">  
                <img className="img-details" src= {num.image} alt=""/>
            </div>  
          </div>
        ));  
        
        const SliderAV = () =>  
        imageSliderAV.map((num, index) => (
          <div className="screen-recorder-slider-left">
            <div className="img-slider">  
                <img className="img-details" src= {num.image} alt=""/>
            </div>  
          </div>
        ));  
        
        
        const SliderMake = () =>  
        imageSliderMake.map((num, index) => (
          <div className="screen-recorder-slider-right">
            <div className="img-slider">  
                <img className="img-details" src= {num.image} alt=""/>
            </div>  
          </div>
        )); 

        const SliderOther = () =>  
        imageSliderOther.map((num, index) => (
          <div className="screen-recorder-slider-right">
            <div className="img-slider">  
                <img className="img-details" src= {num.image} alt=""/>
            </div>  
          </div>
        )); 
 
return (
  <div className="main-screen-slider">
  <Text align="center" className="screen-recorder-header-slider" as="h5" color="#32393e" fontWeight={700} fontSize={32} >{this.props.headerDescription}</Text>
  <SliderStyle>



    <div className="screen-recorder-sliders">
            <Slider
                className="image-screen-slider" 
                {...settings}
                ref={TCSJRSlider => (this.TCSJRSlider = TCSJRSlider)} >
                {SliderTCSJR()}
            </Slider>
            <div>
              <div className="text-screen-left">
                <Text className="header-text-screen">
                    {this.props.headerDescriptionSliderTCSJR}                   
                </Text>
                <Text className="description-text-screen">
                {this.props.descriptionSliderTCSJR} 
                </Text>
              </div>
              <div className="container">  
                <div className="scrollLinksWrapper">
                  <div onClick={() => this.TCSJRSlider.slickGoTo(0)} style={{ backgroundImage: `url(${TrimBtn})`, backgroundSize: `30px` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn1SliderTCSJR}</Text>
                  </div> 
                  <div onClick={() => this.TCSJRSlider.slickGoTo(1)} style={{ backgroundImage: `url(${CropBtn})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn2SliderTCSJR}</Text>
                  </div> 
                  <div onClick={() => this.TCSJRSlider.slickGoTo(2)} style={{ backgroundImage: `url(${SplitBtn})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn3SliderTCSJR}</Text>
                  </div> 
                  <div onClick={() => this.TCSJRSlider.slickGoTo(3)} style={{ backgroundImage: `url(${RotateBtn})`, backgroundSize: `46px` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn4SliderTCSJR}</Text>
                  </div> 
                </div>
              </div>
            </div>
    </div>  



    <div className="screen-recorder-sliders">
            <div>
              <div className="text-screen-right">
                <Text className="header-text-screen">
                {this.props.headerDescriptionSliderAV}            
                </Text>
                <Text className="description-text-screen">
                {this.props.descriptionSliderAV}
                </Text>
              </div>
              <div className="container">  
                <div className="scrollLinksWrapper" id="scrollLinksWrapperRR">
                  <div onClick={() => this.AVslider.slickGoTo(0)} style={{ backgroundImage: `url(${VideoOverlayPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn1SliderAV}</Text>
                  </div> 
                  <div onClick={() => this.AVslider.slickGoTo(1)} style={{ backgroundImage: `url(${AudioOverlayPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn2SliderAV}</Text>
                  </div> 
                </div>
              </div>
            </div>
            <Slider
                className="image-screen-slider" 
                ref={AVslider => (this.AVslider = AVslider)}
                {...settings}>
                {SliderAV()}
            </Slider>
    </div> 
    


    <div className="screen-recorder-sliders">
            <Slider
                className="image-screen-slider" 
                {...settings}
                ref={MakeSlider => (this.MakeSlider = MakeSlider)} >
                {SliderMake()}
            </Slider>
            <div>
              <div className="text-screen-left">
                <Text className="header-text-screen">
                {this.props.headerDescriptionSliderMake}        
                </Text>
                <Text className="description-text-screen">
                {this.props.descriptionSliderMake}   
                </Text>
              </div>
              <div className="container">  
                <div className="scrollLinksWrapper">
                  <div onClick={() => this.MakeSlider.slickGoTo(0)} style={{ backgroundImage: `url(${SpecEffectsPic})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn1SliderMake}</Text>
                  </div> 
                  <div onClick={() => this.MakeSlider.slickGoTo(1)} style={{ backgroundImage: `url(${StabPic})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn2SliderMake}</Text>
                  </div> 
                  <div onClick={() => this.MakeSlider.slickGoTo(2)} style={{ backgroundImage: `url(${SpeedCtrlPic})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn3SliderMake}</Text>
                  </div> 
                  <div onClick={() => this.MakeSlider.slickGoTo(3)} style={{ backgroundImage: `url(${ColorCorPic})` }} className="scrollToButton" aria-hidden="true"> 
                    <Text align="center">{this.props.btn4SliderMake}</Text>
                  </div> 
                </div>
              </div>
            </div>
    </div>  



    <div className="screen-recorder-sliders">
            <div id="text-screen-right-last">
            <div className="text-screen-right">
                <Text className="header-text-screen">
                {this.props.headerDescriptionSliderOther} 
                </Text>
              </div>
              <div className="container">  
                <div className="scrollLinksWrapper" id="scrollLinksWrapperRR">
                  <div onClick={() => this.OtherSlider.slickGoTo(0)} style={{ backgroundImage: `url(${PanZoomPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn1SliderOther}</Text>
                  </div> 
                  <div onClick={() => this.OtherSlider.slickGoTo(1)} style={{ backgroundImage: `url(${PictInPictPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn2SliderOther}</Text>
                  </div> 
                  <div onClick={() => this.OtherSlider.slickGoTo(2)} style={{ backgroundImage: `url(${ChromakeyPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn3SliderOther}</Text>
                  </div> 
                </div>
              </div>
              <div className="container" id="containerRR">  
                <div className="scrollLinksWrapper" id="scrollLinksWrapperRR">
                  <div onClick={() => this.OtherSlider.slickGoTo(3)} style={{ backgroundImage: `url(${AnimCaptionsPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn4SliderOther}</Text>
                  </div> 
                  <div onClick={() => this.OtherSlider.slickGoTo(4)} style={{ backgroundImage: `url(${TiltShiftPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn5SliderOther}</Text>
                  </div> 
                  <div onClick={() => this.OtherSlider.slickGoTo(5)} style={{ backgroundImage: `url(${SlowMotionPic})` }} className="scrollToButton" aria-hidden="true" id="scrollLinksBtn"> 
                    <Text align="center">{this.props.btn6SliderOther}</Text>
                  </div> 
                </div>
              </div>
            </div>
            <Slider
                className="image-screen-slider" 
                ref={OtherSlider => (this.OtherSlider = OtherSlider)}
                {...settings}>
                {SliderOther()}
            </Slider>
    </div> 


  </SliderStyle> 
  </div>
);
}  
}  
export default ScreenRecorderSlider;