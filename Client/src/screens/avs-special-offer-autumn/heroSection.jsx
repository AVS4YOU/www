import React from "react";
import styled from "styled-components";
import leaves1 from '../../images/avs-special-offer-autumn/leaves1.png'
import leaves2 from '../../images/avs-special-offer-autumn/leaves2.png'
import products from '../../images/avs-special-offer-autumn/products.png'
import lineTop from '../../images/avs-special-offer-autumn/hero-top-figure.png'
import lineBottom from '../../images/avs-special-offer-autumn/hero-bottom-figure.png'
import title from '../../images/avs-special-offer-autumn/grab70.png'
import desc from '../../images/avs-special-offer-autumn/onAVS4YOU.png'
import desc2 from '../../images/avs-special-offer-autumn/multimediaSuite.png'

const HeroSectionStyled = styled.section`
  * {
    box-sizing: border-box;
  }

  background: radial-gradient(50.32% 72.07% at 49.06% 50.15%, #E5AA49 0%, #D6672B 100%);
`

const HeroSectionContainer = styled.div`
  max-width: 1920px;
  padding: 62px;
  width: 100%;
  margin: 0 auto;

  position: relative;
`

const HeroSectionContent = styled.div`
  background: linear-gradient(105deg, #EEB655 3.51%, #F3D367 48.53%, #E27A2E 99.19%);
  border: 1.18px solid #F8E6B6;
  filter: drop-shadow(2.5399999618530273px 5.079999923706055px 15.239999771118164px rgba(157, 93, 22, 0.60));
  padding: 73px 202px 121px;

  display: flex;
  justify-content: right;
`

const HeroSectionBox = styled.div`
`

const HeroSectionDesc1 = styled.span`
  color: #A8240F;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 118.75% */
  text-transform: uppercase;
  margin-bottom: 29px;
  display: block;
  text-align: center;
`

const HeroSectionSale = styled.div`
  background-image: url("${lineTop}"), url("${lineBottom}");
  background-repeat: no-repeat;
  background-position: 0 0, 100% 100%;
  background-size: 100%;
  padding: 52px 83px 73px 83px;
`

const HeroSectionSaleImg = styled.img`
  margin: 0 auto;
  display: block;
  
  &:nth-of-type(1) {
    margin-bottom: 44px;
  }

  &:nth-of-type(2) {
    margin-bottom: 51px;
  }

  &:nth-of-type(3) {
    margin-bottom: 44px;
  }
`

const HeroSectionSaleButton = styled.a`
  text-decoration: none;
  border-radius: 5px;
  background: #A8240F;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 72px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 190% */
  text-transform: uppercase;
  display: block;
  width: max-content;
  margin: 0 auto -100px auto;
  
  &:hover {
    text-decoration: none;
  }
`

const HeroSectionLeaves = styled.img`
  position: absolute;
  pointer-events: none;

  &.leaves1 {
    left: 0;
    bottom: -112px;
  }

  &.leaves2 {
    right: 0;
    top: 0;
  }
`

const HeroSectionProducts = styled.img`
  position: absolute;
  width: 942px;
  height: 714px;
  top: 26px;
  pointer-events: none;
`

export const HeroSection = () => {
    return (
        <HeroSectionStyled>
            <HeroSectionContainer>
                <HeroSectionContent>
                    <HeroSectionBox>
                        <HeroSectionDesc1>Special Offer</HeroSectionDesc1>
                        <HeroSectionSale>
                            <HeroSectionSaleImg src={title}/>
                            <HeroSectionSaleImg src={desc}/>
                            <HeroSectionSaleImg src={desc2}/>
                            <HeroSectionSaleButton>Buy NOW</HeroSectionSaleButton>
                        </HeroSectionSale>
                    </HeroSectionBox>
                </HeroSectionContent>
                <HeroSectionProducts src={products}/>
                <HeroSectionLeaves className='leaves1' src={leaves1}/>
                <HeroSectionLeaves className='leaves2' src={leaves2}/>
            </HeroSectionContainer>
        </HeroSectionStyled>
    )
}
