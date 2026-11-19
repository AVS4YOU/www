// Installer links and the choice of the installer that suits the visitor's Windows.
//
// Every product ships three installers:
//   AVSxxx_x64.exe - Windows 7–11, 64-bit (the default on the site)
//   AVSxxx_x86.exe - Windows 7–11, 32-bit
//   AVSxxx.exe     - classic installer, older version for Windows XP / Vista

export const DISTR_URL = "https://downloads.avs4you.com/distributives/";

export const getDownloadLinks = (file) => ({
    x64: `${DISTR_URL}${file}_x64.exe`,
    x86: `${DISTR_URL}${file}_x86.exe`,
    xp: `${DISTR_URL}${file}.exe`,
});

const X64_LINK = /^(https?:\/\/downloads\.avs4you\.com\/distributives\/AVS[A-Za-z]+)_x64\.exe$/;

// The x64 link rewritten for the given installer type, or null if it is not an x64 installer link.
export const getInstallerLink = (href, type) => {
    const match = X64_LINK.exec(href || "");
    if (!match) return null;
    if (type === "x86") return `${match[1]}_x86.exe`;
    if (type === "xp") return `${match[1]}.exe`;
    return href;
};

const bitnessFromUserAgent = (ua) => (/Win64|WOW64|x64|amd64|arm64|aarch64/i.test(ua) ? "x64" : "x86");

// Resolves to "x64", "x86" or "xp". Anything that is not clearly 32-bit Windows or XP / Vista gets "x64".
export const detectInstallerType = (nav = typeof navigator !== "undefined" ? navigator : null) => {
    const ua = (nav && nav.userAgent) || "";
    if (!/Windows/i.test(ua)) return Promise.resolve("x64");
    // Windows NT 5.x is XP / Server 2003, 6.0 is Vista
    if (/Windows NT (5\.\d|6\.0)\b/.test(ua)) return Promise.resolve("xp");

    // Chromium freezes the user agent string to "Win64; x64", the real bitness comes from client hints
    const uaData = nav.userAgentData;
    if (uaData && typeof uaData.getHighEntropyValues === "function") {
        return uaData.getHighEntropyValues(["bitness"])
            .then((values) => (values && values.bitness === "32" ? "x86" : "x64"))
            .catch(() => bitnessFromUserAgent(ua));
    }
    return Promise.resolve(bitnessFromUserAgent(ua));
};
