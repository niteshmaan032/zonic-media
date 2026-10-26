import type { CSSProperties } from "react";
import {
  FiAward,
  FiCalendar,
  FiCheck,
  FiGlobe,
  FiMapPin,
  FiNavigation,
  FiPhoneCall,
  FiPhoneIncoming,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { GoogleG } from "@/components/rd/dfw-kit/visuals";
import { Fill, Flip, inAt, run } from "@/components/rd/delaware/uiBits";

/* UI for the local SEO for home services redesign (24 Oct 2026); none of
   it appears on another page. Hero rank scan (a 5×5 grid of rank checks
   over a service area turning green, plus the Map Pack it produces), mini
   visuals for the four "why it's essential" cards, the homeowner journey
   (search → Map Pack → call → booked job), the call log on the dark
   banner and the "metrics that matter" board. Decorative (aria-hidden);
   example figures labelled as examples, never client results, and no
   headings, so the page's heading list lives in HomeServicesSeoPage. */

/* ------------------------------------------------------------ H1 icon */

/** A house with a map pin, sized in em to sit inside the H1 (same family
    as the kit's InlinePin / InlineChat). Paths only, no <text>. */
export function InlineHousePin({ id = "hs-house" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.88em] tw:w-[1em] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 92 84"
        className="tw:block tw:size-full tw:overflow-visible"
      >
        <defs>
          <linearGradient id={`${id}-roof`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fb923c" />
            <stop offset="1" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id={`${id}-pin`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff6a5c" />
            <stop offset="1" stopColor="#c9241a" />
          </linearGradient>
        </defs>
        <ellipse cx="44" cy="80" rx="30" ry="3.5" fill="rgba(12,21,38,0.14)" />
        <rect
          x="14"
          y="40"
          width="60"
          height="38"
          rx="5"
          fill="#fff7ed"
          stroke="#0c1526"
          strokeWidth="3"
        />
        <path
          d="M6 44 L44 12 L82 44"
          fill="none"
          stroke={`url(#${id}-roof)`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="36" y="54" width="16" height="24" rx="3" fill="#0c1526" />
        <rect x="21" y="49" width="10" height="10" rx="2" fill="#93c5fd" />
        <rect x="57" y="49" width="10" height="10" rx="2" fill="#93c5fd" />
        <path
          d="M74 2 C 66 2 61 8 61 15 C 61 25 74 36 74 36 C 74 36 87 25 87 15 C 87 8 82 2 74 2 Z"
          fill={`url(#${id}-pin)`}
          stroke="#fff"
          strokeWidth="2.5"
        />
        <circle cx="74" cy="15" r="5" fill="#fff" />
      </svg>
    </span>
  );
}

/* ---------------------------------------------------------- hero scan */

/* Example 5×5 rank scan: before → after. Inner 3×3 flips first (n=1), the
   outer ring second (n=2), the summary last (n=3). After: 21 of 25 points
   in the top 3, average 2.4 (before: 13.4, none in the top 3). */
const BEFORE = [
  [20, 14, 12, 16, 20],
  [13, 9, 8, 11, 17],
  [12, 7, 6, 8, 14],
  [15, 9, 8, 12, 19],
  [20, 16, 13, 17, 20],
];
const AFTER = [
  [3, 2, 2, 3, 5],
  [2, 1, 1, 2, 3],
  [2, 1, 1, 1, 2],
  [3, 1, 1, 2, 4],
  [4, 3, 2, 3, 6],
];
const AT = [12, 31, 50, 69, 88];

const rankTone = (r: number) =>
  r <= 3 ? "#188038" : r <= 6 ? "#f29900" : "#d93025";

function RankDot({ r }: { r: number }) {
  return (
    <span
      className="tw:grid tw:size-[34px] tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white tw:ring-[3px] tw:ring-white tw:[box-shadow:0_6px_14px_-6px_rgba(12,21,38,0.5)] tw:max-bssm:size-[26px] tw:max-bssm:text-[10px] tw:max-bssm:ring-2"
      style={{ background: rankTone(r) }}
    >
      {r >= 20 ? "20+" : r}
    </span>
  );
}

const PACK: [string, string, boolean][] = [
  ["Your Business", "5.0", true],
  ["Competitor A", "4.6", false],
  ["Competitor B", "4.4", false],
];

/** Hero (24 Oct): a rank scan over a service area. 25 checks for one
    search turn from red (rank 6–20+) to green (top 3) as the profile and
    service-area pages are fixed; the summary flips from "avg 13.4 · 0 of
    25" to "avg 2.4 · 21 of 25". Under it, the Map Pack that search now
    shows, with Your Business first and a call coming in. 8s loop on the
    shared de-* keyframes; resting state is the "after" scan. */
export function RankScanUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:relative tw:flex tw:h-full tw:w-full tw:flex-col tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-3.5",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-3 tw:gap-y-2">
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[11px] tw:bg-[#fff1e6] tw:text-[16px] tw:text-[#c2410c]">
          <FiMapPin />
        </span>
        <span className="tw:min-w-0">
          <b className="tw:block tw:text-[15px] tw:font-semibold">
            Service-area rank scan
          </b>
          <span className="tw:text-[12px] tw:text-(--muted)">
            25 points · example scan
          </span>
        </span>
        <span className="tw:ml-auto tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-medium">
          <FiSearch className="tw:size-3.5 tw:text-(--muted)" /> plumber near me
        </span>
      </div>

      {/* Map with the 5×5 grid of rank checks */}
      <div className="tw:relative tw:mt-4 tw:min-h-[230px] tw:flex-1 tw:overflow-hidden tw:rounded-[18px] tw:bg-[#e9eef4] tw:max-bslg:aspect-[16/9.5] tw:max-bslg:flex-none">
        <svg
          viewBox="0 0 600 356"
          preserveAspectRatio="xMidYMid slice"
          className="tw:absolute tw:inset-0 tw:size-full"
        >
          <path
            d="M0 250 C 120 230 170 300 290 280 S 480 210 600 240 L600 356 L0 356 Z"
            fill="#d4e6f7"
          />
          <path
            d="M40 40 h110 v70 h-110 Z M430 60 h120 v80 h-120 Z"
            fill="#d8ecd9"
          />
          <path
            d="M0 120 H600 M0 200 H600 M150 0 V356 M300 0 V356 M450 0 V356 M0 330 L260 0"
            stroke="#fff"
            strokeWidth="9"
            fill="none"
          />
          <path
            d="M0 60 H600 M75 0 V356 M225 0 V356 M375 0 V356 M525 0 V356"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />
          <rect
            x="34"
            y="20"
            width="532"
            height="316"
            rx="40"
            fill="rgba(234,88,12,0.06)"
            stroke="#ea580c"
            strokeWidth="2"
            strokeDasharray="8 7"
          />
        </svg>
        {AFTER.map((row, y) =>
          row.map((r, x) => {
            const inner = x > 0 && x < 4 && y > 0 && y < 4;
            return (
              <span
                key={`${x}-${y}`}
                className="tw:absolute tw:-translate-1/2"
                style={{ left: `${AT[x]}%`, top: `${AT[y]}%` }}
              >
                <Flip
                  n={inner ? 1 : 2}
                  from={<RankDot r={BEFORE[y][x]} />}
                  to={<RankDot r={r} />}
                />
              </span>
            );
          }),
        )}
        {/* Business location */}
        <span className="tw:absolute tw:top-1/2 tw:left-1/2 tw:grid tw:size-7 tw:translate-x-[22px] tw:-translate-y-[34px] tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[13px] tw:text-white tw:ring-[3px] tw:ring-white tw:max-bssm:hidden">
          <FiMapPin />
        </span>
      </div>

      {/* Summary */}
      <div className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2 tw:text-[12px] tw:max-bssm:grid-cols-2">
        <span className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
          <span className="tw:block tw:text-(--muted)">Average rank</span>
          <b className="tw:mt-0.5 tw:flex tw:text-[18px] tw:font-semibold">
            <Flip
              n={3}
              from={<span className="tw:text-[#d93025]">13.4</span>}
              to={<span className="tw:text-[#188038]">2.4</span>}
            />
          </b>
        </span>
        <span className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
          <span className="tw:block tw:text-(--muted)">In the top 3</span>
          <b className="tw:mt-0.5 tw:flex tw:text-[18px] tw:font-semibold">
            <Flip
              n={3}
              from={<span>0 of 25</span>}
              to={<span className="tw:text-[#188038]">21 of 25</span>}
            />
          </b>
        </span>
        {/* Call alert, arriving once the scan has turned green */}
        <span
          className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-[#e6f4ea] tw:px-3 tw:py-2.5 tw:text-[#1f7a3a] tw:max-bssm:col-span-2"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:bg-(--green) tw:text-[14px] tw:text-white">
            <FiPhoneIncoming />
          </span>
          <span className="tw:min-w-0 tw:text-[11.5px]/[1.3]">
            <b className="tw:block tw:font-semibold">New call from Maps</b>
            <span className="tw:text-[#3f7d52]">Water heater repair</span>
          </span>
        </span>
      </div>

      {/* The Map Pack that search now shows */}
      <ul className="tw:mt-3 tw:grid tw:gap-1.5">
        {PACK.map(([name, rating, you], i) => (
          <li
            key={name}
            className={cx(
              "tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:px-3 tw:py-2 tw:text-[12.5px]",
              you
                ? "tw:bg-[#fff7ed] tw:ring-[1.5px] tw:ring-[#fdba74]"
                : "tw:border tw:border-(--line)",
            )}
            style={inAt(i + 1)}
          >
            <span
              className={cx(
                "tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold",
                you
                  ? "tw:bg-(--ink) tw:text-white"
                  : "tw:bg-(--panel) tw:text-(--muted)",
              )}
            >
              {i + 1}
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b
                className={cx(
                  "tw:block tw:truncate tw:font-semibold",
                  !you && "tw:text-(--muted)",
                )}
              >
                {name}
              </b>
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--muted)">
                <FiStar className="tw:size-3 tw:fill-[#fbbc04] tw:text-[#fbbc04]" />{" "}
                {rating} · Open now
              </span>
            </span>
            {you ? (
              <span
                className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1.5 tw:text-[11.5px] tw:font-semibold tw:text-white"
                style={run("de-halo", 3)}
              >
                <FiPhoneCall className="tw:size-3.5" /> Call
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------- "essential" card visuals */

const STRIP = "tw:mt-6 tw:rounded-[16px] tw:bg-(--panel) tw:p-3";

/** Increase Qualified Calls: calls arriving from local searches. */
export function CallsMini() {
  return (
    <div className={STRIP} aria-hidden="true">
      {[
        ["Riverside", "AC not cooling"],
        ["Oak Park", "Leaking pipe"],
      ].map(([town, job], i) => (
        <span
          key={town}
          className="tw:mt-1.5 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[11px] tw:bg-white tw:px-2.5 tw:py-2 tw:text-[12px] tw:first:mt-0"
          style={inAt(i + 1)}
        >
          <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-[7px] tw:bg-(--green) tw:text-[11px] tw:text-white">
            <FiPhoneIncoming />
          </span>
          <b className="tw:font-semibold">{town}</b>
          <span className="tw:truncate tw:text-(--muted)">{job}</span>
        </span>
      ))}
    </div>
  );
}

/** Rank Higher Locally: one search moving into the Map Pack. */
export function RankMini() {
  return (
    <div
      className={cx(STRIP, "tw:flex tw:items-center tw:gap-3")}
      aria-hidden="true"
    >
      <span className="tw:flex tw:min-w-0 tw:flex-1 tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-2 tw:text-[12px]">
        <GoogleG className="tw:size-3.5 tw:flex-none" />
        <span className="tw:truncate">roofer near me</span>
      </span>
      <Flip
        n={2}
        from={<Chip tone="red">#9</Chip>}
        to={
          <Chip tone="green">
            <FiTrendingUp /> #1
          </Chip>
        }
      />
    </div>
  );
}

/** Generate More Booked Jobs: a week filling with booked jobs. */
export function JobsMini() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const booked = [2, 3, 2, 3, 2];
  return (
    <div
      className={cx(STRIP, "tw:grid tw:grid-cols-5 tw:gap-1.5")}
      aria-hidden="true"
    >
      {days.map((d, i) => (
        <span key={d} className="tw:grid tw:gap-1">
          <span className="tw:text-center tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
            {d}
          </span>
          {Array.from({ length: 3 }, (_, k) => (
            <i
              key={k}
              className={cx(
                "tw:block tw:h-3.5 tw:rounded-[4px]",
                k < booked[i] ? "tw:bg-[#ea580c]" : "tw:bg-white",
              )}
              style={k < booked[i] ? inAt(k + 1 + (i % 2)) : undefined}
            />
          ))}
        </span>
      ))}
    </div>
  );
}

/** Build Long-Term Growth: monthly leads rising. */
export function GrowthMini() {
  const bars = [28, 34, 38, 46, 52, 60, 70, 82];
  return (
    <div
      className={cx(STRIP, "tw:flex tw:h-[86px] tw:items-end tw:gap-1.5")}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <i
          key={i}
          className="tw:block tw:flex-1 tw:rounded-t-[5px] tw:bg-[#0d9488]"
          style={
            {
              "--h": `${h}%`,
              height: `${h}%`,
              ...run("de-rise"),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------- google maps phone */

const MAP_PINS: [number, number][] = [
  [18, 30],
  [74, 22],
  [84, 62],
  [30, 74],
  [60, 80],
];

/** Why home services need local SEO (owner, 24 Oct: "bigger and more
    relevant"): the Google Maps app on a homeowner's phone. "plumber near
    me" puts Your Business first with Call / Directions / Website, the call
    connects, and three cards float around it: top 3 on Google Maps, a new
    5-star review naming the town, and the booked job. */
export function MapsAppPhone() {
  const float =
    "tw:absolute tw:z-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-white tw:px-3.5 tw:py-3 tw:text-left tw:[box-shadow:0_20px_44px_-20px_rgba(12,21,38,0.45)] tw:ring-1 tw:ring-(--line)";
  return (
    <div
      className="tw:relative tw:mx-auto tw:w-full tw:max-w-[620px] tw:py-6 tw:text-(--ink)"
      aria-hidden="true"
    >
      {/* Phone */}
      <div className="tw:relative tw:mx-auto tw:h-[620px] tw:w-[310px] tw:overflow-hidden tw:rounded-[48px] tw:border-[11px] tw:border-(--ink) tw:bg-white tw:[box-shadow:0_50px_80px_-45px_rgba(12,21,38,0.6)] tw:max-bssm:h-[560px] tw:max-bssm:w-[280px]">
        <span className="tw:absolute tw:top-2 tw:left-1/2 tw:z-3 tw:h-[22px] tw:w-[86px] tw:-translate-x-1/2 tw:rounded-[14px] tw:bg-(--ink)" />

        {/* Map */}
        <div className="tw:relative tw:h-[250px] tw:bg-[#e9eef4] tw:max-bssm:h-[220px]">
          <svg
            viewBox="0 0 300 250"
            preserveAspectRatio="xMidYMid slice"
            className="tw:absolute tw:inset-0 tw:size-full"
          >
            <path
              d="M0 190 C 70 170 120 220 190 205 S 270 160 300 175 L300 250 L0 250 Z"
              fill="#d4e6f7"
            />
            <path
              d="M20 40 h70 v50 h-70 Z M210 30 h70 v60 h-70 Z"
              fill="#d8ecd9"
            />
            <path
              d="M0 110 H300 M110 0 V250 M220 0 V250 M0 230 L180 0"
              stroke="#fff"
              strokeWidth="8"
              fill="none"
            />
            <path
              d="M0 60 H300 M55 0 V250 M165 0 V250 M270 0 V250"
              stroke="#fff"
              strokeWidth="3.5"
              fill="none"
              opacity="0.85"
            />
          </svg>
          {MAP_PINS.map(([x, y]) => (
            <i
              key={`${x}-${y}`}
              className="tw:absolute tw:block tw:size-3.5 tw:-translate-1/2 tw:rounded-full tw:bg-[#9aa7b8] tw:ring-2 tw:ring-white"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}
          {/* Your Business pin */}
          <span className="tw:absolute tw:top-[46%] tw:left-1/2 tw:flex tw:-translate-x-1/2 tw:-translate-y-full tw:flex-col tw:items-center">
            <span className="tw:mb-1 tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:[box-shadow:0_6px_14px_-6px_rgba(12,21,38,0.45)]">
              Your Business
            </span>
            <svg viewBox="0 0 24 30" className="tw:h-[34px] tw:w-[27px]">
              <path
                d="M12 1 C 6 1 2 5.5 2 11 C 2 18 12 29 12 29 C 12 29 22 18 22 11 C 22 5.5 18 1 12 1 Z"
                fill="#ea580c"
                stroke="#fff"
                strokeWidth="2"
              />
              <circle cx="12" cy="11" r="4" fill="#fff" />
            </svg>
          </span>
          {/* Search bar */}
          <span className="tw:absolute tw:inset-x-3 tw:top-10 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-2.5 tw:text-[12.5px] tw:[box-shadow:0_6px_16px_-8px_rgba(12,21,38,0.35)]">
            <GoogleG className="tw:size-4 tw:flex-none" /> plumber near me
          </span>
        </div>

        {/* Results sheet */}
        <div className="tw:relative tw:-mt-5 tw:rounded-t-[22px] tw:bg-white tw:px-4 tw:pt-2.5">
          <span className="tw:mx-auto tw:block tw:h-1 tw:w-10 tw:rounded-full tw:bg-[#d5dce7]" />
          <div
            className="tw:mt-3 tw:rounded-[16px] tw:bg-[#fff7ed] tw:p-3 tw:ring-[1.5px] tw:ring-[#fdba74]"
            style={inAt(1)}
          >
            <span className="tw:flex tw:items-start tw:justify-between tw:gap-2">
              <span>
                <b className="tw:block tw:text-[14px] tw:font-semibold">
                  Your Business
                </b>
                <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-1 tw:text-[11.5px] tw:text-(--muted)">
                  <b className="tw:font-semibold tw:text-(--ink)">5.0</b>
                  <FiStar className="tw:size-3 tw:fill-[#fbbc04] tw:text-[#fbbc04]" />{" "}
                  (126) · 2.1 mi
                </span>
                <span className="tw:block tw:text-[11.5px] tw:text-(--muted)">
                  Plumber ·{" "}
                  <b className="tw:font-semibold tw:text-[#188038]">
                    Open 24 hours
                  </b>
                </span>
              </span>
              <span className="tw:rounded-full tw:bg-(--ink) tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-bold tw:text-white">
                #1
              </span>
            </span>
            <span className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[11px] tw:font-semibold">
              <span
                className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-1.5 tw:text-white"
                style={run("de-halo", 3)}
              >
                <FiPhoneCall className="tw:size-3" /> Call
              </span>
              <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-white tw:py-1.5 tw:text-(--blue) tw:ring-1 tw:ring-(--line)">
                <FiNavigation className="tw:size-3" /> Directions
              </span>
              <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-white tw:py-1.5 tw:text-(--blue) tw:ring-1 tw:ring-(--line)">
                <FiGlobe className="tw:size-3" /> Website
              </span>
            </span>
          </div>
          {[
            ["Competitor A", "4.6", "3.4 mi"],
            ["Competitor B", "4.3", "5.0 mi"],
          ].map(([name, r, d], i) => (
            <div
              key={name}
              className="tw:mt-2 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
              style={inAt(i + 2)}
            >
              <b className="tw:block tw:text-[13px] tw:font-semibold tw:text-(--muted)">
                {name}
              </b>
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--muted)">
                {r}{" "}
                <FiStar className="tw:size-3 tw:fill-[#cbd5e1] tw:text-[#cbd5e1]" />{" "}
                · {d}
              </span>
            </div>
          ))}
        </div>

        {/* Call connecting */}
        <span
          className="tw:absolute tw:inset-x-3 tw:bottom-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[14px]">
            <FiPhoneCall />
          </span>
          <span className="tw:text-[12px]/[1.3]">
            <b className="tw:block tw:font-semibold">Calling Your Business…</b>
            <span className="tw:text-white/60">From Google Maps</span>
          </span>
        </span>
      </div>

      {/* Floating proof */}
      <span
        className={cx(float, "tw:top-[30%] tw:left-0 tw:max-bssm:hidden")}
        style={inAt(2)}
      >
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[11px] tw:bg-[#fff1e6] tw:text-[16px] tw:text-[#c2410c]">
          <FiAward />
        </span>
        <span className="tw:text-[12px]/[1.3]">
          <b className="tw:block tw:font-semibold">Top 3 on Google Maps</b>
          <span className="tw:text-(--muted)">In your service area</span>
        </span>
      </span>
      <span
        className={cx(float, "tw:top-[16%] tw:right-0 tw:max-bssm:hidden")}
        style={inAt(4)}
      >
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[11px] tw:bg-[#fef7e0] tw:text-[16px] tw:text-[#b06000]">
          <FiStar className="tw:fill-current" />
        </span>
        <span className="tw:text-[12px]/[1.3]">
          <b className="tw:block tw:font-semibold">New 5★ review</b>
          <span className="tw:text-(--muted)">
            &ldquo;Fast, fair, in Riverside&rdquo;
          </span>
        </span>
      </span>
      <span
        className={cx(float, "tw:right-0 tw:bottom-[26%] tw:max-bssm:hidden")}
        style={run("de-late")}
      >
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[11px] tw:bg-(--green-soft) tw:text-[16px] tw:text-[#1f7a3a]">
          <FiCalendar />
        </span>
        <span className="tw:text-[12px]/[1.3]">
          <b className="tw:block tw:font-semibold">Job booked</b>
          <span className="tw:text-(--muted)">Tue 9:00 AM · Riverside</span>
        </span>
      </span>
    </div>
  );
}

/* ---------------------------------------------------------- call log */

const CALLS: [string, string, string, string, "green" | "blue"][] = [
  ["Riverside", "Water heater repair", "Maps", "4m 12s", "green"],
  ["Fairview", "AC tune-up", "Search", "2m 51s", "green"],
  ["Oak Park", "Roof leak", "Maps", "6m 03s", "blue"],
  ["Westfield", "Panel upgrade", "Maps", "3m 37s", "green"],
  ["Springfield", "Drain cleaning", "Search", "1m 58s", "green"],
];

/** Dark banner: a week of calls from local search, by town. */
export function CallLogUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[500px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiPhoneIncoming />}
        tone="green"
        title="Calls from local search"
        right={<Chip tone="muted">This week</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)] tw:gap-1.5">
        {CALLS.map(([town, job, source, dur, tone], i) => (
          <li
            key={town}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto_auto] tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12px]"
            style={inAt(i + 1)}
          >
            <span className="tw:min-w-0">
              <b className="tw:block tw:truncate tw:font-semibold">{town}</b>
              <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                {job} · {dur}
              </span>
            </span>
            <Chip tone="muted">{source}</Chip>
            <Chip tone={tone}>{tone === "green" ? "Booked" : "Estimate"}</Chip>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-[#fff7ed] tw:px-3 tw:py-2.5 tw:text-[11.5px] tw:font-semibold tw:text-[#9a3412]"
        style={run("de-late")}
      >
        <FiMapPin className="tw:size-3.5" /> Every call traced to the town and
        the search
      </span>
    </div>
  );
}

/* ------------------------------------------------ metrics that matter */

const VANITY = ["Impressions", "Followers", "Page views"];
const REAL: [string, number][] = [
  ["Map Pack rankings", 86],
  ["Calls", 74],
  ["Estimates", 62],
  ["Booked jobs", 54],
];

/** Why choose us: what other agencies report vs. what we report. */
export function MetricsThatMatterUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[440px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:grid tw:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] tw:gap-3">
        <div className="tw:rounded-[14px] tw:bg-(--panel) tw:p-3">
          <span className="tw:text-[11px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
            Vanity metrics
          </span>
          <ul className="tw:mt-2.5 tw:grid tw:gap-2">
            {VANITY.map((v) => (
              <li
                key={v}
                className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted) tw:line-through"
              >
                <FiX className="tw:size-3.5 tw:flex-none tw:text-(--red)" /> {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="tw:rounded-[14px] tw:bg-[#f0fdfa] tw:p-3 tw:ring-1 tw:ring-[#99f6e4]">
          <span className="tw:text-[11px] tw:font-semibold tw:tracking-[0.08em] tw:text-[#0f766e] tw:uppercase">
            What we report
          </span>
          <ul className="tw:mt-2.5 tw:grid tw:gap-2.5">
            {REAL.map(([label, w], i) => (
              <li
                key={label}
                className="tw:text-[12.5px] tw:font-medium"
                style={inAt(i + 1)}
              >
                <span className="tw:mb-1 tw:flex tw:items-center tw:gap-2">
                  <FiCheck className="tw:size-3.5 tw:text-[#0d9488]" /> {label}
                </span>
                <Fill w={w} color="#0d9488" className="tw:bg-white" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-medium tw:text-white"
        style={run("de-late")}
      >
        Monthly report, in plain numbers
        <Chip tone="green">Sent</Chip>
      </span>
    </div>
  );
}

/* ------------------------------------------- why choose: synced panels */

const URGENT: [string, string][] = [
  ["Roofing", "emergency roof leak repair"],
  ["HVAC", "ac not cooling near me"],
  ["Plumbing", "burst pipe plumber"],
  ["Electrical", "electrician open now"],
];

const PANEL =
  "tw:w-full tw:max-w-[440px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4";

/** 01 Industry-Specific Expertise: the urgent searches per trade. */
function ExpertisePanel() {
  return (
    <div className={cx(UI_CARD, PANEL)}>
      <UiHead
        icon={<FiSearch />}
        tone="gold"
        title="Urgent searches we target"
        right={<Chip tone="muted">By trade</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)] tw:gap-1.5">
        {URGENT.map(([trade, q]) => (
          <li
            key={trade}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12.5px]"
          >
            <b className="tw:w-[72px] tw:flex-none tw:font-semibold">{trade}</b>
            <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-(--text)">
              {q}
            </span>
            <Chip tone="red">Urgent</Chip>
          </li>
        ))}
      </ul>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-[#fff7ed] tw:px-3 tw:py-2.5 tw:text-[11.5px] tw:font-semibold tw:text-[#9a3412]">
        <FiMapPin className="tw:size-3.5" /> Matched to your services and towns
      </span>
    </div>
  );
}

const REPORT: [string, string, string][] = [
  ["Map Pack keywords in the top 3", "18", "+6"],
  ["Calls from Google", "64", "+12"],
  ["Booked jobs", "41", "+9"],
];

/** 03 Transparent Strategy & Reporting: the monthly report. */
function ReportPanel() {
  return (
    <div className={cx(UI_CARD, PANEL)}>
      <UiHead
        icon={<FiCalendar />}
        title="Monthly report"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)] tw:gap-1.5">
        {REPORT.map(([k, v, d]) => (
          <li
            key={k}
            className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:text-[12.5px]"
          >
            <span className="tw:font-medium">{k}</span>
            <span className="tw:flex tw:items-center tw:gap-2">
              <b className="tw:text-[16px] tw:font-semibold">{v}</b>
              <Chip tone="green">{d}</Chip>
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12px]">
        <span className="tw:text-[11px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
          Next month
        </span>
        <ul className="tw:mt-1.5 tw:grid tw:gap-1">
          {[
            "Two new service-area pages",
            "Review requests after every job",
          ].map((t) => (
            <li
              key={t}
              className="tw:flex tw:items-center tw:gap-2 tw:font-medium"
            >
              <FiCheck className="tw:size-3.5 tw:text-(--green)" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const LEADS_12 = [9, 11, 12, 15, 17, 19, 22, 24, 27, 29, 32, 35];

/** 04 Long-Term Growth System: leads from local search keep climbing. */
function GrowthPanel() {
  const pts = LEADS_12.map(
    (v, i) =>
      `${(i * (280 / 11) + 10).toFixed(1)},${(130 - v * 3.2).toFixed(1)}`,
  ).join(" ");
  return (
    <div className={cx(UI_CARD, PANEL)}>
      <UiHead
        icon={<FiTrendingUp />}
        tone="green"
        title="Leads from local search"
        right={<Chip tone="muted">12 months</Chip>}
      />
      <svg
        viewBox="0 0 300 140"
        className="tw:mt-4 tw:block tw:h-auto tw:w-full"
      >
        {[30, 65, 100, 130].map((y) => (
          <path key={y} d={`M10 ${y} H290`} stroke="#e8ecf2" strokeWidth="1" />
        ))}
        <polygon
          points={`10,130 ${pts} 290,130`}
          fill="rgba(13,148,136,0.12)"
        />
        <polyline
          points={pts}
          fill="none"
          stroke="#0d9488"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="290"
          cy={130 - 35 * 3.2}
          r="5"
          fill="#0d9488"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
      <span className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[12px]">
        <span className="tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
          <span className="tw:block tw:text-(--muted)">Referrals only</span>
          <b className="tw:font-semibold">Up and down</b>
        </span>
        <span className="tw:rounded-[12px] tw:bg-[#f0fdfa] tw:px-3 tw:py-2.5 tw:ring-1 tw:ring-[#99f6e4]">
          <span className="tw:block tw:text-[#0f766e]">With local SEO</span>
          <b className="tw:font-semibold">Steady, every month</b>
        </span>
      </span>
    </div>
  );
}

/** Why choose us: one panel per reason, shown while that reason is
    highlighted in the list beside it. Both run on the same 12s loop
    (de-hs-card / de-hs-panel, delays 0/3/6/9s); with motion off the
    first panel shows. */
export function WhyChoosePanels() {
  const panels = [
    <ExpertisePanel key="e" />,
    <MetricsThatMatterUi key="m" />,
    <ReportPanel key="r" />,
    <GrowthPanel key="g" />,
  ];
  return (
    <div
      className="tw:grid tw:w-full tw:grid-cols-[minmax(0,1fr)] tw:justify-items-center"
      aria-hidden="true"
    >
      {panels.map((panel, i) => (
        <div
          key={i}
          className={cx(
            "tw:col-start-1 tw:row-start-1 tw:w-full tw:min-w-0 tw:justify-self-center tw:max-w-[440px]",
            i > 0 && "tw:opacity-0",
          )}
          style={{
            animation: "de-hs-panel 12s ease infinite both",
            animationDelay: `${i * 3}s`,
          }}
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
