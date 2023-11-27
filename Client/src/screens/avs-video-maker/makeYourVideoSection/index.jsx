import React from "react";

import {
    MakeYourVideoSectionStyled,
    MakeYourVideoSectionContainer,
    MakeYourVideoSectionTitleWrapper,
    MakeYourVideoSectionTitle,
    MakeYourVideoSectionDesc
} from './makeYourVideoSection.styled'
import { MakeYourVideoSectionCarousel } from './makeYourVideoSectionCarousel'

export const MakeYourVideoSection = ({t}) => {
    return (
        <MakeYourVideoSectionStyled>
            <MakeYourVideoSectionContainer>
                <MakeYourVideoSectionTitleWrapper>
                    <MakeYourVideoSectionTitle>{t("Make Your Videos Shine")}</MakeYourVideoSectionTitle>
                    <MakeYourVideoSectionDesc>
                        {t("An amazing collection of powerful tools you need")}
                    </MakeYourVideoSectionDesc>
                </MakeYourVideoSectionTitleWrapper>
                <MakeYourVideoSectionCarousel t={t} />
            </MakeYourVideoSectionContainer>
        </MakeYourVideoSectionStyled>
    )
}
