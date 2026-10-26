"use client";

/* Niche website design example-site stage (26 Oct 2026). Built first for
   HVAC as the hero; the owner then asked for it as a mid-page section. A
   wide browser window showing an example homepage for the niche plus its
   phone version. A two-mode switch (seasons for HVAC, storm vs re-roof
   for roofing, new patients vs emergencies for dental …) restyles the
   whole site — badge, headline, services, booking options and colours —
   the way targeted landing pages do. It switches on its own every few
   seconds (paused on hover/focus, stopped after a click, off for reduced
   motion). Numbered markers + a legend name what we build. All copy comes
   from the niche's content file (stage). Example only: "Your … Co.", no
   prices, no figures. */

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronDown,
  FiMenu,
  FiCamera,
  FiCheck,
  FiFileText,
  FiHome,
  FiLock,
  FiMapPin,
  FiNavigation,
  FiPhone,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Icon } from "@/components/rd/industry/icons";
import type { BrandTone } from "@/components/rd/seoservices/seoUi";
import type { SiteStageData, StageMode } from "../types";
import "./stage.css";
import { photoAlt } from "@/components/rd/photoAlt";

type Tones = [BrandTone, BrandTone, BrandTone, BrandTone];

const SWITCH_MS = 5000;

function Stars() {
  return (
    <span className="tw:flex tw:gap-0.5 tw:text-[#f4b400]">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          width={11}
          height={11}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

/** Small numbered marker on the example site; the legend below names it. */
function Marker({
  n,
  t,
  className = "",
}: {
  n: number;
  t: BrandTone;
  className?: string;
}) {
  return (
    <span
      className={`tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[10.5px] tw:font-bold tw:ring-2 tw:ring-white ${className}`}
      style={{ background: t.solid, color: t.onSolid }}
    >
      {n}
    </span>
  );
}

type W = { stage: SiteStageData; s: StageMode; t: BrandTone; ink: BrandTone };

const BOX =
  "tw:rounded-[20px] tw:bg-white tw:p-4 tw:[box-shadow:0_20px_44px_-26px_rgba(12,21,38,0.5)] tw:ring-1 tw:ring-(--line) tw:max-bsmd:hidden";

function WidgetHead({
  icon,
  title,
  t,
  ink,
}: {
  icon: ReactNode;
  title: string;
  t: BrandTone;
  ink: BrandTone;
}) {
  return (
    <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13.5px] tw:font-semibold">
      <span style={{ color: t.solid }}>{icon}</span> {title}
      <Marker n={3} t={ink} className="tw:ml-auto" />
    </span>
  );
}

function Chips({ items, t }: { items: readonly string[]; t: BrandTone }) {
  return (
    <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
      {items.map((b, i) => (
        <span
          key={b}
          className="tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-semibold"
          style={
            i === 0
              ? { background: t.solid, color: t.onSolid }
              : { background: "var(--panel)" }
          }
        >
          {b}
        </span>
      ))}
    </span>
  );
}

function Confirm({ label, t }: { label: string; t: BrandTone }) {
  return (
    <span
      className="nwd-pulse tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2 tw:text-[12.5px] tw:font-semibold"
      style={{ background: t.solid, color: t.onSolid }}
    >
      <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" /> {label}
    </span>
  );
}

function Field({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[11.5px] tw:text-(--muted)">
      {icon} {text}
    </span>
  );
}

/** Calendar booking: service chips, day and time slots (HVAC, plumbing,
    cleaning, dental …). */
function BookWidget({ stage, s, t, ink }: W) {
  return (
    <div className={BOX}>
      <WidgetHead
        icon={<FiCalendar />}
        title={stage.bookTitle}
        t={t}
        ink={ink}
      />
      <Chips items={s.book} t={t} />
      <span className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-center tw:text-[11.5px] tw:font-semibold">
        {["Today", "Tomorrow", "Thu"].map((dd, i) => (
          <span
            key={dd}
            className="tw:rounded-[10px] tw:py-1.5"
            style={
              i === 0
                ? { background: t.soft, color: t.softText }
                : { background: "var(--panel)" }
            }
          >
            {dd}
          </span>
        ))}
      </span>
      <span className="tw:mt-1.5 tw:grid tw:grid-cols-4 tw:gap-1.5 tw:text-center tw:text-[11px] tw:font-medium">
        {["8 AM", "10 AM", "1 PM", "4 PM"].map((h, i) => (
          <span
            key={h}
            className="tw:rounded-[8px] tw:border tw:py-1"
            style={
              i === 1
                ? { borderColor: t.solid, color: t.softText }
                : { borderColor: "var(--line)" }
            }
          >
            {h}
          </span>
        ))}
      </span>
      <Confirm label={stage.confirm} t={t} />
    </div>
  );
}

/** Estimate request: project chips, a 3-step progress bar, ZIP and photo
    fields, contact preference (roofing, remodeling, solar, landscaping …). */
function QuoteWidget({ stage, s, t, ink }: W) {
  return (
    <div className={BOX}>
      <WidgetHead
        icon={<FiFileText />}
        title={stage.bookTitle}
        t={t}
        ink={ink}
      />
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
        <span className="tw:grid tw:flex-1 tw:grid-cols-3 tw:gap-1">
          {[0, 1, 2].map((n) => (
            <span
              key={n}
              className="tw:h-1.5 tw:rounded-full"
              style={{ background: n < 2 ? t.solid : "var(--panel)" }}
            />
          ))}
        </span>
        Step 2 of 3
      </span>
      <Chips items={s.book} t={t} />
      <span className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-1.5">
        <Field icon={<FiMapPin />} text="ZIP code" />
        <Field icon={<FiCamera />} text="Add photos" />
      </span>
      <span className="tw:mt-1.5 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-center tw:text-[11px] tw:font-semibold">
        {["Call", "Text", "Email"].map((c, i) => (
          <span
            key={c}
            className="tw:rounded-[8px] tw:py-1"
            style={
              i === 1
                ? { background: t.soft, color: t.softText }
                : { background: "var(--panel)" }
            }
          >
            {c}
          </span>
        ))}
      </span>
      <Confirm label={stage.confirm} t={t} />
    </div>
  );
}

/** Tow / roadside request: a mini map with a route to the driver, shared
    location and a live status list (towing). */
function DispatchWidget({ stage, s, t, ink }: W) {
  return (
    <div className={BOX}>
      <WidgetHead
        icon={<FiNavigation />}
        title={stage.bookTitle}
        t={t}
        ink={ink}
      />
      <span
        className="tw:relative tw:mt-3 tw:block tw:h-[78px] tw:overflow-hidden tw:rounded-[14px]"
        style={{
          background: `${t.soft} repeating-linear-gradient(90deg, transparent 0 26px, rgba(12,21,38,0.06) 26px 27px)`,
        }}
      >
        <svg
          viewBox="0 0 240 78"
          className="tw:absolute tw:inset-0 tw:size-full"
          preserveAspectRatio="none"
        >
          <path
            d="M24 60 C 80 60, 90 20, 150 26 S 210 40, 216 18"
            fill="none"
            stroke={t.solid}
            strokeWidth="3"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
        <span
          className="tw:absolute tw:top-[46px] tw:left-[14px] tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:text-[11px]"
          style={{ background: t.solid, color: t.onSolid }}
        >
          <Icon name={s.icon} />
        </span>
        <span
          className="tw:absolute tw:top-[4px] tw:right-[12px] tw:text-[20px]"
          style={{ color: ink.solid }}
        >
          <FiMapPin />
        </span>
      </span>
      <Chips items={s.book} t={t} />
      <span className="tw:mt-3 tw:grid tw:gap-1 tw:text-[11.5px] tw:font-medium">
        {["Location shared", "Driver assigned", "On the way"].map((x, i) => (
          <span key={x} className="tw:flex tw:items-center tw:gap-2">
            <span
              className={`tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:text-[9px] ${i === 2 ? "nwd-pulse" : ""}`}
              style={
                i < 2
                  ? { background: t.solid, color: t.onSolid }
                  : { background: t.soft, color: t.softText }
              }
            >
              <FiCheck />
            </span>
            {x}
          </span>
        ))}
      </span>
      <Confirm label={stage.confirm} t={t} />
    </div>
  );
}

/** Case review: practice-area chips, a short "what happened" box and a
    confidentiality note (law firms). */
function CaseWidget({ stage, s, t, ink }: W) {
  return (
    <div className={BOX}>
      <WidgetHead
        icon={<FiFileText />}
        title={stage.bookTitle}
        t={t}
        ink={ink}
      />
      <Chips items={s.book} t={t} />
      <span className="tw:mt-3 tw:block tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2.5">
        <span className="tw:block tw:text-[11px] tw:font-semibold tw:text-(--muted)">
          Tell us what happened
        </span>
        {[92, 78, 56].map((w) => (
          <span
            key={w}
            className="tw:mt-1.5 tw:block tw:h-1.5 tw:rounded-full tw:bg-(--panel)"
            style={{ width: `${w}%` }}
          />
        ))}
      </span>
      <span className="tw:mt-2 tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-medium tw:text-(--muted)">
        <FiLock style={{ color: t.solid }} /> Private and confidential
      </span>
      <Confirm label={stage.confirm} t={t} />
    </div>
  );
}

/** Home valuation / search: address field, buyer-seller chips and two
    listing tiles (real estate agents). */
function ValuationWidget({ stage, s, t, ink }: W) {
  return (
    <div className={BOX}>
      <WidgetHead icon={<FiHome />} title={stage.bookTitle} t={t} ink={ink} />
      <span className="tw:mt-3 tw:block">
        <Field icon={<FiMapPin />} text="Enter an address" />
      </span>
      <Chips items={s.book} t={t} />
      <span className="tw:mt-3 tw:grid tw:grid-cols-2 tw:gap-1.5">
        {[t, ink].map((c, i) => (
          <span
            key={i}
            className="tw:overflow-hidden tw:rounded-[12px] tw:ring-1 tw:ring-(--line)"
          >
            <span
              className="tw:block tw:h-[38px]"
              style={{
                background: `linear-gradient(135deg, ${c.soft}, ${c.solid}55)`,
              }}
            />
            <span className="tw:block tw:p-1.5">
              <span className="tw:block tw:h-1.5 tw:w-3/4 tw:rounded-full tw:bg-(--panel)" />
              <span className="tw:mt-1 tw:block tw:h-1.5 tw:w-1/2 tw:rounded-full tw:bg-(--panel)" />
            </span>
          </span>
        ))}
      </span>
      <Confirm label={stage.confirm} t={t} />
    </div>
  );
}

function Widget(p: W) {
  switch (p.stage.widget) {
    case "quote":
      return <QuoteWidget {...p} />;
    case "dispatch":
      return <DispatchWidget {...p} />;
    case "case":
      return <CaseWidget {...p} />;
    case "valuation":
      return <ValuationWidget {...p} />;
    default:
      return <BookWidget {...p} />;
  }
}

/* PHOTO LOOK (owner, 26 Oct 2026: "show a proper website design inside
   desktop and mobile by using img in bg … a proper hero section should be
   shown"). Used when the modes carry an `img`: the browser and the phone
   show a real company homepage — utility bar, nav, a full-bleed photo hero
   with headline, buttons and an estimate form, then a why-us strip — with
   no diagram markers, so visitors read it as a site we would build. */

/** The hero form of the example homepage, by conversion style. */
const FORM: Record<
  SiteStageData["widget"],
  { note: string; fields: string[]; select: string; wideFirst?: boolean }
> = {
  book: {
    note: "Pick a day and time that suits you",
    fields: ["Full name", "Phone", "Preferred day", "Preferred time"],
    select: "Service",
  },
  quote: {
    note: "No cost, no obligation",
    fields: ["Full name", "Phone", "Email", "ZIP code"],
    select: "Project",
  },
  dispatch: {
    note: "Share your location and we send help",
    fields: ["Your location", "Phone", "Vehicle", "Name"],
    select: "Service needed",
    wideFirst: true,
  },
  case: {
    note: "Private and confidential",
    fields: ["Full name", "Phone", "Email", "Best time to call"],
    select: "Practice area",
  },
  valuation: {
    note: "Free, with no obligation",
    fields: ["Property address", "Full name", "Phone"],
    select: "I'm interested in",
    wideFirst: true,
  },
};

function PhotoImg({
  img,
  sizes,
  phone,
}: {
  img: NonNullable<StageMode["img"]>;
  sizes: string;
  phone?: boolean;
}) {
  const pos =
    (phone ? img.phonePosition : undefined) ?? img.position ?? "center";
  return (
    <Image
      src={img.src}
      alt={photoAlt(img.src)}
      fill
      sizes={sizes}
      className="tw:-z-2 tw:object-cover"
      style={{
        objectPosition: pos,
        transform: img.zoom ? `scale(${img.zoom})` : undefined,
        transformOrigin: pos,
      }}
    />
  );
}

function PhotoSite({ stage, s, t }: W) {
  return (
    <>
      {/* utility bar */}
      <div className="tw:flex tw:items-center tw:justify-between tw:gap-4 tw:bg-(--ink) tw:px-8 tw:py-1.5 tw:text-[11px] tw:font-medium tw:text-white/80 tw:max-bssm:px-4">
        <span className="tw:flex tw:items-center tw:gap-2">
          <Stars /> {stage.proof}
        </span>
        <span className="tw:flex tw:items-center tw:gap-1.5 tw:max-bsmd:hidden">
          <FiPhone className="tw:size-3" /> {stage.call}
        </span>
      </div>
      {/* nav */}
      <div className="tw:flex tw:items-center tw:gap-5 tw:bg-white tw:px-8 tw:py-3.5 tw:max-bssm:px-4">
        <span className="tw:flex tw:items-center tw:gap-2">
          <span
            className="tw:grid tw:size-8 tw:place-items-center tw:rounded-[10px] tw:text-[15px]"
            style={{ background: t.solid, color: t.onSolid }}
          >
            <Icon name={s.icon} />
          </span>
          <b className="tw:text-[15px] tw:font-semibold tw:tracking-[-0.01em]">
            {stage.business}
          </b>
        </span>
        <span className="tw:ml-auto tw:flex tw:gap-5 tw:text-[12.5px] tw:font-medium tw:text-(--ink-2) tw:max-bsmd:hidden">
          {stage.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
          <span>Contact</span>
        </span>
        <span
          className="tw:rounded-full tw:px-4 tw:py-2 tw:text-[12.5px] tw:font-semibold tw:max-bsmd:ml-auto"
          style={{ background: t.solid, color: t.onSolid }}
        >
          {stage.primary}
        </span>
      </div>
      {/* hero */}
      <div className="tw:relative tw:isolate tw:overflow-hidden">
        <PhotoImg img={s.img!} sizes="(max-width: 991px) 100vw, 900px" />
        <span className="tw:absolute tw:inset-0 tw:-z-1 tw:[background:linear-gradient(90deg,rgba(8,14,28,0.74)_0%,rgba(8,14,28,0.46)_46%,rgba(8,14,28,0.12)_78%,rgba(8,14,28,0.05)_100%)]" />
        <div className="tw:grid tw:min-h-[400px] tw:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] tw:items-center tw:gap-8 tw:px-8 tw:py-10 tw:bslg:pr-16 tw:max-bsmd:min-h-[340px] tw:max-bsmd:grid-cols-1 tw:max-bssm:px-4 tw:max-bssm:py-8">
          <div className="tw:text-white tw:max-bsmd:text-center">
            <span className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white/15 tw:px-3 tw:py-1 tw:text-[11.5px] tw:font-semibold tw:ring-1 tw:ring-white/30 tw:backdrop-blur-sm">
              <Icon name={s.icon} /> {s.badge}
            </span>
            <span className="tw:mt-4 tw:block tw:text-[clamp(26px,2.9vw,42px)] tw:leading-[1.06] tw:font-semibold tw:tracking-[-0.025em] tw:text-balance tw:[text-shadow:0_2px_18px_rgba(0,0,0,0.3)]">
              {s.headline}
            </span>
            <span className="tw:mt-3 tw:block tw:max-w-[42ch] tw:text-[14px]/[1.55] tw:text-white/85 tw:max-bsmd:mx-auto">
              {s.sub}
            </span>
            <span className="tw:mt-6 tw:flex tw:flex-wrap tw:gap-2.5 tw:max-bsmd:justify-center">
              <span
                className="tw:rounded-full tw:px-5 tw:py-2.5 tw:text-[13px] tw:font-semibold"
                style={{ background: t.solid, color: t.onSolid }}
              >
                {stage.primary}
              </span>
              <span className="tw:rounded-full tw:bg-white/10 tw:px-5 tw:py-2.5 tw:text-[13px] tw:font-semibold tw:ring-1 tw:ring-white/60 tw:backdrop-blur-sm">
                {stage.secondary}
              </span>
            </span>
            <span className="tw:mt-6 tw:flex tw:flex-wrap tw:gap-x-5 tw:gap-y-2 tw:text-[12px] tw:font-medium tw:text-white/85 tw:max-bsmd:justify-center">
              {stage.serviceSubs.map((x) => (
                <span key={x} className="tw:flex tw:items-center tw:gap-1.5">
                  <FiCheck className="tw:size-3.5 tw:[stroke-width:3]" /> {x}
                </span>
              ))}
            </span>
          </div>
          {/* estimate form, the way a real homepage shows it */}
          <div className="tw:rounded-[18px] tw:bg-white tw:p-5 tw:text-(--ink) tw:[box-shadow:0_26px_60px_-28px_rgba(0,0,0,0.6)] tw:max-bsmd:hidden">
            <b className="tw:block tw:text-[16px] tw:font-semibold tw:tracking-[-0.01em]">
              {stage.bookTitle}
            </b>
            <span className="tw:mt-0.5 tw:block tw:text-[11.5px] tw:text-(--muted)">
              {FORM[stage.widget].note}
            </span>
            <span className="tw:mt-3.5 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[11px]">
              {FORM[stage.widget].fields.map((f, k) => (
                <span
                  key={f}
                  className={cx(
                    "tw:grid tw:gap-1",
                    FORM[stage.widget].wideFirst && k === 0 && "tw:col-span-2",
                  )}
                >
                  <span className="tw:font-semibold tw:text-(--ink-2)">
                    {f}
                  </span>
                  <span className="tw:h-8 tw:rounded-[8px] tw:border tw:border-(--line) tw:bg-(--panel)" />
                </span>
              ))}
            </span>
            <span className="tw:mt-2 tw:grid tw:gap-1 tw:text-[11px]">
              <span className="tw:font-semibold tw:text-(--ink-2)">
                {FORM[stage.widget].select}
              </span>
              <span className="tw:flex tw:h-8 tw:items-center tw:justify-between tw:rounded-[8px] tw:border tw:border-(--line) tw:px-2.5 tw:text-[11.5px]">
                {s.book[0]} <FiChevronDown className="tw:text-(--muted)" />
              </span>
            </span>
            <span
              className="nwd-pulse tw:mt-3.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[10px] tw:py-2.5 tw:text-[13px] tw:font-semibold"
              style={{ background: t.solid, color: t.onSolid }}
            >
              {stage.confirm} <FiArrowRight className="tw:size-3.5" />
            </span>
          </div>
        </div>
      </div>
      {/* why-us strip */}
      <div className="tw:grid tw:grid-cols-3 tw:divide-x tw:divide-(--line) tw:border-t tw:border-(--line) tw:bg-white tw:py-5 tw:max-bssm:grid-cols-1 tw:max-bssm:divide-x-0">
        {s.services.map((x, i) => (
          <span
            key={x}
            className="tw:flex tw:items-center tw:gap-3 tw:px-7 tw:max-bssm:px-4 tw:max-bssm:not-first:hidden"
          >
            <span
              className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px]"
              style={{ background: t.soft, color: t.softText }}
            >
              {i === 1 ? <FiCheck /> : <Icon name={s.icon} />}
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[13.5px] tw:font-semibold">
                {x}
              </b>
              <span className="tw:block tw:truncate tw:text-[11.5px] tw:text-(--muted)">
                {stage.serviceSubs[i]}
              </span>
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

/** The same homepage as its responsive mobile version (owner, 26 Oct
    2026: "the desktop … hero section should be properly show the same
    version responsive design on mobile", heading lifted to the top): the
    photo hero with badge, headline, text, both buttons and the checks,
    stacked and centred, then the why-us items as rows. */
function PhotoPhone({
  stage,
  s,
  t,
}: {
  stage: SiteStageData;
  s: StageMode;
  t: BrandTone;
}) {
  return (
    <>
      <div className="tw:flex tw:items-center tw:justify-between tw:px-4 tw:pt-2.5 tw:text-[9px] tw:font-semibold">
        <span>9:41</span>
        <span className="tw:h-1 tw:w-10 tw:rounded-full tw:bg-[#0c1526]" />
        <span>5G</span>
      </div>
      <div className="tw:flex tw:items-center tw:gap-1.5 tw:px-3.5 tw:py-2">
        <span
          className="tw:grid tw:size-5 tw:place-items-center tw:rounded-[6px] tw:text-[10px]"
          style={{ background: t.solid, color: t.onSolid }}
        >
          <Icon name={s.icon} />
        </span>
        <b className="tw:truncate tw:text-[10.5px] tw:font-semibold">
          {stage.business}
        </b>
        <FiMenu className="tw:ml-auto tw:size-3.5 tw:flex-none" />
      </div>
      <div className="tw:relative tw:isolate tw:overflow-hidden tw:px-3 tw:pt-4 tw:pb-4 tw:text-center tw:text-white">
        <PhotoImg img={s.img!} sizes="200px" phone />
        <span className="tw:absolute tw:inset-0 tw:-z-1 tw:bg-[rgba(8,14,28,0.58)]" />
        <span className="tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-white/15 tw:px-2 tw:py-0.5 tw:text-[7.5px] tw:font-semibold tw:ring-1 tw:ring-white/30">
          <Icon name={s.icon} /> {s.badge}
        </span>
        <span className="tw:mt-2 tw:block tw:text-[14.5px] tw:leading-[1.1] tw:font-semibold tw:tracking-[-0.01em] tw:text-balance">
          {s.headline}
        </span>
        <span className="tw:mt-1.5 tw:block tw:text-[8.5px]/[1.45] tw:text-white/85">
          {s.sub}
        </span>
        <span className="tw:mt-2.5 tw:grid tw:gap-1.5 tw:px-2">
          <span
            className="tw:block tw:rounded-full tw:py-1.5 tw:text-[9px] tw:font-semibold"
            style={{ background: t.solid, color: t.onSolid }}
          >
            {stage.primary}
          </span>
          <span className="tw:block tw:rounded-full tw:bg-white/10 tw:py-1.5 tw:text-[9px] tw:font-semibold tw:ring-1 tw:ring-white/60">
            {stage.secondary}
          </span>
        </span>
        <span className="tw:mt-2.5 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-2 tw:gap-y-1 tw:text-[7.5px] tw:font-medium tw:text-white/85">
          {stage.serviceSubs.map((x) => (
            <span key={x} className="tw:flex tw:items-center tw:gap-0.5">
              <FiCheck className="tw:size-2.5 tw:[stroke-width:3]" /> {x}
            </span>
          ))}
        </span>
      </div>
      <div className="tw:mx-2.5 tw:mt-1.5 tw:grid tw:gap-1">
        {s.services.slice(0, 2).map((x, i) => (
          <span
            key={x}
            className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-1 tw:py-1.5"
          >
            <span
              className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[9px]"
              style={{ background: t.soft, color: t.softText }}
            >
              {i === 1 ? <FiCheck /> : <Icon name={s.icon} />}
            </span>
            <span className="tw:min-w-0 tw:leading-tight">
              <b className="tw:block tw:truncate tw:text-[9.5px] tw:font-semibold">
                {x}
              </b>
              <span className="tw:block tw:truncate tw:text-[8px] tw:text-(--muted)">
                {stage.serviceSubs[i]}
              </span>
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

export function SiteStage({
  tones,
  stage,
}: {
  tones: Tones;
  stage: SiteStageData;
}) {
  const [mode, setMode] = useState(0);
  const [auto, setAuto] = useState(true);
  const paused = useRef(false);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) setMode((m) => (m + 1) % 2);
    }, SWITCH_MS);
    return () => window.clearInterval(id);
  }, [auto]);

  const s = stage.modes[mode];
  const t = tones[mode]; // first mode = first colour, second = second
  const ink = tones[2];
  const photo = Boolean(stage.modes[0].img);

  return (
    <div
      className="tw:relative tw:mx-auto tw:w-full tw:max-w-[1100px]"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      {/* Mode switch */}
      <div
        role="group"
        aria-label={stage.switchLabel}
        className="tw:relative tw:z-3 tw:mx-auto tw:mb-[-22px] tw:flex tw:w-fit tw:gap-1 tw:rounded-full tw:bg-white tw:p-1.5 tw:[box-shadow:0_18px_40px_-20px_rgba(12,21,38,0.5)] tw:ring-1 tw:ring-(--line)"
      >
        {stage.modes.map((x, i) => {
          const on = i === mode;
          return (
            <button
              key={x.label}
              type="button"
              aria-pressed={on}
              onClick={() => {
                setMode(i);
                setAuto(false);
              }}
              className="tw:flex tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-full tw:border-0 tw:px-4 tw:py-2 tw:text-[13.5px] tw:font-semibold tw:transition tw:duration-300 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:max-bssm:px-3 tw:max-bssm:text-[12.5px]"
              style={
                on
                  ? { background: tones[i].solid, color: tones[i].onSolid }
                  : { background: "transparent", color: "var(--muted)" }
              }
            >
              <Icon name={x.icon} /> {x.label}
            </button>
          );
        })}
      </div>

      <div className="tw:flex tw:items-end">
        {/* Browser */}
        <div
          className="tw:relative tw:min-w-0 tw:flex-1 tw:overflow-hidden tw:rounded-[26px] tw:bg-white tw:[box-shadow:0_40px_90px_-50px_rgba(12,21,38,0.55)] tw:ring-1 tw:ring-(--line) tw:max-bssm:rounded-[20px]"
          aria-hidden="true"
        >
          <div className="tw:flex tw:items-center tw:gap-3 tw:border-b tw:border-(--line) tw:bg-(--panel) tw:px-5 tw:pt-7 tw:pb-3 tw:max-bssm:px-3">
            <span className="tw:flex tw:gap-1.5">
              <span className="tw:size-2.5 tw:rounded-full tw:bg-[#fda4af]" />
              <span className="tw:size-2.5 tw:rounded-full tw:bg-[#fcd34d]" />
              <span className="tw:size-2.5 tw:rounded-full tw:bg-[#86efac]" />
            </span>
            <span className="tw:flex tw:min-w-0 tw:flex-1 tw:items-center tw:gap-2 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-medium tw:text-(--muted)">
              <FiLock className="tw:size-3 tw:flex-none" />
              <span className="tw:truncate">{stage.domain}</span>
            </span>
            <span className="tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:text-(--muted)">
              Example
            </span>
          </div>

          {/* Example site */}
          <div key={s.label} className="nwd-swap">
            {s.img ? (
              <PhotoSite stage={stage} s={s} t={t} ink={ink} />
            ) : (
              <>
                {/* site header */}
                <div className="tw:flex tw:items-center tw:gap-4 tw:px-8 tw:py-3.5 tw:max-bssm:px-4">
                  <span className="tw:flex tw:items-center tw:gap-2">
                    <span
                      className="tw:grid tw:size-8 tw:place-items-center tw:rounded-[10px] tw:text-[15px] tw:transition-colors tw:duration-500"
                      style={{ background: t.solid, color: t.onSolid }}
                    >
                      <Icon name={s.icon} />
                    </span>
                    <b className="tw:text-[15px] tw:font-semibold">
                      {stage.business}
                    </b>
                  </span>
                  <span className="tw:ml-auto tw:flex tw:gap-5 tw:text-[12.5px] tw:font-medium tw:text-(--muted) tw:max-bsmd:hidden">
                    {stage.nav.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </span>
                  <span
                    className="tw:relative tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-semibold tw:max-bsmd:ml-auto"
                    style={{ background: t.solid, color: t.onSolid }}
                  >
                    <FiPhone className="tw:size-3.5" /> {stage.call}
                    <Marker
                      n={1}
                      t={ink}
                      className="tw:absolute tw:-top-2 tw:-right-2"
                    />
                  </span>
                </div>

                {/* site hero */}
                <div
                  className="tw:grid tw:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] tw:items-center tw:gap-7 tw:px-8 tw:py-7 tw:bslg:pr-16 tw:max-bsmd:grid-cols-1 tw:max-bssm:px-4 tw:max-bssm:py-5"
                  style={{
                    background: `linear-gradient(120deg, ${t.soft} 0%, #ffffff 78%)`,
                  }}
                >
                  <div>
                    <span
                      className="tw:relative tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold"
                      style={{ color: t.softText }}
                    >
                      <Icon name={s.icon} /> {s.badge}
                      <Marker
                        n={2}
                        t={ink}
                        className="tw:absolute tw:-top-2 tw:-right-2"
                      />
                    </span>
                    <span className="tw:mt-3 tw:block tw:text-[clamp(22px,2.4vw,34px)] tw:leading-[1.1] tw:font-semibold tw:tracking-[-0.02em] tw:text-balance">
                      {s.headline}
                    </span>
                    <span className="tw:mt-2.5 tw:block tw:max-w-[44ch] tw:text-[13.5px]/[1.55] tw:text-(--text)">
                      {s.sub}
                    </span>
                    <span className="tw:mt-4 tw:flex tw:flex-wrap tw:gap-2">
                      <span
                        className="tw:rounded-full tw:px-4 tw:py-2 tw:text-[13px] tw:font-semibold"
                        style={{ background: t.solid, color: t.onSolid }}
                      >
                        {stage.primary}
                      </span>
                      <span className="tw:rounded-full tw:bg-white tw:px-4 tw:py-2 tw:text-[13px] tw:font-semibold tw:ring-1 tw:ring-(--line)">
                        {stage.secondary}
                      </span>
                    </span>
                    <span className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:text-[12px] tw:text-(--muted)">
                      <Stars /> {stage.proof}
                    </span>
                  </div>

                  {/* conversion widget: booking, quote, dispatch, case or valuation */}
                  <Widget stage={stage} s={s} t={t} ink={ink} />
                </div>
              </>
            )}

            {/* services strip */}
            {s.img ? null : (
              <div className="tw:grid tw:grid-cols-3 tw:gap-3 tw:px-8 tw:pt-1 tw:pb-7 tw:bslg:pr-16 tw:max-bssm:grid-cols-1 tw:max-bssm:px-4 tw:max-bssm:pb-5">
                {s.services.map((x, i) => (
                  <span
                    key={x}
                    className="tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-(--panel) tw:px-3.5 tw:py-3 tw:max-bssm:hidden tw:max-bssm:first:flex"
                  >
                    <span
                      className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[15px]"
                      style={{ color: i === 1 ? ink.solid : t.solid }}
                    >
                      {i === 1 ? <FiCheck /> : <Icon name={s.icon} />}
                    </span>
                    <span className="tw:min-w-0 tw:leading-tight">
                      <b className="tw:block tw:truncate tw:text-[13px] tw:font-semibold">
                        {x}
                      </b>
                      <span className="tw:block tw:truncate tw:text-[11.5px] tw:text-(--muted)">
                        {stage.serviceSubs[i]}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Phone version */}
        <div
          className="tw:relative tw:z-2 tw:mb-[-34px] tw:ml-[-44px] tw:w-[200px] tw:flex-none tw:rounded-[32px] tw:bg-[#0c1526] tw:p-1.5 tw:[box-shadow:0_30px_60px_-24px_rgba(12,21,38,0.6)] tw:max-bslg:hidden"
          aria-hidden="true"
        >
          <div
            key={`m${s.label}`}
            className={`nwd-swap tw:relative tw:overflow-hidden tw:rounded-[27px] tw:bg-white ${s.img ? "tw:h-[420px]" : "tw:h-[330px]"}`}
          >
            {s.img ? (
              <PhotoPhone stage={stage} s={s} t={t} />
            ) : (
              <>
                <div className="tw:flex tw:items-center tw:justify-between tw:px-4 tw:pt-2.5 tw:text-[9px] tw:font-semibold">
                  <span>9:41</span>
                  <span className="tw:h-1 tw:w-10 tw:rounded-full tw:bg-[#0c1526]" />
                  <span>5G</span>
                </div>
                <div className="tw:flex tw:items-center tw:gap-1.5 tw:px-3.5 tw:pt-2.5">
                  <span
                    className="tw:grid tw:size-5 tw:place-items-center tw:rounded-[6px] tw:text-[10px]"
                    style={{ background: t.solid, color: t.onSolid }}
                  >
                    <Icon name={s.icon} />
                  </span>
                  <b className="tw:text-[11px] tw:font-semibold">
                    {stage.business}
                  </b>
                </div>
                <div
                  className="tw:mx-2.5 tw:mt-2.5 tw:rounded-[16px] tw:p-3"
                  style={{ background: t.soft }}
                >
                  <span
                    className="tw:text-[9.5px] tw:font-semibold"
                    style={{ color: t.softText }}
                  >
                    {s.badge}
                  </span>
                  <span className="tw:mt-1 tw:block tw:text-[14px] tw:leading-[1.15] tw:font-semibold">
                    {s.headline}
                  </span>
                  <span
                    className="tw:mt-2.5 tw:block tw:rounded-full tw:py-1.5 tw:text-center tw:text-[10.5px] tw:font-semibold"
                    style={{ background: t.solid, color: t.onSolid }}
                  >
                    {stage.primary}
                  </span>
                </div>
              </>
            )}
            {s.img ? null : (
              <div className="tw:mx-2.5 tw:mt-2 tw:grid tw:gap-1.5">
                {s.services.slice(0, 2).map((x) => (
                  <span
                    key={x}
                    className="tw:flex tw:items-center tw:justify-between tw:rounded-[10px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5 tw:text-[10px] tw:font-semibold"
                  >
                    {x} <FiCheck style={{ color: t.solid }} />
                  </span>
                ))}
              </div>
            )}
            {/* sticky call bar */}
            <div className="tw:absolute tw:inset-x-2.5 tw:bottom-2.5 tw:grid tw:grid-cols-2 tw:gap-1.5">
              <span
                className="tw:relative tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-2 tw:text-[10.5px] tw:font-semibold"
                style={{ background: t.solid, color: t.onSolid }}
              >
                <FiPhone className="tw:size-3" /> Call now
                {s.img ? null : (
                  <Marker
                    n={4}
                    t={ink}
                    className="tw:absolute tw:-top-2 tw:-left-1"
                  />
                )}
              </span>
              <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:py-2 tw:text-[10.5px] tw:font-semibold">
                <FiCalendar className="tw:size-3" /> {stage.phoneCta}
              </span>
            </div>
            {/* booking toast */}
            <span className="nwd-toast tw:absolute tw:inset-x-2.5 tw:top-8 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-[#0c1526] tw:px-2.5 tw:py-2 tw:text-[10px] tw:font-semibold tw:text-white">
              <span
                className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full"
                style={{ background: t.solid, color: t.onSolid }}
              >
                <FiCheck className="tw:size-3 tw:[stroke-width:3]" />
              </span>
              <span className="tw:leading-tight">
                {stage.toast}
                <span className="tw:block tw:font-medium tw:text-white/70">
                  {s.book[0]} · {stage.toastNote}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* What the markers point to (check chips in the photo look) */}
      <ul className="tw:mt-14 tw:flex tw:flex-wrap tw:justify-center tw:gap-x-6 tw:gap-y-3 tw:max-bslg:mt-6">
        {stage.legend.map((l, i) => (
          <li
            key={l}
            className={`tw:flex tw:items-center tw:gap-2 tw:text-[14px] tw:font-medium tw:text-(--ink-2) ${i === 3 ? "tw:max-bslg:hidden" : ""}`}
          >
            {photo ? (
              <FiCheck
                className="tw:size-5 tw:flex-none tw:rounded-full tw:p-[4px] tw:[stroke-width:3]"
                style={{ background: ink.soft, color: ink.softText }}
              />
            ) : (
              <Marker n={i + 1} t={ink} />
            )}
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
