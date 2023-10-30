import styled from "styled-components";

import bg from '../../../images/avs-video-maker/hero-bg.png'
import bg2x from '../../../images/avs-video-maker/hero-bg@2x.png'

export const HeroSectionStyled = styled.section`
  padding: 64px 131px 0 131px;
  background-color: #32393E;
`

export const HeroSectionContainer = styled.div`
  max-width: 1658px;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden;

  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url("${bg2x}");
  }
`

export const HeroSectionContent = styled.div`
  padding: 174px 0 313px 113px;
  max-width: 578px;
  color: #FFF;
  display: flex;
  flex-direction: column;
`

export const HeroSectionContentTitle = styled.h1`
  margin: 0 0 24px;
  font-family: "Montserrat", sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const HeroSectionContentSubtitle = styled.p`
  margin: 0 0 88px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: block;
`

export const HeroSectionContentLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: max-content;
  gap: 4px;
  padding: 16px 72px;
  border-radius: 5px;
  border: 1px solid #B25831;
  color: #fff;
  background: #DE6A31;
  &:hover {
    text-decoration: none;
  }
`

export const HeroSectionCollage = styled.div`
    
`

export const HeroSectionCollageBox = styled.div`
    
`

export const HeroSectionCollageImg = styled.img`
    
`
