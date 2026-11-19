import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiBarChart2,
  FiCheck,
  FiClock,
  FiCpu,
  FiCrosshair,
  FiMap,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiSearch,
  FiStar,
  FiX,
} from "react-icons/fi";
import {
  SiGoogle,
  SiGooglegemini,
  SiGooglemaps,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, Line, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Fill, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flSeo.css";

/* UI for the Florida local SEO page only (18 Nov 2026); none of it appears
   on another page. Feature panels (a numbered Map Pack rank grid over a
   Gulf-coast map, the Business Profile through storm and snowbird season,
   the sources behind an AI answer), the four process steps (NAP audit
   matrix, service-area set-up, reviews by town, terms by position), the
   Google Maps phone, the regional rank tracker on the dark card and the
   waffle scorecard. Illustrations: "Your Company", example positions only,
   no prices or client figures. Palette: the page's pillars (palm green,
   sand, shallow-water aqua, deep-gulf blue). */

const GREEN = "#15803d";
const GULF = "#0c4a6e";
const AQUA = "#cffafe";
const SAND = "#fde68a";

/* ------------------------------------------------------ feature panels */

const GRID_COLS = 7;
const GRID_ROWS = 5;
const MID_X = 3;
const MID_Y = 2;
/* Example positions by walking distance from the pin (index = steps). */
const BEFORE_AT = [0, 4, 7, 11, 15, 19];
const AFTER_AT = [0, 1, 1, 2, 3, 5];

const rankBg = (r: number) =>
  r <= 3 ? GREEN : r <= 10 ? "#d97706" : r < 20 ? "#dc2626" : "#94a3b8";
const rankLabel = (r: number) => (r >= 20 ? "20+" : String(r));

const GRID = Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => {
  const x = i % GRID_COLS;
  const y = Math.floor(i / GRID_COLS);
  const d = Math.abs(x - MID_X) + Math.abs(y - MID_Y);
  return {
    pin: d === 0,
    before: BEFORE_AT[d] + ((x + y) % 2),
    after: AFTER_AT[d],
  };
});
const avg = (k: "before" | "after") => {
  const cells = GRID.filter((c) => !c.pin);
  return (cells.reduce((s, c) => s + c[k], 0) / cells.length).toFixed(1);
};

const METRO_TABS = ["Tampa Bay", "Orlando", "Miami-Dade"];

/** Map Pack rank grid: numbered positions laid over a Gulf-coast street
    map around the pin; a sweep runs across, then each point flips from its
    starting rank to its current one. */
