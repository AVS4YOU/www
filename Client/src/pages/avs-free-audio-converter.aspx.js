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
import {AudioConverter} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';

import AvatarJohn from '../images/avs-audio-converter/john.png';
import AvatarJacky from '../images/avs-audio-converter/jacky.png';



//
import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg3.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg4.png';
import Eggm from '../images/easter-event/mobile_egg.png';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import styled from 'styled-components';
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
    font-size: 30px;
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
//



class avsAudioConverter extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonAudioConverter")
    };

    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this); 
  }

  getDevice(device){
    this.setState({ device: device });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

render(){

    return (
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS Free Audio Converter - Convert all key audio formats")}
        metaDescription={this.props.t("Free Audio Converter - Convert MP3, WAV, WMA, M4A, OGG, FLAC, AMR, AAC for free and losslessly Download AVS Free Audio Converter")}
        metaKeywords={this.props.t("avs audio converter, avs song converter, avs  music converter, music converter, convert music, convert music mp3, audio converter, audio converter mp3, convert audio,song converter, mp3 song converter, mp3 converter, wav converter, wav mp3 converter, video to audio converter, mp4 to mp3 converter, mp4 to mp3, wma converter, mp4 wma converter, wma mp3, convert m4a, m4a to mp3, flac converter, flac to mp3 converter, amr converter")}
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="pink_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
              <Text as="span" className="flagBackground header">{this.props.t("Free")}
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Audio Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Convert audio between popular formats Apply effects, customize output parameters, use batch mode")}</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName={this.props.t("audio converter header png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={this.props.t("audio converter header png")} style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">


          {(getCookieConsentValue("AVSEasterEvents") == "true") ? 
            <div className="eggsEventRightN"><img src={Egg} onClick={() => this.openModal()}></img></div>
            : <div className="eggsEventRightN"></div>}
            <ModalEgg
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <EggEventS>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
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
                        <Text className="ModalShaerTexth1">{this.props.t("VCABingo!")}<br />{this.props.t("VCAYou have found our treasure egg!!!")}</Text>
                        <Text className="ModalShaerTexth2">{this.props.t("VCAGet 75% Off on AVS Video ReMaker")}<br />{this.props.t("VCA1 Year Subscription")}<br />{this.props.t("VACAVS Video ReMaker")}</Text>
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Treasure75")}</span></Text>
                        <Text className="ModalShaerTexth4">{this.props.t("*Just use this coupon while purchasing")}</Text>
                        <a href={this.state.hrefButton}>
                        <button
                          className="ModalShaerClose"                  
                          >
                            {this.props.t("SHOP NOW")}
                          </button>
                          </a> 
                      </div>    
                      </div>                
                      </EggEventS>
                  </ModalEgg> 



            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">{this.props.t("Overview")}</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">{this.props.t("Reviews")}</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">{this.props.t("Screentour")}</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
              <Text color="#666666" align="center">{this.props.t("Download")}</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName={this.props.t("audio converter slider2 jpg")}
                headerText={this.props.t("Convert and edit all key audio formats")}
            >
              <Text className="ListItem">{this.props.t("Convert MP3, WMA, WAV, M4A, AMR, OGG, ALAC, FLAC, AC3, MP2, etc")}</Text>
              <Text className="ListItem">{this.props.t("Trim, delete unnecessary parts, merge files, apply effects (Fade in, Fade out, Normalize)")} *</Text>
              <Text className="ListItem">{this.props.t("Modify audio file information Title, Author, Artist and Album cover")}</Text>
              <Text className="ListItem footnote" fontWeight={500}>{this.props.t("This feature is available in a full version")}</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("audio converter slider3 jpg")}
                headerText={this.props.t("Create audio files for any purpose")}
            >
              <Text className="ListItem">{this.props.t("Create Audiobooks Convert your audio tracks to M4B format, divide them into chapters and add bookmarks")} *</Text>
              <Text className="ListItem">{this.props.t("Create ringtones Edit an audio file and save it to M4R format for iPhone")}</Text>
              <Text className="ListItem">{this.props.t("Export audio from video files DVD, MPEG, MP4, AVI, MOV, WMV, FLV, etc")}</Text>
              <Text className="ListItem footnote" fontWeight={500}>{this.props.t("This feature is available in a full version")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName={this.props.t("audio converter bath jpg")}
              headerText={this.props.t("Convert audio files in bulk")}    
            >
              <Text className="ListItem">{this.props.t("Use a batch mode to convert or compress a large number of audio files at once")}</Text>
              <Text className="ListItem">{this.props.t("Create your own conversion patterns, set favorite presets and schedule an automatic conversion process using a command-line mode")} *</Text>
              <Text className="ListItem footnote" fontWeight={500}>{this.props.t("This feature is available in a full version")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "John Woffod",
                    avatar: AvatarJohn,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("For the Holidays I had the need to convert audio files for my wife and kids After using your app I saw immediately that it was well written, straight forward, easy to use, fast and very detail oriented so far have run many dozens of M4A to WMA and MP3 conversions"),
                  },
                  {
                    name: "Jacky Lui",
                    avatar: AvatarJacky,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("The software AVS Audio Converter is a very great and very pleasant to work with The software is a must and that for a very attractive price I am very happy with the AVS Audio Converter software")
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Audio Converter 10.0</Text>
          <ScreenshotsCarousel 
            imageNames={[this.props.t("audio converter slider1 jpg"), this.props.t("audio converter slider2 jpg"), this.props.t("audio converter slider3 jpg"), this.props.t("audio converter bath jpg") ]}
            imageNamesPopup={[this.props.t("audio converter slider1 jpg"), this.props.t("audio converter slider2 jpg"), this.props.t("audio converter slider3 jpg"), this.props.t("audio converter bath jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioConverter.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioConverter.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" to="headerContentWrapper" textDownload={this.props.t("download now")}/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>{this.props.t("By clicking the Download button you agree to")} <Link to="/license-agreement.aspx">{this.props.t("our End User License Agreement")}</Link></Text>
            </div>
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
                <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{this.props.t("Technical specification")}</Text>
                <div className="specificationGrid">
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel / AMD compatible at 186 GHz or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("1 GB or higher")} </Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("CD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from CD")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DirectX")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Microsoft DirectX 90c or later")}</Text>
                    </div>
                  </div>
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Operating system")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8.x/Windows 7")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Dual core (Intel Core i3 series or AMD equivalent)")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("3 GB or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible video card")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                    </div>
                  </div>
                </div>
                <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*{this.props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
                <div className="attentionBlock">
                  <Text fontSize={16} fontWeight={500}>{this.props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}</Text>
                </div>
            </PageContentWrapper>
          </div>
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsAudioConverter);