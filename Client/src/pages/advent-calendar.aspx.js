import React, { useState, useEffect, useRef } from "react";
import withI18next from "../components/withI18next";
import Text from "../components/text";
import Layout from "../components/layout";
import Link from "../components/link";
import "../styles/advent-calendar.less";
import styled from "styled-components";
import CalendarItem from "../components/calendar-item";
import Modal from "../components/modal";
import CopyLink from "../images/advent-calendar/link_copy.svg";
import CardImg from "../images/advent-calendar/avs_card.png";
import LetterImg from "../images/advent-calendar/letter_img.png";
import PresentaionImg from "../images/advent-calendar/presentations.png";
import CalendarImg from "../images/advent-calendar/img_calendar.png";
import PdfCalendar from "../images/advent-calendar/avs_calendar_2025.pdf";

import CalendarVideo_1 from "../images/advent-calendar/calendar-1.mp4";
import CalendarVideo_2 from "../images/advent-calendar/calendar-2.mp4";
import CalendarVideo_3 from "../images/advent-calendar/calendar-3.mp4";
import CalendarVideo_4 from "../images/advent-calendar/calendar-4.mp4";
import CalendarVideo_5 from "../images/advent-calendar/calendar-5.mp4";
import CalendarVideo_6 from "../images/advent-calendar/calendar-6.mp4";
import CalendarVideo_7 from "../images/advent-calendar/calendar-7.mp4";
import CalendarVideo_8 from "../images/advent-calendar/calendar-8.mp4";
import CalendarVideo_9 from "../images/advent-calendar/calendar-9.mp4";
import CalendarVideo_10 from "../images/advent-calendar/calendar-10.mp4";
import CalendarVideo_11 from "../images/advent-calendar/calendar-11.mp4";
import CalendarVideo_12 from "../images/advent-calendar/calendar-12.mp4";
import CalendarVideo_13 from "../images/advent-calendar/calendar-13.mp4";
import CalendarVideo_14 from "../images/advent-calendar/calendar-14.mp4";
import CalendarVideo_15 from "../images/advent-calendar/calendar-15.mp4";
import CalendarVideo_16 from "../images/advent-calendar/calendar-16.mp4";
import CalendarVideo_17 from "../images/advent-calendar/calendar-17.mp4";
import CalendarVideo_18 from "../images/advent-calendar/calendar-18.mp4";
import CalendarVideo_19 from "../images/advent-calendar/calendar-19.mp4";
import CalendarVideo_20 from "../images/advent-calendar/calendar-20.mp4";
import CalendarVideo_21 from "../images/advent-calendar/calendar-21.mp4";
import CalendarVideo_22 from "../images/advent-calendar/calendar-22.mp4";
import CalendarVideo_23 from "../images/advent-calendar/calendar-23.mp4";
import CalendarVideo_24 from "../images/advent-calendar/calendar-24.mp4";

import { TwitterShareButton, FacebookShareButton } from "react-share";

import MusicOn from "../images/advent-calendar/music.svg";
import MusicOff from "../images/advent-calendar/music.svg";
import AudioCalendar from "../images/advent-calendar/christmas.wav";
import shareSVGAVS from "../images/advent-calendar/share.svg";
import iconTwitter from "../images/advent-calendar/x.svg";
import iconFacebook from "../images/advent-calendar/facebook.svg";

import { withSoundCloudAudio } from "react-soundplayer/addons";

const PostcardLink = "/avs_card_2025.zip";
const PostcardLinkLetter = "/avs_letter_2026.zip";
const PostcardLinkWallpaper = "/avs_wallpaper_2025.zip";
const PresentationTemplate = "/christmas_template.pptx";

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
      background-color: #0D271B;
      border-radius: 50px;
      box-shadow: 0px 0px 0px 1px #0D271B;
      cursor: pointer;
      transition: 0.3s ease;
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
      transition: 0.3s ease-in-out;
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
  .ModalShaer {
    display: grid;
  }
  .ModalShaerClose {
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
    padding: 0;
  }

  .Demo__some-network__share-button:hover {
    background-color: #ffffff !important;
  }

  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
    background-color: #fff;
  }
  .Demo__some-network__image_copylink {
    width: 64px;
  }
`;

const StyledLastCalendar = styled.div`
  color: red;
  .popupTitle {
    margin-top: 130px;
  }
`;

const StyledBottomCalendar = styled.div`
  .popupTitle {
    margin-top: 80px;
  }

  .popupDiscount {
    margin: 30px auto 0px auto;
  }

  .shopButton {
    margin-top: 0px !important;
  }
