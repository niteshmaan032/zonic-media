import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBarChart2,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiCrosshair,
  FiFileText,
  FiKey,
  FiLayout,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPercent,
  FiPhone,
  FiPhoneCall,
  FiPlus,
  FiRepeat,
  FiSearch,
} from "react-icons/fi";
import {
  SiGoogle,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglemaps,
  SiGoogletagmanager,
} from "react-icons/si";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import {
  CenterHead,
  Label,
  LEAD,
  Pill,
  RowHead,
  Section,
  Strip,
  TickList,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { PlatformHub, type HubApp } from "@/components/rd/dfw-kit/hub";
import { AboutCard } from "@/components/rd/dfw-kit/ui";
import {
  AvatarPh,
  HandArrow,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { Stage } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  AdStrengthUi,
  AdsDashboardHero,
  ConversionActionsUi,
  InlineAdClick,
  LeadReviewPhone,
  QualityScoreUi,
  ServiceAreaUi,
  googleAdsStepUis,
} from "./googleAdsUi";
import { ADS_FAQS, ADS_STEPS } from "./content";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   GOOGLE ADS SERVICE PAGE — redesign draft (24 Oct 2026),
   /services/google-ads-2 (noindex).

   Built on the web design draft's pattern (centred hero with an animated
   dashboard underneath, about, services, features, journey, process, dark
   card, hub, reviews, pricing, FAQ, contact, light banner) with its own
   UIs, copy and amber/blue/green pillar colours. Every body link the live
   page gives is kept (GBP reinstatement, GBP verification, web design,
   local SEO, HVAC, industries, GBP optimization, LaunchPad).

   Not carried over: the live page's unsourced figures (4.9 rating, the
   $38 / 9.2% / 96 hero metrics, −$412, 12.4%, 1.2s) and the "Certified
   Google Ads Specialists" badge (no certification on file; no Google
   Partner claim anywhere on the site).

   Copy re-researched and rewritten 24 Oct 2026 (content-optimization
   brief): every heading, sentence and FAQ is new wording; no CPC, budget
   or ROI estimates (the hero dashboard's cost figures became calls and
   form leads). The contact block now lists phone, email and address on
   the left of the form.

   Keywords (Semrush US, recorded 24 Oct 2026; Semrush has no ranking data
   for the live URL): google ads agency 9,900 (KD 32) · ppc management
   services 8,100 (KD 34) · google ads management services 2,900 (KD 19) ·
   paid search agency 2,900 (KD 31) · google ads services 1,900 (KD 19) ·
   ppc audit 1,600 (KD 24) · google ads audit 720 (KD 19).
--------------------------------------------------------------------------- */

const CONTACT = "#ga-contact";
const CTA = "Get My Free Google Ads Audit";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";
const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* ----------------------------------------------------------------- copy */

type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  points: string[];
  href: string;
  link: string;
};

