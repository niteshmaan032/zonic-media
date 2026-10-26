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
    id: "residential-solar",
    label: "Residential Solar",
    icon: "sun",
    heading: "Turn homeowner solar research into a booked consult.",
    body: "Residential solar pages that explain how solar works, what affects savings and what to expect from install day, with a simple quote form beside each answer.",
    bullets: [
      "Savings and payback explainers",
      "Install process timeline",
      "Quote form beside each answer",
    ],
    ctaLabel: "Build my residential solar pages",
    kicker: "RESIDENTIAL SOLAR",
    siteHeading: "Solar made simple for your home.",
    photo: "/images/free-website/free-solar/residential-solar.webp",
    photoAlt: "Solar service image",
  },
  {
    id: "commercial-solar",
    label: "Commercial Solar",
    icon: "building",
    heading: "Show business owners the numbers behind solar.",
    body: "Commercial solar pages covering energy costs, system sizing, roof and ground mounts, project timelines and the financing options that fit a business.",
    bullets: [
      "Project and sizing pages",
      "Business financing options",
      "Commercial proposal request form",
    ],
    ctaLabel: "Build my commercial solar pages",
    kicker: "COMMERCIAL SOLAR",
    siteHeading: "Cut operating costs with solar.",
    photo: "/images/free-website/free-solar/commercial-solar.webp",
    photoAlt: "Solar service image",
  },
  {
    id: "battery-storage",
    label: "Battery Storage",
    icon: "target",
    heading: "Sell backup power to homeowners tired of outages.",
    body: "Battery storage pages that explain backup power, pairing with existing panels and what runs during an outage, ending in a battery quote request.",
    bullets: [
      "Backup power explainers",
      "Add-on to existing systems",
      "Battery quote request form",
    ],
    ctaLabel: "Build my battery storage pages",
    kicker: "BATTERY STORAGE",
    siteHeading: "Keep the lights on in an outage.",
    photo: "/images/free-website/free-solar/battery-storage.webp",
    photoAlt: "Solar service image",
  },
  {
    id: "solar-repair",
    label: "Solar Repair",
    icon: "layers",
    heading: "Win service calls from owners with idle panels.",
    body: "Solar repair pages for low output, inverter faults and storm damage, with a quick service form for owners whose original installer is gone.",
    bullets: [
      "Common fault explainers",
      "Inverter and panel repair pages",
      "Fast repair request form",
    ],
    ctaLabel: "Build my solar repair pages",
    kicker: "SOLAR REPAIR",
    siteHeading: "Get your panels producing again.",
    photo: "/images/free-website/free-solar/solar-repair.webp",
    photoAlt: "Solar service image",
  },
  {
    id: "ev-charging",
    label: "EV Charging",
    icon: "zap",
    heading: "Pair solar with a home EV charger.",
    body: "EV charging pages that show how solar and a home charger work together, covering panel capacity, charger installs and a combined quote request.",
    bullets: [
      "Solar plus EV explainers",
      "Charger install details",
      "Combined quote request",
    ],
    ctaLabel: "Build my EV charging pages",
    kicker: "EV CHARGING",
    siteHeading: "Drive on sunshine from your roof.",
    photo: "/images/free-website/free-solar/ev-charging.webp",
    photoAlt: "Solar service image",
  },
  {
    id: "financing-options",
    label: "Financing Options",
    icon: "wrench",
    heading: "Make solar financing easy to understand.",
    body: "Financing pages that compare cash, loans, leases and power purchase agreements in plain words, so homeowners can pick a path and request a quote.",
    bullets: [
      "Cash, loan and lease compared",
      "Plain-language payment guides",
      "Quote request after each option",
    ],
    ctaLabel: "Build my solar financing pages",
    kicker: "SOLAR FINANCING",
    siteHeading: "Go solar on terms that fit.",
    photo: "/images/free-website/free-solar/financing-options.webp",
    photoAlt: "Solar service image",
  },
];

export default function SolarServiceTabs() {
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
                <Icon name={service.icon} /> Solar quote path
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
                  <span>solarpros.com</span>
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
                    <Icon name="phone" /> Free solar quote
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Local solar installers. Honest savings estimates. Clean
                      installs, done right.
                    </p>
                    <div className="niche-site-actions">
                      <b>Get a quote</b>
                      <b>View solar options</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Rated by local homeowners</small>
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
                  <div className="niche-mobile-button">Get a quote</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made to book solar consults</strong>
                  <small>From first research to a signed install</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
