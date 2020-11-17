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

import ContentRowItem from '../components/content-row-item';
import ContentSelector from '../components/content-selector';

import videoIcon from '../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../images/main-page/icons/audio_icon_white.svg'
import imageIcon from '../images/main-page/icons/image_icon_grey.svg'
import imageIconWhite from '../images/main-page/icons/image_icon_white.svg'

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
  }

  @media (max-width: 750px) {

    .bodyHeader{
      padding-top: 50px;
      padding-bottom: 50px;
      font-weight: 700;
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
                t={this.props.t}
                mainHref="https://new.avs4you.com/downloads/AVSInstallPack.exe"
                scrollTo="mainBodyHeader"
                className="headerDownloadButtons"
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
                  buttonNames={[this.props.t("Video"),this.props.t("Audio")]}
                  disableArrows={true}
              >
                  <ContentWrapper>
                      <ContentRowItem 
                          imgLeft={false}
                          imageName="slider_video_converter.jpg"
                          headerText={this.props.t("AVS Video Converter")}
                          free={true}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSVideoConverter.exe"
                          smallButtonLink="/avs-free-video-converter.aspx"
                          scrollTo="headerCoupon"
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Convert all key video formats and file sizes")}</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Smart conversion presets")}</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>{this.props.t("GPU conversion acceleration")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={true}
                          imageName="slider_video_editor.jpg"
                          headerText={this.props.t("AVS Video Editor")}
                          free={false}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSVideoEditor.exe"
                          smallButtonLink="/avs-video-editor.aspx"  
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
                          imageName="slider_video_remaker.jpg"
                          headerText={this.props.t("AVS Video ReMaker")}
                          free={false}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSVideoReMaker.exe"
                          smallButtonLink="/avs-video-remaker.aspx"   
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
                          imageName="media_player_formats2x.jpg"
                          headerText={this.props.t("AVS Media Player")}
                          free={true}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSMediaPlayer.exe"
                          smallButtonLink="/avs-free-media-player.aspx"   
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
                          imageName="slider_audio_editor.jpg"
                          headerText={this.props.t("AVS Audio Editor")}
                          free={false}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSAudioEditor.exe"
                          smallButtonLink="/avs-audio-editor.aspx"  
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
                          imageName="slider_audio_converter.jpg"
                          headerText={this.props.t("AVS Audio Converter")}
                          free={true}
                          blueButtonLink="https://new.avs4you.com/downloads/AVSAudioConverter.exe"
                          smallButtonLink="/avs-free-audio-converter.aspx"   
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

        <div className="background-color">
          <ReviewScreen t={this.props.t} revHeader={this.props.t("Our customers say")} />
        </div>
        
      </MainPageWrapper>
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(mainPage);
