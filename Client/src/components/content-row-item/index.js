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

const formSended = new Cookies().get("formSended");

const RowContent = styled.div`
   padding-top: 180px;
    display:table;
    width:100%;

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
        padding-left: 20px;
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
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background-color: #1E72D2;
            position: absolute;
            left:0;
            top: 10px;
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
        font-weight: 600;
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
                <Text className="HeaderListItem" as={props.asType} color="#000000" fontSize={28}>
                    {props.headerText} 
                    {props.free && <Text as="span" className="flagBackground">{t("Free")}</Text>}
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
                        </div>
                    :
                        <div className="buttonsWrapper">
                            {props.blueButtonLink && <Button id={props.blueButtonLinkId} className="mainButton" fontSize={18} padding="9px 35px" href={props.blueButtonLink}>{t("Download now")}</Button>}
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
            <RowContent className="imgLeft" id={props.id} touchDevice={touchDevice} disableBG={props.disableBG}>
                {HeaderMobile(props)}
                <div className="bgBlue">
                    <ImageGQL className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQL>
                </div>
                {TextContent(props, touchDevice)}
            </RowContent>
        )
    } else {
        return(
            <RowContent className="imgRight" id={props.id} touchDevice={touchDevice} disableBG={props.disableBG}>
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
    imgLeft: PropTypes.bool,
    image: PropTypes.string,
    headerText: PropTypes.string,
    free: PropTypes.bool,
    blueButtonLink: PropTypes.string,
    translateButtonLink: PropTypes.string,
    smallButtonLink: PropTypes.string
};

ContentRowItem.defaultProps = {
    free: false,
    asType: "h3",
    imgLeft: false
};

export default ContentRowItem;
