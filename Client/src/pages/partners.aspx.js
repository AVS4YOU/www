import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/partners.less";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import mailIcon from "../images/partners/email.svg";
import Form from '../components/form-partners';
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



class partners extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonPartners")
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
        className="partners" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU partnership Program for resellers")}
        metaDescription={this.props.t("AVS4YOU Reseller program: Safe and cost-effective")}
        metaKeywords=""
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="partners-header.jpg" style={{position: "absolute"}}/>
          <div className="header__background-gradient">
            <div className="header__body">
              <Text as="h1" className="header__heading">{this.props.t("Reseller Program")}</Text>
              <Text as="h3" className="header__subtitle">{this.props.t("No registration required There is no need to place links on the website Request a quote whenever your customer needs AVS4YOU multimedia suite")}</Text>
            </div>
          </div>
        </div>
        <div className="body-reseller screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Why AVS4YOU Reseller Program")}
          </Text>
          <div className="body-reseller__wrapper">
            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("100% Guaranteed Profit")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("You sell powerful tools for multimedia processing popular all over the world Over 1000000 people download and install AVS4YOU tools monthly")}
              </Text>
              <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Pre-Sale and Post-Sale Support")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Our managers carefully lead you through the purchase process and provide you with all accompanying documentation")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Various Payment Methods")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Choose the most suitable payment method credit cards, PayPal, bank transfer, purchase order, etc")}
              </Text>
            </div>

            <div className="common-info-block">
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("No registration required")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("There is no need to place links on the website Request a quote whenever your customer needs AVS4YOU multimedia suite")}
              </Text>
            </div>

            <div className="common-info-block">


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
                        <Text className="ModalShaerTexth1">{this.props.t("Get 25% off")}<br />{this.props.t("VVVCGet 25% off")}</Text>
                        <Text className="ModalShaerTexth2">{this.props.t("on AVS4YOU Unlimited")}<br />{this.props.t("Subscription")}</Text>
                        <Text className="ModalShaerTextCoupon"><span>{this.props.t("Partner25")}</span></Text>
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


              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Flexible Discounts")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Benefit from flexible discounts on volume licenses The more licenses you purchase at once, the higher the discount is")}
              </Text>
            </div>
          </div>
          <div className="body-reseller__button-wrapper">
          <a target="_blank" rel="noreferrer noopener" href={this.props.t("partners-onlinehelpstaticcontents-avs4you-downloads-reseller-partners")} >
            <Button className="body-reseller__button" textClassName="body-reseller__button-text">
                {this.props.t("Download reseller prose list")}
            </Button>
          </a>
          </div>
        </div>
        <div className="form screen-wrapper">
          <img src={mailIcon} alt=""/>
          <div className="reseller-from-wrapper">
            <Form
              formHeader={this.props.t("To become an AVS4YOU reseller, please, use the form below:")}
              nameAuthor={this.props.t("Name")}
              emailAddressText={this.props.t("Email address")}
              numberOfSubscriptions={this.props.t("Number of subscriptions")}
              comment={this.props.t("Give us a brief description of your specific needs")}
              buttonTextSend={this.props.t("Send your request")}
            />
            <Text className="contact-us-text">{this.props.t("If you have any questions about AVS4YOU partnership program, please contact us at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a></Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(partners);