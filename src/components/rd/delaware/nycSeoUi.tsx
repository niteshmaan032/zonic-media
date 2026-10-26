import type { CSSProperties, ReactNode } from "react";
import {
  FiAlertOctagon,
  FiBarChart2,
  FiCode,
  FiEdit3,
  FiMapPin,
  FiMic,
  FiNavigation,
  FiPhone,
  FiStar,
  FiTag,
  FiTrendingUp,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, inAt, run } from "./uiBits";

/* UI for the NYC local SEO draft only (23 Oct 2026); none of it appears on
   another page. Feature panels (top-3 coverage across city blocks, Business
   Profile categories, local structured data), the four process steps, the
   voice-search phone, Business Profile performance on the dark card and the
   dumbbell scorecard. Illustrations: "Your Business", example figures. */

/* ------------------------------------------------------ feature panels */

const COLS = 9;
const ROWS = 7;

/** Street grid around the shop: blocks where you rank top 3 spread out
    from your door (5 blocks → 25). */
export function BlockCoverageUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title="Top 3 coverage · Astoria"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">5 blocks</Chip>}
            to={<Chip tone="green">25 blocks</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-4 tw:grid tw:grid-cols-9 tw:gap-[3px] tw:rounded-[12px] tw:bg-white tw:p-[3px] tw:ring-1 tw:ring-(--line)">
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const d =
            Math.abs((i % COLS) - 4) + Math.abs(Math.floor(i / COLS) - 3);
          const style: CSSProperties =
            d === 0
              ? { background: "var(--ink)" }
              : d === 1
                ? { background: "var(--green)" }
                : d === 2
                  ? { background: "var(--green)", ...run("de-dot-2") }
                  : d === 3
                    ? { background: "var(--green)", ...run("de-dot-4") }
                    : { background: "#e6ebf2" };
          return (
            <i
              key={i}
              className="tw:grid tw:h-[22px] tw:place-items-center tw:rounded-[3px] tw:text-[11px] tw:text-white"
              style={style}
            >
              {d === 0 ? <FiMapPin /> : null}
            </i>
          );
        })}
      </div>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-x-4 tw:gap-y-1 tw:text-[11.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[2px] tw:bg-(--green)" />{" "}
          Top 3 on Google Maps
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-[2px] tw:bg-[#e6ebf2]" />{" "}
          Not yet
        </span>
      </p>
    </div>
  );
}

const SECONDARY = [
  "Emergency plumber",
  "Drainage service",
  "Water heater installation",
  "Gas installation service",
];

/** Primary and secondary categories being added, services filling up. */
export function CategoriesUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiTag />}
        tone="gold"
        title="Business Profile categories"
        right={<Chip tone="blue">Your Business</Chip>}
      />
      <div className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-[12.5px]">
        <span className="tw:font-semibold tw:text-(--muted)">Primary</span>
        <Chip tone="ink">Plumber</Chip>
      </div>
      <ul className="tw:mt-1.5 tw:grid tw:gap-1.5">
        {SECONDARY.map((c, i) => (
          <li
            key={c}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {c}
            <Flip
              n={((i % 3) + 1) as 1 | 2 | 3}
              from={<Chip tone="muted">Missing</Chip>}
              to={<Chip tone="green">Added</Chip>}
            />
          </li>
        ))}
      </ul>
      <div className="tw:mt-3">
        <span className="tw:flex tw:justify-between tw:text-[11.5px] tw:font-semibold">
          Services listed
          <Flip
            n={3}
            from={<span className="tw:text-(--muted)">6 of 18</span>}
            to={<span className="tw:text-[#1f7a3a]">18 of 18</span>}
          />
        </span>
        <span className="tw:mt-1.5 tw:block tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
          <i
            className="tw:block tw:h-full tw:rounded-full tw:bg-(--green)"
            style={
              {
                "--b": "33%",
                "--a": "100%",
                width: "100%",
                ...run("de-split"),
              } as CSSProperties
            }
          />
        </span>
      </div>
    </div>
  );
}

const SCHEMA: [string, string][] = [
  ['"@type"', '"Plumber"'],
  ['"name"', '"Your Business"'],
  ['"areaServed"', '["Queens", "Brooklyn"]'],
  ['"openingHours"', '"Mo-Su 00:00-23:59"'],
  ['"telephone"', '"+1-718-555-0142"'],
];

