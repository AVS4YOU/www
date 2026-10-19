import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Trans } from "react-i18next";

import SideBg from "../../images/halloween-2026/side-bg.svg";
import SideTabBg from "../../images/halloween-2026/side-tab-bg.svg";
import SidePumpkins from "../../images/halloween-2026/side-pumpkins.svg";
import SideLogo from "../../images/halloween-2026/side-logo.svg";
import SideLogoScanlineMask from "../../images/halloween-2026/side-logo-scanline-mask.png";
import SideLogoSlice from "../../images/halloween-2026/side-logo-slice.png";
import SideWeb from "../../images/halloween-2026/side-web.svg";
import SideBat from "../../images/halloween-2026/side-bat.svg";
import SideTabPumpkin from "../../images/halloween-2026/side-tab-pumpkin.svg";
import SideChevron from "../../images/halloween-2026/side-chevron.svg";
import SideChevronOpen from "../../images/halloween-2026/side-chevron-open.svg";

// "Tracking displacement" strips of the VHS logo effect (Figma frame "H 40 / logo white — VHS").
const LOGO_STRIPS = [
    { top: 15.903, height: 1.277, x: 5.429, y: -14.903 },
    { top: 32.936, height: 0.852, x: 1.277, y: -31.936 },
    { top: 45.709, height: 1.065, x: 4.471, y: -44.709 },
];

// Images and masks are passed through inline styles: small files are inlined by
// url-loader as data URIs, which the styled-components CSS parser can break on.
// The tab always stays flush with the right edge, and the banner opens to its left
// with a 16px gap, as in the Figma "Banner preview" frame.
const StyledSideBanner = styled.div`
/* display: none; */
position: fixed;
top: 50%;
right: 0;
z-index: 9;
width: 429px;
height: 350px;
transform: translateY(-50%);
pointer-events: none;

@media (max-width: 1023px) {
    display: none;
}

.hsb-tab,
.hsb-panel {
    position: absolute;
    top: 0;
    height: 350px;
    pointer-events: auto;
    background-color: #2B064E;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.hsb-tab {
    right: 0;
    width: 53px;
    padding: 0;
    border: 0;
    cursor: pointer;
}

/* The closed banner is transparent, shifted towards the tab and invisible once the fade ends. */
.hsb-panel {
    right: 69px;
    width: 360px;
    overflow: hidden;
    opacity: 0;
    transform: translateX(24px);
    visibility: hidden;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;
}

&.expanded .hsb-panel {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0s;
}

.hsb-chevron {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 32px;
    height: 32px;
}

.hsb-tab-pumpkin {
    position: absolute;
    left: 0.86px;
    top: 296.86px;
    width: 51.28px;
    height: 47.28px;
}

.hsb-tab-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: sideways;
    white-space: nowrap;
    font-family: "Creepster", "Segoe UI", sans-serif;
    font-size: 25px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: transparent;
    -webkit-text-fill-color: transparent;
    background: radial-gradient(80.7% 50% at 50% 50%, #FF6D00 33.35%, #FF9E00 100%);
    -webkit-background-clip: text;
    background-clip: text;
    /* Drawn before the 180deg turn, so it lands on the right of the text as in the design. */
    filter: drop-shadow(-2px 0 4.3px rgba(34, 34, 34, 0.25));
}

.hsb-pumpkins {
    position: absolute;
    left: 0;
    top: 202px;
    width: 360px;
    height: 148px;
}

.hsb-logo {
    position: absolute;
    left: 23px;
    top: 29px;
    width: 104px;
    height: 59px;
}

.hsb-logo-img {
    position: absolute;
    left: 0.614px;
    top: -0.276px;
    width: 101.772px;
    height: 60.036px;
}

.hsb-logo-scanlines {
    position: absolute;
    left: 2px;
    top: 1px;
    width: 99px;
    height: 57.484px;
    background: repeating-linear-gradient(to bottom, rgba(8, 15, 31, 0.3) 0, rgba(8, 15, 31, 0.3) 0.639px, transparent 0.639px, transparent 3.1935px);
    background-position: 0 2.129px;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}

.hsb-logo-strip {
    position: absolute;
    left: -1.194px;
    width: 105.387px;
    opacity: 0.85;
    background-size: 99px 57.484px;
    background-repeat: no-repeat;
}

.hsb-decor {
    position: absolute;
    left: 158px;
    top: 0;
    width: 202px;
    height: 111px;
    overflow: hidden;
    pointer-events: none;
}

.hsb-web {
    position: absolute;
    left: 90.73px;
    top: -307.59px;
    width: 301.02px;
    height: 445.56px;
    opacity: 0.65;
    transform: rotate(72.4deg) scaleX(-1);
}

.hsb-bat {
    position: absolute;
    left: -9.42px;
    top: 54.04px;
    width: 72.82px;
    height: 37.51px;
    transform: rotate(29.43deg);

    img {
        position: absolute;
        left: -4.24px;
        top: -0.3px;
        width: 81.3px;
        height: 45.99px;
    }
}

.hsb-content {
    position: absolute;
    left: 25px;
    top: 120px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
}

.hsb-copy {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

.hsb-title {
    margin: 0;
    font-family: "Creepster", "Segoe UI", sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0 2px 4.3px rgba(34, 34, 34, 0.25);
    white-space: pre-line;
}

.hsb-accent {
    display: inline-block;
    color: transparent;
    -webkit-text-fill-color: transparent;
    background: radial-gradient(50% 80.7% at 50% 50%, #FF6D00 33.35%, #FF9E00 100%);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4.3px rgba(34, 34, 34, 0.25));
}

.hsb-text {
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    color: #FFFFFF;
    opacity: 0.76;
}

.hsb-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 10px;
    background: linear-gradient(101.3deg, #FF6D00 1.71%, #FF9E00 53.53%, #FF6D00 101.27%);
    font-family: "Creepster", "Segoe UI", sans-serif;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #250543;
    text-decoration: none;
    white-space: nowrap;
}

.hsb-button:hover,
.hsb-button:focus {
    color: #250543;
    text-decoration: none;
}

/* Translated layouts use smaller type and an outlined button. */
&.fr, &.de, &.es, &.it, &.jp {
    .hsb-content {
        top: 112px;
    }

    .hsb-title {
        font-size: 25px;
        line-height: 1;
        text-shadow: none;
    }

    .hsb-accent {
        filter: none;
    }

    .hsb-text {
        font-size: 13px;
    }

    .hsb-button {
        font-size: 17px;
        border: 1px solid #FF6D00;
    }
}

/* In the German design the subtitle stays on one line, a bit wider than the text column. */
&.de .hsb-text {
    white-space: nowrap;
}

/* Japanese glyphs fall back to a heavy system font; Creepster has no bold face, so no faux bold for it. */
&.jp {
    .hsb-content {
        top: 120px;
    }

    .hsb-text {
        width: 306px;
    }

    .hsb-title,
    .hsb-tab-text {
        font-weight: 900;
        font-synthesis: none;
    }

    .hsb-text {
        font-family: "Open Sans", "Segoe UI", sans-serif;
    }

    .hsb-button {
        font-family: "Segoe UI", sans-serif;
        font-weight: 900;
        line-height: 1.3;
        letter-spacing: normal;
    }
}
`;

