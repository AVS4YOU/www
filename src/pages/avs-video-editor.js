import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import Button from '../components/button';
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';

import BackgroundHeaderImage from "../images/video-editor/background_main.png";
import HeaderImage from '../images/video-editor/en_avs_video_editor_main.png';
import HeaderImageMobile from '../images/video-editor/slider1.png';

import slideCarousel1 from '../images/video-editor/slider1.png';
import slideCarousel2 from '../images/video-editor/slider2.png';

import slidePopupCarousel1 from '../images/video-editor/slider1-2x.png';
import slidePopupCarousel2 from '../images/video-editor/slider2-2x.png';

import screen1 from '../images/video-editor/slider3.png';
import screen2 from '../images/video-editor/slider4.png';
import screen3 from '../images/video-editor/slider5.png';
import screen4 from '../images/video-editor/slider2.png';
import screen5 from '../images/video-editor/slider6.png';


class SecondPage extends React.PureComponent {

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
      <Layout getDevice={this.getDevice} availableLocales={this.props.pageContext.availableLocales} locate={this.props.pageContext.locale} t={this.props.t}>
        <ProductPagesWrapper backgroundImage={BackgroundHeaderImage}>
          <div className="headerBackground">
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Trim, cut, split, merge, rotate, mix videos. 300+ innovative effects, transitions, overlays</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="/"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            <img className="headerImage" src={HeaderImage}/>
            <img className="headerImage mobile" src={HeaderImageMobile}/>
          </div>
          <div className="scrollLinksWrapper">
            <Link to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">Overview</Text>
            </Link>
            <Link to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">Reviews</Text>
            </Link>
            <Link to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">Screentour</Text>
            </Link>
            <Link to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
              <Text color="#666666" align="center">Download</Text>
            </Link>
          </div>

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                image={screen1}
                headerText="Work with all key formats and HD videos"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Edit and save video in all popular formats (MP4, DVD, AVI, MOV, VOB, WMV, MKV, FLV, WEBM, etc.</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Process video in any resolution HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Open, modify and save video using popular codeсs H.264, H.265 (reading only), MPEG-4, etc.</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Speed up HD video editing due to the integrated video cache technology</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use new automatic presets for powerful computers</Text>
              <Text as="a" href="#" className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>See a full list of all supported formats</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                image={screen2}
                headerText="Record your video"   
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from DV/HDV cameras, webcams or VHS cameras</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Record media files from your PC screen</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Give a new life to old VHS tapes</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              image={screen3}
              headerText="Make your video look professional"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Ccut out a particular scene or remove shaky and unnecessary parts</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Split videos regardless of both the video size and formats</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Join as many video files as you want</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Fix up any white balancing issues and color mismatches with color tuning</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Fix a shaky footage with video stabilization</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use chroma key effect to change your background</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                image={screen4}
                headerText="Make vivid slideshows"   
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Import images, add your voice or favourite audio tracks</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Insert captions, visual effects and transitions</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Create personal and corporate slideshows easily</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                image={screen5}
                headerText="Share your video"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Save the newly-made video in the desired format on your computer</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Adjust video for your iOS and Android devices</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Create video for YouTube, Video and other video hosting websites</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Publish your creative work in social networks</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2" fontWeight={600} color="#000000" fontSize={32} align="center">AVS Video Editor 9.1</Text>
          <ScreenshotsCarousel
            slides={[slideCarousel1, slideCarousel2]}
            slidesPopup={[slidePopupCarousel1, slidePopupCarousel2]}
            altText={["slideCarousel1", "slideCarousel2"]}
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
              <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">63.07 MB</Text>

              <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
              <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">10.1.2.627</Text>

              <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
              <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/Linux support)</Text>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="/" to="headerContentWrapper"/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <a href="#">our End User License Agreement</a></Text>
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
export default withI18next({ ns: "common" })(SecondPage);
