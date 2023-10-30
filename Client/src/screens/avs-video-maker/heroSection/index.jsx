import React from "react";
import {
    HeroSectionCollage, HeroSectionCollageBox,
    HeroSectionContainer,
    HeroSectionContent,
    HeroSectionContentLink,
    HeroSectionContentSubtitle,
    HeroSectionContentTitle,
    HeroSectionStyled,
    HeroSectionCollageImg,
} from './heroSection.styled'
import img1 from '../../../images/avs-video-maker/hero1.png'
import img12x from '../../../images/avs-video-maker/hero3@2x.png'

export const HeroSection = ({t}) => {
    return (
        <HeroSectionStyled>
            <HeroSectionContainer>
                <HeroSectionContent>
                    <HeroSectionContentTitle>
                        {t('AVS Video Editor')}
                    </HeroSectionContentTitle>
                    <HeroSectionContentSubtitle>
                        {t('Create engaging content effortlessly with no editing experience.')}
                    </HeroSectionContentSubtitle>
                    <HeroSectionContentLink>
                        <span>
                            {t('Download Video Maker')}
                        </span>
                        <span>
                            {t('Windows 11/10/8/7/Vista/XP')}
                        </span>
                    </HeroSectionContentLink>
                </HeroSectionContent>
                <HeroSectionCollage>
                    <HeroSectionCollageBox>
                        <HeroSectionCollageImg src={img1} srcSet={`${img1} 1x, ${img12x} 2x`} />
                    </HeroSectionCollageBox>
                    <HeroSectionCollageBox>

                    </HeroSectionCollageBox>
                </HeroSectionCollage>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
