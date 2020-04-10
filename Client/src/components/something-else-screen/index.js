import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import Button from '../button';
import ImageGQL from '../image-gql';
import Slider from "react-slick";
import { Link } from "react-scroll";
import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';
import UAParser from 'ua-parser-js';

const mobileStyles = css`
    .scrollLink{
        display:block;

        .absoluteButton{
            display:block;
        }
    }

    .absoluteButton{
        display:none;
    }
`;

const desktopStyles = css`
    .scrollLink{
        display:none;

        .absoluteButton{
            display:none;
        }
    }

    .absoluteButton{
        display:block;
    }
`;

const StyledWrapper = styled.div`
    display:block;
    background-color: #FAF7F2;
    padding-bottom: 100px;

    .productsContainer{
        display: table;
        max-width: 1250px;
        margin: auto;
        border-spacing: 20px 0px;
    }

    .textWrapper{
        padding:15px;
        padding-top: 25px;
        padding-bottom: 50px;
    }

    .flagBackground.se{
        margin-left:0;
    }

    .header{
        padding-top: 15px;
    }

    .bodyText{
        padding-top: 8px;
        padding-bottom: 25px;
    }

    .absoluteButton{
        position:absolute;
        left: 15px;
        bottom:18px;
    }

    .slick-dots li button:before{
        color: #9A9997;
        opacity: 1;
        font-size: 10px;
    }

    .slick-dots li.slick-active button:before{
        color: #1473E6;
        opacity: 1;
    }

    .slick-dots li{
        margin: 0;
    }

    .slick-list{
        padding-bottom: 20px;
    }

    .visibleSlider{
        max-width: 900px;
        margin: 50px auto;
    }

    .slick-prev, .slick-next, .slick-prev:focus{
        width:45px;
        height:45px;
        background-color: #FFFFFF;
        border-radius: 30px;
        background-image: url(${LeftArrow});
        background-repeat: no-repeat;
        background-position: 45% 50%;
        z-index: 3;
        transition: linear 0.2s;
        box-shadow: 0 20px 40px rgba(0,0,0,.1);

        &:hover{
            box-shadow: 0 20px 40px rgba(0,0,0,.1);
            background-color: #fff;
            background-image: url(${LeftArrow});
            background-repeat: no-repeat;
            background-position: 45% 50%;
        }

        &:before{
            content: none; 
        }
    }

    .slick-next, .slick-next:focus{
        background-image: url(${RightArrow});
        background-position: 55% 50%;
        background-color: #FFFFFF;
        background-repeat: no-repeat;

        &:hover{
            background-image: url(${RightArrow});
            background-position: 55% 50%;
            background-color: #ffffff;
        }
    }

    .CarouselWrapper{
        padding: 1px 25px;
    }

    .slick-initialized .slick-slide.slick-current{
        z-index: 3 !important;
    }

    ${props => props.touchDevice ? mobileStyles : desktopStyles}

    @media (max-width: 1300px) {
        .productsContainer{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            max-width: 710px;
            margin: auto;
        }
    }

    .slick-initialized .slick-slide>div{
        padding: 0 10px;
    }

    .slick-track{
        display: flex;
    
        .slick-slide {
          height: auto;
    
          >div {
            height: 100%;
          }
    
        }
    }
    
    @media (max-width: 1024px){
        padding-bottom: 0;
    }

    @media (max-width: 750px) {
        .slick-initialized .slick-slide>div{
            background-color: #fff;
        }
    }

    @media (max-width: 380px){
        .CarouselWrapper{
            padding: 1px 10px;
        }
    }
`;

const StyledProductBox = styled.div`
    background-color:#ffffff;
    display: table-cell;
    width: 25%;
    max-width: 285px;
    box-shadow: 0px -1px 24px #ffffff;
    transition: linear 0.2s;
    position:relative;

    &:hover{
        box-shadow: 0px -1px 24px #00000024;
    }

    &>img{
        max-width: 280px;
    }

    @media (max-width: 1024px){
        height: 100%;
    }
`;

