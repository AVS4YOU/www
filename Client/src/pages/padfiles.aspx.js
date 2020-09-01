import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import Text from '../components/text';
import ImageGQL from '../components/image-gql';
import Button from "../components/button";
import TabIndex from '../components/table/';
import ScrollUpButton from '../components/scroll-up-button';
import { Link as ScrollLink } from "react-scroll";

class padFiles extends React.PureComponent {

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
            metaDescription={this.props.t("AVS4YOU is a suite of 5 professional multimedia programs to convert, edit and create audio and video. Use AVS4YOU freeware to work with image & document files.")}
            metaKeywords={this.props.t("avs video converter, avs4you, avs, avs converter, avs4u, video to mp3, video converter, mp4 converter, dvd converter, avi converter, wmv converter, avs video editor, avs editor, avs movie editor, video editor, video editing software, avs image converter, avs photo converter, image converter, image size converter, avs audio converter, audio converter, video to audio converter, m4a converter, mp3 converter, wav converter, avs audio editor, audio editor, audio editing software, omp3 editor, music editor, audio cutter")}
    >
      <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="pad_files_image.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body header__body_bg">
                <div className="header__body-wrapper">
                  <Text as="h1" className="header__heading">Pad files</Text>
                  <Text as="h3" className="header__subtitle" style={{padding: '0'}}>Use the following PAD files for all AVS4YOU programs</Text>
                  <ScrollLink to="padFilesTable" spy={true} smooth={true} offset={-70} duration={500} >
                  <Button className="header__button header__button_pad" style={{position:"center"}} textClassName="header__button-text" href="https://www.avs4you.com/pads/en/avsvideoconverter.xml">GET ALL PAD FILES</Button>
                  </ScrollLink>
                </div>
              </div>
            </div>
        </div>

        <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />

        <div id="padFilesTable">
          
        <TabIndex 
        data = {[{
          id: "Index",
          title: {
            hed:"Name",
          },
          dwn: {
            wrd:"PAD File",
          },
        },
          {
          id: 1,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoconverter.xml",
            hed:"AVS Video Converter",
            desc:"Convert to/ from video formats: MP4, DVD, AVI, WMV, MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc. fast and easily!",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoconverter.xml",
            wrd:"Download",
          },
        }, {
          id: 2,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsaudioconverter.xml",
            hed:"AVS Audio Converter",
            desc:"Convert audio between popular formats. Apply effects, customize output parameters, use batch mode",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsaudioconverter.xml",
            wrd:"Download",
          },
        }, {
          id: 3,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoeditor.xml",
            hed:"AVS Video Editor",
            desc:"Trim, cut, split, merge, rotate, mix videos. 300+ innovative effects, transitions, overlays",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoeditor.xml",
            wrd:"Download",
          },
        }, {
          id: 4,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsaudioeditor.xml",
            hed:"AVS Audio Editor",
            desc:"Create outstanding tracks for any purpose with our easy audio editing app for Windows",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsaudioeditor.xml",
            wrd:"Download",
          },
        }, {
          id: 5,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoremaker.xml",
            hed:"AVS Video ReMaker",
            desc:"Mighty production software for capturing and editing videos, and creating DVD and Blu-ray content",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoremaker.xml",
            wrd:"Download",
          },
        }, {
          id: 6,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsimageconverter.xml",
            hed:"AVS Image Converter",
            desc:"Share your photos, stories and adventures with Free AVS Image Converter",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsimageconverter.xml",
            wrd:"Download",
          },
        }, {
          id: 7,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsregistrycleaner.xml",
            hed:"AVS Registry Cleaner",
            desc:"Make your PC operate clean and fast with Free AVS Registry Cleaner",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsregistrycleaner.xml",
            wrd:"Download",
          },
        }, {
          id: 8,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsdisccreator.xml",
            hed:"AVS Disc Creator",
            desc:"Burn audio, video, images easily with Free AVS Disc Creator",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsdisccreator.xml",
            wrd:"Download",
          },
        }, {
          id: 9,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsphotoeditor.xml",
            hed:"AVS Photo Editor",
            desc:"Make your photos look stylish with Free AVS Photo Editor",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsphotoeditor.xml",
            wrd:"Download",
          },
        }, {
          id: 10,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsmediaplayer.xml",
            hed:"AVS Media Player",
            desc:"Watch video, play audio and view your pictures with Free AVS Media Player",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsmediaplayer.xml",
            wrd:"Download",
          },
        }, {
          id: 11,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsdocumentconverter.xml",
            hed:"AVS Document Converter",
            desc:"Convert documents between DOCX, PDF, RTF, TXT, HTML, etc. Work with text files and images without additional editing software.",
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsdocumentconverter.xml",
            wrd:"Download",
          },
        }]}/>

        </div>

        
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(padFiles);

