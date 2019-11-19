import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import Button from '../button';
import PropTypes from "prop-types";
import bgBlue from '../../images/main-page/back_picture_blue.svg'
import bgOrange from '../../images/main-page/back_picture_orange.svg'

const RowContent = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 180px;

    &:first-child{
        padding-top: 0;
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
    }

    .bgOrange{
        position:relative;

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
    }

    .ListItem{
        padding-left: 20px;
        padding-bottom: 10px;
        position:relative;

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
    }

    .HeaderListItem{
        padding-bottom: 20px;
        display: inline-flex;
        align-items: center;
    }
`;

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
                <div className="buttonsWrapper">
                    {props.blueButtonLink && <Button fontSize={18} padding="9px 35px" href={props.blueButtonLink} textTransform="uppercase">Download now</Button>}
                    {props.smallButtonLink && <Button href={props.smallButtonLink} textTransform="uppercase" color="#1E72D2" background={false}>Learn more</Button>}
                </div>
            </div>
        </div>
    )
}

const ContentRowItem = (props) => {

    if (props.imgLeft){
        return(
            <RowContent id={props.id}>
                <div className="bgBlue">
                    <img className="rowImage" src={props.image} alt={props.headerText}></img>
                </div>
                {TextContent(props)}
            </RowContent>
        )
    } else {
        return(
            <RowContent id={props.id}>
                {TextContent(props)}
                <div className="bgOrange">
                    <img className="rowImage" src={props.image} alt={props.headerText}></img>
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