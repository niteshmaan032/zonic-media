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
    id: "office-cleaning",
    label: "Office Cleaning",
    icon: "building",
    heading: "Turn office cleaning searches into walkthrough requests.",
    body: "Office managers want a cleaner they never have to chase. This page shows schedules, checklists and how you work after hours, with a walkthrough form.",
    bullets: [
      "Nightly and weekly schedule options",
      "Cleaning checklist highlights",
      "Walkthrough request form",
    ],
    ctaLabel: "Build my office cleaning page",
    kicker: "OFFICE CLEANING",
    siteHeading: "A cleaner office, every morning.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Office cleaning service",
  },
  {
    id: "janitorial-services",
    label: "Janitorial Services",
    icon: "wrench",
    heading: "Show facility buyers you can run janitorial work for the long term.",
    body: "Janitorial contracts are about consistency. This page explains staffing, supervision, supplies and reporting, so buyers trust you with a recurring contract.",
    bullets: [
      "Staffing and supervision details",
      "Supplies and restocking info",
      "Contract enquiry path",
    ],
    ctaLabel: "Build my janitorial page",
    kicker: "JANITORIAL SERVICES",
    siteHeading: "Janitorial service you can rely on.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Janitorial services",
  },
  {
    id: "medical-facilities",
    label: "Medical Facilities",
    icon: "target",
    heading: "Speak to clinic managers about cleaning standards first.",
    body: "Medical offices care about infection control and careful crews. This page explains your protocols, training and products in plain words, with a direct quote path.",
    bullets: [
      "Protocol and training sections",
      "Products and disinfection info",
      "Direct quote request",
    ],
    ctaLabel: "Build my medical cleaning page",
    kicker: "MEDICAL FACILITIES",
    siteHeading: "Clinic cleaning with care and detail.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Medical facility cleaning",
  },
  {
    id: "retail-hospitality",
    label: "Retail & Hospitality",
    icon: "layers",
    heading: "Win retail and hospitality accounts that care about first impressions.",
    body: "Stores, hotels and restaurants need spaces that look right before doors open. This page covers schedules, high-traffic areas and flexible service windows.",
    bullets: [
      "Before-open and after-close schedules",
      "High-traffic area focus",
      "Multi-location enquiry form",
    ],
    ctaLabel: "Build my retail cleaning page",
    kicker: "RETAIL & HOSPITALITY",
    siteHeading: "Spaces guests notice for the right reasons.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Retail and hospitality cleaning",
  },
  {
    id: "deep-cleaning",
    label: "Deep Cleaning",
    icon: "sparkles",
    heading: "Sell deep cleans as a project, not just an add-on.",
    body: "Deep cleans often come before a move-in, an inspection or a reopening. This page explains what is included and makes it easy to request a date.",
    bullets: [
      "What a deep clean covers",
      "Move-in and reopening use cases",
      "Date request form",
    ],
    ctaLabel: "Build my deep cleaning page",
    kicker: "DEEP CLEANING",
    siteHeading: "Deep cleaning, top to bottom.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Deep cleaning service",
  },
  {
    id: "floor-care",
    label: "Floor Care",
    icon: "users",
    heading: "Turn floor care searches into scheduled service visits.",
    body: "Strip and wax, carpet care and tile cleaning are planned jobs. This page shows your floor types, methods and schedules, with a quote request close by.",
    bullets: [
      "Floor types and methods",
      "Scheduled care options",
      "Quote request button",
    ],
    ctaLabel: "Build my floor care page",
    kicker: "FLOOR CARE",
    siteHeading: "Floors that look new again.",
    photo: "/images/free-website/free-cleaning-company/hero.webp",
    photoAlt: "Commercial floor care",
  },
];

export default function CleaningCompanyServiceTabs() {
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
                <Icon name={service.icon} /> Cleaning page plan
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
                  <span>cleaningcompanypros.com</span>
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
                    <span>Industries</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Free walkthrough
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Reliable crews. Clear checklists. A simple way to book a walkthrough.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book a walkthrough</b>
                      <b>Our services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local businesses</small>
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
                      <Icon name="shield" /> INSURED · TRAINED · LOCAL
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
                  <div className="niche-mobile-button">Book a walkthrough</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to win bids</strong>
                  <small>Clear path from search to walkthrough</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
