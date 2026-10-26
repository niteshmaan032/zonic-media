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
    id: "personal-injury",
    label: "Personal Injury",
    icon: "scale",
    heading: "Help injured people take a clear first step toward a consultation.",
    body: "Explain injury case types, the process and what to bring to a first meeting, in calm language with consultation actions visible and no outcome promises.",
    bullets: [
      "Injury type pathways",
      "What-to-expect process steps",
      "Confidential consultation form",
    ],
    ctaLabel: "Build my personal injury pages",
    kicker: "PERSONAL INJURY COUNSEL",
    siteHeading: "Hurt in an accident? Start with a conversation.",
    photo: "/images/free-website/free-law-firm/consultation.webp",
    photoAlt: "Attorney consultation with a client",
  },
  {
    id: "family-law",
    label: "Family Law",
    icon: "target",
    heading: "Make divorce and custody enquiries feel easier to start.",
    body: "Present divorce, custody, support and related matters with calm wording, privacy cues, attorney bios and a low-pressure consultation request.",
    bullets: [
      "Matter-by-matter pages",
      "Privacy and care cues",
      "Low-pressure consultation form",
    ],
    ctaLabel: "Build my family law pages",
    kicker: "FAMILY LAW",
    siteHeading: "Support for family changes, step by step.",
    photo: "/images/free-website/free-law-firm/case-review.webp",
    photoAlt: "Family law case review",
  },
  {
    id: "criminal-defense",
    label: "Criminal Defense",
    icon: "layers",
    heading: "Give people facing charges a fast, discreet way to call.",
    body: "Show availability, the charges you defend and how the process works, without fear-based copy or claims about results, plus a call button on every screen.",
    bullets: [
      "Click-to-call on every screen",
      "Charge-type pathways",
      "Discreet intake form",
    ],
    ctaLabel: "Build my criminal defense pages",
    kicker: "CRIMINAL DEFENSE",
    siteHeading: "Charged with a crime? Talk to a defense attorney.",
    photo: "/images/free-website/free-law-firm/consultation.webp",
    photoAlt: "Criminal defense attorney consultation",
  },
  {
    id: "immigration",
    label: "Immigration",
    icon: "pin",
    heading: "Sort complex immigration needs into clear, simple pathways.",
    body: "Guide families, workers and employers toward the right consultation with clear case categories, process overviews and pages ready for more than one language.",
    bullets: [
      "Visa and status pathways",
      "Process overview content",
      "Consultation routing by matter",
    ],
    ctaLabel: "Build my immigration pages",
    kicker: "IMMIGRATION LAW",
    siteHeading: "Immigration counsel for your next step.",
    photo: "/images/free-website/free-law-firm/case-review.webp",
    photoAlt: "Immigration case review",
  },
  {
    id: "estate-planning",
    label: "Estate Planning",
    icon: "clipboard",
    heading: "Turn will and trust questions into planning consultations.",
    body: "Explain wills, trusts, powers of attorney and probate in a calm flow that invites people to book a planning meeting before a need becomes urgent.",
    bullets: [
      "Document and goal pathways",
      "Plain-language planning content",
      "Planning meeting request",
    ],
    ctaLabel: "Build my estate planning pages",
    kicker: "ESTATE PLANNING",
    siteHeading: "Plan ahead for the people you love.",
    photo: "/images/free-website/free-law-firm/client-meeting.webp",
    photoAlt: "Estate planning client meeting",
  },
  {
    id: "business-law",
    label: "Business Law",
    icon: "building",
    heading: "Give business owners a direct line to counsel.",
    body: "Present contracts, formation, disputes and ongoing counsel in a short, business-first layout that makes it easy for owners to request a meeting.",
    bullets: [
      "Business-stage service paths",
      "Attorney and industry background",
      "Business consultation routing",
    ],
    ctaLabel: "Build my business law pages",
    kicker: "BUSINESS COUNSEL",
    siteHeading: "Legal support for decisions that grow a business.",
    photo: "/images/free-website/free-law-firm/client-meeting.webp",
    photoAlt: "Business law client meeting",
  },
];

export default function LawFirmServiceTabs() {
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
                <Icon name={service.icon} /> Practice-area page plan
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
                  <span>yourlawfirm.com</span>
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
                    <span>Practice Areas</span>
                    <span>Attorneys</span>
                    <span>Contact</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Consultation
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Clear explanations. Direct communication. A simple way to request a consultation.
                    </p>
                    <div className="niche-site-actions">
                      <b>Request consultation</b>
                      <b>Practice areas</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Reviews from local clients</small>
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
                      <Icon name="shield" /> LOCAL · CONFIDENTIAL · CLEAR
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
                  <div className="niche-mobile-button">Request consultation</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built for intake</strong>
                  <small>Clear path from search to consultation</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
