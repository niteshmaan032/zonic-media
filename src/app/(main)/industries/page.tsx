import "@/app/style/indust.css";
import Script from "next/script";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/app/components/Footer";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { buildBreadcrumbJsonLd, SITE_URL } from "@/shared/seoSchemas";

export const metadata: Metadata = {
  title: "Industries We Serve | Marketing by Industry",
  description:
    "Zonic Media builds industry-specific marketing for local service businesses: roofers, HVAC, plumbers, dentists, lawyers, movers and more. Find your niche and grow.",
  keywords: [
    "industries we serve",
    "industry specific marketing agency",
    "local SEO by industry",
    "marketing agency for local service businesses",
    "niche marketing agency",
    "home services marketing agency",
    "local business marketing by industry",
  ],
  alternates: {
    canonical: "/industries",
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
    title: "Industries We Serve | Marketing by Industry",
    description:
      "One specialist team, a dedicated playbook for every niche. See how Zonic Media grows roofers, HVAC, plumbing, dental, legal, real estate and more.",
    url: "/industries",
    type: "website",
  },
};

function BtnArrow() {
  return (
    <span className="buttons__icon-wrapper">
      <svg
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg"
        width="8"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 14 15"
        fill="none"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
        className="buttons__icon-svg buttons__icon-svg--copy"
      >
        <path
          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

type IndustryIcon = "auto" | "chiro" | "clean" | "dental" | "electric"
  | "garage" | "landscape" | "law" | "moving" | "painting" | "pest"
  | "realestate" | "roofing" | "septic" | "solar" | "inspection" | "plumbing" | "hvac"
  | "nonprofit" | "towing" | "pediatric" | "bathroom" | "kitchen" | "contractor"
  | "flooring" | "windows" | "appliance" | "pool" | "gutter" | "tree";

function Icon({ name }: { name: IndustryIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "auto":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z" />
        </svg>
      );
    case "chiro":
      return (
        <svg {...common}>
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v6M8 22l4-7 4 7M7 10l5 2 5-2" />
        </svg>
      );
    case "clean":
      return (
        <svg {...common}>
          <path d="M19 3l-7 7M12 10l-2 9-3-3 9-2M5 14l-2 2" />
        </svg>
      );
    case "dental":
      return (
        <svg {...common}>
          <path d="M12 5.5c-2-2-5-2-6 .5-1 3 .5 6 1 9 .3 2 .5 4 2 4s1.5-3 3-3 1.5 3 3 3 1.7-2 2-4c.5-3 2-6 1-9-1-2.5-4-2.5-6-.5" />
        </svg>
      );
    case "electric":
      return (
        <svg {...common}>
          <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
        </svg>
      );
    case "garage":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18M3 13h18M3 17h18" />
        </svg>
      );
    case "landscape":
      return (
        <svg {...common}>
          <path d="M12 21v-5M8 16h8l-4-6-4 6zM9 10h6l-3-5-3 5z" />
        </svg>
      );
    case "law":
      return (
        <svg {...common}>
          <path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0zM8 21h8" />
        </svg>
      );
    case "moving":
      return (
        <svg {...common}>
          <path d="M3 6h13v9H3zM16 9h4l1 3v3h-5" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );
    case "painting":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="12" height="5" rx="1" />
          <path d="M15 6h4v4h-6M12 10v4h-2v8" />
        </svg>
      );
    case "pest":
      return (
        <svg {...common}>
          <circle cx="12" cy="13" r="5" />
          <path d="M12 8V4M9 4h6M5 11l-2-1M19 11l2-1M5 15l-2 1M19 15l2 1" />
        </svg>
      );
    case "realestate":
      return (
        <svg {...common}>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "roofing":
      return (
        <svg {...common}>
          <path d="m3 12 9-8 9 8" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case "septic":
      return (
        <svg {...common}>
          <path d="M3 6h18" />
          <path d="M12 6v6M9.5 9h5" />
          <rect x="5" y="12" width="14" height="7" rx="3" />
        </svg>
      );
    case "solar":
      return (
        <svg {...common}>
          <circle cx="5.5" cy="5" r="2" />
          <path d="M7 10h10l2 9H5z" />
          <path d="M12 10v9M6 14.5h12" />
        </svg>
      );
    case "inspection":
      return (
        <svg {...common}>
          <path d="m3 12 9-8 9 8M5 10v10h14V10" />
          <circle cx="12" cy="14" r="2.5" />
          <path d="m16 18-2.2-2.2" />
        </svg>
      );
    case "plumbing":
      return (
        <svg {...common}>
          <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
          <path d="M12 16v6" />
        </svg>
      );
    case "hvac":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
        </svg>
      );
    case "nonprofit":
      return (
        <svg {...common}>
          <path d="M12 20s-6-4.2-6-8.5A3.5 3.5 0 0 1 12 9a3.5 3.5 0 0 1 6 2.5C18 15.8 12 20 12 20z" />
        </svg>
      );
    case "towing":
      return (
        <svg {...common}>
          <path d="M2 16V8h9l2 4h4a3 3 0 0 1 3 3v1" />
          <path d="M13 12l6-5" />
          <circle cx="6.5" cy="18" r="1.8" />
          <circle cx="17.5" cy="18" r="1.8" />
        </svg>
      );
    case "pediatric":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
          <path d="M9 12l-3 2M15 12l3 2" />
        </svg>
      );
    case "bathroom":
      return (
        <svg {...common}>
          <path d="M4 12V6a2 2 0 0 1 4 0" />
          <path d="M2 12h20v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" />
          <path d="M7 19v2M17 19v2" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...common}>
          <path d="M7 10V6a5 5 0 0 1 10 0v4" />
          <rect x="3" y="10" width="18" height="10" rx="2" />
        </svg>
      );
    case "contractor":
      return (
        <svg {...common}>
          <path d="M3 17h18" />
          <path d="M5 17v-2a7 7 0 0 1 14 0v2" />
          <path d="M10 8V4h4v4" />
        </svg>
      );
    case "flooring":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18M3 14h18M9 4v5M15 9v5M9 14v6" />
        </svg>
      );
    case "windows":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M12 3v18M3 12h18" />
        </svg>
      );
    case "appliance":
      return (
        <svg {...common}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M4 9h16M8 5.5h.01" />
          <circle cx="12" cy="15" r="3" />
        </svg>
      );
    case "pool":
      return (
        <svg {...common}>
          <path d="M2 17c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M7 15V5a2 2 0 0 1 4 0M13 15V5a2 2 0 0 1 4 0" />
          <path d="M7 9h4M13 9h4" />
        </svg>
      );
    case "gutter":
      return (
        <svg {...common}>
          <path d="M3 8l9-5 9 5" />
          <path d="M3 8v3h18V8" />
          <path d="M7 15v1M12 15v2M17 15v1" />
        </svg>
      );
    case "tree":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" />
          <path d="M12 14v8M12 18l-3-2M12 17l3-2" />
        </svg>
      );
  }
}

