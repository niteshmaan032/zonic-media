import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

import "@/app/style/homeInspAgency.css";
import "@/app/style/gbpRealEstate.css";

import GbpRealEstateLeadForm from "@/app/components/GbpRealEstateLeadForm";
import HiaFaqAccordion from "@/app/components/HiaFaqAccordion";
import HashScrollLink from "@/app/components/HashScrollLink";
import ClutchWidget from "@/app/components/ClutchWidget";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  buildBreadcrumbJsonLd,
  buildLocalBusinessJsonLd,
} from "@/shared/seoSchemas";

const PAGE_PATH =
  "/services/google-business-profile-services-real-estate-agents";

export const metadata: Metadata = {
  title: "GBP Services for Real Estate Agents & Brokers",
  description:
    "GBP reinstatement, verification, and management for real estate agents and brokers. Local SEO and real estate website design across FL, TX, CA, NY & AZ. 700+ profiles reinstated.",
  keywords: [
    "Google Business Profile for real estate agents",
    "realtor GBP suspended",
    "real estate GMB reinstatement",
    "Google Business Profile for realtors",
    "real estate agent GBP verification",
    "real estate local SEO",
    "realtor Google Business Profile management",
    "real estate broker Google Business Profile",
    "real estate website design",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title:
      "Google Business Profile Services for Real Estate Agents & Brokers | Zonic Media",
    description:
      "Real estate has the highest GBP suspension rate of any local service category. We reinstate, verify, and manage real estate profiles across FL, TX, CA, NY, AZ.",
    url: PAGE_PATH,
    type: "website",
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Google Business Profile for Real Estate",
    url: PAGE_PATH,
  },
]);

const tickerItems = [
  "Free Real Estate GBP Audit",
  "Suspended? 7–21 Day Reinstatement Timeline",
  "700+ GBPs Reinstated · 5.0 Stars on Clutch",
  "FL · TX · CA · NY · AZ",
  "GBP · Verification · Local SEO · Real Estate Web Design",
];

const trustItems = [
  { num: "700+", label: "GBPs Reinstated & Verified" },
  { num: "5.0 ★", label: "Clutch Rating · 21 Reviews" },
  { num: "7–21", label: "Days Typical Reinstatement" },
  { num: "5", label: "Active states · FL · TX · CA · NY · AZ" },
];

const problemCards = [
  {
    h: "Multi-agent brokerage addresses look like spam to Google.",
    p: "Fifty agents at one office address creates a duplicate-listing pattern Google's algorithms automatically flag. The most active profiles get suspended first.",
  },
  {
    h: "Personal branding habits violate name guidelines.",
    p: "“Top Realtor,” “Luxury Specialist,” city names — all flagged as keyword stuffing the moment a competitor reports the profile. Real estate is the worst category for this.",
  },
  {
    h: "Home-based agents trigger SAB verification confusion.",
    p: "Service-area-business rules say home addresses should be hidden. Many agents leave them visible, generating verification failures, neighbor complaints, and suspensions.",
  },
  {
    h: "Competitor false reporting is endemic in dense markets.",
    p: "Manhattan, Beverly Hills, Miami Beach — every agent in the same submarket competes for the same map pack ranking. False reports compound automatically.",
  },
];

const triggers = [
  {
    num: "TRIGGER 01",
    h: "Keyword-Stuffed Business Name",
    p: "The profile name includes more than the registered legal business name. “Jennifer Park — Top Coral Gables Realtor — Luxury Specialist” violates Google's name guidelines, which require the profile name to match the real-world name on signage and legal documents.",
    fix: "Rebuild the profile name to match the legal / DBA name. Move all keyword-driven positioning to the description, services list, and Q&A. Document the legal name with state licensing records for the appeal.",
  },
  {
    num: "TRIGGER 02",
    h: "Duplicate Profiles at One Brokerage Address",
    p: "Multiple agents at the same brokerage office create profile clusters Google's spam detection automatically flags. The most active profiles — highest review velocity, most clicks — get suspended first. This is the single most common real estate suspension pattern.",
    fix: "Restructure the agent's presence: consolidate to the brokerage profile, or properly differentiate the individual profile with branding documentation, a separate phone, and a distinct service area. The appeal must address the algorithmic flag explicitly.",
  },
  {
    num: "TRIGGER 03",
    h: "Home Address Visible on an SAB Profile",
    p: "Service-area profiles for home-based agents are supposed to hide the home address. Many agents leave it visible while selecting SAB — a configuration that violates Google's rules and generates verification failures, neighbor complaints, and suspension.",
    fix: "Reconfigure the profile to properly hide the home address under SAB rules, or relocate to a verified office (co-working space, brokerage satellite, commercial address). The appeal must show the new configuration matches SAB requirements.",
  },
  {
    num: "TRIGGER 04",
    h: "Wrong Primary Category Selection",
    p: "Real estate has three closely-related categories — “Real Estate Agency,” “Real Estate Agents,” and “Real Estate Service” — plus specialty categories. Choosing the wrong primary category for the business structure generates ranking failures and, sometimes, suspension.",
    fix: "Audit the category against the real business structure. Individual agents typically need “Real Estate Agents;” brokerages and teams need “Real Estate Agency;” specialty practices need the matching specialty category. The category strategy compounds with the verification approach.",
  },
  {
    num: "TRIGGER 05",
    h: "Competitor False Reporting",
    p: "In dense urban markets, false competitor reports are routine — claims that the business is closed, the address is wrong, or the name doesn't match. Each report triggers Google's review process. False reports accumulate until the profile is suspended even when nothing is actually wrong.",
    fix: "Document the business comprehensively — legal name records, licensing, brokerage affiliation, signed office lease, signage photos, marketing materials. The appeal rebuts each likely false-report claim with documentary evidence. We've handled these dozens of times.",
  },
  {
    num: "TRIGGER 06",
    h: "Verification Postcard Never Used",
    p: "New profiles need postcard verification. The postcard takes 5–14 days, and many agents — especially those in brokerage offices with shared mail handling — never receive it. Some request multiple postcards and trigger a verification lockout; others enter the code wrong and assume they're verified.",
    fix: "Audit the verification status. If it was never completed, restart with proper mail-handling protocols. If it's locked out from repeated attempts, video or in-person verification with appeal documentation is the path forward. We handle verification end to end.",
  },
];

