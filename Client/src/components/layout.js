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

 import PlAVSLeft from "../images/pl/left-side-bg.svg";
 import PlAVSRight from "../images/pl/right-side-bg.svg";
 import whiteHeart from "../images/pl/white-heart.svg";

 const StyledPL =styled.div`
  position: relative;
  text-align: center;

  .PLnewAvs {
    display: none;
    width: 100%;
    height: 62px;
    background: radial-gradient(88.92% 88.92% at 50% 50%, #FF6060 0%, #E33737 100%);
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
      height: 62px;
      position: absolute;
    }
  }

  .PLnewAvsText {
    display: block;
    padding: 4px 8px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    color: #ffffff;
    width: auto;
  }

  .PLnewAvsTextAccent {
    font-weight: 700;
  }

  .PlAvsDiscount {
    border: 1px dashed #FFFFFF;
    padding: 3px 15px;
    word-break: keep-all;
    font-weight: 700;
  }

  .bgPlAvs {
    width: 1160px;
    position: absolute;
    height: 62px;
    top: 0;
    left: 50%;
    margin-left: -600px;
  }

  .PLnewAvsLeft {
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    height: 62px;
    background-image:url(${PlAVSLeft});
    background-repeat: no-repeat;
    background-position-y: 50%;
    pointer-events: none;
    z-index: 0;
  }

  .PLnewAvsRight {
    position: absolute;
    top: 0;
    height: 62px;
    width: 470px;
    background-image: url(${PlAVSRight});
    background-repeat: no-repeat;
    background-position-y: 50%;
    pointer-events: none;
    right: 0;
    z-index: 0;
  }

  @media (max-width: 1024px) {
    .PLnewAvs {
      padding: 0;
      height: 62px;
    }

    .PLnewAvsLeft {
      width: 540px;
    }
  }

  @media (max-width: 600px) {

    .PLnewAvsText{
      font-size: 12px;
    }
  }

  @media (max-width: 400px) {

    .PlAvsDiscount {
      padding: 1px 10px;
    }

    .PLnewAvsText{
      line-height: 18px;
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

       const pageName = window.location.pathname;
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

        const queryString = require('query-string');
        const parsed = queryString.parse(document.location.search);
        const cookies = new Cookies();
        if (parsed.SRC) {
          cookies.set('SRC', parsed.SRC, { path: '/' });
        }


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

            <StyledPL>
              <div className="PLnewAvs">
              <div className="bgPlAvs"><div className="PLnewAvsLeft"></div><div className="PLnewAvsRight"></div></div>
                  <a href={this.props.t("avs pl link")} target="_blank">
                  <img className="imgCoupon" src={whiteHeart} style={{paddingLeft:"16px"}} /><span className="PLnewAvsText">{this.props.t("beginningBanner")}<span className="PLnewAvsTextAccent">{this.props.t("discountCoupon")}</span>{this.props.t("textBanner")}<span className="PlAvsDiscount">{this.props.t("nameCoupon")}</span>{this.props.t("endingBanner")}</span><img className="imgCoupon" src={whiteHeart} style={{paddingRight:"16px"}}/>
                  </a>
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