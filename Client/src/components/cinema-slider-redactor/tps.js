import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Text from '../text';

import  img1  from "../../images/avs-video-editor-tools/slider-powerful/color_tun.svg";
import  img2 from "../../images/avs-video-editor-tools/slider-powerful/green_screen.svg";
import  img3  from "../../images/avs-video-editor-tools/slider-powerful/stabilization.svg";
import  img4  from "../../images/avs-video-editor-tools/slider-powerful/speed_control.svg";
import  img5  from "../../images/avs-video-editor-tools/slider-powerful/text.svg";

import  Actimg1  from "../../images/avs-video-editor-tools/slider-powerful/color_tun_ac.svg";
import  Actimg2 from "../../images/avs-video-editor-tools/slider-powerful/green_screen_ac.svg";
import  Actimg3  from "../../images/avs-video-editor-tools/slider-powerful/stabilization_ac.svg";
import  Actimg4  from "../../images/avs-video-editor-tools/slider-powerful/speed_control_ac.svg";
import  Actimg5  from "../../images/avs-video-editor-tools/slider-powerful/text_ac.svg";

import Img1 from "../../images/avs-video-editor-tools/slider-powerful/color.webp";
import Img2 from "../../images/avs-video-editor-tools/slider-powerful/green.webp";
import Img3 from "../../images/avs-video-editor-tools/slider-powerful/speed.webp";
import Img4 from "../../images/avs-video-editor-tools/slider-powerful/stab.webp";
import Img5 from "../../images/avs-video-editor-tools/slider-powerful/text.webp";

const CinemaSliderStyle = styled.div`
.velfb_description_Text{
  font-size: 24px;
}
.slick-list{
  margin: 0 150px;
  width: 850px;
  padding: 0;
}
.slick-slide {
    width: 1000px;
    margin-left: 0px;
    margin-right: 0px;

    overflow: hidden;
}
.slick-slide > div {
  padding-bottom: 80px;
  width: 100%;
  margin: 0;
  }
  .slick-active{
    z-index: 10;
  }
  .scrollLinksWrapper {
    border-spacing: 20px 0px;
    padding: 0;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }
.scrollToButton{
padding-top: 115px;
margin-bottom: 25px; 
border-radius: 0;
box-shadow: none;
transition: 0;
display: table-cell;
min-width: 80px;
padding: 20px;
padding-top: 125px;
background-size: 42px;
background-position: 50% 20px;
    background-position-y: 20px;
background-repeat: no-repeat;
cursor: pointer;
height: 50px;
}
.scrollToButton:hover {
    box-shadow: none;
}
.velfb_description {
    text-align: center;
    font-size: 24px;
    max-width: 800px;
    margin: 0 auto;
    height: 115px;
}
@media screen and (max-width: 1130px) {
  .slick-list{
    margin:auto;
  }
}

@media screen and (max-width: 900px) {
  .slick-list{
    margin:auto;
    width: 560px;
  }
  .velfb_description{
    height: 60px;
  }
  .velfb_description_Text{
    font-size: 14px;
  }
}

`;

export class PowerfulSlider extends Component {  
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
      const { SliderText } = this.props;

        const settings = {    
            fade: false,
            speed: 700,
            infinity:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: false,
            beforeChange: (current, next) => this.setState({ activeSlide: next }), 
          };
    
        const images = [    
            { img: Img1,
               }, 
            { img: Img2,
               },   
            { img: Img3,
                 },    
            { img: Img4,
                },
            { img: Img5,
                },         
          ];   

          images.forEach((it, i) => { 
            return  Object.assign(it, SliderText[i]);
          });


    const imgSlides = () =>  
    images.map(num => ( 
        <div className="slickActiveSlider">
        <div className="velfb_description">
          <Text className="velfb_description_Text">{num.imgText}</Text> 
        </div>
      <div className="imgpad"> 
          <img className="imgdetails" src= {num.img} width="100%"/>    
      </div>  
      </div> 
    )); 

  return (
    <div className="video_vel_features">
        <div className="video_vel_narrow">
  <Text fontSize={40} className="TextH2">{this.props.SHeader}</Text>
            <div className="vel_features_block">
    <CinemaSliderStyle>
    <div className="container">  
       <div className="scrollLinksWrapper" style={{padding: 0, display: "flex"}} >
          <div onMouseEnter={this.handleOnMouseOverTrim} onMouseLeave={this.handleOnMouseOut} className="scrollSlideTrim">
            {this.state.hoveringTrim || this.state.activeSlide === 0 ?
              <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${Actimg1})`, backgroundSize:`auto` }} className="scrollToButton"> 
              <Text  align="center">{this.props.SColorT}</Text>
              </div> 
                : <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${img1})`, backgroundSize:`auto`}} className="scrollToButton"> 
                  <Text align="center">{this.props.SColorT}</Text> 
                   </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverCroup} onMouseLeave={this.handleOnMouseOut} className="scrollSlideCrop">
            {this.state.hoveringCroup || this.state.activeSlide === 1 ?
              <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${Actimg2})`, backgroundSize:`auto`}} className="scrollToButton">
                 <Text align="center">{this.props.SGreenScrin}</Text> 
              </div>   
            : <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${img2})`, backgroundSize:`auto`}} className="scrollToButton">       
                                  <Text align="center">{this.props.SGreenScrin}</Text> 
            </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverSplit} onMouseLeave={this.handleOnMouseOut} className="scrollSlideSplit">
            {this.state.hoveringSplit || this.state.activeSlide === 2 ?
              <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${Actimg3})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">{this.props.SStabilization}</Text> 

              </div>
            :   <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${img3})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">{this.props.SStabilization}</Text> 

                </div>}
            </div>    

          <div onMouseEnter={this.handleOnMouseOverJoin} onMouseLeave={this.handleOnMouseOut} className="scrollSlideJoin">
            {this.state.hoveringJoin || this.state.activeSlide === 3 ?            
              <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${Actimg4})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">{this.props.SSpeedCont}</Text> 
              </div>
            : <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${img4})`, backgroundSize:`auto`}} className="scrollToButton">
                <Text align="center">{this.props.SSpeedCont}</Text> 
              </div>}
          </div>
          <div onMouseEnter={this.handleOnMouseOverSS} onMouseLeave={this.handleOnMouseOut} className="scrollSlideSS">
            {this.state.hoveringSS || this.state.activeSlide === 4 ?            
              <div onClick={() => this.slider.slickGoTo(4)} style={{ backgroundImage: `url(${Actimg5})`, backgroundSize:`auto`}} className="scrollToButton">
                  <Text align="center">{this.props.SText}</Text> 
              </div>
            : <div onClick={() => this.slider.slickGoTo(4)} style={{ backgroundImage: `url(${img5})`, backgroundSize:`auto`}} className="scrollToButton">
                <Text align="center">{this.props.SText}</Text> 
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
export default PowerfulSlider;