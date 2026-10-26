import Link from "next/link";
import dynamic from "next/dynamic";
import type { CSSProperties } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiStar,
  FiX,
} from "react-icons/fi";

import "@/components/rd/dfw-kit/kit.css";
import "@/components/rd/dfw-kit/ui.css";
import "./delaware.css";

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
import { PlatformHub } from "@/components/rd/dfw-kit/hub";
import { PricingSection } from "@/components/rd/home/HomePricing";
import { AboutCard } from "@/components/rd/dfw-kit/ui";
import {
  AvatarPh,
  GoogleG,
  HandArrow,
  InlineChat,
  InlinePin,
  Ph,
  RatingBadge,
  Sparks,
  TrustLogos,
} from "@/components/rd/dfw-kit/visuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import {
  ConsoleUi,
  DelawareHqCard,
  FeaturePanel,
  GrowthHub,
  LeadsPhone,
  RankBoardUi,
  ResultPanel,
  ResultsPhone,
  ScoreColumnsUi,
  ScoreUi,
  stepUis,
} from "./DelawareUi";
import { BuildReportUi, ScoreTilesUi, WebSitePhone } from "./webUi";
import { MapPackBoardUi, ReportPhone, ScoreRingsUi } from "./wilmingtonUi";
import { ChannelMixUi, ScoreDeltaUi, SocialPostPhone } from "./phlMarketingUi";
import { OrganicSerpPhone, ScoreTableUi, VisibilityRaceUi } from "./phlSeoUi";
import { CallAdPhone, RoasBoardUi, ScoreBulletUi } from "./phlPpcUi";
import { BlendedBoardUi, ScoreRadarUi, SemReportPhone } from "./phlSemUi";
import { BoroughBoardUi, ScoreSlopeUi, TextBackPhone } from "./nycMarketingUi";
import {
  ProfileInsightsUi,
  ScoreDumbbellUi,
  VoiceSearchPhone,
} from "./nycSeoUi";
import { BookingPhone, RelaunchUi, ScoreNeedlesUi } from "./nycWebUi";
import type { DelawareData, DelawareExtras, DelawareKind } from "./types";

const ServiceLeadForm = dynamic(
  () => import("@/app/components/ServiceLeadForm"),
);

/* ---------------------------------------------------------------------------
   DELAWARE LOCATION PAGES — redesign drafts (22 Oct 2026).

   Exactly the Dallas–Fort Worth section pattern (owner: "same sections
   pattern but different content"), in the same order:
     1 hero + bento   2 about + photo row   3 services   4 white "how we
     win" band (3 rows)   5 journey card (list + phone)   6 4-step process
     7 dark card   8 hub   9 reviews   10 banner / pricing slot   11 FAQ
     12 contact   13 closing banner (the /home2 gradient card)
   Every heading, paragraph, FAQ and link is the live Delaware page's own;
   nothing is copied from the DFW pages, and the UI demos are new
   (./DelawareUi.tsx). Where each Delaware block went:
     hero.stats → bento · results → 4 · why (h2, lead, 3 reasons) → 5, with
     the showcase stats (or the rank tracker) on the phone · process → 6
     (step 1 shows the free-audit score) · band + console → 7 · engine +
     grow links → 8 · [marketing: "SEO + Web Design" banner] + compare → 10
     · faqs → 11 · form + the audit checklist → 12 · free-audit banner → 13.

   Drafts: the routes are noindex and the live pages are untouched.
--------------------------------------------------------------------------- */

const CONTACT = "#de-contact";

/* Hero heading: the map pin sits right after the place name, as on the
   Dallas pages (owner, 23 Oct 2026). Decorative and aria-hidden, so the H1
   text is unchanged; no pin if the place is not in the first line. */
const PLACE: Record<DelawareKind, string> = {
  marketing: "Delaware",
  seo: "Delaware",
  web: "Delaware",
  wilmington: "Wilmington",
  "phl-marketing": "Philadelphia",
  "phl-seo": "Philadelphia",
  "phl-ppc": "Philadelphia",
  "phl-sem": "Philadelphia",
  "nyc-marketing": "NYC",
  "nyc-seo": "NYC",
  "nyc-web": "NYC",
};

function withPin(line: string, place: string) {
  const at = line.indexOf(place);
  if (at < 0) return line;
  const end = at + place.length;
  return (
    <>
      {line.slice(0, end)} <InlinePin id="de-pin-hero" />
      {line.slice(end)}
    </>
  );
}

/* No kicker labels above section headings (owner, 22 Oct 2026). Kept, as on
   the Dallas pages: the label over the about copy, the feature-row labels
   and the process-step timing ("Week 1"). */

/** Inline links inside page copy (the live pages style them with their
    own CSS, which these drafts don't load). */
const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";
const LINKS_DARK =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/40 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

/* Hero background "+" marks (% of the hero box). */
const MARKS: [number, number][] = [
  [6, 18],
  [13, 34],
  [3, 52],
  [11, 66],
  [94, 16],
  [87, 31],
  [97, 47],
  [89, 63],
  [30, 8],
  [70, 10],
];

const BENTO_CARD =
  "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:px-7 tw:py-[30px] tw:max-bs2xl:px-[22px] tw:max-bs2xl:py-[26px] tw:max-bsxl:flex-[0_0_250px] tw:max-bsxl:snap-center tw:max-bssm:basis-[236px] tw:max-bssm:px-[22px] tw:max-bssm:py-6";
const BIG =
  "tw:block tw:text-[clamp(40px,4vw,60px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]";
const TAG =
  "tw:rounded-full tw:px-[13px] tw:py-1.5 tw:text-[13.5px] tw:leading-[1.3] tw:font-medium tw:whitespace-nowrap tw:text-(--ink) tw:nth-[3n+1]:-rotate-4 tw:nth-[3n+2]:rotate-3 tw:nth-[3n]:-rotate-[1.5deg] tw:max-bs2xl:px-3 tw:max-bs2xl:text-[13px] tw:max-bssm:px-[11px] tw:max-bssm:py-[5px] tw:max-bssm:text-[12.5px]";
