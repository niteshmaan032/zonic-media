import type { CSSProperties } from "react";
import {
  FiCheck,
  FiCheckCircle,
  FiMessageSquare,
  FiPlus,
  FiSearch,
} from "react-icons/fi";

import {
  CenterHead,
  Pill,
  Section,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { Icon } from "./icons";
import type { AudiencesCopy, Palette } from "./types";
import { LINKS, RichText, softStyle } from "./ui";
import "./audiences.css";

/* ---------------------------------------------------------------------------
   AUDIENCE LANES (5 Nov 2026) — owner, home inspector pages: "there are
   different type home inspection which they do like realtors and home
   owner … add this section on pages". Two lanes, one per audience the
   inspector sells to (agents who refer buyers, homeowners who book
   direct). Each lane: pitch, a mini UI (request or search → four steps →
   result chip, steps light up in turn), and three inspection types with
   the tactic that sells each. Add-on tests both audiences buy close the
   section. Example copy only; no prices or figures.
--------------------------------------------------------------------------- */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

export function AudienceLanes({
  id,
  p,
  c,
  ctaHref,
}: {
  /** Heading id prefix, e.g. "ind" or "loc". */
  id: string;
  p: Palette;
  c: AudiencesCopy;
  ctaHref: string;
}) {
  const h = `${id}-aud-h`;
  return (
    <Section labelledBy={h}>
      <Wrap>
        <CenterHead id={h} title={c.title}>
          <span className={LINKS}>
            <RichText value={c.lead} />
          </span>
        </CenterHead>

        <div className="tw:grid tw:grid-cols-2 tw:gap-6 tw:max-bslg:grid-cols-1">
          {c.lanes.map((lane, li) => {
            const tint = li === 0 ? p.aSoft : p.bSoft;
            const solid = li === 0 ? p.a : p.b;
            const ink = li === 0 ? p.aText : p.bText;
            return (
              <article
                key={lane.audience}
                className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-white tw:p-8 tw:max-bssm:px-5 tw:max-bssm:py-7"
              >
                <div className="tw:flex tw:items-center tw:gap-4">
                  <span
                    className="tw:grid tw:size-14 tw:flex-none tw:place-items-center tw:rounded-[18px] tw:text-[26px]"
                    style={{ background: tint, color: ink }}
                    aria-hidden="true"
                  >
                    <Icon name={lane.icon} />
                  </span>
                  <h3 className="tw:text-[clamp(24px,2.3vw,32px)] tw:leading-[1.12] tw:tracking-[-0.025em]">
                    {lane.audience}
                  </h3>
                </div>
                <p className="tw:mt-4 tw:text-[16.5px]/[1.6] tw:text-(--text)">
                  {lane.pitch}
                </p>

                {/* mini UI: request or search, four steps, result */}
                <div
                  className="tw:mt-6 tw:rounded-[24px] tw:p-5 tw:max-bssm:p-4"
                  style={{ background: tint }}
                  aria-hidden="true"
                >
                  <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-4 tw:py-2.5 tw:text-[13.5px] tw:font-medium tw:text-(--ink) tw:max-bssm:rounded-[18px]">
                    {li === 0 ? (
                      <FiMessageSquare
                        className="tw:flex-none"
                        style={{ color: solid }}
                      />
                    ) : (
                      <FiSearch
                        className="tw:flex-none"
                        style={{ color: solid }}
                      />
                    )}
                    <span className="tw:min-w-0 tw:bssm:truncate">
                      {lane.query}
                    </span>
                  </span>
                  <ol className="tw:relative tw:mt-5 tw:grid tw:grid-cols-4 tw:gap-2 tw:max-bssm:grid-cols-2 tw:max-bssm:gap-y-4">
                    <span
                      className="tw:absolute tw:top-[15px] tw:right-[12%] tw:left-[12%] tw:h-[3px] tw:rounded-full tw:bg-white tw:max-bssm:hidden"
                      aria-hidden="true"
                    />
                    {lane.flow.map((step, si) => (
                      <li
                        key={step}
                        className="tw:relative tw:flex tw:flex-col tw:items-center tw:gap-2 tw:text-center"
                      >
                        <span
                          className="aud-step tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-bold tw:text-white tw:ring-4 tw:ring-white"
                          style={{ background: solid, ...delay(0.6 * si) }}
                        >
                          {si === 3 ? (
                            <FiCheck className="tw:[stroke-width:3]" />
                          ) : (
                            si + 1
                          )}
                        </span>
                        <span className="tw:text-[12.5px]/[1.3] tw:font-semibold tw:text-(--ink)">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <span
                    className="aud-badge tw:mt-5 tw:flex tw:w-fit tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3.5 tw:py-2 tw:text-[13px] tw:font-semibold"
                    style={{ color: ink }}
                  >
                    <FiCheckCircle className="tw:flex-none" /> {lane.badge}
                  </span>
                </div>

                <ul className="tw:mt-6 tw:grid tw:gap-3">
                  {lane.jobs.map((job, ji) => (
                    <li
                      key={job.name}
                      className="tw:flex tw:items-start tw:gap-3 tw:rounded-[18px] tw:bg-(--panel) tw:px-4 tw:py-3.5"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="tw:mt-0.5 tw:size-6 tw:flex-none tw:rounded-full tw:p-[5px] tw:[stroke-width:3]"
                        style={softStyle(p, li + ji)}
                      />
                      <span className="tw:min-w-0">
                        <b className="tw:block tw:text-[16px]/[1.3] tw:font-semibold tw:text-(--ink)">
                          {job.name}
                        </b>
                        <span className="tw:mt-0.5 tw:block tw:text-[14.5px]/[1.45] tw:text-(--text)">
                          {job.tactic}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* add-on tests both audiences book */}
        <div className="tw:mt-6 tw:flex tw:flex-wrap tw:items-center tw:gap-x-6 tw:gap-y-4 tw:rounded-(--r-xl) tw:bg-white tw:px-8 tw:py-6 tw:max-bssm:px-5">
          <h3 className="tw:text-[19px]/[1.3] tw:tracking-[-0.01em]">
            {c.addOns.title}
          </h3>
          <ul className="tw:flex tw:flex-1 tw:flex-wrap tw:gap-2">
            {c.addOns.items.map((it, i) => (
              <li
                key={it}
                className={cx(
                  "tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:px-3.5 tw:py-1.5 tw:text-[14px] tw:font-medium",
                )}
                style={softStyle(p, i)}
              >
                <FiPlus aria-hidden="true" className="tw:size-3.5" /> {it}
              </li>
            ))}
          </ul>
          <Pill href={ctaHref} arrow fullOnPhone>
            {c.cta}
          </Pill>
        </div>
      </Wrap>
    </Section>
  );
}
