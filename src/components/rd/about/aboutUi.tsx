import type { CSSProperties, ReactNode } from "react";
import {
  FiAward,
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiCpu,
  FiFileText,
  FiMapPin,
  FiMessageSquare,
  FiMousePointer,
  FiSearch,
  FiShield,
  FiToggleRight,
  FiTrendingUp,
  FiUsers,
  FiVideo,
} from "react-icons/fi";
import { SiGooglegemini, SiOpenai, SiPerplexity } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import { CARD, Flip, Slot, inAt, run } from "@/components/rd/delaware/uiBits";

/* UI for the About page redesign (23 Oct 2026); none of it appears on
   another page. The About page states only sourced facts (see the live
   page's positioning note), so these demos show no client figures; the
   canonical ones (1,500+ profiles, 900+ reinstated) sit in the copy. */

/* ------------------------------------------------------ feature panels */

const PILLARS: [string, number, string][] = [
  ["Technical", 94, "var(--blue)"],
  ["On-page", 88, "var(--gold)"],
  ["Authority", 76, "var(--green)"],
];

/** SEO health in three pillars, each meter filling up. */
export function SeoPillarsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSearch />}
        title="SEO health check"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">Needs work</Chip>}
            to={<Chip tone="green">Healthy</Chip>}
          />
        }
      />
      <div className="tw:mt-5 tw:grid tw:grid-cols-3 tw:gap-3">
        {PILLARS.map(([label, v, color]) => (
          <div
            key={label}
            className="tw:flex tw:flex-col tw:items-center tw:gap-2"
          >
            <span className="tw:relative tw:block tw:h-[120px] tw:w-full tw:max-w-[64px] tw:overflow-hidden tw:rounded-[14px] tw:bg-(--panel)">
              <i
                className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:block tw:rounded-[14px]"
                style={
                  {
                    "--h": `${v}%`,
                    height: `${v}%`,
                    background: color,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
            </span>
            <span className="tw:text-[11.5px] tw:font-semibold tw:text-(--ink-2)">
              {label}
            </span>
          </div>
        ))}
      </div>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {[
          "Pages load fast on mobile",
          "Each service has its own page",
          "Links from trusted local sites",
        ].map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 2)}
          >
            <FiCheck className="tw:size-3.5 tw:flex-none tw:text-(--green)" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A Maps result: your pin on top, the listing card verified and #1. */
export function MapsListingUi() {
  return (
    <div className={CARD}>
      <div className="tw:relative tw:h-[118px] tw:overflow-hidden tw:rounded-[14px] tw:bg-[#e9eef5]">
        {/* Street grid */}
        <span
          className="tw:absolute tw:inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 3px, transparent 3px), linear-gradient(90deg, #fff 3px, transparent 3px)",
            backgroundSize: "46px 38px",
          }}
          aria-hidden="true"
        />
        <i className="tw:absolute tw:top-[38%] tw:left-[22%] tw:block tw:size-3 tw:rounded-full tw:bg-[#b8c3d6]" />
        <i className="tw:absolute tw:top-[64%] tw:left-[70%] tw:block tw:size-3 tw:rounded-full tw:bg-[#b8c3d6]" />
        <span
          className="tw:absolute tw:top-[30%] tw:left-1/2 tw:grid tw:size-9 tw:-translate-x-1/2 tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-[16px] tw:text-white tw:ring-4 tw:ring-white"
          style={run("de-halo", 2.4)}
        >
          <FiMapPin />
        </span>
      </div>
      <div
        className="tw:mt-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3"
        style={inAt(2)}
      >
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
          <b className="tw:text-[14px]">Your Business</b>
          <Flip
            n={2}
            from={<Chip tone="muted">Unverified</Chip>}
            to={<Chip tone="green">Verified</Chip>}
          />
        </span>
        <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--muted)">
          <span className="tw:text-[#f4b400]">★★★★★</span> 5.0 · Plumber · Open
          now
        </span>
        <span className="tw:mt-2.5 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[11px] tw:font-semibold">
          {["Call", "Directions", "Website"].map((b, i) => (
            <span
              key={b}
              className={cx(
                "tw:rounded-full tw:py-1.5 tw:text-center",
                i === 0
                  ? "tw:bg-(--blue) tw:text-white"
                  : "tw:bg-(--blue-soft) tw:text-(--blue)",
              )}
            >
              {b}
            </span>
          ))}
        </span>
      </div>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiAward className="tw:size-3.5" /> #1 in the Map Pack
      </span>
    </div>
  );
}

