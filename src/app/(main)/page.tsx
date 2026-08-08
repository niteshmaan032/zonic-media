import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import "./home.css";
import Footer from "@/app/components/Footer";
import ClutchWidget from "@/app/components/ClutchWidget";
import Blogs from "@/app/components/Blogs";
import HashScrollLink from "@/app/components/HashScrollLink";
import ServiceLeadForm from "@/app/components/ServiceLeadForm";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { getPublishedBlogs } from "@/backend/lib/blogs";
import { Metadata } from "next";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiCheck,
  FiFileText,
  FiMail,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiPlus,
  FiSearch,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { FaCircleCheck, FaStar } from "react-icons/fa6";

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

export const metadata: Metadata = {
  title: {
    absolute:
      "Marketing Agency for Small & Mid-Size Businesses | Zonic Media",
  },
  description:
    "Zonic Media helps small US businesses grow with local SEO, Google Business Profile reinstatement & optimization, website design, and Google Ads. Free audit.",
  keywords: [
    "digital marketing agency for small business",
    "local SEO agency USA",
    "Google Business Profile services",
    "marketing agency for small businesses",
    "local SEO services for small business",
    "small business website design",
    "PPC management for small business",
    "Google Maps ranking services",
    "logo and graphic design services",
    "online marketing agency USA",
    "best digital marketing agency for small business",
    "GMB reinstatement service",
    "Google Business Profile optimization agency",
    "best local SEO company USA",
  ],
  alternates: {
    canonical: "/",
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
    title: "Marketing Agency for Small & Mid-Size Businesses | Zonic Media",
    description:
      "Local SEO, Google Business Profile, website design, graphic & logo design, and PPC ads for small and mid-size US businesses.",
    url: "/",
    type: "website",
  },
};

export const revalidate = 300;

const SITE_URL = "https://www.zonicllc.com";

/* ─────────────────────────────────────────────────────────── JSON-LD ───── */

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

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "@id": `${SITE_URL}/#site-navigation`,
  name: siteNavigationItems.map((item) => item.name),
  url: siteNavigationItems.map((item) => item.url),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Zonic Media",
  url: SITE_URL,
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Local SEO and Google Business Profile Management",
  provider: {
    "@type": "LocalBusiness",
    name: "Zonic Media",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local Growth Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Reinstatement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Ads Management" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design and Development",
        },
      },
    ],
  },
};

/* Visible FAQ copy lives in `faqs` below — keep both in sync. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of businesses does Zonic Media work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with US local and service-based businesses: roofers, HVAC, plumbers, electricians, pest control, dental practices, real estate, cleaning companies, towing, and other local service providers. Our focus is helping these businesses get found on Google and turn nearby searches into phone calls.",
      },
    },
    {
      "@type": "Question",
      name: "Can you really get a suspended Google Business Profile reinstated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Profile reinstatement is one of our core specialties. We have helped reinstate more than 700 Google Business Profiles by diagnosing the suspension cause, fixing the underlying policy issues, and managing the appeal process. No agency can promise Google's decision, but we know the process and the common failure points.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with businesses in Delaware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We are based in Dover, Delaware and have deep roots in the Mid-Atlantic, but we serve local businesses across the United States. Our work is remote-first, so location is not a barrier to working together.",
      },
    },
    {
      "@type": "Question",
      name: "How is local SEO different from regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO focuses on getting your business into the Google Map Pack and local search results for customers searching nearby. It centers on your Google Business Profile, local citations, reviews, and location-relevant content, rather than competing nationally for broad keywords.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help my business show up in AI search results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI Overviews and AI assistants now answer a large share of local searches, and they pull from the same signals we already build: a healthy Google Business Profile, consistent citations, strong reviews, structured data, and clear service pages. The local SEO foundation that wins the Map Pack is the same foundation that gets your business cited in AI answers.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the service. Google Ads can generate qualified calls within the first weeks of launch. Local SEO and Map Pack ranking typically build over a few months as Google rebuilds trust in your profile and citations. Profile reinstatement timelines depend on Google's review process.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We don't lock you into long-term contracts. We earn the relationship month to month by delivering results, and most clients stay because the leads keep coming, not because they're contractually tied to us.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────── data ───── */

type Niche = {
  href: string;
  label: string;
  icon: ReactNode;
};

