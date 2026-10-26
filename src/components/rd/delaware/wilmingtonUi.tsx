import type { CSSProperties, ReactNode } from "react";
import {
  FiCheck,
  FiMapPin,
  FiNavigation,
  FiPhone,
  FiSearch,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";

/* UI for the Wilmington digital marketing draft only (22 Oct 2026): none of
   these is used on the other Delaware drafts (owner: no shared UI between
   pages). Suburb radar, Local Services Ads, review feed, the four process
   steps, the directions phone, the Map Pack board on the dark card and the
   ring scorecard. Illustrations: "Your Business". */

const Stars = ({ className }: { className?: string }) => (
  <span className={cx("tw:flex tw:gap-px", className)} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((n) => (
      <FiStar
        key={n}
        className="tw:size-3 tw:fill-[#f4b400] tw:text-[#f4b400]"
      />
    ))}
  </span>
);

/* ------------------------------------------------------ feature panels */

/* Suburbs around downtown Wilmington, placed on the radar (% of the box). */
const SUBURBS: { name: string; l: number; t: number; on: boolean }[] = [
  { name: "Claymont", l: 80, t: 16, on: true },
  { name: "Brandywine", l: 54, t: 9, on: true },
  { name: "Hockessin", l: 16, t: 22, on: true },
  { name: "Pike Creek", l: 22, t: 52, on: true },
  { name: "Newark", l: 10, t: 78, on: true },
  { name: "Bear", l: 50, t: 88, on: false },
];

/** Reach by suburb: rings around downtown, each suburb turning green as it
    reaches the top three. */