const SERVICES: Service[] = [
  {
    icon: <FiSearch />,
    title: "Search Ads for Buyers",
    desc: "Text ads at the top of Google for the searches buyers use, organized into tight ad groups with strong negative lists.",
    points: [
      "Buyer-intent keywords",
      "Weekly negative keywords",
      "Ads written per ad group",
    ],
    href: CONTACT,
    link: "Plan my search campaign",
  },
  {
    icon: <FiCheckCircle />,
    title: "Pay-Per-Lead Local Services Ads",
    desc: "Ads above the normal results for eligible service businesses, billed per lead and managed beside your Google profile.",
    points: [
      "Eligibility and screening help",
      "Leads reviewed for quality",
      "Reviews and profile in sync",
    ],
    href: "/local-seo-google-business-optimization",
    link: "Optimize my Google profile",
  },
  {
    icon: <FiRepeat />,
    title: "Remarketing to Past Visitors",
    desc: "Follow-up ads for people who visited your site but left before they called or filled in a form.",
    points: [
      "Visitor audience lists",
      "Capped ad frequency",
      "Offer-led follow-ups",
    ],
    href: CONTACT,
    link: "Add remarketing",
  },
  {
    icon: <FiLayout />,
    title: "Landing Pages for Ads",
    desc: "A page for each ad group, with the same promise as the ad and a call button at the top.",
    points: [
      "Message matches the ad",
      "Call button up front",
      "Headline tests",
    ],
    href: "/services/web-design",
    link: "See our web design service",
  },
  {
    icon: <FiCrosshair />,
    title: "Call and Lead Tracking",
    desc: "Calls, forms and booked jobs tied to the exact keyword and ad that produced them.",
    points: [
      "Tracking phone numbers",
      "Google tag and GA4",
      "Offline conversion imports",
    ],
    href: CONTACT,
    link: "Fix my tracking",
  },
  {
    icon: <FiClipboard />,
    title: "No-Cost Account Audit",
    desc: "A free review of your current account that shows where clicks are wasted and what is missing.",
    points: [
      "Wasted clicks found",
      "Keyword gaps listed",
      "Tracking issues flagged",
    ],
    href: CONTACT,
    link: "Request my free audit",
  },
];

/* Pillar colours for this page: Google Ads amber, blue and green. */
const ICON_TONES = [
  "tw:bg-[#fbbc04] tw:text-(--ink)",
  "tw:bg-[#1a73e8] tw:text-white",
  "tw:bg-[#188038] tw:text-white",
  "tw:bg-(--ink) tw:text-white",
  "tw:bg-[#fef3c7] tw:text-[#92400e]",
  "tw:bg-[#dcfce7] tw:text-[#166534]",
];

type Feature = {
  label: string;
  title: string;
  body: ReactNode;
  points: { t: string; d: string }[];
  href: string;
  link: string;
  ui: ReactNode;
};

const FEATURES: Feature[] = [
  {
    label: "Campaign setup",
    title: "Keywords Picked for Buying Intent",
    body: (
      <>
        We group the searches your customers type and write ads for each group.
        If your{" "}
        <Link href="/services/gbp-reinstatement-service">
          Google Business Profile is suspended
        </Link>
        , ads keep you visible while we work to restore it.
      </>
    ),
    points: [
      { t: "Keyword research", d: "Buyer searches first." },
      { t: "Account structure", d: "Small, themed ad groups." },
      { t: "Ads and assets", d: "Call, sitelink, location." },
      { t: "Tracking", d: "Live before launch." },
    ],
    href: CONTACT,
    link: "Start my Google Ads",
    ui: <AdStrengthUi />,
  },
  {
    label: "Optimization",
    title: "Better Ad Quality, Less Wasted Spend",
    body: (
      <>
        Weekly search-term reviews, bid changes and ad tests raise your Quality
        Score. Service-area business? We can also sort out{" "}
        <Link href="/services/gmb-verification-help">
          Google Business Profile verification
        </Link>{" "}
        so your free listing backs the ads.
      </>
    ),
    points: [
      { t: "Bid strategy", d: "Matched to your goal." },
      { t: "Negative keywords", d: "Added each week." },
      { t: "Ad tests", d: "Winners stay, losers pause." },
      { t: "Budget pacing", d: "Even spend all month." },
    ],
    href: CONTACT,
    link: "Improve my campaigns",
    ui: <QualityScoreUi />,
  },
  {
    label: "Conversion",
    title: "Leads Traced Back to the Keyword",
    body: (
      <>
        We trace calls, forms and booked jobs to the keyword behind them, and
        our <Link href="/services/web-design">web design team</Link> builds
        landing pages that turn ad visitors into leads.
      </>
    ),
    points: [
      { t: "Call tracking", d: "Ads and website." },
      { t: "Form tracking", d: "Every quote request." },
      { t: "Landing pages", d: "One per ad group." },
      { t: "Booked jobs", d: "Fed back to Google." },
    ],
    href: CONTACT,
    link: "Track my conversions",
    ui: <ConversionActionsUi />,
  },
];

