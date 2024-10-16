import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import ScrollUpButton from '../components/scroll-up-button';
import HeaderRowImage from '../images/avs-video-editing-software/header-back-image-avs.png';
import Sliders from '../components/slider-screen-recorder';
import styled from 'styled-components';
import Button from '../components/button';

import BackGroundImage from '../images/avs-video-editing-software/fon_image.png';
import HeaderBackgroundImage from '../images/avs-video-editing-software/back_ground_image_final.jpg';
import Marker from '../images/avs-video-editor-final/file-02 2.svg';

import EffectSnapshots from '../images/editor-screen-recorder/svg/effect_i_snapshots.svg';
import RealTime from '../images/editor-screen-recorder/svg/real-time-draw.svg';
import RecRecorder from '../images/editor-screen-recorder/svg/rec-recorder.svg';
import RecVideo from '../images/editor-screen-recorder/svg/record_video.svg';

import SHTD from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame5.svg';
import SaveDisc from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame6.svg';
import SaveWeb from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame7.svg';
import Devices from '../images/avs-video-editor-final/cinema-slider/cards-frame/Frame8.svg';


const HeaderMain = styled.div`
.headerAVSVScrRec{
  max-width:1180px;
  margin: 0 auto;
    padding-top: 45px;
    padding-bottom: 125px;
}

.headerTextInfo{
  padding: 30px;
  max-width: 610px;
}

.tableWrapperHeader{
  max-width: 720px;
    min-width: 710px;
    min-height: 480px;
    margin: 38px;
    background-color: #ffffff;
    position: absolute;
}
.flexWrapper{
  display: table-cell;
  vertical-align: middle;
  margin: auto;
  padding-top: 25px;
  padding-bottom: 25px;
  width:60%;
  font-family:'Open Sans',sans-serif,Arial;
  .tableWrapper{
      display: table;
      margin: auto;
      width: 95%;
      margin-left:18%;
      padding-top:15px;
      .tableWrapperHeader{
          display: inline-table;
          width: 90%;
          height: 45%;
          padding: 20px;
          z-index: 1;
          background-color: #fff;
          .headerText{
              width: 85%;
          }
      }
      .tableWrapperHeader35{
          display: inline-table;
          width: 100%;
          height: 45%;
          padding: 20px;
          z-index: 1;
          background-color: #fff;
      }
  }
}

.ListItem{
  padding-left: 30px;
  padding-bottom: 10px;
  position:relative;
  color:#555555;
  font-weight: 500;
  list-style-type: none;
  font-family:'Open Sans',sans-serif,Arial;
  font-size:14px;
  &>span{
      display:block;
      font-weight:bold;
      font-size:19px;
  }

  &:before{
      content: '';
      width: 20px;
      height: 20px;
      background-image: url(${Marker});
      background-repeat: no-repeat;
      position: absolute;
      left:0;
      top: 0;
  }

  &.LinkItem{
      text-decoration:none;
      color: #1E72D2;
      font-weight: 500;   
      font-size: 18px;

      &:before{
          content: none;
      }

      &:hover{
          text-decoration:underline;
      }

  }

  &.footnote{
      font-size:14px;
      font-weight:500;

      &:before{
          content: none;
      }
  }
}
.HeaderListItemTable{
  display:inline-flex;
  padding-top: 10px; 
  display:-ms-inline-flexbox;

.HeaderListItem{
  padding-left: 40px;
  align-items: center;
  font-weight: 600;
}
.HeaderListItem35{
  align-items: center;
  font-weight: 600;
}
  
}
.headerText{
  padding-left:15px;
  font-family:'Open Sans',sans-serif,Arial;
}
.headerDescription{
  padding-left:15px;
  font-family:'Open Sans',sans-serif,Arial;
  padding-bottom: 3px;
}
.headerButtonsWrapper{
  padding-top: 30px;
  font-family:'Open Sans',sans-serif,Arial;
}
.buttonsWrapper{
  display: table;
  align-items: center;
  padding-left: 15px;
  padding-bottom: 5px;
  padding-top: 20px;
  .secondaryButton{
      color:#333333;
      display: block;
      margin-left: 50px;
      &.mobileSended{
          background-color: #fff;
          color: #333
          border-radius: 5px;
          border: 1px solid #333;
          p{
              color: #333;
          }
      }

      &:hover{
          text-decoration:underline;
      }
  }

  .mainButton{
      display: table-cell;
      background-color: #FC4B15;
  }
  .secondaryButton{
      display: block;
      margin-left:-25px;
      background-color: #FFFFFF;
      color: #333;
      border: 1px solid #333;
      p{
          color: #333;
          font-weight: 700;
      }
  }
}

.hdrBckIMg{
  left: 570px;
  top: 40px;
  width: 636px;
  height: 490px;
  position: relative;
  .headerBackgroundImageROW{
    width: 636px;
    height: 490px;
  }
}
`;

