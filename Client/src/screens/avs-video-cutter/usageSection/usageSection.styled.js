import styled from "styled-components";

export const UsageSectionStyled = styled.section`
  padding: 112px 40px;
  background: var(--bg-light-grey-xs, #F9F9F9);

  @media screen and (max-width: 800px) {
    padding: 88px 40px 88px 40px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 48px 16px 47px 16px;
  }
`

export const UsageSectionContainer = styled.div`
  max-width: 1194px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  width: 100%;
  
  .download-link {
    text-decoration: none;
    padding: 16px 32px;
    border-radius: 3px;
    background: var(--Blue, #157BF2);

    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
  
  @media screen and (max-width: 800px) {
    gap: 0;
  }
  
  @media screen and (max-width: 400px) {
    align-items: stretch;
    .download-link {
      padding: 14px 32px;
      font-size: 16px;
    }
  }
`

export const UsageSectionTitle = styled.h2`
  margin: 0;
  color: var(--text-black, #000);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 800px) {
    margin-bottom: 40px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 24px;
    opacity: 0.96;
  }
`

export const UsageSectionList = styled.ul`
  display: flex;
  gap: 96px;
  justify-content: space-between;
  
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media screen and (max-width: 1100px) {
    gap: 40px;
  }
  
  @media screen and (max-width: 900px) {
    column-gap: 32px;
    row-gap: 48px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  @media screen and (max-width: 800px) {
    margin-bottom: 48px;
  }
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 40px;/
    padding: 0 20px;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 32px;
  }
`

export const UsageSectionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media screen and (max-width: 1100px) {
    max-width: 328px;
  }
  
  @media screen and (max-width: 800px) {
    max-width: 290px;
  }
  
  @media screen and (max-width: 700px) {
    max-width: 400px;
  }
  
  @media screen and (max-width: 400px) {
    svg {
      width: 160px;
    }
  }
`

export const UsageSectionItemTitle = styled.h3`
  margin: 48px 0 16px 0;
  color: var(--text-black, #000);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  
  @media screen and (max-width: 400px) {
    margin: 24px 0 8px 0;
    font-size: 14px;
    line-height: 26px;
  }
`

export const UsageSectionItemDesc = styled.p`
  margin: 0;
  color: var(--text-grey-m, #555);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
