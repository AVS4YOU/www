import React from "react";

import {
    FeaturesSectionStyled,
    FeaturesSectionContainer,
    FeaturesSectionTitleWrapper,
    FeaturesSectionTitle,
    FeaturesSectionDesc
} from './featuresSection.styled'
import { FeaturesSectionCarousel } from './featuresSectionCarousel'

export const FeaturesSection = ({t}) => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer>
                <FeaturesSectionTitleWrapper>
                    <FeaturesSectionTitle>{t("Give a professional look to your slideshow")}</FeaturesSectionTitle>
                    <FeaturesSectionDesc>
                        {t("Add some flair to the footage with 3D captions, themed stickers, a rich library of effects and transitions.")}
                    </FeaturesSectionDesc>
                </FeaturesSectionTitleWrapper>
                <FeaturesSectionCarousel t={t} />
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
