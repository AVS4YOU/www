import React, {useRef } from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Text from '../components/text';
import ImageGQL from "../components/image-gql";
import Layout from "../components/layout";
import "../styles/upgrade-now.less";
import { Link as GatsbyLink } from 'gatsby';
import Logo from '../images/common/logo.svg';
import styled from 'styled-components';
import ContentSelector from '../components/content-selector';
import Button from "../components/button";
import IndicatorCross from '../images/upgrade-now/indicator.svg';
import IndicatorCheck from '../images/upgrade-now/indicator-check.svg';

import videoIcon from '../images/main-page/icons/video_icon_grey.svg'
import videoIconWhite from '../images/main-page/icons/video_icon_for_slider.svg'
import audioIcon from '../images/main-page/icons/audio_icon_grey.svg'
import audioIconWhite from '../images/main-page/icons/audio_icon_white.svg'
import allSoftIcon from '../images/upgrade-now/all-software.svg'
import discountIcon from '../images/upgrade-now/icon-discount.svg'

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

const regExp = /=regnow:(.*):/;
const date = new Date();
const currentMounth = date.getMonth();
const currentYear = date.getFullYear();
const currentDay = date.getDay();
const mounth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


const LogoWrapper = styled.div`
    width: 69px;
    height: 0px;
    display: table;
    &>img{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    `;

    const StyledMainContentWrapper = styled.div`
    display:block;
    padding-bottom: 100px;
    .top-selector-buttons-wrapper{
        width: 100%;
        box-sizing: border-box;
        
        .top-button{
            position:relative;
            padding: 0 10px;
            .selectorText{
                display: inline-block;
                padding-left: 25px;
            }
            .selectorText:before{
                display:block;
                content: '';
                height:29px;
                width:29px;
                left: 10%;
                background-position: 0;
                background-repeat: no-repeat;
                position: absolute;  
                top: 0;
                bottom: 0;
                margin: auto;   
            }
            &:nth-child(1) .selectorText:before{
              background-image: url(${allSoftIcon});
          }
            &:nth-child(2) .selectorText:before{
                background-image: url(${videoIcon});
            }
            &:nth-child(3) .selectorText:before{
                background-image: url(${audioIcon});  
            }
            &:nth-child(4) .selectorText:before{
                background-image: url(${videoIcon});
            }
            &:nth-child(5) .selectorText:before{
                background-image: url(${audioIcon});  
            }
            &:nth-child(6) .selectorText:before{
              background-image: url(${videoIcon});
          }
            &.selected{
              &:nth-child(1) .selectorText:before{
                background-image: url(${allSoftIcon});
            }
                &:nth-child(2) .selectorText:before{
                    background-image: url(${videoIconWhite});
                }
                &:nth-child(3) .selectorText:before{
                    background-image: url(${audioIconWhite});  
                }
                &:nth-child(4) .selectorText:before{
                  background-image: url(${videoIconWhite});
              }
              &:nth-child(5) .selectorText:before{
                  background-image: url(${audioIconWhite});  
              }
              &:nth-child(6) .selectorText:before{
                background-image: url(${videoIconWhite});
            }
          }
            @media (max-width: 1300px) {
          .selectorText:before{
          display: none;
          }
        }
                `;

const productId = {
  videoConverter: 1,
  audioConverter: 2,
  videoEditor: 3,
  audioEditor: 4,
  videoRemaker: 5
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

class upgradeNow extends React.PureComponent {
 
  constructor(){
    super();
    this.myRef = React.createRef();
  
    this.state = {
      product: "",
      currentContentIndex: 0
    };
  }

  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search)
    let product = ""
    if(urlParams) product = urlParams.get("product");

    let currentContentIndex = "";
    if(product){
      currentContentIndex = productId[product]
    }

    if(product){
      this.setState({
        product: product,
        currentContentIndex: currentContentIndex
      })
    }
  }