export function FlSeoFeature1() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCrosshair />}
        tone="green"
        title="Map Pack rank grid"
        right={<Chip tone="muted">Example scan</Chip>}
      />
      <ul className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
        {METRO_TABS.map((m, i) => (
          <li
            key={m}
            className={cx(
              "tw:rounded-full tw:px-3 tw:py-1",
              i === 0 ? "tw:text-white" : "tw:bg-(--panel) tw:text-(--muted)",
            )}
            style={i === 0 ? { background: GULF } : undefined}
          >
            {m}
          </li>
        ))}
      </ul>
      <div className="tw:relative tw:mt-3 tw:overflow-hidden tw:rounded-[14px] tw:bg-[#f5f2e8] tw:p-3">
        <svg
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:size-full"
        >
          <path
            d="M0 0 H15 C11 10 17 18 12 28 C8 37 14 46 10 60 H0 Z"
            fill={AQUA}
          />
          <path
            d="M15 0 C11 10 17 18 12 28 C8 37 14 46 10 60"
            fill="none"
            stroke="#a5f3fc"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          {[
            "M14 20 H100",
            "M12 42 H100",
            "M38 0 V60",
            "M66 0 C64 20 70 38 68 60",
          ].map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <rect x="74" y="4" width="16" height="11" rx="2" fill="#dcfce7" />
        </svg>
        <span className="fls-scan" />
        <div className="tw:relative tw:grid tw:grid-cols-7 tw:justify-items-center tw:gap-y-2">
          {GRID.map((c, i) =>
            c.pin ? (
              <span
                key={i}
                className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[13px] tw:text-white tw:ring-3 tw:ring-white"
              >
                <FiMapPin />
              </span>
            ) : (
              <span
                key={i}
                className="tw:grid tw:size-[30px] tw:text-[10.5px] tw:font-bold tw:text-white"
              >
                <i
                  className="tw:col-start-1 tw:row-start-1 tw:grid tw:place-items-center tw:rounded-full tw:not-italic tw:opacity-0"
                  style={{ background: rankBg(c.before), ...run("de-swap-a2") }}
                >
                  {rankLabel(c.before)}
                </i>
                <i
                  className="tw:col-start-1 tw:row-start-1 tw:grid tw:place-items-center tw:rounded-full tw:not-italic"
                  style={{ background: rankBg(c.after), ...run("de-swap-b2") }}
                >
                  {rankLabel(c.after)}
                </i>
              </span>
            ),
          )}
        </div>
      </div>
      <div className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-2">
        <span className="tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1 tw:text-[11px] tw:text-(--muted)">
          {[
            [GREEN, "1–3"],
            ["#d97706", "4–10"],
            ["#dc2626", "11+"],
          ].map(([bg, t]) => (
            <span key={t} className="tw:flex tw:items-center tw:gap-1.5">
              <i
                className="tw:block tw:size-2.5 tw:rounded-full"
                style={{ background: bg }}
              />
              {t}
            </span>
          ))}
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
          Average position
          <Flip
            n={2}
            from={<Chip tone="red">{avg("before")}</Chip>}
            to={<Chip tone="green">{avg("after")}</Chip>}
          />
        </span>
      </div>
    </div>
  );
}

const PROFILE_YEAR: {
  when: string;
  what: string;
  chip: string;
  dot: string;
  tone: "green" | "blue" | "amber" | "red";
}[] = [
  {
    when: "Jun 1",
    what: "Hurricane-prep post with your emergency line",
    chip: "Posted",
    dot: "#0891b2",
    tone: "blue",
  },
  {
    when: "Storm named",
    what: "Special hours set: closed until it passes",
    chip: "Updated",
    dot: "#dc2626",
    tone: "red",
  },
  {
    when: "Day after",
    what: "Reopening post and storm-repair service added",
    chip: "Live",
    dot: GREEN,
    tone: "green",
  },
  {
    when: "Oct 15",
    what: "Winter hours: Saturdays added for seasonal residents",
    chip: "Scheduled",
    dot: "#d97706",
    tone: "amber",
  },
];

/** A Business Profile through Florida's year: storm closure, reopening
    and winter hours as a timeline, the listing status flipping back to
    open. */
export function FlSeoFeature2() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiClock />}
        tone="gold"
        title="Business Profile through the year"
      />
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
        <span
          className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
          style={{ background: GREEN }}
        >
          YC
        </span>
        <span className="tw:min-w-0">
          <b className="tw:block tw:text-[13px]">Your Company</b>
          <span className="tw:grid tw:text-[11.5px] tw:font-semibold">
            <span
              className="tw:col-start-1 tw:row-start-1 tw:text-[#b8352a] tw:opacity-0"
              style={run("de-swap-a3")}
            >
              Closed today · storm closure
            </span>
            <span
              className="tw:col-start-1 tw:row-start-1 tw:text-[#1f7a3a]"
              style={run("de-swap-b3")}
            >
              Open · winter hours until 6 PM
            </span>
          </span>
        </span>
        <FiStar
          className="tw:ml-auto tw:size-4 tw:flex-none tw:fill-[#f4b400] tw:text-[#f4b400]"
          aria-hidden="true"
        />
      </div>
      <ol className="tw:relative tw:mt-3 tw:grid tw:gap-2 tw:pl-5">
        <i className="tw:absolute tw:top-3 tw:bottom-3 tw:left-[6px] tw:block tw:w-0.5 tw:rounded-full tw:bg-(--line)" />
        {PROFILE_YEAR.map((e, i) => (
          <li
            key={e.when}
            className="tw:relative tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-2"
            style={inAt(i + 1)}
          >
            <i
              className="tw:absolute tw:top-1/2 tw:-left-[19px] tw:block tw:size-3 tw:-translate-y-1/2 tw:rounded-full tw:ring-3 tw:ring-white"
              style={{ background: e.dot }}
            />
            <span className="tw:min-w-0">
              <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
                {e.when}
              </span>
              <span className="tw:block tw:text-[12px]/[1.35] tw:font-medium">
                {e.what}
              </span>
            </span>
            <Chip tone={e.tone} className="tw:ml-auto">
              {e.chip}
            </Chip>
          </li>
        ))}
      </ol>
    </div>
  );
}

