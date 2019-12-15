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

import BackgroundHeaderImage from "../images/video-editor/background_main.png";
import HeaderImage from '../images/avs-video-remaker/en_avs_video_remaker-min.png';
import HeaderImageMobile from '../images/avs-video-remaker/en_avs_video_remaker-min.png';

import screen1 from '../images/avs-video-remaker/vr_edit_video_files-min.png';
import screen2 from '../images/avs-video-remaker/vr_record_video-min.png';
import screen3 from '../images/avs-video-remaker/vr_disc_menu-min.png';

import screen4 from '../images/avs-video-remaker/slider1-min.png';
import screen5 from '../images/avs-video-remaker/slider2-min.png';


class avsVideoRemaker extends React.PureComponent {

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
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video ReMaker")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Mighty production software for capturing and editing videos, and creating DVD and Blu-ray content</Text>
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
                headerText="Edit video files without reconversion"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Cut, delete unwanted parts, change scene sequence in all popular video formats</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Save videos without changing the original format</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Edit AVCHD, MOD, MTS/M2TS, TOD, etc. video files recorded with camcorders and video cameras</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                image={screen2}
                headerText="Capture video"   
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras to your PC, edit files and create home video DVDs</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Capture video from Web cameras and DV cameras</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Choose the desired format of captured file (FLV, WMV, AVI), Sound source, Mouse cursor effects</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use Screen Capture function to create How-to videos or tutorials</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              image={screen3}
              headerText="Create DVD and Blu-ray Menus"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Split video into chapters, select between a number of menu templates</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Choose auto sets and let our program split the file independently</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Burn video files on to DVD- or Blu-ray discs</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2" fontWeight={600} color="#000000" fontSize={32} align="center">AVS Video Remaker 6.3</Text>
          <ScreenshotsCarousel 
            slides={[screen1, screen2, screen3, screen4, screen5]}
            slidesPopup={[screen1, screen2, screen3, screen4, screen5]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5", "slideCarousel6"]}
            
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
            <div id="downloadButton" className="buttonWrapper">
              <Button className="desktopButton" href="/" color="#fff" padding="16px 40px" textTransform="uppercase" backgroundColor="blue">download now</Button>
              <Link className="scrollLink" to="headerContentWrapper" spy={true} smooth={true} offset={0} duration={500}>
                  <Button as="div" className="mainButton" color="#fff" padding="16px 40px" textTransform="uppercase" backgroundColor="blue">GET $5 COUPON CODE</Button>
              </Link>
            </div>
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
export default withI18next({ ns: "common" })(avsVideoRemaker);
