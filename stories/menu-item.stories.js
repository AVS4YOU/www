import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import DropdownElement from '../src/components/dropdown-element';
import MenuDropdown from '../src/components/menu-dropdown'
import MenuItem from '../src/components/menu-item';
import { withKnobs, color} from '@storybook/addon-knobs/react';

const StyledContainer = styled.div`
    padding: 16px;
    height:50px;
`;

storiesOf('Components|menu-item', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
            <StyledContainer>
                <MenuItem menuItemText="Video software" backgroundColor={color('backgroundColor', '#32393e')}>
                    <MenuDropdown>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                    </MenuDropdown>
                </MenuItem>
            </StyledContainer>
        );
    });