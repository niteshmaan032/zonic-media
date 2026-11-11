"use client";

import { useEffect, useRef, useState } from "react";

/* Shared hooks for the ChatGPT page demos. Every demo is a looping
   timeline that only ticks while it is on screen (the AnimationGate rule:
   nothing runs off screen) and shows its finished state to visitors who
   prefer reduced motion. */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

export function useInView<T extends Element>(rootMargin = "120px 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);
  return [ref, inView] as const;
}

/**
 * Milliseconds into a looping timeline of `total` ms, plus the loop count
 * (use it as a React key to replay CSS animations). Starts at `initial`
 * (the server render), restarts from 0 each time the demo scrolls into
 * view, and freezes at `initial` for reduced motion.
 */
export function useTimeline(
  total: number,
  active: boolean,
  initial = total - 1,
  tick = 50,
) {
  const reduced = useReducedMotion();
  const [state, setState] = useState({ t: initial, loop: 0 });

  useEffect(() => {
    if (!active || reduced) return;
    const start = performance.now();
    const id = window.setInterval(() => {
      const elapsed = performance.now() - start;
      setState({
        t: elapsed % total,
        loop: Math.floor(elapsed / total) + 1,
      });
    }, tick);
    return () => window.clearInterval(id);
  }, [active, reduced, total, tick]);

  return reduced ? { t: initial, loop: 0 } : state;
}

/** 0 → 1 progress of `t` across [from, to]. */
export const span = (t: number, from: number, to: number) =>
  Math.min(1, Math.max(0, (t - from) / (to - from)));
