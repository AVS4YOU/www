import React from 'react';
import CookieConsent, {getCookieConsentValue} from "react-cookie-consent";
import styled from 'styled-components';
import Link from '../link';
import { useTranslation } from "react-i18next";
import Pl from '../../images/easter-event/easter_event_pl.png'

const CookieStyleN = styled.div`

    .CookieText{
        font-family: Open Sans;
        color: #fff;
        font-size: 14px;
    }
    .alert-warning{
        align-items: baseline;
        /*background-color: #1E5839;*/
        background-image: url(${Pl});
        background-size: cover;
        height: 70px;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        left: 0px;
        position: fixed;
        width: 100%;
        z-index: 999;
        bottom: 0px;
    }
   
    .text-capitalize{
      text-align:center;
        margin: 35px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    
        .cookiePL{
            color: #F4D272;
        }
    }

    @media only screen and (max-width: 600px) {
        .CookieText{
            font-size: 12px;
        }
      
        .text-capitalize{
            margin: 15px;
            position: relative;
        }
    }
`;
const CookieStyle = styled.div`
.alert-warning{bottom: 50px;}

    .CookieText{
        font-family: Open Sans;
        color: #fff;
        font-size: 14px;
    }
    .alert-warning{
        align-items: baseline;
        /*background: #32393E;*/
        background-image: url(${Pl});
        height: 70px;
        color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        left: 0px;
        position: fixed;
        width: 100%;
        z-index: 999;
        bottom: 50px;
    }
    .btn-primary{
        background: #F4D272;
        border: 0px;
        border-radius: 0px;
        box-shadow: none;
        cursor: pointer;
        height: 36px;
        color: #1E5839;
    }
    .btnWrapperClasses{
        position: relative;
        margin-right: auto;
        color: #1E5839;
    }
    .text-capitalize{
        margin: 35px;
        position: relative;
        margin-left: auto;
        .cookiePL{
            color: #F4D272;
        }
    }

    @media only screen and (max-width: 600px) {
        .CookieText{
            font-size: 12px;
        }
        .btnWrapperClasses{
            position: relative;
            margin-right: auto;
            top: 10px;
        }
        .text-capitalize{
            margin: 15px;
            position: relative;
            width: 60%;
        }
    }
`;

const CookieMessange = props => {

    const { t } = useTranslation('common');
    const styleww = (getCookieConsentValue("AVSUsersCookieMessages") === "true") ? '0px': '48px'
    return(
        <div>
        {(getCookieConsentValue("AVSEasterEvents") === "true")
        ? <CookieStyleN> 
         <div className="alert-warning" style={{bottom: `${styleww}`}}>
          <div className="text-capitalize">
            <span className="CookieText">{t("Surf better to find a")}<span className="cookiePL">{t("75% discount")}</span>{t("Good luck!")}</span>
          </div>
        </div>
      </CookieStyleN>
        : <CookieStyle>
            <CookieConsent
                hideOnAccept= {false}
                buttonText={t("Hunt now!")}
                cookieName="AVSEasterEvents"
                disableStyles={true}
                expires={5} // days save cookie
                buttonClasses="btn-primary"
                containerClasses="alert-warning"
                contentClasses="text-capitalize"
                buttonWrapperClasses="btnWrapperClasses" 
                onAccept= {() => {
                    window.location.reload(true);
                }}               
                >
                    <span className="CookieText">{t("Surf the website and find")}<span className="cookiePL">{t("9 EASTER EGGS")}</span>{t("with discounts up to")}<span className="cookiePL">{t("75% OFF!")}</span></span>
            </CookieConsent>
        </CookieStyle>
        }
        </div>
    )
}

export default CookieMessange;