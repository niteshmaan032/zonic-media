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

import "@/app/style/dfwMarketing.css";
import "@/app/style/dfwWebDesign.css";

import Footer from "@/app/components/Footer";
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
} from "@/app/components/DfwMarketingVisuals";
import {
  CityPagesMap,
  LeadPanel,
  SiteBuild,
  SpeedPanel,
  WebJourneyPhone,
} from "@/app/components/DfwWebVisuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const ClutchWidget = dynamic(() => import("@/app/components/ClutchWidget"));
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

   PHOTOS: section photography lives under /public/images/dfw/web/ and is
   passed to the shared <Ph> component so the existing crop treatment stays
   consistent across the page.

   FACTS come from the existing /services/web-design page and the home
   page: 120+ websites shipped, 2–6 week builds, WordPress / Shopify /
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
    note: "SEO from $197/mo",
    body: "Launch your new site with local SEO so it ranks across Dallas, Fort Worth, Plano and Frisco, not just looks good.",
    points: [
      "Linked to your Google Business Profile",
      "City pages built to rank",
      "Rankings tracked by city every month",
    ],
    href: "/services/local-seo-packages",
    link: "Local SEO packages",
  },
];

const features = [
  {
    label: "Conversion",
    title: "Websites Built to Turn Visitors Into Calls",
    body: "A beautiful website that doesn’t make the phone ring is just a brochure. Every page we design gives a Dallas–Fort Worth customer one clear next step, with your reviews, services and service area right where they decide.",
    points: [
      { t: "Click-to-call everywhere", d: "A tap-to-call button on every page, especially on phones." },
      { t: "Short quote forms", d: "Three or four fields, not twelve, so more people finish them." },
      { t: "Trust up front", d: "Reviews, badges and real photos where customers look first." },
      { t: "Every lead counted", d: "Call and form tracking connected at launch." },
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
      { t: "Mobile-first layouts", d: "Designed for the phone first, then scaled up to desktop." },
      { t: "Core Web Vitals passed", d: "Checked before launch on every build." },
      { t: "Optimized images", d: "Compressed and sized for each screen." },
      { t: "Lean, clean code", d: "No bloated themes slowing your pages down." },
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
      { t: "City and service pages", d: "A dedicated page for each suburb you serve." },
      { t: "On-page SEO included", d: "Titles, headings and copy matched to real searches." },
      { t: "Structured data", d: "Schema on every page so Google understands your business." },
      { t: "Ready for local SEO", d: "Connected to your Google Business Profile at launch." },
    ],
    href: "/services/local-seo-packages",
    link: "Pair your site with local SEO",
    panel: <CityPagesPanel />,
  },
];