const WHY = [
  {
    icon: <FiPercent aria-hidden="true" />,
    title: "Search terms checked weekly",
    desc: "We block the searches that waste clicks and move budget to the ones that bring calls.",
  },
  {
    icon: <FiKey aria-hidden="true" />,
    title: "The ad account stays yours",
    desc: "Account, data and history are in your name from day one.",
  },
  {
    icon: <FiBarChart2 aria-hidden="true" />,
    title: "Reports that count leads",
    desc: "Each month you see calls, forms and cost per lead, not just clicks.",
  },
];

/* Contact details for the contact block (owner rule: phone, email and
   address on the left of the form). */
const CONTACT_TILES = [
  {
    icon: <FiPhone />,
    tone: "tw:bg-[#188038] tw:text-white",
    small: "Call an ads specialist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    tone: "tw:bg-[#1a73e8] tw:text-white",
    small: "Email us",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-[#fbbc04] tw:text-(--ink)",
    small: "Our office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

const STEP_TONE = [
  { num: "tw:bg-[#fbbc04] tw:text-(--ink)", bg: "tw:bg-[#fbbc04]" },
  { num: "tw:bg-[#1a73e8] tw:text-white", bg: "tw:bg-[#1a73e8]" },
  { num: "tw:bg-[#188038] tw:text-white", bg: "tw:bg-[#188038]" },
  { num: "tw:bg-(--ink) tw:text-white", bg: "tw:bg-(--ink)" },
  { num: "tw:bg-[#ea4335] tw:text-white", bg: "tw:bg-[#ea4335]" },
];

const HUB_LEFT: HubApp[] = [
  { icon: SiGoogle, name: "Google Search", tone: "google" },
  { icon: SiGooglemaps, name: "Google Maps", tone: "maps" },
  { icon: FiCheckCircle, name: "Local Services Ads", tone: "emerald" },
  { icon: FiMonitor, name: "Partner websites", tone: "indigo" },
];
const HUB_RIGHT: HubApp[] = [
  { icon: SiGoogleanalytics, name: "Google Analytics 4", tone: "analytics" },
  { icon: SiGoogletagmanager, name: "Google Tag Manager", tone: "tagmanager" },
  { icon: FiPhoneCall, name: "Call tracking", tone: "calls" },
  { icon: FiFileText, name: "Form tracking", tone: "forms" },
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [6, 14],
  [12, 32],
  [93, 12],
  [88, 30],
  [30, 6],
  [70, 5],
];

/* ----------------------------------------------------------------- page */

export function GoogleAdsPage() {
  const steps = googleAdsStepUis(ADS_STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_14%_10%,rgba(251,188,4,0.13),transparent_26%),radial-gradient(circle_at_86%_8%,rgba(52,168,83,0.09),transparent_24%),linear-gradient(180deg,#fffdf7_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="ga-h1"
        >
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {MARKS.map(([x, y], i) => (
              <i
                key={`${x}-${y}`}
                className={cx(
                  "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#e8a10a] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#e8a10a] tw:after:content-['']",
                  i % 2
                    ? "tw:size-3.5 tw:opacity-45"
                    : "tw:size-2.5 tw:opacity-35",
                )}
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
          </span>

          {/* Centred hero (the web design draft's pattern): copy on top, then
              a wide desktop Google Ads dashboard (owner, 24 Oct). */}
          <Wrap className="tw:text-center">
            <Strip
              as="h1"
              id="ga-h1"
              size="heroWide"
              className="tw:mx-auto tw:max-w-[1000px] tw:text-balance"
            >
              Google Ads <InlineAdClick id="ga-ad-h1" /> Management Services
              That Reach Customers Ready to Call
            </Strip>
            <p
              className={cx(
                LEAD,
                "tw:mx-auto tw:mt-7 tw:max-w-[800px] tw:text-balance",
              )}
            >
              We&apos;re a Google Ads agency for small and mid-size companies.
              We set up and run search campaigns, Local Services Ads and
              remarketing, trace every call and form to the keyword behind it,
              and add 0% markup to your ad spend.
            </p>
            <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href={CONTACT} fullOnPhone>
                {CTA}
              </Pill>
              <Pill
                href={SITE_CONTACT.phoneHref}
                tone="outline"
                size="md"
                fullOnPhone
              >
                <FiPhone aria-hidden="true" />
                Call {SITE_CONTACT.phoneDisplay}
              </Pill>
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-10"
            />

            {/* Wide desktop: a Google Ads dashboard with a strong month. */}
            <div className="tw:mt-16 tw:max-bssm:mt-12">
              <AdsDashboardHero />
            </div>
          </Wrap>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="ga-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip
                  id="ga-about-h"
                  className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                >
                  <span>Pay-Per-Click Ads</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Judged by Calls,</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Not Clicks.</span>
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+6px)] tw:left-[32%] tw:w-[180px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>PPC management for local businesses</Label>
                <p className={cx(LEAD, LINKS, "tw:mb-6")}>
                  Many small business accounts pay for the wrong traffic: broad
                  keywords, no negative lists and calls nobody tracks. We manage
                  ads for{" "}
                  <Link href="/services/industry/local-seo-services-for-hvac">
                    HVAC contractors
                  </Link>
                  , trades, clinics and{" "}
                  <Link href="/industries">other local businesses</Link>,
                  focused on the searches that turn into customers.
                </p>
                <p className={cx(LEAD, LINKS, "tw:mb-8")}>
                  Ads perform best alongside{" "}
                  <Link href="/services/local-seo-for-home-services">
                    local SEO
                  </Link>{" "}
                  and a well-kept{" "}
                  <Link href="/local-seo-google-business-optimization">
                    Google Business Profile
                  </Link>
                  . Launching a new company? Our{" "}
                  <Link href="/services/launchpad">
                    business launch package
                  </Link>{" "}
                  sets up ads, branding and a website together.
                </p>
                <Pill href={CONTACT} tone="outline">
                  Speak With a PPC Specialist
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bssm:mt-[84px]">
              <RatingBadge
                text="GOOGLE ADS • ZONIC MEDIA •"
                className="tw:absolute tw:-top-24 tw:left-[calc(37%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:right-6 tw:max-bslg:left-auto tw:max-bssm:-top-16"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <AboutCard
                  tone="gold"
                  top={
                    <span
                      className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[22px] tw:text-(--gold)"
                      aria-hidden="true"
                    >
                      <SiGoogleads />
                    </span>
                  }
                  kicker="In every account we manage"
                  title="Run for leads, not clicks"
                  points={[
                    "Search campaign management",
                    "Negative keywords every week",
                    "Calls and forms tracked",
                    "A monthly lead report",
                  ]}
                  foot="0% ad-spend markup"
                />
              </div>
              {/* Owner's image (24 Oct). Same width as the first version, height
                  back to the old photo's 460 / 420 px (owner); the image fills
                  the box from the top, so the headline and dashboards stay
                  whole and only the bottom of the desk scene is trimmed.
                  Tablets and phones show the whole 4:3 image. */}
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--panel) tw:max-bsxl:h-[420px] tw:max-bslg:aspect-[1448/1086] tw:max-bslg:h-auto tw:max-bslg:w-full tw:max-bslg:max-w-[560px] tw:max-bslg:justify-self-center">
                <Image
                  src="/images/googleads/google-ads-management-services.webp"
                  alt="Google Ads management services: a campaign dashboard with clicks, conversions and cost per click, plus keyword and audience targeting"
                  fill
                  sizes="(max-width: 991px) 560px, 62vw"
                  className="tw:object-cover tw:object-top"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="ga-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
                <Strip id="ga-svc-h">
                  The Google Ads Services We Manage for You
                </Strip>
              </div>
              <div className="tw:flex tw:max-w-[460px] tw:flex-[0_1_460px] tw:flex-col tw:items-start tw:gap-[22px]">
                <p className={cx(LEAD, LINKS)}>
                  Search, local and remarketing campaigns, run by one in-house
                  team. Want SEO too? Browse{" "}
                  <Link href="/services">all our services</Link>.
                </p>
                <Pill href={CONTACT}>{CTA}</Pill>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {SERVICES.map((card, i) => (
                <article
                  key={card.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-8 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span className="tw:mb-[22px] tw:flex tw:items-center tw:justify-between">
                    <span
                      className={cx(
                        "tw:grid tw:size-[60px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-2xl",
                        ICON_TONES[i],
                      )}
                      aria-hidden="true"
                    >
                      {card.icon}
                    </span>
                    <span className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted)">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <h3 className="tw:text-[23px]/[1.2] tw:max-bssm:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="tw:mt-3 tw:grow tw:text-[17px]/[1.65] tw:text-(--text)">
                    {card.desc}
                  </p>
                  <TickList
                    items={card.points}
                    className="tw:mt-[18px] tw:mb-[22px] tw:min-h-[118px] tw:content-start tw:border-t tw:border-(--line) tw:pt-[18px] tw:text-(--ink-2) tw:max-bssm:min-h-0"
                  />
                  <Link
                    href={card.href}
                    className="tw:group tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                  >
                    {card.link}
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ======================================================= FEATURES */}
        <Section labelledBy="ga-win-h" tone="white">
          <Wrap>
            <CenterHead
              id="ga-win-h"
              title="Google Ads Campaign Management That Cuts Waste"
            >
              Setup, weekly tuning and lead tracking, handled by one team.
            </CenterHead>
            {FEATURES.map((f, i) => (
              <div
                key={f.label}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <Stage flip={i % 2 === 1}>{f.ui}</Stage>
                <div>
                  <Label>{f.label}</Label>
                  <h3 className="tw:text-[clamp(30px,3.4vw,52px)] tw:leading-[1.06] tw:tracking-[-0.03em] tw:text-balance">
                    {f.title}
                  </h3>
                  <p className={cx(LEAD, LINKS, "tw:mt-6 tw:max-w-[54ch]")}>
                    {f.body}
                  </p>
                  <ul className="tw:mt-[26px] tw:mb-7 tw:grid tw:grid-cols-2 tw:gap-x-8 tw:gap-y-[22px] tw:border-t tw:border-(--line) tw:pt-6 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-y-[18px]">
                    {f.points.map((point) => (
                      <li
                        key={point.t}
                        className="tw:flex tw:items-start tw:gap-3"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className="tw:mt-px tw:size-6 tw:flex-none tw:rounded-full tw:bg-[#fef3c7] tw:p-[5px] tw:text-[#92400e] tw:[stroke-width:3]"
                        />
                        <span className="tw:text-[16.5px]/[1.55] tw:text-(--text)">
                          <b className="tw:mb-0.5 tw:block tw:text-lg tw:text-(--ink)">
                            {point.t}
                          </b>
                          {point.d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Pill href={f.href} arrow>
                    {f.link}
                  </Pill>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= JOURNEY */}
        <Section labelledBy="ga-why-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="ga-why-h" size="card">
                  Why Owners Choose Our PPC Management Team
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  Weekly tuning, an account in your name and reports you can
                  read.
                </p>
                <ol className="tw:grid tw:gap-2">
                  {WHY.map((card, i) => (
                    <li
                      key={card.title}
                      className="tw:grid tw:grid-cols-[40px_minmax(0,1fr)] tw:gap-4 tw:rounded-[18px] tw:px-4 tw:py-3.5 tw:first:bg-[#fef3c7] tw:max-bssm:gap-3 tw:max-bssm:p-3"
                      style={
                        {
                          animation: "dk-step-on 9s ease infinite both",
                          animationDelay: `${i * 3}s`,
                        } as CSSProperties
                      }
                    >
                      <span
                        className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:text-[16px] tw:text-(--blue-dark)"
                        style={
                          {
                            animation: "dk-num-on 9s ease infinite both",
                            animationDelay: `${i * 3}s`,
                          } as CSSProperties
                        }
                      >
                        {card.icon}
                      </span>
                      <div>
                        <h3 className="tw:mt-0.5 tw:text-lg">{card.title}</h3>
                        <p className="tw:mt-1 tw:text-lg/[1.65] tw:text-(--text)">
                          {card.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(251,188,4,0.2),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(52,168,83,0.16),transparent_70%),#f5f7fb] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <LeadReviewPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="ga-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="ga-steps-h" className="tw:text-balance">
                  Five Steps From First Audit to Scaled Campaigns
                </Strip>
              </div>
              <Pill href={CONTACT}>{CTA}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {ADS_STEPS.map((step, i) => {
                const tone = STEP_TONE[i % STEP_TONE.length];
                return (
                  <li
                    key={step.title}
                    className="tw:grid tw:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:gap-6 tw:max-bsxl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-3.5"
                  >
                    <div className="tw:relative tw:grid tw:grid-cols-[130px_minmax(0,1fr)_auto] tw:gap-6 tw:rounded-(--r-xl) tw:bg-white tw:px-10 tw:pt-10 tw:pb-9 tw:max-bs2xl:grid-cols-[90px_minmax(0,1fr)_auto] tw:max-bs2xl:pt-12 tw:max-bs2xl:pb-10 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-3.5 tw:max-bssm:px-[26px] tw:max-bssm:pt-8 tw:max-bssm:pb-7">
                      <span
                        className={cx(
                          "tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:text-xl tw:font-semibold tw:max-bssm:size-[52px] tw:max-bssm:text-[17px]",
                          tone.num,
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <Label>{step.tag}</Label>
                        <h3 className="tw:max-w-[16ch] tw:text-[clamp(28px,3vw,46px)] tw:leading-[1.08] tw:tracking-[-0.03em]">
                          {step.title}
                        </h3>
                        <p
                          className={cx(
                            LEAD,
                            "tw:mt-[22px] tw:max-w-[46ch] tw:max-bssm:mt-[18px]",
                          )}
                        >
                          {step.desc}
                        </p>
                        {step.chips?.length ? (
                          <ul className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-2">
                            {step.chips.map((chip) => (
                              <li
                                key={chip}
                                className="tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-1.5 tw:text-[14px] tw:font-medium tw:text-(--ink-2)"
                              >
                                {chip}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <a
                        href={CONTACT}
                        className="tw:grid tw:size-[84px] tw:place-items-center tw:self-end tw:rounded-full tw:border tw:border-[#d3dae6] tw:text-2xl tw:transition tw:duration-200 tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white tw:max-bssm:absolute tw:max-bssm:top-6 tw:max-bssm:right-[22px] tw:max-bssm:size-14 tw:max-bssm:text-xl"
                        aria-label={`Start with: ${step.title}`}
                      >
                        <FiArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                    <div
                      className={cx(
                        "tw:relative tw:min-h-[260px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bssm:min-h-[230px]",
                        tone.bg,
                      )}
                    >
                      <div
                        className={cx(
                          "tw:absolute tw:top-[34px] tw:right-[30px] tw:-bottom-5 tw:left-[30px] tw:overflow-hidden tw:rounded-[22px] tw:[box-shadow:var(--lift)]",
                          i % 2 ? "tw:rotate-3" : "tw:-rotate-3",
                        )}
                      >
                        {steps[i]}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Wrap>
        </Section>

        {/* ======================================================= DARK CARD */}
        <Section labelledBy="ga-band-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <ServiceAreaUi
                  facts={[
                    { strong: "0%", label: "Ad-spend markup" },
                    { strong: "Yours", label: "Account and data" },
                    { strong: "Tracked", label: "Calls from every ad" },
                  ]}
                />
              </div>
              <div>
                <Strip
                  id="ga-band-h"
                  size="card"
                  className="tw:text-balance tw:text-white"
                >
                  Ads Aimed Only at the Areas You Serve
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  We set location targets, ad schedules and exclusions so your
                  budget reaches people who can hire you, not searchers far
                  outside your service area.
                </p>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                  )}
                >
                  Near Philadelphia? See our{" "}
                  <Link href="/services/philadelphia/ppc">
                    Philadelphia PPC management
                  </Link>{" "}
                  and{" "}
                  <Link href="/services/philadelphia/sem">
                    Philadelphia SEM
                  </Link>{" "}
                  pages, or browse the{" "}
                  <Link href="/industries">industries we work with</Link>.
                </p>
                <Pill
                  href={CONTACT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  {CTA}
                </Pill>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ============================================================= HUB */}
        <Section labelledBy="ga-found-h" tone="white">
          <Wrap>
            <CenterHead
              id="ga-found-h"
              title="Where Your Google Ads Show and How Leads Are Measured"
            >
              Ads run on Google Search, Maps and partner sites. Results are
              measured in Google Analytics and Tag Manager, with call and form
              tracking on top.
            </CenterHead>
            <PlatformHub
              left={HUB_LEFT}
              right={HUB_RIGHT}
              leftLabel="Where ads show"
              rightLabel="How results are tracked"
              icon={<SiGoogleads aria-hidden="true" />}
              title="Your campaigns"
              sub="every lead tied to its ad"
            />
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="ga-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="ga-love-h">
                  Reviews From the Business Owners We Serve
                </Strip>
              </div>
              <div className="tw:relative tw:pt-2">
                <span className="tw:flex tw:items-center">
                  <AvatarPh tone="a" ring="var(--bg)" size={70} />
                  <AvatarPh tone="b" ring="var(--bg)" size={70} />
                  <AvatarPh tone="c" ring="var(--bg)" size={70} />
                  <AvatarPh tone="d" ring="var(--bg)" size={70} />
                </span>
                <Sparks className="tw:absolute tw:-top-[34px] tw:-right-16 tw:w-[120px] tw:max-bsmd:hidden" />
              </div>
            </RowHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              <LenisIframeGuard widgetScriptSrc={REVIEWS_WIDGET} />
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <PricingSection
          copy={{
            title: "Google Ads Management Inside Our Growth Plans",
            compareTitle: "Which Plan Covers Your Ads",
            addOnsTitle: "More Campaigns, Pages and Reports",
            customTitle: "Managing several ad accounts?",
          }}
          idPrefix="ga"
          ctaHref={CONTACT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="ga-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="ga-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                PPC Management Questions Owners Ask
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                Timing, budgets, tracking, ownership and Local Services Ads.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {ADS_FAQS.map((item) => (
                <details
                  key={item.question}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    <h3 className="tw:text-xl/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[17.5px]">
                      {item.question}
                    </h3>
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text)">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= CONTACT */}
        <Section id="ga-contact" labelledBy="ga-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              {/* Phone call bubble (left) and target (right). */}
              <svg
                viewBox="0 0 100 100"
                className="tw:absolute tw:top-[56px] tw:left-[5%] tw:w-[104px] tw:-rotate-[12deg] tw:drop-shadow-[0_18px_18px_rgba(24,128,56,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[84px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="44" fill="#34a853" />
                <path
                  d="M36 30c2-2 5-2 6 1l4 9c1 2 0 4-1 5l-4 3c3 6 8 11 14 14l3-4c1-1 3-2 5-1l9 4c3 1 3 4 1 6l-4 4c-3 3-8 4-12 2-12-5-22-15-27-27-2-4-1-9 2-12z"
                  fill="#fff"
                />
              </svg>
              <svg
                viewBox="0 0 100 100"
                className="tw:absolute tw:top-[48px] tw:right-[6%] tw:w-[110px] tw:rotate-[10deg] tw:drop-shadow-[0_18px_18px_rgba(234,67,53,0.22)] tw:max-bsxl:right-[4%] tw:max-bsxl:w-[88px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="44" fill="#ea4335" />
                <circle cx="50" cy="50" r="31" fill="#fff" />
                <circle cx="50" cy="50" r="19" fill="#ea4335" />
                <circle cx="50" cy="50" r="8" fill="#fff" />
              </svg>
              <h2
                id="ga-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em] tw:text-balance"
              >
                Get Your Free PPC <InlineAdClick id="ga-ad-contact" /> Audit
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Tell us about your company and current campaigns. We&apos;ll
                review the account, show where spend is wasted and recommend the
                plan that fits.
              </p>
              {/* Contact details on the left, form on the right (owner rule:
                  every contact block lists phone, email and address on the
                  left). Stacks above the form on tablets and phones. */}
              <div className="tw:mx-auto tw:mt-[34px] tw:grid tw:max-w-[1080px] tw:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] tw:items-start tw:gap-8 tw:text-left tw:max-bslg:max-w-[760px] tw:max-bslg:grid-cols-1">
                <div>
                  <ul className="tw:grid tw:gap-3 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                    {CONTACT_TILES.map((t, i) => (
                      <li
                        key={t.small}
                        className={cx(
                          i === CONTACT_TILES.length - 1 &&
                            "tw:max-bslg:col-span-2 tw:max-bssm:col-span-1",
                        )}
                      >
                        <a
                          href={t.href}
                          className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-[#fef3c7]"
                          {...(t.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          <span
                            className={cx(
                              "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[18px]",
                              t.tone,
                            )}
                            aria-hidden="true"
                          >
                            {t.icon}
                          </span>
                          <span className="tw:min-w-0">
                            <small className="tw:block tw:text-[13px] tw:text-(--muted)">
                              {t.small}
                            </small>
                            <strong className="tw:mt-0.5 tw:block tw:text-[15.5px]/[1.4] tw:font-medium tw:break-words tw:text-(--ink)">
                              {t.strong}
                            </strong>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={cx(
                      LINKS,
                      "tw:mt-5 tw:text-[16px]/[1.6] tw:text-(--text)",
                    )}
                  >
                    Prefer a full form? Use our{" "}
                    <Link href="/contact-us">contact page</Link>.
                  </p>
                </div>
                <div className="tw:w-full">
                  <ServiceLeadForm
                    formType="google-ads"
                    badge="Free audit"
                    title="Tell Us About Your Ads"
                    subtitle="About a minute, no commitment."
                    submitText="Request My Audit"
                    defaultServices={["Google Ads"]}
                    messageLabel="What should your ads do?"
                    messagePlaceholder="Your business, the areas you serve and what you want more of"
                  />
                </div>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (the owner prefers light banners): mint → lemon →
            sky → lilac, with ink text. */}
        <Section labelledBy="ga-close-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(191,219,254,0.85),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(187,247,208,0.85),transparent_65%),linear-gradient(105deg,#dcfce7_0%,#fef9c3_38%,#e0f2fe_72%,#ede9fe_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="ga-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="ga-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="ga-close-h"
                className="tw:mx-auto tw:max-w-[18ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                See What Your Google Ads Account Is Missing
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                Book a free audit. We&apos;ll point out wasted clicks, keyword
                gaps and tracking problems, then show how to get more calls from
                the same account.
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={CONTACT} fullOnPhone>
                  {CTA}
                </Pill>
                <a
                  href={SITE_CONTACT.phoneHref}
                  className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-(--ink)/25 tw:bg-white/60 tw:px-7 tw:text-base tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:max-bssm:w-full"
                >
                  <FiPhone aria-hidden="true" />
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <ul className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-6 tw:gap-y-2 tw:text-[14.5px] tw:text-(--ink-2)">
                {[
                  "Free PPC audit",
                  "0% ad-spend markup",
                  "Month-to-month plans",
                  "You own the account",
                ].map((t) => (
                  <li key={t} className="tw:flex tw:items-center tw:gap-2">
                    <FiCheck aria-hidden="true" className="tw:text-(--green)" />
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
