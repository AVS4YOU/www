import styled from "styled-components";
import bg from '../../../images/avs-video-maker/hero-bg.png'

export const GetStartedSectionStyled = styled.section`
  padding: 114px 0 113px 0;
  background-image: url("${bg}");
  background-position: center;
  background-size: 250% 100%;
  background-repeat: no-repeat;
  
  @media screen and (max-width: 800px) {
    padding: 80px 16px 77px 16px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 80px 15.5px 72px 16.5px;
  }
  
  * {
    box-sizing: border-box;
  }
`

export const GetStartedSectionContainer = styled.div`
  max-width: 603px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const GetStartedSectionTitle = styled.h2`
  color: #FFF;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`

export const GetStartedSectionLink = styled.span`
  display: flex;
  a {
    display: block;
    text-decoration: none;
    border-radius: 3px;
    background: var(--bg-white, #FFF);
    color: var(--text-grey-s, #666);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: max-content;
    padding: 16px 32px;
    text-align: center;

    &:hover {
      text-decoration: none;
    }
    flex-grow: 1;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    a {
      padding: 13px 32px;
    }
  }
`
