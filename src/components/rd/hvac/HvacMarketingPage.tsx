import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiPlus,
  FiRepeat,
  FiSearch,
  FiStar,
  FiTarget,
  FiX,
} from "react-icons/fi";
import {
  MdAcUnit,
  MdAccessTime,
  MdAir,
  MdApartment,
  MdBuild,
  MdHeatPump,
  MdLocalFireDepartment,
  MdOutlineHvac,
} from "react-icons/md";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";
import "@/components/rd/industry/industry.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import RelatedServices from "@/app/components/RelatedServices";
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
import { AvatarPh, Sparks, TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { Stage } from "@/components/rd/delaware/uiBits";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  FAQS,
  LEAD_ROWS,
  SERVICES,
  SPECIALTIES,
  STATES,
  STEPS,
} from "./content";
import {
  AiAnswerUi,
  COLD,
  DemandPeaksUi,
  HOT,
  InlineThermostat,
  SearchDemandUi,
  hvacStepUis,
} from "./hvacUi";
import { MoreLocations } from "@/components/rd/industry/MoreLocations";
import { PALETTES } from "@/components/rd/industry/palettes";
import { FloatBento } from "@/components/rd/industry/ui";
import type { HeroBento } from "@/components/rd/industry/types";
import { GradientBanner } from "@/components/rd/industry/GradientBanner";

/* Hero bento for the centred floating layout (owner, 25 Oct 2026: same
   rules as the industry pages): the two season photos and two growth
   cards, in the HVAC red/sky palette. */
const HVAC_P = PALETTES.redSky;
const HVAC_BENTO: HeroBento = {
  kind: "photos",
  photoA: {
    src: "/images/free-website/free-hvac/ac-repair.webp",
    position: "30% 50%",
    query: "ac repair near me",
  },
  cardA: {
    icon: "snow",
    title: "More AC repair calls",
    sub: "Every summer peak",
  },
  cardB: {
    icon: "flame",
    title: "More furnace jobs",
    sub: "Every winter rush",
  },
  photoB: {
    src: "/images/free-website/free-hvac/furnace-heating.webp",
    position: "72% 50%",
    query: "furnace repair near me",
  },
};

/* ---------------------------------------------------------------------------
   HVAC MARKETING AGENCY — redesign draft v3 (24 Oct 2026),
   /services/hvac-marketing-agency-2 (noindex).

   Owner (24 Oct): v1 carried every live block and felt filled up again.
   v2 is short like the other redesigned pages: important sections only,
   strong UI and photos, a new hero, and on-page work to lift the page from
   positions 30–40. H1 rewritten to the most-searched terms (owner, 24
   Oct): "HVAC marketing agency" 2,900/mo KD 9, "hvac marketing company",
   "marketing for hvac contractors". Owner rule (24 Oct): no copy,
   figures or FAQs from the old page; all copy is fresh from Semrush US
   data (see content.ts). Kept: every key internal link (GBP optimization,
   HVAC SEO, Google Ads, HVAC website design, local SEO for home services,
   AI search, plumbing marketing, GBP reinstatement, web design and all
   seven state pages).
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const AUDIT = "#hv-audit";
const CTA = "Get Free HVAC Audit";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

const SERVICE_ICONS = [
  <FiMapPin key="1" />,
  <FiSearch key="2" />,
  <FiTarget key="3" />,
  <FiMonitor key="4" />,
  <FiStar key="5" />,
  <FiRepeat key="6" />,
];

const SPECIALTY_ICONS = [
  <MdAcUnit key="ac" />,
  <MdLocalFireDepartment key="furnace" />,
  <MdHeatPump key="heatpump" />,
  <MdAccessTime key="emergency" />,
  <MdOutlineHvac key="minisplit" />,
  <MdBuild key="tuneup" />,
  <MdAir key="air" />,
  <MdApartment key="commercial" />,
];

/* Contact tiles beside the audit form: phone and email side by side,
   the address across the full row. HVAC hot/cold icon colours. */
