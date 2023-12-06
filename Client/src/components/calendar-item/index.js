import React from "react";
import styled from "styled-components";
import Text from "../text";
import PropTypes from "prop-types";
import spriteImage from "../../images/advent-calendar/calendar.svg";

import {
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const StyledCalendarItem = styled.div`
  display: block;

  .calendarImage {
    background-color: transparent;
    width: 100%;
    height: 169px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: left center;
    transform-origin: left center;
    -webkit-transition: -webkit-transform 0.75s ease;
    transition: -webkit-transform 0.75s ease;
    transition: transform 0.75s ease;
    transition: transform 0.75s ease, -webkit-transform 0.75s ease;
    z-index: 2;
    background-image: url(${spriteImage});
    background-repeat: no-repeat;
    background-size: 4669px 172px;
    background-position-x: ${(props) =>
      props.imageCoordinate ? props.imageCoordinate : 0}px;
    background-position-y: -1.5px;
    filter: ${(props) => (props.isExpired ? "brightness(0.6)" : "none)")};
    box-shadow: ${(props) => (props.isExpired || props.futureCoupon ? "none" : "0px 0px 25px 0px white")};
  }

  .socialLinks {
    width: 150px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  }

  .closeButton {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #f3fdff;
    position: absolute;
    right: -30px;
    top: -30px;

    &::before {
      display: block;
      position: absolute;
      font-size: 30px;
      background-color: transparent;
      content: "x";
      left: 8px;
      top: -9px;
      z-index: 1;
      color: #185674;
    }
  }

  .twitterIconPopup {
    display: block;
  }

  .popupBlock {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: fixed;
    width: 500px;
    height: 500px;
    background-color: ${(props) => (props.isExpired ? "#f2fcf6" : "#ffffff")};
    z-index: 20;
  }

  .closeBackground {
    z-index: 19;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 57, 66, 0.4);
    top: 0;
    left: 0;
  }

  .popupHeader{
    font-size: 12px;
    margin: auto;
    background-color: #00786b;
    width: 300px;
    height: 20px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    padding-top: 4px;
    margin-top: 17px;
  }

  .popupTitle {
    font-size: 30px;
    color: #ca2a28;
    margin: auto;
    max-width: 300px;
    text-align: center;
    font-weight: 600;
    margin-top: 40px;
    line-height: 1;
  }

  .titleText {
    font-size: 18px;
    color: #ca2a28;
    margin: auto;
    max-width: 300px;
    text-align: center;
    font-weight: 600;
    line-height: 1;
    margin-top: 15px;
  }

  .popupDiscount{
    font-size: 18px;
    margin: auto;
    width: 350px;
    text-align: center;
    font-weight: 600;
    margin-top: 15px;
    line-height: 1;
  }

  .popupCoupon{
    font-size: 26px;
    margin: auto;
    max-width: 300px;
    outline: 2px dashed #ca2a28;
    text-align: center;
    margin-top: 30px;
    line-height: 1;
    padding: 10px;
    font-weight: 700;
    background-color: #fff;
  }

  .popupSub{
    font-size: 12px;
    margin: auto;
    width: 350px;
    text-align: center;
    margin-top: 15px;
    line-height: 1;
    font-weight: 600;
  }

  .textBefore{
    font-size: 12px;
    margin: auto;
    width: 350px;
    text-align: center;
    margin-top: 15px;
    line-height: 1;
    font-weight: 600;
  }

  .subText{
    display: block;
    font-size: 11px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 300px;
    text-align: center;

    a{
      padding-left: 3px; 
      padding-right: 3px;
      color: #333333;
      text-decoration: underline;
    }
  }

  .shopButton{
    background-color: #00786b;
    text-decoration: none;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-transform: uppercase;
    display: block;
    margin: auto;
    margin-top: 30px;

    a{
      color: #fff;
      text-decoration: none;
      padding: 2em;     
      margin: -2em; 
    }
  }
}
`;



class CalendarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpened: false,
      isExpired: null,
      futureCoupon: null,
    };
  }

  componentDidMount () {
    const itemDay = this.props.date.getDate();
    const currentDay = new Date().getDate();

    if (this.state.popupOpened) return;

    if (currentDay > itemDay) {
      //console.log("Истёкший купон");
      this.setState({
        isExpired: true,
        futureCoupon: false,
      });
    } else if (currentDay === itemDay) {
      //console.log("Показать купон");
      this.setState({
        isExpired: false,
        futureCoupon: false,
      });
    } else {
      //console.log("Еще не наступивший купон");
      this.setState({
        futureCoupon: true,
      });
    }
  }

  onItemClick = () => {
    const itemDay = this.props.date.getDate();
    const currentDay = new Date().getDate();

    if (this.state.popupOpened) return;

    if (currentDay > itemDay) {
      //console.log("Истёкший купон");
      this.setState({
        popupOpened: true,
        isExpired: true,
        futureCoupon: false,
      });
    } else if (currentDay === itemDay) {
      //console.log("Показать купон");
      this.setState({
        popupOpened: true,
        isExpired: false,
        futureCoupon: false,
      });
    } else {
      //console.log("Еще не наступивший купон");
      this.setState({
        futureCoupon: true,
      });
    }
  };

  onClosePopup = () => {
    this.setState({
      popupOpened: false,
    });
  };

  getFormattedDate = () => {
    const { date } = this.props;

    var dd = date.getDate();
    var mm = months[date.getMonth()];
    var yy = date.getFullYear();

    return `${mm} ${dd}, ${yy}`;
  };

  
  renderTextWithLink = (textBefore, linkText, linkHref, textAfter) => {
    return(
      <>
        <div className="subText">
        <Text fontSize="11">{textBefore} <a href={linkHref}>{linkText}</a> {textAfter}</Text>
        </div>
      </>
    )
  }

  renderTextWithLinkTitle = (textBeforeTitle, linkTextTitle, linkHrefTitle) => {
    return(
      <>
        <div className="titleText">
        <Text fontSize="18" lineHeight="1" fontWeight="600">{textBeforeTitle}</Text>
        <a href={linkHrefTitle}>{linkTextTitle}</a>
        </div>
      </>
    )
  }

  renderButton = (textButton, hrefButton) => {
    return(
      <>
        <button className="shopButton">
        <a href={hrefButton}>{textButton}</a>
        </button>
      </>
    )
  }

  renderSocialLinks = (linkFacebook, linkTwitter) => {
    return (
      <div className="socialLinks">
        <TwitterShareButton
          url={linkTwitter}
        >
          <TwitterIcon size={50} round />
        </TwitterShareButton>
        <FacebookShareButton
        url={linkFacebook}
        >
          <FacebookIcon size={50} round />
        </FacebookShareButton>
    </div>
    )
  }

  render() {
    const { imageCoordinate, popupHeader, popupTitle, popupCoupon, popupDiscount, popupDiscountTwo, linkTwitter, linkFacebook, popupSub, textBefore, textAfter, linkText, linkHref, textBeforeTitle, linkTextTitle, linkHrefTitle, hrefButton, textButton  } = this.props;
    const { popupOpened, isExpired, futureCoupon } = this.state;
    //console.log(futureCoupon)
    return (
      <div className="CalendarItem">
      <StyledCalendarItem
        imageCoordinate={imageCoordinate}
        isExpired={isExpired}
        futureCoupon={futureCoupon}
        onClick={this.onItemClick}
      >
        <div className="calendarImage"></div>

        {popupOpened && (
          <>
            <div className="popupBlock topTree">
            <div className="bottomTree">
            <div onClick={this.onClosePopup} className="closeButton" aria-hidden="true"></div>
              <Text className="popupHeader">
                {isExpired
                  ? "OFFER EXPIRED"
                  : this.props.validDate}
              </Text>
              <Text>{popupHeader}</Text>
              <Text className="popupTitle">{popupTitle}</Text>
              {this.renderTextWithLinkTitle(textBeforeTitle, linkTextTitle, linkHrefTitle)}
              <Text className="popupDiscount">{popupDiscount}</Text>
              <Text className="popupDiscount">{popupDiscountTwo}</Text>
              {linkTwitter && linkFacebook && this.renderSocialLinks(linkTwitter, linkFacebook)}
              {popupCoupon && <Text className="popupCoupon">{popupCoupon}</Text>}
              <Text className="popupSub">{popupSub}</Text>
              {this.renderTextWithLink(textBefore, linkText, linkHref, textAfter)}
              {textButton && hrefButton && this.renderButton(textButton, hrefButton)}
              </div>
              </div>
            <div onClick={this.onClosePopup} className="closeBackground" aria-hidden="true"></div>
          </>
        )}
      </StyledCalendarItem>
      </div>
    );
  }
}

CalendarItem.propTypes = {
  date: PropTypes.instanceOf(Date),
  number: PropTypes.number,
};

CalendarItem.defaultProps = {
  number: 0,
};

export default CalendarItem;
