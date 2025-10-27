import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const turntableStyles = `
    .react-turntable-section::before, .react-turntable-section::after {
        clear: both;
        content: "";
        display: table;
        zoom: 1;
    }
    .react-turntable-section {
        position: relative;
    }
    .react-turntable-section canvas {
        display: block;
        pointer-events: none;
    }
    .react-turntable-section .react-turntable-section-btn {
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0,0,0,.1);
        border: 2px solid #fff;
        color: #fff;
        background: #F9CDAD;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        z-index: 2;
    }
    .react-turntable-section .react-turntable-section-btn::before {
        content: "";
        position: absolute;
        border: 20px solid transparent;
        border-bottom-color: #F9CDAD;
        left: 50%;
        margin-left: -20px;
        top: -30px;
        z-index: 1;
    }
`;

export function easeOut(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}

export default class ReactTurntable extends PureComponent {
  state = {
    isRotate: false,
    startRotate: 0,
    winningPrizeIndex: null,
  };

  constructor(props) {
    super(props);
    this.canvas = null;
    this.ctx = null;
    this.animateId = null;
  }

  static defaultProps = {
    width: 500,
    height: 500,
    speed: 1000,
    duration: 5000,
    prizes: [],
    clickText: "Click",
    primaryColor: "#83AF9B",
    secondaryColor: "#C8C8A9",
    winningPrimarySectorColor: "#FFC300",
    winningSecondarySectorColor: "#FFD700",
    winningPrimaryFontColor: "#000000",
    winningSecondaryFontColor: "#000000",
    separatorWidth: 2,
    separatorColor: "#FFFFFF",
    fontStyle: {
      color: "#fff",
      secondaryColor: null,
      size: "14px",
      fontWeight: "bold",
      fontVertical: false,
      fontFamily: "Microsoft YaHei",
    },
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    prizes: PropTypes.array.isRequired,
    clickText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    speed: PropTypes.number,
    duration: PropTypes.number,
    onComplete: PropTypes.func,
    fontStyle: PropTypes.object,
    winningPrimarySectorColor: PropTypes.string,
    winningSecondarySectorColor: PropTypes.string,
    winningPrimaryFontColor: PropTypes.string,
    winningSecondaryFontColor: PropTypes.string,
    separatorWidth: PropTypes.number,
    separatorColor: PropTypes.string,
  };

  render() {
    const { clickText, width, height } = this.props;
    const styles = { width, height };
    return (
      <div className="react-turntable-section" style={styles}>
        <canvas ref={(node) => (this.canvas = node)} />
        {Object.prototype.toString.call(clickText) === "[object Object]" ? (
          <div onClick={this.onStartRotate}>{clickText}</div>
        ) : (
          <div
            className="react-turntable-section-btn"
            onClick={this.onStartRotate}
          >
            {clickText}
          </div>
        )}
      </div>
    );
  }

  rotateTurntable = () => {
    this.rotateTime += 20;
    if (this.rotateTime >= this.rotateAllTime) {
      const { prize, index } = this.getSelectedPrize();
      this.setState({ isRotate: false, winningPrizeIndex: index }, () => {
        this.drawTurntable();
        this.props.onComplete && this.props.onComplete(prize);
      });
      return;
    }
    let _rotateChange =
      (this.rotateChange -
        easeOut(this.rotateTime, 0, this.rotateChange, this.rotateAllTime)) *
      (Math.PI / 180);
    this.startRotate += _rotateChange;
    this.drawTurntable();
    this.animateId = requestAnimationFrame(this.rotateTurntable);
  };

  getSelectedPrize = () => {
    const startAngle = (this.startRotate * 180) / Math.PI;
    const awardAngle = (this.awardRotate * 180) / Math.PI;
    const pointerAngle = 90;
    const overAngle = (startAngle + pointerAngle) % 360;
    const restAngle = 360 - overAngle;
    const index = Math.floor(restAngle / awardAngle);
    return { prize: this.prizes[index], index };
  };

  drawTurntable() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const {
      primaryColor,
      secondaryColor,
      winningPrimarySectorColor,
      winningSecondarySectorColor,
      winningPrimaryFontColor,
      winningSecondaryFontColor,
      separatorWidth,
      separatorColor,
      fontStyle: {
        fontVertical,
        fontWeight,
        fontFamily,
        size,
        color,
        secondaryColor: secondaryFontColor,
      },
    } = this.props;