/* Hand-placed "+" marks for the hero background (% of the hero box). */
const heroMarks: [number, number][] = [
  [5, 15], [12, 31], [4, 47], [15, 57], [8, 70],
  [95, 13], [88, 27], [96, 42], [85, 55], [92, 68],
  [33, 7], [67, 8],
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
    photo: "Web designer and Dallas–Fort Worth business owner reviewing a website strategy together",
    src: "/images/dfw/web/dfw-strategy-call.png",
  },
  {
    when: "Weeks 1–2",
    title: "Sitemap, Wireframes and Copy",
    body: "We plan every page, sketch the layout and write copy around what your customers search for, and you approve it all before design starts.",
    href: "/services/web-design",
    tone: "gold",
    photo: "Website wireframes and sitemap sketches beside a laptop",
    src: "/images/dfw/web/dfw-wireframes.png",
  },
  {
    when: "Weeks 2–4",
    title: "Design and Build",
    body: "Your site is designed for your brand, built mobile-first and tuned for speed, with click-to-call, quote forms and on-page SEO on every page.",
    href: "/services/launchpad",
    tone: "green",
    photo: "Designer building a responsive website across a laptop and phone",
    src: "/images/dfw/web/dfw-responsive-build.png",
  },
  {
    when: "Launch",
    title: "Test, Launch and Track",
    body: "We test on phones, tablets and desktops, launch, then connect analytics and call tracking so you can see the leads your new site brings in.",
    href: "/services/local-seo-packages",
    tone: "red",
    photo: "New business website checked across desktop, tablet and phone before launch",
    src: "/images/dfw/web/dfw-launch-qa.png",
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
  { icon: SiGooglesearchconsole, name: "Google Search Console", tone: "searchconsole" },
  { icon: SiGoogleads, name: "Google Ads", tone: "googleads" },
  { icon: SiGoogletagmanager, name: "Google Tag Manager", tone: "tagmanager" },
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
      a: "Most websites take 2 to 6 weeks from kickoff to launch, depending on the number of pages, any custom features and how quickly content is approved.",
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
      a: "On-page SEO is included in every build: page titles, headings, structured data and a page for each city and service you serve. To keep climbing in Google after launch, pair your site with a local SEO plan, from $197 a month.",
      link: { href: "/services/local-seo-packages", label: "Local SEO packages" },
    },
    {
      q: "Will my new website show up in Google’s AI answers?",
      a: "No one can guarantee it, but we build for it: clear service pages that answer real questions, structured data on every page, FAQ sections and the same business details everywhere. That is the structure AI Overviews and assistants like ChatGPT draw on when they recommend a local business.",
      link: { href: "/services/ai-seo-services", label: "AI search optimization" },
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
                price: 197,
                priceCurrency: "USD",
                unitText: "MONTH",
                description: "Local SEO plans from $197 a month",
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
    <Tag id={id} className={`dfw-strip ${className}`}>
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

      <main className="dfw">
        {/* ============================================================ HERO */}
        <section className="dfw-hero" aria-labelledby="dfw-h1">
          <span className="dfw-hero__marks" aria-hidden="true">
            {heroMarks.map(([x, y]) => (
              <i key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }} />
            ))}
          </span>
          <div className="dfw-wrap">
            <Strip as="h1" id="dfw-h1" className="dfw-hero__title">
              Dallas–Fort Worth <InlinePin /> Web Design{" "}
              <br className="dfw-hero__br" />
              Agency for Local Businesses
            </Strip>
            <p className="dfw-hero__sub">
              Zonic Media is the Dallas web design agency that builds fast,
              great-looking websites for Dallas–Fort Worth businesses. Every
              site is designed to turn visitors into calls and quote requests,
              built mobile-first, and ready to rank on Google from Frisco to
              Mansfield.
            </p>
            <div className="dfw-hero__logos">
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
                  className="dfw-hero__logo-wide"
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
            <div className="dfw-hero__ctas">
              <a href="#dfw-contact" className="dfw-pill">
                Book a Free Strategy Call
              </a>
              <a
                href={SITE_CONTACT.phoneHref}
                className="dfw-pill dfw-pill--outline"
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="dfw-bento">
            <div className="dfw-bento__card dfw-bento__card--blue">
              <span className="dfw-avas">
                <AvatarPh tone="a" />
                <AvatarPh tone="b" />
                <AvatarPh tone="c" />
                <span className="dfw-avas__plus" aria-hidden="true">
                  <FiPlus />
                </span>
              </span>
              <div>
                <p>Websites shipped for local businesses</p>
                <b>120+</b>
              </div>
            </div>

            <div className="dfw-bento__card dfw-bento__card--lime">
              <span className="dfw-bento__icon" aria-hidden="true">
                <FiZap />
              </span>
              <b>2–6</b>
              <p>Weeks from kickoff to launch for most sites</p>
            </div>

            <div className="dfw-bento__card dfw-bento__card--gold">
              <span className="dfw-bento__quote" aria-hidden="true">
                <FiStar />
              </span>
              <div>
                <b>5.0</b>
                <span className="dfw-bento__stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} />
                  ))}
                </span>
                <p>Rated on Clutch from 21 verified client reviews</p>
              </div>
            </div>

            <div className="dfw-bento__card dfw-bento__card--ink">
              <b>20+</b>
              <p>Industries we design websites for</p>
              <ul className="dfw-tags" aria-label="Industries we design for">
                <li className="dfw-tag dfw-tag--gold">Roofing</li>
                <li className="dfw-tag dfw-tag--white">HVAC</li>
                <li className="dfw-tag dfw-tag--green">Plumbing</li>
                <li className="dfw-tag dfw-tag--white">Real estate</li>
                <li className="dfw-tag dfw-tag--blue">Home inspectors</li>
                <li className="dfw-tag dfw-tag--white">Pest control</li>
                <li className="dfw-tag dfw-tag--gold">Landscaping</li>
                <li className="dfw-tag dfw-tag--green">Dental</li>
                <li className="dfw-tag dfw-tag--white">Law firms</li>
                <li className="dfw-tag dfw-tag--more">+ more</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        <section className="dfw-sec dfw-about" aria-labelledby="dfw-about-h">
          <div className="dfw-wrap">
            <div className="dfw-about__top">
              <div className="dfw-about__head">
                <Strip id="dfw-about-h">
                  Websites That Win{" "}
                  <br />
                  DFW Customers.
                </Strip>
                <HandArrow className="dfw-about__arrow" />
              </div>
              <div className="dfw-about__copy">
                <p className="dfw-label">Web design in Dallas–Fort Worth</p>
                <p>
                  We design websites that work as hard as you do. Fast,
                  great-looking and easy to use on a phone, every site we
                  build gives Dallas–Fort Worth customers one clear reason to
                  call you, with your services, reviews and service area right
                  where they decide.
                </p>
                <p>
                  With 120+ websites shipped for local businesses, we know
                  what turns a visitor into a lead. You get one dedicated web
                  design and development team from strategy call to launch, a
                  flat project quote, and a website you’ll be proud to send
                  customers to.
                </p>
                <Link href="/about" className="dfw-pill dfw-pill--outline">
                  More About Us
                </Link>
              </div>
            </div>

            <div className="dfw-about__photos">
              <RatingBadge />
              <div className="dfw-about__photo dfw-about__photo--narrow">
                <Ph
                  label="Designer reviewing a website layout on a large monitor"
                  ratio="3:4"
                  src="/images/dfw/web/dfw-designer-review.png"
                />
              </div>
              <div className="dfw-about__photo dfw-about__photo--wide">
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
        <section className="dfw-sec dfw-services" aria-labelledby="dfw-svc-h">
          <div className="dfw-wrap">
            <div className="dfw-row-head">
              <Strip id="dfw-svc-h">
                Dallas Web Design Services{" "}
                <br />
                for DFW Businesses
              </Strip>
              <div className="dfw-svc-head">
                <p>
                  Six ways we help Dallas–Fort Worth businesses look great
                  online and win more work. Every build includes on-page SEO,
                  Core Web Vitals optimization and lead forms.
                </p>
                <a href="#dfw-contact" className="dfw-pill">
                  Book a Free Strategy Call
                </a>
              </div>
            </div>

            <div className="dfw-svc-grid">
              {services.map((service) => (
                <article key={service.title} className="dfw-svc-card">
                  <div className="dfw-svc-card__top">
                    <span
                      className={`dfw-svc-card__icon dfw-tone--${service.tone}`}
                      aria-hidden="true"
                    >
                      <service.icon />
                    </span>
                    {service.note ? (
                      <span className="dfw-svc-card__note">{service.note}</span>
                    ) : null}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul className="dfw-svc-card__list">
                    {service.points.map((point) => (
                      <li key={point}>
                        <FiCheck aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="dfw-svc-card__more">
                    {service.link}
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== FEATURES */}
        <section className="dfw-sec dfw-features" aria-labelledby="dfw-feat-h">
          <div className="dfw-wrap">
            <div className="dfw-center-head">
              <h2 id="dfw-feat-h" className="dfw-h2">
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
                className={`dfw-feature${i % 2 ? " dfw-feature--flip" : ""}`}
              >
                {feature.panel}
                <div className="dfw-feature__text">
                  <p className="dfw-label">{feature.label}</p>
                  <h3>{feature.title}</h3>
                  <p className="dfw-feature__body">{feature.body}</p>
                  <ul className="dfw-feature__points">
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
                  <Link href={feature.href} className="dfw-pill dfw-pill--arrow">
                    {feature.link}
                    <span className="dfw-pill__circ" aria-hidden="true">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= JOURNEY */}
        <section className="dfw-sec dfw-journey" aria-labelledby="dfw-journey-h">
          <div className="dfw-wrap">
            <div className="dfw-journey__card">
              <div className="dfw-journey__text">
                <Strip id="dfw-journey-h">
                  From First Click{" "}
                  <br />
                  to a New Lead
                </Strip>
                <p className="dfw-journey__lead">
                  A great website removes every reason not to contact you.
                  Here’s the path a DFW customer takes on a site we build, and
                  what we design for at each step.
                </p>
                <ol className="dfw-journey__steps">
                  {journey.map((step, i) => (
                    <li
                      key={step.t}
                      style={{ "--i": i } as CSSProperties}
                    >
                      <span className="dfw-journey__num" aria-hidden="true">
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
              <div className="dfw-journey__stage">
                <WebJourneyPhone />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= PROCESS */}
        <section className="dfw-sec dfw-works" aria-labelledby="dfw-steps-h">
          <div className="dfw-wrap">
            <div className="dfw-row-head">
              <Strip id="dfw-steps-h">Our Web Design Process in 4 Steps</Strip>
              <a href="#dfw-contact" className="dfw-pill">
                Book a Free Strategy Call
              </a>
            </div>

            <ol className="dfw-steps">
              {steps.map((step, i) => (
                <li key={step.title} className="dfw-step">
                  <div className="dfw-step__card">
                    <span
                      className={`dfw-step__num dfw-step__num--${step.tone}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="dfw-step__text">
                      <p className="dfw-label">{step.when}</p>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                    <Link
                      href={step.href}
                      className="dfw-step__go"
                      aria-label={`More on: ${step.title}`}
                    >
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                  <div className={`dfw-step__media dfw-tone-bg--${step.tone}`}>
                    <div className="dfw-step__photo">
                      <Ph label={step.photo} ratio="4:3" src={step.src} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================== BUILD */}
        <section className="dfw-sec dfw-coverage" aria-labelledby="dfw-cov-h">
          <div className="dfw-wrap">
            <div className="dfw-coverage__card">
              <div className="dfw-coverage__visual">
                <SiteBuild />
              </div>
              <div className="dfw-coverage__text">
                <Strip id="dfw-cov-h">
                  Watch Your New Website{" "}
                  <br />
                  Come Together
                </Strip>
                <p className="dfw-coverage__lead">
                  Every build moves through the same stages: a wireframe you
                  approve, a design made for your brand, then a fast, tested
                  website that goes live with tracking connected. You see each
                  stage and sign off before we move on, so there are no
                  surprises at launch.
                </p>
                <ul className="dfw-coverage__points">
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
                  className="dfw-pill dfw-pill--white dfw-pill--arrow"
                >
                  See Our Free Website Offer
                  <span className="dfw-pill__circ" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <p className="dfw-coverage__note">
                  Illustration of our build process. Timelines vary by project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= HUB */}
        <section className="dfw-sec dfw-hub" aria-labelledby="dfw-hub-h">
          <div className="dfw-wrap">
            <div className="dfw-center-head">
              <h2 id="dfw-hub-h" className="dfw-h2">
                Built to Work With the Tools That Matter
              </h2>
              <p>
                We build on WordPress or Shopify and connect your website to
                Google Analytics, Search Console, your Google Business Profile
                and ad tracking, so every visit, call and form is counted.
              </p>
            </div>

            <div className="dfw-hub__map">
              <ul className="dfw-hub__side" aria-label="Platforms we build on">
                {hubLeft.map((item) => (
                  <li key={item.name} className={`dfw-app dfw-app--${item.tone}`}>
                    <item.icon aria-hidden="true" />
                    <span className="dfw-sr">{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="dfw-hub__core">
                <span className="dfw-hub__ring">
                  <FiMonitor aria-hidden="true" />
                </span>
                <b>Your website</b>
                <span>connected from day one</span>
              </div>
              <ul className="dfw-hub__side" aria-label="Tracking and analytics tools">
                {hubRight.map((item) => (
                  <li key={item.name} className={`dfw-app dfw-app--${item.tone}`}>
                    <item.icon aria-hidden="true" />
                    <span className="dfw-sr">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================= REVIEWS */}
        <section className="dfw-sec dfw-love" aria-labelledby="dfw-love-h">
          <div className="dfw-wrap">
            <div className="dfw-row-head dfw-row-head--top">
              <Strip id="dfw-love-h">
                120+ Websites{" "}
                <br />
                Shipped and Counting
              </Strip>
              <div className="dfw-love__aside">
                <span className="dfw-avas dfw-avas--lg">
                  <AvatarPh tone="a" />
                  <AvatarPh tone="b" />
                  <AvatarPh tone="c" />
                  <AvatarPh tone="d" />
                </span>
                <Sparks className="dfw-love__sparks" />
                <p>
                  Our clients say it better than we can. Verified reviews from
                  Zonic Media clients across the US, collected by Clutch.
                </p>
              </div>
            </div>

            <div className="dfw-love__card">
              <ClutchWidget
                widgetType="12"
                height="375"
                primaryColor="#2567e8"
                reviews="448872,448007,448005,447416,446728,446721,446714,446262,441531,442062,445226,445524"
              />
            </div>

            <div className="dfw-logos">
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
                  className="dfw-logos__wide"
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
        <section className="dfw-sec dfw-area-sec" aria-labelledby="dfw-area-h">
          <div className="dfw-wrap">
            <div className="dfw-area dfw-area--split">
              <div className="dfw-area__head">
                <Strip id="dfw-area-h">
                  Web Design Across{" "}
                  <br />
                  Dallas–Fort Worth
                </Strip>
                <p className="dfw-area__lead">
                  We design websites for businesses in all eleven counties of
                  the Dallas–Fort Worth metro, from Denton to Waxahachie and
                  Weatherford to Rockwall. The Metroplex added about 123,000
                  residents between mid-2024 and mid-2025, so we build pages
                  for the suburbs where your next customers are moving in.
                </p>
              </div>
              <div className="dfw-area__text">
                <div className="dfw-area__counties">
                  {counties.map((county, i) => (
                    <div key={county.name}>
                      <h3>
                        <span className="dfw-area__num" aria-hidden="true">
                          {i + 1}
                        </span>
                        {county.name}
                      </h3>
                      <ul className="dfw-area__cities">
                        {county.cities.split(", ").map((city) => (
                          <li key={city}>{city}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="dfw-area__more">
                  Also Rockwall, Ellis, Johnson, Kaufman, Parker, Hunt and Wise
                  counties. Website pages for{" "}
                  <Link href="/services/roofing-website-design">roofers</Link>,{" "}
                  <Link href="/services/hvac-website-design">
                    HVAC companies
                  </Link>
                  ,{" "}
                  <Link href="/services/plumbing-website-design">plumbers</Link>
                  ,{" "}
                  <Link href="/services/dental-website-design">dentists</Link>{" "}
                  and{" "}
                  <Link href="/services/law-firm-website-design">law firms</Link>
                  .
                </p>
              </div>
              <div className="dfw-area__map">
                <CityPagesMap pins={mapPins} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= FAQ */}
        <section className="dfw-sec dfw-faq-sec" aria-labelledby="dfw-faq-h">
          <div className="dfw-wrap">
            <h2 id="dfw-faq-h" className="dfw-h2 dfw-faq__title">
              Dallas–Fort Worth Web Design Questions
            </h2>
            <div className="dfw-faq">
              {faqs.map((item) => (
                <details key={item.q} className="dfw-faq__item">
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
          className="dfw-sec dfw-contact"
          id="dfw-contact"
          aria-labelledby="dfw-contact-h"
        >
          <div className="dfw-wrap">
            <div className="dfw-contact__card">
              <svg viewBox="0 0 120 90" className="dfw-envelope" aria-hidden="true">
                <rect x="6" y="14" width="108" height="70" rx="10" />
                <path d="M10 22 L60 56 L110 22" />
              </svg>
              <span className="dfw-contact__pin" aria-hidden="true">
                <InlinePin id="dfw-pin-contact" />
              </span>

              <h2 id="dfw-contact-h" className="dfw-contact__title">
                Want to Talk <InlineChat /> About{" "}
                <br />
                Your New Website?
              </h2>
              <p className="dfw-contact__sub">
                Tell us about your business and the cities you serve. We’ll
                review your current site, share a design direction and send
                back a flat project quote.
              </p>
              <div className="dfw-contact__links">
                <a href={SITE_CONTACT.phoneHref} className="dfw-pill">
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
                <a
                  href={SITE_CONTACT.emailHref}
                  className="dfw-pill dfw-pill--outline"
                >
                  <FiMail aria-hidden="true" />
                  {SITE_CONTACT.email}
                </a>
              </div>
              <div className="dfw-contact__form">
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
        <section className="dfw-band" aria-labelledby="dfw-band-h">
          <div className="dfw-wrap dfw-band__inner">
            <h2 id="dfw-band-h">
              Get a Website That <span>Wins Work Across DFW.</span>
            </h2>
            <div className="dfw-band__side">
              <p>
                Start with a free strategy call and a flat project quote, with
                no surprises along the way.
              </p>
              <Link href={SITE_CONTACT.bookCallHref} className="dfw-pill dfw-pill--blue">
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
