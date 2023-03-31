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
        /*background-color: #1E5839;*/
        background-image: url(${Pl});
        height: 70px;
        color: white;
        display: flex;
        flex-wrap: wrap;
        left: 0px;
        width: 100%;
        z-index: 999;
        bottom: 0px;
        margin-left: auto;
        margin-right: auto;
        background-position-x: 65%;
    }
   
    .textcapitalize{
      text-align:center;
        margin-top: 35px;
        margin-bottom: 35px;
        margin-left: auto;
        margin-right: auto;
        position: relative;

        
        .cookiePL{
            color: #F4D272;
        }
    }

    @media only screen and (max-width: 600px) {
        display: none;
}
`;
const CookieStyle = styled.div`


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
        width: 100%;
        z-index: 999;
        
        background-position-x: 65%;
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
            display: none;
    }
`;

const lang = ['de','en','es','fr','it','jp']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

const CookieMessange = props => {

    const { t } = useTranslation('common');
    
    return(
        <div>
        {isSomeLang(props?.layoutProps?.pageContext?.locale) ?
        <div>
        {(getCookieConsentValue("AVSEasterEvents")  === "true")
        ? <CookieStyleN> 
         <div className="alert-warning">
          <div className="textcapitalize" style={{width:"100%",marginTop: "35px",textAlign:"center"}}>
            <span className="CookieText">{t("Surf better to find a")}<span className="cookiePL" style={{color: "#F4D272"}}>{t("75% discount")}</span>{t("Good luck!")}</span>
          </div>
        </div>
      </CookieStyleN>
        : <CookieStyle>
            <CookieConsent
                hideOnAccept= {false}
                buttonText={t("Hunt now!")}
                cookieName="AVSEasterEvents"
                disableStyles={true}
                expires={8} // days save cookie
                buttonClasses="btn-primary"
                containerClasses="alert-warning"
                contentClasses="text-capitalize"
                buttonWrapperClasses="btnWrapperClasses" 
                location="none"
                onAccept= {() => {
                    window.location.reload(true);
                }}               
                >
                    <span className="CookieText">{t("Surf the website and find")}<span className="cookiePL">{t("9 EASTER EGGS")}</span>{t("with discounts up to")}<span className="cookiePL">{t("75% OFF!")}</span></span>
            </CookieConsent>
        </CookieStyle>
        }
        </div>
        : <div style={{display:"none"}}></div>
    }
    </div>
    )
}

export default CookieMessange;