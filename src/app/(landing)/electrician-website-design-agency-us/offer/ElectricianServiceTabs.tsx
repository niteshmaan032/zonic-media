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
    heading: "Be the electrician they reach when the power fails.",
    body: "An emergency electrical page that tells a worried homeowner what is safe to do, shows you respond fast and keeps the call button in reach.",
    bullets: [
      "Tap-to-call for outages and sparks",
      "Safety steps while they wait",
      "Service hours shown clearly",
    ],
    ctaLabel: "Build my emergency electrical pages",
    kicker: "EMERGENCY ELECTRICIAN",
    siteHeading: "Power problems fixed fast and safe.",
    photo: "/images/free-website/free-electrician/emergency-electrical.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "panel-upgrades",
    label: "Panel Upgrades",
    icon: "target",
    heading: "Turn an overloaded panel into a booked upgrade.",
    body: "Panel upgrade pages that explain warning signs, amp sizes, permits and inspections, with quote buttons next to each step so homeowners can act right away.",
    bullets: [
      "Warning signs and amp guides",
      "Permit and inspection steps",
      "Quote buttons at each step",
    ],
    ctaLabel: "Build my panel upgrade pages",
    kicker: "PANEL UPGRADES",
    siteHeading: "More power for a modern home.",
    photo: "/images/free-website/free-electrician/panel-upgrades.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "ev-chargers",
    label: "EV Chargers",
    icon: "layers",
    heading: "Catch new EV owners shopping for a home charger.",
    body: "EV charger pages that cover Level 2 installs, panel capacity checks, charger options and local rebates, ending in a simple install quote form.",
    bullets: [
      "Level 2 install explainers",
      "Panel capacity checks",
      "Rebate and incentive notes",
    ],
    ctaLabel: "Build my EV charger pages",
    kicker: "EV CHARGER INSTALLS",
    siteHeading: "Charge at home, installed right.",
    photo: "/images/free-website/free-electrician/ev-chargers.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "whole-home-rewiring",
    label: "Whole-Home Rewiring",
    icon: "users",
    heading: "Make a whole-home rewire feel safe to approve.",
    body: "Rewiring pages that explain old wiring risks, the work process, timelines and financing, so homeowners feel ready to book an assessment.",
    bullets: [
      "Old wiring risk guides",
      "Step-by-step project process",
      "Financing shown early",
    ],
    ctaLabel: "Build my rewiring pages",
    kicker: "WHOLE-HOME REWIRING",
    siteHeading: "Safer wiring for older homes.",
    photo: "/images/free-website/free-electrician/whole-home-rewiring.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "lighting-installation",
    label: "Lighting Installation",
    icon: "clipboard",
    heading: "Show off lighting work that sells the next job.",
    body: "Lighting pages with project photos for recessed, landscape and fixture installs, plus design ideas and an easy request form for homeowners.",
    bullets: [
      "Project photo galleries",
      "Indoor and outdoor lighting paths",
      "Simple install request form",
    ],
    ctaLabel: "Build my lighting pages",
    kicker: "LIGHTING INSTALLATION",
    siteHeading: "Light every room the right way.",
    photo: "/images/free-website/free-electrician/lighting-installation.webp",
    photoAlt: "Electrician service image",
  },
  {
    id: "commercial-electrical",
    label: "Commercial Electrical",
    icon: "building",
    heading: "Give businesses a licensed contractor they can trust.",
    body: "A commercial electrical path covering tenant build-outs, maintenance, code compliance and response times for owners and property managers.",
    bullets: [
      "Build-out and maintenance pages",
      "License and code compliance proof",
      "Commercial project quote form",
    ],
    ctaLabel: "Build my commercial electrical pages",
    kicker: "COMMERCIAL ELECTRICAL",
    siteHeading: "Power that keeps business running.",
    photo: "/images/free-website/free-electrician/commercial-electrical.webp",
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
                <Icon name={service.icon} /> Electrical service path
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
                    <Icon name="phone" /> Call an electrician
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Licensed local electricians. Clear quotes. Work done
                      to code, start to finish.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book service</b>
                      <b>View electrical services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local homeowners</small>
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
                  <div className="niche-mobile-button">Book service</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made to book electrical jobs</strong>
                  <small>From a local search to a booked quote</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
