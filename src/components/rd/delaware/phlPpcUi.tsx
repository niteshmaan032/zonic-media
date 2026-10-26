import type { CSSProperties, ReactNode } from "react";
import {
  FiFilter,
  FiFolder,
  FiLayout,
  FiPhone,
  FiPhoneIncoming,
  FiPieChart,
  FiSliders,
  FiTag,
  FiTrendingDown,
} from "react-icons/fi";
import { SiGoogleads } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";

/* UI for the Philadelphia PPC draft only (23 Oct 2026); none of it appears
   on another page. Feature panels (account structure, search terms being
   blocked, landing page A/B test), the four process steps, the call-ad
   phone, the spend-vs-revenue board on the dark card and the bullet
   scorecard. Illustrations: "Your Business"; figures are examples. */

/* ------------------------------------------------------ feature panels */

const TREE: { name: string; groups: { g: string; kws: string[] }[] }[] = [
  {
    name: "Emergency services",
    groups: [
      { g: "Burst pipe", kws: ["[burst pipe repair]", '"emergency plumber"'] },
      { g: "No hot water", kws: ["[water heater repair]", '"no hot water"'] },
    ],
  },
];

/** A tight account: one campaign, themed ad groups, match types shown. */
export function AccountTreeUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<SiGoogleads />}
        tone="gold"
        title="Account structure"
        right={<Chip tone="green">Your account</Chip>}
      />
      {TREE.map((c) => (
        <div key={c.name} className="tw:mt-4">
          <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--ink) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-semibold tw:text-white">
            <FiFolder className="tw:size-3.5 tw:text-(--gold)" /> Campaign ·{" "}
            {c.name}
          </span>
          <ul className="tw:mt-2 tw:ml-4 tw:grid tw:gap-2 tw:border-l-2 tw:border-(--line) tw:pl-3">
            {c.groups.map((g, i) => (
              <li key={g.g} style={inAt(i * 2 + 1)}>
                <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold">
                  <FiTag className="tw:size-3.5 tw:text-(--blue)" /> Ad group ·{" "}
                  {g.g}
                </span>
                <span className="tw:mt-1 tw:flex tw:flex-wrap tw:gap-1">
                  {g.kws.map((k) => (
                    <span
                      key={k}
                      className="tw:rounded-[8px] tw:bg-(--panel) tw:px-2 tw:py-1 tw:font-mono tw:text-[10.5px]"
                    >
                      {k}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[10.5px] tw:text-(--muted)">
        <span>[exact]</span>
        <span>&quot;phrase&quot;</span>
        <span>· one theme per ad group</span>
      </p>
    </div>
  );
}

const TERMS: [string, "block" | "keep"][] = [
  ["plumber jobs hiring", "block"],
  ["emergency plumber near me", "keep"],
  ["diy pipe repair video", "block"],
  ["water heater repair philadelphia", "keep"],
  ["free plumbing advice", "block"],
];

/** The search terms report: waste blocked as negatives, buyers kept. */
export function SearchTermsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiFilter />}
        title="Search terms this week"
        right={<Chip tone="blue">Reviewed</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {TERMS.map(([t, action], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px]"
          >
            <span
              className={cx(
                "tw:min-w-0 tw:truncate tw:font-medium",
                action === "block" && "tw:text-(--muted)",
              )}
            >
              {t}
            </span>
            <span className="tw:ml-auto">
              {action === "block" ? (
                <Flip
                  n={((i % 3) + 1) as 1 | 2 | 3}
                  from={<Chip tone="amber">Spending</Chip>}
                  to={<Chip tone="red">Negative added</Chip>}
                />
              ) : (
                <Chip tone="green">Converting</Chip>
              )}
            </span>
          </li>
        ))}
      </ul>
      <p
        className="tw:mt-3 tw:rounded-[12px] tw:bg-(--ink) tw:px-3.5 tw:py-2.5 tw:text-[12px] tw:text-white"
        style={run("de-late")}
      >
        3 wasted searches blocked · budget kept for buyers
      </p>
    </div>
  );
}

/** Two landing page versions; the clearer one wins the test. */
export function AbTestUi() {
  const variant = (name: string, rate: string, win: boolean) => (
    <div
      className={cx(
        "tw:rounded-[14px] tw:border-[1.5px] tw:p-2.5",
        win ? "tw:border-(--green)" : "tw:border-(--line)",
      )}
    >
      <span className="tw:flex tw:items-center tw:justify-between tw:text-[11px] tw:font-semibold">
        Version {name}
        {win ? (
          <span style={run("de-late")}>
            <Chip tone="green">Winner</Chip>
          </span>
        ) : null}
      </span>
      <span className="tw:mt-2 tw:grid tw:gap-1 tw:rounded-[8px] tw:bg-(--panel) tw:p-2">
        <i className="tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#c9d3e3]" />
        <i className="tw:block tw:h-1.5 tw:w-3/5 tw:rounded-full tw:bg-[#c9d3e3]" />
        {win ? (
          <span className="tw:mt-1 tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-1 tw:text-[9.5px] tw:font-bold tw:text-white">
            <FiPhone className="tw:size-2.5" /> Call now
          </span>
        ) : (
          <span className="tw:mt-1 tw:grid tw:gap-1">
            {[0, 1, 2, 3, 4].map((n) => (
              <i
                key={n}
                className="tw:block tw:h-1.5 tw:rounded-full tw:bg-[#e2e8f0]"
              />
            ))}
          </span>
        )}
      </span>
      <b className="tw:mt-2 tw:block tw:text-[22px] tw:leading-none">{rate}</b>
      <span className="tw:text-[10.5px] tw:text-(--muted)">
        conversion rate
      </span>
    </div>
  );
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiLayout />}
        tone="green"
        title="Landing page test"
        right={<Chip tone="blue">2 weeks</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2.5">
        {variant("A · long form", "3.1%", false)}
        {variant("B · call first", "7.4%", true)}
      </div>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Example figures. Every campaign gets its own page, and we keep testing.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

/* Keyword, match type and search intent (owner, 25 Oct: no bids or other
   cost figures in example UIs). */
const KW: [string, "exact" | "phrase", string][] = [
  ["emergency plumber philadelphia", "exact", "Urgent"],
  ["water heater repair", "phrase", "Repair"],
  ["sewer line repair near me", "exact", "Local"],
];

const MODS: [string, number][] = [
  ["Mobile", 70],
  ["Center City radius", 62],
  ["Weekends", 38],
];

/** Philadelphia PPC process UIs. */
export function phlPpcStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="pp-waste">
      <UiHead
        icon={<FiPieChart />}
        title="Spend audit"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Auditing…</Chip>}
            to={<Chip tone="red">38% wasted</Chip>}
          />
        }
      />
      <div className="tw:flex tw:items-center tw:gap-4">
        <svg
          viewBox="0 0 42 42"
          className="tw:size-[100px] tw:flex-none tw:-rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="21"
            cy="21"
            r="15.9"
            fill="none"
            strokeWidth="7"
            stroke="var(--green)"
            strokeDasharray="62 38"
          />
          <circle
            cx="21"
            cy="21"
            r="15.9"
            fill="none"
            strokeWidth="7"
            stroke="var(--red)"
            strokeDasharray="38 62"
            strokeDashoffset="-62"
          />
        </svg>
        <ul className="tw:grid tw:gap-1.5 tw:text-[11.5px]">
          <li className="tw:flex tw:items-center tw:gap-2">
            <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--green)" />{" "}
            Clicks that converted
          </li>
          <li className="tw:flex tw:items-center tw:gap-2">
            <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--red)" />{" "}
            Wasted on wrong searches
          </li>
          <li className="tw:mt-1 tw:text-[10.5px] tw:text-(--muted)">
            Example account before we took over
          </li>
        </ul>
      </div>
    </Slot>,

    <Slot key="pp-match">
      <UiHead
        icon={<FiTag />}
        tone="gold"
        title="Keyword build"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {KW.map(([k, m, intent], i) => (
          <li
            key={k}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11.5px]"
            style={inAt(i + 1)}
          >
            <span className="tw:min-w-0 tw:truncate tw:font-medium">{k}</span>
            <span
              className={cx(
                "tw:ml-auto tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-bold",
                m === "exact"
                  ? "tw:bg-(--ink) tw:text-white"
                  : "tw:bg-(--gold) tw:text-(--ink)",
              )}
            >
              {m}
            </span>
            <span className="tw:w-14 tw:text-right tw:font-semibold tw:text-(--muted)">
              {intent}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:text-[10.5px] tw:text-(--muted)">
        Max CPC · example bids
      </p>
    </Slot>,

    <Slot key="pp-mods">
      <UiHead
        icon={<FiSliders />}
        tone="green"
        title="Bid adjustments"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-3">
        {MODS.map(([k, pos], i) => (
          <li key={k} className="tw:text-[11.5px]" style={inAt(i + 1)}>
            <span className="tw:flex tw:justify-between tw:font-medium">
              {k}
              <b
                className={pos >= 50 ? "tw:text-[#1f7a3a]" : "tw:text-(--red)"}
              >
                {pos >= 50
                  ? `+${Math.round((pos - 50) * 1.5)}%`
                  : `−${Math.round((50 - pos) * 0.8)}%`}
              </b>
            </span>
            <span className="tw:relative tw:mt-1.5 tw:block tw:h-1.5 tw:rounded-full tw:bg-(--panel)">
              <i className="tw:absolute tw:top-0 tw:left-1/2 tw:block tw:h-full tw:w-px tw:bg-[#c9d3e3]" />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:size-3.5 tw:-translate-1/2 tw:rounded-full tw:border-2 tw:border-white tw:bg-(--blue) tw:shadow"
                style={
                  {
                    "--b": "50%",
                    "--a": `${pos}%`,
                    left: `${pos}%`,
                    ...run("de-slide"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="pp-cpl">
      <UiHead
        icon={<FiTrendingDown />}
        title="Cost per lead"
        right={
          <span style={run("de-late")}>
            <Chip tone="green">Below target</Chip>
          </span>
        }
      />
      <svg
        viewBox="0 0 300 100"
        className="tw:block tw:h-[96px] tw:w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          x2="300"
          y1="62"
          y2="62"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 14 L50 22 L100 34 L150 48 L200 62 L250 72 L300 80"
          fill="none"
          strokeWidth="2.5"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          style={{ stroke: "var(--blue)", ...run("de-draw") }}
        />
      </svg>
      <p className="tw:flex tw:items-center tw:gap-3 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-0.5 tw:w-4 tw:bg-(--blue)" /> Cost per
          lead
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-0.5 tw:w-4 tw:border-t-2 tw:border-dashed tw:border-(--gold)" />{" "}
          Your target
        </span>
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A call ad on a phone search, then the incoming call it produces.
    Decorative (the frame is aria-hidden). */
export function CallAdPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <div className="tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px]">
          emergency plumber philadelphia
        </div>
        <div
          className="tw:mt-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3"
          style={inAt(1)}
        >
          <span className="tw:text-[10px]">
            <b>Sponsored</b> · yourbusiness.com
          </span>
          <b className="tw:mt-1 tw:block tw:text-[13.5px]/[1.3] tw:text-[#1a0dab]">
            24/7 Emergency Plumber · Philadelphia
          </b>
          <span className="tw:mt-1 tw:block tw:text-[10.5px] tw:text-(--muted)">
            Licensed · Upfront pricing · On site in 60 min
          </span>
          <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:py-2 tw:text-[12px] tw:font-semibold tw:text-white">
            <FiPhone className="tw:size-3.5" /> Call (215) 555-0148
          </span>
        </div>
        <div className="tw:mt-2 tw:grid tw:gap-1.5 tw:opacity-60">
          {[0, 1].map((n) => (
            <div
              key={n}
              className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5"
            >
              <i className="tw:block tw:h-1.5 tw:w-2/3 tw:rounded-full tw:bg-[#dfe5ee]" />
              <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-1/2 tw:rounded-full tw:bg-[#e8edf3]" />
            </div>
          ))}
        </div>
        <div
          className="tw:absolute tw:inset-x-2 tw:bottom-3 tw:rounded-[22px] tw:bg-(--ink) tw:px-4 tw:pt-4 tw:pb-3.5 tw:text-white tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:flex tw:items-center tw:gap-2 tw:text-[10.5px] tw:text-white/70">
            <FiPhoneIncoming className="tw:size-3" /> Incoming call · Google Ads
          </span>
          <b className="tw:mt-1 tw:block tw:text-[16px]">New customer</b>
          <span className="tw:text-[11px] tw:text-white/70">
            Searched &ldquo;emergency plumber philadelphia&rdquo;
          </span>
          <span className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[11.5px] tw:font-semibold">
            <span className="tw:rounded-full tw:bg-(--red) tw:py-1.5 tw:text-center">
              Decline
            </span>
            <span className="tw:rounded-full tw:bg-(--green) tw:py-1.5 tw:text-center">
              Answer
            </span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const ROAS: [number, number][] = [
  [40, 70],
  [42, 96],
  [44, 124],
  [44, 150],
  [46, 172],
  [46, 190],
];

/** Monthly ad spend against the revenue it brought in, with the console's
    three numbers. Decorative. */
export function RoasBoardUi({
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
        <b className="tw:text-[15px]">Spend vs. revenue</b>
        <Chip tone="green">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:flex tw:h-[140px] tw:items-end tw:gap-2.5 tw:border-b tw:border-(--line)">
        {ROAS.map(([spend, rev], i) => (
          <span
            key={i}
            className="tw:flex tw:h-full tw:flex-1 tw:items-end tw:gap-1"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:w-1/2 tw:rounded-t-[4px] tw:bg-[#cbd5e1]"
              style={{ height: `${spend / 2}%` }}
            />
            <i
              className="tw:block tw:w-1/2 tw:rounded-t-[4px] tw:bg-(--green)"
              style={{ height: `${rev / 2}%` }}
            />
          </span>
        ))}
      </div>
      <p className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-3 tw:text-[11.5px]">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[3px] tw:bg-[#cbd5e1]" />{" "}
          Ad spend
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[3px] tw:bg-(--green)" />{" "}
          Revenue from leads
        </span>
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-[#1f7a3a]">
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

/** Bullet charts: the old level marked, the new bar against a 100 scale. */
export function ScoreBulletUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-4">
        {rows.map((row) => (
          <li key={row.label}>
            <span className="tw:flex tw:justify-between tw:text-[14px] tw:font-medium">
              {row.label}
              <b>{row.after}</b>
            </span>
            <span className="tw:relative tw:mt-2 tw:block tw:h-4 tw:overflow-hidden tw:rounded-[6px] tw:bg-[linear-gradient(90deg,#eef2f7_0_50%,#e3e9f2_50%_80%,#d8e0ec_80%)]">
              <i
                className="tw:absolute tw:inset-y-1 tw:left-0 tw:block tw:rounded-r-[4px] tw:bg-(--ink)"
                style={
                  {
                    "--w": `${row.after}%`,
                    width: `${row.after}%`,
                    ...run("de-fill"),
                  } as CSSProperties
                }
              />
              <i
                className="tw:absolute tw:inset-y-0 tw:block tw:w-[3px] tw:bg-(--red)"
                style={{ left: `${row.before}%` }}
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-2 tw:text-[13px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:h-3 tw:w-[3px] tw:bg-(--red)" /> Example:
          starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:h-2 tw:w-4 tw:rounded-[2px] tw:bg-(--ink)" />{" "}
          Example: goal
        </span>
      </p>
    </div>
  );
}
