import type { CSSProperties } from "react";
import {
  FiCheck,
  FiEyeOff,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiRefreshCw,
  FiSend,
  FiTag,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";

import "@/app/style/whiteLabelVisuals.css";

/* Three CSS-animated signature visuals for the white-label page, in the
   homepage console idiom (GbpConsole / IndustryMarketingVisuals): pure
   markup, keyframe loops, `--n` stagger vars, no client JS. */

/* ------------------------------------------------------- brand swap --- */

const SWAP_ROWS = [
  { icon: <FiMapPin />, label: "GBP profile reinstated" },
  { icon: <FiTrendingUp />, label: "Local SEO report ready" },
  { icon: <FiGlobe />, label: "WordPress site launched" },
] as const;

/** A client deliverable whose branding flips from Zonic's fulfillment desk
    to the partner agency's logo — the white-label promise in one loop. */
export function BrandSwapVisual() {
  return (
    <div
      className="wlv wlv-swap"
      role="img"
      aria-label="White-label delivery simulation: work fulfilled by Zonic Media is rebranded, and the client report ships carrying your agency's name and logo."
    >
      <div className="wlv-head" aria-hidden="true">
        <span className="wlv-chip">
          <FiRefreshCw />
          White-label delivery
        </span>
        <span className="wlv-live">
          <i />
          Fulfilling
        </span>
      </div>

      <div className="wlv-report" aria-hidden="true">
        <div className="wlv-report-head">
          <span className="wlv-brand">
            <span className="wlv-brand-logo wlv-flip">
              <b className="wlv-flip-b">Z</b>
              <b className="wlv-flip-a wlv-brand-logo--yours">A</b>
            </span>
            <span className="wlv-brand-meta wlv-flip">
              <span className="wlv-flip-b">
                <b>Zonic Media</b>
                <small>fulfillment desk</small>
              </span>
              <span className="wlv-flip-a">
                <b>Your Agency</b>
                <small>client-facing report</small>
              </span>
            </span>
          </span>
          <span className="wlv-swap-badge">
            <FiTag />
            Your brand
          </span>
        </div>
        <div className="wlv-report-rows">
          {SWAP_ROWS.map((row, n) => (
            <span
              className="wlv-report-row"
              key={row.label}
              style={{ "--n": n } as CSSProperties}
            >
              <span className="wlv-report-ic">{row.icon}</span>
              <b>{row.label}</b>
              <i className="wlv-report-check">
                <FiCheck />
              </i>
            </span>
          ))}
        </div>
      </div>

      <div className="wlv-toast" aria-hidden="true">
        <span className="wlv-toast-ic">
          <FiEyeOff />
        </span>
        <span>
          <b>Delivered under your brand</b>
          <small>Zonic stays invisible · client sees only you</small>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------- fulfillment flow --- */

const FLOW_NODES = [
  { icon: <FiSend />, label: "You send the work" },
  { icon: <FiTool />, label: "We fulfill it" },
  { icon: <FiTag />, label: "Your brand applied" },
] as const;

/** Partnership pipeline: tasks travel intake → fulfillment → rebrand →
    delivery while a feed of finished hand-offs cycles underneath. */
export function FulfillmentFlowVisual() {
  return (
    <div
      className="wlv wlv-flow"
      role="img"
      aria-label="White-label pipeline: your agency sends the work, Zonic Media fulfills it invisibly, your branding is applied, and you deliver the result and keep the margin."
    >
      <div className="wlv-head" aria-hidden="true">
        <span className="wlv-chip">
          <FiLayers />
          Invisible fulfillment
        </span>
        <span className="wlv-live">
          <i />
          Running
        </span>
      </div>

      <div className="wlv-flow-rail" aria-hidden="true">
        {FLOW_NODES.map((node, n) => (
          <div className="wlv-flow-step" key={node.label}>
            <div
              className="wlv-flow-node"
              style={{ "--n": n } as CSSProperties}
            >
              <span className="wlv-flow-ic">{node.icon}</span>
              <small>{node.label}</small>
            </div>
            <span
              className="wlv-flow-link"
              style={{ "--n": n } as CSSProperties}
            >
              <i />
            </span>
          </div>
        ))}
        <div className="wlv-flow-step">
          <div
            className="wlv-flow-node wlv-flow-node--end"
            style={{ "--n": 3 } as CSSProperties}
          >
            <span className="wlv-flow-ic">
              <FiCheck />
            </span>
            <small>You deliver &amp; profit</small>
          </div>
        </div>
      </div>

      <div className="wlv-feed" aria-hidden="true">
        <span className="wlv-feed-row" style={{ "--n": 0 } as CSSProperties}>
          <span className="wlv-feed-ic">
            <FiMapPin />
          </span>
          <span>
            <b>Suspended GBP reinstated</b>
            <small>handed back branded as your agency</small>
          </span>
        </span>
        <span className="wlv-feed-row" style={{ "--n": 1 } as CSSProperties}>
          <span className="wlv-feed-ic wlv-feed-ic--gold">
            <FiFileText />
          </span>
          <span>
            <b>Local SEO report white-labeled</b>
            <small>your logo, your colors, ready to send</small>
          </span>
        </span>
        <span className="wlv-feed-row" style={{ "--n": 2 } as CSSProperties}>
          <span className="wlv-feed-ic wlv-feed-ic--green">
            <FiCheck />
          </span>
          <span>
            <b>Client delivery complete</b>
            <small>we never made contact</small>
          </span>
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------- margin meter --- */

const MARGIN_ROWS = [
  { label: "GBP Reinstatement", cost: 46, margin: 34 },
  { label: "Local SEO", cost: 52, margin: 30 },
  { label: "WordPress Web Design", cost: 44, margin: 38 },
] as const;

/** Wholesale-vs-retail meter: the blue segment is our partner rate, the gold
    segment that grows in is the markup the agency keeps on every job. */
export function MarginMeterVisual() {
  return (
    <div
      className="wlv wlv-margin"
      role="img"
      aria-label="Reseller margin meter: for each service, Zonic Media's wholesale partner rate is shown in blue and the markup your agency keeps grows in gold on top of it."
    >
      <div className="wlv-head" aria-hidden="true">
        <span className="wlv-chip">
          <FiTrendingUp />
          Reseller margin
        </span>
        <span className="wlv-margin-badge">You set the price</span>
      </div>

      <div className="wlv-margin-rows" aria-hidden="true">
        {MARGIN_ROWS.map((row, n) => (
          <div
            className="wlv-margin-row"
            key={row.label}
            style={{ "--n": n } as CSSProperties}
          >
            <span className="wlv-margin-label">{row.label}</span>
            <span className="wlv-margin-track">
              <i
                className="wlv-margin-cost"
                style={{ "--w": `${row.cost}%` } as CSSProperties}
              />
              <i
                className="wlv-margin-gain"
                style={
                  {
                    "--w": `${row.margin}%`,
                    "--x": `${row.cost}%`,
                  } as CSSProperties
                }
              />
            </span>
          </div>
        ))}
      </div>

      <div className="wlv-margin-legend" aria-hidden="true">
        <span>
          <i />
          Our wholesale rate
        </span>
        <span>
          <i className="wlv-dot--gold" />
          Margin you keep
        </span>
      </div>

      <div className="wlv-toast wlv-toast--margin" aria-hidden="true">
        <span className="wlv-toast-ic wlv-toast-ic--gold">
          <FiTag />
        </span>
        <span>
          <b>Wholesale in, retail out</b>
          <small>the spread is yours on every job</small>
        </span>
      </div>
    </div>
  );
}
