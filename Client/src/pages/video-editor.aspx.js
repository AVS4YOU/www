import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import styled from 'styled-components';
import Star from '../images/main-page/icons/star.svg';
import { Link as GatsbyLink } from 'gatsby';
import Button from '../components/button';

import awardCapterra from '../images/main-page/awards/award-capterra.png'
import awardGetapp from '../images/main-page/awards/award-getapp.png'
import awardPick from '../images/main-page/awards/award-epick.png'
import awardSoftChecker from '../images/avs-video-editor/award-softchecker.svg'
import awardRating from '../images/avs-video-editor/award-rating.png'

import backgroundVELanding from "../images/avs-video-editor-landing/background-ve-landing.png";
import tabletVELanding from "../images/avs-video-editor-landing/bg-landing-ve-tablet.svg";
import mobileVELanding from "../images/avs-video-editor-landing/bg-landing-ve-mobile.svg";
import VELanding from "../images/avs-video-editor-landing/avs-video-editor-landing.svg";
import MobileVELanding from "../images/avs-video-editor-landing/mobile-landing-video-editor.svg";
import grayLogo from "../images/installed-pack/logo-gray.png";

const StyledVideo = styled.div`

.avs-logo{
  background-image: url(${grayLogo});
  display: block;
  position: absolute;
  top: 14px;
  left: 10px;
  width: 78px;
  height: 43px;
  z-index: 2;
}

.headerBackground{
  background: linear-gradient(180deg, #FFFFFF 0%, #EAF3F7 100%);
}

#IDheaderContentWrapper{
  max-width: 1347px;
  position: relative;
  z-index: 2;
}

.headerBackgroundImage{
  background-image: url(${backgroundVELanding});
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-position-x: 100%;
  position: absolute; 
  z-index: 1;
}

.headerButtonsWrapper {
  padding-top: 30px;
}

.headerContentWrapper{
  padding-top: 80px;
  max-width: 1200px;
  display: table;
  margin: auto;
  vertical-align: middle;
}

.headerDescription {
  margin-bottom: 50px;
}

.landingImageMobile {
  display: none;
}

.titleDescription {
  padding-top: 64px;
  padding-bottom: 32px;
  text-align: center;
}

.headerText {
  padding-bottom: 24px;
  letter-spacing: 0.68px;
}

.landingImage {
  background-image: url(${VELanding});
  background-size: contain;
  background-repeat: no-repeat;
  display: table-cell;
  background-position: 50%;
  height: 100%;
  position: relative;
  z-index: 2;
  left: 50px;
}

.textLanding {
  width: 50%;
  display: table-cell;
}

.ListItem{
  padding-left: 20px;
  padding-bottom: 10px;
  position:relative;
  color:#000000;
  font-weight: 500;

  &>span{
      display:block;
      font-weight:bold;
      font-size:19px;
  }

  &:before{
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background-color: #1E72D2;
      position: absolute;
      left:0;
      top: 10px;
  }
}

.tableUsers {
  display: table-row;
}

.tableName {
  display: table-cell;
  max-width: 10%;
  padding: 15px 0;
  border-bottom: 1px solid #CCCCCC;
}

.tableText {
  display: table-cell;
  padding: 10px 15px 0;
  border-bottom: 1px solid #CCCCCC;
}

.block-awards {
  padding: 30px 0;
}

  .item-1 {
    width: 109px;
    height: 62px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${awardCapterra});
  }

  .item-2 {
    height: 62px;
    width: 109px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${awardSoftChecker});
  }

  .item-3 {
    height: 62px;
    width: 109px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${awardGetapp});
  }

  .item-4 {
    height: 62px;
    width: 109px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${awardPick});
  }

  .item-5 {
    height: 62px;
    width: 109px;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${awardRating});
  }


  .imgWrapper{
    height:12px;
    width:100px;
    margin:auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-bottom: 10px;

    &>img {
        height:12px;
        width: 12px;
        margin: auto;
    }
  }

@media (max-width: 1700px) {
  .headerBackgroundImage{
    background-image: url(${tabletVELanding});
  }

  #IDheaderContentWrapper{
    max-width: 900px;
  }

  .headerBlock {
    width: 70%;
  }

  .ListItem {
    width: 90%;
  }

  .landingImage {
    display: none;
  }

  .mobileFormWrapper {
    margin: 34px 0;
  }

  .landingImageMobile {
    background-image: url(${VELanding});
    display: block;
    height: 273px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 50px;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 150px;
    z-index: 2;
  }

  .headerContentWrapper{
    display: block;
    padding: 100px 0 0 20px;
    margin: 0;
  }
}

@media (max-width: 1125px) {
  .headerBlock {
    width: 60%;
  }

  .headerText {
    font-size: 48px;
  }
}

@media (max-width: 1024px) {
  .headerContentWrapper{
    display: block;
    padding: 100px 16px 0;
  }

  .headerBlock {
    width: 50%;
  }
}

@media (max-width: 700px) {
  .headerBackgroundImage {
    background-position-x: 110%;
  }
}

@media (max-width: 500px) {

  #IDheaderContentWrapper {
    position: static;
  }

  .textLanding {
    display: block;
    width: 100%;
  }

  .mobileFormWrapper {
    margin: auto;
    padding-top: 30px;
  }

  .checkBoxWrapper {
    p {
      color: #000000;
    }
  }

  .headerContentWrapper{
    padding: 100px 16px 0;
  }

  .landingImage {
    display: none;
  }

  .headerBlock {
    width: 100%;
  }

  .landingImageMobile {
    background-image: url(${MobileVELanding});
    display: block;
    height: 195px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
    top: 100px;
    left: 0;
    position: relative;
    padding-top: 200px;
  }

  .headerText {
    text-align: center !important;
  }

  .headerDescription {
    text-align: center !important;
  }

  .headerBackgroundImage{
    background-image: url(${mobileVELanding});
    width: 100vw;
    background-size: contain;
    height: 1100px;
    top: -150px;
    background-position-x: 100%;
  }

  .item-1 {
    width: 68px;
    height: 39px;
  }

  .item-2 {
    height: 39px;
    width: 39px;
  }

  .item-3 {
    height: 39px;
    width: 51px;
  }

  .item-4 {
    height: 39px;
    width: 39px;
  }

  .item-5 {
    height: 39px;
    width: 46px;
  }

  .headerButtonsWrapper {
    margin: auto;
  }
}
`;

