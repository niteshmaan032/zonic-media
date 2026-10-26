import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiStar,
  FiUnlock,
  FiUsers,
} from "react-icons/fi";
import { FaMicrosoft } from "react-icons/fa";
import { SiApple, SiFacebook, SiGoogle } from "react-icons/si";

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
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { PlatformHub, type HubApp } from "@/components/rd/dfw-kit/hub";
import { AboutCard } from "@/components/rd/dfw-kit/ui";
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
import { PricingSection } from "@/components/rd/home/HomePricing";
import { Stage } from "@/components/rd/delaware/uiBits";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { IndustryIconSvg } from "./icons";
import { ALL_INDUSTRIES, INDUSTRY_FAQS, INDUSTRY_GROUPS } from "./content";
import {
  IntentByTradeUi,
  PlaybookLibraryUi,
  PlaybookPhone,
  SeasonPlanUi,
  TrustSignalsUi,
  industriesStepUis,
} from "./industriesUi";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   INDUSTRIES HUB — redesign draft (23 Oct 2026), /industries-2 (noindex).

   The Dallas–Fort Worth kit with its own hero: copy left and a 3×3 grid of
   industry tiles right (each linking to that industry's page, the centre
   tile a count). Below, the full directory of all 31 industries by group,
   so every industry page keeps its link from the hub. Copy re-optimized 24
   Oct 2026: taglines, FAQs and body are new wording (none from the live
   page), no prices beyond the published plans, no company names (the
   review-site hub uses generic directory tiles).

   Keywords (Semrush US, re-checked 24 Oct 2026; /industries has no ranking
   data): local business marketing 2,900 (KD 39) · home services marketing
   2,400 (KD 33) · home services marketing agency 2,400 (KD 25) · digital
   marketing for contractors 2,400 (KD 17) · contractor marketing 1,900
   (KD 36) · contractor marketing agency 1,600 (KD 21) · marketing for
   contractors 1,600 (KD 29) · home service marketing agency 1,300 (KD 25) ·
   home improvement marketing 880 (KD 3) · home service business marketing
   590 (KD 24) · industries we serve 320 (KD 9). Trade pages keep their own
   head terms; "small business marketing agency" is left to the home page.
--------------------------------------------------------------------------- */

const CONTACT = "#in-contact";
const CTA = "Get My Industry Plan";

const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* ----------------------------------------------------------------- copy */

const byHref = (href: string) => ALL_INDUSTRIES.find((i) => i.href === href)!;

/* Hero grid: eight industries around a count tile. */
const HERO_TILES: { href: string; tone: string; icon: string }[] = [
  {
    href: "/services/roofing-marketing-agency",
    tone: "tw:bg-[#c2410c] tw:text-white",
    icon: "tw:bg-white/15 tw:text-white",
  },
  {
    href: "/services/hvac-marketing-agency",
    tone: "tw:bg-white",
    icon: "tw:bg-(--blue-soft) tw:text-(--blue)",
  },
  {
    href: "/services/plumbing-marketing-agency",
    tone: "tw:bg-(--blue) tw:text-white",
    icon: "tw:bg-white/15 tw:text-white",
  },
  {
    href: "/services/dental-marketing-agency",
    tone: "tw:bg-[#ccfbf1]",
    icon: "tw:bg-white tw:text-[#0f766e]",
  },
  {
    href: "/services/law-firm-marketing-agency",
    tone: "tw:bg-[#ede9fe]",
    icon: "tw:bg-white tw:text-[#5b3df5]",
  },
  {
    href: "/services/real-estate-marketing-agency",
    tone: "tw:bg-white",
    icon: "tw:bg-[#fff1e6] tw:text-[#c2410c]",
  },
  {
    href: "/services/electrician-marketing-agency",
    tone: "tw:bg-(--gold)",
    icon: "tw:bg-white/60 tw:text-(--ink)",
  },
  {
    href: "/services/pest-control-marketing-agency",
    tone: "tw:bg-white",
    icon: "tw:bg-(--green-soft) tw:text-(--green)",
  },
];

type Feature = {
  label: string;
  title: string;
  body: string;
  points: { t: string; d: string }[];
  href: string;
  link: string;
  ui: ReactNode;
};

