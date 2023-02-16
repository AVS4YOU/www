import React from 'react';
import styled from 'styled-components';
import ReviewsSliderNew from '../reviews-slider-new';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../images/main-page/icons/star.svg';
import RevPeople from '../../images/main-page/icons/reviews-people.png'
import { useTranslation } from "react-i18next";

import Quote from '../../images/common/review-carousel/quote-orange.svg'

const StyledScreen = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: block !important;
    align-items: center;

    div{
        outline: none;
    }

    .carouselWrapper{
        width: 100%;
        display: inline-block;
        position: relative;
    }

    .carouselReview {
        position: relative;
        z-index: 2;
    }

    .carouselBlock {
        background-image: url(${Quote});
        background-repeat: no-repeat;
        background-size: 122px;
        width: 122px;
        height: 122px;
        position: absolute;
        left: -20px;
        top: -40px;
    }

    .carouselBlockBottom {
        background-image: url(${Quote});
        background-repeat: no-repeat;
        background-size: 122px;
        width: 122px;
        height: 122px;
        position: absolute;
        right: -20px;
        bottom: -30px;
        z-index: 0;
        transform: rotate(180deg);
    }

    .container{
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        padding: 0px 15px 47px; 
    }

    .orange{
        font-weight: 600;
        color: #FDA050;
    }

    .text{
        text-align: center;
    }

    .revPeople{
        margin: auto;
        display: block;
        padding-top: 10px;
    }

    .imgWrapper{
        height:16px;
        width:120px;
        margin:auto;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding-bottom: 20px;

        &>img {
            height:16px;
            width: 16px;
            margin: auto;
        }
    }

    @media (max-width: 1500px) {
        .carouselBlockBottom {          
            right: -20px;
            bottom: 0px;
        }
    }

    @media (max-width: 1200px) {
        .carouselBlockBottom {          
            right: -20px;
            bottom: 30px;
        }
    }

    @media (max-width: 1024px) {
        display: block;
        max-width: 600px;
        margin: auto;

        .carouselWrapper{
            display: block;
            width: 100%;
            margin: auto;
        }

        .container{
            display: block;
            width: 100%;
            margin-top: 70px;
        }

        .carouselBlockBottom {          
            right: -20px;
            bottom: 0px;
        }
    }

    @media (max-width: 750px) {

        padding-top: 50px;
        padding-bottom: 50px;

        .rewTextWrapper{
            display: block;
            padding: 0;
        }

        .quote{
            max-width: 150px;
            margin: auto;
            display: block;
        }

        .carouselBlockBottom {
            display: none;
        }
    }
`;

const ReviewsScreenNew = props => {

    const { t } = useTranslation('common');

    return(
        <PageContentWrapper className={props.className}>
            <StyledScreen>
                <div className="container">
                    <div className="imgWrapper">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                    <Text className="text" fontSize={20} fontWeight={600}>{t("Over")} <b className="orange">{t("20 000 000")}</b> {t("of satisfied clients!")}</Text>
                    <img className="revPeople" src={RevPeople} alt="People"/>
                    <Text className="text" color="#505B63" fontSize={18}>659133 {t("Reviews")}</Text>
                </div>
                <div className="carouselWrapper">
                    <div className='carouselBlock'></div>
                    <div className='carouselBlockBottom'></div>
                    <ReviewsSliderNew className='carouselReview'/>
                </div>
            </StyledScreen>
        </PageContentWrapper>
    )
}

export default ReviewsScreenNew;