import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/error404page.less";

import ImageMain from '../images/404/error-unfound-main.svg';

class Error404Page extends React.PureComponent {

render(){

    return (
      <Layout 
        className="error-404-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title=""
        metaDescription=""
        metaKeywords=""
      >
          <div className="bodyWrapper">
            <img className="mainImage" src={ImageMain}/>
            <Text className="common__heading" as="h1">Page not found</Text>
            <Text>Ooops, we could not find this page. It might have been removed or never existed.</Text>
            <div className="yourSteps">
                <Text>Your steps:</Text>
                <Text>Make sure you have entered the link correctly and try again; </Text>
                <Text>Report the issue contacting us at <a href="mailto:info@avs4you.com">info@avs4you.com</a>;</Text>
                <Link className="backToHome" to="/">Back to Home page</Link>
            </div>
          </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Error404Page);
