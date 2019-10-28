import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownElement from '../src/components/dropdown-element';
import MenuDropdown from '../src/components/menu-dropdown'
import MenuItem from '../src/components/menu-item';
import { withKnobs, number, color, select, boolean } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';


storiesOf('Components|menu-item', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
            <Section>
                <MenuItem menuItemText="Video software" backgroundColor={color('backgroundColor', '#32393e')}>
                    <MenuDropdown>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                        <DropdownElement headerText="AVS Video Editor" descriptionText="Easily edit and create videos"/>
                    </MenuDropdown>
                </MenuItem>
            </Section>
        );
    });