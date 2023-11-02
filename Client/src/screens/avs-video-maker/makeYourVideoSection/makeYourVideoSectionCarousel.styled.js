import styled from "styled-components";

export const MakeYourVideoSectionCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  @media screen and (max-width: 1150px) {
    overflow: hidden;
  }
`

export const MakeYourVideoSectionLgCarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  
  @media screen and (max-width: 830px) {
    .slick-list {
      overflow: visible;
    }
  }
  
  .slick-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    z-index: 10;
    
    bottom: -30px;
    box-shadow: 1px -1px 8px 0px rgba(34,60,80,0.2);
    top: auto;
  }
  
  .slick-prev {
    left: calc(50% - 90px);
  }
  
  .slick-next {
    right: calc(50% - 90px);
  }
`
export const MakeYourVideoSectionLgCarouselItem = styled.div`
  width: 100%;
`

export const MakeYourVideoSectionLgCarouselItemBox = styled.div`
  position: relative;
  max-width: 948px;
  width: 100%;
  margin: 0 auto;
  
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 830px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`

export const MakeYourVideoSectionLgCarouselItemCard = styled.div`
  position: absolute;
  
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.56);
  box-shadow: 0px 0px 8px 0px #FFF inset, 0px 8px 24px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  width: 348px;
  padding: 22px;
  
  @media screen and (max-width: 1100px) {
    left: 20px;
  }
  
  @media screen and (max-width: 830px) {
    position: static;
    margin-top: -130px;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 60px);
    margin-top: -20px;
  }
`

export const MakeYourVideoSectionLgCarouselItemImg = styled.img`
  margin-left: auto;
  width: 688px;
  
  @media screen and (max-width: 830px) {
    margin: 0 auto;
    width: calc(100% - 80px);
  }
  
  @media screen and (max-width: 600px) {
    width: calc(100% - 30px);
  }
`

export const MakeYourVideoSectionLgCarouselItemTitle = styled.h3`
  margin: 0;

  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const MakeYourVideoSectionLgCarouselItemDesc = styled.p`
  margin: 0;
  
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export const MakeYourVideoSectionLgCarouselControl = styled.div`
  position: absolute;
  bottom: -7px;
  color: #555;
  left: calc(50% - 33px);
  
  align-items: center;
  gap: 5px;
  display: none;
  
  @media screen and (max-width: 830px) {
    display: flex;
  }
`

export const MakeYourVideoSectionLgCarouselControlCount = styled.span`
  color: #555;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`

export const MakeYourVideoSectionLgCarouselControlDesc = styled.p`
  margin: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

export const MakeYourVideoSectionSmCarouselWrapper = styled.div`
  width: 100%;
  max-width: 1124px;
  padding-bottom: 50px;

  .slick-list {
    overflow: visible;
  }
  
  .slick-current .box {
    margin: 0 16px;
    background: #FFF;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.25);
  }

  .slick-dots {
    bottom: -50px;
    li {
      width: max-content;
      height: max-content;
      button {
        &:before {
          content: none;
        }
        background: #9A9997;
        height: 10px;
        width: 10px;
        border-radius: 50%;
      }
    }

    .slick-active button {
      background: #FE9235;
    }

    li:not(:last-child) {
      margin-right: 7px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    .slick-current .box {
      margin: 0 16px;
    }
  }
  
  @media screen and (max-width: 850px) {
    .slick-slide .box {
      margin: 0 16px;
    }
  }
  
  @media screen and (max-width: 680px) {
    padding-bottom: 50px;
  }
`

export const MakeYourVideoSectionSmCarouselItem = styled.div`
  height: 123px;
  
  @media screen and (max-width: 830px) {
    height: 135px;
  }
`

export const MakeYourVideoSectionSmCarouselItemBox = styled.div`
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  svg {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
  }
`

export const MakeYourVideoSectionSmCarouselItemTitle = styled.h3`
  margin: 0;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
