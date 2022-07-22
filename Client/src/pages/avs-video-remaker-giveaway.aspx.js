import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Button from '../components/button';
import Form from '../components/form-giveaway';
import ImageGQL from '../components/image-gql';

import backDots from "../images/giveaway/back-dots.svg";
import orangeLine from "../images/giveaway/orange-line.svg";
import blueLogo from "../images/giveaway/logo.svg";

const StyledVideo = styled.div`

.avs-logo{
  background-image: url(${blueLogo});
  display: block;
  position: absolute;
  top: 14px;
  left: 38px;
  width: 65px;
  height: 37px;
  z-index: 2;
}

.headerBackground{
  width:100%;
  display: flex;
  border-left: 8px solid #F8CECA;
}

.headerText {
  max-width: 584px;
  z-index: 10;
  position: relative;
  padding-top: 120px;
  padding-left: 81px;
  padding-bottom: 0px !important;
}

.headerTextLine {
  z-index: 10;
  position: relative;
  padding-left: 81px;
  padding-bottom: 91px !important;
  background-image: url(${orangeLine});
  background-repeat: no-repeat;
  background-position-x: 73px;
  background-position-y: 32px;
}

.imageBackground {
  background: #FEE9E7;
  background-image: url(${backDots});
  width: 100%;
  background-repeat: no-repeat;
}

.bgImageGiveaway {
  width: 100%;
  background-repeat: no-repeat;
  background-position-y: 100%;
  z-index: 2;
  position: relative;
  background-size: contain;
  padding-bottom: 40px;
}

.headerButtonsWrapper {
  padding-top: 30px;
}

.headerContent{
  margin: auto;
  vertical-align: middle;
  min-width: 50%;
  position: relative;
  z-index: 2;
}

  .headerMobile {
    display: none;
  }

@media (min-width: 1921px) {

  .bgImageGiveaway {
    height: 100vh;

    img {
      height: auto;
    }
  }
}

@media (max-width: 768px) {
    .headerBackground {
        display: block;
    }

    .imageBackground {
        background: #FFFFFF;
    }

    .headerMobile {
      display: block;
      max-width: 580px;
      margin: auto;
    }
  
    .headerRight {
      display: none;
    }

    .bgImageGiveaway {
      margin-top: 40px;
    }

    .headerTextLine {
      padding-bottom: 30px !important;
      padding-left: 40px;
      background-position-x: 35px;
      background-position-y: 35px;
    }

    .headerText {
      padding-left: 40px;
    }
}

@media (max-width: 500px) {

  .checkBoxWrapper {
    p {
      color: #000000;
    }
  }

  .headerBackground {
    border-top: 8px solid #F8CECA;
    border-left: none;
  }

  .headerMobile {
    padding: 20px;
  }

  .bgImageGiveaway {
    margin-top: 40px;
  }

  .avs-logo {
    left: 20px;
  }

  .headerText {
    font-size: 29px;
    padding-top: 90px;
    padding-left: 0px;
  }

  .headerTextLine {
    padding-bottom: 0px !important;
    font-size: 29px;
    background-position: 0px 17px;
    background-size: 140px;
    padding-left: 0px;
  }
}
`;


class avsVideoRemakerGiveaway extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);

  }

  getDevice(device) {
    this.setState({ device: device });
  }

  render() {

    return (
      <Layout
        headerIsDisabled={true}
        getDevice={this.getDevice}
        pageContext={this.props.pageContext}
        t={this.props.t}
        title={this.props.t("AVS Video ReMaker - cut out the scenes without reconverting video files")}
       >
        <StyledVideo>
          <ProductPagesWrapper>
            <div className="headerBackground">
            <GatsbyLink className="avs-logo" to="/"></GatsbyLink>
            <div className="headerMobile">
                    <Text className="headerText" color="#181C47" fontSize={54} fontWeight={900}>AVS Video ReMaker</Text>
                    <Text className="headerTextLine" color="#181C47" fontSize={54} fontWeight={900}>Giveaway</Text>
              </div>
              <div className="headerContent">
                  <Form
                    nameAuthor={this.props.t("Name")}
                    emailAddressText={this.props.t("Email address")}
                    buttonTextSend={this.props.t("Get Free License")}
                  />
              </div> 
              <div className="imageBackground">
                  <div className="headerRight">
                    <Text className="headerText" color="#181C47" fontSize={54} fontWeight={900}>AVS Video ReMaker</Text>
                    <Text className="headerTextLine" color="#181C47" fontSize={54} fontWeight={900}>Giveaway</Text>
                </div>
              <ImageGQL className="bgImageGiveaway" imageName="background-giveaway.png"/>
                </div>
            </div>
          </ProductPagesWrapper>
        </StyledVideo>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoRemakerGiveaway);