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
    heading: "Turn weekly pool service searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear weekly pool service value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my weekly pool service pages",
    kicker: "WEEKLY POOL SERVICE",
    siteHeading: "Weekly Pool Service—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "pool-repair",
    label: "Pool Repair",
    icon: "target",
    heading: "Turn pool repair searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear pool repair value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my pool repair pages",
    kicker: "POOL REPAIR",
    siteHeading: "Pool Repair—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "equipment-upgrades",
    label: "Equipment Upgrades",
    icon: "wrench",
    heading: "Turn equipment upgrades searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear equipment upgrades value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my equipment upgrades pages",
    kicker: "EQUIPMENT UPGRADES",
    siteHeading: "Equipment Upgrades—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "pool-openings",
    label: "Pool Openings",
    icon: "layers",
    heading: "Turn pool openings searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear pool openings value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my pool openings pages",
    kicker: "POOL OPENINGS",
    siteHeading: "Pool Openings—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "remodel-resurface",
    label: "Remodel & Resurface",
    icon: "layout",
    heading: "Turn remodel & resurface searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear remodel & resurface value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my remodel & resurface pages",
    kicker: "REMODEL & RESURFACE",
    siteHeading: "Remodel & Resurface—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
    photoAlt: "Pool Service service image",
  },
  {
    id: "commercial-pools",
    label: "Commercial Pools",
    icon: "building",
    heading: "Turn commercial pools searches into qualified enquiries.",
    body: "A focused pool service website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear commercial pools value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my commercial pools pages",
    kicker: "COMMERCIAL POOLS",
    siteHeading: "Commercial Pools—done right.",
    photo: "/images/free-website/free-pool-service/hero.webp",
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
                <Icon name={service.icon} /> Pool Service website path
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
