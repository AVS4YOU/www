import React from 'react';
import styled from 'styled-components';
import newsLetter from '../../images/common/icons/newsletter.svg';
import closeIcon from '../../images/common/icons/close-popup.svg'
import Text from '../text';

const StyledPopupWrapper = styled.div`

    ${props => props.InfoPopupHidden && "display:none;"}

    .background{
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0, 0.4);
        z-index: 10;
    }

    .infoPopup{
        background-image: url(${newsLetter});
        background-position: 50% 35px;
        border-radius: 5px;
        position: fixed;
        background-repeat: no-repeat;
        background-color: #fff;
        top: 25%;
        padding: 40px;
        padding-top: 125px;
        max-width: 370px;
        margin: auto;
        left: 0;
        width: calc(100% - 40px);
        right: 0;
        z-index: 11;
        box-sizing: border-box;

        .closeButton{
            background-image: url(${closeIcon});
            background-repeat:no-repeat;
            background-size: 100%;
            position:absolute;
            top:16px;
            right:16px;
            height:16px;
            width: 16px;
            cursor:pointer;
        }

        .popupHeader{
            padding-bottom: 16px;
            max-width: 130px;
            margin: auto;
        }
    }
`;

const InfoPopup = (props) =>{
    return(
        <StyledPopupWrapper {...props}>
            <div onClick={props.closePopupFunction} className="background"></div>
            <div onClick={undefined} className="infoPopup">
                <div onClick={props.closePopupFunction} className="closeButton"></div>
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
            </div>
        </StyledPopupWrapper>
    )
}

export default InfoPopup;