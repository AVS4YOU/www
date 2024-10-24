import React from "react";

import {
    HeroSectionStyled,
    HeroSectionContainer,
    HeroSectionTitle,
    HeroSectionDesc, HeroSectionLink,
} from './heroSection.styled'

import videoHeaderBG from "../../../images/avs-video-editor-imovie/video-header-imovie.mp4"

export const HeroSection = ({t}) => {
    return (
        <HeroSectionStyled>
            <video  muted loop ref={(ref) => ref?.play()} style={{position: "absolute"}}>
            <source src={videoHeaderBG} />
                Your browser does not support HTML5 video.
            </video>
            <HeroSectionContainer>
                <HeroSectionTitle>
                    <span>{t('Need an app')}</span> like iMovie for Windows?
                </HeroSectionTitle>
                <HeroSectionDesc>
                    {t(`Use AVS Video Editor! It is all-in-one video recorder, 
                    video editor and slideshow maker. Create breathtaking movies with text, music and effects without expertise.`)}
                </HeroSectionDesc>
                <HeroSectionLink id="download_avs-video-editor-imovie" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                    {t('Download AVS Video Editor')}
                    <span>{t('Windows 11/10/8/7/Vista/XP')}</span>
                </HeroSectionLink>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