render(){

  if(this.state.currentContentIndex){
    scrollToRef(this.myRef)
  }

    return (
      <Layout 
        className="upgrade-now-page" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title={this.props.t("AVS4YOU is the home of ultimate multimedia editing family. Learn more about our company, its history, who we are and what we value.")}
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
          <GatsbyLink>
              <LogoWrapper>
              </LogoWrapper>
          </GatsbyLink>


            <div className="header__body">

            <ImageGQL className="upgradeImageHeader" imageName="upgrade-now.png" style={{position: "absolute"}}/> 
              <div className="header__text"><Text as="h2" className="header__heading upgrade"> {this.props.t("Upgrade now")} </Text>
              <Text as="h2" className="header__heading get">{this.props.t("and get access to all AVS4YOU programs")} </Text>
              <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="upgrade-now-buttom-text" className="upgrade-now-buttom">
              {this.props.t("Upgrade now")}
                    </Button></div>

              <div className="allSoftaware"><Text as="h2" className="title-discover"> {this.props.t("Discover the difference between")} <span className="title-discover-orange">{this.props.t("Free and Full")}</span> {this.props.t("versions")} </Text></div>

              <StyledMainContentWrapper>
              <div ref={this.myRef}></div>
              <ContentSelector
                currentContentIndex={this.state.currentContentIndex}
                className="choose-program__content-wrapper"
                buttonNames={[this.props.t("All softaware"),this.props.t("Video Converter"),this.props.t("Audio Converter"),this.props.t("Video Editor"),this.props.t("Audio Editor"),this.props.t("Video ReMaker")]}
            >
                <div className="choose-program__item">
                  <Text as="h2" className="common__heading__table">
                  AVS Video Converter
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Convert all key video formats, Full HD, 2K QHD and 4K UHD")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, apply video and audio effects")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Merge video files")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Split videos by length, size, chapters")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Correct aspect ratio. Crop scale")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create stylish DVD/Blu-ray menus")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Export audio from video in MP3")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Command-line conversion")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                     {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  <Text as="h2" className="common__heading__table">
                  AVS Audio Converter
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Convert all key audio formats")}
                    </Text></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, apply audio effects")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Merge audio files")}
                    </Text></td>
                    <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Use multi-thread conversion")}
                    </Text></td>
                    <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create audiobooks")}
                    </Text></td>
                    <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create ringtones")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Command-line conversion")}
                    </Text></td>
                    <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Voice logo in output audio with edits")}
                    </Text></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  <Text as="h2" className="common__heading__table">
                  AVS Video Editor
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key video formats, Full HD, 2K QHD and 4K UHD")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Screen capture and record video")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Trim, crop, split and join videos")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Apply effects, transitions, overlay")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Video stabilization")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Chroma key")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Colour correction")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Freeze frame. Playback speed")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Rotate, shift, mirror or zoom")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create stylish DVD/Blu-ray menus")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Save to HDD, devices, for web")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                     {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  <Text as="h2" className="common__heading__table">
                  AVS Audio Editor
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key audio formats")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Record audio")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, join, mix")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Apply audio effects/filters")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Generate sounds")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Multitrack editing")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Voice logo in output audio with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  <Text as="h2" className="common__heading__table">
                  AVS Video ReMaker
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key video formats without changing the original format")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Capture screen and record video")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, split and merge videos")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Add transitions")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Change clip sequence")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create DVD/Blu-ray menus")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                </div>


                <div className="choose-program__item">
                <Text as="h2" className="common__heading__table">
                  AVS Video Converter
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Convert all key video formats, Full HD, 2K QHD and 4K UHD")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, apply video and audio effects")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Merge video files")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Split videos by length, size, chapters")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Correct aspect ratio. Crop scale")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create stylish DVD/Blu-ray menus")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Export audio from video in MP3")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Command-line conversion")}
                    </Text></td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>
                </div>

                <div className="choose-program__item">
                <Text as="h2" className="common__heading__table">
                  AVS Audio Converter
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Convert all key audio formats")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, apply audio effects")}
                    </Text></td>
                    <td><Text className="choose-program__list">
                    <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Merge audio files")}
                    </Text></td>
                    <td><Text className="choose-program__list">
                    <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Use multi-thread conversion")}
                    </Text></td>
                    <td><Text className="choose-program__list">
                    <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create audiobooks")}
                    </Text></td>
                    <td><Text className="choose-program__list">
                    <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create ringtones")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Command-line conversion")}
                    </Text></td>
                    <td><Text className="choose-program__list">
                    <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Voice logo in output audio with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><Text className="choose-program__list">
                  <div><center><img src={IndicatorCross} className="indicatorCross" /> </center></div>
                    </Text></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSAudioConverter.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                </div>

                <div className="choose-program__item">
                <Text as="h2" className="common__heading__table">
                  AVS Video Editor
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key video formats, Full HD, 2K QHD and 4K UHD")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Screen capture and record video")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Trim, crop, split and join videos")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Apply effects, transitions, overlay")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Video stabilization")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Chroma key")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Colour correction")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Freeze frame. Playback speed")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Rotate, shift, mirror or zoom")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create stylish DVD/Blu-ray menus")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Save to HDD, devices, for web")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoEditor.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>
                  
                  </div>

                  <div className="choose-program__item">
                  <Text as="h2" className="common__heading__table">
                  AVS Audio Editor
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key audio formats")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Record audio")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, join, mix")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Apply audio effects/filters")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Generate sounds")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Multitrack editing")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Voice logo in output audio with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSAudioEditor.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  </div>

                  <div className="choose-program__item">
                  <Text as="h2" className="common__heading__table">
                  AVS Video ReMaker
                  </Text>
                  <table className="tableProgram">
                  <tr>
                  <th><Text className="choose-program__list">
                  <b>{this.props.t("Features")}</b>
                  </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Free Version")}</b></center>
                    </Text></th>
                  <th><Text className="choose-program__list">
                  <center><b>{this.props.t("Full Version")}</b></center>
                    </Text></th>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Edit all key video formats without changing the original format")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Capture screen and record video")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Cut, trim, split and merge videos")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Add transitions")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Change clip sequence")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Create DVD/Blu-ray menus")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  </tr>
                  <tr>
                  <td><Text className="choose-program__list">
                  {this.props.t("Watermark in output videos with edits")}
                    </Text></td>
                    <td><center><img src={IndicatorCheck} className="checkIndicator" /> </center> </td>
                  <td><center><img src={IndicatorCross} className="indicatorCross" /> </center></td>
                  </tr>
                  </table>
                  <div className="choose-program__buttons-wrapper">
                    <Button href="https://downloads.avs4you.com/distributives/AVSVideoReMaker.exe" textClassName="choose-program__button-text" className="choose-program__button-white">
                    {this.props.t("Download now")}
                    </Button>
                    <Button href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" textClassName="choose-program__button-text" className="choose-program__button-blue">
                    {this.props.t("Upgrade now")}
                    </Button>
                  </div>

                  </div>
            </ContentSelector>
            </StyledMainContentWrapper>

                  <div className="availableDiscount">
          <img  src={discountIcon}/>
        </div>

            <div className="allSoftaware"><Text as="h2" className="title-discover"> {this.props.t("Buy now at the")} <span className="title-discover-orange">{this.props.t("best price")}!</span> <br />{this.props.t("In")} {mounth[currentMounth]} {this.props.t("only")}!</Text></div>
                <div className="landing-block"><div className="landing-one-offer-block">
                <Text className="text-landing-box">{this.props.t("1 year")}</Text>
                <Text className="text-landing-sub">{this.props.t("subscription")}</Text>
                <Text className="text-landing-time">{this.props.t("1 year access")}</Text>
                <Text className="text-landing-now-for">{this.props.t("Subscribe now for")}</Text>
                <Text className="text-landing-old-price">$69.00</Text>
                <Text className="text-landing-new-price"><sup>$</sup>39.00</Text>
                <Text className="text-landing-limited">{this.props.t("Time limited offer prices valid till ")}{mounth[currentMounth]} {currentDay}, {currentYear}</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604110&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.190376299.1567942970.1598170647-942264271.1594810360" style={{color: "#fff"}}>{this.props.t("Buy now")}</a></Text></table>
                </div>
                <div className="landing-two-offer-block"><div className="landing-bestseller">
                <Text className="text-bestseller">{this.props.t("Bestseller")}
                </Text></div><Text as="h3" className="text-landing-box">{this.props.t("Unlimited")}</Text>
                <Text className="text-landing-sub">{this.props.t("subscription")}</Text>
                <Text className="text-landing-time">{this.props.t("Unlimited access")}</Text>
                <Text className="text-landing-now-for">{this.props.t("Subscribe now for")}</Text>
                <Text className="text-landing-old-price">$199.00</Text>
                <Text className="text-landing-new-price"><sup>$</sup>59.00</Text>
                <Text className="text-landing-limited">{this.props.t("Time limited offer prices valid till")} {mounth[currentMounth]} {currentDay}, {currentYear}</Text>
                <table className="header__buy__gray"><Text as="h2" className="header__buy__now"><a href="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CURRENCY=USD&DCURRENCY=USD&LANG=en&LANGUAGES=en,de,fr,es,it,ja,nl,da,ko,pl,ru,zh&CART=1&CARD=2&CLEAN_CART=ALL&SHORT_FORM=1&AUTO_PREFILL=1&_ga=2.143321461.1567942970.1598170647-942264271.1594810360" style={{color: "#fff"}}>{this.props.t("Buy now")}</a></Text></table></div></div>

                <div className="availableCarts">
            <ImageGQL imageName="register-available-carts.png"/>
          </div>

        <div className="allSoftaware"><Text as="h2" className="title-version"> {this.props.t("Want to get the full version for")} <span className="title-discover-orange">{this.props.t("free?")}</span> </Text></div>
        <div className="want-to-get-container">
            <div className="full-for-free"></div>
          <div className="spread-text"> {this.props.t("Spread the word and get a free license key for AVS Video Editor or AVS Video ReMaker 1 year subscription. To do it,")}
                <li style={{color: "#1E72D2"}}><span style={{color: "#555555"}}>{this.props.t("Write an article about AVS4YOU programs, publish it in your blog or website, or")}</span></li>
                <li style={{color: "#1E72D2"}}><span style={{color: "#555555"}}>{this.props.t("Make a video and post it on your YouTube channel, or")}</span></li>
                <li style={{color: "#1E72D2"}}><span style={{color: "#555555"}}>{this.props.t("Share AVS4YOU.com in 3 different social networks")}.</span></li>
             {this.props.t("Once done, contact us at")} <a href="mailto:sales@avs4you.com">sales@avs4you.com</a> {this.props.t("with links provided")}. 
             <br />{this.props.t("The free license key gives you an annual access to the chosen program with all paid features included")}.</div>
    </div>
    </div>
    </div>

</Layout>
    );
  }
};
export default withI18next({ ns: "common" })(upgradeNow);