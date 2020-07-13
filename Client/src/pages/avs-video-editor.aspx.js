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

import AvatarJames from '../images/avs-video-editor/james_k.png';
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
        title="AVS Video Editor - easy video editing software for Windows."
        metaDescription="AVS Video Editor is an easy video editing program. Create, edit video, capture video/ make a video slideshow/ cut, merge, trim video files/ save to any format."
        metaKeywords="video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow"
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Trim, cut, split, merge, rotate, mix videos. 300+ innovative effects, transitions, overlays</Text>
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
            
            <ImageGQL className="headerImage" imageName="en_avs_video_editor_main.png" style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName="en_avs_video_editor_main.png" style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">Overview</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">Reviews</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">Screentour</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
              <Text color="#666666" align="center">Download</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName="video-editor-slider3.jpg"
                headerText="Work with all key formats and HD videos"    
            >
              <Text className="ListItem">Edit and save video in all popular formats (MP4, DVD, AVI, MOV, VOB, WMV, MKV, FLV, WEBM, etc.)</Text>
              <Text className="ListItem">Process video in any resolution HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</Text>
              <Text className="ListItem">Open, modify and save video using popular codeсs H.264, H.265 (reading only), MPEG-4, etc.</Text>
              <Text className="ListItem">Speed up HD video editing due to the integrated video cache technology and hardware acceleration for video decoding by means of video cards (GPU)</Text>
              <Text className="ListItem">Use new automatic presets for powerful computers</Text>
              <Text as="a" target="_blank" href="https://onlinehelp.avs4you.com/avs-video-editor/features/savingvideos/supportedformats.aspx" className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>See a full list of all supported formats</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName="video-editor-slider4.jpg"
                headerText="Record your video"   
            >
              <Text className="ListItem">Transfer video from DV/HDV cameras, webcams or VHS cameras</Text>
              <Text className="ListItem">Record media files from your PC screen</Text>
              <Text className="ListItem">Give a new life to old VHS tapes</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName="video-editor-slider5.jpg"
              headerText="Make your video look professional"    
            >
              <Text className="ListItem">Cut out a particular scene or remove shaky and unnecessary parts</Text>
              <Text className="ListItem">Split videos regardless of both the video size and formats</Text>
              <Text className="ListItem">Join as many video files as you want</Text>
              <Text className="ListItem">Fix up any white balancing issues and color mismatches with color tuning</Text>
              <Text className="ListItem">Fix a shaky footage with video stabilization</Text>
              <Text className="ListItem">Use chroma key effect to change your background</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName="video-editor-slider2.jpg"
                headerText="Make vivid slideshows"   
            >
              <Text className="ListItem">Import images, add your voice or favourite audio tracks</Text>
              <Text className="ListItem">Insert captions, visual effects and transitions</Text>
              <Text className="ListItem">Create personal and corporate slideshows easily</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                imageName="video-editor-slider6.jpg"
                headerText="Share your video"    
            >
              <Text className="ListItem">Save the newly-made video in the desired format on your computer</Text>
              <Text className="ListItem">Adjust video for your iOS and Android devices</Text>
              <Text className="ListItem">Create video for YouTube, Video and other video hosting websites</Text>
              <Text className="ListItem">Publish your creative work in social networks</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "James K.",
                    avatar: AvatarJames,
                    revHeader: "Our customers say",
                    revText: "For the price, this is certainly great value for money. I mostly use AVS Video Editor and Video Converter and I find them to be both excellent, easy to use with quality results."
                  },
                  {
                    name: "Linda K.",
                    avatar: AvatarLinda,
                    revHeader: "Our customers say",
                    revText: "I love all the programs. I use the registry cleaner weekly and the video converter almost daily. You can not get a better deal for just the registry cleaner alone. The audio and video converter programs are easy to work."
                  },
                  {
                    name: "Marc N.",
                    avatar: AvatarMarc,
                    revHeader: "Our customers say",
                    revText: "I've used several AVS products for years and they have never fallen short on what I needed them to do."
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Video Editor 9.1</Text>
          <ScreenshotsCarousel
            imageNames={["video-editor-slider1.jpg", "video-editor-slider2.jpg", "video-editor-slider2-replace.png"]}
            imageNamesPopup={["video-editor-slider1.jpg", "video-editor-slider2.jpg", "video-editor-slider2-replace.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoEditor.platforms}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" to="headerContentWrapper"/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <Link to="/license-agreement.aspx">our End User License Agreement</Link></Text>
            </div>
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
                <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>Technical specification</Text>
                <div className="specificationGrid">
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>MINIMUM SYSTEM REQUIREMENTS</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Processor:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">AMD / Intel Core 2 Duo compatible at 3 GHz or higher</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">RAM:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">2 GB or higher </Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Sound:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows compatible sound card</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Display:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">32-bit color depth</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">CD recorder:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">32-bit color depth</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">DVD recorder:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">for importing from DVD and creating Video DVD</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Video capture device:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">required for capturing</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Windows Media Player:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">11 or higher for WMV video playback</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">DirectX:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Microsoft DirectX 9.0c or later</Text>
                    </div>
                  </div>
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>RECOMMENDED SYSTEM REQUIREMENTS</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Operating system:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Processor:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">AMD / Intel Core 2 Quad compatible at 2.4 GHz or higher</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">RAM:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">2 GB or higher</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Video:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7 compatible video card</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Sound:</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7 compatible sound card</Text>
                    </div>
                  </div>
                </div>
                <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*Administrative permissions for program installation and Internet connection for activation</Text>
                <div className="attentionBlock">
                  <Text fontSize={16} fontWeight={500}>Please note that AVS4YOU® programs do not allow you to copy protected material. You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner.</Text>
                </div>
            </PageContentWrapper>
          </div>
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoEditor);
