"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Three animated visuals that sit between sections on the home inspector
 * state pages. They illustrate the intended outcome and show agency-wide
 * verified figures — never invented per-client results.
 */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  // Browsers without IntersectionObserver simply show the final state.
  const [inView, setInView] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/** Stable per-state pick so each page keeps its own heading between builds. */
function pick<T>(options: T[], seed: string, salt: number): T {
  let hash = salt;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return options[hash % options.length];
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ------------------------------------------------------------------ */
/* 1 · Map pack climb                                                  */
/* ------------------------------------------------------------------ */

const PACK_SLOTS = 5;

export function MapPackClimb({
  stateName,
  city,
}: {
  stateName: string;
  city: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  // Slot index of "your" listing: starts at the bottom, climbs to 0.
  const [slot, setSlot] = useState(PACK_SLOTS - 1);

  useEffect(() => {
    if (!inView) return;
    // Reduced motion: jump straight to the final order.
    const steps = prefersReducedMotion() ? [0] : [3, 2, 1, 0];
    const timers = steps.map((target, i) =>
      window.setTimeout(
        () => setSlot(target),
        steps.length === 1 ? 0 : 500 + i * 650,
      ),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView]);

  const atTop = slot === 0;
  const heading = pick(
    [
      {
        eyebrow: `The target in ${city}`,
        title: `From buried on the map to the first name ${city} buyers call.`,
      },
      {
        eyebrow: `${city} map pack, reordered`,
        title: `Where your listing is headed when a buyer searches ${city}.`,
      },
      {
        eyebrow: `What ${stateName} buyers see first`,
        title: `Your company moving up the ${city} results, one position at a time.`,
      },
      {
        eyebrow: `Climbing the ${city} three-pack`,
        title: `The spot we work toward for every ${stateName} inspector: number one on the map.`,
      },
      {
        eyebrow: `The ${city} search, replayed`,
        title: `Same search, same buyers — a very different place on the list.`,
      },
      {
        eyebrow: `${stateName} local results`,
        title: `Past the competitors above you in ${city}, up to the top of the map.`,
      },
    ],
    stateName,
    7,
  );

  return (
    <div className="his-viz" ref={ref} data-inview={inView}>
      <div className="his-viz-head">
        <span className="his-viz-eyebrow">{heading.eyebrow}</span>
        <h3 className="his-viz-title">{heading.title}</h3>
      </div>

      <div className="his-pack" aria-hidden="true">
        <div className="his-pack-search">
          <span className="his-pack-search-icon" />
          home inspector {city.toLowerCase()}
        </div>
        <div
          className="his-pack-list"
          style={{ height: `${PACK_SLOTS * 58}px` }}
        >
          {Array.from({ length: PACK_SLOTS }, (_, i) => {
            const isYou = i === PACK_SLOTS - 1;
            // Competitor rows keep their order and step down as you pass them.
            const position = isYou ? slot : i >= slot ? i + 1 : i;
            return (
              <div
                key={i}
                className={`his-pack-row${isYou ? " his-pack-row-you" : ""}`}
                style={{ transform: `translateY(${position * 58}px)` }}
              >
                <span className="his-pack-rank">{position + 1}</span>
                {isYou ? (
                  <>
                    <span className="his-pack-name">
                      Your Inspection Company
                    </span>
                    <span className="his-pack-chip">
                      {atTop ? "Top of the map pack" : "▲ Climbing"}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="his-pack-skeleton" />
                    <span className="his-pack-skeleton his-pack-skeleton-sm" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="his-viz-note">
        Illustration of what {stateName} home inspector marketing works toward —
        a rebuilt Google Business Profile, steady reviews and local SEO moving
        your listing up. Not a guaranteed ranking.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2 · How the calendar fills                                          */
/* ------------------------------------------------------------------ */

const MILESTONES = [
  { x: 70, y: 150, when: "Day 1–10", what: "Google Ads calls start" },
  { x: 250, y: 108, when: "Day 30–60", what: "Map pack calls build" },
  { x: 470, y: 44, when: "Day 90–180", what: "Organic rankings compound" },
];

const CURVE = "M 20 172 C 50 168, 60 156, 70 150 S 190 128, 250 108 S 400 70, 470 44 S 545 26, 580 20";

export function CalendarFillChart({ stateName }: { stateName: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const heading = pick(
    [
      {
        eyebrow: `How the ${stateName} calendar fills`,
        title: "Ads first, the map pack next, organic search compounding behind them.",
      },
      {
        eyebrow: `The ${stateName} build, stage by stage`,
        title: "Three sources of booked inspections, switched on in order.",
      },
      {
        eyebrow: `${stateName}: first call to full calendar`,
        title: `How bookings stack up for ${stateName} inspectors over the first six months.`,
      },
      {
        eyebrow: `${stateName} growth curve`,
        title: "Paid search starts it, Google Maps widens it, organic rankings keep it climbing.",
      },
      {
        eyebrow: `After your ${stateName} launch`,
        title: `Each channel adds to the last — the shape of a ${stateName} campaign.`,
      },
      {
        eyebrow: `${stateName} bookings, layer by layer`,
        title: "Quick wins in the first days, compounding wins by month six.",
      },
    ],
    stateName,
    13,
  );

  return (
    <div className="his-viz" ref={ref} data-inview={inView}>
      <div className="his-viz-head">
        <span className="his-viz-eyebrow">{heading.eyebrow}</span>
        <h3 className="his-viz-title">{heading.title}</h3>
      </div>

      <div className="his-curve">
        <svg
          viewBox="0 0 600 200"
          role="img"
          aria-label={`Booked inspections for a ${stateName} inspection company building over time: Google Ads calls in days 1 to 10, map pack calls in days 30 to 60, organic rankings compounding in days 90 to 180.`}
        >
          <defs>
            <linearGradient id="his-curve-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2567e8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2567e8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line className="his-curve-base" x1="20" y1="180" x2="580" y2="180" />
          <path
            className="his-curve-area"
            d={`${CURVE} L 580 180 L 20 180 Z`}
            fill="url(#his-curve-fill)"
          />
          <path className="his-curve-line" d={CURVE} pathLength={1} />
          {MILESTONES.map((m, i) => (
            <g
              key={m.when}
              className="his-curve-dot"
              style={{ transitionDelay: `${0.5 + i * 0.55}s` }}
            >
              <line
                className="his-curve-drop"
                x1={m.x}
                y1={m.y}
                x2={m.x}
                y2="180"
              />
              <circle cx={m.x} cy={m.y} r="6" />
            </g>
          ))}
        </svg>
        <ol className="his-curve-legend">
          {MILESTONES.map((m, i) => (
            <li key={m.when} style={{ transitionDelay: `${0.5 + i * 0.55}s` }}>
              <strong>{m.when}</strong>
              <span>{m.what}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="his-viz-note">
        Shape of a typical build for {stateName} inspectors, drawn from the
        timelines on this page. The curve shows direction, not a promised
        volume.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3 · Verified agency figures                                         */
/* ------------------------------------------------------------------ */

const PROOF = [
  {
    value: 900,
    suffix: "+",
    decimals: 0,
    label: "Google Business Profiles reinstated and verified",
  },
  {
    value: 1500,
    suffix: "+",
    decimals: 0,
    label: "Business Profiles optimized",
  },
  {
    value: 500,
    suffix: "+",
    decimals: 0,
    label: "Local businesses ranked",
  },
  {
    value: 5,
    suffix: "",
    decimals: 1,
    label: "Clutch rating across 21 verified reviews",
  },
];

function CountUp({
  value,
  decimals,
  suffix,
  run,
}: {
  value: number;
  decimals: number;
  suffix: string;
  run: boolean;
}) {
  // Server render and no-JS visitors see the final figure.
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!run || prefersReducedMotion()) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  const text =
    decimals > 0
      ? shown.toFixed(decimals)
      : Math.round(shown).toLocaleString("en-US");

  return (
    <span className="his-proof-num">
      {text}
      {suffix}
    </span>
  );
}

export function ProofCounters({ stateName }: { stateName: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const heading = pick(
    [
      {
        eyebrow: `The team behind your ${stateName} listing`,
        title: `The track record working on your ${stateName} inspection business.`,
      },
      {
        eyebrow: `By the numbers, for ${stateName}`,
        title: `What the people handling your ${stateName} campaigns have already done.`,
      },
      {
        eyebrow: `Verified before you hire in ${stateName}`,
        title: `Agency results you can check before you hire us in ${stateName}.`,
      },
      {
        eyebrow: `Experience behind every ${stateName} plan`,
        title: "Profiles recovered, profiles optimized, businesses ranked.",
      },
      {
        eyebrow: `Our record, brought to ${stateName}`,
        title: `The work history ${stateName} inspectors are hiring.`,
      },
      {
        eyebrow: `Proof ${stateName} inspectors can look up`,
        title: `Numbers from our client work nationwide, now applied to ${stateName}.`,
      },
    ],
    stateName,
    29,
  );

  return (
    <div className="his-viz" ref={ref} data-inview={inView}>
      <div className="his-viz-head">
        <span className="his-viz-eyebrow">{heading.eyebrow}</span>
        <h3 className="his-viz-title">{heading.title}</h3>
      </div>

      <div className="his-proof-grid">
        {PROOF.map((item) => (
          <div className="his-proof-tile" key={item.label}>
            <CountUp
              value={item.value}
              decimals={item.decimals}
              suffix={item.suffix}
              run={inView}
            />
            <span className="his-proof-label">{item.label}</span>
          </div>
        ))}
      </div>

      <p className="his-viz-note">
        Zonic Media agency-wide figures as of September 2026, across all local
        service clients nationwide.
      </p>
    </div>
  );
}
