import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/whiteLableStyle.css";

import WhiteLabelLeadForm from "@/app/components/WhiteLabelLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "White-Label Services for Agencies | GBP, SEO & Web Design",
  description:
    "White-label digital marketing fulfillment for agencies. Resell Google Business Profile reinstatement, verification, management, local SEO, and WordPress web design under your own brand. We stay invisible.",
  keywords: [
    "white label GMB reinstatement",
    "white label local SEO",
    "agency fulfillment",
    "white label digital marketing services",
    "white label Google Business Profile services",
    "white label GBP management",
    "white label web design for agencies",
    "resell local SEO services",
    "white label SEO partner",
  ],
  alternates: { canonical: "/services/white-label-services" },
  openGraph: {
    title:
      "White-Label Services for Agencies | GBP Reinstatement, Local SEO & Web Design",
    description:
      "White-label digital marketing fulfillment for agencies. Resell Google Business Profile reinstatement, verification, management, local SEO, and WordPress web design under your own brand. We stay invisible.",
    url: "/services/white-label-services",
    type: "website",
  },
};

// Partnership diagram from the source design: "Your Agency" (the visible
// brand) on top, linked to Zonic's invisible fulfillment stack below.
// Injected as raw markup so the SVG stays byte-for-byte identical.
const HERO_ART_SVG = `<svg viewBox="0 0 520 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="White-label partnership: Zonic Media fulfills the work, your agency delivers it under its own brand">
  <defs>
    <linearGradient id="wlCardA" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1E293B"/><stop offset="1" stop-color="#0B1220"/>
    </linearGradient>
    <linearGradient id="wlCardB" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F97316"/><stop offset="1" stop-color="#ea670c"/>
    </linearGradient>
    <linearGradient id="wlFlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F5C518"/><stop offset="1" stop-color="#F97316"/>
    </linearGradient>
    <filter id="wlSoft" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <path d="M260 168 L 260 200" stroke="url(#wlFlow)" stroke-width="3" fill="none" stroke-dasharray="6 7" opacity="0.75"/>
  <path d="M260 260 L 260 292" stroke="url(#wlFlow)" stroke-width="3" fill="none" stroke-dasharray="6 7" opacity="0.75"/>
  <g filter="url(#wlSoft)">
    <rect x="96" y="40" width="328" height="128" rx="18" fill="url(#wlCardB)"/>
  </g>
  <text x="260" y="78" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="13" letter-spacing="1.5" fill="#fff" opacity="0.85">YOUR AGENCY</text>
  <circle cx="175" cy="118" r="20" fill="#fff" opacity="0.95"/>
  <text x="175" y="124" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="800" font-size="18" fill="#ea670c">A</text>
  <rect x="208" y="104" width="150" height="11" rx="5.5" fill="#fff" opacity="0.95"/>
  <rect x="208" y="124" width="104" height="9" rx="4.5" fill="#fff" opacity="0.6"/>
  <circle cx="260" cy="230" r="30" fill="#0B1220" stroke="#F5C518" stroke-width="2.5"/>
  <g stroke="#F5C518" stroke-width="3" fill="none" stroke-linecap="round">
    <rect x="244" y="222" width="20" height="13" rx="6.5"/>
    <rect x="256" y="225" width="20" height="13" rx="6.5"/>
  </g>
  <g filter="url(#wlSoft)">
    <rect x="96" y="292" width="328" height="128" rx="18" fill="url(#wlCardA)" stroke="#334155" stroke-width="1"/>
  </g>
  <rect x="116" y="312" width="160" height="26" rx="13" fill="none" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="196" y="329" text-anchor="middle" font-family="Manrope,sans-serif" font-weight="700" font-size="11" letter-spacing="0.5" fill="#94A3B8">INVISIBLE FULFILLMENT</text>
  <g font-family="Inter,sans-serif" font-weight="600" font-size="10.5" fill="#E2E8F0">
    <rect x="116" y="350" width="86" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="159" y="366" text-anchor="middle">GBP Reinstate</text>
    <rect x="210" y="350" width="70" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="245" y="366" text-anchor="middle">Local SEO</text>
    <rect x="288" y="350" width="62" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="319" y="366" text-anchor="middle">Verify</text>
    <rect x="116" y="382" width="74" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="153" y="398" text-anchor="middle">WordPress</text>
    <rect x="198" y="382" width="86" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="241" y="398" text-anchor="middle">GBP Manage</text>
    <rect x="292" y="382" width="58" height="24" rx="12" fill="#0B1220" stroke="#334155"/><text x="321" y="398" text-anchor="middle">Content</text>
  </g>
  <g fill="#F5C518">
    <path d="M260 274 l-5 9 h10 z"/>
  </g>
</svg>`;

const trustItems = [
  { num: "700+", label: "GBP profiles reinstated" },
  { num: "5.0", label: "Rating on Clutch (21 reviews)" },
  { num: "100%", label: "White-label & unbranded" },
];

const stripItems = [
  "Your brand, never ours",
  "Reseller discounts",
  "No minimum volume",
  "Nationwide fulfillment",
];

const resellServices = [
  {
    h: "Google Business Reinstatement",
    p: "Recover your clients' suspended Google Business Profiles fast. 700+ profiles reinstated and verified, with a no-fix, no-charge approach on the reinstatement fee.",
    tag: "Avg. 5–7 day resolution",
  },
  {
    h: "GBP Verification",
    p: "Get your clients' profiles verified and past the video and ID hurdles that stall so many listings — handled end-to-end under your brand.",
    tag: "Hands-off for you",
  },
  {
    h: "GBP Management",
    p: "Ongoing profile optimization: posts, categories, services, Q&A, review responses, and the signals that drive map-pack visibility.",
    tag: "Monthly fulfillment",
  },
  {
    h: "Local SEO",
    p: "Full local SEO fulfillment — on-page, citations, content, and authority building that moves your clients' local rankings.",
    tag: "White-label reporting",
  },
  {
    h: "WordPress Website Design",
    p: "Conversion-focused WordPress builds delivered under your agency's brand, from landing pages to full local-business sites.",
    tag: "Your brand, our build",
  },
  {
    h: "Local SEO Content",
    p: "Service pages, location pages, and blog content engineered to rank — produced to your specs and delivered ready to publish.",
    tag: "Ready to publish",
  },
];

const whyCards = [
  {
    h: "Fully White-Label",
    p: "Your clients never see Zonic Media. Reports, deliverables, and communication carry your brand — we stay completely invisible.",
  },
  {
    h: "Proven Fulfillment",
    p: "700+ GBP reinstatements, 5.0 on Clutch across 21 reviews, and a 48-hour response standard. You resell a track record, not a promise.",
  },
  {
    h: "Partner Discounts",
    p: "Reseller-friendly wholesale rates that protect your margin. You set client pricing; we keep your cost low enough to profit comfortably.",
  },
  {
    h: "Specialist Depth",
    p: "Niche expertise most agencies can't staff in-house — especially GBP reinstatement and local SEO — available on demand without a hire.",
  },
  {
    h: "Reliable Turnaround",
    p: "Clear timelines and consistent delivery so you can make promises to your clients and keep them.",
  },
  {
    h: "Scales With You",
    p: "Send one profile or fifty. Capacity flexes with your pipeline so you can take on work you'd otherwise turn away.",
  },
];

const steps = [
  {
    h: "Partner Onboarding",
    p: "We set up your white-label account, agree on wholesale pricing, and align on how deliverables and reporting should be branded.",
  },
  {
    h: "You Send the Work",
    p: "Pass us the client task — a suspended profile, a website build, a local SEO engagement. A simple intake is all we need.",
  },
  {
    h: "We Fulfill Invisibly",
    p: "Our specialists execute under your brand. Your client sees your agency delivering; we never make contact.",
  },
  {
    h: "You Deliver & Profit",
    p: "We hand back branded results on schedule. You present them as your own and keep the margin between our rate and your price.",
  },
];

