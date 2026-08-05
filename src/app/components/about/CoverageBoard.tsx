import type { CSSProperties } from "react";
import { FiHome, FiMapPin } from "react-icons/fi";

/**
 * "Where we work" visual for /about — a CSS-built coverage board that replaces
 * the office photo an about page would normally carry. A dot matrix backdrop
 * with pins that light up in sequence: Dover marked as the head office, the
 * rest standing in for the remote-first client base.
 *
 * Pure keyframes, no images, no shadows — same rules as the /services visuals.
 * Pin coordinates are percentages so the board scales with its container.
 *
 * Styling: `.abt-page .abt-cov*` in about.css.
 */

const pins = [
  { city: "Dover, DE", x: 74, y: 38, hq: true },
  { city: "Philadelphia, PA", x: 70, y: 30 },
  { city: "Baltimore, MD", x: 67, y: 42 },
  { city: "Atlanta, GA", x: 60, y: 66 },
  { city: "Dallas, TX", x: 38, y: 72 },
  { city: "Phoenix, AZ", x: 17, y: 60 },
  { city: "Chicago, IL", x: 52, y: 30 },
];

/* 12 x 7 backdrop matrix. Kept as a flat count so the markup stays trivial. */
const DOTS = Array.from({ length: 84 }, (_, i) => i);

export default function CoverageBoard() {
  return (
    <div
      className="abt-cov"
      role="img"
      aria-label="A coverage board showing Zonic Media's head office in Dover, Delaware and client locations across the United States, including Philadelphia, Baltimore, Chicago, Atlanta, Dallas and Phoenix."
    >
      <div className="abt-cov-panel">
        <div className="abt-cov-head">
          <span className="abt-cov-title">Where we work</span>
          <span className="abt-cov-scope">Remote-first · United States</span>
        </div>

        <div className="abt-cov-map">
          <div className="abt-cov-dots" aria-hidden="true">
            {DOTS.map((i) => (
              <span key={i} style={{ "--i": i % 12 } as CSSProperties} />
            ))}
          </div>

          {pins.map((pin, i) => (
            <span
              key={pin.city}
              className={`abt-cov-pin${pin.hq ? " is-hq" : ""}`}
              style={
                {
                  "--x": `${pin.x}%`,
                  "--y": `${pin.y}%`,
                  "--i": i,
                } as CSSProperties
              }
              aria-hidden="true"
            >
              <i />
              <em>{pin.city}</em>
            </span>
          ))}
        </div>

        <div className="abt-cov-legend">
          <span>
            <FiHome aria-hidden="true" />
            Head office — Dover, DE
          </span>
          <span>
            <FiMapPin aria-hidden="true" />
            Clients nationwide
          </span>
        </div>
      </div>

      <p className="abt-visual-note">
        Illustrative board. Pins stand in for the regions we work across, not a
        complete client list.
      </p>
    </div>
  );
}
