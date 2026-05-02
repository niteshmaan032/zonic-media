import type { ContactFormContent } from "@/app/components/ContactForm";
import pestSeo from "./pest-seo.json";
import plumberSeo from "./plumber-seo.json";

export type HeadingPart = {
  text: string;
  highlight?: boolean;
};

export type LinkButton = {
  label: string;
  href: string;
};

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingMetadataImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type LandingPageMetadata = {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: LandingMetadataImage[];
    type: "website";
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    images: string[];
  };
};

export type LandingTextBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "button";
      button: LinkButton;
    }
  | {
      type: "comparison";
      items: {
        title: string;
        items: string[];
      }[];
    };

export type LandingTextColumn = {
  type: "text";
  lg: number;
  orderClassName?: string;
  heading: string;
  blocks: LandingTextBlock[];
};

export type LandingImageColumn = {
  type: "image";
  lg: number;
  orderClassName?: string;
  src: string;
  alt: string;
};

export type LandingSectionColumn = LandingTextColumn | LandingImageColumn;

export type LandingSectionRow = {
  className?: string;
  columns: LandingSectionColumn[];
};

export type LandingSection = {
  className: string;
  rows: LandingSectionRow[];
};

export type LandingPageContent = {
  slug: string;
  themeClassName: string;
  bulletIconSet: "fa" | "fa6";
  metadata: LandingPageMetadata;
  hero: {
    colLg: number;
    titleParts: HeadingPart[];
    paragraphs: string[];
    cta: LinkButton;
  };
  contentSections: LandingSection[];
  availability: {
    colLg: number;
    heading: string;
    paragraphs: string[];
    cta: LinkButton;
  };
  process: {
    introHeading: string;
    introDescription: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  faqs: LandingFaq[];
  testimonialsHeadingParts: HeadingPart[];
  contactForm: ContactFormContent;
};

export const landingPages: LandingPageContent[] = [
  pestSeo as LandingPageContent,
  plumberSeo as LandingPageContent,
];

export function getLandingPageBySlug(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}
