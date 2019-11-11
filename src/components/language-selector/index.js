import React from 'react';
import styled, {css} from 'styled-components';
import MenuItem from '../menu-item';
import DropdownElement from '../dropdown-element';
import MenuDropdown from "../menu-dropdown";
import Text from '../text';

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

    @media (max-width: 1050px){
        .mobileBlock{
            display:block;
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
                        <Text arrow arrowColor="#333" fontSize={16} fontWeight={600} textTransform="uppercase">{this.props.menuItemText}</Text>
                    </LanguageSelectorWrapperMobile>  

                    <MenuDropdown submenuOpen={this.state.open}>
                        <BackSubmenuButton submenuOpen={this.state.open} onClick={this.toggleSubmenu}>
                            <Text fontSize={14} fontWeight={500} textTransform="uppercase">Back</Text>
                        </BackSubmenuButton> 
                        <DropdownElement path="/" headerText="English" />
                        <DropdownElement path="/ru" headerText="Русский" />     
                    </MenuDropdown> 
                </div>
                
                <MenuItem className="desktopBlock" menuItemText={this.props.menuItemText}>
                    <DropdownElement path="/" headerText="English" />
                    <DropdownElement path="/ru" headerText="Русский" />        
                </MenuItem>
            </StyledLanguageSelector>
        )
    }
}

export default LanguageSelector;