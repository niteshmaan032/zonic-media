import type { CSSProperties, ReactNode } from "react";
import {
  FiBarChart2,
  FiCalendar,
  FiCamera,
  FiCheck,
  FiChevronLeft,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiPlay,
  FiSearch,
  FiTrendingUp,
  FiVideo,
} from "react-icons/fi";
import {
  SiFacebook,
  SiGoogle,
  SiGooglemaps,
  SiInstagram,
  SiOpenai,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Fill, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flMiami.css";

/* UI for the Miami digital marketing page only (18 Nov 2026); none of it
   appears on another page. Feature panels (neighborhood × hour bubble grid
   for ad scheduling, English/Spanish search pairs as a mirrored bar chart,
   a social feed where posts turn into booked jobs), the four process steps
   (visibility audit, week 2–4 plan, weekly task cards, sources by month),
   the Instagram DM phone, neighborhood tiles with sparklines on the dark
   card and the skyline scorecard. Illustrations: "Your Company", first
   names, relative values only; no prices or client figures. Palette: the
   page's pillars (Biscayne teal, flamingo pink, deco lavender, deep wine). */

const TEAL = "#0f766e";
const TEAL_SOFT = "#ccfbf1";
const CORAL = "#f43f5e";
const CORAL_SOFT = "#fecaca";
const LAV = "#ede9fe";
const VIOLET = "#7c3aed";
const WINE = "#4c0519";
const IG_RING = "linear-gradient(45deg,#f9ce34,#ee2a7b 55%,#6228d7)";

/* ------------------------------------------------------ feature panels */

/* min-w-0: the stage is a grid, so a long header could otherwise push the
   card wider than the stage on phones. */
const FCARD = cx(CARD, "tw:min-w-0");

const DAYPARTS = ["7a", "10a", "1p", "4p", "7p", "10p"];

/* Example search activity by time of day (0–1), not client data. */
const HOOD_HOURS: { n: string; v: number[] }[] = [
  { n: "Brickell", v: [0.3, 0.55, 0.95, 0.5, 0.8, 0.35] },
  { n: "Doral", v: [0.75, 0.95, 0.6, 0.5, 0.25, 0.1] },
  { n: "Hialeah", v: [0.35, 0.5, 0.55, 0.7, 0.9, 0.4] },
  { n: "Kendall", v: [0.25, 0.4, 0.45, 0.6, 0.95, 0.5] },
  { n: "Coral Gables", v: [0.4, 0.9, 0.7, 0.55, 0.45, 0.15] },
  { n: "Miami Beach", v: [0.1, 0.25, 0.5, 0.55, 0.75, 0.95] },
];

/** When each Miami neighborhood searches: bubble size = activity, the
    coral ring marks the hour that gets the extra ad budget. */
function MiamiHoursUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiClock />}
        title="Ad hours by area"
        right={
          <Flip
            n={2}
            from={<Chip tone="muted">All day</Chip>}
            to={<Chip tone="red">Peaks boosted</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-[86px_repeat(6,minmax(0,1fr))] tw:items-center tw:gap-x-1 tw:gap-y-1.5 tw:max-bssm:grid-cols-[70px_repeat(6,minmax(0,1fr))]">
        <span />
        {DAYPARTS.map((d) => (
          <span
            key={d}
            className="tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)"
          >
            {d}
          </span>
        ))}
        {HOOD_HOURS.map((row) => {
          const peak = row.v.indexOf(Math.max(...row.v));
          return (
            <div key={row.n} className="tw:contents">
              <span className="tw:text-[11.5px]/[1.15] tw:font-medium">
                {row.n}
              </span>
              {row.v.map((v, c) => {
                const size = Math.round(6 + v * 15);
                return (
                  <span
                    key={c}
                    className="tw:grid tw:h-7 tw:place-items-center"
                  >
                    {c === peak ? (
                      <>
                        <i
                          className="mia-peak tw:col-start-1 tw:row-start-1 tw:block tw:size-[26px] tw:rounded-full"
                          style={{ background: "rgba(244,63,94,0.28)" }}
                        />
                        <i
                          className="tw:col-start-1 tw:row-start-1 tw:block tw:size-[26px] tw:rounded-full tw:border-2"
                          style={{ borderColor: CORAL, ...run("de-late") }}
                        />
                      </>
                    ) : null}
                    <i
                      className="tw:col-start-1 tw:row-start-1 tw:block tw:rounded-full"
                      style={{
                        width: size,
                        height: size,
                        background:
                          c === peak
                            ? CORAL
                            : `rgba(15,118,110,${(0.25 + v * 0.6).toFixed(2)})`,
                        ...inAt(c + 1),
                      }}
                    />
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-x-3 tw:gap-y-1.5 tw:border-t tw:border-(--line) tw:pt-3 tw:text-[11px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-1.5 tw:rounded-full"
            style={{ background: TEAL }}
          />
          <i
            className="tw:block tw:size-3 tw:rounded-full"
            style={{ background: TEAL }}
          />
          More searches
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-3 tw:rounded-full tw:border-2"
            style={{ borderColor: CORAL }}
          />
          Extra budget at the peak
        </span>
      </div>
    </div>
  );
}

/* Centre seam between the two languages (inline: the kit has no
   preflight, so a dashed style class would draw every side). */
const SEAM: CSSProperties = { borderRight: "1px dashed #cbd5e1" };

/* Example pairs; bars are relative interest within each pair. */
const PAIRS: { svc: string; en: string; es: string; a: number; b: number }[] = [
  {
    svc: "Dental",
    en: "dentist near me",
    es: "dentista cerca de mi",
    a: 86,
    b: 58,
  },
  {
    svc: "Injury law",
    en: "car accident lawyer miami",
    es: "abogado de accidentes miami",
    a: 64,
    b: 78,
  },
  {
    svc: "Roofing",
    en: "roof repair miami",
    es: "reparación de techos miami",
    a: 74,
    b: 46,
  },
  {
    svc: "Chiropractic",
    en: "chiropractor near me",
    es: "quiropráctico cerca de mi",
    a: 68,
    b: 40,
  },
];

/** The same need searched in English and in Spanish, mirrored around a
    centre seam (analysis only). */
function SearchPairsUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiGlobe />}
        tone="ink"
        title="Search pairs by service"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-2 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:uppercase">
        <span
          className="tw:flex tw:items-center tw:justify-end tw:gap-1.5 tw:pr-3"
          style={{ color: TEAL }}
        >
          English
          <i
            className="tw:block tw:size-2 tw:rounded-full"
            style={{ background: TEAL }}
          />
        </span>
        <span
          className="tw:flex tw:items-center tw:gap-1.5 tw:pl-3"
          style={{ color: CORAL }}
        >
          <i
            className="tw:block tw:size-2 tw:rounded-full"
            style={{ background: CORAL }}
          />
          Spanish
        </span>
      </div>
      <ul className="tw:mt-2 tw:grid tw:gap-2">
        {PAIRS.map((p, i) => (
          <li
            key={p.svc}
            className="tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:pt-2 tw:pb-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:block tw:text-center tw:text-[10px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
              {p.svc}
            </span>
            <span className="tw:mt-1 tw:grid tw:grid-cols-2">
              <span
                className="tw:pr-3 tw:text-right tw:text-[11.5px]/[1.25] tw:font-medium"
                style={SEAM}
              >
                “{p.en}”
              </span>
              <span className="tw:pl-3 tw:text-[11.5px]/[1.25] tw:font-medium">
                “{p.es}”
              </span>
              <span className="tw:pt-1.5 tw:pr-3" style={SEAM}>
                <Fill w={p.a} color={TEAL} className="tw:-scale-x-100" />
              </span>
              <span className="tw:pt-1.5 tw:pl-3">
                <Fill w={p.b} color={CORAL} />
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11px] tw:text-(--muted)">
        Bars compare search interest within each pair.
      </p>
    </div>
  );
}

const FEED: {
  src: "ig" | "fb";
  kind: "Reel" | "Post" | "Story";
  post: string;
  msg: string;
  done: string;
  n: 1 | 2 | 3;
  bg: string;
}[] = [
  {
    src: "ig",
    kind: "Reel",
    post: "Coral Gables yard makeover",
    msg: "Do you cover Pinecrest too?",
    done: "Estimate booked",
    n: 1,
    bg: `linear-gradient(140deg, ${TEAL}, #34d399)`,
  },
  {
    src: "fb",
    kind: "Post",
    post: "Pre-storm palm trimming",
    msg: "Could you come out this week?",
    done: "Trim scheduled",
    n: 2,
    bg: `linear-gradient(140deg, ${WINE}, ${CORAL})`,
  },
  {
    src: "ig",
    kind: "Story",
    post: "Kendall lawn route openings",
    msg: "Can we join the Thursday route?",
    done: "Route added",
    n: 3,
    bg: `linear-gradient(140deg, ${VIOLET}, #c4b5fd)`,
  },
];

/** A landscaping company's posts, the messages they started and each
    chat turning into booked work. */
function SocialLeadsUi() {
  return (
    <div className={FCARD}>
      <UiHead
        icon={<FiMessageCircle />}
        tone="gold"
        title="From post to booked job"
        right={<Chip tone="green">Tracked</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {FEED.map((f, i) => (
          <li
            key={f.post}
            className="tw:grid tw:grid-cols-[44px_minmax(0,1fr)] tw:gap-3 tw:rounded-[16px] tw:border tw:border-(--line) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:relative tw:size-11">
              <span
                className={cx(
                  "tw:grid tw:size-full tw:place-items-center tw:text-white",
                  f.kind === "Story"
                    ? "tw:rounded-full tw:p-[2px]"
                    : "tw:rounded-[12px]",
                )}
                style={{ background: f.kind === "Story" ? IG_RING : f.bg }}
              >
                {f.kind === "Story" ? (
                  <span
                    className="tw:grid tw:size-full tw:place-items-center tw:rounded-full tw:border-2 tw:border-white"
                    style={{ background: f.bg }}
                  />
                ) : f.kind === "Reel" ? (
                  <FiPlay className="tw:size-4" />
                ) : (
                  <FiCamera className="tw:size-4" />
                )}
              </span>
              <span className="tw:absolute tw:-right-1 tw:-bottom-1 tw:grid tw:size-[18px] tw:place-items-center tw:rounded-full tw:bg-white tw:text-[10px] tw:[box-shadow:0_2px_6px_rgba(12,21,38,0.18)]">
                {f.src === "ig" ? (
                  <SiInstagram style={{ color: "#e1306c" }} />
                ) : (
                  <SiFacebook style={{ color: "#1877f2" }} />
                )}
              </span>
            </span>
            <span className="tw:min-w-0">
              <span className="tw:block tw:truncate tw:text-[12px] tw:font-semibold">
                <span className="tw:text-(--muted)">{f.kind} · </span>
                {f.post}
              </span>
              <span className="tw:mt-1 tw:inline-block tw:max-w-full tw:truncate tw:rounded-[12px] tw:rounded-tl-[4px] tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11.5px]">
                {f.msg}
              </span>
              <span className="tw:mt-1.5 tw:flex tw:items-center tw:justify-between tw:gap-2">
                <span className="tw:text-[10.5px] tw:text-(--muted)">
                  Your Company
                </span>
                <Flip
                  n={f.n}
                  from={<Chip tone="amber">New message</Chip>}
                  to={
                    <Chip tone="green">
                      <FiCheck /> {f.done}
                    </Chip>
                  }
                />
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-[11px] tw:text-(--muted)">
        Every chat is tagged with the post that started it.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const AUDIT_ROWS: {
  icon: ReactNode;
  c: string;
  q: string;
  s: string;
  tone: "red" | "amber";
}[] = [
  {
    icon: <SiGooglemaps />,
    c: "#34a853",
    q: "roofer coral gables",
    s: "Not in top 3",
    tone: "red",
  },
  {
    icon: <SiGooglemaps />,
    c: "#34a853",
    q: "dentist brickell",
    s: "#9 on Maps",
    tone: "amber",
  },
  {
    icon: <SiGoogle />,
    c: "#4285f4",
    q: "ac repair doral",
    s: "No ad shown",
    tone: "red",
  },
  {
    icon: <SiOpenai />,
    c: "#10a37f",
    q: "best plumber in kendall",
    s: "Not named",
    tone: "red",
  },
];

const PLAN_WEEKS = ["Wk 2", "Wk 3", "Wk 4"];
/* Bars as [first week, last week], 0-based within PLAN_WEEKS. */
const PLAN_ROWS: { t: string; span: [number, number]; c: string }[] = [
  { t: "Profile rebuild", span: [0, 0], c: TEAL },
  { t: "Area ad groups", span: [0, 1], c: CORAL },
  { t: "Reels calendar", span: [1, 2], c: VIOLET },
  { t: "Service pages", span: [1, 2], c: WINE },
];

const WEEK_CARDS: [string, string][] = [
  ["Mon", "Search terms trimmed"],
  ["Tue", "Ad hours moved"],
  ["Wed", "Kendall Reel posted"],
  ["Thu", "Reviews answered"],
];

const SOURCES: [string, number, string][] = [
  ["Google Maps", 34, TEAL],
  ["Google Ads", 28, CORAL],
  ["Instagram", 22, VIOLET],
  ["AI answers", 16, WINE],
];

/** Miami process UIs: audit, plan, weekly work, monthly sources. */
function miamiStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="mia-audit">
      <UiHead
        icon={<FiSearch />}
        title="Miami visibility audit"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Scanning…</Chip>}
            to={<Chip tone="red">Gaps found</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {AUDIT_ROWS.map((r, i) => (
          <li
            key={r.q}
            className={cx(
              "tw:grid tw:grid-cols-[18px_minmax(0,1fr)_auto] tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium",
              // The frame crops its bottom edge; phones show three rows.
              i === 3 && "tw:max-bssm:hidden",
            )}
            style={inAt(i + 1)}
          >
            <span className="tw:text-[13px]" style={{ color: r.c }}>
              {r.icon}
            </span>
            <span className="tw:truncate">{r.q}</span>
            <Chip tone={r.tone}>{r.s}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="mia-plan">
      <UiHead
        icon={<FiCalendar />}
        tone="gold"
        title="Neighborhood plan"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[104px_repeat(3,minmax(0,1fr))] tw:max-bssm:grid-cols-[92px_repeat(3,minmax(0,1fr))] tw:gap-x-1 tw:gap-y-1.5">
        {PLAN_WEEKS.map((w, k) => (
          <span
            key={w}
            className="tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)"
            style={{ gridRow: 1, gridColumn: k + 2 }}
          >
            {w}
          </span>
        ))}
        {PLAN_ROWS.map((r, i) => (
          <div key={r.t} className="tw:contents">
            <span
              className="tw:self-center tw:truncate tw:text-[11.5px] tw:font-medium"
              style={{ gridRow: i + 2, gridColumn: 1 }}
            >
              {r.t}
            </span>
            <span
              className="tw:block tw:h-6 tw:rounded-[7px]"
              style={{
                gridRow: i + 2,
                gridColumn: `${r.span[0] + 2} / ${r.span[1] + 3}`,
                background: r.c,
                ...inAt(i + 1),
              }}
            />
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="mia-week">
      <UiHead
        icon={<FiCheck />}
        tone="green"
        title="This week’s work"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {WEEK_CARDS.map(([d, t], i) => (
          <li
            key={d}
            className="tw:rounded-[12px] tw:border tw:border-(--line) tw:px-2.5 tw:py-2"
          >
            <span className="tw:flex tw:items-center tw:justify-between">
              <b
                className="tw:text-[10.5px] tw:tracking-[0.08em] tw:uppercase"
                style={{ color: VIOLET }}
              >
                {d}
              </b>
              <i
                className="tw:grid tw:size-[18px] tw:place-items-center tw:rounded-full tw:text-white"
                style={run(TICK_AT[i])}
              >
                <FiCheck className="tw:size-[11px] tw:[stroke-width:3]" />
              </i>
            </span>
            <span className="tw:mt-1 tw:block tw:text-[11.5px]/[1.3] tw:font-medium">
              {t}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="mia-month">
      <UiHead
        icon={<FiBarChart2 />}
        title="Booked jobs by source"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <span
        className="tw:flex tw:h-4 tw:overflow-hidden tw:rounded-full"
        style={run("de-area")}
      >
        {SOURCES.map(([n, w, c]) => (
          <i
            key={n}
            className="tw:block tw:h-full"
            style={{ width: `${w}%`, background: c }}
          />
        ))}
      </span>
      <ul className="tw:grid tw:grid-cols-2 tw:gap-x-3 tw:gap-y-1 tw:text-[11.5px] tw:font-medium">
        {SOURCES.map(([n, , c]) => (
          <li key={n} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2 tw:rounded-full"
              style={{ background: c }}
            />
            {n}
          </li>
        ))}
      </ul>
      <div
        className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-[#fff1f2] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35]"
        style={run("de-late")}
      >
        <FiTrendingUp className="tw:flex-none" style={{ color: CORAL }} />
        <span>
          <b>Next month:</b> evening ads added in Hialeah
        </span>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

function Bubble({
  me,
  i,
  children,
}: {
  me?: boolean;
  i: number;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "tw:block tw:max-w-[78%] tw:rounded-[18px] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.35]",
        me
          ? "tw:self-end tw:rounded-br-[6px] tw:text-white"
          : "tw:self-start tw:rounded-bl-[6px] tw:bg-[#efeff4]",
      )}
      style={{
        ...(me
          ? { background: `linear-gradient(135deg, ${VIOLET}, ${CORAL})` }
          : {}),
        ...inAt(i),
      }}
    >
      {children}
    </span>
  );
}

/** An Instagram DM thread: a customer replies to a Brickell clinic's reel,
    asks for a time and gets booked. Decorative (the frame is
    aria-hidden). */
function MiamiDmPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-3 tw:pt-1 tw:pb-2.5">
          <FiChevronLeft className="tw:size-5 tw:flex-none" />
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:p-[2px]"
            style={{ background: IG_RING }}
          >
            <span
              className="tw:grid tw:size-full tw:place-items-center tw:rounded-full tw:border-2 tw:border-white tw:text-[11px] tw:font-bold tw:text-white"
              style={{ background: TEAL }}
            >
              V
            </span>
          </span>
          <span className="tw:min-w-0 tw:leading-tight">
            <b className="tw:block tw:text-[12.5px]">Valeria</b>
            <span className="tw:text-[10px] tw:text-(--muted)">Active now</span>
          </span>
          <span className="tw:ml-auto tw:flex tw:gap-3 tw:text-[15px]">
            <FiPhone />
            <FiVideo />
          </span>
        </div>
        <div className="tw:flex tw:flex-1 tw:flex-col tw:gap-2 tw:px-3 tw:pt-3">
          <span className="tw:text-[10px] tw:text-(--muted)">
            Replied to your reel
          </span>
          <span
            className="tw:relative tw:block tw:h-[128px] tw:w-[100px] tw:flex-none tw:overflow-hidden tw:rounded-[14px]"
            style={{
              background: `linear-gradient(170deg, ${TEAL} 0%, #134e4a 55%, ${WINE} 100%)`,
            }}
          >
            {/* Brickell skyline silhouette. */}
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="tw:absolute tw:inset-x-0 tw:bottom-[34px] tw:h-10 tw:w-full"
            >
              <path
                d="M0 40 V30 H8 V18 H14 V24 H22 V8 H28 V14 H34 V26 H42 V12 H46 V4 H50 V12 H56 V22 H64 V16 H72 V28 H80 V20 H88 V30 H100 V40 Z"
                fill="rgba(255,255,255,0.18)"
              />
            </svg>
            <FiPlay className="tw:absolute tw:top-2 tw:right-2 tw:size-3.5 tw:text-white" />
            <span className="tw:absolute tw:inset-x-2 tw:bottom-2 tw:text-[9.5px]/[1.25] tw:font-semibold tw:text-white">
              Same-week cleanings in Brickell
            </span>
          </span>
          <Bubble i={1}>Hi! Anything open Thursday after work?</Bubble>
          <Bubble me i={2}>
            Yes, 6:30 PM is free. Shall we hold it?
          </Bubble>
          <Bubble i={3}>Perfect, please book me</Bubble>
          <span
            className="tw:flex tw:w-fit tw:gap-1 tw:self-end tw:rounded-full tw:bg-[#efeff4] tw:px-3 tw:py-2.5"
            style={inAt(4)}
          >
            <i className="mia-dot tw:block tw:size-1.5 tw:rounded-full tw:bg-[#8e8e93]" />
            <i className="mia-dot tw:block tw:size-1.5 tw:rounded-full tw:bg-[#8e8e93]" />
            <i className="mia-dot tw:block tw:size-1.5 tw:rounded-full tw:bg-[#8e8e93]" />
          </span>
        </div>
        <div className="tw:mx-3 tw:mb-4 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:py-1.5 tw:pr-3 tw:pl-1.5 tw:text-[11px] tw:text-(--muted)">
          <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-[#3797f0] tw:text-white">
            <FiCamera className="tw:size-3" />
          </span>
          Message…
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-[62px] tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
            <FiCalendar className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">Cleaning booked from a DM</b>
            Thu 6:30 PM · Brickell
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Example lead trend per neighborhood (0–1, relative), no counts. */
const TILES: {
  n: string;
  pts: number[];
  s: string;
  tone: "green" | "blue" | "amber";
  c: string;
}[] = [
  {
    n: "Brickell",
    pts: [0.3, 0.36, 0.33, 0.46, 0.5, 0.58, 0.63, 0.72],
    s: "Rising",
    tone: "green",
    c: TEAL,
  },
  {
    n: "Wynwood",
    pts: [0.22, 0.26, 0.31, 0.29, 0.4, 0.46, 0.52, 0.62],
    s: "Rising",
    tone: "green",
    c: CORAL,
  },
  {
    n: "Coconut Grove",
    pts: [0.42, 0.44, 0.39, 0.45, 0.47, 0.45, 0.5, 0.52],
    s: "Steady",
    tone: "blue",
    c: VIOLET,
  },
  {
    n: "Little Havana",
    pts: [0.26, 0.3, 0.37, 0.41, 0.48, 0.55, 0.6, 0.67],
    s: "Rising",
    tone: "green",
    c: TEAL,
  },
  {
    n: "Aventura",
    pts: [0.1, 0.1, 0.16, 0.21, 0.3, 0.36, 0.43, 0.52],
    s: "New area",
    tone: "amber",
    c: CORAL,
  },
  {
    n: "Homestead",
    pts: [0.36, 0.34, 0.37, 0.41, 0.39, 0.43, 0.45, 0.47],
    s: "Steady",
    tone: "blue",
    c: VIOLET,
  },
];
const SW = 120;
const SH = 34;
const spark = (pts: number[]) =>
  pts
    .map(
      (p, k) =>
        `${k ? "L" : "M"}${(4 + k * ((SW - 8) / (pts.length - 1))).toFixed(1)} ${(SH - 4 - p * (SH - 8)).toFixed(1)}`,
    )
    .join(" ");

/** Lead trend tiles for six Miami neighborhoods, with the console's
    three numbers on a lavender strip. Decorative. */
function MiamiTilesUi({
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
        <b className="tw:flex tw:items-center tw:gap-2 tw:text-[15px]">
          <FiMapPin style={{ color: CORAL }} /> {c.title}
        </b>
        <Chip tone="red">{c.tag}</Chip>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2 tw:max-bssm:grid-cols-2">
        {TILES.map((t, i) => {
          const d = spark(t.pts);
          return (
            <li
              key={t.n}
              className="tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
              style={{ borderTop: `3px solid ${t.c}`, ...inAt(i + 1) }}
            >
              <span className="tw:block tw:truncate tw:text-[12px] tw:font-semibold">
                {t.n}
              </span>
              <svg
                viewBox={`0 0 ${SW} ${SH}`}
                preserveAspectRatio="none"
                className="tw:mt-1.5 tw:block tw:h-[34px] tw:w-full"
              >
                <path
                  d={`${d} L${SW - 4} ${SH} L4 ${SH} Z`}
                  fill={t.c}
                  fillOpacity={0.14}
                  style={run("de-area")}
                />
                <path
                  d={d}
                  fill="none"
                  stroke={t.c}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={run("de-draw")}
                />
              </svg>
              <span className="tw:mt-1.5 tw:block">
                <Chip tone={t.tone}>{t.s}</Chip>
              </span>
            </li>
          );
        })}
      </ul>
      <ul
        className="tw:mt-4 tw:grid tw:grid-cols-3 tw:rounded-[14px] tw:py-2.5"
        style={{ background: LAV }}
      >
        {c.metrics.map((m, i) => (
          <li
            key={m.label}
            className="tw:px-3"
            style={i > 0 ? { borderLeft: "1px dashed #c4b5fd" } : undefined}
          >
            <b
              className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: WINE }}
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

/* Tower tops: stepped, peaked, slanted and a deco ziggurat. */
const TOPS = [
  "polygon(0 10px, 22% 10px, 22% 0, 78% 0, 78% 10px, 100% 10px, 100% 100%, 0 100%)",
  "polygon(0 14px, 50% 0, 100% 14px, 100% 100%, 0 100%)",
  "polygon(0 0, 100% 9px, 100% 100%, 0 100%)",
  "polygon(0 12px, 15% 12px, 15% 6px, 32% 6px, 32% 0, 68% 0, 68% 6px, 85% 6px, 85% 12px, 100% 12px, 100% 100%, 0 100%)",
];
const LIT = "radial-gradient(rgba(255,255,255,0.55) 1.1px, transparent 1.5px)";
const DIM = "radial-gradient(rgba(76,5,25,0.22) 1.1px, transparent 1.5px)";
const WAVE = `M0 5 ${Array.from(
  { length: 12 },
  (_, k) =>
    `Q${k * 25 + 6.25} ${k % 2 ? 9 : 1} ${k * 25 + 12.5} 5 T${k * 25 + 25} 5`,
).join(" ")} V14 H0 Z`;

/** Before → after as four Miami towers: the pink base is the starting
    point, the lit teal floors are the gain; they rise over a bay line. */
function MiamiSkylineScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:grid-cols-4 tw:items-end tw:gap-3">
        {rows.map((row, i) => (
          <li key={row.label} className="tw:flex tw:justify-center">
            <span className="tw:relative tw:mt-10 tw:block tw:h-[150px] tw:w-full tw:max-w-[56px]">
              <span
                className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:block"
                style={
                  {
                    "--h": `${row.after}%`,
                    height: `${row.after}%`,
                    ...run("de-rise"),
                  } as CSSProperties
                }
              >
                {/* Value and spire ride on the tower's roof. */}
                <b className="tw:absolute tw:inset-x-[-8px] tw:-top-9 tw:block tw:text-center tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]">
                  {row.after}
                </b>
                <i
                  className="tw:absolute tw:-top-3 tw:left-[calc(50%-1.5px)] tw:block tw:h-3 tw:w-[3px] tw:rounded-full"
                  style={{ background: WINE }}
                />
                <span
                  className="tw:absolute tw:inset-0 tw:flex tw:flex-col"
                  style={{ clipPath: TOPS[i % TOPS.length] }}
                >
                  <span
                    className="tw:block tw:flex-1"
                    style={{
                      backgroundColor: TEAL,
                      backgroundImage: LIT,
                      backgroundSize: "8px 10px",
                    }}
                  />
                  <span
                    className="tw:block tw:flex-none"
                    style={{
                      height: `${Math.round((row.before / row.after) * 100)}%`,
                      backgroundColor: CORAL_SOFT,
                      backgroundImage: DIM,
                      backgroundSize: "8px 10px",
                    }}
                  />
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
      <svg
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        className="tw:block tw:h-3.5 tw:w-full"
      >
        <path d={WAVE} fill={TEAL_SOFT} />
      </svg>
      <ul className="tw:mt-2 tw:grid tw:grid-cols-4 tw:gap-3">
        {rows.map((row) => (
          <li
            key={row.label}
            className="tw:text-center tw:text-[12px]/[1.25] tw:font-medium tw:text-(--text)"
          >
            {row.label}
          </li>
        ))}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: CORAL_SOFT }}
          />
          Where you start
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-[2px]"
            style={{ background: TEAL }}
          />
          Six-month aim
        </span>
      </p>
    </div>
  );
}

export const miamiUi: FlCityUi = {
  Feature1: MiamiHoursUi,
  Feature2: SearchPairsUi,
  Feature3: SocialLeadsUi,
  Phone: MiamiDmPhone,
  DarkUi: MiamiTilesUi,
  Score: MiamiSkylineScore,
  stepUis: miamiStepUis,
};
