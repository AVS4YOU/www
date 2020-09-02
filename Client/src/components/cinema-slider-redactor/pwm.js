import React, { Component, useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Text from '../text';


import  img1  from "../../images/avs-video-editor-tools/video-maker/trim.svg";
import  img2 from "../../images/avs-video-editor-tools/video-maker/cut.svg";
import  img3  from "../../images/avs-video-editor-tools/video-maker/split.svg";
import  img4  from "../../images/avs-video-editor-tools/video-maker/merge.svg";
import  img5  from "../../images/avs-video-editor-tools/video-maker/crop.svg";

import  Actimg1  from "../../images/avs-video-editor-tools/video-maker/trim_ac.svg";
import  Actimg2 from "../../images/avs-video-editor-tools/video-maker/cut_ac.svg";
import  Actimg3  from "../../images/avs-video-editor-tools/video-maker/split_ac.svg";
import  Actimg4  from "../../images/avs-video-editor-tools/video-maker/merge_ac.svg";
import  Actimg5  from "../../images/avs-video-editor-tools/video-maker/crop_ac.svg";

import Img1 from "../../images/avs-video-editor-tools/video-maker/trim.webp";
import Img2 from "../../images/avs-video-editor-tools/video-maker/cut.webp";
import Img3 from "../../images/avs-video-editor-tools/video-maker/split.webp";
import Img4 from "../../images/avs-video-editor-tools/video-maker/merge.webp";
import Img5 from "../../images/avs-video-editor-tools/video-maker/crop.webp";

const CinemaSliderStyle = styled.div`
.slick-slide {
    width: 860px;
}
.slick-slide > div {
  padding-bottom: 80px;
  padding-left: 102px;
  width: 850px;
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
            fade: false,
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
      <div className="imgpad"> 
          <img className="imgdetails" src= {num.img} width="100%"/>    
      </div>  
      </div> 
    )); 

  return (
    <div className="maker_vel_features">
        <div className="video_vel_narrow">
        <Text className="TextH1" style={{padding:"100px 0 50px", textAlign:"center"}}>5 Precise video cutting tools</Text>
            <div className="vel_features_block">
    <CinemaSliderStyle>
    <div className="container">  
       <div className="scrollLinksWrapper" style={{padding: 0, display: "flex"}} >
          <div onMouseEnter={this.handleOnMouseOverTrim} onMouseLeave={this.handleOnMouseOut} className="scrollSlideTrim">
            {this.state.hoveringTrim || this.state.activeSlide === 0 ?
              <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${Actimg1})`, backgroundSize:`auto` }} className="scrollToButton"> 
              <Text  align="center"  style={{ width:'100px', paddingTop:"-55px" }}>Trim and multi-trim</Text>
              </div> 
                : <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${img1})`, backgroundSize:`auto`}} className="scrollToButton"> 
                  <Text align="center"  style={{ width:'100px', paddingTop:"-5px" }}>Trim and multi-trim</Text> 
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