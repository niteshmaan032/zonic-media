import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IndustryMarketingPage, {
  type IndustryMarketingPageData,
} from "@/app/components/IndustryMarketingPage";
import pagesJson from "@/data/industryMarketingPages.generated.json";
import "@/app/style/industryMarketingPages.css";

const pages = pagesJson as Record<string, IndustryMarketingPageData>;

type Props = {
  params: Promise<{ marketingAgencySlug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((marketingAgencySlug) => ({ marketingAgencySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marketingAgencySlug } = await params;
  const page = pages[marketingAgencySlug];

  if (!page) {
    return { title: "Service Not Found" };
  }

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Zonic Media — Marketing Agency for Small & Mid-Size Businesses",
        },
      ],
      title: page.title,
      description: page.description,
      url: `/services/${page.slug}`,
      type: "website",
    },
  };
}

export default async function MarketingAgencyPage({ params }: Props) {
  const { marketingAgencySlug } = await params;
  const page = pages[marketingAgencySlug];

  if (!page) {
    notFound();
  }

  return <IndustryMarketingPage page={page} />;
}
