import styled from "styled-components";

export const ReviewsSectionStyled = styled.section`
  padding: 122px 96px 112px 96px;
  background: #32393E;
  
  @media screen and (max-width: 800px) {
    padding: 80px 96px;
  }
  
  @media screen and (max-width: 750px) {
    padding: 80px 40px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 48px 16px;
  }
  * {
    box-sizing: border-box;
  }
`

export const ReviewsSectionContainer = styled.div`
  max-width: 1162px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media screen and (max-width: 800px) and (min-width: 401px) {
    gap: 0;
  }
`

export const ReviewsSectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  
  @media screen and (max-width: 800px) {
    gap: 23px;
  }
  
  @media screen and (max-width: 400px) {
    gap: 16px;
  }
`

export const ReviewsSectionTitle = styled.h2`
  margin: 0;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  
  @media screen and (max-width: 700px) {
    font-size: 20px;
    font-weight: 600;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

export const ReviewsSectionTitleBlock = styled.span`
  color: #FE9235;
  margin: 0 8px;
`

export const ReviewsSectionStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const ReviewsSectionUsers = styled.img`
  @media only screen and (max-width: 800px) and (min-width: 401px) {
    margin: 13px 0 2px 0;
  }
`

export const ReviewsSectionCount = styled.p`
  margin: 0;
  color: #666;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  span {
    margin-right: 6px;
  }
  
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`

export const ReviewsSectionCarouselWrapper = styled.div`
  width: 100%;

  .slick-review {
    width: 100%;
    height: 240px;
    margin: 0 auto;
    border: 1px solid var(--text-grey-xs, #BBB);
    background: var(--bg-white, #FFF);
    overflow: hidden;
  }
  
  .carousel-item {
    padding: 0 15px;
  }
  
  .slick-list {
    margin: 0 -15px;
  }
  
  .slick-dots {
    bottom: -43px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 950px;
    margin: 0 auto;
    .slick-review {
      height: 270px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    max-width: 570px;
    
    .slick-review {
      height: 235px;
    }
  }
  
  @media screen and (max-width: 700px) {
    max-width: 450px;
    
    .slick-review {
      height: 180px;
    }
  }
  
  @media screen and (max-width: 650px) {
    max-width: 256px;
    
    .slick-review {
      width: 100%;
      height: 240px;
    }
    .quotes {
      display: none;
    }
    
    .carousel-wrapper {
      padding-top: 24px;
      padding-right: 0;
      padding-left: 0;
    }
  }
`
