import React from "react";
import styled from "styled-components";

import icon1 from '../../images/avs-special-offer/secure-icon.png'
import icon2 from '../../images/avs-special-offer/support-icon.png'
import icon3 from '../../images/avs-special-offer/updates-icon.png'
import icon4 from '../../images/avs-special-offer/market-icon.png'
import icon5 from '../../images/avs-special-offer/customers-icon.png'
import line from '../../images/avs-special-offer/line-why-choose-block.png'
import lineMD from '../../images/avs-special-offer/line-why-choose-block@768px.png'
import lineSM from '../../images/avs-special-offer/line-why-choose-block@375px.png'

const list = [
    {
        title: '100% Secure',
        icon: icon1,
    },
    {
        title: 'Free support',
        icon: icon2,
    },
    {
        title: 'Free updates',
        icon: icon3,
    },
    {
        title: '15+ years on the market',
        icon: icon4,
    },
    {
        title: '20M happy customers',
        icon: icon5,
    },
]

const FeaturesSectionStyled = styled.section`
  * {
    box-sizing: border-box;
  }
`

const FeaturesSectionContainer = styled.div`
  padding: 0 20px;
  max-width: 1600px;
  margin: 0 auto;
`

const FeaturesSectionContent = styled.div`
  position: relative;
  padding-bottom: 107px;
  margin-bottom: 116px;
  
  @media screen and (max-width: 800px){
    padding-bottom: 29px;
    margin-bottom: 64px;
  }
`

const FeaturesSectionTitleWrapper = styled.div`
  margin: 0 auto;
  width: max-content;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 3%, rgba(255, 255, 255, 1) 1%, rgba(255, 255, 255, 1) 97%, rgba(255, 255, 255, 0) 100%);
  position: relative;
  z-index: 2;
  padding: 0 25px;

  @media screen and (max-width: 600px) {
    padding: 0 8px;
  }
  
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 0;
  }
`

const FeaturesSectionTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;

  background: linear-gradient(180deg, #A8240F 55.15%, #D7682C 99.15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1300px) {
    font-size: 34px;
  }
  @media screen and (max-width: 800px) {
    font-size: 28px;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
  
  @media screen and (max-width: 400px) {
    text-align: center;
    width: 100%;
  }
`

const FeaturesSectionList = styled.ul`
  list-style: none;
  padding: 117px 0 0;
  margin: 0 auto;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;

  @media screen and (max-width: 1300px) {
    padding: 50px 10px 0 10px;
  }

  @media screen and (max-width: 800px) {
    padding-top: 27px;
    row-gap: 30px;
    column-gap: 15px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 25px;
    column-gap: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`

const FeaturesSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  max-width: 160px;

  @media screen and (max-width: 1300px) {
    gap: 25px;
    max-width: 120px;
  }

  @media screen and (max-width: 800px) {
    gap: 18px;
    max-width: 78px;
  }

  @media screen and (max-width: 600px) {
    max-width: 146px;
  }
  
  @media screen and (max-width: 400px) {
    max-width: 78px;
  }
`

const FeaturesSectionItemImg = styled.img`
  width: 72px;
  height: 72px;

  @media screen and (max-width: 1300px) {
    width: 55px;
    height: 55px;
  }

  @media screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`

const FeaturesSectionItemTitle = styled.h3`
  margin: 0;
  color: #555;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;

  @media screen and (max-width: 1300px) {
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
  }

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }

  @media screen and (max-width: 400px) {
    line-height: 16px;
  }
`

const FeaturesSectionLine = styled.img`
  position: absolute;
  pointer-events: none;
  top: 33px;
  width: 100%;
  height: calc(100% - 19px);

  &:nth-of-type(2), &:nth-of-type(3) {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    top: 22px;
  }

  @media screen and (max-width: 800px) {
    top: 20px;

    &:nth-of-type(1) {
      display: none;
    }

    &:nth-of-type(2) {
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    top: 16px;
  }

  @media screen and (max-width: 500px) {
    &:nth-of-type(2) {
      display: none;
    }

    &:nth-of-type(3) {
      display: block;
    }
  }

`

export const FeaturesSection = () => {
    return (
        <FeaturesSectionStyled>
            <FeaturesSectionContainer>
                <FeaturesSectionContent>
                    <FeaturesSectionTitleWrapper>
                        <FeaturesSectionTitle>Why Choose AVS4YOU</FeaturesSectionTitle>
                    </FeaturesSectionTitleWrapper>
                    <FeaturesSectionList>
                        {
                            list.map(item => (
                                <FeaturesSectionItem>
                                    <FeaturesSectionItemImg src={item.icon}/>
                                    <FeaturesSectionItemTitle>{item.title}</FeaturesSectionItemTitle>
                                </FeaturesSectionItem>
                            ))
                        }
                    </FeaturesSectionList>
                    <FeaturesSectionLine
                        src={line}
                    />
                    <FeaturesSectionLine
                        src={lineMD}
                    />
                    <FeaturesSectionLine
                        src={lineSM}
                    />
                </FeaturesSectionContent>
            </FeaturesSectionContainer>
        </FeaturesSectionStyled>
    )
}