const CONTACT_TILES = [
  {
    icon: <FiPhone />,
    bg: "linear-gradient(135deg,#f97316,#ef4444)",
    small: "Call an HVAC strategist",
    strong: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    bg: "linear-gradient(135deg,#38bdf8,#0284c7)",
    small: "Email us",
    strong: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    bg: "linear-gradient(135deg,#334155,#0c1526)",
    small: "Our office",
    strong: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

/* "+" marks in the hero, the same spots as the /about-2 hero ([left %,
   top %]); hidden on phones. */
const HERO_MARKS: [number, number][] = [
  [4, 20],
  [3, 62],
  [47, 8],
  [96, 14],
  [52, 92],
];

/* Hot / cold alternating tones. */
const TONE = (i: number) =>
  i % 2
    ? "tw:bg-[#e0f2fe] tw:text-[#0369a1]"
    : "tw:bg-[#fee2e2] tw:text-[#b91c1c]";

type Feature = {
  label: string;
  title: string;
  body: ReactNode;
  points: string[];
  cta: string;
  ui: ReactNode;
};

const FEATURES: Feature[] = [
  {
    label: "Map Pack",
    title: "Rank in the Map Pack for “AC Repair Near Me”",
    body: (
      <>
        When the AC quits or the furnace won&apos;t light, homeowners search
        “near me” and pick from the three companies the Map Pack shows. We
        optimize your Google Business Profile, service-area pages and reviews so
        your company is one of those three, for cooling and heating jobs alike.
      </>
    ),
    points: [
      "HVAC categories",
      "Service-area pages",
      "Review requests",
      "Photos & offers",
    ],
    cta: "Check My Map Pack Position",
    ui: <SearchDemandUi />,
  },
  {
    label: "Seasonal timing",
    title: "HVAC PPC Timed to Your Two Peak Seasons",
    body: (
      <>
        Emergency searches turn into booked jobs fastest, so they get their own
        campaigns. Our HVAC PPC runs{" "}
        <Link href="/services/google-ads">Google Ads management</Link> and Local
        Services Ads on those searches, raises budgets before summer and winter,
        and tracks every call to a booked job.
      </>
    ),
    points: [
      "Local Services Ads",
      "Emergency keywords",
      "Call tracking",
      "Budget by season",
    ],
    cta: "Plan My Peak Season",
    ui: <DemandPeaksUi />,
  },
  {
    label: "AI search",
    title: "Get Recommended in ChatGPT and AI Overviews",
    body: (
      <>
        Homeowners now ask AI assistants which HVAC company to call. Our{" "}
        <Link href="/services/ai-seo-services">AI search optimization</Link>{" "}
        makes your business easy to verify, with consistent listings, recent
        reviews and pages that answer real questions.
      </>
    ),
    points: [
      "Consistent listings",
      "Fresh reviews",
      "FAQ answers",
      "Clear service pages",
    ],
    cta: "Audit My AI Visibility",
    ui: <AiAnswerUi />,
  },
];

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

/* ----------------------------------------------------------------- page */

export function HvacMarketingPage() {
  const steps = hvacStepUis();
  return (
    <>
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        {/* v3 hero (owner, 24 Oct): content on the left, a bento grid with
            the two season photos on the right. Fills the screen from 992 px
            (capped at 1080 px) so the next section doesn't peek in. Owner
            (24 Oct): "just like the hero section of about-2", so the same
            background and "+" marks, with a staggered solid-card bento in
            HVAC colours that keeps the two photos. */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_12%_10%,rgba(49,87,245,0.08),transparent_28%),radial-gradient(circle_at_92%_30%,rgba(110,80,247,0.07),transparent_26%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center"
          aria-labelledby="hv-h1"
        >
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
            aria-hidden="true"
          >
            {HERO_MARKS.map(([x, y], i) => (
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
          {/* Centred copy, the bento floating around it (owner, 25 Oct). */}
          <Wrap>
            <div className="tw:relative">
              <FloatBento p={HVAC_P} bento={HVAC_BENTO} part="float" />
              <div className="tw:relative tw:mx-auto tw:max-w-[720px] tw:py-6 tw:text-center tw:min-[1366px]:max-w-[min(720px,calc(100%-480px))] tw:min-[1366px]:py-10 tw:min-[1600px]:max-w-[800px]">
                <Strip
                  as="h1"
                  id="hv-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)] tw:max-bssm:text-[clamp(30px,8vw,34px)]"
                >
                  HVAC <InlineThermostat /> Marketing Agency for
                  Contractors Who Want More Calls &amp; Booked Jobs
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    LINKS,
                    "tw:mx-auto tw:mt-6 tw:max-w-[620px]",
                  )}
                >
                  We turn “AC repair near me” and “furnace repair near me”
                  searches into booked jobs for HVAC contractors, with HVAC SEO,{" "}
                  <Link href="/local-seo-google-business-optimization">
                    Google Business Profile optimization
                  </Link>
                  , HVAC PPC and{" "}
                  <Link href="/services/hvac-website-design">
                    HVAC websites built to get calls
                  </Link>
                  .
                </p>
                <div className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                  <Pill href={AUDIT} fullOnPhone>
                    {CTA}
                  </Pill>
                  <CallPill />
                </div>
                <TrustLogos
                  mapHref={SITE_CONTACT.mapHref}
                  size="row"
                  className="tw:mt-9 tw:justify-center! tw:gap-x-7!"
                />
              </div>
              <FloatBento p={HVAC_P} bento={HVAC_BENTO} part="row" />
            </div>
          </Wrap>
        </section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="hv-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="hv-svc-h" className="tw:text-balance">
                  HVAC Marketing Services That Fill Your Schedule
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>
                  Six services from one HVAC marketing company, tuned to every
                  call.
                </p>
                <div className="tw:mt-6">
                  <Pill href={AUDIT} arrow fullOnPhone>
                    Audit My Full Funnel
                  </Pill>
                </div>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {SERVICES.map((s, i) => (
                <article
                  key={s.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-7 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span
                    className={cx(
                      "tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px] tw:text-white",
                      i % 2 ? "tw:bg-[#0284c7]" : "tw:bg-[#ef4444]",
                    )}
                    aria-hidden="true"
                  >
                    {SERVICE_ICONS[i]}
                  </span>
                  <h3 className="tw:mt-6 tw:text-[22px]/[1.25]">{s.title}</h3>
                  <p className="tw:mt-3 tw:text-[16.5px]/[1.6] tw:text-(--text)">
                    {s.desc}
                  </p>
                  <ul className="tw:mt-5 tw:mb-6 tw:grid tw:gap-2.5 tw:pt-5 tw:[border-top:1px_solid_var(--line)]">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="tw:flex tw:items-center tw:gap-2.5 tw:text-[15.5px] tw:font-medium tw:text-(--ink)"
                      >
                        <span
                          className={cx(
                            "tw:grid tw:size-[22px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px]",
                            TONE(i),
                          )}
                          aria-hidden="true"
                        >
                          <FiCheck strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="tw:group tw:mt-auto tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                  >
                    {s.link}
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

        {/* ======================================================== FEATURES */}
        <Section labelledBy="hv-win-h" tone="white">
          <Wrap>
            <CenterHead
              id="hv-win-h"
              title="How Our HVAC Marketing Company Books More Calls"
            >
              Map Pack rankings, seasonal ads and AI search, working together.
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
                  <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance">
                    {f.title}
                  </h3>
                  <p className={cx(LEAD, LINKS, "tw:mt-5 tw:max-w-[54ch]")}>
                    {f.body}
                  </p>
                  <ul className="tw:mt-6 tw:mb-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:border-t tw:border-(--line) tw:pt-5 tw:max-bssm:grid-cols-1">
                    {f.points.map((p) => (
                      <li
                        key={p}
                        className="tw:flex tw:items-center tw:gap-2.5 tw:text-[16.5px] tw:font-medium tw:text-(--ink-2)"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className={cx(
                            "tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]",
                            TONE(i),
                          )}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Pill href={AUDIT} arrow>
                    {f.cta}
                  </Pill>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ================================================= LEAD GENERATION */}
        <Section labelledBy="hv-leads-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] tw:items-center tw:gap-12 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:px-[18px] tw:max-bssm:py-8">
              <div>
                <Strip
                  id="hv-leads-h"
                  size="card"
                  className="tw:text-balance tw:text-white"
                >
                  HVAC Lead Generation Without Shared Leads
                </Strip>
                <p className="tw:mt-5 tw:max-w-[52ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]">
                  Shared leads go to several contractors at once, so you race to
                  call first and pay whether you book the job or not. We build
                  HVAC leads that come to you alone, from your Map Pack spot,
                  your ads and your website.
                </p>
                <Pill
                  href={AUDIT}
                  tone="white"
                  arrow
                  fullOnPhone
                  className="tw:mt-8"
                >
                  Get More HVAC Leads
                </Pill>
              </div>
              <div className="tw:overflow-x-auto tw:rounded-[24px] tw:bg-white tw:p-2 tw:text-(--ink)">
                <table className="tw:w-full tw:min-w-[460px] tw:border-collapse tw:text-left tw:text-[15px]">
                  <caption className="tw:sr-only">
                    Shared HVAC leads compared with leads you own
                  </caption>
                  <thead>
                    <tr className="tw:text-[13px] tw:text-(--muted)">
                      <th className="tw:px-4 tw:py-3" />
                      <th className="tw:px-4 tw:py-3 tw:font-semibold">
                        Shared leads
                      </th>
                      <th className="tw:rounded-t-[16px] tw:bg-[#fff7ed] tw:px-4 tw:py-3 tw:font-semibold tw:text-[#c2410c]">
                        Your own leads
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {LEAD_ROWS.map(([k, shared, ours], i) => (
                      <tr key={k} className="tw:border-t tw:border-(--line)">
                        <th
                          scope="row"
                          className="tw:px-4 tw:py-3.5 tw:font-semibold"
                        >
                          {k}
                        </th>
                        <td className="tw:px-4 tw:py-3.5 tw:text-(--muted)">
                          <span className="tw:flex tw:items-center tw:gap-2">
                            <FiX
                              aria-hidden="true"
                              className="tw:size-4 tw:flex-none tw:text-(--red)"
                            />
                            {shared}
                          </span>
                        </td>
                        <td
                          className={cx(
                            "tw:bg-[#fff7ed] tw:px-4 tw:py-3.5 tw:font-medium",
                            i === LEAD_ROWS.length - 1 && "tw:rounded-b-[16px]",
                          )}
                        >
                          <span className="tw:flex tw:items-center tw:gap-2">
                            <FiCheck
                              aria-hidden="true"
                              className="tw:size-4 tw:flex-none tw:text-(--green)"
                            />
                            {ours}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ===================================================== SPECIALTIES */}
        <Section labelledBy="hv-spec-h" tone="white">
          <Wrap>
            {/* Owner, 24 Oct: each tile names a service the contractor sells
                and the marketing we run for it (search volumes were dropped as
                not relevant to the reader). */}
            <CenterHead
              id="hv-spec-h"
              title="HVAC Marketing for Every Service You Sell"
            >
              Each service gets its own plan, built around how homeowners buy
              that job.
            </CenterHead>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:gap-6 tw:max-bslg:grid-cols-1">
              <div className="tw:relative tw:min-h-[360px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bslg:aspect-[3/2] tw:max-bslg:min-h-0">
                <Image
                  src="/images/free-website/free-hvac/commercial-hvac.webp"
                  alt="HVAC technician servicing commercial rooftop units, one of the HVAC specialties we market"
                  fill
                  sizes="(max-width: 991px) 100vw, 40vw"
                  className="tw:object-cover"
                />
                <span className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:bg-[linear-gradient(0deg,rgba(12,21,38,0.85),transparent)] tw:px-6 tw:pt-16 tw:pb-6 tw:text-white">
                  <b className="tw:block tw:text-[22px] tw:font-medium tw:tracking-[-0.02em]">
                    Residential and commercial HVAC
                  </b>
                  <span className="tw:text-[15px] tw:text-white/75">
                    Service, installs and maintenance plans
                  </span>
                </span>
              </div>
              <ul className="tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
                {SPECIALTIES.map(([name, tactic], i) => (
                  <li
                    key={name}
                    className="tw:flex tw:items-center tw:gap-4 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[22px]",
                        TONE(i),
                      )}
                      aria-hidden="true"
                    >
                      {SPECIALTY_ICONS[i]}
                    </span>
                    <span className="tw:min-w-0">
                      <h3 className="tw:text-[17.5px]/[1.3]">{name}</h3>
                      <span className="tw:mt-1 tw:block tw:text-[14.5px]/[1.45] tw:text-(--text)">
                        {tactic}
                      </span>
                    </span>
                  </li>
                ))}
                <li className="tw:col-span-2 tw:max-bssm:col-span-1">
                  <Link
                    href={AUDIT}
                    className="tw:group tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[22px] tw:bg-white tw:px-5 tw:py-4 tw:text-[16px] tw:font-medium tw:text-(--ink) tw:ring-1 tw:ring-(--line) tw:transition tw:hover:ring-[#cbd5e1]"
                  >
                    Sell something else? We market it too.
                    <span className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-white tw:transition-transform tw:group-hover:translate-x-[3px]">
                      <FiArrowRight aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="hv-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="hv-steps-h" className="tw:text-balance">
                  Start Your HVAC Marketing in 3 Steps
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>
                  Start before your busy season so ads and rankings are ready.
                </p>
                <div className="tw:mt-6">
                  <CallPill />
                </div>
              </div>
            </RowHead>
            <ol className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1">
              {STEPS.map((s, i) => (
                <li
                  key={s.h}
                  className="tw:flex tw:flex-col tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white"
                >
                  <div className="tw:px-7 tw:pt-7 tw:pb-6">
                    <span
                      className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:text-[18px] tw:font-semibold tw:text-white"
                      style={{ background: [HOT, COLD, "var(--green)"][i] }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="tw:mt-5 tw:text-[23px]/[1.2]">{s.h}</h3>
                    <p className="tw:mt-3 tw:text-[16px]/[1.6] tw:text-(--text)">
                      {s.p}
                    </p>
                  </div>
                  <div
                    className="tw:relative tw:mx-5 tw:mt-auto tw:min-h-[240px] tw:overflow-hidden tw:rounded-t-[28px]"
                    style={{ background: [HOT, COLD, "var(--green)"][i] }}
                  >
                    <div className="tw:absolute tw:top-[26px] tw:right-[22px] tw:-bottom-5 tw:left-[22px] tw:overflow-hidden tw:rounded-[20px] tw:[box-shadow:var(--lift)]">
                      {steps[i]}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Wrap>
        </Section>

        {/* ========================================================== STATES */}
        <Section labelledBy="hv-states-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="hv-states-h" className="tw:text-balance">
                  HVAC Marketing in Your State
                </Strip>
              </div>
              <p
                className={cx(
                  LEAD,
                  LINKS,
                  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                )}
              >
                Each state gets its own plan, built on the playbook behind our{" "}
                <Link href="/services/plumbing-marketing-agency">
                  plumbing marketing agency
                </Link>
                .
              </p>
            </RowHead>
            {/* Seven states: five cards, then a "more" card that opens the
                rest in a popup (owner, 25 Oct). */}
            <ul className="tw:grid tw:grid-cols-3 tw:gap-3 tw:max-bsxl:grid-cols-2 tw:max-bssm:grid-cols-1">
              {STATES.slice(0, 5).map((s, i) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/hvac-marketing-agency/${s.slug}`}
                    className="tw:group tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[22px] tw:bg-(--panel) tw:px-5 tw:py-4 tw:transition tw:hover:-translate-y-0.5 tw:hover:bg-[#fff7ed]"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px]",
                        TONE(i),
                      )}
                      aria-hidden="true"
                    >
                      <FiMapPin />
                    </span>
                    <span className="tw:min-w-0 tw:flex-1">
                      <b className="tw:block tw:text-[17px] tw:font-semibold tw:text-(--ink)">
                        {s.name} HVAC Marketing
                      </b>
                      <span className="tw:block tw:truncate tw:text-[13.5px] tw:text-(--muted)">
                        {s.cities}
                      </span>
                    </span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--blue)"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <MoreLocations
                  items={STATES.slice(5).map((s) => ({
                    name: `${s.name} HVAC Marketing`,
                    href: `/services/hvac-marketing-agency/${s.slug}`,
                    cities: s.cities,
                  }))}
                  title="HVAC Marketing in Every State We Cover"
                  note="Other states? We serve HVAC contractors nationwide."
                  background={`linear-gradient(120deg, ${HOT}, ${COLD})`}
                  pinStyles={[
                    { background: "#ffedd5", color: "#c2410c" },
                    { background: "#dbeafe", color: "#1d4ed8" },
                  ]}
                />
              </li>
            </ul>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="hv-love-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[820px] tw:flex-[1_1_480px]">
                <Strip id="hv-love-h" className="tw:text-balance">
                  What HVAC Contractors Say About Us
                </Strip>
              </div>
              <div className="tw:relative tw:flex-none tw:pt-2">
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
            title: "HVAC Marketing Plans, Month to Month",
            lead: (
              <span className={LINKS}>
                Month to month, with ad spend billed at a 0% markup. Every plan
                covers{" "}
                <Link href="/services/gbp-reinstatement-service">
                  Google Business Profile reinstatement
                </Link>{" "}
                if your listing is ever suspended.
              </span>
            ),
            compareTitle: "Compare HVAC Marketing Plans",
            compareLead: "What each plan covers, from Map Pack to Google Ads.",
            addOnsTitle: "Add Campaigns as You Grow",
            addOnsLead:
              "Extra ad campaigns or service-area pages for busy seasons.",
            customTitle: "Running several branches or states?",
            customText:
              "Tell us your markets and we'll quote a multi-location HVAC plan.",
          }}
          idPrefix="hv"
          ctaHref={AUDIT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="hv-faq-h">
          <Wrap>
            <CenterHead id="hv-faq-h" title="HVAC Marketing Agency FAQs">
              Leads, timelines, costs and AI search, answered.
            </CenterHead>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {FAQS.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    <h3 className="tw:text-xl/[1.35] tw:font-medium tw:tracking-[-0.01em] tw:max-bsmd:text-[17.5px]">
                      {item.q}
                    </h3>
                    <FiPlus
                      aria-hidden="true"
                      className="tw:size-[22px] tw:flex-none tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                    />
                  </summary>
                  <p className="tw:max-w-[76ch] tw:pb-[22px] tw:text-lg/[1.65] tw:text-(--text)">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== AUDIT */}
        <Section id="hv-audit" labelledBy="hv-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="hv-audit-h" size="card" className="tw:text-balance">
                  Get a Free HVAC Marketing Audit Before Your Next Peak
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  See where you rank for your top HVAC searches, how your Google
                  Business Profile,{" "}
                  <Link href="/services/web-design">website design</Link> and
                  reviews compare with the companies above you, and what to fix
                  first.
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {[
                    "Month-to-month plans",
                    "Reinstatement on every plan",
                    "Plans from $297/mo",
                    "0% ad-spend markup",
                  ].map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16px]/[1.35] tw:text-(--ink-2)"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className={cx(
                          "tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]",
                          TONE(i),
                        )}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bsxl:grid-cols-1 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
                  {CONTACT_TILES.map((t, i) => (
                    <li
                      key={t.small}
                      className={cx(
                        i === CONTACT_TILES.length - 1 &&
                          "tw:col-span-2 tw:max-bsxl:col-span-1 tw:max-bslg:col-span-2 tw:max-bssm:col-span-1",
                      )}
                    >
                      <a
                        href={t.href}
                        className="tw:flex tw:h-full tw:items-center tw:gap-3.5 tw:rounded-[20px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line) tw:transition tw:hover:-translate-y-0.5 tw:hover:ring-[#cbd5e1] tw:hover:[box-shadow:0_18px_36px_-26px_rgba(12,21,38,0.45)]"
                        {...(t.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[18px] tw:text-white"
                          style={{ background: t.bg }}
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
              </div>
              <div className="tw:w-full">
                {/* Sitewide form (owner, 24 Oct: the HVAC form's styles live
                    with the old page). formType keeps HVAC leads tagged. */}
                <ServiceLeadForm
                  formType="hvac-marketing"
                  badge="Free HVAC audit"
                  title="Get Your Free HVAC Marketing Audit"
                  subtitle="Free, with no obligation."
                  submitText="Send My Free Audit"
                  messageLabel="Your service area and HVAC specialties"
                  messagePlaceholder="City, the services you want more of, and your peak season"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Dark gradient (owner, 24 Oct): ink with the HVAC red (heat) and
            blue (cold) glowing in from opposite corners. */}
        {/* ========================================================== BANNER */}
        <GradientBanner
          id="hv-close-h"
          title="Be the First Call in Every Heat Wave and Cold Snap"
          lead="Start before your next peak with a free HVAC marketing audit."
          cta={CTA}
          ctaHref={AUDIT}
        />
      </main>
      <RelatedServices current="/services/hvac-marketing-agency" />
      <Footer />
    </>
  );
}