const StyledButton = styled.div`
  margin-top: 20px;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

class avsVideoEditor extends React.PureComponent {

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
        title={this.props.t("AVS Video Editor - easy video editing software for Windows")}
       >
        <StyledVideo>
          <ProductPagesWrapper>
            <div className="headerBackground">
              <div className="headerBackgroundImage"> </div>
              <div className="landingImageMobile"></div>
                <div id="IDheaderContentWrapper" className="headerContentWrapper" >
                  <div className="textLanding">
                  <div className="headerBlock">
                  <GatsbyLink id="home_video-editor" className="avs-logo" to="/"></GatsbyLink>
                  <Text color="#000000" align="left" className="headerText" id="IdheaderText" lineHeight="76px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video Editor")}</Text>
                  <Text color="#000000" align="left" className="headerDescription" lineHeight="32px" fontSize={24} fontWeight={400} as="h5">{this.props.t("Simple Video Editor for Windows")}</Text>

                          <Text className="ListItem" color="#000000" fontWeight={500}>{this.props.t("Cut, trim, crop, merge, rotate video files")}</Text>
                          <Text className="ListItem" color="#000000" fontWeight={500}>{this.props.t("Capture screen, record video from webcams")}</Text>
                          <Text className="ListItem" color="#000000" fontWeight={500}>{this.props.t("Super fast with GPU acceleration")}</Text>
                          <Text className="ListItem" color="#000000" fontWeight={500}>{this.props.t("150+ Supported formats")}</Text>
                          <Text className="ListItem" color="#000000" fontWeight={500}>{this.props.t("300+ Effects and transitions")}</Text>
                      </div>
                      <div>
                        <StyledButton>
                          <Button style={{padding:"15px 40px"}}
                            href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                            secondaryText="Windows 11/10/8/7/Vista/XP"
                            backgroundColor="orange"
                            mainPadding="12px 37px"
                            margin="0"
                            textTransform="uppercase"
                                  id="download-now_video-editor"
                          >
                            {this.props.t("dwnld")}
                          </Button>
                        </StyledButton>
                    </div>

                    <Text color="#000000" align="left" className="titleDescription" lineHeight="32px" fontSize={18} fontWeight={700} as="h5">{this.props.t("Trusted by 10 000 000 users worldwide")}</Text>
                    <div className="tableUsers">
                      <div className="tableName">
                        <div className="imgWrapper">
                            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/>
                        </div>
                        <Text color="#737373" style={{paddingLeft:"5px"}} align="left" lineHeight="12px" fontSize={12} fontWeight={400}>{this.props.t("Mike W.")}</Text>
                      </div>
                      <div className="tableText">
                        <Text color="#333333" align="left" lineHeight="22px" fontSize={14} fontWeight={400}>{this.props.t("I like AVS Video Editor because of the simplicity of making seamless videos from a variety of formats into one cohesive video")}.</Text>
                      </div>
                      </div>

                      <div className="tableUsers">
                      <div className="tableName">
                        <div className="imgWrapper">
                            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/>
                        </div>
                        <Text color="#737373" style={{paddingLeft:"5px"}} align="left" lineHeight="12px" fontSize={12} fontWeight={400}>{this.props.t("Dean S.")}</Text>
                      </div>
                      <div className="tableText">
                        <Text color="#333333" align="left" lineHeight="22px" fontSize={14} fontWeight={400}>{this.props.t("I enjoy how easy it is to manipulate the video to fit the screen by rotating-zooming-trimming and changing the speed")}.</Text>
                      </div>
                      </div>

                      <div className="tableUsers">
                      <div className="tableName">
                        <div className="imgWrapper">
                            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/>
                        </div>
                        <Text color="#737373" style={{paddingLeft:"5px"}} align="left" lineHeight="12px" fontSize={12} fontWeight={400}>{this.props.t("Dann H.")}</Text>
                      </div>
                      <div className="tableText">
                        <Text color="#333333" align="left" lineHeight="22px" fontSize={14} fontWeight={400}>{this.props.t("AVS4You is the easiest and fastest way that will provide a more professional presentation of what I want")}.</Text>
                      </div>
                      </div>

                      <div className="tableUsers">
                      <div className="tableName">
                        <div className="imgWrapper">
                            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt="star"/>
                        </div>
                        <Text color="#737373" style={{paddingLeft:"5px"}} align="left" lineHeight="12px" fontSize={12} fontWeight={400}>{this.props.t("Devon R.")}</Text>
                      </div>
                      <div className="tableText">
                        <Text color="#333333" align="left" lineHeight="22px" fontSize={14} fontWeight={400}>{this.props.t("I will recommend AVS to everyone I know because it's reliable and easy to understand and get the work done")}.</Text>
                      </div>
                    </div>
                    
                    <div className="block-awards">
                        <div>
                          <div className="awards-item item-1"></div>
                          <div className="awards-item item-2"></div>
                          <div className="awards-item item-3"></div>
                          <div className="awards-item item-4"></div>
                          <div className="awards-item item-5"></div>
                        </div>
                    </div> 
                    </div>
                    <div className="landingImage"></div>
                </div> 
              </div>
          </ProductPagesWrapper>
        </StyledVideo>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoEditor);
