import React from "react";

import {
    HeroSectionStyled,
    HeroSectionContainer,
    HeroSectionTitle,
    HeroSectionDesc, HeroSectionLink, HeroSectionBackgroundVideo,
} from './heroSection.styled'

export const HeroSection = ({t}) => {
    return (
        <HeroSectionStyled>
            <HeroSectionContainer>
                <HeroSectionTitle>
                    <span>{t('Need an app')}</span> like iMovie for Windows?
                </HeroSectionTitle>
                <HeroSectionDesc>
                    {t(`Use AVS Video Editor! It is all-in-one video recorder, 
                    video editor and slideshow maker. Create breathtaking movies with text, music and effects without expertise.`)}
                </HeroSectionDesc>
                <HeroSectionLink href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                    {t('Download AVS Video Editor')}
                    <span>{t('Windows 11/10/8/7/Vista/XP')}</span>
                </HeroSectionLink>
            </HeroSectionContainer>
            <HeroSectionBackgroundVideo autoPlay loop muted src="https://d2nlctn12v279m.cloudfront.net/media/newsletters/november2023/production_id4990248.mp4" />
        </HeroSectionStyled>
    )
}
