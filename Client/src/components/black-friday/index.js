import React, { createRef } from "react";
import Text from '../text';
import ImageGQL from '../image-gql';
import styled from 'styled-components';
import Button from '../button';
import ReactTurntable from './ReactTurntable';

import wheelAVS from '../../images/black-friday/bg_wheel.png';
import wheelAVScircle from '../../images/black-friday/bf_vector.png';
import wheelAVSbg from '../../images/black-friday/circle_bg.png';
import wheelAVSlogo from '../../images/black-friday/logo_avs_bf.svg';
import closeBFbanner from '../../images/black-friday/close-banner-bf.png';
import closeBFbannerHover from '../../images/black-friday/close-banner-bf-hover.png';
import congratsBg from '../../images/black-friday/congratulations.png';

import onMusicButtom from "../../images/black-friday/on_bf.png";
import offMusicButtom from "../../images/black-friday/off_bf.png";
import AudioCasino from "../../images/black-friday/operation_casino.mp3";
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const Wheelstyle = styled.div`
float: left;
margin: 25px;
padding: 10px;
width: 530px;
height: 560px;
position: relative;
display: flex;
justify-content: center;
align-items: center;

.WheelAVS{
    position: absolute;
    z-index: 1;
    font-family: Montserrat, sans-serif;
    top: -5%;
    left: 2%;

    .react-turntable-section-btn {
      display: none !important;
    }
}

.wheelAVSram{
  background-image: url(${wheelAVS});
    background-size: 650px 650px;
    float: left;
    height: 720px;
    position: relative;
    width: 650px;
    z-index: 2;
    background-position: 2px -2px;
    background-repeat: no-repeat;
    z-index: 2;
    margin-left: -78px;
    margin-top: -16px;
}

.wheelAVScircle{
  position: absolute;
  top: 145px;
  left: 158px;
  z-index: 20;
  transform: scale(0.5);
}

.wheelAVSfoot{
  position: absolute;
  z-index: -1;
  top: 480px;
}
`;

const BlackFridayStyle = styled.div`
background: #000000;
background-repeat: repeat;
background-position: 0 0;
width: 100%;
height: 100%;
padding: 0;
margin: 0;
font-family: Tahoma;
color: #fff;
vertical-align: top;

.header__body_bg {
  position: relative;
}

.music-block {
    width: 100%;
    position: absolute;
    right: 0;

  .afh_music_block,
  .afh_share_block {
    height: 38px;
    width: 38px;
    display: inline-block;
    float: right;
    cursor: pointer;
    position: absolute;
    top: -70px;
    right: 0;
    margin-right: 100px;
    z-index: 2;
  
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
}

.header__body {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.bf_container{
  display: grid;
  justify-items: center;
  position: relative;
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
}

.wheelStyle {
  grid-column: 1;
  grid-row: 1;
}

.header__body-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  align-items: center;
}

.on_complite {
  width: 540px;
  height: 100%;
  z-index: 100;
  display: grid;
  align-content: center;
}

.block_content{
  text-align: center; 

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

  .header__title {
    font-size: 80px;
    color: #fff;
    background: linear-gradient(90deg, #F8D785 0%, #BA8619 44.5%, #E0CA94 80.29%, #805817 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    line-height: 100px;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: Montserrat;
  }

  .header___subtitle {
    font-size: 64px;
    color: #fff;
    font-weight: 400;
    line-height: 100px;
    text-transform: uppercase;
    padding-bottom: 32px;
    white-space: nowrap;
    font-family: Montserrat;
  }

  .header__subtitle{
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    line-height: 25px;
    padding: 0px 0 20px;
    text-align: center;
    font-family: Montserrat;
    min-width: 700px;
  }

  .header_subtitle {
    font-size: 32px;
    color: #fff;
    line-height: 44px;
    padding: 0px 0 40px;
    text-align: center;
    font-family: Montserrat;
    max-width: 656px;
    margin: auto;
  }

  .secondtext_bf{
    font-size: 20px;
    color: #999999;
    font-weight: normal;
    line-height: 35px;
    padding-top: 35px;
  }

  .overwey{
    font-size: 17px;
    color: #555555;
    font-weight: normal;
    line-height: 24px;
    padding-top: 48px;
    text-align: center;
  }
}

.header_congrats {
  color: #FFFFFF;
  background: linear-gradient(90deg, #F8D785 0%, #BA8619 44.5%, #E0CA94 80.29%, #805817 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  padding-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: ${(props) => (props.locale === "de" ? '64px' : '100px')};
}

.got {
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  font-size: 24px;
  padding-bottom: 32px;
  font-weight: 400;
  line-height: 34px;

  span {
    font-weight: 700;
    color: rgba(255, 255, 255, 0.95);
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
  padding-bottom: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;

  .couponText {
    color: rgba(255, 255, 255, 0.95);
    text-align: center;
    font-size: 24px;
    padding-bottom: 32px;
    font-weight: 400;
    line-height: 34px;
    text-transform: none;
  }
}

.button-start {
  width: 100%;

}

.wheelAVSbg {
  position: absolute;
  top: -200px;
  left: -180px;
  z-index: 0;
  width: 880px;
}

.programName {
  color: #D9C475;
  font-family: Montserrat;
  font-size: 24px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}

.closeBanner {
  background-image: url(${closeBFbanner});
  transition: background-image 1s;
  position: absolute;
  height: 45px;
  width: 45px;
  right: 0px;
  top: -70px;
  cursor: pointer;
  z-index: 2;
  margin-right: 35px;

  &:hover {
    background-image: url(${closeBFbannerHover});
    transition: background-image 0.5s;
  }
}

  .congratsBg {
    height: 931px;
    position: absolute;
    top: -70%;
    z-index: -1;
    left: 40%;
    object-fit: cover;
  }

.header_img {
  position: relative;
  padding-bottom: 48px;

  .wheelAVSlogo {
    position: relative;
  }
}

.Button_BF_Wheel{
  width: auto;
  margin: auto;
  display: table;
  padding: 16px 32px;

  color: #EE0000;
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

@media (max-width: 1400px) {

  .music-block {
    top: 68px;
    width: 600px;
    position: relative;
    height: 38px;
    display: table;
    margin: auto;

    .afh_music_block {
      width: 38px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: grid;
      margin-right: 60px;
    }

    .closeBanner {
      margin-right: 0px;
      top: 0;
    }
  }

  .header__body-wrapper {
    grid-template-columns: 1fr;
  }

  .on_complite_close {
    right: 0 !important;
  }

  .header__body {
    padding-top: 50px !important;
  }

  .wheelStyle {
    margin: auto;
    top: 100px;
    grid-column: 1;
    grid-row: 2;
  }

  .bf_container {
    margin-top: 100px;
    height: 545px;
    grid-column: 1;
    grid-row: 1;
  }

  .on_complite_container {
    height: 433px;
  }

  .block_content .header_subtitle {
    padding: 0px 40px 40px;
  }

  .header_img {
    padding-bottom: 0;
  }

  .congratsBg {
    width: 100vw;
    top: 20%;
    left: 0%;
  }
}
`;

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

