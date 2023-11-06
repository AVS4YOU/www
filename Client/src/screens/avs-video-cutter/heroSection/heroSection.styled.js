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
`

export const HeroSectionContainer = styled.div`
  max-width: 1474px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 96px;
`


export const HeroSectionMainImg = styled.img`
  width: 800px;
  height: 670px;
  
  @media screen and (max-width: 1500px) {
    height: auto;
    width: 600px;
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
`

export const HeroSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: #FFF;
`

export const HeroSectionTitle = styled.h1`
  margin: 0;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const HeroSectionDesc = styled.p`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const HeroSectionList = styled.ul`
  margin: 0;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`
