import type { CSSProperties, ReactNode } from "react";
import {
  FiAlertTriangle,
  FiBarChart2,
  FiChevronDown,
  FiEdit3,
  FiFileText,
  FiLink2,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { GoogleG, PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";

/* UI for the Philadelphia SEO draft only (23 Oct 2026); none of it appears
   on another page. Feature panels (neighborhood pages getting indexed, new
   local links, Search Console growth), the four process steps, the organic
   results phone, the visibility race on the dark card and the scorecard
   table. Illustrations: "Your Business". */

/* ------------------------------------------------------ feature panels */

const PAGES: [string, string][] = [
  ["/plumber/fishtown", "#3"],
  ["/plumber/manayunk", "#2"],
  ["/plumber/south-philly", "#4"],
  ["/plumber/university-city", "#1"],
];

/** Neighborhood pages moving from draft to indexed and ranking. */
export function NeighborhoodPagesUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiFileText />}
        title="Neighborhood pages"
        right={<Chip tone="blue">yourbusiness.com</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {PAGES.map(([url, pos], i) => (
          <li
            key={url}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-[12.5px]"
          >
            <span className="tw:min-w-0 tw:truncate tw:font-medium">{url}</span>
            <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1.5">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">Draft</Chip>}
                to={<Chip tone="green">Indexed</Chip>}
              />
              <span
                className="tw:w-8 tw:text-right tw:font-semibold tw:text-(--blue)"
                style={run("de-late")}
              >
                {pos}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        One page per service and neighborhood, each with its own target search.
      </p>
    </div>
  );
}

const LINKS = [
  "Neighborhood news site",
  "Local business association",
  "Industry directory",
  "Community event sponsor page",
];

/** Authority climbing as local links are earned. */
export function BacklinksUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiLink2 />}
        tone="gold"
        title="Local link building"
        right={<Chip tone="green">+4 this month</Chip>}
      />
      <div className="tw:mt-4">
        <span className="tw:flex tw:justify-between tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
          Site authority
          <Flip
            n={3}
            from={<span>Low</span>}
            to={<span className="tw:text-[#1f7a3a]">Growing</span>}
          />
        </span>
        <span className="tw:mt-1.5 tw:grid tw:grid-cols-10 tw:gap-1">
          {Array.from({ length: 10 }, (_, i) => (
            <i
              key={i}
              className="tw:block tw:h-2.5 tw:rounded-full"
              style={
                i < 3
                  ? { background: "var(--blue)" }
                  : i < 6
                    ? { background: "var(--blue)", ...run(`de-dot-${i - 2}`) }
                    : { background: "#dfe5ee" }
              }
            />
          ))}
        </span>
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {LINKS.map((l, i) => (
          <li
            key={l}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <FiLink2 className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
            {l}
            <Chip tone="green" className="tw:ml-auto">
              Earned
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Six months of Search Console clicks and impressions, plus top queries. */
export function SearchConsoleUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="Search Console · 6 months"
        right={<Chip tone="green">Rising</Chip>}
      />
      <svg
        viewBox="0 0 300 110"
        className="tw:mt-3 tw:block tw:h-[110px] tw:w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[28, 56, 84].map((y) => (
          <line
            key={y}
            x1="0"
            x2="300"
            y1={y}
            y2={y}
            stroke="#eef2f7"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path
          d="M0 92 C40 88 70 80 110 70 S180 48 220 36 S270 18 300 12"
          fill="none"
          strokeWidth="2.5"
          pathLength={1}
          strokeDasharray="1"
          style={{ stroke: "#9b8cf2", ...run("de-draw") }}
        />
        <path
          d="M0 102 C50 100 80 96 120 88 S190 70 230 58 S275 44 300 38"
          fill="none"
          strokeWidth="2.5"
          pathLength={1}
          strokeDasharray="1"
          style={{ stroke: "var(--blue)", ...run("de-draw") }}
        />
      </svg>
      <p className="tw:mt-2 tw:flex tw:gap-4 tw:text-[11.5px]">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-1 tw:w-4 tw:rounded-full tw:bg-[#9b8cf2]" />{" "}
          Impressions
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-1 tw:w-4 tw:rounded-full tw:bg-(--blue)" />{" "}
          Clicks
        </span>
      </p>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {["plumber near me", "emergency plumber philadelphia"].map((q, i) => (
          <li
            key={q}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px]"
            style={inAt(i + 4)}
          >
            <FiSearch className="tw:size-3 tw:text-(--muted)" />
            {q}
            <span className="tw:ml-auto tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]">
              Top query
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const ISSUES: [string, number, number, "red" | "amber" | "blue"][] = [
  ["Errors", 38, 0, "red"],
  ["Warnings", 112, 9, "amber"],
  ["Notices", 240, 31, "blue"],
];

const CLUSTERS: [string, string[]][] = [
  ["Emergency plumber", ["Fishtown", "Manayunk", "Roxborough"]],
  ["Water heater repair", ["South Philly", "Queen Village"]],
  ["Drain cleaning", ["University City", "Old City"]],
];

const QUEUE: [string, number][] = [
  ["Fishtown service page", 3],
  ["Water heater guide", 3],
  ["Manayunk service page", 2],
  ["Drain cleaning FAQ", 1],
];

const BUCKETS: [string, number, number][] = [
  ["Top 3", 12, 46],
  ["4–10", 22, 30],
  ["11–20", 30, 16],
  ["21+", 36, 8],
];

/** Philadelphia SEO process UIs. */
export function phlSeoStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="ps-issues">
      <UiHead
        icon={<FiAlertTriangle />}
        title="Technical audit"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">Found</Chip>}
            to={<Chip tone="green">Fixed</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:grid-cols-3 tw:gap-1.5">
        {ISSUES.map(([k, from, to, tone], i) => (
          <li
            key={k}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-2 tw:py-3 tw:text-center"
            style={inAt(i + 1)}
          >
            <Flip
              n={((i % 3) + 1) as 1 | 2 | 3}
              from={<b className="tw:text-[22px] tw:leading-none">{from}</b>}
              to={
                <b className="tw:text-[22px] tw:leading-none tw:text-[#1f7a3a]">
                  {to}
                </b>
              }
            />
            <span className="tw:mt-1 tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">
              {k}
            </span>
            <Chip tone={tone} className="tw:mt-1.5">
              {k === "Errors"
                ? "Critical"
                : k === "Warnings"
                  ? "Check"
                  : "Minor"}
            </Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ps-clusters">
      <UiHead
        icon={<FiSearch />}
        tone="gold"
        title="Keyword map"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {CLUSTERS.map(([head, hoods], i) => (
          <li
            key={head}
            className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2"
            style={inAt(i + 1)}
          >
            <b className="tw:block tw:text-[12px]">{head}</b>
            <span className="tw:mt-1 tw:flex tw:flex-wrap tw:gap-1">
              {hoods.map((h) => (
                <Chip key={h} tone="blue">
                  {h}
                </Chip>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ps-queue">
      <UiHead
        icon={<FiEdit3 />}
        tone="green"
        title="Content queue"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {QUEUE.map(([t, stage], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {t}
            <span className="tw:ml-auto tw:flex tw:gap-1" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <i
                  key={n}
                  className="tw:block tw:h-1.5 tw:w-4 tw:rounded-full"
                  style={{
                    background:
                      n <= stage
                        ? stage === 3
                          ? "var(--green)"
                          : "var(--gold)"
                        : "#dfe5ee",
                  }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:flex tw:gap-3 tw:text-[10.5px] tw:text-(--muted)">
        <span>Draft</span>
        <span>Review</span>
        <span>Live</span>
      </p>
    </Slot>,

    <Slot key="ps-buckets">
      <UiHead
        icon={<FiBarChart2 />}
        title="Keyword positions"
        right={<Chip tone="green">Moving up</Chip>}
      />
      <div className="tw:flex tw:h-[110px] tw:items-end tw:gap-3 tw:border-b tw:border-(--line) tw:px-1">
        {BUCKETS.map(([label, before, now]) => (
          <span
            key={label}
            className="tw:relative tw:flex tw:h-full tw:flex-1 tw:items-end tw:justify-center tw:gap-1"
          >
            <i
              className="tw:block tw:w-1/3 tw:rounded-t-[4px] tw:bg-[#dfe5ee]"
              style={{ height: `${before * 2}%` }}
            />
            <i
              className="tw:block tw:w-1/3 tw:rounded-t-[4px] tw:bg-(--blue)"
              style={
                {
                  "--h": `${now * 2}%`,
                  height: `${now * 2}%`,
                  ...run("de-rise"),
                } as CSSProperties
              }
            />
          </span>
        ))}
      </div>
      <div className="tw:flex tw:gap-3 tw:px-1 tw:text-center tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
        {BUCKETS.map(([label]) => (
          <span key={label} className="tw:flex-1">
            {label}
          </span>
        ))}
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A mobile Google results page with the business's organic listing:
    sitelinks, rating and FAQ answers. Decorative (frame aria-hidden). */
export function OrganicSerpPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:[box-shadow:0_2px_8px_rgba(12,21,38,0.06)]">
          <GoogleG className="tw:size-4 tw:flex-none" />
          plumber fishtown philadelphia
        </div>
        <p className="tw:mt-3 tw:flex tw:gap-3 tw:border-b tw:border-(--line) tw:text-[11px] tw:font-semibold tw:text-(--muted)">
          <span className="tw:border-b-2 tw:border-(--ink) tw:pb-1.5 tw:text-(--ink)">
            All
          </span>
          <span>Maps</span>
          <span>Images</span>
          <span>News</span>
        </p>
        <div
          className="tw:mt-3 tw:rounded-[14px] tw:border-[1.5px] tw:border-(--blue)/40 tw:p-3"
          style={inAt(1)}
        >
          <span className="tw:flex tw:items-center tw:gap-2">
            <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[9px] tw:font-bold tw:text-(--blue)">
              YB
            </span>
            <span className="tw:leading-tight">
              <b className="tw:block tw:text-[11px]">Your Business</b>
              <span className="tw:text-[9.5px] tw:text-(--muted)">
                yourbusiness.com › fishtown
              </span>
            </span>
          </span>
          <b className="tw:mt-1.5 tw:block tw:text-[13.5px]/[1.3] tw:text-[#1a0dab]">
            Plumber in Fishtown, Philadelphia · Same-Day Service
          </b>
          <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1 tw:text-[10px] tw:text-(--muted)">
            <span className="tw:text-[#f4b400]">★★★★★</span> Rating 5.0 · 120
            reviews
          </span>
          <span className="tw:mt-2 tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[10.5px] tw:font-medium tw:text-[#1a0dab]">
            {["Services", "Reviews", "Service area", "Contact"].map((s) => (
              <span
                key={s}
                className="tw:rounded-[8px] tw:bg-(--panel) tw:px-2 tw:py-1"
              >
                {s}
              </span>
            ))}
          </span>
        </div>
        <ul className="tw:mt-3 tw:grid tw:divide-y tw:divide-(--line) tw:rounded-[14px] tw:border tw:border-(--line) tw:text-[11px] tw:font-medium">
          {[
            "Do you offer same-day service in Fishtown?",
            "How much is an emergency call-out?",
            "Are you licensed in Philadelphia?",
          ].map((q, i) => (
            <li
              key={q}
              className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:px-3 tw:py-2"
              style={inAt(i + 2)}
            >
              {q}
              <FiChevronDown className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
            </li>
          ))}
        </ul>
        <span
          className="tw:mt-3 tw:block tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-center tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          #1 organic result for this search
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/** Search visibility race: your line climbing past two competitors, with
    the console's three numbers. Decorative. */
export function VisibilityRaceUi({
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
        <b className="tw:text-[15px]">Search visibility</b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <svg
        viewBox="0 0 300 130"
        className="tw:mt-4 tw:block tw:h-[130px] tw:w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50 C60 48 120 52 180 50 S260 54 300 52"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 70 C60 66 120 72 180 68 S260 70 300 66"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 118 C50 112 90 100 130 82 S200 46 240 30 S280 16 300 12"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          style={{ stroke: "var(--blue)", ...run("de-draw") }}
        />
      </svg>
      <p className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-3 tw:text-[11.5px]">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-1 tw:w-4 tw:rounded-full tw:bg-(--blue)" />{" "}
          Your Business
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-1 tw:w-4 tw:rounded-full tw:bg-[#cbd5e1]" />{" "}
          Competitor A
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-1 tw:w-4 tw:rounded-full tw:bg-[#e2e8f0]" />{" "}
          Competitor B
        </span>
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-(--blue)">
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

/** Before / now / change as a compact table. */
export function ScoreTableUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <table
      className="tw:w-full tw:border-collapse tw:text-left tw:text-[13.5px]"
      aria-hidden="true"
    >
      <thead className="tw:text-[11px] tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
        <tr>
          <th className="tw:pb-2 tw:font-semibold">Signal</th>
          <th className="tw:pb-2 tw:text-right tw:font-semibold">Before</th>
          <th className="tw:pb-2 tw:text-right tw:font-semibold">Now</th>
          <th className="tw:pb-2 tw:text-right tw:font-semibold">Change</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="tw:border-t tw:border-(--line)">
            <td className="tw:py-2.5 tw:pr-2 tw:font-medium">{row.label}</td>
            <td className="tw:py-2.5 tw:text-right tw:text-(--muted)">
              {row.before}%
            </td>
            <td className="tw:py-2.5 tw:text-right tw:font-semibold">
              {row.after}%
            </td>
            <td className="tw:py-2.5 tw:text-right tw:font-semibold tw:text-[#1f7a3a]">
              ▲ {row.after - row.before}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
