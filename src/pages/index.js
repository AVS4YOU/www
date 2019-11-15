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
  }

  .flagBackground{
    background-color: #FDA050;
    margin-left: 15px;
    padding: 4px 20px;
    font-size: 13px;
    position: relative;
    top: 0px;
    color: #fff;
    padding-right: 30px;

    &:after{
        content: '';
        background-color: transparent;
        border: 13px solid transparent;
        border-right: 13px solid #fff;
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
    }
  }
`;

const Page = ({ pageContext, t }) => {
  return (
    <Layout pageContext={pageContext} t={t}>
      <MainPageWrapper>
        <div className="headerBackground">
          <PageContentWrapper>
            <div className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{t("avs4you")}</b> — {t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" as="h5" fontSize={24}>Produce spectacular video, audio and photo content and even more, without any limitations</Text>
              <div className="headerButtonsWrapper">
                <Button href="/" textTransform="uppercase">download now</Button>
                <Button href="/" textTransform="uppercase" background={false}>learn more</Button>
                <div></div>
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
