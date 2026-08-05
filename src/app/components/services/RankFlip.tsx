import type { CSSProperties } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

/**
 * Local SEO proof visual: a keyword ranking board that loops between the
 * "before" state (page two and three, no Map Pack) and the "after" state
 * (top three, in the Map Pack). Pure CSS keyframes — the *resting* state is
 * "after", so with prefers-reduced-motion the panel simply shows the result.
 *
 * Styling: `.svc-page .svc-rank*` in servicesHub.css. Figures are illustrative.
 */

const rows = [
  { kw: "roofing company near me", before: "27", after: "2" },
  { kw: "emergency roof repair", before: "19", after: "1" },
  { kw: "metal roofing installer", before: "34", after: "3" },
  { kw: "roof replacement cost", before: "22", after: "4" },
];

export default function RankFlip() {
  return (
    <div
      className="svc-rank"
      role="img"
      aria-label="A keyword ranking board comparing before and after 90 days of local SEO. Before: positions 19 to 34 and no Map Pack presence. After: positions 1 to 4 with the business in the Google Map Pack."
    >
      <div className="svc-rank-window">
        <div className="svc-rank-bar">
          <span className="svc-rank-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="svc-rank-tab">
            <FiSearch aria-hidden="true" />
            Ranking board
          </span>
          <span className="svc-rank-scope">90-day window</span>
        </div>

        <div className="svc-rank-toggle-row" aria-hidden="true">
          <span className="svc-rank-toggle">
            <span className="svc-rank-thumb" />
            <span className="svc-rank-lbl svc-rank-lbl--b">Before</span>
            <span className="svc-rank-lbl svc-rank-lbl--a">After Zonic</span>
          </span>
        </div>

        <div className="svc-rank-table">
          <div className="svc-rank-head">
            <span>Tracked keyword</span>
            <span>Position</span>
          </div>
          <ul className="svc-rank-rows">
            {rows.map((row, i) => (
              <li key={row.kw} style={{ "--i": i } as CSSProperties}>
                <span className="svc-rank-kw">{row.kw}</span>
                <span className="svc-rank-pos">
                  <span className="svc-flip">
                    <b className="svc-flip-b">{row.before}</b>
                    <b className="svc-flip-a">{row.after}</b>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="svc-rank-foot">
          <span className="svc-rank-pack">
            <FiMapPin aria-hidden="true" />
            <span className="svc-flip">
              <span className="svc-flip-b">Not in the Map Pack</span>
              <span className="svc-flip-a">In the Map Pack</span>
            </span>
          </span>
          <span className="svc-rank-avg">
            Avg. position
            <span className="svc-flip">
              <b className="svc-flip-b">25.5</b>
              <b className="svc-flip-a">2.5</b>
            </span>
          </span>
        </div>
      </div>

      <p className="svc-visual-note">
        Illustrative board based on a typical 90-day local SEO engagement.
      </p>
    </div>
  );
}
