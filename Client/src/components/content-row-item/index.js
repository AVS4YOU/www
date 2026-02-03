import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Text from '../text';
import { Link } from "react-scroll";
import Button from '../button';
import ImageGQL from '../image-gql';
import PropTypes from "prop-types";
import bgBlue from '../../images/main-page/back_picture_blue.svg';
import bgOrange from '../../images/main-page/back_picture_orange.svg';
import UAParser from 'ua-parser-js';
import Cookies from 'universal-cookie';
import LinkProducts from '../link';
import { useTranslation } from 'react-i18next';
import FreeFlag from '../../components/free-flag';

const formSended = new Cookies().get("formSended");

const RowContent = styled.div`
   padding-top: 180px;
    display:table;
    width:100%;

    .newText {
        padding: 4px 10px;
        color: #fff;
        background-color: #FE9235;
        font-weight: 700;
    }

    .aiPluginText {
        font-weight: 700;
    }

    .HeaderListItem.mobile, .bgOrange.mobile{
        display:none;
    }

    &:first-child{
        padding-top: 0;
    }

    .rowImage{
        max-width: 722px;
        position: relative;
        z-index: 0;
        display:block;
        overflow: unset !important;
        ${props => !props.disableBG && `
            border: 1px solid #ECEFF5;
        `}
    }

    &.imgRight{
        .rowImage{
            margin-left: auto;
            ${props => !props.disableBG && `
                &:before{
                    content: '';
                    background-image: url(${bgOrange});
                    background-size: 100%;
                    background-repeat: no-repeat;
                    width: 206px;
                    height:206px;
                    left: -36px;
                    top: -36px;
                    position:absolute;
                }
            `}
        }
    }

    &.imgLeft{
        .rowImage{
            margin-right: auto;
            ${props => !props.disableBG && `
                &:before{
                    content: '';
                    background-image: url(${bgBlue});
                    background-size: 100%;
                    background-repeat: no-repeat;
                    width: 206px;
                    height:206px;
                    right:-36px;
                    top: -36px;
                    position:absolute;
                }`
            }   
        }
    }

    .bgOrange{
        position: relative;
        display: table-cell;
        width: 60%;
        vertical-align: middle;

        .rowImage{
            margin-left: auto;
        }
    } 

    .bgBlue{
        position: relative;
        display: table-cell;
        width: 60%;
        vertical-align: middle  
    }

    .flexWrapper{
        display: table-cell;
        vertical-align: middle;
        margin: auto;
        padding: 0 10px;
        padding-left: 70px;

        .tableWrapper{
            display: table;
            margin: auto;
        }
    }

    .ListItem{
        padding-left: ${props => props.showBullets ? '20px' : '0'};
        padding-bottom: 10px;
        position:relative;
        color:#555555;
        font-weight: 500;

        &>span{
            display:block;
            font-weight:bold;
            font-size:19px;
        }

        &:before{
            ${props => props.showBullets ? `
                content: '';
                width: 5px;
                height: 5px;
                border-radius: 5px;
                background-color: #1E72D2;
                position: absolute;
                left:0;
                top: 10px;
            ` : `
                content: none;
            `}
        }

        &.LinkItem{
            text-decoration:none;
            color: #1E72D2;
            font-weight: 500;   
            font-size: 18px;

            &:before{
                content: none;
            }

            &:hover{
                text-decoration:underline;
            }

        }

        &.footnote{
            font-size:14px;
            font-weight:500;

            &:before{
                content: none;
            }
        }
    }

    .HeaderListItem{
        padding-bottom: 20px;
        display: inline-flex;
        align-items: center;
        font-weight: 700;
        gap: 24px;

        .firstFlagPartWrapper {
            .firstFlagPart {
                border-width: 13px 10px 13px 0;
            }
            .flagContent {
                padding: 4px 17px 4px 20px;
            }
        }

        .secondFlagPart {
            display: none;
        }

        &-wrapper {
            display: flex;
            gap: 16px;
            align-items: center;
            margin-bottom: 32px;

        }

        &-wrapper.mobile {
            justify-content: center;
            margin-bottom: 8px;
        }
    }

    .buttonsWrapper{
        display: table;
        align-items: center;
        padding-top: 60px;

        .secondaryButton{
            color:#333333;
            display: table-cell;
            padding: 0 25px;

            &.mobileSended{
                background-color: #1373E2;
                padding: 9px 35px;
                border-radius: 5px;
                a{
                    color: #fff;
                }
                p{
                    color: #fff;
                }
            }

            &:hover{
                text-decoration:underline;
            }
        }

        .mainButton{
            display: table-cell;
        }
    }

    @media (max-width: 1500px) {
        grid-gap: 65px;
        padding-top: 120px;

        .rowImage{
            max-width: 100%;
        }
    }

    @media (max-width: 1300px) {

        .flexWrapper{
            padding-left: 10px;
        }

        .rowImage{
            max-width: 80%;
        }
    }

    @media (max-width: 1050px) {
        grid-gap: 25px;

        &.imgRight{
            .textContentMobileWidth{
                display:block;
            }
        }

        .scrollLink{
            text-decoration: none;
        }
        
        &:first-child{
            padding-top: 120px;
        }

        .ListItem{
            font-size: 16px;
        }

        .HeaderListItem{
            font-size: 18px;
            font-weight: 600;
        }

        .buttonsWrapper{
            display: block;
            margin: auto;
            padding-top: 35px;

            .mainButton{
                text-align: center;
                display: table;
                margin: auto;
            }

            .secondaryButton{
                text-align: center;
                display: table;
                margin: auto;
                width: auto;
                margin-top: 20px;       
            }
        }
    }

    @media (max-width: 780px) {

        .HeaderListItem-wrapper {
            display: none;
        }

        .HeaderListItem-wrapper.mobile {
            display: flex;
            justify-content: center;
            margin-bottom: 8px;
        }

        padding-top: 50px;

        &:first-child{
            padding-top: 50px;
        }

        &.imgLeft, &.imgRight{
            display:block;
        }

        .freeTextMobile{
            font-size: 24px;
        }

        .HeaderListItem{
            display: none;

            &.mobile{
                display:block;
                font-weight: 700;
                text-align: center;
                padding-bottom: 0;
                font-size: 24px;

                .mobileFreeInfo{
                    font-size: inherit;
                    font-weight: inherit;
                    color: #FB8A29;
                    text-transform: uppercase;
                }
            }
        }

        .flexWrapper{
            display: block;
            max-width: 500px;

            .tableWrapper{
                margin: initial;
                display: block;
            }
        }

        .bgOrange, .bgBlue{
            margin:auto;
            display:block;
            margin-top: 40px;
            margin-bottom: 40px;
            width:100%;

            .rowImage{
                margin:auto;
                width:100%;

                &:before{
                    content: none;
                }
            }        
        }

        .bgOrange{
            display:none;

            &.mobile{
                display:block;
            }
        }

        .rowImage{
            max-width: 500px;
            margin: auto;
            width: 100%;
        }
    }  
`;

