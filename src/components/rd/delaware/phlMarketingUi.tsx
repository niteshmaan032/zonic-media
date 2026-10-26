import Image from "next/image";
import type { ReactNode } from "react";
import {
  FiBarChart2,
  FiBookmark,
  FiCalendar,
  FiCheck,
  FiHeart,
  FiMapPin,
  FiMessageCircle,
  FiPieChart,
  FiSend,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import { photoAlt } from "@/components/rd/photoAlt";

/* UI for the Philadelphia digital marketing draft only (23 Oct 2026); none
   of it appears on another page. Feature panels (social content calendar,
   leads by neighborhood, search-to-booked-job funnel), the four process
   steps, the social-post phone, the channel-mix board on the dark card and
   the delta scorecard. Illustrations: "Your Business". */

/* ------------------------------------------------------ feature panels */

const PLATFORM = {
  ig: {
    icon: <SiInstagram />,
    bg: "linear-gradient(45deg,#f9ce34,#ee2a7b 55%,#6228d7)",
  },
  fb: { icon: <SiFacebook />, bg: "#1877f2" },
  tt: { icon: <SiTiktok />, bg: "#0c1526" },
};

const WEEK: { day: string; post?: { p: keyof typeof PLATFORM; t: string } }[] =
  [
    { day: "Mon", post: { p: "ig", t: "Reel" } },
    { day: "Tue" },
    { day: "Wed", post: { p: "fb", t: "Offer" } },
    { day: "Thu", post: { p: "tt", t: "Video" } },
    { day: "Fri", post: { p: "ig", t: "Story" } },
    { day: "Sat" },
    { day: "Sun", post: { p: "fb", t: "Review" } },
  ];

/** A week of scheduled posts across Instagram, Facebook and TikTok. */
export function SocialCalendarUi() {
  let n = 0;
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCalendar />}
        title="Content calendar"
        right={<Chip tone="blue">This week</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-7 tw:gap-1.5">
        {WEEK.map((d) => (
          <li key={d.day} className="tw:grid tw:gap-1.5">
            <span className="tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
              {d.day}
            </span>
            {d.post ? (
              <span
                className="tw:grid tw:h-[92px] tw:content-between tw:rounded-[10px] tw:p-1.5 tw:text-white"
                style={{ background: PLATFORM[d.post.p].bg, ...inAt(++n) }}
              >
                <span className="tw:text-[12px]">
                  {PLATFORM[d.post.p].icon}
                </span>
                <b className="tw:text-[10px]">{d.post.t}</b>
              </span>
            ) : (
              <span className="tw:h-[92px] tw:rounded-[10px] tw:border tw:border-dashed tw:border-(--line)" />
            )}
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:flex tw:flex-wrap tw:gap-1.5">
        {["Reach", "Saves", "Messages"].map((k, i) => (
          <li key={k} style={inAt(i + 4)}>
            <Chip tone="green">
              <FiTrendingUp /> {k} up
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HOODS: [string, number][] = [
  ["Fishtown", 0.75],
  ["Northern Liberties", 0.55],
  ["Old City", 0.4],
  ["Manayunk", 0.65],
  ["Center City", 0.95],
  ["University City", 0.5],
  ["Germantown", 0.3],
  ["South Philly", 0.85],
  ["Northeast", 0.6],
];

/** Leads by Philadelphia neighborhood as a heat grid. */
export function NeighborhoodHeatUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMapPin />}
        title="Leads by neighborhood"
        right={<Chip tone="muted">Last 30 days</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-1.5">
        {HOODS.map(([name, heat], i) => (
          <li
            key={name}
            className={cx(
              "tw:grid tw:h-[62px] tw:place-items-center tw:rounded-[12px] tw:px-1.5 tw:text-center tw:text-[11.5px]/[1.2] tw:font-semibold",
              heat > 0.6 ? "tw:text-white" : "tw:text-(--ink)",
            )}
            style={{
              background: `rgba(37,103,232,${heat})`,
              ...inAt((i % 6) + 1),
            }}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:text-[11px] tw:text-(--muted)">
        Fewer
        <span className="tw:h-2 tw:flex-1 tw:rounded-full tw:bg-[linear-gradient(90deg,rgba(37,103,232,0.2),#2567e8)]" />
        More leads
      </div>
    </div>
  );
}

const STAGES: [string, number, string][] = [
  ["People who saw you", 100, "#cddcfb"],
  ["Website and profile visits", 72, "#93b4f5"],
  ["Calls, forms and messages", 46, "#4f86ee"],
  ["Booked jobs", 28, "#2567e8"],
];

/** From being seen in search to a booked job, stage by stage. */
export function FunnelUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiBarChart2 />}
        tone="green"
        title="From search to booked job"
        right={<Chip tone="green">Tracked</Chip>}
      />
      <ul className="tw:mt-5 tw:grid tw:gap-2">
        {STAGES.map(([label, w, color], i) => (
          <li key={label} className="tw:flex tw:justify-center">
            <span
              className={cx(
                "tw:block tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-center tw:text-[12.5px] tw:font-semibold",
                i > 1 ? "tw:text-white" : "tw:text-(--ink)",
              )}
              style={{ width: `${w}%`, background: color, ...inAt(i + 1) }}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:mt-3 tw:text-center tw:text-[11.5px] tw:text-(--muted)">
        Every stage measured, so budget follows what books jobs.
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const GRADES: [string, string, "red" | "amber" | "green"][] = [
  ["Website", "C", "amber"],
  ["Google profile", "D", "red"],
  ["Google Ads", "—", "red"],
  ["Social media", "B", "green"],
];

const SPLIT: [string, number, string][] = [
  ["Local SEO", 35, "var(--blue)"],
  ["Google Ads", 40, "var(--gold)"],
  ["Social", 15, "#ee2a7b"],
  ["Email", 10, "var(--green)"],
];

const MILESTONES: [string, string][] = [
  ["Week 5", "Call and form tracking live"],
  ["Week 6", "Google Ads campaigns live"],
  ["Week 7", "First social posts published"],
  ["Week 8", "First new service pages live"],
];

const KPIS: { k: string; up: boolean; bars: number[] }[] = [
  { k: "Calls", up: true, bars: [30, 42, 50, 68] },
  { k: "Forms", up: true, bars: [24, 30, 44, 58] },
  { k: "Cost per lead", up: false, bars: [70, 58, 48, 40] },
  { k: "Reviews", up: true, bars: [20, 34, 46, 62] },
];

/** Philadelphia digital marketing process UIs. */
export function phlMarketingStepUis(
  process: DelawareData["process"],
): ReactNode[] {
  const [, s2, s3] = process.steps;
  return [
    <Slot key="pm-grades">
      <UiHead
        icon={<FiBarChart2 />}
        title="Channel audit"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Grading…</Chip>}
            to={<Chip tone="blue">Grades ready</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {GRADES.map(([ch, g, tone], i) => (
          <li
            key={ch}
            className="tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            {ch}
            <Chip tone={tone}>{g}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="pm-split">
      <UiHead
        icon={<FiPieChart />}
        tone="gold"
        title="Channel plan"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:flex tw:h-5 tw:overflow-hidden tw:rounded-full">
        {SPLIT.map(([label, w, color]) => (
          <i
            key={label}
            className="tw:block tw:h-full"
            style={{ width: `${w}%`, background: color }}
          />
        ))}
      </div>
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {SPLIT.map(([label, w, color], i) => (
          <li
            key={label}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[12px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: color }}
            />
            {label}
            <span className="tw:ml-auto tw:text-(--muted)">{w}%</span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="pm-timeline">
      <UiHead
        icon={<FiCalendar />}
        tone="green"
        title="Launch timeline"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ol className="tw:relative tw:grid tw:gap-2 tw:pl-5 tw:before:absolute tw:before:top-1 tw:before:bottom-1 tw:before:left-[6px] tw:before:w-0.5 tw:before:bg-(--line) tw:before:content-['']">
        {MILESTONES.map(([wk, t], i) => (
          <li key={wk} className="tw:relative tw:text-[12px]">
            <i
              className="tw:absolute tw:top-1 tw:-left-5 tw:block tw:size-3.5 tw:rounded-full tw:ring-2 tw:ring-white"
              style={{ background: "var(--green)", ...run(TICK_AT[i]) }}
            />
            <b className="tw:block tw:text-[11px] tw:text-(--muted)">{wk}</b>
            <span className="tw:font-medium">{t}</span>
          </li>
        ))}
      </ol>
    </Slot>,

    <Slot key="pm-kpis">
      <UiHead
        icon={<FiTrendingUp />}
        title="Monthly scorecard"
        right={<Chip tone="green">Sent</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {KPIS.map((kpi, i) => (
          <li
            key={kpi.k}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:p-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:text-[11.5px] tw:font-semibold">
              {kpi.k}
              <span className="tw:text-(--green)">
                {kpi.up ? <FiTrendingUp /> : <FiTrendingDown />}
              </span>
            </span>
            <span className="tw:mt-1.5 tw:flex tw:h-7 tw:items-end tw:gap-1">
              {kpi.bars.map((h, j) => (
                <i
                  key={j}
                  className="tw:block tw:flex-1 tw:rounded-t-[3px]"
                  style={{
                    height: `${h}%`,
                    background: j === 3 ? "var(--green)" : "#cfe9d7",
                  }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** An Instagram post from the business, with a customer message arriving.
    Decorative (the frame is aria-hidden). */
export function SocialPostPhone({ image }: { image: { src: string } }) {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:gap-2 tw:px-3 tw:py-2">
          <span
            className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:p-[2px]"
            style={{ background: PLATFORM.ig.bg }}
          >
            <span className="tw:grid tw:size-full tw:place-items-center tw:rounded-full tw:bg-white tw:text-[10px] tw:font-bold">
              YB
            </span>
          </span>
          <span className="tw:leading-tight">
            <b className="tw:block tw:text-[12px]">yourbusiness</b>
            <span className="tw:text-[10px] tw:text-(--muted)">
              Philadelphia, PA
            </span>
          </span>
        </div>
        <div className="tw:relative tw:h-[250px]">
          <Image
            src={image.src}
            alt={photoAlt(image.src)}
            fill
            sizes="260px"
            className="tw:object-cover"
          />
          <span className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:flex tw:items-center tw:justify-between tw:bg-(--blue) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-white">
            Book a visit <FiSend className="tw:size-3.5" />
          </span>
        </div>
        <div className="tw:flex tw:gap-3.5 tw:px-3 tw:py-2.5 tw:text-[17px]">
          <FiHeart className="tw:fill-[#ee2a7b] tw:text-[#ee2a7b]" />
          <FiMessageCircle />
          <FiSend />
          <FiBookmark className="tw:ml-auto" />
        </div>
        <p className="tw:px-3 tw:text-[11px]/[1.4]">
          <b>yourbusiness</b> Same-week appointments across Center City,
          Fishtown and South Philly.
        </p>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-4 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
            style={{ background: PLATFORM.ig.bg }}
          >
            <FiMessageCircle className="tw:size-3.5" />
          </span>
          <span className="tw:text-[11px]/[1.3]">
            <b className="tw:block">New message</b>
            Do you have openings this Saturday?
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const MIX = [
  [18, 10, 6],
  [22, 14, 8],
  [26, 18, 10],
  [30, 22, 12],
  [34, 26, 14],
  [38, 30, 16],
];
const MIX_COLORS = ["var(--blue)", "var(--gold)", "#ee2a7b"];

/** Leads by channel over six months, stacked, with the console's three
    numbers. Decorative. */
export function ChannelMixUi({
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
        <b className="tw:text-[15px]">{c.title}</b>
        <Chip tone="blue">{c.tag}</Chip>
      </div>
      <div className="tw:mt-4 tw:flex tw:h-[150px] tw:items-end tw:gap-3 tw:border-b tw:border-(--line)">
        {MIX.map((m, i) => (
          <span
            key={i}
            className="tw:flex tw:h-full tw:flex-1 tw:flex-col-reverse"
            style={inAt(i + 1)}
          >
            {m.map((v, j) => (
              <i
                key={j}
                className={cx(
                  "tw:block tw:w-full",
                  j === m.length - 1 && "tw:rounded-t-[6px]",
                )}
                style={{ height: `${v * 1.15}%`, background: MIX_COLORS[j] }}
              />
            ))}
          </span>
        ))}
      </div>
      <div className="tw:mt-2 tw:flex tw:justify-between tw:text-[10.5px] tw:text-(--muted)">
        {["M1", "M2", "M3", "M4", "M5", "M6"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <p className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-3 tw:text-[11.5px]">
        {["Search", "Maps", "Social"].map((l, i) => (
          <span key={l} className="tw:flex tw:items-center tw:gap-1.5">
            <i
              className="tw:block tw:size-2.5 tw:rounded-full"
              style={{ background: MIX_COLORS[i] }}
            />
            {l}
          </span>
        ))}
      </p>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {c.metrics.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[20px] tw:leading-none tw:tracking-[-0.02em]">
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

/** Before → after with the points gained called out. */
export function ScoreDeltaUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <ul className="tw:grid tw:gap-2.5" aria-hidden="true">
      {rows.map((row) => (
        <li
          key={row.label}
          className="tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:border tw:border-(--line) tw:px-4 tw:py-3"
        >
          <span className="tw:min-w-0 tw:flex-1 tw:text-[14px] tw:font-medium">
            {row.label}
          </span>
          <span className="tw:text-[13px] tw:text-(--muted) tw:line-through">
            {row.before}
          </span>
          <span className="tw:text-(--muted)">→</span>
          <b className="tw:text-[20px] tw:leading-none tw:text-(--ink)">
            {row.after}
          </b>
          <span className="tw:rounded-full tw:bg-(--green-soft) tw:px-2 tw:py-0.5 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]">
            +{row.after - row.before}
          </span>
        </li>
      ))}
      <li className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted)">
        <FiCheck className="tw:text-(--green)" /> Points gained in the first six
        months
      </li>
    </ul>
  );
}