/** A small business homepage in a browser; the visitor books. */
export function BrowserBookUi() {
  return (
    <div className={CARD}>
      <div className="tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-(--line)">
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:border-b tw:border-(--line) tw:bg-(--panel) tw:px-3 tw:py-2">
          {["#f87171", "#fbbf24", "#34d399"].map((c) => (
            <i
              key={c}
              className="tw:block tw:size-2 tw:rounded-full"
              style={{ background: c }}
            />
          ))}
          <span className="tw:ml-2 tw:flex-1 tw:rounded-full tw:bg-white tw:px-2.5 tw:py-0.5 tw:text-[10.5px] tw:text-(--muted)">
            yourbusiness.com
          </span>
        </span>
        <div className="tw:px-4 tw:pt-4 tw:pb-5">
          <span className="tw:flex tw:items-center tw:justify-between">
            <i className="tw:block tw:h-3 tw:w-14 tw:rounded-[3px] tw:bg-(--ink)" />
            <span className="tw:flex tw:gap-2">
              {[0, 1, 2].map((n) => (
                <i
                  key={n}
                  className="tw:block tw:h-1.5 tw:w-7 tw:rounded-full tw:bg-[#dfe5ee]"
                />
              ))}
            </span>
          </span>
          <b className="tw:mt-4 tw:block tw:text-[17px]/[1.2] tw:tracking-[-0.02em]">
            Trusted local service, booked in a minute
          </b>
          <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#e2e8f0]" />
          <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-3/5 tw:rounded-full tw:bg-[#e2e8f0]" />
          <span className="tw:relative tw:mt-4 tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:px-4 tw:py-2 tw:text-[12px] tw:font-semibold tw:text-white">
            <FiCalendar className="tw:size-3.5" /> Book now
            <FiMousePointer
              className="tw:absolute tw:-right-3 tw:-bottom-3 tw:size-5 tw:fill-white tw:text-(--ink)"
              style={inAt(3)}
            />
          </span>
        </div>
      </div>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiCheck className="tw:size-3.5" /> New booking from your website
      </span>
    </div>
  );
}

const ENGINES: [string, ReactNode][] = [
  ["ChatGPT", <SiOpenai key="o" />],
  ["Gemini", <SiGooglegemini key="g" />],
  ["Perplexity", <SiPerplexity key="p" />],
  ["Google AI Overviews", <FiCpu key="c" />],
];

/** A recommendation question asked of four AI tools; each names you. */
export function AiMentionsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMessageSquare />}
        tone="green"
        title="AI search mentions"
        right={<Chip tone="blue">This month</Chip>}
      />
      <p className="tw:mt-4 tw:rounded-[14px] tw:rounded-bl-[4px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium">
        &ldquo;Who&apos;s the best plumber near me?&rdquo;
      </p>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {ENGINES.map(([name, icon], i) => (
          <li
            key={name}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[12px]">
              {icon}
            </span>
            {name}
            <span className="tw:ml-auto">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">Not listed</Chip>}
                to={<Chip tone="green">Recommends you</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const APPEAL: string[] = [
  "Profile suspended",
  "Cause found in the audit",
  "Evidence-based appeal sent",
  "Reinstated and hardened",
];

/** A suspended profile's road back: each stage ticks off, status flips. */
export function ReinstatementUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiShield />}
        tone="gold"
        title="Your Business · profile status"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">Suspended</Chip>}
            to={<Chip tone="green">Live on Google</Chip>}
          />
        }
      />
      <ol className="tw:relative tw:mt-5 tw:grid tw:gap-3 tw:pl-1">
        <span
          className="tw:absolute tw:top-3 tw:bottom-3 tw:left-[13px] tw:w-0.5 tw:bg-(--line)"
          aria-hidden="true"
        />
        {APPEAL.map((t, i) => (
          <li
            key={t}
            className="tw:relative tw:flex tw:items-center tw:gap-3 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <i
              className="tw:relative tw:grid tw:size-[20px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[10px] tw:text-white tw:ring-4 tw:ring-white"
              style={
                i === 0
                  ? { background: "var(--red)" }
                  : { background: "var(--green)", ...run(`de-dot-${i + 1}`) }
              }
            >
              {i === 0 ? "!" : <FiCheck />}
            </i>
            <span className="tw:flex-1 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2">
              {t}
            </span>
          </li>
        ))}
      </ol>
      <p className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:text-[11.5px] tw:font-semibold">
        No fix, no charge
        <span className="tw:text-(--muted)">Free suspension audit</span>
      </p>
    </div>
  );
}

