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
  title: { absolute: "Contact Zonic Media | Digital Marketing Agency USA" },
  description:
    "Contact Zonic Media, a US digital marketing agency in Dover, Delaware. Call +1 302-726-9736 or send your website for a free local SEO audit.",
  keywords: [
    "digital marketing agency contact",
    "contact zonic media",
    "digital marketing agency usa contact",
    "digital marketing agency near me",
    "free seo audit",
    "free google business profile audit",
    "zonic media phone number",
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
      "Contact Zonic Media, a US digital marketing agency in Dover, Delaware. Call +1 302-726-9736 or send your website for a free local SEO audit.",
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