const rankRows = [
  {
    cls: "gre-rank-1",
    pin: "1",
    name: "Park Realty Group",
    sub: "Real Estate Agency · Licensed · Open now",
    share: "44%",
  },
  {
    cls: "",
    pin: "2",
    name: "Coastal Realty Partners",
    sub: "Real Estate Agency · Open · 1.8 mi",
    share: "18%",
  },
  {
    cls: "",
    pin: "3",
    name: "Bayfront Homes & Co.",
    sub: "Real Estate Agents · Open · 2.4 mi",
    share: "11%",
  },
  {
    cls: "gre-rank-susp",
    pin: "SUSP",
    name: "Smith Top Realtor Miami",
    sub: "Suspended · keyword-stuffed name · invisible to customers",
    share: "0%",
  },
];

const services = [
  {
    num: "01 · REINSTATEMENT",
    h: "GBP Reinstatement for Real Estate",
    p: "Diagnose the actual suspension trigger (rarely the one Google's notice states), build the documentation package against the real trigger, file the appeal with state licensing and brokerage records, and escalate through Google's channels if the first appeal is denied.",
    items: [
      "Suspension trigger diagnosis",
      "Licensing & brokerage documentation prep",
      "Appeal filing & tracking",
      "Escalation if first appeal is denied",
      "Average 7–21 day timeline",
    ],
  },
  {
    num: "02 · VERIFICATION",
    h: "Verification for Agents & Brokers",
    p: "Handle verification end to end — postcard, video, phone, or in-person depending on what Google requires for your profile and metro. Includes a pre-verification audit to resolve any risk factors, plus state license documentation prep for the verification call.",
    items: [
      "Pre-verification risk audit",
      "Postcard / video / phone process",
      "State license documentation",
      "Brokerage affiliation paperwork",
      "Verification lockout recovery",
    ],
  },
  {
    num: "03 · MANAGEMENT",
    h: "Ongoing GBP Management",
    p: "Monthly management on a real estate seasonal calendar — weekly Google Posts, category and attribute optimization, geo-tagged listing photos, Q&A seeding with the questions buyers and sellers ask, automated review requests, and ongoing suspension-risk monitoring.",
    items: [
      "Weekly Google Posts (52 / year)",
      "Listing photo geo-tagging",
      "Q&A seeding",
      "Review velocity automation",
      "Suspension-risk monitoring",
    ],
  },
  {
    num: "04 · LOCAL SEO",
    h: "Local SEO for Brokers and Agents",
    p: "The work that compounds beyond the GBP — citation consistency across general and real-estate directories (Realtor.com, Zillow, Homes.com), neighborhood landing pages, on-page SEO for property type and neighborhood combinations, and schema markup for RealEstateAgent and individual listings.",
    items: [
      "60+ directory citations",
      "Neighborhood landing pages",
      "Property type / metro on-page SEO",
      "RealEstateAgent schema markup",
      "Internal linking architecture",
    ],
  },
  {
    num: "05 · WEBSITE DESIGN",
    h: "Real Estate Websites with MLS & IDX",
    p: "Mobile-first real estate websites on a conversion architecture — sub-2-second load times, persistent click-to-call, IDX integration with the relevant state MLS (CRMLS, NTREIS, HAR, REBNY RLS, ARMLS, MFRMLS), listing schema, and CRM-integrated lead capture.",
    items: [
      "IDX / MLS feed integration",
      "Mobile-first sub-2s load",
      "Listing schema markup",
      "Neighborhood guide architecture",
      "CRM-integrated lead capture",
    ],
  },
  {
    num: "06 · CROSS-BROKERAGE CLEANUP",
    h: "Multi-Agent Brokerage Ecosystem Audit",
    p: "For brokerages with multiple agent profiles tied to one address, we audit the entire GBP ecosystem — every active and suspended profile, the relationships between them, duplicates to consolidate, and an ongoing governance structure that prevents the suspension cascade from triggering again.",
    items: [
      "Brokerage-wide GBP inventory",
      "Duplicate consolidation",
      "Agent vs brokerage profile strategy",
      "Ongoing governance protocol",
      "Suspension cascade prevention",
    ],
  },
];

const matrixRows = [
  { label: "Primary lead source", indiv: "Personal marketing", broker: "Brokerage marketing" },
  { label: "Marketing budget", indiv: "Agent-funded", broker: "Brokerage-funded" },
  { label: "Primary phone", indiv: "Agent direct line", broker: "Brokerage main" },
  { label: "Personal brand presence", indiv: "Distinct & established", broker: "Under the brokerage" },
  { label: "Website", indiv: "Agent's own domain", broker: "Brokerage domain" },
  { label: "Review attribution", indiv: "To agent personally", broker: "To brokerage" },
  { label: "Office address", indiv: "Hidden (SAB) or own", broker: "Brokerage office" },
];

const matrixVerdict = {
  best: {
    label: "Best for",
    indiv: "Independent contractor agents",
    broker: "Full-service brokerages",
  },
  risk: {
    label: "Risk if wrong choice",
    indiv: "High suspension risk",
    broker: "Diluted brand & ranking",
  },
};

const states = [
  {
    name: "Florida",
    meta: "Miami · Tampa · Orlando · Jacksonville · Naples · ",
    lic: "FL DBPR Licensed",
    segments: [
      "Florida brokers and agents work in one of the country's most competitive GBP markets. Miami, Tampa, Orlando, Jacksonville, and Naples all see hyper-dense brokerage activity with dozens of agents at the same office address — producing some of the highest real estate suspension rates in the country.",
      "We provide reinstatement, verification for Florida DBPR licensing, ongoing management, local SEO across every major Florida metro, and real estate website design integrated with MFRMLS, MLSAdvantage, and NEFAR. The work calibrates to Florida-specific dynamics — Spanish-language search depth across Miami-Dade, snowbird seasonality, and foreign-buyer activity from Latin America and Europe.",
    ],
  },
  {
    name: "Texas",
    meta: "Houston · Dallas–Fort Worth · Austin · San Antonio · ",
    lic: "TREC Licensed",
    segments: [
      "Texas has the fastest-growing real estate market in the United States. Houston, DFW, Austin, and San Antonio add tens of thousands of transactions monthly, and the suburban corridors — Frisco, McKinney, Round Rock, The Woodlands, Sugar Land — create new map pack arenas weekly.",
      "We handle reinstatement, verification against TREC licensing, ongoing management, local SEO across DFW, Houston, Austin, and San Antonio, and website design with NTREIS, HAR, ABoR, and SABOR feeds. Bilingual landing pages and Spanish-language Google Posts are available for the substantial Spanish-speaking buyer markets across South Texas.",
    ],
  },
  {
    name: "California",
    meta: "Los Angeles · Bay Area · San Diego · Sacramento · ",
    lic: "DRE Licensed",
    segments: [
      "California is the highest-stakes real estate market in the country. Median values across LA, the Bay Area, San Diego, and Sacramento make every ranking spot worth defending fiercely — and the Beverly Hills, Westside, Manhattan Beach, and Pacific Heights submarkets are where competitor false reporting is most endemic.",
      "We provide reinstatement with California DRE verification, ongoing management, local SEO across every California metro, and website design with CRMLS, MLSListings, SDMLS, MetroList, and BAREIS. The work also handles Title 24 and AB 38 disclosure considerations, plus Mandarin and Cantonese search depth across the San Gabriel Valley and Orange County.",
    ],
  },
  {
    name: "New York",
    meta: "Manhattan · Brooklyn · Queens · Long Island · Westchester · ",
    lic: "NYS DOS Licensed",
    segments: [
      "New York real estate is its own ecosystem — co-ops, condos, REBNY membership, and the proprietary RLS. Manhattan agents face the most extreme GBP competitive density anywhere, with hundreds of agents competing in submarkets as small as a single Upper East Side zip code.",
      "We provide reinstatement with NYS DOS verification, ongoing management, local SEO across NYC and the broader market, and website design with REBNY RLS, OneKey MLS for Long Island and Westchester, and IDX support for upstate metros (Albany, Rochester, Buffalo, Syracuse). Co-op vs condo categorization is handled explicitly.",
    ],
  },
  {
    name: "Arizona",
    meta: "Phoenix · Scottsdale · Tucson · Mesa · Gilbert · ",
    lic: "ADRE Licensed",
    segments: [
      "Arizona has the fastest-growing real estate market in the Southwest. Phoenix metro adds 65,000+ residents a year, and the West Valley submarkets — Buckeye, Surprise, Goodyear, Queen Creek — see the steepest growth in the country, creating new GBP ranking arenas weekly.",
      "We provide reinstatement with Arizona ADRE documentation, verification, management for Phoenix and Tucson, local SEO across every Valley submarket, and website design with ARMLS, MLSSAZ, and Northern Arizona MLS. The work calibrates to extreme-heat seasonality, snowbird transaction surges, and the fast-growing exurbs where ranking competition is still consolidating.",
    ],
  },
];

