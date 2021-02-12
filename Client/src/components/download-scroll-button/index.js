import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { Link } from "react-scroll";
import UAParser from 'ua-parser-js';
import Cookies from 'universal-cookie';

const formSended = new Cookies().get("formSended");

const ButtonWrapper = styled.div`

    .mainButton, .desktopButton{
        padding: 16px 40px;
    }

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
    }, [setTouchDevice]);

    return(
        <ButtonWrapper id="downloadButton" touchDevice={touchDevice} className={props.className}>

            {touchDevice 

            ?
                !formSended &&
                    <Link className="scrollLink" to={props.to} spy={true} smooth={true} offset={0} duration={500}>
                        <Button as="div" className="mainButton" color="#fff" textTransform={props.textTransform} backgroundColor="blue">{props.textGetCoupon}</Button>
                    </Link>
            :
                <Button className="desktopButton" href={props.href} color="#fff" textTransform={props.textTransform} backgroundColor="blue">{props.textDownload}</Button>
            }   
        </ButtonWrapper>
    )
}

DownloadScrollButton.defaultProps = {
    textDownload: "download now",
    textGetCoupon: "Get $5 coupon code",
    textTransform: "uppercase"
};

export default DownloadScrollButton;