const TAG_TONES = [
  "tw:bg-(--gold)",
  "tw:bg-white",
  "tw:bg-[#b8eccb]",
  "tw:bg-white",
  "tw:bg-[#cddcfb]",
  "tw:bg-white",
];

/* Hero pillars: a Delaware palette of their own (owner: not the Dallas
   blue / lime / gold / ink). */
const PILLAR = {
  a: "tw:bg-[#5b3df5] tw:text-white",
  b: "tw:bg-[#c9f0dc] tw:text-(--ink)",
  c: "tw:bg-[#ffd9c7] tw:text-(--ink)",
  d: "tw:bg-[#0e3b43] tw:text-white",
};
const PILLAR_RING = "#5b3df5";

/* Rating shown in the hero (owner, 22 Oct 2026: Google, not Clutch). */
const GOOGLE_RATING = {
  num: "5.0",
  label: "Average rating from our Google reviews",
};

const REVIEWS_WIDGET =
  "https://cdn.trustindex.io/loader.js?bedc2ba73f755349bf36a19f52c";

/* Service icon colours by position (the data only says blue/gold). */
const ICON_TONES = [
  "tw:bg-(--blue) tw:text-white",
  "tw:bg-(--gold) tw:text-(--ink)",
  "tw:bg-(--ink) tw:text-white",
  "tw:bg-(--green) tw:text-white",
  "tw:bg-(--red) tw:text-white",
  "tw:bg-(--blue-soft) tw:text-(--blue)",
];

const STEP_TONE = [
  { num: "tw:bg-(--blue) tw:text-white", bg: "tw:bg-(--blue)" },
  { num: "tw:bg-(--gold) tw:text-(--ink)", bg: "tw:bg-(--gold)" },
  { num: "tw:bg-(--green) tw:text-white", bg: "tw:bg-(--green)" },
  { num: "tw:bg-(--red) tw:text-white", bg: "tw:bg-(--red)" },
];

const CONSOLE_TOAST = {
  marketing: { t: "New lead tracked", d: "Google Ads · just now" },
  seo: { t: "New call from Maps", d: "Dover · just now" },
  wilmington: { t: "New call from Maps", d: "Wilmington · just now" },
  web: { t: "Form submitted", d: "Mobile · just now" },
};

