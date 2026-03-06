import type { Metadata } from "next";
import ContactUsPage from "./ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Zonic Media | Get in Touch With Our Digital Experts",
  description:
    "Contact Zonic Media for web design, SEO, Google Business Profile optimization, and PPC services. Speak with our experts and grow your business online.",
};

function Page() {
  return <ContactUsPage />;
}

export default Page;
