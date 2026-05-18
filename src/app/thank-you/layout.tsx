import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Zonic Media",
  description:
    "Thank you for contacting Zonic Media. Our team will review your request and follow up about your website, SEO, or digital marketing project.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