const FEATURES: Feature[] = [
  {
    label: "Search",
    title: "Pages and Ads Matched to Your Trade's Searches",
    body: "A roofer's best lead types “roof leak repair”; a patient types “emergency dentist open now”. We map the searches, services and towns behind your best jobs, then build pages, ads and AI-ready answers for each one.",
    points: [
      { t: "Trade keyword map", d: "Searches that bring jobs." },
      { t: "Service and town pages", d: "A page per service and town." },
      { t: "Ads by intent", d: "Urgent searches first." },
      { t: "AI search answers", d: "Ready for AI Overviews." },
    ],
    href: "/services/local-seo-for-home-services",
    link: "Local SEO for Home Service Companies",
    ui: <IntentByTradeUi />,
  },
  {
    label: "Trust",
    title: "Reviews and Proof Your Buyers Check First",
    body: "Homeowners look for licensed and insured, patients read reviews before booking, and legal clients compare credentials. We place that proof on your site, Google profile and ads, right where people decide.",
    points: [
      { t: "Reviews and ratings", d: "Asked for after each job." },
      { t: "Licenses and guarantees", d: "Visible where buyers decide." },
      { t: "Financing and offers", d: "Beside the call button." },
      { t: "Real job photos", d: "Your work, never stock." },
    ],
    href: "/services/web-design",
    link: "Web Design for Local Businesses",
    ui: <TrustSignalsUi />,
  },
  {
    label: "Seasons",
    title: "Campaigns Timed to Your Busy Season",
    body: "Storms, heat waves and moving season decide when the phone rings. Ads, posts and offers go live before the rush, and quieter months go into SEO and reviews that keep working all year.",
    points: [
      { t: "Peak-season ads", d: "Live before demand climbs." },
      { t: "Off-season SEO", d: "Rankings built in advance." },
      { t: "Offer calendar", d: "Promotions set early." },
      { t: "Monthly report", d: "Calls and jobs, month by month." },
    ],
    href: "/services/google-ads",
    link: "Google Ads for Local Businesses",
    ui: <SeasonPlanUi />,
  },
];

const WHY = [
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: "Plans written per industry",
    desc: "Pages, offers and campaigns shaped by how your field sells, never a copy-paste template.",
  },
  {
    icon: <FiAward aria-hidden="true" />,
    title: "Specialists in local search",
    desc: "Local search is what we do: 1,500+ Google Business Profiles optimized for businesses in 20+ industries.",
  },
  {
    icon: <FiUnlock aria-hidden="true" />,
    title: "No lock-in contracts",
    desc: "Plans billed month to month and sized to your goals, with every account kept in your name.",
  },
];

const STEPS = [
  {
    tag: "Week 1",
    title: "Benchmark Local Rivals",
    desc: "We line up your Google profile, website and ads against the businesses taking the most jobs in your trade and area.",
  },
  {
    tag: "Week 2",
    title: "Choose Offers and Proof",
    desc: "Offers, reviews and pages picked around what buyers in your field care about most.",
  },
  {
    tag: "Weeks 3–6",
    title: "Publish Trade Pages and Ads",
    desc: "Service and town pages, Google posts, ads and review requests, each one written for your industry.",
    chips: ["Pages", "Posts", "Ads"],
  },
  {
    tag: "Monthly",
    title: "Report and Plan Ahead",
    desc: "A monthly report, with offers and ad spend moved ahead of your busy season each year.",
    chips: ["Calls", "Reviews", "Seasons"],
  },
];

