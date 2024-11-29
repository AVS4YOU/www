import React, {useState, useEffect, useRef} from "react";
import withI18next from "../components/withI18next";
import Text from "../components/text";
import Layout from "../components/layout";
import Link from "../components/link";
import "../styles/advent-calendar.less";
import styled from 'styled-components';
import CalendarItem from "../components/calendar-item";
import Modal from '../components/modal';
import CopyLink from '../images/advent-calendar/link_copy.svg';
import CancelModal from '../images/advent-calendar/cancel.svg';
import CardImg from '../images/advent-calendar/avs_card.png';
import LetterImg from '../images/advent-calendar/LetterImg.png';
import AvsPdf from '../images/advent-calendar/calendar_2024.pdf';
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import {
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

import MusicOn from "../images/advent-calendar/music.svg";
import MusicOff from "../images/advent-calendar/music.svg";
import AudioCalendar from "../images/advent-calendar/christmas.wav";
import shareSVGAVS from "../images/advent-calendar/share.svg";
import iconTwitter from "../images/advent-calendar/twitter.svg";
import iconFacebook from "../images/advent-calendar/facebook.svg";

import { withSoundCloudAudio } from 'react-soundplayer/addons';

const PostcardLink = '/static/avs_card_2025.zip';
const PostcardLinkLetter = '/static/avs_letter_2025.zip';

const MenuWrstyle = styled.div`

.share {
	position: fixed;
	top: 30px;
  right: 10px;
	@include breakpoint(tablet) {
		right: unset;
		bottom: unset;
	}
	&__toggle:checked {
		~ .share__button {
    transform: rotate(-180deg);
		}
		~ .share__icon--facebook {
			transform: translateY(55px) rotate(0);
		}
		~ .share__icon--twitter {
			transform: translateY(110px) rotate(0);
		}
		~ .share__icon--pinterest {
			transform: translateY(165px) rotate(0);
		}
		~ .share__icon--youtube {
			transform: translateY(220px) rotate(0);
		}
	}
	&__button {
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
    height: 50px;
    background-position: 50%;
		color: white;
		background-color:rgb(20, 45, 51);
		border-radius: 50px;
		box-shadow: 0px 0px 0px 1px rgb(20, 45, 51);
		cursor: pointer;
		transition: .3s ease;
	}
	&__icon {
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 50px;
		transform: translateX(0) rotate(180deg);
		cursor: pointer;
		transition: .3s ease-in-out;
    &--facebook {
			background-color: #3b5998;
		}
		&--twitter {
			background-color: #1da1f2;
		}
		&--pinterest {
			background-color: #bd081c;
		}
		&--youtube {
			background-color: #bd081c;
		}
	}
}
`;

const ModalStyle = styled.div`
.ModalShaer{
  display: grid;
  }
  .ModalShaerClose{
    margin: 25px 10px 0px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 25px;
    position: absolute;
    top: -65px;
    right: -55px;
    background: none;
  }
  
  .ModalShaerText{
    margin: 15px 15px 15px 74px;
  }
  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
  }
  
  .Demo__some-network__share-button {
    display: inline-flex;
    justify-content: center;
    white-space: nowrap;
    overflow: visible;
    cursor: pointer;
    padding-bottom: 15px;
  }
  
  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }
  .Demo__some-network__image_copylink
  {
    width: 64px;
  }
`;

const StyledLastCalendar = styled.div` {
  color: red;
    .popupTitle {
      margin-top: 130px;
    }
  }
`;

const StyledBottomCalendar = styled.div` {
  .popupTitle {
    margin-top: 80px;
  }

  .popupDiscount {
    margin: 30px auto 0px auto;
  }

  .shopButton {
    margin-top: 0px !important;
  }
}
`;

const streamUrl = AudioCalendar;

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
          ? <img src={MusicOff} alt="Music Off"/>         
          : <div className="music-off"><img className="music-off" src={MusicOn} alt="Music On"/></div>
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
 
class adventCalendar extends React.PureComponent {
constructor(props) {
        super(props);
          this.state = {
              play: true,
              autoplay: false,
              device: "",
              isModalOpen: false,
              isInnerModalOpen: false,
            }
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

      renderTextWithLink = (textBefore, linkText, linkHref, textAfter) => {
        return(
          <>
            <Text>{textBefore}</Text>
            <a href={linkHref}>{linkText}</a>
            <Text>{textAfter}</Text>
          </>
        )
      }

  render() {
    const shareUrl = 'http://avs4you.com/advent-calendar.aspx';
    const title = 'AVS4YOU';

    return (
      <Layout
        headerIsDisabled={true}
        footerIsDisabled={true}
        className="advent-calendar"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title={this.props.t(
          "AVS4YOU best software for processing video, audio, image"
        )}
        metaDescription=""
        metaKeywords=""
      >
        <div className="advent_main_part">
          <div id="particles-js"></div>
          <div className="social_block">
            <div className="social_block_opacity"></div>
            <div className="social_box"></div>
          </div>
          <div className="advent_header_top">
            <div className="aht_narrow">
              <div className="afh_logo">
                <Link id="home_advent-calendar" className="afh_logo_link" to="/"></Link>
              </div>
              <div className="afh_share_block">
            <div className="share">
            <MenuWrstyle>
                <label for="toggle" className="share__button" onClick={() => this.openModal()} aria-hidden="true">
                <input type="checkbox" id="toggle" className="share__toggle" hidden />
                    <img src={shareSVGAVS} alt=""/>
                </label>
                </MenuWrstyle>
                <Modal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                  >
                    <ModalStyle>
                    <button
                    className="ModalShaerClose"
                      onClick={this.closeModal}
                    >
                      <img className=".Demo__some-network__image_copylink" 
                        src={CancelModal}
                        alt="Cancel"
                        style={{
                          width: "32px"
                        }}/>
                    </button>
                    
                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      style={{
                        paddingBottom: "15px",
                        backgroundImage:`url(${iconFacebook})`,
                        backgroundRepeat: "no-repeat"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      
                      <Text className="ModalShaerText">Share</Text>
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      style={{
                        paddingBottom: "15px",
                        backgroundImage:`url(${iconTwitter})`,
                        backgroundRepeat: "no-repeat"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <Text className="ModalShaerText">Tweet</Text>
                    </TwitterShareButton>


                    <button 
                        onClick={() => navigator.clipboard.writeText("http://avs4you.com/advent-calendar.aspx")}
                        style={{
                          paddingBottom: "15px",
                          border: "none",
                          backgroundColor: "#ffffff",
                          paddingLeft: "0",
                        }}
                        className="Demo__some-network__share-button"
                      >
                        <img className=".Demo__some-network__image_copylink" 
                        size={56} 
                        round 
                        src={CopyLink}
                        alt=""
                        style={{
                          width: "56px"
                        }}/>
                        <Text className="ModalShaerText" style={{margin:"15px"}}>Copy the link</Text>
                      </button>
                    </ModalStyle>
                  </Modal>          
                  </div>
              </div>
            
              <CustomPlayer
                  streamUrl={AudioCalendar}
                  playing={true}
                  preloadType="auto" 
                  className="afh_music"
                  />  
            </div>
          </div>
          <div className="advent_heading">
            <h1>
              The exciting 25 days of <br /> Magic Christmas Countdown with
              AVS4YOU!
            </h1>
            <div className="advent_header_sub">
              Don’t miss out amazing gifts and generous discounts up to{" "}
              <b>99% Off!</b>
            </div>
          </div>


          <div className="adventCalendarContainer">
            <CalendarItem
              imageCoordinate={-1}
              date={new Date(2024, 11, 1)}
              validDate="The offer is valid till December 2, 2024"
              popupDiscount={<><b>Wishing You</b> <br /> a <b style={{color: "#E73A37"}}>HAPPY FIRST SUNDAY</b> <b>of Advent!</b></>}
              popupDiscountEnter={<><br />Share our calendar in social networks & <br /> get <b>a free license key</b> for AVS Video ReMaker <br /> 1 Year Subscription<br /><br /></>}
              linkTwitter={shareUrl}
              linkFacebook={shareUrl}
              linkTwitterId="first-twitter_advent-calendar"
              linkFacebookId="first-facebook_advent-calendar"
              textBefore={<><br />* Send us the link to your post in social networks at</>}
              linkText="sales@avs4you.com"
              linkId="first-sales_advent-calendar"
              linkHref="mailto:sales@avs4you.com"
              textAfter="to get your free license key"
            />
            <CalendarItem
              imageCoordinate={-189}
              date={new Date(2024, 11, 2)}
              validDate="The offer is valid till December 3, 2024"
              popupTitle="ONLYOFFICE Offer"
              popupDiscount={<><b style={{color: "#E73A37"}}>SECURELY COLLABORATE</b> <br /> on docs online <br /> in <b>ONLYOFFICE DocSpace</b></>}
              hrefButton="https://www.onlyoffice.com/docspace.aspx"
              textButton="Create your free account"
              idButton="second-text_advent-calendar"
            />
            <CalendarItem imageCoordinate={-376} date={new Date(2024, 11, 3)}
              validDate="The offer is valid till December 4, 2024"
              popupDiscount={<><b style={{color: "#E73A37", fontSize:"32px"}}>$20</b> <b style={{color: "#E73A37"}}>OFF</b> on AVS4YOU <br /> <b>Unlimited Subscription</b></>}
              popupCoupon="Creativity20"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Creativity20&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="third-text_advent-calendar"
              />
            <CalendarItem imageCoordinate={-563} date={new Date(2024, 11, 4)}
              validDate="The offer is valid thru December 5, 2024" 
              popupDiscount={<>Enjoy a <b style={{color: "#E73A37", fontSize:"32px"}}>$15</b> <b style={{color: "#E73A37"}}>OFF</b> on <b>AVS4YOU <br /> 1 Year Subscription!</b></>}
              popupCoupon="Snow15Flake"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Snow15Flake&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="fourth-text_advent-calendar"
              />
            <CalendarItem imageCoordinate={-750} date={new Date(2024, 11, 5)}
              validDate="The offer is valid till December 6, 2024"
              popupDiscount={<>Partner offer <b style={{color: "#E73A37"}}>GET A GIVEAWAY</b> <br /> from <b style={{fontSize:"32px", lineHeight:"42px"}}>WiseCleaner!</b></>}
              popupDiscountEnter={<><br /> All-in-One Windows PC Cleaning and Speed up Tool <br /> </>}
              hrefButton="https://downloads.wisecleaner.com/giveaways/WRCSetup_avs4you.exe"
              textButton="Free Download"
              idButton="fifth-text_advent-calendar"
              />
            <CalendarItem
              imageCoordinate={-938}
              date={new Date(2024, 11, 6)}
              validDate="The offer is valid till December 7, 2024"
              popupDiscount={<><b style={{color: "#E73A37", fontSize:"32px"}}>40%</b> <b style={{color: "#E73A37"}}>OFF</b> on AVS4YOU <br /> <b>Unlimited Subscription</b>, <br /> our bestseller!</>}
              popupCoupon="2SnowFr3ost"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=2SnowFr3ost&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="sixth-text_advent-calendar"
            />
           <CalendarItem
              imageCoordinate={-1125}
              date={new Date(2024, 11, 7)}
              validDate="The offer is valid till December 8, 2024"
              popupDiscount={<><b style={{color: "#E73A37"}}>SAVE</b> <b style={{color: "#E73A37", fontSize:"32px"}}>30%</b> on AVS4YOU <br /> <b>1 Year Subscription!</b></>}
              popupCoupon="30Winter"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=30Winter&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="seventh-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1313}
              date={new Date(2024, 11, 8)}
              validDate="The offer is valid till December 9, 2024"
              popupDiscount={<>Happy <b style={{color: "#E73A37"}}>2nd</b> <b>ADVENT SUNDAY!</b></>}
              popupDiscountTwo={<><br /> Claim a <b>$10 gift card</b> for reviewing <br /> AVS Audio Editor on Capterra</>}
              hrefButton="https://reviews.capterra.com/products/new/e63ce552-bbf6-4f9b-b96a-f6dce2d8ce61/9749a18b-6915-4b50-8f14-da6deb2b7432?lang=en"
              textButton="Get my gift"
              idButton="eighth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1500}
              date={new Date(2024, 11, 9)}
              validDate="The offer is valid till December 10, 2024"
              popupDiscount={<>Redeem a <b style={{color: "#E73A37", fontSize:"32px"}}>40%</b> <b>coupon code</b> <br /> on AVS4YOU <b style={{color: "#E73A37"}}>1 Year Subscription!</b></>}
              popupCoupon="Snow40biTe"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Snow40biTe&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="nineth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1687}
              date={new Date(2024, 11, 10)}
              validDate="The offer is valid thru December 11, 2024"
              popupDiscount={<>Write a <b style={{color: "#E73A37"}}>LETTER to SANTA</b> <br /> and make a <b>wish list</b></>}
              popupDiscountTwo={<><br /> <img src={LetterImg} /><br /> Download a nice letter template</>}
              hrefButtonSaveLetter={PostcardLinkLetter}
              textButton="Download"
              idButton="tenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1875}
              date={new Date(2024, 11, 11)}
              validDate="The offer is valid till December 12, 2024"
              popupDiscount={<>Get <b>ONLYOFFICE Desktop <br /> Editors</b> <b style={{color: "#E73A37"}}>for FREE!</b></>}
              popupDiscountTwo={<><br />Work with all types of documents on any platform <br /> you like. Edit PDF files, create fillable forms and more.</>}
              hrefButton="https://www.onlyoffice.com/download-desktop.aspx"
              textButton="Download now"
              idButton="eleventh-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2062}
              date={new Date(2024, 11, 12)}
              validDate="The offer is valid till December 13, 2024"
              popupDiscount={<>Looking for an <b style={{color: "#E73A37"}}>ORIGINAL GIFT</b> <br /> for <b>someone special?</b></>}
              popupDiscountTwo={<><br />Buy AVS4YOU Unlimited Subscription <br /> with <b style={{color: "#E73A37"}}>a 50% discount!</b></>}
              popupCoupon="Gift50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4579203&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Gift50&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twelveth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2250}
              date={new Date(2024, 11, 13)}
              validDate="The offer is valid till December 14, 2024"
              popupDiscount={<><b style={{color: "#E73A37", fontSize:"32px"}}>35%</b> <b style={{color: "#E73A37"}}>OFF</b> on AVS4YOU <br /><b>1 Year Subscription</b></>}
              popupCoupon="AI40cicle"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=AI40cicle&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="thirteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2437}
              date={new Date(2024, 11, 14)}
              validDate="The offer is valid till December 15, 2024"
              popupDiscount={<>A special deal from <br /> our partner HookSounds <br /> <b style={{color: "#E73A37", fontSize:"32px", lineHeight:"42px"}}>15%</b> <b style={{color: "#E73A37"}}>OFF</b> <b>on</b> <b style={{color: "#ca2a28"}}>HOOKSOUNDS</b> <br /> <b>Premium and Business Licenses</b></>}
              popupDiscountTwo={<><br />Enhance your videos with HookSounds’ original music and sound effects. Make your videos truly unique with music crafted to stand out!</>}
              popupCoupon="AVS4YOU15"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://www.hooksounds.com/subscriptions"
              textButton="Shop now"
              idButton="fourteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2625}
              date={new Date(2024, 11, 15)}
              validDate="The offer is valid till December 16, 2024"
              popupDiscount={<>Happy <b style={{color: "#E73A37"}}>3rd SUNDAY</b> <br /> of <b>Advent!</b></>}
              popupDiscountTwo={<><br /><b>Get AVS Video ReMaker</b> <br /> <b style={{color: "#E73A37"}}>1 Year Subscription for free</b></>}
              popupCoupon="ABall17S"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=26192289&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=ABall17S&CLEAN_CART=ALL"
              textButton="Get It Now"
              idButton="fifteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2812}
              date={new Date(2024, 11, 16)}
              validDate="The offer is valid till December 17, 2024"
              popupDiscount={<>Enjoy a <b style={{color: "#E73A37", fontSize:"32px"}}>45%</b> <b style={{color: "#E73A37"}}>DISCOUNT</b> <br /> on AVS4YOU <b>1 Year Subscription!</b></>}
              popupCoupon="AVS45Sub"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=AVS45Sub&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="sixteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2999}
              date={new Date(2024, 11, 17)}
              validDate="The offer is valid thru December 18, 2024"
              popupDiscount={<>Ready to make <br /> <b style={{color: "#E73A37"}}>CHRISTMAS CARDS?</b></>}
              popupDiscountTwo={<><br /> <img src={CardImg} /><br /><br />Send a Christmas greeting card <br /> to your dearest and nearest</>}
              hrefButtonSave={PostcardLink}
              textButton="Get It Now"
              idButton="seventeenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-3187}
              date={new Date(2024, 11, 18)}
              validDate="The offer is valid till December 19, 2024"
              popupDiscount={<><b style={{color: "#E73A37"}}>SAVE</b> <b style={{color: "#E73A37", fontSize:"32px"}}>45%</b> on AVS4YOU <br /> <b>Unlimited Subscription</b></>}
              popupCoupon="Light45"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Light45&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="eighteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-3374}
              date={new Date(2024, 11, 19)}
              validDate="The offer is valid till December 20, 2024"
              popupDiscount={<><b>Time to</b> <b style={{color: "#E73A37"}}>decorate</b> <b>your computer!</b></>}
              popupDiscountEnter={<><br />Get AVS4YOU festive wallpaper for your PC</>}
              hrefButtonSave={PostcardLink}
              textButton="Download Now"
              idButton="nineteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-3562}
              date={new Date(2024, 11, 20)}
              validDate="The offer is valid till December 21, 2024"
              popupDiscount={<>Redeem <b style={{color: "#E73A37", fontSize:"32px"}}>35%</b> <b style={{color: "#E73A37"}}>OFF</b> <b>COUPON</b> <br /> on AVS4YOU <b>Unlimited Subscription</b></>}
              popupCoupon="Candle35"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=Candle35&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twentyth-text_advent-calendar"
            />
              <CalendarItem
              imageCoordinate={-3749}
              date={new Date(2024, 11, 21)}
              validDate="The offer is valid till December 22, 2024"
              popupDiscount={<><b>Want a</b> <b style={{color: "#E73A37"}}>beautiful</b> <b>CHRISTMAS PRESENTATION?</b></>}
              popupDiscountEnter={<><br />Get a ready <b>Christmas template</b> <br /> to craft your own one</>}
              hrefButtonSave={PostcardLink}
              textButton="Download Now"
              idButton="twenty-first-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-3936}
              date={new Date(2024, 11, 22)}
              validDate="The offer is valid till December 23, 2024"
              popupDiscount={<>What a <b style={{color: "#E73A37"}}>LUCKY DAY</b> <br /> <b>for everyone!</b></>}
              popupDiscountTwo={<><br />50% Off on AVS4YOU Unlimited Subscription</>}
              popupCoupon="A8LuckyYou"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=A8LuckyYou&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twenty-second-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-4124}
              date={new Date(2024, 11, 23)}
              validDate="The offer is valid till December 24, 2024"
              popupDiscount={<>Enjoy our <b style={{color: "#E73A37"}}>Christmas Calendar</b> <br /> crafted <b>specially for you!</b></>}
              hrefButtonSave={PostcardLink}
              textButton="Download Now"
              idButton="twenty-third-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-4311}
              date={new Date(2024, 11, 24)}
              validDate="The offer is valid till December 25, 2024"
              popupDiscount={<><b style={{color: "#E73A37"}}>EXCLUSIVE</b> <b>Deal!</b></>}
              popupDiscountTwo={<><br />Only today 55% Off on AVS4YOU <br /> Unlimited Subscription</>}
              popupCoupon="25Christmas"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&LANGUAGES=en&COUPON=25Christmas&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twenty-fourth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-4499}
              date={new Date(2024, 11, 25)}
              validDate="25"
              popupDiscount={<><b style={{color: "#E73A37"}}>MERRY CHRISTMAS</b> <br /> and <b>happy holiday season!</b></>}
              popupDiscountEnter={<><br />AVS4YOU wishes you positive beginnings <br /> and new video projects in 2025. We look forward <br /> to another great year with you!</>}
            />
          </div>

          <div className="advent_footer_block">
            <div className="afb_logo">
              <div className="afb_logo_link"></div>
            </div>
            <div className="afb_copyright">
            Ascensio System SIA 2024 All rights reserved.
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}
export default withI18next({ ns: "common" })(adventCalendar);
