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
    id: "emergency-towing",
    label: "Emergency Towing",
    icon: "zap",
    heading: "Turn emergency towing searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear emergency towing value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my emergency towing pages",
    kicker: "EMERGENCY TOWING",
    siteHeading: "Emergency Towing—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
  {
    id: "roadside-assistance",
    label: "Roadside Assistance",
    icon: "target",
    heading: "Turn roadside assistance searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear roadside assistance value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my roadside assistance pages",
    kicker: "ROADSIDE ASSISTANCE",
    siteHeading: "Roadside Assistance—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
  {
    id: "accident-recovery",
    label: "Accident Recovery",
    icon: "layers",
    heading: "Turn accident recovery searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear accident recovery value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my accident recovery pages",
    kicker: "ACCIDENT RECOVERY",
    siteHeading: "Accident Recovery—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
  {
    id: "flatbed-towing",
    label: "Flatbed Towing",
    icon: "truck",
    heading: "Turn flatbed towing searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear flatbed towing value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my flatbed towing pages",
    kicker: "FLATBED TOWING",
    siteHeading: "Flatbed Towing—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
  {
    id: "heavy-duty-towing",
    label: "Heavy-Duty Towing",
    icon: "users",
    heading: "Turn heavy-duty towing searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear heavy-duty towing value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my heavy-duty towing pages",
    kicker: "HEAVY-DUTY TOWING",
    siteHeading: "Heavy-Duty Towing—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
  {
    id: "fleet-accounts",
    label: "Fleet Accounts",
    icon: "building",
    heading: "Turn fleet accounts searches into qualified enquiries.",
    body: "A focused towing website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear fleet accounts value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my fleet accounts pages",
    kicker: "FLEET ACCOUNTS",
    siteHeading: "Fleet Accounts—done right.",
    photo: "/images/free-website/free-towing/hero.webp",
    photoAlt: "Towing service image",
  },
];

export default function TowingServiceTabs() {
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
                <Icon name={service.icon} /> Towing website path
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
                  <span>towingpros.com</span>
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
