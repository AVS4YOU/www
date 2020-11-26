import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../text';
import PropTypes from "prop-types";
import MenuDropdown from '../menu-dropdown'
import Link from '../link';

const MediaWidthStyle = css`
    padding: 0 10px;

    .arrowStyle:after{
        margin-left:5px;
        right: 20px;
    }

    .textStyles{
        font-weight: 500;
        font-size: 14px;
    }
    @media (max-width: 1280px){
        .textStyles{
            font-size: 13px;
        }
    }
    @media (max-width: 1195px){
        .textStyles{
            font-size: 11px;
        }
    }
    @media (max-width: 1124px){
        .textStyles{
            font-size: 9px;
        }
    }
`;

const MediaMobileStyle = css`
    height: auto;
    display: table;
    text-align: center;
    position: static; 
    cursor: pointer;
    background-color: rgba(253,160,78,0);
    transition: .2s linear;
    margin: auto;
    margin-bottom: 16px;
    
    .arrowStyle{
        padding-left:20px;

        &:after{
            border-top: 1px solid #333333;
            border-left: 1px solid #333333;
            transform: rotate(135deg);
            margin-top:0;
            right: 8px;
            top: 8px;
        }
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
        display: table;
        position: relative;
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
    height:60px;
    transition: .2s linear;

    .menuItemLink{
        text-decoration:none;
    }

    .arrowStyle{
        padding-right: 20px;
    }

    .arrowStyle:after{
        position: absolute;
        right: 31px;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    &:hover{
        background-color: rgba(253,160,78,.986);

        .arrowStyle:after{
            transform: rotate(45deg);
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

class MenuItem extends React.PureComponent  {

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
            {this.props.path 
                ?
                    <Link className="menuItemLink" to={this.props.path} langChange={this.props.langChange}>
                        <Text className={this.props.isDropdown ? "arrowStyle textStyles" : "textStyles"} 
                            arrow={this.props.isDropdown ? true : false}
                            arrowDeg={this.props.isDropdown && 225}
                            color="#ffffff"
                            fontSize={14} 
                            fontWeight={600} 
                            textTransform="uppercase">

                            {this.props.menuItemText}
                        </Text>
                    </Link>
                :
                    <Text className={this.props.isDropdown ? "arrowStyle textStyles" : "textStyles"} 
                        arrow={this.props.isDropdown ? true : false}
                        arrowDeg={this.props.isDropdown && 225}
                        color="#ffffff"
                        fontSize={14} 
                        fontWeight={600} 
                        textTransform="uppercase">

                        {this.props.menuItemText}
                    </Text>
                }
                {this.props.isDropdown 
                    ? 
                        <MenuDropdown col={this.props.col} submenuOpen={this.state.submenuOpen}>
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
