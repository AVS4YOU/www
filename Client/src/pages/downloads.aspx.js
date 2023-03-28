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

import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg3.png';
import Eggm from '../images/easter-event/mobile_egg.png';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import styled from 'styled-components';
const EggEventS = styled.div`
a: hover{
  text-decoration: none;
}
.ModalEventEgg{
  width: 448px;
  height: 565px;
  background-image: url(${EggM});
  .EventEggContent{
    padding-top: 175px;
    padding-left: 25px;
    text-align: center;
  }
  .ModalShaerTexth1{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 31px;
    line-height: 34px;
    text-align: center;
    color: #1E5839;
    padding-top: 15px;
  }
  .ModalShaerTexth2{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    text-align: center; 
    color: #000000;
    padding-top: 5px;
  }
  .ModalShaerTextCoupon{
    
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    margin-left: auto;
    margin-right: auto;
    color: #1E5839;
    margin-top: 25px;
    margin-bottom: 25px;
    span{
      border: 2px dashed #1E5839;
      box-sizing: border-box;
      padding: 4px 20px;
    }
  }
  .ModalShaerTexth4{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    margin-bottom: 30px;
  }
  .ModalShaerClose{
    font-family: Myriad Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FEFFFD;
    background: #1E5839;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    cursor:pointer;
    margin-top: 40px;
  }
}
.ModalShaerClose{
  background: none;
  border: none;
 .CloseEggButton{
  margin-left: 450px;
 }
}

@media only screen and (max-width: 600px) {
  .ModalEventEgg{
    width: 300px;
    height: 380px;
    background-image: url(${Eggm});
    .EventEggContent{
      padding-top: 85px;
      padding-left: 10px;
      text-align: center;
    }
    .ModalShaerTexth1{
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;
    }
    .ModalShaerTexth2{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 17px;
    }
    .ModalShaerTextCoupon{
      font-size: 14px;
      line-height: 19px;
    }
    .ModalShaerTexth4{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
    }
    .ModalShaerClose{
      margin-top: 0px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .ModalShaerClose{
    background: none;
    border: none;
   .CloseEggButton{
    margin-left: 250px;
   }
  }
}

`;

const langBanner = ['de','en','es','fr','it','jp']

const isSomeLang = (curLang) => {
    let isSomeLang = false;
    for(let i = 0; i<langBanner.length; i++) {
        if(langBanner[i] === curLang) isSomeLang = true;
    }

    return isSomeLang;
}

