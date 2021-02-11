import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from "react-scroll";
import ScrollUpIcon from '../../images/common/icons/scroll_up.svg';

const ClassToggleStyled = styled.div`

    position:relative;
  
    .test {
        transition: width 0.3s ease-out;
        width: 100px;
        height: 100px;
        background-color: red;
        margin: 0 !important;
        
        &.yellow {
            background-color: yellow;
        }
    }
    .zap {
        width: 100%;
    }
`;

const ScrollUpButton = (props) => (
    <ClassToggleStyled>
        <Controller>
            <Scene duration={0} classToggle="show" triggerHook="onEnter" triggerElement={(props.triggerId && '#', props.triggerId)} indicators={false}>
                {() => (
                    <div className={props.className}>
                        <Link spy={true} smooth={true} offset={0} duration={500} to="___gatsby" className={props.ButtonClassName}>
                            <img src={ScrollUpIcon} alt=""></img>
                        </Link>
                    </div>
                )}
            </Scene>
        </Controller>
    </ClassToggleStyled>
);

export default ScrollUpButton;