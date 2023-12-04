import React from "react";

import {
    FeaturesTitles,
    FeaturesVoiceover,
    FeaturesColorCorrection,
    FeaturesEffectsFilters,
    FeaturesGPUAcceleration,
    FeaturesVideoStabilization
} from '../../../images/icons'

import img1x1 from '../../../images/avs-video-maker/make-video-slide1.png'
import img1x2 from '../../../images/avs-video-maker/make-video-slide1@2x.png'

import img2x1 from '../../../images/avs-video-maker/make-video-slide2.png'
import img2x2 from '../../../images/avs-video-maker/make-video-slide2@2x.png'

import img3x1 from '../../../images/avs-video-maker/make-video-slide3.png'
import img3x2 from '../../../images/avs-video-maker/make-video-slide3@2x.png'

import img4x1 from '../../../images/avs-video-maker/make-video-slide4.png'
import img4x2 from '../../../images/avs-video-maker/make-video-slide4@2x.png'

import img5x1 from '../../../images/avs-video-maker/make-video-slide5.png'
import img5x2 from '../../../images/avs-video-maker/make-video-slide5@2x.png'

import img6x1 from '../../../images/avs-video-maker/make-video-slide6.png'
import img6x2 from '../../../images/avs-video-maker/make-video-slide6@2x.png'

const features = [
    {
        id: 5,
        icon: <FeaturesEffectsFilters />,
        img1x: img1x1,
        img2x: img1x2,
        title: 'Effects & Filters',
        desc: 'Experiment with over 300 modern effects among which they are tilt shift, picture-in-picture, sepia, old movie, chroma key, pan & zoom, etc.',
        width: '134px'
    },
    {
        id: 3,
        icon: <FeaturesColorCorrection />,
        img1x: img2x1,
        img2x: img2x2,
        title: 'Color correction',
        desc: 'Enhance image quality adjusting brightness, saturation, contrast, gamma and hue or save your time by applying auto color correction.',
        width: '138px'
    },
    {
        id: 2,
        icon: <FeaturesVoiceover />,
        img1x: img3x1,
        img2x: img3x2,
        title: 'Voiceover',
        desc: 'Add background music from the library, your own audio file or record your voice directly in the video maker.',
        width: '112px'
    },
    {
        id: 1,
        icon: <FeaturesTitles />,
        img1x: img4x1,
        img2x: img4x2,
        title: 'Titles',
        desc: 'Choose from a wide range of text styles and themes. Customize text size, color, font to give it a perfect look.',
        width: '132px'
    },
    {
        id: 4,
        icon: <FeaturesVideoStabilization />,
        img1x: img5x1,
        img2x: img5x2,
        title: 'Video Stabilization',
        desc: 'With a single click transform shaky video into quality footage eliminating distortions and blurry flaws within seconds.',
        width: '132px'
    },
    {
        id: 6,
        icon: <FeaturesGPUAcceleration />,
        img1x: img6x1,
        img2x: img6x2,
        title: 'GPU Acceleration',
        desc: 'Edit and process video faster enabling GPU acceleration for video cards Intel HD Graphics or NVIDIA® GeForce®.',
        width: '132px'
    }
]

export default features
