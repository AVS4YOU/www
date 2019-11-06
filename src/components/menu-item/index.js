import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";
import MenuDropdown from '../menu-dropdown'

const MediaWidthStyle = css`
    padding: 0 18px;

    &:after{
        right:5px;
    }
`;

const MediaMobileStyle = css`
    height: auto;
    width: max-content;
    text-align: center;
    position: static; 
    display: block;
    cursor: pointer;
    background-color: rgba(253,160,78,0);
    transition: .2s linear;
    margin: auto;
    margin-bottom: 16px;

    &:hover{
        background-color: transparent;
    }
`;

const DropdownArrowStyle = css`
    &:after{
        display: block;
        content: '';
        width: 4px;
        height: 4px;
        border-top: 1px solid
        #fff;
        border-left: 1px solid
        #fff;
        transition: .2s linear;
        transform: rotate(-135deg);
        position: absolute;
        right: 10px;
        top: 25px;
    }
`;

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

const StyledMenuItem = styled.div`
    background-color: rgba(253,160,78,0);
    padding: 0 24px;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    align-items: center;
    height:100%;
    transition: .2s linear;

    &:hover{
        background-color: rgba(253,160,78,.986);

        &:after{
            transform: rotate(45deg);
            top: 28px;
        }
    }

    &>div{
        min-width: 100%;
    }

    &:hover>div {
        opacity: 1;
        visibility: visible;
    }

    ${props => props.isDropdown && DropdownArrowStyle}

    @media (max-width: 1400px) {
        ${MediaWidthStyle}
    }

    @media (max-width: 1050px) {
        ${MediaMobileStyle}
    }
`;

class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {submenuOpen: false, width: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggleSubmenu = this.toggleSubmenu.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    toggleSubmenu(){
        this.setState({
            submenuOpen: !this.state.submenuOpen
        });
    }

    render(){

        const isSmallScreen = this.state.width < 1400;
        const isMobile = this.state.width < 1050;

        return(
            <StyledMenuItem onClick={isMobile ? this.toggleSubmenu : undefined } {...this.props}> 
                <Text 
                    color={isMobile ? "#333333": "#ffffff"} 
                    fontSize={isMobile ? 16 : 14} 
                    fontWeight={isSmallScreen 
                        ? isMobile 
                            ? 600
                            : 500 
                        : 600} 
                    textTransform="uppercase">

                    {this.props.menuItemText}
                </Text>
                {this.props.isDropdown 
                    ? 
                        <MenuDropdown submenuOpen={this.state.submenuOpen}>
                            {isMobile && 
                                <BackSubmenuButton submenuOpen={this.state.submenuOpen} onClick={this.toggleSubmenu}>
                                    <Text fontSize={14} fontWeight={500} textTransform="uppercase">Back</Text>
                                </BackSubmenuButton> 
                            }
                            {this.props.children}
                        </MenuDropdown> 
                    : 
                        this.props.children}
            </StyledMenuItem>
        )
    }
}

MenuItem.propTypes = {
    isDropdown: PropTypes.bool,
    isLangSelector: PropTypes.bool
}

MenuItem.defaultProps = {
    isDropdown: true,
    isLangSelector: false
}

export default MenuItem;