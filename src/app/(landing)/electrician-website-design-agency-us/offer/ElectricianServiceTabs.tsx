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
    id: "emergency-electrical",
    label: "Emergency Electrical",
    icon: "zap",
    heading: "Turn emergency electrical searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear emergency electrical value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my emergency electrical pages",
    kicker: "EMERGENCY ELECTRICAL",
    siteHeading: "Emergency Electrical—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "panel-upgrades",
    label: "Panel Upgrades",
    icon: "target",
    heading: "Turn panel upgrades searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear panel upgrades value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my panel upgrades pages",
    kicker: "PANEL UPGRADES",
    siteHeading: "Panel Upgrades—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "ev-chargers",
    label: "EV Chargers",
    icon: "layers",
    heading: "Turn ev chargers searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear ev chargers value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my ev chargers pages",
    kicker: "EV CHARGERS",
    siteHeading: "EV Chargers—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "whole-home-rewiring",
    label: "Whole-Home Rewiring",
    icon: "users",
    heading: "Turn whole-home rewiring searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear whole-home rewiring value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my whole-home rewiring pages",
    kicker: "WHOLE-HOME REWIRING",
    siteHeading: "Whole-Home Rewiring—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "lighting-installation",
    label: "Lighting Installation",
    icon: "clipboard",
    heading: "Turn lighting installation searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear lighting installation value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my lighting installation pages",
    kicker: "LIGHTING INSTALLATION",
    siteHeading: "Lighting Installation—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "commercial-electrical",
    label: "Commercial Electrical",
    icon: "building",
    heading: "Turn commercial electrical searches into qualified enquiries.",
    body: "A focused electrician website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear commercial electrical value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my commercial electrical pages",
    kicker: "COMMERCIAL ELECTRICAL",
    siteHeading: "Commercial Electrical—done right.",
    photo: "/images/free-website/free-electrician/hero.webp",
    photoAlt: "Electrician service image",
  },
];

export default function ElectricianServiceTabs() {
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
                <Icon name={service.icon} /> Electrician website path
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
                  <span>electricianpros.com</span>
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
