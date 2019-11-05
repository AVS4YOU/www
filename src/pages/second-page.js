import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "gatsby";
import Child from "../components/childComponent";
import Layout from "../components/layout"

const SecondPage = ({  pageContext: { locale, originalPath }, t }) => {

  return (
    // Можно прокинуть pageContent в Layout !!!!!!!!!
    <Layout>
      <h1>{t("ThisIsSecondPage")}</h1>
      <Link to={`/${locale === "en" ? "" : locale}/`}>{t("goBackHome")}</Link>
      <br />

      <Child />
    </Layout>
  );
};
export default withI18next({ ns: "common" })(SecondPage);
