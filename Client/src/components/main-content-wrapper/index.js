import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import PageContentWrapper from '../page-content-wrapper';
import ContentRowItem from '../content-row-item';
import ContentSelector from '../content-selector';
import ScrollUpButton from '../scroll-up-button';

import videoIcon from '../../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../../images/main-page/icons/audio_icon_white.svg'
import imageIcon from '../../images/main-page/icons/image_icon_grey.svg'
import imageIconWhite from '../../images/main-page/icons/image_icon_white.svg'

const StyledMainContentWrapper = styled.div`
    display:block;
    padding-bottom: 100px;

    .ScrollTopWrapper{
        position: absolute;
        top: 100px;
        z-index: 5;
        cursor:pointer;

        .ScrollTopMain{
            position: fixed;
            bottom: -30px;
            right: 30px;
            opacity:0;
            transition: linear 200ms;
        }

        &.show{
            .ScrollTopMain{
                opacity:1;
                bottom:30px;
            }
        }
      }

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
        max-width: 500px;
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

        .ScrollTopWrapper{
            .ScrollTopMain{
                right: 15px;
                opacity:0;

                img{
                    width: 32px;
                    height: 32px;
                }
            }

            &.show{
                .ScrollTopMain{
                    bottom:15px;
                }
            }
        }

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

    @media (max-width: 1050px) {
        margin:auto;
    }
`;

class MainContentWrapper extends React.PureComponent{

    render(){
        return(
            <StyledMainContentWrapper>
                <PageContentWrapper>
                    <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
                    <Text fontSize={46} fontWeight={600} id="mainBodyHeader" className="bodyHeader">Turn your ideas into exciting content</Text>
                    
                    <ContentSelector
                        className="content-wrapper"
                        buttonNames={["Video","Audio"]}
                        disableArrows={true}
                    >
                        <ContentWrapper>
                            <ContentRowItem 
                                imgLeft={false}
                                imageName="slider_video_converter.png"
                                headerText="AVS Video Converter"
                                free={true}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
                                smallButtonLink="/avs-free-video-converter"
                                scrollTo="headerCoupon"
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key video formats and file sizes</Text>
                                <Text  className="ListItem" color="#555555" fontWeight={500}>Smart conversion presets</Text>
                                <Text  className="ListItem" color="#555555" fontWeight={500}>GPU conversion acceleration</Text>
                            </ContentRowItem>

                            <ContentRowItem 
                                imgLeft={true}
                                imageName="slider_video_editor.png"
                                headerText="AVS Video Editor"
                                free={false}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe"
                                smallButtonLink="/avs-video-editor"  
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
                                imageName="slider_video_remaker.png"
                                headerText="AVS Video ReMaker"
                                free={false}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe"
                                smallButtonLink="/avs-video-remaker"   
                                scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Edit video files without reconversion</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Support of all key video formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Create DVD and Blu-ray menus and discs</Text>
                            </ContentRowItem>
                            <ContentRowItem 
                                imgLeft={true}
                                imageName="media_player_formats2x.png"
                                headerText="AVS Media Player"
                                free={true}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSMediaPlayer.exe"
                                smallButtonLink="/avs-free-media-player"   
                                scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Open and watch videos in all popular formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Listen to your favourite music</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>View images as a slideshow</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Create personal playlists</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Take snapshots</Text>
                            </ContentRowItem>
                        </ContentWrapper>

                        <ContentWrapper>
                            <ContentRowItem 
                                imgLeft={false}
                                imageName="slider_audio_editor.png"
                                headerText="AVS Audio Editor"
                                free={false}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe"
                                smallButtonLink="/avs-audio-editor"  
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
                                imageName="slider_audio_converter.png"
                                headerText="AVS Audio Converter"
                                free={false}
                                blueButtonLink="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe"
                                smallButtonLink="/avs-audio-converter"   
                                scrollTo="headerCoupon"   
                            >
                                <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key audio formats</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Modify audio file information</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Create Audiobooks and Ringtones</Text>
                                <Text className="ListItem" color="#555555" fontWeight={500}>Export audio from video</Text>
                            </ContentRowItem>
                        </ContentWrapper>
                    </ContentSelector>
                </PageContentWrapper>
            </StyledMainContentWrapper>  
        )
    }
}

export default MainContentWrapper