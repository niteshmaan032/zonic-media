import Image from "next/image";
import Link from "next/link";

import ClutchWidget from "@/app/components/ClutchWidget";
import HashScrollLink from "@/app/components/HashScrollLink";
import IndustryMarketingLeadForm from "@/app/components/IndustryMarketingLeadForm";
import {
  GrowthCurveVisual,
  LeadEngineVisual,
  MapPackRaceVisual,
  visualCopyFromSlug,
  type IndustryVisualCopy,
} from "@/app/components/IndustryMarketingVisuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { titleCaseHeadings, titleCaseText } from "@/shared/titleCase";

/* Every ima- page (13 generated + septic + solar) ships the same seven
   content sections in the same order, but the source HTML carries no ids.
   We stamp them in render order so the header can scroll to them the way
   the hia-family pages (plumbing, HVAC, home inspector) do. */
const SECTION_IDS = [
  "ima-problem",
  "ima-system",
  "ima-services",
  "ima-map",
  "ima-pricing",
  "ima-process",
  "ima-faq",
] as const;

const NAV_LINKS = [
  { id: "ima-problem", label: "The Problem" },
  { id: "ima-system", label: "What We Do" },
  { id: "ima-map", label: "Map Pack" },
  { id: "ima-pricing", label: "Pricing" },
  { id: "ima-process", label: "Process" },
  { id: "ima-faq", label: "FAQ" },
];

// Sticky header clearance so a scrolled-to heading isn't hidden behind it.
const SCROLL_OFFSET = 76;

function countSections(html: string) {
  return (html.match(/<section\b/g) ?? []).length;
}

// Adds id="..." to each <section> that doesn't already have one, continuing
// the id sequence from `startIndex` (contentHtml is rendered in two chunks).
function withSectionIds(html: string, startIndex: number) {
  let i = startIndex;
  return html.replace(/<section\b(?![^>]*\sid=)/g, () => {
    const id = SECTION_IDS[i++];
    return id ? `<section id="${id}"` : "<section";
  });
}

// Splits stamped HTML in two at the opening tag of the given section id, so
// the animated visuals can be interleaved between the source sections.
function splitAtSection(html: string, id: string): [string, string] {
  const marker = `<section id="${id}"`;
  const index = html.indexOf(marker);
  return index >= 0 ? [html.slice(0, index), html.slice(index)] : [html, ""];
}

export type IndustryMarketingPageData = {
  slug: string;
  title: string;
  description: string;
  // Optional palette override (e.g. "ima-solar"); the 13 generated JSON
  // pages omit both and keep the default homepage-blue accent.
  themeClass?: string;
  accentColor?: string;
  // Trade words for the animated visuals. The generated JSON pages omit this
  // and fall back to slug-derived copy.
  visualCopy?: IndustryVisualCopy;
  tickerHtml: string;
  heroHtml: string;
  trustbarHtml: string;
  contentHtml: string;
  finalHtml: string;
  footerHtml: string;
  schemas: string[];
  form: {
    title: string;
    subtitle: string;
    labels: string[];
    placeholders: string[];
    serviceOptions: string[];
    submitLabel: string;
    finePrint: string;
  };
};

type Props = {
  page: IndustryMarketingPageData;
};

