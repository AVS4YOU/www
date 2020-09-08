import React from "react";
import withI18next from "../components/withI18next";
import "../styles/video-editor-maker-tools.less";
import MenuWrapper from "../components/language-selector";
import Layout from "../components/layout";
import Text from '../components/text';
import Star from '../images/main-page/icons/star.svg';

class movVideoEditor extends React.PureComponent {

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
        className="mov-video-editor" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        metaDescription=""
        metaKeywords=""
      >
        <div className="vel_header">
        <div className="header_image">         
        <div className="rotating_image rimage_4"></div><div className="rotating_image rimage_5"></div><div className="rotating_image rimage_1" ></div><div className="rotating_image rimage_2"></div><div className="rotating_image rimage_3"></div></div>
        <div className="vel_content">
            <div className="vel_page_header">
                <div className="vph_logo"><a href="https://www.avs4you.com/"></a></div>
                <div className="vph_menu">
                </div>
                <div className="language_inside">
                        <MenuWrapper availableLocales={this.props.availableLocales} locale={this.props.locale} className="desktopBlock" isMobile={this.props.isMobile} menuItemText={this.props.t("CurrentLanguage")} />
                </div>
            </div>
            <div className="vel_narrow">
                <Text color="FFFFFF" className="TextH1">{this.props.t("AVS Video Editor")}</Text>
                <div className="vel_description">{this.props.t("Create professional-looking movies fast and effectively, and save them to all popular formats")} <span className="vel_desc_formats">{this.props.t("DVD, MPEG, MP4, AVI, MOV, WMV, FLV etc.")}</span></div>
                <div className="vel_top_buttons">
                    <div className="vel_top_download">
                        <a className="button download" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">{this.props.t("Download now")}</a>
                        <span>{this.props.t("Windows 10/8/XP/Vista")}</span>
                    </div>
                    <div className="vel_top_buy">
                        <a className="button buynow" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=2&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1">{this.props.t("Buy now")}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vel_stars" id="video_editor_landing1">
        <div className="vel_narrow">
            <div className="vel_happy_users">
            <div class="vel_stars">
            <div className="imgWrapper">
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                        <img src={Star} alt="star"/>
                    </div>
                </div>
                <div className="vel_users">{this.props.t("Over")} <b>50,000,000</b> {this.props.t("Happy Users.")}</div>
                <div className="vel_button">
                    <div className="velb_button"><span id="reviewsNumber">659475</span> {this.props.t("Reviews")}</div>
                </div>
            </div>
            <div className="vel_quote">
                <blockquote>
                {this.props.t("I've been using AVS Video Editor for more than 10 years and it is an excellent product, in my opinion.")}
                    <div className="quote_user">{this.props.t("William Holmes")}</div>
                </blockquote>
            </div>
        </div>
    </div>
    <div className="vel_features">
        <div className="vel_narrow">
            <Text className="TextH2">{this.props.t("4 reasons to choose AVS Video Editor")}</Text>
            <div className="vel_features_block">
                <div className="vel_feature_rotate">
                    <div className="velf_block velfeat_block1">
                        <Text className="TextH3">{this.props.t("Multiformat movie editor")}</Text>
                        <div className="velfb_description">{this.props.t("Thanks to the inbuilt video converter you can work with any video format in AVS Video Editor. Import and save your video in all key formats such as MP4, MPEG, DVD, AVI, MOV, FLV, MTS, WebM, etc.")}</div>
                    </div>
                    <div className="velf_block velfeat_block2">
                        <Text className="TextH3">{this.props.t("2k and 4k video editing")}</Text>
                        <div className="velfb_description">{this.props.t("Editing of 2k and 4k video has become easier as never before due to  integrated video cache technology. Achieve amazing results editing high resolution video files.")}</div>
                    </div>
                    <div className="velf_block velfeat_block3">
                        <Text className="TextH3">{this.props.t("An array of creative features")}</Text>
                        <div className="velfb_description">{this.props.t("Apply 300+ modern video effects to make breathtaking videos. Chroma key, color tuning, slow motion, video stabilization, screen capture and others are the most popular.")}</div>
                    </div>
                    <div className="velf_block velfeat_block4">
                        <Text className="TextH3">{this.props.t("Create video for your Devices")}</Text>
                        <div className="velfb_description">{this.props.t("Save your final projects to the necessary format which is supported by your device be it a smartphone, phablet or a player. No need to adjust special settings, just select your gadget from the list.")}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="vel_edit_enhance">
        <div className="vel_narrow">
            <Text className="TextH2">{this.props.t("3 Reasons Why People Choose AVS4YOU")}</Text>
            <div className="vel_ee_blocks">
                <div className="velee_block veleeb_1">
                    <Text className="TextH4">{this.props.t("User-friendly Interface")}</Text>
                </div>
                <div className="velee_block veleeb_2">
                    <Text className="TextH4">{this.props.t("Free support and updates")}</Text>
                </div>
                <div className="velee_block veleeb_3">
                    <Text className="TextH4">{this.props.t("30-day Money-back guarantee")}</Text>
                </div>
            </div>
            <div className="vel_bottom_buttons">
                <div className="vel_bottom_download">
                    <a className="button download" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">{this.props.t("Download AVS Video Editor")}</a>
                </div>
                <div className="vel_bottom_buy">
                    <a className="button buynow" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=2&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1">{this.props.t("Buy")}</a>
                </div>
            </div>
        </div>
    </div>
    <div className="vel_footer">
        <div className="vel_page_footer">
            <div className="vph_logo"><a href="https://www.avs4you.com/"></a></div>
            <div className="vph_menu vph_menu_footer">
                <ul>
                    <li><a href="https://www.avs4you.com/downloads.aspx">{this.props.t("Downloads")}</a></li>
                    <li><a href="https://www.avs4you.com/register.aspx">{this.props.t("Buy now")}</a></li>
                    <li><a href="https://www.avs4you.com/guides/index.aspx">{this.props.t("Help")}</a></li>
                    <li><a href="https://support.avs4you.com/login.aspx">{this.props.t("Support")}</a></li>
                    <li><a href="https://www.avs4you.com/contact.aspx">{this.props.t("Contact us")}</a></li>
                </ul>
                <div className="vph_copyright">© <a className="blacklink" href="https://www.avs4you.com/index.aspx">{this.props.t("Online Media Technologies&nbsp;Ltd.,&nbsp;UK")}</a>{this.props.t(" 2020 &nbsp; All rights reserved.")}</div>
            </div>
            <div className="lfn-social">
                <a className="lfns-button-footer lfnsb-fb-footer" target="_blank" title="Facebook" href="https://www.facebook.com/avs4you"></a>
                <a className="lfns-button-footer lfnsb-tw-footer" target="_blank" title="Twitter" href="https://www.twitter.com/avs4you"></a>
                <a className="lfns-button-footer lfnsb-gp-footer" target="_blank" title="Google+" href="https://plus.google.com/u/0/b/105357609614583331144/+avs4you/posts"></a>
                <a className="lfns-button-footer lfnsb-yt-footer" target="_blank" title="YouTube" href="https://www.youtube.com/user/avs4you"></a>
            </div>
        </div>
    </div>
    </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(movVideoEditor);