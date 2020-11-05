import React, { Component } from "react";
import Slider from "react-slick";
import styled , { css } from "styled-components";
import Text from '../text';

import ArrowStl from '../../images/avs-video-editor-final/cinema-slider/cinema-slider/arrow.svg';
import frameChromaKey from "../../images/avs-video-editor-final/cinema-slider/frame/Chroma-Key.svg";
import frameColourCorrection from "../../images/avs-video-editor-final/cinema-slider/frame/Colour-Correction.svg";
import frameFreezeFrame from "../../images/avs-video-editor-final/cinema-slider/frame/Freeze-Frame.svg";
import framePlaybackSpeed from "../../images/avs-video-editor-final/cinema-slider/frame/Playback-Speed.svg";
import frameSpecialEffects from "../../images/avs-video-editor-final/cinema-slider/frame/Special-Effects.svg";
import frameTextGraphics from "../../images/avs-video-editor-final/cinema-slider/frame/Text&Graphics.svg";
import frameTransformation from "../../images/avs-video-editor-final/cinema-slider/frame/Transformation.svg";
import frameTransitions from "../../images/avs-video-editor-final/cinema-slider/frame/Transitions.svg";
import frameVideoOderlay from "../../images/avs-video-editor-final/cinema-slider/frame/Video-Overlay.svg";
import frameVideoStabilization from "../../images/avs-video-editor-final/cinema-slider/frame/Video-Stabilization.svg";

import ChromaKey from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/chroma-key.png";
import ColourCorrection from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/colour-cor.png";
import FreezeFrame from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/freeze-frame.png";
import PlaybackSpeed from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/playback-speed.png";
import SpecialEffects from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/spec-effects.png";
import TextGraphics from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/text-and-graph.png";
import Transformation from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/transformation.png";
import Transitions from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/Transitions.webp";
import VideoOderlay from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/video-overlay.png";
import VideoStabilization from "../../images/avs-video-editor-final/cinema-slider/cinema-slider/video-stab.png";


const remy = px => `${px / 16}rem`
const Card = styled.article`
outline: none;
background-color: #fff;
  width: 340px;
  height: 210px;
  overflow: hidden;
  word-wrap: break-word;
  position: relative;
  text-align: left;
  cursor: pointer;
  perspective: 1000px;
  margin:10px;
  padding: 10px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(0,0,0,0.25);
  font-family: Montserrat;
`;
const CardSide = css`
  position: absolute;
  text-align: left;
  top: 35px;
  left: 25px;
  right:15px;
  overflow: hidden;
  outline: none;
  /*padding: ${remy(24)};*/
  display: flex;
  flex-direction: column;
  justify-content: left;
  backface-visibility: hidden;
  transition: all .25s ease-in-out;
   
`
const CardImage = styled.div`
 height : 30%;
 padding-left: 15px;
 padding-bottom: 10px;
 padding-top:15px;
 background-repeat: no-repeat;
 overflow: hidden;
  word-wrap: break-word;
  ${CardSide};
`
const CardTitle = styled.div`
    padding-top:90px;
    padding-left:15px;
    width: 90%;
    word-wrap: break-word;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat';
`
const CardDescription = styled.div`
 padding-left:15px;
 padding-top:20px;
 padding-bottom:10px;
 width: 90%;
 word-wrap: break-word;
  font-size: 16px;
  font-family: 'Montserrat';
`
const CinemaSliderStyle = styled.div`
.CCinemaSlider{
  position: center center;
  background: #fff;
  overflow: none; 
  padding-top: 45px;
  font-family: 'Montserrat';
  outline:none;
.imgSlider{
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
background-color: #fff; 
  height: 410px; 
  .effectsSliderItem{
    outline: none;
  .imgpadSlider{
          .imgdetails{
              position: relative;
              display: inline-block;
              width: 700px;
              height: 400px;
              z-index: 3;
              top: 0px;
              left: 35px;
              float: right;
              }
          }
          .CardsItem{
              position: absolute;
              z-index: 5;
              width: 340px;
              height: 210px;
              top: 15%;
              left: -35px;
              float: left;
              outline: none;
              }
          }
      }
  } 
}
  .headerDescriptionSlider{
    margin-top: 20px;
    margin-bottom: 10px;
    padding-left: 25%;
    padding-right: 25%;
    line-height: 22px;
    font-family: 'Montserrat';
    }
    .headerDescription{
      font-family: 'Montserrat';
      padding-top: 25px;
      }

  .affilSlider{
    outline:none;
      position: center center;
      background: #fff;
      overflow: none; 
      padding-top: 25px;
      margin-left: auto;
      margin-right: auto;
      width: 1141px;
      .affilSliderItem{
        outline: none;
      }
      .scrollToButton {
        border:none;
        width: 88px;
        height: 23px;
        padding-left:10px;
        padding-right:10px;
          .scrollToSlideText{
            outline:none;
            width: 108px;
            font-size:14px;
            font-family: Montserrat;
        }
      }  
  }


  .slick-slider .slick-dots li.slick-active button:before {
      color: #FC4B15;
      } 
  @media (max-width: 1080px) {
        .affilSlider{
          position: center center;
          background: #fff;
          overflow: none; 
          padding-top: 10px;
          margin-left: auto;
          margin-right: auto;
          width: 780px;
      }
      } 
    @media (min-width: 1560px){
        .headerDescriptionSlider{
          margin-top: 1%;
          padding-left:30%;
          padding-right:30%;
          }
      }    
`;
const ButtonSliderStyle = styled.div`
.BtnGroupSlider{
  outline: none;
  position: absolute;
  z-index: 5;
  top: 85%;
  .slideIdSlider{
    margin-left: 5px;
    margin-right: 5px;
    outline: none;
  }
  .Sliderbutton {
      text-decoration: none;
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 2px rgba(0,0,0,.15);
    }
    button:hover {
      background-color: #ddd;
    }
.btnPrevArrow{
  outline: none;
  font-size: 15px;
  background-image:url(${ArrowStl});
  background-color: #fff;
  background-repeat: no-repeat;
  vertical-align: middle;
  text-align: center;
  background-position: center;
  margin-right: 20px;
}
  .btnNextArrow{
  outline: none;
  font-size: 15px;
  background-image:url(${ArrowStl});
  transform: rotate(180deg);
  background-color: #fff;
  background-repeat: no-repeat;
  vertical-align: middle;
  text-align: center;
  background-position: center;
  margin-left: 35px;
}
}
`;

