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
    id: "hardwood-flooring",
    label: "Hardwood Flooring",
    icon: "layers",
    heading: "Rank for hardwood flooring installs in every town you serve.",
    body: "A hardwood flooring page that covers species, finishes and solid vs engineered boards, with install photos and a fast way to request a measure.",
    bullets: [
      "Species and finish options with photos",
      "Solid vs engineered hardwood explained",
      "Measure request on every screen",
    ],
    ctaLabel: "Build my hardwood flooring page",
    kicker: "HARDWOOD FLOORING",
    siteHeading: "Warm hardwood, laid with care.",
    photo: "/images/free-website/free-flooring/hardwood-flooring.webp",
    photoAlt: "Flooring service image",
  },
  {
    id: "luxury-vinyl",
    label: "Luxury Vinyl",
    icon: "target",
    heading: "Win luxury vinyl plank jobs from local searches.",
    body: "A luxury vinyl page that explains waterproof cores, wear layers and room-by-room uses, so shoppers see why LVP fits kitchens, baths and basements.",
    bullets: [
      "Waterproof LVP and LVT options listed",
      "Wear layer and room use made simple",
      "Quote form sized for quick replies",
    ],
    ctaLabel: "Build my luxury vinyl page",
    kicker: "LUXURY VINYL",
    siteHeading: "Waterproof floors for real life.",
    photo: "/images/free-website/free-flooring/luxury-vinyl.webp",
    photoAlt: "Flooring service image",
  },
  {
    id: "tile-flooring",
    label: "Tile Flooring",
    icon: "users",
    heading: "Show tile skill with layouts buyers can picture at home.",
    body: "A tile flooring page with porcelain, ceramic and stone installs, pattern ideas and prep details that show buyers the work under the tile is done right.",
    bullets: [
      "Porcelain, ceramic and stone galleries",
      "Pattern and layout ideas by room",
      "Subfloor prep explained in plain words",
    ],
    ctaLabel: "Build my tile flooring page",
    kicker: "TILE FLOORING",
    siteHeading: "Tile floors, laid true.",
    photo: "/images/free-website/free-flooring/tile-flooring.webp",
    photoAlt: "Flooring service image",
  },
  {
    id: "carpet-installation",
    label: "Carpet Installation",
    icon: "clipboard",
    heading: "Bring in carpet installs for bedrooms, stairs and rentals.",
    body: "A carpet installation page that covers styles, padding and stair work, plus quick scheduling for landlords and owners who need rooms ready fast.",
    bullets: [
      "Carpet styles and padding options",
      "Stairs, bedrooms and rental units",
      "Easy quote form by room count",
    ],
    ctaLabel: "Build my carpet installation page",
    kicker: "CARPET INSTALLATION",
    siteHeading: "Soft floors, fitted clean.",
    photo: "/images/free-website/free-flooring/carpet-installation.webp",
    photoAlt: "Flooring service image",
  },
  {
    id: "floor-refinishing",
    label: "Floor Refinishing",
    icon: "pin",
    heading: "Turn sand-and-refinish searches into booked jobs.",
    body: "A floor refinishing page with before-and-after photos, dust control notes and finish choices, built for owners who want old hardwood looking new again.",
    bullets: [
      "Before-and-after refinish photos",
      "Stain and finish choices shown",
      "Clear steps for the days of work",
    ],
    ctaLabel: "Build my floor refinishing page",
    kicker: "FLOOR REFINISHING",
    siteHeading: "Old floors, new again.",
    photo: "/images/free-website/free-flooring/floor-refinishing.webp",
    photoAlt: "Flooring service image",
  },
  {
    id: "commercial-flooring",
    label: "Commercial Flooring",
    icon: "building",
    heading: "Give facility managers a flooring page built for bids.",
    body: "A commercial flooring page for offices, retail and multifamily, showing project types, scheduling around business hours and a direct way to request a bid.",
    bullets: [
      "Office, retail and multifamily projects",
      "After-hours install scheduling noted",
      "Bid request form for larger jobs",
    ],
    ctaLabel: "Build my commercial flooring page",
    kicker: "COMMERCIAL FLOORING",
    siteHeading: "Floors for busy spaces.",
    photo: "/images/free-website/free-flooring/commercial-flooring.webp",
    photoAlt: "Flooring service image",
  },
];

export default function FlooringServiceTabs() {
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
                <Icon name={service.icon} /> Flooring website product page
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
                  <span>flooringpros.com</span>
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
                      Quality floors, careful installs and a measure booked at a time that suits you.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book a measure</b>
                      <b>Shop floors</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Chosen by local homeowners</small>
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
                      <Icon name="shield" /> MEASURE · SUPPLY · INSTALL
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
                  <div className="niche-mobile-button">Book a measure</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to book measures</strong>
                  <small>From floor search to quote</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
