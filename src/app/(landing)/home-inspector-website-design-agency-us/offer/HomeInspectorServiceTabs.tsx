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
    id: "buyer-inspections",
    label: "Buyer Inspections",
    icon: "search",
    heading: "Get booked the day an offer is accepted.",
    body: "A buyer inspection page that explains what you check, shows a sample report and lets buyers or their agent pick a time online in a few taps.",
    bullets: [
      "What the inspection covers",
      "Downloadable sample report",
      "Online scheduling with time slots",
    ],
    ctaLabel: "Build my buyer inspection pages",
    kicker: "BUYER INSPECTIONS",
    siteHeading: "Buy with your eyes open.",
    photo: "/images/free-website/free-home-inspector/buyer-inspections.webp",
    photoAlt: "Home Inspector service image",
  },
  {
    id: "pre-listing-inspections",
    label: "Pre-Listing Inspections",
    icon: "target",
    heading: "Help sellers find problems before buyers do.",
    body: "Pre-listing pages that show sellers and listing agents how an early inspection can smooth the sale, with repair planning tips and a simple booking form.",
    bullets: [
      "Seller benefit explainers",
      "Listing agent booking path",
      "Repair planning guidance",
    ],
    ctaLabel: "Build my pre-listing pages",
    kicker: "PRE-LISTING INSPECTIONS",
    siteHeading: "Sell with fewer surprises.",
    photo: "/images/free-website/free-home-inspector/pre-listing-inspections.webp",
    photoAlt: "Home Inspector service image",
  },
  {
    id: "new-construction",
    label: "New Construction",
    icon: "home",
    heading: "Reach new-home buyers before the final walkthrough.",
    body: "New construction pages that explain phase inspections, final walkthroughs and builder warranty checks, with booking timed to each stage of the build.",
    bullets: [
      "Phase inspection explainers",
      "Warranty inspection reminders",
      "Stage-based booking form",
    ],
    ctaLabel: "Build my new construction pages",
    kicker: "NEW CONSTRUCTION",
    siteHeading: "New home, checked at every stage.",
    photo: "/images/free-website/free-home-inspector/new-construction.webp",
    photoAlt: "Home Inspector service image",
  },
  {
    id: "radon-testing",
    label: "Radon Testing",
    icon: "wrench",
    heading: "Add radon testing to more inspection bookings.",
    body: "Radon pages that explain testing, timelines and results in plain words, so buyers add the test when they book their home inspection online.",
    bullets: [
      "Radon risk explainers",
      "Add-on at booking",
      "Results and next steps guide",
    ],
    ctaLabel: "Build my radon testing pages",
    kicker: "RADON TESTING",
    siteHeading: "Know your radon levels.",
    photo: "/images/free-website/free-home-inspector/radon-testing.webp",
    photoAlt: "Home Inspector service image",
  },
  {
    id: "sewer-scope",
    label: "Sewer Scope",
    icon: "layers",
    heading: "Sell the sewer scope buyers did not expect.",
    body: "Sewer scope pages with camera footage examples and clear reasons to check older lines, plus an easy add-on to the main inspection.",
    bullets: [
      "Camera footage examples",
      "Older home risk explainers",
      "One-click add-on booking",
    ],
    ctaLabel: "Build my sewer scope pages",
    kicker: "SEWER SCOPE",
    siteHeading: "See inside the sewer line.",
    photo: "/images/free-website/free-home-inspector/sewer-scope.webp",
    photoAlt: "Home Inspector service image",
  },
  {
    id: "commercial-inspections",
    label: "Commercial Inspections",
    icon: "building",
    heading: "Win commercial property inspections from investors.",
    body: "A commercial inspection path covering property types, report scope, turnaround times and credentials for investors, lenders, brokers and buyers.",
    bullets: [
      "Property type pages",
      "Report scope and timelines",
      "Commercial quote request form",
    ],
    ctaLabel: "Build my commercial inspection pages",
    kicker: "COMMERCIAL INSPECTIONS",
    siteHeading: "Due diligence you can rely on.",
    photo: "/images/free-website/free-home-inspector/commercial-inspections.webp",
    photoAlt: "Home Inspector service image",
  },
];

export default function HomeInspectorServiceTabs() {
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
                <Icon name={service.icon} /> Inspection booking path
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
                  <span>homeinspectorpros.com</span>
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
                    <Icon name="phone" /> Book inspection
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Certified local inspectors. Clear photo reports. Easy
                      online booking.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book inspection</b>
                      <b>View sample report</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local buyers and agents</small>
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
                  <div className="niche-mobile-button">Book inspection</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Made to fill your inspection calendar</strong>
                  <small>From an agent referral to a booked slot</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
