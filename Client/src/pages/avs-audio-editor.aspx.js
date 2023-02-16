import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ReviewScreenNew from '../components/review-screen-new';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';
import ImageGQL from '../components/image-gql';
import {AudioEditor} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';

import AvatarDavid from '../images/avs-audio-editor/david.png';
import AvatarFrank from '../images/avs-audio-editor/frank.png';
import AvatarJohn from '../images/avs-audio-editor/john.png';

const lang = ['de','es','fr','it','jp','ru']

const isEngLang = (currentLang) => {
    let isEngLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isEngLang = true;
    }

    return isEngLang;
}

class avsAudioEditor extends React.PureComponent {

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
        title={this.props.t("AVS Audio Editor record audio, cut, mix audio files, delete audio parts, edit mp3")}
        metaDescription={this.props.t("Record audio cut, split, mix audio tracks, delete audio parts apply audio effects and filters save audio to MP3 WAV WMA M4A FLAC")}
        metaKeywords={this.props.t("avs audio editor, avs music editor, avs audio  creator, audio editor, audio editing software, mp3 editor, music editor, download  music editor, audio editor download, audio edit software, edit mp3, movie maker edit audio, edit audio clips, edit audio windows 7, cool edit audio, record audio,  record voice, mix audio, mix audio software, mix music, cut audio cd, cut audio  clips, cut audio from video, create audiobook, create audio, create audio file,  create audio from video, edit music, edit audio, edit song, edit mp3 songs")}
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="pink_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >           
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Audio Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Create outstanding tracks for any purpose with our easy audio editing app for Windows")}</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                  secondaryText="Windows 11/10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>

            <ImageGQL className="headerImage" imageName={this.props.t("audio editor en header png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={this.props.t("audio editor en header png")} style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
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
                imageName={this.props.t("audio editor edit all key jpg")} 
                headerText={this.props.t("Edit all key audio formats" )}  
            >
              <Text className="ListItem">{this.props.t("Edit all popular formats MP3, FLAC, WAV, M4A, WMA, AAC, MP2, AMR, OGG, etc")}</Text>
              <Text className="ListItem">{this.props.t("Cut, join, trim, delete parts, split audio files")}</Text>
              <Text className="ListItem">{this.props.t("Mix audio and blend several audio tracks together")}</Text>
              <Text className="ListItem">{this.props.t("Select between 20 built-in effects and filters including delay, flanger, chorus, reverb, reverse, echo and more")}</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("audio editor record audio jpg")}
                headerText={this.props.t("Record audio from any inputs")}
            >
              <Text className="ListItem">{this.props.t("Record audio data from various inputs like microphone, vinyl records, and other input lines on a sound card")}</Text>
              <Text className="ListItem">{this.props.t("Extract and edit audio from your video files")}</Text>
            </ContentRowItem>
          
            <ContentRowItem 
              imgLeft={true}
              imageName={this.props.t("audio editor slider5 jpg")}
              headerText={this.props.t("Master your sound for higher quality")}
            >
              <Text className="ListItem">{this.props.t("Remove noise and irritating sounds like roaring, hissing, crackling, etc")}</Text>
              <Text className="ListItem">{this.props.t("Change sound bitrate to any desired level")}</Text>
              <Text className="ListItem">{this.props.t("Use an equalizer to adjust volume in a desired way")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={false}
              imageName={this.props.t("audio editor slider6 jpg")}
              headerText={this.props.t("Extend your experience with additional features")}
            >
              <Text className="ListItem">{this.props.t("Turn written text into a natural sounding voice with Text-to-speech function")}</Text>
              <Text className="ListItem">{this.props.t("Create ringtones for iPhones and other smartphones")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
          {isEngLang (this.props.locale)
          ? <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "David Lehrman",
                    avatar: AvatarDavid,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I use Audio Editor to boost the overall mix volume of my work so it matches studio mastered recordings I love this program This Suite is the best money I ever spent")
                  },
                  {
                    name: "Frank Lindt",
                    avatar: AvatarFrank,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I trust AVS Tools and AVS Team I love and respect these tools Very easy to handle this software No need too much practical experiences Creative mind and common sense that is enough to finish new audio/video ventures")
                  },
                  {
                    name: "John Piquette",
                    avatar: AvatarJohn,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I have dealt with and used AVS programs for more then three years They have an incredible assortment of programs The ones I use are tops in those areas and with a ONE package forever pricing, it cannot be beat")
                  }
                ]
              }
            />
            :
            <ReviewScreenNew />
            }
            <Button className="trustButton" style={{margin: "auto", display: "table"}}
                    href="https://www.trustpilot.com/review/www.avs4you.com" 
                    color="#fff">
                    {this.props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
            </Button>
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Audio Editor 10.3</Text>
          <ScreenshotsCarousel 
            imageNames={[this.props.t("audio editor slider1 jpg"), this.props.t("audio editor slider2 jpg"), this.props.t("audio editor slider3 jpg"), this.props.t("audio editor slider4 jpg"), this.props.t("audio editor slider5 jpg"), this.props.t("audio editor slider6 jpg") ]}
            imageNamesPopup={[this.props.t("audio editor slider1 jpg"), this.props.t("audio editor slider2 jpg"), this.props.t("audio editor slider3 jpg"), this.props.t("audio editor slider4 jpg"), this.props.t("audio editor slider5 jpg"), this.props.t("audio editor slider6 jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5", "slideCarousel6"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioEditor.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioEditor.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" to="headerContentWrapper" textDownload={this.props.t("download now")}/>
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
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("1 GB or higher")}</Text>
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
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 11/Windows 10/Windows 8.x/Windows 7")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Dual core Intel Core i3 series or AMD equivalent")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
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
export default withI18next({ ns: "common" })(avsAudioEditor);