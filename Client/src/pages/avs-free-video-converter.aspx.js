import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import FreeFlag from '../components/free-flag';
import Layout from "../components/layout";
import "../styles/avs-video-converter.less";

import { AvsVideoConverterCommonContent } from '../containers/avs-video-converter-common-content';
import { AvsVideoConverterOtherContent } from '../containers/avs-video-converter-other-content';

const lang = ['de','en','es','fr','it','jp','ru']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

class avsFreeVideoConverter extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonVideoConverter")
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
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("Convert any video with AVS Free Video Converter for Windows")}
        metaDescription={this.props.t("AVS Free Video Converter converts video  files to all popular video formats MP4, DVD, MPEG, MOV, FLV and others absolutely free Download Free AVS Video Converter")}
        metaKeywords={this.props.t("free video converter, video to mp3, video converter, video download converter, video converter to mp4, avs video converter, avs4you, avs, avs converter, avs4u, video converter tool, video converter software, mp4 to mp3 converter, mp4 to avi converter, mp4 to 3gp converter, mp4 video converter, convert dvd, convert avi, convert mp4, convert wmv, convert mov, video file converter, dvd converter, convert mp4 to dvd, avi converter, video converting, video conversion")}
      >
        {isSomeLang(this.props.locale)
          ? <AvsVideoConverterOtherContent t={this.props.t} /> 
          : <AvsVideoConverterCommonContent t={this.props.t} />
        }
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsFreeVideoConverter);