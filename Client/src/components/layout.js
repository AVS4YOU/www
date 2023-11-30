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

import PlAVSbg from "../images/black-friday/bg-banner.png";
import PlAVSLeftBg from "../images/pl/left-banner-bg.png";
import PlAVSRightBg from "../images/pl/right-banner-bg.png";
import PlAVSLeft from "../images/pl/left-banner.png";
import PlAVSRight from "../images/pl/right-banner.png";
import PlAVS1 from "../images/pl/1.png";
import PlAVS2 from "../images/pl/2.png";
import PlAVS3 from "../images/pl/3.png";
import PlAVS23 from "../images/pl/23.png";
import PlAVS24 from "../images/pl/24.png";
import PlAVS25 from "../images/pl/25.png";
import PlAVSgif from "../images/pl/99.png";
import PlAVSDiscount from "../images/pl/discount.png";
import PlAVSDiscountEu from "../images/pl/eu_discount.png";
import PlAVSDiscountJa from "../images/pl/ja_discount.png";
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
    //background-image: url(${PlAVSbg});
    background: radial-gradient(67.97% 40476.56% at 51.51% 32.03%, #0B1FD2 0%, #0B1D4C 100%);
    cursor: pointer;
    background-position-x: 50%;

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
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    width: auto;
    position: absolute;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .PLnewAvsTextAccent {
    font-weight: 700;
    position: relative;
    top: -2px;
  }

  .PlAvsDiscount {
    background-image: url(${PlAVSDiscount});
    font-family: 'Open Sans';
    width: 348px;
    height: 70px;
    word-break: keep-all;
    font-weight: 600;
    color: #FFFFFF;
    //position: absolute;
    left: -20px;
    line-height: 52px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    background-position: 0px;
    background-size: 348px 88px;
    position: relative;
    top: -2px;
    z-index: 1;
  }

  .es, .fr, .it, .ru {
    background-image: url(${PlAVSDiscountEu});
    width: 380px;
    background-size: 380px 88px;
  }

  .jp {
    background-image: url(${PlAVSDiscountJa});
    width: 460px;
    background-size: 460px 88px;
  }

  .bgPlAvs {
    width: 100%;
    position: relative;
    height: 60px;
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .giftsOne {
    background-image: url(${PlAVSLeft});
    width: 304px;
    height: 64px;
    background-position-x: 100%;
  }

  .giftsTwo {
    background-image: url(${PlAVSRight});
    width: 304px;
    height: 64px;
    z-index: 1;
  }

  .PLnewAvsLeft {
    top: 0;
    left: 0px;
    width: 100%;
    max-width: 700px;
    height: 64px;
    background-image:url(${PlAVSLeftBg});
    background-repeat: no-repeat;
    background-position-y: 50%;
    pointer-events: none;
    z-index: 0;
    background-position-x: 100%;
  }

  .PLnewAvsRight {
    top: 0;
    height: 64px;
    width: 688px;
    background-repeat: no-repeat;
    background-image: url(${PlAVSRightBg});
    background-position-y: 50%;
    pointer-events: none;
    right: 0;
    z-index: 0;
    background-position-x: 0%;
  }

  .PlAvsSpin {
    //position: absolute;
    //width: 183px;
    height: 55px;
    display: inline-block;
    top: 3px;
  }

  .PlAvsgif {
    background-image: url(${PlAVSgif});
    background-size: 82px 40px;
    background-position: 50%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 82px;
    height: 40px;
    left: 0;
    margin-top: -3px;
    min-width: 80px;
  }

  @media (max-width: 1640px) {
    .giftsOne, .giftsTwo {
      display: none;
    }

    .one {
      background-image: url(${PlAVS1});
      width: 80px;
      height: 64px;
      background-position-x: 50%;
    }

    .two {
      background-image: url(${PlAVS2});
      width: 80px;
      height: 64px;
      background-position-x: 50%;
    }

    .three {
      background-image: url(${PlAVS3});
      width: 90px;
      height: 64px;
      background-position-x: 50%;
    }

    .four {
      background-image: url(${PlAVS23});
      width: 80px;
      height: 64px;
      background-position-x: 50%;
    }

    .five {
      background-image: url(${PlAVS24});
      width: 80px;
      height: 64px;
      background-position-x: 50%;
    }

    .six {
      background-image: url(${PlAVS25});
      width: 80px;
      height: 64px;
      background-position-x: 50%;
    }
  }

  @media (max-width: 1300px) {
    .one, .two, .three, .four, .five, .six {
      display: none;
    }

    .PLnewAvsText {
      padding: 5px 20px;
    }

    .PLnewAvsText {
      font-size: 16px;
      top: 0;
    }

    .PLnewAvsTextAccent {
      top: -4px;
      text-align: left;
    }

    .en, .de, .ko, .pl, .da, .nl, .pt {
      width: 330px;
    }
  }

  @media (max-width: 763px) {
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
      width: 330px;
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
                  <Link to="/advent-calendar.aspx">
                    <div className="PLnewAvs">
                        <div className="bgPlAvs">
                        <div className="PLnewAvsLeft"></div>
                          <span className="PLnewAvsText"><div className='giftsOne'></div><div className='one'></div><div className='two'></div><div className='three'></div><span className="PLnewAvsTextAccent">{this.props.t("beginningBanner")}</span>
                            {this.props.t("discountCoupon")}<div className="PlAvsgif"></div><span className="PLnewAvsTextAccent">{this.props.t("textBanner")}</span>
                            <div className="PlAvsSpin">
                              <span className={`PlAvsDiscount ${this.props.pageContext.locale}`}>{this.props.t("nameCoupon")}</span>
                            </div><div className='giftsTwo'></div><div className='four'></div><div className='five'></div><div className='six'></div>
                          </span>
                        <div className="PLnewAvsRight"></div>
                        </div>
                    </div>
                  </Link>
                </StyledPL> : <div></div>}

                

                {!this.props.headerIsDisabled && <Header isTransparentHeader={this.props.isTransparentHeader} availableLocales={this.props.pageContext.availableLocales}
                                                         locale={this.props.pageContext.locale} t={this.props.t}/>}
                <StyledLayout className={this.props.className}>
                <main>{this.props.children}</main>
                    
                </StyledLayout>
                <CookieMessage/>
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