class Download extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonDownloads")
     };

    this.getDevice = this.getDevice.bind(this); 
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  getDevice(device){
    this.setState({ device: device });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

render(){

    return (
      <Layout 
        className="download" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU Download multimedia software for free!")}
        metaDescription="AVS4YOU Download: safely download programs"
        metaKeywords=""
      >
        <div id="headerContentWrapper" className="header">
            <ImageGQL className="headerBackgroundImage" imageName="download-header.jpg" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
                <div className="header__body">
                    <Text as="h1" className="header__heading">{this.props.t("Download_dwn_h")}</Text>
                    <Text as="h3" className="header__subtitle">{this.props.t("Get all AVS4YOU® software in 1 installation package")}</Text>
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
          <Text className="common__heading" as="h3">{this.props.t("Video Software")}</Text>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image video-remaker">
                <div className="achievement">
                  <Text>{this.props.t("Most popular")}</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">{this.props.t("AVS Video Remaker")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {VideoReMaker.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {VideoReMaker.releaseYYYY}-{VideoReMaker.releaseMM}-{VideoReMaker.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {VideoReMaker.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image video-editor">
                <div className="achievement">
                  <Text>{this.props.t("Most downloadable")}</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">{this.props.t("AVS Video Editor")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {VideoEditor.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {VideoEditor.releaseYYYY}-{VideoEditor.releaseMM}-{VideoEditor.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {VideoEditor.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image video-converter">
                <div className="achievement">
                  <Text>{this.props.t("Most featured")}</Text>
                </div>
              </div>
              <Text className="product-name" as="h5">{this.props.t("AVS Video Converter")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {VideoConverter.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {VideoConverter.releaseYYYY}-{VideoConverter.releaseMM}-{VideoConverter.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {VideoConverter.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper"/>
            </div>
            
            <div className="product-box">
              <div className="product-image media-player"></div>
              <Text className="product-name" as="h5">{this.props.t("AVS Media Player")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {MediaPlayer.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {MediaPlayer.releaseYYYY}-{MediaPlayer.releaseMM}-{MediaPlayer.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {MediaPlayer.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" to="headerContentWrapper"/>
            </div>
          </AdaptiveCarousel>
        </div>

        <div className="screen-wrapper border-top products-wrap">
          <div className="product-icon audio"></div>
          <Text className="common__heading" as="h3">{this.props.t("Audio Software")}</Text>
          <AdaptiveCarousel className="product-wrapper" activateCarouselWidth={750} dots={true}>
            <div className="product-box">
              <div className="product-image audio-editor"></div>
              <Text className="product-name" as="h5">{this.props.t("AVS Audio Editor")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {AudioEditor.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {AudioEditor.releaseYYYY}-{AudioEditor.releaseMM}-{AudioEditor.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {AudioEditor.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" to="headerContentWrapper"/>
            </div>

            <div className="product-box">
              <div className="product-image audio-converter">
              <div className="achievement">
                  <Text>{this.props.t("Free")}</Text>
                </div>
              </div>
              <div className="achievement"></div>
              <Text className="product-name" as="h5">{this.props.t("AVS Audio Converter")}</Text>
              <div className="tech-params">
                <Text as="p">{this.props.t("Current Version")} {AudioConverter.version}</Text>
                <Text as="p">{this.props.t("Release Date")} {AudioConverter.releaseYYYY}-{AudioConverter.releaseMM}-{AudioConverter.releaseDD}</Text>
                <Text as="p">{this.props.t("File Size")} {AudioConverter.size} MB</Text>
                <Text as="p">{this.props.t("Platforms")} Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
              <DownloadScrollButton textDownload={this.props.t("Download_dwn")} className="product-button" href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" to="headerContentWrapper"/>
            </div>
          </AdaptiveCarousel>
        </div>

        {isSomeLang (this.props.locale) && (getCookieConsentValue("AVSEasterEvents") == "true") ? 
            <div className="eggsEventRight"><img src={Egg} onClick={() => this.openModal()}></img></div>
            : <div className="eggsEventRight"></div>}
            <ModalEgg
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <EggEventS>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
                    >
                      <img className="CloseEggButton" 
                        src={CloseEgg}
                        alt="Close"
                        style={{
                          width: "28px"
                        }}/>
                    </button>
                    <div className="ModalEventEgg">
                   
                    <div className="EventEggContent">                    
                        <Text className="ModalShaerTexth1">{this.props.t("DWNWow!")}<br />{this.props.t("DWNSave a 50% off")}</Text>
                        <Text className="ModalShaerTexth2">{this.props.t("DWNon AVS Video Editor")}<br /></Text>
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Glory40")}</span></Text>
                        <Text className="ModalShaerTexth4">{this.props.t("*Just use this coupon while purchasing")}</Text>
                        <a href={this.state.hrefButton}>
                        <button
                          className="ModalShaerClose"                  
                          >
                            {this.props.t("SHOP NOW")}
                          </button>
                          </a> 
                      </div>    
                      </div>                
                      </EggEventS>
                  </ModalEgg> 

        <div className="screen-wrapper questions-block">
          <Text className="common__heading questions-heading" as="h3">{this.props.t("Read first")}</Text>
          <div className="questions-wrapper">
            <PanelCollapse className="panelCollapse" panelName={this.props.t("How to download and install the AVS4YOU software on your PC")}>
              <div className="collapseContent">
                <div className="info-block">
                  <Text>{this.props.t("The best and the safest way to download and install our software is to do it via our official website")} <Link to="/"><Text as="span">www.avs4you.com</Text></Link>{this.props.t("jpn")}</Text>   
                </div>
                <div className="info-block">
                  <Text>{this.props.t("Read this step-by-step guide how to download and install AVS4YOU programs using AVS Video Converter as an example")}</Text>
                </div>
                <a target="_blank" rel="noreferrer noopener" href={this.props.t("downolads-avs4you-guides")}>
                <div className="info-block">
                  <Text as="span">{this.props.t("Read more")} &#8594;</Text>
                </div>
                </a>
              </div>
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName={this.props.t("How to activate the AVS4YOU software?")}>
              <div className="collapseContent">
                <div className="info-block">
                  <Text>{this.props.t("It is necessary to purchase an AVS4YOU subscription at")} <Link to="/register.aspx"><Text as="span">www.avs4you.com </Text></Link>{this.props.t("in order to activate AVS4YOU software and remove the watermark and other limitations Once your order is processed you will get a unique license key via e-mail to activate the software")}</Text>   
                </div>
                <div className="info-block">
                  <Text>{this.props.t("Here is a step-by-step guide which will help you activate AVS4YOU programs without any problems")}</Text>
                </div>
                <a target="_blank" rel="noreferrer noopener" href={this.props.t("downloads-avs4you-guides-how-to-activate-the-avs4you-software")}>
                <div className="info-block">
                  <Text as="span">{this.props.t("Read more")} &#8594;</Text>
                </div>
                </a>
              </div>          
            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName={this.props.t("How to reinstall AVS4YOU programs?")}>
              <div className="collapseContent">
                <div className="info-block">
                  <Text>{this.props.t("If your program files were accidentally removed, infected or damaged, or you would like to update your applications to a newer version available at www avs4you com, it is recommended to reinstall the software")}</Text>   
                </div>
                <div className="info-block">
                  <Text>{this.props.t("Below we ll describe how to reinstall the AVS4YOU software smoothly")}</Text>
                </div>
                <a target="_blank" rel="noreferrer noopener" href={this.props.t("downloads-avs4you-guides-how-to-reinstall-avs4you-programs")}>
                <div className="info-block">
                  <Text as="span">{this.props.t("Read more")} &#8594;</Text>
                </div>
                </a>
              </div>


   

            </PanelCollapse>

            <PanelCollapse className="panelCollapse" panelName={this.props.t("How to uninstall AVS4YOU programs?")}>
              <div className="collapseContent">
                <div className="info-block">
                  <Text>{this.props.t("In case you need to uninstall the AVS4YOU programs follow this detailed guide Please note that it is recommended to uninstall a program before updating it to prevent a possible version conflict")}</Text>   
                </div>
                <a target="_blank" rel="noreferrer noopener" href={this.props.t("downloads-avs4you-guides-How-to-uninstall-AVS4YOU-programs")}>
                <div className="info-block">
                  <Text as="span">{this.props.t("Read more")} &#8594;</Text>
                </div>
                </a>
              </div>
            </PanelCollapse>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Download);
