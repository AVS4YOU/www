import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/uninstall-offer.less";
import Link from '../components/link';
import Cookies from 'universal-cookie';

const shareItHrefUnlim = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1";
const regExp = /=regnow:(.*):/;


class uninstallOffer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.affiliateID = "";
    this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

    if(this.siteTrasingCookie){
        this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
    };

    this.state = {
        hrefGetIt: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("getItHref") + `&SRC=Uninstall_${this.props.t("en")}`,
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
        className="uninstall-offer-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU is the home of ultimate multimedia editing family learn more")}
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
          
            <div className="header__body">
              <Text as="h1" className="header__heading installed"><span className="installedBig">{this.props.t("Wait")}</span> {this.props.t("Before you uninstall")} </Text>
              <Text as="h2" className="header__heading get">{this.props.t("Get AVS4YOU Unlimited Subscription at a special price")} </Text>

                <div className="landing-block"><div className="landing-one-offer-block"><div className="old_price_container">{this.props.t("Old price")}</div><Text className="text-landing-box-gray">{this.props.t("AVS4YOU Unlimited Subscription")}</Text>
                <div className="after-text-box"></div>
                <Text className="text-info-landing-box-gray">{this.props.t("Time-limited offer")}</Text>
                <Text className="header__old__price">{this.props.t("$59/00")}</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now"><a href={this.props.t(`${this.state.hrefGetIt}`)} style={{color: "#fff"}}>{this.props.t("Buy")}</a></Text></table>
                </div>
                <div className="landing-two-offer-block"><Text as="h3" className="text-landing-box">{this.props.t("AVS4YOU Unlimited Subscription")}</Text>
                <div className="after-text-box"></div>
                <Text as="h4" className="text-info-landing-box">{this.props.t("24-hour exclusive offer")}</Text>
                <Text as="h4" className="header__new__price">{this.props.t("29/00")}</Text>
                <table className="header__buy"><Text as="h2" className="header__buy__now"><a href={this.props.t(`${this.state.hrefGetIt}`)} style={{color: "#fff"}}>{this.props.t("Get It Now")}</a></Text></table></div></div>
            </div>
        </div>

        <div className="contact-body">
          <div className="contact-body__max-width">
            <Text as="h2" className="common__heading">
            {this.props.t("Your major benefits")}
            </Text>
            <div className="contact-body__wrapper">
                </div>
          </div>
        </div>

        <div className="ubc-benefits" style={{margin: "auto"}}>
            <div className="ubc-row">
                <div className="ub-box">
                <div className="save-price"></div>
                {this.props.t("an extra 50% saving of the original price")}
            </div>
            <div className="ub-box">
                <div className="prof-tools"></div>
                {this.props.t("unlimited access to 5 professional multimedia tools")}
            </div>
            <div className="ub-box">
                <div class="free-upgrades"></div>
                {this.props.t("free upgrades")}
            </div>
            </div>
            <div className="ubc-row">
                <div className="ub-box">
                <div className="tech-support"></div>
                {this.props.t("free technical support")}
            </div>
            <div className="ub-box">
                <div className="secure-software"></div>
                {this.props.t("100% secure, ad-free, virus-free software")}
            </div>
            <div className="ub-box">
                <div class="money-back-guarant"></div>
                <Link to="/moneyback.aspx">
                  {this.props.t("30- day Money-back guarantee")}
                </Link>
            </div>
            </div>
            <table className="header__buy__orange"><Text as="h2" className="header__buy__orange__now"><a href={this.props.t("getItHref")} style={{color: "#fff"}}>{this.props.t("Get It Now")}</a></Text></table>
        </div>

        <Text as="h2" className="common__heading__with">
            {this.props.t("With AVS4YOU you can")}
            </Text>

            <div className="uninstall-you-can-container">
          <div className="youCan"> <ImageGQL className="youCanBackgroundImage" imageName="screens.png" style={{position: "absolute"}}/> 
                <li><span>{this.props.t("Make stunning videos, slideshows, video projects and presentations")}</span></li>
                <li><span>{this.props.t("Convert, compress video and audio files without quality loss")}</span></li>
                <li><span>{this.props.t("Capture screen, transfer video from cameras")}</span></li>
                <li><span>{this.props.t("Polish your video footage using a variety of handy tools")}</span></li>
                <li><span>{this.props.t("Record your voice, remove noise and enhance audio recordings")}</span></li>
                <li><span>{this.props.t("Create audiobooks and your own ringtones")}</span></li>
                <li><span>{this.props.t("Burn to CD/DVD/Blu-ray discs, add metadata")}</span></li>
                <li><span>{this.props.t("Play media files, create personal playlists and more useful features")}.</span></li>
    </div>
    </div>


        <div className="resourcesTable" style={{margin: "auto"}}> 
<div className="helpful">{this.props.t("Helpful resources")}</div>
<div className="knowledge"><div className="knowledgeIcon"><a href={this.props.t("header_onlinehelp_avs4you")} style={{color: "#393939"}}>{this.props.t("Knowledge center")}</a></div>
<div className="tipsIcon"><a href={this.props.t("header_avs4you_guides")} style={{color: "#393939"}}>{this.props.t("Tips tricks")}</a></div>
<div className="questionIcon">{this.props.t("Got a question")}
<br/>{this.props.t("Contact our")} <a href={this.props.t("header_support_avs4you")} style={{color: "#393939"}}>{this.props.t("support team")}</a> </div>
</div>
</div>
</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(uninstallOffer);
