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
    id: "full-kitchen-remodels",
    label: "Full Kitchen Remodels",
    icon: "layout",
    heading: "Win the full kitchen remodels with the biggest budgets.",
    body: "A full kitchen remodel page that shows finished rooms, explains your design-to-install process and gives serious buyers a clear way to book a consultation.",
    bullets: [
      "Finished kitchen gallery by style",
      "Design, build and install timeline",
      "Consult form with a project budget field",
    ],
    ctaLabel: "Map my full kitchen remodel page",
    kicker: "FULL KITCHEN REMODELS",
    siteHeading: "Kitchens built around you.",
    photo: "/images/free-website/free-kitchen-remodeling/full-kitchen-remodels.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "custom-cabinetry",
    label: "Custom Cabinetry",
    icon: "wrench",
    heading: "Show cabinet work in the detail buyers zoom in on.",
    body: "A custom cabinetry page with close-up photos of doors, finishes and storage ideas, written for homeowners comparing custom, semi-custom and refacing options.",
    bullets: [
      "Door style and finish photo sets",
      "Custom vs semi-custom vs refacing guide",
      "Showroom or in-home visit request",
    ],
    ctaLabel: "Map my custom cabinetry page",
    kicker: "CUSTOM CABINETRY",
    siteHeading: "Cabinets made to fit.",
    photo: "/images/free-website/free-kitchen-remodeling/custom-cabinetry.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "countertops",
    label: "Countertops",
    icon: "target",
    heading: "Capture countertop searches by stone and surface.",
    body: "A countertop page that compares quartz, granite and other surfaces, shows real installs and invites a measure or quote request from any phone.",
    bullets: [
      "Quartz, granite and solid surface sections",
      "Installed counter photos, close up",
      "Measure and quote request form",
    ],
    ctaLabel: "Map my countertop page",
    kicker: "COUNTERTOPS",
    siteHeading: "Counters that set the tone.",
    photo: "/images/free-website/free-kitchen-remodeling/countertops.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "kitchen-islands",
    label: "Kitchen Islands",
    icon: "layers",
    heading: "Turn island ideas into booked kitchen design visits.",
    body: "A kitchen island page with layouts for seating, storage and prep space, helping homeowners picture the island that fits their room and their budget.",
    bullets: [
      "Island layouts with seating and storage",
      "Plumbing and power options explained",
      "Idea gallery linked to a consult form",
    ],
    ctaLabel: "Map my kitchen island page",
    kicker: "KITCHEN ISLANDS",
    siteHeading: "The island your kitchen needs.",
    photo: "/images/free-website/free-kitchen-remodeling/kitchen-islands.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "lighting-layout",
    label: "Lighting & Layout",
    icon: "zap",
    heading: "Answer layout and lighting questions before the visit.",
    body: "A layout and lighting page that explains work triangles, open plans and layered lighting, so homeowners arrive at the consult already trusting your advice.",
    bullets: [
      "Before-and-after layout changes",
      "Layered lighting ideas with photos",
      "Simple guide to moving walls or plumbing",
    ],
    ctaLabel: "Map my layout and lighting page",
    kicker: "LIGHTING & LAYOUT",
    siteHeading: "Better flow. Better light.",
    photo: "/images/free-website/free-kitchen-remodeling/lighting-amp-layout.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "design-build",
    label: "Design-Build",
    icon: "users",
    heading: "Sell one team for design and build, start to finish.",
    body: "A design-build page that shows how one team handles drawings, selections, permits and construction, which suits buyers who want a single point of contact.",
    bullets: [
      "Design-build process in clear stages",
      "Selections and permit help explained",
      "One contact from concept to handover",
    ],
    ctaLabel: "Map my design-build page",
    kicker: "DESIGN-BUILD",
    siteHeading: "One team. Design to build.",
    photo: "/images/free-website/free-kitchen-remodeling/design-build.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
];

export default function KitchenRemodelingServiceTabs() {
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
                <Icon name={service.icon} /> Kitchen website service page
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
                  <span>kitchenremodelingpros.com</span>
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
                      Thoughtful design, clean installs and a kitchen built around the way your family cooks.
                    </p>
                    <div className="niche-site-actions">
                      <b>Plan my kitchen</b>
                      <b>Browse kitchens</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Reviewed by local homeowners</small>
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
                      <Icon name="shield" /> DESIGN · BUILD · FINISH
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
                  <div className="niche-mobile-button">Plan my kitchen</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made for design visits</strong>
                  <small>From idea board to consult</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
