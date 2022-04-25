import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";

import { AvsVideoEditorCommonContent } from '../containers/avs-video-editor-common-content';
import { AvsVideoEditorOtherContent } from '../containers/avs-video-editor-other-content';

const lang = ['de','en','es','fr','it','jp','ru']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

class AvsVideoEditor extends React.PureComponent {

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
        title={this.props.t("AVS Video Editor - easy video editing software for Windows")}
        metaDescription={this.props.t("AVS Video Editor is an easy video editing program Create, edit video, capture video make a video slideshow cut, merge, trim video files save to any format")}
        metaKeywords={this.props.t("video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow")}
      >
         {isSomeLang(this.props.locale)
          ? <AvsVideoEditorOtherContent t={this.props.t} /> 
          : <AvsVideoEditorCommonContent t={this.props.t} />
        }
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(AvsVideoEditor);