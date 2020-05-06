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
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image video-remaker">
                <div className="achievement">
                  <Text>Most popular</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">AVS Video Remaker</Text>
              <div className="tech-params">
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
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
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
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
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper"/>
            </div>
            
            <div className="product-box">
              <div className="product-image media-player"></div>
              <Text className="product-name" as="h5">AVS Media Player</Text>
              <div className="tech-params">
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" to="headerContentWrapper"/>
            </div>
          </AdaptiveCarousel>
        </div>

        <div className="screen-wrapper background-color products-wrap">
          <div className="product-icon audio"></div>
          <Text className="common__heading" as="h3">Audio Software</Text>
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image audio-editor"></div>
              <Text className="product-name" as="h5">AVS Audio Editor</Text>
              <div className="tech-params">
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
              </div>
              <DownloadScrollButton textDownload="Download" className="product-button" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image audio-converter"></div>
              <div className="achievement"></div>
              <Text className="product-name" as="h5">AVS Audio Converter</Text>
              <div className="tech-params">
                <Text as="p">Current Version: 9.1.2.340</Text>
                <Text as="p">Release Date: 11/05/2019</Text>
                <Text as="p">File Size: 155.58 MB</Text>
                <Text as="p">Platforms: Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/ Linux support)</Text>
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
                <div className="linksWrapper">
                  <Link href="/">
                    <Text as="p">Introduction</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 1: Download AVS Video Converter</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 2: Install AVS Video Converter</Text>
                  </Link>
                </div>
                <div className="info-block">
                  <Text as="h5">Introduction</Text>
                  <Text>The best and the safest way to download and install our software is to do it via our official website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>. 
                    Below we'll describe how to do it, taking AVS Video Converter as an example. 
                    Please bear in mind that the same procedure can be performed to download any AVS4YOU software.
                  </Text>

                  <Text as="h5">Step 1: Download AVS Video Converter</Text>
                  <Text>Open our website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>, go to <Link href="/download"><Text as="span">Downloads page</Text></Link> and 
                    select a product you need from the list. 
                    In our case it will be AVS Video Converter. 
                    Left-click the Download now button. Left-click the Download now button.
                  </Text>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to activate the AVS4YOU software?">
              <div className="collapseContent">
                <div className="linksWrapper">
                  <Link href="/">
                    <Text as="p">Introduction</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 1: Download AVS Video Converter</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 2: Install AVS Video Converter</Text>
                  </Link>
                </div>
                <div className="info-block">
                  <Text as="h5">Introduction</Text>
                  <Text>The best and the safest way to download and install our software is to do it via our official website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>. 
                    Below we'll describe how to do it, taking AVS Video Converter as an example. 
                    Please bear in mind that the same procedure can be performed to download any AVS4YOU software.
                  </Text>
                  
                  <Text as="h5">Step 1: Download AVS Video Converter</Text>
                  <Text>Open our website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>, go to <Link href="/download"><Text as="span">Downloads page</Text></Link> and 
                    select a product you need from the list. 
                    In our case it will be AVS Video Converter. 
                    Left-click the Download now button. Left-click the Download now button.
                  </Text>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to reinstall AVS4YOU programs?">
              <div className="collapseContent">
                <div className="linksWrapper">
                  <Link href="/">
                    <Text as="p">Introduction</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 1: Download AVS Video Converter</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 2: Install AVS Video Converter</Text>
                  </Link>
                </div>
                <div className="info-block">
                  <Text as="h5">Introduction</Text>
                  <Text>The best and the safest way to download and install our software is to do it via our official website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>. 
                    Below we'll describe how to do it, taking AVS Video Converter as an example. 
                    Please bear in mind that the same procedure can be performed to download any AVS4YOU software.
                  </Text>
                  
                  <Text as="h5">Step 1: Download AVS Video Converter</Text>
                  <Text>Open our website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>, go to <Link href="/download"><Text as="span">Downloads page</Text></Link> and 
                    select a product you need from the list. 
                    In our case it will be AVS Video Converter. 
                    Left-click the Download now button. Left-click the Download now button.
                  </Text>
                </div>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName="How to uninstall AVS4YOU programs?">
              <div className="collapseContent">
                <div className="linksWrapper">
                  <Link href="/">
                    <Text as="p">Introduction</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 1: Download AVS Video Converter</Text>
                  </Link>
                  <Link href="/">
                    <Text as="p">Step 2: Install AVS Video Converter</Text>
                  </Link>
                </div>
                <div className="info-block">
                  <Text as="h5">Introduction</Text>
                  <Text>The best and the safest way to download and install our software is to do it via our official website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>. 
                    Below we'll describe how to do it, taking AVS Video Converter as an example. 
                    Please bear in mind that the same procedure can be performed to download any AVS4YOU software.
                  </Text>
                  
                  <Text as="h5">Step 1: Download AVS Video Converter</Text>
                  <Text>Open our website <Link href="/"><Text as="span">www.avs4you.com</Text></Link>, go to <Link href="/download"><Text as="span">Downloads page</Text></Link> and 
                    select a product you need from the list. 
                    In our case it will be AVS Video Converter. 
                    Left-click the Download now button. Left-click the Download now button.
                  </Text>
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
