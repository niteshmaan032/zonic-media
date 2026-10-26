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
    heading: "Turn check engine light searches into booked diagnostics.",
    body: "Drivers with a warning light want to know what happens next. This page explains your diagnostic process in plain words and gets them booked fast.",
    bullets: [
      "Plain-language diagnostic steps",
      "Warning light and symptom sections",
      "Booking and call tracking",
    ],
    ctaLabel: "Build my diagnostics page",
    kicker: "VEHICLE DIAGNOSTICS",
    siteHeading: "Check engine light on? Let’s find out why.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Vehicle diagnostics at an auto repair shop",
  },
  {
    id: "brake-repair",
    label: "Brake Repair",
    icon: "target",
    heading: "Win brake repair searches from drivers who need it now.",
    body: "Squealing or grinding brakes create urgency. This page covers symptoms, pads, rotors and inspections, with a call button and booking form close by.",
    bullets: [
      "Symptom-led brake content",
      "Pads, rotors and fluid sections",
      "Call and booking buttons",
    ],
    ctaLabel: "Build my brake repair page",
    kicker: "BRAKE REPAIR",
    siteHeading: "Brake repair you can count on.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Brake repair service",
  },
  {
    id: "engine-repair",
    label: "Engine Repair",
    icon: "layers",
    heading: "Give engine repair buyers the confidence to choose your shop.",
    body: "Engine work is a big decision. This page explains your process, warranty terms and how estimates work, so drivers trust you before they call.",
    bullets: [
      "Repair process explained",
      "Warranty and estimate details",
      "Estimate request form",
    ],
    ctaLabel: "Build my engine repair page",
    kicker: "ENGINE REPAIR",
    siteHeading: "Engine repair, explained up front.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Engine repair service",
  },
  {
    id: "oil-maintenance",
    label: "Oil & Maintenance",
    icon: "clipboard",
    heading: "Turn routine maintenance into repeat visits to your bays.",
    body: "Oil changes and scheduled service bring drivers back again and again. This page makes booking simple and reminds them what their car needs next.",
    bullets: [
      "Maintenance schedule content",
      "Quick booking for routine service",
      "Return-visit prompts",
    ],
    ctaLabel: "Build my maintenance page",
    kicker: "OIL & MAINTENANCE",
    siteHeading: "Routine service made easy.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Oil change and maintenance service",
  },
  {
    id: "tires-alignment",
    label: "Tires & Alignment",
    icon: "users",
    heading: "Capture tire and alignment searches from drivers nearby.",
    body: "Tire wear, pulling and vibration send drivers to search. This page covers tires, rotation and alignment with a quick way to book a time.",
    bullets: [
      "Tire, rotation and alignment sections",
      "Symptom checks drivers recognize",
      "Fast booking form",
    ],
    ctaLabel: "Build my tires and alignment page",
    kicker: "TIRES & ALIGNMENT",
    siteHeading: "Smooth rides start with the right tires.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Tire and alignment service",
  },
  {
    id: "fleet-service",
    label: "Fleet Service",
    icon: "building",
    heading: "Turn local fleets into steady repair accounts.",
    body: "Fleet managers want reliable uptime and simple billing. This page explains fleet maintenance, priority scheduling and accounts, with a business enquiry form.",
    bullets: [
      "Fleet maintenance overview",
      "Priority scheduling details",
      "Business enquiry form",
    ],
    ctaLabel: "Build my fleet service page",
    kicker: "FLEET SERVICE",
    siteHeading: "Fleet service that keeps vehicles moving.",
    photo: "/images/free-website/free-auto-repair/hero.webp",
    photoAlt: "Fleet vehicle maintenance",
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
                <Icon name={service.icon} /> Auto shop page plan
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
                    <span>Repairs</span>
                    <span>Our Shop</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Book service
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Clear diagnosis. Straight answers. An easy way to book the repair.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book service</b>
                      <b>All repairs</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local drivers</small>
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
                      <Icon name="shield" /> TRUSTED LOCAL SHOP
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
                  <strong>Built to book repairs</strong>
                  <small>Clear path from search to booking</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
