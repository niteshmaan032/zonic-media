import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiLayout,
  FiMail,
  FiMonitor,
  FiPenTool,
  FiPhone,
  FiPlus,
  FiRefreshCw,
  FiShoppingCart,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import {
  SiGoogle,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglemaps,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

// Converted to Tailwind (redesign R2 pilot, Oct 2026). The old stylesheets
// stay in the repo until the final clean-up.
import "@/components/rd/dfw-web/dfwWeb.base.css";
import "@/components/rd/dfw-kit/ui.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  AvatarPh,
  CityPagesPanel,
  GoogleRatingBadge,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
} from "@/components/rd/dfw-web/DfwMarketingVisuals";
import {
  LeadPanel,
  SiteBuild,
  SpeedPanel,
  WebJourneyPhone,
} from "@/components/rd/dfw-web/DfwWebVisuals";
import { BuildCard, webStepUi } from "@/components/rd/dfw-web/WebUi";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   DALLAS–FORT WORTH WEB DESIGN AGENCY — built 15 Oct 2026.

   Same layout and stylesheet as the sibling DFW digital marketing page
   (/services/dallas-fort-worth/digital-marketing-agency); every heading,
   paragraph and UI demo is rewritten for web design. Web-design UI pieces
   live in DfwWebVisuals.tsx and dfwWebDesign.css.

   STATUS: launched 15 Oct 2026 once the photos were in: indexable, in
   src/app/sitemap.ts, in the navbar Locations dropdown under Dallas–Fort
   Worth, and linked from the DFW marketing hub and /services/web-design.

   NO PHOTOS (owner, 19 Oct 2026): the about section and the process steps
   use UI components instead of images (WebUi.tsx: BuildCard, one UI per
   step); the wide about box keeps its photo (owner, same day). Old photos
   stay in /public/images/dfw/web/ until the final clean-up.

   FACTS come from the existing /services/web-design page and the home
   page: 120+ websites shipped, 2–3 week builds, WordPress / Shopify /
   custom builds, flat project quote after a free call, on-page SEO + Core
   Web Vitals + lead forms in every build, 5.0 on Clutch from 21 reviews,
   20+ niches. Never claim a Dallas office or address.
--------------------------------------------------------------------------- */

const PAGE_PATH = "/services/dallas-fort-worth/web-design-agency";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/* Keywords (Semrush US, 15 Oct 2026):
     dallas web design 2,400 (KD 25) · website design dallas 1,900 (25) ·
     web design dallas 1,900 (30) · dallas website design 1,300 (21) ·
     fort worth web design 1,300 (19) · dallas web design company 1,000 (34)
     · web design company dallas 1,000 (33) · web development dallas 880
     (19) · web design agency dallas 720 (31) · web design fort worth 720
     (15) · web design plano 590 (7) · web design frisco 590 (7) · website
     design fort worth 590 (20) · dallas website development 480 (35) ·
     web design frisco tx 390 (10) · website design plano tx 260 (7) ·
     web design denton tx 170 (14). SERP (15 Oct): agency homepages plus
     Yelp, Wix-partner and "top agencies" lists. */
const TITLE = "Dallas Web Design & Fort Worth Website Design | Zonic Media";
const DESCRIPTION =
  "Dallas web design agency building fast, mobile-first websites that turn Dallas–Fort Worth visitors into calls. Free strategy call and a flat project quote.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  keywords: [
    "dallas web design",
    "web design dallas",
    "website design dallas",
    "dallas website design",
    "dallas web design company",
    "web design agency dallas",
    "fort worth web design",
    "web design fort worth",
    "website design fort worth",
    "web design plano",
    "web design frisco",
    "website design plano tx",
    "web design frisco tx",
    "web development dallas",
    "dallas website development",
    "dfw web design",
  ],
  openGraph: {
    title: "Dallas–Fort Worth Web Design Agency | Zonic Media",
    description: DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/dfw/web/dfw-team-review.png",
        width: 1672,
        height: 941,
        alt: "Zonic Media team reviewing a new homepage design for a Dallas–Fort Worth business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas–Fort Worth Web Design Agency | Zonic Media",
    description:
      "Fast, mobile-first websites for DFW businesses, built to turn visitors into calls. Free strategy call and a flat project quote.",
  },
};

/* ------------------------------------------------------------------ data */

const services = [
  {
    icon: FiPenTool,
    tone: "blue",
    title: "Custom web design & development",
    body: "A website designed and developed for your business and your Dallas–Fort Worth customers, not a template with your logo dropped in.",
    points: [
      "Custom design built around your brand",
      "Copy written for how DFW customers search",
      "One clear call to action on every page",
    ],
    href: "/services/web-design",
    link: "Custom website design",
  },
  {
    icon: FiRefreshCw,
    tone: "red",
    title: "Website redesign",
    body: "Outdated site losing calls? We rebuild it to be faster, clearer and easier to contact, while protecting the Google rankings you already have.",
    points: [
      "Old URLs redirected to the new pages",
      "Content and photos refreshed",
      "Faster pages and a clearer structure",
    ],
    href: "/services/web-design",
    link: "Website redesign",
  },
  {
    icon: FiLayout,
    tone: "gold",
    title: "WordPress websites",
    body: "Fully responsive WordPress websites you can update yourself, optimized for speed, SEO and easy content management.",
    points: [
      "Easy-to-edit pages and posts",
      "Responsive on phones, tablets and desktops",
      "SEO structure set up from day one",
    ],
    href: "/services/web-design",
    link: "WordPress web design",
  },
  {
    icon: FiShoppingCart,
    tone: "green",
    title: "Shopify e-commerce stores",
    body: "Conversion-focused Shopify stores with optimized product pages and a smooth, secure checkout for DFW retailers and brands.",
    points: [
      "Product and collection pages that sell",
      "Secure, simple checkout",
      "Mobile-first store design",
    ],
    href: "/services/web-design",
    link: "Shopify store design",
  },
  {
    icon: FiTarget,
    tone: "ink",
    title: "Landing pages for Google Ads",
    body: "Focused landing pages for your Google Ads and Local Services campaigns, so every paid click has one clear next step.",
    points: [
      "One page per offer or service",
      "Fast-loading, single-goal layouts",
      "Conversion tracking connected",
    ],
    href: "/services/google-ads",
    link: "Google Ads management",
  },
  {
    icon: FiTrendingUp,
    tone: "soft",
    title: "Websites with local SEO",
    note: "SEO from $297/mo",
    body: "Launch your new site with local SEO so it ranks across Dallas, Fort Worth, Plano and Frisco, not just looks good.",
    points: [
      "Linked to your Google Business Profile",
      "City pages built to rank",
      "Rankings tracked by city every month",
    ],
    href: "/services/dallas-fort-worth/local-seo-agency",
    link: "Dallas–Fort Worth local SEO",
  },
];

const features = [
  {
    label: "Conversion",
    title: "Websites Built to Turn Visitors Into Calls",
    body: "A beautiful website that doesn’t make the phone ring is just a brochure. Every page we design gives a Dallas–Fort Worth customer one clear next step, with your reviews, services and service area right where they decide.",
    points: [
      {
        t: "Click-to-call everywhere",
        d: "A tap-to-call button on every page, especially on phones.",
      },
      {
        t: "Short quote forms",
        d: "Three or four fields, not twelve, so more people finish them.",
      },
      {
        t: "Trust up front",
        d: "Reviews, badges and real photos where customers look first.",
      },
      {
        t: "Every lead counted",
        d: "Call and form tracking connected at launch.",
      },
    ],
    href: "/services/web-design",
    link: "Website design services",
    panel: <LeadPanel />,
  },
  {
    label: "Speed",
    title: "Fast on Every Phone in the Metroplex",
    body: "Most DFW customers find a local business on their phone, often from a job site or the car. We plan page speed into the build, size every image and keep the code lean, so your site passes Google’s Core Web Vitals at launch.",
    points: [
      {
        t: "Mobile-first layouts",
        d: "Designed for the phone first, then scaled up to desktop.",
      },
      {
        t: "Core Web Vitals passed",
        d: "Checked before launch on every build.",
      },
      { t: "Optimized images", d: "Compressed and sized for each screen." },
      {
        t: "Lean, clean code",
        d: "No bloated themes slowing your pages down.",
      },
    ],
    href: "/services/launchpad",
    link: "New business? See LaunchPad",
    panel: <SpeedPanel />,
  },
  {
    label: "SEO built in",
    title: "Built to Rank in Every DFW Suburb",
    body: "One “service area” page won’t rank in Frisco and Fort Worth at the same time. We build a page for each city and service you want work from, with on-page SEO and structured data, so your new website is ready to rank across Dallas–Fort Worth.",
    points: [
      {
        t: "City and service pages",
        d: "A dedicated page for each suburb you serve.",
      },
      {
        t: "On-page SEO included",
        d: "Titles, headings and copy matched to real searches.",
      },
      {
        t: "Structured data",
        d: "Schema on every page so Google understands your business.",
      },
      {
        t: "Ready for local SEO",
        d: "Connected to your Google Business Profile at launch.",
      },
    ],
    href: "/services/local-seo-packages",
    link: "Pair your site with local SEO",
    panel: <CityPagesPanel />,
  },
];

/* Hand-placed "+" marks for the hero background (% of the hero box). */
const heroMarks: [number, number][] = [
  [5, 15],
  [12, 31],
  [4, 47],
  [15, 57],
  [8, 70],
  [95, 13],
  [88, 27],
  [96, 42],
  [85, 55],
  [92, 68],
  [33, 7],
  [67, 8],
];

const journey = [
  {
    t: "They find your site",
    d: "A Plano homeowner searches for a roofer and taps your result, because your page title matches exactly what they typed.",
  },
  {
    t: "It loads fast and looks right",
    d: "Your homepage opens in a blink on their phone, with your services, reviews and service area right up front.",
  },
  {
    t: "They ask for a quote",
    d: "One tap on Call now or a short form. No hunting for a phone number and no twelve-field forms.",
  },
  {
    t: "You get the lead",
    d: "The request comes straight to you, and tracking shows which page and search brought it in.",
  },
];

