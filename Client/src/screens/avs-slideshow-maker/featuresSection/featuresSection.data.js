import React from "react";

import {
    FeaturesTitles,
    FeaturesVoiceover,
    FeaturesColorCorrection,
    FeaturesTransitions,
    FeaturesEffectsFilters
} from '../../../images/icons'

import img1x1 from '../../../images/avs-slideshow-maker/features-slide1.png'
import img1x2 from '../../../images/avs-slideshow-maker/features-slide1@2x.png'

import img2x1 from '../../../images/avs-slideshow-maker/features-slide2.png'
import img2x2 from '../../../images/avs-slideshow-maker/features-slide2@2x.png'

import img3x1 from '../../../images/avs-slideshow-maker/features-slide3.png'
import img3x2 from '../../../images/avs-slideshow-maker/features-slide3@2x.png'

import img4x1 from '../../../images/avs-slideshow-maker/features-slide4.png'
import img4x2 from '../../../images/avs-slideshow-maker/features-slide4@2x.png'

import img5x1 from '../../../images/avs-slideshow-maker/features-slide5.png'
import img5x2 from '../../../images/avs-slideshow-maker/features-slide5@2x.png'

const features = [
    {
        id: 1,
        icon: <FeaturesTitles />,
        img1x: img1x1,
        img2x: img1x2,
        title: 'Titles',
        desc: 'Choose from a wide range of text styles and themes. Customize text size, color, font to give it a perfect look.',
        width: '132px'
    },
    {
        id: 2,
        icon: <FeaturesVoiceover />,
        img1x: img2x1,
        img2x: img2x2,
        title: 'Voiceover',
        desc: 'Add background music from the library, your own audio file or record your voice directly in the slideshow maker. The audio editing tools help you easily tune the music to match the slideshow.',
        width: '112px'
    },
    {
        id: 3,
        icon: <FeaturesColorCorrection />,
        img1x: img3x1,
        img2x: img3x2,
        title: 'Color correction',
        desc: 'Enhance image quality adjusting brightness, saturation, contrast, gamma and hue or save your time by applying auto color correction.',
        width: '138px'
    },
    {
        id: 4,
        icon: <FeaturesTransitions />,
        img1x: img4x1,
        img2x: img4x2,
        title: 'Transitions',
        desc: 'Select from over 200+ transitions to blend slides smoothly.',
        width: '132px'
    },
    {
        id: 5,
        icon: <FeaturesEffectsFilters />,
        img1x: img5x1,
        img2x: img5x2,
        title: 'Effects & Filters',
        desc: 'Turn your photo collection into an engaging slideshow video with 300+ stunning effects. Experiment with such modern effects as tilt shift, picture-in-picture, sepia, old movie, etc. Highlight the most important elements with Pan & Zoom',
        width: '134px'
    },
]

export default features
