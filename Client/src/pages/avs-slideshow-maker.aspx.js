import React from "react";
import Layout from "../components/layout";
import withI18next from "../components/withI18next";
import {HeroSection, ReviewsSection, StepsSection, SpecsSection, PowerSection, FeaturesSection} from "../screens/avs-slideshow-maker";

class AvsSlideshowMaker extends React.PureComponent {

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
                isTinyFooter
                headerIsDisabled
            >
                <HeroSection t={this.props.t} />
                <StepsSection t={this.props.t} />
                <FeaturesSection t={this.props.t} />
                <SpecsSection t={this.props.t} />
                <PowerSection t={this.props.t} />
                <ReviewsSection t={this.props.t} />
            </Layout>
        )
    }
}
export default withI18next({
    ns: "common"
})(AvsSlideshowMaker);