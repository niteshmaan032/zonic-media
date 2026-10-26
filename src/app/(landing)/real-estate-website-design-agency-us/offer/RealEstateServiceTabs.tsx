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
    id: "buy-a-home",
    label: "Buy a Home",
    icon: "wrench",
    heading: "Give home buyers a search experience that ends in a call.",
    body: "Buyers want listings, neighborhoods and an agent who knows the area. This page pairs IDX-ready search with a simple showing request and your story.",
    bullets: [
      "IDX-ready listing search",
      "Neighborhood highlights",
      "Showing request form",
    ],
    ctaLabel: "Build my buyer pages",
    kicker: "BUY A HOME",
    siteHeading: "Find the home that fits your life.",
    photo: "/images/free-website/free-real-estate/buy-a-home.webp",
    photoAlt: "Home buying with a local agent",
  },
  {
    id: "sell-a-home",
    label: "Sell a Home",
    icon: "target",
    heading: "Turn what’s my home worth searches into listing appointments.",
    body: "Sellers start with a value question. This page offers a home value request, explains your selling process and invites a listing conversation.",
    bullets: [
      "Home value request form",
      "Selling process steps",
      "Listing appointment booking",
    ],
    ctaLabel: "Build my seller pages",
    kicker: "SELL A HOME",
    siteHeading: "Thinking of selling? Start with your home’s value.",
    photo: "/images/free-website/free-real-estate/sell-a-home.webp",
    photoAlt: "Home selling service",
  },
  {
    id: "luxury-listings",
    label: "Luxury Listings",
    icon: "home",
    heading: "Present high-end listings with the polish they deserve.",
    body: "Luxury buyers and sellers judge presentation first. This page gives listings large photos, clean layouts and a private enquiry path for serious clients.",
    bullets: [
      "Large photo galleries",
      "Clean, premium layouts",
      "Private enquiry form",
    ],
    ctaLabel: "Build my luxury listing pages",
    kicker: "LUXURY LISTINGS",
    siteHeading: "Luxury homes, presented beautifully.",
    photo: "/images/free-website/free-real-estate/luxury-listings.webp",
    photoAlt: "Luxury home listing",
  },
  {
    id: "relocation",
    label: "Relocation",
    icon: "truck",
    heading: "Win relocation clients with honest local insight.",
    body: "People moving to your area need schools, commutes and neighborhoods explained. This page answers those questions and offers a quick call with you.",
    bullets: [
      "Area and commute guides",
      "Neighborhood comparisons",
      "Relocation call request",
    ],
    ctaLabel: "Build my relocation pages",
    kicker: "RELOCATION",
    siteHeading: "Moving here? Get to know the area.",
    photo: "/images/free-website/free-real-estate/relocation.webp",
    photoAlt: "Relocation to a new area",
  },
  {
    id: "new-construction",
    label: "New Construction",
    icon: "layers",
    heading: "Help buyers understand new construction before they visit a model home.",
    body: "New builds raise questions about lots, timelines and representation. This page explains how you help buyers through the process and invites a call.",
    bullets: [
      "New community overviews",
      "Build process explained",
      "Buyer representation info",
    ],
    ctaLabel: "Build my new construction pages",
    kicker: "NEW CONSTRUCTION",
    siteHeading: "Buying new? Have an agent on your side.",
    photo: "/images/free-website/free-real-estate/new-construction.webp",
    photoAlt: "New construction homes",
  },
  {
    id: "home-valuation",
    label: "Home Valuation",
    icon: "users",
    heading: "Make your home value form the start of a seller relationship.",
    body: "A valuation request is a seller raising their hand. This page keeps the form short, explains how you price homes and routes the lead to you fast.",
    bullets: [
      "Short valuation form",
      "How pricing works, in plain words",
      "Fast follow-up routing",
    ],
    ctaLabel: "Build my home valuation page",
    kicker: "HOME VALUATION",
    siteHeading: "Get a clear value for your home.",
    photo: "/images/free-website/free-real-estate/home-valuation.webp",
    photoAlt: "Home valuation request",
  },
];

export default function RealEstateServiceTabs() {
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
                <Icon name={service.icon} /> Agent page plan
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
                  <span>realestatepros.com</span>
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
                    <span>Listings</span>
                    <span>Sell</span>
                    <span>About</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Home value
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Local knowledge. Clear advice. A simple next step for buyers and sellers.
                    </p>
                    <div className="niche-site-actions">
                      <b>Search homes</b>
                      <b>Home value</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local buyers and sellers</small>
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
                      <Icon name="shield" /> LICENSED · LOCAL · RESPONSIVE
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
                  <div className="niche-mobile-button">Search homes</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built for real leads</strong>
                  <small>Clear path from search to conversation</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
