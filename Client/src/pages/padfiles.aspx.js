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
            metaDescription={this.props.t("")}
            metaKeywords={this.props.t("")}
    >
      <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="pad_files_image.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body header__body_bg">
                <div className="header__body-wrapper">
                  <Text as="h1" className="header__heading">{this.props.t("Pad files")}</Text>
                  <Text as="h3" className="header__subtitle" style={{padding: '0'}}>{this.props.t("Use the following PAD files for all AVS4YOU programs")}</Text>
                  <ScrollLink to="padFilesTable" spy={true} smooth={true} offset={-70} duration={500} >
                  <Button className="header__button header__button_pad" style={{position:"center"}} textClassName="header__button-text" href="https://www.avs4you.com/pads/en/avsvideoconverter.xml">{this.props.t("GET ALL PAD FILES")}</Button>
                  </ScrollLink>
                </div>
              </div>
            </div>
        </div>

        <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />

        <div id="padFilesTable">
          
        <TabIndex 
         headerTable={this.props.t("PAD Files Download Center")}
         footerTable={this.props.t("Use our graphics/product description fully or in parts, as you like Upon request we will create custom banners for you Drop us a line")}
         hrefTable={("affiliates@avs4you.com")}
        data = {[{
          id: this.props.t("Index"),
          title: {
            hed:this.props.t("Name"),
          },
          dwn: {
            wrd:this.props.t("PAD File"),
          },
        },
          {
          id: 1,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoconverter.xml",
            hed:this.props.t("AVS Video Converter"),
            desc:this.props.t("Convert to from video formats MP4, DVD, AVI, WMV, MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc fast and easily"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoconverter.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 2,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsaudioconverter.xml",
            hed:this.props.t("AVS Audio Converter"),
            desc:this.props.t("Convert audio between popular formats Apply effects, customize output parameters, use batch mode"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsaudioconverter.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 3,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoeditor.xml",
            hed:this.props.t("AVS Video Editor"),
            desc:this.props.t("Trim, cut, split, merge, rotate, mix videos 300+ innovative effects, transitions, overlays"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoeditor.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 4,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsaudioeditor.xml",
            hed:this.props.t("AVS Audio Editor"),
            desc:this.props.t("Create outstanding tracks for any purpose with our easy audio editing app for Windows"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsaudioeditor.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 5,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsvideoremaker.xml",
            hed:this.props.t("AVS Video ReMaker"),
            desc:this.props.t("Mighty production software for capturing and editing videos, and creating DVD and Blu-ray content"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsvideoremaker.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 6,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsimageconverter.xml",
            hed:this.props.t("AVS Image Converter"),
            desc:this.props.t("Share your photos, stories and adventures with Free AVS Image Converter"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsimageconverter.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 7,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsregistrycleaner.xml",
            hed:this.props.t("AVS Registry Cleaner"),
            desc:this.props.t("Make your PC operate clean and fast with Free AVS Registry Cleaner"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsregistrycleaner.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 8,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsdisccreator.xml",
            hed:this.props.t("AVS Disc Creator"),
            desc:this.props.t("Burn audio, video, images easily with Free AVS Disc Creator"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsdisccreator.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 9,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsphotoeditor.xml",
            hed:this.props.t("AVS Photo Editor"),
            desc:this.props.t("Make your photos look stylish with Free AVS Photo Editor"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsphotoeditor.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 10,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsmediaplayer.xml",
            hed:this.props.t("AVS Media Player"),
            desc:this.props.t("Watch video, play audio and view your pictures with Free AVS Media Player"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsmediaplayer.xml",
            wrd:this.props.t("Download"),
          },
        }, {
          id: 11,
          title: {
            hr:"https://www.avs4you.com/pads/en/avsdocumentconverter.xml",
            hed:this.props.t("AVS Document Converter"),
            desc:this.props.t("Convert documents between DOCX, PDF, RTF, TXT, HTML, etc Work with text files and images without additional editing software"),
          },
          dwn: {
            hrf:"https://www.avs4you.com/pads/en/avsdocumentconverter.xml",
            wrd:this.props.t("Download"),
          },
        }]}/>

        </div>

        
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(padFiles);

