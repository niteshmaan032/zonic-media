/**
 * Full-width animated band 2 — "back in the Map Pack".
 *
 * A CSS-only console: the local pack rebuilds with the reinstated listing
 * rising into the #1 slot, the call counter ticks up and the weekly bars grow.
 * No photos, no JS — the loop rests in the recovered state so
 * prefers-reduced-motion shows the finished result.
 */
export default function GmbMapPackConsole() {
  const bars = [34, 41, 38, 52, 63, 78, 96];

  return (
    <section className="gmb-band gmb-band--map">
      <div className="gmb-band-inner gmb-band-inner--rev">
        <div
          className="gmb-map"
          role="img"
          aria-label="A Google Map Pack rebuilding after reinstatement: the recovered business climbs into the number one local result, calls from the profile rise week over week, and directions and website clicks return."
        >
          <div className="gmb-map-head">
            <span className="gmb-map-search" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.2-3.2" />
              </svg>
              emergency service near me
              <i className="gmb-map-caret" />
            </span>
            <span className="gmb-map-tag" aria-hidden="true">
              Live ranking
            </span>
          </div>

          <ul className="gmb-map-pack" aria-hidden="true">
            <li className="gmb-map-row gmb-map-row--you">
              <span className="gmb-map-rank">1</span>
              <span className="gmb-map-av">Z</span>
              <span className="gmb-map-biz">
                <b>Your Business</b>
                <small>
                  <i className="gmb-map-stars">★★★★★</i> 4.9 · 214 reviews · Open
                </small>
              </span>
              <span className="gmb-map-you">You</span>
            </li>
            <li className="gmb-map-row" style={{ ["--i" as string]: 1 }}>
              <span className="gmb-map-rank">2</span>
              <span className="gmb-map-av gmb-map-av--a">A</span>
              <span className="gmb-map-biz">
                <b>Competitor One</b>
                <small>
                  <i className="gmb-map-stars">★★★★</i> 4.2 · 87 reviews
                </small>
              </span>
            </li>
            <li className="gmb-map-row" style={{ ["--i" as string]: 2 }}>
              <span className="gmb-map-rank">3</span>
              <span className="gmb-map-av gmb-map-av--b">B</span>
              <span className="gmb-map-biz">
                <b>Competitor Two</b>
                <small>
                  <i className="gmb-map-stars">★★★</i> 3.9 · 54 reviews
                </small>
              </span>
            </li>
          </ul>

          <div className="gmb-map-stats" aria-hidden="true">
            <div className="gmb-map-calls">
              <span className="gmb-map-calls-lbl">Calls from your profile</span>
              <span className="gmb-map-calls-num">
                <span className="gmb-map-roll">
                  <span className="gmb-map-roll-in">
                    <b>0</b>
                    <b>96</b>
                  </span>
                </span>
                <small>this week</small>
              </span>
            </div>
            <div className="gmb-map-bars">
              {bars.map((h, i) => (
                <i
                  key={h}
                  style={{ ["--h" as string]: `${h}%`, ["--i" as string]: i }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="gmb-band-copy">
          <span className="eyebrow">After the appeal lands</span>
          <h2>Back on the Map, Back in the Phone Queue</h2>
          <p>
            Reinstatement is only worth what it earns you. Once the listing is
            live we rebuild the signals that decide the local pack — categories,
            proximity relevance, reviews and posting cadence — so the profile
            returns to where customers actually find it.
          </p>
          <ul className="gmb-band-points">
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Ranking recovery, not just re-listing
            </li>
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Calls, directions &amp; clicks tracked monthly
            </li>
            <li>
              <span className="gmb-band-tick" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              Profile hardened against a repeat suspension
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
