import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/affiliates.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import ReviewScreen from '../components/review-screen';
import ContentSelector from '../components/content-selector';

class Affiliates extends React.PureComponent {

render(){

    return (
      <Layout 
        className="affiliates" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="Earn money with the affiliate program AVS4YOU"
        metaDescription="AVS4YOU affiliate program: earn money with Links"
        metaKeywords=""
      >
        <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="affiliates-header.jpg" style={{position: "absolute"}}/>
            <div className="header__body">
                <Text as="h1" className="header__heading">Affiliate Program</Text>
                <Text as="h3" className="header__subtitle">Generate maximum sales with AVS4YOU top tools</Text>
                <Button className="header__button" textClassName="header__button-text" href="https://www.avangate.com/affiliates/sign-up.php?merchant=onlmetec&template=affiliate-signup-october-2011&clean=1&lang=en">Sign up now</Button>
            </div>
        </div>
        <div className="body-reasons screen-wrapper">
            <Text as="h2" className="common__heading">
                More Reasons to Become an AVS4YOU Affiliate
            </Text>
          <div className="body-reasons__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                50% initial commission
              </Text>
              <Text className="common-info-block__text">
                AVS4YOU offers one of the highest affiliate commission rates in comparison with other multimedia software competitors.
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Absolutely fee to join 
              </Text>
              <Text className="common-info-block__text">
                It is easy and free to join our affiliate program. You have to register in one of 
                the suggested affiliate systems or find and join AVS4YOU in your existing affiliate account.
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                High conversion rates 
              </Text>
              <Text className="common-info-block__text">
                AVS4YOU offers a set of professional programs, 
                a perfect fit for both novices in multimedia prossing and experts. AVS4YOU suite is feature rich and allows to perform all multimedia tasks efficiently.
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Accurate performance tracking
              </Text>
              <Text className="common-info-block__text">
                Monitor traffic and sales in real time, enjoy powerful reporting and analytics.
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Seasonal exclusive offers 
              </Text>
              <Text className="common-info-block__text">
                With special deals you can gain even more than 50% on AVS4YOU products boosting your sales to the full.
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
                Use of trademarks in PPC campaigns
              </Text>
              <Text className="common-info-block__text">
                Affiliates may use AVS4YOU brand keywords in their PPC campaigns. 
                For the use of trademarks in the ad titles it is obligatory to receive a written consent. Please submit your request at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>.
              </Text>
            </div>
          </div>
        </div>
        <div className="choose-program screen-wrapper">
            <div className="choose-program__round-wrapper">
                <Text as="h3" className="round-and-number">
                    01
                </Text>
            </div>
            <Text as="h2" className="common__heading">
                Choose Affiliate Program
            </Text>

            <ContentSelector
                className="choose-program__content-wrapper"
                buttonNames={["Avangate","MyCommerce Share-it"]}
            >
                <div className="choose-program__item">
                  <Text as="h2" className="common__heading">
                    Avangate Affiliate Program
                  </Text>
                  <Text className="choose-program__list">
                    Register as an affiliate in your preferred affiliate program. 
                    All new affiliates are automatically approved, so you can start making money 
                    right away instead of wasting time on asking for permission to sell products!
                  </Text>
                  <Text className="choose-program__list">
                    Click here to find the relevant step-by-step information on how to find AVS4YOU in 
                    Avangate and MyCommerce in case you already have an account in one of these systems.
                  </Text>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://store.avs4you.com/affiliates/sign-up.php?_ga=2.228913500.1512074311.1585894590-289270669.1583430629" textClassName="choose-program__button-text" className="choose-program__button-blue">
                      Sign up
                    </Button>
                    <Button href="https://secure.avangate.com/affiliates/" textClassName="choose-program__button-text" className="choose-program__button-transparent">
                      Log in
                    </Button>
                  </div>
                </div>
                <div className="choose-program__item">
                  <Text as="h2" className="common__heading">
                    MyCommerce Share-it Affiliate Program
                  </Text>
                  <Text className="choose-program__list">
                    Register as an affiliate in your preferred affiliate program. 
                    All new affiliates are automatically approved, so you can start making money 
                    right away instead of wasting time on asking for permission to sell products!
                  </Text>
                  <Text className="choose-program__list">
                    Click here to find the relevant step-by-step information on how to find AVS4YOU in 
                    Avangate and MyCommerce in case you already have an account in one of these systems.
                  </Text>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://cp.shareit.com/shareit/affiliates/signup.html?publisherid=200281390&md5=db7bc22a535e2aa3cf7440f7afbc75ce" textClassName="choose-program__button-text" className="choose-program__button-blue">
                      Sign up
                    </Button>
                    <Button href="https://account.mycommerce.com/cp/Login" textClassName="choose-program__button-text" className="choose-program__button-transparent">
                      Log in
                    </Button>
                  </div>
                </div>
            </ContentSelector>
            <div className="choose-program__wrapper">
              <div className="choose-program__round-wrapper">
                  <Text as="h3" className="round-and-number">
                      02
                  </Text>
              </div>
              <Text as="h2" className="common__heading">
                Place links to your website
              </Text>
              <Text className="choose-program__content-text">
                Please use our <a href="https://stat.avs4you.com/linkgenerationarea.aspx" target="_blank">link generator</a> to build correct links and place them on your website, blog or channel. 
                You can generate a direct download link or a custom link
              </Text>
            </div>

            <div className="choose-program__wrapper">
              <div className="choose-program__round-wrapper">
                  <Text as="h3" className="round-and-number">
                      03
                  </Text>
              </div>
              <Text as="h2" className="common__heading">
                Control your sales
              </Text>
              <Text className="choose-program__content-text">
                Our cookie tracking system redirects customers to the checkout page of your affiliate system with your affiliate ID. So you can easily control your sales 
                the usual way via your Avangate, MyCommerce ShareIt control panel
              </Text>
              <Text className="choose-program__contact-us">
              If you have any questions about AVS4YOU Affiliate program, please contact us at <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a>
              </Text>
            </div>

        </div>
        <div className="review-wrapper">
            <ReviewScreen />
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Affiliates);
