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
  areaServed?: string | { type: "State" | "Country"; name: string };
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };
}
