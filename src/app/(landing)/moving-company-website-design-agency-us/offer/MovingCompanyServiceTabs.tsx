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
    id: "local-moving",
    label: "Local Moving",
    icon: "truck",
    heading: "Turn local moving searches into booked move dates.",
    body: "Local movers win on speed and trust. This page shows your crews, the neighborhoods you serve and a short quote form people can finish on a phone.",
    bullets: [
      "Cities and neighborhoods served",
      "Short mobile quote form",
      "Call and form tracking",
    ],
    ctaLabel: "Build my local moving page",
    kicker: "LOCAL MOVING",
    siteHeading: "Local moves, handled with care.",
    photo: "/images/free-website/free-moving-company/local-moving.webp",
    photoAlt: "Local moving service",
  },
  {
    id: "long-distance-moving",
    label: "Long-Distance Moving",
    icon: "target",
    heading: "Give long-distance customers the detail they need to trust you.",
    body: "Long-distance customers compare more and book earlier. This page explains routes, timelines and how estimates work, then asks for move dates and home size.",
    bullets: [
      "Route and timeline details",
      "How estimates work, in plain words",
      "Move date and size quote form",
    ],
    ctaLabel: "Build my long-distance moving page",
    kicker: "LONG-DISTANCE MOVING",
    siteHeading: "Moving across state lines? Let’s plan it.",
    photo: "/images/free-website/free-moving-company/long-distance-moving.webp",
    photoAlt: "Long-distance moving service",
  },
  {
    id: "commercial-moving",
    label: "Commercial Moving",
    icon: "building",
    heading: "Win office and commercial moves with a planning-first page.",
    body: "Office managers need a mover who can work after hours and keep downtime low. This page shows your process, equipment and a direct request path.",
    bullets: [
      "After-hours and weekend move info",
      "Step-by-step move plan",
      "Business quote request",
    ],
    ctaLabel: "Build my commercial moving page",
    kicker: "COMMERCIAL MOVING",
    siteHeading: "Office moves with less downtime.",
    photo: "/images/free-website/free-moving-company/commercial-moving.webp",
    photoAlt: "Commercial moving service",
  },
  {
    id: "packing-services",
    label: "Packing Services",
    icon: "layers",
    heading: "Sell packing as its own service, not an afterthought.",
    body: "Many customers want full or partial packing but do not know to ask. This page explains options and materials so they can add packing to the quote.",
    bullets: [
      "Full and partial packing options",
      "Materials and fragile items info",
      "Add-to-quote prompts",
    ],
    ctaLabel: "Build my packing services page",
    kicker: "PACKING SERVICES",
    siteHeading: "Packing done right, box by box.",
    photo: "/images/free-website/free-moving-company/packing-services.webp",
    photoAlt: "Packing service for a move",
  },
  {
    id: "storage",
    label: "Storage",
    icon: "users",
    heading: "Capture storage searches from people between homes.",
    body: "When move-out and move-in dates do not line up, people search for storage. This page covers short and long-term options and links them to your moves.",
    bullets: [
      "Short and long-term storage options",
      "Move plus storage pathway",
      "Storage enquiry form",
    ],
    ctaLabel: "Build my storage page",
    kicker: "STORAGE",
    siteHeading: "Storage for every gap between moves.",
    photo: "/images/free-website/free-moving-company/storage.webp",
    photoAlt: "Moving and storage service",
  },
  {
    id: "specialty-moving",
    label: "Specialty Moving",
    icon: "clipboard",
    heading: "Show you can handle the pianos, safes and fine art.",
    body: "Specialty moves need proof of skill and the right gear. This page lists the items you move, how you protect them and how to request a custom quote.",
    bullets: [
      "Specialty items you move",
      "Protection and equipment details",
      "Custom quote request",
    ],
    ctaLabel: "Build my specialty moving page",
    kicker: "SPECIALTY MOVING",
    siteHeading: "Specialty items, moved with extra care.",
    photo: "/images/free-website/free-moving-company/specialty-moving.webp",
    photoAlt: "Specialty item moving service",
  },
];

export default function MovingCompanyServiceTabs() {
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
                <Icon name={service.icon} /> Moving page plan
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
                  <span>movingcompanypros.com</span>
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
                    <span>Moves</span>
                    <span>Storage</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Free quote
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Careful crews. Clear quotes. An easy way to lock in your moving date.
                    </p>
                    <div className="niche-site-actions">
                      <b>Get a quote</b>
                      <b>Move types</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local families</small>
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
                      <Icon name="shield" /> LICENSED · INSURED · CAREFUL
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
                  <div className="niche-mobile-button">Get a quote</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to book moves</strong>
                  <small>Clear path from search to quote</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
