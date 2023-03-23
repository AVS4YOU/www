import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';
import ImageGQL from '../components/image-gql';
import {VideoEditor} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';
import styled from 'styled-components';

import AvatarChenWang from '../images/common/review-carousel/chen_wang.png';
import AvatarLinda from '../images/avs-video-editor/linda_k.png';
import AvatarMarc from '../images/avs-video-editor/marc_n.png';

import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg2.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg2.png';
import Eggm from '../images/easter-event/mobile_egg.png';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const EggEventS = styled.div`
a: hover{
  text-decoration: none;
}
.ModalEventEgg{
  width: 448px;
  height: 565px;
  background-image: url(${EggM});
  .EventEggContent{
    padding-top: 175px;
    padding-left: 25px;
    text-align: center;
  }
  .ModalShaerTexth1{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 34px;
    text-align: center;
    color: #1E5839;
    padding-top: 15px;
  }
  .ModalShaerTexth2{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    text-align: center; 
    color: #000000;
    padding-top: 5px;
  }
  .ModalShaerTextCoupon{
    
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    margin-left: auto;
    margin-right: auto;
    color: #1E5839;
    margin-top: 25px;
    margin-bottom: 25px;
    span{
      border: 2px dashed #1E5839;
      box-sizing: border-box;
      padding: 4px 20px;
    }
  }
  .ModalShaerTexth4{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    margin-bottom: 30px;
  }
  .ModalShaerClose{
    font-family: Myriad Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FEFFFD;
    background: #1E5839;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    cursor:pointer;
    margin-top: 40px;
  }
}
.ModalShaerClose{
  background: none;
  border: none;
 .CloseEggButton{
  margin-left: 450px;
 }
}

@media only screen and (max-width: 600px) {
  .ModalEventEgg{
    width: 300px;
    height: 380px;
    background-image: url(${Eggm});
    .EventEggContent{
      padding-top: 85px;
      padding-left: 10px;
      text-align: center;
    }
    .ModalShaerTexth1{
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;
    }
    .ModalShaerTexth2{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 17px;
    }
    .ModalShaerTextCoupon{
      font-size: 14px;
      line-height: 19px;
    }
    .ModalShaerTexth4{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
    }
    .ModalShaerClose{
      margin-top: 0px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .ModalShaerClose{
    background: none;
    border: none;
   .CloseEggButton{
    margin-left: 250px;
   }
  }
}

`;



  export const AvsVideoEditorCommonContent = (props) => (
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{props.t("AVS Video Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{props.t("Trim, cut, split, merge, rotate, mix videos 300+ innovative effects, transitions, overlays")}</Text>
                <HeaderDownloadButtons 
                  t={props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                  secondaryText="Windows 11/10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            
            <ImageGQL className="headerImage" imageName={props.t("en avs video editor main png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={props.t("en avs video editor main png")} style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">{props.t("Overview")}</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">{props.t("Reviews")}</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">{props.t("Screentour")}</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
              <Text color="#666666" align="center">{props.t("Download")}</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName={props.t("video editor slider3 jpg")}
                headerText={props.t("Work with all key formats and HD videos")}    
            >
              <Text className="ListItem">{props.t("Edit and save video in all popular formats MP4, DVD, AVI, MOV, VOB, WMV, MKV, FLV, WEBM, etc")}</Text>
              <Text className="ListItem">{props.t("Process video in any resolution HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K")}</Text>
              <Text className="ListItem">{props.t("Open, modify and save video using popular codeсs H 264, H 265  reading only , MPEG-4, etc")}</Text>
              <Text className="ListItem">{props.t("Speed up HD video editing due to the integrated video cache technology and hardware acceleration for video decoding by means of video cards GPU")}</Text>
              <Text className="ListItem">{props.t("Use new automatic presets for powerful computers")}</Text>
              <a target="_blank" rel="noreferrer noopener" href={props.t("avs-video-editor-onlinehelp-avs4you")}>
                <Text className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>{props.t("See a full list of all supported formats")}</Text>
              </a>
            </ContentRowItem>

            {(getCookieConsentValue("AVSEasterEvents") == "true") ? 
            <div className="eggsEventRight"><img src={Egg} onClick={() => props.openModal()}></img></div>
            : <div className="eggsEventRight"></div>}
            <ModalEgg
                    isModalOpen={props.isModalOpen}
                    closeModal={props.closeModal}
                  >
                    <EggEventS>
                    <button
                    className="ModalShaerClose"
                      onClick={props.closeModal}
                    >
                      <img className="CloseEggButton" 
                        src={CloseEgg}
                        alt="Close"
                        style={{
                          width: "28px"
                        }}/>
                    </button>
                    <div className="ModalEventEgg">
                   
                    <div className="EventEggContent">                    
                        <Text className="ModalShaerTexth1">{props.t("PWell done!")}</Text>
                        <Text className="ModalShaerTexth2">{props.t("Pon AVS4YOU Unlimited")}<br />{props.t("PSubscription")}</Text>
                        <Text className="ModalShaerTextCoupon"><span>{props.t("Sunny30")}</span></Text>
                        <Text className="ModalShaerTexth4">{props.t("*Just use this coupon while purchasing")}</Text>
                        <a href={props.hrefButton}>
                        <button
                          className="ModalShaerClose"                  
                          >
                            {props.t("SHOP NOW")}
                          </button>
                          </a> 
                      </div>    
                      </div>                
                      </EggEventS>
                  </ModalEgg> 
           
            <ContentRowItem 
                imgLeft={false}
                imageName={props.t("video editor slider4 jpg")}
                headerText={props.t("Record your video")}   
            >
              <Text className="ListItem">{props.t("Transfer video from DV/HDV cameras, webcams or VHS cameras")}</Text>
              <Text className="ListItem">{props.t("Record media files from your PC screen")}</Text>
              <Text className="ListItem">{props.t("Give a new life to old VHS tapes")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName={props.t("video editor slider5 jpg")}
              headerText={props.t("Make your video look professional")}    
            >
              <Text className="ListItem">{props.t("Cut out a particular scene or remove shaky and unnecessary parts")}</Text>
              <Text className="ListItem">{props.t("Split videos regardless of both the video size and formats")}</Text>
              <Text className="ListItem">{props.t("Join as many video files as you want")}</Text>
              <Text className="ListItem">{props.t("Fix up any white balancing issues and color mismatches with color tuning")}</Text>
              <Text className="ListItem">{props.t("Fix a shaky footage with video stabilization")}</Text>
              <Text className="ListItem">{props.t("Use chroma key effect to change your background")}</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={props.t("video editor slider2 jpg")}
                headerText={props.t("Make vivid slideshows")}   
            >
              <Text className="ListItem">{props.t("Import images, add your voice or favourite audio tracks")}</Text>
              <Text className="ListItem">{props.t("Insert captions, visual effects and transitions")}</Text>
              <Text className="ListItem">{props.t("Create personal and corporate slideshows easily")}</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                imageName={props.t("video editor slider6 jpg")}
                headerText={props.t("Share your video")}    
            >
              <Text className="ListItem">{props.t("Save the newly-made video in the desired format on your computer")}</Text>
              <Text className="ListItem">{props.t("Adjust video for your iOS and Android devices")}</Text>
              <Text className="ListItem">{props.t("Create video for YouTube, Video and other video hosting websites")}</Text>
              <Text className="ListItem">{props.t("Publish your creative work in social networks")}</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Chen Wang",
                    avatar: AvatarChenWang,
                    revHeader: props.t("Our customers say"),
                    revText: props.t("For the price this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent easy to use with quality results")
                  },
                  {
                    name: "Linda K.",
                    avatar: AvatarLinda,
                    revHeader: props.t("Our customers say"),
                    revText: props.t("I love all the programs I use the registry cleaner weekly and the video converter almost daily You can not get a better deal for just the registry cleaner alone The audio and video converter programs are easy to work")
                  },
                  {
                    name: "Marc N.",
                    avatar: AvatarMarc,
                    revHeader: props.t("Our customers say"),
                    revText: props.t("Ive used several AVS products for years and they have never fallen short on what I needed them to do")
                  }
                ]
              }
            />
            <Button className="trustButton" style={{margin: "auto", display: "table"}}
                    href="https://www.trustpilot.com/review/www.avs4you.com" 
                    color="#fff">
                    {props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> {props.t("Trustpilot")}
            </Button>
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">{props.t("AVS Video Editor 97")}</Text>
          <ScreenshotsCarousel
            imageNames={[props.t("video editor slider1 jpg"), props.t("video editor slider2 jpg"), props.t("video editor slider3 jpg"), props.t("video editor slider4 jpg"), props.t("video editor slider5 jpg"), props.t("video editor slider6 jpg")]}
            imageNamesPopup={[props.t("video editor slider1 jpg"), props.t("video editor slider2 jpg"), props.t("video editor slider3 jpg"), props.t("video editor slider4 jpg"), props.t("video editor slider5 jpg"), props.t("video editor slider6 jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 11, 10, 8.1, 8, 7, Vista, XP {props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" to="headerContentWrapper" textDownload={props.t("download now")}/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>{props.t("By clicking the Download button you agree to")} <Link to="/license-agreement.aspx">{props.t("our End User License Agreement")}</Link></Text>
            </div>
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
                <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{props.t("Technical specification")}</Text>
                <div className="specificationGrid">
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("AMD / Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("2 GB or higher")} </Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Intel HD Graphics, NVIDIA GeForce, AMD Radeon Graphics")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows compatible sound card")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("CD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("32-bit color depth")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("DVD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("for importing from DVD and creating Video DVD")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Video capture device")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("required for capturing")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Windows Media Player")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("11 or higher for WMV video playback")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("DirectX")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Microsoft DirectX 90c or later")}</Text>
                    </div>
                  </div>
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Operating system")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows 11/Windows 10/Windows 8.x/Windows 7")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Quad core (Intel Core i5 series or AMD equivalent)")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("4 GB or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Intel HD Graphics, NVIDIA GeForce recommended for hardware acceleration")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                    </div>
                  </div>
                </div>
                <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*{props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
                <div className="attentionBlock">
                  <Text fontSize={16} fontWeight={500}>{props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}</Text>
                </div>
            </PageContentWrapper>
          </div>
        </ProductPagesWrapper>
    );
