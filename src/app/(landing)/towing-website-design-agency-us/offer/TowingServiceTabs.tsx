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
    heading: "Answer emergency tow searches with one big call button.",
    body: "When a car breaks down, drivers want a number, not a menu. This page shows your hours, your area and a call button on every screen.",
    bullets: [
      "24/7 call button above the fold",
      "Towns and highways you cover",
      "Call and form tracking",
    ],
    ctaLabel: "Build my emergency towing page",
    kicker: "EMERGENCY TOWING",
    siteHeading: "Broken down? Help is one call away.",
    photo: "/images/free-website/free-towing/emergency-towing.webp",
    photoAlt: "Emergency towing service",
  },
  {
    id: "roadside-assistance",
    label: "Roadside Assistance",
    icon: "target",
    heading: "Turn jump start and lockout searches into roadside calls.",
    body: "Jump starts, flat tires, fuel delivery and lockouts each get clear copy, so drivers see you handle the small jobs too and call you first.",
    bullets: [
      "Jump, tire, fuel and lockout sections",
      "Quick form for non-urgent help",
      "Mobile-first layout for roadside use",
    ],
    ctaLabel: "Build my roadside assistance page",
    kicker: "ROADSIDE ASSISTANCE",
    siteHeading: "Flat tire or dead battery? We come to you.",
    photo: "/images/free-website/free-towing/roadside-assistance.webp",
    photoAlt: "Roadside assistance service",
  },
  {
    id: "accident-recovery",
    label: "Accident Recovery",
    icon: "layers",
    heading: "Give accident recovery searches a calm, clear next step.",
    body: "After a crash, people need reassurance and a fast answer. This page explains recovery, storage and insurance paperwork in plain words, with a call button close by.",
    bullets: [
      "Plain-language recovery steps",
      "Storage and insurance info",
      "Call button near every section",
    ],
    ctaLabel: "Build my accident recovery page",
    kicker: "ACCIDENT RECOVERY",
    siteHeading: "Accident recovery handled with care.",
    photo: "/images/free-website/free-towing/accident-recovery.webp",
    photoAlt: "Accident recovery towing",
  },
  {
    id: "flatbed-towing",
    label: "Flatbed Towing",
    icon: "truck",
    heading: "Win flatbed requests from owners of cars that need extra care.",
    body: "Owners of low, classic, AWD and luxury cars search for flatbed towing on purpose. This page shows your equipment and why a flatbed protects their vehicle.",
    bullets: [
      "Flatbed equipment photos",
      "Vehicle types you carry",
      "Quote request for planned moves",
    ],
    ctaLabel: "Build my flatbed towing page",
    kicker: "FLATBED TOWING",
    siteHeading: "Flatbed towing that protects your car.",
    photo: "/images/free-website/free-towing/flatbed-towing.webp",
    photoAlt: "Flatbed towing service",
  },
  {
    id: "heavy-duty-towing",
    label: "Heavy-Duty Towing",
    icon: "users",
    heading: "Show trucking and equipment owners you can handle heavy recovery.",
    body: "Semi, bus and equipment owners judge a tow company on capability. This page lays out your heavy wreckers and recovery work so the right calls reach you.",
    bullets: [
      "Heavy wrecker and recovery details",
      "Commercial vehicle types listed",
      "Direct line for fleet managers",
    ],
    ctaLabel: "Build my heavy-duty towing page",
    kicker: "HEAVY-DUTY TOWING",
    siteHeading: "Heavy-duty towing for trucks and equipment.",
    photo: "/images/free-website/free-towing/heavy-duty-towing.webp",
    photoAlt: "Heavy-duty towing service",
  },
  {
    id: "fleet-accounts",
    label: "Fleet Accounts",
    icon: "building",
    heading: "Turn fleet managers into steady monthly towing accounts.",
    body: "Dealers, rental lots, property managers and fleets want a reliable partner, not a one-off tow. This page explains accounts, billing and response so they reach out.",
    bullets: [
      "Account and billing overview",
      "Private property and impound info",
      "Business enquiry form",
    ],
    ctaLabel: "Build my fleet accounts page",
    kicker: "FLEET ACCOUNTS",
    siteHeading: "Towing accounts for fleets and lots.",
    photo: "/images/free-website/free-towing/fleet-accounts.webp",
    photoAlt: "Fleet towing account service",
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
                <Icon name={service.icon} /> Towing page plan
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
                    <span>Tows</span>
                    <span>Coverage</span>
                    <span>Reviews</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Call dispatch
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Fast dispatch. Upfront communication. A truck on the way when you need one.
                    </p>
                    <div className="niche-site-actions">
                      <b>Call now</b>
                      <b>Our services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted on local roads</small>
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
                      <Icon name="shield" /> 24/7 · LICENSED · INSURED
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
                  <div className="niche-mobile-button">Call now</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built for the call</strong>
                  <small>Clear path from search to dispatch</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
