import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import ScrollTools from '../components/scroll-tools';
import ScrollUpButton from '../components/scroll-up-button';
import BenefitsCarousel from '../components/benefits-carousel';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled, {css} from 'styled-components';


const StyledFooter = styled.div`
.landing-footer {
    background-color: #30737C;
    color: #fff;
    }
    .landing-footer-narrow ul li,
    .landing-footer-narrow ul li a,
    .lfn-copyright,
    .lfn-copyright .blacklink {
    color: #fff;
    }
    .lfns-button {
    background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/social.png);
    }
    .lohbn-buy-button {
        border: 2px #37818A solid;
        color: #fff;
        background-color: #43AABB;
    }
    .lohbn-buy-button:hover {
        color: #37818A;
        background-color: #fff;
    } 
    .landing-footer-narrow {
        width: 920px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        }
            .landing-second-block-narrow h2 {
            font-weight: 400;
            font-size: 40px;
            margin: 0;
            padding: 86px 0 0;
            text-transform: uppercase;
            color: #2b2b2b;
            }
                .landing-second-block-narrow h2 b {
                font-weight: 400;
                color: #11577b;
                }
        .lsbn-subheader {
        font-size: 32px;
        color: #2b2b2b;
        text-transform: uppercase;
        }
        .lsbn-apps {
        padding: 50px 0 0;
        }
        .lsbnarn {
        width: 79px;
        height: 10px;
        padding: 105px 0 20px;
        font-size: 13px;
        color: #85594D;
        background-repeat: no-repeat;
        background-position: 50% 0;
        cursor: pointer;
        text-align: center;
        border-bottom: solid 1px #cdcdcd;
        white-space: nowrap;
        }
        .landing-footer-narrow {
            text-align: left;
            }
            .landing-footer-narrow ul,
            ul.top-menu {
            display: inline-block;
            list-style-type: none;
            text-align: left;
            margin: 0;
            padding: 40px 0;
            }
            .landing-footer-narrow ul li,
            ul.top-menu li {
            display: inline-block;
            color: #222;
            font-size: 15px;
            margin: 0;
            padding: 0 0 0 12px;
            }
                .landing-footer-narrow ul li:after,
                ul.top-menu li:after {
                content: '|';
                display: inline-block;
                margin: 0 0 0 12px;
                }
                .landing-footer-narrow ul li:last-of-type:after,
                ul.top-menu li:last-of-type:after {
                content: none;
                }
                .landing-footer-narrow ul li a {
                color: #222;
                text-decoration: none;
                }
            .lfn-copyright {
            padding: 0 0 30px 12px;
            font-size: 12px;
            color: #222;
            }
                .lfn-copyright .blacklink {
                color: #222;
                text-decoration: none;
                }
            .lfn-social {
            display: inline-block;
            width: 153px;
            float: right;
            padding: 40px 0 0;
            text-align: right;
            }
            .lfns-button {
            width: 35px;
            height: 35px;
            display: inline-block;
            background-repeat: no-repeat;
            background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/social.png);
            margin: 0;
            }
            .lfnsb-yt {
            background-position: -3px 0;
            }
            .lfnsb-gp {
            background-position: -42px 0;
            }
            .lfnsb-fb {
            background-position: -81px 0;
            }
            .lfnsb-tw {
            background-position: -121px 0;
            }
            button {
            outline: 0 none !important;
            }    
`;

class Installed extends React.PureComponent {

render(){
    return (
      <Layout 
        headerIsDisabled={true}
        className="installed-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video audio image")}
        metaDescription=""
        metaKeywords=""
      >
          

