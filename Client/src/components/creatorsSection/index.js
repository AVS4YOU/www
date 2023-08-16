import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../sectionTitle";
import {CreatorsSectionCarousel} from "../creatorsSectionCarousel";

const CreatorsSectionStyled = styled.section`
  background-color: #F9F9F9;
  padding-top: 112px;
  
  .creators-section__header {
    padding-bottom: 72px;
  }
  
  @media screen and (max-width: 800px) {
    padding-top: 80px;
    
    .creators-section__header {
      padding-bottom: 56px;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 48px 0 0;

    .creators-section__header {
      padding-bottom: 24px;
    }
  }
`

export const CreatorsSection = () => {
    return (
        <CreatorsSectionStyled>
            <SectionTitle title="Video Maker for All Creators" color="#000" className="creators-section__header" />
            <CreatorsSectionCarousel />
        </CreatorsSectionStyled>
    )
}
