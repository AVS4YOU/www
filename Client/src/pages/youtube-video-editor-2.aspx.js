import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import ImageGQL from '../components/image-gql';
import { ScrollLink } from "react-scroll";
import Layout from "../components/layout";
import Link from "../components/link";

const date = new Date();
const currentYear = date.getFullYear();

class avsYoutubeVideoEditor extends React.PureComponent {

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
      className="youtube-video-editor2" 
      pageContext={this.props.pageContext} 
      t={this.props.t}
      metaDescription=""
      metaKeywords=""
    > 
        <div className="overv ve offset-top">
            <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTE2Njk0NTAxNDZkZGiBCsJb/cMSY5SVfxBuNuD7Iac6Bb5gp9fljuTH1uNw" />
            </div>

        <div className="aspNetHidden">
            <input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="178198E7" />
        </div>
                <div id="centerall">
                    <div className="toppart">
                        
    
<header className="Youtubeheader">
    <div className="lfb_header">
    <Link className="lfb_logo" to="/" target="_blank" rel="noreferrer noopener"></Link>
        <ul className="topmainmenu max-width-1">
            <li className="topmenuoption"><Link to="/" target="_blank" rel="noreferrer noopener">Main</Link></li>
            <ScrollLink to="to_easy_steps" spy={true} smooth={true}>
            <li className="topmenuoption to_easy_steps">Steps</li>
            </ScrollLink>
            <ScrollLink to="to_testimonials" spy={true} smooth={true}>
            <li className="topmenuoption to_testimonials">Testimonials</li>
            </ScrollLink>
            <li className="topmenuoption with_link"><a className="lfb_download_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></li>
            <li className="aclose">×</li>
        </ul>
    </div>
</header>

                        
<div className="lfb_top_main">
  <div className="lfb_head_text">
    <div className="lfb_ht_header">
      Your YouTube career starts with <span>AVS Video Editor</span>
    </div>
    <div className="lfb_ht_subheader">
      Easily create professional-looking clips or vlogs
    </div>
    <div className="lfb_txt_div"><a className="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
  </div>
  <div className="lfb_head_img"><ImageGQL imageName="main_picture-youtube.png" alt="Professional-looking clips or vlogs" /></div>
</div>
                    </div>
                    <div id="mainbody">
                        
    

<div className="lfb_why_choose">
    <div className="lfb_wc_h">Why choose AVS4YOU</div>
    <div className="lfb_wc_icons">
        <div className="lfb_wc_i lfb_wci_screen">Simple, but feature-rich</div>
        <div className="lfb_wc_i lfb_wci_mp4">Popular video formats</div>
        <div className="lfb_wc_i lfb_wci_cam">Any type of content</div>
        <div className="lfb_wc_i lfb_wci_set">Smart presets</div>
    </div>
</div>
<div className="lfb_steps" id="to_easy_steps">
    <div className="lfb_s_h">4 Steps for creating<br /> your captivating video</div>
    <div className="lfb_step lfb_step_1">
        <div className="lfb_img lfb_img_r"><ImageGQL className="lfb_i" imageName="prepare_your_material.webp" /></div>
        <div className="lfb_s_text">
            <div className="lfb_st_h">Prepare your material</div>
            <div className="lfb_st_sh">Capture video from your DV/HDV cameras, webcams or VHS cameras. Upload video recordings and video files stored on your PC.</div>
            <ScrollLink to="lfb_step_2" spy={true} smooth={true}>
            <div className="lfb_st_btn to_2">Step 1</div>
            </ScrollLink>
            
        </div>
    </div>
    <div className="lfb_step lfb_step_2" id="lfb_step_2">
        <div className="lfb_img lfb_img_l"><ImageGQL className="lfb_i" imageName="clean_and_assemble.webp" /></div>
        <div className="lfb_s_text">
            <div className="lfb_st_h">Clean and assemble</div>
            <div className="lfb_st_sh">Cut unnecessary parts, trim or join video. Remove defects with smart color correction tools and video stabilization.</div>
            <ScrollLink to="lfb_step_3" spy={true} smooth={true}>
            <div className="lfb_st_btn to_3">Step 2</div>
            </ScrollLink>
            
