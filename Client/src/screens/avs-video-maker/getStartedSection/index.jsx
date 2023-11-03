import React from "react";
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
                <GetStartedSectionLink>{t('Get started!')}</GetStartedSectionLink>
            </GetStartedSectionContainer>
        </GetStartedSectionStyled>
    )
}
