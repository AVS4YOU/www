import React from "react";
import { Link } from 'gatsby'

import {
    HeroSectionContainer,
    HeroSectionContent,
    HeroSectionContentLink,
    HeroSectionContentSubtitle,
    HeroSectionContentTitle,
    HeroSectionStyled,
    HeroSectionLinkWrapper, HeroSectionVideo, HeroSectionMobileVideo,
} from './heroSection.styled'
import logo from '../../../images/common/logo.svg'

import video2 from '../../../images/avs-video-maker/hero2.mp4'
import poster2 from '../../../images/avs-video-maker/hero2.png'

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
                        <Link id="donwload_avs-video-maker" to="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                            <span>
                                {t('Download Video Maker')}
                            </span>
                            <span>
                                {t('Windows 11/10/8/7/Vista/XP')}
                            </span>
                        </Link>
                    </HeroSectionContentLink>
                </HeroSectionContent>
                <HeroSectionVideo  muted loop ref={(ref) => ref?.play()}>
                    <source src="http://d2nlctn12v279m.cloudfront.net/media/newsletters/december2023/main_1.mp4"/>
                </HeroSectionVideo>
                <HeroSectionMobileVideo muted loop ref={(ref) => ref?.play()} poster={poster2}>
                    <source src={video2}/>
                </HeroSectionMobileVideo>
            </HeroSectionContainer>
            <HeroSectionLinkWrapper>
                <Link id="main_avs-video-maker" to="/">
                    <img src={logo}/>
                </Link>
            </HeroSectionLinkWrapper>
        </HeroSectionStyled>
    )
}
