import React from "react";
import withI18next from "../components/withI18next";
import Text from '../components/text';
import Layout from "../components/layout";
import Button from "../components/button";
import ImageGQL from "../components/image-gql";
import ScrollUpButton from '../components/scroll-up-button';
import MoneybackProcedure from '../images/moneyback/icon-moneyback.svg';
import MoneybackRules from '../images/moneyback/icon-rules.svg';
import styled from 'styled-components';
import { Link as ScrollLink } from "react-scroll";

const MoneybackStyled = styled.div`

  .header{

      .flagBackgroundFlipped{
          background-color: #FDA050;
          padding: 8px 10px;
          font-size: 16px;
          position: relative;
          top: -16px;
          color: #fff;
          padding-right: 17px;
          display: table;
          margin-right: 0;
          margin-left: auto;
  
          &:after{
              content: '';
              position: absolute;
              display: block;
              top: 0;
              left: -19px;
              margin: 0em;
              border: 19px solid #FDA050;
              border-left-color: transparent;
              border-right-width: 0em;
          }
  
          &>div{
              content: '';
              border: 10px solid transparent;
              border-top: 10px solid #FB8A29;
              border-left: 10px solid #FB8A29;
              position: absolute;
              top: auto;
              right: 0;
              bottom: -20px;
          }
      }
      .colorMoneyback{
          color:#F59541;
      }
      .header__body-wrapper{
          margin-left: 0;
          display: table;
      }

      .header__heading{
          padding-right: 35px;
          max-width: 630px;
      }

      .header__subtitle {
          max-width: 540px;
          padding-top:15px;
          font-size:18px;
      }

      .header__button{
          margin-top: 65px;
          padding: 18px 50px;
      }
  
      .header__button-text{
          text-transform: uppercase;
      }
  }

  .review-wrapper{
      display:block;
  }

  .screen-wrapper{
      padding: 120px 30px;
  }
  .screen-wrapper-wp{
      padding: 10px 5px;
  }

  .choose-program{

      &.screen-wrapper{
          background-color: #FFF9F1;
          padding: 120px 0;
      }

      .choose-program__round-wrapper-wp{
          display:table;
          margin:auto;
          width: 100px;
          height: 100px;
          background-color:none;
          background-image: url(${MoneybackRules});
          background-repeat: no-repeat;
      }
      .choose-program__round-wrapper-wp-st{
          display:table;
          margin:auto;
          width: 100px;
          height: 100px;
          background-color:none;
          background-image: url(${MoneybackProcedure});
          background-repeat: no-repeat;
      }

      .choose-program__content-wrapper{
          max-width: 700px;
          margin: auto; 
      }

      .choose-program__content-text{
          font-size:24px;
          text-align: center;
      }

      .choose-program__contact-us{
          font-size:18px;
          color:#707070;
          padding-top:64px;
          text-align: center;
      }

      .choose-program__wrapper{
          max-width: 695px;
          box-sizing: border-box;
          margin:auto;

          .common__heading{
              padding-bottom: 30px;
          }
      }

      .choose-program__list{
          color:#555555;
          padding-bottom: 20px;
          position: relative;

          &:before{
              content:"";
              width:5px;
              height:5px;
              background-color:#1E72D2;
              border-radius: 3px;
              left: -20px;
              top: 10px;
              display:block;
              position: absolute;
          }
      }
      .choose-program__round-wrapper{
      display: block;
      margin: auto;
      padding-bottom: 15px;
      .round-and-number{
          padding: 0px;
          padding-left: 25px;
          font-size: 40px;
          &:before{
              width: 50px;
              height: 50px;
          }
      }
  }
      .choose-program__buttons-wrapper{
          display: table;
          margin: auto;
          padding-top:20px;
      }

      .choose-program__button-blue,
      .choose-program__button-transparent{
          padding: 10px 60px;
      }

      .choose-program__button-blue{
          margin-right: 20px;
      }

      .choose-program__button-transparent{
          background-color: transparent;
          text-decoration: underline;
          color: #1373E2;
          border: 1px solid #1373E2;
          .choose-program__button-text{
              color:#1373E2;
          }
      }

      .choose-program__item{
          padding-top:60px;

          .common__heading{
              font-size:28px;
              padding-bottom: 23px;
          }
      }
  }

  .body-reasons{
      max-width: 1420px;
      width: 100%;
      margin: auto;
      box-sizing: border-box;
      .hrefMoneyback{
          text-decoration: underline;
      }
      .body-reasons__wrapper{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          display: -ms-flex;
          -ms-justify-content: center;
          -ms-flex-wrap: wrap;
      }

      .common-info-block{
          width: 30%;
          margin: 50px;
          margin-bottom: 30px;
          max-width: 365px;
          padding-top: 30px;
          .common-info-block__headline{
              font-size: 28px;
          }
          .common-info-block__text{
              font-size: 16px;
          }
      }

      .body-reasons__button-text{
          font-size: 28px;
          text-transform: uppercase;
      }

      .body-reasons__button-wrapper{
          display: table;
          margin: auto;
      }
  }

  .form{
      background-color: #FFF9F1;

      &>img{
          display: block;
          margin: auto;
          margin-bottom: 20px;
      }
  }

  .contact-us-text{
      font-size: 16px;
      padding-top:40px;

  }
  


  .panelCollapse{
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
      border-radius: 0;
      border-bottom: 1px solid #E4E4E4;

      &:first-child{
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
      }

      &:last-child{
          margin-bottom:0px;
          border:none;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
      }
  }
  .questions-wrapper{
      background-color: #FFF9F1;
      padding-bottom: 70px;
  }
  .common__heading-quest{
      padding-top: 60px;
  }
  .questions-block{
      max-width: 944px;
      margin: auto;
      margin-top: 90px;
      box-shadow: 3px 3px 24px rgb(240, 240, 240);

      .panelName{
          padding: 30px 70px;
          padding-left: 40px;
          font-size: 22px;
          text-align: left;
          font-weight: 700;
          color:#000000;
          cursor: pointer;

          &:before{
              width: 16px;
              height: 24px;
              top: 34px;
              right: 25px;
          }
      }

      .collapseContent{
          padding: 35px 40px;
          padding-top: 0px;
      }

      .hiddenText{
          color:#666666;
          font-size: 16px;
      }
  }

  @media (max-width: 1300px){
    .common-info-block{
        max-width:285px;
    }
  }
  @media (max-width: 850px) {
 
        .screen-wrapper.choose-program{
            padding: 70px 30px;
        }

        .headerBackgroundImage{
            right: -45%;
        }

        .header{
            background-position: 50%;
        }

        .choose-program{

            .choose-program__wrapper{
                padding: 50px 30px 10px;

                .common__heading{
                    font-size: 28px;
                }
            }

            .choose-program__contact-us{
                font-size:12px;
            }

            .choose-program__content-text{
                font-size: 18px;
            }

            .choose-program__content-wrapper{
                box-sizing: border-box;
            }

            .choose-program__item{
                padding-left: 28px;
                padding-right: 28px;
            }

            .top-selector-buttons-wrapper{
                width: auto;
                font-size: 14px;
                display: table;
            }

            .top-button{
                padding: 0 20px;
                line-height: 35px;
            }

            .previous-button,
            .next-button{
                display:none;
            }

            .choose-program__buttons-wrapper{
                display: block;
                margin: auto;
                max-width: 350px;
            }

            .choose-program__button-blue{
                display: block;
                text-align: center;
                margin:auto;
                margin-bottom: 20px;

            }

            .choose-program__button-transparent{
                display: block;
                text-align: center;
            }
        }

        .body-reasons{ 

            .body-reasons__button{
                padding: 15px 20px;
            }

            .body-reasons__button-text{
                font-size: 14px;
            }

            .common-info-block{
                width: 45%;
                margin: 10px;
                margin-bottom: 30px;
                max-width: none;
                padding: 5px;
            }
        }
    }
    .questions-wrapper{
        padding-top: 64px;
        padding-bottom: 64px;
    }

    .questions-block{
        margin-top:64px;

        .panelName{
            font-size: 18px;
            padding: 30px 43px;
            padding-left: 16px;

            &:before{
                width: 16px;
                height: 16px;
                top: 36px;
                right: 13px;
            }
        }

        .collapseContent{
            padding: 25px 16px;
            padding-top:0;
        }
    }
    @media (max-width: 620px) {
    
      .questions-wrapper{
          display: none;
      }

      .headerBackgroundImage{
          right: -560px;
      }

      .screen-wrapper{
          padding: 30px 15px;
      }

      .body-reasons {
          .body-reasons__wrapper{
              padding-top: 30px;
          }
          .common-info-block{
              width:100%;
          }
      }

      .header{

          .flagBackgroundFlipped{
              display: table;
              position: relative;
              top: auto;
              margin: auto;
              width: auto;
              padding: 4px 16px;
              margin-bottom: 45px;
              border-radius: 15px;
              font-size: 14px;

              &:after{
                  display:none;
              }

              &:before{
                  display:none;
              }

              &>div{
              display:none;
              }
          }

          .header__body-wrapper{
              display: block;
              width: 100%;
          }
  
          .header__heading{
              padding-right: 0;
          }

          .header__button{
              margin:auto;
              margin-top: 50px;
              padding: 12px 50px;
              display: table;
          }

          .header__button-text{
              font-size: 14px;
          }

          .header__body{
              padding-top: 60px;
              padding-bottom: 170px;
          }
      }

      .screen-wrapper.choose-program{
          padding: 35px 0px;
      }

      .choose-program {

          .choose-program__wrapper{
              padding: 25px 20px 10px;
          }

          .common__heading{
              padding-bottom: 40px;
          }

          .choose-program__list{
              font-size:14px;
          }

          .choose-program__button-text{
              font-size:14px;
          }

          .choose-program__content-text{
              font-size:14px;
          }

          .choose-program__item{
              padding-top: 42px;

              .common__heading{
                  font-size:18px;
                  font-weight: 600;
              }
          }
      }
  
}

@media (max-width: 460px) {
 
      .header .header__background-gradient{
          background: rgb(0,0,0);
          background: -moz-linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 100%, rgba(255,255,255,0) 100%);
          background: -webkit-linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 100%, rgba(255,255,255,0) 100%);
          background: linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 100%, rgba(255,255,255,0) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1);
      }

      .contact-us-text{
          padding-left:15px;
          padding-right:15px;
          font-size:14px;
          text-align: center;
      }

      .header__body{
          .header__heading{
              text-align: center;
          }
          .header__subtitle{
              text-align: center;
          }
          padding-top: 100px;
          padding-bottom: 200px;
      }
      

      .form{ 
          &> img{
              max-width: 60px;
              margin-bottom: 10px;
          }
          .common__heading{
              padding: 0 15px;
          }
      }

      .choose-program{
        .choose-program__round-wrapper{
            display: table;
        }
          .top-selector-buttons-wrapper{
              .top-button{
                  padding: 0 10px;
                  line-height: 20px;
              }

              .selectorText{
                  font-size: 14px;
                  line-height: 27px;
              }
          }
      }
      .choose-program__contact-us{
          font-size: 12px;
      }
      
      .screen-wrapper{
          padding: 50px 15px;

          &.form{
              padding: 30px 0 50px;
          }
      }
      .body-reasons{ 
          .common-info-block{
              width: 100%;
              padding-left: 0;
              padding-right: 0;
              
            .common-info-block__headline{
                font-size: 18px;
            }
            .common-info-block__text{
                font-size: 14px;
            }
          }
        
      }
  
}



`;

