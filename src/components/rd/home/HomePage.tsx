import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FiAward,
  FiCheck,
  FiCpu,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPenTool,
  FiPhone,
  FiPlus,
  FiShield,
  FiStar,
  FiTarget,
  FiX,
} from "react-icons/fi";
import {
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiLinkedin,
  SiTrustpilot,
  SiYoutube,
} from "react-icons/si";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  HomeBlogSlider,
  type BlogSlide,
} from "@/components/rd/home/HomeBlogSlider";
import {
  CenterHead,
  LEAD,
  Label,
  Pill,
  RowHead,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import {
  AvatarPh,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { Chip } from "@/components/rd/dfw-kit/ui";
import { PlatformHub, type HubApp } from "@/components/rd/dfw-kit/hub";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { HomePricing } from "@/components/rd/home/HomePricing";
import { HqCard } from "@/components/rd/home/HomeUi";
import { LaunchpadShowcase } from "@/components/rd/home/LaunchpadShowcase";
import { serviceUi } from "@/components/rd/home/ServiceUi";
import "./serviceUi.css";
import { SITE_CONTACT, SITE_SOCIAL_LINKS } from "@/shared/siteConfig";
import { ClutchMark } from "@/components/rd/about/aboutUi";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   HOMEPAGE REDESIGN DRAFT — markup for /home2 (19 Oct 2026). The route file
   src/app/(main)/home2/page.tsx holds the metadata and loads the blog posts;
   this component lives under src/components/rd so Tailwind always scans it.

   The new homepage in the Dallas–Fort Worth layout, built from the
   component library (src/components/rd/dfw-kit) with home UI in
   src/components/rd/home/HomeUi.tsx. Owner's section order: hero (Clutch,
   Trustpilot, Yelp, Google + four stat pillars) → about → services as
   horizontal detail cards with a UI each → Google reviews (Clutch until 22 Oct) → platform hub →
   Launchpad → the difference → FAQ → blog → contact → gradient banner →
   footer.

   STATUS: draft. noindex, not in the sitemap or navbar. The live homepage
   (src/app/(main)/page.tsx) is untouched.

   COPY (rewritten 24 Oct 2026, content-optimization brief): every heading,
   paragraph and FAQ is new wording, not the live homepage's. Keywords
   (Semrush US, 24 Oct): digital marketing agency 74K · digital marketing
   company / services 33.1K · local SEO services 27.1K · Google Ads agency
   9.9K · full service digital marketing agency 4.4K · AI SEO agency 4.4K ·
   digital marketing agency for small business 2.9K · Google Business
   Profile management 880. FAQ from Semrush questions ("what does a digital
   marketing agency do for small businesses" 3.6K, "how much do digital
   marketing agencies charge"). The live "/" ranks only for the brand
   ("zonic", pos 19), so the title adds "Zonic Media". Unsourced live
   figures (44% of clicks, $1,000–$5,000 agency fees, Clutch review count)
   were dropped; only the verified numbers remain.

   Before swapping: run the keyword guard on "/" and decide on the
   current-home sections this draft leaves out ("A Clear Plan Before We
   Build Anything", "Watch Your Rankings and Reviews Climb", the free-audit
   block), and move the homepage JSON-LD (Organization, ProfessionalService,
   WebSite, …) across.
--------------------------------------------------------------------------- */

export type HomeBlog = BlogSlide;

/* ------------------------------------------------------------------ data */

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

const TAGS: [string, string][] = [
  ["Roofing", "tw:bg-(--gold) tw:text-(--ink)"],
  ["HVAC", "tw:bg-white tw:text-(--ink)"],
  ["Plumbing", "tw:bg-[#b8eccb] tw:text-(--ink)"],
  ["Dental", "tw:bg-white tw:text-(--ink)"],
  ["Real estate", "tw:bg-[#cddcfb] tw:text-(--ink)"],
  ["Pest control", "tw:bg-white tw:text-(--ink)"],
  ["Solar", "tw:bg-(--gold) tw:text-(--ink)"],
  ["Law firms", "tw:bg-[#b8eccb] tw:text-(--ink)"],
  ["Home inspectors", "tw:bg-white tw:text-(--ink)"],
];

const BENTO_CARD =
  "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:px-7 tw:py-[30px] tw:max-bs2xl:px-[22px] tw:max-bs2xl:py-[26px] tw:max-bsxl:flex-[0_0_250px] tw:max-bsxl:snap-center tw:max-bssm:basis-[236px] tw:max-bssm:px-[22px] tw:max-bssm:py-6";
const BIG =
  "tw:block tw:text-[clamp(40px,4vw,60px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]";
const TAG =
  "tw:rounded-full tw:px-[13px] tw:py-1.5 tw:text-[13.5px] tw:leading-[1.3] tw:font-medium tw:whitespace-nowrap tw:nth-[3n+1]:-rotate-4 tw:nth-[3n+2]:rotate-3 tw:nth-[3n]:-rotate-[1.5deg] tw:max-bs2xl:px-3 tw:max-bs2xl:text-[13px] tw:max-bssm:px-[11px] tw:max-bssm:py-[5px] tw:max-bssm:text-[12.5px]";

const INLINE_LINK =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px]";
/* Darker link for the coloured service-card boxes (blue on the pastel
   panels falls below 4.5:1). */
const INLINE_LINK_ON_TINT =
  "tw:[&_a]:font-semibold tw:[&_a]:text-(--blue-dark) tw:[&_a]:underline tw:[&_a]:decoration-(--blue-dark)/40 tw:[&_a]:underline-offset-[3px]";

/* icon = icon circle, bg = UI panel colour; the details box is white. */
const MEDIA_TONE = {
  blue: { icon: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-[#cddcfb]" },
  ink: { icon: "tw:bg-(--ink) tw:text-white", bg: "tw:bg-[#d7dcea]" },
  red: { icon: "tw:bg-(--red) tw:text-white", bg: "tw:bg-[#f9c7c1]" },
  gold: { icon: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-[#fde08a]" },
  green: { icon: "tw:bg-(--green) tw:text-white", bg: "tw:bg-[#bfe9cc]" },
  violet: { icon: "tw:bg-[#7a5cf0] tw:text-white", bg: "tw:bg-[#ddd3fb]" },
  pink: { icon: "tw:bg-[#e0478d] tw:text-white", bg: "tw:bg-[#f9cfe2]" },
  teal: { icon: "tw:bg-[#0f9f9a] tw:text-white", bg: "tw:bg-[#bfeae6]" },
};

type Service = {
  id: string;
  icon: IconType;
  tone: keyof typeof MEDIA_TONE;
  sub: string;
  title: string;
  desc: ReactNode;
  points: string[];
  note?: string;
  href: string;
  cta: string;
};

/* Seven services, one card each (owner's order). Copy rewritten 24 Oct
   2026: keyword-led titles, ~25-word bodies, every original link kept. The
   GBP card's tick list is the reinstatement process (owner, 19 Oct). */
const services: Service[] = [
  {
    id: "local-seo",
    icon: FiMapPin,
    tone: "blue",
    sub: "Google Maps rankings",
    title: "Local SEO That Puts You in the Map Pack",
    desc: (
      <>
        Most buyers choose from the top three results on Google Maps. Our{" "}
        <Link href="/services/local-seo-for-home-services">
          local SEO services
        </Link>{" "}
        move your business into that group for the searches and neighborhoods
        that bring paying work.
      </>
    ),
    points: [
      "Google profile tuned to rank",
      "Citations and new reviews",
      "Pages for each city and service",
      "Rankings checked street by street",
    ],
    note: "Plans from $297/mo",
    href: "/services/local-seo-for-home-services",
    cta: "See Local SEO Services",
  },
  {
    id: "ai-search",
    icon: FiCpu,
    tone: "teal",
    sub: "Named in AI answers",
    title: "AI SEO for ChatGPT and AI Overviews",
    desc: (
      <>
        When buyers ask ChatGPT, Gemini or an AI Overview for a recommendation,
        our <Link href="/services/ai-seo-services">AI SEO services</Link> give
        those tools clear, consistent facts about you, so your business is the
        one they suggest.
      </>
    ),
    points: [
      "Schema and entity markup",
      "Answer-first service pages",
      "Matching details on every listing",
      "Monthly checks of AI mentions",
    ],
    href: "/services/ai-seo-services",
    cta: "See AI SEO Services",
  },
  {
    id: "gbp",
    icon: FiShield,
    tone: "green",
    sub: "Calls, directions and reviews",
    title: "Google Business Profile Setup and Recovery",
    desc: (
      <>
        Your free Google listing drives calls, directions and reviews. We build
        it to rank, keep it active and bring it back after a suspension. Stuck
        on{" "}
        <Link href="/services/gmb-verification-help">Google verification</Link>?
        We clear that too.
      </>
    ),
    // The reinstatement process as the tick list, so this card is the same
    // size as the rest (owner, 19 Oct).
    points: [
      "Find what caused the suspension",
      "File a documented appeal",
      "Guard the profile against repeats",
      "Lift it higher on Google Maps",
    ],
    note: "900+ profiles reinstated",
    href: "/services/gbp-reinstatement-service",
    cta: "See Profile Reinstatement",
  },
  {
    id: "ppc",
    icon: FiTarget,
    tone: "gold",
    sub: "Paid search for ready buyers",
    title: "PPC and Google Ads Management",
    desc: (
      <>
        <Link href="/services/google-ads">Google Ads management</Link> that
        shows your business to people searching for your service today, with
        every call and form tracked so spend follows the campaigns that book
        work.
      </>
    ),
    points: [
      "Search and Local Services ads",
      "Call and form tracking",
      "Landing pages made to convert",
      "0% ad-spend markup",
    ],
    href: "/services/google-ads",
    cta: "See PPC Management",
  },
  {
    id: "web",
    icon: FiMonitor,
    tone: "pink",
    sub: "Fast, mobile-first builds",
    title: "Website Design for Small Businesses",
    desc: (
      <>
        <Link href="/services/web-design">Websites for growing businesses</Link>{" "}
        that load quickly on phones, look established and make it easy to call
        or ask for a quote, with technical SEO in place from launch.
      </>
    ),
    points: [
      "Quick to load on any phone",
      "SEO-ready at launch",
      "Tap-to-call and quote forms",
      "WordPress, Shopify or custom",
    ],
    href: "/services/web-design",
    cta: "See Web Design Services",
  },
  {
    id: "ux",
    icon: FiLayout,
    tone: "violet",
    sub: "Screens people finish",
    title: "UI and UX Design Services",
    desc: (
      <>
        Wireframes, clickable prototypes and reusable design systems that make
        the next step clear, so visitors book instead of leaving, with
        accessible contrast and a clean developer handover.
      </>
    ),
    points: [
      "Wireframes and prototypes",
      "Reusable design systems",
      "Accessible color contrast",
      "Developer-ready handover",
    ],
    href: "/services",
    cta: "View Design Services",
  },
  {
    id: "graphic",
    icon: FiPenTool,
    tone: "red",
    sub: "Brand and marketing assets",
    title: "Logo and Graphic Design",
    desc: (
      <>
        Logos, ad creative, social posts, signs and print that give a growing
        business one clear, trusted look wherever customers come across it.
      </>
    ),
    points: [
      "Logo and brand identity",
      "Ad and social creative",
      "Signs and printed pieces",
      "Simple brand guidelines",
    ],
    href: "/services",
    cta: "View Branding Services",
  },
];

/* Reviews and profiles hub (owner, 23 Oct: the About page's linked hub in
   place of "Found Everywhere Your Customers Look", with its own heading).
   Every tile opens the real profile in a new tab. */
const social = (label: string) =>
  SITE_SOCIAL_LINKS.find((s) => s.label === label)?.href;
const hubLeft: HubApp[] = [
  {
    icon: SiGoogle,
    name: "Google reviews",
    tone: "google",
    href: SITE_CONTACT.mapHref,
  },
  {
    icon: ClutchMark,
    name: "Clutch",
    tone: "clutch",
    href: "https://clutch.co/profile/zonic-media",
  },
  {
    icon: SiTrustpilot,
    name: "Trustpilot",
    tone: "trustpilot",
    href: "https://www.trustpilot.com/review/zonicllc.com",
  },
  {
    icon: SiGooglemaps,
    name: "Google Maps",
    tone: "maps",
    href: SITE_CONTACT.mapHref,
  },
];
const hubRight: HubApp[] = [
  {
    icon: SiLinkedin,
    name: "LinkedIn",
    tone: "linkedin",
    href: social("LinkedIn"),
  },
  {
    icon: SiFacebook,
    name: "Facebook",
    tone: "facebook",
    href: social("Facebook"),
  },
  {
    icon: SiInstagram,
    name: "Instagram",
    tone: "instagram",
    href: social("Instagram"),
  },
  {
    icon: SiYoutube,
    name: "YouTube",
    tone: "youtube",
    href: social("YouTube"),
  },
];

const launchDays = [
  {
    when: "Day 1–2",
    t: "Brand Kit and Logo",
    d: "A logo, colors and fonts that look established from the first visit.",
  },
  {
    when: "Day 3–7",
    t: "Your Website, Built and Checked",
    d: "A quick, mobile-friendly site with clear calls to action, tested before launch.",
  },
  {
    when: "Day 8–9",
    t: "Google Profile Set Up and Verified",
    d: "Your listing goes live on Google Maps, with verification handled for you.",
  },
  {
    when: "Day 10–14",
    t: "Launched and Ready for Leads",
    d: "Call tracking connected, social profiles ready and your business open for inquiries.",
  },
];

const alone = [
  "Competitors rank above you on Google Maps",
  "Ad spend goes on clicks that never turn into calls",
  "AI answers recommend other businesses, not yours",
  "No one can say which marketing is paying off",
];
const withZonic = [
  "Your profile climbs toward the top 3 on Google Maps",
  "Campaigns judged by calls and booked jobs",
  "A website and profile AI search can quote",
  "Monthly reports that trace each lead to its source",
];

/* FAQ, rewritten 24 Oct 2026 from Semrush questions. `node` renders the
   answer with its inline links; `a` is the plain text for FAQPage schema. */
const faqs: { q: string; a: string; node?: ReactNode }[] = [
  {
    q: "What does a digital marketing agency do for small businesses?",
    a: "It brings you more customers from online search. For small and mid-size businesses we run local SEO, Google Business Profile management, websites, Google Ads and AI search visibility, then report the calls, forms and booked jobs each channel produces, so you can see exactly what is working.",
  },
  {
    q: "Which industries do you work with?",
    a: "More than 20, nearly all local or service-area businesses: roofing, HVAC, plumbing and electrical contractors, pest control, cleaning and towing companies, dental and chiropractic practices, law firms and real estate agents. What they share is that customers find them through a nearby search and then pick up the phone.",
  },
  {
    q: "Do you work with businesses outside Delaware?",
    a: "Yes. Our office is in Dover, Delaware, and the team works remote-first, so we serve clients in all 50 states. The work runs through Google and your own website and ad platforms, so distance never slows a project down.",
  },
  {
    q: "What is the difference between local SEO and regular SEO?",
    a: "Regular SEO competes for broad, nationwide searches. Local SEO targets buyers near you: it focuses on the Google Map Pack, Google Business Profile optimization, reviews, citations and city pages, so you appear when someone nearby searches for what you sell.",
    node: (
      <>
        Regular SEO competes for broad, nationwide searches. Local SEO targets
        buyers near you: it focuses on the Google Map Pack,{" "}
        <Link href="/local-seo-google-business-optimization">
          Google Business Profile optimization
        </Link>
        , reviews, citations and city pages, so you appear when someone nearby
        searches for what you sell.
      </>
    ),
  },
  {
    q: "Can you get my business recommended by ChatGPT and AI Overviews?",
    a: "We can make you a strong candidate. AI tools lean on the same signals that win local search: a complete Google profile, matching listings, steady reviews, schema markup and clear service pages. We build those, then check each month whether AI answers name you. Nobody can guarantee a mention.",
  },
  {
    q: "Can you reinstate a suspended Google Business Profile?",
    a: "Yes. Reinstatement is a core specialty, with 900+ profiles brought back so far. We find what triggered the suspension, correct it, file a documented appeal and protect the profile afterwards. Google makes the final decision, so no agency can guarantee the outcome.",
    node: (
      <>
        Yes.{" "}
        <Link href="/services/gbp-reinstatement-service">Reinstatement</Link> is
        a core specialty, with 900+ profiles brought back so far. We find what
        triggered the suspension, correct it, file a documented appeal and
        protect the profile afterwards. Google makes the final decision, so no
        agency can guarantee the outcome.
      </>
    ),
  },
  {
    q: "How much does a digital marketing agency cost for a small business?",
    a: "Plans are published at $297, $750 or $1,500 per month, each month to month with no long-term contract. Google Ads management comes with 0% ad-spend markup, and a new website is quoted as a one-time project. A free strategy call shows which plan fits your goals.",
  },
  {
    q: "How long does digital marketing take to work?",
    a: "Paid ads can bring calls in the first weeks after launch. Map Pack and organic gains usually build over a few months while Google learns to trust your profile, site and citations. Reinstatement timing depends on how fast Google reviews the appeal.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/* ------------------------------------------------------------------ page */

export function HomePage({ blogs }: { blogs: HomeBlog[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:bg-[radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f9fbff_60%,#fff_100%)] tw:pt-36 tw:pb-(--sec-y) tw:text-center tw:max-bsmd:pt-[120px]"
          aria-labelledby="home-h1"
        >
          <span className="tw:pointer-events-none tw:absolute tw:top-[250px] tw:-left-[200px] tw:-z-1 tw:size-[450px] tw:rounded-full tw:bg-[#5070ff] tw:opacity-[0.09] tw:blur-[70px]" />
          <span className="tw:pointer-events-none tw:absolute tw:top-[440px] tw:-right-[220px] tw:-z-1 tw:size-[450px] tw:rounded-full tw:bg-[#875cff] tw:opacity-[0.09] tw:blur-[70px]" />
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {heroMarks.map(([x, y], i) => (
              <i
                key={`${x}-${y}`}
                className={cx(
                  "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#3157f5] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#3157f5] tw:after:content-['']",
                  i % 2
                    ? "tw:size-3.5 tw:opacity-40"
                    : "tw:size-2.5 tw:opacity-30",
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </span>

          <Wrap>
            {/* Two lines on tablet and up (owner, 19 Oct), broken after the
                head term; phones wrap naturally. "Local business", not
                "small business" (owner, 25 Oct); the <title> keeps the
                searched "for small business" phrase. */}
            <Strip
              as="h1"
              id="home-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-bsmd:text-balance"
            >
              Digital Marketing Agency <br className="tw:max-bsmd:hidden" />
              for Local Business Growth
            </Strip>
            <p className={cx(LEAD, "tw:mx-auto tw:mt-7 tw:max-w-[820px]")}>
              Zonic Media helps small and mid-size businesses get found and get
              booked. Our Dover, Delaware team runs local SEO, AI search
              optimization, Google Business Profile management, website design
              and Google Ads as one plan, so more nearby customers see you, call
              you and choose you.
            </p>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              className="tw:mt-[30px]"
            />
            <div className="tw:mt-[30px] tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href="#contact" fullOnPhone>
                Book a Free Strategy Call
              </Pill>
              <Pill
                href={SITE_CONTACT.phoneHref}
                tone="outline"
                size="md"
                fullOnPhone
              >
                <FiPhone aria-hidden="true" />
                {SITE_CONTACT.phoneDisplay}
              </Pill>
            </div>
          </Wrap>

          <div className="tw:mt-1 tw:grid tw:grid-cols-4 tw:items-end tw:gap-6 tw:px-(--inset) tw:text-left tw:max-bs2xl:gap-[18px] tw:max-bsxl:flex tw:max-bsxl:snap-x tw:max-bsxl:snap-mandatory tw:max-bsxl:overflow-x-auto tw:max-bsxl:pb-1.5 tw:max-bsxl:[scrollbar-width:none] tw:max-bssm:mt-4 tw:[&::-webkit-scrollbar]:hidden">
            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[345px] tw:justify-between tw:bg-(--blue) tw:text-white tw:max-bssm:h-[315px]",
              )}
            >
              <span className="tw:flex tw:items-center">
                <AvatarPh tone="a" ring="var(--blue)" />
                <AvatarPh tone="b" ring="var(--blue)" />
                <AvatarPh tone="c" ring="var(--blue)" />
                <span
                  className="tw:-ml-3 tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:border-3 tw:border-(--blue) tw:bg-(--gold) tw:text-xl tw:text-(--ink)"
                  aria-hidden="true"
                >
                  <FiPlus />
                </span>
              </span>
              <div>
                <p className="tw:mb-2.5 tw:text-[15.5px]/[1.45] tw:text-white/80">
                  Suspended Google profiles brought back online
                </p>
                <b className={BIG}>900+</b>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[285px] tw:items-center tw:justify-center tw:bg-[#dcfc7c] tw:text-center tw:max-bssm:h-[265px]",
              )}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white/55 tw:text-[23px] tw:text-(--ink)"
                aria-hidden="true"
              >
                <SiGooglemaps />
              </span>
              <b className={cx(BIG, "tw:mt-5")}>1,500+</b>
              <p className="tw:mt-2.5 tw:text-[15.5px]/[1.45] tw:text-(--ink)/70">
                Google Business Profiles optimized to rank
              </p>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[380px] tw:justify-between tw:bg-(--gold) tw:max-bssm:h-[345px]",
              )}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white tw:text-[23px]"
                aria-hidden="true"
              >
                <FiStar />
              </span>
              <div>
                <b className={BIG}>5.0</b>
                <span
                  className="tw:mt-3.5 tw:mb-2.5 tw:flex tw:gap-1"
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar key={n} className="tw:size-4 tw:fill-(--ink)" />
                  ))}
                </span>
                <p className="tw:text-[15.5px]/[1.45]">
                  Star rating from our clients on Google
                </p>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[420px] tw:justify-start tw:bg-(--ink) tw:text-white tw:max-bssm:h-[390px]",
              )}
            >
              <b className="tw:block tw:text-[clamp(50px,4.6vw,70px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]">
                20+
              </b>
              <p className="tw:mt-4 tw:max-w-[12ch] tw:text-[clamp(19px,1.6vw,24px)]/[1.3]">
                Industries we market every day
              </p>
              <ul
                className="tw:absolute tw:right-[22px] tw:bottom-[22px] tw:left-[22px] tw:flex tw:flex-wrap tw:content-end tw:gap-x-1.5 tw:gap-y-[7px] tw:max-bssm:right-[18px] tw:max-bssm:bottom-[18px] tw:max-bssm:left-[18px]"
                aria-label="Industries we serve"
              >
                {TAGS.map(([name, tone]) => (
                  <li key={name} className={cx(TAG, tone)}>
                    {name}
                  </li>
                ))}
                <li
                  className={cx(
                    TAG,
                    "tw:border tw:border-dashed tw:border-white/45 tw:text-white/85",
                  )}
                >
                  <Link href="/industries">+ view all</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        {/* Original layout (owner, 19 Oct: "revert, just reduce the gap
            between content and images"): photo row starts 40px below the
            copy on desktop (was 110px); tablet keeps room for the Clutch
            stamp above the buttons. */}
        <Section id="about" labelledBy="home-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip id="home-about-h">
                  A Digital Marketing Company Built for Booked Jobs
                </Strip>
                {/* Arrow: 32px under the heading (owner tuned it between 18
                    and 48, 19 Oct). */}
                <HandArrow className="tw:absolute tw:top-[calc(100%+32px)] tw:left-[32%] tw:w-[230px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>About Zonic Media</Label>
                <p className={LEAD}>
                  We are a digital marketing company for small and mid-size
                  businesses that grow through calls, quote requests and booked
                  jobs. From Dover, Delaware, our in-house team works with
                  clients across all 50 states and judges every campaign by the
                  leads it brings in.
                </p>
                <ul className="tw:mt-6 tw:grid tw:gap-3.5">
                  {[
                    [
                      "One plan, one team",
                      "SEO, ads, design and your Google profile handled together, with no vendor hand-offs.",
                    ],
                    [
                      "Calls come first",
                      "we start with the fixes most likely to make your phone ring.",
                    ],
                    [
                      "Reports in plain English",
                      "calls, forms and booked jobs, never vanity metrics.",
                    ],
                  ].map(([t, d]) => (
                    <li key={t} className="tw:flex tw:items-start tw:gap-3">
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-[5px] tw:text-(--blue) tw:[stroke-width:3]"
                      />
                      <span className="tw:text-[17px]/[1.55] tw:text-(--text)">
                        <b className="tw:font-medium tw:text-(--ink)">{t}</b> —{" "}
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:gap-3">
                  <Pill href="/about" arrow>
                    Meet the team
                  </Pill>
                  <Pill href="#services" tone="outline">
                    Explore our services
                  </Pill>
                </div>
              </div>
            </div>

            <div className="tw:relative tw:mt-10 tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bslg:mt-[96px] tw:max-bssm:mt-14 tw:max-bssm:grid-cols-1">
              <RatingBadge
                text="5.0 STARS ON GOOGLE • ZONIC MEDIA • DOVER •"
                className="tw:absolute tw:-top-24 tw:left-[calc(32%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:left-[calc(32%-75px)] tw:max-bssm:-top-16 tw:max-bssm:right-6 tw:max-bssm:left-auto"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <HqCard />
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label="Zonic Media's digital marketing team planning a client campaign beside a performance dashboard"
                  ratio="16:9"
                  src="/images/home/zonic-marketing-team-workshop.jpg"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section id="services" labelledBy="home-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[760px]">
                <Strip id="home-svc-h" size="card">
                  Digital Marketing Services That Turn Searches Into Customers
                </Strip>
              </div>
              <div className="tw:flex tw:max-w-[440px] tw:flex-col tw:items-start tw:gap-[22px]">
                <p className={LEAD}>
                  One full-service digital marketing agency covering SEO, AI
                  search, your Google profile, websites and ads, planned around
                  your budget and the leads you need most.
                </p>
                <Pill href="#contact">Book a Free Strategy Call</Pill>
              </div>
            </RowHead>

            <ol className="tw:grid tw:gap-5 tw:[@media(min-width:1200px)_and_(min-height:760px)]:auto-rows-fr tw:[@media(min-width:992px)_and_(max-width:1199.98px)_and_(min-height:860px)]:auto-rows-fr">
              {services.map((service, i) => {
                const tone = MEDIA_TONE[service.tone];
                return (
                  <li
                    key={service.id}
                    // Stacking cards (owner, 19 Oct): each row sticks just
                    // below the fixed navbar (91px ≥1200, up to 131px at
                    // 992–1199) and the next slides over it. All rows pin at
                    // the same top and, while stacking, every row is as tall
                    // as the tallest (auto-rows-fr on the list), so a covered
                    // card never peeks out. The row itself has no background
                    // (owner, 19 Oct): only the section is coloured. Only
                    // where a pinned row fits the window; phones and short
                    // screens scroll normally. No shadows.
                    className="tw:grid tw:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] tw:gap-6 tw:top-[108px] tw:max-bsxl:top-[146px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-3.5 tw:[@media(min-width:1200px)_and_(min-height:760px)]:sticky tw:[@media(min-width:992px)_and_(max-width:1199.98px)_and_(min-height:860px)]:sticky"
                  >
                    <article
                      className={cx(
                        "tw:grid tw:grid-cols-[72px_minmax(0,1fr)] tw:content-center tw:gap-6 tw:rounded-(--r-xl) tw:border tw:border-[#e6eaf1] tw:p-10 tw:max-bsxl:p-8 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4 tw:max-bssm:px-6 tw:max-bssm:py-7",
                        "tw:bg-white",
                      )}
                    >
                      <span
                        className={cx(
                          "tw:grid tw:size-[64px] tw:place-items-center tw:rounded-full tw:text-[26px] tw:max-bssm:size-[52px] tw:max-bssm:text-[22px]",
                          tone.icon,
                        )}
                        aria-hidden="true"
                      >
                        <service.icon />
                      </span>
                      <div>
                        <p className="tw:mb-3.5 tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--ink)/65 tw:uppercase">
                          {service.sub}
                        </p>
                        <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em]">
                          {service.title}
                        </h3>
                        <p
                          className={cx(
                            LEAD,
                            "tw:mt-5 tw:max-w-[62ch]",
                            INLINE_LINK_ON_TINT,
                          )}
                        >
                          {service.desc}
                        </p>
                        <ul className="tw:mt-6 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-2.5 tw:border-t tw:border-(--line) tw:pt-5 tw:max-bssm:grid-cols-1">
                          {service.points.map((p) => (
                            <li
                              key={p}
                              className="tw:flex tw:items-start tw:gap-2.5 tw:text-[16px]/[1.45] tw:text-(--ink-2)"
                            >
                              <FiCheck
                                aria-hidden="true"
                                className="tw:mt-px tw:size-[18px] tw:flex-none tw:rounded-full tw:bg-(--green-soft) tw:p-[3px] tw:text-(--green) tw:[stroke-width:3.5]"
                              />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="tw:mt-7 tw:flex tw:flex-wrap tw:items-center tw:gap-3">
                          <Pill href={service.href} arrow>
                            {service.cta}
                          </Pill>
                          {service.note ? (
                            <Chip tone="green">{service.note}</Chip>
                          ) : null}
                        </div>
                      </div>
                    </article>
                    <div
                      className={cx(
                        "tw:relative tw:min-h-[300px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bslg:min-h-[440px] tw:max-bssm:min-h-[420px]",
                        tone.bg,
                      )}
                    >
                      <div
                        className={cx(
                          // Floating UI card: centred and capped so tall rows
                          // (e.g. GBP with the reinstatement steps) don't
                          // stretch it into a mostly empty sheet.
                          "tw:absolute tw:inset-x-[30px] tw:top-1/2 tw:h-[min(400px,calc(100%-48px))] tw:-translate-y-1/2 tw:overflow-hidden tw:rounded-[22px] tw:max-bssm:inset-x-4",
                          i % 2 ? "tw:rotate-3" : "tw:-rotate-3",
                        )}
                      >
                        {serviceUi[service.id]}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="home-hub-h" tone="white">
          <Wrap>
            <CenterHead
              id="home-hub-h"
              title="Trusted on Every Platform You Check"
            >
              Client reviews sit on Google, Clutch and Trustpilot, our Dover
              office is pinned on Google Maps, and the team shares its work on
              social media. Tap any icon to check us out.
            </CenterHead>
            <PlatformHub
              left={hubLeft}
              right={hubRight}
              leftLabel="Where clients review us"
              rightLabel="Where our team posts"
              icon={<FiAward aria-hidden="true" />}
              title="Zonic Media"
              sub="real reviews, real profiles"
            />
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="home-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="home-love-h" size="card">
                  Rated 5.0 by the Owners <br className="tw:max-bsxl:hidden" />
                  We Help Grow
                </Strip>
              </div>
              <div className="tw:relative tw:max-w-[380px] tw:pt-2 tw:max-bsmd:max-w-none">
                <span className="tw:flex tw:items-center">
                  <AvatarPh tone="a" ring="var(--bg)" size={70} />
                  <AvatarPh tone="b" ring="var(--bg)" size={70} />
                  <AvatarPh tone="c" ring="var(--bg)" size={70} />
                  <AvatarPh tone="d" ring="var(--bg)" size={70} />
                </span>
                <Sparks className="tw:absolute tw:-top-[34px] tw:left-[270px] tw:w-[120px] tw:max-bsmd:hidden" />
                <p className={cx(LEAD, "tw:mt-[22px]")}>
                  Every review here comes straight from our Google Business
                  Profile, written by the business owners we work with.
                </p>
              </div>
            </RowHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              {/* Google reviews (owner, 22 Oct 2026): the same Trustindex
                  widget as /local-seo-google-business-optimization. The guard
                  strips the review schema the widget injects. */}
              <LenisIframeGuard widgetScriptSrc="https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c" />
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-8"
            />
          </Wrap>
        </Section>

        {/* ======================================================= LAUNCHPAD */}
        {/* Fits one laptop screen. The day-steps are clickable and drive the
            phone (LaunchpadShowcase, client component); autoplay continues
            after a click. */}
        <Section id="launchpad" labelledBy="home-launch-h">
          <Wrap flushOnPhone>
            <LaunchpadShowcase
              steps={launchDays}
              intro={
                <>
                  <Strip id="home-launch-h" size="card">
                    Launchpad Takes a New Business{" "}
                    <br className="tw:max-bsmd:hidden" />
                    Live in 2 to 3 Weeks
                  </Strip>
                  <p className={cx(LEAD, "tw:mt-4 tw:max-w-[64ch]")}>
                    One done-for-you package for new and growing businesses:
                    your brand, a fast website, Google Business Profile
                    verification, social accounts and call tracking, all set
                    up by the same team.
                  </p>
                </>
              }
              actions={
                <div className="tw:mt-6 tw:flex tw:flex-wrap tw:gap-3">
                  <Pill href="/services/launchpad" arrow>
                    See Launchpad Packages
                  </Pill>
                  <Pill href="#contact" tone="outline" size="md">
                    Book a free consultation
                  </Pill>
                </div>
              }
            />
          </Wrap>
        </Section>

        {/* ===================================================== DIFFERENCE */}
        <Section labelledBy="home-diff-h" tone="white">
          <Wrap>
            <CenterHead
              id="home-diff-h"
              title="Guesswork Marketing vs. a Plan That Books Customers"
            />
            <div className="tw:relative tw:grid tw:grid-cols-2 tw:gap-6 tw:max-bsmd:grid-cols-1 tw:max-bsmd:gap-12">
              <div className="tw:rounded-(--r-xl) tw:bg-(--panel) tw:p-10 tw:max-bssm:p-7">
                <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
                  On your own
                </p>
                <h3 className="tw:mt-3 tw:text-[clamp(26px,2.6vw,38px)] tw:leading-[1.1] tw:tracking-[-0.03em]">
                  Plenty of Effort, Few New Customers
                </h3>
                <ul className="tw:mt-7 tw:grid tw:gap-4">
                  {alone.map((item) => (
                    <li
                      key={item}
                      className="tw:flex tw:items-start tw:gap-3 tw:text-[17px]/[1.5] tw:text-(--text)"
                    >
                      <FiX
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-6 tw:flex-none tw:rounded-full tw:bg-[#fde4e1] tw:p-[5px] tw:text-[#b8352a] tw:[stroke-width:3]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="tw:absolute tw:top-1/2 tw:left-1/2 tw:z-2 tw:grid tw:size-16 tw:-translate-1/2 tw:place-items-center tw:rounded-full tw:border-4 tw:border-white tw:bg-(--gold) tw:text-[17px] tw:font-semibold tw:text-(--ink) tw:max-bssm:size-14"
                aria-hidden="true"
              >
                VS
              </span>
              <div className="tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bssm:p-7">
                <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--gold) tw:uppercase">
                  With Zonic Media
                </p>
                <h3 className="tw:mt-3 tw:text-[clamp(26px,2.6vw,38px)] tw:leading-[1.1] tw:tracking-[-0.03em] tw:text-white">
                  Clear Priorities, Tracked Leads, Steady Growth
                </h3>
                <ul className="tw:mt-7 tw:grid tw:gap-4">
                  {withZonic.map((item) => (
                    <li
                      key={item}
                      className="tw:flex tw:items-start tw:gap-3 tw:text-[17px]/[1.5] tw:text-white/85"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--gold)/20 tw:p-[5px] tw:text-(--gold) tw:[stroke-width:3]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tw:mt-10 tw:text-center">
              <Pill href="#contact">Book a Free Strategy Call</Pill>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        {/* Plans, comparison table and add-ons (owner, 23 Oct 2026). */}
        <HomePricing />

        {/* ============================================================= FAQ */}
        <Section labelledBy="home-faq-h">
          <Wrap>
            <h2
              id="home-faq-h"
              className="tw:mb-9 tw:text-center tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
            >
              Questions About Hiring a Digital Marketing Agency
            </h2>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-xl tw:font-medium tw:tracking-[-0.01em] tw:text-(--ink) tw:max-bsmd:text-[17.5px]">
                    {item.q}
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p
                    className={cx(
                      "tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text)",
                      INLINE_LINK,
                    )}
                  >
                    {item.node ?? item.a}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ============================================================ BLOG */}
        {/* Kit-style blog cards in a Swiper (HomeBlogSlider, client
            component; owner, 20 Oct). Live homepage slider unchanged. */}
        <Section labelledBy="home-blog-h">
          <Wrap>
            <HomeBlogSlider blogs={blogs} />
          </Wrap>
        </Section>

        {/* ========================================================= CONTACT */}
        <Section id="contact" labelledBy="home-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[38%] tw:left-[5%] tw:w-[132px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="14"
                  width="108"
                  height="70"
                  rx="10"
                  fill="#5d8ff2"
                />
                <path
                  d="M10 22 L60 56 L110 22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={6}
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="tw:absolute tw:top-[34%] tw:right-[6%] tw:text-[150px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[110px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="home-pin-contact" />
              </span>
              <h2
                id="home-contact-h"
                className="tw:text-[clamp(34px,4.8vw,74px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Get Your Free <InlineChat id="home-chat-contact" /> Growth Plan
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[680px]")}
              >
                Share a little about your business and the customers you want
                more of. We&apos;ll check your Google profile, rankings and
                website, then send back the first moves worth making. No cost,
                no obligation.
              </p>
              {/* Email and phone. The office/location link was removed from
                  the home contact section (owner, 26 Oct 2026). */}
              <ul className="tw:mx-auto tw:mt-8 tw:grid tw:max-w-[620px] tw:grid-cols-2 tw:gap-3 tw:text-left tw:max-bssm:grid-cols-1">
                {[
                  {
                    Icon: FiMail,
                    k: "Email our team",
                    v: SITE_CONTACT.email,
                    href: SITE_CONTACT.emailHref,
                  },
                  {
                    Icon: FiPhone,
                    k: "Call a strategist",
                    v: SITE_CONTACT.phoneDisplay,
                    href: SITE_CONTACT.phoneHref,
                  },
                ].map(({ Icon, k, v, href }) => (
                  <li key={k}>
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="tw:flex tw:h-full tw:items-start tw:gap-3 tw:rounded-3xl tw:border tw:border-(--line) tw:p-4 tw:transition tw:duration-200 tw:hover:border-(--blue)"
                    >
                      <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-(--blue)">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="tw:grid">
                        <span className="tw:text-[13px] tw:text-(--muted)">
                          {k}
                        </span>
                        <b className="tw:text-[15.5px] tw:leading-snug tw:font-medium tw:text-(--ink)">
                          {v}
                        </b>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tw:mx-auto tw:mt-[34px] tw:max-w-[760px] tw:text-left">
                <ServiceLeadForm
                  formType="home-strategy"
                  badge="Free growth plan"
                  title="Request Your Free Growth Plan"
                  subtitle="One minute to fill in, with nothing to sign."
                  submitText="Send My Request"
                  defaultServices={["Local SEO"]}
                  messageLabel="Which customers do you want more of?"
                  messagePlaceholder="Your business, service area and goals"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Gradient banner above the footer, after the owner's reference:
            blue → violet → pink with grain and hand-drawn loops. */}
        <Section labelledBy="home-banner-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(60%_80%_at_100%_0%,rgba(59,130,246,0.85),transparent_60%),radial-gradient(55%_70%_at_75%_100%,rgba(244,143,203,0.95),transparent_65%),linear-gradient(105deg,#1b10e8_0%,#3d22f0_32%,#8a4cf0_62%,#d47fe0_100%)] tw:px-10 tw:pt-[88px] tw:pb-[84px] tw:text-center tw:text-white tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.22] tw:mix-blend-overlay"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="home-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
              />
              <BannerLoops
                id="home-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="home-banner-h"
                className="tw:mx-auto tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-white tw:max-bsmd:text-balance"
              >
                Be the First Business <br className="tw:max-bsmd:hidden" />
                Your Customers Find
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-white/85">
                Book a free strategy call. We&apos;ll go through your Google
                profile, website and rankings with you and point out the
                quickest wins, with no pressure and no contract.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={SITE_CONTACT.bookCallHref} tone="white" fullOnPhone>
                  Book a Free Strategy Call
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-white/50 tw:px-7 tw:text-base tw:font-medium tw:text-white tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white/10 tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <ul className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-6 tw:gap-y-2 tw:text-[14.5px] tw:text-white/80">
                {[
                  "Free call, no obligation",
                  "Month-to-month plans",
                  "Dover, DE office · clients nationwide",
                ].map((t) => (
                  <li key={t} className="tw:flex tw:items-center tw:gap-2">
                    <FiCheck aria-hidden="true" className="tw:text-(--gold)" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Wrap>
        </Section>
      </main>
      <Footer />
    </>
  );
}
