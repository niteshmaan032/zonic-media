import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiClock,
  FiFileText,
  FiGlobe,
  FiLock,
  FiMapPin,
  FiMessageCircle,
  FiNavigation,
  FiPhone,
  FiSearch,
  FiSettings,
  FiStar,
  FiThumbsUp,
  FiTrendingDown,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { SiApple, SiFacebook, SiYelp } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { GoogleG, PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type {
  DelawareData,
  DelawareExtras,
  DelawareFeature,
  DelawareKind,
} from "./types";
import { CARD, Fill, Flip, Slot, Stage, TICK_AT, inAt, run } from "./uiBits";
import { DevicesUi, LeadFormUi, LighthouseUi, webStepUis } from "./webUi";
import { LsaUi, ReviewsUi, SuburbsUi, wilmStepUis } from "./wilmingtonUi";
import {
  FunnelUi,
  NeighborhoodHeatUi,
  SocialCalendarUi,
  phlMarketingStepUis,
} from "./phlMarketingUi";
import {
  BacklinksUi,
  NeighborhoodPagesUi,
  SearchConsoleUi,
  phlSeoStepUis,
} from "./phlSeoUi";
import {
  AbTestUi,
  AccountTreeUi,
  SearchTermsUi,
  phlPpcStepUis,
} from "./phlPpcUi";
import {
  BudgetSplitDialUi,
  KeywordLoopUi,
  SerpShareUi,
  phlSemStepUis,
} from "./phlSemUi";
import {
  LeadLogUi,
  ProfileMonitorUi,
  SearchHoursUi,
  nycMarketingStepUis,
} from "./nycMarketingUi";
import {
  BlockCoverageUi,
  CategoriesUi,
  LocalSchemaUi,
  nycSeoStepUis,
} from "./nycSeoUi";
import {
  AccessibilityUi,
  LoadWaterfallUi,
  SiteEditorUi,
  nycWebStepUis,
} from "./nycWebUi";
import { photoAlt } from "@/components/rd/photoAlt";

/* New UI components for the Delaware redesign drafts (22 Oct 2026). None
   of them is a DFW component: the about card is a three-county map of
   Delaware, the results panels, console, steps, audit gauge, scorecard
   and hub are built from each page's own data. Motion lives in
   ./delaware.css (de-* keyframes, one 8s loop per UI, absolute stages).
   Illustrations only: "Your business", no client names. */

/* ================================================== about: county card */

/* Simplified outline of Delaware (north arc, the Delaware Bay shore, Cape
   Henlopen, the Atlantic coast, the Transpeninsular Line and the straight
   Maryland border). viewBox 10 0 108 220. */
const STATE =
  "M22 14 Q40 -2 58 16 L62 34 L60 52 L66 70 L72 92 L80 112 L90 132 L100 146 L106 150 L100 156 L104 172 L108 196 L110 214 L22 214 Z";

/* Town dots in % of the map box: [left, top]. */
const TOWNS: [number, number][] = [
  [38.9, 13.6], // Wilmington
  [18.5, 18.2], // Newark
  [81.5, 69.1], // Lewes
  [85.2, 74.1], // Rehoboth Beach
  [22.2, 89.1], // Seaford
];

/** Narrow about-section card: the three counties, the Dover HQ pin and
    the page's two hero facts. Real text (not aria-hidden). */
export function DelawareHqCard({
  kind,
  facts,
}: {
  kind: DelawareKind;
  facts: { strong: string; text: string }[];
}) {
  const ncc = kind === "wilmington";
  const counties = [
    {
      name: "New Castle County",
      towns: "Wilmington · Newark · Middletown",
      fill: ncc ? "var(--blue)" : "rgba(37,103,232,0.55)",
    },
    {
      name: "Kent County",
      towns: "Dover HQ · Smyrna · Milford",
      fill: ncc ? "rgba(255,255,255,0.16)" : "var(--blue)",
    },
    {
      name: "Sussex County",
      towns: "Lewes · Rehoboth Beach · Seaford",
      fill: ncc ? "rgba(255,255,255,0.1)" : "rgba(37,103,232,0.34)",
    },
  ];
  return (
    <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:gap-6 tw:bg-(--ink) tw:p-8 tw:text-left tw:text-white tw:max-bsxl:p-7 tw:max-bslg:gap-4 tw:max-bslg:p-5 tw:max-bssm:static tw:max-bssm:gap-6 tw:max-bssm:p-7">
      {/* Left-aligned only: the rotating Clutch badge overlaps this card's
          top-right corner. */}
      <p className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold tw:tracking-[0.14em] tw:text-white/60 tw:uppercase tw:max-bssm:max-w-[60%]">
        <i
          className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--gold)"
          aria-hidden="true"
        />
        {ncc ? "Wilmington · HQ in Dover" : "Statewide · HQ in Dover"}
      </p>

      <div className="tw:grid tw:grow tw:grid-cols-[104px_minmax(0,1fr)] tw:items-center tw:gap-6 tw:max-bslg:grid-cols-[58px_minmax(0,1fr)] tw:max-bslg:gap-4 tw:max-bssm:grid-cols-[84px_minmax(0,1fr)]">
        <div className="tw:relative tw:aspect-[108/220]" aria-hidden="true">
          <svg
            viewBox="10 0 108 220"
            className="tw:absolute tw:inset-0 tw:size-full tw:overflow-visible"
          >
            <defs>
              <clipPath id="de-state-clip">
                <path d={STATE} />
              </clipPath>
            </defs>
            <g clipPath="url(#de-state-clip)">
              <rect
                x="0"
                y="0"
                width="130"
                height="78"
                style={{ fill: counties[0].fill }}
              />
              <rect
                x="0"
                y="78"
                width="130"
                height="60"
                style={{ fill: counties[1].fill }}
              />
              <rect
                x="0"
                y="138"
                width="130"
                height="90"
                style={{ fill: counties[2].fill }}
              />
              <path
                d="M0 78 H130 M0 138 H130"
                style={{ stroke: "var(--ink)" }}
                strokeWidth="2.5"
              />
            </g>
            <path
              d={STATE}
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          {TOWNS.map(([x, y]) => (
            <i
              key={`${x}-${y}`}
              className="tw:absolute tw:size-[7px] tw:-translate-1/2 tw:rounded-full tw:bg-white"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}
          {/* Dover HQ */}
          <span className="tw:absolute tw:top-[49%] tw:left-[31.5%]">
            <i
              className="tw:absolute tw:top-0 tw:left-0 tw:block tw:size-6 tw:rounded-full tw:bg-(--gold)"
              style={run("de-ping", 2.4, "ease-out")}
            />
            <i className="tw:absolute tw:top-0 tw:left-0 tw:block tw:size-3.5 tw:-translate-1/2 tw:rounded-full tw:border-[3px] tw:border-(--ink) tw:bg-(--gold)" />
          </span>
        </div>

        <ul className="tw:grid tw:gap-4 tw:max-bslg:gap-2">
          {counties.map((c, i) => (
            <li key={c.name} className="tw:flex tw:items-start tw:gap-2.5">
              <i
                className="tw:mt-1.5 tw:block tw:size-2.5 tw:flex-none tw:rounded-full tw:ring-1 tw:ring-white/30"
                style={{ background: c.fill }}
                aria-hidden="true"
              />
              <span className="tw:min-w-0">
                <b
                  className={cx(
                    "tw:block tw:text-[15.5px]/[1.3] tw:max-bslg:text-[13px]",
                    i === (ncc ? 0 : 1) ? "tw:text-white" : "tw:text-white/85",
                  )}
                >
                  {c.name}
                </b>
                <span className="tw:block tw:text-[13px]/[1.4] tw:text-white/55 tw:max-bslg:hidden tw:max-bssm:block">
                  {c.towns}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="tw:grid tw:gap-3 tw:border-t tw:border-white/12 tw:pt-5 tw:max-bslg:gap-2 tw:max-bslg:pt-3">
        {facts.map((f, i) => (
          <li key={f.strong} className="tw:flex tw:items-center tw:gap-3">
            <span
              className={cx(
                "tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px] tw:max-bslg:size-7 tw:max-bslg:text-[12px]",
                i
                  ? "tw:bg-white/10 tw:text-(--gold)"
                  : "tw:bg-(--blue) tw:text-white",
              )}
              aria-hidden="true"
            >
              {i ? <FiStar /> : <FiMapPin />}
            </span>
            <span className="tw:min-w-0 tw:text-[13.5px]/[1.35] tw:text-white/65 tw:max-bslg:text-[12px]">
              <b className="tw:block tw:text-[15.5px] tw:text-white tw:max-bslg:text-[13px]">
                {f.strong}
              </b>
              {f.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ====================================================== results panels */

type ResultCard = DelawareData["results"]["cards"][number];

const LEADS = {
  default: [
    {
      icon: <FiPhone />,
      t: "Phone call",
      d: "2m 41s · new customer",
      src: "Google Maps",
    },
    {
      icon: <FiFileText />,
      t: "Quote request",
      d: "Service page form",
      src: "Search",
    },
    {
      icon: <FiPhone />,
      t: "Phone call",
      d: "4m 05s · booked",
      src: "Google Ads",
    },
    {
      icon: <FiMessageCircle />,
      t: "Website chat",
      d: "Asked for a visit",
      src: "Website",
    },
  ],
  web: [
    {
      icon: <FiFileText />,
      t: "Quote form",
      d: "Mobile · 3 fields",
      src: "Homepage",
    },
    { icon: <FiPhone />, t: "Tap to call", d: "1m 58s", src: "Service page" },
    {
      icon: <FiCalendar />,
      t: "Booking request",
      d: "Tue, 10:30 am",
      src: "Landing page",
    },
    {
      icon: <FiFileText />,
      t: "Contact form",
      d: "Mobile",
      src: "Contact page",
    },
  ],
};

/** Leads arriving, each tagged with the channel that sent it. */
function LeadFeedUi({ card, web }: { card: ResultCard; web: boolean }) {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title={card.label}
        right={<Chip tone="green">{card.metric}</Chip>}
      />
      <svg
        viewBox="0 0 300 64"
        className="tw:mt-3 tw:block tw:h-16 tw:w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 58 C40 56 60 50 90 46 S150 40 180 30 S240 14 300 6 L300 64 L0 64 Z"
          style={{ fill: "var(--blue-soft)", ...run("de-area") }}
        />
        <path
          d="M0 58 C40 56 60 50 90 46 S150 40 180 30 S240 14 300 6"
          fill="none"
          pathLength={1}
          strokeDasharray="1"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ stroke: "var(--blue)", ...run("de-draw") }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <ul className="tw:mt-3 tw:grid tw:gap-2">
        {(web ? LEADS.web : LEADS.default).map((row, i) => (
          <li
            key={`${row.t}-${i}`}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
            style={inAt(i + 2)}
          >
            <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:bg-white tw:text-[14px] tw:text-(--blue)">
              {row.icon}
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:text-[13.5px]/[1.3]">{row.t}</b>
              <span className="tw:block tw:truncate tw:text-[12px] tw:text-(--muted)">
                {row.d}
              </span>
            </span>
            <Chip tone="blue" className="tw:ml-auto">
              {row.src}
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Six monthly bars rising (or falling, for cost per lead). */
function MonthBarsUi({ card, down }: { card: ResultCard; down?: boolean }) {
  const h = down ? [96, 86, 74, 62, 54, 46] : [22, 31, 42, 56, 74, 96];
  return (
    <div className={CARD}>
      <UiHead
        icon={down ? <FiTrendingDown /> : <FiBarChart2 />}
        tone={down ? "green" : "soft"}
        title={card.label}
        right={<Chip tone="green">{card.metric}</Chip>}
      />
      <div className="tw:relative tw:mt-5 tw:flex tw:h-[170px] tw:items-end tw:gap-3 tw:border-b tw:border-(--line) tw:max-bssm:h-[140px] tw:max-bssm:gap-2">
        {h.map((v, i) => {
          const last = i === h.length - 1;
          return (
            <span
              key={i}
              className="tw:relative tw:flex tw:h-full tw:flex-1 tw:items-end"
            >
              <i
                className="tw:block tw:w-full tw:rounded-t-[10px]"
                style={
                  {
                    "--h": `${v}%`,
                    height: `${v}%`,
                    background: last
                      ? down
                        ? "var(--green)"
                        : "var(--blue)"
                      : "#dbe4f5",
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
            </span>
          );
        })}
        <span
          className="tw:absolute tw:-top-2 tw:right-0 tw:rounded-full tw:bg-(--ink) tw:px-2.5 tw:py-1 tw:text-[12px] tw:font-semibold tw:text-white"
          style={run("de-late")}
        >
          {card.metric}
        </span>
      </div>
      <div className="tw:mt-2 tw:flex tw:justify-between tw:text-[11.5px] tw:font-medium tw:text-(--muted)">
        {["Month 1", "2", "3", "4", "5", "Month 6"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

const PRACTICE_TERMS: [string, string, string][] = [
  ["attorney near me", "#8", "#2"],
  ["cpa near me", "#11", "#1"],
  ["estate planning lawyer", "#6", "#3"],
  ["tax help near me", "#9", "#2"],
];

/** Core terms climbing into the Map Pack. */
function RankListUi({ card }: { card: ResultCard }) {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSearch />}
        title="Map Pack · core terms"
        right={<Chip tone="green">{card.metric}</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {PRACTICE_TERMS.map(([term, from, to], i) => (
          <li
            key={term}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
          >
            <FiSearch className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
            <span className="tw:truncate tw:text-[13.5px]">{term}</span>
            <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1.5">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">{from}</Chip>}
                to={<Chip tone="green">{to}</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
      <p
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-medium tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiCheck className="tw:size-4 tw:rounded-full tw:bg-(--green-soft) tw:p-0.5" />
        {card.label}
      </p>
    </div>
  );
}

/** Towns turning green as they reach the top three. */
function TownGridUi({
  card,
  towns,
  reach,
}: {
  card: ResultCard;
  towns: string[];
  reach: number;
}) {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title={card.label}
        right={<Chip tone="green">{card.metric}</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        {towns.map((town, i) => (
          <li
            key={town}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-[13px] tw:font-medium"
          >
            <i
              className="tw:block tw:size-2.5 tw:flex-none tw:rounded-full"
              style={
                i === 0
                  ? { background: "var(--green)" }
                  : i < reach
                    ? { background: "var(--green)", ...run(`de-dot-${i}`) }
                    : { background: "#d5dce7" }
              }
            />
            <span className="tw:truncate">{town}</span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:rounded-[14px] tw:bg-(--ink) tw:px-4 tw:py-3 tw:text-white">
        <span className="tw:text-[12.5px] tw:text-white/70">
          In the top three
        </span>
        <Flip
          n={3}
          from={<b className="tw:text-[15px]">1 town</b>}
          to={<b className="tw:text-[15px] tw:text-(--gold)">{reach} towns</b>}
        />
      </div>
    </div>
  );
}

/** Mobile PageSpeed gauge with the three Core Web Vitals. */
function SpeedGaugeUi({ card }: { card: ResultCard }) {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiZap />}
        tone="green"
        title="Mobile PageSpeed"
        right={<Chip tone="green">Passed</Chip>}
      />
      <div className="tw:relative tw:mx-auto tw:mt-4 tw:w-[220px] tw:max-w-full">
        <svg viewBox="0 0 220 120" className="tw:block tw:w-full">
          <path
            d="M20 110 A90 90 0 0 1 200 110"
            fill="none"
            stroke="#e6ebf3"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M20 110 A90 90 0 0 1 200 110"
            fill="none"
            strokeWidth="16"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={
              {
                stroke: "var(--green)",
                strokeDashoffset: 0.05,
                "--g": 0.05,
                ...run("de-gauge"),
              } as CSSProperties
            }
          />
        </svg>
        <span className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:text-center">
          <b className="tw:block tw:text-[40px] tw:leading-none tw:tracking-[-0.03em]">
            {card.metric}
          </b>
          <span className="tw:text-[12px] tw:text-(--muted)">{card.label}</span>
        </span>
      </div>
      <ul className="tw:mt-5 tw:grid tw:grid-cols-3 tw:gap-2">
        {[
          ["LCP", "1.6 s"],
          ["INP", "110 ms"],
          ["CLS", "0.02"],
        ].map(([k, v], i) => (
          <li
            key={k}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-center"
            style={inAt(i + 4)}
          >
            <span className="tw:block tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
              {k}
            </span>
            <b className="tw:block tw:text-[15px] tw:text-[#1f7a3a]">{v}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SUSSEX_TOWNS = [
  "Lewes",
  "Rehoboth Beach",
  "Milton",
  "Millsboro",
  "Georgetown",
  "Seaford",
];
const NCC_SUBURBS = [
  "Newark",
  "Pike Creek",
  "Hockessin",
  "Bear",
  "Claymont",
  "Brandywine",
];

/** UI panel for results row `i` (layout: panel left, text right; rows flip). */
export function ResultPanel({
  kind,
  card,
  i,
}: {
  kind: DelawareKind;
  card: ResultCard;
  i: number;
}) {
  let ui: ReactNode;
  if (i === 0) ui = <LeadFeedUi card={card} web={kind === "web"} />;
  else if (kind === "marketing")
    ui = <MonthBarsUi card={card} down={i === 2} />;
  else if (kind === "web")
    ui = i === 1 ? <SpeedGaugeUi card={card} /> : <MonthBarsUi card={card} />;
  else if (i === 1) ui = <RankListUi card={card} />;
  else
    ui =
      kind === "wilmington" ? (
        <TownGridUi card={card} towns={NCC_SUBURBS} reach={5} />
      ) : (
        <TownGridUi card={card} towns={SUSSEX_TOWNS} reach={4} />
      );
  return <Stage flip={i % 2 === 1}>{ui}</Stage>;
}

/* ===================================================== journey: phone */

const PHONE_STATS: Partial<Record<DelawareKind, ReactNode[]>> = {
  seo: [<FiStar key="a" />, <FiMapPin key="b" />, <FiNavigation key="c" />],
  wilmington: [
    <FiStar key="a" />,
    <FiMapPin key="b" />,
    <FiNavigation key="c" />,
  ],
  web: [<FiZap key="a" />, <FiClock key="b" />, <FiCheck key="c" />],
  marketing: [
    <FiStar key="a" />,
    <FiMapPin key="b" />,
    <FiNavigation key="c" />,
  ],
};

/** Phone beside the journey list: the page's showcase photo as a Google
    Business Profile (or, on the web-design page, a mobile site) with the
    page's three result stats; on the digital-marketing page, its local
    rank tracker. Decorative (the frame is aria-hidden). */
export function ResultsPhone({
  kind,
  showcase,
  rank,
}: {
  kind: DelawareKind;
  showcase?: DelawareData["showcase"];
  rank?: DelawareExtras["rank"];
}) {
  if (rank) {
    const gap = 1 - rank.summaryPercent / 100;
    return (
      <>
        {/* Screen-reader copy of the tracker (the phone frame is decorative). */}
        <div className="tw:sr-only">
          <p>
            Local rank tracker, {rank.scope}: {rank.summaryPercent}%{" "}
            {rank.summaryLabel}.{" "}
            {rank.stats.map((st) => `${st.label}: ${st.value}.`).join(" ")}
          </p>
          <ul>
            {rank.rows.map((row) => (
              <li key={row.city}>
                {row.city}, tracked keyword “{row.keyword}”: rank {row.rank},
                30-day move up {row.change}.
              </li>
            ))}
          </ul>
        </div>
        <PhoneFrame>
          <div className="tw:absolute tw:inset-0 tw:px-3.5 tw:pt-[42px] tw:pb-3 tw:text-(--ink)">
            <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <b className="tw:text-[14.5px]">Local rank tracker</b>
              <span className="tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:text-(--blue-dark)">
                30 days
              </span>
            </div>
            <p className="tw:text-[10.5px] tw:text-(--muted)">{rank.scope}</p>
            <div className="tw:mt-2.5 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white">
              <span className="tw:relative tw:grid tw:size-[50px] tw:flex-none tw:place-items-center">
                <svg
                  viewBox="0 0 60 60"
                  className="tw:absolute tw:inset-0 tw:-rotate-90"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="1"
                    style={
                      {
                        stroke: "var(--gold)",
                        strokeDashoffset: gap,
                        "--g": gap,
                        ...run("de-gauge"),
                      } as CSSProperties
                    }
                  />
                </svg>
                <b className="tw:text-[13px]">{rank.summaryPercent}%</b>
              </span>
              <span className="tw:text-[11.5px]/[1.35] tw:text-white/80">
                {rank.summaryLabel}
              </span>
            </div>
            <ul className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1.5">
              {rank.stats.map((st) => (
                <li
                  key={st.label}
                  className="tw:rounded-[10px] tw:bg-(--panel) tw:px-2 tw:py-1.5"
                >
                  <b className="tw:block tw:text-[15px] tw:leading-tight">
                    {st.value}
                  </b>
                  <span className="tw:block tw:text-[9.5px]/[1.2] tw:text-(--muted)">
                    {st.label}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="tw:mt-2 tw:grid tw:gap-1">
              {rank.rows.map((row, i) => (
                <li
                  key={row.city}
                  className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5"
                  style={inAt(i + 1)}
                >
                  <span className="tw:min-w-0">
                    <b className="tw:block tw:text-[11.5px]/[1.25]">
                      {row.city}
                    </b>
                    <span className="tw:block tw:truncate tw:text-[10px] tw:text-(--muted)">
                      {row.keyword}
                    </span>
                  </span>
                  <span className="tw:ml-auto tw:rounded-full tw:bg-(--gold) tw:px-1.5 tw:text-[10.5px] tw:font-semibold">
                    {row.rank}
                  </span>
                  <span className="tw:w-7 tw:text-right tw:text-[10.5px] tw:font-semibold tw:text-(--green)">
                    ▲{row.change}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </PhoneFrame>
      </>
    );
  }
  if (!showcase) return null;
  const web = kind === "web";
  const icons = PHONE_STATS[kind] ?? [];
  return (
    <>
      {/* Screen-reader copy of the stats (the phone frame is decorative). */}
      <ul className="tw:sr-only">
        {showcase.floats.map((f) => (
          <li key={f.label}>
            {f.num} {f.label}
          </li>
        ))}
      </ul>
      <PhoneFrame>
        <div className="tw:absolute tw:inset-0 tw:pt-[40px] tw:text-(--ink)">
          {web ? (
            <span className="tw:mx-3 tw:mb-2 tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[10.5px] tw:text-(--muted)">
              <FiLock className="tw:size-3 tw:text-(--green)" />
              yourbusiness.com
            </span>
          ) : null}
          <div
            className={cx(
              "tw:relative tw:mx-3 tw:overflow-hidden tw:rounded-[18px]",
              web ? "tw:h-[170px]" : "tw:h-[150px]",
            )}
          >
            <Image
              src={showcase.image.src}
              alt={photoAlt(showcase.image.src)}
              fill
              sizes="260px"
              className="tw:object-cover"
            />
            {web ? (
              <span className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:justify-end tw:gap-1.5 tw:bg-linear-to-t tw:from-black/70 tw:to-transparent tw:p-3">
                <i className="tw:block tw:h-2 tw:w-3/4 tw:rounded-full tw:bg-white/90" />
                <i className="tw:block tw:h-2 tw:w-1/2 tw:rounded-full tw:bg-white/70" />
                <span className="tw:mt-1 tw:w-fit tw:rounded-full tw:bg-(--gold) tw:px-3 tw:py-1 tw:text-[10.5px] tw:font-semibold">
                  Get a quote
                </span>
              </span>
            ) : null}
          </div>
          {web ? null : (
            <div className="tw:px-4 tw:pt-3">
              <b className="tw:block tw:text-[16px]">Your Business</b>
              <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:text-(--muted)">
                <span className="tw:flex tw:gap-px" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar
                      key={n}
                      className="tw:size-3 tw:fill-(--gold) tw:text-(--gold)"
                    />
                  ))}
                </span>
                {kind === "wilmington" ? "Wilmington, DE" : "Delaware"}
              </span>
              <span className="tw:mt-2 tw:flex tw:gap-3 tw:border-b tw:border-(--line) tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
                <span className="tw:border-b-2 tw:border-(--blue) tw:pb-1.5 tw:text-(--blue)">
                  Overview
                </span>
                <span>Reviews</span>
                <span>Photos</span>
              </span>
            </div>
          )}
          <ul className="tw:mt-3 tw:grid tw:gap-2 tw:px-3">
            {showcase.floats.map((f, i) => (
              <li
                key={f.label}
                className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
                style={inAt(i + 2)}
              >
                <span
                  className={cx(
                    "tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-[11px] tw:text-[15px]",
                    i === 0
                      ? "tw:bg-(--gold) tw:text-(--ink)"
                      : i === 1
                        ? "tw:bg-(--blue) tw:text-white"
                        : "tw:bg-(--green) tw:text-white",
                  )}
                >
                  {icons[i]}
                </span>
                <span className="tw:min-w-0">
                  <b className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]">
                    {f.num}
                  </b>
                  <span className="tw:mt-0.5 tw:block tw:text-[11px]/[1.25] tw:text-(--muted)">
                    {f.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </PhoneFrame>
    </>
  );
}

/* ============================================================ console */

/** The band's console: KPI tiles, signal bars and location pills, plus a
    toast for the lead it just tracked. Decorative (aria-hidden). */
export function ConsoleUi({
  console: c,
  toast,
}: {
  console: DelawareData["band"]["console"];
  toast: { t: string; d: string };
}) {
  return (
    <div className="tw:relative tw:w-full tw:max-w-[470px]" aria-hidden="true">
      <div
        className={cx(
          UI_CARD,
          "tw:overflow-hidden tw:text-left tw:text-(--ink)",
        )}
      >
        <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:bg-(--panel) tw:px-4 tw:py-3">
          <i className="tw:size-2.5 tw:rounded-full tw:bg-[#ff6159]" />
          <i className="tw:size-2.5 tw:rounded-full tw:bg-[#ffbd2e]" />
          <i className="tw:size-2.5 tw:rounded-full tw:bg-[#28c840]" />
          <b className="tw:ml-2 tw:truncate tw:text-[13.5px]">{c.title}</b>
          <Chip tone="blue" className="tw:ml-auto">
            {c.tag}
          </Chip>
        </div>
        <div className="tw:p-5 tw:max-bssm:p-4">
          <ul className="tw:grid tw:grid-cols-3 tw:gap-2.5">
            {c.metrics.map((m, i) => (
              <li
                key={m.label}
                className="tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-3"
                style={inAt(i + 1)}
              >
                <b className="tw:block tw:text-[24px] tw:leading-none tw:tracking-[-0.03em] tw:max-bssm:text-[20px]">
                  {m.strong}
                </b>
                <span className="tw:mt-1.5 tw:block tw:text-[11.5px]/[1.3] tw:text-(--muted)">
                  {m.label}
                </span>
              </li>
            ))}
          </ul>
          <p className="tw:mt-5 tw:text-[11.5px] tw:font-semibold tw:tracking-[0.12em] tw:text-(--muted) tw:uppercase">
            {c.barsLabel}
          </p>
          <ul className="tw:mt-3 tw:grid tw:gap-3">
            {c.bars.map((b) => (
              <li key={b.label}>
                <span className="tw:mb-1.5 tw:flex tw:justify-between tw:text-[12.5px] tw:font-medium">
                  {b.label}
                  <span className="tw:text-(--muted)">{b.val}%</span>
                </span>
                <Fill
                  w={b.val}
                  color={b.tone === "gold" ? "var(--gold)" : "var(--blue)"}
                />
              </li>
            ))}
          </ul>
          <ul className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-2">
            {c.pills.map((p) => (
              <li
                key={p.text}
                className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1 tw:text-[12px] tw:font-medium"
              >
                {p.icon === "star" ? (
                  <FiStar className="tw:size-3.5 tw:fill-(--gold) tw:text-(--gold)" />
                ) : (
                  <FiMapPin className="tw:size-3.5 tw:text-(--blue)" />
                )}
                {p.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="tw:absolute tw:-bottom-10 tw:left-6 tw:flex tw:items-center tw:gap-3 tw:rounded-[18px] tw:bg-white tw:py-3 tw:pr-5 tw:pl-3 tw:text-left tw:text-(--ink) tw:[box-shadow:var(--lift)] tw:max-bssm:left-3"
        style={run("de-late")}
      >
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-(--green)">
          <FiCheck className="tw:[stroke-width:3]" />
        </span>
        <span>
          <b className="tw:block tw:text-[13.5px]/[1.2]">{toast.t}</b>
          <span className="tw:text-[12px] tw:text-(--muted)">{toast.d}</span>
        </span>
      </div>
    </div>
  );
}

/* ============================================================== steps */

const FOUNDATION: Partial<Record<DelawareKind, string[]>> = {
  marketing: [
    "Call & form tracking installed",
    "Google Business Profile optimized",
    "Ad campaigns restructured",
    "Top pages rewritten to convert",
  ],
  seo: [
    "County keyword plan",
    "Google Business Profile optimized",
    "Citations cleaned up",
    "On-page fixes live",
  ],
  wilmington: [
    "Wilmington keyword plan",
    "Google Business Profile optimized",
    "Citations cleaned up",
    "On-page fixes live",
  ],
  web: [
    "Sitemap approved",
    "Keywords mapped to pages",
    "Wireframes signed off",
    "Copy drafted",
  ],
};

function Ticked({ items, offset = 0 }: { items: string[]; offset?: number }) {
  return (
    <ul className="tw:grid tw:gap-1.5">
      {items.map((item, i) => (
        <li
          key={item}
          className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
        >
          <span
            className="tw:grid tw:size-[18px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:text-white"
            style={{
              background: "var(--green)",
              ...run(TICK_AT[Math.min(i + offset, 3)]),
            }}
          >
            <FiCheck className="tw:[stroke-width:3.5]" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Bars({
  title,
  bars,
}: {
  title: string;
  bars: { label: string; val: number }[];
}) {
  return (
    <>
      <p className="tw:text-[12px]/[1.4] tw:text-(--muted)">{title}</p>
      {bars.map((b) => (
        <div key={b.label}>
          <span className="tw:mb-1 tw:flex tw:justify-between tw:text-[12.5px] tw:font-medium">
            {b.label}
            <span className="tw:text-(--muted)">{b.val}%</span>
          </span>
          <Fill w={b.val} />
        </div>
      ))}
    </>
  );
}

/** One UI per process step, built from the page's own data: 1 = the free
    audit's score card, 2 = foundation checklist, 3 = this month's work (web:
    launch scores), 4 = the report (web: the launch). */
export function stepUis(
  kind: DelawareKind,
  process: DelawareData["process"],
  audit: DelawareData["why"]["banner"]["audit"],
): ReactNode[] {
  if (kind === "seo") return seoStepUis(process);
  if (kind === "web") return webStepUis(process);
  if (kind === "wilmington") return wilmStepUis(process);
  if (kind === "phl-marketing") return phlMarketingStepUis(process);
  if (kind === "phl-seo") return phlSeoStepUis(process);
  if (kind === "phl-ppc") return phlPpcStepUis(process);
  if (kind === "phl-sem") return phlSemStepUis(process);
  if (kind === "nyc-marketing") return nycMarketingStepUis(process);
  if (kind === "nyc-seo") return nycSeoStepUis(process);
  if (kind === "nyc-web") return nycWebStepUis(process);
  const [, s2, s3, s4] = process.steps;
  const gap = 1 - Number(audit.score) / 100;
  return [
    <Slot key="audit">
      <UiHead
        icon={<FiSearch />}
        title={audit.title}
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="green">{audit.grade}</Chip>}
          />
        }
      />
      <div className="tw:grid tw:grid-cols-[112px_minmax(0,1fr)] tw:items-center tw:gap-3">
        <span className="tw:relative tw:block">
          <svg viewBox="0 0 220 120" className="tw:block tw:w-full">
            <path
              d="M20 110 A90 90 0 0 1 200 110"
              fill="none"
              stroke="#e6ebf3"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M20 110 A90 90 0 0 1 200 110"
              fill="none"
              strokeWidth="20"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={
                {
                  stroke: "var(--blue)",
                  strokeDashoffset: gap,
                  "--g": gap,
                  ...run("de-gauge"),
                } as CSSProperties
              }
            />
          </svg>
          <b className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:text-center tw:text-[24px] tw:leading-none tw:tracking-[-0.03em]">
            {audit.score}
          </b>
        </span>
        <ul className="tw:grid tw:gap-1">
          {audit.rows.map((row, i) => (
            <li
              key={row.label}
              className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 3)}
            >
              <span className="tw:min-w-0 tw:truncate">{row.label}</span>
              <Chip tone="green" className="tw:flex-none">
                {row.flag}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
      <p className="tw:text-[11.5px] tw:text-(--muted)">{audit.tag}</p>
    </Slot>,

    <Slot key="foundation">
      <UiHead
        icon={<FiSettings />}
        tone="gold"
        title="Foundation fixes"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <Fill w={100} color="var(--gold)" />
      <Ticked items={FOUNDATION[kind] ?? []} />
    </Slot>,

    /* Marketing: the channels going live one after another. */
    <Slot key="launch-channels">
      <UiHead
        icon={<FiZap />}
        tone="green"
        title="Campaign launch"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {[
          { icon: <GoogleG className="tw:size-4" />, t: "Google Ads" },
          {
            icon: <FiMapPin className="tw:text-(--blue)" />,
            t: "Local SEO & Maps",
          },
          {
            icon: <FiThumbsUp className="tw:text-[#1877f2]" />,
            t: "Social media",
          },
        ].map((row, i) => (
          <li
            key={row.t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
          >
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:bg-(--panel) tw:text-[13px]">
              {row.icon}
            </span>
            {row.t}
            <span className="tw:ml-auto">
              <Flip
                n={(i + 1) as 1 | 2 | 3}
                from={<Chip tone="amber">Setting up</Chip>}
                to={<Chip tone="green">● Live</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="report">
      <UiHead
        icon={<FiBarChart2 />}
        title="Monthly report"
        right={<Chip tone="green">Sent</Chip>}
      />
      <Bars title={process.visualTitle} bars={process.visualBars} />
      <div className="tw:flex tw:flex-wrap tw:gap-1.5">
        {(s4?.chips ?? []).map((chip, i) => (
          <span key={chip} style={inAt(i + 4)}>
            <Chip tone="blue">{chip}</Chip>
          </span>
        ))}
      </div>
    </Slot>,
  ];
}

/* =========================================================== scorecard */

/** Before → after rows: the "after" dot slides out from the "before" mark. */
export function ScoreUi({
  rows,
  web,
}: {
  rows: DelawareData["compare"]["scoreRows"];
  web: boolean;
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-5">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-3 tw:text-[14.5px] tw:font-medium">
              {row.label}
              <span className="tw:text-[13px] tw:whitespace-nowrap tw:text-(--muted)">
                {row.before}% → <b className="tw:text-(--ink)">{row.after}%</b>
              </span>
            </span>
            <span
              className="tw:relative tw:mt-2.5 tw:block tw:h-2.5 tw:rounded-full tw:bg-(--panel)"
              style={
                {
                  "--b": `${row.before}%`,
                  "--a": `${row.after}%`,
                  "--s": `${row.after - row.before}%`,
                } as CSSProperties
              }
            >
              <i
                className="tw:absolute tw:inset-y-0 tw:block tw:rounded-full tw:bg-(--blue)/25"
                style={{
                  left: `${row.before}%`,
                  width: `${row.after - row.before}%`,
                  ...run("de-span"),
                }}
              />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:size-3.5 tw:-translate-1/2 tw:rounded-full tw:bg-[#b6c0d2]"
                style={{ left: `${row.before}%` }}
              />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:size-[18px] tw:-translate-1/2 tw:rounded-full tw:border-[3px] tw:border-white tw:bg-(--blue) tw:shadow-[0_2px_8px_rgba(37,103,232,0.35)]"
                style={{ left: `${row.after}%`, ...run("de-slide") }}
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-6 tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-2 tw:text-[13px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:size-3 tw:rounded-full tw:bg-[#b6c0d2]" />
          Example: starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:size-3 tw:rounded-full tw:bg-(--blue)" />
          {web ? "Example: after a rebuild" : "Example: goal"}
        </span>
      </p>
    </div>
  );
}

/* ================================================================ hub */

const NODE =
  "tw:relative tw:z-1 tw:flex tw:items-center tw:gap-4 tw:rounded-[24px] tw:border-[1.5px] tw:border-(--line) tw:bg-white tw:px-5 tw:py-4 tw:text-left tw:max-bssm:px-4 tw:max-bssm:py-3.5";
const NODE_TAIL_L =
  "tw:after:absolute tw:after:top-1/2 tw:after:-right-10 tw:after:w-10 tw:after:border-t-[1.5px] tw:after:border-dashed tw:after:border-[#c9d3e3] tw:after:content-[''] tw:max-bslg:after:hidden";
const NODE_TAIL_R =
  "tw:before:absolute tw:before:top-1/2 tw:before:-left-10 tw:before:w-10 tw:before:border-t-[1.5px] tw:before:border-dashed tw:before:border-[#c9d3e3] tw:before:content-[''] tw:max-bslg:before:hidden";

/** Six services (or signals) around the business they all feed. */
export function GrowthHub({
  engine,
  cta,
}: {
  engine: DelawareData["engine"];
  cta: ReactNode;
}) {
  const node = (
    n: DelawareData["engine"]["nodes"][number],
    i: number,
    side: "l" | "r",
  ) => (
    <li
      key={n.title}
      className={cx(NODE, side === "l" ? NODE_TAIL_L : NODE_TAIL_R)}
      style={{ ...run("de-node", 9, "linear"), animationDelay: `${i * 1.5}s` }}
    >
      <span
        className={cx(
          "tw:grid tw:size-12 tw:flex-none tw:place-items-center tw:rounded-[14px] tw:text-[21px] tw:max-bssm:size-11 tw:max-bssm:text-[19px]",
          n.tone === "gold"
            ? "tw:bg-(--gold) tw:text-(--ink)"
            : "tw:bg-(--blue) tw:text-white",
        )}
        aria-hidden="true"
      >
        {n.icon}
      </span>
      <span className="tw:min-w-0">
        <b className="tw:block tw:text-[17px]/[1.25] tw:max-bssm:text-base">
          {n.title}
        </b>
        <span className="tw:text-[14.5px] tw:text-(--muted)">{n.outcome}</span>
      </span>
    </li>
  );
  return (
    <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tw:items-center tw:gap-10 tw:max-bslg:grid-cols-2 tw:max-bslg:gap-x-5 tw:max-bslg:gap-y-8 tw:max-bssm:grid-cols-1 tw:max-bssm:gap-y-3">
      <ul className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
        {engine.nodes.slice(0, 3).map((n, i) => node(n, i, "l"))}
      </ul>
      <div className="tw:flex tw:flex-col tw:items-center tw:px-2 tw:text-center tw:max-bslg:order-first tw:max-bslg:col-span-full tw:max-bssm:mb-5">
        <span
          className="tw:grid tw:size-[200px] tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[64px] tw:text-white tw:shadow-[0_0_0_14px_#fff,0_0_0_15.5px_var(--blue-soft)] tw:max-bsxl:size-40 tw:max-bsxl:text-[52px] tw:max-bssm:size-[132px] tw:max-bssm:text-[44px]"
          aria-hidden="true"
        >
          <span
            className="tw:grid tw:size-full tw:place-items-center tw:rounded-full"
            style={run("de-halo", 3, "ease-out")}
          >
            <FiTrendingUp />
          </span>
        </span>
        <b className="tw:mt-8 tw:text-2xl tw:max-bssm:mt-6 tw:max-bssm:text-[21px]">
          {engine.coreStrong}
        </b>
        <span className="tw:mt-1 tw:text-[15px] tw:text-(--muted)">
          {engine.coreSub}
        </span>
        <div className="tw:mt-5">{cta}</div>
      </div>
      <ul className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
        {engine.nodes.slice(3).map((n, i) => node(n, i + 3, "r"))}
      </ul>
    </div>
  );
}

/* ====================================================== feature panels */

const MAP_TOWNS: [string, string, string][] = [
  ["Wilmington", "#8", "#2"],
  ["Dover", "#5", "#1"],
  ["Newark", "#11", "#3"],
  ["Lewes", "#7", "#2"],
];

/** Map Pack rank by Delaware town: a mini map with three numbered pins
    (yours first) and each town's rank climbing into the top three. */
function TownsMapUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title="Map Pack rank by town"
        right={<Chip tone="green">Top 3</Chip>}
      />
      <div
        className="tw:relative tw:mt-4 tw:h-[120px] tw:overflow-hidden tw:rounded-[16px] tw:bg-[#e8f0e6]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 46%, #fff 46%, #fff 50%, transparent 50%), linear-gradient(20deg, transparent 62%, #fff 62%, #fff 65%, transparent 65%), linear-gradient(90deg, transparent 30%, #cfe3f6 30%, #cfe3f6 38%, transparent 38%)",
        }}
      >
        {[
          { l: "28%", t: "34%", n: "2", you: false },
          { l: "52%", t: "52%", n: "1", you: true },
          { l: "74%", t: "28%", n: "3", you: false },
        ].map((pin) => (
          <span
            key={pin.n}
            className={cx(
              "tw:absolute tw:grid tw:size-7 tw:-translate-1/2 tw:place-items-center tw:rounded-full tw:border-2 tw:border-white tw:text-[12px] tw:font-semibold tw:shadow-[0_6px_12px_-4px_rgba(12,21,38,0.35)]",
              pin.you
                ? "tw:z-1 tw:size-9 tw:bg-(--blue) tw:text-white"
                : "tw:bg-white tw:text-(--ink)",
            )}
            style={{ left: pin.l, top: pin.t }}
          >
            {pin.n}
            {pin.you ? (
              <i
                className="tw:absolute tw:top-1/2 tw:left-1/2 tw:-z-1 tw:block tw:size-9 tw:rounded-full tw:bg-(--blue)"
                style={run("de-ping", 2.4, "ease-out")}
              />
            ) : null}
          </span>
        ))}
        <span className="tw:absolute tw:bottom-2 tw:left-2 tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:text-(--blue-dark)">
          Your Business · #1
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2">
        {MAP_TOWNS.map(([town, from, to], i) => (
          <li
            key={town}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[13px] tw:font-medium"
          >
            <FiMapPin className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
            {town}
            <span className="tw:ml-auto">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">{from}</Chip>}
                to={<Chip tone="green">{to}</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A search, your sponsored ad on top with a Call button, and the
    campaign's direction of travel (no figures). */
function AdsUi() {
  return (
    <div className={CARD}>
      <span className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-2 tw:text-[13px]">
        <GoogleG className="tw:size-4 tw:flex-none" />
        <span
          className="tw:inline-block tw:overflow-hidden tw:whitespace-nowrap"
          style={{ maxWidth: 260, ...run("de-type") }}
        >
          emergency plumber dover de
        </span>
        <FiSearch className="tw:ml-auto tw:size-4 tw:flex-none tw:text-(--blue)" />
      </span>
      <div
        className="tw:mt-3 tw:rounded-[16px] tw:border-[1.5px] tw:border-(--blue)/40 tw:bg-(--blue-soft)/50 tw:p-3.5"
        style={inAt(2)}
      >
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[11.5px]">
          <b className="tw:text-[11px] tw:font-semibold">Sponsored</b>
          <span className="tw:text-(--muted)">yourbusiness.com</span>
        </span>
        <b className="tw:mt-1 tw:block tw:text-[15px]/[1.3] tw:text-[#1a0dab]">
          Your Business · Same-Day Service in Dover
        </b>
        <span className="tw:mt-1 tw:block tw:text-[12px] tw:text-(--muted)">
          Licensed &amp; insured · Free quotes · Open now
        </span>
        <span className="tw:mt-2.5 tw:flex tw:gap-2">
          <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold tw:text-white">
            <FiPhone className="tw:size-3" /> Call
          </span>
          <span className="tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-1 tw:text-[12px] tw:font-medium">
            Get a quote
          </span>
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2">
        {[
          { k: "Calls", up: true },
          { k: "Leads", up: true },
          { k: "Cost / lead", up: false },
        ].map((m, i) => (
          <li
            key={m.k}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
            style={inAt(i + 3)}
          >
            <span className="tw:block tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
              {m.k}
            </span>
            <b className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[14px] tw:text-[#1f7a3a]">
              {m.up ? <FiTrendingUp /> : <FiTrendingDown />}
              {m.up ? "Up" : "Down"}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** An AI assistant answering a local question with your business first. */
function AiAnswerUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMessageCircle />}
        tone="ink"
        title="AI answer"
        right={<Chip tone="blue">AI Overview</Chip>}
      />
      <p
        className="tw:mt-4 tw:ml-auto tw:w-fit tw:max-w-[85%] tw:rounded-[16px] tw:rounded-br-[4px] tw:bg-(--ink) tw:px-3.5 tw:py-2.5 tw:text-[13px] tw:text-white"
        style={inAt(1)}
      >
        Who&apos;s a reliable roofer near Wilmington, DE?
      </p>
      <div
        className="tw:mt-3 tw:rounded-[16px] tw:bg-(--panel) tw:p-3.5"
        style={inAt(3)}
      >
        <span className="tw:block tw:text-[12.5px] tw:text-(--muted)">
          Top picks near Wilmington:
        </span>
        <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-white tw:px-3 tw:py-2">
          <b className="tw:text-[13.5px]">1. Your Business</b>
          <span className="tw:flex tw:gap-px" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar
                key={n}
                className="tw:size-3 tw:fill-(--gold) tw:text-(--gold)"
              />
            ))}
          </span>
          <Chip tone="green" className="tw:ml-auto">
            Recommended
          </Chip>
        </span>
        <span className="tw:mt-2 tw:grid tw:gap-1.5 tw:px-1">
          <i className="tw:block tw:h-1.5 tw:w-[86%] tw:rounded-full tw:bg-[#dfe5ee]" />
          <i className="tw:block tw:h-1.5 tw:w-[64%] tw:rounded-full tw:bg-[#dfe5ee]" />
        </span>
      </div>
      <span
        className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)"
        style={inAt(5)}
      >
        Sources:
        <Chip tone="blue">Google reviews</Chip>
        <Chip tone="blue">yourbusiness.com</Chip>
        <Chip tone="blue">Business Profile</Chip>
      </span>
    </div>
  );
}

/** UI for a Dallas-style feature row. */
export function FeaturePanel({
  ui,
  flip,
}: {
  ui: DelawareFeature["ui"];
  flip?: boolean;
}) {
  const panel = {
    towns: <TownsMapUi />,
    ads: <AdsUi />,
    ai: <AiAnswerUi />,
    keywords: <KeywordsUi />,
    crawl: <CrawlUi />,
    citations: <CitationsUi />,
    devices: <DevicesUi />,
    lighthouse: <LighthouseUi />,
    leadform: <LeadFormUi />,
    suburbs: <SuburbsUi />,
    lsa: <LsaUi />,
    reviews: <ReviewsUi />,
    social: <SocialCalendarUi />,
    hoods: <NeighborhoodHeatUi />,
    funnel: <FunnelUi />,
    pages: <NeighborhoodPagesUi />,
    links: <BacklinksUi />,
    gsc: <SearchConsoleUi />,
    tree: <AccountTreeUi />,
    terms: <SearchTermsUi />,
    abtest: <AbTestUi />,
    serpshare: <SerpShareUi />,
    loop: <KeywordLoopUi />,
    budget: <BudgetSplitDialUi />,
    hours: <SearchHoursUi />,
    leadlog: <LeadLogUi />,
    monitor: <ProfileMonitorUi />,
    blocks: <BlockCoverageUi />,
    categories: <CategoriesUi />,
    schema: <LocalSchemaUi />,
    a11y: <AccessibilityUi />,
    editor: <SiteEditorUi />,
    waterfall: <LoadWaterfallUi />,
  }[ui];
  return <Stage flip={flip}>{panel}</Stage>;
}

/* ------------------------------------------ SEO page feature panels */

const KEYWORDS: [string, string, string, number][] = [
  ["emergency plumber dover de", "#18", "#2", 72],
  ["dentist wilmington de", "#24", "#4", 58],
  ["roof repair lewes de", "#15", "#1", 44],
  ["hvac service newark de", "#31", "#3", 66],
];

/** Target keywords climbing from page two to the top of page one, with a
    bar for each term's relative search demand. */
function KeywordsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSearch />}
        title="Keyword rankings"
        right={<Chip tone="blue">Delaware</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_64px_52px] tw:gap-x-3 tw:px-1 tw:text-[11px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        <span>Keyword</span>
        <span>Demand</span>
        <span className="tw:text-right">Rank</span>
      </div>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {KEYWORDS.map(([kw, from, to, demand], i) => (
          <li
            key={kw}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_64px_52px] tw:items-center tw:gap-x-3 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
          >
            <span className="tw:truncate tw:text-[13px] tw:font-medium">
              {kw}
            </span>
            <Fill w={demand} color="var(--gold)" className="tw:h-1.5" />
            <span className="tw:flex tw:justify-end">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">{from}</Chip>}
                to={<Chip tone="green">{to}</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:rounded-[14px] tw:bg-(--ink) tw:px-4 tw:py-3 tw:text-white">
        <span className="tw:text-[12.5px] tw:text-white/70">
          Target terms on page one
        </span>
        <Flip
          n={3}
          from={<b className="tw:text-[15px]">0 of 4</b>}
          to={<b className="tw:text-[15px] tw:text-(--gold)">4 of 4</b>}
        />
      </div>
    </div>
  );
}

const CRAWL_ISSUES: [string, string][] = [
  ["Slow pages on mobile", "Fixed"],
  ["Broken links and redirects", "Fixed"],
  ["Missing schema markup", "Added"],
  ["Duplicate page titles", "Fixed"],
];

/** Site health crawl: the score climbs as each technical issue is fixed. */
function CrawlUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSettings />}
        tone="green"
        title="Site health crawl"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Crawling…</Chip>}
            to={<Chip tone="green">Healthy</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-4 tw:rounded-[16px] tw:bg-(--panel) tw:px-4 tw:py-3">
        <span className="tw:relative tw:grid tw:size-[72px] tw:flex-none tw:place-items-center">
          <svg
            viewBox="0 0 60 60"
            className="tw:absolute tw:inset-0 tw:-rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke="#dfe5ee"
              strokeWidth="6"
            />
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={
                {
                  stroke: "var(--green)",
                  strokeDashoffset: 0.04,
                  "--g": 0.04,
                  ...run("de-gauge"),
                } as CSSProperties
              }
            />
          </svg>
          <Flip
            n={3}
            from={<b className="tw:text-[18px]">64</b>}
            to={<b className="tw:text-[18px]">96</b>}
          />
        </span>
        <span>
          <b className="tw:block tw:text-[14px]">Health score</b>
          <span className="tw:text-[12px] tw:text-(--muted)">
            Speed, structure and markup
          </span>
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {CRAWL_ISSUES.map(([issue, done], i) => (
          <li
            key={issue}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
          >
            <i
              className="tw:block tw:size-2 tw:flex-none tw:rounded-full tw:bg-(--green)"
              style={run(TICK_AT[i])}
            />
            {issue}
            <span className="tw:ml-auto">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="red">Issue</Chip>}
                to={<Chip tone="green">{done}</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DIRECTORIES: { icon: ReactNode; name: string }[] = [
  { icon: <GoogleG className="tw:size-4" />, name: "Google Business Profile" },
  {
    icon: <SiApple className="tw:size-4 tw:text-(--ink)" />,
    name: "Apple Business Connect",
  },
  { icon: <SiYelp className="tw:size-4 tw:text-[#d32323]" />, name: "Yelp" },
  {
    icon: <FiGlobe className="tw:size-4 tw:text-[#008373]" />,
    name: "Bing Places",
  },
  {
    icon: <SiFacebook className="tw:size-4 tw:text-[#1877f2]" />,
    name: "Facebook",
  },
];

/** Listing consistency: name, address and phone matched on every
    directory, the share climbing to 100%. */
function CitationsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title="Listing consistency"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">62% match</Chip>}
            to={<Chip tone="green">100% match</Chip>}
          />
        }
      />
      <p className="tw:mt-3 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:text-(--muted)">
        <b className="tw:text-(--ink)">Your Business</b> · 8 Main St, Dover, DE
        · (302) 555-0142
      </p>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {DIRECTORIES.map((d, i) => (
          <li
            key={d.name}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
          >
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:bg-(--panel)">
              {d.icon}
            </span>
            {d.name}
            <span className="tw:ml-auto">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="amber">Mismatch</Chip>}
                to={<Chip tone="green">Matched</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ======================================================= leads phone */

const LEAD_NOTES = [
  {
    icon: <FiPhone />,
    tone: "tw:bg-(--green)",
    t: "New call · 3m 12s",
    d: "From Google Maps",
    ago: "now",
  },
  {
    icon: <FiFileText />,
    tone: "tw:bg-(--blue)",
    t: "Quote request",
    d: "From your website",
    ago: "8m",
  },
  {
    icon: <GoogleG className="tw:size-4" />,
    tone: "tw:bg-white",
    t: "New lead",
    d: "From Google Ads",
    ago: "25m",
  },
  {
    icon: <FiThumbsUp />,
    tone: "tw:bg-[#1877f2]",
    t: "New message",
    d: "From Facebook",
    ago: "1h",
  },
];

/** Lock screen filling with leads, each tagged with the channel that sent
    it. Decorative (the frame is aria-hidden). */
export function LeadsPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-[linear-gradient(160deg,#1d2a44,#2567e8_120%)] tw:px-3.5 tw:pt-[52px] tw:text-white">
        <p className="tw:text-center tw:text-[12px] tw:text-white/70">
          Tuesday, October 22
        </p>
        <p className="tw:text-center tw:text-[52px] tw:leading-none tw:font-medium tw:tracking-[-0.03em]">
          9:41
        </p>
        <ul className="tw:mt-6 tw:grid tw:gap-2">
          {LEAD_NOTES.map((n, i) => (
            <li
              key={n.t}
              className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-white/90 tw:px-3 tw:py-2.5 tw:text-(--ink)"
              style={inAt(i + 1)}
            >
              <span
                className={cx(
                  "tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:text-[14px] tw:text-white",
                  n.tone,
                )}
              >
                {n.icon}
              </span>
              <span className="tw:min-w-0">
                <b className="tw:block tw:text-[12.5px]/[1.25]">{n.t}</b>
                <span className="tw:block tw:text-[11px] tw:text-(--muted)">
                  {n.d}
                </span>
              </span>
              <span className="tw:ml-auto tw:text-[10.5px] tw:text-(--muted)">
                {n.ago}
              </span>
            </li>
          ))}
        </ul>
        <div
          className="tw:mt-3 tw:rounded-[16px] tw:bg-(--gold) tw:px-3.5 tw:py-3 tw:text-(--ink)"
          style={run("de-late")}
        >
          <b className="tw:block tw:text-[13px]">Every lead tracked</b>
          <span className="tw:text-[11.5px]">
            Source, time and cost in your monthly report
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ======================================================== rank board */

/** Local rank tracker for the dark local-SEO card: towns, tracked
    keywords, rank and 30-day move, with the share of terms in the top 3. */
export function RankBoardUi({
  rank,
}: {
  rank: NonNullable<DelawareExtras["rank"]>;
}) {
  const gap = 1 - rank.summaryPercent / 100;
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b className="tw:text-[15px]">Local rank tracker</b>
        <Chip tone="blue">{rank.scope}</Chip>
      </div>
      <table className="tw:mt-4 tw:w-full tw:border-collapse tw:text-left tw:text-[13px] tw:max-bssm:text-[12px]">
        <thead className="tw:text-[11px] tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
          <tr>
            <th className="tw:pb-2 tw:font-semibold">Town</th>
            <th className="tw:pb-2 tw:font-semibold tw:max-bssm:hidden">
              Tracked keyword
            </th>
            <th className="tw:pb-2 tw:font-semibold">Rank</th>
            <th className="tw:pb-2 tw:text-right tw:font-semibold">
              30-day move
            </th>
          </tr>
        </thead>
        <tbody>
          {rank.rows.map((row, i) => (
            <tr
              key={row.city}
              className="tw:border-t tw:border-(--line)"
              style={inAt(i + 1)}
            >
              <td className="tw:py-2 tw:pr-2 tw:font-medium">{row.city}</td>
              <td className="tw:py-2 tw:pr-2 tw:text-(--muted) tw:max-bssm:hidden">
                {row.keyword}
              </td>
              <td className="tw:py-2 tw:pr-2">
                <span className="tw:rounded-full tw:bg-(--gold) tw:px-2 tw:py-0.5 tw:text-[12px] tw:font-semibold">
                  {row.rank}
                </span>
              </td>
              <td className="tw:py-2 tw:text-right tw:font-semibold tw:text-(--green)">
                ▲ {row.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
        <span className="tw:relative tw:grid tw:size-12 tw:flex-none tw:place-items-center">
          <svg
            viewBox="0 0 60 60"
            className="tw:absolute tw:inset-0 tw:-rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke="#dfe5ee"
              strokeWidth="6"
            />
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={
                {
                  stroke: "var(--green)",
                  strokeDashoffset: gap,
                  "--g": gap,
                  ...run("de-gauge"),
                } as CSSProperties
              }
            />
          </svg>
          <b className="tw:text-[12px]">{rank.summaryPercent}%</b>
        </span>
        <span className="tw:text-[12.5px]/[1.35] tw:font-medium">
          {rank.summaryLabel}
        </span>
        <span className="tw:ml-auto tw:flex tw:gap-3 tw:max-bssm:hidden">
          {rank.stats.map((st) => (
            <span key={st.label} className="tw:text-right">
              <b className="tw:block tw:text-[15px] tw:leading-tight">
                {st.value}
              </b>
              <span className="tw:block tw:text-[10px] tw:text-(--muted)">
                {st.label}
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* ============================================= SEO page: own step UIs */

const COMPETITORS: [string, string, string][] = [
  ["1", "Competitor A", "212 reviews"],
  ["2", "Competitor B", "148 reviews"],
  ["3", "Competitor C", "96 reviews"],
];

const PROFILE_FIELDS = [
  "Categories",
  "Services",
  "Hours",
  "Photos",
  "Description",
  "Q&A",
];

const AUTHORITY: { icon: ReactNode; t: string; d: string; chip: string }[] = [
  {
    icon: <FiFileText />,
    t: "New page",
    d: "Roof repair in Lewes",
    chip: "Published",
  },
  {
    icon: <FiGlobe />,
    t: "Local link",
    d: "Kent County chamber",
    chip: "Earned",
  },
  { icon: <FiStar />, t: "Reviews", d: "From this month's jobs", chip: "+9" },
];

/* 5×5 rank grid: cell index → start colour delay class (green spreads out
   from the centre, where the business is). */
const GRID_RING = [
  2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 0, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2,
];

/** The SEO page's four process UIs (none shared with the other drafts):
    competitor check, profile completion, this month's authority work and
    the rank grid spreading green. */
function seoStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3, s4] = process.steps;
  return [
    <Slot key="seo-check">
      <UiHead
        icon={<FiSearch />}
        title="Who ranks above you"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Checking…</Chip>}
            to={<Chip tone="green">3 gaps found</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {COMPETITORS.map(([n, name, reviews], i) => (
          <li
            key={name}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12.5px]"
            style={inAt(i + 1)}
          >
            <b className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[11px]">
              {n}
            </b>
            <span className="tw:font-medium">{name}</span>
            <span className="tw:ml-auto tw:text-[11.5px] tw:text-(--muted)">
              {reviews}
            </span>
          </li>
        ))}
        <li
          className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-dashed tw:border-(--red)/50 tw:bg-[#fde4e1]/50 tw:px-3 tw:py-1.5 tw:text-[12.5px]"
          style={inAt(4)}
        >
          <b className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-[11px] tw:text-white">
            7
          </b>
          <span className="tw:font-semibold">Your Business</span>
          <Chip tone="red" className="tw:ml-auto">
            Not in top 3
          </Chip>
        </li>
      </ul>
    </Slot>,

    <Slot key="seo-profile">
      <UiHead
        icon={<FiMapPin />}
        tone="gold"
        title="Business Profile"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">58% complete</Chip>}
            to={<Chip tone="green">100% complete</Chip>}
          />
        }
      />
      <Fill w={100} color="var(--green)" />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {PROFILE_FIELDS.map((field, i) => (
          <li
            key={field}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium"
          >
            <span
              className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:text-white"
              style={{
                background: "var(--green)",
                ...run(`de-dot-${(i % 5) + 1}`),
              }}
            >
              <FiCheck className="tw:[stroke-width:4]" />
            </span>
            {field}
          </li>
        ))}
      </ul>
      <p className="tw:text-[11px] tw:text-(--muted)">{s2?.tag}</p>
    </Slot>,

    <Slot key="seo-authority">
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="Authority this month"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {AUTHORITY.map((row, i) => (
          <li
            key={row.t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2"
            style={inAt(i + 2)}
          >
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:bg-white tw:text-[13px] tw:text-(--blue)">
              {row.icon}
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:text-[12.5px]/[1.25]">{row.t}</b>
              <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                {row.d}
              </span>
            </span>
            <Chip tone="green" className="tw:ml-auto">
              {row.chip}
            </Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="seo-grid">
      <UiHead
        icon={<FiMapPin />}
        title="Rank grid · Dover"
        right={<Chip tone="green">Top 3 reach</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3">
        <div className="tw:grid tw:grid-cols-5 tw:gap-1 tw:rounded-[12px] tw:bg-[#e8f0e6] tw:p-1.5">
          {GRID_RING.map((ring, i) => (
            <span
              key={i}
              className="tw:grid tw:aspect-square tw:place-items-center tw:rounded-full tw:text-[9px] tw:font-semibold tw:text-white"
              style={{
                background: "var(--green)",
                animation: "ui-dot 8s ease infinite both",
                animationDelay: `${ring * 0.6}s`,
              }}
            >
              {ring === 0 ? "1" : ring === 1 ? "2" : "3"}
            </span>
          ))}
        </div>
        <ul className="tw:grid tw:gap-1 tw:text-[11px] tw:text-(--muted)">
          {(s4?.chips ?? []).map((chip) => (
            <li key={chip} className="tw:flex tw:items-center tw:gap-1.5">
              <FiCheck className="tw:size-3 tw:text-(--green)" />
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </Slot>,
  ];
}

/* ============================================ SEO page: own scorecard */

/** Before / after as paired columns (the SEO page's scorecard; the other
    drafts use the dot scale). */
export function ScoreColumnsUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <div className="tw:grid tw:h-[190px] tw:grid-cols-4 tw:items-end tw:gap-3 tw:border-b tw:border-(--line)">
        {rows.map((row) => (
          <div
            key={row.label}
            className="tw:flex tw:h-full tw:items-end tw:justify-center tw:gap-1.5"
          >
            <span className="tw:flex tw:h-full tw:w-1/3 tw:flex-col tw:justify-end">
              <i
                className="tw:block tw:w-full tw:rounded-t-[6px] tw:bg-[#cfd7e4]"
                style={{ height: `${row.before}%` }}
              />
            </span>
            <span className="tw:flex tw:h-full tw:w-1/3 tw:flex-col tw:justify-end">
              <span className="tw:mb-1 tw:text-center tw:text-[11px] tw:font-semibold">
                {row.after}%
              </span>
              <i
                className="tw:block tw:w-full tw:rounded-t-[6px] tw:bg-(--blue)"
                style={
                  {
                    "--h": `${row.after}%`,
                    height: `${row.after}%`,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
            </span>
          </div>
        ))}
      </div>
      <div className="tw:mt-2 tw:grid tw:grid-cols-4 tw:gap-3 tw:text-center tw:text-[11.5px]/[1.3] tw:font-medium tw:text-(--ink-2)">
        {rows.map((row) => (
          <span key={row.label}>{row.label}</span>
        ))}
      </div>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-2 tw:text-[13px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:size-3 tw:rounded-[3px] tw:bg-[#cfd7e4]" />
          Example: starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:size-3 tw:rounded-[3px] tw:bg-(--blue)" />
          Example: goal
        </span>
      </p>
    </div>
  );
}