class Moneyback extends React.PureComponent {

render(){
    return (
      <MoneybackStyled>
      <Layout 
        className="moneyback" 
        pageContext={this.props.pageContext} 
        t={this.props.t}
        title=""
        metaDescription=""
        metaKeywords=""
      >
        <div className="header">
            <ImageGQL className="headerBackgroundImage" imageName="moneyback_main_back.png" style={{position: "absolute"}}/>
            <div className="header__background-gradient">
              <div className="header__body">
                <div className="header__body-wrapper">
                  <Text as="h1" className="header__heading">{this.props.t("30 Days")} <span className="colorMoneyback" color="#F59541">{this.props.t("Moneyback")}</span> {this.props.t("Guarantee")}</Text>
                  <Text as="h3" className="header__subtitle">{this.props.t("In case you are not satisfied with the software bought from the wwwavs4youcom web site, you can have your money back within 30 days since the purchase")}</Text>
               
                  <ScrollLink to="choose-program__info" spy={true} smooth={true} offset={0} duration={700} className="scrollToButton download">
                  <Button className="header__button" textClassName="header__button-text" href="">{this.props.t("Learn more")}</Button>
                </ScrollLink>
                </div>
              </div>
            </div>
        </div>
        <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />
        <div className="body-reasons screen-wrapper">
            <div className="choose-program">
                <div className="choose-program__wrapper" id="choose-program__info">
                <div className="choose-program__round-wrapper-wp">
                </div>
                  <Text as="h2" className="common__heading">
                  {this.props.t("Moneyback rules")}
                  </Text>
                  <Text className="choose-program__list">
                    {this.props.t("The moneyback is applicable for all the subscription types (at the moment this includes the unlimited and the one-year subscription types)")}
                  </Text>
                  <Text className="choose-program__list">
                   {this.props.t("We reserve the right to suspend moneyback service at any moment Nevertheless all the requests for moneyback before this date will be accepted")}
                  </Text>
                </div>
                </div>       
        </div>
        <div className="choose-program screen-wrapper">
        <div className="body-reasons screen-wrapper-wp">
        <div className="choose-program__round-wrapper-wp-st">
                </div>
        <Text as="h2" className="common__heading">
                  {this.props.t("Moneyback procedure")}
                  </Text>
          <div className="body-reasons__wrapper">
            <div className="common-info-block">
            <div className="choose-program__round-wrapper">
                <Text as="h3" className="round-and-number">
                    01
                </Text>
            </div>
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Download application")}
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("Please")} <a target="_blank" rel="noreferrer noopener" href="https://onlinehelpstaticcontents.avs4you.com/downloads/documents/avslicenseremoval.exe" className="hrefMoneyback">{this.props.t("download")}</a> {this.props.t("a small application here and run it on the computer where the AVS4YOU programs have been installed This program will delete all the registration information from the computer and the AVS4YOU programs status will turn to 'Non-activated'")}
              </Text>
            </div>

            <div className="common-info-block">
            <div className="choose-program__round-wrapper">
                <Text as="h3" className="round-and-number">
                    02
                </Text>
            </div>
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Send form")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("After that download our")}<a target="_blank" rel="noreferrer noopener" href="https://onlinehelpstaticcontents.avs4you.com/downloads/documents/refund.pdf" className="hrefMoneyback">{this.props.t("refund form")}</a>{this.props.t("and print it When you correctly fill in and sign this document, send it to the + 44 207 182 6722 fax number Its electronic copy can also be sent via")}<a target="_blank" rel="noreferrer noopener" href="https://support.avs4you.com/login.aspx" className="hrefMoneyback">{this.props.t("support form")}</a>{this.props.t("as an attachment")}
              </Text>
            </div>

            <div className="common-info-block">
            <div className="choose-program__round-wrapper">
                <Text as="h3" className="round-and-number">
                    03
                </Text>
            </div>
              <Text as="h4" className="common-info-block__headline">
              {this.props.t("Get moneyback")} 
              </Text>
              <Text className="common-info-block__text">
                {this.props.t("The moneyback will be performed the same way the purchase was done For instance, if you paid using a credit card, the money will be returned to the credit card bank account used")}
              </Text>
            </div>

          </div>
        </div>
        </div>
      </Layout>
      </MoneybackStyled>
    );
  }
};
export default withI18next({ ns: "common" })(Moneyback);
