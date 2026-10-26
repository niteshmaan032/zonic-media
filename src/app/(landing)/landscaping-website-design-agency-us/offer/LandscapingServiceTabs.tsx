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
    id: "landscape-design",
    label: "Landscape Design",
    icon: "leaf",
    heading: "Attract design-build clients, not just mowing calls.",
    body: "A landscape design page with full-yard transformations, your design process and a consultation request that filters for the projects you want most.",
    bullets: [
      "Full-yard before-and-after galleries",
      "Design process from plan to planting",
      "Consult form that asks project scope",
    ],
    ctaLabel: "Plan my landscape design page",
    kicker: "LANDSCAPE DESIGN",
    siteHeading: "Yards designed to be lived in.",
    photo: "/images/free-website/free-landscaping/landscape-design.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "lawn-care",
    label: "Lawn Care",
    icon: "target",
    heading: "Sell weekly and seasonal lawn care plans online.",
    body: "A lawn care page that lays out mowing, feeding and weed control plans, so homeowners can compare options and ask to join your route.",
    bullets: [
      "Weekly and biweekly plan options",
      "Feeding and weed control explained",
      "Simple signup or quote request",
    ],
    ctaLabel: "Plan my lawn care page",
    kicker: "LAWN CARE",
    siteHeading: "A greener lawn, every week.",
    photo: "/images/free-website/free-landscaping/lawn-care.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "hardscaping",
    label: "Hardscaping",
    icon: "layers",
    heading: "Rank for patios, walls and walkways in your towns.",
    body: "A hardscaping page with patio, retaining wall and walkway projects, material choices and build steps for homeowners planning a bigger outdoor upgrade.",
    bullets: [
      "Patio, wall and walkway project photos",
      "Paver and stone choices compared",
      "Estimate request with project size",
    ],
    ctaLabel: "Plan my hardscaping page",
    kicker: "HARDSCAPING",
    siteHeading: "Patios built for gatherings.",
    photo: "/images/free-website/free-landscaping/hardscaping.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "irrigation",
    label: "Irrigation",
    icon: "users",
    heading: "Capture sprinkler installs and irrigation repair calls.",
    body: "An irrigation page covering new sprinkler systems, drip lines, repairs and seasonal start-ups, written for owners who want water used well.",
    bullets: [
      "Install, repair and start-up services",
      "Drip and smart controller options",
      "Repair request with tap-to-call",
    ],
    ctaLabel: "Plan my irrigation page",
    kicker: "IRRIGATION",
    siteHeading: "Water right, every zone.",
    photo: "/images/free-website/free-landscaping/irrigation.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "outdoor-lighting",
    label: "Outdoor Lighting",
    icon: "zap",
    heading: "Light up evening searches for landscape lighting.",
    body: "An outdoor lighting page with night photos of paths, trees and patios, plus fixture choices and a design visit request for homeowners.",
    bullets: [
      "Night-time project photo gallery",
      "Path, uplight and patio options",
      "Lighting design visit request",
    ],
    ctaLabel: "Plan my outdoor lighting page",
    kicker: "OUTDOOR LIGHTING",
    siteHeading: "Your yard, after dark.",
    photo: "/images/free-website/free-landscaping/outdoor-lighting.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "seasonal-cleanups",
    label: "Seasonal Cleanups",
    icon: "clipboard",
    heading: "Book every spring and fall cleanup in advance.",
    body: "A seasonal cleanup page that lists what each spring and fall visit includes, when to book and how to turn a one-time cleanup into a recurring plan.",
    bullets: [
      "Spring and fall cleanup checklists",
      "Booking windows shown by season",
      "Upgrade path to a maintenance plan",
    ],
    ctaLabel: "Plan my seasonal cleanup page",
    kicker: "SEASONAL CLEANUPS",
    siteHeading: "Spring and fall, handled.",
    photo: "/images/free-website/free-landscaping/seasonal-cleanups.webp",
    photoAlt: "Landscaping service image",
  },
];

export default function LandscapingServiceTabs() {
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
                <Icon name={service.icon} /> Landscaping service page
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
                  <span>landscapingpros.com</span>
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
                      Thoughtful design, tidy crews and a yard that looks good in every season of the year.
                    </p>
                    <div className="niche-site-actions">
                      <b>Get a yard quote</b>
                      <b>See projects</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Recommended by neighbors</small>
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
                      <Icon name="shield" /> DESIGN · INSTALL · MAINTAIN
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
                  <div className="niche-mobile-button">Get a yard quote</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made to book yard work</strong>
                  <small>From yard search to estimate</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
