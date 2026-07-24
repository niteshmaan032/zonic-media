import type { Metadata } from "next";
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/style/service-lead-form.css";
import "@/app/style/google-fonts.css";
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
  "https://www.trustpilot.com/review/zonicllc.com",
  "https://clutch.co/profile/zonic-media",
];

const knowsAboutTopics = [
  "Google Business Profile reinstatement",
  "Google Business Profile verification",
  "Google Business Profile optimization",
  "Local SEO",
  "Google Map Pack ranking",
  "Web design for small businesses",
  "Google Ads management",
  "Answer engine optimization (AEO)",
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
  knowsAbout: knowsAboutTopics,
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
  knowsAbout: knowsAboutTopics,
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
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://widget.clutch.co" />
        <link rel="dns-prefetch" href="https://widget.clutch.co" />

        {/* Manrope + Inter are self-hosted (see style/google-fonts.css) so the
            first paint never waits on fonts.googleapis.com. Preload only the
            latin variable files — the ones every page actually renders with. */}
        <link
          rel="preload"
          href="/fonts/google/xn7gYHE41ni1AdIRggexSg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/google/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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

        {/* lazyOnload: the Clutch review widget renders below the fold, so its
            script doesn't need to compete with page startup on mobile. */}
        <Script
          id="clutch-widget-script"
          src="https://widget.clutch.co/static/js/widget.js"
          strategy="lazyOnload"
        />

        {/* GHL external form tracking — loaded site-wide so every custom lead
            form submission is captured into the GoHighLevel dashboard.
            lazyOnload is safe: it only needs to be present before a visitor
            submits a form, never during the first paint. */}
        <Script
          id="ghl-external-tracking"
          src="https://forms.zonicllc.com/js/external-tracking.js"
          data-tracking-id="tk_f66384f994224b0091e870b5f6cf3e88"
          strategy="lazyOnload"
        />
      </head>

      <body className={neueHaas.className}>
        {/* ✅ Analytics only on real domain */}
        <AnalyticsProvider />

        <Loader />
        <SmoothScroll>{children}</SmoothScroll>
        {/* The GoHighLevel (LeadConnector) chat widget is injected per-page
            inside SiteFloatingWidgets — only on pages without a phone/SMS
            opt-in form — so it passes GHL's compliance review. Loading it
            globally here would put the widget on the same pages as our lead
            forms and trigger a "multiple opt-in sources" rejection. */}
        <SiteFloatingWidgets />
      </body>
    </html>
  );
}