/** LocalBusiness structured data writing out, then passing the test. */
export function LocalSchemaUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCode />}
        tone="green"
        title="Local business markup"
        right={<Chip tone="muted">JSON-LD</Chip>}
      />
      <div className="tw:mt-4 tw:rounded-[12px] tw:bg-(--ink) tw:px-3.5 tw:py-3 tw:font-mono tw:text-[11px]/[1.7] tw:text-white/80">
        <span className="tw:block">{"{"}</span>
        {SCHEMA.map(([k, v], i) => (
          <span
            key={k}
            className="tw:block tw:truncate tw:pl-3"
            style={inAt(i + 1)}
          >
            <span className="tw:text-[#93c5fd]">{k}</span>:{" "}
            <span className="tw:text-[#fcd34d]">{v}</span>,
          </span>
        ))}
        <span className="tw:block">{"}"}</span>
      </div>
      <p className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-semibold">
        Rich results test
        <Flip
          n={3}
          from={<Chip tone="amber">Testing…</Chip>}
          to={<Chip tone="green">Valid · 0 errors</Chip>}
        />
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const SPAM = [
  "Plumber Queens NY 24/7 Cheap",
  "Best Astoria Plumbing Pros",
  "Emergency Plumber Near Me LLC",
];

const REVIEWS = [2, 3, 5, 4, 6, 7];

