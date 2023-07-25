import React from "react";
import styled from "styled-components";
import Text from "../../components/text";
import backgroundGradient from '../../images/video-editing/background-gradient.png'
import heroPic from '../../images/video-editing/main-img.png'
import shadowGradient from '../../images/video-editing/shadow-gradient.png'
import {Capterra, Checked, FiveStars, Star} from '../../images/video-editing/icons'
import {Link} from "gatsby";

const data = [
    'Record video and capture screen',
    '300+ modern video effects',
    'User-friendly Timeline/Storyboard',
    'Super fast with GPU acceleration',
    'Trim, cut, crop, split, merge, rotate',
    'Export & publish online'
]

const HeroSectionStyled = styled.section`
  background-image: url("${backgroundGradient}");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  
  * {
    box-sizing: border-box;
  }

  .hero-section__title {
    margin-bottom: 24px;
  }

  .hero-section__desc {
    max-width: 578px;
  }

  .hero-section__left-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px
  }

  .hero-section__right-box {
    display: flex;
    align-items: center;
    gap: 99px;
    justify-content: right;
  }

  .hero-section__card {
    &:first-child {
      margin: 70px 0 auto 0;
    }

    &:last-child {
      margin: 380px 0 auto 0;
    }
  }
  
  @media screen and (max-width: 1700px) {
    .hero-section__pic {
      width: 700px;
      background-position-y: -330px;
    }
  }


  @media screen and (max-width: 1400px) {
    .hero-section__container {
      gap: 10px;
    }
    
    .hero-section__right-box {
      gap: 50px;
    }
    
    .hero-section__list {
      grid-template-columns: 1fr;
    }
    
    .hero-section__pic {
      width: 488px;
      background-position-y: -150px;
    }
  }
  
  @media screen and (max-width: 1200px) {
    .hero-section__right-box {
      gap: 30px;
    }
    
    .hero-section__title {
      font-size: 48px;
    }

    .hero-section__desc {
      font-size: 18px;
      max-width: 382px;
    }
  }
  
  @media screen and (max-width: 1050px) {
    background-size: 1400px 800px;
    background-position: -348px -153px;
    .hero-section__container {
      grid-template-columns: 1fr;
      padding: 56px 40px 84px 40px;
    }

    .hero-section__pic {
      background-position-y: -200px;
    }
    
    .hero-section__title {
      margin-bottom: 16px;
    }
    
    .hero-section__desc {
      font-weight: 400;
    }

    .hero-section__left-box {
      gap: 32px;
    }
    
    .hero-section__right-box {
      display: none;
    }
    
    .hero-section__gradient {
      height: 100%;
      background-image: none;
      background-color: rgba(0, 0, 0, 0.40);
    }
  }
  
  @media screen and (max-width: 700px) {
    .hero-section__pic {
      display: none;
    }
  }
  
  @media screen and (max-width: 470px) {
    background-position-x: center;
    background-position-y: top;
    background-size: cover;
    .hero-section__container {
      padding: 56px 16.6px 64px;
    }
    
    .hero-section__left-box {
      align-items: stretch;
      text-align: center;
    }
    
    .hero-section__title {
      font-size: 32px;
    }

    .hero-section__desc {
      font-size: 16px;
      max-width: 100%;
    }
    
    .hero-section__button {
      font-size: 16px;
      padding: 14px 32px;
    }
    
    .hero-section__item-label {
      font-size: 14px;
      line-height: normal;
    }
  }
`

const HeroSectionCard = styled.div`
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.32);
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.16) inset, 0 0 24px 0 rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(16px);
  width: max-content;
  padding: 20px 32px;
  color: #32393E;

  .hero-section__card-title {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .hero-section__card-button {
    padding: 6px 12px;
    display: flex;
    gap: 7px;
    align-items: center;
    background-color: #fff;
    border-radius: 24px;
  }
`

const HeroSectionPic = styled.span`
  background-image: url("${heroPic}");
  position: absolute;
  height: 100%;
  width: 875px;
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  background-position-y: -460px;
  right: 0;
  top: 0;
`