const MainPageWrapper = styled.div`
  .bodyHeader{
    text-align: center; 
  }

  .headerContentWrapper{
    max-width: 400px;
    padding-left:45%;
    font-family:'Open Sans',sans-serif,Arial;
  }

  .headerBackground{
    position:relative;
    margin-bottom: 150px;
  }

  .headerDescription{
    padding-top:15px;
    font-family:'Open Sans',sans-serif,Arial;
  }

  .buttonsWrapper{
    margin-top:35px;
  }

  .fonImageT{
    position: absolute;
    top: -120px;
    right: 0;
    width: 100%;
    padding-top: 9%;
    height: 100%;
    -o-object-fit: none;
    object-fit: none;
    -o-object-position: center center;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
    margin: 0 auto;
    width: 100%;
  }


  @media (max-width: 1050px) {
    .headerBackground {
      background-image: none;
      background-position: 0 0;
    }


    .headerDownloadButtons{
      .headerButtonsWrapper{
        margin: auto;
      }
    }
  }


  @media (max-width: 1480px) {
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


`;

const CardInfo = styled.div`
.screen-wrapper{
    padding: 90px 30px;
}

.reseller-from-wrapper{
    max-width: 800px;
    margin: auto;

    .getCouponButton{
        display: table;
    }
}
.body-reseller{
    max-width: 1120px;
    width: 100%;
    margin: auto;
    box-sizing: border-box;

    .body-reseller__wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        display: -ms-flex;
        -ms-justify-content: center;
        -ms-flex-wrap: wrap;
    }

    .common-info-block{
        margin: 15px;
        width: 454px;
        min-height: 244px;
        max-width: 472px;
        border: 1px solid rgba(50, 57, 62, 0.15);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 30px;
        
        &:nth-child(1):before{
          background-image: url(${RecVideo});
          height: 50px;
          margin-top: 30px;
          margin-left: 20px;
          background-repeat: no-repeat;
        }

        &:nth-child(2):before{
          background-image: url(${EffectSnapshots});
          height: 50px;
          margin-top: 30px;
          margin-left: 20px;
          background-repeat: no-repeat;
        }

        &:nth-child(3):before{
          background-image: url(${RealTime});
          height: 50px;
          margin-top: 30px;
          margin-left: 20px;
          background-repeat: no-repeat;
        }

        &:nth-child(4):before{
          background-image: url(${RecRecorder});
          height: 50px;
          margin-top: 30px;
          margin-left: 20px;
          background-repeat: no-repeat;
        }

        p{
          font-size: 14px;
        }


        h4{
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          text-align: left;
          color: #32393E;
          margin-left: 95px;
          padding-top: 16px;
          margin-bottom: 10px;
        }

        h2{
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 38px;
          color: #32393E;
        }
    }

    .body-reseller__button-text{
        font-size: 18px;
        text-transform: uppercase;
    }

    .body-reseller__button-wrapper{
        display: table;
        margin: auto;
    }
}
`;

