import React, {useState} from "react";
import cn from 'classnames'

import {
    GuideSectionContainer,
    GuideSectionStyled,
    GuideSectionTitle,
    GuideSectionStepsList,
    GuideSectionStepsItem,
    GuideSectionStepsItemBox,
    GuideSectionStepsWrapper,
    GuideSectionStepsLineWrapper,
    GuideSectionStepsLineSegment,
    GuideSectionCardWrapper,
    GuideSectionCard,
    GuideSectionCardImg,
    GuideSectionCardTitle
} from './guideSection.styled'
import steps from "./guideSection.data";

const GuideSectionSteps = ({setStepIndex, stepIndex}) => {

    const onClick = (stepIndex) => {
        setStepIndex(stepIndex)
    }

    return (
        <GuideSectionStepsWrapper>
            <GuideSectionStepsList>
                {
                    steps.map((step, idx) => (
                        <GuideSectionStepsItem key={step.id}>
                            <GuideSectionStepsItemBox
                                onClick={() => onClick(idx)}
                                className={cn({'active': stepIndex >= idx})}
                            >{idx + 1}</GuideSectionStepsItemBox>
                        </GuideSectionStepsItem>
                    ))
                }
            </GuideSectionStepsList>
            <GuideSectionStepsLineWrapper>
                {
                    Array(steps.length - 1).fill(0).map((step, idx) => (
                        <GuideSectionStepsLineSegment
                            key={idx}
                            className={cn({'active': stepIndex - 1 >= idx})}
                        />
                    ))
                }
            </GuideSectionStepsLineWrapper>
        </GuideSectionStepsWrapper>
    )
}

export const GuideSection = ({t}) => {
    const [stepIndex, setStepIndex] = useState(0)

    return (
        <GuideSectionStyled>
            <GuideSectionContainer>
                <GuideSectionTitle>
                    {t('How to Cut and Trim Video')}
                </GuideSectionTitle>
                <GuideSectionSteps
                    stepIndex={stepIndex}
                    setStepIndex={setStepIndex}
                />
                <GuideSectionCardWrapper>
                    {
                        steps.map((step, idx) => (
                            <GuideSectionCard
                                key={step.id}
                                className={cn({'active': idx === stepIndex})}
                            >
                                <GuideSectionCardTitle>{t(step.title)}</GuideSectionCardTitle>
                                <GuideSectionCardImg
                                    src={step.img.img1x}
                                    srcSet={`${step.img.img2x} 2x`}
                                />
                            </GuideSectionCard>
                        ))
                    }
                </GuideSectionCardWrapper>
            </GuideSectionContainer>
        </GuideSectionStyled>
    )
}