class SomethingElseScreen extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isTablet: false,
            isMobile: false,
            touchDevice: false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        var parser = new UAParser();
        var result = parser.getResult();

        this.setState({
            touchDevice: result.device.type === "mobile" || result.device.type === "tablet"
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {

        this.setState({
            isTablet: window.innerWidth < 1050,
            isMobile: window.innerWidth < 750
        })
    }

    render() {
        return(
            <StyledWrapper touchDevice={this.state.touchDevice}>
                <PageContentWrapper>
                {!this.state.isTablet ?
                   <>
                        <Text color="#3D3D3D" fontSize={40} fontWeight={600} className="bodyHeader">Looking for something else?</Text>
                        <div className="productsContainer">
                        <StyledProductBox>
                            <ImageGQL imageName="avs_media_player.png" alt="Media Player"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Media Player</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Open all popular video and audio formats and play media files for free (MP4, MPEG, AVI, WMV, MKV, FLV etc.) on your computer.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" textTransform="uppercase">download now</Button>
                                <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </Link>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <ImageGQL imageName="avs-document-converter.png" alt="Document Converter"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Document Converter</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Convert your document files between DOC, PDF, DOCX, TXT, HTML, etc. Work with e-Pub, Mobi, DjVu or FB2.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSDocumentConverter.exe" textTransform="uppercase">download now</Button>
                                <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </Link>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <ImageGQL imageName="avs_disc_creator.png" alt="Disc Creator"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Disc Creator</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Make backup copies of your home Blu-ray, CD/DVD discs, restore a DVD-Video disc, create ISO files.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSDiscCreator.exe" textTransform="uppercase">download now</Button>
                                <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </Link>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <ImageGQL imageName="avs_registry_cleaner.png" alt="Registry Cleaner"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Registry Cleaner</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Scan, clean and repair the Windows registry of your PC</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSRegistryCleaner.exe" textTransform="uppercase">download now</Button>
                                <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </Link>
                            </div>
                        </StyledProductBox>
                        </div>
                    </>
                : 
                    <div className="CarouselWrapper">
                        <Slider 
                            arrows={true}
                            infinite={true}
                            slidesToShow={this.state.isMobile ? 1 : 2}
                            slidesToScroll={1}
                            swipeToSlide={false}
                            focusOnSelect={false}
                            className="visibleSlider"
                        >
                            <StyledProductBox>
                                <ImageGQL imageName="avs_media_player.png" alt="Media Player"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Media Player</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Open all popular video and audio formats and play media files for free (MP4, MPEG, AVI, WMV, MKV, FLV etc.) on your computer.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe" textTransform="uppercase">download now</Button>
                                    <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                        <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                    </Link>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <ImageGQL imageName="avs-document-converter.png" alt="Document Converter"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Document Converter</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Convert your document files between DOC, PDF, DOCX, TXT, HTML, etc. Work with e-Pub, Mobi, DjVu or FB2.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSDocumentConverter.exe" textTransform="uppercase">download now</Button>
                                    <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                        <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                    </Link>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <ImageGQL imageName="avs_registry_cleaner.png" alt="Disc Creator"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Disc Creator</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Make backup copies of your home Blu-ray, CD/DVD discs, restore a DVD-Video disc, create ISO files.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSDiscCreator.exe" textTransform="uppercase">download now</Button>
                                    <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                        <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                    </Link>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <ImageGQL imageName="avs_disc_creator.png" alt="Registry Cleaner"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Registry Cleaner</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Scan, clean and repair the Windows registry of your PC</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="https://downloads.avs4you.com/distributives/AVSRegistryCleaner.exe" textTransform="uppercase">download now</Button>
                                    <Link className="scrollLink" to={this.props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                        <Button as="div" className="absoluteButton" fontSize={12} padding="9px 28px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                    </Link>
                                </div>
                            </StyledProductBox>
                        </Slider>
                    </div>
                }
                </PageContentWrapper>
            </StyledWrapper>
        )
    }
}

export default SomethingElseScreen;