import React from "react";

export const SliderLeftArrow = (props) => {
    if(props.isDisabled) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={39}
                height={39}
                viewBox="0 0 38 39"
                fill="none"
                {...props}
            >
                <circle
                    cx={18.9992}
                    cy={19.1929}
                    r={18.5}
                    fill="#32393E"
                    fillOpacity={0.1}
                    stroke="#666"
                />
                <path d="M21 13.193l-6 5.5 6 5.5" stroke="#666" />
            </svg>
        )
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={39}
            height={39}
            viewBox="0 0 38 39"
            fill="none"
            {...props}
        >
            <circle
                cx={18.9992}
                cy={19.1929}
                r={18.5}
                fill="#FFF"
            />
            <path d="M21 13.193l-6 5.5 6 5.5" stroke="#666" />
        </svg>
    )
}
