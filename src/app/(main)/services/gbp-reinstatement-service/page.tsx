import "@/app/style/gmb-reinstatement.css";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Footer from "@/app/components/Footer";
import RelatedServices from "@/app/components/RelatedServices";
import GmbAuditForm from "@/app/components/GmbAuditForm";
import GmbAuditScanner from "@/app/components/GmbAuditScanner";
import GmbMapPackConsole from "@/app/components/GmbMapPackConsole";
import GmbProfileCard from "@/app/components/GmbProfileCard";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import ScrollToFormLink from "@/app/components/ScrollToFormLink";
import {
  buildBreadcrumbJsonLd,
} from "@/shared/seoSchemas";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { GoogleRatingBadge } from "@/components/rd/dfw-kit/visuals";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GMB Reinstatement Help", url: "/services/gbp-reinstatement-service" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.zonicllc.com/services/gbp-reinstatement-service#service",
  name: "GMB Reinstatement Service",
  alternateName: [
    "Google Business Profile Reinstatement Service",
    "GBP Reinstatement Service",
    "Google My Business Reinstatement",
    "Google Business Profile Suspension Recovery",
  ],
  serviceType: "Google Business Profile Reinstatement",
  description:
    "GBP reinstatement service: GMB reinstatement experts recover suspended and disabled Google Business Profiles in 5 to 7 days. 900+ reinstated. No Fix, No Charge.",
  url: "https://www.zonicllc.com/services/gbp-reinstatement-service",
  provider: {
    "@type": "Organization",
    "@id": "https://www.zonicllc.com/#organization",
    name: "Zonic Media",
    telephone: "+1-302-726-9736",
    email: "contact@zonicllc.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "BusinessAudience",
    name: "Local businesses, agencies, and multi-location brands with suspended Google Business Profiles",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free Google Business Profile suspension audit",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free, same-day suspension audit that identifies the likely cause and whether the profile can be reinstated.",
    },
    {
      "@type": "Offer",
      name: "Google Business Profile reinstatement",
      price: "400",
      priceCurrency: "USD",
      description:
        "Flat $400 per profile, charged only after Google reinstates the profile (No Fix, No Charge). If the profile is not reinstated, no reinstatement fee is charged.",
    },
  ],
};

