import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Text from '../text';
import ImageGQL from '../image-gql';

import backgroundImage from "../../images/avs-video-editor-final/cinema-slider/MaskGroup.png";
import  img1  from "../../images/avs-video-editor-final/cinema-slider/Trim_black.svg";
import  img2 from "../../images/avs-video-editor-final/cinema-slider/Crop_black.svg";
import  img3  from "../../images/avs-video-editor-final/cinema-slider/Split_black.svg";
import  img4  from "../../images/avs-video-editor-final/cinema-slider/Join_black.svg";

import  Actimg1  from "../../images/avs-video-editor-final/cinema-slider/Trim_active.svg";
import  Actimg2 from "../../images/avs-video-editor-final/cinema-slider/Crop_active.svg";
import  Actimg3  from "../../images/avs-video-editor-final/cinema-slider/Split_active.svg";
import  Actimg4  from "../../images/avs-video-editor-final/cinema-slider/Join_active.svg";

import GroupTrim from "../../images/avs-video-editing-software/group-trim.png";
import GroupCroup from "../../images/avs-video-editing-software/group-croup.png";
import GroupSplit from "../../images/avs-video-editing-software/group-split.png";
import GroupJoin from "../../images/avs-video-editing-software/group-join.png";


const CinemaSliderStyle = styled.div`
.headerDescriptionSlider{
  margin-left: 30%;
  margin-right: 30%;
  font-family:Montserrat;
}
.headerTitleSlider{
  font-weight: 700;
  padding-bottom: 1%;
  font-family:Montserrat;
}
.slick-slider {
  margin: 30px auto 10px;
  padding-top: 50px;
  padding-bottom: 35px;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position-x: center;
  height: auto;
}
.slick-slide > div {
  margin: 0 20px;
  max-height: 710px;
  max-width: 900px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}
 
.slick-list {
  margin: 0 -10px;
}
 
.slick-slide *:focus{
  outline: none;
}
.slick-slide[aria-hidden="true"] {
  opacity: 0.5;
}
}
.scrollSlideTrim{
  .scrollToButton{
    background-size:auto;
    background-position-y: 10px;
    width:88px;
    padding-top: 86px;
    p{
      font-family:Montserrat;
    }
  }
}
.scrollSlideCrop{
  .scrollToButton{
    background-size:auto;
    background-position-y: 7px;
    width:88px;
    padding-top: 86px;
    p{
      font-family:Montserrat;
    }
  }
}
.scrollSlideSplit{
  .scrollToButton{
    background-size:auto;
    width:88px;
    padding-top: 86px;
    p{
      font-family:Montserrat;
    }
  }
}
.scrollSlideJoin{
  .scrollToButton{
    background-size:auto;
    width:88px;
    padding-top: 86px;
    p{
      font-family:Montserrat;
    }
  }
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
@media (max-width: 1280px) {
  .container {
  margin: 0 3px;
  .slick-slider {
    margin: 10px auto 5px;
    padding-top: 30px;
    padding-bottom: 20px;
    height: auto;
  }
  .slick-slide > div {
    margin: 0 5px;
    max-height: 717px;
    max-width: 900px;
  }
}
}
@media (max-width: 1560px) {
  .slick-slider{
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .headerDescriptionSlider{
    margin-left: 18%;
    margin-right: 18%;
  }
  .headerTitleSlider{
    font-weight: 700;
    margin-left: 30%;
    margin-right: 30%;
  }
  .slick-slide > div {
    margin: 5px 10px;
    max-height: 490px;
    padding-top: 10px;
  }
}
    
@media (max-width: 2560){
  .headerDescriptionSlider{
    margin-left: 35%;
    margin-right: 35%;
  }
  .container {
    margin: 0 3px;
    .slick-slider {
      padding-top: 30px;
      padding-bottom: 20px;
      height: auto;
      imgpad{
        width: 50%;
      }
    }
    .slick-slide {
      margin: 0 5px;
      width: 900px;
    }
  }
}
@media (max-width: 1080px) {
  .headerDescriptionSlider{
    margin-left: 15%;
    margin-right: 15%;
    font-size: 16px;
  }
  .headerTitleSlider{
    font-weight: 600;
    font-size: 18px
  }
  .container {
    margin: 0 1px;
    .slick-slider {
      margin: 7px auto 3px;
      padding-top: 20px;
      padding-bottom: 10px;
      height: auto;
    }
    .slick-slide > div {
      margin: 0 5px;
      max-height: 390px;
    }
  }
}
@media (max-width: 900px) {
  .headerDescriptionSlider{
    margin-left: 10%;
    margin-right: 10%;
    font-size: 14px;
  }
  .headerTitleSlider{
    font-weight: 500;
    font-size: 16px
  }
  .container {
    margin: 0 1px;
    .slick-slider {
      margin: 5px auto 1px;
      padding-top: 15px;
      padding-bottom: 10px;
      height: auto;
    }
    .slick-slide > div {
      margin: 0 5px;
      max-height: 210px;
    }
  }
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
        this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
        this.state = {
            hoveringTrim: false,
            hoveringCroup: false,
            hoveringJoin: false,
            hoveringSplit: false
        };
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
    }

    render() {
      const { isActive } = this.props;

        const settings = {    
            centerMode: true,
            speed: 400,
            infinity: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: false,
            centerPadding: '470px',
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            responsive: [
              {
                breakpoint: 2560,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '605px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 2020,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '605px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1920,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '495px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1820,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '455px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1720,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '445px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1560,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '425px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1440,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '415px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 1280,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '300px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '240px',
                  slidesToShow: 1
                }
              }
            ], 
          };
    
        const images = [    
            { id:1, nameSlide: "Slide_Trim",  img: GroupTrim}, 
            { id:2, nameSlide: "Slide_Croup", img: GroupCroup},   
            { id:3, nameSlide: "Slide_Split", img: GroupSplit},    
            { id:4, nameSlide: "Slide_Join",  img: GroupJoin},         
          ];   

    const imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad" key={num.id}>  
          <img className={num.nameSlide} src={num.img} />    
      </div>  
    )); 
    
  return (  
    <CinemaSliderStyle>
      <div className="CinemaSliderTitle" style={{paddingTop:"40px", paddingBottom:"25px"}}>
  <Text color="#ffffff" align="center" className="headerTitleSlider" as="h5" color="#32393e" fontWeight={700} fontSize={28} >{this.props.headerDescription}</Text>
            <Text color="#ffffff" align="center" className="headerDescriptionSlider" as="h5" color="#32393e" fontSize={16} >{this.props.headerDescriptionSlider}</Text>      
      </div>
    <div className="container">  
       <div className="scrollLinksWrapper">
          <div onMouseEnter={this.handleOnMouseOverTrim} onMouseLeave={this.handleOnMouseOut} className="scrollSlideTrim">
            {this.state.hoveringTrim || this.state.activeSlide === 0 ?
              <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${Actimg1})` }} className="scrollToButton"> 
              <Text color="#FC4B15" align="center">{this.props.NameButtonTrim}</Text>
              </div> 
                : <div onClick={() => this.slider.slickGoTo(0)} style={{ backgroundImage: `url(${img1})`}} className="scrollToButton"> 
                  <Text color="#666666" align="center">{this.props.NameButtonTrim}</Text> 
                   </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverCroup} onMouseLeave={this.handleOnMouseOut} className="scrollSlideCrop">
            {this.state.hoveringCroup || this.state.activeSlide === 1 ?
              <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${Actimg2})`}} className="scrollToButton">
              <Text color="#FC4B15" align="center">{this.props.NameButtonCrop}</Text>
              </div>   
            : <div onClick={() => this.slider.slickGoTo(1)} style={{ backgroundImage: `url(${img2})`}} className="scrollToButton">
            <Text color="#666666" align="center">{this.props.NameButtonCrop}</Text>
            </div>}
          </div>

          <div onMouseEnter={this.handleOnMouseOverSplit} onMouseLeave={this.handleOnMouseOut} className="scrollSlideSplit">
            {this.state.hoveringSplit || this.state.activeSlide === 2 ?
              <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${Actimg3})`}} className="scrollToButton">
              <Text color="#FC4B15" align="center">{this.props.NameButtonSplit}</Text>
              </div>
            :   <div onClick={() => this.slider.slickGoTo(2)} style={{ backgroundImage: `url(${img3})`}} className="scrollToButton">
                <Text color="#666666" align="center">{this.props.NameButtonSplit}</Text>
                </div>}
            </div>    

          <div onMouseEnter={this.handleOnMouseOverJoin} onMouseLeave={this.handleOnMouseOut} className="scrollSlideJoin">
            {this.state.hoveringJoin || this.state.activeSlide === 3 ?            
              <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${Actimg4})`}} className="scrollToButton"> 
              <Text color="#FC4B15" align="center">{this.props.NameButtonJoin}</Text>
              </div>
            : <div onClick={() => this.slider.slickGoTo(3)} style={{ backgroundImage: `url(${img4})`}} className="scrollToButton"> 
              <Text color="#666666" align="center">{this.props.NameButtonJoin}</Text>
              </div>}
          </div>    
          </div>
      <Slider ref={slider => (this.slider = slider)} {...settings}>
          {imgSlides()}
        </Slider>      
    </div>
    </CinemaSliderStyle>  
  );  
 }  
}  
export default CinemaSlider;