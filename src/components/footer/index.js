import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/common/logo.svg';
import facebook from '../../images/common/social/facebook.svg';
import twitter from '../../images/common/social/twitter.svg';
import youtube from '../../images/common/social/youtube.svg';
import pinterest from '../../images/common/social/pinterest.svg';
import Text from '../text';
import { Link } from "gatsby";
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
    background: #363f45 ;
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
    }

`;
class Footer extends React.Component{

    render(){
        return(
            <StyledFooter className="footerStyles">
                <FooterGridContainer>
                    <FooterItem >
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Video software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Audio Software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/" : this.props.locale}/`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Free Software")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem >
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Video software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Audio Software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/" : this.props.locale}/`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Free Software")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem >
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Video software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Audio Software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/" : this.props.locale}/`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Free Software")}</Text>
                        </Link>
                    </FooterItem>
                    <FooterItem >
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Video software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/second-page" : this.props.locale}/second-page`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Audio Software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/" : this.props.locale}/`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Free Software")}</Text>
                        </Link>
                        <Link to={`/${this.props.locale === "en" ? "/" : this.props.locale}/`}>
                            <Text className="footer-link-text" fontSize={14} color="#ffffff">{this.props.t("Free Software")}</Text>
                        </Link>
                    </FooterItem>
                    <div className="footer-links-box last">
                        <Link className="footerLogoLink" to={`/${this.props.locale === "en" ? "/" : '/' + this.props.locale}`}>
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
                <div className="rights"><a href="/">© Online Media Technologies Ltd., UK</a> 2019 'All rights reserved'.</div>
            </StyledFooter>
        )
    }
}
  
export default Footer