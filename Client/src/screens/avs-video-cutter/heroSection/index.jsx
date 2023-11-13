import React from "react";

import {
    HeroSectionBox,
    HeroSectionContainer,
    HeroSectionContent,
    HeroSectionDesc,
    HeroSectionMainImg,
    HeroSectionStyled,
    HeroSectionTitle,
    HeroSectionList,
    HeroSectionItem
} from './heroSection.styled'
import mainPic from '../../../images/avs-video-cutter/hero-section-main.png'
import mainPic2x from '../../../images/avs-video-cutter/hero-section-main@2x.png'
import Link from "../../../components/link";
import {Checked} from "../../../images/video-editing/icons";
import feats from "./heroSection.data";

export const HeroSection = ({t}) => {
    return (
        <HeroSectionStyled>
            <HeroSectionContainer>
                <HeroSectionContent>
                    <HeroSectionBox>
                        <HeroSectionTitle>{t('AVS Video Editor')}</HeroSectionTitle>
                        <HeroSectionDesc>
                            {t(`Easy Video Cutter and Merger for Windows. 
                            Cut, trim, crop, split, merge you video files with zero quality loss!`)}
                        </HeroSectionDesc>
                    </HeroSectionBox>
                    <HeroSectionList>
                        {
                            feats.map(feat => (
                                <HeroSectionItem key={feat.id}>
                                    <Checked />
                                    {t(feat.title)}
                                </HeroSectionItem>
                            ))
                        }
                    </HeroSectionList>
                    <Link to="/downloads.aspx" className="main-link">
                        {t('Download now')}
                    </Link>
                </HeroSectionContent>
                <HeroSectionMainImg src={mainPic} srcSet={`${mainPic2x} 2x`}/>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
