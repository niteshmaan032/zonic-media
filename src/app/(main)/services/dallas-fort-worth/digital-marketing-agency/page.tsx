import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiCheck,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiShield,
  FiStar,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import {
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
  SiWaze,
  SiYelp,
} from "react-icons/si";

// Converted to Tailwind (redesign R2 pilot, Oct 2026). The old stylesheet
// stays in the repo for the DFW web-design page until the final clean-up.
import "@/components/rd/dfw-marketing/dfwMarketing.base.css";
import "@/components/rd/dfw-kit/ui.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  AvatarPh,
  CityPagesPanel,
  CoverageGrid,
  GoogleRatingBadge,
  HandArrow,
  InlineChat,
  InlinePin,
  JourneyPhone,
  MapPackPanel,
  Ph,
  RatingBadge,
  ReportPanel,
  Sparks,
} from "@/components/rd/dfw-marketing/DfwMarketingVisuals";
import { AreaMapPack } from "@/components/rd/dfw-marketing/AreaMapPack";
import { TeamCard, marketingStepUi } from "@/components/rd/dfw-marketing/MarketingUi";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   DALLAS–FORT WORTH MARKETING AGENCY — design draft v3, 14 Oct 2026.

   LAYOUT follows the two "Retro" reference designs the user supplied:
   grey page with big white rounded cards, headings set on white highlight
   strips, a staggered bento of stat cards under a centred hero, a services
   card slider with arrows, alternating feature rows with UI panels and a
   floating colour chip, a numbered list with colour image panels, an
   app-icon hub, reviews, news cards, an FAQ card and a gradient CTA band.

   TYPE AND COLOUR stay on the home page system (user's instruction): the
   inherited site font (Neue Haas), weight 500 headings, ink #0c1526, blue
   #2567e8, gold #fdc115, plus the home green/red for accents.

   STATUS: launched 15 Oct 2026 at the user's request, ahead of the growth
   plan's 28 Oct freeze (docs/growth-plan-2026-10.md): indexable, in
   src/app/sitemap.ts, linked from the navbar Locations menu.

   NO PHOTOS (owner, 19 Oct 2026): the about section and the process steps
   use UI components instead of images (MarketingUi.tsx: TeamCard, one UI
   per step); the wide about box keeps its photo (owner, same day). Old
   photos stay in /public/images/dfw/ until the final clean-up.

   HONESTY: Zonic has no Texas office. At the user's request (15 Oct 2026)
   the page no longer says so outright, but it must never claim a Dallas
   address or office either. Stats come from the home page (900+, 1,500+, 5.0 from 21, 20+).
--------------------------------------------------------------------------- */

const PAGE_PATH = "/services/dallas-fort-worth/digital-marketing-agency";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/* Keywords (Semrush US, 15 Oct 2026):
     digital marketing agency dallas 1,600 (KD 39) · dallas digital marketing
     agency 1,300 (41) · marketing agency dallas 880 (58) · digital marketing
     dallas 720 (33) · fort worth digital marketing agency 480 (43) ·
     marketing agency fort worth 480 (59) · local seo dallas 480 (9) ·
     marketing companies in dallas 320 (22) · digital marketing agency dfw 110.
   No other zonicllc.com URL ranks for a Dallas/Fort Worth marketing term,
   so this page owns the cluster. Dallas SEO-company and web-design terms
   (2,400 each) are separate intents for future dedicated pages. */
const TITLE = "Digital Marketing Agency Dallas–Fort Worth | Zonic Media";
const DESCRIPTION =
  "Dallas–Fort Worth digital marketing agency for local businesses: Google Business Profile, local SEO, web design and Google Ads. Free audit, no contracts.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  keywords: [
    "digital marketing agency dallas",
    "dallas digital marketing agency",
    "marketing agency dallas",
    "digital marketing dallas",
    "fort worth digital marketing agency",
    "marketing agency fort worth",
    "dfw marketing agency",
    "local seo dallas",
    "local seo fort worth",
    "marketing companies in dallas",
  ],
  openGraph: {
    title: "Dallas–Fort Worth Digital Marketing Agency | Zonic Media",
    description: DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zonic Media: digital marketing for Dallas–Fort Worth businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas–Fort Worth Digital Marketing Agency | Zonic Media",
    description:
      "Google Business Profile, local SEO, web design and Google Ads for DFW businesses. Free audit, no long-term contract.",
  },
};

/* ------------------------------------------------------------------ data */

const services = [
  {
    icon: FiMapPin,
    tone: "blue",
    title: "Google Business Profile management",
    body: "Your Google Business Profile decides whether you show up in the Map Pack. We keep it accurate, active and matched to the searches DFW customers make.",
    points: [
      "Categories and services matched to what you sell",
      "Weekly posts and fresh photos",
      "Review requests, with replies written for you",
    ],
    href: "/local-seo-google-business-optimization",
    link: "Profile optimization",
  },
  {
    icon: FiShield,
    tone: "red",
    title: "Profile reinstatement & verification",
    body: "Suspended, stuck in verification or lost to a duplicate listing? Reinstatement is our most requested service, with 900+ profiles reinstated and verified.",
    points: [
      "The cause of the suspension found before we appeal",
      "Evidence prepared for Google’s review",
      "Help with video and postcard verification",
    ],
    href: "/services/gbp-reinstatement-service",
    link: "Reinstatement service",
  },
  {
    icon: FiLayout,
    tone: "gold",
    title: "Website design for local businesses",
    body: "Fast, mobile-first websites with a page for each city and service you want to rank for, built to turn visits into calls.",
    points: [
      "City and service pages for the suburbs you serve",
      "Click-to-call and quote forms on every page",
      "Core Web Vitals passed at launch",
    ],
    href: "/services/dallas-fort-worth/web-design-agency",
    link: "Dallas–Fort Worth web design",
  },
  {
    icon: FiTrendingUp,
    tone: "green",
    title: "Local SEO across the metro",
    note: "From $297/mo",
    body: "Local SEO in Dallas, Fort Worth, Plano and Frisco: listings, local links and content that carry your rankings past your own ZIP code.",
    points: [
      "Listings cleaned up on the directories Google checks",
      "Links from DFW sites and local partners",
      "Rankings tracked by city every month",
    ],
    href: "/services/dallas-fort-worth/local-seo-agency",
    link: "Dallas–Fort Worth local SEO",
  },
  {
    icon: FiTarget,
    tone: "ink",
    title: "Google Ads & Local Services Ads",
    body: "Ads that reach the parts of DFW your profile can’t yet, targeted by ZIP code and scheduled for the hours someone can answer the phone.",
    points: [
      "ZIP-code and radius targeting",
      "Call tracking on every campaign",
      "Budgets raised after storms and freezes",
    ],
    href: "/services/google-ads",
    link: "Google Ads management",
  },
  {
    icon: FiMessageCircle,
    tone: "soft",
    title: "AI search optimization",
    body: "More customers now ask ChatGPT or Google’s AI who to call. We make your business clear enough for AI tools to name you and link to you.",
    points: [
      "Service pages written to be quoted",
      "Matching business details across the web",
      "Structured data on every page",
    ],
    href: "/services/ai-seo-services",
    link: "AI search optimization",
  },
];

const features = [
  {
    label: "Google Maps",
    title: "Show Up in the Map Pack Where You Want Work",
    body: "Dallas and Fort Worth are about 30 miles apart, and Google weighs that distance when it picks the top three. We build your profile’s relevance and reviews so you hold the Map Pack close to home and push the edge further out.",
    points: [
      { t: "The right categories", d: "Primary and secondary categories matched to the searches you want." },
      { t: "Service area set", d: "The DFW cities you serve, listed on your profile." },
      { t: "A steady flow of reviews", d: "Requests after every job, with replies written for you." },
      { t: "Weekly activity", d: "Posts, photos and offers that keep the profile current." },
    ],
    href: "/local-seo-google-business-optimization",
    link: "Google Business Profile optimization",
    panel: <MapPackPanel />,
  },
  {
    label: "Websites",
    title: "A Page for Every City You Serve",
    body: "A Dallas page won’t rank in Frisco. Each city you want work from gets its own page, written for that area, with click-to-call and a quote form, and Core Web Vitals passed at launch.",
    points: [
      { t: "City pages", d: "A page for each suburb you serve, written for that area." },
      { t: "Built to convert", d: "Click-to-call, quote forms and reviews on every page." },
      { t: "Fast on phones", d: "Core Web Vitals passed at launch." },
      { t: "Ready for search", d: "On-page SEO and structured data included in every build." },
    ],
    href: "/services/dallas-fort-worth/web-design-agency",
    link: "Dallas–Fort Worth web design",
    panel: <CityPagesPanel />,
  },
  {
    label: "Reporting",
    title: "Know Which Calls Came From Where",
    body: "Call and form tracking go in during the first month, so your monthly report shows calls, forms and rankings by city, and which part of the plan brought them in.",
    points: [
      { t: "Call tracking", d: "Every call logged with the source that produced it." },
      { t: "Form tracking", d: "Quote requests counted alongside calls." },
      { t: "Rankings by city", d: "Where you show up from cities across DFW." },
      { t: "A plain-English summary", d: "What changed, what it brought in and what’s next." },
    ],
    href: "#dfw-contact",
    link: "Start with a free audit",
    panel: <ReportPanel />,
  },
];

/* Hand-placed "+" marks for the hero background (% of the hero box),
   kept to the edges and the band above the headline. */
const heroMarks: [number, number][] = [
  [5, 15], [12, 31], [4, 47], [15, 57], [8, 70],
  [95, 13], [88, 27], [96, 42], [85, 55], [92, 68],
  [33, 7], [67, 8],
];

const journey = [
  {
    t: "They search",
    d: "“Plumber near me” from a kitchen in Plano. We make sure your profile and pages match the words they type.",
  },
  {
    t: "They find you",
    d: "Your business in the top three on Google Maps, thanks to the right categories, reviews and service area.",
  },
  {
    t: "They call",
    d: "One tap from your profile or website. Click-to-call and call tracking go on everything.",
  },
  {
    t: "They book",
    d: "The job lands on your calendar, and your monthly report shows which search brought it in.",
  },
];

