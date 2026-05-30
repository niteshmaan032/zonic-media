import type { Metadata } from "next";
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import Script from "next/script";
import Loader from "@/app/components/Loader";
import SmoothScroll from "@/app/components/SmoothScroll";
import AnalyticsProvider from "@/app/components/AnalyticsProvider";
import FloatingPhone from "@/app/components/FloatingPhone";
import ChatBot from "@/app/components/ChatBot";

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
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Zonic Media",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const siteNavigationItems = [
  { name: "Home", url: SITE_URL },
  { name: "Services", url: `${SITE_URL}/services` },
  { name: "Local SEO", url: `${SITE_URL}/services/local-seo-for-home-services` },
  { name: "GMB Reinstatement", url: `${SITE_URL}/services/gmb-reinstatement-help` },
  { name: "Launchpad", url: `${SITE_URL}/services/launchpad` },
  { name: "Blog", url: `${SITE_URL}/blog` },
  { name: "About Us", url: `${SITE_URL}/about` },
  { name: "Contact Us", url: `${SITE_URL}/contact-us` },
];

const siteNavigationJsonLd = siteNavigationItems.map((item) => ({
  "@type": "SiteNavigationElement",
  "@id": `${item.url}#site-navigation`,
  name: item.name,
  url: item.url,
}));

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    localBusinessJsonLd,
    websiteJsonLd,
    ...siteNavigationJsonLd,
  ],
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

        <Script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
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
        <FloatingPhone />
        <ChatBot />
      </body>
    </html>
  );
}
