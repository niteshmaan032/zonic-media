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
    id: "weekly-pool-service",
    label: "Weekly Pool Service",
    icon: "droplets",
    heading: "Turn pool cleaning searches into weekly route accounts.",
    body: "A weekly service page that lists what every visit covers, from skimming and brushing to chemical balance and filter checks, with a simple signup form.",
    bullets: [
      "Visit checklist for every service day",
      "Plan options and what each covers",
      "Signup form that asks pool size and type",
    ],
    ctaLabel: "Set up my weekly service page",
    kicker: "WEEKLY POOL SERVICE",
    siteHeading: "A clean pool every week.",
    photo: "/images/free-website/free-pool-service/weekly-pool-service.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "pool-repair",
    label: "Pool Repair",
    icon: "target",
    heading: "Catch urgent pump, filter and heater repair calls.",
    body: "A pool repair page for pumps, filters, heaters and leaks, with tap-to-call up top and a short form for owners who need help before the weekend.",
    bullets: [
      "Pump, filter, heater and leak sections",
      "Tap-to-call fixed on mobile screens",
      "Short repair form with equipment details",
    ],
    ctaLabel: "Set up my pool repair page",
    kicker: "POOL REPAIR",
    siteHeading: "Pool equipment, back running.",
    photo: "/images/free-website/free-pool-service/pool-repair.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "equipment-upgrades",
    label: "Equipment Upgrades",
    icon: "wrench",
    heading: "Sell variable-speed pumps, salt systems and automation.",
    body: "An equipment upgrade page that explains variable-speed pumps, salt systems, heaters and automation in plain words, with a quote form for each upgrade.",
    bullets: [
      "Pump, salt and automation options",
      "Energy and upkeep benefits explained",
      "Upgrade quote request form",
    ],
    ctaLabel: "Set up my equipment upgrade page",
    kicker: "EQUIPMENT UPGRADES",
    siteHeading: "Smarter gear, less upkeep.",
    photo: "/images/free-website/free-pool-service/equipment-upgrades.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "pool-openings",
    label: "Pool Openings",
    icon: "layers",
    heading: "Book spring openings and fall closings before the rush.",
    body: "An openings and closings page with what each visit includes and when to book, so pool owners can lock in a date and move onto weekly service.",
    bullets: [
      "Opening and closing checklists",
      "Booking windows by month",
      "Path from opening to weekly plan",
    ],
    ctaLabel: "Set up my pool openings page",
    kicker: "POOL OPENINGS",
    siteHeading: "Open the pool. Skip the work.",
    photo: "/images/free-website/free-pool-service/pool-openings.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "remodel-resurface",
    label: "Remodel & Resurface",
    icon: "layout",
    heading: "Win plaster, tile and resurfacing projects online.",
    body: "A remodel and resurface page with before-and-after photos, finish choices and project steps for owners ready to fix stains, cracks or dated tile.",
    bullets: [
      "Before-and-after resurfacing photos",
      "Plaster, pebble and tile choices",
      "Estimate request for larger projects",
    ],
    ctaLabel: "Set up my resurfacing page",
    kicker: "REMODEL & RESURFACE",
    siteHeading: "A like-new pool finish.",
    photo: "/images/free-website/free-pool-service/remodel-amp-resurface.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "commercial-pools",
    label: "Commercial Pools",
    icon: "building",
    heading: "Reach HOAs, hotels and gyms that need pool contracts.",
    body: "A commercial pool page for HOAs, apartments, hotels and gyms, covering service schedules, service logs and a bid request for property managers.",
    bullets: [
      "HOA, hotel and apartment pool service",
      "Service logs and inspection readiness",
      "Bid request for property managers",
    ],
    ctaLabel: "Set up my commercial pool page",
    kicker: "COMMERCIAL POOLS",
    siteHeading: "Pools ready for every guest.",
    photo: "/images/free-website/free-pool-service/commercial-pools.webp",
    photoAlt: "Pool Service service image",
  },
];

export default function PoolServiceServiceTabs() {
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
                <Icon name={service.icon} /> Pool service website page
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
                  <span>poolservicepros.com</span>
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
                      Reliable weekly visits, balanced water and quick help when your pool equipment fails.
                    </p>
                    <div className="niche-site-actions">
                      <b>Start service</b>
                      <b>See plans</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by pool owners nearby</small>
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
                      <Icon name="shield" /> CLEAN · BALANCE · REPAIR
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
                  <div className="niche-mobile-button">Start service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made to fill routes</strong>
                  <small>From pool search to signup</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
