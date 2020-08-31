import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Text from '../text';

//import backgroundImage from "../../images/avs-video-editor-final/cinema-slider/bckGroupImage.svg";
import backgroundImage from "../../images/avs-video-editor-final/cinema-slider/MaskGroup.png";
import  img1  from "../../images/avs-video-editor-tools/slider-powerful/icon_1.svg";
import  img2 from "../../images/avs-video-editor-tools/slider-powerful/icon_2.svg";
import  img3  from "../../images/avs-video-editor-tools/slider-powerful/icons_3.svg";
import  img4  from "../../images/avs-video-editor-tools/slider-powerful/icons_4.svg";
import  img5  from "../../images/avs-video-editor-tools/slider-powerful/icons_5.svg";

import  Actimg1  from "../../images/avs-video-editor-tools/slider-powerful/icon_ac_1.svg";
import  Actimg2 from "../../images/avs-video-editor-tools/slider-powerful/icon_ac_2.svg";
import  Actimg3  from "../../images/avs-video-editor-tools/slider-powerful/icon_ac_3.svg";
import  Actimg4  from "../../images/avs-video-editor-tools/slider-powerful/icon_ac_4.svg";
import  Actimg5  from "../../images/avs-video-editor-tools/slider-powerful/icon_ac_5.svg";

import Img1 from "../../images/avs-video-editor-tools/video-maker/trim.webp";
import Img2 from "../../images/avs-video-editor-tools/video-maker/cut.webp";
import Img3 from "../../images/avs-video-editor-tools/video-maker/split.webp";
import Img4 from "../../images/avs-video-editor-tools/video-maker/merge.webp";
import Img5 from "../../images/avs-video-editor-tools/video-maker/crop.webp";

const CinemaSliderStyle = styled.div`
.slick-slide {
    width: 852px;
}
.slick-slide > div {
    padding-bottom: 75px;
    .imgdetails{}
  }

  .slick-dots {
    list-style: none;
    display: inline-block;
    text-align: center;
    width: 900px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: -200px;
    left: -24px;
    vertical-align: top;
}
    .slick-dots li {
    margin: 0 auto;
    padding: 0 50px;
    }
        .slick-dots li:first-of-type {
        padding-left: 0;
        }
        .slick-dots li:last-of-type {
        padding-right: 0;
        }
.slick-dots li, .slick-dots li button {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 0 none;
    color: transparent;
    background-color: transparent;
    vertical-align: top;
}
    .slick-dots li button {
    cursor: pointer;
    margin: 0;
    padding: 0;
    font-size: 8px;
    }
    .slick-dots li button:before {
    background-image: url(https://imgs.avs4you.com/en/images/landing/video-editor-2/tools/icons.png);
    background-repeat: no-repeat;
    display: block;
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    content: '';
    }
.landing-feature1 button:before {
background-position: -29px -2px;
}
.landing-feature2 button:before {/* background-position: -216px -2px; */}
.landing-feature3 button:before {
background-position: -400px -2px;
}
.landing-feature4 button:before {
background-position: -587px -2px;
}
.landing-feature5 button:before {
background-position: -765px -2px;
}
    .slick-dots li button:after {
        font-weight: 600;
        color: #3E3D62;
        font-size: 18px;
        line-height: 1.1em;
        display: block;
        padding: 3px 0 0;
        font-family: 'Open Sans', Arial, Tahoma;
    }
.landing-feature1 button:after {
content: 'Color Tuning';
}
.landing-feature2 button:after {
content: 'Green Screen';
}
.landing-feature3 button:after {
content: 'Stabilization';
}
.landing-feature4 button:after {
content: 'Speed Control';
}
.landing-feature5 button:after {
content: 'Text';
}
.landing-feature1.slick-active button:before,
.landing-feature1 button:hover:before {
background-position: -29px -108px;
}

.landing-feature2.slick-active button:before,
.landing-feature2 button:hover:before {
background-position: -216px -108px;
}

.landing-feature3.slick-active button:before,
.landing-feature3 button:hover:before {
background-position: -400px -108px;
}

.landing-feature4.slick-active button:before,
.landing-feature4 button:hover:before {
background-position: -587px -108px;
}

.landing-feature5.slick-active button:before,
.landing-feature5 button:hover:before {
background-position: -765px -108px;
}
.scrollToButton{
padding-top: 115px;
margin-bottom: 25px; 
border-radius: 0;
box-shadow: none;
transition: 0;
}
.scrollToButton:hover {
    box-shadow: none;
}
.velfb_description {
    text-align: center;
    font-size: 24px;
    max-width: 500px;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 15px;
}
`;

