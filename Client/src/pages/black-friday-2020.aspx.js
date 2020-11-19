import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import Text from '../components/text';
import ImageGQL from '../components/image-gql';
import Music from '../components/music';
import ReactTurntable from "react-turntable";
import styled from 'styled-components';
import Modal from '../components/modal';


import logoAVS from '../images/black-friday-2020/AVS_Black_friday.svg';
import wheelAVS from '../images/black-friday-2020/wheel/bg_wheel.png';
import wheelAVSpointer from '../images/black-friday-2020/wheel/pointer.png';
import wheelAVScircle from '../images/black-friday-2020/wheel/bf_vector.png';
import wheelAVSfoot from '../images/black-friday-2020/wheel/foot.svg';
import goldenArrowBf from '../images/black-friday-2020/bf_golden_arrow.svg';

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
}

.block_content{
  padding-top: 25px;
  padding-left: 135px;
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
  }
}

.Button_BF_Wheel{
  width: 240px;
  height: 56px;

  color: #eeeeee;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  background-color: #CC0909;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;
}
`;

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

const StyleModal = styled.div`
z-index: 50;
`;

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

const prizes = [
  '15%', '45%', '35%', '25%', '100%', '10%', '20%', '30%',
  '40%', '50%', '15%', '25%', '35%', '45%', '100%', '10%',
  '20%', '30%', '40%', '50%',
]

const codeBF = [
  '1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%',
  '9%', 'a%', 'q%', 'w%', 'e%', 'r%', 't%', 'y%',
  'f%', 'v%', 'z%', 'x%',
]
class blackFriday extends React.PureComponent {
  turntable = null


  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
			isInnerModalOpen: false
    };

    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
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


  render(){
    const styles = {
      //justifyContent:"center",
      //alignContent:"center",
      //float: "left",
      //display:"flex"
      paddingLeft: "15px",
    }


    let arm;


    const options = {
      prizes,
      width: 500,
      height: 550,
      primaryColor: "#ba0000",
      secondaryColor: "#eeeeee",
      fontStyle:{
          color:"#fff",
          size:"14px",
          fontVertical:true,
          fontWeight:"bold",
          fontFamily:"Microsoft YaHei"
      },
      speed : 1000,
      duration: 1000,
      onStart(){
        //If you want before the rotate do some...
        console.log('start...');
        //If you want stop rotate you can return false
        return true
      },
     onComplete(codeBF) {
      //this.openModal;
      arm = codeBF; 
      console.log(codeBF)
      return arm; 
     // console.log(arm)
      /*return (  <StyleModal >
        <Modal
          isModalOpen={true}
          
        >
          <button
            style={{
              margin: 0,
              width: "auto",
              marginTop: 10
            }}
          >
            Close
          </button>
        </Modal>
      </StyleModal>);*/
        //return arm;
        //alert(codeBF)
     }
    }
    console.log(arm);
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
      <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="bg_bf_wheel.png" style={{position: "absolute"}}/>
              <div className="header__body header__body_bg">
                <div className="header__body-wrapper">
                  <Wheelstyle>
                  <img className="wheelAVScircle"  src ={wheelAVScircle}/>
                  <img className="wheelAVSpointer"  src ={wheelAVSpointer}/>
                  <div className="wheelAVSram">
                  <div className="WheelAVS"  style={styles}>
                      <ReactTurntable {...options}
                      hiddenButton
                      getTurntable={turntable => (this.turntable = turntable)}
                      
                     />
                       
                  </div>
                  </div>
                  <img className="wheelAVSfoot"  src ={wheelAVSfoot}/>
                  </Wheelstyle>

                <div className="bf_container">
                
                <img className="logoAVS" src={logoAVS} />
                <div className="block_content">
                    <img className="golden_arrow_bf_first" src={goldenArrowBf}></img>
                    <Text className="header_bf">{this.props.t("5 Day Lottery")}</Text>
                    <img className="golden_arrow_bf" src={goldenArrowBf}></img>
                    <Text as="h3" className="header__subtitle">{this.props.t("Try your luck in Black Friday Lottery!")}</Text>
                    <Text as="h3" className="header__subtitle" style={{paddingTop:"10px"}}>{this.props.t("Huge discounts only 5 days!")}</Text>
                    <Text className="secondtext_bf">{this.props.t("Make the most of AVS4YOU lottery and pick a discount coupon up to 99% off.")}</Text>
                    <Text as="h3" className="header__subtitle" style={{paddingBottom:"45px"}}>
                        {this.props.t("Good luck!")}
                    </Text>
                    <button className="Button_BF_Wheel" onClick={() => this.turntable.start()}> {this.props.t("Start")} </button>
                    <Text className="overwey">{this.props.t("*Please, note that you may try your luck only once a day.")}</Text>
                </div>
                <StyleModal >
                  <Modal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <button
                      style={{
                        margin: 0,
                        width: "auto",
                        marginTop: 10
                      }}
                      onClick={this.closeModal}
                    >
                      Close
                    </button>
                  </Modal>
			</StyleModal>
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

