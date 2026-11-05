import type { CSSProperties } from "react";
import { FiCheck, FiCheckCircle, FiColumns, FiMapPin } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import type {
  FenceLineUi,
  FenceRankUi,
  Palette,
  QuotePipelineUi,
} from "./types";
import "./fence.css";

/* ---------------------------------------------------------------------------
   FENCE GROWTH UIs (5 Nov 2026) — owner: new pages for fence contractors
   with "new ui components". Three fence-only cards, each with a small
   looping animation (fence.css; reduced motion shows the finished frame):
   - FenceLineCard: an online estimate drawn on an aerial yard view;
   - FenceRankCard: one search per fence material and where the company
     shows for it;
   - QuotePipelineCard: estimate requests moving from new to won.
   Example copy only: "Your Company", no prices, no real places.
--------------------------------------------------------------------------- */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

const CARD = cx(
  UI_CARD,
  "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink)",
);

/** Aerial yard: the fence line draws around the backyard, two gates pop
    in, then the estimate request is confirmed. */
export function FenceLineCard({ p, ui }: { p: Palette; ui: FenceLineUi }) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<TbRulerMeasure />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:relative tw:mt-4 tw:overflow-hidden tw:rounded-[16px] tw:bg-[#dcefd6]">
        <svg viewBox="0 0 440 200" className="tw:block tw:h-auto tw:w-full">
          {/* lawn texture */}
          <g fill="#cfe6c7">
            <circle cx="70" cy="150" r="26" />
            <circle cx="330" cy="70" r="30" />
            <circle cx="380" cy="160" r="18" />
          </g>
          {/* house, roof ridge and driveway */}
          <rect
            x="44"
            y="22"
            width="150"
            height="80"
            rx="6"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <path d="M44 62 H194" stroke="#cbd5e1" strokeWidth="2" />
          <path
            d="M84 22 L119 62 L154 22"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
          />
          <rect x="204" y="70" width="44" height="130" fill="#e7eaee" />
          {/* trees */}
          <circle cx="300" cy="120" r="16" fill="#9ccf8f" />
          <circle cx="120" cy="150" r="13" fill="#9ccf8f" />
          {/* the fence line */}
          <path
            className="fu-draw"
            d="M44 102 V176 H408 V32 H256"
            pathLength={100}
            fill="none"
            stroke={p.a}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* gates */}
          <g className="fu-gate" style={delay(0)}>
            <rect
              x="214"
              y="168"
              width="26"
              height="16"
              rx="4"
              fill={p.b}
              stroke="#fff"
              strokeWidth="2.5"
            />
          </g>
          <g className="fu-gate" style={delay(0.25)}>
            <rect
              x="398"
              y="96"
              width="20"
              height="30"
              rx="4"
              fill={p.b}
              stroke="#fff"
              strokeWidth="2.5"
            />
          </g>
        </svg>
        <span className="tw:absolute tw:top-3 tw:left-3 tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white/90 tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-semibold tw:backdrop-blur-sm">
          <FiMapPin style={{ color: p.a }} /> {ui.yard}
        </span>
      </div>
      <dl className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-2">
        {ui.specs.map(([k, v], i) => (
          <div
            key={k}
            className="fu-spec tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2"
            style={delay(0.15 * i)}
          >
            <dt className="tw:text-[11px] tw:font-medium tw:text-(--muted)">
              {k}
            </dt>
            <dd className="tw:truncate tw:text-[13px] tw:font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
      <span
        className="fu-toast tw:mt-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:px-3 tw:py-2.5"
        style={{ background: p.bSoft, color: p.bText }}
      >
        <span
          className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-white"
          style={{ background: p.b }}
        >
          <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
        </span>
        <span className="tw:min-w-0 tw:leading-tight">
          <b className="tw:block tw:text-[13px] tw:font-semibold">{ui.toast}</b>
          <span className="tw:block tw:truncate tw:text-[11.5px] tw:opacity-80">
            {ui.toastNote}
          </span>
        </span>
      </span>
    </div>
  );
}

/** One search per fence material; each row lands with its result chip. */
export function FenceRankCard({ p, ui }: { p: Palette; ui: FenceRankUi }) {
  const tints = [p.aSoft, p.bSoft, p.aSoft, p.bSoft];
  const inks = [p.aText, p.bText, p.aText, p.bText];
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<SiGoogle />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {ui.rows.map(([query, material, result], i) => (
          <li
            key={query}
            className="fu-row tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3.5 tw:py-2.5"
            style={delay(0.35 * i)}
          >
            <span className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--muted)">
              <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
              <span className="tw:min-w-0 tw:flex-1 tw:truncate">{query}</span>
            </span>
            <span className="tw:mt-2 tw:flex tw:items-center tw:gap-2">
              <span
                className="tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-semibold"
                style={{ background: tints[i], color: inks[i] }}
              >
                {material}
              </span>
              <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[13px] tw:font-semibold">
                Your Company
              </b>
              <span
                className="fu-result tw:flex-none tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-bold tw:text-white"
                style={{ background: p.a, ...delay(0.35 * i + 0.4) }}
              >
                {result}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.bSoft, color: p.bText }}
      >
        <FiCheckCircle className="tw:size-3.5 tw:flex-none" /> {ui.note}
      </span>
    </div>
  );
}

/** Estimate pipeline: four stage columns; job cards land in their stage,
    the won column glows. */
export function QuotePipelineCard({
  p,
  ui,
}: {
  p: Palette;
  ui: QuotePipelineUi;
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiColumns />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-4 tw:grid tw:grid-cols-4 tw:gap-2 tw:max-bssm:grid-cols-2">
        {ui.stages.map((stage, s) => {
          const won = s === 3;
          const cards = ui.cards.filter((c) => c.stage === s);
          return (
            <div
              key={stage}
              className="tw:flex tw:min-h-[150px] tw:flex-col tw:gap-1.5 tw:rounded-[14px] tw:p-1.5 tw:max-bssm:min-h-0"
              style={{ background: won ? "var(--green-soft)" : "var(--panel)" }}
            >
              <span
                className="tw:flex tw:items-center tw:justify-between tw:px-1.5 tw:pt-1 tw:text-[11px] tw:font-semibold"
                style={{ color: won ? "#1e7a3a" : "var(--muted)" }}
              >
                {stage}
                <span className="tw:grid tw:size-[18px] tw:place-items-center tw:rounded-full tw:bg-white tw:text-[10px]">
                  {cards.length}
                </span>
              </span>
              {cards.map((c, k) => (
                <span
                  key={c.name + c.job}
                  className="fu-job tw:rounded-[10px] tw:bg-white tw:px-2 tw:py-1.5 tw:[box-shadow:0_6px_14px_-10px_rgba(12,21,38,0.45)]"
                  style={delay(0.3 * s + 0.15 * k)}
                >
                  <span className="tw:flex tw:items-center tw:gap-1">
                    <b className="tw:min-w-0 tw:flex-1 tw:truncate tw:text-[11.5px] tw:font-semibold">
                      {c.name}
                    </b>
                    {won ? (
                      <FiCheck className="tw:size-3 tw:flex-none tw:text-(--green) tw:[stroke-width:3]" />
                    ) : null}
                  </span>
                  <span
                    className="tw:mt-0.5 tw:block tw:truncate tw:text-[10.5px]"
                    style={{ color: s % 2 ? p.bText : p.aText }}
                  >
                    {c.job}
                  </span>
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.aSoft, color: p.aText }}
      >
        <FiCheckCircle className="tw:size-3.5 tw:flex-none" /> {ui.note}
      </span>
    </div>
  );
}