const faqs = [
  {
    q: "What does white-label mean here exactly?",
    a: "It means we fulfill the work, but everything your client sees carries your brand — reports, deliverables, and communications. Zonic Media stays completely invisible. Your client believes your agency did the work, which is the point.",
  },
  {
    q: "Will you ever contact my clients directly?",
    a: "No. In a fully white-label arrangement we never contact your clients. All communication runs through you, and our name appears nowhere in what they receive.",
  },
  {
    q: "How does pricing work for agency partners?",
    a: "We offer reseller-friendly wholesale discounts below our standard rates, so you can mark up to your own price and keep a healthy margin. You set what your client pays; we keep your cost low. We'll share specific partner rates once we understand your volume.",
  },
  {
    q: "Which services can I resell?",
    a: "Google Business Profile reinstatement, verification, and management; local SEO; WordPress website design; and local SEO content. You can resell one service or the full stack depending on what your clients need.",
  },
  {
    q: "Do I need to send a minimum volume?",
    a: "No. The partnership scales with your pipeline — send a single profile or a steady stream. Volume affects your wholesale rate but there's no minimum to start.",
  },
  {
    q: "How fast is turnaround?",
    a: "It varies by service. GBP reinstatements average five to seven days; verification, management, SEO, and web builds run on clear timelines agreed up front so you can set accurate expectations with your clients.",
  },
  {
    q: "Is this only for local agencies?",
    a: "No — we partner with agencies, freelancers, and consultants nationwide. Fulfillment is delivered remotely under your brand wherever you and your clients are located.",
  },
];

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "White-Label Services for Agencies", url: "/white-label-services" },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://www.zonicllc.com/services/white-label-services",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/services/white-label-services",
  areaServed: { type: "Country", name: "United States" },
});

