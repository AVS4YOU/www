import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import MenuWrapper from "../components/language-selector";
import Layout from "../components/layout";
import PWM from "../components/cinema-slider-redactor/pwm";
import Text from '../components/text';
import Star from '../images/main-page/icons/star.svg';
import Link from '../components/link';
import videoDiv from '../images/avs-video-editor-tools/video/diving.webm';

const date = new Date();
const currentYear = date.getFullYear();
class preciseVideoCuttingTools extends React.PureComponent {

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
         <div className="vel_header">
         <video autoPlay loop muted id="myVideo">
            <source src={videoDiv} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className="vel_content">
            <div className="vel_page_header">
                <div className="vph_logo"><Link id="home1_precise-video-cutting-tools" to="/"></Link></div>
                <div className="vph_menu">
                </div>
                <div className="language_inside">
                <MenuWrapper availableLocales={this.props.availableLocales} locale={this.props.locale} className="desktopBlock" isMobile={this.props.isMobile} menuItemText={this.props.t("CurrentLanguage")} />
                </div>
            </div>
            <div className="vel_narrow">
                <Text fontSize={66} color="FFFFFF" className="TextH1">{this.props.t("AVS Video Editor")}</Text>
                <div className="vel_description">{this.props.t("Trim, cut, split, crop, merge, rotate videos to create impressive movies")}</div>
                <div className="vel_top_buttons">
                    <div className="vel_top_download">
                        <a className="button download" id="download-now_precise-video-cutting-tools" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">{this.props.t("Download now")}</a>
                        <span>{this.props.t("Windows 10/8/XP/Vista")}</span>
                    </div>
                    <div className="vel_top_buy">
                        <a className="button buynow" id="buy-now_precise-video-cutting-tools" href={this.props.t("defaultHrefUnlim")}>{this.props.t("Buy now")}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vel_stars_tools" id="video_editor_landing1">
        <div className="vel_narrow">
            <div className="vel_happy_users">
            <div class="vel_stars_tools">
            <div className="imgWrapper">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                </div>
                <div className="vel_users">{this.props.t("Over")} <b>{this.props.t("50,000,000")}</b> {this.props.t("Happy Users")}</div>
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
    <PWM
    Trim = {this.props.t("Trim and multi-trim")}
    Cut = {this.props.t("Cut")}
    Split = {this.props.t("Split")}
    Crop = {this.props.t("Crop")}
    Merge = {this.props.t("Merge")}
    HeaderSlider = {this.props.t("5 Precise video cutting tools")}
    SliderText = {[    
        { 
          imgText: this.props.t("Want to cut out a particular scene or remove shaky and useless parts from a camcorder video to save space on your hard drive You can effectively keep any part of the video but remove the rest in Timeline editing with the inbuilt video trimmer in AVS Video Editor")}, 
        { 
            imgText: this.props.t("Cut videos to the desired length or delete unnecessary scenes This video cutter will shorten your video in a few clicks so that you can easily playback your video clips on a mobile device")},   
        { 
            imgText: this.props.t("Split videos regardless both the video size and formats Cut your clip into smaller sections, without losing any frames in the process The clips can then be trimmed or edited separately")},    
        { 
            imgText: this.props.t("Combine as many video files as you want and save them to all popular formats accepted by literally all PC's, mobile phones, TVs and multimedia systems Join clips into a long movie in a couple of clicks")},
        { 
            imgText: this.props.t("Crop your video to delete unnecessary parts such as black borders and draw your viewers attention to interesting or important elements") },         
      ]}   
    ></PWM>
    <div className="vel_edit_enhance">
        <div className="vel_narrow">
            <Text fontSize={40} className="TextH2">{this.props.t("Give your movie a cinematic look")}</Text>
            <div className="vel_ee_blocks">
                <div className="velee_block veleeb_tools_1">
                    <Text fontSize={18} className="TextH3">{this.props.t("Edit your videos with fantasy")}</Text>
                    <div className="velee_description">{this.props.t("Select between 300 innovative video effects and transitions Insert menus, audio, text comments and subtitles")}</div>
                </div>
                <div className="velee_block veleeb_tools_2">
                    <Text fontSize={18} className="TextH3">{this.props.t("Stabilize your videos")}</Text>
                    <div className="velee_description">{this.props.t("Eliminate negative effects of your camera shake making video smooth")}</div>
                </div>
                <div className="velee_block veleeb_tools_3">
                    <Text fontSize={18} className="TextH3">{this.props.t("Edit HD videos of any size")}</Text>
                    <div className="velee_description">{this.props.t("Due to the integrated video cache technology, HD and 4K video editing becomes faster Work with any video formats and file sizes")}</div>
                </div>
            </div>
            <div className="vel_bottom_buttons">
                <div className="vel_bottom_download">
                    <a className="button download" id="download-ve_precise-video-cutting-tools" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">{this.props.t("Download AVS Video Editor")}</a>
                </div>
                <div className="vel_bottom_buy">
                    <a className="button buynow" id="buy_precise-video-cutting-tools" href={this.props.t("defaultHrefUnlim")}>{this.props.t("Buy")}</a>
                </div>
            </div>
        </div>
    </div>
    
    <div className="vel_footer">
        <div className="vel_page_footer">
            <div className="vph_logo"><Link id="home3_precise-video-cutting-tools" to="/"></Link></div>
            <div className="vph_menu vph_menu_footer">
                <ul>
                    <li style={{fontSize:"14px"}}><Link id="downloads_precise-video-cutting-tools" to="/downloads.aspx">{this.props.t("Downloads")}</Link></li>
                    <li style={{fontSize:"14px"}}><Link id="register_precise-video-cutting-tools" to="/register.aspx">{this.props.t("Buy now")}</Link></li>
                    <li style={{fontSize:"14px"}}><a id="help_precise-video-cutting-tools" target="_blank" rel="noreferrer noopener" href="https://www.avs4you.com/guides/index.aspx">{this.props.t("Help")}</a></li>
                    <li style={{fontSize:"14px"}}><a id="support_precise-video-cutting-tools" target="_blank" rel="noreferrer noopener" href="https://support.avs4you.com/login.aspx">{this.props.t("Support")}</a></li>
                    <li style={{fontSize:"14px"}}><Link id="contact-us_precise-video-cutting-tools" to="/about-us.aspx#contact-us">{this.props.t("Contact us")}</Link></li>
                </ul>
                <div className="vph_copyright"><Link id="home2_precise-video-cutting-tools" to="/">{this.props.t("Ascensio System SIA")}</Link> {currentYear} {this.props.t("All rights reserved")}</div>
            </div>
            <div className="lfn-social">
            <a className="lfns-button lfnsb-yt" target="_blank" rel="noreferrer noopener" title="Follow us on YouTube" id="youtube_precise-video-cutting-tools" href="https://www.youtube.com/user/avs4you"> </a>
            <a className="lfns-button lfnsb-fb" target="_blank" rel="noreferrer noopener" title="Follow us on Facebook" id="facebook_precise-video-cutting-tools" href="https://www.facebook.com/avs4you"> </a>
            <a className="lfns-button lfnsb-tw" target="_blank" rel="noreferrer noopener" title="Follow us on Twitter" id="twitter_precise-video-cutting-tools" href="https://www.twitter.com/avs4you"> </a>
            <a className="lfns-button lfnsb-pi" target="_blank" rel="noreferrer noopener" title="Follow us on Pinterest" id="pinterest_precise-video-cutting-tools" href="https://pinterest.com/avs4you/"> </a>
        </div>
        </div>
    </div>   
        
        </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(preciseVideoCuttingTools);
