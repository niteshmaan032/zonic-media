import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/gbpVerf.css";

import GbpVerificationLeadForm from "@/app/components/GbpVerificationLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
} from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title:
    "Google Business Profile Verification Help | Fix GBP Verification Fast | Zonic Media",
  description:
    "Stuck in a GBP verification loop? Video rejected? Postcard expired? Zonic Media fixes every type of GBP verification failure — SABs, live video calls, verification loops — in 5–7 days. Money-back guarantee.",
  alternates: { canonical: "/google-business-profile-verification-help-2026" },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "GBP Verification Help",
    url: "/google-business-profile-verification-help-2026",
  },
]);

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/google-business-profile-verification-help-2026",
  areaServed: { type: "Country", name: "United States" },
});

const insightCards = [
  {
    title: "AI Overviews now exclude unverified GBPs",
    badge: "New 2026",
    body: "Google's AI-generated answers — appearing above all organic results — pull exclusively from verified, active profiles. Unverified businesses are invisible not just in Maps, but in the AI responses that 76%+ of searchers see before clicking anything.",
  },
  {
    title: "Video verification replaced postcard as the default",
    badge: "Since 2024",
    body: "Google overhauled verification after widespread fraud from fake business listings. Video is now mandatory for most new listings. Most DIY attempts fail because business owners don't know what Google specifically checks — and there are six required elements most people miss.",
  },
  {
    title: "Live video calls are a real method most guides don't cover",
    badge: "Underserved",
    body: "For certain accounts, Google schedules a live video call where a real agent walks through your location with you in real time. This is entirely different from recorded video verification and requires specific preparation that no competitor's guide adequately explains.",
  },
];

const diagCards = [
  {
    tag: "Video Rejected / Postcard Failed",
    tagClass: "gbv-fail",
    title: "Verification Attempt Failed",
    body: "Your video was rejected, your postcard expired, or the verification code didn't work. This is the most common scenario — and the most mishandled. Video rejections almost always come from one of six specific issues Google checks but doesn't tell you about. We know exactly which ones.",
  },
  {
    tag: "No Options Showing",
    tagClass: "gbv-pend",
    title: "Phone, Email or Video Unavailable",
    body: "Your GBP dashboard shows no verification options — or only methods you've already tried. This happens when Google flags the account, detects duplicate activity, or assigns a specific verification tier based on your business category. Fixable, but not through standard support channels.",
  },
  {
    tag: "Verified Then Revoked",
    tagClass: "gbv-loop",
    title: "The Verification Loop",
    body: "You pass verification, the profile goes live, then Google revokes it days later. Repeat. Most businesses immediately try to re-verify — which makes the underlying issue worse with every attempt. The loop has a root cause that must be fixed before any new submission is made.",
  },
  {
    tag: "No Physical Storefront",
    tagClass: "gbv-sab",
    title: "Service Area Business (SAB)",
    body: "Plumbers, roofers, HVAC, pest control, landscapers — businesses that serve customers at their location face a completely different verification path. Standard video guidance doesn't apply. We've built an SAB-specific process that has a very high first-submission success rate.",
  },
];

const diyReasons = [
  {
    num: "01",
    title: "The video wasn't one continuous take",
    body: "Google requires a single, uninterrupted recording. If the video was edited, paused, or assembled from multiple clips, it's automatically rejected — often with no explanation. Most business owners have no idea this is a hard requirement until after the rejection.",
  },
  {
    num: "02",
    title: "Business name doesn't match signage exactly",
    body: "Google's 2026 policy requires the name in your GBP to exactly match what appears on your physical signage, your website, and your legal registration. Any mismatch — an abbreviation, missing \"LLC,\" different DBA — triggers an automatic rejection that re-submission alone won't fix.",
  },
  {
    num: "03",
    title: "Video lacked the specific elements Google checks",
    body: "Google's reviewers check for: exterior shot with legible signage, interior showing business operation, proof of ownership (equipment, branded vehicles, certifications), and a live dashboard management action — all in one unbroken take. Missing any single element results in rejection.",
  },
  {
    num: "04",
    title: "SAB address was configured wrong before verifying",
    body: "Service area businesses that had a home address showing, set an incorrect service radius, or configured as a storefront instead of SAB before attempting verification will fail every time. Profile settings must be correct in a specific order before the verification attempt begins.",
  },
  {
    num: "05",
    title: "Multiple failed attempts triggered enhanced review",
    body: "Every failed verification attempt is logged. After 2–3 failures, Google's system flags the account for enhanced scrutiny — meaning every subsequent attempt is evaluated at a higher review standard. Submitting again without fixing the root cause makes each next attempt harder.",
  },
  {
    num: "06",
    title: "A hidden duplicate listing is blocking verification",
    body: "If an old GBP for the same business exists — from a previous owner, a former agency, or an auto-generated listing — Google detects the conflict and won't verify the new profile until the duplicate is resolved. This conflict often exists without the current owner knowing about it.",
  },
];

const methodCards = [
  {
    badge: "Default 2024–2026",
    badgeClass: "gbv-default",
    icon: "🎥",
    title: "Video Verification",
    time: "48–72hr review · Highest pass rate when done correctly",
    body: "Google's primary verification method since 2024. A real reviewer manually checks every submission. One missing element means rejection — often with no specific reason given. Most rejections come from one of these five requirements:",
    req: [
      "Exterior shot showing legible signage — in one unbroken take",
      "Interior shots showing the business operating",
      "Proof of ownership: branded vehicles, certifications, equipment",
      "A live dashboard action showing you control the account",
      "Video must be one single, unedited, continuous clip — no cuts",
    ],
  },
  {
    badge: "New — 2025",
    badgeClass: "gbv-newm",
    icon: "📹",
    title: "Live Video Call",
    time: "Scheduled by Google · For complex or flagged accounts",
    body: "A real Google agent schedules a live call and asks you to walk through your business in real time, answering questions as you go. Almost no agency prepares clients for this — we do. The agent may ask for physical documents on the spot:",
    req: [
      "Scheduled by Google — you receive a notification, not a request option",
      "Agent may ask for lease, business license, or utility bill",
      "Walk-through of all video elements but in real time, on demand",
      "We provide a pre-call briefing covering every likely question",
    ],
  },
  {
    badge: "Traditional Method",
    badgeClass: "gbv-slow",
    icon: "📬",
    title: "Postcard by Mail",
    time: "5–14 days · Still available for some categories",
    body: "The original verification method — still available for certain business types but no longer the default. Most common failure points are incorrect addresses, expired codes (valid 30 days), and categories that have moved to video-only verification.",
    req: [
      "Address must exactly match what's registered with Google",
      "Verification code expires after 30 days — time critical",
      "After 3 failed postcards, most categories move to video-only",
      "We can often unlock alternative methods to bypass postcard entirely",
    ],
  },
  {
    badge: "Selective Availability",
    badgeClass: "gbv-rare",
    icon: "📱",
    title: "Phone or Email",
    time: "Instant when available · Not offered to all business types",
    body: "The fastest method — available only to certain established business categories that Google can verify through other signals. When it's not showing in your dashboard, there are specific reasons and specific ways to unlock it.",
    req: [
      "Not available for new businesses, SABs, or accounts with recent flags",
      "Phone/email must exactly match what's listed in your GBP profile",
      "We know which account factors affect eligibility and how to fix them",
      "Often available after video verification as a re-verification method",
    ],
  },
];

const sabItems = [
  {
    icon: "📍",
    title: "Address hidden before verification attempt",
    body: "If you hide your address before verifying, Google may not offer video verification at all. The profile configuration sequence matters — settings must be done in a specific order before any verification attempt.",
  },
  {
    icon: "🎥",
    title: "No storefront to film in the video",
    body: "SAB video is accepted with branded van or truck, a garage with equipment, tools with visible business name, and live GBP dashboard access. We build the exact shot list for your specific trade.",
  },
  {
    icon: "🗺️",
    title: "Service area configuration errors",
    body: "An incorrectly set service area — too large, too small, or wrong level — causes verification failures and ranking problems that persist even after the profile eventually gets verified.",
  },
  {
    icon: "📄",
    title: "Document requirements for SABs",
    body: "SABs often need: state contractor license, general liability insurance certificate, and business registration matching the GBP name exactly. We prepare the full document package before any attempt.",
  },
  {
    icon: "🔁",
    title: "Re-verification after service area edits",
    body: "Editing your service area after verification can trigger a new verification request. We establish the correct configuration upfront to prevent this cycle from starting.",
  },
];

const loopSteps = [
  { icon: "✅", title: "Verified", body: "Profile goes live on Google Maps", bad: true },
  { icon: "⏱️", title: "Days Later", body: "Automated system detects underlying issue", bad: true },
  { icon: "🚫", title: "Revoked", body: "Verification removed, no clear explanation", bad: true },
  { icon: "🔄", title: "Re-verify", body: "Resubmit without fixing root cause — flag level increases", bad: true },
  { icon: "🔍", title: "Diagnosed", body: "Zonic finds the exact trigger — duplicate, NAP mismatch, category conflict", bad: false },
  { icon: "🛠️", title: "Fixed", body: "Root cause fully resolved before new attempt", bad: false },
  { icon: "✦", title: "Stable", body: "Verified permanently — trigger no longer exists", bad: false },
];

const loopRoots = [
  "A duplicate GBP from a previous owner, old agency, or auto-generated listing creating a persistent conflict",
  "NAP inconsistency — different business name, phone, or address across your website, GBP, and other directories",
  "Business category automatically changed by Google to one that doesn't support the verification type attempted",
];

const processSteps = [
  {
    num: "01",
    time: "Day 1 — Same Day",
    title: "Free Verification Diagnosis",
    body: "We review your GBP profile, account history, verification attempt history, existing duplicate listings, NAP consistency across the web, and business category configuration. You receive a specific diagnosis — the exact issue, the verification type classification, and a realistic timeline — before you pay anything.",
    tags: ["Profile analysis", "Duplicate audit", "NAP consistency check", "Attempt history review", "Issue classification"],
  },
  {
    num: "02",
    time: "Days 1–2",
    title: "Root Cause Resolution",
    body: "Before any verification attempt is made, we fix what's broken: resolving duplicate listings, correcting NAP inconsistencies, aligning your business name to Google's 2026 policy requirements, and configuring your profile correctly for the specific verification method that will be used. This is the step that most DIY attempts skip entirely.",
    tags: ["Duplicate resolution", "NAP correction", "Profile configuration", "Category audit"],
  },
  {
    num: "03",
    time: "Days 2–7",
    title: "Guided Verification",
    body: "We walk you through the exact verification method appropriate for your case. For video: a precise shot-by-shot checklist. For live video call: a full pre-call briefing covering every question a Google agent is likely to ask. We stay involved and follow up actively until your profile is verified and live.",
    tags: ["Video shot checklist", "Live call prep", "Document package", "Google liaison", "Active follow-up"],
  },
  {
    num: "04",
    time: "Post-Verification",
    title: "Optimization & Prevention",
    body: "A verified profile with no optimization is a missed opportunity. We optimize your newly verified GBP — categories, keywords, photos, services, attributes, and posts — so you don't just go live, you go live ranking. We also implement the practices that prevent future verification issues, including the service area configuration that stops recurring re-verification requests.",
    tags: ["Full GBP optimization", "Category fix", "Photo strategy", "Prevention setup", "30-day monitoring"],
  },
];

const resultCards = [
  {
    biz: "HVAC Contractor",
    loc: "New Castle County, Delaware",
    metrics: [
      { l: "Verification Attempts", b: "3 failed (DIY)", a: "Verified ✓" },
      { l: "Time to Verify", b: "3 weeks stuck", a: "4 days" },
      { l: "Monthly Calls", b: "0 (unverified)", a: "74/mo" },
      { l: "Map Pack", b: "Not listed", a: "#1" },
    ],
    quote: "We spent three weeks trying ourselves. Zonic diagnosed the problem in two hours — a duplicate listing from the previous business at our address. Once removed, verified in four days. Now the phone doesn't stop.",
  },
  {
    biz: "Plumbing Contractor",
    loc: "Dover, Delaware",
    metrics: [
      { l: "Business Type", b: "SAB, no storefront", a: "Verified ✓" },
      { l: "Time to Verify", b: "Stuck 5 weeks", a: "5 days" },
      { l: "Monthly Calls", b: "0 (unverified)", a: "58/mo" },
      { l: "Cost Per Lead", b: "$85 (Angi)", a: "$12" },
    ],
    quote: "I operate out of my home — no storefront, no signage. The standard video advice was useless. Zonic built a shot list specific to SABs using my van and tools. Verified first time, five days total.",
  },
];