        </div>
    </div>
    <div className="lfb_step lfb_step_3" id="lfb_step_3">
        <div className="lfb_img lfb_img_r"><ImageGQL className="lfb_i" imageName="convert_details.webp" /></div>
        <div className="lfb_s_text">
            <div className="lfb_st_h">Convert details into engagement</div>
            <div className="lfb_st_sh">Apply 300+ impressive video, audio and draw effects and transitions (play with 300+ impressive effects and colorful transitions).</div>
            <ScrollLink to="lfb_step_4" spy={true} smooth={true}>
            <div className="lfb_st_btn to_4">Step 3</div>
            </ScrollLink>
            
        </div>
    </div>
    <div className="lfb_step lfb_step_4" id="lfb_step_4">
        <div className="lfb_img lfb_img_l"><ImageGQL className="lfb_i" imageName="launch_your_project.webp" /></div>
        <div className="lfb_s_text">
            <div className="lfb_st_h">Launch your project to the orbit</div>
            <div className="lfb_st_sh">Save your project choosing one of specially designed templates depending on the desired quality of the output video.</div>
            <div className="lfb_st_btn"><a href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
        </div>
    </div>
</div>

                    </div>
                    <div id="testimonials">
                        
    

    <div className="testimonials" id="to_testimonials">
    <div className="lfb_ocs">Our customers say</div>
    <div className="lfb_stars">
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
        <div className="lfb_star"></div>
    </div>
    
    <div className="lfb_carousel">
        <div className="slick-reviews slick-initialized slick-slider">
            <div aria-live="polite" className="slick-list draggable"><div className="slick-track"><div className="item slick-slide slick-active" data-slick-index="0" aria-hidden="false">
                <div className="lfb_av lfb_av_as"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">Andy Stephens</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">I love the editor and all your apps which have helped me create nearly 2000 YouTube vids!</div>
            </div><div className="item slick-slide slick-active" data-slick-index="1" aria-hidden="false">
                <div className="lfb_av lfb_av_wh"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">William Holmes</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">I've been using AVS Video Editor for more than 10 years and it is an excellent product, in my opinion.</div>
            </div><div className="item slick-slide slick-active" data-slick-index="2" aria-hidden="false">
                <div className="lfb_av lfb_av_os"></div>
                <div className="lfb_profile">
                    <div className="lfb_name">Olivia Seltzer</div>
                    <div className="lfb_vb">Video blogger</div>
                </div>
                <div className="lfb_rev">In spite of being a person who did not have a formal computer training, I was able to edit 40 hours of video into 4 hours. I have been constantly using AVS Video Editor for the past two and half years. I am thrilled with the results</div>
            </div></div></div>
            
            
        </div>
    </div>
</div>

                    </div>
                    <div className="hFooter"></div>
                </div>
                <div id="footer">
                    
<div className="vel_footer">
    <div className="vel_page_footer">
        <div className="vph_logo"><Link to="/" target="_blank" rel="noreferrer noopener"></Link></div>
        <div className="vph_menu_footer">
            <ul>
                <li><Link to="/downloads.aspx" target="_blank" rel="noreferrer noopener">Downloads</Link></li>
                <li><Link to="/register.aspx" target="_blank" rel="noreferrer noopener">Buy now</Link></li>
                <li><a href="https://www.avs4you.com/Guides/index.aspx" target="_blank" rel="noreferrer noopener">Help</a></li>
                <li><a href="https://support.avs4you.com/login.aspx" target="_blank" rel="noreferrer noopener">Support</a></li>
                <li><Link to="/about-us.aspx#contact-us" target="_blank" rel="noreferrer noopener">Contact us</Link></li>
            </ul>
            <div className="vph_copyright"><Link to="/">{this.props.t("Online Media Technologies Ltd, UK")}</Link> {currentYear} {this.props.t("All rights reserved")}</div>
        </div>
        <div className="lfn-social">
            <a className="lfns-button lfnsb-yt" target="_blank" rel="noreferrer noopener" title="Follow us on YouTube" href="https://www.youtube.com/user/avs4you"> </a>
            <a className="lfns-button lfnsb-fb" target="_blank" rel="noreferrer noopener" title="Follow us on Facebook" href="https://www.facebook.com/avs4you"> </a>
            <a className="lfns-button lfnsb-tw" target="_blank" rel="noreferrer noopener" title="Follow us on Twitter" href="https://www.twitter.com/avs4you"> </a>
            <a className="lfns-button lfnsb-pi" target="_blank" rel="noreferrer noopener" title="Follow us on Pinterest" href="https://pinterest.com/avs4you/"> </a>
        </div>
    </div>
</div>
                </div>
            

        </div>
</Layout>
        );
    }
  };
  export default withI18next({ ns: "common" })(avsYoutubeVideoEditor);