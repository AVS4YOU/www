import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";
import ImageGQL from "../image-gql";
import uploadMediaFiles from "../../images/installed/abs1.webp";
import cutOrTrim from "../../images/installed/abs2.webp";
import applyEffects from "../../images/installed/abs3.webp";
import addBackground from "../../images/installed/abs4.webp";
import saveMovie from "../../images/installed/abs5.webp";
import num1 from "../../images/installed/1.webp";
import num2 from  "../../images/installed/2.webp";  
import num3 from "../../images/installed/3.webp";  
import num4 from  "../../images/installed/4.webp";  
import num5 from "../../images/installed/5.webp";  
  
const StyledSlider = styled.div`
    height: 500px;
    padding-top:20px;
    padding-bottom: 35px;
    .slick-dots li button {
        color: none;
        border: 0 none;
        background-color: transparent;
        width: 339px;
        height: 70px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: 10px 50%;
        position: relative;
        }
    .slick-dots li button::before{
        width: 54px;
        height: 54px;
        margin: 5px 10px;
    }
    .landing-soft-feature1{
        background-image: url(${uploadMediaFiles});
        background-repeat: no-repeat;
        background-position: 10px 50%;
        height: 100%;
    }
    .landing-soft-feature2{
        background-image: url(${cutOrTrim});
        background-repeat: no-repeat;
        background-position: 10px 50%;
        height: 100%;
    }
    .landing-soft-feature3{
        background-image: url(${applyEffects});
        background-repeat: no-repeat;
        background-position: 10px 50%;
        height: 100%;
    }
    .landing-soft-feature4{
        background-image: url(${addBackground});
        background-repeat: no-repeat;
        background-position: 10px 50%;
        height: 100%;
    }
    .landing-soft-feature5{
        background-image: url(${saveMovie});
        background-repeat: no-repeat;
        background-position: 10px 50%;
        height: 100%;
    }
    .landing-soft-feature-text{
        height: 100%;
        padding-top: 10px;
        padding-left: 20%;
        text-align: left;
        font-size: 18px;
    }
    
    .slick-dots li button:after {
        display: block;
        height: 40px;
        color: #1c1c1c;
        font-size: 18px;
        font-weight: 400;
        position: absolute;
        left: 85px;
        top: 11px;
        text-align: left;
        }
    `;
    
    
export class VerticalSlider extends Component {  
    constructor(props){
        super(props);
        this.state = {
            q: "sasa",
        };
    }

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            customPaging: customPaging,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: false,
            arrows: false,
            beforeChange: function(currentSlide, nextSlide) {
              console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function(currentSlide) {
              console.log("after change", currentSlide);
            }
          };
          function customPaging(i, props) {
            return (
                <ul className="slick-dots" id="slick-steps">
                    { i === 0 ? <li aria-hidden="true" ><div className="landing-soft-feature1"><Text className="landing-soft-feature-text">{this.state.q}</Text></div></li>
                    : i === 1 ? <li aria-hidden="true" ><div className="landing-soft-feature2"><Text className="landing-soft-feature-text">{this.state.q}</Text></div></li>
                    : i === 2 ? <li aria-hidden="true" ><div className="landing-soft-feature3"><Text className="landing-soft-feature-text">{this.state.q}</Text></div></li>
                    : i === 3 ? <li aria-hidden="true" ><div className="landing-soft-feature4"><Text className="landing-soft-feature-text">{this.state.q}</Text></div></li>
                    : i === 4 ? <li aria-hidden="true" ><div className="landing-soft-feature5"><Text className="landing-soft-feature-text">{this.state.q}</Text></div></li>
                    : ''}
                </ul>
            );
          }
         /* q = {this.props.t("Cut or trim videos")}
          q = {this.props.t("Apply effects and transitions")}
          q = {this.props.t("Add background audio and text")}
          q = {this.props.t("Save your movie and share")}*/
    
          const SlidesImage = [{
            nameSlide:num1,  
          },{
            nameSlide:num2,  
          },{
            nameSlide:num3,  
          },{
            nameSlide:num4,  
          },{
            nameSlide:num5,  
          },
        ];
          const Slides = () =>  
          SlidesImage.map(num => (
              <div className="Slides">
                <img src={num.nameSlide}/>
              </div>    
            ));  
    
  return (  
    <StyledSlider>
      <Slider {...settings}>
          {Slides()}
        </Slider> 
        </StyledSlider>     
  );  
}  
}  
export default VerticalSlider;