export class CinemaSlider extends Component {  
    state = {
        slideIndex: 0,
        updateCount: 0,
        activeSlide: 0,
      };   
      
      constructor(props){
        super(props);
        this.handleOnMouseOverTrim = this.handleOnMouseOverTrim.bind(this);
        this.handleOnMouseOverCroup = this.handleOnMouseOverCroup.bind(this);
        this.handleOnMouseOverJoin = this.handleOnMouseOverJoin.bind(this);
        this.handleOnMouseOverSplit = this.handleOnMouseOverSplit.bind(this);
        this.handleOnMouseOverSS = this.handleOnMouseOverSS.bind(this);

        this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
        this.state = {
            hoveringTrim: false,
            hoveringCroup: false,
            hoveringJoin: false,
            hoveringSplit: false,
            hoveringSS: false,
        };
    }
    handleOnMouseOverSS(event){
        event.preventDefault();
        this.setState({hoveringSS:true});
      }
    handleOnMouseOverTrim(event){
      event.preventDefault();
      this.setState({hoveringTrim:true});
    }
    handleOnMouseOverCroup(event){
      event.preventDefault();
      this.setState({hoveringCroup:true});
    }
    handleOnMouseOverJoin(event){
      event.preventDefault();
      this.setState({hoveringJoin:true});
    }
    handleOnMouseOverSplit(event){
      event.preventDefault();
      this.setState({hoveringSplit:true});
    }

    handleOnMouseOut(event){
        event.preventDefault();
        this.setState({hoveringTrim:false});
        this.setState({hoveringCroup:false});
        this.setState({hoveringJoin:false});
        this.setState({hoveringSplit:false});
        this.setState({hoveringSS:false});
    }

