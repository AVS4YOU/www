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
import Logo from '../images/common/logo.svg';
import { Link as GatsbyLink } from 'gatsby';

import ContentRowItem from '../components/content-row-item';

import secureIcon from '../images/avs-special-offer/secure-icon.png'
import supportIcon from '../images/avs-special-offer/support-icon.png'
import customersIcon from '../images/avs-special-offer/customers-icon.png'
import marketIcon from '../images/avs-special-offer/market-icon.png'
import updatesIcon from '../images/avs-special-offer/updates-icon.png'


const LogoWrapper = styled.div`
    display: table;
    position: relative;
    width: 1120px;
    margin: auto;
    top: 12px;
    left: 16px;
    &>img{
        width: 69px;
        height: 60px;
        margin: auto;
    }
`;

const RedButton = styled(Button) `
    min-width: 155px;
    background-color: #CC0909;
    text-align: center;

    &:hover {
      background-color: #8A0000;
    }
`;

const SaleWrapper = styled.div`
    display: flex;

    &.precent {
      align-items: baseline;
    }
`;


class SpecialOffer extends React.PureComponent {
render(){
    return (
      <Layout 
        headerIsDisabled={true}
        className="special-offer" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS4YOU Special offer"
        metaDescription=""
        metaKeywords=""
      >
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap" rel="stylesheet"></link>
        <div className="header-specail-offer">
            <LogoWrapper href="/">
              <GatsbyLink className="headerLogo" to="/" id="home_special-offer">
                  <img src={Logo} alt="avs4you logo"/>
                </GatsbyLink>
            </LogoWrapper>
        </div>
<div className="headerSpecialOfferSummer">
      <div className="content-header">
      <div className="img-header">
      <div className="back-summer-header"></div>
      <div className="multimedia-header-summer"></div>
      </div>
      <div className="text-header text-header-summer">
      <div className="avs-logo logo-summer-offer"></div>
        <Text fontSize={34} fontWeight={700} color="#fff" className="textSpecial">Special Offer</Text>
          <div className="text-grab">
          <Text fontSize={64} fontWeight={700} color="#fff" className="bodyGrab">Grab</Text>
            <SaleWrapper className="bodyOff">
            <Text fontSize={130} fontWeight={700} fontFamily={'Montserrat'} color="#ffffff" className="precent-off">70</Text> 
              <SaleWrapper className="precent">
                <Text fontSize={46} fontWeight={700} color="#ffffff" className="text-off">%</Text> 
                <Text fontSize={46} fontWeight={700} color="#ffffff" className="letter-off">ff</Text>
              </SaleWrapper>
            </SaleWrapper> 
            <div className="text-avs">
              <Text fontSize={24} fontWeight={700} color="#fff" className="text-header-avs">on</Text>
              <Text fontSize={46} fontWeight={700} className="textHeader-summer">AVS4YOU</Text>
            </div>
            <Text fontSize={46} fontWeight={700} color="#fff" className="textMultiHeader-summer">Multimedia Suite</Text>
            <div className="button-block">
              <div className="blockButton"></div>
              <RedButton className="headerButtonSummer" 
                      secondaryText={this.props.secondaryText && this.props.secondaryText} 
                      textTransform="uppercase">
                      <Link id="buy-now1_special-offer" to="/register.aspx" target="_blank" rel="noreferrer noopener" className="style-button"> buy now </Link>
              </RedButton>
            </div>
            <Text fontSize={16} fontWeight={400} color="#fff" className="mainHeaderComment">The offer is valid during 24 hours</Text>
      </div>
    </div>
    <div className="multimedia-header-summer-mobile"></div>
  </div>
</div>
          <div className="bodyWrapper">
            <Text fontSize={46} fontWeight={800} className="bodyHeader" as="h1">AVS4YOU Full Pack</Text>
            <Text fontSize={36} fontWeight={700} className="mainBodyTitle">Get 70% OFF on AVS4YOU Full Pack <span className="text-red">$79</span> <span className="text-line-through">$279</span></Text>
            <Text fontSize={24} fontWeight={400} className="mainBodyComment">A complete set of programs for working with video files, slideshows and soundtracks. Manage your video/audio collections, improve their quality and create stunning video projects!</Text>
            <div className="special-buttons">
              <Button className="specialButtonSummer button-mobile" 
                      secondaryText={this.props.secondaryText && this.props.secondaryText} 
                      textTransform="uppercase">
                      <Link id="download-now_special-offer" to="https://downloads.avs4you.com/distributives/AVSInstallPack.exe" target="_blank" rel="noreferrer noopener" className="style-button"> download now </Link>
              </Button>
              <div className="blockButton"></div>
              <RedButton className="specialButtonSummer" 
                      secondaryText={this.props.secondaryText && this.props.secondaryText} 
                      textTransform="uppercase">
                      <Link id="buy-now2_special-offer" to="/register.aspx" target="_blank" rel="noreferrer noopener" className="style-button"> buy now </Link>
              </RedButton>
            </div>
            <ImageGQL className="full-pack" imageName="pack-special-offer.png"/>
          </div>
          <PageContentWrapper>
                      <ContentRowItem 
                          disableBG={true}
                          imgLeft={true}
                          imageName={"video-editor-special-offer.png"}
                          headerText={this.props.t("AVS Video Editor")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                          translateButtonLinkId="download-now-ve_special-offer"
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
                          imageName={"audio-editor-special-offer.png"}
                          headerText={this.props.t("AVS Audio Editor")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                          translateButtonLinkId="download-now-ae_special-offer"
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
                          imageName={"video-converter-special-offer.png"}
                          headerText={this.props.t("AVS Video Converter")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                          translateButtonLinkId="download-now-vc_special-offer"
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
                          imageName={"audio-converter-special-offer.png"}
                          headerText={this.props.t("AVS Audio Converter")}
                          translateButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                          translateButtonLinkId="download-now-ac_special-offer"
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Feature-rich audio conversion program for Windows.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Convert audio files to MP3, WAV, WMA, M4A, FLAC, OGG, etc.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Grab audio from CD disks to store soundtracks on your pc</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Edit audio tags to update metadata and enable tracks grouping</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create your own audiobooks</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Make customized ringtones for iPhone</Text>
                      </ContentRowItem>
                  </PageContentWrapper>

                  <div className="why-choose">
                    <Text fontSize={46} fontWeight={800} className="bodyHeader" as="h1">Why Choose AVS4YOU</Text>
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
export default withI18next({ ns: "common" })(SpecialOffer);
