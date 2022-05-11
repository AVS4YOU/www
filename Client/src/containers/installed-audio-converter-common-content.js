import React from "react";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import "../styles/installed-audio-converter.less";
import BenefitsCarousel from '../components/benefits-carousel';
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

export const InstalledAudioConverterCommonContent = (props) => (
  <div>
    <div className="header">
              <ImageGQL className="headerBackgroundImage" imageName="installed-audio-converter-header.jpg" style={{position: "absolute"}}/>
                <div className="header__body"> <ImageGQL className="installedSuper" imageName="installed-video-editor-super.png" style={{margin: "auto"}}/>
                 <div className="avs-logo">
                      <LogoWrapper href="/">
                          <img src={Logo} alt="avs4you logo"/>
                      </LogoWrapper>
                  </div>
                  <Text as="h1" className="header__heading installed">{props.t("Thank you for installing AVS Audio Converter")} <br /> {props.t("AVS audio converter")}</Text>
                <table className="header__heading exclusive"><Text as="h2" className="header__heading exclusive"><a href={props.t(`${props.hrefUnlim}`)} style={{color: "#fff"}}>{props.t("Exclusive Offer Only Today")}</a></Text></table>
                  <Text as="h3" className="header__subtitle installed">{props.t("Save 70 on the full version and")}
                    <br/>{props.t("get access to extra features")}</Text>
                  <table className="header__price__block"><Text as="h4" className="header__price">{props.t("199")}</Text>
                  <Text as="h4" className="header__new__price">{props.t("590")}</Text></table>
                  <table className="header__buy"><Text as="h2" className="header__buy__now"><a href={props.t(`${props.hrefUnlim}`)} style={{color: "#fff"}}>{props.t("Buy now")}</a></Text></table>
                </div>
            </div>
            <div className="body-company">
              <Text as="h2" className="common__heading">{props.t("Your benefits")}</Text>
              <BenefitsCarousel className="benefitsCarousel" centerSlide={3} marginOffset={-29.5}>
                <div  className="carouselItem free">
                  <Text>{props.t("Free upgrades")}</Text>
                </div>
                <div  className="carouselItem support">
                  <Text>{props.t("Free technical support")}</Text>
                </div>
                <div className="carouselItem unlimited">
                  <Text>{props.t("Unlimited access to the program")}</Text>
                </div>
                <div  className="carouselItem noWatermark">
                  <Text>{props.t("No watermark")}</Text>
                </div>
                <div  className="carouselItem cut">
                  <Text>{props.t("Cut trim split")}</Text>
                </div>
                <div  className="carouselItem use">
                  <Text>{props.t("Use multithread conversion")}</Text>
                </div>
                <div  className="carouselItem create">
                  <Text>{props.t("Create audiobooks")}</Text>
                </div>
              </BenefitsCarousel>
              <div className="screenshotImageBlock"></div>
            </div>

            <div className="contact-body">
              <div className="contact-body__max-width">
                <Text as="h2" className="common__heading">
                + {props.t("Get 4 professional multimedia programs as a gift")}
                </Text>
                <div className="contact-body__wrapper">

                <div className="common-info-block">
                  <div className="gift">{props.t("Gift")}</div>
                  <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" style={{color: "#fff"}}>{props.t("Download now")}</a></div>
                    <Text as="h4" className="common-info-block__headline">
                    AVS Video Converter
                    </Text>
                    <Text className="common-info-block__text">
                    {props.t("Allinone video converter with basic video editing features")}
                    </Text>
                  </div>

                  <div className="common-info-block">
                  <div className="gift">{props.t("Gift")}</div>
                  <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" style={{color: "#fff"}}>{props.t("Download now")}</a></div>
                    <Text as="h4" className="common-info-block__headline">
                    AVS Video Editor
                    </Text>
                    <Text className="common-info-block__text">
                    {props.t("Professional fullfeatured video editor for making high quality videos just in minutes")}
                    </Text>
                  </div>

                  <div className="common-info-block">
                    <div className="gift">{props.t("Gift")}</div>
                    <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" style={{color: "#fff"}}>{props.t("Download now")}</a></div>
                    <Text as="h4" className="common-info-block__headline">
                    AVS Audio Editor
                    </Text>
                    <Text className="common-info-block__text">
                    {props.t("Professional level audio editing and recording software for Windows")}
                    </Text>
                  </div>

                  <div className="common-info-block">
                  <div className="gift">{props.t("Gift")}</div>
                  <div className="download-product"><a href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" style={{color: "#fff"}}>{props.t("Download now")}</a></div>
                    <Text as="h4" className="common-info-block__headline">
                    AVS Video ReMaker
                    </Text>
                    <Text className="common-info-block__text">
                    {props.t("A fast video editing tool to make edits without changing the original video file format")}
                    </Text>
                    </div>
                    </div>
              </div>
            </div>

            <div className="resourcesTable" style={{margin: "auto"}}> 
    <div className="helpful">{props.t("Helpful resources")}</div>
    <div className="knowledge"><div className="knowledgeIcon"><a href={props.t("onlinehelpAudioHref")} style={{color: "#393939"}}>{props.t("Knowledge center")}</a></div>
    <div className="tipsIcon"><a href={props.t("supportAudioHref")} style={{color: "#393939"}}>{props.t("Tips tricks")}</a></div>
    <div className="questionIcon">{props.t("Got a question")}
    <br/>{props.t("Contact our")} <a href={props.t("guidesAudioHref")} style={{color: "#393939"}}>{props.t("support team")}</a> </div>
    </div>
    </div>
  </div>
);