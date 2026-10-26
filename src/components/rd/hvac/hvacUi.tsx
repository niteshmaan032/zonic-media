import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiFileText,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { MdAcUnit, MdLocalFireDepartment } from "react-icons/md";
import {
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import {
  Fill,
  Slot,
  TICK_AT,
  inAt,
  run,
} from "@/components/rd/delaware/uiBits";
import { photoAlt } from "@/components/rd/photoAlt";

/* UI for the HVAC marketing agency redesign (24 Oct 2026); none of it
   appears on another page. Pillar colours: hot (red/orange) and cold
   (sky blue), for the two HVAC demand peaks. Hero: a four-tile bento,
   the two season photos with a growth card for each season. Also the demand-peaks chart, the Map Pack search-demand
   card, the AI-answer card and the three process-step UIs. "Your HVAC Co"
   placeholders; figures are Semrush data (labelled) or marked as examples,
   never the old page's (owner, 24 Oct). */

export const HOT = "#ef4444";
export const COLD = "#0284c7";

/* ------------------------------------------------------------ H1 icon */

/** A thermostat dial in solid red, sized in em to sit inside the H1. */
export function InlineThermostat() {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.86em] tw:w-[0.86em] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 80"
        className="tw:block tw:size-full tw:overflow-visible"
      >
        {/* One solid colour, no gradient (owner, 26 Oct 2026: H1 icons on
            the industry pages use a single colour). */}
        <circle cx="40" cy="40" r="36" fill="#dc2626" />
        <circle cx="40" cy="40" r="26" fill="#fff" />
        {Array.from({ length: 9 }, (_, i) => {
          const a = ((-135 + i * 33.75) * Math.PI) / 180;
          return (
            <path
              key={i}
              d={`M${40 + Math.sin(a) * 19} ${40 - Math.cos(a) * 19} L${40 + Math.sin(a) * 23} ${40 - Math.cos(a) * 23}`}
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}
        <path
          d="M40 40 L52 25"
          stroke="#0c1526"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="40" r="5" fill="#0c1526" />
      </svg>
    </span>
  );
}

/* --------------------------------------------------------------- hero */

/** One bento photo tile with a search chip. */
function SeasonPhoto({
  src,
  position,
  query,
  className,
  priority,
}: {
  src: string;
  position: string;
  query: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cx(
        "tw:relative tw:overflow-hidden tw:rounded-(--r-xl)",
        className,
      )}
    >
      <Image
        src={src}
        alt={photoAlt(src)}
        fill
        priority={priority}
        sizes="(max-width: 991px) 50vw, 300px"
        className="tw:object-cover"
        style={{ objectPosition: position }}
      />
      <span className="tw:absolute tw:inset-0 tw:bg-[linear-gradient(180deg,transparent_55%,rgba(12,21,38,0.35))]" />
      <span className="tw:absolute tw:bottom-3 tw:left-3 tw:flex tw:max-w-[calc(100%-24px)] tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[13px] tw:font-medium tw:text-(--ink) tw:max-bssm:text-[11px]">
        <SiGoogle className="tw:flex-none tw:text-[#4285f4]" />
        <span className="tw:truncate">{query}</span>
      </span>
    </div>
  );
}

const HB_CARD =
  "tw:relative tw:flex tw:flex-col tw:overflow-hidden tw:rounded-(--r-xl) tw:p-6 tw:max-bssm:p-4";

/** A solid growth card for the hero bento: the HVAC job we grow, a
    rising mini bar chart, no figures (owner, 24 Oct: show how we grow
    that service, not company stats). */
function GrowthCard({
  icon,
  title,
  sub,
  background,
  className,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  background: string;
  className?: string;
}) {
  return (
    <div
      className={cx(HB_CARD, "tw:justify-between tw:text-white", className)}
      style={{ background }}
    >
      <span className="tw:flex tw:items-start tw:justify-between tw:gap-3">
        <span className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[20px] tw:max-bssm:size-9 tw:max-bssm:text-[17px]">
          {icon}
        </span>
        <span className="tw:flex tw:h-10 tw:items-end tw:gap-1 tw:max-bssm:h-8">
          {[30, 45, 55, 75, 100].map((h, i) => (
            <i
              key={h}
              className="tw:block tw:w-2 tw:rounded-t-[3px] tw:max-bssm:w-1.5"
              style={{
                height: `${h}%`,
                background: `rgba(255,255,255,${0.35 + i * 0.16})`,
              }}
            />
          ))}
          <FiTrendingUp className="tw:ml-1 tw:size-5 tw:self-start tw:max-bssm:size-4" />
        </span>
      </span>
      <span>
        <b className="tw:block tw:text-[clamp(20px,1.9vw,27px)] tw:leading-[1.12] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[17px]">
          {title}
        </b>
        <span className="tw:mt-1.5 tw:block tw:text-[14px]/[1.4] tw:text-white/80 tw:max-bssm:mt-1 tw:max-bssm:text-[12px]">
          {sub}
        </span>
      </span>
    </div>
  );
}

/** Hero bento (v6, owner 24 Oct): four tiles only, and no company stats.
    Two columns: the tall AC-repair photo over a red "More AC repair calls"
    card; a blue "More furnace jobs" card over the tall furnace photo. Each
    card shows growth for that HVAC service. Static. */
export function HeroBentoUi() {
  return (
    <div
      className="tw:grid tw:w-full tw:grid-cols-2 tw:gap-4 tw:text-left tw:text-(--ink) tw:max-bssm:gap-3"
      aria-hidden="true"
    >
      <div className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
        <SeasonPhoto
          src="/images/free-website/free-hvac/ac-repair.webp"
          position="30% 50%"
          query="ac repair near me"
          className="tw:h-[320px] tw:max-bsxl:h-[290px] tw:max-bssm:h-[230px]"
          priority
        />
        <GrowthCard
          icon={<MdAcUnit />}
          title="More AC repair calls"
          sub="Every summer peak"
          background="linear-gradient(150deg,#fb923c 0%,#ef4444 55%,#dc2626 100%)"
          className="tw:h-[180px] tw:max-bsxl:h-[170px] tw:max-bssm:h-[150px]"
        />
      </div>
      <div className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
        <GrowthCard
          icon={<MdLocalFireDepartment />}
          title="More furnace jobs"
          sub="Every winter rush"
          background="linear-gradient(150deg,#38bdf8 0%,#0284c7 55%,#0369a1 100%)"
          className="tw:h-[180px] tw:max-bsxl:h-[170px] tw:max-bssm:h-[150px]"
        />
        <SeasonPhoto
          src="/images/free-website/free-hvac/furnace-heating.webp"
          position="72% 50%"
          query="furnace repair near me"
          className="tw:h-[320px] tw:max-bsxl:h-[290px] tw:max-bssm:h-[230px]"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------ demand peaks */

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const DEMAND = [78, 70, 38, 44, 64, 92, 100, 96, 60, 40, 66, 86];
const SEASON_OF = (i: number) =>
  i <= 1 || i >= 10 ? "cold" : i >= 4 && i <= 8 ? "hot" : "shoulder";

/** HVAC call volume by month (example shape): two peaks, two shoulder
    launch windows. */
export function DemandPeaksUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[460px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiCalendar />}
        title="HVAC calls by month"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-5 tw:flex tw:h-[170px] tw:items-end tw:gap-1.5">
        {DEMAND.map((h, i) => {
          const s = SEASON_OF(i);
          return (
            <span
              key={i}
              className="tw:flex tw:h-full tw:flex-1 tw:flex-col tw:justify-end tw:gap-1.5"
            >
              <i
                className="tw:block tw:w-full tw:rounded-t-[6px]"
                style={
                  {
                    "--h": `${h}%`,
                    height: `${h}%`,
                    background:
                      s === "hot" ? HOT : s === "cold" ? COLD : "#cbd5e1",
                    ...run("de-rise"),
                  } as CSSProperties
                }
              />
              <span className="tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
                {MONTHS[i]}
              </span>
            </span>
          );
        })}
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2 tw:text-[11.5px] tw:font-medium">
        <li className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-full"
            style={{ background: HOT }}
          />{" "}
          Cooling peak
        </li>
        <li className="tw:flex tw:items-center tw:gap-1.5">
          <i
            className="tw:block tw:size-2.5 tw:rounded-full"
            style={{ background: COLD }}
          />{" "}
          Heating peak
        </li>
        <li className="tw:flex tw:items-center tw:gap-1.5">
          <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-[#cbd5e1]" />{" "}
          Launch window
        </li>
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-[#fff7ed] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-[#9a3412]"
        style={run("de-late")}
      >
        <FiCheck className="tw:size-3.5" /> Start before each busy season
      </span>
    </div>
  );
}

/* ---------------------------------------------- map pack search demand */

/* The HVAC searches a Map Pack spot catches, with an example position for
   "Your Company". No search volumes or costs (owner, 25 Oct 2026: no
   Semrush figures or prices on the page). */
const SEARCHES: [query: string, rank: number, color: string][] = [
  ["ac repair near me", 1, HOT],
  ["furnace repair near me", 2, COLD],
  ["hvac repair near me", 1, "#f97316"],
  ["emergency ac repair", 3, HOT],
];

/** The HVAC searches the Map Pack sits above, with example top-3 spots. */
export function SearchDemandUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[460px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiSearch />}
        title="Your Map Pack spots"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {SEARCHES.map(([q, rank, color], i) => (
          <li
            key={q}
            className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:mb-1.5 tw:flex tw:items-center tw:gap-2 tw:text-[12.5px]">
              <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
              <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-semibold">
                {q}
              </b>
              <b className="tw:text-[13.5px] tw:font-semibold">#{rank}</b>
            </span>
            <Fill w={Math.round(((4 - rank) / 3) * 100)} color={color} />
          </li>
        ))}
      </ul>
      <span className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:bg-[#fff7ed] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-[#9a3412]">
        <span className="tw:flex tw:items-center tw:gap-2">
          <FiCheck className="tw:size-3.5" /> Goal: your company in the top 3
        </span>
        <span className="tw:font-medium tw:text-(--muted)">Tracked weekly</span>
      </span>
    </div>
  );
}

/* ---------------------------------------------------------- AI answer */

/** An AI assistant naming the contractor (example), with the platforms. */
export function AiAnswerUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <span className="tw:flex tw:items-center tw:gap-2">
        {[
          [<SiOpenai key="o" />, "#0c1526"],
          [<SiGooglegemini key="g" />, "#1a73e8"],
          [<SiPerplexity key="p" />, "#1f8a8a"],
          [<SiGoogle key="go" />, "#ea4335"],
        ].map(([icon, c], k) => (
          <span
            key={k}
            className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[10px] tw:bg-(--panel) tw:text-[16px]"
            style={{ color: c as string }}
          >
            {icon}
          </span>
        ))}
        <Chip tone="muted" className="tw:ml-auto">
          AI search · example
        </Chip>
      </span>
      <p
        className="tw:mt-4 tw:ml-auto tw:w-fit tw:max-w-[85%] tw:rounded-[16px] tw:rounded-br-[5px] tw:bg-(--blue) tw:px-3.5 tw:py-2.5 tw:text-[13px] tw:text-white"
        style={inAt(1)}
      >
        Who&apos;s the best HVAC company near me for a heat pump install?
      </p>
      <div
        className="tw:mt-3 tw:max-w-[92%] tw:rounded-[16px] tw:rounded-bl-[5px] tw:bg-(--panel) tw:px-3.5 tw:py-3 tw:text-[13px]/[1.5]"
        style={inAt(3)}
      >
        Based on reviews and local listings,{" "}
        <b className="tw:font-semibold">Your HVAC Co</b> is a strong choice: 5.0
        stars, heat pump installs, 24/7 emergency service and maintenance plans.
        <span className="tw:mt-2.5 tw:flex tw:flex-wrap tw:gap-1.5">
          {["Google Business Profile", "Reviews", "yourhvacco.com"].map(
            (src) => (
              <span
                key={src}
                className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-medium tw:text-(--muted) tw:ring-1 tw:ring-(--line)"
              >
                {src}
              </span>
            ),
          )}
        </span>
      </div>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiCheckCircle className="tw:size-3.5" /> Named in the answer, with a
        link to call
      </span>
    </div>
  );
}

/* ------------------------------------------------------------- steps */

const AUDIT: [string, ReactNode][] = [
  [
    "Map pack position",
    <Chip key="a" tone="amber">
      #7
    </Chip>,
  ],
  [
    "Google Business Profile health",
    <Chip key="b" tone="red">
      Gaps
    </Chip>,
  ],
  [
    "Review velocity vs competitors",
    <Chip key="c" tone="amber">
      Behind
    </Chip>,
  ],
  [
    "Maintenance-contract opportunity",
    <Chip key="d" tone="green">
      Open
    </Chip>,
  ],
];

const LAUNCH = [
  "Google profile rebuilt",
  "Service pages published",
  "Ads and call tracking on",
  "Review requests switched on",
];

/** HVAC process UIs (one per step). */
export function hvacStepUis(): ReactNode[] {
  return [
    <Slot key="hv-audit">
      <UiHead
        icon={<FiFileText />}
        tone="gold"
        title="HVAC marketing audit"
        right={<Chip tone="blue">Free</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {AUDIT.map(([k, v], i) => (
          <li
            key={k}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{k}</span>
            {v}
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="hv-call">
      <UiHead
        icon={<FiCalendar />}
        title="Season timing"
        right={<Chip tone="blue">Your plan</Chip>}
      />
      <div className="tw:grid tw:grid-cols-12 tw:gap-1">
        {MONTHS.map((m, i) => {
          const s = SEASON_OF(i);
          return (
            <span key={i} className="tw:grid tw:gap-1 tw:text-center">
              <i
                className="tw:block tw:h-7 tw:rounded-[5px]"
                style={{
                  background:
                    s === "hot"
                      ? "#fecaca"
                      : s === "cold"
                        ? "#bae6fd"
                        : "#fde68a",
                }}
              />
              <span className="tw:text-[9.5px] tw:font-semibold tw:text-(--muted)">
                {m}
              </span>
            </span>
          );
        })}
      </div>
      <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-[#fef3c7] tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-[#92400e]">
        <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-[#f59e0b]" />{" "}
        Best start: spring and early fall
      </span>
      <span className="tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium">
        Peak-season plan <Chip tone="green">Approved</Chip>
      </span>
    </Slot>,

    <Slot key="hv-launch">
      <UiHead
        icon={<FiCheckCircle />}
        tone="green"
        title="Launch checklist"
        right={<Chip tone="blue">Live</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {LAUNCH.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
          >
            <i
              className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[9px] tw:text-white"
              style={run(TICK_AT[i])}
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
