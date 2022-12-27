import React from "react";
import Link from '../components/link';
import { Link as ScrollLink } from "react-scroll";
import Text from '../components/text';
import FreeFlag from '../components/free-flag';
import PageContentWrapper from "../components/page-content-wrapper";
import PanelCollapse from "../components/panel-collapse";
import ContentRowItem from '../components/content-row-item';
import ReviewScreen from '../components/review-screen';
import ScreenshotsCarousel from '../components/screenshot-carousel';
import ProductPagesWrapper from '../components/product-pages-wrapper';
import HeaderDownloadButtons from '../components/header-download-buttons';
import DownloadScrollButton from '../components/download-scroll-button';
import ImageGQL from '../components/image-gql';
import {VideoConverter} from '../../static/products-info';
import ScrollUpButton from '../components/scroll-up-button';
import "../styles/avs-video-converter.less";
import Button from '../components/button';
import Star from '../images/main-page/icons/star.svg';
import styled from 'styled-components';

import AvatarGayle from '../images/avs-free-video-converter/gayle_hibbert.png';
import AvatarTerrance from '../images/avs-free-video-converter/terrance_jenkins.png';
import AvatarLawrence from '../images/avs-free-video-converter/lawrence_thompson.png';

import awardChip from '../images/main-page/awards/award-chip.png'
import awardSoft from '../images/main-page/awards/softonic-award.png'
import awardSoftChecker from '../images/avs-video-editor/award-softchecker.svg'
import awardCritical from '../images/avs-free-video-converter/award-criticalfiles.png'
import awardDownload from '../images/avs-free-video-converter/award-download3000.png'
import awardFilebuzz from '../images/avs-free-video-converter/award-filebuzz.png'
import awardFilecluster from '../images/avs-free-video-converter/award-filecluster.png'
import awardTops from '../images/avs-free-video-converter/award-topshareware.png'
import awardTucows from '../images/avs-free-video-converter/award-tucows.png'
import awardFDM from '../images/avs-free-video-converter/award-FDM_Video-Converter.png'

const StyledContent = styled.div`
.ListItem {
  padding-left: 15px;
}
`;


