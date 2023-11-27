import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/installed-video-remaker.less";
import BenefitsCarousel from '../components/benefits-carousel';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled, {createGlobalStyle} from 'styled-components';
import Cookies from 'universal-cookie';

const shareItHrefUnlim = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1";
const regExp = /=regnow:(.*):/;
const LogoWrapper = styled.div`
    width: 69px;
    height: 60px;
    display: table;
    &>img{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`;
const FixStyles = createGlobalStyle`
    .fix-style1 {
      padding-top: 0 !important;
    }
`

const InstalledAudioConverterLink = styled.a`
  background-color: #38add8;
  color: #fff;
  text-decoration: none;
  padding: 6px 18px;
  margin: auto;
  font-size: 17px;
  letter-spacing: 1.5px;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`

const InstalledAudioConverterButNow = styled.a`
  background-color: #38add8;
  color: #fff;
  text-decoration: none;
  padding: 12px 50px 12px;
  border-radius: 5px;
  margin: auto;
  letter-spacing: 1.5px;

  font-size: 22px;
  text-transform: uppercase;
  font-weight: 100;

  &:hover {
    text-decoration: none;
  }
`

const InstalledAudioConverterDownloadNow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
  background-color: #38add8;
  width: 100%;
  height: 48px;
  text-align: center;
  white-space: nowrap;
`

class installedVideoRemaker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.affiliateID = "";
    this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

    if(this.siteTrasingCookie){
        this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
    };

    this.state = {
        hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim") + `&SRC=ThanksInstallation_VR_${this.props.t("en")}`,
        documentLoaded: false,
      };
  }

  componentDidMount(){
    this.setState({
     documentLoaded: true
   })
  }

render(){
    return (
      <Layout 
        headerIsDisabled={true}
        className="installed-video-remaker-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video, audio, image")}
        metaDescription=""
        metaKeywords=""
      >
        <FixStyles />
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="installed-video-editor-header.jpg" style={{position: "absolute"}}/>
            <div className="header__body">  
            <div className="avs-logo">
          <GatsbyLink className="headerLogo" to="/">
              <LogoWrapper href="/">
                  <img src={Logo} alt="avs4you logo"/>
              </LogoWrapper>
          </GatsbyLink>
          </div>
            <ImageGQL className="installedSuper" imageName="installed-video-editor-super.png" style={{margin: "auto"}}/>
              <Text as="h1" className="header__heading installed">{this.props.t("Thank you for installing AVS Video ReMaker")} <br /> {this.props.t("AVS video remaker")}</Text>
              <table style={{margin: '0 auto'}}>
                <InstalledAudioConverterLink href={this.props.t(`${this.state.hrefUnlim}`)}>
                  {this.props.t("Exclusive Offer Only Today")}
                </InstalledAudioConverterLink>
              </table>
              <Text as="h3" className="header__subtitle installed" style={{maxWidth:700 + 'px'}}>{this.props.t("Save 70 on the full version and edit your video without limitations")}</Text>
              <table className="header__price__block"><Text as="h4" className="header__price">{this.props.t("199")}</Text>
              <Text as="h4" className="header__new__price">{this.props.t("590")}</Text></table>
              <table style={{margin: '0 auto'}}>
                <InstalledAudioConverterButNow href={this.props.t(`${this.state.hrefUnlim}`)}>
                  {this.props.t("Buy now")}
                </InstalledAudioConverterButNow>
              </table>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">{this.props.t("Your benefits")}</Text>
          <BenefitsCarousel className="benefitsCarousel">
            <div className="carouselItem unlimited">
              <Text>{this.props.t("Unlimited access to the program")}</Text>
            </div>
            <div  className="carouselItem free">
              <Text>{this.props.t("Free upgrades")}</Text>
            </div>
            <div  className="carouselItem noWatermark">
              <Text>{this.props.t("No watermark")}</Text>
            </div>
            <div  className="carouselItem support">
              <Text>{this.props.t("Free technical support")}</Text>
            </div>
            <div  className="carouselItem secure">
              <Text>{this.props.t("100% secure adfree virusfree")}</Text>
            </div>
          </BenefitsCarousel>

          <div className="screenshotImageBlock"></div>

      </div>

        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
            + {this.props.t("Get 4 professional multimedia programs as a gift")}
            </Text>
            <div className="contact-body__wrapper">

              <div className="common-info-block">
              <div className="gift">{this.props.t("Gift")}</div>
                <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe">{this.props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                <Text as="h4" className="common-info-block__headline">
                AVS Video Converter
                </Text>
                <Text className="common-info-block__text">
                {this.props.t("Allinone video converter with basic video editing features")}
                </Text>
              </div>

              <div className="common-info-block">
              <div className="gift">{this.props.t("Gift")}</div>
              <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" style={{color: "#fff"}}>{this.props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                <Text as="h4" className="common-info-block__headline">
                AVS Video Editor
                </Text>
                <Text className="common-info-block__text">
                {this.props.t("Professional fullfeatured video editor for making high quality videos just in minutes")}
                </Text>
              </div>

              <div className="common-info-block">
                <div className="gift">{this.props.t("Gift")}</div>
                <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe">{this.props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                <Text as="h4" className="common-info-block__headline">
                AVS Audio Editor
                </Text>
                <Text className="common-info-block__text">
                {this.props.t("Professional level audio editing and recording software for Windows")}
                </Text>
              </div>

              <div className="common-info-block">
              <div className="gift">{this.props.t("Gift")}</div>
                <div className="download-product fix-style1"><InstalledAudioConverterDownloadNow href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe">{this.props.t("Download now")}</InstalledAudioConverterDownloadNow></div>
                <Text as="h4" className="common-info-block__headline">
                AVS Audio Converter
                </Text>
                <Text className="common-info-block__text">
                {this.props.t("A multiformat audio conversion application with basic audio editing tools")}
                </Text>
              </div>
                </div>
          </div>
        </div>

        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">{this.props.t("Helpful resources")}</div>
<div className="knowledge"><div className="knowledgeIcon"><a href="https://onlinehelp.avs4you.com/avs-video-remaker/" style={{color: "#393939"}}>{this.props.t("Knowledge center")}</a></div>
<div className="tipsIcon"><a href="https://www.avs4you.com/guides/video.aspx" style={{color: "#393939"}}>{this.props.t("Tips tricks")}</a></div>
<div className="questionIcon">{this.props.t("Got a question")}
<br/>{this.props.t("Contact our")} <a href="https://support.avs4you.com/login.aspx?_ga=2.17915129.1345987683.1595154508-193195073.1594635509" style={{color: "#393939"}}>{this.props.t("support team")}</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedVideoRemaker);
