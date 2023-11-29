import React from "react";

import {
    HeroSectionStyled,
    HeroSectionContainer,
    HeroSectionTitle,
    HeroSectionDesc, HeroSectionLink,
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
                <HeroSectionLink>
                    {t('Download AVS Video Editor')}
                    <span>{t('Windows 11/10/8/7/Vista/XP')}</span>
                </HeroSectionLink>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
