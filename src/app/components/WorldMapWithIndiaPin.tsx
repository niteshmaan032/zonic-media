"use client";

import React from "react";

type Props = {
  /** Adjust overall map width (SVG scales responsively too). */
  width?: number | string;
  /** Show a subtle hover tooltip on the pin */
  showTooltip?: boolean;
};

/**
 * WorldMapWithIndiaPin
 * - Renders a lightweight world map SVG (simplified silhouette)
 * - Adds a pin near India + India flag badge above it
 *
 * Note: This is a simplified map silhouette for UI use, not a precise GIS projection.
 */
export default function WorldMapWithIndiaPin({
  width = "100%",
  showTooltip = true,
}: Props) {
  // SVG viewBox coordinates for our simplified world shape
  // Pin position is in the same coordinate system.
  const pin = { x: 690, y: 255 }; // tweak these if you swap the map path

  return (
    <div style={{ width }} className="position-relative">
      <svg
        viewBox="0 0 1000 520"
        role="img"
        aria-label="World map with India pinned"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Background */}
        <rect x="0" y="0" width="1000" height="520" fill="#f6f7f9" />

        {/* Map silhouette (simplified) */}
        <g opacity="0.98">
          <path
            d="M95 205c20-25 58-37 92-46 44-12 70-18 110-6 18 6 28 18 40 30 18 18 48 16 72 14 34-3 62-18 92-33 27-13 52-26 84-29 28-2 52 10 78 18 21 7 45 8 67 6 39-4 74-21 110-30 36-9 80-10 113 8 30 17 37 46 34 74-2 19-10 36-22 52-14 19-30 34-40 57-9 22-4 48-12 70-10 28-44 36-72 35-30-1-62-10-92-6-36 5-50 32-84 43-34 11-70 5-103-4-34-9-64-24-100-25-38-1-74 18-112 26-46 10-96 4-139-16-30-14-45-34-73-50-30-16-76-12-110-23-27-9-44-30-46-54-2-26 7-52 24-73 11-14 25-26 35-41 12-18 14-40 30-60z"
            fill="#dfe7ef"
            stroke="#c7d3df"
            strokeWidth="2"
          />

          {/* A few “continent hints” blobs to add visual interest */}
          <path
            d="M210 170c20-18 55-28 83-20 24 7 40 26 34 45-7 23-47 36-78 36-30 0-62-14-60-34 1-10 9-19 21-27z"
            fill="#d2dde8"
          />
          <path
            d="M520 130c25-15 67-18 92-1 20 14 18 36-6 49-25 13-63 12-88-2-24-13-23-34 2-46z"
            fill="#d2dde8"
          />
          <path
            d="M760 165c24-18 62-20 87-5 22 13 20 33-3 46-24 14-61 15-86 2-25-13-26-31 2-43z"
            fill="#d2dde8"
          />
        </g>

        {/* INDIA PIN GROUP */}
        <g
          className="india-pin"
          style={{ cursor: "pointer" }}
          aria-label="India"
        >
          {/* Pin stem + drop */}
          <path
            d={`M ${pin.x} ${pin.y}
               c -18 0 -32 14 -32 32
               c 0 26 32 66 32 66
               s 32 -40 32 -66
               c 0 -18 -14 -32 -32 -32 z`}
            fill="#e53935"
            stroke="#b71c1c"
            strokeWidth="2"
          />
          {/* Pin inner circle */}
          <circle
            cx={pin.x}
            cy={pin.y + 28}
            r="11"
            fill="#fff"
            stroke="#b71c1c"
            strokeWidth="2"
          />

          {/* Flag badge above pin */}
          <g transform={`translate(${pin.x - 34}, ${pin.y - 44})`}>
            {/* badge shadow */}
            <rect
              x="2"
              y="2"
              width="68"
              height="42"
              rx="10"
              fill="rgba(0,0,0,0.12)"
            />
            {/* badge */}
            <rect
              x="0"
              y="0"
              width="68"
              height="42"
              rx="10"
              fill="#ffffff"
              stroke="#cfd8dc"
            />

            {/* India flag (simplified) */}
            <clipPath id="flagClip">
              <rect x="8" y="8" width="52" height="26" rx="4" />
            </clipPath>
            <g clipPath="url(#flagClip)">
              <rect x="8" y="8" width="52" height="26" fill="#fff" />
              <rect x="8" y="8" width="52" height="8.66" fill="#FF9933" />
              <rect x="8" y="25.34" width="52" height="8.66" fill="#138808" />
              {/* Ashoka Chakra */}
              <circle
                cx="34"
                cy="21"
                r="4.6"
                fill="none"
                stroke="#000080"
                strokeWidth="1.4"
              />
              <circle cx="34" cy="21" r="1" fill="#000080" />
            </g>

            {/* label */}
            <text
              x="34"
              y="39"
              textAnchor="middle"
              fontSize="10"
              fill="#37474f"
              fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial"
            >
              India
            </text>
          </g>

          {/* Optional tooltip */}
          {showTooltip ? <title>India</title> : null}
        </g>
      </svg>

      {/* Optional: quick CSS hover (works even without Bootstrap) */}
      <style jsx>{`
        .india-pin:hover {
          filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.18));
          transform-origin: ${pin.x}px ${pin.y}px;
        }
      `}</style>
    </div>
  );
}
