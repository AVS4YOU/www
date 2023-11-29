import React from "react";

import {
    ReviewsSectionStyled,
    ReviewsSectionContainer,
} from './reviewsSection.styled'
import {
    ReviewsSectionCarouselWrapper,
    ReviewsSectionCount,
    ReviewsSectionStars,
    ReviewsSectionTitle,
    ReviewsSectionTitleBlock,
    ReviewsSectionTitleWrapper,
    ReviewsSectionUsers
} from "./reviewsSection.styled";
import {Star} from "../../../images/video-editing/icons";
import users from "../../../images/video-editing/users.png";
import ReviewsCarousel from "../../../components/reviewsCarousel";
import reviews from "./reviewsSection.data";

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
            <ReviewsSectionContainer>
                <ReviewsSectionTitleWrapper>
                    <ReviewsSectionStars>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </ReviewsSectionStars>
                    <ReviewsSectionTitle>
                        {t('Trusted by')}
                        <ReviewsSectionTitleBlock>{t('millions')}</ReviewsSectionTitleBlock>
                        {t('of creators worldwide')}
                    </ReviewsSectionTitle>
                </ReviewsSectionTitleWrapper>
                <ReviewsSectionUsers src={users}/>
                <ReviewsSectionCount>
                    <span>421937</span>
                    {t('Reviews')}
                </ReviewsSectionCount>
                <ReviewsSectionCarouselWrapper>
                    <ReviewsCarousel settings={setting} reviews={reviews}/>
                </ReviewsSectionCarouselWrapper>
            </ReviewsSectionContainer>
        </ReviewsSectionStyled>
    )
}
