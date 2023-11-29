import React from "react";

import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import {FeaturesSection, ReviewsSection, HeroSection} from "../screens/avs-video-editor-imovie";

const AvsVideoEditorImovie = ({pageContext, t}) => {
    return (
        <Layout
            className="avs-video-editor"
            pageContext={pageContext}
            t={t}
            title="AVS Video Editor"
            metaDescription=""
            metaKeywords=""
            isTinyFooter
        >
            <HeroSection t={t}/>
            <FeaturesSection t={t}/>
            <ReviewsSection t={t}/>
        </Layout>
    )
}

export default withI18next({ns: "common"})(AvsVideoEditorImovie);
