import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import ScrollTools from '../components/scroll-tools';
import "../styles/installed-pack.less";
import ScrollUpButton from '../components/scroll-up-button';
import BenefitsCarousel from '../components/benefits-carousel';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled from 'styled-components';
import { useSwipeable, Swipeable } from 'react-swipeable';

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

class installedVideoEditor extends React.PureComponent {

render(){
    return (
      <Layout 
        headerIsDisabled={true}
        className="installed-pack-page" 
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
          <ImageGQL className="headerBackgroundImage" imageName="installed-pack-header.jpg" style={{position: "absolute", height: "665px"}}/>
            <div className="header__body">
              <Text as="h1" className="header__heading installed">{this.props.t("Thank you for installing")} AVS4YOU Installation Package!</Text>
                <div className="landing-block"><div className="landing-one-offer-block"><Text className="text-landing-box-gray">AVS4YOU Unlimited Subscription</Text>
                <div className="after-text-box"></div>
                <Text className="text-info-landing-box-gray">{this.props.t("Time-limited offer")}</Text>
                <Text className="header__old__price">$199</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now">{this.props.t("Buy")}</Text></table>
                <div className="landing-one-offer-block-cross"></div>
                </div>
                <div className="landing-two-offer-block"><Text as="h3" className="text-landing-box">AVS4YOU Unlimited Subscription</Text>
                <div className="after-text-box"></div>
                <Text as="h4" className="text-info-landing-box">{this.props.t("24-hour exclusive offer")}</Text>
                <Text as="h4" className="header__new__price">$59</Text>
                <table className="header__buy"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.16320382.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>{this.props.t("Get It Now")}</a></Text></table></div></div>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">{this.props.t("Why you will love AVS4YOU")}</Text>
          <BenefitsCarousel infinity className="benefitsCarousel" centerSlide={3}>
          <div  className="carouselItem export">
              <Text>{this.props.t("100% secure, ad-free, virus-free software")}</Text>
            </div>
            <div  className="carouselItem support">
              <Text>{this.props.t("5 professional multimedia programs in 1 package")}</Text>
            </div>
            <div className="carouselItem unlimited">
              <Text>{this.props.t("Unlimited access to the program")}</Text>
            </div>
            <div  className="carouselItem noWatermark">
              <Text>{this.props.t("No watermark")}</Text>
            </div>
            <div  className="carouselItem free">
              <Text>{this.props.t("Free upgrades")}</Text>
              </div>
            <div  className="carouselItem cut">
              <Text>{this.props.t("Free technical support")}</Text>
            </div>
          </BenefitsCarousel >
        </div>

        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
            {this.props.t("Get 5 professional multimedia tools for audio and video processing")}
            </Text>
            <div className="contact-body__wrapper">
            </div>
          </div>
        </div>
        <div className="contact-body">

          <ScrollTools className="scrollTools"/>

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
export default withI18next({ ns: "common" })(installedVideoEditor);