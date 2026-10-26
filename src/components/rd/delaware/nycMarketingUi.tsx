import type { CSSProperties, ReactNode } from "react";
import {
  FiAlertTriangle,
  FiCalendar,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiMap,
  FiMessageCircle,
  FiPhone,
  FiPhoneMissed,
  FiShield,
  FiSliders,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";

/* UI for the NYC digital marketing draft only (23 Oct 2026); none of it
   appears on another page. Feature panels (search demand by hour, the lead
   log, the profile monitor), the four process steps, the missed-call
   text-back phone, the borough board on the dark card and the slope
   scorecard. Illustrations: "Your Business", example figures. */

/* ------------------------------------------------------ feature panels */

const HOURS = ["6a", "9a", "12p", "3p", "6p", "9p"];
const WEEK: [string, number[]][] = [
  ["Mon", [0.45, 0.85, 0.7, 0.4, 0.9, 0.5]],
  ["Tue", [0.5, 0.85, 0.7, 0.45, 0.9, 0.5]],
  ["Wed", [0.45, 0.8, 0.75, 0.4, 0.85, 0.45]],
  ["Thu", [0.5, 0.8, 0.7, 0.5, 0.95, 0.55]],
  ["Fri", [0.4, 0.7, 0.8, 0.5, 0.7, 0.35]],
  ["Sat", [0.15, 0.45, 0.75, 0.7, 0.5, 0.3]],
  ["Sun", [0.1, 0.35, 0.6, 0.55, 0.45, 0.25]],
];

/** Search demand by day and hour; ads run hardest in the dark cells. */
export function SearchHoursUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiClock />}
        title="When your customers search"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">All day</Chip>}
            to={<Chip tone="blue">Peak hours</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[34px_repeat(6,minmax(0,1fr))] tw:gap-1 tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
        <span />
        {HOURS.map((h) => (
          <span key={h} className="tw:text-center">
            {h}
          </span>
        ))}
        {WEEK.map(([day, cells]) => (
          <div key={day} className="tw:contents">
            <span className="tw:self-center">{day}</span>
            {cells.map((v, c) => (
              <i
                key={c}
                className="tw:block tw:h-[18px] tw:rounded-[5px]"
                style={{ background: `rgba(37,103,232,${v})`, ...inAt(c + 1) }}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[11.5px] tw:text-(--muted)">
        Commute and lunch hours get the most budget.
        <span className="tw:flex-none">Example account</span>
      </p>
    </div>
  );
}

const LOG: {
  icon: ReactNode;
  what: string;
  hood: string;
  source: string;
  time: string;
  booked?: 1 | 2 | 3;
}[] = [
  {
    icon: <FiPhone />,
    what: "Call · 3 min",
    hood: "Astoria",
    source: "Google Ads",
    time: "9:14",
    booked: 1,
  },
  {
    icon: <FiFileText />,
    what: "Quote request",
    hood: "Park Slope",
    source: "Map Pack",
    time: "10:02",
  },
  {
    icon: <FiMessageCircle />,
    what: "Instagram DM",
    hood: "Williamsburg",
    source: "Instagram",
    time: "11:47",
    booked: 2,
  },
  {
    icon: <FiPhone />,
    what: "Call · 5 min",
    hood: "Upper West Side",
    source: "Organic",
    time: "1:26",
    booked: 3,
  },
];

/** Today's leads, each tagged with its source and neighborhood. */
export function LeadLogUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        tone="green"
        title="Today's leads"
        right={<Chip tone="green">4 new</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {LOG.map((l, i) => (
          <li
            key={l.what + l.hood}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[13px] tw:text-(--blue)">
              {l.icon}
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[12px]">{l.what}</b>
              <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                {l.hood} · {l.time}
              </span>
            </span>
            <span className="tw:ml-auto tw:flex tw:flex-none tw:flex-col tw:items-end tw:gap-1">
              <Chip tone="blue">{l.source}</Chip>
              {l.booked ? (
                <Flip
                  n={l.booked}
                  from={<Chip tone="muted">New</Chip>}
                  to={<Chip tone="green">Booked</Chip>}
                />
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const CHECKS: [string, boolean][] = [
  ["Name matches your signage", true],
  ["Address verified on Google", true],
  ["Edit suggested by a Google user", false],
  ["Hours and categories locked in", true],
];

/** Daily Business Profile checks; an unwanted edit gets reverted. */
export function ProfileMonitorUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShield />}
        title="Profile health monitor"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">1 alert</Chip>}
            to={<Chip tone="green">Protected</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {CHECKS.map(([t, ok], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {ok ? (
              <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-[11px] tw:text-(--green)">
                <FiCheck />
              </span>
            ) : (
              <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-[#fde4e1] tw:text-[11px] tw:text-[#b8352a]">
                <FiAlertTriangle />
              </span>
            )}
            {t}
            {ok ? null : (
              <span className="tw:ml-auto">
                <Flip
                  n={3}
                  from={<Chip tone="red">Pending</Chip>}
                  to={<Chip tone="green">Reverted</Chip>}
                />
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Checked daily, so a bad edit never costs you a week of calls.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const LEAKS: [string, string][] = [
  ["Broad-match ads, no negatives", "Wasted clicks"],
  ["Duplicate Maps listing", "Split reviews"],
  ["Slow mobile landing page", "6.1s"],
  ["Calls not tracked", "0%"],
];

const BOROUGHS: [string, string[], number][] = [
  ["Brooklyn", ["SEO", "Social"], 3],
  ["Manhattan", ["Ads", "SEO"], 3],
  ["Queens", ["SEO", "Ads"], 2],
];

const WEEKLY: [string, string][] = [
  ["Mon", "Search terms pruned"],
  ["Tue", "Two posts published"],
  ["Wed", "New service page live"],
  ["Thu", "Reviews answered"],
];

const MOVES: [string, number, number][] = [
  ["Staten Island", 18, 9],
  ["Brooklyn", 24, 33],
];

/** NYC digital marketing process UIs. */
export function nycMarketingStepUis(
  process: DelawareData["process"],
): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="nm-leaks">
      <UiHead
        icon={<FiDollarSign />}
        title="Budget leak finder"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">4 leaks</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {LEAKS.map(([t, v], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {t}
            <b className="tw:flex-none tw:text-[11.5px] tw:text-[#b8352a]">
              {v}
            </b>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="nm-plan">
      <UiHead
        icon={<FiMap />}
        tone="gold"
        title="Borough plan"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {BOROUGHS.map(([b, channels, priority], i) => (
          <li
            key={b}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px] tw:font-semibold"
            style={inAt(i + 1)}
          >
            <span className="tw:w-[78px] tw:flex-none">{b}</span>
            <span className="tw:flex tw:gap-1">
              {channels.map((c) => (
                <Chip
                  key={c}
                  tone={c === "Ads" ? "amber" : c === "SEO" ? "blue" : "green"}
                >
                  {c}
                </Chip>
              ))}
            </span>
            <span className="tw:ml-auto tw:flex tw:gap-0.5" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <i
                  key={n}
                  className="tw:block tw:size-1.5 tw:rounded-full"
                  style={{
                    background: n <= priority ? "var(--ink)" : "#dfe5ee",
                  }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="nm-week">
      <UiHead
        icon={<FiCalendar />}
        tone="green"
        title="This week's work"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {WEEKLY.map(([d, t], i) => (
          <li
            key={d}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
              {d}
              <i
                className="tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:text-[9px] tw:text-white"
                style={{
                  background: "var(--green)",
                  ...run(`de-dot-${i + 1}`),
                }}
              >
                <FiCheck />
              </i>
            </span>
            <b className="tw:mt-1 tw:block tw:text-[12px]/[1.3]">{t}</b>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="nm-moves">
      <UiHead
        icon={<FiSliders />}
        title="Budget moved this month"
        right={<Chip tone="green">Rebalanced</Chip>}
      />
      <ul className="tw:grid tw:gap-3">
        {MOVES.map(([b, from, to], i) => (
          <li key={b} style={inAt(i + 1)}>
            <span className="tw:flex tw:justify-between tw:text-[12px] tw:font-semibold">
              {b}
              <span
                className={
                  to > from ? "tw:text-[#1f7a3a]" : "tw:text-[#b8352a]"
                }
              >
                {from}% → {to}%
              </span>
            </span>
            <span className="tw:mt-1.5 tw:block tw:h-2.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <i
                className="tw:block tw:h-full tw:rounded-full"
                style={
                  {
                    "--b": `${from * 2.5}%`,
                    "--a": `${to * 2.5}%`,
                    width: `${to * 2.5}%`,
                    background: to > from ? "var(--green)" : "#f08b80",
                    ...run("de-split"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:text-[11px] tw:text-(--muted)">
        Budget follows the boroughs booking the most jobs.
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A missed call answered by text, ending in a booked appointment.
    Decorative (frame aria-hidden). */
export function TextBackPhone() {
  const out =
    "tw:max-w-[82%] tw:justify-self-end tw:rounded-[16px] tw:rounded-br-[5px] tw:bg-(--blue) tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35] tw:text-white";
  const inn =
    "tw:max-w-[82%] tw:justify-self-start tw:rounded-[16px] tw:rounded-bl-[5px] tw:bg-[#eef1f6] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35]";
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <div className="tw:flex tw:flex-col tw:items-center tw:border-b tw:border-(--line) tw:pb-2.5">
          <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[11px] tw:font-bold tw:text-(--blue)">
            NC
          </span>
          <b className="tw:mt-1 tw:text-[11.5px]">New customer</b>
        </div>
        <p className="tw:mt-2.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:text-[10px] tw:font-medium tw:text-[#b8352a]">
          <FiPhoneMissed className="tw:size-3" /> Missed call · 6:42 PM
        </p>
        <div className="tw:mt-2.5 tw:grid tw:gap-1.5">
          <span className={out} style={inAt(1)}>
            Sorry we missed you! This is Your Business. How can we help?
          </span>
          <span className={inn} style={inAt(2)}>
            Need a quote for a bathroom in Astoria
          </span>
          <span className={out} style={inAt(3)}>
            Happy to help. Thursday at 10 or 2?
          </span>
          <span className={inn} style={inAt(4)}>
            10 works
          </span>
        </div>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiCheck className="tw:size-3.5" /> Booked · Thu 10:00 AM
        </span>
        <p
          className="tw:mt-2 tw:text-center tw:text-[10px] tw:text-(--muted)"
          style={run("de-late")}
        >
          Logged in your report as a Google Ads lead
        </p>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const BOARD: [string, number, string, "green" | "blue" | "muted"][] = [
  ["Brooklyn", 92, "#1", "green"],
  ["Manhattan", 78, "Top 3", "blue"],
  ["Queens", 70, "Top 3", "blue"],
  ["The Bronx", 44, "Climbing", "muted"],
  ["Staten Island", 30, "Climbing", "muted"],
];

/** Leads by borough with each borough's Map Pack standing, plus the
    console's three numbers. Decorative. */
export function BoroughBoardUi({
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
        <b className="tw:text-[15px]">Results by borough</b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {BOARD.map(([b, w, rank, tone]) => (
          <li
            key={b}
            className="tw:grid tw:grid-cols-[96px_minmax(0,1fr)_64px] tw:items-center tw:gap-2.5 tw:text-[12.5px] tw:font-medium"
          >
            {b}
            <span className="tw:block tw:h-2.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <i
                className="tw:block tw:h-full tw:rounded-full tw:bg-(--blue)"
                style={
                  {
                    "--w": `${w}%`,
                    width: `${w}%`,
                    ...run("de-fill"),
                  } as CSSProperties
                }
              />
            </span>
            <span className="tw:text-right">
              <Chip tone={tone}>{rank}</Chip>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-2 tw:text-[11px] tw:text-(--muted)">
        Bar = share of leads · chip = Map Pack position
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-(--gold)">
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

/** Before → after as a small slope line per signal. */
export function ScoreSlopeUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <ul className="tw:grid tw:gap-2.5" aria-hidden="true">
      {rows.map((row) => {
        const y = (v: number) => 38 - (v / 100) * 34;
        return (
          <li
            key={row.label}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_84px_52px] tw:items-center tw:gap-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3.5 tw:py-2.5"
          >
            <span className="tw:text-[13.5px] tw:font-medium">{row.label}</span>
            <svg
              viewBox="0 0 84 42"
              className="tw:block tw:h-[42px] tw:w-[84px]"
            >
              <line
                x1="6"
                x2="78"
                y1={y(row.before)}
                y2={y(row.after)}
                stroke="var(--blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1"
                style={run("de-draw")}
              />
              <circle cx="6" cy={y(row.before)} r="4" fill="#cbd5e1" />
              <circle
                cx="78"
                cy={y(row.after)}
                r="4.5"
                fill="var(--blue)"
                style={run("de-area")}
              />
            </svg>
            <span className="tw:text-right tw:leading-tight">
              <b className="tw:block tw:text-[18px] tw:tracking-[-0.02em]">
                {row.after}
              </b>
              <span className="tw:text-[11px] tw:text-(--muted)">
                from {row.before}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
