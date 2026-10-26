/* Animated UI components for the niche website design pages (owner, 26 Oct
   2026: "i want the animated ui components"). Each one loops on its own
   (CSS in nwd.css) and holds a finished frame for reduced motion. Example
   only: positions and times, no figures, "Your … Co." names. */

import type { CSSProperties } from "react";
import {
  FiArrowUp,
  FiCalendar,
  FiCheck,
  FiFileText,
  FiHome,
  FiLock,
  FiPhone,
  FiSearch,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { SiGoogle } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { Icon, type IconKey } from "@/components/rd/industry/icons";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";
import "./nwd.css";

type Tone = BrandTone;
const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` });
const CARD = cx(
  UI_CARD,
  "tw:w-full tw:max-w-[470px] tw:p-5 tw:text-left tw:text-(--ink)",
);

/* -------------------------------------------------------- rank climb */

/** Example searches climbing: each bar fills from its old position to its
    new one and the number flips, row by row, on a loop. */
export function RankClimbAnim({
  t,
  keywords,
}: {
  t: Tone;
  keywords: [string, number, number][];
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiSearch />}
        title="Rankings after launch"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {keywords.map(([kw, from, to], i) => (
          <li
            key={kw}
            className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3.5 tw:py-2.5"
          >
            <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px]">
              <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
              <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-semibold">
                {kw}
              </b>
              <span className="tw:grid tw:w-9 tw:text-right tw:text-[13.5px] tw:font-bold tw:[&>*]:[grid-area:1/1]">
                <span className="nwd-old tw:text-(--muted)" style={d(i * 0.35)}>
                  #{from}
                </span>
                <span
                  className="nwd-new"
                  style={{ color: t.softText, ...d(i * 0.35) }}
                >
                  #{to}
                </span>
              </span>
              <FiArrowUp
                className="nwd-new tw:size-3.5"
                style={{ color: t.solid, ...d(i * 0.35) }}
              />
            </span>
            <span className="tw:mt-2 tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <span
                className="nwd-climb tw:block tw:h-full tw:rounded-full"
                style={
                  {
                    width: `${Math.round(((41 - to) / 40) * 100)}%`,
                    background: t.solid,
                    "--lo": `${Math.max(0.08, (41 - from) / (41 - to))}`,
                    ...d(i * 0.35),
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: t.soft, color: t.softText }}
      >
        <FiCheck className="tw:size-3.5" /> New pages climbing week by week
      </span>
    </div>
  );
}

/* ----------------------------------------------------------- booking */

/** Phone website: a tap on the booking button ("Book online"), the slot
    fills in, then a confirmation toast ("Booking confirmed") — on a loop.
    Button and toast text come from the niche's example site (stage). */
export function BookingPhoneAnim({
  t,
  url,
  headline,
  services,
  cta,
  toast,
}: {
  t: Tone;
  url: string;
  headline: string;
  services: [string, string, string, string];
  cta: string;
  toast: string;
}) {
  return (
    <div
      className="tw:w-full tw:max-w-[300px] tw:rounded-[38px] tw:bg-[#0c1526] tw:p-2 tw:[box-shadow:0_30px_60px_-30px_rgba(12,21,38,0.55)]"
      aria-hidden="true"
    >
      <div className="tw:relative tw:h-[470px] tw:overflow-hidden tw:rounded-[31px] tw:bg-white tw:text-left tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:px-5 tw:pt-3 tw:text-[10px] tw:font-semibold">
          <span>9:41</span>
          <span className="tw:h-[5px] tw:w-14 tw:rounded-full tw:bg-[#0c1526]" />
          <span>5G</span>
        </div>
        <div className="tw:mx-3 tw:mt-2.5 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[11px] tw:font-medium tw:text-(--muted)">
          <FiLock className="tw:size-3" /> {url}
        </div>
        <div
          className="tw:mx-3 tw:mt-3 tw:rounded-[20px] tw:p-4"
          style={{ background: t.soft }}
        >
          <span className="tw:block tw:text-[18px] tw:leading-[1.15] tw:font-semibold">
            {headline}
          </span>
          <span className="tw:relative tw:mt-3 tw:block">
            <span
              className="nwd-press tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2.5 tw:text-[13px] tw:font-semibold"
              style={{ background: t.solid, color: t.onSolid }}
            >
              <FiCalendar className="tw:size-3.5" /> {cta}
            </span>
            <span className="nwd-tap tw:absolute tw:top-1/2 tw:left-[62%] tw:size-9 tw:-translate-x-1/2 tw:-translate-y-1/2 tw:rounded-full tw:bg-[#0c1526]/25 tw:ring-2 tw:ring-white" />
          </span>
        </div>
        <div className="tw:mx-3 tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2">
          {services.map((s, i) => (
            <span
              key={s}
              className="tw:rounded-[14px] tw:bg-(--panel) tw:px-3 tw:py-3 tw:text-[12px] tw:font-semibold"
            >
              <span
                className="tw:mb-1.5 tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-white tw:text-[11px]"
                style={{ color: t.softText }}
              >
                {i === 0 ? (
                  <FiPhone />
                ) : i === 1 ? (
                  <FiCheck />
                ) : i === 2 ? (
                  <FiCalendar />
                ) : (
                  <FiFileText />
                )}
              </span>
              {s}
            </span>
          ))}
        </div>
        {/* chosen slot */}
        <div
          className="nwd-slot tw:mx-3 tw:mt-3 tw:flex tw:items-center tw:justify-between tw:rounded-[14px] tw:border tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
          style={{ borderColor: t.solid }}
        >
          <span className="tw:flex tw:items-center tw:gap-2">
            <FiCalendar style={{ color: t.solid }} /> Tomorrow · 9:00 AM
          </span>
          <FiCheck style={{ color: t.solid }} />
        </div>
        {/* sticky call bar */}
        <div className="tw:absolute tw:inset-x-3 tw:bottom-3 tw:grid tw:grid-cols-2 tw:gap-2">
          <span
            className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2.5 tw:text-[12.5px] tw:font-semibold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            <FiPhone className="tw:size-3.5" /> Call now
          </span>
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:py-2.5 tw:text-[12.5px] tw:font-semibold">
            <FiCalendar className="tw:size-3.5" /> Book
          </span>
        </div>
        {/* confirmation */}
        <span className="nwd-confirm tw:absolute tw:inset-x-3 tw:top-10 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-[#0c1526] tw:px-3.5 tw:py-3 tw:text-[12px] tw:font-semibold tw:text-white tw:[box-shadow:0_16px_34px_-14px_rgba(12,21,38,0.6)]">
          <span
            className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full"
            style={{ background: t.solid, color: t.onSolid }}
          >
            <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
          </span>
          <span className="tw:leading-tight">
            {toast}
            <span className="tw:block tw:text-[11px] tw:font-medium tw:text-white/70">
              {services[2]} · Tomorrow 9 AM
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- ai */

/** AI Overview answer: the question types out, the answer lines appear
    and the site is cited — on a loop. */
export function AiAnswerAnim({
  t,
  query,
  intro,
  bullets,
  site,
  business,
}: {
  t: Tone;
  query: string;
  intro: string;
  bullets: [string, string, string];
  site: string;
  /** Example business name, e.g. "Your HVAC Co.". */
  business: string;
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-medium">
        <SiGoogle className="tw:size-3.5 tw:flex-none tw:text-[#4285f4]" />
        <span className="nwd-type tw:inline-block tw:overflow-hidden tw:whitespace-nowrap">
          {query}
        </span>
        <span className="nwd-caret tw:h-4 tw:w-[2px] tw:flex-none tw:bg-(--ink)" />
      </span>
      <div
        className="tw:mt-4 tw:rounded-[16px] tw:p-4"
        style={{ background: t.soft }}
      >
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:text-[12.5px] tw:font-semibold">
          <span className="tw:flex tw:items-center tw:gap-1.5">
            <HiSparkles style={{ color: t.solid }} /> AI Overview
          </span>
          <Chip tone="muted">Example</Chip>
        </span>
        <p className="nwd-line tw:mt-2 tw:text-[13px]/[1.55]" style={d(0.2)}>
          {intro} <b className="tw:font-semibold">{business}</b> stands out
          for:
        </p>
        <ul className="tw:mt-2 tw:grid tw:gap-1.5">
          {bullets.map((b, i) => (
            <li
              key={b}
              className="nwd-line tw:flex tw:items-center tw:gap-2 tw:text-[12.5px]"
              style={d(0.45 + i * 0.25)}
            >
              <FiCheck
                className="tw:size-3.5 tw:flex-none tw:[stroke-width:3]"
                style={{ color: t.softText }}
              />
              {b}
            </li>
          ))}
        </ul>
        <span
          className="nwd-line tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-1.5"
          style={d(1.3)}
        >
          <span className="tw:text-[11px] tw:font-semibold tw:text-(--muted)">
            Sources
          </span>
          <span
            className="nwd-cite tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            {site}
          </span>
          <span className="tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold">
            Google reviews
          </span>
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- sitemap */

export type SiteGroup = {
  name: string;
  icon: IconKey;
  pages: [string, string, string];
};

/** The site's page tree: Home, four sections, three pages each. Pages
    build in one by one (skeleton → finished), hold, then reset. */
export function SiteMapAnim({
  tones,
  home,
  groups,
}: {
  tones: [Tone, Tone, Tone, Tone];
  home: string;
  groups: [SiteGroup, SiteGroup, SiteGroup, SiteGroup];
}) {
  return (
    <div
      className="tw:rounded-(--r-xl) tw:bg-white tw:px-8 tw:pt-8 tw:pb-9 tw:max-bssm:px-4 tw:max-bssm:pt-6"
      aria-hidden="true"
    >
      {/* Home */}
      <div className="tw:flex tw:justify-center">
        <span className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-(--ink) tw:px-5 tw:py-3 tw:text-[15px] tw:font-semibold tw:text-white">
          <FiHome /> {home}
          <Chip tone="muted">Example</Chip>
        </span>
      </div>
      {/* connector */}
      <div className="tw:relative tw:mx-auto tw:h-10 tw:max-w-[78%] tw:max-bslg:hidden">
        <span className="tw:absolute tw:top-0 tw:left-1/2 tw:h-5 tw:w-[2px] tw:-translate-x-1/2 tw:bg-(--line)" />
        <span className="tw:absolute tw:top-5 tw:right-0 tw:left-0 tw:h-[2px] tw:bg-(--line)" />
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="tw:absolute tw:top-5 tw:h-5 tw:w-[2px] tw:bg-(--line)"
            style={{ left: `${(i / 3) * 100}%` }}
          />
        ))}
      </div>
      <div className="tw:grid tw:grid-cols-4 tw:gap-4 tw:max-bslg:mt-6 tw:max-bslg:grid-cols-2 tw:max-bssm:grid-cols-1">
        {groups.map((g, gi) => {
          const t = tones[gi % 4];
          return (
            <div
              key={g.name}
              className="tw:rounded-[20px] tw:bg-(--panel) tw:p-3"
            >
              <span
                className="tw:flex tw:items-center tw:gap-2 tw:rounded-[14px] tw:px-3 tw:py-2.5 tw:text-[14px] tw:font-semibold"
                style={{ background: t.solid, color: t.onSolid }}
              >
                <Icon name={g.icon} /> {g.name}
              </span>
              <ul className="tw:mt-2.5 tw:grid tw:gap-2">
                {g.pages.map((pg, pi) => {
                  const at = (gi * 3 + pi) * 0.32;
                  return (
                    <li
                      key={pg}
                      className="tw:relative tw:h-[52px] tw:overflow-hidden tw:rounded-[12px] tw:bg-white"
                    >
                      {/* skeleton */}
                      <span className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:justify-center tw:gap-1.5 tw:px-3">
                        <span className="tw:h-2 tw:w-[70%] tw:rounded-full tw:bg-(--panel)" />
                        <span className="tw:h-2 tw:w-[45%] tw:rounded-full tw:bg-(--panel)" />
                      </span>
                      {/* built page */}
                      <span
                        className="nwd-build tw:absolute tw:inset-0 tw:flex tw:items-center tw:gap-2.5 tw:bg-white tw:px-3"
                        style={d(at)}
                      >
                        <span
                          className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-[8px] tw:text-[12px]"
                          style={{ background: t.soft, color: t.softText }}
                        >
                          <FiFileText />
                        </span>
                        <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[13px] tw:font-semibold">
                          {pg}
                        </span>
                        <FiCheck
                          className="tw:size-3.5 tw:flex-none tw:[stroke-width:3]"
                          style={{ color: t.softText }}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