const steps = [
  {
    when: "Day 1",
    title: "A Free Strategy Call",
    body: "We learn your services, your best customers and the DFW cities you want work from, review your current site, and send a flat project quote.",
    href: "#dfw-contact",
    tone: "blue",
  },
  {
    when: "Weeks 1–2",
    title: "Sitemap, Wireframes and Copy",
    body: "We plan every page, sketch the layout and write copy around what your customers search for, and you approve it all before design starts.",
    href: "/services/web-design",
    tone: "gold",
  },
  {
    when: "Weeks 2–4",
    title: "Design and Build",
    body: "Your site is designed for your brand, built mobile-first and tuned for speed, with click-to-call, quote forms and on-page SEO on every page.",
    href: "/services/launchpad",
    tone: "green",
  },
  {
    when: "Launch",
    title: "Test, Launch and Track",
    body: "We test on phones, tablets and desktops, launch, then connect analytics and call tracking so you can see the leads your new site brings in.",
    href: "/services/local-seo-packages",
    tone: "red",
  },
];

const hubLeft = [
  { icon: SiWordpress, name: "WordPress", tone: "wordpress" },
  { icon: SiShopify, name: "Shopify", tone: "shopify" },
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Business Profile", tone: "maps" },
];
const hubRight = [
  { icon: SiGoogleanalytics, name: "Google Analytics", tone: "analytics" },
  {
    icon: SiGooglesearchconsole,
    name: "Google Search Console",
    tone: "searchconsole",
  },
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
  { icon: SiGoogletagmanager, name: "Google Tag Manager", tone: "tagmanager" },
];

const faqs: { q: string; a: string; link?: { href: string; label: string } }[] =
  [
    {
      q: "How much does it cost to design a website in Dallas?",
      a: "Most custom small-business websites from US agencies cost $2,500 to $10,000, depending on page count, custom design and integrations. Zonic Media quotes a flat project fee after a free strategy call, and every build includes on-page SEO, Core Web Vitals optimization and lead forms. For service businesses we can also bundle a website with no upfront fee into a qualifying marketing plan.",
      link: {
        href: "/website-design-agency-us/offer",
        label: "See our free website offer",
      },
    },
    {
      q: "What affects the cost of a website?",
      a: "The biggest factors are the number of pages, custom design versus a template, e-commerce or booking features, integrations with the tools you already use, and whether you need copy written for you. A few well-planned pages for each service and city usually beat a large site that nobody updates.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most websites take 2 to 3 weeks from kickoff to launch, depending on the number of pages, any custom features and how quickly content is approved.",
    },
    {
      q: "Do you build WordPress or Shopify websites?",
      a: "Both. We build fully responsive WordPress websites for service businesses, Shopify stores for e-commerce, and custom web development when a project needs it. We recommend the platform that fits your goals on the strategy call.",
    },
    {
      q: "Will my new website be mobile-friendly and fast?",
      a: "Yes. Every website is designed mobile-first and built to pass Google’s Core Web Vitals at launch, because most Dallas–Fort Worth customers find local businesses on their phones.",
    },
    {
      q: "Can I update the website myself after launch?",
      a: "Yes. WordPress and Shopify sites come with an easy editor, so you can change text, photos, offers and blog posts yourself without touching code.",
    },
    {
      q: "Is SEO included with my website?",
      a: "On-page SEO is included in every build: page titles, headings, structured data and a page for each city and service you serve. To keep climbing in Google after launch, pair your site with a local SEO plan, from $297 a month.",
      link: {
        href: "/services/local-seo-packages",
        label: "Local SEO packages",
      },
    },
    {
      q: "Will my new website show up in Google’s AI answers?",
      a: "No one can guarantee it, but we build for it: clear service pages that answer real questions, structured data on every page, FAQ sections and the same business details everywhere. That is the structure AI Overviews and assistants like ChatGPT draw on when they recommend a local business.",
      link: {
        href: "/services/ai-seo-services",
        label: "AI search optimization",
      },
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We rebuild outdated websites to be faster, clearer and easier to contact, and we redirect your old URLs to the new pages to protect the rankings you already have.",
    },
    {
      q: "Do you design websites for businesses in Fort Worth, Plano and Frisco?",
      a: "Yes. We design websites for businesses across the whole Dallas–Fort Worth metro, including Fort Worth, Arlington, Plano, Frisco, McKinney, Irving and Denton, and we can build a dedicated page for each city you serve.",
    },
    {
      q: "What industries do you design websites for?",
      a: "Mostly local service businesses: roofers, HVAC and plumbing companies, home inspectors, cleaners, landscapers, dentists, law firms and real estate agents, across 20+ niches in all.",
      link: { href: "/industries", label: "See every industry we work with" },
    },
    {
      q: "How do you work with Dallas–Fort Worth businesses?",
      a: "You get one dedicated team from strategy call to launch. Calls happen on video at times that suit Central Time, and you review and approve each stage (sitemap, design and the finished site) before we move on.",
    },
    {
      q: "Can you also manage my Google Business Profile and ads?",
      a: "Yes. Many DFW clients pair a new website with Google Business Profile management, local SEO or Google Ads, so the site has customers coming in from day one.",
      link: {
        href: "/services/dallas-fort-worth/digital-marketing-agency",
        label: "Our Dallas–Fort Worth digital marketing services",
      },
    },
  ];

/* ---------------------------------------------------------------- schema */

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  {
    name: "Dallas–Fort Worth",
    url: "/services/dallas-fort-worth/digital-marketing-agency",
  },
  { name: "Web Design", url: PAGE_PATH },
]);

const servedCities = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Frisco",
  "McKinney",
  "Irving",
  "Garland",
  "Denton",
  "Grand Prairie",
];

