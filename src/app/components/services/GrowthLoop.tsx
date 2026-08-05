import type { CSSProperties } from "react";
import { FiGlobe, FiMapPin, FiSearch, FiTarget, FiUserCheck } from "react-icons/fi";

/**
 * "One growth system" diagram used in the Why Zonic section, replacing the old
 * team photo. Four channel cards feed a single hub, which feeds one leads card.
 * The connectors are plain CSS rules with a dot travelling down them on a
 * transform-only animation (no SVG stretching, nothing that triggers layout).
 *
 * Styling: `.svc-page .svc-loop*` in servicesHub.css.
 */

const channels = [
  { icon: <FiGlobe />, label: "Website", sub: "Built to convert" },
  { icon: <FiSearch />, label: "Local SEO", sub: "Organic visibility" },
  { icon: <FiMapPin />, label: "Google profile", sub: "Map Pack + reviews" },
  { icon: <FiTarget />, label: "Google Ads", sub: "High-intent traffic" },
];

function Connector({ delay }: { delay: number }) {
  return (
    <div className="svc-loop-connector" aria-hidden="true">
      <span
        className="svc-loop-beam"
        style={{ "--d": `${delay}s` } as CSSProperties}
      />
    </div>
  );
}

export default function GrowthLoop() {
  return (
    <div
      className="svc-loop"
      role="img"
      aria-label="Four marketing channels (website, local SEO, Google Business Profile and Google Ads) feeding one shared growth system that produces qualified leads."
    >
      <div className="svc-loop-channels">
        {channels.map((c, i) => (
          <div
            className="svc-loop-node"
            key={c.label}
            style={{ "--i": i } as CSSProperties}
          >
            <span className="svc-loop-node-icon" aria-hidden="true">
              {c.icon}
            </span>
            <span className="svc-loop-node-txt">
              <strong>{c.label}</strong>
              <small>{c.sub}</small>
            </span>
          </div>
        ))}
      </div>

      <Connector delay={0} />

      <div className="svc-loop-core">
        <span className="svc-loop-core-ring" aria-hidden="true" />
        <strong>Zonic growth system</strong>
        <small>One strategy, one owner, one monthly report</small>
      </div>

      <Connector delay={0.9} />

      <div className="svc-loop-out">
        <span className="svc-loop-out-icon" aria-hidden="true">
          <FiUserCheck />
        </span>
        <span className="svc-loop-out-txt">
          <strong>Qualified leads</strong>
          <small>Calls, forms and booked jobs</small>
        </span>
      </div>
    </div>
  );
}
