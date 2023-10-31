import React from "react";
import styled from "styled-components";
import Link from "../link";
import Text from "../text";
import Logo from "../../images/common/logo.svg";
import facebook from "../../images/common/social/facebook.svg";
import youtube from "../../images/common/social/youtube.svg";
import twitter from "../../images/common/social/twitter.svg";
import pinterest from "../../images/common/social/pinterest.svg";

const FooterWrapper = styled.footer`
  background: #32393E;
  padding: 48px 0;
  border-top: ${props => props.hideLine ? 'none' : '1px solid #555'};
`

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const FooterNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 88px;
  margin: 0;
  padding: 0;
  list-style: none;

  .footer-link-text {
    color: #FFF;
    padding: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: #FFF;
    }
  }
`

const FooterSocialsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterSocialsItem = styled.li``

const FooterDesc = styled.p`
  color: #666;
  text-align: center;
  
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 64px 0 0 0;
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const TinyFooter = (props) => {
    return (
        <FooterWrapper hideLine={props.hideLine}>
            <FooterBox>
                <FooterNavList>
                    <Link to="/about-us.aspx">
                        <Text className="footer-link-text">{props.t("About AVS4YOU")}</Text>
                    </Link>
                    <Link to="/about-us.aspx#contact-us">
                        <Text className="footer-link-text">{props.t("Contact us")}</Text>
                    </Link>
                    <Link to="/privacy.aspx">
                        <Text className="footer-link-text">{props.t("Privacy")}</Text>
                    </Link>
                    <Link to="/license-agreement.aspx">
                        <Text className="footer-link-text">{props.t("EULA")}</Text>
                    </Link>
                    <a href="https://www.avs4you.com/blog/" target="_blank" rel="noreferrer noopener">
                        <Text className="footer-link-text">{props.t("Blog")}</Text>
                    </a>
                </FooterNavList>
                <Link className="footerLogoLink" to="/">
                    <img src={Logo} className="footerLogo" alt="avs4you logo"/>
                </Link>
                <FooterSocialsList>
                    <FooterSocialsItem>
                        <a className="footerSocial" href="https://www.facebook.com/avs4you">
                            <img src={facebook} className="footerSocialIcon" alt="facebook"/>
                        </a>
                    </FooterSocialsItem>
                    <FooterSocialsItem>
                        <a className="footerSocial" href="https://www.youtube.com/user/avs4you">
                            <img src={youtube} className="footerSocialIcon" alt="youtube"/>
                        </a>
                    </FooterSocialsItem>
                    <FooterSocialsItem>
                        <a className="footerSocial" href="https://www.twitter.com/avs4you">
                            <img src={twitter} className="footerSocialIcon" alt="twitter"/>
                        </a>
                    </FooterSocialsItem>
                    <FooterSocialsItem>
                        <a className="footerSocial" href="https://pinterest.com/avs4you/">
                            <img src={pinterest} className="footerSocialIcon" alt="pinterest"/>
                        </a>
                    </FooterSocialsItem>
                </FooterSocialsList>
            </FooterBox>
            <FooterDesc><a href="/">Ascensio System SIA</a> 2023 All rights reserved.</FooterDesc>
        </FooterWrapper>
    )
}
