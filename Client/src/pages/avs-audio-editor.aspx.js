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
import {AudioEditor} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';

import AvatarDavid from '../images/avs-audio-editor/david.png';
import AvatarFrank from '../images/avs-audio-editor/frank.png';
import AvatarJohn from '../images/avs-audio-editor/john.png';

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
        title="AVS Audio Editor – record audio, cut, mix audio files, delete audio parts, edit mp3"
        metaDescription="Record audio/ cut, split, mix audio tracks, delete audio parts/ apply audio effects and filters/ save audio to MP3 WAV WMA M4A FLAC."
        metaKeywords="avs audio editor, avs music editor, avs audio  creator, audio editor, audio editing software, mp3 editor, music editor, download  music editor, audio editor download, audio edit software, edit mp3, movie maker edit audio, edit audio clips, edit audio windows 7, cool edit audio, record audio,  record voice, mix audio, mix audio software, mix music, cut audio cd, cut audio  clips, cut audio from video, create audiobook, create audio, create audio file,  create audio from video, edit music, edit audio, edit song, edit mp3 songs"
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="pink_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Audio Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Create outstanding tracks for any purpose with our easy audio editing app for Windows</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="audio_editor_en_header.png" style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName="audio_editor_en_header.png" style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
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
                imageName="audio_editor_edit_all_key.png"
                headerText="Edit all key audio formats"    
            >
              <Text className="ListItem">Edit all popular formats MP3, FLAC, WAV, M4A, WMA, AAC, MP2, AMR, OGG, etc.</Text>
              <Text className="ListItem">Cut, join, trim, delete parts, split audio files</Text>
              <Text className="ListItem">Mix audio and blend several audio tracks together</Text>
              <Text className="ListItem">Select between 20 built-in effects and filters including delay, flanger, chorus, reverb, reverse, echo and more</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName="audio_editor_record_audio.png"
                headerText="Record audio from any inputs"   
            >
              <Text className="ListItem">Record audio data from various inputs like microphone, vinyl records, and other input lines on a sound card</Text>
              <Text className="ListItem">Extract and edit audio from your video files</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName="audio_editor_slider5.png"
              headerText="Master your sound for the higher quality"    
            >
              <Text className="ListItem">Remove noise and irritating sounds like roaring, hissing, crackling, etc.</Text>
              <Text className="ListItem">Change sound bitrate to any desired level</Text>
              <Text className="ListItem">Use an equalizer to adjust volume in a desired way</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={false}
              imageName="audio_editor_slider6.png"
              headerText="Extend your experience with additional features"    
            >
              <Text className="ListItem">Turn written text into a natural sounding voice with Text-to-speech function</Text>
              <Text className="ListItem">Create ringtones for iPhones and other smartphones</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "David Lehrman",
                    avatar: AvatarDavid,
                    revHeader: "Our customers say",
                    revText: "I use Audio Editor to boost the overall mix volume of my work so it matches studio mastered recordings. I love this program. This Suite is the best money I ever spent."
                  },
                  {
                    name: "Frank Lindt",
                    avatar: AvatarFrank,
                    revHeader: "Our customers say",
                    revText: "I trust AVS Tools and AVS Team ! I love and respect these tools ! Very easy to handle this software ! No need too much practical experiences ! Creative mind and common sense. that is enough to finish new audio/video ventures !"
                  },
                  {
                    name: "John Piquette",
                    avatar: AvatarJohn,
                    revHeader: "Our customers say",
                    revText: "I have dealt with and used AVS programs for more then three years. They have an incredible assortment of programs. The ones I use are tops in those areas and with a ONE package forever pricing, it cannot be beat."
                  }
                ]
              }
            />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Audio Editor 8.5</Text>
          <ScreenshotsCarousel 
            imageNames={["audio_editor_slider1.png", "audio_editor_slider2.png", "audio_editor_slider3.png", "audio_editor_slider4.png", "audio_editor_slider5.png", "audio_editor_slider6.png" ]}
            imageNamesPopup={["audio_editor_slider1@2x.png", "audio_editor_slider2@2x.png", "audio_editor_slider3@2x.png", "audio_editor_slider4@2x.png", "audio_editor_slider5@2x.png", "audio_editor_slider6@2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5", "slideCarousel6"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioEditor.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioEditor.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{AudioEditor.platforms}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" to="headerContentWrapper"/>
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
export default withI18next({ ns: "common" })(avsAudioEditor);
