import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import Layout from "../components/layout";
import ImageGQL from "../components/image-gql";
import "../styles/avs-special-offer.less";
import PageContentWrapper from '../components/page-content-wrapper';
import Button from '../components/button';

import ContentRowItem from '../components/content-row-item';

class SpecialOffer extends React.PureComponent {
render(){
    return (
      <Layout 
        className="special-offer" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title=""
        metaDescription=""
        metaKeywords=""
      >

<div className="headerSpecialOffer">
<ImageGQL className="header-background" imageName="background-avs-special-offer.png"/>
      <div className="content-header">
      <div className="img-header">
          <ImageGQL className="snowflakes-header" imageName="snowflakes-special-offer.png"/>
          <ImageGQL className="multimedia-header" imageName="multimedia-special-offer.png"/>
      </div>
      <div className="text-header">
            <Text fontSize={34} fontWeight={700} color="#fff" className="textSpecial">Special Offer</Text>
            <Text fontSize={64} fontWeight={700} color="#fff" className="bodyGrab">Grab</Text>
            <Text fontSize={130} fontWeight={700} color="#fff" className="bodyOff">70 <span className="text-off">%</span> <span className="letter-off">ff</span></Text>
            <Text fontSize={46} fontWeight={700} className="textHeader" as="h1"><span color="#fff" className="text-header-avs">on</span> AVS4YOU</Text>
            <Text fontSize={46} fontWeight={700} color="#fff" className="mainBodyTitle">Multimedia Suite</Text>
            <Text fontSize={16} fontWeight={400} color="#fff" className="mainBodyComment">The offer is valid till December 26, 2019</Text></div>
      </div>
</div>
          <div className="bodyWrapper">
            <Text fontSize={46} fontWeight={800} className="bodyHeader" as="h1">AVS4YOU Full Pack</Text>
            <Text fontSize={36} fontWeight={700} className="mainBodyTitle">Get 70% OFF on AVS4YOU Full Pack <span className="text-red">$59</span>  <span className="text-line-through">$199</span></Text>
            <Text fontSize={24} fontWeight={400} className="mainBodyComment">A complete set of programs for working with video files, slideshows and soundtracks. Manage your video/audio collections, improve their quality and create stunning video projects!</Text>
            <Button className="specialButton" 
                            href={this.props.mainHref} 
                            color="#fff" 
                            secondaryText={this.props.secondaryText && this.props.secondaryText} 
                            textTransform="uppercase">
                                {this.props.t("download now")}
            </Button>
            <ImageGQL className="full-pack" imageName="full-pack-special-offer.png"/>
          </div>
          <PageContentWrapper>
                      <ContentRowItem 
                          disableBG={true}
                          imgLeft={true}
                          imageName={"video-editor-special-offer.png"}
                          headerText={this.props.t("AVS Video Editor")}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                          scrollTo="headerCoupon"
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
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                          scrollTo="headerCoupon"    
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
                          imgLeft={true}
                          imageName={"video-converter-special-offer.png"}
                          headerText={this.props.t("AVS Audio Converter")}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                          scrollTo="headerCoupon"    
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Professional level audio editing and recording software.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Convert audio files to MP3, WAV, WMA, M4A, FLAC, OGG, etc.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Grab audio from CD disks to store soundtracks on your pc</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Edit audio tags to update metadata and enable tracks grouping</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create your own audiobooks</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Make customized ringtones for iPhone</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          disableBG={true}
                          imgLeft={false}
                          imageName={"audio-converter-special-offer.png"}
                          headerText={this.props.t("AVS Audio Converter")}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" 
                          scrollTo="headerCoupon"   
                      >
                        <Text  className="ListTitle" color="#555555" fontWeight={600} fontSize={24}>Feature-rich audio conversion program for Windows.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Cut and delete unnecessary parts</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Change scene sequence in all popular video formats</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Transfer video from camcorders and video cameras to hard drive</Text>
                          <Text className="ListItem" color="#555555" fontWeight={400} fontSize={19}>Create home video DVD or Blu-ray discs</Text>
                      </ContentRowItem>
                  </PageContentWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(SpecialOffer);
