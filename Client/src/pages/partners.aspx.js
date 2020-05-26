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
        title="AVS4YOU partnership Program for resellers"
        metaDescription="AVS4YOU Reseller program: Safe and cost-effective"
        metaKeywords=""
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="partners-header.jpg" style={{position: "absolute"}}/>
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">Reseller Program</Text>
              <Text as="h3" className="header__subtitle">No registration required. There is no need to place links on the website. Request a quote whenever your customer needs AVS4YOU multimedia suite.</Text>
            </div>
          </div>
        </div>
        <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading">
            Why AVS4YOU Reseller Program
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                100% Guaranteed Profit 
              </Text>
              <Text className="common-info-block__text">
                You sell powerful tools for multimedia processing popular all over the world. 
                Over 1.000.000 people download and install AVS4YOU tools monthly
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Pre-Sale and Post-Sale Support 
              </Text>
              <Text className="common-info-block__text">
                Our managers carefully lead you through the purchase 
                process and provide you with all accompanying documentation
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Various Payment Methods 
              </Text>
              <Text className="common-info-block__text">
                Choose the most suitable payment method
                (credit cards, PayPal, bank transfer, purchase order, etc.)
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                No registration required
              </Text>
              <Text className="common-info-block__text">
                Our managers carefully lead you through the purchase process 
                and provide you with all accompanying documentation
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Flexible Discounts 
              </Text>
              <Text className="common-info-block__text">
                Benefit from flexible discounts on volume licenses. 
                The more licenses you purchase at once, the higher the discount is
              </Text>
            </div>
          </div>
          <div className="body-reseller__button-wrapper">
            <Button href="https://onlinehelpstaticcontents.avs4you.com/downloads/reseller/partners.pdf" className="body-reseller__button" textClassName="body-reseller__button-text">
              Download reseller prose list
            </Button>
          </div>
        </div>
        <div className="form screen-wrapper">
          <img src={mailIcon}/>
          <Text as="h2" className="common__heading">
            Why AVS4YOU Reseller Program
          </Text>
          <div className="reseller-from-wrapper">
            <Form></Form>
            <Text className="contact-us-text">If you have any questions about AVS4YOU Affiliate program, please contact us at <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a></Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(partners);
