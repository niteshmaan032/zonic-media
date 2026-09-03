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
    heading: "Turn shower remodels searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear shower remodels value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my shower remodels pages",
    kicker: "SHOWER REMODELS",
    siteHeading: "Shower Remodels—done right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "tub-conversions",
    label: "Tub Conversions",
    icon: "wrench",
    heading: "Turn tub conversions searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear tub conversions value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my tub conversions pages",
    kicker: "TUB CONVERSIONS",
    siteHeading: "Tub Conversions—done right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "full-bathroom-remodels",
    label: "Full Bathroom Remodels",
    icon: "target",
    heading: "Turn full bathroom remodels searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear full bathroom remodels value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my full bathroom remodels pages",
    kicker: "FULL BATHROOM REMODELS",
    siteHeading: "Full Bathroom Remodels—done right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "accessible-bathrooms",
    label: "Accessible Bathrooms",
    icon: "layers",
    heading: "Turn accessible bathrooms searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear accessible bathrooms value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my accessible bathrooms pages",
    kicker: "ACCESSIBLE BATHROOMS",
    siteHeading: "Accessible Bathrooms—done right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "vanities-tile",
    label: "Vanities & Tile",
    icon: "users",
    heading: "Turn vanities & tile searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear vanities & tile value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my vanities & tile pages",
    kicker: "VANITIES & TILE",
    siteHeading: "Vanities & Tile—done right.",
    photo: "/images/free-website/free-bathroom-remodeling/hero.webp",
    photoAlt: "Bathroom Remodeling service image",
  },
  {
    id: "design-consultation",
    label: "Design Consultation",
    icon: "clipboard",
    heading: "Turn design consultation searches into qualified enquiries.",
    body: "A focused bathroom remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear design consultation value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my design consultation pages",
    kicker: "DESIGN CONSULTATION",
    siteHeading: "Design Consultation—done right.",
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
                <Icon name={service.icon} /> Bathroom Remodeling website path
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
                      Trusted local expertise. Clear communication. A simple
                      path to the right solution.
                    </p>
                    <div className="niche-site-actions">
                      <b>Request service</b>
                      <b>View services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local customers</small>
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
                  <div className="niche-mobile-button">Request service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Designed to convert</strong>
                  <small>Clear path from search to enquiry</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
