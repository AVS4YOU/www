import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import styled from 'styled-components';
import Slider from "react-slick";
import Link from "../components/link";
import Cookies from 'universal-cookie';

import uploadMediaFiles from "../images/installed/04.svg";
import cutOrTrim        from "../images/installed/02.svg";
import applyEffects     from "../images/installed/03.svg";
import addBackground    from "../images/installed/01.svg";
import saveMovie        from "../images/installed/05.svg"; 


const shareItHrefUnlim = "https://order.shareit.com/cart/add?vendorid=200281390&PRODUCT[300919255]=1";


const date = new Date();
const currentYear = date.getFullYear();
const regExp = /=regnow:(.*):/;


const StyledFooter = styled.div`
a {
    text-decoration : none;
}
a:hover {
    text-decoration: none;
   }
.centerall {
    position: relative;
    }
    .landing-first-block {
    background: #fff url(https://imgs.avs4you.com/en/images/landing/upon-installation/header-bg.jpg) no-repeat 50% 0;
    background-size: cover;
    height: 490px;
    }
    .lohbn-image-block{
        max-width: 250px;
        left: 50px;
        top: 75px;
    }
    .landing-first-block-narrow {
    width: 910px;
    height: 490px;
    background: transparent url(https://imgs.avs4you.com/en/images/landing/upon-installation/boy.png) no-repeat 50% 0;
    }
    .lfb-logo {
    background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/logo.png);
    }
    .lfb-language {
    text-align: right;
    }
    ul.top-menu {
    text-align: right;
    }
        ul.top-menu li {
        color: #1c1c1c;
        }
    ul.top-menu li a {
    color: #1c1c1c;
    text-decoration: none;
    }
        .landing-first-block-narrow h1 {
        font-size: 42px;
        padding: 50px 0 0 50px;
        text-transform: none;
        text-align: left;
        }
    .landing-first-block-narrow h1 {
    font-size: 90px;
    color: #0f5b59;
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 1);
    text-align: left;
    font-weight: 400;
    margin: 0;
    }
        .landing-first-block-narrow h1 span {
        font-size: 29px;
        display: block;
        color: #1c1c1c;
        }
    .lfb-offer {
    position: relative;
    top: 110px;
    left: 0;
    bottom: 0;
    width: 910px;
    height: 66px;
    font-size: 25px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 0;
    
    }
        .lfb-offer a {
        color: #fff;
        text-decoration: none;
        width: 670px;
        height: 53px;
        padding: 10px 0px 0px;
        margin: 0 auto;
        display: block;
        }
    .landing-one-half-block {
    height: 334px;
    position: relative;
    padding-bottom: 25px;
    }
    .landing-one-half-block-narrow {
    width: 920px;
    margin: 0 auto;
    position: relative;
    height: 334px;
    }
    .lohbn-text-block {
    position: absolute;
    left: 0;
    top: 0;
    height: 385px;
    z-index: 120;
    padding: 55px 0 0 405px;
    font-size: 24px;
    color: #1c1c1c;
    }
    .lohbn-text {
    padding: 0 0 130px;
    }
    .lohbn-price {
    font-size: 90px;
    color: #1c1c1c;
    vertical-align: top;
    line-height: 1em;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 405px;
    top: 184px;
    }
    .price-currency {
    font-size: 0.6em;
    vertical-align: top;
    line-height: 1.3em;
    }
    .lohbn-regular-price {
    font-size: 20px;
    color: #1c1c1c;
    position: absolute;
    left: 600px;
    top: 172px;
    margin-left: 80px;
    width: 260px;
    }
        .lohbn-regular-price:after {
        content: '';
        display: block;
        width: 107px;
        height: 57px;
        background: url(https://imgs.avs4you.com/en/images/landing/upon-installation/price.png) 0 0 no-repeat;
        position: absolute;
        top: 5px;
        left: -5px;
        }
    .lohbn-rp {
    font-size: 38px;
    vertical-align: top;
    line-height: 1em;
    padding: 0;
    margin: 0;
    font-weight: 600;
    display: block;
    }
    .lohbn-time-note {
    font-size: 12px;
    color: #d94242;
    display: block;
    margin: 5px 0 0;
    }
    .landing-second-block {
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/bg1.png);
    background-size: 100% 461px;
    min-width: 920px;
    padding-top: 80px;
    z-index: 20;
    }
    .landing-second-block-narrow h2 {
    color: #525252;
    font-size: 34px;
    padding-bottom: 40px;
    padding-top: 40px;
    }
        .landing-second-block-narrow h2 b {
        color: #296c31;
        font-weight: 400;
        }
    .lsbn-subheader {
    font-size: 27px;
    color: #525252;
    text-transform: uppercase;

    }
        .lsbn-subheader b {
        color: #fff;
        display: inline-block;
        padding: 0;
        width: 50px;
        height: 50px;
        font-size: 34px;
        background-color: #D94242;
        border-radius: 100%;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        line-height: 1.4em;
        }
    .lsbn-editor-feature {
    text-align: right;
    }
    .landing-last-block {
    position: relative;
    z-index: 10;
    top: -130px;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/bg2.png);
    background-size: 100% 462px;
    min-width: 920px;
    padding: 150px 0 10px;
    }
    .landing-last-block-narrow {
    width: 920px;
    margin: 0 auto;
    text-align: center;
    vertical-align: top;
    }
    .llbn-ht-block {
    display: inline-block;
    width: 250px;
    padding: 137px 80px 0;
    margin: 0 20px 75px;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-color: transparent;
    position: relative;
    z-index: 20;
    vertical-align: top;
    }
        .llbn-ht-block.llbnht-block1 {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/howto_1.png);
        }
        .llbn-ht-block.llbnht-block2 {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/howto_2.png);
        }
        .llbn-ht-block.llbnht-block3 {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/howto_3.png);
        }
        .llbn-ht-block.llbnht-block4 {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/howto_4.png);
        }
        .llbn-ht-block a {
        padding: 137px 0 0;
        color: #1c1c1c;
        text-decoration: none;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        }
            .llbn-ht-block a b {
            font-weight: 600;
            color: #296c31;
            }
    
    
    .landing-footer {
    background-color: #30737C;
    color: #fff;
    }
    .landing-footer-narrow ul li,
    .landing-footer-narrow ul li a,
    .lfn-copyright,
    .lfn-copyright .blacklink {
    color: #fff;
    text-decoration: none;
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
    .lfn-social {
        padding-top: 30px;
        width: 30%;
    }
    .lfns-button {
        height: 2vw;
        width: 2vw;
    }
.landing-first-block {
    width: 100%;
    height: 490px;
    background-size: cover;
    color: #fff;
    min-width: 920px;
    }
    .landing-first-block-narrow {
    width: 920px;
    margin: 0 auto;
    height: 490px;
    text-align: center;
    position: relative;
    }
    .lfbn-highlighted {
        padding: 10px 0;
    }
    .lfbnh {
    display: inline-block;
    background-color: #5CA33C;
    text-transform: uppercase;
    padding: 10px 60px;
    line-height: 1em;
    font-size: 27px;
    }
        .lfbnh b {
        font-weight: 400;
        font-size: 40px;
        }
    .lfbn-subheader {
    font-size: 29px;
    padding: 10px 0 50px;
    }
    .lfbn-overlay {
    width: 321px;
    height: 351px;
    position: absolute;
    bottom: -31px;
    left: -200px;
    background: url(https://imgs.avs4you.com/en/images/landing/bundle/box.png) no-repeat 0 0;
    }
    .lfb-logo {
    display: block;
    position: absolute;
    top: 18px;
    left: 5px;
    width: 161px;
    height: 36px;
    }
    .landing-first-block-descriptions {
    padding: 0 0 20px;
    text-align: center;
    }
    .lfbd-header {
    font-size: 20px;
    padding: 0 0 20px;
    }
    .lfbdl-block {
    display: inline-block;
    width: 120px;
    margin: 0;
    padding: 90px 40px 0;
    vertical-align: top;
    background-repeat: no-repeat;
    background-position: 50% 0;
    }
    .lfbdl-block1 {
    background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/icons/1.png);
    }
    .lfbdl-block2 {
    background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/icons/2.png);
    }
    .lfbdl-block3 {
    background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/icons/3.png);
    }
    .lfbd-buttons {
    padding: 50px 0 0;
    }
    .download-button, .buynow-button, .pickdiscount-button, .lohbn-buy-button {
        display: inline-block;
        padding: 12px 0 0;
        height: 38px;
        width: 212px;
        text-align: center;
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
    }
    .download-button {
        background-color: #5aa5cc;
        margin-right: 8px;
    }
        .download-button:hover {
            background-color: #4c93b9;
        }
        .download-button::-moz-focus-inner {
            background-color: #4c93b9;
        }
        .download-button:focus {
            background-color: #4c93b9;
        }
    
        
    .landing-second-block-narrow, .landing-third-block-narrow, .landing-footer-narrow {
    width: 920px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    }
        .landing-second-block-narrow h2 {
        font-weight: 400;
        margin: 0;
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
    .lsbna-rotate-nav {
    padding: 0 40px;
    position: relative;
    }
   
    
    .lsbnar-description {
    background-color: #fff;
    background-position: 610px 50%;
    background-repeat: no-repeat;
    min-height: 263px;
    padding: 52px 380px 52px 48px;
    text-align: left;
    }
    
    .lsbnard-header {
    font-size: 30px;
    font-weight: 400;
    color: #11577b;
    padding: 20px 0;
    }
    .lsbnard-text {
    font-size: 16px;
    color: #222;
    line-height: 1.7em;
    padding: 0 0 30px;
    }
    .lsbnard-more {
    color: #11577b;
    font-size: 16px;
    text-decoration: none;
    }
    
    .landing-third-block {
    height: 305px;
    width: 100%;
    background: #1D1E29 url(https://imgs.avs4you.com/en/images/landing/bundle/back2.jpg) no-repeat 50% 0;
    background-size: cover;
    color: #fff;
    min-width: 920px;
    }
        .landing-third-block-narrow h2 {
        font-weight: 300;
        font-size: 50px;
        margin: 0;
        padding: 60px 0 0;
        color: #fff;
        }
    .ltbn-price-button {
    padding: 20px 0 0;
    }
    .ltbn-price, .ltbn-button {
    display: inline-block;
    vertical-align: middle;
    }
    .ltbn-price {
    font-size: 85px;
    font-weight: 300;
    line-height: .6em;
    text-align: center;
    margin-right: 30px;
    }
        .ltbn-price .ltbn-usual-price {
        font-size: 15px;
        display: block;
        text-decoration: line-through;
        }
        .ltbn-price .currency {
        font-size: 64px;
        }
    .ltbn-button {
    padding: 30px 0 0;
    margin-left: 30px;
    }
    .landing-footer-narrow {
    width: 1020px;
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
        .landing-footer-narrow ul li:after{
        content: '|';
        display: inline-block;
        margin: 0 0 0 12px;
        color: #fff;
        }
        ul.top-menu li:after {
            content: '|';
            display: inline-block;
            margin: 0 0 0 12px;
            color: #222;
            }
        .landing-footer-narrow ul li:last-of-type:after,
        ul.top-menu li:last-of-type:after {
        content: none;
        }
    .lfn-copyright {
    display: inline-flex;
    padding: 0 0 30px 12px;
    font-size: 12px;
    }    
      
`;

