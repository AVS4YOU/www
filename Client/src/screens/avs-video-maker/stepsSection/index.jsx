import React, {useState} from "react";
import cn from "classnames";

import {
    StepsSectionStepsControl,
    StepsSectionStepsItem,
    StepsSectionStepsItemTitle,
    StepsSectionStepsItemSubtitle,
    StepsSectionStepsStyled,
    StepsSectionStyled,
    StepsSectionTitle,
    StepsSectionStepsItemCard,
    StepsSectionStepsItemCardWrapper,
    StepsSectionStepsItemCardImg,
    StepsSectionStepsItemCardElem,
    StepsSectionStepsItemIndex,
    StepsSectionStepsControlWrapper, StepsSectionStepsItemMobileSubtitle,
} from './stepsSection.styled'
import steps from "./stepsSection.data";

const StepsSectionSteps = ({t}) => {
    const [activeStepIndex, setActiveStepIndex] = useState(0)

    const onClick = (idx) => {
        setActiveStepIndex(idx)
    }

    return (
        <StepsSectionStepsStyled>
            <StepsSectionStepsControlWrapper>
                <StepsSectionStepsControl>
                    {
                        steps.map((step, idx) => (
                            <StepsSectionStepsItem
                                key={step.id}
                                className={cn({
                                    'active': idx === activeStepIndex,
                                    'active-mobile': idx <= activeStepIndex,
                                })}
                                onClick={() => onClick(idx)}
                            >
                                <StepsSectionStepsItemIndex>{idx}</StepsSectionStepsItemIndex>
                                <StepsSectionStepsItemTitle>{t(step.title)}</StepsSectionStepsItemTitle>
                                <StepsSectionStepsItemSubtitle>{t(step.subtitle)}</StepsSectionStepsItemSubtitle>
                            </StepsSectionStepsItem>
                        ))
                    }
                </StepsSectionStepsControl>
                <StepsSectionStepsItemMobileSubtitle>{t(steps[activeStepIndex].subtitle)}</StepsSectionStepsItemMobileSubtitle>
            </StepsSectionStepsControlWrapper>
            <StepsSectionStepsItemCardWrapper>
                {
                    steps.map((step, idx) => (
                        <StepsSectionStepsItemCard
                            className={idx === activeStepIndex ? 'active' : undefined}
                            key={step.id}
                        >
                            <StepsSectionStepsItemCardImg
                                srcSet={`${step.img2x}`}
                                src={step.img}
                                className="img"
                            />
                            <StepsSectionStepsItemCardElem
                                srcSet={`${step.elem2x}`}
                                src={step.elem}
                                className="elem"
                            />
                        </StepsSectionStepsItemCard>
                    ))
                }
            </StepsSectionStepsItemCardWrapper>
        </StepsSectionStepsStyled>
    )
}

export const StepsSection = ({t}) => {
    return (
        <StepsSectionStyled>
            <StepsSectionTitle>{t('Make Your Video in 3 Steps')}</StepsSectionTitle>
            <StepsSectionSteps t={t}/>
        </StepsSectionStyled>
    )
}
