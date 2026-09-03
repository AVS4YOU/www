import React from 'react';
import PropTypes from "prop-types";
import Header from "./header";
import styled from 'styled-components';
import "./layout.css";
import "../styles/common.less"
import Footer from "./footer";
import {TinyFooter} from "./footer/tinyFooter";
import {PageContext} from '../context/page-context';
import {Helmet} from "react-helmet";
import {withPrefix, Link} from "gatsby";
import Cookies from 'universal-cookie';
import CookieMessage from "../components/cookie-message";
import CookieConsent, {getCookieConsentValue} from "react-cookie-consent";
import CustomLink from '../components/link';
import {BlackFriday} from "../components/black-friday";
import Text from "../components/text";

import PlAVSbgLeft from "../images/pl/pl-bg-left.svg";
import PlAVSbgRight from "../images/pl/pl-bg-right.svg";
import PlAVSbg from "../images/pl/pl-bg_en.svg";
import BackToSchoolBgLeaves from "../images/back-to-school/back-to-school-bg-left.svg";
import BackToSchoolBgMobile from "../images/back-to-school/back-to-school-bg-mobile.svg";
import bannerAVSbg from "../images/pl/bg_banner.png";
import bannerImg from '../images/pl/img_banner.png'
import bannerButton from '../images/pl/button_banner.svg'
import banner from '../images/banner.png'
import {XClose} from "../images/icons/xClose";
import { Trans } from 'react-i18next';

const backToSchoolBannerLinks = {
    en: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&LANGUAGES=en&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    fr: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=fr&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    de: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=de&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    es: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=es&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    it: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=it&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    jp: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&CURRENCY=JPY&LANGUAGES=ja&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    nl: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=nl&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    pt: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&LANGUAGES=pt-br&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    pl: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=pl&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    zh: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=CNY&LANGUAGES=zh&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    da: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=EUR&LANGUAGES=da&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
    ko: "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=KRW&LANGUAGES=ko&ORDERSTYLE=nLW0m5S5iLk=&COUPON=School25Kit&CLEAN_CART=ALL",
};

