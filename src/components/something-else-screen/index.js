import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import Button from '../button';
import Slider from "react-slick";
import LeftArrow from '../../images/common/icons/arrow-left.svg';
import RightArrow from '../../images/common/icons/arrow-right.svg';

import MediaPlayerImg from '../../images/main-page/avs_media_player.png';
import DocumentConverterImg from '../../images/main-page/avs-document-converter.png';
import RegistryCleanerImg from '../../images/main-page/avs_registry_cleaner.png';
import DiscCreatorImg from '../../images/main-page/avs_disc_creator.png';

const StyledWrapper = styled.div`
    display:block;
    background-color: #FAF7F2;
    padding-bottom: 100px;

    .productsContainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        max-width: 1200px;
        margin: auto;
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
        padding:5px;
    }

    .slick-initialized .slick-slide.slick-current{
        z-index: 3 !important;
    }

    @media (max-width: 1300px) {
        .productsContainer{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            max-width: 710px;
            margin: auto;
        }
    }

    @media (max-width: 1024px){
        padding-bottom: 0;
    }

    .slick-initialized .slick-slide>div{
        padding: 0 10px;
    }

    .slick-track{
        display: flex;
    
        .slick-slide {
          height: auto;
    
          > div {
            height: 100%;
          }
    
        }
    }
`;

const StyledProductBox = styled.div`
    background-color:#ffffff;
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

class SomethingElseScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          width: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
        });
    }

    render() {

        const isTablet = this.state.width < 1050;
        const isMobile = this.state.width < 750;

        return(
            <StyledWrapper>
                <PageContentWrapper>

                {!isTablet 
                ?   <>
                        <Text color="#3D3D3D" fontSize={40} fontWeight={600} className="bodyHeader">Looking for something else?</Text>
                        <div className="productsContainer">
                        <StyledProductBox>
                            <img src={MediaPlayerImg} alt="Media Player"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Media Player</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Open all popular video and audio formats and play media files for free (MP4, MPEG, AVI, WMV, MKV, FLV etc.) on your computer.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <img src={DocumentConverterImg} alt="Document Converter"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Document Converter</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Convert your document files between DOC, PDF, DOCX, TXT, HTML, etc. Work with e-Pub, Mobi, DjVu or FB2.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <img src={DiscCreatorImg} alt="Disc Creator"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Disc Creator</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Make backup copies of your home Blu-ray, CD/DVD discs, restore a DVD-Video disc, create ISO files.</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                            </div>
                        </StyledProductBox>
                        <StyledProductBox>
                            <img src={RegistryCleanerImg} alt="Registry Cleaner"/>
                            <div className="textWrapper">
                                <Text as="span" className="flagBackground se">Free</Text>
                                <Text className="header" color="#474747">AVS Registry Cleaner</Text>
                                <Text className="bodyText" color="#474747" fontSize={14}>Scan, clean and repair the Windows registry of your PC</Text>
                                <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                            </div>
                        </StyledProductBox>
                        </div>
                    </>
                : 
                    <div className="CarouselWrapper">
                        <Slider 
                            arrows={true}
                            infinite={true}
                            slidesToShow={isMobile ? 1 : 2}
                            slidesToScroll={1}
                            swipeToSlide={false}
                            focusOnSelect={false}
                            className="visibleSlider"
                        >
                            <StyledProductBox>
                                <img src={MediaPlayerImg} alt="Media Player"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Media Player</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Open all popular video and audio formats and play media files for free (MP4, MPEG, AVI, WMV, MKV, FLV etc.) on your computer.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <img src={DocumentConverterImg} alt="Document Converter"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Document Converter</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Convert your document files between DOC, PDF, DOCX, TXT, HTML, etc. Work with e-Pub, Mobi, DjVu or FB2.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <img src={DiscCreatorImg} alt="Disc Creator"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Disc Creator</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Make backup copies of your home Blu-ray, CD/DVD discs, restore a DVD-Video disc, create ISO files.</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">GET $5 COUPON CODE</Button>
                                </div>
                            </StyledProductBox>
                            <StyledProductBox>
                                <img src={RegistryCleanerImg} alt="Registry Cleaner"/>
                                <div className="textWrapper">
                                    <Text as="span" className="flagBackground se">Free</Text>
                                    <Text className="header" color="#474747">AVS Registry Cleaner</Text>
                                    <Text className="bodyText" color="#474747" fontSize={14}>Scan, clean and repair the Windows registry of your PC</Text>
                                    <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">GET $5 COUPON CODE</Button>
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