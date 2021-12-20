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
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';

import AvatarChenWang from '../images/common/review-carousel/chen_wang.png';
import AvatarAndyStephens from '../images/common/review-carousel/quote_2.png';
import AvatarWilliamHolmes from '../images/common/review-carousel/quote_1.png';

class avsFreeDocumentConverter extends React.PureComponent {

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
        title={this.props.t("AVS Free Document Converter converts Doc to PDF, DOCX, MOBI")}
        metaDescription={this.props.t("Convert DOC, DOCX to PDF, EPUB, MOBI, HTML, ODT with AVS Free Document Converter Convert doc to JPEG, PNG, GIF for free Add a text watermark, encrypt PDF files")}
        metaKeywords={this.props.t("document converter, convert pdf to word document, avs docs converter, docs converter, word to pdf converter, jpg to pdf converter, microsoft word to pdf converter, docs conversion, docs convert to pdf, docs to doc converter, docx to doc converter, djvu converter, odt  converter, xps  converter doc, xps  converter, xps  to pdf, convert  pdf, mobi  converter, djvu  to pdf, djvu  to pdf converter, djvu  reader, convert  epub to mobi, convert  pdf to jpg, universal  document converter, epub  converter, mobi  to epub, convert  djvu to pdf, pdf  to mobi converter, word  converter, convert  html, pdf  creator, pdf  converter")}
      >
        <ProductPagesWrapper>
          <div className="headerBackground">
            <ImageGQL className="headerBackgroundImage" imageName="aquamarine_background_main.jpg" style={{ position: "absolute" }} />
            <PageContentWrapper>
              <div id="headerContentWrapper" className="headerContentWrapper" >
                <Text as="span" className="flagBackground header">{this.props.t("Free")}
                  <div></div>
                </Text>
                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1">{this.props.t("AVS Document Converter")}</Text>
                <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Free PDF, DOCX, DOC, TXT, ODT, ePub, MOBI document converter Convert PDF to Word documents and image files for free")}</Text>
                <HeaderDownloadButtons
                  t={this.props.t}
                  mainHref="https://downloads.avs4you.com/distributives/AVSDocumentConverter.exe"
                  secondaryText="Windows 11/10/8/7/Vista/XP"
                  backgroundColor="orange"
                  mainPadding="12px 37px"
                  margin="auto"
                />
              </div>
            </PageContentWrapper>
            <ImageGQL className="headerImage" imageName="document_converter_header.png" style={{ maxWidth: "1564px" }} alt="header-image" />
            <ImageGQL className="headerImage mobile" imageName="document_converter_header.png" style={{ maxWidth: "1564px" }} alt="header-image-mobile" />
          </div>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
          <div className="scrollLinksWrapper">
            <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
              <Text color="#666666" align="center">{this.props.t("Overview")}</Text>
            </ScrollLink>
            <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
              <Text color="#666666" align="center">{this.props.t("Reviews")}</Text>
            </ScrollLink>
            <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
              <Text color="#666666" align="center">{this.props.t("Screentour")}</Text>
            </ScrollLink>
            <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download">
              <Text color="#666666" align="center">{this.props.t("Download")}</Text>
            </ScrollLink>
          </div>