type Industry = {
  id: string;
  name: string;
  href: string;
  anchor: string;
  tagline: string;
  icon: IndustryIcon;
};

// Matches the header "Industries" dropdown exactly (same order, same links).
const INDUSTRIES: Industry[] = [
  {
    id: "auto-repair",
    name: "Auto Repair",
    href: "/services/auto-repair-marketing-agency",
    anchor: "Auto repair marketing",
    tagline:
      "Fill your bays with nearby drivers searching for repairs, diagnostics, and routine service.",
    icon: "auto",
  },
  {
    id: "chiropractic",
    name: "Chiropractic",
    href: "/services/chiropractic-marketing-agency",
    anchor: "Chiropractic marketing",
    tagline:
      "Turn “chiropractor near me” searches into booked new-patient adjustments.",
    icon: "chiro",
  },
  {
    id: "cleaning",
    name: "Cleaning Company",
    href: "/services/cleaning-company-marketing-agency",
    anchor: "Cleaning company marketing",
    tagline:
      "Win recurring residential and commercial cleaning contracts from local search.",
    icon: "clean",
  },
  {
    id: "dental",
    name: "Dental",
    href: "/services/dental-marketing-agency",
    anchor: "Dental marketing",
    tagline:
      "Bring in new patients for cleanings, implants, and high-value cosmetic work.",
    icon: "dental",
  },
  {
    id: "electrician",
    name: "Electrician",
    href: "/services/electrician-marketing-agency",
    anchor: "Electrician marketing",
    tagline:
      "Capture urgent and planned electrical jobs the moment homeowners search.",
    icon: "electric",
  },
  {
    id: "garage-door",
    name: "Garage Door",
    href: "/services/garage-door-marketing-agency",
    anchor: "Garage door marketing",
    tagline:
      "Own the map for garage door repair and installation calls across your area.",
    icon: "garage",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    href: "/services/landscaping-marketing-agency",
    anchor: "Landscaping marketing",
    tagline:
      "Book design, maintenance, and seasonal contracts throughout your service area.",
    icon: "landscape",
  },
  {
    id: "law-firm",
    name: "Law Firm",
    href: "/services/law-firm-marketing-agency",
    anchor: "Law firm marketing",
    tagline:
      "Attract qualified case inquiries from people ready to hire an attorney now.",
    icon: "law",
  },
  {
    id: "moving",
    name: "Moving Company",
    href: "/services/moving-company-marketing-agency",
    anchor: "Moving company marketing",
    tagline:
      "Fill your calendar with local and long-distance moves worth booking.",
    icon: "moving",
  },
  {
    id: "painting",
    name: "Painting Contractor",
    href: "/services/painting-contractor-marketing-agency",
    anchor: "Painting contractor marketing",
    tagline:
      "Drive estimate requests for interior, exterior, and commercial painting.",
    icon: "painting",
  },
  {
    id: "pest-control",
    name: "Pest Control",
    href: "/services/pest-control-marketing-agency",
    anchor: "Pest control marketing",
    tagline:
      "Land one-time treatments and recurring protection plans from local searchers.",
    icon: "pest",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    href: "/services/real-estate-marketing-agency",
    anchor: "Real estate marketing",
    tagline:
      "Generate buyer and seller leads and build a name that outlasts the listing.",
    icon: "realestate",
  },
  {
    id: "roofing",
    name: "Roofing",
    href: "/services/roofing-marketing-agency",
    anchor: "Roofing marketing",
    tagline:
      "Get storm, repair, and replacement leads before competitors pick up the phone.",
    icon: "roofing",
  },
  {
    id: "septic",
    name: "Septic Services",
    href: "/services/septic-marketing-agency",
    anchor: "Septic marketing",
    tagline:
      "Book pump-outs, drain field repairs, and full system installs from local search.",
    icon: "septic",
  },
  {
    id: "solar",
    name: "Solar",
    href: "/services/solar-marketing-agency",
    anchor: "Solar marketing",
    tagline:
      "Win panel install and battery storage consultations from serious local buyers.",
    icon: "solar",
  },
  {
    id: "home-inspector",
    name: "Home Inspector",
    href: "/services/home-inspector-marketing",
    anchor: "Home inspector marketing",
    tagline:
      "Book more inspections from agents, buyers, and repeat referral partners.",
    icon: "inspection",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    href: "/services/plumbing-marketing-agency",
    anchor: "Plumbing marketing",
    tagline:
      "Win urgent service calls and planned installs across your whole territory.",
    icon: "plumbing",
  },
  {
    id: "hvac",
    name: "HVAC",
    href: "/services/hvac-marketing-agency",
    anchor: "HVAC marketing",
    tagline:
      "Capture heating and cooling demand at every seasonal peak in demand.",
    icon: "hvac",
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    href: "/services/non-profit-marketing-agency",
    anchor: "Nonprofit marketing",
    tagline:
      "Grow donations and advocacy reach with search, social, and the Google Ad Grant.",
    icon: "nonprofit",
  },
  {
    id: "towing",
    name: "Towing",
    href: "/services/towing-marketing-agency",
    anchor: "Towing marketing",
    tagline:
      "Win cash calls from stranded drivers instead of living on motor club rates.",
    icon: "towing",
  },
  {
    id: "pediatric",
    name: "Pediatrics",
    href: "/services/pediatric-marketing-agency",
    anchor: "Pediatric marketing",
    tagline:
      "Fill your schedule with new families searching for a pediatrician nearby.",
    icon: "pediatric",
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    href: "/services/bathroom-remodeling-marketing-agency",
    anchor: "Bathroom remodeling marketing",
    tagline:
      "Book in-home estimates for shower conversions and full bath renovations.",
    icon: "bathroom",
  },
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling-marketing-agency",
    anchor: "Kitchen remodeling marketing",
    tagline:
      "Turn idea-stage homeowners into booked design consultations, not tire-kickers.",
    icon: "kitchen",
  },
  {
    id: "general-contractor",
    name: "General Contractor",
    href: "/services/general-contractor-marketing-agency",
    anchor: "General contractor marketing",
    tagline:
      "Build a pipeline for additions, remodels, and ADUs that outlasts referrals.",
    icon: "contractor",
  },
  {
    id: "flooring",
    name: "Flooring",
    href: "/services/flooring-marketing-agency",
    anchor: "Flooring marketing",
    tagline:
      "Own the product searches — LVP, hardwood, tile — that fill the measure calendar.",
    icon: "flooring",
  },
  {
    id: "window-and-door",
    name: "Window & Door",
    href: "/services/window-and-door-marketing-agency",
    anchor: "Window and door marketing",
    tagline:
      "Compete with the national replacement brands on your own home turf.",
    icon: "windows",
  },
  {
    id: "appliance-repair",
    name: "Appliance Repair",
    href: "/services/appliance-repair-marketing-agency",
    anchor: "Appliance repair marketing",
    tagline:
      "Same-day service calls at a cost per lead a repair ticket can actually carry.",
    icon: "appliance",
  },
  {
    id: "pool-service",
    name: "Pool Service",
    href: "/services/pool-service-marketing-agency",
    anchor: "Pool service marketing",
    tagline:
      "Convert one-off cleanups into recurring accounts that tighten your routes.",
    icon: "pool",
  },
  {
    id: "gutter",
    name: "Gutter",
    href: "/services/gutter-marketing-agency",
    anchor: "Gutter marketing",
    tagline:
      "Seamless gutter, guard, and cleaning work that scales with every storm.",
    icon: "gutter",
  },
  {
    id: "tree-service",
    name: "Tree Service",
    href: "/services/tree-service-marketing-agency",
    anchor: "Tree service marketing",
    tagline:
      "High-ticket removals and emergency storm response, booked before crews clear.",
    icon: "tree",
  },
];

