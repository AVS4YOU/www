import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/common/logo.svg';
import facebook from '../../images/common/social/facebook.svg';
import twitter from '../../images/common/social/twitter.svg';
import youtube from '../../images/common/social/youtube.svg';
import pinterest from '../../images/common/social/pinterest.svg';
import Text from '../text';
import Link from '../link'
import FooterItem from '../footer-item';

const FooterGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 1210px;
    margin: auto;
    padding: 0px 15px;
    box-sizing: border-box;

    @media (max-width: 1050px) {
        display: block;
		padding-top: 30px;
    }
`;

const StyledFooter = styled.footer`

    clear: both;
    background: #32393E;
    color: #dbdbdb;
    font-size: 11px;
    height:auto;

    .footerLogoLink{
        display: inline-block;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    .footerSocialLink{
        display: inline-block;
        margin-right: 15px;
        width: 24px;
        height: 24px;
    }

    .footerSocial{
        display: inline-block;
        margin-right: 15px;
        margin-top: 15px;
    }
    .footerSocialIcon{
        width: 24px;
        height: 24px;
    }

    .footerLogo{
        display: block;
    }

    .rights{
        text-align: center;
        padding: 20px;
        color: #8e999f;

        &>a{
            color: #8e999f;
            text-decoration:none;
        }
    }

    .footer-link-text{
        text-align: left;
        text-decoration:none;
        padding-bottom: 12px;
        font-size: 14px;
        color:#ffffff;
    }

`;
class Footer extends React.Component{

    render(){
        return(
            <StyledFooter className="footerStyles">
                <FooterGridContainer>
                    <FooterItem header="Windows Software">
                        <Link to="/avs-video-editor">
                            <Text className="footer-link-text">{this.props.t("Video Editor")}</Text>
                        </Link>
                        <Link to="/avs-free-video-converter">
                            <Text className="footer-link-text">{this.props.t("Video Converter")}</Text>
                        </Link>
                        <Link to="/avs-audio-editor">
                            <Text className="footer-link-text">{this.props.t("Audio Editor")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem header="Partnership">
                        <Link to="/affiliates">
                            <Text className="footer-link-text">{this.props.t("Affiliates")}</Text>
                        </Link>
                        <Link to="/partners">
                            <Text className="footer-link-text">{this.props.t("Resellers")}</Text>
                        </Link>
                        <Link to="/education">
                            <Text className="footer-link-text">{this.props.t("Education")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem header="Help Center">
                        <Link to="/support">
                            <Text className="footer-link-text">{this.props.t("Support form")}</Text>
                        </Link>
                        <a href="https://www.avs4you.com/guides/index.aspx">
                            <Text className="footer-link-text">{this.props.t("Guides")}</Text>
                        </a>
                        <a href="https://onlinehelp.avs4you.com/index.aspx">
                            <Text className="footer-link-text">{this.props.t("Knowledge center")}</Text>
                        </a>
                        <a href="https://support.avs4you.com/faq.aspx">
                            <Text className="footer-link-text">{this.props.t("FAQ")}</Text>
                        </a>
                    </FooterItem>
                    <FooterItem header="Company">
                        <Link to="/about-us">
                            <Text className="footer-link-text">{this.props.t("About AVS4YOU")}</Text>
                        </Link>
                        <a href="https://www.avs4you.com/contact.aspx">
                            <Text className="footer-link-text">{this.props.t("Contact us")}</Text>
                        </a>
                        <a href="https://www.avs4you.com/privacy.aspx">
                            <Text className="footer-link-text">{this.props.t("Privacy")}</Text>
                        </a>
                        <a href="https://www.avs4you.com/license-agreement.aspx">
                            <Text className="footer-link-text">{this.props.t("EULA")}</Text>
                        </a>
                        <a href="https://www.avs4you.com/blog/">
                            <Text className="footer-link-text">{this.props.t("Blog")}</Text>
                        </a>
                    </FooterItem>
                    <div className="footer-links-box last">
                        <Link className="footerLogoLink" to="/">
                            <img src={Logo} className="footerLogo" alt="avs4you logo"/>
                        </Link>
                        <div>
                            <Text fontSize={14} color="#8e999f">Follow Us:</Text>

                            <a className="footerSocial" href="https://www.facebook.com/avs4you">
                                <img src={facebook} className="footerSocialIcon" alt="facebook"/>
                            </a>
                            <a className="footerSocial" href="https://www.youtube.com/user/avs4you">
                                <img src={youtube} className="footerSocialIcon" alt="youtube"/>
                            </a>
                            <a className="footerSocial" href="https://www.twitter.com/avs4you">
                                <img src={twitter} className="footerSocialIcon" alt="twitter"/>
                            </a>
                            <a className="footerSocial" href="https://pinterest.com/avs4you/">
                                <img src={pinterest} className="footerSocialIcon" alt="pinterest"/>
                            </a>
                        </div>
                    </div>
                </FooterGridContainer>
                <div className="rights"><a href="/">© Online Media Technologies Ltd., UK</a> 2020 'All rights reserved'.</div>
            </StyledFooter>
        )
    }
}
  
export default Footer