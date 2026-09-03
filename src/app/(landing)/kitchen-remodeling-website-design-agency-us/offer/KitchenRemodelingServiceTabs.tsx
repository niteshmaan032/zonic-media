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
    heading: "Turn full kitchen remodels searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear full kitchen remodels value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my full kitchen remodels pages",
    kicker: "FULL KITCHEN REMODELS",
    siteHeading: "Full Kitchen Remodels—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "custom-cabinetry",
    label: "Custom Cabinetry",
    icon: "wrench",
    heading: "Turn custom cabinetry searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear custom cabinetry value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my custom cabinetry pages",
    kicker: "CUSTOM CABINETRY",
    siteHeading: "Custom Cabinetry—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "countertops",
    label: "Countertops",
    icon: "target",
    heading: "Turn countertops searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear countertops value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my countertops pages",
    kicker: "COUNTERTOPS",
    siteHeading: "Countertops—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "kitchen-islands",
    label: "Kitchen Islands",
    icon: "layers",
    heading: "Turn kitchen islands searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear kitchen islands value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my kitchen islands pages",
    kicker: "KITCHEN ISLANDS",
    siteHeading: "Kitchen Islands—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "lighting-layout",
    label: "Lighting & Layout",
    icon: "zap",
    heading: "Turn lighting & layout searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear lighting & layout value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my lighting & layout pages",
    kicker: "LIGHTING & LAYOUT",
    siteHeading: "Lighting & Layout—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
    photoAlt: "Kitchen Remodeling service image",
  },
  {
    id: "design-build",
    label: "Design-Build",
    icon: "users",
    heading: "Turn design-build searches into qualified enquiries.",
    body: "A focused kitchen remodeling website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear design-build value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my design-build pages",
    kicker: "DESIGN-BUILD",
    siteHeading: "Design-Build—done right.",
    photo: "/images/free-website/free-kitchen-remodeling/hero.webp",
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
                <Icon name={service.icon} /> Kitchen Remodeling website path
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
