"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

import localSeoBannerAnimation from "@/shared/lottie-files/local-seo-2.json";

type LottieAnimationInstance = {
  destroy: () => void;
  setSpeed?: (speed: number) => void;
};

type LottiePlayer = {
  loadAnimation: (config: {
    container: HTMLElement;
    renderer: "svg" | "canvas" | "html";
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
  }) => LottieAnimationInstance;
};

declare global {
  interface Window {
    lottie?: LottiePlayer;
  }
}

function LocalSeoSec8BannerAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScriptReady, setIsScriptReady] = useState(
    () => typeof window !== "undefined" && Boolean(window.lottie)
  );

  useEffect(() => {
    if (!isScriptReady || !containerRef.current || !window.lottie) {
      return;
    }

    const animation = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      animationData: localSeoBannerAnimation,
    });

    animation.setSpeed?.(1);

    return () => {
      animation.destroy();
    };
  }, [isScriptReady]);

  return (
    <>
      <Script
        id="bodymovin-script"
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptReady(true)}
        onReady={() => setIsScriptReady(true)}
      />

      <div
        ref={containerRef}
        className="local-seo-home-sec-8-banner-lottie"
        aria-hidden="true"
      />
    </>
  );
}

export default LocalSeoSec8BannerAnimation;
