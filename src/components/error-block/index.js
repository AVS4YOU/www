import React from "react";
import styled from "styled-components";
import Text from '../text';
import AlertIcon from '../../images/common/icons/alert.svg';

const StyledErrorBlock = styled.div`
    display:none;
    position:absolute;
    top: 54px;
    padding: 15px;
    background-color:#ffffff;
    background-image: url(${AlertIcon});
    background-repeat: no-repeat;
    background-position: 12px 50%;
    width: auto;
    max-width: 200px;
    margin: auto;
    left: 0;
    border-radius: 5px;
    padding-left: 37px;
    box-sizing: border-box;

    &:before{
        content: '';
        display: block;
        position: absolute;
        top: -19px;
        left: 10px;
        z-index: 1;
        border: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
`;

function ErrorBlock(props){
    return(
        <StyledErrorBlock className={props.className}>
            <Text fontSize={13} fontWeight={500}>{props.children}</Text>
        </StyledErrorBlock>
    )
}

export default ErrorBlock;