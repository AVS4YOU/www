import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/avs-christmas.less";
import Button from "../components/button";
import ScrollUpButton from '../components/scroll-up-button';

import PackageIcon from '../images/avs-christmas/package_icon_christmas.svg';
import UpdateIcon from '../images/avs-christmas/update_icon_christmas.svg';
import SupportIcon from '../images/avs-christmas/support_icon_christmas.svg';
import SecureIcon from '../images/avs-christmas/security_icon_christmas.svg';
import QualityIcon from '../images/avs-christmas/quality_icon_christmas.svg';
import ReviewIcon from '../images/avs-christmas/review_icon_christmas.svg';

class AVSChristmas extends React.PureComponent {

render(){
    return (
      <Layout 
       className="avs-christmas" 
       pageContext={this.props.pageContext} 
       t={this.props.t}
       title={this.props.t("AVS4YOU Get professionals multimedia tools")}
       metaDescription="AVS4YOU: Professional Multimedia Tools"
       metaKeywords=""
      >

        <div className="screen-wrapper first">
          <div className="sale-text">
            <Text className="christmas-head desktop" as="h1">{this.props.t("AVShead")} <br/> {this.props.t("Christmas Magic Sale")}</Text>
            <Text className="christmas-head tablet" as="h1">{this.props.t("AVS4YOU Christmas Magic Sale")}</Text>
          </div>
        <Text className="get-tools-text" as="h5">{this.props.t("Let your creativity spark during this festive season")}</Text>
        <Text className="get-tools-text" as="h5">{this.props.t("Convert Edit Create Share Tell your story")}</Text>
        <div className="main-pic"></div>

          <div className="buy-block-wrapper">
          <Text className="product-text" as="h5">{this.props.t("Save up to extra")} <span>{this.props.t("10/00")}</span> {this.props.t("on all AVS4YOU products")}</Text>
          <div className="block-flex">
            <div className="buy-block"> 
              <Text className="subscription-time-text" as="h3">{this.props.t("AVS4YOUname")}</Text>
              <Text className="subscription-time-text" as="h3">{this.props.t("1-Year Subscription")}</Text>
              <div className="price-block">
                <Text className="prev-price-text">{this.props.t("$39/00")}</Text>
                <Text className="current-price-text">{this.props.t("29/00")}</Text>
              </div>
              
              <Button
              backgroundColor="orange"
              color="#ffffff"
              href={this.props.t("Link1year")}
              className="buy-block-button"
              id="1year_button"
              >
              {this.props.t("Buy now")}
              </Button>
            </div>
            <div className="buy-block unlimited-block">
              <div className="unlimited-block-content">
                <Text className="subscription-time-text" as="h3">{this.props.t("AVS4YOUname")}</Text>
                <Text className="subscription-time-text" as="h3">{this.props.t("Unlimited Subscription")}</Text>
                <div className="price-block">
                  <Text className="prev-price-text">{this.props.t("$59/00")}</Text>
                  <Text className="current-price-text">{this.props.t("49/00")}</Text>
                </div>
                
                <Button                
                  href="LinkUnlimited"
                  color="#ffffff"
                  className="buy-block-button"
                  id="unlimited_button"
                >
                  {this.props.t("Buy now")}
                </Button>
              </div>
            </div>
          </div>
          <Text className="offer-expires">{this.props.t("The offer expires on December 31, 2021")}</Text>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
         </div>

        <div className="screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Why choose")} <span>{this.props.t("AVS4YOUchoose")}</span>{this.props.t("?")}
          </Text>
          <div className="why-choose-wrapper">
              <div className="why-choose-item">
                <img src={PackageIcon} className="icon" alt="Package Icon"/>
                <Text className="text">{this.props.t("5 tools in 1 package")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={UpdateIcon} className="icon" alt="Update Icon"/>
                <Text className="text">{this.props.t("Free upgrades")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SupportIcon} className="icon" alt="Support Icon"/>
                  <Text className="text">{this.props.t("Free support")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={SecureIcon} className="icon" alt="Secure Icon"/>
                <Text className="text">{this.props.t("100 Secure")}</Text>
              </div>
              <div className="why-choose-item">
                <img src={QualityIcon} className="icon" alt="Support Icon"/>
                <Text className="text">{this.props.t("15+ years on the market")}</Text>
              </div>  
              <div className="why-choose-item">
                <img src={ReviewIcon} className="icon" alt="Review Icon"/>
                <Text className="text">{this.props.t("20M happy customers")}</Text>
              </div>     
        </div>
      </div>

      <div className="bg-bottom">
          <div className="get-desk-editors">
              <Text  className="TitleBlock" color="#000000" fontWeight={700} fontSize={32}><span>{this.props.t("Special offer")}</span> {this.props.t("from ONLYOFFICE, AVS4YOU partner")}</Text>
            <div className="content-special-offer">
              <div className="content-img"></div>
                  <div className="content-text">
                    <ul  className="ListTitle">{this.props.t("Get ONLYOFFICE Desktop Editors to work with all your documents smoothly")}
                    <li  className="ListItem" color="#000000" fontWeight={400} fontSize={18}>{this.props.t("100 Free")}</li>
                    <li  className="ListItem" color="#000000" fontWeight={400} fontSize={18}>{this.props.t("100 Secure")}</li>
                    <li  className="ListItem" color="#000000" fontWeight={400} fontSize={18}>{this.props.t("Multiplatform (Windows, Mac, Linux)")}</li>
                    <li  className="ListItem" color="#000000" fontWeight={400} fontSize={18}>{this.props.t("Edit and create documents, spreadsheets and presentations")}</li>
                    </ul>
                  </div>
              </div>
            <div className="download-button">
              <Button                
                    href={this.props.t("LinkDownload")}
                    color="#ffffff"
                    className="get-block-button"
                    >
                    {this.props.t("Download now")}
              </Button>
              <Button                
                    href="https://www.onlyoffice.com/desktop.aspx"
                    color="#ffffff"
                    className="get-block-button-mobile"
                    >
                    {this.props.t("Learn more")}
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(AVSChristmas);