`;

const streamUrl = AudioCalendar;

const CustomPlayer = withSoundCloudAudio((props) => {
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
    if (autoPlay) {
      soundCloudAudio.play({ streamUrl });
      setAutoPlay(false);
    }
    if (prevUrl !== streamUrl) {
      setAutoPlay(true);
    }
    //},[streamUrl])
  }, [setAutoPlay, prevUrl, autoPlay, soundCloudAudio]);
  return (
    <div>
      <div
        className="afh_music_block"
        onClick={() => play()}
        aria-hidden="true"
      >
        <button className="afh_music">
          {playing ? (
            <img src={MusicOff} alt="Music Off" />
          ) : (
            <div className="music-off">
              <img className="music-off" src={MusicOn} alt="Music On" />
            </div>
          )}
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
    };
    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  getDevice(device) {
    this.setState({ device: device });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  renderTextWithLink = (textBefore, linkText, linkHref, textAfter) => {
    return (
      <>
        <Text>{textBefore}</Text>
        <a href={linkHref}>{linkText}</a>
        <Text>{textAfter}</Text>
      </>
    );
  };

  render() {
    const shareUrl = "http://avs4you.com/advent-calendar.aspx";
    const title = "AVS4YOU";

    return (
      <Layout
        headerIsDisabled={false}
        footerIsDisabled={true}
        plNewsIsDisabled={true}
        customBackgroundColor={"#0D271B"}
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
            <div className="share" style={{position: "relative"}}>
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
                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      style={{
                        padding: "12px 0",
                        backgroundImage:`url(${iconTwitter})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "40px",
                        backgroundPosition: "24px 12px",
                        width: "183px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <Text className="ModalShaerText" style={{margin: "9px 36px 9px 48px", fontSize:"14px"}}>X.com</Text>
                    </TwitterShareButton>

                    <FacebookShareButton
                      url={shareUrl}
                      quote={title}
                      style={{
                        padding: "12px 0",
                        backgroundImage:`url(${iconFacebook})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "40px",
                        backgroundPosition: "24px 12px",
                        width: "183px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      
                      <Text className="ModalShaerText" style={{margin: "9px 15px 9px 48px", fontSize:"14px"}}>Facebook</Text>
                    </FacebookShareButton>

                    <button 
                        onClick={() => navigator.clipboard.writeText("http://avs4you.com/advent-calendar.aspx")}
                        style={{
                          padding: "12px 0",
                          border: "none",
                          backgroundColor: "#E5EBEC",
                          paddingLeft: "0",
                          backgroundPosition: "24px 12px",
                          width: "183px",
                        }}
                        className="Demo__some-network__share-button"
                      >
                        <img className=".Demo__some-network__image_copylink" 
                        size={40} 
                        round 
                        src={CopyLink}
                        alt=""
                        style={{
                          width: "40px"
                        }}/>
                        <Text className="ModalShaerText" style={{margin:"9px 0 9px 12px", fontSize:"14px"}}>Copy the link</Text>
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
              Join the 24 Days of <br /> Magic Christmas Countdown with AVS4YOU!
            </h1>
            <div className="advent_header_sub">
              Unwrap daily surprises, gifts, and exclusive discounts up to{" "}
              <b>100% Off!</b>
            </div>
          </div>

          <div className="adventCalendarContainer">
            <CalendarItem
              video={CalendarVideo_1}
              date={new Date(2025, 11, 1)}
              validDate="The offer is valid till December 2, 2025"
              popupDiscount={
                <>
                  <b>Wishing You</b> <br />{" "}
                  <b style={{ color: "#E73A37" }}>a HAPPY FIRST SUNDAY</b>{" "}
                  <b>of Advent!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  Share our calendar in social networks & <br /> get{" "}
                  <b>a free license key</b> for AVS Video ReMaker <br /> 1 Year
                  Subscription
                  <br />
                  <br />
                </>
              }
              linkTwitter={shareUrl}
              linkFacebook={shareUrl}
              linkTwitterId="first-twitter_advent-calendar"
              linkFacebookId="first-facebook_advent-calendar"
              textBefore={
                <>
                  <br />*Send us the link to your post in social networks at
                </>
              }
              linkText="sales@avs4you.com"
              linkId="first-sales_advent-calendar"
              linkHref="mailto:sales@avs4you.com"
              textAfter="to get your free license key"
              dateColor="#73911C"
            />
            <CalendarItem
              video={CalendarVideo_2}
              date={new Date(2025, 11, 2)}
              validDate="The offer is valid till December 3, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "28px"}}>ONLYOFFICE Offer</b>
                  <br />
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Securely collaborate</b>{" "}
                  <br /> on docs online <br /> in <b>ONLYOFFICE DocSpace</b>
                </>
              }
              hrefButton="https://www.onlyoffice.com/docspace.aspx"
              textButton="Create your free account"
              idButton="second-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_3}
              date={new Date(2025, 11, 3)}
              validDate="The offer is valid till December 4, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>Our Top Pick </b>{" "}
                  <b style={{ color: "#E73A37", fontSize: "24px" }}> for Creators</b>{" "}
                  <br />
                  <br />
                </>
              }
              popupDiscountEnter={
                <>
                  <b style={{ fontSize: "20px" }}>$20 Off</b>{" "}
                  <b style={{ fontSize: "20px" }}></b> <span style={{ fontSize: "20px" }}>on AVS4YOU</span> <br />{" "}
                  <span style={{ fontSize: "20px" }}>Unlimited Subscription</span>
                </>
              }
              popupCoupon="Creativity20"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Creativity20&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="third-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_4}
              date={new Date(2025, 11, 4)}
              validDate="The offer is valid thru December 5, 2024"
              popupDiscount={
                <>
                  <b style={{ color: "#E73A37", fontSize: "24px" }}>A $15 Treat</b>{" "}
                  <b style={{ fontSize: "24px" }}>for Your Creativity!</b>{" "}
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Enjoy a</span><b style={{ fontSize: "20px" }}> $15 Off</b>{" "}
                  <b style={{ fontSize: "20px" }}></b> <span style={{ fontSize: "20px" }}>AVS4YOU</span> <br />{" "}
                  <span style={{ fontSize: "20px" }}>1 Year Subscription!</span>
                </>
              }
              popupCoupon="Snow15Flake"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&CURRENCY=USD&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Snow15Flake&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="fourth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_5}
              date={new Date(2025, 11, 5)}
              validDate="25"
              popupDiscount={
              <>
                <b>Time to Make</b>{" "}
                <br /> 
                <b style={{ color: "#E73A37"}}>Your Christmas Wishlist!</b>
              </>
              }
              popupDiscountTwo={
                <>
                  <br /> <img src={LetterImg} />
                  <br />
                  Share your holiday dreams with Santa
                  <br />
                  using our festive letter template.
                </>
              }
              hrefButtonSaveLetter={PostcardLinkLetter}
              textButton="Download Your Template"
              idButton="fifth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_6}
              date={new Date(2025, 11, 6)}
              validDate="The offer is valid till December 7, 2025"
              popupDiscount={
                <>
                  <b style={{ color: "#E73A37", fontSize: "28px" }}>Bestseller</b>{" "}
                  <b style={{ fontSize: "28px"}}>Deal</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <b style={{ fontSize: "20px" }}>40% Off</b>{" "}
                  <span style={{ fontSize: "20px" }}>on AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>Unlimited Subscription!</span>
                </>
              }
              popupCoupon="SnowFrost40"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=SnowFrost40&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="sixth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_7}
              date={new Date(2025, 11, 7)}
              validDate="The offer is valid till December 8, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" ,color: "#E73A37" }}>Happy</b>{" "}
                  <b style={{ fontSize: "24px" }}>2nd</b>{" "}
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Advent Sunday!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <b style={{ fontSize: "20px" }}>Save 40%</b><span style={{ fontSize: "20px" }}> on AVS4YOU</span>{" "}
                  <br />
                  <span style={{ fontSize: "20px" }}>1 Year Subscription!</span>
                </>
              }
              popupCoupon="40Winter"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=40Winter&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="seventh-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_8}
              date={new Date(2025, 11, 8)}
              validDate="The offer is valid till December 9, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "28px", color: "#E73A37" }}>Your Exclusive</b>
                  <br />
                  <b style={{ fontSize: "28px" }}> Holiday Treat!</b>
                </>
              }
              popupDiscountTwo={
                <>
                  <br /> 
                  <span style={{ fontSize: "20px" }}>Review AVS Video Editor</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>on Capterra and claim</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>a </span><b style={{ fontSize: "20px" }}> $10 gift card</b>
                </>
              }
              hrefButton="https://reviews.capterra.com/products/new/948b5c73-ec8c-452c-bb84-aa99002e28c7/b98ffe20-0713-4874-9ae0-23d5688c70a8?lang=en"
              textButton="Get my gift"
              idButton="eighth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_9}
              date={new Date(2025, 11, 9)}
              validDate="The offer is valid till December 10, 2025"
              popupDiscount={
                <>
                  <b style={{ color: "#E73A37", fontSize: "28px" }}>Today’s</b>{" "}
                  <b style={{ fontSize: "28px"}}>Bonus</b>
                  
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px"}}>Enjoy</span>
                  <b style={{ fontSize: "20px"}}> 30% Off</b>
                  <span style={{ fontSize: "20px"}}> AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px"}}>Suite for a Whole Year!</span>
                </>
              }
              popupCoupon="Snow30"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Snow30&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="nineth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_10}
              date={new Date(2025, 11, 10)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>Ready to Create</b> 
                  <br />
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Christmas Cards?</b>
                </>
              }
              popupDiscountTwo={
                <>
                  <br /> <img src={CardImg} />
                  <br />
                  <br />
                  <span>Send heartfelt holiday greetings</span> 
                  <br /> 
                  <span>to your loved ones</span>
                </>
              }
              hrefButtonSave={PostcardLink}
              textButton="Get It Now"
              idButton="tenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_11}
              date={new Date(2025, 11, 11)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Your All-in-One Free Office Suite</b>
                  <br />
                  <b style={{ fontSize: "24px" }}>for Any Platform</b>
                </>
              }
              popupDiscountTwo={
                <>
                  <br />
                  Download <b>ONLYOFFICE</b> 
                  <br />
                  <b>Desktop Editors</b> to create and edit
                  <br />
                  docs, sheets, slides, PDF files,
                  <br />
                  create fillable forms, and more
                </>
              }
              hrefButton="https://www.onlyoffice.com/download-desktop"
              textButton="Download now"
              idButton="eleventh-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_12}
              date={new Date(2025, 11, 12)}
              validDate="The offer is valid till December 13, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Need the Perfect Gift</b>
                  <br />
                  <b style={{ fontSize: "24px" }}> for Someone Special?</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Grab AVS4YOU Unlimited</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>Subscription now with</span>{" "}
                  <b style={{ fontSize: "20px" }}>50% off!</b>
                </>
              }
              popupCoupon="Gift50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4579203&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Gift50&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twelveth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_13}
              date={new Date(2025, 11, 13)}
              validDate="The offer is valid till December 14, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>Creators’ Favorite —</b>{" "}
                  <b style={{ color: "#E73A37", fontSize: "24px" }}>35% Off!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <b style={{ fontSize: "20px" }}>35% Off</b>{" "}
                  <span style={{ fontSize: "20px" }}>on AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>1 Year Subscription</span>
                </>
              }
              popupCoupon="AI35cicle"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=AI35cicle&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="thirteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_14}
              date={new Date(2025, 11, 14)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Happy </b>{" "}
                  <b style={{ fontSize: "24px" }}>3rd</b>{" "}
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Sunday of Advent!</b>
                </>
              }
               popupDiscountTwo={
                <>
                  <br /> <img src={CardImg} />
                  <br />
                  <br />
                  Bring the holiday spirit to your phone
                  <br />
                  with these charming wallpapers. 
                  <br />
                  Switch them every week for a new festive look
                </>
              }
              hrefButtonSaveWall={PostcardLinkWallpaper}
              textButton="Download Now"
              idButton="fourteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_15}
              date={new Date(2025, 11, 15)}
              validDate="The offer is valid till December 16, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "28px", color: "#E73A37" }}>Festive</b>{" "}
                  <b style={{ fontSize: "28px" }}>Giveaway</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Get AVS Video ReMaker</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>1 Year Subscription</span>{" "}
                  <b style={{ fontSize: "20px" }}>for free</b>
                </>
              }
              popupCoupon="ABall17S"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=26192289&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=ABall17S&CLEAN_CART=ALL"
              textButton="Get It Now"
              idButton="fifteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_16}
              date={new Date(2025, 11, 16)}
              validDate="The offer is valid till December 17, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}> Unlock a Year of Creativity</b>
                  <br />
                  <b style={{fontSize: "24px", color: "#E73A37" }}>at 45% Off!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Enjoy a</span>{" "}
                  <b style={{ fontSize: "20px" }}>45% discount</b>{" "}
                  <span style={{ fontSize: "20px" }}>on AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>1 Year Subscription!</span>
                </>
              }
              popupCoupon="AVS45Sub"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=AVS45Sub&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="sixteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_17}
              date={new Date(2025, 11, 17)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px", color: "#E73A37"}}>Brighten</b>{" "}
                  <b style={{ fontSize: "24px" }}>Your Screen!</b>
                </>
              }
              popupDiscountTwo={
                <>
                  <br /> <img src={CardImg} />
                  <br />
                  <br />
                  Give your computer a holiday makeover
                  <br />
                  with AVS4YOU festive wallpapers
                </>
              }
              hrefButtonSave={PostcardLink}
              textButton="Download Now"
              idButton="seventeenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_18}
              date={new Date(2025, 11, 18)}
              validDate="The offer is valid till December 19, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>A Must-Have</b>{" "}
                  <b style={{ fontSize: "24px", color: "#E73A37",  }}>for Creators!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <b style={{ fontSize: "20px" }}>Save 45%</b>{" "}
                  <span style={{ fontSize: "20px" }}>on AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>Unlimited Subscription</span>
                </>
              }
              popupCoupon="Light45"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Light45&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="eighteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_19}
              date={new Date(2025, 11, 19)}
              validDate="25"
              popupDiscount={
                <>
                  <b>AVS4YOU</b>{" "} 
                  <b style={{ color: "#E73A37" }}>2026 Calendar</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br /> <img src={CardImg} />
                  <br />
                  <span>Stay organized and inspired in 2026</span>
                  <br />
                  <span>with AVS4YOU’s free, stylish calendar</span>
                </>
              }
              hrefButtonSaveWall={PostcardLinkWallpaper}
              textButton="Download Now"
              idButton="nineteenth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_20}
              date={new Date(2025, 11, 20)}
              validDate="The offer is valid till December 21, 2025"
              popupDiscount={
                <>
                  <b style={{ color: "#E73A37", fontSize: "24px" }}>Love</b>{" "}
                  <b style={{ fontSize: "24px" }}>AVS Video Editor?</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Grab your</span>{" "}
                  <b style={{ fontSize: "20px" }}>50% Off coupon</b>
                  <br />
                  <span style={{ fontSize: "20px" }}>for AVS Video Editor!</span>
                </>
              }
              popupCoupon="Candle50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Candle50&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twentyth-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_21}
              date={new Date(2025, 11, 21)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>Create</b>{" "}
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>a Stunning</b>{" "}
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Christmas Presentation!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br /> <img src={PresentaionImg} alt="image" />
                  <br />
                  <span>Get a ready Christmas template</span>
                  <br />
                  <span>to craft your own one</span>
                </>
              }
              hrefButtonSavePresentation="https://templates.onlyoffice.com/christmas-presentation-template-2"
              textButton="Download Now"
              idButton="twenty-first-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_22}
              date={new Date(2025, 11, 22)}
              validDate="The offer is valid till December 23, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>What a</b>{" "} 
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>a Lucky Day for Everyone!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <b style={{ fontSize: "20px" }}>50% Off</b>{" "} 
                  <span style={{ fontSize: "20px" }}>AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>1-Year Subscription</span>
                </>
              }
              popupCoupon="A8LuckyYou"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=A8LuckyYou&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twenty-second-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_23}
              date={new Date(2025, 11, 23)}
              validDate="The offer is valid till December 24, 2025"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px" }}>Irresistible Savings!</b>
                </>
              }
              popupDiscountEnter={
                <>
                  <br />
                  <span style={{ fontSize: "20px" }}>Only today</span>{" "}
                  <b style={{ fontSize: "20px" }}>55% Off</b>{" "}
                  <span style={{ fontSize: "20px" }}>on AVS4YOU</span>
                  <br />
                  <span style={{ fontSize: "20px" }}>Unlimited Subscription</span>
                </>
              }
              popupCoupon="25Christmas"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=25Christmas&CLEAN_CART=ALL"
              textButton="Download Now"
              idButton="twenty-third-text_advent-calendar"
            />
            <CalendarItem
              video={CalendarVideo_24}
              date={new Date(2025, 11, 24)}
              validDate="25"
              popupDiscount={
                <>
                  <b style={{ fontSize: "24px", color: "#E73A37" }}>Merry Christmas</b> 
                  <br />
                  <b style={{ fontSize: "24px" }}>and Happy Holidays!</b>
                </>
              }
              popupDiscountTwo={
                <>
                  <br />
                  <span>AVS4YOU wishes you flawless edits, perfect cuts, crystal-clear audio in all your projects.</span>
                  <br />
                  <br />
                  <span>May your videos shine, your soundtracks sparkle, your creativity flow, and your editing be effortless throughout 2026!</span>
                </>
              }
            />
          </div>

          {/* <div className="advent_footer_block">
            <div className="afb_logo">
              <div className="afb_logo_link"></div>
            </div>
            <div className="afb_copyright">
            Ascensio System SIA 2024 All rights reserved.
            </div>
          </div> */}
        </div>
      </Layout>
    );
  }
}
export default withI18next({ ns: "common" })(adventCalendar);