const StyledSlider = styled.div`
height: 500px;
padding-top:50px;
    .slick-list {
    width: 577px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 50;
    }
    .slick-dots {
    position: absolute;
    width: 339px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    left: 0;
    top: 270px;
    z-index: 50;
    }
        .slick-dots li {
        width: 339px;
        height: 70px;
        margin: 0 0 20px;
        }
            .slick-dots li:hover,
            .slick-dots li.slick-active {
            background-color: #EBEBEB;
            }
            .slick-dots li button {
            color: transparent;
            border: 0 none;
            background-color: transparent;
            width: 339px;
            height: 70px;
            cursor: pointer;
            background-repeat: no-repeat;
            background-position: 10px 50%;
            position: relative;
            }
            
            .slick-dots li button:after {
            display: block;
            height: 40px;
            color: #1c1c1c;
            font-size: 18px;
            font-weight: 400;
            position: absolute;
            left: 85px;
            top: 11px;
            text-align: left;
            }
.slick-dots li button {
    color: none;
    border: 0 none;
    background-color: transparent;
    width: 339px;
    height: 70px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 10px 50%;
    position: relative;
    }
.slick-dots li button::before{
    width: 54px;
    height: 54px;
    margin: 5px 10px;
}
.landing-soft-feature1{
    background-image: url(${uploadMediaFiles});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    height: 100%;
}
.landing-soft-feature2{
    background-image: url(${cutOrTrim});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    height: 100%;
}
.landing-soft-feature3{
    background-image: url(${applyEffects});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    height: 100%;
}
.landing-soft-feature4{
    background-image: url(${addBackground});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    height: 100%;
}
.landing-soft-feature5{
    background-image: url(${saveMovie});
    background-repeat: no-repeat;
    background-position: 10px 50%;
    height: 100%;
}
.landing-soft-feature-text{
    height: 100%;
    padding-top: 10px;
    padding-left: 20%;
    text-align: left;
    font-size: 18px;
}

.slick-dots li button:after {
    display: block;
    height: 40px;
    color: #1c1c1c;
    font-size: 18px;
    font-weight: 400;
    position: absolute;
    left: 85px;
    top: 11px;
    text-align: left;
    }
`;

