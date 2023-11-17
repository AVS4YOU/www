import React from "react";
import {Standard, Device, Disc, Screen} from '../../../images/icons'

const specs = [
    {
        id: 1,
        title: "Standard/HDV video file",
        desc: "MP4, AVI, DVD, MOV, MPEG, WMV, MKV, M2TS, etc.",
        icon: <Standard/>
    },
    {
        id: 2,
        title: "Save to Disc",
        desc: "Apple iPhone, iPad, Samsung, Sony PSP, BlackBerry",
        icon: <Device/>
    },
    {
        id: 3,
        title: "Save to Disc",
        desc: "Create a DVD-video or Blu-ray disc with a menu",
        icon: <Disc/>
    },
    {
        id: 4,
        title: "Save for Web",
        desc: "Upload to YouTube, Facebook, Telly, Dropbox",
        icon: <Screen/>
    },
]

export default specs
