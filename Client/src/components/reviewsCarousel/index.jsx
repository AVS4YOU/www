import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import {Quotes, SliderLeftArrow, SliderRightArrow} from "../../images/icons";
import {
    ReviewsCarouselWrapper,
    ReviewsCarouselItem,
    ReviewsCarouselBox,
} from './reviewsCarousel.styled'

const ReviewsCarouselArrow = (props) => {
    const {dir, ...otherProps} = props;

    if (dir === 'right') {
        return (
            <SliderRightArrow {...otherProps} isDisabled={props.className.includes('disabled')}/>
        )
    }

    return (
        <SliderLeftArrow {...otherProps} isDisabled={props.className.includes('disabled')}/>
    )
}

const ReviewsCarousel = (props) => {
    const {reviews, settings = {}} = props;

    const sliderSettings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ReviewsCarouselArrow dir="right"/>,
        prevArrow: <ReviewsCarouselArrow dir="left"/>,
        ...settings,
    }

    return (
        <ReviewsCarouselWrapper>
            <Quotes className="quotes-left quotes"/>
            <ReviewsCarouselBox className="carousel-box">
                <Slider {...sliderSettings}>
                    {
                        reviews.map(review => <ReviewsCarouselItem key={review.id}>{review.iframe}</ReviewsCarouselItem>)
                    }
                </Slider>
            </ReviewsCarouselBox>
            <Quotes className="quotes-right quotes"/>
        </ReviewsCarouselWrapper>
    )
}

ReviewsCarousel.propTypes = {
    reviews: PropTypes.array,
    settings: PropTypes.object,
}

export default ReviewsCarousel;
