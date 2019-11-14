import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import Button from '../button';
import { CSSTransition } from 'react-transition-group';

import VideoConverterImage from '../../images/main-page/slider_video_converter.png';
import VideoEditorImage from '../../images/main-page/slider_video_editor.png';
import VideoRemakerImage from '../../images/main-page/slider_video_remaker.png';

import AudioConverterImage from '../../images/main-page/slider_audio_converter.png';
import AudioEditorImage from '../../images/main-page/slider_audio_editor.png';

import PhotoEditorImage from '../../images/main-page/slider_avs_photo_editor.png';
import ImageConverterImage from '../../images/main-page/slider_image_converter.png';

import bgBlue from '../../images/main-page/back_picture_blue.svg'
import bgOrange from '../../images/main-page/back_picture_orange.svg'

const RowContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 100px;

    &:first-child{
        padding-top: 0;
    }
    
    .buttonsWrapper {
        display: grid;
        grid-template-columns: auto auto 1fr;
        align-items: center;
        grid-gap: 30px;
        padding-top: 60px;
    }

    .rowImage{
        max-width: 724px;
        position: relative;
        z-index: 2;
    }

    .bgOrange{
        position:relative;

        &:before{
            content: '';
            background-image: url(${bgOrange});
            background-size: 100%;
            background-repeat: no-repeat;
            width: 206px;
            height:206px;
            left: -36px;
            top: -36px;
            position:absolute;
            z-index: 1;
        }
    } 

    .bgBlue{
        position:relative;

        &:before{
            content: '';
            background-image: url(${bgBlue});
            background-size: 100%;
            background-repeat: no-repeat;
            width: 206px;
            height:206px;
            right:-36px;
            top: -36px;
            position:absolute;
            z-index: 1;
        }
    }

    .flexWrapper{
        display: flex;
        align-items: center;
        margin: auto;
    }

    .ListItem{
        padding-left: 20px;
        padding-bottom: 10px;
        position:relative;

        &:before{
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background-color: #1E72D2;
            position: absolute;
            left:0;
            top: 10px;
        }
    }

    .HeaderListItem{
        padding-bottom: 20px;
        display: inline-flex;
        align-items: center;
    }

    .free{
        background-color: #FDA050;
        margin-left: 15px;
        padding: 4px 20px;
        font-size: 13px;
        position: relative;
        top: 0px;
        color: #fff;
        padding-right: 30px;

        &:after{
            content: '';
            background-color: transparent;
            border: 15px solid transparent;
            border-right: 15px solid #fff;
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
        }
    }
`;

const ContentWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;
`;

function renderContent (props) {
    
    switch(props.currentCategory) {
        case 'video':
            return  (
                <>
                <RowContent>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>
                                AVS Video Converter
                                <Text as="span" className="free">Free</Text>
                            </Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key video formats and file sizes</Text>
                            <Text  className="ListItem" color="#555555" fontWeight={500}>Smart conversion presets</Text>
                            <Text  className="ListItem" color="#555555" fontWeight={500}>GPU conversion acceleration</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                    <div className="bgOrange">
                        <img className="rowImage" src={VideoConverterImage}></img>
                    </div>
                </RowContent>
                <RowContent>
                    <div className="bgBlue">
                        <img className="rowImage" src={VideoEditorImage}></img>
                    </div>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>AVS Video Editor</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Edit all key video formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Apply effects and transitions</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Add audio, comments, subtitles</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Use Chroma key, Slow Motion</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                </RowContent>
                <RowContent>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>AVS Video ReMaker</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Edit video files without reconversion</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Support of all key video formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Create DVD and Blu-ray menus and discs</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                    <div className="bgOrange">
                        <img className="rowImage" src={VideoRemakerImage}></img>
                    </div>
                </RowContent>
                </>
            )
        case 'audio':
            return (
                <>
                <RowContent>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>AVS Audio Editor</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Record audio data</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Improve sound quality</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Remove noise</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Text to Speech</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                    <div className="bgOrange">
                        <img className="rowImage" src={AudioEditorImage}></img>
                    </div>
                </RowContent>
                <RowContent>
                    <div className="bgBlue">
                        <img className="rowImage" src={AudioConverterImage}></img>
                    </div>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>AVS Audio Converter</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key audio formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Modify audio file information</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Create Audiobooks and Ringtones</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Export audio from video</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                </RowContent>
                </>
            )
        case 'image':
            return (
                <>
                <RowContent>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>
                                AVS Photo Editor
                                <Text as="span" className="free">Free</Text>
                            </Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Open and edit all key image formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Play with colors, shades and tints</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Remove red eye effect</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>RAdjust color balance, brightness, contrast and saturation</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                    <div className="bgOrange">
                        <img className="rowImage" src={PhotoEditorImage}></img>
                    </div>
                </RowContent>
                <RowContent>
                    <div className="bgBlue">
                        <img className="rowImage" src={ImageConverterImage}></img>
                    </div>
                    <div className="flexWrapper">
                        <div>
                            <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>
                                AVS Image Converter
                                <Text as="span" className="free">Free</Text>
                            </Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key image formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Automatically resize your photos to popular formats</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Get the effect of aging in old photographs</Text>
                            <Text className="ListItem" color="#555555" fontWeight={500}>Use the black-and-white effect and etc.</Text>
                            <div className="buttonsWrapper">
                                <Button fontSize={18} padding="9px 35px" href="/" textTransform="uppercase">download now</Button>
                                <Button href="/" textTransform="uppercase" color="#1E72D2" background={false}>learn more</Button>
                            </div>
                        </div>
                    </div>
                </RowContent>
                </>
            )
    }
}

const CategoryCarousel = (props) => {

    return(
        <ContentWrapper>
            {renderContent(props)}
        </ContentWrapper>
    )
};

export default CategoryCarousel;