const streamUrl = AudioCasino;

const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, ...rest } = props;
  const {useEffect, useRef, useState} = React;

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

const prizes = [
  '$10',
  'Surprise',
  '100%',
  '$10',
  '10%',
  '20%',
  '30%',
  '20%'
];

const CouponNames = {
  '$10': 'AVDC25',
  '10%': ['Unlim10', '10AyeL'],
  '20%': ['Unlim20', 'AnYear20'],
  '30%': ['AVUnlim30', 'ANYeR30'],
  '40%': 'AU40lim',
  'Surprise':'Un5AVsur',
  '100%':'BRy25Amak',
}

const ProgramNames = {
  'AVDC25': 'AVS4YOU Unlimited',
  'Unlim10': 'AVS4YOU Unlimited',
  '10AyeL': 'AVS4YOU 1 Year Subscription',
  'Unlim20': 'AVS4YOU Unlimited', 
  'AnYear20': 'AVS4YOU 1 Year Subscription',
  'AVUnlim30': 'AVS4YOU Unlimited',  
  'ANYeR30': 'AVS4YOU 1 Year Subscription',
  'AU40lim': 'AVS4YOU Unlimited', 
  'Un5AVsur': '50% Unlimited Subscription', 
  'BRy25Amak': 'AVS Video ReMaker 1 Year Subscription',
}

const RedeemNames = {
  'AVDC25': 'AVDC25',
  'Unlim10': 'Unlim10',
  '10AyeL': '10AyeL',
  'Unlim20': 'Unlim20',
  'AnYear20': 'AnYear20',  
  'AVUnlim30': 'AVUnlim30',
  'ANYeR30': 'ANYeR30',
  'AU40lim': 'AU40lim', 
  'Un5AVsur': 'Un5AVsur', 
  'BRy25Amak': 'BRy25Amak',
}

const options = {
  prizes,
  width: 500,
  height: 550,
  primaryColor: "#C02025",
  secondaryColor: "#E8E5E2",
  separatorWidth: 6,
  separatorColor: "#000",
  winningPrimarySectorColor: "#be2b30ff",
  winningSecondarySectorColor: "#f8f6f5ff",
  winningPrimaryFontColor: "#f7c537",
  winningSecondaryFontColor: "#C02025",
  fontStyle:{
      size:"28px",
      fontVertical:true,
      fontWeight:"800",
      fontFamily: "Montserrat, sans-serif",
      color: "#fff",
      secondaryColor: "#000",
  },
  speed: 1000,
  duration: 5000,
  onStart(){
    return true
  },
  onStop(){
    return true
  }
 }

const getCouponName = (winPrize) => {
  if (!winPrize) return null
  let couponName = ''
  if ( typeof CouponNames[winPrize] !== 'string' ) {
    const randomNumber = Math.random();
    couponName = (randomNumber > 0.5) ? CouponNames[winPrize][1] : CouponNames[winPrize][0]
    return couponName
  }
  return CouponNames[winPrize]
}

