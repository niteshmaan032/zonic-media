import type { CSSProperties } from "react";

/**
 * Core Web Vitals gauge trio shown under the website mockup on /services.
 * Each ring sweeps from a failing score to a passing one, and the value label
 * crossfades with it. Resting state is the passing score.
 *
 * Styling: `.svc-page .svc-cwv*` in servicesHub.css.
 */

const gauges = [
  { k: "LCP", label: "Largest paint", before: "4.8s", after: "1.2s", pct: 94 },
  { k: "INP", label: "Interaction", before: "410ms", after: "88ms", pct: 97 },
  { k: "CLS", label: "Layout shift", before: "0.31", after: "0.01", pct: 99 },
];

export default function SpeedGauges() {
  return (
    <div
      className="svc-cwv"
      role="img"
      aria-label="Core Web Vitals improving after a rebuild: largest contentful paint from 4.8 seconds to 1.2 seconds, interaction to next paint from 410 to 88 milliseconds, and cumulative layout shift from 0.31 to 0.01."
    >
      {gauges.map((g, i) => (
        <div
          className="svc-cwv-item"
          key={g.k}
          style={{ "--i": i } as CSSProperties}
        >
          <span
            className="svc-cwv-ring"
            style={{ "--pct": `${g.pct}%` } as CSSProperties}
            aria-hidden="true"
          >
            <b className="svc-cwv-val svc-flip">
              <i className="svc-flip-b">{g.before}</i>
              <i className="svc-flip-a">{g.after}</i>
            </b>
          </span>
          <p className="svc-cwv-k">{g.k}</p>
          <p className="svc-cwv-label">{g.label}</p>
        </div>
      ))}
    </div>
  );
}
