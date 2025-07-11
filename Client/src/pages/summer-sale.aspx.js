import React from "react";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import styled from 'styled-components';
import Text from '../components/text';
import Layout from "../components/layout";
import "../styles/avs-special-offer.less";
import Button from '../components/button';

import ContentRowItem from '../components/content-row-item';

import summerSaleBottom from '../images/summer-sale/summer_bottom.png'
import summerSaleHero from '../images/summer-sale/summer_hero.png'
import summerYear from '../images/summer-sale/2025.png';

const StyledTable = styled.div`
  scroll-margin-top: 100px;

    > div {
      max-width: 1440px;
      margin:auto;
    }

    .bg {
      max-width: 100%;
      background: #EAF8FF;

      > div {
        max-width: 1440px;
        margin: auto;
        padding: 120px 40px;
        box-sizing: border-box;
      }
    }

    .bgBlue, .bgOrange {
        width: 50%;
    }

    .first {
      background: #EAF8FF;
    }

    .flexWrapper {
      padding: 0 20px;
    }

    h3 {
        color: #333333;
        font-weight: 700;
        font-family: Montserrat;
        padding-bottom: 32px !important;
        font-size: 32px;
    }

    .HeaderListItem {
        padding-bottom: 0px;
        font-weight: 700;
    }

    .ListTitle {
        padding: 32px 0;
        line-height: 32px;
    }

    p {
        color: #555555;
        font-family: "Open Sans";
        font-size: 22px;
    }

    .ListItem {
        margin: 32px 0 16px;
        color: #555555;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;

        &.one {
          margin: 0px;
          font-family: "Open Sans";
          font-size: 22px;
          font-weight: 400;
          padding-bottom: 16px;
        }
    }

    .ListItem:before {
        background-color: #005BD0;
        width: 8px;
        height: 8px;
    }

    .blockList {
      display: flex;
      gap: 26px;

      &.oneBlock {
        padding-bottom: 32px;
      }

      .red {
        border-radius: 4px;
        background: rgba(238, 0, 0, 0.10);
        padding: 4px 12px;
        font-size: 16px;
      }

      .blue {
        border-radius: 4px;
        background: #EAF8FF;
        padding: 4px 12px;
        font-size: 16px;

        &.dark {
          background: #D4F1FF;
        }
      }
    }

    .priceList {
      display: flex;
      gap: 32px;
      padding-top: 48px;

      .new {
        color: #005BD0;
        font-family: Montserrat;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .old {
        color: #646161;
        font-family: Montserrat;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: line-through;
      }
    }

    .buttonsWrapper {
        padding-top: 32px;
        text-align: left;
    }

    .mainButton {
        border-radius: 8px;
        background: var(--button, linear-gradient(0deg, #0084D0 -0.81%, #00CDD0 105.65%));

        p {
            color: #FFF;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            font-family: "Open Sans";

            a {
              padding: 13px 44px !important;
              text-decoration: none;
            }
        }

        &:hover {
          border-radius: 8px;
          background: linear-gradient(0deg, #0093E7 -0.81%, #02E9ED 105.65%);
          transition: background 2s;
      }
    }

    @media (max-width: 1050px) {
      .buttonsWrapper .mainButton {
          margin: 0;
      }

      .HeaderListItem {
          font-size: 22px;
      }

      .ListItem {
        font-size: 18px;
        margin: 24px 0 0px;
      }

      p {
          font-size: 16px;
      }

      .priceList {
        padding-top: 32px;

        .new {
          font-size: 28px;
        }
        .old {
          font-size: 22px;
        }
      }
    }

    @media (max-width: 1024px) {
        .ListTitle {
            padding: 14px 0;
            line-height: 22px;
        }

        .imgRight, .imgLeft {
            padding-top: 50px;
        }

        .ListItem {
            padding-bottom: 14px !important;
        }
    }

    @media (max-width: 768px) {
      .buttonsWrapper .mainButton {
          margin: auto;
      }

      .priceList {
          justify-content: center;
      }
    }

    @media (max-width: 500px) {
     .bg {
        margin: 0px 16px;

        > div {
         padding: 48px 0;
        }
     }

      .ListItem:before {
          top: 4px;
      }

      p {
        font-size: 14px;
      }

      .HeaderListItem.mobile {
        padding: 0 16px 18px !important;
        font-size: 18px !important;
        padding-bottom: 0 !important;
      }

      .blockList {
        justify-content: center;
        gap: 12px;

        .red, .blue {
          font-size: 12px;
        }
      }
    }
`;