const CardInfoFooter = styled.div`
.screen-wrapper{
  padding: 120px 0px;
  .common__heading_recorder{
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
      color: #32393E;
      margin-bottom: 20px;
    }
    .common__heading_recorder_p{
      max-width: 850px;
      margin: 0 auto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;    
      text-align: center;
      color: #32393E;
      margin-bottom: 10px;
    }
  
}

.reseller-from-wrapper{
  max-width: 800px;
  margin: auto;

  .getCouponButton{
      display: table;
  }
}
.body-reseller{
  max-width: 1180px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;

  .body-reseller__wrapper{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      display: -ms-flex;
      -ms-justify-content: center;
      -ms-flex-wrap: wrap;
  }

  
  .common-info-block{
      margin: 22px;
      height: 266px;
      max-width: 250px;
      border: 1px solid rgba(50, 57, 62, 0.15);
      box-sizing: border-box;
      padding: 30px;
      
      &:nth-child(1):before{
          background-image: url(${SHTD});
          background-repeat: no-repeat;
          width: 65px;
          height: 55px;
          margin-top: 31px;
          left: 100px;
      }

      &:nth-child(2):before{
          background-image: url(${Devices});
          background-repeat: no-repeat;
          width: 65px;
          height: 65px;
          margin-top: 31px;
          left: 96px;
      }

      &:nth-child(3):before{
          background-image: url(${SaveDisc});
          background-repeat: no-repeat;
          width: 55px;
          height: 65px;
          margin-top: 31px;
          left: 100px;
      }

      &:nth-child(4):before{
          background-image: url(${SaveWeb});
          background-repeat: no-repeat;
          width: 67px;
          height: 60px;
          margin-top: 31px;
          left: 95px;
      }

      p{
        font-size: 14px;
        text-align: center;
        color: #32393E;
      }

      h4{
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #32393E;
        margin-top: 75px;
        padding-bottom: 10px;
      }
  }

  .body-reseller__button-text{
      font-size: 18px;
      text-transform: uppercase;
  }

  .body-reseller__button-wrapper{
      display: table;
      margin: auto;
  }
}

`;

class avsVideoEditorSoftware extends React.PureComponent {

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
        title={this.props.t("AVS Video-Editor Screen Recorder")}
        metaDescription=""
        metaKeywords=""
      >    
        <ProductPagesWrapper>  
          <div className="headerBackground">
          <div className="headerBackgroundImage">
              <img className="headerBackgroundImageVES" src={HeaderBackgroundImage} alt=""/>
            </div>
            <PageContentWrapper>
              <HeaderMain>
              <div className="headerAVSVScrRec">
              <div className="tableWrapperHeader">
                <div className="headerTextInfo">
                <Text align="left" className="headerDescription" as="h5" color="#32393e" fontSize={28} fontWeight={700}>AVS Video Editor</Text>
                  <Text align="left" className="headerText headerTextSoftWare" paddingLeft="15px" lineHeight="43px" color="#32393e" fontSize={42} fontWeight={600} as="h1">{this.props.t("Record your PC screen")}<br/> {this.props.t("and create engaging videos like clockwork")}</Text>
                  <div className="HeaderListItemTable" style={{paddingLeft:"15px", paddingBottom:"10px"}}>
                    <div className="HeaderListItem35">
                      <Text className="ListItem">{this.props.t("All-in-one editor and recorder")}</Text>
                      <Text className="ListItem">{this.props.t("150+ key formats")}</Text>
                      <Text className="ListItem">{this.props.t("Intuitive interface")}</Text>
                    </div>
                    <div className="HeaderListItem">
                      <Text className="ListItem">{this.props.t("GPU acceleration")}</Text>
                      <Text className="ListItem">{this.props.t("300+ modern video effects Exporting")}</Text>
                      <Text className="ListItem">{this.props.t("Exporting & publishing")}</Text>
                    </div>
                  </div>
                  <div className="buttonsWrapper">
                  <Button
                    className="mainButton" 
                    fontSize={18} 
                    padding="16.5px 35px"
                    textTransform="uppercase"
                    id="download-now1_avs-video-screen-recorder"
                    href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                      {this.props.t("Download now")}</Button>
                    </div>
                </div>
                </div>
                <div className="hdrBckIMg">
              <img className="headerBackgroundImageROW" src={HeaderRowImage} alt=""/>
            </div>
              </div>
             
              </HeaderMain>                  
            </PageContentWrapper>
          </div>      