    render() {
      const { isActive } = this.props;

        const settings = {    
            centerMode: true,
            infinity: false,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            beforeChange: (current, next) => this.setState({ activeSlide: next }), 
          };
    
        const images = [    
            { img: Img1,
              imgText: "Want to cut out a particular scene or remove shaky and useless parts from a camcorder video to save space on your hard drive? You can effectively keep any part of the video but remove the rest in Timeline editing with the inbuilt video trimmer in AVS Video Editor." }, 
            { img: Img2,
                imgText: "Cut videos to the desired length or delete unnecessary scenes. This video cutter will shorten your video in a few clicks so that you can easily playback your video clips on a mobile device." },   
            { img: Img3,
                imgText: "Split videos regardless both the video size and formats. Cut your clip into smaller sections, without losing any frames in the process. The clips can then be trimmed or edited separately." },    
            { img: Img4,
                imgText: "Combine as many video files as you want and save them to all popular formats accepted by literally all PC's, mobile phones, TVs and multimedia systems. Join clips into a long movie in a couple of clicks." },
            { img: Img5,
                imgText: "Crop your video to delete unnecessary parts such as black borders and draw your viewers' attention to interesting or important elements." },         
          ];   

    const imgSlides = () =>  
    images.map(num => ( 
        <div>
        <div className="velfb_description">
          <Text>{num.imgText}</Text> 
        </div>
        <div style={{paddingTop:`${num.img === Img3 ? '25px': ''}`}}></div>
      <div className="imgpad"> 
          <img className="imgdetails" src= {num.img} width="100%"/>    
      </div>  
      </div> 
    )); 

  return (
    <div className="maker_vel_features">
        <div className="video_vel_narrow">
        <h2>5 professional cinematic tools</h2>
            <div className="vel_features_block">
    <CinemaSliderStyle>
    <div className="container">  
       <div className="scrollLinksWrapper" style={{padding: 0, display: "flex"}} >
          <div onMouseEnter={this.handleOnMouseOverTrim} onMouseLeave={this.handleOnMouseOut} className="scrollSlideTrim">
            {this.state.hoveringTrim || this.state.activeSlide === 0 ?
              <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${Actimg1})`, backgroundSize:`auto` }} className="scrollToButton"> 
              <Text  align="center"  style={{ width:'100px' }}>Trim and multi-trim</Text>
              </div> 
                : <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${img1})`, backgroundSize:`auto`}} className="scrollToButton"> 
                  <Text align="center"  style={{ width:'100px' }}>Trim and multi-trim</Text> 
                   </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverCroup} onMouseLeave={this.handleOnMouseOut} className="scrollSlideCrop">
            {this.state.hoveringCroup || this.state.activeSlide === 1 ?
              <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${Actimg2})`, backgroundSize:`auto`}} className="scrollToButton">
                 <Text align="center">Cut</Text> 
              </div>   
            : <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${img2})`, backgroundSize:`auto`}} className="scrollToButton">       
                                  <Text align="center">Cut</Text> 
            </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverSplit} onMouseLeave={this.handleOnMouseOut} className="scrollSlideSplit">
            {this.state.hoveringSplit || this.state.activeSlide === 2 ?
              <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${Actimg3})`, backgroundSize:`auto`}} className="scrollToButton">
                                                    <Text align="center">Split</Text> 

              </div>
            :   <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${img3})`, backgroundSize:`auto`}} className="scrollToButton">
                                                  <Text align="center">Split</Text> 

                </div>}
            </div>    

          <div onMouseEnter={this.handleOnMouseOverJoin} onMouseLeave={this.handleOnMouseOut} className="scrollSlideJoin">
            {this.state.hoveringJoin || this.state.activeSlide === 3 ?            
              <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${Actimg4})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">Merge</Text> 
              </div>
            : <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${img4})`, backgroundSize:`auto`}} className="scrollToButton">
                <Text align="center">Merge</Text> 
              </div>}
          </div>
          <div onMouseEnter={this.handleOnMouseOverSS} onMouseLeave={this.handleOnMouseOut} className="scrollSlideSS">
            {this.state.hoveringSS || this.state.activeSlide === 4 ?            
              <div onClick={() => this.slider.slickGoTo(4)} style={{ backgroundImage: `url(${Actimg5})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">Crop</Text> 
              </div>
            : <div onClick={() => this.slider.slickGoTo(4)} style={{ backgroundImage: `url(${img5})`, backgroundSize:`auto`}} className="scrollToButton">
                <Text align="center">Crop</Text> 
              </div>}
          </div>    
          </div>
      <Slider ref={slider => (this.slider = slider)} {...settings}>
         {imgSlides()}
         <ul class="slick-dots" style=""><li class="landing-feature1" aria-hidden="true"><button type="button" data-role="none">1</button></li><li aria-hidden="true" class="landing-feature2"><button type="button" data-role="none">2</button></li><li aria-hidden="true" class="landing-feature3"><button type="button" data-role="none">3</button></li><li aria-hidden="true" class="landing-feature4"><button type="button" data-role="none">4</button></li><li aria-hidden="false" class="landing-feature5 slick-active"><button type="button" data-role="none">5</button></li></ul>
        </Slider>      
    </div>
    </CinemaSliderStyle>  
    </div> 
    </div>
    </div>
  );  
}  
}  
export default CinemaSlider;