import type { ReactNode } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiCrosshair,
  FiFileText,
  FiFilter,
  FiLayers,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiPhoneCall,
  FiPhoneIncoming,
  FiRefreshCw,
  FiSearch,
  FiSlash,
  FiSliders,
  FiStar,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Fill, Flip, Slot, inAt, run } from "./uiBits";
import "./flPpc.css";

/* UI for the Florida PPC page only (18 Nov 2026); none of it appears on
   another page. Feature panels (county targeting cartogram, season budget
   pacing curve, phone-first lead desk with Local Services Ads and call
   ads), the four process steps (account audit, campaign lineup,
   search-term sweep, next month's split), the sponsored Maps pin phone,
   the lead source log on the dark card and the ad-strength style
   scorecard. Palette: burnt orange, indigo, sky and lemon (the page's
   pillars). Illustrations: "Your Company", first names, no money figures. */

const ORANGE = "#c2410c";
const INDIGO = "#312e81";
const SKY = "#e0f2fe";
const LEMON = "#fef9c3";
const SEA = "#0284c7";

/* ------------------------------------------------------ feature panels */

type Group = "south" | "bay" | "central";

const GROUPS: Record<
  Group,
  { name: string; counties: string; color: string; at: number }
> = {
  south: {
    name: "South Florida",
    counties: "Miami-Dade · Broward · Palm Beach",
    color: ORANGE,
    at: 1,
  },
  bay: {
    name: "Tampa Bay",
    counties: "Pinellas · Hillsborough · Pasco · Manatee · Sarasota",
    color: INDIGO,
    at: 2,
  },
  central: {
    name: "Central Florida",
    counties: "Orange · Polk · Volusia",
    color: SEA,
    at: 3,
  },
};

/* County cartogram: [code, column, row, group]; "out" = excluded. */
const COUNTIES: [string, number, number, Group | "out" | null][] = [
  ["ESC", 1, 1, "out"],
  ["OKA", 2, 1, "out"],
  ["BAY", 3, 1, "out"],
  ["LEO", 4, 1, "out"],
  ["SUW", 5, 1, null],
  ["DUV", 6, 1, null],
  ["ALA", 5, 2, null],
  ["STJ", 6, 2, null],
  ["CIT", 4, 3, null],
  ["MAR", 5, 3, null],
  ["VOL", 6, 3, "central"],
  ["PAS", 4, 4, "bay"],
  ["ORA", 5, 4, "central"],
  ["BRE", 6, 4, null],
  ["PIN", 3, 5, "bay"],
  ["HIL", 4, 5, "bay"],
  ["POL", 5, 5, "central"],
  ["IRC", 6, 5, null],
  ["MAN", 4, 6, "bay"],
  ["HIG", 5, 6, null],
  ["STL", 6, 6, null],
  ["SAR", 4, 7, "bay"],
  ["CHA", 5, 7, null],
  ["MRT", 6, 7, null],
  ["LEE", 4, 8, null],
  ["HEN", 5, 8, null],
  ["PBC", 6, 8, "south"],
  ["COL", 4, 9, null],
  ["BRO", 6, 9, "south"],
  ["MON", 5, 10, "out"],
  ["MDE", 6, 10, "south"],
];

/** Three region campaigns lighting up on a county cartogram, the
    Panhandle and the Keys excluded, and the location option fixed to
    people who are actually in the area. */
