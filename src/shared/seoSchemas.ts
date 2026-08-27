export const SITE_URL = "https://www.zonicllc.com";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

type LocalBusinessOptions = {
  /** Absolute or relative page URL (relative gets prefixed with SITE_URL). */
  pageUrl: string;
  /** Defaults to "ProfessionalService". Use "LocalBusiness" if you prefer. */
  type?: "ProfessionalService" | "LocalBusiness";
  /** Either a US state name (renders as schema:State) or "United States" for nationwide. */
  areaServed?: string | { type: "State" | "Country" | "City"; name: string };
};

export function buildLocalBusinessJsonLd({
  pageUrl,
  type = "ProfessionalService",
  areaServed,
}: LocalBusinessOptions) {
  const url = pageUrl.startsWith("http") ? pageUrl : `${SITE_URL}${pageUrl}`;
  const area =
    typeof areaServed === "string"
      ? { "@type": "State", name: areaServed }
      : areaServed
        ? { "@type": areaServed.type, name: areaServed.name }
        : { "@type": "Country", name: "United States" };

  return {
    "@context": "https://schema.org",
    "@type": type,
    name: "Zonic Media",
    image: `${SITE_URL}/images/logo.webp`,
    url,
    telephone: "+1-302-726-9736",
    priceRange: "$$",
    areaServed: area,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green, STE B",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US",
    },
    // NO aggregateRating here — ever. Pages using this helper stack a second
    // "Zonic Media" business node on top of the root layout's, and any rating
    // in the pair triggers GSC's "Review has multiple aggregate ratings"
    // critical error (confirmed via Rich Results Test on /services, Aug 2026).
    // Self-serving LocalBusiness ratings are ineligible for star snippets per
    // Google's guidelines anyway. Cite the Clutch rating in visible text.
  };
}

type ServiceOptions = {
  /** Human-readable service name, e.g. "HVAC Marketing in California". */
  name: string;
  /** Page description (meta description works well). */
  description: string;
  /** Absolute or relative page URL (relative gets prefixed with SITE_URL). */
  pageUrl: string;
  /** e.g. "Digital Marketing", "Local SEO", "Web Design". */
  serviceType?: string;
  /** State name, "United States" (default), or explicit type+name. */
  areaServed?: string | { type: "State" | "Country" | "City"; name: string };
};

/**
 * Service entity naming Zonic Media as provider. NEVER add aggregateRating
 * here — Google Search Console flags aggregateRating on Service as a critical
 * error (it is only valid on LocalBusiness/ProfessionalService).
 */
export function buildServiceJsonLd({
  name,
  description,
  pageUrl,
  serviceType,
  areaServed,
}: ServiceOptions) {
  const url = pageUrl.startsWith("http") ? pageUrl : `${SITE_URL}${pageUrl}`;
  const area =
    typeof areaServed === "string"
      ? areaServed === "United States"
        ? { "@type": "Country", name: "United States" }
        : { "@type": "State", name: areaServed }
      : areaServed
        ? { "@type": areaServed.type, name: areaServed.name }
        : { "@type": "Country", name: "United States" };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    ...(serviceType ? { serviceType } : {}),
    areaServed: area,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Zonic Media",
      url: SITE_URL,
    },
  };
}
