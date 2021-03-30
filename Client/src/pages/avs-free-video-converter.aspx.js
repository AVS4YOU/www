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
import {VideoConverter} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';
import "../styles/avs-video-converter.less";

import AvatarGayle from '../images/avs-free-video-converter/gayle_hibbert.png';
import AvatarTerrance from '../images/avs-free-video-converter/terrance_jenkins.png';
import AvatarLawrence from '../images/avs-free-video-converter/lawrence_thompson.png';



//
import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg.png';
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
//


class avsFreeVideoConverter extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonVideoConverter")
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
        title={this.props.t("Convert any video with AVS Free Video Converter for Windows")}
        metaDescription={this.props.t("AVS Free Video Converter converts video  files to all popular video formats MP4, DVD, MPEG, MOV, FLV and others absolutely free Download Free AVS Video Converter")}
        metaKeywords={this.props.t("free video converter, video to mp3, video converter, video download converter, video converter to mp4, avs video converter, avs4you, avs, avs converter, avs4u, video converter tool, video converter software, mp4 to mp3 converter, mp4 to avi converter, mp4 to 3gp converter, mp4 video converter, convert dvd, convert avi, convert mp4, convert wmv, convert mov, video file converter, dvd converter, convert mp4 to dvd, avi converter, video converting, video conversion")}
      >
        <ProductPagesWrapper imageName="blue_background_main.jpg">
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.png" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">{this.props.t("Free")}
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Convert to from video formats MP4, DVD, AVI, WMV,MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc fast and easily")}</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName={this.props.t("video converter en avs video converter png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={this.props.t("video converter en avs video converter png")} style={{maxWidth: "366px"}} alt="header-image-mobile"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
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

          <PageContentWrapper className="videoConverter">
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName={this.props.t("video converter convert all key2 jpg")}
                headerText={this.props.t("Сonvert all key video formats")}    
            >
              <Text className="ListItem">{this.props.t("Encode HD Video, AVI, MP4, DVD, VOB, WMV, Blu-ray, MPEG, MKV, FLV, H 264 codec, H 265 reading only and etc")}</Text>
              <Text className="ListItem">{this.props.t("Convert HD-camera recordings AVCHD, MPEG-2 HD, AVI HD, TOD/MOD, M2TS/MTS, etc")}</Text>
              <Text className="ListItem">{this.props.t("Convert HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K video using ultra new presets and enjoy high quality video playback")}</Text>
              <a target="_blank" rel="noreferrer noopener"  href={this.props.t("avs-free-video-converter-onlinehelp-avs4you")}>
                <Text className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>{this.props.t("See a full list of all supported formats")}</Text>
              </a>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("video converter convert video easily3 jpg")}
                headerText={this.props.t("Convert video easily and fast")}   
            >
              <Text className="ListItem">{this.props.t("Use hardware acceleration for video decoding by means of video cards GPU  Intel HD Graphics or NVIDIA GeForce It is available for H 264 AVC, VC-1, MPEG-2, H 265 HEVC, VP8, VP9 codecs It speeds up preview and conversion processes significantly")}</Text>
              <Text className="ListItem">{this.props.t("Use hardware Intel® Media decoder with Intel® Quick Sync Video technology only for Intel CPU with integrated Intel Graphics")}</Text>
              <Text className="ListItem">{this.props.t("Use software Intel® Media decoder for AMD and old Intel processors")}</Text>
              <Text className="ListItem">{this.props.t("You can use a common software decoder for all processors as an alternative")}</Text>
              <Text className="ListItem">{this.props.t("Use Auto mode to choose the optimal decoder among common, hardware or software Intel® Media")}</Text>
              <Text className="ListItem">{this.props.t("You can use NVIDIA CUDA® decoder with NVDEC/NVCUVID technology for NVIDIA video cards")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName={this.props.t("vc convert a large number jpg")}
              headerText={this.props.t("Convert a large number of files at once")}    
            >
              <Text className="ListItem"><span>{this.props.t("Command Line Mode")}</span>{this.props.t("Automate routine work using ready conversion templates without clicking the program buttons manually")}</Text>
              <Text className="ListItem"><span>{this.props.t("Batch Mode")}</span>{this.props.t("Save your time spent on video conversion by using a batch mode which allows you to convert a large number of video files at once with easy-to-use configurations")}</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false} 
                imageName={this.props.t("video converter edit your videos jpg")}
                headerText={this.props.t("Edit your videos before conversion")}   
            >
              <Text className="ListItem">{this.props.t("Split your videos into parts, by chapters, size and cut unnecessary scenes")}</Text>
              <Text className="ListItem">{this.props.t("Change the aspect ratio of your video")}</Text>
              <Text className="ListItem">{this.props.t("Use basic video editing effects to make your videos more breathtaking")}</Text>
              <Text className="ListItem">{this.props.t("Convert video files with subtitles")}</Text>
              <Text className="ListItem">{this.props.t("Export audio and images from your video")}</Text>
              <Text className="ListItem footnote" fontWeight={500}>{this.props.t("This feature is available in a full version")}</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                imageName={this.props.t("video converter slider popup3 jpg")}
                headerText={this.props.t("Convert and share videos on Web")}
            >
              <Text className="ListItem"><span>{this.props.t("Save video to any format or modern gadgets")}</span>{this.props.t("Apple iPhone 11/XS/XR/X/8/7/SE, Apple iPad Pro, 2019, 2018, 2017, iPad Air 2 etc")}<br/> {this.props.t("Samsung Galaxy S20/S10/S9/S8/S7, A51/A50/A71/A70, Galaxy Note 10/9/8/5, Galaxy Tab S6/S5e/S4/S3, Samsung UHD/SUHD TV, Sony PlayStation 4 Pro (PS4 Pro), Sony PlayStation Vita (PS Vita)")} <br/> {this.props.t("Microsoft Xbox One, Xbox One S, Xbox One X, Sony Xperia 1/XZ3/XZ2/XZ1, XZ2/XZ1 Compact.")}</Text>
              <Text className="ListItem"><span>{this.props.t("Create DVD/Blu-ray discs")}</span>{this.props.t("Convert from to Blu-ray or DVD formats Cut, apply effects, add colorful DVD Blu-ray menus Split your movie into chapters and burn DVD Blu-ray discs")}</Text>
              <Text className="ListItem"><span>{this.props.t("Convert videos for popular social platforms")}</span>{this.props.t("Use ready presets with most appropriate settings to convert video for YouTube, Facebook, Vimeo, DailyMotion, Telly, Flickr, Dropbox")}</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">

          {(getCookieConsentValue("AVSEasterEvents") == "true") ? 
            <div className="eggsEventRight"><img src={Egg} onClick={() => this.openModal()}></img></div>
            : <div className="eggsEventRight"></div>}
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
                        <Text className="ModalShaerTexth1">{this.props.t("VCEnjoy this spring with")}<br />{this.props.t("VCa 50% discount")}</Text>
                        <Text className="ModalShaerTexth2">{this.props.t("VCon AVS Video ReMaker")}<br />{this.props.t("VCUnlimited Subscription")}</Text>
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Sunny50")}</span></Text>
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



            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Gayle Hibbert",
                    avatar: AvatarGayle,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("For the price this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent easy to use with quality results Would certainly recommend to anyone who wants good video software at a reasonable price")
                  },
                  {
                    name: "Terrance Jenkins",
                    avatar: AvatarTerrance,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("The product is super easy to download and use Anyone can do this in just minutes The company is always supportive I highly recommend")
                  },
                  {
                    name: "Lawrence Thompson",
                    avatar: AvatarLawrence,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I have been using AVS for several years and can say for sure that it is very convenient user friendly and functional")
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">{this.props.t("AVS Video Converter 12.1")}</Text>
       

          <ScreenshotsCarousel 
            maxWidth={734}
            maxWidthPopup={734}
            imageNames={[this.props.t("video converter slider1 jpg"), this.props.t("video converter slider2 jpg"), this.props.t("video converter slider3 jpg"), this.props.t("video converter slider4 jpg"), this.props.t("video converter slider5 jpg")]}
            imageNamesPopup={[this.props.t("video converter slider1 jpg"), this.props.t("video converter slider2 jpg"), this.props.t("video converter slider3 jpg"), this.props.t("video converter slider4 jpg"), this.props.t("video converter slider5 jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper" textDownload={this.props.t("download now")}/>
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
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD / Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")} </Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel HD Graphics, NVIDIA GeForce, AMD Radeon Graphics")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Windows Media Player")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("11 or higher for WMV video playback")}</Text>
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
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Quad core (Intel Core i5 series or AMD equivalent)")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("4 GB or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel HD Graphics, NVIDIA GeForce recommended for hardware acceleration")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                    </div>
                  </div>
                </div>
                <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>* {this.props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
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
export default withI18next({ ns: "common" })(avsFreeVideoConverter);