const BuyButton = styled(Button) `
      color: #FFF;
      border-radius: 8px;
      background: var(--button, linear-gradient(0deg, #0084D0 -0.81%, #00CDD0 105.65%));
      padding: 13px 72px;

        p {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            font-family: "Open Sans";

            a {
              color: #FFFFFF;
              padding: 13px 44px;
              text-decoration: none;
            }
        }

        &:hover {
          border-radius: 8px;
          background: linear-gradient(0deg, #0093E7 -0.81%, #02E9ED 105.65%);
          transition: background 2s;
    }

    @media (max-width: 1024px) {
      padding: 8px 44px;
    }

    @media (max-width: 600px) {
      p {
        font-size: 16px;
      }
    }
  `

const StyledHero = styled.div`
      background-image: url(${summerSaleHero});
      width: 100%;
      text-align: left;
      min-height: 1000px;
      background-size: cover;
      position: relative;
      background-position-x: 80%;

      > div {
        max-width: 1440px;
        margin: auto;
        padding: 85px 40px 0;

        .head {
          display: flex;

          img {
            width: 94px;
            height: 36px;
            margin-top: 25px;
          }
        }
      }

      h1 {
        padding: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 92px;
        font-weight: 800;
        line-height: normal;
      }

      h2 {
        font-family: Montserrat;
        padding: 0 0 58px;
        color: #005BD0;
        font-family: Montserrat;
        font-size: 72px;
        font-weight: 700;
        line-height: normal;
      }

      
      h4 {
        color: #005BD0;
        padding: 0 0 32px;
        font-family: Montserrat;
        font-size: 26px;
        font-weight: 700;
        line-height: 36px;
        max-width: 688px;
      }

      h5 {
        color: #D14200;
        padding: 0 0 58px;
        font-family: Montserrat;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px; 
      }

      .style-button {
        font-family: Montserrat;
        font-size: 29px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px;
      }

      .enjoy {
        position: absolute;
        bottom: -69px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 20px;

        border-radius: 69px;
        background: #D4F1FF;
        box-shadow: 0px 0px 20px 0px rgba(21, 123, 242, 0.10) inset;

        max-width: 912px;
        padding: 42px 117px;
        text-align: center;
        
        h3 {
          background: linear-gradient(180deg, #055ABC 0%, #0076FF 1.74%, #005ECC 4.47%, #157BF2 95.83%, #055ABC 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: Montserrat;
        }

        h4 {
          color: #D14200;
          font-family: Montserrat;
          font-size: 42px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          padding: 0;
        }
      }

      @media (max-width: 1880px) {
        .enjoy {
          gap: 10px;
          padding: 18px 26px;
          bottom: -34px;

          h3, h4 {
            font-size: 26px;
            white-space: nowrap;
          }
        }
    }

    @media (max-width: 1024px) {
      width: 100%;
      text-align: left;
      min-height: 632px;

      > div {
        padding: 59px 40px 0;

        .head img {
            margin-top: 18px;
            margin-left: 16px;
          }
      }

      h1 {
        font-size: 64px;
      }

      h2 {
        font-size: 48px;
        padding: 0 0 32px;
      }

      h4 {
        max-width: 327px;
        font-size: 18px;
        line-height: 26px;
      }

      h5 {
        font-size: 20px;
        padding: 0 0 32px;
      }

      .style-button {
          font-size: 16px;
      }
    }

    @media (max-width: 600px) { 
      min-height: 522px;
      text-align: center;
      background-position-x: 50%;

      > div {
        padding: 52px 16px 0;

        .head {
          justify-content: center;
          
          img {
              margin-top: 9px;
              margin-left: 5px;
              width: 40px;
              height: 18px;
            }
        }
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 26px;
        padding: 0 0 18px;
      }

      h4 {
        font-size: 14px;
        line-height: 22px;
        max-width: 100%;
        padding: 0 0 12px;
      }

      h5 {
        font-size: 14px;
        padding: 0 0 24px;
      }

      .style-button {
        font-size: 14px;
      }

      .enjoy {
          gap: 5px;
          padding: 12px 18px;
          bottom: -22px;

          h3, h4 {
            font-size: 16px;
          }
        }
    }  
`

const StyledBottom = styled.div`
      background-image: url(${summerSaleBottom});
      width: 100%;
      text-align: center;
      min-height: 650px;
      background-size: cover;
      margin-top: 180px;

      h1 {
        padding: 170px 40px 0;
        max-width: 1029px;
        margin: auto;
        font-family: Montserrat;
        line-height: 52px;
      }

      h2 {
        font-family: Montserrat;
        padding: 0 40px 44px;
        max-width: 1029px;
        margin: auto;
        line-height: 52px;
      }

      @media (max-width: 1024px) {
        min-height: 350px;
        max-height: 350px;
        background-position-x: 50%;
        margin-top: 80px;

        h1 {
          padding: 75px 40px 0;
          font-size: 26px;
          line-height: 34px;
        }

        h2 {
          font-size: 16px;
          line-height: 34px;
          padding: 0 40px 32px;
        }
      } 

      @media (max-width: 600px) { 
        min-height: 240px;
        max-height: 240px;
        margin-top: 60px;

        h1 {
          padding: 24px 16px 0;
          font-size: 16px !important;
          line-height: 24px;
        }

        h2 {
          font-size: 12px !important;
          line-height: 24px;
          padding: 0 16px 18px;
        }
      } 
`

