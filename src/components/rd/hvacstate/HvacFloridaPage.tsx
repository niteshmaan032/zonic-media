import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiMonitor,
  FiPhone,
  FiPlus,
  FiShield,
  FiStar,
  FiTarget,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "@/components/rd/delaware/delaware.css";
import "@/components/rd/industry/industry.css";

import Footer from "@/app/components/Footer";
import LenisIframeGuard from "@/app/components/LenisIframeGuard";
import RelatedServices from "@/app/components/RelatedServices";
import {
  CenterHead,
  LEAD,
  Pill,
  RowHead,
  Section,
  Strip,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  FL_AD_POINTS,
  FL_GROWTH,
  FL_FAQS,
  FL_REGIONS,
  FL_SERVICES,
} from "./florida";
import {
  CORAL,
  FlAdSetupUi,
  FlAiOverviewUi,
  FlMapPackUi,
  FlRegionTile,
  FlReviewFlowUi,
  TEAL,
} from "./floridaUi";
import { PALETTES } from "@/components/rd/industry/palettes";
import { FloatBento } from "@/components/rd/industry/ui";
import type { HeroBento } from "@/components/rd/industry/types";
import { GradientBanner } from "@/components/rd/industry/GradientBanner";

/* Hero tiles for the centred floating layout (owner, 25 Oct 2026: same
   rules as the other industry and state pages). Same four tiles, in the
   teal/coral palette. */
const FL_P = PALETTES.coralTeal;
const FL_BENTO: HeroBento = {
  kind: "tiles",
  wide: {
    icon: "pin",
    title: "Top 3 on Google Maps",
    sub: "In every Florida city you serve, in English and Spanish",
    chips: ["Tampa", "Miami", "Orlando", "Jacksonville", "+ your city"],
  },
  left: {
    icon: "call",
    title: "More booked jobs",
    sub: "Every call tracked from first ring to finished install",
  },
  right: {
    icon: "storm",
    title: "Storm-season ready",
    sub: "Pages and ads live before the calls flood in",
  },
  bottom: {
    title: "A full schedule, all year",
    sub: "Tune-up and membership offers fill the cooler months",
  },
};

/* ---------------------------------------------------------------------------
   FLORIDA HVAC MARKETING — redesign draft (24 Oct 2026),
   /services/hvac-marketing-agency/florida-2 (noindex, canonical to the live
   Florida page).

   Owner: relevant sections only, trending keywords, fresh wording for every
   heading and paragraph (nothing from the live Florida page or the HVAC
   agency draft), new UI components, few figures. Copy and research notes
   live in florida.ts. Every internal link the live page carried is kept,
   with new anchor text.
--------------------------------------------------------------------------- */

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

const AUDIT = "#fl-audit";
const CTA = "Get My Florida HVAC Audit";

const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* "+" marks in the hero, matching the owner-approved /about-2 background. */
const HERO_MARKS: [number, number][] = [
  [4, 20],
  [3, 62],
  [47, 8],
  [96, 14],
  [52, 92],
];

const GROWTH_UIS: Record<string, ReactNode> = {
  maps: <FlMapPackUi />,
  ai: <FlAiOverviewUi />,
  reviews: <FlReviewFlowUi />,
};

const GROWTH_PANELS = [
  "linear-gradient(160deg,#ccfbf1 0%,#f0fdfa 55%,#e0f2fe 100%)",
  "linear-gradient(200deg,#ffedd5 0%,#fff7ed 50%,#f0fdfa 100%)",
  "linear-gradient(160deg,#f0fdfa 0%,#ffffff 50%,#ffedd5 100%)",
];

const SERVICE_ICONS: Record<string, ReactNode> = {
  map: <FiMapPin />,
  seo: <FiGlobe />,
  ads: <FiTarget />,
  web: <FiMonitor />,
  reviews: <FiStar />,
  rescue: <FiShield />,
};

