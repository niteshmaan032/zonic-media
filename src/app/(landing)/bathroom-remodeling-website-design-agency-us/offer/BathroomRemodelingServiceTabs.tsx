"use client";

import Image from "next/image";
import { useState } from "react";

import Icon, { type IconName } from "./Icon";

type ServicePath = {
  id: string;
  label: string;
  icon: IconName;
  heading: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
  kicker: string;
  siteHeading: string;
  photo: string;
  photoAlt: string;
};

const SERVICES: ServicePath[] = [
  {
    id: "shower-remodels",
    label: "Shower Remodels",
    icon: "layout",
    heading: "Win the walk-in shower jobs homeowners search for.",
    body: "A shower remodel page with real finished photos, tile and glass options, and a simple consult form, so homeowners can picture the result before they call.",
    bullets: [
      "Walk-in, curbless and tile shower photos",
      "Glass, niche and fixture options explained",
      "Consult form and tap-to-call on mobile",
    ],
    ctaLabel: "Plan my shower remodel page",
    kicker: "SHOWER REMODELS",
    siteHeading: "Walk-in showers, built right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "tub-conversions",
    label: "Tub Conversions",
    icon: "wrench",
    heading: "Catch homeowners ready to swap the tub for a shower.",
    body: "A tub-to-shower conversion page that covers timelines, safety features and before-and-after photos, written for owners who want an easier daily routine.",
    bullets: [
      "Tub-to-shower before-and-after photos",
      "Timeline and what install day looks like",
      "Short quote form that works on a phone",
    ],
    ctaLabel: "Plan my tub conversion page",
    kicker: "TUB CONVERSIONS",
    siteHeading: "Swap the tub. Keep the space.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "full-bathroom-remodels",
    label: "Full Bathroom Remodels",
    icon: "target",
    heading: "Sell the full gut remodel with a clear plan and real photos.",
    body: "A full remodel page that walks through design, demo, build and final walkthrough, so high-budget prospects trust your process before the first visit.",
    bullets: [
      "Step-by-step remodel process section",
      "Project gallery sorted by bathroom style",
      "Financing and warranty details if offered",
    ],
    ctaLabel: "Plan my full remodel page",
    kicker: "FULL BATHROOM REMODELS",
    siteHeading: "The whole bathroom, redone.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "accessible-bathrooms",
    label: "Accessible Bathrooms",
    icon: "layers",
    heading: "Reach families planning a safer, accessible bathroom.",
    body: "An accessible bathroom page for curbless showers, grab bars and wider entries, written in plain words for older owners and the family helping them.",
    bullets: [
      "Curbless shower and grab bar examples",
      "Aging-in-place questions answered simply",
      "Large tap targets and easy-read layout",
    ],
    ctaLabel: "Plan my accessible bath page",
    kicker: "ACCESSIBLE BATHROOMS",
    siteHeading: "Safer baths for every age.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "vanities-tile",
    label: "Vanities & Tile",
    icon: "users",
    heading: "Turn smaller vanity and tile jobs into steady work.",
    body: "A vanity and tile page that shows material options, finished floors and walls, and makes a quick update as easy to request as a full remodel.",
    bullets: [
      "Vanity, tile floor and wall photo sets",
      "Material and finish choices laid out",
      "Fast request form for smaller projects",
    ],
    ctaLabel: "Plan my vanity and tile page",
    kicker: "VANITIES & TILE",
    siteHeading: "New vanity. Fresh tile.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "design-consultation",
    label: "Design Consultation",
    icon: "clipboard",
    heading: "Make booking a design consult the easy next step.",
    body: "A design consultation page that explains what happens at the visit, what to have ready and what comes after, so more visitors book instead of browsing.",
    bullets: [
      "What happens at the consult, step by step",
      "Booking form with preferred visit times",
      "Gallery links to spark design ideas",
    ],
    ctaLabel: "Plan my design consult page",
    kicker: "DESIGN CONSULTATION",
    siteHeading: "Start with a design consult.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
];

export default function BathroomRemodelingServiceTabs() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  return (
    <div className="niche-tabs">
      <div className="niche-tab-list" role="tablist">
        {SERVICES.map((service) => {
          const active = service.id === activeId;
          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              className="niche-tab-trigger"
              data-state={active ? "active" : "inactive"}
              aria-selected={active}
              onClick={() => setActiveId(service.id)}
            >
              <Icon name={service.icon} />
              <span>{service.label}</span>
            </button>
          );
        })}
      </div>

      {SERVICES.map((service) => {
        const active = service.id === activeId;
        return (
          <div
            key={service.id}
            className="niche-panel"
            role="tabpanel"
            data-state={active ? "active" : "inactive"}
            hidden={!active}
          >
            <div className="niche-content">
              <div className="niche-label">
                <Icon name={service.icon} /> Bathroom remodeling page plan
              </div>
              <h3>{service.heading}</h3>
              <p>{service.body}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Icon name="check" /> {bullet}
                  </li>
                ))}
              </ul>
              <a className="niche-link section-button" href="#contact">
                <span>{service.ctaLabel}</span>
                <i>
                  <Icon name="arrow-up-right" />
                </i>
              </a>
            </div>

            <div className="niche-visual industry-niche-visual">
              <div className="niche-browser">
                <div className="niche-browser-bar">
                  <i />
                  <i />
                  <i />
                  <span>bathroomremodelingpros.com</span>
                </div>
                <div className="niche-site-nav">
                  <span className="mini-logo">
                    <Image
                      src="/images/logo.webp"
                      alt="Zonic Media"
                      width={400}
                      height={113}
                    />
                  </span>
                  <div className="niche-mini-links">
                    <span>Services</span>
                    <span>About</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Get a quote
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Tidy job sites. Clear timelines. A finished bathroom you will love to use every day.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book a consult</b>
                      <b>See remodels</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Rated by local homeowners</small>
                    </div>
                  </div>
                  <div className="niche-photo industry-photo">
                    <Image
                      src={service.photo}
                      alt={service.photoAlt}
                      fill
                      sizes="(max-width: 760px) 45vw, 30vw"
                    />
                    <span>
                      <Icon name="shield" /> DESIGN · DEMO · INSTALL
                    </span>
                  </div>
                </div>
              </div>

              <div className="niche-mobile">
                <div className="niche-mobile-notch" />
                <div className="niche-mobile-content">
                  <div className="niche-mobile-top">
                    <Icon name={service.icon} />
                    <Icon name="menu" />
                  </div>
                  <span>{service.kicker}</span>
                  <h5>{service.siteHeading}</h5>
                  <div
                    className="niche-mobile-image industry-mobile-image"
                    style={{ backgroundImage: `url(${service.photo})` }}
                  />
                  <div className="niche-mobile-button">Book a consult</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to book consults</strong>
                  <small>From remodel search to consult</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
