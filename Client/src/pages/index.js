import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import styled from 'styled-components';
import Text from '../components/text';
import PageContentWrapper from '../components/page-content-wrapper';
import ReviewScreen from '../components/review-screen';
import HeaderDownloadButtons from '../components/header-download-buttons';
import ImageGQL from '../components/image-gql';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';

import ContentRowItem from '../components/content-row-item';
import ContentSelector from '../components/content-selector';

import videoIcon from '../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../images/main-page/icons/audio_icon_white.svg'
import imageIcon from '../images/main-page/icons/image_icon_grey.svg'
import imageIconWhite from '../images/main-page/icons/image_icon_white.svg'

import awardClean from '../images/main-page/awards/award-clean.png'
import awardCapterra from '../images/main-page/awards/award-capterra.png'
import awardChip from '../images/main-page/awards/award-chip.png'
import awardGetapp from '../images/main-page/awards/award-getapp.png'
import awardPick from '../images/main-page/awards/award-epick.png'
import awardSoftonic from '../images/main-page/awards/award-softonic.png'
import awardSoft from '../images/main-page/awards/softonic-award.png'
import awardSafety from '../images/main-page/awards/award-safety.png'

const StyledMainContentWrapper = styled.div`
    display:block;
    padding-bottom: 100px;

    .alert-enter {
        opacity: 0;
    }
    .alert-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .alert-exit {
        opacity: 1;
    }
    .alert-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }

    .top-selector-buttons-wrapper{
        max-width: 500px;
        width: 100%;
        box-sizing: border-box;
        
        .top-button{
            position:relative;
            padding: 0 24px;

            .selectorText{
                display: inline-block;
                padding-left: 25px;
            }

            .selectorText:before{
                display:block;
                content: '';
                height:29px;
                width:29px;
                left: 29%;
                background-position: 0;
                background-repeat: no-repeat;
                position: absolute;  
                top: 0;
                bottom: 0;
                margin: auto;   
            }

            &:nth-child(1) .selectorText:before{
                background-image: url(${videoIcon});
            }
            &:nth-child(2) .selectorText:before{
                background-image: url(${audioIcon});  
            }
            &:nth-child(3) .selectorText:before{
                background-image: url(${imageIcon});  
            }

            &.selected{
                &:nth-child(1) .selectorText:before{
                    background-image: url(${videoIconWhite});
                }
                &:nth-child(2) .selectorText:before{
                    background-image: url(${audioIconWhite});  
                }
                &:nth-child(3) .selectorText:before{
                    background-image: url(${imageIconWhite});  
                }
            }
        }
    }

    @media (max-width: 750px) {



        .top-selector-buttons-wrapper{
            
            .top-button{
                line-height: 35px;
    
                .selectorText{
                    font-size: 14px;
                    padding-left:0;
                    line-height: 35px;
                }

                .selectorText:before{
                    height: 21px;
                    width: 21px;
                    background-size: contain;
                    position: relative;
                    display: inline-block;
                    vertical-align: sub;
                    padding-right: 10px;
                    left: auto;
                }
            }
        }
    }

    @media (max-width: 450px) {
        .top-selector-buttons-wrapper{
            .top-button {
                .selectorText:before {
                    display:none;
                }
            }
        }
    }
`;

const ContentWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;

    @media (max-width: 1050px) {
        margin:auto;
    }