// Starts closed; a click on the tab opens the banner and the next click closes it again.
const HalloweenSideBanner = ({ locale, href, t }) => {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => setExpanded((value) => !value);

    return (
        <StyledSideBanner className={`${locale}${expanded ? " expanded" : ""}`}>
            <button
                type="button"
                className="hsb-tab"
                style={{ backgroundImage: `url(${SideTabBg})` }}
                onClick={toggle}
                aria-expanded={expanded}
                aria-label={t("halloweenSideTab")}
            >
                <img className="hsb-chevron" src={expanded ? SideChevronOpen : SideChevron} alt="" />
                <span className="hsb-tab-text">{t("halloweenSideTab")}</span>
                <img className="hsb-tab-pumpkin" src={SideTabPumpkin} alt="" />
            </button>

            <div className="hsb-panel" style={{ backgroundImage: `url(${SideBg})` }}>
                <img className="hsb-pumpkins" src={SidePumpkins} alt="" />

                <div className="hsb-logo">
                    <img className="hsb-logo-img" src={SideLogo} alt="AVS4YOU" />
                    <div
                        className="hsb-logo-scanlines"
                        style={{ WebkitMaskImage: `url(${SideLogoScanlineMask})`, maskImage: `url(${SideLogoScanlineMask})` }}
                    />
                    {LOGO_STRIPS.map((strip) => (
                        <div
                            key={strip.top}
                            className="hsb-logo-strip"
                            style={{
                                top: `${strip.top}px`,
                                height: `${strip.height}px`,
                                backgroundImage: `url(${SideLogoSlice})`,
                                backgroundPosition: `${strip.x}px ${strip.y}px`,
                            }}
                        />
                    ))}
                </div>

                <div className="hsb-content">
                    <div className="hsb-copy">
                        <p className="hsb-title">
                            <Trans i18nKey="halloweenSideTitle" components={[<span className="hsb-accent" />]} />
                        </p>
                        <p className="hsb-text">{t("halloweenSideText")}</p>
                    </div>
                    <a className="hsb-button" href={href}>{t("halloweenSideButton")}</a>
                </div>

                <div className="hsb-decor">
                    <img className="hsb-web" src={SideWeb} alt="" />
                    <div className="hsb-bat">
                        <img src={SideBat} alt="" />
                    </div>
                </div>
            </div>
        </StyledSideBanner>
    );
};

HalloweenSideBanner.propTypes = {
    locale: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};

export default HalloweenSideBanner;
