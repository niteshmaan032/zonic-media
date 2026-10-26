import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowRight,
  FiGitMerge,
  FiGrid,
  FiLayers,
  FiPauseCircle,
  FiRepeat,
  FiSearch,
  FiSliders,
  FiTrendingUp,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";

/* UI for the Philadelphia SEM draft only (23 Oct 2026); none of it appears
   on another page. Feature panels (whole-page share, paid ↔ organic
   keyword loop, budget split by return), the four process steps, the
   paid + organic report phone, the blended board on the dark card and the
   radar scorecard. Illustrations: "Your Business"; figures are examples. */

/* ------------------------------------------------------ feature panels */

const SLOTS: { kind: string; you: boolean }[] = [
  { kind: "Sponsored", you: true },
  { kind: "Map pack #1", you: true },
  { kind: "Organic #1", you: true },
  { kind: "Organic #2", you: false },
];

/** One results page, three of the top four spots yours. */
export function SerpShareUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiLayers />}
        title="Results page share"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">1 of 4</Chip>}
            to={<Chip tone="green">3 of 4</Chip>}
          />
        }
      />
      <span className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12px]">
        <FiSearch className="tw:size-3.5 tw:text-(--muted)" /> accountant center
        city
      </span>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {SLOTS.map((s, i) => (
          <li
            key={s.kind}
            className={cx(
              "tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px]",
              s.you
                ? "tw:border-[1.5px] tw:border-(--blue) tw:bg-(--blue-soft)"
                : "tw:border tw:border-(--line) tw:opacity-60",
            )}
            style={inAt(i + 1)}
          >
            <span className="tw:w-[86px] tw:flex-none tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
              {s.kind}
            </span>
            <b className="tw:truncate">
              {s.you ? "Your Business" : "Competitor"}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Paid data feeding organic plans, organic wins saving ad budget. */
export function KeywordLoopUi() {
  const card = (title: string, body: string, tone: string) => (
    <div className="tw:rounded-[14px] tw:p-3" style={{ background: tone }}>
      <b className="tw:block tw:text-[12px]">{title}</b>
      <span className="tw:mt-0.5 tw:block tw:text-[11px]/[1.35] tw:text-(--ink-2)">
        {body}
      </span>
    </div>
  );
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiRepeat />}
        tone="gold"
        title="One keyword list, two channels"
        right={<Chip tone="blue">Shared</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_24px_minmax(0,1fr)] tw:items-center tw:gap-y-3">
        <span style={inAt(1)}>
          {card(
            "Paid search",
            '"tax accountant near me" converts at 9%',
            "#fff6db",
          )}
        </span>
        <FiArrowRight className="tw:mx-auto tw:text-(--muted)" />
        <span style={inAt(2)}>
          {card("Organic", "New service page built for that term", "#e7f6ec")}
        </span>
        <span style={inAt(3)}>
          {card("Organic", '"cpa center city" now ranks #1', "#e7f6ec")}
        </span>
        <FiArrowRight className="tw:mx-auto tw:text-(--muted)" />
        <span style={inAt(4)}>
          {card(
            "Paid search",
            "Bid lowered, budget moved elsewhere",
            "#fff6db",
          )}
        </span>
      </div>
    </div>
  );
}

/** The budget split moving toward whichever channel returns more. */
export function BudgetSplitDialUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSliders />}
        tone="green"
        title="Budget split by return"
        right={
          <Flip
            n={3}
            from={<Chip tone="muted">Month 1</Chip>}
            to={<Chip tone="green">Month 6</Chip>}
          />
        }
      />
      <div className="tw:mt-5">
        <span className="tw:flex tw:justify-between tw:text-[11.5px] tw:font-semibold">
          <span className="tw:text-[#8a6400]">Paid search</span>
          <span className="tw:text-[#1f7a3a]">Organic</span>
        </span>
        <span className="tw:relative tw:mt-2 tw:block tw:h-4 tw:overflow-hidden tw:rounded-full tw:bg-[#cfe9d7]">
          <i
            className="tw:absolute tw:inset-y-0 tw:left-0 tw:block tw:rounded-l-full tw:bg-(--gold)"
            style={
              {
                "--b": "75%",
                "--a": "45%",
                width: "45%",
                animation: "de-split 8s ease infinite both",
              } as CSSProperties
            }
          />
        </span>
        <span className="tw:mt-1.5 tw:flex tw:justify-between tw:text-[10.5px] tw:text-(--muted)">
          <span>Fast leads now</span>
          <span>Leads that keep coming</span>
        </span>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2">
        <li className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
          <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
            Blended cost per lead
          </span>
          <Flip
            n={3}
            from={<b className="tw:text-[20px]">High</b>}
            to={<b className="tw:text-[20px] tw:text-[#1f7a3a]">Falling</b>}
          />
        </li>
        <li className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
          <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
            Leads per month
          </span>
          <Flip
            n={3}
            from={<b className="tw:text-[20px]">Flat</b>}
            to={<b className="tw:text-[20px] tw:text-[#1f7a3a]">Rising</b>}
          />
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const MATRIX: [string, string, "amber" | "green" | "blue" | "muted"][] = [
  ["High intent · crowded", "Buy with ads now", "amber"],
  ["High intent · open", "Rank fast with SEO", "green"],
  ["Research · crowded", "Content over time", "blue"],
  ["Research · open", "Quick content wins", "muted"],
];

const WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];

const LEADMIX: [number, number][] = [
  [80, 20],
  [72, 28],
  [64, 36],
  [56, 44],
  [50, 50],
  [44, 56],
];

/** Philadelphia SEM process UIs. */
export function phlSemStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="se-venn">
      <UiHead
        icon={<FiGitMerge />}
        title="Keyword overlap"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Mapping…</Chip>}
            to={<Chip tone="blue">Mapped</Chip>}
          />
        }
      />
      <div
        className="tw:relative tw:mx-auto tw:h-[118px] tw:w-full tw:max-w-[300px]"
        aria-hidden="true"
      >
        <span
          className="tw:absolute tw:top-0 tw:left-[6%] tw:grid tw:size-[118px] tw:place-items-center tw:rounded-full tw:bg-(--gold)/35"
          style={inAt(1)}
        >
          <span className="tw:-translate-x-5 tw:text-center tw:text-[10.5px] tw:font-semibold">
            <b className="tw:block tw:text-[17px]">46</b>Paid only
          </span>
        </span>
        <span
          className="tw:absolute tw:top-0 tw:right-[6%] tw:grid tw:size-[118px] tw:place-items-center tw:rounded-full tw:bg-(--green)/30"
          style={inAt(2)}
        >
          <span className="tw:translate-x-5 tw:text-center tw:text-[10.5px] tw:font-semibold">
            <b className="tw:block tw:text-[17px]">73</b>Organic only
          </span>
        </span>
        <span
          className="tw:absolute tw:top-1/2 tw:left-1/2 tw:-translate-1/2 tw:text-center tw:text-[10.5px] tw:font-semibold"
          style={inAt(3)}
        >
          <b className="tw:block tw:text-[17px]">18</b>Both
        </span>
      </div>
      <p className="tw:text-center tw:text-[10.5px] tw:text-(--muted)">
        Keywords you pay for, rank for, or both
      </p>
    </Slot>,

    <Slot key="se-matrix">
      <UiHead
        icon={<FiGrid />}
        tone="gold"
        title="Search plan"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {MATRIX.map(([cell, plan, tone], i) => (
          <li
            key={cell}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:block tw:text-[10px] tw:font-semibold tw:text-(--muted) tw:uppercase">
              {cell}
            </span>
            <span className="tw:mt-1.5 tw:block">
              <Chip tone={tone}>{plan}</Chip>
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="se-tracks">
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="Running both"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      {[
        {
          name: "Paid search",
          color: "var(--gold)",
          marks: ["Live", "Tested", "Tuned"],
        },
        {
          name: "Organic",
          color: "var(--green)",
          marks: ["Pages", "Links", "Ranking"],
        },
      ].map((track) => (
        <div key={track.name}>
          <span className="tw:flex tw:justify-between tw:text-[11.5px] tw:font-semibold">
            {track.name}
            <span className="tw:text-[10.5px] tw:text-(--muted)">
              {track.marks.join(" · ")}
            </span>
          </span>
          <span className="tw:mt-1.5 tw:grid tw:grid-cols-8 tw:gap-1">
            {WEEKS.map((w, i) => (
              <i
                key={w}
                className="tw:block tw:h-2.5 tw:rounded-full"
                style={{
                  background: track.color,
                  ...run(TICK_AT[Math.min(Math.floor(i / 2), 3)]),
                }}
              />
            ))}
          </span>
        </div>
      ))}
      <span className="tw:flex tw:justify-between tw:text-[10px] tw:text-(--muted)">
        <span>Week 1</span>
        <span>Week 8</span>
      </span>
    </Slot>,

    <Slot key="se-mix">
      <UiHead
        icon={<FiLayers />}
        title="Leads by source"
        right={<Chip tone="green">Organic rising</Chip>}
      />
      <div className="tw:flex tw:h-[110px] tw:items-end tw:gap-2 tw:border-b tw:border-(--line)">
        {LEADMIX.map(([paid, org], i) => (
          <span
            key={i}
            className="tw:flex tw:h-full tw:flex-1 tw:flex-col-reverse"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:w-full"
              style={{
                height: `${paid * 0.4 + i * 4}%`,
                background: "var(--gold)",
              }}
            />
            <i
              className="tw:block tw:w-full tw:rounded-t-[4px]"
              style={{
                height: `${org * 0.6 + i * 3}%`,
                background: "var(--green)",
              }}
            />
          </span>
        ))}
      </div>
      <p className="tw:flex tw:gap-3 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-(--gold)" />{" "}
          Paid
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-(--green)" />{" "}
          Organic
        </span>
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A weekly search report on a phone: paid and organic leads side by side,
    blended cost, and an ad paused because the organic listing took over.
    Decorative (the frame is aria-hidden). */
export function SemReportPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-(--panel) tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <b className="tw:block tw:px-1 tw:text-[14px]">Search report</b>
        <span className="tw:block tw:px-1 tw:text-[10.5px] tw:text-(--muted)">
          This week · Your Business
        </span>
        <div className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-2">
          <div className="tw:rounded-[14px] tw:bg-white tw:p-3" style={inAt(1)}>
            <span className="tw:text-[10.5px] tw:font-semibold tw:text-[#8a6400]">
              Paid leads
            </span>
            <b className="tw:mt-1 tw:block tw:text-[24px] tw:leading-none">
              14
            </b>
          </div>
          <div className="tw:rounded-[14px] tw:bg-white tw:p-3" style={inAt(2)}>
            <span className="tw:text-[10.5px] tw:font-semibold tw:text-[#1f7a3a]">
              Organic leads
            </span>
            <b className="tw:mt-1 tw:block tw:text-[24px] tw:leading-none">
              19
            </b>
          </div>
        </div>
        <div
          className="tw:mt-2 tw:rounded-[14px] tw:bg-white tw:p-3"
          style={inAt(3)}
        >
          <span className="tw:flex tw:items-center tw:justify-between tw:text-[11px] tw:font-semibold">
            Blended cost per lead <Chip tone="green">Down</Chip>
          </span>
          <svg
            viewBox="0 0 200 50"
            className="tw:mt-2 tw:block tw:h-[46px] tw:w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 10 L40 16 L80 22 L120 30 L160 36 L200 42"
              fill="none"
              strokeWidth="2.5"
              pathLength={1}
              strokeDasharray="1"
              style={{ stroke: "var(--blue)", ...run("de-draw") }}
            />
          </svg>
        </div>
        <div
          className="tw:mt-2 tw:rounded-[14px] tw:bg-white tw:p-3"
          style={inAt(4)}
        >
          <b className="tw:text-[11px]">Top keywords</b>
          <ul className="tw:mt-1.5 tw:grid tw:gap-1 tw:text-[10.5px]">
            {[
              ["cpa center city", "Organic #1"],
              ["tax accountant near me", "Ad #1"],
              ["small business bookkeeping", "Organic #3"],
            ].map(([k, p]) => (
              <li key={k} className="tw:flex tw:justify-between">
                {k}
                <b
                  className={
                    p.startsWith("Ad")
                      ? "tw:text-[#8a6400]"
                      : "tw:text-[#1f7a3a]"
                  }
                >
                  {p}
                </b>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:flex tw:items-start tw:gap-2.5 tw:rounded-[14px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white"
          style={run("de-late")}
        >
          <FiPauseCircle className="tw:mt-0.5 tw:size-4 tw:flex-none tw:text-(--gold)" />
          <span className="tw:text-[10.5px]/[1.35]">
            Ad paused on &ldquo;cpa center city&rdquo;: you rank #1 organically,
            so that budget moves elsewhere.
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/** Paid vs organic side by side with the blended cost in the middle, and
    the console's three numbers. Decorative. */
export function BlendedBoardUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  const col = (
    name: string,
    color: string,
    rows: [string, string][],
    at: number,
  ) => (
    <div
      className="tw:rounded-[16px] tw:border tw:border-(--line) tw:p-3"
      style={inAt(at)}
    >
      <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold">
        <i
          className="tw:block tw:size-2.5 tw:rounded-full"
          style={{ background: color }}
        />{" "}
        {name}
      </span>
      <ul className="tw:mt-2 tw:grid tw:gap-1 tw:text-[11px]">
        {rows.map(([k, v]) => (
          <li key={k} className="tw:flex tw:justify-between">
            <span className="tw:text-(--muted)">{k}</span>
            <b>{v}</b>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b className="tw:text-[15px]">{c.title}</b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tw:items-center tw:gap-2.5">
        {col(
          "Paid",
          "var(--gold)",
          [
            ["Leads", "Fast"],
            ["Cost", "Per click"],
            ["Role", "Test terms"],
          ],
          1,
        )}
        <span
          className="tw:grid tw:size-[78px] tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-center tw:text-white"
          style={inAt(3)}
        >
          <span>
            <b className="tw:block tw:text-[17px] tw:leading-none">
              {c.metrics[1]?.strong}
            </b>
            <span className="tw:text-[9px] tw:text-white/70">blended</span>
          </span>
        </span>
        {col(
          "Organic",
          "var(--green)",
          [
            ["Leads", "Lasting"],
            ["Cost", "Fixed"],
            ["Role", "Own the page"],
          ],
          2,
        )}
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]">
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

/** Radar: the before shape and the after shape on four axes. */
export function ScoreRadarUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  const r = 70;
  const cx0 = 110;
  const cy0 = 96;
  const pts = (key: "before" | "after") =>
    rows
      .slice(0, 4)
      .map((row, i) => {
        const a = (Math.PI / 2) * i - Math.PI / 2;
        const d = (row[key] / 100) * r;
        return `${cx0 + d * Math.cos(a)},${cy0 + d * Math.sin(a)}`;
      })
      .join(" ");
  const axis = [
    [cx0, cy0 - r - 10, "middle"],
    [cx0 + r + 10, cy0 + 4, "start"],
    [cx0, cy0 + r + 16, "middle"],
    [cx0 - r - 10, cy0 + 4, "end"],
  ] as const;
  return (
    <div aria-hidden="true">
      <svg
        viewBox="0 0 220 196"
        className="tw:mx-auto tw:block tw:w-full tw:max-w-[300px] tw:overflow-visible"
      >
        {[0.33, 0.66, 1].map((f) => (
          <polygon
            key={f}
            points={`${cx0},${cy0 - r * f} ${cx0 + r * f},${cy0} ${cx0},${cy0 + r * f} ${cx0 - r * f},${cy0}`}
            fill="none"
            stroke="#e3e9f2"
          />
        ))}
        <polygon
          points={pts("before")}
          fill="rgba(148,163,184,0.25)"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <polygon
          points={pts("after")}
          fill="rgba(37,103,232,0.18)"
          stroke="var(--blue)"
          strokeWidth="2"
          style={inAt(2)}
        />
        {rows.slice(0, 4).map((row, i) => (
          <text
            key={row.label}
            x={axis[i][0]}
            y={axis[i][1]}
            textAnchor={axis[i][2]}
            className="tw:fill-(--ink-2) tw:text-[9px] tw:font-medium"
          >
            {row.label}
          </text>
        ))}
      </svg>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-5 tw:gap-y-2 tw:text-[13px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:size-3 tw:rounded-[3px] tw:bg-[#94a3b8]/60" />{" "}
          Example: starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:size-3 tw:rounded-[3px] tw:bg-(--blue)" />{" "}
          Example: goal
        </span>
      </p>
    </div>
  );
}
