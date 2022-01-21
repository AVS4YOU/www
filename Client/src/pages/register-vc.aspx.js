import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import PanelCollapse from "../components/panel-collapse";
import "../styles/register.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import Cookies from 'universal-cookie';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import ScrollUpButton from '../components/scroll-up-button';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import LstDay from '../components/last-day';
import Link from '../components/link';

import VideoIcon from '../images/register/register-video-icon.svg';
import GuaranteeIcon from '../images/register/register-guarantee-icon.svg';
import ManyYearsIcon from '../images/register/register-many-years-icon.svg';
import SecureIcon from '../images/register/register-secure-icon.svg';
import SupportIcon from '../images/register/register-support-icon.svg';
import PeopleIcon from '../images/register/register-people-icon.svg';

import ModalLogoBtn from '../images/moneyback/logo.svg';
import ModalCloseBtn from '../images/moneyback/close.svg';
import ModalIndicatorCheck from '../images/moneyback/indicator-check.svg';


const shareItHrefUnlim = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1";
const shareItHrefOneYear = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919254]=1";

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

const regExp = /=regnow:(.*):/;
const date = new Date();
const currentMounth = date.getMonth();
const currentYear = date.getFullYear();

const mounth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class RegisterVc extends React.PureComponent {

  constructor(props){
    super(props);
    this.cookies = new Cookies();

  this.affiliateID = "";
  this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

  if(this.siteTrasingCookie){
    this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
  };

  this.state = {
    hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim"),
    hrefOneYear: this.cookies.get("Site_Tracing") ? shareItHrefOneYear + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefOneYear"),
    documentLoaded: false,
  };
}

componentDidMount(){
  const cookies = new Cookies();

  const SRCParam = cookies.get('SRC')

  if(SRCParam){

    this.setState({
      hrefUnlim: this.state.hrefUnlim+"&SRC="+SRCParam,
      hrefOneYear: this.state.hrefOneYear+"&SRC="+SRCParam,
    })
  }

  this.setState({
   documentLoaded: true
 })
}

render(){
    return (
      <Layout 
       className="register" 
       pageContext={this.props.pageContext} 
       t={this.props.t}
       title={this.props.t("AVS4YOU Get professionals multimedia tools")}
       metaDescription="AVS4YOU: Professional Multimedia Tools"
       metaKeywords=""
      >
        <Helmet>
          {/*<script src={withPrefix('avangate-affiliates-run.js')} type="text/javascript" /> */}
          {this.state.documentLoaded && <script src={withPrefix('impact-affiliates-run.js')} type="text/javascript" />}
          {<style>{`#upsell_modal {display: none;}       
          .ModalAvangate{}  
        .ModalStyle{
            position: fixed;
            width: 400px;
            height: 580px;
            top: 250px;
            left: 0;
            right: 0;
              padding: 35px 15px;
              box-sizing: border-box;
              background-color: #32393d;
              margin: 40px auto;
              z-index: 2;
              text-align: left;
              box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
              font-family: sans-serif;
        
        }
        .link_modal_plt{
          text-decoration: none;
          color:#ffffff;
          font-size: 18px;
        }
        .headerModal{
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
        }
        .headerLogo{
            width: 69px;
            display: table;
        }
        .headerLogoImage{
          position: absolute;
          top: 15px;
          margin-left: 150px;
        }
        .ModalShaerClose{
          margin: 10px 10px 0px;
          width: 50px;
          height: 50px;
          border: none;
            border-radius: 25px;
            position: absolute;
            top: 0;
            right: 0;
            background: none;
            
          }
          .closeImage{
            width: 18px;
            left: 15px;
          }

          .ModalShaerClose {
            position: absolute;
            right: 0;
            top: 0;
            width: 32px;
            height: 32px;
            opacity: 1;
          }
          .ModalShaerClose:hover {
            opacity: 1;
          }
          .ModalShaerClose:before, .ModalShaerClose:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 20px;
            width: 2px;
          }

          .H1ModalShaerText{
            font-size: 40px;
            text-align:center;
            color: #f9f9f9;
            margin: 40px 0px 20px 0px;
          }
          .H2ModalShaerText{
            font-size: 22px;
            margin: 5px 0px 0px 0px;
            text-align:center;
            color: #fb8a2a;
            padding-bottom: 5px;
          }
          .modal-current-price-text{
            font-size: 35px;
            text-align:center;
            color: #f9f9f9;
            padding-bottom: 15px;
            padding-top: 10px;
            margin: 20px 0px 0px 0px;
            font-weight: bold;
          }
          .modal-prev-price-text{
            font-size: 35px;
            text-align:center;
            color: #f65108;
            text-decoration: line-through;
          }
          .ModalShaerText{
            font-size: 16px;
            text-align:center;
            color: #f9f9f9;
          }
          .IndicatorCheck{
            background-image: url(${ModalIndicatorCheck});
            width: 17px;
            padding: 5px 15px 10px 10px;
            content: ' ';
            background-repeat: no-repeat;
            background-size: auto;
            margin-right: 5px;
          }

          .Unlimited-Up{
            background-color: #FE9235;
            border: 1px solid #FE9235;
            padding: 20px 25px;
            border-radius: 5px;
            color:#ffffff;
            max-width: 315px;
            margin-top: 15px;
            text-transform: none;
            display: block;
              margin: auto;
              width: 400px;
              text-decoration: none;
            color:#ffffff;
            font-size: 18px;
            margin-top: 10px;
          }

          .One-Year{
            max-width: 315px;
            padding: 20px 25px;
            border-radius: 5px;
            background-color:#32393d;
            border: 1px solid #FE9235;
            margin-top: 10px;
            text-transform: none;
            color:#ffffff;
            display: block;
              margin: auto;
              width: 400px;
              text-decoration: none;
            color:#ffffff;
            font-size: 18px;
            margin-top: 15px;
          }

          @media screen and (max-device-width:600px){

          
            .ModalStyle{
              height: auto;
              width: 100%;
              top: 150px;
              }
          

            .headerLogoImage{
              margin-left: 10px;
              width: 100px;
            }
            .ModalShaerClose{
              margin: 10px 10px 0px;
              width: 50px;
            }

            
            .Unlimited-Up{
              background-color: #FE9235;
              border: 1px solid #FE9235;
              padding: 20px 25px;
              border-radius: 5px;
              color:#ffffff;
              margin-top: 15px;
              text-transform: none;
              display: block;
                margin: auto;
                width: 400px;
                text-decoration: none;
              color:#ffffff;
              font-size: 20px;
              margin-top: 10px;
            }
            
            .One-Year{
              padding: 20px 25px;
              border-radius: 5px;
              background-color:#32393d;
              border: 1px solid #FE9235;
              margin-top: 10px;
              text-transform: none;
              color:#ffffff;
              display: block;
                margin: auto;
                width: 400px;
                text-decoration: none;
              color:#ffffff;
              font-size: 20px;
              margin-top: 15px;
            }
          }`}</style>}
          {<script>{`
          (function (document, src, libName, config) {
            var script             = document.createElement('script');
            script.src             = src;
            script.async           = true;
            var firstScriptElement = document.getElementsByTagName('script')[0];
            script.onload          = function () {
            for (var namespace in config) {
            if (config.hasOwnProperty(namespace)) {
              window[libName].setup.setConfig(namespace, config[namespace]);
              }
            }
            window[libName].register();
            };
            firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
            })(document, 'https://secure.avangate.com/checkout/client/twoCoInlineCart.js', 'TwoCoInlineCart',{"app":{"merchant":"ONLMETEC","iframeLoad":"immediate"},"cart":{"host":"https:\/\/secure.2checkout.com","customization":"inline"}});
            `}</script>}
          {<script>
            {`
                window._vwo_code = window._vwo_code || (function(){
                  var account_id=279977,
                  settings_tolerance=2000,
                  library_tolerance=2500,
                  use_existing_jquery=false,
                  is_spa=1,
                  hide_element='body',
                  /* DO NOT EDIT BELOW THIS LINE */
                  f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
                  window.settings_timer=setTimeout(function () {_vwo_code.finish() },settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());
            `}
            </script>}
        </Helmet>
        <div className="screen-wrapper first">
        <Text className="get-tools-text" as="h5" style={{marginTop:"5px"}}>{this.props.t("Get 5 professional multimedia programs in 1 package + Free upgrades + Free support")}</Text>
          <div className="sale-text">
            <Text as="h1">{this.props.t("70% OFF!")} <br className="mobile-br"/> {this.props.t("In")} {this.props.t(`${mounth[currentMounth]}`)} {this.props.t("only!")}</Text>
          </div>
          <Text className="get-tools-text" as="h5">{this.props.t("AVS4YOU Multimedia Suite for Windows")}</Text>
          <div className="buy-block-wrapper">
            <div className="buy-block"> 
              <Text className="subscription-time-text" as="h3">{this.props.t("1 year")}</Text>
              <Text className="access-sub-text">{this.props.t("subscription_rc")}</Text>
              <Text className="access-limit">{this.props.t("1 year access_rc")}</Text>
              <Text className="sub-now-text">{this.props.t("Subscribe now for")}</Text>
              <div className="price-block">
                <Text className="prev-price-text">{this.props.t("$69/00")}</Text>
                <Text className="current-price-text"><span>{this.props.t("$")}</span>{this.props.t("39/00")}</Text>
              </div>
              <Text className="limited-offer-text">{this.props.t("Time limited offer")}</Text>
              <LstDay  MText = {"till " + mounth[currentMounth] + " " + getLastDayOfMonth(currentYear, currentMounth) + ", " +  currentYear} />
              <Button
                backgroundColor="orange"
                color="#ffffff"
                href={this.state.hrefOneYear}
                className="buy-block-button"
              >
                {this.props.t("Buy now")}
              </Button>
            </div>
            <div className="buy-block unlimited-block">
              <div className="popular-banner">
                <Text as="p">{this.props.t("Most popular")}</Text>
              </div>
              <div className="unlimited-block-content">
                <Text className="subscription-time-text" as="h3">{this.props.t("Unlimited_rc")}</Text>
                <Text className="access-sub-text">{this.props.t("subscription_rc")}</Text>
                <Text className="access-limit">{this.props.t("Unlimited access_rc")}</Text>
                <Text className="sub-now-text">{this.props.t("Subscribe now for")}</Text>
                <div className="price-block">
                  <Text className="prev-price-text">{this.props.t("$199/00")}</Text>
                  <Text className="current-price-text"><span>{this.props.t("$")}</span>{this.props.t("59/00")}</Text>
                </div>
                <Text className="limited-offer-text">{this.props.t("Time limited offer")}</Text>
                <LstDay  MText = {"till " + mounth[currentMounth] + " " + getLastDayOfMonth(currentYear, currentMounth) + ", " +  currentYear} />
                <Button
                  href={this.state.hrefUnlim}
                  backgroundColor="orange"
                  color="#ffffff"
                  className="buy-block-button"
                >
                  {this.props.t("Buy now")}
                </Button>
              </div>
            </div>
          </div>
          <div className="availableCarts">
            <ImageGQL imageName="register-available-carts.png"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
        </div>
        <ScreenshotsCarousel
            titleImage={[this.props.t("AVS Video Editor"), this.props.t("AVS Video Converter"), this.props.t("AVS Video ReMaker"), this.props.t("AVS Audio Editor"), this.props.t("AVS Audio Converter")]}
            descriptionImage={[this.props.t("Make your home videos"), this.props.t("Easily convert videos"), this.props.t("Edit video files"), this.props.t("Enhance your audio"), this.props.t("Convert your audio")]}
            imageNames={[this.props.t("video editor slider2 jpg"), this.props.t("video converter edit your videos jpg"), this.props.t("video remaker edit video files min jpg"), this.props.t("audio editor edit all key jpg"), this.props.t("audio converter bath jpg")]}
            imageNamesPopup={[this.props.t("video editor slider2 jpg"), this.props.t("video converter edit your videos jpg"), this.props.t("video remaker edit video files min jpg"), this.props.t("audio editor edit all key jpg"), this.props.t("audio converter bath jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
          />
        <div className="screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Why choose AVS4YOU?")}
          </Text>
          <div className="why-choose-wrapper">
            <tr className="first-tr">
              <div className="why-choose-item">
                <img src={VideoIcon} className="icon" alt="Video Icon"/>
                <Text className="text">{this.props.t("5 multimedia programs in 1 package")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SecureIcon} className="icon" alt="Secure Icon"/>
                <Text className="text">{this.props.t("100% secure, ad-free, virus-free")}</Text>
                <Text className="text" style={{paddingTop:"0px"}}>{this.props.t("ad-free, virus-free")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={GuaranteeIcon} className="icon" alt="Guarantee Icon"/>
                <Text className="text" id="text_link">
                  <Link to="/moneyback.aspx">
                    {this.props.t("30-day Money-back guarantee")}
                  </Link>
                </Text>
              </div>
            </tr>

            <tr>
            <div className="why-choose-item">
                <img src={ManyYearsIcon} className="icon" alt="Many Years Icon"/>
                <Text className="text">{this.props.t("No watermark")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SupportIcon} className="icon" alt="Support Icon"/>
                <Text className="text">{this.props.t("Free support, free updates")}</Text>
              </div>  
              <div className="why-choose-item">
                <img src={PeopleIcon} className="icon" alt="People Icon"/>
                <Text className="text">{this.props.t("20M happy users worldwides")}</Text>
              </div>     
            </tr>
          </div>
        </div>
        <div>
        <div className="questions-wrapper">

          <Text as="h2" className="common__heading">
          {this.props.t("Frequently asked questions")}
          </Text>

          <div className="questions-block">
            <PanelCollapse className="panelCollapse" panelName={this.props.t("What is the difference between 1 Year and Unlimited Subscription types")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("1 Year Subscription grants you a full access to all AVS4YOU programs during a year whereas there are no time limitations for using AVS4YOU Unlimited Subscription")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("What happens when 1 year Subscription gets expired?")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("All AVS4YOU programs become unregistered and a watermark will be added to the output files")}</Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("What are the limitations of unactivated AVS4YOU software?")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("A voice logo is applied to output audio files and in the video programs a watermark is added to the output files throughout the whole video")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("How can I get rid of the annoying voice logo and watermark?")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("It is necessary to buy an AVS4YOU subscription and activate the software with the license key")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("May I transfer the license key to a new computer?")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("According to AVS4YOU license policy it is not allowed to transfer the license from one computer to another In this case it is necessary to buy an additional subscription")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("May I use AVS4YOU software on multiple computers with the same license key?")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("One license key can be used to activate the software on a single computer If you want to use the software on multiple computers you need to buy the appropriate number of subscriptions")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("Is my payment information secure")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("Yes, it is All transactions are processed via the 2Checkout payment gateway 2Checkout provides the highest standards of online security and guarantees the safety of your payments and personal information")}
                  </Text>
              </div>
            </PanelCollapse>
            <PanelCollapse className="panelCollapse" panelName={this.props.t("I want a refund How can I get my money back")}>
              <div className="collapseContent">
                  <Text className="hiddenText">{this.props.t("If you experience technical or other problems that cannot be solved, you can get a complete refund of your purchase price within 30 days")} <a href={this.props.t("support avs4you com")} target="_blank" rel="noreferrer noopener">{this.props.t("Check our Refund Policy")}</a> {this.props.t("to find out if you are eligible for a full refund")}
                  </Text>
              </div>
            </PanelCollapse>
          </div>

          </div>
        </div>
        <div className='ModalStyle' id='upsell_modal'>
            <div className='headerModal'>
              <a href ='#' className='headerLogo'>
              <img src={ModalLogoBtn} className='headerLogoImage' alt='logo avs'/>
              </a>
              <button className='ModalShaerClose' id='close_button'>
              <img src={ModalCloseBtn} className='closeImage' alt='close modal'/>
              </button>
            </div>
              <p className='H1ModalShaerText'>Upgrade now</p>
              <p className='H2ModalShaerText'>Benefit from switching 1-Year to</p>
              <p className='H2ModalShaerText'>AVS4YOU Unlimited Subscription</p>
              <p className='modal-current-price-text'>$59.00 <span className='modal-prev-price-text'>$190.00</span></p>
              <p className='ModalShaerText'><span className='IndicatorCheck'></span>Unlimited access to 5 AVS4YOU programs</p>
              <p className='ModalShaerText'><span className='IndicatorCheck'></span>Free upgrades for programs</p>
              <p className='ModalShaerText'><span className='IndicatorCheck'></span>One time payment (no yearly renewals)</p>
              <a id='replace_button' className='link_modal_plt' href='#'>
              <button className='Unlimited-Up' id='Unlimited'>Yes! Upgrade to Unlimited</button>
              </a>
              <a id='skip_button' className='link_modal_plt' href='#'>
              <button className='One-Year' id='1Year'>Keep 1-Year</button>
              </a>
          </div>                   
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(RegisterVc);
