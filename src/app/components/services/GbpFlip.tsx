import type { CSSProperties } from "react";
import { FiLock, FiNavigation, FiPhone, FiStar } from "react-icons/fi";

/**
 * Google Business Profile visual: a listing card that loops from "Suspended"
 * (red banner, lock overlay, dead action buttons) to "Live on Google"
 * (green banner, actions enabled), with the reinstatement steps lighting up
 * in sequence.
 *
 * The overlay starts at opacity 0 and animates *in*, so the resting state — and
 * the prefers-reduced-motion state — is the live profile.
 *
 * Styling: `.svc-page .svc-gbp*` in servicesHub.css.
 */

const steps = ["Audit", "Fix", "Appeal", "Live"];

export default function GbpFlip() {
  return (
    <div
      className="svc-gbp"
      role="img"
      aria-label="A Google Business Profile moving from a suspended state, where calls and directions are switched off, to a reinstated state that is live on Google Maps after an audit, fix and appeal."
    >
      <div className="svc-gbp-card">
        <div className="svc-gbp-status">
          <span className="svc-gbp-dot" aria-hidden="true" />
          <span className="svc-gbp-state svc-flip">
            <span className="svc-flip-b">Profile suspended</span>
            <span className="svc-flip-a">Live on Google Maps</span>
          </span>
          <span className="svc-gbp-chip">
            <span className="svc-flip">
              <span className="svc-flip-b">Suspended</span>
              <span className="svc-flip-a">Reinstated</span>
            </span>
          </span>
        </div>

        <div className="svc-gbp-body">
          <div className="svc-gbp-cover" aria-hidden="true">
            <span className="svc-gbp-map-line" />
            <span className="svc-gbp-map-line" />
            <span className="svc-gbp-map-line" />
            <span className="svc-gbp-pin" />
          </div>

          <div className="svc-gbp-logo" aria-hidden="true">
            Z
          </div>
          <p className="svc-gbp-name">Your Business</p>
          <p className="svc-gbp-meta">
            <span className="svc-gbp-stars" aria-hidden="true">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </span>
            4.9 · 214 reviews
          </p>
          <p className="svc-gbp-cat">Local service · Open now</p>

          <div className="svc-gbp-actions">
            <span className="svc-gbp-act is-primary">
              <FiPhone aria-hidden="true" />
              Call
            </span>
            <span className="svc-gbp-act">
              <FiNavigation aria-hidden="true" />
              Directions
            </span>
          </div>

          <div className="svc-gbp-overlay" aria-hidden="true">
            <span className="svc-gbp-lock">
              <FiLock />
            </span>
            <strong>Profile suspended</strong>
            <small>Hidden from Maps and local search</small>
          </div>
        </div>
      </div>

      <div className="svc-gbp-recovery">
        <div className="svc-gbp-recovery-top">
          <span>Reinstatement progress</span>
          <b className="svc-gbp-pct svc-flip" aria-hidden="true">
            <span className="svc-flip-b">18%</span>
            <span className="svc-flip-a">100%</span>
          </b>
        </div>
        <div className="svc-gbp-track" aria-hidden="true">
          <span className="svc-gbp-fill" />
        </div>
        <ul className="svc-gbp-steps" aria-hidden="true">
          {steps.map((step, i) => (
            <li key={step} style={{ "--i": i } as CSSProperties}>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