const steps = [
  {
    when: "Week 1",
    title: "A Free Metro Visibility Audit",
    body: "Your Google profile, website and rankings checked from cities across DFW, the competitors who outrank you, and a plan with a flat quote.",
    href: "#dfw-contact",
    tone: "blue",
  },
  {
    when: "Weeks 2–4",
    title: "Fix the Foundation",
    body: "Categories, services and service area on your profile, matching business details everywhere, and call tracking so every lead is counted.",
    href: "/local-seo-google-business-optimization",
    tone: "gold",
  },
  {
    when: "Month 2",
    title: "Build Reach Into the Suburbs",
    body: "Pages for the areas you want work from, review requests that mention the job and the town, and links from local sites.",
    href: "/services/local-seo-packages",
    tone: "green",
  },
  {
    when: "Month 3 on",
    title: "Grow, and Report on Calls",
    body: "Ads where Maps can’t reach yet, and a monthly report on calls, forms and where you rank in each city.",
    href: "/services/google-ads",
    tone: "red",
  },
];

const hubLeft = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: SiYelp, name: "Yelp", tone: "yelp" },
];
const hubRight = [
  { icon: SiOpenai, name: "ChatGPT", tone: "openai" },
  { icon: SiFacebook, name: "Facebook", tone: "facebook" },
  { icon: SiWaze, name: "Waze", tone: "waze" },
  { icon: SiInstagram, name: "Instagram", tone: "instagram" },
];

const counties = [
  {
    name: "Dallas County",
    cities: "Dallas, Irving, Garland, Mesquite, Grand Prairie, Richardson, Carrollton, Rowlett, DeSoto, Cedar Hill",
  },
  {
    name: "Tarrant County",
    cities: "Fort Worth, Arlington, Mansfield, North Richland Hills, Grapevine, Southlake, Keller, Euless, Bedford",
  },
  {
    name: "Collin County",
    cities: "Plano, Frisco, McKinney, Allen, Wylie, Prosper, Celina, Murphy",
  },
  {
    name: "Denton County",
    cities: "Denton, Lewisville, Flower Mound, Little Elm, The Colony, Highland Village, Corinth",
  },
];

/* Map pins on the area-map skeleton, placed by real position (% of box). */
const mapPins = [
  { name: "Denton", x: 34, y: 12 },
  { name: "McKinney", x: 80, y: 13 },
  { name: "Frisco", x: 60, y: 22 },
  { name: "Plano", x: 72, y: 36 },
  { name: "Fort Worth", x: 16, y: 64 },
  { name: "Arlington", x: 37, y: 72 },
  { name: "Dallas", x: 64, y: 62 },
  { name: "Mansfield", x: 32, y: 90 },
];

const faqs: { q: string; a: string; link?: { href: string; label: string } }[] =
  [
    {
      q: "How do you work with Dallas–Fort Worth businesses?",
      a: "You get one dedicated team for your Google Business Profile, website, local SEO and Google Ads. Strategy calls happen on video at times that suit Central Time, everything we manage is online, and a plain-English report each month shows the calls, leads and rankings the work brought in.",
    },
    {
      q: "Can my business rank in both Dallas and Fort Worth?",
      a: "In the web results, yes: a strong page for each city can rank in both. The Google Maps Map Pack is harder, because Google weighs the distance between the searcher and your address, and the two downtowns are about 30 miles apart. Most businesses hold the Map Pack near their address, then use city pages and Google Ads to reach the other side of the metro.",
    },
    {
      q: "How much does a digital marketing agency in Dallas cost?",
      a: "Most agencies charge small businesses somewhere between $1,000 and $5,000 a month, depending on the channels. Our local SEO plans are $297, $750 and $1,500 a month, Google Ads management is priced on ad spend, and websites are a one-time project fee. Every engagement starts with a free audit and a flat quote.",
    },
    {
      q: "How long does it take to see results?",
      a: "Fixes to your Google Business Profile can move rankings within a few weeks. Ranking in the competitive parts of the metro usually takes three to six months of steady work. Google Ads can bring in calls in the first week.",
    },
    {
      q: "Which parts of DFW do you cover?",
      a: "All of it: Dallas, Tarrant, Collin and Denton counties and the counties around them, including Rockwall, Ellis, Johnson, Kaufman, Parker, Hunt and Wise. We plan around the cities you want work from, not just the one on your address.",
    },
    {
      q: "My Google Business Profile is suspended. Can you help?",
      a: "Yes. Reinstatement is our most requested service, and we’ve reinstated and verified more than 900 profiles. A suspended profile has to be fixed before any ranking work will matter.",
      link: {
        href: "/services/gbp-reinstatement-service",
        label: "Google Business Profile reinstatement",
      },
    },
    {
      q: "Do you offer local SEO in Dallas and Fort Worth?",
      a: "Yes. Local SEO is the core of most of our DFW plans: Google Business Profile optimization, consistent listings, links from local sites and a page for each city you serve. We check your rankings from cities across the Metroplex every month, and plans are $297, $750 or $1,500 a month.",
      link: { href: "/services/local-seo-packages", label: "See our local SEO packages" },
    },
    {
      q: "How do I show up in Google’s AI answers in Dallas?",
      a: "AI answers lean on the same signals as local SEO: a complete Google Business Profile, steady reviews that mention the job and the town, and clear service pages with matching business details everywhere. We set those up and check which AI answers mention you.",
      link: { href: "/services/ai-seo-services", label: "AI search optimization" },
    },
    {
      q: "Do I have to sign a long-term contract?",
      a: "No. There are no long-term contracts. Plans run month to month after a free audit and a flat quote.",
    },
  ];

/* ---------------------------------------------------------------- schema */

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Dallas–Fort Worth Marketing Agency", url: PAGE_PATH },
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
      url: `${SITE_URL}/images/dfw/team-campaign.webp`,
      caption: "Zonic Media team planning a Dallas–Fort Worth marketing campaign",
    },
  },
  // A Service with areaServed, not a LocalBusiness: there is no Texas
  // address, and a LocalBusiness here would claim one.
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Digital marketing for Dallas–Fort Worth businesses",
    alternateName: [
      "Dallas digital marketing agency",
      "Fort Worth digital marketing agency",
      "DFW marketing agency",
    ],
    serviceType: [
      "Digital marketing agency",
      "Local SEO",
      "Google Business Profile management",
      "Website design",
      "Google Ads management",
      "AI search optimization",
    ],
    url: PAGE_URL,
    description: DESCRIPTION,
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Local service businesses in Dallas–Fort Worth",
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
    // Every service links to its own page; only local SEO carries a price
    // because the site publishes one (plans from $297 a month).
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services for DFW businesses",
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

/** Heading set on white highlight strips, one per line (reference style). */
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
    <Tag id={id} className={`dm-strip tw:[font-size:clamp(34px,_4.6vw,_62px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.12] tw:[&>span]:[padding:0] tw:[&>span]:[background:none] tw:[.dm-journey-card_&]:[font-size:clamp(30px,_3.3vw,_50px)] tw:[.dm-coverage-card_&]:[font-size:clamp(30px,_3.3vw,_50px)] tw:[.dm-coverage-card_&]:[color:#fff] tw:[.dm-area_&]:[font-size:clamp(32px,_3.8vw,_56px)] tw:max-bsmd:[line-height:1.16]! tw:max-bssm:[font-size:clamp(30px,_8.6vw,_40px)] ${className}`}>
      <span>{children}</span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ page */