const processSteps = [
  {
    n: "1",
    h: "Free GBP Audit",
    p: "Five-page written report covering current profile status, suspension risk factors (or the active trigger if suspended), name guideline compliance, category configuration, a brokerage-vs-individual recommendation, and a written reinstatement plan. Delivered within five business days.",
  },
  {
    n: "2",
    h: "Reinstatement or Verification",
    p: "If suspended: documentation prep, appeal filing, and escalation support — typical timeline 7–21 days. If not yet verified: verification managed with state licensing documentation. If active but at risk: name remediation, category restructure, and address reconfiguration to prevent future suspension.",
  },
  {
    n: "3",
    h: "Ongoing Management",
    p: "Monthly GBP management — weekly Posts on a real estate seasonal calendar, listing photo geo-tagging, Q&A seeding, review velocity automation, and suspension-risk monitoring. Local SEO across submarkets, website work as scoped, and monthly reports covering rankings, calls, and lead attribution.",
  },
];

const faqs = [
  {
    q: "Why do real estate agents have such high GBP suspension rates?",
    a: "Real estate has structural vulnerabilities other categories don't. Multiple agents at the same brokerage address get flagged as duplicates. Keyword-stuffed business names — a recurring real estate problem because agents add “Top Realtor,” “Luxury Specialist,” or city names — violate Google's naming guidelines. Home-based agents mishandle the service-area-business setting, triggering verification confusion. And competitor false reporting is endemic in dense metros where dozens of agents compete in the same neighborhoods. Together these give real estate one of the highest suspension rates of any service category.",
  },
  {
    q: "How long does GBP reinstatement take for real estate agents?",
    a: "Most reinstatements resolve within seven to twenty-one days from the date the appeal is filed with complete documentation. Simple cases — name guideline violations or category misconfigurations — often resolve within seven to ten days. Complex cases involving multi-agent brokerage address confusion, home-based SAB issues, or repeated suspensions can take three to five weeks. We've reinstated 700-plus profiles across home services and real estate, and the appeal documentation matters more than the appeal itself.",
  },
  {
    q: "Should individual agents have their own profile or use the brokerage's?",
    a: "Google's policy allows an individual profile only if the agent is the primary contact, has a consistent personal brand presence, and conducts business under their own name. Most agents don't fully qualify but create profiles anyway — the root cause of much of the suspension wave. For independent contractor agents who actively market under their own name with their own budget, an individual profile is often appropriate. For agents who lead-source through the brokerage, the brokerage profile is the better focus. We help you make this decision on documentary evidence, not aspirational positioning.",
  },
  {
    q: "Can you handle GBP issues for individual agents and the brokerage at once?",
    a: "Yes. Many brokerages have a complicated GBP landscape — the brokerage has a profile, several agents have their own profiles at the same address, some are suspended, others are at risk. We work through the entire brokerage's GBP ecosystem to clean up duplicates, resolve suspensions, structure agent-vs-brokerage relationships correctly, and put ongoing governance in place. The brokerage-wide audit is the highest-leverage starting point for any office with 10 or more agents.",
  },
  {
    q: "What does real estate website design include?",
    a: "IDX integration with the relevant state MLS (CRMLS, NTREIS, HAR, REBNY RLS, ARMLS, MFRMLS, OneKey, and others by metro), mobile-first design for the 86% of buyers searching on phone, schema markup for RealEstateAgent and individual listings, neighborhood and city landing pages calibrated for local SEO, and lead capture forms with CRM integration (Follow Up Boss, kvCORE, Lofty). The website ties into the GBP and local SEO work so the pieces compound.",
  },
  {
    q: "What if my profile keeps getting suspended after we reinstate it?",
    a: "Repeated suspensions mean the underlying structural issue wasn't fully resolved. The most common pattern is that the original trigger was misdiagnosed — Google's notice said one thing, the actual algorithmic trigger was different, and the appeal addressed the wrong issue. Our reinstatement process includes a root-cause diagnosis plus ongoing monitoring that catches re-suspension risk before it triggers. Profiles we manage have re-suspension rates under 5% over twelve months.",
  },
  {
    q: "Which states do you actively work in?",
    a: "We work with real estate agents and brokers nationally. The states with the deepest dedicated experience are Florida, Texas, California, New York, and Arizona — the five largest markets by transaction volume and complexity. Each has its own licensing body and its own suspension patterns, and the work calibrates to those state-specific dynamics. We also serve agents and brokers in other states; these five simply have the deepest dedicated content.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `https://zonicllc.com${PAGE_PATH}`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessJsonLd = buildLocalBusinessJsonLd({
  pageUrl: PAGE_PATH,
  areaServed: { type: "Country", name: "United States" },
});

