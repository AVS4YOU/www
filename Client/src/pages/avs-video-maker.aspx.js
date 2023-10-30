import React, {useEffect, useState} from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";


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
                showBanner={false}
            >
                Xikmat
            </Layout>
        );
};
export default withI18next({ns: "common"})(AvsVideoMaker);
