import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/advent-calendar.less";
import { Link as GatsbyLink } from 'gatsby';
import LogoWrapper from '../images/common/logo.svg';
import styled from 'styled-components';
import { useSwipeable, Swipeable } from 'react-swipeable';

class adventCalendar extends React.PureComponent {

render(){
    return (
      <Layout 
        headerIsDisabled={true}
        footerIsDisabled={true}
        className="advent-calendar" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video, audio, image")}
        metaDescription=""
        metaKeywords=""
      >

<div className="avs-logo">
</div>
        
<div class="advent_main_part">
    <div id="particles-js"></div>
    <div class="social_block">
        <div class="social_block_opacity"></div>
        <div class="social_box">
        </div>
    </div>
    <div class="advent_header_top">
        <div class="aht_narrow">
            <div class="afh_logo">
                <a class="afh_logo_link" href="https://avs4you.com"></a>
            </div>
            <div class="afh_share_block">
                <div class="afh_share"></div>
            </div>
            <div class="afh_music_block">
                <div class="afh_music"></div>
            </div>
            <audio class="audio_christmas" src="" type="audio/wav" autoplay="true"></audio>
        </div>
    </div>
    <div class="advent_heading">
        <h1>The exciting 24 days of <br /> Magic Christmas Countdown with AVS4YOU</h1>
        <div class="advent_header_sub">Enjoy amazing gifts and non-stop discounts each day up to <b>99% Off!</b></div>
    </div>
    <div class="advent_calendar_block">
        <div class="advent_calendar_grid">
            <div class="acg_row_wrapper">
            <div class="acg_cell acg_cell_1">
                    <div class="acgc_window" data-date-start="2020-12-01" data-date-end="2020-12-24">
                        <div class="acgc_popup">
                            <span class="acgc_close_button">&times;</span>
                            <div class="acgc_valid_block">The offer is valid till December 24, 2020</div>
                            <div class="acgc_heading_block">Happy first Sunday of Advent 2020! <br /> AVS4YOU wishes you a miraculous festive season!</div>
                            <div class="acgc_text_block">Get a $20 gift card for a review of AVS4YOU programs <b class="acgc_heading_block_smaller">on Capterra</b></div>
                            <div class="acgc_coupon_block max-width-narrow">Just <a class="acgc_button" href="mailto:info@avs4you.com">contact us</a> with your first name and a relevant email address:</div>
                            <div class="acgc_button_block">
                            </div>
                            <div class="acgc_subbutton_note">*only valid if you haven't participated in the campaign before</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="advent_footer_block">
        <div class="afb_logo">
            <div class="afb_logo_link"></div>
        </div>
        <div class="afb_copyright">Online Media Technologies Ltd., UK 2020   All rights reserved.</div>
    </div>
</div>
<div id="adventCounter" class="advent_counter_window" data-date-counter="2018-12-01">
    <span class="acgc_close_button">&times;</span>
    <div id="defaultCountdown" class="advent_counter_clock"></div>
    <div class="advent_counter_text">Till Advent calendar launch!</div>
    <div class="advent_counter_logo">
        <a target="_blank" class="advent_counter_logo_link" href=""></a>
    </div>
</div>

</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(adventCalendar);