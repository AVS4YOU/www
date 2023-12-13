import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import styled from 'styled-components';
import Text from '../components/text';
import Layout from "../components/layout";
import ImageGQL from "../components/image-gql";
import "../styles/avs-special-offer.less";
import PageContentWrapper from '../components/page-content-wrapper';
import Button from '../components/button';

import ContentRowItem from '../components/content-row-item';

import secureIcon from '../images/avs-special-offer/secure-icon.png'
import supportIcon from '../images/avs-special-offer/support-icon.png'
import customersIcon from '../images/avs-special-offer/customers-icon.png'
import marketIcon from '../images/avs-special-offer/market-icon.png'
import updatesIcon from '../images/avs-special-offer/updates-icon.png'

const StyledTable = styled.div`

    .bgBlue, .bgOrange {
        width: 50%;
    }

    .flexWrapper {
      padding: 0 20px;
    }

    h3 {
        color: #6332A0;
        font-weight: 700;
        font-family: Montserrat;
    }

    .HeaderListItem {
        padding-bottom: 0px;
        font-weight: 700;
    }

    .ListTitle {
        padding: 32px 0;
        line-height: 32px;
    }

    p {
        font-family: Montserrat;
        color: #444444;
    }

    .ListItem {
        padding-bottom: 24px;
    }

    .ListItem:before {
        background-color: #6332A0;
    }

    .mainButton {
        border-radius: 5px;
        background: radial-gradient(65.92% 91.38% at 50% 50%, #A45AFF 0%, #943FFE 20.83%, #8D3DF0 57.29%, #542D85 93.23%);
        background-color: #943FFE;
        padding: 20px 25px !important;

        p {
            color: #FFF;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 18px;
            width: 209px;
            text-align: center;

            a {
              padding: 13px 25px!important;
            }
        }

        &:hover {
          border-radius: 5px;
          background: #943FFE;
          transition: background 2s;
      }
    }
    @media (max-width: 1024px) {
        .ListTitle {
            padding: 14px 0;
            line-height: 22px;
        }

        .imgRight, .imgLeft {
            padding-top: 50px;
        }

        .ListItem {
            padding-bottom: 14px !important;
        }
    }

    @media (max-width: 768px) {
        padding: 0px !important;
        .imgLeft {
            background-color: #F9F9F9;
        }
    }
`;

const BuyButton = styled(Button) `
padding: 5px 0;
    display: inline-block;
.style-button {
    padding: 0px;
    max-width: 242px;
    text-align: center;
    border-radius: 5px;
    background: var(--Halloween, radial-gradient(63.83% 93.1% at 50% 20.69%, #FF8C01 49.04%, #FB7601 70.27%, #F13F01 100%));

    &:hover {
        border-radius: 5px;
        background: radial-gradient(94.56% 137.93% at 50% 20.69%, #FF8C01 49.04%, #FB7601 70.27%, #F13F01 100%);
    }
`;

const DownloadNowButton = styled(Button)`
    width: max-content;
    .style-button {
        height: max-content;
    }
    
`

const SaleWrapper = styled.div`
    display: flex;

    &.precent {
      align-items: baseline;
    }
`;


