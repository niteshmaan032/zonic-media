import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/localOpt.css";

import LeadContactForm from "@/app/components/LeadContactForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title:
    "Google Business Profile Optimization | Rank in the Map Pack | Zonic Media",
  description:
    "Your GBP is live — but is it ranking? Zonic Media's GBP optimization service gets local businesses into the top-3 Map Pack, generating more calls, clicks, and revenue.",
  alternates: { canonical: "/local-seo-google-business-optimization" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "Local SEO & Google Business Optimization",
    url: "/local-seo-google-business-optimization",
  },
]);

const formHead = {
  leadFormTitle: "Get Your Free GBP Audit",
  leadCallText: (
    <>
      Or call directly:{" "}
      <a href={SITE_CONTACT.phoneHref} className="lead-call-link">
        {SITE_CONTACT.phoneDisplay}
      </a>{" "}
      · Mon–Fri 9AM–5PM · Dover, Delaware.
    </>
  ),
  submitButtonText: "Send Me My Free GBP Audit",
};

const tickerItems = [
  "Category Optimization",
  "Business Description Rewrite",
  "Photo Strategy",
  "Google Posts",
  "Q&A Management",
  "Review Generation",
  "Service Area Setup",
  "Keyword Placement",
  "Attribute Optimization",
  "Competitor Analysis",
  "Map Pack Ranking",
  "Call Click Tracking",
];

const auditCards = [
  {
    icon: "🗂️",
    title: "Wrong or Missing Categories",
    body: "Google uses your primary and secondary categories as hard eligibility gates. Pick the wrong primary category or skip secondary ones, and you're simply not appearing in searches for your most valuable services — even when you're the best option in the area.",
    consequence: "↓ Missing up to 60% of eligible searches",
  },
  {
    icon: "📝",
    title: "Keyword-Blind Business Description",
    body: "Your 750-character business description is indexable content Google uses to determine relevance. Most descriptions read like a tagline (\"We're a trusted local plumber\"). They should be keyword-rich, location-specific, and service-detailed — written to rank, not just to sound nice.",
    consequence: "↓ Low relevance score in local algorithm",
  },
  {
    icon: "📸",
    title: "Thin, Static Photo Library",
    body: "Profiles with 40+ real job-site photos receive 3× more direction requests and 2× more call clicks than profiles with under 10 photos. Google's algorithm reads photo engagement as a trust and activity signal. Eight photos from setup three years ago isn't a photo strategy — it's a ranking liability.",
    consequence: "↓ 2× fewer call clicks vs. optimized profiles",
  },
  {
    icon: "📅",
    title: "No Post Activity = Invisible Signal",
    body: "Google Posts generate engagement signals that the local ranking algorithm directly measures. An inactive profile — nothing posted in 60+ days — signals to Google that the business may be closed or unengaged. Weekly, hyperlocal posts that answer real customer questions outperform generic updates by a significant margin.",
    consequence: "↓ Deprioritized in local rankings",
  },
  {
    icon: "❓",
    title: "Abandoned Q&A Section",
    body: "The Q&A section is publicly editable and directly visible on your profile. Unanswered questions from 2 years ago, or worse — answers from competitors — are costing you conversions in real time. Seeding your own Q&A with keyword-rich, trust-building answers adds indexable content and removes objections before a customer even calls.",
    consequence: "↓ Trust erosion at the decision moment",
  },
  {
    icon: "⭐",
    title: "No Systematic Review Generation",
    body: "Reviews are Google's #1 local ranking signal and a homeowner's primary trust document. A competitor with 120 recent, specific, well-responded reviews will outrank and out-convert you regardless of service quality. Reviews don't happen by accident — they require a timed, systematized ask process that most businesses have never built.",
    consequence: "↓ Outranked by competitors with more reviews",
  },
];

const optimizeCards = [
  {
    icon: "🗂️",
    title: "Business Categories",
    body: "Primary category chosen for maximum ranking value. All applicable secondary categories added — each one unlocks an additional search query set you're currently invisible for.",
    impact: "High ranking impact",
  },
  {
    icon: "✍️",
    title: "Business Description",
    body: "Full 750-character rewrite. Keyword-rich, location-specific, service-detailed. Written to match the search queries your customers actually use — not to sound impressive in a brochure.",
    impact: "High ranking + conversion impact",
  },
  {
    icon: "📸",
    title: "Photos & Videos",
    body: "Right types (exterior, interior, team, job-site work), right quantity, geo-tagged, correctly named for algorithmic indexing. Includes guidance on ongoing photo capture from your team.",
    impact: "High engagement + trust impact",
  },
  {
    icon: "🔑",
    title: "Keywords & Attributes",
    body: "Strategic keyword placement across every indexable field. Attributes (emergency service, financing available, women-owned, etc.) completed and verified — these appear directly on your Map Pack card.",
    impact: "Moderate ranking impact",
  },
  {
    icon: "📢",
    title: "Google Posts Calendar",
    body: "Hyperlocal, seasonal, service-specific post strategy published on a consistent weekly cadence. We write and schedule these — not generic filler, but posts that answer questions real customers have in your market.",
    impact: "Activity + relevance signal",
  },
  {
    icon: "❓",
    title: "Q&A Population",
    body: "We seed 8–12 high-value questions your customers ask most, with keyword-rich answers that remove objections and build trust before the phone call happens. All existing unanswered questions addressed.",
    impact: "Trust + conversion impact",
  },
  {
    icon: "⭐",
    title: "Review Strategy",
    body: "A timed, 3-touch review request system specific to your service workflow. Includes the exact message sequence, timing, and single-tap link setup. No begging. No awkward asks. Consistent monthly volume.",
    impact: "Top local ranking factor",
  },
  {
    icon: "🗺️",
    title: "Service Area & NAP",
    body: "Service area configured for geographic relevance — not maximum radius, which dilutes local signal. NAP consistency verified across the web. Citation mismatches identified and flagged for correction.",
    impact: "Local relevance signal",
  },
];

const processItems = [
  {
    num: "01",
    timeline: "Day 1 — Same Business Day",
    title: "Full GBP Diagnostic Audit",
    body: "We run a complete health check against 40+ ranking signals: category selection, keyword coverage, photo quantity and types, post activity, Q&A state, review velocity, attribute completeness, and NAP consistency. You receive a scored report showing exactly where you stand against your top 3 local competitors.",
    deliverables: [
      "Competitor analysis",
      "40-point profile score",
      "Priority gap list",
      "Keyword opportunity map",
    ],
  },
  {
    num: "02",
    timeline: "Days 1–2 — Within 48 Hours",
    title: "Custom Optimization Strategy",
    body: "Using your audit findings, we build a tailored plan: which categories to add, which keywords to target based on actual search volume in your service area, what photo types to prioritize, and what your post calendar should cover for the next 90 days. Industry-specific — an HVAC strategy looks completely different from a dental or legal strategy.",
    deliverables: [
      "Category selection brief",
      "Keyword target list",
      "90-day post calendar",
      "Photo brief",
    ],
  },
  {
    num: "03",
    timeline: "Days 3–7 — Full Implementation",
    title: "Complete Profile Optimization",
    body: "We implement everything simultaneously: category updates, full business description rewrite, keyword placement across all indexable fields, services and products section buildout, attribute completion, photo upload and optimization, Q&A seeding, and the first round of Google Posts. Nothing left as \"to do later.\"",
    deliverables: [
      "Categories updated",
      "Description rewritten",
      "Photos optimized",
      "Q&A seeded",
      "Posts live",
    ],
  },
  {
    num: "04",
    timeline: "Ongoing — Monthly Reporting",
    title: "Monitoring, Posts & Ranking Growth",
    body: "For Manage plan clients: we track profile views, call clicks, direction requests, and Map Pack position monthly. We publish 4 posts per month, respond to reviews, monitor Q&A, and make algorithm-driven adjustments as Google updates its local ranking signals. You receive a plain-language report showing what moved and what's next.",
    deliverables: [
      "Monthly ranking report",
      "4 posts/month",
      "Review response",
      "Competitor monitoring",
    ],
  },
];