// A representative selection for the hero coverage board (icons only).
const COVER_TILES: IndustryIcon[] = [
  "roofing",
  "hvac",
  "plumbing",
  "dental",
  "law",
  "realestate",
  "electric",
  "pest",
  "moving",
];

const included = [
  {
    title: "Local SEO & Map Pack",
    body: "Rank in the local 3-pack and organic results for the searches that actually bring your industry business.",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Google Business Profile",
    body: (
      <>
        Setup, optimization, and{" "}
        <Link href="/services/gmb-reinstatement-help" className="ind-inline-link">
          profile reinstatement
        </Link>{" "}
        so your profile earns calls, directions, and trust in your area.
      </>
    ),
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
      </>
    ),
  },
  {
    title: "Conversion-ready website",
    body: "A fast, industry-specific site built to turn visitors into booked calls and submitted forms.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    title: "Google Ads that pay back",
    body: (
      <>
        <Link href="/services/google-ads" className="ind-inline-link">
          Paid search
        </Link>{" "}
        tuned to cost-per-call, so every click is aimed at jobs worth winning in
        your niche.
      </>
    ),
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 3 3 5-6" />
      </>
    ),
  },
  {
    title: "Reviews & reputation",
    body: "Systems that grow genuine 5-star reviews and keep your rating ahead of local competitors.",
    icon: (
      <>
        <path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 3Z" />
      </>
    ),
  },
  {
    title: "Plain-English reporting",
    body: "Clear monthly numbers on calls, leads, and rankings, so you always know what your budget is doing.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
  },
];

