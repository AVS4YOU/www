import React from "react";

import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import {
    HeroSection
} from '../screens/avs-video-cutter'


const AvsVideoCutter = (props) => {

    return (
        <Layout
            className="avs-video-maker"
            pageContext={props.pageContext}
            t={props.t}
            title="AVS Video Cutter"
            metaDescription=""
            metaKeywords=""
            isTinyFooter
        >
            <HeroSection t={props.t}/>
        </Layout>
    );
};
export default withI18next({ns: "common"})(AvsVideoCutter);