          <PageContentWrapper>
            <ContentRowItem
              id="overview"
              imgLeft={true}
              imageName="document_converter_slider2.png"
              headerText={this.props.t("Convert various document formats")}
            >
              <Text className="ListItem">{this.props.t("Convert your files between DOC, PDF, DOCX, ODT, RTF, TXT, HTML, and others See a list of supported text formats")}</Text>
              <Text className="ListItem">{this.props.t("Convert PDF to Word, DOCX, DOC and more")}</Text>
              <Text className="ListItem">{this.props.t("Transfer text files to e-Pub, MOBI, FB2 and create your own e-books easily")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="document_converter_slider3.png"
              headerText={this.props.t("Protect your documents")}
            >
              <Text className="ListItem">{this.props.t("Create passwords to protect your PDF documents")}</Text>
              <Text className="ListItem">{this.props.t("Apply restrictions for editing, copying or printing your documents by the recipients")}</Text>
              <Text className="ListItem">{this.props.t("Add a personal watermark to your document files")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={true}
              imageName="document_converter_slider4.png"
              headerText={this.props.t("Zip your files")}
            >
              <Text className="ListItem">{this.props.t("Compress bulky files to ZIP format before or after the data conversion")}</Text>
              <Text className="ListItem">{this.props.t("Password the output archives and attach them to your e-mails directly from the interface")}</Text>
            </ContentRowItem>

            <ContentRowItem
              imgLeft={false}
              imageName="document_converter_slider5.png"
              headerText={this.props.t("Use Command Line Mode")}
            >
              <Text className="ListItem">{this.props.t("Convert documents in bulk")}</Text>
              <Text className="ListItem">{this.props.t("Merge multiple files into one")}</Text>
              <Text className="ListItem">{this.props.t("Watermark PDFs, enable PDF editing, copying and printing restrictions")}</Text>
            </ContentRowItem>

          </PageContentWrapper>
          <div id="reviews" className="backgroundWrapper">
          <ReviewScreen 
              reviewsData={
                [
                  {
                    name: "Chen Wang",
                    avatar: AvatarChenWang,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("For the price, this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent, easy to use with quality results")
                  },
                  {
                    name: "Andy Stephens",
                    avatar: AvatarAndyStephens,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("The product is super easy to download and use Anyone can do this in just minutes The company is always supportive I highly recommend")
                  },
                  {
                    name: "William Holmes",
                    avatar: AvatarWilliamHolmes,
                    revHeader: this.props.t("Our customers say"),
                    revText: this.props.t("I have been using AVS for several years and can say for sure that it is very convenient user friendly and functional")
                  }
                ]
              }
            />
            <Button className="trustButton" style={{margin: "auto", display: "table"}}
                    href="https://www.trustpilot.com/review/www.avs4you.com" 
                    color="#fff">
                    {this.props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
            </Button>
          </div>
          <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Document Converter</Text>
          <ScreenshotsCarousel
            imageNames={["document_converter_slider1.png", "document_converter_slider2.png", "document_converter_slider3.png", "document_converter_slider4.png", "document_converter_slider5.png"]}
            imageNamesPopup={["document_converter_slider1_2x.png", "document_converter_slider2_2x.png", "document_converter_slider3_2x.png", "document_converter_slider4_2x.png", "document_converter_slider5_2x.png"]}
            altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}

          />
          <PageContentWrapper>
            <div className="downloadInfoWrapper">
              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("File Size")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">63.07 MB</Text>
              </div>

              <div className="downloadInfoRow">
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Current Version")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">10.1.2.627</Text>
              </div>

              <div className="downloadInfoRow">        
                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Platforms")}</Text>
                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 11, 10, 8.1, 8, 7, XP, 2003, Vista {this.props.t("(no Mac OS/ Linux support)")}</Text>
              </div>
            </div>
            <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSDocumentConverter.exe" to="headerContentWrapper" textDownload={this.props.t("download now")}/>
            <div className="licenseText">
              <Text align="center" color="#110C0C" fontSize={13}>{this.props.t("By clicking the Download button you agree to")} <Link to="/license-agreement.aspx">{this.props.t("our End User License Agreement")}</Link></Text>
            </div>
          </PageContentWrapper>
          <div className="technicalSpecificationWrapper">
            <PageContentWrapper>
              <Text className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{this.props.t("Technical specification")}</Text>
              <div className="specificationGrid">
                <div>
                  <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{this.props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD / Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows compatible sound card")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Display")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("CD recorder")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("32-bit color depth")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video capture device")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("required for capturing")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Windows Media Player")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("11 or higher for WMV video playback")}</Text>
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
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("AMD / Intel Core 2 Quad compatible at 24 GHz or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("2 GB or higher")}</Text>
                  </div>
                  <div className="systemWrapper">
                    <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{this.props.t("Video")}</Text>
                    <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible video card")}</Text>
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
export default withI18next({ ns: "common" })(avsFreeDocumentConverter);
