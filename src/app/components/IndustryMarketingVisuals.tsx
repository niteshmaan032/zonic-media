import type { CSSProperties } from "react";
import {
  FiCalendar,
  FiGlobe,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

import "@/app/style/industryMarketingVisuals.css";

/* Three CSS-animated signature visuals for the industry marketing pages,
   in the homepage console idiom (GbpConsole / LaunchConsole): pure markup,
   keyframe loops, `--n` stagger vars, no client JS. Colors read the ima-
   tokens with hm- fallbacks, so they inherit solar's gold theme and can be
   dropped into the hia-family / non-profit pages unchanged. */

export type IndustryVisualCopy = {
  /** Lowercase trade word used mid-sentence, e.g. "towing". */
  industry: string;
  /** Sentence-case trade word, e.g. "Towing". */
  industryTitle: string;
  /** Singular business noun, e.g. "towing company". */
  business: string;
  /** What a won job is called, e.g. "booked jobs", "new patients". */
  jobsNoun: string;
  /** Query shown in the search bar, e.g. "tow truck near me". */
  mapQuery: string;
};

/** Fallback copy derived from a slug like "dental-marketing-agency" for the
    generated-JSON pages, which carry no structured trade words. */
export function visualCopyFromSlug(slug: string): IndustryVisualCopy {
  const industry = slug
    .replace(/-marketing-agency$/, "")
    .replace(/-marketing$/, "")
    .replace(/-/g, " ");
  return {
    industry,
    industryTitle: industry.charAt(0).toUpperCase() + industry.slice(1),
    business: `${industry} business`,
    jobsNoun: "booked jobs",
    mapQuery: `${industry} near me`,
  };
}

/* ------------------------------------------------------------- rank race --- */

/** Map Pack race: your listing climbs 3 → 1, then the phone rings. */
export function MapPackRaceVisual({ copy }: { copy: IndustryVisualCopy }) {
  return (
    <div
      className="imv imv-rank"
      role="img"
      aria-label={`Google Map Pack simulation: your ${copy.business} climbs from third to first for the search “${copy.mapQuery}”, and a new call comes in from Google Maps.`}
    >
      <div className="imv-head" aria-hidden="true">
        <span className="imv-chip">
          <FiMapPin />
          Google Map Pack
        </span>
        <span className="imv-live">
          <i />
          Live ranking
        </span>
      </div>

      <div className="imv-search" aria-hidden="true">
        <FiSearch />
        <span>{copy.mapQuery}</span>
        <i className="imv-caret" />
      </div>

      <div className="imv-rank-board" aria-hidden="true">
        <div className="imv-rank-rail">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="imv-rank-rows">
          <div className="imv-rank-row imv-rank-row--a">
            <span className="imv-rank-ava">A</span>
            <span className="imv-rank-meta">
              <b>Competitor One</b>
              <small>
                <FiStar /> 4.2 · 87 reviews
              </small>
            </span>
          </div>
          <div className="imv-rank-row imv-rank-row--b">
            <span className="imv-rank-ava">B</span>
            <span className="imv-rank-meta">
              <b>Competitor Two</b>
              <small>
                <FiStar /> 3.9 · 54 reviews
              </small>
            </span>
          </div>
          <div className="imv-rank-row imv-rank-row--you">
            <span className="imv-rank-ava">Z</span>
            <span className="imv-rank-meta">
              <b>Your {copy.industryTitle} Business</b>
              <small>
                <FiStar /> 4.9 · 214 reviews
              </small>
            </span>
            <span className="imv-rank-you">You</span>
          </div>
        </div>
      </div>

      <div className="imv-rank-call" aria-hidden="true">
        <span className="imv-rank-call-ic">
          <FiPhone />
        </span>
        <span>
          <b>New call from Google</b>
          <small>Map Pack · just now</small>
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- lead engine --- */

const FLOW_NODES = [
  { icon: <FiSearch />, label: "Search & Maps" },
  { icon: <FiGlobe />, label: "Site & Profile" },
  { icon: <FiPhone />, label: "Calls & Leads" },
] as const;

/** Lead engine: pulses travel search → site → phone → booked job while a
    small feed of incoming leads cycles underneath. */
export function LeadEngineVisual({ copy }: { copy: IndustryVisualCopy }) {
  return (
    <div
      className="imv imv-flow"
      role="img"
      aria-label={`One connected marketing system for your ${copy.business}: searches and ads flow to your website and Google profile, turn into calls and leads, and end as ${copy.jobsNoun}.`}
    >
      <div className="imv-head" aria-hidden="true">
        <span className="imv-chip">
          <FiTrendingUp />
          One connected system
        </span>
        <span className="imv-live">
          <i />
          Running
        </span>
      </div>

      <div className="imv-flow-rail" aria-hidden="true">
        {FLOW_NODES.map((node, n) => (
          <div className="imv-flow-step" key={node.label}>
            <div
              className="imv-flow-node"
              style={{ "--n": n } as CSSProperties}
            >
              <span className="imv-flow-ic">{node.icon}</span>
              <small>{node.label}</small>
            </div>
            <span
              className="imv-flow-link"
              style={{ "--n": n } as CSSProperties}
            >
              <i />
            </span>
          </div>
        ))}
        <div className="imv-flow-step">
          <div
            className="imv-flow-node imv-flow-node--end"
            style={{ "--n": 3 } as CSSProperties}
          >
            <span className="imv-flow-ic">
              <FiCalendar />
            </span>
            <small>{copy.jobsNoun}</small>
          </div>
        </div>
      </div>

      <div className="imv-feed" aria-hidden="true">
        <span className="imv-feed-row" style={{ "--n": 0 } as CSSProperties}>
          <span className="imv-feed-ic">
            <FiPhone />
          </span>
          <span>
            <b>New call — Google Maps</b>
            <small>tracked &amp; recorded · just now</small>
          </span>
        </span>
        <span className="imv-feed-row" style={{ "--n": 1 } as CSSProperties}>
          <span className="imv-feed-ic imv-feed-ic--gold">
            <FiGlobe />
          </span>
          <span>
            <b>Quote request — website</b>
            <small>exclusive lead, never shared</small>
          </span>
        </span>
        <span className="imv-feed-row" style={{ "--n": 2 } as CSSProperties}>
          <span className="imv-feed-ic imv-feed-ic--green">
            <FiCalendar />
          </span>
          <span>
            <b>Job booked</b>
            <small>from a Google Ads click</small>
          </span>
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- growth curve --- */

const GROWTH_BARS = [26, 34, 31, 48, 57, 66, 78, 92];

/** Growth curve: monthly leads bars grow in, the headline number flips from
    the month-one figure to the month-eight figure. */
export function GrowthCurveVisual({ copy }: { copy: IndustryVisualCopy }) {
  return (
    <div
      className="imv imv-growth"
      role="img"
      aria-label={`Growth chart: ${copy.industry} calls and leads per month climbing steadily over eight months as local SEO, Google Ads, and your Google profile compound.`}
    >
      <div className="imv-head" aria-hidden="true">
        <span className="imv-chip">
          <FiTrendingUp />
          {copy.industryTitle} growth
        </span>
        <span className="imv-growth-pct">+216%</span>
      </div>

      <div className="imv-growth-stat" aria-hidden="true">
        <b className="imv-flip">
          <span className="imv-flip-b">12</span>
          <span className="imv-flip-a">38</span>
        </b>
        <span>calls &amp; leads / month</span>
      </div>

      <div className="imv-growth-chart" aria-hidden="true">
        {GROWTH_BARS.map((h, n) => (
          <i
            key={n}
            style={{ "--h": `${h}%`, "--n": n } as CSSProperties}
          />
        ))}
      </div>

      <div className="imv-growth-legend" aria-hidden="true">
        <span>
          <i />
          Local SEO
        </span>
        <span>
          <i className="imv-dot--gold" />
          Google Ads
        </span>
        <span>
          <i className="imv-dot--green" />
          Google Business Profile
        </span>
      </div>
    </div>
  );
}