export default function IndustryMarketingPage({ page }: Props) {
  /* Headings on these pages are assembled from lowercase config values
     ("appliance repair companies"), and the 13 imported pages ship as pre-baked
     HTML in industryMarketingPages.generated.json. Title-casing here is the one
     choke point that covers both sources. Idempotent, so template-built pages
     that are already correct pass through unchanged. */
  const heroHtmlCased = titleCaseHeadings(page.heroHtml);
  const contentHtmlCased = titleCaseHeadings(page.contentHtml);

  const leadForm = (
    <IndustryMarketingLeadForm
      slug={page.slug}
      {...page.form}
      title={titleCaseText(page.form.title)}
    />
  );
  const heroTrustMarker = '<div class="hero-trust">';
  const heroTrustIndex = heroHtmlCased.indexOf(heroTrustMarker);
  const heroBeforeTrust =
    heroTrustIndex >= 0 ? heroHtmlCased.slice(0, heroTrustIndex) : heroHtmlCased;
  const heroTrust =
    heroTrustIndex >= 0 ? heroHtmlCased.slice(heroTrustIndex) : "";
  const faqSectionIndex = contentHtmlCased.lastIndexOf(
    '<section class="section">',
  );
  const contentBeforeReviews =
    faqSectionIndex >= 0
      ? contentHtmlCased.slice(0, faqSectionIndex)
      : contentHtmlCased;
  const contentAfterReviews =
    faqSectionIndex >= 0 ? contentHtmlCased.slice(faqSectionIndex) : "";

  const beforeSectionCount = countSections(contentBeforeReviews);
  const contentBeforeHtml = withSectionIds(contentBeforeReviews, 0);
  const contentAfterHtml = withSectionIds(
    contentAfterReviews,
    beforeSectionCount,
  );

  // Interleave the three animated visuals between the source sections:
  // problem → rank race, system → lead engine, map → growth curve → pricing.
  const visualCopy = page.visualCopy ?? visualCopyFromSlug(page.slug);
  const [problemChunk, afterProblem] = splitAtSection(
    contentBeforeHtml,
    "ima-system",
  );
  const [systemChunk, afterSystem] = splitAtSection(
    afterProblem,
    "ima-services",
  );
  const [answerMapChunk, pricingChunk] = splitAtSection(
    afterSystem,
    "ima-pricing",
  );
  const stampedIds = new Set<string>(
    SECTION_IDS.slice(0, beforeSectionCount + countSections(contentAfterReviews)),
  );
  const navLinks = NAV_LINKS.filter((link) => stampedIds.has(link.id));

  return (
    <>
      {page.schemas.map((schema, index) => (
        <script
          key={`${page.slug}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div
        className={
          page.themeClass ? `ima-page ${page.themeClass}` : "ima-page"
        }
      >
        <div className="ima-ticker" aria-label="Zonic Media highlights">
          <div
            className="ima-ticker-track"
            dangerouslySetInnerHTML={{ __html: page.tickerHtml }}
          />
        </div>

        <header className="ima-header">
          <Link href="/" aria-label="Zonic Media home" className="ima-logo">
            <Image
              src="/images/logo.webp"
              width={108}
              height={41}
              alt="Zonic Media"
              priority
            />
          </Link>
          {navLinks.length > 0 ? (
            <nav className="ima-header-links" aria-label="On this page">
              {navLinks.map((link) => (
                <HashScrollLink
                  key={link.id}
                  href={`#${link.id}`}
                  offset={SCROLL_OFFSET}
                >
                  {link.label}
                </HashScrollLink>
              ))}
            </nav>
          ) : null}
          <div className="ima-header-actions">
            <Link href={SITE_CONTACT.phoneHref} className="ima-header-phone">
              {SITE_CONTACT.phoneDisplay}
            </Link>
            <a
              href="#industry-audit-desktop"
              className="ima-header-cta ima-header-cta-desktop"
            >
              Free Audit
            </a>
            <a
              href="#industry-audit"
              className="ima-header-cta ima-header-cta-mobile"
            >
              Free Audit
            </a>
          </div>
        </header>

        <main className="ima-main">
          <div className="ima-layout">
            <div className="ima-content-column">
              <section className="ima-hero">
                <div className="ima-hero-copy">
                  <div dangerouslySetInnerHTML={{ __html: heroBeforeTrust }} />
                  <div className="ima-hero-badges" aria-label="Partner badges">
                    {/* Self-hosted Clutch badge — the live iframe embed is
                        behind a Cloudflare challenge and breaks randomly. */}
                    <a
                      href="https://clutch.co/profile/zonic-media?badge=11431"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Image
                        className="ima-hero-badge"
                        width={90}
                        height={90}
                        src="/images/clutch-top-company-2026.png"
                        alt="Top Clutch Digital Marketing Company Delaware 2026"
                        style={{ objectFit: "contain" }}
                      />
                    </a>
                    <Image
                      className="ima-hero-badge"
                      width={90}
                      height={90}
                      src="/images/Partner.png"
                      alt="Yelp Advertising Partner"
                    />
                    <a
                      href="https://www.trustpilot.com/review/zonicllc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="ima-hero-badge-trustpilot"
                        width={110}
                        height={52}
                        src="/images/trust-black.png"
                        alt="Zonic Media reviews on Trustpilot"
                      />
                    </a>
                  </div>
                  {heroTrust ? (
                    <div dangerouslySetInnerHTML={{ __html: heroTrust }} />
                  ) : null}
                </div>
                <div className="ima-mobile-form" id="industry-audit">
                  {leadForm}
                </div>
              </section>

              <div
                className="ima-source-trustbar"
                dangerouslySetInnerHTML={{ __html: page.trustbarHtml }}
              />
              <div className="ima-source-content">
                <div dangerouslySetInnerHTML={{ __html: problemChunk }} />
                {systemChunk ? <MapPackRaceVisual copy={visualCopy} /> : null}
                {systemChunk ? (
                  <div dangerouslySetInnerHTML={{ __html: systemChunk }} />
                ) : null}
                {answerMapChunk ? (
                  <LeadEngineVisual copy={visualCopy} />
                ) : null}
                {answerMapChunk ? (
                  <div dangerouslySetInnerHTML={{ __html: answerMapChunk }} />
                ) : null}
                {pricingChunk ? <GrowthCurveVisual copy={visualCopy} /> : null}
                {pricingChunk ? (
                  <div dangerouslySetInnerHTML={{ __html: pricingChunk }} />
                ) : null}
                <section className="ima-reviews-section" aria-labelledby="ima-reviews-title">
                  <div className="ima-reviews-heading">
                    <span className="eyebrow">Verified Client Reviews</span>
                    <h2 id="ima-reviews-title">
                      Trusted by Small &amp; Mid-Size Businesses Across the US
                    </h2>
                  </div>
                  <div className="ima-reviews-widget">
                    <ClutchWidget
                      widgetType="12"
                      height="375"
                      primaryColor={page.accentColor ?? "#2567e8"}
                      reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                    />
                  </div>
                </section>
                {contentAfterHtml ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: contentAfterHtml }}
                  />
                ) : null}
              </div>
            </div>

            <aside className="ima-form-column" aria-label="Free marketing audit form">
              <div className="ima-sticky-form" id="industry-audit-desktop">
                {leadForm}
              </div>
            </aside>
          </div>
        </main>

        <div
          className="ima-source-final"
          dangerouslySetInnerHTML={{ __html: page.finalHtml }}
        />
        <div
          className="ima-source-footer"
          dangerouslySetInnerHTML={{ __html: page.footerHtml }}
        />
      </div>
    </>
  );
}
