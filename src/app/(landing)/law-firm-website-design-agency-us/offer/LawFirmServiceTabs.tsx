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
    heading: "Turn urgent searches into confidential case evaluations.",
    body: "Lead with empathy, credibility, and a clear next step for people comparing representation after an injury, while keeping consultation actions visible without making outcome promises.",
    bullets: [
      "Case-type and injury pathways",
      "Trust-led attorney proof",
      "Confidential consultation actions",
    ],
    ctaLabel: "Build my personal injury pages",
    kicker: "PERSONAL INJURY COUNSEL",
    siteHeading: "Focused advocacy when life changes without warning.",
    photo: "/images/free-website/free-law-firm/consultation.webp",
    photoAlt: "Law Firm work in progress",
  },
  {
    id: "family-law",
    label: "Family Law",
    icon: "target",
    heading: "Make a sensitive first conversation feel easier to begin.",
    body: "Present divorce, custody, support, and related family matters with calm language, privacy signals, attorney credibility, and a direct consultation route.",
    bullets: [
      "Matter-specific guidance",
      "Confidentiality and care signals",
      "Low-friction consultation form",
    ],
    ctaLabel: "Build my family law pages",
    kicker: "FAMILY LAW",
    siteHeading: "Practical guidance for difficult family transitions.",
    photo: "/images/free-website/free-law-firm/case-review.webp",
    photoAlt: "Law Firm work in progress",
  },
  {
    id: "criminal-defense",
    label: "Criminal Defense",
    icon: "layers",
    heading: "Give urgent legal searches a fast, discreet response path.",
    body: "Help prospective clients understand your availability, defense focus, process, and next step without fear-based copy or unsupported claims.",
    bullets: [
      "Urgent click-to-call placement",
      "Charge and case-type pathways",
      "Discreet intake experience",
    ],
    ctaLabel: "Build my criminal defense pages",
    kicker: "CRIMINAL DEFENSE",
    siteHeading: "A clear defense strategy starts with a conversation.",
    photo: "/images/free-website/free-law-firm/consultation.webp",
    photoAlt: "Law Firm work in progress",
  },
  {
    id: "immigration",
    label: "Immigration",
    icon: "pin",
    heading: "Organize complex immigration needs into clear service pathways.",
    body: "Guide families, individuals, and employers toward the right consultation through understandable case categories, process education, and multilingual-ready page structure.",
    bullets: [
      "Visa and status pathways",
      "Process-focused education",
      "Consultation routing by matter",
    ],
    ctaLabel: "Build my immigration pages",
    kicker: "IMMIGRATION LAW",
    siteHeading: "Clear immigration counsel for every next step.",
    photo: "/images/free-website/free-law-firm/case-review.webp",
    photoAlt: "Law Firm work in progress",
  },
  {
    id: "estate-planning",
    label: "Estate Planning",
    icon: "clipboard",
    heading: "Connect planning questions to a confident first meeting.",
    body: "Explain wills, trusts, probate, powers of attorney, and legacy planning in a reassuring flow that encourages clients to schedule before a need becomes urgent.",
    bullets: [
      "Document and goal pathways",
      "Educational trust content",
      "Planning consultation actions",
    ],
    ctaLabel: "Build my estate planning pages",
    kicker: "ESTATE PLANNING",
    siteHeading: "Protect what matters with a plan built around you.",
    photo: "/images/free-website/free-law-firm/client-meeting.webp",
    photoAlt: "Law Firm work in progress",
  },
  {
    id: "business-law",
    label: "Business Law",
    icon: "building",
    heading: "Give business owners a direct route to practical counsel.",
    body: "Present contracts, formation, disputes, employment matters, and ongoing counsel in a concise business-focused experience built for qualified enquiries.",
    bullets: [
      "Business-stage service paths",
      "Counsel and industry credibility",
      "Qualified consultation routing",
    ],
    ctaLabel: "Build my business law pages",
    kicker: "BUSINESS COUNSEL",
    siteHeading: "Legal clarity for the decisions that move business forward.",
    photo: "/images/free-website/free-law-firm/client-meeting.webp",
    photoAlt: "Law Firm work in progress",
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
                <Icon name={service.icon} /> Law Firm website path
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