export default function DallasFortWorthMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="dm-root loc-page tw:[--bg:#eef1f6] tw:[--ink:#0c1526] tw:[&&]:[--ink-2:#1d2a44] tw:[--blue:#2567e8] tw:[&&]:[--blue-dark:#1c4fc4] tw:[&&]:[--blue-soft:#eaf0fe] tw:[--gold:#fdc115] tw:[&&]:[--gold-dark:#b98a00] tw:[&&]:[--gold-soft:#fff6db] tw:[--green:#34a852] tw:[&&]:[--green-soft:#e7f6ec] tw:[--red:#ea4334] tw:[--text:#47546e] tw:[--muted:#7a869e] tw:[--line:#e3e9f2] tw:[--panel:#f1f4f9] tw:[--inset:100px] tw:[--sec-y:36px] tw:[--r-xl:40px] tw:[--lift:0_26px_50px_-26px_rgba(12,_21,_38,_0.3)] tw:[background:var(--bg)] tw:[color:var(--ink)] tw:[line-height:1.6] tw:[overflow-x:clip] tw:[-webkit-font-smoothing:antialiased] tw:[box-sizing:border-box] tw:max-bsxl:[--inset:30px] tw:max-bsxl:[--sec-y:32px] tw:max-bsxl:[--r-xl:32px] tw:max-bslg:[--inset:40px] tw:max-bslg:[--sec-y:30px] tw:max-bssm:[--inset:20px] tw:max-bssm:[--sec-y:26px] tw:max-bssm:[--r-xl:24px]">
        {/* ============================================================ HERO */}
        <section className="dm-hero tw:[position:relative] tw:[isolation:isolate] tw:[overflow:clip] tw:[padding:144px_0_var(--sec-y)] tw:[background:radial-gradient(circle_at_16%_12%,_rgba(49,_87,_245,_0.07),_transparent_26%),_radial-gradient(circle_at_88%_6%,_rgba(110,_80,_247,_0.065),_transparent_22%),_linear-gradient(180deg,_#fdfdff_0%,_#f9fbff_60%,_#fff_100%)] tw:[text-align:center] tw:[&::before]:[position:absolute] tw:[&::before]:[z-index:-1] tw:[&::before]:[width:450px] tw:[&::before]:[height:450px] tw:[&::before]:[border-radius:50%] tw:[&::before]:[filter:blur(70px)] tw:[&::before]:[opacity:0.09] tw:[&::before]:[pointer-events:none] tw:[&::before]:[content:''] tw:[&::after]:[position:absolute] tw:[&::after]:[z-index:-1] tw:[&::after]:[width:450px] tw:[&::after]:[height:450px] tw:[&::after]:[border-radius:50%] tw:[&::after]:[filter:blur(70px)] tw:[&::after]:[opacity:0.09] tw:[&::after]:[pointer-events:none] tw:[&::after]:[content:''] tw:[&::before]:[top:250px] tw:[&::before]:[left:-200px] tw:[&::before]:[background:#5070ff] tw:[&::after]:[top:440px] tw:[&::after]:[right:-220px] tw:[&::after]:[background:#875cff] tw:max-bsmd:[padding-top:120px]" aria-labelledby="dfw-h1">
          <span className="dm-hero-marks tw:[position:absolute] tw:[inset:0] tw:[z-index:-1] tw:[pointer-events:none] tw:[&_i]:[position:absolute] tw:[&_i]:[width:14px] tw:[&_i]:[height:14px] tw:[&_i]:[opacity:0.4] tw:[&_i::before]:[position:absolute] tw:[&_i::before]:[top:50%] tw:[&_i::before]:[left:50%] tw:[&_i::before]:[width:100%] tw:[&_i::before]:[height:1.5px] tw:[&_i::before]:[border-radius:1px] tw:[&_i::before]:[background:#3157f5] tw:[&_i::before]:[transform:translate(-50%,_-50%)] tw:[&_i::before]:[content:''] tw:[&_i::after]:[position:absolute] tw:[&_i::after]:[top:50%] tw:[&_i::after]:[left:50%] tw:[&_i::after]:[width:100%] tw:[&_i::after]:[height:1.5px] tw:[&_i::after]:[border-radius:1px] tw:[&_i::after]:[background:#3157f5] tw:[&_i::after]:[content:''] tw:[&_i::after]:[transform:translate(-50%,_-50%)_rotate(90deg)] tw:[&_i:nth-child(odd)]:[width:10px] tw:[&_i:nth-child(odd)]:[height:10px] tw:[&_i:nth-child(odd)]:[opacity:0.3] tw:max-bssm:[display:none]" aria-hidden="true">
            {heroMarks.map(([x, y]) => (
              <i key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }} />
            ))}
          </span>
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <Strip as="h1" id="dfw-h1" className="dm-hero-title tw:min-bssm:[&.dm-hero-title]:[font-size:clamp(38px,_5vw,_76px)] tw:max-bssm:[&.dm-hero-title]:[font-size:clamp(36px,_10.25vw,_44px)] tw:min-bsmd:[&.dm-hero-title]:[line-height:1.12] tw:max-bsmd:[&.dm-hero-title]:[line-height:1.16]!">
              Dallas–Fort Worth <InlinePin /> Digital Marketing{" "}
              <br className="dm-hero-br tw:max-bssm:[display:none]" />
              Agency for Local Businesses
            </Strip>
            <p className="dm-hero-sub tw:[max-width:760px] tw:[margin:28px_auto_0] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
              Zonic Media is the digital marketing agency that helps
              Dallas–Fort Worth businesses grow. We turn your Google Business
              Profile, website, local SEO and Google Ads into a steady stream
              of calls, leads and booked jobs from Frisco to Mansfield, so you
              can focus on running the business while we bring in the
              customers.
            </p>
            <div className="dm-hero-logos tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:16px_40px] tw:[margin-top:30px] tw:[&_img]:[display:block] tw:[&_img]:[width:auto] tw:[&_img]:[height:82px] tw:[&_img]:[object-fit:contain] tw:max-bssm:[gap:12px_24px] tw:max-bssm:[&_img]:[height:64px]">
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
                  className="dm-hero-logo-wide tw:[.dm-hero-logos_&.dm-hero-logo-wide]:[height:56px] tw:max-bssm:[.dm-hero-logos_&.dm-hero-logo-wide]:[height:44px]"
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
                src="/images/Partner.webp"
                alt="Yelp Advertising Partner"
                priority
              />
              <GoogleRatingBadge href={SITE_CONTACT.mapHref} />
            </div>
            <div className="dm-hero-ctas tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:12px] tw:[margin-top:30px]">
              <a href="#dfw-contact" className="dm-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]">
                Book a Free Strategy Call
              </a>
              <a
                href={SITE_CONTACT.phoneHref}
                className="dm-pill dm-pill--outline tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[transform:translateY(-2px)] tw:[min-height:50px] tw:[padding:0_28px] tw:[background:transparent] tw:[color:var(--ink)] tw:[font-size:15.5px] tw:[&:hover]:[background:var(--ink)] tw:[&:hover]:[color:#fff] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-hero-ctas_&]:[padding:0_28px] tw:[.dm-hero-ctas_&]:[font-size:16px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]"
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="dm-bento tw:[display:grid] tw:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:[gap:24px] tw:[align-items:end] tw:[margin-top:4px] tw:[padding:0_var(--inset)] tw:[text-align:left] tw:max-bs2xl:[gap:18px] tw:max-bsxl:[display:flex] tw:max-bsxl:[align-items:flex-end] tw:max-bsxl:[gap:18px] tw:max-bsxl:[overflow-x:auto] tw:max-bsxl:[scroll-snap-type:x_mandatory] tw:max-bsxl:[padding-bottom:6px] tw:max-bsxl:[scrollbar-width:none] tw:max-bsxl:[&::-webkit-scrollbar]:[display:none] tw:max-bssm:[margin-top:16px]">
            <div className="dm-bento-card dm-bento-card--blue tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:space-between] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[--ava-ring:var(--blue)] tw:[height:345px] tw:[background:var(--blue)] tw:[color:#fff] tw:[&_p]:[margin-bottom:10px] tw:[&_p]:[color:rgba(255,_255,_255,_0.82)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:315px]">
              <span className="dm-avas tw:[display:flex] tw:[align-items:center] tw:[&>:first-child]:[margin-left:0]">
                <AvatarPh tone="a" />
                <AvatarPh tone="b" />
                <AvatarPh tone="c" />
                <span className="dm-avas-plus tw:[width:48px] tw:[height:48px] tw:[margin-left:-12px] tw:[border:3px_solid_var(--ava-ring,_#fff)] tw:[border-radius:50%] tw:[display:grid] tw:[place-items:center] tw:[background:var(--gold)] tw:[color:var(--ink)] tw:[font-size:20px]" aria-hidden="true">
                  <FiPlus />
                </span>
              </span>
              <div>
                <p>Google Business Profiles reinstated and verified</p>
                <b>900+</b>
              </div>
            </div>

            <div className="dm-bento-card dm-bento-card--lime tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[align-items:center] tw:[justify-content:center] tw:[height:285px] tw:[background:#dcfc7c] tw:[text-align:center] tw:[&>b]:[margin-top:20px] tw:[&_p]:[margin-top:10px] tw:[&_p]:[color:rgba(12,_21,_38,_0.7)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:265px]">
              <span className="dm-bento-icon tw:[display:grid] tw:[flex:none] tw:[width:58px] tw:[height:58px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:23px] tw:[background:rgba(255,_255,_255,_0.55)] tw:[color:var(--ink)]" aria-hidden="true">
                <FiAward />
              </span>
              <b>1,500+</b>
              <p>Profiles optimized</p>
            </div>

            <div className="dm-bento-card dm-bento-card--gold tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:space-between] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[&_p]:[font-size:15.5px] tw:[&_p]:[line-height:1.45] tw:[height:380px] tw:[background:var(--gold)] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:345px]">
              <span className="dm-bento-quote tw:[display:grid] tw:[flex:none] tw:[width:58px] tw:[height:58px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:23px] tw:[background:#fff]" aria-hidden="true">
                <FiStar />
              </span>
              <div>
                <b>5.0</b>
                <span className="dm-bento-stars tw:[display:flex] tw:[gap:4px] tw:[margin:14px_0_10px] tw:[&_svg]:[width:16px] tw:[&_svg]:[height:16px] tw:[&_svg]:[fill:var(--ink)]" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} />
                  ))}
                </span>
                <p>Average rating from our Google reviews</p>
              </div>
            </div>

            <div className="dm-bento-card dm-bento-card--ink tw:[position:relative] tw:[display:flex] tw:[flex-direction:column] tw:[padding:30px_28px] tw:[border-radius:var(--r-xl)] tw:[&>b]:[display:block] tw:[&>b]:[font-weight:500] tw:[&>b]:[letter-spacing:-0.03em] tw:[&>b]:[line-height:1] tw:[&>div>b]:[display:block] tw:[&>div>b]:[font-size:clamp(40px,_4vw,_60px)] tw:[&>div>b]:[font-weight:500] tw:[&>div>b]:[letter-spacing:-0.03em] tw:[&>div>b]:[line-height:1] tw:[height:420px] tw:[justify-content:flex-start] tw:[background:var(--ink)] tw:[color:#fff] tw:[&>b]:[font-size:clamp(50px,_4.6vw,_70px)] tw:[&_p]:[max-width:12ch] tw:[&_p]:[margin-top:16px] tw:[&_p]:[color:#fff] tw:[&_p]:[font-size:clamp(19px,_1.6vw,_24px)] tw:[&_p]:[line-height:1.3] tw:max-bs2xl:[padding:26px_22px] tw:max-bsxl:[flex:0_0_250px] tw:max-bsxl:[scroll-snap-align:center] tw:max-bssm:[flex-basis:236px] tw:max-bssm:[padding:24px_22px] tw:max-bssm:[height:390px]">
              <b>20+</b>
              <p>Local service niches we market</p>
              <ul className="dm-tags tw:[position:absolute] tw:[left:22px] tw:[right:22px] tw:[bottom:22px] tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-content:flex-end] tw:[gap:7px_6px] tw:[margin:0] tw:[padding:0] tw:[list-style:none] tw:max-bssm:[left:18px] tw:max-bssm:[right:18px] tw:max-bssm:[bottom:18px]" aria-label="Niches we market">
                <li className="dm-tag dm-tag--gold tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:var(--gold)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Roofing</li>
                <li className="dm-tag dm-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">HVAC</li>
                <li className="dm-tag dm-tag--green tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#b8eccb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Plumbing</li>
                <li className="dm-tag dm-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Real estate</li>
                <li className="dm-tag dm-tag--blue tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#cddcfb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Home inspectors</li>
                <li className="dm-tag dm-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Pest control</li>
                <li className="dm-tag dm-tag--gold tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:var(--gold)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Landscaping</li>
                <li className="dm-tag dm-tag--green tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#b8eccb] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Dental</li>
                <li className="dm-tag dm-tag--white tw:[padding:6px_13px] tw:[border-radius:999px] tw:[color:var(--ink)] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[background:#fff] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">Solar</li>
                <li className="dm-tag dm-tag--more tw:[padding:6px_13px] tw:[border-radius:999px] tw:[font-size:13.5px] tw:[font-weight:500] tw:[line-height:1.3] tw:[white-space:nowrap] tw:[border:1px_dashed_rgba(255,_255,_255,_0.45)] tw:[color:rgba(255,_255,_255,_0.85)] tw:[&:nth-child(3n_+_1)]:[transform:rotate(-4deg)] tw:[&:nth-child(3n_+_2)]:[transform:rotate(3deg)] tw:[&:nth-child(3n)]:[transform:rotate(-1.5deg)] tw:max-bs2xl:[font-size:13px] tw:max-bs2xl:[padding:6px_12px] tw:max-bssm:[font-size:12.5px] tw:max-bssm:[padding:5px_11px]">+ more</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        <section className="dm-sec dm-about tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-about-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-about-top tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:[gap:56px] tw:[align-items:start] tw:max-bsxl:[gap:40px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)]">
              <div className="dm-about-head tw:[position:relative]">
                <Strip id="dfw-about-h">
                  Built Around How{" "}
                  <br />
                  DFW Customers Search.
                </Strip>
                <HandArrow className="dm-about-arrow tw:[&.dm-about-arrow]:[position:absolute] tw:[&.dm-about-arrow]:[top:calc(100%_+_18px)] tw:[&.dm-about-arrow]:[left:32%] tw:[&.dm-about-arrow]:[width:230px] tw:max-bslg:[&.dm-about-arrow]:[display:none]" />
              </div>
              <div className="dm-about-copy tw:[&_p:not(.dm-label)]:[margin-bottom:24px] tw:[&_p:not(.dm-label)]:[color:var(--ink-2)] tw:[&_p:not(.dm-label)]:[font-size:18px] tw:[&_p:not(.dm-label)]:[line-height:1.65]">
                <p className="dm-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">About Zonic in Dallas–Fort Worth</p>
                <p>
                  We help Dallas–Fort Worth businesses grow. We build fast,
                  great-looking websites that turn visitors into calls, get
                  your Google Business Profile into the Map Pack, and put your
                  name in front of customers from Plano to Fort Worth, so the
                  leads keep coming in every month.
                </p>
                <p>
                  With 900+ Google Business Profiles reinstated and verified
                  and 1,500+ optimized, we know what it takes to win local
                  search. You get one dedicated team that treats your growth
                  like its own, with clear monthly reports that show the calls
                  and leads your marketing brings in.
                </p>
                <Link href="/about" className="dm-pill dm-pill--outline tw:[&.dm-pill]:[display:inline-flex] tw:[&.dm-pill]:[align-items:center] tw:[&.dm-pill]:[justify-content:center] tw:[&.dm-pill]:[gap:9px] tw:[&.dm-pill]:[min-height:56px] tw:[&.dm-pill]:[padding:0_34px] tw:[&.dm-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dm-pill]:[border-radius:999px] tw:[&.dm-pill]:[background:var(--ink)] tw:[&.dm-pill]:[color:#fff] tw:[&.dm-pill]:[font-size:16.5px] tw:[&.dm-pill]:[font-weight:500] tw:[&.dm-pill]:[white-space:nowrap] tw:[&.dm-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dm-pill:hover]:[border-color:var(--ink-2)] tw:[&.dm-pill:hover]:[background:var(--ink-2)] tw:[&.dm-pill:hover]:[color:#fff] tw:[&.dm-pill:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&.dm-pill]:[min-height:56px] tw:[.dm-contact-links_&.dm-pill]:[min-height:54px] tw:[.dm-contact-links_&.dm-pill]:[padding:0_28px] tw:[.dm-contact-links_&.dm-pill]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-contact-links_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-band_&.dm-pill]:[width:100%] tw:[&.dm-pill--outline]:[min-height:50px] tw:[&.dm-pill--outline]:[padding:0_28px] tw:[&.dm-pill--outline]:[background:transparent] tw:[&.dm-pill--outline]:[color:var(--ink)] tw:[&.dm-pill--outline]:[font-size:15.5px] tw:[&.dm-pill--outline:hover]:[background:var(--ink)] tw:[&.dm-pill--outline:hover]:[color:#fff] tw:[.dm-hero-ctas_&.dm-pill--outline]:[padding:0_28px] tw:[.dm-hero-ctas_&.dm-pill--outline]:[font-size:16px]">
                  More About Us
                </Link>
              </div>
            </div>

            <div className="dm-about-photos tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_2.1fr)] tw:[gap:24px] tw:[margin-top:110px] tw:max-bslg:[margin-top:110px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[margin-top:84px]">
              <RatingBadge />
              <div className="dm-about-photo dm-about-photo--narrow tw:[position:relative] tw:[height:460px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bsxl:[height:420px] tw:max-bssm:[height:auto]">
                <TeamCard />
              </div>
              <div className="dm-about-photo dm-about-photo--wide tw:[position:relative] tw:[height:460px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bsxl:[height:420px] tw:max-bssm:[height:280px]">
                <Ph
                  src="/images/dfw/team-campaign.webp"
                  label="Zonic Media team planning a Dallas–Fort Worth marketing campaign"
                  ratio="16:9"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== SERVICES */}
        <section className="dm-sec dm-services tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-svc-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-row-head tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:flex-end] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-svc-h">
                Digital Marketing Services{" "}
                <br />
                for DFW Businesses
              </Strip>
              <div className="dm-svc-head tw:[display:flex] tw:[flex-direction:column] tw:[align-items:flex-start] tw:[gap:22px] tw:[max-width:460px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65]">
                <p>
                  Six services, one team and one monthly report. Most DFW
                  businesses start with their Google profile and website, then
                  add local SEO and ads to reach the rest of the metro.
                </p>
                <a href="#dfw-contact" className="dm-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]">
                  Book a Free Strategy Call
                </a>
              </div>
            </div>

            <div className="dm-svc-grid tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[gap:24px] tw:max-bslg:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:16px]">
              {services.map((service) => (
                <article key={service.title} className="dm-svc-card tw:[display:flex] tw:[flex-direction:column] tw:[padding:28px_28px_26px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:[transition:transform_0.25s_ease,_box-shadow_0.25s_ease] tw:[&:hover]:[box-shadow:0_26px_50px_-30px_rgba(12,_21,_38,_0.28)] tw:[&:hover]:[transform:translateY(-4px)] tw:[&_h3]:[font-size:23px] tw:[&_h3]:[line-height:1.2] tw:[&>p]:[flex-grow:1] tw:[&>p]:[margin-top:12px] tw:[&>p]:[color:var(--text)] tw:[&>p]:[font-size:18px] tw:[&>p]:[line-height:1.65] tw:max-bssm:[padding:28px_24px_26px] tw:max-bssm:[&_h3]:[font-size:21px]">
                  <div className="dm-svc-card-top tw:[display:flex] tw:[align-items:center] tw:[justify-content:space-between] tw:[gap:12px] tw:[margin-bottom:22px]">
                    <span
                      className={`dm-svc-card-icon tw:[display:grid] tw:[flex:none] tw:[width:60px] tw:[height:60px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:24px] tw:[&.dm-tone--blue]:[background:var(--blue)] tw:[&.dm-tone--blue]:[color:#fff] tw:[&.dm-tone--red]:[background:var(--red)] tw:[&.dm-tone--red]:[color:#fff] tw:[&.dm-tone--gold]:[background:var(--gold)] tw:[&.dm-tone--gold]:[color:var(--ink)] tw:[&.dm-tone--green]:[background:var(--green)] tw:[&.dm-tone--green]:[color:#fff] tw:[&.dm-tone--ink]:[background:var(--ink)] tw:[&.dm-tone--ink]:[color:#fff] tw:[&.dm-tone--soft]:[background:var(--blue-soft)] tw:[&.dm-tone--soft]:[color:var(--blue)] dm-tone--${service.tone}`}
                      aria-hidden="true"
                    >
                      <service.icon />
                    </span>
                    {service.note ? (
                      <span className="dm-svc-card-note tw:[padding:6px_14px] tw:[border-radius:999px] tw:[background:var(--green-soft)] tw:[color:#1f7a3a] tw:[font-size:13px] tw:[font-weight:500]">{service.note}</span>
                    ) : null}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul className="dm-svc-card-list tw:[display:grid] tw:[gap:10px] tw:[margin:18px_0_22px] tw:[padding-top:18px] tw:[border-top:1px_solid_var(--line)] tw:[min-height:140px] tw:[align-content:start] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:10px] tw:[&_li]:[color:var(--ink-2)] tw:[&_li]:[line-height:1.45] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:18px] tw:[&_svg]:[height:18px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:3px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:var(--green-soft)] tw:[&_svg]:[color:var(--green)] tw:[&_svg]:[stroke-width:3.5] tw:[&_li]:[font-size:16.5px] tw:max-bssm:[min-height:0]">
                    {service.points.map((point) => (
                      <li key={point}>
                        <FiCheck aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="dm-svc-card-more tw:[&.dm-svc-card-more]:[display:inline-flex] tw:[&.dm-svc-card-more]:[align-items:center] tw:[&.dm-svc-card-more]:[gap:8px] tw:[&.dm-svc-card-more]:[color:var(--blue)] tw:[&.dm-svc-card-more]:[font-size:15px] tw:[&.dm-svc-card-more]:[font-weight:500] tw:[&.dm-svc-card-more_svg]:[transition:transform_0.2s_ease] tw:[&.dm-svc-card-more:hover_svg]:[transform:translateX(3px)]">
                    {service.link}
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== FEATURES */}
        <section className="dm-sec dm-features tw:[padding:64px_0] tw:[background:#fff] tw:max-bssm:[padding:44px_0]" aria-labelledby="dfw-feat-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-center-head tw:[max-width:860px] tw:[margin:0_auto_48px] tw:[text-align:center] tw:[&_p]:[margin-top:18px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[margin-bottom:48px]">
              <h2 id="dfw-feat-h" className="dm-h2 tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance]">
                How We Get You Found Across the Metroplex
              </h2>
              <p>
                Three pieces of work that move the phone for most Dallas–Fort
                Worth businesses.
              </p>
            </div>

            {features.map((feature, i) => (
              <div
                key={feature.label}
                className={`dm-feature tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:[gap:64px] tw:[align-items:center] tw:[.dm-feature+&]:[margin-top:64px] tw:max-bs2xl:[gap:64px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:36px] tw:max-bslg:[.dm-feature+&]:[margin-top:72px] ${i % 2 ? " dm-feature--flip" : ""}`}
              >
                {feature.panel}
                <div className="dm-feature-text tw:[&_h3]:[font-size:clamp(30px,_3.4vw,_52px)] tw:[&_h3]:[letter-spacing:-0.03em] tw:[&_h3]:[line-height:1.06] tw:[&_h3]:[text-wrap:balance]">
                  <p className="dm-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">{feature.label}</p>
                  <h3>{feature.title}</h3>
                  <p className="dm-feature-body tw:[max-width:54ch] tw:[margin-top:24px] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">{feature.body}</p>
                  <ul className="dm-feature-points tw:[display:grid] tw:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:[gap:22px_32px] tw:[margin:26px_0_28px] tw:[padding-top:24px] tw:[border-top:1px_solid_var(--line)] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:12px] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:24px] tw:[&_svg]:[height:24px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:5px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:var(--blue-soft)] tw:[&_svg]:[color:var(--blue)] tw:[&_svg]:[stroke-width:3] tw:[&_span]:[color:var(--text)] tw:[&_span]:[line-height:1.55] tw:[&_b]:[display:block] tw:[&_b]:[margin-bottom:2px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-weight:500] tw:[&_span]:[font-size:16.5px] tw:[&_b]:[font-size:18px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:18px]">
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
                  <Link href={feature.href} className="dm-pill dm-pill--arrow tw:[&.dm-pill]:[display:inline-flex] tw:[&.dm-pill]:[align-items:center] tw:[&.dm-pill]:[justify-content:center] tw:[&.dm-pill]:[gap:9px] tw:[&.dm-pill]:[min-height:56px] tw:[&.dm-pill]:[padding:0_34px] tw:[&.dm-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dm-pill]:[border-radius:999px] tw:[&.dm-pill]:[background:var(--ink)] tw:[&.dm-pill]:[color:#fff] tw:[&.dm-pill]:[font-size:16.5px] tw:[&.dm-pill]:[font-weight:500] tw:[&.dm-pill]:[white-space:nowrap] tw:[&.dm-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dm-pill:hover]:[border-color:var(--ink-2)] tw:[&.dm-pill:hover]:[background:var(--ink-2)] tw:[&.dm-pill:hover]:[color:#fff] tw:[&.dm-pill:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&.dm-pill]:[min-height:56px] tw:[.dm-contact-links_&.dm-pill]:[min-height:54px] tw:[.dm-contact-links_&.dm-pill]:[padding:0_28px] tw:[.dm-contact-links_&.dm-pill]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-contact-links_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-band_&.dm-pill]:[width:100%] tw:[&.dm-pill--arrow]:[min-height:54px] tw:[&.dm-pill--arrow]:[padding:0_8px_0_26px] tw:[&.dm-pill--arrow]:[gap:14px] tw:[&.dm-pill--arrow]:[font-size:16px] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[width:100%] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[justify-content:space-between] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[padding:9px_8px_9px_22px] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[text-align:left] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[white-space:normal]">
                    {feature.link}
                    <span className="dm-pill-circ tw:[display:grid] tw:[width:38px] tw:[height:38px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:rgba(255,_255,_255,_0.16)] tw:[font-size:17px] tw:[transition:background_0.2s_ease,_color_0.2s_ease,_transform_0.2s_ease] tw:[.dm-pill--arrow:hover_&]:[background:var(--gold)] tw:[.dm-pill--arrow:hover_&]:[color:var(--ink)] tw:[.dm-pill--arrow:hover_&]:[transform:rotate(45deg)] tw:[.dm-pill--white_&]:[background:var(--blue-soft)] tw:[.dm-pill--white_&]:[color:var(--blue)] tw:max-bssm:[flex:none]" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= JOURNEY */}
        <section className="dm-sec dm-journey tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-journey-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-journey-card tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_minmax(0,_0.92fr)] tw:[overflow:hidden] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)]">
              <div className="dm-journey-text tw:[padding:48px_44px_44px] tw:max-bssm:[padding:30px_22px_26px]">
                <Strip id="dfw-journey-h">
                  From a Google Search{" "}
                  <br />
                  to a Booked Job
                </Strip>
                <p className="dm-journey-lead tw:[max-width:54ch] tw:[margin:22px_0_26px] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
                  Every part of the plan exists to move a customer one step
                  closer to calling you. Here’s the path a DFW customer takes,
                  and what we do at each step.
                </p>
                <ol className="dm-journey-steps tw:[display:grid] tw:[gap:8px] tw:[&_li]:[display:grid] tw:[&_li]:[grid-template-columns:40px_minmax(0,_1fr)] tw:[&_li]:[gap:16px] tw:[&_li]:[padding:14px_16px] tw:[&_li]:[border-radius:18px] tw:[&_li]:[animation:dm-step-on_12s_ease_infinite_both] tw:[&&_li]:[animation-delay:calc(var(--i)_*_3s)] tw:[&_li:first-child]:[background:var(--blue-soft)] tw:[&_h3]:[margin-top:2px] tw:[&_h3]:[font-size:18px] tw:[&_p]:[margin-top:4px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[&_li]:[padding:12px] tw:max-bssm:[&_li]:[gap:12px]">
                  {journey.map((step, i) => (
                    <li
                      key={step.t}
                      style={{ "--i": i } as CSSProperties}
                    >
                      <span className="dm-journey-num tw:[display:grid] tw:[width:40px] tw:[height:40px] tw:[place-items:center] tw:[border:1.5px_solid_var(--line)] tw:[border-radius:50%] tw:[background:#fff] tw:[color:var(--blue-dark)] tw:[font-size:15px] tw:[font-weight:600] tw:[animation:dm-num-on_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)]" aria-hidden="true">
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
              <div className="dm-journey-stage tw:[display:grid] tw:[min-height:560px] tw:[padding:44px_24px] tw:[place-items:center] tw:[background:radial-gradient(60%_50%_at_30%_20%,_rgba(49,_87,_245,_0.16),_transparent_70%),_radial-gradient(60%_50%_at_80%_85%,_rgba(110,_80,_247,_0.14),_transparent_70%),_#f2f5fd] tw:max-bslg:[min-height:0] tw:max-bslg:[padding:36px_20px]">
                <JourneyPhone />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= PROCESS */}
        <section className="dm-sec dm-works tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-steps-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-row-head tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:flex-end] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-steps-h">
                Your First 90 Days
              </Strip>
              <a href="#dfw-contact" className="dm-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]">
                Book Your Free Audit
              </a>
            </div>

            <ol className="dm-steps tw:[display:grid] tw:[gap:20px]">
              {steps.map((step, i) => (
                <li key={step.title} className="dm-step tw:[display:grid] tw:[grid-template-columns:minmax(0,_2fr)_minmax(0,_1fr)] tw:[gap:24px] tw:max-bsxl:[grid-template-columns:minmax(0,_1.6fr)_minmax(0,_1fr)] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:14px]">
                  <div className="dm-step-card tw:[display:grid] tw:[grid-template-columns:130px_minmax(0,_1fr)_auto] tw:[gap:24px] tw:[padding:40px_40px_36px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bs2xl:[grid-template-columns:90px_minmax(0,_1fr)_auto] tw:max-bs2xl:[padding:48px_40px_40px] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:14px] tw:max-bssm:[padding:32px_26px_28px] tw:max-bssm:[position:relative]">
                    <span
                      className={`dm-step-num tw:[display:grid] tw:[width:64px] tw:[height:64px] tw:[place-items:center] tw:[border-radius:50%] tw:[font-size:20px] tw:[font-weight:600] tw:max-bssm:[width:52px] tw:max-bssm:[height:52px] tw:max-bssm:[font-size:17px] tw:[&.dm-step-num--blue]:[background:#e3ecfd] tw:[&.dm-step-num--blue]:[color:var(--blue-dark)] tw:[&.dm-step-num--gold]:[background:#fff3cc] tw:[&.dm-step-num--gold]:[color:#8a6400] tw:[&.dm-step-num--green]:[background:#ddf3e3] tw:[&.dm-step-num--green]:[color:#1f7a3a] tw:[&.dm-step-num--red]:[background:#fde4e1] tw:[&.dm-step-num--red]:[color:#b8352a] dm-step-num--${step.tone}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="dm-step-text tw:[&_h3]:[max-width:14ch] tw:[&_h3]:[font-size:clamp(28px,_3vw,_46px)] tw:[&_h3]:[letter-spacing:-0.03em] tw:[&_h3]:[line-height:1.08] tw:[&>p:last-child]:[max-width:42ch] tw:[&>p:last-child]:[margin-top:22px] tw:[&>p:last-child]:[color:var(--ink-2)] tw:[&>p:last-child]:[font-size:18px] tw:[&>p:last-child]:[line-height:1.65] tw:max-bssm:[&>p:last-child]:[margin-top:18px]">
                      <p className="dm-label tw:[margin-bottom:14px] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[letter-spacing:0.14em] tw:[text-transform:uppercase]">{step.when}</p>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                    <Link
                      href={step.href}
                      className="dm-step-go tw:[&.dm-step-go]:[display:grid] tw:[&.dm-step-go]:[align-self:end] tw:[&.dm-step-go]:[width:84px] tw:[&.dm-step-go]:[height:84px] tw:[&.dm-step-go]:[place-items:center] tw:[&.dm-step-go]:[border:1px_solid_#d3dae6] tw:[&.dm-step-go]:[border-radius:50%] tw:[&.dm-step-go]:[font-size:24px] tw:[&.dm-step-go]:[transition:background_0.2s_ease,_color_0.2s_ease,_border-color_0.2s_ease] tw:[&.dm-step-go:hover]:[border-color:var(--ink)] tw:[&.dm-step-go:hover]:[background:var(--ink)] tw:[&.dm-step-go:hover]:[color:#fff] tw:max-bssm:[&.dm-step-go]:[position:absolute] tw:max-bssm:[&.dm-step-go]:[top:24px] tw:max-bssm:[&.dm-step-go]:[right:22px] tw:max-bssm:[&.dm-step-go]:[width:56px] tw:max-bssm:[&.dm-step-go]:[height:56px] tw:max-bssm:[&.dm-step-go]:[font-size:20px]"
                      aria-label={`More on: ${step.title}`}
                    >
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div className={`dm-step-media tw:[position:relative] tw:[min-height:260px] tw:[border-radius:var(--r-xl)] tw:[overflow:hidden] tw:max-bslg:[min-height:260px] tw:max-bssm:[min-height:220px] tw:[&.dm-tone-bg--blue]:[background:#cddcfb] tw:[&.dm-tone-bg--gold]:[background:#fde08a] tw:[&.dm-tone-bg--green]:[background:#bfe9cc] tw:[&.dm-tone-bg--red]:[background:#f9c7c1] dm-tone-bg--${step.tone}`}>
                    <div className="dm-step-photo tw:[position:absolute] tw:[top:34px] tw:[left:30px] tw:[right:30px] tw:[bottom:-20px] tw:[border-radius:22px] tw:[overflow:hidden] tw:[box-shadow:var(--lift)] tw:[transform:rotate(-3deg)] tw:[.dm-step:nth-child(even)_&]:[transform:rotate(3deg)]">
                      {marketingStepUi[i]}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ======================================================== COVERAGE */}
        <section className="dm-sec dm-coverage tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-cov-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-coverage-card tw:[display:grid] tw:[grid-template-columns:minmax(0,_0.95fr)_minmax(0,_1.05fr)] tw:[gap:56px] tw:[align-items:center] tw:[padding:40px] tw:[border-radius:var(--r-xl)] tw:[background:var(--ink)] tw:[color:#fff] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bslg:[gap:32px] tw:max-bssm:[padding:22px_18px_28px]">
              <div className="dm-coverage-visual tw:max-bslg:[max-width:520px] tw:max-bslg:[width:100%]">
                <CoverageGrid />
              </div>
              <div className="dm-coverage-text">
                <Strip id="dfw-cov-h">
                  Watch Your Map Pack{" "}
                  <br />
                  Coverage Spread
                </Strip>
                <p className="dm-coverage-lead tw:[max-width:56ch] tw:[margin:24px_0_22px] tw:[color:#b7c4dd] tw:[font-size:18px] tw:[line-height:1.65]">
                  Google ranks you differently in every part of the metro. We
                  check where you show up from points across your whole service
                  area, not just your front door. As your profile, pages and
                  reviews improve, the green spreads out from your address
                  into the suburbs you want work from.
                </p>
                <ul className="dm-coverage-points tw:[display:grid] tw:[gap:10px] tw:[margin-bottom:30px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:flex-start] tw:[&_li]:[gap:10px] tw:[&_li]:[color:#fff] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:20px] tw:[&_svg]:[height:20px] tw:[&_svg]:[margin-top:1px] tw:[&_svg]:[padding:4px] tw:[&_svg]:[border-radius:50%] tw:[&_svg]:[background:rgba(253,_193,_21,_0.18)] tw:[&_svg]:[color:var(--gold)] tw:[&_svg]:[stroke-width:3.5] tw:[&_li]:[font-size:16.5px]">
                  <li>
                    <FiCheck aria-hidden="true" />
                    Rankings checked from across DFW every month
                  </li>
                  <li>
                    <FiCheck aria-hidden="true" />
                    Shown city by city in your monthly report
                  </li>
                  <li>
                    <FiCheck aria-hidden="true" />
                    Used to decide where we build pages next
                  </li>
                </ul>
                <Link
                  href="/google-maps-business-ranking-tool-online"
                  className="dm-pill dm-pill--white dm-pill--arrow tw:[&.dm-pill]:[display:inline-flex] tw:[&.dm-pill]:[align-items:center] tw:[&.dm-pill]:[justify-content:center] tw:[&.dm-pill]:[gap:9px] tw:[&.dm-pill]:[min-height:56px] tw:[&.dm-pill]:[padding:0_34px] tw:[&.dm-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dm-pill]:[border-radius:999px] tw:[&.dm-pill]:[background:var(--ink)] tw:[&.dm-pill]:[color:#fff] tw:[&.dm-pill]:[font-size:16.5px] tw:[&.dm-pill]:[font-weight:500] tw:[&.dm-pill]:[white-space:nowrap] tw:[&.dm-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dm-pill:hover]:[border-color:var(--ink-2)] tw:[&.dm-pill:hover]:[background:var(--ink-2)] tw:[&.dm-pill:hover]:[color:#fff] tw:[&.dm-pill:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&.dm-pill]:[min-height:56px] tw:[.dm-contact-links_&.dm-pill]:[min-height:54px] tw:[.dm-contact-links_&.dm-pill]:[padding:0_28px] tw:[.dm-contact-links_&.dm-pill]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-contact-links_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-band_&.dm-pill]:[width:100%] tw:[&.dm-pill--white]:[border-color:#fff] tw:[&.dm-pill--white]:[background:#fff] tw:[&.dm-pill--white]:[color:var(--ink)] tw:[&.dm-pill--white:hover]:[border-color:var(--gold)] tw:[&.dm-pill--white:hover]:[background:var(--gold)] tw:[&.dm-pill--white:hover]:[color:var(--ink)] tw:[&.dm-pill--arrow]:[min-height:54px] tw:[&.dm-pill--arrow]:[padding:0_8px_0_26px] tw:[&.dm-pill--arrow]:[gap:14px] tw:[&.dm-pill--arrow]:[font-size:16px] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[width:100%] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[justify-content:space-between] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[padding:9px_8px_9px_22px] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[text-align:left] tw:max-bssm:[.dm-coverage-card_&.dm-pill--arrow]:[white-space:normal]"
                >
                  Check Your Google Maps Ranking Free
                  <span className="dm-pill-circ tw:[display:grid] tw:[width:38px] tw:[height:38px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:rgba(255,_255,_255,_0.16)] tw:[font-size:17px] tw:[transition:background_0.2s_ease,_color_0.2s_ease,_transform_0.2s_ease] tw:[.dm-pill--arrow:hover_&]:[background:var(--gold)] tw:[.dm-pill--arrow:hover_&]:[color:var(--ink)] tw:[.dm-pill--arrow:hover_&]:[transform:rotate(45deg)] tw:[.dm-pill--white_&]:[background:var(--blue-soft)] tw:[.dm-pill--white_&]:[color:var(--blue)] tw:max-bssm:[flex:none]" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <p className="dm-coverage-note tw:[margin-top:18px] tw:[color:#8592ab] tw:[font-size:13px]">
                  Illustration of how coverage typically spreads. Real results
                  vary by business and market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= HUB */}
        <section className="dm-sec dm-hub tw:[padding:64px_0] tw:[background:#fff] tw:max-bssm:[padding:44px_0]" aria-labelledby="dfw-hub-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-center-head tw:[max-width:860px] tw:[margin:0_auto_48px] tw:[text-align:center] tw:[&_p]:[margin-top:18px] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bssm:[margin-bottom:48px]">
              <h2 id="dfw-hub-h" className="dm-h2 tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance]">
                Found Everywhere DFW Customers Look
              </h2>
              <p>
                We keep your name, address, phone and hours identical on the
                platforms Google cross-checks and the AI tools people now ask.
              </p>
            </div>

            <div className="dm-hub-map tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:minmax(0,_1fr)_auto_minmax(0,_1fr)] tw:[gap:40px] tw:[align-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:50%] tw:[&::before]:[left:4%] tw:[&::before]:[right:4%] tw:[&::before]:[height:0] tw:[&::before]:[border-top:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:max-bsxl:[gap:20px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)_minmax(0,_1fr)] tw:max-bslg:[gap:40px_20px] tw:max-bslg:[&::before]:[display:none] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:16px]">
              <ul className="dm-hub-side tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[grid-template-rows:repeat(3,_auto)] tw:[gap:24px_0] tw:[align-items:center] tw:[justify-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:12%] tw:[&::before]:[bottom:12%] tw:[&::before]:[left:50%] tw:[&::before]:[border-left:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:[&_li:nth-child(1)]:[grid-area:1_/_2] tw:[&_li:nth-child(2)]:[grid-area:2_/_1] tw:[&_li:nth-child(3)]:[grid-area:2_/_3] tw:[&_li:nth-child(4)]:[grid-area:3_/_2] tw:max-bssm:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:max-bssm:[grid-template-rows:auto] tw:max-bssm:[gap:0_12px] tw:max-bssm:[max-width:320px] tw:max-bssm:[margin:0_auto] tw:max-bssm:[width:100%] tw:max-bssm:[&::before]:[display:none] tw:max-bssm:[&_li:nth-child(n)]:[grid-area:auto]" aria-label="Search and map platforms">
                {hubLeft.map((item) => (
                  <li key={item.name} className={`dm-app tw:[position:relative] tw:[z-index:1] tw:[display:grid] tw:[width:100px] tw:[height:100px] tw:[place-items:center] tw:[border-radius:28px] tw:[color:#fff] tw:[font-size:44px] tw:[transition:transform_0.25s_ease] tw:[&:hover]:[transform:translateY(-4px)_rotate(-3deg)] tw:max-bs2xl:[width:86px] tw:max-bs2xl:[height:86px] tw:max-bs2xl:[font-size:38px] tw:max-bs2xl:[border-radius:24px] tw:max-bsxl:[width:74px] tw:max-bsxl:[height:74px] tw:max-bsxl:[font-size:32px] tw:max-bsxl:[border-radius:20px] tw:max-bssm:[width:62px] tw:max-bssm:[height:62px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[font-size:28px] tw:[&.dm-app--google]:[background:#4285f4] tw:[&.dm-app--maps]:[background:#34a853] tw:[&.dm-app--apple]:[background:var(--ink)] tw:[&.dm-app--yelp]:[background:#d32323] tw:[&.dm-app--openai]:[background:#10a37f] tw:[&.dm-app--facebook]:[background:#1877f2] tw:[&.dm-app--waze]:[background:#33ccff] tw:[&.dm-app--waze]:[color:var(--ink)] tw:[&.dm-app--instagram]:[background:linear-gradient(45deg,_#f9ce34,_#ee2a7b_55%,_#6228d7)] dm-app--${item.tone}`}>
                    <item.icon aria-hidden="true" />
                    <span className="dm-sr tw:[position:absolute] tw:[width:1px] tw:[height:1px] tw:[overflow:hidden] tw:[clip:rect(0_0_0_0)] tw:[white-space:nowrap]">{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="dm-hub-core tw:[position:relative] tw:[z-index:1] tw:[display:flex] tw:[flex-direction:column] tw:[align-items:center] tw:[padding:0_12px] tw:[background:#fff] tw:[text-align:center] tw:[&_b]:[margin-top:30px] tw:[&_b]:[font-size:24px] tw:[&_b]:[font-weight:500] tw:[&>span:last-child]:[color:var(--muted)] tw:[&>span:last-child]:[font-size:15px] tw:max-bslg:[grid-column:1_/_-1] tw:max-bslg:[order:-1] tw:max-bssm:[margin-bottom:12px] tw:max-bssm:[&_b]:[margin-top:20px] tw:max-bssm:[&_b]:[font-size:21px]">
                <span className="dm-hub-ring tw:[display:grid] tw:[width:220px] tw:[height:220px] tw:[place-items:center] tw:[border:1.5px_solid_var(--blue)] tw:[border-radius:50%] tw:[color:var(--blue)] tw:[font-size:72px] tw:[box-shadow:0_0_0_14px_#fff,_0_0_0_15.5px_var(--blue-soft)] tw:max-bs2xl:[width:190px] tw:max-bs2xl:[height:190px] tw:max-bs2xl:[font-size:62px] tw:max-bsxl:[width:160px] tw:max-bsxl:[height:160px] tw:max-bsxl:[font-size:52px] tw:max-bssm:[width:132px] tw:max-bssm:[height:132px] tw:max-bssm:[font-size:44px] tw:max-bssm:[box-shadow:0_0_0_10px_#fff,_0_0_0_11.5px_var(--blue-soft)]">
                  <FiMapPin aria-hidden="true" />
                </span>
                <b>Your business</b>
                <span>one set of details, everywhere</span>
              </div>
              <ul className="dm-hub-side tw:[position:relative] tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[grid-template-rows:repeat(3,_auto)] tw:[gap:24px_0] tw:[align-items:center] tw:[justify-items:center] tw:[&::before]:[position:absolute] tw:[&::before]:[top:12%] tw:[&::before]:[bottom:12%] tw:[&::before]:[left:50%] tw:[&::before]:[border-left:1.5px_dashed_#d3dae6] tw:[&::before]:[content:''] tw:[&_li:nth-child(1)]:[grid-area:1_/_2] tw:[&_li:nth-child(2)]:[grid-area:2_/_1] tw:[&_li:nth-child(3)]:[grid-area:2_/_3] tw:[&_li:nth-child(4)]:[grid-area:3_/_2] tw:max-bssm:[grid-template-columns:repeat(4,_minmax(0,_1fr))] tw:max-bssm:[grid-template-rows:auto] tw:max-bssm:[gap:0_12px] tw:max-bssm:[max-width:320px] tw:max-bssm:[margin:0_auto] tw:max-bssm:[width:100%] tw:max-bssm:[&::before]:[display:none] tw:max-bssm:[&_li:nth-child(n)]:[grid-area:auto]" aria-label="Social and AI platforms">
                {hubRight.map((item) => (
                  <li key={item.name} className={`dm-app tw:[position:relative] tw:[z-index:1] tw:[display:grid] tw:[width:100px] tw:[height:100px] tw:[place-items:center] tw:[border-radius:28px] tw:[color:#fff] tw:[font-size:44px] tw:[transition:transform_0.25s_ease] tw:[&:hover]:[transform:translateY(-4px)_rotate(-3deg)] tw:max-bs2xl:[width:86px] tw:max-bs2xl:[height:86px] tw:max-bs2xl:[font-size:38px] tw:max-bs2xl:[border-radius:24px] tw:max-bsxl:[width:74px] tw:max-bsxl:[height:74px] tw:max-bsxl:[font-size:32px] tw:max-bsxl:[border-radius:20px] tw:max-bssm:[width:62px] tw:max-bssm:[height:62px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[font-size:28px] tw:[&.dm-app--google]:[background:#4285f4] tw:[&.dm-app--maps]:[background:#34a853] tw:[&.dm-app--apple]:[background:var(--ink)] tw:[&.dm-app--yelp]:[background:#d32323] tw:[&.dm-app--openai]:[background:#10a37f] tw:[&.dm-app--facebook]:[background:#1877f2] tw:[&.dm-app--waze]:[background:#33ccff] tw:[&.dm-app--waze]:[color:var(--ink)] tw:[&.dm-app--instagram]:[background:linear-gradient(45deg,_#f9ce34,_#ee2a7b_55%,_#6228d7)] dm-app--${item.tone}`}>
                    <item.icon aria-hidden="true" />
                    <span className="dm-sr tw:[position:absolute] tw:[width:1px] tw:[height:1px] tw:[overflow:hidden] tw:[clip:rect(0_0_0_0)] tw:[white-space:nowrap]">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= REVIEWS */}
        <section className="dm-sec dm-love tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-love-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-row-head dm-row-head--top tw:[display:flex] tw:[flex-wrap:wrap] tw:[justify-content:space-between] tw:[gap:24px] tw:[margin-bottom:36px] tw:[align-items:flex-start] tw:max-bssm:[margin-bottom:36px]">
              <Strip id="dfw-love-h">Rated 5.0 on Google</Strip>
              <div className="dm-love-aside tw:[position:relative] tw:[max-width:470px] tw:[padding-top:8px] tw:[&_p]:[margin-top:22px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bsmd:[max-width:none]">
                <span className="dm-avas dm-avas--lg tw:[display:flex] tw:[align-items:center] tw:[&>:first-child]:[margin-left:0]">
                  <AvatarPh tone="a" />
                  <AvatarPh tone="b" />
                  <AvatarPh tone="c" />
                  <AvatarPh tone="d" />
                </span>
                <Sparks className="dm-love-sparks" />
              </div>
            </div>

            <div className="dm-love-card tw:[min-height:360px] tw:[display:flex] tw:[flex-direction:column] tw:[justify-content:center] tw:[padding:28px_24px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:max-bssm:[padding:14px]">
              {/* Google reviews (owner, 22 Oct 2026): same Trustindex widget as /home2;
                  the guard strips the review schema it injects. */}
              <LenisIframeGuard widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c" />
            </div>

            <div className="dm-logos tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:center] tw:[gap:24px_52px] tw:[margin-top:32px] tw:[&_img]:[display:block] tw:[&_img]:[width:auto] tw:[&_img]:[height:66px] tw:[&_img]:[object-fit:contain] tw:[&_p]:[color:var(--text)] tw:[&_p]:[font-size:15.5px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-size:22px] tw:[&&_b]:[font-weight:500] tw:max-bssm:[gap:20px_28px] tw:max-bssm:[&_img]:[height:54px]">
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
                src="/images/Partner.webp"
                alt="Yelp Advertising Partner"
              />
              <a
                href="https://www.trustpilot.com/review/zonicllc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dm-logos-wide tw:[.dm-logos_&.dm-logos-wide]:[height:50px] tw:max-bssm:[.dm-logos_&.dm-logos-wide]:[height:40px]"
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

        {/* ============================================================ AREA */}
        <section className="dm-sec dm-area-sec tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-area-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-area dm-area--split tw:[display:grid] tw:[grid-template-columns:minmax(0,_1.1fr)_minmax(0,_0.9fr)] tw:[padding:40px] tw:[border-radius:var(--r-xl)] tw:[background:#fff] tw:[align-items:stretch] tw:[gap:32px_56px] tw:max-bsxl:[padding:44px] tw:max-bsxl:[gap:40px] tw:max-bslg:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[padding:28px_20px]">
              <div className="dm-area-head tw:[.dm-area--split_&]:[display:grid] tw:[.dm-area--split_&]:[grid-column:1_/_-1] tw:[.dm-area--split_&]:[grid-template-columns:minmax(0,_1.1fr)_minmax(0,_0.9fr)] tw:[.dm-area--split_&]:[gap:20px_56px] tw:[.dm-area--split_&]:[align-items:end] tw:[.dm-area--split_&]:[padding-bottom:32px] tw:[.dm-area--split_&]:[border-bottom:1px_solid_var(--line)] tw:max-bslg:[.dm-area--split_&]:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[.dm-area--split_&]:[padding-bottom:24px]">
                <Strip id="dfw-area-h">
                  Where We Work in{" "}
                  <br />
                  Dallas–Fort Worth
                </Strip>
                <p className="dm-area-lead tw:[max-width:54ch] tw:[margin-top:26px] tw:[color:var(--ink-2)] tw:[.dm-area--split_&]:[margin-top:0] tw:[font-size:18px] tw:[line-height:1.65]">
                  Grow your business anywhere in the Dallas–Fort Worth metro.
                  We bring in calls, booked jobs and steady leads across all
                  eleven counties, from Denton to Waxahachie, including
                  fast-growing towns like Celina and Princeton.
                </p>
              </div>
              <div className="dm-area-text">
                <div className="dm-area-counties tw:[display:grid] tw:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:[gap:24px_36px] tw:[margin-top:32px] tw:[padding-top:28px] tw:[border-top:1px_solid_var(--line)] tw:[&_h3]:[display:flex] tw:[&_h3]:[align-items:center] tw:[&_h3]:[gap:10px] tw:[&_h3]:[margin-bottom:12px] tw:[&_h3]:[font-size:18px] tw:[.dm-area--split_&]:[margin-top:0] tw:[.dm-area--split_&]:[padding-top:0] tw:[.dm-area--split_&]:[border-top:0] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)] tw:max-bssm:[gap:18px]">
                  {counties.map((county, i) => (
                    <div key={county.name}>
                      <h3>
                        <span className="dm-area-num tw:[display:grid] tw:[flex:none] tw:[width:28px] tw:[height:28px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--blue-soft)] tw:[color:var(--blue-dark)] tw:[font-size:13.5px] tw:[font-weight:600]" aria-hidden="true">
                          {i + 1}
                        </span>
                        {county.name}
                      </h3>
                      <ul className="dm-area-cities tw:[display:grid] tw:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:[gap:6px_14px] tw:[padding-left:38px] tw:[&_li]:[color:var(--text)] tw:[&_li]:[line-height:1.5] tw:[&_li]:[font-size:16.5px]">
                        {county.cities.split(", ").map((city) => (
                          <li key={city}>{city}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="dm-area-more tw:[margin-top:26px] tw:[color:var(--text)] tw:[&_a]:[color:var(--blue)] tw:[&_a]:[font-weight:500] tw:[&_a]:[text-decoration:underline] tw:[&&_a]:[text-decoration-color:rgba(37,_103,_232,_0.35)] tw:[&_a]:[text-underline-offset:3px] tw:[font-size:18px] tw:[line-height:1.65]">
                  Also Rockwall, Ellis, Johnson, Kaufman, Parker, Hunt and Wise
                  counties. Texas pages for{" "}
                  <Link href="/services/hvac-marketing-agency/texas">HVAC</Link>,{" "}
                  <Link href="/services/plumbing-marketing-agency/texas">
                    plumbing
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/home-inspector-marketing/texas">
                    home inspectors
                  </Link>
                  .
                </p>
              </div>
              <div className="dm-area-map tw:[position:relative] tw:[aspect-ratio:1] tw:[border-radius:32px] tw:[overflow:hidden] tw:[.dm-area--split_&]:[aspect-ratio:auto] tw:[.dm-area--split_&]:[min-height:420px] tw:max-bslg:[.dm-area--split_&]:[aspect-ratio:1] tw:max-bslg:[.dm-area--split_&]:[min-height:0] tw:max-bslg:[max-width:560px] tw:max-bslg:[width:100%]">
                <AreaMapPack pins={mapPins} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= FAQ */}
        <section className="dm-sec dm-faq-sec tw:[padding:var(--sec-y)_0]" aria-labelledby="dfw-faq-h">
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <h2 id="dfw-faq-h" className="dm-h2 dm-faq-title tw:[font-size:clamp(32px,_4vw,_58px)] tw:[letter-spacing:-0.03em] tw:[line-height:1.08] tw:[text-wrap:balance] tw:[margin-bottom:36px] tw:[text-align:center]">
              Dallas–Fort Worth Marketing Questions
            </h2>
            <div className="dm-faq tw:[max-width:1080px] tw:[margin:0_auto] tw:[padding:8px_44px] tw:[border-radius:32px] tw:[background:#fff] tw:max-bsmd:[padding:4px_24px] tw:max-bssm:[padding:4px_20px] tw:max-bssm:[border-radius:24px]">
              {faqs.map((item) => (
                <details key={item.q} className="dm-faq-item tw:[.dm-faq-item+&]:[border-top:1px_solid_var(--line)] tw:[&_summary]:[display:flex] tw:[&_summary]:[align-items:center] tw:[&_summary]:[justify-content:space-between] tw:[&_summary]:[gap:20px] tw:[&_summary]:[padding:22px_0] tw:[&_summary]:[color:var(--ink)] tw:[&_summary]:[font-size:20px] tw:[&_summary]:[font-weight:500] tw:[&_summary]:[letter-spacing:-0.01em] tw:[&_summary]:[list-style:none] tw:[&_summary]:[cursor:pointer] tw:[&_summary::-webkit-details-marker]:[display:none] tw:[&_summary_svg]:[flex:none] tw:[&_summary_svg]:[width:22px] tw:[&_summary_svg]:[height:22px] tw:[&_summary_svg]:[transition:transform_0.25s_ease] tw:[&[open]_summary_svg]:[transform:rotate(45deg)] tw:[&_p]:[max-width:76ch] tw:[&_p]:[padding-bottom:22px] tw:[&_p]:[color:var(--text)] tw:[&_p_a]:[color:var(--blue)] tw:[&_p_a]:[font-weight:500] tw:[&_p_a]:[text-decoration:underline] tw:[&_p_a]:[text-underline-offset:3px] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65] tw:max-bsmd:[&_summary]:[font-size:17.5px] tw:max-bsmd:[&_summary]:[padding:22px_0]">
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
          className="dm-sec dm-contact tw:[padding:var(--sec-y)_0]"
          id="dfw-contact"
          aria-labelledby="dfw-contact-h"
        >
          <div className="dm-wrap tw:[width:100%] tw:[padding:0_var(--inset)] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <div className="dm-contact-card tw:[position:relative] tw:[padding:60px_48px_44px] tw:[border-radius:48px] tw:[overflow:hidden] tw:[background:#fff] tw:[text-align:center] tw:max-bslg:[padding:64px_40px_40px] tw:max-bssm:[padding:48px_16px_16px] tw:max-bssm:[border-radius:28px]">
              <svg viewBox="0 0 120 90" className="dm-envelope tw:[position:absolute] tw:[top:38%] tw:[left:5%] tw:[width:132px] tw:[transform:rotate(-14deg)] tw:[filter:drop-shadow(0_18px_18px_rgba(28,_79,_196,_0.25))] tw:[&_rect]:[fill:#5d8ff2] tw:[&_path]:[fill:none] tw:[&_path]:[stroke:#fff] tw:[&&_path]:[stroke-width:6] tw:[&&_path]:[stroke-linejoin:round] tw:max-bsxl:[width:100px] tw:max-bsxl:[left:3%] tw:max-bslg:[display:none]" aria-hidden="true">
                <rect x="6" y="14" width="108" height="70" rx="10" />
                <path d="M10 22 L60 56 L110 22" />
              </svg>
              <span className="dm-contact-pin tw:[position:absolute] tw:[top:34%] tw:[right:6%] tw:[font-size:150px] tw:[line-height:1] tw:max-bsxl:[font-size:110px] tw:max-bsxl:[right:4%] tw:max-bslg:[display:none]" aria-hidden="true">
                <InlinePin id="dfw-pin-contact" />
              </span>

              <h2 id="dfw-contact-h" className="dm-contact-title tw:[font-size:clamp(34px,_4.8vw,_74px)] tw:[letter-spacing:-0.035em] tw:[line-height:1.08]">
                Want to Talk <InlineChat /> About{" "}
                <br />
                Your DFW Marketing?
              </h2>
              <p className="dm-contact-sub tw:[max-width:640px] tw:[margin:26px_auto_0] tw:[color:var(--ink-2)] tw:[font-size:18px] tw:[line-height:1.65]">
                Tell us where in the metro you want more work. We’ll check
                your Google profile, website and rankings and send back a plan
                with a flat quote.
              </p>
              <div className="dm-contact-links tw:[display:flex] tw:[flex-wrap:wrap] tw:[justify-content:center] tw:[gap:12px] tw:[margin-top:28px] tw:[&_svg]:[width:17px] tw:[&_svg]:[height:17px]">
                <a href={SITE_CONTACT.phoneHref} className="dm-pill tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[min-height:56px] tw:[padding:0_34px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:16.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[background:var(--ink-2)] tw:[&:hover]:[color:#fff] tw:[&:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
                <a
                  href={SITE_CONTACT.emailHref}
                  className="dm-pill dm-pill--outline tw:[display:inline-flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:9px] tw:[border:1.5px_solid_var(--ink)] tw:[border-radius:999px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&:hover]:[border-color:var(--ink-2)] tw:[&:hover]:[transform:translateY(-2px)] tw:[min-height:50px] tw:[padding:0_28px] tw:[background:transparent] tw:[color:var(--ink)] tw:[font-size:15.5px] tw:[&:hover]:[background:var(--ink)] tw:[&:hover]:[color:#fff] tw:[.dm-hero-ctas_&]:[min-height:56px] tw:[.dm-hero-ctas_&]:[padding:0_28px] tw:[.dm-hero-ctas_&]:[font-size:16px] tw:[.dm-contact-links_&]:[min-height:54px] tw:[.dm-contact-links_&]:[padding:0_28px] tw:[.dm-contact-links_&]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&]:[width:100%] tw:max-bssm:[.dm-contact-links_&]:[width:100%] tw:max-bssm:[.dm-band_&]:[width:100%]"
                >
                  <FiMail aria-hidden="true" />
                  {SITE_CONTACT.email}
                </a>
              </div>
              <div className="dm-contact-form tw:[max-width:760px] tw:[margin:34px_auto_0] tw:[text-align:left]">
                <ServiceLeadForm
                  formType="dfw-marketing"
                  title="Request Your Free DFW Audit"
                  subtitle="Takes about a minute. No commitment required."
                  submitText="Request My Free Audit"
                  messageLabel="Which cities do you want work from?"
                  messagePlaceholder="For example: Plano, Frisco and McKinney"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ BAND */}
        <section className="dm-band tw:[padding:64px_0] tw:[background:radial-gradient(45%_120%_at_22%_110%,_rgba(234,_67,_52,_0.18)_0%,_transparent_60%),_radial-gradient(40%_120%_at_78%_100%,_rgba(253,_193,_21,_0.32)_0%,_transparent_60%),_linear-gradient(100deg,_#e4ecfb_0%,_#f3eef6_55%,_#fde9df_100%)] tw:[&_h2]:[max-width:16ch] tw:[&_h2]:[font-size:clamp(38px,_5.4vw,_82px)] tw:[&_h2]:[letter-spacing:-0.04em] tw:[&_h2]:[line-height:1] tw:[&_h2_span]:[color:var(--blue)] tw:max-bssm:[padding:60px_0]" aria-labelledby="dfw-band-h">
          <div className="dm-wrap dm-band-inner tw:[width:100%] tw:[padding:0_var(--inset)] tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[justify-content:space-between] tw:[gap:32px_56px] tw:max-bslg:[flex-direction:column] tw:max-bslg:[align-items:flex-start] tw:max-bssm:[.dm-journey_&]:[padding:0] tw:max-bssm:[.dm-coverage_&]:[padding:0] tw:max-bssm:[.dm-contact_&]:[padding:0]">
            <h2 id="dfw-band-h">
              Get Found Across the <span>Whole Metroplex.</span>
            </h2>
            <div className="dm-band-side tw:[max-width:380px] tw:[&_p]:[margin-bottom:22px] tw:[&_p]:[color:var(--ink-2)] tw:[&_p]:[font-size:18px] tw:[&_p]:[line-height:1.65]">
              <p>
                Start with a free audit and a flat quote, with no contract to
                lock you in.
              </p>
              <Link href={SITE_CONTACT.bookCallHref} className="dm-pill dm-pill--blue tw:[&.dm-pill]:[display:inline-flex] tw:[&.dm-pill]:[align-items:center] tw:[&.dm-pill]:[justify-content:center] tw:[&.dm-pill]:[gap:9px] tw:[&.dm-pill]:[min-height:56px] tw:[&.dm-pill]:[padding:0_34px] tw:[&.dm-pill]:[border:1.5px_solid_var(--ink)] tw:[&.dm-pill]:[border-radius:999px] tw:[&.dm-pill]:[background:var(--ink)] tw:[&.dm-pill]:[color:#fff] tw:[&.dm-pill]:[font-size:16.5px] tw:[&.dm-pill]:[font-weight:500] tw:[&.dm-pill]:[white-space:nowrap] tw:[&.dm-pill]:[transition:transform_0.2s_ease,_background_0.2s_ease,_border-color_0.2s_ease,_color_0.2s_ease] tw:[&.dm-pill:hover]:[border-color:var(--ink-2)] tw:[&.dm-pill:hover]:[background:var(--ink-2)] tw:[&.dm-pill:hover]:[color:#fff] tw:[&.dm-pill:hover]:[transform:translateY(-2px)] tw:[.dm-hero-ctas_&.dm-pill]:[min-height:56px] tw:[.dm-contact-links_&.dm-pill]:[min-height:54px] tw:[.dm-contact-links_&.dm-pill]:[padding:0_28px] tw:[.dm-contact-links_&.dm-pill]:[font-size:16px] tw:max-bssm:[.dm-hero-ctas_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-contact-links_&.dm-pill]:[width:100%] tw:max-bssm:[.dm-band_&.dm-pill]:[width:100%] tw:[&.dm-pill--blue]:[border-color:var(--blue)] tw:[&.dm-pill--blue]:[background:var(--blue)] tw:[&.dm-pill--blue:hover]:[border-color:var(--blue-dark)] tw:[&.dm-pill--blue:hover]:[background:var(--blue-dark)]">
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
