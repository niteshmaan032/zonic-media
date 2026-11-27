"use client";

/* GEO hero card (26 Nov 2026, redesigned the same day: owner asked for a
   more professional card). One buyer question goes to all five AI engines
   at once; each row "writes" its answer in turn, names the business and
   shows whether it was named or also cited. The tabs switch trade and
   auto-advance on a progress line; hovering pauses it, a click stops it,
   and reduced-motion visitors get the finished first answer set.

   Example only: no figures, no real company names. */

import { type CSSProperties, useEffect, useState } from "react";
import { FiArrowUp, FiCheck, FiGlobe, FiLink, FiMapPin, FiSearch, FiStar } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { HERO_UI } from "./content";
import { ENGINE_LIST } from "./engines";

const SOURCE_ICONS = [FiGlobe, FiMapPin, FiStar];

const at = (s: number) => ({ ["--d" as string]: `${s}s` }) as CSSProperties;

/** Answer line with the business name picked out. */
function Answer({ text }: { text: string }) {
  const [lead, ...rest] = text.split(HERO_UI.business);
  return (
    <>
      {lead}
      <mark className="tw:rounded-md tw:bg-(--blue-soft) tw:px-1 tw:font-semibold tw:whitespace-nowrap tw:text-(--ink)">
        {HERO_UI.business}
      </mark>
      {rest.join(HERO_UI.business)}
    </>
  );
}

export function GeoHero() {
  const [run, setRun] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const auto = !stopped && !reduced;
  const current = HERO_UI.runs[run];
  const last = current.answers.length - 1;

  return (
    <figure className={`geo-hero tw:m-0 ${reduced ? "geo-still" : ""}`}>
      <div className="tw:rounded-[28px] tw:bg-white tw:p-5 tw:ring-1 tw:ring-(--line) tw:shadow-[0_32px_64px_-36px_rgba(12,21,38,0.4)] tw:max-bssm:rounded-3xl tw:max-bssm:p-4">
        {/* Header: what the card is, and the trade tabs */}
        <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-x-4 tw:gap-y-3 tw:max-bssm:flex-col tw:max-bssm:items-stretch">
          <div className="tw:flex tw:items-center tw:gap-3">
            <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-xl tw:bg-(--ink) tw:text-white" aria-hidden="true">
              <HiSparkles className="tw:size-5" />
            </span>
            <span className="tw:leading-tight">
              <b className="tw:block tw:text-[15.5px] tw:font-semibold tw:text-(--ink)">{HERO_UI.title}</b>
              <span className="tw:block tw:text-[13px] tw:text-(--muted)">{HERO_UI.sub}</span>
            </span>
          </div>
          <div
            className="tw:flex tw:gap-0.5 tw:rounded-full tw:bg-(--panel) tw:p-1 tw:max-bssm:grid tw:max-bssm:grid-cols-4"
            role="group"
            aria-label="Example trade"
          >
            {HERO_UI.runs.map((r, i) => {
              const on = i === run;
              return (
                <button
                  key={r.trade}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setRun(i);
                    setStopped(true);
                  }}
                  className={`tw:relative tw:h-8 tw:overflow-hidden tw:rounded-full tw:border-0 tw:px-2.5 tw:text-[13px] tw:font-medium tw:whitespace-nowrap tw:transition tw:duration-200 tw:max-bssm:px-1 ${
                    on
                      ? "tw:bg-white tw:text-(--ink) tw:shadow-[0_1px_3px_rgba(12,21,38,0.12)]"
                      : "tw:bg-transparent tw:text-(--muted) tw:hover:text-(--ink)"
                  }`}
                >
                  {r.trade}
                  {auto && on && (
                    <span
                      key={run}
                      className="geo-progress"
                      aria-hidden="true"
                      onAnimationEnd={() => setRun((n) => (n + 1) % HERO_UI.runs.length)}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* The buyer's question; the key restarts the sequence each run */}
        <div key={`q${run}`} className="geo-pop tw:mt-4 tw:flex tw:items-center tw:gap-3 tw:rounded-2xl tw:bg-(--panel) tw:py-2 tw:pr-2 tw:pl-4">
          <FiSearch aria-hidden="true" className="tw:size-4 tw:flex-none tw:text-(--muted)" />
          <p className="tw:min-w-0 tw:flex-1 tw:text-[15px]/[1.4] tw:font-medium tw:text-(--ink)">{current.prompt}</p>
          <span className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-white" aria-hidden="true">
            <FiArrowUp className="tw:size-4" />
          </span>
        </div>

        {/* One answer per engine */}
        <ul key={`a${run}`} className="tw:mt-3 tw:divide-y tw:divide-(--line) tw:rounded-2xl tw:ring-1 tw:ring-(--line)">
          {ENGINE_LIST.map((e, i) => {
            const Icon = e.icon;
            const a = current.answers[i];
            return (
              <li
                key={e.name}
                className="tw:grid tw:grid-cols-[32px_minmax(0,1fr)] tw:items-center tw:gap-3 tw:px-3.5 tw:py-2.5"
                style={at(0.5 + i * 0.38)}
              >
                <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full" style={{ background: e.soft, color: e.color }} aria-hidden="true">
                  <Icon className="tw:size-4" />
                </span>
                <span className="tw:min-w-0">
                  <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
                    <span className="tw:text-[12.5px] tw:font-medium tw:text-(--muted)">{e.name}</span>
                    <span
                      className={`geo-pill tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11.5px] tw:font-semibold ${
                        a.cited ? "tw:bg-(--blue-soft) tw:text-(--blue-dark)" : "tw:bg-(--green-soft) tw:text-[#1f7a3a]"
                      }`}
                    >
                      {a.cited ? (
                        <FiLink aria-hidden="true" className="tw:size-3 tw:[stroke-width:3]" />
                      ) : (
                        <FiCheck aria-hidden="true" className="tw:size-3 tw:[stroke-width:3.5]" />
                      )}
                      {a.cited ? "Cited" : "Named"}
                    </span>
                  </span>
                  <span className="tw:relative tw:mt-0.5 tw:block">
                    <span className="geo-skel" aria-hidden="true" />
                    <span className="geo-type tw:block tw:text-[14.5px]/[1.45] tw:text-(--ink-2)">
                      <Answer text={a.text} />
                    </span>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Where the answers came from */}
        <div key={`s${run}`} className="tw:mt-4 tw:flex tw:flex-wrap tw:items-center tw:gap-2">
          <span className="tw:mr-1 tw:text-[12.5px] tw:font-medium tw:text-(--muted)">Cited from</span>
          {HERO_UI.sources.map((s, i) => {
            const Icon = SOURCE_ICONS[i];
            return (
              <span
                key={s}
                className="geo-chip tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[12.5px] tw:font-medium tw:text-(--ink-2) tw:ring-1 tw:ring-(--line)"
                style={{ animationDelay: `${0.9 + last * 0.38 + i * 0.15}s` }}
              >
                <Icon aria-hidden="true" className="tw:size-3 tw:text-(--blue)" />
                {s}
              </span>
            );
          })}
        </div>
      </div>
      <figcaption className="tw:mt-3 tw:text-center tw:text-[14.5px] tw:text-(--muted)">
        {HERO_UI.caption}
      </figcaption>
    </figure>
  );
}
