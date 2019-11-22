import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import styled from 'styled-components';
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import Button from '../components/button';
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';

import BackgroundHeaderImage from "../images/video-editor/background_main.png";
import HeaderImage from '../images/video-editor/en_avs_video_editor_main.png';
import HeaderImageMobile from '../images/video-editor/slider1.png';

import Overview from '../images/common/icons/overview.svg';
import Reviews from '../images/common/icons/reviews.svg';
import Screentour from '../images/common/icons/screentour.svg';
import Download from '../images/common/icons/download.svg';

import screen1 from '../images/video-editor/slider3.png';
import screen2 from '../images/video-editor/slider4.png';
import screen3 from '../images/video-editor/slider5.png';
import screen4 from '../images/video-editor/slider2.png';
import screen5 from '../images/video-editor/slider6.png';

import AttentionIcon from '../images/common/icons/red_ring.svg';

const PayPagesWrapper = styled.div`
  .headerBackground{
    background-image: url(${BackgroundHeaderImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 0;
  }

  .headerContentWrapper{
    padding-top: 120px;
    padding-bottom: 100px;
    max-width: 750px;
    margin: auto;
  }

  .headerText{
    padding-bottom: 35px;
  }

  .topButton{
    margin-top: 30px;
  }

  .buttonWrapper{
    margin:auto;
    padding-top: 65px;
    display: table;
  }

  .headerImage{
    display:block;
    margin:auto;
    max-width: 100%;

    &.mobile{
      display:none;
    }
  }

  .scrollLinksWrapper{
    padding: 100px 0;
    display: grid;
    grid-template-columns: 128px 128px 128px 128px;
    grid-gap: 30px;
    margin: auto;
    width: max-content;
  }

  .backgroundWrapper{
    background-color: #FAF7F2;
    margin-top: 100px;
  }

  .carouselHeader{
      padding-top: 100px;
  }

  .scrollToButton{
    padding: 20px;
    padding-top: 85px;
    background-size: 42px;
    background-position: 50% 20px;
    background-repeat: no-repeat;
    cursor: pointer;
    border-radius: 5px;   
    box-shadow: 0px 3px 6px #ffffff;
    transition: 0.15s linear;

    &:hover{
      box-shadow: 0px 3px 6px #00000029;
    }

    &.overview{
      background-image: url(${Overview});
    }

    &.reviews{
      background-image: url(${Reviews});
    }

    &.screentour{
      background-image: url(${Screentour});
    }

    &.download{
      background-image: url(${Download});
    }
  }
  .downloadInfoWrapper{
    padding-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 15px;
    margin: auto;
    max-width: 600px;
  }

  .licenseText{
    padding-top: 25px;
    padding-bottom: 100px;

    a{
      color: #1296E6;
    }
  }

  .technicalSpecificationWrapper{
    background-color: #FAF7F2;
    padding: 100px 0;
  }

  .requirementsHeader{
    padding-bottom: 10px;
    border-bottom: 1px solid #D1D1D1;
    max-width: 404px;
    margin-bottom: 10px;
  }

  .specificationGrid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-top: 50px;
    padding-bottom: 10px;
  }

  .pcComponents{
    padding-right: 10px;
  }

  .systemWrapper{
    padding-bottom: 10px;
  }

  .attentionBlock{
    background: url(${AttentionIcon}) no-repeat;
    background-color: #ffffff;
    background-position: 20px 15px;
    padding: 16px;
    padding-left: 55px;
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    .scrollLinksWrapper{
      display:none;
    }

    .headerText{
      font-size: 48px;
      padding-bottom: 25px;
    }

    .headerDescription{
      font-size: 18px;
      font-weight: 300;
    }

    .headerContentWrapper{
      max-width: 540px;
    }
  }

  @media (max-width: 750px) {

    .headerContentWrapper{
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .headerImage{
      display:none;

      &.mobile{
        display: block;
        box-sizing: border-box;
        border-radius: 15px;
        margin: auto;
        padding: 10px;
      }
    }

    .buttonWrapper{
      padding-top: 50px;
    }

    .headerText{
      font-size: 34px;
    }

    .carouselHeader{
      font-size: 24px;
      padding-top: 50px;
    }

    .licenseText{
      padding-bottom: 50px;
    }

    .downloadInfoParam{
      font-size: 14px;
    }

    .downloadInfoText{
      font-size: 14px;
    }

    .headerSpecification{
      font-size: 24px;
    }

    .specificationGrid{
      grid-template-columns: 1fr;
    }

    .requirementsHeader{
      font-size: 16px;
    }

    .systemWrapper span{
      font-size: 14px;
    }

    .attentionBlock{
      display:none;
    }

    .systemInfo{
      font-size: 14px;
      font-style: italic;
    }

    .technicalSpecificationWrapper{
      padding: 50px 0;
    }
  }
`;