const ROLLOUT: { b: string; state: ReactNode }[] = [
  { b: "Queens", state: <Chip tone="green">Top 3</Chip> },
  { b: "Brooklyn", state: <Chip tone="green">Top 3</Chip> },
  {
    b: "Manhattan",
    state: (
      <Flip
        n={2}
        from={<Chip tone="amber">#6</Chip>}
        to={<Chip tone="blue">#4 and rising</Chip>}
      />
    ),
  },
  { b: "The Bronx", state: <Chip tone="muted">Next</Chip> },
];

/** NYC local SEO process UIs. */
export function nycSeoStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="ns-spam">
      <UiHead
        icon={<FiAlertOctagon />}
        title="Fake listings in your Map Pack"
        right={<Chip tone="red">3 found</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {SPAM.map((s, i) => (
          <li
            key={s}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:min-w-0 tw:truncate">{s}</span>
            <Flip
              n={((i % 3) + 1) as 1 | 2 | 3}
              from={<Chip tone="amber">Reported</Chip>}
              to={<Chip tone="green">Removed</Chip>}
            />
          </li>
        ))}
      </ul>
      <p className="tw:text-[11px] tw:text-(--muted)">
        Reported to Google with evidence for each one.
      </p>
    </Slot>,

    <Slot key="ns-title">
      <UiHead
        icon={<FiEdit3 />}
        tone="gold"
        title="Page title rewrite"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div
        className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
        style={inAt(1)}
      >
        <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--muted) tw:uppercase">
          Before
        </span>
        <span className="tw:text-[12.5px] tw:text-(--muted) tw:line-through">
          Home | ABC Plumbing Inc.
        </span>
      </div>
      <div
        className="tw:rounded-[12px] tw:border-[1.5px] tw:border-(--blue)/40 tw:px-3 tw:py-2.5"
        style={inAt(2)}
      >
        <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--blue) tw:uppercase">
          After
        </span>
        <b className="tw:text-[12.5px] tw:text-[#1a0dab]">
          Plumber in Astoria, Queens | Your Business
        </b>
      </div>
    </Slot>,

    <Slot key="ns-reviews">
      <UiHead
        icon={<FiStar />}
        tone="green"
        title="New reviews per week"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:relative tw:flex tw:h-[104px] tw:items-end tw:gap-2.5 tw:border-b tw:border-(--line) tw:px-1">
        <span
          className="tw:absolute tw:inset-x-0 tw:border-t-[1.5px] tw:border-dashed tw:border-[#f08b80]"
          style={{ bottom: "36%" }}
        />
        {REVIEWS.map((v, i) => (
          <i
            key={i}
            className="tw:block tw:flex-1 tw:rounded-t-[5px] tw:bg-(--gold)"
            style={
              {
                "--h": `${v * 12}%`,
                height: `${v * 12}%`,
                ...run("de-rise"),
              } as CSSProperties
            }
          />
        ))}
      </div>
      <p className="tw:flex tw:flex-wrap tw:gap-x-4 tw:gap-y-1 tw:text-[10.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-2 tw:w-3 tw:rounded-[2px] tw:bg-(--gold)" />{" "}
          Your Business
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:w-3 tw:border-t-[1.5px] tw:border-dashed tw:border-[#f08b80]" />{" "}
          Top-3 average
        </span>
      </p>
    </Slot>,

    <Slot key="ns-rollout">
      <UiHead
        icon={<FiTrendingUp />}
        title="Borough rollout"
        right={<Chip tone="green">Expanding</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {ROLLOUT.map((r, i) => (
          <li
            key={r.b}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-semibold"
            style={inAt(i + 1)}
          >
            {r.b}
            {r.state}
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A spoken "near me" search answered with your listing first.
    Decorative (frame aria-hidden). */
export function VoiceSearchPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-[linear-gradient(180deg,#eef3ff_0%,#fff_55%)] tw:px-3 tw:pt-[46px] tw:text-(--ink)">
        <span
          className="tw:mx-auto tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[18px] tw:text-white"
          style={run("de-halo", 2.4)}
        >
          <FiMic />
        </span>
        <p className="tw:mt-3 tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
          Listening…
        </p>
        <p
          className="tw:mx-auto tw:mt-1 tw:max-w-fit tw:overflow-hidden tw:text-center tw:text-[14px] tw:font-semibold tw:whitespace-nowrap"
          style={run("de-type")}
        >
          &ldquo;plumber near me open now&rdquo;
        </p>
        <p className="tw:mt-4 tw:text-[11.5px]/[1.4]" style={inAt(3)}>
          Here&apos;s a plumber open now, 0.4 miles away:
        </p>
        <div
          className="tw:mt-2 tw:rounded-[14px] tw:border tw:border-(--line) tw:bg-white tw:p-3 tw:[box-shadow:0_6px_18px_rgba(12,21,38,0.08)]"
          style={inAt(4)}
        >
          <b className="tw:block tw:text-[13px]">Your Business</b>
          <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
            <span className="tw:text-[#f4b400]">★★★★★</span> 5.0 · 240 reviews
          </span>
          <span className="tw:mt-0.5 tw:block tw:text-[10.5px] tw:font-semibold tw:text-[#1f7a3a]">
            Open 24 hours · Astoria
          </span>
          <span className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[11px] tw:font-semibold">
            <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-1.5 tw:text-white">
              <FiPhone className="tw:size-3" /> Call
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue-soft) tw:py-1.5 tw:text-(--blue)">
              <FiNavigation className="tw:size-3" /> Directions
            </span>
          </span>
        </div>
        <span
          className="tw:mt-3 tw:block tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-center tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          Read out first, before any competitor
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const INSIGHTS: [number, number, number][] = [
  [20, 12, 8],
  [24, 14, 9],
  [30, 18, 11],
  [36, 22, 12],
  [42, 26, 14],
  [50, 30, 16],
];

/** Six months of Business Profile actions (calls, directions, website
    clicks) stacked, plus the console's three numbers. Decorative. */
export function ProfileInsightsUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  const tones = ["var(--blue)", "var(--gold)", "var(--green)"];
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
          <FiBarChart2 className="tw:text-(--blue)" /> Business Profile
          performance
        </b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:flex tw:h-[130px] tw:items-end tw:gap-3 tw:border-b tw:border-(--line)">
        {INSIGHTS.map((seg, i) => {
          const total = seg[0] + seg[1] + seg[2];
          return (
            <span
              key={i}
              className="tw:flex tw:flex-1 tw:flex-col-reverse tw:overflow-hidden tw:rounded-t-[6px]"
              style={
                {
                  "--h": `${total}%`,
                  height: `${total}%`,
                  ...run("de-rise"),
                } as CSSProperties
              }
            >
              {seg.map((v, k) => (
                <i
                  key={k}
                  className="tw:block"
                  style={{
                    height: `${(v / total) * 100}%`,
                    background: tones[k],
                  }}
                />
              ))}
            </span>
          );
        })}
      </div>
      <p className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-3 tw:text-[11.5px]">
        {["Calls", "Directions", "Website clicks"].map((l, k) => (
          <span key={l} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: tones[k] }}
            />{" "}
            {l}
          </span>
        ))}
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--blue-soft) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em] tw:text-(--blue-dark)">
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

/** Before and after as two dots joined by a bar on a 0–100 track. */
export function ScoreDumbbellUi({
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
              <span>
                <span className="tw:text-(--muted)">{row.before}</span> →{" "}
                <b>{row.after}</b>
              </span>
            </span>
            <span className="tw:relative tw:mt-2 tw:block tw:h-4">
              <i className="tw:absolute tw:inset-x-0 tw:top-1/2 tw:block tw:h-px tw:-translate-y-1/2 tw:bg-[#dfe5ee]" />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:h-[5px] tw:-translate-y-1/2 tw:rounded-full tw:bg-(--blue)/35"
                style={
                  {
                    left: `${row.before}%`,
                    "--s": `${row.after - row.before}%`,
                    width: `${row.after - row.before}%`,
                    ...run("de-span"),
                  } as CSSProperties
                }
              />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:size-3 tw:-translate-1/2 tw:rounded-full tw:bg-[#cbd5e1]"
                style={{ left: `${row.before}%` }}
              />
              <i
                className="tw:absolute tw:top-1/2 tw:block tw:size-4 tw:-translate-1/2 tw:rounded-full tw:bg-(--blue) tw:ring-4 tw:ring-(--blue-soft)"
                style={
                  {
                    "--b": `${row.before}%`,
                    "--a": `${row.after}%`,
                    left: `${row.after}%`,
                    ...run("de-slide"),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-2 tw:text-[13px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-[#cbd5e1]" />{" "}
          Example: starting point
        </span>
        <span className="tw:flex tw:items-center tw:gap-2">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--blue)" />{" "}
          Example: goal
        </span>
      </p>
    </div>
  );
}
