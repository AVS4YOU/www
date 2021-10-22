import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/avs-special-offer.less";
import PageContentWrapper from '../components/page-content-wrapper';

import ImageMain from '../images/404/error-unfound-main.svg';
import ContentRowItem from '../components/content-row-item';

class Error404Page extends React.PureComponent {
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
          <div className="bodyWrapper">
          <Text fontSize={46} fontWeight={800} className="bodyHeader" as="h1">AVS4YOU Full Pack</Text>
          <Text fontSize={36} fontWeight={700} className="mainBodyTitle">Get 70% OFF on AVS4YOU Full Pack <span as="h1">$59</span>  <span>$199</span></Text>
          <Text fontSize={24} fontWeight={400} className="mainBodyComment">A complete set of programs for working with video files, slideshows and soundtracks. Manage your video/audio collections, improve their quality and create stunning video projects!</Text>
          </div>
          <PageContentWrapper>
                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider video converter jpg")}
                          headerText={this.props.t("AVS Video Editor")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                          scrollTo="headerCoupon"
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>Make stunning videos with music and effects</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>Record video or capture screen</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>Turn your photos into vivid slideshows</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>Enhance the quality of your video</Text>
                          <Text  className="ListItem" color="#555555" fontWeight={500}>Create engaging video projects, tutorials and demos</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("slider video editor jpg")}
                          headerText={this.props.t("AVS Video Editor")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                          smallButtonLink="/avs-video-editor.aspx"  
                          scrollTo="headerCoupon"    
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Edit all key video formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join video files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Apply effects and transitions")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Add audio, comments, subtitles")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Capture PC screen")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Use Chroma key, Slow Motion")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider video remaker jpg")}
                          headerText={this.props.t("AVS Video ReMaker")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                          smallButtonLink="/avs-video-remaker.aspx"   
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Edit video files without reconversion")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Support of all key video formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join video files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Transfer video from camcorders and video cameras")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Capture PC screen")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create DVD and Blu-ray menus and discs")}</Text>
                      </ContentRowItem>
                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("media player formats2x jpg")}
                          headerText={this.props.t("AVS Media Player")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe"
                          smallButtonLink="/avs-free-media-player.aspx"   
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Open and watch videos in all popular formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Listen to your favourite music")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("View images as a slideshow")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create personal playlists")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Take snapshots")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={false}
                          imageName={this.props.t("slider audio editor jpg")}
                          headerText={this.props.t("AVS Audio Editor")}
                          free={false}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                          smallButtonLink="/avs-audio-editor.aspx"  
                          scrollTo="headerCoupon"    
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Record audio data")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join and mix audio files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Improve sound quality")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Remove noise")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Text to Speech")}</Text>
                      </ContentRowItem>

                      <ContentRowItem 
                          imgLeft={true}
                          imageName={this.props.t("slider audio converter jpg")}
                          headerText={this.props.t("AVS Audio Converter")}
                          free={true}
                          blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                          smallButtonLink="/avs-free-audio-converter.aspx"   
                          scrollTo="headerCoupon"   
                      >
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Convert all key audio formats")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Cut, trim, join and mix audio files")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Modify audio file information")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Create audiobooks and ringtones")}</Text>
                          <Text className="ListItem" color="#555555" fontWeight={500}>{this.props.t("Export audio from video")}</Text>
                      </ContentRowItem>
                  </PageContentWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Error404Page);