const SecondPage = ({ pageContext, t }) => {

  return (
    <Layout pageContext={pageContext} t={t}>
      <PayPagesWrapper>
        <div className="headerBackground">
          <PageContentWrapper>
            <div className="headerContentWrapper" >
              <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{t("AVS Video Editor")}</Text>
              <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Trim, cut, split, merge, rotate, mix videos. 300+ innovative effects, transitions, overlays</Text>
              <div className="buttonWrapper">
                <Button href="/" color="#fff" padding="12px 37px" textTransform="uppercase" backgroundColor="orange" secondaryText="Windows 10/8/7/Vista/XP">download now</Button>
              </div>
            </div> 
          </PageContentWrapper>
          <img className="headerImage" src={HeaderImage}/>
          <img className="headerImage mobile" src={HeaderImageMobile}/>
        </div>
        <div className="scrollLinksWrapper">
          <Link to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
            <Text color="#666666" align="center">Overview</Text>
          </Link>
          <Link to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
            <Text color="#666666" align="center">Reviews</Text>
          </Link>
          <Link to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
            <Text color="#666666" align="center">Screentour</Text>
          </Link>
          <Link to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
            <Text color="#666666" align="center">Download</Text>
          </Link>
        </div>

        <PageContentWrapper>
          <ContentRowItem 
              id="overview"
              imgLeft={true}
              image={screen1}
              headerText="Work with all key formats and HD videos"    
          >
            <Text className="ListItem" color="#555555" fontWeight={500}>Edit and save video in all popular formats (MP4, DVD, AVI, MOV, VOB, WMV, MKV, FLV, WEBM, etc.</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Process video in any resolution HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Open, modify and save video using popular codeсs H.264, H.265 (reading only), MPEG-4, etc.</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Speed up HD video editing due to the integrated video cache technology</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Use new automatic presets for powerful computers</Text>
          </ContentRowItem>

          <ContentRowItem 
              imgLeft={false}
              image={screen2}
              headerText="Record your video"   
          >
            <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from DV/HDV cameras, webcams or VHS cameras</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Record media files from your PC screen</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Give a new life to old VHS tapes</Text>
          </ContentRowItem>

          <ContentRowItem 
            imgLeft={true}
            image={screen3}
            headerText="Make your video look professional"    
          >
            <Text className="ListItem" color="#555555" fontWeight={500}>Ccut out a particular scene or remove shaky and unnecessary parts</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Split videos regardless of both the video size and formats</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Join as many video files as you want</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Fix up any white balancing issues and color mismatches with color tuning</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Fix a shaky footage with video stabilization</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Use chroma key effect to change your background</Text>
          </ContentRowItem>

          <ContentRowItem 
              imgLeft={false}
              image={screen4}
              headerText="Make vivid slideshows"   
          >
            <Text className="ListItem" color="#555555" fontWeight={500}>Import images, add your voice or favourite audio tracks</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Insert captions, visual effects and transitions</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Create personal and corporate slideshows easily</Text>
          </ContentRowItem>

          <ContentRowItem
              imgLeft={true}
              image={screen5}
              headerText="Share your video"    
          >
            <Text className="ListItem" color="#555555" fontWeight={500}>Save the newly-made video in the desired format on your computer</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Adjust video for your iOS and Android devices</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Create video for YouTube, Video and other video hosting websites</Text>
            <Text className="ListItem" color="#555555" fontWeight={500}>Publish your creative work in social networks</Text>
          </ContentRowItem>
        </PageContentWrapper>
        <div id="reviews" className="backgroundWrapper">
          <ReviewScreen />
        </div>
        <Text id="screenshotsCarousel" className="carouselHeader" as="h2" fontWeight={600} color="#000000" fontSize={32} align="center">AVS Video Editor 9.1</Text>
        <ScreenshotsCarousel></ScreenshotsCarousel>
        <PageContentWrapper>
          <div className="downloadInfoWrapper">
            <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
            <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">63.07 MB</Text>

            <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
            <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">10.1.2.627</Text>

            <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
            <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/Linux support)</Text>
          </div>
          <div id="downloadButton" className="buttonWrapper">
            <Button href="/" color="#fff" padding="16px 40px" textTransform="uppercase" backgroundColor="blue">download now</Button>
          </div>
          <div className="licenseText">
            <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <a href="#">our End User License Agreement</a></Text>
          </div>
        </PageContentWrapper>
        <div className="technicalSpecificationWrapper">
          <PageContentWrapper>
              <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>Technical specification</Text>
              <div className="specificationGrid">
                <div>
                  <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>MINIMUM SYSTEM REQUIREMENTS</Text>

                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Processor:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">AMD / Intel Core 2 Duo compatible at 3 GHz or higher</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">RAM:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">2 GB or higher </Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Sound:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows compatible sound card</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Display:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">32-bit color depth</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">CD recorder:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">32-bit color depth</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">DVD recorder:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">for importing from DVD and creating Video DVD</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Video capture device:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">required for capturing</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Windows Media Player:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">11 or higher for WMV video playback</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">DirectX:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Microsoft DirectX 9.0c or later</Text>
                  </div>
                </div>
                <div>
                  <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>RECOMMENDED SYSTEM REQUIREMENTS</Text>

                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Operating system:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Processor:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">AMD / Intel Core 2 Quad compatible at 2.4 GHz or higher</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">RAM:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">2 GB or higher</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Video:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7 compatible video card</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">Sound:</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10/Windows 8.x/Windows 7 compatible sound card</Text>
                  </div>
                </div>
              </div>
              <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*Administrative permissions for program installation and Internet connection for activation</Text>
              <div className="attentionBlock">
                <Text fontSize={16} fontWeight={500}>Please note that AVS4YOU® programs do not allow you to copy protected material. You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner.</Text>
              </div>
          </PageContentWrapper>
        </div>
      </PayPagesWrapper>
    </Layout>
  );
};
export default withI18next({ ns: "common" })(SecondPage);
