/**
 * Full-width animated band 1 — "suspension audit scanner".
 *
 * A CSS-only console: a scan line sweeps the profile signal list, each row
 * resolves from "checking…" to a pass/fail state, and the verdict card lands
 * on the root cause plus the recovery window. No photos, no JS — the loop
 * rests in the finished state so prefers-reduced-motion shows the result.
 */
export default function GmbAuditScanner() {
  const rows = [
    { label: "Business name & categories", note: "Matches storefront signage", state: "ok" },
    { label: "Service-area & address", note: "PO box listed as street address", state: "bad" },
    { label: "Website & landing page", note: "NAP consistent across the site", state: "ok" },
    { label: "Hours & attributes", note: "Edited 4× in 30 days", state: "warn" },
    { label: "Reviews & Q&A", note: "No policy violations found", state: "ok" },
    { label: "Verification history", note: "Video verification never completed", state: "bad" },
  ];

  return (
    <section className="gmb-band gmb-band--scan">
      <div className="gmb-band-inner">
        <div className="gmb-band-copy">
          <span className="eyebrow">Free suspension audit</span>
          <h2>We Find the Real Reason Google Pulled Your Profile</h2>
          <p>
            Guessing costs you appeals. Every case starts with a full signal
            audit — the same checklist Google&apos;s reviewers work from — so the
            appeal fixes the actual violation instead of arguing with the
            algorithm.
          </p>
          <ul className="gmb-band-points">
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              23-point profile &amp; compliance check
            </li>
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Root cause named in plain English
            </li>
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Reinstatement odds before you commit
            </li>
          </ul>
        </div>

        <div
          className="gmb-scan"
          role="img"
          aria-label="An audit console scanning a Google Business Profile: name and categories, service area, website, hours, reviews and verification history are checked in turn, flagging a PO box address and an incomplete video verification as the suspension cause."
        >
          <div className="gmb-scan-head">
            <span className="gmb-scan-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="gmb-scan-title">Profile audit · Your Business</span>
            <span className="gmb-scan-live" aria-hidden="true">
              <i />
              Scanning
            </span>
          </div>

          <ul className="gmb-scan-rows" aria-hidden="true">
            {rows.map((row, i) => (
              <li
                key={row.label}
                className={`gmb-scan-row is-${row.state}`}
                style={{ ["--i" as string]: i }}
              >
                <span className="gmb-scan-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path className="gmb-scan-ok" d="M20 6 9 17l-5-5" />
                    <path className="gmb-scan-no" d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
                <span className="gmb-scan-label">
                  <b>{row.label}</b>
                  <small>{row.note}</small>
                </span>
                <span className="gmb-scan-state" />
              </li>
            ))}
            <span className="gmb-scan-beam" />
          </ul>

          <div className="gmb-scan-verdict" aria-hidden="true">
            <div className="gmb-scan-verdict-top">
              <span className="gmb-scan-badge">Root cause found</span>
              <span className="gmb-scan-odds">
                Reinstatement odds <b>High</b>
              </span>
            </div>
            <p>
              Address &amp; verification mismatch — fixable with a documented
              appeal. Typical resolution <b>5–7 business days</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
