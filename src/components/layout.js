/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from "prop-types";
import Header from "./header";
import "./layout.css";
import Footer from "./footer";
import { useTranslation } from "react-i18next";

const Layout = ({ children, pageContext }) => {

  const {t} = useTranslation();

  return ( 
    <>
      <Header pageContext={pageContext}/>
      <div>
        <main>{children}</main>
      </div>
      <Footer pageContext={pageContext} t={t}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout