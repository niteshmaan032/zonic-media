"use client";

import Image from "next/image";
import { useState } from "react";

import Icon, { type IconName } from "./Icon";

type PlumbingService = {
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

const SERVICES: PlumbingService[] = [
  {
    id: "emergency",
    label: "Emergency Plumbing",
    icon: "zap",
    heading: "Answer the burst-pipe search before the water spreads.",
    body: "An emergency plumbing page that tells a stressed owner what to do right now, shows you answer at any hour and keeps the call button front and center.",
    bullets: [
      "Sticky tap-to-call on mobile",
      "Shut-off tips while they wait",
      "Hours and response area shown",
    ],
    ctaLabel: "Build my emergency plumbing pages",
    kicker: "24/7 PLUMBING HELP",
    siteHeading: "Fast plumbing help when every minute matters.",
    photo: "/images/free-website/free-plumbing/emergency-plumbing.webp",
    photoAlt: "Plumber repairing a water line under a residential sink",
  },
  {
    id: "drains",
    label: "Drain Cleaning",
    icon: "droplets",
    heading: "Turn a backed-up drain into a booked visit.",
    body: "Drain cleaning pages that explain clogs, hydro jetting and camera inspections in plain terms, with booking options next to every fix.",
    bullets: [
      "Clog and backup explainers",
      "Camera inspection details",
      "Booking beside every service",
    ],
    ctaLabel: "Build my drain cleaning pages",
    kicker: "DRAIN CLEANING",
    siteHeading: "Clear drains. Clean work. Lasting relief.",
    photo: "/images/free-website/free-plumbing/drain-sewer.webp",
    photoAlt: "Plumbers running a sewer camera inspection through a drain access",
  },
  {
    id: "water-heaters",
    label: "Water Heaters",
    icon: "flame",
    heading: "Turn a cold shower into a water heater quote.",
    body: "Compare tank and tankless options, repair or replace advice, warranties and financing, with quote buttons where owners make the call.",
    bullets: [
      "Tank vs tankless guides",
      "Repair or replace advice",
      "Financing and warranty details",
    ],
    ctaLabel: "Build my water heater pages",
    kicker: "WATER HEATER EXPERTS",
    siteHeading: "Reliable hot water starts with the right system.",
    photo: "/images/free-website/free-plumbing/water-heater.webp",
    photoAlt: "Plumber installing a wall-mounted tankless water heater",
  },
  {
    id: "sewer-lines",
    label: "Sewer Lines",
    icon: "layers",
    heading: "Make a big sewer repair easier to approve.",
    body: "Sewer line pages that show camera findings, trenchless and dig options, timelines and financing, so owners feel ready to say yes.",
    bullets: [
      "Camera inspection walkthroughs",
      "Trenchless repair explainers",
      "Payment options explained early",
    ],
    ctaLabel: "Build my sewer line pages",
    kicker: "SEWER LINE SERVICE",
    siteHeading: "Clear answers for sewer line problems.",
    photo: "/images/free-website/free-plumbing/drain-sewer.webp",
    photoAlt: "Plumbing crew inspecting a sewer line access point",
  },
  {
    id: "leak-detection",
    label: "Leak Detection",
    icon: "search",
    heading: "Reach the owner who just found a wet ceiling.",
    body: "Leak detection pages that explain slab, wall and hidden leaks, show your detection tools and get a visit booked before damage grows.",
    bullets: [
      "Hidden leak warning signs",
      "Detection method explainers",
      "Fast visit request form",
    ],
    ctaLabel: "Build my leak detection pages",
    kicker: "LEAK DETECTION",
    siteHeading: "Find the leak before damage spreads.",
    photo: "/images/free-website/free-plumbing/emergency-plumbing.webp",
    photoAlt: "Plumber tracing a concealed water leak beneath a cabinet",
  },
  {
    id: "commercial",
    label: "Commercial Plumbing",
    icon: "building",
    heading: "Give building managers a plumber they can call direct.",
    body: "A commercial plumbing path covering maintenance contracts, backflow testing, drain programs and response times for property managers.",
    bullets: [
      "Maintenance contract pages",
      "Backflow and code compliance",
      "Commercial job request form",
    ],
    ctaLabel: "Build my commercial plumbing pages",
    kicker: "COMMERCIAL PLUMBING",
    siteHeading: "Commercial plumbing built around uptime.",
    photo: "/images/free-website/free-plumbing/drain-sewer.webp",
    photoAlt: "Commercial plumbing crew servicing an exterior drain line",
  },
];

export default function PlumbingServiceTabs() {
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
                <Icon name={service.icon} /> Plumbing call path
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
                  <span>clearflowplumbing.com</span>
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
                    <span>Projects</span>
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
                    <p>Trusted local plumbers. Clear options. Clean workmanship built around your property.</p>
                    <div className="niche-site-actions">
                      <b>Book service</b>
                      <b>View plumbing services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local property owners</small>
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
                  <strong>Made to book plumbing jobs</strong>
                  <small>From a local search to a dispatched truck</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
