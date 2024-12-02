import React from "react";
import styled from "styled-components";
import Text from "../text";
import PropTypes from "prop-types";
import spriteImage from "../../images/advent-calendar/calendar.svg";
import "@fontsource/montserrat/600.css";
import iconTwitter from "../../images/advent-calendar/x.svg";
import iconFacebook from "../../images/advent-calendar/facebook.svg";
import CopyLink from '../../images/advent-calendar/link_copy.svg';

import {
  TwitterShareButton,
  FacebookShareButton,
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
    cursor: pointer;
  }

  .socialLinks {
    width: 200px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    gap: 16px;
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
    font-size: 14px;
    margin: auto;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
  }

  .popupTitle {
    font-size: 32px;
    color: #32393E;
    margin: auto;
    max-width: 380px;
    text-align: center;
    font-weight: 700;
    line-height: 1;
    font-family: Montserrat;
    letter-spacing: -0.02em;
    line-height: 31px;
  }

  .titleText {
    font-size: 22px;
    color: #32393E;
    margin: auto;
    max-width: 300px;
    text-align: center;
    font-weight: 600;
    line-height: 1;
    margin-top: 15px;
    font-family: Montserrat;
    letter-spacing: -0.02em;
    line-height: 31px;
  }

  .popupDiscount{
    font-size: 22px;
    color: #32393E;
    margin: auto;
    max-width: 420px;
    text-align: center;
    font-weight: 600;
    line-height: 1;
    font-family: Montserrat;
    letter-spacing: -0.02em;
    line-height: 28px;

      .popupDiscountEnter{
        font-size: 16px;
        color: #32393E;
        margin: auto;
        max-width: 420px;
        text-align: center;
        font-weight: 400;
        line-height: 22px;
        font-family: Open Sans;
        letter-spacing: 0;
        line-height: 22px;
    }
  }

  .popupDiscountTwo {
    font-size: 16px;
    color: #32393E;
    margin: auto;
    max-width: 420px;
    text-align: center;
    font-weight: 400;
    line-height: 22px;
    font-family: Open Sans;
    letter-spacing: 0;
    line-height: 22px;
  }

  .popupCoupon{
    font-size: 18px;
    margin: auto;
    max-width: 220px;
    outline: 3px dotted #00786B;
    text-align: center;
    margin-top: 20px;
    line-height: 1;
    padding: 10px 0;
    font-weight: 400;
    background-color: rgba(0, 120, 107, 0.05);
  }

  .popupSub{
    font-size: 12px;
    margin: auto;
    max-width: 420px;
    text-align: center;
    margin-top: 20px;
    line-height: 1;
    font-weight: 400;
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
    font-size: 12px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 320px;
    text-align: center;

    a{
      padding-left: 3px; 
      padding-right: 3px;
      color: #ca2a28;
      text-decoration: underline;
    }
  }

  .shopButton{
    background-color: #00786b;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    display: block;
    margin: auto;
    margin-top: 5px;
    min-width: 226px;
    height: 56px;
    font-family: Open Sans;
    border-radius: 3px;
    padding: 0;

    a{
      color: #fff;
      text-decoration: none;
      padding: 19px 38px;
      font-size: 14px;
      font-weight: 600;
      display: block;
    }

    &.letter {
      height: 44px;

      a{
        padding: 12px 38px;
      }
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

  
  renderTextWithLink = (textBefore, linkText, linkHref, textAfter, linkId) => {
    return(
      <>
        <div className="subText">
        <Text fontSize="12">{textBefore} <a id={linkId} href={linkHref}>{linkText}</a> {textAfter}</Text>
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

  renderButton = (textButton, hrefButton, idButton) => {
    return(
      <>
        <button className="shopButton">
        <a id={idButton} href={hrefButton}>{textButton}</a>
        </button>
      </>
    )
  }

  renderButtonSave = (textButton, hrefButtonSave, idButton) => {
    return(
      <>
        <button className="shopButton">
        <a id={idButton} href={hrefButtonSave} target="_blank" download="avs_card_2025.zip">{textButton}</a>
        </button>
      </>
    )
  }

  renderButtonSaveLetter = (textButton, hrefButtonSaveLetter, idButton) => {
    return(
      <>
        <button className="shopButton letter">
        <a id={idButton} href={hrefButtonSaveLetter} target="_blank" download="avs_letter_2025.zip">{textButton}</a>
        </button>
      </>
    )
  }

  renderButtonSaveWall = (textButton, hrefButtonSaveWall, idButton) => {
    return(
      <>
        <button className="shopButton">
        <a id={idButton} href={hrefButtonSaveWall} target="_blank" download="avs_wallpaper_2025.zip">{textButton}</a>
        </button>
      </>
    )
  }

  renderButtonPdf = (textButton, hrefButtonPdf, idButton) => {
    return(
      <>
        <button className="shopButton">
        <a id={idButton} href={hrefButtonPdf} download="avs_2024.pdf" target="_blank" rel="noopener">{textButton}</a>
        </button>
      </>
    )
  }

  renderSocialLinks = (linkFacebook, linkTwitter, {linkFacebookId, linkTwitterId}) => {
    return (
      <div className="socialLinks">
        <TwitterShareButton
            id={linkTwitterId}
            url={linkTwitter}
            style={{
              backgroundImage:`url(${iconTwitter})`,
              backgroundRepeat: "no-repeat",
              minWidth: "56px",
              height: "56px",
              backgroundSize: "56px"
            }}
        >
        </TwitterShareButton>
        <FacebookShareButton
          id={linkFacebookId}
          url={linkFacebook}
          style={{
            backgroundImage:`url(${iconFacebook})`,
            backgroundRepeat: "no-repeat",
            minWidth: "56px",
            height: "56px",
            backgroundSize: "56px"
          }}
        >
        </FacebookShareButton>
        <button 
            onClick={() => navigator.clipboard.writeText("http://avs4you.com/advent-calendar.aspx")}
            style={{
            border: "none",
            backgroundColor: "#ffffff",
            padding: "0",
            width: "56px",
            height: "56px",
          }}
            className="Demo__some-network__share-button"
                      >
            <img className=".Demo__some-network__image_copylink" 
              size={56} 
              round 
              src={CopyLink}
              alt=""
              style={{
              width: "56px",
              cursor:"pointer"
            }}/>
          </button>
    </div>
    )
  }

  render() {
    const { imageCoordinate, popupHeader, popupTitle, popupCoupon, popupDiscount, popupDiscountEnter, popupDiscountTwo, linkTwitter, linkFacebook, popupSub, textBefore, textAfter, linkText, linkHref, textBeforeTitle, linkTextTitle, linkHrefTitle, hrefButton, textButton, linkId, linkFacebookId, linkTwitterId, idButton, hrefButtonSave, hrefButtonPdf, hrefButtonSaveLetter, hrefButtonSaveWall } = this.props;    
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
            <div onClick={this.onClosePopup} className="closeButton" aria-hidden="true"></div>
            <div className="bottomTree">
              <Text>{popupHeader}</Text>
              <Text className="popupTitle">{popupTitle}</Text>
              {this.renderTextWithLinkTitle(textBeforeTitle, linkTextTitle, linkHrefTitle)}
              <Text className="popupDiscount">{popupDiscount}<p className="popupDiscountEnter">{popupDiscountEnter}</p></Text>
              {linkTwitter && linkFacebook && this.renderSocialLinks(linkTwitter, linkFacebook, {linkFacebookId, linkTwitterId})}
              {popupCoupon && <Text className="popupCoupon">{popupCoupon}</Text>}
              <Text className="popupDiscountTwo">{popupDiscountTwo}</Text>
              {this.renderTextWithLink(textBefore, linkText, linkHref, textAfter, linkId)}
              {textButton && hrefButton && this.renderButton(textButton, hrefButton, idButton)}
              {textButton && hrefButtonSave && this.renderButtonSave(textButton, hrefButtonSave, idButton)}
              {textButton && hrefButtonSaveLetter && this.renderButtonSaveLetter(textButton, hrefButtonSaveLetter, idButton)}
              {textButton && hrefButtonSaveWall && this.renderButtonSaveWall(textButton, hrefButtonSaveWall, idButton)}
              {textButton && hrefButtonPdf && this.renderButtonPdf(textButton, hrefButtonPdf, idButton)}
              <Text className="popupSub">{popupSub}</Text>
              <>{this.props.validDate !== "25" && (
              <Text className="popupHeader">
                  {isExpired ? "OFFER EXPIRED" : this.props.validDate}
              </Text>) }</>
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
