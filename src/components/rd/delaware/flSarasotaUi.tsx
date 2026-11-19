import type { CSSProperties, ReactNode } from "react";
import {
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiChevronLeft,
  FiDroplet,
  FiFlag,
  FiLayout,
  FiMoreHorizontal,
  FiNavigation,
  FiPlus,
  FiRepeat,
  FiSearch,
  FiSun,
  FiTrendingUp,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, Line, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Fill, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flSarasota.css";

/* UI for the Sarasota digital marketing page only (18 Nov 2026); none of
   it appears on another page. Feature panels (the snowbird return planner:
   a winter-resident curve with campaign flags planted ahead of it, pool
   service requests as water levels across Sarasota and Manatee, a page
   builder for Lakewood Ranch villages), the four process steps (Map Pack
   stops along US 41, the season runway, the week's log, leads by town),
   the welcome-back email phone, stacked monthly lead bars with the season
   band on the dark card and the sun-arc scorecard. Illustrations: "Your
   Company", first names, relative values, positions and statuses only; no
   prices or client figures. Palette: the page's pillars (Gulf gold, Gulf
   sky, sunset pink, banyan green). */

const GOLD = "#a16207";
const SUN = "#f59e0b";
const SAND = "#fef3c7";
const SKY = "#dbeafe";
const GULF = "#0369a1";
const PINK = "#fce7f3";
const ROSE = "#db2777";
const BANYAN = "#14532d";
const LEAF = "#16a34a";

/* min-w-0: the stage is a grid, so a long header could otherwise push the
   card wider than the stage on phones. */
const FCARD = cx(CARD, "tw:min-w-0");

const f1 = (n: number) => n.toFixed(1);

/** Smooth line through the points (Catmull-Rom as cubic Béziers). */
function smooth(pts: [number, number][]) {
  let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += ` C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])} ${f1(p2[1])}`;
  }
  return d;
}

/* ------------------------------------------------------ feature panels */

/* Winter residents in town, August to May (0–1, relative, example). */
const IN_TOWN: [string, number][] = [
  ["Aug", 0.06],
  ["Sep", 0.12],
  ["Oct", 0.4],
  ["Nov", 0.66],
  ["Dec", 0.82],
  ["Jan", 0.95],
  ["Feb", 1],
  ["Mar", 0.93],
  ["Apr", 0.6],
  ["May", 0.18],
];
const AW = 350;
const AH = 96;
const ARRIVE_PTS: [number, number][] = IN_TOWN.map(([, v], i) => [
  (i + 0.5) * (AW / IN_TOWN.length),
  AH - 4 - v * (AH - 34),
]);
const ARRIVE_LINE = smooth([
  [0, ARRIVE_PTS[0][1]],
  ...ARRIVE_PTS,
  [AW, ARRIVE_PTS[ARRIVE_PTS.length - 1][1]],
]);

/* Campaign flags: month column (0 = Aug) and what goes live. */
const SNOW_PLAYS: { m: number; t: string; when: string }[] = [
  { m: 0, t: "Profile and offers refreshed", when: "Late Aug" },
  { m: 1, t: "Ads for searchers still up north", when: "Sep" },
  { m: 2, t: "Welcome-back email to past clients", when: "Oct" },
  { m: 7, t: "Review asks before they fly home", when: "Mar" },
];

/** Snowbird return planner: the winter-resident curve from August to May
    with numbered campaign flags planted ahead of the arrivals. */
