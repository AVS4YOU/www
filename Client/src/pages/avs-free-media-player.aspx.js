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
import {MediaPlayer} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';


class avsFreeMediaPlayer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }

  getDevice(device) {
    this.setState({ device: device });
  }

  render() {

    return (
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS Free Media Player is the best media player for Windows."
        metaDescription="Open all popular video and audio formats with AVS Free Media player. Download AVS Free Media Player from the official site. All key media formats supported."
        metaKeywords="Free media player, avs4you video player,Video player software, media player, audio player, video player"
      >
        <ProductPagesWrapper imageName="purple_background_main.jpg">
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="purple_background_main.png" style={{ position: "absolute" }} />
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">Free
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("Free AVS Media Player")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Watch video, play audio and view your pictures with Free AVS Media Player.</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div>
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="media_player_header.png" style={{ maxWidth: "1564px" }} alt="header-image" />
            <ImageGQL className="headerImage mobile" imageName="media_player_header.png" style={{ maxWidth: "1564px" }} alt="header-image-mobile" />
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
              imageName="media_player_slide2.png"
              headerText="Watch video"
            >
              <Text className="ListItem">Play videos with almost any file extension such as AVI, MPEG, WMV, MP4, MKV, FLV, OGG, etc.</Text>
              <Text className="ListItem">Watch videos with subtitles.</Text>
              <Text className="ListItem">Take snapshots if necessary.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="media_player_slide3.png"
              headerText="Play audio"
            >
              <Text className="ListItem">Add audio tracks of any format such as WAV, MP3, ALAC, FLAC, M4A, OGG, AAC, AMR, etc.</Text>
              <Text className="ListItem">Create personal playlists to any taste and style.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="media_player_slide4.png"
              headerText="View pictures"
            >
              <Text className="ListItem">Select images in PNG, JPEG, GIF, etc. and view them as a slideshow.</Text>
              <Text className="ListItem">Make use of repeat or shuffle modes.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="media_player_slide5.png"
              headerText="Enjoy sound-around effect"
            >
              <Text className="ListItem">Free AVS Media Player supports of 3.1, 5.1 and 7.1 speaker configurations.</Text>
              <Text className="ListItem">Switch on the Surround Effect and get the feeling as if you are in a movie theater.</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">Free AVS Media Player</Text>
          <ScreenshotsCarousel
            imageNames={["media_player_slide1.png", "media_player_slide2.png", "media_player_slide3.png", "media_player_slide4.png", "media_player_slide5.png"]}
            imageNamesPopup={["media_player_slide1.png", "media_player_formats2x.png", "media_player_audio_formats2x.png", "media_player_slideshow2x.png", "media_player_surround2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}

          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.platforms}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" to="headerContentWrapper" />
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
export default withI18next({ ns: "common" })(avsFreeMediaPlayer);
