import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCornerDownRight,
  FiImage,
  FiLayers,
  FiMapPin,
  FiMessageCircle,
  FiMusic,
  FiPieChart,
  FiSearch,
  FiStar,
} from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData, FlCityUi } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import "./flStPetersburg.css";

/* UI for the St. Petersburg digital marketing page only (18 Nov 2026); none
   of it appears on another page. Feature panels (a north-to-south Pinellas
   rank strip from Dunedin to St. Pete Beach, a weekly Google posts planner
   for Grand Central District shops and restaurants, a review reply desk
   with drafts waiting for approval), the four process steps (first-look
   grades, a town-by-town build matrix, the week's rounds, leads by town),
   the review-request text that ends in a posted five-star review, the
   Pinellas peninsula pin map on the dark card and the brick-wall
   scorecard. Illustrations: "Your Company", first names, positions,
   statuses and relative bars only; no prices or client figures. Palette:
   the page's pillars (mangrove green, Gulf sky, orchid, channel teal). */

const MOSS = "#4d7c0f";
const MOSS_DARK = "#365314";
const MOSS_SOFT = "#ecfccb";
const SKY = "#e0f2fe";
const SKY_INK = "#0369a1";
const ORCHID = "#fae8ff";
const ORCHID_INK = "#a21caf";
const CHANNEL = "#164e63";
const GOLD_STAR = "#f4b400";

type Tone = "green" | "amber" | "red" | "blue" | "ink" | "muted";

/** Relative bar on its own track (no figures). */
function Bar({
  w,
  color,
  h = 6,
  track = "#eef0f5",
}: {
  w: number;
  color: string;
  h?: number;
  track?: string;
}) {
  return (
    <span
      className="tw:block tw:overflow-hidden tw:rounded-full"
      style={{ height: h, background: track }}
    >
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
  );
}

/* ------------------------------------------------------ feature panels */

const STRIP: {
  town: string;
  zone: string;
  from: string;
  to: string;
  chip: string;
  tone: Tone;
  n: 1 | 2 | 3;
}[] = [
  {
    town: "Dunedin",
    zone: "North county",
    from: "#9",
    to: "#3",
    chip: "Top 3",
    tone: "green",
    n: 1,
  },
  {
    town: "Clearwater",
    zone: "North county",
    from: "#6",
    to: "#2",
    chip: "Top 3",
    tone: "green",
    n: 1,
  },
  {
    town: "Largo",
    zone: "Mid county",
    from: "#5",
    to: "#1",
    chip: "Top 3",
    tone: "green",
    n: 2,
  },
  {
    town: "Pinellas Park",
    zone: "Mid county",
    from: "#14",
    to: "#6",
    chip: "Climbing",
    tone: "blue",
    n: 2,
  },
  {
    town: "St. Pete",
    zone: "Downtown & Kenwood",
    from: "#8",
    to: "#2",
    chip: "Top 3",
    tone: "green",
    n: 3,
  },
  {
    town: "St. Pete Beach",
    zone: "Beaches",
    from: "#17",
    to: "#9",
    chip: "Next fix",
    tone: "amber",
    n: 3,
  },
];

const STOP_COLOR: Record<Tone, string> = {
  green: MOSS,
  blue: SKY_INK,
  amber: "#d97706",
  red: "#b8352a",
  ink: CHANNEL,
  muted: "#94a3b8",
};

/** One service's map position in each town down the peninsula, north to
    south, with the stop that needs work next. */
