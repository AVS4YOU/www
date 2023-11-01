import React from "react"

import ReviewsCarousel from "../../../components/reviewsCarousel";
import {
    ReviewsSectionCarouselWrapper,
    ReviewsSectionCount,
    ReviewsSectionStars,
    ReviewsSectionStyled,
    ReviewsSectionTitle,
    ReviewsSectionTitleBlock,
    ReviewsSectionTitleWrapper,
    ReviewsSectionUsers
} from './reviewsSection.styled'
import reviews from "./reviewsSection.data";
import {Star} from '../../../images/video-editing/icons'
import users from '../../../images/video-editing/users.png'

export const ReviewsSection = ({t}) => {
    const setting = {
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }
    return (
        <ReviewsSectionStyled>
            <ReviewsSectionTitleWrapper>
                <ReviewsSectionStars>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </ReviewsSectionStars>
                <ReviewsSectionTitle>
                    {t('Over')}
                    <ReviewsSectionTitleBlock>{t('20,000,000')}</ReviewsSectionTitleBlock>
                    {t('of satisfied clients!')}
                </ReviewsSectionTitle>
            </ReviewsSectionTitleWrapper>
            <ReviewsSectionUsers src={users} />
            <ReviewsSectionCount>
                <span>421937</span>
                {t('Reviews')}
            </ReviewsSectionCount>
            <ReviewsSectionCarouselWrapper>
                <ReviewsCarousel settings={setting} reviews={reviews}/>
            </ReviewsSectionCarouselWrapper>
        </ReviewsSectionStyled>
    )
}
