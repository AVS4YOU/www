import React from 'react';
import styled from 'styled-components';

const StyledBurgerButton = styled.div`
    width: 19px;
    height: 16px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-self: center;
    margin-left: 15px;

    &>span{
        display: block;
        width: 19px;
        height: 2px;
        background-color: #fff;
        top: 0;
        position: absolute;

        &:before, &:after{
            display: block;
            width: 19px;
            height: 2px;
            background-color: #fff;
            position: absolute;
            content: '';
        }

        &:before{
            top: 7px;
        }

        &:after{
            top: 14px;
        }
    }
`;


const BurgerButton = (props) => {
    return (
        <StyledBurgerButton onClick={props.func}>
            <span></span>
        </StyledBurgerButton>
    )
}


export default BurgerButton;