import React, {useState, useEffect, useRef} from "react";
import withI18next from "../withI18next";
import Layout from "../layout";
import Text from '../text';
import ImageGQL from '../image-gql';
import ReactTurntable from "react-turntable";
import styled from 'styled-components';
import Button from '../button';


import logoAVS from '../../images/black-friday/bf.png';
import wheelAVS from '../../images/black-friday/bg_wheel.png';
import wheelAVSpointer from '../../images/black-friday/pointer.png';
import wheelAVScircle from '../../images/black-friday/bf_vector.png';
import wheelAVSfoot from '../../images/black-friday/foot.svg';
import wheelAVSbg from '../../images/black-friday/circle_bg.png';
import wheelAVSlogo from '../../images/black-friday/logo_avs_bf.png';
import wheelAVSrectangle from '../../images/black-friday/rectangle_bg.png';
import closeBFbanner from '../../images/black-friday/close-banner-bf.png';
import closeBFbannerHover from '../../images/black-friday/close-banner-bf-hover.png';
import congratsBg from '../../images/black-friday/congratulations.png';

import onMusicButtom from "../../images/black-friday/on_bf.png";
import offMusicButtom from "../../images/black-friday/off_bf.png";
import offMusicButtomHover from "../../images/black-friday/off_bf_hover.png";
import AudioCasino from "../../images/black-friday/operation_casino.mp3";
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const Wheelstyle = styled.div`
float: left;
margin: 25px;
padding: 10px;
width: 530px;
height: 560px;
position: relative;
.WheelAVS{
  z-index: 10;
}

.wheelAVSram{
  background-image: url(${wheelAVS});
  background-size: 546px 845px;
    float: left;
    height: 900px;
    position: relative;
    width: 600px;
    z-index: 2;
    background-position: -8px 5px;
    background-repeat: no-repeat;
}

.wheelAVSpointer{
  position: absolute;
  top: 235px;
  left: 250px;
  z-index: 15;
}

.wheelAVScircle{
  position: absolute;
  top: 255px;
  left: 235px;
  z-index: 20;
}

.wheelAVSfoot{
  position: absolute;
  z-index: -1;
  top: 480px;
}
`;

const BlackFridayStyle = styled.div`
background: radial-gradient(72.85% 59.35% at 0% 46.77%, #4E6368 0%, #0A0F11 98.22%);
background-repeat: repeat;
background-position: 0 0;
width: 100%;
height: 100%;
padding: 0;
margin: 0;
font-family: Tahoma;
color: #fff;
vertical-align: top;

.bf_container{
  display: grid;
  justify-items: center;
  position: relative;
}

.header {
  height: 938px;
}

.on_complite {
  position: static;
  width: 540px;
  margin-top: -323px;
  z-index: 100;
}

.afh_music_block,
.afh_share_block {
  height: 38px;
  width: 38px;
  display: inline-block;
  float: right;
  cursor: pointer;
  position: absolute;
  top: -70px;
  right: 61px;
  z-index: 1;

  .afh_music {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 30px;
    transition: 0.5s;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }
}

.block_content{
  padding-top: 25px;
  .golden_arrow_bf{
    max-width: 515px;
  }
  .golden_arrow_bf_first{
    max-width: 515px;
    padding-left: 375px;
    }
  .header_bf{
    font-size: 68px;
    color: #fff;
    font-weight: 600;
    line-height: 66px;
  }

  .header__subtitle{
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    line-height: 25px;
    padding: 0px 0 20px;
    text-align: center;
    font-family: Montserrat;
    max-width: 700px;
  }

  .header_subtitle {
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    line-height: 25px;
    padding: 0px 0 40px;
    text-align: center;
    font-family: Montserrat;
    max-width: 700px;
  }

  .secondtext_bf{
    font-size: 20px;
    color: #999999;
    font-weight: normal;
    line-height: 35px;
    padding-top: 35px;
  }

  .overwey{
    font-size: 14px;
    color: #666666;
    font-weight: normal;
    line-height: 24px;
    padding-top: 35px;
    text-align: center;
  }
}

.header_congrats {
  color: #D9C475;
  text-align: center;
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: 16px;
}

.got {
  color: #F2F2F2;
  text-align: center;
  font-size: 24px;
  padding-bottom: 16px;
  font-weight: 400;

  span {
    color: #D9C475;
    font-weight: 700;
    font-size: 36px;
  }
}

.coupon {
  color: #F3F3F3;
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 24px;
}

.button-start {
  width: 100%;
}

.wheelAVSbg {
  position: absolute;
  top: 0;
  right: 34%;
}

.programName {
  color: #D9C475;
  font-family: Montserrat;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}

.header_img {
  position: relative;
  height: 370px;
  width: 625px;

  .closeBanner {
    background-image: url(${closeBFbanner});
    transition: background-image 1s;
    position: absolute;
    height: 45px;
    width: 45px;
    right: 0px;
    top: -70px;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background-image: url(${closeBFbannerHover});
      transition: background-image 0.5s;
    }
  }

  .wheelAVSrectangle {
    position: absolute;
    top: 0;
    left: 0;
  }

  .wheelAVSlogo {
    position: absolute;
    top: -30px;
    left: 255px;
  }

  .logoAVS {
    position: absolute;
    top: 75px;
    left: 100px;
  }

  .congratsBg {
    top: -140px;
    position: absolute;
    right: -330px;
    z-index: 0;
  }
}

.Button_BF_Wheel{
  width: 366px;
  margin: auto;
  display: table;

  color: #eeeeee;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  background-color: #CC0909;
  transition: background-color 1s;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;

  p {
    text-transform: uppercase;
  }
}

.Button_BF_Wheel:hover {
  background-color: #FF0000;
  transition: background-color 1s;
}
`;

