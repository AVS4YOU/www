import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/about-us.less";


class avsAudioConverter extends React.PureComponent {

  constructor(props) {
    super(props);
  }

render(){

    return (
      <Layout className="about-us-page" pageContext={this.props.pageContext} t={this.props.t}>
        <div className="header">
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">About AVS4YOU</Text>
              <Text as="h3" className="header__subtitle">Online Media Technologies Ltd. is the home of AVS4YOU.com, a global leader in multimedia software development</Text>
            </div>
          </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">
            Company
          </Text>
          <Text className="body-company__text">
            <b>Founded in 2004</b>, Online Media Technologies Ltd. 
            is an IT high-tech company that specializes in 
            developing innovative video and audio solutions 
            for end-users and professional developers. 
            Our award-winning products have earned high reputation 
            among millions of users worldwide. Working in touch with 
            the latest trends in multimedia world, we create software tools that
            make your work with digital video and audio smooth and effective and 
            let you remain on the cutting edge of high technological advances.
          </Text>
        </div>
        <div className="stats-wrapper">
          <div className="stats-wrapper__box">
            <Text as="h4">150+</Text>
            <Text as="p">Staff members</Text>
          </div>
          <div className="stats-wrapper__box">
            <Text as="h4">Millions</Text>
            <Text as="p">Of happy users</Text>
          </div>
          <div className="stats-wrapper__box">
            <Text as="h4">200+</Text>
            <Text as="p">Сountries sold in</Text>
          </div>
        </div>
        <div className="unique-body">
          <div className="unique-body__max-width">
            <Text as="h2" className="common__heading">
              What makes AVS4YOU unique?
            </Text>
            <div className="unique-body__wrapper">
              <div className="unique-body__box">
                <Text as="h3" className="unique-body__number">
                  01
                </Text>
                <Text className="unique-body__sub-header">
                  Best offer on the market
                </Text>
                <Text className="unique-body__text">
                  No need to pay for each program. 
                  You get a set of audio and video tools at the price of one application
                </Text>
              </div>

              <div className="unique-body__box">
                <Text as="h3" className="unique-body__number">
                  02
                </Text>
                <Text className="unique-body__sub-header">
                  Software for everyone
                </Text>
                <Text className="unique-body__text">
                  All the software have user-friendly 
                  interface and meet the needs of both professionals and beginners
                </Text>
              </div>

              <div className="unique-body__box">
                <Text as="h3" className="unique-body__number">
                  03
                </Text>
                <Text className="unique-body__sub-header">
                  Focus on users’ needs
                </Text>
                <Text className="unique-body__text">
                  AVS4YOU is committed to make all users 
                  contented offering them a number of programs absolutely free of charge
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="map-body">
          <div className="map-body__contacts-wrapper">
            <div className="map-body__block">
              <Text as="h4" className="map-body__heading">We are here</Text>
              <Text as="p" className="map-body__text">85 Great Portland, London</Text>
              <Text as="p" className="map-body__text">W1W 7LT</Text>
              <Text as="p" className="map-body__text">United Kingdom</Text>
            </div>

            <div className="map-body__block">
              <Text as="h4" className="map-body__heading">Contacts</Text>
              <Text as="p" className="map-body__text"><a href="tel:+442081443359">(+44) 208 144 3359</a> (no phone support)</Text>
              <Text as="p" className="map-body__text"><a href="tel:+442071826722">(+44) 207 182 6722</a></Text>
            </div>
          </div>
          <div className="map-body__adaptive-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.6779277871989!2d-0.1427611707373586!3d51.51850479872734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad5966688f5%3A0x7f597ce753ed6230!2zODUgR3JlYXQgUG9ydGxhbmQgU3QsIExvbmRvbiBXMVcgN0xULCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1579611829457!5m2!1sru!2sru" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
              What makes AVS4YOU unique?
            </Text>
            <div className="contact-body__wrapper">

              <div className="contact-body__box">
                <Text as="h4" className="contact-body__headline">
                  Affiliate Sales
                </Text>
                <Text className="contact-body__text">
                  No need to pay for each program. 
                  You get a set of audio and video tools at the price of one application
                </Text>
              </div>

              <div className="contact-body__box">
                <Text as="h4" className="contact-body__headline">
                  Volume Sales
                </Text>
                <Text className="contact-body__text">
                  To purchase a large number of licenses at a special price, 
                  contact our sales department at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>
                </Text>
              </div>

              <div className="contact-body__box">
                <Text as="h4" className="contact-body__headline">
                  Education
                </Text>
                <Text className="contact-body__text">
                  To get a quote for schools and universities, 
                  please email us at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a> or visit Education page
                </Text>
              </div>

              <div className="contact-body__box">
                <Text as="h4" className="contact-body__headline">
                  Customer Support
                </Text>
                <Text className="contact-body__text">
                  For assistance with purchasing and using our products, 
                  please visit our Support Center
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsAudioConverter);
