"use client";

import { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { DemoFrame } from "./demos";
import { useInView, useReducedMotion } from "./hooks";
import { Rich } from "./Rich";

/* "3 steps" band, after the reference page's Shopify steps: a numbered
   list on the left whose active step carries a progress line, and a demo
   panel on the right that changes with it. Steps advance every 7 s while
   on screen; clicking a step jumps to it. */

const STEP_MS = 7000;
/* One phone height for all three panels so the FAQ below doesn't jump
   when the step changes. */
const PANEL_H = "tw:max-bssm:min-h-[476px]";

type Step = { title: string; body: string };

export function Steps({ items }: { items: Step[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % items.length);
      setRun((r) => r + 1);
    }, STEP_MS);
    return () => window.clearTimeout(id);
  }, [inView, reduced, active, run, items.length]);

  const pick = (i: number) => {
    setActive(i);
    setRun((r) => r + 1);
  };

  return (
    <div
      ref={ref}
      className="tw:grid tw:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] tw:items-center tw:gap-[clamp(28px,4vw,56px)] tw:max-bslg:grid-cols-1"
    >
      <ol className="tw:grid">
        {items.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.title}
              className="tw:relative tw:grid tw:grid-cols-[auto_1fr] tw:gap-x-4 tw:border-b tw:border-(--hair) tw:py-6"
            >
              <span
                className={cx(
                  "tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-medium tw:transition",
                  on ? "tw:bg-white tw:text-black" : "tw:bg-white/20 tw:text-white/80",
                )}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3
                className={cx(
                  "tw:text-[19px] tw:leading-[1.35] tw:font-medium tw:transition",
                  on ? "tw:text-white" : "tw:text-white/60",
                )}
              >
                {/* Stretched button: the whole step is clickable. */}
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-current={on ? "step" : undefined}
                  className="tw:cursor-pointer tw:border-0 tw:bg-transparent tw:p-0 tw:text-left tw:[color:inherit] tw:[font:inherit] tw:after:absolute tw:after:inset-0 tw:after:content-['']"
                >
                  <span className="tw:sr-only">Step {i + 1}: </span>
                  {s.title}
                </button>
              </h3>
              <p
                className={cx(
                  "tw:col-start-2 tw:mt-2 tw:text-[15.5px]/[1.6] tw:transition",
                  on ? "tw:text-white/80" : "tw:text-white/45",
                )}
              >
                <Rich
                  text={s.body}
                  linkClass="tw:relative tw:z-10 tw:underline tw:decoration-1 tw:underline-offset-[3px] tw:hover:text-white"
                />
              </p>
              {on ? (
                <span
                  key={run}
                  className="cg-grow tw:absolute tw:bottom-[-1px] tw:left-0 tw:h-0.5 tw:w-full tw:bg-white"
                  style={{
                    animationDuration: `${STEP_MS}ms`,
                    animationTimingFunction: "linear",
                  }}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
      <div key={active} className="cg-in">
        {active === 0 ? <CheckUi /> : active === 1 ? <ProfileUi /> : <ReportUi />}
      </div>
    </div>
  );
}

/* Step 1: visibility check across real customer prompts. */
function CheckUi() {
  const rows = [
    { q: "best plumber near me", named: true },
    { q: "emergency plumber open now", named: false },
    { q: "water heater repair near me", named: true },
    { q: "who installs tankless water heaters", named: false },
  ];
  return (
    <DemoFrame className={PANEL_H} label="Example: a ChatGPT visibility check across customer questions">
      <b className="tw:text-[15px] tw:font-medium">ChatGPT visibility check</b>
      <p className="tw:mt-1 tw:text-[12.5px] tw:text-(--muted)">
        Questions your customers ask, and whether ChatGPT names you
      </p>
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {rows.map((r, i) => (
          <li
            key={r.q}
            className="cg-in tw:flex tw:items-center tw:justify-between tw:gap-3 tw:rounded-[12px] tw:px-3.5 tw:py-2.5 tw:text-[13px] tw:ring-1 tw:ring-(--line)"
            style={{ animationDelay: `${0.3 + i * 0.45}s` }}
          >
            <span className="tw:min-w-0 tw:truncate">“{r.q}”</span>
            <span
              className={cx(
                "cg-pop tw:inline-flex tw:flex-none tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11.5px]",
                r.named
                  ? "tw:bg-(--green-soft) tw:text-[#1e7a3a]"
                  : "tw:bg-[#fdecea] tw:text-[#b42318]",
              )}
              style={{ animationDelay: `${0.7 + i * 0.45}s` }}
            >
              {r.named ? <FiCheck aria-hidden="true" /> : <FiX aria-hidden="true" />}
              {r.named ? "Named" : "Not named"}
            </span>
          </li>
        ))}
      </ul>
      <div
        className="cg-in tw:mt-4 tw:rounded-[12px] tw:bg-(--panel) tw:p-3 tw:text-[12.5px]"
        style={{ animationDelay: "2.6s" }}
      >
        <span className="tw:text-(--muted)">Sources ChatGPT trusted</span>
        <span className="tw:mt-1.5 tw:flex tw:flex-wrap tw:gap-1.5">
          {["Your website", "A review site", "A local directory"].map((s) => (
            <span key={s} className="tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-(--ink-2)">
              {s}
            </span>
          ))}
        </span>
      </div>
    </DemoFrame>
  );
}

/* Step 2: profile completeness ring and checklist. */
function ProfileUi() {
  const items = [
    "Claim approved",
    "ID check done by the owner",
    "Logo and cover photo",
    "Description and categories",
    "Website and policies",
  ];
  return (
    <DemoFrame className={PANEL_H} label="Example: a ChatGPT business profile completed and published">
      <div className="tw:flex tw:items-center tw:gap-5 tw:max-bssm:flex-col tw:max-bssm:items-start">
        <div className="tw:relative tw:size-28 tw:flex-none">
          <svg viewBox="0 0 100 100" className="tw:size-full tw:-rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f4f9" strokeWidth="9" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#1d8bf1"
              strokeWidth="9"
              strokeLinecap="round"
              pathLength={1}
              className="cg-draw"
              style={{ animationDuration: "2.4s" }}
            />
          </svg>
          <span
            className="cg-pop tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:text-(--check)"
            style={{ animationDelay: "2.6s" }}
          >
            <MdVerified className="tw:size-11" aria-hidden="true" />
          </span>
        </div>
        <div className="tw:min-w-0 tw:flex-1">
          <b className="tw:text-[15px] tw:font-medium">Profile ready to publish</b>
          <ul className="tw:mt-3 tw:grid tw:gap-2">
            {items.map((label, i) => (
              <li
                key={label}
                className="cg-in tw:flex tw:items-center tw:gap-2.5 tw:text-[13px]"
                style={{ animationDelay: `${0.3 + i * 0.4}s` }}
              >
                <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[11px] tw:text-white">
                  <FiCheck className="tw:[stroke-width:3.5]" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p
        className="cg-in tw:mt-5 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--blue-soft) tw:px-3.5 tw:py-2.5 tw:text-[12.5px] tw:text-(--blue-dark)"
        style={{ animationDelay: "2.8s" }}
      >
        <MdVerified aria-hidden="true" /> Published with the blue check
      </p>
    </DemoFrame>
  );
}

/* Step 3: monthly report with a rising mentions line and work done. */
function ReportUi() {
  const tasks = [
    "Listings corrected",
    "Review requests sent",
    "Answer page published",
    "Insights reviewed together",
  ];
  return (
    <DemoFrame className={PANEL_H} label="Example: a monthly ChatGPT visibility report with mentions trending up">
      <div className="tw:flex tw:items-center tw:justify-between">
        <b className="tw:text-[15px] tw:font-medium">Monthly ChatGPT report</b>
        <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:text-(--muted)">
          This month
        </span>
      </div>
      <div className="tw:mt-4 tw:rounded-[12px] tw:p-3 tw:ring-1 tw:ring-(--line)">
        <span className="tw:text-[12px] tw:text-(--muted)">Mentions in ChatGPT</span>
        <svg viewBox="0 0 300 90" className="tw:mt-2 tw:h-24 tw:w-full" aria-hidden="true">
          <defs>
            <linearGradient id="cg-area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1d8bf1" stopOpacity="0.22" />
              <stop offset="1" stopColor="#1d8bf1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 78 C40 74 60 70 90 64 S150 58 180 44 S240 26 300 10 L300 90 L0 90 Z"
            fill="url(#cg-area)"
            className="cg-in"
            style={{ animationDelay: "1.2s" }}
          />
          <path
            d="M0 78 C40 74 60 70 90 64 S150 58 180 44 S240 26 300 10"
            fill="none"
            stroke="#1d8bf1"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            className="cg-draw"
          />
        </svg>
      </div>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-2 tw:gap-2 tw:max-bssm:grid-cols-1">
        {tasks.map((label, i) => (
          <li
            key={label}
            className="cg-in tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12.5px]"
            style={{ animationDelay: `${0.4 + i * 0.3}s` }}
          >
            <FiCheck className="tw:text-(--green) tw:[stroke-width:3]" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </DemoFrame>
  );
}
