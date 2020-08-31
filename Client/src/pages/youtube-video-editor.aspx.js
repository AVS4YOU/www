import React from "react";
import withI18next from "../components/withI18next";
import "../styles/youtube-video-editor.less";
import ProductPagesWrapper from '../components/product-pages-wrapper';
import Text from '../components/text';
import ImageGQL from '../components/image-gql';
import ScrollUpButton from '../components/scroll-up-button';
import Button from '../components/button';
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import styled, { css } from 'styled-components';

  function customPaging(i) {
    return (
        <ul class="slick-dots" id="slick-steps">
            {i === 0 ? 
             <li class="slick-active" aria-hidden="false" style={{width:"48vw", top:"-18vw"}}><div class="lfb_tab lfb_btn_capture"><div class="lfb_es_icon"></div>Capture video</div></li>
            : i === 1 ? <li aria-hidden="true" style={{width:"48vw", top:"-14vw"}}><div class="lfb_tab lfb_btn_cut" ><div class="lfb_es_icon"></div>Cut, trim and join</div></li>
            : i === 2 ? <li aria-hidden="true" style={{width:"48vw", top:"-10vw"}}><div class="lfb_tab lfb_btn_apply" ><div class="lfb_es_icon"></div>Apply effects</div></li>
            : i === 3 ? <li aria-hidden="true" style={{width:"48vw", top:"-6vw"}}><div class="lfb_tab lfb_btn_remove" ><div class="lfb_es_icon"></div>Remove defects</div></li>
            : i === 4 ? <li aria-hidden="true" style={{left:"30vw", top:"-5vw"}}><div class="lfb_tab lfb_btn_use" ><div class="lfb_es_icon"></div>Change background</div></li>
            : i === 5 ? <li aria-hidden="true" style={{left:"27.5vw", top:"2vw"}}><div class="lfb_tab lfb_btn_addtracks" ><div class="lfb_es_icon"></div>Add your audio tracks</div></li>
            : i === 6 ? <li aria-hidden="true" style={{left:"25vw", top:"8.5vw"}}><div class="lfb_tab lfb_btn_insert" ><div class="lfb_es_icon"></div>Add text</div></li>
            : i === 7 ? <li aria-hidden="true" style={{left:"22.5vw", top:"15vw"}}><div class="lfb_tab lfb_btn_save" ><div class="lfb_es_icon"></div>Upload to YouTube</div></li> 
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
        fade:false,
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
      },,{
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
      
        <ProductPagesWrapper>  
          <header>
    <div class="lfb_header">
        <a class="lfb_logo" href="https://www.avs4you.com/index.aspx" target="_blank"></a><ul class="topmainmenu max-width-1">
            <li class="topmenuoption"><a href="https://www.avs4you.com/index.aspx" target="_blank">Main</a></li>
            <ScrollLink to="to_easy_steps" spy={true} smooth={true}>
            <li class="topmenuoption to_easy_steps">Steps</li>
            </ScrollLink>
            <ScrollLink to="to_wcaqm" spy={true} smooth={true}>
            <li class="topmenuoption to_wcaqm">Advantages</li>
            </ScrollLink>
            <ScrollLink to="to_testimonials" spy={true} smooth={true}>
            <li class="topmenuoption to_testimonials">Testimonials</li>
            </ScrollLink>
            <li class="topmenuoption with_link"><a class="lfb_download_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></li>
            <li class="aclose">×</li>
        </ul>
    </div>
</header>

                        
<div class="lfb_top_main">
  <div class="lfb_head_text">
    <div class="lfb_ht_header">
      Your YouTube career starts with <span>AVS Video Editor</span>
    </div>
    <div class="lfb_ht_subheader">
      Easily create professional-looking clips or vlogs
    </div>
    <div class="lfb_txt_div"><a class="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
  </div>
  <div class="lfb_head_img"><ImageGQL imageName="main_picture-youtube.png" alt="Professional-looking clips or vlogs" /></div>
</div>
    <div id="mainbody">

    <div class="lfb_steps" id="to_easy_steps">
        <div class="lfb_easy_steps">Easy steps for creating your captivating video</div>
            <div class="lfb_easy_steps_car">
            <Slider
                className="youtubePersonSlider"
                {...settings}>
                {youtubeSlides()}
                </Slider>         
        </div>
    </div>  

<div class="lfb_wcaqm" id="to_wcaqm">
    <div class="lfb_wcaqm_h">Why choose AVS4YOU</div>
    <div class="lfb_reasons">
        <div class="lfb_reas_block">
        <div class="lfb_reason">
            <ImageGQL class="lfb_reas_i" imageName="any.png" />
            <div class="lfb_reas_h">Any type of content</div>
            <div class="lfb_reas_t">Generate content for any blogging format, from tutorials and training videos to slideshows and reviews</div>
        </div>
        <div class="lfb_reason">
            <ImageGQL class="lfb_reas_i" imageName="smart.png" />
            <div class="lfb_reas_h">Smart presets</div>
            <div class="lfb_reas_t">Use specially designed templates depending on the desired quality of the output video when saving your project</div>
        </div>
        </div>
        <div class="lfb_reas_block">
        <div class="lfb_reason lfb_reason_center">
            <ImageGQL class="lfb_reas_i" imageName="simple.png" />
            <div class="lfb_reas_h">Simple, but feature-rich</div>
            <div class="lfb_reas_t">AVS Video Editor is easy to learn, regardless of skill level. It is simple but has all necessary tools to make high-quality video</div>
        </div>
        </div>
        <div class="lfb_reas_block">
        <div class="lfb_reason">
            <ImageGQL class="lfb_reas_i" imageName="popular.png" />
            <div class="lfb_reas_h">Popular video formats</div>
            <div class="lfb_reas_t">Work with all key video formats such as MP4, MOV, AVI, WMV, FLV, AVCHD, MPEG and common video codecs H.264, MPEG-4,DivX,MPEG-2, HEVC (H.265)</div>
        </div>
        <div class="lfb_reason">
            <ImageGQL class="lfb_reas_i" imageName="high.png" />
            <div class="lfb_reas_h">High-definition video</div>
            <div class="lfb_reas_t">Create video with different frame sizes: HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K</div>
        </div>
        </div>
        <div class="lfb_txt_div lfb_reas_btn"><a class="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
    </div>
</div>

                    </div>
                    <div id="testimonials">
                        
    

<div class="testimonials" id="to_testimonials">
    <div class="lfb_ocs">Our customers say</div>
    <div class="lfb_stars">
        <div class="lfb_star"></div>
        <div class="lfb_star"></div>
        <div class="lfb_star"></div>
        <div class="lfb_star"></div>
        <div class="lfb_star"></div>
    </div>
    <div class="lfb_carousel">
        <div class="slick-reviews slick-initialized slick-slider">
            <div aria-live="polite" class="slick-list draggable" tabindex="0"><div class="slick-track"><div class="item slick-slide slick-active" data-slick-index="0" aria-hidden="false">
                <div class="lfb_av lfb_av_as"></div>
                <div class="lfb_profile">
                    <div class="lfb_name">Andy Stephens</div>
                    <div class="lfb_vb">Video blogger</div>
                </div>
                <div class="lfb_rev">I love the editor and all your apps which have helped me create nearly 2000 YouTube vids!</div>
            </div><div class="item slick-slide slick-active" data-slick-index="1" aria-hidden="false">
                <div class="lfb_av lfb_av_wh"></div>
                <div class="lfb_profile">
                    <div class="lfb_name">William Holmes</div>
                    <div class="lfb_vb">Video blogger</div>
                </div>
                <div class="lfb_rev">I've been using AVS Video Editor for more than 10 years and it is an excellent product, in my opinion.</div>
            </div><div class="item slick-slide slick-active" data-slick-index="2" aria-hidden="false">
                <div class="lfb_av lfb_av_os"></div>
                <div class="lfb_profile">
                    <div class="lfb_name">Olivia Seltzer</div>
                    <div class="lfb_vb">Video blogger</div>
                </div>
                <div class="lfb_rev">In spite of being a person who did not have a formal computer training, I was able to edit 40 hours of video into 4 hours. I have been constantly using AVS Video Editor for the past two and half years. I am thrilled with the results</div>
            </div></div></div>
            
            
        </div>
    </div>
</div>
    

<div class="lfb_perf_sln">
    <div class="lfb_psln">
        <div class="lfb_ps_h">Perfect solution for video bloggers</div>
        <div class="lfb_ps_sh">Create your first video right now!</div>
        <div class="lfb_txt_div"><a class="lfb_download_btn lfb_tm_btn" href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe">Download</a></div>
    </div>
</div>

                    </div>
                    <div class="hFooter"></div>
         
                <div id="footer">
                    
<div class="vel_footer">
    <div class="vel_page_footer">
        <div class="vph_logo"><a href="https://www.avs4you.com/index.aspx" target="_blank"></a></div>
        <div class="vph_menu_footer">
            <ul>
                <li><a href="https://www.avs4you.com/downloads.aspx" target="_blank">Downloads</a></li>
                <li><a href="https://www.avs4you.com/register.aspx" target="_blank">Buy now</a></li>
                <li><a href="https://www.avs4you.com/Guides/index.aspx" target="_blank">Help</a></li>
                <li><a href="https://support.avs4you.com/login.aspx" target="_blank">Support</a></li>
                <li><a href="https://www.avs4you.com/contact.aspx" target="_blank">Contact us</a></li>
            </ul>
            <div class="vph_copyright">© <a class="blacklink" href="https://www.avs4you.com/index.aspx" target="_blank">Online Media Technologies&nbsp;Ltd.,&nbsp;UK</a> 2020 &nbsp; All rights reserved.</div>
        </div>
        <div class="lfn-social">
            <a class="lfns-button lfnsb-yt" target="_blank" title="Follow us on YouTube" href="https://www.youtube.com/user/avs4you"></a>
            <a class="lfns-button lfnsb-fb" target="_blank" title="Follow us on Facebook" href="https://www.facebook.com/avs4you"></a>
            <a class="lfns-button lfnsb-tw" target="_blank" title="Follow us on Twitter" href="https://www.twitter.com/avs4you"></a>
            <a class="lfns-button lfnsb-pi" target="_blank" title="Follow us on Pinterest" href="https://pinterest.com/avs4you/"></a>
        </div>
    </div>
</div>
                </div>
        </ProductPagesWrapper>
    );
  }
};
export default withI18next({ ns: "common" })(avsYoutubeVideoEditor);