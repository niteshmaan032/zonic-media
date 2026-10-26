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
    heading: "Help people with back pain see how your care works.",
    body: "Back pain searches are personal. This page explains your approach, what a first visit involves and how to book, without promising specific results.",
    bullets: [
      "First-visit steps explained",
      "Care approach in plain words",
      "Booking and call tracking",
    ],
    ctaLabel: "Build my back pain page",
    kicker: "BACK PAIN CARE",
    siteHeading: "Back pain? Let’s talk about your options.",
    photo: "/images/free-website/free-chiropractic/back-pain-care.webp",
    photoAlt: "Chiropractic care for back pain",
  },
  {
    id: "neck-pain-care",
    label: "Neck Pain Care",
    icon: "target",
    heading: "Turn neck pain and stiffness searches into booked visits.",
    body: "Desk work, sleep and stress send people searching. This page covers common neck concerns, your exam process and a simple path to book.",
    bullets: [
      "Common neck concerns covered",
      "Exam and care process",
      "Simple booking form",
    ],
    ctaLabel: "Build my neck pain page",
    kicker: "NECK PAIN CARE",
    siteHeading: "Neck stiffness? Start with an exam.",
    photo: "/images/free-website/free-chiropractic/neck-pain-care.webp",
    photoAlt: "Chiropractic care for neck pain",
  },
  {
    id: "sports-injuries",
    label: "Sports Injuries",
    icon: "wrench",
    heading: "Reach active patients looking for sports injury care.",
    body: "Athletes want a provider who understands training and recovery. This page explains your sports care, who you work with and how to book.",
    bullets: [
      "Sport and activity sections",
      "Care and recovery approach",
      "Fast booking for active patients",
    ],
    ctaLabel: "Build my sports injury page",
    kicker: "SPORTS INJURIES",
    siteHeading: "Care built around your training.",
    photo: "/images/free-website/free-chiropractic/sports-injuries.webp",
    photoAlt: "Chiropractic care for sports injuries",
  },
  {
    id: "auto-accident-care",
    label: "Auto Accident Care",
    icon: "zap",
    heading: "Guide people after a car accident toward an evaluation.",
    body: "After a crash, people have questions about care, paperwork and insurance. This page explains your process and the documents to bring, with booking close by.",
    bullets: [
      "Evaluation process explained",
      "Insurance and paperwork info",
      "Priority booking path",
    ],
    ctaLabel: "Build my auto accident page",
    kicker: "AUTO ACCIDENT CARE",
    siteHeading: "In a car accident? Book an evaluation.",
    photo: "/images/free-website/free-chiropractic/auto-accident-care.webp",
    photoAlt: "Chiropractic evaluation after a car accident",
  },
  {
    id: "wellness-care",
    label: "Wellness Care",
    icon: "layers",
    heading: "Keep current patients coming back for wellness care.",
    body: "Wellness and maintenance visits build a steady schedule. This page explains ongoing care options and makes rebooking simple for returning patients.",
    bullets: [
      "Wellness care options",
      "Return-visit booking",
      "Care plan details, if offered",
    ],
    ctaLabel: "Build my wellness care page",
    kicker: "WELLNESS CARE",
    siteHeading: "Ongoing care that fits your routine.",
    photo: "/images/free-website/free-chiropractic/wellness-care.webp",
    photoAlt: "Chiropractic wellness care",
  },
  {
    id: "new-patient-visits",
    label: "New Patient Visits",
    icon: "home",
    heading: "Make the first visit easy to understand and book.",
    body: "New patients want to know what happens, how long it takes and whether insurance applies. This page answers that and offers online intake before they arrive.",
    bullets: [
      "What to expect on visit one",
      "Insurance and payment details",
      "Online intake forms",
    ],
    ctaLabel: "Build my new patient page",
    kicker: "NEW PATIENT VISITS",
    siteHeading: "New here? Here’s what to expect.",
    photo: "/images/free-website/free-chiropractic/new-patient-visits.webp",
    photoAlt: "New patient chiropractic visit",
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
                <Icon name={service.icon} /> Clinic page plan
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
                    <span>Conditions</span>
                    <span>First Visit</span>
                    <span>Insurance</span>
                  </div>
                  <div className="niche-mini-call">
                    <Icon name="phone" /> Book a visit
                  </div>
                </div>
                <div className="niche-site-hero">
                  <div className="niche-site-copy">
                    <span>{service.kicker}</span>
                    <h4>{service.siteHeading}</h4>
                    <p>
                      Friendly team. Clear explanations. An easy way to book your first visit.
                    </p>
                    <div className="niche-site-actions">
                      <b>Book first visit</b>
                      <b>Our care</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Trusted by local patients</small>
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
                      <Icon name="shield" /> LICENSED · LOCAL · NEW PATIENTS
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
                  <div className="niche-mobile-button">Book first visit</div>
                </div>
              </div>

              <div className="niche-result-card">
                <Icon name="building" />
                <span>
                  <strong>Built to book visits</strong>
                  <small>Clear path from search to first visit</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