         <div id="centerall">   
        <div class="landing-first-block">
            <div class="landing-first-block-narrow">
                <a class="lfb-logo" href="https://www.avs4you.com/"></a>
                <div class="lfb-language">
                    <ul class="top-menu">
                        <li><a href="https://www.avs4you.com/register.aspx">Buy now</a></li>
                        <li><a href="https://support.avs4you.com/login.aspx">Support</a></li>
                        <li><a href="https://www.avs4you.com/privacy.aspx">Privacy</a></li>
                    </ul>
                </div>
                <div class="lfb-header-title">
                    <h1>Thank you <span>for installing <b>AVS Video Editor!</b></span></h1>
                </div>
                <span>
    <div class="lfb-offer">
        <a id="landingPage_landingInside_ctl03_ctl00_AVSPaySystemDispatcherControl1" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1&amp;SRC=ThanksInstallation_en"><span>Exclusive Offer Only Today</span></a>
    </div>                                    </span>
            </div>
        </div>
        <div class="landing-one-half-block">
            <div class="landing-one-half-block-narrow">
                <div class="lohbn-text-block">
                    <p class="lohbn-text">Save 70% on the full version and <br />get extra 10 multimedia programs as a gift!</p>
                    <p class="lohbn-price"><span class="price-currency">$</span>59<span class="price-currency"></span></p>
                    <p class="lohbn-regular-price">Regularly <span class="lohbn-rp"><span class="price-currency">$</span>199</span></p>
                    <span><a id="landingPage_landingInside_ctl01_ctl00_psdc3" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1&amp;SRC=ThanksInstallation_en"><b class="lohbn-buy-button buy-button-bottom">Buy now!</b></a>
                                                                                                                         </span>
                </div>
            </div>
        </div>
        <div class="landing-second-block">
            <div class="landing-second-block-narrow">
                <h2><b>Just a few clicks – </b> and you will have <br />a stunning video made</h2>
                <div class="lsbn-subheader"><b>5</b> easy steps to create a movie:</div>
                
            </div>
        </div>
        <div class="landing-last-block">
            <div class="landing-last-block-narrow">
                <div class="llbn-howto-blocks">
                    <div class="llbn-ht-block llbnht-block1"><a target="_blank" href="https://www.avs4you.com/guides/how-to-use-the-chromakey-effect-in-avs-video-editor.aspx">How to use the <b>Chroma Key effect</b></a></div>
                    <div class="llbn-ht-block llbnht-block2"><a target="_blank" href="https://www.avs4you.com/guides/create-video-slideshow.aspx">How to create an <b>impressive slideshow</b></a></div>
                    <div class="llbn-ht-block llbnht-block3"><a target="_blank" href="https://www.avs4you.com/guides/how-to-start-working-with-video-editor.aspx"><b>Featured guides</b> to work with AVS Video Editor efficiently effortlessly</a></div>
                    <div class="llbn-ht-block llbnht-block4"><a target="_blank" href="https://onlinehelp.avs4you.com/avs-video-editor/">Any questions on how to buy, activate, or use the program? Visit online <b>Help Center</b></a></div>
                </div>
                <span><a id="landingPage_landingInside_ctl02_ctl00_psdc3" href="https://store.avs4you.com/order/checkout.php?PRODS=604132&amp;QTY=1&amp;CURRENCY=USD&amp;DCURRENCY=USD&amp;LANG=en&amp;LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru&amp;CART=1&amp;CARD=1&amp;CLEAN_CART=ALL&amp;SHORT_FORM=1&amp;AUTO_PREFILL=1&amp;SRC=ThanksInstallation_en"><b class="lohbn-buy-button buy-button-bottom">Buy now!</b></a>
                                                                                                                         </span>            
            </div>
        </div>
        <StyledFooter>
        <div class="landing-footer">
            <div class="landing-footer-narrow">
                <ul>
                    <li><a href="https://www.avs4you.com/register.aspx">Buy now</a></li>
                    <li><a href="https://support.avs4you.com/login.aspx">Support</a></li>
                    <li><a href="https://www.avs4you.com/affiliates/index.aspx">Affiliates</a></li>
                    <li><a href="https://www.avs4you.com/education.aspx">Education</a></li>
                    <li><a href="https://www.avs4you.com/partners.aspx">Partners</a></li>
                    <li><a href="https://www.avs4you.com/license-agreement.aspx">EULA</a></li>
                    <li><a href="https://www.avs4you.com/privacy.aspx">Privacy</a></li>
                </ul>
                <div className="lfn-social">
                    <a className="lfns-button lfnsb-yt" target="_blank" title="Follow us on YouTube" href="https://www.youtube.com/user/avs4you"></a>
                    <a className="lfns-button lfnsb-fb" target="_blank" title="Follow us on Facebook" href="https://www.facebook.com/avs4you"></a>
                    <a className="lfns-button lfnsb-tw" target="_blank" title="Follow us on Twitter" href="https://www.twitter.com/avs4you"></a>
                    <a className="lfns-button lfnsb-pi" target="_blank" title="Follow us on Pinterest" href="https://pinterest.com/avs4you/"></a>
                </div>
                <div class="lfn-copyright">© <a class="blacklink" href="https://www.avs4you.com/index.aspx">
                    Online Media Technologies&nbsp;Ltd.,&nbsp;UK
                </a>2020 &nbsp; All rights reserved.</div>
            </div>
        </div>
    
        </StyledFooter>
        
    
        </div>

</Layout>

    );
  }
};
export default withI18next({ ns: "common" })(Installed);