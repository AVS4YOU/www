import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import Text from '../components/text';
import Layout from "../components/layout";


class avsAudioConverter extends React.PureComponent {

  constructor(props) {
    super(props);
  }

render(){

    return (
      <Layout className="about-us-page" pageContext={this.props.pageContext} t={this.props.t}>
        <div className="Header">
            <Text >About us</Text>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsAudioConverter);
