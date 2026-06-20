"use client";

import { useEffect, useRef } from "react";

/**
 * Animated Google Business Profile card used in the GMB reinstatement hero.
 * Loops between a "suspended" and a "reinstated / live" state to visualise the
 * recovery the service provides. Respects prefers-reduced-motion.
 */
export default function GmbProfileCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const stateText = card.querySelector<HTMLElement>(".state-text");
    const stateChip = card.querySelector<HTMLElement>(".state-chip");
    const pct = wrap.querySelector<HTMLElement>(".pct");
    const steps = wrap.querySelectorAll<HTMLElement>(".recovery-steps span");
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const suspended = () => {
      card.classList.remove("is-live");
      card.classList.add("is-suspended");
      wrap.classList.remove("is-live");
      if (stateText) stateText.textContent = "Profile suspended";
      if (stateChip) stateChip.textContent = "Suspended";
      if (pct) pct.textContent = "18%";
      steps.forEach((s) => s.classList.remove("on"));
      steps[0]?.classList.add("on");
    };

    const live = () => {
      card.classList.remove("is-suspended");
      card.classList.add("is-live");
      wrap.classList.add("is-live");
      if (stateText) stateText.textContent = "Profile live & visible";
      if (stateChip) stateChip.textContent = "Reinstated";
      if (pct) pct.textContent = "100%";
      steps.forEach((s) => s.classList.add("on"));
    };

    live();
    if (reduce) return;

    suspended();
    let isLive = false;
    const first = setTimeout(live, 1400);
    const interval = setInterval(() => {
      isLive = !isLive;
      if (isLive) suspended();
      else live();
    }, 4200);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="gbpcard-wrap is-live" ref={wrapRef}>
      <div
        className="gbpcard is-live"
        ref={cardRef}
        role="img"
        aria-label="A Google Business Profile shown transitioning from a suspended state to a live, reinstated state."
      >
        <div className="gbpcard-status">
          <span className="dot"></span>
          <span className="state-text">Profile live &amp; visible</span>
          <span className="chip state-chip">Reinstated</span>
        </div>
        <div className="gbpcard-body">
          <div className="gbpcard-cover">
            <svg
              className="roofline"
              viewBox="0 0 300 96"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 70 L60 40 L120 64 L180 34 L240 60 L300 38 L300 96 L0 96Z"
                fill="#0B1220"
              />
            </svg>
          </div>
          <div className="gbpcard-logo">
            Z<span className="dot"></span>
          </div>
          <div className="gbpcard-name">Your Business</div>
          <div className="gbpcard-meta">
            <span className="stars">★★★★★</span> <span>4.9 · 214 reviews</span>
          </div>
          <div className="gbpcard-cat">Local service · Open now</div>
          <div className="gbpcard-actions">
            <span className="a call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              Call
            </span>
            <span className="a">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Directions
            </span>
          </div>
          <div className="gbpcard-overlay">
            <div className="lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="ot">Profile suspended</div>
            <div className="od">Not visible on Google Maps or local search.</div>
          </div>
        </div>
      </div>
      <div className="recovery">
        <div className="recovery-top">
          <span className="lbl">Reinstatement progress</span>
          <span className="pct">100%</span>
        </div>
        <div className="recovery-bar">
          <div className="recovery-fill"></div>
        </div>
        <div className="recovery-steps">
          <span className="s-audit">Audit</span>
          <span className="s-fix">Fix</span>
          <span className="s-appeal">Appeal</span>
          <span className="s-live">Live</span>
        </div>
      </div>
    </div>
  );
}
