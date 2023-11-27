import React from "react";
import withI18next from "../components/withI18next";
import Layout from "../components/layout";
import "../styles/affiliates.less";
import { AffiliatesPage } from '../containers/affiliates-content';
import { AffiliatesNew } from '../containers/affiliates-content-new';


const lang = ['en']

const isSomeLang = (currentLang) => {
    let isSomeLang = false;
    for(let i = 0; i<lang.length; i++) {
        if(lang[i] === currentLang) isSomeLang = true;
    }

    return isSomeLang;
}

class Affiliates extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      device: "",
      isModalOpen: false,
      isInnerModalOpen: false,
      hrefButton: this.props.t("hrefButtonEasterButtonAffiliates")
     };

    this.getDevice = this.getDevice.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this); 

  }

  getDevice(device){
    this.setState({ device: device });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  


render(){

    return (
      <Layout 
        className="affiliates" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("Earn money with the affiliate program AVS4YOU")}
        metaDescription={this.props.t("AVS4YOU affiliate program earn money with Links")}
        metaKeywords=""
      >
         {isSomeLang(this.props.locale)
          ? <AffiliatesNew t={this.props.t} locale={this.props.locale} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} hrefButton={this.state.hrefButton} /> 
          : <AffiliatesPage t={this.props.t} locale={this.props.locale} openModal={this.openModal} closeModal={this.closeModal} isModalOpen={this.state.isModalOpen} hrefButton={this.state.hrefButton} />
        }
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Affiliates);
