import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/affiliates.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import ReviewScreen from '../components/review-screen';
import ScrollUpButton from '../components/scroll-up-button';
import PanelCollapse from "../components/panel-collapse";
import styled from 'styled-components';

import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg2.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg1.png';
import Eggm from '../images/easter-event/mobile_egg.png';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
const EggEventS = styled.div`
a: hover{
  text-decoration: none;
}
.ModalEventEgg{
  width: 448px;
  height: 565px;
  background-image: url(${EggM});
  .EventEggContent{
    padding-top: 175px;
    padding-left: 25px;
    text-align: center;
  }
  .ModalShaerTexth1{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    color: #1E5839;
    padding-top: 15px;
  }
  .ModalShaerTexth2{
    margin-left: auto;
    margin-right: auto;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    text-align: center; 
    color: #000000;
    padding-top: 5px;
  }
  .ModalShaerTextCoupon{
    
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    margin-left: auto;
    margin-right: auto;
    color: #1E5839;
    margin-top: 25px;
    margin-bottom: 25px;
    span{
      border: 2px dashed #1E5839;
      box-sizing: border-box;
      padding: 4px 20px;
    }
  }
  .ModalShaerTexth4{
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000000;
    margin-bottom: 30px;
  }
  .ModalShaerClose{
    font-family: Myriad Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FEFFFD;
    background: #1E5839;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    cursor:pointer;
    margin-top: 40px;
  }
}
.ModalShaerClose{
  background: none;
  border: none;
 .CloseEggButton{
  margin-left: 450px;
 }
}

@media only screen and (max-width: 600px) {
  .ModalEventEgg{
    width: 300px;
    height: 380px;
    background-image: url(${Eggm});
    .EventEggContent{
      padding-top: 85px;
      padding-left: 10px;
      text-align: center;
    }
    .ModalShaerTexth1{
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;
    }
    .ModalShaerTexth2{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 17px;
    }
    .ModalShaerTextCoupon{
      font-size: 14px;
      line-height: 19px;
    }
    .ModalShaerTexth4{
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
    }
    .ModalShaerClose{
      margin-top: 0px;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .ModalShaerClose{
    background: none;
    border: none;
   .CloseEggButton{
    margin-left: 250px;
   }
  }
}

`;

const StyledBlock = styled.div`
 .common-info-block__headline {
   text-align: center;
 }

 .common-info-block__text {
  text-align: center;
 }

.common-info-block:before {
  content: "";
  width: 100%;
  height: 75px;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-position-x: 50%;
}
`;

class Affiliates extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonAudioEditor")
     };

    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this); 

  }

  getDevice(device){
    this.setState({ device: device });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }


render(){

    return (
      <Layout 
        className="affiliates" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("Earn money with the affiliate program AVS4YOU")}
        metaDescription={this.props.t("AVS4YOU affiliate program earn money with Links")}
        metaKeywords=""
      >
        <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="affiliates-header.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body">
                <div className="header__body-wrapper">
                  <Text as="span" className="flagBackgroundFlipped">{this.props.t("Earn 50% commission on every sale!")}
                    <div></div>
                  </Text>
                  <Text as="h1" className="header__heading">{this.props.t("Affiliate Program")}</Text>
                  <Text as="h3" className="header__subtitle">{this.props.t("Grow your own business by establishing an additional source of revenue with top AVS4YOU tools")}</Text>
                  <Button className="header__button" textClassName="header__button-text" href={this.props.t("avangatenetwork-affiliates-sign-up")}>{this.props.t("Sign up now")}</Button>
                </div>
              </div>
            </div>
        </div>
        <StyledBlock>
        <div className="body-reasons screen-wrapper">
            <Text as="h2" className="common__heading">
            {this.props.t("Reasons to Join AVS4YOU Affiliate Program")} 
            </Text>
          <div className="body-reasons__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Pro multimedia tools in 1 suite")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("AVS4YOU suite is a set of 5 professional programs for working with audio, video and image data")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("High conversion rates")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("AVS4YOU offers a 50 commission from the start a very competitive offer on the multimedia market")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Absolutely fee to join")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("There are neither fees nor special conditions for joining our affiliate program")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Easy to promote")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("We provide you with all marketing materials such as banners")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Comprehensive reporting")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Monitor your activity clicks sales earnings per click in real time")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Secure payout")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("All commisions are paid by 2Checkout")}
              </Text>
            </div>
          </div>
        </div>
        </StyledBlock>
        <div className="choose-program screen-wrapper">
        <Text as="h2" className="common__heading">
            {this.props.t("How to Get Started")} 
            </Text>
          <div className="how-to-started-block">
            <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        01
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                    {this.props.t("Sign up in the Avangate Affiliate Network or log in if you already have an account")}
                </Text>
              </div>
              <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        02
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                  {this.props.t("Generate your affiliate links and place them on your website, blog or YT channel")}
                </Text>
              </div>

              <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        03
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                  {this.props.t("Receive a 50% commission from every sale and get your monthly payout")}
                </Text>
              </div>
          </div>
        </div>
        <div>
          <div className="questions-wrapper">
          {(getCookieConsentValue("AVSEasterEvents") == "true") ? 
            <div className="eggsEvent"><img src={Egg} onClick={() => this.openModal()}></img></div>
            : <div className="eggsEvent"></div>}
            <ModalEgg
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <EggEventS>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
                    >
                      <img className="CloseEggButton" 
                        src={CloseEgg}
                        alt="Close"
                        style={{
                          width: "28px"
                        }}/>
                    </button>
                    <div className="ModalEventEgg">
                   
                    <div className="EventEggContent">                    
                        <Text className="ModalShaerTexth1">{this.props.t("ABSCongrats!")}<br />{this.props.t("ABSYou win a 35% discount")}</Text>
                        <Text className="ModalShaerTexth2">{this.props.t("ABSon AVS4YOU Unlimited")}<br />{this.props.t("ABSSubscription")}</Text>
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Lucky50")}</span></Text>
                        <Text className="ModalShaerTexth4">{this.props.t("*Just use this coupon while purchasing")}</Text>
                        <a href={this.state.hrefButton}>
                        <button
                          className="ModalShaerClose"                  
                          >
                            {this.props.t("SHOP NOW")}
                          </button>
                          </a> 
                      </div>    
                      </div>                
                      </EggEventS>
                  </ModalEgg> 
            <Text as="h2" className="common__heading common__heading-quest">
            {this.props.t("Frequently asked questions")}
            </Text>

            <div className="questions-block">
              <PanelCollapse className="panelCollapse" panelName={this.props.t("You offer one-year and unlimited software subscriptions for users Are they the only options")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{this.props.t("Yes, we offer affiliates to sell 2 types of subscriptions")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={this.props.t("Does subscription model get better conversion results as compared to usual software sale")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{this.props.t("Yes, we launched AVS4YOU.com in 2006")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={this.props.t("Is there a way to simplify my generation of custom affiliate links from AVS4YOU®?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{this.props.t("Yes, please use our")} <a target="_blank" rel="noreferrer noopener" href={this.props.t("affiliate_link_generator")} toLink="=">{this.props.t("Affiliate Links Generator")}</a>{this.props.t("tool")}. {this.props.t("It will automatically make correct links")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={this.props.t("How can I make sure your system really works and where can I get statistics for clicks to you from my links?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{this.props.t("Once you're registered with us, you get login and password to access our")} 
                    <a href="https://stat.avs4you.com/" target="_blank" rel="noreferrer noopener">{this.props.t("control panel")}</a>: {this.props.t("There you'll be able to see statistics number of clicks to our download, registration and other AVS4YOU® website pages You can compare your own statistics with the statistics from our control panel to see that we provide clear correct information")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={this.props.t("May I use AVS4YOU trademarks in PPC campaigns")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{this.props.t("Affiliates may use AVS4YOU brand keywords in their PPC campaigns")} <a href="mailto:sales@avs4you.com" target="_blank" rel="noreferrer noopener">sales@avs4you.com</a>{this.props.t("jpAffiliate")}
                    </Text>
                </div>
              </PanelCollapse>
            </div>

          </div>
        </div>
      

      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Affiliates);