const StyledPL = styled.div`
/* display: none; */
position: relative;
text-align: center;
background: rgba(21, 18, 37, 1);

  .PLnewAvs {
    display: flex;
    width: 100%;
    height: 64px;
    cursor: pointer;
    font-family: Open Sans, sans-serif;
    align-items: center;
    justify-content: center;
    gap: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background: radial-gradient(29.45% 121.78% at 50% 50%, #FEFEFE 0%, #FFF7F1 100%);
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
        justify-content: space-between;
        gap: 8px;
        padding-left: 16px;
        background: radial-gradient(35.94% 148.6% at 21.72% 50%, #FEFEFE 0%, #FFF7F1 100%);
    }
  }
  .bgLeft {
    flex-shrink: 0;
    width: 364px;
    height: 64px;
    background-image: url(${BackToSchoolBgLeaves});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 1600px) {
        position: absolute;
        left: 0;
        top: 0;
    }

    @media (max-width: 1024px) {
        display: none;
    }
  }

  .bgRight {
    flex-shrink: 0;
    width: 364px;
    height: 64px;
    background-image: url(${BackToSchoolBgLeaves});
    background-repeat: no-repeat;
    background-size: cover;
    transform: scaleX(-1);

    @media (min-width: 1600px) {
        position: absolute;
        right: 0;
        top: 0;
    }

    @media (max-width: 1024px) {
        display: none;
    }
  }

  .bgRightMobile {
    display: none;
    flex-shrink: 0;
    width: 100px;
    height: 64px;
    background-image: url(${BackToSchoolBgMobile});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 1024px) {
        display: block;
    }
  }

    .PL-box {
        font-family: "Permanent Marker";
        font-weight: 400;
        text-transform: none;
        color: #FE9235;
        display: inline-flex;
        flex-shrink: 0;
        white-space: nowrap;
        grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
        width: max-content;
        align-items: center;
        min-width: max-content;
        font-size: 28px;
        z-index: 6;

        .PL-desc3.beginningBanner {
            margin: 0;
        }

        .span-text-1 {
            font-family: "Permanent Marker";
            font-weight: 400;
            color: #32393E;
        }

        .span-text-2 {
            color: #FE9235;
            font-family: "Permanent Marker";
        }

        @media (max-width: 1200px) {
            font-size: 16px;
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }

    .PL-box.mobile {
        display: none;
        font-family: "Permanent Marker";
        font-weight: 400;
        text-align: left;
        flex: 1 1 auto;
        min-width: 0;
        max-width: 100%;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.28px;
        position: relative;
        z-index: 6;

        .span-text-1 {
            font-family: "Permanent Marker";
            font-weight: 400;
            color: #32393E;
        }

        .span-text-2 {
            color: #FE9235;
            font-family: "Permanent Marker";
        }

        @media (max-width: 1024px) {
            display: block;
            white-space: normal;
        }
    }

    .fr {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
        }
    }

    .de {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
        }
    }
    .es {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
            gap: 0px;

            .PL-desc1 {
                margin-left: 5px;
                margin-right: 5px;
            }
        }
    }
    .it {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
            gap: 0px;

            .PL-desc1 {
                margin-left: 5px;
                margin-right: 5px;
            }
        }
    }
    .jp {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
            font-family: "Segoe UI", sans-serif;
            font-weight: 900;
            min-width: 810px;
            justify-content: center;

            @media (max-width: 1500px) {
                min-width: unset;
            }
            @media (max-width: 1200px) {
                min-width: 800px;
            }
            @media (max-width: 1160px) {
                min-width: unset;
            }

            .span-text-1, .span-text-2 {
                font-family: "Segoe UI", sans-serif;
                font-weight: 900;
            }
        }

        .PL-box.mobile {
            font-family: "Segoe UI", sans-serif;
            font-weight: 900;

            .span-text-1, .span-text-2 {
                font-family: "Segoe UI", sans-serif;
                font-weight: 900;
            }
        }

        .PL-desc3.beginningBanner {
            font-family: "Segoe UI", sans-serif;
            font-weight: 900;

            @media (max-width: 1200px) {
                font-size: 14px;
            }
        }
    }

    .beginningBanner {
        grid-area: beginningBanner;
    }
    .textBannerContinue {
        grid-area: textBannerContinue;
    }
    .colorBanner {
        grid-area: colorBanner;
    }
    
    .discountCoupon {
        grid-area: discountCoupon;
    }
    
    .textBanner {
        grid-area: textBanner;
    }
    
    .endingBanner {
        grid-area: endingBanner;
    }

    .PL-box-mobile {
        display: none;
    }

    @media screen and (max-width: 1200px) {

        .PL-box {
            gap: 3px;
        }

        .PL-desc1 {
            font-size: 13px;
            font-weight: 600;
            line-height: 19px;
            width: max-content;
        }
    
        .PL-desc2 {
            font-size: 13px;
            font-weight: 700;
            line-height: 19px;
            width: max-content;
        }
        
        /* .PL-desc3 {
            font-size: 13px;
            font-weight: 400;
            line-height: 19px;
            width: max-content;
        } */

        .PL-desc4 {
            font-size: 13px;
            font-weight: 700;
            line-height: 19px;
        }
    }
    
`;

const StyledLayout = styled.div`
  min-width: 300px;
`;

const BannerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1000000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerPaddingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 20px 24px 20px;
`

const BannerWrapperContent = styled.div`
  background: #FFF;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  max-width: 387px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  @media screen and (max-width: 450px) {
    width: calc(100% - 40px);
  }
`

const BannerWrapperCloseButton = styled.button`
  margin: 0 0 7px auto;
  padding: 0;
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const BannerWrapperToday = styled.p`
  margin: 7px 0 2px 0;
  height: 38px;
  color: #F07D1A;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`

const BannerWrapperLinkWrapper = styled.span`
  display: flex;
  justify-content: center;

  a {
    background: #F07D1A;
    width: 176px;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 7.5px 0;
  }
`

const BannerWrapperBox = styled.div`
  min-height: 134px;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  color: #232730;
  margin-bottom: 12px;
  
  @media screen and (max-width: 600px) {
    min-height: 90px;
  }
`

const BannerWrapperSale = styled.h4`
  margin: 0;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`

const BannerWrapperSaleDesc = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`

const BannerImg = styled.img`
    margin-bottom: -3px;
