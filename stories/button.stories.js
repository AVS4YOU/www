import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/button';
import { withKnobs, number, color, select, text, boolean } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';

const colors = ['blue', 'orange'];

storiesOf('Components|Button', module)
    .addDecorator(withKnobs)
    .add('base', () => {
        return(
            <Section>
                <Button 
                    backgroundColor={select("backgroundColor",colors, "blue")}
                    color={text("color", "#ffffff")}
                    background={boolean("background", true)}
                    padding={text("padding", "20px 25px")}
                    href={text("href", "https://avs4you.com")}
                >
                    Button text
                </Button>
            </Section>
        ); 
    });
 