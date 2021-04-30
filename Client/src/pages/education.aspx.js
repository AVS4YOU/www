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
  constructor(props) {
    super(props);
    this.state = {
      device: "",
    };

    this.getDevice = this.getDevice.bind(this);
  }

  getDevice(device){
    this.setState({ device: device });
  }

render(){

    return (
      <Layout 
        className="education" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU special Offer for educational institutions")}
        metaDescription="AVS4YOU: educational Software"
        metaKeywords=""
      >
        <div id="headerContentWrapper" className="header">
            <ImageGQL className="headerBackgroundImage" imageName="education_header.jpg" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
                <div className="header__body">
                    <Text as="h1" className="header__heading">{this.props.t("AVS4YOU for Education")}</Text>
                    <Text as="h3" className="header__subtitle">{this.props.t("Make the learning process productive for students and educators, cost effective for schools, colleges and universities")}</Text>
                    <Link to="contact-form-header" spy={true} smooth={true} offset={0} duration={500} className="scrollToForm">
                      <Text>{this.props.t("Submit request")}</Text>
                    </Link>
                </div>
            </div>
        </div>
        <div className="body-education screen-wrapper">
          <Text as="h2" className="common__heading">
          {this.props.t("Advantages of AVS4YOU software")}
          </Text>
          <div className="body-education__wrapper">
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("5 Multimedia Tools Suite fro audio and video processing")}
                </Text>
                <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
              </div>
            </div>
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("Special discounts up to 70% off")}
                </Text>
              </div>
            </div>
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("Easy software administration")}
                </Text>
              </div>
            </div>
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("A single volume license key")}
                </Text>
              </div>
            </div>
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("Online or offline software registration")}
                </Text>
              </div>
            </div>
            <div className="tableCell">
              <div className="itemContent">
                <Text>
                {this.props.t("Easily enhance the learning process")}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="education-solution screen-wrapper">
            <Text as="h2" className="common__heading">
            {this.props.t("Why AVS4YOU is a perfect solution?")}
            </Text>
            <div className="content-selector-wrapper">
              <ContentSelector
                  disableArrows={true}
                  className="choose-solution__content-wrapper"
                  buttonNames={[this.props.t("AVS4YOU for Students"),this.props.t("AVS4YOU for Educators")]}
              >
              <div className="education__content-wrapper">
                <ContentRowItem
                  imgLeft={true}
                  imageName="create-classroom-projects.jpg"
                  headerText={this.props.t("Create classroom video projects and presentations")}
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>{this.props.t("Easily edit webcam footage, add audio and image overlays, stickers, visual effects, change background, and more")}</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={false}
                    imageName="make-big-saving.jpg"
                    headerText={this.props.t("Make a big saving on the software")}
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>{this.props.t("Get an extra 30% discount by sending your request at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a>. 
                  {this.props.t("A copy of school ID for pupils and a confirmation of official enrolment for college students serve as sufficient proof")}</Text>
                </ContentRowItem>
              </div>

              <div className="education__content-wrapper">
                <ContentRowItem
                  imgLeft={true}
                  imageName={this.props.t("education screen educators1 new png")}
                  headerText={this.props.t("Explain new topics and difficult concepts through video")}
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>{this.props.t("Add callouts, captions, and arrows, use pan and zoom effects")}</Text>
                </ContentRowItem>

                <ContentRowItem 
                    imgLeft={false}
                    imageName={this.props.t("video editor slider4 jpg")}
                    headerText={this.props.t("Record lectures and webinars")}
                    free={false}   
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>{this.props.t("Use visuals to grab students' attention and engage them")}</Text>
                </ContentRowItem>

                <ContentRowItem
                  imgLeft={true}
                  imageName={this.props.t("education screen educators3 png")}
                  headerText={this.props.t("Make video tutorials to reach even remote students")}
                  free={false}
                >
                  <Text className="education__ListItem" color="#555555" fontWeight={500}>{this.props.t("Record your screen, highlight keyboard and mouse actions")}</Text>
                </ContentRowItem>
                <div className="content-button-wrapper">
                  <Button 
                    tabIndex="0"
                    backgroundColor="blue" 
                    padding="20px 35px"
                    fontSize={18} 
                    href={this.props.t("https_onlinehelpstaticcontents_avs4you_com/downloads/schools/avs4you_price_list_for_schoolspdf")}
                    textTransform="uppercase"
                    t={this.props.t}
                  >
                      {this.props.t("Download education price list")}
                  </Button>
                </div>
              </div>
            </ContentSelector>
          </div>
        </div>
        
        <div className="form education screen-wrapper">

          
          <img src={mailIcon} alt="mail icon"/>
          <Text id="contact-form-header" as="h2" className="common__heading">
          {this.props.t("Contact form")}
          </Text>
          <div className="education-from-wrapper">

            <Form 
                 formHeader = {this.props.t("Write a message")}
                 formName = {this.props.t("Name")}
                 formEmailAddress = {this.props.t("Email address")}
                 formOccupation = {this.props.t("Occupation")}
                 formInstitution = {this.props.t("Institution")}
                 formNumberOfSub = {this.props.t("Number of subscriptions")}
                 formComment = {this.props.t("Give us a brief description of your specific needs")}
                 formButton = {this.props.t("Send your request")}
                 formAgreeTermsWrapper = {this.props.t("By clicking this button, you agree to our")}
                 formAgreeLink = {this.props.t("Terms of Service")}                 
            />
            <Text className="contact-us-text">{this.props.t("For more details and discount requests, please write at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a></Text>
          </div>
         </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(education);