/* UI components for the SEO services redesign draft (25 Oct 2026).

   Owner rules: new UI components per page, labelled "Example", no money
   figures and no company stats. Positions and times only, with "Your
   Company" / "your service" so the visuals fit every industry. */

import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowUp,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiPhoneCall,
  FiSearch,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { SiGoogle } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import type { Palette } from "@/components/rd/industry/types";

/* -------------------------------------------------------- brand colours */

/** Local SEO pages palette (owner, 25 Oct 2026: not the industry pages'
    two-tone pastels). The site's Google-style brand colours, as on /home2:
    blue and green as the main pair, with red and gold in the 4-colour
    cycle. */
export const SEO_BRAND: Palette = {
  a: "#2567e8",
  aDeep: "#1c4fc4",
  aSoft: "#eaf0fe",
  aText: "#1c4fc4",
  b: "#34a852",
  bDeep: "#1f7a3a",
  bSoft: "#e7f6ec",
  bText: "#1f7a3a",
};

export type BrandTone = {
  solid: string;
  onSolid: string;
  soft: string;
  softText: string;
};

/** Blue, red, gold, green, cycled across cards, chips and pins. */
export const BRAND_TONES: BrandTone[] = [
  {
    solid: "#2567e8",
    onSolid: "#ffffff",
    soft: "#eaf0fe",
    softText: "#1c4fc4",
  },
  {
    solid: "#ea4334",
    onSolid: "#ffffff",
    soft: "#fde4e1",
    softText: "#b8352a",
  },
  {
    solid: "#fdc115",
    onSolid: "#0c1526",
    soft: "#fff3cc",
    softText: "#8a6400",
  },
  {
    solid: "#34a852",
    onSolid: "#ffffff",
    soft: "#e7f6ec",
    softText: "#1f7a3a",
  },
];
export const tone = (i: number) => BRAND_TONES[i % BRAND_TONES.length];

/* ---------------------------------------------------------------- hero */

/** A callout tag pinned to the right edge of a results block. */
function Callout({
  t,
  label,
  sub,
}: {
  t: BrandTone;
  label: string;
  sub: string;
}) {
  return (
    <span className="tw:absolute tw:top-1/2 tw:-right-5 tw:z-1 tw:flex tw:-translate-y-1/2 tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:py-1.5 tw:pr-3.5 tw:pl-1.5 tw:text-left tw:[box-shadow:0_14px_30px_-16px_rgba(12,21,38,0.45)] tw:ring-1 tw:ring-(--line) tw:max-bsxl:-right-3 tw:max-bssm:static tw:max-bssm:mt-2.5 tw:max-bssm:inline-flex tw:max-bssm:translate-y-0">
      <span
        className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold"
        style={{ background: t.solid, color: t.onSolid }}
      >
        <FiCheck className="tw:size-3 tw:[stroke-width:3.5]" />
      </span>
      <span className="tw:leading-tight">
        <b className="tw:block tw:text-[12.5px] tw:font-semibold tw:whitespace-nowrap">
          {label}
        </b>
        <span className="tw:block tw:text-[11px] tw:whitespace-nowrap tw:text-(--muted)">
          {sub}
        </span>
      </span>
    </span>
  );
}

