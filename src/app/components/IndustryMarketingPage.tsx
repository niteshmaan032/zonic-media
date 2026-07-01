import Image from "next/image";
import Link from "next/link";

import ClutchWidget from "@/app/components/ClutchWidget";
import IndustryMarketingLeadForm from "@/app/components/IndustryMarketingLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";

export type IndustryMarketingPageData = {
  slug: string;
  title: string;
  description: string;
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
  const leadForm = <IndustryMarketingLeadForm slug={page.slug} {...page.form} />;
  const heroTrustMarker = '<div class="hero-trust">';
  const heroTrustIndex = page.heroHtml.indexOf(heroTrustMarker);
  const heroBeforeTrust =
    heroTrustIndex >= 0 ? page.heroHtml.slice(0, heroTrustIndex) : page.heroHtml;
  const heroTrust =
    heroTrustIndex >= 0 ? page.heroHtml.slice(heroTrustIndex) : "";
  const faqSectionIndex = page.contentHtml.lastIndexOf(
    '<section class="section">',
  );
  const contentBeforeReviews =
    faqSectionIndex >= 0
      ? page.contentHtml.slice(0, faqSectionIndex)
      : page.contentHtml;
  const contentAfterReviews =
    faqSectionIndex >= 0 ? page.contentHtml.slice(faqSectionIndex) : "";

  return (
    <>
      {page.schemas.map((schema, index) => (
        <script
          key={`${page.slug}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div className="ima-page">
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
                    <iframe
                      className="ima-hero-badge"
                      width="90"
                      height="90"
                      loading="eager"
                      src="https://clutch.co/share/badges/2617344/11431?utm_source=clutch_top_company_badge&utm_medium=image_embed"
                      title="Top Clutch Digital Marketing Company Delaware 2026"
                    />
                    <Image
                      className="ima-hero-badge"
                      width={90}
                      height={90}
                      src="/images/Partner.png"
                      alt="Yelp Advertising Partner"
                    />
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
                <div
                  dangerouslySetInnerHTML={{ __html: contentBeforeReviews }}
                />
                <section className="ima-reviews-section" aria-labelledby="ima-reviews-title">
                  <div className="ima-reviews-heading">
                    <span className="eyebrow">Verified Client Reviews</span>
                    <h2 id="ima-reviews-title">
                      Trusted by small &amp; mid-size businesses across the US
                    </h2>
                  </div>
                  <div className="ima-reviews-widget">
                    <ClutchWidget
                      widgetType="12"
                      height="375"
                      primaryColor="#f97316"
                      reviews="448872,448007,448005,448004,447635,447416,447409,446728,446721,446262,445981,446714,446714,446714"
                    />
                  </div>
                </section>
                {contentAfterReviews ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: contentAfterReviews }}
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
