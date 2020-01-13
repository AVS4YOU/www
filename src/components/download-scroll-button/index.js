import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Button from '../button';
import Text from '../text';
import { Link } from "react-scroll";
import UAParser from 'ua-parser-js';

const desktopStyles = css`
    .desktopButton{
        display:block;
    }

    .scrollLink{
        display:none;
    }
`;

const mobileStyles = css`
    .desktopButton{
        display:none;
    }

    .scrollLink{
        display:block;
    }
`;

const ButtonWrapper = styled.div`
    ${props => props.touchDevice ? mobileStyles : desktopStyles}

    @media (max-width: 550px) {
        .mainButton, .desktopButton{
            padding: 10px 30px;
        }
    }
`;

const DownloadScrollButton = (props) => {

    const [touchDevice, setTouchDevice] = useState(false);

    useEffect(() => {
        var parser = new UAParser();
        var result = parser.getResult();
        setTouchDevice(result.device.type === "mobile" || result.device.type === "tablet");
    });

    return(
        <ButtonWrapper id="downloadButton" touchDevice={touchDevice} className={props.className}>
            <Button className="desktopButton" href={props.href} color="#fff" padding="16px 40px" textTransform="uppercase" backgroundColor="blue">download now</Button>

            <Link className="scrollLink" to={props.to} spy={true} smooth={true} offset={0} duration={500}>
                <Button as="div" className="mainButton" color="#fff" padding="16px 40px" textTransform="uppercase" backgroundColor="blue">GET $5 COUPON CODE</Button>
            </Link>
        </ButtonWrapper>
    )
}

export default DownloadScrollButton;