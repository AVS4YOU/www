import React from "react";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import "../styles/installed-audio-converter.less";
import BenefitsCarousel from '../components/benefits-carousel';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled, {createGlobalStyle} from 'styled-components';

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

const FixStyles = createGlobalStyle`
    .fix-style1 {
      padding-top: 0 !important;
    }
`

const InstalledAudioConverterLink = styled.a`
  background-color: #38add8;
  color: #fff;
  text-decoration: none;
  padding: 6px 18px;
  margin: auto;
  font-size: 17px;
  letter-spacing: 1.5px;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`

const InstalledAudioConverterButNow = styled.a`
  background-color: #38add8;
  color: #fff;
  text-decoration: none;
  padding: 12px 50px 12px;
  border-radius: 5px;
  margin: auto;
  letter-spacing: 1.5px;

  font-size: 22px;
  text-transform: uppercase;
  font-weight: 100;

  &:hover {
    text-decoration: none;
  }
`

const InstalledAudioConverterDownloadNow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
  background-color: #38add8;
  width: 100%;
  height: 48px;
  text-align: center;
  white-space: nowrap;
`

export const InstalledVideoConverterCommonContent = (props) => (
    <div>
      <div className="header">
        <FixStyles />
                <ImageGQL className="headerBackgroundImage" imageName="installed-video-converter-header.jpg" style={{position: "absolute"}}/>
                  <div className="header__body">  <ImageGQL className="installedSuper" imageName="installed-video-editor-super.png" style={{margin: "auto"}}/>
                  <div className="avs-logo">
                  <GatsbyLink className="headerLogo" to="/" id="main_installed-video-converter">
                      <LogoWrapper href="/">
                          <img src={Logo} alt="avs4you logo"/>
                      </LogoWrapper>
                  </GatsbyLink>
                  </div>
                    <Text as="h1" className="header__heading installed">{props.t("Thank you for installing AVS Video Converter")} <br /> {props.t("AVS video converter")}</Text>
                    <table style={{margin: '0 auto'}}>
                      <InstalledAudioConverterLink id="exclusive-offer-only-today_installed-video-converter" href={props.t(`${props.hrefUnlim}`)}>
                        {props.t("Exclusive Offer Only Today")}
                      </InstalledAudioConverterLink>
                    </table>
                    <Text as="h3" className="header__subtitle installed">{props.t("Save 70 on the full version and")}
                      <br/>{props.t("get extra 4 multimedia programs as a gift")}</Text>
                    <table className="header__price__block"><Text as="h4" className="header__price">{props.t("199")}</Text>
                    <Text as="h4" className="header__new__price">{props.t("590")}</Text></table>
                    <table style={{margin: '0 auto'}}>
                      <InstalledAudioConverterButNow id="buy-now_installed-video-converter" href={props.t(`${props.hrefUnlim}`)}>
                        {props.t("Buy now")}
                      </InstalledAudioConverterButNow>
                    </table>
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
                  <div  className="carouselItem correct">
                    <Text>{props.t("Correct aspect ratio")}</Text>
                  </div>
                  <div  className="carouselItem cut">
                    <Text>{props.t("Cut trim split")}</Text>
                  </div>
                  <div  className="carouselItem export">
                    <Text>{props.t("Export audio from video in MP3")}</Text>
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
                    <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow id="download-ac_installed-video-converter" href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe">{props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                      <Text as="h4" className="common-info-block__headline">
                      AVS Audio Converter
                      </Text>
                      <Text className="common-info-block__text">
                      {props.t("A multiformat audio conversion application with basic audio editing tools")}
                      </Text>
                    </div>

                    <div className="common-info-block">
                    <div className="gift">{props.t("Gift")}</div>
                      <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow id="download-ve_installed-video-converter" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">{props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                      <Text as="h4" className="common-info-block__headline">
                      AVS Video Editor
                      </Text>
                      <Text className="common-info-block__text">
                      {props.t("Professional fullfeatured video editor for making high quality videos just in minutes")}
                      </Text>
                    </div>

                    <div className="common-info-block">
                      <div className="gift">{props.t("Gift")}</div>
                      <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow id="download-ae_installed-video-converter" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe">{props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                      <Text as="h4" className="common-info-block__headline">
                      AVS Audio Editor
                      </Text>
                      <Text className="common-info-block__text">
                      {props.t("Professional level audio editing and recording software for Windows")}
                      </Text>
                    </div>

                    <div className="common-info-block">
                    <div className="gift">{props.t("Gift")}</div>
                      <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow id="download-vr_installed-video-converter" href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe">{props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
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
      <div className="knowledge"><div className="knowledgeIcon"><a id="knowledge-center_installed-video-converter" href={props.t("onlinehelpVideoHref")} style={{color: "#393939"}}>{props.t("Knowledge center")}</a></div>
      <div className="tipsIcon"><a id="tips_installed-video-converter" href={props.t("guidesVideoHref")} style={{color: "#393939"}}>{props.t("Tips tricks")}</a></div>
      <div className="questionIcon">{props.t("Got a question")}
      <br/>{props.t("Contact our")} <a id="support-team_installed-video-converter" href={props.t("supportVideoHref")} style={{color: "#393939"}}>{props.t("support team")}</a> </div>
      </div>
      </div>
</div>
);
