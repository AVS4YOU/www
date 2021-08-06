import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
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
import ScrollUpButton from '../components/scroll-up-button';
import styled from 'styled-components';
import Button from "../components/button";
import Marker from "../images/avs-audio-editor-3d/Vector_3d.svg"
import ImgAllKey from "../images/avs-audio-editor-3d/all_key_3d.svg";
import ImgRec from "../images/avs-audio-editor-3d/sound_rec_3d.svg";
import ImgMixes from "../images/avs-audio-editor-3d/mixes_3d.svg";
import ImgTxt from "../images/avs-audio-editor-3d/text_to_speach_3d.svg";


//https://www.figma.com/file/Cur57xzfvHJz8Rbn91GByv/Untitled?node-id=1%3A1241
//avs-audio-editor-3d.aspx
//https://nct.onlyoffice.com/Products/Files/DocEditor.aspx?fileid=132395
const StyledAudio = styled.div`
#IDheaderContentWrapper{
  width: 100%;
  margin: 0;
  max-width: 1347px;
}

#IdheaderContentWrapper{
    padding-top: 105px;
    padding-bottom: 5px;
    margin: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: center;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: flex-end;
    justify-content: space-between;
    .ButtonAudio3dDwn{
      margin-left: 25px;
    }
}

#sheaderContentWrapper{
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.hrAudio{
  border: 1px solid #CACACA;
}

.HeaderListItemTable{
        display:inline-flex;
    .HeaderListItem{
        padding-left: 40px;
        display: table-column;
        align-items: center;
        font-weight: 600;
    }
    .HeaderListItem35{
        display: table-column;
        align-items: center;
        font-weight: 600;
    }
    .ListItem{
      padding-left: 30px;
        padding-bottom: 10px;
        position:relative;
        list-style-type: none;
        &>span{
            display:block;
        }
        &:before{
            content: '';
            width: 20px;
            height: 20px;
            background-image: url(${Marker});
            background-repeat: no-repeat;
            position: absolute;
            left: 5px;
            top: 10px;
        }   
    }   
}

.workFormats{
  padding-top: 128px;
  padding-bottom: 80px;
  margin: 0 auto;
  max-width: 1180px;
  #workFormatsItemId{
    flex-direction: column;
    margin: 0 10px;
    max-width: 252px;
    padding: 0 10px;
    #workFormatsTextH{
        height: 56px;
      }
  }
  .workFormatsItem{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .workFormatsIt{
      max-width: 252px;
      padding: 0 10px;
    }
    .workFormatsImage{
      width: 64px;
      margin: 0 auto;
      margin-bottom: 37px;
    }
  }
}

.workWithFormats{
  padding-bottom: 120px;
  padding-top: 120px;
  background-color: #F5F3FF;
  #IdheaderText{
    max-width: 1200px;
    margin: 0 auto;
  }
  .idworkFormats{
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    .idworkFormatsImage{
      width: 274px;
      margin: 0 10px;
    }
  }
}

.buyFooter{
  padding-bottom: 60px;
  padding-top: 0px;
  background-color: #F5F3FF;
  .buyAudio3D{
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    .buyAudio3DFlex{
      max-width: 551px;
    }
  }
}

.Slider{
  height: 300px;
}

.AudioEdit3d{
  width:388px;
  top: -35px;
}
`;

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
      <StyledAudio>
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="main_image_audio_3d.png" style={{position: "absolute"}}/>
            <PageContentWrapper>
            <div id="IDheaderContentWrapper" className="headerContentWrapper" >   
              <Text color="#64AAFD" align="left" className="headerText" id="IdheaderText" lineHeight="45px" fontSize={34} fontWeight={700} as="h1">{this.props.t("AVS Audio Editor")}</Text>
              <Text color="#ffffff" align="left" className="headerDescription"  lineHeight="64px" fontSize={51} fontWeight={700} as="h5">{this.props.t("Easily manage your audio collection - just in minutes ")}</Text>  
                <div id="IdheaderContentWrapper" className="headerContentWrapper" >
                    <span>
                      <pre><Text color="#ffffff" align="left" lineHeight="17px" fontSize={14} fontWeight={400}>In stock</Text></pre>
                      <Text color="#ffffff" align="left" lineHeight="57px" fontSize={48} fontWeight={700}>$ 59.00</Text>
                    </span>
                    <div>
                      <Button 
                        className="ButtonAudio3dBuy" 
                        padding={"18px 72px"} 
                        href={"/"} 
                        fontSize="16px">BUY</Button>
                      <Button 
                        className="ButtonAudio3dDwn" 
                        padding={"18px 25px"} 
                        href={"/"} 
                        backgroundColor={"none"} 
                        color={"white"} 
                        fontSize="16px" 
                        border="1px solid #ffffff" 
                        backgroundColorHover="none">Download now</Button>
                    </div>    
                  </div>
                  <div id="sheaderContentWrapper" className="headerContentWrapper" >
                    <hr className="hrAudio"/>   
                    <Text color="#ffffff" align="left" className="headerText" lineHeight="26px" fontSize={14} fontWeight={400} as="p">{this.props.t("For Windows 10, 8.1, 8, 7 / XP, 2003 / Vista")}</Text>
                    <Text color="#ffffff" align="left" className="headerText" lineHeight="24px" fontSize={24} fontWeight={500} as="h4">{this.props.t("Easily manage your audio collection - just in minutes ")}</Text>   
                    <div className="HeaderListItemTable">
                      <div className="HeaderListItem35">
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("All key audio formats supported")}</Text>
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("Waveform & spectral view")}</Text>
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("Trim, cut, split, merge, rotate")}</Text>
                      </div>
                      <div className="HeaderListItem">
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("Plenty of sound effects")}</Text>
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("Record audio from various inputs")}</Text>
                        <Text className="ListItem" color="#ffffff" lineHeight="36px" fontSize={18} fontWeight={400}>{this.props.t("Export or burn audio CD")}</Text>
                      </div>
                    </div>
                  </div>
              </div> 
            </PageContentWrapper>
          </div>

          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />

          <div className="workFormats">
            <Text color="#0943B4" align="center" className="headerText" id="IdheaderText" lineHeight="38px" fontSize={38} fontWeight={700} as="h4">{this.props.t("Work with all formats")}</Text>
            <div className="workFormatsItem" style={{alignItems:"flex-end"}}>
              <img src={ImgAllKey} className="workFormatsImage"/>
              <img src={ImgRec} className="workFormatsImage"/>
              <img src={ImgMixes} className="workFormatsImage"/>
              <img src={ImgTxt} className="workFormatsImage"/>
            </div>
            <div className="workFormatsItem" style={{alignItems:"flex-start"}}>
              <div className="workFormatsItem" id="workFormatsItemId">
                <Text color="#32393E" align="center" id="workFormatsTextH" lineHeight="23px" fontSize={19} fontWeight={700} >{this.props.t("All key audio and video formats")}</Text>
                <Text color="#32393E" align="center" id="workFormatsText" lineHeight="27px" fontSize={16} fontWeight={400} >{this.props.t("Edit & save audio files in MP3, WMA, WAV, M4A, AMR, OGG, FLAC, MP2. Export audio from video files MP4, DVD, AVI, VOB, WMV, 3GP, MOV, MKV, HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K.")}</Text>
              </div>
              <div className="workFormatsItem" id="workFormatsItemId">
                <Text color="#32393E" align="center" id="workFormatsTextH" lineHeight="23px" fontSize={19} fontWeight={700} >{this.props.t("Sound recording")}</Text>
                <Text color="#32393E" align="center" id="workFormatsText" lineHeight="27px" fontSize={16} fontWeight={400} >{this.props.t("Record voice and sound from any source: sound cards, microphone, Line In, Vinyl records, etc.")}</Text>
              </div>
              <div className="workFormatsItem" id="workFormatsItemId">
                <Text color="#32393E" align="center" id="workFormatsTextH" lineHeight="23px" fontSize={19} fontWeight={700} >{this.props.t("Creating amazing mixes")}</Text>
                <Text color="#32393E" align="center" id="workFormatsText" lineHeight="27px" fontSize={16} fontWeight={400} >{this.props.t("Mix as many audio tracks as you want. Adjust volume and balance to achieve a clearer sound.")}</Text>
              </div>
              <div className="workFormatsItem" id="workFormatsItemId">
                <Text color="#32393E" align="center" id="workFormatsTextH" lineHeight="23px" fontSize={19} fontWeight={700} >{this.props.t("Text-to-speech")}</Text>
                <Text color="#32393E" align="center" id="workFormatsText" lineHeight="27px" fontSize={16} fontWeight={400} >{this.props.t("Turn written text into a natural sounding voice with a single click, save it in a popular audio format that can be played on any device.")}</Text>
              </div>
            </div>
         </div>

          <div className="workWithFormats">
            <Text color="#0943B4" align="center" className="headerText" id="IdheaderText" lineHeight="38px" fontSize={38} fontWeight={700} as="h1">{this.props.t("Cut, trim, split and merge audio files")}</Text>
            <Text color="#32393E" align="center" className="headerText" id="IdheaderText" lineHeight="26px" fontSize={18} fontWeight={700} style={{maxWidth:"1000px"}}>{this.props.t("Easily rearrange any audio track to fit any duration by cutting out unnecessary parts with Cut and Trim options. Split an audio file by setting markers automatically or manually. Use timeline for maximum precision.")}</Text>
            <div className="idworkFormats">
              <div className="idworkFormatsImage">
                <ImageGQL imageName="CUT_3d.png" className="workFormatsImage"/>
                <Text color="#32393E" align="center" lineHeight="45px" fontSize={16} fontWeight={700} as="h1">{this.props.t("Cut")}</Text>
              </div>
              <div className="idworkFormatsImage">
              <ImageGQL imageName="TRIM_3d.png" className="workFormatsImage"/>
                <Text color="#32393E" align="center"  lineHeight="45px" fontSize={16} fontWeight={700} as="h1">{this.props.t("Trim")}</Text>
              </div>
              <div className="idworkFormatsImage">
              <ImageGQL imageName="SPLIT_3d.png" className="workFormatsImage"/>
                <Text color="#32393E" align="center" lineHeight="45px" fontSize={16} fontWeight={700} as="h1">{this.props.t("Split")}</Text>
              </div>
              <div className="idworkFormatsImage">
              <ImageGQL imageName="MERGE_3d.png" className="workFormatsImage"/>
              <Text color="#32393E" align="center"  lineHeight="45px" fontSize={16} fontWeight={700} as="h1">{this.props.t("Join")}</Text>
              </div>
            </div>
          </div>

          <div className="Slider">

          </div>

          <div  className="buyFooter">
           <div className="buyAudio3D">
              <ImageGQL imageName="Audio-Edit-3d.png" className="AudioEdit3d"/>
              <div className="buyAudio3DFlex">
              
                <Text color="#0943B4" align="left" className="headerText" id="IdheaderText" lineHeight="45px" fontSize={34} fontWeight={700} as="h1">{this.props.t("Become an expert in Audio Editing right now")}</Text>
                <div className="buyAudio3DFlexN">
                      <Button padding={"18px 72px"} href={"/"} fontSize="16px">BUY</Button>
                      <Button padding={"18px 25px"} href={"/"} backgroundColor={"none"} color={"#232C33"} border="1px solid #232C33" background="#ffffff" style={{marginLeft: "60px"}} fontSize="16px">Download now</Button>
                </div> 
                <Text color="#232C33" align="left" className="headerText" id="IdheaderText" lineHeight="26px" fontSize={14} fontWeight={400} style={{marginTop: "20px"}} >{this.props.t("For Windows 10, 8.1, 8, 7 / XP, 2003 / Vista")}</Text>

              </div>
            </div>
          </div>
         
        </ProductPagesWrapper>
      </StyledAudio>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsAudioEditor);