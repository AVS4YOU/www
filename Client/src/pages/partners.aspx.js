import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/partners.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import mailIcon from "../images/partners/email.svg";
import Form from '../components/form-partners';
import ScrollUpButton from '../components/scroll-up-button';
class partners extends React.PureComponent {

render(){

    return (
      <Layout 
        className="partners" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU partnership Program for resellers")}
        metaDescription={this.props.t("AVS4YOU Reseller program: Safe and cost-effective")}
        metaKeywords=""
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="partners-header.jpg" style={{position: "absolute"}}/>
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">{this.props.t("Reseller Program")}</Text>
              <Text as="h3" className="header__subtitle">{this.props.t("No registration required There is no need to place links on the website Request a quote whenever your customer needs AVS4YOU multimedia suite")}</Text>
            </div>
          </div>
        </div>
        <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Why AVS4YOU Reseller Program")}
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("100% Guaranteed Profit")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("You sell powerful tools for multimedia processing popular all over the world Over 1000000 people download and install AVS4YOU tools monthly")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Pre-Sale and Post-Sale Support")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Our managers carefully lead you through the purchase process and provide you with all accompanying documentation")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Various Payment Methods")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Choose the most suitable payment method credit cards, PayPal, bank transfer, purchase order, etc")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("No registration required")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("There is no need to place links on the website Request a quote whenever your customer needs AVS4YOU multimedia suite")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Flexible Discounts")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Benefit from flexible discounts on volume licenses The more licenses you purchase at once, the higher the discount is")}
              </Text>
            </div>
          </div>
          <div className="body-reseller__button-wrapper">
          <a target="_blank" rel="noreferrer noopener" href="partners-onlinehelpstaticcontents-avs4you-downloads-reseller-partners" >
            <Button className="body-reseller__button" textClassName="body-reseller__button-text">
                {this.props.t("Download reseller prose list")}
            </Button>
          </a>
          </div>
        </div>
        <div className="form screen-wrapper">
          <img src={mailIcon}/>
          <div className="reseller-from-wrapper">
            <Form
              formHeader={this.props.t("To become an AVS4YOU reseller, please, use the form below:")}
              nameAuthor={this.props.t("Name")}
              emailAddressText={this.props.t("Email address")}
              numberOfSubscriptions={this.props.t("Number of subscriptions")}
              comment={this.props.t("Give us a brief description of your specific needs")}
              buttonTextSend={this.props.t("Send your request")}
            />
            <Text className="contact-us-text">{this.props.t("If you have any questions about AVS4YOU partnership program, please contact us at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a></Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(partners);