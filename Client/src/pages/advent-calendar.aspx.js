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
import PostcardLink from '../images/advent-calendar/avs_postcard.jpg';
import Postcard from '../images/advent-calendar/avs_2024.png';

import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

import MusicOn from "../images/advent-calendar/music.svg";
import MusicOff from "../images/advent-calendar/music.svg";
import AudioCalendar from "../images/advent-calendar/christmas.wav";
import shareSVGAVS from "../images/advent-calendar/share.svg";

import { withSoundCloudAudio } from 'react-soundplayer/addons';

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
    margin: 15px;
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
    margin-top: 0px;
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
                        paddingBottom: "15px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <FacebookIcon size={64} round />
                      <Text className="ModalShaerText">Share</Text>
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={shareUrl}
                      title={title}
                      style={{
                        paddingBottom: "15px"
                      }}
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={64} round />
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
                        size={64} 
                        round 
                        src={CopyLink}
                        alt=""
                        style={{
                          width: "64px"
                        }}/>
                        <Text className="ModalShaerText">Copy the link</Text>
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
              date={new Date(2023, 11, 1)}
              validDate="The offer is valid till December 2, 2023"
              popupTitle="Share our calendar in social networks &"
              popupDiscount="get a free license key for AVS Video ReMaker 1 Year Subscription"
              linkTwitter={shareUrl}
              linkFacebook={shareUrl}
              linkTwitterId="first-twitter_advent-calendar"
              linkFacebookId="first-facebook_advent-calendar"
              textBefore="*Send us the link to your post in social networks at"
              linkText="sales@avs4you.com"
              linkId="first-sales_advent-calendar"
              linkHref="mailto:sales@avs4you.com"
              textAfter="to get your free license key"
            />
            <CalendarItem
              imageCoordinate={-189}
              date={new Date(2023, 11, 2)}
              validDate="The offer is valid till December 3, 2023"
              popupTitle="Securely collaborate on docs online in ONLYOFFICE DocSpace."
              hrefButton="https://www.onlyoffice.com/docspace.aspx"
              textButton="Create your free account"
              idButton="second-text_advent-calendar"
            />
            <CalendarItem imageCoordinate={-376} date={new Date(2023, 11, 3)}
              validDate="The offer is valid till December 4, 2023"
              popupTitle="Wishing You a Happy First Sunday of Advent!"
              popupDiscount="$20 Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Creativity20"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Creativity20&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="third-text_advent-calendar"
              />
            <CalendarItem imageCoordinate={-563} date={new Date(2023, 11, 4)}
              validDate="The offer is valid thru December 5, 2023" 
              popupTitle="Enjoy a $15 Off on AVS4YOU 1 Year Subscription!"
              popupCoupon="Snow15Flake"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Snow15Flake&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="fourth-text_advent-calendar"
              />
            <CalendarItem imageCoordinate={-750} date={new Date(2023, 11, 5)}
              validDate="The offer is valid till December 6, 2023"
              popupTitle="25% Off on AVS Video Editor, our bestseller!"
              popupCoupon="2SnowFr3ost"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=2SnowFr3ost&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="fifth-text_advent-calendar"
              />
            <StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-938}
              date={new Date(2023, 11, 6)}
              validDate="The offer is valid till December 7, 2023"
              popupTitle="Get a giveaway from WiseCleaner!"
              popupDiscount="All-in-One Windows PC Cleaning and Speed up Tool"
              hrefButton="https://downloads.wisecleaner.com/giveaways/WiseCare365_6.6.2.632_avs4you.exe"
              textButton="Free Download"
              idButton="sixth-text_advent-calendar"
            />
          </StyledBottomCalendar>
           <CalendarItem
              imageCoordinate={-1125}
              date={new Date(2023, 11, 7)}
              validDate="The offer is valid till December 8, 2023"
              popupTitle="Save 50% on AVS Video ReMaker Unlimited Subscription!"
              popupCoupon="Remaker50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=26242281&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Remaker50&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="seventh-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1313}
              date={new Date(2023, 11, 8)}
              validDate="The offer is valid till December 9, 2023"
              popupTitle="20% Off on AVS4YOU 1 Year Subscription"
              popupCoupon="20Winter"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=20Winter&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="eighth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-1500}
              date={new Date(2023, 11, 9)}
              validDate="The offer is valid till December 10, 2023"
              popupTitle="Redeem a 30% coupon code on AVS Video Editor!"
              popupCoupon="AVSEditor30"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AVSEditor30&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="nineth-text_advent-calendar"
            />
            <StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-1687}
              date={new Date(2023, 11, 10)}
              validDate="The offer is valid thru December 11, 2023"
              popupTitle="Happy 2nd Advent Sunday!"
              popupDiscount="Claim a $20 gift card for reviewing AVS Audio Editor on Capterra"
              hrefButton="https://reviews.capterra.com/new/238864/b1abebca-fb1f-452f-bf39-7ba70b1e1ffb?lang=en"
              textButton="Get my gift"
              idButton="tenth-text_advent-calendar"
            />
            </StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-1875}
              date={new Date(2023, 11, 11)}
              validDate="The offer is valid till December 12, 2023"
              popupTitle="Get ONLYOFFICE Desktop Editors for free!"
              popupDiscount="Work with all types of documents on any platform you like."
              popupDiscountTwo="Edit PDF files, create fillable forms and more."
              hrefButton="https://www.onlyoffice.com/download-desktop.aspx"
              textButton="Download now"
              idButton="eleventh-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2062}
              date={new Date(2023, 11, 12)}
              validDate="The offer is valid till December 13, 2023"
              popupTitle="Looking for an original gift for someone special?"
              popupDiscount="Buy AVS4YOU Unlimited Subscription with a 50% discount!"
              popupCoupon="Gift50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4579203&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Gift50&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twelveth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2250}
              date={new Date(2023, 11, 13)}
              validDate="The offer is valid till December 14, 2023"
              popupTitle="40% Off on AVS Video Editor"
              popupCoupon="AI40cicle"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AI40cicle&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="thirteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2437}
              date={new Date(2023, 11, 14)}
              validDate="The offer is valid till December 15, 2023"
              popupTitle="Save 25% on AVS4YOU 1 Year Subscription"
              popupCoupon="Light25"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Light25&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="fourteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2625}
              date={new Date(2023, 11, 15)}
              validDate="The offer is valid till December 16, 2023"
              popupTitle="A special deal from our partner HookSounds"
              popupDiscount="15% Off on HookSounds Premium and Business Licenses."
              popupDiscountTwo="Enrich your audio collection with original tracks and sound effects."
              popupCoupon="AVS4YOU15"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://www.hooksounds.com/licensing/?utm_source=coupon&utm_medium=email&utm_campaign=happychristmasavs"
              textButton="Shop now"
              idButton="fifteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2812}
              date={new Date(2023, 11, 16)}
              validDate="The offer is valid tilll December 17, 2023"
              popupTitle="Enjoy a 45% discount on AVS4YOU Unlimited Subscription!"
              popupCoupon="AVS45Unlim"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=AVS45Unlim&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="sixteenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-2999}
              date={new Date(2023, 11, 17)}
              validDate="The offer is valid thru December 18, 2023"
              popupTitle="Happy 3rd Sunday of Advent!"
              popupDiscount="Get AVS Video ReMaker 1 Year Subscription for free"
              popupCoupon="ABall17S"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=26192289&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=ABall17S&CLEAN_CART=ALL"
              textButton="Get It Now"
              idButton="seventeenth-text_advent-calendar"
            />
            <CalendarItem
              imageCoordinate={-3187}
              date={new Date(2023, 11, 18)}
              validDate="The offer is valid till December 19, 2023"
              popupTitle="Hurry up to grab $20 Off on AVS4YOU 1 Year Subscription!"
              popupCoupon="Gift20"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Gift20&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="eighteenth-text_advent-calendar"
            />
            <StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-3374}
              date={new Date(2023, 11, 19)}
              validDate="The offer is valid till December 20, 2023"
              popupTitle="Surprise!"
              popupDiscount="Send a Christmas greeting card to your dearest and nearest"
              hrefButtonSave={PostcardLink}
              textButton="Get It Now"
              idButton="nineteenth-text_advent-calendar"
            />
            </StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-3562}
              date={new Date(2023, 11, 20)}
              validDate="The offer is valid till December 21, 2023"
              popupTitle="Redeem 40% Off coupon on AV4YOU Unlimited Subscription"
              popupCoupon="Candle40"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Candle40&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twentyth-text_advent-calendar"
            />
            <StyledBottomCalendar>
              <CalendarItem
              imageCoordinate={-3749}
              date={new Date(2023, 11, 21)}
              validDate="The offer is valid till December 22, 2023"
              popupTitle="Time to decorate your computer!"
              popupDiscount="Get a festive screensaver for your pc."
              hrefButtonSave={Postcard}
              textButton="Download Now"
              idButton="twenty-first-text_advent-calendar"
            />
            </StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-3936}
              date={new Date(2023, 11, 22)}
              validDate="The offer is valid till December 23, 2023"
              popupTitle="What a lucky day for everyone!"
              popupDiscount="50% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="A8LuckyYou"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=A8LuckyYou&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twenty-second-text_advent-calendar"
            />
            <StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-4124}
              date={new Date(2023, 11, 23)}
              validDate="The offer is valid till December 24, 2023"
              popupTitle="Enjoy our Christmas Calendar crafted specially for you!"
              hrefButton="0"
              textButton="Download Now"
              idButton="twenty-third-text_advent-calendar"
            />
            </StyledBottomCalendar>
            <CalendarItem
              imageCoordinate={-4311}
              date={new Date(2023, 11, 24)}
              validDate="The offer is valid till December 25, 2023"
              popupTitle="Exclusive Deal!"
              popupDiscount="Only today 55% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Christmas23"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&COUPON=Christmas23&CLEAN_CART=ALL"
              textButton="Shop now"
              idButton="twenty-fourth-text_advent-calendar"
            />
            <StyledLastCalendar>
            <CalendarItem
              imageCoordinate={-4499}
              date={new Date(2023, 11, 25)}
              validDate=""
              popupTitle="Merry Christmas!"
              popupDiscount="AVS4YOU wishes you and your family a happy and prosperous 2024 year!"
              popupDiscountTwo="May your home be blessed with Christmas joy, peace and love!"
            />
            </StyledLastCalendar>
          </div>

          <div className="advent_footer_block">
            <div className="afb_logo">
              <div className="afb_logo_link"></div>
            </div>
            <div className="afb_copyright">
            Ascensio System SIA 2023 All rights reserved.
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}
export default withI18next({ ns: "common" })(adventCalendar);
