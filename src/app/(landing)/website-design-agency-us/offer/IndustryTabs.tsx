"use client";

import { useState } from "react";

import Icon, { type IconName } from "./Icon";

type Niche = {
  id: string;
  label: string;
  icon: IconName;
  accent: string;
  soft: string;
  heading: string;
  body: string;
  bullets: string[];
  domain: string;
  miniName: string;
  kicker: string;
  siteHeading: string;
};

const NICHES: Niche[] = [
  {
    id: "roofing",
    label: "Roofing",
    icon: "home",
    accent: "#f05a36",
    soft: "#fff0ea",
    heading: "Turn urgent roof searches into inspection calls.",
    body: "A trust-first roofing website built around storm damage, repair, replacement, financing, and the service areas where you want to rank.",
    bullets: [
      "Emergency-ready calls to action",
      "Service and location page structure",
      "Reviews, licenses, and warranty proof",
    ],
    domain: "roofingcompany.com",
    miniName: "Roofing",
    kicker: "LOCAL ROOFING EXPERTS",
    siteHeading: "A stronger roof starts here.",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "droplets",
    accent: "#1677ff",
    soft: "#eaf4ff",
    heading: "Make it easy to call when every minute matters.",
    body: "A fast, mobile-first plumbing website that puts emergency service, common repairs, transparent reassurance, and direct booking in the right order.",
    bullets: [
      "One-tap emergency calling",
      "Problem-focused service navigation",
      "Clear availability and coverage",
    ],
    domain: "plumbingcompany.com",
    miniName: "Plumbing",
    kicker: "24/7 PLUMBING RESPONSE",
    siteHeading: "Fast help for every leak.",
  },
  {
    id: "hvac",
    label: "HVAC",
    icon: "wind",
    accent: "#04a88a",
    soft: "#e8fbf7",
    heading: "Build year-round demand for comfort services.",
    body: "A conversion-focused HVAC experience for repairs, replacements, maintenance plans, indoor air quality, and seasonal service campaigns.",
    bullets: [
      "Heating and cooling pathways",
      "Maintenance plan promotion",
      "Financing and rebate visibility",
    ],
    domain: "hvaccompany.com",
    miniName: "HVAC",
    kicker: "HEATING & COOLING",
    siteHeading: "Comfort you can count on.",
  },
  {
    id: "cleaning",
    label: "Commercial Cleaning",
    icon: "sparkles",
    accent: "#8b5cf6",
    soft: "#f2edff",
    heading: "Present a polished company before the walkthrough.",
    body: "A professional commercial cleaning site that explains facility types, service standards, scheduling, quality control, and quote requests without clutter.",
    bullets: [
      "Facility-specific service paths",
      "Quality and safety credentials",
      "Simple walkthrough requests",
    ],
    domain: "cleaningcompany.com",
    miniName: "Commercial",
    kicker: "COMMERCIAL CLEANING",
    siteHeading: "A cleaner workplace, every day.",
  },
  {
    id: "garage",
    label: "Garage Door",
    icon: "door",
    accent: "#e99b10",
    soft: "#fff7df",
    heading: "Win repair calls and showcase higher-value installs.",
    body: "A local garage door website that balances urgent repairs with new doors, openers, maintenance, galleries, and service-area visibility.",
    bullets: [
      "Repair-first mobile actions",
      "Door and opener galleries",
      "Local service-area signals",
    ],
    domain: "garagecompany.com",
    miniName: "Garage",
    kicker: "GARAGE DOOR PROS",
    siteHeading: "Open the door to better service.",
  },
  {
    id: "landscaping",
    label: "Landscaping",
    icon: "leaf",
    accent: "#46a338",
    soft: "#edf8e8",
    heading: "Let finished projects sell the next transformation.",
    body: "A visual landscaping website that gives outdoor projects room to shine while guiding visitors toward design, installation, maintenance, and estimates.",
    bullets: [
      "Project-led visual storytelling",
      "Residential and commercial paths",
      "Seasonal service promotion",
    ],
    domain: "landscapingcompany.com",
    miniName: "Landscaping",
    kicker: "LANDSCAPE DESIGN",
    siteHeading: "Outdoor spaces made remarkable.",
  },
];

export default function IndustryTabs() {
  const [activeId, setActiveId] = useState(NICHES[0].id);

  return (
    <div className="niche-tabs">
      <div className="niche-tab-list" role="tablist">
        {NICHES.map((niche) => {
          const active = niche.id === activeId;
          return (
            <button
              key={niche.id}
              type="button"
              role="tab"
              className="niche-tab-trigger"
              data-state={active ? "active" : "inactive"}
              aria-selected={active}
              onClick={() => setActiveId(niche.id)}
            >
              <Icon name={niche.icon} />
              <span>{niche.label}</span>
            </button>
          );
        })}
      </div>

      {NICHES.map((niche) => {
        const active = niche.id === activeId;
        return (
          <div
            key={niche.id}
            className="niche-panel"
            role="tabpanel"
            data-state={active ? "active" : "inactive"}
            hidden={!active}
          >
            <div className="niche-content">
              <div
                className="niche-label"
                style={{ color: niche.accent, background: niche.soft }}
              >
                <Icon name={niche.icon} /> Free website offer for {niche.label}
              </div>
              <h3>{niche.heading}</h3>
              <p>{niche.body}</p>
              <ul>
                {niche.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name="check" /> {bullet}
                  </li>
                ))}
              </ul>
              <a className="niche-link section-button" href="#contact">
                <span>Claim my free {niche.label} website</span>
                <i>
                  <Icon name="arrow-up-right" />
                </i>
              </a>
            </div>

            <div
              className="niche-visual"
              style={
                {
                  "--niche-accent": niche.accent,
                  "--niche-soft": niche.soft,
                } as React.CSSProperties
              }
            >
              <div className="niche-browser">
                <div className="niche-browser-bar">
                  <i />
                  <i />
                  <i />
                  <span>{niche.domain}</span>
                </div>
                <div className="niche-site-nav">
                  <div className="niche-mini-logo">
                    <Icon name={niche.icon} />
                    <b>{niche.miniName}</b>
                    <span>PRO</span>
                  </div>
                  <div className="niche-mini-links">
                    <span>Services</span>
                    <span>About</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Call now
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{niche.kicker}</span>
                    <h4>{niche.siteHeading}</h4>
                    <p>
                      Trusted local service. Clear communication. Results built
                      around your property.
                    </p>
                    <div className="niche-site-actions">
                      <b>Request service</b>
                      <b>Explore services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local customers</small>
                    </div>
                  </div>
                  <div className="niche-photo">
                    <div className="niche-photo-mark">
                      <Icon name={niche.icon} />
                    </div>
                    <span>PROJECT IMAGE</span>
                    <i className="niche-shape niche-shape--one" />
                    <i className="niche-shape niche-shape--two" />
                  </div>
                </div>
              </div>

              <div className="niche-mobile">
                <div className="niche-mobile-notch" />
                <div className="niche-mobile-content">
                  <div className="niche-mobile-top">
                    <Icon name={niche.icon} />
                    <Icon name="wrench" />
                  </div>
                  <span>{niche.kicker}</span>
                  <h5>{niche.siteHeading}</h5>
                  <div className="niche-mobile-image">
                    <Icon name={niche.icon} />
                  </div>
                  <div className="niche-mobile-button">Request service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Designed to convert</strong>
                  <small>Clear path from search to enquiry</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
