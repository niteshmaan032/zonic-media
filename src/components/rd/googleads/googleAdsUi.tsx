import type { CSSProperties, ReactNode } from "react";
import {
  FiAlertTriangle,
  FiAward,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiCheck,
  FiCrosshair,
  FiEdit3,
  FiFileText,
  FiGrid,
  FiKey,
  FiLayers,
  FiMapPin,
  FiPhone,
  FiPhoneCall,
  FiRefreshCw,
  FiSearch,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGoogleads } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import {
  CARD,
  Fill,
  Flip,
  Slot,
  TICK_AT,
  inAt,
  run,
} from "@/components/rd/delaware/uiBits";

/* UI for the Google Ads service page redesign (24 Oct 2026); none of it
   appears on another page. Hero (a desktop Google Ads dashboard with a
   strong example month), feature panels (responsive
   search ad strength, keyword Quality Score, conversion actions), the five
   process steps, the lead-review phone and the service-area map on the
   dark card. Niche-neutral: "Your Business" and "[service]" placeholders;
   figures are examples, never client results. */

/* ------------------------------------------------------ feature panels */

const HEADLINES = [
  "Trusted Local Experts",
  "Free Quotes, Fast Replies",
  "Book Online Today",
  "Upfront, Fair Pricing",
];

/** A responsive search ad: the preview, its headlines (with Google's
    30-character limit) and ad strength rising to Excellent. */
export function AdStrengthUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiEdit3 />}
        tone="gold"
        title="Responsive search ad"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">Poor</Chip>}
            to={<Chip tone="green">Excellent</Chip>}
          />
        }
      />
      <div className="tw:mt-4 tw:rounded-[14px] tw:border tw:border-(--line) tw:p-3.5">
        <span className="tw:text-[11px] tw:font-semibold">Sponsored</span>
        <b className="tw:mt-1 tw:block tw:text-[14px]/[1.3] tw:font-medium tw:text-[#1a0dab]">
          Trusted Local Experts | Book Online Today
        </b>
        <span className="tw:mt-1 tw:block tw:text-[11.5px]/[1.45] tw:text-(--text)">
          Upfront, fair pricing and free quotes. Call or book in minutes.
        </span>
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {HEADLINES.map((h, i) => (
          <li
            key={h}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px]"
            style={inAt(i + 1)}
          >
            <span className="tw:font-mono tw:text-[10px] tw:font-bold tw:text-(--muted)">
              H{i + 1}
            </span>
            <span className="tw:flex-1 tw:truncate tw:font-medium">{h}</span>
            <span className="tw:text-[10.5px] tw:text-(--muted)">
              {h.length}/30
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-4">
        <span className="tw:mb-1.5 tw:flex tw:justify-between tw:text-[11px] tw:font-semibold">
          <span>Ad strength</span>
          <span className="tw:text-[#1f7a3a]">Excellent</span>
        </span>
        <Fill w={94} color="var(--green)" />
      </div>
    </div>
  );
}

const QUALITY: [string, number][] = [
  ["Expected click-through rate", 84],
  ["Ad relevance", 92],
  ["Landing page experience", 78],
];

/** One keyword's Quality Score and its three parts moving from below to
    above average. */
export function QualityScoreUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiAward />}
        title="Keyword quality"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Score 5/10</Chip>}
            to={<Chip tone="green">Score 8/10</Chip>}
          />
        }
      />
      <span className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium">
        <FiSearch className="tw:size-3.5 tw:text-(--muted)" /> [service] near me
        <span className="tw:ml-auto tw:rounded-[5px] tw:bg-(--ink) tw:px-1.5 tw:py-0.5 tw:font-mono tw:text-[10px] tw:font-bold tw:text-white">
          Exact
        </span>
      </span>
      <ul className="tw:mt-4 tw:grid tw:gap-3.5">
        {QUALITY.map(([label, w]) => (
          <li key={label}>
            <span className="tw:mb-1.5 tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-[12px] tw:font-medium">
              {label}
              <Flip
                n={2}
                from={
                  <span className="tw:text-[11px] tw:font-semibold tw:text-[#b8352a]">
                    Below average
                  </span>
                }
                to={
                  <span className="tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]">
                    Above average
                  </span>
                }
              />
            </span>
            <Fill w={w} />
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2.5 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiTrendingDown className="tw:size-3.5" /> Higher quality, lower cost
        per click
      </span>
    </div>
  );
}

const ACTIONS: [ReactNode, string, string][] = [
  [<FiPhoneCall key="a" />, "Calls from ads", "Call button on the ad"],
  [<FiPhone key="b" />, "Calls from website", "Tracking number"],
  [<FiFileText key="c" />, "Quote form sent", "Website form"],
  [<FiCalendar key="d" />, "Job booked", "Imported from your CRM"],
];

/** The conversion actions a campaign records, each switching on. */
export function ConversionActionsUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiCrosshair />}
        tone="green"
        title="Conversion tracking"
        right={<Chip tone="blue">Google Ads + GA4</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {ACTIONS.map(([icon, name, source], i) => (
          <li
            key={name}
            className="tw:grid tw:grid-cols-[28px_minmax(0,1fr)_auto] tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-[8px] tw:bg-(--panel) tw:text-[13px]">
              {icon}
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:truncate tw:text-[12.5px] tw:font-semibold">
                {name}
              </b>
              <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                {source}
              </span>
            </span>
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]">
              <i
                className="tw:block tw:size-2 tw:rounded-full tw:bg-(--green)"
                style={run(TICK_AT[i])}
              />
              Recording
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-[11.5px] tw:font-medium tw:text-white"
        style={run("de-late")}
      >
        <SiGoogleads className="tw:size-3.5 tw:text-(--gold)" /> Bidding learns
        from booked jobs, not clicks
      </span>
    </div>
  );
}

/* ------------------------------------------------------------ process */

type Step = { tag: string; title: string };

const FINDINGS: [string, "High" | "Medium"][] = [
  ["No negative keywords", "High"],
  ["Calls not tracked", "High"],
  ["Broad match everywhere", "Medium"],
  ["One ad per ad group", "Medium"],
];

const INTENT: [string, "Buy" | "Compare" | "Skip"][] = [
  ["[service] near me", "Buy"],
  ["emergency [service]", "Buy"],
  ["[service] cost", "Compare"],
  ["[service] jobs hiring", "Skip"],
];

const INTENT_TONE = { Buy: "green", Compare: "blue", Skip: "red" } as const;

const ASSETS = ["Sitelinks", "Callouts", "Call button", "Location"];

const LOG: [string, string][] = [
  ["Mon", "Negative keywords added"],
  ["Tue", "Bids raised on top searches"],
  ["Thu", "Weak ad paused"],
  ["Fri", "New headline test started"],
];

const BUDGET: [string, number, "green" | "muted" | "red", string][] = [
  ["Core services", 72, "green", "Scale"],
  ["Emergency calls", 58, "green", "Scale"],
  ["Remarketing", 30, "muted", "Hold"],
  ["Broad test", 14, "red", "Paused"],
];

/** Google Ads page process UIs (one per step). */
export function googleAdsStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3, s4, s5] = steps;
  return [
    <Slot key="ga-audit">
      <UiHead
        icon={<FiSearch />}
        title="Account audit"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {FINDINGS.map(([t, sev], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-2">
              <FiAlertTriangle
                className={cx(
                  "tw:size-3.5 tw:flex-none",
                  sev === "High" ? "tw:text-(--red)" : "tw:text-[#d97706]",
                )}
              />
              <span className="tw:truncate">{t}</span>
            </span>
            <Chip tone={sev === "High" ? "red" : "amber"}>{sev}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ga-intent">
      <UiHead
        icon={<FiKey />}
        tone="gold"
        title="Keyword intent"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {INTENT.map(([kw, intent], i) => (
          <li
            key={kw}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span
              className={cx(
                "tw:truncate",
                intent === "Skip" && "tw:text-(--muted) tw:line-through",
              )}
            >
              {kw}
            </span>
            <Chip tone={INTENT_TONE[intent]}>{intent}</Chip>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ga-assets">
      <UiHead
        icon={<FiLayers />}
        tone="green"
        title="Ad assets"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5">
        {ASSETS.map((a, i) => (
          <li
            key={a}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-[11.5px] tw:font-semibold"
          >
            {a}
            <span
              className="tw:relative tw:block tw:h-4 tw:w-7 tw:flex-none tw:rounded-full tw:bg-(--green)"
              style={run(TICK_AT[i])}
            >
              <i className="tw:absolute tw:top-0.5 tw:right-0.5 tw:block tw:size-3 tw:rounded-full tw:bg-white" />
            </span>
          </li>
        ))}
      </ul>
      <div
        className="tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5 tw:text-[11px]"
        style={run("de-late")}
      >
        <b className="tw:block tw:text-[12px] tw:font-medium tw:text-[#1a0dab]">
          Your Business | Free Quotes
        </b>
        <span className="tw:mt-1 tw:flex tw:gap-3 tw:text-[#1a0dab]">
          <span>Services</span>
          <span>Reviews</span>
          <span>Contact</span>
        </span>
        <span className="tw:mt-1.5 tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5 tw:font-semibold tw:text-(--blue-dark)">
          <FiPhone className="tw:size-3" /> Call
        </span>
      </div>
    </Slot>,

    <Slot key="ga-log">
      <UiHead
        icon={<FiRefreshCw />}
        title="Optimization log"
        right={<Chip tone="blue">{s4?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {LOG.map(([day, t], i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:w-8 tw:flex-none tw:rounded-[6px] tw:bg-(--ink) tw:py-0.5 tw:text-center tw:text-[10px] tw:font-bold tw:text-white">
              {day}
            </span>
            <span className="tw:flex-1 tw:truncate">{t}</span>
            <FiCheck className="tw:size-3.5 tw:flex-none tw:text-(--green)" />
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="ga-budget">
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="Budget by campaign"
        right={<Chip tone="blue">{s5?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-2">
        {BUDGET.map(([name, w, tone, action], i) => (
          <li
            key={name}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_64px] tw:items-center tw:gap-2.5 tw:text-[11.5px] tw:font-medium"
            style={inAt(i + 1)}
          >
            <span>
              <span className="tw:mb-1 tw:block tw:truncate">{name}</span>
              <Fill w={w} color={tone === "red" ? "#cbd5e1" : "var(--blue)"} />
            </span>
            <Chip tone={tone} className="tw:justify-center">
              {action}
            </Chip>
          </li>
        ))}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

const LEADS: [ReactNode, string, string, "green" | "red" | "blue", string][] = [
  [
    <FiPhoneCall key="1" />,
    "Call · 4m 12s",
    "[service] near me",
    "green",
    "New customer",
  ],
  [
    <FiFileText key="2" />,
    "Quote form",
    "emergency [service]",
    "green",
    "New customer",
  ],
  [
    <FiPhoneCall key="3" />,
    "Call · 0m 09s",
    "[service] cost",
    "red",
    "Not a lead",
  ],
  [
    <FiPhoneCall key="4" />,
    "Call · 2m 35s",
    "your business name",
    "blue",
    "Existing client",
  ],
];

const WAVE = [4, 9, 6, 12, 8, 14, 7, 11, 5, 10, 13, 6, 9, 4, 8, 11];

/** A week of leads from ads on a phone, each reviewed and tagged, then
    the weekly report. Decorative (frame aria-hidden). */
export function LeadReviewPhone() {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <span className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:pb-2.5 tw:text-[11px] tw:font-semibold">
          Leads from ads · this week
          <Chip tone="ink">Reviewed</Chip>
        </span>
        <ul className="tw:mt-3 tw:grid tw:gap-2">
          {LEADS.map(([icon, t, kw, tone, tag], i) => (
            <li
              key={t}
              className="tw:rounded-[14px] tw:border tw:border-(--line) tw:p-2.5"
              style={inAt(i + 1)}
            >
              <span className="tw:flex tw:items-center tw:gap-2">
                <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[9px] tw:bg-(--blue-soft) tw:text-[12px] tw:text-(--blue)">
                  {icon}
                </span>
                <span className="tw:min-w-0 tw:flex-1">
                  <b className="tw:block tw:text-[12px] tw:font-semibold">
                    {t}
                  </b>
                  <span className="tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                    Search: {kw}
                  </span>
                </span>
              </span>
              <span className="tw:mt-2 tw:flex tw:items-center tw:justify-between tw:gap-2">
                {t.startsWith("Call") ? (
                  <span className="tw:flex tw:h-3.5 tw:items-center tw:gap-[2px]">
                    {WAVE.map((h, k) => (
                      <i
                        key={k}
                        className="tw:block tw:w-[2px] tw:rounded-full tw:bg-[#c7d2e3]"
                        style={{ height: h }}
                      />
                    ))}
                  </span>
                ) : (
                  <span className="tw:text-[10.5px] tw:text-(--muted)">
                    Name, phone, job details
                  </span>
                )}
                <Chip tone={tone}>{tag}</Chip>
              </span>
            </li>
          ))}
        </ul>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiCheck className="tw:size-3.5" /> Weekly report sent · leads, not
          clicks
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const INSIDE: [number, number][] = [
  [128, 58],
  [188, 52],
  [146, 104],
  [198, 94],
  [116, 88],
];
const OUTSIDE: [number, number][] = [
  [34, 22],
  [292, 30],
  [282, 128],
  [28, 124],
];
const AREA_ROWS: [string, string, "green" | "red" | "blue"][] = [
  ["People in your service area", "Shown", "green"],
  ["Searches from outside it", "Excluded", "red"],
  ["Ad schedule", "Your hours", "blue"],
];

/** Location targeting: a service-area radius on a map, searches inside it
    shown the ad, searches outside excluded, plus three facts. */
export function ServiceAreaUi({
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
      <UiHead
        icon={<FiMapPin />}
        tone="gold"
        title="Location targeting"
        right={<Chip tone="green">Presence only</Chip>}
      />
      <div className="tw:mt-4 tw:overflow-hidden tw:rounded-[14px] tw:bg-[#eef2f7]">
        <svg viewBox="0 0 320 150" className="tw:block tw:w-full">
          <path
            d="M0 40 H320 M0 110 H320 M70 0 V150 M246 0 V150 M0 150 L140 0"
            stroke="#fff"
            strokeWidth="7"
            fill="none"
          />
          <circle
            cx="160"
            cy="76"
            r="60"
            fill="rgba(37,103,232,0.12)"
            stroke="#2567e8"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          {OUTSIDE.map(([x, y]) => (
            <g key={`${x}-${y}`} stroke="#94a3b8" strokeWidth="2">
              <path
                d={`M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`}
              />
            </g>
          ))}
          {INSIDE.map(([x, y], i) => (
            <circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="5.5"
              fill="#34a853"
              stroke="#fff"
              strokeWidth="2"
              style={inAt(i + 1)}
            />
          ))}
          <path
            d="M160 52 C 151 52 146 58 146 65 C 146 75 160 88 160 88 C 160 88 174 75 174 65 C 174 58 169 52 160 52 Z"
            fill="#ea4335"
          />
          <circle cx="160" cy="65" r="5" fill="#fff" />
        </svg>
      </div>
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {AREA_ROWS.map(([k, v, tone]) => (
          <li
            key={k}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
          >
            {k}
            <Chip tone={tone}>{v}</Chip>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {facts.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-[#fef3c7] tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[17px] tw:leading-none tw:tracking-[-0.02em] tw:text-[#92400e]">
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

/* -------------------------------------------------------------- hero */

/** A sponsored search result being clicked, sized in em to sit inside a
    heading (same family as the kit's InlinePin / InlineChat). */
export function InlineAdClick({ id = "ga-ad" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.88em] tw:w-[1.06em] tw:-rotate-[5deg] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 80"
        className="tw:block tw:size-full tw:overflow-visible"
      >
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fcd34d" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect
          x="4"
          y="6"
          width="84"
          height="60"
          rx="12"
          fill={`url(#${id}-body)`}
        />
        <rect x="12" y="15" width="24" height="15" rx="4.5" fill="#0c1526" />
        {/* "Ad" drawn as strokes, not <text>, so the H1's text stays clean. */}
        <path
          d="M15.5 28 L20 17.5 L24.5 28 M17.2 24.2 H22.8 M32.6 17 V28 M32.6 24.6 a3.4 3.4 0 1 0 0 0.01"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="42" y="19" width="36" height="7" rx="3.5" fill="#fff" />
        <rect
          x="12"
          y="38"
          width="58"
          height="6"
          rx="3"
          fill="#fff"
          opacity="0.85"
        />
        <rect
          x="12"
          y="50"
          width="40"
          height="6"
          rx="3"
          fill="#fff"
          opacity="0.65"
        />
        <path
          d="M78 36 L72 30 M84 36 L86 28 M88 44 L95 42"
          stroke="#0c1526"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M70 44 L88 57 L79.8 58.4 L75 65.5 Z"
          fill="#0c1526"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* Example 12-week series for the hero dashboard: conversions and calls
   from ads both climb. The last four weeks add up to the 128 conversions
   and 86 calls in the KPI row and the campaign table. Illustrative
   ("Example account"). No cost, CPC or budget figures (owner rule, 24 Oct
   2026: no price or budget estimates in heroes). */
const WEEKS = 12;
const CONV = [12, 14, 15, 18, 20, 22, 24, 26, 28, 30, 33, 37];
const CALLS = [8, 9, 10, 12, 13, 14, 16, 17, 19, 21, 22, 24];
const cx0 = (i: number) => 44 + i * (576 / (WEEKS - 1));
const toPath = (ys: number[]) =>
  ys
    .map((y, i) => `${i ? "L" : "M"}${cx0(i).toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
const CONV_Y = CONV.map((v) => 196 - v * 4.4);
const CALLS_Y = CALLS.map((v) => 196 - v * 4.4);
const CONV_PATH = toPath(CONV_Y);
const CALLS_PATH = toPath(CALLS_Y);
const CONV_AREA = `${CONV_PATH} L${cx0(WEEKS - 1)} 196 L${cx0(0)} 196 Z`;

/** Small trend line for a KPI card (rising, or falling when `down`). */
function Spark({
  values,
  color,
  down,
}: {
  values: number[];
  color: string;
  down?: boolean;
}) {
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const pts = values
    .map((v, i) => {
      const t = (v - lo) / (hi - lo || 1);
      const y = down ? 4 + (1 - t) * 22 : 26 - t * 22;
      return `${((i / (values.length - 1)) * 100).toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="tw:mt-3 tw:block tw:h-7 tw:w-full">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        style={run("de-draw")}
      />
    </svg>
  );
}

const KPIS: {
  label: string;
  value: string;
  delta: string;
  spark: number[];
  color: string;
  down?: boolean;
}[] = [
  {
    label: "Conversions",
    value: "128",
    delta: "+42%",
    spark: [74, 80, 85, 90, 98, 110, 128],
    color: "#1a73e8",
  },
  {
    label: "Form leads",
    value: "42",
    delta: "+50%",
    spark: [24, 26, 29, 31, 34, 38, 42],
    color: "#188038",
  },
  {
    label: "Calls from ads",
    value: "86",
    delta: "+37%",
    spark: [52, 58, 60, 66, 71, 79, 86],
    color: "#f29900",
  },
  {
    label: "Conversion rate",
    value: "9.6%",
    delta: "+2.4 pts",
    spark: [7.2, 7.6, 8, 8.3, 8.9, 9.2, 9.6],
    color: "#d93025",
  },
];

/* Conversions and calls per campaign (sums: 128 and 86). */
const CAMPAIGNS: [string, string, string, string][] = [
  ["Search · Core services", "64", "40", "#1a73e8"],
  ["Search · Emergency", "38", "28", "#fbbc04"],
  ["Local Services Ads", "19", "14", "#188038"],
  ["Remarketing", "7", "4", "#7c3aed"],
];

const TOTALS: [string, string][] = [
  ["Clicks", "1,333"],
  ["Impressions", "18.5K"],
  ["CTR", "7.2%"],
  ["Top of page", "71%"],
];

const NAV: [ReactNode, string][] = [
  [<FiGrid key="o" />, "Overview"],
  [<FiLayers key="c" />, "Campaigns"],
  [<FiKey key="k" />, "Keywords"],
  [<FiEdit3 key="a" />, "Ads and assets"],
  [<FiCrosshair key="v" />, "Conversions"],
  [<FiBarChart2 key="r" />, "Reports"],
];

/** Hero (owner, 24 Oct, second version): a wide desktop monitor running a
    Google Ads dashboard with a strong month. KPI cards (conversions, form
    leads, calls and conversion rate all up), a 12-week
    chart with the changes that moved it, optimization score, top
    campaigns and a new-conversion alert. Labelled "Example account": the
    figures are illustrative, never client results. Real px sizes with
    breakpoints (sidebar hidden below 992 px, side panels below 768 px), so
    it stays readable on phones. Loops on the shared 8s de-* keyframes;
    resting state is the finished dashboard. Decorative. */
export function AdsDashboardHero() {
  return (
    <div
      className="tw:mx-auto tw:w-full tw:max-w-[1080px] tw:text-left tw:text-(--ink)"
      aria-hidden="true"
    >
      {/* Monitor */}
      <div className="tw:rounded-[26px] tw:bg-(--ink) tw:p-[10px] tw:[box-shadow:0_50px_90px_-50px_rgba(12,21,38,0.6)] tw:max-bssm:rounded-[18px] tw:max-bssm:p-1.5">
        <div className="tw:relative tw:overflow-hidden tw:rounded-[17px] tw:bg-[#f4f6fb] tw:max-bssm:rounded-[13px]">
          {/* App bar */}
          <div className="tw:flex tw:items-center tw:gap-3 tw:border-b tw:border-(--line) tw:bg-white tw:px-5 tw:py-3 tw:max-bssm:px-3 tw:max-bssm:py-2.5">
            <span className="tw:flex tw:gap-1.5 tw:max-bssm:hidden">
              {["#f87171", "#fbbf24", "#34d399"].map((c) => (
                <i
                  key={c}
                  className="tw:block tw:size-2.5 tw:rounded-full"
                  style={{ background: c }}
                />
              ))}
            </span>
            <span className="tw:ml-2 tw:grid tw:size-8 tw:place-items-center tw:rounded-[9px] tw:bg-[#fbbc04] tw:text-[15px] tw:max-bssm:ml-0 tw:max-bssm:size-7">
              <SiGoogleads />
            </span>
            <b className="tw:text-[15px] tw:font-semibold tw:max-bssm:text-[13px]">
              Google Ads
            </b>
            <span className="tw:text-[14px] tw:text-(--muted) tw:max-bssm:hidden">
              · Your Business
            </span>
            <span className="tw:ml-auto tw:flex tw:items-center tw:gap-3 tw:text-[16px] tw:text-(--muted)">
              <FiSearch className="tw:max-bssm:hidden" />
              <FiBell />
              <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[12px] tw:font-semibold tw:text-white tw:max-bssm:size-7">
                YB
              </span>
            </span>
          </div>

          <div className="tw:grid tw:grid-cols-[210px_minmax(0,1fr)] tw:max-bslg:grid-cols-1">
            {/* Sidebar */}
            <aside className="tw:flex tw:flex-col tw:border-r tw:border-(--line) tw:bg-white tw:p-4 tw:max-bslg:hidden">
              <ul className="tw:grid tw:gap-1">
                {NAV.map(([icon, label], i) => (
                  <li
                    key={label}
                    className={cx(
                      "tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[14px] tw:font-medium",
                      i === 0
                        ? "tw:bg-[#e8f0fe] tw:text-[#1a56c4]"
                        : "tw:text-(--text)",
                    )}
                  >
                    <span className="tw:text-[16px]">{icon}</span>
                    {label}
                  </li>
                ))}
              </ul>
              {/* The two verified promises */}
              <div className="tw:mt-auto tw:grid tw:gap-2 tw:rounded-[14px] tw:bg-(--ink) tw:p-3.5 tw:text-white">
                <span className="tw:flex tw:items-center tw:justify-between tw:text-[12.5px]">
                  <span className="tw:text-white/60">Account owner</span>
                  <b className="tw:font-semibold">You</b>
                </span>
                <span className="tw:flex tw:items-center tw:justify-between tw:text-[12.5px]">
                  <span className="tw:text-white/60">Ad-spend markup</span>
                  <b className="tw:font-semibold tw:text-(--gold)">0%</b>
                </span>
              </div>
            </aside>

            {/* Main */}
            <div className="tw:relative tw:min-w-0 tw:p-6 tw:max-bsmd:p-4 tw:max-bssm:p-3">
              <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-3">
                <b className="tw:text-[22px] tw:font-semibold tw:tracking-[-0.02em] tw:max-bssm:text-[17px]">
                  Overview
                </b>
                <span className="tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium tw:max-bssm:hidden">
                  All campaigns
                </span>
                <span className="tw:ml-auto tw:flex tw:items-center tw:gap-2">
                  {/* New conversion alert */}
                  <span
                    className="tw:mr-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-white tw:py-1.5 tw:pr-3.5 tw:pl-1.5 tw:[box-shadow:0_12px_28px_-14px_rgba(12,21,38,0.35)] tw:ring-1 tw:ring-(--line) tw:max-bslg:hidden"
                    style={run("de-late")}
                  >
                    <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-[9px] tw:bg-(--green) tw:text-[15px] tw:text-white">
                      <FiPhoneCall />
                    </span>
                    <span className="tw:text-[12px]/[1.3]">
                      <b className="tw:block tw:font-semibold">
                        New conversion
                      </b>
                      <span className="tw:text-(--muted)">
                        Call from your ad · 3m 12s
                      </span>
                    </span>
                  </span>
                  <Chip tone="muted">Example account</Chip>
                  <span className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium tw:max-bssm:hidden">
                    <FiCalendar className="tw:size-3.5" /> Last 30 days
                  </span>
                </span>
              </div>

              {/* KPI cards */}
              <div className="tw:mt-5 tw:grid tw:grid-cols-4 tw:gap-3 tw:max-bsmd:grid-cols-2 tw:max-bssm:mt-3 tw:max-bssm:gap-2">
                {KPIS.map((k, i) => (
                  <div
                    key={k.label}
                    className="tw:rounded-[16px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line) tw:max-bssm:p-3"
                    style={inAt(i + 1)}
                  >
                    <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-medium tw:text-(--muted) tw:max-bssm:text-[11px]">
                      <i
                        className="tw:block tw:size-2 tw:rounded-full"
                        style={{ background: k.color }}
                      />
                      {k.label}
                    </span>
                    <span className="tw:mt-2 tw:flex tw:flex-wrap tw:items-baseline tw:gap-x-2 tw:gap-y-1">
                      <b className="tw:text-[28px] tw:leading-none tw:font-semibold tw:tracking-[-0.03em] tw:max-bssm:text-[20px]">
                        {k.value}
                      </b>
                      <span className="tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2 tw:py-0.5 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a] tw:max-bssm:text-[10px]">
                        {k.down ? <FiTrendingDown /> : <FiTrendingUp />}
                        {k.delta}
                      </span>
                    </span>
                    <Spark values={k.spark} color={k.color} down={k.down} />
                  </div>
                ))}
              </div>

              <div className="tw:mt-3 tw:grid tw:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] tw:gap-3 tw:max-bsxl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] tw:max-bsmd:grid-cols-1">
                {/* Chart */}
                <div className="tw:flex tw:flex-col tw:rounded-[16px] tw:bg-white tw:p-5 tw:ring-1 tw:ring-(--line) tw:max-bssm:p-3">
                  <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-4 tw:gap-y-2">
                    <b className="tw:text-[15px] tw:font-semibold tw:max-bssm:text-[13px]">
                      Conversions and calls from ads
                    </b>
                    <span className="tw:ml-auto tw:flex tw:items-center tw:gap-4 tw:text-[12px] tw:text-(--muted) tw:max-bssm:ml-0 tw:max-bssm:text-[10.5px]">
                      <span className="tw:flex tw:items-center tw:gap-1.5">
                        <i className="tw:block tw:h-[3px] tw:w-4 tw:rounded-full tw:bg-[#1a73e8]" />{" "}
                        Conversions
                      </span>
                      <span className="tw:flex tw:items-center tw:gap-1.5">
                        <i className="tw:block tw:h-[3px] tw:w-4 tw:rounded-full tw:bg-[#f29900]" />{" "}
                        Calls
                      </span>
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 640 224"
                    className="tw:mt-3 tw:block tw:h-auto tw:w-full"
                  >
                    {[36, 76, 116, 156, 196].map((y) => (
                      <path
                        key={y}
                        d={`M44 ${y} H620`}
                        stroke="#e8ecf2"
                        strokeWidth="1"
                      />
                    ))}
                    <path
                      d={CONV_AREA}
                      fill="rgba(26,115,232,0.10)"
                      style={run("de-area")}
                    />
                    <path
                      d={CALLS_PATH}
                      fill="none"
                      stroke="#f29900"
                      strokeWidth="3"
                      strokeDasharray="1"
                      pathLength={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={run("de-draw")}
                    />
                    <path
                      d={CONV_PATH}
                      fill="none"
                      stroke="#1a73e8"
                      strokeWidth="3.5"
                      strokeDasharray="1"
                      pathLength={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={run("de-draw")}
                    />
                    {(
                      [
                        [3, "Negative keywords added"],
                        [7, "Winning ad test"],
                      ] as const
                    ).map(([i, label], n) => (
                      <g key={label} style={inAt(n + 4)}>
                        <circle
                          cx={cx0(i)}
                          cy={CONV_Y[i]}
                          r="6"
                          fill="#fff"
                          stroke="#1a73e8"
                          strokeWidth="3"
                        />
                        <rect
                          x={cx0(i) - 70}
                          y={CONV_Y[i] - 40}
                          width="140"
                          height="24"
                          rx="12"
                          fill="#0c1526"
                        />
                        <text
                          x={cx0(i)}
                          y={CONV_Y[i] - 24}
                          textAnchor="middle"
                          fontSize="11.5"
                          fontWeight="600"
                          fill="#fff"
                        >
                          {label}
                        </text>
                      </g>
                    ))}
                    <circle
                      cx={cx0(WEEKS - 1)}
                      cy={CONV_Y[WEEKS - 1]}
                      r="6.5"
                      fill="#1a73e8"
                      stroke="#fff"
                      strokeWidth="3"
                    />
                    {[0, 3, 7, 11].map((i) => (
                      <text
                        key={i}
                        x={cx0(i)}
                        y="218"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#8a94a6"
                      >
                        Wk {i + 1}
                      </text>
                    ))}
                  </svg>
                  {/* Totals behind the KPIs: 1,333 clicks × 9.6% = 128
                      conversions (86 calls + 42 form leads). */}
                  <ul className="tw:mt-auto tw:grid tw:grid-cols-4 tw:gap-2 tw:border-t tw:border-(--line) tw:pt-4 tw:max-bssm:grid-cols-2 tw:max-bssm:pt-3">
                    {TOTALS.map(([label, value]) => (
                      <li key={label}>
                        <span className="tw:block tw:text-[11.5px] tw:text-(--muted) tw:max-bssm:text-[10.5px]">
                          {label}
                        </span>
                        <b className="tw:mt-0.5 tw:block tw:text-[16px] tw:font-semibold tw:tracking-[-0.01em] tw:max-bssm:text-[14px]">
                          {value}
                        </b>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Side panels */}
                <div className="tw:grid tw:content-start tw:gap-3 tw:max-bsmd:hidden">
                  <div className="tw:flex tw:items-center tw:gap-4 tw:rounded-[16px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line)">
                    <span className="tw:relative tw:grid tw:size-[72px] tw:flex-none tw:place-items-center">
                      <svg
                        viewBox="0 0 80 80"
                        className="tw:absolute tw:inset-0 tw:size-full tw:-rotate-90"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          fill="none"
                          stroke="#e8ecf2"
                          strokeWidth="8"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          fill="none"
                          stroke="#188038"
                          strokeWidth="8"
                          strokeLinecap="round"
                          pathLength={1}
                          strokeDasharray="1"
                          style={
                            {
                              "--g": 0.06,
                              strokeDashoffset: 0.06,
                              ...run("de-gauge"),
                            } as CSSProperties
                          }
                        />
                      </svg>
                      <b className="tw:text-[18px] tw:font-semibold">94%</b>
                    </span>
                    <span>
                      <b className="tw:block tw:text-[14.5px] tw:font-semibold">
                        Optimization score
                      </b>
                      <span className="tw:mt-1 tw:block tw:text-[12.5px] tw:text-(--muted)">
                        Recommendations reviewed weekly
                      </span>
                    </span>
                  </div>
                  <div className="tw:rounded-[16px] tw:bg-white tw:p-4 tw:ring-1 tw:ring-(--line)">
                    <span className="tw:grid tw:grid-cols-[minmax(0,1fr)_44px_64px] tw:gap-2 tw:border-b tw:border-(--line) tw:pb-2 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
                      <span>Top campaigns</span>
                      <span className="tw:text-right">Conv.</span>
                      <span className="tw:text-right">Calls</span>
                    </span>
                    <ul className="tw:mt-1">
                      {CAMPAIGNS.map(([name, conv, calls, c], i) => (
                        <li
                          key={name}
                          className="tw:grid tw:grid-cols-[minmax(0,1fr)_44px_64px] tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:py-2.5 tw:text-[12.5px] tw:last:border-b-0"
                          style={inAt(i + 1)}
                        >
                          <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-2 tw:font-medium">
                            <i
                              className="tw:block tw:size-2 tw:flex-none tw:rounded-full"
                              style={{ background: c }}
                            />
                            <span className="tw:truncate">{name}</span>
                          </span>
                          <b className="tw:text-right tw:font-semibold">
                            {conv}
                          </b>
                          <span className="tw:text-right tw:text-(--text)">
                            {calls}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="tw:max-bssm:hidden">
        <div className="tw:mx-auto tw:h-9 tw:w-[120px] tw:bg-[linear-gradient(#cfd6e2,#b5bfcf)] tw:[clip-path:polygon(14%_0,86%_0,100%_100%,0_100%)]" />
        <div className="tw:mx-auto tw:h-2.5 tw:w-[280px] tw:rounded-full tw:bg-[#c3ccd9]" />
      </div>
    </div>
  );
}
