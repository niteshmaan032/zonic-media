import type { IndustryMarketingPageData } from "@/app/components/IndustryMarketingPage";

// Solar industry landing page. Follows the same data shape as the 13
// generated industry marketing pages but lives in code (not the generated
// JSON) so re-running scripts/import-industry-landing-pages.mjs never
// overwrites it. Panel-blue + sun-gold theme comes from ima-solar
// (solarMarketing.css).

const CHECK_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';

const PHONE_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

const STAR_SVG =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

const tickerRun =
  "<span><b>700+</b> Google Business Profiles optimized</span><span>★ <b>5.0</b> rating on Clutch</span><span>No long-term contracts</span><span>US-based team</span><span>Exclusive leads — never shared</span><span>Solar specialists</span>";

export const solarMarketingPage: IndustryMarketingPageData = {
  slug: "solar-marketing-agency",
  title: "Solar Marketing Agency | Local SEO & Ads | Zonic Media",
  description:
    "Solar marketing agency for US installers. Local SEO, Google Map Pack ranking, Google Ads & exclusive solar leads for installs & battery storage. Free audit.",
  // ima-solar now only scopes the sp-band photo styles — the palette is the
  // shared homepage blue (no accentColor override).
  themeClass: "ima-solar",
  visualCopy: {
    industry: "solar",
    industryTitle: "Solar",
    business: "solar company",
    jobsNoun: "booked consultations",
    mapQuery: "solar installers near me",
  },
  tickerHtml: `${tickerRun}\n${tickerRun}`,
  heroHtml: `<span class="eyebrow">Solar Marketing Agency</span>
<h1>The <span class="hl">Solar Marketing Agency</span> That Keeps Your Install Crews Busy.</h1>
<p class="hero-lead">Local SEO, Google Ads, social, and lead generation built for solar companies — so homeowners searching for solar installers near them find your company first. Exclusive solar leads, never resold to competitors.</p>
<div class="hero-pills">
<span class="pill">${CHECK_SVG} Local SEO &amp; Map Pack</span>
<span class="pill">${CHECK_SVG} Google Ads / PPC</span>
<span class="pill">${CHECK_SVG} Social Media</span>
<span class="pill">${CHECK_SVG} Lead Generation</span>
<span class="pill">${CHECK_SVG} Backlinks &amp; Citations</span>
</div>
<div class="hero-actions">
<a class="btn btn-orange" href="#industry-audit">Get My Free Marketing Audit</a>
<a class="btn btn-ghost" href="tel:+13027269736">${PHONE_SVG} (302) 726-9736</a>
</div>
<div class="hero-trust">
<span><span class="stars">★★★★★</span> <b>5.0</b> client rating</span>
<span><b>700+</b> profiles optimized</span>
</div>`,
  trustbarHtml: `<div class="trustbar"><div class="wrap trustbar-in">
<div class="stat"><div class="n">700<span class="u">+</span></div><div class="l">GBP profiles optimized</div></div>
<div class="stat"><div class="n">5.0<span class="u">★</span></div><div class="l">Average client rating</div></div>
<div class="stat"><div class="n">20<span class="u">+</span></div><div class="l">Local service niches served</div></div>
<div class="stat"><div class="n">US<span class="u">-based</span></div><div class="l">Team, no offshore guesswork</div></div>
</div></div>`,
  contentHtml: `<figure class="sp-shot sp-band">
<img class="sp-shot-img" src="/images/solar-marketing/solar-marketing-dashboard.webp" alt="Solar company website, local visibility, reviews, advertising, and exclusive consultation leads displayed in an installer office" width="1915" height="821" loading="eager" fetchpriority="high" />
</figure>
<section class="section"><div class="wrap">
<div class="s-head">
<span class="eyebrow">The solar marketing problem</span>
<h2>Why Solar Companies Lose Ready-to-Buy Homeowners</h2>
<p>2026 is a harder market: the federal residential tax credit is gone, buyers research longer, and shared lead marketplaces resell the same homeowner to five installers. The companies still winning own their local search results — and their reputation.</p>
</div>
<div class="prob-grid">
<div class="prob"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Buried Below Other Installers</h3><p>Homeowners shortlist the top-3 results for &quot;solar companies near me&quot; on Google Maps. Ranking lower means losing panel installs and battery projects to the installer across town.</p></div>
<div class="prob"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3>Skeptical Homeowners</h3><p>Nearly half of homeowners say it&#x27;s hard to tell real installers from solar scams. Thin reviews, no local proof, and a weak profile send your best prospects to bigger brands.</p></div>
<div class="prob"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div><h3>Shared Leads &amp; Wasted Spend</h3><p>Marketplace leads get resold to five competitors, and without tight <a class="ima-inline-link" href="/services/google-ads">Google Ads management</a> your budget goes to renters, DIY researchers, and out-of-area clicks instead of qualified homeowners.</p></div>
</div>
</div></section>
<section class="section navy"><div class="wrap">
<div class="s-head">
<span class="eyebrow">Everything under one roof</span>
<h2>The Complete Solar Marketing System</h2>
<p>Not six vendors and six invoices. One team running every channel that brings solar companies booked consultations — a <a class="ima-inline-link" href="/services">full-service marketing</a> approach built around your trade, not a generic playbook.</p>
</div>
<div class="svc-grid">
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Local SEO</h3><p>Service-area pages by city and utility territory for solar panel installation, battery storage, and solar repair, plus the technical foundation of <a class="ima-inline-link" href="/services/local-seo-for-home-services">local SEO for home services</a> that gets your company ranking for searches that turn into consultations.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Google Map Pack Ranking</h3><p>Google Business Profile optimization, geo-grid tracking, and review systems to land your company in the top-3 local results homeowners actually click.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg></div><h3>Google Ads / PPC</h3><p>High-intent campaigns for &quot;solar installers near me&quot; and financing searches, managed for cost-per-qualified-lead — so every dollar brings exclusive solar leads, not resold marketplace names.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg></div><h3>Social Media Marketing</h3><p>Real install photos, customer stories, and paid social that build the local trust skeptical solar buyers need before they book a consultation.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3>Lead Generation</h3><p>Conversion-built landing pages, call tracking, and lead capture so the traffic we earn turns into booked, trackable consultations — never shared lists.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><h3>Backlinks &amp; Local Citations</h3><p>Authority-building links plus accurate, consistent citations across the directories and home-service platforms Google checks to rank you.</p></div>
<div class="svc"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 7h20M6 5h.01M9 5h.01"/><path d="M8 21h8M12 17v4"/></svg></div><h3>Website Design &amp; Development</h3><p>Custom WordPress <a class="ima-inline-link" href="/services/web-design">website design services</a> built for solar companies — fast, mobile-first, and SEO-ready from day one to turn visits into booked consultations. From $900.</p></div>
</div>
</div></section>
<section class="section"><div class="wrap">
<div class="answer-wrap">
<div class="answer-main">
<span class="eyebrow">The short answer</span>
<h2>What Does a Solar Marketing Agency Do?</h2>
<p class="answer-lead">A solar marketing agency helps solar companies get found online and turn local searches — solar panel installation, battery storage, solar repair, and financing questions — into booked consultations. It combines local SEO, Google Business Profile and Map Pack optimization, Google Ads, social media, lead generation, backlinks and citations, and website design into one managed system — and when a listing goes dark, <a class="ima-inline-link" href="/services/gmb-reinstatement-help">recovering a suspended Google Business Profile</a> — so owners can focus on installs while leads come in.</p>
<div class="answer-facts">
<div class="afact"><span class="ak">What it includes</span><span class="av">Local SEO, Google Business Profile &amp; Map Pack optimization, Google Ads / PPC, social media marketing, lead generation, backlinks &amp; local citations, and website design.</span></div>
<div class="afact"><span class="ak">Typical cost</span><span class="av">Most solar marketing retainers range from $550 to $1,700 per month. Custom WordPress websites start at $900. Zonic Media works month-to-month with no long-term contracts.</span></div>
<div class="afact"><span class="ak">How long results take</span><span class="av">Google Ads can generate qualified solar leads within the first weeks. Local SEO and Google Map Pack ranking typically build over three to six months.</span></div>
<div class="afact"><span class="ak">The 2026 shift</span><span class="av">The 30% federal residential tax credit ended December 31, 2025 for homeowner-purchased systems, while leases and PPAs keep incentives through 2027. Buyers now research harder — &quot;is solar still worth it&quot; — and the installers that explain financing, payback, and battery storage clearly, and show up first with local proof, win them.</span></div>
<div class="afact"><span class="ak">Who it's for</span><span class="av">Residential and commercial solar installers, battery storage providers, and solar repair companies in the United States that want more consultations and exclusive leads — not shared marketplace lists. See all the <a class="ima-inline-link" href="/industries">industries we serve</a>.</span></div>
</div>
</div>
</div>
</div></section>
<figure class="sp-shot sp-band">
<img class="sp-shot-img" src="/images/solar-marketing/solar-map-pack-rankings.webp" alt="Local search geo-grid, top-three map rankings, reviews, citations, and consultation calls displayed for a solar installer" width="1915" height="821" loading="lazy" decoding="async" />
</figure>
<section class="section alt"><div class="wrap map-wrap">
<div class="map-copy">
<span class="eyebrow">Where homeowners actually look</span>
<h2>Get into the Top 3 of the Google Map Pack</h2>
<p>Most solar customers never scroll past the first three map results. We track your rank across a geo-grid of your service area and work every signal — <a class="ima-inline-link" href="/local-seo-google-business-optimization">Google Business Profile optimization</a>, reviews, citations, and links — to move you into the spots that get the calls.</p>
<div class="hero-pills">
<span class="pill">${CHECK_SVG} Geo-grid rank tracking</span>
<span class="pill">${CHECK_SVG} Review generation</span>
<span class="pill">${CHECK_SVG} Citation cleanup</span>
</div>
</div>
<div class="map-card">
<div class="map-q"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg> solar companies near me<span class="live">live grid</span></div>
<div class="mapviz">
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
</div>
<div class="map-legend"><span><i></i> Top 3 — you're winning</span><span><i></i> 4–10 — climbing</span><span><i></i> Outside top 10</span></div>
</div>
</div></section>
<section class="section"><div class="wrap">
<div class="s-head center">
<span class="eyebrow">Simple, transparent pricing</span>
<h2>Solar Marketing Plans</h2>
<p>Month-to-month. No long-term contracts, no setup fees. Pick the level of growth you're ready for.</p>
</div>
<div class="price-grid">
<div class="price">
<div class="pname">Foundation</div>
<div class="amt">$550<span>/mo</span></div>
<p class="pdesc">Get found locally and start turning solar searches into consultations.</p>
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
<p class="pdesc">Rank higher and add paid leads to fill your install calendar.</p>
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
<p class="pdesc">Dominate your service area across every channel that matters.</p>
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
<p>Need a website too? Custom WordPress design for solar companies starts at <b>$900</b> — built to convert and SEO-ready from day one. <a href="#industry-audit">Ask about web design →</a></p>
</div></section>
<figure class="sp-shot sp-band">
<img class="sp-shot-img" src="/images/solar-marketing/solar-campaign-workflow.webp" alt="Four-stage solar marketing workflow covering audits, strategy, website content, local SEO, advertising, lead tracking, and reporting" width="1915" height="821" loading="lazy" decoding="async" />
</figure>
<section class="section alt"><div class="wrap">
<div class="s-head">
<span class="eyebrow">How we work</span>
<h2>A Clear Plan Before We Build Anything</h2>
<p>Every solar engagement starts with your goals and the fastest route to more booked installs — then we ship the work, not a slide deck.</p>
</div>
<div class="proc-grid">
<div class="proc"><div class="num">01</div><h3>Audit the Gaps</h3><p>We review your profile, rankings, website, and ad opportunities to find the fastest routes to more solar leads.</p></div>
<div class="proc"><div class="num">02</div><h3>Build the Plan</h3><p>A clear roadmap with priorities, timelines, and the metrics that actually define success for your company.</p></div>
<div class="proc"><div class="num">03</div><h3>Launch the Work</h3><p>We ship the pages, profile fixes, campaigns, and tracking — moving from strategy into measurable execution.</p></div>
<div class="proc"><div class="num">04</div><h3>Grow &amp; Report</h3><p>Ongoing optimization and plain-English reporting that shows exactly where your leads and dollars come from.</p></div>
</div>
</div></section>
<figure class="sp-shot sp-band">
<img class="sp-shot-img" src="/images/solar-marketing/solar-marketing-results.webp" alt="Solar marketing report showing exclusive leads, booked site surveys, signed projects, rankings, reviews, and a filled project calendar" width="1915" height="821" loading="lazy" decoding="async" />
</figure>
<section class="section"><div class="wrap">
<div class="s-head center">
<span class="eyebrow">Common questions</span>
<h2>What Solar Company Owners Ask Us</h2>
</div>
<div class="faq-list">
<details class="faq" name="ima-faq" open><summary>How fast can a solar company get more leads?<span class="x"></span></summary><div class="a">Google Ads can bring qualified consultations within the first weeks of launch. Local SEO and Map Pack ranking build over three to six months and lower your long-term cost per booked install.</div></details>
<details class="faq" name="ima-faq"><summary>Is solar marketing still worth it after the federal tax credit expired?<span class="x"></span></summary><div class="a">Yes — arguably more than ever. The 30% residential credit ended December 31, 2025 for purchased systems, so fewer homeowners are casually shopping and the ones still searching are serious. Leases and PPAs keep incentives through 2027, battery storage demand keeps growing, and rising utility rates keep solar attractive in high-rate states. The installers that stay visible win a bigger share of a more selective market.</div></details>
<details class="faq" name="ima-faq"><summary>Are the solar leads exclusive?<span class="x"></span></summary><div class="a">Yes. We never share or resell leads — unlike marketplace platforms that sell the same homeowner to five installers. Everything from your ads, website, and profile comes only to your company.</div></details>
<details class="faq" name="ima-faq"><summary>Do you handle Google Business Profile suspensions?<span class="x"></span></summary><div class="a">Yes. We optimize your profile to rank and manage reinstatement if it&#x27;s suspended — we&#x27;ve recovered 700+ profiles for local businesses.</div></details>
<details class="faq" name="ima-faq"><summary>Do you also work with roofing companies?<span class="x"></span></summary><div class="a">Yes. Solar and roofing go together — many installers replace roofs before mounting panels, and many roofers sell solar. We run a dedicated <a class="ima-inline-link" href="/services/roofing-marketing-agency">roofing marketing</a> program too, so one team covers everything you offer.</div></details>
<details class="faq" name="ima-faq"><summary>Do you require long-term contracts?<span class="x"></span></summary><div class="a">No. We don't lock you into long-term contracts. We earn the relationship month to month by delivering results — most solar clients stay because the leads keep coming, not because they're tied to us.</div></details>
<details class="faq" name="ima-faq"><summary>Do you only work with businesses in Delaware?<span class="x"></span></summary><div class="a">No. We're based in Dover, Delaware with deep roots in the Mid-Atlantic, but we serve solar companies across the United States. Our work is remote-first, so your location is never a barrier.</div></details>
</div>
</div></section>`,
  finalHtml: `<section class="final"><div class="wrap final-in">
<h2>Ready to Fill Your Install Calendar?</h2>
<p>Tell us where you want to grow and we'll come back with the fastest next step — a free audit of your profile, rankings, and website, with no obligation.</p>
<div class="final-actions">
<a class="btn btn-orange" href="#industry-audit">Get My Free Marketing Audit</a>
<a class="btn btn-ghost" href="tel:+13027269736">${PHONE_SVG} (302) 726-9736</a>
</div>
<div class="final-fine">
<span>${STAR_SVG} Free, no-obligation audit</span>
<span>${STAR_SVG} No long-term lock-in</span>
<span>${STAR_SVG} Based in Dover, DE · serving the US</span>
</div>
</div></section>`,
  footerHtml: `<footer class="foot"><div class="wrap">
<div class="foot-grid">
<div>
<a class="brand" href="https://www.zonicllc.com"><span class="dot"></span>Zonic Media</a>
<p>Results-driven digital marketing agency in Dover, Delaware providing local SEO, Google Business Profile optimization, Google Ads, web design, and lead generation for solar companies across the United States.</p>
</div>
<div><h4>Services</h4><ul>
<li><a href="https://www.zonicllc.com/services/local-seo-for-home-services">Local SEO</a></li>
<li><a href="https://www.zonicllc.com/services/google-ads">Google Ads (PPC)</a></li>
<li><a href="https://www.zonicllc.com/services/gmb-reinstatement-help">Google My Business</a></li>
<li><a href="https://www.zonicllc.com/services/web-design">Web Design</a></li>
</ul></div>
<div><h4>Company</h4><ul>
<li><a href="https://www.zonicllc.com/about">About Us</a></li>
<li><a href="https://www.zonicllc.com/blog">Blog</a></li>
<li><a href="https://www.zonicllc.com/contact-us">Contact Us</a></li>
<li><a href="https://www.zonicllc.com/services">All Industries</a></li>
</ul></div>
<div><h4>Get in Touch</h4><ul>
<li><a href="tel:+13027269736">(302) 726-9736</a></li>
<li><a href="mailto:contact@zonicllc.com">contact@zonicllc.com</a></li>
<li>8 The Green, STE B<br>Dover, DE 19901</li>
<li>Mon–Fri · 9 AM–5 PM</li>
</ul></div>
</div>
<div class="foot-bot">
<span>© 2026 Zonic Media LLC. All rights reserved.</span>
<span><a href="https://www.zonicllc.com/legal/privacy-policy">Privacy Policy</a> &nbsp;·&nbsp; <a href="https://www.zonicllc.com/legal/terms-conditions">Terms &amp; Conditions</a></span>
</div>
</div></footer>`,
  schemas: [
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Zonic Media — Solar Marketing Agency",
      url: "https://www.zonicllc.com/services/solar-marketing-agency",
      description:
        "Solar marketing agency for US installers. Local SEO, Google Map Pack ranking, Google Ads & exclusive solar leads for installs & battery storage. Free audit.",
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
      knowsAbout: [
        "Solar Company Local SEO",
        "Solar Google Ads",
        "Solar Lead Generation",
        "Solar Panel Installation Marketing",
        "Battery Storage Marketing",
        "Google Business Profile Optimization",
        "Google Map Pack Ranking",
        "Social Media Marketing",
        "Link Building & Local Citations",
        "Solar Website Design & Development",
      ],
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a solar marketing agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A solar marketing agency helps solar companies get found online and turn local searches — solar panel installation, battery storage, solar repair, and financing questions — into booked consultations. It combines local SEO, Google Business Profile and Map Pack optimization, Google Ads, social media marketing, lead generation, backlinks and local citations, and website design into one managed system.",
          },
        },
        {
          "@type": "Question",
          name: "How much does solar marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most solar marketing retainers range from $550 to $1,700 per month depending on the channels and competition. At Zonic Media, plans start at $550/mo (Foundation), $1,250/mo (Growth), and $1,700/mo (Authority). Custom WordPress websites start at $900. All plans are month-to-month with no long-term contracts.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can a solar company get more leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Ads can bring qualified consultations within the first weeks of launch. Local SEO and Map Pack ranking build over three to six months and lower your long-term cost per booked install.",
          },
        },
        {
          "@type": "Question",
          name: "Is solar marketing still worth it after the federal tax credit expired?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The 30% federal residential tax credit ended December 31, 2025 for homeowner-purchased systems, so the homeowners still searching are serious buyers. Leases and PPAs keep incentives through 2027, battery storage demand keeps growing, and rising utility rates keep solar attractive in high-rate states. The installers that stay visible win a bigger share of a more selective market.",
          },
        },
        {
          "@type": "Question",
          name: "Are the solar leads exclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We never share or resell leads — unlike marketplace platforms that sell the same homeowner to five installers. Everything from your ads, website, and profile comes only to your company.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle Google Business Profile suspensions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We optimize your profile to rank and manage reinstatement if it's suspended — we've recovered 700+ profiles for local businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Do you also work with roofing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Solar and roofing go together — many installers replace roofs before mounting panels, and many roofers sell solar. We run a dedicated roofing marketing program too, so one team covers everything you offer.",
          },
        },
        {
          "@type": "Question",
          name: "Do you require long-term contracts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We work month to month with solar companies and earn the relationship by delivering results, not by locking you into a contract.",
          },
        },
        {
          "@type": "Question",
          name: "Do you only work with businesses in Delaware?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We're based in Dover, Delaware but serve solar companies across the United States. Our work is remote-first.",
          },
        },
      ],
    }),
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.zonicllc.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: "https://www.zonicllc.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Solar Marketing Agency",
          item: "https://www.zonicllc.com/services/solar-marketing-agency",
        },
      ],
    }),
  ],
  form: {
    title: "Get Your Free Solar Marketing Audit",
    subtitle: "See exactly where you're losing leads — no obligation, takes a minute.",
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
      "Your solar company",
    ],
    serviceOptions: [
      "More calls & booked jobs",
      "Rank in Google Map Pack",
      "Google Ads / PPC leads",
      "New website",
      "Everything — full marketing",
    ],
    submitLabel: "Request My Free Audit",
    finePrint: "We'll review your profile, rankings & site, then send your fastest next step.",
  },
};
