import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
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

class avsFreePhotoEditor extends React.PureComponent {

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
        title="AVS Free Photo Editor is a free photo editing software."
        metaDescription="Edit JPEG, JPG, PNG, GIF, BMP, TIFF for free with AVS Free Photo Editor. Rotate & crop image files, remove red eye effect, adjust colour and tints, add effects."
        metaKeywords="photo editor,free photo editor,picture editor, photo editing software, edit photos, picture editing"
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="purple_background_main.jpg" style={{position: "absolute"}}/>
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">Free
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("Free AVS Photo Editor")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Make your photos look stylish with Free AVS Photo Editor.</Text>
                <HeaderDownloadButtons 
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSPhotoEditor.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div> 
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="photo_editor_header.png" style={{maxWidth: "1564px"}} alt="header-image"/>
            <ImageGQL className="headerImage mobile" imageName="photo_editor_header.png" style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
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
                imageName="photo_editor_slide2.png"
                headerText="Edit and improve photos like a pro"    
            >
              <Text className="ListItem">Rotate, crop pictures without quality loss.</Text>
              <Text className="ListItem">Play with colors, shades and tints to completely change picture style.</Text>
              <Text className="ListItem">Remove red eye effect, adjust color balance, brightness, contrast and saturation.</Text>
              <Text className="ListItem">Amend object shapes and improve tiny imperfections in pictures.</Text>
            </ContentRowItem>

            <ContentRowItem 
                imgLeft={false}
                imageName="photo_editor_slide3.png"
                headerText="Apply an array of effects"   
            >
              <Text className="ListItem">Apply pre-made templates to make your pictures look like old, faded photographs.</Text>
              <Text className="ListItem">Create ascetic monochrome picture and get black-and-white images.</Text>
              <Text className="ListItem">Add a watermark to your photos and protect your copyrights.</Text>
            </ContentRowItem>

            <ContentRowItem 
              imgLeft={true}
              imageName="photo_editor_slide4.png"
              headerText="Work with various formats"    
            >
              <Text className="ListItem">Edit photos to all key formats JPEG, JPG, BMP, PNG, GIF, etc. <a href="https://onlinehelp.avs4you.com/avs-photo-editor/working/addingpreviewing/supportedformats.aspx" target="_blank">See a full list of supported image formats</a>.</Text>
              <Text className="ListItem">Make an ISO image directly from a disc or HDD.</Text>
              <Text className="ListItem">Edit, delete or add new files to the ready disc images.</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">Free AVS Photo Editor</Text>
          <ScreenshotsCarousel 
            imageNames={["photo_editor_slide1.png", "photo_editor_slide2.png", "photo_editor_slide3.png", "photo_editor_slide4.png" ]}
            imageNamesPopup={["photo_editor_slide1.png", "photo_editor_slide2_2x.png", "photo_editor_slide3_2x.png", "photo_editor_slide4_2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4"]}
            
          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">File Size:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">63.07 MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Current Version:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">10.1.2.627</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">Platforms:</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 10, 8.1, 8, 7, XP, 2003, Vista (no Mac OS/Linux support)</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSPhotoEditor.exe" to="headerContentWrapper"/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <a href="https://www.avs4you.com/license-agreement.aspx">our End User License Agreement</a></Text>
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
        </ProductPagesWrapper>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsFreePhotoEditor);
