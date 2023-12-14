import styled, { keyframes } from "styled-components";

import bg from '../../../images/avs-video-maker/hero-bg.png'
import bg2x from '../../../images/avs-video-maker/hero-bg@2x.png'

const collage = keyframes`
  from {
    transform: translateY(-447px);
  }
  to {
    transform: translateY(-1477px);
  }
`

export const HeroSectionStyled = styled.section`
  padding: 64px 131px 0 131px;
  background-color: #32393E;
  border-radius: 0 0 50px 50px;
  
  @media screen and (max-width: 1650px) {
    padding: 64px 0 0 0;
  }
  
  @media screen and (max-width: 800px) {
    padding: 0;
    border-radius: 0;
  }
  
  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`

export const HeroSectionLinkWrapper = styled.span`
  position: absolute;
  top: 10px;
  left: calc(50% - 610px);
  
  @media screen and (max-width: 1650px) {
    left: 113px;
  }
  
  @media screen and (max-width: 800px) {
    display: none;
  }
  
  a {
    display: block;
  }
`

export const HeroSectionContainer = styled.div`
  max-width: 1658px;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden;
  position: relative;


  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url("${bg2x}");
  }
  
  @media screen and (max-width: 800px) {
    border-radius: 50px 50px 0 0;
  }
  
  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`

export const HeroSectionContent = styled.div`
  padding: 174px 0 313px 113px;
  max-width: 578px;
  color: #FFF;
  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 1400px) {
    padding: 187px 0 370px 40px;
    max-width: 417px;
  }
  
  @media screen and (max-width: 700px) {
    max-width: 100%;
    padding: 80px 33px 178px 31px;
    box-sizing: border-box;
    align-items: center;
    background: rgba(50, 57, 62, 0.40);
  }
`

export const HeroSectionContentTitle = styled.h1`
  margin: 0 0 24px;
  font-family: "Montserrat", sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 1400px) {
    font-size: 48px;
    font-weight: 600;
    margin: 0 0 16px;
  }
  
  @media screen and (max-width: 700px) {
    font-size: 32px;
    text-align: center;
  }
`

export const HeroSectionContentSubtitle = styled.p`
  margin: 0 0 88px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: block;

  @media screen and (max-width: 1400px) {
    margin: 0 0 64px;
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
    text-align: center;
  }
`

export const HeroSectionContentLink = styled.span`
  a {
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
    text-align: center;
    &:hover {
      text-decoration: none;
    }

    span:first-child {
      color: #FFF;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }

    span:last-child {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    @media screen and (max-width: 1400px) {
      padding: 12px 24.5px;
      span:first-child {
        font-size: 20px;
      }

      span:last-child {
        font-size: 14px;
        line-height: normal;
      }
    }

    @media screen and (max-width: 700px) {
      span:first-child {
        font-size: 16px;
        
      }

      span:last-child {
        font-size: 10px;
      }
    }
  }
`

export const HeroSectionVideo = styled.video`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    
    @media screen and (max-width: 1500px) {
        right: -122px;
    }
    
    @media screen and (max-width: 1200px) {
        right: -510px;
    }
    
    @media screen and (max-width: 700px) {
        width: 1240px;
        height: auto;
        right: calc(50% - 350px);
    }
    
    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const HeroSectionMobileVideo = styled.video`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    
    display: none;
    
    @media screen and (max-width: 500px) {
        display: block;
    }
    
    @media screen and (max-width: 410px) {
        right: -80px;
    }
`
