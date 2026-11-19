import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiCalendar,
  FiCloudRain,
  FiCrosshair,
  FiDroplet,
  FiMap,
  FiMic,
  FiMicOff,
  FiNavigation,
  FiPhone,
  FiPhoneOff,
  FiRadio,
  FiSearch,
  FiShuffle,
  FiTarget,
  FiTool,
  FiVolume2,
  FiZap,
} from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, Line, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flTampa.css";

/* UI for the Tampa digital marketing page only (18 Nov 2026); none of it
   appears on another page. Feature panels (a neighborhood search-vs-calls
   board, season swimlanes from Gasparilla to the holidays, a trade lead
   router), the four process steps (rival check, search-to-page map,
   tracking switches, booked jobs by month), the "pool builder near
   Westshore" phone with its call sheet, the Hillsborough / Pinellas split
   across the bay bridges on the dark card and the tide-gauge scorecard.
   Illustrations: "Your Company", relative bars, positions and statuses
   only; no prices or client figures. Palette: the page's pillars (Gasparilla
   rose, sand, bay lilac, slate). */

const ROSE = "#9f1239";
const ROSE_SOFT = "#ffe4e6";
const SAND = "#fef3c7";
const LILAC = "#a5b4fc";
const INDIGO = "#4338ca";
const BAY = "#dbe4ff";
const SLATE = "#1f2937";

type Tone = "green" | "amber" | "red" | "blue" | "ink" | "muted";

/** Relative bar on its own track (no figures). */
function Bar({
  w,
  color,
  h = 6,
  track = "#eef0f5",
}: {
  w: number;
  color: string;
  h?: number;
  track?: string;
}) {
  return (
    <span
      className="tw:block tw:overflow-hidden tw:rounded-full"
      style={{ height: h, background: track }}
    >
      <i
        className="tw:block tw:h-full tw:rounded-full"
        style={
          {
            "--w": `${w}%`,
            width: `${w}%`,
            background: color,
            ...run("de-fill"),
          } as CSSProperties
        }
      />
    </span>
  );
}

/* ------------------------------------------------------ feature panels */

const HOODS: {
  name: string;
  search: number;
  calls: number;
  chip: string;
  tone: Tone;
}[] = [
  { name: "Westshore", search: 76, calls: 66, chip: "Strong", tone: "green" },
  { name: "South Tampa", search: 70, calls: 58, chip: "Strong", tone: "green" },
  { name: "Brandon", search: 90, calls: 36, chip: "Gap", tone: "red" },
  { name: "Wesley Chapel", search: 64, calls: 24, chip: "Gap", tone: "red" },
  { name: "Riverview", search: 56, calls: 42, chip: "Rising", tone: "blue" },
  { name: "Carrollwood", search: 44, calls: 36, chip: "Steady", tone: "muted" },
];

/** Searches against calls for six parts of the Tampa area, with the gap
    the plan fixes next. */
export function TampaSearchBoard() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMap />}
        title="Tampa neighborhood board"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-3.5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-1.5 tw:w-4 tw:rounded-full"
            style={{ background: LILAC }}
          />
          Searches
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-1.5 tw:w-4 tw:rounded-full"
            style={{ background: ROSE }}
          />
          Calls
        </span>
        <span className="tw:ml-auto">Hillsborough · Pasco</span>
      </div>
      <ul className="tw:mt-2">
        {HOODS.map((h, i) => (
          <li
            key={h.name}
            className="tw:grid tw:grid-cols-[86px_minmax(0,1fr)_58px] tw:items-center tw:gap-2.5 tw:border-b tw:border-(--line) tw:py-[7px] tw:last:border-b-0"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate tw:text-[12px] tw:font-medium">
              {h.name}
            </span>
            <span className="tw:grid tw:gap-[3px]">
              <Bar w={h.search} color={LILAC} h={5} />
              <Bar w={h.calls} color={ROSE} h={7} />
            </span>
            <span className="tw:text-right">
              <Chip tone={h.tone}>{h.chip}</Chip>
            </span>
          </li>
        ))}
      </ul>
      <p
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
        style={{ background: SAND, color: "#7c2d12", ...run("de-late") }}
      >
        <FiCrosshair className="tw:flex-none" />
        Next fix: Brandon searches that don’t become calls
      </p>
    </div>
  );
}

