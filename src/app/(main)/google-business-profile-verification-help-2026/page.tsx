import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import "@/app/style/gbpLanding.css";
import "@/app/style/gbpVerf.css";

import GbpVerificationLeadForm from "@/app/components/GbpVerificationLeadForm";
import HashScrollLink from "@/app/components/HashScrollLink";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
} from "@/shared/seoSchemas";

/* ---------------------------------------------------------------------------
   POSITIONING — read this before editing the copy.

   /services/gmb-verification-help owns the head term ("GMB verification
   help", "verify Google Business Profile") and the plain hire-us intent.

   This page owns a different query set and must stay on that side of the line:

     · "Google Business Profile verification 2026" / what changed
     · "GBP video verification requirements" / "video verification rejected"
     · "live video call verification"
     · "Google Business Profile re-verification" triggers

   It is the rules-and-mechanics page. Always link UP to
   /services/gmb-verification-help using the head term as anchor text so the
   head term consolidates on the hub instead of splitting across two URLs.
--------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    absolute: "Google Business Profile Verification 2026: Rules & Fixes",
  },
  description:
    "What changed in GBP verification for 2026: video requirements, live video calls, re-verification triggers, and why attempts get rejected. Free same-day diagnosis.",
  keywords: [
    "Google Business Profile verification 2026",
    "GBP video verification requirements",
    "video verification rejected",
    "Google live video call verification",
    "Google Business Profile re-verification",
    "GBP verification rules 2026",
    "video verification checklist",
    "Google Maps verification video requirements",
    "verification revoked Google Business Profile",
    "how long does GBP verification take",
  ],
  alternates: { canonical: "/google-business-profile-verification-help-2026" },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Google Business Profile Verification 2026: Rules & Fixes",
    description:
      "The 2026 GBP verification rules in full — the six things Google checks in your video, live video calls, re-verification triggers, and how to pass first time.",
    url: "/google-business-profile-verification-help-2026",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Verification 2026: Rules & Fixes",
    description:
      "Video requirements, live video calls, re-verification triggers and rejection reasons — the current GBP verification rules, explained.",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  {
    name: "GBP Verification Rules 2026",
    url: "/google-business-profile-verification-help-2026",
  },
]);

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: "/google-business-profile-verification-help-2026",
  areaServed: { type: "Country", name: "United States" },
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.zonicllc.com/google-business-profile-verification-help-2026#service",
  name: "Google Business Profile Video Verification & Re-Verification",
  alternateName: [
    "GBP video verification service",
    "Live video call verification preparation",
    "Google Business Profile re-verification service",
  ],
  serviceType: "Google Business Profile video verification",
  description:
    "Zonic Media prepares and guides Google Business Profile video verification under the current 2026 rules: a shot-by-shot filming list for the single continuous take Google requires, pre-call briefing for live video call verification, service-area business verification without a storefront, and root-cause fixes for profiles that verify and then get revoked.",
  url: "https://www.zonicllc.com/google-business-profile-verification-help-2026",
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
    name: "Businesses whose Google Business Profile video verification was rejected or who face a live video call",
  },
  isRelatedTo: {
    "@type": "Service",
    "@id": "https://www.zonicllc.com/services/gmb-verification-help#service",
    name: "GMB Verification Help",
  },
  offers: {
    "@type": "Offer",
    name: "Free Verification Diagnosis",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free same-day diagnosis identifying why the verification attempt failed and which method is available for the profile.",
  },
};

/* ----------------------------------------------------------------- content */

// Rendered twice back to back — the track animates to -50%, so the second
// copy is what makes the loop seamless.
const tickerItems = [
  <>
    <b>1500+</b> listings verified &amp; restored
  </>,
  <>
    ★ <b>5.0</b> rating on Clutch
  </>,
  <>
    <b>95%</b> success rate
  </>,
  <>Video, live call &amp; postcard — every method covered</>,
  <>Service-area business specialists</>,
  <>Free same-day diagnosis · Dover, DE</>,
];

const navLinks = [
  { href: "#gbv-changed", label: "What changed" },
  { href: "#gbv-shots", label: "Shot list" },
  { href: "#gbv-methods", label: "Methods" },
  { href: "#gbv-pricing", label: "Pricing" },
  { href: "#gbv-faq", label: "FAQ" },
];

const changelog = [
  {
    year: "2026",
    text: "AI Overviews and AI Mode answers draw on verified, active profiles — an unverified listing is missing from the answer layer that now sits above the results.",
  },
  {
    year: "2025",
    text: "Live video calls arrive: for flagged or complex accounts, Google schedules a call and an agent walks your location with you in real time.",
  },
  {
    year: "2024",
    text: "Video replaces postcard as the default method for most new listings after a wave of fraudulent business profiles.",
  },
  {
    year: "≤2023",
    old: true,
    text: "Postcard by mail is the standard path. Most guidance still online was written for this era — which is why so much of it no longer works.",
  },
];

const whatChanged = [
  {
    tag: "New in 2026",
    tone: "",
    title: "Unverified Profiles Miss the AI Answer Layer",
    body: "Google's AI-generated answers pull from verified, active Business Profiles. That matters more than another ranking position: a growing share of local searches now get answered above the results, and a profile that was never verified simply isn't in the pool the answer is built from.",
  },
  {
    tag: "Since 2025",
    tone: "is-blue",
    title: "Live Video Calls are a Real Method, Not a Rumour",
    body: "For accounts Google wants a closer look at, verification happens as a scheduled call. A person asks you to walk the premises on camera and may ask for a lease, licence or utility bill on the spot. You get a notification, not an option to request it — and almost nothing written about GBP verification prepares owners for it.",
  },
  {
    tag: "Since 2024",
    tone: "",
    title: "Video is the Default, and It is Reviewed by a Person",
    body: "Most new listings are pushed straight to video. A reviewer watches the recording against a fixed checklist, and a rejection usually arrives with no specific reason — which is why owners resubmit the same footage and fail again. The requirements are narrow, and every one of them is knowable in advance.",
  },
  {
    tag: "Ongoing",
    tone: "is-grey",
    title: "The Name on the Profile Has to Match the Name on the Door",
    body: "Reviewers compare the business name in the profile against your signage, your website and your registration. An abbreviation, a missing LLC, a DBA that differs from the registered entity, or an added service keyword is enough to fail the check — and resubmitting the video without fixing the name never resolves it.",
  },
];

const shots = [
  {
    time: "0:00",
    step: "Shot 1 of 6",
    title: "Approach the Building from the Street",
    body: "Start outside and walk in. The opening seconds establish that a physical place exists and that you are standing in it — a video that begins inside the room skips the only evidence that ties you to the address.",
    miss: "Starting the recording indoors, so nothing links the footage to the address on the profile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    time: "0:20",
    step: "Shot 2 of 6",
    title: "Hold on the Signage Until the Name is Readable",
    body: "Get close enough that the business name is legible on playback, not just recognisable to you. The name in shot has to match the name on the profile character for character — same suffix, same spelling, no added service words.",
    miss: "Filming the sign from too far away, at an angle, or against glare that makes the name unreadable.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="10" rx="2" />
        <path d="M7 9h10M12 15v4M8 21h8" />
      </svg>
    ),
  },
  {
    time: "0:45",
    step: "Shot 3 of 6",
    title: "Show the Space Where the Work Happens",
    body: "Interior, workshop, treatment room, kitchen, bay, yard — whatever your category implies. The reviewer is checking that the operation matches the category on the profile, so show the thing that category names.",
    miss: "An empty room with no evidence of the trade, or an interior that doesn't match the chosen category.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9.5 12 4l9 5.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    time: "1:10",
    step: "Shot 4 of 6",
    title: "Prove the Business is Yours to Operate",
    body: "Branded vehicle, tools with the company name, stock, licences, certificates on the wall, register or point-of-sale. Anything that a passer-by could not produce. This is the shot service-area businesses lean on hardest.",
    miss: "Skipping ownership evidence entirely — the most common reason a well-filmed video still fails.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4z" />
      </svg>
    ),
  },
  {
    time: "1:35",
    step: "Shot 5 of 6",
    title: "Sign in and Show the Profile on Your Screen",
    body: "Still recording, open the Business Profile dashboard on your phone and show that you are signed in to the account that manages this listing. It connects the person filming to the account making the claim.",
    miss: "Cutting to a screen recording afterwards, or showing the public listing rather than the signed-in dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    time: "1:55",
    step: "Shot 6 of 6",
    title: "Stop Recording Without Ever Having Stopped",
    body: "One take, no cuts, no edits, no stitched clips, no music, no titles. If the file shows any sign of editing it is rejected on that basis alone, regardless of how complete the content is.",
    miss: "Pausing to reposition, then joining the clips — the edit is detectable and the video is rejected.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m22 8-6 4 6 4V8z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
];

const rejections = [
  {
    n: "01",
    title: "The Recording was Not One Continuous Take",
    body: "Google requires a single unbroken clip. Anything paused, trimmed, sped up, or assembled from several files is rejected automatically — usually with no explanation, which is why owners re-record the same way and fail twice.",
  },
  {
    n: "02",
    title: "The Business Name Did Not Match the Signage",
    body: "The profile name has to match your signage, website and registration exactly. Any variation — a dropped LLC, an abbreviation, a DBA that differs from the registered entity, an extra service keyword — fails the check, and resubmitting the video never fixes it.",
  },
  {
    n: "03",
    title: "One of the Six Required Elements was Missing",
    body: "Exterior, legible signage, operating interior, ownership evidence, live dashboard access, one unbroken take. Reviewers work through the list. Miss any single item and the whole submission is refused.",
  },
  {
    n: "04",
    title: "The Profile was Configured Wrong Before Filming",
    body: "A service-area business set up as a storefront, an address hidden before verification was offered, or a service radius set at the wrong level will fail no matter how good the footage is. Configuration has to be right before the attempt, not after it.",
  },
  {
    n: "05",
    title: "Repeated Failures Moved the Account to Closer Review",
    body: "Every failed attempt is logged. After two or three, submissions are held to a higher standard, so each subsequent try is harder than the last. Fixing the cause before attempting again matters more with every failure.",
  },
  {
    n: "06",
    title: "A Duplicate Listing was Blocking the Verification",
    body: "An older profile for the same business — from a previous owner, a former agency, or an auto-generated listing — creates a conflict Google won't verify through. Owners usually have no idea the duplicate exists until someone goes looking.",
  },
];

const methods = [
  {
    name: "Video recording",
    tag: "Default",
    tagClass: "is-default",
    status: "The standard path for most new listings since 2024",
    time: "48–72 hours review",
    who: "Storefronts and service-area businesses alike — the method most profiles are offered",
  },
  {
    name: "Live video call",
    tag: "Since 2025",
    tagClass: "is-new",
    status: "Scheduled by Google, not requested by you",
    time: "Set by the appointment",
    who: "Flagged accounts, prior failures, and categories under closer review",
  },
  {
    name: "Postcard by mail",
    tag: "Legacy",
    tagClass: "is-legacy",
    status: "Still offered for some categories; code expires in 30 days",
    time: "5–14 days in transit",
    who: "Established storefronts in categories that have not moved to video",
  },
  {
    name: "Phone or email",
    tag: "Rarely offered",
    tagClass: "is-rare",
    status: "Only where Google can already corroborate the business elsewhere",
    time: "Instant when available",
    who: "Older listings with strong existing signals; often available as re-verification",
  },
];

const reverifyTriggers = [
  {
    title: "You Changed the Address",
    body: "Any move — even one suite along — puts the listing back through verification. The new address needs to be verifiable before you make the edit, not after.",
  },
  {
    title: "You Changed the Business Name",
    body: "Renames and rebrands trigger a fresh check, and the new name has to be live on your signage, site and registration before the check happens.",
  },
  {
    title: "You Changed the Primary Category",
    body: "Some categories carry stricter verification rules than others. Moving into one can require re-verification even though nothing else about the business changed.",
  },
  {
    title: "Ownership or Account Access Moved",
    body: "Transferring primary ownership, or losing access to the original account, commonly forces re-verification — and it is much easier to do before the handover than after.",
  },
  {
    title: "You Edited the Service Area",
    body: "Redrawing service areas after verification can trigger a new request, which is why service-area businesses should set their coverage correctly the first time.",
  },
  {
    title: "The Listing Sat Dormant, or was Marked Closed",
    body: "Long inactivity, or reopening a profile that was marked permanently closed, brings the listing back for review. Reopening is usually the harder of the two.",
  },
];

const loopSteps = [
  {
    n: "Step 1",
    bad: true,
    title: "Verified",
    body: "The profile goes live on Maps and everything looks resolved.",
  },
  {
    n: "Step 2",
    bad: true,
    title: "Flagged Days Later",
    body: "An automated check finds the conflict that was there the whole time.",
  },
  {
    n: "Step 3",
    bad: true,
    title: "Revoked",
    body: "Verification is removed, with no explanation of what triggered it.",
  },
  {
    n: "Step 4",
    bad: true,
    title: "Re-Submitted",
    body: "A new attempt goes in without the cause fixed, and the cycle restarts.",
  },
  {
    n: "Step 5",
    bad: false,
    title: "Diagnosed",
    body: "We find the actual trigger: a duplicate, a data mismatch, or a category conflict.",
  },
  {
    n: "Step 6",
    bad: false,
    title: "Fixed First",
    body: "The cause is resolved and indexed before any new attempt is made.",
  },
  {
    n: "Step 7",
    bad: false,
    title: "Verified Once",
    body: "The check has nothing left to catch, so the verification holds.",
  },
  {
    n: "Step 8",
    bad: false,
    title: "Monitored",
    body: "Thirty days of watching for the edits that would start the loop again.",
  },
];

const process = [
  {
    n: "01",
    when: "Day 1 — same business day",
    title: "Free Verification Diagnosis",
    body: "We review the profile, the attempt history, duplicate listings, business-data consistency across the web, and the category configuration. You get a specific diagnosis and a realistic timeline before paying anything.",
    tags: [
      "Attempt history",
      "Duplicate audit",
      "Data consistency check",
      "Category review",
    ],
  },
  {
    n: "02",
    when: "Days 1–2",
    title: "Fix the Cause Before Anything is Submitted",
    body: "Duplicates resolved, business data aligned across your site and directories, the profile name brought in line with your signage and registration, and the listing configured for the specific method that will be used. This is the step DIY attempts skip.",
    tags: [
      "Duplicate resolution",
      "Name alignment",
      "Profile configuration",
      "SAB setup",
    ],
  },
  {
    n: "03",
    when: "Days 2–7",
    title: "Guided Attempt — Shot List or Call Briefing",
    body: "For video, the shot-by-shot list above, built around your premises and trade. For a live video call, a full briefing covering the questions an agent is likely to ask and the documents to have ready. We stay on the case until the profile is live.",
    tags: ["Custom shot list", "Live call briefing", "Document pack", "Follow-up"],
  },
  {
    n: "04",
    when: "After verification",
    title: "Optimize, Then Keep It Stable",
    body: "A verified profile with nothing else done to it is a missed opportunity. Categories, services, attributes, photos, description and posts get built out, and we set the service-area and edit practices that stop re-verification requests recurring.",
    tags: [
      "Full optimization",
      "Photo strategy",
      "Re-verification prevention",
      "30-day monitoring",
    ],
  },
];

const pricing = [
  {
    name: "Verification Fix",
    price: "247",
    from: "Flat fee, quoted after the free diagnosis",
    desc: "One profile, one verification problem. Diagnosis, root-cause fix, and a guided attempt on the right method.",
    features: [
      { text: "Full verification diagnosis", dim: false },
      { text: "Duplicate listing audit & resolution", dim: false },
      { text: "Business-data consistency fix", dim: false },
      { text: "Custom shot-by-shot video list", dim: false },
      { text: "Live video call briefing if required", dim: false },
      { text: "Follow-up until the profile is live", dim: false },
      { text: "Full profile optimization", dim: true },
      { text: "30-day monitoring", dim: true },
    ],
    btn: "Start a verification fix",
    note: "Free diagnosis before you commit",
    featured: false,
  },
  {
    name: "Verify + Optimize",
    price: "447",
    from: "Flat fee, quoted after the free diagnosis",
    desc: "Get verified and go live already built out — categories, services, photos and posts done, not left for later.",
    features: [
      { text: "Everything in Verification Fix", dim: false },
      { text: "Full profile optimization", dim: false },
      { text: "Category & service buildout", dim: false },
      { text: "Photo strategy & first upload batch", dim: false },
      { text: "Business description rewrite", dim: false },
      { text: "Q&A seeding and first month of posts", dim: false },
      { text: "Re-verification prevention setup", dim: false },
      { text: "30-day post-verification monitoring", dim: false },
    ],
    btn: "Start verify + optimize",
    note: "Most chosen by first-time listings",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Agency / Multi-Location",
    price: "177",
    per: "/loc",
    from: "Volume rate, minimum 3 locations",
    desc: "For agencies and brands verifying several profiles at once, with reporting you can put your own brand on.",
    features: [
      { text: "Everything in Verify + Optimize", dim: false },
      { text: "Bulk verification sequencing", dim: false },
      { text: "Cross-location duplicate audit", dim: false },
      { text: "Dedicated account manager", dim: false },
      { text: "White-label status reporting", dim: false },
      { text: "SAB strategy for contractor clients", dim: false },
      { text: "Agency partner program access", dim: false },
    ],
    btn: "Get an agency quote",
    note: "Min. 3 locations · Custom onboarding",
    featured: false,
  },
];

const faqs = [
  {
    q: "What exactly does Google check in a verification video in 2026?",
    a: "Six things, in one unbroken take: an exterior shot that establishes a physical location; signage close enough that the business name is legible and matches the profile exactly; an interior or working area consistent with your primary category; evidence that the business is yours to operate, such as branded vehicles, tools, stock, licences or certificates; a live screen showing you signed in to the account that manages the listing; and no editing anywhere in the file. Reviewers work through that list, and missing any single item is enough for a refusal — usually with no reason given.",
  },
  {
    q: "How long should the verification video be?",
    a: "Long enough to cover all six elements without rushing, which in practice is around one and a half to three minutes. Length is not what gets marked; completeness is. A ninety-second video that covers every element passes, while a five-minute walkthrough that never shows the signed-in dashboard does not.",
  },
  {
    q: "Can I re-record and resubmit the same day?",
    a: "You can, but it is usually the wrong move. If the first attempt failed because of the profile rather than the footage — a name that does not match your signage, a duplicate listing, a service-area business configured as a storefront — a second video will fail the same way, and every logged failure raises the standard applied to the next one. Fix the underlying issue first, then film once.",
  },
  {
    q: "What is a live video call verification and how is it different?",
    a: "It is initiated by Google, not requested by you: you get a notification with a scheduled time, and a real agent joins a call and asks you to walk through your location live. The agent may ask you to point the camera at signage, open the dashboard, or hold up a lease, licence or utility bill on the spot. There is no retake, so the preparation is different from a recorded video — we brief clients on the likely questions and the documents to have within reach before the call.",
  },
  {
    q: "Why did my profile verify and then get revoked?",
    a: "Because verification confirmed the attempt while an underlying conflict stayed in place. In nearly every case it is one of three: a duplicate listing for the same business, business details that do not match across your website, licence and other directories, or a category Google has flagged for closer review. The automated check runs again after the profile goes live, finds the same conflict, and pulls the verification. Re-verifying without fixing the cause restarts the loop, usually faster each time.",
  },
  {
    q: "Do I need to verify again if I move or rename the business?",
    a: "Yes. Address changes, name changes, primary category changes, ownership transfers and service-area edits all commonly trigger re-verification, as does reopening a listing that was marked permanently closed. The sequence matters: make sure the new address, name or category is verifiable — signage up, registration updated, website matching — before you make the edit, rather than editing first and dealing with the check afterwards.",
  },
  {
    q: "How do I film the video if I have no storefront?",
    a: "Service-area businesses are verified without a public address, but the footage has to prove legitimacy a different way. Instead of a storefront walkthrough, the video leans on a branded vehicle, tools and equipment carrying the business name, a garage or yard where work is staged, insurance certificates and contractor licences, and the signed-in dashboard. Standard video guidance assumes a shopfront, which is exactly why so many contractor verifications fail on the first try.",
  },
  {
    q: "Is postcard verification still available in 2026?",
    a: "For some categories, yes, but it is no longer the default and it is not offered on most new listings. Where it is available, the address has to match Google's records exactly and the code expires after 30 days. After a few failed postcards, most categories move to video only. If postcard is the only option showing in your dashboard and it keeps failing, that is usually a signal about the profile rather than the mail.",
  },
  {
    q: "Does an unverified profile really affect AI search results?",
    a: "Yes, indirectly but meaningfully. Google's AI-generated answers draw on verified, active Business Profiles, so an unverified listing is absent from the layer that increasingly answers local queries before anyone scrolls. The practical effect is the same as being absent from Maps: for a growing share of searches, the customer never sees you.",
  },
  {
    q: "I have failed several times already. Can this still be fixed?",
    a: "In most cases, yes — this is the situation we see most. Please stop submitting first: each additional failure raises the standard applied to the next attempt. We review the full attempt history, identify what has actually been blocking it, fix that, and then submit once with a complete package. Our success rate on previously rejected profiles holds up precisely because we only submit when the case is ready.",
  },
];

function Page() {
  return (
    <div className="gbp-lp gbv-page">
      <script
        id="gbv-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="gbv-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id="gbv-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ============================ TICKER ============================ */}
      <div className="lp-ticker" aria-label="Zonic Media highlights">
        <div className="lp-ticker-track">
          {[0, 1].map((copy) =>
            tickerItems.map((item, i) => (
              <span key={`${copy}-${i}`} aria-hidden={copy === 1}>
                {item}
              </span>
            )),
          )}
        </div>
      </div>

      {/* ============================ HEADER ============================ */}
      <nav className="lp-nav">
        <Link href="/" className="lp-nav-logo" aria-label="Zonic Media home">
          <Image
            src="/images/logo.webp"
            width={132}
            height={50}
            alt="Zonic Media"
            priority
          />
        </Link>
        <ul className="lp-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <HashScrollLink href={link.href} offset={80}>
                {link.label}
              </HashScrollLink>
            </li>
          ))}
        </ul>

        <div className="lp-nav-right">
          <a href={SITE_CONTACT.phoneHref} className="lp-nav-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {SITE_CONTACT.phoneDisplay}
          </a>
          <HashScrollLink href="#gbv-case-form" className="lp-btn">
            Free diagnosis
          </HashScrollLink>
        </div>
      </nav>

      <div className="lp-alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        <span>
          <strong>Updated for 2026.</strong> Video is the default method, live
          video calls are now real, and the rules changed twice since most
          verification guides were written.
        </span>
        <HashScrollLink href="#gbv-case-form" className="lp-alert-cta">
          Get a free diagnosis →
        </HashScrollLink>
      </div>

      <div className="lp-wrap">
        {/* ========================= LEFT: CONTENT ========================= */}
        <div className="lp-col">
          {/* ------------------------------ HERO ------------------------------ */}
          <section className="lp-panel-dark">
            <span className="lp-eyebrow on-dark">
              
              Current rules · video, live calls &amp; re-verification
            </span>

            <h1 className="lp-h1">
              Google Business Profile Verification in 2026 —{" "}
              <span className="gbv-accent">What Actually Changed</span>
            </h1>

            <p className="lp-lead">
              Verification got harder twice in three years, and most of the
              advice still circulating was written for the postcard era. This is
              what Google checks now, why attempts get refused without a reason,
              and what to fix before you try again.
            </p>

            <div className="lp-final-actions" style={{ justifyContent: "flex-start", marginTop: 28 }}>
              <HashScrollLink href="#gbv-case-form" className="lp-btn">
                Get a free diagnosis
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </HashScrollLink>
              <a href={SITE_CONTACT.phoneHref} className="lp-btn lp-btn-on-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {SITE_CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="gbv-hero-trust">
              <span className="gbv-ht">
                <b>1500+</b>&nbsp;listings verified &amp; restored
              </span>
              <span className="gbv-ht">
                <b>95%</b>&nbsp;success rate
              </span>
              <span className="gbv-ht">
                <b>48hr</b>&nbsp;average resolution
              </span>
            </div>

            {/* --- hero: what changed, newest first --- */}
            <div className="gbv-change">
              <p className="gbv-change-title">Verification changelog</p>
              {changelog.map((row) => (
                <div
                  className={`gbv-change-row${row.old ? " is-old" : ""}`}
                  key={row.year}
                >
                  <span className="gbv-change-year">{row.year}</span>
                  <span className="gbv-change-text">{row.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile form — the sticky right column is desktop-only */}
          <div className="d-block d-lg-none" id="gbv-case-form">
            <GbpVerificationLeadForm />
          </div>

          {/* ------------------------------ STATS ------------------------------ */}
          <section className="lp-panel">
            <div className="lp-stats">
              <div className="lp-stat">
                <div className="lp-stat-num">
                  1500<span>+</span>
                </div>
                <p className="lp-stat-cap">Listings verified &amp; restored</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  95<span>%</span>
                </div>
                <p className="lp-stat-cap">Success rate</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  48<span>hr</span>
                </div>
                <p className="lp-stat-cap">Average resolution time</p>
              </div>
              <div className="lp-stat">
                <div className="lp-stat-num">
                  6<span>/6</span>
                </div>
                <p className="lp-stat-cap">Video elements Google checks</p>
              </div>
            </div>
          </section>

          {/* --------------------------- WHAT CHANGED --------------------------- */}
          <section className="lp-panel" id="gbv-changed">
            <div className="lp-head">
              <span className="lp-eyebrow">The 2026 rules</span>
              <h2 className="lp-h2">Four Changes That Broke the Old Verification Advice</h2>
              <p>
                If you last verified a Google Business Profile before 2024, none
                of this existed. Each change moved the bar, and each one explains
                a class of failure that owners still run into weekly.
              </p>
            </div>
            <div className="lp-grid-2">
              {whatChanged.map((card) => (
                <article className="lp-card" key={card.title}>
                  <span className={`gbv-new-tag ${card.tone}`}>{card.tag}</span>
                  <h3 className="lp-h3">{card.title}</h3>
                  <p className="lp-body">{card.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* -------------------- SIGNATURE: THE SHOT LIST -------------------- */}
          <section className="lp-panel" id="gbv-shots">
            <div className="lp-head">
              <span className="lp-eyebrow">The shot list</span>
              <h2 className="lp-h2">Six Shots, One Take — What to Film, in Order</h2>
              <p>
                Google reviews the recording against a fixed checklist and tells
                you almost nothing when it fails. This is that checklist as a
                filming order: press record before you leave the street, and
                don&apos;t stop until the last shot is done.
              </p>
            </div>

            <div className="gbv-shots">
              {shots.map((shot) => (
                <article className="gbv-shot" key={shot.time}>
                  <div className="gbv-shot-frame">
                    <span className="gbv-shot-rec">REC</span>
                    <span className="gbv-shot-ic">{shot.icon}</span>
                    <span className="gbv-shot-time">{shot.time}</span>
                  </div>
                  <div className="gbv-shot-body">
                    <span className="gbv-shot-step">{shot.step}</span>
                    <h3 className="lp-h3">{shot.title}</h3>
                    <p className="lp-body">{shot.body}</p>
                    <p className="gbv-shot-miss">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                      <span>
                        <b>Most common miss:</b> {shot.miss}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="gbv-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                No storefront? The order stays the same, but shots 1–3 change
                completely for service-area businesses — see the SAB section
                below before you film anything.
              </span>
            </p>
          </section>

          {/* ------------------------- WHY ATTEMPTS FAIL ------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Why attempts get refused</span>
              <h2 className="lp-h2">Six Reasons a Verification Attempt Gets Rejected</h2>
              <p>
                Google refuses without a reason, so owners guess — and usually
                guess that the video was the problem when the profile was. These
                are the causes we find, in rough order of frequency.
              </p>
            </div>
            <div className="lp-grid-2">
              {rejections.map((item) => (
                <div className="lp-card" key={item.n}>
                  <div className="lp-ic lp-ic-red">{item.n}</div>
                  <h3 className="lp-h3">{item.title}</h3>
                  <p className="lp-body">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------- METHOD COMPARISON ------------------------- */}
          <section className="lp-panel" id="gbv-methods">
            <div className="lp-head">
              <span className="lp-eyebrow">Methods, current status</span>
              <h2 className="lp-h2">Which Verification Method You Actually Get</h2>
              <p>
                You don&apos;t choose the method — Google offers it based on
                category, listing age and account history. Knowing which one
                you&apos;re on tells you what to prepare, and if the one you need
                isn&apos;t showing, that is itself diagnostic.
              </p>
            </div>
            <div className="gbv-table-wrap">
              <table className="gbv-table">
                <thead>
                  <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Status in 2026</th>
                    <th scope="col">Turnaround</th>
                    <th scope="col">Who gets offered it</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((m) => (
                    <tr key={m.name}>
                      <th scope="row">
                        {m.name}
                        <br />
                        <span className={`gbv-tag ${m.tagClass}`}>{m.tag}</span>
                      </th>
                      <td>{m.status}</td>
                      <td>{m.time}</td>
                      <td>{m.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ------------------------------ SAB ------------------------------ */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">No storefront</span>
              <h2 className="lp-h2">Filming the Video When There is Nothing to Film</h2>
              <p>
                Plumbers, roofers, HVAC, pest control, electricians, landscapers
                — if you go to the customer, the standard walkthrough advice does
                not apply to you, and following it is why so many contractor
                verifications fail on the first attempt. It is a hurdle we clear
                constantly in{" "}
                <Link
                  href="/services/industry/local-seo-services-for-hvac"
                  className="lp-link"
                >
                  local SEO for HVAC companies
                </Link>{" "}
                engagements.
              </p>
            </div>
            <div className="gbv-sab">
              <div className="gbv-sab-col">
                <h3 className="lp-h3">Your Business Goes to the Customer. The Check Assumes the Opposite.</h3>
                <p>
                  Service-area businesses hide their address on Maps, which is
                  correct under Google&apos;s own policy for businesses that
                  don&apos;t serve customers at a fixed location. That creates the
                  problem: the reviewer still has to confirm a real operation
                  exists, with no premises to walk through.
                </p>
                <p>
                  So the evidence moves. Legitimacy comes from a branded vehicle,
                  equipment carrying the business name, the yard or garage where
                  work is staged, insurance certificates and contractor licences —
                  and the signed-in dashboard, which matters more here than
                  anywhere else. Once the profile is live, that same trade
                  visibility is what{" "}
                  <Link
                    href="/services/local-seo-for-home-services"
                    className="lp-link"
                  >
                    local SEO for home services
                  </Link>{" "}
                  builds on.
                </p>
                <div className="gbv-trades">
                  {[
                    "HVAC",
                    "Plumbing",
                    "Roofing",
                    "Pest control",
                    "Electrical",
                    "Landscaping",
                    "Cleaning",
                    "Mobile services",
                  ].map((trade) => (
                    <span className="gbv-trade" key={trade}>
                      {trade}
                    </span>
                  ))}
                </div>
              </div>

              <div className="gbv-sab-panel">
                <span className="lp-eyebrow">Five SAB-specific traps</span>
                <div className="gbv-sab-list">
                  {[
                    {
                      title: "The Address was Hidden Too Early",
                      body: "Hide it before verification is offered and video may never appear as an option. The configuration order matters more than the setting itself.",
                    },
                    {
                      title: "Nothing on Camera Carries the Business Name",
                      body: "An unbranded van and plain tools prove nothing. Magnetic door signs, a decal, or a licence in the business name close the gap.",
                    },
                    {
                      title: "The Service Area is Drawn at the Wrong Level",
                      body: "Too large, too small, or set by the wrong geography causes failures and ranking problems that persist long after verification.",
                    },
                    {
                      title: "The Document Pack is Missing a Licence",
                      body: "Most trades need a state contractor licence and a liability certificate in the same name as the profile. Assemble both before filming.",
                    },
                    {
                      title: "Editing the Service Area Restarted the Check",
                      body: "Changing coverage after verification can trigger a fresh request. Set it correctly once instead of adjusting it repeatedly.",
                    },
                  ].map((item) => (
                    <div className="gbv-sab-item" key={item.title}>
                      <span className="gbv-sab-ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 9v4M12 17h.01" />
                          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="lp-h4">{item.title}</h4>
                        <p className="lp-body">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------ RE-VERIFICATION ------------------------ */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Re-verification</span>
              <h2 className="lp-h2">Six Edits That Send a Verified Profile Back for Review</h2>
              <p>
                Verification is not permanent. These are the changes that most
                often put a live listing back in the queue — worth knowing before
                you make them, because in every case the fix is easier to arrange
                in advance than to unwind afterwards.
              </p>
            </div>
            <div className="gbv-trigger-grid">
              {reverifyTriggers.map((item) => (
                <div className="gbv-trigger" key={item.title}>
                  <span className="gbv-trigger-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2v6h-6" />
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                      <path d="M3 22v-6h6" />
                      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="lp-h3">{item.title}</h3>
                    <p className="lp-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* -------------------------- THE LOOP -------------------------- */}
          <section className="lp-panel-dark">
            <div className="lp-head">
              <span className="lp-eyebrow on-dark">Verified, then revoked</span>
              <h2 className="lp-h2">The Loop, and Where It Breaks</h2>
              <p>
                Verifying and being revoked days later is the most misunderstood
                GBP problem, because the obvious response — verify again — is the
                one that guarantees a repeat. If a revoked profile tips into a
                full suspension, our GMB reinstatement service takes over from
                there.
              </p>
            </div>
            <div className="gbv-loop">
              {loopSteps.map((step) => (
                <div
                  className={`gbv-loop-step ${step.bad ? "is-bad" : "is-good"}`}
                  key={step.n}
                >
                  <div className="gbv-loop-n">{step.n}</div>
                  <h3 className="lp-h3">{step.title}</h3>
                  <p className="lp-body">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="gbv-loop-roots">
              <p className="gbv-loop-roots-label">
                Nearly every loop traces to one of three causes:
              </p>
              <ul>
                <li>
                  A duplicate profile — from a previous owner, a former agency,
                  or an auto-generated listing — creating a conflict that never
                  went away.
                </li>
                <li>
                  Business details that don&apos;t match across your website,
                  registration, and the directories Google cross-checks.
                </li>
                <li>
                  A primary category Google reassigned or flagged, which no
                  longer supports the verification method being attempted.
                </li>
              </ul>
            </div>
          </section>

          {/* ---------------------------- PROCESS ---------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">How we work</span>
              <h2 className="lp-h2">Four Phases, with Real Timelines</h2>
              <p>
                No &quot;we&apos;ll handle it.&quot; Here is what happens at each
                step — and once you&apos;re live,{" "}
                <Link href="/services/gmb-optimization" className="lp-link">
                  Google Business Profile optimization
                </Link>{" "}
                makes sure the verified profile actually ranks.
              </p>
            </div>
            <div className="gbv-process">
              {process.map((step) => (
                <div className="gbv-ps" key={step.n}>
                  <div className="gbv-ps-num">{step.n}</div>
                  <div>
                    <div className="gbv-ps-when">{step.when}</div>
                    <h3 className="lp-h3">{step.title}</h3>
                    <p className="lp-body">{step.body}</p>
                    <div className="gbv-ps-tags">
                      {step.tags.map((tag) => (
                        <span className="gbv-ps-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------- PRICING ---------------------------- */}
          <section className="lp-panel" id="gbv-pricing">
            <div className="lp-head">
              <span className="lp-eyebrow">Done-for-you options</span>
              <h2 className="lp-h2">Clear Prices, Quoted After the Free Diagnosis</h2>
              <p>
                The diagnosis costs nothing and comes with a realistic timeline.
                While verification is in progress, many clients run{" "}
                <Link href="/services/google-ads" className="lp-link">
                  Google Ads management
                </Link>{" "}
                so they stay visible to high-intent searchers in the meantime.
              </p>
            </div>
            <div className="lp-price-grid">
              {pricing.map((tier) => (
                <div
                  className={`lp-pc${tier.featured ? " is-featured" : ""}`}
                  key={tier.name}
                >
                  {tier.featured && tier.badge ? (
                    <span className="lp-pc-badge">{tier.badge}</span>
                  ) : null}

                  <div className="lp-pc-main">
                    <div className="lp-pc-name">{tier.name}</div>
                    <div className="lp-pc-price">
                      <sup>$</sup>
                      {tier.price}
                      {tier.per ? (
                        <span className="lp-pc-per">{tier.per}</span>
                      ) : null}
                    </div>
                    <p className="lp-pc-from">{tier.from}</p>
                    <p className="lp-pc-desc">{tier.desc}</p>
                    <HashScrollLink href="#gbv-case-form" className="lp-pc-btn">
                      {tier.btn}
                    </HashScrollLink>
                    <p className="lp-pc-note">{tier.note}</p>
                  </div>

                  <div className="lp-pc-side">
                    <p className="lp-pc-side-label">What&apos;s included</p>
                    <ul className="lp-pc-feats">
                      {tier.features.map((f) => (
                        <li key={f.text} className={f.dim ? "is-dim" : ""}>
                          {f.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------ FAQ ------------------------------ */}
          <section className="lp-panel" id="gbv-faq">
            <div className="lp-head">
              <span className="lp-eyebrow">Verification questions</span>
              <h2 className="lp-h2">What Owners Ask About the 2026 Rules</h2>
            </div>

            {faqs.map((faq, index) => (
              <details className="lp-faq-item" name="lp-faq" key={faq.q} open={index === 0}>
                <summary className="lp-faq-q">
                  {faq.q}
                  <span className="lp-faq-pm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="lp-faq-a">{faq.a}</div>
              </details>
            ))}

            <script
              id="gbv-faq-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  url: "https://www.zonicllc.com/google-business-profile-verification-help-2026",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                }),
              }}
            />
          </section>

          {/* -------------------------- RELATED PAGES -------------------------- */}
          <section className="lp-panel">
            <div className="lp-head">
              <span className="lp-eyebrow">Different problem?</span>
              <h2 className="lp-h2">Start on the Right Page</h2>
              <p>
                This page covers the current rules and the video mechanics. If you
                just want it handled, our{" "}
                <Link
                  href="/services/gmb-verification-help"
                  className="lp-link"
                >
                  GMB verification help
                </Link>{" "}
                covers every failure type end to end. A suspended profile is a
                different problem — that&apos;s our{" "}
                <Link
                  href="/services/gmb-reinstatement-help"
                  className="lp-link"
                >
                  GMB reinstatement service
                </Link>
                , and if an appeal has already been{" "}
                <Link
                  href="/gmb-reinstatement-service-agency"
                  className="lp-link"
                >
                  rejected by Google
                </Link>
                , the escalation desk handles it from there. Once you&apos;re
                live, a{" "}
                <Link href="/services/web-design" className="lp-link">
                  conversion-focused website
                </Link>{" "}
                turns the new visibility into booked work.
              </p>
            </div>
          </section>
        </div>

        {/* ===================== RIGHT: STICKY FORM (desktop) ===================== */}
        <aside
          className="lp-form-col d-none d-lg-block"
          data-scroll-target="gbv-case-form"
        >
          <GbpVerificationLeadForm />
        </aside>
      </div>

      {/* ========================== FINAL CTA BAND ========================== */}
      <section className="lp-final">
        <div className="lp-final-inner">
          <span className="lp-eyebrow on-dark">
            Unverified means missing from Maps and from AI answers
          </span>
          <h2 className="lp-h2">Find Out What&apos;s Blocking It, Before You Film Again</h2>
          <p>
            Free diagnosis, same-day response, no commitment. We&apos;ll tell you
            which method your profile is on, what refused the last attempt, and
            exactly what to fix first.
          </p>
          <div className="lp-final-actions">
            <HashScrollLink href="#gbv-case-form" className="lp-btn">
              Get a free diagnosis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </HashScrollLink>
            <a href={SITE_CONTACT.phoneHref} className="lp-btn lp-btn-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
          <div className="lp-final-sub">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Free same-day diagnosis
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              SAB specialists for contractors
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

      {/* ============================= FOOTER ============================= */}
      <footer className="lp-footer">
        <div className="lp-footer-top">
          <div className="lp-footer-brand">
            <Link href="/" className="lp-footer-logo" aria-label="Zonic Media home">
              <Image
                src="/images/logo.webp"
                width={132}
                height={50}
                alt="Zonic Media"
              />
            </Link>
            <p className="lp-footer-blurb">
              A Delaware digital marketing agency specialising in Google Business
              Profile work — verification, reinstatement, appeal escalation and
              optimization — for local and service-area businesses across the
              United States.
            </p>
            <div className="lp-footer-contact">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                8 The Green, STE B, Dover, DE 19901
              </span>
              <a href={SITE_CONTACT.phoneHref}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {SITE_CONTACT.phoneDisplay}
              </a>
              <a href={SITE_CONTACT.emailHref}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                {SITE_CONTACT.email}
              </a>
            </div>
          </div>

          <div className="lp-footer-col">
            <h3 className="lp-h3">Google Business Profile</h3>
            <ul>
              <li>
                <Link href="/services/gmb-verification-help">
                  GMB verification help
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-reinstatement-help">
                  GMB reinstatement service
                </Link>
              </li>
              <li>
                <Link href="/gmb-reinstatement-service-agency">
                  Rejected appeal help
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-optimization">
                  Profile optimization
                </Link>
              </li>
              <li>
                <Link href="/services/google-business-profile-services-real-estate-agents">
                  GBP for real estate agents
                </Link>
              </li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h3 className="lp-h3">More Services</h3>
            <ul>
              <li>
                <Link href="/services/local-seo-for-home-services">
                  Local SEO for home services
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads">Google Ads management</Link>
              </li>
              <li>
                <Link href="/services/web-design">Web design</Link>
              </li>
              <li>
                <Link href="/services/white-label-services">
                  White-label for agencies
                </Link>
              </li>
              <li>
                <Link href="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h3 className="lp-h3">Company</h3>
            <ul>
              <li>
                <Link href="/about">About Zonic Media</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/industries">Industries we serve</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <span>
            © {new Date().getFullYear()} Zonic Media LLC. All rights reserved.
          </span>
          <div className="lp-footer-legal">
            <Link href="/legal/privacy-policy">Privacy policy</Link>
            <Link href="/legal/refund-policy">Refund policy</Link>
            <Link href="/legal/terms-conditions">Terms &amp; conditions</Link>
          </div>
        </div>
      </footer>

      {/* =========================== STICKY CTA =========================== */}
      <div className="lp-sticky-bar">
        <div className="lp-sb-left">
          <strong>Verification stuck?</strong> Free same-day diagnosis before you
          film again
        </div>
        <div className="lp-sb-right">
          <a href={SITE_CONTACT.phoneHref} className="lp-sb-call">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            {SITE_CONTACT.phoneDisplay}
          </a>
          <HashScrollLink href="#gbv-case-form" className="lp-sb-form">
            Free diagnosis
          </HashScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Page;
