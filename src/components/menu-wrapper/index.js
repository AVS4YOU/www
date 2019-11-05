import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/common/logo.svg'
import MenuItem from '../menu-item'
import MenuDropdown from '../menu-dropdown'
import DropdownElement from '../dropdown-element'
import { useTranslation } from "react-i18next";

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

const MenuWrapper = (props, pageContext)  => {

    const { t } = useTranslation();
    return(
        <StyledMenuWrapper>
            <StyledMenuGrid>
                <div>
                    <LogoWrapper href="/">
                        <img src={Logo} alt="avs4you logo"/>
                    </LogoWrapper>
                </div>
                <MenuItemsWrapper>
                    {props.children}
                </MenuItemsWrapper>
                <MenuItem menuItemText={t("CurrentLanguage")}>
                    <MenuDropdown>
                        <DropdownElement path="/" headerText="English" />
                        <DropdownElement path="/ru" headerText="Русский" />        
                    </MenuDropdown>
                </MenuItem>
            </StyledMenuGrid>
        </StyledMenuWrapper>
    )
}

export default MenuWrapper;
