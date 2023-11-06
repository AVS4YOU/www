import React, {useEffect, useRef} from "react";
import {
    HeroSectionCollage, HeroSectionCollageBox,
    HeroSectionContainer,
    HeroSectionContent,
    HeroSectionContentLink,
    HeroSectionContentSubtitle,
    HeroSectionContentTitle,
    HeroSectionStyled,
    HeroSectionCollageImg, HeroSectionLinkWrapper,
} from './heroSection.styled'
import img1 from '../../../images/avs-video-maker/hero1.png'
import img12x from '../../../images/avs-video-maker/hero1@2x.png'
import img2 from '../../../images/avs-video-maker/hero2.png'
import img22x from '../../../images/avs-video-maker/hero2@2x.png'
import img3 from '../../../images/avs-video-maker/hero3.png'
import img32x from '../../../images/avs-video-maker/hero3@2x.png'
import img4 from '../../../images/avs-video-maker/hero4.png'
import img42x from '../../../images/avs-video-maker/hero4@2x.png'
import img5 from '../../../images/avs-video-maker/hero5.png'
import img52x from '../../../images/avs-video-maker/hero5@2x.png'
import Link from "../../../components/link";
import logo from '../../../images/common/logo.svg'

import video1 from '../../../images/avs-video-maker/hero1.mp4'
import video2 from '../../../images/avs-video-maker/hero2.mp4'
import video3 from '../../../images/avs-video-maker/hero3.mp4'
import video4 from '../../../images/avs-video-maker/hero4.mp4'
import video5 from '../../../images/avs-video-maker/hero5.mp4'
import video6 from '../../../images/avs-video-maker/hero6.mp4'
import video7 from '../../../images/avs-video-maker/hero7.mp4'

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
                        <Link to="/downloads.aspx">
                            <span>
                                {t('Download Video Maker')}
                            </span>
                            <span>
                                {t('Windows 11/10/8/7/Vista/XP')}
                            </span>
                        </Link>
                    </HeroSectionContentLink>
                </HeroSectionContent>
                <HeroSectionCollage>
                    <HeroSectionCollageBox className="collage-box1">
                        <HeroSectionCollageImg
                            className="collage1"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video1}/>
                        </HeroSectionCollageImg>
                        <HeroSectionCollageImg
                            className="collage2"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video2}/>
                        </HeroSectionCollageImg>
                        <HeroSectionCollageImg
                            className="collage3"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video3}/>
                        </HeroSectionCollageImg>
                    </HeroSectionCollageBox>
                    <HeroSectionCollageBox className="collage-box2">
                        <HeroSectionCollageImg
                            className="collage4"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video4}/>
                        </HeroSectionCollageImg>
                        <HeroSectionCollageImg
                            className="collage5"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video5}/>
                        </HeroSectionCollageImg>
                        <HeroSectionCollageImg
                            className="collage6"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video6}/>
                        </HeroSectionCollageImg>
                        <HeroSectionCollageImg
                            className="collage7"
                            autoplay muted loop
                            ref={(ref) => ref?.play()}
                        >
                            <source src={video7}/>
                        </HeroSectionCollageImg>
                    </HeroSectionCollageBox>
                </HeroSectionCollage>
            </HeroSectionContainer>
            <HeroSectionLinkWrapper>
                <Link to="/">
                    <img src={logo}/>
                </Link>
            </HeroSectionLinkWrapper>
        </HeroSectionStyled>
    )
}
