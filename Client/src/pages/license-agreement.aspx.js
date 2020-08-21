import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Link from "../components/link";
import Layout from "../components/layout";
import "../styles/privacy.less";


const date = new Date();
const currentYear = date.getFullYear();

class Privacy extends React.PureComponent {

  render() {

    return (
      <Layout
        className="privacy"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title=""
        metaDescription=""
        metaKeywords=""
      >

        <div className="body-privacy">
          <Text className="subHeader">{this.props.t("END-USER LICENSE AGREEMENT FOR SOFTWARE PRODUCTS OF ONLINE MEDIA TECHNOLOGIES LTD")}</Text>
          <Text className="body-privacy__text">
            {this.props.t("IMPORTANT READ CAREFULLY This End-User License Agreement is a legal Agreement between you and Online Media Technologies Ltd for the applicable Software Products of Online Media Technologies Ltd Do not copy, install, or use the Software Products provided under this license agreement Agreement, until you have carefully read the following terms and conditions")}
          </Text>
          <Text className="body-privacy__text">
            {this.props.t("Any reproduction or redistribution of Software Products or any of its components not in accordance with the End User License Agreement is expressly prohibited by law, and may result in severe civil and criminal penalties")}
          </Text>
          <Text className="body-privacy__text">
            {this.props.t("Definitions Software Products shall mean and include AVS4YOU Software")}
          </Text>
          <Text className="body-privacy__text">
            {this.props.t("AVS4YOU Software shall mean all of the contents of the files provided either by electronic download, on physical media or any other method of distribution, disks, CD ROMs or other media with which this Agreement is provided which may be found at www avs4 you com")}
          </Text>
          <Text className="body-privacy__text paragraph">
            {this.props.t("AVS4YOU Software is licensed on a per computer basis Each license purchased is bound to one particular computer and allows using AVS4YOU Software on that single computer If you install and use or reinstall AVS4YOU software on any other computers you will have to purchase an additional license for each computer If you change a computer, you will have to purchase an additional license All updates and upgrades for AVS4YOU Software are $0 for a user throughout the period of AVS4YOU license validity")}
          </Text>
          <Text className="body-privacy__text paragraph">{this.props.t("Your rights and obligations with respect to the use of AVS4YOU Software or any of its components are as follows")}</Text>
          <Text className="body-privacy__text paragraph">{this.props.t("You may")}</Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">
            {this.props.t("Install and use one copy of AVS4YOU Software or any of its components and all upgrades and updates on a single computer for any period for which you have purchased a subscription typically 1 year or Unlimited")}
            </Text>
            <Text className="paragraph-text">
              {this.props.t("Make one copy of AVS4YOU Software or any of its components for archival purposes on a storage device or media")}
            </Text>
            <Text className="paragraph-text">
              {this.props.t("Use AVS4YOU Software on a network, provided that you have a licensed copy of AVS4YOU Software for each computer that can access AVS4YOU Software over that network for any period for which you have purchased a subscription typically 1 year or Unlimited")}
              {this.props.t("A license for AVS4YOU Software may not be shared or used concurrently on different computers")}
            </Text>
            <Text className="paragraph-text">{this.props.t("Receive support by e-mail to answer questions and solve problems referred to AVS4YOU Software for any period for which you have purchased a subscription typically 1 year or Unlimited")}</Text>
          </div>
          <Text className="body-privacy__text">
          {this.props.t("You may not")}
          </Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">{this.props.t("Use, copy, modify, or transfer copies of AVS4YOU Software except as provided for in this License")}</Text>
            <Text className="paragraph-text">{this.props.t("Remove any proprietary notices or labels from AVS4YOU Software")}</Text>
            <Text className="paragraph-text">{this.props.t("Reverse engineer, decompile, disassemble or make derivative works based on AVS4YOU Software except and only to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation")}</Text>
            <Text className="paragraph-text">{this.props.t("Rent, lease, sublicense or assign AVS4YOU Software or any copy thereof, including any related documentation")}</Text>
            <Text className="paragraph-text">{this.props.t("Separate AVS4YOU Software component parts for use on more than one computer")}</Text>
            <Text className="paragraph-text">{this.props.t("Distribute the license key in any way")}</Text>
            <Text className="paragraph-text">{this.props.t("Make any attempt to discover the source code of AVS4YOU Software")}</Text>
          </div>


          <Text className="body-privacy__text">
          {this.props.t("NO WARRANTIES")}"
          </Text>
          <Text className="body-privacy__text">
          {this.props.t("Online Media Technologies Ltd expressly disclaims any warranty for AVS4YOU Software")}
          </Text>
          <Text className="body-privacy__text">
          {this.props.t("AVS4YOU SOFTWARE AND ANY RELATED DOCUMENTATION is PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OR MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT")}
          </Text>

          <Text className="body-privacy__text">
          {this.props.t("THE ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF AVS4YOU SOFTWARE REMAINS WITH YOU")}
          </Text>
          <Text className="body-privacy__text paragraph">
          {this.props.t("NO LIABILITY FOR CONSEQUENTIAL DAMAGES")}
          </Text>

          <Text className="body-privacy__text">
          {this.props.t("IN NO EVENT SHALL ONLINE MEDIA TECHNOLOGIES LTD BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS ARISING OUT OF THE USE OR OF INABILITY TO USE AVS4YOU SOFTWARE")}</Text>
          <Text className="body-privacy__text">
          {this.props.t("COPYRIGHT NOTICE Copyright")} {currentYear} {this.props.t("ONLINE MEDIA TECHNOLOGIES LTD, ALL RIGHTS RESERVED")}
          </Text>
          <Text className="body-privacy__text">
          {this.props.t("Any rights not expressly granted herein are reserved")}
          </Text>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Privacy);
