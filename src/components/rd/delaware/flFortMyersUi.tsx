import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiCamera,
  FiCheck,
  FiColumns,
  FiDroplet,
  FiFilter,
  FiGlobe,
  FiGrid,
  FiHome,
  FiLayers,
  FiMapPin,
  FiMessageSquare,
  FiPhoneIncoming,
  FiPhoneMissed,
  FiPlay,
  FiTag,
  FiTool,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGoogleads, SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";
import "./flFortMyers.css";

/* UI for the Fort Myers digital marketing page only (18 Nov 2026); none of
   it appears on another page. Feature panels (repair searches after a
   storm as three stacked demand waves, a contractor estimate pipeline with
   follow-ups, Lee County city pages pinned on a map of the Caloosahatchee),
   the four process steps (call handling check, service × city focus grid,
   the week's Map Pack check, calls-to-jobs funnel), the call-tracking
   phone, a lead board with one column per Lee County city on the dark card
   and the caliper scorecard. Illustrations: "Your Company", first names,
   positions, statuses and relative values only; no prices or client
   figures. Palette: the page's pillars (royal poinciana rust, mangrove
   mint, evening lilac, deep pine). */

type Tone = "green" | "amber" | "red" | "blue" | "ink" | "muted";

const RUST = "#9a3412";
const EMBER = "#ea580c";
const PEACH = "#fff1e6";
const PINE = "#052e16";
const GREEN = "#15803d";
const MINT = "#dcfce7";
const INDIGO = "#4f46e5";
const LILAC = "#e0e7ff";
const POOL = "#0891b2";
const VOLT = "#a16207";
const WATER = "#d4eaf3";
const RIVER = "#8fcbe2";
const LAND = "#f7f5ef";

/** White halo behind SVG labels so they read over water and roads. */
const HALO = {
  stroke: "#fff",
  strokeWidth: 3,
  paintOrder: "stroke",
  strokeLinejoin: "round",
} as const;

/* ------------------------------------------------------ feature panels */

/* Relative search interest over the twelve months after a storm passes
   (example shape, no figures): roofs first, then lanai screens, then
   pools. */
const WAVES: {
  name: string;
  icon: ReactNode;
  color: string;
  h: number[];
  status: string;
  tone: Tone;
}[] = [
  {
    name: "Roof repair",
    icon: <FiHome />,
    color: RUST,
    h: [6, 28, 32, 29, 24, 20, 16, 13, 11, 9, 8, 7],
    status: "Easing",
    tone: "amber",
  },
  {
    name: "Screen enclosures",
    icon: <FiGrid />,
    color: INDIGO,
    h: [3, 9, 17, 24, 29, 31, 30, 26, 22, 18, 15, 13],
    status: "At its peak",
    tone: "blue",
  },
  {
    name: "Pool repair",
    icon: <FiDroplet />,
    color: POOL,
    h: [2, 5, 9, 14, 20, 25, 29, 30, 28, 25, 21, 18],
    status: "Rising",
    tone: "green",
  },
];
const STEP_X = 32;
const WAVE_W = STEP_X * 11;
const WAVE_BASE = 36;
/** "Now" sits on the seventh month of the strip. */
const NOW = 6;

/** A smooth line through the month points (quadratic midpoints). */
function wavePath(h: number[]) {
  const pts = h.map((v, i) => [i * STEP_X, WAVE_BASE - v] as const);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [x, y] = pts[i];
    const [nx, ny] = pts[i + 1];
    d += ` Q${x} ${y} ${(x + nx) / 2} ${(y + ny) / 2}`;
  }
  const [lx, ly] = pts[pts.length - 1];
  return `${d} L${lx} ${ly}`;
}

/** Storm-recovery demand tracker: roof, screen-enclosure and pool repair
    searches as three stacked waves over the year after a storm, a "now"
    marker and the repair the ad budget is leaning toward. */
function RepairWavesUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiActivity />}
        title="Repair search tracker"
        right={<Chip tone="amber">Lee County</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {WAVES.map((w, i) => {
          const d = wavePath(w.h);
          return (
            <li
              key={w.name}
              className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:pt-2 tw:pb-1"
              style={inAt(i + 1)}
            >
              <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-semibold">
                <span
                  className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-[8px] tw:text-[12px] tw:text-white"
                  style={{ background: w.color }}
                >
                  {w.icon}
                </span>
                <span className="tw:min-w-0 tw:truncate">{w.name}</span>
                <Chip tone={w.tone} className="tw:ml-auto">
                  {w.status}
                </Chip>
              </span>
              <svg
                viewBox={`0 0 ${WAVE_W} 40`}
                className="tw:mt-1 tw:block tw:h-auto tw:w-full"
              >
                <path
                  d={`${d} L${WAVE_W} 40 L0 40 Z`}
                  fill={w.color}
                  fillOpacity={0.13}
                  style={run("de-area")}
                />
                <path
                  d={d}
                  pathLength={1}
                  fill="none"
                  stroke={w.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  style={{ strokeDasharray: 1, ...run("de-draw") }}
                />
                <line
                  x1={NOW * STEP_X}
                  x2={NOW * STEP_X}
                  y1={0}
                  y2={40}
                  stroke={PINE}
                  strokeOpacity={0.4}
                  strokeDasharray="3 3"
                />
                <circle
                  cx={NOW * STEP_X}
                  cy={WAVE_BASE - w.h[NOW]}
                  r={4}
                  fill={w.color}
                  stroke="#fff"
                  strokeWidth={2}
                  style={inAt(4)}
                />
              </svg>
            </li>
          );
        })}
      </ul>
      <div className="tw:relative tw:mt-1.5 tw:flex tw:justify-between tw:px-3 tw:text-[10px] tw:font-medium tw:text-(--muted)">
        <span>Storm passes</span>
        <span
          className="tw:absolute tw:-translate-x-1/2 tw:font-semibold tw:text-(--ink)"
          style={{ left: `calc(13px + (100% - 26px) * ${NOW / 11})` }}
        >
          Now
        </span>
        <span>A year on</span>
      </div>
      <div
        className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
        style={{ background: PEACH }}
      >
        <span className="tw:min-w-0 tw:truncate">Ads leaning toward</span>
        <Flip
          n={2}
          from={<Chip tone="red">Roof repair</Chip>}
          to={<Chip tone="blue">Screen enclosures</Chip>}
        />
      </div>
    </div>
  );
}

const STAGES: [string, string, string][] = [
  ["Inspection", PEACH, RUST],
  ["Estimate", LILAC, INDIGO],
  ["Booked", MINT, GREEN],
];

const JOBS: {
  name: string;
  job: string;
  city: string;
  stage: number;
  chip: ReactNode;
  /** The last stage fills late in the loop (the job that gets booked). */
  late?: boolean;
}[] = [
  {
    name: "Maria",
    job: "Lanai re-screen",
    city: "Cape Coral",
    stage: 3,
    late: true,
    chip: (
      <Flip
        n={2}
        from={<Chip tone="amber">Reminder sent</Chip>}
        to={<Chip tone="green">Booked</Chip>}
      />
    ),
  },
  {
    name: "Dave",
    job: "Roof inspection",
    city: "Fort Myers",
    stage: 1,
    chip: <Chip tone="blue">Visit Thu</Chip>,
  },
  {
    name: "Linda",
    job: "Pool resurfacing",
    city: "Estero",
    stage: 2,
    chip: <Chip tone="amber">Follow-up due</Chip>,
  },
  {
    name: "Tom",
    job: "Paver patio",
    city: "Bonita Springs",
    stage: 2,
    chip: <Chip tone="muted">Photos sent</Chip>,
  },
];

/** Contractor estimate pipeline: Inspection → Estimate → Booked as a
    three-part header, each job's progress under it, its follow-up status
    and the follow-ups queued today. */
function EstimatePipelineUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiFilter />}
        tone="gold"
        title="Estimate pipeline"
        right={<Chip tone="muted">This week</Chip>}
      />
      <ol className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-1 tw:text-center tw:text-[10.5px] tw:font-semibold">
        {STAGES.map(([s, bg, ink]) => (
          <li
            key={s}
            className="tw:rounded-[8px] tw:py-1"
            style={{ background: bg, color: ink }}
          >
            {s}
          </li>
        ))}
      </ol>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {JOBS.map((j, i) => (
          <li
            key={j.name}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:pt-2 tw:pb-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:gap-2">
              <span className="tw:min-w-0">
                <b className="tw:block tw:truncate tw:text-[12px]">
                  {j.name} · {j.job}
                </b>
                <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
                  <FiMapPin className="tw:size-2.5 tw:flex-none" /> {j.city}
                </span>
              </span>
              <span className="tw:ml-auto tw:flex-none">{j.chip}</span>
            </span>
            <span className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1">
              {STAGES.map(([s, , ink], k) => (
                <span
                  key={s}
                  className="tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-[#e3e7ee]"
                >
                  {k < j.stage ? (
                    <i
                      className="tw:block tw:h-full tw:rounded-full"
                      style={{
                        background: ink,
                        ...inAt(j.late && k === 2 ? 5 : k + 1),
                      }}
                    />
                  ) : null}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        Follow-ups queued today
      </p>
      <div className="tw:mt-1.5 tw:flex tw:flex-wrap tw:gap-1.5">
        <Chip tone="muted">
          <FiMessageSquare /> 3 reminder texts
        </Chip>
        <Chip tone="muted">
          <FiCamera /> 2 photo recaps
        </Chip>
        <Chip tone="muted">
          <FiPhoneMissed /> 1 missed-call text
        </Chip>
      </div>
    </div>
  );
}

/* Lee County on a small map (viewBox 0 0 320 140): the Gulf, Sanibel and
   Estero Island offshore, the Caloosahatchee running west to the Gulf and
   I-75. Each city page sits on its pin; the one being written pulses. */
const LEE: {
  city: string;
  x: number;
  y: number;
  angle: string;
  pin: string;
  status: ReactNode;
  /** Label under the pin instead of to its right. */
  below?: boolean;
  pulse?: boolean;
}[] = [
  {
    city: "Cape Coral",
    x: 98,
    y: 36,
    angle: "Canal-home pools and docks",
    pin: GREEN,
    status: <Chip tone="green">Live</Chip>,
  },
  {
    city: "Fort Myers",
    x: 182,
    y: 76,
    angle: "River District to McGregor",
    pin: GREEN,
    status: <Chip tone="green">Live</Chip>,
  },
  {
    city: "Lehigh Acres",
    x: 278,
    y: 86,
    angle: "Newer homes: A/C and fences",
    pin: "#94a3b8",
    status: <Chip tone="muted">Next up</Chip>,
    below: true,
  },
  {
    city: "Estero",
    x: 166,
    y: 108,
    angle: "Golf communities near FGCU",
    pin: GREEN,
    status: <Chip tone="green">Live</Chip>,
  },
  {
    city: "Bonita Springs",
    x: 130,
    y: 128,
    angle: "Seasonal homes and lanais",
    pin: EMBER,
    status: (
      <Flip
        n={3}
        from={<Chip tone="amber">Writing</Chip>}
        to={<Chip tone="green">Live</Chip>}
      />
    ),
    pulse: true,
  },
];

const CALOOSAHATCHEE =
  "M322 46 C 296 52, 270 42, 240 50 S 196 66, 160 62 S 110 56, 64 60";

/** Lee County service-area pages: a page per city pinned on the map, with
    the local angle each page leads with and its status. */
function CityPagesUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiLayers />}
        tone="green"
        title="Lee County city pages"
        right={<Chip tone="blue">Your site</Chip>}
      />
      <svg
        viewBox="0 0 320 140"
        className="tw:mt-3 tw:block tw:h-auto tw:w-full tw:overflow-hidden tw:rounded-[14px]"
      >
        <rect width={320} height={140} fill={LAND} />
        <path
          d="M0 0 H60 C 54 22, 66 38, 62 54 C 58 68, 74 80, 80 96 C 86 112, 90 126, 96 140 H0 Z"
          fill={WATER}
        />
        <ellipse
          cx={30}
          cy={78}
          rx={22}
          ry={4}
          fill={LAND}
          transform="rotate(-24 30 78)"
        />
        <ellipse
          cx={80}
          cy={110}
          rx={9}
          ry={2.5}
          fill={LAND}
          transform="rotate(-50 80 110)"
        />
        <path
          d={CALOOSAHATCHEE}
          stroke={RIVER}
          strokeWidth={7}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M214 0 C 210 34, 206 70, 196 100 S 178 130, 172 140"
          stroke="#cfc8b8"
          strokeWidth={2}
          strokeDasharray="5 4"
          fill="none"
        />
        <text
          x={220}
          y={16}
          fontSize={8.5}
          fontWeight={700}
          fill="#8a8170"
          {...HALO}
        >
          I-75
        </text>
        <text
          x={238}
          y={38}
          fontSize={8}
          fontStyle="italic"
          fill="#2f7fa3"
          textAnchor="middle"
          {...HALO}
        >
          Caloosahatchee
        </text>
        <text
          x={24}
          y={124}
          fontSize={8}
          fontStyle="italic"
          fill="#2f7fa3"
          {...HALO}
        >
          Gulf
        </text>
        {LEE.map((c, i) => (
          <g key={c.city} style={inAt(i + 1)}>
            {c.pulse ? (
              <circle
                className="fm-pulse"
                cx={c.x}
                cy={c.y}
                r={8}
                fill={c.pin}
              />
            ) : null}
            <circle
              cx={c.x}
              cy={c.y}
              r={5}
              fill={c.pin}
              stroke="#fff"
              strokeWidth={2}
            />
            <text
              x={c.below ? c.x : c.x + 9}
              y={c.below ? c.y + 17 : c.y + 3.5}
              textAnchor={c.below ? "middle" : "start"}
              fontSize={9.5}
              fontWeight={600}
              fill="#1f2a1f"
              {...HALO}
            >
              {c.city}
            </text>
          </g>
        ))}
      </svg>
      <ul className="tw:mt-3 tw:grid tw:gap-1">
        {LEE.map((c, i) => (
          <li
            key={c.city}
            className="tw:grid tw:grid-cols-[10px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:px-2 tw:py-1"
            style={{
              background: i % 2 ? "transparent" : "var(--panel)",
              ...inAt(i + 1),
            }}
          >
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: c.pin }}
            />
            <span className="tw:min-w-0 tw:truncate tw:text-[12px]">
              <b className="tw:font-semibold">{c.city}</b>
              <span className="tw:text-(--muted)"> · {c.angle}</span>
            </span>
            {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

/* An example week of calls: [day, answered, missed]. */
const CALL_DAYS: [string, number, number][] = [
  ["Mo", 3, 1],
  ["Tu", 4, 0],
  ["We", 2, 1],
  ["Th", 4, 0],
  ["Fr", 3, 1],
  ["Sa", 1, 2],
  ["Su", 0, 1],
];

const FOCUS_CITIES = ["Cape Coral", "Fort Myers", "Estero", "Lehigh Acres"];
/* Weight 1–3 per city: how much of the service's budget goes there. */
const FOCUS: [string, string, number[]][] = [
  ["Roofing", RUST, [2, 3, 2, 1]],
  ["Screens", INDIGO, [3, 2, 3, 1]],
  ["Pools", POOL, [3, 1, 2, 2]],
];
const DOT_SIZE = [0, 8, 13, 18];

/* Example Map Pack positions: [city, last week, this week]. */
const PACK: [string, number, number][] = [
  ["Cape Coral", 6, 3],
  ["Fort Myers", 4, 2],
  ["Estero", 9, 5],
  ["Bonita Springs", 7, 4],
];

const FUNNEL: [string, number, string, string][] = [
  ["Calls and forms", 100, LILAC, INDIGO],
  ["Estimates given", 68, PEACH, RUST],
  ["Booked jobs", 42, MINT, GREEN],
];

/** Fort Myers process UIs. */
function fortMyersStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="fm-calls">
      <UiHead
        icon={<FiPhoneMissed />}
        title="Call handling check"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Checking…</Chip>}
            to={<Chip tone="red">3 gaps</Chip>}
          />
        }
      />
      <div className="tw:grid tw:grid-cols-7 tw:gap-1 tw:rounded-[12px] tw:bg-(--panel) tw:px-2 tw:pt-2 tw:pb-1.5">
        {CALL_DAYS.map(([day, ok, miss], i) => (
          <span key={day} className="tw:grid tw:justify-items-center tw:gap-1">
            <span className="tw:flex tw:h-[40px] tw:flex-col-reverse tw:gap-[3px]">
              {Array.from({ length: ok + miss }, (_, k) => (
                <i
                  key={k}
                  className="tw:block tw:size-[7px] tw:rounded-full"
                  style={{
                    background: k < ok ? "var(--green)" : "#d64532",
                    ...inAt(Math.min(i + 1, 6)),
                  }}
                />
              ))}
            </span>
            <b className="tw:text-[9.5px] tw:font-semibold tw:text-(--muted)">
              {day}
            </b>
          </span>
        ))}
      </div>
      <ul className="tw:flex tw:flex-wrap tw:gap-1.5">
        {["Missed after 5 PM", "No text-back", "Weekend voicemail"].map(
          (t, i) => (
            <li
              key={t}
              className={i === 2 ? "tw:max-bssm:hidden" : undefined}
              style={inAt(i + 3)}
            >
              <Chip tone={i === 0 ? "red" : "amber"}>{t}</Chip>
            </li>
          ),
        )}
      </ul>
    </Slot>,

    <Slot key="fm-focus">
      <UiHead
        icon={<FiGrid />}
        tone="gold"
        title="Service × city focus"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[54px_repeat(4,minmax(0,1fr))] tw:items-center tw:gap-x-1 tw:gap-y-1.5 tw:text-[10px]">
        <span />
        {FOCUS_CITIES.map((c) => (
          <span
            key={c}
            className="tw:text-center tw:leading-[1.1] tw:font-semibold tw:text-(--muted)"
          >
            {c}
          </span>
        ))}
        {FOCUS.map(([svc, color, w], r) => (
          <FocusRow key={svc} svc={svc} color={color} w={w} at={r} />
        ))}
      </div>
    </Slot>,

    <Slot key="fm-pack">
      <UiHead
        icon={<SiGooglemaps />}
        tone="green"
        title="Map Pack this week"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {PACK.map(([city, was, now], i) => (
          <li
            key={city}
            className={cx(
              "tw:grid tw:grid-cols-[minmax(0,1fr)_auto_18px] tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium",
              i === 3 && "tw:max-bssm:hidden",
            )}
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{city}</span>
            <Flip
              n={2}
              from={<Chip tone="muted">#{was}</Chip>}
              to={<Chip tone="green">#{now}</Chip>}
            />
            <FiTrendingUp className="tw:text-(--green)" />
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fm-funnel">
      <UiHead
        icon={<FiFilter />}
        title="Calls to booked jobs"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {FUNNEL.map(([label, w, bg, ink]) => (
          <li key={label} className="tw:flex tw:justify-center">
            <span
              className="tw:flex tw:h-7 tw:items-center tw:justify-center tw:overflow-hidden tw:rounded-[9px] tw:text-[11.5px] tw:font-semibold tw:whitespace-nowrap"
              style={
                {
                  "--w": `${w}%`,
                  width: `${w}%`,
                  background: bg,
                  color: ink,
                  ...run("de-fill"),
                } as CSSProperties
              }
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:flex tw:flex-wrap tw:justify-center tw:gap-1.5">
        <Chip tone="muted">Top source: Maps</Chip>
        <Chip tone="muted">Top city: Cape Coral</Chip>
      </div>
    </Slot>,
  ];
}

function FocusRow({
  svc,
  color,
  w,
  at,
}: {
  svc: string;
  color: string;
  w: number[];
  at: number;
}) {
  return (
    <>
      <b className="tw:text-[11px] tw:font-semibold" style={{ color }}>
        {svc}
      </b>
      {w.map((n, k) => (
        <span
          key={k}
          className="tw:grid tw:h-6 tw:place-items-center tw:rounded-[8px] tw:bg-(--panel)"
        >
          <i
            className="tw:block tw:rounded-full"
            style={{
              width: DOT_SIZE[n],
              height: DOT_SIZE[n],
              background: color,
              opacity: 0.35 + n * 0.2,
              ...inAt(at + 1 + (k > 1 ? 1 : 0)),
            }}
          />
        </span>
      ))}
    </>
  );
}

/* ---------------------------------------------------------- journey */

/* Recording waveform bar heights (px). */
const WAVEFORM = [
  6, 10, 15, 9, 18, 22, 13, 8, 16, 21, 11, 6, 14, 19, 22, 15, 9, 12, 18, 10, 7,
  14, 20, 12, 8, 6,
];

const EARLIER: {
  icon: ReactNode;
  bg: string;
  ink: string;
  who: string;
  what: string;
  chip: ReactNode;
}[] = [
  {
    icon: <SiGoogleads />,
    bg: "#fef7e0",
    ink: "#b06000",
    who: "Paul · Fort Myers",
    what: "Google Ads · roof leak",
    chip: <Chip tone="green">Booked</Chip>,
  },
  {
    icon: <FiGlobe />,
    bg: LILAC,
    ink: INDIGO,
    who: "Estero",
    what: "Website · pool heater",
    chip: <Chip tone="blue">Quoted</Chip>,
  },
  {
    icon: <FiPhoneMissed />,
    bg: "#fde4e1",
    ink: "#b8352a",
    who: "Lehigh Acres",
    what: "Missed · A/C repair",
    chip: <Chip tone="amber">Texted back</Chip>,
  },
];

/** A call-tracking app on a phone: today's newest call opened as a
    summary (caller, source, search, recording, tags, outcome flipping to
    booked) above the earlier calls. Decorative (the frame is
    aria-hidden). */
function CallSummaryPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-[#f5f6f2] tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:px-3.5 tw:py-2">
          <span>
            <b className="tw:block tw:text-[14px] tw:leading-tight">
              Call tracking
            </b>
            <span className="tw:text-[10px] tw:text-(--muted)">
              Today · Lee County
            </span>
          </span>
          <span
            className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-white"
            style={{ background: PINE }}
          >
            <FiPhoneIncoming className="tw:size-3.5" />
          </span>
        </div>
        <div
          className="tw:mx-3 tw:rounded-[18px] tw:bg-white tw:p-3 tw:ring-1 tw:ring-(--line) tw:[box-shadow:var(--lift)]"
          style={inAt(1)}
        >
          <div className="tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-semibold tw:text-white"
              style={{ background: RUST }}
            >
              K
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:text-[13px]">Karen</b>
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:whitespace-nowrap tw:text-(--muted)">
                <FiMapPin className="tw:size-2.5 tw:flex-none" /> Cape Coral
              </span>
            </span>
            <Chip tone="green" className="tw:flex-none">
              Answered
            </Chip>
          </div>
          <div className="tw:mt-2.5 tw:flex tw:items-center tw:gap-2">
            <span
              className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
              style={{ background: PINE }}
            >
              <FiPlay className="tw:size-2.5" />
            </span>
            <span className="tw:relative tw:block tw:h-6 tw:min-w-0 tw:flex-1 tw:overflow-hidden">
              <span className="tw:absolute tw:inset-0 tw:flex tw:items-center tw:gap-[2px]">
                {WAVEFORM.map((h, k) => (
                  <i
                    key={k}
                    className="tw:block tw:w-1 tw:flex-none tw:rounded-full tw:bg-[#d9dde3]"
                    style={{ height: h }}
                  />
                ))}
              </span>
              <span
                className="tw:absolute tw:inset-y-0 tw:left-0 tw:flex tw:items-center tw:gap-[2px] tw:overflow-hidden"
                style={
                  {
                    "--w": "100%",
                    width: "100%",
                    ...run("de-fill"),
                  } as CSSProperties
                }
              >
                {WAVEFORM.map((h, k) => (
                  <i
                    key={k}
                    className="tw:block tw:w-1 tw:flex-none tw:rounded-full"
                    style={{ height: h, background: EMBER }}
                  />
                ))}
              </span>
            </span>
            <span className="tw:flex-none tw:text-[10px] tw:font-semibold tw:text-(--muted)">
              4:12
            </span>
          </div>
          <dl className="tw:mt-2.5 tw:grid tw:gap-1.5 tw:border-t tw:border-(--line) tw:pt-2.5 tw:text-[11px]">
            <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <dt className="tw:text-(--muted)">Source</dt>
              <dd className="tw:flex tw:items-center tw:gap-1 tw:font-semibold">
                <SiGooglemaps className="tw:text-[#34a853]" /> Business Profile
              </dd>
            </div>
            <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <dt className="tw:text-(--muted)">Searched</dt>
              <dd className="tw:truncate tw:font-semibold">
                lanai screen repair
              </dd>
            </div>
            <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <dt className="tw:text-(--muted)">Tagged</dt>
              <dd>
                <Chip tone="muted">
                  <FiTag /> Screen enclosure
                </Chip>
              </dd>
            </div>
            <div className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <dt className="tw:text-(--muted)">Outcome</dt>
              <dd>
                <Flip
                  n={2}
                  from={<Chip tone="amber">Reviewing</Chip>}
                  to={<Chip tone="green">Estimate booked</Chip>}
                />
              </dd>
            </div>
          </dl>
        </div>
        <p className="tw:mx-3.5 tw:mt-3 tw:text-[9.5px] tw:font-semibold tw:tracking-[0.1em] tw:text-(--muted) tw:uppercase">
          Earlier today
        </p>
        <ul className="tw:mx-3 tw:mt-1.5 tw:grid tw:gap-1.5">
          {EARLIER.map((c, i) => (
            <li
              key={c.who}
              className={cx(
                "tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-white tw:px-2.5 tw:py-1.5",
                i === 2 && "tw:max-bssm:hidden",
              )}
              style={inAt(i + 2)}
            >
              <span
                className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:text-[12px]"
                style={{ background: c.bg, color: c.ink }}
              >
                {c.icon}
              </span>
              <span className="tw:min-w-0 tw:flex-1">
                <b className="tw:block tw:truncate tw:text-[11px]">{c.who}</b>
                <span className="tw:block tw:truncate tw:text-[9.5px] tw:text-(--muted)">
                  {c.what}
                </span>
              </span>
              <span className="tw:flex-none tw:origin-right tw:scale-90">
                {c.chip}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const SVC = {
  roof: { label: "Roof", color: RUST },
  screen: { label: "Lanai", color: INDIGO },
  pool: { label: "Pool", color: POOL },
  power: { label: "Electric", color: VOLT },
  ac: { label: "A/C", color: GREEN },
};
type Lead = { s: keyof typeof SVC; n: string; done?: boolean };

/* Example board: open and booked leads in each Lee County city. */
const BOARD: { city: string; leads: Lead[]; fresh?: Lead }[] = [
  {
    city: "Cape Coral",
    leads: [
      { s: "pool", n: "Ana", done: true },
      { s: "screen", n: "Mike" },
      { s: "power", n: "Jen" },
    ],
    fresh: { s: "pool", n: "Rob" },
  },
  {
    city: "Fort Myers",
    leads: [
      { s: "roof", n: "Carl", done: true },
      { s: "ac", n: "Dee" },
      { s: "roof", n: "Sue" },
    ],
  },
  {
    city: "Estero",
    leads: [
      { s: "screen", n: "Lisa", done: true },
      { s: "pool", n: "Sam" },
    ],
  },
  {
    city: "Bonita Springs",
    leads: [
      { s: "ac", n: "Gail" },
      { s: "screen", n: "Ray", done: true },
    ],
  },
  {
    city: "Lehigh Acres",
    leads: [
      { s: "ac", n: "Luis" },
      { s: "power", n: "Tara" },
    ],
  },
];

function LeadCard({ lead, fresh }: { lead: Lead; fresh?: boolean }) {
  const svc = SVC[lead.s];
  return (
    <span
      className={cx(
        "tw:flex tw:min-w-0 tw:items-center tw:gap-1 tw:rounded-[8px] tw:border-l-[3px] tw:bg-white tw:py-1 tw:pr-1.5 tw:pl-1.5 tw:shadow-[0_1px_2px_rgba(12,21,38,0.08)] tw:max-bssm:min-w-[70px]",
        fresh && "fm-glow",
      )}
      style={{ borderLeftColor: svc.color }}
    >
      <span className="tw:min-w-0 tw:flex-1">
        <b
          className="tw:block tw:truncate tw:text-[8.5px] tw:font-bold tw:tracking-[0.06em] tw:uppercase"
          style={{ color: svc.color }}
        >
          {svc.label}
        </b>
        <span className="tw:block tw:truncate tw:text-[10.5px] tw:font-medium">
          {lead.n}
        </span>
      </span>
      {lead.done ? (
        <FiCheck className="tw:size-3 tw:flex-none tw:text-(--green) tw:[stroke-width:3]" />
      ) : fresh ? (
        <i
          className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
          style={{ background: EMBER }}
        />
      ) : null}
    </span>
  );
}

/** Lead board by Lee County city: one column per city with its open and
    booked leads, the newest Cape Coral lead glowing, and the console's
    three numbers. On phones each city becomes a row. Decorative. */
function LeeBoardUi({
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
          <FiColumns style={{ color: RUST }} /> {c.title}
        </b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <p className="tw:mt-1.5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1">
          <FiTool className="tw:size-3" /> Open leads by city
        </span>
        <span className="tw:flex tw:items-center tw:gap-1">
          <FiCheck className="tw:size-3 tw:text-(--green) tw:[stroke-width:3]" />{" "}
          Booked
        </span>
        <span className="tw:flex tw:items-center tw:gap-1">
          <i
            className="tw:block tw:size-2 tw:rounded-full"
            style={{ background: EMBER }}
          />
          New today
        </span>
      </p>
      <div className="tw:mt-3 tw:grid tw:grid-cols-5 tw:gap-1.5 tw:max-bssm:grid-cols-1">
        {BOARD.map((col, i) => (
          <div
            key={col.city}
            className="tw:min-w-0 tw:rounded-[12px] tw:bg-[#f3f5f0] tw:p-1.5 tw:max-bssm:flex tw:max-bssm:items-center tw:max-bssm:gap-2"
            style={inAt(i + 1)}
          >
            <span className="tw:mb-1.5 tw:flex tw:min-h-[26px] tw:items-center tw:justify-between tw:gap-1 tw:px-0.5 tw:max-bssm:mb-0 tw:max-bssm:min-h-0 tw:max-bssm:w-[74px] tw:max-bssm:flex-none">
              <b className="tw:min-w-0 tw:text-[10px]/[1.15] tw:font-semibold">
                {col.city}
              </b>
              <i
                className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:font-bold tw:not-italic tw:text-white tw:max-bssm:hidden"
                style={{ background: PINE }}
              >
                {col.leads.length + (col.fresh ? 1 : 0)}
              </i>
            </span>
            <span className="tw:grid tw:gap-1 tw:max-bssm:flex tw:max-bssm:min-w-0 tw:max-bssm:flex-wrap">
              {col.fresh ? <LeadCard lead={col.fresh} fresh /> : null}
              {col.leads.map((l) => (
                <LeadCard key={l.n} lead={l} />
              ))}
            </span>
          </div>
        ))}
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:px-3 tw:py-2.5"
            style={{ background: MINT }}
          >
            <b
              className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: PINE }}
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

const TICKS = Array.from({ length: 21 }, (_, i) => i * 5);

/** Before → after as caliper bars: a ruler from 0 to 100, the fixed jaw at
    the starting point and the sliding jaw carrying the six-month goal,
    with the gap between them filling in. */
function CaliperScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-4">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-3 tw:text-[14.5px] tw:font-medium">
              {row.label}
              <span className="tw:text-[12.5px] tw:whitespace-nowrap tw:text-(--muted)">
                start {row.before}
              </span>
            </span>
            <span
              className="tw:relative tw:mt-1 tw:block tw:h-[50px]"
              style={
                {
                  "--b": `${row.before}%`,
                  "--a": `${row.after}%`,
                  "--s": `${row.after - row.before}%`,
                } as CSSProperties
              }
            >
              <span className="tw:absolute tw:inset-x-0 tw:top-[24px] tw:block tw:h-[16px] tw:rounded-[4px] tw:border tw:border-[#e2ddd0] tw:bg-[#faf8f2]" />
              <span
                className="tw:absolute tw:top-[25px] tw:block tw:h-[14px]"
                style={{
                  left: `${row.before}%`,
                  width: `${row.after - row.before}%`,
                  background: "rgba(234,88,12,0.18)",
                  ...run("de-span"),
                }}
              />
              {TICKS.map((t) => (
                <i
                  key={t}
                  className="tw:absolute tw:top-[25px] tw:block tw:w-px"
                  style={{
                    left: `${t}%`,
                    height: t % 50 === 0 ? 10 : t % 10 === 0 ? 7 : 4,
                    background: "#b5ad9b",
                  }}
                />
              ))}
              <i
                className="tw:absolute tw:top-[18px] tw:block tw:h-[28px] tw:w-[3px] tw:-translate-x-1/2 tw:rounded-full"
                style={{ left: `${row.before}%`, background: PINE }}
              />
              <span
                className="tw:absolute tw:top-0 tw:bottom-[4px] tw:block tw:w-0"
                style={{ left: `${row.after}%`, ...run("de-slide") }}
              >
                <b
                  className="tw:absolute tw:top-0 tw:left-0 tw:-translate-x-1/2 tw:rounded-[6px] tw:px-1.5 tw:text-[11px]/[16px] tw:text-white"
                  style={{ background: EMBER }}
                >
                  {row.after}
                </b>
                <i
                  className="tw:absolute tw:top-[16px] tw:left-0 tw:block tw:size-0 tw:-translate-x-1/2 tw:border-x-[5px] tw:border-t-[5px] tw:border-x-transparent"
                  style={{ borderTopColor: EMBER }}
                />
                <i
                  className="tw:absolute tw:top-[21px] tw:bottom-0 tw:left-0 tw:block tw:w-[3px] tw:-translate-x-1/2 tw:rounded-full"
                  style={{ background: EMBER }}
                />
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-5 tw:gap-y-2 tw:text-[12.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i
            className="tw:block tw:h-3.5 tw:w-[3px] tw:rounded-full"
            style={{ background: PINE }}
          />
          Starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i
            className="tw:block tw:h-3.5 tw:w-[3px] tw:rounded-full"
            style={{ background: EMBER }}
          />
          Goal after six months
        </span>
      </p>
    </div>
  );
}

export const fortMyersUi: FlCityUi = {
  Feature1: RepairWavesUi,
  Feature2: EstimatePipelineUi,
  Feature3: CityPagesUi,
  Phone: CallSummaryPhone,
  DarkUi: LeeBoardUi,
  Score: CaliperScore,
  stepUis: fortMyersStepUis,
};
