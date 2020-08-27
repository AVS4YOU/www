import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/about-us.less";
import ScrollUpButton from '../components/scroll-up-button';

class aboutUs extends React.PureComponent {

render(){

    return (
      <Layout 
        className="about-us-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU is the home of ultimate multimedia editing family. Learn more about our company, its history, who we are and what we value.")}
        metaDescription={this.props.t("")}
        metaKeywords={this.props.t("")}
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="about-us-header.jpg" style={{position: "absolute"}}/>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">
            {this.props.t("Company")}
          </Text>
          <Text className="body-company__text">
            <b>{this.props.t("Founded in 2004")}</b>, {this.props.t("Online Media Technologies Ltd is an IT high-tech company that specializes in developing innovative video and audio solutions for end-users and professional developers Our award-winning products have earned high reputation among millions of users worldwide Working in touch with the latest trends in multimedia world we create software tools that make your work with digital video and audio smooth and effective and let you remain on the cutting edge of high technological advances")}
          </Text>
          <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
        </div>
        <div className="stats-wrapper">
          <div className="stats-wrapper__box">
            <Text as="h4">150+</Text>
            <Text as="p">{this.props.t("Staff members")}</Text>
          </div>
          <div className="stats-wrapper__box">
            <Text as="h4">{this.props.t("Millions")}</Text>
            <Text as="p">{this.props.t("Of happy users")}</Text>
          </div>
          <div className="stats-wrapper__box">
            <Text as="h4">200+</Text>
            <Text as="p">{this.props.t("Сountries sold in")}</Text>
          </div>
        </div>
        <div className="unique-body">
          <div className="unique-body__max-width">
            <Text as="h2" className="common__heading">
              {this.props.t("What makes AVS4YOU unique?")}
            </Text>
            <div className="unique-body__wrapper">
              <div className="unique-body__box">
                <Text as="h3" className="round-and-number">
                  01
                </Text>
                <Text className="unique-body__sub-header">
                  {this.props.t("Best offer on the market")}
                </Text>
                <Text className="unique-body__text">
                  {this.props.t("No need to pay for each program You get a set of audio and video tools at the price of one application")}
                </Text>
              </div>

              <div className="unique-body__box">
                <Text as="h3" className="round-and-number">
                  02
                </Text>
                <Text className="unique-body__sub-header">
                  {this.props.t("Software for everyone")}
                </Text>
                <Text className="unique-body__text">
                  {this.props.t("All the software have user-friendly interface and meet the needs of both professionals and beginners")}
                </Text>
              </div>

              <div className="unique-body__box">
                <Text as="h3" className="round-and-number">
                  03
                </Text>
                <Text className="unique-body__sub-header">
                  {this.props.t("Focus on users’ needs")}
                </Text>
                <Text className="unique-body__text">
                  AVS4YOU {this.props.t("is committed to make all users contented offering them a number of programs absolutely free of charge")}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <a name="contact-us"></a>
        <div className="map-body">
          <div className="map-body__contacts-wrapper">
            <div className="map-body__block">
            
              <Text as="h4" className="map-body__heading">{this.props.t("We are here")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("85 Great Portland, London")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("W1W 7LT")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("United Kingdom")}</Text>
            </div>
            <div className="map-body__block">
              <Text as="h4" className="map-body__heading">Contacts</Text>
              <Text as="p" className="map-body__text"><a href="tel:+442081443359">(+44) 208 144 3359</a> ({this.props.t("no phone support")})</Text>
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
              {this.props.t("Contact")} AVS4YOU
            </Text>
            <div className="contact-body__wrapper">

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Affiliate Sales")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("To learn more about affiliate program please email us at")} <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a> {this.props.t("or visit our ")}<Link to="/affiliates.aspx">{this.props.t("Affiliate Program")}</Link>{this.props.t(" page.")}
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Volume Sales")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("To purchase a large number of licenses at a special price, contact our sales department at ")}<a href="mailto:sales@avs4you.com">sales@avs4you.com</a>
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Education")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("To get a quote for schools and universities, please email us at ")}<a href="mailto:sales@avs4you.com">sales@avs4you.com</a>{this.props.t(" or visit ")}<Link to="/education.aspx">{this.props.t("Education page")}</Link>
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Customer Support")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("For assistance with purchasing and using our products, please visit our ")}<a href="https://support.avs4you.com">{this.props.t("Support Center")}</a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(aboutUs);
