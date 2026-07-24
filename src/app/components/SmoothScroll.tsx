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
    // Lenis doesn't smooth touch scrolling (native scroll is used on phones),
    // so on touch devices its per-frame rAF loop is pure main-thread cost.
    // Skip it there; consumers (useLenisPointerGuard) already handle absence.
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

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
