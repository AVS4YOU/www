import React from "react";
import Layout from "../components/layout";
import withI18next from "../components/withI18next";

import {FeaturesSection} from "../components/featuresSection";
import {GetStartedSection} from "../components/getStartedSection";
import {HeroSection} from "../components/heroSection";
import {SpecsSection} from "../components/specsSection";
import {TrustSection} from "../components/trustSection";
import {MakeVideoSection} from "../components/makeVideoSection";
import {CreatorsSection} from "../components/creatorsSection";

class VideoEditing extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            device: "",
        };

        this.getDevice = this.getDevice.bind(this);
    }

    getDevice(device) {
        this.setState({device: device});
    }

    render() {
        return (
            <Layout
                getDevice={this.getDevice}
                pageContext={this.props.pageContext}
                t={this.props.t}
                title={this.props.t("AVS Video Editor")}
                metaDescription={this.props.t("Easy Video Software for Windows. Create compelling video content in a few clicks.")}
                metaKeywords={this.props.t("video editor, video editing software, video editing, download video editor, avs video editor, avs editor, avs movie editor, video editing tips,  windows movie maker, video editor app, edit video, edit video on iphone, cut video, download edit video, video edit software, mp4 editor, movie maker software, create video slideshow")}
            >
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <HeroSection/>
                <TrustSection/>
                <FeaturesSection/>
                <MakeVideoSection/>
                <CreatorsSection/>
                <SpecsSection/>
                <GetStartedSection/>
            </Layout>
        )
    }
}
export default withI18next({
    ns: "common"
})(VideoEditing);