function Page() {
  return (
    <>
      <Script
        id="gre-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="gre-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="gre-localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <div id="hia-top" className="hia-page">
        {/* Ticker */}
        <div className="hia-ticker">
          <div className="hia-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>

        {/* Minimal NAV */}
        <nav className="hia-nav">
          <Link href="/" className="hia-nav-logo" aria-label="Zonic Media">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              className="hia-nav-logo-img"
              priority
            />
          </Link>
          <div className="hia-nav-links">
            <HashScrollLink href="#gre-problem">The Problem</HashScrollLink>
            <HashScrollLink href="#gre-triggers">Triggers</HashScrollLink>
            <HashScrollLink href="#gre-services">Services</HashScrollLink>
            <HashScrollLink href="#gre-states">States</HashScrollLink>
            <HashScrollLink href="#hia-faq">FAQ</HashScrollLink>
          </div>
          <div className="hia-nav-right">
            <Link href={SITE_CONTACT.phoneHref} className="hia-nav-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <HashScrollLink href="#hia-audit-top" className="hia-nav-cta">
              Free GBP Audit
            </HashScrollLink>
          </div>
        </nav>

        <div className="hia-main-wrapper">
          <div className="hia-row">
            {/* LEFT: CONTENT */}
            <div className="hia-content-col">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="gre-breadcrumb">
                <Link href="/">Home</Link>
                <span className="gre-breadcrumb-sep">›</span>
                <Link href="/services">Services</Link>
                <span className="gre-breadcrumb-sep">›</span>
                <span className="gre-breadcrumb-current">
                  Google Business Profile for Real Estate
                </span>
              </nav>

              {/* HERO */}
              <section className="hia-hero">
                <div className="hia-eyebrow">
                  For Real Estate Brokers &amp; Agents
                </div>
                <h1>
                  <span className="hia-accent">Real Estate</span> Google
                  Business Profile Services.
                </h1>
                <p className="hia-hero-sub">
                  Real estate has the highest Google Business Profile suspension
                  rate of any local service category. Multi-agent brokerage
                  addresses look like duplicate spam. Keyword-stuffed names get
                  flagged. Home-based agents trigger SAB confusion. We&apos;ve
                  reinstated 700-plus profiles, structured verification around
                  each state&apos;s licensing rules, and engineered the ongoing
                  management that keeps agents and brokers ranked in their map
                  pack across Florida, Texas, California, New York, and Arizona.
                </p>
                <div className="hia-hero-ctas">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Get My Free Real Estate GBP Audit →
                  </HashScrollLink>
                  <Link
                    href={SITE_CONTACT.phoneHref}
                    className="hia-btn hia-btn-ghost"
                  >
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>

                <div className="hia-trust-row">
                  {trustItems.map((t, i) => (
                    <div className="hia-trust-item" key={i}>
                      <span className="hia-trust-num">{t.num}</span>
                      <span className="hia-trust-label">{t.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tab top inline form */}
                <div
                  className="hia-mob-form hia-mob-form-top d-block d-lg-none"
                  id="hia-audit-top"
                >
                  <GbpRealEstateLeadForm />
                </div>
              </section>

              {/* PROBLEM */}
              <section className="hia-section" id="gre-problem">
                <div className="hia-sec-label">
                  Why Real Estate Suspends More Than Anyone Else
                </div>
                <h2 className="hia-sec-h2">
                  Real estate has the highest GBP suspension rate of any{" "}
                  <span className="hia-accent">service category.</span>
                </h2>
                <p className="hia-sec-sub">
                  Plumbers, HVAC contractors, dentists, restaurants — none face
                  the suspension volume real estate brokers and agents face. The
                  reasons are structural to how the industry operates, not to
                  anything individual agents are doing wrong.
                </p>
                <div className="hia-problem-prose">
                  <p>
                    The standard generalist GBP workflow doesn&apos;t survive
                    contact with real estate.{" "}
                    <strong>
                      A brokerage has fifty agents working out of one office at
                      one address.
                    </strong>{" "}
                    Each gets the idea — often from a convention training session
                    — that they should have their own profile to capture leads.
                    Within months the brokerage has fifty profiles pointing to
                    the same address, all claiming to be a real estate agent at
                    the same coordinates. Google&apos;s spam detection flags the
                    pattern almost automatically, and the most active agents get
                    suspended first.
                  </p>
                  <p>
                    The personal branding habit makes everything worse. Agents
                    are trained from license school to build personal brands.{" "}
                    <strong>
                      “Jennifer Park — Top Realtor in Coral Gables — Luxury
                      Beachfront Specialist.”
                    </strong>{" "}
                    Every word of that profile name except the agent&apos;s own
                    name violates Google&apos;s naming guidelines, flagged as
                    keyword stuffing the moment a competitor reports it — and in
                    real estate, every competitor in the submarket has an
                    incentive to report.
                  </p>
                  <p>
                    The home-based agent problem compounds the wave.{" "}
                    <strong>
                      A significant share of agents work primarily from home,
                    </strong>{" "}
                    especially in suburban markets and early careers. SAB rules
                    say a home-based business shouldn&apos;t display its home
                    address; many leave it visible. Verification mail gets
                    returned, neighbors file complaints, and the profile is
                    suspended or fails verification entirely.
                  </p>
                </div>
                <div className="hia-problem-grid">
                  {problemCards.map((c, i) => (
                    <div className="hia-problem-card" key={i}>
                      <h4>{c.h}</h4>
                      <p>{c.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SUSPENSION TRIGGERS */}
              <section className="hia-section" id="gre-triggers">
                <div className="hia-sec-label">The Six Most Common Triggers</div>
                <h2 className="hia-sec-h2">
                  Six suspension triggers we see almost weekly in{" "}
                  <span className="hia-accent">real estate.</span>
                </h2>
                <p className="hia-sec-sub">
                  After reinstating 700-plus profiles, the same six patterns show
                  up disproportionately often. Each has a specific reinstatement
                  playbook — and the trigger on your suspension notice probably
                  doesn&apos;t match the actual underlying cause, which is why
                  proper diagnosis is the difference between a 10-day
                  reinstatement and a 60-day one.
                </p>
                <div className="gre-trigger-grid">
                  {triggers.map((t, i) => (
                    <article className="gre-trigger-card" key={i}>
                      <div className="gre-trigger-num">{t.num}</div>
                      <h3>{t.h}</h3>
                      <p>{t.p}</p>
                      <div className="gre-trigger-fix">
                        <strong>The Fix</strong>
                        {t.fix}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* MAP PACK / CLICK SHARE */}
              <section className="hia-section" id="gre-mappack">
                <div className="hia-sec-label">
                  How Real Estate Customers Find Agents
                </div>
                <h2 className="hia-sec-h2">
                  The map pack is where buyers and sellers actually{" "}
                  <span className="hia-accent">decide who to call.</span>
                </h2>
                <p className="hia-sec-sub">
                  “Realtor near me,” “real estate agent [neighborhood],” and
                  “homes for sale [city]” all trigger the three-pin Google Map
                  Pack as the dominant result. Those three pins absorb nearly
                  three-quarters of the clicks — and suspension removes you from
                  the pack entirely, dropping impressions, clicks, and direction
                  requests to zero.
                </p>
                <div className="gre-clickshare">
                  <div className="gre-clickshare-head">
                    Map pack for <strong>“realtor near me”</strong> — share of
                    clicks by position
                  </div>
                  <div className="gre-rank-list">
                    {rankRows.map((r, i) => (
                      <div className={`gre-rank ${r.cls}`} key={i}>
                        <span className="gre-rank-pin">{r.pin}</span>
                        <span className="gre-rank-name">
                          {r.name}
                          <span className="gre-rank-sub">{r.sub}</span>
                        </span>
                        <span className="gre-rank-share">{r.share}</span>
                      </div>
                    ))}
                  </div>
                  <div className="gre-clickshare-cap">
                    Position #1 captures the call. A suspended profile — even a
                    strong one — takes 0% until it&apos;s reinstated.
                  </div>
                </div>
              </section>

              {/* SERVICES */}
              <section
                className="hia-section hia-services-sec"
                id="gre-services"
              >
                <div className="hia-sec-label">Core Services</div>
                <h2 className="hia-sec-h2">
                  Five services calibrated to how real estate actually{" "}
                  <span className="hia-accent">wins in local search.</span>
                </h2>
                <p className="hia-sec-sub">
                  Every service is built around the structural realities of real
                  estate — the multi-agent brokerage dynamic, the state-by-state
                  regulatory environment, the mobile-first buyer journey, and the
                  suspension landscape that defines real estate marketing in
                  2026. No pricing on this page — every engagement is scoped and
                  quoted after the free audit.
                </p>
                <div className="hia-section-cta">
                  <HashScrollLink
                    href="#hia-audit-top"
                    className="hia-btn hia-btn-primary"
                  >
                    Scope My Engagement →
                  </HashScrollLink>
                </div>
                <div className="hia-svc-grid">
                  {services.map((s, i) => (
                    <article className="hia-svc-card" key={i}>
                      <div className="hia-svc-num">{s.num}</div>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                      <ul className="hia-svc-includes">
                        {s.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              {/* PROFILE STRATEGY / MATRIX */}
              <section className="hia-section" id="gre-profile-types">
                <div className="hia-sec-label">
                  The Real-Estate-Specific Knowledge Generalists Don&apos;t Have
                </div>
                <h2 className="hia-sec-h2">
                  Individual agent profile vs brokerage profile. The wrong choice
                  causes <span className="hia-accent">most suspensions.</span>
                </h2>
                <p className="hia-sec-sub">
                  The single most consequential decision in real estate GBP
                  strategy is whether an individual agent should run their own
                  profile separate from the brokerage&apos;s. Google allows both
                  under specific conditions — but most agents create individual
                  profiles without meeting them, which generates the suspension
                  wave. Here&apos;s how we evaluate it for every agent and
                  brokerage we work with.
                </p>
                <div className="gre-matrix">
                  <div className="gre-matrix-row gre-matrix-head">
                    <div>Criterion</div>
                    <div>Individual Agent</div>
                    <div>Brokerage</div>
                  </div>
                  {matrixRows.map((r, i) => (
                    <div className="gre-matrix-row" key={i}>
                      <div className="gre-matrix-label">{r.label}</div>
                      <div className="gre-matrix-cell" data-col="Individual">
                        {r.indiv}
                      </div>
                      <div className="gre-matrix-cell" data-col="Brokerage">
                        {r.broker}
                      </div>
                    </div>
                  ))}
                  <div className="gre-matrix-row">
                    <div className="gre-matrix-label">
                      {matrixVerdict.best.label}
                    </div>
                    <div
                      className="gre-matrix-cell gre-yes"
                      data-col="Individual"
                    >
                      {matrixVerdict.best.indiv}
                    </div>
                    <div
                      className="gre-matrix-cell gre-yes"
                      data-col="Brokerage"
                    >
                      {matrixVerdict.best.broker}
                    </div>
                  </div>
                  <div className="gre-matrix-row">
                    <div className="gre-matrix-label">
                      {matrixVerdict.risk.label}
                    </div>
                    <div
                      className="gre-matrix-cell gre-no"
                      data-col="Individual"
                    >
                      {matrixVerdict.risk.indiv}
                    </div>
                    <div className="gre-matrix-cell gre-no" data-col="Brokerage">
                      {matrixVerdict.risk.broker}
                    </div>
                  </div>
                </div>
              </section>

              {/* STATES */}
              <section className="hia-section" id="gre-states">
                <div className="hia-sec-label">States We Serve</div>
                <h2 className="hia-sec-h2">
                  Real estate GBP services calibrated to the five largest{" "}
                  <span className="hia-accent">US markets.</span>
                </h2>
                <p className="hia-sec-sub">
                  Each state has its own licensing body, dominant brokerage
                  structures, and suspension dynamics. Florida, Texas,
                  California, New York, and Arizona have the deepest dedicated
                  work — but we serve real estate brokers and agents nationally.
                </p>
                <div className="gre-state-list">
                  {states.map((st, i) => (
                    <div className="gre-state-block" key={i}>
                      <div className="gre-state-head">
                        <h3>{st.name}</h3>
                        <div className="gre-state-meta">
                          {st.meta}
                          <span>{st.lic}</span>
                        </div>
                      </div>
                      {st.segments.map((seg, j) => (
                        <p key={j} style={j > 0 ? { marginTop: "14px" } : undefined}>
                          {seg}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section className="hia-section">
                <div className="hia-sec-label">
                  How We Work With Agents and Brokers
                </div>
                <h2 className="hia-sec-h2">
                  Audit first, then reinstatement or verification, then{" "}
                  <span className="hia-accent">ongoing management.</span>
                </h2>
                <p className="hia-sec-sub">
                  Agents and brokers are running transactions, managing clients,
                  and serving showings. Total time investment across the first
                  two weeks is under an hour. After that, monthly reports.
                </p>
                <div className="hia-section-cta">
                  <Link href={SITE_CONTACT.phoneHref} className="hia-cta-call">
                    <span className="hia-cta-call-dot" aria-hidden="true" />
                    Call {SITE_CONTACT.phoneDisplay}
                  </Link>
                </div>
                <div className="hia-process-grid">
                  {processSteps.map((s, i) => (
                    <div className="hia-process-step" key={i}>
                      <span className="hia-process-num">{s.n}</span>
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CLUTCH REVIEWS */}
              <section className="hia-section hia-reviews-sec" id="hia-reviews">
                <div className="hia-sec-label">Trusted by Clients Nationwide</div>
                <h2 className="hia-sec-h2">
                  What agents and other service businesses{" "}
                  <span className="hia-accent">say about working with us.</span>
                </h2>
                <p className="hia-sec-sub">
                  Verified reviews from Clutch — the independent platform agencies
                  can&apos;t edit, filter, or fake. The same operators who hired
                  us to reinstate and rank their profiles left these.
                </p>
                <div className="hia-reviews-wrap">
                  <ClutchWidget
                    widgetType="12"
                    height="375"
                    primaryColor="#f97316"
                    reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                  />
                </div>
              </section>

              {/* FAQ */}
              <section className="hia-section" id="hia-faq">
                <div className="hia-sec-label">
                  Common Questions From Agents and Brokers
                </div>
                <h2 className="hia-sec-h2">
                  Everything you wanted to ask before that{" "}
                  <span className="hia-accent">audit call.</span>
                </h2>
                <p className="hia-sec-sub">
                  If you don&apos;t see your question below, include it in the
                  audit form and we&apos;ll answer it in the written report.
                </p>
                <HiaFaqAccordion items={faqs} defaultOpen={0} />
              </section>

              {/* Mobile inline form (bottom) */}
              <div className="hia-mob-form d-block d-lg-none" id="hia-audit">
                <GbpRealEstateLeadForm />
              </div>
            </div>

            {/* RIGHT: STICKY FORM */}
            <div
              className="hia-form-col d-none d-lg-block"
              data-scroll-target="hia-audit hia-audit-top"
            >
              <div className="hia-sticky-form" id="hia-audit-desktop">
                <GbpRealEstateLeadForm />
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="hia-final-cta">
          <div className="hia-fc-inner">
            <div className="hia-eyebrow hia-eyebrow-light">
              Start With the Free Audit
            </div>
            <h2>
              Get a Real Estate GBP Audit Built Around Your{" "}
              <span className="hia-accent">Specific Brokerage Situation.</span>
            </h2>
            <p className="hia-fc-lede">
              Five-page written report covering current profile status,
              suspension risk factors (or the active trigger if suspended), name
              guideline compliance, category configuration, a brokerage-vs-
              individual recommendation, and a written reinstatement plan.
              Delivered within five business days. No sales call required.
            </p>
            <ul className="hia-final-check">
              <li>Suspended? Reinstatement timeline 7–21 days</li>
              <li>Active and at risk? Risk audit + remediation plan</li>
              <li>700+ profiles reinstated · 5.0 stars on Clutch</li>
              <li>Active across FL · TX · CA · NY · AZ and nationally</li>
              <li>Free audit before any commitment</li>
            </ul>
            <div className="hia-fc-actions">
              <Link href={SITE_CONTACT.phoneHref} className="hia-fc-call">
                Call {SITE_CONTACT.phoneDisplay}
              </Link>
              <HashScrollLink href="#hia-audit" className="hia-fc-form">
                Submit My Free Audit →
              </HashScrollLink>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hia-footer">
          <div className="hia-footer-inner">
            <div className="hia-footer-top">
              <div className="hia-footer-brand">
                <Link
                  href="/"
                  className="hia-footer-logo"
                  aria-label="Zonic Media"
                >
                  ZONIC
                </Link>
                <p>
                  Zonic Media is a full-service marketing agency serving real
                  estate brokers and agents alongside home services contractors
                  and other local businesses. Headquartered in Dover, Delaware,
                  with active real estate clients across Florida, Texas,
                  California, New York, and Arizona. Specializing in Google
                  Business Profile reinstatement, verification, and management;
                  local SEO; and real estate website design with MLS / IDX
                  integration.
                </p>
              </div>
              <div className="hia-footer-links">
                <div className="hia-footer-col">
                  <h5>Real Estate Services</h5>
                  <HashScrollLink href="#gre-services">
                    GBP Reinstatement
                  </HashScrollLink>
                  <HashScrollLink href="#gre-services">
                    GBP Verification
                  </HashScrollLink>
                  <HashScrollLink href="#gre-services">
                    GBP Management
                  </HashScrollLink>
                  <HashScrollLink href="#gre-services">Local SEO</HashScrollLink>
                  <HashScrollLink href="#gre-services">
                    Real Estate Website Design
                  </HashScrollLink>
                </div>
                <div className="hia-footer-col">
                  <h5>States</h5>
                  <HashScrollLink href="#gre-states">Florida</HashScrollLink>
                  <HashScrollLink href="#gre-states">Texas</HashScrollLink>
                  <HashScrollLink href="#gre-states">California</HashScrollLink>
                  <HashScrollLink href="#gre-states">New York</HashScrollLink>
                  <HashScrollLink href="#gre-states">Arizona</HashScrollLink>
                </div>
                <div className="hia-footer-col">
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
            <div className="hia-footer-bottom">
              <span>© 2026 Zonic Media LLC. All rights reserved.</span>
              <span>Real Estate · GBP · Verification · Local SEO · Web Design</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;
