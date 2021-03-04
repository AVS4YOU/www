import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import CheckMarkIcon from '../../images/common/icons/check-mark-icon.svg';

const StyledPopupWrapper = styled.div`
    padding: 50px 0;

    h4{
        font-size: 24px;
        text-align: center;
        padding:15px 0;
    }

    P{
        color: #707070;
        text-align: center;
    }

    img{
        display: table;
        margin: auto;
    }

    @media (max-width: 600px) {
        padding:0;
        margin: auto;
        max-width: 290px;

        h4{
            font-size: 20px;
            text-align: center;
            padding:15px 0;
        }
    
        P{
            color: #707070;
            font-size: 16px
            text-align: center;
        }
    }
`;

const InfoPopupForm = () => {
    return (
        <StyledPopupWrapper>
            <img src={CheckMarkIcon} className="CheckMarkIcon" alt="Check Mark Icon"/>
            <Text as="h4">Your message has been successfully sent.</Text>
            <Text as="p">Thank you very much. We will contact you promptly.</Text>
        </StyledPopupWrapper>
    )
}

export default InfoPopupForm;