const ENGINES: { icon: ReactNode; name: string; color: string }[] = [
  { icon: <SiOpenai />, name: "ChatGPT", color: "#10a37f" },
  { icon: <SiGooglegemini />, name: "Gemini", color: "#7b61ff" },
  { icon: <SiGoogle />, name: "AI Overviews", color: "#4285f4" },
  { icon: <SiPerplexity />, name: "Perplexity", color: "#20808d" },
];

const SOURCES: { n: number; name: string; fixed?: boolean }[] = [
  { n: 1, name: "Google reviews" },
  { n: 2, name: "yourcompany.com/pool-repair" },
  { n: 3, name: "Local directory listing", fixed: true },
];

/** Citation number: raised in the answer text, a plain badge in the list. */
const Cite = ({ n, badge }: { n: number; badge?: boolean }) =>
  badge ? (
    <span
      className="tw:grid tw:size-[18px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[10px] tw:font-bold tw:text-white"
      style={{ background: GULF }}
    >
      {n}
    </span>
  ) : (
    <sup
      className="tw:ml-0.5 tw:inline-grid tw:size-[14px] tw:place-items-center tw:rounded-full tw:align-[0.45em] tw:text-[8.5px] tw:font-bold tw:text-white"
      style={{ background: GULF, top: 0 }}
    >
      {n}
    </sup>
  );

/** One AI answer with numbered citations and the three sources behind
    it; the directory with a stale phone number gets corrected. */
