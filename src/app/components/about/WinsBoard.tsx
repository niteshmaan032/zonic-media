import type { CSSProperties } from "react";
import { FiAward, FiStar, FiTrendingUp, FiUsers } from "react-icons/fi";

/**
 * Hero visual for /about — a results board built entirely in CSS.
 *
 * Deliberately NOT another browser-window console (that idiom belongs to
 * /services GrowthConsole). This is a single self-contained stat board: one
 * headline figure over a rising column chart, four achievement tiles, and the
 * Map Pack position row. No floating cards outside the panel — everything
 * lives inside one frame.
 *
 * Everything here shows a win and rests on the win — the columns grow from
 * zero and stay at full height, the rank badge rests at #1. Nothing on this
 * panel depicts a problem state, so a reader who never sees the animation
 * still sees the finished, positive result.
 *
 * Keyframe-driven so the page stays a server component. Styling lives in
 * about.css under `.abt-page .abt-wins`.
 */

/* Rising column chart — the last value is the tallest so the shape reads as
   growth even frozen. Illustrative, which the section copy says out loud. */
const columns = [28, 35, 31, 43, 49, 46, 58, 65, 62, 77, 85, 96];

const tiles = [
  { icon: <FiTrendingUp />, v: "1,500+", k: "Profiles optimized" },
  { icon: <FiAward />, v: "500+", k: "Listings restored" },
  { icon: <FiStar />, v: "5.0", k: "Rating on Clutch", gold: true },
  { icon: <FiUsers />, v: "20+", k: "Trades served" },
];

export default function WinsBoard() {
  return (
    <div
      className="abt-wins"
      role="img"
      aria-label="A results board showing steady month-on-month growth in profile calls, 1,500 Google Business Profiles optimized, 500 listings restored, a 5.0 rating on Clutch, more than 20 trades served, and a number one Map Pack position."
    >
      <div className="abt-wins-card">
        <div className="abt-wins-top">
          <span className="abt-wins-label">Results board</span>
          <span className="abt-wins-live">
            <i aria-hidden="true" />
            Dover, DE
          </span>
        </div>

        <div className="abt-wins-hero">
          <div className="abt-wins-hero-text">
            <p className="abt-wins-hero-v">+38%</p>
            <p className="abt-wins-hero-k">Calls from the profile, month on month</p>
          </div>
          <span className="abt-wins-trend">
            <FiTrendingUp aria-hidden="true" />
            Growing
          </span>
        </div>

        <div className="abt-wins-spark" aria-hidden="true">
          {columns.map((h, i) => (
            <i
              key={i}
              style={{ "--h": `${h}%`, "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="abt-wins-grid">
          {tiles.map((tile, i) => (
            <div
              className={`abt-wins-tile${tile.gold ? " is-gold" : ""}`}
              key={tile.k}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="abt-wins-tile-ic" aria-hidden="true">
                {tile.icon}
              </span>
              <span className="abt-wins-tile-v">{tile.v}</span>
              <span className="abt-wins-tile-k">{tile.k}</span>
            </div>
          ))}
        </div>

        <div className="abt-wins-rank">
          <span className="abt-wins-rank-badge" aria-hidden="true">
            #1
          </span>
          <span className="abt-wins-rank-txt">
            <strong>Map Pack position</strong>
            <small>Held across the core service area</small>
          </span>
          <span className="abt-wins-stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <FiStar key={i} style={{ "--i": i } as CSSProperties} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
