import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "gatsby";
import Child from "../components/childComponent";
import Layout from "../components/layout"

const SecondPage = ({ pageContext, t }) => {

  return (
    // Можно прокинуть pageContent в Layout !!!!!!!!!
    <Layout pageContext={pageContext}>
      <h1>{t("ThisIsSecondPage")}</h1>
      <Link to={`/${pageContext.locale === "en" ? "" : pageContext.locale}/`}>{t("goBackHome")}</Link>
      <br /> 

      <Child />
    </Layout>
  );
};
export default withI18next({ ns: "common" })(SecondPage);