export function FlSeoFeature3() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCpu />}
        tone="green"
        title="Where the AI answer came from"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-3 tw:flex tw:items-center tw:gap-1.5">
        {ENGINES.map((e, i) =>
          i === 0 ? (
            <li
              key={e.name}
              className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--ink) tw:px-3 tw:py-1 tw:text-[11.5px] tw:font-semibold tw:text-white"
            >
              {e.icon} {e.name}
            </li>
          ) : (
            <li
              key={e.name}
              className="tw:grid tw:size-[26px] tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[12px]"
              style={{ color: e.color }}
            >
              {e.icon}
            </li>
          ),
        )}
      </ul>
      <p
        className="tw:mt-3 tw:ml-auto tw:w-fit tw:max-w-[88%] tw:rounded-[14px] tw:rounded-br-[4px] tw:px-3 tw:py-2 tw:text-[12px]/[1.4] tw:text-white"
        style={{ background: GULF, ...inAt(1) }}
      >
        Who’s good for pool repair in Naples?
      </p>
      <p
        className="tw:mt-2 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12px]/[1.55] tw:text-(--text)"
        style={inAt(2)}
      >
        <b className="tw:text-(--ink)">Your Company</b> gets strong marks for
        pool repair around Naples. Reviewers mention same-week visits
        <Cite n={1} />, and it covers all of Collier County
        <Cite n={2} />
        <Cite n={3} />.
      </p>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {SOURCES.map((s, i) => (
          <li
            key={s.n}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 3)}
          >
            <Cite n={s.n} badge />
            <span className="tw:min-w-0 tw:truncate">{s.name}</span>
            <span className="tw:ml-auto">
              {s.fixed ? (
                <Flip
                  n={3}
                  from={<Chip tone="red">Old phone</Chip>}
                  to={<Chip tone="green">Corrected</Chip>}
                />
              ) : (
                <Chip tone="green">Details match</Chip>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

type Mark = 0 | 1;
const NAP_ROWS: [string, Mark, Mark, Mark][] = [
  ["Google", 1, 1, 1],
  ["Apple Maps", 1, 0, 1],
  ["Bing Places", 1, 1, 0],
  ["Yelp", 0, 1, 0],
];
const NAP_COLS =
  "tw:grid tw:grid-cols-[minmax(0,1fr)_repeat(3,24px)] tw:items-center tw:gap-x-2";

const SERVICE_AREAS = [
  "Naples",
  "Bonita Springs",
  "Estero",
  "Fort Myers",
  "Cape Coral",
  "Marco Island",
];

const TOWN_REVIEWS: [string, number][] = [
  ["Sarasota", 4],
  ["Bradenton", 3],
  ["Venice", 2],
  ["Lakewood Ranch", 1],
];

const POSITION_MONTHS: { m: string; top: number; mid: number }[] = [
  { m: "Jul", top: 10, mid: 26 },
  { m: "Aug", top: 22, mid: 34 },
  { m: "Sep", top: 36, mid: 36 },
  { m: "Oct", top: 54, mid: 30 },
];

/** Florida local SEO process UIs. */
export function flSeoStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  const misses = NAP_ROWS.reduce((n, [, a, b, c]) => n + (3 - a - b - c), 0);
  return [
    <Slot key="fls-nap">
      <UiHead
        icon={<FiSearch />}
        title="Listing NAP check"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">{misses} to fix</Chip>}
          />
        }
      />
      <div
        className={cx(
          NAP_COLS,
          "tw:text-[10.5px] tw:font-semibold tw:text-(--muted)",
        )}
      >
        <span>Directory</span>
        {["N", "A", "P"].map((l) => (
          <span key={l} className="tw:text-center">
            {l}
          </span>
        ))}
      </div>
      <ul className="tw:grid tw:gap-1.5">
        {NAP_ROWS.map(([name, ...marks], i) => (
          <li
            key={name}
            className={cx(
              NAP_COLS,
              "tw:rounded-[10px] tw:bg-(--panel) tw:py-1 tw:pr-1.5 tw:pl-3 tw:text-[12px] tw:font-medium",
            )}
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{name}</span>
            {marks.map((ok, j) => (
              <i
                key={j}
                className={cx(
                  "tw:grid tw:size-6 tw:place-items-center tw:rounded-[7px] tw:text-[12px] tw:not-italic",
                  ok
                    ? "tw:bg-(--green-soft) tw:text-[#1f7a3a]"
                    : "tw:bg-[#fde4e1] tw:text-[#b8352a]",
                )}
              >
                {ok ? (
                  <FiCheck className="tw:[stroke-width:3]" />
                ) : (
                  <FiX className="tw:[stroke-width:3]" />
                )}
              </i>
            ))}
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="fls-areas">
      <UiHead
        icon={<FiMap />}
        tone="gold"
        title="Service areas"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5">
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:text-(--muted)">
          <FiSearch /> Add the towns you serve
        </span>
        <ul className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1.5">
          {SERVICE_AREAS.map((a, i) => (
            <li
              key={a}
              className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-semibold"
              style={{ background: AQUA, color: GULF, ...inAt(i + 1) }}
            >
              <FiMapPin className="tw:size-3" /> {a}
            </li>
          ))}
        </ul>
      </div>
      <div className="tw:flex tw:items-center tw:gap-2.5 tw:text-[11.5px] tw:font-semibold">
        <span className="tw:whitespace-nowrap">
          {SERVICE_AREAS.length} of 20 areas
        </span>
        <Fill
          w={(SERVICE_AREAS.length / 20) * 100}
          color={GREEN}
          className="tw:flex-1"
        />
      </div>
    </Slot>,

    <Slot key="fls-reviews">
      <UiHead
        icon={<FiStar />}
        tone="green"
        title="New reviews by town"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {TOWN_REVIEWS.map(([town, n], i) => (
          <li
            key={town}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:min-w-0 tw:flex-1 tw:truncate">{town}</span>
            <span className="tw:flex tw:gap-px tw:max-bssm:hidden">
              {[0, 1, 2, 3, 4].map((s) => (
                <FiStar
                  key={s}
                  className="tw:size-3 tw:fill-[#f4b400] tw:text-[#f4b400]"
                />
              ))}
            </span>
            <Chip tone="green">+{n}</Chip>
            <i
              className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
              style={{ background: "var(--green)", ...run(TICK_AT[i]) }}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
            </i>
          </li>
        ))}
      </ul>
      <p className="tw:text-[10.5px] tw:text-(--muted)">
        Tick = owner reply posted
      </p>
    </Slot>,

    <Slot key="fls-positions">
      <UiHead
        icon={<FiBarChart2 />}
        title="Terms by position"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-end tw:gap-4">
        <div className="tw:flex tw:items-end tw:gap-2.5">
          {POSITION_MONTHS.map((c) => (
            <span
              key={c.m}
              className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:gap-1"
            >
              <span className="tw:flex tw:h-[92px] tw:w-full tw:flex-col-reverse tw:overflow-hidden tw:rounded-[7px] tw:bg-[#e2e8f0]">
                <i
                  className="tw:block tw:w-full"
                  style={
                    {
                      "--h": `${c.top}%`,
                      height: `${c.top}%`,
                      background: GREEN,
                      ...run("de-rise"),
                    } as CSSProperties
                  }
                />
                <i
                  className="tw:block tw:w-full"
                  style={{ height: `${c.mid}%`, background: SAND }}
                />
              </span>
              <span className="tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
                {c.m}
              </span>
            </span>
          ))}
        </div>
        <ul className="tw:grid tw:gap-1.5 tw:pb-5 tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
          {[
            [GREEN, "Top 3"],
            [SAND, "4–10"],
            ["#e2e8f0", "11+"],
          ].map(([bg, t]) => (
            <li key={t} className="tw:flex tw:items-center tw:gap-1.5">
              <i
                className="tw:block tw:size-2.5 tw:rounded-[3px]"
                style={{ background: bg }}
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** Google Maps on a phone: a "near me" search over a Gulf-coast map, your
    pin pulsing first in the list, and a directions request arriving.
    Decorative (the frame is aria-hidden). */
export function FlSeoPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-[#f5f2e8] tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:mx-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium tw:[box-shadow:0_4px_14px_rgba(12,21,38,0.12)]">
          <SiGooglemaps className="tw:flex-none tw:text-[#34a853]" />
          pool repair near me
          <FiSearch className="tw:ml-auto tw:flex-none tw:text-(--muted)" />
        </div>
        <div className="tw:mx-3 tw:mt-2 tw:flex tw:gap-1.5 tw:text-[10px] tw:font-semibold">
          {["Open now", "Top rated", "Naples"].map((t, i) => (
            <span
              key={t}
              className={cx(
                "tw:rounded-full tw:px-2.5 tw:py-1",
                i === 2
                  ? "tw:text-white"
                  : "tw:bg-white tw:text-(--ink-2) tw:ring-1 tw:ring-(--line)",
              )}
              style={i === 2 ? { background: GULF } : undefined}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="tw:relative tw:mt-2 tw:h-[178px] tw:flex-none">
          <svg
            viewBox="0 0 260 178"
            preserveAspectRatio="none"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <path
              d="M0 0 H62 C50 40 70 70 52 110 C40 140 56 160 46 178 H0 Z"
              fill={AQUA}
            />
            <path
              d="M22 20 C18 60 30 100 20 150"
              fill="none"
              stroke="#fef3c7"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {[
              "M56 52 H260",
              "M50 124 H260",
              "M150 0 V178",
              "M212 0 C206 60 222 120 214 178",
            ].map((d) => (
              <path key={d} d={d} fill="none" stroke="#fff" strokeWidth="7" />
            ))}
            <rect x="166" y="70" width="34" height="38" rx="6" fill="#dcfce7" />
            {[
              [184, 38],
              [232, 150],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="7" fill="#ea4335" />
                <circle cx={x} cy={y} r="2.6" fill="#fff" />
              </g>
            ))}
            <circle
              className="fls-pulse"
              cx="112"
              cy="92"
              r="12"
              fill={GREEN}
            />
            <circle
              cx="112"
              cy="92"
              r="9.5"
              fill={GREEN}
              stroke="#fff"
              strokeWidth="2.5"
            />
          </svg>
          <span
            className="tw:absolute tw:top-[32%] tw:left-[48%] tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-bold tw:whitespace-nowrap tw:[box-shadow:0_3px_10px_rgba(12,21,38,0.16)]"
            style={{ color: GREEN, ...inAt(2) }}
          >
            Your Company
          </span>
        </div>
        <div className="tw:relative tw:-mt-3 tw:flex-1 tw:rounded-t-[22px] tw:bg-white tw:px-3 tw:pt-2 tw:[box-shadow:0_-8px_22px_rgba(12,21,38,0.10)]">
          <i className="tw:mx-auto tw:block tw:h-1 tw:w-9 tw:rounded-full tw:bg-[#d8dee8]" />
          <div
            className="tw:mt-2.5 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
            style={inAt(1)}
          >
            <span className="tw:flex tw:items-center tw:gap-2">
              <span
                className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold tw:text-white"
                style={{ background: GREEN }}
              >
                1
              </span>
              <b className="tw:text-[13px]">Your Company</b>
            </span>
            <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
              <span className="tw:text-[#f4b400]">★★★★★</span> (186) · Pool
              repair
            </span>
            <span className="tw:mt-0.5 tw:block tw:text-[10.5px] tw:font-semibold tw:text-[#1f7a3a]">
              Open · Winter hours until 6 PM
            </span>
            <span className="tw:mt-2 tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[10.5px] tw:font-semibold">
              <span
                className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5 tw:text-white"
                style={{ background: GULF }}
              >
                <FiPhone className="tw:size-3" /> Call
              </span>
              <span
                className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5"
                style={{ background: AQUA, color: GULF }}
              >
                <FiNavigation className="tw:size-3" /> Route
              </span>
            </span>
          </div>
          {[2, 3].map((n, i) => (
            <div
              key={n}
              className="tw:mt-2 tw:flex tw:items-center tw:gap-2 tw:px-1"
              style={inAt(i + 2)}
            >
              <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[11px] tw:font-bold tw:text-(--muted)">
                {n}
              </span>
              <span className="tw:grid tw:flex-1 tw:gap-1.5">
                <Line w={n === 2 ? "62%" : "48%"} />
                <Line w={n === 2 ? "40%" : "55%"} />
              </span>
            </div>
          ))}
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
            style={{ background: GREEN }}
          >
            <FiNavigation className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Route requested to you</b>
            From Marco Island · 2 min ago
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Example Map Pack positions over 12 weeks (lower is better). */
const REGION_TRACK: { r: string; pts: number[] }[] = [
  { r: "Panhandle", pts: [17, 16, 15, 13, 12, 10, 8, 6] },
  { r: "North Florida", pts: [14, 13, 11, 10, 8, 7, 6, 5] },
  { r: "Central Florida", pts: [12, 11, 9, 8, 6, 5, 4, 3] },
  { r: "Tampa Bay", pts: [9, 8, 7, 5, 4, 3, 3, 2] },
  { r: "Southwest Florida", pts: [11, 10, 8, 6, 5, 4, 3, 3] },
  { r: "South Florida", pts: [19, 18, 16, 14, 12, 10, 8, 7] },
];
const SPARK_W = 96;
const SPARK_H = 28;
const sx = (i: number) => 4 + i * ((SPARK_W - 8) / 7);
const sy = (p: number) => 4 + ((p - 1) / 19) * (SPARK_H - 8);

/** Rank tracker by Florida region: twelve weeks of Map Pack position as a
    sparkline per region, the current position, and the console's three
    numbers on a deep-gulf strip. Decorative. */
export function FlSeoDarkUi({
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
          <FiActivity style={{ color: GREEN }} /> {c.title}
        </b>
        <Chip tone="green">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_96px_48px] tw:gap-3 tw:border-b tw:border-(--line) tw:pb-1.5 tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
        <span>Region</span>
        <span>12 weeks</span>
        <span className="tw:text-right">Now</span>
      </div>
      <ul>
        {REGION_TRACK.map((row, i) => {
          const last = row.pts[row.pts.length - 1];
          const d = row.pts
            .map((p, k) => `${k ? "L" : "M"}${sx(k)} ${sy(p)}`)
            .join(" ");
          return (
            <li
              key={row.r}
              className="tw:grid tw:grid-cols-[minmax(0,1fr)_96px_48px] tw:items-center tw:gap-3 tw:border-b tw:border-(--line) tw:py-1.5 tw:last:border-b-0"
              style={inAt(i + 1)}
            >
              <span className="tw:truncate tw:text-[12.5px] tw:font-medium">
                {row.r}
              </span>
              <svg
                viewBox={`0 0 ${SPARK_W} ${SPARK_H}`}
                width={SPARK_W}
                height={SPARK_H}
                className="tw:block"
              >
                <path
                  d={d}
                  fill="none"
                  stroke={last <= 3 ? GREEN : "#0891b2"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={run("de-draw")}
                />
                <circle
                  cx={sx(7)}
                  cy={sy(last)}
                  r="3"
                  fill={last <= 3 ? GREEN : "#0891b2"}
                  style={run("de-area")}
                />
              </svg>
              <span className="tw:text-right">
                <Chip tone={last <= 3 ? "green" : "blue"}>#{last}</Chip>
              </span>
            </li>
          );
        })}
      </ul>
      <ul
        className="tw:mt-4 tw:grid tw:grid-cols-3 tw:overflow-hidden tw:rounded-[14px] tw:text-white"
        style={{ background: GULF }}
      >
        {c.metrics.map((m, i) => (
          <li
            key={m.label}
            className={cx(
              "tw:px-3 tw:py-2.5",
              i > 0 && "tw:border-l tw:border-white/15",
            )}
          >
            <b className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]">
              {m.strong}
            </b>
            <span className="tw:mt-1 tw:block tw:text-[10.5px]/[1.25] tw:text-white/70">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

const CELLS = 50;

/** Before → after as four waffle grids of 50 squares (2 points each):
    grey for the starting point, green filling in for the gain. */
export function FlSeoScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:grid-cols-2 tw:gap-x-4 tw:gap-y-5">
        {rows.map((row) => {
          const b = Math.round(row.before / 2);
          const a = Math.round(row.after / 2);
          return (
            <li key={row.label}>
              <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-2">
                <span className="tw:text-[12.5px]/[1.25] tw:font-medium tw:text-(--text)">
                  {row.label}
                </span>
                <b className="tw:text-[16px] tw:leading-none tw:tracking-[-0.02em]">
                  {row.after}
                </b>
              </span>
              <span className="tw:mt-2 tw:grid tw:grid-cols-10 tw:gap-[3px]">
                {Array.from({ length: CELLS }, (_, k) => {
                  const stage =
                    k < b
                      ? 0
                      : k < a
                        ? 1 + Math.floor(((k - b) / Math.max(a - b, 1)) * 5)
                        : -1;
                  return (
                    <i
                      key={k}
                      className="tw:block tw:aspect-square tw:rounded-[3px]"
                      style={
                        stage === 0
                          ? { background: "#94a3b8" }
                          : stage > 0
                            ? {
                                background: "var(--green)",
                                ...run(`de-dot-${Math.min(stage, 5)}`),
                              }
                            : { background: "#edf1f6" }
                      }
                    />
                  );
                })}
              </span>
              <span className="tw:mt-1.5 tw:block tw:text-[11px] tw:text-(--muted)">
                from {row.before}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[2px] tw:bg-[#94a3b8]" />
          Starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[2px] tw:bg-(--green)" />
          Six-month target
        </span>
      </p>
    </div>
  );
}
