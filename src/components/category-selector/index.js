import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import videoIcon from '../../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../../images/main-page/icons/audio_icon_white.svg'
import imageIcon from '../../images/main-page/icons/image_icon_grey.svg'
import imageIconWhite from '../../images/main-page/icons/image_icon_white.svg'

const TextIconSelected = css`
    .textButtonStyles{
        color: #ffffff;

        &:before{
            display:block;
            content: '';
            height:29px;
            width:29px;
            left:0;
            background-image: url(${videoIconWhite});
            background-position: 0;
            background-repeat: no-repeat;
            position: absolute;            
        }

        &.audio:before{
            content: '';
            background-image: url(${audioIconWhite});  
        }

        &.image:before{
            content: '';
            background-image: url(${imageIconWhite});  
        }
    }
`;

const SelectedStyles = css`
    background-color:#FE9235;
    ${TextIconSelected}
`;

const StyledButton = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius:60px;
    cursor: pointer;
    ${props => props.selected && "background-color:#FE9235;"}

    .textButtonStyles{
        padding-left:35px;
        position:relative;
        margin:auto;
        ${props => props.selected && "color: #ffffff"}

        &:before{
            display:block;
            content: '';
            height:29px;
            width:29px;
            left:0;
            background-image: url(${videoIcon});
            background-position: 0;
            background-repeat: no-repeat;
            position: absolute;     
        }

        &.audio:before{
            background-image: url(${audioIcon});  
        }

        &.image:before{
            background-image: url(${imageIcon});  
        }
    }

    &:hover{
        .textButtonStyles{
            text-decoration: underline;
        }
    }

    ${props => props.selected && SelectedStyles}
    
`;

const StyledCategorySelector = styled.div`
    background-color: #EEEEEE;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width:720px;
    margin: auto;
    height: 47px;
    padding:3px;
    border-radius:60px;

    .styledIcon{
        height:29px;
        width:29px;
        display: inline-block;
        margin-right:16px;
    }

    .buttonWrapper{
        display: inline-flex;
        align-items: center;
    }
`;

const CategorySelector = (props) => {
    return(
        <StyledCategorySelector  {...props}>
            <StyledButton selected={props.currentCategory === "video"} onClick={() => props.selectCategory('video')}>
                <Text className="textButtonStyles video" display="inline-block" color="#000000">Video</Text>
            </StyledButton>
            <StyledButton selected={props.currentCategory === "audio"} onClick={() => props.selectCategory('audio')}>
                <Text className="textButtonStyles audio" display="inline-block" color="#000000">Audio</Text>
            </StyledButton>
            <StyledButton selected={props.currentCategory === "image"} onClick={() => props.selectCategory('image')}>
                <Text className="textButtonStyles image" display="inline-block" color="#000000">Image</Text>
            </StyledButton>
        </StyledCategorySelector>
    )
}

export default CategorySelector