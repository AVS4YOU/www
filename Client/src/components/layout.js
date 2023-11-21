/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
import CustomLink from '../components/link';
import {BlackFriday} from "../components/black-friday";

import PlAVSbg from "../images/black-friday/bg-banner.png";
import PlAVSLeft from "../images/black-friday/left-banner.png";
import PlAVSRight from "../images/black-friday/right-banner.png";
import PlAVSgif from "../images/black-friday/banner-bf-gif.gif";
import banner from '../images/banner.png'
import {XClose} from "../images/icons/xClose";

const StyledPL = styled.div`
  position: relative;
  text-align: center;

  .PLnewAvs {
    display: block;
    width: 100%;
    height: 60px;
    background-color: #0a0f11;
    background-image: url(${PlAVSbg});
    cursor: pointer;

    a {
      display: inline-block;
      width: 100%;
      z-index: 9;
      text-decoration: none;
      max-width: 730px;
      margin: auto;
    }
  }

  .PLnewAvsText {
    display: inline-block;
    gap: 5px;
    padding: 0px 8px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    width: auto;
  }

  .PLnewAvsTextAccent {
    font-weight: 700;
    color: #ECBB47;
  }

  .PlAvsDiscount {
    background: #A60101;
    font-family: 'Open Sans';
    width: 170px;
    height: 43px;
    word-break: keep-all;
    font-weight: 600;
    color: #FFFFFF;
    position: absolute;
    left: 6px;
    top: 5px;
    line-height: 44px;
    display: inline-block;
    align-items: center;
    justify-content: center;
  }

  .bgPlAvs {
    width: 100%;
    position: relative;
    height: 60px;
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .PLnewAvsLeft {
    top: 0;
    left: 0px;
    width: 600px;
    height: 64px;
    background-image: url(${PlAVSLeft});
    background-repeat: no-repeat;
    background-position-y: 50%;
    pointer-events: none;
    z-index: 0;
    background-position-x: 100%;
  }

  .PLnewAvsRight {
    top: 0;
    height: 64px;
    width: 600px;
    background-repeat: no-repeat;
    background-image: url(${PlAVSRight});
    background-position-y: 50%;
    pointer-events: none;
    right: 0;
    z-index: 0;
  }

  .PlAvsSpin {
    position: absolute;
    width: 183px;
    height: 55px;
    display: inline-block;
    top: 3px;
  }

  .PlAvsgif {
    background-image: url(${PlAVSgif});
    background-size: 183px 55px;
    background-position: 50%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 183px;
    height: 55px;
    position: absolute;
    left: 0;
  }

  @media (max-width: 670px) {
    .PLnewAvs {
      display: none;
      }
    .PLnewAvsText {
      font-size: 12px;
      line-height: 14px;
      padding: 3px 8px;
    }

    .PlAvsDiscount {
      font-size: 12px;
      width: 143px;
      height: 20px;
      line-height: 20px;
      left: 20px;
    }

    .PlAvsgif {
      width: 150px;
      height: 45px;
      background-size: 150px 45px;
      display: none;
    }

    .PlAvsSpin {
      position: relative;
      width: 183px;
      top: -8px;
      height: 20px;
    }

    .PLnewAvsLeft, .PLnewAvsRight {
      max-width: 55px;
    }
  }
  @media (max-width: 450px) {
    .PLnewAvsText {
      line-height: 18px;
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
    "ru-RU",
    "ko-KR"
];

class Layout extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isTablet: false,
            isMobile: false,
            showBanner: false,
            showBlackFriday: false,
        }

        const OriginalPath = this.props.pageContext.originalPath;

        this.pageName = OriginalPath ? this.props.pageContext.originalPath.replace(/\//g, '') : "";
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onClosePopup = this.onClosePopup.bind(this)
        this.onOpenBanner = this.onOpenBanner.bind(this)
        this.onCloseBanner = this.onCloseBanner.bind(this)
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
    }

    updateWindowDimensions() {
        this.setState({
            isTablet: window.innerWidth < 1050,
            isMobile: window.innerWidth < 750
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

    onOpenBanner = (e) => {
      e.stopPropagation();
      this.setState({
        showBlackFriday: true
      })
    }

    onCloseBanner = (e) => {
      e.stopPropagation();
      this.setState({
        showBlackFriday: false
      })
    }

    componentDidUpdate() {

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
                    <div className="PLnewAvs" onClick={this.onOpenBanner}>
                        <div className="bgPlAvs">
                        <div className="PLnewAvsLeft"></div>
                        <a target="_blank">
                          <span className="PLnewAvsText">{this.props.t("beginningBanner")}
                            <span className="PLnewAvsTextAccent">{this.props.t("discountCoupon")}</span>{this.props.t("textBanner")}</span>
                            <div className="PlAvsSpin"><span className="PlAvsDiscount">{this.props.t("nameCoupon")}</span><div className="PlAvsgif"></div></div>
                        </a>
                        <div className="PLnewAvsRight"></div>
                        </div>
                    </div>
                </StyledPL> : <div></div>}

                

                {!this.props.headerIsDisabled && <Header isTransparentHeader={this.props.isTransparentHeader} availableLocales={this.props.pageContext.availableLocales}
                                                         locale={this.props.pageContext.locale} t={this.props.t}/>}
                <StyledLayout className={this.props.className}>
                  {this.state.showBlackFriday ? <main><BlackFriday t={this.props.t} onCloseBanner={this.onCloseBanner}/></main> : <main>{this.props.children}</main>}
                    
                </StyledLayout>
                <CookieMessage/>
                {this.state.showBanner &&
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
                {!this.props.footerIsDisabled && (this.props.isTinyFooter ? <TinyFooter hideLine={this.pageName === 'avs-slideshow-maker.aspx'} t={this.props.t} /> :<Footer t={this.props.t}/>)}
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
