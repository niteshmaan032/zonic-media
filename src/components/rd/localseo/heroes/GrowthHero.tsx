"use client";

/* Niche growth hero (owner, 26 Oct 2026): "clean interactive ui component
   showing the niche growth … every ui component should be different … no
   after before" → "showing google maps ranking, ai ranking, getting more
   leads like that things so user get attracted" → approved on roofing,
   then "apply on other pages … map ranking, ai ranking, growing business".

   One card, three tabs: Google Maps, AI answers and growth. Each tab has
   several designs (types.ts GrowthHero); every page picks its own
   combination, so no two heroes look the same. Tabs step on their own
   (paused on hover/focus, stopped after a click, off for reduced motion).
   Example only: positions and times, no figures, no company names. */

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiCalendar,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiMic,
  FiNavigation,
  FiPhone,
  FiPhoneCall,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { SiGoogle } from "react-icons/si";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";
import type { GrowthHero as Data } from "../types";
import "../localseo.css";

type Tones = [BrandTone, BrandTone, BrandTone, BrandTone];
type View = { ui: Data; t: BrandTone };

const STEP_MS = 4200;
const TAB_ICONS: IconType[] = [FiMapPin, HiSparkles, FiTrendingUp];
const LIFT = "tw:[box-shadow:0_16px_34px_-20px_rgba(12,21,38,0.5)]";
const d = (s: number) => ({ animationDelay: `${s}s` });

