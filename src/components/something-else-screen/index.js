import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import Button from '../button';

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
`;

const SomethingElseScreen = () => {
    return(
        <StyledWrapper>
            <PageContentWrapper>
                <Text color="#3D3D3D" fontSize={40} fontWeight={600} className="bodyHeader">Looking for something else?</Text>
                <div className="productsContainer">
                    <StyledProductBox>
                        <img src={MediaPlayerImg}/>
                        <div className="textWrapper">
                            <Text as="span" className="flagBackground se">Free</Text>
                            <Text className="header" color="#474747">AVS Media Player</Text>
                            <Text className="bodyText" color="#474747" fontSize={14}>Open all popular video and audio formats and play media files for free (MP4, MPEG, AVI, WMV, MKV, FLV etc.) on your computer.</Text>
                            <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                        </div>
                    </StyledProductBox>
                    <StyledProductBox>
                        <img src={DocumentConverterImg}/>
                        <div className="textWrapper">
                            <Text as="span" className="flagBackground se">Free</Text>
                            <Text className="header" color="#474747">AVS Document Converter</Text>
                            <Text className="bodyText" color="#474747" fontSize={14}>Convert your document files between DOC, PDF, DOCX, TXT, HTML, etc. Work with e-Pub, Mobi, DjVu or FB2.</Text>
                            <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                        </div>
                    </StyledProductBox>
                    <StyledProductBox>
                        <img src={DiscCreatorImg}/>
                        <div className="textWrapper">
                            <Text as="span" className="flagBackground se">Free</Text>
                            <Text className="header" color="#474747">AVS Disc Creator</Text>
                            <Text className="bodyText" color="#474747" fontSize={14}>Make backup copies of your home Blu-ray, CD/DVD discs, restore a DVD-Video disc, create ISO files.</Text>
                            <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                        </div>
                    </StyledProductBox>
                    <StyledProductBox>
                        <img src={RegistryCleanerImg}/>
                        <div className="textWrapper">
                            <Text as="span" className="flagBackground se">Free</Text>
                            <Text className="header" color="#474747">AVS Registry Cleaner</Text>
                            <Text className="bodyText" color="#474747" fontSize={14}>Scan, clean and repair the Windows registry of your PC</Text>
                            <Button className="absoluteButton" fontSize={12} padding="9px 28px" href="/" textTransform="uppercase">download now</Button>
                        </div>
                    </StyledProductBox>
                </div>
            </PageContentWrapper>
        </StyledWrapper>
    )
}

export default SomethingElseScreen;