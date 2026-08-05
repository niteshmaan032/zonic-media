/**
 * Google Ads visual: a Sponsored search result preview sitting above a budget
 * bar that reallocates from wasted spend to converting spend, plus three
 * metrics. The animation runs the split from 62% wasted down to 11%, so the
 * resting state is the optimised account.
 *
 * Styling: `.svc-page .svc-ads*` in servicesHub.css. Figures are illustrative.
 */

const metrics = [
  { k: "Cost per lead", v: "$41", d: "−47%", dir: "down" },
  { k: "Conversion rate", v: "9.4%", d: "+3.6pt", dir: "up" },
  { k: "Return on ad spend", v: "6.2×", d: "+2.9×", dir: "up" },
];

export default function AdsPanel() {
  return (
    <div
      className="svc-ads"
      role="img"
      aria-label="A Google Ads account view: a sponsored search listing, a budget bar shifting from 62 percent wasted spend down to 11 percent, a 41 dollar cost per lead, a 9.4 percent conversion rate and a 6.2 times return on ad spend."
    >
      <div className="svc-ads-window">
        <div className="svc-ads-serp">
          <span className="svc-ads-serp-badge">Sponsored</span>
          <p className="svc-ads-serp-url">yourbusiness.com/emergency-repair</p>
          <p className="svc-ads-serp-title">
            24/7 Emergency Repair · Same-Day Service
          </p>
          <p className="svc-ads-serp-desc">
            Licensed local technicians, upfront pricing and a call answered in
            under 60 seconds.
          </p>
          <div className="svc-ads-serp-links" aria-hidden="true">
            <span>Book online</span>
            <span>Pricing</span>
            <span>Reviews</span>
          </div>
          <span className="svc-ads-cursor" aria-hidden="true" />
        </div>

        <div className="svc-ads-budget">
          <div className="svc-ads-budget-head">
            <span>Where the budget goes</span>
            <b>$4,000 / mo</b>
          </div>
          <div className="svc-ads-track" aria-hidden="true">
            <span className="svc-ads-waste" />
            <span className="svc-ads-convert" />
          </div>
          <div className="svc-ads-legend">
            <span className="svc-ads-key is-waste">
              Wasted on wrong-intent clicks
              <b className="svc-ads-num svc-flip" aria-hidden="true">
                <i className="svc-flip-b">62%</i>
                <i className="svc-flip-a">11%</i>
              </b>
            </span>
            <span className="svc-ads-key is-convert">
              Spend that converts
              <b className="svc-ads-num svc-flip" aria-hidden="true">
                <i className="svc-flip-b">38%</i>
                <i className="svc-flip-a">89%</i>
              </b>
            </span>
          </div>
        </div>

        <div className="svc-ads-metrics">
          {metrics.map((m) => (
            <div key={m.k} className="svc-ads-metric">
              <span className="svc-ads-metric-k">{m.k}</span>
              <strong className="svc-ads-metric-v">{m.v}</strong>
              <span
                className={`svc-ads-metric-d${m.dir === "up" ? " is-up" : " is-down"}`}
              >
                {m.d}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="svc-visual-note">
        Illustrative account view based on a typical local services campaign.
      </p>
    </div>
  );
}
