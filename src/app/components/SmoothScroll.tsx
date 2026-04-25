"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __appLenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    window.__appLenis = lenis;
    window.dispatchEvent(
      new CustomEvent("app:lenis-ready", {
        detail: lenis,
      })
    );

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (window.__appLenis === lenis) {
        delete window.__appLenis;
      }

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
