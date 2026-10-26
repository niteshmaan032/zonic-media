import type { CSSProperties, ReactNode } from "react";
import {
  FiAlertCircle,
  FiCalendar,
  FiCheck,
  FiFileText,
  FiFlag,
  FiLock,
  FiMessageCircle,
  FiMessageSquare,
  FiPhone,
  FiSearch,
  FiShield,
  FiSliders,
  FiStar,
  FiTarget,
  FiTerminal,
  FiTrello,
  FiUserPlus,
  FiZap,
} from "react-icons/fi";
import { SiOpenai } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { GoogleG, PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import { CARD, Flip, Slot, inAt, run } from "@/components/rd/delaware/uiBits";

/* UI for the services hub redesign (23 Oct 2026); none of it appears on
   another page. Feature panels (found in three places, profile lifecycle,
   conversion hotspots, ad-to-page match, automation flow), the four process
   steps, the plan phone and the one-report card. Illustrations: "Your
   Business"; the one chart with shares is labelled as an example. */

const MINI = cx(
  UI_CARD,
  "tw:absolute tw:w-[250px] tw:p-4 tw:text-left tw:text-(--ink) tw:max-bssm:w-[210px] tw:max-bssm:p-3",
);

/* ------------------------------------------------------ feature panels */

/** One business found three ways: a search result, a Maps listing and an
    AI answer, fanned like cards. */
export function FoundThreeWaysUi() {
  return (
    <div className="tw:relative tw:h-[400px] tw:w-full tw:max-w-[460px] tw:max-bssm:h-[400px]">
      <div
        className={cx(MINI, "tw:top-0 tw:left-0 tw:-rotate-6")}
        style={inAt(1)}
      >
        <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[11.5px]">
          <GoogleG className="tw:size-3.5" /> roof repair near me
        </span>
        <span className="tw:mt-3 tw:block tw:text-[10.5px] tw:text-(--muted)">
          yourbusiness.com › roof-repair
        </span>
        <b className="tw:block tw:text-[13.5px]/[1.3] tw:text-[#1a0dab]">
          Roof Repair Near You · Your Business
        </b>
        <span className="tw:mt-2 tw:flex tw:justify-end">
          <Chip tone="blue">Search #1</Chip>
        </span>
      </div>
      <div
        className={cx(MINI, "tw:top-[122px] tw:right-0 tw:rotate-3")}
        style={inAt(2)}
      >
        <span className="tw:relative tw:block tw:h-14 tw:overflow-hidden tw:rounded-[10px] tw:bg-[#e9eef5]">
          <span
            className="tw:absolute tw:inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)",
              backgroundSize: "30px 24px",
            }}
          />
          <i className="tw:absolute tw:top-1/2 tw:left-1/2 tw:block tw:size-4 tw:-translate-1/2 tw:rounded-full tw:bg-(--red) tw:ring-3 tw:ring-white" />
        </span>
        <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-between">
          <b className="tw:text-[13px]">Your Business</b>
          <Chip tone="green">Map Pack #1</Chip>
        </span>
        <span className="tw:text-[10.5px] tw:text-(--muted)">
          <span className="tw:text-[#f4b400]">★★★★★</span> 5.0 · Open now
        </span>
      </div>
      <div
        className={cx(MINI, "tw:bottom-0 tw:left-[6%] tw:-rotate-1")}
        style={inAt(3)}
      >
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-semibold">
          <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-white">
            <SiOpenai className="tw:size-3.5" />
          </span>
          AI answer
        </span>
        <p className="tw:mt-2 tw:rounded-[12px] tw:rounded-tl-[4px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px]/[1.45]">
          For roof repair nearby, <b>Your Business</b> is a top pick: 5.0 rating
          and same-day visits.
        </p>
        <span className="tw:mt-2 tw:flex tw:justify-end" style={run("de-late")}>
          <Chip tone="green">Recommended</Chip>
        </span>
      </div>
    </div>
  );
}

const STAGES: [string, ReactNode][] = [
  ["Verify", <FiShield key="v" />],
  ["Optimize", <FiSliders key="o" />],
  ["Reviews", <FiStar key="r" />],
  ["Protect", <FiLock key="p" />],
];

/** The profile's lifecycle as four stages filling in order. */
export function ProfileLifecycleUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShield />}
        tone="gold"
        title="Google Business Profile"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">Setting up</Chip>}
            to={<Chip tone="green">Fully managed</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-6 tw:grid tw:grid-cols-4">
        <span
          className="tw:absolute tw:top-5 tw:right-[12.5%] tw:left-[12.5%] tw:h-1 tw:rounded-full tw:bg-(--panel)"
          aria-hidden="true"
        />
        <span
          className="tw:absolute tw:top-5 tw:left-[12.5%] tw:h-1 tw:rounded-full tw:bg-(--green)"
          style={
            { "--w": "75%", width: "75%", ...run("de-fill") } as CSSProperties
          }
          aria-hidden="true"
        />
        {STAGES.map(([label, icon], i) => (
          <span
            key={label}
            className="tw:relative tw:flex tw:flex-col tw:items-center tw:gap-2"
          >
            <span
              className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[17px] tw:text-white tw:ring-4 tw:ring-white"
              style={{ background: "var(--green)", ...run(`de-dot-${i + 1}`) }}
            >
              {icon}
            </span>
            <span className="tw:text-[11.5px] tw:font-semibold">{label}</span>
          </span>
        ))}
      </div>
      <div
        className="tw:mt-6 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3"
        style={inAt(3)}
      >
        <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[11px] tw:font-bold tw:text-(--blue)">
          YB
        </span>
        <span className="tw:min-w-0 tw:leading-tight">
          <b className="tw:block tw:text-[13px]">Your Business</b>
          <span className="tw:text-[11px] tw:text-(--muted)">
            <span className="tw:text-[#f4b400]">★★★★★</span> 5.0 · Posts weekly
          </span>
        </span>
        <span className="tw:ml-auto">
          <Chip tone="green">Verified</Chip>
        </span>
      </div>
    </div>
  );
}

/** A homepage wireframe with the three places a visitor converts. */
export function ConversionHotspotsUi() {
  const dot =
    "tw:absolute tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--gold) tw:text-[11px] tw:font-bold tw:text-(--ink) tw:ring-4 tw:ring-(--gold)/30";
  return (
    <div className={CARD}>
      <div className="tw:relative tw:rounded-[14px] tw:border tw:border-(--line) tw:p-4">
        <span className="tw:flex tw:items-center tw:justify-between">
          <i className="tw:block tw:h-3 tw:w-14 tw:rounded-[3px] tw:bg-(--ink)" />
          <span className="tw:relative tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1 tw:text-[10.5px] tw:font-semibold tw:text-white">
            <FiPhone className="tw:mr-1 tw:inline tw:size-3" />
            Call now
            <span className={cx(dot, "tw:-top-3 tw:-right-3")} style={inAt(1)}>
              1
            </span>
          </span>
        </span>
        <b className="tw:mt-4 tw:block tw:text-[15px]/[1.25] tw:tracking-[-0.01em]">
          Local service you can book today
        </b>
        <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#e2e8f0]" />
        <span className="tw:relative tw:mt-4 tw:grid tw:gap-1.5 tw:rounded-[10px] tw:bg-(--panel) tw:p-2.5">
          <i className="tw:block tw:h-5 tw:rounded-[6px] tw:bg-white" />
          <i className="tw:block tw:h-5 tw:rounded-[6px] tw:bg-white" />
          <span className="tw:block tw:rounded-[6px] tw:bg-(--ink) tw:py-1 tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-white">
            Get a free quote
          </span>
          <span className={cx(dot, "tw:-top-3 tw:-right-3")} style={inAt(2)}>
            2
          </span>
        </span>
        <span className="tw:relative tw:mt-3 tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-medium tw:text-(--muted)">
          <span className="tw:text-[#f4b400]">★★★★★</span> Rated 5.0 by local
          customers
          <span className={cx(dot, "tw:-top-1 tw:right-0")} style={inAt(3)}>
            3
          </span>
        </span>
      </div>
      <ol className="tw:mt-4 tw:grid tw:gap-1.5 tw:text-[12px] tw:font-medium">
        {[
          "Click-to-call on every page",
          "A short quote form",
          "Reviews next to the ask",
        ].map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5"
            style={inAt(i + 4)}
          >
            <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--gold-soft) tw:text-[10px] tw:font-bold">
              {i + 1}
            </span>
            {t}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** The ad and the landing page side by side, matching words highlighted. */
export function AdMatchUi() {
  const hl = "tw:rounded-[4px] tw:px-0.5 tw:[box-decoration-break:clone]";
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiTarget />}
        title="Ad and landing page"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Checking…</Chip>}
            to={<Chip tone="green">Matched</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] tw:items-center tw:gap-1">
        <div
          className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5"
          style={inAt(1)}
        >
          <span className="tw:text-[9.5px]">
            <b>Sponsored</b>
          </span>
          <b className="tw:mt-1 tw:block tw:text-[12px]/[1.3] tw:text-[#1a0dab]">
            <span
              className={hl}
              style={{ background: "#fff3cc", ...run("de-area") }}
            >
              Emergency Roof Repair
            </span>{" "}
            · Same Day
          </b>
          <span className="tw:mt-1 tw:block tw:text-[10px] tw:text-(--muted)">
            Upfront pricing · Call now
          </span>
        </div>
        <span className="tw:text-center tw:text-(--muted)" aria-hidden="true">
          →
        </span>
        <div
          className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5"
          style={inAt(2)}
        >
          <i className="tw:block tw:h-2 tw:w-8 tw:rounded-[2px] tw:bg-(--ink)" />
          <b className="tw:mt-2 tw:block tw:text-[12px]/[1.3]">
            <span
              className={hl}
              style={{ background: "#fff3cc", ...run("de-area") }}
            >
              Emergency Roof Repair
            </span>
            , Same Day
          </b>
          <span className="tw:mt-2 tw:block tw:rounded-full tw:bg-(--blue) tw:py-1 tw:text-center tw:text-[10px] tw:font-semibold tw:text-white">
            Call now
          </span>
        </div>
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {[
          "Same words as the search",
          "Same offer on the page",
          "Call button above the fold",
        ].map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 3)}
          >
            <FiCheck className="tw:size-3.5 tw:flex-none tw:text-(--green)" />{" "}
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

const FLOW: [string, ReactNode][] = [
  ["Website form submitted", <FiFileText key="f" />],
  ["Lead added to your CRM", <FiUserPlus key="c" />],
  ["Text sent within a minute", <FiMessageCircle key="t" />],
  ["Appointment booked", <FiCalendar key="b" />],
];

/** A brand strip, then an inquiry moving through an automation. */
export function AutomationFlowUi() {
  return (
    <div className={CARD}>
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-[14px] tw:bg-(--panel) tw:p-2.5">
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[10px] tw:bg-(--ink) tw:text-[12px] tw:font-bold tw:text-(--gold)">
          YB
        </span>
        {["#2567e8", "#fdc115", "#0c1526", "#e7f6ec"].map((c) => (
          <i
            key={c}
            className="tw:block tw:h-9 tw:flex-1 tw:rounded-[8px] tw:ring-1 tw:ring-(--line)"
            style={{ background: c }}
          />
        ))}
        <b className="tw:px-1 tw:text-[20px] tw:leading-none tw:tracking-[-0.03em]">
          Aa
        </b>
      </div>
      <p className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-semibold">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <FiZap className="tw:size-3.5 tw:text-(--gold)" /> Automation
        </span>
        <Chip tone="green">Runs 24/7</Chip>
      </p>
      <ol className="tw:relative tw:mt-3 tw:grid tw:gap-2.5">
        <span
          className="tw:absolute tw:top-4 tw:bottom-4 tw:left-[15px] tw:border-l-2 tw:border-dashed tw:border-(--line)"
          aria-hidden="true"
        />
        {FLOW.map(([t, icon], i) => (
          <li
            key={t}
            className="tw:relative tw:flex tw:items-center tw:gap-3 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span
              className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[14px] tw:text-white tw:ring-4 tw:ring-white"
              style={{
                background: i === 3 ? "var(--green)" : "var(--blue)",
                ...(i === 3 ? run("de-late") : {}),
              }}
            >
              {icon}
            </span>
            {t}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const FINDINGS: [string, "red" | "amber", string][] = [
  ["Wrong primary category on Google", "red", "Quick win"],
  ["No page for your top service", "red", "Quick win"],
  ["Slow mobile homepage", "amber", "In plan"],
  ["Ads paying for job-seeker searches", "amber", "In plan"],
];

const BOARD: [string, string[]][] = [
  ["Now", ["Fix profile", "Call tracking"]],
  ["Next", ["Service pages", "Ad rebuild"]],
  ["Later", ["Town pages", "AI content"]],
];

const LOG = [
  "Redirects mapped",
  "Schema validated",
  "Call tracking live",
  "Profile updated",
];

const GOALS: [string, number, string][] = [
  ["Calls from Google", 82, "var(--blue)"],
  ["New reviews", 100, "var(--green)"],
  ["Pages published", 66, "var(--gold)"],
];

type Step = { tag: string; title: string };

/** Services hub process UIs. */
export function servicesStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3] = steps;
  return [
    <Slot key="sv-find">
      <UiHead
        icon={<FiAlertCircle />}
        title="Audit findings"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {FINDINGS.map(([t, tone, tag], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
              style={{
                background: tone === "red" ? "var(--red)" : "var(--gold)",
              }}
            />
            <span className="tw:min-w-0 tw:truncate">{t}</span>
            <span className="tw:ml-auto tw:flex-none">
              <Chip tone={tag === "Quick win" ? "green" : "muted"}>{tag}</Chip>
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="sv-board">
      <UiHead
        icon={<FiTrello />}
        tone="gold"
        title="Your roadmap"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-3 tw:gap-1.5">
        {BOARD.map(([col, cards], c) => (
          <div key={col} className="tw:rounded-[12px] tw:bg-(--panel) tw:p-1.5">
            <span className="tw:block tw:px-1 tw:pb-1.5 tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
              {col}
            </span>
            {cards.map((t, i) => (
              <span
                key={t}
                className="tw:mb-1.5 tw:block tw:rounded-[8px] tw:bg-white tw:px-2 tw:py-1.5 tw:text-[11px] tw:font-medium tw:[box-shadow:0_2px_6px_rgba(12,21,38,0.06)] tw:last:mb-0"
                style={inAt(c * 2 + i + 1)}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="sv-deploy">
      <UiHead
        icon={<FiTerminal />}
        tone="green"
        title="Launch checks"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:rounded-[12px] tw:bg-(--ink) tw:px-3.5 tw:py-3 tw:font-mono tw:text-[11px]/[1.9] tw:text-white/80">
        {LOG.map((t, i) => (
          <span key={t} className="tw:block" style={inAt(i + 1)}>
            <span className="tw:text-[#86efac]">✓</span> {t}
          </span>
        ))}
        <span
          className="tw:mt-1 tw:inline-block tw:rounded-[6px] tw:bg-(--green) tw:px-2 tw:font-sans tw:font-semibold tw:text-white"
          style={run("de-late")}
        >
          Site live
        </span>
      </div>
    </Slot>,

    <Slot key="sv-goals">
      <UiHead
        icon={<FiFlag />}
        title="This month's goals"
        right={<Chip tone="green">On track</Chip>}
      />
      <ul className="tw:grid tw:gap-3">
        {GOALS.map(([t, w, color]) => (
          <li key={t}>
            <span className="tw:flex tw:justify-between tw:text-[12px] tw:font-semibold">
              {t}
              <span className="tw:text-(--muted)">
                {w === 100 ? "Done" : "On track"}
              </span>
            </span>
            <span className="tw:mt-1.5 tw:block tw:h-2.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
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
  ];
}

/* ---------------------------------------------------------- journey */

const PLAN: [string, ReactNode][] = [
  [
    "SEO and local SEO",
    <Chip key="a" tone="green">
      Active
    </Chip>,
  ],
  [
    "Google Business Profile",
    <Chip key="b" tone="green">
      Active
    </Chip>,
  ],
  [
    "Website",
    <Chip key="c" tone="green">
      Live
    </Chip>,
  ],
  [
    "Google Ads",
    <Chip key="d" tone="green">
      Active
    </Chip>,
  ],
  [
    "AI search",
    <Flip
      key="e"
      n={3}
      from={<Chip tone="amber">Starting</Chip>}
      to={<Chip tone="green">Active</Chip>}
    />,
  ],
];

/** The client's plan in an app: what's running and what's next.
    Decorative (frame aria-hidden). */
export function PlanPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <div className="tw:rounded-[16px] tw:bg-(--ink) tw:p-3.5 tw:text-white">
          <span className="tw:text-[10px] tw:font-semibold tw:tracking-[0.12em] tw:text-white/60 tw:uppercase">
            Your marketing plan
          </span>
          <b className="tw:mt-0.5 tw:flex tw:items-center tw:justify-between tw:text-[16px]">
            Growth plan
            <span className="tw:rounded-full tw:bg-(--gold) tw:px-2 tw:py-0.5 tw:text-[10px] tw:text-(--ink)">
              Month to month
            </span>
          </b>
        </div>
        <ul className="tw:mt-3 tw:grid tw:gap-1.5">
          {PLAN.map(([t, chip], i) => (
            <li
              key={t}
              className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-2 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 1)}
            >
              {t}
              {chip}
            </li>
          ))}
        </ul>
        <p className="tw:mt-3 tw:text-[10px] tw:font-semibold tw:text-(--muted) tw:uppercase">
          Next up
        </p>
        <p className="tw:mt-1 tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium">
          <FiSearch className="tw:size-3.5 tw:text-(--blue)" /> Two new service
          pages
        </p>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:py-2.5 tw:text-[11.5px] tw:font-semibold tw:text-white"
          style={run("de-late")}
        >
          <FiMessageSquare className="tw:size-3.5" /> Message your strategist
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const SOURCES: [string, number, string][] = [
  ["Google profile", 34, "var(--blue)"],
  ["Organic search", 26, "var(--green)"],
  ["Google Ads", 24, "var(--gold)"],
  ["Website direct", 10, "#9b8cf2"],
  ["AI answers", 6, "#f08b80"],
];

/** One monthly report across channels: leads by source as one stacked
    bar (example shares), plus three plain facts. Decorative. */
export function OneReportUi({
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
        <b className="tw:text-[15px]">Monthly report · every channel</b>
        <Chip tone="blue">One report</Chip>
      </div>
      <p className="tw:mt-4 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
        Leads by source
      </p>
      <span className="tw:mt-2 tw:flex tw:h-5 tw:overflow-hidden tw:rounded-full">
        {SOURCES.map(([label, w, color]) => (
          <i
            key={label}
            className="tw:block tw:h-full"
            style={{ width: `${w}%`, background: color }}
          />
        ))}
      </span>
      <ul className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-x-4 tw:gap-y-1.5 tw:text-[11.5px]">
        {SOURCES.map(([label, , color], i) => (
          <li
            key={label}
            className="tw:flex tw:items-center tw:gap-2"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: color }}
            />
            {label}
          </li>
        ))}
      </ul>
      <p className="tw:mt-2 tw:text-[10.5px] tw:text-(--muted)">
        Example shares; yours depend on your market.
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {facts.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--gold-soft) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[19px] tw:leading-none tw:tracking-[-0.02em]">
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