    const { winningPrizeIndex } = this.state;

    for (let [i, prize] of this.prizes.entries()) {
      const _currentStartRotate = this.startRotate + this.awardRotate * i;
      const _currentEndRotate = _currentStartRotate + this.awardRotate;

      this.ctx.save();
      if (winningPrizeIndex === i) {
        this.ctx.fillStyle =
          i % 2 === 0 ? winningPrimarySectorColor : winningSecondarySectorColor;
      } else {
        this.ctx.fillStyle = i % 2 === 0 ? primaryColor : secondaryColor;
      }
      this.ctx.beginPath();
      this.ctx.arc(
        this.centerX,
        this.centerY,
        this.R,
        _currentStartRotate,
        _currentEndRotate,
        false
      );
      this.ctx.arc(
        this.centerX,
        this.centerY,
        this.INSERT_R,
        _currentEndRotate,
        _currentStartRotate,
        true
      );
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();

      if (separatorWidth > 0) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = separatorColor;
        this.ctx.lineWidth = separatorWidth;
        this.ctx.moveTo(this.centerX, this.centerY);
        this.ctx.lineTo(
          this.centerX + this.R * Math.cos(_currentStartRotate),
          this.centerY + this.R * Math.sin(_currentStartRotate)
        );
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
      }

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.font = `${fontWeight} ${
        /.*px$/.test(size) ? size : size + "px"
      } ${fontFamily}`;

      if (winningPrizeIndex === i) {
        this.ctx.fillStyle =
          i % 2 === 0 ? winningPrimaryFontColor : winningSecondaryFontColor;
      } else if (secondaryFontColor && i % 2 !== 0) {
        this.ctx.fillStyle = secondaryFontColor;
      } else {
        this.ctx.fillStyle = color;
      }

      this.ctx.textBaseline = "middle";
      const currentX =
        Math.cos(_currentStartRotate + this.awardRotate / 2) * this.TEXT_R;
      const currentY =
        Math.sin(_currentStartRotate + this.awardRotate / 2) * this.TEXT_R;

      this.ctx.translate(this.centerX + currentX, this.centerY + currentY);
      this.ctx.rotate(_currentStartRotate + this.awardRotate / 2 + Math.PI / 2);

      const { width: fontWidth } = this.ctx.measureText(prize);

      if (fontVertical === true) {
        this.ctx.translate(0, Math.min(fontWidth, 25));
        this.ctx.rotate((90 / 180) * Math.PI);
      }

      this.ctx.fillText(prize, -fontWidth / 2, 0);
      this.ctx.closePath();
      this.ctx.restore();
    }
  }

  destroyContext() {
    window.cancelAnimationFrame(this.animateId);
    for (let key in this) {
      if (
        Object.prototype.hasOwnProperty.call(this, key) &&
        typeof this[key] !== "function"
      ) {
        delete this[key];
      }
    }
  }

  compatibilityFrame() {
    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      ((callback) => window.setTimeout(callback, 1000 / 60));
    window.cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  }

  componentWillUnmount() {
    this.destroyContext();
  }

  onStartRotate = () => {
    if (this.state.isRotate) return;

    const { speed, duration } = this.props;

    this.setState({ isRotate: true, winningPrizeIndex: null }, () => {
      this.rotateTime = 0;
      this.rotateAllTime = Math.random() * 1000 + duration;
      this.rotateChange = Math.random() * 10 + speed / 100;
      this.rotateTurntable();
    });
  };

  componentDidMount() {
    if (!document.getElementById("react-turntable-styles")) {
      const style = document.createElement("style");
      style.id = "react-turntable-styles";
      style.innerHTML = turntableStyles;
      document.head.appendChild(style);
    }

    this.compatibilityFrame();
    const { width, height, prizes } = this.props;

    if (prizes.length < 2)
      throw new Error(
        "options prizes It needs to be an array , Not less than two"
      );

    this.prizes = prizes;
    this.startRotate = 0;
    this.rotateTime = 0;
    this.rotateAllTime = 0;
    this.rotateChange = 0;

    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;

    this.awardRotate = (Math.PI * 2) / prizes.length;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.R = this.canvas.width / 2 - 20;
    this.TEXT_R = this.R - 50;
    this.INSERT_R = 0;

    this.drawTurntable();
  }
}
