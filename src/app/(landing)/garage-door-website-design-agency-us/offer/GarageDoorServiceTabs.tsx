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
    id: "emergency-repair",
    label: "Emergency Repair",
    icon: "zap",
    heading: "Be the first call when a garage door won’t move.",
    body: "An emergency repair page with your phone number up top, the hours you answer and clear safety steps, written for owners stuck with a car inside.",
    bullets: [
      "Phone number fixed at the top",
      "Your real dispatch hours stated clearly",
      "Safety tips while they wait",
    ],
    ctaLabel: "Build my emergency repair page",
    kicker: "EMERGENCY REPAIR",
    siteHeading: "Door stuck? Help is close.",
    photo: "/images/free-website/free-garage-door/emergency-repair.webp",
    photoAlt: "Garage Door service image",
  },
  {
    id: "broken-springs",
    label: "Broken Springs",
    icon: "wrench",
    heading: "Own the broken spring searches in your service area.",
    body: "A broken spring page that explains torsion and extension springs, warns against DIY risk and makes same-day booking easy if you offer it.",
    bullets: [
      "Torsion vs extension springs explained",
      "Clear DIY safety warning",
      "Same-day request if you provide it",
    ],
    ctaLabel: "Build my spring repair page",
    kicker: "BROKEN SPRINGS",
    siteHeading: "Snapped spring? Call us.",
    photo: "/images/free-website/free-garage-door/broken-springs.webp",
    photoAlt: "Garage Door service image",
  },
  {
    id: "opener-repair",
    label: "Opener Repair",
    icon: "door",
    heading: "Win opener repair and replacement jobs by brand.",
    body: "An opener page listing the brands you service, common faults like remotes and sensors, and when a repair makes more sense than a new opener.",
    bullets: [
      "Brands you service listed clearly",
      "Remote, sensor and motor issues",
      "Repair or replace guidance",
    ],
    ctaLabel: "Build my opener repair page",
    kicker: "OPENER REPAIR",
    siteHeading: "Openers fixed or replaced.",
    photo: "/images/free-website/free-garage-door/opener-repair.webp",
    photoAlt: "Garage Door service image",
  },
  {
    id: "new-door-installation",
    label: "New Door Installation",
    icon: "target",
    heading: "Turn new door shoppers into booked install quotes.",
    body: "A new door page with style galleries, insulation and material options, and a quote form that asks size and style so you can price the job fast.",
    bullets: [
      "Door style gallery by material",
      "Insulation and window options",
      "Install quote form with door size",
    ],
    ctaLabel: "Build my door installation page",
    kicker: "NEW DOOR INSTALLATION",
    siteHeading: "A new door, new curb appeal.",
    photo: "/images/free-website/free-garage-door/new-door-installation.webp",
    photoAlt: "Garage Door service image",
  },
  {
    id: "commercial-doors",
    label: "Commercial Doors",
    icon: "building",
    heading: "Reach property managers who need commercial door service.",
    body: "A commercial door page for roll-up, sectional and dock doors, with service contracts, after-hours repair and a direct request path for managers.",
    bullets: [
      "Roll-up, sectional and dock doors",
      "Service contracts and after-hours help",
      "Request form for facility managers",
    ],
    ctaLabel: "Build my commercial doors page",
    kicker: "COMMERCIAL DOORS",
    siteHeading: "Doors that keep work moving.",
    photo: "/images/free-website/free-garage-door/commercial-doors.webp",
    photoAlt: "Garage Door service image",
  },
  {
    id: "preventive-maintenance",
    label: "Preventive Maintenance",
    icon: "clipboard",
    heading: "Sell tune-ups that stop breakdowns before they start.",
    body: "A maintenance page that lists what each tune-up covers, from springs and rollers to balance and safety tests, with an easy way to book a visit.",
    bullets: [
      "Tune-up checklist, point by point",
      "Safety and balance tests explained",
      "Simple tune-up booking form",
    ],
    ctaLabel: "Build my maintenance page",
    kicker: "PREVENTIVE MAINTENANCE",
    siteHeading: "Tune it up. Skip the breakdown.",
    photo: "/images/free-website/free-garage-door/preventive-maintenance.webp",
    photoAlt: "Garage Door service image",
  },
];

export default function GarageDoorServiceTabs() {
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
                <Icon name={service.icon} /> Garage door service page
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
                  <span>garagedoorpros.com</span>
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
                      Local techs, clear quotes and safe repairs, often the same day you call us for help.
                    </p>
                    <div className="niche-site-actions">
                      <b>Call now</b>
                      <b>Our services</b>
                    </div>
                    <div className="niche-stars">
                      ★★★★★ <small>Reviewed by local owners</small>
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
                      <Icon name="shield" /> SPRINGS · OPENERS · DOORS
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
                  <strong>Built for repair calls</strong>
                  <small>From search to booked repair</small>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