const HeroSectionContainer = styled.div`
  max-width: 1452px;
  margin: 0 auto;
  
  padding: 174px 29px 137px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const HeroSectionBox = styled.div`
  position: relative;
  z-index: 2;
`

const HeroSectionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 16px;

  @media screen and (max-width: 470px) {
    padding-left: 15px;
  }
`

const HerSectionListItem = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
`

const HerSectionGradient = styled.span`
  background-image: url("${shadowGradient}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 307px;
  position: absolute;
  pointer-events: none;
  z-index: 1;
  bottom: 0;
  right: 0;
`

const HeroSectionButton = styled.a`
  padding: 16px 32px;
  border-radius: 3px;
  background: #157BF2;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
  
  &:active {
    opacity: 0.8;
  }
`

export const HeroSection = () => {
    return (
        <HeroSectionStyled className="hero-section">
            <HeroSectionPic className="hero-section__pic"/>
            <HerSectionGradient className="hero-section__gradient" />
            <HeroSectionContainer className="hero-section__container">
                <HeroSectionBox className="hero-section__left-box">
                    <HeroSectionBox>
                        <Text
                            as="h1"
                            fontSize={64}
                            fontWeight={600}
                            lineHeight="normal"
                            color="#fff"
                            className="hero-section__title"
                        >
                            AVS Video Editor
                        </Text>
                        <Text
                            fontSize={24}
                            fontWeight={600}
                            lineHeight="normal"
                            color="#fff"
                            className="hero-section__desc"
                        >
                            Easy Video Software for Windows. Create compelling video content in a few clicks.
                        </Text>
                    </HeroSectionBox>
                    <HeroSectionList className="hero-section__list">
                        {
                            data.map(label => (
                                <HerSectionListItem key={label}>
                                    <Checked />
                                    <Text
                                        fontSize={16}
                                        lineHeight="24px"
                                        fontWeight={400}
                                        color="#fff"
                                        className="hero-section__item-label"
                                    >
                                        {label}
                                    </Text>
                                </HerSectionListItem>
                            ))
                        }
                    </HeroSectionList>
                    <HeroSectionButton className="hero-section__button" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download now</HeroSectionButton>
                </HeroSectionBox>
                <HeroSectionBox className="hero-section__right-box">
                    <HeroSectionCard className="hero-section__card">
                        <HeroSectionBox className="hero-section__card-title" style={{marginBottom: '4px'}}>
                            <Capterra />
                            <HeroSectionBox className="hero-section__card-button">
                                <Star />
                                <FiveStars />
                            </HeroSectionBox>
                        </HeroSectionBox>
                        <HeroSectionBox style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px'}}>
                            <Text
                                fontSize={16}
                                fontWeight={700}
                                lineHeight="30px"
                                color="#32393E"
                            >
                                Gregg B.
                            </Text>
                            <Text
                                fontSize={16}
                                fontWeight={400}
                                lineHeight="24px"
                                color="#32393E"
                            >
                                Manager
                            </Text>
                        </HeroSectionBox>
                        <Text
                            fontSize={16}
                            fontWeight={400}
                            lineHeight="24px"
                            color="#32393E"
                        >
                            11 - 50 Employees
                        </Text>
                    </HeroSectionCard>
                    <HeroSectionCard className="hero-section__card">
                        <HeroSectionBox className="hero-section__card-title" style={{marginBottom: '8px'}}>
                            <HeroSectionBox className="hero-section__card-button">
                                <Text fontSize={14} fontWeight={700} lineHeight="24px">Our Blog</Text>
                            </HeroSectionBox>
                        </HeroSectionBox>
                        <Text
                            fontSize={16}
                            fontWeight={700}
                            lineHeight="30px"
                            color="#32393E"
                            style={{marginBottom: '8px'}}
                        >
                            How to create a video collage?
                        </Text>
                        <Link to="/video-maker.aspx">
                            <Text
                                color="#FFF"
                                fontSize={16}
                                fontWeight={400}
                                lineHeight="24px"
                                style={{fontStyle: 'italic', textDecoration: 'underline'}}
                            >
                                All news
                            </Text>
                        </Link>
                    </HeroSectionCard>
                </HeroSectionBox>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
