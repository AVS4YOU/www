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
    <div className="header">
    <div className="header_image"></div>  
    <div className="header__body"> 
    <div className="avs-logo">
  <GatsbyLink className="headerLogo" to="/">
      <LogoWrapper href="/">
          <img src={Logo} alt="avs4you logo"/>
      </LogoWrapper>
  </GatsbyLink>
  </div>
    <Text className="installed_special_offer">Этот контент будет отображаться только на тех языках, которые указанны на странице в массиве lang</Text>
      <Text as="h1" className="header__heading installed">{props.t("Thank you for installing AVS Audio Converter")} <br /> {props.t("AVS audio converter")}</Text>
      <Text as="h3" className="header__subtitle installed">{props.t("Save 70 on the full version and")} <br /> <div className="plus-header">{props.t("+")}</div> {props.t("Get 4 professional multimedia")} <br /> <div className="plus-header">{props.t("+")}</div> {props.t("free support")}</Text>
      <table className="header__price__block"><Text as="h4" className="header__price">{props.t("199")}</Text>
      <Text as="h4" className="header__new__price">{props.t("59")}</Text></table>
      <table className="header__buy"><Text as="h2" className="header__buy__now"><a href={props.t(`${props.hrefUnlim}`)} style={{color: "#fff"}}>{props.t("Buy now")}</a></Text></table>
    </div>
  </div>

  <div className="body-company">
    <Text as="h2" className="common__heading">{props.t("Your benefits")}</Text>
    <div className="benefitsCarousel">
    <div className="carouselItem package">
        <Text>{props.t("5 multimedia programs")}</Text>
      </div>
      <div className="carouselItem unlimited">
        <Text>{props.t("No restrictions")}</Text>
      </div>
      <div  className="carouselItem noWatermark">
        <Text>{props.t("No watermark")}</Text>
      </div>
      <div  className="carouselItem free">
        <Text>{props.t("Free upgrades")}</Text>
      </div>
      <div className="carouselItem secure">
        <Text>{props.t("100% secure, ad-free, virus-free")}</Text>
      </div>
    </div>
  </div>
  <div className="installed-carousel">
    <ScreenshotsCarousel
      maxWidth={734}
      maxWidthPopup={734}
      titleImage={[props.t("AVS Audio Converter"), props.t("AVS Audio Editor"), props.t("AVS Video Converter"), props.t("AVS Video Editor"), props.t("AVS Video ReMaker")]}
      descriptionImage={[props.t("Convert audio/video to MP3 and all key formats"), props.t("Record & edit audio, remove noise, polish your recordings"), props.t("Change any video format to play on your device or pc"), props.t("Record, edit, optimize and export videos just in minutes"), props.t("Capture and edit video fast without re-encoding")]}
      imageNames={[props.t("audio converter bath jpg"), props.t("audio editor edit all key jpg"), props.t("video converter edit your videos jpg"), props.t("video editor slider2 jpg"), props.t("video remaker edit video files min jpg")]}
      imageNamesPopup={[props.t("audio converter bath jpg"), props.t("audio editor edit all key jpg"), props.t("video converter edit your videos jpg"), props.t("video editor slider2 jpg"), props.t("video remaker edit video files min jpg")]}
      altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
    />
  </div>
  <div className="resourcesTable" style={{margin: "auto"}}> 
  <div className="helpful">{props.t("Helpful resources")}</div>
  <div className="knowledge">
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="knowledgeIcon"></div></div><a href={props.t("onlinehelpAudioHref")} style={{color: "#016FD0"}}>{props.t("Knowledge center")}</a></div>
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="tipsIcon"></div></div><a href={props.t("supportAudioHref")} style={{color: "#016FD0"}}>{props.t("Tips tricks")}</a></div>
    <div className="helpful-block"><div className="blue-bg-helpful"><div className="questionIcon"></div></div><a href={props.t("guidesAudioHref")} style={{color: "#016FD0"}}>{props.t("Got a question")} {props.t("Contact our")} {props.t("support team")}</a> </div>
  </div>
  </div>
  </div>
);