const STEP_TONE = [
  { num: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-(--blue)" },
  { num: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-(--gold)" },
  { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  { num: "tw:bg-(--red) tw:text-white", bg: "tw:bg-(--red)" },
];

/* Generic directory tiles (owner rule: never name review or lead sites);
   only the platforms we manage profiles on directly are named. */
const HUB_LEFT: HubApp[] = [
  { icon: SiGoogle, name: "Google reviews", tone: "google" },
  { icon: SiApple, name: "Apple Maps", tone: "apple" },
  { icon: FiBookOpen, name: "Trade directories", tone: "amber" },
  { icon: FiUsers, name: "Shared lead sites", tone: "indigo" },
];
const HUB_RIGHT: HubApp[] = [
  { icon: SiFacebook, name: "Facebook page", tone: "facebook" },
  { icon: FaMicrosoft, name: "Bing Places", tone: "bing" },
  { icon: FiAward, name: "Professional directories", tone: "emerald" },
  { icon: FiMessageCircle, name: "Community apps", tone: "rose" },
];

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [4, 18],
  [3, 64],
  [46, 7],
  [97, 12],
  [52, 94],
];

const GROUP_TONE = [
  "#c2410c",
  "#2567e8",
  "#15803d",
  "#0e7490",
  "#0d9488",
  "#5b3df5",
  "#65a30d",
  "#475569",
];

/* Contact list beside the plan form: phone, email and office. */
const CONTACT_ITEMS: {
  icon: ReactNode;
  tone: string;
  small: string;
  strong: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: <FiPhone />,
    tone: "tw:bg-[#c2410c] tw:text-white",
    small: "Talk to a strategist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    tone: "tw:bg-(--blue) tw:text-white",
    small: "Send us an email",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    tone: "tw:bg-(--ink) tw:text-white",
    small: "Visit our Dover office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

function ContactList() {
  return (
    <ul className="tw:grid tw:gap-3">
      {CONTACT_ITEMS.map((t) => (
        <li key={t.small}>
          <a
            href={t.href}
            className="tw:flex tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-(--panel) tw:p-4 tw:transition tw:hover:-translate-y-0.5"
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
  );
}

/* ----------------------------------------------------------------- page */

export function IndustriesPage() {
  const steps = industriesStepUis(STEPS);
  return (
    <>
      <main className="dk-root">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_10%_12%,rgba(194,65,12,0.07),transparent_26%),radial-gradient(circle_at_90%_24%,rgba(49,87,245,0.08),transparent_26%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px]"
          aria-labelledby="in-h1"
        >
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {MARKS.map(([x, y], i) => (
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
            <div className="tw:grid tw:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] tw:items-center tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-12">
              <div>
                <Strip
                  as="h1"
                  id="in-h1"
                  size="hero"
                  className="tw:text-balance tw:bssm:text-[clamp(34px,3.8vw,60px)]"
                >
                  Home Services Marketing Agency for Contractors and Local
                  Businesses
                </Strip>
                <p className={cx(LEAD, "tw:mt-7 tw:max-w-[600px]")}>
                  Every trade wins work differently. We plan local SEO, Google
                  Maps, reviews, websites and Google Ads around how your
                  customers search, so contractors, clinics, law firms and other
                  local businesses get more calls from people ready to hire.
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:items-center tw:gap-3">
                  <Pill href={CONTACT} fullOnPhone>
                    {CTA}
                  </Pill>
                  <Pill href="#in-dir-h" tone="outline" size="md" fullOnPhone>
                    Find Your Industry
                  </Pill>
                </div>
                <TrustLogos
                  mapHref={SITE_CONTACT.mapHref}
                  size="row"
                  className="tw:mt-10 tw:justify-start! tw:max-bslg:justify-center!"
                />
              </div>

              {/* Industry grid: eight industries around a count. */}
              <ul
                className="tw:grid tw:grid-cols-3 tw:gap-4 tw:max-bssm:gap-2.5"
                aria-label="Popular industries"
              >
                {HERO_TILES.slice(0, 4).map((t) => (
                  <HeroTile key={t.href} {...t} />
                ))}
                <li className="tw:flex tw:aspect-square tw:flex-col tw:items-center tw:justify-center tw:rounded-[28px] tw:bg-(--ink) tw:p-3 tw:text-center tw:text-white tw:max-bssm:rounded-[20px]">
                  <b className="tw:block tw:text-[clamp(40px,4vw,60px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em] tw:text-(--gold)">
                    {ALL_INDUSTRIES.length}
                  </b>
                  <span className="tw:mt-2 tw:text-[14px]/[1.3] tw:text-white/75 tw:max-bssm:text-[12px]">
                    industry pages
                  </span>
                </li>
                {HERO_TILES.slice(4).map((t) => (
                  <HeroTile key={t.href} {...t} />
                ))}
              </ul>
            </div>
          </Wrap>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="in-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                <Strip
                  id="in-about-h"
                  className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                >
                  <span>Local Business</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Marketing Built</span>{" "}
                  <br className="tw:max-bssm:hidden" />
                  <span>Trade by Trade.</span>
                </Strip>
                <HandArrow className="tw:absolute tw:top-[calc(100%+6px)] tw:left-[32%] tw:w-[180px] tw:max-bslg:hidden" />
              </div>
              <div>
                <Label>Industry marketing</Label>
                <p className={cx(LEAD, "tw:mb-6")}>
                  People pick a roofer, a dentist and a lawyer for different
                  reasons. Some need help within the hour, some compare reviews
                  for weeks, and more of them now ask an AI assistant who to
                  trust.
                </p>
                <p className={cx(LEAD, "tw:mb-8")}>
                  Your plan starts from what buyers in your field search for and
                  believe, whether you run a home services company, a
                  contracting crew, a clinic, a law office or a brokerage.
                </p>
                <Pill href="#in-dir-h" tone="outline">
                  Browse the Industry List
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bssm:mt-[84px] tw:max-bssm:grid-cols-1">
              <RatingBadge
                text="INDUSTRIES WE SERVE • ZONIC MEDIA •"
                className="tw:absolute tw:-top-24 tw:left-[calc(32%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:left-[calc(32%-75px)] tw:max-bssm:-top-16 tw:max-bssm:right-6 tw:max-bssm:left-auto"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                <AboutCard
                  tone="ink"
                  top={
                    <span
                      className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[22px] tw:text-(--gold)"
                      aria-hidden="true"
                    >
                      <FiBookOpen />
                    </span>
                  }
                  kicker="Who we work with"
                  title="Trades, clinics and firms"
                  points={[
                    "Home services and contractors",
                    "Remodeling and construction",
                    "Healthcare, legal and real estate",
                    "Auto, towing and moving",
                  ]}
                  foot="A dedicated marketing page for each"
                />
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label="Zonic Media strategist walking a business owner through their marketing results"
                  ratio="16:9"
                  src="/images/dfw/report-conversation.webp"
                  position="50% 35%"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================= DIRECTORY */}
        <Section labelledBy="in-dir-h" id="industries">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
                <Strip id="in-dir-h">
                  Industries We Serve, Grouped by Trade
                </Strip>
              </div>
              <div className="tw:flex tw:max-w-[460px] tw:flex-[0_1_460px] tw:flex-col tw:items-start tw:gap-[22px]">
                <p className={LEAD}>
                  Open your industry to see the searches, pages and campaigns we
                  use to win its customers.
                </p>
              </div>
            </RowHead>
            <div className="tw:columns-2 tw:gap-6 tw:max-bslg:columns-1">
              {INDUSTRY_GROUPS.map((g, gi) => (
                <section
                  key={g.group}
                  aria-labelledby={`in-g-${gi}`}
                  className="tw:mb-6 tw:break-inside-avoid tw:rounded-(--r-xl) tw:bg-white tw:p-6 tw:max-bssm:p-4"
                >
                  <div className="tw:mb-3 tw:flex tw:items-center tw:justify-between tw:gap-3 tw:px-2">
                    <h3
                      id={`in-g-${gi}`}
                      className="tw:flex tw:items-center tw:gap-2.5 tw:text-[21px]"
                    >
                      <i
                        className="tw:block tw:size-3 tw:rounded-full"
                        style={{ background: GROUP_TONE[gi] }}
                        aria-hidden="true"
                      />
                      {g.group}
                    </h3>
                    <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[13px] tw:font-medium tw:text-(--muted)">
                      {g.items.length}
                    </span>
                  </div>
                  <ul className="tw:grid tw:gap-1">
                    {g.items.map((ind) => (
                      <li key={ind.id}>
                        <Link
                          href={ind.href}
                          className="tw:group tw:flex tw:items-start tw:gap-3.5 tw:rounded-[18px] tw:p-3 tw:transition tw:hover:bg-(--panel)"
                        >
                          <span
                            className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:[&_svg]:size-[22px]"
                            style={
                              {
                                background: `${GROUP_TONE[gi]}14`,
                                color: GROUP_TONE[gi],
                              } as CSSProperties
                            }
                          >
                            <IndustryIconSvg name={ind.icon} />
                          </span>
                          <span className="tw:min-w-0 tw:flex-1">
                            <b className="tw:block tw:text-[17px] tw:font-medium tw:leading-snug">
                              {ind.name} Marketing
                            </b>
                            <span className="tw:mt-0.5 tw:block tw:text-[15px]/[1.5] tw:text-(--text)">
                              {ind.tagline}
                            </span>
                          </span>
                          <FiArrowUpRight
                            aria-hidden="true"
                            className="tw:mt-1 tw:size-[18px] tw:flex-none tw:text-(--muted) tw:transition tw:group-hover:rotate-45 tw:group-hover:text-(--ink)"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== TAILOR */}
        <Section labelledBy="in-tailor-h" tone="white">
          <Wrap>
            <CenterHead
              id="in-tailor-h"
              title="Industry Marketing Shaped Around Your Customers"
            >
              Searches, trust signals and busy seasons differ by industry. Your
              plan accounts for all three.
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
                  <p className={cx(LEAD, "tw:mt-6 tw:max-w-[54ch]")}>
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
                          className="tw:mt-px tw:size-6 tw:flex-none tw:rounded-full tw:bg-(--blue-soft) tw:p-[5px] tw:text-(--blue) tw:[stroke-width:3]"
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
        <Section labelledBy="in-why-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="in-why-h" size="card">
                  Why Contractors and Local Firms Choose Us
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  Local search is all we do, and every plan is written for one
                  trade.
                </p>
                <ol className="tw:grid tw:gap-2">
                  {WHY.map((card, i) => (
                    <li
                      key={card.title}
                      className="tw:grid tw:grid-cols-[40px_minmax(0,1fr)] tw:gap-4 tw:rounded-[18px] tw:px-4 tw:py-3.5 tw:first:bg-(--blue-soft) tw:max-bssm:gap-3 tw:max-bssm:p-3"
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
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(194,65,12,0.12),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(253,193,21,0.18),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                <PlaybookPhone />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="in-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="in-steps-h" className="tw:text-balance">
                  Four Steps to a Marketing Plan for Your Trade
                </Strip>
              </div>
              <Pill href={CONTACT}>{CTA}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {STEPS.map((step, i) => {
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
        <Section labelledBy="in-band-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
              <div className="tw:w-full tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                <PlaybookLibraryUi
                  facts={[
                    {
                      strong: String(ALL_INDUSTRIES.length),
                      label: "Industry pages",
                    },
                    { strong: "20+", label: "Industries served" },
                    { strong: "1,500+", label: "Profiles optimized" },
                  ]}
                />
              </div>
              <div>
                <Strip id="in-band-h" size="card" className="tw:text-white">
                  Home Services Marketing Built From Local Experience
                </Strip>
                <p className="tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Each industry page sets out the searches, pages, trust signals
                  and offers that work in that field. Your plan begins there and
                  is then fitted to your towns and competitors.
                </p>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                  )}
                >
                  Need one service rather than a full plan? Browse our{" "}
                  <Link href="/services">digital marketing services</Link>,
                  begin with{" "}
                  <Link href="/services/local-seo-for-home-services">
                    home service local SEO
                  </Link>
                  , get your{" "}
                  <Link href="/local-seo-google-business-optimization">
                    Google Business Profile optimized
                  </Link>{" "}
                  or have a suspended listing{" "}
                  <Link href="/services/gbp-reinstatement-service">
                    reinstated on Google
                  </Link>
                  .
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
        <Section labelledBy="in-found-h" tone="white">
          <Wrap>
            <CenterHead
              id="in-found-h"
              title="Reviews and Listings Wherever Buyers Compare You"
            >
              Buyers check more than one site before they call. We keep your
              details accurate and your reviews active on Google, map apps,
              trade and professional directories, and the community and social
              pages your industry relies on.
            </CenterHead>
            <PlatformHub
              left={HUB_LEFT}
              right={HUB_RIGHT}
              leftLabel="Maps and trade listings"
              rightLabel="Social and professional listings"
              icon={<FiStar aria-hidden="true" />}
              title="Your reputation"
              sub="accurate on every listing"
            />
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="in-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                <Strip id="in-love-h">
                  What Local Business Owners Say About Us
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
            title: "Contractor and Local Business Marketing Plans",
            lead: "Plans for trades and local practices: start with Maps visibility, then add search ads, more locations and social media as you grow.",
            compareTitle: "Plan Deliverables for Local Businesses",
            compareLead: "See what each plan covers, line by line.",
            addOnsTitle: "Extras for Your Trade",
            addOnsLead:
              "More service pages, towns or campaigns whenever you need them.",
            customTitle: "Run several trades or locations?",
            customText:
              "One plan can cover every service line and branch you run.",
          }}
          idPrefix="in"
          ctaHref={CONTACT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="in-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="in-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                Questions About Marketing for Your Industry
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                Who we work with and how the plan changes by field.
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {INDUSTRY_FAQS.map((item) => (
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
        <Section id="in-contact" labelledBy="in-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[120px] tw:left-[5%] tw:w-[120px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[92px] tw:max-bslg:hidden"
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
                className="tw:absolute tw:top-[96px] tw:right-[6%] tw:text-[130px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="in-pin-contact" />
              </span>
              <h2
                id="in-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                Tell Us About <InlineChat id="in-chat-contact" /> Your Industry
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                Share your trade, the towns you cover and the work you want more
                of. You&apos;ll get a free plan back, plus the local rivals to
                beat.
              </p>
              {/* Contact details on the left of the form (owner rule:
                  every contact block lists phone, email and address). */}
              <div className="tw:mx-auto tw:mt-[34px] tw:grid tw:max-w-[1080px] tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:items-start tw:gap-8 tw:text-left tw:max-bslg:max-w-[760px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-6">
                <ContactList />
                <div className="tw:w-full">
                  <ServiceLeadForm
                    formType="industries"
                    badge="Free consultation"
                    title="Request Your Free Plan"
                    subtitle="We'll reply within one business day."
                    submitText="Get My Plan"
                    serviceOptions={[
                      "Local SEO",
                      "Google My Business (GMB)",
                      "Pay Per Click (PPC)",
                      "Web Design",
                      "Web Development",
                    ]}
                    messagePlaceholder="Tell us your industry and what you'd like to grow"
                  />
                </div>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light gradient (the owner prefers light banners): peach → butter →
            mint, with ink text. */}
        <Section labelledBy="in-close-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(55%_80%_at_100%_0%,rgba(187,247,208,0.85),transparent_62%),radial-gradient(50%_70%_at_0%_100%,rgba(254,215,170,0.85),transparent_65%),linear-gradient(105deg,#ffedd5_0%,#fef3c7_40%,#fef9c3_62%,#dcfce7_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-(--ink) tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.12] tw:mix-blend-multiply"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="in-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="in-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="in-close-h"
                className="tw:mx-auto tw:max-w-[16ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-(--ink) tw:text-balance"
              >
                Win More Jobs in Your Industry This Season
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-(--ink-2)">
                On a free strategy call we show how the top businesses in your
                field win locally, and what it takes to overtake them.
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
                  "Free strategy call",
                  "Benchmark of local rivals",
                  "A plan you can keep",
                  "Billed month to month",
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

/** One industry tile in the hero grid. */
function HeroTile({
  href,
  tone,
  icon,
}: {
  href: string;
  tone: string;
  icon: string;
}) {
  const ind = byHref(href);
  return (
    <li>
      <Link
        href={href}
        className={cx(
          "tw:group tw:flex tw:aspect-square tw:flex-col tw:justify-between tw:rounded-[28px] tw:p-4 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:rounded-[20px] tw:max-bssm:p-3",
          tone,
        )}
      >
        <span className="tw:flex tw:items-start tw:justify-between">
          <span
            className={cx(
              "tw:grid tw:size-12 tw:place-items-center tw:rounded-[16px] tw:[&_svg]:size-6 tw:max-bssm:size-9 tw:max-bssm:rounded-[12px] tw:max-bssm:[&_svg]:size-[18px]",
              icon,
            )}
            aria-hidden="true"
          >
            <IndustryIconSvg name={ind.icon} />
          </span>
          <FiArrowUpRight
            aria-hidden="true"
            className="tw:size-[18px] tw:opacity-60 tw:transition tw:group-hover:rotate-45 tw:group-hover:opacity-100 tw:max-bssm:hidden"
          />
        </span>
        <span className="tw:text-[clamp(14px,1.25vw,18px)] tw:leading-tight tw:font-medium tw:max-bssm:text-[13px]">
          {ind.name}
        </span>
      </Link>
    </li>
  );
}
