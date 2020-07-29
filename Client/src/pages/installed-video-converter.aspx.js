import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/installed-video-converter.less";
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
        className="installed-video-converter-page" 
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
                  <img src={Logo} alt="avs4you logo"/>
              </LogoWrapper>
          </GatsbyLink>
          </div>
          <ImageGQL className="headerBackgroundImage" imageName="installed-video-converter-header.jpg" style={{position: "absolute"}}/>
            <div className="header__body">  <ImageGQL className="installedSuper" imageName="installed-video-editor-super.png" style={{margin: "auto"}}/>
              <Text as="h1" className="header__heading installed">Thank you for installing
            <br/> AVS Video Converter!</Text>
             <table className="header__heading exclusive"><Text as="h2" className="header__heading exclusive"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.85478225.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>Exclusive Offer Only Today</a></Text></table>
              <Text as="h3" className="header__subtitle installed">Save 70% on the full version and
                <br/>get extra 4 multimedia programs as a gift!</Text>
              <table className="header__price__block"><Text as="h4" className="header__price">$199</Text>
              <Text as="h4" className="header__new__price">$59.00</Text></table>
              <table className="header__buy"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.16320382.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>Buy now</a></Text></table>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">Your benefits</Text>
          <BenefitsCarousel className="benefitsCarousel" centerSlide={3}>
            <div  className="carouselItem free">
              <Text>Free upgrades</Text>
            </div>
            <div  className="carouselItem support">
              <Text>Free technical support</Text>
            </div>
            <div className="carouselItem unlimited">
              <Text>Unlimited access to the program</Text>
            </div>
            <div  className="carouselItem noWatermark">
              <Text>No watermark</Text>
            </div>
            <div  className="carouselItem correct">
              <Text>Correct aspect ratio, crop scale</Text>
            </div>
            <div  className="carouselItem cut">
              <Text>Cut, trim, split, merge, apply effects</Text>
            </div>
            <div  className="carouselItem export">
              <Text>Export audio from video in MP3</Text>
            </div>
          </BenefitsCarousel>
          <div className="screenshotImageBlock"></div>
        </div>

        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
            + Get 4 professional multimedia programs as a gift
            </Text>
            <div className="contact-body__wrapper">

            <div className="common-info-block">
              <div className="gift">Gift</div>
                <Text as="h4" className="common-info-block__headline">
                AVS Audio Converter
                </Text>
                <Text className="common-info-block__text">
                A multiformat audio conversion application with basic audio editing tools
                </Text>
                <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" style={{color: "#fff"}}>Download now</a></div>
              </div>

              <div className="common-info-block">
              <div className="gift">Gift</div>
                <Text as="h4" className="common-info-block__headline">
                AVS Video Editor
                </Text>
                <Text className="common-info-block__text">
                Professional full-featured video editor for making high quality videos just in minutes
                </Text>
                <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" style={{color: "#fff"}}>Download now</a></div>
              </div>

              <div className="common-info-block">
                <div className="gift">Gift</div>
                <Text as="h4" className="common-info-block__headline">
                AVS Audio Editor
                </Text>
                <Text className="common-info-block__text">
                Professional level audio editing and recording software for Windows
                </Text>
                <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" style={{color: "#fff"}}>Download now</a></div>
              </div>

              <div className="common-info-block">
              <div className="gift">Gift</div>
                <Text as="h4" className="common-info-block__headline">
                AVS Video ReMaker
                </Text>
                <Text className="common-info-block__text">
                A fast video editing tool to make edits without changing the original video file format
                </Text>
                <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" style={{color: "#fff"}}>Download now</a></div>
                </div>
                </div>
          </div>
        </div>

        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">Helpful resources</div>
<div className="knowledge"><div className="knowledgeIcon"><a href="https://onlinehelp.avs4you.com/avs-video-editor/" style={{color: "#393939"}}>Knowledge center</a></div>
<div className="tipsIcon"><a href="https://www.avs4you.com/guides/video.aspx" style={{color: "#393939"}}>Tips & tricks</a></div>
<div className="questionIcon">Got a question?
<br/>Contact our <a href="https://support.avs4you.com/login.aspx?_ga=2.17915129.1345987683.1595154508-193195073.1594635509" style={{color: "#393939"}}>support team</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedVideoEditor);
