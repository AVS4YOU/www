import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import ContentRowItem from '../content-row-item';

import VideoConverterImage from '../../images/main-page/slider_video_converter.png';
import VideoEditorImage from '../../images/main-page/slider_video_editor.png';
import VideoRemakerImage from '../../images/main-page/slider_video_remaker.png';

import AudioConverterImage from '../../images/main-page/slider_audio_converter.png';
import AudioEditorImage from '../../images/main-page/slider_audio_editor.png';

import PhotoEditorImage from '../../images/main-page/slider_avs_photo_editor.png';
import ImageConverterImage from '../../images/main-page/slider_image_converter.png';


const ContentWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;
`;

function renderContent (props) {
    
    switch(props.currentCategory) {
        case 'video':
            return  (
                <>
                <ContentRowItem 
                    imgLeft={false}
                    image={VideoConverterImage}
                    headerText="AVS Video Converter"
                    free={true}
                    blueButtonLink="/"
                    smallButtonLink="/"      
                >
                    <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key video formats and file sizes</Text>
                    <Text  className="ListItem" color="#555555" fontWeight={500}>Smart conversion presets</Text>
                    <Text  className="ListItem" color="#555555" fontWeight={500}>GPU conversion acceleration</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    image={VideoEditorImage}
                    headerText="AVS Video Editor"
                    free={false}
                    blueButtonLink="/"
                    smallButtonLink="/"      
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
                    image={VideoRemakerImage}
                    headerText="AVS Video ReMaker"
                    free={false}
                    blueButtonLink="/"
                    smallButtonLink="/"      
                >
                    <Text className="ListItem" color="#555555" fontWeight={500}>Edit video files without reconversion</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Support of all key video formats</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join video files</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Transfer video from camcorders and video cameras</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Capture PC screen</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Create DVD and Blu-ray menus and discs</Text>
                </ContentRowItem>
                </>
            )
        case 'audio':
            return (
                <>
                <ContentRowItem 
                    imgLeft={false}
                    image={AudioEditorImage}
                    headerText="AVS Audio Editor"
                    free={false}
                    blueButtonLink="/"
                    smallButtonLink="/"      
                >
                    <Text className="ListItem" color="#555555" fontWeight={500}>Record audio data</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Improve sound quality</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Remove noise</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Text to Speech</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    image={AudioConverterImage}
                    headerText="AVS Audio Converter"
                    free={false}
                    blueButtonLink="/"
                    smallButtonLink="/"      
                >
                    <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key audio formats</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Cut, trim, join and mix audio files</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Modify audio file information</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Create Audiobooks and Ringtones</Text>
                    <Text className="ListItem" color="#555555" fontWeight={500}>Export audio from video</Text>
                </ContentRowItem>
                </>
            )
        case 'image':
            return (
                <>
                    <ContentRowItem 
                        imgLeft={false}
                        image={PhotoEditorImage}
                        headerText="AVS Photo Editor"
                        free={true}
                        blueButtonLink="/"
                        smallButtonLink="/"      
                    >
                        <Text className="ListItem" color="#555555" fontWeight={500}>Open and edit all key image formats</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Play with colors, shades and tints</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Remove red eye effect</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>RAdjust color balance, brightness, contrast and saturation</Text>
                    </ContentRowItem>

                    <ContentRowItem 
                        imgLeft={true}
                        image={ImageConverterImage}
                        headerText="AVS Image Converter"
                        free={true}
                        blueButtonLink="/"
                        smallButtonLink="/"      
                    >
                        <Text className="ListItem" color="#555555" fontWeight={500}>Convert all key image formats</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Automatically resize your photos to popular formats</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Rotate, crop pictures without quality loss</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Get the effect of aging in old photographs</Text>
                        <Text className="ListItem" color="#555555" fontWeight={500}>Use the black-and-white effect and etc.</Text>
                    </ContentRowItem>
                </>
            )
        default: 
            return (
                <div></div>
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