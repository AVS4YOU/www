import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import ImageGQL from '../components/image-gql';
import { ScrollLink } from "react-scroll";
import Slider from "react-slick";
import Layout from "../components/layout";
import Link from "../components/link";

const date = new Date();
const currentYear = date.getFullYear();

  function customPaging(i) {
    return (
        <ul className="slick-dots" id="slick-steps">
            {i === 0 ? 
             <li aria-hidden="false" ><div className="lfb_tab lfb_btn_capture"><div className="lfb_es_icon"></div>Capture video</div></li>
            : i === 1 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_cut" ><div className="lfb_es_icon"></div>Cut, trim and join</div></li>
            : i === 2 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_apply" ><div className="lfb_es_icon"></div>Apply effects</div></li>
            : i === 3 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_remove" ><div className="lfb_es_icon"></div>Remove defects</div></li>
            : i === 4 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_use" ><div className="lfb_es_icon"></div>Change background</div></li>
            : i === 5 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_addtracks" ><div className="lfb_es_icon"></div>Add your audio tracks</div></li>
            : i === 6 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_insert" ><div className="lfb_es_icon"></div>Add text</div></li>
            : i === 7 ? <li aria-hidden="true" ><div className="lfb_tab lfb_btn_save" ><div className="lfb_es_icon"></div>Upload to YouTube</div></li> 
            : ''}
        </ul>
    );
  }
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
    const settings = {
        fade:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity:false,
        dots: true,
        dotsClass: "slick-dots",
        customPaging: customPaging,
      };
      const youtubeSlidesImage = [{
        nameSlide:"capture_video.webp",  
      },{
        nameSlide:"cut_trim_join.webp",  
      },{
        nameSlide:"apply_effects.webp",  
      },{
        nameSlide:"remove_defects.webp",  
      },{
        nameSlide:"change_background.webp",  
      },{
        nameSlide:"add_you_audio_tracks.webp",  
      },{
        nameSlide:"add_text.webp",  
      },{
        nameSlide:"upload_to_youtube.webp",  
      },
    ]
      const youtubeSlides = () =>  
      youtubeSlidesImage.map(num => (
          <div className="youtubeSlides">
            <ImageGQL imageName={num.nameSlide} className={num.nameSlide}/>
          </div>    
        ));  
    return (
      
      <Layout 
      headerIsDisabled={true}
      footerIsDisabled={true}
      className="youtube-video-editor" 
      pageContext={this.props.pageContext} 
      t={this.props.t}
      metaDescription=""
      metaKeywords=""
    > 
          <header className="Youtubeheader">
    <div className="lfb_header">
        <Link className="lfb_logo" id="home1_youtube-video-editor" to="/" target="_blank" rel="noreferrer noopener"></Link><ul className="topmainmenu max-width-1">
            <li className="topmenuoption"><Link id="home2_youtube-video-editor" to="/" target="_blank" rel="noreferrer noopener">Main</Link></li>
            <ScrollLink to="to_easy_steps" spy={true} smooth={true}>
            <li className="topmenuoption to_easy_steps">Steps</li>
            </ScrollLink>
            <ScrollLink to="to_wcaqm" spy={true} smooth={true}>
            <li className="topmenuoption to_wcaqm">Advantages</li>
            </ScrollLink>
            <ScrollLink to="to_testimonials" spy={true} smooth={true}>
            <li className="topmenuoption to_testimonials">Testimonials</li>
            </ScrollLink>
            <li className="topmenuoption with_link"><a className="lfb_download_btn" id="download1_youtube-video-editor" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></li>
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
    <div className="lfb_txt_div"><a className="lfb_download_btn lfb_tm_btn" id="download2_youtube-video-editor" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
  </div>
  <div className="lfb_head_img"><ImageGQL imageName="main_picture-youtube.png" alt="Professional-looking clips or vlogs" /></div>
</div>
    <div id="mainbody">
    
    <div className="lfb_steps" id="to_easy_steps">
        <div className="lfb_easy_steps">Easy steps for creating your captivating video</div>
            <div className="lfb_easy_steps_car">
            <Slider
                className="youtubePersonSlider"
                {...settings}>
                {youtubeSlides()}
                </Slider>         
        </div>
    </div>  
    

<div className="lfb_wcaqm" id="to_wcaqm">
    <div className="lfb_wcaqm_h">Why choose AVS4YOU</div>
    <div className="lfb_reasons">
        <div className="lfb_reas_block">
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="any.png" />
            <div className="lfb_reas_h">Any type of content</div>
            <div className="lfb_reas_t">Generate content for any blogging format, from tutorials and training videos to slideshows and reviews</div>
        </div>
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="smart.png" />
            <div className="lfb_reas_h">Smart presets</div>
            <div className="lfb_reas_t">Use specially designed templates depending on the desired quality of the output video when saving your project</div>
        </div>
        </div>
        <div className="lfb_reas_block">
        <div className="lfb_reason lfb_reason_center">
            <ImageGQL className="lfb_reas_i" imageName="simple.png" />
            <div className="lfb_reas_h">Simple, but feature-rich</div>
            <div className="lfb_reas_t">AVS Video Editor is easy to learn, regardless of skill level. It is simple but has all necessary tools to make high-quality video</div>
        </div>
        </div>
        <div className="lfb_reas_block">
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="popular.png" />
            <div className="lfb_reas_h">Popular video formats</div>
            <div className="lfb_reas_t">Work with all key video formats such as MP4, MOV, AVI, WMV, FLV, AVCHD, MPEG and common video codecs H.264, MPEG-4,DivX,MPEG-2, HEVC (H.265)</div>
        </div>
        <div className="lfb_reason">
            <ImageGQL className="lfb_reas_i" imageName="high.png" />
            <div className="lfb_reas_h">High-definition video</div>
            <div className="lfb_reas_t">Create video with different frame sizes: HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</div>
        </div>
        </div>
        <div className="lfb_txt_div lfb_reas_btn"><a className="lfb_download_btn lfb_tm_btn" id="download3_youtube-video-editor" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
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
    

<div className="lfb_perf_sln">
    <div className="lfb_psln">
        <div className="lfb_ps_h">Perfect solution for video bloggers</div>
        <div className="lfb_ps_sh">Create your first video right now!</div>
        <div className="lfb_txt_div"><a className="lfb_download_btn lfb_tm_btn" id="download4_youtube-video-editor" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
    </div>
</div>

                    </div>
                    <div className="hFooter"></div>
         
                <div id="footer">
                    
<div className="vel_footer">
    <div className="vel_page_footer">
        <div className="vph_logo"><Link id="footer-home_youtube-video-editor" to="/" target="_blank" rel="noreferrer noopener"></Link></div>
        <div className="vph_menu_footer">
            <ul>
                <li><Link id="downloads_youtube-video-editor" to="/downloads.aspx" target="_blank" rel="noreferrer noopener">Downloads</Link></li>
                <li><Link id="buy-now_youtube-video-editor" to="/register.aspx" target="_blank" rel="noreferrer noopener">Buy now</Link></li>
                <li><a id="help_youtube-video-editor" href="https://www.avs4you.com/Guides/index.aspx" target="_blank" rel="noreferrer noopener">Help</a></li>
                <li><a id="support_youtube-video-editor" href="https://support.avs4you.com/login.aspx" target="_blank" rel="noreferrer noopener">Support</a></li>
                <li><Link id="contact-us_youtube-video-editor" to="/about-us.aspx#contact-us" target="_blank" rel="noreferrer noopener">Contact us</Link></li>
            </ul>
            <div className="vph_copyright"><Link id="home3_youtube-video-editor" to="/">{this.props.t("Ascensio System SIA")}</Link> {currentYear} {this.props.t("All rights reserved")}</div>
        </div>
        <div className="lfn-social">
            <a className="lfns-button lfnsb-yt" target="_blank" rel="noreferrer noopener" title="Follow us on YouTube" id="youtube_youtube-video-editor" href="https://www.youtube.com/user/avs4you"> </a>
            <a className="lfns-button lfnsb-fb" target="_blank" rel="noreferrer noopener" title="Follow us on Facebook" id="facebook_youtube-video-editor" href="https://www.facebook.com/avs4you"> </a>
            <a className="lfns-button lfnsb-tw" target="_blank" rel="noreferrer noopener" title="Follow us on Twitter" id="twitter_youtube-video-editor"  href="https://www.twitter.com/avs4you"> </a>
            <a className="lfns-button lfnsb-pi" target="_blank" rel="noreferrer noopener" title="Follow us on Pinterest" id="pinterset_youtube-video-editor" href="https://pinterest.com/avs4you/"> </a>
        </div>
    </div>
</div>
                </div>
        </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(avsYoutubeVideoEditor);
