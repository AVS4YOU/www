import React from "react";
import PropTypes from "prop-types";



export default class Modal extends React.Component {
	static propTypes = {
		isModalOpen: PropTypes.bool.isRequired,
		closeModal: PropTypes.func.isRequired,
		style: PropTypes.shape({
			modal: PropTypes.object,
			overlay: PropTypes.object
		})
	};

	constructor(props) {
		super(props);
        this.nowIsTablet = false;

        this.state = {
            open: false,
            isTablet: false,
            offAnimate: false
        };

		this.outerStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		this.stylemodal = {
			position: "relative",
            width: "475px",
            height: "580px",
            top: "80px",
			padding: "35px 15px",
			boxSizing: "border-box",
			backgroundColor: "none",
			margin: "40px auto",
			zIndex: 2,
			textAlign: "left",
			//boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
			...this.props.stylemodal
		};

	this.styleoverlay = {
			position: "fixed",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			width: "100%",
			height: "100%",
			backgroundColor: "rgba(0,0,0,0.5)",
			...this.props.styleoverlay
		};
        
	}

	// render modal
	render() {
		return (
			<div
				style={{
					...this.outerStyle,
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>	<div className="EggsModal"> 
				<div style={this.styleoverlay} onClick={this.props.closeModal} aria-hidden="true"/>
				<div onClick={this.props.closeModal} aria-hidden="true"/>
				<div style={this.stylemodal}>{this.props.children}</div>				
				</div>
			</div>
		);
	}
}

/* 


//
import ModalEgg from '../components/easter/index';
import Egg from '../images/easter-event/mini_egg2.png';
import CloseEgg from '../images/easter-event/close_egg.png';
import EggM  from '../images/easter-event/egg1.png';
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



	///



	
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




*/
