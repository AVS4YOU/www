import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import ImageGQL from "../components/image-gql";
import "../styles/installed-audio-converter.less";
import BenefitsCarousel from '../components/benefits-carousel';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import ScreenshotsCarousel from '../components/screenshot-carousel';

import { InstalledAudioConverterCommonContent } from '../containers/installed-audio-converter-common-content';
import { InstalledAudioConverterOtherContent } from '../containers/installed-audio-converter-other-content';

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

const lang = ['de','en','es','fr','it','jp']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

class installedAudioConverter extends React.PureComponent {

  constructor(props) {
    super(props);
    this.cookies = new Cookies();

    this.affiliateID = "";
    this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

    if(this.siteTrasingCookie){
        this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
    };

    this.state = {
        hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim") + `&SRC=ThanksInstallation_AC_${this.props.t("en")}`,
        documentLoaded: false,
      };
  }

  componentDidMount(){  
    this.setState({
     documentLoaded: true
   })
  }

render(){
    console.log(this.props.locale)
    return (
      <Layout 
        headerIsDisabled={true}
        className="installed-audio-converter-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video, audio, image")}
        metaDescription=""
        metaKeywords=""
      >
        {isSomeLang(this.props.locale)
          ? <InstalledAudioConverterOtherContent t={this.props.t} hrefUnlim={this.state.hrefUnlim}/> 
          : <InstalledAudioConverterCommonContent t={this.props.t} hrefUnlim={this.state.hrefUnlim}/>
        }
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedAudioConverter);