import React from "react";
import styled from "styled-components";
import { Star} from "../../images/video-editing/icons";
import users from '../../images/video-editing/users.png'
import Text from "../text";
import '../../screens//video-editing/fonts.css'
import {TrustSectionCarousel} from "../trustSectionCarousel";



const TrustSectionStyled = styled.section`
  background-color: #32393E;
  
  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1050px) {
    .trust-section__title {
      font-size: 20px;
    }
  }
`

const TrustSectionContainer = styled.div`
  max-width: 1162px;
  padding: 112px 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media screen and (max-width: 800px) {
    gap: 0;
    padding: 80px 0;
  }

  @media screen and (max-width: 700px) {
    gap: 16px;
    padding: 48px 16px 68px;
    
    .trust-section__title {
      font-size: 16px;
    }

    .trust-section__reviews {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
`

const TrustSectionUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 800px) {
    margin-bottom: 13px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 0;
    gap: 16px;
  }
`

const TrustSectionStars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const TrustSectionImg = styled.img`

  @media screen and (max-width: 800px) {
    margin-bottom: 2px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`


export const TrustSection = () => {
    return (
        <TrustSectionStyled className="trust-section">
            <TrustSectionContainer className="trust-section__container">
                <TrustSectionUsers>
                    <TrustSectionStars>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </TrustSectionStars>
                    <div style={{textAlign: 'center'}}>
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
                    </div>
                </TrustSectionUsers>
                <TrustSectionImg src={users}/>
                <Text
                    fontSize={18}
                    fontWeight={600}
                    color="#666666"
                    className="trust-section__reviews"
                >421937 Reviews</Text>
                <TrustSectionCarousel />
            </TrustSectionContainer>
        </TrustSectionStyled>
    )
}
