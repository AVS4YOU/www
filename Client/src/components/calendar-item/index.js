import React from "react";
import styled, { css } from "styled-components";
import Text from "../text";
import PropTypes from "prop-types";
import spriteImage from "../../images/advent-calendar/calendar.svg";

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
    width: 169px;
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
    background-size: 4407px auto;
    background-position-x: ${(props) =>
      props.imageCoordinate ? props.imageCoordinate : 0}px;
    background-position-y: 0px;
  }

  .closeButton {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #f3fdff;
    position: absolute;
    right: -30px;
    top: -30px;
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
    background-color: rgba(0, 57, 66, 0.3);
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
`;

class CalendarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpened: false,
      isExpired: null,
    };
  }

  onItemClick = () => {
    const itemDay = this.props.date.getDate();
    const currentDay = new Date().getDate();

    const itemMonth = this.props.date.getMonth();
    const currentMonth = new Date().getMonth();

    if (this.state.popupOpened) return;

    if (currentDay > itemDay && currentMonth > itemMonth) {
      //console.log("Истёкший купон");
      this.setState({
        popupOpened: true,
        isExpired: true,
      });
    } else if (currentDay === itemDay && currentMonth === itemMonth) {
      //console.log("Показать купон");
      this.setState({
        popupOpened: true,
        isExpired: false,
      });
    } else {
      //console.log("Еще не наступивший купон");
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

  render() {
    const { imageCoordinate, popupHeader, popupTitle, popupCoupon, popupDiscount, popupSub } = this.props;
    const { popupOpened, isExpired } = this.state;
    return (
      <StyledCalendarItem
        imageCoordinate={imageCoordinate}
        isExpired={isExpired}
        onClick={this.onItemClick}
      >
        <div className="calendarImage"></div>

        {popupOpened && (
          <>
            <div className="popupBlock">
            <div onClick={this.onClosePopup} className="closeButton"></div>
              <Text className="popupHeader">
                {isExpired
                  ? "OFFER EXPIRED"
                  : `The offer is valid till ${this.getFormattedDate()}`}
              </Text>
              <Text>{popupHeader}</Text>
              <Text className="popupTitle">{popupTitle}</Text>
              <Text className="popupDiscount">{popupDiscount}</Text>
              <Text className="popupCoupon">{popupCoupon}</Text>
              <Text className="popupSub">{popupSub}</Text>
            </div>
            <div onClick={this.onClosePopup} className="closeBackground"></div>
          </>
        )}
      </StyledCalendarItem>
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