const results = [
  {
    biz: "HVAC Contractor",
    loc: "New Castle County, Delaware",
    metrics: [
      { label: "Profile Views / Mo", before: "340", after: "1,240" },
      { label: "Call Clicks / Mo", before: "18", after: "74" },
      { label: "Map Pack Position", before: "Not ranked", after: "#1" },
      { label: "Reviews", before: "14 reviews", after: "91 reviews" },
    ],
    quote:
      "We went from invisible to getting 3–4 calls a day from Google Maps alone. The investment paid for itself in the first week.",
  },
  {
    biz: "Dental Practice",
    loc: "Dover, Delaware",
    metrics: [
      { label: "Profile Views / Mo", before: "220", after: "890" },
      { label: "New Patient Inquiries", before: "4/mo", after: "22/mo" },
      { label: "Map Pack Position", before: "#7 (not visible)", after: "#2" },
      { label: "Reviews", before: "27 reviews", after: "86 reviews" },
    ],
    quote:
      "We'd been open 8 years and invisible on Google Maps. Two months after Zonic optimized our profile, new patient inquiries from Google were up 5×.",
  },
];

const pricing = [
  {
    name: "One-Time",
    price: "397",
    period: " once",
    desc: "Full GBP optimization done right, one time. Best for businesses who want to fix the foundation themselves.",
    features: [
      { text: "Complete 40-point GBP audit", dim: false },
      { text: "Category & keyword optimization", dim: false },
      { text: "Full business description rewrite", dim: false },
      { text: "Photo optimization guidance", dim: false },
      { text: "Services & attributes setup", dim: false },
      { text: "Q&A seeding (8 questions)", dim: false },
      { text: "First month Google Posts (4 posts)", dim: false },
      { text: "Competitor comparison report", dim: false },
      { text: "Ongoing monthly management", dim: true },
      { text: "Review generation system", dim: true },
    ],
    btn: "Start One-Time Optimization",
    note: "Delivered in 5–7 business days",
    featured: false,
  },
  {
    name: "Optimize + Manage",
    price: "197",
    period: "/mo",
    desc: "Full optimization plus ongoing management. For businesses serious about holding a top-3 Map Pack position month after month.",
    features: [
      { text: "Everything in One-Time", dim: false },
      { text: "4 Google Posts per month", dim: false },
      { text: "Review generation system setup", dim: false },
      { text: "Monthly review response management", dim: false },
      { text: "Monthly performance report", dim: false },
      { text: "Ongoing keyword & attribute updates", dim: false },
      { text: "Competitor monitoring & alerts", dim: false },
      { text: "Q&A monitoring & updates", dim: false },
    ],
    btn: "Start Optimize + Manage",
    note: "No long-term contract · Cancel anytime",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Multi-Location",
    price: "147",
    period: "/loc/mo",
    desc: "For agencies, franchises, and businesses managing 3+ locations. Volume pricing with white-label reporting available.",
    features: [
      { text: "Everything in Optimize + Manage", dim: false },
      { text: "Volume pricing (3+ locations)", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "Priority support & response", dim: false },
      { text: "White-label reporting available", dim: false },
      { text: "Cross-location competitor analysis", dim: false },
      { text: "Unified dashboard access", dim: false },
      { text: "Agency partner program", dim: false },
    ],
    btn: "Get Multi-Location Quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const compareRows = [
  {
    factor: "Industry-specific strategy",
    zonic: { icon: "✓", iconClass: "lo-chk", text: "Built for your vertical" },
    diy: { icon: "~", iconClass: "lo-prt", text: "Generic Google guides" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "One template for all" },
  },
  {
    factor: "Competitor analysis included",
    zonic: { icon: "✓", iconClass: "lo-chk", text: "Your top 3 mapped" },
    diy: { icon: "✗", iconClass: "lo-crs", text: "No structured analysis" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "Not included" },
  },
  {
    factor: "Keyword research for your market",
    zonic: { icon: "✓", iconClass: "lo-chk", text: "Local + service-specific" },
    diy: { icon: "~", iconClass: "lo-prt", text: "Manual guesswork" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "Generic keywords" },
  },
  {
    factor: "Ongoing post management",
    zonic: { icon: "✓", iconClass: "lo-chk", text: "4/mo, hyperlocal content" },
    diy: { icon: "~", iconClass: "lo-prt", text: "If you remember to do it" },
    cheap: { icon: "~", iconClass: "lo-prt", text: "Generic filler posts" },
  },
  {
    factor: "Review generation system",
    zonic: { icon: "✓", iconClass: "lo-chk", text: "Timed 3-touch sequence" },
    diy: { icon: "~", iconClass: "lo-prt", text: "Manual, inconsistent" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "Not included" },
  },
  {
    factor: "Monthly ranking reports",
    zonic: {
      icon: "✓",
      iconClass: "lo-chk",
      text: "Calls, views, map position",
    },
    diy: { icon: "✗", iconClass: "lo-crs", text: "No structured reporting" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "No reporting" },
  },
  {
    factor: "GBP reinstatement if suspended",
    zonic: {
      icon: "✓",
      iconClass: "lo-chk",
      text: "Full reinstatement service",
    },
    diy: { icon: "✗", iconClass: "lo-crs", text: "You're on your own" },
    cheap: { icon: "✗", iconClass: "lo-crs", text: "Not offered" },
  },
];

const faqs = [
  {
    q: "How long before I see results from GBP optimization?",
    a: "Most clients see measurable improvements in profile views and call clicks within 2–4 weeks of full optimization. Map Pack ranking improvements for moderately competitive keywords typically appear within 4–8 weeks. The longer your profile stays optimized and actively managed, the stronger it performs — local SEO compounds over time rather than plateauing.",
  },
  {
    q: "My profile is already set up. Do I actually need optimization?",
    a: "Almost certainly yes. \"Set up\" and \"optimized\" are very different. In our audits of Delaware and Mid-Atlantic businesses, the most common profile has one category (when 4–5 apply), a generic description with no keywords, under 15 photos, zero Q&A answers, and no post activity in 90+ days. Each of those gaps is costing you ranking position every day.",
  },
  {
    q: "What's the difference between your One-Time and Optimize + Manage plans?",
    a: "The One-Time plan gets your profile fully optimized with a strong foundation — it's ideal if you want us to fix everything and then manage posts and reviews yourself. The Optimize + Manage plan adds ongoing monthly posts (the activity signal Google measures), review generation management, and monthly ranking reports. If you want to hold a top-3 position rather than just improve from your current ranking, ongoing management is necessary because competitors are actively managing their profiles too.",
  },
  {
    q: "What if my Google Business Profile gets suspended?",
    aNode: (
      <>
        GBP suspensions are increasingly common, especially for service-area
        businesses, recently verified profiles, and profiles that have had
        multiple edits in a short period. If your profile is suspended, we offer
        a{" "}
        <Link href="/services/gmb-reinstatement-help">
          dedicated GBP reinstatement service
        </Link>
        . For active Optimize + Manage clients, suspension monitoring and
        reinstatement support is included.
      </>
    ),
  },
  {
    q: "Do you specialize in specific industries?",
    a: "Yes — and this matters. Optimizing a dental practice GBP is fundamentally different from optimizing a roofing contractor or a law firm. The category structures, keyword targets, photo types, and post content differ significantly. We've built industry-specific optimization systems for HVAC, roofing, pest control, plumbing, dental, legal, real estate, and home services. Our strategy is always tailored to your specific vertical and local market.",
  },
  {
    q: "Is there a long-term contract for the monthly management plan?",
    a: "No. Our Optimize + Manage plan is month-to-month with no lock-in contract. We earn your continued business by showing measurable results in your monthly ranking report. If you're not seeing improvement in profile views, call clicks, and Map Pack position, you can cancel. We've never had a client leave because results weren't there — but the option is yours.",
  },
];

function Page() {
  return (
    <>
      <Script
        id="lo-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div id="lo-top" className="lo-page">
        {/* NAV */}
        <nav className="lo-nav">
          <Link href="/" className="lo-nav-logo">
            Z<span>O</span>NIC MEDIA
          </Link>
          <ul className="lo-nav-links">
            <li>
              <Link href="/services/local-seo-for-home-services">Local SEO</Link>
            </li>
            <li>
              <Link href="/services/google-ads">Google Ads</Link>
            </li>
            <li>
              <Link href="/services/gmb-reinstatement-help">
                GBP Reinstatement
              </Link>
            </li>
            <li>
              <Link href="/services/gmb-verification-help">
                GBP Verification
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className="lo-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="lo-nav-phone">
              📞 {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#lo-audit-form" className="lo-nav-cta">
              Get Free GBP Audit
            </HashScrollLink>
          </div>
        </nav>

        {/* HERO */}
        <section className="lo-hero">
          <div className="lo-hero-body">
            <div>
              <div className="lo-hero-eyebrow">
                📍 Google Business Profile Optimization
              </div>
              <h1>
                YOUR GBP IS LIVE.{" "}
                <span className="lo-accent">IS IT</span>{" "}
                <span className="lo-outline">RANKING?</span>
              </h1>
              <p className="lo-hero-sub">
                Having a Google Business Profile and having one that ranks in
                the Map Pack, generates calls, and wins customers are{" "}
                <strong>two completely different things.</strong> Zonic Media
                fixes the gap.
              </p>
              <div className="lo-hero-actions">
                <HashScrollLink
                  href="#lo-audit-form"
                  className="lo-btn-primary"
                >
                  Get My Free GBP Audit
                </HashScrollLink>
                <Link href={SITE_CONTACT.phoneHref} className="lo-btn-outline">
                  📞 Call {SITE_CONTACT.phoneDisplay}
                </Link>
              </div>
              <div className="lo-hero-trust">
                <div className="lo-ht-item">
                  <div className="lo-ht-dot"></div>1,500+ Profiles Optimized
                </div>
                <div className="lo-ht-item">
                  <div className="lo-ht-dot"></div>48-hr Turnaround
                </div>
                <div className="lo-ht-item">
                  <div className="lo-ht-dot"></div>Mid-Atlantic Specialists
                </div>
              </div>
            </div>

            <div className="lo-gbp-mockup">
              <p className="lo-mockup-label">
                Live Map Pack — Optimized Result
              </p>
              <div className="lo-map-container">
                <div className="lo-map-bar">
                  <div className="lo-map-bar-input">
                    <span className="lo-map-search-icon">🔍</span>
                    <span>HVAC repair near me</span>
                  </div>
                </div>
                <div className="lo-map-pack">
                  <div className="lo-mp-header">
                    <span>Map Pack Results</span>
                    <span className="lo-mp-badge lo-mp-badge-ok">
                      Optimized ✓
                    </span>
                  </div>
                  <div className="lo-mp-result lo-featured">
                    <div className="lo-mp-rank lo-r1">1</div>
                    <div className="lo-mp-info">
                      <div className="lo-mp-name">Your Business ✦</div>
                      <div className="lo-mp-stars">
                        ★★★★★ <span>4.8 (94 reviews)</span>
                      </div>
                      <div className="lo-mp-cat">
                        HVAC Contractor · Emergency · Open now
                      </div>
                    </div>
                  </div>
                  <div className="lo-mp-result">
                    <div className="lo-mp-rank lo-r2">2</div>
                    <div className="lo-mp-info">
                      <div className="lo-mp-name lo-dim">
                        Competitor HVAC Co.
                      </div>
                      <div className="lo-mp-stars">
                        ★★★★★ <span>4.9 (142 reviews)</span>
                      </div>
                      <div className="lo-mp-cat">HVAC Contractor</div>
                    </div>
                  </div>
                  <div className="lo-mp-result">
                    <div className="lo-mp-rank lo-r3">3</div>
                    <div className="lo-mp-info">
                      <div className="lo-mp-name lo-dim">
                        ABC Heating &amp; Cooling
                      </div>
                      <div className="lo-mp-stars">
                        ★★★★☆ <span>4.6 (88 reviews)</span>
                      </div>
                      <div className="lo-mp-cat">Air Conditioning Repair</div>
                    </div>
                  </div>
                </div>
                <div className="lo-metrics-strip">
                  <div className="lo-ms-item">
                    <div className="lo-ms-num">64</div>
                    <div className="lo-ms-label">Profile Photos</div>
                  </div>
                  <div className="lo-ms-item">
                    <div className="lo-ms-num">94</div>
                    <div className="lo-ms-label">Reviews</div>
                  </div>
                  <div className="lo-ms-item">
                    <div className="lo-ms-num">4.8★</div>
                    <div className="lo-ms-label">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="lo-ticker-wrap">
          <div className="lo-ticker-track">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span key={i} className="lo-ticker-item">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* TWO-COL CONTENT */}
        <div className="lo-page-outer">
          <div className="lo-row">
            {/* Left content (col-8) */}
            <div className="lo-content-col">
              {/* Audit findings */}
              <section className="lo-section">
                <div className="lo-section-label">The Real Diagnosis</div>
                <h2>
                  6 Reasons Your GBP Isn&apos;t{" "}
                  <span className="lo-accent">Generating Calls</span>
                </h2>
                <p className="lo-section-sub">
                  Most Google Business Profiles don&apos;t fail because
                  they&apos;re inactive. They fail because of specific, fixable
                  gaps that silently cost business owners leads every single
                  day.
                </p>
                <div className="lo-audit-grid">
                  {auditCards.map((c, i) => (
                    <div key={i} className="lo-audit-card">
                      <div className="lo-ac-icon">{c.icon}</div>
                      <div className="lo-ac-title">{c.title}</div>
                      <p className="lo-ac-body">{c.body}</p>
                      <div className="lo-ac-consequence">{c.consequence}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* What we optimize */}
              <section className="lo-section lo-mid">
                <div className="lo-section-label">What Gets Optimized</div>
                <h2>
                  Every Ranking Signal.{" "}
                  <span className="lo-accent">Nothing Left Out.</span>
                </h2>
                <p className="lo-section-sub">
                  We optimize every element Google scores — not just the
                  visible ones. Here&apos;s exactly what changes in your
                  profile.
                </p>
                <div className="lo-optimize-grid">
                  {optimizeCards.map((c, i) => (
                    <div key={i} className="lo-opt-card">
                      <div className="lo-opt-icon">{c.icon}</div>
                      <div className="lo-opt-title">{c.title}</div>
                      <p className="lo-opt-body">{c.body}</p>
                      <span className="lo-opt-impact">{c.impact}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section className="lo-section">
                <div className="lo-section-label">How It Works</div>
                <h2>
                  Fully Optimized in{" "}
                  <span className="lo-accent">Under 7 Days</span>
                </h2>
                <p className="lo-section-sub">
                  A structured four-phase process with specific deliverables and
                  timelines — not vague &quot;ongoing work&quot; with no
                  milestones.
                </p>
                <div className="lo-process-list">
                  {processItems.map((p, i) => (
                    <div key={i} className="lo-process-item">
                      <div className="lo-pi-num">{p.num}</div>
                      <div>
                        <div className="lo-pi-timeline">{p.timeline}</div>
                        <div className="lo-pi-title">{p.title}</div>
                        <p className="lo-pi-body">{p.body}</p>
                        <div className="lo-pi-deliverables">
                          {p.deliverables.map((d, j) => (
                            <span key={j} className="lo-pi-del">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section className="lo-section lo-mid">
                <div className="lo-section-label">Real Results</div>
                <h2>
                  Before &amp; After:{" "}
                  <span className="lo-accent">What Changes</span>
                </h2>
                <p className="lo-section-sub">
                  Measured outcomes from real Mid-Atlantic businesses — not
                  generic case study language.
                </p>
                <div className="lo-results-grid">
                  {results.map((r, i) => (
                    <div key={i} className="lo-result-card">
                      <div className="lo-rc-biz">{r.biz}</div>
                      <div className="lo-rc-loc">{r.loc}</div>
                      <div className="lo-rc-metrics">
                        {r.metrics.map((m, j) => (
                          <div key={j} className="lo-rcm-item">
                            <div className="lo-rcm-label">{m.label}</div>
                            <div className="lo-rcm-before">{m.before}</div>
                            <div className="lo-rcm-after">{m.after}</div>
                          </div>
                        ))}
                      </div>
                      <p className="lo-rc-quote">&ldquo;{r.quote}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section className="lo-section">
                <div className="lo-section-label">Transparent Pricing</div>
                <h2>
                  Simple Plans.{" "}
                  <span className="lo-accent">Real Prices.</span>
                </h2>
                <p className="lo-section-sub">
                  No &quot;contact us for pricing.&quot; No hidden setup fees.
                  Three clear options depending on whether you need a one-time
                  fix or ongoing Map Pack dominance.
                </p>
                <div className="lo-pricing-grid">
                  {pricing.map((p, i) => (
                    <div
                      key={i}
                      className={`lo-price-card ${
                        p.featured ? "lo-featured" : ""
                      }`}
                    >
                      {p.featured && p.badge ? (
                        <div className="lo-pc-badge">{p.badge}</div>
                      ) : null}
                      <div className="lo-pc-name">{p.name}</div>
                      <div className="lo-pc-price">
                        <sup>$</sup>
                        {p.price}
                        <span className="lo-pc-period">{p.period}</span>
                      </div>
                      <p className="lo-pc-desc">{p.desc}</p>
                      <ul className="lo-pc-features">
                        {p.features.map((f, j) => (
                          <li key={j} className={f.dim ? "lo-dim" : ""}>
                            {f.text}
                          </li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#lo-audit-form"
                        className="lo-pc-cta"
                      >
                        {p.btn}
                      </HashScrollLink>
                      <p className="lo-pc-note">{p.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Comparison */}
              <section className="lo-section lo-mid">
                <div className="lo-section-label">Why Zonic Media</div>
                <h2>
                  Zonic vs. DIY vs.{" "}
                  <span className="lo-accent">Cheap Freelancer</span>
                </h2>
                <p className="lo-section-sub">
                  Three realistic options for GBP optimization. Here&apos;s how
                  they actually compare across the factors that determine
                  whether your profile ranks.
                </p>
                <div className="lo-compare-wrap">
                  <table className="lo-compare-table">
                    <thead>
                      <tr>
                        <th style={{ width: "30%" }}>What matters</th>
                        <th className="lo-hl" style={{ width: "23%" }}>
                          🚀 Zonic Media
                        </th>
                        <th style={{ width: "23%" }}>DIY Yourself</th>
                        <th style={{ width: "23%" }}>
                          Cheap Freelancer
                          <br />
                          ($49 Fiverr)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.factor}</td>
                          <td className="lo-hl">
                            <span className={row.zonic.iconClass}>
                              {row.zonic.icon}
                            </span>{" "}
                            {row.zonic.text}
                          </td>
                          <td>
                            <span className={row.diy.iconClass}>
                              {row.diy.icon}
                            </span>{" "}
                            {row.diy.text}
                          </td>
                          <td>
                            <span className={row.cheap.iconClass}>
                              {row.cheap.icon}
                            </span>{" "}
                            {row.cheap.text}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Testimonials — Google reviews widget */}
              <section className="lo-section">
                <div className="lo-section-label">Client Results</div>
                <h2>
                  What Happens When{" "}
                  <span className="lo-accent">
                    Your GBP Actually Works
                  </span>
                </h2>
                <LenisIframeGuard
                  className="lo-reviews-widget"
                  widgetScriptSrc="https://cdn.trustindex.io/loader.js?de967c372ebd85751c3639b52fa"
                />
              </section>

              {/* FAQ */}
              <section className="lo-section">
                <div className="lo-section-label">Common Questions</div>
                <h2>
                  Everything You Need{" "}
                  <span className="lo-accent">To Know First</span>
                </h2>
                <p className="lo-section-sub">
                  Specific answers — not the generic FAQ that applies to every
                  agency on the internet.
                </p>
                <div className="lo-faq-list">
                  {faqs.map((f, i) => (
                    <div key={i} className="lo-faq-item">
                      <p className="lo-faq-q">{f.q}</p>
                      <div className="lo-faq-a">{f.aNode ?? f.a}</div>
                    </div>
                  ))}
                </div>
                <Script
                  id="lo-faq-schema"
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      url: "https://zonicllc.com/local-seo-google-business-optimization",
                      mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: f.a ?? "",
                        },
                      })),
                    }),
                  }}
                />
              </section>

              {/* Mobile-only inline form */}
              <div
                className="lo-mob-form d-block d-lg-none"
                id="lo-audit-form"
              >
                <div className="lo-form-card">
                  <LeadContactForm
                    leadFormTitle={formHead.leadFormTitle}
                    leadCallText={formHead.leadCallText}
                    submitButtonText={formHead.submitButtonText}
                  />
                </div>
              </div>
            </div>

            {/* Right sticky form (col-4) */}
            <div className="lo-form-col d-none d-lg-block">
              <div className="lo-sticky-form">
                <div className="lo-form-card">
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

        {/* CTA BAND */}
        <div className="lo-cta-band">
          <div className="lo-cta-band-inner">
            <div className="lo-mono-label">
              Every day without optimization = leads going to your competitors
            </div>
            <h2>
              YOUR COMPETITORS
              <br />
              <span className="lo-outline">ARE RANKED.</span>
            </h2>
            <p>
              Right now, customers in your area are searching for exactly what
              you offer. The businesses in the top-3 Map Pack are capturing
              those leads. Is yours one of them?
            </p>
            <div className="lo-cta-band-actions">
              <HashScrollLink href="#lo-audit-form" className="lo-btn-dark">
                Get My Free GBP Audit
              </HashScrollLink>
              <Link
                href={SITE_CONTACT.phoneHref}
                className="lo-btn-dark-outline"
              >
                📞 Call {SITE_CONTACT.phoneDisplay}
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="lo-footer">
          <div className="lo-footer-top">
            <div className="lo-footer-brand">
              <div className="lo-footer-brand-name">
                Z<span>O</span>NIC MEDIA
              </div>
              <p>
                Delaware&apos;s GBP optimization and local SEO specialists for
                home services, contractors, dental, and local businesses across
                the Mid-Atlantic.
              </p>
              <Link href={SITE_CONTACT.phoneHref} className="lo-footer-phone">
                {SITE_CONTACT.phoneDisplay}
              </Link>
            </div>
            <div className="lo-footer-col">
              <h4>GBP Services</h4>
              <ul>
                <li>
                  <Link href="/services/gmb-optimization">GBP Optimization</Link>
                </li>
                <li>
                  <Link href="/services/gmb-reinstatement-help">
                    GBP Reinstatement
                  </Link>
                </li>
                <li>
                  <Link href="/services/gmb-verification-help">
                    GBP Verification
                  </Link>
                </li>
                <li>
                  <Link href="/services/local-seo-for-home-services">
                    Local SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/google-ads">Google Ads</Link>
                </li>
              </ul>
            </div>
            <div className="lo-footer-col">
              <h4>Industries</h4>
              <ul>
                <li>
                  <Link href="/services/industry/local-seo-services-for-hvac">
                    HVAC
                  </Link>
                </li>
                <li>
                  <Link href="/services/industry/local-seo-for-roofing-companies">
                    Roofing
                  </Link>
                </li>
                <li>
                  <Link href="/services/industry/pest-control">
                    Pest Control
                  </Link>
                </li>
                <li>
                  <Link href="/services/industry/plumber">Plumbing</Link>
                </li>
                <li>
                  <Link href="/services/industry/dental-seo-services">
                    Dental
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lo-footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href="/about">About Zonic Media</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/services/delaware/digital-marketing">
                    Delaware Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lo-footer-bottom">
            <span>
              © 2026 Zonic Media LLC · 8 The Green, STE B, Dover, DE 19901
            </span>
            <div className="lo-footer-socials">
              <a
                href="https://www.linkedin.com/company/zonic-media/"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.facebook.com/zonicmediallc/"
                title="Facebook"
              >
                f
              </a>
              <a href="https://www.instagram.com/zonicmedia" title="Instagram">
                ig
              </a>
              <a
                href="https://www.youtube.com/@ZonicMediaDelware"
                title="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
