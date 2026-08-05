import type { Metadata } from "next";
import ContactUsPage from "./ContactUsPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const contactBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact-us" },
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.zonicllc.com/contact-us#contact-page",
  name: "Contact Zonic Media",
  url: "https://www.zonicllc.com/contact-us",
  description:
    "Contact Zonic Media for local SEO, Google Business Profile reinstatement and optimization, web design, and Google Ads services.",
  about: { "@id": "https://www.zonicllc.com/#organization" },
  inLanguage: "en-US",
};

export const metadata: Metadata = {
  title: "Contact Us | Digital Marketing Agency",
  description:
    "Contact Zonic Media for web design, SEO, Google Business Profile optimization, and PPC services. Speak with our experts and grow your business online.",
  keywords: [
    "contact digital marketing agency",
    "digital marketing consultation",
    "free marketing strategy call",
    "local SEO consultation",
    "web design quote",
    "Google Ads management quote",
    "small business marketing help",
    "hire a digital marketing agency",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
      },
    ],
    title: "Contact Us | Digital Marketing Agency | Zonic Media",
    description:
      "Contact Zonic Media for web design, SEO, Google Business Profile optimization, and PPC services. Speak with our experts and grow your business online.",
    url: "/contact-us",
  },
};

function Page() {
  return (
    <>
      <script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactBreadcrumbJsonLd),
        }}
      />
      <script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <ContactUsPage />
    </>
  );
}

export default Page;
