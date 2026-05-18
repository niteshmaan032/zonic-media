import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Digital Marketing Services | Zonic Media",
  description:
    "Zonic Media is preparing new digital marketing, SEO, web design, and growth resources. Contact our team to start your project today.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
