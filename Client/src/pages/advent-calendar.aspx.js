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
    .popupTitle {
      margin-top: 130px;
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
          : <img src={MusicOn} alt="Music On"/> 
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
                <Link className="afh_logo_link" to="/"></Link>
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
                        onClick={() =>  navigator.clipboard.writeText("http://avs4you.com/advent-calendar.aspx")}
                        style={{
                          paddingBottom: "15px",
                          border: "none",
                          backgroundColor: "#ffffff",
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
              The exciting 24 days of <br /> Magic Christmas Countdown with
              AVS4YOU!
            </h1>
            <div className="advent_header_sub">
              Enjoy amazing gifts and non-stop discounts each day up to{" "}
              <b>70% Off!</b>
            </div>
          </div>


          <div className="adventCalendarContainer">
            <CalendarItem
              imageCoordinate={0}
              date={new Date(2022, 11, 1)}
              validDate="The offer is valid till December 24, 2022"
              popupTitle="Wishing You a Happy first Sunday of Advent!"
              popupDiscount="Claim a $20 gift card for reviewing AVS Audio Editor on Capterra"
              popupCoupon="Review AVS4YOU"
              hrefButton="https://reviews.capterra.com/new/238864/b1abebca-fb1f-452f-bf39-7ba70b1e1ffb?lang=en"
              textButton="Review AVS4YOU"
            />
            <CalendarItem
              imageCoordinate={-184}
              date={new Date(2022, 11, 2)}
              validDate="The offer is valid till December 3, 2022"
              popupTitle="20% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Unlim20"
              popupSub="*Just use this coupon while purchasing"
              className="CalendarItem"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Unlim20&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem imageCoordinate={-369} date={new Date(2022, 11, 3)}
              validDate="The offer is valid till December 4, 2022"
              popupTitle="30% promo code on 1 Year Subscription"
              popupCoupon="Annual30"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Annual30&CLEAN_CART=ALL"
              textButton="Shop now"
              />
            <CalendarItem imageCoordinate={-553} date={new Date(2022, 11, 4)}
              validDate="The offer is valid thru December 5, 2022" 
              popupTitle="Get a giveaway from WiseCleaner!"
              popupDiscount="All-in-one Windows PC Cleaning and Speed up Tool"
              hrefButton="https://downloads.wisecleaner.com/giveaways/WiseCare365_6.3.9.617_AVS4YOU.exe"
              textButton="Free Download"
              />
            <CalendarItem imageCoordinate={-737} date={new Date(2022, 11, 5)} 
              validDate="The offer is valid till December 6, 2022"
              popupTitle="25% Off on AVS4YOU Unlimited Subscription!"
              popupCoupon="Warm25"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Warm25&CLEAN_CART=ALL"
              textButton="Shop now"
              />
            <CalendarItem
              imageCoordinate={-922}
              date={new Date(2022, 11, 6)}
              validDate="The offer is valid till December 7, 2022"
              popupTitle="40% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Magic40"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Magic40&CLEAN_CART=ALL"
              textButton="Shop now"
            />
           <CalendarItem
              imageCoordinate={-1106}
              date={new Date(2022, 11, 7)}
              validDate="The offer is valid till December 8, 2022"
              popupTitle="70% Off on AVS4YOU 1 Year Subscription"
              popupCoupon="Annual70"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Annual70&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-1290}
              date={new Date(2022, 11, 8)}
              validDate="The offer is valid till December 9, 2022"
              popupTitle="Share our Advent calendar on Twitter or Facebook"
              popupDiscount="and get a free license key for
              AVS Video ReMaker 1 Year Subscription."
              linkTwitter="https://twitter.com/AVS4YOU"
              linkFacebook="https://business.facebook.com/avs4you/?ref=page_internal"
              popupSub="*Send us the link to your post in social networks
              to get your free license key"
            />
            <CalendarItem
              imageCoordinate={-1474}
              date={new Date(2022, 11, 9)}
              validDate="The offer is valid till December 10, 2022"
              popupTitle="A special deal from our partner HookSounds"
              popupDiscount="15% Off on HookSounds Premium and Business Licenses."
              popupDiscountTwo="Enrich your audio collection with original tracks and sound effects."
              popupCoupon="AVS4YOU15"
              hrefButton="https://www.hooksounds.com/premium/"
              popupSub="*Just use this coupon while purchasing"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-1659}
              date={new Date(2022, 11, 10)}
              validDate="The offer is valid thru December 11, 2022"
              popupTitle="Get free ONLYOFFICE Desktop Editors!"
              popupDiscount="Work with all types of documents, spreadsheets 
              and presentations, forms and PDF files
              on Windows, Mac and Linux."
              hrefButton="https://www.onlyoffice.com/download-desktop.aspx"
              textButton="Download now"
            />
            <CalendarItem
              imageCoordinate={-1843}
              date={new Date(2022, 11, 11)}
              validDate="The offer is valid till December 12, 2022"
              popupTitle="45% Off on AVS4YOU 1 Year Subscription"
              popupCoupon="45Winter"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=45Winter&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-2027}
              date={new Date(2022, 11, 12)}
              validDate="The offer is valid till December 13, 2022"
              popupTitle="Tag your video created with AVS4YOU"
              popupDiscount="with a link 
              to our website in the description and 
              get a free license key for AVS Video Editor"
              textBefore="*Send us a link at"
              linkText="sales@avs4you.com"
              linkHref="mailto:sales@avs4you.com" 
            />
            <CalendarItem
              imageCoordinate={-2212}
              date={new Date(2022, 11, 13)}
              validDate="The offer is valid till December 14, 2022"
              popupTitle="Need a secure document office for your private project?"
              popupDiscount="Get a 50% discount on ONLYOFFICE Home Server."
              popupCoupon="Home50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton=""
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-2396}
              date={new Date(2022, 11, 14)}
              validDate="The offer is valid till December 15, 2022"
              popupTitle="Enjoy a 35% discount on AVS4YOU Unlimited Subscription!"
              popupCoupon="AVS35Unlim"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=AVS35Unlim&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-2580}
              date={new Date(2022, 11, 15)}
              validDate="The offer is valid till December 16, 2022"
              popupTitle="Get a free personal online office"
              popupDiscount="Share and collaborate on docs everywhere!"
              hrefButton="https://personal.onlyoffice.com/"
              textButton="Try now"
            />
            <CalendarItem
              imageCoordinate={-2764}
              date={new Date(2022, 11, 16)}
              validDate="The offer is valid tilll December 17, 2022"
              popupTitle="35% Off on AVS4YOU Annual Subscription"
              popupCoupon="AVSClock"
              popupSub="*Just use this 100% coupon to get your key"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=AVSClock&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-2948}
              date={new Date(2022, 11, 17)}
              validDate="The offer is valid thru December 18, 2022"
              popupTitle="Looking for an original gift for someone special?"
              popupDiscount="Buy AVS4YOU Unlimited Subscription with a 50% discount!"
              popupCoupon="Gift50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4579203&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Gift50&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-3133}
              date={new Date(2022, 11, 18)}
              validDate="The offer is valid till December 19, 2022"
              popupTitle="Save 50% on AVS Video ReMaker Unlimited Subscription!"
              popupCoupon="Remaker50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=26242281&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWooJW5lHE=&COUPON=Remaker50&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-3317}
              date={new Date(2022, 11, 19)}
              validDate="The offer is valid till December 20, 2022"
              popupTitle="30% Off on AVS Video Editor!"
              popupCoupon="Snow30"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Snow30&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-3501}
              date={new Date(2022, 11, 20)}
              validDate="The offer is valid till December 21, 2022"
              popupTitle="Redeem a 45% coupon code on AVS4YOU Unlimited Subscription"
              popupCoupon="Candle45"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Candle45&CLEAN_CART=ALL"
              textButton="Shop now"
            />
              <CalendarItem
              imageCoordinate={-3685}
              date={new Date(2022, 11, 21)}
              validDate="The offer is valid till December 22, 2022"
              popupTitle="Enjoy a 40% promo code on AVS4YOU 1 Year Subscription!"
              popupCoupon="AVS40Frost"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=AVS40Frost&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-3870}
              date={new Date(2022, 11, 22)}
              validDate="The offer is valid thru December 23, 2022"
              popupTitle="50% Off on AVS4YOU bestseller - AVS Video Editor!"
              popupCoupon="Snow50"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Snow50&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <CalendarItem
              imageCoordinate={-4054}
              date={new Date(2022, 11, 23)}
              validDate="The offer is valid thru December 24, 2022"
              popupTitle="What a lucky day for everyone!"
              popupDiscount="60% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Lucky23"
              popupSub="*Just use this coupon while purchasing"
              hrefButton="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&SHORT_FORM=1&ORDERSTYLE=nLWw45a5hLk=&COUPON=Lucky23&CLEAN_CART=ALL"
              textButton="Shop now"
            />
            <StyledLastCalendar>
            <CalendarItem
              imageCoordinate={-4238}
              date={new Date(2022, 11, 24)}
              validDate=""
              popupTitle="Merry Christmas!"
              popupDiscount="AVS4YOU wishes you and your family a happy and prosperous 2023 year!
              May your home be blessed with Christmas joy, peace and love!"
            />
            </StyledLastCalendar>
          </div>

          <div className="advent_footer_block">
            <div className="afb_logo">
              <div className="afb_logo_link"></div>
            </div>
            <div className="afb_copyright">
              Online Media Technologies Ltd., UK 2020 All rights reserved.
            </div>
          </div>
        </div>

      </Layout>
    );
  }
}
export default withI18next({ ns: "common" })(adventCalendar);
