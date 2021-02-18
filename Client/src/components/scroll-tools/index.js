import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import VideoEditor from '../../images/installed-pack/video-editor-slide.jpg'
import videoConverter from '../../images/installed-pack/video-converter-slide.jpg'
import videoRemaker from '../../images/installed-pack/video-remaker-slide.jpg'
import audioConverter from '../../images/installed-pack/audio-converter-slide.jpg'
import audioEditor from '../../images/installed-pack/audio-editor-slide.jpg'

const ClassToggleStyled = styled.div`

  .scrollWrapper{
    position:relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .rightSide{
      position:relative;

  }

  .scrollItem{
    display: flex;
    align-items: center;
    height: 100vh;
    position:relative;

    .trigger{
        position:absolute;
        height:1px;
        width:1px;
        left: 0;
        top:0;
        bottom:0;
        margin:auto;
    }

    .textItem{
        width: 90%;
        max-width: 425px;
        margin:auto;
    }

    .textItem__heading{
        font-size: 40px;
        color: #00819f;
        font-weight: 600;
        margin-bottom: 1em;
    }

    .textItem__paragraph{
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 1em;
    }
  }
  .scrolledImages{
    position:absolute;
    width: 100%;
    top: 0px;
    right: 0;
    background-repeat: no-repeat;
    height: 100vh;
    background-size: contain;
    transition: opacity 0.3s;
    opacity:1;
    background-color: #4eb0c7;
    background-position: 50%;

    &.videoEditor{
        background-image: url(${VideoEditor});
        z-index:5;
    }
    &.videoConverter{
        background-image: url(${videoConverter});
        z-index:4;
    }
    &.videoRemaker{
        background-image: url(${videoRemaker});
        z-index:3;
    }
    &.audioConverter{
        background-image: url(${audioConverter});
        z-index:2;
    }
    &.audioEditor{
        background-image: url(${audioEditor});
        z-index:1;
    }

    &.fadeOut{
        opacity:0;
    }
  }

    .imagesContainer{
        background-color:#4eb0c7;
        width: 50%;
        height: 100vh;

        &.pinned{
            position: fixed;
            top: 0;
        }

        &.endScroll{
            position: absolute;
            top: auto;
            bottom: 0;
            width: 100%;
        }
    }
`;

class ScrollTools extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ClassToggleStyled>           
                <div className="scrollWrapper">

                    {this.props.children}
                    <div className="rightSide">
                    <Controller>
                        <Scene classToggle="pinned" triggerElement="#trigger">
                            <div className="imagesContainer">
                                <div className="scrolledImages videoEditor"/>
                                <div className="scrolledImages videoConverter"/>
                                <div className="scrolledImages videoRemaker"/>
                                <div className="scrolledImages audioConverter"/>
                                <div className="scrolledImages audioEditor"/>
                            </div>
                        </Scene>
                        <Scene classToggle={['.videoEditor', 'fadeOut']} triggerElement="#trigger1">
                            <div></div>
                        </Scene>
                        <Scene classToggle={['.videoConverter', 'fadeOut']} triggerElement="#trigger2">
                            <div></div>
                        </Scene>
                        <Scene classToggle={['.videoRemaker', 'fadeOut']} triggerElement="#trigger3">
                            <div></div>
                        </Scene>
                        <Scene classToggle={['.audioConverter', 'fadeOut']} triggerElement="#trigger4">
                            <div></div>
                        </Scene>
                        <Scene classToggle={['.imagesContainer', 'endScroll']} triggerElement="#trigger5">
                            <div></div>
                        </Scene>
                    </Controller>
                    </div>
                </div>
            </ClassToggleStyled>
        );
    }
}

export default ScrollTools