function PinellasRankStrip() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        tone="green"
        title="Pinellas rank strip"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-3.5 tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-semibold">
        <FiSearch className="tw:flex-none tw:text-(--muted)" />
        {["ac repair", "dentist", "roofer"].map((k, i) => (
          <span
            key={k}
            className={cx(
              "tw:rounded-full tw:px-2.5 tw:py-1",
              i === 0 ? "tw:text-white" : "tw:bg-(--panel) tw:text-(--muted)",
            )}
            style={i === 0 ? { background: MOSS } : undefined}
          >
            {k}
          </span>
        ))}
        <span className="tw:ml-auto tw:font-medium tw:whitespace-nowrap tw:text-(--muted)">
          N → S
        </span>
      </div>
      <div className="tw:relative tw:mt-2">
        <span
          className="tw:absolute tw:top-4 tw:bottom-4 tw:left-[7px] tw:w-[2px] tw:rounded-full"
          style={{ background: `linear-gradient(${MOSS}, ${SKY_INK})` }}
        />
        <ul>
          {STRIP.map((r, i) => (
            <li
              key={r.town}
              className="tw:relative tw:grid tw:grid-cols-[16px_minmax(0,1fr)_auto_auto] tw:items-center tw:gap-2.5 tw:py-[5px]"
              style={inAt(i + 1)}
            >
              <span
                className="tw:relative tw:z-1 tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:border-2 tw:bg-white"
                style={{ borderColor: STOP_COLOR[r.tone] }}
              >
                <i
                  className="tw:block tw:size-1.5 tw:rounded-full"
                  style={{ background: STOP_COLOR[r.tone] }}
                />
              </span>
              <span className="tw:min-w-0 tw:leading-[1.2]">
                <b className="tw:block tw:truncate tw:text-[12.5px] tw:font-semibold">
                  {r.town}
                </b>
                <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                  {r.zone}
                </span>
              </span>
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[12px] tw:font-semibold tw:tabular-nums">
                <s className="tw:font-medium tw:text-(--muted)">{r.from}</s>
                <FiArrowRight className="tw:size-3 tw:text-(--muted)" />
                <Flip
                  n={r.n}
                  from={<span className="tw:text-(--muted)">…</span>}
                  to={<span style={{ color: MOSS_DARK }}>{r.to}</span>}
                />
              </span>
              <span className="tw:min-w-[66px] tw:text-right">
                <Flip
                  n={r.n}
                  from={<Chip tone="muted">Checking</Chip>}
                  to={<Chip tone={r.tone}>{r.chip}</Chip>}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p
        className="tw:mt-2.5 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
        style={{ background: SKY, color: CHANNEL, ...run("de-late") }}
      >
        <FiArrowRight className="tw:flex-none" />
        Next: a St. Pete Beach page and beach-town posts
      </p>
    </div>
  );
}

type PostKind = "offer" | "event" | "update";

const POST_KIND: Record<PostKind, { bg: string; ink: string; label: string }> =
  {
    offer: { bg: MOSS, ink: MOSS_SOFT, label: "Offer" },
    event: { bg: ORCHID_INK, ink: ORCHID, label: "Event" },
    update: { bg: SKY_INK, ink: SKY, label: "Update" },
  };

/* Day initials (M–S); Saturday is the open post. */
const WEEK: { d: string; posts: PostKind[] }[] = [
  { d: "M", posts: ["update"] },
  { d: "T", posts: ["offer"] },
  { d: "W", posts: [] },
  { d: "T", posts: ["event", "offer"] },
  { d: "F", posts: ["event"] },
  { d: "S", posts: ["event", "update"] },
  { d: "S", posts: ["offer"] },
];
const PICKED = 5;

/** A week of scheduled Google posts for a Central Avenue spot, with the
    Saturday ArtWalk post opened as it will look on the profile. */
function GooglePostsPlanner() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        tone="gold"
        title="Google posts planner"
        right={<Chip tone="blue">This week</Chip>}
      />
      <div className="tw:mt-3.5 tw:grid tw:grid-cols-7 tw:gap-1">
        {WEEK.map((day, i) => (
          <span key={i} className="tw:grid tw:gap-1 tw:text-center">
            <span
              className="tw:text-[10px] tw:font-semibold"
              style={{ color: i === PICKED ? MOSS_DARK : "var(--muted)" }}
            >
              {day.d}
            </span>
            <span
              className={cx(
                "tw:grid tw:h-[52px] tw:content-start tw:gap-1 tw:rounded-[9px] tw:bg-(--panel) tw:p-1",
                i === PICKED && "tw:bg-white",
              )}
              style={
                i === PICKED
                  ? { boxShadow: `inset 0 0 0 2px ${MOSS}` }
                  : undefined
              }
            >
              {day.posts.map((p, k) => (
                <i
                  key={p}
                  className="tw:block tw:h-[14px] tw:rounded-[5px]"
                  style={{
                    background: POST_KIND[p].bg,
                    ...inAt(Math.min(i, 5) + k + 1),
                  }}
                />
              ))}
            </span>
          </span>
        ))}
      </div>
      <div className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1 tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
        {(Object.keys(POST_KIND) as PostKind[]).map((k) => (
          <span key={k} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2 tw:rounded-[3px]"
              style={{ background: POST_KIND[k].bg }}
            />
            {POST_KIND[k].label}
          </span>
        ))}
      </div>
      <div
        className="tw:mt-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
        style={inAt(4)}
      >
        <span className="tw:flex tw:items-center tw:gap-2">
          <span
            className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[10px] tw:font-semibold tw:text-white"
            style={{ background: MOSS }}
          >
            YC
          </span>
          <span className="tw:min-w-0 tw:leading-[1.2]">
            <b className="tw:block tw:truncate tw:text-[12px]">Your Company</b>
            <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
              Grand Central District · Sat
            </span>
          </span>
          <span className="tw:ml-auto">
            <Flip
              n={2}
              from={<Chip tone="amber">Scheduled</Chip>}
              to={<Chip tone="green">Live</Chip>}
            />
          </span>
        </span>
        <span
          className="tw:relative tw:mt-2 tw:block tw:h-[64px] tw:overflow-hidden tw:rounded-[10px]"
          style={{
            background: `linear-gradient(120deg, ${ORCHID} 0%, ${SKY} 100%)`,
          }}
        >
          {[
            { l: "8%", t: "18%", s: 34, c: "#f0abfc" },
            { l: "30%", t: "48%", s: 26, c: "#7dd3fc" },
            { l: "62%", t: "8%", s: 40, c: "#bef264" },
            { l: "82%", t: "52%", s: 22, c: "#f0abfc" },
          ].map((b) => (
            <i
              key={b.l}
              className="tw:absolute tw:block tw:rounded-full tw:opacity-70"
              style={{
                left: b.l,
                top: b.t,
                width: b.s,
                height: b.s,
                background: b.c,
              }}
            />
          ))}
          <span
            className="tw:absolute tw:bottom-2 tw:left-2 tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:text-white"
            style={{ background: ORCHID_INK }}
          >
            <FiMusic className="tw:size-3" /> Event
          </span>
        </span>
        <b className="tw:mt-2 tw:block tw:text-[12.5px]/[1.3]">
          Open late for Second Saturday ArtWalk
        </b>
        <span className="tw:mt-0.5 tw:block tw:text-[11px]/[1.35] tw:text-(--text)">
          Patio music, local artists and the kitchen open until close.
        </span>
        <span
          className="tw:mt-2 tw:inline-flex tw:rounded-full tw:px-3 tw:py-1 tw:text-[10.5px] tw:font-semibold"
          style={{ background: MOSS_SOFT, color: MOSS_DARK }}
        >
          Learn more
        </span>
      </div>
    </div>
  );
}