class Installed extends React.PureComponent {
    constructor(props) {
        super(props);
        this.cookies = new Cookies();

        this.affiliateID = "";
        this.siteTrasingCookie = this.cookies.get("Site_Tracing"); 

        if(this.siteTrasingCookie){
            this.affiliateID = this.siteTrasingCookie.match(regExp)[1];
        };
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

        this.state = {
            hrefUnlim: this.cookies.get("Site_Tracing") ? shareItHrefUnlim + `&languageid=1&currency=USD&affiliate=${this.affiliateID}` : this.props.t("defaultHrefUnlim") + `&SRC=ThanksInstallation_VE_${this.props.t("en")}`,
            documentLoaded: false,
          };
      }

      componentDidMount(){  
        this.setState({
         documentLoaded: true
       })
      }

      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
    
    state = {
        slideIndex: 0,
        updateCount: 0
      };
render(){
    const settings = {
        dots: false,
        dotsClass: "slick-dots",
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
      };
      const SlidesImage = [{
        nameSlide:"1.webp",  
      },{
        nameSlide:"2.webp",  
      },{
        nameSlide:"3.webp",  
      },{
        nameSlide:"4.webp",  
      },{
        nameSlide:"5.webp",  
      },
    ]
      const Slides = () =>  
      SlidesImage.map(num => (
          <div className="Slides">
            <ImageGQL imageName={num.nameSlide} className={num.nameSlide}/>
          </div>    
        ));  
    return (
      <Layout 
        headerIsDisabled={true}
        footerIsDisabled={true}
        className="installed-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU best software for processing video audio image")}
        metaDescription=""
        metaKeywords=""
      >
          
<StyledFooter>
         <div id="centerall">   
        <div className="landing-first-block">
            <div className="landing-first-block-narrow">
                <Link id="main_installed" className="lfb-logo" to="/"></Link>
                <div className="lfb-language">
                    <ul className="top-menu">
                        <li><Link id="buy-now_installed" to="/register.aspx">{this.props.t("Buy now")}</Link></li>
                        <li><a id="support_installed" target="_blank" rel="noreferrer noopener" href={this.props.t("installed-support-avs4you-login")} >{this.props.t("Support")}</a></li>
                        <li><Link id="privacy_installed" to="/privacy.aspx">{this.props.t("Privacy")}</Link></li>
                    </ul>
                </div>
                <div className="lfb-header-title">
                    <h1>{this.props.t("Thank you")} <span>{this.props.t("for installing")} <b>{this.props.t("AVS Video Editor!")}</b></span>
                    <span style={{fontSize:"29px"}}>{this.props.t("JP for installing")}</span>
                    <span style={{fontSize:"55px", color:"#0f5b59"}}>{this.props.t("JP Thank you")}</span>
                    </h1>
                </div>
                <span>
                <div className="lfb-offer">
                    <a id="landingPage_lndingInside_ctl03_ctl00_AVSPaySystemDispatcherControl1 exclusive-offer-only-today_installed"
                    href={this.props.t(`${this.state.hrefUnlim}`)}
                       style={{paddingTop: '16px'}}
                    ><span>{this.props.t("Exclusive Offer Only Today ")}</span></a>
                </div>                                    
                </span>
            </div>
        </div>
        <div className="landing-one-half-block">
            <div className="landing-one-half-block-narrow">
            <ImageGQL className="lohbn-image-block" imageName={this.props.t("lohbn-image-block-en-webp")} />
                <div className="lohbn-text-block">  
                    <p className="lohbn-text">{this.props.t("Save 70% on the full version and ")} <br />{this.props.t("get extra 10 multimedia programs as a gift!")}</p>
                    <p className="lohbn-price"><span className="price-currency">{this.props.t("$")}</span>{this.props.t("59 ")}<span className="price-currency"></span></p>
                    <p className="lohbn-regular-price">{this.props.t("Regularly")} <span className="lohbn-rp"><span className="price-currency">{this.props.t("$")}</span>{this.props.t("199 ")}</span></p>
                    <span><a id="landingPage_landingInside_ctl01_ctl00_psdc3 buy-now-main_installed"
                    href={this.state.hrefUnlim}
                    ><b className="lohbn-buy-button buy-button-bottom" style={{paddingTop: '7px'}}       >{this.props.t("Buy now!")}</b></a></span>
                </div>
            </div>
        </div>
        <div className="landing-second-block">
            <div className="landing-second-block-narrow">
                <h2>{this.props.t("Just")}<b>{this.props.t("Just a few clicks –")} </b> {this.props.t("and you will have")} <br />{this.props.t("a stunning video made")}</h2>
                <div className="lsbn-subheader">{this.props.t("JP easy steps")}<b> {this.props.t(" 5 ")}</b> {this.props.t("easy steps to create a movie")}</div>
                
