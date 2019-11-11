import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/common/logo.svg'
import LogoBlack from '../../images/common/logo-black.svg'
import BurgerButton from '../burger-button'
import LanguageSelector from '../language-selector'

const StyledMenuWrapper = styled.div`
    width: 100%;
    height:60px;
    background-color: #32393e;
`;

const CloseMobileMenu = styled.div`
    color: #333;
    font-size: 46px;
    line-height: 1em;
    font-weight: 300;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 11px;
    margin: 0;
    display: block;
    z-index: 30;
`;

const StyledMenuGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;
    max-width: 1300px;
    margin: auto;
    padding: 0 18px;
    box-sizing: border-box;
    height:100%;

    .mobileBlock{
        display:none;
    }

    @media (max-width: 1050px){
        .mobileBlock{
            display:block;
        }

        .desktopBlock{
            display:none;
        }
    }
`;

const MenuItemsWrapper = styled.div`
    width: auto;
    height: 100%;
    margin: auto;
    display: block;

    @media (max-width: 1050px) {
        padding: 0;
        background-color: #fff;
        min-height: 100px;
        height: 100vh;
        margin: 0;
        position: absolute;
        right: ${props => props.isOpen ? "0" : "-120vw"};
        top: 0;
        overflow: auto;
        text-align: center;
        font-size: 16px;
        transition: right .5s;
        width: 100%;
        z-index: 5;
        display: block;
        padding-top: 90px;
        box-sizing: border-box;
        overflow-x: hidden;
    }
`;

const LogoWrapper = styled.a`
    display: flex;
    height: 100%;

    &>img{
        margin:0;
    }
`;

const LogoWrapperMobile = styled.a`
    background-repeat: no-repeat;
    width: 70px;
    height: 41px;
    position: absolute;
    top: 17px;
    left: 10px;
    z-index: 30;
    display: block;

    &>img{
        margin:0;
    }
`;

class MenuWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            open: !this.state.open
        });
    }
    render(){

        return(
            <StyledMenuWrapper>
                <StyledMenuGrid>
                    <div>
                        <LogoWrapper href="/">
                            <img src={Logo} alt="avs4you logo"/>
                        </LogoWrapper>
                    </div>
                    <div className="mobileBlock"></div>
                    <MenuItemsWrapper isOpen={this.state.open}>
                        {this.props.children}
              
                        <CloseMobileMenu className="mobileBlock" onClick={this.toggleMenu}>×</CloseMobileMenu>
                        <LogoWrapperMobile className="mobileBlock" href="/">
                            <img src={LogoBlack} alt="avs4you logo"></img>
                        </LogoWrapperMobile>
                        <LanguageSelector pageContext={this.props.pageContext} className="mobileBlock" isMobile={this.props.isMobile} menuItemText={this.props.t("CurrentLanguage")} />
                    </MenuItemsWrapper>
                    <LanguageSelector pageContext={this.props.pageContext} className="desktopBlock" isMobile={this.props.isMobile} menuItemText={this.props.t("CurrentLanguage")} />        
                    <BurgerButton className="mobileBlock" func={this.toggleMenu}></BurgerButton>

                </StyledMenuGrid>
            </StyledMenuWrapper>
        )
    }
}

export default MenuWrapper;
