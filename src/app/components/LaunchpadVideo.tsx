"use client";

import { useState } from "react";

const VIDEO_ID = "8XloRxwawiw";

export default function LaunchpadVideo() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video-thumb">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-thumb"
      onClick={() => setPlaying(true)}
      aria-label="Play the Zonic Launchpad video"
    >
      <div className="video-thumb-inner">
        <span className="video-tag">Zonic Launchpad</span>
        <div className="video-steps">
          <span>Logo</span>
          <span>Website</span>
          <span>Google setup</span>
          <span>Social</span>
          <span>Leads</span>
        </div>
        <div className="video-play">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="video-cap">
          How we launch a business online — start to finish
        </div>
      </div>
    </button>
  );
}