export const AvsVideoConverterOtherContent = (props) => (
  <ProductPagesWrapper imageName="blue_background_main.jpg">
  <div className="headerBackground">
    <ImageGQL className="headerBackgroundImage" imageName="blue_background_main.png" style={{position: "absolute"}}/>
    <PageContentWrapper>
      <div id="headerContentWrapper" className="headerContentWrapper" >
        <FreeFlag>{props.t("Free")}</FreeFlag>
        <Text color="#ffffff" align="center" className="headerText" lineHeight="65px" fontSize={68} fontWeight={600} as="h1" style={{paddingBottom:"0px"}}>{props.t("AVS Video Converter")}</Text>
        <Text color="#ffffff" align="center" className="headerDescription" as="h5" fontSize={28} style={{paddingBottom:"60px"}}>{props.t("Free Video Converter for Windows")}</Text>
        <Text color="#ffffff" align="center" className="headerDescription" as={props.t("h2")} fontSize={24} fontWeight={400} style={{paddingBottom:"20px"}}>{props.t("Convert to from video formats MP4, DVD, AVI, WMV,MOV, MPEG4, VOB, FLV, MKV, MTS, 2K QHD, 4K UHD and DCI 4K etc fast and easily")}</Text>
        <Text color="#ffffff" align="center" className="headerDescription" as={props.t("h2")} fontSize={24} fontWeight={400}>{props.t("Convert videos for iPhone, iPad, Android, Samsung, YouTube, Facebook, etc")}</Text>
        <HeaderDownloadButtons 
          t={props.t}
          mainHref="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe"
          secondaryText="Windows 11/10/8/7/Vista/XP"
          backgroundColor="orange"
          mainPadding="12px 37px"
          margin="auto"
        />
      </div> 
    </PageContentWrapper>
    <ImageGQL className="headerImage" imageName={props.t("video converter en avs video converter png")} style={{maxWidth: "1564px"}} alt="header-image"/>
    <ImageGQL className="headerImage mobile" imageName={props.t("video converter en avs video converter png")} style={{maxWidth: "366px"}} alt="header-image-mobile"/>
  </div>
  <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
  <div className="scrollLinksWrapper">
    <ScrollLink to="overview" spy={true} smooth={true} offset={-70} duration={500} className="scrollToButton overview">
      <Text color="#666666" align="center">{props.t("Overview")}</Text>
    </ScrollLink>
    <ScrollLink to="reviews" spy={true} smooth={true} offset={0} duration={600} className="scrollToButton reviews">
      <Text color="#666666" align="center">{props.t("Reviews")}</Text>
    </ScrollLink>
    <ScrollLink to="screenshotsCarousel" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton screentour">
      <Text color="#666666" align="center">{props.t("Screentour")}</Text>
    </ScrollLink>
    <ScrollLink to="downloadButton" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download"> 
      <Text color="#666666" align="center">{props.t("Download")}</Text>
    </ScrollLink>
  </div>

  <PageContentWrapper className="videoConverter">
    <ContentRowItem 
        id="overview"
        imgLeft={true}
        asType={props.t("h2")}
        imageName={props.t("video converter convert all key2 jpg")}
        headerText={props.t("Сonvert all key video formats")}    
    >
      <StyledContent><Text className="ListItem">{props.t("Encode HD Video, AVI, MP4, DVD, VOB, WMV, Blu-ray, MPEG, MKV, FLV, H 264 codec, H 265 reading only and etc")}</Text>
      <Text className="ListItem">{props.t("Convert HD-camera recordings AVCHD, MPEG-2 HD, AVI HD, TOD/MOD, M2TS/MTS, etc")}</Text>
      <Text className="ListItem">{props.t("Convert HD, Full HD, 2K Quad HD, 4K Ultra HD and DCI 4K video using ultra new presets and enjoy high quality video playback")}</Text>
      <a target="_blank" rel="noreferrer noopener"  href={props.t("avs-free-video-converter-onlinehelp-avs4you")}>
        <Text className="ListItem LinkItem" color="#1E72D2" fontWeight={500} fontSize={20}>{props.t("See a full list of all supported formats")}</Text>
      </a></StyledContent>
    </ContentRowItem>

    <ContentRowItem 
        imgLeft={false}
        imageName={props.t("video converter convert video easily3 jpg")}
        headerText={props.t("Convert video easily and fast")}   
    >
      <Text className="ListItem">{props.t("Use hardware acceleration for video decoding by means of video cards GPU  Intel HD Graphics or NVIDIA GeForce It is available for H 264 AVC, VC-1, MPEG-2, H 265 HEVC, VP8, VP9 codecs It speeds up preview and conversion processes significantly")}</Text>
      <Text className="ListItem">{props.t("Use hardware Intel® Media decoder with Intel® Quick Sync Video technology only for Intel CPU with integrated Intel Graphics")}</Text>
      <Text className="ListItem">{props.t("Use software Intel® Media decoder for AMD and old Intel processors")}</Text>
      <Text className="ListItem">{props.t("You can use a common software decoder for all processors as an alternative")}</Text>
      <Text className="ListItem">{props.t("Use Auto mode to choose the optimal decoder among common, hardware or software Intel® Media")}</Text>
      <Text className="ListItem">{props.t("You can use NVIDIA CUDA® decoder with NVDEC/NVCUVID technology for NVIDIA video cards")}</Text>
    </ContentRowItem>

    <ContentRowItem 
      imgLeft={true}
      imageName={props.t("vc convert a large number jpg")}
      headerText={props.t("Convert a large number of files at once")}    
    >
      <Text className="ListItem"><span>{props.t("Command Line Mode")}</span>{props.t("Automate routine work using ready conversion templates without clicking the program buttons manually")}</Text>
      <Text className="ListItem"><span>{props.t("Batch Mode")}</span>{props.t("Save your time spent on video conversion by using a batch mode which allows you to convert a large number of video files at once with easy-to-use configurations")}</Text>
    </ContentRowItem>

    <ContentRowItem 
        imgLeft={false} 
        imageName={props.t("video converter edit your videos jpg")}
        headerText={props.t("Edit your videos before conversion")}   
    >
      <Text className="ListItem">{props.t("Split your videos into parts, by chapters, size and cut unnecessary scenes")}</Text>
      <Text className="ListItem">{props.t("Merge video files into one")}</Text>
      <Text className="ListItem">{props.t("Change the aspect ratio of your video")}</Text>
      <Text className="ListItem">{props.t("Use basic video editing effects to make your videos more breathtaking")}</Text>
      <Text className="ListItem">{props.t("Convert video files with subtitles")}</Text>
      <Text className="ListItem">{props.t("Export audio and images from your video")}</Text>
      <Text className="ListItem footnote" fontWeight={500}>{props.t("This feature is available in a full version")}</Text>
    </ContentRowItem>

    <ContentRowItem
        imgLeft={true}
        imageName={props.t("video converter slider popup3 jpg")}
        headerText={props.t("Convert and share videos on Web")}
    >
      <Text className="ListItem"><span>{props.t("Save video to any format or modern gadgets")}</span>{props.t("Apple iPhone 11/XS/XR/X/8/7/SE, Apple iPad Pro, 2019, 2018, 2017, iPad Air 2 etc")}</Text>
      <Text className="ListItem"><span>{props.t("Create DVD/Blu-ray discs")}</span>{props.t("Convert from to Blu-ray or DVD formats Cut, apply effects, add colorful DVD Blu-ray menus Split your movie into chapters and burn DVD Blu-ray discs")}</Text>
      <Text className="ListItem"><span>{props.t("Convert videos for popular social platforms")}</span>{props.t("Use ready presets with most appropriate settings to convert video for YouTube, Facebook, Vimeo, DailyMotion, Telly, Flickr, Dropbox")}</Text>
    </ContentRowItem>
  </PageContentWrapper>

  <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper" textDownload={props.t("downloadnow")}/>

  <div className="block-awards" style={{maxWidth:"100%"}}>
    <Text className="awards-title awardsProductPage" fontSize={28} fontWeight={600} color="#000000">{props.t("Reviewed and highly rated by")}</Text>
    <div className="list-awards listAwardsConverter">
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardSoft}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardCritical}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardSoftChecker}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img style={{maxWidth:"130px"}} src={awardFDM}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardChip}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardDownload}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardFilebuzz}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardFilecluster}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardTops}/></div>
      <div className="awards-product-converter" style={{verticalAlign:"middle"}}><img src={awardTucows}/></div>
    </div>
