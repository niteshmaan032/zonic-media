"use client";

import { useState } from "react";
import Image from "next/image";

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
  /** Pulled from that niche's own offer lander so both pages show one image. */
  photo: string;
  photoAlt: string;
};

const NICHES: Niche[] = [
  {
    id: "roofing",
    label: "Roofing",
    icon: "home",
    accent: "#f05a36",
    soft: "#fff0ea",
    heading: "Earn trust before the ladder goes up.",
    body: "Storm, repair and replacement pages, warranty proof and an inspection request form, laid out for homeowners comparing roofers in your area.",
    bullets: [
      "Inspection request on every page",
      "City pages for each service area",
      "Warranty, license and review proof",
    ],
    domain: "roofingcompany.com",
    miniName: "Roofing",
    kicker: "LOCAL ROOFING EXPERTS",
    siteHeading: "A stronger roof starts here.",
    photo: "/images/free-website/free-roof/roof-repair.webp",
    photoAlt: "Roof repair work on a residential roof",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    icon: "droplets",
    accent: "#1677ff",
    soft: "#eaf4ff",
    heading: "Put your number where a panicked homeowner looks.",
    body: "A quick-loading plumbing site that leads with emergency help, then drains, water heaters and repairs, with booking one tap away on mobile.",
    bullets: [
      "Sticky call button on mobile",
      "Problem-first service menu",
      "Hours and coverage shown clearly",
    ],
    domain: "plumbingcompany.com",
    miniName: "Plumbing",
    kicker: "24/7 PLUMBING RESPONSE",
    siteHeading: "Fast help for every leak.",
    photo: "/images/free-website/free-plumbing/emergency-plumbing.webp",
    photoAlt: "Plumber handling an emergency plumbing call",
  },
  {
    id: "hvac",
    label: "HVAC",
    icon: "wind",
    accent: "#04a88a",
    soft: "#e8fbf7",
    heading: "Keep the schedule full in mild months.",
    body: "An HVAC site that covers repair, replacement, tune-ups and air quality, and gives maintenance plans and financing their own clear pages.",
    bullets: [
      "Cooling and heating service pages",
      "Maintenance plan sign-up path",
      "Financing and rebate details",
    ],
    domain: "hvaccompany.com",
    miniName: "HVAC",
    kicker: "HEATING & COOLING",
    siteHeading: "Comfort you can count on.",
    photo: "/images/free-website/free-hvac/ac-repair.webp",
    photoAlt: "Technician servicing an air conditioning unit",
  },
  {
    id: "cleaning",
    label: "Commercial Cleaning",
    icon: "sparkles",
    accent: "#8b5cf6",
    soft: "#f2edff",
    heading: "Look contract-ready before the walkthrough.",
    body: "A clean, professional site for commercial cleaning that explains facility types, schedules, quality checks and how to request a walkthrough.",
    bullets: [
      "Pages for each facility type",
      "Insurance and quality standards",
      "Short walkthrough request form",
    ],
    domain: "cleaningcompany.com",
    miniName: "Commercial",
    kicker: "COMMERCIAL CLEANING",
    siteHeading: "A cleaner workplace, every day.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Commercial cleaning team at work",
  },
  {
    id: "garage",
    label: "Garage Door",
    icon: "door",
    accent: "#e99b10",
    soft: "#fff7df",
    heading: "Win the broken-spring call and the new-door sale.",
    body: "A garage door site that puts repair calls first, then shows doors, openers and maintenance with galleries and service-area pages.",
    bullets: [
      "Repair calls first on mobile",
      "Door and opener galleries",
      "Service-area pages for each city",
    ],
    domain: "garagecompany.com",
    miniName: "Garage",
    kicker: "GARAGE DOOR PROS",
    siteHeading: "Open the door to better service.",
    photo: "/images/free-website/free-garage-door/emergency-repair.webp",
    photoAlt: "Technician repairing a garage door",
  },
  {
    id: "landscaping",
    label: "Landscaping",
    icon: "leaf",
    accent: "#46a338",
    soft: "#edf8e8",
    heading: "Let your best yards do the selling.",
    body: "A visual landscaping site where finished projects lead, with clear paths to design, installation, maintenance plans and estimate requests.",
    bullets: [
      "Before-and-after project galleries",
      "Residential and commercial paths",
      "Seasonal service promotions",
    ],
    domain: "landscapingcompany.com",
    miniName: "Landscaping",
    kicker: "LANDSCAPE DESIGN",
    siteHeading: "Outdoor spaces made remarkable.",
    photo: "/images/free-website/free-landscaping/landscape-design.webp",
    photoAlt: "Designed landscaping in a residential yard",
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
                  <div className="niche-photo fwd-photo">
                    <Image
                      src={niche.photo}
                      alt={niche.photoAlt}
                      fill
                      sizes="(max-width: 760px) 45vw, 30vw"
                    />
                    <span>
                      <Icon name="shield" /> LICENSED · INSURED · LOCAL
                    </span>
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
                  <div
                    className="niche-mobile-image fwd-mobile-image"
                    style={{ backgroundImage: `url(${niche.photo})` }}
                  />
                  <div className="niche-mobile-button">Request service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built for local search</strong>
                  <small>From first visit to booked job</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
