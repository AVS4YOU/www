import React from "react";
import withI18next from "../components/withI18next";
import "../styles/video-editor-maker-tools.less";


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
        <div>
        <div class="vel_header">
        <div class="header_image">         
        <div class="rotating_image rimage_4"></div><div class="rotating_image rimage_5"></div><div class="rotating_image rimage_1" ></div><div class="rotating_image rimage_2"></div><div class="rotating_image rimage_3"></div></div>
        <div class="vel_content">
            <div class="vel_page_header">
                <div class="vph_logo"><a href="https://www.avs4you.com/"></a></div>
                <div class="vph_menu">
                </div>
                <div class="language_inside">
                    <ul class="language">
                        <li class="default">English</li>
                    </ul>
                    <ul class="languages_menu" style={{display:"none"}}>
                        <li class="lang fr" style={{display:"none"}}><a href="https://www.avs4you.com/fr/mov-video-editor.aspx">Français</a></li><li class="lang de" style={{display:"none"}}><a href="https://www.avs4you.com/de/mov-video-editor.aspx">Deutsch</a></li><li class="lang es" style={{display:"none"}}><a href="https://www.avs4you.com/es/mov-video-editor.aspx">Español</a></li><li class="lang it" style={{display:"none"}}><a href="https://www.avs4you.com/it/mov-video-editor.aspx">Italiano</a></li><li class="lang jp" style={{display:"none"}}><a href="https://www.avs4you.com/jp/mov-video-editor.aspx">日本語</a></li>
                    </ul>
                </div>
            </div>
            <div class="vel_narrow">
                <h1>AVS Video Editor</h1>
                <div class="vel_description">Create professional-looking movies fast and effectively, and save them to all popular formats <span class="vel_desc_formats">DVD, MPEG, MP4, AVI, MOV, WMV, FLV etc.</span></div>
                <div class="vel_top_buttons">
                    <div class="vel_top_download">
                        <a class="button download" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">Download now</a>
                        <span>Windows 10/8/XP/Vista</span>
                    </div>
                    <div class="vel_top_buy">
                        <a class="button buynow" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=2&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1">Buy now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vel_stars" id="video_editor_landing1">
        <div class="vel_narrow">
            <div class="vel_happy_users">
                <div class="vel_stars">
                </div>
                <div class="vel_users">Over <b>50,000,000</b> Happy Users.</div>
                <div class="vel_button">
                    <div class="velb_button"><span id="reviewsNumber">659475</span> Reviews</div>
                </div>
            </div>
            <div class="vel_quote">
                <blockquote>
                    "I've been using AVS Video Editor for more than 10 years and it is an excellent product, in my opinion."
                    <div class="quote_user">William Holmes</div>
                </blockquote>
            </div>
        </div>
    </div>
    <div class="vel_features">
        <div class="vel_narrow">
            <h2>4 reasons to choose AVS Video Editor</h2>
            <div class="vel_features_block">
                <div class="vel_feature_rotate">
                    <div class="velf_block velfeat_block1">
                        <h3>Multiformat movie editor</h3>
                        <div class="velfb_description">Thanks to the inbuilt video converter you can work with any video format in AVS Video Editor. Import and save your video in all key formats such as MP4, MPEG, DVD, AVI, MOV, FLV, MTS, WebM, etc.</div>
                    </div>
                    <div class="velf_block velfeat_block2">
                        <h3>2k and 4k video editing</h3>
                        <div class="velfb_description">Editing of 2k and 4k video has become easier as never before due to  integrated video cache technology. Achieve amazing results editing high resolution video files.</div>
                    </div>
                    <div class="velf_block velfeat_block3">
                        <h3>An array of creative features</h3>
                        <div class="velfb_description">Apply 300+ modern video effects to make breathtaking videos. Chroma key, color tuning, slow motion, video stabilization, screen capture and others are the most popular.</div>
                    </div>
                    <div class="velf_block velfeat_block4">
                        <h3>Create video for your Devices</h3>
                        <div class="velfb_description">Save your final projects to the necessary format which is supported by your device be it a smartphone, phablet or a player. No need to adjust special settings, just select your gadget from the list.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vel_edit_enhance">
        <div class="vel_narrow">
            <h2>3 Reasons Why People Choose AVS4YOU</h2>
            <div class="vel_ee_blocks">
                <div class="velee_block veleeb_1">
                    <h4>User-friendly Interface</h4>
                </div>
                <div class="velee_block veleeb_2">
                    <h4>Free support and updates</h4>
                </div>
                <div class="velee_block veleeb_3">
                    <h4>30-day Money-back guarantee</h4>
                </div>
            </div>
            <div class="vel_bottom_buttons">
                <div class="vel_bottom_download">
                    <a class="button download" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">Download AVS Video Editor</a>
                </div>
                <div class="vel_bottom_buy">
                    <a class="button buynow" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=2&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1">Buy</a>
                </div>
            </div>
        </div>
    </div>
    <div class="vel_footer">
        <div class="vel_page_footer">
            <div class="vph_logo"><a href="https://www.avs4you.com/"></a></div>
            <div class="vph_menu vph_menu_footer">
                <ul>
                    <li><a href="https://www.avs4you.com/downloads.aspx">Downloads</a></li>
                    <li><a href="https://www.avs4you.com/register.aspx">Buy now</a></li>
                    <li><a href="https://www.avs4you.com/guides/index.aspx">Help</a></li>
                    <li><a href="https://support.avs4you.com/login.aspx">Support</a></li>
                    <li><a href="https://www.avs4you.com/contact.aspx">Contact us</a></li>
                </ul>
                <div class="vph_copyright">© <a class="blacklink" href="https://www.avs4you.com/index.aspx">Online Media Technologies&nbsp;Ltd.,&nbsp;UK</a> 2020 &nbsp; All rights reserved.</div>
            </div>
            <div class="lfn-social">
                <a class="lfns-button lfnsb-fb" target="_blank" title="Facebook" href="https://www.facebook.com/avs4you"></a>
                <a class="lfns-button lfnsb-tw" target="_blank" title="Twitter" href="https://www.twitter.com/avs4you"></a>
                <a class="lfns-button lfnsb-gp" target="_blank" title="Google+" href="https://plus.google.com/u/0/b/105357609614583331144/+avs4you/posts"></a>
                <a class="lfns-button lfnsb-yt" target="_blank" title="YouTube" href="https://www.youtube.com/user/avs4you"></a>
            </div>
        </div>
    </div>
    </div>
    );
  }
};
export default withI18next({ ns: "common" })(movVideoEditor);