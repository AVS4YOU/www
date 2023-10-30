import React from "react";
import styled from "styled-components";

import bg from '../../images/avs-slideshow-maker/section-bg.png'
import imgMain from '../../images/avs-slideshow-maker/section-img.png'
import imgMain2x from '../../images/avs-slideshow-maker/section-img@2x.png'
import img1 from '../../images/avs-slideshow-maker/section-img1.png'
import img12x from '../../images/avs-slideshow-maker/section-img1@2x.png'
import img2 from '../../images/avs-slideshow-maker/section-img2.png'
import img22x from '../../images/avs-slideshow-maker/section-img2@2x.png'
import img3 from '../../images/avs-slideshow-maker/section-img3.png'
import img32x from '../../images/avs-slideshow-maker/section-img3@2x.png'
import img4 from '../../images/avs-slideshow-maker/section-img4.png'
import img42x from '../../images/avs-slideshow-maker/section-img4@2x.png'

const HeroSectionStyled = styled.section`
  background-image: url("${bg}");
  margin-top: -60px;
  padding-top: 60px;
  background-position-x: -1200px;
  background-position-y: -10px;
  
  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 1750px) {
    background-size: cover;
    background-position-y: 0px;
  }
`

const HeroSectionContainer = styled.div`
  max-width: 1432px;
  margin: 0 auto;
  padding: 83px 0 39px 0;
  
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 1750px) {
    flex-direction: column;
    align-items: center;
    gap: 67px;
    padding: 40px 0 68px 0;
    text-align: center;
  }
  
  @media screen and (max-width: 600px) {
    padding: 48px 0 53px 0;
    gap: 48px;
  }
`

const HeroSectionContent = styled.div`
  margin-right: -60px;
  padding-top: 115px;
  
  @media screen and (max-width: 1750px) {
    margin-right: 0;
    padding-top: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media screen and (max-width: 600px) {
    padding: 0 16px;
  }
`

const HeroSectionTitle = styled.h1`
  margin: 0 0 24px;
  color: #FFF;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  @media screen and (max-width: 850px) {
    font-size: 48px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`

const HeroSectionSubtitle = styled.p`
  margin: 0 0 48px 0;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

const HeroSectionButton = styled.a`
  padding: 24px 43px;
  border-radius: 5px;
  background: #FE9235;
  width: 454px;
  display: block;
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
  
  @media screen and (max-width: 850px) {
    font-size: 20px;
    padding: 20px 43px;
    width: max-content;
  }
`

const HeroSectionComposition = styled.div`
  display: grid;
  grid-template-areas: "main main main main" "img1 img2 img3 img4";
  justify-content: center;
  justify-items: center;
  width: max-content;
  margin-right: -140px;
  
  img {
    box-sizing: content-box;
  }
  
  .img-main {
    width: 800px;
    grid-area: main;

    border: 18px solid rgba(0, 0, 0, 0.40);
    box-shadow: 0px 16px 60px 0px rgba(0, 0, 0, 0.40);
  }
  
  .img-main1 {
    grid-area: img1;
    border-left: 18px solid rgba(0, 0, 0, 0.40);
  }

  .img-main2 {
    grid-area: img2;
    border-left: 18px solid rgba(0, 0, 0, 0.40);
    border-right: 18px solid rgba(0, 0, 0, 0.40);
  }

  .img-main3 {
    grid-area: img3;
  }

  .img-main4 {
    grid-area: img4;
    border-left: 18px solid rgba(0, 0, 0, 0.40);
    border-right: 18px solid rgba(0, 0, 0, 0.40);
  }
  
  .img {
    width: 240px;
    border-top: 18px solid rgba(0, 0, 0, 0.40);
    border-bottom: 18px solid rgba(0, 0, 0, 0.40);
    box-shadow: 0px 16px 60px 0px rgba(0, 0, 0, 0.40);
  }
  
  @media screen and (max-width: 1750px) {
    margin-right: 0;
  }
  
  @media screen and (max-width: 1050px) {
    .img {
      border-width: 6px;
    }
  }
  
  @media screen and (max-width: 700px) {
    .img {
      width: 180px;
    }

    .img-main {
      width: 550px;
    }
  }

  @media screen and (max-width: 600px) {
    .img {
      width: 150px;
    }

    .img-main {
      width: 450px;
    }
  }

  @media screen and (max-width: 500px) {
    .img {
      width: 130px;
    }

    .img-main {
      width: 350px;
    }
  }


  @media screen and (max-width: 400px) {
    .img {
      border-width: 3px;
      width: 100px;
    }

    .img-main {
      border-width: 6px;
      width: 268px;
    }
  }
`

export const HeroSection = ({t}) => {
    return (
        <HeroSectionStyled>
            <HeroSectionContainer>
                <HeroSectionContent>
                    <HeroSectionTitle>{t("AVS Slideshow Maker")}</HeroSectionTitle>
                    <HeroSectionSubtitle>
                        {t("Easily turn your photos into amazing video slideshows with music")}
                    </HeroSectionSubtitle>
                    <HeroSectionButton id="download-now_avs-slideshow-maker">{t("Download now")}</HeroSectionButton>
                </HeroSectionContent>
                <HeroSectionComposition>
                    <img className="img-main" srcSet={`${imgMain2x} 2x`} src={imgMain}/>
                    <img className="img-main1 img" srcSet={`${img12x} 2x`} src={img1}/>
                    <img className="img-main2 img" srcSet={`${img22x} 2x`} src={img2}/>
                    <img className="img-main3 img" srcSet={`${img32x} 2x`} src={img3}/>
                    <img className="img-main4 img" srcSet={`${img42x} 2x`} src={img4}/>
                </HeroSectionComposition>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
