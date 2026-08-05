import type { CSSProperties } from "react";
import { FiTrendingUp } from "react-icons/fi";

/**
 * "What improves, and when" visual for the track-record section of /about.
 *
 * Three gains, each with the window it typically lands in. Every track fills
 * all the way and rests full — the panel only ever depicts the finished,
 * positive state, so a reader under prefers-reduced-motion sees three complete
 * bars and the timeframe labels, which are the actual information.
 *
 * The fill durations differ so the tracks arrive in sequence rather than
 * together, which reads as momentum building. No track stops short.
 *
 * Styling: `.abt-page .abt-tl*` in about.css.
 */

const tracks = [
  {
    k: "Search relevance",
    window: "2–4 weeks",
    detail: "Primary category, service list and on-page alignment land first",
    tone: "blue",
  },
  {
    k: "Map Pack coverage",
    window: "4–8 weeks",
    detail: "Service-area geometry and location content widen the radius",
    tone: "green",
  },
  {
    k: "Authority & reviews",
    window: "3–6 months",
    detail: "Review velocity, local links and brand signals keep compounding",
    tone: "gold",
  },
];

export default function TimelineBars() {
  return (
    <div
      className="abt-tl"
      role="img"
      aria-label="Three gains from local search work and when each typically lands: search relevance in two to four weeks, Map Pack coverage in four to eight weeks, and authority and reviews compounding over three to six months."
    >
      <div className="abt-tl-panel">
        <div className="abt-tl-head">
          <span className="abt-tl-title">
            <FiTrendingUp aria-hidden="true" />
            What improves, and when
          </span>
          <span className="abt-tl-scope">Typical engagement</span>
        </div>

        <ul className="abt-tl-list">
          {tracks.map((track, i) => (
            <li
              key={track.k}
              className={`abt-tl-row is-${track.tone}`}
              style={{ "--i": i } as CSSProperties}
            >
              <div className="abt-tl-row-top">
                <span className="abt-tl-k">{track.k}</span>
                <span className="abt-tl-window">{track.window}</span>
              </div>
              <span className="abt-tl-track" aria-hidden="true">
                <span className="abt-tl-fill" />
              </span>
              <p className="abt-tl-detail">{track.detail}</p>
            </li>
          ))}
        </ul>

        <p className="abt-tl-foot">
          Every lever keeps building after it lands, so month six is stronger
          than month three on the same plan.
        </p>
      </div>
    </div>
  );
}
