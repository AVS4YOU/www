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
import ScrollUpButton from '../components/scroll-up-button';

class education extends React.PureComponent {

render(){

    return (
      <Layout 
        className="education" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title="AVS4YOU special Offer for educational institutions"
        metaDescription="AVS4YOU: educational Software"
        metaKeywords=""
      >
        <div id="headerContentWrapper" className="header">
            <ImageGQL className="headerBackgroundImage" imageName="education_header.jpg" style={{position: "absolute"}}/>
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
            <div className="table">
              <div className="tableRow first">
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      5 Multimedia Tools Suite fro audio and video processing
                    </Text>
                    <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
                  </div>
                </div>
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      Special discounts up to 70% off
                    </Text>
                  </div>
                </div>
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      Easy software administration
                    </Text>
                  </div>
                </div>
              </div>
              <div className="tableRow second">
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      A single volume license key
                    </Text>
                  </div>
                </div>
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      Online or offline software registration
                    </Text>
                  </div>
                </div>
                <div className="tableCell">
                  <div className="itemContent">
                    <Text>
                      Easily enhance the learning process
                    </Text>
                  </div>
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
                  imageName="create-classroom-projects.jpg"
                  headerText="Create classroom video projects and presentations"
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Easily edit webcam footage, add audio and image overlays, stickers, visual effects, change background, and more</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={true}
                    imageName="make-big-saving.jpg"
                    headerText="Work with all types of documents conveniently"
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>Get an extra 30% discount by sending your request at <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>. 
                  A copy of school ID for pupils and a confirmation of official enrolment for college students serve as sufficient proof</Text>
                </ContentRowItem>
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
                    href="https://onlinehelpstaticcontents.avs4you.com/downloads/schools/avs4you_price_list_for_schools.pdf"
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