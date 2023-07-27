import React from "react";
import styled from "styled-components";
import Text from "../../components/text";
import {Illustration1, Illustration2, Illustration3, Illustration4} from "../../images/video-editing/illustrations";

const Box = styled.div``

const FeaturesSectionStyled = styled.section`
  background: #F9F9F9;

  .features-section__title {
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }
  
  @media screen and (max-width: 1400px) {
    .features-section__list {
      grid-template-columns: 248px 248px;
      gap: 48px;
    }
  }
  
  @media screen and (max-width: 700px) {
    .features-section__list {
      grid-template-columns: 280px;
      gap: 32px;
    }

    .features-section__item {
      gap: 24px;
    }
    
    .features-section__title {
      font-size: 24px;
      text-align: center;
    }
    
    .features-section__container {
      gap: 40px;
    }
  }
  
  @media screen and (max-width: 400px) {
    .features-section__list {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
`

const FeaturesSectionContainer = styled.div`
  max-width: 1352px;
  margin: 0 auto;
  padding: 112px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 800px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 48px 25px;
  }
`

const FeaturesSectionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 248px 248px 248px 248px;
  gap: 120px;
`

const FeaturesSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  .features-section__item-desc {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  
  @media screen and (max-width: 700px) {
    .features-section__item-desc {
      font-size: 14px;
      line-height: normal;
    }
  }
`

export const FeaturesSection = () => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer className="features-section__container">
                <Text as="h2" className="features-section__title">Powerful Video Editing</Text>
                <FeaturesSectionList className="features-section__list">
                    <FeaturesSectionItem className="features-section__item">
                        <Illustration1/>
                        <Text className="features-section__item-desc">
                            Turn raw footage to polished final cut in minutes.
                        </Text>
                    </FeaturesSectionItem>
                    <FeaturesSectionItem className="features-section__item">
                        <Illustration2/>
                        <Text className="features-section__item-desc">
                            Transfer video from DV/HDV cameras, webcams or VHS cameras. Capture full screen or select an
                            area to be recorded. It is possible to record video with sound or disable it if necessary.
                        </Text>
                    </FeaturesSectionItem>
                    <FeaturesSectionItem className="features-section__item">
                        <Illustration3/>
                        <Text className="features-section__item-desc">
                            Delete unnecessary scenes with Trim and MutiTrim options. Get rid of the black bars with
                            Crop Scale and adjust the aspect ratio to your liking.
                        </Text>
                    </FeaturesSectionItem>
                    <FeaturesSectionItem className="features-section__item">
                        <Illustration4/>
                        <Text className="features-section__item-desc">
                            Rotate video 90, 180 or 270 degrees and easily correct footage filmed upside down. Merge
                            several video files together by dragging and dropping them on the Timeline.
                        </Text>
                    </FeaturesSectionItem>
                </FeaturesSectionList>
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
