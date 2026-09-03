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
    id: "back-pain-care",
    label: "Back Pain Care",
    icon: "heart",
    heading: "Turn back pain care searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear back pain care value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my back pain care pages",
    kicker: "BACK PAIN CARE",
    siteHeading: "Back Pain Care—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
  {
    id: "neck-pain-care",
    label: "Neck Pain Care",
    icon: "target",
    heading: "Turn neck pain care searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear neck pain care value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my neck pain care pages",
    kicker: "NECK PAIN CARE",
    siteHeading: "Neck Pain Care—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
  {
    id: "sports-injuries",
    label: "Sports Injuries",
    icon: "wrench",
    heading: "Turn sports injuries searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear sports injuries value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my sports injuries pages",
    kicker: "SPORTS INJURIES",
    siteHeading: "Sports Injuries—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
  {
    id: "auto-accident-care",
    label: "Auto Accident Care",
    icon: "zap",
    heading: "Turn auto accident care searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear auto accident care value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my auto accident care pages",
    kicker: "AUTO ACCIDENT CARE",
    siteHeading: "Auto Accident Care—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
  {
    id: "wellness-care",
    label: "Wellness Care",
    icon: "layers",
    heading: "Turn wellness care searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear wellness care value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my wellness care pages",
    kicker: "WELLNESS CARE",
    siteHeading: "Wellness Care—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
  {
    id: "new-patient-visits",
    label: "New Patient Visits",
    icon: "home",
    heading: "Turn new patient visits searches into qualified enquiries.",
    body: "A focused chiropractic website path that answers the questions prospects ask, proves your expertise, and makes the next step easy on every screen.",
    bullets: [
      "Clear new patient visits value proposition",
      "Proof, process, and service-area signals",
      "Calls, forms, and conversion tracking",
    ],
    ctaLabel: "Build my new patient visits pages",
    kicker: "NEW PATIENT VISITS",
    siteHeading: "New Patient Visits—done right.",
    photo: "/images/free-website/free-chiropractic/hero.webp",
    photoAlt: "Chiropractic service image",
  },
];

export default function ChiropracticServiceTabs() {
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
                <Icon name={service.icon} /> Chiropractic website path
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
                  <span>chiropracticpros.com</span>
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
