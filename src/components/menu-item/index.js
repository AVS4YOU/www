import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";
import MenuDropdown from '../menu-dropdown'

const MediaWidthStyle = css`
    padding: 0 18px;

    .arrowStyle:after{
        margin-left:5px;
    }

    .textStyles{
        font-weight: 500;
        font-size: 14px;
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
    
    .arrowStyle:after{
        border-top: 1px solid #333333;
        border-left: 1px solid #333333;
        transform: rotate(135deg);
        margin-top:0;
    }

    &:hover{
        background-color: transparent;

        .arrowStyle:after{
            transform: rotate(135deg);
        }
    }

    .textStyles{
        color:#333333;
        font-weight: 600;
        font-size: 16px;
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
    display: none;
    text-transform: uppercase;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: color 0 ease-in;
    transition: none;
    opacity: 0;

    @media (max-width: 1050px) {
        display: block;
    }

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

    .arrowStyle:after{
        margin-top:-4px;
        margin-left: 8px;
    }

    &:hover{
        background-color: rgba(253,160,78,.986);

        .arrowStyle:after{
            transform: rotate(45deg);
            margin-top:0;
        }
    }

    &>div{
        min-width: 100%;
    }

    &:hover>div {
        opacity: 1;
        visibility: visible;
    }

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
        this.toggleSubmenu = this.toggleSubmenu.bind(this);
        this.state = {
            submenuOpen: false
        }
    }

    toggleSubmenu(){
        this.setState({
            submenuOpen: !this.state.submenuOpen
        });
    }

    render(){
        return(
            <StyledMenuItem onClick={this.toggleSubmenu} {...this.props}> 
                <Text className={this.props.isDropdown ? "arrowStyle textStyles" : "textStyles"} 
                    arrow={this.props.isDropdown ? true : false}
                    arrowDeg={this.props.isDropdown && 225}
                    color="#ffffff"
                    fontSize={14} 
                    fontWeight={600} 
                    textTransform="uppercase">

                    {this.props.menuItemText}
                </Text>
                {this.props.isDropdown 
                    ? 
                        <MenuDropdown submenuOpen={this.state.submenuOpen}>
                            {this.props.children}
                            <BackSubmenuButton submenuOpen={this.state.submenuOpen} onClick={this.toggleSubmenu}>
                                <Text fontSize={14} fontWeight={500} textTransform="uppercase">Back</Text>
                            </BackSubmenuButton> 
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
