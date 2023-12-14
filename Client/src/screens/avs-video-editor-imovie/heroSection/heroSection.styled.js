import styled from "styled-components";

import bg from '../../../images/avs-video-editor-imovie/hero-section-bg.png'

export const HeroSectionStyled = styled.section`
    padding: 273px 104px 338px 104px;
    position: relative;

    background-color: gray;

    background-image: url("${bg}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    * {
        box-sizing: border-box;
    }

    @media screen and (max-width: 800px) {
        padding: 144px 104px 208px 104px;
    }

    @media screen and (max-width: 700px) {
        padding: 78px 16px 135px 16px;
    }
`

export const HeroSectionContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  text-align: center;
  position: relative;
  z-index: 1;
`

export const HeroSectionTitle = styled.h1`
  margin: 0 0 32px 0;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  span {
    color: var(--Orange, #FE9235);
  }
  
  @media screen and (max-width: 800px) {
    font-size: 56px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 16px;
  }
`

export const HeroSectionDesc = styled.p`
  margin: 0 0 56px 0;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  @media screen and (max-width: 500px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: normal;
  }
`

export const HeroSectionLink = styled.a`
  color: inherit;
  padding: 16px 45px;
  border-radius: 5px;
  background: var(--Orange, #FE9235);
  
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  
  &:hover {
    text-decoration: none;
  }
  
  @media screen and (max-width: 500px) {
    padding: 16px;
    font-size: 16px;
  }
  
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`
