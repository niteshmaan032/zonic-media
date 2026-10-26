import type { CSSProperties, ReactNode } from "react";
import {
  FiBold,
  FiCalendar,
  FiCheck,
  FiClipboard,
  FiDroplet,
  FiEdit2,
  FiEye,
  FiGrid,
  FiItalic,
  FiLink,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";

/* UI for the NYC web design page only (23 Oct 2026); none of it appears on
   another page. Feature panels (accessibility check, editing your own site,
   page load on 4G), the four process steps, the booking phone, the
   relaunch chart on the dark card and the gauge-needle scorecard.
   Illustrations: "Your Business", example figures. */

/* ------------------------------------------------------ feature panels */

const A11Y = [
  "Color contrast 4.5:1",
  "Alt text on every image",
  "Keyboard navigation",
  "Form labels and errors",
  "Screen reader landmarks",
];

/** WCAG checks flipping from fail to pass. */
export function AccessibilityUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiEye />}
        title="Accessibility check"
        right={<Chip tone="blue">WCAG 2.2 AA</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {A11Y.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {t}
            <Flip
              n={((i % 3) + 1) as 1 | 2 | 3}
              from={<Chip tone="red">Fail</Chip>}
              to={<Chip tone="green">Pass</Chip>}
            />
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-semibold">
        Automated and manual checks
        <Flip
          n={3}
          from={<span className="tw:text-[#b8352a]">2 of 5 passing</span>}
          to={<span className="tw:text-[#1f7a3a]">5 of 5 passing</span>}
        />
      </p>
    </div>
  );
}

/** Changing Friday hours yourself and publishing in one click. */
export function SiteEditorUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiEdit2 />}
        tone="gold"
        title="Edit page · Hours"
        right={<Chip tone="muted">Draft</Chip>}
      />
      <div className="tw:mt-4 tw:flex tw:gap-1 tw:rounded-[10px] tw:bg-(--panel) tw:p-1 tw:text-[13px] tw:text-(--muted)">
        {[<FiBold key="b" />, <FiItalic key="i" />, <FiLink key="l" />].map(
          (icon, i) => (
            <span
              key={i}
              className="tw:grid tw:size-7 tw:place-items-center tw:rounded-[7px] tw:bg-white"
            >
              {icon}
            </span>
          ),
        )}
      </div>
      <label className="tw:mt-3 tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">
        Friday hours
      </label>
      <div className="tw:mt-1 tw:rounded-[10px] tw:border-[1.5px] tw:border-(--blue)/50 tw:px-3 tw:py-2 tw:text-[13px] tw:font-medium">
        <span
          className="tw:block tw:overflow-hidden tw:whitespace-nowrap"
          style={run("de-type")}
        >
          Open until 11pm on Fridays
        </span>
      </div>
      <label className="tw:mt-3 tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">
        Weekend menu
      </label>
      <div className="tw:mt-1 tw:grid tw:gap-1.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:p-3">
        <i className="tw:block tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-[#e2e8f0]" />
        <i className="tw:block tw:h-1.5 tw:w-3/5 tw:rounded-full tw:bg-[#e2e8f0]" />
      </div>
      <div className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2">
        <span
          className="tw:rounded-full tw:bg-(--ink) tw:px-4 tw:py-1.5 tw:text-[12px] tw:font-semibold tw:text-white"
          style={inAt(4)}
        >
          Publish
        </span>
        <span style={run("de-late")}>
          <Chip tone="green">Live on yourbusiness.com</Chip>
        </span>
      </div>
    </div>
  );
}

const LOAD: [string, number, number][] = [
  ["HTML", 0, 12],
  ["Styles", 10, 14],
  ["Hero image", 18, 30],
  ["Fonts", 14, 16],
  ["Scripts", 30, 22],
];