const niches: Niche[] = [
  {
    href: "/services/auto-repair-marketing-agency",
    label: "Auto Repair",
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z" />
    ),
  },
  {
    href: "/services/chiropractic-marketing-agency",
    label: "Chiropractic",
    icon: (
      <>
        <circle cx="12" cy="4" r="2" />
        <path d="M12 6v6M8 22l4-7 4 7M7 10l5 2 5-2" />
      </>
    ),
  },
  {
    href: "/services/cleaning-company-marketing-agency",
    label: "Cleaning Company",
    icon: <path d="M19 3l-7 7M12 10l-2 9-3-3 9-2M5 14l-2 2" />,
  },
  {
    href: "/services/dental-marketing-agency",
    label: "Dental",
    icon: (
      <path d="M12 5.5c-2-2-5-2-6 .5-1 3 .5 6 1 9 .3 2 .5 4 2 4s1.5-3 3-3 1.5 3 3 3 1.7-2 2-4c.5-3 2-6 1-9-1-2.5-4-2.5-6-.5" />
    ),
  },
  {
    href: "/services/electrician-marketing-agency",
    label: "Electrician",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7z" />,
  },
  {
    href: "/services/garage-door-marketing-agency",
    label: "Garage Door",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 9h18M3 13h18M3 17h18" />
      </>
    ),
  },
  {
    href: "/services/landscaping-marketing-agency",
    label: "Landscaping",
    icon: <path d="M12 21v-5M8 16h8l-4-6-4 6zM9 10h6l-3-5-3 5z" />,
  },
  {
    href: "/services/law-firm-marketing-agency",
    label: "Law Firms",
    icon: (
      <path d="M12 3v18M5 7h14M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0zM8 21h8" />
    ),
  },
  {
    href: "/services/moving-company-marketing-agency",
    label: "Moving Company",
    icon: (
      <>
        <path d="M3 6h13v9H3zM16 9h4l1 3v3h-5" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </>
    ),
  },
  {
    href: "/services/painting-contractor-marketing-agency",
    label: "Painting",
    icon: (
      <>
        <rect x="3" y="4" width="12" height="5" rx="1" />
        <path d="M15 6h4v4h-6M12 10v4h-2v8" />
      </>
    ),
  },
  {
    href: "/services/pest-control-marketing-agency",
    label: "Pest Control",
    icon: (
      <>
        <circle cx="12" cy="13" r="5" />
        <path d="M12 8V4M9 4h6M5 11l-2-1M19 11l2-1M5 15l-2 1M19 15l2 1" />
      </>
    ),
  },
  {
    href: "/services/real-estate-marketing-agency",
    label: "Real Estate",
    icon: (
      <>
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    href: "/services/roofing-marketing-agency",
    label: "Roofing",
    icon: (
      <>
        <path d="m3 12 9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </>
    ),
  },
  {
    href: "/services/septic-marketing-agency",
    label: "Septic",
    icon: (
      <>
        <path d="M3 6h18" />
        <path d="M12 6v6M9.5 9h5" />
        <rect x="5" y="12" width="14" height="7" rx="3" />
      </>
    ),
  },
  {
    href: "/services/solar-marketing-agency",
    label: "Solar",
    icon: (
      <>
        <circle cx="5.5" cy="5" r="2" />
        <path d="M7 10h10l2 9H5z" />
        <path d="M12 10v9M6 14.5h12" />
      </>
    ),
  },
  {
    href: "/services/home-inspector-marketing",
    label: "Home Inspector",
    icon: (
      <>
        <path d="m3 12 9-8 9 8M5 10v10h14V10" />
        <circle cx="12" cy="14" r="2.5" />
        <path d="m16 18-2.2-2.2" />
      </>
    ),
  },
  {
    href: "/services/plumbing-marketing-agency",
    label: "Plumbing",
    icon: (
      <>
        <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z" />
        <path d="M12 16v6" />
      </>
    ),
  },
  {
    href: "/services/hvac-marketing-agency",
    label: "HVAC",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
      </>
    ),
  },
];

type HomeService = {
  visual: "pack" | "verify" | "calls" | "web" | "ux" | "graphic";
  title: string;
  sub: string;
  desc: ReactNode;
  href: string;
  cta: string;
};

const homeServices: HomeService[] = [
  {
    visual: "pack",
    title: "Local SEO Agency",
    sub: "Win the Google Map Pack",
    desc: (
      <>
        Nearly half of Google searches have local intent, and the Map Pack takes
        around 44% of the clicks. Our{" "}
        <Link href="/services/local-seo-for-home-services" className="hm-inline-link">
          local SEO services
        </Link>{" "}
        put your business in that top 3 — turning nearby searches into steady
        calls, not just traffic.
      </>
    ),
    href: "/services/local-seo-for-home-services",
    cta: "Explore Local SEO",
  },
  {
    visual: "verify",
    title: "Google Business Profile",
    sub: "Setup, Optimization & Recovery",
    desc: (
      <>
        Your profile is your best free lead source. We optimize it to rank,
        generate reviews, and reinstate it if it&apos;s suspended. We&apos;ve
        recovered and{" "}
        <Link href="/services/gmb-verification-help" className="hm-inline-link">
          verified 700+ profiles
        </Link>{" "}
        for businesses like yours.
      </>
    ),
    href: "/services/gmb-reinstatement-help",
    cta: "Explore GBP Services",
  },
  {
    visual: "calls",
    title: "PPC Ads Agency",
    sub: "Google Ads That Pay For Themselves",
    desc: (
      <>
        <Link href="/services/google-ads" className="hm-inline-link">
          Google Ads management
        </Link>{" "}
        built to capture customers searching right now — managed for
        cost-per-lead, not wasted clicks, so every dollar of a tighter budget
        works harder.
      </>
    ),
    href: "/services/google-ads",
    cta: "Explore PPC Ads",
  },
  {
    visual: "web",
    title: "Website Design",
    sub: "Built to Book Jobs",
    desc: (
      <>
        Fast, mobile-first{" "}
        <Link href="/services/web-design" className="hm-inline-link">
          conversion-focused websites
        </Link>{" "}
        that make a small business look established and turn visitors into
        booked jobs — with technical SEO built in from day one.
      </>
    ),
    href: "/services/web-design",
    cta: "Explore Web Design",
  },
  {
    visual: "ux",
    title: "UI/UX Design",
    sub: "Interfaces That Convert",
    desc: (
      <>
        Wireframes, prototypes, and interface design that make every next step
        obvious — design systems your team can keep using after handover,
        checked at AA accessibility contrast.
      </>
    ),
    href: "/services",
    cta: "Explore UI/UX Design",
  },
  {
    visual: "graphic",
    title: "Graphic Design",
    sub: "Brand & Marketing Assets",
    desc: (
      <>
        Logos, graphics for ads, social, signage, and print — creative that
        keeps a growing brand looking consistent and credible everywhere
        customers see you.
      </>
    ),
    href: "/services",
    cta: "Explore Graphic Design",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit the Gaps",
    desc: "We review your profile, rankings, website, and ad opportunities to find the fastest routes to more leads.",
  },
  {
    num: "02",
    title: "Build the Plan",
    desc: "You get a clear roadmap with priorities, timelines, and the metrics that actually define success for your business.",
  },
  {
    num: "03",
    title: "Launch the Work",
    desc: "We ship the pages, profile fixes, campaigns, and tracking — moving from strategy into real, measurable execution.",
  },
  {
    num: "04",
    title: "Grow & Report",
    desc: "Ongoing optimization and plain-English reporting that shows exactly where your leads and dollars are coming from.",
  },
];

