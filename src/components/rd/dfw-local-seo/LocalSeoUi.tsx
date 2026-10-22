import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiFileText,
  FiLayers,
  FiLayout,
  FiLink,
  FiList,
  FiMapPin,
  FiSearch,
  FiStar,
} from "react-icons/fi";
import { SiApple, SiFacebook, SiGoogle, SiGooglemaps, SiYelp } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import {
  AboutCard,
  Appear,
  Chip,
  Line,
  StepUi,
  Swap,
  UI_CARD,
  UiHead,
  uiDelay,
} from "@/components/rd/dfw-kit/ui";

/* UI that replaced the photos on /services/dallas-fort-worth/local-seo-
   agency (19 Oct 2026): the about-section card, a Map Pack grid scan
   (unused: the owner kept the photo in that box) and one small UI per
   process step. The card explains Google's three local ranking factors
   (support.google.com/business/answer/7091: relevance, distance,
   prominence; no paid way to rank higher), following on from the about
   copy's "Google shows three businesses on the map". Pricing lives in the
   page's pricing section, so the card no longer repeats it. */

/* ------------------------------------------------------------ about */

export function RankFactorsCard() {
  return (
    <AboutCard
      tone="gold"
      top={
        <span className="tw:flex tw:gap-1.5" aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span
              key={n}
              className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[17px] tw:font-semibold tw:text-(--ink) tw:max-bslg:size-9 tw:max-bslg:text-[15px]"
            >
              {n}
            </span>
          ))}
        </span>
      }
      kicker="The Map Pack, explained"
      title="How Google picks the top three"
      points={[
        <><b className="tw:font-semibold">Relevance:</b> how well your profile matches the search</>,
        <><b className="tw:font-semibold">Distance:</b> how far you are from the person searching</>,
        <><b className="tw:font-semibold">Prominence:</b> your reviews, links and listings</>,
      ]}
      foot="That’s Google’s own guidance, and no one can pay for a better spot. We work on all three."
    />
  );
}

/* Grid points across the map; the business sits at (CX, CY). Colour
   spreads outward from it (delay by distance), like a real grid scan
   improving month by month. No rank numbers. */
const COLS = [20, 32, 44, 56, 68, 80, 92];
const ROWS = [16, 38.7, 61.3, 84];
const CX = 56;
const CY = 50;

export function GridScan() {
  return (
    <div className="tw:absolute tw:inset-0 tw:overflow-hidden tw:bg-[#eaf0fa]" aria-hidden="true">
      <svg viewBox="0 0 800 460" preserveAspectRatio="none" className="tw:absolute tw:inset-0 tw:size-full">
        <path d="M640 40 C 690 30 720 70 704 110 C 690 142 640 138 630 104 C 620 76 606 50 640 40 Z" fill="#c9dcf6" />
        <path d="M150 300 C 190 290 214 330 196 360 C 180 386 140 380 134 350 C 128 326 124 306 150 300 Z" fill="#c9dcf6" />
        <path d="M0 150 H800 M400 0 V460" fill="none" stroke="#cdd7e6" strokeWidth={1.5} strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
        {[
          "M0 300 C 160 290 320 296 480 284 S 700 262 800 256",
          "M0 360 C 200 372 520 356 800 346",
          "M480 284 C 430 200 360 120 300 52 L 290 0",
          "M120 290 C 150 210 200 130 300 52",
          "M480 284 C 500 200 540 130 600 60 L 616 0",
          "M450 290 C 446 200 450 120 450 0",
          "M480 284 C 470 360 460 410 456 460",
        ].map((d) => (
          <path key={d} d={d} fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      {ROWS.map((y) =>
        COLS.map((x) => {
          const dist = Math.hypot((x - CX) / 36, (y - CY) / 34);
          return (
            <i
              key={`${x}-${y}`}
              className="tw:absolute tw:size-[22px] tw:-translate-1/2 tw:rounded-full tw:border-[3px] tw:border-white tw:bg-(--green) tw:shadow-[0_4px_10px_-4px_rgba(12,21,38,0.45)] tw:animate-[ui-dot_9s_ease-in-out_infinite_both] tw:max-bssm:size-4 tw:max-bssm:border-2"
              style={{ left: `${x}%`, top: `${y}%`, ...uiDelay(dist * 1.4) } as CSSProperties}
            />
          );
        }),
      )}

      <span
        className="tw:absolute tw:z-2 tw:flex tw:-translate-x-1/2 tw:-translate-y-full tw:flex-col tw:items-center"
        style={{ left: `${CX}%`, top: `${CY}%` }}
      >
        <span className="tw:rounded-full tw:bg-(--ink) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-medium tw:whitespace-nowrap tw:text-white">
          Your Business
        </span>
        <FiMapPin className="tw:mt-0.5 tw:size-6 tw:fill-(--blue) tw:text-white" />
      </span>

      <div className={cx(UI_CARD, "tw:absolute tw:bottom-5 tw:left-5 tw:z-3 tw:grid tw:w-[236px] tw:gap-2.5 tw:p-3.5 tw:max-bssm:hidden")}>
        <UiHead icon={<SiGooglemaps />} tone="green" title="Map Pack grid scan" />
        <span className="tw:flex tw:flex-wrap tw:gap-x-3 tw:gap-y-1 tw:text-[11.5px] tw:text-(--text)">
          {[
            ["#e2574c", "Not ranking"],
            ["#f0b429", "Top 10"],
            ["var(--green)", "Top 3"],
          ].map(([c, l]) => (
            <span key={l} className="tw:flex tw:items-center tw:gap-1.5">
              <i className="tw:size-2.5 tw:rounded-full" style={{ background: c }} /> {l}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- process */

const FINDINGS: [string, "Fix" | "Good", "amber" | "green"][] = [
  ["Google Business Profile", "Fix", "amber"],
  ["Listings", "Fix", "amber"],
  ["Reviews", "Good", "green"],
  ["Website", "Good", "green"],
];

function AuditStep() {
  return (
    <StepUi>
      <UiHead icon={<FiSearch />} title="Local SEO audit" right={<Chip tone="blue">Free</Chip>} />
      <div className="tw:grid tw:grid-cols-[84px_minmax(0,1fr)] tw:items-center tw:gap-4">
        <span className="tw:relative tw:grid tw:size-[84px] tw:place-items-center">
          <svg viewBox="0 0 84 84" className="tw:absolute tw:inset-0 tw:size-full tw:-rotate-90">
            <circle cx="42" cy="42" r="34" fill="none" stroke="var(--panel)" strokeWidth={9} />
            <circle
              cx="42"
              cy="42"
              r="34"
              fill="none"
              stroke="var(--blue)"
              strokeWidth={9}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="1"
              className="tw:animate-[ui-gauge_8s_ease_infinite_both]"
              style={{ "--g": 0.32, strokeDashoffset: 0.32 } as CSSProperties}
            />
          </svg>
          <FiMapPin className="tw:size-6 tw:text-(--blue)" />
        </span>
        <div className="tw:grid tw:gap-1.5">
          {FINDINGS.map(([label, status, tone], i) => (
            <Appear
              key={label}
              at={0.4 + i * 0.35}
              className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[12.5px] tw:font-medium"
            >
              <span className="tw:truncate">{label}</span>
              <Chip tone={tone}>{status}</Chip>
            </Appear>
          ))}
        </div>
      </div>
      <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)">
        <SiGooglemaps className="tw:text-(--green)" /> Grid scan from each part of DFW included
      </span>
    </StepUi>
  );
}

const LISTINGS = [
  { name: "Google", Icon: SiGoogle, bg: "#4285f4" },
  { name: "Apple", Icon: SiApple, bg: "var(--ink)" },
  { name: "Bing", Icon: FiSearch, bg: "#008373" },
  { name: "Yelp", Icon: SiYelp, bg: "#d32323" },
  { name: "Facebook", Icon: SiFacebook, bg: "#1877f2" },
];

function ListingsStep() {
  return (
    <StepUi>
      <UiHead icon={<FiList />} title="Listings" right={<Chip tone="muted">Same name, address, phone</Chip>} />
      <ul className="tw:grid tw:gap-1.5">
        {LISTINGS.map(({ name, Icon, bg }, i) => (
          <li key={name} className="tw:grid tw:grid-cols-[24px_64px_minmax(0,1fr)_auto] tw:items-center tw:gap-2.5">
            <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-md tw:text-[12px] tw:text-white" style={{ background: bg }}>
              <Icon />
            </span>
            <span className="tw:text-[12.5px] tw:font-medium">{name}</span>
            <Line w="100%" />
            <Swap at={0.3 + i * 0.5} from={<Chip tone="amber">Fixing</Chip>} to={<Chip tone="green">Synced</Chip>} />
          </li>
        ))}
      </ul>
    </StepUi>
  );
}

const QUEUE = [
  { Icon: FiLayout, label: "City page · Plano" },
  { Icon: FiFileText, label: "Service page" },
  { Icon: FiLink, label: "Link from a DFW site" },
  { Icon: FiStar, label: "Review requests" },
];

function BuildStep() {
  return (
    <StepUi>
      <UiHead icon={<FiLayers />} title="This month’s work" right={<Chip tone="muted">Months 2–6</Chip>} />
      <ul className="tw:grid tw:gap-1.5">
        {QUEUE.map(({ Icon, label }, i) => (
          <li key={label} className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-xl tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px] tw:font-medium">
            <Icon className="tw:flex-none tw:text-(--blue)" />
            <span className="tw:truncate">{label}</span>
            <span className="tw:ml-auto">
              <Swap at={i * 0.7} from={<Chip tone="muted">Queued</Chip>} to={<Chip tone="green">Live</Chip>} />
            </span>
          </li>
        ))}
      </ul>
    </StepUi>
  );
}

const BARS = [26, 34, 42, 55, 68, 84];

function ReportStep() {
  return (
    <StepUi>
      <UiHead icon={<FiBarChart2 />} title="Monthly report" right={<Chip tone="green">Plain English</Chip>} />
      <div className="tw:flex tw:h-[92px] tw:items-end tw:gap-2 tw:border-b tw:border-(--line) tw:px-1">
        {BARS.map((h, i) => (
          <i
            key={i}
            className="tw:block tw:flex-1 tw:rounded-t-md tw:bg-[linear-gradient(180deg,var(--blue),#7aa5f5)] tw:animate-[ui-rise_8s_ease_infinite_both]"
            style={{ "--h": `${h}%`, height: `${h}%`, ...uiDelay(i * 0.18) } as CSSProperties}
          />
        ))}
      </div>
      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        {["Calls", "Directions", "Website clicks"].map((m) => (
          <span key={m} className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]">
            {m} <FiArrowUpRight />
          </span>
        ))}
      </span>
    </StepUi>
  );
}

/** One UI per process step, in step order. */
export const localSeoStepUi: ReactNode[] = [
  <AuditStep key="audit" />,
  <ListingsStep key="listings" />,
  <BuildStep key="build" />,
  <ReportStep key="report" />,
];
