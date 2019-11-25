import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import styled from 'styled-components';
import Text from '../components/text';
import PageContentWrapper from '../components/page-content-wrapper';
import BackgroundHeaderImage from '../images/main-page/header-image.png';
import Button from '../components/button';
import MainContentWrapper from '../components/main-content-wrapper';
import SomethingElseScreen from '../components/something-else-screen';
import ReviewScreen from '../components/review-screen'

const MainPageWrapper = styled.div`

  .avs4you{
    text-transform: uppercase;
    color: #F59541;
    font-weight: 600;
  }

  .headerText{
    padding-bottom:25px;
  }

  .bodyHeader{
    text-align: center;
    padding-top:100px;
    padding-bottom:80px;
  }

  .headerContentWrapper{
    padding-top: 260px;
    padding-bottom: 320px;
    max-width: 750px;
  }

  .headerBackground{
    background-image: url(${BackgroundHeaderImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 0;
  }

  .headerButtonsWrapper{
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    grid-gap: 30px;
    padding-top: 60px;

    &.mobile{
      display:none;
    }
  }

  @media (max-width: 1024px) {
    .headerBackground {
      background-position: 0 0;
    }

    .headerButtonsWrapper{
      display:none;

      &.mobile{
        display: table;
        margin: auto;
      }
    }

    .headerContentWrapper{
      max-width: 520px;
      margin: auto;
      padding-top: 60px;
      padding-bottom: 170px;
    }

    .headerText{
      font-size: 34px;
      line-height: normal;
      text-align: center;
    }

    .headerDescription{
      font-size: 18px;
      text-align: center;
    }

    .bodyHeader{
      font-size: 28px;
    }
  }

  @media (max-width: 750px) {

    .bodyHeader{
      padding-top: 50px;
      padding-bottom: 50px;
      font-weight: 700;
    }
  }

  @media (max-width: 450px) {
    .bodyHeader{
      font-size: 22px;
    }

    .HeaderListItem.mobile{
      font-size: 20px;
    }
  }
`;

const Page = ({ pageContext, t }) => {
  return (
    <Layout availableLocales={pageContext.availableLocales} locate={pageContext.locale} t={t}>
      <MainPageWrapper>
        <div className="headerBackground">
          <PageContentWrapper>
            <div className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{t("avs4you")}</b> — {t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" className="headerDescription" as="h5" fontSize={24}>Produce spectacular video, audio and photo content and even more, without any limitations</Text>
              <div className="headerButtonsWrapper">
                <Button href="/" textTransform="uppercase">download now</Button>
                <Button href="/" textTransform="uppercase" background={false}>learn more</Button>
                <div></div>
              </div>
              <div className="headerButtonsWrapper mobile">
                <Button backgroundColor="orange" padding="13px 24px" fontSize={14} href="/" textTransform="uppercase">GET $5 COUPON CODE</Button>
              </div>
            </div> 
          </PageContentWrapper>
        </div>
        
        <MainContentWrapper />
        <SomethingElseScreen />
        <ReviewScreen />
      </MainPageWrapper>
    </Layout>
  );
};
export default withI18next({ ns: "common" })(Page);
