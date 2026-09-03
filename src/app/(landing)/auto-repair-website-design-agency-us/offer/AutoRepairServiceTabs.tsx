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
    id: "vehicle-diagnostics",
    label: "Vehicle Diagnostics",
    icon: "car",
    heading: "Turn vehicle diagnostics searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear vehicle diagnostics value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my vehicle diagnostics pages",
    kicker: "VEHICLE DIAGNOSTICS",
    siteHeading: "Vehicle Diagnostics—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
  {
    id: "brake-repair",
    label: "Brake Repair",
    icon: "target",
    heading: "Turn brake repair searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear brake repair value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my brake repair pages",
    kicker: "BRAKE REPAIR",
    siteHeading: "Brake Repair—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
  {
    id: "engine-repair",
    label: "Engine Repair",
    icon: "layers",
    heading: "Turn engine repair searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear engine repair value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my engine repair pages",
    kicker: "ENGINE REPAIR",
    siteHeading: "Engine Repair—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
  {
    id: "oil-maintenance",
    label: "Oil & Maintenance",
    icon: "clipboard",
    heading: "Turn oil & maintenance searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear oil & maintenance value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my oil & maintenance pages",
    kicker: "OIL & MAINTENANCE",
    siteHeading: "Oil & Maintenance—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
  {
    id: "tires-alignment",
    label: "Tires & Alignment",
    icon: "users",
    heading: "Turn tires & alignment searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear tires & alignment value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my tires & alignment pages",
    kicker: "TIRES & ALIGNMENT",
    siteHeading: "Tires & Alignment—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
  {
    id: "fleet-service",
    label: "Fleet Service",
    icon: "building",
    heading: "Turn fleet service searches into qualified enquiries.",
    body: "A focused auto repair website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear fleet service value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my fleet service pages",
    kicker: "FLEET SERVICE",
    siteHeading: "Fleet Service—done right.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Auto Repair service image",
  },
];

export default function AutoRepairServiceTabs() {
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
                <Icon name={service.icon} /> Auto Repair website path
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
                  <span>autorepairpros.com</span>
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
