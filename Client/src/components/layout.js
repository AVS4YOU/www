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
 import {PageContext} from '../context/page-context';
 import { Helmet } from "react-helmet";
 import { withPrefix } from "gatsby";
 import Cookies from 'universal-cookie';
 import CookieMessage from "../components/cookie-message";
 import Button from '../components/button';
 import Text from '../components/text';
 import Link from '../components/link';

 import PlAVSLeft from "../images/pl/left-side-bg.svg";
 import PlAVSRight from "../images/pl/right-side-bg.svg";
 import couponGift from '../images/pl/coupon-gift.svg';
 import calendarOne from '../images/pl/calendar-1.svg';
 import calendarLast from '../images/pl/calendar-25.svg';
 import imgGif from '../images/pl/gif-coupon.gif';
 import plAvsBgMobile from '../images/pl/mobile-bg.svg'
 import bgPopup from '../images/pl/bg-popup.png'
 import popupCalendar from '../images/pl/calendar-popup.png'

 const StyledPL =styled.div`
  position: relative;
  text-align: center;

  .PLnewAvs {
    display: flex;
    width: 100%;
    height: 62px;
    background-color: #007435;
    background-repeat: no-repeat;
    background-position: 50%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 9;
      text-decoration: none;
    }
  }

  .PLnewAvsText {
    display: block;
    padding: 4px 8px;
    font-family: "Open Sans";
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    width: auto;
  }

  .PLnewAvsTextAccent {
    font-weight: 700;
  }

  .PlAvsDiscount {
    color: #FFE34F;
    text-transform: uppercase;
  }

  .PLnewAvsLeft {
    position: absolute;
    top: 0;
    left: 76px;
    width: 428px;
    height: 62px;
    z-index: 10;
    background-image:url(${PlAVSLeft});
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;
    z-index: 0;
  }

  .PLnewAvsRight {
    position: absolute;
    top: 0;
    height: 62px;
    width: 115px;
    z-index: 10;
    background-image: url(${PlAVSRight});
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;
    right: 0;
    z-index: 0;
  }

  .imgCoupon {
    vertical-align: middle;
    padding-right: 10px;
    width: 45px;
    height: 55px;
  }

  .imgGifLeft {
    transform: scale(-1, 1);
    position: relative;
    top: -40px;
  }

  .imgGifRight {
    top: -40px;
    position: relative;
  }

  .calendarOne {
    width: 55px;
  }

  .calendarLast {
    width: 55px;
  }

  .gifContainer {
    width: calc(250px + 3vw);
    overflow: hidden;
    height: 62px;
  }

  @media (max-width: 1350px) {

    .gifContainer {
      height: 60px;
    }

    .imgGifLeft {
      top: -20px;
      width: 150px;
      transform: rotate(8deg);
    }

    .imgGifRight {
      top: -20px;
      width: 150px;
      transform: rotate(317deg);
    }
  }

  @media (max-width: 1024px) {
    .PLnewAvs {
      display: flex;
      padding: 0;
      height: 60px;
    }
  
    .PLnewAvsText{
      font-size: 16px;
      position: relative;
      top: 0;
    }

    .PLnewAvsRight {
      top: 0;
      right: 0;
      background-size: 200px;
      width: 200px;
    }

    .PLnewAvsLeft {
      top: 0;
      left: 0;
      background-size: 200px;
    }

    .PLnewAvsTextMobileBlock {
      display: block;
    }

    .imgGifLeft {
      width: 145px;
      top: -23px;
      left: 0;
    }
  
    .imgGifRight {
      display: none;
      width: 100px;
      top: 0px;
      right: 0;
    }

    .calendarOne {
      display: none;
    }

    .calendarLast {
      position: absolute;
      right: 30px;
    }
  }

  @media (max-width: 768px) {

    .PLnewAvsText{
      font-size: 14px;
      line-height: 20px;
    }

    .imgCoupon {
      display: none;
    }
  }

  @media (max-width: 588px) {
    .PLnewAvs {
      background-image:url(${plAvsBgMobile});
      height: 76px;
    }

    .PlAvsDiscount {
      border: none;
      padding: 0px;
    }

    .PLnewAvsText{
      display: block;
      width: 230px;
      line-height: 20px;
      position: absolute;
      top: 5px;
      font-size: 12px;
    }

    .PLnewAvsLeft {
      display: none;
    }

    .PLnewAvsRight {
      display: none;
    }

    .imgGifLeft {
      width: 100px;
      transform: -90deg;
      transform: rotate(-90deg);
      position: relative;
      left: -65px;
      top: 0;
    }

    .imgCoupon {
      display: none;
    }

    .calendarLast {
      right: 0px;
    }

    .gifContainer {
      height: 76px;
    }
  }
`;
const PopupBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
  z-index: 100;
