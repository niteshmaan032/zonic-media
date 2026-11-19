import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiAnchor,
  FiBookOpen,
  FiCalendar,
  FiCheck,
  FiClipboard,
  FiGlobe,
  FiGrid,
  FiMapPin,
  FiMic,
  FiNavigation,
  FiPhone,
  FiPieChart,
  FiRefreshCw,
  FiSearch,
  FiSmartphone,
  FiSmile,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { SiGoogle, SiGooglemaps, SiOpenai } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, Switch, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flFortLauderdale.css";

/* UI for the Fort Lauderdale digital marketing page only (18 Nov 2026);
   none of it appears on another page. Feature panels (a Broward city ×
   service Map Pack grid, an AI answer for a Las Olas search with the
   sources that back each claim, a clipboard checklist for choosing an
   agency), the four process steps (channel grades, a city rollout line,
   weekly switches, booked work by city as a donut), a dark voice-assistant
   phone, a port-style departures board on the dark card and ribbon bars on
   the scorecard. Illustrations: "Your Company", first names, positions and
   relative values only; no prices or client figures. Palette: the page's
   pillars (sunset magenta, Intracoastal sky, palm lime, deep navy). */

const MAGENTA = "#a21caf";
const MAGENTA_SOFT = "#fae8ff";
const SKY = "#0284c7";
const SKY_DARK = "#075985";
const SKY_SOFT = "#e0f2fe";
const LIME = "#65a30d";
const LIME_DARK = "#3f6212";
const LIME_SOFT = "#ecfccb";
const NAVY = "#1e3a8a";
const AMBER = "#fbbf24";

/* min-w-0: the stage is a grid, so a long header could otherwise push the
   card wider than the stage on phones. */
const FCARD = cx(CARD, "tw:min-w-0");

/* ------------------------------------------------------ feature panels */

const MATRIX_COLS = ["AC repair", "AC install", "Leak repair", "Water heater"];

/* Example Map Pack positions per city and service (0 = outside the top
   20), first month → sixth month. Illustration, not client data. */
const MATRIX: { c: string; from: number[]; to: number[] }[] = [
  { c: "Fort Lauderdale", from: [9, 14, 6, 0], to: [2, 4, 1, 6] },
  { c: "Hollywood", from: [16, 0, 11, 0], to: [3, 7, 2, 9] },
  { c: "Plantation", from: [7, 12, 18, 9], to: [1, 3, 5, 2] },
  { c: "Coral Springs", from: [0, 19, 0, 15], to: [6, 2, 8, 3] },
  { c: "Pompano Beach", from: [12, 0, 8, 17], to: [4, 9, 1, 5] },
  { c: "Weston", from: [0, 0, 13, 0], to: [8, 5, 3, 11] },
];

function rankTone(r: number): CSSProperties {
  if (r === 0) return { background: "var(--panel)", color: "var(--muted)" };
  if (r <= 3) return { background: LIME, color: "#fff" };
  if (r <= 10) return { background: SKY_SOFT, color: SKY_DARK };
  return { background: MAGENTA_SOFT, color: MAGENTA };
}

const TILE =
  "tw:grid tw:h-6 tw:w-[38px] tw:place-items-center tw:rounded-[7px] tw:text-[11px] tw:font-semibold tw:max-bssm:w-[32px]";

function RankTile({ r }: { r: number }) {
  return (
    <span className={TILE} style={rankTone(r)}>
      {r ? `#${r}` : "–"}
    </span>
  );
}

/** Map Pack position for each service in six Broward cities, moving from
    the first month's grid to the sixth. */
function BrowardGridUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiGrid />}
        title="Map Pack grid, Broward"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">Month 1</Chip>}
            to={<Chip tone="green">Month 6</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_repeat(4,38px)] tw:items-center tw:gap-x-1.5 tw:gap-y-1.5 tw:max-bssm:grid-cols-[minmax(0,1fr)_repeat(4,32px)] tw:max-bssm:gap-x-1">
        <span className="tw:text-[10px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
          City
        </span>
        {MATRIX_COLS.map((s) => (
          <span
            key={s}
            className="tw:text-center tw:text-[10px]/[1.15] tw:font-semibold tw:text-(--muted)"
          >
            {s}
          </span>
        ))}
        {MATRIX.map((row, i) => (
          <div key={row.c} className="tw:contents">
            <span
              className="tw:flex tw:min-w-0 tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 1)}
            >
              <i
                className="tw:block tw:size-1.5 tw:flex-none tw:rounded-full"
                style={{ background: i % 2 ? SKY : MAGENTA }}
              />
              <span className="tw:truncate">{row.c}</span>
            </span>
            {row.to.map((r, k) => (
              <span key={k} className="tw:grid tw:place-items-center">
                <Flip
                  n={((k % 3) + 1) as 1 | 2 | 3}
                  from={<RankTile r={row.from[k]} />}
                  to={<RankTile r={r} />}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="tw:mt-3.5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1.5 tw:border-t tw:border-(--line) tw:pt-3 tw:text-[11px] tw:text-(--muted)">
        {(
          [
            [LIME, "Top 3"],
            [SKY_SOFT, "4–10"],
            [MAGENTA_SOFT, "11–20"],
            ["var(--panel)", "Not ranked"],
          ] as const
        ).map(([c, t]) => (
          <span key={t} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-[3px]"
              style={{ background: c }}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* The answer's three claims; `hi` underlines them on the navy card. */
const CLAIMS: { k: "a" | "b" | "c"; c: string; hi: string }[] = [
  { k: "a", c: SKY, hi: "#7dd3fc" },
  { k: "b", c: MAGENTA, hi: "#f0abfc" },
  { k: "c", c: LIME, hi: "#bef264" },
];

const BACKERS: {
  icon: ReactNode;
  name: string;
  backs: ("a" | "b" | "c")[];
  /** The claim this source got wrong until we corrected it. */
  fix?: "a" | "b" | "c";
}[] = [
  { icon: <FiGlobe />, name: "Your website", backs: ["a", "b", "c"] },
  {
    icon: <SiGooglemaps />,
    name: "Business Profile",
    backs: ["a", "b", "c"],
  },
  { icon: <FiStar />, name: "Google reviews", backs: ["a", "b"] },
  {
    icon: <FiBookOpen />,
    name: "Legal directory",
    backs: ["a", "b", "c"],
    fix: "c",
  },
];

function Claim({ k, children }: { k: "a" | "b" | "c"; children: ReactNode }) {
  const hi = CLAIMS.find((x) => x.k === k)?.hi;
  return (
    <span
      className="tw:font-semibold"
      style={{ boxShadow: `inset 0 -2px 0 ${hi}` }}
    >
      {children}
    </span>
  );
}

/** One AI answer for a Las Olas search and the four sources behind it;
    each colored pill is a claim that source confirms. The directory's old
    hours get corrected, so every source agrees. */
function LasOlasAnswerUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiZap />}
        tone="ink"
        title="Why the answer picks you"
        right={<Chip tone="blue">Las Olas</Chip>}
      />
      <p className="tw:mt-3.5 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium">
        <FiSearch className="tw:flex-none tw:text-(--muted)" />
        <span className="tw:truncate">family lawyer near Las Olas</span>
      </p>
      <p
        className="tw:mt-2 tw:rounded-[14px] tw:px-3.5 tw:py-3 tw:text-[12px]/[1.6] tw:text-white/90"
        style={{ background: NAVY, ...inAt(1) }}
      >
        <span className="tw:mb-1 tw:flex tw:items-center tw:gap-1.5 tw:text-[10px] tw:font-semibold tw:tracking-[0.08em] tw:text-white/60 tw:uppercase">
          <FiZap /> AI answer
        </span>
        Try <b className="tw:text-white">Your Company</b>, a firm{" "}
        <Claim k="a">two blocks off Las Olas Boulevard</Claim> that{" "}
        <Claim k="b">handles divorce and custody</Claim> and is{" "}
        <Claim k="c">open weekday evenings</Claim>.
      </p>
      <p className="tw:mt-3 tw:text-[10px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        Sources that agree
      </p>
      <ul className="tw:mt-1.5 tw:grid tw:gap-1.5">
        {BACKERS.map((s, i) => (
          <li
            key={s.name}
            className="tw:grid tw:grid-cols-[22px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5"
            style={inAt(i + 2)}
          >
            <span className="tw:grid tw:size-[22px] tw:place-items-center tw:rounded-[7px] tw:bg-white tw:text-[11px] tw:text-(--ink)">
              {s.icon}
            </span>
            <span className="tw:truncate tw:text-[12px] tw:font-medium">
              {s.name}
            </span>
            <span className="tw:flex tw:items-center tw:gap-1">
              {CLAIMS.map((c) => {
                const on = s.backs.includes(c.k);
                const pill = (bg: string) => (
                  <i
                    className="tw:block tw:h-2.5 tw:w-5 tw:rounded-full"
                    style={{ background: bg }}
                  />
                );
                return s.fix === c.k ? (
                  <Flip key={c.k} n={3} from={pill("#f87171")} to={pill(c.c)} />
                ) : (
                  <span key={c.k}>{pill(on ? c.c : "#e2e8f0")}</span>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:border-t tw:border-(--line) tw:pt-3 tw:text-[11px] tw:text-(--muted)">
        <span>Each pill: a claim that source confirms</span>
        <Flip
          n={3}
          from={<Chip tone="amber">Hours conflict</Chip>}
          to={<Chip tone="green">Sources agree</Chip>}
        />
      </div>
    </div>
  );
}

const ASKS: { q: string; a: string }[] = [
  { q: "Who owns the ad account?", a: "You do, from day one" },
  { q: "Is ad spend marked up?", a: "No, 0% markup" },
  { q: "How long is the contract?", a: "Month to month" },
  { q: "What does the report count?", a: "Calls and booked jobs" },
  { q: "How is AI search handled?", a: "Checked every month" },
];

/** A clipboard of the questions to ask any agency, each box ticking as a
    good answer comes back; the ring fills to all five. */
function PartnerChecklistUi() {
  return (
    <div className={cx(FCARD, "tw:relative tw:mt-3 tw:pt-7")}>
      {/* Clipboard clip. */}
      <span
        className="tw:absolute tw:-top-3 tw:left-1/2 tw:grid tw:h-7 tw:w-24 tw:-translate-x-1/2 tw:place-items-center tw:rounded-[9px]"
        style={{ background: NAVY }}
      >
        <i className="tw:block tw:h-2 tw:w-10 tw:rounded-full tw:bg-white/30" />
      </span>
      <div className="tw:flex tw:items-center tw:gap-3">
        <span className="tw:min-w-0">
          <b className="tw:flex tw:items-center tw:gap-2 tw:text-[14.5px] tw:font-medium">
            <FiClipboard style={{ color: MAGENTA }} /> Agency checklist
          </b>
          <span className="tw:mt-0.5 tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
            Fort Lauderdale · questions for the first call
          </span>
        </span>
        <span className="tw:relative tw:ml-auto tw:grid tw:size-11 tw:flex-none tw:place-items-center">
          <svg
            viewBox="0 0 40 40"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="#eef2f7"
              strokeWidth="4"
            />
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke={LIME}
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              transform="rotate(-90 20 20)"
              style={{ "--g": 0, ...run("de-gauge") } as CSSProperties}
            />
          </svg>
          <b className="tw:text-[11px]">5/5</b>
        </span>
      </div>
      <ol className="tw:relative tw:mt-3">
        {/* Legal-pad margin line. */}
        <span
          className="tw:absolute tw:inset-y-0 tw:left-[30px] tw:block tw:w-px"
          style={{ background: "#f5d0fe" }}
        />
        {ASKS.map((a, i) => (
          <li
            key={a.q}
            className="tw:grid tw:grid-cols-[20px_minmax(0,1fr)] tw:items-start tw:gap-x-[22px] tw:py-2"
            style={{
              borderBottom: i < ASKS.length - 1 ? "1px dashed #e2e8f0" : 0,
            }}
          >
            <i
              className="tw:mt-0.5 tw:grid tw:size-5 tw:place-items-center tw:rounded-[6px] tw:text-white"
              style={run(`de-dot-${i + 1}`)}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3.5]" />
            </i>
            <span className="tw:min-w-0">
              <span className="tw:block tw:text-[12.5px]/[1.3] tw:font-medium">
                {a.q}
              </span>
              <span
                className="tw:mt-0.5 tw:block tw:text-[11.5px] tw:font-semibold"
                style={{ color: MAGENTA, ...inAt(i + 1) }}
              >
                → {a.a}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const GRADES: {
  icon: ReactNode;
  c: string;
  n: string;
  pips: number;
  g: string;
  tone: "red" | "amber";
}[] = [
  {
    icon: <SiGooglemaps />,
    c: "#34a853",
    n: "Maps profile",
    pips: 2,
    g: "D",
    tone: "red",
  },
  {
    icon: <SiGoogle />,
    c: "#4285f4",
    n: "Ads account",
    pips: 3,
    g: "C",
    tone: "amber",
  },
  {
    icon: <SiOpenai />,
    c: "#10a37f",
    n: "AI mentions",
    pips: 1,
    g: "F",
    tone: "red",
  },
  {
    icon: <FiSmartphone />,
    c: NAVY,
    n: "Mobile site",
    pips: 3,
    g: "C",
    tone: "amber",
  },
];

const STOPS: { c: string; what: string }[] = [
  { c: "Las Olas", what: "Profile" },
  { c: "Hollywood", what: "Ads" },
  { c: "Plantation", what: "Pages" },
  { c: "Coral Springs", what: "Posts" },
];

const SWITCHES = [
  "Negative keywords added",
  "Weston budget raised",
  "Boat-show post scheduled",
  "New reviews answered",
];

/* Relative share of booked work by city (sums to 100), no counts. */
const DONUT: [string, number, string][] = [
  ["Fort Lauderdale", 36, MAGENTA],
  ["Plantation", 26, SKY],
  ["Hollywood", 22, LIME],
  ["Weston", 16, NAVY],
];
/* Each segment starts where the last ended (12 o'clock = offset 25). */
const DONUT_OFF = DONUT.map(
  (_, i) => 25 - DONUT.slice(0, i).reduce((sum, d) => sum + d[1], 0),
);

/** Fort Lauderdale process UIs: channel grades, the rollout line, weekly
    switches and booked work by city. */
function fortLauderdaleStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="ftl-grades">
      <UiHead
        icon={<FiActivity />}
        title="Channel grades"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Grading…</Chip>}
            to={<Chip tone="red">Weak spots found</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {GRADES.map((r, i) => (
          <li
            key={r.n}
            className={cx(
              "tw:grid tw:grid-cols-[18px_minmax(0,1fr)_auto_22px] tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium",
              // The frame crops its bottom edge; phones show three rows.
              i === 3 && "tw:max-bssm:hidden",
            )}
          >
            <span className="tw:text-[13px]" style={{ color: r.c }}>
              {r.icon}
            </span>
            <span className="tw:truncate">{r.n}</span>
            <span className="tw:flex tw:gap-[3px]">
              {[0, 1, 2, 3, 4].map((p) => (
                <i
                  key={p}
                  className="tw:relative tw:block tw:h-2 tw:w-[7px] tw:overflow-hidden tw:rounded-[2px] tw:bg-[#e2e8f0]"
                >
                  {p < r.pips ? (
                    <i
                      className="tw:absolute tw:inset-0 tw:block"
                      style={{ background: MAGENTA, ...inAt(p + 1) }}
                    />
                  ) : null}
                </i>
              ))}
            </span>
            <Chip tone={r.tone} className="tw:justify-center tw:px-1.5">
              {r.g}
            </Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ftl-route">
      <UiHead
        icon={<FiNavigation />}
        tone="gold"
        title="City rollout"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:relative tw:mt-1 tw:h-[104px]">
        <span className="tw:absolute tw:top-[37px] tw:right-[12%] tw:left-[12%] tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
          <i
            className="tw:block tw:h-full tw:rounded-full"
            style={
              {
                "--w": "100%",
                width: "100%",
                background: `linear-gradient(90deg, ${MAGENTA}, ${SKY})`,
                ...run("de-fill"),
              } as CSSProperties
            }
          />
        </span>
        <ol className="tw:absolute tw:inset-0 tw:grid tw:grid-cols-4">
          {STOPS.map((s, i) => (
            <li
              key={s.c}
              className="tw:flex tw:flex-col tw:items-center tw:text-center"
            >
              <span
                className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold"
                style={{
                  background: SKY_SOFT,
                  color: SKY_DARK,
                  ...inAt(i + 1),
                }}
              >
                {s.what}
              </span>
              <i
                className="tw:mt-2 tw:block tw:size-[18px] tw:rounded-full tw:border-[3px] tw:bg-white"
                style={{
                  borderColor: "#fff",
                  boxShadow: `0 0 0 2px ${MAGENTA}`,
                  ...run(TICK_AT[i]),
                }}
              />
              <span className="tw:mt-2 tw:block tw:px-0.5 tw:text-[11px]/[1.2] tw:font-medium">
                {s.c}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {/* The frame crops its bottom edge; phones skip the note. */}
      <div
        className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35] tw:max-bssm:hidden"
        style={{ background: MAGENTA_SOFT, ...run("de-late") }}
      >
        <FiMapPin className="tw:flex-none" style={{ color: MAGENTA }} />
        <span>
          <b>Next stop:</b> Pompano Beach and Weston
        </span>
      </div>
    </Slot>,

    <Slot key="ftl-week">
      <UiHead
        icon={<FiRefreshCw />}
        tone="green"
        title="This week’s switches"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {SWITCHES.map((t, i) => (
          <li
            key={t}
            className={cx(
              "tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium",
              i === 3 && "tw:max-bssm:hidden",
            )}
          >
            <span className="tw:truncate">{t}</span>
            <Switch at={0.6 + i * 0.9} />
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ftl-month">
      <UiHead
        icon={<FiPieChart />}
        title="Booked work by city"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[78px_minmax(0,1fr)] tw:items-center tw:gap-4">
        <svg
          viewBox="0 0 42 42"
          className="tw:size-[78px]"
          style={run("de-area")}
        >
          {DONUT.map(([n, v, c], i) => (
            <circle
              key={n}
              cx="21"
              cy="21"
              r="15.915"
              fill="none"
              stroke={c}
              strokeWidth="7"
              strokeDasharray={`${v - 1} ${101 - v}`}
              strokeDashoffset={DONUT_OFF[i]}
            />
          ))}
        </svg>
        <ul className="tw:grid tw:gap-1 tw:text-[11.5px] tw:font-medium">
          {DONUT.map(([n, , c], i) => (
            <li
              key={n}
              className="tw:flex tw:min-w-0 tw:items-center tw:gap-1.5"
              style={inAt(i + 1)}
            >
              <i
                className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
                style={{ background: c }}
              />
              <span className="tw:truncate">{n}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35]"
        style={{ background: LIME_SOFT, ...run("de-late") }}
      >
        <FiTrendingUp className="tw:flex-none" style={{ color: LIME_DARK }} />
        <span>
          <b>Next month:</b> Sunrise added to the plan
        </span>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const WAVE_BARS = [0.45, 0.7, 1, 0.8, 0.55, 0.9, 0.65, 1, 0.6, 0.4, 0.75];

/** A voice assistant on a dark screen answering "best dentist near Las
    Olas" with your practice, the sources it relied on and a booking.
    Decorative (the frame is aria-hidden). */
function AssistantPhone() {
  return (
    <PhoneFrame>
      <div
        className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:px-3.5 tw:pt-[44px] tw:text-white"
        style={{
          background: `radial-gradient(120% 55% at 50% 0%, rgba(162,28,175,0.55) 0%, transparent 62%), linear-gradient(180deg, #0b1226 0%, ${NAVY} 100%)`,
        }}
      >
        <span className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-white/65 tw:uppercase">
          <FiZap /> Voice assistant
        </span>
        <p
          className="tw:mt-3 tw:text-center tw:text-[17px]/[1.25] tw:font-semibold tw:tracking-[-0.01em]"
          style={inAt(1)}
        >
          “Best dentist near Las Olas?”
        </p>
        <span className="ftl-wave tw:mx-auto tw:mt-2 tw:flex tw:h-6 tw:items-center tw:gap-[3px]">
          {WAVE_BARS.map((h, i) => (
            <i
              key={i}
              className="tw:block tw:w-[3px] tw:rounded-full"
              style={{
                height: `${Math.round(h * 22)}px`,
                background: i % 2 ? "#f0abfc" : "#7dd3fc",
              }}
            />
          ))}
        </span>
        <div
          className="tw:mt-2.5 tw:rounded-[16px] tw:border tw:border-white/15 tw:bg-white/10 tw:p-3"
          style={inAt(2)}
        >
          <p className="tw:text-[11px]/[1.4] tw:text-white/80">
            A highly rated practice a short walk from Las Olas Boulevard:
          </p>
          <div className="tw:mt-2.5 tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-[11px] tw:text-[17px]"
              style={{ background: MAGENTA }}
            >
              <FiSmile />
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[13px]">
                Your Company Dental
              </b>
              <span className="tw:text-[10.5px] tw:text-[#fde68a]">★★★★★</span>
              <span className="tw:text-[10.5px] tw:text-white/70">
                {" "}
                · 0.3 mi
              </span>
            </span>
          </div>
          <span className="tw:mt-2.5 tw:flex tw:gap-1.5 tw:text-[10px] tw:font-semibold tw:whitespace-nowrap">
            <span className="tw:rounded-full tw:bg-white/15 tw:px-2 tw:py-0.5">
              New patients
            </span>
            <span className="tw:rounded-full tw:bg-white/15 tw:px-2 tw:py-0.5">
              Open till 7 PM
            </span>
          </span>
        </div>
        <div className="tw:mt-2.5" style={inAt(3)}>
          <span className="tw:block tw:text-[10px] tw:text-white/60">
            Based on these sources:
          </span>
          <span className="tw:mt-1 tw:flex tw:gap-1 tw:text-[10px] tw:font-semibold tw:whitespace-nowrap tw:text-white/90">
            {(
              [
                [<SiGooglemaps key="m" />, "Profile"],
                [<FiGlobe key="w" />, "Website"],
                [<FiStar key="r" />, "Reviews"],
              ] as const
            ).map(([icon, t]) => (
              <span
                key={t}
                className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:border tw:border-white/20 tw:px-1.5 tw:py-0.5"
              >
                {icon} {t}
              </span>
            ))}
          </span>
        </div>
        <span
          className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[11.5px] tw:font-semibold"
          style={inAt(4)}
        >
          <span
            className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:py-2"
            style={{ color: NAVY }}
          >
            <FiPhone className="tw:size-3.5" /> Call
          </span>
          <span
            className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2"
            style={{ background: MAGENTA }}
          >
            <FiCalendar className="tw:size-3.5" /> Book a visit
          </span>
        </span>
        {/* The follow-up hint gives way to the booking toast (same timing
            as Flip n=3; full width, so stacked here instead). */}
        <div className="tw:mt-auto tw:mb-3.5 tw:grid">
          <span
            className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:border tw:border-white/20 tw:bg-white/10 tw:px-3 tw:py-2.5 tw:text-[11px] tw:text-white/75 tw:opacity-0"
            style={run("de-swap-a3")}
          >
            <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/15 tw:text-[15px] tw:text-white">
              <FiMic />
            </span>
            Ask a follow-up…
          </span>
          <span
            className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:text-(--ink) tw:[box-shadow:var(--lift)]"
            style={run("de-swap-b3")}
          >
            <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
              <FiCheck className="tw:size-4 tw:[stroke-width:3]" />
            </span>
            <span className="tw:text-[11px]/[1.3]">
              <b className="tw:block">Visit booked by voice</b>
              Thu 5:30 PM · Las Olas
            </span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const BOARD: {
  wk: string;
  city: string;
  camp: string;
  to: "Live" | "Boarding" | "On time";
  n: 1 | 2 | 3;
}[] = [
  { wk: "W1", city: "Fort Lauderdale", camp: "Map Pack", to: "Live", n: 1 },
  { wk: "W1", city: "Hollywood", camp: "Google Ads", to: "Live", n: 1 },
  { wk: "W2", city: "Plantation", camp: "City page", to: "Boarding", n: 2 },
  { wk: "W2", city: "Coral Springs", camp: "Reviews", to: "Boarding", n: 2 },
  { wk: "W3", city: "Pompano Beach", camp: "AI answers", to: "On time", n: 3 },
  { wk: "W4", city: "Weston", camp: "Local ads", to: "On time", n: 3 },
];

const STATUS_COLOR = {
  Live: "#4ade80",
  Boarding: AMBER,
  "On time": "#7dd3fc",
};

/* Split-flap tile: two halves with a hairline seam. */
const FLAP: CSSProperties = {
  background: "linear-gradient(180deg, #1c2335 0 50%, #151b2a 50% 100%)",
  boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
};
const CELL =
  "tw:block tw:truncate tw:rounded-[4px] tw:px-1.5 tw:py-[5px] tw:font-mono tw:text-[11px] tw:leading-none tw:tracking-[0.04em] tw:uppercase tw:max-bssm:text-[10px]";
const BOARD_COLS =
  "tw:grid tw:grid-cols-[30px_minmax(0,1.25fr)_minmax(0,1fr)_76px] tw:items-center tw:gap-1.5 tw:max-bssm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_68px] tw:max-bssm:gap-1";

/** A port-style departures board: Broward cities, the campaign leaving
    for each and its status flapping from "Scheduled" to live, plus the
    console's three numbers. Decorative. */
function DeparturesBoardUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  return (
    <div
      className="tw:w-full tw:max-w-[500px] tw:rounded-[20px] tw:border tw:border-white/10 tw:p-5 tw:text-left tw:text-white tw:[box-shadow:0_30px_60px_-30px_rgba(0,0,0,0.7)] tw:max-bssm:p-3.5"
      style={{ background: "#0a0f1c" }}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b
          className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:font-mono tw:text-[13px] tw:tracking-[0.08em] tw:uppercase"
          style={{ color: AMBER }}
        >
          <FiAnchor className="tw:flex-none" />
          <span className="tw:truncate">{c.title}</span>
        </b>
        <Chip tone="amber">{c.tag}</Chip>
      </div>
      <div
        className={cx(
          BOARD_COLS,
          "tw:mt-4 tw:font-mono tw:text-[9.5px] tw:tracking-[0.12em] tw:text-white/45 tw:uppercase",
        )}
      >
        <span className="tw:max-bssm:hidden">Wk</span>
        <span>City</span>
        <span>Campaign</span>
        <span>Status</span>
      </div>
      <ul className="tw:mt-1.5 tw:grid tw:gap-1.5">
        {BOARD.map((r, i) => (
          <li key={r.city} className={BOARD_COLS} style={inAt(i + 1)}>
            <span
              className={cx(CELL, "tw:text-center tw:max-bssm:hidden")}
              style={{ ...FLAP, color: "rgba(255,255,255,0.6)" }}
            >
              {r.wk}
            </span>
            <span className={CELL} style={{ ...FLAP, color: AMBER }}>
              {r.city}
            </span>
            <span className={CELL} style={{ ...FLAP, color: "#e2e8f0" }}>
              {r.camp}
            </span>
            <span className={cx(`ftl-flap-${r.n}`, "tw:block")}>
              <Flip
                n={r.n}
                from={
                  <span
                    className={cx(CELL, "tw:w-[76px] tw:max-bssm:w-[68px]")}
                    style={{ ...FLAP, color: "rgba(255,255,255,0.5)" }}
                  >
                    Scheduled
                  </span>
                }
                to={
                  <span
                    className={cx(
                      CELL,
                      "tw:w-[76px] tw:max-bssm:w-[68px]",
                      r.to === "Boarding" && "ftl-blink",
                    )}
                    style={{ ...FLAP, color: STATUS_COLOR[r.to] }}
                  >
                    {r.to}
                  </span>
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:border-t tw:border-white/10 tw:pt-3.5">
        {c.metrics.map((m, i) => (
          <li
            key={m.label}
            className="tw:px-3 tw:first:pl-0"
            style={
              i > 0
                ? { borderLeft: "1px solid rgba(255,255,255,0.1)" }
                : undefined
            }
          >
            <b
              className="tw:block tw:font-mono tw:text-[17px] tw:leading-none"
              style={{ color: AMBER }}
            >
              {m.strong}
            </b>
            <span className="tw:mt-1.5 tw:block tw:text-[10.5px]/[1.3] tw:text-white/60">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

/* Swallowtail ribbon end. */
const TAIL = "polygon(0 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%)";

/** Before → after as ribbons: the full ribbon reaches the six-month aim,
    the pale start section marks today's level and a fold sits under the
    ribbon's start. */
function RibbonScore({ rows }: { rows: DelawareData["compare"]["scoreRows"] }) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-5">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-3 tw:text-[13.5px] tw:font-medium">
              {row.label}
              <span className="tw:text-[12px] tw:text-(--muted)">
                {row.before} → <b className="tw:text-(--ink)">{row.after}</b>
              </span>
            </span>
            <span className="tw:relative tw:mt-2 tw:block tw:h-7">
              <span className="tw:absolute tw:inset-x-0 tw:top-1/2 tw:block tw:h-px tw:bg-(--line)" />
              <span
                className="tw:absolute tw:inset-y-0 tw:left-0 tw:block"
                style={
                  {
                    "--w": `${row.after}%`,
                    width: `${row.after}%`,
                    ...run("de-fill"),
                  } as CSSProperties
                }
              >
                <span
                  className="tw:absolute tw:inset-0 tw:block"
                  style={{
                    clipPath: TAIL,
                    background: `linear-gradient(90deg, ${MAGENTA}, ${NAVY})`,
                  }}
                />
                <span
                  className="tw:absolute tw:inset-y-0 tw:left-0 tw:block"
                  style={{
                    width: `${Math.round((row.before / row.after) * 100)}%`,
                    background: "rgba(255,255,255,0.6)",
                  }}
                />
                <b className="tw:absolute tw:top-1/2 tw:right-4 tw:-translate-y-1/2 tw:text-[11.5px] tw:text-white">
                  {row.after}
                </b>
              </span>
              <i
                className="tw:absolute tw:top-full tw:left-0 tw:block tw:size-0"
                style={{
                  borderTop: `5px solid ${NAVY}`,
                  borderLeft: "6px solid transparent",
                }}
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: "#e9b5ef" }}
          />
          Today
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{
              background: `linear-gradient(90deg, ${MAGENTA}, ${NAVY})`,
            }}
          />
          Aim after six months
        </span>
      </p>
    </div>
  );
}

export const fortLauderdaleUi: FlCityUi = {
  Feature1: BrowardGridUi,
  Feature2: LasOlasAnswerUi,
  Feature3: PartnerChecklistUi,
  Phone: AssistantPhone,
  DarkUi: DeparturesBoardUi,
  Score: RibbonScore,
  stepUis: fortLauderdaleStepUis,
};
