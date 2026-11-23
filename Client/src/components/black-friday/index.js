import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { Trans } from "react-i18next";

import Wheel from "./wheel";
import { SECTORS, pickSectorIndex, checkoutUrl } from "./prizes";

import BgLines from "../../images/black-friday-2026/bf-bg-lines.svg";
import Logo from "../../images/black-friday-2026/bf-logo.svg";
import IconSoundOn from "../../images/black-friday-2026/bf-icon-sound-on.svg";
import IconSoundOff from "../../images/black-friday-2026/bf-icon-sound-off.svg";
import IconClose from "../../images/black-friday-2026/bf-icon-close.svg";
import SoundSpin from "../../images/black-friday-2026/bf-spin.mp3";
import SoundClick from "../../images/black-friday-2026/bf-click.mp3";
import SoundWin from "../../images/black-friday-2026/bf-win.mp3";

// One spin per visitor per day: the won sector is kept until the next local midnight.
const RESULT_COOKIE = "bfWheel2026";
const MUTED_STORAGE_KEY = "bfWheel2026Muted";
// The click marks the stop of the wheel; the result and the bell follow right after it.
const RESULT_DELAY_MS = 200;

const BUTTON_TEXT = {
    percent: "Redeem your coupon",
    dollar: "Claim Your Deal",
    mystery: "Claim Your Free Key",
};

// Layout of the Figma frames "AVS_blackfriday_main / STATIC master" and
// "AVS_blackfriday_result / 10% mystery win" (1920 x 932, under the 64px site header).
// Images in inline styles: small SVGs become data URIs, which the styled-components
// CSS parser can break on.
const StyledBlackFriday = styled.section`
position: relative;
height: 932px;
overflow: hidden;
background: #000000;
color: #FFFFFF;

.bf-lines {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1920px;
    height: 100%;
    margin-left: -960px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    pointer-events: none;
}

.bf-controls {
    position: absolute;
    top: 66px;
    right: calc(50% - 764px);
    z-index: 2;
    display: flex;
    gap: 14px;
}

.bf-control {
    width: 38px;
    height: 38px;
    padding: 7px;
    border: 0;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.25);
    }

    img {
        display: block;
        width: 24px;
        height: 24px;
    }
}

.bf-container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 1540px;
    height: 100%;
    margin: 0 auto;
    padding-left: 10px;
}

.bf-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 726px;
    margin-left: 164px;
    text-align: center;
    transform: translateY(-13px);

    &.is-result {
        transform: translateY(-2.5px);
    }

    p {
        margin: 0;
    }
}

.bf-logo {
    display: block;
    width: 133px;
    height: 77px;
}

.bf-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
}

.bf-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 100%;
    margin: 0;
    font-family: "Unbounded", "Open Sans", sans-serif;
    text-transform: uppercase;
}

.bf-title-accent {
    font-size: 72px;
    font-weight: 800;
    line-height: 72px;
    letter-spacing: -0.7px;
    color: #F1F341;
}

.bf-title-light {
    font-size: 56px;
    font-weight: 300;
    line-height: 83px;
    letter-spacing: -1.5px;
    color: #F7F8F7;
}

.bf-text {
    max-width: 708px;
    font-family: "Open Sans", sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.64px;
    color: #BBBBBB;

    b {
        font-weight: 700;
        color: #F1F341;
    }
}

.bf-button {
    display: inline-block;
    box-sizing: border-box;
    padding: 16px 32px;
    border: 0;
    border-radius: 3px;
    background: linear-gradient(180deg, #BFC7CF 0%, #E5EBF0 47%, #D0D8DF 100%);
    filter: drop-shadow(0 0 10px rgba(191, 201, 210, 0.17));
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    color: #172027;
    cursor: pointer;
    transition: background 0.2s;

    &:hover,
    &:focus {
        background: linear-gradient(180deg, #CDD4DB 0%, #F2F6F9 47%, #DDE4EA 100%);
        color: #172027;
        text-decoration: none;
    }

    &:disabled {
        cursor: default;
    }
}

.bf-note {
    width: 100%;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.2px;
    color: #BBBBBB;
    opacity: 0.7;
}

.bf-result-title {
    margin: 0;
    font-family: "Unbounded", "Open Sans", sans-serif;
    font-size: 56px;
    font-weight: 800;
    line-height: 60px;
    letter-spacing: -0.9px;
    text-transform: uppercase;
    color: #F1F341;
}

.bf-result-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.bf-result-text {
    max-width: 700px;
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.56px;
    color: #CED3D1;

    b {
        font-weight: 700;
        letter-spacing: -0.32px;
        color: #FFFFFF;
    }

    .bf-coupon {
        font-weight: 700;
        letter-spacing: normal;
        color: #F1F341;
    }
}

@media (max-width: 1599px) {
    height: 800px;

    .bf-controls {
        top: 32px;
        right: 32px;
    }

    .bf-container {
        justify-content: center;
        width: 100%;
        padding: 0 32px;
    }

    .bf-wheel {
        width: 520px;
        height: 520px;
    }

    .bf-content {
        width: 600px;
        margin-left: 80px;
    }

    .bf-title-accent {
        font-size: 60px;
        line-height: 62px;
    }

    .bf-title-light {
        font-size: 46px;
        line-height: 68px;
        letter-spacing: -1.2px;
    }

    .bf-text {
        font-size: 26px;
        line-height: 34px;
        letter-spacing: -0.52px;
    }

    .bf-result-title {
        font-size: 46px;
        line-height: 52px;
    }

    .bf-result-text {
        font-size: 24px;
        line-height: 34px;
    }
}

@media (max-width: 1249px) {
    height: 680px;

    .bf-wheel {
        width: 420px;
        height: 420px;
    }

    .bf-content {
        width: 500px;
        margin-left: 48px;
        gap: 32px;
    }

    .bf-logo {
        width: 106px;
        height: 61px;
    }

    .bf-main {
        gap: 24px;
    }

    .bf-title-accent {
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -0.5px;
    }

    .bf-title-light {
        font-size: 38px;
        line-height: 54px;
        letter-spacing: -1px;
    }

    .bf-text {
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.44px;
    }

    .bf-button {
        font-size: 16px;
    }

    .bf-note {
        font-size: 14px;
        line-height: 22px;
    }

    .bf-result-title {
        font-size: 38px;
        line-height: 44px;
    }

    .bf-result-texts {
        gap: 24px;
    }

    .bf-result-text {
        font-size: 21px;
        line-height: 30px;
    }
}

@media (max-width: 1049px) {
    height: auto;

    .bf-container {
        flex-direction: column;
        padding: 96px 32px 64px;
    }

    .bf-content,
    .bf-content.is-result {
        margin: 40px 0 0;
        transform: none;
    }
}
`;