</div> 

  <div className="questions-wrapper">

    <Text as="h2" className="common__heading">
    {props.t("Frequently asked questions")}
    </Text>

    <div className="questions-block">
      <PanelCollapse className="panelCollapse" panelName={props.t("What is the best video editor for")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("There are plenty of free video converters on the market but many of them are not completely free")}
            </Text>
        </div>
      </PanelCollapse>
      <PanelCollapse className="panelCollapse" panelName={props.t("Is AVS Video Converter absolutely free")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("Yes it is a free video converter")} <a href={props.t("hrefRegister")}>https://www.avs4you.com/register.aspx</a>{props.t("textAfterRegister")}</Text>
        </div>
      </PanelCollapse>
      <PanelCollapse className="panelCollapse" panelName={props.t("Can I convert HD and 4K video")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("AVS Video Converter supports HD")}
            </Text>
        </div>
      </PanelCollapse>
      <PanelCollapse className="panelCollapse" panelName={props.t("Can I convert many files at onc")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("AVS Video Converter offers batch conversion")} <a href={props.t("avs4you guides index")}>https://www.avs4you.com/guides/index.aspx</a>
            </Text>
        </div>
      </PanelCollapse>
      <PanelCollapse className="panelCollapse" panelName={props.t("Can I define the conversion settings mysel")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("If you are a novice we recommend you choosing among ready presets")}
            </Text>
        </div>
      </PanelCollapse>
      <PanelCollapse className="panelCollapse" panelName={props.t("Is AVS Video Converter difficult for newbies")}>
        <div className="collapseContent">
            <Text className="hiddenText">{props.t("It is really easy and user-friendly")} <a href={props.t("avs4you guides index")}>{props.t("guides")}</a> {props.t("or find the necessary information in")} <a href={props.t("onlinehelpVideoHref")}>{props.t("the knowledge center")}</a>{props.t("endLastQuestionnsConverter")}
            </Text>
        </div>
      </PanelCollapse>

    </div>
  </div>

  <Text id="screenshotsCarousel" className="carouselHeader" as="h2">AVS Video Converter 12.5</Text>


  <ScreenshotsCarousel 
    maxWidth={734}
    maxWidthPopup={734}
    imageNames={[props.t("video converter slider1 jpg"), props.t("video converter slider2 jpg"), props.t("video converter slider3 jpg"), props.t("video converter slider4 jpg"), props.t("video converter slider5 jpg")]}
    imageNamesPopup={[props.t("video converter slider1 jpg"), props.t("video converter slider2 jpg"), props.t("video converter slider3 jpg"), props.t("video converter slider4 jpg"), props.t("video converter slider5 jpg")]}
    altText={["slideCarousel1", "slideCarousel2", "slideCarousel3", "slideCarousel4", "slideCarousel5"]}
    
  />
  <PageContentWrapper>
    <div className="downloadInfoWrapper">
      <div className="downloadInfoRow">
        <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("File Size")}</Text>
        <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.size} MB</Text>
      </div>

      <div className="downloadInfoRow">
        <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Current Version")}</Text>
        <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">{VideoConverter.version}</Text>
      </div>

      <div className="downloadInfoRow">        
        <Text className="downloadInfoParam" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Platforms")}</Text>
        <Text className="downloadInfoText" color="#000000" fontSize={16} fontWeight={500} align="left">Windows 11, 10, 8.1, 8, 7, Vista, XP {props.t("(no Mac OS/ Linux support)")}</Text>
      </div>
    </div>
    <DownloadScrollButton className="buttonWrapper" href="https://downloads.avs4you.com/distributives/AVSVideoConverter.exe" to="headerContentWrapper" textDownload={props.t("download now")}/>
    <div className="licenseText">
      <Text align="center" color="#110C0C" fontSize={13}>{props.t("By clicking the Download button you agree to")} <Link to="/license-agreement.aspx">{props.t("our End User License Agreement")}</Link></Text>
    </div>
  </PageContentWrapper>
  <div className="technicalSpecificationWrapper" style={{backgroundColor:"#f9f9f9"}}>
    <PageContentWrapper>
        <Text as={props.t("h3")} className="headerSpecification" color="#000000" fontSize={32} align="center" fontWeight={600}>{props.t("Technical specification")}</Text>
        <div className="specificationGrid">
          <div>
            <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{props.t("MINIMUM SYSTEM REQUIREMENTS")}</Text>

            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Processor")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("AMD / Intel Core 2 Duo compatible at 3 GHz or higher")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("RAM")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("2 GB or higher")} </Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Video")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Intel HD Graphics, NVIDIA GeForce, AMD Radeon Graphics")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Sound")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows compatible sound card")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("DVD recorder")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("for importing from DVD and creating Video DVD")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Windows Media Player")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("11 or higher for WMV video playback")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("DirectX")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Microsoft DirectX 90c or later")}</Text>
            </div>
          </div>
          <div>
            <Text className="requirementsHeader" fontSize={18} color="#000000" fontWeight={600}>{props.t("RECOMMENDED SYSTEM REQUIREMENTS")}</Text>

            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Operating system")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows 11/Windows 10/Windows 8.x/Windows 7")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Processor")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Quad core (Intel Core i5 series or AMD equivalent)")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("RAM")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("4 GB or higher")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Video")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Intel HD Graphics, NVIDIA GeForce recommended for hardware acceleration")}</Text>
            </div>
            <div className="systemWrapper">
              <Text className="pcComponents" as="span" color="#000000" fontSize={16} fontWeight={700} align="right">{props.t("Sound")}</Text>
              <Text as="span" color="#000000" fontSize={16} fontWeight={500} align="left">{props.t("Windows 10/Windows 8x/Windows 7 compatible sound card")}</Text>
            </div>
          </div>
        </div>
        <Text className="systemInfo" color="#000000" fontSize={16} fontWeight={500}>* {props.t("Administrative permissions for program installation and Internet connection for activation")}</Text>
        <div className="attentionBlock">
          <Text fontSize={16} fontWeight={500}>{props.t("Please note that AVS4YOU programs do not allow you to copy protected material You may use this software in copying material in which you own the copyright or have obtained permission to copy from the copyright owner")}</Text>
        </div>
    </PageContentWrapper>
  </div>

  <div id="reviews" className="backgroundWrapper" style={{marginTop: "0px;"}}>
  <ReviewScreen 
      reviewsData={
        [
          {
            name: "Gayle Hibbert",
            avatar: AvatarGayle,
            revHeader: props.t("Our customers say"),
            revText: props.t("For the price this is certainly great value for money I mostly use AVS Video Editor and Video Converter and I find them to be both excellent easy to use with quality results Would certainly recommend to anyone who wants good video software at a reasonable price")
          },
          {
            name: "Terrance Jenkins",
            avatar: AvatarTerrance,
            revHeader: props.t("Our customers say"),
            revText: props.t("The product is super easy to download and use Anyone can do this in just minutes The company is always supportive I highly recommend")
          },
          {
            name: "Lawrence Thompson",
            avatar: AvatarLawrence,
            revHeader: props.t("Our customers say"),
            revText: props.t("I have been using AVS for several years and can say for sure that it is very convenient user friendly and functional")
          }
        ]
      }
    />
    <Button className="trustButton" style={{margin: "auto", display: "table"}}
            href="https://www.trustpilot.com/review/www.avs4you.com" 
            color="#fff">
            {props.t("Review us on")} <img src={Star} alt="star" style={{filter: "brightness(5)"}}/> Trustpilot
    </Button>
  </div>
</ProductPagesWrapper>
);