`

const SummerBannerWrapper = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: max-content;
  top: 50%;
  transform: translateY(-50%);

  > div {
    max-width: 231px;
    max-height: 572px;
    position: relative;
  }

  @media screen and (max-width: 1023px) {
    > div {
        display: none;
    }
}
`

const SummerBannerPaddingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13px 20px 40px 20px;
  background-image: url(${bannerAVSbg});
  max-width: 231px;
  max-height: 572px;
`

const SummerBannerWrapperContent = styled.div`
  background: #FFF;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  max-width: 387px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`

const SummerBannerWrapperCloseButton = styled.button`
  margin: 0 0 7px auto;
  padding: 0;
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const SummerBannerWrapperToday = styled.p`
  background-color: #ED3737;
  padding: 16px;
  margin: 0;

  &.de {
    padding: 16px 11px;
  }

  h1 {
    font-weight: 700;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    font-family: "Inter", sans-serif;

    &.hot {
        font-size: 53px;
        line-height: 48px;
        margin-top: 16px;
    }
        
    &.summer {
        font-size: 25px;
    }

    &.deal {
        font-size: 35px;
        line-height: 36px;
    }
}

&.de h1 {
    &.hot {
        font-size: 44px;
        margin: 24px 0 5px;
    }

    &.summer {
        font-size: 20px;
        margin-bottom: 16px;
    }
}

&.fr h1 {
    &.hot {
        font-size: 40px;
        margin-top: 20px;
    }
        
    &.summer {
        font-size: 30px;
        margin-bottom: 20px;
    }
}

&.es h1 {
    &.hot {
        margin-top: 30px;
        font-size: 34px;
    }
        
    &.summer {
        font-size: 22px;
        margin-bottom: 20px;
    }
}

&.it h1 {
  &.hot {
    margin-top: 36px;
    font-size: 34px;
  }
    
  &.summer {
    font-size: 29px;
    margin-bottom: 10px;
  }
}

&.jp h1 {
    &.hot {
        margin-top: 30px;
        font-size: 41px;
    }
        
    &.summer {
        font-size: 25px;
        margin-bottom: 20px;
    }
}
`

const SummerBannerWrapperLinkWrapper = styled.span`
  display: flex;
  justify-content: center;

  a {
    background: #ED3737;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 10px 11px;
    border: 2px solid #FFFFFF;
    font-family: "Kumbh Sans";
    line-height: normal;
  }

  .image_link { 
    color: #FFF;
    text-align: center;
    padding: 0;
    border: none;
    line-height: 0;
  }
`

const SummerBannerWrapperBox = styled.div`
  min-height: 134px;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  color: #232730;
  margin-bottom: 12px;

  .sconti {
    display: none;
    font-weight: 700;
    line-height: normal;
    color: #FFFFFF;
    text-align: center;
    font-family: "Kumbh Sans", sans-serif;
  }
  
  &.jp .sconti, &.it .sconti {
    display: block;
  }

  &.jp .sconti {
    font-family: "Inria Sans";
    margin-top: 59px;
    line-height: 10px;
  }

  &.it .sconti {
    margin-top: 15px;
  }
`

const SummerBannerWrapperSale = styled.h4`
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
  margin-top: 40px;

  &.de {
    margin-top: 30px;
  }

  &.es {
    margin-top: 35px;
  }

  &.fr {
    margin-top: 24px;
  }

  &.jp, &.it {
    margin-top: 0px;
  }

  &.it {
    margin-top: -10px;
  }

  h1 {
    font-weight: 700;
    line-height: normal;
    color: #FFFFFF;
    font-family: "Kumbh Sans", sans-serif;
    text-align: left;

    &.off {
        font-size: 25px;
    }

    &.percent {
        font-size: 56px;
        line-height: 48px;
    }
  }

  &.de h1.off {
    font-size: 17px;
  }

  &.it h1.percent {
    margin-top: 30px;
  }

  &.fr h1, &.es h1 {
    &.off {
        font-size: 16px;
        line-height: 17px;
        text-align: left;
    }

    &.percent {
        font-size: 56px;
    }
  }