function Stars() {
  return (
    <span className="tw:flex tw:gap-0.5 tw:text-[#f4b400]">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className="tw:size-3"
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** Hero (owner, 25 Oct: "the hero UI is the main part of the local SEO
    pages … make it properly explaining the service"). An annotated Google
    results page for "your service near me": the AI Overview, the Map Pack
    and the top organic result all show Your Company, and each block is
    tagged with the SEO work that wins it. The strip below names the work
    behind every block. Example only, no figures. */
export function SeoHeroUi() {
  const blue = tone(0);
  const red = tone(1);
  const gold = tone(2);
  const green = tone(3);
  return (
    <div
      className="tw:relative tw:w-full tw:text-left tw:text-(--ink)"
      aria-hidden="true"
    >
      <span className="tw:mb-3 tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[12.5px] tw:font-semibold tw:ring-1 tw:ring-(--line)">
        <SiGoogle className="tw:text-[#4285f4]" /> What our SEO work changes on
        Google
      </span>
      <div className={cx(UI_CARD, "tw:overflow-visible tw:p-0")}>
        {/* Search bar */}
        <div className="tw:flex tw:items-center tw:gap-3 tw:border-b tw:border-(--line) tw:px-5 tw:py-3.5">
          <span className="tw:flex tw:min-w-0 tw:flex-1 tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[13px] tw:font-medium">
            <FiSearch className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
            <span className="tw:truncate">your service near me</span>
          </span>
          <Chip tone="muted">Example</Chip>
        </div>

        {/* AI Overview */}
        <div className="tw:relative tw:border-b tw:border-(--line) tw:px-5 tw:py-4 tw:pr-[150px] tw:max-bssm:pr-5">
          <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[12px] tw:font-semibold">
            <HiSparkles style={{ color: gold.softText }} /> AI Overview
          </span>
          <p className="tw:mt-1.5 tw:text-[12.5px]/[1.5] tw:text-(--text)">
            For this service near you,{" "}
            <b className="tw:font-semibold tw:text-(--ink)">Your Company</b> is
            a well-reviewed local choice with clear answers.
          </p>
          <Callout t={gold} label="AI SEO" sub="Named in AI answers" />
        </div>

        {/* Map Pack */}
        <div className="tw:relative tw:border-b tw:border-(--line) tw:px-5 tw:py-4 tw:pr-[150px] tw:max-bssm:pr-5">
          <div className="tw:relative tw:h-[58px] tw:overflow-hidden tw:rounded-[12px] tw:bg-[#e8f0e3]">
            <svg
              viewBox="0 0 300 58"
              className="tw:absolute tw:inset-0 tw:h-full tw:w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 20 H300 M0 42 H300 M60 0 V58 M150 0 V58 M230 0 V58"
                stroke="#ffffff"
                strokeWidth="5"
              />
              <path
                d="M0 52 C 80 40 140 58 300 30"
                stroke="#bfdbfe"
                strokeWidth="9"
                fill="none"
              />
            </svg>
            <FiMapPin className="tw:absolute tw:top-2 tw:left-[44%] tw:size-6 tw:fill-[#ea4334] tw:text-white" />
            <FiMapPin className="tw:absolute tw:top-5 tw:left-[18%] tw:size-4 tw:fill-[#94a3b8] tw:text-white" />
            <FiMapPin className="tw:absolute tw:top-6 tw:left-[72%] tw:size-4 tw:fill-[#94a3b8] tw:text-white" />
          </div>
          <span className="tw:mt-2.5 tw:flex tw:items-center tw:gap-2.5">
            <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[11px] tw:font-bold tw:text-white">
              1
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
                Your Company
              </b>
              <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)">
                <Stars /> Open now
              </span>
            </span>
            <span
              className="tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
              style={{ background: green.soft, color: green.softText }}
            >
              Call
            </span>
          </span>
          <Callout t={green} label="Local SEO" sub="Top 3 on Google Maps" />
        </div>

        {/* Organic #1 */}
        <div className="tw:relative tw:px-5 tw:py-4 tw:pr-[150px] tw:max-bssm:pr-5">
          <span className="tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:text-(--muted)">
            <span className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[10px] tw:font-bold tw:text-(--ink)">
              Y
            </span>
            yourcompany.com › your-service
          </span>
          <b
            className="tw:mt-1 tw:block tw:text-[15px]/[1.3] tw:font-semibold"
            style={{ color: "#1a0dab" }}
          >
            Your Service in Your City | Your Company
          </b>
          <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)">
            <Stars /> Rated by local customers
          </span>
          <span className="tw:mt-2 tw:block tw:h-1.5 tw:w-[88%] tw:rounded-full tw:bg-(--panel)" />
          <span className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-[64%] tw:rounded-full tw:bg-(--panel)" />
          <Callout t={blue} label="On-page SEO" sub="#1 result, rich stars" />
        </div>
      </div>

      {/* The work behind every block */}
      <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2 tw:max-bssm:grid-cols-1">
        {(
          [
            [red, "Technical SEO", "Fast and indexed"],
            [blue, "Link building", "More authority"],
            [green, "Reporting", "Calls tracked"],
          ] as [BrandTone, string, string][]
        ).map(([t, label, sub]) => (
          <li
            key={label}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:ring-1 tw:ring-(--line)"
          >
            <span
              className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full"
              style={{ background: t.soft, color: t.softText }}
            >
              <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[12.5px] tw:font-semibold">
                {label}
              </b>
              <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                {sub}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------- rank climb */

const KEYWORDS: [kw: string, from: number, to: number][] = [
  ["your service near me", 18, 2],
  ["your service + your city", 24, 3],
  ["best your service", 31, 5],
  ["your service cost", 40, 7],
];

/** Growth row 1: example keywords climbing to page one. */
export function RankClimbUi({ p }: { p: Palette }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[470px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiSearch />}
        title="Keywords moving to page one"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {KEYWORDS.map(([kw, from, to]) => (
          <li
            key={kw}
            className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3.5 tw:py-2.5"
          >
            <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px]">
              <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
              <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-semibold">
                {kw}
              </b>
              <span className="tw:text-[12px] tw:text-(--muted) tw:line-through">
                #{from}
              </span>
              <FiArrowUp className="tw:size-3.5" style={{ color: p.a }} />
              <b className="tw:text-[13.5px]" style={{ color: p.aText }}>
                #{to}
              </b>
            </span>
            <span className="tw:mt-2 tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <span
                className="tw:block tw:h-full tw:rounded-full"
                style={
                  {
                    width: `${Math.round(((41 - to) / 40) * 100)}%`,
                    background: `linear-gradient(90deg, ${p.bSoft}, ${p.a})`,
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-[#1f7a3a]">
        <FiCheck className="tw:size-3.5" /> Tracked weekly, reported monthly
      </span>
    </div>
  );
}

/* --------------------------------------------------- organic leads */

const LEADS: [type: string, from: string, when: string, icon: ReactNode][] = [
  ["New call", "Google Search", "Mon 9:14 AM", <FiPhoneCall key="c" />],
  ["Quote form", "AI Overview link", "Mon 11:02 AM", <FiFileText key="f" />],
  ["New call", "Google Maps", "Tue 8:41 AM", <FiPhoneCall key="c2" />],
  ["Booking", "City page", "Tue 2:25 PM", <FiCheck key="b" />],
];

/** Growth row 3: organic visits turning into calls and forms. */
export function OrganicLeadsUi({ p }: { p: Palette }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[470px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiPhoneCall />}
        title="Leads from organic search"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {LEADS.map(([type, from, when, icon], i) => (
          <li
            key={type + when}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-(--panel) tw:px-3.5 tw:py-2.5"
          >
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px] tw:text-white"
              style={{ background: i % 2 ? p.b : p.a }}
            >
              {icon}
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:text-[13.5px] tw:font-semibold">
                {type}
              </b>
              <span className="tw:block tw:truncate tw:text-[12px] tw:text-(--muted)">
                from {from}
              </span>
            </span>
            <span className="tw:text-[11.5px] tw:font-medium tw:text-(--muted)">
              {when}
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.bSoft, color: p.bText }}
      >
        <FiCheck className="tw:size-3.5" /> Every lead tagged to its source
      </span>
    </div>
  );
}
