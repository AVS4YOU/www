import React from "react";
import Text from '../components/text';
import "../styles/installed-audio-converter.less";
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import ScreenshotsCarousel from '../components/screenshot-carousel';

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

export const InstalledAudioConverterOtherContent = (props) => (
  <div>
    <div className="header_other">
    <div className="header_image_other"></div>  
    <div className="header__body_other"> 
    <div className="avs-logo_other">
  <GatsbyLink className="headerLogo_other" to="/">
      <LogoWrapper href="/" id="main_installed-audio-converter">
          <img src={Logo} alt="avs4you logo_other"/>
      </LogoWrapper>
  </GatsbyLink>
  </div>
  <Text className="installed_special_offer_other">{props.t("Special offer")}</Text>
      <Text as="h1" className="header__heading_installed_other">{props.t("Thank you for installing AVS Audio Converter")} <br /> {props.t("AVS audio converter")}</Text>
      <Text as="h3" className="header__subtitle_installed_other">{props.t("Save 70 on the full version and")} <br /> <div className="plus-header">{props.t("+")}</div> {props.t("Get 4 professional multimedia")} <br /> <div className="plus-header">{props.t("+")}</div> {props.t("free support")}</Text>
      <table className="header__price__block_other"><Text as="h4" className="header__price_other">{props.t("199")}</Text>
      <Text as="h4" className="header__new__price_other">{props.t("59")}</Text></table>
      <table className="header__buy_other"><Text as="h2" className="header__buy__now_other"><a id="buy-now_installed-audio-converter" href={props.t(`${props.hrefUnlim}`)} style={{color: "#fff"}}>{props.t("Buy now")}</a></Text></table>
    </div>
  </div>

  <div className="body-company_other">
    <Text as="h2" className="common__heading_other">{props.t("Your benefits")}</Text>
    <div className="benefitsCarousel_other">
    <div className="carouselItem_other package_other">
        <Text>{props.t("5 multimedia programs")} <br /> {props.t("in 1 package")}</Text>
      </div>
      <div className="carouselItem_other unlimited_other">
        <Text>{props.t("No restrictions")}</Text>
      </div>
      <div  className="carouselItem_other noWatermark_other">
        <Text>{props.t("No watermark")}</Text>
      </div>
      <div  className="carouselItem_other free_other">
        <Text>{props.t("Free upgrades")}</Text>
      </div>
      <div className="carouselItem_other secure_other">
        <Text>{props.t("100% secure,")} <br /> {props.t("ad-free,")} <br /> {props.t("virus-free")}</Text>
      </div>
    </div>
  </div>
  <div className="installed-carousel">
    <ScreenshotsCarousel
      maxWidth={734}
      maxWidthPopup={734}
      titleImage={[props.t("AVS Audio Converter"), props.t("AVS Audio Editor"), props.t("AVS Video Converter"), props.t("AVS Video Editor"), props.t("AVS Video ReMaker")]}
      descriptionImage={[props.t("Fast audio conversion tool with basic audio editing tools"), props.t("Professional level audio editing and recording software"), props.t("All-in-one video converter with basic video editing features"), props.t("Professional full-featured video editor for making high quality videos just in minutes"), props.t("A simple and fast video editor without re-encoding")]}
      imageNames={[props.t("audio converter bath jpg"), props.t("audio editor edit all key jpg"), props.t("video converter edit your videos jpg"), props.t("video editor slider2 jpg"), props.t("video remaker edit video files min jpg")]}
      imageNamesPopup={[props.t("audio converter bath jpg"), props.t("audio editor edit all key jpg"), props.t("video converter edit your videos jpg"), props.t("video editor slider2 jpg"), props.t("video remaker edit video files min jpg")]}
      altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
    />
  </div>
  <div className="resourcesTable_other" style={{margin: "auto"}}> 
  <div className="helpful_other">{props.t("Helpful resources")}</div>
  <div className="knowledge_other">
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="knowledgeIcon_other"></div></div><a id="knowledge-center_installed-audio-converter" href={props.t("onlinehelpAudioHref")} style={{color: "#016FD0"}}>{props.t("Knowledge center")}</a></div>
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="tipsIcon_other"></div></div><a id="tips-tricks_installed-audio-converter" href={props.t("supportAudioHref")} style={{color: "#016FD0"}}>{props.t("Tips tricks")}</a></div>
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="questionIcon_other"></div></div><a id="support-team_installed-audio-converter" href={props.t("guidesAudioHref")} style={{color: "#016FD0"}}>{props.t("Got a question")} {props.t("Contact our")} {props.t("support team")}</a> </div>
  </div>
  </div>
  </div>
);
