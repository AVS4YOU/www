import styled from "styled-components";

export const HeroSectionStyled = styled.section`
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 1080px;
    max-height: 1080px;
    overflow: hidden;

    video {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 1920px) {
      video {
        width: auto;
      }
  }

    @media screen and (max-width: 1024px) {
      max-height: 960px;
      height: 960px;

      video {
        height: 100%;
      }
  }

  @media screen and (max-width: 768px) {
    video {
      left: -50%;
    }
}

  @media screen and (max-width: 500px) {
        max-height: 580px;
        height: 580px;
  }

  * {
        box-sizing: border-box;
  }
`

export const HeroSectionContainer = styled.div`
    max-width: 700px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    color: #FFF;
    position: absolute;
    z-index: 1;
    text-align: center;
    align-items: center;
    top: 273px;
    left: 0;
    right: 0;

    @media screen and (max-width: 1024px) {
      max-height: 960px;
      top: 174px;
      padding: 0 104px;
  }

    @media screen and (max-width: 500px) {
        max-height: 580px;
        top: 134px;
        padding: 0 16px;
    }
`

export const HeroSectionTitle = styled.h1`
  margin: 0 0 32px 0;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  span {
    color: var(--Orange, #FE9235);
  }
  
  @media screen and (max-width: 800px) {
    font-size: 56px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 16px;
  }
`

export const HeroSectionDesc = styled.p`
  margin: 0 0 56px 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  @media screen and (max-width: 500px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: normal;
  }
`

export const HeroSectionLink = styled.a`
    color: inherit;
    padding: 16px 45px;
    border-radius: 5px;
    background: var(--Orange, #FE9235);
    max-width: 456px;

    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    &:hover {
        text-decoration: none;
    }

    @media screen and (max-width: 500px) {
        padding: 16px;
        font-size: 16px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`
