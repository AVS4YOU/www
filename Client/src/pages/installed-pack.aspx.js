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

class installedPack extends React.PureComponent {

render(){
    return (
      <Layout 
        headerIsDisabled={true}
        className="installed-pack-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video audio image")}
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
              <Text as="h1" className="header__heading installed">{this.props.t("Thank you for installing AVS4YOU Installation Package!")}</Text>
                <div className="landing-block"><div className="landing-one-offer-block"><Text className="text-landing-box-gray">{this.props.t("AVS4YOU Unlimited Subscription")}</Text>
                <div className="after-text-box"></div>
                <Text className="text-info-landing-box-gray">{this.props.t("Timelimited offer")}</Text>
                <Text className="header__old__price">{this.props.t("$199")}</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now">{this.props.t("Buy")}</Text></table>
                <div className="landing-one-offer-block-cross"></div>
                </div>
                <div className="landing-two-offer-block"><Text as="h3" className="text-landing-box">{this.props.t("AVS4YOU Unlimited Subscription")}</Text>
                <div className="after-text-box"></div>
                <Text as="h4" className="text-info-landing-box">{this.props.t("24hour exclusive offer")}</Text>
                <Text as="h4" className="header__new__price">{this.props.t("$59")}</Text>
                <table className="header__buy"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.16320382.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>{this.props.t("Get It Now")}</a></Text></table></div></div>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">{this.props.t("Why you will love AVS4YOU")}</Text>
          <BenefitsCarousel infinity className="benefitsCarousel" centerSlide={3}>
          <div  className="carouselItem export">
              <Text>{this.props.t("100% secure adfree virusfree")}</Text>
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

          <ScrollTools className="scrollTools">
            <div className="leftSide">
                <div className="scrollItem">
                    <div className="trigger" id="trigger" />
                    <div className="textItem">
                        <Text as="h3" className="textItem__heading">AVS Video Editor</Text>
                        <Text className="textItem__paragraph">{this.props.t("Make your home videos look professional with a full set of video editing tools")}.</Text>
                        <Text className="textItem__paragraph">{this.props.t("Play with 300 effects and transitions")}.</Text>
                    </div>
                </div>
                <div id="trigger1" />
                <div className="scrollItem">
                    <div className="textItem">
                        <Text as="h3" className="textItem__heading">AVS Video Converter</Text>
                        <Text className="textItem__paragraph">{this.props.t("Easily convert videos to all key formats MP4 MPEG DVD WMV AVI HDV 60 more")}.</Text>
                        <Text className="textItem__paragraph">{this.props.t("Use customized profiles for video playback on any device")}.</Text>
                    </div>
                </div>
                <div id="trigger2" />
                <div className="scrollItem">
                    <div className="textItem">
                        <Text as="h3" className="textItem__heading">AVS Video ReMaker</Text>
                        <Text className="textItem__paragraph">{this.props.t("Edit video files without reencoding and quality loss Cut delete unwanted parts change scene sequence")}.</Text>
                        <Text className="textItem__paragraph">{this.props.t("Burn video to DVD or Blu discs")}.</Text>
                    </div>
                </div>
                <div id="trigger3" />
                <div className="scrollItem">
                    <div className="textItem">
                        <Text as="h3" className="textItem__heading">AVS Audio Converter</Text>
                        <Text className="textItem__paragraph">{this.props.t("Convert your audio files between various formats MP3 WAV WMA M4A FLAC and others")}.</Text>
                        <Text className="textItem__paragraph">{this.props.t("Create your own audiobooks")}.</Text>
                    </div>
                </div>
                <div id="trigger4" />
                <div className="scrollItem">
                <div className="trigger" id="trigger5" />
                    <div className="textItem">
                        <Text as="h3" className="textItem__heading">AVS Audio Editor</Text>
                        <Text className="textItem__paragraph">{this.props.t("Enhance your audio with special effects and filters Record audio data from various inputs")}.</Text>
                        <Text className="textItem__paragraph">{this.props.t("Save audio files to popular audio formats")}.</Text>
                    </div>
                </div>
            </div>
          </ScrollTools>

        </div>

        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">{this.props.t("Helpful resources")}</div>
<div className="knowledge"><div className="knowledgeIcon"><a href="https://onlinehelp.avs4you.com/index.aspx" style={{color: "#393939"}}>{this.props.t("Knowledge center")}</a></div>
<div className="tipsIcon"><a href="https://www.avs4you.com/guides/index.aspx" style={{color: "#393939"}}>{this.props.t("Tips tricks")}</a></div>
<div className="questionIcon">{this.props.t("Got a question")}
<br/>{this.props.t("Contact our")} <a href="https://support.avs4you.com/login.aspx?_ga=2.17915129.1345987683.1595154508-193195073.1594635509" style={{color: "#393939"}}>{this.props.t("support team")}</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedPack);