export class BlackFriday extends React.PureComponent {
  constructor(props) {
    super(props);
    this.turntableRef = createRef();
    this.state = {
      device: "",
      isModalOpen: false,
			isInnerModalOpen: false,
      winPrize: null,
      couponName: null,
      isSpinning: false,
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

  handleSpin = () => {
    if (this.state.isSpinning) {
      return;
    }
    this.setState({ isSpinning: true, winPrize: null, couponName: null });
    if (this.turntableRef.current) {
      this.turntableRef.current.onStartRotate();
    }
  };

  handleSpinComplete = (prize) => {
    this.setPrize(prize);
    this.setState({ isSpinning: false });
  }

  setPrize(prize) {
		this.setState({
			winPrize: prize,
      couponName: getCouponName(prize)
		});
	}

  componentWillUpdate(nextProps, nextState) {
    if (nextState.couponName && nextState.winPrize && !getCookie('couponName')) {
      const day = new Date().getDate();
      const mounth = new Date().getMonth();
      const year = new Date().getFullYear();
      const date = new Date(`${year}-${mounth+1}-${day+1}`);
      setCookie('couponName', nextState.couponName, {'expires': date})
      setCookie('winPrize', nextState.winPrize, {'expires': date})
    }
  }

  componentDidMount() {
    const couponName = getCookie('couponName');
    const winPrize = getCookie('winPrize')

    if (couponName && winPrize) {
      this.setState({
        winPrize: winPrize,
        couponName: couponName
      });
    }
  }

  render(){
    const programName = ProgramNames[this.state.couponName];
    const redeemName = RedeemNames[this.state.couponName];
    const { isSpinning } = this.state; // rotation удален
    const { locale } = this.props;

    return (
        <BlackFridayStyle locale={locale}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet"></link>
        <div className="header">
              <ImageGQL className="headerBackgroundImage" imageName="bg_bf_wheel.png" style={{position: "absolute"}}/>
                <div className="header__body header__body_bg">
                <div className="music-block"><CustomPlayer
                    streamUrl={AudioCasino}
                    playing={true}
                    preloadType="auto" 
                    className="afh_music"
                  />
                  <div className="closeBanner on_complite_close" onClick={this.props.onCloseBanner}></div></div>
                  <div className="header__body-wrapper">
                  {this.state.couponName ? <div className="bf_container on_complite_container">                
                      <div className="block_content on_complite">
                      <img className="congratsBg" src={congratsBg}/>
                      <Text fontFamily={'Montserrat'} as="h1" className="header_congrats">{this.props.t("Congratulations")}</Text>
                      {this.state.couponName && <Text fontFamily={'Montserrat'} className="got">{this.props.t("Youve got a")}<span>{this.state?.winPrize === "Surprise" ? "50%" : this.state?.winPrize}</span>{this.props.t("discount on")}<br /><span className="programName">{this.props.t(programName)}{this.props.t("discount before")}</span></Text>}
                      {this.state.couponName && <Text fontFamily={'Montserrat'} className="coupon"><span className="couponText">{this.props.t("Use code")}</span> <span>{this.state.couponName}</span> <span className="couponText">{this.props.t("at checkout")}</span></Text>}
                      <div className="button-coupon"><Button className="Button_BF_Wheel" id="black_friday_redeem" href={this.props.t(redeemName)}> {this.props.t("Redeem your coupon")} </Button></div>
                    </div>
                  </div>
                  : 
                  <div className="bf_container">           
                    <div className="header_img">
                      <img className="wheelAVSlogo" src={wheelAVSlogo}/>
                    </div>
                      <div className="block_content">
                      <Text fontFamily={'Montserrat'} as="h1" className="header__title">{this.props.t("Black Friday")}</Text>
                      <Text fontFamily={'Montserrat'} as="h1" className="header___subtitle">{this.props.t("Lucky Wheel")}</Text>
                      <Text fontFamily={'Montserrat'} as="h3" className="header_subtitle">{this.props.t("Spin the wheel to get a discount coupon up")} <b>{this.props.t("99% off")}</b> {this.props.t("onwheel")} <b>{this.props.t("AVS4YOU")}</b>{this.props.t("products")}</Text>
                      <div className="button-start"><Button className="Button_BF_Wheel" id="black_friday_start" onClick={this.handleSpin} disabled={isSpinning}> {isSpinning ? this.props.t("Spinning...") : this.props.t("Get started now")} </Button></div>
                      <Text className="overwey">{this.props.t("Please note that you may try your luck only once a day")}</Text>
                        
                    </div> 
                  </div>
                  }
                  <Wheelstyle className="wheelStyle">
                    <img className="wheelAVSbg" src={wheelAVSbg}/>
                    <img className="wheelAVScircle" src={wheelAVScircle}/>
                    <div className="wheelAVSram"></div>

                    <div className="WheelAVS">
                      <ReactTurntable
                          ref={this.turntableRef}
                          {...options}
                          prizes={prizes}
                          onComplete={this.handleSpinComplete}
                      />
                    </div>
                  </Wheelstyle>
                  </div>
              </div>
          </div>
        </BlackFridayStyle>
    );
  }
};
