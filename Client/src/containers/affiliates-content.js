import React from "react";
import Text from '../components/text';
import "../styles/affiliates.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import ReviewScreen from '../components/review-screen';
import ScrollUpButton from '../components/scroll-up-button';
import PanelCollapse from "../components/panel-collapse";
import ProductPagesWrapper from '../components/product-pages-wrapper';
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

export const AffiliatesPage = (props) => (
  <ProductPagesWrapper>
        <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="affiliates-header.jpg" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body">
                <div className="header__body-wrapper">
                  <Text as="span" className="flagBackgroundFlipped">{props.t("Earn 50% commission on every sale!")}
                    <div></div>
                  </Text>
                  <Text as="h1" className="header__heading">{props.t("Affiliate Program")}</Text>
                  <Text as="h3" className="header__subtitle">{props.t("Generate maximum sales with AVS4YOU top tools")}</Text>
                  <Button id="sign-up-now_affiliates" className="header__button" textClassName="header__button-text" href={props.t("avangatenetwork-affiliates-sign-up")}>{props.t("Sign up now")}</Button>
                </div>
              </div>
            </div>
        </div>
        <StyledBlock>
        <div className="body-reasons screen-wrapper">
            <Text as="h2" className="common__heading">
            {props.t("More Reasons to Become")} <br />{props.t("an AVS4YOU Affiliate")}
            </Text>
          <div className="body-reasons__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("50% initial commission")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("AVS4YOU offers one of the highest affiliate commission rates in comparison with other multimedia software competitors")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Absolutely fee to join")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("It is easy and free to join our affiliate program You have to register in one of the suggested affiliate systems or find and join AVS4YOU in your existing affiliate account")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("High conversion rates")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("AVS4YOU offers a set of professional programs, a perfect fit for both novices in multimedia processing and experts AVS4YOU suite is feature rich and allows to perform all multimedia tasks efficiently")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Accurate performance tracking")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("Monitor traffic and sales in real time, enjoy powerful reporting and analytics")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Seasonal exclusive offers")} 
              </Text>
              <Text className="common-info-block__text">
                {props.t("With special deals you can gain even more than 50% on AVS4YOU products boosting your sales to the full")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {props.t("Use of trademarks in PPC campaigns")}
              </Text>
              <Text className="common-info-block__text">
                {props.t("Affiliates may use AVS4YOU brand keywords in their PPC campaigns For the use of trademarks in the ad titles it is obligatory to receive a written consent Please submit your request at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>.
              </Text>
            </div>
          </div>
                  
        </div>
        </StyledBlock>
        <div className="choose-program screen-wrapper">
            <div className="choose-program__round-wrapper">
                <Text as="h3" className="round-and-number">
                    01
                </Text>
            </div>
            <Text as="h2" className="common__heading" style={{paddingBottom:"0px"}}>
            {props.t("Join Avangate Affiliate Network")}
            </Text>
            <div className="choose-program__wrapper" style={{padding:"0px 30px 10px"}}>
                <div className="choose-program__item">
                  <Text className="choose-program__list">
                    {props.t("Register as an affiliate in your preferred affiliate program All new affiliates are automatically approved, so you can start making money right away instead of wasting time on asking for permission to sell products")}
                  </Text>
                  <Text className="choose-program__list">
                   {props.t("Click here to find the relevant step-by-step information on how to find AVS4YOU in Avangate and MyCommerce in case you already have an account in one of these systems")}
                  </Text>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://store.avs4you.com/affiliates/sign-up.php?_ga=2.228913500.1512074311.1585894590-289270669.1583430629" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {props.t("Sign up")}
                    </Button>
                    <Button href="https://secure.avangate.com/affiliates/" textClassName="choose-program__button-text" className="choose-program__button-transparent">
                      {props.t("Log in")}
                    </Button>
                  </div>
                </div>
             </div>
            <div className="choose-program__wrapper">
              <div className="choose-program__round-wrapper">
                  <Text as="h3" className="round-and-number">
                      02
                  </Text>
              </div>
              <Text as="h2" className="common__heading">
              {props.t("Place links to your website")}
              </Text>
              <Text className="choose-program__content-text">
                {props.t("Please use our")} <a target="_blank" rel="noreferrer noopener" href={props.t("affiliate_link_generator")}>{props.t("link generator")}</a> {props.t("to build correct links and place them on your website, blog or channel You can generate a direct download link or a custom link")}
              </Text>
            </div>

            <div className="choose-program__wrapper">
              <div className="choose-program__round-wrapper">
                  <Text as="h3" className="round-and-number">
                      03
                  </Text>
              </div>
              <Text as="h2" className="common__heading">
              {props.t("Control your sales")}
              </Text>
              <Text className="choose-program__content-text">
                {props.t("Our cookie tracking system redirects customers to the checkout page of your affiliate system with your affiliate ID So you can easily control your sales the usual way via your Avangate, MyCommerce ShareIt control panel")}
              </Text>
              <Text className="choose-program__contact-us">
              {props.t("If you have any questions about AVS4YOU Affiliate program, please contact us at")} <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a>
              </Text>
            </div>

        </div>
        <div className="review-wrapper">
            <ReviewScreen />
        </div>

        <div>
          <div className="questions-wrapper">
            <Text as="h2" className="common__heading common__heading-quest">
            {props.t("Frequently asked questions")}
            </Text>

            <div className="questions-block">
              <PanelCollapse className="panelCollapse" panelName={props.t("Is it free to participate in your affiliate program?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, the participation is absolutely free")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("You offer one-year and unlimited software subscriptions for users Are they the only options?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, we offer affiliates to sell 2 types of subscriptions to all our products this selling scheme is very attractive to users and time-proved as effective in terms of conversion")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("Does 'subscription model' get better conversion results as compared to usual software sale?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, we launched")} <a href="https://www.avs4you.com/" rel="noreferrer noopener" target="_blank">AVS4YOU.com</a> {props.t("in 2006, December and subscription model proved to bring excellent results several times better as compared to usuall selling scheme we had used before")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("Is there a way to simplify my generation of custom affiliate links from AVS4YOU®?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, please use our")} <a id="affiliate-links-generator_affiliates" target="_blank" rel="noreferrer noopener" href={props.t("affiliate_link_generator")} toLink="=">{props.t("Affiliate Links Generator")}</a>{props.t("tool")}. {props.t("It will automatically make correct links")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("How do I get money?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("You control sales and get money through your exisitng vendor panel It is either Avangate or MyCommerce- ShareIT")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("How can I make sure your system really works and where can I get statistics for clicks to you from my links?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Once you're registered with us, you get login and password to access our")} 
                    <a id="control-panel_affiliates" href="https://stat.avs4you.com/" target="_blank" rel="noreferrer noopener">{props.t("control panel")}</a>: {props.t("There you'll be able to see statistics number of clicks to our download, registration and other AVS4YOU® website pages You can compare your own statistics with the statistics from our control panel to see that we provide clear correct information")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("I don't believe in cookie principle Is your system based solely on cookies or I can get software custom builds?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Upon request to")} <a id="email-sales_affiliates" href="mailto:affiliates@avs4you.com" target="_blank" rel="noreferrer noopener">affiliates@avs4you.com</a> {props.t("we can make custom builds for you In this case the link from software will contain your affiliate ID However, we do recommend to use cookies additionally")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("Can I use your graphics/text in my custom builds/websites?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Yes, you may use our graphics/product description fully or in parts, as you like Upon request we will create custom banners for you Drop us a line")} <a href="mailto:affiliates@avs4you.com" target="_blank" rel="noreferrer noopener">affiliates@avs4you.com</a>{props.t("jpAffiliate")}
                    </Text>
                </div>
              </PanelCollapse>
              <PanelCollapse className="panelCollapse" panelName={props.t("How long do you allow cookies to be stored on a customer's PC?")}>
                <div className="collapseContent">
                    <Text className="hiddenText">{props.t("Cookies are installed onto a customer's PC automatically once he/she followed a link or banner from your website Cookies are valid for 30 days in Avangate affiliate network and 45 days in MyCommerce-Share-IT It means that you get guaranteed commission if the same customer purchases our software within this period")}
                    </Text>
                </div>
              </PanelCollapse>
            </div>

          </div>
        </div>
        </ProductPagesWrapper>
      );