class SummerSale extends React.PureComponent {
    constructor(props) {
    super(props);
    this.scrollToBuy = this.scrollToBuy.bind(this);
  }

  scrollToBuy(e) {
    e.preventDefault();
    const target = document.getElementById("buy");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

render(){
    return (
      <Layout
        headerIsDisabled={true}
        isTinyFooter
        className="summer-sale"
        pageContext={this.props.pageContext}
        t={this.props.t}
        title="AVS4YOU Summer Sale"
        metaDescription=""
        metaKeywords=""
      >
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,400&display=swap" rel="stylesheet"></link>

              <StyledHero className="summer-first-block">
                <div>
                    <div className="head">
                      <Text fontSize={32} fontWeight={600} color={"#D14200"} as="h1">AVS4YOU</Text>
                      <img src={summerYear}></img>
                    </div>
                    <Text fontSize={32} fontWeight={600} color={"#D14200"} as="h2">Mega Summer Sale</Text>
                    <Text fontSize={42} fontWeight={700} color={"#005BD0"} as="h4">Make your summer projects shine with AVS4YOU. Choose your favourite bundle and save up to 30% on our bestsellers.</Text>
                    <Text fontSize={32} fontWeight={600} color={"#D14200"} as="h5">In July Only!</Text>
                    <BuyButton className="mainButton" textTransform="uppercase" onClick={this.scrollToBuy}>
                      <span className="style-button">Enjoy 30% Off now</span>
                    </BuyButton>
                </div>
                <div className="enjoy">
                  <Text fontSize={42} fontWeight={700} as="h3">Enjoy</Text> <Text fontSize={42} fontWeight={700} as="h4">30% off</Text>  <Text fontSize={42} fontWeight={700} as="h3">on our bestseller</Text>
                </div>
              </StyledHero>

                <StyledTable id="buy">
                  <div className="bg">
                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"avs_video_editor_summer.png"}
                          headerText={this.props.t("AVS Video Editor")}
                          getButtonLink="https://store.avs4you.com/order/checkout.php?PRODS=4602803&QTY=1&CART=1&CARD=2&&DESIGN_TYPE=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=VE30Sun&CLEAN_CART=ALL"
                          getButtonLinkId="get-it-now-ve_summer-sale"
                      >
                        <div className="blockList oneBlock">
                          <Text className="blue dark" color="#444444" fontSize={16} fontWeight={700}>Lifetime license</Text>
                        </div>
                          <Text className="ListItem one" color="#555555" fontWeight={400}>Make stunning videos with music and effects</Text>
                          <Text className="ListItem one" color="#555555" fontWeight={400}>Record video or capture screen</Text>
                          <Text className="ListItem one" color="#555555" fontWeight={400}>Turn your photos into vivid slideshows</Text>
                          <Text className="ListItem one" color="#555555" fontWeight={400}>Enhance the quality of your video</Text>
                          <Text className="ListItem one" color="#555555" fontWeight={400}>Create engaging video projects, tutorials and demos</Text>
                          <div className="priceList">
                            <Text className="new" color="#005BD0">$55.30</Text>
                            <Text className="old" color="#646161">$ 79.00</Text>
                          </div>
                      </ContentRowItem>
                    </div>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={false}
                          imageName={"avs_audio_editor_video_editor.png"}
                          headerText={this.props.t("AVS Audio Editor + AVS Video Editor")}
                          buyButtonLink="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=AVEditors30&CLEAN_CART=ALL"
                          buyButtonLinkId="buy-ae-ve_summer-sale"
                      >
                        <div className="blockList">
                          <Text className="red" color="#444444" fontSize={16} fontWeight={700}>Most popular</Text>
                          <Text className="blue" color="#444444" fontSize={16} fontWeight={700}>Lifetime license</Text>
                        </div>
                          <Text className="ListItem" color="#555555" fontWeight={700} fontSize={24}>AVS Video Editor </Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>All-in-one video editing and recording software! Craft stunning videos with precision and style without special skills. Record, capture screen, trim, merge, apply effects, add audio and text overlays.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={700}>AVS Audio Editor</Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>A complete audio toolkit for clear, polished sound! Cut, merge, and enhance audio with ease. Apply filters, remove noise, and fine-tune tracks for podcasts, music, or voiceovers.</Text>
                          <div className="priceList">
                            <Text className="new" color="#005BD0">$59.00</Text>
                            <Text className="old" color="#646161">$ 179.00</Text>
                        </div>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"avs_video_converter_video_editor.png"}
                          headerText={this.props.t("AVS Video Converter + AVS Video Editor")}
                          buyButtonLink="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=V25Suite&CLEAN_CART=ALL"
                          buyButtonLinkId="buy-vc-ve_summer-sale"
                      >
                        <div className="blockList">
                          <Text className="red" color="#444444" fontSize={16} fontWeight={700}>Video Suite</Text>
                          <Text className="blue" color="#444444" fontSize={16} fontWeight={700}>Lifetime license</Text>
                        </div>
                          <Text className="ListItem" color="#555555" fontWeight={700} fontSize={24}>AVS Video Converter</Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>Convert, compress, resize, basic editing, over 100 formats, including 5K/6K/8K videos. Fast batch processing.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={700} fontSize={24}>AVS Video Editor</Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>Edit, enhance, create video! Trim, merge, add 300+ visual effects, smooth transitions, text, and green screen. Enjoy 4K/HD support and ultra-fast rendering.</Text>
                          <div className="priceList">
                            <Text className="new" color="#005BD0">$59.00</Text>
                            <Text className="old" color="#646161">$ 179.00</Text>
                          </div>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={false}
                          imageName={"avs_audio_converter_audio_editor.png"}
                          headerText={this.props.t("AVS Audio Converter + AVS Audio Editor")}
                          buyButtonLink="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=30ASuite&CLEAN_CART=ALL"
                          buyButtonLinkId="buy-ac-ae_summer-sale"
                      >
                        <div className="blockList">
                          <Text className="red" color="#444444" fontSize={16} fontWeight={700}>Audio Suite</Text>
                          <Text className="blue" color="#444444" fontSize={16} fontWeight={700}>Lifetime license</Text>
                        </div>
                          <Text className="ListItem" color="#555555" fontWeight={700} fontSize={24}>AVS Audio Editor</Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>Record audio from any input source, create audio mixes, remove noise, polish your recordings with special effects and filters, and more.</Text>
                          <Text className="ListItem" color="#555555" fontWeight={700} fontSize={24}>AVS Audio Converter</Text>
                          <Text color="#555555" fontWeight={400} fontSize={22}>Convert, compress, edit audio tags, create your audio books. Batch processing.</Text>
                        <div className="priceList">
                          <Text className="new" color="#005BD0">$55.30</Text>
                          <Text className="old" color="#646161">$ 79.00</Text>
                        </div>
                      </ContentRowItem>

                      <ContentRowItem
                          disableBG={true}
                          imgLeft={true}
                          imageName={"avs_audio_converter_video_converter.png"}
                          headerText={this.props.t("AVS Audio Converter + AVS Video Converter")}
                          buyButtonLink="https://store.avs4you.com/order/checkout.php?PRODS=604132&QTY=1&CART=1&CARD=2&DESIGN_TYPE=2&SHORT_FORM=1&ORDERSTYLE=nLW0m5S5iLk=&COUPON=Conv25SuiT&CLEAN_CART=ALL"
                          buyButtonLinkId="buy-ac-vc_summer-sale"
                      >
                        <div className="blockList oneBlock">
                          <Text className="red" color="#444444" fontSize={16} fontWeight={700}>Ultimate converter bundle</Text>
                          <Text className="blue" color="#444444" fontSize={16} fontWeight={700}>Lifetime license</Text>
                        </div>
                        <Text color="#555555" fontWeight={400} fontSize={22}>All you need to make your audio and video files compatible with mobile devices, gadgets, popular video platforms and social media.</Text>
                        <div className="priceList">
                          <Text className="new" color="#005BD0">$55.30</Text>
                          <Text className="old" color="#646161">$ 79.00</Text>
                        </div>
                      </ContentRowItem>
                </StyledTable>

            <StyledBottom className="summer-last-block">
              <Text fontSize={42} fontWeight={700} color={"#005BD0"} className="bodyHeader whyHalloween" as="h1">Limited-time summer offer: get AVS4YOU tools you need at a price you'll love!</Text>
              <Text fontSize={32} fontWeight={600} color={"#D14200"} className="bodyHeader whyHalloween" as="h2">Start creating and saving today!</Text>
              <BuyButton className="mainButton" textTransform="uppercase" onClick={this.scrollToBuy}>
                  <span className="style-button">buy now</span>
              </BuyButton>
          </StyledBottom>
      </Layout>
    );
  }
};
export default withI18next({ ns: "common" })(SummerSale);