                <StyledSlider>
                    <ul className="slick-dots" id="slick-steps">
                        <li aria-hidden="true" onClick={() => this.slider.slickGoTo(0)}><div className="landing-soft-feature1"><Text className="landing-soft-feature-text" style={{height: 'calc(100% - 24px)', paddingTop: '24px'}}>{this.props.t("Upload media files")}</Text></div></li>
                        <li aria-hidden="true" onClick={() => this.slider.slickGoTo(1)}><div className="landing-soft-feature2"><Text className="landing-soft-feature-text" style={{height: 'calc(100% - 24px)', paddingTop: '24px'}}>{this.props.t("Cut or trim videos")}</Text></div></li>
                        <li aria-hidden="true" onClick={() => this.slider.slickGoTo(2)}><div className="landing-soft-feature3"><Text className="landing-soft-feature-text" style={{height: 'calc(100% - 24px)', paddingTop: '24px'}}>{this.props.t("Apply effects and transitions")}</Text></div></li>
                        <li aria-hidden="true" onClick={() => this.slider.slickGoTo(3)}><div className="landing-soft-feature4"><Text className="landing-soft-feature-text" style={{height: 'calc(100% - 24px)', paddingTop: '24px'}}>{this.props.t("Add background audio and text")}</Text></div></li>
                        <li aria-hidden="true" onClick={() => this.slider.slickGoTo(4)}><div className="landing-soft-feature5"><Text className="landing-soft-feature-text" style={{height: 'calc(100% - 24px)', paddingTop: '24px'}}>{this.props.t("Save your movie and share")}</Text></div></li>
                    </ul>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>  
                        {Slides()}
                    </Slider>
                </StyledSlider>