const servedCounties = [
  "Dallas County",
  "Tarrant County",
  "Collin County",
  "Denton County",
  "Rockwall County",
  "Ellis County",
  "Johnson County",
  "Kaufman County",
  "Parker County",
  "Hunt County",
  "Wise County",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: { "@id": `${PAGE_URL}#service` },
    mainEntity: { "@id": `${PAGE_URL}#service` },
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/dfw/web/dfw-team-review.png`,
      width: 1672,
      height: 941,
      caption:
        "Zonic Media team reviewing a new homepage design for a Dallas–Fort Worth business",
    },
  },
  // A Service with areaServed, not a LocalBusiness: there is no Texas
  // address, and a LocalBusiness here would claim one.
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Web design for Dallas–Fort Worth businesses",
    alternateName: [
      "Dallas web design",
      "Fort Worth web design",
      "DFW website design",
    ],
    serviceType: [
      "Web design",
      "Website redesign",
      "WordPress web design",
      "Shopify e-commerce design",
      "Landing page design",
    ],
    url: PAGE_URL,
    description: DESCRIPTION,
    image: `${SITE_URL}/images/dfw/web/dfw-team-review.png`,
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Local businesses in Dallas–Fort Worth",
    },
    // The only published price: the strategy call is free (as on
    // /services/web-design). Builds are quoted flat after it.
    offers: {
      "@type": "Offer",
      name: "Free website strategy call",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free strategy call covering your goals, site structure and a flat project quote.",
    },
    areaServed: [
      ...servedCities.map((name) => ({
        "@type": "City",
        name: `${name}, TX`,
      })),
      ...servedCounties.map((name) => ({
        "@type": "AdministrativeArea",
        name: `${name}, TX`,
      })),
      { "@type": "AdministrativeArea", name: "Dallas–Fort Worth metroplex" },
    ],
    // Prices aren't published for builds (flat quote after a free call),
    // so only the local SEO add-on carries one.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web design services for DFW businesses",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.body,
          url: `${SITE_URL}${service.href}`,
        },
        ...(service.note
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: 297,
                priceCurrency: "USD",
                unitText: "MONTH",
                description: "Local SEO plans from $297 a month",
              },
            }
          : {}),
      })),
    },
  },
  { ...breadcrumbJsonLd, "@id": `${PAGE_URL}#breadcrumb` },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

/* -------------------------------------------------------------- fragments */

function Strip({
  as: Tag = "h2",
  id,
  children,
  className = "",
}: {
  as?: "h1" | "h2";
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      id={id}
      className={`dw-strip tw:[font-size:clamp(34px,_4.6vw,_62px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.12] tw:[&>span]:[padding:0] tw:[&>span]:[background:none] tw:[.dw-journey-card_&]:[font-size:clamp(30px,_3.3vw,_50px)] tw:[.dw-coverage-card_&]:[font-size:clamp(30px,_3.3vw,_50px)] tw:[.dw-coverage-card_&]:[color:#fff] tw:[.dw-area_&]:[font-size:clamp(32px,_3.8vw,_56px)] tw:max-bsmd:[line-height:1.16]! tw:max-bssm:[font-size:clamp(30px,_8.6vw,_40px)] ${className}`}
    >
      <span>{children}</span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ page */

export default function DallasFortWorthWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="dw-root tw:[--bg:#eef1f6] tw:[--ink:#0c1526] tw:[&&]:[--ink-2:#1d2a44] tw:[--blue:#2567e8] tw:[&&]:[--blue-dark:#1c4fc4] tw:[&&]:[--blue-soft:#eaf0fe] tw:[--gold:#fdc115] tw:[&&]:[--gold-dark:#b98a00] tw:[&&]:[--gold-soft:#fff6db] tw:[--green:#34a852] tw:[&&]:[--green-soft:#e7f6ec] tw:[--red:#ea4334] tw:[--text:#47546e] tw:[--muted:#7a869e] tw:[--line:#e3e9f2] tw:[--panel:#f1f4f9] tw:[--inset:100px] tw:[--sec-y:36px] tw:[--r-xl:40px] tw:[--lift:0_26px_50px_-26px_rgba(12,_21,_38,_0.3)] tw:[background:var(--bg)] tw:[color:var(--ink)] tw:[line-height:1.6] tw:[overflow-x:clip] tw:[-webkit-font-smoothing:antialiased] tw:[box-sizing:border-box] tw:max-bsxl:[--inset:30px] tw:max-bsxl:[--sec-y:32px] tw:max-bsxl:[--r-xl:32px] tw:max-bslg:[--inset:40px] tw:max-bslg:[--sec-y:30px] tw:max-bssm:[--inset:20px] tw:max-bssm:[--sec-y:26px] tw:max-bssm:[--r-xl:24px]">
        {/* ============================================================ HERO */}
        <section
          className="dw-hero tw:[position:relative] tw:[isolation:isolate] tw:[overflow:clip] tw:[padding:144px_0_var(--sec-y)] tw:[background:radial-gradient(circle_at_16%_12%,_rgba(49,_87,_245,_0.07),_transparent_26%),_radial-gradient(circle_at_88%_6%,_rgba(110,_80,_247,_0.065),_transparent_22%),_linear-gradient(180deg,_#fdfdff_0%,_#f9fbff_60%,_#fff_100%)] tw:[text-align:center] tw:[&::before]:[position:absolute] tw:[&::before]:[z-index:-1] tw:[&::before]:[width:450px] tw:[&::before]:[height:450px] tw:[&::before]:[border-radius:50%] tw:[&::before]:[filter:blur(70px)] tw:[&::before]:[opacity:0.09] tw:[&::before]:[pointer-events:none] tw:[&::before]:[content:''] tw:[&::after]:[position:absolute] tw:[&::after]:[z-index:-1] tw:[&::after]:[width:450px] tw:[&::after]:[height:450px] tw:[&::after]:[border-radius:50%] tw:[&::after]:[filter:blur(70px)] tw:[&::after]:[opacity:0.09] tw:[&::after]:[pointer-events:none] tw:[&::after]:[content:''] tw:[&::before]:[top:250px] tw:[&::before]:[left:-200px] tw:[&::before]:[background:#5070ff] tw:[&::after]:[top:440px] tw:[&::after]:[right:-220px] tw:[&::after]:[background:#875cff] tw:max-bsmd:[padding-top:120px]"
          aria-labelledby="dfw-h1"
        >
          <span
            className="dw-hero-marks tw:[position:absolute] tw:[inset:0] tw:[z-index:-1] tw:[pointer-events:none] tw:[&_i]:[position:absolute] tw:[&_i]:[width:14px] tw:[&_i]:[height:14px] tw:[&_i]:[opacity:0.4] tw:[&_i::before]:[position:absolute] tw:[&_i::before]:[top:50%] tw:[&_i::before]:[left:50%] tw:[&_i::before]:[width:100%] tw:[&_i::before]:[height:1.5px] tw:[&_i::before]:[border-radius:1px] tw:[&_i::before]:[background:#3157f5] tw:[&_i::before]:[transform:translate(-50%,_-50%)] tw:[&_i::before]:[content:''] tw:[&_i::after]:[position:absolute] tw:[&_i::after]:[top:50%] tw:[&_i::after]:[left:50%] tw:[&_i::after]:[width:100%] tw:[&_i::after]:[height:1.5px] tw:[&_i::after]:[border-radius:1px] tw:[&_i::after]:[background:#3157f5] tw:[&_i::after]:[content:''] tw:[&_i::after]:[transform:translate(-50%,_-50%)_rotate(90deg)] tw:[&_i:nth-child(odd)]:[width:10px] tw:[&_i:nth-child(odd)]:[height:10px] tw:[&_i:nth-child(odd)]:[opacity:0.3] tw:max-bssm:[display:none]"
            aria-hidden="true"
          >
            {heroMarks.map(([x, y]) => (
              <i key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }} />
            ))}
          </span>
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <Strip
              as="h1"
              id="dfw-h1"
              className="dw-hero-title tw:min-bssm:[&.dw-hero-title]:[font-size:clamp(38px,_5vw,_76px)] tw:max-bssm:[&.dw-hero-title]:[font-size:clamp(36px,_10.25vw,_44px)] tw:min-bsmd:[&.dw-hero-title]:[line-height:1.12] tw:max-bsmd:[&.dw-hero-title]:[line-height:1.16]!"
            >
              Dallas–Fort Worth <InlinePin /> Web Design{" "}
              <br className="dw-hero-br tw:max-bssm:[display:none]" />
              Agency for Local Businesses
            </Strip>
            <p className="dw-hero-sub tw:[max-width:760px] tw:[margin:28px_auto_0] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
              Zonic Media is the Dallas web design agency that builds fast,
              great-looking websites for Dallas–Fort Worth businesses. Every
              site is designed to turn visitors into calls and quote requests,
              built mobile-first, and ready to rank on Google from Frisco to
              Mansfield.
            </p>
            <div className="dw-hero-logos tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:16px_40px] tw:[margin-top:30px] tw:[&_img]:[display:block] tw:[&_img]:[width:auto] tw:[&_img]:[height:82px] tw:[&_img]:[object-fit:contain] tw:max-bssm:[gap:12px_24px] tw:max-bssm:[&_img]:[height:64px]">
              <a
                href="https://clutch.co/profile/zonic-media?badge=11431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={84}
                  height={84}
                  src="/images/clutch-top-company-2026.png"
                  alt="Top Clutch Digital Marketing Company Delaware 2026"
                  priority
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/zonicllc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dw-hero-logo-wide tw:[.dw-hero-logos_&.dw-hero-logo-wide]:[height:56px] tw:max-bssm:[.dw-hero-logos_&.dw-hero-logo-wide]:[height:44px]"
                  width={128}
                  height={60}
                  src="/images/trust-black.png"
                  alt="Zonic Media rated 5 stars on Trustpilot"
                  priority
                />
              </a>
              <Image
                width={84}
                height={84}
                src="/images/Partner.png"
                alt="Yelp Advertising Partner"
                priority
              />
              <GoogleRatingBadge href={SITE_CONTACT.mapHref} />
            </div>
            <div className="dw-hero-ctas tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:12px] tw:[margin-top:30px]">
              <a
                href="#dfw-contact"
                className="dw-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
              >
                Book a Free Strategy Call
              </a>
              <a
                href={SITE_CONTACT.phoneHref}
                className="dw-pill dw-pill--outline tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[transform:translateY(-2px)] tw:[min-height:50px] tw:[padding:0_28px] tw:[background:transparent] tw:[color:var(--ink)] tw:[font-size:15.5px] tw:[&:hover]:[background:var(--ink)] tw:[&:hover]:[color:#fff] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-hero-ctas_&]:[padding:0_28px] tw:[.dw-hero-ctas_&]:[font-size:16px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="dw-bento tw:[display:grid] tw:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:[gap:24px] tw:[align-items:end] tw:[margin-top:4px] tw:[padding:0_var(--inset)] tw:[text-align:left] tw:max-bs2xl:[gap:18px] tw:max-bsxl:[display:flex] tw:max-bsxl:[align-items:flex-end] tw:max-bsxl:[gap:18px] tw:max-bsxl:[overflow-x:auto] tw:max-bsxl:[scroll-snap-type:x_mandatory] tw:max-bsxl:[padding-bottom:6px] tw:max-bsxl:[scrollbar-width:none] tw:max-bsxl:[&::-webkit-scrollbar]:[display:none] tw:max-bssm:[margin-top:16px]">
            <div className="dw-bento-card dw-bento-card--blue tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:space-between] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[--ava-ring:var(--blue)] tw:[height:345px] tw:[background:var(--blue)] tw:[color:#fff] tw:[&_p]:[margin-bottom:10px] tw:[&_p]:[color:rgba(255,_255,_255,_0.82)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:315px]">
              <span className="dw-avas tw:[display:flex] tw:[align-items:center] tw:[&>:first-child]:[margin-left:0]">
                <AvatarPh tone="a" />
                <AvatarPh tone="b" />
                <AvatarPh tone="c" />
                <span
                  className="dw-avas-plus tw:[width:48px] tw:[height:48px] tw:[margin-left:-12px] tw:[border:3px_solid_var(--ava-ring,_#fff)] tw:[border-radius:50%] tw:[display:grid] tw:[place-items:center] tw:[background:var(--gold)] tw:[color:var(--ink)] tw:[font-size:20px]"
                  aria-hidden="true"
                >
                  <FiPlus />
                </span>
              </span>
              <div>
                <p>Websites shipped for local businesses</p>
                <b>120+</b>
              </div>
            </div>

            <div className="dw-bento-card dw-bento-card--lime tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[align-items:center] tw:[justify-content:center] tw:[height:285px] tw:[background:#dcfc7c] tw:[text-align:center] tw:[&>b]:[margin-top:20px] tw:[&_p]:[margin-top:10px] tw:[&_p]:[color:rgba(12,_21,_38,_0.7)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:265px]">
              <span
                className="dw-bento-icon tw:[display:grid] tw:[flex:none] tw:[width:58px] tw:[height:58px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:23px] tw:[background:rgba(255,_255,_255,_0.55)] tw:[color:var(--ink)]"
                aria-hidden="true"
              >
                <FiZap />
              </span>
              <b>2–6</b>
              <p>Weeks from kickoff to launch for most sites</p>
            </div>

            <div className="dw-bento-card dw-bento-card--gold tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:space-between] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[height:380px] tw:[background:var(--gold)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:345px]">
              <span
                className="dw-bento-quote tw:[display:grid] tw:[flex:none] tw:[width:58px] tw:[height:58px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:23px] tw:[background:#fff]"
                aria-hidden="true"
              >
                <FiStar />
              </span>
              <div>
                <b>5.0</b>
                <span
                  className="dw-bento-stars tw:[display:flex] tw:[gap:4px] tw:[margin:14px_0_10px] tw:[&_svg]:[width:16px] tw:[&_svg]:[height:16px] tw:[&_svg]:[fill:var(--ink)]"
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} />
                  ))}
                </span>
                <p>Average rating from our Google reviews</p>
              </div>
            </div>

            <div className="dw-bento-card dw-bento-card--ink tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[height:420px] tw:[justify-content:flex-start] tw:[background:var(--ink)] tw:[color:#fff] tw:[&>b]:[font-size:clamp(50px,_4.6vw,_70px)] tw:[&_p]:[max-width:12ch] tw:[&_p]:[margin-top:16px] tw:[&_p]:[color:#fff] tw:[&_p]:[font-size:clamp(19px,_1.6vw,_24px)] tw:[&_p]:[line-height:1.3] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:390px]">
              <b>20+</b>
              <p>Industries we design websites for</p>
              <ul
                className="dw-tags tw:[position:absolute] tw:[left:22px] tw:[right:22px] tw:[bottom:22px] tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-content:flex-end] tw:[gap:7px_6px] tw:[margin:0] tw:[padding:0] tw:[list-style:none] tw:max-bssm:[left:18px] tw:max-bssm:[right:18px] tw:max-bssm:[bottom:18px]"
                aria-label="Industries we design for"
              >
                <li className="dw-tag dw-tag--gold tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:var(--gold)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Roofing
                </li>
                <li className="dw-tag dw-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  HVAC
                </li>
                <li className="dw-tag dw-tag--green tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#b8eccb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Plumbing
                </li>
                <li className="dw-tag dw-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Real estate
                </li>
                <li className="dw-tag dw-tag--blue tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#cddcfb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Home inspectors
                </li>
                <li className="dw-tag dw-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Pest control
                </li>
                <li className="dw-tag dw-tag--gold tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:var(--gold)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Landscaping
                </li>
                <li className="dw-tag dw-tag--green tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#b8eccb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Dental
                </li>
                <li className="dw-tag dw-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  Law firms
                </li>
                <li className="dw-tag dw-tag--more tw:[padding:6px_13px] tw:[border-radius:999px] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[border:1px_dashed_rgba(255,_255,_255,_0.45)] tw:[color:rgba(255,_255,_255,_0.85)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">
                  + more
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        <section
          className="dw-sec dw-about tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-about-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-about-top tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:[gap:56px] tw:[align-items:start] tw:max-bsxl:[gap:40px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)]">
              <div className="dw-about-head tw:[position:relative]">
                <Strip id="dfw-about-h">
                  Websites That Win <br />
                  DFW Customers.
                </Strip>
                <HandArrow className="dw-about-arrow tw:[&.dw-about-arrow]:[position:absolute] tw:[&.dw-about-arrow]:[top:calc(100%_+_18px)] tw:[&.dw-about-arrow]:[left:32%] tw:[&.dw-about-arrow]:[width:230px] tw:max-bslg:[&.dw-about-arrow]:[display:none]" />
              </div>
              <div className="dw-about-copy tw:[&_p:not(.dw-label)]:[margin-bottom:24px] tw:[&_p:not(.dw-label)]:[color:var(--ink-2)] tw:[&_p:not(.dw-label)]:[font-size:18px] tw:[&_p:not(.dw-label)]:[line-height:1.65]">
                <p className="dw-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">
                  Web design in Dallas–Fort Worth
                </p>
                <p>
                  We design websites that work as hard as you do. Fast,
                  great-looking and easy to use on a phone, every site we build
                  gives Dallas–Fort Worth customers one clear reason to call
                  you, with your services, reviews and service area right where
                  they decide.
                </p>
                <p>
                  With 120+ websites shipped for local businesses, we know what
                  turns a visitor into a lead. You get one dedicated web design
                  and development team from strategy call to launch, a flat
                  project quote, and a website you’ll be proud to send customers
                  to.
                </p>
                <Link
                  href="/about"
                  className="dw-pill dw-pill--outline tw:[&.dw-pill]:[display:inline-flex] tw:[&.dw-pill]:[align-items:center] tw:[&.dw-pill]:[justify-content:center] tw:[&.dw-pill]:[gap:9px] tw:[&.dw-pill]:[min-height:56px] tw:[&.dw-pill]:[padding:0_34px] tw:[&.dw-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dw-pill]:[border-radius:999px] tw:[&.dw-pill]:[background:var(--ink)] tw:[&.dw-pill]:[color:#fff] tw:[&.dw-pill]:[font-size:16.5px] tw:[&.dw-pill]:[font-weight:500] tw:[&.dw-pill]:[white-space:nowrap] tw:[&.dw-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dw-pill:hover]:[border-color:var(--ink-2)] tw:[&.dw-pill:hover]:[background:var(--ink-2)] tw:[&.dw-pill:hover]:[color:#fff] tw:[&.dw-pill:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&.dw-pill]:[min-height:56px] tw:[.dw-contact-links_&.dw-pill]:[min-height:54px] tw:[.dw-contact-links_&.dw-pill]:[padding:0_28px] tw:[.dw-contact-links_&.dw-pill]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-contact-links_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-band_&.dw-pill]:[width:100%] tw:[&.dw-pill--outline]:[min-height:50px] tw:[&.dw-pill--outline]:[padding:0_28px] tw:[&.dw-pill--outline]:[background:transparent] tw:[&.dw-pill--outline]:[color:var(--ink)] tw:[&.dw-pill--outline]:[font-size:15.5px] tw:[&.dw-pill--outline:hover]:[background:var(--ink)] tw:[&.dw-pill--outline:hover]:[color:#fff] tw:[.dw-hero-ctas_&.dw-pill--outline]:[padding:0_28px] tw:[.dw-hero-ctas_&.dw-pill--outline]:[font-size:16px]"
                >
                  More About Us
                </Link>
              </div>
            </div>

            <div className="dw-about-photos tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_2.1fr)] tw:[gap:24px] tw:[margin-top:110px] tw:max-bslg:[margin-top:110px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[margin-top:84px]">
              <RatingBadge />
              <div className="dw-about-photo dw-about-photo--narrow tw:[position:relative] tw:[height:460px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bsxl:[height:420px] tw:max-bssm:[height:auto]">
                <BuildCard />
              </div>
              <div className="dw-about-photo dw-about-photo--wide tw:[position:relative] tw:[height:460px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bsxl:[height:420px] tw:max-bssm:[height:280px]">
                <Ph
                  label="Team reviewing a new homepage design on a laptop and a phone"
                  ratio="16:9"
                  src="/images/dfw/web/dfw-team-review.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== SERVICES */}
        <section
          className="dw-sec dw-services tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-svc-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-row-head tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:flex-end] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-svc-h">
                Dallas Web Design Services <br />
                for DFW Businesses
              </Strip>
              <div className="dw-svc-head tw:[display:flex] tw:[flex-direction:column] tw:[align-items:flex-start] tw:[gap:22px] tw:[max-width:460px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65]">
                <p>
                  Six ways we help Dallas–Fort Worth businesses look great
                  online and win more work. Every build includes on-page SEO,
                  Core Web Vitals optimization and lead forms.
                </p>
                <a
                  href="#dfw-contact"
                  className="dw-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
                >
                  Book a Free Strategy Call
                </a>
              </div>
            </div>

            <div className="dw-svc-grid tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[gap:24px] tw:max-bslg:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:16px]">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="dw-svc-card tw:[display:flex] tw:[flex-direction:column] tw:[padding:28px_28px_26px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:[transition:transform_0.25s_ease,_box-shadow_0.25s_ease] tw:[&:hover]:[box-shadow:0_26px_50px_-30px_rgba(12,_21,_38,_0.28)] tw:[&:hover]:[transform:translateY(-4px)] tw:[&_h3]:[font-size:23px] tw:[&_h3]:[line-height:1.2] tw:[&>p]:[flex-grow:1] tw:[&>p]:[margin-top:12px] tw:[&>p]:[color:var(--text)] tw:[&>p]:[font-size:18px] tw:[&>p]:[line-height:1.65] tw:max-bssm:[padding:28px_24px_26px] tw:max-bssm:[&_h3]:[font-size:21px]"
                >
                  <div className="dw-svc-card-top tw:[display:flex] tw:[align-items:center] tw:[justify-content:space-between] tw:[gap:12px] tw:[margin-bottom:22px]">
                    <span
                      className={`dw-svc-card-icon tw:[display:grid] tw:[flex:none] tw:[width:60px] tw:[height:60px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:24px] tw:[&.dw-tone--blue]:[background:var(--blue)] tw:[&.dw-tone--blue]:[color:#fff] tw:[&.dw-tone--red]:[background:var(--red)] tw:[&.dw-tone--red]:[color:#fff] tw:[&.dw-tone--gold]:[background:var(--gold)] tw:[&.dw-tone--gold]:[color:var(--ink)] tw:[&.dw-tone--green]:[background:var(--green)] tw:[&.dw-tone--green]:[color:#fff] tw:[&.dw-tone--ink]:[background:var(--ink)] tw:[&.dw-tone--ink]:[color:#fff] tw:[&.dw-tone--soft]:[background:var(--blue-soft)] tw:[&.dw-tone--soft]:[color:var(--blue)] dw-tone--${service.tone}`}
                      aria-hidden="true"
                    >
                      <service.icon />
                    </span>
                    {service.note ? (
                      <span className="dw-svc-card-note tw:[padding:6px_14px] tw:[border-radius:999px] tw:[background:var(--green-soft)] tw:[color:#1f7a3a] tw:[font-size:13px] tw:[font-weight:500]">
                        {service.note}
                      </span>
                    ) : null}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul className="dw-svc-card-list tw:[display:grid] tw:[gap:10px] tw:[margin:18px_0_22px] tw:[padding-top:18px] tw:[border-top:1px_solid_var(--line)] tw:[min-height:140px] tw:[align-content:start] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:10px] tw:[&_li]:[color:var(--ink-2)] tw:[&_li]:[line-height:1.45] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:18px] tw:[&_svg]:[height:18px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:3px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:var(--green-soft)] tw:[&_svg]:[color:var(--green)] tw:[&_svg]:[stroke-width:3.5] tw:[&_li]:[font-size:16.5px] tw:max-bssm:[min-height:0]">
                    {service.points.map((point) => (
                      <li key={point}>
                        <FiCheck aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="dw-svc-card-more tw:[&.dw-svc-card-more]:[display:inline-flex] tw:[&.dw-svc-card-more]:[align-items:center] tw:[&.dw-svc-card-more]:[gap:8px] tw:[&.dw-svc-card-more]:[color:var(--blue)] tw:[&.dw-svc-card-more]:[font-size:15px] tw:[&.dw-svc-card-more]:[font-weight:500] tw:[&.dw-svc-card-more_svg]:[transition:transform_0.2s_ease] tw:[&.dw-svc-card-more:hover_svg]:[transform:translateX(3px)]"
                  >
                    {service.link}
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== FEATURES */}
        <section
          className="dw-sec dw-features tw:[padding:64px_0] tw:[background:#fff] tw:max-bssm:[padding:44px_0]"
          aria-labelledby="dfw-feat-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-center-head tw:[max-width:860px] tw:[margin:0_auto_48px] tw:[text-align:center] tw:[&_p]:[margin-top:18px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[margin-bottom:48px]">
              <h2
                id="dfw-feat-h"
                className="dw-h2 tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance]"
              >
                How Our Websites Win Work Across the Metroplex
              </h2>
              <p>
                Three things every Zonic website does for a Dallas–Fort Worth
                business.
              </p>
            </div>

            {features.map((feature, i) => (
              <div
                key={feature.label}
                className={`dw-feature tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:[gap:64px] tw:[align-items:center] tw:[.dw-feature+&]:[margin-top:64px] tw:max-bs2xl:[gap:64px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:36px] tw:max-bslg:[.dw-feature+&]:[margin-top:72px] ${i % 2 ? " dw-feature--flip" : ""}`}
              >
                {feature.panel}
                <div className="dw-feature-text tw:[&_h3]:[font-size:clamp(30px,_3.4vw,_52px)] tw:[&_h3]:[letter-spacing:-0.03em] tw:[&_h3]:[line-height:1.06] tw:[&_h3]:[text-wrap:balance]">
                  <p className="dw-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">
                    {feature.label}
                  </p>
                  <h3>{feature.title}</h3>
                  <p className="dw-feature-body tw:[max-width:54ch] tw:[margin-top:24px] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
                    {feature.body}
                  </p>
                  <ul className="dw-feature-points tw:[display:grid] tw:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:[gap:22px_32px] tw:[margin:26px_0_28px] tw:[padding-top:24px] tw:[border-top:1px_solid_var(--line)] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:12px] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:24px] tw:[&_svg]:[height:24px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:5px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:var(--blue-soft)] tw:[&_svg]:[color:var(--blue)] tw:[&_svg]:[stroke-width:3] tw:[&_span]:[color:var(--text)] tw:[&_span]:[line-height:1.55] tw:[&_b]:[display:block] tw:[&_b]:[margin-bottom:2px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-weight:500] tw:[&_span]:[font-size:16.5px] tw:[&_b]:[font-size:18px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:18px]">
                    {feature.points.map((point) => (
                      <li key={point.t}>
                        <FiCheck aria-hidden="true" />
                        <span>
                          <b>{point.t}</b>
                          {point.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={feature.href}
                    className="dw-pill dw-pill--arrow tw:[&.dw-pill]:[display:inline-flex] tw:[&.dw-pill]:[align-items:center] tw:[&.dw-pill]:[justify-content:center] tw:[&.dw-pill]:[gap:9px] tw:[&.dw-pill]:[min-height:56px] tw:[&.dw-pill]:[padding:0_34px] tw:[&.dw-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dw-pill]:[border-radius:999px] tw:[&.dw-pill]:[background:var(--ink)] tw:[&.dw-pill]:[color:#fff] tw:[&.dw-pill]:[font-size:16.5px] tw:[&.dw-pill]:[font-weight:500] tw:[&.dw-pill]:[white-space:nowrap] tw:[&.dw-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dw-pill:hover]:[border-color:var(--ink-2)] tw:[&.dw-pill:hover]:[background:var(--ink-2)] tw:[&.dw-pill:hover]:[color:#fff] tw:[&.dw-pill:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&.dw-pill]:[min-height:56px] tw:[.dw-contact-links_&.dw-pill]:[min-height:54px] tw:[.dw-contact-links_&.dw-pill]:[padding:0_28px] tw:[.dw-contact-links_&.dw-pill]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-contact-links_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-band_&.dw-pill]:[width:100%] tw:[&.dw-pill--arrow]:[min-height:54px] tw:[&.dw-pill--arrow]:[padding:0_8px_0_26px] tw:[&.dw-pill--arrow]:[gap:14px] tw:[&.dw-pill--arrow]:[font-size:16px] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[width:100%] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[justify-content:space-between] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[padding:9px_8px_9px_22px] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[text-align:left] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[white-space:normal]"
                  >
                    {feature.link}
                    <span
                      className="dw-pill-circ tw:[display:grid] tw:[width:38px] tw:[height:38px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:rgba(255,_255,_255,_0.16)] tw:[font-size:17px] tw:[transition:background_0.2s_ease,_color_0.2s_ease,_transform_0.2s_ease] tw:[.dw-pill--arrow:hover_&]:[background:var(--gold)] tw:[.dw-pill--arrow:hover_&]:[color:var(--ink)] tw:[.dw-pill--arrow:hover_&]:[transform:rotate(45deg)] tw:[.dw-pill--white_&]:[background:var(--blue-soft)] tw:[.dw-pill--white_&]:[color:var(--blue)] tw:max-bssm:[flex:none]"
                      aria-hidden="true"
                    >
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= JOURNEY */}
        <section
          className="dw-sec dw-journey tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-journey-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-journey-card tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_0.92fr)] tw:[overflow:hidden] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)]">
              <div className="dw-journey-text tw:[padding:48px_44px_44px] tw:max-bssm:[padding:30px_22px_26px]">
                <Strip id="dfw-journey-h">
                  From First Click <br />
                  to a New Lead
                </Strip>
                <p className="dw-journey-lead tw:[max-width:54ch] tw:[margin:22px_0_26px] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
                  A great website removes every reason not to contact you.
                  Here’s the path a DFW customer takes on a site we build, and
                  what we design for at each step.
                </p>
                <ol className="dw-journey-steps tw:[display:grid] tw:[gap:8px] tw:[&_li]:[display:grid] tw:[&_li]:[grid-template-columns:40px_minmax(0,_1fr)] tw:[&_li]:[gap:16px] tw:[&_li]:[padding:14px_16px] tw:[&_li]:[border-radius:18px] tw:[&_li]:[animation:dw-step-on_12s_ease_infinite_both] tw:[&&_li]:[animation-delay:calc(var(--i)_*_3s)] tw:[&_li:first-child]:[background:var(--blue-soft)] tw:[&_h3]:[margin-top:2px] tw:[&_h3]:[font-size:18px] tw:[&_p]:[margin-top:4px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[&_li]:[padding:12px] tw:max-bssm:[&_li]:[gap:12px]">
                  {journey.map((step, i) => (
                    <li key={step.t} style={{ "--i": i } as CSSProperties}>
                      <span
                        className="dw-journey-num tw:[display:grid] tw:[width:40px] tw:[height:40px] tw:[place-items:center] tw:[border:1.5px_solid_var(--line)] tw:[border-radius:50%] tw:[background:#fff] tw:[color:var(--blue-dark)] tw:[font-size:15px] tw:[font-weight:600] tw:[animation:dw-num-on_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)]"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3>{step.t}</h3>
                        <p>{step.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="dw-journey-stage tw:[display:grid] tw:[min-height:560px] tw:[padding:44px_24px] tw:[place-items:center] tw:[background:radial-gradient(60%_50%_at_30%_20%,_rgba(49,_87,_245,_0.16),_transparent_70%),_radial-gradient(60%_50%_at_80%_85%,_rgba(110,_80,_247,_0.14),_transparent_70%),_#f2f5fd] tw:max-bslg:[min-height:0] tw:max-bslg:[padding:36px_20px]">
                <WebJourneyPhone />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= PROCESS */}
        <section
          className="dw-sec dw-works tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-steps-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-row-head tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:flex-end] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-steps-h">Our Web Design Process in 4 Steps</Strip>
              <a
                href="#dfw-contact"
                className="dw-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
              >
                Book a Free Strategy Call
              </a>
            </div>

            <ol className="dw-steps tw:[display:grid] tw:[gap:20px]">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="dw-step tw:[display:grid] tw:[grid-template-columns:minmax(0,_2fr)_minmax(0,_1fr)] tw:[gap:24px] tw:max-bsxl:[grid-template-columns:minmax(0,_1.6fr)_minmax(0,_1fr)] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:14px]"
                >
                  <div className="dw-step-card tw:[display:grid] tw:[grid-template-columns:130px_minmax(0,_1fr)_auto] tw:[gap:24px] tw:[padding:40px_40px_36px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bs2xl:[grid-template-columns:90px_minmax(0,_1fr)_auto] tw:max-bs2xl:[padding:48px_40px_40px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:14px] tw:max-bssm:[padding:32px_26px_28px] tw:max-bssm:[position:relative]">
                    <span
                      className={`dw-step-num tw:[display:grid] tw:[width:64px] tw:[height:64px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:20px] tw:[font-weight:600] tw:max-bssm:[width:52px] tw:max-bssm:[height:52px] tw:max-bssm:[font-size:17px] tw:[&.dw-step-num--blue]:[background:#e3ecfd] tw:[&.dw-step-num--blue]:[color:var(--blue-dark)] tw:[&.dw-step-num--gold]:[background:#fff3cc] tw:[&.dw-step-num--gold]:[color:#8a6400] tw:[&.dw-step-num--green]:[background:#ddf3e3] tw:[&.dw-step-num--green]:[color:#1f7a3a] tw:[&.dw-step-num--red]:[background:#fde4e1] tw:[&.dw-step-num--red]:[color:#b8352a] dw-step-num--${step.tone}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="dw-step-text tw:[&_h3]:[max-width:14ch] tw:[&_h3]:[font-size:clamp(28px,_3vw,_46px)] tw:[&_h3]:[letter-spacing:-0.03em] tw:[&_h3]:[line-height:1.08] tw:[&>p:last-child]:[max-width:42ch] tw:[&>p:last-child]:[margin-top:22px] tw:[&>p:last-child]:[color:var(--ink-2)] tw:[&>p:last-child]:[font-size:18px] tw:[&>p:last-child]:[line-height:1.65] tw:max-bssm:[&>p:last-child]:[margin-top:18px]">
                      <p className="dw-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">
                        {step.when}
                      </p>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                    <Link
                      href={step.href}
                      className="dw-step-go tw:[&.dw-step-go]:[display:grid] tw:[&.dw-step-go]:[align-self:end] tw:[&.dw-step-go]:[width:84px] tw:[&.dw-step-go]:[height:84px] tw:[&.dw-step-go]:[place-items:center] tw:[&.dw-step-go]:[border:1px_solid_#d3dae6] tw:[&.dw-step-go]:[border-radius:50%] tw:[&.dw-step-go]:[font-size:24px] tw:[&.dw-step-go]:[transition:background_0.2s_ease,_color_0.2s_ease,_border-color_0.2s_ease] tw:[&.dw-step-go:hover]:[border-color:var(--ink)] tw:[&.dw-step-go:hover]:[background:var(--ink)] tw:[&.dw-step-go:hover]:[color:#fff] tw:max-bssm:[&.dw-step-go]:[position:absolute] tw:max-bssm:[&.dw-step-go]:[top:24px] tw:max-bssm:[&.dw-step-go]:[right:22px] tw:max-bssm:[&.dw-step-go]:[width:56px] tw:max-bssm:[&.dw-step-go]:[height:56px] tw:max-bssm:[&.dw-step-go]:[font-size:20px]"
                      aria-label={`More on: ${step.title}`}
                    >
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div
                    className={`dw-step-media tw:[position:relative] tw:[min-height:260px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bslg:[min-height:260px] tw:max-bssm:[min-height:220px] tw:[&.dw-tone-bg--blue]:[background:#cddcfb] tw:[&.dw-tone-bg--gold]:[background:#fde08a] tw:[&.dw-tone-bg--green]:[background:#bfe9cc] tw:[&.dw-tone-bg--red]:[background:#f9c7c1] dw-tone-bg--${step.tone}`}
                  >
                    <div className="dw-step-photo tw:[position:absolute] tw:[top:34px] tw:[left:30px] tw:[right:30px] tw:[bottom:-20px] tw:[border-radius:22px] tw:[overflow:hidden] tw:[box-shadow:var(--lift)] tw:[transform:rotate(-3deg)] tw:[.dw-step:nth-child(even)_&]:[transform:rotate(3deg)]">
                      {webStepUi[i]}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================== BUILD */}
        <section
          className="dw-sec dw-coverage tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-cov-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-coverage-card tw:[display:grid] tw:[grid-template-columns:minmax(0,_0.95fr)_minmax(0,_1.05fr)] tw:[gap:56px] tw:[align-items:center] tw:[padding:40px] tw:[border-radius:var(--r-xl)] tw:[background:var(--ink)] tw:[color:#fff] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:32px] tw:max-bssm:[padding:22px_18px_28px]">
              <div className="dw-coverage-visual tw:max-bslg:[max-width:520px] tw:max-bslg:[width:100%]">
                <SiteBuild />
              </div>
              <div className="dw-coverage-text">
                <Strip id="dfw-cov-h">
                  Watch Your New Website <br />
                  Come Together
                </Strip>
                <p className="dw-coverage-lead tw:[max-width:56ch] tw:[margin:24px_0_22px] tw:[color:#b7c4dd] tw:[font-size:18px] tw:[line-height:1.65]">
                  Every build moves through the same stages: a wireframe you
                  approve, a design made for your brand, then a fast, tested
                  website that goes live with tracking connected. You see each
                  stage and sign off before we move on, so there are no
                  surprises at launch.
                </p>
                <ul className="dw-coverage-points tw:[display:grid] tw:[gap:10px] tw:[margin-bottom:30px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:10px] tw:[&_li]:[color:#fff] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:20px] tw:[&_svg]:[height:20px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:4px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:rgba(253,_193,_21,_0.18)] tw:[&_svg]:[color:var(--gold)] tw:[&_svg]:[stroke-width:3.5] tw:[&_li]:[font-size:16.5px]">
                  <li>
                    <FiCheck aria-hidden="true" />
                    Wireframe and copy approved before design
                  </li>
                  <li>
                    <FiCheck aria-hidden="true" />
                    Designed and built mobile-first
                  </li>
                  <li>
                    <FiCheck aria-hidden="true" />
                    Tested on phones, tablets and desktops before launch
                  </li>
                </ul>
                <Link
                  href="/website-design-agency-us/offer"
                  className="dw-pill dw-pill--white dw-pill--arrow tw:[&.dw-pill]:[display:inline-flex] tw:[&.dw-pill]:[align-items:center] tw:[&.dw-pill]:[justify-content:center] tw:[&.dw-pill]:[gap:9px] tw:[&.dw-pill]:[min-height:56px] tw:[&.dw-pill]:[padding:0_34px] tw:[&.dw-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dw-pill]:[border-radius:999px] tw:[&.dw-pill]:[background:var(--ink)] tw:[&.dw-pill]:[color:#fff] tw:[&.dw-pill]:[font-size:16.5px] tw:[&.dw-pill]:[font-weight:500] tw:[&.dw-pill]:[white-space:nowrap] tw:[&.dw-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dw-pill:hover]:[border-color:var(--ink-2)] tw:[&.dw-pill:hover]:[background:var(--ink-2)] tw:[&.dw-pill:hover]:[color:#fff] tw:[&.dw-pill:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&.dw-pill]:[min-height:56px] tw:[.dw-contact-links_&.dw-pill]:[min-height:54px] tw:[.dw-contact-links_&.dw-pill]:[padding:0_28px] tw:[.dw-contact-links_&.dw-pill]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-contact-links_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-band_&.dw-pill]:[width:100%] tw:[&.dw-pill--white]:[border-color:#fff] tw:[&.dw-pill--white]:[background:#fff] tw:[&.dw-pill--white]:[color:var(--ink)] tw:[&.dw-pill--white:hover]:[border-color:var(--gold)] tw:[&.dw-pill--white:hover]:[background:var(--gold)] tw:[&.dw-pill--white:hover]:[color:var(--ink)] tw:[&.dw-pill--arrow]:[min-height:54px] tw:[&.dw-pill--arrow]:[padding:0_8px_0_26px] tw:[&.dw-pill--arrow]:[gap:14px] tw:[&.dw-pill--arrow]:[font-size:16px] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[width:100%] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[justify-content:space-between] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[padding:9px_8px_9px_22px] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[text-align:left] tw:max-bssm:[.dw-coverage-card_&.dw-pill--arrow]:[white-space:normal]"
                >
                  See Our Free Website Offer
                  <span
                    className="dw-pill-circ tw:[display:grid] tw:[width:38px] tw:[height:38px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:rgba(255,_255,_255,_0.16)] tw:[font-size:17px] tw:[transition:background_0.2s_ease,_color_0.2s_ease,_transform_0.2s_ease] tw:[.dw-pill--arrow:hover_&]:[background:var(--gold)] tw:[.dw-pill--arrow:hover_&]:[color:var(--ink)] tw:[.dw-pill--arrow:hover_&]:[transform:rotate(45deg)] tw:[.dw-pill--white_&]:[background:var(--blue-soft)] tw:[.dw-pill--white_&]:[color:var(--blue)] tw:max-bssm:[flex:none]"
                    aria-hidden="true"
                  >
                    <FiArrowUpRight />
                  </span>
                </Link>
                <p className="dw-coverage-note tw:[margin-top:18px] tw:[color:#8592ab] tw:[font-size:13px]">
                  Illustration of our build process. Timelines vary by project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= HUB */}
        <section
          className="dw-sec dw-hub tw:[padding:64px_0] tw:[background:#fff] tw:max-bssm:[padding:44px_0]"
          aria-labelledby="dfw-hub-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-center-head tw:[max-width:860px] tw:[margin:0_auto_48px] tw:[text-align:center] tw:[&_p]:[margin-top:18px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[margin-bottom:48px]">
              <h2
                id="dfw-hub-h"
                className="dw-h2 tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance]"
              >
                Built to Work With the Tools That Matter
              </h2>
              <p>
                We build on WordPress or Shopify and connect your website to
                Google Analytics, Search Console, your Google Business Profile
                and ad tracking, so every visit, call and form is counted.
              </p>
            </div>

            <div className="dw-hub-map tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_auto_minmax(0,_1fr)] tw:[gap:40px] tw:[align-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:50%] tw:[&::before]:[left:4%] tw:[&::before]:[right:4%] tw:[&::before]:[height:0] tw:[&::before]:[border-top:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:max-bsxl:[gap:20px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:max-bslg:[gap:40px_20px] tw:max-bslg:[&::before]:[display:none] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:16px]">
              <ul
                className="dw-hub-side tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[grid-template-rows:repeat(3,_auto)] tw:[gap:24px_0] tw:[align-items:center] tw:[justify-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:12%] tw:[&::before]:[bottom:12%] tw:[&::before]:[left:50%] tw:[&::before]:[border-left:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:[&_li:nth-child(1)]:[grid-area:1_/_2] tw:[&_li:nth-child(2)]:[grid-area:2_/_1] tw:[&_li:nth-child(3)]:[grid-area:2_/_3] tw:[&_li:nth-child(4)]:[grid-area:3_/_2] tw:max-bssm:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:max-bssm:[grid-template-rows:auto] tw:max-bssm:[gap:0_12px] tw:max-bssm:[max-width:320px] tw:max-bssm:[margin:0_auto] tw:max-bssm:[width:100%] tw:max-bssm:[&::before]:[display:none] tw:max-bssm:[&_li:nth-child(n)]:[grid-area:auto]"
                aria-label="Platforms we build on"
              >
                {hubLeft.map((item) => (
                  <li
                    key={item.name}
                    className={`dw-app tw:[position:relative] tw:[z-index:1] tw:[display:grid] tw:[width:100px] tw:[height:100px] tw:[place-items:center] tw:[border-radius:28px] tw:[color:#fff] tw:[font-size:44px] tw:[transition:transform_0.25s_ease] tw:[&:hover]:[transform:translateY(-4px)_rotate(-3deg)] tw:max-bs2xl:[width:86px] tw:max-bs2xl:[height:86px] tw:max-bs2xl:[font-size:38px] tw:max-bs2xl:[border-radius:24px] tw:max-bsxl:[width:74px] tw:max-bsxl:[height:74px] tw:max-bsxl:[font-size:32px] tw:max-bsxl:[border-radius:20px] tw:max-bssm:[width:62px] tw:max-bssm:[height:62px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[font-size:28px] tw:[&.dw-app--google]:[background:#4285f4] tw:[&.dw-app--maps]:[background:#34a853] tw:[&.dw-app--apple]:[background:var(--ink)] tw:[&.dw-app--yelp]:[background:#d32323] tw:[&.dw-app--openai]:[background:#10a37f] tw:[&.dw-app--facebook]:[background:#1877f2] tw:[&.dw-app--waze]:[background:#33ccff] tw:[&.dw-app--waze]:[color:var(--ink)] tw:[&.dw-app--instagram]:[background:linear-gradient(45deg,_#f9ce34,_#ee2a7b_55%,_#6228d7)] tw:[&.dw-app--wordpress]:[background:#21759b] tw:[&.dw-app--shopify]:[background:#95bf47] tw:[&.dw-app--analytics]:[background:#f9ab00] tw:[&.dw-app--analytics]:[color:var(--ink)] tw:[&.dw-app--searchconsole]:[background:#4285f4] tw:[&.dw-app--googleads]:[background:#fff] tw:[&.dw-app--googleads]:[color:#4285f4] tw:[&.dw-app--googleads]:[box-shadow:inset_0_0_0_1.5px_var(--line)] tw:[&.dw-app--tagmanager]:[background:#246fdb] dw-app--${item.tone}`}
                  >
                    <item.icon aria-hidden="true" />
                    <span className="dw-sr tw:[position:absolute] tw:[width:1px] tw:[height:1px] tw:[overflow:hidden] tw:[clip:rect(0_0_0_0)] tw:[white-space:nowrap]">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="dw-hub-core tw:[position:relative] tw:[z-index:1] tw:[display:flex] tw:[flex-direction:column] tw:[align-items:center] tw:[padding:0_12px] tw:[background:#fff] tw:[text-align:center] tw:[&_b]:[margin-top:30px] tw:[&_b]:[font-size:24px] tw:[&_b]:[font-weight:500] tw:[&>span:last-child]:[color:var(--muted)] tw:[&>span:last-child]:[font-size:15px] tw:max-bslg:[grid-column:1_/_-1] tw:max-bslg:[order:-1] tw:max-bssm:[margin-bottom:12px] tw:max-bssm:[&_b]:[margin-top:20px] tw:max-bssm:[&_b]:[font-size:21px]">
                <span className="dw-hub-ring tw:[display:grid] tw:[width:220px] tw:[height:220px] tw:[place-items:center] tw:[border:1.5px_solid_var(--blue)] tw:[border-radius:50%] tw:[color:var(--blue)] tw:[font-size:72px] tw:[box-shadow:0_0_0_14px_#fff,_0_0_0_15.5px_var(--blue-soft)] tw:max-bs2xl:[width:190px] tw:max-bs2xl:[height:190px] tw:max-bs2xl:[font-size:62px] tw:max-bsxl:[width:160px] tw:max-bsxl:[height:160px] tw:max-bsxl:[font-size:52px] tw:max-bssm:[width:132px] tw:max-bssm:[height:132px] tw:max-bssm:[font-size:44px] tw:max-bssm:[box-shadow:0_0_0_10px_#fff,_0_0_0_11.5px_var(--blue-soft)]">
                  <FiMonitor aria-hidden="true" />
                </span>
                <b>Your website</b>
                <span>connected from day one</span>
              </div>
              <ul
                className="dw-hub-side tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[grid-template-rows:repeat(3,_auto)] tw:[gap:24px_0] tw:[align-items:center] tw:[justify-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:12%] tw:[&::before]:[bottom:12%] tw:[&::before]:[left:50%] tw:[&::before]:[border-left:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:[&_li:nth-child(1)]:[grid-area:1_/_2] tw:[&_li:nth-child(2)]:[grid-area:2_/_1] tw:[&_li:nth-child(3)]:[grid-area:2_/_3] tw:[&_li:nth-child(4)]:[grid-area:3_/_2] tw:max-bssm:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:max-bssm:[grid-template-rows:auto] tw:max-bssm:[gap:0_12px] tw:max-bssm:[max-width:320px] tw:max-bssm:[margin:0_auto] tw:max-bssm:[width:100%] tw:max-bssm:[&::before]:[display:none] tw:max-bssm:[&_li:nth-child(n)]:[grid-area:auto]"
                aria-label="Tracking and analytics tools"
              >
                {hubRight.map((item) => (
                  <li
                    key={item.name}
                    className={`dw-app tw:[position:relative] tw:[z-index:1] tw:[display:grid] tw:[width:100px] tw:[height:100px] tw:[place-items:center] tw:[border-radius:28px] tw:[color:#fff] tw:[font-size:44px] tw:[transition:transform_0.25s_ease] tw:[&:hover]:[transform:translateY(-4px)_rotate(-3deg)] tw:max-bs2xl:[width:86px] tw:max-bs2xl:[height:86px] tw:max-bs2xl:[font-size:38px] tw:max-bs2xl:[border-radius:24px] tw:max-bsxl:[width:74px] tw:max-bsxl:[height:74px] tw:max-bsxl:[font-size:32px] tw:max-bsxl:[border-radius:20px] tw:max-bssm:[width:62px] tw:max-bssm:[height:62px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[font-size:28px] tw:[&.dw-app--google]:[background:#4285f4] tw:[&.dw-app--maps]:[background:#34a853] tw:[&.dw-app--apple]:[background:var(--ink)] tw:[&.dw-app--yelp]:[background:#d32323] tw:[&.dw-app--openai]:[background:#10a37f] tw:[&.dw-app--facebook]:[background:#1877f2] tw:[&.dw-app--waze]:[background:#33ccff] tw:[&.dw-app--waze]:[color:var(--ink)] tw:[&.dw-app--instagram]:[background:linear-gradient(45deg,_#f9ce34,_#ee2a7b_55%,_#6228d7)] tw:[&.dw-app--wordpress]:[background:#21759b] tw:[&.dw-app--shopify]:[background:#95bf47] tw:[&.dw-app--analytics]:[background:#f9ab00] tw:[&.dw-app--analytics]:[color:var(--ink)] tw:[&.dw-app--searchconsole]:[background:#4285f4] tw:[&.dw-app--googleads]:[background:#fff] tw:[&.dw-app--googleads]:[color:#4285f4] tw:[&.dw-app--googleads]:[box-shadow:inset_0_0_0_1.5px_var(--line)] tw:[&.dw-app--tagmanager]:[background:#246fdb] dw-app--${item.tone}`}
                  >
                    <item.icon aria-hidden="true" />
                    <span className="dw-sr tw:[position:absolute] tw:[width:1px] tw:[height:1px] tw:[overflow:hidden] tw:[clip:rect(0_0_0_0)] tw:[white-space:nowrap]">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= REVIEWS */}
        <section
          className="dw-sec dw-love tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-love-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-row-head dw-row-head--top tw:[display:flex] tw:[flex-wrap:wrap] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:[align-items:flex-start] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-love-h">
                120+ Websites <br />
                Shipped and Counting
              </Strip>
              <div className="dw-love-aside tw:[position:relative] tw:[max-width:470px] tw:[padding-top:8px] tw:[&_p]:[margin-top:22px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bsmd:[max-width:none]">
                <span className="dw-avas dw-avas--lg tw:[display:flex] tw:[align-items:center] tw:[&>:first-child]:[margin-left:0]">
                  <AvatarPh tone="a" />
                  <AvatarPh tone="b" />
                  <AvatarPh tone="c" />
                  <AvatarPh tone="d" />
                </span>
                <Sparks className="dw-love-sparks" />
                <p>
                  Our clients say it better than we can. Real reviews from Zonic
                  Media clients, straight from Google.
                </p>
              </div>
            </div>

            <div className="dw-love-card tw:[min-height:360px] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:center] tw:[padding:28px_24px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bssm:[padding:14px]">
              {/* Google reviews (owner, 22 Oct 2026): same Trustindex widget as /home2;
                  the guard strips the review schema it injects. */}
              <LenisIframeGuard widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c" />
            </div>

            <div className="dw-logos tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:24px_52px] tw:[margin-top:32px] tw:[&_img]:[display:block] tw:[&_img]:[width:auto] tw:[&_img]:[height:66px] tw:[&_img]:[object-fit:contain] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:15.5px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-size:22px] tw:[&&_b]:[font-weight:500] tw:max-bssm:[gap:20px_28px] tw:max-bssm:[&_img]:[height:54px]">
              <a
                href="https://clutch.co/profile/zonic-media?badge=11431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={70}
                  height={70}
                  src="/images/clutch-top-company-2026.png"
                  alt="Top Clutch Digital Marketing Company Delaware 2026"
                />
              </a>
              <Image
                width={70}
                height={70}
                src="/images/Partner.png"
                alt="Yelp Advertising Partner"
              />
              <a
                href="https://www.trustpilot.com/review/zonicllc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dw-logos-wide tw:[.dw-logos_&.dw-logos-wide]:[height:50px] tw:max-bssm:[.dw-logos_&.dw-logos-wide]:[height:40px]"
                  width={112}
                  height={52}
                  src="/images/trust-black.png"
                  alt="Zonic Media rated 5 stars on Trustpilot"
                />
              </a>
              <GoogleRatingBadge href={SITE_CONTACT.mapHref} />
            </div>
          </div>
        </section>

        {/* ======================================================= WEB BANNER */}
        {/* Centred Zonic web-design service banner (17 Oct 2026, owner
            request). Replaced the "Web Design Across Dallas–Fort Worth"
            county/city card; the old markup is in _legacy/LegacyPage.tsx.
            Facts only from elsewhere on the page: 2–3 weeks, WordPress /
            Shopify / custom, SEO + Core Web Vitals + lead forms in every
            build, flat quote after a free call. */}
        <section
          className="dw-sec dw-webcta-sec tw:py-(--sec-y)"
          aria-labelledby="dfw-webcta-h"
        >
          <div className="dw-wrap tw:w-full tw:px-(--inset)">
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--blue-dark) tw:px-16 tw:py-[76px] tw:text-center tw:text-white tw:max-bsxl:px-10 tw:max-bssm:px-5 tw:max-bssm:py-12">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-10 tw:bg-[radial-gradient(55%_65%_at_50%_0%,rgba(84,140,255,0.6),transparent_72%),radial-gradient(40%_50%_at_50%_110%,rgba(253,193,21,0.16),transparent_70%)]"
                aria-hidden="true"
              />
              <span className="tw:mb-7 tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-white/20 tw:bg-white/10 tw:py-1.5 tw:pr-4 tw:pl-1.5 tw:text-[14.5px] tw:font-medium tw:max-bssm:mb-5">
                <span
                  className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--gold) tw:text-(--ink)"
                  aria-hidden="true"
                >
                  <FiMonitor className="tw:size-3.5" />
                </span>
                Zonic Media Web Design
              </span>
              <Strip id="dfw-webcta-h" className="tw:text-white">
                Websites That Win Customers{" "}
                <br className="tw:max-bssm:hidden" />
                Across Dallas–Fort Worth
              </Strip>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/relaxed tw:text-white/85">
                Zonic Media designs fast, mobile-first websites for local
                businesses on WordPress, Shopify or custom code. Every build
                comes with on-page SEO, Core Web Vitals tuning and lead forms
                that send quote requests straight to you, and most sites go live
                in 2 to 3 weeks for one flat quote agreed on a free call.
              </p>
              <ul className="tw:mx-auto tw:mt-9 tw:flex tw:max-w-[900px] tw:flex-wrap tw:justify-center tw:gap-2.5 tw:max-bssm:mt-7 tw:max-bssm:gap-2">
                {[
                  "Live in 2–3 weeks",
                  "On-page SEO built in",
                  "Mobile-first and fast",
                  "Flat quote, no surprises",
                ].map((point) => (
                  <li
                    key={point}
                    className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white/10 tw:px-4 tw:py-2 tw:text-[15px] tw:text-white/90 tw:max-bssm:text-[14px]"
                  >
                    <FiCheck
                      className="tw:size-4 tw:text-(--gold)"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="tw:mt-10 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3 tw:max-bssm:mt-8">
                <a
                  href="#dfw-contact"
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-8 tw:text-[16.5px] tw:font-medium tw:whitespace-nowrap tw:text-(--ink) tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-(--gold) tw:max-bssm:w-full"
                >
                  Get a Free Website Quote
                  <FiArrowRight aria-hidden="true" />
                </a>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-white/45 tw:px-7 tw:text-[16px] tw:font-medium tw:whitespace-nowrap tw:text-white tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-white/10 tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  Call {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= FAQ */}
        <section
          className="dw-sec dw-faq-sec tw:[padding:var(--sec-y)_0]"
          aria-labelledby="dfw-faq-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <h2
              id="dfw-faq-h"
              className="dw-h2 dw-faq-title tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance] tw:[margin-bottom:36px] tw:[text-align:center]"
            >
              Dallas–Fort Worth Web Design Questions
            </h2>
            <div className="dw-faq tw:[max-width:1080px] tw:[margin:0_auto] tw:[padding:8px_44px] tw:[border-radius:32px] tw:[background:#fff] tw:max-bsmd:[padding:4px_24px] tw:max-bssm:[padding:4px_20px] tw:max-bssm:[border-radius:24px]">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="dw-faq-item tw:[.dw-faq-item+&]:[border-top:1px_solid_var(--line)] tw:[&_summary]:[display:flex] tw:[&_summary]:[align-items:center] tw:[&_summary]:[justify-content:space-between] tw:[&_summary]:[gap:20px] tw:[&_summary]:[padding:22px_0] tw:[&_summary]:[color:var(--ink)] tw:[&_summary]:[font-size:20px] tw:[&_summary]:[font-weight:500] tw:[&_summary]:[letter-spacing:-0.01em] tw:[&_summary]:[list-style:none] tw:[&_summary]:[cursor:pointer] tw:[&_summary::-webkit-details-marker]:[display:none] tw:[&_summary_svg]:[flex:none] tw:[&_summary_svg]:[width:22px] tw:[&_summary_svg]:[height:22px] tw:[&_summary_svg]:[transition:transform_0.25s_ease] tw:[&[open]_summary_svg]:[transform:rotate(45deg)] tw:[&_p]:[max-width:76ch] tw:[&_p]:[padding-bottom:22px] tw:[&_p]:[color:var(--text)] tw:[&_p_a]:[color:var(--blue)] tw:[&_p_a]:[font-weight:500] tw:[&_p_a]:[text-decoration:underline] tw:[&_p_a]:[text-underline-offset:3px] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bsmd:[&_summary]:[font-size:17.5px] tw:max-bsmd:[&_summary]:[padding:22px_0]"
                >
                  <summary>
                    {item.q}
                    <FiPlus aria-hidden="true" />
                  </summary>
                  <p>
                    {item.a}
                    {item.link ? (
                      <>
                        {" "}
                        <Link href={item.link.href}>{item.link.label}</Link>.
                      </>
                    ) : null}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= CONTACT */}
        <section
          className="dw-sec dw-contact tw:[padding:var(--sec-y)_0]"
          id="dfw-contact"
          aria-labelledby="dfw-contact-h"
        >
          <div className="dw-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <div className="dw-contact-card tw:[position:relative] tw:[padding:60px_48px_44px] tw:[border-radius:48px] tw:[overflow:hidden] tw:[background:#fff] tw:[text-align:center] tw:max-bslg:[padding:64px_40px_40px] tw:max-bssm:[padding:48px_16px_16px] tw:max-bssm:[border-radius:28px]">
              <svg
                viewBox="0 0 120 90"
                className="dw-envelope tw:[position:absolute] tw:[top:38%] tw:[left:5%] tw:[width:132px] tw:[transform:rotate(-14deg)] tw:[filter:drop-shadow(0_18px_18px_rgba(28,_79,_196,_0.25))] tw:[&_rect]:[fill:#5d8ff2] tw:[&_path]:[fill:none] tw:[&_path]:[stroke:#fff] tw:[&&_path]:[stroke-width:6] tw:[&&_path]:[stroke-linejoin:round] tw:max-bsxl:[width:100px] tw:max-bsxl:[left:3%] tw:max-bslg:[display:none]"
                aria-hidden="true"
              >
                <rect x="6" y="14" width="108" height="70" rx="10" />
                <path d="M10 22 L60 56 L110 22" />
              </svg>
              <span
                className="dw-contact-pin tw:[position:absolute] tw:[top:34%] tw:[right:6%] tw:[font-size:150px] tw:[line-height:1] tw:max-bsxl:[font-size:110px] tw:max-bsxl:[right:4%] tw:max-bslg:[display:none]"
                aria-hidden="true"
              >
                <InlinePin id="dfw-pin-contact" />
              </span>

              <h2
                id="dfw-contact-h"
                className="dw-contact-title tw:[font-size:clamp(34px,_4.8vw,_74px)] tw:[letter-spacing:-0.035em] tw:[line-height:1.08]"
              >
                Want to Talk <InlineChat /> About <br />
                Your New Website?
              </h2>
              <p className="dw-contact-sub tw:[max-width:640px] tw:[margin:26px_auto_0] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
                Tell us about your business and the cities you serve. We’ll
                review your current site, share a design direction and send back
                a flat project quote.
              </p>
              <div className="dw-contact-links tw:[display:flex] tw:[flex-wrap:wrap] tw:[justify-content:center] tw:[gap:12px] tw:[margin-top:28px] tw:[&_svg]:[width:17px] tw:[&_svg]:[height:17px]">
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="dw-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
                <a
                  href={SITE_CONTACT.emailHref}
                  className="dw-pill dw-pill--outline tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[transform:translateY(-2px)] tw:[min-height:50px] tw:[padding:0_28px] tw:[background:transparent] tw:[color:var(--ink)] tw:[font-size:15.5px] tw:[&:hover]:[background:var(--ink)] tw:[&:hover]:[color:#fff] tw:[.dw-hero-ctas_&]:[min-height:56px] tw:[.dw-hero-ctas_&]:[padding:0_28px] tw:[.dw-hero-ctas_&]:[font-size:16px] tw:[.dw-contact-links_&]:[min-height:54px] tw:[.dw-contact-links_&]:[padding:0_28px] tw:[.dw-contact-links_&]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&]:[width:100%] tw:max-bssm:[.dw-contact-links_&]:[width:100%] tw:max-bssm:[.dw-band_&]:[width:100%]"
                >
                  <FiMail aria-hidden="true" />
                  {SITE_CONTACT.email}
                </a>
              </div>
              <div className="dw-contact-form tw:[max-width:760px] tw:[margin:34px_auto_0] tw:[text-align:left]">
                <ServiceLeadForm
                  formType="dfw-web-design"
                  title="Book Your Free Website Strategy Call"
                  subtitle="Takes about a minute. No commitment required."
                  submitText="Book My Free Strategy Call"
                  messageLabel="What should your new website do for you?"
                  messagePlaceholder="For example: more quote requests from Plano and Frisco"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ BAND */}
        <section
          className="dw-band tw:[padding:64px_0] tw:[background:radial-gradient(45%_120%_at_22%_110%,_rgba(234,_67,_52,_0.18)_0%,_transparent_60%),_radial-gradient(40%_120%_at_78%_100%,_rgba(253,_193,_21,_0.32)_0%,_transparent_60%),_linear-gradient(100deg,_#e4ecfb_0%,_#f3eef6_55%,_#fde9df_100%)] tw:[&_h2]:[max-width:16ch] tw:[&_h2]:[font-size:clamp(38px,_5.4vw,_82px)] tw:[&_h2]:[letter-spacing:-0.04em] tw:[&_h2]:[line-height:1] tw:[&_h2_span]:[color:var(--blue)] tw:max-bssm:[padding:60px_0]"
          aria-labelledby="dfw-band-h"
        >
          <div className="dw-wrap dw-band-inner tw:[width:100%] tw:[padding:0_var(--inset)] tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:space-between] tw:[gap:32px_56px] tw:max-bslg:[flex-direction:column] tw:max-bslg:[align-items:flex-start] tw:max-bssm:[.dw-journey_&]:[padding:0] tw:max-bssm:[.dw-coverage_&]:[padding:0] tw:max-bssm:[.dw-contact_&]:[padding:0]">
            <h2 id="dfw-band-h">
              Get a Website That <span>Wins Work Across DFW.</span>
            </h2>
            <div className="dw-band-side tw:[max-width:380px] tw:[&_p]:[margin-bottom:22px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65]">
              <p>
                Start with a free strategy call and a flat project quote, with
                no surprises along the way.
              </p>
              <Link
                href={SITE_CONTACT.bookCallHref}
                className="dw-pill dw-pill--blue tw:[&.dw-pill]:[display:inline-flex] tw:[&.dw-pill]:[align-items:center] tw:[&.dw-pill]:[justify-content:center] tw:[&.dw-pill]:[gap:9px] tw:[&.dw-pill]:[min-height:56px] tw:[&.dw-pill]:[padding:0_34px] tw:[&.dw-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dw-pill]:[border-radius:999px] tw:[&.dw-pill]:[background:var(--ink)] tw:[&.dw-pill]:[color:#fff] tw:[&.dw-pill]:[font-size:16.5px] tw:[&.dw-pill]:[font-weight:500] tw:[&.dw-pill]:[white-space:nowrap] tw:[&.dw-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dw-pill:hover]:[border-color:var(--ink-2)] tw:[&.dw-pill:hover]:[background:var(--ink-2)] tw:[&.dw-pill:hover]:[color:#fff] tw:[&.dw-pill:hover]:[transform:translateY(-2px)] tw:[.dw-hero-ctas_&.dw-pill]:[min-height:56px] tw:[.dw-contact-links_&.dw-pill]:[min-height:54px] tw:[.dw-contact-links_&.dw-pill]:[padding:0_28px] tw:[.dw-contact-links_&.dw-pill]:[font-size:16px] tw:max-bssm:[.dw-hero-ctas_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-contact-links_&.dw-pill]:[width:100%] tw:max-bssm:[.dw-band_&.dw-pill]:[width:100%] tw:[&.dw-pill--blue]:[border-color:var(--blue)] tw:[&.dw-pill--blue]:[background:var(--blue)] tw:[&.dw-pill--blue:hover]:[border-color:var(--blue-dark)] tw:[&.dw-pill--blue:hover]:[background:var(--blue-dark)]"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