// Each option must be on the API's allowed-services whitelist (leadsRoute.ts).
const INDUSTRY_SERVICE_OPTIONS = [
  "Local SEO",
  "Google My Business (GMB)",
  "Pay Per Click (PPC)",
  "Web Design",
  "Web Development",
];

const industryFaqs = [
  {
    question: "Which industries does Zonic Media work with?",
    answer:
      "We specialize in local, service-based businesses. That includes roofing, HVAC, plumbing, septic, solar, electrical, garage door, landscaping, painting, moving, and auto repair companies, plus dental, chiropractic, and law practices, real estate agents, home inspectors, and cleaning and pest control companies. Each one has its own dedicated marketing page and strategy.",
  },
  {
    question: "Why does industry-specific marketing matter?",
    answer:
      "Every industry has different customers, search behavior, seasons, and competitors. A roofer needs storm-response leads; a dentist needs steady new patients; a mover needs volume during peak months. We build around how people in your industry actually search and decide, instead of running the same generic playbook for everyone.",
  },
  {
    question: "I don't see my exact industry listed. Can you still help?",
    answer:
      "Yes. The industries shown here are where we have the deepest track record, but our core work, Local SEO, Google Business Profile, websites, and Google Ads, applies to almost any local service business. Reach out and we'll tell you honestly whether we're the right fit.",
  },
  {
    question: "What's included when you take on my industry?",
    answer:
      "Most engagements combine Local SEO and Map Pack rankings, Google Business Profile optimization, a conversion-ready website, Google Ads, review growth, and plain-English reporting. We tailor the mix to your goals, market, and budget rather than selling a fixed package.",
  },
  {
    question: "Do you only work with businesses in Delaware?",
    answer:
      "No. We're based in Dover, Delaware, but we work remote-first with local service businesses across the United States. Your location is never a barrier to working together.",
  },
];

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Industries We Serve", url: "/industries" },
]);

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/industries#collection`,
  url: `${SITE_URL}/industries`,
  name: "Industries We Serve",
  description:
    "Industry-specific local marketing from Zonic Media for service businesses across the United States.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: INDUSTRIES.length,
    itemListElement: INDUSTRIES.map((ind, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${ind.name} Marketing`,
      url: `${SITE_URL}${ind.href}`,
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: industryFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function Page() {
  return (
    <>
      <Script
        id="industries-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="industries-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Script
        id="industries-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="industries-hub">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="ind-hero">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Industries we serve</span>
                <h1>
                  Local marketing built around{" "}
                  <span className="accent">your industry.</span>
                </h1>
                <p className="lead">
                  Roofers, dentists, movers, and law firms don&apos;t win
                  customers the same way. We run a dedicated{" "}
                  <Link href="/services/local-seo-for-home-services" className="ind-inline-link">
                    local SEO
                  </Link>
                  , Google Business Profile, website, and ads playbook for every
                  niche we serve, so your marketing fits how people actually
                  search for what you do.
                </p>
                <div className="hero-actions">
                  <a href="#all-industries" className="buttons">
                    Find your industry
                    <BtnArrow />
                  </a>
                  <a
                    href={SITE_CONTACT.phoneHref}
                    className="btn btn-ghost-light"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ width: 17, height: 17 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Industry coverage board — the page's signature visual */}
              <div className="ind-hero-visual" aria-hidden="true">
                <div className="cover-card">
                  <div className="cover-head">
                    <span className="cover-eyebrow">
                      <span className="cover-ping"></span>Industries covered
                    </span>
                    <div className="cover-count">
                      <span className="cc-num">{INDUSTRIES.length}</span>
                      <span className="cc-lbl">
                        local niches, one specialist team
                      </span>
                    </div>
                  </div>

                  <div className="cover-tiles">
                    {COVER_TILES.map((icon, i) => (
                      <span className="cover-tile" key={i}>
                        <Icon name={icon} />
                      </span>
                    ))}
                    <span className="cover-tile cover-tile--more">
                      +{INDUSTRIES.length - COVER_TILES.length}
                    </span>
                  </div>

                  <div className="cover-foot">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    A dedicated strategy for every one
                  </div>
                </div>

                <div className="cover-badge cb1">
                  <div className="ic ic-rank">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Typical result</div>
                    <div className="val">Map Pack Top 3</div>
                  </div>
                </div>
                <div className="cover-badge cb2">
                  <div className="ic ic-play">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M8 13h8M8 17h5" />
                    </svg>
                  </div>
                  <div>
                    <div className="lbl">Per industry</div>
                    <div className="val">Own playbook</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="st">
                <div className="n">
                  {INDUSTRIES.length}
                  <span>+</span>
                </div>
                <div className="c">Industries with a dedicated strategy</div>
              </div>
              <div className="st">
                <div className="n">
                  700<span>+</span>
                </div>
                <div className="c">
                  Google Business Profiles reinstated &amp; verified
                </div>
              </div>
              <div className="st">
                <div className="n">
                  5.0<span>★</span>
                </div>
                <div className="c">Average client rating</div>
              </div>
              <div className="st">
                <div className="n">
                  95<span>%</span>
                </div>
                <div className="c">Client growth success rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY INDUSTRY-SPECIFIC ────────────────────────── */}
        <section className="ind-story">
          <div className="wrap">
            <div className="story-grid">
              <div className="story-label">
                <span className="eyebrow">Why it matters</span>
                <h2>One playbook per niche beats one for everyone.</h2>
              </div>
              <div className="story-body">
                <p>
                  A generic agency runs the same checklist whether you fix
                  roofs or run a{" "}
                  <Link href="/services/law-firm-marketing-agency" className="ind-inline-link">
                    law firm
                  </Link>
                  . We don&apos;t. Every industry has its own{" "}
                  <strong>customers, search terms, seasons, and competitors</strong>
                  , and marketing that ignores those differences leaves calls on
                  the table.
                </p>
                <p>
                  A{" "}
                  <Link href="/services/roofing-marketing-agency" className="ind-inline-link">
                    roofing company
                  </Link>{" "}
                  needs to show up the moment a storm rolls through. A{" "}
                  <Link href="/services/dental-marketing-agency" className="ind-inline-link">
                    dental practice
                  </Link>{" "}
                  needs a steady stream of new patients month after month. A
                  moving company needs volume during peak season. We build the
                  strategy around your reality, not a template.
                </p>
                <p>
                  Under the hood the tools are consistent, Local SEO, a healthy{" "}
                  <Link href="/services/gmb-optimization" className="ind-inline-link">
                    Google Business Profile
                  </Link>
                  , a{" "}
                  <Link href="/services/web-design" className="ind-inline-link">
                    conversion-ready website
                  </Link>
                  , and paid ads, but{" "}
                  <strong>how we aim them is tuned to your industry</strong> and
                  the way people in it actually decide who to call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ALL INDUSTRIES GRID (core) ───────────────────── */}
        <section className="ind-grid-sec" id="all-industries">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">Pick your industry</span>
              <h2>Marketing tailored to your line of work</h2>
              <p>
                Choose your industry to see exactly how we generate leads for
                businesses like yours, or call us and we&apos;ll map it out live.
              </p>
            </div>

            <div className="ind-grid">
              {INDUSTRIES.map((ind) => (
                <Link href={ind.href} className="ind-card" key={ind.id}>
                  <span className="ind-ic">
                    <Icon name={ind.icon} />
                  </span>
                  <h3>{ind.name}</h3>
                  <p>{ind.tagline}</p>
                  <span className="ind-link">
                    {ind.anchor}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
        <section className="ind-included">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">What every engagement includes</span>
              <h2>The same growth engine, aimed at your niche</h2>
              <p>
                No matter which industry you&apos;re in, these are the levers we
                pull, then tune to the way your customers search and buy.
              </p>
            </div>
            <div className="inc-grid">
              {included.map((item) => (
                <div className="inc-card" key={item.title}>
                  <div className="inc-ic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="ind-faq">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow center">Common questions</span>
              <h2>Industries, answered</h2>
            </div>
            <div className="faq-wrap">
              {[industryFaqs.slice(0, 3), industryFaqs.slice(3)].map(
                (column, ci) => (
                  <div className="faq-col" key={ci}>
                    {column.map((faq, i) => (
                      <details
                        className="faq-item"
                        key={faq.question}
                        open={ci === 0 && i === 0}
                      >
                        <summary className="faq-q">
                          {faq.question}
                          <span className="pm">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </summary>
                        <div className="faq-a">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── CONTACT (left copy + details, right form) ────── */}
        <section className="ind-contact" id="contact">
          <div className="wrap">
            <div className="contact-grid">
              <div className="contact-copy">
                <span className="eyebrow">Tell us your industry</span>
                <h2>Get a plan built for your business</h2>
                <p>
                  Share a little about what you do and where you want to grow.
                  We&apos;ll come back with the fastest next step for your
                  industry — a free look at your Google profile, search
                  visibility, and website. No obligation.
                </p>

                <ul className="contact-details">
                  <li>
                    <a href={SITE_CONTACT.phoneHref}>
                      <span className="ic">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      </span>
                      <span className="ct">
                        <span className="lbl">Call us</span>
                        <span className="val">{SITE_CONTACT.phoneDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={SITE_CONTACT.emailHref}>
                      <span className="ic">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      </span>
                      <span className="ct">
                        <span className="lbl">Email us</span>
                        <span className="val">{SITE_CONTACT.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE_CONTACT.mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ic">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <span className="ct">
                        <span className="lbl">Visit us</span>
                        <span className="val">{SITE_CONTACT.address}</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="contact-form-col">
                <ServiceLeadForm
                  formType="industries"
                  badge="Free consultation"
                  title="Request your free plan"
                  subtitle="We'll reply within one business day."
                  submitText="Get My Plan"
                  serviceOptions={INDUSTRY_SERVICE_OPTIONS}
                  messagePlaceholder="Tell us your industry and what you'd like to grow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="cta-final">
          <div className="wrap">
            <div className="cta-inner">
              <span className="eyebrow center">Ready when you are</span>
              <h2>Let&apos;s grow your business, your way</h2>
              <p>
                Book a free strategy call and we&apos;ll walk you through the
                fastest next step for your industry, with a look at your Google
                profile, search visibility, and website. No obligation.
              </p>
              <div className="cta-actions">
                <a href={SITE_CONTACT.bookCallHref} className="buttons">
                  Book a Free Strategy Call
                  <BtnArrow />
                </a>
                <a href={SITE_CONTACT.phoneHref} className="btn btn-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: 17, height: 17 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.84.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Page;