const GmbResinstFaqs = [
  {
    question: "What is a GMB reinstatement service?",
    answer:
      "A GMB reinstatement service (also called Google Business Profile reinstatement) diagnoses why Google suspended your Business Profile, fixes the underlying policy violations, and files a documented appeal with Google to get the listing restored to Search and Maps. Zonic Media handles the entire process — audit, compliance fixes, appeal, and follow-up with Google until your profile is live again.",
  },
  {
    question: "What types of GBP suspensions do you handle?",
    answer:
      "We handle all suspension types — soft suspensions, hard suspensions, disabled listings, and profiles suspended pending verification. If your listing is suspended, our team has very likely handled a similar case before.",
  },
  {
    question: "How long does Google Business Profile reinstatement take?",
    answer:
      "Google says appeal reviews can take up to 5 business days. Counting the audit and evidence prep, most of our cases resolve within five to seven business days. Complex cases, or ones that also need video verification, can take up to two weeks. You get a realistic timeline after the free audit.",
  },
  {
    question: "How much does a GMB reinstatement service cost?",
    answer:
      "Our Google Business Profile reinstatement fee is a flat $400 per profile, and it is charged only after Google reinstates your profile. The suspension audit is free. If Google does not reinstate the profile, you pay nothing for the reinstatement (No Fix, No Charge). Agencies and multi-location brands can ask for a bulk quote.",
  },
  {
    question: "What counts as reinstated, and when exactly am I charged?",
    answer:
      "Reinstated means your Business Profile is live again on Google Search and Maps and you can manage it from your Google account. We charge the $400 fee only once both are true. Until then there is nothing to pay, and if Google's final decision is no, there is no reinstatement fee at all.",
  },
  {
    question: "Can you guarantee reinstatement?",
    answer:
      "No one can guarantee it, because Google makes the final decision. That is why the fee is only charged after your profile is back. What we do guarantee is the work: a free audit of the real cause, the right evidence attached to your appeal, and a clear answer on your odds before you commit.",
  },
  {
    question: "Do you need my Google password?",
    answer:
      "No. You add us as a manager on the Business Profile, or we guide you through each step on a call. Never share your password or verification codes with anyone, including us.",
  },
  {
    question: "Will my reviews come back after reinstatement?",
    answer:
      "Usually, yes. Reinstatement restores your original profile, so its reviews, rating and photos come back with it, though some can take a few days to show again. Creating a new profile instead would start you at zero reviews.",
  },
  {
    question: "Which cases don't you take on?",
    answer:
      "Businesses that are not eligible for a Business Profile: virtual offices or mailboxes used as a storefront address, online-only businesses with no in-person contact, and names that are not the real business name. If the audit shows your case falls here, we tell you straight away and charge nothing.",
  },
  {
    question:
      "Can I just create a new Google Business Profile instead of reinstating the suspended one?",
    answer:
      "No — creating a new profile is one of the most damaging mistakes you can make. Google links new listings to the suspended one through your address, phone number, and account ownership, and typically suspends the new profile too, which makes the original case harder to win. The only safe path is reinstating the original profile through a proper appeal.",
  },
  {
    question:
      "What is the difference between a soft suspension and a hard suspension?",
    answer:
      "A soft suspension marks your profile as unverified — the listing still appears on Google, but you lose the ability to manage it. A hard suspension removes your Business Profile from Google Search and Maps entirely, so customers can't find you at all. Hard suspensions are more serious, but both types can be reinstated with the right appeal, and we handle both.",
  },
  {
    question: "What if Google rejects the appeal?",
    answer:
      "Google's help page says an appeal can only be submitted once per issue, so we prepare the evidence before filing instead of filing twice. If the decision is \"Not approved\", we review Google's reason, fix anything still wrong, and take the case to Google Business Profile support with the new evidence. Creating a new profile is never the answer. And if the profile isn't reinstated, you don't pay the $400 fee.",
  },
  {
    question: "Do I need to provide anything?",
    answer:
      "Usually some basic proof of legitimacy — a utility bill, business registration, or similar documentation to support the appeal. We tell you exactly what's needed after the audit.",
  },
  {
    question:
      "What is optimization and why does it matter after reinstatement?",
    answer:
      "Once your profile is live again, we optimize the categories, services, photos, posts, and review replies so you rank higher and attract more customers than before — and so the same issue is less likely to recur.",
  },
  {
    question: "Do you work with agencies and multi-location businesses?",
    answer:
      "Yes. We regularly support agencies and multi-location brands managing many Google Business Profiles. Contact us for agency and bulk reinstatement options.",
  },
  {
    question: "Which companies help with Google Business reinstatement, and why choose Zonic Media?",
    answer:
      "Several companies help with Google Business Profile reinstatement. What separates them is how they find the real cause, whether the fee depends on the outcome, and proof from real clients. Zonic Media has reinstated and verified 900+ Google Business Profiles for businesses across the United States, holds a 5.0 rating on Google, and typically resolves cases in 5–7 business days. It starts with a free suspension audit and charges a flat $400 only after the profile is reinstated. Post-reinstatement optimization is included so the profile comes back stronger.",
  },
  {
    question: "Where can I read verified reviews of Zonic Media's reinstatement service?",
    answer:
      "Zonic Media's Google reviews (5.0) are the best place to start: clients describe real reinstatements, from a real estate profile restored within 48 hours to a towing company back on Google in a week and a half, and a Chicago contractor helped through a sudden suspension. More independent reviews are on Trustpilot (trustpilot.com/review/zonicllc.com) and Clutch (clutch.co/profile/zonic-media).",
  },
  {
    question: "Should I file the Google Business Profile reinstatement form myself before hiring an expert?",
    answer:
      "Only if you know exactly why the profile was suspended and can prove the fix with documents. Google reviews one appeal per issue, so a weak first appeal is hard to undo. Our free suspension audit tells you the likely trigger within 24 hours; if it is a simple fix we say so, and if it needs evidence we prepare and file it with you. Reinstatement typically completes in 5 to 7 business days, and the $400 fee is only charged when the profile is back.",
  },
];

// Verbatim excerpts of Google reviews (5.0), trimmed with ellipses only.
const REVIEW_QUOTES = [
  {
    name: "Gaines R.",
    context: "Suspended after an address change",
    quote:
      "My business account got suspended due to a change of address… They explained why this happen, and how they can help! The price was fair, the communication was good, and everything is back up and running!",
  },
  {
    name: "Cisco M.",
    context: "Towing company",
    quote:
      "A business profile on my Tow Truck company was suspended and… a team fixed it in one week and a half. Highly recommended.",
  },
  {
    name: "Val K.",
    context: "Suspended for unclear reasons",
    quote:
      "What a pleasure working with Sam and the team to reinstate our Google profile after it was suspended for reasons we weren't sure how to handle. They were super communicative and easy to work with.",
  },
  {
    name: "Sara H.",
    context: "Lost 22 five-star reviews overnight",
    quote:
      "I panicked when my Google Business Profile was suspended… He answered my calls, explained everything in a way I could understand… And, my GMB was reinstated!",
  },
  {
    name: "Steven W.",
    context: "Contractor in Chicago",
    quote:
      "Out of the blue my GBP was suspended and I panicked like crazy but Sam really gave me my confidence back. This guy really cares… you can tell he knows what he's talking about.",
  },
  {
    name: "Marco d.",
    context: "Agency partner",
    quote:
      "Zonic has helped with re-instating Google Business profiles that had been suspended. The team's communication is one of the things I really value, they are swift, and readily available across many timezones.",
  },
];

// FAQPage markup lives once, next to the visible FAQ list further down
// (id gmb-reinst-faq-schema). A second copy here duplicated it (27 Oct).

export const metadata: Metadata = {
  title: {
    absolute: "Google Business Profile Reinstatement Service | GBP & GMB",
  },
  description:
    "Google Business Profile reinstatement service for suspended GBP/GMB listings: free audit, flat $400 charged only after reinstatement. 900+ reinstated.",
  keywords: [
    "google business profile reinstatement service",
    "google business profile reinstatement",
    "gmb reinstatement service",
    "gmb reinstatement experts",
    "google business profile reinstatement expert",
    "fix suspended google business profile",
    "google business profile suspended",
    "google business profile reinstatement form",
    "how to reinstate google business account",
    "google business profile reinstatement help",
    "gmb reinstatement agency",
  ],
  alternates: { canonical: "/services/gbp-reinstatement-service" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Google Business Profile Reinstatement Service | GMB Experts",
    description:
      "Recover your suspended Google Business Profile in 5–7 business days. Free suspension audit, 900+ profiles reinstated, No Fix, No Charge.",
    url: "/services/gbp-reinstatement-service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Reinstatement Service | GMB Experts",
    description:
      "Recover your suspended Google Business Profile in 5–7 business days. Free audit. No Fix, No Charge.",
  },
};

function page() {
  return (
    <>
    <main className="gmb-reinst-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div id="gmb-reinst-top"></div>

      <div className="gmb-main-wrapper">
        {/* ============ LEFT: CONTENT ============ */}
        <div className="gmb-content">
          {/* HERO */}
          <section className="gmb-panel hero">
            <span className="hero-badge">
              <span className="ping"></span>No. 1 Google Business Profile
              reinstatement agency in the US
            </span>

            <h1>
              Suspended Google Business Profile? Our GBP Reinstatement Service Gets You{" "}
              <span className="accent">
                Reinstated Fast.
                <svg viewBox="0 0 300 20" aria-hidden="true">
                  <path d="M4 14 C 70 5, 230 3, 296 11" />
                </svg>
              </span>
            </h1>

            <p className="lead">
              When your Google Business Profile is suspended, you vanish from
              Google Maps and lose calls every hour. Zonic Media&apos;s GMB
              reinstatement service diagnoses the real cause, fixes the
              compliance issues, and manages your reinstatement appeal with
              Google to recover your listing, rankings, and leads — fast. 900+
              profiles reinstated, a typical 5–7 business day turnaround, a free
              suspension audit first, and No Fix, No Charge on the reinstatement
              fee.
            </p>

            <div className="hero-badges">
              {/* Self-hosted Clutch badge — the live iframe embed is
                  behind a Cloudflare challenge and breaks randomly. */}
              <a
                href="https://clutch.co/profile/zonic-media?badge=11431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="hero-badge-widget"
                  width={90}
                  height={90}
                  src="/images/clutch-top-company-2026.png"
                  alt="Top Clutch Digital Marketing Company Delaware 2026"
                  style={{ objectFit: "contain" }}
                />
              </a>
              <Image
                className="hero-badge-widget"
                width={90}
                height={90}
                src="/images/Partner.webp"
                alt="Yelp Advertising Partner"
              />
              <a
                href="https://www.trustpilot.com/review/zonicllc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* dark-text variant — the hero band is light now */}
                <Image
                  className="hero-trust-badge"
                  width={121}
                  height={56}
                  src="/images/trust-black.png"
                  alt="Zonic Media reviews on Trustpilot"
                />
              </a>
              {/* same Google badge as the home hero */}
              <GoogleRatingBadge href={SITE_CONTACT.mapHref} compact />
            </div>

            <div className="hero-actions">
              <ScrollToFormLink className="btn btn-primary">
                Get a Free Suspension Audit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 17, height: 17 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </ScrollToFormLink>
              <a href={SITE_CONTACT.phoneHref} className="btn btn-ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 17, height: 17 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="hero-assurance">
              <span className="assure-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                No Fix, No Charge
              </span>
              <span className="assure-note">
                If we can&apos;t reinstate your profile, you don&apos;t pay our
                reinstatement fee.
              </span>
            </div>

            <div className="hero-trust">
              <span>
                <span className="stars">★★★★★</span> <b>5.0</b> client satisfaction
              </span>
              <span>
                <b>900+</b> profiles reinstated &amp; verified
              </span>
            </div>

            {/* Google reviews right under the trust line */}
            <LenisIframeGuard
              className="hero-reviews"
              widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
            />

            <div className="hero-visual">
              <GmbProfileCard />
            </div>
          </section>

          {/* Mobile form — shown right after the hero on small screens (the
              sticky right column is desktop-only). Kept OUT of the hero box so
              it isn't double-boxed / congested on mobile. */}
          <div id="free-audit" className="gmb-mob-form d-block d-lg-none js-audit-form">
            <GmbAuditForm />
          </div>

          {/* ABOUT / FEATURED ANSWER */}
          <section className="gmb-about">
            {/* Card 1 — positioning statement */}
            <article className="about-card about-lead">
              <span className="about-tag">
                <b>Zonic Media</b> · United States
              </span>
              <p>
                Zonic Media is a GMB reinstatement service provider (Google
                Business Profile reinstatement) in the United States,
                specializing in restoring suspended, disabled, and
                pending-verification Google Business Profiles for small and
                mid-size local businesses nationwide — across the{" "}
                <Link href="/industries" className="gmb-inline-link">
                  industries we serve
                </Link>
                , from home services and trades to{" "}
                <Link href="/services/google-business-profile-services-real-estate-agents" className="gmb-inline-link">
                  real estate agents
                </Link>{" "}
                — on a <span className="hl">No Fix, No Charge</span> basis on the
                reinstatement fee.
              </p>
            </article>

            {/* Card 2 — featured answer */}
            <article className="about-card about-qa">
              <div className="about-qa-head">
                <div>
                  <span className="eyebrow">Featured answer</span>
                  <h2>Who Provides Google Business Profile Reinstatement in the USA?</h2>
                </div>
              </div>

              <div className="about-qa-body">
                <p>
                  Zonic Media is a digital marketing agency that provides a
                  dedicated GMB reinstatement service — Google Business Profile
                  (GBP) reinstatement and suspension recovery — for businesses
                  across the United States. The company focuses specifically on
                  GBP suspensions, reinstatement appeals, and compliance
                  audits, and handles all suspension types — soft suspensions,
                  hard suspensions, disabled listings, and profiles suspended
                  pending verification.
                </p>
                <p>
                  The veteran experts at Zonic Media bring more than seven years
                  of combined experience in{" "}
                  <Link href="/services/local-seo-for-home-services" className="gmb-inline-link">
                    local SEO
                  </Link>{" "}
                  and Google Business Profile reinstatement, and have reinstated
                  and verified more than 900 business profiles. Many of these
                  cases involve profiles that were never fully{" "}
                  <Link href="/services/gmb-verification-help" className="gmb-inline-link">
                    verified on Google Maps
                  </Link>{" "}
                  in the first place. Each case begins with a free suspension audit
                  to determine the root cause — a guideline violation, address or
                  verification issue, duplicate listing, ownership dispute, or
                  trust-signal problem — followed by a custom appeal and active
                  follow-up with Google until the case resolves. Average
                  resolution time is five to seven business days.
                </p>

                <ul className="about-strengths">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span><b>Compliance-first</b> appeal process</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span><b>Veteran specialists only</b> — no junior freelancers or automated tools</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span><b>No Fix, No Charge</b> on the reinstatement fee</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span><b>Post-reinstatement optimization</b> that restores rankings, calls, and leads</span>
                  </li>
                </ul>

                <div className="about-area">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Serving businesses in every US state, fully remote — from
                    contractors, towing and home-service companies to real
                    estate agents, clinics and the agencies that manage their
                    profiles.
                  </span>
                </div>
              </div>
            </article>
          </section>

          {/* TRUST BAR */}
          <section className="gmb-panel">
            <div className="trustbar-grid">
              <div className="stat">
                <div className="num">900<span>+</span></div>
                <div className="cap">Profiles reinstated &amp; verified</div>
              </div>
              <div className="stat">
                <div className="num">5–7<span>d</span></div>
                <div className="cap">Average resolution time</div>
              </div>
              <div className="stat">
                <div className="num">5.0<span>★</span></div>
                <div className="cap">Client satisfaction rating</div>
              </div>
              <div className="stat">
                <div className="num">48<span>hr</span></div>
                <div className="cap">To a custom appeal strategy</div>
              </div>
            </div>
          </section>

          {/* REASONS */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">Why profiles get suspended</span>
              <h2>The Common Reasons Google Suspends a Business Profile</h2>
              <p>
                Suspensions usually come down to a conflict with Google&apos;s
                guidelines, verification standards, or trust signals — and
                service-area trades like{" "}
                <Link href="/services/plumbing-marketing-agency" className="gmb-inline-link">
                  plumbing companies
                </Link>{" "}
                get flagged more often than most. These are the issues our
                specialists resolve most often.
              </p>
            </div>
            <div className="card-grid">
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Address &amp; Verification Issues</h3>
                <p>
                  Incorrect addresses, virtual offices, P.O. boxes, or
                  inconsistent location details can trigger a suspension. We
                  correct and properly verify your business information.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <path d="M12 9v4M12 17h.01" />
                  </svg>
                </div>
                <h3>Guideline Violations</h3>
                <p>
                  Keyword stuffing in the business name, misleading details, or
                  restricted practices lead to suspension. We identify the
                  violation and bring the profile into compliance.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 20v-6M6 20v-4M18 20v-9M3 20h18" />
                  </svg>
                </div>
                <h3>Frequent Listing Changes</h3>
                <p>
                  Repeated edits to name, category, phone, or address can flag
                  suspicious activity. We stabilize your profile and correct risky
                  changes the right way.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="3" width="13" height="13" rx="2" />
                    <path d="M8 21h11a2 2 0 0 0 2-2V8" />
                  </svg>
                </div>
                <h3>Duplicate Listings</h3>
                <p>
                  Multiple profiles for the same location create conflicts and
                  suspension risk. We resolve duplicates and clean up your overall
                  listing presence.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Ownership &amp; Access Disputes</h3>
                <p>
                  Former employees, past agencies, or multiple admins can create
                  ownership conflicts. We help you secure control and restore
                  proper account access.
                </p>
              </div>
              <div className="reason-card">
                <div className="reason-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 15 9l7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" />
                  </svg>
                </div>
                <h3>Review &amp; Trust Signals</h3>
                <p>
                  Spam reviews, unusual activity, or weak trust signals can affect
                  profile status. We strengthen credibility and support a clean,
                  successful recovery.
                </p>
              </div>
            </div>
          </section>

          {/* STATUS CHECK — suspended vs disabled vs account restricted
              (competitor gap, 24 Nov 2026 research: 6 of 11 AI-recommended
              firms explain it; the page never said "account restricted"). */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">GBP suspension help</span>
              <h2>Suspended, Disabled or Account Restricted? Know Which One You Have</h2>
              <p>
                Google uses different labels, and each one needs a different
                fix. Check what your dashboard says before you file anything —
                our free audit confirms it for you.
              </p>
            </div>
            <div className="card-grid">
              <div className="reason-card">
                <h3>Suspended Profile</h3>
                <p>
                  The listing is hidden from Maps and Search, or you can no
                  longer edit it. This is the classic suspension, usually
                  triggered by an address, name or category issue, and it is
                  fixed through a documented appeal.
                </p>
              </div>
              <div className="reason-card">
                <h3>Disabled Profile</h3>
                <p>
                  Google has turned the profile off for a policy reason. It
                  stays off Maps until the cause is fixed and an appeal with
                  evidence is approved. Never create a replacement listing
                  while you wait.
                </p>
              </div>
              <div className="reason-card">
                <h3>Account Restricted</h3>
                <p>
                  The Google account that manages the profile is restricted, so
                  every profile it manages can be affected. The appeal is about
                  the account, not one listing, and agencies are often hit by
                  this one.
                </p>
              </div>
              <div className="reason-card">
                <h3>Needs Verification</h3>
                <p>
                  A &quot;Get verified&quot; prompt or a rejected video is not a
                  suspension. It needs our{" "}
                  <Link href="/services/gmb-verification-help" className="gmb-inline-link">
                    GMB verification service
                  </Link>{" "}
                  instead of an appeal, and filing an appeal for it wastes your
                  one appeal.
                </p>
              </div>
            </div>
          </section>

          {/* ===== BAND 1 — animated suspension audit scanner ===== */}
          <GmbAuditScanner />

          {/* PROCESS */}
          <section className="gmb-panel gmb-process">
            <div className="sec-head">
              <span className="eyebrow">How it works</span>
              <h2>Back on Google in Four Proven Steps</h2>
              <p>
                A structured, transparent process — no guesswork. You&apos;ll
                always know what stage your case is in and what we&apos;re doing to
                move it forward.
              </p>
            </div>
            <div className="proc-grid">
              <div className="proc-card">
                <div className="proc-num">01</div>
                <div className="when">Same day</div>
                <h3>Free Suspension Audit</h3>
                <p>
                  We review your profile, pinpoint the likely suspension reason,
                  and assess your reinstatement options — at no cost and no
                  commitment.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">02</div>
                <div className="when">24–48 hours</div>
                <h3>Custom Reinstatement Strategy</h3>
                <p>
                  Our specialists build a tailored appeal with the documentation,
                  language, and evidence Google&apos;s review process responds to.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">03</div>
                <div className="when">3–7 days</div>
                <h3>Appeal &amp; Follow-up</h3>
                <p>
                  We submit the appeal and actively follow up with Google,
                  adjusting as needed until your case reaches a resolution.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">04</div>
                <div className="when">Post-reinstatement</div>
                <h3>Optimize &amp; Protect</h3>
                <p>
                  Once you&apos;re live, we optimize categories, keywords, photos,
                  and posts — and harden the profile so the issue is less likely to
                  return.
                </p>
              </div>
            </div>
          </section>

          {/* GOOGLE'S 2026 APPEAL PROCESS — facts from Google's help page
              (support.google.com/business/answer/13597551, read 24 Nov 2026):
              one appeal per issue, evidence attached inside the appeal,
              decisions in up to 5 business days. */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">Google&apos;s current rules</span>
              <h2>How a Google Business Profile Reinstatement Appeal Works in 2026</h2>
              <p>
                Google changed the appeal flow in 2026. Knowing the rules is the
                difference between a profile that comes back and one that
                stays down. Source:{" "}
                <a
                  href="https://support.google.com/business/answer/13597551"
                  className="gmb-inline-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Business Profile Help
                </a>
                .
              </p>
            </div>
            <div className="card-grid">
              <div className="after-card">
                <h3>One Appeal per Issue</h3>
                <p>
                  Google&apos;s help page says appeals can only be submitted
                  once. A rushed appeal with the wrong evidence is hard to undo,
                  so we fix the cause before anything is filed.
                </p>
              </div>
              <div className="after-card">
                <h3>Evidence Goes Inside the Appeal</h3>
                <p>
                  Documents are attached in the appeal itself: business
                  license, utility bill or lease, and photos of permanent
                  signage. Every file has to match the name and address on the
                  profile.
                </p>
              </div>
              <div className="after-card">
                <h3>A Decision in Up to 5 Business Days</h3>
                <p>
                  Google says reviews can take up to 5 business days. Filing
                  again or editing the profile while you wait only slows
                  things down.
                </p>
              </div>
              <div className="after-card">
                <h3>If the Answer Is &quot;Not Approved&quot;</h3>
                <p>
                  The route is Google Business Profile support with new
                  evidence, not a second appeal and never a new listing. We
                  take that step with you, and you still pay nothing unless
                  the profile comes back.
                </p>
              </div>
            </div>
          </section>

          {/* AFTER REINSTATEMENT */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">After reinstatement</span>
              <h2>What Happens After Your Profile is Reinstated?</h2>
              <p>
                Getting your listing back is the starting line, not the finish.
                Once you&apos;re live again, our team turns your recovered profile
                into a lead-generating asset with ongoing{" "}
                <Link href="/local-seo-google-business-optimization" className="gmb-inline-link">
                  Google Business Profile optimization
                </Link>{" "}
                — optimized to rank in the Map Pack, build trust, and stay
                compliant so the same issue doesn&apos;t come back. For businesses
                that want faster reach, we can pair it with{" "}
                <Link href="/services/google-ads" className="gmb-inline-link">
                  Google Ads management
                </Link>{" "}
                to capture high-intent searches while rankings rebuild.
              </p>
            </div>
            <div className="card-grid">
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                  </svg>
                </div>
                <h3>Categories &amp; Services</h3>
                <p>
                  Correct primary and secondary categories plus a complete service
                  list so you show up for the right searches.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <h3>Keyword Optimization</h3>
                <p>
                  A compliant, keyword-aware business description and services that
                  align with how customers actually search.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
                <h3>Photos &amp; Media</h3>
                <p>
                  A clean photo and media overhaul — real images that build
                  credibility and lift engagement on your listing.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3>Google Posts &amp; Profile Updates</h3>
                <p>
                  Ongoing posts, offers and fresh details that keep your profile
                  active — a signal Google and customers both reward.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 15 9l7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" />
                  </svg>
                </div>
                <h3>Reviews &amp; Reputation</h3>
                <p>
                  A simple system to earn recent, believable reviews — the trust
                  signal that wins the next customer.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Compliance Monitoring</h3>
                <p>
                  30 days of monitoring to catch risky edits early and keep your
                  profile stable, healthy, and suspension-free.
                </p>
              </div>
            </div>
            <div className="after-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span>
                Post-reinstatement optimization is included in our Fix + Optimize
                engagement — you come back stronger than before.
              </span>
            </div>
          </section>

          {/* WHY CHOOSE */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">Why choose Zonic</span>
              <h2>Why we&apos;re a Top Choice for GBP Reinstatement in the US</h2>
              <p>
                When your profile is suspended, the recovery partner you choose
                matters — we pair deep platform expertise with a compliance-first
                approach, fast action, and a No Fix, No Charge commitment.
              </p>
            </div>
            <div className="card-grid">
              <div className="why-card">
                <div className="why-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Experienced Specialists</h3>
                <p>
                  We understand suspension triggers, policy requirements, and the
                  recovery steps that lead to faster approvals.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>Faster Resolution</h3>
                <p>
                  Our structured process reduces delays and gets your profile back
                  online as quickly as Google&apos;s review allows.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
                  </svg>
                </div>
                <h3>Compliance-First</h3>
                <p>
                  We fix the root cause and align your profile with Google&apos;s
                  guidelines to help prevent repeat suspensions.
                </p>
              </div>
              <div className="why-card">
                <div className="why-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M17 7h4v4" />
                  </svg>
                </div>
                <h3>Growth-Focused</h3>
                <p>
                  We don&apos;t just recover listings — we help restore your
                  rankings, calls, leads, and long-term local visibility, from a{" "}
                  <Link href="/services/web-design" className="gmb-inline-link">
                    conversion-focused website
                  </Link>{" "}
                  to the profile itself.
                </p>
              </div>
            </div>
          </section>

          {/* ===== BAND 2 — animated Map Pack visibility console ===== */}
          <GmbMapPackConsole />

          {/* AUDIT CTA BAND */}
          <section className="gmb-panel-brand gmb-auditcta">
            <span className="eyebrow light">Free suspension audit</span>
            <h2 style={{ fontSize: "clamp(24px,3.2vw,34px)", fontWeight: 500, letterSpacing: "-0.02em", color: "#fff", margin: "14px 0 0" }}>
              Every Hour Suspended, Customers Find Your Competitors
            </h2>
            <ul className="auditcta-points">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Same-day profile review
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Likely suspension cause identified
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Clear next steps — no obligation
              </li>
            </ul>
            <ScrollToFormLink className="btn btn-primary">
              Get a Free Suspension Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </ScrollToFormLink>
          </section>

          {/* PRICING — owner set $400 after successful reinstatement (24 Nov
              2026). 9 of 11 AI-recommended firms publish a price, and AI
              answers are built as price tables. */}
          <section className="gmb-panel" id="reinstatement-cost">
            <div className="sec-head">
              <span className="eyebrow">Pricing</span>
              <h2>GMB Reinstatement Cost: What You Pay, and When</h2>
              <p>
                One flat fee, charged only when your profile is back. No hourly
                billing and no surprise add-ons.
              </p>
            </div>
            <div className="pillars-grid">
              <div className="pillar">
                <h3>$0 · Free Suspension Audit</h3>
                <p>
                  A same-day review of your profile: the likely cause, what
                  evidence Google will want, and an honest read on your odds.
                  No obligation.
                </p>
              </div>
              <div className="pillar">
                <h3>$400 · Only After Reinstatement</h3>
                <p>
                  A flat $400 per profile, charged only once your profile is
                  live again on Google Search and Maps and you can manage it
                  from your account.
                </p>
              </div>
              <div className="pillar">
                <h3>$0 · If Google Says No</h3>
                <p>
                  If the profile is not reinstated, there is no reinstatement
                  fee. If we decline the case after the audit, you pay nothing
                  either. See our{" "}
                  <Link href="/legal/refund-policy">refund policy</Link>.
                </p>
              </div>
            </div>
            <div className="after-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span>
                Agencies and multi-location brands: ask for a bulk quote for
                several suspended profiles or a restricted account.
              </span>
            </div>
          </section>

          {/* GUARANTEE PILLARS */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">How we work with you</span>
              <h2>Clear Commitments, No Guesswork</h2>
              <p>
                We can&apos;t speak for Google&apos;s final decision — no honest
                agency can — but we can promise how we&apos;ll handle your case
                from start to finish.
              </p>
            </div>
            <div className="pillars-grid">
              <div className="pillar">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5z" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <h3>Risk-Aware Engagement</h3>
                <p>
                  We&apos;re upfront about your odds after the audit and only take
                  on cases we believe we can genuinely help with. See our{" "}
                  <Link href="/legal/refund-policy">refund policy</Link> for
                  details.
                </p>
              </div>
              <div className="pillar">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <h3>No Idle Cases</h3>
                <p>
                  Our average reinstatement time is 5–7 business days. We follow up
                  aggressively so Google doesn&apos;t leave your case sitting in a
                  queue.
                </p>
              </div>
              <div className="pillar">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M19 8v6M22 11h-6" />
                  </svg>
                </div>
                <h3>Expert-Only Work</h3>
                <p>
                  Every case is handled personally by a veteran GBP specialist —
                  never a junior freelancer or an automated tool.
                </p>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">Client results</span>
              <h2>Real Businesses, Real Reinstatements</h2>
              <p>
                Excerpts from our Google reviews (5.0), written by business
                owners whose profiles we brought back.
              </p>
            </div>
            {/* Plain-text excerpts of real Google reviews (Trustindex feed,
                24 Nov 2026) so search engines and AI tools can read the
                proof — the widget below loads by script only. */}
            <div className="card-grid review-quotes">
              {REVIEW_QUOTES.map((r) => (
                <figure className="reason-card review-quote" key={r.name}>
                  <blockquote>
                    <p>&ldquo;{r.quote}&rdquo;</p>
                  </blockquote>
                  <figcaption>
                    <b>{r.name}</b> · {r.context} · Google review
                  </figcaption>
                </figure>
              ))}
            </div>
            <LenisIframeGuard
              className="gmb-reinst-google-reviews"
              widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
            />
          </section>

          {/* FAQ */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">Common questions</span>
              <h2>GMB Reinstatement Service — Everything You Need to Know</h2>
            </div>
            {GmbResinstFaqs.map((faq, index) => (
              <details className="faq-item" name="gmb-faq" key={faq.question} open={index === 0}>
                <summary className="faq-q">
                  {faq.question}
                  <span className="pm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: 16, height: 16 }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-a">{faq.answer}</div>
              </details>
            ))}

            <script
              id="gmb-reinst-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://www.zonicllc.com/services/gbp-reinstatement-service",
                  mainEntity: GmbResinstFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />
          </section>
        </div>

        {/* ============ RIGHT: STICKY FORM (desktop) ============ */}
        <aside className="gmb-form-col d-none d-lg-block js-audit-form">
          <GmbAuditForm />
        </aside>
      </div>

      {/* ============ FINAL CTA BANNER (full width, above footer) ============ */}
      <section className="gmb-final">
        <div className="gmb-final-inner">
          <span className="eyebrow light" style={{ justifyContent: "center" }}>
            Back on Google. Back in business.
          </span>
          <h2>Don&apos;t Let a Suspended Listing Cost You More Customers</h2>
          <p>
            Every day your profile is suspended, customers are finding your
            competitors instead. Let&apos;s fix that — with a proven process, zero
            guesswork, and a specialist on your case from day one.
          </p>
          <div className="gmb-final-actions">
            <ScrollToFormLink className="btn btn-primary">
              Get a Free Suspension Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 17, height: 17 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </ScrollToFormLink>
            <a href={SITE_CONTACT.phoneHref} className="btn btn-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 17, height: 17 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
          <div className="gmb-final-sub">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Free, no-obligation audit
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Expert-only handling
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Serving businesses across the US
            </span>
          </div>
        </div>
      </section>
    </main>

    <RelatedServices current="/services/gbp-reinstatement-service" />
    <Footer />
    </>
  );
}

export default page;
