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
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';

import AvatarJohn from '../images/avs-audio-converter/john.png';
import AvatarJacky from '../images/avs-audio-converter/jacky.png';





class avsAudioConverter extends React.PureComponent {

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
                <Text color="#ffffff" align="center" className="headerDescription" as="h2" fontSize={24}>{this.props.t("Convert audio between popular formats Apply effects, customize output parameters, use batch mode")}</Text>
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
                asType={this.props.t("h2")}
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
            <Button className="trustButton" style={{margin: "auto", display: "table"}}
                    href="https://www.trustpilot.com/review/www.avs4you.com" 
                    color="#fff">
                    {this.props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
            </Button>
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Audio Converter 10.1</Text>
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
                <Text as={this.props.t("h3")} className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{this.props.t("Technical specification")}</Text>
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