export default function Page() {
  return (
    <>
      <Script
        id="wl-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="wl-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="wl-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <div id="wl-top" className="wl-page">
        {/* NAV */}
        <nav className="wl-nav">
          <Link href="/" className="wl-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="wl-nav-logo-img"
              priority
            />
          </Link>
          <div className="wl-nav-links">
            <HashScrollLink href="#wl-resell">What You Resell</HashScrollLink>
            <HashScrollLink href="#wl-why">Why Partner</HashScrollLink>
            <HashScrollLink href="#wl-how">How It Works</HashScrollLink>
            <HashScrollLink href="#wl-faq">FAQ</HashScrollLink>
          </div>
          <div className="wl-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="wl-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#wl-partner" className="wl-nav-cta">
              Become a Partner
            </HashScrollLink>
          </div>
        </nav>

        <div className="wl-main-wrapper">
          <div className="wl-row">
            {/* LEFT: CONTENT */}
            <div className="wl-content-col">
              {/* HERO */}
              <section className="wl-hero">
                <div className="wl-eyebrow">
                  White-Label Services for Agencies
                </div>
                <h1>
                  Resell Our Fulfillment Under{" "}
                  <span className="wl-accent">Your Own Brand.</span>
                </h1>
                <p className="wl-hero-sub">
                  Offer Google Business Profile reinstatement, local SEO, and
                  WordPress web design to your clients without hiring a single
                  specialist. We do the work invisibly; your agency takes the
                  credit and the margin.
                </p>
                <div className="wl-hero-ctas">
                  <HashScrollLink
                    href="#wl-partner"
                    className="wl-btn wl-btn-primary"
                  >
                    Become a Partner →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="wl-btn wl-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

                <HeroTrustBadges />

                <div className="wl-trust-row">
                  {trustItems.map((t, i) => (
                    <div className="wl-trust-item" key={i}>
                      <span className="wl-trust-num">{t.num}</span>
                      <span className="wl-trust-label">{t.label}</span>
                    </div>
                  ))}
                </div>

                <div className="wl-strip">
                  {stripItems.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                {/* Partnership illustration (from source design) */}
                <div
                  className="wl-hero-art"
                  dangerouslySetInnerHTML={{ __html: HERO_ART_SVG }}
                />

                {/* Mobile/Tab top inline form */}
                <div
                  className="wl-mob-form wl-mob-form-top d-block d-lg-none"
                  id="wl-partner"
                >
                  <WhiteLabelLeadForm />
                </div>
              </section>

              {/* QUICK ANSWER */}
              <section className="wl-section">
                <div className="wl-sec-label">Quick Answer</div>
                <h2 className="wl-sec-h2">
                  What are white-label digital marketing services?
                </h2>
                <div className="wl-answer">
                  <p>
                    White-label digital marketing services let an agency,
                    freelancer, or consultant resell another company&apos;s
                    fulfillment under their own brand. You sell the service to
                    your client and set the price; we execute the work behind the
                    scenes — Google Business Profile reinstatement, verification,
                    and management, local SEO, and WordPress web design — with no
                    Zonic Media branding anywhere your client can see. Your client
                    experiences a seamless service from your agency, while you add
                    capabilities and capacity without hiring, and keep the margin
                    between our reseller rate and your client price.
                  </p>
                </div>
              </section>

              {/* WHAT YOU CAN RESELL */}
              <section className="wl-section" id="wl-resell">
                <div className="wl-sec-label">What You Can Resell</div>
                <h2 className="wl-sec-h2">
                  Six services, delivered{" "}
                  <span className="wl-accent">under your brand.</span>
                </h2>
                <p className="wl-sec-sub">
                  Add specialist capabilities to your agency overnight. Resell
                  one service or the full stack — your clients only ever see
                  your name.
                </p>
                <div className="wl-grid wl-g3">
                  {resellServices.map((s, i) => (
                    <article className="wl-card" key={i}>
                      <div className="wl-card-ic">{i + 1}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                      <span className="wl-tag">{s.tag}</span>
                    </article>
                  ))}
                </div>
              </section>

              {/* WHY PARTNER */}
              <section className="wl-section" id="wl-why">
                <div className="wl-sec-label">Why Partner With Us</div>
                <h2 className="wl-sec-h2">
                  Built to make your agency{" "}
                  <span className="wl-accent">look good.</span>
                </h2>
                <p className="wl-sec-sub">
                  You resell a proven fulfillment team that stays invisible —
                  so the credit, the client relationship, and the margin all
                  stay with you.
                </p>
                <div className="wl-grid wl-g3">
                  {whyCards.map((c, i) => (
                    <article className="wl-card" key={i}>
                      <div className="wl-card-ic">✓</div>
                      <h3>{c.h}</h3>
                      <p>{c.p}</p>
                    </article>
                  ))}
                </div>
              </section>

              {/* HOW IT WORKS */}
              <section className="wl-section wl-steps-sec" id="wl-how">
                <div className="wl-sec-label">How It Works</div>
                <h2 className="wl-sec-h2">
                  From handoff to margin in four steps.
                </h2>
                <p className="wl-sec-sub">
                  A simple, repeatable partnership flow — the same every time,
                  so you always know what your client is getting and when.
                </p>
                <div className="wl-steps">
                  {steps.map((s, i) => (
                    <div className="wl-step" key={i}>
                      <div className="wl-step-num" aria-hidden="true" />
                      <div>
                        <h3>{s.h}</h3>
                        <p>{s.p}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROSE */}
              <section className="wl-section">
                <div className="wl-sec-label">The Case for Partnering</div>
                <div className="wl-prose">
                  <h2 className="wl-sec-h2">
                    Why agencies partner instead of hiring.
                  </h2>
                  <p>
                    Every growing agency hits the same wall: a client wants a
                    service you don&apos;t fulfill in-house, or your pipeline
                    outgrows your team&apos;s capacity. Hiring a specialist for a
                    capability you&apos;ll only use occasionally is slow and
                    expensive. Turning the work away costs you revenue and
                    weakens the client relationship. White-label fulfillment
                    solves both — you say yes to the work, we deliver it under
                    your brand, and you grow without the overhead.
                  </p>
                  <p>
                    Niche capabilities are where this matters most. Google
                    Business Profile reinstatement, for example, is a specialized
                    skill most agencies can&apos;t justify staffing for, yet
                    clients with suspended profiles need it urgently. Partnering
                    lets you offer that expertise on demand, with a track record
                    of 700+ reinstatements behind it, without becoming a
                    reinstatement expert yourself.
                  </p>
                  <h3>Your brand stays front and center</h3>
                  <p>
                    In a fully white-label arrangement, your client never learns
                    we exist. Deliverables, reports, and communication carry your
                    branding. We don&apos;t contact your clients, our name appears
                    nowhere in what they receive, and as far as they&apos;re
                    concerned, your agency did the work.{" "}
                    <strong>That discretion is non-negotiable.</strong>
                  </p>
                  <h3>Margins that make it worthwhile</h3>
                  <p>
                    Reseller pricing sits below our standard rates, giving you
                    room to mark up to your own client price and keep a
                    comfortable margin. You control what your client pays; we
                    keep your cost low. The result is a new revenue stream with
                    none of the fulfillment burden — and the more you send, the
                    better your wholesale rate becomes.
                  </p>
                </div>
                <div className="wl-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="wl-cta-call">
                    <span className="wl-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
              </section>

              {/* FAQ */}
              <section className="wl-section" id="wl-faq">
                <div className="wl-sec-label">FAQ</div>
                <h2 className="wl-sec-h2">Agency partner questions.</h2>
                <p className="wl-sec-sub">
                  If your question isn&apos;t here, add it to the form and
                  we&apos;ll answer it when we send your partner details.
                </p>
                <div className="wl-faq">
                  {faqs.map((f, i) => (
                    <details key={i} open={i === 0}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Mobile inline form (bottom) */}
              <div className="wl-mob-form d-block d-lg-none">
                <WhiteLabelLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="wl-form-col d-none d-lg-block"
              data-scroll-target="wl-partner"
            >
              <div className="wl-sticky-form" id="wl-partner-desktop">
                <WhiteLabelLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="wl-final-cta">
          <div className="wl-fc-inner">
            <h2>Add services without adding headcount.</h2>
            <p className="wl-fc-lede">
              Partner with a fulfillment team that stays invisible — so your
              agency gets the credit, the clients, and the margin.
            </p>
            <div className="wl-fc-actions">
              <HashScrollLink href="#wl-partner" className="wl-fc-btn">
                Become a Partner Today
              </HashScrollLink>
              <Link href={SITE_CONTACT.phoneHref} className="wl-fc-btn wl-fc-ghost">
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="wl-footer">
          <div className="wl-footer-inner">
            <div className="wl-footer-top">
              <div className="wl-footer-brand">
                <Link href="/" className="wl-footer-logo" aria-label="Zonic Media">
                  ZONIC
                </Link>
                <p>
                  White-label digital marketing fulfillment for agencies,
                  freelancers, and consultants nationwide — GBP reinstatement,
                  local SEO, and web design under your brand.
                </p>
                <p className="wl-footer-contact">
                  <Link href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </Link>
                  <br />
                  <Link href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</Link>
                </p>
              </div>
              <div className="wl-footer-links">
                <div className="wl-footer-col">
                  <h5>White-Label</h5>
                  <Link href="/services/gmb-reinstatement-help">
                    GBP Reinstatement
                  </Link>
                  <Link href="/services/gmb-optimization">GBP Management</Link>
                  <Link href="/services/local-seo-for-home-services">
                    Local SEO
                  </Link>
                  <Link href="/services/web-design">WordPress Web Design</Link>
                </div>
                <div className="wl-footer-col">
                  <h5>Company</h5>
                  <Link href="/about">About Us</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/contact-us">Contact</Link>
                  <Link href="/services">All Services</Link>
                </div>
                <div className="wl-footer-col">
                  <h5>Contact</h5>
                  <Link href={SITE_CONTACT.phoneHref}>
                    {SITE_CONTACT.phoneDisplay}
                  </Link>
                  <Link href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</Link>
                  <span>8 The Green, STE B</span>
                  <span>Dover, DE 19901</span>
                </div>
              </div>
            </div>
            <div className="wl-footer-bottom">
              © 2026 Zonic Media LLC. All rights reserved. &nbsp;|&nbsp; 8 The
              Green, STE B, Dover, DE 19901
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
