import React, {useState} from "react";
import Layout from "../components/layout";
import withI18next from "../components/withI18next";
import {FeaturesSection, GetStartedSection, HeroSection, SpecsSection, TrustSection} from "../screens/video-editing";

class VideoEditing extends React.PureComponent {

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
                title={this.props.t("AVS Video Editor")}
                metaDescription={this.props.t("Easy Video Software for Windows. Create compelling video content in a few clicks.")}
                metaKeywords={this.props.t("video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow")}
            >
                <HeroSection />
                <TrustSection />
                <FeaturesSection />
                <SpecsSection />
                <GetStartedSection />
            </Layout>
        );
    }
};
export default withI18next({ ns: "common" })(VideoEditing);