`

const SummerBannerWrapperSaleDesc = styled.p`
    margin: -10px 0 0;

    h3, h5 {
        font-family: "Inria Sans";
        font-weight: 700;
        text-align: center;
        color: #FFFFFF;
    }

    h5 {
        padding: 48px 0 20px;
    }

    &.fr h3, &.es h3, &.it h3 {
        font-size: 22px;
    }

    &.de h5 {
        padding: 18px 0 25px;
    }

    &.fr h5 {
        padding: 30px 0 22px;
    }

    &.es h5 {
        padding: 35px 0 20px;
    }

    &.it h5 {
        padding: 34px 0 20px;
    }

    &.jp h5 {
        padding: 25px 0 35px;
    }
`

const SummerBannerImg = styled.img`
    position: absolute;
`

const SummerBannerButton = styled.img`
    background: #ED3737;
    font-weight: 400;
    padding: 12px 12px;
    border-top: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    border-right: 2px solid #FFFFFF;

    &.fr, &.de {
        padding: 21px 12px;
    }

    &.jp {
        padding: 14px 12px;
    }
`

const languageCodes = [
    "en-US",
    "de-DE",
    "fr-FR",
    "es-ES",
    "it-IT",
    "jp-JA",
    "nl-NL",
    "pl-PL",
    "da-DK",
    "pt-BR",
    "ko-KR"
];

class Layout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isTablet: false,
            isMobile: false,
            showBanner: false,
            showSummerBanner: false,
            cookiesIsAccepted: false,
            showBlackFriday: false,
            userCurrencyEnLocale: 'usd',
        }

        const OriginalPath = this.props.pageContext.originalPath;

        this.pageName = OriginalPath ? this.props.pageContext.originalPath.replace(/\//g, '') : "";
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onOpenBanner = this.onOpenBanner.bind(this)
        this.onCloseBanner = this.onCloseBanner.bind(this)
        this.onClosePopup = this.onClosePopup.bind(this)
        this.setItemToSessionStorage = this.setItemToSessionStorage.bind(this)
    }

    componentDidMount() {
        this.detectUserCurrency();

        this.updateWindowDimensions();
        const pages = JSON.parse(sessionStorage.getItem('pages'))
        if (window.location.pathname === '/register.aspx') {
            this.setItemToSessionStorage({label: 'pages', value: 'visited'})
        } else if (pages && pages !== 'visited') {
            const paresPages = [...pages, window.location.pathname]
            const newPages = [...new Set(paresPages)]
            this.setItemToSessionStorage({label: 'pages', value: newPages})
        } else if (pages !== 'visited') {
            const newPages = [window.location.pathname]
            this.setItemToSessionStorage({label: 'pages', value: newPages})
        }
        if (this.props.getDevice) {

            if (this.state.isMobile === true) {
                this.props.getDevice("Mobile");
            } else if (this.state.isTablet === true) {
                this.props.getDevice("Tablet");
            } else {
                this.props.getDevice("Desktop");
            }
        }

        const excludedPaths = [
            "/register.aspx",
            "/uninstall-offer.aspx",
            "/video-editor.aspx",
            "/video-editing-software.aspx",
            "/special-offer.aspx",
            "/avs-video-editor-year.aspx",
            "/avs-video-editor-unlimited.aspx",
            "/avs-video-remaker-giveaway.aspx",
            "/avs-editor.aspx",
            "/avs-special-offer.aspx"
          ];

        if (this.props.pageContext.locale === 'en' && !excludedPaths.some(path => path === window.location.pathname)) {
            const observer = new MutationObserver((mutations) => {
                const scrollTopElement = document.querySelector('.ScrollTopMain');
                if (scrollTopElement) {
                    scrollTopElement.style.cssText = 'bottom: 50px';
                    observer.disconnect();
                }

                if (scrollTopElement && !getCookieConsentValue("AVSUsersCookieMessages")) {
                    scrollTopElement.style.cssText = 'bottom: 80px';
                    observer.disconnect();
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        // if (this.props.pageContext.locale === 'en' && !excludedPaths.some(path => path === window.location.pathname)) {
        //     if (!document.querySelector('#rf-script')) {
        //         const popupScript = document.createElement('script');
        //         popupScript.id = 'rf-script';
        //         popupScript.src = 'https://referral-factory.com/assets/js/widget.js?code=cd5TPKTj';
        //         document.body.appendChild(popupScript);
        //     }
            
        //     if (!getCookieConsentValue("AVSUsersCookieMessages")) {
        //         const style = document.createElement('style');
        //         style.innerHTML = `
        //             .rf-widget-launch {
        //                 bottom: 70px !important;
        //             }
        //         `;
        //         document.head.appendChild(style);
        //     } else {
        //         const style = document.createElement('style');
        //         style.innerHTML = `
        //             .rf-widget-launch {
        //                 bottom: 30px !important;
        //             }
        //         `;
        //         document.head.appendChild(style);
        //     }

        //     const style = document.createElement('style');
        //         style.innerHTML = `
        //         @media screen and (max-width: 768px) {
        //             .rf-widget-launch {
        //                 right: 15px !important;
        //             }
        //         }`;
        //         document.head.appendChild(style);
        // } else if (excludedPaths.some(path => path === window.location.pathname)) {
        //     const existingScript = document.querySelector('#rf-script');
        //     const existingWidget = document.querySelector('.rf-widget-launch');
        
        //     if (existingScript) {
        //         document.body.removeChild(existingScript);
        //     }
        
        //     if (existingWidget) {
        //         existingWidget.remove(); 
        //     }
        // }

        document.body.addEventListener('resize', this.updateWindowDimensions);

        const summerBannerClosed = sessionStorage.getItem('summer_banner_closed') === 'true';
        this.setState({
            showSummerBanner: !summerBannerClosed,
        });

        document.body.addEventListener('mouseleave', this.onMouseLeave)

        const queryString = require('query-string');
        const parsed = queryString.parse(document.location.search);
        const cookies = new Cookies();
        if (parsed.SRC) {
            cookies.set('SRC', parsed.SRC, {path: '/'});
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('mouseleave', this.onMouseLeave)
        if (this.script) {
            document.body.removeChild(this.script);
        }
    }

    updateWindowDimensions() {
        this.setState({
            isTablet: window.innerWidth < 1050,
            isMobile: window.innerWidth < 750
        })
    }

    onAcceptClick = () => {
        this.setState({
            cookiesIsAccepted: true
        })
    }

    onMouseLeave(event) {
        const pages = JSON.parse(sessionStorage.getItem('pages'))

        if (pages === null || pages === 'visited' || this.state.isMobile) return
        if (Array.isArray(pages) && pages.length < 3) return;

        event.preventDefault()
        event.returnValue = ''
        this.setState({
            showBanner: true
        })
    }

    setItemToSessionStorage = ({label, value}) => {
        sessionStorage.setItem(String(label), JSON.stringify(value))
    }

    setItemToSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn("SessionStorage error:", e);
        }
    }

    onClosePopup = (e) => {
        e.stopPropagation();
        this.setState({
            showBanner: false,
        })
        this.setItemToSessionStorage({label: 'pages', value: 'visited'})
    }

    onOpenBanner = (e) => {
      e.stopPropagation();
      this.setState({
        showBlackFriday: true
      })
    }

    onCloseBanner = (e) => {
        e.stopPropagation();
        // sessionStorage.setItem('summer_banner_closed', 'true');
        this.setState({
            // showSummerBanner: false,
            showBlackFriday: false
        });
    }

    detectUserCurrency = async () => {
        const cachedCurrency = sessionStorage.getItem('userCurrencyEnLocale');
        if (cachedCurrency) {
            this.setState({ userCurrencyEnLocale: cachedCurrency });
            return;
        }

        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const currency = data.country_code === 'GB' ? 'gbp' : 'usd';
            // console.log('Detected country:', data.country_code, 'Currency:', currency);
            sessionStorage.setItem('userCurrencyEnLocale', currency);

            this.setState({ userCurrencyEnLocale: currency });
        } catch (error) {
            console.error('Error detecting currency:', error);
            this.setState({ userCurrencyEnLocale: 'usd' });
        }
    }

    getPurchaseLink = () => {
        const locale = this.props.pageContext.locale;

        if (locale === 'en') {
            const currency = this.state.userCurrencyEnLocale || 'usd';

            console.log('Purchase link currency:', currency);

            return currency === 'gbp'
                ? this.props.t("avs pl link gbp")
                : this.props.t("avs pl link");
        }

        return this.props.t("avs pl link");
    }

    componentDidUpdate() {
        if (this.state.cookiesIsAccepted) {
            const style = document.createElement('style');
            style.innerHTML = `
                .rf-widget-launch {
                    bottom: 30px !important;
                }
            `;
            document.head.appendChild(style);

            const scrollTopElement = document.querySelector('.ScrollTopMain');
            if (scrollTopElement) {
                scrollTopElement.style.cssText = 'bottom: 40px';
            }
        }

        if (this.props.getDevice) {

            if (this.state.isMobile === true) {
                this.props.getDevice("Mobile");
            } else if (this.state.isTablet === true) {
                this.props.getDevice("Tablet");
            } else {
                this.props.getDevice("Desktop");
            }
        }
    }

    render() {
        return (
            <PageContext.Provider value={this.props.pageContext}>
                <Helmet>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                    <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="0" />
                    {this.props.metaDescription && <meta name="description" content={this.props.metaDescription}/>}
                    {this.props.metaKeywords && <meta name="keywords" content={this.props.metaKeywords}/>}
                    {this.props.pageContext.originalPath}
                    <link rel="canonical"
                          href={"https://www.avs4you.com/" + (this.props.pageContext.locale === "en" ? "" : "" + (this.props.pageContext.locale + "/")) + this.pageName}></link>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>

                    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kumbh+Sans:wght@100..900&family=Montserrat:wght@100..900&family=Permanent+Marker&display=swap"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kumbh+Sans:wght@100..900&family=Montserrat:wght@100..900&family=Permanent+Marker&display=swap" rel="stylesheet" media="all" onLoad="this.media='all'"></link>
                    <script src="https://secure.avangate.com/content/check_affiliate_v2.js"></script>
                    {languageCodes.map((languageCode) => {
                        let language = languageCode.split("-")[0];
                        language = language === "en" ? "" : language + "/";
                        return (
                            <link rel="alternate" href={"https://www.avs4you.com/" + language + this.pageName}
                                  hrefLang={languageCode}></link>
                        )
                    })}

                    <script>
                        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-1338774-7');
            `}
                    </script>

                    <script>
                        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WMB2TZX');
            `}
                    </script>

                    <script>
                        {`
            (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],
            f=function(){var o={ti:"4024645"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")}
            ,n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
            {var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)}
            ,i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})
            (window,document,"script","//bat.bing.com/bat.js","uetq");
            `}
                    </script>

                    <script src={withPrefix('impact-write-cookie.js')} type="text/javascript"/>
                </Helmet>

                {!this.props.headerIsDisabled && !this.props.plNewsIsDisabled ? <StyledPL>

                  <a href={backToSchoolBannerLinks[this.props.pageContext.locale] || backToSchoolBannerLinks.en} style={{textDecoration: 'none'}}>
                  {/* <a onClick={this.onOpenBanner} style={{textDecoration: 'none'}}> */}
                  {/* <a href={this.getPurchaseLink()} target="_blank" style={{textDecoration: 'none'}}> */}
                    <div className={`PLnewAvs ${this.props.pageContext.locale}`}>

                        <div className='bgLeft'></div>

                        <div className="PL-box">
                            <p className="PL-desc3 beginningBanner">
                                <Trans i18nKey="backToSchoolBanner"
                                    components={[
                                        <span className="span-text-1" />,
                                        <span className="span-text-2" />
                                    ]}
                                />
                            </p>
                        </div>

                        <p className="PL-box mobile">
                            <Trans i18nKey="backToSchoolBanner"
                                components={[
                                    <span className="span-text-1" />,
                                    <span className="span-text-2" />
                                ]}
                            />
                        </p>

                        <div className='bgRight'></div>
                        <div className='bgRightMobile'></div>

                    </div>
                  </a>
                </StyledPL> : <div></div>}



                {!this.props.headerIsDisabled && <Header customBackgroundColor={this.props.customBackgroundColor} isTransparentHeader={this.props.isTransparentHeader} availableLocales={this.props.pageContext.availableLocales}
                                                         locale={this.props.pageContext.locale} t={this.props.t}/>}
                <StyledLayout className={this.props.className}>
                {/* <main>{this.props.children}</main> */}
                {this.state.showBlackFriday && !this.state.isMobile ? <main><BlackFriday locale={this.props.pageContext.locale} t={this.props.t} onCloseBanner={this.onCloseBanner}/></main> : <main>{this.props.children}</main>}

                </StyledLayout>
                <CookieMessage onAcceptClick={this.onAcceptClick} />
                {this.state.showBanner  && !(this.pageName === 'advent-calendar.aspx') && 
                    <BannerWrapper onClick={this.onClosePopup}>
                        <BannerWrapperContent id="banner_popup" onClick={(event) => event.stopPropagation()}>
                            <BannerPaddingBox>
                                <BannerWrapperCloseButton onClick={this.onClosePopup}>
                                    <XClose/>
                                </BannerWrapperCloseButton>
                                <BannerWrapperToday>{this.props.t('Only today')}</BannerWrapperToday>
                                <BannerWrapperBox>
                                    <BannerWrapperSale>{this.props.t("70% OFF!")}</BannerWrapperSale>
                                    <BannerWrapperSaleDesc>
                                        {this.props.t("5 tools in 1 package")}
                                    </BannerWrapperSaleDesc>
                                </BannerWrapperBox>
                                <BannerWrapperLinkWrapper>
                                    <CustomLink id="get-it-now_popup" to="/register.aspx">{this.props.t("Get It Now")}</CustomLink>
                                </BannerWrapperLinkWrapper>
                            </BannerPaddingBox>
                            <BannerImg src={banner}/>
                        </BannerWrapperContent>
                    </BannerWrapper>
                }

                {/* {this.state.showSummerBanner && !this.props.headerIsDisabled &&
                    <SummerBannerWrapper>
                        <SummerBannerWrapperContent onClick={(event) => event.stopPropagation()}>
                            <SummerBannerImg src={bannerImg}/>
                            <SummerBannerPaddingBox>
                                <SummerBannerWrapperCloseButton onClick={this.onCloseBanner}>
                                    <XClose/>
                                </SummerBannerWrapperCloseButton>
                                <SummerBannerWrapperToday className={`${this.props.pageContext.locale}`}>
                                    <Text as="h1" className="hot">{this.props.t("Hot")}</Text>
                                    <Text as="h1" className="summer">{this.props.t("Summer")}</Text>
                                    <Text as="h1" className="deal">{this.props.t("Deal")}</Text>
                                </SummerBannerWrapperToday>
                                <SummerBannerWrapperBox className={`${this.props.pageContext.locale}`}>
                                    <Text as="h4" fontSize={21} className="sconti">{this.props.t("Sconti del")}</Text>
                                    <SummerBannerWrapperSale className={`${this.props.pageContext.locale}`}>
                                        <Text as="h1" fontSize={100}>{this.props.t("30")}</Text>
                                        <div>
                                            <Text as="h1" className="percent">{this.props.t("%")}</Text>
                                            <Text as="h1" className="off">{this.props.t("OFF")}</Text>
                                        </div>
                                    </SummerBannerWrapperSale>
                                    <SummerBannerWrapperSaleDesc className={`${this.props.pageContext.locale}`}>
                                        <Text as="h3" fontSize={25}>{this.props.t("AVS4YOU tools")}</Text>
                                        <Text as="h5" fontSize={17}>{this.props.t("Only in july")}</Text>
                                    </SummerBannerWrapperSaleDesc>
                                </SummerBannerWrapperBox>
                                <SummerBannerWrapperLinkWrapper>
                                    <CustomLink id="summer_banner" to="/summer-sale.aspx">{this.props.t("GRAB THE DEAL")}</CustomLink>
                                    <Link className="image_link" to="/summer-sale.aspx"><SummerBannerButton className={`${this.props.pageContext.locale}`} src={bannerButton}/></Link>
                                </SummerBannerWrapperLinkWrapper>
                            </SummerBannerPaddingBox>
                        </SummerBannerWrapperContent>
                    </SummerBannerWrapper>
                } */}
                {!this.props.footerIsDisabled && (this.props.isTinyFooter ? <TinyFooter hideLine={this.pageName === 'avs-slideshow-maker.aspx'} t={this.props.t} /> :<Footer locale={this.props.pageContext.locale} t={this.props.t}/>)}
            </PageContext.Provider>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    title: "",
    metaDescription: "",
    metaKeywords: "",
}

export default Layout