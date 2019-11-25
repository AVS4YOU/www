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
import Footer from "./footer";

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
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ 
        width: window.innerWidth
    });
  }

  render(){
    return ( 
      <>
        <Header availableLocales={this.props.availableLocales} locate={this.props.locate} t={this.props.t}/>
        <StyledLayout>
          <main>{this.props.children}</main>
        </StyledLayout>
        <Footer locate={this.props.locate} t={this.props.t}/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout