import "@/app/style/gmb-reinstatement.css";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";

import Footer from "@/app/components/Footer";
import GmbAuditForm from "@/app/components/GmbAuditForm";
import GmbProfileCard from "@/app/components/GmbProfileCard";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import ScrollToFormLink from "@/app/components/ScrollToFormLink";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";
import { SITE_CONTACT } from "@/shared/siteConfig";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GMB Reinstatement Help", url: "/services/gmb-reinstatement-help" },
]);

const GmbResinstFaqs = [
  {
    question: "What types of GBP suspensions do you handle?",
    answer:
      "We handle all suspension types — soft suspensions, hard suspensions, disabled listings, and profiles suspended pending verification. If your listing is suspended, our team has very likely handled a similar case before.",
  },
  {
    question: "How long does reinstatement take?",
    answer:
      "Most cases resolve within five to seven business days. More complex cases or those requiring video verification can take up to two weeks. We give you a realistic timeline after the audit, since the final review timing sits with Google.",
  },
  {
    question: "What if Google rejects the appeal?",
    answer:
      "We don't stop after one appeal. If Google rejects the request, we review the reason, strengthen the strategy, correct any remaining issues, and resubmit with better documentation.",
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
      "Once your profile is live again, we optimize the categories, services, photos, posts, and Q&A so you rank higher and attract more customers than before — and so the same issue is less likely to recur.",
  },
  {
    question: "Do you work with agencies and multi-location businesses?",
    answer:
      "Yes. We regularly support agencies and multi-location brands managing many Google Business Profiles. Contact us for agency and bulk reinstatement options.",
  },
];

export const metadata: Metadata = {
  title: "GBP Suspension Recovery Experts",
  description:
    "Need help with a suspended Google Business Profile? Our experts handle reinstatement, compliance fixes, and fast recovery support.",
  alternates: { canonical: "/services/gmb-reinstatement-help" },
};

function page() {
  return (
    <>
    <div className={`gmb-reinst-page ${manrope.variable} ${inter.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div id="gmb-reinst-top"></div>

      <div className="gmb-main-wrapper">
        {/* ============ LEFT: CONTENT ============ */}
        <div className="gmb-content">
          {/* HERO */}
          <section className="gmb-panel-navy hero">
            <span className="hero-badge">
              <span className="ping"></span>No. 1 Google Business Profile
              reinstatement agency in the US
            </span>

            <h1>
              Suspended Google Business Profile?{" "}
              <span className="accent">Get Reinstated.</span>
            </h1>

            <p className="lead">
              When your Google Business Profile is suspended, you vanish from Maps
              and lose calls every hour. Zonic Media diagnoses the real cause,
              fixes the compliance issues, and manages your appeal to recover your
              listing, rankings, and leads — fast.
            </p>

            <div className="hero-actions">
              <ScrollToFormLink className="btn btn-primary">
                Get a Free Suspension Audit
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 17, height: 17 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </ScrollToFormLink>
              <a href={SITE_CONTACT.phoneHref} className="btn btn-ghost-light">
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
                <span className="stars">★★★★★</span> <b>4.9</b> client satisfaction
              </span>
              <span>
                <b>700+</b> profiles reinstated &amp; verified
              </span>
            </div>

            <div className="hero-visual">
              <GmbProfileCard />
            </div>
          </section>

          {/* Mobile form — shown right after the hero on small screens (the
              sticky right column is desktop-only). Kept OUT of the hero box so
              it isn't double-boxed / congested on mobile. */}
          <div className="gmb-mob-form d-block d-lg-none js-audit-form">
            <GmbAuditForm />
          </div>

          {/* TRUST BAR */}
          <section className="gmb-panel">
            <div className="trustbar-grid">
              <div className="stat">
                <div className="num">700<span>+</span></div>
                <div className="cap">Profiles reinstated &amp; verified</div>
              </div>
              <div className="stat">
                <div className="num">5–7<span>d</span></div>
                <div className="cap">Average resolution time</div>
              </div>
              <div className="stat">
                <div className="num">4.9<span>★</span></div>
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
              <h2>The common reasons Google suspends a Business Profile</h2>
              <p>
                Suspensions usually come down to a conflict with Google&apos;s
                guidelines, verification standards, or trust signals. These are
                the issues our specialists resolve most often.
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
                <h3>Address &amp; verification issues</h3>
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
                <h3>Guideline violations</h3>
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
                <h3>Frequent listing changes</h3>
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
                <h3>Duplicate listings</h3>
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
                <h3>Ownership &amp; access disputes</h3>
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
                <h3>Review &amp; trust signals</h3>
                <p>
                  Spam reviews, unusual activity, or weak trust signals can affect
                  profile status. We strengthen credibility and support a clean,
                  successful recovery.
                </p>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="gmb-panel-navy gmb-process">
            <div className="sec-head">
              <span className="eyebrow light">How it works</span>
              <h2>Back on Google in four proven steps</h2>
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
                <h4>Free suspension audit</h4>
                <p>
                  We review your profile, pinpoint the likely suspension reason,
                  and assess your reinstatement options — at no cost and no
                  commitment.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">02</div>
                <div className="when">24–48 hours</div>
                <h4>Custom reinstatement strategy</h4>
                <p>
                  Our specialists build a tailored appeal with the documentation,
                  language, and evidence Google&apos;s review process responds to.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">03</div>
                <div className="when">3–7 days</div>
                <h4>Appeal &amp; follow-up</h4>
                <p>
                  We submit the appeal and actively follow up with Google,
                  adjusting as needed until your case reaches a resolution.
                </p>
              </div>
              <div className="proc-card">
                <div className="proc-num">04</div>
                <div className="when">Post-reinstatement</div>
                <h4>Optimize &amp; protect</h4>
                <p>
                  Once you&apos;re live, we optimize categories, keywords, photos,
                  and posts — and harden the profile so the issue is less likely to
                  return.
                </p>
              </div>
            </div>
          </section>

          {/* AFTER REINSTATEMENT */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">After reinstatement</span>
              <h2>What happens after your profile is reinstated?</h2>
              <p>
                Getting your listing back is the starting line, not the finish.
                Once you&apos;re live again, our team turns your recovered profile
                into a lead-generating asset — optimized to rank in the Map Pack,
                build trust, and stay compliant so the same issue doesn&apos;t come
                back.
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
                <h4>Categories &amp; services</h4>
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
                <h4>Keyword optimization</h4>
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
                <h4>Photos &amp; media</h4>
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
                <h4>Google Posts &amp; Q&amp;A</h4>
                <p>
                  Ongoing posts and seeded Q&amp;A that keep your profile active —
                  a signal Google and customers both reward.
                </p>
              </div>
              <div className="after-card">
                <div className="after-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M12 2 15 9l7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9z" />
                  </svg>
                </div>
                <h4>Reviews &amp; reputation</h4>
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
                <h4>Compliance monitoring</h4>
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
              <h2>Why we&apos;re a top choice for GBP reinstatement in the US</h2>
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
                <h3>Experienced specialists</h3>
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
                <h3>Faster resolution</h3>
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
                <h3>Compliance-first</h3>
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
                <h3>Growth-focused</h3>
                <p>
                  We don&apos;t just recover listings — we help restore your
                  rankings, calls, leads, and long-term local visibility.
                </p>
              </div>
            </div>
          </section>

          {/* AUDIT CTA BAND */}
          <section className="gmb-panel-navy gmb-auditcta">
            <span className="eyebrow light">Free suspension audit</span>
            <h2 style={{ fontSize: "clamp(24px,3.2vw,34px)", fontWeight: 800, color: "#fff", margin: "14px 0 0" }}>
              Every hour suspended, customers find your competitors
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

          {/* GUARANTEE PILLARS */}
          <section className="gmb-panel">
            <div className="sec-head">
              <span className="eyebrow">How we work with you</span>
              <h2>Clear commitments, no guesswork</h2>
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
                <h3>Risk-aware engagement</h3>
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
                <h3>No idle cases</h3>
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
                <h3>Expert-only work</h3>
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
              <h2>Real businesses, real reinstatements</h2>
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
              <h2>Everything you need to know</h2>
            </div>
            {GmbResinstFaqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
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

            <Script
              id="gmb-reinst-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://zonicllc.com/services/gmb-reinstatement-help",
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
          <h2>Don&apos;t let a suspended listing cost you more customers</h2>
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
              Dover, DE · serving the US
            </span>
          </div>
        </div>
      </section>
    </div>

    <Footer />
    </>
  );
}

export default page;