const DESK: {
  name: string;
  area: string;
  stars: number;
  text: string;
  reply: string;
  n: 1 | 2 | 3;
}[] = [
  {
    name: "Maria",
    area: "Kenwood",
    stars: 5,
    text: "Booked online and they came the next morning. Spotless work.",
    reply: "Thank you, Maria! Glad the early slot suited you.",
    n: 1,
  },
  {
    name: "Tom",
    area: "Snell Isle",
    stars: 5,
    text: "Clear quote, no surprises, and the crew tidied up after.",
    reply: "Appreciate it, Tom. We’ll pass this along to the crew.",
    n: 2,
  },
  {
    name: "Renee",
    area: "Gulfport",
    stars: 3,
    text: "Good result, but the visit started an hour late.",
    reply: "Sorry for the wait, Renee. We now confirm arrival times by text.",
    n: 3,
  },
];

function Stars({ n, size = 11 }: { n: number; size?: number }) {
  return (
    <span className="tw:tracking-[1px]" style={{ fontSize: size }}>
      <span style={{ color: GOLD_STAR }}>{"★".repeat(n)}</span>
      <span className="tw:text-[#d5dce7]">{"★".repeat(5 - n)}</span>
    </span>
  );
}

/** New reviews with a drafted reply under each, waiting for the owner's
    approval before they post. */
