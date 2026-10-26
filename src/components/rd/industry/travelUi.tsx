import Image from "next/image";
import type { CSSProperties } from "react";
import { FiCalendar, FiCheck, FiLock, FiStar, FiUsers } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { SiGoogle } from "react-icons/si";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD } from "@/components/rd/dfw-kit/ui";
import type { DirectBookUi, Palette, ThingsToDoUi, TripChatUi } from "./types";
import "./travel.css";
import { photoAlt } from "@/components/rd/photoAlt";

/* ---------------------------------------------------------------------------
   TRAVEL GROWTH UIs (26 Oct 2026) — owner, travel page: "change the ui
   components" in "How Our Travel SEO Agency Brings Bookings Home". Three
   travel-only cards, each with a small looping animation (travel.css;
   reduced motion shows the finished frame):
   - TripChatCard: an AI trip planner builds a day plan and names the tour;
   - ThingsToDoCard: Google "Things to do" with the business as top pick;
   - DirectBookCard: the business's own booking widget confirming a stay.
   Example copy only: "Your Tour Co.", no prices or figures.
--------------------------------------------------------------------------- */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

function Stars({ color }: { color: string }) {
  return (
    <span className="tw:flex tw:gap-0.5" style={{ color }}>
      {[0, 1, 2, 3, 4].map((n) => (
        <FiStar key={n} className="tw:size-3 tw:fill-current" />
      ))}
    </span>
  );
}

/** AI trip planner: the traveler's prompt, a typing pause, then a
    three-day plan with the business recommended on day two. */
export function TripChatCard({ p, ui }: { p: Palette; ui: TripChatUi }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[470px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[14px] tw:font-semibold">
          <HiSparkles className="tw:size-5" style={{ color: p.aDeep }} /> AI
          trip planner
        </span>
        <Chip tone="muted">Example</Chip>
      </span>

      <span className="tt-ui-line tw:mt-4 tw:ml-auto tw:block tw:w-fit tw:max-w-[86%] tw:rounded-[18px] tw:rounded-br-[6px] tw:bg-(--ink) tw:px-4 tw:py-2.5 tw:text-[13px]/[1.5] tw:text-white">
        {ui.prompt}
      </span>

      <div className="tw:relative tw:mt-3 tw:max-w-[92%] tw:rounded-[18px] tw:rounded-bl-[6px] tw:bg-(--panel) tw:p-4">
        <span className="tt-ui-dots tw:absolute tw:top-4 tw:left-4 tw:flex tw:gap-1">
          {[0, 1, 2].map((n) => (
            <i
              key={n}
              className="tt-ui-dot tw:block tw:size-1.5 tw:rounded-full tw:bg-(--muted)"
              style={delay(n * 0.15)}
            />
          ))}
        </span>
        <ol className="tw:grid tw:gap-2 tw:text-[12.5px]/[1.45]">
          {ui.days.map((d, i) => (
            <li
              key={d}
              className="tt-ui-line tw:flex tw:gap-2.5"
              style={delay(1.2 + i * 0.35)}
            >
              <b
                className="tw:flex-none tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold"
                style={{ background: p.aSoft, color: p.aText }}
              >
                Day {i + 1}
              </b>
              <span>{d}</span>
            </li>
          ))}
        </ol>
        <span
          className="tt-ui-line tt-ui-pick tw:mt-3 tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:bg-white tw:p-2.5 tw:ring-[1.5px]"
          style={
            {
              ...delay(2.4),
              ["--tw-ring-color"]: p.a,
            } as CSSProperties
          }
        >
          <span className="tw:relative tw:size-11 tw:flex-none tw:overflow-hidden tw:rounded-[10px]">
            <Image
              src={ui.img}
              alt={photoAlt(ui.img)}
              fill
              sizes="44px"
              className="tw:object-cover"
            />
          </span>
          <span className="tw:min-w-0 tw:flex-1">
            <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
              {ui.pick}
            </b>
            <span className="tw:block tw:truncate tw:text-[11.5px] tw:text-(--muted)">
              {ui.note}
            </span>
          </span>
          <span
            className="tw:flex-none tw:rounded-full tw:px-3 tw:py-1.5 tw:text-[11.5px] tw:font-semibold tw:text-white"
            style={{ background: p.aDeep }}
          >
            Book
          </span>
        </span>
      </div>

      <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
        {["yourtourco.com", "Google reviews"].map((src) => (
          <span
            key={src}
            className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-medium tw:text-(--muted)"
          >
            {src}
          </span>
        ))}
      </span>
    </div>
  );
}

/** Google "Things to do": three tours, the business highlighted as the
    top pick, a booking toast on a loop. */
