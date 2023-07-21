import React from "react";
import styled from "styled-components";
import {SectionTitle} from "./sectionTitle";
import {CreatorsSectionCarousel} from "./creatorsSectionCarousel";

const CreatorsSectionStyled = styled.section`
  background-color: #F9F9F9;
  padding-top: 112px;
  
  .creators-section__header {
    padding-bottom: 72px;
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
