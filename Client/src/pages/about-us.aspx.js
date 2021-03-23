import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/about-us.less";
import ScrollUpButton from '../components/scroll-up-button';



//
import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg.png';
import Eggm from '../images/easter-event/mobile_egg.png';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import styled from 'styled-components';
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
    font-size: 31px;
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
//



class aboutUs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonAbouUS")

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
        className="about-us-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU is the home of ultimate multimedia editing family Learn more about our company its history who we are and what we value")}
        metaDescription={this.props.t("AVS4YOU Multimedia tools contact")}
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
            <b>{this.props.t("Founded in 2004")}</b>{this.props.t(",")} {this.props.t("Online Media Technologies Ltd is an IT high-tech company that specializes in developing innovative video and audio solutions for end-users and professional developers Our award-winning products have earned high reputation among millions of users worldwide Working in touch with the latest trends in multimedia world we create software tools that make your work with digital video and audio smooth and effective and let you remain on the cutting edge of high technological advances")}
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
                  {this.props.t("AVS4YOU")} {this.props.t("is committed to make all users contented offering them a number of programs absolutely free of charge")}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="map-body">



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
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Winner35")}</span></Text>
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



          <div className="map-body__contacts-wrapper">
            <div className="map-body__block">
            
              <Text as="h4" className="map-body__heading">{this.props.t("We are here")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("Suite 12, 2nd Floor, Queens House")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("180 Tottenham Court Road")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("London W1T 7PD")}</Text>
              <Text as="p" className="map-body__text">{this.props.t("United Kingdom")}</Text>
            </div>
            <div className="map-body__block">
              <Text as="h4" className="map-body__heading">{this.props.t("Contacts")}</Text>
              <Text as="p" className="map-body__text"><a href="tel:+442081443359">(+44) 20 7097 8969</a> ({this.props.t("no phone support")})</Text>
            </div>
          </div>
          <div className="map-body__adaptive-map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.2569405901709!2d-0.13665574168987776!3d51.52213386381332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b29329cc78f%3A0xe28600fd84cdb10!2zU3VpdGUgMTIsIDJuZCBGbG9vciwgMTgwIFRvdHRlbmhhbSBDb3VydCBSZCwgRml0enJvdmlhLCBMb25kb24gVzFUIDdOWiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1606730021347!5m2!1sru!2sru" width="100%" height="100%" frameBorder="0" allowFullScreen=""  />
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
              {this.props.t("Contact AVS4YOU")}
            </Text>
            <div className="contact-body__wrapper">

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Affiliate Sales")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("To learn more about affiliate program please email us at")}<a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a>{this.props.t("or visit our ")}<Link to="/affiliates.aspx">{this.props.t("Affiliate Program ")}</Link> {this.props.t("page")}
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
                  {this.props.t("To get a quote for schools and universities, please email us at ")}<a href="mailto:sales@avs4you.com">sales@avs4you.com</a>{this.props.t("or visit")}<Link to="/education.aspx">{this.props.t("Education page")}</Link>
                </Text>
              </div>

              <div className="common-info-block">
                <Text as="h4" className="common-info-block__headline">
                  {this.props.t("Customer Support")}
                </Text>
                <Text className="common-info-block__text">
                  {this.props.t("For assistance with purchasing and using our products, please visit our ")}<a target="_blank" rel="noreferrer noopener" href={this.props.t("about-us-support-avs4you-login")} >{this.props.t("Support Center")}</a>
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
