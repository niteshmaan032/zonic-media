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

import "@/app/style/dfwMarketing.css";

import Footer from "@/app/components/Footer";
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
} from "@/app/components/DfwMarketingVisuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { SITE_URL, buildBreadcrumbJsonLd } from "@/shared/seoSchemas";

const ClutchWidget = dynamic(() => import("@/app/components/ClutchWidget"));
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

   PHOTOS: every photo slot is a <Ph> skeleton; the label names the shot and
   the ratio the crop. Save real photos under /public/images/dfw/.

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
    href: "/services/local-seo-packages",
    link: "Local SEO packages",
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
    photo: "Free local SEO audit report for a Dallas–Fort Worth business, open on a laptop",
    src: "/images/dfw/audit-report.png",
  },
  {
    when: "Weeks 2–4",
    title: "Fix the Foundation",
    body: "Categories, services and service area on your profile, matching business details everywhere, and call tracking so every lead is counted.",
    href: "/local-seo-google-business-optimization",
    tone: "gold",
    photo: "Google Business Profile being optimized on a phone",
    src: "/images/dfw/profile-phone.png",
  },
  {
    when: "Month 2",
    title: "Build Reach Into the Suburbs",
    body: "Pages for the areas you want work from, review requests that mention the job and the town, and links from local sites.",
    href: "/services/local-seo-packages",
    tone: "green",
    photo: "New city service page for a Plano, TX business shown on a phone",
    src: "/images/dfw/city-page-phone.png",
  },
  {
    when: "Month 3 on",
    title: "Grow, and Report on Calls",
    body: "Ads where Maps can’t reach yet, and a monthly report on calls, forms and where you rank in each city.",
    href: "/services/google-ads",
    tone: "red",
    photo: "Zonic strategist walking a DFW client through a monthly marketing report",
    src: "/images/dfw/report-conversation.png",
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
      url: `${SITE_URL}/images/dfw/team-campaign.png`,
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
    <Tag id={id} className={`dfw-strip ${className}`}>
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
              Dallas–Fort Worth <InlinePin /> Marketing{" "}
              <br className="dfw-hero__br" />
              Agency for Local Businesses
            </Strip>
            <p className="dfw-hero__sub">
              Zonic Media is the digital marketing agency that helps
              Dallas–Fort Worth businesses grow. We turn your Google Business
              Profile, website, local SEO and Google Ads into a steady stream
              of calls, leads and booked jobs from Frisco to Mansfield, so you
              can focus on running the business while we bring in the
              customers.
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
                <p>Google Business Profiles reinstated and verified</p>
                <b>900+</b>
              </div>
            </div>

            <div className="dfw-bento__card dfw-bento__card--lime">
              <span className="dfw-bento__icon" aria-hidden="true">
                <FiAward />
              </span>
              <b>1,500+</b>
              <p>Profiles optimized</p>
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
              <p>Local service niches we market</p>
              <ul className="dfw-tags" aria-label="Niches we market">
                <li className="dfw-tag dfw-tag--gold">Roofing</li>
                <li className="dfw-tag dfw-tag--white">HVAC</li>
                <li className="dfw-tag dfw-tag--green">Plumbing</li>
                <li className="dfw-tag dfw-tag--white">Real estate</li>
                <li className="dfw-tag dfw-tag--blue">Home inspectors</li>
                <li className="dfw-tag dfw-tag--white">Pest control</li>
                <li className="dfw-tag dfw-tag--gold">Landscaping</li>
                <li className="dfw-tag dfw-tag--green">Dental</li>
                <li className="dfw-tag dfw-tag--white">Solar</li>
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
                  Built Around How{" "}
                  <br />
                  DFW Customers Search.
                </Strip>
                <HandArrow className="dfw-about__arrow" />
              </div>
              <div className="dfw-about__copy">
                <p className="dfw-label">About Zonic in Dallas–Fort Worth</p>
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
                <Link href="/about" className="dfw-pill dfw-pill--outline">
                  More About Us
                </Link>
              </div>
            </div>

            <div className="dfw-about__photos">
              <RatingBadge />
              <div className="dfw-about__photo dfw-about__photo--narrow">
                <Ph
                  src="/images/dfw/strategist-profile.png"
                  label="Zonic Media strategist reviewing a Dallas client’s Google Business Profile"
                  ratio="3:4"
                />
              </div>
              <div className="dfw-about__photo dfw-about__photo--wide">
                <Ph
                  src="/images/dfw/team-campaign.png"
                  label="Zonic Media team planning a Dallas–Fort Worth marketing campaign"
                  ratio="16:9"
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
                Digital Marketing Services{" "}
                <br />
                for DFW Businesses
              </Strip>
              <div className="dfw-svc-head">
                <p>
                  Six services, one team and one monthly report. Most DFW
                  businesses start with their Google profile and website, then
                  add local SEO and ads to reach the rest of the metro.
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
                  From a Google Search{" "}
                  <br />
                  to a Booked Job
                </Strip>
                <p className="dfw-journey__lead">
                  Every part of the plan exists to move a customer one step
                  closer to calling you. Here’s the path a DFW customer takes,
                  and what we do at each step.
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
                <JourneyPhone />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= PROCESS */}
        <section className="dfw-sec dfw-works" aria-labelledby="dfw-steps-h">
          <div className="dfw-wrap">
            <div className="dfw-row-head">
              <Strip id="dfw-steps-h">
                Your First 90 Days
              </Strip>
              <a href="#dfw-contact" className="dfw-pill">
                Book Your Free Audit
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
                      <Ph src={step.src} label={step.photo} ratio="4:3" />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ======================================================== COVERAGE */}
        <section className="dfw-sec dfw-coverage" aria-labelledby="dfw-cov-h">
          <div className="dfw-wrap">
            <div className="dfw-coverage__card">
              <div className="dfw-coverage__visual">
                <CoverageGrid />
              </div>
              <div className="dfw-coverage__text">
                <Strip id="dfw-cov-h">
                  Watch Your Map Pack{" "}
                  <br />
                  Coverage Spread
                </Strip>
                <p className="dfw-coverage__lead">
                  Google ranks you differently in every part of the metro. We
                  check where you show up from points across your whole service
                  area, not just your front door. As your profile, pages and
                  reviews improve, the green spreads out from your address
                  into the suburbs you want work from.
                </p>
                <ul className="dfw-coverage__points">
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
                  className="dfw-pill dfw-pill--white dfw-pill--arrow"
                >
                  Check Your Google Maps Ranking Free
                  <span className="dfw-pill__circ" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
                <p className="dfw-coverage__note">
                  Illustration of how coverage typically spreads. Real results
                  vary by business and market.
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
                Found Everywhere DFW Customers Look
              </h2>
              <p>
                We keep your name, address, phone and hours identical on the
                platforms Google cross-checks and the AI tools people now ask.
              </p>
            </div>

            <div className="dfw-hub__map">
              <ul className="dfw-hub__side" aria-label="Search and map platforms">
                {hubLeft.map((item) => (
                  <li key={item.name} className={`dfw-app dfw-app--${item.tone}`}>
                    <item.icon aria-hidden="true" />
                    <span className="dfw-sr">{item.name}</span>
                  </li>
                ))}
              </ul>
              <div className="dfw-hub__core">
                <span className="dfw-hub__ring">
                  <FiMapPin aria-hidden="true" />
                </span>
                <b>Your business</b>
                <span>one set of details, everywhere</span>
              </div>
              <ul className="dfw-hub__side" aria-label="Social and AI platforms">
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
                900+ Profiles{" "}
                <br />
                Back on Google
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
                  Client satisfaction says more than we can. Verified reviews
                  from Zonic Media clients across the US, collected by Clutch.
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
                  Where We Work in{" "}
                  <br />
                  Dallas–Fort Worth
                </Strip>
                <p className="dfw-area__lead">
                  All eleven counties of the Dallas–Fort Worth metro, from
                  Denton to Waxahachie and Weatherford to Rockwall. The
                  Metroplex added about 123,000 residents between mid-2024 and
                  mid-2025, and Celina, Princeton, Melissa and Anna were among
                  the fastest-growing cities in the US, so we build plans
                  around the suburbs where your next customers are moving.
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
              <div className="dfw-area__map">
                <Ph
                  src="/images/dfw/dfw-coverage-map.png"
                  label="Map of the Dallas–Fort Worth service area across Dallas, Tarrant, Collin and Denton counties"
                  ratio="1:1"
                />
                {mapPins.map((pin) => (
                  <span
                    key={pin.name}
                    className="dfw-area__pin"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    aria-hidden="true"
                  >
                    {pin.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= FAQ */}
        <section className="dfw-sec dfw-faq-sec" aria-labelledby="dfw-faq-h">
          <div className="dfw-wrap">
            <h2 id="dfw-faq-h" className="dfw-h2 dfw-faq__title">
              Dallas–Fort Worth Marketing Questions
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
                Your DFW Marketing?
              </h2>
              <p className="dfw-contact__sub">
                Tell us where in the metro you want more work. We’ll check
                your Google profile, website and rankings and send back a plan
                with a flat quote.
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
        <section className="dfw-band" aria-labelledby="dfw-band-h">
          <div className="dfw-wrap dfw-band__inner">
            <h2 id="dfw-band-h">
              Get Found Across the <span>Whole Metroplex.</span>
            </h2>
            <div className="dfw-band__side">
              <p>
                Start with a free audit and a flat quote, with no contract to
                lock you in.
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
