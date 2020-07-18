import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/installed-video-editor.less";
import ScrollUpButton from '../components/scroll-up-button';

class installedVideoEditor extends React.PureComponent {

render(){

    return (
      <Layout 
        className="installed-video-editor-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS4YOU is the home of ultimate multimedia editing family.
        Learn more about our company, its history, who we are and what we value."
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
          <ImageGQL className="headerBackgroundImage" imageName="installed-video-editor-header.jpg" style={{position: "absolute"}}/>
            <div className="header__body">  <ImageGQL className="installedSuper" imageName="installed-video-editor-super.png" style={{margin: "auto"}}/>
              <Text as="h1" className="header__heading installed">Thank you for installing
            <br/> AVS Video Editor!</Text>
             <table className="header__heading exclusive"><Text as="h2" className="header__heading exclusive"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.85478225.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>Exclusive Offer Only Today</a></Text></table>
              <Text as="h3" className="header__subtitle installed">Save 70% on the full version and edit your audio without limitations!</Text>
              <table className="header__price__block"><Text as="h4" className="header__price">$199</Text>
              <Text as="h4" className="header__new__price">$59.00</Text></table>
              <table className="header__buy"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&CART=1&CARD=1&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&SRC=ThanksInstallation_VE_en&_ga=2.16320382.990617256.1594635509-193195073.1594635509" style={{color: "#fff"}}>Buy now</a></Text></table>
            </div>
        </div>
        <div className="body-company">
          <Text as="h2" className="common__heading">
          Your benefits
          <div className="screenshot">
          <ImageGQL className="screenshotImage" imageName="main-screenshot.jpg" style={{position: "absolute"}}/>
          </div>
          </Text>
        </div>
      
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(installedVideoEditor);
