import React from "react";
import styled from "styled-components";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import {HeroSection, ProductsSection, FeaturesSection} from "../screens/avs-special-offer-autumn";

import leaf1 from '../images/avs-special-offer-autumn/leaf1.png'
import leaf2 from '../images/avs-special-offer-autumn/leaf2.png'
import leaf3 from '../images/avs-special-offer-autumn/leaf3.png'
import leaf4 from '../images/avs-special-offer-autumn/leaf4.png'
import leaf5 from '../images/avs-special-offer-autumn/leaf5.png'
import leaf6 from '../images/avs-special-offer-autumn/leaf6.png'
import leaf7 from '../images/avs-special-offer-autumn/leaf7.png'
import leaf8 from '../images/avs-special-offer-autumn/leaf8.png'

const SpecialOfferWrapper = styled.div`
  position: relative;
`

const SpecialOfferLeaf = styled.img`
    
`


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
            >
                <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap"
                      rel="stylesheet"></link>
                <SpecialOfferWrapper>
                    <HeroSection/>
                    <ProductsSection/>
                    <FeaturesSection/>
                    <SpecialOfferLeaf src={leaf1} />
                </SpecialOfferWrapper>
            </Layout>
        );
    }
};
export default withI18next({ns: "common"})(SpecialOffer);
