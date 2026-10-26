"use client";

/* Pauses the decorative CSS animations of every section that is off screen
   (27 Oct 2026). Pages run 70–110 looping UI animations at once, many of
   them on width/height/background, which made phones repaint constantly
   and blank out sections while scrolling (owner: "section flicker, it
   disappears and comes back"). Sections resume 200px before they scroll
   into view, so nothing visible changes. */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnimationGate() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          e.target.toggleAttribute("data-offscreen", !e.isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );
    const frame = requestAnimationFrame(() =>
      document.querySelectorAll("main section").forEach((s) => io.observe(s)),
    );
    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      document
        .querySelectorAll("main section[data-offscreen]")
        .forEach((s) => s.removeAttribute("data-offscreen"));
    };
  }, [pathname]);

  return null;
}
