import React from "react"

import ReviewsCarousel from "../../../components/reviewsCarousel";
import {
    ReviewsSectionStyled
} from './reviewsSection.styled'
import reviews from "./reviewsSection.data";

export const ReviewsSection = ({t}) => {
    const setting = {
        arrows: false,
    }
    return (
        <ReviewsSectionStyled>
            <ReviewsCarousel settings={setting} reviews={reviews} />
        </ReviewsSectionStyled>
    )
}
