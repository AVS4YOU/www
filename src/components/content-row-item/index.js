import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import { Link } from "react-scroll";
import Button from '../button';
import ImageGQ from '../image-gql';
import PropTypes from "prop-types";
import bgBlue from '../../images/main-page/back_picture_blue.svg';
import bgOrange from '../../images/main-page/back_picture_orange.svg';
import UAParser from 'ua-parser-js';

const desktopStyles = css`
    .buttonsWrapper{
        .scrollLink{
            display:none;

            .mainButton{
                display:none;
            }
        }

        .mainButton{
            display: block;
        }
    }
`;

const mobileStyles = css`
    .buttonsWrapper{
        .scrollLink{
            display:block;

            .mainButton{
                display:block;
            }
        }

        .mainButton{
            display: none;
            margin: auto;
            text-align:center;
        }
    }
`;

const RowContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 180px;

    &:first-child{
        padding-top: 0;
    }

    .scrollLink{
        display:none;
    }
    
    .buttonsWrapper {
        display: grid;
        grid-template-columns: auto auto 1fr;
        align-items: center;
        grid-gap: 30px;
        padding-top: 60px;
    }

    .rowImage{
        max-width: 722px;
        position: relative;
        z-index: 2;
        display:block;

    }

    .bgOrange{
        position:relative;

        .rowImage{
            margin-right: auto;
        }

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
            z-index: 1;
        }
    } 

    .bgBlue{
        position:relative;

        .rowImage{
            margin-left: auto;
        }

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
            z-index: 1;
        }
    }

    .flexWrapper{
        display: flex;
        align-items: center;
        margin: auto;
        max-width: 500px;

        &.mobile{
            display:none;
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
            &:before{
                content: none;
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

        &.mobile{
            display:none;
        }
    }

    ${props => props.touchDevice ? mobileStyles : desktopStyles}

    @media (max-width: 1500px) {
        grid-gap: 65px;
        padding-top: 120px;

        .rowImage{
            max-width: 100%;
        }
    }

    @media (max-width: 1050px) {
        grid-gap: 25px;

        &.imgLeft{
            grid-template-columns: 55% 1fr;
        }

        &.imgRight{
            grid-template-columns: 1fr 55%;
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

        .bgOrange, .bgBlue{
            align-items: center;
            display: flex;

            .rowImage{
                margin:auto;
            }

            &:before{
                content: none;
            }
        }

        .buttonsWrapper{
            display: table;
            margin: auto;
            padding-top: 35px;

            .scrollLink{
                display:block;

                .mainButton{
                    display:block;
                }
            }

            .mainButton{
                display: none;
                margin: auto;
                text-align:center;
            }

            .secondaryButton{
                display: block;
                margin-top: 20px;
                width: 100%;
                text-align: center;
            }
        }

        ${props => props.touchDevice ? mobileStyles : desktopStyles}
    }

    @media (max-width: 750px) {

        padding-top: 50px;

        &:first-child{
            padding-top: 50px;
        }

        &.imgLeft, &.imgRight{
            grid-template-columns: 100%;
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
            display:none;

            &.mobile{
                display: block;
                max-width: 500px;
                width: 100%;
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
    return(
        <Text className="HeaderListItem mobile" as="h3" color="#000000" fontSize={28}>
            <Text className="mobileFreeInfo" as="span">{props.free && "Free" + " "}</Text> {props.headerText} 
        </Text>
    )
}

const TextContent = (props) =>
{
    return(
        <div className="flexWrapper">
            <div>
                <Text className="HeaderListItem" as="h3" color="#000000" fontSize={28}>
                    {props.headerText} 
                    {props.free && <Text as="span" className="flagBackground">Free</Text>}
                </Text>
                {props.children}
                {props.blueButtonLink && 
                
                <div className="buttonsWrapper">
                    {props.scrollTo && <Link className="scrollLink" to={props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                            <Button as="div" className="mainButton" fontSize={18} padding="9px 35px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                        </Link>
                    }
                    {props.blueButtonLink && <Button className="mainButton" fontSize={18} padding="9px 35px" href={props.blueButtonLink} textTransform="uppercase">Download now</Button>}
                    {props.smallButtonLink && <Button className="secondaryButton" href={props.smallButtonLink} textTransform="uppercase" color="#1E72D2" background={false}>Learn more</Button>}
                </div>
                }
            </div>
        </div>
    )
}

const TextContentMobile = (props) =>
{
    return(
        <div className="flexWrapper mobile">
            <div>
                {props.children}    
            </div>
            {props.blueButtonLink && 
                <div className="buttonsWrapper">
                    {props.scrollTo && <Link className="scrollLink" to={props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                            <Button as="div" className="mainButton" fontSize={18} padding="9px 35px" textTransform="uppercase">GET $5 COUPON CODE</Button>
                        </Link>
                    }
                    {props.blueButtonLink && <Button className="mainButton" fontSize={18} padding="9px 35px" href={props.blueButtonLink} textTransform="uppercase">Download now</Button>}
                    {props.smallButtonLink && <Button className="secondaryButton" href={props.smallButtonLink} textTransform="uppercase" color="#1E72D2" background={false}>Learn more</Button>}
                </div>
            }
        </div>
    )
}

const ContentRowItem = (props) => {

    const [touchDevice, setTouchDevice] = useState(false);

    useEffect(() => {
        var parser = new UAParser();
        var result = parser.getResult();
        setTouchDevice(result.device.type === "mobile" || result.device.type === "tablet");
    });

    if (props.imgLeft){
        return(
            <RowContent className="imgLeft" id={props.id} touchDevice={touchDevice}>
                {HeaderMobile(props)}
                <div className="bgBlue">
                    <ImageGQ className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQ>
                </div>
                {TextContent(props)}
                {TextContentMobile(props)}
            </RowContent>
        )
    } else {
        return(
            <RowContent className="imgRight" id={props.id} touchDevice={touchDevice}>
                {TextContent(props)}
                {HeaderMobile(props)}
                <div className="bgOrange">
                    <ImageGQ className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQ>
                </div>
                {TextContentMobile(props)}
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
    smallButtonLink: PropTypes.string
};

ContentRowItem.defaultProps = {
    free: false,
    imgLeft: false
};

export default ContentRowItem;