import React from "react";
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
                    <HeroSectionCollageBox className="collage-box1">
                        <HeroSectionCollageImg className="collage1" srcSet={`${img12x} 2x`} src={img1} />
                        <HeroSectionCollageImg className="collage2" srcSet={`${img22x} 2x`} src={img2} />
                        <HeroSectionCollageImg className="collage3" srcSet={`${img32x} 2x`} src={img3} />
                    </HeroSectionCollageBox>
                    <HeroSectionCollageBox className="collage-box2">
                        <HeroSectionCollageImg className="collage4" srcSet={`${img42x} 2x`} src={img4} />
                        <HeroSectionCollageImg className="collage5" srcSet={`${img52x} 2x`} src={img5} />
                    </HeroSectionCollageBox>
                </HeroSectionCollage>
            </HeroSectionContainer>
            <HeroSectionLinkWrapper>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </HeroSectionLinkWrapper>
        </HeroSectionStyled>
    )
}
