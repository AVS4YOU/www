import React from "react";
import styled from "styled-components";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import {HeroSection, ProductsSection, FeaturesSection} from "../screens/avs-special-offer-autumn";


class SpecialOffer extends React.PureComponent {
    render() {
        return (
            <Layout
                className="special-offer"
                pageContext={this.props.pageContext}
                t={this.props.t}
                title="AVS4YOU Special offer"
                metaDescription=""
                metaKeywords=""
                isTinyFooter
                headerIsDisabled
            >
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap"
                      rel="stylesheet"></link>
                <HeroSection />
                <ProductsSection/>
                <FeaturesSection/>
            </Layout>
        );
    }
};
export default withI18next({ns: "common"})(SpecialOffer);
