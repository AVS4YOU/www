import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/support.less";
import ImageGQL from "../components/image-gql";
import mailIcon from "../images/partners/email.svg";
import Form from '../components/form-support';
import ScrollUpButton from '../components/scroll-up-button';

class support extends React.PureComponent {

render(){

    return (
      <Layout 
        className="support" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="Welcome to AVS4YOU Support"
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="support-header.jpg" style={{position: "absolute"}}/>
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">Support</Text>
              <Text as="h3" className="header__subtitle">All information related to AVS4YOU licensing, terms of use, purchase, lost key recovery and much more.</Text>
            </div>
          </div>
        </div>
        
        <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading">
            Find answers to any questions
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                AVS4YOU Support 
              </Text>
              <ScrollLink className="common-info-block__link" to="support-form-wrapper" spy={true} smooth={true} offset={-70} duration={500}>
                <Text className="common-info-block__text">Support form</Text>
              </ScrollLink>
              <a className="common-info-block__link" href="https://support.avs4you.com/FirstTime.aspx">
                <Text className="common-info-block__text">Read this first</Text>
              </a>
              <a className="common-info-block__link" href="https://support.avs4you.com/refund.aspx">
                <Text className="common-info-block__text">Refund policy</Text>
              </a>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                FAQ 
              </Text>
              <a className="common-info-block__link" href="https://support.avs4you.com/faq.aspx#general">
                <Text className="common-info-block__text">General Questions</Text>
              </a>
              <a className="common-info-block__link" href="https://support.avs4you.com/faq.aspx#license">
                <Text className="common-info-block__text">License Retrieval Questions</Text>
              </a>
              <a className="common-info-block__link" href="https://support.avs4you.com/faq.aspx#support">
                <Text className="common-info-block__text">Online Support System Questions</Text>
              </a>
              <a className="common-info-block__link" href="https://support.avs4you.com/faq.aspx#subscription">
                <Text className="common-info-block__text">Subscription Questions</Text>
              </a>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Knowledge Center
              </Text>
              <a className="common-info-block__link" href="http://videoguides.avs4you.com/index.aspx">
                <Text className="common-info-block__text">Video how-to</Text>
              </a>
              <a className="common-info-block__link" href="http://www.avs4you.com/Guides/index.aspx">
                <Text className="common-info-block__text">User Guides</Text>
              </a>
              <a className="common-info-block__link" href="http://onlinehelp.avs4you.com/index.aspx">
                <Text className="common-info-block__text">Online Help</Text>
              </a>
            </div>
            <input type="checkbox" class="read-more-state" id="read-more-input" />
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Download now
              </Text>
              <Link className="common-info-block__link" to="/avs-free-image-converter.aspx">
                <Text className="common-info-block__text">AVS Video Converter</Text>
              </Link>
              <Link className="common-info-block__link" to="/avs-video-editor.aspx">
                <Text className="common-info-block__text">AVS Video Editor</Text>
              </Link>
              <Link className="common-info-block__link" to="/avs-video-remaker.aspx">
                <Text className="common-info-block__text">AVS Video Remaker</Text>
              </Link>
              <Link className="common-info-block__link" to="/avs-audio-editor.aspx">
                <Text className="common-info-block__text">AVS Audio Editor</Text>
              </Link>
              <Link className="common-info-block__link" to="/avs-audio-converter.aspx">
                <Text className="common-info-block__text">AVS Audio Converter</Text>
              </Link>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                AVS4YOU License
              </Text>
              <a className="common-info-block__link" href="http://reg.avs4you.com/quickretrieval.aspx">
                <Text className="common-info-block__text">License retrieval</Text>
              </a>
            </div>
          </div>
        </div>
        <div className="form screen-wrapper">
          <img src={mailIcon}/>
          <Text as="h2" className="common__heading">
            If you have not found the necessary information, please send a request
          </Text>
          <div id="support-form-wrapper" className="reseller-from-wrapper">
            <Form></Form>
            <Text className="contact-us-text">If you have any questions about AVS4YOU Affiliate program, please contact us at <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a></Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(support);