const streamUrl = AudioCasino;

const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing } = props;

  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  const [autoPlay, setAutoPlay] = useState(true);

	const prevUrl = usePrevious(streamUrl);

	useEffect(() => {
		if(autoPlay){
			soundCloudAudio.play({streamUrl});
			setAutoPlay(false);
		} 
		if(prevUrl !== streamUrl) {
			setAutoPlay(true);
		}
	//},[streamUrl])
  },[setAutoPlay, prevUrl, autoPlay, soundCloudAudio])
  return (
    <div>
    <div className="afh_music_block" onClick={() => play()} aria-hidden="true">
      <button className="afh_music" >
        {playing 
          ? <img src={onMusicButtom} alt="Music Off"/>         
          : <img src={offMusicButtom} alt="Music On"/> 
        }
      </button>
    </div>
    </div>
  );
  function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
		  ref.current = value;
		});
		return ref.current;
	}
});

const prizes = ['10$', '15$', '20$', '30%', '40%', '45%', '50%',
'20$', '30%', '35%', '40%', '45%', '50%', 
'100%'] 

const CouponNames = {
  '10$': 'Unlim10',
  '15$':'Unlim15',
  '20$': ['Unlim20', 'AnYear20'],
  '30%': ['AVUnlim30', 'ANYeR30'],
  '35%': 'AnAVS35',
  '40%': ['AU40lim', 'Av40Sub'],
  '45%': ['Un45AV', '45AVAsUb'],
  '50%': ['50UnlAS', '50AnlAV'],
  '100%':'VRcoup23',
}

const ProgramNames = {
  'Unlim10': 'AVS4YOU Unlimited',
  'Unlim15': 'AVS4YOU Unlimited',
  'Unlim20': 'AVS4YOU Unlimited', 
  'AnYear20': 'AVS4YOU 1 Year Subscription',
  'AVUnlim30': 'AVS4YOU Unlimited',  
  'ANYeR30': 'AVS4YOU 1 Year Subscription',
  'AnAVS35': 'AVS4YOU 1 Year Subscription',
  'AU40lim': 'AVS4YOU Unlimited', 
  'Av40Sub': 'AVS4YOU 1 Year Subscription',
  'Un45AV': 'AVS4YOU Unlimited', 
  '45AVAsUb': 'AVS4YOU 1 Year Subscription',
  '50UnlAS': 'AVS4YOU Unlimited', 
  '50AnlAV': 'AVS4YOU 1 Year Subscription',
  'VRcoup23': 'AVS Video ReMaker 1 Year Subscription',
}

const RedeemNames = {
  'Unlim10': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Unlim10&CLEAN_CART=ALL',
  'Unlim15': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Unlim15&CLEAN_CART=ALL',
  'Unlim20': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Unlim20&CLEAN_CART=ALL', 
  'AnYear20': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AnYear20&CLEAN_CART=ALL',
  'AVUnlim30': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AVUnlim30&CLEAN_CART=ALL',  
  'ANYeR30': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=ANYeR30&CLEAN_CART=ALL',
  'AnAVS35': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AnAVS35&CLEAN_CART=ALL',
  'AU40lim': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AU40lim&CLEAN_CART=ALL', 
  'Av40Sub': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Av40Sub&CLEAN_CART=ALL',
  'Un45AV': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Un45AV&CLEAN_CART=ALL', 
  '45AVAsUb': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=45AVAsUb&CLEAN_CART=ALL',
  '50UnlAS': 'https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=50UnlAS&CLEAN_CART=ALL', 
  '50AnlAV': 'https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=50AnlAV&CLEAN_CART=ALL',
  'VRcoup23': 'https://store.avs4you.com/order/checkout.php?PRODS=26192289&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=VRcoup23&CLEAN_CART=ALL',
}


const styles = {
  //justifyContent:"center",
  //alignContent:"center",
  //float: "left",
  //display:"flex"
  paddingLeft: "15px",
}

