"use client";

/* AI SEO hero (owner, 18 Nov 2026: "change the hero section ui component
   … something relevant showing this service … nice and clean").

   Same shell, size and timing as GrowthHero, with three AI search tabs
   instead of Maps / AI / growth:
   1. ChatGPT answer that names the business first (generative engine
      optimization),
   2. Google AI Overview that quotes the business page and cites it as a
      source (answer engine optimization),
   3. Monthly check across AI engines with a status per engine.
   Example only: no figures, no real company names. Tabs step on their own
   (paused on hover/focus, stopped after a click, off for reduced motion). */

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCheck,
  FiCheckCircle,
  FiMessageSquare,
  FiSearch,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import {
  SiClaude,
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";
import type { AiSeoHero as Data } from "../types";
import "../localseo.css";

type Tones = [BrandTone, BrandTone, BrandTone, BrandTone];
type View = { ui: Data; t: BrandTone };

/* Each tab wears the colours of what it shows (owner, 18 Nov 2026: "change
   the color of ui component show it related"), not the page palette:
   ChatGPT green, Google blue, and a neutral slate for the engine check,
   whose bars carry each engine's own colour. */
const TAB_TONES: [BrandTone, BrandTone, BrandTone] = [
  { solid: "#10a37f", onSolid: "#ffffff", soft: "#e6f6f1", softText: "#0b7a5e" },
  { solid: "#1a73e8", onSolid: "#ffffff", soft: "#e8f0fe", softText: "#1557b0" },
  { solid: "#334155", onSolid: "#ffffff", soft: "#eef2f7", softText: "#1e293b" },
];

const STEP_MS = 4200;
const TAB_ICONS: IconType[] = [FiMessageSquare, HiSparkles, FiActivity];
const LIFT = "tw:[box-shadow:0_16px_34px_-20px_rgba(12,21,38,0.5)]";
const d = (s: number) => ({ animationDelay: `${s}s` });

/** Grey placeholder line standing in for text that isn't the point. */
function Line({ w, className }: { w: string; className?: string }) {
  return (
    <span
      className={`tw:block tw:h-2 tw:rounded-full tw:bg-[#e3e8f0] ${className ?? ""}`}
      style={{ width: w }}
    />
  );
}

/* ================================================================ card */

/** `tones` (the page palette) is accepted like GrowthHero's but not used:
    the tabs use TAB_TONES. */
export function AiSeoHero({ ui }: { ui: Data; tones: Tones }) {
  const [a, b, c] = TAB_TONES;
  const tabTone = TAB_TONES;
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
        aria-label="How Zonic gets a business named in AI search"
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
              id={`ah-tab-${i}`}
              aria-selected={on}
              aria-controls="ah-panel"
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
                  className="tw:block tw:truncate tw:text-[14px] tw:font-semibold tw:max-bssm:text-[13px]"
                  style={{ color: on ? tt.softText : "var(--ink)" }}
                >
                  {tb.badge}
                </b>
              </span>
              {on && auto ? (
                <span
                  key={`p${active}`}
                  className="lseo-progress tw:absolute tw:bottom-0 tw:left-3 tw:h-[3px] tw:rounded-full"
                  style={{ background: tt.solid, animationDuration: `${STEP_MS}ms` }}
                  aria-hidden="true"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div id="ah-panel" role="tabpanel" aria-labelledby={`ah-tab-${active}`} className="tw:mt-3">
        <div
          key={active}
          className="lseo-fade tw:relative tw:h-[340px] tw:overflow-hidden tw:rounded-[20px] tw:max-bssm:h-[372px]"
          style={{ background: t.soft }}
          aria-hidden="true"
        >
          {active === 0 ? (
            <ChatTab ui={ui} t={a} />
          ) : active === 1 ? (
            <OverviewTab ui={ui} t={b} />
          ) : (
            <TrackTab ui={ui} t={c} />
          )}
          <span className="tw:absolute tw:top-3 tw:right-3 tw:rounded-full tw:bg-white/85 tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
            Example
          </span>
        </div>
        <div key={`c${active}`} className="lseo-fade tw:px-1 tw:pt-3.5">
          <b className="tw:block tw:text-[16px]/[1.3] tw:font-semibold">{tab.title}</b>
          <p className="tw:mt-1 tw:text-[13.5px]/[1.5] tw:text-(--text)">{tab.text}</p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================ 1 ChatGPT */

/** ChatGPT answer listing the business first, with the sources it read. */
function ChatTab({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:gap-2.5 tw:p-3">
      <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold">
        <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-black tw:text-white">
          <SiOpenai className="tw:size-3.5" />
        </span>
        ChatGPT
      </span>
      <span className="tw:ml-auto tw:max-w-[86%] tw:rounded-[16px] tw:rounded-br-[4px] tw:bg-white tw:px-3.5 tw:py-2 tw:text-[12.5px]/[1.45] tw:font-medium tw:[box-shadow:0_8px_20px_-14px_rgba(12,21,38,0.45)]">
        {ui.prompt}
      </span>
      <span className={`lseo-rise tw:block tw:rounded-[16px] tw:bg-white tw:p-3.5 ${LIFT}`}>
        <span className="tw:block tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
          Recommended options
        </span>
        <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:px-2 tw:py-1.5" style={{ background: t.soft }}>
          <span
            className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            1
          </span>
          <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[14px] tw:font-semibold">
            {ui.business}
          </b>
          <span
            className="lseo-badge tw:flex tw:flex-none tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
            style={{ background: t.solid, color: t.onSolid, ...d(0.35) }}
          >
            <FiCheckCircle className="tw:size-3" /> Top pick
          </span>
        </span>
        {["44%", "36%"].map((w, i) => (
          <span key={w} className="tw:mt-1.5 tw:flex tw:items-center tw:gap-2.5 tw:px-2 tw:py-1">
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[12px] tw:font-bold tw:text-(--muted)">
              {i + 2}
            </span>
            <Line w={w} />
          </span>
        ))}
      </span>
      <span className="tw:mt-auto tw:block">
        <span className="tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">Sources ChatGPT read</span>
        <span className="tw:mt-1.5 tw:flex tw:flex-wrap tw:gap-1.5">
          {[ui.domain, "Business profile", "Customer reviews"].map((s, i) => (
            <span
              key={s}
              className="lseo-badge tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold"
              style={{
                ...(i === 0 ? { background: t.solid, color: t.onSolid } : { background: "#ffffff" }),
                ...d(0.45 + i * 0.12),
              }}
            >
              {s}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}

/* ======================================================= 2 AI Overview */

/** Google AI Overview quoting the business page, with the page as source #1. */
function OverviewTab({ ui, t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <span className="tw:flex tw:max-w-[78%] tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-medium tw:[box-shadow:0_8px_20px_-12px_rgba(12,21,38,0.4)]">
        <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
        <span className="tw:truncate">{ui.query}</span>
        <FiSearch className="tw:ml-auto tw:size-3.5 tw:flex-none tw:text-(--muted)" />
      </span>
      <div className={`lseo-rise tw:mt-3 tw:grid tw:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] tw:gap-3 tw:rounded-[18px] tw:bg-white tw:p-3.5 tw:max-bssm:grid-cols-1 ${LIFT}`}>
        <div className="tw:min-w-0">
          <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[12.5px] tw:font-semibold">
            <HiSparkles style={{ color: t.solid }} /> AI Overview
          </span>
          <p className="tw:mt-2 tw:text-[12.5px]/[1.55] tw:text-(--text)">
            <mark
              className="lseo-mark tw:rounded-[6px] tw:px-1 tw:text-(--ink)"
              style={{ background: t.soft }}
            >
              {ui.quote}
            </mark>
          </p>
          <span className="tw:mt-2.5 tw:grid tw:gap-1.5">
            <Line w="92%" />
            <Line w="76%" />
            <Line w="84%" className="tw:max-bssm:hidden" />
          </span>
        </div>
        <div className="tw:grid tw:content-start tw:gap-1.5">
          <span className="tw:text-[11px] tw:font-semibold tw:text-(--muted)">Sources</span>
          <span
            className="lseo-slide tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-2.5 tw:py-2"
            style={{ background: t.soft, ...d(0.3) }}
          >
            <span
              className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-bold"
              style={{ background: t.solid, color: t.onSolid }}
            >
              1
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[12px] tw:font-semibold">{ui.domain}</b>
              <span className="tw:block tw:truncate tw:text-[10.5px]" style={{ color: t.softText }}>
                Answer quoted
              </span>
            </span>
          </span>
          {["70%", "58%"].map((w) => (
            <span key={w} className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-2.5 tw:py-2.5 tw:max-bssm:hidden">
              <span className="tw:size-6 tw:flex-none tw:rounded-full tw:bg-white" />
              <Line w={w} />
            </span>
          ))}
        </div>
      </div>
      <span className="tw:mt-auto tw:flex tw:flex-wrap tw:gap-1.5">
        {["Cited in AI Overviews", "Cited in AI Mode"].map((s, i) => (
          <span
            key={s}
            className="lseo-badge tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[11.5px] tw:font-semibold"
            style={d(0.45 + i * 0.15)}
          >
            <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" style={{ color: t.softText }} />
            {s}
          </span>
        ))}
      </span>
    </div>
  );
}

/* ====================================================== 3 Every engine */

/** Each engine in its own brand colour: `color` for the logo and bar,
    `soft`/`text` for its status pill. */
const ENGINES: {
  name: string;
  Icon: IconType;
  color: string;
  soft: string;
  text: string;
  status: string;
  w: string;
}[] = [
  { name: "ChatGPT", Icon: SiOpenai, color: "#10a37f", soft: "#e6f6f1", text: "#0b7a5e", status: "Recommended", w: "92%" },
  { name: "AI Overviews", Icon: SiGoogle, color: "#4285f4", soft: "#e8f0fe", text: "#1557b0", status: "Cited", w: "86%" },
  { name: "Gemini", Icon: SiGooglegemini, color: "#5b6cf0", soft: "#ecedfd", text: "#4352d6", status: "Recommended", w: "80%" },
  { name: "Perplexity", Icon: SiPerplexity, color: "#20808d", soft: "#e4f3f4", text: "#18656f", status: "Cited", w: "74%" },
  { name: "Claude", Icon: SiClaude, color: "#d97757", soft: "#fbece6", text: "#a9502f", status: "Mentioned", w: "66%" },
  { name: "Copilot", Icon: HiSparkles, color: "#0f6cbd", soft: "#e5f0fa", text: "#0b5394", status: "Mentioned", w: "60%" },
];

/** Monthly AI visibility check: each engine's status for the buyer prompts. */
function TrackTab({ t }: View) {
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:p-3">
      <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:font-semibold">
        <FiActivity style={{ color: t.solid }} />
        AI visibility check
        <span className="tw:rounded-full tw:bg-white tw:px-2.5 tw:py-0.5 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
          This month
        </span>
      </span>
      <div className={`tw:mt-3 tw:grid tw:flex-1 tw:content-between tw:rounded-[18px] tw:bg-white tw:px-3.5 tw:py-3 ${LIFT}`}>
        {ENGINES.map((e, i) => (
          <span
            key={e.name}
            className="lseo-slide tw:grid tw:grid-cols-[22px_minmax(0,0.9fr)_minmax(0,1fr)_92px] tw:items-center tw:gap-2.5 tw:max-bssm:grid-cols-[20px_minmax(0,1fr)_minmax(0,0.7fr)_84px] tw:max-bssm:gap-2"
            style={d(0.1 + i * 0.1)}
          >
            <e.Icon className="tw:size-[18px]" style={{ color: e.color }} />
            <b className="tw:truncate tw:text-[12.5px] tw:font-semibold">{e.name}</b>
            <span className="tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <span
                className="lseo-fillx tw:block tw:h-full tw:rounded-full"
                style={{ width: e.w, background: e.color, ...d(0.25 + i * 0.1) }}
              />
            </span>
            <span
              className="tw:justify-self-start tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold"
              style={
                e.status === "Mentioned"
                  ? { background: "var(--panel)", color: "var(--muted)" }
                  : { background: e.soft, color: e.text }
              }
            >
              {e.status}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
