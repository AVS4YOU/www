import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/installed-video-converter.less";
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import ScreenshotsCarousel from '../components/screenshot-carousel';

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

class installedVideoConverter extends React.PureComponent {

  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.affiliateID = "";
    this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

    if(this.siteTrasingCookie){
        this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
    };

    this.state = {
        hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim") + `&SRC=ThanksInstallation_VC_${this.props.t("en")}`,
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
        headerIsDisabled={false}
        className="installed-video-converter-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video, audio, image")}
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
        <div className="header_image"></div>
            <div className="header__body">
              <Text className="installed_special_offer">{this.props.t("Special offer")}</Text>
              <Text as="h1" className="header__heading installed">{this.props.t("Thank you for installing AVS Video Converter")} <br /> {this.props.t("AVS video converter")}</Text>
              <Text as="h3" className="header__subtitle installed">{this.props.t("Save 70 on the full version and")} <br /> <div className="plus-header">{this.props.t("+")}</div> {this.props.t("Get 4 professional multimedia")} <br /> <div className="plus-header">{this.props.t("+")}</div> {this.props.t("free support")}</Text>
              <table className="header__price__block"><Text as="h4" className="header__price">{this.props.t("199")}</Text>
              <Text as="h4" className="header__new__price">{this.props.t("59")}</Text></table>
              <table className="header__buy"><Text as="h2" className="header__buy__now"><a href={this.props.t(`${this.state.hrefUnlim}`)} style={{color: "#fff"}}>{this.props.t("Buy now")}</a></Text></table>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">{this.props.t("Your benefits")}</Text>
          <div className="benefitsCarousel">
          <div className="carouselItem package">
              <Text>{this.props.t("5 multimedia programs in 1 package")}</Text>
            </div>
            <div className="carouselItem unlimited">
              <Text>{this.props.t("Unlimited access to the program")}</Text>
            </div>
            <div  className="carouselItem noWatermark">
              <Text>{this.props.t("No watermark")}</Text>
            </div>
            <div  className="carouselItem free">
              <Text>{this.props.t("Free upgrades")}</Text>
            </div>
            <div className="carouselItem secure">
              <Text>{this.props.t("100% secure, ad-free, virus-free")}</Text>
            </div>

          </div>
        </div>

          <div className="installed-carousel">
            <ScreenshotsCarousel
              maxWidth={734}
              maxWidthPopup={734}
              titleImage={[this.props.t("AVS Video Converter"), this.props.t("AVS Video Editor"), this.props.t("AVS Video ReMaker"), this.props.t("AVS Audio Editor"), this.props.t("AVS Audio Converter")]}
              descriptionImage={[this.props.t("Easily convert videos"), this.props.t("Make your home videos"), this.props.t("Edit video files"), this.props.t("Enhance your audio"), this.props.t("Convert your audio")]}
              imageNames={[this.props.t("video converter edit your videos jpg"), this.props.t("video editor slider2 jpg"), this.props.t("video remaker edit video files min jpg"), this.props.t("audio editor edit all key jpg"), this.props.t("audio converter bath jpg")]}
              imageNamesPopup={[this.props.t("video converter edit your videos jpg"), this.props.t("video editor slider2 jpg"), this.props.t("video remaker edit video files min jpg"), this.props.t("audio editor edit all key jpg"), this.props.t("audio converter bath jpg")]}
              altText={["slideCarousel1", "slideCarousel2", "slideCarousel3"]}
            />
          </div>

        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">{this.props.t("Helpful resources")}</div>
<div className="knowledge">
  <div className="helpful-block"><div className="blue-bg-helpful"><div className="knowledgeIcon"></div></div><a href="https://onlinehelp.avs4you.com/avs-video-converter/" style={{color: "#016FD0"}}>{this.props.t("Knowledge center")}</a></div>
  <div className="helpful-block"><div className="blue-bg-helpful"><div className="tipsIcon"></div></div><a href="https://www.avs4you.com/guides/video.aspx" style={{color: "#016FD0"}}>{this.props.t("Tips tricks")}</a></div>
  <div className="helpful-block"><div className="blue-bg-helpful"><div className="questionIcon"></div></div><a href="https://support.avs4you.com/login.aspx?_ga=2.17915129.1345987683.1595154508-193195073.1594635509" style={{color: "#016FD0"}}>{this.props.t("Got a question")} {this.props.t("Contact our")} {this.props.t("support team")}</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedVideoConverter);