import type { CSSProperties, ReactNode } from "react";
import {
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCreditCard,
  FiImage,
  FiMessageSquare,
  FiSearch,
  FiShield,
  FiStar,
  FiSun,
  FiTool,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import { CARD, Flip, Slot, inAt, run } from "@/components/rd/delaware/uiBits";

/* UI for the industries hub redesign (23 Oct 2026); none of it appears on
   another page. Feature panels (top search by trade, trust signals, season
   plan), the four process steps, the playbook phone and the playbook
   library on the dark card. Illustrations only: no client figures. */

/* ------------------------------------------------------ feature panels */

const INTENT: [string, string, string, string][] = [
  ["Roofing", "roof leak repair near me", "Storm season", "#c2410c"],
  ["HVAC", "ac not cooling", "First heat wave", "#2567e8"],
  ["Dental", "emergency dentist open now", "All year", "#0d9488"],
  ["Law firm", "car accident lawyer", "All year", "#5b3df5"],
];

/** The search that brings each trade its best customers, and when. */
export function IntentByTradeUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSearch />}
        title="What your customers search"
        right={<Chip tone="blue">By industry</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {INTENT.map(([trade, query, when, color], i) => (
          <li
            key={trade}
            className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
              <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-semibold">
                <i
                  className="tw:block tw:size-2.5 tw:rounded-full"
                  style={{ background: color }}
                />
                {trade}
              </span>
              <Chip tone="muted">{when}</Chip>
            </span>
            <span className="tw:mt-1.5 tw:flex tw:items-center tw:gap-1.5 tw:text-[12.5px] tw:text-(--ink-2)">
              <FiSearch className="tw:size-3 tw:flex-none tw:text-(--muted)" />
              &ldquo;{query}&rdquo;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BADGES: [string, ReactNode][] = [
  ["Licensed & insured", <FiShield key="s" />],
  ["Financing available", <FiCreditCard key="c" />],
  ["Same-day service", <FiClock key="t" />],
  ["Rated 5.0 on Google", <FiStar key="r" />],
];

/** A trade website hero gaining the trust badges its buyers look for. */
export function TrustSignalsUi() {
  return (
    <div className={CARD}>
      <div className="tw:rounded-[14px] tw:bg-(--ink) tw:p-4 tw:text-white">
        <span className="tw:text-[10.5px] tw:font-semibold tw:tracking-[0.12em] tw:text-white/60 tw:uppercase">
          Your Business · Roofing
        </span>
        <b className="tw:mt-1.5 tw:block tw:text-[16px]/[1.25] tw:font-medium">
          Roof repair and replacement, done right the first time
        </b>
        <span className="tw:mt-3 tw:inline-block tw:rounded-full tw:bg-(--gold) tw:px-3.5 tw:py-1.5 tw:text-[11.5px] tw:font-semibold tw:text-(--ink)">
          Get a free estimate
        </span>
      </div>
      <p className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-semibold">
        Trust signals for roofing
        <Flip
          n={3}
          from={<Chip tone="amber">2 of 4</Chip>}
          to={<Chip tone="green">4 of 4</Chip>}
        />
      </p>
      <ul className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-1.5">
        {BADGES.map(([t, icon], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-2.5 tw:py-2 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span
              className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:text-white"
              style={{ background: "var(--green)", ...run(`de-dot-${i + 1}`) }}
            >
              {icon}
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const PLAN = [30, 34, 58, 82, 90, 70, 52, 48, 64, 76, 44, 30];

/** A year of budget for a storm-driven trade: peaks pushed, quiet months
    spent on SEO and reviews. */
export function SeasonPlanUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        tone="green"
        title="Season plan · Roofing"
        right={<Chip tone="green">Planned</Chip>}
      />
      <div className="tw:mt-5 tw:flex tw:h-[120px] tw:items-end tw:gap-1.5 tw:border-b tw:border-(--line)">
        {PLAN.map((h, i) => (
          <i
            key={i}
            className="tw:block tw:flex-1 tw:rounded-t-[5px]"
            style={
              {
                "--h": `${h}%`,
                height: `${h}%`,
                background: h >= 70 ? "#c2410c" : "#fdba74",
                ...run("de-rise"),
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="tw:mt-1.5 tw:flex tw:gap-1.5 tw:text-center tw:text-[10px] tw:font-medium tw:text-(--muted)">
        {MONTHS.map((m, i) => (
          <span key={i} className="tw:flex-1">
            {m}
          </span>
        ))}
      </div>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-x-4 tw:gap-y-1 tw:text-[11.5px]">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[3px] tw:bg-[#c2410c]" />{" "}
          Storm season: ads push harder
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[3px] tw:bg-[#fdba74]" />{" "}
          Quiet months: SEO and reviews
        </span>
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const BENCH: [string, number, string][] = [
  ["Top competitor", 92, "#c2410c"],
  ["Your Business", 46, "var(--blue)"],
  ["Market average", 58, "#cbd5e1"],
];

const WORDS: [string, number][] = [
  ["Same-day", 22],
  ["Licensed", 15],
  ["Financing", 18],
  ["Warranty", 13],
  ["Free estimate", 20],
  ["Local crew", 12],
];

const ASSETS = [
  "Service page",
  "Google post",
  "Search ad",
  "Town page",
  "Review reply",
  "Photo set",
];

type Step = { tag: string; title: string };

/** Industries hub process UIs. */
export function industriesStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3] = steps;
  return [
    <Slot key="in-bench">
      <UiHead
        icon={<FiBarChart2 />}
        title="Map Pack strength in your niche"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-2.5">
        {BENCH.map(([who, w, color], i) => (
          <li key={who} style={inAt(i + 1)}>
            <span className="tw:text-[11.5px] tw:font-semibold">{who}</span>
            <span className="tw:mt-1 tw:block tw:h-2.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <i
                className="tw:block tw:h-full tw:rounded-full"
                style={
                  {
                    "--w": `${w}%`,
                    width: `${w}%`,
                    background: color,
                    ...run("de-fill"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="in-words">
      <UiHead
        icon={<FiMessageSquare />}
        tone="gold"
        title="What your buyers care about"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1.5 tw:rounded-[12px] tw:bg-(--panel) tw:p-3">
        {WORDS.map(([w, size], i) => (
          <span
            key={w}
            className="tw:font-semibold tw:leading-tight"
            style={{
              fontSize: size,
              color: i % 2 ? "var(--ink-2)" : "var(--blue)",
              ...inAt(i + 1),
            }}
          >
            {w}
          </span>
        ))}
      </div>
    </Slot>,

    <Slot key="in-assets">
      <UiHead
        icon={<FiImage />}
        tone="green"
        title="Built for your trade"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-3 tw:gap-1.5">
        {ASSETS.map((t, i) => (
          <li
            key={t}
            className="tw:rounded-[10px] tw:bg-(--panel) tw:p-2"
            style={inAt(i + 1)}
          >
            <i className="tw:block tw:h-6 tw:rounded-[6px] tw:bg-white" />
            <span className="tw:mt-1.5 tw:flex tw:items-center tw:justify-between tw:gap-1 tw:text-[10px] tw:font-semibold">
              <span className="tw:truncate">{t}</span>
              <FiCheck className="tw:size-3 tw:flex-none tw:text-(--green)" />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="in-season">
      <UiHead
        icon={<FiSun />}
        title="Season ahead"
        right={<Chip tone="amber">Peak in 6 weeks</Chip>}
      />
      <div className="tw:grid tw:grid-cols-7 tw:gap-1 tw:text-center tw:text-[10px] tw:font-semibold tw:text-(--muted)">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        {Array.from({ length: 21 }, (_, i) => (
          <i
            key={i}
            className="tw:block tw:h-5 tw:rounded-[5px]"
            style={
              i >= 14
                ? { background: "#fdba74", ...run(`de-dot-${(i % 5) + 1}`) }
                : { background: "#f1f4f9" }
            }
          />
        ))}
      </div>
      <p className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-medium">
        <FiCheck className="tw:size-3.5 tw:text-(--green)" /> Ads, posts and
        offers ready before the rush
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const PLAYBOOK = [
  "Storm-damage and repair pages",
  "Map Pack for every town served",
  "Financing on every estimate page",
  "Review requests after each job",
  "Ads ready before storm season",
];

/** A roofing playbook on a phone, items ticking off.
    Decorative (frame aria-hidden). */
export function PlaybookPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-[#fff1e6] tw:p-3">
          <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-[12px] tw:bg-[#c2410c] tw:text-[18px] tw:text-white">
            <FiTool />
          </span>
          <span className="tw:leading-tight">
            <span className="tw:block tw:text-[10px] tw:font-semibold tw:tracking-[0.12em] tw:text-[#9a3412] tw:uppercase">
              Your playbook
            </span>
            <b className="tw:text-[15px]">Roofing</b>
          </span>
        </div>
        <ul className="tw:mt-3 tw:grid tw:gap-1.5">
          {PLAYBOOK.map((t, i) => (
            <li
              key={t}
              className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-2 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 1)}
            >
              <i
                className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:text-white"
                style={{
                  background: "var(--green)",
                  ...run(`de-dot-${Math.min(i + 1, 5)}`),
                }}
              >
                <FiCheck />
              </i>
              {t}
            </li>
          ))}
        </ul>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiAward className="tw:size-3.5" /> Playbook ready to launch
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const LIBRARY: [string, string][] = [
  ["Repair & Installation", "9 trades"],
  ["Remodeling & Construction", "6 trades"],
  ["Outdoor & Property Care", "4 trades"],
  ["Health & Medical", "3 practices"],
  ["Professional Services", "4 fields"],
];

/** The playbook library: groups with their counts, plus three facts.
    Decorative. */
export function PlaybookLibraryUi({
  facts,
}: {
  facts: { strong: string; label: string }[];
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
          <FiBookOpen className="tw:text-(--blue)" /> Playbook library
        </b>
        <Chip tone="green">Up to date</Chip>
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {LIBRARY.map(([g, n], i) => (
          <li
            key={g}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {g}
            <span className="tw:text-[11.5px] tw:text-(--muted)">{n}</span>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {facts.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-[#fff1e6] tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-[#9a3412]">
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
