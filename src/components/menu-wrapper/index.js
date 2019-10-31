import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Logo from '../../images/common/logo.svg'
import DropdownElement from '../dropdown-element'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'
import { Trans, withI18n } from '@lingui/react'

const StyledMenuWrapper = styled.div`
    width: 100%;
    height:60px;
    background-color: #32393e;
`;

const StyledMenuGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
    max-width: 1300px;
    margin: auto;
    padding: 0 15px;
    box-sizing: border-box;
    height:100%;
`;

const MenuItemsWrapper = styled.div`
    width: auto;
    height: 100%;
    margin: auto;
    display: block;
`;

const LogoWrapper = styled.a`
    display: flex;
    height: 100%;

    &>img{
        margin:0;
    }
`;

const Lang = ({ lang, onClick, selected }) => (
    <a style={{ color: '#cecece', marginRight: '10px', textDecoration: selected ? 'underline' : 'none', cursor: 'pointer' }} onClick={onClick}>
        {lang}
    </a>
)

const MenuWrapper = props => {

    return(
        <StyledMenuWrapper>
            <StyledMenuGrid>
                <div>
                    <LogoWrapper href="/">
                        <img src={Logo} />
                    </LogoWrapper>
                </div>
                <MenuItemsWrapper>
                    {props.children}
                </MenuItemsWrapper>
                <MenuItem isLangSelector={true}>
                    <MenuDropdown>
                        <Lang lang='en' onClick={(e) => props.onLangClick('en')} selected={props.lang == 'en'} />
                        <Lang lang='ru' onClick={(e) => props.onLangClick('ru')} selected={props.lang == 'ru'} />               
                    </MenuDropdown>
                </MenuItem>
            </StyledMenuGrid>
        </StyledMenuWrapper>
    )
}

export default MenuWrapper;
