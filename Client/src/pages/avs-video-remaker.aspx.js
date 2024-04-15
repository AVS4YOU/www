import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import PageContentWrapper from "../components/page-content-wrapper";
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';
import ImageGQL from '../components/image-gql';
import {VideoReMaker} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';

import AvatarRobin from '../images/avs-video-remaker/robin_kidderminster.png';
import AvatarMichael from '../images/avs-video-remaker/michael_bryant.png';
import AvatarArthur from '../images/avs-video-remaker/arthur_rees.png';

const lang = ['de','en','es','fr','it','jp','ru']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

class avsVideoRemaker extends React.PureComponent {

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
      <Layout 
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS Video ReMaker - cut out the scenes without reconverting video files")}
        metaDescription={this.props.t("AVS Video ReMaker Cut out the scenes and remove commercials without reconverting video files")}
        metaKeywords={this.props.t("video remaker, convert video, video formats, remake video, no recompression, delete scenes, remove commercials")}
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
          <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Video ReMaker")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Mighty production software for capturing and editing videos, and creating DVD and Blu-ray content")}</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                  secondaryText="Windows 11/10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                  id="downloiad-now1_avs-video-remaker"
                />
              </div> 
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName={this.props.t("video remaker en header png")} style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName={this.props.t("video remaker en header png")} style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink id="scroll-to-overview_avs-video-remaker" to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">{this.props.t("Overview")}</Text>
            </ScrollLink>
            <ScrollLink id="scroll-to-reviews_avs-video-remaker" to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">{this.props.t("Reviews")}</Text>
            </ScrollLink>
            <ScrollLink id="scroll-to-screenshots-carousel_avs-video-remaker" to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">{this.props.t("Screentour")}</Text>
            </ScrollLink>
            <ScrollLink id="scroll-to-download-button_avs-video-remaker" to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download">
              <Text color="#666666" align="center">{this.props.t("Download")}</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem 
                id="overview"
                imgLeft={true}
                imageName={this.props.t("video remaker edit video files min jpg")}
                headerText={this.props.t("Edit video files without reconversion")}    
            >
              <Text className="ListItem">{this.props.t("Cut, delete unwanted parts, change scene sequence in all popular video formats")}</Text>
              <Text className="ListItem">{this.props.t("Save videos without changing the original format")}</Text>
              {isSomeLang(this.props.locale)
                ? <Text className="ListItem">{this.props.t("Merge several video files with similar parameters")}</Text>
                : <p style={{margin:"0"}}></p>
              }
              {isSomeLang(this.props.locale)
                ? <Text className="ListItem">{this.props.t("Edit MP4, M4V or MOV videos recorded with iPhone, iPad or Android smartphones and tablets")}</Text>
                : <p style={{margin:"0"}}></p>
              }
              <Text className="ListItem">{this.props.t("Edit AVCHD, MOD, MTSM2TS, TOD, etc video files recorded with camcorders and video cameras")}</Text>
              {isSomeLang(this.props.locale)
                ? <Text className="ListItem">{this.props.t("Edit MP4 MOV MKV or AVI video files with modern H265 HEVC codec")}</Text>
                : <br />
              }
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName={this.props.t("video remaker record video min jpg")}
                headerText={this.props.t("Capture video")}   
            >
              <Text className="ListItem">{this.props.t("Transfer video from camcorders and video cameras to your PC, edit files and create home video DVDs")}</Text>
              <Text className="ListItem">{this.props.t("Capture video from Web cameras and DV cameras")}</Text>
              <Text className="ListItem">{this.props.t("Choose the desired format of captured file (FLV, WMV, AVI), Sound source, Mouse cursor effects")}</Text>
              <Text className="ListItem">{this.props.t("Use Screen Capture function to create How-to videos or tutorials")}</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName={this.props.t("video remaker disc menu min jpg")}
              headerText={this.props.t("Create DVD and Blu-ray Menus")}    
            >
              <Text className="ListItem">{this.props.t("Split video into chapters, select between a number of menu templates")}</Text>
              <Text className="ListItem">{this.props.t("Choose auto sets and let our program split the file independently")}</Text>
              <Text className="ListItem">{this.props.t("Burn video files on to DVD- or Blu-ray discs")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Robin Kidderminster",
                    avatar: AvatarRobin,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("Been using your video software for years What makes it so good It WORKS Its easy to use, works well and unlike many other similar software it is quick, accurate and reliable No brained - the BEST")
                  },
                  {
                    name: "Michael Bryant",
                    avatar: AvatarMichael,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("As a supporter of your programs, I must say that I have never been disappointed in your software or your customer service team Your software does exactly what I need it to do")
                  },
                  {
                    name: "Arthur Rees",
                    avatar: AvatarArthur,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("Good applications, prompt service and reasonable pricing Great products, intuitive to learn and help files are concise")
                  }
                ]
              }
            />
            <Button className="trustButton" style={{margin: "auto", display: "table"}}
                    id="review_avs-video-remaker"
                    href="https://www.trustpilot.com/review/www.avs4you.com" 
                    color="#fff">
                    {this.props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
            </Button>
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Video Remaker 6.8</Text>
          <ScreenshotsCarousel 
            imageNames={[this.props.t("video remaker edit video files min jpg"), this.props.t("video remaker record video min jpg"), this.props.t("video remaker disc menu min jpg"), this.props.t("video remaker slider1 min jpg")]}
            imageNamesPopup={[this.props.t("video remaker edit video files min jpg"), this.props.t("video remaker record video min jpg"), this.props.t("video remaker disc menu min jpg"), this.props.t("video remaker slider1 min jpg")]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoReMaker.size} MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoReMaker.version}</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 11, 10, 8.1, 8, 7, Vista, XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton 
              id="downloiad-now2_avs-video-remaker" 
              className="buttonWrapper" 
              href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" 
              to="headerContentWrapper" 
              textDownload={this.props.t("download now")}
              textClicking={this.props.t("By clicking the Download button you agree to")}
              textLink={this.props.t("our End User License Agreement")}
              idLink="license-agreement_avs-video-remaker" 
              toLink="/license-agreement.aspx"
            />
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
                <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{this.props.t("Technical specification")}</Text>
                <div className="specificationGrid">
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel / AMD compatible at 186 GHz or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("1 GB or higher")} </Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel HD Graphics, NVIDIA GeForce, AMD Radeon Graphics")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DirectX")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Microsoft DirectX 90c or later")}</Text>
                    </div>
                  </div>
                  <div>
                    <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Operating system")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 11/Windows 10/Windows 8.x/Windows 7")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Dual core (Intel Core i3 series or AMD equivalent)")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("3 GB or higher")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Intel HD Graphics, NVIDIA GeForce recommended for hardware acceleration")}</Text>
                    </div>
                    <div className="systemWrapper">
                      <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                      <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                    </div>
                  </div>
                </div>
                <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>*{this.props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
                <div className="attentionBlock">
                  <Text fontSize={16} fontWeight={500}>{this.props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}</Text>
                </div>
            </PageContentWrapper>
          </div>
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsVideoRemaker);
