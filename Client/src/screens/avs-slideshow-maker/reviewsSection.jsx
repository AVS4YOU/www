import React from "react";
import styled from "styled-components";
import ReviewsCarousel from "../../components/reviewsCarousel";
import {Star} from "../../images/video-editing/icons";
import users from "../../images/video-editing/users.png";

const reviews = [
    {
        id: 1,
        iframe: <iframe
            id="gdm-vp-snippet-quotations_9901242b-7deb-4436-a45b-5c4977e06a95"
            src="https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/9901242b-7deb-4436-a45b-5c4977e06a95"
            frameBorder={0}
            scrolling="no"
            height="100%"
        />
    },
    {
        id: 2,
        iframe: <iframe
            id="gdm-vp-snippet-quotations_b5cb06f0-32c6-4ef7-9ce7-55e389d2c215"
            src="https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/b5cb06f0-32c6-4ef7-9ce7-55e389d2c215"
            frameBorder={0}
            scrolling="no"
            height="100%"
        />
    },
    {
        id: 3,
        iframe: <iframe
            id="gdm-vp-snippet-quotations_1ab5d733-991a-4e00-a50f-c585d02a46d1"
            src="https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/1ab5d733-991a-4e00-a50f-c585d02a46d1"
            frameBorder={0}
            scrolling="no"
            height="100%"
        />
    },
    {
        id: 4,
        iframe: <iframe
            id="gdm-vp-snippet-quotations_9cb56b45-a3ec-44d2-bfd3-be3da69390d3"
            src="https://datainsights-cdn.dm.aws.gartner.com/vp/snippet/9cb56b45-a3ec-44d2-bfd3-be3da69390d3"
            frameBorder={0}
            scrolling="no"
            height="100%"
        />
    }
]

const ReviewsSectionStyled = styled.section`
  padding: 110px 0;
  background: radial-gradient(116.94% 116.94% at 50% -52.7%, #A33B00 0%, #32393E 100%);

  * {
    box-sizing: border-box;
  }
  
  @media screen and (max-width: 400px) {
    padding: 48px 0;
  }
`

const ReviewsSectionContainer = styled.div`
  max-width: 1222px;
  padding: 0 30px;
  margin: 0 auto;
  
  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`

const ReviewsSectionStars = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-bottom: 24px;
`

const ReviewsSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`

const ReviewsSectionTitle = styled.h2`
  margin: 0;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`

const ReviewsSectionUsers = styled.img``

const ReviewsSectionReviews = styled.p`
  margin: 0;
  color: #666;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`

const ReviewsSectionCarouselWrapper = styled.div`
  iframe {
    height: 258px;
    width: 100%;
  }
  
  @media screen and (max-width: 1200px) {
    max-width: 880px;
    margin: 0 auto;
  }

  @media screen and (max-width: 950px) {
    max-width: 610px;
    margin: 0 auto;
    
    iframe {
      height: 240px;
    }
    
    .carousel-box {
      padding: 0 25px;
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 400px;
    margin: 0 auto;

    iframe {
      height: 320px;
      width: 100%;
    }

    .carousel-box {
      padding: 0;
    }
  }
  
  @media screen and (max-width: 460px) {
    max-width: 300px;
    iframe {
      height: 230px;
      width: 100%;
    }
  }
`

export const ReviewsSection = ({t}) => {
    const settings = {
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <ReviewsSectionStyled>
            <ReviewsSectionContainer>
                <ReviewsSectionStars>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </ReviewsSectionStars>
                <ReviewsSectionBox>
                    <ReviewsSectionTitle>{t("Why users love AVS4YOU")}</ReviewsSectionTitle>
                    <ReviewsSectionUsers src={users} />
                    <ReviewsSectionReviews>421937 {t("Reviews")}</ReviewsSectionReviews>
                </ReviewsSectionBox>
                <ReviewsSectionCarouselWrapper>
                    <ReviewsCarousel reviews={reviews} settings={settings}/>
                </ReviewsSectionCarouselWrapper>
            </ReviewsSectionContainer>
        </ReviewsSectionStyled>
    )
}
