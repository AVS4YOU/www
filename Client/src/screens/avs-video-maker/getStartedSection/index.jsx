import React from "react";
import { Link } from 'gatsby'

import {
    GetStartedSectionContainer,
    GetStartedSectionLink,
    GetStartedSectionStyled,
    GetStartedSectionTitle
} from "./getStartedSection.styled";

export const GetStartedSection = ({t}) => {
    return (
        <GetStartedSectionStyled>
            <GetStartedSectionContainer>
                <GetStartedSectionTitle>
                    {t('Ready to make your own video?')}
                </GetStartedSectionTitle>
                <GetStartedSectionLink>
                    <Link id="get-started_avs-video-maker" to="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">
                        {t('Get started!')}
                    </Link>
                </GetStartedSectionLink>
            </GetStartedSectionContainer>
        </GetStartedSectionStyled>
    )
}