function SnowbirdPlannerUi() {
  const col = 100 / IN_TOWN.length;
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiSun />}
        tone="gold"
        title="Snowbird planner"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">Planning</Chip>}
            to={<Chip tone="amber">Season ready</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-4 tw:h-[96px]">
        {/* Season band: October to April. */}
        <span
          className="tw:absolute tw:inset-y-0 tw:block tw:rounded-[10px]"
          style={{
            left: `${col * 2}%`,
            width: `${col * 7}%`,
            background: SAND,
          }}
        />
        <svg
          viewBox={`0 0 ${AW} ${AH}`}
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:block tw:size-full"
        >
          <defs>
            <linearGradient id="srq-arrive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={SUN} stopOpacity="0.45" />
              <stop offset="1" stopColor={SUN} stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            d={`${ARRIVE_LINE} L${AW} ${AH} L0 ${AH} Z`}
            fill="url(#srq-arrive)"
            style={run("de-area")}
          />
          <path
            d={ARRIVE_LINE}
            fill="none"
            stroke={GOLD}
            strokeWidth={2.2}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={run("de-draw")}
          />
        </svg>
        {SNOW_PLAYS.map((p, i) => (
          <span
            key={p.when}
            className="tw:absolute tw:inset-y-0 tw:flex tw:w-5 tw:-translate-x-1/2 tw:flex-col tw:items-center"
            style={{ left: `${col * (p.m + 0.5)}%`, ...inAt(i + 1) }}
          >
            <b
              className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[10.5px] tw:text-white"
              style={{ background: i === 3 ? ROSE : BANYAN }}
            >
              {i + 1}
            </b>
            <i
              className="tw:block tw:w-[2px] tw:flex-1 tw:rounded-full"
              style={{ background: i === 3 ? ROSE : BANYAN }}
            />
          </span>
        ))}
      </div>
      <div className="tw:mt-1.5 tw:grid tw:grid-cols-10 tw:text-center tw:text-[10px] tw:font-semibold tw:text-(--muted)">
        {IN_TOWN.map(([m]) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {SNOW_PLAYS.map((p, i) => (
          <li
            key={p.when}
            className="tw:grid tw:grid-cols-[20px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:py-1.5 tw:pr-2 tw:pl-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 3)}
          >
            <b
              className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:text-[10.5px] tw:text-white"
              style={{ background: i === 3 ? ROSE : BANYAN }}
            >
              {i + 1}
            </b>
            <span className="tw:truncate">{p.t}</span>
            <span
              className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold"
              style={{ color: GOLD }}
            >
              {p.when}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[11px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-[3px]"
            style={{ background: SAND, borderTop: `2px solid ${GOLD}` }}
          />
          Winter residents in town
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <FiFlag style={{ color: BANYAN }} />
          Live before they arrive
        </span>
      </p>
    </div>
  );
}

/* Pool service requests by area (water level = relative share, example). */
const POOLS: { a: string; c: string; job: string; lvl: number }[] = [
  { a: "Lakewood Ranch", c: "Manatee", job: "Weekly service", lvl: 88 },
  { a: "Palmer Ranch", c: "Sarasota", job: "Heater repair", lvl: 62 },
  { a: "Siesta Key", c: "Sarasota", job: "Green-to-clean", lvl: 46 },
  { a: "Venice", c: "Sarasota", job: "Pump and filter", lvl: 70 },
  { a: "Bradenton", c: "Manatee", job: "Resurfacing quote", lvl: 54 },
  { a: "Parrish", c: "Manatee", job: "New-pool startup", lvl: 78 },
];
const RIPPLE = `M0 4 ${Array.from(
  { length: 8 },
  (_, k) =>
    `Q${k * 20 + 5} ${k % 2 ? 7 : 1} ${k * 20 + 10} 4 T${k * 20 + 20} 4`,
).join(" ")} V8 H0 Z`;

/** Pool service requests across Sarasota and Manatee: each area is a
    tiled pool whose water level shows its share of requests, with the job
    most asked for there. */
function PoolRequestsUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiDroplet />}
        title="Pool requests"
        right={<Chip tone="blue">Sarasota · Manatee</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        {POOLS.map((p, i) => (
          <li
            key={p.a}
            className="tw:relative tw:h-[92px] tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-[#bae6fd]"
            style={{
              backgroundColor: "#f8fbff",
              backgroundImage:
                "linear-gradient(#e0f2fe 1px, transparent 1px), linear-gradient(90deg, #e0f2fe 1px, transparent 1px)",
              backgroundSize: "11px 11px",
              ...inAt(Math.floor(i / 2) + 1),
            }}
          >
            <span
              className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:block"
              style={
                {
                  "--h": `${Math.round(p.lvl * 0.55)}%`,
                  height: `${Math.round(p.lvl * 0.55)}%`,
                  background: "linear-gradient(180deg, #7dd3fc, #0284c7)",
                  ...run("de-rise"),
                } as CSSProperties
              }
            >
              <svg
                viewBox="0 0 160 8"
                preserveAspectRatio="none"
                className="srq-wave tw:absolute tw:-top-[5px] tw:left-0 tw:block tw:h-1.5 tw:w-[200%]"
              >
                <path d={RIPPLE} fill="#7dd3fc" />
              </svg>
            </span>
            <span className="tw:absolute tw:inset-x-2.5 tw:top-2 tw:grid tw:leading-tight">
              <b className="tw:truncate tw:text-[12px]">{p.a}</b>
              <span className="tw:text-[9.5px] tw:font-semibold tw:text-(--muted)">
                {p.c} County
              </span>
            </span>
            <span className="tw:absolute tw:bottom-2 tw:left-2 tw:inline-flex tw:max-w-[calc(100%-16px)] tw:items-center tw:gap-1 tw:truncate tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold tw:text-[#075985]">
              {p.job}
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-x-3 tw:gap-y-1.5 tw:border-t tw:border-(--line) tw:pt-3">
        <span className="tw:text-[11px] tw:text-(--muted)">
          Water level = share of requests
        </span>
        <Flip
          n={3}
          from={<Chip tone="muted">Even spend</Chip>}
          to={<Chip tone="blue">Spend follows requests</Chip>}
        />
      </div>
    </div>
  );
}

/* Lakewood Ranch villages and each page's status (example). */
const VILLAGES: { v: string; s: "Live" | "Building" | "Queued" }[] = [
  { v: "Waterside", s: "Live" },
  { v: "Star Farms", s: "Live" },
  { v: "Lake Club", s: "Building" },
  { v: "Greenbrook", s: "Queued" },
  { v: "Summerfield", s: "Queued" },
];
const VILLAGE_DOT = { Live: LEAF, Building: SUN, Queued: "#cbd5e1" };

/** A page builder for Lakewood Ranch: one tab per village and the
    Waterside page being assembled, with its checks ticking off. */
function VillagePagesUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiLayout />}
        tone="green"
        title="Lakewood Ranch pages"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">Drafting</Chip>}
            to={<Chip tone="green">Published</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:flex tw:flex-wrap tw:gap-1.5">
        {VILLAGES.map((t, i) => (
          <li
            key={t.v}
            className={cx(
              "tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:border tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold",
              i === 0
                ? "tw:border-transparent tw:text-white"
                : "tw:border-(--line) tw:bg-white",
            )}
            style={i === 0 ? { background: BANYAN } : undefined}
          >
            <i
              className="tw:block tw:size-1.5 tw:rounded-full"
              style={{ background: i === 0 ? "#bbf7d0" : VILLAGE_DOT[t.s] }}
            />
            {t.v}
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-(--line)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:bg-(--panel) tw:px-3 tw:py-1.5">
          <span className="tw:flex tw:gap-1">
            {[0, 1, 2].map((d) => (
              <i
                key={d}
                className="tw:block tw:size-1.5 tw:rounded-full tw:bg-[#cbd5e1]"
              />
            ))}
          </span>
          <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:rounded-full tw:bg-white tw:px-2.5 tw:py-0.5 tw:text-[10px] tw:text-(--muted)">
            yourcompany.com/lakewood-ranch/waterside
          </span>
        </div>
        <div className="tw:grid tw:gap-2 tw:p-3">
          <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted)">
            Lakewood Ranch › Waterside
          </span>
          <b className="tw:text-[14px]/[1.2]" style={inAt(1)}>
            Pool Service in Waterside
          </b>
          <span className="tw:grid tw:gap-1.5" style={inAt(2)}>
            <Line w="94%" />
            <Line w="72%" />
          </span>
          <span
            className="tw:grid tw:grid-cols-[72px_minmax(0,1fr)] tw:gap-2.5"
            style={inAt(3)}
          >
            <svg
              viewBox="0 0 72 54"
              className="tw:block tw:h-[54px] tw:w-[72px] tw:rounded-[10px]"
            >
              <rect width="72" height="54" fill="#ecfdf5" />
              <path
                d="M0 34 H72 M24 0 V54 M52 0 V54"
                stroke="#fff"
                strokeWidth="3"
              />
              <path
                d="M8 10 C16 4 30 8 28 18 C26 26 12 26 8 20 Z"
                fill="#bae6fd"
              />
              <path
                d="M40 38 C48 32 64 36 62 44 C60 51 46 51 41 46 Z"
                fill="#bae6fd"
              />
              <path
                d="M40 26 c0 -6 -4 -10 -8 -10 s-8 4 -8 10 c0 6 8 13 8 13 s8 -7 8 -13 Z"
                fill={ROSE}
              />
              <circle cx="32" cy="26" r="3" fill="#fff" />
            </svg>
            <span className="tw:grid tw:content-start tw:gap-1 tw:text-[11px] tw:font-medium">
              {["Weekly service", "Heater repair", "Leak detection"].map(
                (s) => (
                  <span key={s} className="tw:flex tw:items-center tw:gap-1.5">
                    <FiCheck
                      className="tw:size-3 tw:flex-none"
                      style={{ color: LEAF }}
                    />
                    {s}
                  </span>
                ),
              )}
            </span>
          </span>
          <span
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5 tw:text-[11px] tw:font-medium"
            style={inAt(4)}
          >
            <span className="tw:truncate">
              Do you clean pools near Waterside Place?
            </span>
            <FiPlus className="tw:flex-none tw:text-(--muted)" />
          </span>
        </div>
      </div>
      <ul className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1.5 tw:text-[11px] tw:font-medium">
        {["FAQ schema", "Map embed", "Linked from profile"].map((c, i) => (
          <li key={c} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:text-white"
              style={run(TICK_AT[i + 1])}
            >
              <FiCheck className="tw:size-2.5 tw:[stroke-width:3]" />
            </i>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

/* Map Pack position for "pool service near me" at stops along US 41
   (example positions). */
const US41: { stop: string; rank: string; tone: "green" | "amber" | "red" }[] =
  [
    { stop: "Downtown", rank: "#2", tone: "green" },
    { stop: "Gulf Gate", rank: "#6", tone: "amber" },
    { stop: "Osprey", rank: "None", tone: "red" },
    { stop: "Nokomis", rank: "#11", tone: "red" },
    { stop: "Venice", rank: "#4", tone: "amber" },
  ];

const RUNWAY: string[] = [
  "Profile fixed",
  "Town ad groups",
  "Village pages",
  "Email list ready",
];

const WEEK_LOG: { d: string; t: string }[] = [
  { d: "Mon", t: "Search terms pruned" },
  { d: "Tue", t: "Google post: heater tune-ups" },
  { d: "Wed", t: "New reviews answered" },
  { d: "Thu", t: "Bids raised on Siesta Key" },
];

const TOWN_LEADS: { t: string; w: number; c: string }[] = [
  { t: "Sarasota", w: 82, c: GOLD },
  { t: "Lakewood Ranch", w: 70, c: BANYAN },
  { t: "Venice", w: 52, c: GULF },
  { t: "Bradenton", w: 38, c: ROSE },
];

/** Sarasota process UIs: US 41 check, season runway, weekly log, towns. */
function sarasotaStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="srq-us41">
      <UiHead
        icon={<FiNavigation />}
        tone="gold"
        title="Map Pack along US 41"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Checking…</Chip>}
            to={<Chip tone="red">Gaps found</Chip>}
          />
        }
      />
      <span className="tw:flex tw:w-fit tw:max-w-full tw:items-center tw:gap-1.5 tw:truncate tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-medium">
        <FiSearch className="tw:flex-none tw:text-(--muted)" />
        “pool service near me”
      </span>
      <div className="tw:relative tw:mt-1">
        <span
          className="tw:absolute tw:inset-x-[10%] tw:top-[34px] tw:block tw:h-1.5 tw:rounded-full"
          style={{ background: "#e2e8f0" }}
        />
        <ul className="tw:relative tw:grid tw:grid-cols-5">
          {US41.map((s, i) => (
            <li
              key={s.stop}
              className="tw:flex tw:flex-col tw:items-center tw:gap-1.5"
              style={inAt(i + 1)}
            >
              <Chip tone={s.tone} className="tw:px-1.5 tw:text-[10.5px]">
                {s.rank}
              </Chip>
              <i
                className="tw:block tw:size-3.5 tw:rounded-full tw:border-[3px] tw:bg-white"
                style={{ borderColor: GOLD }}
              />
              <span className="tw:text-center tw:text-[10.5px]/[1.15] tw:font-medium">
                {s.stop}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Slot>,

    <Slot key="srq-runway">
      <UiHead
        icon={<FiFlag />}
        tone="green"
        title="Season runway"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div>
        <Fill w={100} color={`linear-gradient(90deg, ${LEAF}, ${SUN})`} />
        <span className="tw:mt-1.5 tw:flex tw:justify-between tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
          <span>Early Sep</span>
          <span style={{ color: GOLD }}>Oct 1 · season opens</span>
        </span>
      </div>
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {RUNWAY.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2 tw:py-1.5 tw:text-[11.5px] tw:font-medium"
          >
            <i
              className="tw:grid tw:size-[18px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
              style={run(TICK_AT[i])}
            >
              <FiCheck className="tw:size-[11px] tw:[stroke-width:3]" />
            </i>
            <span className="tw:truncate">{t}</span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="srq-week">
      <UiHead
        icon={<FiRepeat />}
        title="This week’s log"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:relative tw:grid tw:gap-1.5 tw:pl-1">
        <i className="tw:absolute tw:top-2 tw:bottom-2 tw:left-[12px] tw:block tw:w-[2px] tw:bg-(--line)" />
        {WEEK_LOG.map((w, i) => (
          <li
            key={w.d}
            className={cx(
              "tw:relative tw:grid tw:grid-cols-[18px_34px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium",
              i === 3 && "tw:max-bssm:hidden",
            )}
          >
            <i
              className="tw:grid tw:size-[18px] tw:place-items-center tw:rounded-full tw:text-white"
              style={run(TICK_AT[i])}
            >
              <FiCheck className="tw:size-[11px] tw:[stroke-width:3]" />
            </i>
            <b
              className="tw:text-[10.5px] tw:tracking-[0.08em] tw:uppercase"
              style={{ color: GOLD }}
            >
              {w.d}
            </b>
            <span className="tw:truncate tw:rounded-[8px] tw:bg-(--panel) tw:px-2 tw:py-1">
              {w.t}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="srq-towns">
      <UiHead
        icon={<FiBarChart2 />}
        tone="gold"
        title="Leads by town"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {TOWN_LEADS.map((t) => (
          <li
            key={t.t}
            className="tw:grid tw:grid-cols-[96px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium"
          >
            <span className="tw:truncate">{t.t}</span>
            <Fill w={t.w} color={t.c} />
          </li>
        ))}
      </ul>
      <div
        className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-1.5 tw:text-[11.5px]/[1.35]"
        style={{ background: SAND, ...run("de-late") }}
      >
        <FiTrendingUp className="tw:flex-none" style={{ color: GOLD }} />
        <span>
          <b>Next:</b> a Nokomis ad group
        </span>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const SLOTS_OCT = ["Tue Oct 7", "Thu Oct 9", "Mon Oct 13"];

/** A welcome-back email from a pool company to a returning winter
    resident: a sunset header, three startup visits to pick from and the
    booking it brings in. Decorative (the frame is aria-hidden). */
function WelcomeBackPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:px-3 tw:pt-1 tw:pb-2 tw:text-[12px]">
          <span
            className="tw:flex tw:items-center tw:gap-0.5 tw:font-semibold"
            style={{ color: GULF }}
          >
            <FiChevronLeft className="tw:size-4" /> Inbox
          </span>
          <FiMoreHorizontal className="tw:size-4 tw:text-(--muted)" />
        </div>
        <div className="tw:px-3.5">
          <b className="tw:block tw:text-[15px]/[1.25] tw:tracking-[-0.01em]">
            Welcome back to Sarasota, Linda
          </b>
          <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2">
            <span
              className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold tw:text-white"
              style={{ background: GOLD }}
            >
              Y
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:text-[11.5px]">Your Company</b>
              <span className="tw:text-[10px] tw:text-(--muted)">
                to Linda · Oct 1
              </span>
            </span>
          </span>
        </div>
        <span
          className="tw:relative tw:mx-3.5 tw:mt-3 tw:block tw:h-[96px] tw:flex-none tw:overflow-hidden tw:rounded-[14px]"
          style={{
            background: `linear-gradient(180deg, #fde68a 0%, #fbcfe8 52%, #7dd3fc 53%, ${GULF} 100%)`,
          }}
        >
          <svg
            viewBox="0 0 220 96"
            preserveAspectRatio="xMidYMid slice"
            className="tw:absolute tw:inset-0 tw:block tw:size-full"
          >
            <circle cx="150" cy="50" r="15" fill={SUN} />
            <circle className="srq-glow" cx="150" cy="50" r="15" fill={SUN} />
            <path
              d="M0 58 H220 M20 66 H90 M120 70 H200 M40 78 H150"
              stroke="#fff"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
            {/* Palm silhouette. */}
            <path
              d="M46 96 C48 78 50 58 58 36"
              stroke={BANYAN}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M58 36 C46 30 36 32 28 40 M58 36 C50 24 40 20 30 22 M58 36 C62 24 72 18 84 20 M58 36 C70 32 80 36 86 46 M58 36 C58 26 54 16 48 12"
              stroke={BANYAN}
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="tw:absolute tw:bottom-2 tw:left-2.5 tw:rounded-full tw:bg-white/90 tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold">
            Season visits are open
          </span>
        </span>
        <p className="tw:mx-3.5 tw:mt-3 tw:text-[11.5px]/[1.4]">
          Hi Linda, we can open and balance your pool the week you get in. Pick
          a startup visit:
        </p>
        <span className="tw:mx-3.5 tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-center tw:text-[10.5px] tw:font-semibold">
          {SLOTS_OCT.map((s, i) =>
            i === 1 ? (
              <span key={s} className="tw:grid">
                <span
                  className="tw:col-start-1 tw:row-start-1 tw:rounded-[10px] tw:border tw:border-(--line) tw:py-1.5"
                  style={run("de-swap-a2")}
                >
                  {s}
                </span>
                <span
                  className="tw:col-start-1 tw:row-start-1 tw:rounded-[10px] tw:border tw:border-transparent tw:py-1.5 tw:text-white"
                  style={{ background: BANYAN, ...run("de-swap-b2") }}
                >
                  {s}
                </span>
              </span>
            ) : (
              <span
                key={s}
                className="tw:rounded-[10px] tw:border tw:border-(--line) tw:py-1.5"
              >
                {s}
              </span>
            ),
          )}
        </span>
        <span
          className="tw:mx-3.5 tw:mt-2.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-white"
          style={{ background: GOLD }}
        >
          <FiCalendar className="tw:size-3.5" /> Book my startup visit
        </span>
        <span className="tw:mx-3.5 tw:mt-2.5 tw:text-[11px] tw:text-(--muted)">
          See you this season, Maria
        </span>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:z-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
            <FiCheck className="tw:size-4 tw:[stroke-width:3]" />
          </span>
          <span className="tw:min-w-0 tw:text-[11px]/[1.3]">
            <b className="tw:block">Booked from the email</b>
            Thu Oct 9 · Lakewood Ranch
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Leads by month, July to June, split into year-round and seasonal
   residents (0–1, relative, example). Season = October to April. */
const LEAD_MONTHS: { m: string; yr: number; ss: number }[] = [
  { m: "Jul", yr: 0.34, ss: 0.02 },
  { m: "Aug", yr: 0.32, ss: 0.02 },
  { m: "Sep", yr: 0.36, ss: 0.05 },
  { m: "Oct", yr: 0.4, ss: 0.18 },
  { m: "Nov", yr: 0.42, ss: 0.3 },
  { m: "Dec", yr: 0.43, ss: 0.38 },
  { m: "Jan", yr: 0.45, ss: 0.47 },
  { m: "Feb", yr: 0.46, ss: 0.5 },
  { m: "Mar", yr: 0.47, ss: 0.48 },
  { m: "Apr", yr: 0.44, ss: 0.31 },
  { m: "May", yr: 0.4, ss: 0.1 },
  { m: "Jun", yr: 0.36, ss: 0.03 },
];

/** Monthly lead bars, year-round residents under seasonal ones, with the
    October–April season band behind them and the console's three
    numbers. Decorative. */
function SeasonLeadsUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  const col = 100 / LEAD_MONTHS.length;
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:truncate tw:text-[15px]">
          <FiBarChart2 className="tw:flex-none" style={{ color: GOLD }} />{" "}
          {c.title}
        </b>
        <Chip tone="amber">{c.tag}</Chip>
      </div>
      <div className="tw:relative tw:mt-4 tw:h-[168px] tw:border-b tw:border-(--line)">
        <span
          className="tw:absolute tw:inset-y-0 tw:block tw:rounded-t-[12px]"
          style={{
            left: `${col * 3}%`,
            width: `${col * 7}%`,
            background: SAND,
            borderLeft: `1px dashed ${SUN}`,
            borderRight: `1px dashed ${SUN}`,
          }}
        >
          <b
            className="tw:absolute tw:inset-x-0 tw:top-1.5 tw:text-center tw:text-[10px] tw:tracking-[0.08em] tw:uppercase"
            style={{ color: GOLD }}
          >
            Season · Oct–Apr
          </b>
        </span>
        <ul className="tw:absolute tw:inset-x-0 tw:top-6 tw:bottom-0 tw:grid tw:grid-cols-12 tw:items-end">
          {LEAD_MONTHS.map((m) => {
            const total = m.yr + m.ss;
            return (
              <li
                key={m.m}
                className="tw:flex tw:h-full tw:items-end tw:justify-center"
              >
                <span
                  className="tw:flex tw:w-[62%] tw:max-w-[22px] tw:flex-col tw:overflow-hidden tw:rounded-t-[5px]"
                  style={
                    {
                      "--h": `${Math.round(total * 100)}%`,
                      height: `${Math.round(total * 100)}%`,
                      ...run("de-rise"),
                    } as CSSProperties
                  }
                >
                  <i
                    className="tw:block tw:flex-none"
                    style={{
                      height: `${Math.round((m.ss / total) * 100)}%`,
                      background: SUN,
                    }}
                  />
                  <i
                    className="tw:block tw:flex-1"
                    style={{ background: BANYAN }}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tw:mt-1.5 tw:grid tw:grid-cols-12 tw:text-center tw:text-[10px] tw:font-semibold tw:text-(--muted)">
        {LEAD_MONTHS.map((m) => (
          <span key={m.m}>{m.m}</span>
        ))}
      </div>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[11px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: BANYAN }}
          />
          Year-round residents
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: SUN }}
          />
          Seasonal residents
        </span>
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m, i) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:px-3 tw:py-2.5"
            style={{ background: i === 1 ? SKY : i === 2 ? PINK : SAND }}
          >
            <b
              className="tw:block tw:text-[17px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: i === 1 ? GULF : i === 2 ? ROSE : GOLD }}
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

/* Arc: a half circle centred at (60, 60), radius 46. */
const ARC = "M14 60 A46 46 0 0 1 106 60";
const HORIZON = `M0 66 ${Array.from(
  { length: 6 },
  (_, k) =>
    `Q${k * 20 + 5} ${k % 2 ? 69 : 63} ${k * 20 + 10} 66 T${k * 20 + 20} 66`,
).join(" ")}`;

/** Before → after as four sun arcs: the pink stretch is the starting
    score, the gold arc and the sun climb to the six-month aim. */
function SunArcScore({ rows }: { rows: DelawareData["compare"]["scoreRows"] }) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:grid-cols-2 tw:gap-x-4 tw:gap-y-5">
        {rows.map((row, i) => {
          const gap = +(1 - row.after / 100).toFixed(3);
          return (
            <li key={row.label} className="tw:text-center" style={inAt(i + 1)}>
              <svg
                viewBox="0 0 120 72"
                className="tw:block tw:h-auto tw:w-full"
              >
                <defs>
                  <linearGradient
                    id={`srq-arc-${i}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0" stopColor="#fcd34d" />
                    <stop offset="1" stopColor={GOLD} />
                  </linearGradient>
                </defs>
                <path
                  d={ARC}
                  fill="none"
                  stroke={SKY}
                  strokeWidth={9}
                  strokeLinecap="round"
                />
                <path
                  d={ARC}
                  fill="none"
                  stroke={`url(#srq-arc-${i})`}
                  strokeWidth={9}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={
                    {
                      strokeDashoffset: gap,
                      "--g": gap,
                      ...run("de-gauge"),
                    } as CSSProperties
                  }
                />
                <path
                  d={ARC}
                  fill="none"
                  stroke="#f9a8d4"
                  strokeWidth={9}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={+(1 - row.before / 100).toFixed(3)}
                />
                {/* The sun rides the arc from the start to the aim. */}
                <g
                  style={
                    {
                      transformBox: "view-box",
                      transformOrigin: "60px 60px",
                      transform: `rotate(${(row.after * 1.8).toFixed(1)}deg)`,
                      "--b": `${(row.before * 1.8).toFixed(1)}deg`,
                      "--a": `${(row.after * 1.8).toFixed(1)}deg`,
                      ...run("de-needle"),
                    } as CSSProperties
                  }
                >
                  <circle
                    className="srq-glow"
                    cx="14"
                    cy="60"
                    r="7"
                    fill={SUN}
                  />
                  <circle
                    cx="14"
                    cy="60"
                    r="7"
                    fill={SUN}
                    stroke="#fff"
                    strokeWidth={2.5}
                  />
                </g>
                <text
                  x="60"
                  y="54"
                  textAnchor="middle"
                  fontSize="19"
                  fontWeight="700"
                  fill="var(--ink)"
                  letterSpacing="-0.5"
                >
                  {row.after}
                </text>
                <path
                  d={HORIZON}
                  fill="none"
                  stroke="#7dd3fc"
                  strokeWidth={2}
                />
              </svg>
              <span className="tw:mt-1 tw:block tw:text-[12px]/[1.25] tw:font-medium tw:text-(--text)">
                {row.label}
              </span>
              <span className="tw:mt-0.5 tw:block tw:text-[11px] tw:text-(--muted)">
                starts at {row.before}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-full"
            style={{ background: "#f9a8d4" }}
          />
          Starting score
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-full"
            style={{ background: `linear-gradient(90deg, #fcd34d, ${GOLD})` }}
          />
          Aim by next season
        </span>
      </p>
    </div>
  );
}

export const sarasotaUi: FlCityUi = {
  Feature1: SnowbirdPlannerUi,
  Feature2: PoolRequestsUi,
  Feature3: VillagePagesUi,
  Phone: WelcomeBackPhone,
  DarkUi: SeasonLeadsUi,
  Score: SunArcScore,
  stepUis: sarasotaStepUis,
};
