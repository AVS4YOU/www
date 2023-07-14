import React, {useState} from "react";
import styled from "styled-components";
import {Capterra2, Star, Quote} from "../../images/video-editing/icons";
import users from '../../images/video-editing/users.png'
import Text from "../../components/text";
import './fonts.css'

const data = [
    {
        id: 1,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 1”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 2,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor 2”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 3,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 3”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 4,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor 4”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 5,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 5”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 6,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor 6”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 7,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 7”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 8,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor” 8',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 9,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 9”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 10,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor 10”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 11,
        rate: 5,
        title: '“I was pleased with my software and easy fun to use 11”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    },
    {
        id: 12,
        rate: 5,
        title: '“I have been using this software for a while and I love it, I reccomend using AVS Video Editor 12”',
        job: 'Driver',
        industry: 'Transporation/Trucking/Roilrood',
        desc: '1 to 10 Employees',
    }
]

const TrustSectionStyled = styled.section`
  background-color: #32393E;
  box-sizing: border-box;

  .trust-section__stars {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .trust-section__users {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .trust-section__list-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 36px;
    position: relative;
    padding: 47px 22.5px 0 22.5px;
  }

  .quote {
    position: absolute;

    &:nth-child(1) {
      left: 0;
      top: 0;
    }

    &:nth-child(2) {
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }

  .trust-section__buttons {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 8px;
  }

  .trust-section__button {
    width: 12px;
    height: 12px;
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    background-color: #FE9235;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    .trust-section__list {
      grid-template-columns: repeat(3, 256px);
    }
    .trust-section__item {
      &:nth-child(4) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .trust-section__list {
      grid-template-columns: repeat(2, 256px);
    }
    
    .trust-section__item {
      &:nth-child(3) {
        display: none;
      }
    }
    
    .trust-section__title {
      font-size: 20px;
    }
  }
  
  @media screen and (max-width: 700px) {
    .trust-section__list {
      grid-template-columns: repeat(1, 256px);
    }
    .trust-section__item {
      &:nth-child(2) {
        display: none;
      }
    }

    .trust-section__title {
      font-size: 16px;
    }
    
    .quote {
      display: none;
    }
    
    .trust-section__reviews {
      font-size: 16px;
    }
    
    .trust-section__list-wrapper {
      padding: 24px 0 0;
    }
  }
`

const TrustSectionContainer = styled.div`
  max-width: 1262px;
  padding: 112px 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const TrustSectionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  display: grid;
  grid-template-columns: repeat(4, 256px);
  gap: 31px;
`

const TrustSectionItem = styled.li`
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #BBB;
  background: #FFF;
  font-family: 'Segoe UI';
  min-height: 212px;
  position: relative;
  z-index: 1;

  .trust-section__item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .trust-section__item-date {
    color: #8E8E8E;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.5px;
    font-family: 'Segoe UI';
  }

  .trust-section__item-title {
    color: #044D80;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    font-family: 'Segoe UI';
  }
  
  .trust-section__item-footer {
    padding: 12px 13px 0 13px;
  }

  .trust-section__item-job {
    color: #383838;
    font-family: 'Segoe UI';
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.45px;
  }

  .trust-section__item-industry {
    color: #383838;
    font-family: 'Segoe UI';
    font-size: 9px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .trust-section__item-desc {
    color: #8E8E8E;
    font-family: 'Segoe UI';
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .trust-section__item-rate {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2px;
    color: #000;
    font-family: 'Segoe UI';
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.45px;
  }
`

const Box = styled.div``;

const TrustSectionImg = styled.img``

const Stars = ({count}) => {
    const result = []
    for (let i = 0; i < count; i++) {
        result.push(<Star />)
    }

    return result;
}

export const TrustSection = () => {
    return (
        <TrustSectionStyled className="trust-section">
            <TrustSectionContainer className="trust-section__container">
                <Box className="trust-section__users">
                    <Box className="trust-section__stars">
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Box>
                    <Box>
                        <Text
                            display="inline"
                            fontSize={24}
                            fontWeight={700}
                            color="#FFF"
                            className="trust-section__title"
                        >Trusted by </Text>
                        <Text
                            display="inline"
                            fontSize={24}
                            fontWeight={700}
                            color="#FE9235"
                            className="trust-section__title"
                        >20,000,000 </Text>
                        <Text
                            display="inline"
                            fontSize={24}
                            fontWeight={700}
                            color="#FFF"
                            className="trust-section__title"
                        >happy users</Text>
                    </Box>
                </Box>
                <TrustSectionImg src={users}/>
                <Text
                    fontSize={18}
                    fontWeight={600}
                    color="#666666"
                    className="trust-section__reviews"
                >421937 Reviews</Text>
                <Box className="trust-section__list-wrapper">
                    <Quote className="quote" />
                    <Quote className="quote" />
                    <TrustSectionList className="trust-section__list">
                        {
                            data.slice(0, 4).map(item => (
                                <TrustSectionItem className="trust-section__item">
                                    <Box className="trust-section__item-header">
                                        <Capterra2/>
                                        <Text className="trust-section__item-date">
                                            Apr. 22, 2022
                                        </Text>
                                    </Box>
                                    <Box className="trust-section__item-rate">
                                        <span className="trust-section__item-rate-desc">Overall:</span>
                                        <Stars count={item.rate} />
                                    </Box>
                                    <Text className="trust-section__item-title">
                                        {item.title}
                                    </Text>
                                    <Box className="trust-section__item-footer">
                                        <Text className="trust-section__item-job">{item.job}</Text>
                                        <Text className="trust-section__item-industry">{item.industry}</Text>
                                        <Text className="trust-section__item-desc">{item.desc}</Text>
                                    </Box>
                                </TrustSectionItem>
                            ))
                        }
                    </TrustSectionList>
                    <Box className="trust-section__buttons">
                        <button className="trust-section__button" />
                        <button className="trust-section__button" />
                        <button className="trust-section__button" />
                    </Box>
                </Box>
            </TrustSectionContainer>
        </TrustSectionStyled>
    )
}