const launchSteps = [
  {
    day: "Day 1–2",
    title: "Logo & Brand Identity",
    desc: "Colors, logo, and a look that reads established from day one.",
  },
  {
    day: "Day 3–7",
    title: "Website Built & Tested",
    desc: "A fast, conversion-ready site built to turn visits into calls.",
  },
  {
    day: "Day 8–9",
    title: "Google Business Profile",
    desc: "Set up and verified on Maps — no verification headaches.",
  },
  {
    day: "Day 10–14",
    title: "Live & Taking Leads",
    desc: "Tracking wired in, socials set, and the phone starts ringing.",
  },
];

const trackRankRows = [
  { kw: "emergency plumber near me", pos: "#1", delta: "▲ 5" },
  { kw: "dentist in [city]", pos: "#2", delta: "▲ 7" },
  { kw: "roof repair near me", pos: "#1", delta: "▲ 4" },
  { kw: "house cleaning [city]", pos: "#3", delta: "▲ 8" },
];

const reviewBarHeights = [28, 36, 44, 52, 58, 68, 74];

const auditChecks = [
  "Your Map Pack growth plan",
  "Profile wins ready to unlock",
  "Citation opportunities mapped",
  "Review growth roadmap",
];

const auditRows = [
  { label: "Google Business Profile", flag: "A+ grade" },
  { label: "Citations & listings", flag: "100% accurate" },
  { label: "Review velocity", flag: "Ahead of top 3" },
];

type Faq = { q: string; a: ReactNode };

/* Mirrors faqJsonLd above — keep both in sync. */
const faqsLeft: Faq[] = [
  {
    q: "What kind of businesses do you work with?",
    a: (
      <>
        US local and service-based businesses — roofers, HVAC, plumbers,
        electricians, pest control, dental practices, real estate, cleaning
        companies, towing, and other local providers. Our focus is getting
        these businesses found on Google and turning nearby searches into phone
        calls.
      </>
    ),
  },
  {
    q: "Can you really get a suspended Google profile back?",
    a: (
      <>
        Reinstatement is one of our core specialties — we&apos;ve helped
        recover 700+ profiles by diagnosing the suspension cause, fixing the
        underlying policy issues, and managing the appeal. No agency can
        promise Google&apos;s decision, but we know the process and the common
        failure points cold.
      </>
    ),
  },
  {
    q: "Do you only work with businesses in Delaware?",
    a: (
      <>
        No. We&apos;re based in Dover, Delaware with deep roots in the
        Mid-Atlantic, but we serve local businesses across the United States.
        Our work is remote-first, so your location is never a barrier.
      </>
    ),
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: (
      <>
        Local SEO focuses on getting you into the Google Map Pack and local
        results for customers searching nearby. It centers on{" "}
        <Link href="/services/gmb-optimization" className="hm-inline-link">
          Google Business Profile optimization
        </Link>
        , citations, reviews, and location-relevant content — rather than
        competing nationally for broad keywords.
      </>
    ),
  },
];

const faqsRight: Faq[] = [
  {
    q: "Can you help my business show up in AI search results?",
    a: (
      <>
        Yes. AI Overviews and AI assistants now answer a large share of local
        searches, and they pull from the same signals we already build: a
        healthy Google Business Profile, consistent citations, strong reviews,
        structured data, and clear service pages. The local SEO foundation that
        wins the Map Pack is the same one that gets you cited in AI answers.
      </>
    ),
  },
  {
    q: "How quickly will I see results?",
    a: (
      <>
        It depends on the service. Google Ads can generate qualified calls
        within the first weeks of launch. Local SEO and Map Pack ranking
        typically build over a few months as Google rebuilds trust in your
        profile and citations. Reinstatement timelines depend on Google&apos;s
        review process.
      </>
    ),
  },
  {
    q: "Do you require long-term contracts?",
    a: (
      <>
        No. We don&apos;t lock you into long-term contracts. We earn the
        relationship month to month by delivering results — most clients stay
        because the leads keep coming, not because they&apos;re contractually
        tied to us.
      </>
    ),
  },
];

/* ─────────────────────────────────────────── animated visuals (CSS-only) ── */

