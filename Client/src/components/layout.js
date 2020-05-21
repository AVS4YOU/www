/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from "prop-types";
import Header from "./header";
import styled from 'styled-components';
import "./layout.css";
import "../styles/common.less"
import Footer from "./footer";
import {PageContext} from '../context/page-context';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const StyledLayout = styled.div`
  min-width: 300px;
`;

const languageCodes = [
  "en-US",
  "de-DE",
  "fr-FR",
  "es-ES",
  "it-IT",
  "ja-JP",
  "nl-NL",
  "pl-PL",
  "da-DK",
  "pt-BR",
  "ru-RU"
];

class Layout extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isTablet: false,
      isMobile: false
    }

    this.pageName = this.props.pageContext.originalPath.replace(/\//g, '');
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
      this.updateWindowDimensions();

      if(this.props.getDevice){

        if(this.state.isMobile == true) {
          this.props.getDevice("Mobile");
        } else if (this.state.isTablet == true) {
          this.props.getDevice("Tablet");
        } else {
          this.props.getDevice("Desktop");
        }
      }
      
      window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
      this.setState({
          isTablet: window.innerWidth < 1050,
          isMobile: window.innerWidth < 750
      })
  }

  componentDidUpdate(){

    if(this.props.getDevice){

      if(this.state.isMobile == true) {
        this.props.getDevice("Mobile");
      } else if (this.state.isTablet == true) {
        this.props.getDevice("Tablet");
      } else {
        this.props.getDevice("Desktop");
      }
    }
  }

  render(){
    return ( 
      <PageContext.Provider value={this.props.pageContext}>
        <Helmet>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, min-width=330"></meta>  
          {this.props.metaDescription && <meta name="description" content={this.props.metaDescription} />}
          {this.props.metaKeywords && <meta name="keywords" content={this.props.metaKeywords} />}
          {this.props.pageContext.originalPath}

          <link rel="canonical" href={"https://www.avs4you.com/" + this.pageName}></link>
          <script src="https://secure.avangate.com/content/check_affiliate_v2.js"></script>
          {languageCodes.map((languageCode)=> {
            let language = languageCode.split("-")[0];
            language = language === "en" ? "" : language + "/";
            return(
              <link rel="alternate" href={"https://www.avs4you.com/" + language + this.pageName} hreflang={languageCode}></link>
            )
          })}

          <script>
            {`
              (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); 
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; 
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
              f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-WMB2TZX');
            `}
          </script>

          <script src={withPrefix('impact-write-cookie.js')} type="text/javascript" />
        </Helmet>
        <Header availableLocales={this.props.pageContext.availableLocales} locale={this.props.pageContext.locale} t={this.props.t}/>
        <StyledLayout className={this.props.className}>
          <main>{this.props.children}</main>
        </StyledLayout>
        <Footer t={this.props.t}/>
      </PageContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: "",
  metaDescription: "",
  metaKeywords: "",
}

export default Layout