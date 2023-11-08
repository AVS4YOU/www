import styled from "styled-components";
import bg from '../../../images/avs-video-maker/power-section-bg.png'

export const StepsSectionStyled = styled.section`
  background-image: url("${bg}");
  background-size: cover;
  padding: 112px 122px 53px 90px;
  border-radius: 50px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 61px;
  
  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 1000px) {
    padding: 48px 40px;
  }
  
  @media screen and (max-width: 650px) {
    padding: 48px 16px 40px 16px;
    gap: 48px;
  }

  @media screen and (max-width: 400px) {
    border-radius: 20px;
  }
`

export const StepsSectionTitle = styled.h2`
  margin: 0;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  
  @media screen and (max-width: 650px) {
    font-size: 24px;
  }
`

export const StepsSectionStepsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 48px;
  }
`

export const StepsSectionStepsControlWrapper = styled.div`
    
`

export const StepsSectionStepsControl = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 0 0 0 44px;
  margin: 0;
  list-style: none;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: 2px;
    background-color: #E2E2E2;
  }
  
  @media screen and (max-width: 1000px) {
    flex-direction: row;
    padding: 0 0 36px 0;
    
    &:before {
      bottom: 0;
      height: 4px;
      width: 100%;
    }
  }
  
  @media screen and (max-width: 650px) {
    padding-bottom: 16px;
    &:before {
      height: 2px;
      width: 100%;
      background: #D9D9D9;
      border-radius: 0;
      top: 24px;
    }
  }
`

export const StepsSectionStepsItem = styled.li`
  font-family: "Montserrat", sans-serif;
  color: #000;

  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;

  &.active {
    h3 {
      color: #FE7426;
      opacity: 1;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      height: 83px;
      width: 4px;
      background-color: #FE7426;
    }
  }

  @media screen and (max-width: 1000px) {
    &.active {
      &:before {
        left: auto;
        width: 30%;
        height: 4px;
        background-color: #FE7426;
        bottom: 0;
      }
    }
  }

  @media screen and (max-width: 650px) {
    position: relative;
    z-index: 1;
    width: 64px;
    height: 48px;
    padding: 0 8px;
    background: #EEEFF0;
    

    &:before {
      content: none;
    }

    &.active {
      &:before {
        content: none;
      }
    }

    &.active-mobile {
      span {
        background-color: #FE7426;
      }

      &:before {
        content: none;
      }
    }
    
    &:not(:last-child) {
      
    }
  }
`

export const StepsSectionStepsItemTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const StepsSectionStepsItemIndex = styled.span`
  display: none;
  color: #FFF;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #5F6060;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 650px) {
    display: flex;
  }
`

export const StepsSectionStepsItemSubtitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const StepsSectionStepsItemMobileSubtitle = styled.p`
  display: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 650px) {
    display: block;
  }
`

export const StepsSectionStepsItemCardWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  width: 100%;
`

export const StepsSectionStepsItemCard = styled.div`
  display: flex;
  width: 100%;
  height: 404px;
  max-width: 990px;

  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-in-out;
  top: 0;
  left: 0;

  &.active {
    position: static;
    opacity: 1;
    pointer-events: auto;
  }

  &:nth-child(1) {
    .elem {
      width: 250px;
      right: 24px;
      top: 24px;
    }
  }
  
  &:nth-child(2) {
    .elem {
      width: 630px;
      right: calc(50% - 315px);
      bottom: 32px;
    }
  }
  
  &:nth-child(3) {
    .elem {
      width: 392px;
      right: 24px;
      top: 24px;
    }
  }
  
  @media screen and (max-width: 1200px) {
    &:nth-child(1) {
      .elem {
        width: 180px;
        right: 20px;
        top: 20px;
      }
    }

    &:nth-child(2) {
      .elem {
        width: 440px;
        right: calc(50% - 220px);
        bottom: 30px;
      }
    }

    &:nth-child(3) {
      .elem {
        width: 300px;
        right: 20px;
        top: auto;
        bottom: 20px;
      }
    }
  }
  
  @media screen and (max-width: 600px) {
    &:nth-child(1) {
      .elem {
        width: 150px;
        right: 20px;
        top: 20px;
      }
    }

    &:nth-child(2) {
      .elem {
        width: 300px;
        right: calc(50% - 150px);
        bottom: 30px;
      }
    }

    &:nth-child(3) {
      .elem {
        width: 250px;
        right: 20px;
        top: auto;
        bottom: 20px;
      }
    }
  }
`

export const StepsSectionStepsItemCardImg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  flex-grow: 1;
`

export const StepsSectionStepsItemCardElem = styled.img`
  position: absolute;
`
