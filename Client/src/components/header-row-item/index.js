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
import Marker from '../../images/avs-video-editor-final/file-02 2.svg';
const formSended = new Cookies().get("formSended");

const RowContent = styled.div`
    display:table;
    width:100%;
    padding-top: 25px;
    padding-bottom:25px;
    .HeaderListItem.mobile, .bgOrange.mobile{
        display:none;
    }

    h1{
        padding: 0;
    }

    &:first-child{
        padding-top: 0;
    }

    .rowImage{
        height: 105%;
        position: absolute;
        z-index: 3;
        display:block;
        overflow: unset !important;
        border: none;
    }

    &.imgRight{
        min-height:490px;
        .rowImage{
            margin-left: auto;
            &:before{
                content: '';
                background-image: url(${bgOrange});
                background-size: 100%;
                background-repeat: no-repeat;
                width: 360px;
                height:360px;
                left: -36px;
                top: -36px;
                position:relative;
            }
        }
    }

    &.imgLeft{
        .rowImage{
            margin-right: auto;
            max-width: 450px;
            &:before{
                content: '';
                background-image: url(${bgBlue});
                background-size: 35%;
                background-repeat: no-repeat;
                width: 240px;
                height: 240px;
                top: -36px;
                position:relative;
            }
        }
    }

    .bgOrange{
        position: relative;
        display: table-cell;
        width: 45%;
        vertical-align: middle;
        left: -75px;
    } 

    .bgBlue{
        position: relative;
        display: table-cell;
        width: 30%;
        vertical-align: middle;
        left: 100px;
        max-width: 450px;  
    }

    .flexWrapper{
        display: table-cell;
        vertical-align: middle;
        margin: auto;
        padding-top: 25px;
        padding-bottom: 25px;
        width:60%;
        font-family:'Open Sans',sans-serif,Arial;
        .tableWrapper{
            display: table;
            margin: auto;
            width: 95%;
            margin-left:18%;
            padding-top:15px;
            .tableWrapperHeader{
                display: inline-table;
                width: 90%;
                height: 45%;
                padding: 20px;
                z-index: 1;
                background-color: #fff;
                .headerText{
                    width: 85%;
                }
            }
            .tableWrapperHeader35{
                display: inline-table;
                width: 100%;
                height: 45%;
                padding: 20px;
                z-index: 1;
                background-color: #fff;
            }
        }
    }

    .ListItem{
        padding-left: 30px;
        padding-bottom: 10px;
        position:relative;
        color:#555555;
        font-weight: 500;
        list-style-type: none;
        font-family:'Open Sans',sans-serif,Arial;
        font-size:14px;
        &>span{
            display:block;
            font-weight:bold;
            font-size:19px;
        }

        &:before{
            content: '';
            width: 20px;
            height: 20px;
            background-image: url(${Marker});
            background-repeat: no-repeat;
            position: absolute;
            left:0;
            top: 0;
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
    .HeaderListItemTable{
        display:inline-flex;
        padding-top: 10px; 
    .HeaderListItem{
        padding-left: 40px;
        display: table-column;
        align-items: center;
        font-weight: 600;
    }
    .HeaderListItem35{
        display: table-column;
        align-items: center;
        font-weight: 600;
    }
        
    }
    .headerText{
        padding-left:15px;
        font-family:'Open Sans',sans-serif,Arial;
    }
    .headerDescription{
        padding-left:15px;
        font-family:'Open Sans',sans-serif,Arial;
        padding-bottom: 3px;
    }
    .headerButtonsWrapper{
        padding-top: 30px;
        font-family:'Open Sans',sans-serif,Arial;
    }
    .buttonsWrapper{
        display: table;
        align-items: center;
        padding-left: 15px;
        padding-bottom: 5px;
        padding-top: 20px;
        .secondaryButton{
            color:#333333;
            display: block;
            margin-left: 50px;
            &.mobileSended{
                background-color: #fff;
                color: #333
                border-radius: 5px;
                border: 1px solid #333;
                p{
                    color: #333;
                }
            }

            &:hover{
                text-decoration:underline;
            }
        }

        .mainButton{
            display: table-cell;
            background-color: #FC4B15;
        }
        .secondaryButton{
            display: block;
            margin-left:-25px;
            background-color: #FFFFFF;
            color: #333;
            border: 1px solid #333;
            p{
                color: #333;
                font-weight: 700;
            }
        }
    }

    @media (max-width: 1500px) {
        grid-gap: 65px;
        padding-top: 25px;
        .headerButtonsWrapper{
            padding-top: 30px;
        }
        .flexWrapper {
            margin-left: 15%;
            .tableWrapper{
                display: table;
                margin: auto;
                width: 100%;
                margin-left:8%;
                padding: 5px;
                .tableWrapperHeader{
                    padding: -5px;
                    .headerText{
                        width: 100%;
                    }
                }
            }
        }
        .bgOrange {
            left: -75px;
            top: -10px;
            width: 45%;
        }
        .bgBlue{
            position: relative;
            display: table-cell;
            width: 40%;
            vertical-align: middle;
            left: 0px;
            max-width: 450px;  
        }
    }

    @media (min-width: 1560px){
        .bgOrange{
            position: relative;
            width: 38%;
            left: -135px;
            top: -1px;
        } 
        .flexWrapper{
            .tableWrapper{
                .tableWrapperHeader{
                padding: 25px;
                padding-left: 35px;
                }
            }
        } 
    }

    @media (max-width: 1400px) {
        .headerButtonsWrapper{
            padding-top: 30px;
        }
        .flexWrapper{
            padding-left: 10px;
        }
      .leftTableWrapper{
          width: 90%;
        .flexWrapper {
            margin-left: 5%;
            .tableWrapper{
                width: 100%;
                margin-left:5%;
                padding: 5px;
                .tableWrapperHeader{
                    padding: -5px;
                    .headerText{
                        width: 90%;
                    }
                }
            }
        }
      }
      .rightTableWrapper{
        .flexWrapper {
            margin-left: 15%;
            .tableWrapper{
                width: 100%;
                margin-left:20%;
                padding: 5px;
                .tableWrapperHeader{
                    padding: -5px;
                    .headerText{
                        width: 100%;
                    }
                }
            }
        }
    }
        .bgOrange {
            left: 0px;
            top: -10px
        }
        .bgBlue{
            position: relative;
            display: table-cell;
            width: 40%;
            vertical-align: middle;
            left: 95px;
            max-width: 450px;  
        }
    }

    @media (max-width: 1280px) {
        .leftTableWrapper{
            .flexWrapper {
                margin-left: 5%;
                .tableWrapper{
                    width: 90%;
                    margin-left:3%;
                    padding: 5px;
                    .tableWrapperHeader{
                        padding: -5px;
                        .headerText{
                            width: 100%;
                        }
                    }
                }
            }
          }
          .rightTableWrapper{
            .flexWrapper {
                margin-left: 15%;
                .tableWrapper{
                    width: 100%;
                    margin-left:10%;
                    padding: 5px;
                    .tableWrapperHeader{
                        padding: -5px;
                        .headerText{
                            width: 100%;
                        }
                    }
                }
            }
        }
        .bgBlue{
            left: 5%;
        }
    }

    @media (max-width: 1180px){
        .leftTableWrapper{
            .flexWrapper {
                margin-left: 5%;
                .tableWrapper{
                    width: 80%;
                    margin-left:2%;
                }
            }
        }
        .flexWrapper{
            .tableWrapper{
                margin-left: 10%;
                .rightTableWrapper{
                .headerText{
                    font-size:32px;
                }
            }
            }
        }
    }

    @media (max-width: 1140px) {
        .bgBlue{
            left: 2%;
        }
        .flexWrapper{
            .tableWrapper{
                margin-left: 0;
            }
        }
    }

    @media (max-width: 1050px) {
        .headerButtonsWrapper{
            padding-top: 30px;
        }
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
            padding-top: 25px;
        }

        .ListItem{
            font-size: 16px;
        }

        .HeaderListItem{
            display: table-column;
            font-size: 15px;
            font-weight: 600;
            padding: 0;
            padding-top:10px;
        }
        .HeaderListItem35{
            display: table-column;
            font-size: 15px;
            font-weight: 600;
            padding: 0;
            padding-top:10px;
            #hdlist{
                padding-left:10px;
            }
    }
        

        .buttonsWrapper{
            display: block;
            margin: auto;
            
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
        .headerButtonsWrapper{
            padding-top: 30px;
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
    
        .HeaderListItem35{
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
            max-width: 480px;
            padding:0px;
            .tableWrapper{
                margin: initial;
                display: block;
                .tableWrapperHeader{
                    padding: 10px;
                    margin-right:40px;
                    width: 100%;
                }
            }
        }

        .bgOrange, .bgBlue{
            margin:auto;
            display:block;
            margin-top: 20px;
            margin-bottom: 20px;
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
            max-width: 490px;
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

const TextContent = (props, touchDevice) =>
{
    return(
        <div className="flexWrapper">
            <div className={`${props.imgLeft ? 'leftTableWrapper':'rightTableWrapper'}`}>
            <div className="tableWrapper">
                <Text className="HeaderListItem35" as="h3" color="#000000" fontSize={28}>
                    {props.headerText} 
                    {props.free && <Text as="span" className="flagBackground">Free</Text>}
                </Text>
                {props.children}

                {touchDevice 
                    ?
                        <div className="buttonsWrapper">
                            {props.scrollTo && !formSended &&
                                <Link className="scrollLink" to={props.scrollTo} spy={true} smooth={true} offset={0} duration={500}>
                                    <Button as="div" className="mainButton" fontSize={18} padding="9px 35px" textTransform="uppercase">Download now</Button>
                                </Link>
                            }
                            {props.smallButtonLink && !formSended 
                                ? <Button className="secondaryButton" href={props.smallButtonLink} color="#333333" background={false}>Download now</Button>
                                : ''}
                        </div>  
                    :
                        <div className="buttonsWrapper">
                            {props.blueButtonLink && <Button className="mainButton" fontSize={18} padding="9px 35px" href={props.blueButtonLink}>Download now</Button>}
                            {props.smallButtonLink && <Button className="secondaryButton" href={props.smallButtonLink} color="#333333" background={false}>Download now</Button>}
                        </div>  
                }
                </div>
                
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
    });

    if (props.imgLeft){
        return(
            <RowContent className="imgLeft" id={props.id} touchDevice={touchDevice}>
                {HeaderMobile(props)}
                <div className="bgBlue">
                    <ImageGQL className="rowImage" imageName={props.imageName} alt={props.headerText}></ImageGQL>
                </div>
                {TextContent(props, touchDevice)}
            </RowContent>
        )
    } else {
        return(
            <RowContent className="imgRight" id={props.id} touchDevice={touchDevice}>
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
    smallButtonLink: PropTypes.string
};

ContentRowItem.defaultProps = {
    free: false,
    imgLeft: false
};

export default ContentRowItem;