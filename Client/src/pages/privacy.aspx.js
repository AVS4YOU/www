import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Link from "../components/link";
import Layout from "../components/layout";
import "../styles/privacy.less";

class Privacy extends React.PureComponent {

  render() {

    return (
      <Layout
        className="privacy"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title=""
        metaDescription=""
        metaKeywords=""
      >

        <div className="body-privacy">
          <Text as="h2" className="common__heading">
            Privacy Policy
          </Text>
          <Text className="body-privacy__text">
            Online Media Technologies Ltd. has created this statement to let you know about our firm commitment to your privacy
            and full compliance of AVS4YOU Website and Software with General Data Protection Regulation (GDPR).
          </Text>
          <Text className="body-privacy__text">
            The following Privacy Policy discloses our approach in gathering and processing Personal Data for Online Media Technologies Ltd.
          website <Link to="/">www.avs4you.com</Link>, related websites, services and AVS4YOU software.
          </Text>
          <Text className="body-privacy__text">
            Any data collected through avs4you.com, <a href="forum.avs4you.com" target="_blank">forum.avs4you.com</a> or www.avs4you.com and other subdomains of the domain avs4you.com (collectively the “AVS4YOU Website”)
            or AVS Video Editor, AVS Video Converter, AVS Video ReMaker, AVS Audio Editor, AVS Audio Converter, AVS Image Converter, AVS Document Converter, AVS Media Player,
            AVS Registry Cleaner, AVS Disc Creator, AVS Photo Editor (collectively the “AVS4YOU Software”) will be collected by Online Media Technologies Ltd.
            which is a company formed in London, UK with its principal place of business located at 85 Great Portland, London W1W 7LT, United Kingdom.
          </Text>
          <Text className="body-privacy__text">
            By using AVS4YOU Website or Software (hereinafter also referred to as “AVS4YOU”)
            you explicitly consent to such use of your Personal Data and agree to the terms of this Privacy Policy.
          </Text>
          <Text className="body-privacy__text paragraph">
            We process data based on:
          </Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">
              consent of the user;
            </Text>
            <Text className="paragraph-text">
              the necessity of the data for providing the services that users are contracting for when they use AVS4YOU Website or Software.
            </Text>
          </div>
          <Text className="body-privacy__text">
            Data centers hosting AVS4YOU Website and Software data, including user data, are located within the North Virginia,
            United States. Accordingly, as an EU resident, in order to access the AVS4YOU Website or Software your data may be transferred outside of the EU. By using the AVS4YOU Website,
            you consent to the cross-border transfer of your data in order to receive access to the AVS4YOU Website.
          </Text>
          <Text className="body-privacy__text">
            If you do not consent to the processing of your data in order to access and use the AVS4YOU Website or Software,
            please do not use, or engage with, the AVS4YOU Website or Software.
          </Text>
          <Text className="subHeader">What Personal Data we collect</Text>
          <Text className="body-privacy__text">
            Online Media Technologies Ltd. collects Personal Data (hereinafter also “Data”) in case you choose to register with AVS4YOU service.
          </Text>
          <Text className="body-privacy__text paragraph">
            We ask users to provide following Data:
          </Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">
              first and last name – to identify users and display a unique username in AVS4YOU support Forum (“Forum”) associated with user’s Forum account (“Account”) at forum.avs4you.com;
            </Text>
            <Text className="paragraph-text">
              email address – to authenticate users, provide access to support Forum and help them recover lost / forgotten password to access to support Forum;
            </Text>
            <Text className="paragraph-text">
              information about user’s devices (operation system, mobile devices, PC configuration) – for effective troubleshooting of users issues related to AVS4YOU software.
            </Text>
          </div>

          <Text className="body-privacy__text">
            Aforementioned Data is collected only upon user either enters particular information or uploads it on his own initiative using AVS4YOU forms and tools.
          </Text>
          <Text className="body-privacy__text paragraph">
            We also collect following technical data:
          </Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">
              IP address – to help diagnose problems with our server and to administer our website and to identify
              you and your time spent at our website to understand which parts of our website users are visiting and provide better user experience;
            </Text>
            <Text className="paragraph-text">
              Location (based on the IP address);
            </Text>
            <Text className="paragraph-text">
              Operation System and Internet Browser data;
            </Text>
            <Text className="paragraph-text">
              Hardware specifications (screen size, other specifications);
            </Text>
            <Text className="paragraph-text">
              Other data. Please refer to "Third-party service providers" section of this Policy and the following
              link: https://developers.google.com/analytics/resources/concepts/gaConceptsTrackingOverview to learn more.
            </Text>
          </div>

          <Text className="body-privacy__text">
            If you choose not to register or provide Personal Data, you can still use our website anonymously.
            But you will not be able to access areas that require registration (e.g. you can’t ask questions in support Forum).
          </Text>
          <Text className="body-privacy__text">
            Technical data is recorded automatically when you visit our site or use our service and is generally anonymous (does not reveal user's identity).
            However, if you are logged into your Account some of this information could be associated with your Account.
          </Text>
          <Text className="body-privacy__text">
            We do not link IP addresses to anything personally identifiable. This means, for instance,
            that a user's session will be tracked, but the user will remain anonymous. We do not use this information for any other purposes.
          </Text>
          <Text className="body-privacy__text paragraph">
            We also collect certain categories of personal information about users from other sources. In particular:
          </Text>

          <div className="body-privacy__text">
            <Text className="paragraph-text">
              Financial and/or transaction details from our payment provides (located in US, Netherlands, Romania, UK, Ireland, Germany, Japan, Taiwan).
              This is necessary in order to process a transaction;
            </Text>
            <Text className="paragraph-text">
              Third-party service providers like Google (located in the US), which provide information about you when you link, connect,
              or login to your Account with your Google Account and we receive information such as your Google e-mail and profile from that service.
              This only occurs if you are using Google Account to login.
              The information varies and is controlled by Google or as authorized by you via your privacy settings in Google Account.
            </Text>
          </div>


          <Text className="body-privacy__text">
            When you interact with social media buttons (i.e. "share", "like", "tweet", "+1" etc) on our website or when you link your Account to or log in through
            a social media website the social networks may record some of your actions.
          </Text>

          <Text className="subHeader">How we use Personal Data</Text>

          <Text className="body-privacy__text paragraph">
            We collect and processes Data for the following purposes:
          </Text>

          <div className="body-privacy__text">
            <Text className="paragraph-text">to provide users with better experience;</Text>
            <Text className="paragraph-text">to investigate performance issues, bugs and any other technical issues regarding Resources;</Text>
            <Text className="paragraph-text">to make AVS4YOU better;</Text>
            <Text className="paragraph-text">to comply with the law.</Text>
          </div>

          <Text className="body-privacy__text">
            Online Media Technologies Ltd. may share non-personal, summary information regarding AVS4YOU users with partners or other third parties.
            However, we will not share any individual customer information outside of the contracted partners and third parties without first receiving user's prior written approval.
            In short, Online Media Technologies Ltd. does not sell user’s Personal Data.
          </Text>
          <Text className="body-privacy__text">
            Online Media Technologies Ltd. may send you tips on using AVS4YOU, notify you of and get your feedback on upcoming releases or
            new services offered only if you subscribed to our mailing lists. Users are able to unsubscribe from the mailing list any time after receiving the first informational
            message using link contained within informational message or by using appropriate Account settings option.
          </Text>



          <Text className="subHeader">How long Data is used</Text>

          <Text className="body-privacy__text">We retain your Data for as long as is necessary to provide the service to you and others, and to comply with our legal obligations.
          Your Data is stored and processed only when your account is active until you delete or deactivate it.</Text>
          <Text className="body-privacy__text">You are entitled to delete Your own Account. To do so please contact us by sending e-mail at <a href="mailto:info@avs4you.com">info@avs4you.com</a>
          using e-mail address you entered during registration.
          Upon receiving this request Your Account will be completely deleted in 30 days.</Text>



          <Text className="subHeader">How you can control your Data</Text>


          <Text className="body-privacy__text">You have various rights to control use and processing of your Personal Data and other information.
          This means that you are entitled to request us to take certain actions at any time and free of charge.
          </Text>
          <Text className="body-privacy__text">
            <b>Data portability right</b>
            You have the right to request a digital copy of your Data in a structured, commonly used and machine-readable format to be able to move from one service to another.
            This can be achieved by emailing us at <a href="mailto:info@avs4you.com">info@avs4you.com</a> and we will provide you with an electronic file containing your Data.
          </Text>
          <Text className="body-privacy__text">
            <b>Right to rectification.</b>
            You have the right to obtain the rectification of inaccurate Data. You entitled to have incomplete Personal Data completed.
            In order to do so, please use appropriate settings to edit and complete your
            incomplete Personal Data if you find it necessary or provide us with a supplementary statement by sending e-mail at <a href="mailto:info@avs4you.com">info@avs4you.com</a>
          </Text>
          <Text className="body-privacy__text">
            <b>Right to restriction of processing.</b>
            You also have the right to request that we cease to process or use your Data in any way.
            If you choose to do so, your Data will become unavailable for everyone, but it won't be deleted, so you can restore it at any time. To achieve this goal, please email us at <a href="mailto:info@avs4you.com">info@avs4you.com</a>
          </Text>
          <Text className="body-privacy__text">
              <b>Right to erasure ("Right to be forgotten").</b>You are eligible to delete certain Data from our site and services.
              Please contact us by sending e-mail at <a href="mailto:info@avs4you.com">info@avs4you.com</a> to do so.
              Please note, if you choose to delete your Data, it will become unavailable and will be completely deleted in 60 days upon your delete request.
          </Text>
          <Text className="body-privacy__text">
            Please, be aware, that sometimes we have to store some Data for a longer period of time either due to technical limitations or to comply with the law.
          </Text>



          <Text className="subHeader">Underage</Text>

          <Text className="body-privacy__text">
            Online Media Technologies Ltd. does not intentionally collect Personal Data from persons, who are minors under their applicable local legislation.
            If you are under 16, you will need consent from your parent(s) or other legal guardian(s) before submitting any Personal Data to Online Media Technologies Ltd.
            via AVS4YOU website or software, with the exception if such activities are allowed by applicable law of your country.
            If we become aware that a person under 16 has provided us with personal information without appropriate aforementioned consent, we will take steps to delete such information.
          </Text>



          <Text className="subHeader">Links to Other Sites</Text>

          <Text className="body-privacy__text">
            AVS4YOU Website may contain links to other sites. Please be aware that Online Media Technologies Ltd. is not responsible for the privacy practices
            or the content of such websites as well as any information they might collect, even though our name or logo may appear on those sites.
            We encourage you to be aware when you leave our site and to read the privacy statements of each and every website that you visit,
            as the Privacy Policy of those sites may differ from ours. Our privacy statement applies solely to AVS4YOU Website and Software.
          </Text>


          <Text className="subHeader">How we use "Cookies"</Text>

          <Text className="body-privacy__text">During your visit to our website, so-called "cookies" are saved to your computer.
          These "cookies" are small computer files, necessary to provide functionality and track user's activity: register
          information about user's navigation on our website (e.g. loaded pages, date, time of day and length of visit etc) which we can
          access during your next visit in order to adapt the website to your personal requirements and optimize loading times.
          We also use this information to enter your data into inquiry forms so that you do not need to fill them again.</Text>
          <Text className="body-privacy__text">
            We never store passwords or similarly sensitive data in our website cookies. The use of cookies is common and advantageous.
            Cookies are used on most websites. By indicating how and when visitors use a website, cookies aid us in finding out which areas
            are popular and which areas are not. Many improvements and updates are based on information supplied by cookies.
            Cookies can also help us to personalize web content and meet the demands of our visitors.
          </Text>
          <Text className="body-privacy__text">
            Our website does not use cookies to collect Personal Data from your computer that was not initially sent as a cookie.
          </Text>
          <Text className="body-privacy__text paragraph">
            What cookies do we use and why:
          </Text>
          <div className="body-privacy__text">
            <Text className="paragraph-text">
              Essential. These cookies are necessary in order to enable certain base features, such as identifying certain user and remembering that
              user have logged into his Account. These cookies may store unique user authentication key and are required by the service to operate correctly.
              Although cookies do not store your password directly, user authentication key is as a password substitute.
              Please be aware that you shall not let others to copy your cookies.
            </Text>
            <Text className="paragraph-text">
              Functionality. These cookies are used to remember some choices that users make (i.e. search parameters or language settings)
              and to make your use of our site and services more tailored.
            </Text>
            <Text className="paragraph-text">Performance and analytics. These cookies collect information on how users
            operate with our site and services and help us to improve them. We use Google Analytics cookies to identify areas for improvement such as navigation and user experience,
            and marketing campaigns. Please check the "Third-party service providers" section to learn more.
            </Text>
          </div>
          <Text className="body-privacy__text">
            Users can disable cookies by changing their Internet browser settings. However, if you instruct your
            Internet browser to not accept essential cookies, AVS4YOU Website may not work properly or may not work at all.
          </Text>


          <Text className="subHeader">Data Protection</Text>

          <Text className="body-privacy__text">Your Forum Account is password-protected so that you have secure access to your Forum account 
          and Personal Data stored on your website. It is the user's responsibility to protect the security of their password. 
          We do not take responsibility for any undesirable information disclosure due to password insecurity.</Text>
          <Text className="body-privacy__text paragraph">To minimize any personal data breach we implemented following different security measures including:</Text>

          <div className="body-privacy__text">
            <Text className="paragraph-text">physical access control;</Text>
            <Text className="paragraph-text">randomly-generated brute-force resistant staff passwords;</Text>
            <Text className="paragraph-text">strong cipher-encryption for all mediums containing Personal Data (where appropriate);</Text>
            <Text className="paragraph-text">end-to-end encryption using modern TLS (Transport Layer Security) cryptographic protocol for all connections containing Personal Data;</Text>
            <Text className="paragraph-text">other safety measures to reduce the risk of unauthorized access.</Text>
          </div>

          <Text className="subHeader">Third-party service providers</Text>

          <Text className="body-privacy__text">We use third-party service providers to provide hosting and analytics.</Text>
          <Text className="body-privacy__text">
          <b>AWS Amazon file hosting.</b> We use AWS cloud storage to store user files including Data, which is located in North Virginia, United States. 
          To learn how Amazon treats your privacy, please see the following link: <a href="https://aws.amazon.com/privacy" target="_blank">https://aws.amazon.com/privacy</a>
          </Text>
          <Text className="body-privacy__text">
          <b>Google Analytics.</b> We also use Google Analytics to track what is used the most, to understand our users needs and to make our site and service better.
          Please visit the link to understand Google's approach to privacy: <a href="https://policies.google.com/privacy?hl=en" target="_blank">https://policies.google.com/privacy?hl=en</a>
          </Text>
          <Text className="body-privacy__text">
          <b>Google Ads & Google Merchant Center.</b> We use the services of Google Ads and Google Merchant Center to draw attention to our offers by means of advertising materials and advertising campaigns on external websites. In terms of the advertising campaign data 
          we pursue thereby the aim of showing you interest-based advertisements and of making a fair calculation of advertising costs.
          </Text>
          <Text className="body-privacy__text">
          <b>Google Tag Manager.</b> We use Google Tag Manager, a tag management system that allows us to 
          quickly and easily update tracking codes and related code fragments known as "tags" on our website and mobile website.
          </Text>
          <Text className="body-privacy__text">
            <b>Bing Ads.</b> We use Bing Ads pixel and conversion tracking codes to measure the effectiveness of our advertising campaigns. These tags do not collect any personal information.
            Please follow this link to opt out of Microsoft Advertising optimization program <a href="https://about.ads.microsoft.com/en-us/resources/policies/opt-out-of-the-microsoft-advertising-optimization-program" target="_blank">https://about.ads.microsoft.com/en-us/resources/policies/opt-out-of-the-microsoft-advertising-optimization-program</a>.
          </Text>
          <Text className="body-privacy__text">
            <b>Yahoo Japan.</b> Yahoo Japan conversion tracking codes are used to analyze the effectiveness of our advertising campaigns. Users may adjust their privacy settings on how their data is used for advertising purposes.
            For more information please go to <a href="https://privacy.yahoo.co.jp/en_index.html" target="_blank">https://privacy.yahoo.co.jp/en_index.html</a>.
          </Text>



          <Text className="subHeader">Privacy Policy Updates</Text>
          <Text className="body-privacy__text">Online Media Technologies Ltd. may update this Privacy Policy from time to time. We encourage you to review this privacy statement for any changes occasionally. 
          If any changes are made to the way in which we treat your Personal Data, we will inform you about such changes via email or by posting a note on our website.</Text>


          <Text className="subHeader">Further Questions</Text>
          <Text className="body-privacy__text">If you have any questions about our Privacy Policy, feel free to email us at <a href="mailto:info@avs4you.com">info@avs4you.com</a></Text>


          <Text className="subHeader">Data Protection Officer</Text>
          <Text className="body-privacy__text">You can contact Data Protection Officer by emailing <a href="mailto:dpo@avs4you.com">dpo@avs4you.com</a></Text>

        </div>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(Privacy);
