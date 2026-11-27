import type { IconType } from "react-icons";
import { BsBing } from "react-icons/bs";
import {
  FiAward,
  FiBarChart2,
  FiCheck,
  FiCheckCircle,
  FiCheckSquare,
  FiFileText,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiMessageSquare,
  FiMinus,
  FiRepeat,
  FiSearch,
  FiStar,
  FiUnlock,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { LuQuote, LuSplit } from "react-icons/lu";
import { SiGoogleanalytics, SiGooglesearchconsole } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { COMPARE, ENGINES, REPORT, WHAT, type ServiceCard } from "./content";
import { ENGINE_LIST } from "./engines";

/* GEO page UI pieces (26 Nov 2026). Server-rendered; the loops are CSS
   only (geo.css), so the text is in the HTML from the first byte and the
   shared AnimationGate pauses them off screen. Examples carry no figures
   and no real company names. */

export const SERVICE_ICONS: Record<ServiceCard["icon"], IconType> = {
  prompts: FiMessageSquare,
  facts: FiCheckSquare,
  lists: FiAward,
  pages: FiFileText,
  access: FiUnlock,
  tracking: FiBarChart2,
};

const delay = (s: number) => ({ animationDelay: `${s}s` });

const SOURCE_ICONS = [FiGlobe, FiMapPin, FiStar];

/** "What is GEO" as a bento grid (owner, 27 Nov 2026: same words, bento
    layout). The definition sits on the dark tile, each fact gets its own
    tile, and query fan-out is drawn as a tree: the question branches into
    searches and sources, which meet again in the answer. A highlight walks
    the four steps; the grid areas per breakpoint live in geo.css. */
const FACT_ICONS = [FiSearch, LuSplit, LuQuote];

const FACT_TONES = [
  { tile: "tw:bg-(--panel)", icon: "tw:bg-white tw:text-(--blue)", title: "tw:text-(--ink)", body: "tw:text-(--text)", source: "tw:text-(--muted)" },
  { tile: "tw:bg-(--blue) tw:text-white", icon: "tw:bg-white/15 tw:text-white", title: "tw:text-white", body: "tw:text-white", source: "tw:text-white/80" },
  { tile: "tw:bg-(--panel)", icon: "tw:bg-white tw:text-(--blue)", title: "tw:text-(--ink)", body: "tw:text-(--text)", source: "tw:text-(--muted)" },
];

const TILE = "tw:rounded-[28px] tw:p-7 tw:max-bssm:rounded-3xl tw:max-bssm:p-5";

export function WhatBento() {
  const f = WHAT.fanout;
  const [lead, ...rest] = f.answer.split("Your Company");
  const tail = rest.join("Your Company");
  const cut = tail.lastIndexOf(" ") + 1;
  const step = (i: number) => ({ animationDelay: `${i * 2 - 8}s` });

  return (
    <div className="geo-bento">
      {/* The definition */}
      <div
        className={cx(
          TILE,
          "tw:flex tw:flex-col tw:justify-between tw:gap-10 tw:bg-(--ink) tw:bg-[radial-gradient(circle_at_100%_0%,rgba(37,103,232,0.42),transparent_55%)] tw:text-white tw:max-bssm:gap-7",
        )}
        style={{ gridArea: "def" }}
      >
        <span className="tw:flex" aria-hidden="true">
          {ENGINE_LIST.map((e, i) => {
            const Icon = e.icon;
            return (
              <span
                key={e.name}
                className={cx(
                  "tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white tw:ring-4 tw:ring-(--ink)",
                  i > 0 && "tw:-ml-2",
                )}
                style={{ color: e.color }}
              >
                <Icon className="tw:size-5" />
              </span>
            );
          })}
        </span>
        <p className="tw:text-[clamp(19px,1.55vw,23px)]/[1.55] tw:text-white">{WHAT.answer}</p>
      </div>

      {/* The three facts */}
      {WHAT.facts.map((fact, i) => {
        const Icon = FACT_ICONS[i];
        const tone = FACT_TONES[i];
        return (
          <div key={fact.title} className={cx(TILE, "tw:flex tw:flex-col tw:gap-6", tone.tile)} style={{ gridArea: `f${i + 1}` }}>
            <span className={cx("tw:grid tw:size-11 tw:place-items-center tw:rounded-xl", tone.icon)} aria-hidden="true">
              <Icon className="tw:size-5" />
            </span>
            <div>
              <h3 className={cx("tw:text-[20px]/[1.3] tw:font-medium", tone.title)}>{fact.title}</h3>
              <p className={cx("tw:mt-2 tw:text-[16.5px]/[1.6]", tone.body)}>{fact.body}</p>
            </div>
            <p className={cx("tw:mt-auto tw:text-[14.5px] tw:font-medium", tone.source)}>Source: {fact.source}</p>
          </div>
        );
      })}

      {/* Query fan-out */}
      <figure className={cx(TILE, "geo-flow tw:m-0 tw:flex tw:flex-col tw:bg-(--blue-soft)")} style={{ gridArea: "flow" }}>
        <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
          <p className="tw:text-[17px] tw:font-semibold tw:text-(--ink)">{f.title}</p>
          <span className="tw:flex-none tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[12px] tw:font-medium tw:text-(--muted)">
            Example
          </span>
        </div>

        <ol className="geo-fan tw:mt-5 tw:grid tw:gap-3 tw:bsmd:grid-cols-2 tw:bsmd:gap-x-4 tw:bsmd:gap-y-7">
          {f.steps.map((label, i) => (
            <li
              key={label}
              className={cx("geo-card tw:relative tw:rounded-2xl tw:bg-white tw:p-4", (i === 0 || i === 3) && "tw:bsmd:col-span-2")}
              style={step(i)}
            >
              <p className="tw:flex tw:items-center tw:gap-3">
                <span
                  className="geo-step tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[12.5px] tw:font-semibold tw:text-white"
                  style={step(i)}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="tw:text-[12.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">{label}</span>
              </p>

              {i === 0 && (
                <p className="tw:mt-3 tw:w-fit tw:max-w-full tw:rounded-2xl tw:rounded-tl-md tw:bg-(--ink) tw:px-4 tw:py-2.5 tw:text-[15px]/[1.45] tw:text-white">
                  {f.question}
                </p>
              )}

              {i === 1 && (
                <ul className="tw:mt-3 tw:flex tw:flex-col tw:items-start tw:gap-2">
                  {f.searches.map((q) => (
                    <li key={q} className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[14px] tw:text-(--ink-2)">
                      <FiSearch aria-hidden="true" className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
                      {q}
                    </li>
                  ))}
                </ul>
              )}

              {i === 2 && (
                <ul className="tw:mt-3 tw:grid tw:gap-2">
                  {f.sources.map((src, si) => {
                    const Icon = SOURCE_ICONS[si];
                    return (
                      <li key={src.label} className="tw:flex tw:items-center tw:gap-3 tw:rounded-xl tw:px-3 tw:py-2 tw:ring-1 tw:ring-(--line)">
                        <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-lg tw:bg-(--blue-soft) tw:text-(--blue)" aria-hidden="true">
                          <Icon className="tw:size-4" />
                        </span>
                        <span className="tw:min-w-0 tw:flex-1 tw:leading-tight">
                          <b className="tw:block tw:text-[14.5px] tw:font-medium tw:text-(--ink)">{src.label}</b>
                          <span className="tw:block tw:text-[12.5px] tw:text-(--muted)">{src.sub}</span>
                        </span>
                        <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[11.5px] tw:font-semibold tw:text-white">
                          {si + 1}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {i === 3 && (
                <div className="tw:mt-3">
                  <p className="tw:flex tw:items-center tw:gap-1.5 tw:text-[12.5px] tw:font-semibold tw:text-(--blue-dark)">
                    <HiSparkles aria-hidden="true" className="tw:size-4" />
                    AI answer
                  </p>
                  <p className="tw:mt-1.5 tw:text-[15px]/[1.55] tw:text-(--ink-2)">
                    {lead}
                    <mark className="tw:rounded-md tw:bg-(--blue-soft) tw:px-1 tw:font-semibold tw:whitespace-nowrap tw:text-(--ink)">Your Company</mark>
                    {tail.slice(0, cut)}
                    {/* Last word and its citations stay on one line */}
                    <span className="tw:whitespace-nowrap">
                      {tail.slice(cut)}
                      {f.sources.map((_, n) => (
                        <sup
                          key={n}
                          className="tw:ml-1 tw:inline-grid tw:size-[18px] tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:align-[2px] tw:text-[10.5px] tw:font-semibold tw:text-white"
                        >
                          {n + 1}
                        </sup>
                      ))}
                    </span>
                  </p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <figcaption className="tw:mt-auto tw:pt-5 tw:text-[14.5px] tw:text-(--text)">{f.caption}</figcaption>
      </figure>
    </div>
  );
}

/** Where each engine finds sources, as a table that scrolls sideways on
    small screens. */
export function EngineTable() {
  return (
    <div className="tw:overflow-x-auto tw:rounded-[28px] tw:bg-white tw:ring-1 tw:ring-(--line)">
      <table className="tw:w-full tw:min-w-[760px] tw:border-collapse tw:text-left">
        <thead>
          <tr className="tw:border-b tw:border-(--line) tw:bg-(--panel)">
            {ENGINES.columns.map((c) => (
              <th key={c} scope="col" className="tw:px-6 tw:py-4 tw:text-[15px] tw:font-semibold tw:text-(--ink)">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ENGINES.rows.map((r) => (
            <tr key={r.engine} className="tw:border-b tw:border-(--line) tw:last:border-b-0">
              <th scope="row" className="tw:px-6 tw:py-4 tw:align-top tw:text-[16px] tw:font-medium tw:text-(--ink)">
                <span className="tw:flex tw:items-center tw:gap-2.5">
                  <span className="tw:size-2.5 tw:flex-none tw:rounded-full" style={{ background: r.tone }} aria-hidden="true" />
                  {r.engine}
                </span>
              </th>
              <td className="tw:px-6 tw:py-4 tw:align-top tw:text-[16px]/[1.55] tw:text-(--text)">{r.where}</td>
              <td className="tw:px-6 tw:py-4 tw:align-top tw:text-[16px]/[1.55] tw:text-(--ink-2)">{r.check}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** SEO vs AEO vs GEO, with the GEO column picked out. */
export function CompareTable() {
  return (
    <div className="tw:overflow-x-auto tw:rounded-[28px] tw:bg-white tw:ring-1 tw:ring-(--line)">
      <table className="tw:w-full tw:min-w-[760px] tw:border-collapse tw:text-left">
        <thead>
          <tr className="tw:border-b tw:border-(--line)">
            {COMPARE.columns.map((c, i) => (
              <th
                key={c || "row"}
                scope="col"
                className={cx(
                  "tw:px-6 tw:py-4 tw:text-[16px] tw:font-semibold",
                  i === 3 ? "tw:bg-(--blue) tw:text-white" : "tw:text-(--ink)",
                )}
              >
                {c ? c : <span className="tw:sr-only">Compare</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE.rows.map(([label, seo, aeo, geo]) => (
            <tr key={label} className="tw:border-b tw:border-(--line) tw:last:border-b-0">
              <th scope="row" className="tw:w-[18%] tw:px-6 tw:py-4 tw:align-top tw:text-[16px] tw:font-medium tw:text-(--ink)">
                {label}
              </th>
              <td className="tw:px-6 tw:py-4 tw:align-top tw:text-[16px]/[1.55] tw:text-(--text)">{seo}</td>
              <td className="tw:px-6 tw:py-4 tw:align-top tw:text-[16px]/[1.55] tw:text-(--text)">{aeo}</td>
              <td className="tw:bg-(--blue-soft) tw:px-6 tw:py-4 tw:align-top tw:text-[16px]/[1.55] tw:font-medium tw:text-(--ink)">{geo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ----------------------------------------------------------- step minis */

function MiniShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="geo-loop tw:mt-6 tw:rounded-[20px] tw:bg-(--panel) tw:p-4" aria-hidden="true">
      {children}
    </div>
  );
}

/** Step 1: buyer prompts, each tested on five engines. */
function PromptsMini() {
  const rows = ["best plumber near me", "same-day drain repair", "plumber with good reviews"];
  return (
    <MiniShell>
      <ul className="tw:grid tw:gap-2">
        {rows.map((r, ri) => (
          <li key={r} className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-xl tw:bg-white tw:px-3 tw:py-2">
            <span className="tw:truncate tw:text-[13.5px] tw:text-(--ink-2)">{r}</span>
            <span className="tw:flex tw:flex-none tw:gap-1">
              {ENGINE_LIST.map((e, ei) => (
                <span
                  key={e.name}
                  className="geo-dot tw:size-2.5 tw:rounded-full"
                  style={{ ["--geo-c" as string]: e.color, ...delay(0.3 + ri * 0.5 + ei * 0.12) }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </MiniShell>
  );
}

/** Step 2: profiles and access put right, one tick at a time. */
function FixMini() {
  const rows = ["Business Profile", "Bing Places", "Apple Business Connect", "robots.txt access"];
  return (
    <MiniShell>
      <ul className="tw:grid tw:gap-2">
        {rows.map((r, i) => (
          <li key={r} className="tw:flex tw:items-center tw:gap-2 tw:rounded-xl tw:bg-white tw:px-3 tw:py-2 tw:text-[13.5px] tw:text-(--ink-2)">
            <span className="geo-tick tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full" style={{ ["--geo-c" as string]: "var(--green)", ...delay(0.4 + i * 0.5) }}>
              <FiCheck className="tw:size-3 tw:[stroke-width:3.5]" />
            </span>
            <span className="tw:truncate">{r}</span>
          </li>
        ))}
      </ul>
    </MiniShell>
  );
}

/** Step 3: new sources go live and get cited. */
function SourcesMini() {
  const rows = ["Trade directory", "Review site", "Association", "Local roundup"];
  return (
    <MiniShell>
      <ul className="tw:flex tw:flex-wrap tw:gap-2">
        {rows.map((r, i) => (
          <li key={r} className="geo-in tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[13.5px] tw:font-medium tw:text-(--ink)" style={delay(0.3 + i * 0.45)}>
            <FiAward className="tw:size-3.5 tw:text-[#b7860b]" />
            {r}
          </li>
        ))}
      </ul>
      <p className="geo-in tw:mt-3 tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1.5 tw:text-[13px] tw:font-medium tw:text-white" style={delay(2.2)}>
        <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
        Cited in an AI answer
      </p>
    </MiniShell>
  );
}

/** Step 4: the monthly retest, one bar per engine, no figures. */
function TrendMini() {
  const heights = [62, 78, 48, 56, 70];
  return (
    <MiniShell>
      <div className="tw:flex tw:h-[86px] tw:items-end tw:gap-2.5">
        {ENGINE_LIST.map((e, i) => (
          <span key={e.name} className="tw:flex tw:h-full tw:flex-1 tw:flex-col tw:justify-end">
            <span
              className="geo-bar tw:block tw:rounded-t-lg"
              style={{ height: `${heights[i]}%`, background: e.color, ...delay(0.3 + i * 0.25) }}
            />
          </span>
        ))}
      </div>
      <p className="tw:mt-2 tw:flex tw:gap-2.5">
        {ENGINE_LIST.map((e) => {
          const Icon = e.icon;
          return (
            <span key={e.name} className="tw:flex tw:flex-1 tw:justify-center" title={e.name}>
              <Icon className="tw:size-3.5" style={{ color: e.color }} />
            </span>
          );
        })}
      </p>
    </MiniShell>
  );
}

export const STEP_MINIS = [PromptsMini, FixMini, SourcesMini, TrendMini];

/* ------------------------------------------------------------- report */

type Status = 0 | 1 | 2;

const STATUS: Record<Status, { label: string; icon: IconType; cell: string }> = {
  2: { label: "Cited", icon: FiLink, cell: "tw:bg-(--blue) tw:text-white" },
  1: { label: "Named", icon: FiCheck, cell: "tw:bg-(--green-soft) tw:text-[#1f7a3a]" },
  0: { label: "Not yet", icon: FiMinus, cell: "tw:border tw:border-dashed tw:border-[#c3cddd] tw:bg-white tw:text-(--muted)" },
};

const LEGEND: Status[] = [2, 1, 0];

/** Monthly report card: prompts down the side, engines across the top,
    a status per cell, then a per-engine summary bar drawn from the same
    grid. Example layout only, no figures. Fills the column height so the
    list beside it never leaves a gap underneath. */
export function ReportBoard() {
  const b = REPORT.board;
  const engines = b.engines.map((name) => ENGINE_LIST.find((x) => x.name === name)!);
  const rows = b.prompts.length;
  return (
    <figure className="geo-report tw:m-0 tw:flex tw:h-full tw:flex-col tw:rounded-[28px] tw:bg-white tw:p-6 tw:ring-1 tw:ring-(--line) tw:shadow-[0_24px_48px_-30px_rgba(12,21,38,0.28)] tw:max-bssm:rounded-3xl tw:max-bssm:p-4">
      {/* Header */}
      <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3">
        <div className="tw:flex tw:items-center tw:gap-3">
          <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-xl tw:bg-(--ink) tw:text-white" aria-hidden="true">
            <FiBarChart2 className="tw:size-5" />
          </span>
          <span className="tw:leading-tight">
            <b className="tw:block tw:text-[16px] tw:font-semibold tw:text-(--ink)">{b.title}</b>
            <span className="tw:block tw:text-[13px] tw:text-(--muted)">{b.sub}</span>
          </span>
        </div>
        <ul className="tw:flex tw:flex-wrap tw:gap-3" aria-label="Legend">
          {LEGEND.map((k) => {
            const st = STATUS[k];
            const Icon = st.icon;
            return (
              <li key={k} className="tw:flex tw:items-center tw:gap-1.5 tw:text-[13px] tw:font-medium tw:text-(--ink-2)">
                <span className={cx("tw:grid tw:size-5 tw:place-items-center tw:rounded-md", st.cell)} aria-hidden="true">
                  <Icon className="tw:size-3 tw:[stroke-width:3]" />
                </span>
                {st.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Prompt × engine grid */}
      <div className="tw:mt-5 tw:overflow-x-auto">
        <table className="tw:w-full tw:min-w-[300px] tw:border-collapse tw:text-left">
          <thead>
            <tr className="tw:border-b tw:border-(--line)">
              <th scope="col" className="tw:pr-3 tw:pb-3 tw:text-[12.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
                Buyer prompt
              </th>
              {engines.map((e) => {
                const Icon = e.icon;
                return (
                  <th key={e.name} scope="col" className="tw:w-[13%] tw:px-1 tw:pb-3 tw:text-center tw:text-[12px] tw:font-medium tw:text-(--ink-2) tw:max-bssm:w-9 tw:max-bssm:px-0.5">
                    <span className="tw:mx-auto tw:mb-1.5 tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:max-bssm:mb-0 tw:max-bssm:size-7" style={{ background: e.soft, color: e.color }} aria-hidden="true">
                      <Icon className="tw:size-4" />
                    </span>
                    <span className="tw:max-bssm:sr-only">{e.name}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {b.prompts.map((p, pi) => (
              <tr key={p} className="tw:border-b tw:border-(--line) tw:last:border-b-0">
                <th scope="row" className="tw:py-3 tw:pr-3 tw:text-[14.5px] tw:font-normal tw:text-(--ink-2) tw:max-bssm:pr-2 tw:max-bssm:text-[14px]/[1.35]">
                  {p}
                </th>
                {(b.grid[pi] as Status[]).map((s, ei) => {
                  const st = STATUS[s];
                  const Icon = st.icon;
                  return (
                    <td key={ei} className="tw:px-1 tw:py-3 tw:text-center tw:max-bssm:px-0.5">
                      <span className={cx("tw:mx-auto tw:grid tw:size-8 tw:place-items-center tw:rounded-lg tw:max-bssm:size-7", st.cell)}>
                        <Icon aria-hidden="true" className="tw:size-3.5 tw:[stroke-width:3]" />
                        <span className="tw:sr-only">{st.label}</span>
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Per-engine summary, drawn from the grid above */}
      <div className="tw:mt-auto tw:pt-5">
        <div className="tw:rounded-2xl tw:bg-(--panel) tw:p-4">
          <p className="tw:text-[12.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
            Named across prompts, by engine
          </p>
          <ul className="tw:mt-3 tw:grid tw:gap-2.5">
            {engines.map((e, ei) => {
              const col = b.grid.map((r) => r[ei]);
              const cited = col.filter((v) => v === 2).length;
              const named = col.filter((v) => v === 1).length;
              return (
                <li key={e.name} className="tw:grid tw:grid-cols-[110px_minmax(0,1fr)] tw:items-center tw:gap-3 tw:max-bssm:grid-cols-[96px_minmax(0,1fr)]">
                  <span className="tw:text-[13px] tw:font-medium tw:text-(--ink-2)">{e.name}</span>
                  <span className="tw:flex tw:h-2.5 tw:overflow-hidden tw:rounded-full tw:bg-white" aria-hidden="true">
                    <span className="geo-grow tw:bg-(--blue)" style={{ width: `${(cited / rows) * 100}%`, ...delay(ei * 0.12) }} />
                    <span className="geo-grow tw:bg-[#8fd3a4]" style={{ width: `${(named / rows) * 100}%`, ...delay(0.2 + ei * 0.12) }} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <figcaption className="tw:mt-3 tw:text-[13.5px] tw:text-(--muted)">{b.caption}</figcaption>
      </div>
    </figure>
  );
}

export const REPORT_ICONS: Record<(typeof REPORT.items)[number]["icon"], IconType> = {
  runs: FiRepeat,
  gsc: SiGooglesearchconsole,
  bing: BsBing,
  ga4: SiGoogleanalytics,
  accuracy: FiCheckCircle,
};