class SpecialOfferHalloween extends React.PureComponent {
render(){
    return (
      <Layout
        headerIsDisabled={true}
        isTinyFooter
        className="special-offer"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title="AVS4YOU Special offer"
        metaDescription=""
        metaKeywords=""
      >
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap" rel="stylesheet"></link>

<div className="headerSpecialOfferHalloween">
<div className="web-halloween"></div>
      <div className="content-header">
      <div className="img-header img-halloween">
        <div className="back-halloween-header"></div>
        <div className="multimedia-header"></div>
            <div className="ghost-one"></div>
            <div className="ghost-two"></div>
            <div className="ghost-three"></div>
            <div className="ghost-four"></div>
      </div>
      <div className="text-header text-header-halloween">
      <div className="avs-logo logo-halloween-offer"></div>
          <div className="text-grab">
          <div className="logo-halloween"></div>
          <Text fontSize={34} fontWeight={700} color="#fff" className="textSpecial">Special Offer</Text>
            <SaleWrapper className="bodyOff">
            <Text fontSize={64} fontWeight={700} color="#fff" className="bodyGrab">Grab</Text>
            <Text fontSize={130} fontWeight={700} fontFamily={'Montserrat'} color="#ffffff" className="precent-off">70</Text>
              <SaleWrapper className="precent">
                <Text fontSize={46} fontWeight={700} color="#ffffff" className="text-off">%</Text>
                <Text fontSize={46} fontWeight={700} color="#ffffff" className="letter-off">ff</Text>
              </SaleWrapper>
            </SaleWrapper>
            <div className="text-avs">
              <Text fontSize={24} fontWeight={700} color="#fff" className="text-header-avs">on</Text>
              <Text fontSize={46} fontWeight={700} className="textHeader-halloween">AVS4YOU</Text>
            </div>
            <div className="ghost-five"></div>
            <Text fontSize={46} fontWeight={700} color="#fff" className="textMultiHeader-halloween">Multimedia Suite</Text>
            <div className="button-block">
              <div className="blockButton"></div>
              <BuyButton className="headerButtonHalloween"
                      secondaryText={this.props.secondaryText && this.props.secondaryText}
                      textTransform="uppercase">
                      <Link id="buy-now1_avs-special-offer-halloween" to="/register.aspx" target="_blank" rel="noreferrer noopener" className="style-button"> buy now </Link>
              </BuyButton>
            </div>
            <div className="multimedia-header-halloween-mobile"></div>
      </div>
    </div>
  </div>
</div>
          <div className="bodyWrapper halloweenWrapper">
            <Text fontSize={46} fontWeight={800} className="bodyHeader-halloween" as="h1">AVS4YOU Full Pack</Text>
            <Text fontSize={36} fontWeight={700} className="mainBodyTitle">Get 70% OFF on AVS4YOU Full Pack for <span className="text-orange">$79</span> <span className="text-line-through">$279</span></Text>
            <Text fontSize={24} fontWeight={400} className="mainBodyComment">A complete set of programs for working with video files, slideshows and soundtracks. Manage your video/audio collections, improve their quality and create stunning video projects!</Text>
            <div className="special-buttons">
              <DownloadNowButton className="specialButtonHalloween violet button-mobile"
                      secondaryText={this.props.secondaryText && this.props.secondaryText}
                      // as="div"
                      textTransform="uppercase">
                      <Link id="download-now_avs-special-offer-halloween" to="https://downloads.avs4you.com/distributives/AVSInstallPack.exe" target="_blank" rel="noreferrer noopener" className="style-button"> download now </Link>
              </DownloadNowButton>
              <div className="blockButton"></div>
              <BuyButton className="specialButtonHalloween"
                         // as="div"
                      secondaryText={this.props.secondaryText && this.props.secondaryText}
                      textTransform="uppercase">
                      <Link id="buy-now2_avs-special-offer-halloween" to="/register.aspx" target="_blank" rel="noreferrer noopener" className="style-button"> buy now </Link>
              </BuyButton>
            </div>
            <ImageGQL className="full-pack" imageName="pack-so-halloween.png"/>
          </div>
          <PageContentWrapper className="tableProduct">
                <StyledTable>
                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"video-editor-so-halloween.png"}
                          headerText={this.props.t("AVS Video Editor")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                          translateButtonLinkId="download-avs-special-offer-halloween_avs-special-offer-halloween"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Powerful video editing program for Windows with basic and pro editing tools.</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Make stunning videos with music and effects</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Record video or capture screen</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Turn your photos into vivid slideshows</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Enhance the quality of your video</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create engaging video projects, tutorials and demos</Text>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={false}
                          imageName={"audio-editor-so-halloween.png"}
                          headerText={this.props.t("AVS Audio Editor")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                          translateButtonLinkId="download-avs-audio-editor_avs-special-offer-halloween"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Professional level audio editing and recording software.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Record audio from microphone, Line In, Vinyl records</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create an amazing audio mix</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Improve your sound quality</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Remove noise, apply 20+ special effects and filters</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Multitrack audio editing</Text>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"video-converter-so-halloween.png"}
                          headerText={this.props.t("AVS Video Converter")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                          translateButtonLinkId="download-avs-video-converter_avs-special-offer-halloween"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>All-in-one video converter with basic editing features.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Convert and compress all key video formats</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Use ready conversion presets for modern gadgets</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Cut, trim, merge video files together</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Export audio from video in MP3/WAV</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Adjust aspect ratio, apply effects</Text>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={false}
                          imageName={"audio-converter-so-halloween.png"}
                          headerText={this.props.t("AVS Audio Converter")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                          translateButtonLinkId="download-avs-audio-converter_avs-special-offer-halloween"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Feature-rich audio conversion program for Windows.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Convert audio files to MP3, WAV, WMA, M4A, FLAC, OGG, etc.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Grab audio from CD disks to store soundtracks on your pc</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Edit audio tags to update metadata and enable tracks grouping</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create your own audiobooks</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Make customized ringtones for iPhone</Text>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"video-remaker-so-halloween.png"}
                          headerText={this.props.t("AVS Video ReMaker")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                          translateButtonLinkId="download-avs-video-remaker_avs-special-offer-halloween"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>A fast video editor to make edits without changing the original video file format.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Cut and delete unnecessary parts</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Change scene sequence in all popular video formats</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Transfer video from camcorders and video cameras to hard drive</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create home video DVDs or Blu-ray discs</Text>
                      </ContentRowItem>
                </StyledTable>
            </PageContentWrapper>

                  <div className="why-choose halloween-choose">
                    <Text fontSize={46} fontWeight={800} className="bodyHeader whyHalloween" as="h1">Why Choose AVS4YOU</Text>
                    <div className="block-choose">
                      <div className="list-choose">
                        <div className="choose-item"><img className="icon-mobile" src={secureIcon}/><Text className="awards-text" color="#555555" fontSize={24} fontWeight={600}>100% Secure</Text></div>
                        <div className="choose-item"><img className="icon-mobile" src={supportIcon}/><Text className="awards-text" color="#555555" fontSize={24} fontWeight={600}>Free support</Text></div>
                        <div className="choose-item"><img className="icon-mobile" src={updatesIcon}/><Text className="awards-text" color="#555555" fontSize={24} fontWeight={600}>Free updates</Text></div>
                        <div className="choose-item"><img className="icon-mobile" src={marketIcon}/><Text className="awards-text" color="#555555" fontSize={24} fontWeight={600}>15+ years on the market</Text></div>
                        <div className="choose-item"><img className="icon-mobile" src={customersIcon}/><Text className="awards-text" color="#555555" fontSize={24} fontWeight={600}>20M happy customers</Text></div>
                      </div>
                      </div>
                  </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(SpecialOfferHalloween);
