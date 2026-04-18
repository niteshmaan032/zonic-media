"use client";

import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";

type SharedLottiePlayerProps = {
  className: string;
  src: string;
  loop?: boolean;
  rootMargin?: string;
  speed?: number;
  threshold?: number;
};

function SharedLottiePlayer({
  className,
  src,
  loop = true,
  rootMargin = "200px 0px",
  speed = 1,
  threshold = 0.05,
}: SharedLottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<DotLottie | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        setIsInView(visible);

        if (visible) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  useEffect(() => {
    const animation = animationRef.current;

    if (!animation) {
      return;
    }

    animation.setLoop(loop);
    animation.setSpeed(speed);

    if (prefersReducedMotion || !isInView) {
      animation.pause();
      return;
    }

    animation.play();
  }, [isInView, loop, prefersReducedMotion, speed]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {shouldLoad ? (
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={false}
          dotLottieRefCallback={(instance) => {
            animationRef.current = instance;

            if (!instance) {
              return;
            }

            instance.setLoop(loop);
            instance.setSpeed(speed);

            if (prefersReducedMotion || !isInView) {
              instance.pause();
              return;
            }

            instance.play();
          }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
}

export default SharedLottiePlayer;
