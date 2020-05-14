import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Link from '../components/link';
import Layout from "../components/layout";
import "../styles/download.less";
import ImageGQL from "../components/image-gql";
import PanelCollapse from "../components/panel-collapse";
import AdaptiveCarousel from "../components/adaptive-carousel"
import HeaderDownloadButtons from "../components/header-download-buttons";
import DownloadScrollButton from "../components/download-scroll-button";
import {VideoEditor, VideoReMaker, VideoConverter, MediaPlayer, AudioEditor, AudioConverter} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';

class Download extends React.PureComponent {

render(){

    return (
      <Layout 
        className="download" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS4YOU Download multimedia software for free!"
        metaDescription="AVS4YOU Download: safely download programs"
        metaKeywords=""
      >
        <div id="headerContentWrapper" className="header">
            <ImageGQL className="headerBackgroundImage" imageName="download-header.jpg" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
                <div className="header__body">
                    <Text as="h1" className="header__heading">Download</Text>
                    <Text as="h3" className="header__subtitle">Get all AVS4YOU® software in 1 installation package</Text>
                    <HeaderDownloadButtons 
                      t={this.props.t}
                      mainHref="https://downloads.avs4you.com/distributives/AVSInstallPack.exe"
                      backgroundColor="blue"
                      mainPadding="18px 50px"
                      margin="auto"
                      className="headerDownloadButtons"
                    />
                </div>
            </div>
        </div>
       
        <div className="screen-wrapper products-wrap">
          <div className="product-icon video"></div>
          <Text className="common__heading" as="h3">Video Software</Text>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image video-remaker">
                <div className="achievement">
                  <Text>Most popular</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">AVS Video Remaker</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {VideoReMaker.version}</Text>
                <Text as="p">Release Date: {VideoReMaker.releaseDD}/{VideoReMaker.releaseMM}/{VideoReMaker.releaseYYYY}</Text>
                <Text as="p">File Size: {VideoReMaker.size} MB</Text>
                <Text as="p">Platforms: {VideoReMaker.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image video-editor">
                <div className="achievement">
                  <Text>Most downloadable</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">AVS Video Editor</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {VideoEditor.version}</Text>
                <Text as="p">Release Date: {VideoEditor.releaseDD}/{VideoEditor.releaseMM}/{VideoEditor.releaseYYYY}</Text>
                <Text as="p">File Size: {VideoEditor.size} MB</Text>
                <Text as="p">Platforms: {VideoEditor.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image video-converter">
                <div className="achievement">
                  <Text>Most featured</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">AVS Video Converter</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {VideoConverter.version}</Text>
                <Text as="p">Release Date: {VideoConverter.releaseDD}/{VideoConverter.releaseMM}/{VideoConverter.releaseYYYY}</Text>
                <Text as="p">File Size: {VideoConverter.size} MB</Text>
                <Text as="p">Platforms: {VideoConverter.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper"/>
            </div>
            
            <div className="product-box">
              <div className="product-image media-player"></div>
              <Text className="product-name" as="h5">AVS Media Player</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {MediaPlayer.version}</Text>
                <Text as="p">Release Date: {MediaPlayer.releaseDD}/{MediaPlayer.releaseMM}/{MediaPlayer.releaseYYYY}</Text>
                <Text as="p">File Size: {MediaPlayer.size} MB</Text>
                <Text as="p">Platforms: {MediaPlayer.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" to="headerContentWrapper"/>
            </div>
          </AdaptiveCarousel>
        </div>

        <div className="screen-wrapper border-top products-wrap">
          <div className="product-icon audio"></div>
          <Text className="common__heading" as="h3">Audio Software</Text>
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image audio-editor"></div>
              <Text className="product-name" as="h5">AVS Audio Editor</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {AudioEditor.version}</Text>
                <Text as="p">Release Date: {AudioEditor.releaseDD}/{AudioEditor.releaseMM}/{AudioEditor.releaseYYYY}</Text>
                <Text as="p">File Size: {AudioEditor.size} MB</Text>
                <Text as="p">Platforms: {AudioEditor.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image audio-converter"></div>
              <div className="achievement"></div>
              <Text className="product-name" as="h5">AVS Audio Converter</Text>
              <div className="tech-params">
                <Text as="p">Current Version: {AudioConverter.version}</Text>
                <Text as="p">Release Date: {AudioConverter.releaseDD}/{AudioConverter.releaseMM}/{AudioConverter.releaseYYYY}</Text>
                <Text as="p">File Size: {AudioConverter.size} MB</Text>
                <Text as="p">Platforms: {AudioConverter.platforms}</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" to="headerContentWrapper"/>
            </div>
          </AdaptiveCarousel>
        </div>

        <div className="screen-wrapper questions-block">
          <Text className="common__heading" as="h3">Read first</Text>
          <div className="questions-wrapper">
            <PanelCollapse className="panelCollapse" panelName="How to download and install the AVS4YOU software on your PC?">
              <div className="collapseContent">
                <div className="info-block">
                  <Text>The best and the safest way to download and install our software is to do it via our official website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>.</Text>   
                </div>
                <div className="info-block">
                  <Text>Read this step-by-step guide how to download and install AVS4YOU programs using AVS Video Converter as an example.</Text>
                </div>
                <div className="info-block">
                  <a target="_blank" href="https://www.avs4you.com/guides/How-to-download-and-install-the-AVS4YOU-software-on-your-PC.aspx"><Text as="span">Read more &#8594;</Text></a>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to activate the AVS4YOU software?">
              <div className="collapseContent">
                <div className="info-block">
                  <Text>It is necessary to purchase an AVS4YOU subscription at <Link href="/register"><Text as="span">www.avs4you.com</Text></Link> in order to activate AVS4YOU software and remove the watermark and other limitations. Once your order is processed you will get a unique license key via e-mail to activate the software.</Text>   
                </div>
                <div className="info-block">
                  <Text>Here is a step-by-step guide which will help you activate AVS4YOU programs without any problems.</Text>
                </div>
                <div className="info-block">
                  <a target="_blank" href="https://www.avs4you.com/guides/how-to-activate-the-avs4you-software.aspx"><Text as="span">Read more &#8594;</Text></a>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to reinstall AVS4YOU programs?">
              <div className="collapseContent">
                <div className="info-block">
                  <Text>If your program files were accidentally removed, infected or damaged, or you would like to update your applications to a newer version available at www.avs4you.com, it is recommended to reinstall the software.</Text>   
                </div>
                <div className="info-block">
                  <Text>Below we'll describe how to reinstall the AVS4YOU software smoothly.</Text>
                </div>
                <div className="info-block">
                  <a target="_blank" href="https://www.avs4you.com/guides/how-to-reinstall-avs4you-programs.aspx"><Text as="span">Read more &#8594;</Text></a>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to uninstall AVS4YOU programs?">
              <div className="collapseContent">
                <div className="info-block">
                  <Text>In case you need to uninstall the AVS4YOU programs follow this detailed guide. Please note that it is recommended to uninstall a program before updating it to prevent a possible version conflict.</Text>   
                </div>
                <div className="info-block">
                  <a target="_blank" href="https://www.avs4you.com/guides/How-to-uninstall-AVS4YOU-programs.aspx"><Text as="span">Read more &#8594;</Text></a>
                </div>
              </div>
            </PanelCollapse>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Download);
