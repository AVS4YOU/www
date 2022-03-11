import React from 'react';
import styled from 'styled-components';
import Text from '../text';

const StyledFreeFlag = styled.div`
    display: block;

    .firstFlagPartWrapper{
        display: flex;
    }

    span {
        font-size: 13px;
        color: #fff;
    }

    .flagContent{
        background-color: #FDA050;
        padding: 2px 20px;
        padding-right: 17px;
        display: inline-flex;
    }

    .firstFlagPart{
        content: "";
        display: block;
        top: 0;
        right: -13px;
        margin: 0;
        border-color: #fda050 transparent #fda050 #fda050;
        border-style: solid;
        border-width: 11px 10px 11px 0;
    }

    .secondFlagPart{
        content: '';
        border: 7px solid transparent;
        border-top: 7px solid #FB8A29;
        border-right: 7px solid #FB8A29;
        width: 0px;
    }
`;

const FreeFlag = (props) => {
    return (
        <StyledFreeFlag className={props.className}>
            <div className='firstFlagPartWrapper'>
                <div className='flagContent'>
                    <Text as="span" >{props.children}</Text>
                </div>
                <div className='firstFlagPart'></div>
            </div>
            {!props.disableSecondPart && <div className='secondFlagPart'></div>}
        </StyledFreeFlag>
    )
}


export default FreeFlag;