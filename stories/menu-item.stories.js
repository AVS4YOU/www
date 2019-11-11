import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from '../src/components/menu-item';
import MenuDropdown from '../src/components/menu-dropdown';
import DropdownElement from '../src/components/dropdown-element';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';
import styled, {css} from 'styled-components';

const HoveredStyles = css`
    &>div{
        background-color: rgba(253,160,78,.986);

        &>div {
            opacity: 1;
            visibility: visible;
        }

        &:after{
            transform: rotate(45deg);
            top: 28px;
        }
    }
`;

const StorybookWrapper = styled.div`
    height: 60px;
    padding:0;
    background-color: #32393e;

    ${props => props.hovered ? HoveredStyles : ""}

`;

storiesOf('Components|Menu Item', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
            <StorybookWrapper hovered={boolean("hovered" , true)}>
                <MenuItem menuItemText={text("menuItemName", "Free software")}>
                    <DropdownElement path="/" headerText={text("headerText", "AVS Video Editor")} descriptionText={text("descriptionText", "Easily edit and create videos")}/>
                </MenuItem>
                <MenuItem menuItemText={text("menuItemName2", "Video software")}></MenuItem>
            </StorybookWrapper>
        ); 
    });