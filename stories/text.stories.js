import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../src/components/text';
import { withKnobs, number, color, select } from '@storybook/addon-knobs/react';
import Section from '../.storybook/decorators/section';

const fontWeights = [300,400,500,600,700,800];
const textTransforms = ['none','uppercase', 'lowercase'];
const displays = ['block', 'inline-block'];
const tagsList = ['span','p','h1','h2'];

storiesOf('Components|Text', module)
    .addDecorator(withKnobs)
    .add('base', () => {

        return(
        <Section>
            <Text fontSize={number('FontSize', 18)} 
                color={color('Color', '#333333')} 
                fontWeight={select('FontWeight', fontWeights, 500)} 
                textTransform={select('TextTransform', textTransforms, 'none')}
                display={select('Display', displays)}
                as={select('As', tagsList)}
            >
                Avs4you — Ultimate multimedia editing family
            </Text>
        </Section>

        ); 
    });
 