export function DelawareLanding({
  data,
  extras,
}: {
  data: DelawareData;
  extras: DelawareExtras;
}) {
  const {
    hero,
    about,
    services,
    band,
    process,
    results,
    compare,
    why,
    engine,
    faqs,
    grow,
    form,
  } = data;
  const { kind } = extras;
  const steps = stepUis(kind, process, why.banner.audit);
  const pillarBg = extras.pillars;
  const ring = pillarBg?.[0] ?? PILLAR_RING;
  const pill = (i: 0 | 1 | 2 | 3) =>
    pillarBg ? { backgroundColor: pillarBg[i] } : undefined;
  // hero.stats[1] is the live page's Clutch rating; the Google rating replaces it.
  const [s0, , s2, s3] = hero.stats;
  const aboutPhoto =
    extras.aboutPhoto ?? data.showcase?.image ?? about.collageB;

  return (
    <>
      <main className="dk-root loc-page">
        {/* ============================================================ HERO */}
        <section
          className="tw:relative tw:isolate tw:overflow-clip tw:[background:radial-gradient(circle_at_16%_12%,rgba(49,87,245,0.07),transparent_26%),radial-gradient(circle_at_88%_6%,rgba(110,80,247,0.065),transparent_22%),linear-gradient(180deg,#fdfdff_0%,#f9fbff_60%,#fff_100%)] tw:pt-36 tw:pb-(--sec-y) tw:text-center tw:max-bsmd:pt-[120px]"
          aria-labelledby="de-h1"
        >
          <span className="tw:pointer-events-none tw:absolute tw:top-[175px] tw:-left-[275px] tw:-z-1 tw:size-[600px] tw:rounded-full tw:bg-[radial-gradient(circle,rgba(80,112,255,0.09)_0%,rgba(80,112,255,0.09)_30%,transparent_68%)]" />
          <span className="tw:pointer-events-none tw:absolute tw:top-[365px] tw:-right-[295px] tw:-z-1 tw:size-[600px] tw:rounded-full tw:bg-[radial-gradient(circle,rgba(135,92,255,0.09)_0%,rgba(135,92,255,0.09)_30%,transparent_68%)]" />
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
            <Strip as="h1" id="de-h1" size="hero">
              {withPin(hero.h1Start, PLACE[kind])}{" "}
              <br className="tw:max-bssm:hidden" />
              {hero.h1Highlight}
              {hero.h1End ? ` ${hero.h1End}` : null}
            </Strip>
            <p
              className={cx(
                LEAD,
                LINKS,
                "tw:mx-auto tw:mt-7 tw:max-w-[860px] tw:text-balance",
              )}
            >
              {hero.sub}
            </p>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              className="tw:mt-[30px]"
            />
            <div className="tw:mt-[30px] tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
              <Pill href={CONTACT} fullOnPhone>
                {hero.cta}
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
          </Wrap>

          {/* Bento: the page's four hero stats. */}
          <div className="tw:mt-1 tw:grid tw:grid-cols-4 tw:items-end tw:gap-6 tw:px-(--inset) tw:text-left tw:max-bs2xl:gap-[18px] tw:max-bsxl:flex tw:max-bsxl:snap-x tw:max-bsxl:snap-mandatory tw:max-bsxl:overflow-x-auto tw:max-bsxl:pb-1.5 tw:max-bsxl:[scrollbar-width:none] tw:max-bssm:mt-4 tw:[&::-webkit-scrollbar]:hidden">
            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[345px] tw:justify-between tw:max-bssm:h-[315px]",
                PILLAR.a,
              )}
              style={pill(0)}
            >
              <span className="tw:flex tw:items-center">
                <AvatarPh tone="a" ring={ring} />
                <AvatarPh tone="b" ring={ring} />
                <AvatarPh tone="c" ring={ring} />
                <span
                  className="tw:-ml-3 tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:border-3 tw:bg-(--gold) tw:text-xl tw:text-(--ink)"
                  style={{ borderColor: ring }}
                  aria-hidden="true"
                >
                  {s0.icon}
                </span>
              </span>
              <div>
                <p className="tw:mb-2.5 tw:text-[15.5px]/[1.45] tw:text-white/80">
                  {s0.label}
                </p>
                <b className={BIG}>{s0.num}</b>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[285px] tw:items-center tw:justify-center tw:text-center tw:max-bssm:h-[265px]",
                PILLAR.b,
              )}
              style={pill(1)}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white/55 tw:text-[23px] tw:text-(--ink)"
                aria-hidden="true"
              >
                {s2.icon}
              </span>
              <b className={cx(BIG, "tw:mt-5")}>{s2.num}</b>
              <p className="tw:mt-2.5 tw:text-[15.5px]/[1.45] tw:text-(--ink)/70">
                {s2.label}
              </p>
            </div>

            {/* Google rating (replaces the page's Clutch stat, owner 22 Oct). */}
            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[380px] tw:justify-between tw:max-bssm:h-[345px]",
                PILLAR.c,
              )}
              style={pill(2)}
            >
              <span
                className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white"
                aria-hidden="true"
              >
                <GoogleG className="tw:size-7" />
              </span>
              <div>
                <b className={BIG}>{GOOGLE_RATING.num}</b>
                <span
                  className="tw:mt-3.5 tw:mb-2.5 tw:flex tw:gap-1"
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar
                      key={n}
                      className="tw:size-4 tw:fill-[#f4b400] tw:text-[#f4b400]"
                    />
                  ))}
                </span>
                <p className="tw:text-[15.5px]/[1.45]">{GOOGLE_RATING.label}</p>
              </div>
            </div>

            <div
              className={cx(
                BENTO_CARD,
                "tw:h-[420px] tw:justify-start tw:max-bssm:h-[390px]",
                PILLAR.d,
              )}
              style={pill(3)}
            >
              <b className="tw:block tw:text-[clamp(50px,4.6vw,70px)] tw:leading-none tw:font-medium tw:tracking-[-0.03em]">
                {s3.num}
              </b>
              <p className="tw:mt-4 tw:max-w-[13ch] tw:text-[clamp(19px,1.6vw,24px)]/[1.3]">
                {s3.label}
              </p>
              {/* First five industries; the full list sits under the hub. */}
              <ul
                className="tw:absolute tw:right-[22px] tw:bottom-[22px] tw:left-[22px] tw:flex tw:flex-wrap tw:content-end tw:gap-x-1.5 tw:gap-y-[7px] tw:max-bssm:right-[18px] tw:max-bssm:bottom-[18px] tw:max-bssm:left-[18px]"
                aria-label={engine.chipsLabel}
              >
                {engine.chips.slice(0, 5).map((chip, i) => (
                  <li
                    key={chip}
                    className={cx(TAG, TAG_TONES[i % TAG_TONES.length])}
                  >
                    {chip}
                  </li>
                ))}
                <li
                  className={cx(
                    TAG,
                    "tw:border tw:border-dashed tw:border-white/45 tw:text-white/85",
                  )}
                >
                  + more
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================== ABOUT */}
        <Section labelledBy="de-about-h">
          <Wrap>
            <div className="tw:grid tw:grid-cols-2 tw:items-start tw:gap-14 tw:max-bsxl:gap-10 tw:max-bslg:grid-cols-1">
              <div className="tw:relative">
                {/* No blue accent; with `aboutTitle` lines it uses the Dallas
                    heading size (owner, 22 Oct). */}
                {extras.aboutTitle ? (
                  /* Dallas size, capped between 992 and 1400 px so each
                     line still fits the half-width column. */
                  <Strip
                    id="de-about-h"
                    className="tw:bslg:text-[clamp(34px,min(4.6vw,calc((100vw_-_256px)/19)),62px)]"
                  >
                    {extras.aboutTitle.map((line, i) => (
                      <span key={line}>
                        {i ? " " : null}
                        {i ? <br className="tw:max-bssm:hidden" /> : null}
                        {line}
                      </span>
                    ))}
                  </Strip>
                ) : (
                  <Strip id="de-about-h" size="card">
                    {about.h2Start} {about.h2Highlight}
                  </Strip>
                )}
                <HandArrow
                  className={cx(
                    "tw:absolute tw:left-[32%] tw:max-bslg:hidden",
                    // A three-line heading leaves less room above the badge.
                    extras.aboutTitle
                      ? "tw:top-[calc(100%+6px)] tw:w-[180px]"
                      : "tw:top-[calc(100%+18px)] tw:w-[230px]",
                  )}
                />
              </div>
              <div>
                <Label>{about.eyebrow}</Label>
                {about.leads.map((lead, i) => (
                  <p key={i} className={cx(LEAD, LINKS, "tw:mb-6")}>
                    {lead}
                  </p>
                ))}
                {about.checks.length ? (
                  <TickList
                    items={about.checks}
                    className="tw:mb-8 tw:grid-cols-2 tw:gap-x-6 tw:border-t tw:border-(--line) tw:pt-6 tw:text-(--ink-2) tw:max-bssm:grid-cols-1"
                  />
                ) : null}
                <Pill href="/about" tone="outline">
                  More About Zonic Media
                </Pill>
              </div>
            </div>

            <div className="tw:relative tw:mt-[110px] tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] tw:gap-6 tw:max-bssm:mt-[84px] tw:max-bssm:grid-cols-1">
              <RatingBadge
                text={about.badgeText.toUpperCase()}
                className="tw:absolute tw:-top-24 tw:left-[calc(32%-96px)] tw:z-2 tw:max-bslg:-top-[75px] tw:max-bslg:left-[calc(32%-75px)] tw:max-bssm:-top-16 tw:max-bssm:right-6 tw:max-bssm:left-auto"
              />
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-auto">
                {extras.aboutCard ? (
                  <AboutCard
                    tone="ink"
                    top={
                      <span
                        className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[22px] tw:text-(--gold)"
                        aria-hidden="true"
                      >
                        <FiMapPin />
                      </span>
                    }
                    kicker={extras.aboutCard.kicker}
                    title={extras.aboutCard.title}
                    points={extras.aboutCard.points}
                    foot={extras.aboutCard.foot}
                  />
                ) : (
                  <DelawareHqCard
                    kind={kind}
                    facts={[hero.floatA, hero.floatB]}
                  />
                )}
              </div>
              <div className="tw:relative tw:h-[460px] tw:overflow-hidden tw:rounded-(--r-xl) tw:max-bsxl:h-[420px] tw:max-bssm:h-[280px]">
                <Ph
                  label={aboutPhoto.alt}
                  ratio="16:9"
                  src={aboutPhoto.src}
                  position={extras.aboutPhoto?.position}
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ======================================================== SERVICES */}
        <Section labelledBy="de-svc-h">
          <Wrap>
            <RowHead align="start">
              {/* Basis keeps the heading and its paragraph on one row, as on
                  the Dallas pages; the heading wraps instead. */}
              <div className="tw:min-w-0 tw:max-w-[860px] tw:flex-[1_1_560px]">
                <Strip id="de-svc-h">{services.h2}</Strip>
              </div>
              {services.lead ? (
                <div className="tw:flex tw:max-w-[460px] tw:flex-[0_1_460px] tw:flex-col tw:items-start tw:gap-[22px]">
                  <p className={cx(LEAD, LINKS)}>{services.lead}</p>
                  <Pill href={CONTACT}>{hero.cta}</Pill>
                </div>
              ) : (
                <Pill href="/services" arrow>
                  View all services
                </Pill>
              )}
            </RowHead>
            <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
              {services.cards.map((card, i) => (
                <article
                  key={card.title}
                  className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:px-7 tw:pt-7 tw:pb-8 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:shadow-[0_26px_50px_-30px_rgba(12,21,38,0.28)] tw:max-bssm:px-6"
                >
                  <span className="tw:mb-[22px] tw:flex tw:items-center tw:justify-between">
                    <span
                      className={cx(
                        "tw:grid tw:size-[60px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-2xl",
                        ICON_TONES[i % ICON_TONES.length],
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
                  {card.points?.length ? (
                    <>
                      <p
                        className={cx(
                          LINKS,
                          "tw:mt-3 tw:grow tw:text-[17px]/[1.65] tw:text-(--text)",
                        )}
                      >
                        {card.desc}
                      </p>
                      <TickList
                        items={card.points}
                        className="tw:mt-[18px] tw:mb-[22px] tw:min-h-[118px] tw:content-start tw:border-t tw:border-(--line) tw:pt-[18px] tw:text-(--ink-2) tw:max-bssm:min-h-0"
                      />
                      {card.href ? (
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
                      ) : null}
                    </>
                  ) : (
                    <p
                      className={cx(
                        LINKS,
                        "tw:mt-3 tw:border-t tw:border-(--line) tw:pt-4 tw:text-[17px]/[1.65] tw:text-(--text)",
                      )}
                    >
                      {card.desc}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </Wrap>
        </Section>

        {/* ======================================================= HOW WE WIN */}
        {extras.features ? (
          /* Dallas features pattern: label, title, body, four points, link
             and a UI panel per row (digital-marketing page). */
          <Section labelledBy="de-res-h" tone="white">
            <Wrap>
              <CenterHead id="de-res-h" title={extras.features.h2}>
                <span className={LINKS}>{extras.features.lead}</span>
              </CenterHead>
              {extras.features.items.map((f, i) => (
                <div
                  key={f.label}
                  className={cx(
                    "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                    i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                  )}
                >
                  <FeaturePanel ui={f.ui} flip={i % 2 === 1} />
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
        ) : (
          <Section labelledBy="de-res-h" tone="white">
            <Wrap>
              <CenterHead id="de-res-h" title={results.h2}>
                {results.lead ? (
                  <span className={LINKS}>{results.lead}</span>
                ) : null}
              </CenterHead>
              {results.cards.map((card, i) => (
                <div
                  key={card.industry}
                  className={cx(
                    "tw:grid tw:grid-cols-2 tw:items-center tw:gap-16 tw:max-bslg:grid-cols-1 tw:max-bslg:gap-9",
                    i > 0 && "tw:mt-16 tw:max-bslg:mt-[72px]",
                  )}
                >
                  <ResultPanel kind={kind} card={card} i={i} />
                  <div>
                    <p className="tw:mb-4 tw:flex tw:items-center tw:gap-2.5 tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
                      <span
                        className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[15px] tw:text-(--blue)"
                        aria-hidden="true"
                      >
                        {card.icon}
                      </span>
                      {card.industry}
                    </p>
                    <p className="tw:text-[clamp(56px,6vw,92px)] tw:leading-none tw:font-medium tw:tracking-[-0.04em] tw:text-(--blue)">
                      {card.metric}
                    </p>
                    <h3 className="tw:mt-3 tw:text-[clamp(28px,3vw,44px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance">
                      {card.label}
                    </h3>
                    <p
                      className={cx(
                        LEAD,
                        LINKS,
                        "tw:mt-6 tw:max-w-[54ch] tw:border-t tw:border-(--line) tw:pt-6",
                      )}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Wrap>
          </Section>
        )}

        {/* ========================================================= JOURNEY */}
        <Section labelledBy="de-why-h">
          <Wrap flushOnPhone>
            <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1">
              <div className="tw:px-11 tw:pt-12 tw:pb-11 tw:max-bssm:px-[22px] tw:max-bssm:pt-[30px] tw:max-bssm:pb-[26px]">
                <Strip id="de-why-h" size="card">
                  {why.h2}
                </Strip>
                <p
                  className={cx(
                    LEAD,
                    "tw:mt-[22px] tw:mb-[26px] tw:max-w-[54ch]",
                  )}
                >
                  {why.lead}
                </p>
                <ol className="tw:grid tw:gap-2">
                  {why.cards.map((card, i) => (
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
                        className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:text-[15px] tw:font-semibold tw:text-(--blue-dark)"
                        style={
                          {
                            animation: "dk-num-on 9s ease infinite both",
                            animationDelay: `${i * 3}s`,
                          } as CSSProperties
                        }
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="tw:mt-0.5 tw:text-lg">{card.title}</h3>
                        <p
                          className={cx(
                            LINKS,
                            "tw:mt-1 tw:text-lg/[1.65] tw:text-(--text)",
                          )}
                        >
                          {card.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="tw:grid tw:min-h-[560px] tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(49,87,245,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(253,193,21,0.18),transparent_70%),#f2f5fd] tw:px-6 tw:py-11 tw:max-bslg:min-h-0 tw:max-bslg:px-5 tw:max-bslg:py-9">
                {extras.phone === "site" ? (
                  <WebSitePhone
                    image={
                      extras.phoneImage ??
                      data.showcase?.image ??
                      about.collageB
                    }
                  />
                ) : extras.phone === "report" ? (
                  <ReportPhone />
                ) : extras.phone === "social" ? (
                  <SocialPostPhone
                    image={
                      extras.phoneImage ??
                      data.showcase?.image ??
                      about.collageA
                    }
                  />
                ) : extras.phone === "serp" ? (
                  <OrganicSerpPhone />
                ) : extras.phone === "callad" ? (
                  <CallAdPhone />
                ) : extras.phone === "semreport" ? (
                  <SemReportPhone />
                ) : extras.phone === "textback" ? (
                  <TextBackPhone />
                ) : extras.phone === "voice" ? (
                  <VoiceSearchPhone />
                ) : extras.phone === "booking" ? (
                  <BookingPhone />
                ) : data.showcase && extras.phone !== "leads" ? (
                  <ResultsPhone
                    kind={kind}
                    showcase={
                      extras.phoneImage
                        ? { ...data.showcase, image: extras.phoneImage }
                        : data.showcase
                    }
                  />
                ) : (
                  <LeadsPhone />
                )}
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PROCESS */}
        <Section labelledBy="de-steps-h">
          <Wrap>
            <RowHead align="start">
              <div className="tw:max-w-[860px]">
                <Strip id="de-steps-h" className="tw:text-balance">
                  {process.h2}
                </Strip>
              </div>
              <Pill href={CONTACT}>{process.ctaPrimary}</Pill>
            </RowHead>
            <ol className="tw:grid tw:gap-5">
              {process.steps.map((step, i) => {
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
                        href={extras.stepLinks?.[i] ?? CONTACT}
                        className="tw:grid tw:size-[84px] tw:place-items-center tw:self-end tw:rounded-full tw:border tw:border-[#d3dae6] tw:text-2xl tw:transition tw:duration-200 tw:hover:border-(--ink) tw:hover:bg-(--ink) tw:hover:text-white tw:max-bssm:absolute tw:max-bssm:top-6 tw:max-bssm:right-[22px] tw:max-bssm:size-14 tw:max-bssm:text-xl"
                        aria-label={`Start with: ${step.title}`}
                      >
                        <FiArrowRight aria-hidden="true" />
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
        {extras.localSeo && extras.rank ? (
          /* Local SEO block with the rank tracker (Dallas "ranks by city"
             pattern; digital-marketing page). */
          <Section labelledBy="de-band-h">
            <Wrap flushOnPhone>
              <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
                <div className="tw:w-full tw:max-bslg:max-w-[560px] tw:max-bslg:justify-self-center">
                  <RankBoardUi rank={extras.rank} />
                </div>
                <div>
                  <Strip id="de-band-h" size="card" className="tw:text-white">
                    {extras.localSeo.h2}
                  </Strip>
                  <p
                    className={cx(
                      LINKS_DARK,
                      "tw:mt-6 tw:mb-[22px] tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                    )}
                  >
                    {extras.localSeo.body}
                  </p>
                  <TickList
                    tone="gold"
                    className="tw:mb-[30px] tw:text-white"
                    items={extras.localSeo.points}
                  />
                  <Pill
                    href={extras.localSeo.cta.href}
                    tone="white"
                    arrow
                    fullOnPhone
                  >
                    {extras.localSeo.cta.label}
                  </Pill>
                  <p className="tw:mt-[18px] tw:text-[13px] tw:text-[#8592ab]">
                    {extras.rank.footnote}
                  </p>
                </div>
              </div>
            </Wrap>
          </Section>
        ) : (
          <Section labelledBy="de-band-h">
            <Wrap flushOnPhone>
              <div className="tw:grid tw:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] tw:items-center tw:gap-14 tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bslg:grid-cols-1 tw:max-bslg:gap-10 tw:max-bssm:px-[18px] tw:max-bssm:pt-[22px] tw:max-bssm:pb-7">
                <div className="tw:w-full tw:pb-12 tw:max-bslg:max-w-[520px] tw:max-bslg:justify-self-center">
                  {extras.darkUi === "build" ? (
                    <BuildReportUi console={band.console} />
                  ) : extras.darkUi === "mappack" ? (
                    <MapPackBoardUi console={band.console} />
                  ) : extras.darkUi === "channels" ? (
                    <ChannelMixUi console={band.console} />
                  ) : extras.darkUi === "visibility" ? (
                    <VisibilityRaceUi console={band.console} />
                  ) : extras.darkUi === "roas" ? (
                    <RoasBoardUi console={band.console} />
                  ) : extras.darkUi === "blended" ? (
                    <BlendedBoardUi console={band.console} />
                  ) : extras.darkUi === "boroughs" ? (
                    <BoroughBoardUi console={band.console} />
                  ) : extras.darkUi === "insights" ? (
                    <ProfileInsightsUi console={band.console} />
                  ) : extras.darkUi === "relaunch" ? (
                    <RelaunchUi console={band.console} />
                  ) : (
                    <ConsoleUi
                      console={band.console}
                      toast={
                        CONSOLE_TOAST[kind as keyof typeof CONSOLE_TOAST] ??
                        CONSOLE_TOAST.marketing
                      }
                    />
                  )}
                </div>
                <div>
                  <Strip id="de-band-h" size="card" className="tw:text-white">
                    {band.h2}
                  </Strip>
                  {band.leads.map((lead, i) => (
                    <p
                      key={i}
                      className={cx(
                        LINKS_DARK,
                        "tw:mt-6 tw:max-w-[56ch] tw:text-lg/[1.65] tw:text-[#b7c4dd]",
                      )}
                    >
                      {lead}
                    </p>
                  ))}
                  <Pill
                    href={CONTACT}
                    tone="white"
                    arrow
                    fullOnPhone
                    className="tw:mt-8"
                  >
                    {band.cta}
                  </Pill>
                </div>
              </div>
            </Wrap>
          </Section>
        )}

        {/* ============================================================= HUB */}
        {extras.platforms ? (
          /* "Found everywhere" platform hub in the Dallas hub slot, on the
             white band (owner, 22 Oct: replaces the six-services engine). */
          <Section labelledBy="de-found-h" tone="white">
            <Wrap>
              <CenterHead id="de-found-h" title={extras.platforms.h2}>
                <span className={LINKS}>{extras.platforms.lead}</span>
              </CenterHead>
              <PlatformHub
                left={extras.platforms.left}
                right={extras.platforms.right}
                leftLabel={extras.platforms.leftLabel}
                rightLabel={extras.platforms.rightLabel}
                icon={
                  extras.platforms.centerIcon ?? <FiMapPin aria-hidden="true" />
                }
                title={extras.platforms.centerTitle ?? "Your business"}
                sub={
                  extras.platforms.centerSub ?? "the same details everywhere"
                }
              />
            </Wrap>
          </Section>
        ) : (
          <Section labelledBy="de-hub-h" tone="white">
            <Wrap>
              <CenterHead id="de-hub-h" title={engine.h2}>
                <span className={LINKS}>{engine.lead}</span>
              </CenterHead>
              <GrowthHub
                engine={engine}
                cta={
                  <Pill href={CONTACT} arrow>
                    {engine.coreCta}
                  </Pill>
                }
              />
              <div className="tw:mt-14 tw:border-t tw:border-(--line) tw:pt-10 tw:text-center tw:max-bssm:mt-10 tw:max-bssm:pt-8">
                <p className="tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase">
                  {engine.chipsLabel}
                </p>
                <ul className="tw:mx-auto tw:mt-5 tw:flex tw:max-w-[980px] tw:flex-wrap tw:justify-center tw:gap-2.5">
                  {engine.chips.map((chip) => (
                    <li
                      key={chip}
                      className="tw:rounded-full tw:bg-(--panel) tw:px-4 tw:py-2 tw:text-[15px] tw:font-medium tw:text-(--ink-2)"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The page's "grow further" links, kept with the hub (the
                Dallas layout has no separate links section). Pages with a
                platform hub drop them (owner, 22 Oct). */}
              {extras.platforms || extras.noGrow ? null : (
                <>
                  <div className="tw:mt-14 tw:max-bssm:mt-10">
                    <RowHead align="start">
                      <div className="tw:max-w-[820px]">
                        <h2 className="tw:text-[clamp(26px,2.6vw,38px)] tw:leading-[1.12] tw:tracking-[-0.03em]">
                          {grow.h2}
                        </h2>
                      </div>
                      {grow.lead ? (
                        <p className={cx(LEAD, LINKS, "tw:max-w-[460px]")}>
                          {grow.lead}
                        </p>
                      ) : null}
                    </RowHead>
                    <div className="tw:grid tw:grid-cols-3 tw:gap-6 tw:max-bslg:grid-cols-1 tw:max-bssm:gap-4">
                      {grow.cards.map((card) => (
                        <Link
                          key={card.href}
                          href={card.href}
                          className="tw:group tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-(--panel) tw:p-8 tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:max-bssm:p-6"
                        >
                          <span
                            className="tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[22px] tw:text-(--blue)"
                            aria-hidden="true"
                          >
                            {card.icon}
                          </span>
                          <h3 className="tw:mt-6 tw:text-[23px]/[1.2]">
                            {card.title}
                          </h3>
                          <p className="tw:mt-3 tw:grow tw:text-[17px]/[1.65] tw:text-(--text)">
                            {card.desc}
                          </p>
                          <span className="tw:mt-6 tw:inline-flex tw:items-center tw:gap-3 tw:text-[15.5px] tw:font-semibold tw:text-(--ink)">
                            {card.cta}
                            <span
                              className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-white tw:text-(--blue) tw:transition tw:duration-200 tw:group-hover:rotate-45 tw:group-hover:bg-(--gold) tw:group-hover:text-(--ink)"
                              aria-hidden="true"
                            >
                              <FiArrowUpRight />
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Wrap>
          </Section>
        )}

        {/* ========================================================= REVIEWS */}
        <Section labelledBy="de-love-h">
          <Wrap>
            <RowHead align="start">
              <div>
                {/* Short heading (owner, 22 Oct); differs from the Dallas
                    pages' "Rated 5.0 on Google". */}
                <Strip id="de-love-h">
                  {extras.reviewsTitle ?? "Real Reviews, Real Results"}
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
            {/* Google reviews (owner, 22 Oct 2026), the same Trustindex widget
                as /home2; the guard strips the review schema it injects. */}
            <div className="tw:flex tw:min-h-[360px] tw:flex-col tw:justify-center tw:rounded-(--r-xl) tw:bg-white tw:px-6 tw:py-7 tw:max-bssm:px-3 tw:max-bssm:py-5">
              <LenisIframeGuard widgetScriptSrc={REVIEWS_WIDGET} />
            </div>
            <TrustLogos
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:mt-8"
            />
          </Wrap>
        </Section>

        {/* ===================================== BANNER (marketing page only) */}
        {extras.banner ? (
          <Section labelledBy="de-banner-h">
            <Wrap>
              <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--blue-dark) tw:px-16 tw:py-[76px] tw:text-center tw:text-white tw:max-bsxl:px-10 tw:max-bssm:px-5 tw:max-bssm:py-12">
                <span
                  className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:[background:radial-gradient(50%_70%_at_12%_0%,rgba(255,255,255,0.16),transparent_70%),radial-gradient(45%_70%_at_92%_100%,rgba(255,255,255,0.14),transparent_70%)]"
                  aria-hidden="true"
                />
                {/* Curved shapes in the background (owner, 22 Oct). */}
                <svg
                  viewBox="0 0 1200 520"
                  preserveAspectRatio="none"
                  className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:size-full"
                  aria-hidden="true"
                >
                  <path
                    d="M-60 430 C 180 300, 330 520, 560 400 S 900 180, 1260 300"
                    fill="none"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="2"
                  />
                  <path
                    d="M-60 470 C 200 350, 360 560, 600 440 S 940 230, 1260 350"
                    fill="none"
                    stroke="rgba(255,255,255,0.09)"
                    strokeWidth="2"
                  />
                  <path
                    d="M-80 120 C 120 20, 260 200, 420 90 S 640 -40, 760 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="1120"
                    cy="70"
                    r="150"
                    fill="none"
                    stroke="rgba(253,193,21,0.35)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="1120"
                    cy="70"
                    r="104"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 520 L0 380 C 140 330, 260 420, 380 520 Z"
                    fill="rgba(255,255,255,0.06)"
                  />
                  <path
                    d="M1200 520 L1200 360 C 1080 340, 980 430, 920 520 Z"
                    fill="rgba(253,193,21,0.12)"
                  />
                </svg>
                <span className="tw:mb-7 tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-white/20 tw:bg-white/10 tw:py-1.5 tw:pr-4 tw:pl-1.5 tw:text-[14.5px] tw:font-medium tw:max-bssm:mb-5">
                  <span
                    className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--gold) tw:text-(--ink)"
                    aria-hidden="true"
                  >
                    <FiPlus className="tw:size-3.5" />
                  </span>
                  {extras.banner.eyebrow}
                </span>
                <Strip
                  id="de-banner-h"
                  size="card"
                  className="tw:mx-auto tw:max-w-[22ch] tw:text-white"
                >
                  {extras.banner.h2}
                </Strip>
                <p
                  className={cx(
                    LINKS_DARK,
                    "tw:mx-auto tw:mt-6 tw:max-w-[68ch] tw:text-lg/relaxed tw:text-white/85",
                  )}
                >
                  {extras.banner.body}
                </p>
                <div className="tw:mt-10 tw:flex tw:justify-center tw:max-bssm:mt-8">
                  <Pill href={CONTACT} tone="white" arrow fullOnPhone>
                    {extras.banner.cta}
                  </Pill>
                </div>
              </div>
            </Wrap>
          </Section>
        ) : null}

        {/* ======================================== COMPARE (pricing slot) */}
        <Section labelledBy="de-cmp-h">
          <Wrap>
            <div className="tw:mx-auto tw:max-w-[860px] tw:text-center">
              <Strip id="de-cmp-h" size="card">
                {compare.h2}
              </Strip>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-6 tw:max-w-[62ch]")}>
                {compare.lead}
              </p>
            </div>
            <div className="tw:mt-10 tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-6 tw:max-bslg:mx-auto tw:max-bslg:max-w-[560px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8 tw:max-bssm:mt-8">
              <article className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:p-8 tw:max-bssm:p-6">
                <h3 className="tw:text-[26px]/[1.2]">{compare.themTitle}</h3>
                <p className="tw:mt-2 tw:text-[15.5px]/[1.45] tw:text-(--muted)">
                  {compare.themSub}
                </p>
                <ul className="tw:mt-6 tw:grid tw:gap-3 tw:border-t tw:border-(--line) tw:pt-6">
                  {compare.them.map((item) => (
                    <li
                      key={item}
                      className="tw:flex tw:items-start tw:gap-2.5 tw:text-[16.5px]/[1.45] tw:text-(--text)"
                    >
                      <FiX
                        aria-hidden="true"
                        className="tw:mt-px tw:size-[18px] tw:flex-none tw:rounded-full tw:bg-[#fde4e1] tw:p-[3px] tw:text-(--red) tw:[stroke-width:3.5]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-8 tw:text-white tw:max-bssm:p-6">
                <span className="tw:absolute tw:-top-3.5 tw:left-8 tw:rounded-full tw:bg-(--gold) tw:px-3.5 tw:py-1 tw:text-[12.5px] tw:font-medium tw:text-(--ink) tw:max-bssm:left-6">
                  Zonic Media
                </span>
                <h3 className="tw:text-[26px]/[1.2] tw:text-white">
                  {compare.usTitle}
                </h3>
                <p className="tw:mt-2 tw:text-[15.5px]/[1.45] tw:text-(--gold)">
                  {compare.usSub}
                </p>
                <TickList
                  tone="gold"
                  items={compare.us}
                  className="tw:mt-6 tw:gap-3 tw:border-t tw:border-white/15 tw:pt-6 tw:text-white/90"
                />
              </article>
              <article className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:p-8 tw:max-bssm:p-6">
                <h3 className="tw:text-[26px]/[1.2]">{compare.scoreTitle}</h3>
                <p className="tw:mt-2 tw:text-[15.5px]/[1.45] tw:text-(--muted)">
                  {compare.scoreSub}
                </p>
                <div className="tw:mt-6 tw:border-t tw:border-(--line) tw:pt-6">
                  {extras.scoreStyle === "columns" ? (
                    <ScoreColumnsUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "tiles" ? (
                    <ScoreTilesUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "rings" ? (
                    <ScoreRingsUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "delta" ? (
                    <ScoreDeltaUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "table" ? (
                    <ScoreTableUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "bullet" ? (
                    <ScoreBulletUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "radar" ? (
                    <ScoreRadarUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "slope" ? (
                    <ScoreSlopeUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "dumbbell" ? (
                    <ScoreDumbbellUi rows={compare.scoreRows} />
                  ) : extras.scoreStyle === "needles" ? (
                    <ScoreNeedlesUi rows={compare.scoreRows} />
                  ) : (
                    <ScoreUi rows={compare.scoreRows} web={kind === "web"} />
                  )}
                </div>
              </article>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================= PRICING */}
        {/* Same plans as /home2, headings written for this page (owner, 23 Oct). */}
        {extras.pricing ? (
          <PricingSection
            copy={extras.pricing}
            idPrefix="de"
            ctaHref={CONTACT}
            ctaLabel={hero.cta}
          />
        ) : null}

        {/* ============================================================= FAQ */}
        <Section labelledBy="de-faq-h">
          <Wrap>
            <div className="tw:mx-auto tw:mb-9 tw:max-w-[860px] tw:text-center">
              <h2
                id="de-faq-h"
                className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
              >
                {faqs.h2}
              </h2>
              <p className={cx(LEAD, "tw:mx-auto tw:mt-5 tw:max-w-[64ch]")}>
                {faqs.lead}
              </p>
            </div>
            <div className="tw:mx-auto tw:max-w-[1080px] tw:rounded-[32px] tw:bg-white tw:px-11 tw:py-2 tw:max-bsmd:px-6 tw:max-bsmd:py-1 tw:max-bssm:rounded-3xl tw:max-bssm:px-5">
              {faqs.items.map((item) => (
                <details
                  key={item.question}
                  className="tw:group tw:border-t tw:border-(--line) tw:first:border-t-0"
                >
                  <summary className="tw:flex tw:cursor-pointer tw:items-center tw:justify-between tw:gap-5 tw:py-[22px] tw:text-(--ink)">
                    {/* H3 as on the live pages (a heading is valid in <summary>). */}
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
        <Section id="de-contact" labelledBy="de-contact-h">
          <Wrap flushOnPhone>
            <div className="tw:relative tw:overflow-hidden tw:rounded-[48px] tw:bg-white tw:px-12 tw:pt-[60px] tw:pb-11 tw:text-center tw:max-bslg:px-10 tw:max-bslg:pt-16 tw:max-bslg:pb-10 tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-12 tw:max-bssm:pb-4">
              {/* Decorative envelope and pin (Dallas contact pattern). */}
              <svg
                viewBox="0 0 120 90"
                className="tw:absolute tw:top-[22%] tw:left-[5%] tw:w-[120px] tw:-rotate-[14deg] tw:drop-shadow-[0_18px_18px_rgba(28,79,196,0.25)] tw:max-bsxl:left-[3%] tw:max-bsxl:w-[92px] tw:max-bslg:hidden"
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
                className="tw:absolute tw:top-[20%] tw:right-[6%] tw:text-[130px] tw:leading-none tw:max-bsxl:right-[4%] tw:max-bsxl:text-[100px] tw:max-bslg:hidden"
                aria-hidden="true"
              >
                <InlinePin id="de-pin-contact" />
              </span>
              <h2
                id="de-contact-h"
                className="tw:mx-auto tw:max-w-[20ch] tw:text-[clamp(34px,4.6vw,68px)] tw:leading-[1.08] tw:tracking-[-0.035em]"
              >
                {extras.contact ? (
                  <>
                    {extras.contact.before} <InlineChat id="de-chat-contact" />{" "}
                    {extras.contact.after}
                  </>
                ) : (
                  form.h2
                )}
              </h2>
              <p
                className={cx(LEAD, "tw:mx-auto tw:mt-[26px] tw:max-w-[640px]")}
              >
                {extras.contact?.lead ?? form.lead}
              </p>
              <div className="tw:mt-7 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
                <Pill href={SITE_CONTACT.phoneHref} size="md" fullOnPhone>
                  <FiPhone aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.phoneDisplay}
                </Pill>
                <Pill
                  href={SITE_CONTACT.emailHref}
                  tone="outline"
                  size="md"
                  fullOnPhone
                >
                  <FiMail aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.email}
                </Pill>
                {/* Owner rule (24 Oct 2026): every contact block shows
                    phone, email and address. */}
                <Pill
                  href={SITE_CONTACT.mapHref}
                  tone="outline"
                  size="md"
                  fullOnPhone
                >
                  <FiMapPin aria-hidden="true" className="tw:size-[17px]" />
                  {SITE_CONTACT.address}
                </Pill>
              </div>
              <div className="tw:mx-auto tw:mt-[34px] tw:max-w-[760px] tw:text-left">
                <ServiceLeadForm
                  formType={form.formType}
                  badge={form.badge}
                  title={form.title}
                  subtitle={form.subtitle}
                  submitText={form.submitText}
                  messageLabel={form.messageLabel}
                  messagePlaceholder={form.messagePlaceholder}
                  defaultServices={form.defaultServices}
                />
              </div>
            </div>
          </Wrap>
        </Section>

        {/* ========================================================== BANNER */}
        {/* The /home2 closing banner (owner, 22 Oct: same ending as /home2),
            carrying the page's own free-audit heading, text and checklist. */}
        <Section labelledBy="de-close-h">
          <Wrap>
            <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(60%_80%_at_100%_0%,rgba(59,130,246,0.85),transparent_60%),radial-gradient(55%_70%_at_75%_100%,rgba(244,143,203,0.95),transparent_65%),linear-gradient(105deg,#1b10e8_0%,#3d22f0_32%,#8a4cf0_62%,#d47fe0_100%)] tw:px-10 tw:pt-16 tw:pb-16 tw:text-center tw:text-white tw:max-bssm:rounded-[28px] tw:max-bssm:px-4 tw:max-bssm:pt-10 tw:max-bssm:pb-14">
              <span
                className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.22] tw:mix-blend-overlay"
                style={{ backgroundImage: GRAIN }}
                aria-hidden="true"
              />
              <BannerLoops
                id="de-loop-l"
                className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[84px]"
              />
              <BannerLoops
                id="de-loop-r"
                className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
              />
              <h2
                id="de-close-h"
                className="tw:mx-auto tw:max-w-[16ch] tw:text-[clamp(34px,5vw,74px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-white tw:text-balance"
              >
                {why.banner.h3}
              </h2>
              <p className="tw:mx-auto tw:mt-6 tw:max-w-[60ch] tw:text-lg/[1.65] tw:text-white/85">
                {why.banner.p}
              </p>
              <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
                <Pill href={CONTACT} tone="white" fullOnPhone>
                  {why.banner.cta}
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
                {why.banner.checks.map((t) => (
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
      {/* The /home2 footer variant: badges under the contact details. */}
      <Footer />
    </>
  );
}
