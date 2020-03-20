import React from "react";
import withI18next from "../components/withI18next";
import { Link } from "react-scroll";
import Text from '../components/text';
import Button from '../components/button';
import Layout from "../components/layout";
import "../styles/education.less";
import ImageGQL from "../components/image-gql";
import mailIcon from "../images/partners/email.svg";
import Form from '../components/form-education';
import ContentSelector from '../components/content-selector';
import ContentRowItem from '../components/content-row-item';

class education extends React.PureComponent {

render(){

    return (
      <Layout className="education" pageContext={this.props.pageContext} t={this.props.t}>
        <div id="headerContentWrapper" className="header">
            <ImageGQL className="headerBackgroundImage" imageName="education_header.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
                <div className="header__body">
                    <Text as="h1" className="header__heading">AVS4YOU for Education</Text>
                    <Text as="h3" className="header__subtitle">Make the learning process productive for students and educators, cost effective for schools, colleges and universities</Text>
                    <Link to="contact-form-header" spy={true} smooth={true} offset={0} duration={500} className="scrollToForm">
                      <Text>Submit request</Text>
                    </Link>
                </div>
            </div>
        </div>
        <div className="body-education screen-wrapper">
          <Text as="h2" className="common__heading">
            Advantages of AVS4YOU software
          </Text>
          <div className="body-education__wrapper">
            <div className="grid">
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    5 Multimedia Tools Suite fro audio and video processing
                  </Text>
                </div>
              </div>
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    Special discounts up to 70% off
                  </Text>
                </div>
              </div>
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    Easy software administration
                  </Text>
                </div>
              </div>
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    A single volume license key
                  </Text>
                </div>
              </div>
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    Online or offline software registration
                  </Text>
                </div>
              </div>
              <div className="gridItem">
                <div className="itemContent">
                  <Text>
                    Easily enhance the learning process
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education-solution screen-wrapper">
            <Text as="h2" className="common__heading">
              Why AVS4YOU is a perfect solution?
            </Text>
            <div className="content-selector-wrapper">
              <ContentSelector
                  disableArrows={true}
                  className="choose-solution__content-wrapper"
                  buttonNames={["AVS4YOU for Students","AVS4YOU for Educators"]}
              >
              <div className="education__content-wrapper">
                <ContentRowItem
                  imgLeft={false}
                  imageName="education_screen_students1.png"
                  headerText="Create classroom video projects and presentations"
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Easily edit webcam footage, add audio and image overlays, stickers, 
                    visual effects, change background, and more</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    imageName="education_screen_students2.png"
                    headerText="Work with all types of documents conveniently"
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Save your essays, reports and other documents in PDF format. 
                    Easily convert your DOC, DOCX files to PDF with AVS Document Converter and protect them with a personal watermark</Text>
                </ContentRowItem>

                <ContentRowItem
                  imgLeft={false}
                  imageName="education_screen_students3.png"
                  headerText="Create classroom video projects and presentations"
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Easily edit webcam footage, add audio and image overlays, stickers, 
                    visual effects, change background, and more</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    imageName="education_screen_students4.png"
                    headerText="Work with all types of documents conveniently"
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Save your essays, reports and other documents in PDF format. 
                    Easily convert your DOC, DOCX files to PDF with AVS Document Converter and protect them with a personal watermark</Text>
                </ContentRowItem>
                <div className="content-button-wrapper">
                  <Button 
                    tabIndex="1"
                    backgroundColor="blue" 
                    padding="20px 35px"
                    fontSize={18} 
                    href="/"
                    textTransform="uppercase"
                  >
                      Download education price list
                  </Button>
                </div>
              </div>

              <div className="education__content-wrapper">
                <ContentRowItem
                  imgLeft={false}
                  imageName="education_screen_educators1_new.png"
                  headerText="Explain new topics and difficult concepts through video"
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Easily edit webcam footage, add audio and image overlays, stickers, 
                    visual effects, change background, and more</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    imageName="education_screen_educators2.png"
                    headerText="Record lectures and webinars"
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Use visuals to grab students' attention and engage them</Text>
                </ContentRowItem>

                <ContentRowItem
                  imgLeft={false}
                  imageName="education_screen_educators3.png"
                  headerText="Make video tutorials to reach even remote students"
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Record your screen, highlight keyboard and mouse actions</Text>
                </ContentRowItem>
                <div className="content-button-wrapper">
                  <Button 
                    tabIndex="1"
                    backgroundColor="blue" 
                    padding="20px 35px"
                    fontSize={18} 
                    href="/"
                    textTransform="uppercase"
                  >
                      Download education price list
                  </Button>
                </div>
              </div>
            </ContentSelector>
          </div>
        </div>
        <div className="form education screen-wrapper">
          <img src={mailIcon}/>
          <Text id="contact-form-header" as="h2" className="common__heading">
            Contact form
          </Text>
          <div className="education-from-wrapper">
            <Form></Form>
            <Text className="contact-us-text">If you have any questions about AVS4YOU Affiliate program, please contact us at <a href="mailto:affiliates@avs4you.com">affiliates@avs4you.com</a></Text>
          </div>
        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(education);