`;

const MainPageWrapper = styled.div`

  .avs4you{
    text-transform: uppercase;
    color: #F59541;
    font-weight: 600;
  }

  .background-color{
    background-color:#FFF9F1;
    padding-bottom: 100px;
  }

  .headerText{
    padding-bottom:25px;
  }

  .bodyHeader{
    text-align: center;
    padding-top:100px;
    padding-bottom:80px;
  }

  .headerDownloadButtons{
    margin-top: 50px;
  }

  .mobileFormWrapper{
    display: table;
    margin-left: 0;
  }

  .getCouponButton{
    display: block;
    text-align: center;
  }

  .headerContentWrapper{
    padding-top: 260px;
    padding-bottom: 320px;
    max-width: 750px;
  }

  .headerBackground{
    position:relative;
  }

  .headerBackgroundImage{
    position:absolute !important;
    top: 0px;
    right:0;
    width: 100%;
    min-width: 1920px;
    height: 100%;
    object-fit: none;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
  }

  .block-awards {
    max-width: 1120px;
    margin: auto;
    text-align: center;
    display: table;
    padding: 0 16px;
  }

  .awards-item {
    display: inline-table;
    height: 150px;
    padding: 10px 30px;
    vertical-align: middle;
    width: 192px;
  }

  .awards-item img {
    background-size: contain;
  }

  .award-img-center {
    height: 124px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .award-img {
    height: 124px;
  }

  .list-awards {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .awards-text {
    padding: 16px 0;
  }

  .awards-title { 
    margin-bottom: 50px;
  }

  .trustButton {
    margin: auto;
    display: table;
  }

  @media (max-width: 1500px) {
    .headerBackgroundImage{
      right: -20%;
    }
  }

  @media (max-width: 1370px) {
    .headerText{
      line-height: 53px;
      font-size: 47px;
    }
    .headerContentWrapper{
      padding-top: 115px;
      padding-bottom: 160px;
    }

    .headerDownloadButtons{
      margin-top:22px;
    }
  }

  @media (max-width: 1050px) {
    .headerBackground {
      background-position: 0 0;
    }

    .headerBackgroundImage{
      left: 0;
      right: auto;
    }

    .headerDownloadButtons{
      .headerButtonsWrapper{
        margin: auto;
      }
    }

    .mobileFormWrapper{
      margin: auto;
    }

    .headerContentWrapper{
      max-width: 520px;
      margin: auto;
      padding-top: 60px;
      padding-bottom: 170px;
    }

    .headerText{
      font-size: 34px;
      line-height: normal;
      text-align: center;
    }

    .headerDescription{
      font-size: 18px;
      text-align: center;
    }

    .bodyHeader{
      font-size: 28px;
    }

    .awards-item {
      width: auto !important;
      padding: 0;
    }

    .list-awards {
      justify-content: space-around;
    }
  }

  @media (max-width: 750px) {

    .bodyHeader{
      padding-top: 50px;
      padding-bottom: 50px;
      font-weight: 700;
    }

    .awards-text {
      font-size: 14px !important;
    }

    .list-awards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .awards-item {
      padding: 10px;
    }
  }

  @media (max-width: 450px) {

    .headerContentWrapper{
      padding-bottom: 100px;
    }

    .bodyHeader{
      font-size: 22px;
    }

    .HeaderListItem.mobile{
      font-size: 20px;
    }

    .list-awards {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;



class mainPage extends React.PureComponent {

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
    <Layout getDevice={this.getDevice} 
            pageContext={this.props.pageContext} 
            t={this.props.t}
            title={this.props.t("AVS4YOU best software for processing video, audio, image")}
            metaDescription={this.props.t("AVS4YOU is a suite of 5 professional multimedia programs to convert, edit and create audio and video Use AVS4YOU freeware to work with image & document files")}
            metaKeywords={this.props.t("avs video converter, avs4you, avs, avs converter, avs4u, video to mp3, video converter, mp4 converter, dvd converter, avi converter, wmv converter, avs video editor, avs editor, avs movie editor, video editor, video editing software, avs image converter, avs photo converter, image converter, image size converter, avs audio converter, audio converter, video to audio converter, m4a converter, mp3 converter, wav converter, avs audio editor, audio editor, audio editing software, omp3 editor, music editor, audio cutter")}
    >

     <MainPageWrapper>
     <div className="headerBackground">
        <ImageGQL className="headerBackgroundImage" imageName="main-page-header-image.jpg"/>
          <PageContentWrapper>
            <div id="headerCoupon" className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{this.props.t("avs4you")}</b> — {this.props.t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" className="headerDescription" as="h5" fontSize={24} style={{maxWidth:"700px"}}>{this.props.t("Produce spectacular video, audio content and even more, without any limitations")}</Text>
              <HeaderDownloadButtons
                  id="download-now_main-header"
                t={this.props.t}
                mainHref="https://downloads.avs4you.com/distributives/AVSInstallPack.exe"
                scrollTo="mainBodyHeader"
                className="headerDownloadButtons"
                  secondButtonId="learn-more_main"
              />
            </div>
          </PageContentWrapper>
        </div>

        <StyledMainContentWrapper>
          <PageContentWrapper>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
              <Text fontSize={46} fontWeight={600} id="mainBodyHeader" className="bodyHeader">{this.props.t("Turn your ideas into exciting content")}</Text>
              
              <ContentSelector
                  className="content-wrapper"
                  buttonIds={['video-tab_main', 'audio-tab_main']}
                  buttonNames={[this.props.t("Video"),this.props.t("Audio")]}
                  disableArrows={true}
              >
                  <ContentWrapper>
                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider video converter jpg")}
                          headerText={this.props.t("AVS Video Converter")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                          smallButtonLink="/avs-free-video-converter.aspx"
                          blueButtonLinkId="download-now_main-avs-vc"
                          smallButtonLinkId="learn-more_main-avs-vc"
                          scrollTo="headerCoupon"
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Convert all key video formats and file sizes")}</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Smart conversion presets")}</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>{this.props.t("GPU conversion acceleration")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("slider video editor jpg")}
                          headerText={this.props.t("AVS Video Editor")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                          smallButtonLink="/avs-video-editor.aspx"
                          blueButtonLinkId="download-now_main-avs-ve"
                          smallButtonLinkId="learn-more_main-avs-ve"
                          scrollTo="headerCoupon"    
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Edit all key video formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join video files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Apply effects and transitions")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Add audio, comments, subtitles")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Capture PC screen")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Use Chroma key, Slow Motion")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider video remaker jpg")}
                          headerText={this.props.t("AVS Video ReMaker")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                          smallButtonLink="/avs-video-remaker.aspx"
                          blueButtonLinkId="download-now_main-avs-vr"
                          smallButtonLinkId="learn-more_main-avs-vr"
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Edit video files without reconversion")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Support of all key video formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join video files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Transfer video from camcorders and video cameras")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Capture PC screen")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create DVD and Blu-ray menus and discs")}</Text>
                      </ContentRowItem>
                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("media player formats2x jpg")}
                          headerText={this.props.t("AVS Media Player")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe"
                          smallButtonLink="/avs-free-media-player.aspx"
                          blueButtonLinkId="download-now_main-avs-mp"
                          smallButtonLinkId="learn-more_main-avs-mp"
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Open and watch videos in all popular formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Listen to your favourite music")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("View images as a slideshow")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create personal playlists")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Take snapshots")}</Text>
                      </ContentRowItem>
                  </ContentWrapper>

                  <ContentWrapper>
                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider audio editor jpg")}
                          headerText={this.props.t("AVS Audio Editor")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                          smallButtonLink="/avs-audio-editor.aspx"
                          blueButtonLinkId="download-now_main-avs-ae"
                          smallButtonLinkId="learn-more_main-avs-ae"
                          scrollTo="headerCoupon"    
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Record audio data")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join and mix audio files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Improve sound quality")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Remove noise")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Text to Speech")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("slider audio converter jpg")}
                          headerText={this.props.t("AVS Audio Converter")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                          smallButtonLink="/avs-free-audio-converter.aspx"
                          blueButtonLinkId="download-now_main-avs-ac"
                          smallButtonLinkId="learn-more_main-avs-ac"
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Convert all key audio formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join and mix audio files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Modify audio file information")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create audiobooks and ringtones")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Export audio from video")}</Text>
                      </ContentRowItem>
                  </ContentWrapper>
              </ContentSelector>
          </PageContentWrapper>
        </StyledMainContentWrapper>

        <div className="block-awards">
            <Text className="awards-title" fontSize={28} fontWeight={600} color="#000000">{this.props.t("AVS4YOU Awards and Ratings")}</Text>
            <div className="list-awards">
              <div className="awards-item"><div className="award-img"><img src={awardClean}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Informer Clean Award</Text></div>
              <div className="awards-item"><div className="award-img"><img src={awardPick}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Informer Rating: Excellent</Text></div>
              <div className="awards-item"><div className="award-img"><img src={awardSoftonic}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Softonic clean award</Text></div>
              <div className="awards-item"><div className="award-img"><img src={awardSafety}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Safety Award</Text></div>
              <div className="awards-item"><div className="award-img-center"><img src={awardSoft}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Softonic Rating: Very good</Text></div>
              <div className="awards-item"><div className="award-img"><img src={awardChip}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>chip.de First Impression: Very Good</Text></div>
              <div className="awards-item"><div className="award-img"><img src={awardGetapp}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>GetApp: Very Good</Text></div>
              <div className="awards-item"><div className="award-img-center"><img src={awardCapterra}/></div><Text className="awards-text" color="#555555" fontSize={14} fontWeight={400}>Capterra: Very Good</Text></div>
            </div>
        </div>  

        <div className="background-color">
          <ReviewScreen t={this.props.t} revHeader={this.props.t("Our customers say")} />
          <Button className="trustButton"
                  id="review-us-on-trustpilot_main"
                    href="https://www.trustpilot.com/review/www.avs4you.com"
                    color="#fff">
                    {this.props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
            </Button>
        </div>
        
      </MainPageWrapper>
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(mainPage);
