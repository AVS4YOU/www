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
import ScrollUpButton from '../components/scroll-up-button';

class avsFreeImageConverter extends React.PureComponent {

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
        getDevice={this.getDevice} 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS Free Image Converter is a reliable tool to resize images and to convert JPEG JPG PNG CR2 PDF"
        metaDescription="Convert image files to JPEG, JPG, PNG, CR2, PDF for free with Free AVS Image Converter. Resize photos,rotate, adjust color and contrast, apply photo effects."
        metaKeywords="Free image converter, picture converter, avs image converter, avs photo converter, image converter, image size converter, image converter download, batch image converter, image converter to png, image converter to pdf, image conversion software, image conversion tool, image converting, convert picture format, convert picture to pdf, convert picture to text, convert picture to jpg, convert image, convert image to pdf, convert image to jpeg, convert image to png, convert image size, convert photo, change image size, image size reducer, image resize"
      >
        <ProductPagesWrapper imageName="purple_background_main.jpg">
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="purple_background_main.png" style={{ position: "absolute" }} />
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">Free
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("Free AVS Image Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>Share your photos, stories and adventures with Free AVS Image Converter.</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSImageConverter.exe"
                  secondaryText="Windows 10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div>
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="image_converter_header.png" style={{ maxWidth: "1564px" }} alt="header-image" />
            <ImageGQL className="headerImage mobile" imageName="image_converter_header.png" style={{ maxWidth: "1564px" }} alt="header-image-mobile" />
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">Overview</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">Reviews</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">Screentour</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download">
              <Text color="#666666" align="center">Download</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem
              id="overview"
              imgLeft={true}
              imageName="image_converter_slide2.png"
              headerText="Convert from and to popular formats"
            >
              <Text className="ListItem">Convert images to all key formats JPEG, JPG, PNG,  BMP, TIFF, TGA, GIF, animated GIF/PNG, APNG, ITHMB (iPhone/iPod Thumbnail Files).</Text>
              <Text className="ListItem">Convert RAW images (CR2, CRW, RAF, DNG, MEF, NEF, ARW, etc.) created by digital cameras fast and easily.</Text>
              <Text className="ListItem">Convert your images to PDF format, merge multiple JPEG files to PDF.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="image_converter_slide3.png"
              headerText="Easily resize images using presets"
            >
              <Text className="ListItem">Automatically tailor your photos to popular printing formats.</Text>
              <Text className="ListItem">Create avatars and thumbnails.</Text>
              <Text className="ListItem">Prepare your images for future slideshows to be uploaded to popular websites.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="image_converter_slide4.png"
              headerText="Apply effects"
            >
              <Text className="ListItem">Adjust contrast and brightness automatically.</Text>
              <Text className="ListItem">Apply retro look with the aging effect</Text>
              <Text className="ListItem">Make your pictures look like analog photography.</Text>
              <Text className="ListItem">Use the black-and-white effect and more.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="image_converter_slide5.png"
              headerText="Watermark your pictures"
            >
              <Text className="ListItem">Select a logo or write a phrase and apply it to all converted pictures as a personal watermark.</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="image_converter_batch_mode.png"
              headerText="Use Command Line Mode"
            >
              <Text className="ListItem">Run routine tasks efficiently: resize and convert multiple images between various formats.</Text>
              <Text className="ListItem">Make pictures watermarked using customized presets.</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
            <ReviewScreen />
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Image Converter</Text>
          <ScreenshotsCarousel
            imageNames={["image_converter_slide1.png", "image_converter_slide2.png", "image_converter_slide3.png", "image_converter_slide4.png", "image_converter_slide5.png"]}
            imageNamesPopup={["image_converter_slide1.png", "image_converter_header_center2x.png", "image_converter_header_center2x.png", "image_converter_apply_effects2x.png", "image_converter_watermark2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}

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
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSImageConverter.exe" to="headerContentWrapper" />
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>By clicking the Download button you agree to <Link to="/license-agreement">our End User License Agreement</Link></Text>
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
export default withI18next({ ns: "common" })(avsFreeImageConverter);