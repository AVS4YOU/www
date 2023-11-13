import React from "react";

import {
    Usage1,
    Usage2,
    Usage3,
} from '../../../images/avs-video-cutter/illustration'


const usage = [
    {
        id: 1,
        title: 'Prepare your footage for further editing',
        desc: `Once all unnecessary parts are removed from video, 
        it is time to make additional edits. Let your video shine with color grading, 
        300+ modern effects and transitions (tilt shift, picture-in-picture, sepia, old movie, etc.), 
        overlays and a fresh background.`,
        illustration: <Usage1 />,
    },
    {
        id: 2,
        title: 'Cut videos for social platforms',
        desc: `Shorten you video in a few clicks so that it fits multiple social media platforms. 
        Save time by creating as many clips as you want to post them across all social media channels. 
        Gain more followers each day!`,
        illustration: <Usage2 />,
    },
    {
        id: 3,
        title: 'Prepare videos for easier sharing',
        desc: `Cut video files down to your desired length and duration which will help you send videos easier without hitting the attachment video file limit.`,
        illustration: <Usage3 />,
    },
]

export default usage;
