"use client";

import Image from "next/image";
import { useState } from "react";

import Icon, { type IconName } from "./Icon";

type HvacService = {
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

const SERVICES: HvacService[] = [
  {
    id: "ac-repair",
    label: "AC Repair",
    icon: "snowflake",
    heading: "Turn a no-cool emergency into a booked AC repair.",
    body: "An AC repair page that calms an overheated homeowner, shows when you can get there and keeps call and booking buttons in easy reach on any phone.",
    bullets: [
      "Tap-to-call for no-cool calls",
      "Symptom-based repair guides",
      "Quick service request form",
    ],
    ctaLabel: "Build my AC repair pages",
    kicker: "FAST AC REPAIR",
    siteHeading: "Cool air restored without the runaround.",
    photo: "/images/free-website/free-hvac/ac-repair.webp",
    photoAlt: "HVAC technician servicing an outdoor air conditioning unit",
  },
  {
    id: "heating",
    label: "Heating",
    icon: "flame",
    heading: "Be the first call when the furnace stops.",
    body: "Furnace and heating pages that explain repair or replace options, show safety checks, warranties and financing, and keep scheduling buttons in view.",
    bullets: [
      "Furnace repair and install pages",
      "Safety checks and warranties",
      "Financing shown up front",
    ],
    ctaLabel: "Build my heating pages",
    kicker: "HEATING SERVICE",
    siteHeading: "Reliable heat when your home needs it most.",
    photo: "/images/free-website/free-hvac/furnace-heating.webp",
    photoAlt: "Technician diagnosing a residential gas furnace",
  },
  {
    id: "heat-pumps",
    label: "Heat Pumps",
    icon: "wind",
    heading: "Sell high-efficiency heat pumps in plain words.",
    body: "Help homeowners compare heat pump repair, replacement, energy savings and utility rebates, with estimate buttons placed beside every big decision.",
    bullets: [
      "Efficiency and rebate explainers",
      "Repair or replace guidance",
      "Estimate buttons at each choice",
    ],
    ctaLabel: "Build my heat pump pages",
    kicker: "HEAT PUMP EXPERTS",
    siteHeading: "Efficient comfort for every season.",
    photo: "/images/free-website/free-hvac/furnace-heating.webp",
    photoAlt: "Technician servicing a high-efficiency heating system",
  },
  {
    id: "air-quality",
    label: "Indoor Air Quality",
    icon: "leaf",
    heading: "Turn allergy and humidity worries into IAQ jobs.",
    body: "Air quality pages that link dust, allergies and damp air to filtration, humidifiers and duct work, ending in an assessment request.",
    bullets: [
      "Concern-first solution pages",
      "Filter and purifier explainers",
      "Air quality assessment booking",
    ],
    ctaLabel: "Build my air quality pages",
    kicker: "INDOOR AIR QUALITY",
    siteHeading: "Cleaner air starts with the right system.",
    photo: "/images/free-website/free-hvac/ac-repair.webp",
    photoAlt: "HVAC technician checking an air conditioning system",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "wrench",
    heading: "Grow maintenance plan members every season.",
    body: "Maintenance pages that sell tune-ups and memberships with priority service, plan perks and easy sign-up, so slow months still pay.",
    bullets: [
      "Membership perks compared",
      "Spring and fall tune-up booking",
      "Online plan sign-up",
    ],
    ctaLabel: "Build my maintenance pages",
    kicker: "HVAC MAINTENANCE",
    siteHeading: "Prevent breakdowns before the weather turns.",
    photo: "/images/free-website/free-hvac/ac-repair.webp",
    photoAlt: "HVAC technician performing a seasonal system tune-up",
  },
  {
    id: "commercial",
    label: "Commercial HVAC",
    icon: "building",
    heading: "Show facility managers you can keep them running.",
    body: "A commercial HVAC path covering rooftop units, preventive maintenance, controls, response times and account support for building owners and managers.",
    bullets: [
      "Rooftop and system pages",
      "Preventive maintenance programs",
      "Commercial service request form",
    ],
    ctaLabel: "Build my commercial HVAC pages",
    kicker: "COMMERCIAL HVAC",
    siteHeading: "Commercial comfort built around uptime.",
    photo: "/images/free-website/free-hvac/commercial-hvac.webp",
    photoAlt: "Technicians servicing rooftop commercial HVAC units",
  },
];

export default function HvacServiceTabs() {
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
                <Icon name={service.icon} /> HVAC booking path
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
                  <span>evergreencomfort.com</span>
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
                    <Icon name="phone" /> Book service
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>Trusted local technicians. Clear options. Comfort solutions built around your home.</p>
                    <div className="niche-site-actions">
                      <b>Book service</b>
                      <b>View HVAC services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local homeowners</small>
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
                    className="niche-mobile-image industry-mobile-image"
                    style={{ backgroundImage: `url(${service.photo})` }}
                  />
                  <div className="niche-mobile-button">Book service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to fill the HVAC schedule</strong>
                  <small>From local search to a booked service call</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
