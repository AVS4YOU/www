import React from "react";
import withI18next from "../components/withI18next";
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
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonVideoEditor")
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
        title={this.props.t("AVS Video Editor - easy video editing software for Windows")}
        metaDescription={this.props.t("AVS Video Editor is an easy video editing program Create, edit video, capture video make a video slideshow cut, merge, trim video files save to any format")}
        metaKeywords={this.props.t("video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow")}
      >
         {isSomeLang(this.props.locale)
          ? <AvsVideoEditorOtherContent t={this.props.t} locale={this.props.locale} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} hrefButton={this.state.hrefButton} /> 
          : <AvsVideoEditorCommonContent t={this.props.t} locale={this.props.locale} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} hrefButton={this.state.hrefButton} />
        }
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(AvsVideoEditor);