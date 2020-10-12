import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import ScrollTools from '../components/scroll-tools';
import "../styles/installed.less";
import ScrollUpButton from '../components/scroll-up-button';
import BenefitsCarousel from '../components/benefits-carousel';
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled from 'styled-components';


const styledFooter = styled.div`
.centerall {
    position: relative;
    }
    .landing-first-block {
    background: #fff url(https://imgs.avs4you.com/en/images/landing/upon-installation/header-bg.jpg) no-repeat 50% 0;
    background-size: cover;
    height: 490px;
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
    }
        .landing-first-block-narrow h1 span {
        font-size: 29px;
        display: block;
        color: #1c1c1c;
        }
    .lfb-offer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 910px;
    height: 66px;
    font-size: 28px;
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
        padding: 13px 0 0;
        margin: 0 auto;
        display: block;
        }
    .landing-one-half-block {
    height: 334px;
    position: relative;
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
    background: url(https://imgs.avs4you.com/en/images/landing/upon-installation/box/en.png) 45px 65px no-repeat;
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
    }
        .landing-second-block-narrow h2 b {
        color: #296c31;
        }
    .lsbn-subheader {
    font-size: 27px;
    color: #525252;
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
    .lsbn-slider-block {
    position: relative;
    height: 440px;
    padding-top: 40px;
    z-index: 50;
    }
    .slick-list {
    width: 577px;
    position: absolute;
    right: 0;
    top: 0;
    }
    .lsbnef-inner {
    width: 577px;
    height: 440px;
    background-repeat: no-repeat;
    background-position: 0 0;
    }
        .lsbn-editor-feature.lsbnef-block1 .lsbnef-inner {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/screens/1.png);
        }
        .lsbn-editor-feature.lsbnef-block2 .lsbnef-inner {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/screens/2.png);
        }
        .lsbn-editor-feature.lsbnef-block3 .lsbnef-inner {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/screens/3.png);
        }
        .lsbn-editor-feature.lsbnef-block4 .lsbnef-inner {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/screens/4.png);
        }
        .lsbn-editor-feature.lsbnef-block5 .lsbnef-inner {
        background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/screens/5.png);
        }
    .slick-dots {
    position: absolute;
    width: 339px;
    padding: 0;
    margin: 0;
    list-style-type: none;
    left: 0;
    top: 0;
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
            .slick-dots li.landing-soft-feature1 button {
            background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/steps/1.png)
            }
            .slick-dots li.landing-soft-feature2 button {
            background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/steps/2.png)
            }
            .slick-dots li.landing-soft-feature3 button {
            background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/steps/3.png)
            }
            .slick-dots li.landing-soft-feature4 button {
            background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/steps/4.png)
            }
            .slick-dots li.landing-soft-feature5 button {
            background-image: url(https://imgs.avs4you.com/en/images/landing/upon-installation/icons/steps/5.png)
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
            .slick-dots li.landing-soft-feature1 button:after {
            content: 'Upload media files';
            width: 115px;
            }
            .slick-dots li.landing-soft-feature2 button:after {
            content: 'Cut or trim videos';
            width: 115px;
            }
            .slick-dots li.landing-soft-feature3 button:after {
            content: 'Apply effects and transitions';
            width: 215px;
            }
            .slick-dots li.landing-soft-feature4 button:after {
            content: 'Add background audio and text';
            width: 185px;
            }
            .slick-dots li.landing-soft-feature5 button:after {
            content: 'Save your movie and share';
            width: 155px;
            }
    .landing-last-block {
    position: relative;
    z-index: 10;
    top: -63px;
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
    body {
margin: 0;
padding: 0;
width: 100%;
font-family: 'Open Sans', Tahoma, Arial;
}

ul.language {
position: absolute;
right: 20px;
top: 0;
z-index: 90;
color: #fff;
cursor: pointer;
padding-right: 15px;
white-space: nowrap;
}
    ul.language:after {
    display: block;
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    right: -13px;
    top: 6px;
    border: 3px solid transparent;
    border-top: 3px solid #fff; 
    content: '';
    }

	ul.language li {
	margin: 0;
	padding: 0;
	list-style-type: none;
	}

		ul.language li.en {
		position: absolute;
		top: 0;
		right: 0;
		}
		ul.language li.fr,
		ul.language li.de,
		ul.language li.es,
		ul.language li.it,
		ul.language li.ru,
		ul.language li.jp
		{
		margin-top: 6px;
		}
		ul.language li.close
		{
		margin-top: 1px;
		}
#topbody ul.languages_menu {
background-color: #fff;
color: #000;
box-shadow: 0 2px 3px rgba(0,0,0,0.3);
position: absolute;
top: 20px;
right: 0;
z-index: 95;
text-align: right;
border-radius: 4px;
padding: 10px 17px;
width: 100px;
}
    #topbody ul.languages_menu li {
    display: block;
    margin: 8px 0 9px;
    padding: 0 29px 0 0;
	height: 14px;
    }
    #topbody ul.languages_menu a {
    color: #000;
    text-transform: none;
    display: block;
    margin: 0;
    padding: 0;
    }
#topbody ul.languages_menu li {
background-image: url(https://imgs.avs4you.com/en/images/sprites/flags.png);
background-repeat: no-repeat;
}
	#topbody ul.languages_menu li.en {
	background-position: 100% -32px;
	}

	#topbody ul.languages_menu li.de {
	background-position: 100% -16px;
	}

	#topbody ul.languages_menu li.fr {
	background-position: 100% -64px;
	}

	#topbody ul.languages_menu li.da {
	background-position: 100% 0;
	}

	#topbody ul.languages_menu li.it {
	background-position: 100% -80px;
	}

	#topbody ul.languages_menu li.jp {
	background-position: 100% -96px;
	}

	#topbody ul.languages_menu li.ko {
	background-position: 100% -112px;
	}

	#topbody ul.languages_menu li.ru {
	background-position: 100% -176px;
	}

	#topbody ul.languages_menu li.pl {
	background-position: 100% -144px;
	}

	#topbody ul.languages_menu li.nl {
	background-position: 100% -128px;
	}

	#topbody ul.languages_menu li.es {
	background-position: 100% -48px;
	}

	#topbody ul.languages_menu li.pt {
	background-position: 100% -160px;
	}


.landing-first-block {
width: 100%;
height: 628px;
background: #1D1E29 url(https://imgs.avs4you.com/en/images/landing/bundle/back1.jpg) no-repeat 50% 0;
background-size: cover;
color: #fff;
min-width: 920px;
}
.landing-first-block-narrow {
width: 920px;
margin: 0 auto;
height: 628px;
text-align: center;
position: relative;
}
    .landing-first-block-narrow h1 {
    font-weight: 400;
    font-size: 46px;
    margin: 0;
    padding: 86px 0 0;
    text-transform: uppercase;
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
height: 38px;
background: url(https://imgs.avs4you.com/en/images/landing/bundle/logo.png) no-repeat 0 0;
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
    border: #fff 1px solid;
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
.buynow-button {
    background-color: #58874a;
    margin-left: 8px;
}
    .buynow-button:hover {
        background-color: #457337;
    }
    .buynow-button::-moz-focus-inner {
        background-color: #457337;
    }
    .buynow-button:focus {
        background-color: #457337;
    }
.pickdiscount-button {
    background-color: #67982D;
    margin-left: 8px;
    border: 0 none;
    width: 282px;
    height: 42px;
    font-weight: 300;
    padding-top: 16px;

}
    .pickdiscount-button:hover {
        background-color: #588126;
    }
    .pickdiscount-button::-moz-focus-inner {
        background-color: #588126;
    }
    .pickdiscount-button:focus {
        background-color: #588126;
    }
.lohbn-buy-button {
    border: 2px #296c31 solid;
    color: #296c31;
    background-color: #fff;
    font-weight: 600;
}
    .lohbn-buy-button:hover {
        background-color: #296c31;
        color: #fff;
    }
    .lohbn-buy-button::-moz-focus-inner {
        background-color: #296c31;
        color: #fff;
    }
    .lohbn-buy-button:focus {
        background-color: #296c31;
        color: #fff;
    }
.landing-second-block {
}
.landing-second-block-narrow, .landing-third-block-narrow, .landing-footer-narrow {
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
.lsbna-rotate-nav {
padding: 0 40px;
position: relative;
}
.lsbnarn.slick-center {
border-bottom: solid 1px #85594D;
position: relative;
}
.lsbnarn-ae {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/audioeditor.png);
}
.lsbnarn-ac {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/audioconverter.png);
}
.lsbnarn-vc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/videoconverter.png);
}
.lsbnarn-ve {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/videoeditor.png);
}
.lsbnarn-dc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/documentconverter.png);
}
.lsbnarn-de {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/documenteditor.png);
}
.lsbnarn-ic {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/imageconverter.png);
}
.lsbnarn-pe {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/photoeditor.png);
}
.lsbnarn-rc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/registrycleaner.png);
}
.lsbnarn-mp {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/mediaplayer.png);
}
.lsbnarn-dcr {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/disccreator.png);
}
.lsbnarn-vr {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/boxes/videoremaker.png);
}
.slick-prev, .slick-next {
border: 0 none;
background-color: #fff;
background-repeat: no-repeat;
background-position: 0 0;
width: 20px;
height: 37px;
position: absolute;
top: 30px;
cursor: pointer;
color: transparent;
}
.slick-prev {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/previous.png);
left: 0;
}
.slick-next {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/next.png);
right: 0;
}

.lsbnar-description {
background-color: #fff;
background-position: 610px 50%;
background-repeat: no-repeat;
min-height: 263px;
padding: 52px 380px 52px 48px;
text-align: left;
}
.lsbnard-ae {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/audioeditor.png);
}
.lsbnard-ac {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/audioconverter.png);
}
.lsbnard-vc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/videoconverter.png);
}
.lsbnard-ve {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/videoeditor.png);
}
.lsbnard-dc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/documentconverter.png);
}
.lsbnard-de {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/documenteditor.png);
}
.lsbnard-ic {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/imageconverter.png);
}
.lsbnard-pe {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/photoeditor.png);
}
.lsbnard-rc {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/registrycleaner.png);
}
.lsbnard-mp {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/mediaplayer.png);
}
.lsbnard-dcr {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/disccreator.png);
}
.lsbnard-vr {
background-image: url(https://imgs.avs4you.com/en/images/landing/bundle/textbox/videoremaker.png);
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
button::-moz-focus-inner {
border: 0;
}
`;

class Installed extends React.PureComponent {

render(){
    return (
        <styledFooter>

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
                <div class="lfn-social">
                    <a class="lfns-button lfnsb-fb" target="_blank" title="Facebook" href="https://www.facebook.com/avs4you"></a>
                    <a class="lfns-button lfnsb-tw" target="_blank" title="Twitter" href="https://www.twitter.com/avs4you"></a>
                    <a class="lfns-button lfnsb-gp" target="_blank" title="Google+" href="https://plus.google.com/u/0/b/105357609614583331144/+avs4you/posts"></a>
                    <a class="lfns-button lfnsb-yt" target="_blank" title="YouTube" href="https://www.youtube.com/user/avs4you"></a>
                </div>
                <div class="lfn-copyright">© <a class="blacklink" href="https://www.avs4you.com/index.aspx">
                    Online Media Technologies&nbsp;Ltd.,&nbsp;UK
                </a>2020 &nbsp; All rights reserved.</div>
            </div>
        </div>
    
    
        </div>

</Layout>
</styledFooter>

    );
  }
};
export default withI18next({ ns: "common" })(Installed);