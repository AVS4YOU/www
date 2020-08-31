import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/uninstall-offer.less";
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled from 'styled-components';


const LogoWrapper = styled.div`
    width: 69px;
    height: 60px;
    display: table;

    &>img{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`;

class uninstallOffer extends React.PureComponent {

render(){
    return (
      <Layout 
        className="uninstall-offer-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS4YOU is the home of ultimate multimedia editing family.
        Learn more about our company, its history, who we are and what we value."
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
          <div className="avs-logo">
          <GatsbyLink className="headerLogo" to="/">
              <LogoWrapper href="/">
              </LogoWrapper>
          </GatsbyLink>
          </div>
            <div className="header__body">
              <Text as="h1" className="header__heading installed"><span className="installedBig">{this.props.t("Wait!")}</span> {this.props.t("Before you uninstall ...")} </Text>
              <Text as="h2" className="header__heading get">{this.props.t("Get AVS4YOU Unlimited Subscription at a special price")} </Text>

                <div className="landing-block"><div className="landing-one-offer-block"><div className="old_price_container">{this.props.t("Old price")}</div><Text className="text-landing-box-gray">AVS4YOU Unlimited Subscription</Text>
                <div className="after-text-box"></div>
                <Text className="text-info-landing-box-gray">{this.props.t("Time-limited offer")}</Text>
                <Text className="header__old__price">$59.00</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&LANGUAGES=en&COUPON=AVSUnGift&CLEAN_CART=ALL&SRC=Uninstall&_ga=2.268359438.1292882143.1597037333-942264271.1594810360" style={{color: "#fff"}}>{this.props.t("Buy")}</a></Text></table>
                </div>
                <div className="landing-two-offer-block"><Text as="h3" className="text-landing-box">AVS4YOU Unlimited Subscription</Text>
                <div className="after-text-box"></div>
                <Text as="h4" className="text-info-landing-box">{this.props.t("24-hour exclusive offer")}</Text>
                <Text as="h4" className="header__new__price">$29.00</Text>
                <table className="header__buy"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&LANGUAGES=en&COUPON=AVSUnGift&CLEAN_CART=ALL&SRC=Uninstall&_ga=2.268359438.1292882143.1597037333-942264271.1594810360" style={{color: "#fff"}}>{this.props.t("Get It Now")}</a></Text></table></div></div>
            </div>
        </div>

        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
            {this.props.t("Your major benefits")}
            </Text>
            <div className="contact-body__wrapper">
                </div>
          </div>
        </div>

        <div className="ubc-benefits" style={{margin: "auto"}}>
            <div className="ubc-row">
                <div className="ub-box">
                <div className="save-price"></div>
                {this.props.t("an extra 50% saving of the original price")}
            </div>
            <div className="ub-box">
                <div className="prof-tools"></div>
                {this.props.t("unlimited access to 5 professional multimedia tools")}
            </div>
            <div className="ub-box">
                <div class="free-upgrades"></div>
                {this.props.t("free upgrades")}
            </div>
            </div>
            <div className="ubc-row">
                <div className="ub-box">
                <div className="tech-support"></div>
                {this.props.t("free technical support")}
            </div>
            <div className="ub-box">
                <div className="secure-software"></div>
                {this.props.t("100% secure, ad-free, virus-free software")}
            </div>
            <div className="ub-box">
                <div class="money-back-guarant"></div>
                {this.props.t("30- day Money-back guarantee")}
            </div>
            </div>
            <table className="header__buy__orange"><Text as="h2" className="header__buy__orange__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&LANGUAGES=en&COUPON=AVSUnGift&CLEAN_CART=ALL&SRC=Uninstall&_ga=2.202734737.1292882143.1597037333-942264271.1594810360" style={{color: "#fff"}}>{this.props.t("Get it now")}</a></Text></table>
        </div>

        <Text as="h2" className="common__heading__with">
            {this.props.t("With AVS4YOU you can")}
            </Text>

            <div className="uninstall-you-can-container">
          <div className="youCan"> <ImageGQL className="youCanBackgroundImage" imageName="screens.png" style={{position: "absolute"}}/> 
                <li><span>{this.props.t("Make stunning videos, slideshows, video projects and presentations")}</span></li>
                <li><span>{this.props.t("Convert, compress video and audio files without quality loss")}</span></li>
                <li><span>{this.props.t("Capture screen, transfer video from cameras")}</span></li>
                <li><span>{this.props.t("Polish your video footage using a variety of handy tools")}</span></li>
                <li><span>{this.props.t("Record your voice, remove noise and enhance audio recordings")}</span></li>
                <li><span>{this.props.t("Create audiobooks and your own ringtones")}</span></li>
                <li><span>{this.props.t("Burn to CD/DVD/Blu-ray discs, add metadata")}</span></li>
                <li><span>{this.props.t("Play media files, create personal playlists and more useful features")}.</span></li>
    </div>
    </div>


        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">{this.props.t("Helpful resources")}</div>
<div className="knowledge"><div className="knowledgeIcon"><a href="https://onlinehelp.avs4you.com/avs-video-editor/" style={{color: "#393939"}}>{this.props.t("Knowledge center")}</a></div>
<div className="tipsIcon"><a href="https://www.avs4you.com/guides/video.aspx" style={{color: "#393939"}}>{this.props.t("Tips & tricks")}</a></div>
<div className="questionIcon">{this.props.t("Got a question?")}
<br/>{this.props.t("Contact our")} <a href="https://support.avs4you.com/login.aspx?_ga=2.17915129.1345987683.1595154508-193195073.1594635509" style={{color: "#393939"}}>{this.props.t("support team")}</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(uninstallOffer);
