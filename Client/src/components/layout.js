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

import PlAVSbgLeft from "../images/pl/pl-bg-left.svg";
import PlAVSLeft from "../images/pl/pl-left.svg";
import PlAVSbgRight from "../images/pl/pl-bg-right.svg";
import PlAVSRight from "../images/pl/pl-right.svg";
import banner from '../images/banner.png'
import {XClose} from "../images/icons/xClose";

const StyledPL = styled.div`
  position: relative;
  text-align: center;
  background: #EDF9FF;
  
  .PLnewAvs {
    display: flex;
    width: 100%;
    height: 60px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-family: Open Sans, sans-serif;
    align-items: center;
    justify-content: space-between;
  }
  .bgLeft {
    width: 100%;
    height: 60px;
    background-image: url(${PlAVSbgLeft});
    background-repeat: no-repeat;
    background-position-x: 0%;
    max-width: 524px;
    background-size: auto 60px;
    position: relative;
  }
  
  .bgRight {
    width: 100%;
    background-image: url(${PlAVSbgRight});
    background-repeat: no-repeat;
    height: 63px;
    background-position: 100% 100%;
    max-width: 524px;
    background-size: auto 60px;
    position: relative;
  }
    
    .PL-box {
        height: 100%;
        color: #32393E; 
        display: inline-flex;
        grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
        width: max-content;
        gap: 7px;
        align-items: center;
        margin: 0 24px;
        min-width: max-content;
    }
    
    .PL-desc1 {
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        color: #FE9235; 
    }
    
    .PL-desc2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
    }
    
    .PL-desc3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
    }
    .PL-desc4 {
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        color: #FFFFFF;
        background-color: #FE9235;
        padding: 8px 10px;
        border-radius: 8px;
    }
    .PL-desc5 {
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        background-size: 100%;
        padding: 4px 10px 4px;
        background-repeat: no-repeat;
        width: max-content;
        background: #FB5363;
        color: #FFFFFF;
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
        }
    }
    .it {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
        }
    }
    .jp {
        .PL-box {
            grid-template-areas: "beginningBanner colorBanner textBanner discountCoupon textBannerContinue endingBanner";
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
        
        .PL-desc3 {
            font-size: 13px;
            font-weight: 600;
            line-height: 19px;
            width: max-content;
        }

        .PL-desc4 {
            font-size: 13px;
            font-weight: 700;
            line-height: 19px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .PLnewAvs{
            display: none;
        }

        .PL-box {
            display: none;
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
  z-index: 10;
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
            cookiesIsAccepted: false,
        }

        const OriginalPath = this.props.pageContext.originalPath;

        this.pageName = OriginalPath ? this.props.pageContext.originalPath.replace(/\//g, '') : "";
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onClosePopup = this.onClosePopup.bind(this)
        this.setItemToSessionStorage = this.setItemToSessionStorage.bind(this)
    }

    componentDidMount() {

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
                    scrollTopElement.style.cssText = 'bottom: 100px';
                    observer.disconnect();
                }

                if (scrollTopElement && !getCookieConsentValue("AVSUsersCookieMessages")) {
                    scrollTopElement.style.cssText = 'bottom: 130px';
                    observer.disconnect();
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        if (this.props.pageContext.locale === 'en' && !excludedPaths.some(path => path === window.location.pathname)) {
            if (!document.querySelector('#rf-script')) {
                const popupScript = document.createElement('script');
                popupScript.id = 'rf-script';
                popupScript.src = 'https://referral-factory.com/assets/js/widget.js?code=cd5TPKTj';
                document.body.appendChild(popupScript);
            }
            
            if (!getCookieConsentValue("AVSUsersCookieMessages")) {
                const style = document.createElement('style');
                style.innerHTML = `
                    .rf-widget-launch {
                        bottom: 70px !important;
                    }
                `;
                document.head.appendChild(style);
            } else {
                const style = document.createElement('style');
                style.innerHTML = `
                    .rf-widget-launch {
                        bottom: 30px !important;
                    }
                `;
                document.head.appendChild(style);
            }

            const style = document.createElement('style');
                style.innerHTML = `
                @media screen and (max-width: 768px) {
                    .rf-widget-launch {
                        right: 15px !important;
                    }
                }`;
                document.head.appendChild(style);
        } else if (excludedPaths.some(path => path === window.location.pathname)) {
            const existingScript = document.querySelector('#rf-script');
            const existingWidget = document.querySelector('.rf-widget-launch');
        
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        
            if (existingWidget) {
                existingWidget.remove(); 
            }
        }

        document.body.addEventListener('resize', this.updateWindowDimensions);

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

    onClosePopup = (e) => {
        e.stopPropagation();
        this.setState({
            showBanner: false,
        })
        this.setItemToSessionStorage({label: 'pages', value: 'visited'})
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
                scrollTopElement.style.cssText = 'bottom: 100px';
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

                {!this.props.headerIsDisabled ? <StyledPL>
                  <a href={this.props.t("avs pl link")} style={{textDecoration: 'none'}}>
                    <div className={`PLnewAvs ${this.props.pageContext.locale}`}>
                    <div className='bgLeft'></div>
                        <div className="PL-box">
                            <p className="PL-desc3 beginningBanner">{this.props.t("beginningBanner")}</p>
                            <p className="PL-desc1 colorBanner">{this.props.t("colorBanner")}</p>
                            <p className="PL-desc3 textBanner">{this.props.t("textBanner")}</p>
                            <p className="PL-desc1 discountCoupon">{this.props.t("discountCoupon")}</p>
                            <p className="PL-desc3 textBannerContinue">{this.props.t("textBannerContinue")}</p>
                            <p className="PL-desc4 endingBanner">{this.props.t("endingBanner")}</p>
                        </div>
                    <div className='bgRight'></div>
                    </div>
                  </a>
                </StyledPL> : <div></div>}



                {!this.props.headerIsDisabled && <Header isTransparentHeader={this.props.isTransparentHeader} availableLocales={this.props.pageContext.availableLocales}
                                                         locale={this.props.pageContext.locale} t={this.props.t}/>}
                <StyledLayout className={this.props.className}>
                <main>{this.props.children}</main>

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