const getRestoredIndex = () => {
    const id = new Cookies().get(RESULT_COOKIE);
    const index = SECTORS.findIndex((sector) => sector.id === id);
    return index === -1 ? null : index;
};

const saveResult = (index) => {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    new Cookies().set(RESULT_COOKIE, SECTORS[index].id, { path: "/", expires: nextMidnight });
};

const readMuted = () => {
    try {
        return localStorage.getItem(MUTED_STORAGE_KEY) === "1";
    } catch (e) {
        return false;
    }
};

const writeMuted = (muted) => {
    try {
        localStorage.setItem(MUTED_STORAGE_KEY, muted ? "1" : "0");
    } catch (e) {
        // Storage may be unavailable (private mode); the choice then lasts for this visit only.
    }
};

export class BlackFriday extends React.PureComponent {
    constructor(props) {
        super(props);
        this.wheelRef = React.createRef();
        this.sounds = {};
        this.resultTimer = null;
        // Server render and first client render show the idle wheel; a saved result is applied on mount.
        this.state = {
            phase: "idle",
            winIndex: null,
            muted: false,
        };
    }

    componentDidMount() {
        const muted = readMuted();
        this.sounds = {
            spin: new Audio(SoundSpin),
            click: new Audio(SoundClick),
            win: new Audio(SoundWin),
        };
        Object.keys(this.sounds).forEach((name) => {
            this.sounds[name].preload = "auto";
            this.sounds[name].muted = muted;
        });

        const restoredIndex = getRestoredIndex();
        if (restoredIndex !== null) {
            this.wheelRef.current.showResult(restoredIndex);
            this.setState({ phase: "result", winIndex: restoredIndex, muted });
        } else {
            this.setState({ muted });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.resultTimer);
        Object.keys(this.sounds).forEach((name) => this.sounds[name].pause());
    }

    playSound(name) {
        const sound = this.sounds[name];
        if (!sound) return;
        try {
            sound.currentTime = 0;
            const playing = sound.play();
            if (playing && playing.catch) playing.catch(() => {});
        } catch (e) {
            // Playback is optional.
        }
    }

