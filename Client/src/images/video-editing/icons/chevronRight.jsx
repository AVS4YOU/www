import React from "react";

export const ChevronRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
            <g filter="url(#filter0_d_40_651)">
                <circle cx="39" cy="35" r="19" fill="white"/>
            </g>
            <path d="M37 40L43 34.5L37 29" stroke="#32393E"/>
            <defs>
                <filter id="filter0_d_40_651" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_651"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_651" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
