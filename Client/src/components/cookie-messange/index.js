import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import styled, {css} from 'styled-components';
import Text from '../text';
import Link from '../link';
import { useTranslation } from "react-i18next";

const CookieStyle = styled.div`
    a{
        color: #009FFF;
        cursor: pointer;
        text-decoration: underline;
    }
    .CookieText{
        color: #fff;
        font-size: 18px;
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
`;

const CookieMessange = props => {

    const { t } = useTranslation('common');

    return(
        <CookieStyle>
            <CookieConsent
                buttonText={t("I Agree")}
                cookieName="UsersCookieMessages"
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