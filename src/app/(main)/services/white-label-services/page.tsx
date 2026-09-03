import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import "@/app/style/whiteLabelServices.css";

import WhiteLabelLeadForm from "@/app/components/WhiteLabelLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import HeroTrustBadges from "@/app/components/HeroTrustBadges";
import {
  BrandSwapVisual,
  FulfillmentFlowVisual,
  MarginMeterVisual,
} from "@/app/components/WhiteLabelVisuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
  buildServiceJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: { absolute: "White Label SEO Services for Agencies | GBP, Local SEO & Web" },
  description:
    "White label SEO services for agencies: Google Business Profile reinstatement and management, local SEO and web design delivered under your brand.",
  keywords: [
    "white label seo services",
    "white label seo services for agencies",
    "white label local seo services",
    "white label local seo",
    "white label seo reseller services",
    "white label seo packages",
    "white label ai seo services",
    "white label seo services in usa",
    "white label gbp reinstatement",
    "white label web design",
  ],
  alternates: { canonical: "/services/white-label-services" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title:
      "White-Label Services for Agencies | GBP Reinstatement, Local SEO & Web Design",
    description:
      "White label SEO services for agencies: Google Business Profile reinstatement and management, local SEO and web design delivered under your brand.",
    url: "/services/white-label-services",
    type: "website",
  },
};

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
    tag: "White-Label Reporting",
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
    h: "Scales with You",
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
  {
    q: "How does white label local SEO work with an agency's existing clients?",
    a:
      "Your agency keeps the relationship, the contract and the branding. Zonic Media does the work behind the scenes: profile optimization, reinstatements, citations, reviews, content and rank tracking. Reports carry your logo, communication routes through your account manager, and your client never sees our name. Pricing is a wholesale monthly rate per location so you can set your own margin, with no minimum number of clients.",
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

const serviceJsonLd = buildServiceJsonLd({
  name: "White-Label Digital Marketing Services for Agencies",
  description:
    "White-label local SEO, Google Business Profile reinstatement, verification, management, and web design fulfillment agencies resell under their own brand.",
  pageUrl: "/services/white-label-services",
  serviceType: "White-Label Marketing Fulfillment",
  areaServed: "United States",
});

export default function Page() {
  return (
    <>
      <script
        id="wl-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id="wl-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="wl-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
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

                {/* Animated white-label delivery console */}
                <BrandSwapVisual />

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
                  What are White-Label Digital Marketing Services?
                </h2>
                <div className="wl-answer">
                  <p>
                    White-label digital marketing services let an agency,
                    freelancer, or consultant resell another company&apos;s
                    fulfillment under their own brand. You sell the service to
                    your client and set the price; we execute the work behind the
                    scenes — Google Business Profile reinstatement,{" "}
                    <Link
                      href="/services/gmb-verification-help"
                      className="wl-inline-link"
                    >
                      GBP verification
                    </Link>
                    , and management, local SEO, and{" "}
                    <Link href="/services/web-design" className="wl-inline-link">
                      WordPress web design
                    </Link>{" "}
                    — with no Zonic Media branding anywhere your client can see.
                    Your client experiences a seamless service from your agency,
                    while you add capabilities and capacity without hiring, and
                    keep the margin between our reseller rate and your client
                    price.
                  </p>
                </div>
              </section>

              {/* WHAT YOU CAN RESELL */}
              <section className="wl-section" id="wl-resell">
                <div className="wl-sec-label">What You Can Resell</div>
                <h2 className="wl-sec-h2">
                  Six Services, Delivered{" "}
                  <span className="wl-accent">Under Your Brand.</span>
                </h2>
                <p className="wl-sec-sub">
                  Add specialist capabilities to your agency overnight. Resell
                  one service or our full{" "}
                  <Link href="/services" className="wl-inline-link">
                    digital marketing services
                  </Link>{" "}
                  stack — your clients only ever see your name.
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
                  Built to Make Your Agency{" "}
                  <span className="wl-accent">Look Good.</span>
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
                <FulfillmentFlowVisual />
              </section>

              {/* HOW IT WORKS */}
              <section className="wl-section wl-steps-sec" id="wl-how">
                <div className="wl-sec-label">How It Works</div>
                <h2 className="wl-sec-h2">
                  From Handoff to Margin in Four Steps.
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
                    Why Agencies Partner Instead of Hiring.
                  </h2>
                  <p>
                    Every growing agency hits the same wall: a client wants a
                    service you don&apos;t fulfill in-house — ongoing{" "}
                    <Link
                      href="/local-seo-google-business-optimization"
                      className="wl-inline-link"
                    >
                      Google Business Profile management
                    </Link>
                    , say, or full{" "}
                    <Link
                      href="/services/local-seo-for-home-services"
                      className="wl-inline-link"
                    >
                      local SEO
                    </Link>{" "}
                    — or your pipeline outgrows your team&apos;s capacity. Hiring
                    a specialist for a capability you&apos;ll only use
                    occasionally is slow and expensive. Turning the work away
                    costs you revenue and weakens the client relationship.
                    White-label fulfillment solves both — you say yes to the
                    work, we deliver it under your brand, and you grow without the
                    overhead.
                  </p>
                  <p>
                    Niche capabilities are where this matters most.{" "}
                    <Link
                      href="/services/gmb-reinstatement-help"
                      className="wl-inline-link"
                    >
                      Google Business Profile reinstatement
                    </Link>
                    , for example, is a specialized skill most agencies
                    can&apos;t justify staffing for, yet clients with suspended
                    profiles need it urgently. Partnering lets you offer that
                    expertise on demand, with a track record of 700+
                    reinstatements behind it, without becoming a reinstatement
                    expert yourself.
                  </p>
                  <h3>Your Brand Stays Front and Center</h3>
                  <p>
                    In a fully white-label arrangement, your client never learns{" "}
                    <Link href="/about" className="wl-inline-link">
                      our US-based team
                    </Link>{" "}
                    exists. Deliverables, reports, and communication carry your
                    branding. We don&apos;t contact your clients, our name appears
                    nowhere in what they receive, and as far as they&apos;re
                    concerned, your agency did the work.{" "}
                    <strong>That discretion is non-negotiable.</strong>
                  </p>
                  <h3>Margins That Make It Worthwhile</h3>
                  <p>
                    Reseller pricing sits below our standard rates, giving you
                    room to mark up to your own client price and keep a
                    comfortable margin — whether you resell a single service or a
                    bundled{" "}
                    <Link href="/services/launchpad" className="wl-inline-link">
                      starter marketing package
                    </Link>{" "}
                    for a new-business client. You control what your client pays;
                    we keep your cost low. The result is a new revenue stream with
                    none of the fulfillment burden — and the more you send, the
                    better your wholesale rate becomes.
                  </p>
                </div>
                <MarginMeterVisual />
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
                <h2 className="wl-sec-h2">Agency Partner Questions.</h2>
                <p className="wl-sec-sub">
                  If your question isn&apos;t here, add it to the form and
                  we&apos;ll answer it when we send your partner details.
                </p>
                <div className="wl-faq">
                  {faqs.map((f, i) => (
                    <details key={i} name="wl-faq" open={i === 0}>
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
            <h2>Add Services Without Adding Headcount.</h2>
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
                  <Link href="/local-seo-google-business-optimization">GBP Management</Link>
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
