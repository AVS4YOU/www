import React from 'react';
import CookieConsent, { Cookies } from "react-cookie-consent";
import styled from 'styled-components';
import Text from '../text';
import Link from '../link';

const CookieStyle = styled.div`
    a{
        color: #E5B874;
        cursor: pointer;
        text-decoration: underline;
    }
    .CookieText{
        color: #fff;
        font-size: 18px;
    }
`;

const CookieMessange = props => {
    return(
        <CookieStyle>
            <CookieConsent
                buttonText="I Agree"
                cookieName="UsersCookieMessages"
                className="AVSCookieMessages"
                style={{
                    backgroundColor: "#32393e",
                    textAlign: "center",
                }}
                buttonStyle={{
                    background: "#1373E2",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bolder",
                    padding: "10px 35px",
                }}
                >
                <Text className="CookieText">This site uses cookies. By continuing to browse the site you agree to our {" "} 
                <Link to="/privacy.aspx">privacy policy</Link>.</Text>
            </CookieConsent>
        </CookieStyle>
    )
}

export default CookieMessange;