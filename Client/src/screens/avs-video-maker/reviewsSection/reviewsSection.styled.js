import styled from "styled-components";

export const ReviewsSectionStyled = styled.section`
  padding: 122px 134px 116px 136px;
  border-radius: 50px;
  background: #32393E;
  //box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media screen and (max-width: 900px) {
    padding: 80px 56px;
  }
`

export const ReviewsSectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const ReviewsSectionTitle = styled.h2`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

export const ReviewsSectionUsers = styled.img``

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
`

export const ReviewsSectionCarouselWrapper = styled.div`
  width: 100%;

  .slick-review {
    width: 93%;
    height: 260px;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid var(--text-grey-xs, #BBB);
    background: var(--bg-white, #FFF);
    overflow: hidden;
  }

  @media screen and (max-width: 1400px) {
    .slick-review {
      height: 320px;
    }
  }

  @media screen and (max-width: 1300px) {
    .slick-review {
      height: 290px;
    }
  }

  @media screen and (max-width: 1150px) {
    .slick-review {
      height: 250px;
    }
  }
  
  @media screen and (max-width: 1050px) {
    max-width: 570px;
    margin: 0 auto;
  }
`
