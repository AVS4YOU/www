import React from "react";
import styled from "styled-components";
import Text from '../text';
import AlertIcon from '../../images/common/icons/alert-icon.svg';

const StyledErrorBlock = styled.div`
    display:none;
    position:absolute;
    bottom: -20px;
    background-image: url(${AlertIcon});
    background-repeat: no-repeat;
    width: auto;
    max-width: 200px;
    margin: auto;
    left: 0;
    box-sizing: border-box;
    z-index: 1;
    border: none;
    padding: 0;
    padding-left: 19px;
    background-position: 0px 50%;
    background-size: 11px;

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
            <Text color="#FE1646" fontSize={13} fontWeight={500}>{props.children}</Text>
        </StyledErrorBlock>
    )
}

export default ErrorBlock;