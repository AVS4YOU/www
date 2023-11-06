import React from "react";

import {
    GetStartedSectionContainer,
    GetStartedSectionLink,
    GetStartedSectionStyled,
    GetStartedSectionTitle
} from "./getStartedSection.styled";
import Link from "../../../components/link";

export const GetStartedSection = ({t}) => {
    return (
        <GetStartedSectionStyled>
            <GetStartedSectionContainer>
                <GetStartedSectionTitle>
                    {t('Ready to make your own video?')}
                </GetStartedSectionTitle>
                <GetStartedSectionLink>
                    <Link to="/donwloads.aspx">
                        {t('Get started!')}
                    </Link>
                </GetStartedSectionLink>
            </GetStartedSectionContainer>
        </GetStartedSectionStyled>
    )
}
