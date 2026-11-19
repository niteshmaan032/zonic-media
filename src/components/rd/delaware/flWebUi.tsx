import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiAlertTriangle,
  FiCamera,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiEye,
  FiFileText,
  FiFolder,
  FiGitBranch,
  FiImage,
  FiLayers,
  FiMenu,
  FiPhone,
  FiPlus,
  FiShield,
  FiSliders,
  FiSmartphone,
  FiSun,
  FiTerminal,
  FiUploadCloud,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Fill, Flip, Slot, inAt, run } from "./uiBits";
import "./flWeb.css";

/* UI for the Florida web design page only (18 Nov 2026); none of it
   appears on another page. Feature panels (homepage mode switcher for
   everyday / storm watch / snowbird season, service-area page tree by
   region, mobile Core Web Vitals distribution), the four process steps
   (kickoff folder, phone-first section stack, accessibility contrast pass,
   launch-day log), the estimate-request phone, the hurricane-season site
   status board on the dark card and the segment-meter scorecard.
   Illustrations only: "Your Company", no prices or client figures. */

/* Page palette (matches the hero pillars). */
const PINK = "#be185d";
const PINK_SOFT = "#ffe4e6";
const TEAL = "#134e4a";
const MINT = "#ccfbf1";

/* ------------------------------------------------------ feature panels */

const MODES: { label: string; cls: string }[] = [
  { label: "Everyday", cls: "flw-ph1" },
  { label: "Storm watch", cls: "flw-ph2" },
  { label: "Snowbird", cls: "flw-ph3" },
];

const STACK = "tw:col-start-1 tw:row-start-1";

/** A roofer's homepage switching between everyday, storm-watch and
    snowbird-season modes: alert bar, headline and line under it change
    together (resting state: storm watch). */
export function FlWebFeature1() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSliders />}
        title="Homepage mode"
        right={<Chip tone="muted">One tap</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:p-1 tw:text-center tw:text-[11.5px] tw:font-semibold">
        {MODES.map((m) => (
          <span
            key={m.label}
            className="tw:relative tw:rounded-full tw:py-1.5 tw:text-(--muted)"
          >
            {m.label}
            <span
              className={cx(
                "tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:rounded-full tw:text-white",
                m.cls,
              )}
              style={{ background: PINK }}
            >
              {m.label}
            </span>
          </span>
        ))}
      </div>

      <div className="tw:mt-3 tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-(--line)">
        <div className="tw:flex tw:items-center tw:gap-1.5 tw:bg-(--panel) tw:px-3 tw:py-2">
          <i className="tw:size-2 tw:rounded-full tw:bg-[#f87171]" />
          <i className="tw:size-2 tw:rounded-full tw:bg-[#fbbf24]" />
          <i className="tw:size-2 tw:rounded-full tw:bg-[#34d399]" />
          <span className="tw:ml-2 tw:min-w-0 tw:flex-1 tw:truncate tw:rounded-full tw:bg-white tw:px-2.5 tw:py-0.5 tw:text-[10.5px] tw:text-(--muted)">
            yourcompany.com
          </span>
        </div>

        <div className="tw:grid tw:text-[11px] tw:font-semibold">
          <span
            className={cx(
              STACK,
              "flw-ph1 tw:flex tw:items-center tw:gap-1.5 tw:px-3 tw:py-1.5",
            )}
            style={{ background: "#ecfdf5", color: TEAL }}
          >
            <FiClock className="tw:flex-none" /> Open today 7 AM to 6 PM · Free
            estimates
          </span>
          <span
            className={cx(
              STACK,
              "flw-ph2 tw:flex tw:items-center tw:gap-1.5 tw:px-3 tw:py-1.5",
            )}
            style={{ background: "#fef3c7", color: "#92400e" }}
          >
            <FiAlertTriangle className="tw:flex-none" /> Storm watch in effect ·
            Emergency line open 24/7
          </span>
          <span
            className={cx(
              STACK,
              "flw-ph3 tw:flex tw:items-center tw:gap-1.5 tw:px-3 tw:py-1.5",
            )}
            style={{ background: MINT, color: TEAL }}
          >
            <FiSun className="tw:flex-none" /> Seasonal residents: October
            check-ups now open
          </span>
        </div>

        <div className="tw:bg-[linear-gradient(165deg,#fff1f2_0%,#fff_70%)] tw:px-4 tw:pt-3.5 tw:pb-4">
          <span className="tw:grid">
            <b
              className={cx(
                STACK,
                "flw-ph1 tw:text-[17px]/[1.2] tw:tracking-[-0.01em]",
              )}
            >
              Roof Repair and Replacement in Southwest Florida
            </b>
            <b
              className={cx(
                STACK,
                "flw-ph2 tw:text-[17px]/[1.2] tw:tracking-[-0.01em]",
              )}
            >
              Storm Damage? Emergency Tarping Today
            </b>
            <b
              className={cx(
                STACK,
                "flw-ph3 tw:text-[17px]/[1.2] tw:tracking-[-0.01em]",
              )}
            >
              Back for the Season? Book a Roof Check
            </b>
          </span>
          <span className="tw:mt-1.5 tw:grid tw:text-[11.5px]/[1.45] tw:text-(--text)">
            <span className={cx(STACK, "flw-ph1")}>
              Licensed, insured and local, with written estimates.
            </span>
            <span className={cx(STACK, "flw-ph2")}>
              Crews on standby, with claim-ready photo reports.
            </span>
            <span className={cx(STACK, "flw-ph3")}>
              Inspections while you settle in, results sent by text.
            </span>
          </span>
          <span className="tw:mt-3 tw:flex tw:gap-2">
            <span
              className="tw:flex-1 tw:rounded-full tw:py-1.5 tw:text-center tw:text-[11.5px] tw:font-semibold tw:text-white"
              style={{ background: PINK }}
            >
              Request an estimate
            </span>
            <span className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:text-(--ink)">
              <FiPhone className="tw:size-3.5" />
            </span>
          </span>
        </div>
      </div>
      <p className="tw:mt-3 tw:text-[11.5px] tw:text-(--muted)">
        Changed from your phone. The rest of the site stays as it is.
      </p>
    </div>
  );
}

