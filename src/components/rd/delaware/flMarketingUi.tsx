import type { CSSProperties, ReactNode } from "react";
import {
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiCloudLightning,
  FiCompass,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import {
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flMarketing.css";

/* UI for the Florida digital marketing page only (18 Nov 2026); none of it
   appears on another page. Feature panels (two-season demand calendar,
   storm-mode campaign switch, AI answers across Florida cities), the four
   process steps, the storm-prep phone, the statewide lead map on the dark
   card and the thermometer scorecard. Illustrations: "Your Company", no
   prices or client figures. */

/* ------------------------------------------------------ feature panels */

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

/* Bands as [first month, last month] (1-based, inclusive). */
const SEASONS: {
  name: string;
  spans: [number, number][];
  bg: string;
  ink: string;
}[] = [
  {
    name: "Snowbird season",
    spans: [
      [1, 4],
      [10, 12],
    ],
    bg: "#fde68a",
    ink: "#7c4a03",
  },
  {
    name: "Hurricane season",
    spans: [[6, 11]],
    bg: "#bae6fd",
    ink: "#075985",
  },
];

const PLAYS: [string, string][] = [
  ["Mar", "Review push before the season ends"],
  ["May", "Storm-ready pages and ads prepared"],
  ["Sep", "Seasonal ads ramp up for October"],
];

/** Florida's two demand seasons on a 12-month strip, with the plays we
    schedule around them. */
export function FloridaSeasonsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        title="Florida demand calendar"
        right={<Chip tone="blue">Planned yearly</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-12 tw:gap-1 tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
        {MONTHS.map((m, i) => (
          <span key={`${m}-${i}`}>{m}</span>
        ))}
      </div>
      <div className="tw:mt-2 tw:grid tw:gap-1.5">
        {SEASONS.map((s, si) => (
          <div key={s.name} className="tw:grid tw:grid-cols-12 tw:gap-1">
            {s.spans.map(([a, b], k) => (
              <span
                key={k}
                className="tw:flex tw:h-7 tw:items-center tw:overflow-hidden tw:rounded-[8px] tw:px-2 tw:text-[10.5px] tw:font-semibold tw:whitespace-nowrap"
                style={{
                  gridColumn: `${a} / ${b + 1}`,
                  gridRow: 1,
                  background: s.bg,
                  color: s.ink,
                  ...inAt(si * 2 + k + 1),
                }}
              >
                {k === 0 || b - a > 2 ? s.name : ""}
              </span>
            ))}
          </div>
        ))}
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {PLAYS.map(([m, t], i) => (
          <li
            key={m}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 4)}
          >
            <b className="tw:grid tw:h-6 tw:w-10 tw:flex-none tw:place-items-center tw:rounded-[8px] tw:bg-white tw:text-[11px] tw:text-(--blue)">
              {m}
            </b>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

const STORM_SERVICES = [
  "Roof tarping",
  "Water removal",
  "Tree removal",
  "Generator repair",
];

/** A contractor's campaign switching from everyday ads to storm response. */
export function StormModeUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCloudLightning />}
        tone="gold"
        title="Campaign mode"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">Everyday</Chip>}
            to={<Chip tone="red">Storm response</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3.5">
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:text-(--muted)">
          <b className="tw:text-(--ink)">Sponsored</b> · yourcompany.com
        </span>
        <span className="tw:mt-1.5 tw:grid tw:text-[14px] tw:font-semibold tw:text-[#1a0dab]">
          <span
            className="tw:col-start-1 tw:row-start-1 tw:opacity-0"
            style={run("de-swap-a2")}
          >
            Roof Repair and Replacement in Tampa
          </span>
          <span
            className="tw:col-start-1 tw:row-start-1"
            style={run("de-swap-b2")}
          >
            24/7 Emergency Roof Tarping, Tampa Bay
          </span>
        </span>
        <span className="tw:mt-1 tw:block tw:text-[12px]/[1.45] tw:text-(--text)">
          Local crews on call, photos for your insurance claim, same-day visits.
        </span>
        <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:py-1.5 tw:text-[12px] tw:font-semibold tw:text-white">
          <FiPhone className="tw:size-3.5" /> Call now
        </span>
      </div>
      <ul className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
        {STORM_SERVICES.map((s, i) => (
          <li key={s} style={inAt(i + 2)}>
            <Chip tone="amber">
              <FiZap /> {s}
            </Chip>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Switched on when a storm is named, off once cleanup ends.
      </p>
    </div>
  );
}

const ASKS: {
  q: string;
  engine: ReactNode;
  color: string;
  status: string;
  tone: "green" | "blue" | "amber";
}[] = [
  {
    q: "Best AC repair near Orlando?",
    engine: <SiOpenai />,
    color: "#10a37f",
    status: "Recommended",
    tone: "green",
  },
  {
    q: "Roof inspection after a storm in Fort Myers",
    engine: <SiGoogle />,
    color: "#4285f4",
    status: "Cited",
    tone: "blue",
  },
  {
    q: "Family dentist in Tampa open Saturday",
    engine: <SiGooglegemini />,
    color: "#7b61ff",
    status: "Recommended",
    tone: "green",
  },
  {
    q: "Emergency plumber in Fort Lauderdale",
    engine: <SiPerplexity />,
    color: "#20808d",
    status: "Mentioned",
    tone: "amber",
  },
];

/** What AI assistants say for local searches in four Florida cities. */
export function AiCitiesUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMessageSquare />}
        tone="green"
        title="AI answers across Florida"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {ASKS.map((a, i) => (
          <li
            key={a.q}
            className="tw:grid tw:grid-cols-[32px_minmax(0,1fr)] tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={inAt(i + 1)}
          >
            <span
              className="tw:grid tw:size-8 tw:place-items-center tw:rounded-[10px] tw:bg-(--panel) tw:text-[15px]"
              style={{ color: a.color }}
            >
              {a.engine}
            </span>
            <span className="tw:min-w-0">
              <span className="tw:block tw:truncate tw:text-[12.5px] tw:font-medium">
                “{a.q}”
              </span>
              <span className="tw:mt-1 tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:text-(--muted)">
                <b className="tw:text-(--ink)">Your Company</b>
                <Chip tone={a.tone}>{a.status}</Chip>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const COVERAGE: [string, string, "green" | "amber" | "red"][] = [
  ["Tampa Bay", "In the Map Pack", "green"],
  ["Orlando", "Not showing", "red"],
  ["South Florida", "Page two", "amber"],
  ["Southwest Florida", "Not showing", "red"],
];

const REGION_PLAN: [string, ("Maps" | "Ads" | "AI" | "Social")[]][] = [
  ["South Florida", ["Maps", "Ads", "AI"]],
  ["Tampa Bay", ["Maps", "Ads"]],
  ["Central Florida", ["Maps", "Social"]],
  ["North Florida", ["Maps", "AI"]],
];

const CHANNEL_TONE: Record<string, string> = {
  Maps: "var(--green)",
  Ads: "var(--blue)",
  AI: "#7b61ff",
  Social: "#ee2a7b",
};

const LAUNCH: string[] = [
  "Call and form tracking live",
  "Seasonal ads scheduled",
  "Storm-ready pages drafted",
  "Review requests switched on",
];

const REGION_BARS: { r: string; bars: number[] }[] = [
  { r: "South FL", bars: [36, 48, 60, 74] },
  { r: "Tampa Bay", bars: [28, 40, 52, 66] },
  { r: "Central FL", bars: [22, 30, 46, 58] },
  { r: "SW Florida", bars: [18, 26, 38, 52] },
];

/** Florida digital marketing process UIs. */
export function flMarketingStepUis(
  process: DelawareData["process"],
): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="fl-coverage">
      <UiHead
        icon={<FiCompass />}
        title="Florida coverage check"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Checking…</Chip>}
            to={<Chip tone="blue">Gaps found</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {COVERAGE.map(([r, s, tone], i) => (
          <li
            key={r}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:gap-1.5">
              <FiMapPin className="tw:text-(--muted)" /> {r}
            </span>
            <Chip tone={tone}>{s}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fl-regions">
      <UiHead
        icon={<FiMapPin />}
        tone="gold"
        title="Plan by region"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {REGION_PLAN.map(([r, chans], i) => (
          <li
            key={r}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {r}
            <span className="tw:flex tw:gap-1">
              {chans.map((c) => (
                <i
                  key={c}
                  className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold tw:not-italic tw:text-white"
                  style={{ background: CHANNEL_TONE[c] }}
                >
                  {c}
                </i>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fl-launch">
      <UiHead
        icon={<FiCheck />}
        tone="green"
        title="Season-ready launch"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {LAUNCH.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:text-[12.5px] tw:font-medium"
          >
            <i
              className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
              style={{ ...run(TICK_AT[i]) }}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
            </i>
            {t}
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fl-report">
      <UiHead
        icon={<FiBarChart2 />}
        title="Leads by region"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {REGION_BARS.map((row, i) => (
          <li
            key={row.r}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:text-[11.5px] tw:font-semibold">
              {row.r}
              <FiTrendingUp className="tw:text-(--green)" />
            </span>
            <span className="tw:mt-1.5 tw:flex tw:h-7 tw:items-end tw:gap-1">
              {row.bars.map((h, j) => (
                <i
                  key={j}
                  className="tw:block tw:flex-1 tw:rounded-t-[3px]"
                  style={{
                    height: `${h}%`,
                    background: j === 3 ? "#0e7490" : "#bfe3ea",
                  }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A contractor's storm-season page on a phone, with a booking landing.
    Decorative (the frame is aria-hidden). */
export function StormPrepPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:bg-[#fef3c7] tw:px-3 tw:py-2 tw:text-[10.5px] tw:font-semibold tw:text-[#7c4a03]">
          <FiCloudLightning className="tw:size-3.5 tw:flex-none" />
          Hurricane season starts June 1 · plan ahead
        </div>
        <div className="tw:flex tw:items-center tw:justify-between tw:px-3 tw:py-2.5">
          <b className="tw:text-[13px]">Your Company</b>
          <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-white">
            <FiPhone className="tw:size-3.5" />
          </span>
        </div>
        <div className="tw:mx-3 tw:rounded-[18px] tw:bg-[linear-gradient(160deg,#0e7490,#164e63)] tw:px-4 tw:pt-5 tw:pb-4 tw:text-white">
          <span className="tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-white/15 tw:px-2 tw:py-0.5 tw:text-[9.5px] tw:font-semibold">
            <FiMapPin className="tw:size-2.5" /> Tampa Bay · Sarasota
          </span>
          <b className="tw:mt-2.5 tw:block tw:text-[19px]/[1.15] tw:font-semibold">
            Get storm-ready before the season
          </b>
          <span className="tw:mt-2 tw:block tw:text-[11px]/[1.45] tw:text-white/80">
            Pre-storm inspections and repairs from a local, licensed crew.
          </span>
          <span className="tw:mt-3.5 tw:block tw:rounded-full tw:bg-[#fdc115] tw:py-2 tw:text-center tw:text-[12px] tw:font-semibold tw:text-(--ink)">
            Book a pre-storm check
          </span>
        </div>
        <ul className="tw:mx-3 tw:mt-3 tw:grid tw:gap-1.5">
          {["Roof inspection", "Generator test", "Shutter check"].map(
            (s, i) => (
              <li
                key={s}
                className="tw:flex tw:items-center tw:justify-between tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
                style={inAt(i + 1)}
              >
                {s}
                <FiCheck className="tw:text-(--green)" />
              </li>
            ),
          )}
        </ul>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
            <FiCalendar className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Inspection booked</b>
            Saturday 9:00 AM · Clearwater
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Simplified Florida outline (viewBox 0 0 240 220): Panhandle, Atlantic
   coast, the southern tip and the Gulf coast. */
const FL: [number, number][] = [
  [6, 44],
  [60, 42],
  [122, 40],
  [170, 37],
  [176, 44],
  [180, 58],
  [184, 76],
  [190, 94],
  [197, 110],
  [203, 122],
  [207, 136],
  [212, 152],
  [216, 168],
  [219, 182],
  [217, 196],
  [208, 206],
  [196, 207],
  [186, 200],
  [180, 188],
  [175, 174],
  [168, 160],
  [161, 146],
  [156, 132],
  [152, 120],
  [146, 106],
  [138, 92],
  [128, 80],
  [116, 72],
  [102, 70],
  [86, 66],
  [66, 62],
  [40, 60],
  [16, 58],
  [6, 56],
];

function inside(x: number, y: number) {
  let hit = false;
  for (let i = 0, j = FL.length - 1; i < FL.length; j = i++) {
    const [xi, yi] = FL[i];
    const [xj, yj] = FL[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      hit = !hit;
  }
  return hit;
}

/** Dot grid inside the outline; also drawn by the hub's cities section. */
export const FL_DOTS: [number, number][] = [];
for (let y = 38; y <= 208; y += 5) {
  for (let x = 4; x <= 222; x += 5) {
    if (inside(x, y)) FL_DOTS.push([x, y]);
  }
}

const METROS: {
  name: string;
  x: number;
  y: number;
  status: string;
  tone: "green" | "blue" | "amber";
}[] = [
  { name: "Jacksonville", x: 168, y: 48, status: "Climbing", tone: "amber" },
  { name: "Orlando", x: 186, y: 110, status: "Top 3", tone: "green" },
  { name: "Tampa Bay", x: 158, y: 124, status: "Top 3", tone: "green" },
  { name: "Fort Myers", x: 176, y: 170, status: "Live", tone: "blue" },
  { name: "Miami", x: 211, y: 192, status: "Climbing", tone: "amber" },
];

/** Statewide lead map: a dot-matrix Florida with metro pins pulsing in
    turn, the metros' status and the console's three numbers. Decorative. */
export function FloridaMapUi({
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
      <div className="tw:mt-3 tw:grid tw:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] tw:items-center tw:gap-3 tw:max-bssm:grid-cols-1">
        <svg viewBox="2 32 222 180" className="tw:block tw:h-auto tw:w-full">
          {FL_DOTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.45} fill="#cfdbe6" />
          ))}
          {METROS.map((m, i) => (
            <g key={m.name}>
              <circle
                className="fl-ping"
                cx={m.x}
                cy={m.y}
                r={7}
                fill="#0e7490"
                style={{ animationDelay: `${i * 0.8}s` } as CSSProperties}
              />
              <circle
                cx={m.x}
                cy={m.y}
                r={4}
                fill="#0e7490"
                stroke="#fff"
                strokeWidth={1.5}
              />
            </g>
          ))}
        </svg>
        <ul className="tw:grid tw:gap-1.5">
          {METROS.map((m, i) => (
            <li
              key={m.name}
              className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 1)}
            >
              {m.name}
              <Chip tone={m.tone}>{m.status}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-[#ecf6f8] tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-[#0e7490]">
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

/** Before → after as four thermometers: the dashed line marks the
    starting point, the fill rises to the target. */
export function ScoreThermoUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:grid-cols-4 tw:gap-3">
        {rows.map((row) => (
          <li
            key={row.label}
            className="tw:grid tw:justify-items-center tw:gap-2"
          >
            <b className="tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]">
              {row.after}
            </b>
            <span className="tw:relative tw:block tw:h-[150px] tw:w-6 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <i
                className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:block tw:rounded-full tw:bg-[linear-gradient(0deg,#0e7490,#22d3ee)]"
                style={
                  {
                    "--h": `${row.after}%`,
                    height: `${row.after}%`,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
              <i
                className="tw:absolute tw:inset-x-0 tw:block tw:border-t-2 tw:border-dashed tw:border-[#b45309]"
                style={{ bottom: `${row.before}%` }}
              />
            </span>
            <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-[#0e7490] tw:text-[10.5px] tw:font-bold tw:text-white">
              +{row.after - row.before}
            </span>
            <span className="tw:text-center tw:text-[12px]/[1.25] tw:font-medium tw:text-(--text)">
              {row.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted)">
        <i className="tw:block tw:w-5 tw:border-t-2 tw:border-dashed tw:border-[#b45309]" />{" "}
        Starting point · fill = six-month target
      </p>
    </div>
  );
}
