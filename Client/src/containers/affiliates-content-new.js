import React from "react";
import Text from '../components/text';
import "../styles/affiliates.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import ScrollUpButton from '../components/scroll-up-button';
import PanelCollapse from "../components/panel-collapse";
import styled from 'styled-components';

const StyledBlock = styled.div`
 .common-info-block__headline {
   text-align: center;
 }

 .common-info-block__text {
  text-align: center;
 }

 .body-reasons {
  position: relative;
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

export const AffiliatesNew = (props) => (
  <div className="affiliates-new">
        <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="affiliates-header-new.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body">
                <div className="header__body-wrapper">
                  <Text as="span" className="flagBackgroundFlipped">{props.t("Earn 50% commission on every sale!")}
                    <div></div>
                  </Text>
                  <Text as="h1" className="header__heading">{props.t("Affiliate Program")}</Text>
                  <Text as="h3" className="header__subtitle">{props.t("Grow your own business by establishing an additional source of revenue with top AVS4YOU tools")}</Text>
                  <Button className="header__button" textClassName="header__button-text" href={props.t("avangatenetwork-affiliates-sign-up")}>{props.t("Sign up now")}</Button>
                </div>
              </div>
            </div>
        </div>
        <StyledBlock>
        <div className="body-reasons screen-wrapper">
            <Text as="h2" className="common__heading">
            {props.t("Reasons to Join AVS4YOU Affiliate Program")} 
            </Text>
          <div className="body-reasons__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Pro multimedia tools in 1 suite")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("AVS4YOU suite is a set of 5 professional programs for working with audio, video and image data")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("High conversion rates")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("AVS4YOU offers a 50 commission from the start a very competitive offer on the multimedia market")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Absolutely fee to join")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("There are neither fees nor special conditions for joining our affiliate program")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Easy to promote")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("We provide you with all marketing materials such as banners")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Comprehensive reporting")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("Monitor your activity clicks sales earnings per click in real time")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Secure payout")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("All commisions are paid by 2Checkout")}
              </Text>
            </div>
          </div>

        </div>
        </StyledBlock>
        <div className="choose-program screen-wrapper">
        <Text as="h2" className="common__heading">
            {props.t("How to Get Started")} 
            </Text>
          <div className="how-to-started-block">
            <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        01
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                    {props.t("Sign up in the Avangate Affiliate Network or log in if you already have an account")}
                </Text>
              </div>
              <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        02
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                  {props.t("Generate your affiliate links and place them on your website, blog or YT channel")}
                </Text>
              </div>

              <div className="choose-program__wrapper">
                <div className="choose-program__round-wrapper">
                    <Text as="h3" className="round-and-number">
                        03
                    </Text>
                </div>
                <Text className="choose-program__content-text">
                  {props.t("Receive a 50% commission from every sale and get your monthly payout")}
                </Text>
              </div>
          </div>
        </div>
        <div>
          <div className="questions-wrapper">

            <Text as="h2" className="common__heading common__heading-quest">
            {props.t("Frequently asked questions")}
            </Text>

            <div className="questions-block">
              <PanelCollapse className="panelCollapse" panelName={props.t("You offer one-year and unlimited software subscriptions for users Are they the only options")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, we offer affiliates to sell 2 types of subscriptions")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("Does subscription model get better conversion results as compared to usual software sale")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes we launched in")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("Is there a way to simplify my generation of custom affiliate links from AVS4YOU®?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, please use our")} <a target="_blank" rel="noreferrer noopener" href={props.t("affiliate_link_generator")} toLink="=">{props.t("Affiliate Links Generator")}</a>{props.t("tool")}. {props.t("It will automatically make correct links")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("How can I make sure your system really works and where can I get statistics for clicks to you from my links?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Once you're registered with us, you get login and password to access our")} 
                    <a href="https://stat.avs4you.com/" target="_blank" rel="noreferrer noopener">{props.t("control panel")}</a>: {props.t("There you'll be able to see statistics number of clicks to our download, registration and other AVS4YOU® website pages You can compare your own statistics with the statistics from our control panel to see that we provide clear correct information")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("May I use AVS4YOU trademarks in PPC campaigns")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Affiliates may use AVS4YOU brand keywords in their PPC campaigns")} <a href="mailto:sales@avs4you.com" target="_blank" rel="noreferrer noopener">sales@avs4you.com</a>{props.t("jpAffiliate")}
                    </Text>
                </div>
              </PanelCollapse>
            </div>

          </div>
        </div>
        </div>
    );
  
