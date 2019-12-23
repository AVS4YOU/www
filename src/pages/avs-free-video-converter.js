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
import HeaderImage from '../images/avs-free-video-converter/en_avs_video_converter.png';
import HeaderImageMobile from '../images/avs-free-video-converter/en_avs_video_converter-mobile.png';

import screen1 from '../images/avs-free-video-converter/vc_convert_all_key2.png';
import screen2 from '../images/avs-free-video-converter/vc_convert_video_easily2.png';
import screen3 from '../images/avs-free-video-converter/vc_convert_a_large_number.png';
import screen4 from '../images/avs-free-video-converter/vc_edit_your_videos.png';
import screen5 from '../images/avs-free-video-converter/vc_сonvert_and_share.png';

import slideCarousel1 from '../images/avs-free-video-converter/slider1.png';
import slideCarousel2 from '../images/avs-free-video-converter/slider2.png';
import slideCarousel3 from '../images/avs-free-video-converter/slider3.png';
import slideCarousel4 from '../images/avs-free-video-converter/slider4.png';
import slideCarousel5 from '../images/avs-free-video-converter/slider5.png';
import slideCarousel6 from '../images/avs-free-video-converter/slider6.png';

import slidePopupCarousel1 from '../images/avs-free-video-converter/slider_popup1.png';
import slidePopupCarousel2 from '../images/avs-free-video-converter/slider_popup2.png';
import slidePopupCarousel3 from '../images/avs-free-video-converter/slider_popup3.png';
import slidePopupCarousel4 from '../images/avs-free-video-converter/slider_popup4.png';
import slidePopupCarousel5 from '../images/avs-free-video-converter/slider_popup5.png';
import slidePopupCarousel6 from '../images/avs-free-video-converter/slider_popup6.png';

class avsFreeVideoConverter extends React.PureComponent {

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
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Convert to/ from video formats: MP4, DVD, AVI, WMV,MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc. fast and easily!</Text>
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
                headerText="Сonvert all key video formats"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Encode HD Video, AVI, MP4, DVD, VOB, WMV, Blu-ray, MPEG, MKV, FLV, H.264 codec, H.265 (reading only) and etc.</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Convert HD-camera recordings AVCHD, MPEG-2 HD, AVI HD, TOD/MOD, M2TS/MTS, etc.</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Convert HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K video using ultra new presets and enjoy high quality video playback</Text>
              <Text as="a" href="#" className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>See a full list of all supported formats</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                image={screen2}
                headerText="Convert video easily and fast"   
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Convert videos in one click with improved settings for powerful computers</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use hardware Intel® Media decoder with Intel® Quick Sync Video technology for H.264/AVC и VC-1 codecs. It speeds up preview and conversion processes significantly (only for Intel CPU with integrated Intel Graphics)</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use software Intel® Media decoder for H.264/AVC and VC-1 codecs. This option is helpful for the users of AMD and old Intel processors</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use Auto mode to choose the optimal decoder among common, hardware or software Intel® Media</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              image={screen3}
              headerText="Convert a large number of files at once"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}><span>Command Line Mode</span>Automate routine work using ready conversion templates without clicking the program buttons manually</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}><span>Batch Mode</span>Save your time spent on video conversion by using a batch mode which allows you to convert a large number of video files at once with easy-to-use configurations</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                image={screen4}
                headerText="Edit your videos before conversion*"   
            >
              <Text className="ListItem" color="#555555" fontWeight={500}>Split your videos into parts, by chapters, size and cut unnecessary scenes</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Change the aspect ratio of your video</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Use basic video editing effects to make your videos more breathtaking</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Convert video files with subtitles</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}>Export audio and images from your video</Text>
              <Text className="ListItem footnote" color="#555555" fontWeight={500}>*This feature is available in a full version</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                image={screen5}
                headerText="Convert and share videos on Web"    
            >
              <Text className="ListItem" color="#555555" fontWeight={500}><span>Save video to any format or modern gadgets</span>Apple iPhone XS/XR/X/8/7, Apple iPad Pro, 2018, 2017, iPad Air 2 etc.; Samsung Galaxy S9/S8/S7, Galaxy Note 9/8/5, Galaxy Tab S4/S3, Samsung UHD/SUHD TV, Sony PlayStation 4 Pro (PS4 Pro), Sony PlayStation Vita (PS Vita) Microsoft Xbox One, Xbox One S, Xbox One X, Sony Xperia XZ3/XZ2/XZ1, XZ2/XZ1 Compact</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}><span>Create DVD/Blu-ray discs</span>Convert from/to Blu-ray or DVD formats. Cut, apply effects, add colorful DVD/Blu-ray menus. Split your movie into chapters and burn DVD/Blu-ray discs</Text>
              <Text className="ListItem" color="#555555" fontWeight={500}><span>Convert videos for popular social platforms</span>Use ready presets with most appropriate settings to convert video for YouTube, Facebook, Vimeo, DailyMotion, Telly, Flickr, Dropbox</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2" fontWeight={600} color="#000000" fontSize={32} align="center">AVS Video Converter 12</Text>
          <ScreenshotsCarousel 
            slides={[slideCarousel1, slideCarousel2, slideCarousel3, slideCarousel4, slideCarousel5, slideCarousel6]}
            slidesPopup={[slidePopupCarousel1, slidePopupCarousel2, slidePopupCarousel3, slidePopupCarousel4, slidePopupCarousel5, slidePopupCarousel6]}
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
export default withI18next({ ns: "common" })(avsFreeVideoConverter);
