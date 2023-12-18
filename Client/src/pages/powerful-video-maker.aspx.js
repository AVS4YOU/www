import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import MenuWrapper from "../components/language-selector";
import Layout from "../components/layout";
import Text from '../components/text';
import TTP from "../components/cinema-slider-redactor/tps";
import Star from '../images/main-page/icons/star.svg';
import Link from '../components/link';
import videoDiv from '../images/avs-video-editor-tools/video/maker.mp4';

const date = new Date();
const currentYear = date.getFullYear();

class pwfVideoMaker extends React.PureComponent {

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
        headerIsDisabled={true}
        footerIsDisabled={true}
        className="powerful-video-maker" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        metaDescription=""
        metaKeywords=""
      > 
            <div className="vel_header_powerful">
            <video autoPlay loop muted id="myVideo">
            <source src={videoDiv} type="video/mp4" />
            Your browser does not support HTML5 video.
            </video>
        <div className="vel_content">
            <div className="vel_page_header">
                <div className="vph_logo"><Link id="home1_powerful-video-maker" to="/"></Link></div>
                <div className="vph_menu">
                </div>
                <div className="language_inside">
                    <MenuWrapper availableLocales={this.props.availableLocales} locale={this.props.locale} className="desktopBlock" isMobile={this.props.isMobile} menuItemText={this.props.t("CurrentLanguage")} />
                </div>
            </div>
            <div className="vel_narrow">
                <Text fontSize={66} color="FFFFFF" className="TextH1">{this.props.t("AVS Video Editor")}</Text>
                <div className="vel_description">{this.props.t("Powerful video maker")}<br />
                {this.props.t("Create professional-looking movies easily")}</div>
                <div className="vel_top_buttons">
                    <div className="vel_top_download">
                        <a className="button download" id="download-now_powerful-video-maker" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">{this.props.t("Download now")}</a>
                        <span>{this.props.t("Windows 10/8/XP/Vista")}</span>
                    </div>
                    <div className="vel_top_buy">
                        <a className="button buynow" id="buy-now_powerful-video-maker" href={this.props.t("defaultHrefUnlim")}>{this.props.t("Buy now")}</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="vel_stars_powerful" id="video_editor_landing1">
            <div className="vel_narrow">
                <div className="vel_happy_users">
                <div class="vel_stars_video">
            <div className="imgWrapper">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                </div>
                <div className="vel_users">{this.props.t("Over")} <b>{this.props.t("50,000,000")}</b> {this.props.t("Happy Users.")}</div>
                <div className="vel_button">
                    <div className="velb_button"><span id="reviewsNumber">{this.props.t("659475")}</span> {this.props.t("Reviews")}</div>
                </div>
            </div>
            <div className="vel_quote">
                <blockquote>
                {this.props.t(`I've been using AVS Video Editor for more than 10 years and it is an excellent product in my opinion`)}
                <div className="quote_user">{this.props.t("William Holmes")}</div>
                </blockquote>
            </div>
        </div>
    </div>
        <TTP 
        SHeader = {this.props.t("5 professional cinematic tools")}
        SColorT =  {this.props.t("Color Tunnig")}
        SText =  {this.props.t("Text")}
        SStabilization = {this.props.t("Stabilization")}
        SGreenScrin =  {this.props.t("Green Screen")}
        SSpeedCont =  {this.props.t("Speed Control")}
        SliderText = {[    
            { 
                imgText: this.props.t("Use the Color correction to give your movie a cinematic look Fix up any white balancing issues and color mismatches between consecutive scenes") }, 
            { 
                imgText: this.props.t("Use the Chroma Key to change your background and create fantastic effects") },   
            { 
                imgText: this.props.t("Make your video look professional and fix the effects of camera shake") },    
            { 
                imgText: this.props.t("Use Slow Mo or make your videos up to ten times faster Create amazing slow motion videos in HD and 4K and see how easy it can be") },
            { 
                imgText: this.props.t("Use the AVS Video Editor to edit the color, size and animation of your text and titles") },         
          ]}   />
    <div className="vel_edit_enhance">
        <div className="vel_narrow">
            <Text fontSize={40} className="TextH2">{this.props.t("Innovative movie editing tools")}</Text>
            <div className="vel_ee_blocks">
                <div className="velee_block veleeb_video_1">
                    <Text fontSize={18} className="TextH3">{this.props.t("Creative video making")}</Text>
                    <div className="velee_description">{this.props.t("Select between 300 innovative video effects and transitions Insert menus, audio, text comments and subtitles")}</div>
                </div>
                <div className="velee_block veleeb_video_2">
                    <Text fontSize={18} className="TextH3">{this.props.t("Multiformat video creator")}</Text>
                    <div className="velee_description">{this.props.t("Edit & save video files in AVI, VOB, MP4, DVD, WMV, 3GP, MOV, MKV, using popular codecs H264, MPEG-4, H263 etc Process video with different frame sizes")}</div>
                </div>
                <div className="velee_block veleeb_video_3">
                    <Text fontSize={18} className="TextH3">{this.props.t("Accelerated HD-video editing")}</Text>
                    <div className="velee_description">{this.props.t("Due to the integrated video cache technology, HD and 4K video editing becomes faster Work with any video formats and file sizes")}</div>
                </div>
            </div>
            <div className="vel_bottom_buttons">
                <div className="vel_bottom_download">
                    <a className="button download" id="download-vm_powerful-video-maker" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">{this.props.t("Download AVS Video Editor")}</a>
                </div>
                <div className="vel_bottom_buy">
                    <a className="button buynow" id="buy_powerful-video-maker" href={this.props.t("defaultHrefUnlim")}>{this.props.t("Buy")}</a>
                </div>
                <div class="vel_bottom_eula">{this.props.t("By clicking the Download button you agree to our")} <a href="https://www.avs4you.com/license-agreement.aspx" id="license_powerful-video-maker">{this.props.t("End User License Agreement")}</a></div>
            </div>
        </div>
    </div>
    <div className="vel_footer">
        <div className="vel_page_footer">
            <div className="vph_logo"><Link id="home2_powerful-video-maker" to="/"></Link></div>
            <div className="vph_menu vph_menu_footer">
                <ul>
                    <li style={{fontSize:"14px"}}><Link id="downloads_powerful-video-maker" to="/downloads.aspx">{this.props.t("Downloads")}</Link></li>
                    <li style={{fontSize:"14px"}}><Link id="register_powerful-video-maker" to="/register.aspx">{this.props.t("Buy now")}</Link></li>
                    <li style={{fontSize:"14px"}}><a id="help_powerful-video-maker" target="_blank" rel="noreferrer noopener" href="https://www.avs4you.com/guides/index.aspx">{this.props.t("Help")}</a></li>
                    <li style={{fontSize:"14px"}}><a id="support_powerful-video-maker" target="_blank" rel="noreferrer noopener" href="https://support.avs4you.com/login.aspx">{this.props.t("Support")}</a></li>
                    <li style={{fontSize:"14px"}}><Link id="contact-us_powerful-video-maker" to="/about-us.aspx#contact-us">{this.props.t("Contact us")}</Link></li>
                </ul>
                <div className="vph_copyright"><Link id="rights_powerful-video-maker" to="/">{this.props.t("Ascensio System SIA")}</Link> {currentYear} {this.props.t("All rights reserved")}</div>
            </div>
            <div className="lfn-social">
            <a className="lfns-button lfnsb-yt" target="_blank" rel="noreferrer noopener" title="Follow us on YouTube" id="youtube_powerful-video-maker" href="https://www.youtube.com/user/avs4you"> </a>
            <a className="lfns-button lfnsb-fb" target="_blank" rel="noreferrer noopener" title="Follow us on Facebook" id="facebook_powerful-video-maker" href="https://www.facebook.com/avs4you"> </a>
            <a className="lfns-button lfnsb-tw" target="_blank" rel="noreferrer noopener" title="Follow us on Twitter" id="twitter_powerful-video-maker" href="https://www.twitter.com/avs4you"> </a>
            <a className="lfns-button lfnsb-pi" target="_blank" rel="noreferrer noopener" title="Follow us on Pinterest" id="pinterest_powerful-video-maker" href="https://pinterest.com/avs4you/"> </a>
        </div>
        </div>
    </div>  
        </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(pwfVideoMaker);
