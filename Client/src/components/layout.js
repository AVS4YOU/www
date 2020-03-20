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
import {PageContext} from '../context/page-context'

const StyledLayout = styled.div`

  .flagBackground{
    background-color: #FDA050;
    margin-left: 15px;
    padding: 4px 20px;
    font-size: 13px;
    position: relative;
    top: 0px;
    color: #fff;
    padding-right: 30px;

    &:after{
        content: '';
        background-color: transparent;
        border: 13px solid transparent;
        border-right: 13px solid #fff;
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
    }
  }
`;


class Layout extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isTablet: false,
      isMobile: false
    }

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

export default Layout