import React from 'react';
import CookieConsent from "react-cookie-consent";
import styled from 'styled-components';
import Link from '../link';
import { useTranslation } from "react-i18next";

const CookieStyle = styled.div`
    a{
        color: #009FFF;
        cursor: pointer;
        text-decoration: underline;
        font-size: 14px;
    }
    .CookieText{
        font-family: Open Sans;
        color: #fff;
        font-size: 14px;
    }
    .alert-warning{
        align-items: baseline;
        background: #32393E;
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
    .btn-primary{
        background: #676767;
        color: #fff;
        border: 0px;
        border-radius: 0px;
        box-shadow: none;
        cursor: pointer;
        height: 36px;
    }
    .btnWrapperClasses{
        position: relative;
        margin-right: auto;
        color: #fff;
    }
    .text-capitalize{
        margin: 15px;
        position: relative;
        margin-left: auto;
    }

    @media only screen and (max-width: 600px) {
        .CookieText{
            font-size: 12px;
        }
        a{
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

    return(
        <CookieStyle>
            <CookieConsent
                buttonText={t("I Agree")}
                cookieName="AVSUsersCookieMessages"
                disableStyles={true}
                expires={365} // days save cookie
                buttonClasses="btn-primary"
                containerClasses="alert-warning"
                contentClasses="text-capitalize"
                buttonWrapperClasses="btnWrapperClasses"
                >
                <span className="CookieText">{t("This site uses cookies By continuing to browse the site you agree to our")}
                <Link to="/privacy.aspx">{t("privacy policy")}</Link>{t("pointeCookie")}</span>
            </CookieConsent>
        </CookieStyle>
    )
}

export default CookieMessange;