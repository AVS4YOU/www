import React from "react";

import features from "./featuresSection.data";

import {
    FeaturesSectionContainer,
    FeaturesSectionStyled,
    FeaturesSectionTitle,
    FeaturesSectionTitleElement,
    FeaturesSectionList,
    FeaturesSectionItem,
    FeaturesSectionItemCard,
    FeaturesSectionItemTitle,
    FeaturesSectionItemDesc, FeaturesSectionItemImg,
} from './featuresSection.styled'

export const FeaturesSection = ({t}) => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer>
                <FeaturesSectionTitle>
                    {t('Why')} <FeaturesSectionTitleElement>{t('AVS Video Editor')}</FeaturesSectionTitleElement> is a good alternative to iMovie for PC?
                </FeaturesSectionTitle>
                <FeaturesSectionList>
                    {
                        features.map(feature => (
                            <FeaturesSectionItem key={feature.id}>
                                <FeaturesSectionItemCard className="card">
                                    <FeaturesSectionItemTitle>
                                        {t(feature.title)}
                                    </FeaturesSectionItemTitle>
                                    <FeaturesSectionItemDesc>
                                        {feature.desc}
                                    </FeaturesSectionItemDesc>
                                </FeaturesSectionItemCard>
                                <FeaturesSectionItemImg src={feature.img.img1x} srcSet={`${feature.img.img2x} 2x`} height='400' />
                            </FeaturesSectionItem>
                        ))
                    }
                </FeaturesSectionList>
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
