import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/common/logo.svg';
import facebook from '../../images/common/social/facebook.svg';
import twitter from '../../images/common/social/twitter.svg';
import youtube from '../../images/common/social/youtube.svg';
import pinterest from '../../images/common/social/pinterest.svg';
import Text from '../text';
import Link from '../link';
import FooterItem from '../footer-item';

const FooterGridContainer = styled.div`
    display: table;
    width: 100%;
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
    width: 100%;
    display: block;
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
        font-size: 14px;

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

        &:hover{
            text-decoration: underline;
        }
    }

`;

const date = new Date();
const currentYear = date.getFullYear();

class Footer extends React.Component{

    render(){
        return(
            <StyledFooter className="footerStyles">
                <FooterGridContainer>
                    <FooterItem header={this.props.t("Windows Software")}>
                        <Link to="/avs-video-editor.aspx" id="video-editor_footer">
                            <Text className="footer-link-text">{this.props.t("Video Editor")}</Text>
                        </Link>
                        <Link to="/avs-free-video-converter.aspx" id="video-converter_footer">
                            <Text className="footer-link-text">{this.props.t("Video Converter")}</Text>
                        </Link>
                        <Link to="/avs-audio-editor.aspx" id="audio-editor_footer">
                            <Text className="footer-link-text">{this.props.t("Audio Editor")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem header={this.props.t("Partnership")}>
                        <Link to="/affiliates.aspx" id="affiliates_footer">
                            <Text className="footer-link-text">{this.props.t("Affiliates")}</Text>
                        </Link>
                        <Link to="/partners.aspx" id="resellers_footer">
                            <Text className="footer-link-text">{this.props.t("Resellers")}</Text>
                        </Link>
                        <Link to="/education.aspx" id="education_footer">
                            <Text className="footer-link-text">{this.props.t("Education")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem header={this.props.t("Help Center")}>
                        <a href={this.props.t("support avs4you")} id="support-form_footer" target="_blank" rel="noreferrer noopener">
                            <Text className="footer-link-text">{this.props.t("Support form")}</Text>
                        </a>
                        <a href={this.props.t("avs4you guides index")} id="guides_footer" target="_blank" rel="noreferrer noopener">
                            <Text className="footer-link-text">{this.props.t("Guides")}</Text>
                        </a>
                        <a href={this.props.t("onlinehelp avs4you index")} id="knowledge-center_footer" target="_blank" rel="noreferrer noopener">
                            <Text className="footer-link-text">{this.props.t("Knowledge center")}</Text>
                        </a>
                        <a href={this.props.t("support avs4you faq")} id="faq_footer" target="_blank" rel="noreferrer noopener">
                            <Text className="footer-link-text">{this.props.t("FAQ")}</Text>
                        </a>
                    </FooterItem>
                    <FooterItem header={this.props.t("Company")}>
                        <Link to="/about-us.aspx" id="about-avs4your_footer">
                            <Text className="footer-link-text">{this.props.t("About AVS4YOU")}</Text>
                        </Link>
                        <Link to="/about-us.aspx#contact-us" id="contact-us_footer">
                            <Text className="footer-link-text">{this.props.t("Contact us")}</Text>
                        </Link>
                        <Link to="/privacy.aspx" id="privacy_footer">
                            <Text className="footer-link-text">{this.props.t("Privacy")}</Text>
                        </Link>
                        <Link to="/license-agreement.aspx" id="eula_footer">
                            <Text className="footer-link-text">{this.props.t("EULA")}</Text>
                        </Link>
                        <a href="https://www.avs4you.com/blog/" id="blog_footer" target="_blank" rel="noreferrer noopener">
                            <Text className="footer-link-text">{this.props.t("Blog")}</Text>
                        </a>
                    </FooterItem>
                    <div className="footer-links-box last">
                        <Link className="footerLogoLink" to="/" id="main_footer">
                            <img src={Logo} className="footerLogo" alt="avs4you logo"/>
                        </Link>
                        <div>
                            <Text fontSize={14} color="#8e999f">{this.props.t("Follow Us:")}</Text>

                            <a className="footerSocial" href="https://www.facebook.com/avs4you" id="facebook_footer">
                                <img src={facebook} className="footerSocialIcon" alt="facebook"/>
                            </a>
                            <a className="footerSocial" href="https://www.youtube.com/user/avs4you" id="youtube_footer">
                                <img src={youtube} className="footerSocialIcon" alt="youtube"/>
                            </a>
                            <a className="footerSocial" href="https://www.twitter.com/avs4you" id="twitter_footer">
                                <img src={twitter} className="footerSocialIcon" alt="twitter"/>
                            </a>
                            <a className="footerSocial" href="https://pinterest.com/avs4you/" id="pinterest_footer">
                                <img src={pinterest} className="footerSocialIcon" alt="pinterest"/>
                            </a>
                        </div>
                    </div>
                </FooterGridContainer>
                <Text className="rights"><Link to="/">{this.props.t("Ascensio System SIA")}</Link> {currentYear} {this.props.t("All rights reserved")}</Text>
            </StyledFooter>
        )
    }
}
  
export default Footer
