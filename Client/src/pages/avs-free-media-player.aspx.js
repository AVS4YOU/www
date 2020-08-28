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
import styled from 'styled-components';

const TableWrapper = styled.table`
  margin:auto;

  span {
    left: -47px;
  }

  @media (max-width: 750px) {
    span {
      left: auto;
    }
  }
`;


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
                
                <TableWrapper>
                  <Text as="span" className="flagBackground header">Free
                    <div></div>
                  </Text>
                  <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Media Player")}</Text>
                </TableWrapper>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Watch video, play audio and view your pictures with Free AVS Media Player")}</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://new.avs4you.com/downloads/AVSMediaPlayer.exe"
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
              imageName="media_player_slide2.jpg"
              headerText={this.props.t("Watch video")}
            >
              <Text className="ListItem">{this.props.t("Play videos with almost any file extension such as AVI, MPEG, WMV, MP4, MKV, FLV, OGG, etc")}</Text>
              <Text className="ListItem">{this.props.t("Watch videos with subtitles")}</Text>
              <Text className="ListItem">{this.props.t("Take snapshots if necessary")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="media_player_slide3.jpg"
              headerText={this.props.t("Play audio")}
            >
              <Text className="ListItem">{this.props.t("Add audio tracks of any format such as WAV, MP3, ALAC, FLAC, M4A, OGG, AAC, AMR, etc")}</Text>
              <Text className="ListItem">{this.props.t("Create personal playlists to any taste and style")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="media_player_slide4.jpg"
              headerText={this.props.t("View pictures")}
            >
              <Text className="ListItem">{this.props.t("Select images in PNG, JPEG, GIF, etc and view them as a slideshow")}</Text>
              <Text className="ListItem">{this.props.t("Make use of repeat or shuffle modes")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="media_player_slide5.jpg"
              headerText={this.props.t("Enjoy sound-around effect")}
            >
              <Text className="ListItem">{this.props.t("Free AVS Media Player supports of 31, 51 and 71 speaker configurations")}</Text>
              <Text className="ListItem">{this.props.t("Switch on the Surround Effect and get the feeling as if you are in a movie theater")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">{this.props.t("Free AVS Media Player 5.2")}</Text>
          <ScreenshotsCarousel
            imageNames={["media_player_slide1.jpg", "media_player_slide2.jpg", "media_player_slide3.jpg", "media_player_slide4.jpg", "media_player_slide5.jpg"]}
            imageNamesPopup={["media_player_slide1.jpg", "media_player_slide2.jpg", "media_player_slide3.jpg", "media_player_slide4.jpg", "media_player_slide5.jpg"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}

          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{MediaPlayer.platforms}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://new.avs4you.com/downloads/AVSMediaPlayer.exe" to="headerContentWrapper" />
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
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Display")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
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
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Microsoft DirectX 9.0c or later")}</Text>
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
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD / Intel Core 2 Quad compatible at 2.4 GHz or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8.x/Windows 7 compatible video card")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8.x/Windows 7 compatible sound card")}</Text>
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
export default withI18next({ ns: "common" })(avsFreeMediaPlayer);
