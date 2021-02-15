import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import PanelCollapse from "../components/panel-collapse";
import "../styles/register.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import Link from "../components/link";
import Cookies from 'universal-cookie';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import ScrollUpButton from '../components/scroll-up-button';
import LstDay from '../components/last-day';
import ModalBuy from '../components/modal-register';
import styled from 'styled-components';
import imagelogo from '../images/common/logo.svg';
import IndicatorCheck from '../images/upgrade-now/indicator-check.svg';

import VideoIcon from '../images/register/register-video-icon.svg';
import GuaranteeIcon from '../images/register/register-guarantee-icon.svg';
import ManyYearsIcon from '../images/register/register-many-years-icon.svg';
import SecureIcon from '../images/register/register-secure-icon.svg';
import SupportIcon from '../images/register/register-support-icon.svg';
import PeopleIcon from '../images/register/register-people-icon.svg';

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



const ModalStyle = styled.div`
.headerModal{
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.headerLogo{
  margin-left: 150px;
  width: 69px;
    height: 60px;
    display: table;
    &>img{
        position: absolute;
        top: 15px;
        margin: auto;
    }
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
  background-color: #fff;
}
.ModalShaerClose:before {
  transform: rotate(45deg);
}
.ModalShaerClose:after {
  transform: rotate(-45deg);
}

.H1ModalShaerText{
  font-size: 40px;
  text-align:center;
  color: #f9f9f9;
  padding-bottom: 15px;
}
.H2ModalShaerText{
  font-size: 22px;
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
  padding-bottom: 10px;
}
.IndicatorCheck{
  background-image: url(${IndicatorCheck});
  width: 17px;
  padding: 1px 15px 8px 10px;
    content: ' ';
    background-repeat: no-repeat;
    background-size: auto;
}
`;
class Register extends React.PureComponent {

constructor(props){
  super(props);
  this.cookies = new Cookies();

  this.affiliateID = "";
  this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

  if(this.siteTrasingCookie){
    this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
  };

  this.closeModal = this.closeModal.bind(this);
  this.openModal = this.openModal.bind(this);

  this.state = {
    hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim"),
    hrefOneYear: this.cookies.get("Site_Tracing") ? shareItHrefOneYear + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefOneYear"),
    documentLoaded: false,
  };
}

closeModal() {
  this.setState({
    isModalOpen: false
  });
}

openModal() {
  this.setState({
    isModalOpen: true
  });
}

componentDidMount(){
  const queryString = require('query-string');
  const parsed = queryString.parse(document.location.search);
  const cookies = new Cookies();
  if (parsed.SRC) {
    cookies.set('SRC', parsed.SRC, { path: '/' });
  }

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
              //href={this.state.hrefOneYear}
              onClick={() => this.openModal()}
              className="buy-block-button"
              >
              {this.props.t("Buy now")}
              </Button>
            </div>
            <ModalBuy
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <ModalStyle>
                    <div className="headerModal">
                     <Link to ="/" className="headerLogo">
                            <img src={imagelogo} alt=""/>
                      </Link>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
                    >
                    </button>
                    </div>
                        <Text className="H1ModalShaerText">{this.props.t("Upgrade now")}</Text>
                        <Text className="H2ModalShaerText">{this.props.t("Benefit from switching 1-Year to")}</Text>
                        <Text className="H2ModalShaerText">{this.props.t("AVS4YOU Unlimited Subscription")}</Text>
                        <Text className="modal-current-price-text"><span>{this.props.t("$")}</span>{this.props.t("59/00")} <span className="modal-prev-price-text">{this.props.t("$199/00")}</span></Text>
                          <Text className="ModalShaerText"><span className="IndicatorCheck"></span>{this.props.t("Unlimited access to 5 AVS4YOU programs")}</Text>
                          <Text className="ModalShaerText"><span className="IndicatorCheck"></span>{this.props.t("Free upgrades for programms")}</Text>
                          <Text className="ModalShaerText"><span className="IndicatorCheck"></span>{this.props.t("One time payment (no yearly renewals)")}</Text>
                        <Button
                        backgroundColor="orange"
                        color="#ffffff"
                        href={this.state.hrefUnlim}
                        className="buy-block-button"
                        style={{
                          maxWidth: "none",
                          marginTop: "15px",
                          textTransform: "none"
                        }}
                        >
                        {this.props.t("Yes! Upgrade to Unlimited")}
                        </Button>
                        <Button                
                        href={this.state.hrefOneYear}
                        backgroundColor="#32393d"
                        color="#ffffff"
                        className="buy-block-button"
                        style={{
                          maxWidth: "none",
                          backgroundColor: "#32393d",
                          border: "1px solid #fb8a2a",
                          marginTop: "10px",
                          textTransform: "none"
                        }}
                      >
                        {this.props.t("Keep 1-Year")}
                      </Button>
                      </ModalStyle>
                  </ModalBuy>
            
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
                <Text className="text">{this.props.t("30-day Money-back guarantee")}</Text>
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
                    <Text className="hiddenText">{this.props.t("If you experience technical or other problems that cannot be solved, you can get a complete refund of your purchase price within 30 days")} <a target="_blank" rel="noreferrer noopener" href={this.props.t("register-support-avs4you-refund")} >{this.props.t("Check our Refund Policy")}</a> {this.props.t("to find out if you are eligible for a full refund")}
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
