import styled from "styled-components";

import bg from '../../../images/avs-video-cutter/hero-section-bg.png'

export const HeroSectionStyled = styled.section`
  * {
    box-sizing: border-box;
  }

  padding: 62px 39px 104px 40px;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media screen and (max-width: 1200px) {
    padding: 48px 39px 0 40px;
  }
  
  @media screen and (max-width: 500px) {
    padding: 56px 15.5px 75px 16.5px;
  }
`

export const HeroSectionContainer = styled.div`
  max-width: 1474px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 96px;

  @media screen and (max-width: 1300px) {
    gap: 30px;
  }
  
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 16px;
  }
`


export const HeroSectionMainImg = styled.img`
  width: 800px;
  height: 670px;
  
  @media screen and (max-width: 1500px) {
    height: auto;
    width: 600px;
  }
  
  @media screen and (max-width: 1300px) {
    width: 550px;
  }
  
  @media screen and (max-width: 1200px) {
    width: 472.02px;
    height: 402px;
  }
  
  @media screen and (max-width: 600px) {
    width: 400px;
    height: auto;
  }
  
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .main-link {
    padding: 24px 148px;
    border-radius: 5px;
    background: var(--Orange, #FE9235);
    width: max-content;

    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
  }
  
  @media screen and (max-width: 1200px) {
    align-items: center;
    text-align: center;
    max-width: 700px;
    gap: 32px;
  }
  
  @media screen and (max-width: 800px) {
    .main-link {
      padding: 20px 104px;
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 400px) {
    .main-link {
      padding: 14px 32px;
      font-size: 16px;
      width: 100%;
    }
  }
`

export const HeroSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: #FFF;
  
  @media screen and (max-width: 1200px) {
    gap: 16px;
  }
`

export const HeroSectionTitle = styled.h1`
  margin: 0;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  @media screen and (max-width: 800px) {
    font-size: 48px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`
export const HeroSectionDesc = styled.p`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`

export const HeroSectionList = styled.ul`
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    column-gap: 32px;
    row-gap: 16px;
  }
  
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  
  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`

export const HeroSectionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  color: var(--bg-white, #FFF);
  
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  
  svg {
    flex-shrink: 0;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 14px;
    line-height: normal;
  }
`
