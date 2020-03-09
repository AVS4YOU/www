import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import { CSSTransition } from 'react-transition-group';
import ContentRowItem from '../content-row-item';
import ContentSelector from '../content-selector';
import ImageGQ from '../image-gq';

import VideoConverterImage from '../../images/main-page/slider_video_converter.png';
import VideoEditorImage from '../../images/main-page/slider_video_editor.png';
import VideoRemakerImage from '../../images/main-page/slider_video_remaker.png';

import AudioConverterImage from '../../images/main-page/slider_audio_converter.png';
import AudioEditorImage from '../../images/main-page/slider_audio_editor.png';

import PhotoEditorImage from '../../images/main-page/slider_avs_photo_editor.png';
import ImageConverterImage from '../../images/main-page/slider_image_converter.png';

import videoIcon from '../../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../../images/main-page/icons/audio_icon_white.svg'
import imageIcon from '../../images/main-page/icons/image_icon_grey.svg'
import imageIconWhite from '../../images/main-page/icons/image_icon_white.svg'

const StyledMainContentWrapper = styled.div`
    display:block;
    padding-bottom: 100px;

    .alert-enter {
        opacity: 0;
    }
    .alert-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .alert-exit {
        opacity: 1;
    }
    .alert-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }

    .top-selector-buttons-wrapper{
        max-width: 720px;
        width: 100%;
        box-sizing: border-box;
        
        .top-button{
            position:relative;
            padding: 0 24px;

            .selectorText{
                display: inline-block;
                padding-left: 25px;
            }

            .selectorText:before{
                display:block;
                content: '';
                height:29px;
                width:29px;
                left: 29%;
                background-position: 0;
                background-repeat: no-repeat;
                position: absolute;  
                top: 0;
                bottom: 0;
                margin: auto;   
            }

            &:nth-child(1) .selectorText:before{
                background-image: url(${videoIcon});
            }
            &:nth-child(2) .selectorText:before{
                background-image: url(${audioIcon});  
            }
            &:nth-child(3) .selectorText:before{
                background-image: url(${imageIcon});  
            }

            &.selected{
                &:nth-child(1) .selectorText:before{
                    background-image: url(${videoIconWhite});
                }
                &:nth-child(2) .selectorText:before{
                    background-image: url(${audioIconWhite});  
                }
                &:nth-child(3) .selectorText:before{
                    background-image: url(${imageIconWhite});  
                }
            }
        }
    }

    @media (max-width: 750px) {
        .top-selector-buttons-wrapper{
            
            .top-button{
                line-height: 35px;
    
                .selectorText{
                    font-size: 14px;
                    padding-left:0;
                    line-height: 35px;
                }

                .selectorText:before{
                    height: 21px;
                    width: 21px;
                    background-size: contain;
                    position: relative;
                    display: inline-block;
                    vertical-align: sub;
                    padding-right: 10px;
                    left: auto;
                }
            }
        }
    }

    @media (max-width: 450px) {
        .top-selector-buttons-wrapper{
            .top-button {
                .selectorText:before {
                    display:none;
                }
            }
        }
    }
`;

const ContentWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;

    @media (max-width: 1024px) {
        margin-top: 0;
        margin-bottom:0;
    }
`;

class MainContentWrapper extends React.PureComponent{

    render(){
        return(
            <StyledMainContentWrapper>
                <PageContentWrapper>
                    <Text fontSize={46} fontWeight={600} className="bodyHeader">Turn your ideas into exciting content</Text>
                    <ContentSelector
                        className="content-wrapper"
                        buttonNames={["Video","Audio","Image"]}
                        disableArrows={true}
                    >
                        <ContentWrapper>
                            <ContentRowItem 
                                imgLeft={false}
                                src="slider_video_converter.png"
                                headerText="AVS Video Converter"
                                free={true}
                                blueButtonLink="/"
                                smallButtonLink="/" 
                                scrollTo="headerCoupon"
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key video formats and file sizes</Text>
                                <Text  className="ListItem" color="#555555" fontWeight={500}>Smart conversion presets</Text>
                                <Text  className="ListItem" color="#555555" fontWeight={500}>GPU conversion acceleration</Text>
                            </ContentRowItem>

                            <ContentRowItem 
                                imgLeft={true}
                                src="slider_video_editor.png"
                                headerText="AVS Video Editor"
                                free={false}
                                blueButtonLink="/"
                                smallButtonLink="/"  
                                scrollTo="headerCoupon"    
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Edit all key video formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Apply effects and transitions</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Add audio, comments, subtitles</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Use Chroma key, Slow Motion</Text>
                            </ContentRowItem>

                            <ContentRowItem 
                                imgLeft={false}
                                src="slider_video_remaker.png"
                                headerText="AVS Video ReMaker"
                                free={false}
                                blueButtonLink="/"
                                smallButtonLink="/"   
                                scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Edit video files without reconversion</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Support of all key video formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Create DVD and Blu-ray menus and discs</Text>
                            </ContentRowItem>
                        </ContentWrapper>


                        <ContentWrapper>
                            <ContentRowItem 
                                imgLeft={false}
                                src="slider_audio_editor.png"
                                headerText="AVS Audio Editor"
                                free={false}
                                blueButtonLink="/"
                                smallButtonLink="/"  
                                scrollTo="headerCoupon"    
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Record audio data</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Improve sound quality</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Remove noise</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Text to Speech</Text>
                            </ContentRowItem>

                            <ContentRowItem 
                                imgLeft={true}
                                src="slider_audio_converter.png"
                                headerText="AVS Audio Converter"
                                free={false}
                                blueButtonLink="/"
                                smallButtonLink="/"   
                                scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key audio formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Modify audio file information</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Create Audiobooks and Ringtones</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Export audio from video</Text>
                            </ContentRowItem>
                        </ContentWrapper>

                        <ContentWrapper>
                            <ContentRowItem 
                            imgLeft={false}
                            src="slider_avs_photo_editor.png"
                            headerText="AVS Photo Editor"
                            free={true}
                            blueButtonLink="/"
                            smallButtonLink="/"   
                            scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Open and edit all key image formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Play with colors, shades and tints</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Remove red eye effect</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>RAdjust color balance, brightness, contrast and saturation</Text>
                            </ContentRowItem>

                            <ContentRowItem 
                                imgLeft={true}
                                src="slider_image_converter.png"
                                headerText="AVS Image Converter"
                                free={true}
                                blueButtonLink="/"
                                smallButtonLink="/"      
                                scrollTo="headerCoupon"
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key image formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Automatically resize your photos to popular formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Get the effect of aging in old photographs</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Use the black-and-white effect and etc.</Text>
                            </ContentRowItem>
                        </ContentWrapper>
                    </ContentSelector>
                </PageContentWrapper>
            </StyledMainContentWrapper>  
        )
    }
}

export default MainContentWrapper