    toggleSound = () => {
        const muted = !this.state.muted;
        Object.keys(this.sounds).forEach((name) => {
            this.sounds[name].muted = muted;
        });
        writeMuted(muted);
        this.setState({ muted });
    };

    handleSpin = () => {
        if (this.state.phase !== "idle" || !this.wheelRef.current) return;
        const index = pickSectorIndex();
        // Saved right away, so closing the wheel during the spin does not give another try.
        saveResult(index);
        this.setState({ phase: "spinning" });
        if (this.wheelRef.current.isAnimated()) this.playSound("spin");
        this.wheelRef.current.spin(index, () => {
            this.playSound("click");
            this.resultTimer = setTimeout(() => {
                this.setState({ phase: "result", winIndex: index });
                this.playSound("win");
            }, RESULT_DELAY_MS);
        });
    };

    renderStart() {
        const { t } = this.props;
        return (
            <div className="bf-content">
                <img className="bf-logo" src={Logo} alt="AVS4YOU" />
                <div className="bf-main">
                    <h1 className="bf-title">
                        <span className="bf-title-accent">{t("Black Friday")}</span>
                        <span className="bf-title-light">{t("Wheel of Luck")}</span>
                    </h1>
                    <p className="bf-text">
                        <Trans i18nKey="bfWheelText" components={[<b />]} />
                    </p>
                    <button
                        type="button"
                        className="bf-button"
                        id="black_friday_start"
                        onClick={this.handleSpin}
                        disabled={this.state.phase !== "idle"}
                    >
                        {t("Spin the wheel")}
                    </button>
                </div>
                <p className="bf-note">{t("bfWheelNote")}</p>
            </div>
        );
    }

    renderResult() {
        const { t, locale } = this.props;
        const sector = SECTORS[this.state.winIndex];
        const product = t(sector.productKey);

        return (
            <div className="bf-content is-result">
                <h1 className="bf-result-title">
                    {sector.kind === "mystery" ? t("Jackpot!") : t("Congratulations")}
                </h1>
                <div className="bf-result-texts">
                    {sector.kind === "mystery" ? (
                        <>
                            <p className="bf-result-text">{t("The Mystery Box is yours!")}</p>
                            <p className="bf-result-text">
                                <Trans i18nKey="bfWheelMysteryText" values={{ product }} components={[<b />]} />
                            </p>
                        </>
                    ) : (
                        <p className="bf-result-text">
                            <Trans
                                i18nKey="bfWheelUnlocked"
                                values={{ discount: sector.discount, product }}
                                components={[<b />]}
                            />
                        </p>
                    )}
                    {sector.kind === "percent" && (
                        <p className="bf-result-text">
                            <Trans
                                i18nKey="CouponName"
                                values={{ coupon: sector.coupon }}
                                components={[<span />, <span className="bf-coupon" />]}
                            />
                        </p>
                    )}
                </div>
                <a
                    className="bf-button"
                    id="black_friday_redeem"
                    href={checkoutUrl(sector, locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t(BUTTON_TEXT[sector.kind])}
                </a>
            </div>
        );
    }

    render() {
        const { t, onCloseBanner } = this.props;
        const { phase, winIndex, muted } = this.state;

        return (
            <StyledBlackFriday>
                <div className="bf-lines" style={{ backgroundImage: `url(${BgLines})` }} />
                <div className="bf-controls">
                    <button
                        type="button"
                        className="bf-control"
                        onClick={this.toggleSound}
                        aria-pressed={!muted}
                        aria-label={t("bfWheelSound")}
                        title={t("bfWheelSound")}
                    >
                        <img src={muted ? IconSoundOff : IconSoundOn} alt="" />
                    </button>
                    <button
                        type="button"
                        className="bf-control"
                        onClick={onCloseBanner}
                        aria-label={t("bfWheelClose")}
                        title={t("bfWheelClose")}
                    >
                        <img src={IconClose} alt="" />
                    </button>
                </div>
                <div className="bf-container">
                    <Wheel
                        ref={this.wheelRef}
                        className="bf-wheel"
                        winIndex={phase === "result" ? winIndex : null}
                        t={t}
                    />
                    {phase === "result" ? this.renderResult() : this.renderStart()}
                </div>
            </StyledBlackFriday>
        );
    }
}

BlackFriday.propTypes = {
    locale: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    onCloseBanner: PropTypes.func.isRequired,
};
