"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

import emailAnimation from "@/shared/lottie-files/Email.json";

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

export default function ThankYouEmailAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    if (!isScriptReady || !containerRef.current || !window.lottie) {
      return;
    }

    const animation = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: emailAnimation,
    });

    animation.setSpeed?.(1);

    return () => {
      animation.destroy();
    };
  }, [isScriptReady]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
        strategy="afterInteractive"
        onReady={() => setIsScriptReady(true)}
      />

      <div ref={containerRef} className="thank-lottie" aria-hidden="true" />
    </>
  );
}
