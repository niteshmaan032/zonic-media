"use client";

import Image from "next/image";
import { useState } from "react";

import Icon, { type IconName } from "./Icon";

type RoofingService = {
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

const SERVICES: RoofingService[] = [
  {
    id: "repair",
    label: "Roof Repair",
    icon: "wrench",
    heading: "Turn urgent leak searches into inspection calls.",
    body: "A repair pathway that moves homeowners from a visible problem to a fast, reassuring inspection request without making them hunt for the next step.",
    bullets: [
      "Emergency click-to-call actions",
      "Leak and damage problem paths",
      "Fast inspection request form",
    ],
    ctaLabel: "Build my roof repair pages",
    kicker: "LOCAL ROOF REPAIR",
    siteHeading: "Fast roof repair when every hour matters.",
    photo: "/images/free-website/free-roof/roof-repair.webp",
    photoAlt: "Roofer sealing copper chimney flashing on an asphalt shingle roof",
  },
  {
    id: "replacement",
    label: "Replacement",
    icon: "home",
    heading: "Make a high-value replacement feel easier to choose.",
    body: "Guide homeowners through materials, warranties, financing, timelines, and proof so they can request an estimate with confidence.",
    bullets: [
      "Material and warranty education",
      "Financing visibility",
      "Project gallery and social proof",
    ],
    ctaLabel: "Build my roof replacement pages",
    kicker: "ROOF REPLACEMENT",
    siteHeading: "A better roof. A stronger home.",
    photo: "/images/free-website/free-roof/roof-replacement.webp",
    photoAlt: "Roofing crew installing architectural shingles on a suburban home",
  },
  {
    id: "storm",
    label: "Storm Damage",
    icon: "wind",
    heading: "Be ready when hail and wind create sudden demand.",
    body: "A storm-focused experience built for urgent local traffic, damage inspections, insurance-ready documentation, and fast campaign launches.",
    bullets: [
      "Storm-specific landing paths",
      "Inspection and insurance guidance",
      "Campaign-ready tracking",
    ],
    ctaLabel: "Build my storm damage pages",
    kicker: "STORM RESPONSE TEAM",
    siteHeading: "Storm damage help starts here.",
    photo: "/images/free-website/free-roof/storm-damage.webp",
    photoAlt: "Roof inspector documenting storm damage on a shingle roof",
  },
  {
    id: "shingle",
    label: "Shingle Roofing",
    icon: "layers",
    heading: "Help homeowners compare shingles without losing the lead.",
    body: "Show architectural shingle options, colors, performance, warranties, and installation quality while keeping estimate actions visible.",
    bullets: [
      "Product and color pathways",
      "Manufacturer trust signals",
      "Estimate CTAs beside key decisions",
    ],
    ctaLabel: "Build my shingle roofing pages",
    kicker: "SHINGLE ROOFING",
    siteHeading: "Architectural shingles installed right.",
    photo: "/images/free-website/free-roof/shingle-roofing.webp",
    photoAlt: "Two roofers installing architectural shingles on a steep pitched roof",
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: "building",
    heading: "Give property managers a direct route to your team.",
    body: "Present commercial systems, maintenance, repairs, inspections, safety standards, and service capacity in a concise B2B flow.",
    bullets: [
      "System-specific service pages",
      "Maintenance and inspection paths",
      "Commercial enquiry qualification",
    ],
    ctaLabel: "Build my commercial roofing pages",
    kicker: "COMMERCIAL ROOFING",
    siteHeading: "Flat roof systems, maintained properly.",
    photo: "/images/free-website/free-roof/commercial-roofing.webp",
    photoAlt: "Commercial roofers inspecting a flat membrane roof on a city building",
  },
  {
    id: "gutter-siding",
    label: "Gutters + Siding",
    icon: "droplets",
    heading: "Sell the work that comes attached to the roof.",
    body: "Gutters, guards, fascia, and siding are the add-ons homeowners already need — given their own pathway, they lift the value of every roofing job.",
    bullets: [
      "Attach-on service pathways",
      "Bundled estimate requests",
      "Exterior project galleries",
    ],
    ctaLabel: "Build my gutter and siding pages",
    kicker: "GUTTERS & SIDING",
    siteHeading: "Exteriors that protect the whole home.",
    photo: "/images/free-website/free-roof/gutters-siding.webp",
    photoAlt: "Contractor fitting a seamless gutter along the fascia of a home",
  },
];

export default function RoofingServiceTabs() {
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
                <Icon name={service.icon} /> Roofing website path
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

            <div className="niche-visual roofing-niche-visual">
              <div className="niche-browser">
                <div className="niche-browser-bar">
                  <i />
                  <i />
                  <i />
                  <span>yourroofingcompany.com</span>
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
                    <span>Projects</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Free inspection
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Trusted local roofers. Clear communication. Workmanship
                      built to protect your property.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book inspection</b>
                      <b>View roofing services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local homeowners</small>
                    </div>
                  </div>
                  <div className="niche-photo roofing-photo">
                    <Image
                      src={service.photo}
                      alt={service.photoAlt}
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
                    <Icon name={service.icon} />
                    <Icon name="menu" />
                  </div>
                  <span>{service.kicker}</span>
                  <h5>{service.siteHeading}</h5>
                  <div
                    className="niche-mobile-image roofing-mobile-image"
                    style={{ backgroundImage: `url(${service.photo})` }}
                  />
                  <div className="niche-mobile-button">Book inspection</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to win roofing work</strong>
                  <small>From local search to inspection request</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
