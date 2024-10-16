import React from "react";
import styled from "styled-components";

import Link from '../../components/link';
import leaves1 from '../../images/avs-special-offer-autumn/leaves1.png'
import leaves2 from '../../images/avs-special-offer-autumn/leaves2.png'
import products from '../../images/avs-special-offer-autumn/products.png'
import lineTop from '../../images/avs-special-offer-autumn/hero-top-figure.png'
import lineBottom from '../../images/avs-special-offer-autumn/hero-bottom-figure.png'
import title from '../../images/avs-special-offer-autumn/grab70.png'
import desc from '../../images/avs-special-offer-autumn/onAVS4YOU.png'
import desc2 from '../../images/avs-special-offer-autumn/multimediaSuite.png'
import leaf3 from "../../images/avs-special-offer-autumn/leaf3.png";
import leaf4 from "../../images/avs-special-offer-autumn/leaf4.png";
import leaf5 from "../../images/avs-special-offer-autumn/leaf5.png";
import leaf6 from "../../images/avs-special-offer-autumn/leaf6.png";
import leaf7 from "../../images/avs-special-offer-autumn/leaf7.png";
import leaf8 from "../../images/avs-special-offer-autumn/leaf8.png";
import leaf9 from "../../images/avs-special-offer-autumn/leaf9.png";
import leaf10 from "../../images/avs-special-offer-autumn/leaf10.png";

const SpecialOfferLeaf = styled.img`
  position: absolute;
  pointer-events: none;

  &.leaf4 {
    top: 0;
    left: calc(50% - 360px);
  }

  &.leaf8 {
    top: 131px;
    left: calc(50%);
  }

  &.leaf5 {
    top: 353px;
    left: calc(50%);
  }

  &.leaf3 {
    top: 177px;
    left: calc(50% - 710px);
  }

  &.leaf7 {
    top: 320px;
    left: calc(50% - 710px);
  }

  &.leaf9 {
    top: 560px;
    left: calc(50% - 156px);
  }

  &.leaf6 {
    top: 650px;
    left: calc(50% + 30px);
  }

  &.leaf10 {
    top: 312px;
    left: calc(50% + 620px);
  }

  @media screen and (max-width: 1850px) {
    &.leaf4 {
      left: auto;
      right: 960px;
    }

    &.leaf8 {
      left: auto;
      right: 870px;
    }

    &.leaf5 {
      left: auto;
      right: 830px;
    }

    &.leaf3 {
      left: 260px;
    }

    &.leaf7 {
      left: 120px;
    }

    &.leaf9 {
      left: calc(50% - 156px);
    }

    &.leaf6 {
      left: calc(50% + 30px);
    }

    &.leaf10 {
      left: auto;
      right: 50px;
    }
  }
  
  @media screen and (max-width: 1600px) {
    &.leaf3 {
      left: 80px;
    }
    
    &.leaf4 {
      left: 80px;
    }
    
    &.leaf5 {
      left: 55px;
      top: 485px;
      right: auto;
    }

    &.leaf7 {
      right: 45px;
    }
    
    &.leaf8 {
      left: auto;
      right: 60px;
      top: 700px;
    }

    &.leaf9 {
      top: 650px;
      left: 60px;
    }
  }
  
  @media screen and (max-width: 990px) {
    &.leaf7, &.leaf10 {
      display: none;
    }
  }
`

const HeroSectionStyled = styled.section`
  * {
    box-sizing: border-box;
  }

  background: radial-gradient(50.32% 72.07% at 49.06% 50.15%, #E5AA49 0%, #D6672B 100%);
  position: relative;
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
  
  @media screen and (max-width: 1600px) {
    justify-content: center;
  }
`

const HeroSectionBox = styled.div`

  //@media screen and (max-width: 1600px) {
  //  padding-bottom: 450px;
  //}
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
  
  .buy-now {
    text-decoration-line: none;
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
  }
  
  @media screen and (max-width: 1000px) {
    padding: 52px 65px 73px 65px;
  }
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

  @media screen and (max-width: 1880px) {
    width: 750px;
    height: auto;
    left: 30px;
    top: 100px;
  }
  
  @media screen and (max-width: 1600px) {
    display: none;
  }

  @media screen and (max-width: 1650px) {
    width: 650px;
  }
  
  @media screen and (max-width: 1600px) {
    right: calc(50% - 325px);
    left: auto;
    top: auto;
    bottom: 50px;
  }
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
                            <Link to="/register.aspx" className="buy-now" id="buy-now1_special-offer-autumn">
                                Buy NOW
                            </Link>
                        </HeroSectionSale>
                    </HeroSectionBox>
                </HeroSectionContent>
                <HeroSectionProducts src={products}/>
                <HeroSectionLeaves className='leaves1' src={leaves1}/>
                <HeroSectionLeaves className='leaves2' src={leaves2}/>
            </HeroSectionContainer>
            <SpecialOfferLeaf className="leaf3" src={leaf3}/>
            <SpecialOfferLeaf className="leaf4" src={leaf4}/>
            <SpecialOfferLeaf className="leaf5" src={leaf5}/>
            <SpecialOfferLeaf className="leaf6" src={leaf6}/>
            <SpecialOfferLeaf className="leaf7" src={leaf7}/>
            <SpecialOfferLeaf className="leaf8" src={leaf8}/>
            <SpecialOfferLeaf className="leaf9" src={leaf9}/>
            <SpecialOfferLeaf className="leaf10" src={leaf10}/>
        </HeroSectionStyled>
    )
}
