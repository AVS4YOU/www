import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "gatsby";
import Child from "../components/childComponent";
import Layout from "../components/layout"

const Page = ({ pageContext, t }) => {
  // Можно прокинуть pageContent в Layout !!!!!!!!!
  return (
    <Layout>
      <h1>{t("hello")}</h1>
      <Link to={`/${pageContext.locale === "en" ? "" : pageContext.locale}/second-page`}>{t("goSecondPage")}</Link>
      <br /><br /><br />
      
      <Link to={`/` + pageContext.originalPath}>{t("English")}</Link>
      <br />
      <Link to={`/ru` + pageContext.originalPath}>{t("Русский")}</Link>
      <Child />
    </Layout>
  );
};
export default withI18next({ ns: "common" })(Page);
