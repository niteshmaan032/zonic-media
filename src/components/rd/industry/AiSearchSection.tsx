import type { CSSProperties } from "react";
import { FiCheck } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import {
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";

import {
  CenterHead,
  Pill,
  Section,
  Wrap,
} from "@/components/rd/dfw-kit/primitives";
import { Icon } from "./icons";
import type { AiSearchCopy, Palette } from "./types";
import { LINKS, RichText } from "./ui";
import "./aisearch.css";

/* ---------------------------------------------------------------------------
   AI SEARCH SECTION — AEO + GEO (5 Nov 2026). Owner: "people want to rank in
   ai (aeo and geo) these type of section should be must". Left, an answer
   board: the four assistants take turns (ChatGPT, Gemini, Perplexity,
   Google AI Overviews), the customer's question, a short typing pause and
   the answer naming "Your Company" with the sources it leans on. Right,
   four tactic cards tagged AEO (answer engine optimization: being the
   quoted answer) or GEO (generative engine optimization: being the
   recommended business). Example copy only; no figures.
--------------------------------------------------------------------------- */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

const ENGINES = [
  { name: "ChatGPT", icon: <SiOpenai />, color: "#0c1526" },
  { name: "Gemini", icon: <SiGooglegemini />, color: "#1a73e8" },
  { name: "Perplexity", icon: <SiPerplexity />, color: "#1f8a8a" },
  { name: "AI Overviews", icon: <SiGoogle />, color: "#4285f4" },
];

const STATUS = ["Recommended", "Cited", "Recommended", "Mentioned"];

const SOURCES = [
  "yourcompany.com",
  "Google reviews",
  "Business Profile",
  "Local directories",
];

export function AiSearchSection({
  id,
  p,
  c,
  ctaHref,
  tone = "grey",
}: {
  /** Heading id prefix, e.g. "seo". */
  id: string;
  p: Palette;
  c: AiSearchCopy;
  ctaHref: string;
  tone?: "grey" | "white";
}) {
  const h = `${id}-aisearch-h`;
  const card = tone === "white" ? "tw:bg-(--panel)" : "tw:bg-white";
  return (
    <Section labelledBy={h} tone={tone}>
      <Wrap>
        <CenterHead id={h} title={c.title}>
          <span className={LINKS}>
            <RichText value={c.lead} />
          </span>
        </CenterHead>

        <div className="tw:grid tw:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] tw:gap-6 tw:max-bslg:grid-cols-1">
          {/* answer board */}
          <div
            className={`${card} tw:flex tw:flex-col tw:rounded-(--r-xl) tw:p-7 tw:max-bssm:px-4 tw:max-bssm:py-6`}
            aria-hidden="true"
          >
            <div className="tw:grid tw:grid-cols-4 tw:gap-1.5 tw:rounded-full tw:bg-white tw:p-1.5 tw:ring-1 tw:ring-(--line) tw:max-bssm:grid-cols-2 tw:max-bssm:rounded-[20px]">
              {ENGINES.map((e, i) => (
                <span
                  key={e.name}
                  className="ais-tab tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:px-2 tw:py-2 tw:text-[12.5px] tw:font-semibold tw:whitespace-nowrap"
                  style={{
                    ...delay(i * 2.5),
                    ["--ais-on" as string]: p.aSoft,
                    ["--ais-ink" as string]: p.aText,
                  }}
                >
                  <span style={{ color: e.color }}>{e.icon}</span> {e.name}
                </span>
              ))}
            </div>

            <div className="tw:mt-5 tw:flex tw:justify-end">
              <span className="tw:max-w-[88%] tw:rounded-[18px] tw:rounded-br-[6px] tw:bg-(--ink) tw:px-4 tw:py-3 tw:text-[14px]/[1.5] tw:text-white">
                {c.prompt}
              </span>
            </div>

            <div className="tw:mt-4 tw:flex tw:gap-3">
              <span
                className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[16px] tw:text-white"
                style={{ background: p.b }}
              >
                <HiSparkles />
              </span>
              <div className="tw:relative tw:min-w-0 tw:flex-1">
                <span className="ais-dots tw:absolute tw:top-2 tw:left-0 tw:flex tw:gap-1">
                  {[0, 1, 2].map((d) => (
                    <i
                      key={d}
                      className="ais-dot tw:block tw:size-2 tw:rounded-full tw:bg-(--muted)"
                      style={delay(d * 0.15)}
                    />
                  ))}
                </span>
                <div className="ais-answer tw:rounded-[18px] tw:rounded-tl-[6px] tw:bg-white tw:p-4 tw:text-[14px]/[1.55] tw:text-(--ink) tw:ring-1 tw:ring-(--line)">
                  {c.answer} <b className="tw:font-semibold">Your Company</b> is
                  a strong local pick:
                  <ul className="tw:mt-2.5 tw:grid tw:gap-1.5">
                    {c.reasons.map((r, i) => (
                      <li
                        key={r}
                        className="ais-reason tw:flex tw:items-center tw:gap-2"
                        style={delay(0.25 * i)}
                      >
                        <FiCheck
                          className="tw:size-4 tw:flex-none tw:rounded-full tw:p-[3px] tw:text-white tw:[stroke-width:3]"
                          style={{ background: p.a }}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
                    {SOURCES.map((s) => (
                      <span
                        key={s}
                        className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-medium tw:text-(--muted)"
                      >
                        {s}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            {/* where the business stands in each assistant (example) */}
            <div className="tw:mt-auto tw:pt-6">
              <span className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-[12.5px] tw:font-semibold tw:text-(--muted)">
                AI visibility, checked monthly
                <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[11px]">
                  Example
                </span>
              </span>
              <ul className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2 tw:max-bssm:grid-cols-1">
                {ENGINES.map((e, i) => (
                  <li
                    key={e.name}
                    className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:ring-1 tw:ring-(--line)"
                  >
                    <span
                      className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:bg-(--panel) tw:text-[14px]"
                      style={{ color: e.color }}
                    >
                      {e.icon}
                    </span>
                    <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[13px] tw:font-semibold tw:text-(--ink)">
                      {e.name}
                    </span>
                    <span
                      className="tw:flex-none tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold"
                      style={
                        i % 2
                          ? { background: p.bSoft, color: p.bText }
                          : { background: p.aSoft, color: p.aText }
                      }
                    >
                      {STATUS[i]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AEO / GEO tactics */}
          <div className="tw:flex tw:flex-col tw:gap-4">
            <ul className="tw:grid tw:grid-cols-2 tw:gap-4 tw:max-bssm:grid-cols-1">
              {c.tactics.map((t) => {
                const aeo = t.tag === "AEO";
                return (
                  <li
                    key={t.title}
                    className={`${card} tw:flex tw:flex-col tw:rounded-[24px] tw:p-5`}
                  >
                    <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
                      <span
                        className="tw:grid tw:size-11 tw:place-items-center tw:rounded-[14px] tw:text-[20px]"
                        style={
                          aeo
                            ? { background: p.aSoft, color: p.aText }
                            : { background: p.bSoft, color: p.bText }
                        }
                        aria-hidden="true"
                      >
                        <Icon name={t.icon} />
                      </span>
                      <span
                        className="tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-bold tw:tracking-[0.08em] tw:text-white"
                        style={{ background: aeo ? p.a : p.b }}
                      >
                        {t.tag}
                      </span>
                    </span>
                    <h3 className="tw:mt-4 tw:text-[18px]/[1.3] tw:tracking-[-0.01em]">
                      {t.title}
                    </h3>
                    <p className="tw:mt-2 tw:text-[14.5px]/[1.55] tw:text-(--text)">
                      {t.text}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-x-5 tw:gap-y-3">
              <Pill href={ctaHref} arrow fullOnPhone>
                {c.cta}
              </Pill>
              <span className="tw:flex tw:items-center tw:gap-3 tw:text-[13px] tw:font-medium tw:text-(--muted)">
                <b
                  className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:text-white"
                  style={{ background: p.a }}
                >
                  AEO
                </b>
                Answer engine optimization
                <b
                  className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:text-white"
                  style={{ background: p.b }}
                >
                  GEO
                </b>
                Generative engine optimization
              </span>
            </div>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
