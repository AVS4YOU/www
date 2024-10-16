import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import {Link as ScrollLink} from "react-scroll";
import FreeFlag from '../components/free-flag';
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

class avsFreeImageConverter extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            device: "",
        };

        this.getDevice = this.getDevice.bind(this);
    }

    getDevice(device) {
        this.setState({device: device});
    }

    render() {

        return (
            <Layout
                getDevice={this.getDevice}
                pageContext={this.props.pageContext}
                t={this.props.t}
                title={this.props.t("AVS Free Image Converter is a reliable tool to resize images and to convert JPEG JPG PNG CR2 PDF")}
                metaDescription={this.props.t("Convert image files to JPEG, JPG, PNG, CR2, PDF for free with Free AVS Image Converter Resize photos,rotate, adjust color and contrast, apply photo effects")}
                metaKeywords={this.props.t("Free image converter, picture converter, avs image converter, avs photo converter, image converter, image size converter, image converter download, batch image converter, image converter to png, image converter to pdf, image conversion software, image conversion tool, image converting, convert picture format, convert picture to pdf, convert picture to text, convert picture to jpg, convert image, convert image to pdf, convert image to jpeg, convert image to png, convert image size, convert photo, change image size, image size reducer, image resize")}
            >
                <ProductPagesWrapper imageName="purple_background_main.jpg">
                    <div className="headerBackground">
                        <ImageGQL className="headerBackgroundImage" imageName="purple_background_main.png"
                                  style={{position: "absolute"}}/>
                        <PageContentWrapper>
                            <div id="headerContentWrapper" className="headerContentWrapper">
                                <FreeFlag>{this.props.t("Free")}</FreeFlag>
                                <Text color="#ffffff" align="center" className="headerText" lineHeight="65px"
                                      fontSize={68} fontWeight={600}
                                      as="h1">{this.props.t("Free AVS Image Converter")}</Text>
                                <Text color="#ffffff" align="center" className="headerDescription" as="h5"
                                      fontSize={24}>{this.props.t("Compress resize and convert images to JPEG and other key formats")}</Text>
                                <HeaderDownloadButtons
                                    t={this.props.t}
                                    mainHref="https://downloads.avs4you.com/distributives/AVSImageConverter.exe"
                                    secondaryText="Windows 11/10/8/7/Vista/XP"
                                    backgroundColor="orange"
                                    mainPadding="12px 37px"
                                    margin="auto"
                                    id="download-now1_avs-free-image-converter"
                                />
                            </div>
                        </PageContentWrapper>
                        <ImageGQL className="headerImage" imageName={this.props.t("image converter header png")}
                                  style={{maxWidth: "1564px", maxHeight: "473px"}} alt="header-image"/>
                        <ImageGQL className="headerImage mobile" imageName={this.props.t("image converter header png")}
                                  style={{maxWidth: "1564px"}} alt="header-image-mobile"/>
                    </div>
                    <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain"/>
                    <div className="scrollLinksWrapper">
                        <ScrollLink id="scroll-to-overview_avs-free-image-converter" to="overview" spy={true} smooth={true} offset={-70} duration={500}
                                    className="scrollToButton overview">
                            <Text color="#666666" align="center">{this.props.t("Overview")}</Text>
                        </ScrollLink>
                        <ScrollLink id="scroll-to-reviews_avs-free-image-converter" to="reviews" spy={true} smooth={true} offset={0} dyauration={600}
                                    className="scrollToButton reviews">
                            <Text color="#666666" align="center">{this.props.t("Reviews")}</Text>
                        </ScrollLink>
                        <ScrollLink id="scroll-to-screenshots-carousel_avs-free-image-converter" to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700}
                                    className="scrollToButton screentour">
                            <Text color="#666666" align="center">{this.props.t("Screentour")}</Text>
                        </ScrollLink>
                        <ScrollLink id="scroll-to-download-button_avs-free-image-converter" to="downloadButton" spy={true} smooth={true} offset={0} duration={700}
                                    className="scrollToButton download">
                            <Text color="#666666" align="center">{this.props.t("Download")}</Text>
                        </ScrollLink>
                    </div>

                    <PageContentWrapper>
                        <ContentRowItem
                            id="overview"
                            imgLeft={true}
                            imageName={this.props.t("image converter block 1")}
                            headerText={this.props.t("Convert from and to popular formats")}
                        >
                            <Text
                                className="ListItem">{this.props.t("Convert images to all key formats JPEG JPG PNG BMP TIFF TGA GIF animated GIF PNG APNG ITHMB iPhone iPod Thumbnail Files")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Open and convert new formats HEIF HEIC and WebP to JPG JPEG")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Convert RAW images CR2 CRW RAF DNG MEF NEF ARW etc created by digital cameras fast and easily")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Convert your images to PDF format merge multiple JPEG files to PDF")}</Text>
                        </ContentRowItem>

                        <ContentRowItem
                            imgLeft={false}
                            imageName={this.props.t("image converter block 2")}
                            headerText={this.props.t("Easily resize images using presets")}
                        >
                            <Text
                                className="ListItem">{this.props.t("Automatically tailor your photos to popular printing formats")}</Text>
                            <Text className="ListItem">{this.props.t("Create avatars and thumbnails")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Prepare your images for future slideshows to be uploaded to popular websites")}</Text>
                        </ContentRowItem>

                        <ContentRowItem
                            imgLeft={true}
                            imageName={this.props.t("image converter block 3")}
                            headerText={this.props.t("Apply effects")}
                        >
                            <Text
                                className="ListItem">{this.props.t("Adjust contrast and brightness automatically")}</Text>
                            <Text className="ListItem">{this.props.t("Play with brand new filters Adorable")}</Text>
                            <Text className="ListItem">{this.props.t("Apply retro look with the aging effect")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Make your pictures look like analog photography")}</Text>
                            <Text className="ListItem">{this.props.t("Use the black-and-white effect and more")}</Text>
                        </ContentRowItem>

                        <ContentRowItem
                            imgLeft={false}
                            imageName={this.props.t("image converter block 4")}
                            headerText={this.props.t("Watermark your pictures")}
                        >
                            <Text
                                className="ListItem">{this.props.t("Select a logo or write a phrase and apply it to all converted pictures as a personal watermark")}</Text>
                        </ContentRowItem>

                        <ContentRowItem
                            imgLeft={true}
                            imageName={this.props.t("image converter block 5")}
                            headerText={this.props.t("Use Command Line Mode")}
                        >
                            <Text
                                className="ListItem">{this.props.t("Run routine tasks efficiently resize and convert multiple images between various formats")}</Text>
                            <Text
                                className="ListItem">{this.props.t("Make pictures watermarked using customized presets")}</Text>
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
                                        revText: this.props.t("For the price this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent easy to use with quality results")
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
                                id="review_avs-free-image-converter"
                                href="https://www.trustpilot.com/review/www.avs4you.com"
                                color="#fff">
                            {this.props.t("Review us on")} <img src={Star} alt="star"
                                                                style={{filter: "brightness(5)"}}/> Trustpilot
                        </Button>
                    </div>
                    <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Image Converter 6.0</Text>
                    <ScreenshotsCarousel
                        imageNames={[this.props.t("image converter slide 1"), this.props.t("image converter slide 2"), this.props.t("image converter slide 3"), this.props.t("image converter slide 4")]}
                        imageNamesPopup={[this.props.t("image converter slide 1"), this.props.t("image converter slide 2"), this.props.t("image converter slide 3"), this.props.t("image converter slide 4")]}
                        altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}

                    />
                    <PageContentWrapper>
                        <div className="downloadInfoWrapper">
                            <div className="downloadInfoRow">
                                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700}
                                      align="right">{this.props.t("File Size")}</Text>
                                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500}
                                      align="left">36.33 MB</Text>
                            </div>

                            <div className="downloadInfoRow">
                                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700}
                                      align="right">{this.props.t("Current Version")}</Text>
                                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500}
                                      align="left">6.0.3.336</Text>
                            </div>

                            <div className="downloadInfoRow">
                                <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700}
                                      align="right">{this.props.t("Platforms")}</Text>
                                <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500}
                                      align="left">Windows 11, 10, 8.1, 8, 7, Vista,
                                    XP {this.props.t("(no Mac OS/ Linux support)")}</Text>
                            </div>
                        </div>
                        <DownloadScrollButton 
                            className="buttonWrapper"
                            id="download-now2_avs-free-image-converter"
                            href="https://downloads.avs4you.com/distributives/AVSImageConverter.exe"
                            to="headerContentWrapper" 
                            textDownload={this.props.t("download now")}
                            textGetCoupon={this.props.t("get 5 coupon code")}
                            textClicking={this.props.t("By clicking the Download button you agree to")}
                            textLink={this.props.t("our End User License Agreement")}
                            idLink="license-agreement_avs-free-image-converter" 
                            toLink="/license-agreement.aspx"
                        />
                    </PageContentWrapper>
                    <div className="technicalSpecificationWrapper">
                        <PageContentWrapper>
                            <Text className="headerSpecification" color="#000000" fontSize={32} align="center"
                                  fontWeight={600}>{this.props.t("Technical specification")}</Text>
                            <div className="specificationGrid">
                                <div>
                                    <Text className="requirementsHeader" fontSize={18} color="#000000"
                                          fontWeight={600}>{this.props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("AMD / Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("2 GB or higher")} </Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("Windows compatible sound card")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Display")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("32-bit color depth")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("CD recorder")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("32-bit color depth")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("DVD recorder")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("for importing from DVD and creating Video DVD")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700}
                                              align="right">{this.props.t("Video capture device")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("required for capturing")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700}
                                              align="right">{this.props.t("Windows Media Player")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("11 or higher for WMV video playback")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("DirectX")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("Microsoft DirectX 90c or later")}</Text>
                                    </div>
                                </div>
                                <div>
                                    <Text className="requirementsHeader" fontSize={18} color="#000000"
                                          fontWeight={600}>{this.props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Operating system")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("Windows 11/Windows 10/Windows 8.x/Windows 7")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Processor")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("AMD Intel Core 2 Quad compatible at 24 GHz or higher")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("RAM")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("2 GB or higher")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Video")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible video card")}</Text>
                                    </div>
                                    <div className="systemWrapper">
                                        <Text className="pcComponents" as="span" color="#000000" fontSize={16}
                                              fontWeight={700} align="right">{this.props.t("Sound")}</Text>
                                        <Text as="span" color="#000000" fontSize={16} fontWeight={500}
                                              align="left">{this.props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
                                    </div>
                                </div>
                            </div>
                            <Text className="systemInfo" color="#000000" fontSize={16}
                                  fontWeight={500}>*{this.props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
                            <div className="attentionBlock">
                                <Text fontSize={16}
                                      fontWeight={500}>{this.props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}</Text>
                            </div>
                        </PageContentWrapper>
                    </div>
                </ProductPagesWrapper>
            </Layout>
        );
    }
};
export default withI18next({ns: "common"})(avsFreeImageConverter);
