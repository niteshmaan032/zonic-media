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
    id: "landscape-design",
    label: "Landscape Design",
    icon: "leaf",
    heading: "Turn landscape design searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear landscape design value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my landscape design pages",
    kicker: "LANDSCAPE DESIGN",
    siteHeading: "Landscape Design—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "lawn-care",
    label: "Lawn Care",
    icon: "target",
    heading: "Turn lawn care searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear lawn care value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my lawn care pages",
    kicker: "LAWN CARE",
    siteHeading: "Lawn Care—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "hardscaping",
    label: "Hardscaping",
    icon: "layers",
    heading: "Turn hardscaping searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear hardscaping value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my hardscaping pages",
    kicker: "HARDSCAPING",
    siteHeading: "Hardscaping—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "irrigation",
    label: "Irrigation",
    icon: "users",
    heading: "Turn irrigation searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear irrigation value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my irrigation pages",
    kicker: "IRRIGATION",
    siteHeading: "Irrigation—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "outdoor-lighting",
    label: "Outdoor Lighting",
    icon: "zap",
    heading: "Turn outdoor lighting searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear outdoor lighting value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my outdoor lighting pages",
    kicker: "OUTDOOR LIGHTING",
    siteHeading: "Outdoor Lighting—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
  {
    id: "seasonal-cleanups",
    label: "Seasonal Cleanups",
    icon: "clipboard",
    heading: "Turn seasonal cleanups searches into qualified enquiries.",
    body: "A focused landscaping website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear seasonal cleanups value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my seasonal cleanups pages",
    kicker: "SEASONAL CLEANUPS",
    siteHeading: "Seasonal Cleanups—done right.",
    photo: "/images/free-website/free-landscaping/hero.webp",
    photoAlt: "Landscaping service image",
  },
];

export default function LandscapingServiceTabs() {
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
                <Icon name={service.icon} /> Landscaping website path
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
                  <span>landscapingpros.com</span>
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
