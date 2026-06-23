import type { Metadata } from "next";
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import Script from "next/script";
import Loader from "@/app/components/Loader";
import SmoothScroll from "@/app/components/SmoothScroll";
import AnalyticsProvider from "@/app/components/AnalyticsProvider";
import SiteFloatingWidgets from "@/app/components/SiteFloatingWidgets";

const neueHaas = localFont({
  src: [
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayRoman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const SITE_URL = "https://www.zonicllc.com";

const postalAddressJsonLd = {
  "@type": "PostalAddress",
  streetAddress: "8 The Green, STE B",
  addressLocality: "Dover",
  addressRegion: "DE",
  postalCode: "19901",
  addressCountry: "US",
};

const sameAsLinks = [
  "https://www.linkedin.com/company/zonic-media/",
  "https://www.facebook.com/zonicmediallc/",
  "https://www.instagram.com/zonicmedia",
  "https://www.youtube.com/@ZonicMediaDelaware",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Zonic Media",
  legalName: "Zonic Media LLC",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.webp`,
  },
  email: "contact@zonicllc.com",
  telephone: "+13027269736",
  address: postalAddressJsonLd,
  sameAs: sameAsLinks,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+13027269736",
    contactType: "customer service",
    email: "contact@zonicllc.com",
    areaServed: ["US", "CA", "GB", "AU", "AE", "IN"],
    availableLanguage: ["English"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#local-business`,
  name: "Zonic Media",
  description:
    "Digital marketing agency delivering web design, SEO, Google Ads, and growth solutions for businesses worldwide.",
  url: SITE_URL,
  telephone: "+13027269736",
  email: "contact@zonicllc.com",
  image: `${SITE_URL}/images/logo.webp`,
  logo: `${SITE_URL}/images/logo.webp`,
  address: postalAddressJsonLd,
  priceRange: "$$",
  areaServed: ["United States", "Canada", "United Kingdom", "Australia", "United Arab Emirates", "India"],
  sameAs: sameAsLinks,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zonic Media | Digital Agency",
    template: "%s | Zonic Media",
  },
  description:
    "Zonic Media delivers premium web design, SEO, Google Ads, and digital marketing solutions to help businesses scale online.",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Zonic Media",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zonicmedia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://widget.clutch.co" />
        <link rel="dns-prefetch" href="https://widget.clutch.co" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <Script
          id="clutch-widget-script"
          src="https://widget.clutch.co/static/js/widget.js"
          strategy="afterInteractive"
        />
      </head>

      <body className={neueHaas.className}>
        {/* ✅ Analytics only on real domain */}
        <AnalyticsProvider />

        <Loader />
        <SmoothScroll>{children}</SmoothScroll>
        <SiteFloatingWidgets />

        {/* GoHighLevel (LeadConnector) chat widget */}
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a2ac834e20523fdce854ae4"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
