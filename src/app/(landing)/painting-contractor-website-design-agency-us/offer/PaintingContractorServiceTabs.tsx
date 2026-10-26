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
    id: "interior-painting",
    label: "Interior Painting",
    icon: "wand",
    heading: "Book more interior repaint jobs, one room at a time.",
    body: "An interior painting page with finished rooms, prep steps and furniture care details, written for homeowners who want a clean job without the stress.",
    bullets: [
      "Room-by-room interior photo sets",
      "Prep, protection and cleanup explained",
      "Estimate form that asks the right details",
    ],
    ctaLabel: "Create my interior painting page",
    kicker: "INTERIOR PAINTING",
    siteHeading: "Rooms that feel brand new.",
    photo: "/images/free-website/free-painting-contractor/interior-painting.webp",
    photoAlt: "Painting Contractor service image",
  },
  {
    id: "exterior-painting",
    label: "Exterior Painting",
    icon: "target",
    heading: "Capture exterior painting jobs before peak season fills up.",
    body: "An exterior painting page that covers siding, trim and weather timing, with before-and-after photos and a quick way to request an on-site estimate.",
    bullets: [
      "Siding, trim and door makeovers shown",
      "Weather and timing questions answered",
      "On-site estimate request form",
    ],
    ctaLabel: "Create my exterior painting page",
    kicker: "EXTERIOR PAINTING",
    siteHeading: "Curb appeal, one coat at a time.",
    photo: "/images/free-website/free-painting-contractor/exterior-painting.webp",
    photoAlt: "Painting Contractor service image",
  },
  {
    id: "cabinet-painting",
    label: "Cabinet Painting",
    icon: "layers",
    heading: "Sell cabinet painting as the smart kitchen refresh.",
    body: "A cabinet painting page that compares painting with replacing, shows finish quality up close and explains how long the kitchen is out of use.",
    bullets: [
      "Close-up finish and color photos",
      "Paint vs replace guidance",
      "Timeline for spraying and curing",
    ],
    ctaLabel: "Create my cabinet painting page",
    kicker: "CABINET PAINTING",
    siteHeading: "New cabinets, without replacing.",
    photo: "/images/free-website/free-painting-contractor/cabinet-painting.webp",
    photoAlt: "Painting Contractor service image",
  },
  {
    id: "commercial-painting",
    label: "Commercial Painting",
    icon: "building",
    heading: "Win commercial painting bids with proof of scale.",
    body: "A commercial painting page for offices, retail and HOAs, showing larger projects, after-hours scheduling and a direct path to request a bid walk.",
    bullets: [
      "Office, retail and HOA project photos",
      "Off-hours and phased scheduling noted",
      "Bid walk request for managers",
    ],
    ctaLabel: "Create my commercial painting page",
    kicker: "COMMERCIAL PAINTING",
    siteHeading: "Clean finishes for busy sites.",
    photo: "/images/free-website/free-painting-contractor/commercial-painting.webp",
    photoAlt: "Painting Contractor service image",
  },
  {
    id: "deck-fence-staining",
    label: "Deck & Fence Staining",
    icon: "users",
    heading: "Fill warm months with deck and fence staining work.",
    body: "A deck and fence staining page with wood prep, stain types and before-and-after photos, aimed at homeowners searching once the weather warms.",
    bullets: [
      "Wash, prep and stain steps shown",
      "Stain colors and finish types listed",
      "Quick quote by deck or fence size",
    ],
    ctaLabel: "Create my staining page",
    kicker: "DECK & FENCE STAINING",
    siteHeading: "Decks and fences, refreshed.",
    photo: "/images/free-website/free-painting-contractor/deck-amp-fence-staining.webp",
    photoAlt: "Painting Contractor service image",
  },
  {
    id: "color-consultation",
    label: "Color Consultation",
    icon: "wrench",
    heading: "Use color consultation to start more paint projects.",
    body: "A color consultation page that explains how you help owners pick colors, what the visit includes and how it leads into a clear painting estimate.",
    bullets: [
      "What the color visit includes",
      "Palette and sample examples",
      "Consult booking tied to an estimate",
    ],
    ctaLabel: "Create my color consult page",
    kicker: "COLOR CONSULTATION",
    siteHeading: "Find the right color first.",
    photo: "/images/free-website/free-painting-contractor/color-consultation.webp",
    photoAlt: "Painting Contractor service image",
  },
];

export default function PaintingContractorServiceTabs() {
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
                <Icon name={service.icon} /> Painting contractor service page
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
                  <span>paintingcontractorpros.com</span>
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
                      Careful prep, clean lines and a crew that respects your home. Get a clear written estimate.
                    </p>
                    <div className="niche-site-actions">
                      <b>Get an estimate</b>
                      <b>See our work</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by homeowners nearby</small>
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
                      <Icon name="shield" /> PREP · PRIME · PAINT
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
                  <div className="niche-mobile-button">Get an estimate</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to win estimates</strong>
                  <small>From paint search to quote</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
