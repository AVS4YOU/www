// version / release* / size* describe the new x64 and x86 installers (AVSxxx_x64.exe, AVSxxx_x86.exe)
// for Windows 7–11. size is the x64 size: it is shown next to the main download buttons.
// *XP fields describe the classic installers (AVSxxx.exe) for Windows XP / Vista.
// Sizes are in MB (bytes / 1048576).

let VideoEditor = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "229.42",
    size64: "229.42",
    size32: "205.63",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "204.81",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let VideoReMaker = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "124.90",
    size64: "124.90",
    size32: "93.54",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "92.56",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let VideoConverter = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "128.65",
    size64: "128.65",
    size32: "130.18",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "119.15",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let MediaPlayer = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "170.74",
    size64: "170.74",
    size32: "146.78",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "154.58",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let AudioEditor = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "100.00",
    size64: "100.00",
    size32: "94.04",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "83.22",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let AudioConverter = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "98.37",
    size64: "98.37",
    size32: "97.44",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "87.27",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let AVSImageConverter = {
    version: "26.1.1.296",
    releaseDD: "23",
    releaseMM: "11",
    releaseYYYY: "2026",
    size: "64.01",
    size64: "64.01",
    size32: "61.51",
    versionXP: "26.0.3.6",
    releaseXPDD: "03",
    releaseXPMM: "11",
    releaseXPYYYY: "2026",
    sizeXP: "56.87",
    platforms: "Windows 11, 10, 8.1, 8, 7 (no Mac OS/ Linux support)"
};

let InstallPack = {
    size: "329.18",
    size64: "329.18",
    size32: "320.98",
    versionXP: "26.0.3.6",
    sizeXP: "312.10"
};

// "26.1.1.293" -> "26.1": major.minor version for headings such as "AVS Video Editor 26.1".
const shortVersion = (version) => version.split(".").slice(0, 2).join(".");

export {shortVersion, InstallPack, VideoEditor, VideoReMaker, VideoConverter, MediaPlayer, AudioEditor, AudioConverter, AVSImageConverter};
