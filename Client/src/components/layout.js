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
 import CookieMessage from "../components/cookie-message";
 import PlAVSLeft from "../images/pl/pl_left.svg";
 import PlAVSRight from "../images/pl/pl_right.svg";
 
 const StyledPL =styled.div`
 position: relative;
 text-align: center;
 span {
   text-align: center;
 }

 @font-face {
  font-family: 'EuropeExt Web';
  src: url("../images/pl/EuropeExt.ttf") format("truetype");
  src: url("../images/pl/EuropeExt.eot?#iefix") format("embedded-opentype"),
  url("../images/pl/EuropeExt.woff") format('woff'),
  url("../images/pl/EuropeExt.ttf") format("truetype");
}

 .PLnewAvs{
    display: flex;
    font-size: 14px;
    background-color: #000000;
    height: 22px;
    width: 100%;
    display: table;
    width: 100%;
    display: table;
    padding: 13px 0;
 }
   .PLnewAvsText{
     position: static;
     z-index: 25;
     color: #fff;
     font-size: 18px;
     font-weight: 700;
     top: 13px;
     margin: auto;
     width: 100%;
     font-family: 'EuropeExt Web';
    }

 .PLnewAvs a {
      text-decoration: none !important;
    }

 .PLnewAvsTextMobile {
   display: none;
 }

.PLnewAvsTextCoupon{
    color: #e91e29;
    font-weight: 700 !important;
  }
 
   .PLAvs {
     position: absolute;
     width: 900px;
     top: -7px;
   }
   .PLnewAvsLeft{
     height: 48px;
     z-index:10;
     background-image:url(${PlAVSLeft});
     width: 276px;
     position: absolute;
     top: 0;
   }
   .PLnewAvsCenter{
     height: 48px;
     margin: auto;
     z-index:9;
   }
   .PLnewAvsRight{
     height: 48px;
     z-index:10;
     background-image:url(${PlAVSRight});
     width: 276px;
     position: absolute;
     right: 0;
     top: 0;
   }

   @media (max-width: 1070px) {
    .PLnewAvs {
      padding: 15px 0 0;
      height: 33px;
    }
    .PLnewAvsText{
      font-size: 12px; 
   }

   .PLnewAvsLeft{
    left: -183px;
  }
 
  .PLnewAvsRight{
    right: -239px;
 }
  }
   @media (max-width: 680px) {
     .PLnewAvsText{
       font-size: 12px;
       top: 15px;    
   }
 }
 @media (max-width: 500px) {
   .PLnewAvsText{
     display: none;
 }

 .PLnewAvsLeft{
   right: 270px;
 }

 .PLnewAvsRight{
  left: 330px;
}

    .PLnewAvsTextMobile {
      display: block;
      top: 17px; 
      position: absolute;
      z-index: 25;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      margin: auto;
      width: 100%;
      font-family: 'EuropeExt Web';
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
   "ko-KR",
 ];
 
 class Layout extends React.PureComponent {
 
   constructor(props) {
     super(props);
     this.state = {
       isTablet: false,
       isMobile: false
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
       
       window.addEventListener('resize', this.updateWindowDimensions);
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
 
         <StyledPL>
         <div className="PLnewAvs">
          <div className="PLnewAvsLeft"></div>
              <a href={this.props.t("avschristmasaspx")} target="_blank">
                <span className="PLnewAvsText">{this.props.t("Magic Christmas Sale")} <span className="PLnewAvsTextCoupon"> {this.props.t("80 Off")} </span>{this.props.t("on AVS4YOU Multimedia")} <span className="PLnewAvsTextCoupon">{this.props.t("Grab it now")}</span></span>
                <span className="PLnewAvsTextMobile">{this.props.t("MagicChristmasSale")}</span>
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