        <CardInfo>
          <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading" fontSize={32}>
          {this.props.t("Work with all formats")}
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Record video and capture screen")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Transfer video from DV/HDV cameras, webcams or VHS cameras Easily capture screen to record presentations, demo videos, tutorials, online calls and more Capture full screen or select an area to be recorded It is possible to record video with sound or disable it if necessary")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Real-time drawing")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Draw on video anything you like, add text annotations, highlight important details with circles, rectangles and arrowed lines")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Mouse click effect & snapshots")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Add a mouse click effect and animation while recording Make snapshots in a click and save them to JPEG, PNG, BMP")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Schedule recording")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Split the recording by file size or duration Stop recording automatically by setting the time limit or maximum file size")}
              </Text>
            </div>
          </div>
        </div>
        </CardInfo>

        <Sliders 
        headerDescription = {this.props.t("Make quick edits")}

        headerDescriptionSliderTCSJR = {this.props.t("Trim, crop, split and join, rotate")}
        descriptionSliderTCSJR = {this.props.t("Adjust video to the perfect length by deleting unnecessary scenes with Trim and MultiTrim options Change the video aspect ratio and get rid of the black bars with Crop Scale Just drag clips to the timeline in order to join them Rotate video 90, 180 or 270 degrees and easily correct footage filmed upside down")}
        btn1SliderTCSJR = {this.props.t("Trim")}
        btn2SliderTCSJR = {this.props.t("Crop")}
        btn3SliderTCSJR = {this.props.t("Split & Join")}
        btn4SliderTCSJR = {this.props.t("Rotate")}

        headerDescriptionSliderAV = {this.props.t("Audio and video overlays")}
        descriptionSliderAV = {this.props.t("Record voice and add your favourite audio tracks Fine-tune sound applying different effects Amplify, Noise Removal, Equalizer, Normalize, Compressor, Pitch Shift Make a picture in picture effect easily")}
        btn1SliderAV = {this.props.t("Video Overlay")}
        btn2SliderAV = {this.props.t("Audio Overlay")}

        headerDescriptionSliderMake = {this.props.t("Make your videos shine")}
        descriptionSliderMake = {this.props.t("Bring your story, be it a wedding, a birthday party, a love story or a trip, to life with amazing effects and transitions Easily improve video quality with advanced editing tools such as video stabilization, speed control, color correction and others")}
        btn1SliderMake = {this.props.t("Special Effects")}
        btn2SliderMake = {this.props.t("Stabilization")}
        btn3SliderMake = {this.props.t("Speed control")}
        btn4SliderMake = {this.props.t("Color correction")}

        headerDescriptionSliderOther = {this.props.t("Other cool effects")}
        btn1SliderOther = {this.props.t("Pan and zoom")}
        btn2SliderOther = {this.props.t("Picture in picture")}
        btn3SliderOther = {this.props.t("Chromakey")}
        btn4SliderOther = {this.props.t("Animated captions")}
        btn5SliderOther = {this.props.t("Tilt shift")}
        btn6SliderOther = {this.props.t("Slow motion")}
        />

        <CardInfoFooter>
          <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading_recorder">
          {this.props.t("Share your story the way you like")}
          </Text>
          <Text className="common__heading_recorder_p">
          {this.props.t("Save the ready video project onto your computer hard disk drive, upload it to modern gadgets, share online on popular web hostings or replenish your video collection with a new DVD/Blu-ray disc")}
          </Text>

          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Standard/")}<br/>
              {this.props.t("HDV video file")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("MP4, AVI, DVD, MOV, MPEG, WMV, MKV, M2TS, etc")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Devices")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Apple iPhone, iPad, Samsung, Sony PSP, BlackBerry")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Save to Disc")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Create a DVD-video or Blu-ray disc with a menu")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Save for Web")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Upload to YouTube, Facebook, Telly, Dropbox")}
              </Text>
            </div>

          </div>
        </div>
        </CardInfoFooter>

        <MainPageWrapper>
        <div className="headerBackground">
        <div className="fonImageTelo">
            <img className="fonImageT" src={BackGroundImage} alt=""/>
        </div> 
          <PageContentWrapper>
            <div id="headerCoupon" className="headerContentWrapper">   
              <Text align="left" color="#32393e" fontWeight={600} className="headerDescription" as="h5" fontSize={30}>{this.props.t("Become an expert in video editing right now")}</Text>
              <div className="buttonsWrapper">
                  <Button
                    className="mainButton" 
                    fontSize={18} 
                    padding="16px 43px"
                    style={{backgroundColor:"#FC4B15"}}
                    textTransform="uppercase"
                    id="download-now2_avs-video-screen-recorder"
                    href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                      {this.props.t("Download now")}</Button>
                    </div>
            </div>
          </PageContentWrapper>
        </div>
        </MainPageWrapper>
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoEditorSoftware);
