import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownElement from '../src/components/dropdown-element';
import Text from '../src/components/text';
import { withKnobs, number, color, select, boolean } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';


storiesOf('Components|DropdownElement', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
            <Section>
                <DropdownElement descriptionText="Easily edit and create videos" headerText="AVS Video Editor" visibly={boolean('visibly', true)}>

                </DropdownElement>
            </Section>
        );
    });