/* Quarter labels on the month grid; the other months get a tick. */
const QUARTERS: Record<number, string> = {
  0: "Jan",
  3: "Apr",
  6: "Jul",
  9: "Oct",
};
const NOW = 10;

/* Blocks as [first month, last month] (1-based, inclusive). A narrow block
   carries no text; its caption sits beside it in the empty part of the
   lane (`cap`: [first, last] month, text, alignment). */
const LANES: {
  name: string;
  when: string;
  blocks: { a: number; b: number; t?: string; bg: string; ink: string }[];
  cap?: { a: number; b: number; t: string; end?: boolean };
}[] = [
  {
    name: "Gasparilla",
    when: "Late Jan",
    blocks: [{ a: 1, b: 2, bg: ROSE, ink: "#fff" }],
    cap: { a: 3, b: 9, t: "Parade-week posts" },
  },
  {
    name: "Spring",
    when: "Mar–May",
    blocks: [{ a: 3, b: 5, t: "Tune-ups", bg: "#fde68a", ink: "#78350f" }],
  },
  {
    name: "Hurricane",
    when: "Jun–Nov",
    blocks: [
      { a: 6, b: 7, t: "Prep", bg: "#c7d2fe", ink: "#312e81" },
      { a: 8, b: 11, t: "Repair ads", bg: INDIGO, ink: "#fff" },
    ],
  },
  {
    name: "Holidays",
    when: "Nov–Dec",
    blocks: [{ a: 11, b: 12, bg: SLATE, ink: "#fff" }],
    cap: { a: 5, b: 10, t: "Gift-card offers", end: true },
  },
];

/** Four swimlanes across Tampa's year, each with its own campaign blocks,
    and a marker for today. */
