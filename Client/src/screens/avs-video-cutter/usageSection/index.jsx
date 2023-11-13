import React from "react";

import {
    UsageSectionStyled,
    UsageSectionContainer,
    UsageSectionTitle,
    UsageSectionList,
    UsageSectionItem,
    UsageSectionItemTitle,
    UsageSectionItemDesc
} from './usageSection.styled'
import usage from "./usageSection.data";
import Link from "../../../components/link";

export const UsageSection = ({t}) => {
    return (
        <UsageSectionStyled>
            <UsageSectionContainer>
                <UsageSectionTitle>{t('Video Cutter in Use')}</UsageSectionTitle>
                <UsageSectionList>
                    {
                        usage.map(item => (
                            <UsageSectionItem key={item.id}>
                                {item.illustration}
                                <UsageSectionItemTitle>{t(item.title)}</UsageSectionItemTitle>
                                <UsageSectionItemDesc>{t(item.desc)}</UsageSectionItemDesc>
                            </UsageSectionItem>
                        ))
                    }
                </UsageSectionList>
                <Link to="/downloads.aspx" className="download-link">
                    {t('Download now')}
                </Link>
            </UsageSectionContainer>
        </UsageSectionStyled>
    )
}
