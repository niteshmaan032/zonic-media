import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiAlertTriangle,
  FiCalendar,
  FiCheck,
  FiGlobe,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiPieChart,
  FiSearch,
  FiShield,
  FiShuffle,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { SiGoogle, SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";
import "./flOrlando.css";

/* UI for the Orlando digital marketing page only (18 Nov 2026); none of it
   appears on another page. Feature panels (visitor vs resident search
   splitter, the English/Spanish/Portuguese search mix per service, a
   listing guard for an Orlando Business Profile), the four process steps
   (lead-leak check, suburb toggles, the week's account activity, leads by
   source), the Business Profile booking phone for a Winter Park home
   inspection, the suburb rings on the dark card and the staircase
   scorecard. Illustrations: "Your Company", relative bars and statuses
   only, no prices or client figures. Palette: the page's pillars (violet,
   blossom pink, mint, night navy). */

const VIOLET = "#6d28d9";
const NAVY = "#172554";
const PINK = "#fce7f3";
const MINT = "#d1fae5";
const LILAC = "#ede9fe";
const ROSE = "#be185d";
const TEAL = "#047857";
const MAPS_GREEN = "#10b981";
const AI_PINK = "#ec4899";

/* ------------------------------------------------------ feature panels */

const SPLIT: {
  side: string;
  where: string;
  bg: string;
  ink: string;
  queries: string[];
  to: string;
}[] = [
  {
    side: "Visitors",
    where: "I-Drive · Lake Buena Vista",
    bg: PINK,
    ink: ROSE,
    queries: [
      "brunch near I-Drive",
      "urgent care Lake Buena Vista",
      "airport shuttle from MCO",
    ],
    to: "Visitor campaign · hotel zones",
  },
  {
    side: "Residents",
    where: "Winter Park · Lake Nona",
    bg: MINT,
    ink: TEAL,
    queries: [
      "AC tune-up Winter Park",
      "lawn service Lake Nona",
      "home inspector Baldwin Park",
    ],
    to: "Resident campaign · home ZIPs",
  },
];

/** Incoming Orlando searches forking into a visitor campaign and a
    resident campaign; the queries land on their side in turn. */
function QuerySplitUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShuffle />}
        title="Orlando search splitter"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:py-1.5 tw:pr-1.5 tw:pl-3 tw:text-[12px] tw:font-medium">
        <FiSearch className="tw:flex-none tw:text-(--muted)" />
        <span className="tw:truncate">New searches near Orlando, FL</span>
        <span className="tw:ml-auto tw:flex-none">
          <Flip
            n={1}
            from={<Chip tone="amber">Sorting…</Chip>}
            to={<Chip tone="green">Routed</Chip>}
          />
        </span>
      </div>
      <svg
        viewBox="0 0 200 26"
        preserveAspectRatio="none"
        className="tw:block tw:h-[26px] tw:w-full"
      >
        {[
          "M100 0 V9 Q100 13 96 13 H54 Q50 13 50 17 V26",
          "M100 0 V9 Q100 13 104 13 H146 Q150 13 150 17 V26",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke={i ? TEAL : ROSE}
            strokeWidth="1.6"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
            style={run("de-flow", 1, "linear")}
          />
        ))}
      </svg>
      <div className="tw:grid tw:grid-cols-2 tw:gap-2">
        {SPLIT.map((s, si) => (
          <div
            key={s.side}
            className="tw:flex tw:flex-col tw:rounded-[14px] tw:p-2.5"
            style={{ background: s.bg }}
          >
            <b
              className="tw:text-[10.5px] tw:tracking-[0.08em] tw:uppercase"
              style={{ color: s.ink }}
            >
              {s.side}
            </b>
            <span className="tw:mt-0.5 tw:text-[10.5px]/[1.3] tw:text-(--muted)">
              {s.where}
            </span>
            <ul className="tw:mt-2 tw:grid tw:gap-1.5">
              {s.queries.map((q, i) => (
                <li
                  key={q}
                  className="tw:rounded-[9px] tw:bg-white tw:px-2 tw:py-1.5 tw:text-[11.5px]/[1.3] tw:font-medium"
                  style={inAt(i * 2 + si + 1)}
                >
                  “{q}”
                </li>
              ))}
            </ul>
            <span
              className="tw:mt-auto tw:pt-2 tw:text-[10.5px]/[1.3] tw:font-semibold"
              style={{ color: s.ink }}
            >
              → {s.to}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const LANGS: { name: string; color: string }[] = [
  { name: "English", color: VIOLET },
  { name: "Spanish", color: AI_PINK },
  { name: "Portuguese", color: MAPS_GREEN },
];

/* Example shares of each service's searches by language (relative). */
const MIX: [string, number, number, number][] = [
  ["AC repair", 60, 31, 9],
  ["House cleaning", 52, 32, 16],
  ["Injury lawyer", 58, 35, 7],
  ["Home inspection", 72, 20, 8],
  ["Lawn care", 64, 26, 10],
];

/** Relative English, Spanish and Portuguese search demand per service as
    stacked bars. Analysis only: nothing here is written or run in those
    languages. */
function LanguageMixUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiGlobe />}
        tone="gold"
        title="Search language mix"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-3 tw:flex tw:rounded-full tw:bg-(--panel) tw:p-1 tw:text-[11.5px] tw:font-semibold">
        <span className="tw:flex-1 tw:rounded-full tw:bg-white tw:py-1 tw:text-center tw:[box-shadow:0_1px_4px_rgba(12,21,38,0.1)]">
          By service
        </span>
        <span className="tw:flex-1 tw:py-1 tw:text-center tw:text-(--muted)">
          By suburb
        </span>
      </div>
      <ul className="tw:mt-3.5 tw:grid tw:gap-2.5">
        {MIX.map(([service, ...shares]) => (
          <li
            key={service}
            className="tw:grid tw:grid-cols-[104px_minmax(0,1fr)] tw:items-center tw:gap-2.5 tw:text-[12px] tw:font-medium tw:max-bssm:grid-cols-[92px_minmax(0,1fr)]"
          >
            <span className="tw:truncate">{service}</span>
            <span className="flo-wipe tw:flex tw:h-3.5 tw:gap-[2px] tw:overflow-hidden tw:rounded-full">
              {shares.map((w, j) => (
                <i
                  key={LANGS[j].name}
                  className="tw:block tw:h-full"
                  style={{ width: `${w}%`, background: LANGS[j].color }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3.5 tw:flex tw:flex-wrap tw:gap-x-3.5 tw:gap-y-1 tw:text-[11px] tw:text-(--muted)">
        {LANGS.map((l) => (
          <span key={l.name} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: l.color }}
            />
            {l.name}
          </span>
        ))}
      </div>
      <p
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35] tw:text-(--text)"
        style={run("de-late")}
      >
        <FiUsers className="tw:flex-none tw:text-(--muted)" />
        Analysis only: used to plan staff, phone hours and reviews
      </p>
    </div>
  );
}

const GUARD: {
  t: string;
  risk?: [string, "red" | "amber", string];
}[] = [
  { t: "Business name matches your signage" },
  {
    t: "Street address shown for a service-area business",
    risk: ["Risk", "amber", "Hidden"],
  },
  { t: "Unapproved edit to opening hours", risk: ["Found", "red", "Reverted"] },
  { t: "Service area: Orange and Seminole" },
  { t: "Primary category: HVAC contractor" },
];

/** Health checks on an Orlando Business Profile: two risks flip to fixed
    and the listing status turns healthy. */
function ListingGuardUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShield />}
        tone="green"
        title="Listing guard"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">2 issues</Chip>}
            to={<Chip tone="green">All clear</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:px-3 tw:py-2.5 tw:[background:linear-gradient(120deg,#f5f3ff,#fdf2f8)]">
        <span
          className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
          style={{ background: VIOLET }}
        >
          YC
        </span>
        <span className="tw:min-w-0">
          <b className="tw:block tw:text-[13px]">Your Company</b>
          <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
            HVAC contractor · Orlando, FL
          </span>
        </span>
        <span className="tw:ml-auto tw:flex-none">
          <Flip
            n={3}
            from={<Chip tone="red">At risk</Chip>}
            to={<Chip tone="green">Healthy</Chip>}
          />
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {GUARD.map((g, i) => (
          <li
            key={g.t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px]/[1.3] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:min-w-0 tw:flex-1">{g.t}</span>
            {g.risk ? (
              <Flip
                n={3}
                from={<Chip tone={g.risk[1]}>{g.risk[0]}</Chip>}
                to={<Chip tone="green">{g.risk[2]}</Chip>}
              />
            ) : (
              <Chip tone="green">
                <FiCheck /> OK
              </Chip>
            )}
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Suspended anyway? Our reinstatement team files the appeal.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const LEAKS: [string, string, "red" | "amber"][] = [
  ["Ads running in Daytona", "Wasted reach", "red"],
  ["Calls missed after 6 PM", "No answer", "amber"],
  ["Category too broad", "Weak match", "amber"],
  ["No booking on mobile", "Lost leads", "red"],
];

const AREAS: [string, boolean][] = [
  ["Winter Park", true],
  ["Lake Nona", true],
  ["Oviedo", true],
  ["Kissimmee", true],
  ["Lake Mary", true],
  ["Clermont", false],
];

const WEEK: [string, string, string][] = [
  ["Mon", "Search terms blocked", "12"],
  ["Tue", "Google posts published", "2"],
  ["Thu", "Review replies drafted", "5"],
  ["Fri", "Booking path tested", "Done"],
];

/* Relative share of the month's leads by source (drawn, never shown as
   numbers). */
const SOURCES: [string, number, string][] = [
  ["Maps listing", 38, MAPS_GREEN],
  ["Paid search", 30, VIOLET],
  ["Website", 22, NAVY],
  ["AI answers", 10, AI_PINK],
];

/** Orlando digital marketing process UIs. */
function orlandoStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  let start = 0;
  const arcs = SOURCES.map(([name, share, color]) => {
    const arc = { name, share, color, start };
    start += share;
    return arc;
  });
  return [
    <Slot key="orl-leaks">
      <UiHead
        icon={<FiSearch />}
        title="Lead leak check"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">Scanning…</Chip>}
            to={<Chip tone="red">4 leaks</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:min-w-0 tw:gap-1.5">
        {LEAKS.map(([t, chip, tone], i) => (
          <li
            key={t}
            className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <FiAlertTriangle
              className={cx(
                "tw:flex-none",
                tone === "red" ? "tw:text-[#b8352a]" : "tw:text-[#8a6400]",
              )}
            />
            <span className="tw:min-w-0 tw:flex-1 tw:truncate">{t}</span>
            <Chip tone={tone}>{chip}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="orl-areas">
      <UiHead
        icon={<FiMapPin />}
        tone="gold"
        title="Towns to target"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:min-w-0 tw:grid-cols-2 tw:gap-1.5">
        {AREAS.map(([town, on], i) => (
          <li
            key={town}
            className="tw:flex tw:min-w-0 tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium"
          >
            <span className={cx("tw:truncate", !on && "tw:text-(--muted)")}>
              {town}
            </span>
            <span
              className={cx(
                "tw:flex tw:h-4 tw:w-7 tw:flex-none tw:items-center tw:rounded-full tw:px-0.5",
                on ? "tw:justify-end" : "tw:justify-start tw:bg-[#d5dce7]",
              )}
              style={
                on
                  ? ({
                      "--green": VIOLET,
                      background: VIOLET,
                      ...run(`de-dot-${Math.min(i + 1, 5)}`),
                    } as CSSProperties)
                  : undefined
              }
            >
              <i className="tw:block tw:size-3 tw:rounded-full tw:bg-white" />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="orl-week">
      <UiHead
        icon={<FiActivity />}
        tone="green"
        title="This week in your account"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:min-w-0 tw:gap-1.5">
        {WEEK.map(([day, t, n], i) => (
          <li
            key={t}
            className="tw:flex tw:min-w-0 tw:items-center tw:gap-2.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <b
              className="tw:grid tw:h-6 tw:w-10 tw:flex-none tw:place-items-center tw:rounded-[8px] tw:text-[10.5px] tw:text-white"
              style={{ background: i % 2 ? NAVY : VIOLET }}
            >
              {day}
            </b>
            <span className="tw:min-w-0 tw:flex-1 tw:truncate">{t}</span>
            <Chip tone={n === "Done" ? "green" : "muted"}>{n}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="orl-sources">
      <UiHead
        icon={<FiPieChart />}
        title="Where leads came from"
        right={<Chip tone="green">Month-end</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[92px_minmax(0,1fr)] tw:items-center tw:gap-4">
        <svg
          viewBox="0 0 42 42"
          className="tw:block tw:size-[92px] tw:-rotate-90"
        >
          <circle
            cx="21"
            cy="21"
            r="15.9"
            fill="none"
            stroke="#eef1f6"
            strokeWidth="6"
          />
          {arcs.map((a, i) => (
            <circle
              key={a.name}
              cx="21"
              cy="21"
              r="15.9"
              fill="none"
              stroke={a.color}
              strokeWidth="6"
              pathLength={100}
              strokeDasharray={`${a.share - 1.5} ${101.5 - a.share}`}
              strokeDashoffset={-a.start}
              style={inAt(i + 1)}
            />
          ))}
        </svg>
        <ul className="tw:grid tw:gap-1.5">
          {arcs.map((a, i) => (
            <li
              key={a.name}
              className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium"
              style={inAt(i + 1)}
            >
              <i
                className="tw:block tw:size-2.5 tw:flex-none tw:rounded-full"
                style={{ background: a.color }}
              />
              {a.name}
            </li>
          ))}
        </ul>
      </div>
      <span
        className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold"
        style={run("de-late")}
      >
        <Chip tone="blue">Next month</Chip> More budget to Lake Nona
      </span>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const ACTIONS: [ReactNode, string][] = [
  [<FiPhone key="call" className="tw:size-3.5" />, "Call"],
  [<FiNavigation key="dir" className="tw:size-3.5" />, "Directions"],
  [<FiGlobe key="web" className="tw:size-3.5" />, "Website"],
];

const INSPECTIONS = [
  "Full home inspection",
  "4-point inspection",
  "Wind mitigation",
];

const TIMES: [string, string][] = [
  ["Tue", "9 AM"],
  ["Wed", "10 AM"],
  ["Thu", "1 PM"],
];

/** A Business Profile for a Winter Park home inspector on a phone: the
    Book button pulses, the booking sheet slides up and the inspection is
    confirmed. Decorative (the frame is aria-hidden). */
function BookPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:mx-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11px] tw:font-medium">
          <SiGoogle className="tw:flex-none tw:text-[#4285f4]" />
          <span className="tw:truncate">home inspector winter park</span>
          <FiSearch className="tw:ml-auto tw:flex-none tw:text-(--muted)" />
        </div>
        <div
          className="tw:relative tw:mx-3 tw:mt-2.5 tw:h-[44px] tw:flex-none tw:max-bssm:h-[30px] tw:overflow-hidden tw:rounded-[14px]"
          style={{ background: `linear-gradient(120deg, ${VIOLET}, #db2777)` }}
        >
          <svg
            viewBox="0 0 236 50"
            preserveAspectRatio="xMaxYMax slice"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <path
              d="M146 50 V28 L170 13 L194 28 V50 Z"
              fill="rgba(255,255,255,0.24)"
            />
            <path
              d="M190 50 V33 L209 21 L228 33 V50 Z"
              fill="rgba(255,255,255,0.14)"
            />
            <rect
              x="163"
              y="36"
              width="13"
              height="14"
              rx="2"
              fill="rgba(255,255,255,0.32)"
            />
          </svg>
          <span className="tw:absolute tw:bottom-2 tw:left-2.5 tw:rounded-full tw:bg-white/20 tw:px-2 tw:py-0.5 tw:text-[9.5px] tw:font-semibold tw:text-white">
            Winter Park, FL
          </span>
        </div>
        <div className="tw:px-4 tw:pt-2">
          <b className="tw:block tw:text-[15px]">Your Company</b>
          <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1.5 tw:text-[10.5px] tw:text-(--muted)">
            <span className="tw:flex tw:gap-px">
              {[0, 1, 2, 3, 4].map((n) => (
                <FiStar
                  key={n}
                  className="tw:size-2.5 tw:fill-[#f4b400] tw:text-[#f4b400]"
                />
              ))}
            </span>
            Home inspector
          </span>
          <span className="tw:mt-0.5 tw:block tw:text-[10.5px] tw:text-(--muted)">
            <b className="tw:text-[#1f7a3a]">Open</b> · Serves Orange and
            Seminole
          </span>
        </div>
        <div className="tw:mx-3 tw:mt-2.5 tw:flex tw:items-center tw:gap-1.5">
          {ACTIONS.map(([icon, label]) => (
            <span
              key={label}
              title={label}
              className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-(--ink)"
              style={{ background: LILAC }}
            >
              {icon}
            </span>
          ))}
          <span
            className="flo-ring tw:ml-auto tw:flex tw:h-8 tw:items-center tw:gap-1.5 tw:rounded-full tw:px-3.5 tw:text-[11.5px] tw:font-semibold tw:whitespace-nowrap tw:text-white tw:max-bssm:gap-1 tw:max-bssm:px-2.5 tw:max-bssm:text-[11px]"
            style={{ background: VIOLET }}
          >
            <FiCalendar className="tw:size-3.5" /> Book online
          </span>
        </div>
        <div className="flo-sheet tw:absolute tw:inset-x-0 tw:bottom-0 tw:rounded-t-[22px] tw:bg-white tw:px-4 tw:pt-2 tw:pb-4 tw:[box-shadow:0_-14px_30px_-14px_rgba(12,21,38,0.4)]">
          <i className="tw:mx-auto tw:block tw:h-1 tw:w-9 tw:rounded-full tw:bg-(--line)" />
          <b className="tw:mt-2 tw:block tw:text-[13px]">Book an inspection</b>
          <ul className="tw:mt-2 tw:grid tw:gap-1.5">
            {INSPECTIONS.map((s, i) => (
              <li
                key={s}
                className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-medium"
                style={
                  i === 0
                    ? { borderColor: VIOLET, background: "#f5f3ff" }
                    : { borderColor: "var(--line)" }
                }
              >
                <i
                  className="tw:grid tw:size-3.5 tw:flex-none tw:place-items-center tw:rounded-full tw:border-2"
                  style={{ borderColor: i === 0 ? VIOLET : "#cbd5e1" }}
                >
                  {i === 0 ? (
                    <i
                      className="tw:block tw:size-1.5 tw:rounded-full"
                      style={{ background: VIOLET }}
                    />
                  ) : null}
                </i>
                {s}
              </li>
            ))}
          </ul>
          <div className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-center tw:text-[10px] tw:font-semibold">
            {TIMES.map(([d, t], i) => (
              <span
                key={d}
                className={cx(
                  "tw:rounded-[10px] tw:py-1.5",
                  i === 1 ? "tw:text-white" : "tw:bg-(--panel)",
                )}
                style={i === 1 ? { background: NAVY } : undefined}
              >
                {d} <span className="tw:font-medium tw:opacity-80">{t}</span>
              </span>
            ))}
          </div>
          <span
            className="tw:mt-2 tw:block tw:rounded-full tw:py-2 tw:text-center tw:text-[12px] tw:font-semibold tw:text-white"
            style={{ background: VIOLET }}
          >
            Confirm booking
          </span>
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:top-[40px] tw:z-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
            <FiCheck className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Inspection booked</b>
            Wed 10 AM · Winter Park
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Rings around downtown (viewBox 0 0 300 220). Labels sit on each ring at
   the town's rough compass bearing from downtown (angles in degrees,
   0 = east, clockwise). */
const OX = 150;
const OY = 112;
const RING_R = [40, 62, 84, 104];
const RING_FILL = ["#dcd0fd", "#e6ddfe", "#efe9ff", "#f7f4ff"];
const TOWNS: { name: string; r: number; deg: number }[] = [
  { name: "Winter Park", r: 40, deg: -80 },
  { name: "Lake Nona", r: 62, deg: 40 },
  { name: "Kissimmee", r: 84, deg: 100 },
  { name: "Sanford", r: 104, deg: -62 },
];

type Source = "maps" | "ads" | "ai";
const SOURCE_COLOR: Record<Source, string> = {
  maps: MAPS_GREEN,
  ads: VIOLET,
  ai: AI_PINK,
};
const SOURCE_NAME: Record<Source, string> = {
  maps: "Google Maps",
  ads: "Google Ads",
  ai: "AI answers",
};

const LEAD_DOTS: [number, number, Source][] = [
  [24, -100, "maps"],
  [24, 80, "ads"],
  [40, 10, "maps"],
  [40, 150, "ads"],
  [40, 215, "ai"],
  [62, -20, "maps"],
  [62, 95, "maps"],
  [62, 170, "ads"],
  [62, 250, "ai"],
  [84, -30, "ads"],
  [84, 10, "maps"],
  [84, 150, "ai"],
  [84, 200, "maps"],
  [104, 15, "maps"],
  [104, 160, "ads"],
  [104, 230, "maps"],
];

const at = (r: number, deg: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [
    Math.round((OX + r * Math.cos(a)) * 10) / 10,
    Math.round((OY + r * Math.sin(a)) * 10) / 10,
  ];
};

/** Concentric suburb rings around downtown Orlando with lead dots landing
    on them by source, a legend and the console's three numbers.
    Decorative. */
function SuburbRingsUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b className="tw:flex tw:items-center tw:gap-2 tw:text-[15px]">
          <SiGooglemaps className="tw:text-[#34a853]" /> {c.title}
        </b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <svg
        viewBox="0 0 300 220"
        className="tw:mt-3 tw:block tw:h-auto tw:w-full"
      >
        {[...RING_R].reverse().map((r, i) => (
          <circle
            key={r}
            cx={OX}
            cy={OY}
            r={r}
            fill={RING_FILL[RING_FILL.length - 1 - i]}
            stroke="#fff"
            strokeWidth="1.5"
          />
        ))}
        {LEAD_DOTS.map(([r, deg, src], i) => {
          const [x, y] = at(r, deg);
          return (
            <circle
              key={`${r}-${deg}`}
              cx={x}
              cy={y}
              r="3.6"
              fill={SOURCE_COLOR[src]}
              stroke="#fff"
              strokeWidth="1.2"
              style={inAt((i % 6) + 1)}
            />
          );
        })}
        <g>
          <rect
            x={OX - 27}
            y={OY - 9}
            width="54"
            height="18"
            rx="9"
            fill={NAVY}
          />
          <text
            x={OX}
            y={OY + 3.2}
            textAnchor="middle"
            fontSize="9"
            fontWeight="600"
            fill="#fff"
          >
            Downtown
          </text>
        </g>
        {TOWNS.map((t) => {
          const [x, y] = at(t.r, t.deg);
          const w = t.name.length * 5.2 + 14;
          return (
            <g key={t.name}>
              <rect
                x={x - w / 2}
                y={y - 8}
                width={w}
                height="16"
                rx="8"
                fill="#fff"
                stroke={VIOLET}
                strokeOpacity="0.35"
              />
              <text
                x={x}
                y={y + 3.1}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill={NAVY}
              >
                {t.name}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="tw:mt-2 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-4 tw:gap-y-1 tw:text-[11px] tw:font-medium tw:text-(--muted)">
        {(Object.keys(SOURCE_NAME) as Source[]).map((s) => (
          <span key={s} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: SOURCE_COLOR[s] }}
            />
            {SOURCE_NAME[s]}
          </span>
        ))}
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:divide-x tw:divide-(--line) tw:rounded-[14px] tw:bg-[#f5f3ff] tw:py-2.5">
        {c.metrics.map((m) => (
          <li key={m.label} className="tw:px-3">
            <b
              className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: VIOLET }}
            >
              {m.strong}
            </b>
            <span className="tw:mt-1 tw:block tw:text-[10.5px]/[1.25] tw:text-(--muted)">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

const STEPS = 6;

/** Before → after as a staircase per signal: six steps climb from the
    audit score to the target, one after another. */
function StairScore({ rows }: { rows: DelawareData["compare"]["scoreRows"] }) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-3.5">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-2 tw:text-[12.5px] tw:font-medium">
              <span className="tw:truncate">{row.label}</span>
              <span className="tw:flex-none tw:text-[11.5px] tw:text-(--muted)">
                {row.before} →{" "}
                <b className="tw:text-[16px] tw:tracking-[-0.02em] tw:text-(--ink)">
                  {row.after}
                </b>
              </span>
            </span>
            <span className="tw:mt-1.5 tw:flex tw:h-12 tw:items-end tw:gap-[3px] tw:border-b tw:border-(--line)">
              {Array.from({ length: STEPS }, (_, j) => {
                const h =
                  row.before + ((row.after - row.before) * j) / (STEPS - 1);
                return (
                  <i
                    key={j}
                    className={`flo-step-${j + 1} tw:block tw:flex-1 tw:rounded-t-[4px]`}
                    style={{
                      height: `${Math.round(h)}%`,
                      background:
                        j === 0
                          ? "#cbd5e1"
                          : j === STEPS - 1
                            ? VIOLET
                            : `rgba(109, 40, 217, ${0.22 + j * 0.13})`,
                    }}
                  />
                );
              })}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[3px] tw:bg-[#cbd5e1]" />
          Audit start
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[3px]"
            style={{ background: VIOLET }}
          />
          Target after the monthly steps
        </span>
      </p>
    </div>
  );
}

export const orlandoUi: FlCityUi = {
  Feature1: QuerySplitUi,
  Feature2: LanguageMixUi,
  Feature3: ListingGuardUi,
  Phone: BookPhone,
  DarkUi: SuburbRingsUi,
  Score: StairScore,
  stepUis: orlandoStepUis,
};
