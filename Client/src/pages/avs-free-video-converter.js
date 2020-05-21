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

import AvatarGayle from '../images/avs-free-video-converter/gayle_hibbert.png';
import AvatarTerrance from '../images/avs-free-video-converter/terrance_jenkins.png';
import AvatarLawrence from '../images/avs-free-video-converter/lawrence_thompson.png';

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
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="Convert any video with AVS Free Video Converter for Windows"
        metaDescription="AVS Free Video Converter converts video  files to all popular video formats MP4, DVD, MPEG, MOV, FLV and others absolutely free. Download Free AVS Video Converter"
        metaKeywords="free video converter, video to mp3, video converter, video download converter, video converter to mp4, avs video converter, avs4you, avs, avs converter, avs4u, video converter tool, video converter software, mp4 to mp3 converter, mp4 to avi converter, mp4 to 3gp converter, mp4 video converter, convert dvd, convert avi, convert mp4, convert wmv, convert mov, video file converter, dvd converter, convert mp4 to dvd, avi converter, video converting, video conversion"
      >
        <ProductPagesWrapper imageName="blue_background_main.jpg">
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.png" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">Free
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Convert to/ from video formats: MP4, DVD, AVI, WMV,MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc. fast and easily!</Text>
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
            <ImageGQL className="headerImage" imageName="video_converter_en_avs_video_converter.png" style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName="video_converter_header_en_mobile.png" style={{maxWidth: "366px"}} alt="header-image-mobile"/>
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

          <PageContentWrapper className="videoConverter">
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName="video_converter_convert_all_key2.jpg"
                headerText="Сonvert all key video formats"    
            >
              <Text className="ListItem">Encode HD Video, AVI, MP4, DVD, VOB, WMV, Blu-ray, MPEG, MKV, FLV, H.264 codec, H.265 (reading only) and etc.</Text>
              <Text className="ListItem">Convert HD-camera recordings AVCHD, MPEG-2 HD, AVI HD, TOD/MOD, M2TS/MTS, etc.</Text>
              <Text className="ListItem">Convert HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K video using ultra new presets and enjoy high quality video playback</Text>
              <Text as="a" href="https://onlinehelp.avs4you.com/avs-video-converter/features/converting/convertingtoformat/supportedformats.aspx" target="_blank" className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>See a full list of all supported formats</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName="video_converter_convert_video_easily2.jpg"
                headerText="Convert video easily and fast"   
            >
              <Text className="ListItem">Convert videos in one click with improved settings for powerful computers</Text>
              <Text className="ListItem">Use hardware Intel® Media decoder with Intel® Quick Sync Video technology for H.264/AVC и VC-1 codecs. It speeds up preview and conversion processes significantly (only for Intel CPU with integrated Intel Graphics)</Text>
              <Text className="ListItem">Use software Intel® Media decoder for H.264/AVC and VC-1 codecs. This option is helpful for the users of AMD and old Intel processors</Text>
              <Text className="ListItem">Use Auto mode to choose the optimal decoder among common, hardware or software Intel® Media</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName="vc_convert_a_large_number.jpg"
              headerText="Convert a large number of files at once"    
            >
              <Text className="ListItem"><span>Command Line Mode</span>Automate routine work using ready conversion templates without clicking the program buttons manually</Text>
              <Text className="ListItem"><span>Batch Mode</span>Save your time spent on video conversion by using a batch mode which allows you to convert a large number of video files at once with easy-to-use configurations</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false} 
                imageName="video_converter_edit_your_videos.jpg"
                headerText="Edit your videos before conversion*"   
            >
              <Text className="ListItem">Split your videos into parts, by chapters, size and cut unnecessary scenes</Text>
              <Text className="ListItem">Change the aspect ratio of your video</Text>
              <Text className="ListItem">Use basic video editing effects to make your videos more breathtaking</Text>
              <Text className="ListItem">Convert video files with subtitles</Text>
              <Text className="ListItem">Export audio and images from your video</Text>
              <Text className="ListItem footnote" fontWeight={500}>*This feature is available in a full version</Text>
            </ContentRowItem>

            <ContentRowItem
                imgLeft={true}
                imageName="video_converter_slider_popup3.jpg"
                headerText="Convert and share videos on Web"
            >
              <Text className="ListItem"><span>Save video to any format or modern gadgets</span>Apple iPhone XS/XR/X/8/7, Apple iPad Pro, 2018, 2017, iPad Air 2 etc.; Samsung Galaxy S9/S8/S7, Galaxy Note 9/8/5, Galaxy Tab S4/S3, Samsung UHD/SUHD TV, Sony PlayStation 4 Pro (PS4 Pro), Sony PlayStation Vita (PS Vita) Microsoft Xbox One, Xbox One S, Xbox One X, Sony Xperia XZ3/XZ2/XZ1, XZ2/XZ1 Compact</Text>
              <Text className="ListItem"><span>Create DVD/Blu-ray discs</span>Convert from/to Blu-ray or DVD formats. Cut, apply effects, add colorful DVD/Blu-ray menus. Split your movie into chapters and burn DVD/Blu-ray discs</Text>
              <Text className="ListItem"><span>Convert videos for popular social platforms</span>Use ready presets with most appropriate settings to convert video for YouTube, Facebook, Vimeo, DailyMotion, Telly, Flickr, Dropbox</Text>
            </ContentRowItem>
          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Gayle Hibbert",
                    avatar: AvatarGayle,
                    revHeader: "Our customers say",
                    revText: "For the price, this is certainly great value for money. I mostly use AVS Video Editor and Video Converter and I find them to be both excellent, easy to use with quality results. Would certainly recommend to anyone who wants good video software at a reasonable price."
                  },
                  {
                    name: "Terrance Jenkins",
                    avatar: AvatarTerrance,
                    revHeader: "Our customers say",
                    revText: "The product is super easy to download and use. Anyone can do this in just minutes. The company is always supportive. I highly recommend"
                  },
                  {
                    name: "Lawrence Thompson",
                    avatar: AvatarLawrence,
                    revHeader: "Our customers say",
                    revText: "I have been using AVS for several years and can say for sure that it is very convenient, user friendly and functional"
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Video Converter 12</Text>
          <ScreenshotsCarousel 
            maxWidth={734}
            maxWidthPopup={734}
            imageNames={["video_converter_slider1.jpg", "video_converter_slider2.jpg", "video_converter_slider3.jpg", "video_converter_slider4.jpg", "video_converter_slider5.jpg", "video_converter_slider6.jpg"]}
            imageNamesPopup={["video_converter_slider1.jpg", "video_converter_slider2.jpg", "video_converter_slider3.jpg", "video_converter_slider4.jpg", "video_converter_slider5.jpg", "video_converter_slider6.jpg"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5", "slideCarousel6"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.platforms}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper"/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <Link to="/license-agreement">our End User License Agreement</Link></Text>
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