const pricing = [
  {
    name: "Verification Fix",
    price: "247",
    desc: "We handle the full process — diagnosis, root cause fix, guided verification, Google liaison.",
    features: [
      { text: "Full verification diagnosis", dim: false },
      { text: "Root cause identification & fix", dim: false },
      { text: "Duplicate listing audit & resolution", dim: false },
      { text: "Custom verification strategy", dim: false },
      { text: "Video shot-by-shot checklist", dim: false },
      { text: "Live call prep (if required)", dim: false },
      { text: "Google liaison & active follow-up", dim: false },
      { text: "Profile health check post-verification", dim: false },
      { text: "Full GBP optimization", dim: true },
      { text: "Prevention setup & monitoring", dim: true },
    ],
    btn: "Start Verification Fix",
    note: "Money-back if not verified",
    featured: false,
  },
  {
    name: "Verify + Optimize",
    price: "447",
    desc: "Get verified and come back ranking — optimized to appear in AI Overviews, Maps, and local search.",
    features: [
      { text: "Everything in Verification Fix", dim: false },
      { text: "Full GBP profile optimization", dim: false },
      { text: "Category & keyword optimization", dim: false },
      { text: "Photo strategy & first upload batch", dim: false },
      { text: "Business description rewrite", dim: false },
      { text: "Services & attributes buildout", dim: false },
      { text: "Q&A seeding (8 questions)", dim: false },
      { text: "First month Google Posts (4 posts)", dim: false },
      { text: "Verification loop prevention setup", dim: false },
      { text: "30-day post-verification monitoring", dim: false },
    ],
    btn: "Start Verify + Optimize",
    note: "Money-back if not verified",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Agency / Multi-Location",
    price: "177",
    priceSuffix: "/loc",
    desc: "For agencies and businesses managing 3+ unverified profiles. Volume pricing with white-label reporting.",
    features: [
      { text: "Everything in Verify + Optimize", dim: false },
      { text: "Bulk verification strategy", dim: false },
      { text: "Cross-location duplicate audit", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "Priority support & fast response", dim: false },
      { text: "White-label reporting available", dim: false },
      { text: "Agency partner program access", dim: false },
      { text: "SAB strategy for contractor clients", dim: false },
    ],
    btn: "Get Agency Quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const compareRows = [
  { what: "Root cause diagnosed before attempt", zonic: ["✓", "Always first"], diy: ["✗", "Submitted blind"], free: ["~", "Sometimes"] },
  { what: "Duplicate listing audit included", zonic: ["✓", "Every case"], diy: ["✗", "Not done"], free: ["✗", "Rarely included"] },
  { what: "SAB-specific verification strategy", zonic: ["✓", "Built for contractors"], diy: ["✗", "Wrong guidance"], free: ["~", "Varies widely"] },
  { what: "Live video call preparation", zonic: ["✓", "Full briefing included"], diy: ["✗", "No guidance"], free: ["✗", "Not offered"] },
  { what: "Re-submission if first attempt fails", zonic: ["✓", "Included in service"], diy: ["~", "Try manually"], free: ["~", "Often extra cost"] },
  { what: "Post-verification optimization", zonic: ["✓", "Included in Fix+Optimize"], diy: ["✗", "Not done"], free: ["✗", "Separate service"] },
  { what: "Money-back if verification fails", zonic: ["✓", "Full refund"], diy: ["✗", "No refund"], free: ["✗", "Rarely offered"] },
];

const guarantees = [
  {
    icon: "💰",
    title: "Money-Back If We Fail",
    body: (
      <>
        If we cannot get your Google Business Profile verified and live on
        Google Maps, you pay nothing. No partial refunds. No fine print. Full
        refund if we don&apos;t deliver.{" "}
        <Link href="/legal/refund-policy">See our refund policy →</Link>
      </>
    ),
  },
  {
    icon: "🔍",
    title: "Root Cause — Not Band-Aid",
    body: "We never submit a verification attempt until the underlying cause of failure has been identified and fixed. This is why our verifications hold — and why businesses that tried elsewhere and failed come back verified the first time with us.",
  },
  {
    icon: "🎯",
    title: "Verified for Good",
    body: "Getting verified is only half the job. We implement the profile practices and service area configuration that prevent the verification loop from starting again. One engagement, permanent stability.",
  },
];

const testimonialBig = {
  text: "We spent three weeks trying to get our HVAC company verified on our own — failed video twice, tried postcard, it expired. Zonic diagnosed the issue in two hours: a duplicate listing from the previous business at our address was creating a conflict. Once removed, we were verified in four days. Now we're in the Map Pack in Wilmington and the phone hasn't stopped since.",
  initial: "K",
  name: "Kevin B.",
  biz: "HVAC Contractor · New Castle County, Delaware",
};

const testimonialsRow = [
  {
    text: "I'm a plumber operating out of my home — no storefront, no signage. Every standard guide was useless. Zonic built the exact shot list for service area businesses: my van, my tools, GBP dashboard access. Verified first time, five days total.",
    initial: "R",
    name: "Ray M.",
    biz: "Plumbing Contractor · Dover, Delaware",
  },
  {
    text: "Our restaurant kept getting verified then revoked three times in a row. Zonic found that Google had automatically changed our business category to one that doesn't support our verification type. Fixed once, stayed verified permanently.",
    initial: "M",
    name: "Maria S.",
    biz: "Restaurant Owner · Philadelphia, PA",
  },
];

const faqs = [
  {
    q: "Why is video verification now the default?",
    a: "Google overhauled its verification process in 2024 primarily because of a wave of fraudulent business listings that were gaming local Maps results to collect leads. Video verification significantly reduced this because it requires proof of an actual, operating business. The tradeoff is that legitimate businesses now face a more demanding process — which is why the self-verification failure rate is high.",
  },
  {
    q: "What exactly does Google check in a verification video?",
    a: "Google's reviewers check six elements: (1) a visible business name matching your GBP exactly; (2) an exterior shot establishing physical location; (3) interior or operational shots; (4) proof of ownership through equipment, certificates, or branded vehicles; (5) a live dashboard interaction showing you control the account; and (6) that the video is one unbroken, unedited take. Missing any one consistently results in rejection — often with no specific reason given.",
  },
  {
    q: "How is a live video call different from recorded video?",
    a: "A live video call is initiated by Google — you receive a notification, not an option to request it. A real Google agent calls you and asks you to walk through your location in real time. The agent may ask you to show documents, point to signage, or demonstrate live dashboard access on the spot. We provide a full pre-call briefing for every client who receives this type of request.",
  },
  {
    q: "Why does my verified profile keep getting revoked?",
    a: "Recurring revocation almost always traces to one of three root causes: a duplicate listing conflict, a NAP inconsistency (business name, address, or phone doesn't match exactly across your website and directories), or a business category that Google has flagged. Submitting a new attempt without resolving the root cause means revocation will happen again — usually faster each time.",
  },
  {
    q: "Can I get verified as a service area business with no address showing?",
    a: "Yes. SABs are verified without displaying a physical address — but the path is completely different from storefront businesses. The video must demonstrate legitimacy through branded vehicles, equipment, tools, insurance certificates, and business licenses rather than storefront footage. We've built a specific SAB process for home services and contractor businesses with a very high first-submission success rate.",
  },
  {
    q: "I already tried multiple times and keep failing — can you still help?",
    a: "Yes — this is the most common situation we handle. Please stop submitting and contact us before trying again. Each additional failed attempt makes the next harder. We review your complete attempt history, diagnose what went wrong, fix all identified issues, and then submit once with a complete, correct package. Our success rate on previously-rejected accounts is high precisely because we only submit when fully ready.",
  },
];

function Page() {
  return (
    <>
      <Script
        id="gbv-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="gbv-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <div id="gbv-top" className="gbv-page">
        {/* Minimal NAV */}
        <nav className="gbv-nav">
          <Link href="/" className="gbv-nav-logo">
            Z<span>O</span>NIC MEDIA
          </Link>
          <div className="gbv-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="gbv-nav-phone-link">
              📞 {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#gbv-case-form" className="gbv-nav-cta-btn">
              Start My Case
            </HashScrollLink>
          </div>
        </nav>

        <div className="gbv-main-wrapper">
          {/* Urgency strip */}
          <div className="gbv-urgency">
            <div className="gbv-urgency-live">
              <div className="gbv-urgency-dot"></div>
            </div>
            <span className="gbv-urgency-text">
              <strong>2026 Update:</strong> Unverified GBPs are now excluded
              from Google AI Overview results — invisible to a new class of
              high-intent searchers
            </span>
            <HashScrollLink href="#gbv-case-form" className="gbv-urgency-cta">
              Fix It Now →
            </HashScrollLink>
          </div>

          <div className="gbv-row">
            {/* Left: content (col-2/3) */}
            <div className="gbv-content-col">
              {/* HERO */}
              <section className="gbv-hero">
                <div className="gbv-hero-inner">
                  <div className="gbv-eyebrow">
                    📍 GBP Verification Specialists · 1,500+ Cases Resolved
                  </div>

                  <h1>
                    UNVERIFIED.
                    <br />
                    <span className="gbv-outline">INVISIBLE.</span>
                    <br />
                    <span className="gbv-accent">FIXED.</span>
                  </h1>

                  <p className="gbv-hero-sub">
                    Google&apos;s verification process became dramatically
                    harder in 2024 — video is the default, live video calls are
                    new, and AI search now ignores unverified profiles
                    entirely.{" "}
                    <strong>We know exactly how to navigate all of it.</strong>
                  </p>

                  <div className="gbv-ai-card">
                    <div className="gbv-ai-icon">🤖</div>
                    <div className="gbv-ai-body">
                      <strong>2026 AI Search Alert</strong>
                      <span>
                        Google AI Overviews — appearing above all organic
                        results — now pull exclusively from verified, active
                        GBPs. Unverified means invisible not just on Maps, but
                        in AI-generated answers your customers see first.
                      </span>
                    </div>
                  </div>

                  <div className="gbv-hero-ctas">
                    <Link
                      href={SITE_CONTACT.phoneHref}
                      className="gbv-cta-call"
                    >
                      <span className="gbv-call-icon">📞</span>
                      <span>
                        Call Now: {SITE_CONTACT.phoneDisplay}
                        <span className="gbv-call-sub">
                          Speak with a verification specialist immediately
                        </span>
                      </span>
                    </Link>
                    <HashScrollLink
                      href="#gbv-case-form"
                      className="gbv-cta-form-trigger"
                    >
                      Submit Your Case Online → Free same-day diagnosis
                    </HashScrollLink>
                  </div>

                  <div className="gbv-hero-trust">
                    <div className="gbv-ht">
                      <div className="gbv-ht-dot"></div>1,500+ profiles
                      verified
                    </div>
                    <div className="gbv-ht">
                      <div className="gbv-ht-dot"></div>99% success rate
                    </div>
                    <div className="gbv-ht">
                      <div className="gbv-ht-dot"></div>5–7 day avg. resolution
                    </div>
                    <div className="gbv-ht">
                      <div className="gbv-ht-dot"></div>Money-back if we fail
                    </div>
                  </div>
                </div>
              </section>

              {/* 2026 INSIGHT BAND */}
              <div className="gbv-insight">
                <div>
                  <div className="gbv-ib-year">2026</div>
                  <p className="gbv-ib-tagline">
                    What changed in GBP verification — and why your unverified
                    profile costs more than ever
                  </p>
                </div>
                <div className="gbv-ib-cards">
                  {insightCards.map((c, i) => (
                    <div key={i} className="gbv-ib-card">
                      <h4>
                        {c.title}{" "}
                        <span className="gbv-ib-badge">{c.badge}</span>
                      </h4>
                      <p>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IDENTIFY YOUR ISSUE */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Identify Your Situation</div>
                <h2 className="gbv-sec-h2">
                  Which Verification Problem Are You{" "}
                  <span className="gbv-accent">Stuck On?</span>
                </h2>
                <p className="gbv-sec-sub">
                  Find your exact situation below. Every verification type has
                  a different root cause and a different solution — treating
                  them the same is why DIY attempts fail repeatedly.
                </p>
                <div className="gbv-diag-grid">
                  {diagCards.map((c, i) => (
                    <div key={i} className="gbv-diag-card">
                      <div className={`gbv-dc-tag ${c.tagClass}`}>{c.tag}</div>
                      <div className="gbv-dc-title">{c.title}</div>
                      <div className="gbv-dc-body">{c.body}</div>
                      <HashScrollLink
                        href="#gbv-case-form"
                        className="gbv-dc-cta"
                      >
                        Start this case
                      </HashScrollLink>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHY DIY FAILS */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Why Self-Verification Fails</div>
                <h2 className="gbv-sec-h2">
                  The 6 Reasons Your{" "}
                  <span className="gbv-accent">DIY Attempt</span> Got Rejected
                </h2>
                <p className="gbv-sec-sub">
                  Most business owners try to verify themselves before calling
                  us. Here&apos;s exactly what goes wrong — information Google
                  doesn&apos;t tell you, but our specialists know from 1,500+
                  cases.
                </p>
                <div className="gbv-diy-grid">
                  {diyReasons.map((r, i) => (
                    <div key={i} className="gbv-diy-card">
                      <div className="gbv-diy-icon">✗</div>
                      <div className="gbv-diy-num">{r.num}</div>
                      <div className="gbv-diy-title">{r.title}</div>
                      <div className="gbv-diy-body">{r.body}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* VERIFICATION METHODS */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Every Method Explained</div>
                <h2 className="gbv-sec-h2">
                  Four Verification Methods — What{" "}
                  <span className="gbv-accent">Each Actually Requires</span>
                </h2>
                <p className="gbv-sec-sub">
                  Most guides name the methods and stop there. Here&apos;s what
                  Google specifically checks in each — the detail that
                  determines whether your submission passes or fails.
                </p>
                <div className="gbv-meth-grid">
                  {methodCards.map((m, i) => (
                    <div key={i} className="gbv-meth-card">
                      <div className={`gbv-meth-badge ${m.badgeClass}`}>
                        {m.badge}
                      </div>
                      <div className="gbv-meth-icon">{m.icon}</div>
                      <h3>{m.title}</h3>
                      <div className="gbv-meth-time">{m.time}</div>
                      <p>{m.body}</p>
                      <ul className="gbv-meth-req">
                        {m.req.map((r, j) => (
                          <li key={j}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* SAB DEEP DIVE */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Service Area Businesses</div>
                <h2 className="gbv-sec-h2">
                  The SAB Problem Most Agencies{" "}
                  <span className="gbv-accent">Can&apos;t Actually Solve</span>
                </h2>
                <p className="gbv-sec-sub">
                  If your business goes to the customer — plumbers, roofers,
                  HVAC, pest control, landscapers — standard verification
                  guidance doesn&apos;t apply to you. And most agencies
                  don&apos;t know the difference.
                </p>
                <div className="gbv-sab-grid">
                  <div className="gbv-sab-col">
                    <div className="gbv-sab-eyebrow">Who this affects</div>
                    <h3>
                      Your Business Goes to the Customer. Google&apos;s System
                      Was Built for the Opposite.
                    </h3>
                    <p>
                      Service area businesses hide their physical address on
                      Google Maps — which is correct per Google&apos;s own
                      policy for businesses that don&apos;t serve customers at a
                      fixed location. But this creates a verification challenge:
                      Google needs to confirm you&apos;re a real business
                      without a storefront to film.
                    </p>
                    <p>
                      The SAB path requires proving legitimacy through branded
                      equipment, vehicles, insurance documents, and business
                      licenses — not a storefront walkthrough. Most video
                      verification guides assume you have a physical location.
                      For SABs, that guidance is useless.
                    </p>
                    <div className="gbv-sab-trades">
                      {["HVAC", "Plumbing", "Roofing", "Pest Control", "Electrical", "Landscaping", "Cleaning", "Mobile Services"].map((t) => (
                        <span key={t} className="gbv-sab-trade">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="gbv-sab-col gbv-highlight">
                    <div className="gbv-sab-eyebrow">
                      Specific SAB challenges we solve
                    </div>
                    <h3>Five Problems Unique to SAB Verification</h3>
                    <div className="gbv-sab-list">
                      {sabItems.map((s, i) => (
                        <div key={i} className="gbv-sab-item">
                          <div className="gbv-sab-icon">{s.icon}</div>
                          <div>
                            <div className="gbv-sab-title">{s.title}</div>
                            <div className="gbv-sab-body">{s.body}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* VERIFICATION LOOP */}
              <section className="gbv-section">
                <div className="gbv-sec-label">The Loop Nobody Explains</div>
                <h2 className="gbv-sec-h2">
                  Verified Then Revoked: Why It{" "}
                  <span className="gbv-accent">Keeps Happening</span>
                </h2>
                <p className="gbv-sec-sub">
                  The verification loop is the most frustrating and most
                  misunderstood GBP problem. Here&apos;s the mechanism — and
                  why trying to re-verify without fixing the root cause makes
                  it worse each time.
                </p>
                <div className="gbv-loop-flow">
                  {loopSteps.map((s, i) => (
                    <div
                      key={i}
                      className={`gbv-lf-step ${s.bad ? "gbv-bad" : "gbv-good"}`}
                    >
                      <div className="gbv-lf-icon">{s.icon}</div>
                      <div className="gbv-lf-title">{s.title}</div>
                      <div className="gbv-lf-body">{s.body}</div>
                    </div>
                  ))}
                </div>
                <div className="gbv-loop-roots">
                  <p className="gbv-loop-roots-label">
                    Most common root causes we diagnose:
                  </p>
                  <div className="gbv-loop-roots-grid">
                    {loopRoots.map((r, i) => (
                      <p key={i}>{r}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* PROCESS */}
              <section className="gbv-section">
                <div className="gbv-sec-label">How We Work</div>
                <h2 className="gbv-sec-h2">
                  Verified in Four Phases —{" "}
                  <span className="gbv-accent">
                    Real Timelines, Real Deliverables
                  </span>
                </h2>
                <p className="gbv-sec-sub">
                  No ambiguity. No &quot;we&apos;ll handle it.&quot; Here&apos;s
                  exactly what happens at each step.
                </p>
                <div className="gbv-process-list">
                  {processSteps.map((s, i) => (
                    <div key={i} className="gbv-ps-item">
                      <div className="gbv-ps-num">{s.num}</div>
                      <div>
                        <div className="gbv-ps-time">{s.time}</div>
                        <div className="gbv-ps-title">{s.title}</div>
                        <div className="gbv-ps-body">{s.body}</div>
                        <div className="gbv-ps-tags">
                          {s.tags.map((t, j) => (
                            <span key={j} className="gbv-ps-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* RESULTS */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Client Results</div>
                <h2 className="gbv-sec-h2">
                  Real Cases.{" "}
                  <span className="gbv-accent">Real Verifications.</span>
                </h2>
                <p className="gbv-sec-sub">
                  Measured outcomes — not generic testimonial language.
                </p>
                <div className="gbv-res-grid">
                  {resultCards.map((r, i) => (
                    <div key={i} className="gbv-rc">
                      <div className="gbv-rc-biz">{r.biz}</div>
                      <div className="gbv-rc-loc">{r.loc}</div>
                      <div className="gbv-rc-metrics">
                        {r.metrics.map((m, j) => (
                          <div key={j} className="gbv-rcm">
                            <div className="gbv-rcm-l">{m.l}</div>
                            <div className="gbv-rcm-b">{m.b}</div>
                            <div className="gbv-rcm-a">{m.a}</div>
                          </div>
                        ))}
                      </div>
                      <div className="gbv-rc-q">&quot;{r.quote}&quot;</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PRICING */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Transparent Pricing</div>
                <h2 className="gbv-sec-h2">
                  Clear Prices.{" "}
                  <span className="gbv-accent">No Surprises.</span>
                </h2>
                <p className="gbv-sec-sub">
                  Money-back guarantee on every plan. You don&apos;t pay if we
                  don&apos;t deliver a verified, live Google Business Profile.
                </p>
                <div className="gbv-pricing-grid">
                  {pricing.map((p, i) => (
                    <div
                      key={i}
                      className={`gbv-pc ${p.featured ? "gbv-featured" : ""}`}
                    >
                      {p.featured && p.badge ? (
                        <div className="gbv-pc-badge">{p.badge}</div>
                      ) : null}
                      <div className="gbv-pc-name">{p.name}</div>
                      <div className="gbv-pc-price">
                        <sup>$</sup>
                        {p.price}
                        {p.priceSuffix ? (
                          <span className="gbv-pc-per">{p.priceSuffix}</span>
                        ) : null}
                      </div>
                      <div className="gbv-pc-desc">{p.desc}</div>
                      <ul className="gbv-pc-feats">
                        {p.features.map((f, j) => (
                          <li key={j} className={f.dim ? "gbv-dim" : ""}>
                            {f.text}
                          </li>
                        ))}
                      </ul>
                      <HashScrollLink
                        href="#gbv-case-form"
                        className="gbv-pc-btn"
                      >
                        {p.btn}
                      </HashScrollLink>
                      <p className="gbv-pc-note">{p.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* COMPARE */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Why Zonic Media</div>
                <h2 className="gbv-sec-h2">
                  Zonic vs. DIY vs.{" "}
                  <span className="gbv-accent">Generic Freelancer</span>
                </h2>
                <p className="gbv-sec-sub">
                  Three realistic options for GBP verification. Here&apos;s how
                  they stack up on the factors that actually determine whether
                  your profile gets verified and stays that way.
                </p>
                <div className="gbv-cmp-wrap">
                  <table className="gbv-cmp-table">
                    <thead>
                      <tr>
                        <th style={{ width: "28%" }}>What matters</th>
                        <th className="gbv-hl" style={{ width: "24%" }}>
                          🚀 Zonic Media
                        </th>
                        <th style={{ width: "24%" }}>DIY Attempt</th>
                        <th style={{ width: "24%" }}>Generic Freelancer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.what}</td>
                          <td className="gbv-hl">
                            <span className="gbv-chk">{row.zonic[0]}</span>{" "}
                            {row.zonic[1]}
                          </td>
                          <td>
                            <span
                              className={
                                row.diy[0] === "✓"
                                  ? "gbv-chk"
                                  : row.diy[0] === "✗"
                                    ? "gbv-crs"
                                    : "gbv-prt"
                              }
                            >
                              {row.diy[0]}
                            </span>{" "}
                            {row.diy[1]}
                          </td>
                          <td>
                            <span
                              className={
                                row.free[0] === "✓"
                                  ? "gbv-chk"
                                  : row.free[0] === "✗"
                                    ? "gbv-crs"
                                    : "gbv-prt"
                              }
                            >
                              {row.free[0]}
                            </span>{" "}
                            {row.free[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section className="gbv-section">
                <div className="gbv-sec-label">What Clients Say</div>
                <h2 className="gbv-sec-h2">
                  Real Cases That{" "}
                  <span className="gbv-accent">Got Resolved</span>
                </h2>
                <div className="gbv-testi-big">
                  <div className="gbv-tb-mark">&quot;</div>
                  <div className="gbv-tb-stars">★★★★★</div>
                  <p className="gbv-tb-text">
                    &quot;{testimonialBig.text}&quot;
                  </p>
                  <div className="gbv-tb-author">
                    <div className="gbv-tb-av">{testimonialBig.initial}</div>
                    <div>
                      <div className="gbv-tb-name">{testimonialBig.name}</div>
                      <div className="gbv-tb-biz">{testimonialBig.biz}</div>
                    </div>
                  </div>
                </div>
                <div className="gbv-testi-row">
                  {testimonialsRow.map((t, i) => (
                    <div key={i} className="gbv-ts">
                      <div className="gbv-ts-text">&quot;{t.text}&quot;</div>
                      <div className="gbv-ts-author">
                        <div className="gbv-ts-av">{t.initial}</div>
                        <div>
                          <div className="gbv-ts-name">{t.name}</div>
                          <div className="gbv-ts-biz">{t.biz}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GUARANTEE */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Our Commitment</div>
                <h2 className="gbv-sec-h2">
                  Three Guarantees You{" "}
                  <span className="gbv-accent">Won&apos;t Find Elsewhere</span>
                </h2>
                <div className="gbv-guar-grid">
                  {guarantees.map((g, i) => (
                    <div key={i} className="gbv-gc">
                      <div className="gbv-gc-icon">{g.icon}</div>
                      <div className="gbv-gc-title">{g.title}</div>
                      <div className="gbv-gc-body">{g.body}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="gbv-section">
                <div className="gbv-sec-label">Common Questions</div>
                <h2 className="gbv-sec-h2">
                  Everything You Need to{" "}
                  <span className="gbv-accent">Know First</span>
                </h2>
                <p className="gbv-sec-sub">
                  Specific answers — not generic FAQ copy-pasted from every
                  other GBP service page.
                </p>
                <div className="gbv-faq-accord">
                  {faqs.map((f, i) => (
                    <div key={i} className="gbv-faq-item">
                      <p className="gbv-faq-q">{f.q}</p>
                      <div className="gbv-faq-a">{f.a}</div>
                    </div>
                  ))}
                </div>
                <Script
                  id="gbv-faq-schema"
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "FAQPage",
                      url: "https://zonicllc.com/google-business-profile-verification-help-2026",
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
              <div
                className="gbv-mob-form d-block d-lg-none"
                id="gbv-case-form"
              >
                <GbpVerificationLeadForm />
              </div>
            </div>

            {/* Right: sticky form (col-1/3) */}
            <div
              className="gbv-form-col d-none d-lg-block"
              data-scroll-target="gbv-case-form"
            >
              <div className="gbv-sticky-form">
                <GbpVerificationLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="gbv-final-cta">
          <div className="gbv-fc-inner">
            <div className="gbv-fc-label">
              Every unverified day = invisible on Google Maps + AI search
            </div>
            <h2>
              GET VERIFIED.
              <br />
              <span className="gbv-outline">START TODAY.</span>
            </h2>
            <p>
              Free diagnosis · Same-day response · No commitment. Stop fighting
              Google&apos;s verification process alone — let our specialists
              identify exactly what&apos;s blocking your profile and get you
              live on Maps and AI search.
            </p>
            <div className="gbv-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="gbv-fc-call">
                📞 Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#gbv-case-form" className="gbv-fc-form">
                Submit My Free Case →
              </HashScrollLink>
            </div>
            <div className="gbv-fc-proof">
              <span>1,500+ profiles verified</span>
              <span>99% success rate</span>
              <span>Money-back if we fail</span>
              <span>SAB specialists for contractors</span>
            </div>
          </div>
        </div>

        {/* Minimal FOOTER */}
        <footer className="gbv-footer">
          <div className="gbv-footer-inner">
            <div className="gbv-footer-logo">
              Z<span>O</span>NIC MEDIA
            </div>
            <div className="gbv-footer-info">
              8 The Green, STE B, Dover, DE 19901 ·{" "}
              <Link href={SITE_CONTACT.phoneHref}>
                {SITE_CONTACT.phoneDisplay}
              </Link>{" "}
              · <a href={SITE_CONTACT.emailHref}>{SITE_CONTACT.email}</a>
            </div>
            <div className="gbv-footer-links">
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/refund-policy">Refund Policy</Link>
              <Link href="/legal/terms-conditions">Terms</Link>
              <Link href="/">Zonic Media Home</Link>
            </div>
          </div>
        </footer>

        {/* Sticky bottom bar */}
        <div className="gbv-sticky-bar">
          <div className="gbv-sb-left">
            <strong>GBP Not Verified?</strong> We diagnose &amp; fix every type
            — money-back guarantee
          </div>
          <div className="gbv-sb-right">
            <Link href={SITE_CONTACT.phoneHref} className="gbv-sb-call">
              📞 Call {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#gbv-case-form" className="gbv-sb-form">
              Submit Free Case
            </HashScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