function Stars({ size = 12 }: { size?: number }) {
  return (
    <span className="tw:flex tw:flex-none tw:gap-0.5 tw:text-[#f4b400]">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          width={size}
          height={size}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

function SearchPill({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={`tw:flex tw:max-w-[70%] tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium tw:[box-shadow:0_8px_20px_-12px_rgba(12,21,38,0.4)] ${className ?? ""}`}
    >
      <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
      <span className="tw:truncate">{text}</span>
    </span>
  );
}

function Streets() {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      className="tw:absolute tw:inset-0 tw:h-full tw:w-full"
    >
      <path
        d="M0 92 H400 M0 196 H400 M118 0 V300 M268 0 V300"
        stroke="#ffffff"
        strokeWidth="12"
      />
      <path
        d="M0 40 H400 M0 250 H400 M54 0 V300 M196 0 V300 M340 0 V300"
        stroke="#ffffff"
        strokeWidth="5"
      />
      <path
        d="M-10 286 C 90 236 170 300 260 214 S 380 150 410 166"
        stroke="#c7ddfb"
        strokeWidth="16"
        fill="none"
      />
      <rect x="140" y="112" width="104" height="64" rx="8" fill="#dcebd3" />
    </svg>
  );
}

/* ================================================================ card */

export function GrowthHero({ ui, tones }: { ui: Data; tones: Tones }) {
  const [a, b, c] = tones;
  const tabTone = [a, b, c];
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const paused = useRef(false);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % 3);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [auto]);

  const tab = ui.tabs[active];
  const t = tabTone[active];
  const mapBg =
    ui.maps === "pin" || ui.maps === "grid" ? "#eaf1e6" : "var(--panel)";

  return (
    <div
      className="tw:w-full tw:overflow-hidden tw:rounded-[28px] tw:bg-white tw:p-4 tw:text-left tw:text-(--ink) tw:[box-shadow:0_30px_70px_-40px_rgba(12,21,38,0.45)] tw:ring-1 tw:ring-(--line) tw:max-bssm:p-3"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div
        role="tablist"
        aria-label={`How Zonic grows ${ui.business}`}
        className="tw:grid tw:grid-cols-3 tw:gap-2"
      >
        {ui.tabs.map((tb, i) => {
          const on = i === active;
          const Ico = TAB_ICONS[i];
          const tt = tabTone[i];
          return (
            <button
              key={tb.label}
              type="button"
              role="tab"
              id={`gh-tab-${i}`}
              aria-selected={on}
              aria-controls="gh-panel"
              onClick={() => {
                setActive(i);
                setAuto(false);
              }}
              className="tw:relative tw:flex tw:cursor-pointer tw:items-center tw:gap-2.5 tw:overflow-hidden tw:rounded-[18px] tw:border-0 tw:px-3 tw:py-2.5 tw:text-left tw:transition tw:duration-300 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:max-bssm:flex-col tw:max-bssm:items-start tw:max-bssm:gap-1.5"
              style={{ background: on ? tt.soft : "var(--panel)" }}
            >
              <span
                className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px] tw:transition tw:duration-300"
                style={
                  on
                    ? { background: tt.solid, color: tt.onSolid }
                    : { background: "#ffffff", color: tt.softText }
                }
                aria-hidden="true"
              >
                <Ico />
              </span>
              <span className="tw:min-w-0 tw:leading-tight">
                <span className="tw:block tw:truncate tw:text-[11px] tw:font-medium tw:text-(--muted)">
                  {tb.label}
                </span>
                <b
                  className="tw:block tw:truncate tw:text-[14px] tw:font-semibold"
                  style={{ color: on ? tt.softText : "var(--ink)" }}
                >
                  {tb.badge}
                </b>
              </span>
              {on && auto ? (
                <span
                  key={`p${active}`}
                  className="lseo-progress tw:absolute tw:bottom-0 tw:left-3 tw:h-[3px] tw:rounded-full"
                  style={{
                    background: tt.solid,
                    animationDuration: `${STEP_MS}ms`,
                  }}
                  aria-hidden="true"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        id="gh-panel"
        role="tabpanel"
        aria-labelledby={`gh-tab-${active}`}
        className="tw:mt-3"
      >
        <div
          key={active}
          className="lseo-fade tw:relative tw:h-[340px] tw:overflow-hidden tw:rounded-[20px] tw:max-bssm:h-[372px]"
          style={{ background: active === 0 ? mapBg : t.soft }}
          aria-hidden="true"
        >
          {active === 0 ? (
            <MapsTab ui={ui} t={a} />
          ) : active === 1 ? (
            <AiTab ui={ui} t={b} />
          ) : (
            <GrowthTab ui={ui} t={c} />
          )}
          <span className="tw:absolute tw:top-3 tw:right-3 tw:rounded-full tw:bg-white/85 tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
            Example
          </span>
        </div>
        <div key={`c${active}`} className="lseo-fade tw:px-1 tw:pt-3.5">
          <b className="tw:block tw:text-[16px]/[1.3] tw:font-semibold">
            {tab.title}
          </b>
          <p className="tw:mt-1 tw:text-[13.5px]/[1.5] tw:text-(--text)">
            {tab.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function MapsTab(p: View) {
  switch (p.ui.maps) {
    case "pack":
      return <MapsPack {...p} />;
    case "grid":
      return <MapsGrid {...p} />;
    case "towns":
      return <MapsTowns {...p} />;
    default:
      return <MapsPin {...p} />;
  }
}
function AiTab(p: View) {
  switch (p.ui.ai) {
    case "overview":
      return <AiOverview {...p} />;
    case "voice":
      return <AiVoice {...p} />;
    default:
      return <AiChat {...p} />;
  }
}
function GrowthTab(p: View) {
  switch (p.ui.growth) {
    case "calls":
      return <GrowCalls {...p} />;
    case "calendar":
      return <GrowCalendar {...p} />;
    case "pipeline":
      return <GrowPipeline {...p} />;
    default:
      return <GrowFeed {...p} />;
  }
}

/* ================================================================ maps */

function ListingCard({ ui, t, className }: View & { className?: string }) {
  return (
    <span
      className={`tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-white tw:px-3.5 tw:py-3 ${LIFT} ${className ?? ""}`}
    >
      <span
        className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold"
        style={{ background: t.solid, color: t.onSolid }}
      >
        1
      </span>
      <span className="tw:min-w-0 tw:flex-1">
        <b className="tw:block tw:truncate tw:text-[14px] tw:font-semibold">
          {ui.business}
        </b>
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)">
          <Stars size={11} />
          <span className="tw:truncate">{ui.category} · Open now</span>
        </span>
      </span>
      <span
        className="tw:flex tw:flex-none tw:items-center tw:gap-1 tw:rounded-full tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-semibold"
        style={{ background: t.solid, color: t.onSolid }}
      >
        <FiPhone className="tw:size-3" /> Call
      </span>
    </span>
  );
}

const OTHER_PINS = [
  { left: "16%", top: "30%" },
  { left: "74%", top: "24%" },
  { left: "30%", top: "62%" },
  { left: "82%", top: "58%" },
];

/** Map with the business pin on top and its #1 listing. */
function MapsPin({ ui, t }: View) {
  return (
    <>
      <Streets />
      <SearchPill text={ui.query} className="tw:absolute tw:top-3 tw:left-3" />
      {OTHER_PINS.map((p) => (
        <FiMapPin
          key={p.left + p.top}
          className="tw:absolute tw:size-5 tw:fill-[#94a3b8] tw:text-white"
          style={p}
        />
      ))}
      <span className="tw:absolute tw:top-[42%] tw:left-1/2 tw:-translate-x-1/2 tw:-translate-y-1/2">
        <span
          className="lseo-ring tw:absolute tw:top-[70%] tw:left-1/2 tw:size-12 tw:-translate-x-1/2 tw:-translate-y-1/2 tw:rounded-full"
          style={{ background: t.solid, opacity: 0.25 }}
        />
        <span className="lseo-badge tw:relative tw:flex tw:flex-col tw:items-center">
          <span
            className="tw:mb-1 tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[12px] tw:font-bold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            #1
          </span>
          <FiMapPin
            className="tw:size-10 tw:text-white"
            style={{ fill: t.solid }}
          />
        </span>
      </span>
      <ListingCard
        ui={ui}
        t={t}
        className="lseo-rise tw:absolute tw:inset-x-3 tw:bottom-3"
      />
    </>
  );
}

/** Google Maps "Places" list: the business first of three. */
function MapsPack({ ui, t }: View) {
  const others = ["Nearby competitor", "Another local option"];
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:gap-2.5 tw:p-3">
      <SearchPill text={ui.query} />
      <div className="tw:relative tw:h-[64px] tw:flex-none tw:overflow-hidden tw:rounded-[16px] tw:bg-[#eaf1e6]">
        <Streets />
        <FiMapPin className="tw:absolute tw:top-[38%] tw:left-[24%] tw:size-4 tw:fill-[#94a3b8] tw:text-white" />
        <FiMapPin className="tw:absolute tw:top-[30%] tw:left-[70%] tw:size-4 tw:fill-[#94a3b8] tw:text-white" />
        <span className="lseo-badge tw:absolute tw:top-[14%] tw:left-[46%]">
          <FiMapPin
            className="tw:size-8 tw:text-white"
            style={{ fill: t.solid }}
          />
        </span>
      </div>
      <div className="tw:grid tw:gap-1.5 tw:rounded-[16px] tw:bg-white tw:p-2">
        <span
          className="lseo-slide tw:block tw:rounded-[12px] tw:px-3 tw:py-2.5"
          style={{ background: t.soft }}
        >
          <span className="tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold"
              style={{ background: t.solid, color: t.onSolid }}
            >
              1
            </span>
            <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[14px] tw:font-semibold">
              {ui.business}
            </b>
            <Stars size={11} />
          </span>
          <span className="tw:mt-1 tw:block tw:truncate tw:pl-[34px] tw:text-[11.5px] tw:text-(--muted)">
            {ui.category} · Open now
          </span>
          <span className="tw:mt-2 tw:flex tw:gap-1.5 tw:pl-[34px]">
            <span
              className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:px-3 tw:py-1 tw:text-[11.5px] tw:font-semibold"
              style={{ background: t.solid, color: t.onSolid }}
            >
              <FiPhone className="tw:size-3" /> Call
            </span>
            <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-white tw:px-3 tw:py-1 tw:text-[11.5px] tw:font-semibold">
              <FiNavigation className="tw:size-3" /> Directions
            </span>
          </span>
        </span>
        {others.map((o, i) => (
          <span
            key={o}
            className="lseo-slide tw:flex tw:items-center tw:gap-2.5 tw:px-3 tw:py-1 tw:text-[12.5px] tw:text-(--muted)"
            style={d(0.12 + i * 0.12)}
          >
            <span className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[11px] tw:font-bold tw:text-(--ink)">
              {i + 2}
            </span>
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}

const GRID = [
  [3, 2, 1, 2, 3],
  [2, 1, 1, 1, 2],
  [1, 1, 0, 1, 1],
  [2, 1, 1, 1, 2],
  [3, 2, 1, 2, 4],
];

/** Rank grid across the service area: mostly #1–3. */
function MapsGrid({ ui, t }: View) {
  const cell = (n: number) =>
    n === 1
      ? { background: t.solid, color: t.onSolid }
      : n <= 3
        ? { background: "#ffffff", color: t.softText }
        : { background: "#eef1f6", color: "#64748b" };
  return (
    <>
      <Streets />
      <SearchPill text={ui.query} className="tw:absolute tw:top-3 tw:left-3" />
      <div className="tw:absolute tw:inset-x-0 tw:top-[52px] tw:bottom-[46px] tw:grid tw:place-items-center">
        <div className="tw:grid tw:w-[min(214px,68%)] tw:grid-cols-5 tw:gap-1.5">
          {GRID.flat().map((n, i) => {
            const ring = Math.max(
              Math.abs(Math.floor(i / 5) - 2),
              Math.abs((i % 5) - 2),
            );
            return n === 0 ? (
              <span
                key={i}
                className="tw:relative tw:grid tw:aspect-square tw:place-items-center tw:rounded-full tw:bg-white"
                style={{ boxShadow: `0 0 0 3px ${t.solid}` }}
              >
                <span
                  className="lseo-ring tw:absolute tw:inset-0 tw:rounded-full"
                  style={{ boxShadow: `0 0 0 3px ${t.solid}` }}
                />
                <FiMapPin
                  className="tw:size-[55%] tw:text-white"
                  style={{ fill: t.solid }}
                />
              </span>
            ) : (
              <span
                key={i}
                className="lseo-badge tw:grid tw:aspect-square tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:[box-shadow:0_6px_14px_-8px_rgba(12,21,38,0.45)]"
                style={{ ...cell(n), ...d(ring * 0.12) }}
              >
                {n}
              </span>
            );
          })}
        </div>
      </div>
      <span className="lseo-rise tw:absolute tw:inset-x-3 tw:bottom-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[14px] tw:bg-white tw:px-3.5 tw:py-2 tw:text-[12px] tw:font-semibold">
        <span className="tw:truncate">{ui.business} across the area</span>
        <span className="tw:flex tw:flex-none tw:items-center tw:gap-1.5 tw:text-[11px] tw:text-(--muted)">
          <span
            className="tw:size-2.5 tw:rounded-full"
            style={{ background: t.solid }}
          />
          Rank #1
        </span>
      </span>
    </>
  );
}

const AREA_RANK = [1, 1, 2, 1];

/** Map Pack position, area by area. */
function MapsTowns({ ui, t }: View) {
  const areas = ui.areas ?? ["Downtown", "North side", "West end", "Lakeside"];
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <SearchPill text={ui.query} />
      <div className={`tw:mt-3 tw:rounded-[18px] tw:bg-white tw:p-3.5 ${LIFT}`}>
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold">
          <FiMapPin style={{ color: t.solid }} /> Map Pack rank by area
        </span>
        <ul className="tw:mt-2.5 tw:grid tw:gap-2">
          {areas.map((area, i) => {
            const rank = AREA_RANK[i];
            return (
              <li
                key={area}
                className="lseo-slide tw:flex tw:items-center tw:gap-3"
                style={d(i * 0.1)}
              >
                <span className="tw:w-[30%] tw:truncate tw:text-[12.5px] tw:font-medium">
                  {area}
                </span>
                <span className="tw:h-2 tw:flex-1 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
                  <span
                    className="lseo-fillx tw:block tw:h-full tw:rounded-full"
                    style={{
                      width: rank === 1 ? "100%" : "82%",
                      background: t.solid,
                      ...d(0.1 + i * 0.1),
                    }}
                  />
                </span>
                <span
                  className="tw:w-9 tw:flex-none tw:rounded-full tw:py-0.5 tw:text-center tw:text-[11.5px] tw:font-bold"
                  style={
                    rank === 1
                      ? { background: t.solid, color: t.onSolid }
                      : { background: t.soft, color: t.softText }
                  }
                >
                  #{rank}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <ListingCard ui={ui} t={t} className="lseo-rise tw:mt-auto" />
    </div>
  );
}

/* ================================================================== ai */

const ENGINES = ["ChatGPT", "Gemini", "Perplexity", "AI Overviews"];

/** Assistant chat: the business named as the top pick. */
function AiChat({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:gap-2.5 tw:p-3 tw:pt-11">
      <span className="tw:ml-auto tw:max-w-[86%] tw:rounded-[16px] tw:rounded-br-[4px] tw:bg-white tw:px-3.5 tw:py-2 tw:text-[12.5px]/[1.45] tw:font-medium tw:[box-shadow:0_8px_20px_-14px_rgba(12,21,38,0.45)]">
        {ui.aiPrompt}
      </span>
      <span
        className={`lseo-rise tw:block tw:rounded-[16px] tw:bg-white tw:p-3.5 ${LIFT}`}
      >
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
          <HiSparkles style={{ color: t.solid }} /> Top pick nearby
        </span>
        <span className="tw:mt-1.5 tw:flex tw:items-center tw:gap-2.5">
          <span
            className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-bold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            1
          </span>
          <span className="tw:min-w-0">
            <b className="tw:block tw:truncate tw:text-[15px] tw:font-semibold">
              {ui.business}
            </b>
            <Stars size={11} />
          </span>
        </span>
        <span className="tw:mt-2.5 tw:grid tw:gap-1">
          {ui.aiReasons.map((r, i) => (
            <span
              key={r}
              className="lseo-badge tw:flex tw:items-center tw:gap-1.5 tw:text-[12px] tw:text-(--ink-2)"
              style={d(0.25 + i * 0.15)}
            >
              <FiCheck
                className="tw:size-3.5 tw:flex-none tw:[stroke-width:3]"
                style={{ color: t.softText }}
              />
              {r}
            </span>
          ))}
        </span>
      </span>
      <span className="tw:mt-auto tw:grid tw:grid-cols-4 tw:gap-1.5">
        {ENGINES.map((e, i) => (
          <span
            key={e}
            className="lseo-badge tw:flex tw:flex-col tw:items-center tw:gap-1 tw:rounded-[12px] tw:bg-white tw:px-1 tw:py-2 tw:text-center tw:text-[10.5px] tw:font-semibold"
            style={d(0.4 + i * 0.15)}
          >
            <span
              className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full"
              style={{ background: t.solid, color: t.onSolid }}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
            </span>
            <span className="tw:w-full tw:truncate">{e}</span>
          </span>
        ))}
      </span>
    </div>
  );
}

/** Google search with an AI Overview that names and cites the business. */
function AiOverview({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <span className="tw:flex tw:max-w-[78%] tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-medium tw:[box-shadow:0_8px_20px_-12px_rgba(12,21,38,0.4)]">
        <FiSearch className="tw:size-3.5 tw:flex-none tw:text-(--muted)" />
        <span className="tw:truncate">{ui.aiPrompt}</span>
      </span>
      <div
        className={`lseo-rise tw:mt-3 tw:rounded-[18px] tw:bg-white tw:p-4 ${LIFT}`}
      >
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[12.5px] tw:font-semibold">
          <HiSparkles style={{ color: t.solid }} /> AI Overview
        </span>
        <p className="tw:mt-2 tw:text-[13px]/[1.6] tw:text-(--text)">
          <mark
            className="lseo-mark tw:rounded-[6px] tw:px-1 tw:font-semibold tw:text-(--ink)"
            style={{ background: t.soft }}
          >
            {ui.business}
          </mark>{" "}
          is a top-rated pick nearby:
        </p>
        <span className="tw:mt-1.5 tw:grid tw:gap-1">
          {ui.aiReasons.map((r, i) => (
            <span
              key={r}
              className="lseo-badge tw:flex tw:items-center tw:gap-1.5 tw:text-[12.5px] tw:text-(--ink-2)"
              style={d(0.2 + i * 0.15)}
            >
              <FiCheck
                className="tw:size-3.5 tw:flex-none tw:[stroke-width:3]"
                style={{ color: t.softText }}
              />
              {r}
            </span>
          ))}
        </span>
        <span className="tw:mt-3 tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">
          Sources
        </span>
        <span className="tw:mt-1.5 tw:flex tw:flex-wrap tw:gap-1.5">
          {["yourcompany.com", "Google reviews", "Local directory"].map(
            (s, i) => (
              <span
                key={s}
                className="lseo-badge tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
                style={{
                  ...(i === 0
                    ? { background: t.solid, color: t.onSolid }
                    : { background: "var(--panel)" }),
                  ...d(0.3 + i * 0.12),
                }}
              >
                {s}
              </span>
            ),
          )}
        </span>
      </div>
      <span
        className="lseo-slide tw:mt-auto tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3.5 tw:py-2.5"
        style={d(0.35)}
      >
        <span
          className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold"
          style={{ background: t.solid, color: t.onSolid }}
        >
          Y
        </span>
        <span className="tw:min-w-0 tw:flex-1 tw:leading-tight">
          <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
            {ui.business}
          </b>
          <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
            Cited in the answer
          </span>
        </span>
        <FiCheck
          className="tw:size-4 tw:flex-none tw:[stroke-width:3]"
          style={{ color: t.softText }}
        />
      </span>
    </div>
  );
}

/** Voice assistant: a spoken question answered with the business. */
function AiVoice({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:items-center tw:p-3 tw:pt-5">
      <span className="tw:relative tw:grid tw:size-14 tw:flex-none tw:place-items-center">
        <span
          className="lseo-ring tw:absolute tw:inset-0 tw:rounded-full"
          style={{ background: t.solid, opacity: 0.3 }}
        />
        <span
          className="tw:relative tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:text-[22px]"
          style={{ background: t.solid, color: t.onSolid }}
        >
          <FiMic />
        </span>
      </span>
      <span className="tw:mt-3 tw:max-w-[90%] tw:text-center tw:text-[13.5px]/[1.45] tw:font-semibold">
        “{ui.aiPrompt}”
      </span>
      <div
        className={`lseo-rise tw:mt-3 tw:w-full tw:rounded-[18px] tw:bg-white tw:p-3.5 ${LIFT}`}
      >
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
          <HiSparkles style={{ color: t.solid }} /> Assistant
        </span>
        <p className="tw:mt-1.5 tw:text-[13px]/[1.5]">
          I found <b className="tw:font-semibold">{ui.business}</b> near you.
        </p>
        <span className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1.5">
          {ui.aiReasons.map((r, i) => (
            <span
              key={r}
              className="lseo-badge tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
              style={{
                background: t.soft,
                color: t.softText,
                ...d(0.3 + i * 0.15),
              }}
            >
              <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
              {r}
            </span>
          ))}
        </span>
      </div>
      <span className="tw:mt-auto tw:grid tw:w-full tw:grid-cols-2 tw:gap-2">
        <span
          className="lseo-badge tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2 tw:text-[12.5px] tw:font-semibold"
          style={{ background: t.solid, color: t.onSolid, ...d(0.5) }}
        >
          <FiPhone className="tw:size-3.5" /> Call now
        </span>
        <span
          className="lseo-badge tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:py-2 tw:text-[12.5px] tw:font-semibold"
          style={d(0.6)}
        >
          <FiNavigation className="tw:size-3.5" /> Directions
        </span>
      </span>
    </div>
  );
}

/* ============================================================== growth */

const WHEN = ["Just now", "8 min ago", "21 min ago"];
const WEEKS = [30, 36, 34, 46, 52, 64, 72, 88];

function leadIcon(type: string) {
  const s = type.toLowerCase();
  if (/(book|appoint|schedul|visit|consult|exam|inspect)/.test(s))
    return <FiCalendar />;
  if (/(quote|estimate|form|request|bid|inquiry|enquiry)/.test(s))
    return <FiFileText />;
  return <FiPhoneCall />;
}

function LiveHead({ label, t }: { label: string; t: BrandTone }) {
  return (
    <span className="tw:flex tw:items-center tw:gap-2 tw:pt-1 tw:pl-1 tw:text-[12.5px] tw:font-semibold">
      <span className="tw:relative tw:flex tw:size-2.5">
        <span
          className="lseo-ring tw:absolute tw:inset-0 tw:rounded-full"
          style={{ background: t.solid }}
        />
        <span
          className="tw:relative tw:size-2.5 tw:rounded-full"
          style={{ background: t.solid }}
        />
      </span>
      {label}
    </span>
  );
}

function LeadRow({
  type,
  from,
  when,
  t,
  at,
}: {
  type: string;
  from: string;
  when: string;
  t: BrandTone;
  at: number;
}) {
  return (
    <span
      className="lseo-slide tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:0_10px_24px_-18px_rgba(12,21,38,0.5)]"
      style={d(at)}
    >
      <span
        className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[14px]"
        style={{ background: t.solid, color: t.onSolid }}
      >
        {leadIcon(type)}
      </span>
      <span className="tw:min-w-0 tw:flex-1">
        <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
          {type}
        </b>
        <span className="tw:block tw:truncate tw:text-[11.5px] tw:text-(--muted)">
          from {from}
        </span>
      </span>
      <span className="tw:flex-none tw:text-[11px] tw:font-medium tw:text-(--muted)">
        {when}
      </span>
    </span>
  );
}

/** Live lead feed plus a weekly trend. */
function GrowFeed({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <LiveHead label={ui.growthLabel} t={t} />
      <span className="tw:mt-2.5 tw:grid tw:gap-2">
        {ui.leads.map(([type, from], i) => (
          <LeadRow
            key={type}
            type={type}
            from={from}
            when={WHEN[i]}
            t={t}
            at={i * 0.18}
          />
        ))}
      </span>
      <span className="tw:mt-auto tw:flex tw:items-end tw:gap-2 tw:px-1 tw:pt-3">
        <span className="tw:mb-0.5 tw:text-[11px] tw:leading-tight tw:font-semibold tw:text-(--muted)">
          Leads
          <br />
          by week
        </span>
        <span className="tw:flex tw:h-[52px] tw:flex-1 tw:items-end tw:gap-1.5">
          {WEEKS.map((h, i) => (
            <span
              key={i}
              className="lseo-grow tw:flex-1 tw:rounded-t-[5px]"
              style={{
                height: `${h}%`,
                background: t.solid,
                opacity: 0.35 + (i / WEEKS.length) * 0.65,
                ...d(0.3 + i * 0.05),
              }}
            />
          ))}
        </span>
      </span>
    </div>
  );
}

/** Calls trending up, with the latest calls underneath. */
function GrowCalls({ ui, t }: View) {
  const line =
    "M4 112 C 40 106, 60 98, 92 92 S 150 84, 180 70 S 240 52, 270 40 S 320 16, 356 10";
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <div
        className={`tw:rounded-[18px] tw:bg-white tw:px-4 tw:pt-3.5 tw:pb-2 ${LIFT}`}
      >
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
          <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold">
            <FiTrendingUp style={{ color: t.solid }} /> {ui.growthLabel}
          </span>
          <span
            className="tw:mr-16 tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold"
            style={{ background: t.soft, color: t.softText }}
          >
            <FiTrendingUp /> Rising
          </span>
        </span>
        <svg
          viewBox="0 0 360 120"
          className="tw:mt-1 tw:block tw:h-[118px] tw:w-full"
        >
          <defs>
            <linearGradient id="gh-calls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={t.solid} stopOpacity="0.22" />
              <stop offset="100%" stopColor={t.solid} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 60, 90].map((y) => (
            <path key={y} d={`M0 ${y} H360`} stroke="#eef1f6" strokeWidth="1" />
          ))}
          <path d={`${line} L356 120 L4 120 Z`} fill="url(#gh-calls)" />
          <path
            d={line}
            fill="none"
            stroke={t.solid}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="lseo-drawonce"
          />
          <circle
            cx="356"
            cy="10"
            r="5"
            fill={t.solid}
            className="lseo-badge"
            style={d(0.9)}
          />
        </svg>
      </div>
      <span className="tw:mt-2.5 tw:grid tw:gap-2">
        {ui.leads.slice(0, 2).map(([type, from], i) => (
          <LeadRow
            key={type}
            type={type}
            from={from}
            when={WHEN[i]}
            t={t}
            at={0.35 + i * 0.15}
          />
        ))}
      </span>
    </div>
  );
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// Booked slots per day (4 slots each): 1 = booked, 2 = labelled booking.
const SLOTS = [
  [2, 1, 0, 1],
  [1, 1, 1, 0],
  [1, 2, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 2, 1],
];

/** A week of bookings filling up from search. */
function GrowCalendar({ ui, t }: View) {
  let label = 0;
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <div
        className={`tw:flex tw:flex-1 tw:flex-col tw:rounded-[18px] tw:bg-white tw:p-3.5 ${LIFT}`}
      >
        <span className="tw:flex tw:items-center tw:gap-2 tw:pr-16 tw:text-[12.5px] tw:font-semibold">
          <FiCalendar style={{ color: t.solid }} /> {ui.growthLabel}
        </span>
        <div className="tw:mt-3 tw:grid tw:flex-1 tw:grid-cols-5 tw:gap-1.5">
          {DAYS.map((day, di) => (
            <div key={day} className="tw:flex tw:flex-col tw:gap-1.5">
              <span className="tw:text-center tw:text-[11px] tw:font-semibold tw:text-(--muted)">
                {day}
              </span>
              {SLOTS[di].map((s, si) => {
                const lead = s === 2 ? ui.leads[label++] : null;
                return (
                  <span
                    key={si}
                    className={
                      s
                        ? "lseo-badge tw:flex tw:min-h-[44px] tw:flex-1 tw:items-end tw:overflow-hidden tw:rounded-[10px] tw:p-1.5"
                        : "tw:flex tw:min-h-[44px] tw:flex-1 tw:rounded-[10px] tw:border tw:border-dashed tw:border-(--line)"
                    }
                    style={
                      s
                        ? {
                            background: s === 2 ? t.solid : t.soft,
                            color: s === 2 ? t.onSolid : t.softText,
                            ...d(0.05 * (di * 4 + si)),
                          }
                        : undefined
                    }
                  >
                    {lead ? (
                      <span className="tw:line-clamp-2 tw:text-[9.5px]/[1.2] tw:font-semibold tw:max-bssm:hidden">
                        {lead[0]}
                      </span>
                    ) : null}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:px-1 tw:text-[11.5px] tw:text-(--muted)">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <span
            className="tw:size-2.5 tw:rounded-[3px]"
            style={{ background: t.solid }}
          />
          Booked from search
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <span className="tw:size-2.5 tw:rounded-[3px] tw:border tw:border-dashed tw:border-(--muted)" />
          Open
        </span>
      </span>
    </div>
  );
}

/** Jobs moving from new to won. */
function GrowPipeline({ ui, t }: View) {
  const cols: [string, number][] = [
    ["New", 2],
    ["Quoted", 1],
    ["Won", 0],
  ];
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <LiveHead label={ui.growthLabel} t={t} />
      <div className="tw:mt-3 tw:grid tw:flex-1 tw:grid-cols-3 tw:gap-2">
        {cols.map(([name, li], ci) => {
          const [job, from] = ui.leads[li];
          const won = ci === 2;
          return (
            <div
              key={name}
              className="tw:flex tw:flex-col tw:gap-2 tw:rounded-[16px] tw:bg-white/70 tw:p-2"
            >
              <span
                className="tw:w-fit tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11px] tw:font-semibold"
                style={
                  won
                    ? { background: t.solid, color: t.onSolid }
                    : { background: "#ffffff", color: t.softText }
                }
              >
                {name}
              </span>
              <span
                className="lseo-rise tw:block tw:rounded-[12px] tw:bg-white tw:p-2.5 tw:[box-shadow:0_10px_24px_-18px_rgba(12,21,38,0.5)]"
                style={d(0.15 + ci * 0.2)}
              >
                <b className="tw:line-clamp-2 tw:text-[12px]/[1.3] tw:font-semibold">
                  {job}
                </b>
                <span className="tw:mt-1 tw:block tw:truncate tw:text-[10.5px] tw:text-(--muted)">
                  from {from}
                </span>
                {won ? (
                  <span
                    className="tw:mt-1.5 tw:flex tw:w-fit tw:items-center tw:gap-1 tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold"
                    style={{ background: t.soft, color: t.softText }}
                  >
                    <FiCheck className="tw:size-3 tw:[stroke-width:3]" /> Booked
                  </span>
                ) : null}
              </span>
              {ci < 2 ? (
                <span className="tw:block tw:h-10 tw:rounded-[12px] tw:border tw:border-dashed tw:border-(--line)" />
              ) : (
                <span
                  className="lseo-rise tw:block tw:h-10 tw:rounded-[12px]"
                  style={{ background: t.soft, ...d(0.6) }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
