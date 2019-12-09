import React from 'react';
import styled from 'styled-components';
import newsLetter from '../../images/common/icons/newsletter.svg';
import Text from '../text';

const StyledInfoPopup = styled.div`
    background-image: url(${newsLetter});
    background-position: 50% 16px;
    border-radius: 5px;
    position: fixed;
    background-repeat: no-repeat;
    background-color: #fff;
    top: 25%;
    padding: 50px;
    padding-top: 106px;
    max-width: 300px;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 10;

    .closeButton{
        position:absolute;
        top:0;
        right:0;
        font-size: 20px;
        cursor:pointer;
    }

    .popupHeader{
        padding-bottom: 20px;
        max-width: 130px;
        margin: auto;
    }
`;

const InfoPopup = (props) =>{
    return(
        <StyledInfoPopup>
            <div onClick={props.closePopupFunction} className="closeButton">
                Close button
            </div>
            <Text 
                color="#000000"
                fontSize={20}
                align="center"
                fontWeight={600}
                className="popupHeader"
            >
                Please check your inbox
            </Text>
            <Text
                color="#707070"
                fontSize={18}
                align="center"
                fontWeight={500}
            >
                A letter with $5 coupon code was sent to you by mail
            </Text>
        </StyledInfoPopup>
    )
}

export default InfoPopup;