            </div>
        </div>
        <div className="landing-last-block">
            <div className="landing-last-block-narrow">
                <div className="llbn-howto-blocks">
                    <div className="llbn-ht-block llbnht-block1"><a id="how-to-use-item_installed" target="_blank" rel="noreferrer noopener" href={this.props.t("installed-avs4you-guides-how-to-use-the-chromakey-effect-in-avs-video-editor")} >{this.props.t("How to use the")} <b>{this.props.t("Chroma Key effect")}</b></a></div>
                    <div className="llbn-ht-block llbnht-block2"><a id="impressive-slideshow-item_installed" target="_blank" rel="noreferrer noopener" href={this.props.t("installed-avs4you-guides-create-video-slideshow")} >{this.props.t("How to create an")} <b>{this.props.t("impressive slideshow")}</b></a>{this.props.t("im AVS Video Editor?")}</div>
                    <div className="llbn-ht-block llbnht-block3"><a id="featured-guides-item_installed" target="_blank" rel="noreferrer noopener" href={this.props.t("installed-avs4you-guides-how-to-start-working-with-video-editor")} >{this.props.t("lang Featured guides")}<b>{this.props.t("Featured guides")}</b> {this.props.t("to work with AVS Video Editor efficiently effortlessly")}</a></div>
                    <div className="llbn-ht-block llbnht-block4"><a id="help-center-item_installed" target="_blank" rel="noreferrer noopener" href={this.props.t("installed-onlinehelp-avs4you-avs-video-editor")} >{this.props.t("Any questions on how to buy, activate, or use the program? Visit online")} <b>{this.props.t("Help Center")}</b></a>{this.props.t("lang Help Center")}</div>
                </div>
                <span><a id="landingPage_landingInside_ctl02_ctl00_psdc3 buy-now-second_installed"
                href={this.state.hrefUnlim}
                ><b className="lohbn-buy-button buy-button-bottom" style={{paddingTop: '8'}}>{this.props.t("Buy now!")}</b></a></span>
            </div>
        </div>
        <div className="landing-footer">
            <div className="landing-footer-narrow">
                <ul>
                    <li><Link id="buy-now2_installed" to="/register.aspx">{this.props.t("Buy now")}</Link></li>
                    <li><a id="support2_installed" target="_blank" rel="noreferrer noopener" href="https://support.avs4you.com/">{this.props.t("Support")}</a></li>
                    <li><Link id="affiliates_installed" to="/affiliates.aspx">{this.props.t("Affiliates")}</Link></li>
                    <li><Link id="education_installed" to="/education.aspx">{this.props.t("Education")}</Link></li>
                    <li><Link id="partners_installed" to="/partners.aspx">{this.props.t("Partners")}</Link></li>
                    <li><Link id="eula_installed" to="/license-agreement.aspx">{this.props.t("EULA")}</Link></li>
                    <li><Link id="privacy_installed" to="/privacy.aspx">{this.props.t("Privacy")}</Link></li>
                </ul>
                <div className="lfn-copyright" style={{paddingLeft: "15px;"}}><Link id="home-footer_installed" to="/" ><Text color="#fff" fontSize={16}>{this.props.t("Ascensio System SIA")}</Text></Link>&nbsp;&nbsp;&nbsp;<Text color="#fff" fontSize={16}> {currentYear} {this.props.t("All rights reserved")}</Text></div>
            </div>
        </div>
        </div>
        </StyledFooter>
</Layout>

    );
  }
};
export default withI18next({ ns: "common" })(Installed);
