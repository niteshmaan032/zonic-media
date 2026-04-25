"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

declare global {
  interface Window {
    __appLenis?: Lenis;
  }
}

type UseLenisPointerGuardOptions = {
  debounceMs?: number;
};

export default function useLenisPointerGuard<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  { debounceMs = 80 }: UseLenisPointerGuardOptions = {},
) {
  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    let isHovered = false;
    let timeoutId: number | undefined;
    let unsubscribe: (() => void) | undefined;

    const clearScrollingState = () => {
      wrapper.classList.remove("is-scrolling");

      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    };

    const markScrolling = () => {
      if (!isHovered) return;

      wrapper.classList.add("is-scrolling");

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        wrapper.classList.remove("is-scrolling");
        timeoutId = undefined;
      }, debounceMs);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      clearScrollingState();
    };

    const attachLenis = (lenis: Lenis) => {
      unsubscribe?.();
      unsubscribe = lenis.on("scroll", markScrolling);
    };

    const handleLenisReady = (event: Event) => {
      const lenis = (event as CustomEvent<Lenis>).detail;
      if (lenis) {
        attachLenis(lenis);
      }
    };

    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    if (window.__appLenis) {
      attachLenis(window.__appLenis);
    }

    window.addEventListener("app:lenis-ready", handleLenisReady);

    return () => {
      clearScrollingState();
      unsubscribe?.();
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("app:lenis-ready", handleLenisReady);
    };
  }, [debounceMs, ref]);
}