/** Decorative micro-animation on each service card. Purely presentational. */
function HomeMiniVisual({ kind }: { kind: HomeService["visual"] }) {
  if (kind === "pack") {
    return (
      <div className="hm-mini hm-mini-pack" aria-hidden="true">
        <span className="hm-mp-row hm-mp-row--you">
          <FiStar />
          <i />
          <i />
        </span>
        <span className="hm-mp-row hm-mp-row--two">
          <i />
          <i />
        </span>
        <span className="hm-mp-row hm-mp-row--three">
          <i />
          <i />
        </span>
      </div>
    );
  }
  if (kind === "verify") {
    return (
      <div className="hm-mini hm-mini-verify" aria-hidden="true">
        <div className="hm-mv-head">
          <span className="hm-mv-ava">Z</span>
          <span className="hm-mv-lines">
            <i />
            <i />
          </span>
        </div>
        <span className="hm-mv-pill">
          <span className="hm-flip">
            <span className="hm-flip-b">Suspended</span>
            <span className="hm-flip-a">Verified</span>
          </span>
        </span>
        <span className="hm-mv-check">
          <FiCheck />
        </span>
      </div>
    );
  }
  if (kind === "calls") {
    return (
      <div className="hm-mini hm-mini-calls" aria-hidden="true">
        <span className="hm-mc-row">
          <span className="hm-mc-ic">
            <FiPhone />
          </span>
          <i />
          <b>Lead</b>
        </span>
        <span className="hm-mc-row">
          <span className="hm-mc-ic">
            <FiPhone />
          </span>
          <i />
          <b>Lead</b>
        </span>
        <span className="hm-mc-row">
          <span className="hm-mc-ic">
            <FiPhone />
          </span>
          <i />
          <b>Lead</b>
        </span>
      </div>
    );
  }
  if (kind === "web") {
    return (
      <div className="hm-mini hm-mini-web" aria-hidden="true">
        <span className="hm-mw-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="hm-mw-lines">
          <i />
          <i />
          <b />
        </span>
        <span className="hm-mw-score">
          <svg viewBox="0 0 40 40">
            <circle className="hm-mw-ring-bg" cx="20" cy="20" r="16" />
            <circle className="hm-mw-ring-val" cx="20" cy="20" r="16" />
          </svg>
          <b>99</b>
        </span>
      </div>
    );
  }
  if (kind === "ux") {
    return (
      <div className="hm-mini hm-mini-ux" aria-hidden="true">
        <span className="hm-ux-el hm-ux-el--bar" />
        <span className="hm-ux-el hm-ux-el--card">
          <i />
          <i />
        </span>
        <span className="hm-ux-el hm-ux-el--btn" />
        <svg className="hm-ux-cursor" viewBox="0 0 24 24">
          <path d="M4 2l16 11.5-7.3 1.2-4.2 6.3z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="hm-mini hm-mini-graphic" aria-hidden="true">
      <span className="hm-gd-tools">
        <i />
        <i />
        <i />
      </span>
      <span className="hm-gd-board">
        <i className="hm-gd-shape hm-gd-shape--circle" />
        <i className="hm-gd-shape hm-gd-shape--tri" />
        <i className="hm-gd-shape hm-gd-shape--bar" />
        <span className="hm-gd-select">
          <b />
          <b />
          <b />
          <b />
        </span>
      </span>
    </div>
  );
}

/** Hero floating cards. Purely decorative — screen readers skip them. */
function HeroFloaters() {
  return (
    <>
      <div className="hm-float hm-float--pack" aria-hidden="true">
        <span className="hm-float-cap">
          <FiMapPin />
          Google Map Pack
        </span>
        <span className="hm-pack-row hm-pack-row--you">
          <em>1</em>
          <FiStar />
          <i />
        </span>
        <span className="hm-pack-row">
          <em>2</em>
          <i />
        </span>
        <span className="hm-pack-row">
          <em>3</em>
          <i />
        </span>
      </div>

      <div className="hm-float hm-float--review" aria-hidden="true">
        <span className="hm-review-head">
          <span className="hm-review-ava">M</span>
          <span>
            <span className="hm-review-name">New 5-star review</span>
            <span className="hm-review-time">2 minutes ago</span>
          </span>
        </span>
        <span className="hm-review-stars">
          {[0, 1, 2, 3, 4].map((n) => (
            <FiStar key={n} style={{ "--n": n } as CSSProperties} />
          ))}
        </span>
        <span className="hm-review-line" />
        <span className="hm-review-line" />
      </div>

      <div className="hm-float hm-float--calls" aria-hidden="true">
        <span className="hm-calls-num">
          +38<span>%</span>
        </span>
        <span className="hm-calls-cap">calls this month</span>
        <span className="hm-calls-bars">
          {[0, 1, 2, 3, 4, 5, 6].map((n) => (
            <i key={n} style={{ "--n": n } as CSSProperties} />
          ))}
        </span>
      </div>

      <div className="hm-float hm-float--gbp" aria-hidden="true">
        <span className="hm-gbp-chip-row">
          <span className="hm-status-dot" />
          <span className="hm-gbp-chip-txt hm-flip">
            <span className="hm-flip-b">Profile suspended</span>
            <span className="hm-flip-a">Profile reinstated</span>
          </span>
        </span>
        <span className="hm-gbp-sub">Live on Google Maps</span>
      </div>

    </>
  );
}

/** GBP section signature visual: suspended listing loops back to live. */
function GbpConsole() {
  return (
    <div
      className="hm-gbp-console"
      role="img"
      aria-label="A Google Business Profile moving from suspended to reinstated: the listing goes live on Google Maps, call and direction buttons switch back on, and the recovery steps — audit, fix, appeal, live — complete in sequence."
    >
      <span className="hm-gc-chip">
        <FiAward aria-hidden="true" />
        700+ profiles recovered
      </span>

      <div className="hm-gc-card">
        <div className="hm-gc-status">
          <span className="hm-status-dot" aria-hidden="true" />
          <span className="hm-gc-state hm-flip" aria-hidden="true">
            <span className="hm-flip-b">Profile suspended</span>
            <span className="hm-flip-a">Live on Google Maps</span>
          </span>
          <span className="hm-gc-pill" aria-hidden="true">
            <span className="hm-flip">
              <span className="hm-flip-b">Suspended</span>
              <span className="hm-flip-a">Reinstated</span>
            </span>
          </span>
        </div>

        <div className="hm-gc-biz">
          <span className="hm-gc-logo" aria-hidden="true">
            Z
          </span>
          <div>
            <p className="hm-gc-name">Your Business</p>
            <p className="hm-gc-meta">
              <span className="hm-gc-stars" aria-hidden="true">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </span>
              4.9 · 214 reviews
            </p>
          </div>
        </div>

        <div className="hm-gc-actions" aria-hidden="true">
          <span className="hm-gc-act hm-gc-act--primary">
            <FiPhone />
            Call
          </span>
          <span className="hm-gc-act">
            <FiNavigation />
            Directions
          </span>
        </div>
      </div>

      <div className="hm-gc-feed" aria-hidden="true">
        <span className="hm-gc-feed-row">
          <span className="hm-gc-feed-ic hm-gc-feed-ic--star">
            <FiStar />
          </span>
          <span>
            <b>New 5-star review</b>
            <small>&quot;Fast, professional, and the phone rings again.&quot;</small>
          </span>
        </span>
        <span className="hm-gc-feed-row">
          <span className="hm-gc-feed-ic">
            <FiPhone />
          </span>
          <span>
            <b>New call from Google</b>
            <small>Map Pack · just now</small>
          </span>
        </span>
      </div>

      <div className="hm-gc-recovery" aria-hidden="true">
        <div className="hm-gc-rec-top">
          <span>Reinstatement progress</span>
          <b className="hm-gc-pct hm-flip">
            <span className="hm-flip-b">12%</span>
            <span className="hm-flip-a">100%</span>
          </b>
        </div>
        <div className="hm-gc-track">
          <span className="hm-gc-fill" />
        </div>
        <ul className="hm-gc-steps">
          {["Audit", "Fix", "Appeal", "Live"].map((step, i) => (
            <li key={step} style={{ "--i": i } as CSSProperties}>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────── page ───── */

export default async function Home() {
  const blogs = await getPublishedBlogs(6);

  return (
    <>
      <Script
        id="home-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="home-site-navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
      />
      <Script
        id="home-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="hm-page">
        {/* ═══════════════════════════════════════════════ 1 · HERO ═══════ */}
        <section className="hm-hero">
          <HeroFloaters />
          <div className="hm-wrap">
            <div className="hm-hero-inner">
              <span className="hm-hero-badge">
                <span className="hm-ping" aria-hidden="true" />
                Built for small &amp; mid-size US businesses
              </span>
              <h1 className="hm-hero-h1">
                Marketing Agency for{" "}
                <span className="hm-hl">
                  Small and Mid&#8209;Size
                  <svg viewBox="0 0 300 20" aria-hidden="true">
                    <path d="M4 14 C 70 5, 230 3, 296 11" />
                  </svg>
                </span>{" "}
                Businesses.
              </h1>
              <p className="hm-hero-sub">
                Local SEO, Google Business Profile, website design, graphic
                &amp; logo design, and PPC ads — one team that gets your
                business found on Google Maps, in search, and in the AI answers
                customers now trust.
              </p>
              <div className="hm-hero-badges">
                {/* Self-hosted Clutch badge — the live iframe embed sits
                    behind a Cloudflare challenge and breaks randomly. */}
                <a
                  href="https://clutch.co/profile/zonic-media?badge=11431"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Image
                    width={90}
                    height={90}
                    src="/images/clutch-top-company-2026.png"
                    alt="Top Clutch Digital Marketing Company Delaware 2026"
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <Image
                  width={90}
                  height={90}
                  src="/images/Partner.png"
                  alt="Yelp Advertising Partner"
                  style={{ objectFit: "contain" }}
                />
                <a
                  href="https://www.trustpilot.com/review/zonicllc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hm-badge-wide"
                    width={121}
                    height={56}
                    src="/images/trust-black.png"
                    alt="Zonic Media rated 5 stars on Trustpilot"
                  />
                </a>
              </div>
              <div className="hm-hero-ctas">
                <Link href="/contact-us" className="buttons">
                  Book a Free Strategy Call
                  <BtnArrow />
                </Link>
                <a href={SITE_CONTACT.phoneHref} className="hm-btn-ghost">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="hm-hero-trust">
                <span>
                  <span className="hm-stars" aria-hidden="true">
                    ★★★★★
                  </span>{" "}
                  <b>4.9</b> client rating
                </span>
                <span>
                  <b>700+</b> Google Business Profiles reinstated &amp; verified
                </span>
                <span>
                  <b>No</b> long-term contracts
                </span>
              </div>
            </div>

            {/* industry links strip */}
            <div className="hm-niches">
              <p className="hm-niches-cap">
                Specialists across 20+ local service niches ·{" "}
                <Link href="/industries">view all industries</Link>
              </p>
              <div className="hm-niche-chips">
                {niches.map((niche) => (
                  <Link
                    href={niche.href}
                    className="hm-niche-chip"
                    key={niche.label}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      aria-hidden="true"
                    >
                      {niche.icon}
                    </svg>
                    {niche.label}
                  </Link>
                ))}
                <Link href="/contact-us" className="hm-niche-chip hm-niche-chip--more">
                  <FiPlus aria-hidden="true" />
                  Don&apos;t see your niche? Let&apos;s talk
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════ 2 · ABOUT ═══════ */}
        <section className="hm-about" id="about">
          <div className="hm-wrap">
            <div className="hm-about-grid">
              <div>
                <span className="hm-eyebrow">About Zonic Media</span>
                <h2 className="hm-h2">
                  The Growth Team Behind 700+ Local Business Comebacks
                </h2>
                <p className="hm-lead">
                  Zonic Media is a digital marketing agency built for the way
                  small and mid-size businesses actually grow: through phone
                  calls, booked jobs, and a Google presence that works while
                  you&apos;re on the job. We&apos;re based in Dover, Delaware,
                  and work with{" "}
                  <Link href="/industries" className="hm-inline-link">
                    local service businesses
                  </Link>{" "}
                  across all 50 states.
                </p>
                <div className="hm-about-points">
                  <span className="hm-about-point">
                    <FiCheck aria-hidden="true" />
                    <span>
                      <b>One team, one plan</b> — strategy, SEO, design, and
                      ads under one roof, so nothing gets lost between vendors.
                    </span>
                  </span>
                  <span className="hm-about-point">
                    <FiCheck aria-hidden="true" />
                    <span>
                      <b>Built for smaller budgets, bigger goals</b> — we
                      prioritize the work that moves the phone first.
                    </span>
                  </span>
                  <span className="hm-about-point">
                    <FiCheck aria-hidden="true" />
                    <span>
                      <b>Results you can read</b> — plain-English reporting
                      tied to calls and jobs, not impressions.
                    </span>
                  </span>
                </div>
                <div className="hm-about-ctas">
                  <Link href="/about" className="buttons">
                    Meet the team
                    <BtnArrow />
                  </Link>
                  <Link href="/services" className="hm-btn-ghost">
                    Explore our services
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="hm-about-stats">
                <div className="hm-stat">
                  <p className="hm-stat-num">
                    700<span>+</span>
                  </p>
                  <p className="hm-stat-cap">
                    Google Business Profiles reinstated &amp; verified
                  </p>
                </div>
                <div className="hm-stat">
                  <p className="hm-stat-num">
                    1,500<span>+</span>
                  </p>
                  <p className="hm-stat-cap">
                    Google Business Profiles optimized
                  </p>
                </div>
                <div className="hm-stat">
                  <p className="hm-stat-num">4</p>
                  <p className="hm-stat-cap">
                    Channels under one roof — SEO, GBP, web &amp; ads
                  </p>
                </div>
                <div className="hm-stat">
                  <p className="hm-stat-num">
                    20<span>+</span>
                  </p>
                  <p className="hm-stat-cap">Local service niches served</p>
                </div>
                <div className="hm-stat hm-stat--wide">
                  <p className="hm-stat-wide-txt">
                    Based in Dover, Delaware — serving businesses nationwide
                    <small>
                      Deep roots across DE, PA, NJ, MD, FL, TX, and GA
                    </small>
                  </p>
                  <span className="hm-stat-wide-ic" aria-hidden="true">
                    <FiMapPin />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ 3 · SERVICES ═══════ */}
        <section className="hm-services" id="services">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">What we do</span>
              <h2 className="hm-h2">
                No. 1 Marketing &amp; SEO Agency for Small Businesses in the US
              </h2>
              <p className="hm-lead">
                Everything a small or mid-size business needs to grow online —
                strategy, visibility, design, and ads — handled by one{" "}
                <Link href="/services" className="hm-inline-link">
                  full-service marketing team
                </Link>{" "}
                that understands smaller budgets and bigger goals.
              </p>
            </div>
            <div className="hm-svc-grid">
              {homeServices.map((svc) => (
                <div className="hm-svc-card" key={svc.title}>
                  <HomeMiniVisual kind={svc.visual} />
                  <h3 className="hm-svc-title">{svc.title}</h3>
                  <p className="hm-svc-sub">{svc.sub}</p>
                  <p className="hm-svc-desc">{svc.desc}</p>
                  <div className="hm-svc-foot">
                    <Link href={svc.href} className="hm-svc-link">
                      {svc.cta}
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ 4 · TESTIMONIALS ═══════ */}
        <section className="hm-testi">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">Client results</span>
              <h2 className="hm-h2">
                Trusted by Small &amp; Mid-Size Businesses Across the US
              </h2>
            </div>
            <div className="hm-testi-clutch">
              <ClutchWidget
                widgetType="12"
                height="375"
                primaryColor="#2567e8"
                reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════ 5 · GOOGLE BUSINESS PROFILE (flagship) ══ */}
        <section className="hm-gbp" id="gbp">
          <div className="hm-wrap">
            <div className="hm-gbp-grid">
              <div>
                <span className="hm-eyebrow hm-eyebrow--light">
                  Our home turf · Google Business Profile
                </span>
                <h2>Suspended, Stuck, or Invisible? We Fix Google Profiles.</h2>
                <p className="hm-lead">
                  A{" "}
                  <Link
                    href="/services/gmb-reinstatement-help"
                    className="hm-inline-link"
                  >
                    suspended Google Business Profile
                  </Link>{" "}
                  can shut off your best free lead source overnight — and
                  Google rarely tells you why. This is the work we&apos;re
                  known for: we find the real cause, fix it, manage the appeal,
                  and then make the profile rank once it&apos;s back.
                </p>
                <div className="hm-gbp-feats">
                  <div className="hm-gbp-feat">
                    <span className="hm-gf-ic" aria-hidden="true">
                      <FiSearch />
                    </span>
                    <div>
                      <h4>Diagnose the Cause</h4>
                      <p>
                        We pinpoint the exact policy that triggered the
                        suspension before anything is filed.
                      </p>
                    </div>
                  </div>
                  <div className="hm-gbp-feat">
                    <span className="hm-gf-ic" aria-hidden="true">
                      <FiFileText />
                    </span>
                    <div>
                      <h4>Build the Appeal</h4>
                      <p>
                        Documentation and evidence packaged the way Google
                        wants it.
                      </p>
                    </div>
                  </div>
                  <div className="hm-gbp-feat">
                    <span className="hm-gf-ic" aria-hidden="true">
                      <FiShield />
                    </span>
                    <div>
                      <h4>Protect It After</h4>
                      <p>
                        We harden the profile so it doesn&apos;t get flagged
                        again.
                      </p>
                    </div>
                  </div>
                  <div className="hm-gbp-feat">
                    <span className="hm-gf-ic" aria-hidden="true">
                      <FiTrendingUp />
                    </span>
                    <div>
                      <h4>Rank It Higher</h4>
                      <p>
                        Once it&apos;s back, we optimize it for the Map Pack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hm-gbp-ctas">
                  <Link href="/services/gmb-reinstatement-help" className="buttons">
                    Get reinstatement help
                    <BtnArrow />
                  </Link>
                  <span className="hm-gbp-alt">
                    Stuck on verification?{" "}
                    <Link href="/services/gmb-verification-help">
                      We handle that too
                    </Link>
                  </span>
                </div>
              </div>

              <GbpConsole />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════ 6 · LAUNCHPAD ═══════ */}
        <section className="hm-launch" id="launchpad">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">Done-for-you launch</span>
              <h2 className="hm-h2">
                Launchpad: Your Business Online in 7 to 14 Days
              </h2>
              <p className="hm-lead">
                Logo, website, Google Business Profile, social setup, and a
                lead system —{" "}
                <Link href="/services/launchpad" className="hm-inline-link">
                  our all-in-one starter package
                </Link>{" "}
                gives a new or growing business everything it needs to start
                showing up and getting calls, handled by one team.
              </p>
            </div>

            <div className="hm-lj">
              <span className="hm-lj-rail" aria-hidden="true">
                <i />
              </span>
              <span className="hm-lj-rocket" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </span>
              <div className="hm-lj-steps">
                {launchSteps.map((step, i) => (
                  <div
                    className="hm-lj-step"
                    key={step.title}
                    style={{ "--i": i } as CSSProperties}
                  >
                    <span className="hm-lj-dot" aria-hidden="true">
                      <FiCheck />
                    </span>
                    <span className="hm-lj-day">{step.day}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hm-launch-ctas">
              <Link href="/services/launchpad" className="buttons">
                Explore Launchpad
                <BtnArrow />
              </Link>
              <Link href="/contact-us" className="hm-btn-ghost">
                Book a free consultation
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════ 7 · PROCESS ═══════ */}
        <section className="hm-process" id="process">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">How we work</span>
              <h2 className="hm-h2">A Clear Plan Before We Build Anything</h2>
              <p className="hm-lead">
                Every engagement starts with your goals and the fastest route
                to better leads — then we ship the work, not just a slide deck.
              </p>
            </div>
            <div className="hm-proc-grid">
              {processSteps.map((step) => (
                <div className="hm-proc-card" key={step.num}>
                  <span className="hm-proc-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════ 8 · DIFFERENCE ═══════ */}
        <section className="hm-compare">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">The difference</span>
              <h2 className="hm-h2">
                Marketing That&apos;s Busy Vs. Marketing That Books Jobs
              </h2>
            </div>
            <div className="hm-cmp-grid">
              <div className="hm-cmp-card hm-cmp--without">
                <span className="hm-cmp-tag">Going it alone</span>
                <h3>Lots of Activity, Unpredictable Results</h3>
                <div className="hm-cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Your listing sits below competitors in the Map Pack
                </div>
                <div className="hm-cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Ad budget burns on clicks that never call
                </div>
                <div className="hm-cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  Invisible in the AI answers customers now read first
                </div>
                <div className="hm-cmp-li">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  No clear answer to &quot;what&apos;s actually working?&quot;
                </div>
              </div>
              <div className="hm-cmp-card hm-cmp--with">
                <span className="hm-cmp-tag">Working with Zonic</span>
                <h3>Focused, Measurable, Easier to Scale</h3>
                <div className="hm-cmp-li">
                  <FiCheck aria-hidden="true" />
                  Your profile ranks in the top 3 where buyers look
                </div>
                <div className="hm-cmp-li">
                  <FiCheck aria-hidden="true" />
                  Ads tuned to cost-per-call, not cost-per-click
                </div>
                <div className="hm-cmp-li">
                  <FiCheck aria-hidden="true" />
                  A presence built to be cited by Google and AI search
                </div>
                <div className="hm-cmp-li">
                  <FiCheck aria-hidden="true" />
                  Reporting that shows where every lead came from
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ 8b · LIVE TRACKING ═════ */}
        <section className="hm-track">
          <div className="hm-wrap">
            <div className="hm-track-grid">
              <div>
                <span className="hm-eyebrow">Always measurable</span>
                <h2 className="hm-h2">
                  Watch Your Rankings and Reviews Climb,{" "}
                  <span className="hm-hl-text">Month over Month</span>
                </h2>
                <p className="hm-lead">
                  No black box. Every campaign comes with live rank tracking
                  for the local keywords that pay you, review growth
                  monitoring, and call tracking from your profile — all rolled
                  into one plain-English monthly report.
                </p>
                <p className="hm-lead">
                  If a number moves, you know why. If a number stalls, you know
                  what we are doing about it.
                </p>
                <HashScrollLink href="#contact" className="hm-btn2" offset={120}>
                  Get a Sample Report
                  <span className="hm-btn2-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="hm-mocks" aria-hidden="true">
                <div className="hm-mock-card">
                  <div className="hm-mock-head">
                    <h3>Keyword Rankings</h3>
                    <span className="hm-mock-tag">All improving</span>
                  </div>
                  <div className="hm-rank-rows">
                    {trackRankRows.map((row) => (
                      <div className="hm-rank-row" key={row.kw}>
                        <span className="hm-rank-kw">{row.kw}</span>
                        <span className="hm-rank-pos">{row.pos}</span>
                        <span className="hm-rank-delta">{row.delta}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hm-mock-card">
                  <div className="hm-mock-head">
                    <h3>Review Growth</h3>
                    <span className="hm-mock-tag">+32 this quarter</span>
                  </div>
                  <div className="hm-review-score">
                    <strong>4.9</strong>
                    <span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <p className="hm-review-count">
                    194 Google reviews and counting
                  </p>
                  <div className="hm-review-bars">
                    {reviewBarHeights.map((height, index) => (
                      <span
                        className="hm-review-bar"
                        key={index}
                        style={
                          { height: `${height}px`, "--n": index } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                  <p className="hm-review-bars-label">New reviews per month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════ 8c · FREE AUDIT BAND ═══ */}
        <section className="hm-audit">
          <div className="hm-wrap">
            <div className="hm-audit-banner">
              <div className="hm-audit-text">
                <span className="hm-eyebrow">Free marketing audit</span>
                <h3>See Exactly How We&apos;ll Grow Your Local Rankings</h3>
                <p>
                  We&apos;ll map your profile, citations, reviews, and rankings
                  — and show you the clear path to the top three for the
                  searches in your market. Free, and yours to keep either way.
                </p>
                <div className="hm-audit-checks">
                  {auditChecks.map((check) => (
                    <div className="hm-audit-check" key={check}>
                      <FaCircleCheck aria-hidden="true" />
                      {check}
                    </div>
                  ))}
                </div>
                <HashScrollLink
                  href="#contact"
                  className="hm-btn2 hm-btn2--white"
                  offset={120}
                >
                  Claim Your Free Audit
                  <span className="hm-btn2-circ">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </HashScrollLink>
              </div>

              <div className="hm-audit-card" aria-hidden="true">
                <div className="hm-audit-head">
                  <h4>Local Visibility Score</h4>
                  <span className="hm-mock-tag">After 6 months</span>
                </div>
                <div className="hm-audit-ring-wrap">
                  <div className="hm-audit-ring">
                    <span>
                      92<small>/100</small>
                    </span>
                  </div>
                  <div className="hm-audit-ring-info">
                    <strong>Excellent</strong>
                    <small>
                      Where our local campaigns typically land after six months
                      of compounding SEO work
                    </small>
                  </div>
                </div>
                {auditRows.map((row) => (
                  <div className="hm-audit-row" key={row.label}>
                    <span>{row.label}</span>
                    <span className="hm-audit-flag">{row.flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════ 9 · FAQ ═══════ */}
        <section className="hm-faq">
          <div className="hm-wrap">
            <div className="hm-sec-head hm-sec-head--center">
              <span className="hm-eyebrow">Common questions</span>
              <h2 className="hm-h2">What Local Business Owners Ask Us</h2>
            </div>
            <div className="hm-faq-cols">
              <div>
                {faqsLeft.map((faq, i) => (
                  <details className="hm-faq-item" name="hm-faq" open={i === 0} key={faq.q}>
                    <summary className="hm-faq-q">
                      {faq.q}
                      <span className="hm-faq-pm" aria-hidden="true">
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
                    <div className="hm-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
              <div>
                {faqsRight.map((faq) => (
                  <details className="hm-faq-item" name="hm-faq" key={faq.q}>
                    <summary className="hm-faq-q">
                      {faq.q}
                      <span className="hm-faq-pm" aria-hidden="true">
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
                    <div className="hm-faq-a">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════ 10 · BLOGS ══════ */}
        {blogs.length > 0 && (
          <div className="hm-blogs">
            <div className="hm-wrap">
              <Blogs blogs={blogs} />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════ 11 · CONTACT ══════ */}
        <section className="hm-contact" id="contact">
          <div className="hm-wrap">
            <div className="hm-contact-grid">
              <aside className="hm-contact-aside">
                <span className="hm-eyebrow">Get in touch</span>
                <h2 className="hm-h2">Tell Us Where You Want to Grow</h2>
                <p className="hm-lead">
                  Send us a few details about your business and the leads
                  you&apos;re after. We&apos;ll review your Google profile,
                  search visibility, and website, then come back with the
                  fastest next step — no obligation.
                </p>
                <div className="hm-contact-rows">
                  <a href={SITE_CONTACT.emailHref} className="hm-contact-row">
                    <span className="hm-contact-row-icon" aria-hidden="true">
                      <FiMail />
                    </span>
                    <span className="hm-contact-row-txt">
                      <small>Email us anytime</small>
                      <strong>{SITE_CONTACT.email}</strong>
                    </span>
                  </a>
                  <a href={SITE_CONTACT.phoneHref} className="hm-contact-row">
                    <span className="hm-contact-row-icon" aria-hidden="true">
                      <FiPhone />
                    </span>
                    <span className="hm-contact-row-txt">
                      <small>Speak with a strategist</small>
                      <strong>{SITE_CONTACT.phoneDisplay}</strong>
                    </span>
                  </a>
                  <a
                    href={SITE_CONTACT.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hm-contact-row"
                  >
                    <span className="hm-contact-row-icon" aria-hidden="true">
                      <FiMapPin />
                    </span>
                    <span className="hm-contact-row-txt">
                      <small>Visit our office</small>
                      <strong>{SITE_CONTACT.address}</strong>
                    </span>
                  </a>
                </div>
              </aside>

              <div className="hm-contact-main">
                <ServiceLeadForm
                  formType="home-strategy"
                  badge="Free strategy session"
                  title="Request Your Free Strategy Session"
                  subtitle="Takes about a minute — no commitment required."
                  submitText="Request My Free Session"
                  defaultServices={["Local SEO"]}
                  messageLabel="What do you want to grow?"
                  messagePlaceholder="Tell us about your business and goals"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════ 12 · FULL-WIDTH BANNER ═════ */}
        <section className="hm-banner">
          <span className="hm-banner-chip hm-banner-chip--a" aria-hidden="true">
            <FiStar />
            4.9 rated on Clutch
          </span>
          <span className="hm-banner-chip hm-banner-chip--b" aria-hidden="true">
            <FiMapPin />
            Map Pack top 3
          </span>
          <span className="hm-banner-chip hm-banner-chip--c" aria-hidden="true">
            <FiShield />
            700+ profiles recovered
          </span>
          <span className="hm-banner-chip hm-banner-chip--d" aria-hidden="true">
            <FiZap />
            Live in 7–14 days
          </span>

          <div className="hm-wrap">
            <div className="hm-banner-inner">
              <span className="hm-banner-eyebrow">Ready when you are</span>
              <h2>Let&apos;s Put Your Business Where Customers are Looking</h2>
              <p>
                Book a free strategy call and we&apos;ll walk through your
                Google profile, search visibility, and website — then map the
                fastest next step. No pressure, no long-term lock-in.
              </p>
              <div className="hm-banner-ctas">
                <Link href="/contact-us" className="hm-btn-white">
                  Book a Free Strategy Call
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <a href={SITE_CONTACT.phoneHref} className="hm-btn-gold">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="hm-banner-sub">
                <span>
                  <FiCheck aria-hidden="true" />
                  Free, no-obligation call
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  No long-term contracts
                </span>
                <span>
                  <FiCheck aria-hidden="true" />
                  Based in Dover, DE · serving the US
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
