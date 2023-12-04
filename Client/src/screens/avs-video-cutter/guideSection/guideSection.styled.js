import styled from "styled-components";

export const GuideSectionStyled = styled.section`
  padding: 112px 40px;
  background: #F9F9F9;

  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 800px) {
    padding: 88px 40px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 48px 16px;
  }
`

export const GuideSectionContainer = styled.div`
  max-width: 944px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  @media screen and (max-width: 400px) {
    gap: 40px;
  }
`

export const GuideSectionTitle = styled.h2`
  margin: 0;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`

export const GuideSectionStepsWrapper = styled.div`
  position: relative;
  max-width: 336px;
  width: 100%;
`

export const GuideSectionStepsLineWrapper = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 100%;
  height: 2px;

  display: flex;
  align-items: center;
`

export const GuideSectionStepsLineSegment = styled.span`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  background: #D9D9D9;

  transition: background-color 50ms ease-in-out;

  &.active {
    background: #157BF2;
  }
`

export const GuideSectionStepsList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
`

export const GuideSectionStepsItem = styled.li`
  position: relative;
  z-index: 1;
  background: #F9F9F9;

  padding: 0 16px;
  display: flex;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const GuideSectionStepsItemBox = styled.div`
  width: 48px;
  height: 48px;
  background-color: #BBB;

  transition: background-color 50ms ease-in-out;

  color: #FFF;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #157BF2;
  }
`

export const GuideSectionCardWrapper = styled.div``

export const GuideSectionCard = styled.div`
  display: none;
  flex-direction: column;
  gap: 32px;

  &.active {
    display: flex;
  }
  
  @media screen and (max-width: 400px) {
    gap: 16px;
  }
`

export const GuideSectionCardTitle = styled.h3`
  margin: 0;
  color: var(--text-black, #000);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  @media screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const GuideSectionCardImg = styled.img`
  width: 100%;
`
