import type { Metadata } from "next";
import ContactUsPage from "./ContactUsPage";
import { buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const contactBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact-us" },
]);

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch With Our Digital Experts",
  description:
    "Contact Zonic Media for web design, SEO, Google Business Profile optimization, and PPC services. Speak with our experts and grow your business online.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Get in Touch With Our Digital Experts",
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
      <ContactUsPage />
    </>
  );
}

export default Page;
