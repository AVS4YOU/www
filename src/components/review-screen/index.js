import React from 'react';
import styled, {css} from 'styled-components';
import ReviewsSlider from '../reviews-slider';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../images/main-page/icons/star.svg';
import RevPeople from '../../images/main-page/icons/reviews-people.png'


const StyledScreen = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    display: grid;
    grid-template-columns: 43% auto;
    align-items: center;

    div{
        outline: none;
    }

    .container{
        padding: 15px;   
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
`;

const ReviewsScreen = () => {
    return(
        <PageContentWrapper>
            <StyledScreen>
                <div>
                    <ReviewsSlider />
                </div>
                <div className="container">
                    <div className="imgWrapper">
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                    </div>
                    <Text className="text" fontSize={20} fontWeight={600}>Over <b className="orange">20,000,000</b> of satisfied clients!</Text>
                    <img className="revPeople" src={RevPeople}/>
                    <Text className="text" color="#505B63" fontSize={18}>659133 Reviews</Text>
                </div>
            </StyledScreen>
        </PageContentWrapper>
    )
}

export default ReviewsScreen;