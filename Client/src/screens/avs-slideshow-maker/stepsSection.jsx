import React from "react";
import styled from "styled-components";
import {Photos, Musics, Share,} from "../../images/avs-slideshow-maker/illustrations";

const data = [
    {
        id: 1,
        illustration: <Photos style={{opacity: 0.9}} />,
        title: 'Import your photos'
    },
    {
        id: 2,
        illustration: <Musics />,
        title: 'Add music and text'
    },
    {
        id: 3,
        illustration: <Share />,
        title: 'Export and share'
    },
]

const StepsSectionStyled = styled.section`
  padding: 112px 40px;
  display: flex;
  flex-direction: column;
  gap: 72px;

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 800px) {
    padding: 80px 40px;
    gap: 40px;
  }

  @media screen and (max-width: 450px) {
    padding: 48px 16px;
  }
`


const StepsSectionTitle = styled.h2`
  margin: 0;
  color: #000;
  text-align: center;
  
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`

const StepsSectionCardsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;
  list-style: none;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const StepsSectionCard = styled.li`
  flex-grow: 1;
  border-radius: 16px;
  background: #FEF3ED;
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media screen and (max-width: 450px) {
    padding: 24px;
    gap: 24px;
  }
`

const StepsSectionCardTitle = styled.h3`
  margin: 0;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`

export const StepsSection = ({t}) => {
    return (
        <StepsSectionStyled>
            <StepsSectionTitle>{t("Create slideshows in 3 easy steps")}</StepsSectionTitle>
            <StepsSectionCardsList>
                {
                    data.map((card, index) => (
                        <StepsSectionCard key={card.id}>
                            {card.illustration}
                            <StepsSectionCardTitle>{index + 1}. {t(card.title)}</StepsSectionCardTitle>
                        </StepsSectionCard>
                    ))
                }
            </StepsSectionCardsList>
        </StepsSectionStyled>
    )
}