export function FlPpcFeature1() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCrosshair />}
        title="County targeting"
        right={<Chip tone="blue">3 campaigns</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] tw:items-center tw:gap-4 tw:max-bssm:grid-cols-1">
        <div
          className="tw:mx-auto tw:grid tw:w-full tw:max-w-[210px] tw:grid-cols-6 tw:gap-[3px]"
          style={{ gridTemplateRows: "repeat(10, 19px)" }}
        >
          {COUNTIES.map(([code, c, r, g]) => (
            <span
              key={code}
              className="tw:relative tw:grid tw:place-items-center tw:rounded-[5px] tw:bg-(--panel) tw:text-[8px] tw:font-semibold tw:tracking-[0.03em] tw:text-[#94a3b8]"
              style={{ gridColumn: c, gridRow: r }}
            >
              {code}
              {g ? (
                <i
                  className={cx(
                    "tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:rounded-[5px] tw:not-italic",
                    g === "out"
                      ? "tw:border tw:border-dashed tw:border-[#e4a5a0] tw:bg-white tw:text-[#b8352a] tw:line-through"
                      : "tw:text-white",
                  )}
                  style={
                    g === "out"
                      ? inAt(4)
                      : { background: GROUPS[g].color, ...inAt(GROUPS[g].at) }
                  }
                >
                  {code}
                </i>
              ) : null}
            </span>
          ))}
        </div>
        <ul className="tw:grid tw:gap-2">
          {(Object.keys(GROUPS) as Group[]).map((k) => (
            <li
              key={k}
              className="tw:grid tw:grid-cols-[10px_minmax(0,1fr)] tw:gap-2"
              style={inAt(GROUPS[k].at)}
            >
              <i
                className="tw:mt-1 tw:block tw:size-2.5 tw:rounded-[3px]"
                style={{ background: GROUPS[k].color }}
              />
              <span className="tw:min-w-0">
                <b className="tw:block tw:text-[12px]">{GROUPS[k].name}</b>
                <span className="tw:block tw:text-[10.5px]/[1.35] tw:text-(--muted)">
                  {GROUPS[k].counties}
                </span>
              </span>
            </li>
          ))}
          <li
            className="tw:grid tw:grid-cols-[10px_minmax(0,1fr)] tw:gap-2"
            style={inAt(4)}
          >
            <i className="tw:mt-1 tw:block tw:size-2.5 tw:rounded-[3px] tw:border tw:border-dashed tw:border-[#e4a5a0]" />
            <span>
              <b className="tw:block tw:text-[12px]">Excluded</b>
              <span className="tw:block tw:text-[10.5px]/[1.35] tw:text-(--muted)">
                Panhandle · Keys
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <FiMapPin className="tw:text-(--muted)" /> Location option
        </span>
        <Flip
          n={3}
          from={<Chip tone="amber">Presence or interest</Chip>}
          to={<Chip tone="green">Presence only</Chip>}
        />
      </div>
    </div>
  );
}

/* Relative budget level per month, Jan → Dec (0 = floor, 1 = peak). */
const PACE = [
  0.84, 0.9, 0.86, 0.62, 0.34, 0.44, 0.5, 0.6, 0.95, 0.76, 0.8, 0.83,
];
const PX0 = 44;
const PX1 = 352;
const PY_TOP = 22;
const PY_BASE = 122;
const STEP = (PX1 - PX0) / 12;
const px = (i: number) => PX0 + (i + 0.5) * STEP;
const py = (v: number) => PY_BASE - v * (PY_BASE - PY_TOP);
const PACE_LINE = PACE.map(
  (v, i) => `${i ? "L" : "M"}${px(i).toFixed(1)} ${py(v).toFixed(1)}`,
).join(" ");
const PACE_AREA = `${PACE_LINE} L${px(11).toFixed(1)} ${PY_BASE} L${px(0).toFixed(1)} ${PY_BASE} Z`;
/** Month span (1-based, inclusive) as an x / width pair. */
const span = (a: number, b: number) => ({
  x: PX0 + (a - 1) * STEP,
  width: (b - a + 1) * STEP,
});
/* Quarter ticks: [month index, label]. */
const TICKS: [number, string][] = [
  [0, "Jan"],
  [3, "Apr"],
  [6, "Jul"],
  [9, "Oct"],
];

const PACE_NOTES: { when: string; what: string; bg: string; dot: string }[] = [
  { when: "Oct–Apr", what: "Snowbird lift", bg: LEMON, dot: "#ca8a04" },
  { when: "Jun–Nov", what: "Storm standby", bg: SKY, dot: SEA },
  { when: "Weekly", what: "Pacing check", bg: "#ffedd5", dot: ORANGE },
];

/** A year of budget pacing: the line climbs through snowbird months, dips
    in late spring and spikes when a storm is named. Relative levels only. */
export function FlPpcFeature2() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiActivity />}
        tone="gold"
        title="Budget pacing by month"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">Pacing…</Chip>}
            to={<Chip tone="green">On plan</Chip>}
          />
        }
      />
      <svg
        viewBox="0 0 360 142"
        className="tw:mt-4 tw:block tw:h-auto tw:w-full"
      >
        {[
          [1, 4],
          [10, 12],
        ].map(([a, b]) => (
          <rect
            key={a}
            y={PY_TOP - 8}
            height={PY_BASE - PY_TOP + 8}
            fill={LEMON}
            {...span(a, b)}
          />
        ))}
        <rect
          y={PY_TOP - 8}
          height={PY_BASE - PY_TOP + 8}
          fill={SKY}
          opacity={0.75}
          {...span(6, 11)}
        />
        {(
          [
            [1, "Peak"],
            [0.6, "Raised"],
            [0.2, "Base"],
          ] as [number, string][]
        ).map(([v, label]) => (
          <g key={label}>
            <line
              x1={PX0}
              x2={PX1}
              y1={py(v)}
              y2={py(v)}
              stroke="#cbd5e1"
              strokeDasharray="3 4"
            />
            <text
              x={2}
              y={py(v) + 3}
              fontSize={9}
              fill="#64748b"
              fontWeight={600}
            >
              {label}
            </text>
          </g>
        ))}
        <path
          d={PACE_AREA}
          fill={ORANGE}
          fillOpacity={0.14}
          style={run("de-area")}
        />
        <path
          d={PACE_LINE}
          fill="none"
          stroke={ORANGE}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          style={run("de-draw")}
        />
        <g style={run("de-late")}>
          <rect
            x={px(8) - 66}
            y={py(0.95) - 9}
            width={58}
            height={18}
            rx={9}
            fill={INDIGO}
          />
          <text
            x={px(8) - 37}
            y={py(0.95) + 3.5}
            fontSize={9}
            fontWeight={600}
            fill="#fff"
            textAnchor="middle"
          >
            Storm named
          </text>
          <circle
            cx={px(8)}
            cy={py(0.95)}
            r={5}
            fill={ORANGE}
            stroke="#fff"
            strokeWidth={2}
          />
        </g>
        {PACE.map((_, i) => (
          <circle key={i} cx={px(i)} cy={PY_BASE + 6} r={1.6} fill="#cbd5e1" />
        ))}
        {TICKS.map(([i, m]) => (
          <text
            key={m}
            x={px(i)}
            y={139}
            fontSize={9.5}
            fill="#64748b"
            fontWeight={600}
            textAnchor="middle"
          >
            {m}
          </text>
        ))}
      </svg>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5">
        {PACE_NOTES.map((n, i) => (
          <li
            key={n.when}
            className="tw:rounded-[12px] tw:px-2.5 tw:py-2"
            style={{ background: n.bg, ...inAt(i + 2) }}
          >
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
              <i
                className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
                style={{ background: n.dot }}
              />
              {n.when}
            </span>
            <span className="tw:mt-0.5 tw:block tw:text-[10.5px] tw:text-(--ink-2)">
              {n.what}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DESK: {
  who: string;
  job: string;
  area: string;
  via: string;
  status: ReactNode;
  tint: string;
}[] = [
  {
    who: "Maria",
    job: "AC not cooling",
    area: "Brandon",
    via: "Local Services",
    tint: ORANGE,
    status: (
      <Flip
        n={2}
        from={<Chip tone="amber">Ringing</Chip>}
        to={<Chip tone="green">Booked</Chip>}
      />
    ),
  },
  {
    who: "Dev",
    job: "Roof leak after a storm",
    area: "Cape Coral",
    via: "Call ad",
    tint: INDIGO,
    status: <Chip tone="green">Booked</Chip>,
  },
  {
    who: "Ana",
    job: "Water heater swap",
    area: "Kissimmee",
    via: "Local Services",
    tint: SEA,
    status: <Chip tone="blue">Callback set</Chip>,
  },
];

/** The phone-first lead desk: a Local Services Ad with the Google
    Verified badge and a call ad side by side, then the calls they bring. */
export function FlPpcFeature3() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiPhoneCall />}
        tone="green"
        title="Phone-first lead desk"
        right={<Chip tone="green">Staffed hours</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        <div
          className="tw:rounded-[14px] tw:px-3 tw:py-2.5"
          style={{ background: LEMON }}
        >
          <span className="tw:block tw:text-[9.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-[#854d0e] tw:uppercase">
            Local Services Ad
          </span>
          <b className="tw:mt-1 tw:block tw:text-[12.5px]">Your Company</b>
          <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:font-semibold tw:text-[#1f7a3a]">
            <FiCheckCircle className="tw:size-3 tw:flex-none" /> Google Verified
          </span>
        </div>
        <div
          className="tw:rounded-[14px] tw:px-3 tw:py-2.5"
          style={{ background: SKY }}
        >
          <span className="tw:block tw:text-[9.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-[#075985] tw:uppercase">
            Call ad
          </span>
          <b className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[12.5px]">
            <FiPhone className="tw:size-3 tw:flex-none" /> Tap to call
          </b>
          <span className="tw:mt-1 tw:block tw:text-[10.5px] tw:text-(--ink-2)">
            Runs while the office answers
          </span>
        </div>
      </div>
      <p className="tw:mt-4 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        Today’s calls
      </p>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {DESK.map((d, i) => (
          <li
            key={d.who}
            className="tw:grid tw:grid-cols-[30px_minmax(0,1fr)_auto] tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-2.5 tw:py-2"
            style={inAt(i + 1)}
          >
            <span
              className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-semibold tw:text-white"
              style={{ background: d.tint }}
            >
              {d.who[0]}
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:truncate tw:text-[12px]">
                {d.who} · {d.job}
              </b>
              <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                {d.area} · via {d.via}
              </span>
            </span>
            {d.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const AUDIT: { t: string; s: string; tone: "red" | "amber" }[] = [
  { t: "Location option", s: "Interest on", tone: "red" },
  { t: "Call tracking", s: "Missing", tone: "red" },
  { t: "Search terms", s: "Unread", tone: "amber" },
  { t: "Ad schedule", s: "Runs overnight", tone: "amber" },
];

const LINEUP: {
  name: string;
  region: string;
  on: [number, number][];
  color: string;
  standby?: boolean;
}[] = [
  { name: "Repairs", region: "South FL", on: [[1, 12]], color: ORANGE },
  {
    name: "Tune-ups",
    region: "Tampa Bay",
    on: [
      [1, 4],
      [10, 12],
    ],
    color: INDIGO,
  },
  { name: "Installs", region: "Central FL", on: [[3, 9]], color: SEA },
  {
    name: "Storm response",
    region: "Gulf coast",
    on: [[6, 11]],
    color: "#b45309",
    standby: true,
  },
];

const KEEP = ["ac repair ruskin", "ac not cooling", "24 hr ac repair"];
const BLOCK = ["hvac jobs tampa", "diy ac recharge", "ac repair ohio"];

const SPLIT: { r: string; now: number; next: number }[] = [
  { r: "South FL", now: 68, next: 82 },
  { r: "Tampa Bay", now: 60, next: 72 },
  { r: "Central FL", now: 54, next: 42 },
  { r: "Panhandle", now: 30, next: 18 },
];

/** Florida PPC process UIs. */
export function flPpcStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="fl-ppc-audit">
      <UiHead
        icon={<FiSearch />}
        title="Ad account audit"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">4 fixes</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {AUDIT.map((a, i) => (
          <li
            key={a.t}
            className="tw:rounded-[12px] tw:border tw:border-(--line) tw:border-l-[3px] tw:px-2.5 tw:py-2"
            style={{
              borderLeftColor: a.tone === "red" ? "#dc2626" : "#d97706",
              ...inAt(i + 1),
            }}
          >
            <b className="tw:block tw:text-[11.5px]">{a.t}</b>
            <Chip tone={a.tone} className="tw:mt-1">
              {a.s}
            </Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fl-ppc-lineup">
      <UiHead
        icon={<FiLayers />}
        tone="gold"
        title="Campaign lineup"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[84px_minmax(0,1fr)] tw:gap-x-2 tw:gap-y-1.5">
        <span />
        <span className="tw:grid tw:grid-cols-4 tw:text-[9px] tw:font-semibold tw:text-(--muted)">
          {TICKS.map(([, m]) => (
            <span key={m} className="tw:border-l tw:border-(--line) tw:pl-1">
              {m}
            </span>
          ))}
        </span>
        {LINEUP.map((c, i) => (
          <div key={c.name} className="tw:contents">
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[11px]">{c.name}</b>
              <span className="tw:block tw:truncate tw:text-[9.5px] tw:text-(--muted) tw:max-bssm:hidden">
                {c.region}
              </span>
            </span>
            <span className="tw:grid tw:grid-cols-12 tw:items-center tw:rounded-[6px] tw:bg-(--panel)">
              {c.on.map(([a, b]) => (
                <i
                  key={a}
                  className={cx(
                    "tw:block tw:h-3.5 tw:rounded-[5px]",
                    c.standby && "tw:border-[1.5px] tw:border-dashed",
                  )}
                  style={{
                    gridColumn: `${a} / ${b + 1}`,
                    gridRow: 1,
                    ...(c.standby
                      ? { borderColor: c.color, background: "#fff7ed" }
                      : { background: c.color }),
                    ...inAt(i + 1),
                  }}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="fl-ppc-sweep">
      <UiHead
        icon={<FiFilter />}
        tone="green"
        title="Search-term sweep"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-2 tw:gap-2">
        {(
          [
            ["Keep", KEEP, true],
            ["Exclude", BLOCK, false],
          ] as [string, string[], boolean][]
        ).map(([head, terms, keep], col) => (
          <div
            key={head}
            className="tw:rounded-[12px] tw:p-2"
            style={{ background: keep ? "#ecfdf3" : "#fef2f2" }}
          >
            <span
              className={cx(
                "tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:font-semibold",
                keep ? "tw:text-[#1f7a3a]" : "tw:text-[#b8352a]",
              )}
            >
              {keep ? <FiCheckCircle /> : <FiSlash />} {head}
            </span>
            <ul className="tw:mt-1.5 tw:grid tw:gap-1">
              {terms.map((t, i) => (
                <li
                  key={t}
                  className={cx(
                    "tw:truncate tw:rounded-[8px] tw:bg-white tw:px-2 tw:py-1 tw:font-mono tw:text-[10px]",
                    !keep && "tw:text-(--muted) tw:line-through",
                  )}
                  style={inAt(i * 2 + col + 1)}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="fl-ppc-split">
      <UiHead
        icon={<FiSliders />}
        title="Next month’s split"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:gap-2">
        {SPLIT.map((row, i) => {
          const up = row.next > row.now;
          return (
            <li
              key={row.r}
              className="tw:grid tw:grid-cols-[70px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium"
            >
              {row.r}
              <span className="tw:relative">
                <Fill w={row.next} color={up ? ORANGE : "#94a3b8"} />
                <i
                  className="tw:absolute tw:-top-1 tw:block tw:h-4 tw:w-[2px] tw:rounded-full tw:bg-(--ink)"
                  style={{ left: `${row.now}%` }}
                />
              </span>
              <Chip tone={up ? "green" : "muted"} style={inAt(i + 2)}>
                {up ? <FiTrendingUp /> : <FiTrendingDown />}
                {up ? "More" : "Less"}
              </Chip>
            </li>
          );
        })}
      </ul>
      <p className="tw:flex tw:items-center tw:gap-1.5 tw:text-[10.5px] tw:text-(--muted)">
        <i className="tw:block tw:h-3 tw:w-[2px] tw:rounded-full tw:bg-(--ink)" />
        This month · bar = next month
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A Maps pin drawn with its tip at (x, y). */
function Pin({
  x,
  y,
  s = 1,
  color,
}: {
  x: number;
  y: number;
  s?: number;
  color: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        d="M0 0 C-6 -7 -10 -11 -10 -17 A10 10 0 1 1 10 -17 C10 -11 6 -7 0 0 Z"
        fill={color}
        stroke="#fff"
        strokeWidth={1.5}
      />
      <circle cx={0} cy={-17} r={3.6} fill="#fff" />
    </g>
  );
}

/** A Maps search on a phone: one sponsored pin (yours) pulsing among the
    others, its place card below and the call it brings. Decorative (the
    frame is aria-hidden). */
export function FlPpcPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:relative tw:z-2 tw:mx-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-2 tw:text-[11.5px] tw:[box-shadow:0_6px_16px_-8px_rgba(12,21,38,0.4)]">
          <SiGooglemaps className="tw:size-3.5 tw:flex-none tw:text-[#34a853]" />
          <span className="tw:truncate">pool repair near me</span>
          <span
            className="tw:ml-auto tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:font-semibold tw:text-white"
            style={{ background: INDIGO }}
          >
            L
          </span>
        </div>
        <ul className="tw:mx-3 tw:mt-2 tw:flex tw:gap-1.5 tw:overflow-hidden tw:text-[10px] tw:font-medium tw:whitespace-nowrap">
          {["Open now", "Top rated", "Quotes"].map((t) => (
            <li
              key={t}
              className="tw:rounded-full tw:border tw:border-(--line) tw:px-2.5 tw:py-1"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="tw:relative tw:mt-2 tw:h-[178px] tw:flex-none tw:overflow-hidden tw:max-bssm:h-[160px]">
          <svg
            viewBox="0 0 260 178"
            preserveAspectRatio="xMidYMid slice"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <rect width={260} height={178} fill="#f3f0e7" />
            <path
              d="M0 0 H58 C48 34 70 62 56 98 S42 148 62 178 H0 Z"
              fill="#bfe3f2"
            />
            <rect x={172} y={14} width={56} height={38} rx={9} fill="#d9efcf" />
            <path
              d="M98 0 V178 M58 72 H260 M150 0 C142 60 160 118 150 178 M98 136 L260 108"
              stroke="#fff"
              strokeWidth={5}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M222 0 C212 62 234 118 220 178"
              stroke="#fde68a"
              strokeWidth={6}
              fill="none"
            />
            <Pin x={110} y={50} s={0.8} color="#9aa3b2" />
            <Pin x={196} y={140} s={0.8} color="#9aa3b2" />
            <Pin x={232} y={84} s={0.8} color="#9aa3b2" />
            <Pin x={70} y={156} s={0.8} color="#9aa3b2" />
            <circle
              className="fl-ppc-pulse"
              cx={130}
              cy={76}
              r={12}
              fill={ORANGE}
            />
            <Pin x={130} y={98} s={1.3} color={ORANGE} />
          </svg>
          <span
            className="tw:absolute tw:top-[30px] tw:left-1/2 tw:flex tw:-translate-x-1/2 tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:py-1 tw:pr-2.5 tw:pl-1 tw:text-[10.5px] tw:font-semibold tw:whitespace-nowrap tw:[box-shadow:0_6px_14px_-8px_rgba(12,21,38,0.45)]"
            style={inAt(1)}
          >
            <i
              className="tw:rounded-full tw:px-1.5 tw:py-px tw:text-[9px] tw:not-italic tw:text-white"
              style={{ background: ORANGE }}
            >
              Ad
            </i>
            Your Company
          </span>
        </div>
        <div className="tw:relative tw:z-1 tw:-mt-4 tw:flex-1 tw:rounded-t-[22px] tw:bg-white tw:px-4 tw:pt-2 tw:[box-shadow:0_-10px_22px_-14px_rgba(12,21,38,0.35)]">
          <i className="tw:mx-auto tw:block tw:h-1 tw:w-9 tw:rounded-full tw:bg-[#d5dce7]" />
          <span className="tw:mt-2.5 tw:block tw:text-[10px] tw:font-bold">
            Sponsored
          </span>
          <b className="tw:mt-0.5 tw:block tw:text-[15px]">Your Company</b>
          <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
            <span className="tw:flex tw:gap-px">
              {[0, 1, 2, 3, 4].map((n) => (
                <FiStar
                  key={n}
                  className="tw:size-2.5 tw:fill-[#f4b400] tw:text-[#f4b400]"
                />
              ))}
            </span>
            · Pool repair service
          </span>
          <span className="tw:mt-1 tw:block tw:text-[10.5px] tw:text-(--ink-2)">
            <b className="tw:text-[#1f7a3a]">Open</b> · Serves Sarasota County
          </span>
          <span className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[10.5px] tw:font-semibold">
            <span
              className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5 tw:text-white"
              style={{ background: ORANGE }}
            >
              <FiPhone className="tw:size-3" /> Call
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:rounded-full tw:border tw:border-(--line) tw:py-1.5">
              Directions
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:rounded-full tw:border tw:border-(--line) tw:py-1.5">
              Website
            </span>
          </span>
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:z-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:px-3 tw:py-2.5 tw:text-white tw:[box-shadow:var(--lift)]"
          style={{ background: INDIGO, ...run("de-late") }}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/15">
            <FiPhoneIncoming className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Call from your Maps ad</b>
            <span className="tw:text-white/75">Sat 10:12 AM · Venice</span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const LOG: {
  term: string;
  icon: ReactNode;
  lead: string;
  outcome: ReactNode;
}[] = [
  {
    term: "ac repair brandon",
    icon: <FiPhone />,
    lead: "Call · 6 min",
    outcome: <Chip tone="green">Booked</Chip>,
  },
  {
    term: "roof leak repair cape coral",
    icon: <FiFileText />,
    lead: "Form",
    outcome: <Chip tone="blue">Quote sent</Chip>,
  },
  {
    term: "water heater install",
    icon: <FiPhone />,
    lead: "Call · 25 sec",
    outcome: <Chip tone="muted">Not counted</Chip>,
  },
  {
    term: "pool leak detection naples",
    icon: <FiMessageSquare />,
    lead: "Text",
    outcome: (
      <Flip
        n={3}
        from={<Chip tone="amber">New</Chip>}
        to={<Chip tone="green">Booked</Chip>}
      />
    ),
  },
];

/** The lead source log: each lead with the search term behind it and what
    became of it, booked jobs synced back to Google Ads, and the console's
    three numbers. Decorative. */
export function FlPpcDarkUi({
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
          <FiPhoneCall style={{ color: ORANGE }} /> {c.title}
        </b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)_auto] tw:gap-x-2.5 tw:px-1 tw:text-[9.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        <span>Search term</span>
        <span>Lead</span>
        <span className="tw:w-[74px] tw:text-right">Outcome</span>
      </div>
      <ul className="tw:mt-1.5 tw:grid tw:gap-1.5">
        {LOG.map((row, i) => (
          <li
            key={row.term}
            className="tw:grid tw:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)_auto] tw:items-center tw:gap-x-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-2 tw:py-1.5"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate tw:rounded-[8px] tw:bg-(--panel) tw:px-2 tw:py-1 tw:font-mono tw:text-[10.5px]">
              {row.term}
            </span>
            <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-medium">
              <span className="tw:flex-none" style={{ color: ORANGE }}>
                {row.icon}
              </span>
              <span className="tw:truncate">{row.lead}</span>
            </span>
            <span className="tw:flex tw:w-[74px] tw:justify-end">
              {row.outcome}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:px-3 tw:py-2.5"
        style={{ background: "#eef2ff", ...run("de-late") }}
      >
        <span
          className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
          style={{ background: INDIGO }}
        >
          <FiRefreshCw className="fl-ppc-spin tw:size-3.5" />
        </span>
        <span className="tw:text-[12px] tw:font-medium">
          Booked jobs sent back to Google Ads
        </span>
        <Chip tone="ink" className="tw:ml-auto">
          Daily
        </Chip>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-3">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:border-l-[3px] tw:py-0.5 tw:pl-2.5"
            style={{ borderColor: ORANGE }}
          >
            <b
              className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: INDIGO }}
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

const GRADES = ["Poor", "Average", "Good", "Excellent"];
const SEG = ["#fed7aa", "#fb923c", ORANGE, INDIGO];
const grade = (v: number) => (v < 40 ? 0 : v < 60 ? 1 : v < 80 ? 2 : 3);

/** Ad-strength style grades: four segments per row, the starting grade
    marked, the segments up to the goal filling in, and the grade label
    flipping from start to goal. */
export function FlPpcScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <div className="tw:grid tw:grid-cols-4 tw:gap-1 tw:text-[10px] tw:font-semibold tw:text-(--muted)">
        {GRADES.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-4">
        {rows.map((row, ri) => {
          const from = grade(row.before);
          const to = grade(row.after);
          return (
            <li key={row.label}>
              <span className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[13.5px] tw:font-medium">
                {row.label}
                <Flip
                  n={((ri % 3) + 1) as 1 | 2 | 3}
                  from={<Chip tone="muted">{GRADES[from]}</Chip>}
                  to={
                    <Chip tone={to === 3 ? "green" : "blue"}>{GRADES[to]}</Chip>
                  }
                />
              </span>
              <span className="tw:mt-2 tw:grid tw:grid-cols-4 tw:gap-1">
                {GRADES.map((g, i) => (
                  <span
                    key={g}
                    className="tw:relative tw:block tw:h-2.5 tw:rounded-full tw:bg-(--panel)"
                  >
                    {i <= to ? (
                      <i
                        className="tw:absolute tw:inset-0 tw:block tw:rounded-full"
                        style={{
                          background: SEG[i],
                          ...(i > from ? inAt(i + 1) : {}),
                        }}
                      />
                    ) : null}
                    {i === from ? (
                      <i className="tw:absolute tw:top-[calc(100%+3px)] tw:left-1/2 tw:block tw:size-0 tw:-translate-x-1/2 tw:border-x-[5px] tw:border-b-[6px] tw:border-x-transparent tw:border-b-[#b45309]" />
                    ) : null}
                  </span>
                ))}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-5 tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted)">
        <i className="tw:block tw:size-0 tw:border-x-[5px] tw:border-b-[6px] tw:border-x-transparent tw:border-b-[#b45309]" />
        Grade at the first audit · filled = six-month goal
      </p>
    </div>
  );
}
