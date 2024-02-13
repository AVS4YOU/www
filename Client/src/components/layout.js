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

import PlAVSbg from "../images/valentine/pl-bg.png";
import PlAVSbgSmall from "../images/valentine/pl-bg-small.png";
import elem from "../images/valentine/pl-element.png"
import banner from '../images/banner.png'
import {XClose} from "../images/icons/xClose";

const StyledPL = styled.div`
  position: relative;
  text-align: center;

  .PLnewAvs {
    //display: none;
    width: 100%;
    height: 56px;
    background-image: url(${PlAVSbg});
    cursor: pointer;
    background-position-x: 50%;
      font-family: Inter, sans-serif;
  }
    
    .PL-box {
        height: 100%;
        color: #FFFFFF;
        
        display: grid;
        grid-template-areas: "beginningBanner discountCoupon textBanner nameCoupon endingBanner";
        width: max-content;
        gap: 7px;
        margin: 0 auto;
        align-items: center;
    }
    
    .PL-desc1 {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
    }
    
    .PL-desc2 {
        font-size: 14px;
        font-weight: 800;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
    }
    
    .PL-desc3 {
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        background-image: url("${elem}");
        background-size: 100%;
        padding: 3px 8px;
        background-repeat: no-repeat;
        width: max-content;
    }

    .fr {
        background-position-y: -9px;
        background-size: auto 68px;
        .PL-box {
            grid-template-areas: "discountCoupon textBanner nameCoupon beginningBanner";

            .endingBanner {
                display: none;
            } 
        }  
        
        @media screen and (max-width: 800px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
            
            .PL-box {
                row-gap: 0;
                grid-template-areas: "discountCoupon discountCoupon discountCoupon" "textBanner nameCoupon beginningBanner";
            }
        }
    }
    
    .de {
        background-position-y: -14px;
        background-size: auto 78px;
        .PL-box {
            grid-template-areas: "beginningBanner discountCoupon textBanner nameCoupon";

            .endingBanner {
                display: none;
            }
        }

        @media screen and (max-width: 900px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);

            .PL-box {
                row-gap: 0;
                grid-template-areas: "beginningBanner beginningBanner beginningBanner" "discountCoupon textBanner nameCoupon";
            }
        }
        
        @media screen and (max-width: 700px) {
            height: 65px;
            .PL-box {
                grid-template-areas: "beginningBanner beginningBanner" "discountCoupon discountCoupon" "textBanner nameCoupon";
            }
        }
    }

    .es {
        background-position-y: -7px;
        background-size: auto 64px;
        .PL-box {
            grid-template-areas: "discountCoupon textBanner nameCoupon beginningBanner";

            .endingBanner {
                display: none;
            }
        }

        @media screen and (max-width: 800px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);

            .PL-box {
                row-gap: 0;
                grid-template-areas: "discountCoupon discountCoupon discountCoupon" "textBanner nameCoupon beginningBanner";
            }
        }
    }

    .it {
        background-position-y: -7px;
        background-size: auto 64px;
        .PL-box {
            grid-template-areas: "discountCoupon textBanner nameCoupon beginningBanner";

            .endingBanner {
                display: none;
            }
        }

        @media screen and (max-width: 800px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);

            .PL-box {
                row-gap: 0;
                grid-template-areas: "discountCoupon discountCoupon discountCoupon" "textBanner nameCoupon beginningBanner";
            }
        }
    }

    .jp {
        background-position-y: -14px;
        background-size: auto 74px;
        .PL-box {
            grid-template-areas: "beginningBanner nameCoupon textBanner discountCoupon";

            .endingBanner {
                display: none;
            }
        }

        @media screen and (max-width: 900px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);

            .PL-box {
                row-gap: 0;
                grid-template-areas: "beginningBanner beginningBanner beginningBanner" "nameCoupon textBanner discountCoupon";
            }
        }
    }

    .ru {
        background-position-y: -11px;
        background-size: auto 72px;
        .PL-box {
            grid-template-areas: "discountCoupon textBanner nameCoupon beginningBanner";

            .endingBanner {
                display: none;
            }
        }

        @media screen and (max-width: 900px) {
            background-image: url("${PlAVSbgSmall}");
            text-shadow: 2px 2px 5px rgba(0,0,0,0.6);

            .PL-box {
                row-gap: 0;
                grid-template-areas: "discountCoupon discountCoupon discountCoupon" "textBanner nameCoupon beginningBanner";
            }
        }
    }
    
    .beginningBanner {
        grid-area: beginningBanner;
    }
    
    .discountCoupon {
        grid-area: discountCoupon;
    }
    
    .textBanner {
        grid-area: textBanner;
    }
    
    .nameCoupon {
        grid-area: nameCoupon;
    }
    
    .endingBanner {
        grid-area: endingBanner;
    }
    
    
    
    @media screen and (max-width: 700px) {
        .PL-box {
            grid-template-areas: "beginningBanner beginningBanner beginningBanner beginningBanner" "discountCoupon textBanner nameCoupon endingBanner";
            row-gap: 0;
        }
    }

    @media screen and (max-width: 500px) {
        .PLnewAvs {
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
                  <a href={this.props.t("avs pl link")} style={{textDecoration: 'none'}}>
                    <div className={`PLnewAvs ${this.props.pageContext.locale}`}>
                        <div className="PL-box">
                            <p className="PL-desc1 beginningBanner">{this.props.t("beginningBanner")}</p>
                            <p className="PL-desc2 discountCoupon">{this.props.t("discountCoupon")}</p>
                            <p className="PL-desc1 textBanner">{this.props.t("textBanner")}</p>
                            <p className="PL-desc3 nameCoupon">{this.props.t("nameCoupon")}</p>
                            <p className="PL-desc1 endingBanner">{this.props.t("endingBanner")}</p>
                        </div>
                    </div>
                  </a>
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
