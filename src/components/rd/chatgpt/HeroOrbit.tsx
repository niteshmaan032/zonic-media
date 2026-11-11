"use client";

import { useEffect, useRef } from "react";

/* ---------------------------------------------------------------------------
   Orbiting icon ring behind the hero copy (owner, 11 Nov 2026: "exactly
   same" as the openai.com Businesses in ChatGPT hero). Values were measured
   on that page in Chrome:
   - Icons from one 6×4 sprite on a ring of radius
     clamp(740px, 57.8125vw, 840px) × 0.7682; one turn every 120 s,
     clockwise.
   - Each icon is pulled toward the cursor (≈36px when close, fading out by
     ≈300px), eased at 0.2 per frame. The orbit stops while the cursor is
     on an icon.
   - Intro (≈3.4 s): icons fade in small on a tight ellipse around the
     headline, then spring out to the ring.
   - The ring widens as the page scrolls (0.46 × scrollY, max 240px).
   Positions are written straight to the DOM from one rAF loop that only
   runs while the hero is on screen.
--------------------------------------------------------------------------- */

/* Zonic's niche icons (owner, 11 Nov): 22 cells of the 6×4 sprite, in a
   slot order that keeps look-alike niches apart (pairs sit opposite each
   other on the ring, the three painting and cannabis icons ~7 apart). */
const COUNT = 22;
const TURN_MS = 120_000;
const FADE_STAGGER = 40;
const SPRING_AT = 1600;
const SPRING_MS = 1300;
const START_ANGLE = -0.07;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

/** Under-damped spring, 0 → 1 with a ~6% overshoot. */
const spring = (u: number) =>
  u >= 1 ? 1 : 1 - Math.exp(-7 * u) * Math.cos(8 * u);
const easeOut = (u: number) => 1 - (1 - u) ** 3;

function measure(w: number) {
  const toy = Math.round(clamp(w * 0.0675, 52, 99));
  const r =
    w >= 1000
      ? clamp(w * 0.578125, 740, 840) * 0.7682
      : clamp(w * 0.62, 300, 568);
  // Ring top, clear of the floating header (owner, 11 Nov: "icons are too
  // close to header"); the hero copy moved down by the same amount.
  const top = w >= 992 ? 172 : w >= 576 ? 144 : 128;
  const c = r + top;
  return { w, toy, r, c, ey: c - 0.44 * r, rx: 0.54 * r, ry: 0.45 * r };
}

export function HeroOrbit({ sprite }: { sprite: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLDivElement | null)[]>([]);
  const toys = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const noHover = window.matchMedia("(hover: none)");
    let m = measure(scene.clientWidth);
    scene.style.setProperty("--toy", `${m.toy}px`);

    let raf = 0;
    let running = false;
    let last = 0;
    let started = 0;
    let angle = START_ANGLE;
    let speed = 1;
    let pointer: { x: number; y: number } | null = null;
    const pull = Array.from({ length: COUNT }, () => ({ x: 0, y: 0 }));
    const step = (Math.PI * 2) / COUNT;

    const place = (now: number, dt: number) => {
      const t = reduced.matches ? Infinity : now - started;
      const grow = Math.min(240, Math.max(0, window.scrollY) * 0.46);
      const radius = m.r + grow;
      const rect = scene.getBoundingClientRect();
      const px = pointer ? pointer.x - rect.left - rect.width / 2 : 0;
      const py = pointer ? pointer.y - rect.top : 0;
      const usePull = pointer && !noHover.matches && !reduced.matches;
      const ease = 1 - Math.pow(0.8, dt / 16.67);
      const k = m.toy / 99;
      let near = false;

      for (let i = 0; i < COUNT; i++) {
        const el = items.current[i];
        const toy = toys.current[i];
        if (!el || !toy) continue;
        const phi = angle + i * step;
        const sin = Math.sin(phi);
        const cos = Math.cos(phi);
        let x = radius * sin;
        let y = m.c - radius * cos;
        let scale = 1;
        let opacity = 1;

        if (t < SPRING_AT + SPRING_MS) {
          // Intro: fade in on the small ellipse, then spring out.
          const ix = m.rx * sin;
          const iy = m.ey - m.ry * cos;
          const fade = easeOut(clamp((t - i * FADE_STAGGER) / 500, 0, 1));
          const s = spring(clamp((t - SPRING_AT) / SPRING_MS, 0, 1));
          // Icons drift out from slightly inside the ellipse as they appear.
          const drift = 0.9 + 0.1 * fade;
          const sx = ix * drift;
          const sy = m.ey + (iy - m.ey) * drift;
          x = sx + (x - sx) * s;
          y = sy + (y - sy) * s;
          scale = 0.556 + (1 - 0.556) * Math.min(s, 1.02);
          opacity = fade;
        }

        let tx = 0;
        let ty = 0;
        if (usePull) {
          const dx = px - x;
          const dy = py - y;
          const d = Math.hypot(dx, dy);
          if (d < m.toy * 0.9) near = true;
          if (d > 0.5) {
            const mag = Math.min(d, 38 * k * Math.exp(-((d / (274 * k)) ** 2)));
            tx = (dx / d) * mag;
            ty = (dy / d) * mag;
          }
        }
        const p = pull[i];
        p.x += (tx - p.x) * ease;
        p.y += (ty - p.y) * ease;

        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        toy.style.translate = `${p.x.toFixed(2)}px ${p.y.toFixed(2)}px`;
      }

      // Orbit: stops while the cursor rests on an icon, eases back after.
      const target = near ? 0 : 1;
      speed += (target - speed) * (1 - Math.pow(0.85, dt / 16.67));
      if (t > SPRING_AT && !reduced.matches)
        angle += (speed * dt * Math.PI * 2) / TURN_MS;
    };

    const frame = (now: number) => {
      const dt = Math.min(64, now - last || 16.67);
      last = now;
      place(now, dt);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduced.matches) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    started = performance.now();
    place(started, 16.67);

    const io = new IntersectionObserver(([e]) =>
      e.isIntersecting && !document.hidden ? start() : stop(),
    );
    io.observe(scene);

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || e.pointerType === "pen")
        pointer = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => (pointer = null);
    const onResize = () => {
      m = measure(scene.clientWidth);
      scene.style.setProperty("--toy", `${m.toy}px`);
      if (!running) place(performance.now(), 16.67);
    };
    const onScroll = () => {
      if (reduced.matches) place(performance.now(), 16.67);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={sceneRef} className="cg-scene" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            items.current[i] = el;
          }}
          className="cg-toy"
        >
          <span
            ref={(el) => {
              toys.current[i] = el;
            }}
            style={{
              backgroundImage: `url(${sprite})`,
              backgroundPosition: `${(i % 6) * 20}% ${(Math.floor(i / 6) * 100) / 3}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
