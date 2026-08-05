import type { CSSProperties } from "react";
import { FiArrowUpRight, FiPhone, FiTrendingUp } from "react-icons/fi";

/**
 * Hero visual for /services — a CSS-animated "growth console" panel that stands
 * in for a screenshot. Bars grow on load, the lead feed cycles, and two float
 * cards drift. Everything is keyframe-driven so the page stays a server
 * component; all styling lives in servicesHub.css under `.svc-page .svc-console`.
 *
 * The figures are illustrative, which the caption under the panel says out loud.
 */

const bars = [34, 41, 38, 52, 47, 63, 58, 71, 66, 84, 79, 96];

const feed = [
  { name: "Kitchen remodel quote", src: "Google Business Profile", time: "2m" },
  { name: "Emergency AC repair", src: "Local search", time: "14m" },
  { name: "Roof inspection request", src: "Google Ads", time: "31m" },
];

export default function GrowthConsole() {
  return (
    <div
      className="svc-console"
      role="img"
      aria-label="A marketing dashboard showing monthly leads climbing from 34 to 96, a Google Map Pack position of number 1, cost per lead falling to 38 dollars, and a live feed of inbound enquiries."
    >
      <div className="svc-console-window">
        <div className="svc-console-bar">
          <span className="svc-console-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="svc-console-tab">Growth console</span>
          <span className="svc-console-live">
            <i aria-hidden="true" />
            Live
          </span>
        </div>

        <div className="svc-console-body">
          <div className="svc-console-metrics">
            <div className="svc-console-metric">
              <span className="svc-console-metric-k">Leads this month</span>
              <strong className="svc-console-metric-v">96</strong>
              <span className="svc-console-delta is-up">
                <FiTrendingUp aria-hidden="true" />
                182%
              </span>
            </div>
            <div className="svc-console-metric">
              <span className="svc-console-metric-k">Map Pack rank</span>
              <strong className="svc-console-metric-v">#1</strong>
              <span className="svc-console-delta is-up">
                <FiTrendingUp aria-hidden="true" />6 spots
              </span>
            </div>
            <div className="svc-console-metric">
              <span className="svc-console-metric-k">Cost per lead</span>
              <strong className="svc-console-metric-v">$38</strong>
              <span className="svc-console-delta is-down">
                <FiArrowUpRight aria-hidden="true" />
                44%
              </span>
            </div>
          </div>

          <div className="svc-console-chart" aria-hidden="true">
            {bars.map((h, i) => (
              <span
                key={i}
                className="svc-console-bar-col"
                style={{ "--h": `${h}%`, "--i": i } as CSSProperties}
              />
            ))}
          </div>

          <div className="svc-console-feed">
            <p className="svc-console-feed-head">Inbound this hour</p>
            <ul>
              {feed.map((row, i) => (
                <li key={row.name} style={{ "--i": i } as CSSProperties}>
                  <span className="svc-console-feed-icon" aria-hidden="true">
                    <FiPhone />
                  </span>
                  <span className="svc-console-feed-txt">
                    <strong>{row.name}</strong>
                    <small>{row.src}</small>
                  </span>
                  <span className="svc-console-feed-time">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <span className="svc-console-float svc-console-float--a" aria-hidden="true">
        <strong>+38</strong>
        <small>calls this week</small>
      </span>
      <span className="svc-console-float svc-console-float--b" aria-hidden="true">
        <strong>4.9★</strong>
        <small>214 reviews</small>
      </span>
    </div>
  );
}
