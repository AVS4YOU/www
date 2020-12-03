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

const streamUrl = AudioCalendar;

const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, track } = props;

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
	},[streamUrl])

  return (
    <div>
    <div className="afh_music_block" onClick={() => play()}>
      <button className="afh_music" >
        {playing 
          ? <img src={MusicOff}/>         
          : <img src={MusicOn}/> 
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
                <input type="checkbox" id="toggle" className="share__toggle" hidden />
                <label for="toggle" className="share__button" onClick={() => this.openModal()}>
                    <img src="https://www.dropbox.com/s/7xu7sivp4wzscer/share.png?raw=1" alt=""/>
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
              AVS4YOU
            </h1>
            <div className="advent_header_sub">
              Enjoy amazing gifts and non-stop discounts each day up to{" "}
              <b>99% Off!</b>
            </div>
          </div>


          <div className="adventCalendarContainer">
            <CalendarItem
              imageCoordinate={0}
              date={new Date(2020, 11, 2)}
              validDate="The offer is valid till December 24, 2020"
              popupTitle="Happy first Sunday of Advent 2020!"
              popupDiscount="AVS4YOU wishes you a miraculous festive season!"
              popupCoupon="Get a $20 gift card for a review of AVS4YOU programs on Capterra"
                textBefore="just" 
                linkText="contact us"
                linkHref="mailto:info@avs4you.com" 
                textAfter="with your first name and a relevant email address"
            />
            <CalendarItem
              imageCoordinate={-184}
              date={new Date(2020, 11, 3)}
              validDate="The offer is valid till December 3, 2020"
              popupTitle="On the second Day of Christmas AVS4YOU gives"
              popupDiscount="a 20% discount coupon on AVS4YOU Unlimited Subscription"
              popupCoupon="Unlim20"
              popupSub="*Just use this coupon while purchasing"
              className="CalendarItem"
            />
            <CalendarItem imageCoordinate={-369} date={new Date(2020, 11, 4)}
              validDate="The offer is valid till December 4, 2020"
              popupTitle="On the third  Day of Christmas AVS4YOU gives"
              popupDiscount="a 15% discount coupon on AVS4YOU 1 Year Subscription!"
              popupCoupon="Annual15"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem imageCoordinate={-553} date={new Date(2020, 11, 5)}
              validDate="The offer is valid thru December 5-7, 2020" 
              popupTitle="On the fourth day of Christmas"
              popupDiscount="Get a special gift from our partner ONLYOFFICE, an online office suite manufacturer, 
              1 year cloud subscription for 1-2 users with a 50% discount!"
              popupCoupon="Cloud50"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem imageCoordinate={-737} date={new Date(2020, 11, 6)} 
              validDate="The offer is valid till December 6, 2020"
              popupTitle="On the fifth day of Christmas"
              popupDiscount="Warm up with a 25% on AVS4YOU Unlimited Subscription!"
              popupCoupon="Warm25"
              popupSub="*Just use this coupon while purchasing"
              />
            <CalendarItem
              imageCoordinate={-922}
              date={new Date(2020, 11, 7)}
              validDate="The offer is valid till December 7, 2020"
              popupTitle="On the 6th day of Christmas"
              popupDiscount="AVS4YOU grants you a 20% promo code on 1 Year Subscription"
              popupCoupon="Annual20"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-1106}
              date={new Date(2020, 11, 8)}
              validDate="The offer is valid till December 8, 2020"
              popupTitle="Happy second Sunday of Advent!"
              popupDiscount="Rock out - 40% Off on AVS4YOU Unlimited Subscription!"
              popupCoupon="Magic40"
              popupSub="*Just use this coupon while purchasing"
            />
           <CalendarItem
              imageCoordinate={-1290}
              date={new Date(2020, 11, 9)}
              validDate="The offer is valid till December 9, 2020"
              popupTitle="On the 8th day of Christmas"
              popupDiscount="Our pleasure to give you a free license key for
              AVS Video ReMaker 1 Year Subscription"
              popupCoupon="ReMaker100"
              popupSub="*Just use this 100% coupon to get your key"
            />
            <CalendarItem
              imageCoordinate={-1474}
              date={new Date(2020, 11, 10)}
              validDate="The offer is valid till December 10, 2020"
              popupTitle="On the 9th day of Christmas"
              popupDiscount="Take a 18% discount on AVS4YOU 1 Year Subscription"
              popupCoupon="18Winter"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-1658}
              date={new Date(2020, 11, 11)}
              validDate="The offer is valid thru December 10-13, 2020"
              popupTitle="On the 10th day of Christmas"
              popupDiscount="Another fabulous gift from ONLYOFFICE is waiting for you!"
              popupCoupon="Get free desktop office suite to work with all types of documents, spreadsheets and presentations"
            />
            <CalendarItem
              imageCoordinate={-1842}
              date={new Date(2020, 11, 12)}
              validDate="The offer is valid till December 12, 2020"
              popupTitle="On the 11th day of Christmas"
              popupDiscount="Save 50% on AVS Video ReMaker Unlimited Subscription!"
              popupCoupon="Remaker50"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-2026}
              date={new Date(2020, 11, 13)}
              validDate="The offer is valid till December 13, 2020"
              popupTitle="On the twelfth day of Christmas"
              popupDiscount="22% Off on AVS4YOU Annual Subscription"
              popupCoupon="Clock12"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-2210}
              date={new Date(2020, 11, 14)}
              validDate="The offer is valid till December 14, 2020"
              popupTitle="Happy third Sunday of Advent!"
              popupDiscount="Redeem a 50% coupon code on AVS Video Editor!"
              popupCoupon="A50VEditor"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-2394}
              date={new Date(2020, 11, 15)}
              validDate="The offer is valid till December 15, 2020"
              popupTitle="On the 14th day of Christmas"
              popupDiscount="AVS4YOU treats you to a 33% discount on AVS4YOU Unlimited Subscription"
              popupCoupon="AVS33Unlim"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-2578}
              date={new Date(2020, 11, 16)}
              validDate="The offer is valid till December 16, 2020"
              popupTitle="On the 15th day of Christmas"
              popupDiscount="Don’t miss an opportunity to buy gifts for your friends
              with a 35% discount on AVS4YOU Unlimited Subscription!"
              popupCoupon="Gift35"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-2764}
              date={new Date(2020, 11, 17)}
              validDate="The offer is valid tilll December 17, 2020"
              popupTitle="On the 16th day of Christmas"
              popupDiscount="A wonderful bonus - a free license key for AVS Video ReMaker!
              Edit videos easily and fast during 1 year!"
              popupCoupon="Remake20"
              popupSub="*Just use this 100% coupon to get your key"
            />
            <CalendarItem
              imageCoordinate={-2946}
              date={new Date(2020, 11, 18)}
              validDate="The offer is valid thru December 17 -19, 2020"
              popupTitle="On the 17th day of Christmas"
              popupDiscount="Need a secure document office for your private project? 
              Get a 50% discount on ONLYOFFICE Home Server."
              popupCoupon="Home50"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-3130}
              date={new Date(2020, 11, 19)}
              validDate="The offer is valid till December 19, 2020"
              popupTitle="On the 18th day of Christmas"
              popupDiscount="Looking for an original gift for someone special?
              Get a 45% discount on AVS4YOU Unlimited Subscription!"
              popupCoupon="Gift45"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-3314}
              date={new Date(2020, 11, 20)}
              validDate="The offer is valid till December 20, 2020"
              popupTitle="On the 19th day of Christmas"
              popupDiscount="A new surprise for you - 30% on AVS Video Editor!"
              popupCoupon="Snow30"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-3498}
              date={new Date(2020, 11, 21)}
              validDate="The offer is valid till December 21, 2020"
              popupTitle="Happy fourth Sunday of Advent!"
              popupDiscount="A generous offer - 40% Off on AVS4YOU Unlimited Subscription"
              popupCoupon="Candle40"
              popupSub="*Just use this coupon while purchasing"
            />
              <CalendarItem
              imageCoordinate={-3682}
              date={new Date(2020, 11, 22)}
              validDate="The offer is valid till December 22, 2020"
              popupTitle="On the 21th day of Christmas"
              popupDiscount="Enjoy a 30% promo code on AVS4YOU 1 Year Subscription"
              popupCoupon="AVS30Frost"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-3866}
              date={new Date(2020, 11, 23)}
              validDate="The offer is valid thru December 22-26, 2020"
              popupTitle="On the 22th day of Christmas"
              popupDiscount="ONLYOFFICE wishes you a happy year ahead and
              makes an irresistible offer."
              popupCoupon="Get a free personal online office -
              share and collaborate on docs free of charge!"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-4050}
              date={new Date(2020, 11, 24)}
              validDate=""
              popupTitle="On Christmas Eve AVS4YOU is happy to"
              popupDiscount="give you a 50% coupon on AVS4YOU Unlimited Subscription!"
              popupCoupon="Lucky21"
              popupSub="*Just use this coupon while purchasing"
            />
            <CalendarItem
              imageCoordinate={-4236}
              date={new Date(2020, 11, 25)}
              validDate=""
              popupTitle="Merry Christmas!"
              popupDiscount="AVS4YOU wishes you and your family a happy and prosperous 2021 year!
              May your home be blessed with Christmas joy, peace and love!"
            />
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
