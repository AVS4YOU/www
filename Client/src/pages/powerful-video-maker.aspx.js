import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import PWM from "../components/cinema-slider-redactor/pwm";


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
      
        <ProductPagesWrapper>  
            <div class="vel_header">
            <video autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
            <source src="https://imgs.avs4you.com/en/images/landing/video-editor-2/video/maker.mp4" type="video/mp4" />
            <source src="https://imgs.avs4you.com/en/images/landing/video-editor-2/video/maker.webm" type="video/mp4" />
            Your browser does not support HTML5 video.
            </video>
        <div class="vel_content">
            <div class="vel_page_header">
                <div class="vph_logo"><a href="https://www.avs4you.com/"></a></div>
                <div class="vph_menu">
                </div>
                <div class="language_inside">
                    <ul class="language">
                        <li class="default">English</li>
                    </ul>
                    
                </div>
            </div>
            <div class="vel_narrow">
                <h1>AVS Video Editor</h1>
                <div class="vel_description">Powerful video maker<br />
                    Create professional-looking movies easily</div>
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
        <div class="vel_stars" id="video_editor_landing1">
            <div class="vel_narrow">
                <div class="vel_happy_users">
                    
                    <div class="vel_users">Over <b>50,000,000</b> Happy Users.</div>
                    <div class="vel_button">
                        <div class="velb_button"><span id="reviewsNumber">659476</span> Reviews</div>
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
    </div>
    <PWM />
   <div class="vel_edit_enhance">
        <div class="vel_narrow">
            <h2>Innovative movie editing tools</h2>
            <div class="vel_ee_blocks">
                <div class="velee_block veleeb_1">
                    <h3>Creative video making</h3>
                    <div class="velee_description">Select between 300 innovative video effects and transitions. Insert menus, audio, text comments and subtitles.</div>
                </div>
                <div class="velee_block veleeb_2">
                    <h3>Multiformat video creator</h3>
                    <div class="velee_description">Edit &amp; save video files in  MP4, MPEG, DVD, AVI, VOB, WMV, 3GP, MOV, MKV, FLV, WEBM using popular codecs H.264, MPEG-4, etc.</div>
                </div>
                <div class="velee_block veleeb_3">
                    <h3>Accelerated HD-video editing</h3>
                    <div class="velee_description">Due to the integrated video cache technology, HD and 4K video editing becomes faster. Work with any video formats and file sizes.</div>
                </div>
            </div>
            <div class="vel_bottom_buttons">
                <div class="vel_bottom_download">
                    <a class="button download" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" onclick="evtmng(this)">Download AVS Video Editor</a>
                </div>
                <div class="vel_bottom_buy">
                    <a class="button buynow" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=2&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1">Buy</a>
                </div>
                <div class="vel_bottom_eula">By clicking the Download button you agree to our <a href="https://www.avs4you.com/license-agreement.aspx">End User License Agreement</a></div>
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
        </ProductPagesWrapper>
    );
  }
};
export default withI18next({ ns: "common" })(pwfVideoMaker);