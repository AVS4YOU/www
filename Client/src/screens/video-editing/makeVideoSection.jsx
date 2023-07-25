import React from "react";
import styled from "styled-components";
import {SectionTitle} from "./sectionTitle";
import {MakeVideSectionCarousel} from "./makeVideSectionCarousel";

const MakeVideoSectionStyled = styled.section`
  background: #FFF;
  padding: 112px 0 54px 0;
  box-sizing: border-box;
  
  .make-video-section__header {
    margin-bottom: 75px;
  }
  
  @media screen and (max-width: 786px) {
    padding: 48px 0;
    .make-video-section__header {
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 320px) {
    .make-video-section__header {
      margin-bottom: 55px;
    }
  }
`

const MakeVideoSectionContainer = styled.div`
  max-width: 1386px;
  margin: 0 auto;
`

export const MakeVideoSection = () => {
    return (
        <MakeVideoSectionStyled>
            <MakeVideoSectionContainer>
                <SectionTitle
                    title="Make Your Video Shine"
                    desc="Add some flair to the footage with 3D captions, themed stickers, a rich library of effects and transitions."
                    className="make-video-section__header"
                    maxWidth="456px"
                    color="#000000"
                />
                <MakeVideSectionCarousel />
            </MakeVideoSectionContainer>
        </MakeVideoSectionStyled>
    )
}
