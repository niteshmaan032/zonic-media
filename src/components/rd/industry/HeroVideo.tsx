"use client";

/* Background video for the industry video hero (travel page, 26 Oct 2026).
   Muted, inline, looping. It starts only after hydration (preload="none"),
   so the poster is the first paint and the video never blocks it. It
   pauses while off-screen, stays on the poster for prefers-reduced-motion,
   and a visible button lets anyone pause it (WCAG 2.2.2). Phones get the
   smaller file through the <source media> query. */

import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

export function HeroVideo({
  src,
  srcSmall,
  poster,
}: {
  src: string;
  srcSmall?: string;
  poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !userPaused.current) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        className="tw:absolute tw:inset-0 tw:-z-2 tw:size-full tw:object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {srcSmall ? (
          <source src={srcSmall} type="video/mp4" media="(max-width: 767px)" />
        ) : null}
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? "Pause background video" : "Play background video"
        }
        className="tw:absolute tw:right-5 tw:bottom-5 tw:z-2 tw:grid tw:size-11 tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-0 tw:bg-white/15 tw:text-[17px] tw:text-white tw:ring-1 tw:ring-white/30 tw:backdrop-blur-md tw:transition tw:hover:bg-white/25 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-white tw:max-bssm:right-3 tw:max-bssm:bottom-3"
      >
        {playing ? (
          <FiPause aria-hidden="true" />
        ) : (
          <FiPlay aria-hidden="true" />
        )}
      </button>
    </>
  );
}