`;

const StyledPopup = styled.div`
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 101;
  position: fixed;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 650px;

  .popupAvs {
    background-color: #FFFFFF;
    height: 400px;
    width: 650px;
    background-image:url(${bgPopup});
    background-repeat: no-repeat;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .closeButton {
      width: 16px;
      height: 16px;
      margin-left: auto;
      padding: 12px;

      &:before, &:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        background: #05272D;
        top: 19px;
        right: 10px;    
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  .popupText {
    height: 360px;
    width: 650px;
    background-image:url(${popupCalendar});
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }

  .popupTitle {
    color: #E93631;
    padding-top: 95px;
    margin-left: 52px;
  }

  .popupCoupon {
    margin-left: 52px;
  }

  .popupButton {
    margin-left: 52px;
    background-color: #03633F;
    padding: 0;
    border-radius: 0;
    margin-top: 40px;

    p {
      padding: 12px 50px;

      a {
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 400;
      }
    }
  }
`;
 
 const StyledLayout = styled.div`
   min-width: 300px;
 `;
 
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
       showBanner: false
     }
 
     const OriginalPath = this.props.pageContext.originalPath;
 
     this.pageName = OriginalPath ? this.props.pageContext.originalPath.replace(/\//g, '') : "";
     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
   }
 
   componentDidMount() {
       this.updateWindowDimensions();
 
       if(this.props.getDevice){
 
         if(this.state.isMobile === true) {
           this.props.getDevice("Mobile");
         } else if (this.state.isTablet === true) {
           this.props.getDevice("Tablet");
         } else {
           this.props.getDevice("Desktop");
         }
      }

      setTimeout(() => {
        this.setState({
          showBanner: true,
        })
      }, 15000);
       
       window.addEventListener('resize', this.updateWindowDimensions);

        const queryString = require('query-string');
        const parsed = queryString.parse(document.location.search);
        const cookies = new Cookies();
        if (parsed.SRC) {
          cookies.set('SRC', parsed.SRC, { path: '/' });
        }

        const pageName = window.location.pathname;
        this.couponBannerZhPath = pageName.includes("zh/register") || pageName.includes("zh/avs-video-editor");
   }
 
   componentWillUnmount() {
       window.removeEventListener('resize', this.updateWindowDimensions);
   }
 
   updateWindowDimensions() {
       this.setState({
           isTablet: window.innerWidth < 1050,
           isMobile: window.innerWidth < 750
       })
   }

   onClosePopup = (e) => {
    e.stopPropagation();
    this.setState({
      showBanner: false,
    })
   }
 
   componentDidUpdate(){
 
     if(this.props.getDevice){
 
       if(this.state.isMobile === true) {
         this.props.getDevice("Mobile");
       } else if (this.state.isTablet === true) {
         this.props.getDevice("Tablet");
       } else {
         this.props.getDevice("Desktop");
       }
     }
   }
 
   render(){
     return ( 
       <PageContext.Provider value={this.props.pageContext}>
         <Helmet>
           <title>{this.props.title}</title>
           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>  
           {this.props.metaDescription && <meta name="description" content={this.props.metaDescription} />}
           {this.props.metaKeywords && <meta name="keywords" content={this.props.metaKeywords} />}
           {this.props.pageContext.originalPath}
 
           <link rel="canonical" href={"https://www.avs4you.com/" + (this.props.pageContext.locale === "en" ? "" : "" + (this.props.pageContext.locale + "/")) + this.pageName}></link>
           <script src="https://secure.avangate.com/content/check_affiliate_v2.js"></script>
           {languageCodes.map((languageCode)=> {
             let language = languageCode.split("-")[0];
             language = language === "en" ? "" : language + "/";
             return(
               <link rel="alternate" href={"https://www.avs4you.com/" + language + this.pageName} hrefLang={languageCode}></link>
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
 
           <script src={withPrefix('impact-write-cookie.js')} type="text/javascript" />
         </Helmet>

         {this.state.showBanner && 
         <>
            <PopupBackground onClick={this.onClosePopup} />
            <StyledPopup>
              <div className="popupAvs">
                <div className="closeButton" onClick={this.onClosePopup}></div>
                <div className="popupText">
                  <Text fontSize={40} fontWeight={600} className="popupTitle" as="h1">{this.props.t("Advent Calendar")}</Text>
                  <Text fontSize={24} fontWeight={400} className="popupCoupon" as="h2">{this.props.t("Up to")}<b>{this.props.t("70")}</b>{this.props.t("discounts")}</Text>
                  <Button className="popupButton" 
                          secondaryText={this.props.secondaryText && this.props.secondaryText} 
                          textTransform="uppercase">
                          <Link to="/advent-calendar.aspx" target="_blank" rel="noreferrer noopener" className="style-button">{this.props.t("Check It Out")}</Link>
                  </Button>
                </div>
              </div>
            </StyledPopup>
          </>
          }

            <StyledPL>
              <div className="PLnewAvs">
                <div className="PLnewAvsLeft"></div>
                  <a href={this.props.t("avs pl link")} target="_blank">
                  <img className="calendarOne" src={calendarOne}/>
                  <div className="gifContainer"><img className="imgGifLeft" src={imgGif}/></div>
                  <img className="imgCoupon" src={couponGift}/><span className="PLnewAvsText">{this.props.t("beginningBanner")}<span className="PLnewAvsTextAccent">{this.props.t("discountCoupon")}</span>{this.props.t("textBanner")}<span className="PlAvsDiscount">{this.props.t("nameCoupon")}</span>{this.props.t("endingBanner")}</span>
                  <div className="gifContainer"><img className="imgGifRight" src={imgGif}/></div>
                  <img className="calendarLast" src={calendarLast}/>
                  </a>
                <div className="PLnewAvsRight"></div>
              </div>
            </StyledPL>
        
         {!this.props.headerIsDisabled && <Header availableLocales={this.props.pageContext.availableLocales} locale={this.props.pageContext.locale} t={this.props.t}/>}
         <StyledLayout className={this.props.className}>
           <main>{this.props.children}</main>
         </StyledLayout>
         <CookieMessage />
         {!this.props.footerIsDisabled && <Footer t={this.props.t}/>}
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