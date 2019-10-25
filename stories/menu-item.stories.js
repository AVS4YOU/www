import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItem from '../src/components/menu-item';
import Text from '../src/components/text';
import { withKnobs, number, color, select, boolean } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';


storiesOf('Components|MenuItem', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
            <Section>
                <MenuItem text="test" visibly={boolean('visibly', true)}>

                </MenuItem>
            </Section>
        );
    });