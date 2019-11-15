import React from 'react';
import styled from 'styled-components';
import Text from '../text'
import Quote from '../../images/common/review-carousel/quote.svg'

const StyledItem = styled.div`
    &.rewWrapper{
        display: grid !important;
        grid-template-columns: 150px 1fr;
        grid-gap: 35px;
    }

    .avatar{
        background-image: url(${props => props.avatar});
        background-size: 146px;
        background-repeat: no-repeat;
        background-position: 50%;
        height:150px;
        z-index:2;
        position:relative;

    }

    .quote{
        position:relative;

        &:before{
            content: '';
            display: block;
            background-image: url(${Quote});
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: 50%;
            width:42px;
            height: 42px;
            z-index:1;
            position:absolute;
        }
    }

    .name{
        text-align: center;
        padding-top: 10px;
    }

    .reviewHeader{
        padding-bottom: 10px;
    }

    .reviewText{
        line-height: 1.7;
    }
`;

const ReviewCarouselItem = (props) => {
    return(
        <StyledItem className="rewWrapper" {...props}>
            <div className="quote">
                <div className="avatar"></div>
                <Text className="name" color="#888F95" fontSize={16}>{props.name}</Text>
            </div>
            <div>
                <Text fontWeight={600} fontSize={30} color="#000000" className="reviewHeader">{props.revHeader}</Text>
                <Text className="reviewText" color="#505B63">{props.revText}</Text>
            </div>
        </StyledItem>
    )
}

export default ReviewCarouselItem;