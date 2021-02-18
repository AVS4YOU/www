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

import AvatarChenWang from '../images/common/review-carousel/chen_wang.png';
import AvatarLinda from '../images/avs-video-editor/linda_k.png';
import AvatarMarc from '../images/avs-video-editor/marc_n.png';


class avsVideoEditor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }

  getDevice(device){
    this.setState({ device: device });
  }

render(){

    return (
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS Video Editor - easy video editing software for Windows")}
        metaDescription={this.props.t("AVS Video Editor is an easy video editing program Create, edit video, capture video make a video slideshow cut, merge, trim video files save to any format")}
        metaKeywords={this.props.t("video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow")}
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Trim, cut, split, merge, rotate, mix videos 300+ innovative effects, transitions, overlays")}</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            
            <ImageGQL className="headerImage" imageName={this.props.t("en avs video editor main png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={this.props.t("en avs video editor main png")} style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
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

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName={this.props.t("video editor slider3 jpg")}
                headerText={this.props.t("Work with all key formats and HD videos")}    
            >
              <Text className="ListItem">{this.props.t("Edit and save video in all popular formats MP4, DVD, AVI, MOV, VOB, WMV, MKV, FLV, WEBM, etc")}</Text>
              <Text className="ListItem">{this.props.t("Process video in any resolution HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K")}</Text>
              <Text className="ListItem">{this.props.t("Open, modify and save video using popular codeсs H 264, H 265  reading only , MPEG-4, etc")}</Text>
              <Text className="ListItem">{this.props.t("Speed up HD video editing due to the integrated video cache technology and hardware acceleration for video decoding by means of video cards GPU")}</Text>
              <Text className="ListItem">{this.props.t("Use new automatic presets for powerful computers")}</Text>
              <a target="_blank" rel="noreferrer noopener" href={this.props.t("avs-video-editor-onlinehelp-avs4you")}>
                <Text className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>{this.props.t("See a full list of all supported formats")}</Text>
              </a>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("video editor slider4 jpg")}
                headerText={this.props.t("Record your video")}   
            >
              <Text className="ListItem">{this.props.t("Transfer video from DV/HDV cameras, webcams or VHS cameras")}</Text>
              <Text className="ListItem">{this.props.t("Record media files from your PC screen")}</Text>
              <Text className="ListItem">{this.props.t("Give a new life to old VHS tapes")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName={this.props.t("video editor slider5 jpg")}
              headerText={this.props.t("Make your video look professional")}    
            >
              <Text className="ListItem">{this.props.t("Cut out a particular scene or remove shaky and unnecessary parts")}</Text>
              <Text className="ListItem">{this.props.t("Split videos regardless of both the video size and formats")}</Text>
              <Text className="ListItem">{this.props.t("Join as many video files as you want")}</Text>
              <Text className="ListItem">{this.props.t("Fix up any white balancing issues and color mismatches with color tuning")}</Text>
              <Text className="ListItem">{this.props.t("Fix a shaky footage with video stabilization")}</Text>
              <Text className="ListItem">{this.props.t("Use chroma key effect to change your background")}</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("video editor slider2 jpg")}
                headerText={this.props.t("Make vivid slideshows")}   
            >
              <Text className="ListItem">{this.props.t("Import images, add your voice or favourite audio tracks")}</Text>
              <Text className="ListItem">{this.props.t("Insert captions, visual effects and transitions")}</Text>
              <Text className="ListItem">{this.props.t("Create personal and corporate slideshows easily")}</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                imageName={this.props.t("video editor slider6 jpg")}
                headerText={this.props.t("Share your video")}    
            >
              <Text className="ListItem">{this.props.t("Save the newly-made video in the desired format on your computer")}</Text>
              <Text className="ListItem">{this.props.t("Adjust video for your iOS and Android devices")}</Text>
              <Text className="ListItem">{this.props.t("Create video for YouTube, Video and other video hosting websites")}</Text>
              <Text className="ListItem">{this.props.t("Publish your creative work in social networks")}</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Chen Wang",
                    avatar: AvatarChenWang,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("For the price this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent easy to use with quality results")
                  },
                  {
                    name: "Linda K.",
                    avatar: AvatarLinda,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I love all the programs I use the registry cleaner weekly and the video converter almost daily You can not get a better deal for just the registry cleaner alone The audio and video converter programs are easy to work")
                  },
                  {
                    name: "Marc N.",
                    avatar: AvatarMarc,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("Ive used several AVS products for years and they have never fallen short on what I needed them to do")
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Video Editor 9.4</Text>
          <ScreenshotsCarousel
            imageNames={[this.props.t("video editor slider1 jpg"), this.props.t("video editor slider2 jpg"), this.props.t("video editor slider3 jpg"), this.props.t("video editor slider4 jpg"), this.props.t("video editor slider5 jpg"), this.props.t("video editor slider6 jpg")]}
            imageNamesPopup={[this.props.t("video editor slider1 jpg"), this.props.t("video editor slider2 jpg"), this.props.t("video editor slider3 jpg"), this.props.t("video editor slider4 jpg"), this.props.t("video editor slider5 jpg"), this.props.t("video editor slider6 jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" to="headerContentWrapper" textDownload={this.props.t("download now")}/>
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
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("CD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video capture device")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("required for capturing")}</Text>
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
export default withI18next({ ns: "common" })(avsVideoEditor);