export class CinemaSlider extends Component {  
  state = {
      slideIndex: 0,
      slideIndexItem: 0,
      nav1: null,
      nav2: null
    };
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider1.slickNext();
    }
    previous() {
      this.slider1.slickPrev();
    }
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
    
  render() {  
    const { affilateImage, SliderImages, headerDescription, headerDescriptionSlider } = this.props;
      const settings = {
          fade: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinity: true,
          centerMode: true,
          swipeToSlide: false,
          afterChange: current =>
          this.setState({slideIndexItem: current}),
         beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        const settingsAffil = {
          centerMode:false,     
          draggable:false,    
          arrows:true,    
          autoplaySpeed:1500,     
          slidesToShow:8,     
          slidesToScroll:6,   
          dots:true,
          responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 5,
                slidesToScroll:5,   
              }
            }
          ],
      };
      
      const MainSliderImages = [      
        { img: Transitions,
            id: 1,
            bckimg:frameTransitions,
           },
        { img: Transformation,
            id: 2,
            bckimg:frameTransformation,
           },
        { img: TextGraphics,
            id: 3,
            bckimg:frameTextGraphics,
           },
        { img: VideoOderlay,
            id: 4,
            bckimg:frameVideoOderlay,
           },
        { img: VideoStabilization,
            id: 5,
            bckimg:frameVideoStabilization,
           },
        { img: ChromaKey,
            id: 6,
            bckimg:frameChromaKey,
           },
        { img: ColourCorrection,
            id: 7,
            bckimg:frameColourCorrection,
           },
        { img: FreezeFrame,
            id: 8,
            bckimg:frameFreezeFrame,
           },
        { img: PlaybackSpeed,
            id: 9,
            bckimg:framePlaybackSpeed,
           },
        { img: SpecialEffects,
            id: 10,
            bckimg:frameSpecialEffects,
           },               
      ];

      const affilateImageSlider = [{
        imgBck: frameTransitions,
        id: 0,
      },{
        imgBck: frameTransformation,
        id: 1,
      },{
        imgBck: frameTextGraphics,
        id: 2,
      },{
        imgBck: frameVideoOderlay,
        id: 3,
      },{
        imgBck: frameVideoStabilization,
        id: 4,
      },{
        imgBck: frameChromaKey,
        id: 5,
      },{
        imgBck: frameColourCorrection,
        id: 6,
      },{
        imgBck: frameFreezeFrame,
        id: 7,
      },{
        imgBck: framePlaybackSpeed,
        id: 8,
      },{
        imgBck: frameSpecialEffects,
        id: 9,
      },
      ];

      affilateImageSlider.forEach((it, i) => { 
        return  Object.assign(it, affilateImage[i]);
      });
      
      MainSliderImages.forEach((it, i) => { 
        return  Object.assign(it, SliderImages[i]);
      })

        const affilSlides = () =>  
        affilateImageSlider.map((num, index) => (
          <div className="affilSliderItem">
            <div onClick={() => this.state.nav1.slickGoTo(num.id)} style={{backgroundImage: `url(${num.imgBck})`, paddingTop: `${num.id === 4 || num.id === 6 || num.id === 8 ? '72px' :''}`}} className="scrollToButton">
                <Text className="scrollToSlideText" color="#666666" align="center" fontWeight={300} fontSize={14}>{num.nameAffilate}</Text>
            </div>
          </div>    
        ));  

  const imgSlides = () =>  
  MainSliderImages.map((num, index) => (
    <div className="effectsSliderItem">
      <div className="imgpadSlider">  
          <img className="imgdetails" src= {num.img} />
       </div>
            <div className="CardsItem">
                <Card >
                  <CardImage style={{ backgroundImage: `url(${num.bckimg})`}}></CardImage>
                    <CardTitle>{num.title}</CardTitle>
                    <CardDescription>{num.desc}</CardDescription>
                </Card>
            </div>
            <ButtonSliderStyle>
            <div className="BtnGroupSlider">
              <button className=" Sliderbutton btnPrevArrow" onClick={this.previous}>
              </button>
               <span className="slideIdSlider">
                  {num.id} out of 10
               </span>
              <button className="Sliderbutton btnNextArrow" onClick={this.next}>
              </button>
            </div> 
            </ButtonSliderStyle>
    </div>     
  ));  
return (
  <CinemaSliderStyle>
    <div style={{paddingTop:"40px"}}>
        <Text color="#ffffff" align="center" className="headerDescription" as="h5" color="#32393e" fontWeight={700} fontSize={28} >{this.props.headerDescription}</Text>
        <Text color="#ffffff" align="center" className="headerDescriptionSlider" as="h5" color="#32393e" fontSize={16} paddingLeft="25%" paddingRight="25%" >{this.props.headerDescriptionSlider}</Text>      
    </div>
        <div className="CCinemaSlider">
          <Slider
          className="imgSlider" 
          asNavFor={this.state.nav}
          ref={slider => (this.slider1 = slider)}
           {...settings}>
              {imgSlides()}
            </Slider>       
        </div>  
          <Slider
          className="affilSlider"
          asNavFor={this.state.nav} 
           {...settingsAffil}>
          {affilSlides()}
          </Slider>
  </CinemaSliderStyle> 
);  
}  
}  
export default CinemaSlider;