export function ThingsToDoCard({ p, ui }: { p: Palette; ui: ThingsToDoUi }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:relative tw:w-full tw:max-w-[470px] tw:overflow-hidden tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <div className="tw:p-4 tw:pb-3">
        <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[13px] tw:font-medium">
          <SiGoogle className="tw:flex-none tw:text-[#4285f4]" /> {ui.query}
        </span>
        <span className="tw:mt-3 tw:flex tw:gap-1.5 tw:text-[12px] tw:font-semibold">
          {ui.tabs.map((t, i) => (
            <span
              key={t}
              className="tw:rounded-full tw:px-3 tw:py-1"
              style={
                i === 0
                  ? { background: p.bDeep, color: "#fff" }
                  : { background: "var(--panel)", color: "var(--muted)" }
              }
            >
              {t}
            </span>
          ))}
        </span>
      </div>
      <div className="tw:grid tw:gap-2 tw:px-4 tw:pb-4">
        {ui.tours.map((t, i) => (
          <div
            key={t.name}
            className={cx(
              "tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:p-2.5",
              i === 0 ? "tt-ui-pick tw:ring-[1.5px]" : "tw:opacity-65",
            )}
            style={
              i === 0
                ? ({
                    background: p.bSoft,
                    ["--tw-ring-color"]: p.b,
                  } as CSSProperties)
                : { background: "var(--panel)" }
            }
          >
            <span className="tw:relative tw:size-14 tw:flex-none tw:overflow-hidden tw:rounded-[10px]">
              <Image
                src={t.img}
                alt={photoAlt(t.img)}
                fill
                sizes="56px"
                className="tw:object-cover"
              />
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              {i === 0 ? (
                <span
                  className="tw:mb-1 tw:inline-block tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-bold tw:tracking-wide tw:text-white tw:uppercase"
                  style={{ background: p.bDeep }}
                >
                  Top pick
                </span>
              ) : null}
              <b className="tw:block tw:truncate tw:text-[13.5px] tw:font-semibold">
                {t.name}
              </b>
              <span className="tw:mt-0.5 tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:text-(--muted)">
                <Stars color={i === 0 ? "#f4b400" : "#cbd5e1"} /> {t.tag}
              </span>
            </span>
            <span
              className={cx(
                "tw:flex-none tw:rounded-full tw:px-3 tw:py-1.5 tw:text-[11.5px] tw:font-semibold",
                i === 0
                  ? "tt-ui-press tw:text-white"
                  : "tw:bg-white tw:text-(--muted)",
              )}
              style={i === 0 ? { background: p.bDeep } : undefined}
            >
              Book
            </span>
          </div>
        ))}
      </div>
      <span className="tt-ui-toast tw:absolute tw:top-3 tw:right-3 tw:left-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-(--ink) tw:px-3.5 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-white tw:[box-shadow:0_16px_34px_-14px_rgba(12,21,38,0.6)]">
        <span
          className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full"
          style={{ background: p.b }}
        >
          <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
        </span>
        {ui.toast}
      </span>
    </div>
  );
}

/** The business's own booking widget: photo, dates, guests, reasons to
    book direct, then a confirmation on a loop. */
export function DirectBookCard({ p, ui }: { p: Palette; ui: DirectBookUi }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:relative tw:w-full tw:max-w-[470px] tw:overflow-hidden tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-4 tw:py-2.5">
        <span className="tw:flex tw:gap-1.5">
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-[#fda4af]" />
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-[#fcd34d]" />
          <i className="tw:block tw:size-2 tw:rounded-full tw:bg-[#86efac]" />
        </span>
        <span className="tw:flex tw:flex-1 tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1 tw:text-[11.5px] tw:font-medium tw:text-(--muted)">
          <FiLock className="tw:size-3" /> {ui.url}
        </span>
      </div>
      <div className="tw:relative tw:h-[120px]">
        <Image
          src={ui.img}
          alt={photoAlt(ui.img)}
          fill
          sizes="470px"
          className="tw:object-cover"
        />
        <span className="tw:absolute tw:inset-0 tw:[background:linear-gradient(180deg,transparent_30%,rgba(6,12,26,0.7))]" />
        <b className="tw:absolute tw:bottom-3 tw:left-4 tw:text-[17px] tw:font-semibold tw:text-white">
          {ui.title}
        </b>
      </div>
      <div className="tw:p-4">
        <span className="tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[12.5px] tw:font-medium">
          <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
            <FiCalendar style={{ color: p.aDeep }} /> {ui.dates}
          </span>
          <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
            <FiUsers style={{ color: p.aDeep }} /> {ui.guests}
          </span>
        </span>
        <ul className="tw:mt-3 tw:grid tw:gap-1.5 tw:text-[12.5px]">
          {ui.perks.map((t) => (
            <li key={t} className="tw:flex tw:items-center tw:gap-2">
              <FiCheck
                className="tw:size-4 tw:flex-none tw:rounded-full tw:p-[3px] tw:[stroke-width:3]"
                style={{ background: p.aSoft, color: p.aText }}
              />
              {t}
            </li>
          ))}
        </ul>
        <span
          className="tt-ui-press tw:mt-4 tw:flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:py-3 tw:text-[13.5px] tw:font-semibold tw:text-white"
          style={{ background: p.aDeep }}
        >
          {ui.cta}
        </span>
      </div>
      <span className="tt-ui-toast tw:absolute tw:top-12 tw:right-3 tw:left-3 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-(--ink) tw:px-3.5 tw:py-2.5 tw:text-[12px] tw:font-semibold tw:text-white tw:[box-shadow:0_16px_34px_-14px_rgba(12,21,38,0.6)]">
        <span
          className="tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full"
          style={{ background: p.a }}
        >
          <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" />
        </span>
        <span className="tw:leading-tight">
          {ui.toast}
          <span className="tw:block tw:text-[11px] tw:font-medium tw:text-white/70">
            {ui.toastNote}
          </span>
        </span>
      </span>
    </div>
  );
}
