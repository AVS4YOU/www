import React from 'react';
import styled, {css} from 'styled-components';
import MenuItem from '../menu-item';
import DropdownElement from '../dropdown-element';
import MenuDropdown from "../menu-dropdown";
import Text from '../text';
import LangIconWhite from '../../images/common/languages/language-icon-white.svg';
import LangIconBlack from '../../images/common/languages/language-icon-black.svg';
import Selected from '../../images/common/languages/selected.svg';
import {PageContext} from '../../context/page-context';

import RuIcon from '../../images/common/languages/russian.svg';
import KrIcon from '../../images/common/languages/korea-flag.svg';
import PlIcon from '../../images/common/languages/polish-flag.svg';
import DkIcon from '../../images/common/languages/danish.svg';
import NlIcon from '../../images/common/languages/netherlands.svg';
import EnIcon from '../../images/common/languages/english.svg';
import FrIcon from '../../images/common/languages/france.svg';
import DeIcon from '../../images/common/languages/germany.svg';
import EsIcon from '../../images/common/languages/spain.svg';
import ItIcon from '../../images/common/languages/italy.svg';
import JpIcon from '../../images/common/languages/japan.svg';
import PtIcon from '../../images/common/languages/portugal-flag.svg';
import ZhIcon from '../../images/common/languages/china.svg';

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
  &:after {
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
  .mobileBlock {
    display: none;
  }

  .langDropdown {
    margin-bottom: 12px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    span {
      font-size: 14px;
    }

    &:before {
      content: '';
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }

    &.en:before {
      background-image: url(${EnIcon});
    }

    &.fr:before {
      background-image: url(${FrIcon});
    }

    &.de:before {
      background-image: url(${DeIcon});
    }

    &.es:before {
      background-image: url(${EsIcon});
    }

    &.it:before {
      background-image: url(${ItIcon});
    }

    &.jp:before {
      background-image: url(${JpIcon});
    }

    &.ru:before {
      background-image: url(${RuIcon});
    }

    &.pl:before {
      background-image: url(${PlIcon});
    }

    &.ko:before {
      background-image: url(${KrIcon});
    }

    &.da:before {
      background-image: url(${DkIcon});
    }

    &.nl:before {
      background-image: url(${NlIcon});
    }

    &.pt:before {
      background-image: url(${PtIcon});
    }

    &.zh:before {
      background-image: url(${ZhIcon});
    }
  }

  .languageSelector:before {
    content: '';
    background-image: url(${LangIconWhite});
    height: 16px;
    width: 16px;
    margin-right: 8px;
  }

  @media (max-width: 1050px) {
    .mobileBlock {
      display: block;
    }

    .langDropdown {
      &:before {
        content: none;
      }

      &.selected {
        position: relative;

        &:before {
          content: '';
          background-image: url(${Selected});
          background-repeat: no-repeat;
          height: 16px;
          width: 16px;
          position: absolute;
          left: 0px;
          background-position: 50%;
        }
      }
    }

    .languageSelector {
      grid-template-columns: auto 1fr auto;

      &:before {
        background-image: url(${LangIconBlack});
      }
    }

    .desktopBlock {
      display: none;
    }
  }
`;

const LanguageSelectorWrapperMobile = styled.div`
  position: absolute;
  /*bottom: 0;*/
  left: 0;
  right: 0;
  padding: 20px;
  width: max-content;
  display: block;
  cursor: pointer;
  background-color: #fff;
  margin: auto;
`;

const availableLocales = [
    {value: "en", text: "English"},
    {value: "fr", text: "Français"},
    {value: "de", text: "Deutsch"},
    {value: "es", text: "Español"},
    {value: "it", text: "Italiano"},
    {value: "jp", text: "日本語"},
    {value: "ru", text: "Русский"},
    {value: "pl", text: "Polski"},
    {value: "ko", text: "한국어"},
    {value: "da", text: "Dansk"},
    {value: "nl", text: "Nederland"},
    {value: "pt", text: "Português"},
];

const pagesForChinese = [
    'register.aspx',
    'avs-video-editor.aspx'
]

class LanguageSelector extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            availableLocales: availableLocales
        };
        this.toggleSubmenu = this.toggleSubmenu.bind(this);
    }

    toggleSubmenu() {
        this.setState({
            open: !this.state.open
        });
    }

    isPageForChinese(pathName) {
        const pageForChinese = pagesForChinese.find((page) => {
            return pathName.includes(page);
        });
        return pageForChinese
    }

    hasChinese(arr) {
        return arr.find((item) => {
            return item.value === 'zh';
        })
    }

    addChinese(arr) {
        const newArr = [...arr]
        newArr.push({value: "zh", text: "中文"});
        return newArr;
    };

    componentDidMount() {
        const pathName = window.location.pathname;
        if (this.isPageForChinese(pathName) && !this.hasChinese(availableLocales)) {
            const updatedAvailableLocales = this.addChinese(availableLocales);
            this.setState({
                availableLocales: updatedAvailableLocales
            })
        }
    }

    render() {
        return (
            <PageContext.Consumer>
                {(pageContext) => (
                    <StyledLanguageSelector {...this.props}>
                        <div className="mobileBlock">
                            <LanguageSelectorWrapperMobile onClick={this.toggleSubmenu}>
                                <Text className="languageSelector" arrow arrowColor="#333" fontSize={14}
                                      fontWeight={600} textTransform="uppercase">{this.props.menuItemText}</Text>
                            </LanguageSelectorWrapperMobile>
                            <MenuDropdown submenuOpen={this.state.open}>
                                <BackSubmenuButton submenuOpen={this.state.open} onClick={this.toggleSubmenu}>
                                    <Text fontSize={14} fontWeight={500} textTransform="uppercase">Back</Text>
                                </BackSubmenuButton>
                                {this.state.availableLocales.map((item) => {
                                        return (
                                            this.props.locale !== item.value
                                                ? <DropdownElement
                                                    id={item.value + "_lang-selector"}
                                                    key={item.value}
                                                    className={"langDropdown"}
                                                    path={pageContext && pageContext.originalPath
                                                        ? item.value === "en" && "" + (pageContext.originalPath === "/" ? "/" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                                        : item.value === "en" && ""}
                                                    href={pageContext && pageContext.originalPath
                                                        ? item.value !== "en" && "/" + item.value + (pageContext.originalPath === "/" ? "" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                                        : item.value !== "en" && "" + item.value}
                                                    headerText={item.text}
                                                    langChange={item.value === "en"}
                                                />

                                                : <DropdownElement
                                                    id={item.value + "_lang-selector"}
                                                    key={item.value}
                                                    className={"langDropdown selected"}
                                                    headerTextClass="selected"
                                                    path={pageContext && pageContext.originalPath
                                                        ? item.value === "en" && "" + (pageContext.originalPath === "/" ? "/" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                                        : item.value === "en" && ""}
                                                    href={pageContext && pageContext.originalPath
                                                        ? item.value !== "en" && "/" + item.value + (pageContext.originalPath === "/" ? "" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                                        : item.value !== "en" && "" + item.value}
                                                    langChange={item.value === "en"}
                                                    headerText={item.text}
                                                />
                                        )
                                    }
                                )}
                            </MenuDropdown>
                        </div>
                        <MenuItem className="desktopBlock languageSelector" menuItemText={this.props.menuItemText}>
                            {this.state.availableLocales.map((item) =>

                                this.props.locale !== item.value &&

                                <DropdownElement
                                    id={item.value + "_lang-selector"}
                                    key={item.value}
                                    className={"langDropdown " + item.value}
                                    path={pageContext && pageContext.originalPath
                                        ? item.value === "en" && "" + (pageContext.originalPath === "/" ? "/" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                        : item.value === "en" && ""}
                                    href={
                                        pageContext && pageContext.originalPath
                                            ? item.value !== "en" && "/" + item.value + (pageContext.originalPath === "/" ? "" : pageContext.originalPath.replace(/(\/)?$/, ''))
                                            : item.value !== "en" && "" + item.value
                                    }
                                    langChange={item.value === "en"}
                                    headerText={item.text}
                                />
                            )}

                        </MenuItem>
                    </StyledLanguageSelector>
                )}
            </PageContext.Consumer>
        )
    }
}

export default LanguageSelector;
