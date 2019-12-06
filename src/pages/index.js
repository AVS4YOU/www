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
import ReviewScreen from '../components/review-screen';
import GetCouponMobile from '../components/get-coupon-mobile';

const MainPageWrapper = styled.div`

  .avs4you{
    text-transform: uppercase;
    color: #F59541;
    font-weight: 600;
  }

  .getCouponMobile{
    display: none;
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

  @media (max-width: 1050px) {
    .headerBackground {
      background-position: 0 0;
    }

    .headerButtonsWrapper{
      display:none;
    }

    .getCouponMobile{
      display: table;
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

class Page extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }

  getDevice(device){
    this.setState({ device: device });
  }

  render(){
  return (
    <Layout getDevice={this.getDevice} availableLocales={this.props.pageContext.availableLocales} locate={this.props.pageContext.locale} t={this.props.t}>
      <MainPageWrapper>
        <div className="headerBackground">
          <PageContentWrapper>
            <div className="headerContentWrapper" >
              <Text color="#ffffff" className="headerText" lineHeight="65px" fontSize={55} fontWeight={600} as="h1"><b className="avs4you">{this.props.t("avs4you")}</b> — {this.props.t("Ultimate multimedia editing family")}</Text>
              <Text color="#ffffff" className="headerDescription" as="h5" fontSize={24}>{this.props.t("Produce spectacular video, audio and photo content and even more, without any limitations")}</Text>

              <div className="headerButtonsWrapper">
                <Button href="/" textTransform="uppercase">{this.props.t("download now")}</Button>
                <Button href="/" textTransform="uppercase" background={false}>{this.props.t("learn more")}</Button>
                <div></div>
              </div>

              <GetCouponMobile className="getCouponMobile" t={this.props.t}/>
            </div>
          </PageContentWrapper>
        </div>
        
        <MainContentWrapper />
        <SomethingElseScreen />
        <ReviewScreen />
      </MainPageWrapper>
    </Layout>
  );
  }
};
export default withI18next({ ns: "common" })(Page);
