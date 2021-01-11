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
import LstDay from '../components/last-day';

import VideoIcon from '../images/register/register-video-icon.svg';
import GuaranteeIcon from '../images/register/register-guarantee-icon.svg';
import ManyYearsIcon from '../images/register/register-many-years-icon.svg';
import SecureIcon from '../images/register/register-secure-icon.svg';
import SupportIcon from '../images/register/register-support-icon.svg';
import PeopleIcon from '../images/register/register-people-icon.svg';

const defaultHrefUnlim = "https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1";
const defaultHrefOneYear = "https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1";

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

class Register extends React.PureComponent {

constructor(){
  super();
  this.cookies = new Cookies();

  this.affiliateID = "";
  this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

  if(this.siteTrasingCookie){
    this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
  };

  this.state = {
    hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : defaultHrefUnlim,
    hrefOneYear: this.cookies.get("Site_Tracing") ? shareItHrefOneYear + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : defaultHrefOneYear,
    documentLoaded: false,
  };
}

componentDidMount(){
  const queryString = require('query-string');
  const parsed = queryString.parse(document.location.search);
  const cookies = new Cookies();
  if (parsed.SRC) {
    cookies.set('SRC', parsed.SRC, { path: '/' });
  }

  if(cookies.get('SRC')){
    this.setState({
      hrefUnlim: this.state.hrefUnlim+"&SRC="+parsed.SRC,
      hrefOneYear: this.state.hrefOneYear+"&SRC="+parsed.SRC,
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
        </Helmet>
        <div className="screen-wrapper first">
        <Text className="get-tools-text" as="h5" style={{marginTop:"5px"}}>{this.props.t("Get 5 professional multimedia programs in 1 package + Free upgrades + Free support")}</Text>
          <div className="sale-text">
            <Text as="h1">{this.props.t("70% OFF!")} <br className="mobile-br"/> {this.props.t("In")} {this.props.t(`${mounth[currentMounth]}`)} {this.props.t("only!")}</Text>
          </div>
        <Text className="get-tools-text" as="h5">{this.props.t("AVS4YOU Multimedia Suite for Windows")}</Text>
          <div className="buy-block-wrapper" style={{marginTop:"20px", borderSpacing: "0px"}}>
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
                href={this.props.t("https//storeavs4youcom/order/checkoutphp?PRODS=604110&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=12")}
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
                  href={this.props.t("https//storeavs4youcom/order/checkoutphp?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1")}
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
        <div className="screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Why choose AVS4YOU?")}
          </Text>
          <div className="why-choose-wrapper">
            <tr className="first-tr">
              <div className="why-choose-item">
                <img src={VideoIcon} className="icon" />
                <Text className="text">{this.props.t("5 multimedia programs in 1 package")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SecureIcon} className="icon"/>
                <Text className="text">{this.props.t("100% secure, ad-free, virus-free")}</Text>
                <Text className="text" style={{paddingTop:"0px"}}>{this.props.t("ad-free, virus-free")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={GuaranteeIcon} className="icon"/>
                <Text className="text">{this.props.t("30-day Money-back guarantee")}</Text>
              </div>
            </tr>

            <tr>
            <div className="why-choose-item">
                <img src={ManyYearsIcon} className="icon"/>
                <Text className="text">{this.props.t("No watermark")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SupportIcon} className="icon"/>
                <Text className="text">{this.props.t("Free support, free updates")}</Text>
              </div>  
              <div className="why-choose-item">
                <img src={PeopleIcon} className="icon"/>
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
                    <Text className="hiddenText">{this.props.t("If you experience technical or other problems that cannot be solved, you can get a complete refund of your purchase price within 30 days")} <a target="_blank" href={this.props.t("register-support-avs4you-refund")} >{this.props.t("Check our Refund Policy")}</a> {this.props.t("to find out if you are eligible for a full refund")}
                    </Text>
                </div>
              </PanelCollapse>
            </div>

          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Register);
