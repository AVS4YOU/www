const React = require("react")
const Layout = require("./src/components/layout")
// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes, setPostBodyComponents }, pluginOptions) => {
  setBodyAttributes({
    className: "avs4you-body",
  })
  setPostBodyComponents([
    <noscript> 
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMB2TZX" height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe> 
    </noscript>,
  ])
}
// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}