const TREE: {
  region: string;
  towns: string;
  dot: string;
  live: boolean;
}[] = [
  {
    region: "South Florida",
    towns: "Miami · Fort Lauderdale · Boca Raton",
    dot: "#be185d",
    live: true,
  },
  {
    region: "Tampa Bay",
    towns: "Tampa · St. Petersburg · Clearwater",
    dot: "#0f766e",
    live: true,
  },
  {
    region: "Central Florida",
    towns: "Orlando · Kissimmee · Lakeland",
    dot: "#7c3aed",
    live: true,
  },
  {
    region: "Southwest Florida",
    towns: "Fort Myers · Naples · Cape Coral",
    dot: "#ea580c",
    live: true,
  },
  {
    region: "North Florida",
    towns: "Jacksonville · Gainesville · Ocala",
    dot: "#2563eb",
    live: false,
  },
  {
    region: "Panhandle",
    towns: "Pensacola · Tallahassee · Destin",
    dot: "#ca8a04",
    live: false,
  },
];

/** The site's service-area tree: one hub page per Florida region with its
    town pages, published in turn. */
export function FlWebFeature2() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiGitBranch />}
        tone="green"
        title="Service-area pages"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">4 of 6 live</Chip>}
            to={<Chip tone="green">All regions live</Chip>}
          />
        }
      />
      <span className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:font-mono tw:text-[11px] tw:text-(--ink-2)">
        <span
          className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-[8px]"
          style={{ background: PINK_SOFT, color: PINK }}
        >
          <FiFolder className="tw:size-3.5" />
        </span>
        yourcompany.com/service-areas/
      </span>
      <ul className="tw:relative tw:mt-1.5 tw:ml-3 tw:grid tw:gap-1.5 tw:border-l tw:border-dashed tw:border-[#cbd5e1] tw:pt-1.5 tw:pl-4">
        {TREE.map((t, i) => (
          <li
            key={t.region}
            className="tw:relative tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:bg-white tw:px-2.5 tw:py-1.5"
            style={inAt(i + 1)}
          >
            <i className="tw:absolute tw:top-1/2 tw:-left-4 tw:block tw:w-4 tw:border-t tw:border-dashed tw:border-[#cbd5e1]" />
            <span className="tw:min-w-0">
              <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[12px] tw:font-semibold">
                <i
                  className="tw:size-2 tw:flex-none tw:rounded-full"
                  style={{ background: t.dot }}
                />
                {t.region}
              </span>
              <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                {t.towns}
              </span>
            </span>
            {t.live ? (
              <Chip tone="green">Live</Chip>
            ) : (
              <Flip
                n={3}
                from={<Chip tone="amber">Writing</Chip>}
                to={<Chip tone="green">Live</Chip>}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Field-data style distribution: share of phone visits rated good /
   needs improvement / poor, before → after the rebuild. */
const VITALS: {
  k: string;
  name: string;
  from: string;
  to: string;
  b: [number, number, number];
  a: [number, number, number];
}[] = [
  {
    k: "LCP",
    name: "Main content shown",
    from: "4.6 s",
    to: "1.8 s",
    b: [36, 28, 36],
    a: [87, 9, 4],
  },
  {
    k: "INP",
    name: "Response to a tap",
    from: "390 ms",
    to: "120 ms",
    b: [50, 31, 19],
    a: [92, 6, 2],
  },
  {
    k: "CLS",
    name: "Layout jumps",
    from: "0.27",
    to: "0.03",
    b: [44, 24, 32],
    a: [95, 3, 2],
  },
];

const BANDS = ["#16a34a", "#f59e0b", "#e11d48"];

/** Mobile Core Web Vitals as stacked good / fair / poor bars shifting
    from the old site to the new build. */
export function FlWebFeature3() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiSmartphone />}
        title="Core Web Vitals · phones"
        right={
          <Flip
            n={2}
            from={<Chip tone="red">Old site</Chip>}
            to={<Chip tone="green">New build</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:grid tw:gap-3.5">
        {VITALS.map((v) => (
          <li key={v.k}>
            <span className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[12.5px]">
              <span className="tw:min-w-0 tw:truncate">
                <b className="tw:mr-1.5">{v.k}</b>
                <span className="tw:text-(--muted)">{v.name}</span>
              </span>
              <Flip
                n={2}
                from={<b className="tw:text-[#b8352a]">{v.from}</b>}
                to={<b className="tw:text-[#1f7a3a]">{v.to}</b>}
              />
            </span>
            <span className="tw:mt-1.5 tw:flex tw:h-3 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              {v.a.map((w, i) => (
                <i
                  key={i}
                  className="tw:block tw:h-full"
                  style={
                    {
                      "--b": `${v.b[i]}%`,
                      "--a": `${w}%`,
                      width: `${w}%`,
                      background: BANDS[i],
                      ...run("de-split"),
                    } as CSSProperties
                  }
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
      <span className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:text-(--muted)">
        {["Good", "Needs work", "Poor"].map((l, i) => (
          <span key={l} className="tw:flex tw:items-center tw:gap-1">
            <i
              className="tw:size-2 tw:rounded-full"
              style={{ background: BANDS[i] }}
            />
            {l}
          </span>
        ))}
        <span className="tw:ml-auto" style={run("de-late")}>
          <Chip tone="green">
            <FiCheck /> Passes on mobile
          </Chip>
        </span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const FILES: { icon: ReactNode; name: string }[] = [
  { icon: <FiImage />, name: "logo.svg" },
  { icon: <FiShield />, name: "license.pdf" },
  { icon: <FiCamera />, name: "job photos · 24" },
  { icon: <FiFileText />, name: "services.docx" },
];

const SECTIONS: { name: string; tag?: string; moving?: boolean }[] = [
  { name: "Alert bar", tag: "Storm / season" },
  { name: "Hero and call button", tag: "Sticky" },
  { name: "Google reviews", tag: "Moved up", moving: true },
  { name: "Services and areas" },
];

const CONTRAST: {
  label: string;
  from: { fg: string; bg: string; r: string };
  to: { fg: string; bg: string; r: string };
}[] = [
  {
    label: "Button text",
    from: { fg: "#fff", bg: "#f472b6", r: "2.6:1" },
    to: { fg: "#fff", bg: "#be185d", r: "6.0:1" },
  },
  {
    label: "Body copy",
    from: { fg: "#9ca3af", bg: "#fff", r: "2.5:1" },
    to: { fg: "#475569", bg: "#fff", r: "7.6:1" },
  },
];

const A11Y_MORE: [string, string, string][] = [
  ["Photo alt text", "0 of 24", "24 of 24"],
  ["Keyboard focus", "Hidden", "Visible"],
];

const GO_LIVE = [
  "Domain pointed to the new site",
  "SSL certificate active",
  "Old URLs redirected (301)",
  "Forms send to phone and inbox",
];

/** Florida web design process UIs. */
export function flWebStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2] = process.steps;
  return [
    <Slot key="flw-folder">
      <UiHead
        icon={<FiUploadCloud />}
        title="Kickoff folder"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Uploading</Chip>}
            to={<Chip tone="green">All received</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {FILES.map((f, i) => (
          <li
            key={f.name}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-medium">
              <span
                className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-[7px] tw:text-[12px]"
                style={{ background: PINK_SOFT, color: PINK }}
              >
                {f.icon}
              </span>
              <span className="tw:truncate">{f.name}</span>
            </span>
            <Fill w={100} color={PINK} className="tw:mt-2" />
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="flw-stack">
      <UiHead
        icon={<FiLayers />}
        tone="gold"
        title="Homepage on a phone"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1">
        {SECTIONS.map((s) => (
          <li
            key={s.name}
            className={cx(
              "tw:grid tw:grid-cols-[14px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:px-2.5 tw:py-1 tw:text-[12px] tw:font-medium",
              s.moving
                ? "flw-lift tw:border tw:border-dashed tw:bg-white tw:[box-shadow:0_10px_22px_-12px_rgba(190,24,93,0.55)]"
                : "tw:bg-(--panel)",
            )}
            style={s.moving ? { borderColor: PINK } : undefined}
          >
            <FiMenu className="tw:text-(--muted)" />
            <span className="tw:truncate">{s.name}</span>
            {s.tag ? (
              <i
                className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:not-italic"
                style={
                  s.moving
                    ? { background: PINK, color: "#fff" }
                    : { background: "#fff", color: "var(--muted)" }
                }
              >
                {s.tag}
              </i>
            ) : null}
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="flw-a11y">
      <UiHead
        icon={<FiEye />}
        tone="green"
        title="Accessibility pass"
        right={
          <Flip
            n={2}
            from={<Chip tone="red">4 issues</Chip>}
            to={<Chip tone="green">WCAG 2.2 AA</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1">
        {CONTRAST.map((c) => (
          <li
            key={c.label}
            className="tw:grid tw:grid-cols-[34px_minmax(0,1fr)_auto] tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2 tw:py-0.5 tw:text-[12px] tw:font-medium"
          >
            <span className="tw:grid tw:h-5 tw:overflow-hidden tw:rounded-[6px] tw:border tw:border-(--line) tw:text-center tw:text-[11px] tw:font-bold">
              <span
                className={cx(STACK, "tw:grid tw:place-items-center")}
                style={{
                  color: c.from.fg,
                  background: c.from.bg,
                  ...run("de-swap-a2"),
                }}
              >
                Aa
              </span>
              <span
                className={cx(STACK, "tw:grid tw:place-items-center")}
                style={{
                  color: c.to.fg,
                  background: c.to.bg,
                  ...run("de-swap-b2"),
                }}
              >
                Aa
              </span>
            </span>
            <span className="tw:truncate">{c.label}</span>
            <Flip
              n={2}
              from={<b className="tw:text-[#b8352a]">{c.from.r}</b>}
              to={<b className="tw:text-[#1f7a3a]">{c.to.r}</b>}
            />
          </li>
        ))}
        {A11Y_MORE.map(([label, from, to]) => (
          <li
            key={label}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[12px] tw:font-medium"
          >
            {label}
            <Flip
              n={2}
              from={<b className="tw:text-[#b8352a]">{from}</b>}
              to={<b className="tw:text-[#1f7a3a]">{to}</b>}
            />
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="flw-golive">
      <UiHead
        icon={<FiTerminal />}
        tone="ink"
        title="Launch day"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">Deploying</Chip>}
            to={<Chip tone="green">Live</Chip>}
          />
        }
      />
      <div
        className="tw:rounded-[14px] tw:px-3 tw:py-2.5 tw:font-mono tw:text-[10.5px]/[1.75] tw:text-white/85"
        style={{ background: TEAL }}
      >
        <span className="tw:block tw:text-white/55">
          $ launch yourcompany.com
        </span>
        {GO_LIVE.map((t, i) => (
          <span key={t} className="tw:block tw:truncate" style={inAt(i + 1)}>
            <span style={{ color: "#5eead4" }}>✓</span> {t}
          </span>
        ))}
        <span className="tw:block tw:truncate" style={inAt(6)}>
          <span style={{ color: "#fda4af" }}>→</span> Logins handed to: you
          <i className="flw-blink tw:ml-1 tw:inline-block tw:h-3 tw:w-1.5 tw:translate-y-0.5 tw:bg-white/80" />
        </span>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const STEPS = ["Service", "Details", "Contact"];
const TIMES = ["Morning", "Afternoon", "Evening"];

/** A homeowner requesting an estimate on the mobile site: service, ZIP
    check, job photos and a callback time, then the confirmation.
    Decorative (the frame is aria-hidden). */
export function FlWebPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:px-3.5 tw:py-2">
          <b className="tw:flex tw:items-center tw:gap-1.5 tw:text-[13px]">
            <i
              className="tw:size-4 tw:rounded-[5px]"
              style={{ background: PINK }}
            />
            Your Company
          </b>
          <span
            className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:text-white"
            style={{ background: PINK }}
          >
            <FiPhone className="tw:size-3.5" />
          </span>
        </div>

        <div className="tw:px-3.5 tw:pt-2.5">
          <b className="tw:block tw:text-[17px]/[1.15] tw:tracking-[-0.01em]">
            Get a free estimate
          </b>
          <ol className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-1.5">
            {STEPS.map((s, i) => (
              <li key={s}>
                <i
                  className="tw:block tw:h-1 tw:rounded-full"
                  style={{ background: i < 2 ? PINK : "var(--line)" }}
                />
                <span
                  className={cx(
                    "tw:mt-1 tw:block tw:text-[9.5px] tw:font-semibold",
                    i === 1 ? "tw:text-(--ink)" : "tw:text-(--muted)",
                  )}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="tw:mt-2 tw:grid tw:gap-1.5 tw:px-3.5">
          <div>
            <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted)">
              What do you need?
            </span>
            <span className="tw:mt-0.5 tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:font-medium">
              Impact windows and shutters
              <FiChevronDown className="tw:text-(--muted)" />
            </span>
          </div>
          <div style={inAt(2)}>
            <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted)">
              Property ZIP
            </span>
            <span className="tw:mt-0.5 tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:font-medium">
              34102
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[10px] tw:font-semibold tw:text-[#1f7a3a]">
                <FiCheck /> Naples is covered
              </span>
            </span>
          </div>
          <div>
            <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted)">
              Job photos (optional)
            </span>
            <span className="tw:mt-0.5 tw:grid tw:grid-cols-4 tw:gap-1.5">
              {[
                "linear-gradient(135deg,#99f6e4,#0f766e)",
                "linear-gradient(135deg,#fecdd3,#be185d)",
                "linear-gradient(135deg,#fde68a,#ea580c)",
              ].map((bg, i) => (
                <i
                  key={bg}
                  className="tw:block tw:h-9 tw:rounded-[8px]"
                  style={{ background: bg, ...inAt(i + 3) }}
                />
              ))}
              <i className="tw:grid tw:h-9 tw:place-items-center tw:rounded-[8px] tw:border tw:border-dashed tw:border-[#cbd5e1] tw:text-(--muted)">
                <FiPlus />
              </i>
            </span>
          </div>
          <div>
            <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted)">
              Best time to call back
            </span>
            <span className="tw:mt-0.5 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-center tw:text-[10.5px] tw:font-semibold">
              {TIMES.map((t, i) => (
                <span
                  key={t}
                  className="tw:rounded-full tw:border tw:py-1"
                  style={
                    i === 1
                      ? { background: PINK, borderColor: PINK, color: "#fff" }
                      : { borderColor: "var(--line)", color: "var(--muted)" }
                  }
                >
                  {t}
                </span>
              ))}
            </span>
          </div>
        </div>

        <span
          className="tw:mx-3.5 tw:mt-3 tw:block tw:rounded-full tw:py-2 tw:text-center tw:text-[12px] tw:font-semibold tw:text-white"
          style={{ background: PINK }}
        >
          Send my request
        </span>

        <div
          className="tw:absolute tw:inset-x-2.5 tw:top-[40px] tw:z-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white/95 tw:px-3 tw:py-2 tw:ring-1 tw:ring-(--line) tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
            style={{ background: TEAL }}
          >
            <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Request received</b>
            We’ll text you to confirm
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const STATUS_MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
/* Bars are every third day; "month-bar" keys mark days the storm notice
   was showing. */
const NOTICE = new Set(["2-7", "3-1", "3-2"]);
const NOTICE_LOG: [string, string][] = [
  ["Sep 4", "Storm notice switched on from a phone"],
  ["Sep 7", "Notice off, regular hours back"],
];

/** Hurricane-season status board: the site online every day from June to
    November, the days the storm notice showed, its log and the console's
    three numbers. Decorative. */
export function FlWebDarkUi({
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
        <b className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:text-[15px]">
          <span
            className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px]"
            style={{ background: MINT, color: TEAL }}
          >
            <FiActivity className="tw:size-3.5" />
          </span>
          <span className="tw:truncate">{c.title}</span>
        </b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:font-medium tw:text-(--text)">
        <i className="tw:relative tw:grid tw:size-2.5 tw:place-items-center">
          <i className="tw:absolute tw:inset-0 tw:animate-ping tw:rounded-full tw:bg-[#16a34a]/40" />
          <i className="tw:size-2.5 tw:rounded-full tw:bg-[#16a34a]" />
        </i>
        yourcompany.com · online
      </span>
      <div className="tw:mt-3 tw:grid tw:grid-cols-6 tw:gap-2 tw:max-bssm:gap-1.5">
        {STATUS_MONTHS.map((m, mi) => (
          <div key={m} style={inAt(mi + 1)}>
            <span className="tw:flex tw:h-9 tw:gap-[2px]">
              {Array.from({ length: 10 }, (_, bi) => (
                <i
                  key={bi}
                  className="tw:block tw:flex-1 tw:rounded-[2px]"
                  style={{
                    background: NOTICE.has(`${mi}-${bi}`) ? PINK : "#22c55e",
                    opacity: NOTICE.has(`${mi}-${bi}`) ? 1 : 0.85,
                  }}
                />
              ))}
            </span>
            <span className="tw:mt-1 tw:block tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
              {m}
            </span>
          </div>
        ))}
      </div>
      <span className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1">
          <i className="tw:size-2 tw:rounded-[2px] tw:bg-[#22c55e]" /> Online
        </span>
        <span className="tw:flex tw:items-center tw:gap-1">
          <i
            className="tw:size-2 tw:rounded-[2px]"
            style={{ background: PINK }}
          />{" "}
          Storm notice showing
        </span>
      </span>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {NOTICE_LOG.map(([d, t], i) => (
          <li
            key={d}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 5)}
          >
            <b
              className="tw:grid tw:h-6 tw:w-12 tw:flex-none tw:place-items-center tw:rounded-[7px] tw:bg-white tw:text-[10.5px]"
              style={{ color: PINK }}
            >
              {d}
            </b>
            <span className="tw:truncate">{t}</span>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:px-3 tw:py-2.5"
            style={{ background: "#f0fdfa" }}
          >
            <b
              className="tw:block tw:text-[19px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: TEAL }}
            >
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

/** Before → after as ten-segment meters: teal segments are the starting
    point, pink ones light up in turn to the after value. */
export function FlWebScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-4">
        {rows.map((row) => {
          const b = Math.round(row.before / 10);
          const a = Math.round(row.after / 10);
          return (
            <li key={row.label}>
              <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-2 tw:text-[13.5px] tw:font-medium">
                {row.label}
                <span className="tw:flex-none tw:text-[12px] tw:text-(--muted)">
                  {row.before} →{" "}
                  <b className="tw:text-[17px]" style={{ color: PINK }}>
                    {row.after}
                  </b>
                </span>
              </span>
              <span className="tw:mt-2 tw:grid tw:grid-cols-10 tw:gap-1">
                {Array.from({ length: 10 }, (_, i) => (
                  <i
                    key={i}
                    className={cx(
                      "tw:block tw:h-3.5 tw:rounded-[4px]",
                      i >= b && i < a && "flw-seg",
                    )}
                    style={
                      i < b
                        ? { background: TEAL }
                        : i < a
                          ? ({
                              "--c": PINK,
                              background: PINK,
                              animationDelay: `${(i - b) * 0.18}s`,
                            } as CSSProperties)
                          : { background: "#e6ebf2" }
                    }
                  />
                ))}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-[3px]"
            style={{ background: TEAL }}
          />
          Where the old site starts
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-[3px]"
            style={{ background: PINK }}
          />
          Gained by the rebuild
        </span>
      </p>
    </div>
  );
}