export function SuburbsUi() {
  let k = 0;
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title="Top 3 reach by suburb"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">1 of 6</Chip>}
            to={<Chip tone="green">5 of 6</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-4 tw:aspect-[1.35] tw:overflow-hidden tw:rounded-[16px] tw:bg-[radial-gradient(circle_at_50%_50%,#eaf0fe_0%,#f6f8fc_70%)]">
        {[30, 55, 80].map((r) => (
          <span
            key={r}
            className="tw:absolute tw:top-1/2 tw:left-1/2 tw:-translate-1/2 tw:rounded-full tw:border tw:border-dashed tw:border-[#c9d3e3]"
            style={{ width: `${r}%`, height: `${r * 1.35}%` }}
          />
        ))}
        <span className="tw:absolute tw:top-1/2 tw:left-1/2 tw:z-1 tw:grid tw:-translate-1/2 tw:justify-items-center">
          <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-white tw:shadow-[0_0_0_6px_rgba(37,103,232,0.18)]">
            <FiMapPin />
          </span>
          <b className="tw:mt-1 tw:rounded-full tw:bg-white tw:px-2 tw:text-[10.5px]">
            Wilmington
          </b>
        </span>
        {SUBURBS.map((s) => {
          const anim = s.on ? run(`de-dot-${Math.min(++k, 5)}`) : undefined;
          return (
            <span
              key={s.name}
              className="tw:absolute tw:flex tw:-translate-1/2 tw:items-center tw:gap-1"
              style={{ left: `${s.l}%`, top: `${s.t}%` }}
            >
              <i
                className="tw:block tw:size-3 tw:rounded-full tw:ring-2 tw:ring-white"
                style={{
                  background: s.on ? "var(--green)" : "#d5dce7",
                  ...anim,
                }}
              />
              <span className="tw:rounded-full tw:bg-white/90 tw:px-1.5 tw:text-[10.5px] tw:font-semibold">
                {s.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

/** Local Services Ads: your Google Guaranteed listing on top, a lead
    arriving below. */
export function LsaUi() {
  return (
    <div className={CARD}>
      <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-2 tw:text-[13px]">
        <FiSearch className="tw:size-4 tw:text-(--muted)" />
        plumber wilmington de
      </span>
      <p className="tw:mt-3 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
        Sponsored · Local Services
      </p>
      <ul className="tw:mt-2 tw:grid tw:grid-cols-2 tw:gap-2">
        <li
          className="tw:rounded-[14px] tw:border-[1.5px] tw:border-(--green)/50 tw:bg-(--green-soft)/60 tw:p-3"
          style={inAt(1)}
        >
          <b className="tw:block tw:text-[13px]">Your Business</b>
          <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]">
            <FiShield className="tw:size-3" /> Google Guaranteed
          </span>
          <Stars className="tw:mt-1.5" />
          <span className="tw:mt-2 tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-1 tw:text-[11px] tw:font-semibold tw:text-white">
            <FiPhone className="tw:size-3" /> Call
          </span>
        </li>
        <li
          className="tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3 tw:opacity-70"
          style={inAt(2)}
        >
          <b className="tw:block tw:text-[13px]">Competitor</b>
          <span className="tw:mt-1 tw:block tw:text-[11px] tw:text-(--muted)">
            Not verified
          </span>
          <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#dfe5ee]" />
          <i className="tw:mt-3 tw:block tw:h-6 tw:rounded-full tw:bg-(--panel)" />
        </li>
      </ul>
      <div
        className="tw:mt-3 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--ink) tw:px-3.5 tw:py-2.5 tw:text-white"
        style={run("de-late")}
      >
        <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--green)">
          <FiPhone className="tw:size-3.5" />
        </span>
        <span>
          <b className="tw:block tw:text-[12.5px]">New lead · Pike Creek</b>
          <span className="tw:text-[11px] tw:text-white/70">
            Charged per lead, not per click
          </span>
        </span>
      </div>
    </div>
  );
}

const REVIEWS: { name: string; text: string; reply: string }[] = [
  {
    name: "Dana R. · Hockessin",
    text: "Showed up on time and fixed it the same day.",
    reply: "Thanks, Dana! Glad we could help.",
  },
  {
    name: "Marcus T. · Newark",
    text: "Clear quote, no surprises. Would hire again.",
    reply: "Appreciate it, Marcus.",
  },
];

/** Recent reviews arriving, each with an owner reply. */
export function ReviewsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiStar />}
        tone="gold"
        title="Google reviews"
        right={
          <Flip
            n={3}
            from={<Chip tone="muted">148 reviews</Chip>}
            to={<Chip tone="green">165 reviews</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {REVIEWS.map((r, i) => (
          <li
            key={r.name}
            className="tw:rounded-[14px] tw:bg-(--panel) tw:p-3"
            style={inAt(i * 2 + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <b className="tw:text-[12.5px]">{r.name}</b>
              <Stars />
            </span>
            <p className="tw:mt-1 tw:text-[12.5px]/[1.4] tw:text-(--ink-2)">
              {r.text}
            </p>
            <p
              className="tw:mt-2 tw:rounded-[10px] tw:border-l-2 tw:border-(--blue) tw:bg-white tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:text-(--muted)"
              style={inAt(i * 2 + 2)}
            >
              <b className="tw:text-(--ink)">Owner reply:</b> {r.reply}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const SHARE: [string, number, string][] = [
  ["Competitor A", 38, "#94a3b8"],
  ["Competitor B", 27, "#cbd5e1"],
  ["Competitor C", 21, "#e2e8f0"],
  ["Your Business", 14, "var(--blue)"],
];

const KANBAN: [string, string][] = [
  ["Profile rebuild", "Done"],
  ["Citations cleaned", "Done"],
  ["Call tracking live", "Done"],
];

/* Month grid: day index → activity (p = post, r = review, g = page). */
const MONTH: Record<number, "p" | "r" | "g"> = {
  1: "p",
  3: "r",
  6: "g",
  8: "p",
  10: "r",
  13: "r",
  15: "p",
  17: "g",
  20: "r",
  22: "p",
  24: "r",
  27: "g",
  29: "p",
};
const DOT = { p: "var(--blue)", r: "var(--gold)", g: "var(--green)" };

/** Wilmington process UIs: Map Pack share, plan board, month of activity,
    calls trend. */
export function wilmStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3, s4] = process.steps;
  let offset = 0;
  return [
    <Slot key="wilm-share">
      <UiHead
        icon={<FiSearch />}
        title="Map Pack share · your category"
        right={<Chip tone="blue">Wilmington</Chip>}
      />
      <div className="tw:flex tw:items-center tw:gap-4">
        <svg
          viewBox="0 0 42 42"
          className="tw:size-[104px] tw:flex-none tw:-rotate-90"
          aria-hidden="true"
        >
          {SHARE.map(([name, pct, color]) => {
            const el = (
              <circle
                key={name}
                cx="21"
                cy="21"
                r="15.9"
                fill="none"
                strokeWidth="7"
                style={{ stroke: color }}
                strokeDasharray={`${pct} ${100 - pct}`}
                strokeDashoffset={-offset}
              />
            );
            offset += pct;
            return el;
          })}
        </svg>
        <ul className="tw:grid tw:gap-1 tw:text-[11.5px]">
          {SHARE.map(([name, pct, color]) => (
            <li key={name} className="tw:flex tw:items-center tw:gap-2">
              <i
                className="tw:block tw:size-2.5 tw:rounded-full"
                style={{ background: color }}
              />
              <span
                className={name === "Your Business" ? "tw:font-semibold" : ""}
              >
                {name}
              </span>
              <span className="tw:ml-auto tw:text-(--muted)">{pct}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Slot>,

    <Slot key="wilm-board">
      <UiHead
        icon={<FiCheck />}
        tone="gold"
        title="Plan board"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[10.5px]">
        {["To do", "Doing", "Done"].map((col, c) => (
          <div
            key={col}
            className="tw:grid tw:content-start tw:gap-1 tw:rounded-[10px] tw:bg-(--panel) tw:p-1.5"
          >
            <b className="tw:px-1 tw:text-[10px] tw:tracking-[0.06em] tw:text-(--muted) tw:uppercase">
              {col}
            </b>
            {c === 2 ? (
              KANBAN.map(([t], i) => (
                <span
                  key={t}
                  className="tw:flex tw:items-center tw:gap-1 tw:rounded-[8px] tw:bg-white tw:px-1.5 tw:py-1 tw:font-medium"
                  style={inAt(i + 2)}
                >
                  <FiCheck className="tw:size-3 tw:flex-none tw:text-(--green)" />
                  {t}
                </span>
              ))
            ) : c === 1 ? (
              <span className="tw:rounded-[8px] tw:bg-white tw:px-1.5 tw:py-1 tw:font-medium">
                Suburb pages
              </span>
            ) : (
              <span className="tw:rounded-[8px] tw:bg-white tw:px-1.5 tw:py-1 tw:font-medium">
                Ad campaigns
              </span>
            )}
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="wilm-month">
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="A month of activity"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-7 tw:gap-1">
        {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
          const a = MONTH[day];
          return (
            <span
              key={day}
              className="tw:grid tw:h-6 tw:place-items-center tw:rounded-[6px] tw:bg-(--panel) tw:text-[9px] tw:text-(--muted)"
            >
              {a ? (
                <i
                  className="tw:block tw:size-2 tw:rounded-full"
                  style={{ background: DOT[a], ...run(TICK_AT[day % 4]) }}
                />
              ) : (
                day
              )}
            </span>
          );
        })}
      </div>
      <div className="tw:flex tw:flex-wrap tw:gap-1.5">
        {(s3?.chips ?? []).map((chip, i) => (
          <span
            key={chip}
            className="tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:font-medium"
          >
            <i
              className="tw:block tw:size-2 tw:rounded-full"
              style={{ background: [DOT.p, DOT.g, DOT.r][i % 3] }}
            />
            {chip}
          </span>
        ))}
      </div>
    </Slot>,

    <Slot key="wilm-calls">
      <UiHead
        icon={<FiPhone />}
        title="Calls from search"
        right={<Chip tone="green">Rising</Chip>}
      />
      <svg
        viewBox="0 0 300 96"
        className="tw:block tw:h-[92px] tw:w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 86 L50 78 L100 70 L150 58 L200 44 L250 30 L300 14 L300 96 L0 96 Z"
          style={{ fill: "var(--green-soft)", ...run("de-area") }}
        />
        <path
          d="M0 86 L50 78 L100 70 L150 58 L200 44 L250 30 L300 14"
          fill="none"
          strokeWidth="2.5"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          vectorEffect="non-scaling-stroke"
          style={{ stroke: "var(--green)", ...run("de-draw") }}
        />
      </svg>
      <div className="tw:flex tw:justify-between tw:text-[10px] tw:text-(--muted)">
        {["M1", "M2", "M3", "M4", "M5", "M6"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="tw:flex tw:flex-wrap tw:gap-1.5">
        {(s4?.chips ?? []).map((chip) => (
          <Chip key={chip} tone="green">
            {chip}
          </Chip>
        ))}
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const SOURCES: [string, number][] = [
  ["Google Maps", 46],
  ["Search", 31],
  ["Local Services Ads", 23],
];

const SUBURB_SPEND: [string, number, boolean][] = [
  ["Newark", 72, false],
  ["Pike Creek", 54, true],
  ["Hockessin", 38, false],
];

const OWNED = ["Business Profile", "Google Ads", "Analytics"];

/** The monthly report the Wilmington client opens: who sent it (a verified
    Delaware company), every call traced to its source, spend by suburb with
    the cheapest-lead suburb marked, and the accounts the client owns — the
    three promises of the section beside it. Decorative (frame aria-hidden). */
export function ReportPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-(--panel) tw:px-3 tw:pt-[40px] tw:pb-3 tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:px-1">
          <span>
            <b className="tw:block tw:text-[14px]">Monthly report</b>
            <span className="tw:text-[10.5px] tw:text-(--muted)">
              October · Your Business
            </span>
          </span>
          <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2 tw:py-1 tw:text-[9.5px] tw:font-semibold tw:text-[#1f7a3a]">
            <FiShield className="tw:size-3" /> Dover, DE
          </span>
        </div>

        <div
          className="tw:mt-2.5 tw:rounded-[14px] tw:bg-white tw:p-3"
          style={inAt(1)}
        >
          <span className="tw:flex tw:items-center tw:justify-between">
            <b className="tw:text-[11.5px]">Calls by source</b>
            <Chip tone="green">
              <FiTrendingUp /> Up
            </Chip>
          </span>
          <ul className="tw:mt-2 tw:grid tw:gap-1.5">
            {SOURCES.map(([name, w]) => (
              <li
                key={name}
                className="tw:grid tw:grid-cols-[92px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:text-[10.5px]"
              >
                <span className="tw:truncate">{name}</span>
                <span className="tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
                  <i
                    className="tw:block tw:h-full tw:rounded-full tw:bg-(--blue)"
                    style={
                      {
                        "--w": `${w * 2}%`,
                        width: `${w * 2}%`,
                        ...run("de-fill"),
                      } as CSSProperties
                    }
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="tw:mt-2 tw:rounded-[14px] tw:bg-white tw:p-3"
          style={inAt(2)}
        >
          <b className="tw:text-[11.5px]">Ad spend by suburb</b>
          <ul className="tw:mt-2 tw:grid tw:gap-1.5">
            {SUBURB_SPEND.map(([name, w, best]) => (
              <li
                key={name}
                className="tw:grid tw:grid-cols-[70px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:text-[10.5px]"
              >
                <span>{name}</span>
                <span className="tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
                  <i
                    className="tw:block tw:h-full tw:rounded-full tw:bg-(--gold)"
                    style={{ width: `${w}%` }}
                  />
                </span>
                {best ? (
                  <span className="tw:rounded-full tw:bg-(--green-soft) tw:px-1.5 tw:text-[9px] tw:font-semibold tw:text-[#1f7a3a]">
                    Best cost / lead
                  </span>
                ) : (
                  <span />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="tw:mt-2 tw:rounded-[14px] tw:bg-white tw:p-3"
          style={inAt(3)}
        >
          <b className="tw:text-[11.5px]">Your accounts</b>
          <ul className="tw:mt-2 tw:grid tw:gap-1">
            {OWNED.map((acct) => (
              <li
                key={acct}
                className="tw:flex tw:items-center tw:justify-between tw:text-[10.5px]"
              >
                {acct}
                <span className="tw:flex tw:items-center tw:gap-1 tw:font-semibold tw:text-[#1f7a3a]">
                  <FiCheck className="tw:size-3" /> Owned by you
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="tw:mt-2 tw:flex tw:items-center tw:gap-2 tw:rounded-[14px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white"
          style={run("de-late")}
        >
          <FiPhone className="tw:size-3.5 tw:flex-none tw:text-(--gold)" />
          <span className="tw:text-[10.5px]/[1.3]">
            Every call listed with the search that sent it
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/** Map Pack board for the dark card: a Wilmington search with your listing
    in first place and the console's three numbers. Decorative. */
export function MapPackBoardUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  const rows = [
    { name: "Your Business", you: true },
    { name: "Competitor A", you: false },
    { name: "Competitor B", you: false },
  ];
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-2 tw:text-[13px]">
        <FiSearch className="tw:size-4 tw:text-(--muted)" />
        hvac repair near Wilmington, DE
      </span>
      <div
        className="tw:mt-3 tw:h-[84px] tw:rounded-[14px] tw:bg-[#e8f0e6]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, transparent 40%, #fff 40%, #fff 44%, transparent 44%), linear-gradient(10deg, transparent 58%, #cfe3f6 58%, #cfe3f6 66%, transparent 66%)",
        }}
      />
      <ol className="tw:mt-3 tw:grid tw:gap-2">
        {rows.map((r, i) => (
          <li
            key={r.name}
            className={cx(
              "tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:px-3 tw:py-2.5",
              r.you
                ? "tw:border-[1.5px] tw:border-(--blue) tw:bg-(--blue-soft)"
                : "tw:border tw:border-(--line)",
            )}
            style={inAt(i + 1)}
          >
            <b
              className={cx(
                "tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px]",
                r.you ? "tw:bg-(--blue) tw:text-white" : "tw:bg-(--panel)",
              )}
            >
              {i + 1}
            </b>
            <span className="tw:min-w-0">
              <b className="tw:block tw:text-[13px]">{r.name}</b>
              {r.you ? (
                <Stars />
              ) : (
                <i className="tw:mt-1 tw:block tw:h-1.5 tw:w-20 tw:rounded-full tw:bg-[#dfe5ee]" />
              )}
            </span>
            <span className="tw:ml-auto tw:flex tw:gap-1.5">
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-(--blue)">
                <FiPhone className="tw:size-3" />
              </span>
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-(--blue)">
                <FiNavigation className="tw:size-3" />
              </span>
            </span>
          </li>
        ))}
      </ol>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--ink) tw:px-2.5 tw:py-2 tw:text-white"
          >
            <b className="tw:block tw:text-[18px] tw:leading-none">
              {m.strong}
            </b>
            <span className="tw:mt-1 tw:block tw:text-[10.5px]/[1.25] tw:text-white/65">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-2 tw:text-right tw:text-[10.5px] tw:text-(--muted)">
        {c.tag}
      </p>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

/** Before / after as rings: the new score drawn, the old one noted. */
export function ScoreRingsUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <ul className="tw:grid tw:gap-3" aria-hidden="true">
      {rows.map((row) => {
        const gap = 1 - row.after / 100;
        return (
          <li key={row.label} className="tw:flex tw:items-center tw:gap-3">
            <span className="tw:relative tw:grid tw:size-12 tw:flex-none tw:place-items-center">
              <svg
                viewBox="0 0 60 60"
                className="tw:absolute tw:inset-0 tw:-rotate-90"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  fill="none"
                  stroke="#e6ebf3"
                  strokeWidth="6"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={
                    {
                      stroke: "var(--blue)",
                      strokeDashoffset: gap,
                      "--g": gap,
                      ...run("de-gauge"),
                    } as CSSProperties
                  }
                />
              </svg>
              <b className="tw:text-[12px]">{row.after}</b>
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:text-[14.5px] tw:font-medium">
                {row.label}
              </b>
              <span className="tw:text-[12.5px] tw:text-(--muted)">
                example starting point {row.before}%
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