const options = {
  prizes,
  width: 500,
  height: 550,
  primaryColor: "#B50000",
  secondaryColor: "#E6E6E6",
  fontStyle:{
      color: "#000",
      size:"28px",
      fontVertical:true,
      fontWeight:"bold",
      fontFamily:"Microsoft YaHei"
  },
  speed : 5000,
  duration: 5000,
  onStart(){
    return true
  },
  onStop(){
    return true
  }
 }

export class BlackFriday extends React.PureComponent {
  turntable = null

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
			isInnerModalOpen: false,
      winPrize: null,
    };

    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
    this.setPrize = this.setPrize.bind(this);
  }


  getDevice(device){
    this.setState({ device: device });
  }

  // close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
	}

  setPrize(prize) {
		this.setState({
			winPrize: prize
		});
	}


  render(){
    const getCouponName = (winPrize) => {
      if (!winPrize) return null
      let couponName = ''
      if ( typeof CouponNames[this.state?.winPrize] !== 'string' ) {
        const randomNumber = Math.random();
        couponName = (randomNumber > 0.5) ? CouponNames[this.state?.winPrize][1] : CouponNames[this.state?.winPrize][0]
        return couponName
      }
      return CouponNames[this.state?.winPrize]
    }
    const couponName = getCouponName(this.state.winPrize);
    const programName = ProgramNames[couponName];
    const redeemName = RedeemNames[couponName];

    return (
        <BlackFridayStyle>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap" rel="stylesheet"></link>
        <div className="header">
              <ImageGQL className="headerBackgroundImage" imageName="bg_bf_wheel.png" style={{position: "absolute"}}/>
                <div className="header__body header__body_bg">
                  <div className="header__body-wrapper">
                  <img className="wheelAVSbg" src={wheelAVSbg}/>
                    <Wheelstyle>
                    <img className="wheelAVScircle" src={wheelAVScircle}/>
                    <img className="wheelAVSpointer" src={wheelAVSpointer}/>
                    <div className="wheelAVSram">
                    <div className="WheelAVS" style={styles}>
                        <ReactTurntable {...options}
                        onComplete={(prize) => this.setState({
                          winPrize: prize
                        })}
                        hiddenButton
                        getTurntable={turntable => (this.turntable = turntable)}                     
                      />
                    </div>
                    </div>
                    <img className="wheelAVSfoot" src ={wheelAVSfoot}/>
                    </Wheelstyle>

                  {couponName ? <div className="bf_container">                
                    <div className="header_img">
                      <div className="closeBanner" onClick={this.props.onCloseBanner}></div>
                      <CustomPlayer
                        streamUrl={AudioCasino}
                        playing={true}
                        preloadType="auto" 
                        className="afh_music"
                        />  
                      <img className="congratsBg" src={congratsBg}/>
                    </div>
                      <div className="block_content on_complite">
                      <Text fontFamily={'Montserrat'} as="h1" className="header_congrats">{this.props.t("Congratulations")}</Text>
                      {couponName && <Text fontFamily={'Montserrat'} className="got">{this.props.t("Youve got a")}<span>{this.state?.winPrize}</span>{this.props.t("discount on")}<br /><span className="programName">{this.props.t(programName)}{this.props.t("discount before")}</span></Text>}
                      {couponName && <Text fontFamily={'Montserrat'} className="coupon"><span>{couponName}</span></Text>}
                      <div className="button-coupon"><Button className="Button_BF_Wheel" href={redeemName}> {this.props.t("Redeem your coupon")} </Button></div>
                    </div>
                  </div>
                  : 
                  <div className="bf_container">           
                    <div className="header_img">
                    <CustomPlayer
                      streamUrl={AudioCasino}
                      playing={true}
                      preloadType="auto" 
                      className="afh_music"
                      />  
                      <div className="closeBanner" onClick={this.props.onCloseBanner}></div>
                      <img className="wheelAVSlogo" src={wheelAVSlogo}/>
                      <img className="logoAVS" src={logoAVS} />
                      <img className="wheelAVSrectangle" src={wheelAVSrectangle}/>
                    </div>
                      <div className="block_content">
                      <Text  fontFamily={'Montserrat'} as="h3" className="header__subtitle">{this.props.t("Spin the wheel to get a discount coupon up")}</Text>
                        <Text  fontFamily={'Montserrat'} as="h3" className="header_subtitle">{this.props.t("to 99 off on AVS4YOU products")}</Text>
                        <div className="button-start"><Button className="Button_BF_Wheel" onClick={() => this.turntable.start()}> {this.props.t("Start Now")} </Button></div>
                        <Text className="overwey">{this.props.t("Please note that you may try your luck only once a day")}</Text>
                        
                    </div> 
                  </div>
                  }
                  </div>
                </div>
              </div>
              </BlackFridayStyle>
    );
  }
};