function ReviewReplyDesk() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMessageCircle />}
        tone="ink"
        title="Review reply desk"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">3 waiting</Chip>}
            to={<Chip tone="green">All answered</Chip>}
          />
        }
      />
      <ul className="tw:mt-3.5 tw:grid tw:gap-2">
        {DESK.map((r, i) => (
          <li
            key={r.name}
            className="tw:grid tw:grid-cols-[28px_minmax(0,1fr)] tw:gap-x-2.5 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span
              className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-semibold"
              style={{
                background: r.stars < 4 ? ORCHID : MOSS_SOFT,
                color: r.stars < 4 ? ORCHID_INK : MOSS_DARK,
              }}
            >
              {r.name[0]}
            </span>
            <span className="tw:min-w-0">
              <span className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-1.5 tw:text-[12px]">
                <b className="tw:font-semibold">{r.name}</b>
                <Stars n={r.stars} />
                <span className="tw:text-[10.5px] tw:text-(--muted)">
                  · {r.area}
                </span>
              </span>
              <span className="tw:mt-0.5 tw:block tw:text-[11px]/[1.35] tw:text-(--text)">
                {r.text}
              </span>
              <span
                className="tw:mt-1.5 tw:flex tw:items-start tw:gap-1.5 tw:rounded-[10px] tw:px-2 tw:py-1.5 tw:text-[11px]/[1.35]"
                style={{ background: r.stars < 4 ? ORCHID : MOSS_SOFT }}
              >
                <FiCornerDownRight
                  className="tw:mt-0.5 tw:flex-none"
                  style={{ color: r.stars < 4 ? ORCHID_INK : MOSS }}
                />
                <span className="tw:min-w-0 tw:flex-1">{r.reply}</span>
                <span className="tw:flex-none">
                  <Flip
                    n={r.n}
                    from={<Chip tone="amber">Approve</Chip>}
                    to={<Chip tone="green">Posted</Chip>}
                  />
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-2.5 tw:text-[11.5px] tw:text-(--muted)">
        Drafted in your voice; nothing posts until you tap approve.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const GRADES: [string, string, string, string][] = [
  ["Profile categories", "C", "#fff3cc", "#8a6400"],
  ["Town coverage", "D", "#fde4e1", "#b8352a"],
  ["Review replies", "F", "#fde4e1", "#b8352a"],
  ["Mobile page speed", "B", MOSS_SOFT, MOSS_DARK],
];

const BUILD_TOWNS = ["Clearwater", "Largo", "St. Pete Beach"];
const BUILD_COLS = ["Page", "Posts", "Ads"];

const ROUNDS: { d: string; t: string; icon: ReactNode }[] = [
  { d: "Mon", t: "Ranks", icon: <FiMapPin /> },
  { d: "Tue", t: "Post", icon: <FiImage /> },
  { d: "Wed", t: "Replies", icon: <FiMessageCircle /> },
  { d: "Thu", t: "Terms", icon: <FiSearch /> },
  { d: "Fri", t: "Post", icon: <FiImage /> },
];
const ROUND_AT = [...TICK_AT, "de-dot-5"];

/* Leads by town, as shares of the ring (relative, no counts). */
const SHARE: [string, number, string][] = [
  ["St. Pete", 36, MOSS],
  ["Clearwater", 26, SKY_INK],
  ["Largo", 22, ORCHID_INK],
  ["Beaches", 16, "#f59e0b"],
];

/** St. Petersburg digital marketing process UIs. */
function stPeteStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3] = process.steps;
  let start = 0;
  const ring = SHARE.map(([town, share, color]) => {
    const seg = { town, share, color, start };
    start += share;
    return seg;
  });
  return [
    <Slot key="stp-grades">
      <UiHead
        icon={<FiSearch />}
        title="First-look grades"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Grading…</Chip>}
            to={<Chip tone="red">3 to fix</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {GRADES.map(([label, grade, bg, ink], i) => (
          <li
            key={label}
            className={cx(
              "tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:py-1 tw:pr-1 tw:pl-3 tw:text-[12px] tw:font-medium",
              i === 3 && "tw:max-bssm:hidden",
            )}
            style={inAt(i + 1)}
          >
            {label}
            <span
              className="tw:grid tw:size-[22px] tw:place-items-center tw:rounded-[7px] tw:text-[12px] tw:font-bold"
              style={{ background: bg, color: ink }}
            >
              {grade}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="stp-build">
      <UiHead
        icon={<FiLayers />}
        tone="gold"
        title="Build list by town"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_repeat(3,44px)] tw:items-center tw:gap-x-1 tw:gap-y-1.5 tw:text-[11.5px]">
        <span />
        {BUILD_COLS.map((c) => (
          <span
            key={c}
            className="tw:text-center tw:text-[10px] tw:font-semibold tw:tracking-[0.04em] tw:text-(--muted) tw:uppercase"
          >
            {c}
          </span>
        ))}
        {BUILD_TOWNS.map((t, r) => (
          <Fragment key={t}>
            <span className="tw:truncate tw:font-medium">{t}</span>
            {BUILD_COLS.map((c, k) => (
              <span key={c} className="tw:grid tw:place-items-center">
                <span
                  className="tw:grid tw:size-[20px] tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[11px] tw:text-white"
                  style={run(TICK_AT[(r + k) % 4])}
                >
                  <FiCheck />
                </span>
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </Slot>,

    <Slot key="stp-rounds">
      <UiHead
        icon={<FiClock />}
        tone="green"
        title="This week’s rounds"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:relative tw:mt-1">
        <span className="tw:absolute tw:top-[14px] tw:right-[10%] tw:left-[10%] tw:h-[2px] tw:bg-(--line)" />
        <ul className="tw:relative tw:grid tw:grid-cols-5">
          {ROUNDS.map((r, i) => (
            <li
              key={r.d}
              className="tw:grid tw:justify-items-center tw:gap-1 tw:text-center"
            >
              <span
                className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[13px] tw:text-white tw:ring-4 tw:ring-white"
                style={run(ROUND_AT[i])}
              >
                {r.icon}
              </span>
              <b className="tw:text-[10.5px] tw:leading-none">{r.d}</b>
              <span className="tw:text-[10px] tw:leading-none tw:text-(--muted)">
                {r.t}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p
        className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-medium"
        style={{ color: MOSS_DARK, ...run("de-late") }}
      >
        <FiCheck className="tw:flex-none" /> Logged for your monthly report
      </p>
    </Slot>,

    <Slot key="stp-towns">
      <UiHead
        icon={<FiPieChart />}
        title="Leads by town"
        right={<Chip tone="green">Monthly</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[76px_minmax(0,1fr)] tw:items-center tw:gap-3">
        <span className="tw:relative tw:block tw:size-[76px]">
          <svg
            viewBox="0 0 100 100"
            className="tw:size-full"
            style={run("de-area")}
          >
            <g transform="rotate(-90 50 50)">
              {ring.map((s) => (
                <circle
                  key={s.town}
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke={s.color}
                  strokeWidth="16"
                  pathLength={100}
                  strokeDasharray={`${s.share - 1.5} ${100 - s.share + 1.5}`}
                  strokeDashoffset={-s.start}
                />
              ))}
            </g>
          </svg>
          <span className="tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:text-[9.5px] tw:font-semibold tw:text-(--muted)">
            Leads
          </span>
        </span>
        <ul className="tw:grid tw:gap-1">
          {SHARE.map(([town, share, color], i) => (
            <li
              key={town}
              className="tw:grid tw:grid-cols-[78px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:text-[11px] tw:font-medium"
              style={inAt(i + 1)}
            >
              <span className="tw:flex tw:items-center tw:gap-1.5 tw:truncate">
                <i
                  className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
                  style={{ background: color }}
                />
                {town}
              </span>
              <Bar w={share * 2.4} color={color} h={5} />
            </li>
          ))}
        </ul>
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A review-request text after a Shore Acres pool repair: the message and
    its review link, the customer's reply, the Google review sheet with the
    stars filling and the review posting. Decorative (the frame is
    aria-hidden). */
function ReviewTextPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:bg-white tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-3 tw:pt-1 tw:pb-2">
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-semibold tw:text-white"
            style={{ background: MOSS }}
          >
            YC
          </span>
          <span className="tw:min-w-0 tw:leading-[1.25]">
            <b className="tw:block tw:text-[11.5px]">Your Company</b>
            <span className="tw:block tw:text-[9.5px] tw:text-(--muted)">
              Text message · Today
            </span>
          </span>
        </div>
        <div className="tw:grid tw:gap-2 tw:px-3 tw:pt-2.5">
          <p
            className="tw:max-w-[86%] tw:rounded-[16px] tw:rounded-bl-[5px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11px]/[1.4]"
            style={inAt(1)}
          >
            Hi Dana, thanks for having us out to Shore Acres today. How did the
            pool pump repair turn out?
          </p>
          <span
            className="tw:flex tw:max-w-[86%] tw:items-center tw:gap-2 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2"
            style={inAt(2)}
          >
            <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:bg-(--panel)">
              <SiGoogle className="tw:text-[#4285f4]" />
            </span>
            <span className="tw:min-w-0 tw:leading-[1.25]">
              <b className="tw:block tw:truncate tw:text-[11px]">
                Rate Your Company
              </b>
              <span className="tw:block tw:truncate tw:text-[9.5px] tw:text-(--muted)">
                Google review · takes a minute
              </span>
            </span>
          </span>
          <p
            className="tw:max-w-[70%] tw:justify-self-end tw:rounded-[16px] tw:rounded-br-[5px] tw:px-3 tw:py-2 tw:text-[11px]/[1.4] tw:text-white"
            style={{ background: SKY_INK, ...inAt(3) }}
          >
            Glad to, it runs quietly now!
          </p>
        </div>
        <div
          className="stp-sheet tw:absolute tw:inset-x-0 tw:bottom-0 tw:rounded-t-[24px] tw:bg-white tw:px-4 tw:pt-2 tw:pb-4 tw:[box-shadow:0_-12px_30px_rgba(12,21,38,0.16)]"
          style={{ borderTop: `3px solid ${MOSS}` }}
        >
          <i className="tw:mx-auto tw:block tw:h-1 tw:w-9 tw:rounded-full tw:bg-[#d5dce7]" />
          <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2">
            <SiGoogle className="tw:flex-none tw:text-[#4285f4]" />
            <b className="tw:text-[13px]">Your Company</b>
          </span>
          <span className="tw:mt-0.5 tw:block tw:text-[10px] tw:text-(--muted)">
            Posting publicly as Dana
          </span>
          <span className="tw:mt-2.5 tw:flex tw:justify-center tw:gap-2">
            {[1, 2, 3, 4, 5].map((k) => (
              <FiStar
                key={k}
                className={`stp-star stp-star-${k} tw:size-[24px]`}
                fill="currentColor"
              />
            ))}
          </span>
          <span className="stp-txt tw:mt-2.5 tw:block tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[10.5px]/[1.4] tw:text-(--text)">
            Quick, friendly crew. They found the pump fault fast and explained
            every step.
          </span>
          <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-end tw:gap-2 tw:text-[11px] tw:font-semibold">
            <span className="tw:text-(--muted)">Cancel</span>
            <span
              className="stp-press tw:rounded-full tw:px-4 tw:py-1.5 tw:text-white"
              style={{ background: SKY_INK }}
            >
              Post
            </span>
          </span>
        </div>
        <div
          className="tw:absolute tw:inset-x-3 tw:top-[38px] tw:z-2 tw:flex tw:items-center tw:gap-2 tw:rounded-[14px] tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-white tw:[box-shadow:0_10px_24px_rgba(12,21,38,0.25)]"
          style={{ background: CHANNEL, ...run("de-late") }}
        >
          <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/15">
            <FiCheck />
          </span>
          <span className="tw:min-w-0">
            <span className="tw:block">Review posted</span>
            <span className="tw:block tw:text-[10px] tw:font-medium tw:text-white/75">
              <span style={{ color: GOLD_STAR }}>★★★★★</span> on Google Maps
            </span>
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/* Schematic Pinellas peninsula (viewBox 0 0 140 300): the Gulf to the
   west, the bay to the east, the county line across the top and St.
   Petersburg filling the southern end. */
const LAND =
  "M20 0 H114 C112 40 106 80 98 110 C92 135 88 160 92 185 C96 205 112 215 118 236 C122 256 114 276 98 288 C82 298 56 298 38 288 C30 280 28 262 28 240 C27 210 26 180 23 150 C21 120 18 95 16 70 C15 45 18 20 20 0 Z";
const ISLANDS = "M12 104 C10 150 15 200 18 240 C20 264 24 282 31 294";

const PINS: { town: string; x: number; y: number; w: number }[] = [
  { town: "Tarpon Springs", x: 36, y: 24, w: 34 },
  { town: "Palm Harbor", x: 44, y: 54, w: 46 },
  { town: "Dunedin", x: 32, y: 84, w: 52 },
  { town: "Clearwater", x: 40, y: 114, w: 80 },
  { town: "Largo", x: 60, y: 148, w: 68 },
  { town: "Seminole", x: 40, y: 182, w: 44 },
  { town: "Pinellas Park", x: 74, y: 190, w: 58 },
  { town: "St. Petersburg", x: 94, y: 236, w: 92 },
  { town: "Gulfport", x: 68, y: 262, w: 40 },
  { town: "St. Pete Beach", x: 42, y: 278, w: 62 },
];
/** The towns bringing the most leads get a pulsing pin and a green bar. */
const TOP_PIN = 66;

/** Leads pinned down the Pinellas peninsula, north to south, with a
    relative bar per town and the console's numbers. Decorative. */
function PinellasPinMap({
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
          <FiMapPin style={{ color: MOSS }} /> {c.title}
        </b>
        <Chip style={{ background: MOSS_SOFT, color: MOSS_DARK }}>{c.tag}</Chip>
      </div>
      <div className="tw:mt-3 tw:grid tw:grid-cols-[148px_minmax(0,1fr)] tw:items-center tw:gap-4 tw:max-bssm:grid-cols-[108px_minmax(0,1fr)] tw:max-bssm:gap-3">
        <svg
          viewBox="0 0 140 300"
          className="tw:block tw:h-auto tw:w-full tw:rounded-[14px]"
          fontFamily="inherit"
        >
          <rect width="140" height="300" fill={SKY} />
          <path d={LAND} fill="#fff" stroke="#bae6fd" strokeWidth="1.5" />
          <path
            d={ISLANDS}
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M20 3 H114"
            stroke="#94a3b8"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text
            x="8"
            y="62"
            textAnchor="middle"
            fontSize="7"
            fontWeight="700"
            letterSpacing="2"
            fill={SKY_INK}
            transform="rotate(-90 8 62)"
          >
            GULF
          </text>
          <text
            x="130"
            y="150"
            textAnchor="middle"
            fontSize="7"
            fontWeight="700"
            letterSpacing="2"
            fill={SKY_INK}
            transform="rotate(90 130 150)"
          >
            BAY
          </text>
          {PINS.map((p, i) => {
            const color = p.w >= TOP_PIN ? MOSS : SKY_INK;
            return (
              <g key={p.town}>
                {p.w >= TOP_PIN ? (
                  <circle
                    className="stp-ping"
                    cx={p.x}
                    cy={p.y}
                    r="8"
                    fill={color}
                    style={{ animationDelay: `${i * 0.35}s` } as CSSProperties}
                  />
                ) : null}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="7"
                  fill={color}
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <text
                  x={p.x}
                  y={p.y + 2.5}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="700"
                  fill="#fff"
                >
                  {i + 1}
                </text>
              </g>
            );
          })}
        </svg>
        <ol className="tw:grid tw:gap-[7px] tw:max-bssm:gap-[5px]">
          {PINS.map((p, i) => {
            const color = p.w >= TOP_PIN ? MOSS : SKY_INK;
            return (
              <li
                key={p.town}
                className="tw:grid tw:grid-cols-[16px_minmax(0,1fr)] tw:items-center tw:gap-x-2"
                style={inAt(Math.min(Math.floor(i / 2) + 1, 6))}
              >
                <span
                  className="tw:row-span-2 tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:text-[8.5px] tw:font-bold tw:text-white"
                  style={{ background: color }}
                >
                  {i + 1}
                </span>
                <span className="tw:truncate tw:text-[11px]/[1.2] tw:font-medium">
                  {p.town}
                </span>
                <Bar w={p.w} color={color} h={4} />
              </li>
            );
          })}
        </ol>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:border-l-4 tw:bg-(--panel) tw:px-3 tw:py-2.5"
            style={{ borderColor: MOSS }}
          >
            <b
              className="tw:block tw:text-[18px] tw:leading-none tw:tracking-[-0.02em]"
              style={{ color: CHANNEL }}
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

/* Each wall: a bottom course of 10 bricks and a top course offset by half
   a brick (11 pieces), 21 pieces in all. */
const PIECES = 21;
const fillOf = (v: number) => Math.round((v * PIECES) / 100);

/** Before → after as small brick walls: grey bricks are in place today,
    green ones are what the plan lays, dashed ones are still to build. */
function BrickWallScore({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <div aria-hidden="true">
      <ul className="tw:grid tw:gap-4">
        {rows.map((row) => {
          const had = fillOf(row.before);
          const will = fillOf(row.after);
          const brick = (idx: number) => {
            if (idx < had)
              return (
                <i className="tw:block tw:rounded-[3px] tw:bg-[#cbd5e1]" />
              );
            if (idx < will)
              return (
                <i
                  className="tw:block tw:rounded-[3px]"
                  style={{
                    background: `linear-gradient(180deg, #65a30d, ${MOSS})`,
                    ...inAt(Math.min(Math.floor((idx - had) / 3) + 1, 6)),
                  }}
                />
              );
            return (
              <i className="tw:block tw:rounded-[3px] tw:border tw:border-dashed tw:border-[#cbd5e1]" />
            );
          };
          return (
            <li key={row.label}>
              <span className="tw:flex tw:items-baseline tw:justify-between tw:gap-2 tw:text-[12.5px] tw:font-medium">
                {row.label}
                <span className="tw:text-[11px] tw:whitespace-nowrap tw:text-(--muted)">
                  {row.before} →{" "}
                  <b
                    className="tw:text-[16px] tw:tracking-[-0.02em]"
                    style={{ color: MOSS_DARK }}
                  >
                    {row.after}
                  </b>
                </span>
              </span>
              <span className="tw:mt-1.5 tw:grid tw:gap-[3px]">
                <span className="tw:grid tw:h-[12px] tw:grid-cols-[0.5fr_repeat(9,1fr)_0.5fr] tw:gap-[3px]">
                  {Array.from({ length: 11 }, (_, k) => (
                    <Fragment key={k}>{brick(10 + k)}</Fragment>
                  ))}
                </span>
                <span className="tw:grid tw:h-[12px] tw:grid-cols-10 tw:gap-[3px]">
                  {Array.from({ length: 10 }, (_, k) => (
                    <Fragment key={k}>{brick(k)}</Fragment>
                  ))}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-1 tw:text-[12px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:h-2.5 tw:w-4 tw:rounded-[2px] tw:bg-[#cbd5e1]" />
          In place today
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:h-2.5 tw:w-4 tw:rounded-[2px]"
            style={{ background: MOSS }}
          />
          Laid by the plan
        </span>
      </p>
    </div>
  );
}

export const stPetersburgUi: FlCityUi = {
  Feature1: PinellasRankStrip,
  Feature2: GooglePostsPlanner,
  Feature3: ReviewReplyDesk,
  Phone: ReviewTextPhone,
  DarkUi: PinellasPinMap,
  Score: BrickWallScore,
  stepUis: stPeteStepUis,
};
