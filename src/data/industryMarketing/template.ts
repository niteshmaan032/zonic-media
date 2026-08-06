import type { Metadata } from "next";

import type { IndustryMarketingPageData } from "@/app/components/IndustryMarketingPage";
import { titleCaseHeadings } from "@/shared/titleCase";

/* Shared builder for the ima- industry marketing landing pages.
 *
 * The first 13 industry pages were imported from static HTML into
 * industryMarketingPages.generated.json, and septic/solar were hand-written as
 * pageData.ts files. Both routes ship the exact same seven-section layout, so
 * this module owns that markup once and each new industry only supplies the
 * copy that actually differs (hero, problem cards, service blurbs, answer
 * facts, map query, pricing descriptions, FAQ, schema).
 *
 * Section order is load-bearing: IndustryMarketingPage stamps ids onto the
 * <section> elements in render order (ima-problem, ima-system, ima-services,
 * ima-map, ima-pricing, ima-process, ima-faq) and splits contentHtml at the
 * LAST plain `<section class="section">` to inject the Clutch reviews widget
 * just above the FAQ. Keep seven sections, and keep the FAQ last.
 */

const SITE = "https://www.zonicllc.com";
const PHONE_DISPLAY = "(302) 726-9736";
const PHONE_HREF = "tel:+13027269736";

export const CHECK_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';

const PHONE_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

const STAR_SVG =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

/* Icon set for the three "problem" cards. Same stroke language as the rest of
   the ima- family so a new page never introduces a stray icon style. */
export const PROBLEM_ICONS = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  flame:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  review:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  wallet:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7V5a2 2 0 0 1 2-2h11"/><circle cx="16" cy="13" r="1.4"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  storm:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 15a4.5 4.5 0 1 0-1.5-8.74A6 6 0 1 0 6.5 15"/><path d="M13 13l-3 5h4l-2 4"/></svg>',
  photo:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="M21 16l-5-5-6 6"/></svg>',
} as const;

export type ProblemIcon = keyof typeof PROBLEM_ICONS;

const SVC_ICONS = {
  seo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  ads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
  social:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>',
  leads:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  links:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 7h20M6 5h.01M9 5h.01"/><path d="M8 21h8M12 17v4"/></svg>',
} as const;

const SEARCH_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';

export type FaqItem = {
  /** Question text. Rendered in the <summary> and reused as the schema name. */
  q: string;
  /** Answer HTML — may contain an .ima-inline-link anchor. */
  a: string;
  /** Plain-text answer for FAQPage JSON-LD. Defaults to `a` with tags stripped. */
  schemaA?: string;
};

export type IndustryMarketingConfig = {
  /** Route segment under /services, e.g. "towing-marketing-agency". */
  slug: string;
  title: string;
  description: string;
  keywords: string[];

  /** "Towing Marketing Agency" — hero eyebrow and breadcrumb leaf. */
  eyebrow: string;
  /** Primary keyword, lowercase — highlighted inside the H1. */
  keyword: string;
  /** Lowercase trade word used mid-sentence, e.g. "towing", "kitchen remodeling". */
  industry: string;
  /** Sentence-case trade word for headings, e.g. "Towing", "Kitchen remodeling". */
  industryTitle: string;
  /** Singular business noun, e.g. "towing company". */
  business: string;
  /** Plural business noun, e.g. "towing companies". */
  businesses: string;
  /** How owners are addressed in the FAQ heading, e.g. "towing company owners". */
  owners: string;
  /** Who is searching, e.g. "drivers", "homeowners", "parents". */
  customers: string;
  /** Ticker chip, e.g. "Towing specialists". */
  specialists: string;
  /** What a won job is called, e.g. "booked jobs", "booked tows", "new patients". */
  jobsNoun: string;

  /** Tail of the H1 after the highlighted keyword. */
  h1Tail: string;
  heroLead: string;

  problemIntro: string;
  problems: { icon: ProblemIcon; title: string; body: string }[];

  /** Trade-specific copy for the Local SEO service card. */
  localSeoBlurb: string;
  /** Trade-specific copy for the Google Ads service card. */
  adsBlurb: string;
  /**
   * What the citation card calls the trade's directories. Defaults to
   * "{industry} platforms", which reads fine for "towing" but not for
   * "kitchen remodeling" or "pediatric".
   */
  directoriesLabel?: string;

  /** Lead paragraph under "What does a … marketing agency do?". */
  answerLead: string;
  /** Optional extra fact row (market size, seasonality, ticket value). */
  marketFact?: { label: string; value: string };
  /** Value of the "Who it's for" fact row, minus the trailing industries link. */
  whoItsFor: string;

  /** e.g. "Where drivers actually look". */
  mapEyebrow: string;
  mapIntro: string;
  /** Query rendered in the geo-grid card, e.g. "tow truck near me". */
  mapQuery: string;

  foundationDesc: string;
  growthDesc: string;
  authorityDesc: string;
  /** Sentence under the pricing grid, after "Custom WordPress design for …". */
  webDesignHref: string;

  processIntro: string;

  faqs: FaqItem[];

  finalHeading: string;
  finalLead: string;

  formBusinessPlaceholder: string;

  knowsAbout: string[];
  /** Answer text for the "How much does … cost?" schema question. */
  costAnswer: string;
  /** Answer text for the "What does a … marketing agency do?" schema question. */
  answerSchema: string;
};

function stripTags(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function ticker(specialists: string) {
  return [
    "<span><b>700+</b> Google Business Profiles reinstated &amp; verified</span>",
    "<span>★ <b>5.0</b> rating on Clutch</span>",
    "<span>No long-term contracts</span>",
    "<span>US-based team</span>",
    "<span>Exclusive leads — never shared</span>",
    `<span>${specialists}</span>`,
  ].join("");
}

const TRUSTBAR_HTML = `<div class="trustbar"><div class="wrap trustbar-in">
<div class="stat"><div class="n">700<span class="u">+</span></div><div class="l">GBP profiles reinstated &amp; verified</div></div>
<div class="stat"><div class="n">5.0<span class="u">★</span></div><div class="l">Average client rating</div></div>
<div class="stat"><div class="n">20<span class="u">+</span></div><div class="l">Local service niches served</div></div>
<div class="stat"><div class="n">US<span class="u">-based</span></div><div class="l">Team, no offshore guesswork</div></div>
</div></div>`;

const MAP_VIZ_HTML = `<div class="mapviz">
<svg class="map-bg" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<rect width="400" height="320" fill="#eef2f7"/>
<path d="M0 70 H400 M0 150 H400 M0 230 H400 M90 0 V320 M200 0 V320 M310 0 V320" stroke="#dbe2ea" stroke-width="2"/>
<path d="M-20 250 C80 200 140 280 240 210 S380 230 430 180" stroke="#cfe8d6" stroke-width="14" fill="none" opacity=".7"/>
<rect x="150" y="120" width="36" height="30" fill="#e2e8f0"/><rect x="220" y="60" width="44" height="34" fill="#e2e8f0"/><rect x="60" y="180" width="40" height="28" fill="#e2e8f0"/><rect x="300" y="160" width="38" height="32" fill="#e2e8f0"/>
</svg>
<div class="pins">
<span class="pin top" ><b>1</b></span>
<span class="pin top" ><b>1</b></span>
<span class="pin mid" ><b>3</b></span>
<span class="pin top" ><b>1</b></span>
<span class="pin top" ><b>2</b></span>
<span class="pin top" ><b>1</b></span>
<span class="pin mid" ><b>4</b></span>
<span class="pin top" ><b>1</b></span>
<span class="pin low" ><b>9</b></span>
<span class="pin top" ><b>2</b></span>
<span class="pin top" ><b>1</b></span>
<span class="pin mid" ><b>5</b></span>
</div>
</div>`;

function heroHtml(c: IndustryMarketingConfig) {
  return `<span class="eyebrow">${c.eyebrow}</span>
<h1>The <span class="hl">${c.keyword}</span> ${c.h1Tail}</h1>
<p class="hero-lead">${c.heroLead}</p>
<div class="hero-pills">
<span class="pill">${CHECK_SVG} Local SEO &amp; Map Pack</span>
<span class="pill">${CHECK_SVG} Google Ads / PPC</span>
<span class="pill">${CHECK_SVG} Social Media</span>
<span class="pill">${CHECK_SVG} Lead Generation</span>
<span class="pill">${CHECK_SVG} Backlinks &amp; Citations</span>
</div>
<div class="hero-actions">
<a class="btn btn-orange" href="#industry-audit">Get My Free Marketing Audit</a>
<a class="btn btn-ghost" href="${PHONE_HREF}">${PHONE_SVG} ${PHONE_DISPLAY}</a>
</div>
<div class="hero-trust">
<span><span class="stars">★★★★★</span> <b>5.0</b> client rating</span>
<span><b>700+</b> profiles reinstated</span>
</div>`;
}

function contentHtml(c: IndustryMarketingConfig) {
  const problems = c.problems
    .map(
      (p) =>
        `<div class="prob"><div class="ic">${PROBLEM_ICONS[p.icon]}</div><h3>${p.title}</h3><p>${p.body}</p></div>`,
    )
    .join("\n");

  const facts = [
    `<div class="afact"><span class="ak">What it includes</span><span class="av">Local SEO, Google Business Profile &amp; Map Pack optimization, Google Ads / PPC, social media marketing, lead generation, backlinks &amp; local citations, and website design.</span></div>`,
    `<div class="afact"><span class="ak">Typical cost</span><span class="av">Most ${c.industry} marketing retainers range from $550 to $1,700 per month. Custom WordPress websites start at $900. Zonic Media works month-to-month with no long-term contracts.</span></div>`,
    `<div class="afact"><span class="ak">How long results take</span><span class="av">Google Ads can generate qualified ${c.industry} leads within the first weeks. Local SEO and Google Map Pack ranking typically build over three to six months.</span></div>`,
    c.marketFact
      ? `<div class="afact"><span class="ak">${c.marketFact.label}</span><span class="av">${c.marketFact.value}</span></div>`
      : "",
    `<div class="afact"><span class="ak">Who it's for</span><span class="av">${c.whoItsFor} See all the <a class="ima-inline-link" href="/industries">industries we serve</a>.</span></div>`,
  ]
    .filter(Boolean)
    .join("\n");

  const faqs = c.faqs
    .map(
      (f, i) =>
        `<details class="faq" name="ima-faq"${i === 0 ? " open" : ""}><summary>${f.q}<span class="x"></span></summary><div class="a">${f.a}</div></details>`,
    )
    .join("\n");

  return `<section class="section"><div class="wrap">
<div class="s-head">
<span class="eyebrow">The ${c.industry} marketing problem</span>
<h2>Why ${c.businesses} Lose Nearby ${c.customers}</h2>
<p>${c.problemIntro}</p>
</div>
<div class="prob-grid">
${problems}
</div>
</div></section>
<section class="section navy"><div class="wrap">
<div class="s-head">
<span class="eyebrow">Everything under one roof</span>
<h2>The Complete ${c.industry} Marketing System</h2>
<p>Not six vendors and six invoices. One team running every channel that brings ${c.businesses} ${c.jobsNoun} — a <a class="ima-inline-link" href="/services">full-service marketing</a> approach built around your trade, not a generic playbook.</p>
</div>
<div class="svc-grid">
<div class="svc"><div class="ic">${SVC_ICONS.seo}</div><h3>Local SEO</h3><p>${c.localSeoBlurb}</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.map}</div><h3>Google Map Pack Ranking</h3><p>Google Business Profile optimization, geo-grid tracking, and review systems to land your business in the top-3 local results ${c.customers} actually click.</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.ads}</div><h3>Google Ads / PPC</h3><p>${c.adsBlurb}</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.social}</div><h3>Social Media Marketing</h3><p>Consistent, on-brand content and paid social that keeps your ${c.business} visible and credible where local ${c.customers} scroll.</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.leads}</div><h3>Lead Generation</h3><p>Conversion-built landing pages, call tracking, and lead capture so the traffic we earn turns into booked, trackable work — never shared lists.</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.links}</div><h3>Backlinks &amp; Local Citations</h3><p>Authority-building links plus accurate, consistent citations across the directories and ${c.directoriesLabel ?? `${c.industry} platforms`} Google checks to rank you.</p></div>
<div class="svc"><div class="ic">${SVC_ICONS.web}</div><h3>Website Design &amp; Development</h3><p>Custom WordPress <a class="ima-inline-link" href="${c.webDesignHref}">website design</a> built for ${c.businesses} — fast, mobile-first, and SEO-ready from day one to turn visits into ${c.jobsNoun}. From $900.</p></div>
</div>
</div></section>
<section class="section"><div class="wrap">
<div class="answer-wrap">
<div class="answer-main">
<span class="eyebrow">The short answer</span>
<h2>What Does a ${c.industry} Marketing Agency Do?</h2>
<p class="answer-lead">${c.answerLead}</p>
<div class="answer-facts">
${facts}
</div>
</div>
</div>
</div></section>
<section class="section alt"><div class="wrap map-wrap">
<div class="map-copy">
<span class="eyebrow">${c.mapEyebrow}</span>
<h2>Get into the Top 3 of the Google Map Pack</h2>
<p>${c.mapIntro}</p>
<div class="hero-pills">
<span class="pill">${CHECK_SVG} Geo-grid rank tracking</span>
<span class="pill">${CHECK_SVG} Review generation</span>
<span class="pill">${CHECK_SVG} Citation cleanup</span>
</div>
</div>
<div class="map-card">
<div class="map-q">${SEARCH_SVG} ${c.mapQuery}<span class="live">live grid</span></div>
${MAP_VIZ_HTML}
<div class="map-legend"><span><i></i> Top 3 — you're winning</span><span><i></i> 4–10 — climbing</span><span><i></i> Outside top 10</span></div>
</div>
</div></section>
<section class="section"><div class="wrap">
<div class="s-head center">
<span class="eyebrow">Simple, transparent pricing</span>
<h2>${c.industryTitle} Marketing Plans</h2>
<p>Month-to-month. No long-term contracts, no setup fees. Pick the level of growth you're ready for.</p>
</div>
<div class="price-grid">
<div class="price">
<div class="pname">Foundation</div>
<div class="amt">$550<span>/mo</span></div>
<p class="pdesc">${c.foundationDesc}</p>
<ul>
<li>${CHECK_SVG} Google Business Profile optimization</li>
<li>${CHECK_SVG} Local SEO &amp; on-page foundation</li>
<li>${CHECK_SVG} Citation building &amp; cleanup (NAP)</li>
<li>${CHECK_SVG} Review generation system</li>
<li>${CHECK_SVG} Google Map Pack setup</li>
<li>${CHECK_SVG} On-page keyword targeting</li>
<li>${CHECK_SVG} Monthly performance reporting</li>
</ul>
<a class="btn" href="#industry-audit">Start with Foundation</a>
</div>
<div class="price feat">
<div class="tag">Most popular</div>
<div class="pname">Growth</div>
<div class="amt">$1,250<span>/mo</span></div>
<p class="pdesc">${c.growthDesc}</p>
<ul>
<li>${CHECK_SVG} Everything in Foundation</li>
<li>${CHECK_SVG} Google Ads / PPC management</li>
<li>${CHECK_SVG} Geo-grid Map Pack rank tracking</li>
<li>${CHECK_SVG} Backlink &amp; authority building</li>
<li>${CHECK_SVG} Conversion landing pages</li>
<li>${CHECK_SVG} Call tracking &amp; lead capture</li>
<li>${CHECK_SVG} Social media management</li>
<li>${CHECK_SVG} Content &amp; blog publishing</li>
<li>${CHECK_SVG} Competitor monitoring</li>
</ul>
<a class="btn" href="#industry-audit">Start with Growth</a>
</div>
<div class="price">
<div class="pname">Authority</div>
<div class="amt">$1,700<span>/mo</span></div>
<p class="pdesc">${c.authorityDesc}</p>
<ul>
<li>${CHECK_SVG} Everything in Growth</li>
<li>${CHECK_SVG} Multi-location / wider service area</li>
<li>${CHECK_SVG} Aggressive content &amp; link program</li>
<li>${CHECK_SVG} Paid social campaigns (Meta)</li>
<li>${CHECK_SVG} Advanced conversion-rate optimization</li>
<li>${CHECK_SVG} Email &amp; review-reactivation funnels</li>
<li>${CHECK_SVG} Dedicated account manager</li>
<li>${CHECK_SVG} Priority support &amp; strategy calls</li>
</ul>
<a class="btn" href="#industry-audit">Start with Authority</a>
</div>
</div>
<p>Need a website too? Custom WordPress design for ${c.businesses} starts at <b>$900</b> — built to convert and SEO-ready from day one. <a href="#industry-audit">Ask about web design →</a></p>
</div></section>
<section class="section alt"><div class="wrap">
<div class="s-head">
<span class="eyebrow">How we work</span>
<h2>A Clear Plan Before We Build Anything</h2>
<p>${c.processIntro}</p>
</div>
<div class="proc-grid">
<div class="proc"><div class="num">01</div><h3>Audit the Gaps</h3><p>We review your profile, rankings, website, and ad opportunities to find the fastest routes to more ${c.industry} leads.</p></div>
<div class="proc"><div class="num">02</div><h3>Build the Plan</h3><p>A clear roadmap with priorities, timelines, and the metrics that actually define success for your business.</p></div>
<div class="proc"><div class="num">03</div><h3>Launch the Work</h3><p>We ship the pages, profile fixes, campaigns, and tracking — moving from strategy into measurable execution.</p></div>
<div class="proc"><div class="num">04</div><h3>Grow &amp; Report</h3><p>Ongoing optimization and plain-English reporting that shows exactly where your leads and dollars come from.</p></div>
</div>
</div></section>
<section class="section"><div class="wrap">
<div class="s-head center">
<span class="eyebrow">Common questions</span>
<h2>What ${c.owners} Ask Us</h2>
</div>
<div class="faq-list">
${faqs}
</div>
</div></section>`;
}

function finalHtml(c: IndustryMarketingConfig) {
  return `<section class="final"><div class="wrap final-in">
<h2>${c.finalHeading}</h2>
<p>${c.finalLead}</p>
<div class="final-actions">
<a class="btn btn-orange" href="#industry-audit">Get My Free Marketing Audit</a>
<a class="btn btn-ghost" href="${PHONE_HREF}">${PHONE_SVG} ${PHONE_DISPLAY}</a>
</div>
<div class="final-fine">
<span>${STAR_SVG} Free, no-obligation audit</span>
<span>${STAR_SVG} No long-term lock-in</span>
<span>${STAR_SVG} Based in Dover, DE · serving the US</span>
</div>
</div></section>`;
}

function footerHtml(c: IndustryMarketingConfig) {
  return `<footer class="foot"><div class="wrap">
<div class="foot-grid">
<div>
<a class="brand" href="${SITE}"><span class="dot"></span>Zonic Media</a>
<p>Results-driven digital marketing agency in Dover, Delaware providing local SEO, Google Business Profile optimization, Google Ads, web design, and lead generation for ${c.businesses} across the United States.</p>
</div>
<div><h4>Services</h4><ul>
<li><a href="${SITE}/services/local-seo-for-home-services">Local SEO</a></li>
<li><a href="${SITE}/services/google-ads">Google Ads (PPC)</a></li>
<li><a href="${SITE}/services/gmb-reinstatement-help">Google My Business</a></li>
<li><a href="${SITE}/services/web-design">Web Design</a></li>
</ul></div>
<div><h4>Company</h4><ul>
<li><a href="${SITE}/about">About Us</a></li>
<li><a href="${SITE}/blog">Blog</a></li>
<li><a href="${SITE}/contact-us">Contact Us</a></li>
<li><a href="${SITE}/services">All Industries</a></li>
</ul></div>
<div><h4>Get in Touch</h4><ul>
<li><a href="${PHONE_HREF}">${PHONE_DISPLAY}</a></li>
<li><a href="mailto:contact@zonicllc.com">contact@zonicllc.com</a></li>
<li>8 The Green, STE B<br>Dover, DE 19901</li>
<li>Mon–Fri · 9 AM–5 PM</li>
</ul></div>
</div>
<div class="foot-bot">
<span>© 2026 Zonic Media LLC. All rights reserved.</span>
<span><a href="${SITE}/legal/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp; <a href="${SITE}/legal/terms-conditions">Terms &amp; Conditions</a></span>
</div>
</div></footer>`;
}

function schemas(c: IndustryMarketingConfig) {
  const url = `${SITE}/services/${c.slug}`;

  return [
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `Zonic Media — ${c.eyebrow}`,
      url,
      description: c.description,
      telephone: "+1-302-726-9736",
      priceRange: "$550–$1700/mo",
      areaServed: "United States",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8 The Green, STE B",
        addressLocality: "Dover",
        addressRegion: "DE",
        postalCode: "19901",
        addressCountry: "US",
      },
      knowsAbout: c.knowsAbout,
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What does a ${c.industry} marketing agency do?`,
          acceptedAnswer: { "@type": "Answer", text: c.answerSchema },
        },
        {
          "@type": "Question",
          name: `How much does ${c.industry} marketing cost?`,
          acceptedAnswer: { "@type": "Answer", text: c.costAnswer },
        },
        ...c.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.schemaA ?? stripTags(f.a),
          },
        })),
      ],
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: `${SITE}/services`,
        },
        { "@type": "ListItem", position: 3, name: c.eyebrow, item: url },
      ],
    }),
  ];
}

export type IndustryMarketingBundle = {
  page: IndustryMarketingPageData;
  metadata: Metadata;
};

export function buildIndustryMarketingPage(
  c: IndustryMarketingConfig,
): IndustryMarketingBundle {
  const run = ticker(c.specialists);

  return {
    page: {
      slug: c.slug,
      title: c.title,
      description: c.description,
      visualCopy: {
        industry: c.industry,
        industryTitle: c.industryTitle,
        business: c.business,
        jobsNoun: c.jobsNoun,
        mapQuery: c.mapQuery,
      },
      tickerHtml: `${run}\n${run}`,
      /* Headings here are assembled from lowercase config values
         (c.industry = "appliance repair", c.businesses = "appliance repair
         companies"), so the assembled HTML is title-cased after the fact —
         wrapping each interpolation individually would get clause position
         wrong. See shared/titleCase.ts. */
      heroHtml: titleCaseHeadings(heroHtml(c)),
      trustbarHtml: TRUSTBAR_HTML,
      contentHtml: titleCaseHeadings(contentHtml(c)),
      finalHtml: titleCaseHeadings(finalHtml(c)),
      footerHtml: titleCaseHeadings(footerHtml(c)),
      schemas: schemas(c),
      form: {
        title: `Get your free ${c.industry} marketing audit`,
        subtitle:
          "See exactly where you're losing leads — no obligation, takes a minute.",
        labels: [
          "Full name",
          "Phone number",
          "Email",
          "Business name",
          "What do you want to grow?",
        ],
        placeholders: [
          "Your name",
          "(000) 000-0000",
          "you@business.com",
          c.formBusinessPlaceholder,
        ],
        // These five must stay in sync with GOAL_TO_SERVICE in
        // IndustryMarketingLeadForm — /api/leads rejects unmapped services.
        serviceOptions: [
          "More calls & booked jobs",
          "Rank in Google Map Pack",
          "Google Ads / PPC leads",
          "New website",
          "Everything — full marketing",
        ],
        submitLabel: "Request My Free Audit",
        finePrint:
          "We'll review your profile, rankings & site, then send your fastest next step.",
      },
    },
    metadata: {
      title: { absolute: c.title },
      description: c.description,
      keywords: c.keywords,
      alternates: { canonical: `/services/${c.slug}` },
      openGraph: {
        images: [
          {
            url: "/images/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
          },
        ],
        title: c.title,
        description: c.description,
        url: `/services/${c.slug}`,
        type: "website",
      },
    },
  };
}
