import type { CSSProperties } from "react";
import {
  FiArrowUp,
  FiCheck,
  FiCheckCircle,
  FiEyeOff,
  FiFileText,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import { SiGoogle } from "react-icons/si";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import type {
  BrandReportUi,
  CaseTrackerUi,
  Palette,
  PartnerQueueUi,
} from "./types";
import "./whitelabel.css";

/* ---------------------------------------------------------------------------
   WHITE LABEL GROWTH UIs (5 Nov 2026) — /services/white-label-services in
   the new layout. Three agency-side cards, each with a small looping
   animation (whitelabel.css; reduced motion shows the finished frame):
   - BrandReportCard: a client report that carries the reselling agency's
     brand, never ours;
   - CaseTrackerCard: a suspended Business Profile moving to reinstated;
   - PartnerQueueCard: fulfillment across several agency clients.
   Example copy only: "Your Agency", plain client names, rank positions and
   statuses, no prices or figures.
--------------------------------------------------------------------------- */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

const CARD = cx(
  UI_CARD,
  "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink)",
);

/** A monthly client report under the agency's own logo. */
export function BrandReportCard({ p, ui }: { p: Palette; ui: BrandReportUi }) {
  return (
    <div className={CARD} aria-hidden="true">
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <span className="tw:flex tw:items-center tw:gap-2.5">
          <span
            className="wl-logo tw:grid tw:size-9 tw:place-items-center tw:rounded-[12px] tw:text-[15px] tw:font-bold tw:text-white"
            style={{ background: p.a }}
          >
            YA
          </span>
          <span className="tw:leading-tight">
            <b className="tw:block tw:text-[14px] tw:font-semibold">
              Your Agency
            </b>
            <span className="tw:block tw:text-[11.5px] tw:text-(--muted)">
              {ui.title}
            </span>
          </span>
        </span>
        <Chip tone="muted">Example</Chip>
      </div>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium">
        <FiFileText style={{ color: p.b }} /> {ui.client}
      </span>
      <ul className="tw:mt-3 tw:grid tw:gap-2">
        {ui.ranks.map(([kw, from, to], i) => (
          <li
            key={kw}
            className="wl-row tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px]"
            style={delay(0.3 * i)}
          >
            <SiGoogle className="tw:size-3 tw:flex-none tw:text-[#4285f4]" />
            <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-medium">
              {kw}
            </span>
            <span className="tw:text-[11.5px] tw:text-(--muted) tw:line-through">
              #{from}
            </span>
            <FiArrowUp className="tw:size-3.5" style={{ color: p.a }} />
            <b className="tw:text-[13px]" style={{ color: p.aText }}>
              #{to}
            </b>
          </li>
        ))}
      </ul>
      <div className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5">
        {ui.done.map((d, i) => (
          <span
            key={d}
            className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-[10px] tw:px-2 tw:py-2 tw:text-[11px] tw:leading-tight tw:font-semibold"
            style={
              i % 2
                ? { background: p.bSoft, color: p.bText }
                : { background: p.aSoft, color: p.aText }
            }
          >
            <FiCheck className="tw:size-3 tw:flex-none tw:[stroke-width:3]" />
            {d}
          </span>
        ))}
      </div>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-white">
        <FiEyeOff className="tw:size-3.5 tw:flex-none" /> {ui.note}
      </span>
    </div>
  );
}

/** A suspended Business Profile case: steps light up, then reinstated. */
export function CaseTrackerCard({ p, ui }: { p: Palette; ui: CaseTrackerUi }) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiShield />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <span className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[14px] tw:bg-(--panel) tw:px-3.5 tw:py-2.5 tw:text-[12.5px]">
        <span className="tw:min-w-0 tw:truncate tw:font-semibold">
          {ui.client}
        </span>
        <span className="wl-status tw:grid tw:flex-none tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-center tw:text-[11px] tw:font-bold tw:text-white">
          <span className="wl-status-off tw:[grid-area:1/1]">Suspended</span>
          <span className="wl-status-on tw:[grid-area:1/1]">Live again</span>
        </span>
      </span>
      <ol className="tw:mt-4 tw:grid tw:gap-2.5">
        {ui.steps.map((s, i) => (
          <li key={s} className="tw:flex tw:items-center tw:gap-3">
            <span
              className="wl-step tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
              style={{
                background: i === 3 ? "var(--green)" : p.b,
                ...delay(0.7 * i),
              }}
            >
              {i === 3 ? <FiCheck className="tw:[stroke-width:3]" /> : i + 1}
            </span>
            <span className="tw:text-[13px] tw:font-medium">{s}</span>
          </li>
        ))}
      </ol>
      <span
        className="wl-toast tw:mt-4 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:px-3 tw:py-2.5"
        style={{ background: "var(--green-soft)", color: "#1e7a3a" }}
      >
        <FiCheckCircle className="tw:size-5 tw:flex-none" />
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

const STATUS_TONE: Record<string, CSSProperties> = {
  Done: { background: "var(--green-soft)", color: "#1e7a3a" },
  Live: { background: "var(--green-soft)", color: "#1e7a3a" },
  "In review": { background: "var(--gold-soft)", color: "#8a5a00" },
  Queued: { background: "var(--panel)", color: "var(--muted)" },
};

/** Fulfillment across several of the agency's clients at once. */
export function PartnerQueueCard({
  p,
  ui,
}: {
  p: Palette;
  ui: PartnerQueueUi;
}) {
  return (
    <div className={CARD} aria-hidden="true">
      <UiHead
        icon={<FiLayers />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2">
        {ui.rows.map(([client, task, status], i) => (
          <li
            key={client + task}
            className="wl-row tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={delay(0.3 * i)}
          >
            <span
              className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:text-[12px] tw:font-bold"
              style={
                i % 2
                  ? { background: p.bSoft, color: p.bText }
                  : { background: p.aSoft, color: p.aText }
              }
            >
              {client.charAt(0)}
            </span>
            <span className="tw:min-w-0 tw:flex-1 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
                {client}
              </b>
              <span className="tw:block tw:truncate tw:text-[11.5px] tw:text-(--muted)">
                {task}
              </span>
            </span>
            <span
              className="tw:flex-none tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11px] tw:font-semibold"
              style={STATUS_TONE[status] ?? STATUS_TONE.Queued}
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.aSoft, color: p.aText }}
      >
        <FiCheckCircle className="tw:size-3.5 tw:flex-none" /> {ui.note}
      </span>
    </div>
  );
}