/** The new page's load waterfall on a 4G phone. */
export function LoadWaterfallUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiZap />}
        tone="green"
        title="Page load on 4G"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">Before · slow</Chip>}
            to={<Chip tone="green">After · under 2s</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {LOAD.map(([name, start, w], i) => (
          <li
            key={name}
            className="tw:grid tw:grid-cols-[72px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium"
          >
            {name}
            <span className="tw:relative tw:block tw:h-3 tw:rounded-full tw:bg-(--panel)">
              <i
                className="tw:absolute tw:inset-y-0 tw:block tw:rounded-full"
                style={
                  {
                    left: `${start}%`,
                    "--w": `${w}%`,
                    width: `${w}%`,
                    background: i === 2 ? "var(--gold)" : "var(--blue)",
                    ...run("de-fill"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-2 tw:grid tw:grid-cols-[72px_minmax(0,1fr)] tw:gap-2 tw:text-[10.5px] tw:text-(--muted)">
        <span />
        <span className="tw:flex tw:justify-between">
          <span>0s</span>
          <span>1s</span>
          <span>2s</span>
        </span>
      </p>
      <p className="tw:mt-2 tw:text-[11.5px] tw:text-(--muted)">
        Images compressed, scripts deferred, fonts preloaded.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const BRIEF: [string, string][] = [
  ["Goal", "More booked consultations"],
  ["Customers", "Brooklyn and Queens homeowners"],
  ["Must-haves", "Booking and Spanish pages"],
  ["Measured by", "Calls, forms and bookings"],
];

const SWATCHES = ["#0c1526", "#2567e8", "#fdc115", "#f2f5fd", "#ffffff"];

const CARE = [
  "Security and plugin updates",
  "Daily backups",
  "Content edits · 3 this month",
  "Uptime monitoring",
];

/** NYC web design process UIs. */
export function nycWebStepUis(process: DelawareData["process"]): ReactNode[] {
  const [s1, s2, s3] = process.steps;
  return [
    <Slot key="nw-brief">
      <UiHead
        icon={<FiClipboard />}
        title="Project brief"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {BRIEF.map(([k, v], i) => (
          <li
            key={k}
            className="tw:grid tw:grid-cols-[84px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px]"
            style={inAt(i + 1)}
          >
            <span className="tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
              {k}
            </span>
            <b className="tw:truncate tw:font-semibold">{v}</b>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="nw-wire">
      <UiHead
        icon={<FiGrid />}
        tone="gold"
        title="Homepage wireframe"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:gap-1.5 tw:rounded-[12px] tw:border tw:border-dashed tw:border-[#c9d3e3] tw:p-2.5">
        <span className="tw:flex tw:items-center tw:gap-2" style={inAt(1)}>
          <i className="tw:block tw:h-3 tw:w-10 tw:rounded-[3px] tw:bg-[#cbd5e1]" />
          <i className="tw:ml-auto tw:block tw:h-1.5 tw:w-8 tw:rounded-full tw:bg-[#e2e8f0]" />
          <i className="tw:block tw:h-1.5 tw:w-8 tw:rounded-full tw:bg-[#e2e8f0]" />
          <i className="tw:block tw:h-3 tw:w-12 tw:rounded-full tw:bg-[#94a3b8]" />
        </span>
        <span
          className="tw:grid tw:gap-1.5 tw:rounded-[8px] tw:bg-(--panel) tw:p-3"
          style={inAt(2)}
        >
          <i className="tw:block tw:h-2.5 tw:w-3/4 tw:rounded-full tw:bg-[#cbd5e1]" />
          <i className="tw:block tw:h-2.5 tw:w-1/2 tw:rounded-full tw:bg-[#cbd5e1]" />
          <i className="tw:mt-1 tw:block tw:h-4 tw:w-20 tw:rounded-full tw:bg-[#94a3b8]" />
        </span>
        <span className="tw:grid tw:grid-cols-3 tw:gap-1.5" style={inAt(3)}>
          {[0, 1, 2].map((n) => (
            <i
              key={n}
              className="tw:block tw:h-9 tw:rounded-[6px] tw:bg-(--panel)"
            />
          ))}
        </span>
      </div>
    </Slot>,

    <Slot key="nw-style">
      <UiHead
        icon={<FiDroplet />}
        tone="green"
        title="Style tile"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <span className="tw:flex tw:gap-1.5" style={inAt(1)}>
        {SWATCHES.map((c) => (
          <i
            key={c}
            className="tw:block tw:h-9 tw:flex-1 tw:rounded-[8px] tw:ring-1 tw:ring-(--line)"
            style={{ background: c }}
          />
        ))}
      </span>
      <span
        className="tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2"
        style={inAt(2)}
      >
        <b className="tw:text-[28px] tw:leading-none tw:tracking-[-0.03em]">
          Aa
        </b>
        <span className="tw:text-[11px]/[1.35] tw:text-(--muted)">
          <b className="tw:block tw:text-[12px] tw:text-(--ink)">
            Headings bold, body easy to read
          </b>
          Sized for phones first
        </span>
      </span>
      <span
        className="tw:flex tw:gap-2 tw:text-[11.5px] tw:font-semibold"
        style={inAt(3)}
      >
        <span className="tw:rounded-full tw:bg-(--blue) tw:px-3.5 tw:py-1.5 tw:text-white">
          Book now
        </span>
        <span className="tw:rounded-full tw:border tw:border-(--ink) tw:px-3.5 tw:py-1.5">
          Call us
        </span>
      </span>
    </Slot>,

    <Slot key="nw-care">
      <UiHead
        icon={<FiShield />}
        title="Website care plan"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {CARE.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <i
              className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px] tw:text-white"
              style={{ background: "var(--green)", ...run(`de-dot-${i + 1}`) }}
            >
              <FiCheck />
            </i>
            {t}
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** Booking a consultation on the mobile site: service, day, time,
    confirmed. Decorative (frame aria-hidden). */
export function BookingPhone() {
  const days = [
    ["Mon", "9"],
    ["Tue", "10"],
    ["Wed", "11"],
    ["Thu", "12"],
  ];
  const times = ["9:00", "10:30", "1:00", "3:30"];
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <span className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:pb-2.5">
          <i className="tw:block tw:size-5 tw:rounded-[6px] tw:bg-(--blue)" />
          <b className="tw:text-[11.5px]">Your Business</b>
          <FiCalendar className="tw:ml-auto tw:size-3.5 tw:text-(--muted)" />
        </span>
        <b className="tw:mt-3 tw:block tw:text-[15px] tw:tracking-[-0.01em]">
          Book a consultation
        </b>
        <span className="tw:mt-2 tw:flex tw:gap-1.5" style={inAt(1)}>
          <Chip tone="ink">Kitchen</Chip>
          <Chip tone="muted">Bathroom</Chip>
          <Chip tone="muted">Repairs</Chip>
        </span>
        <span
          className="tw:mt-3 tw:grid tw:grid-cols-4 tw:gap-1.5"
          style={inAt(2)}
        >
          {days.map(([d, n], i) => (
            <span
              key={d}
              className={cx(
                "tw:rounded-[10px] tw:py-1.5 tw:text-center tw:text-[10.5px] tw:font-semibold",
                i === 1 ? "tw:bg-(--blue) tw:text-white" : "tw:bg-(--panel)",
              )}
            >
              {d}
              <b className="tw:block tw:text-[14px]">{n}</b>
            </span>
          ))}
        </span>
        <span
          className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-1.5"
          style={inAt(3)}
        >
          {times.map((t, i) => (
            <span
              key={t}
              className={cx(
                "tw:rounded-[10px] tw:border tw:py-1.5 tw:text-center tw:text-[11.5px] tw:font-semibold",
                i === 2
                  ? "tw:border-(--blue) tw:bg-(--blue-soft) tw:text-(--blue)"
                  : "tw:border-(--line)",
              )}
            >
              {t}
            </span>
          ))}
        </span>
        <span
          className="tw:mt-3.5 tw:block tw:rounded-full tw:bg-(--ink) tw:py-2.5 tw:text-center tw:text-[12px] tw:font-semibold tw:text-white"
          style={inAt(4)}
        >
          Confirm booking
        </span>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiCheck className="tw:size-3.5" /> Booked · Tue 10, 1:00 PM
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/** Weekly inquiries before and after the relaunch (illustrative curve, no
    axis figures), plus the console's three numbers. Decorative. */
export function RelaunchUi({
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
        <b className="tw:text-[15px]">After the relaunch</b>
        <Chip tone="green">{c.tag}</Chip>
      </div>
      <div className="tw:relative tw:mt-4">
        <svg
          viewBox="0 0 300 120"
          className="tw:block tw:h-[120px] tw:w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M120 88 C150 76 180 58 210 46 S270 28 300 22 L300 120 L120 120 Z"
            fill="rgba(37,103,232,0.12)"
            style={run("de-area")}
          />
          <line
            x1="120"
            x2="120"
            y1="4"
            y2="120"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 92 L40 90 L80 94 L120 88 C150 76 180 58 210 46 S270 28 300 22"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            style={{ stroke: "var(--blue)", ...run("de-draw") }}
          />
        </svg>
        <span className="tw:absolute tw:top-0 tw:left-[40%] tw:ml-1.5 tw:rounded-full tw:bg-(--ink) tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:text-white">
          New site live
        </span>
      </div>
      <p className="tw:mt-2 tw:text-[11.5px] tw:text-(--muted)">
        Inquiries per week · example
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:border tw:border-(--green)/30 tw:bg-(--green-soft) tw:px-3 tw:py-2.5"
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

const deg = (v: number) => `${-90 + v * 1.8}deg`;

/** Four gauges whose needles swing from the before value to the after. */
export function ScoreNeedlesUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <ul className="tw:grid tw:grid-cols-2 tw:gap-3" aria-hidden="true">
      {rows.map((row) => (
        <li
          key={row.label}
          className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:pt-3 tw:pb-2.5 tw:text-center"
        >
          <svg
            viewBox="0 0 100 58"
            className="tw:mx-auto tw:block tw:w-full tw:max-w-[140px]"
          >
            <path
              d="M10 52 A40 40 0 0 1 90 52"
              fill="none"
              stroke="#e6ebf2"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M10 52 A40 40 0 0 1 90 52"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="8"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              style={
                {
                  "--g": `${1 - row.after / 100}`,
                  strokeDashoffset: 1 - row.after / 100,
                  ...run("de-gauge"),
                } as CSSProperties
              }
            />
            <line
              x1="50"
              y1="52"
              x2="50"
              y2="20"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transformBox: "view-box",
                transformOrigin: "50px 52px",
                transform: `rotate(${deg(row.before)})`,
              }}
            />
            <line
              x1="50"
              y1="52"
              x2="50"
              y2="18"
              stroke="var(--ink)"
              strokeWidth="3"
              strokeLinecap="round"
              style={
                {
                  transformBox: "view-box",
                  transformOrigin: "50px 52px",
                  "--b": deg(row.before),
                  "--a": deg(row.after),
                  transform: `rotate(${deg(row.after)})`,
                  ...run("de-needle"),
                } as CSSProperties
              }
            />
            <circle cx="50" cy="52" r="4.5" fill="var(--ink)" />
          </svg>
          <b className="tw:mt-1 tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]">
            {row.after}
          </b>
          <span className="tw:mt-0.5 tw:block tw:text-[11px] tw:text-(--muted)">
            from {row.before}
          </span>
          <span className="tw:mt-1 tw:block tw:text-[12.5px]/[1.3] tw:font-medium">
            {row.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
