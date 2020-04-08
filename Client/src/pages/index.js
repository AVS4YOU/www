import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import styled from 'styled-components';
import Text from '../components/text';
import PageContentWrapper from '../components/page-content-wrapper';
import MainContentWrapper from '../components/main-content-wrapper';
import SomethingElseScreen from '../components/something-else-screen';
import ReviewScreen from '../components/review-screen';
import HeaderDownloadButtons from '../components/header-download-buttons';
import ImageGQL from '../components/image-gql';

const MainPageWrapper = styled.div`

  .avs4you{
    text-transform: uppercase;
    color: #F59541;
    font-weight: 600;
  }

  .headerText{
    padding-bottom:25px;
  }

  .bodyHeader{
    text-align: center;
    padding-top:100px;
    padding-bottom:80px;
  }

  .headerDownloadButtons{
    margin-top: 50px;
  }

  .mobileFormWrapper{
    display: table;
    margin-left: 0;
  }

  .getCouponButton{
    display: block;
    text-align: center;
  }

  .headerContentWrapper{
    padding-top: 260px;
    padding-bottom: 320px;
    max-width: 750px;
  }

  .headerBackground{
    position:relative;
  }

  .headerBackgroundImage{
    position:absolute !important;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
  }

  @media (max-width: 1050px) {
    .headerBackground {
      background-position: 0 0;
    }

    .mobileFormWrapper{
      margin: auto;
    }

    .headerContentWrapper{
      max-width: 520px;
      margin: auto;
      padding-top: 60px;
      padding-bottom: 170px;
    }

    .headerText{
      font-size: 34px;
      line-height: normal;
      text-align: center;
    }

    .headerDescription{
      font-size: 18px;
      text-align: center;
    }

    .bodyHeader{
      font-size: 28px;
    }
  }

  @media (max-width: 750px) {

    .bodyHeader{
      padding-top: 50px;
      padding-bottom: 50px;
      font-weight: 700;
    }
  }

  @media (max-width: 450px) {

    .headerContentWrapper{
      padding-bottom: 100px;
    }

    .bodyHeader{
      font-size: 22px;
    }

    .HeaderListItem.mobile{
      font-size: 20px;
    }
  }
`;

class mainPage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }


  getDevice(device){
    this.setState({ device: device });
  }

  render(){
  return (
    <Layout getDevice={this.getDevice} 
            pageContext={this.props.pageContext} 
            t={this.props.t}
            title="AVS4YOU best software for processing video, audio, image"
            metaDescription="AVS4YOU is a suite of 5 professional multimedia programs to convert, edit and create audio and video. Use AVS4YOU freeware to work with image & document files."
            metaKeywords="avs video converter, avs4you, avs, avs converter, avs4u, video to mp3, video converter, mp4 converter, dvd converter, avi converter, wmv converter, avs video editor, avs editor, avs movie editor, video editor, video editing software, avs image converter, avs photo converter, image converter, image size converter, avs audio converter, audio converter, video to audio converter, m4a converter, mp3 converter, wav converter, avs audio editor, audio editor, audio editing software, omp3 editor, music editor, audio cutter"
    >
      <MainPageWrapper>
        <div className="headerBackground">
        <ImageGQL className="headerBackgroundImage" imageName="main-page-header-image.jpg"/>
          <PageContentWrapper>
            <div id="headerCoupon" className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{this.props.t("avs4you")}</b> — {this.props.t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Produce spectacular video, audio and photo content and even more, without any limitations")}</Text>

              <HeaderDownloadButtons 
                t={this.props.t}
                mainHref="https://downloads.avs4you.com/distributives/AVSInstallPack.exe"
                scrollTo="mainBodyHeader"
                className="headerDownloadButtons"
              />
            </div>
          </PageContentWrapper>
        </div>
        
        <MainContentWrapper />
        <SomethingElseScreen scrollTo="headerCoupon"/>
        <ReviewScreen />
      </MainPageWrapper>
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(mainPage);
