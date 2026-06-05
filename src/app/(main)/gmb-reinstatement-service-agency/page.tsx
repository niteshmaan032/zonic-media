import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/gmbRein.css";

import LeadContactForm from "@/app/components/LeadContactForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title:
    "Google Business Profile Suspended? We Reinstate It Fast | Zonic Media",
  description:
    "Your GBP is suspended and every hour costs you customers. Zonic Media's reinstatement specialists recover suspended Google Business Profiles in 5–7 days. Money-back guarantee.",
  alternates: { canonical: "/gmb-reinstatement-service-agency" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "GBP Reinstatement Service Agency",
    url: "/gmb-reinstatement-service-agency",
  },
]);

const formHead = {
  leadFormTitle: "Start Your Free Case Review",
  leadCallText: (
    <>
      Or call directly:{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        {SITE_CONTACT.phoneDisplay}
      </a>{" "}
      · Mon–Fri 9AM–5PM ET. 100% confidential · Response within 2 hours.
    </>
  ),
  submitButtonText: "Submit My Case — Free Review",
};

const diagCards = [
  {
    tag: "Hard Suspension",
    tagClass: "gbr-hard",
    title: "Profile Completely Removed from Maps",
    body: "Your business doesn't appear in Google Maps or local search at all. Typically caused by policy violations, address issues, or suspicious account activity. Requires a formal appeal with supporting documentation.",
    cta: "Start Hard Suspension Case",
  },
  {
    tag: "Soft Suspension",
    tagClass: "gbr-soft",
    title: "Profile Visible but Account Access Revoked",
    body: "Your listing still shows on Google Maps but you've lost management access. Often triggered by verification lapses, multiple admin conflicts, or account security flags. Usually faster to resolve than a hard suspension.",
    cta: "Start Soft Suspension Case",
  },
  {
    tag: "Suspended Pending Verification",
    tagClass: "gbr-verify",
    title: "New or Recently Edited Profile Flagged",
    body: "Common for newly created profiles, profiles with recent address or category changes, and service-area businesses. Google requires additional verification — video verification, postcard, or document submission — before reinstatement.",
    cta: "Start Verification Case",
  },
  {
    tag: "Disabled / Permanently Removed",
    tagClass: "gbr-hard",
    title: "Profile Disabled After Failed Appeals",
    body: "The most complex suspension type. Often occurs after multiple DIY appeal attempts that worsened the situation. Still recoverable in most cases — but requires a specialist who knows how to approach Google's reinstatement team correctly.",
    cta: "Start Complex Case Review",
  },
];

const causes = [
  {
    icon: "📍",
    title: "Address & Location Violations",
    body: "Virtual offices, P.O. boxes, residential addresses for service-area businesses, addresses that don't match your business registration, or a location that can't be verified on Street View. Google's address policy is strict and a leading cause of suspension for home services and contractors.",
  },
  {
    icon: "🏷️",
    title: "Guideline Violations in Business Name or Categories",
    body: "Keyword stuffing in your business name (\"Best Plumber Delaware 24/7 Emergency\"), using a DBA name that differs from your registered business name, or selecting categories that don't match your primary service. Google's spam detection has become significantly more aggressive since 2023.",
  },
  {
    icon: "✏️",
    title: "Too Many Profile Edits in a Short Period",
    body: "Multiple changes to core fields — business name, address, phone number, or primary category — within a short timeframe triggers Google's suspicious activity detection. This is especially common after a rebrand, move, or when a new agency takes over and bulk-edits the profile.",
  },
  {
    icon: "👥",
    title: "Duplicate Listings or Ownership Conflicts",
    body: "Multiple GBP profiles for the same location, old listings from previous business names that were never properly closed, or access disputes between former employees and current owners can all trigger suspensions. We audit for duplicates as part of every case review.",
  },
  {
    icon: "⭐",
    title: "Review Policy Violations or Unusual Activity",
    body: "A sudden influx of reviews, reviews flagged as spam by Google's algorithm, or review gating practices can trigger profile-level flags. Review-related suspensions are more nuanced than address violations and require a specific documentation approach in the appeal.",
  },
  {
    icon: "🔄",
    title: "Failed DIY Appeal Attempts",
    body: "This is the most common reason we see complex cases: a business owner submitted an appeal without the right documentation or framing, Google rejected it, and each subsequent attempt made the case harder to reopen. If you've already tried and failed, stop submitting and contact us before attempting again.",
  },
];

const processSteps = [
  {
    num: "01",
    time: "Day 1 — Same Business Day",
    title: "Free Suspension Audit & Diagnosis",
    body: "We review your profile, account history, recent edits, and any prior appeal attempts. We identify the exact suspension trigger and categorize the suspension type — hard, soft, verification-pending, or disabled. You receive a clear diagnosis and a realistic timeline before we charge a cent.",
    tags: [
      "Profile analysis",
      "Suspension type ID",
      "Prior appeal review",
      "Timeline estimate",
    ],
  },
  {
    num: "02",
    time: "Days 1–2 — Within 48 Hours",
    title: "Custom Reinstatement Strategy & Documentation",
    body: "Our specialists build the appeal package: business legitimacy documentation (registration, utility bills, storefront photos), compliance corrections to your profile, a carefully crafted appeal narrative that uses the language Google's reinstatement team actually responds to, and a supporting evidence file. The documentation quality is what separates successful appeals from rejected ones.",
    tags: [
      "Appeal documentation",
      "Compliance fixes",
      "Evidence package",
      "Appeal narrative",
    ],
  },
  {
    num: "03",
    time: "Days 3–7 — Active Follow-Up",
    title: "Appeal Submission & Aggressive Follow-Up",
    body: "We submit the appeal and actively follow up — not weekly check-ins, but daily monitoring and escalation if Google's response stalls. If the first appeal is rejected, we review the reason, revise the strategy, and resubmit with stronger documentation. We do not stop after one attempt.",
    tags: [
      "Appeal submitted",
      "Daily monitoring",
      "Escalation if needed",
      "Resubmission if rejected",
    ],
  },
  {
    num: "04",
    time: "Post-Reinstatement",
    title: "Profile Optimization & Suspension Prevention",
    body: "Once reinstated, a raw profile is still a weak profile. We optimize your categories, description, photos, and service areas so you come back ranking higher than before — and implement the ongoing practices that prevent future suspensions. Reinstatement without optimization is a missed opportunity.",
    tags: [
      "Full GBP optimization",
      "Category fix",
      "Suspension prevention audit",
      "30-day monitoring",
    ],
  },
];

const guarantees = [
  {
    icon: "💰",
    title: "Money-Back Guarantee",
    body: (
      <>
        If we can&apos;t get your listing reinstated, you pay nothing. We only
        charge when we deliver results. No partial refunds, no fine print — full
        refund if we fail.{" "}
        <Link href="/legal/refund-policy">See our refund policy.</Link>
      </>
    ),
  },
  {
    icon: "⚡",
    title: "No Long Waits",
    body: "Our average reinstatement time is 5–7 business days. We follow up with Google aggressively — not once a week. If your case stalls, we escalate. We treat your suspended profile like our own business is on the line.",
  },
  {
    icon: "🎯",
    title: "Expert-Only Handling",
    body: "Every case is handled personally by a veteran GBP specialist — not a junior freelancer, not an automated tool. The person who diagnoses your suspension is the person who writes and submits your appeal.",
  },
];

const pricing = [
  {
    name: "Suspension Fix",
    price: "400",
    desc: "One suspended profile, fully reinstated. Best for businesses that just need to get back online.",
    features: [
      { text: "Full suspension diagnosis", dim: false },
      { text: "Custom appeal + documentation", dim: false },
      { text: "Google liaison & follow-up", dim: false },
      { text: "Resubmission if rejected", dim: false },
      { text: "Profile health check post-reinstatement", dim: false },
      { text: "Full GBP optimization", dim: true },
      { text: "Suspension prevention audit", dim: true },
    ],
    btn: "Start Suspension Fix",
    note: "Money-back if not reinstated",
    featured: false,
  },
  {
    name: "Fix + Optimize",
    price: "497",
    desc: "Get reinstated and come back ranking higher than before — with a profile built to stay up.",
    features: [
      { text: "Everything in Suspension Fix", dim: false },
      { text: "Full GBP profile optimization", dim: false },
      { text: "Category & keyword optimization", dim: false },
      { text: "Photo & description overhaul", dim: false },
      { text: "Google Posts setup (first month)", dim: false },
      { text: "Suspension prevention audit", dim: false },
      { text: "30-day post-reinstatement monitoring", dim: false },
    ],
    btn: "Start Fix + Optimize",
    note: "Money-back if not reinstated",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Agency / Multi-Location",
    price: "197",
    priceSuffix: "/loc",
    desc: "For agencies and businesses with 3+ suspended profiles. Volume pricing with dedicated management.",
    features: [
      { text: "Everything in Fix + Optimize", dim: false },
      { text: "Bulk reinstatement strategy", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "Priority support & response", dim: false },
      { text: "White-label reporting available", dim: false },
      { text: "Cross-location duplicate audit", dim: false },
      { text: "Agency partner program access", dim: false },
    ],
    btn: "Get Agency Quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const faqs = [
  {
    q: "What types of suspensions do you handle?",
    a: "We handle all GBP suspension types: hard suspensions (profile fully removed), soft suspensions (access revoked but listing visible), suspended-pending-verification profiles, disabled profiles after failed appeals, and duplicate listing conflicts. If your profile is suspended, we've almost certainly handled a similar case. If your situation is genuinely unrecoverable — which is rare — we'll tell you upfront rather than take your money.",
  },
  {
    q: "I already tried to appeal and Google rejected it. Can you still help?",
    a: "Yes — this is actually the most common situation we see. DIY appeals typically fail because of incorrect documentation, the wrong appeal channel, or framing that doesn't match what Google's reinstatement team looks for. Each failed attempt doesn't permanently close the case, but it does make subsequent appeals harder. If you've had rejections, stop submitting and contact us before trying again. We'll review your appeal history and build a stronger case.",
  },
  {
    q: "How long does reinstatement take?",
    a: "Our average across all case types is 5–7 business days. Standard suspensions with clear documentation are often resolved in 3–5 days. Complex cases — profiles that were disabled after multiple failed appeals, profiles with long suspension histories, or cases requiring video verification — can take up to 14 days. We give you a realistic timeline after your free diagnostic audit, before you pay anything.",
  },
  {
    q: "What documents do I need to provide?",
    a: "It depends on your suspension type. Most cases require at least one form of business legitimacy documentation: a utility bill or lease with your business address, business registration or license, recent bank or tax statement showing business name and address, or storefront photos. We guide you through exactly what's needed after your audit — we won't ask for unnecessary documents, and we prep everything into the correct format for Google's review team.",
  },
  {
    q: "What if Google rejects the appeal again?",
    a: "We don't stop after one attempt. If Google rejects the appeal, we review the rejection reason, revise our strategy and documentation, and resubmit. This is included in the base service — not an additional charge. The money-back guarantee applies if we exhaust all appeal pathways without success, which happens in fewer than 1% of cases.",
  },
];

function Page() {
  return (
    <>
      <Script
        id="gbr-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div id="gbr-top" className="gbr-page">
        {/* Minimal NAV (from HTML, replaces site navbar) */}
        <nav className="gbr-nav">
          <Link href="/" className="gbr-nav-logo">
            Z<span>O</span>NIC MEDIA
          </Link>
          <div className="gbr-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="gbr-nav-phone-link">
              📞 {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#gbr-case-form" className="gbr-nav-cta-btn">
              Start My Case
            </HashScrollLink>
          </div>
        </nav>

        <div className="gbr-main-wrapper">
          {/* Urgency strip */}
          <div className="gbr-urgency">
            <span className="gbr-urgency-text">
              ⚠️ Every hour your profile stays suspended, customers are calling
              your competitors
            </span>
            <HashScrollLink href="#gbr-case-form" className="gbr-urgency-cta">
              Get Help Now →
            </HashScrollLink>
          </div>

          <div className="gbr-row">
            {/* Left: content (col-7) */}
            <div className="gbr-content-col">
              {/* HERO */}
              <section className="gbr-hero">
                <div className="gbr-hero-inner">
                  <div className="gbr-status">
                    <div className="gbr-status-dot"></div>
                    <span className="gbr-status-text">
                      Emergency GBP Recovery Service
                    </span>
                  </div>

                  <h1>
                    YOUR GBP IS{" "}
                    <span className="gbr-red">SUSPENDED.</span>{" "}
                    WE <span className="gbr-yellow">FIX</span>{" "}
                    <span className="gbr-outline">THAT.</span>
                  </h1>

                  <p className="gbr-hero-sub">
                    Your business is{" "}
                    <strong>invisible on Google Maps right now</strong> — no
                    calls, no direction requests, no new customers. Zonic
                    Media&apos;s reinstatement specialists have restored 1,500+
                    suspended profiles. We&apos;ll get yours back in 5–7 days.
                  </p>

                  <div className="gbr-hero-guarantee">
                    <div className="gbr-hg-icon">🛡️</div>
                    <div className="gbr-hg-text">
                      <strong>
                        Money-Back Guarantee — If we can&apos;t get you
                        reinstated, you pay nothing.
                      </strong>
                      <span>
                        We only win when you win. No fine print, no exceptions.
                      </span>
                    </div>
                  </div>

                  <div className="gbr-hero-ctas">
                    <Link
                      href={SITE_CONTACT.phoneHref}
                      className="gbr-cta-call"
                    >
                      <span className="gbr-call-icon">📞</span>
                      <span>
                        Call Now: {SITE_CONTACT.phoneDisplay}
                        <span className="gbr-call-sub">
                          Speak with a reinstatement specialist immediately
                        </span>
                      </span>
                    </Link>
                    <HashScrollLink
                      href="#gbr-case-form"
                      className="gbr-cta-form-trigger"
                    >
                      Submit Your Case Online → Get a response within 2 hours
                    </HashScrollLink>
                  </div>

                  <div className="gbr-hero-stats">
                    <div className="gbr-hs-item">
                      <span className="gbr-hs-num">1,500+</span>
                      <span>Profiles Reinstated</span>
                    </div>
                    <div className="gbr-hs-sep"></div>
                    <div className="gbr-hs-item">
                      <span className="gbr-hs-num">99%</span>
                      <span>Success Rate</span>
                    </div>
                    <div className="gbr-hs-sep"></div>
                    <div className="gbr-hs-item">
                      <span className="gbr-hs-num">5–7</span>
                      <span>Day Avg. Recovery</span>
                    </div>
                    <div className="gbr-hs-sep"></div>
                    <div className="gbr-hs-item">
                      <span className="gbr-hs-num">4.9★</span>
                      <span>Client Rating</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* COST PANEL */}
              <div className="gbr-cost-section">
                <div className="gbr-cost-inner">
                  <div
                    className="gbr-sec-label"
                    style={{
                      background: "rgba(255,255,255,.12)",
                      borderColor: "rgba(255,255,255,.2)",
                      color: "rgba(255,255,255,.7)",
                    }}
                  >
                    The Real Cost of Staying Suspended
                  </div>
                  <h2 className="gbr-cost-heading">
                    Every Day Suspended Is Revenue Walking Out the Door
                  </h2>
                  <p className="gbr-cost-sub">
                    These aren&apos;t estimates. They&apos;re what happens when
                    your business disappears from Google Maps — where 86% of
                    consumers look for local businesses.
                  </p>
                  <div className="gbr-cost-grid">
                    <div className="gbr-cost-card">
                      <div className="gbr-cost-num">240+</div>
                      <div className="gbr-cost-label">
                        <strong>Calls Lost</strong>
                        Since your profile was suspended
                      </div>
                    </div>
                    <div className="gbr-cost-card">
                      <div className="gbr-cost-num">73%</div>
                      <div className="gbr-cost-label">
                        <strong>Map Pack Traffic Drop</strong>
                        Immediate loss when a GBP goes dark
                      </div>
                    </div>
                    <div className="gbr-cost-card">
                      <div className="gbr-cost-num">$680</div>
                      <div className="gbr-cost-label">
                        <strong>Avg. Daily Revenue Loss</strong>
                        For a local service business without GBP visibility
                      </div>
                    </div>
                    <div className="gbr-cost-card">
                      <div className="gbr-cost-num">5–7</div>
                      <div className="gbr-cost-label">
                        <strong>Business Days</strong>
                        Our average reinstatement time — the fastest in the
                        industry
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUSPENSION TYPES */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Identify Your Situation</div>
                <h2 className="gbr-sec-h2">
                  What Type of Suspension Do You Have?
                </h2>
                <p className="gbr-sec-sub">
                  Google issues different types of suspensions — and each
                  requires a different recovery approach. Find your situation
                  below.
                </p>
                <div className="gbr-diag-grid">
                  {diagCards.map((c, i) => (
                    <div key={i} className="gbr-diag-card">
                      <div className={`gbr-dc-tag ${c.tagClass}`}>{c.tag}</div>
                      <div className="gbr-dc-title">{c.title}</div>
                      <div className="gbr-dc-body">{c.body}</div>
                      <HashScrollLink
                        href="#gbr-case-form"
                        className="gbr-dc-cta"
                      >
                        {c.cta} <span>→</span>
                      </HashScrollLink>
                    </div>
                  ))}
                </div>
              </section>

              {/* CAUSES */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Common Suspension Causes</div>
                <h2 className="gbr-sec-h2">
                  Why Your GBP Was{" "}
                  <span className="gbr-red">Flagged by Google</span>
                </h2>
                <p className="gbr-sec-sub">
                  Google doesn&apos;t always tell you why. Here are the most
                  common triggers we diagnose — and fix.
                </p>
                <div className="gbr-causes-list">
                  {causes.map((c, i) => (
                    <div key={i} className="gbr-cause-item">
                      <div className="gbr-ci-icon">{c.icon}</div>
                      <div>
                        <div className="gbr-ci-title">{c.title}</div>
                        <div className="gbr-ci-body">{c.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Our Recovery Process</div>
                <h2 className="gbr-sec-h2">
                  Back on Google in{" "}
                  <span className="gbr-accent">4 Proven Steps</span>
                </h2>
                <p className="gbr-sec-sub">
                  A structured process with specific timelines — not
                  &quot;we&apos;ll handle it&quot; with no milestones.
                </p>
                <div className="gbr-process-steps">
                  {processSteps.map((s, i) => (
                    <div key={i} className="gbr-ps-item">
                      <div className="gbr-ps-num">{s.num}</div>
                      <div>
                        <div className="gbr-ps-time">{s.time}</div>
                        <div className="gbr-ps-title">{s.title}</div>
                        <div className="gbr-ps-body">{s.body}</div>
                        <div className="gbr-ps-tags">
                          {s.tags.map((t, j) => (
                            <span key={j} className="gbr-ps-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GUARANTEES */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Our Commitment</div>
                <h2 className="gbr-sec-h2">
                  Three Guarantees{" "}
                  <span className="gbr-accent">You Won&apos;t Find Elsewhere</span>
                </h2>
                <div className="gbr-guarantee-grid">
                  {guarantees.map((g, i) => (
                    <div key={i} className="gbr-guar-card">
                      <div className="gbr-gc-icon">{g.icon}</div>
                      <div className="gbr-gc-title">{g.title}</div>
                      <div className="gbr-gc-body">{g.body}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TESTIMONIALS — Google reviews widget */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Client Results</div>
                <h2 className="gbr-sec-h2">
                  Real Cases.{" "}
                  <span className="gbr-accent">Real Reinstatements.</span>
                </h2>
                <LenisIframeGuard
                  className="gbr-reviews-widget"
                  widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c"
                />
              </section>

              {/* PRICING */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Transparent Pricing</div>
                <h2 className="gbr-sec-h2">
                  Clear Prices.{" "}
                  <span className="gbr-accent">No Surprises.</span>
                </h2>
                <p className="gbr-sec-sub">
                  Money-back guarantee on all plans. You don&apos;t pay if we
                  don&apos;t deliver.
                </p>
                <div className="gbr-pricing-grid">
                  {pricing.map((p, i) => (
                    <div
                      key={i}
                      className={`gbr-pc ${p.featured ? "gbr-featured" : ""}`}
                    >
                      {p.featured && p.badge ? (
                        <div className="gbr-pc-badge-top">{p.badge}</div>
                      ) : null}
                      <div className="gbr-pc-name">{p.name}</div>
                      <div className="gbr-pc-price">
                        <sup>$</sup>
                        {p.price}
                        {p.priceSuffix ? (
                          <span className="gbr-pc-price-suffix">
                            {p.priceSuffix}
                          </span>
                        ) : null}
                      </div>
                      <div className="gbr-pc-desc">{p.desc}</div>
                      <ul className="gbr-pc-features">
                        {p.features.map((f, j) => (
                          <li key={j} className={f.dim ? "gbr-dim" : ""}>
                            {f.text}
                          </li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#gbr-case-form"
                        className="gbr-pc-btn"
                      >
                        {p.btn}
                      </HashScrollLink>
                      <p className="gbr-pc-note">{p.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="gbr-section">
                <div className="gbr-sec-label">Common Questions</div>
                <h2 className="gbr-sec-h2">
                  Everything You Need to Know{" "}
                  <span className="gbr-accent">Before Starting</span>
                </h2>
                <div className="gbr-faq-accord">
                  {faqs.map((f, i) => (
                    <div key={i} className="gbr-faq-item">
                      <p className="gbr-faq-q">{f.q}</p>
                      <div className="gbr-faq-a">{f.a}</div>
                    </div>
                  ))}
                </div>
                <Script
                  id="gbr-faq-schema"
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      url: "https://zonicllc.com/gmb-reinstatement-service-agency",
                      mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: f.a,
                        },
                      })),
                    }),
                  }}
                />
              </section>

              {/* Mobile-only inline form */}
              <div className="gbr-mob-form d-block d-lg-none" id="gbr-case-form">
                <div className="gbr-form-card">
                  <LeadContactForm
                    leadFormTitle={formHead.leadFormTitle}
                    leadCallText={formHead.leadCallText}
                    submitButtonText={formHead.submitButtonText}
                  />
                </div>
              </div>
            </div>

            {/* Right: sticky form (col-4) */}
            <div
              className="gbr-form-col d-none d-lg-block"
              data-scroll-target="gbr-case-form"
            >
              <div className="gbr-sticky-form">
                <div className="gbr-form-card">
                  <LeadContactForm
                    leadFormTitle={formHead.leadFormTitle}
                    leadCallText={formHead.leadCallText}
                    submitButtonText={formHead.submitButtonText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="gbr-final-cta">
          <div className="gbr-fc-inner">
            <div className="gbr-fc-label">Every hour counts</div>
            <h2>
              BACK ON GOOGLE.
              <br />
              BACK IN <span className="gbr-yellow">BUSINESS.</span>
            </h2>
            <p>
              Your competitors are getting your calls right now. The longer your
              profile stays suspended, the more customers find them instead of
              you. Let&apos;s fix that today.
            </p>
            <div className="gbr-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="gbr-fc-call">
                📞 Call {SITE_CONTACT.phoneDisplay} — Talk to a Specialist
              </Link>
              <HashScrollLink href="#gbr-case-form" className="gbr-fc-form">
                Submit Case Online →
              </HashScrollLink>
            </div>
            <div className="gbr-fc-guarantee">
              <span>✓ Money-Back Guarantee</span>
              <span style={{ color: "var(--gbr-muted)" }}>·</span>
              <span>✓ 5–7 Day Average Recovery</span>
              <span style={{ color: "var(--gbr-muted)" }}>·</span>
              <span>✓ 1,500+ Profiles Reinstated</span>
            </div>
          </div>
        </div>

        {/* Minimal FOOTER (from HTML) */}
        <footer className="gbr-footer">
          <div className="gbr-footer-inner">
            <div className="gbr-footer-logo">
              Z<span>O</span>NIC MEDIA
            </div>
            <div className="gbr-footer-info">
              8 The Green, STE B, Dover, DE 19901 ·{" "}
              <Link href={SITE_CONTACT.phoneHref}>
                {SITE_CONTACT.phoneDisplay}
              </Link>{" "}
              ·{" "}
              <a href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</a>
            </div>
            <div className="gbr-footer-links">
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/refund-policy">Refund Policy</Link>
              <Link href="/legal/terms-conditions">Terms</Link>
              <Link href="/">Zonic Media Home</Link>
            </div>
          </div>
        </footer>

        {/* Sticky bottom bar */}
        <div className="gbr-sticky-bar">
          <div className="gbr-sb-left">
            <strong>GBP Suspended?</strong> We reinstate it in 5–7 days ·
            Money-back guarantee
          </div>
          <div className="gbr-sb-right">
            <Link href={SITE_CONTACT.phoneHref} className="gbr-sb-call">
              📞 Call {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#gbr-case-form" className="gbr-sb-form">
              Start Free Case Review
            </HashScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
