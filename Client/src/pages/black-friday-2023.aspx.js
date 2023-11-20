import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import Text from '../components/text';
import ImageGQL from '../components/image-gql';
//import Music from '../components/music';
import ReactTurntable from "react-turntable";
import styled from 'styled-components';
import Button from '../components/button';


import logoAVS from '../images/black-friday/bf.png';
import wheelAVS from '../images/black-friday/bg_wheel.png';
import wheelAVSpointer from '../images/black-friday/pointer.png';
import wheelAVScircle from '../images/black-friday/bf_vector.png';
import wheelAVSfoot from '../images/black-friday/foot.svg';
import wheelAVSbg from '../images/black-friday/circle_bg.png';
import wheelAVSlogo from '../images/black-friday/logo_avs_bf.png';
import wheelAVSrectangle from '../images/black-friday/rectangle_bg.png';

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
    padding: 40px 0 20px;
    text-align: center;
    font-family: Montserrat;
  }

  .header_subtitle {
    font-size: 32px;
    color: #fff;
    font-weight: bold;
    line-height: 25px;
    padding: 0px 0 40px;
    text-align: center;
    font-family: Montserrat;
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

.got {
  color: #F2F2F2;
  font-size: 24px;

  span {
    color: #D9C475;
    font-weight: 700;
    font-size: 36px;
  }
}

.button-start {
  width: 100%;
}

.wheelAVSbg {
  position: absolute;
  top: 0;
  right: 34%;
}

.header_img {
  position: relative;
  height: 370px;
  width: 600px;

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
}

.Button_BF_Wheel:hover {
  background-color: #FF0000;
  transition: background-color 1s;
}
`;

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};

const prizes = ['10%', '15%', '20%', '30%', '40%', '45%', '50%',
'20%', '30%', '35%', '40%', '45%', '50%', 
'100%'] 

const CouponNames = {
  '10%': 'Unlim10',
  '15%':'Unlim15',
  '20%': ['Unlim20', 'AnYear20'],
  '30%': ['AVUnlim30', 'ANYeR30'],
  '35%': 'AnAVS35',
  '40%': ['AVUnlim30', 'Av40Sub'],
  '45%': ['Un45AV', '45AVAsUb'],
  '50%': ['50UnlAS', '50AnlAV'],
  '100%':'VRcoup23',
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
      color:"#fff",
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

class blackFriday extends React.PureComponent {
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
    const couponName = getCouponName(this.state.winPrize)

    return (
      <Layout 
              footerIsDisabled={true}
              pageContext={this.props.pageContext} 
              t={this.props.t}
              title={this.props.t("AVS4YOU Black Friday Sale")}
              metaDescription={this.props.t("")}
              metaKeywords={this.props.t("")}
      >
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

                  <div className="bf_container">                
                    <div className="header_img">
                      <img className="wheelAVSlogo" src={wheelAVSlogo}/>
                      <img className="logoAVS" src={logoAVS} />
                      <img className="wheelAVSrectangle" src={wheelAVSrectangle}/>
                    </div>
                      <div className="block_content">
                      {couponName && <Text fontFamily={'Montserrat'} className="got">You’ve got a <span>{this.state?.winPrize}</span> discount</Text>}
                      {couponName && <Text fontFamily={'Montserrat'} className="got"><span>{couponName}</span></Text>}
                      <Text  fontFamily={'Montserrat'} as="h3" className="header__subtitle">{this.props.t("Spin the wheel to get a discount coupon up")}</Text>
                        <Text  fontFamily={'Montserrat'} as="h3" className="header_subtitle">{this.props.t("to 99% off on AVS4YOU products.")}</Text>
                        <div className="button-start"><Button className="Button_BF_Wheel" onClick={() => this.turntable.start()}> {this.props.t("Start")} </Button></div>
                        <Text className="overwey">{this.props.t("*Please, note that you may try your luck only once a day.")}</Text>
                        
                    </div>
                  </div>

                  </div>
                </div>
              </div>
              </BlackFridayStyle>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(blackFriday);

