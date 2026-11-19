import type { CSSProperties, ReactNode } from "react";
import {
  FiBarChart2,
  FiBookOpen,
  FiCheck,
  FiClock,
  FiLayout,
  FiList,
  FiMapPin,
  FiMic,
  FiNavigation,
  FiPhone,
  FiPhoneCall,
  FiSearch,
  FiSend,
  FiSliders,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, Line, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { GoogleG, PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flJacksonville.css";

/* UI for the Jacksonville digital marketing page only (18 Nov 2026); none
   of it appears on another page. Feature panels (drive-time zones drawn
   from a Southside shop, the new-resident calendar around Navy move season
   and the school year, review pace on each bank of the St. Johns), the four
   process steps (footprint audit, budget by drive zone, the week's
   tune-up, the zone report), the Local Services Ads phone for a Mandarin
   roofer, the river map on the dark card and the lollipop scorecard.
   Illustrations: "Your Company", first names, no prices or client figures.
   Palette: the page's pillars (river blue, marsh mint, sand peach, night
   navy). */

const RIVER = "#1d4ed8";
const NAVY = "#0f172a";
const WATER = "#93c5fd";
const SEA = "#dbeafe";
const PEACH = "#ffedd5";
const RUST = "#c2410c";
const MARSH = "#15803d";

/** White halo behind SVG labels so they read over water and zones. */
const HALO = {
  stroke: "#fff",
  strokeWidth: 3,
  paintOrder: "stroke",
  strokeLinejoin: "round",
} as const;

/* ------------------------------------------------------ feature panels */

const DRIVE: {
  area: string;
  min: string;
  zone: string;
  tone: "green" | "blue" | "amber" | "muted";
}[] = [
  { area: "Southside", min: "6 min", zone: "Core", tone: "green" },
  { area: "Mandarin", min: "22 min", zone: "Second", tone: "blue" },
  {
    area: "Jacksonville Beach",
    min: "27 min",
    zone: "Second",
    tone: "blue",
  },
  { area: "Orange Park", min: "38 min", zone: "Outer", tone: "amber" },
  { area: "Northside", min: "45+ min", zone: "No ads", tone: "muted" },
];

/* Drive-time rings around the shop pin (viewBox 0 0 320 150). */
const SHOP = { x: 186, y: 100 };
const RINGS = [
  { rx: 140, ry: 70, fill: "rgba(29,78,216,0.06)", dash: "4 4" },
  { rx: 100, ry: 50, fill: "rgba(29,78,216,0.11)", dash: "" },
  { rx: 54, ry: 34, fill: "rgba(29,78,216,0.2)", dash: "" },
];

/** Drive-time planner: core, second and outer zones drawn from a shop on
    the Southside, with the river, the Intracoastal and the ocean, and what
    each area gets. */
function DriveTimeUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiNavigation />}
        title="Drive-time zones"
        right={<Chip tone="blue">From your shop</Chip>}
      />
      <svg
        viewBox="0 0 320 150"
        className="tw:mt-3 tw:block tw:h-auto tw:w-full tw:overflow-hidden tw:rounded-[14px]"
      >
        <rect width={320} height={150} fill="#f5f7fb" />
        <path d="M304 0 C 298 40, 308 90, 300 150 H320 V0 Z" fill={SEA} />
        <path
          d="M268 0 C 262 50, 272 100, 264 150"
          stroke="#bfdbfe"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M118 150 C 124 128, 106 110, 122 90 S 140 64, 162 58 S 240 46, 304 38"
          stroke={WATER}
          strokeWidth={8}
          strokeLinecap="round"
          fill="none"
        />
        {RINGS.map((r, i) => (
          <ellipse
            key={r.rx}
            cx={SHOP.x}
            cy={SHOP.y}
            rx={r.rx}
            ry={r.ry}
            fill={r.fill}
            stroke={RIVER}
            strokeOpacity={0.45}
            strokeDasharray={r.dash || undefined}
            style={inAt(3 - i)}
          />
        ))}
        <circle
          className="jx-pulse"
          cx={SHOP.x}
          cy={SHOP.y}
          r={10}
          fill={RIVER}
        />
        <circle
          cx={SHOP.x}
          cy={SHOP.y}
          r={5.5}
          fill={RIVER}
          stroke="#fff"
          strokeWidth={2}
        />
        <g fontSize={9.5} fontWeight={600} fill="#334155" {...HALO}>
          <text x={112} y={20} textAnchor="middle">
            Northside
          </text>
          <text x={38} y={84} textAnchor="middle">
            Westside
          </text>
          <text x={214} y={74} textAnchor="middle">
            Arlington
          </text>
          <text x={SHOP.x} y={SHOP.y + 18} textAnchor="middle" fill={RIVER}>
            Southside
          </text>
          <text x={150} y={140} textAnchor="middle">
            Mandarin
          </text>
          <text x={74} y={132} textAnchor="middle">
            Orange Park
          </text>
          <text x={286} y={96} textAnchor="middle">
            Beaches
          </text>
        </g>
      </svg>
      <ul className="tw:mt-2.5 tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
        {["15 min", "30 min", "45 min"].map((t, i) => (
          <li key={t} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: RIVER, opacity: 0.85 - i * 0.3 }}
            />
            {t}
          </li>
        ))}
      </ul>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {DRIVE.map((d, i) => (
          <li
            key={d.area}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_62px_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{d.area}</span>
            <span className="tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--muted)">
              <FiClock className="tw:size-3 tw:flex-none" /> {d.min}
            </span>
            <Chip tone={d.tone}>{d.zone}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Example pattern of new-household arrivals: 1 (quiet) to 4 (busiest). */
const MOVE_MONTHS: { m: string; lvl: number; icon?: ReactNode }[] = [
  { m: "Jan", lvl: 1 },
  { m: "Feb", lvl: 1 },
  { m: "Mar", lvl: 2 },
  { m: "Apr", lvl: 2 },
  { m: "May", lvl: 3, icon: <FiTruck /> },
  { m: "Jun", lvl: 4, icon: <FiTruck /> },
  { m: "Jul", lvl: 4, icon: <FiTruck /> },
  { m: "Aug", lvl: 3, icon: <FiBookOpen /> },
  { m: "Sep", lvl: 2 },
  { m: "Oct", lvl: 1 },
  { m: "Nov", lvl: 1 },
  { m: "Dec", lvl: 1 },
];

const MOVE_PLAYS: [string, string, string][] = [
  ["Apr–Aug", "Welcome offers", RIVER],
  ["May–Jul", "Ads near NAS Jax and Mayport", RUST],
  ["Aug", "Back-to-school posts", MARSH],
];

/** New-resident calendar: twelve month tiles shaded by how many new
    households arrive (Navy move season, then the school year), with the
    campaigns scheduled ahead of them. */
function MoveSeasonUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiTruck />}
        tone="gold"
        title="New-resident calendar"
        right={<Chip tone="amber">Northeast FL</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-4 tw:gap-1.5">
        {MOVE_MONTHS.map((t, i) => {
          const peak = t.lvl >= 3;
          return (
            <li
              key={t.m}
              className="tw:rounded-[12px] tw:px-2.5 tw:pt-2 tw:pb-2.5"
              style={{
                background: peak ? PEACH : "var(--panel)",
                ...inAt(Math.floor(i / 4) + 1),
              }}
            >
              <span
                className="tw:flex tw:items-center tw:justify-between tw:text-[11.5px] tw:font-semibold"
                style={{ color: peak ? "#9a3412" : "var(--ink-2)" }}
              >
                {t.m}
                {t.icon ? (
                  <span className="tw:text-[12px]">{t.icon}</span>
                ) : null}
              </span>
              <span className="tw:mt-2 tw:flex tw:gap-0.5">
                {[1, 2, 3, 4].map((n) => (
                  <i
                    key={n}
                    className="tw:block tw:h-1.5 tw:flex-1 tw:rounded-full"
                    style={{
                      background:
                        n <= t.lvl ? (peak ? RUST : RIVER) : "#dfe5ee",
                    }}
                  />
                ))}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-4 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        Scheduled ahead
      </p>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {MOVE_PLAYS.map(([when, what, color], i) => (
          <li
            key={when}
            className="tw:grid tw:grid-cols-[64px_minmax(0,1fr)] tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:py-1.5 tw:pr-3 tw:pl-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 4)}
          >
            <b
              className="tw:rounded-[8px] tw:py-1 tw:text-center tw:text-[10.5px] tw:text-white"
              style={{ background: color }}
            >
              {when}
            </b>
            <span className="tw:truncate">{what}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BANKS: {
  name: string;
  areas: string;
  you: number[];
  rival: number[];
  status: ReactNode;
}[] = [
  {
    name: "North & west bank",
    areas: "Westside · Riverside",
    you: [1, 1, 2, 3, 3, 4],
    rival: [2, 3, 2, 3, 2, 3],
    status: (
      <Flip
        n={2}
        from={<Chip tone="amber">Behind</Chip>}
        to={<Chip tone="blue">Catching up</Chip>}
      />
    ),
  },
  {
    name: "South & east bank",
    areas: "Southside · Mandarin",
    you: [2, 3, 3, 4, 3, 4],
    rival: [1, 2, 1, 2, 2, 1],
    status: <Chip tone="green">Ahead</Chip>,
  },
];

function Dots({ n, color, at }: { n: number; color: string; at: number }) {
  return (
    <span className="tw:flex tw:flex-col-reverse tw:gap-[3px]">
      {Array.from({ length: n }, (_, k) => (
        <i
          key={k}
          className="tw:block tw:size-[6px] tw:rounded-full"
          style={{ background: color, ...inAt(at) }}
        />
      ))}
    </span>
  );
}

/** Review pace on each side of the St. Johns: new reviews per week as dot
    columns (yours beside the closest rival's), a status per side and the
    next request push. */
function ReviewPaceUi() {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiStar />}
        tone="green"
        title="Review pace by riverbank"
        right={<Chip tone="muted">Last 6 weeks</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        {BANKS.map((b) => (
          <div
            key={b.name}
            className="tw:min-w-0 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:pt-2.5 tw:pb-3"
          >
            <b className="tw:block tw:truncate tw:text-[12px]">{b.name}</b>
            <span className="tw:mt-0.5 tw:block tw:truncate tw:text-[10px] tw:text-(--muted)">
              {b.areas}
            </span>
            <span className="tw:mt-3 tw:flex tw:h-[40px] tw:items-end tw:justify-between">
              {b.you.map((y, w) => (
                <span key={w} className="tw:flex tw:items-end tw:gap-[2px]">
                  <Dots n={y} color={RIVER} at={w + 1} />
                  <Dots n={b.rival[w]} color="#cbd5e1" at={w + 1} />
                </span>
              ))}
            </span>
            <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-between tw:gap-1 tw:border-t tw:border-(--line) tw:pt-2 tw:text-[10px] tw:text-(--muted)">
              Wk 1–6
              {b.status}
            </span>
          </div>
        ))}
      </div>
      <p className="tw:mt-2.5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2 tw:rounded-full"
            style={{ background: RIVER }}
          />
          Your Company
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-[#cbd5e1]" />
          Closest rival
        </span>
      </p>
      <div
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
        style={{ background: "#eff6ff", ...run("de-late") }}
      >
        <FiSend className="tw:flex-none" style={{ color: RIVER }} />
        <span className="tw:min-w-0 tw:truncate">
          Westside push: 6 requests queued
        </span>
        <Chip tone="blue" className="tw:ml-auto">
          Today
        </Chip>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const AUDIT_JX: [ReactNode, string, string, string][] = [
  [<FiMapPin key="p" />, "Profile", "2 categories missing", "#b8352a"],
  [<FiLayout key="s" />, "Site", "No Mandarin page", "#b8352a"],
  [<FiList key="l" />, "Listings", "3 address mismatches", "#8a6400"],
  [<FiPhone key="t" />, "Tracking", "Calls not tracked", "#8a6400"],
];

const SPLIT_JX: {
  name: string;
  w: number;
  bg: string;
  ink: string;
  areas: string;
}[] = [
  {
    name: "Core",
    w: 55,
    bg: RIVER,
    ink: "#fff",
    areas: "Southside · Arlington · San Marco",
  },
  {
    name: "Second",
    w: 30,
    bg: WATER,
    ink: NAVY,
    areas: "Mandarin · the Beaches",
  },
  {
    name: "Outer",
    w: 15,
    bg: "#e2e8f0",
    ink: NAVY,
    areas: "Orange Park · Fleming Island",
  },
];

const WEEK_JX: [string, string][] = [
  ["Mon", "Search terms pruned"],
  ["Tue", "Riverside post published"],
  ["Thu", "Review replies sent"],
  ["Fri", "Outer-zone bids eased"],
];

const REPORT_JX: {
  area: string;
  d: string;
  color: string;
  move: string;
  tone: "green" | "blue" | "amber";
}[] = [
  {
    area: "Southside",
    d: "M2 14 L14 12 L26 12 L38 8 L50 6 L62 3",
    color: MARSH,
    move: "Raise",
    tone: "green",
  },
  {
    area: "Arlington",
    d: "M2 11 L14 12 L26 9 L38 9 L50 8 L62 7",
    color: RIVER,
    move: "Hold",
    tone: "blue",
  },
  {
    area: "Northside",
    d: "M2 6 L14 8 L26 7 L38 11 L50 12 L62 14",
    color: RUST,
    move: "Trim",
    tone: "amber",
  },
];

/** Jacksonville process UIs. */
function jacksonvilleStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="jx-audit">
      <UiHead
        icon={<FiSearch />}
        title="Local footprint audit"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">4 gaps</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {AUDIT_JX.map(([icon, t, s, color], i) => (
          <li
            key={t}
            className="tw:min-w-0 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-2.5 tw:py-2"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
              <span className="tw:text-(--muted)">{icon}</span> {t}
            </span>
            <span
              className="tw:mt-0.5 tw:block tw:truncate tw:text-[10.5px] tw:font-medium"
              style={{ color }}
            >
              {s}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="jx-split">
      <UiHead
        icon={<FiSliders />}
        tone="gold"
        title="Budget by drive zone"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:flex tw:h-7 tw:overflow-hidden tw:rounded-[10px] tw:text-[10.5px] tw:font-semibold">
        {SPLIT_JX.map((z) => (
          <span
            key={z.name}
            className="tw:flex tw:items-center tw:justify-center"
            style={{ width: `${z.w}%`, background: z.bg, color: z.ink }}
          >
            {z.w}%
          </span>
        ))}
      </div>
      <ul className="tw:grid tw:gap-1.5">
        {SPLIT_JX.map((z, i) => (
          <li
            key={z.name}
            className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:text-[11.5px]"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:size-2.5 tw:flex-none tw:rounded-full"
              style={{ background: z.bg }}
            />
            <b className="tw:w-[46px] tw:flex-none">{z.name}</b>
            <span className="tw:truncate tw:text-(--muted)">{z.areas}</span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="jx-week">
      <UiHead
        icon={<FiCheck />}
        tone="green"
        title="This week’s tune-up"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {WEEK_JX.map(([day, task], i) => (
          <li
            key={day}
            className="tw:grid tw:grid-cols-[38px_minmax(0,1fr)_20px] tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium"
          >
            <b className="tw:rounded-[6px] tw:bg-(--panel) tw:py-0.5 tw:text-center tw:text-[10.5px] tw:text-(--muted)">
              {day}
            </b>
            <span className="tw:truncate">{task}</span>
            <i
              className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:text-white"
              style={run(TICK_AT[i])}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
            </i>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="jx-report">
      <UiHead
        icon={<FiBarChart2 />}
        title="Zone report"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {REPORT_JX.map((r, i) => (
          <li
            key={r.area}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_64px_54px] tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{r.area}</span>
            <svg viewBox="0 0 64 18" className="tw:block tw:h-[18px] tw:w-16">
              <path
                d={r.d}
                pathLength={1}
                fill="none"
                stroke={r.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ strokeDasharray: 1, ...run("de-draw") }}
              />
            </svg>
            <span className="tw:flex tw:justify-end">
              <Chip tone={r.tone}>{r.move}</Chip>
            </span>
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A Local Services Ads result for a roofer near Mandarin: your Google
    Verified listing on top, a tap on Call, then the call arriving tagged
    with its source. Decorative (the frame is aria-hidden). */
function LsaRooferPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-[#f6f8fb] tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:mx-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-2 tw:text-[11.5px] tw:ring-1 tw:ring-(--line)">
          <GoogleG className="tw:size-3.5 tw:flex-none" />
          <span className="tw:truncate">roofer near Mandarin</span>
          <FiMic className="tw:ml-auto tw:size-3.5 tw:flex-none tw:text-(--muted)" />
        </div>
        <div className="tw:mx-3 tw:mt-3 tw:flex tw:items-center tw:justify-between tw:text-[10px]">
          <b>Sponsored</b>
          <span className="tw:text-(--muted)">Roofers serving 32223</span>
        </div>
        <div
          className="tw:mx-3 tw:mt-1.5 tw:rounded-[16px] tw:border-2 tw:bg-white tw:p-3"
          style={{ borderColor: RIVER }}
        >
          <div className="tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-semibold tw:text-white"
              style={{ background: NAVY }}
            >
              Y
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:truncate tw:text-[13px]">
                Your Company
              </b>
              <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
                <b className="tw:text-(--ink)">5.0</b>
                <span className="tw:flex tw:gap-px">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <FiStar
                      key={n}
                      className="tw:size-2.5 tw:fill-[#f4b400] tw:text-[#f4b400]"
                    />
                  ))}
                </span>
                · Roofing
              </span>
            </span>
          </div>
          <span className="tw:mt-2.5 tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-[#e6f4ea] tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:text-[#137333]">
            <MdVerified className="tw:size-3" /> Google Verified
          </span>
          <span className="tw:mt-1.5 tw:block tw:text-[10.5px] tw:text-(--ink-2)">
            Serves Mandarin · Open now
          </span>
          <span className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[11px] tw:font-semibold">
            <span
              className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5 tw:text-white"
              style={{ background: RIVER }}
            >
              <FiPhone className="tw:size-3" />
              <Flip n={1} from="Call" to="Calling…" />
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:rounded-full tw:border tw:border-(--line) tw:py-1.5">
              Message
            </span>
          </span>
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="tw:mx-3 tw:mt-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5"
          >
            <span className="tw:size-8 tw:flex-none tw:rounded-full tw:bg-[#e2e8f0]" />
            <span className="tw:grid tw:flex-1 tw:gap-1.5">
              <Line w={i === 1 ? "58%" : "70%"} />
              <Line w="42%" />
            </span>
            <MdVerified className="tw:size-3.5 tw:flex-none tw:text-[#b6bfcc]" />
          </div>
        ))}
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:z-2 tw:rounded-[16px] tw:px-3 tw:py-2.5 tw:text-white tw:[box-shadow:var(--lift)]"
          style={{ background: NAVY, ...run("de-late") }}
        >
          <span className="tw:flex tw:items-center tw:gap-2.5">
            <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-[#22c55e]">
              <FiPhoneCall className="tw:size-3.5" />
            </span>
            <span className="tw:min-w-0 tw:text-[11px]/[1.3]">
              <b className="tw:block">Call from Local Services Ads</b>
              <span className="tw:text-white/70">Roof leak · Mandarin</span>
            </span>
          </span>
          <span className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1.5">
            <Chip tone="blue">Source tagged</Chip>
            <Chip tone="green">Inspection booked</Chip>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* River map (viewBox 0 0 320 170): the St. Johns running north through
   town, then east to the ocean; the Intracoastal and the coast. Each area
   shows lead dots (relative, example only). */
const AREAS_JX: { name: string; x: number; y: number; n: number }[] = [
  { name: "Northside", x: 112, y: 30, n: 3 },
  { name: "Westside", x: 56, y: 100, n: 4 },
  { name: "Arlington", x: 210, y: 92, n: 5 },
  { name: "Southside", x: 178, y: 134, n: 7 },
  { name: "Beaches", x: 286, y: 112, n: 4 },
];
const DOT_AT: [number, number][] = [
  [0, 0],
  [8, -3],
  [-8, 2],
  [3, 8],
  [-4, -8],
  [10, 6],
  [-10, -5],
];
const MOST = Math.max(...AREAS_JX.map((a) => a.n));

/** The river-quadrant map: Jacksonville's five sides of town split by the
    St. Johns, with relative lead dots, a bar per area and the console's
    three numbers. Decorative. */
function RiverMapUi({
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
        viewBox="0 0 320 170"
        className="tw:mt-3 tw:block tw:h-auto tw:w-full tw:overflow-hidden tw:rounded-[14px]"
      >
        <rect width={320} height={170} fill="#f3f6fa" />
        <path d="M306 0 C 300 50, 310 110, 302 170 H320 V0 Z" fill={SEA} />
        <path
          d="M268 0 C 262 60, 272 110, 264 170"
          stroke="#bfdbfe"
          strokeWidth={3}
          fill="none"
        />
        <path
          d="M118 170 C 124 140, 106 120, 122 98 S 140 72, 162 66 S 240 54, 306 44"
          stroke={WATER}
          strokeWidth={10}
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="jx-flow"
          d="M118 170 C 124 140, 106 120, 122 98 S 140 72, 162 66 S 240 54, 306 44"
          stroke="#fff"
          strokeOpacity={0.85}
          strokeWidth={1.6}
          strokeLinecap="round"
          fill="none"
        />
        {AREAS_JX.map((a) => (
          <g key={a.name}>
            {DOT_AT.slice(0, a.n).map(([dx, dy], k) => (
              <circle
                key={k}
                cx={a.x + dx}
                cy={a.y + dy}
                r={3}
                fill={a.n === MOST ? RIVER : "#60a5fa"}
                style={inAt(k + 1)}
              />
            ))}
            <text
              x={a.x}
              y={a.y + 22}
              textAnchor="middle"
              fontSize={9.5}
              fontWeight={600}
              fill="#334155"
              {...HALO}
            >
              {a.name}
            </text>
          </g>
        ))}
        <text
          x={222}
          y={42}
          fontSize={8}
          fontStyle="italic"
          fill="#2563eb"
          textAnchor="middle"
          {...HALO}
        >
          St. Johns River
        </text>
      </svg>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-5 tw:gap-2">
        {AREAS_JX.map((a) => (
          <li
            key={a.name}
            className="tw:grid tw:justify-items-center tw:gap-1.5"
          >
            <span className="tw:flex tw:h-[52px] tw:w-full tw:max-w-[34px] tw:items-end tw:overflow-hidden tw:rounded-[8px] tw:bg-(--panel)">
              <i
                className="tw:block tw:w-full tw:rounded-[8px]"
                style={
                  {
                    "--h": `${Math.round((a.n / MOST) * 100)}%`,
                    height: `${Math.round((a.n / MOST) * 100)}%`,
                    background: a.n === MOST ? RIVER : WATER,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
            </span>
            <span className="tw:max-w-full tw:truncate tw:text-[10.5px] tw:font-medium tw:text-(--text)">
              {a.name}
            </span>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-[#eff6ff] tw:px-3 tw:py-2.5"
          >
            <b
              className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: RIVER }}
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

/** Before → after as lollipops: a stem rises to the six-month goal with the
    number in its head; the ring on the stem marks the starting point. */
function LollipopScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <div className="tw:relative tw:mt-5 tw:h-[170px] tw:border-b tw:border-(--line)">
        {[25, 50, 75, 100].map((v) => (
          <i
            key={v}
            className="tw:absolute tw:inset-x-0 tw:block tw:border-t tw:border-dashed tw:border-[#e5eaf1]"
            style={{ bottom: `${v}%` }}
          />
        ))}
        <ul className="tw:absolute tw:inset-0 tw:grid tw:grid-cols-4">
          {rows.map((row) => (
            <li key={row.label} className="tw:relative">
              <span
                className="tw:absolute tw:bottom-0 tw:left-1/2 tw:z-1 tw:block tw:w-[3px] tw:-translate-x-1/2 tw:rounded-full"
                style={
                  {
                    "--h": `${row.after}%`,
                    height: `${row.after}%`,
                    background: RIVER,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              >
                <b
                  className="tw:absolute tw:top-0 tw:left-1/2 tw:grid tw:size-9 tw:-translate-x-1/2 tw:-translate-y-1/2 tw:place-items-center tw:rounded-full tw:text-[12px] tw:text-white tw:[box-shadow:0_8px_16px_-8px_rgba(29,78,216,0.7)]"
                  style={{ background: RIVER }}
                >
                  {row.after}
                </b>
              </span>
              <i
                className="tw:absolute tw:left-1/2 tw:z-2 tw:block tw:size-3 tw:-translate-x-1/2 tw:translate-y-1/2 tw:rounded-full tw:border-2 tw:bg-white"
                style={{ bottom: `${row.before}%`, borderColor: RUST }}
              />
            </li>
          ))}
        </ul>
      </div>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-4 tw:gap-2">
        {rows.map((row) => (
          <li key={row.label} className="tw:text-center">
            <span className="tw:block tw:text-[12px]/[1.25] tw:font-medium tw:text-(--text)">
              {row.label}
            </span>
            <span className="tw:mt-1 tw:block tw:text-[11px] tw:text-(--muted)">
              from {row.before}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-3 tw:rounded-full tw:border-2 tw:bg-white"
            style={{ borderColor: RUST }}
          />
          Starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-3 tw:rounded-full"
            style={{ background: RIVER }}
          />
          Goal after six months
        </span>
      </p>
    </div>
  );
}

export const jacksonvilleUi: FlCityUi = {
  Feature1: DriveTimeUi,
  Feature2: MoveSeasonUi,
  Feature3: ReviewPaceUi,
  Phone: LsaRooferPhone,
  DarkUi: RiverMapUi,
  Score: LollipopScore,
  stepUis: jacksonvilleStepUis,
};
