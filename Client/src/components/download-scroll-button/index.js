import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../button';
import AvsLink from '../link';
import { Link } from "react-scroll";
import UAParser from 'ua-parser-js';
import Cookies from 'universal-cookie';
import Text from '../text';

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
    console.log(props.id)
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
                    <Link className="scrollLink" to={props.to} spy={true} smooth={true} offset={0} duration={500} id={props.id}>
                        <Button as="div" className="mainButton" color="#fff" textTransform={props.textTransform} backgroundColor="blue">{props.textGetCoupon}</Button>
                    </Link>
            :
                <div>
                    <Button id={props.id} className="desktopButton" href={props.href} color="#fff" textTransform={props.textTransform} backgroundColor="blue">{props.textDownload}</Button>
                    {props.idLink && props.toLink &&
                    <div className="licenseText">
                        <Text align="center" color="#110C0C" fontSize={13}>{props.textClicking} <AvsLink id={props.idLink} to={props.toLink}>{props.textLink}</AvsLink></Text>
                    </div>
                    }
                </div>
            }   
        </ButtonWrapper>
    )
}

DownloadScrollButton.defaultProps = {
    textDownload: "download now",
    textGetCoupon: "Get $5 coupon code",
    textClicking: "By clicking the Download button you agree to",
    textLink: "our End User License Agreement",
    textTransform: "uppercase"
};

export default DownloadScrollButton;