const HeaderMobile = (props) =>
{
    const { t } = useTranslation('common');
    return(
        <Text className="HeaderListItem mobile" as="h3" color="#000000" fontSize={28}>
            <div className="HeaderListItem-wrapper mobile">
                {props.newText && <Text className="newText mobile" fontSize={18}>{props.newText}</Text>}
                {props.aiPluginText && <Text className="aiPluginText mobile" fontSize={18}>{props.aiPluginText}</Text>}
            </div>
            <Text className="mobileFreeInfo" as="span">{props.free && t("Free") + " "}</Text> {props.headerText} 
        </Text>
    )
}

const TextContent = (props, touchDevice) =>
{
    const { t } = useTranslation('common');
    return(
        <div className="flexWrapper">
            <div className="tableWrapper">
                {props.newText && props.aiPluginText && (
                    <div className="HeaderListItem-wrapper">
                        {props.newText && <Text className="newText" fontSize={18}>{props.newText}</Text>}
                        {props.aiPluginText && <Text className="aiPluginText" fontSize={18}>{props.aiPluginText}</Text>}
                    </div>
                )}
                <Text className="HeaderListItem" as={props.asType} color="#000000" fontSize={28}>
                    {props.newText && !props.aiPluginText && <Text className="newText" fontSize={18}>{props.newText}</Text>}
                    {props.headerText} 
                    {props.free && <FreeFlag>{t("Free")}</FreeFlag>}
                </Text>
                {props.children}

                {touchDevice 
                    ?
                        <div className="buttonsWrapper">
                            {props.scrollTo && !formSended &&
                                <Link className="scrollLink" to={props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="mainButton" fontSize={18} padding="9px 35px" textTransform="uppercase">{t("GET $5 COUPON CODE")}</Button>
                                </Link>
                            }
                            {/*props.smallButtonLink && !formSended 
                                ? 
                                <Button className="secondaryButton" color="#333333" background={false}><LinkProducts to={props.smallButtonLink}>{t("Learn more")}</LinkProducts></Button>
                                : <Button className="secondaryButton mobileSended" color="#333333" background={false}><LinkProducts to={props.smallButtonLink}>{t("Learn more")}</LinkProducts></Button>
                            */}
                            {props.buyButtonLink && <Button id={props.buyButtonLinkId} className="mainButton" fontSize={16} padding="11px 72px" href={props.buyButtonLink}>Buy now</Button>}
                            {props.getButtonLink && <Button id={props.getButtonLinkId} className="mainButton" fontSize={12} padding="14px 72px" href={props.getButtonLink}>Get It Now</Button>}
                        </div>
                    :
                        <div className="buttonsWrapper">
                            {props.blueButtonLink && <Button id={props.blueButtonLinkId} className="mainButton" fontSize={18} padding="9px 35px" href={props.blueButtonLink}>{t("Download now")}</Button>}
                            {props.buyButtonLink && <Button id={props.buyButtonLinkId} className="mainButton" fontSize={18} padding="13px 44px" href={props.buyButtonLink}>Buy now</Button>}
                            {props.getButtonLink && <Button id={props.getButtonLinkId} className="mainButton" fontSize={18} padding="18px 72px" href={props.getButtonLink}>Get It Now</Button>}
                            {props.translateButtonLink && <Button id={props.translateButtonLinkId} className="mainButton" fontSize={18} padding="9px 35px" href={props.translateButtonLink}>Download now</Button>}
                            {props.smallButtonLink && <Button id={props.smallButtonLinkId} className="secondaryButton" color="#333333" background={false}><LinkProducts to={props.smallButtonLink}>{t("Learn more")}</LinkProducts></Button>}
                        </div>  
                }
  
                
            </div>
        </div>
    )
}

const ContentRowItem = (props) => {

    const [touchDevice, setTouchDevice] = useState(false);

    useEffect(() => {
        var parser = new UAParser();
        var result = parser.getResult();
        setTouchDevice(result.device.type === "mobile" || result.device.type === "tablet");
    }, [setTouchDevice]);

    if (props.imgLeft){
        return(
            <RowContent className="imgLeft" id={props.id} touchDevice={touchDevice} disableBG={props.disableBG} showBullets={props.showBullets}>
                {HeaderMobile(props)}
                <div className="bgBlue">
                    <ImageGQL className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQL>
                </div>
                {TextContent(props, touchDevice)}
            </RowContent>
        )
    } else {
        return(
            <RowContent className="imgRight" id={props.id} touchDevice={touchDevice} disableBG={props.disableBG} showBullets={props.showBullets}>
                {HeaderMobile(props)}
                <div className="bgOrange mobile">
                    <ImageGQL className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQL>
                </div>
                {TextContent(props, touchDevice)}
                <div className="bgOrange">
                    <ImageGQL className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQL>
                </div>
            </RowContent>
        )
    }
}

ContentRowItem.propTypes = {
    newText: PropTypes.string,
    aiPluginText: PropTypes.string,
    imgLeft: PropTypes.bool,
    image: PropTypes.string,
    headerText: PropTypes.string,
    free: PropTypes.bool,
    blueButtonLink: PropTypes.string,
    buyButtonLink: PropTypes.string,
    getButtonLink: PropTypes.string,
    translateButtonLink: PropTypes.string,
    smallButtonLink: PropTypes.string,
    showBullets: PropTypes.bool
};

ContentRowItem.defaultProps = {
    free: false,
    asType: "h3",
    imgLeft: false,
    showBullets: true
};

export default ContentRowItem;
