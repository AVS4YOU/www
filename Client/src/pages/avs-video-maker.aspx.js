import React, {useEffect, useState} from "react";

import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import {HeroSection, ReviewsSection, GlobalStyles, AvsVideoMakerContainer} from '../screens/avs-video-maker'


const AvsVideoMaker = (props) => {
    const [isActive, setIsActive] = useState(true)

    const onResize = () => {
        setIsActive(window.innerWidth > 800)
    }
    useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, []);

    return (
        <Layout
            className="avs-video-maker"
            pageContext={props.pageContext}
            t={props.t}
            title="AVS Video Editor"
            metaDescription=""
            metaKeywords=""
            isTinyFooter
            headerIsDisabled={isActive}
        >
            <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap"
                  rel="stylesheet"></link>
            <GlobalStyles/>
            <HeroSection t={props.t}/>
            <AvsVideoMakerContainer>
                <ReviewsSection t={props.t} />
            </AvsVideoMakerContainer>
        </Layout>
    );
};
export default withI18next({ns: "common"})(AvsVideoMaker);
