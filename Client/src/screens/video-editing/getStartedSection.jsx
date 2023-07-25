import React from "react";
import styled from "styled-components";
import Text from "../../components/text";

const GetStartedSectionStyled = styled.div`
  padding: 112px 0;
  background-color: #157BF2;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  
  .get-started-section__title {
    margin: 0;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #fff;
    text-align: center;
  }
  
  @media screen and (max-width: 800px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  
  
  @media screen and (max-width: 700px) {
    padding: 80px 20px 64px;
    .get-started-section__title {
      font-size: 24px;
    }
  }
  
  @media screen and (max-width: 350px) {
    .get-started-section__button {
      width: 100%;
    }
  }
`

const GetStartedSectionButton = styled.button`
  padding: 16px 32px;
  border-radius: 3px;
  background: #FFF;
  color: #666666;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  cursor: pointer;
  
  &:active {
    opacity: 0.8;
  }
`

export const GetStartedSection = () => {
    return (
        <GetStartedSectionStyled>
            <Text className="get-started-section__title">
                Ready to make your own video?
            </Text>
            <GetStartedSectionButton className="get-started-section__button">
                Get started!
            </GetStartedSectionButton>
        </GetStartedSectionStyled>
    )
}