export function TampaSeasonLanes() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        tone="gold"
        title="Tampa campaign lanes"
        right={<Chip tone="blue">12 months</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[66px_minmax(0,1fr)] tw:gap-x-2 tw:gap-y-1.5">
        <span
          className="tw:grid tw:grid-cols-12 tw:items-end tw:text-[10px] tw:font-semibold tw:text-(--muted)"
          style={{ gridColumn: 2, gridRow: 1 }}
        >
          {Array.from({ length: 12 }, (_, i) =>
            i === NOW ? (
              /* Today: November. */
              <span
                key={i}
                className="tw:grid tw:justify-items-center tw:gap-0.5 tw:font-bold"
                style={{ color: ROSE }}
              >
                Now
                <i
                  className="tw:block tw:size-1.5 tw:rounded-full"
                  style={{ background: ROSE }}
                />
              </span>
            ) : QUARTERS[i] ? (
              <span key={i} className="tw:pl-0.5 tw:whitespace-nowrap">
                {QUARTERS[i]}
              </span>
            ) : (
              <i
                key={i}
                className="tw:mb-[3px] tw:block tw:h-1.5 tw:w-px tw:justify-self-center tw:bg-[#cbd5e1]"
              />
            ),
          )}
        </span>
        {LANES.map((l, li) => (
          <Fragment key={l.name}>
            <span
              className="tw:grid tw:content-center tw:leading-[1.15]"
              style={{ gridColumn: 1, gridRow: li + 2 }}
            >
              <b className="tw:text-[11.5px] tw:font-semibold">{l.name}</b>
              <span className="tw:text-[10px] tw:text-(--muted)">{l.when}</span>
            </span>
            <span
              className="tw:grid tw:h-8 tw:grid-cols-12 tw:gap-0.5 tw:rounded-[8px] tw:bg-(--panel) tw:p-0.5"
              style={{ gridColumn: 2, gridRow: li + 2 }}
            >
              {l.blocks.map((bk, k) => (
                <span
                  key={bk.a}
                  className="tw:flex tw:items-center tw:overflow-hidden tw:rounded-[6px] tw:px-1 tw:text-[10px] tw:font-semibold tw:whitespace-nowrap"
                  style={{
                    gridColumn: `${bk.a} / ${bk.b + 1}`,
                    gridRow: 1,
                    background: bk.bg,
                    color: bk.ink,
                    ...inAt(li + k + 1),
                  }}
                >
                  {bk.t}
                </span>
              ))}
              {l.cap ? (
                <span
                  className={cx(
                    "tw:flex tw:items-center tw:px-1 tw:text-[10px] tw:font-semibold tw:whitespace-nowrap tw:text-(--ink-2)",
                    l.cap.end && "tw:justify-end",
                  )}
                  style={{
                    gridColumn: `${l.cap.a} / ${l.cap.b + 1}`,
                    gridRow: 1,
                    ...inAt(li + 2),
                  }}
                >
                  {l.cap.end ? `${l.cap.t} →` : `← ${l.cap.t}`}
                </span>
              ) : null}
            </span>
          </Fragment>
        ))}
      </div>
      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        {[
          ["Drafting now", "Gasparilla posts and hours"],
          ["Before June 1", "Storm pages and ads checked"],
        ].map(([k, t], i) => (
          <span
            key={k}
            className="tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2"
            style={inAt(i + 5)}
          >
            <span
              className="tw:block tw:text-[10px] tw:font-semibold tw:tracking-[0.06em] tw:uppercase"
              style={{ color: ROSE }}
            >
              {k}
            </span>
            <span className="tw:mt-0.5 tw:block tw:text-[12px]/[1.3] tw:font-medium">
              {t}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

const ROUTED: {
  trade: string;
  icon: ReactNode;
  color: string;
  job: string;
  where: string;
  status: string;
  tone: Tone;
  n: 1 | 2 | 3;
}[] = [
  {
    trade: "Pool",
    icon: <FiDroplet />,
    color: "#0e7490",
    job: "New pool build",
    where: "Westshore · Maps call",
    status: "Booked",
    tone: "green",
    n: 1,
  },
  {
    trade: "Plumbing",
    icon: <FiTool />,
    color: INDIGO,
    job: "Water heater",
    where: "Brandon · Google Ads",
    status: "Called back",
    tone: "blue",
    n: 2,
  },
  {
    trade: "Gutters",
    icon: <FiCloudRain />,
    color: "#b45309",
    job: "Seamless install",
    where: "Riverview · Website form",
    status: "Quote sent",
    tone: "amber",
    n: 3,
  },
  {
    trade: "Electrical",
    icon: <FiZap />,
    color: ROSE,
    job: "Panel upgrade",
    where: "Seminole Heights · AI answer",
    status: "Booked",
    tone: "green",
    n: 2,
  },
];

/** Incoming Tampa leads branching off one rail to their trade, each with
    its area, source and status. */
export function TampaLeadRouter() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShuffle />}
        tone="ink"
        title="Tampa lead router"
        right={
          <Flip
            n={1}
            from={<Chip tone="amber">Sorting…</Chip>}
            to={<Chip tone="green">All routed</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-4 tw:pl-5">
        <span
          className="tw:absolute tw:top-3 tw:bottom-3 tw:left-[6px] tw:w-[3px] tw:rounded-full"
          style={{ background: SLATE }}
        />
        <ul className="tw:grid tw:gap-2">
          {ROUTED.map((r, i) => (
            <li
              key={r.job}
              className="tw:relative tw:grid tw:grid-cols-[30px_minmax(0,1fr)_auto] tw:items-center tw:gap-x-2.5 tw:gap-y-1 tw:rounded-[14px] tw:border tw:border-(--line) tw:py-2 tw:pr-2.5 tw:pl-2 tw:max-bssm:grid-cols-[30px_minmax(0,1fr)]"
              style={inAt(i + 1)}
            >
              <i
                className="tw:absolute tw:top-1/2 tw:-left-[15px] tw:block tw:h-[3px] tw:w-[14px] tw:-translate-y-1/2 tw:rounded-full"
                style={{ background: r.color }}
              />
              <span
                className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-[9px] tw:text-[14px] tw:text-white"
                style={{ background: r.color }}
              >
                {r.icon}
              </span>
              <span className="tw:min-w-0">
                <span className="tw:block tw:truncate tw:text-[12.5px] tw:font-semibold">
                  <span style={{ color: r.color }}>{r.trade}</span> · {r.job}
                </span>
                <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                  {r.where}
                </span>
              </span>
              <span className="tw:max-bssm:col-start-2 tw:max-bssm:justify-self-start">
                <Flip
                  n={r.n}
                  from={<Chip tone="muted">New</Chip>}
                  to={<Chip tone={r.tone}>{r.status}</Chip>}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Each lead tagged by trade, area and source as it lands.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const RIVALS: [string, number, number][] = [
  ["Reviews", 30, 86],
  ["Photos", 44, 78],
  ["Service pages", 22, 72],
  ["Weekly posts", 12, 66],
];

const TERM_MAP: [string, string, Tone][] = [
  ["pool builder westshore", "Pool page", "blue"],
  ["ac repair brandon", "Ad group", "amber"],
  ["electrician south tampa", "Maps post", "green"],
  ["gutters riverview", "Area page", "blue"],
];

const TRACKING = [
  "Calls from Google Ads",
  "Calls from Maps",
  "Website forms",
  "Direction requests",
];

/* Booked jobs by month (relative; lower y = more). */
const BOOKED = [62, 57, 52, 42, 32, 16];
const BOOKED_MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
/* x at the centre of each month label (six columns over 300 units). */
const bx = (i: number) => 25 + i * 50;

/** Tampa digital marketing process UIs. */
function tampaStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  const line = BOOKED.map((y, i) => `${i ? "L" : "M"}${bx(i)} ${y}`).join(" ");
  return [
    <Slot key="tpa-rivals">
      <UiHead
        icon={<FiTarget />}
        title="You vs. the map leaders"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">4 gaps</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-2">
        {RIVALS.map(([label, you, top], i) => (
          <li
            key={label}
            className="tw:grid tw:grid-cols-[84px_minmax(0,1fr)] tw:items-center tw:gap-2.5 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {label}
            <span className="tw:grid tw:gap-[3px]">
              <Bar w={top} color="#94a3b8" h={5} />
              <Bar w={you} color={ROSE} h={5} />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:flex tw:items-center tw:gap-3 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1">
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-[#94a3b8]" />
          Top three nearby
        </span>
        <span className="tw:flex tw:items-center tw:gap-1">
          <i
            className="tw:block tw:size-2 tw:rounded-full"
            style={{ background: ROSE }}
          />
          Your Company
        </span>
      </p>
    </Slot>,

    <Slot key="tpa-terms">
      <UiHead
        icon={<FiSearch />}
        tone="gold"
        title="Search-to-page map"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {TERM_MAP.map(([term, dest, tone], i) => (
          <li
            key={term}
            className={cx(
              "tw:grid tw:grid-cols-[minmax(0,1fr)_14px_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5",
              // Three rows fit the shorter phone frame.
              i === 3 && "tw:max-bssm:hidden",
            )}
            style={inAt(i + 1)}
          >
            <span className="tw:truncate tw:text-[11.5px] tw:font-medium tw:text-(--ink-2)">
              “{term}”
            </span>
            <FiArrowRight className="tw:text-(--muted)" />
            <Chip tone={tone}>{dest}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="tpa-tracking">
      <UiHead
        icon={<FiRadio />}
        tone="green"
        title="Tracking switched on"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {TRACKING.map((t, i) => (
          <li
            key={t}
            className={cx(
              "tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium",
              i === 3 && "tw:max-bssm:hidden",
            )}
          >
            {t}
            <span
              className="tw:relative tw:block tw:h-[18px] tw:w-[30px] tw:flex-none tw:rounded-full tw:bg-(--green)"
              style={run(TICK_AT[i])}
            >
              <i
                className="tpa-knob tw:absolute tw:top-[2px] tw:left-[2px] tw:block tw:size-[14px] tw:rounded-full tw:bg-white tw:[box-shadow:0_1px_3px_rgba(12,21,38,0.25)]"
                style={{
                  transform: "translateX(12px)",
                  ...run(`tpa-knob-${i + 1}`),
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="tpa-booked">
      <UiHead
        icon={<FiBarChart2 />}
        title="Booked jobs by month"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <div className="tw:relative tw:rounded-[12px] tw:bg-(--panel) tw:px-2 tw:pt-2 tw:pb-1">
        <span
          className="tw:absolute tw:top-2 tw:left-2 tw:z-1"
          style={run("de-late")}
        >
          <Chip tone="ink">Next: more Brandon ads</Chip>
        </span>
        <span className="tw:relative tw:block tw:h-[70px]">
          <svg
            viewBox="0 0 300 70"
            preserveAspectRatio="none"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <path
              d={`${line} L${bx(5)} 70 L${bx(0)} 70 Z`}
              fill={ROSE_SOFT}
              style={run("de-area")}
            />
            <path
              d={line}
              fill="none"
              stroke={ROSE}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              strokeDasharray="1"
              style={run("de-draw")}
            />
          </svg>
          <i
            className="tw:absolute tw:block tw:size-3 tw:-translate-1/2 tw:rounded-full tw:border-2 tw:border-white"
            style={{
              left: `${(bx(5) / 300) * 100}%`,
              top: `${(BOOKED[5] / 70) * 100}%`,
              background: ROSE,
              ...run("de-area"),
            }}
          />
        </span>
        <span className="tw:grid tw:grid-cols-6 tw:text-center tw:text-[10px] tw:font-semibold tw:text-(--muted)">
          {BOOKED_MONTHS.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </span>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A "pool builder near Westshore" search on a phone: the local result
    with your listing first, the Call button tapped and the call sheet
    sliding up. Decorative (the frame is aria-hidden). */
export function TampaPoolPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:mx-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium tw:[box-shadow:0_3px_12px_rgba(12,21,38,0.08)]">
          <SiGoogle className="tw:flex-none tw:text-[#4285f4]" />
          <span className="tw:truncate">pool builder near Westshore</span>
          <FiMic className="tw:ml-auto tw:flex-none tw:text-(--muted)" />
        </div>
        <div className="tw:mx-3 tw:mt-2 tw:flex tw:gap-3.5 tw:border-b tw:border-(--line) tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
          {["All", "Maps", "Images", "Videos"].map((t, i) => (
            <span
              key={t}
              className={cx(
                "tw:pb-1.5",
                i === 0 && "tw:border-b-2 tw:text-(--ink)",
              )}
              style={i === 0 ? { borderColor: ROSE } : undefined}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="tw:relative tw:mx-3 tw:mt-2.5 tw:h-[92px] tw:flex-none tw:overflow-hidden tw:rounded-[14px] tw:bg-[#f1f3f7]">
          <svg
            viewBox="0 0 236 92"
            preserveAspectRatio="none"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <path d="M0 0 H64 C54 30 70 60 52 92 H0 Z" fill={BAY} />
            {["M58 30 H236", "M126 0 V92", "M60 70 C120 64 180 74 236 68"].map(
              (d) => (
                <path key={d} d={d} fill="none" stroke="#fff" strokeWidth="6" />
              ),
            )}
            {[
              [176, 18],
              [212, 50],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="6" fill="#ea4335" />
                <circle cx={x} cy={y} r="2.2" fill="#fff" />
              </g>
            ))}
            <circle className="tpa-ping" cx="102" cy="48" r="9" fill={ROSE} />
            <circle
              cx="102"
              cy="48"
              r="7.5"
              fill={ROSE}
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
          <span
            className="tw:absolute tw:top-[60%] tw:left-[46%] tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[9.5px] tw:font-bold tw:whitespace-nowrap tw:[box-shadow:0_3px_10px_rgba(12,21,38,0.16)]"
            style={{ color: ROSE, ...inAt(1) }}
          >
            Your Company
          </span>
        </div>
        <div
          className="tw:mx-3 tw:mt-2.5 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
          style={inAt(2)}
        >
          <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
            <b className="tw:text-[13px]">Your Company</b>
            <Chip tone="green">Open</Chip>
          </span>
          <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
            <span className="tw:text-[#f4b400]">★★★★★</span> Pool builder ·
            Westshore
          </span>
          <span className="tw:mt-0.5 tw:block tw:text-[10.5px] tw:text-(--text)">
            Custom pools and spas · free backyard visit
          </span>
          <span className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[10px] tw:font-semibold">
            <span
              className="tw:relative tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5 tw:text-white"
              style={{ background: ROSE }}
            >
              <i
                className="tpa-tap tw:absolute tw:-inset-1 tw:block tw:rounded-full tw:border-2"
                style={{ borderColor: ROSE }}
              />
              <FiPhone className="tw:size-3" /> Call
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:rounded-full tw:bg-(--panel) tw:py-1.5">
              Website
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:py-1.5">
              <FiNavigation className="tw:size-3" /> Route
            </span>
          </span>
        </div>
        {[2, 3].map((n, i) => (
          <div
            key={n}
            className="tw:mx-3 tw:mt-2.5 tw:flex tw:items-center tw:gap-2.5 tw:px-1"
            style={inAt(i + 3)}
          >
            <span className="tw:block tw:size-9 tw:flex-none tw:rounded-[10px] tw:bg-(--panel)" />
            <span className="tw:grid tw:flex-1 tw:gap-1.5">
              <Line w={n === 2 ? "58%" : "46%"} />
              <Line w={n === 2 ? "82%" : "70%"} />
            </span>
          </div>
        ))}
        <div
          className="tpa-sheet tw:absolute tw:inset-x-0 tw:bottom-0 tw:rounded-t-[26px] tw:px-4 tw:pt-2.5 tw:pb-5 tw:text-white"
          style={{ background: SLATE }}
        >
          <i className="tw:mx-auto tw:block tw:h-1 tw:w-9 tw:rounded-full tw:bg-white/25" />
          <span className="tw:mt-3 tw:flex tw:items-center tw:gap-3">
            <span
              className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[14px] tw:font-semibold"
              style={{ background: ROSE }}
            >
              YC
            </span>
            <span className="tw:min-w-0 tw:text-[11px]/[1.35] tw:text-white/70">
              <b className="tw:block tw:text-[14px] tw:text-white">
                Your Company
              </b>
              Calling… · Pool builder, Tampa
            </span>
          </span>
          <span className="tw:mt-4 tw:flex tw:items-center tw:justify-around">
            <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:bg-white/12">
              <FiMicOff className="tw:size-4" />
            </span>
            <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:bg-white/12">
              <FiVolume2 className="tw:size-4" />
            </span>
            <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:bg-[#ef4444]">
              <FiPhoneOff className="tw:size-4" />
            </span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Schematic Tampa Bay (viewBox 0 0 300 150): the Gulf on the left edge,
   Pinellas, Old Tampa Bay opening south, Hillsborough on the right. */
const WATER =
  "M114 0 L150 0 L156 30 L162 60 L176 92 L198 122 L216 150 L74 150 L88 122 L100 92 L106 60 L110 30 Z";

const BRIDGES: { name: string; y: number; x1: number; x2: number }[] = [
  { name: "Courtney Campbell", y: 24, x1: 100, x2: 166 },
  { name: "Howard Frankland", y: 52, x1: 96, x2: 172 },
  { name: "Gandy", y: 82, x1: 90, x2: 184 },
];

const TOWNS: { name: string; x: number; y: number; side: "h" | "p" }[] = [
  { name: "Clearwater", x: 48, y: 40, side: "p" },
  { name: "St. Petersburg", x: 60, y: 112, side: "p" },
  { name: "Westshore", x: 196, y: 44, side: "h" },
  { name: "Downtown", x: 214, y: 74, side: "h" },
  { name: "Brandon", x: 266, y: 92, side: "h" },
];

const SIDES: { name: string; color: string; rows: [string, number][] }[] = [
  {
    name: "Hillsborough",
    color: ROSE,
    rows: [
      ["Calls", 84],
      ["Forms", 64],
      ["Directions", 72],
    ],
  },
  {
    name: "Pinellas",
    color: INDIGO,
    rows: [
      ["Calls", 50],
      ["Forms", 38],
      ["Directions", 46],
    ],
  },
];

/** Leads split between Hillsborough and Pinellas across the three bay
    bridges, with relative bars per side and the console's numbers.
    Decorative. */
export function TampaBayBridges({
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
          <FiNavigation style={{ color: ROSE }} /> {c.title}
        </b>
        <Chip tone="red">{c.tag}</Chip>
      </div>
      <svg
        viewBox="0 0 300 150"
        className="tw:mt-3 tw:block tw:h-auto tw:w-full tw:rounded-[14px]"
        fontFamily="inherit"
      >
        <rect width="300" height="150" fill="#f4f6fa" />
        <path d="M0 0 H20 C14 40 24 90 12 150 H0 Z" fill={BAY} />
        <path d={WATER} fill={BAY} />
        {BRIDGES.map((b) => (
          <g key={b.name}>
            <path
              d={`M${b.x1} ${b.y} H${b.x2}`}
              stroke="#94a3b8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d={`M${b.x1} ${b.y} H${b.x2}`}
              stroke={ROSE}
              strokeWidth="1.6"
              strokeDasharray="2 4"
              style={run("de-flow", 1.2, "linear")}
            />
            <text
              x={(b.x1 + b.x2) / 2}
              y={b.y - 5}
              textAnchor="middle"
              fontSize="7"
              fontWeight="600"
              fill="#475569"
              stroke="#f4f6fa"
              strokeWidth="2.5"
              paintOrder="stroke"
            >
              {b.name}
            </text>
          </g>
        ))}
        <text
          x="58"
          y="16"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="1"
          fill={INDIGO}
        >
          PINELLAS
        </text>
        <text
          x="238"
          y="16"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="1"
          fill={ROSE}
        >
          HILLSBOROUGH
        </text>
        {TOWNS.map((t, i) => {
          const color = t.side === "h" ? ROSE : INDIGO;
          return (
            <g key={t.name}>
              <circle
                className="tpa-ping"
                cx={t.x}
                cy={t.y}
                r="5"
                fill={color}
                style={{ animationDelay: `${i * 0.6}s` } as CSSProperties}
              />
              <circle
                cx={t.x}
                cy={t.y}
                r="3.5"
                fill={color}
                stroke="#fff"
                strokeWidth="1.2"
              />
              <text
                x={t.x}
                y={t.y + 12}
                textAnchor="middle"
                fontSize="7.5"
                fontWeight="600"
                fill={SLATE}
              >
                {t.name}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2.5">
        {SIDES.map((side, si) => (
          <div
            key={side.name}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(si + 1)}
          >
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
              <i
                className="tw:block tw:size-2 tw:rounded-full"
                style={{ background: side.color }}
              />
              {side.name}
            </span>
            <ul className="tw:mt-2 tw:grid tw:gap-1.5">
              {side.rows.map(([label, w]) => (
                <li
                  key={label}
                  className="tw:grid tw:grid-cols-[54px_minmax(0,1fr)] tw:items-center tw:gap-1.5 tw:text-[10.5px] tw:text-(--muted)"
                >
                  {label}
                  <Bar w={w} color={side.color} h={6} track="#fff" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:px-3 tw:py-2.5"
            style={{ background: SAND }}
          >
            <b
              className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: ROSE }}
            >
              {m.strong}
            </b>
            <span className="tw:mt-1 tw:block tw:text-[10.5px]/[1.25] tw:text-[#78350f]">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

/** Before → after as four tide-gauge staffs: the rose dashed mark is the
    starting level, the water rises to the six-month aim. */
export function TampaTideScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:grid-cols-4 tw:gap-3 tw:max-bssm:gap-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="tw:grid tw:justify-items-center tw:gap-2"
          >
            <b className="tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]">
              {row.after}
            </b>
            <span
              className="tw:relative tw:block tw:h-[156px] tw:w-full tw:max-w-[52px] tw:overflow-hidden tw:rounded-[8px] tw:border-2 tw:bg-white"
              style={{ borderColor: SLATE }}
            >
              {Array.from({ length: 9 }, (_, k) => (
                <i
                  key={k}
                  className="tw:absolute tw:left-0 tw:block tw:h-[2px]"
                  style={{
                    bottom: `${(k + 1) * 10}%`,
                    width: k % 2 ? "30%" : "56%",
                    background: SLATE,
                  }}
                />
              ))}
              <span
                className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:block"
                style={
                  {
                    "--h": `${row.after}%`,
                    height: `${row.after}%`,
                    background: "rgba(67,56,202,0.3)",
                    ...run("de-rise"),
                  } as CSSProperties
                }
              >
                <svg
                  viewBox="0 0 40 6"
                  preserveAspectRatio="none"
                  className="tpa-wave tw:absolute tw:-top-[5px] tw:left-0 tw:block tw:h-[6px] tw:w-[200%]"
                >
                  <path
                    d="M0 6 V3 Q5 0 10 3 T20 3 T30 3 T40 3 V6 Z"
                    fill="rgba(67,56,202,0.3)"
                  />
                </svg>
              </span>
              <i
                className="tw:absolute tw:inset-x-0 tw:block tw:border-t-2 tw:border-dashed"
                style={{ bottom: `${row.before}%`, borderColor: ROSE }}
              />
            </span>
            <span className="tw:text-center tw:text-[11.5px]/[1.25] tw:font-medium tw:text-(--text)">
              {row.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:w-4 tw:border-t-2 tw:border-dashed"
            style={{ borderColor: ROSE }}
          />
          Today’s level
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: "rgba(67,56,202,0.3)" }}
          />
          Where we aim in six months
        </span>
      </p>
    </div>
  );
}

export const tampaUi: FlCityUi = {
  Feature1: TampaSearchBoard,
  Feature2: TampaSeasonLanes,
  Feature3: TampaLeadRouter,
  Phone: TampaPoolPhone,
  DarkUi: TampaBayBridges,
  Score: TampaTideScore,
  stepUis: tampaStepUis,
};
