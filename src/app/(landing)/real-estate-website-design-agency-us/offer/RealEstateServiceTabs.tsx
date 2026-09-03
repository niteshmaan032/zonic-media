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
    id: "buy-a-home",
    label: "Buy a Home",
    icon: "wrench",
    heading: "Turn buy a home searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear buy a home value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my buy a home pages",
    kicker: "BUY A HOME",
    siteHeading: "Buy a Home—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
  {
    id: "sell-a-home",
    label: "Sell a Home",
    icon: "target",
    heading: "Turn sell a home searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear sell a home value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my sell a home pages",
    kicker: "SELL A HOME",
    siteHeading: "Sell a Home—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
  {
    id: "luxury-listings",
    label: "Luxury Listings",
    icon: "home",
    heading: "Turn luxury listings searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear luxury listings value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my luxury listings pages",
    kicker: "LUXURY LISTINGS",
    siteHeading: "Luxury Listings—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
  {
    id: "relocation",
    label: "Relocation",
    icon: "truck",
    heading: "Turn relocation searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear relocation value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my relocation pages",
    kicker: "RELOCATION",
    siteHeading: "Relocation—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
  {
    id: "new-construction",
    label: "New Construction",
    icon: "layers",
    heading: "Turn new construction searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear new construction value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my new construction pages",
    kicker: "NEW CONSTRUCTION",
    siteHeading: "New Construction—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
  {
    id: "home-valuation",
    label: "Home Valuation",
    icon: "users",
    heading: "Turn home valuation searches into qualified enquiries.",
    body: "A focused real estate website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear home valuation value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my home valuation pages",
    kicker: "HOME VALUATION",
    siteHeading: "Home Valuation—done right.",
    photo: "/images/free-website/free-real-estate/hero.webp",
    photoAlt: "Real Estate service image",
  },
];

export default function RealEstateServiceTabs() {
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
                <Icon name={service.icon} /> Real Estate website path
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
                  <span>realestatepros.com</span>
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