/** A sponsored result for a local search, then the account basics. */
export function AdsResultUi() {
  return (
    <div className={CARD}>
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-2 tw:text-[12.5px]">
        <FiSearch className="tw:size-3.5 tw:text-(--muted)" />
        emergency plumber near me
      </div>
      <div
        className="tw:mt-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3.5"
        style={inAt(1)}
      >
        <span className="tw:text-[10.5px]">
          <b>Sponsored</b> · yourbusiness.com
        </span>
        <b className="tw:mt-1 tw:block tw:text-[14px]/[1.3] tw:text-[#1a0dab]">
          Your Business · 24/7 Emergency Plumber
        </b>
        <span className="tw:mt-1 tw:block tw:text-[11px] tw:text-(--muted)">
          Licensed and insured · Upfront pricing · Same-day visits
        </span>
        <span className="tw:mt-2.5 tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[11px] tw:font-medium tw:text-[#1a0dab]">
          {["Call now", "Get a quote", "Reviews"].map((t) => (
            <span
              key={t}
              className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1"
            >
              {t}
            </span>
          ))}
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {[
          "Account in your name",
          "Spend billed by Google",
          "Search terms reviewed weekly",
        ].map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 2)}
          >
            <i
              className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:text-white"
              style={{ background: "var(--green)", ...run(`de-dot-${i + 2}`) }}
            >
              <FiCheck />
            </i>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const CHECKS: [string, ReactNode][] = [
  ["Google profile", <FiMapPin key="p" />],
  ["Rankings by area", <FiBarChart2 key="r" />],
  ["Website speed", <FiTrendingUp key="w" />],
  ["Competitors", <FiUsers key="c" />],
];

const ROADMAP: [string, number, number, string][] = [
  ["Profile setup", 0, 38, "var(--blue)"],
  ["Site and pages", 26, 44, "var(--gold)"],
  ["Reviews, links", 52, 48, "var(--green)"],
];

const SWITCHES = [
  "Google profile live",
  "Website live",
  "Call tracking on",
  "Ads live",
];

const STAIRS = [18, 28, 40, 52, 68, 86];

type Step = { tag: string; title: string };

/** About page process UIs. */
export function aboutStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3] = steps;
  return [
    <Slot key="ab-checks">
      <UiHead
        icon={<FiSearch />}
        title="What we check first"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {CHECKS.map(([t, icon], i) => (
          <li
            key={t}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between">
              <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[13px] tw:text-(--blue)">
                {icon}
              </span>
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="amber">Checking</Chip>}
                to={<Chip tone="green">Done</Chip>}
              />
            </span>
            <b className="tw:mt-1.5 tw:block tw:text-[12px]">{t}</b>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ab-roadmap">
      <UiHead
        icon={<FiCalendar />}
        tone="gold"
        title="Your 90-day roadmap"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-3 tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
        <span>Month 1</span>
        <span>Month 2</span>
        <span>Month 3</span>
      </div>
      <ul className="tw:grid tw:gap-2">
        {ROADMAP.map(([t, start, w, color]) => (
          <li
            key={t}
            className="tw:relative tw:h-8 tw:rounded-[10px] tw:bg-(--panel)"
          >
            <i
              className="tw:absolute tw:inset-y-1 tw:flex tw:items-center tw:overflow-hidden tw:rounded-[7px] tw:px-2 tw:text-[11px] tw:font-semibold tw:whitespace-nowrap tw:text-(--ink)"
              style={
                {
                  left: `${start}%`,
                  "--w": `${w}%`,
                  width: `${w}%`,
                  background: color,
                  ...run("de-fill"),
                } as CSSProperties
              }
            >
              {t}
            </i>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ab-golive">
      <UiHead
        icon={<FiToggleRight />}
        tone="green"
        title="Go-live switches"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {SWITCHES.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
          >
            {t}
            <span
              className="tw:relative tw:block tw:h-[18px] tw:w-8 tw:flex-none tw:rounded-full"
              style={{ background: "var(--green)", ...run(`de-dot-${i + 1}`) }}
            >
              <i
                className="tw:absolute tw:top-0.5 tw:block tw:size-3.5 tw:rounded-full tw:bg-white"
                style={
                  {
                    "--b": "2px",
                    "--a": "16px",
                    left: "16px",
                    ...run("de-slide"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ab-stairs">
      <UiHead
        icon={<FiTrendingUp />}
        title="Leads from search, by month"
        right={<Chip tone="green">Building</Chip>}
      />
      <div className="tw:flex tw:h-[104px] tw:items-end tw:gap-2 tw:border-b tw:border-(--line) tw:px-1">
        {STAIRS.map((h, i) => (
          <i
            key={i}
            className="tw:block tw:flex-1 tw:rounded-t-[6px]"
            style={
              {
                "--h": `${h}%`,
                height: `${h}%`,
                background: i > 3 ? "var(--blue)" : "#bcd0fa",
                ...run("de-rise"),
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="tw:flex tw:gap-2 tw:px-1 tw:text-center tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
        {STAIRS.map((_, i) => (
          <span key={i} className="tw:flex-1">
            M{i + 1}
          </span>
        ))}
      </div>
      <p className="tw:text-[10.5px] tw:text-(--muted)">
        Illustration: coverage keeps widening after launch.
      </p>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** The monthly strategy call in a calendar app: agenda, attendees, join.
    Decorative (frame aria-hidden). */
export function AgendaPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <span className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:pb-2.5 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
          <span className="tw:flex tw:items-center tw:gap-1.5">
            <FiCalendar className="tw:size-3.5 tw:text-(--blue)" /> Calendar
          </span>
          Next month
        </span>
        <div
          className="tw:mt-3 tw:rounded-[14px] tw:border-l-4 tw:border-(--blue) tw:bg-(--blue-soft) tw:p-3"
          style={inAt(1)}
        >
          <b className="tw:block tw:text-[14px]">Monthly strategy call</b>
          <span className="tw:mt-0.5 tw:block tw:text-[11px] tw:text-(--muted)">
            30 min · video call with your strategist
          </span>
        </div>
        <p className="tw:mt-3 tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
          Agenda
        </p>
        <ol className="tw:mt-1.5 tw:grid tw:gap-1.5">
          {[
            "Calls and leads by channel",
            "What we did this month",
            "Next month's priorities",
            "Your questions",
          ].map((t, i) => (
            <li
              key={t}
              className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-2 tw:text-[11.5px] tw:font-medium"
              style={inAt(i + 2)}
            >
              <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[10px] tw:font-bold tw:text-(--blue)">
                {i + 1}
              </span>
              {t}
            </li>
          ))}
        </ol>
        <span className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--ink) tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-white">
          <FiVideo className="tw:size-3.5" /> Join video call
        </span>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiFileText className="tw:size-3.5" /> Report shared before the call
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Simplified outline of the lower 48 (equirectangular, 16 px per degree,
   latitude stretched 1.27×); pins use the same projection. */
const US =
  "M4.8 24.4 L32.0 12.2 L476.8 12.2 L478.4 4.1 L566.4 32.5 L643.2 63.0 L664.0 77.2 L681.6 134.1 L736.0 128.0 L771.2 121.9 L804.8 93.5 L856.0 93.5 L892.8 44.7 L915.2 50.8 L928.0 97.5 L868.8 132.1 L880.0 158.5 L849.6 168.7 L816.0 182.9 L816.0 215.4 L798.4 227.6 L784.0 256.0 L792.0 292.6 L753.6 319.0 L705.6 357.6 L697.6 390.1 L720.0 465.3 L713.6 495.8 L691.2 477.5 L675.2 440.9 L651.2 398.3 L616.0 390.1 L566.4 394.2 L569.6 418.6 L536.0 408.4 L499.2 404.4 L483.2 412.5 L444.8 447.0 L441.6 481.6 L408.0 449.1 L377.6 402.3 L347.2 418.6 L321.6 386.1 L296.0 361.7 L268.8 371.9 L222.4 371.9 L163.2 347.5 L126.4 347.5 L104.0 317.0 L70.4 304.8 L40.0 241.8 L19.2 199.1 L12.8 154.4 L14.4 67.1 Z";

const MARKETS: [number, number][] = [
  [791.2, 200.4],
  [797.3, 196.1],
  [816.0, 180.6],
  [451.2, 341.8],
];

/** Head office and market pages on a US map, plus the console's facts.
    Decorative. */
export function CoverageMapUi({
  facts,
}: {
  facts: { strong: string; label: string }[];
}) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[500px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <b className="tw:text-[15px]">Where we work</b>
        <Chip tone="blue">All 50 states</Chip>
      </div>
      <svg viewBox="0 0 944 510" className="tw:mt-4 tw:block tw:w-full">
        <defs>
          <pattern
            id="ab-dots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="7" cy="7" r="3" fill="#c7d4ec" />
          </pattern>
        </defs>
        <path
          d={US}
          fill="url(#ab-dots)"
          stroke="#dbe3f0"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {MARKETS.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="22"
              fill="rgba(37,103,232,0.18)"
              style={run("de-area")}
            />
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="var(--blue)"
              stroke="#fff"
              strokeWidth="4"
            />
          </g>
        ))}
        {/* Head office: Dover, DE */}
        <circle
          cx="791.7"
          cy="212.1"
          r="30"
          fill="rgba(253,193,21,0.35)"
          style={run("de-area")}
        />
        <circle
          cx="791.7"
          cy="212.1"
          r="14"
          fill="var(--ink)"
          stroke="#fdc115"
          strokeWidth="5"
        />
        {/* Labels inside the SVG so they scale with the map. */}
        <line
          x1="791.7"
          y1="212.1"
          x2="846"
          y2="262"
          stroke="var(--ink)"
          strokeWidth="3"
        />
        <rect
          x="790"
          y="262"
          width="150"
          height="46"
          rx="23"
          fill="var(--ink)"
        />
        <text
          x="865"
          y="293"
          textAnchor="middle"
          fontSize="24"
          fontWeight="600"
          fill="#fff"
        >
          Dover HQ
        </text>
        <line
          x1="451.2"
          y1="341.8"
          x2="451.2"
          y2="300"
          stroke="var(--blue)"
          strokeWidth="3"
        />
        <rect
          x="331"
          y="254"
          width="240"
          height="46"
          rx="23"
          fill="var(--blue)"
        />
        <text
          x="451"
          y="285"
          textAnchor="middle"
          fontSize="24"
          fontWeight="600"
          fill="#fff"
        >
          Dallas–Fort Worth
        </text>
      </svg>
      <p className="tw:flex tw:flex-wrap tw:gap-x-4 tw:gap-y-1 tw:text-[11.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:border-2 tw:border-[#fdc115] tw:bg-(--ink)" />{" "}
          Head office
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--blue)" />{" "}
          Local market pages
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-[#c7d4ec]" />{" "}
          Clients nationwide
        </span>
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {facts.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]">
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

/* ------------------------------------------------------------- icons */

/** Clutch's mark (no Simple Icons glyph): a dark "C" with the red dot. */
export function ClutchMark(props: { "aria-hidden"?: boolean | "true" }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M17.6 16.4a7 7 0 1 1 0-8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="12.4" cy="12" r="2.6" fill="#ef4335" />
    </svg>
  );
}
