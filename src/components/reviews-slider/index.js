import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import ReviewCarouselItem from '../review-carousel-item';

import AvatarChenWang from '../../images/common/review-carousel/сhen_wang.png';
import AvatarAndyStephens from '../../images/common/review-carousel/quote_2.png';
import AvatarWilliamHolmes from '../../images/common/review-carousel/quote_1.png';

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

  @media (max-width: 750px) {
    .slick-list{
      padding-bottom: 10;
    }
  }

`;


export default class ReviewSlider extends Component {

  constructor(props){
    super(props);
  }

  reviews = (reviewsData) => reviewsData.map((item, index) => 
    <ReviewCarouselItem
      id={item.name}
      name={item.name}
      avatar={item.avatar}
      revHeader={item.revHeader}
      revText={item.revText}
    />
  );

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <StyledCarouselWrapper>
        <Slider {...settings}>
          {this.props.reviewsData && this.reviews(this.props.reviewsData)}
        </Slider>
      </StyledCarouselWrapper>
    );
  }
}

ReviewSlider.defaultProps = {
  regexp: "",
  reviewsData: 
    [
      {
        name: "Chen Wang",
        avatar: AvatarChenWang,
        revHeader: "Our customers say",
        revText: "For the price, this is certainly great value for money. I mostly use AVS Video Editor and Video Converter and I find them to be both excellent, easy to use with quality results."
      },
      {
        name: "Andy Stephens",
        avatar: AvatarAndyStephens,
        revHeader: "Our customers say",
        revText: "The product is super easy to download and use. Anyone can do this in just minutes. The company is always supportive. I highly recommend." 
      },
      {
        name: "William Holmes",
        avatar: AvatarWilliamHolmes,
        revHeader: "Our customers say",
        revText: "I have been using AVS for several years and can say for sure that it is very convenient, user friendly and functional." 
      }
    ],
};