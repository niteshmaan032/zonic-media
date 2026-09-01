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
    heading: "Turn no-cool searches into booked service calls.",
    body: "A fast, reassuring repair path that helps uncomfortable homeowners understand the problem, see your availability, and request service without hunting for the next step.",
    bullets: [
      "Emergency click-to-call actions",
      "Problem and symptom pathways",
      "Fast service-request form",
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
    heading: "Make urgent heating help feel close and dependable.",
    body: "Guide homeowners from furnace trouble to a confident service request with clear repair options, safety signals, financing information, and visible scheduling actions.",
    bullets: [
      "Furnace repair and replacement paths",
      "Safety and warranty proof",
      "Financing visibility",
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
    heading: "Explain high-efficiency comfort without losing the lead.",
    body: "Help homeowners compare heat pump repair, replacement, energy savings, rebates, and comfort benefits while keeping estimate actions beside every major decision.",
    bullets: [
      "Efficiency and rebate education",
      "Repair versus replacement guidance",
      "Estimate CTAs beside key choices",
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
    heading: "Connect cleaner air solutions to real household concerns.",
    body: "Turn questions about allergies, humidity, filtration, ductwork, and ventilation into a clear route toward an indoor air assessment.",
    bullets: [
      "Concern-led solution pathways",
      "Filter and air-quality education",
      "Assessment request actions",
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
    heading: "Turn seasonal tune-ups into recurring customer value.",
    body: "Present maintenance memberships, priority service, efficiency benefits, and preventative care in a simple flow built to increase plan sign-ups.",
    bullets: [
      "Membership benefit comparison",
      "Seasonal tune-up pathways",
      "Recurring-plan conversion",
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
    heading: "Give facility managers a direct route to your team.",
    body: "Present commercial service capacity, rooftop systems, maintenance, controls, response times, and account support in a concise B2B experience.",
    bullets: [
      "System-specific service pages",
      "Maintenance and emergency paths",
      "Commercial enquiry qualification",
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
                <Icon name={service.icon} /> HVAC website path
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
                  <strong>Built to win HVAC calls</strong>
                  <small>From local search to booked service</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
