import React from 'react';
import styled, {css} from 'styled-components';
import MenuItem from '../menu-item';
import DropdownElement from '../dropdown-element';
import MenuDropdown from "../menu-dropdown";
import Text from '../text';
import LangIconWhite from '../../images/common/languages/language-icon-white.svg';
import LangIconBlack from '../../images/common/languages/language-icon-black.svg';
import RuIcon from '../../images/common/languages/russian.svg';
import EnIcon from '../../images/common/languages/english.svg';
import Selected from '../../images/common/languages/selected.svg'

const BackSubmenuButtonShow = css`
    opacity: 1;
    transition: .2s linear;
    transition-delay: .5s;
`;

const BackSubmenuButton = styled.div`
    color: #333;
    position: absolute;
    top: 85px;
    left: 10px;
    z-index: 30;
    padding: 5px 15px;
    cursor: pointer;
    display: block;
    text-transform: uppercase;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: color 0 ease-in;
    transition: none;
    opacity: 0;

    ${props => props.submenuOpen && BackSubmenuButtonShow}

    &:after{
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-top: 1px solid #333;
        border-left: 1px solid #333;
        transition: .2s linear;
        transform: rotate(-45deg);
        position: absolute;
        left: 4px;
        top: 12px;
    }
`;

const StyledLanguageSelector = styled.div`

    .mobileBlock{
        display:none;
    }

    .langDropdown{

        margin-bottom: 11px;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;

        &:first-child {
            margin-top:12px;
        }

        &:before{
            content: '';
            height: 16px;
            width:16px;
            margin-right: 8px;
        }

        &.en:before {
            background-image: url(${EnIcon});
        }

        &.ru:before{
            background-image: url(${RuIcon});
        }
    }

    .languageSelector:before{
        content: '';
        background-image: url(${LangIconWhite});
        height: 16px;
        width:16px;
        margin-right: 8px;
    }

    @media (max-width: 1050px){
        .mobileBlock{
            display:block;
        }

        .langDropdown{
            &:before{
                content: none;
            }

            &.selected{

                position:relative;

                &:before{
                    content: '';
                    background-image: url(${Selected});
                    background-repeat:no-repeat;
                    height: 16px;
                    width:16px;
                    position:absolute;
                    left: 0px;
                    background-position: 50%;
                }
            }
        }

        .languageSelector{
            grid-template-columns: auto 1fr auto;

            &:before{
                background-image: url(${LangIconBlack});
            }
        }

        .desktopBlock{
            display:none;
        }
    }
`;

const LanguageSelectorWrapperMobile = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    width: max-content;
    display: block;
    cursor: pointer;
    background-color: #fff;
    margin: auto;
`;

class LanguageSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.toggleSubmenu = this.toggleSubmenu.bind(this);
    }

    toggleSubmenu() {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return(
            <StyledLanguageSelector {...this.props}>
                <div className="mobileBlock">
                    <LanguageSelectorWrapperMobile onClick={this.toggleSubmenu}>
                        <Text className="languageSelector" arrow arrowColor="#333" fontSize={14} fontWeight={600} textTransform="uppercase">{this.props.menuItemText}</Text>
                    </LanguageSelectorWrapperMobile>  

                    <MenuDropdown submenuOpen={this.state.open}>
                        <BackSubmenuButton submenuOpen={this.state.open} onClick={this.toggleSubmenu}>
                            <Text fontSize={14} fontWeight={500} textTransform="uppercase">Back</Text>
                        </BackSubmenuButton> 
                        
                        {this.props.pageContext.availableLocales.map((item) =>
                            this.props.pageContext.locale !== item.value 
                                ? <DropdownElement className={"langDropdown"} path={item.value === "en" ? "/" : "/" + item.value} headerText={item.text} />
                                : <DropdownElement className={"langDropdown selected"} headerTextClass="selected" path={item.value === "en" ? "/" : "/" + item.value} headerText={item.text} />
                        )}
                    </MenuDropdown> 
                </div>
                
                <MenuItem className="desktopBlock languageSelector" menuItemText={this.props.menuItemText}>
                    {this.props.pageContext.availableLocales.map((item) =>
                        this.props.pageContext.locale !== item.value && <DropdownElement className={"langDropdown " + item.value} path={item.value === "en" ? "/" : "/" + item.value} headerText={item.text} />
                    )}
                </MenuItem>
            </StyledLanguageSelector>
        )
    }
}

export default LanguageSelector;