/* Contact details for the audit block: phone, email, office. */
const CONTACT_ROWS: {
  icon: ReactNode;
  color: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: <FiPhone />,
    color: TEAL,
    label: "Call a strategist",
    value: SITE_CONTACT.phoneDisplay,
    href: SITE_CONTACT.phoneHref,
  },
  {
    icon: <FiMail />,
    color: CORAL,
    label: "Email the team",
    value: SITE_CONTACT.email,
    href: SITE_CONTACT.emailHref,
  },
  {
    icon: <FiMapPin />,
    color: "#0c1526",
    label: "Head office",
    value: SITE_CONTACT.address,
    href: SITE_CONTACT.mapHref,
    external: true,
  },
];

/* Teal / coral alternating soft tones. */
const SOFT = (i: number) =>
  i % 2
    ? "tw:bg-[#ccfbf1] tw:text-[#0f766e]"
    : "tw:bg-[#ffedd5] tw:text-[#c2410c]";

function CallPill() {
  return (
    <Pill href={SITE_CONTACT.phoneHref} tone="outline" size="md" fullOnPhone>
      <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
    </Pill>
  );
}

/* ----------------------------------------------------------------- page */

export function HvacFloridaPage() {
  return (
    <>
      <main className="dk-root ind-hcap">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_12%_10%,rgba(49,87,245,0.08),transparent_28%),radial-gradient(circle_at_92%_30%,rgba(110,80,247,0.07),transparent_26%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)] tw:pt-36 tw:pb-(--sec-y) tw:max-bsmd:pt-[120px] tw:bslg:flex tw:bslg:min-h-[min(100svh,1080px)] tw:bslg:items-center tw:bslg:pt-[120px] tw:bslg:pb-[calc(var(--sec-y)+40px)]"
          aria-labelledby="fl-h1"
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
          {/* Centred copy, the tiles floating around it (owner, 25 Oct). */}
          <Wrap>
            <div className="tw:relative">
              <FloatBento p={FL_P} bento={FL_BENTO} part="float" />
              <div className="tw:relative tw:mx-auto tw:max-w-[720px] tw:py-6 tw:text-center tw:min-[1366px]:max-w-[min(720px,calc(100%-480px))] tw:min-[1366px]:py-10 tw:min-[1600px]:max-w-[800px]">
                <Strip
                  as="h1"
                  id="fl-h1"
                  size="heroWide"
                  className="tw:text-balance tw:bssm:text-[clamp(36px,3.85vw,56px)]"
                >
                  Florida HVAC Marketing Agency for{" "}
                  <span className="tw:whitespace-nowrap">Year-Round</span> AC
                  Calls
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    LINKS,
                    "tw:mx-auto tw:mt-6 tw:max-w-[620px]",
                  )}
                >
                  Florida homeowners need cooling all twelve months, and they
                  call whoever Google shows first. We put your company there in
                  Tampa, Miami, Orlando, Jacksonville and the towns around them,
                  using the playbook from our{" "}
                  <Link href="/services/hvac-marketing-agency">
                    HVAC marketing agency
                  </Link>
                  : Map Pack rankings, leaner Google Ads and pages in English
                  and Spanish.
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
              <FloatBento p={FL_P} bento={FL_BENTO} part="row" />
            </div>
          </Wrap>
        </section>

        {/* ======================================================== SERVICES */}
        {/* Owner, 24 Oct: the service cards matter most, built like the
            HVAC agency page's cards (icon, copy, three points, link) in the
            Florida colours. */}
        <Section labelledBy="fl-svc-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="fl-svc-h" className="tw:text-balance">
                  What We Run for Florida HVAC Contractors
                </Strip>
              </div>
              <div className="tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2">
                <p className={LEAD}>
                  One team for search, ads, site and reviews across
                  Florida&apos;s cities.
                </p>
                <div className="tw:mt-6">
                  <Pill href={AUDIT} arrow fullOnPhone>
                    Audit My Florida Marketing
                  </Pill>
                </div>
              </div>
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {FL_SERVICES.map((s, i) => (
                <article
                  key={s.key}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-7 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:px-6"
                >
                  <span
                    className="tw:grid tw:size-[56px] tw:place-items-center tw:rounded-full tw:text-[22px] tw:text-white"
                    style={{ background: i % 2 ? TEAL : CORAL }}
                    aria-hidden="true"
                  >
                    {SERVICE_ICONS[s.key]}
                  </span>
                  <h3 className="tw:mt-6 tw:text-[22px]/[1.25]">{s.title}</h3>
                  <p className="tw:mt-3 tw:text-[16.5px]/[1.6] tw:text-(--text)">
                    {s.body}
                  </p>
                  <ul className="tw:mt-5 tw:mb-6 tw:grid tw:gap-2.5 tw:pt-5 tw:[border-top:1px_solid_var(--line)]">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="tw:flex tw:items-center tw:gap-2.5 tw:text-[15.5px] tw:font-medium tw:text-(--ink)"
                      >
                        <span
                          className={cx(
                            "tw:grid tw:size-[22px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px]",
                            SOFT(i),
                          )}
                          aria-hidden="true"
                        >
                          <FiCheck strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="tw:mt-auto tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-1">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="tw:group tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                      >
                        {l.label}
                        <FiArrowRight
                          aria-hidden="true"
                          className="tw:transition-transform tw:group-hover:translate-x-[3px]"
                        />
                      </Link>
                    ))}
                  </span>
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== GROWTH */}
        {/* Owner, 24 Oct: show how we grow the client (Google Maps
            rankings, AI recommendations, reviews), not when demand peaks.
            Replaces the "What Makes Selling HVAC in Florida Different"
            section. */}
        <Section labelledBy="fl-grow-h" tone="white">
          <Wrap>
            <CenterHead
              id="fl-grow-h"
              title="How We Grow Florida HVAC Companies"
            >
              On the map, in AI answers and in your reviews, in English and
              Spanish.
            </CenterHead>
            {FL_GROWTH.map((g, i) => (
              <div
                key={g.key}
                className={cx(
                  "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                  i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                )}
              >
                <div
                  className={cx(
                    "tw:grid tw:place-items-center tw:rounded-(--r-xl) tw:px-8 tw:py-12 tw:max-bssm:px-4 tw:max-bssm:py-8",
                    i % 2 === 1 && "tw:bslg:order-2",
                  )}
                  style={{ background: GROWTH_PANELS[i] }}
                >
                  {GROWTH_UIS[g.key]}
                </div>
                <div>
                  <h3 className="tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance">
                    {g.title}
                  </h3>
                  <p className={cx(LEAD, "tw:mt-5")}>{g.body}</p>
                  <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                    {g.points.map((t, k) => (
                      <li
                        key={t}
                        className="tw:flex tw:items-center tw:gap-3 tw:text-[16px] tw:font-medium tw:text-(--ink)"
                      >
                        <FiCheck
                          aria-hidden="true"
                          className={cx(
                            "tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]",
                            SOFT(k),
                          )}
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="tw:mt-8">
                    <Pill href={AUDIT} arrow fullOnPhone>
                      {g.cta}
                    </Pill>
                  </div>
                </div>
              </div>
            ))}
          </Wrap>
        </Section>

        {/* ========================================================= AD COST */}
        <Section labelledBy="fl-ads-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10">
              <div>
                <Strip id="fl-ads-h" size="card" className="tw:text-balance">
                  Google Ads That Book Florida AC Jobs
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  Florida&apos;s big metros have crowded AC repair ads, so every
                  campaign is built to turn clicks into booked jobs. Our{" "}
                  <Link href="/services/google-ads">Google Ads management</Link>{" "}
                  runs call-only ads and Local Services Ads city by city, and
                  Map Pack rankings bring in calls you don&apos;t pay per click
                  for.
                </p>
                <ul className="tw:mt-7 tw:grid tw:grid-cols-2 tw:gap-x-6 tw:gap-y-3 tw:max-bssm:grid-cols-1">
                  {FL_AD_POINTS.map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16px] tw:font-medium tw:text-(--ink)"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className={cx(
                          "tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]",
                          SOFT(i),
                        )}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="tw:mt-8">
                  <Pill href={AUDIT} arrow fullOnPhone>
                    Review My Google Ads
                  </Pill>
                </div>
              </div>
              <div className="tw:grid tw:place-items-center tw:rounded-(--r-xl) tw:bg-[linear-gradient(200deg,#ffedd5_0%,#fff7ed_50%,#f0fdfa_100%)] tw:px-8 tw:py-12 tw:max-bssm:px-4 tw:max-bssm:py-8">
                <FlAdSetupUi />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= REGIONS */}
        <Section labelledBy="fl-reg-h" tone="white">
          <Wrap>
            <RowHead align="start">
              <div className="tw:min-w-0 tw:max-w-[760px] tw:flex-[1_1_560px]">
                <Strip id="fl-reg-h" className="tw:text-balance">
                  Florida Regions and Cities We Cover
                </Strip>
              </div>
              <p
                className={cx(
                  LEAD,
                  "tw:max-w-[440px] tw:flex-[0_1_440px] tw:bslg:pt-2",
                )}
              >
                From the Keys to the Panhandle, every region gets its own city
                pages.
              </p>
            </RowHead>
            <ul className="tw:grid tw:grid-cols-3 tw:gap-4 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
              {FL_REGIONS.map((r, i) => (
                <li key={r.name}>
                  <FlRegionTile {...r} index={i} icon={<FiMapPin />} />
                </li>
              ))}
            </ul>
            <Link
              href={AUDIT}
              className="tw:group tw:mt-4 tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[24px] tw:px-6 tw:py-5 tw:text-[17px] tw:font-medium tw:text-white tw:max-bssm:px-5"
              style={{
                background: `linear-gradient(110deg, ${TEAL}, #0f766e)`,
              }}
            >
              Serving a Florida town that isn&apos;t listed? We cover it too.
              <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-(--ink) tw:transition-transform tw:group-hover:translate-x-[3px]">
                <FiArrowRight aria-hidden="true" />
              </span>
            </Link>
          </Wrap>
        </Section>

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="fl-rev-h">
          <Wrap>
            <CenterHead
              id="fl-rev-h"
              title="Reviews From Owners We've Helped Grow"
            >
              Real Google reviews from home service businesses we work with.
            </CenterHead>
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              <LenisIframeGuard widgetScriptSrc={REVIEWS_WIDGET} />
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        <PricingSection
          copy={{
            title: "Florida HVAC Marketing Pricing",
            lead: (
              <span className={LINKS}>
                Plans run month to month. Ad budgets are billed separately at a
                0% markup, and{" "}
                <Link href="/services/gbp-reinstatement-service">
                  getting a suspended profile back
                </Link>{" "}
                is covered on every plan.
              </span>
            ),
            compareTitle: "Compare the Florida Plans",
            compareLead: "From a single city to statewide coverage.",
            addOnsTitle: "Extras for Busy Months",
            addOnsLead:
              "More city pages or ad campaigns for summer and storm season.",
            customTitle: "Several Florida locations?",
            customText:
              "Send us your branches and service areas for a custom quote.",
          }}
          idPrefix="fl"
          ctaHref={AUDIT}
          ctaLabel={CTA}
        />

        {/* ============================================================= FAQ */}
        <Section labelledBy="fl-faq-h" tone="white">
          <Wrap>
            <div className="tw:grid tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:items-start tw:gap-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8">
              <div className="tw:bslg:sticky tw:bslg:top-28">
                <Strip id="fl-faq-h" size="card" className="tw:text-balance">
                  Questions for an HVAC Marketing Consultant in FL
                </Strip>
                <p className={cx(LEAD, "tw:mt-5")}>
                  Costs, cities, Spanish, storms and licensing. Still unsure?
                  Call us.
                </p>
                <div className="tw:mt-7">
                  <CallPill />
                </div>
              </div>
              <div>
                {FL_FAQS.map((item, i) => (
                  <details
                    key={item.q}
                    open={i === 0}
                    className="tw:group tw:mb-3 tw:rounded-[22px] tw:bg-(--panel) tw:px-6 tw:open:bg-[#f0fdfa] tw:max-bssm:px-5"
                  >
                    <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-5 tw:text-(--ink)">
                      <h3 className="tw:text-[18.5px]/[1.35] tw:font-medium tw:max-bsmd:text-[17px]">
                        {item.q}
                      </h3>
                      <span
                        className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:transition-transform tw:duration-200 tw:group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <FiPlus />
                      </span>
                    </summary>
                    <p className="tw:pb-5 tw:text-[16.5px]/[1.65] tw:text-(--text)">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Wrap>
        </Section>

        {/* =========================================================== AUDIT */}
        <Section id="fl-audit" labelledBy="fl-audit-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] tw:items-start tw:gap-12 tw:rounded-[48px] tw:bg-white tw:px-12 tw:py-14 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bslg:px-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:py-10">
              <div>
                <Strip id="fl-audit-h" size="card" className="tw:text-balance">
                  Request Your Free Florida HVAC Marketing Audit
                </Strip>
                <p className={cx(LEAD, LINKS, "tw:mt-5")}>
                  We check your Map Pack spot in each Florida city you serve,
                  your Google profile,{" "}
                  <Link href="/services/web-design">website</Link> and reviews,
                  then show you where those calls are going instead.
                </p>
                <ul className="tw:mt-7 tw:grid tw:gap-3">
                  {[
                    "Every Florida city you serve, checked",
                    "English and Spanish searches covered",
                    "Plans from $297/mo, month to month",
                  ].map((t, i) => (
                    <li
                      key={t}
                      className="tw:flex tw:items-center tw:gap-3 tw:text-[16.5px] tw:text-(--ink-2)"
                    >
                      <span
                        className={cx(
                          "tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px]",
                          SOFT(i),
                        )}
                        aria-hidden="true"
                      >
                        <FiCheck strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                {/* Contact details (owner, 24 Oct: every contact block
                    lists phone, email and address on the left). One panel,
                    three rows with dashed dividers. */}
                <ul className="tw:mt-8 tw:rounded-[24px] tw:bg-(--panel) tw:px-5 tw:py-1.5 tw:max-bssm:px-4">
                  {CONTACT_ROWS.map((c, i) => (
                    <li
                      key={c.label}
                      className={cx(
                        i > 0 &&
                          "tw:[border-top:1.5px_dashed_rgba(12,21,38,0.12)]",
                      )}
                    >
                      <a
                        href={c.href}
                        className="tw:group tw:flex tw:items-center tw:gap-4 tw:py-4"
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        <span
                          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[18px] tw:text-white"
                          style={{ background: c.color }}
                          aria-hidden="true"
                        >
                          {c.icon}
                        </span>
                        <span className="tw:min-w-0 tw:flex-1">
                          <small className="tw:block tw:text-[13px] tw:text-(--muted)">
                            {c.label}
                          </small>
                          <strong className="tw:block tw:text-[16.5px]/[1.4] tw:font-semibold tw:break-words tw:text-(--ink)">
                            {c.value}
                          </strong>
                        </span>
                        <FiArrowRight
                          aria-hidden="true"
                          className="tw:flex-none tw:text-(--muted) tw:transition-transform tw:group-hover:translate-x-[3px] tw:group-hover:text-(--ink)"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw:w-full">
                <ServiceLeadForm
                  formType="hvac-marketing-florida"
                  badge="Free Florida audit"
                  title="Get Your Free Florida HVAC Audit"
                  subtitle="Costs nothing and commits you to nothing."
                  submitText="Send My Florida Audit"
                  messageLabel="Your Florida cities and services"
                  messagePlaceholder="e.g. Tampa and St. Pete, AC repair and new installs"
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* Light banner (default for redesigned pages): sand to Gulf teal. */}
        {/* ========================================================== BANNER */}
        <GradientBanner
          id="fl-close-h"
          title="Turn Florida's Endless Summer Into Booked Jobs"
          lead="Start with a free look at your Map Pack spot in every city you serve."
          cta={CTA}
          ctaHref={AUDIT}
        />
      </main>
      <RelatedServices current="/services/hvac-marketing-agency/florida" />
      <Footer />
    </>
  );
}
