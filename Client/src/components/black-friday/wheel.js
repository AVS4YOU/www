import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SECTORS } from "./prizes";

import WheelRim from "../../images/black-friday-2026/bf-wheel-rim.svg";
import WheelSpectral from "../../images/black-friday-2026/bf-wheel-spectral.svg";
import WheelLens from "../../images/black-friday-2026/bf-wheel-lens.svg";
import WheelPointer from "../../images/black-friday-2026/bf-wheel-pointer.svg";

// Motion from the Figma prototype ("MOTION SUPPORT / idle loop B" and
// "AVS_blackfriday / SPIN 5.01s / fast start + slow outcome").
const ROTOR_IDLE_DEG_PER_MS = 360 / 12000;
const SPECTRAL_IDLE_DEG_PER_MS = 720 / 12000;
const SPIN_MS = 5010;
const SPIN_EASING = "cubic-bezier(0.15, 0.65, 0.36, 1)";
const SPIN_FULL_TURNS = 7;
const SPECTRAL_SPIN_DEG = 1800;
const SECTOR_DEG = 360 / SECTORS.length;

const mod360 = (angle) => ((angle % 360) + 360) % 360;

// Rotation that brings the sector to the pointer at the top.
const restAngle = (index) => mod360(-index * SECTOR_DEG);

const StyledWheel = styled.div`
position: relative;
flex: none;
width: 640px;
height: 640px;

.bf-rotor,
.bf-spectral,
.bf-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.bf-rotor,
.bf-spectral {
    transform-origin: 50% 50%;
    will-change: transform;
}

.bf-layer {
    display: block;
    max-width: none;
    margin: 0;
    user-select: none;
    pointer-events: none;
}

.bf-sector.is-dimmed {
    opacity: 0.46;
}

.bf-labels {
    overflow: visible;
    filter: drop-shadow(0 1.624px 5.685px rgba(0, 0, 0, 0.46));
}

.bf-label {
    font-family: "Sora", "Open Sans", sans-serif;
    font-size: 29.239px;
    font-weight: 700;
    letter-spacing: -0.3655px;
    fill: #FFFFFF;
}
`;

class Wheel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.rotorRef = React.createRef();
        this.spectralRef = React.createRef();
        this.rotorAngle = 0;
        this.spectralAngle = 0;
        this.frame = null;
        this.spinTimer = null;
        this.reducedMotion = false;
    }

    componentDidMount() {
        this.reducedMotion = typeof window !== "undefined" && window.matchMedia
            && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (this.props.winIndex === null) {
            this.startIdle();
        } else {
            this.showResult(this.props.winIndex);
        }
    }

    componentWillUnmount() {
        this.stopIdle();
        clearTimeout(this.spinTimer);
    }

    applyAngles() {
        if (this.rotorRef.current) this.rotorRef.current.style.transform = `rotate(${this.rotorAngle}deg)`;
        if (this.spectralRef.current) this.spectralRef.current.style.transform = `rotate(${this.spectralAngle}deg)`;
    }

    setTransition(value) {
        if (this.rotorRef.current) this.rotorRef.current.style.transition = value;
        if (this.spectralRef.current) this.spectralRef.current.style.transition = value;
    }

    startIdle() {
        if (this.reducedMotion || this.frame !== null) return;
        let last = null;
        const step = (now) => {
            // A hidden tab pauses requestAnimationFrame; do not jump after it comes back.
            const elapsed = last === null ? 0 : Math.min(now - last, 100);
            last = now;
            this.rotorAngle = mod360(this.rotorAngle + elapsed * ROTOR_IDLE_DEG_PER_MS);
            this.spectralAngle = mod360(this.spectralAngle + elapsed * SPECTRAL_IDLE_DEG_PER_MS);
            this.applyAngles();
            this.frame = requestAnimationFrame(step);
        };
        this.frame = requestAnimationFrame(step);
    }

    stopIdle() {
        if (this.frame !== null) {
            cancelAnimationFrame(this.frame);
            this.frame = null;
        }
    }

    // False when the visitor asked for reduced motion: the wheel then jumps to the result.
    isAnimated() {
        return !this.reducedMotion;
    }

    // Spins the wheel so that the sector stops under the pointer, then calls onDone.
    spin(index, onDone) {
        this.stopIdle();
        clearTimeout(this.spinTimer);

        const targetAngle = this.rotorAngle + SPIN_FULL_TURNS * 360 + mod360(restAngle(index) - this.rotorAngle);
        const targetSpectral = this.spectralAngle + SPECTRAL_SPIN_DEG;
        const finish = () => {
            this.setTransition("none");
            this.rotorAngle = mod360(targetAngle);
            this.spectralAngle = mod360(targetSpectral);
            this.applyAngles();
            onDone();
        };

        if (this.reducedMotion) {
            finish();
            return;
        }

        this.setTransition(`transform ${SPIN_MS}ms ${SPIN_EASING}`);
        // Flush styles so the transition starts from the current idle angle.
        if (this.rotorRef.current) void this.rotorRef.current.offsetWidth;
        this.rotorAngle = targetAngle;
        this.spectralAngle = targetSpectral;
        this.applyAngles();
        this.spinTimer = setTimeout(finish, SPIN_MS);
    }

    // Puts the wheel at the result position at once (a spin made earlier today).
    showResult(index) {
        this.stopIdle();
        this.setTransition("none");
        this.rotorAngle = restAngle(index);
        this.spectralAngle = 0;
        this.applyAngles();
    }

    render() {
        const { className, winIndex, t } = this.props;
        const hasResult = winIndex !== null;

        return (
            <StyledWheel className={className} aria-hidden="true">
                <div className="bf-rotor" ref={this.rotorRef}>
                    <img className="bf-layer" src={WheelRim} alt="" />
                    {SECTORS.map((sector, i) => (
                        <img
                            key={sector.id}
                            className={`bf-layer bf-sector${hasResult && i !== winIndex ? " is-dimmed" : ""}`}
                            src={hasResult && i === winIndex ? sector.winImage : sector.image}
                            alt=""
                        />
                    ))}
                    <svg className="bf-layer bf-labels" viewBox="0 0 640 640" focusable="false">
                        {SECTORS.map((sector, i) => (
                            <text
                                key={sector.id}
                                className="bf-label"
                                transform={`rotate(${-90 + i * SECTOR_DEG} 320 320)`}
                                x={320 + sector.labelRadius}
                                y={320}
                                textAnchor="middle"
                                dominantBaseline="central"
                            >
                                {sector.kind === "mystery" ? t("Mystery") : sector.label}
                            </text>
                        ))}
                    </svg>
                </div>
                <div className="bf-spectral" ref={this.spectralRef}>
                    <img className="bf-layer" src={WheelSpectral} alt="" />
                </div>
                <img className="bf-layer" src={WheelLens} alt="" />
                <img className="bf-layer" src={WheelPointer} alt="" />
            </StyledWheel>
        );
    }
}

Wheel.propTypes = {
    className: PropTypes.string,
    winIndex: PropTypes.number,
    t: PropTypes.func.isRequired,
};

Wheel.defaultProps = {
    winIndex: null,
};

export default Wheel;
