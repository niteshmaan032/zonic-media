import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  FiCheck,
  FiFileText,
  FiLock,
  FiMenu,
  FiMonitor,
  FiPhone,
  FiSend,
  FiSmartphone,
  FiTablet,
  FiZap,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import type { DelawareData } from "./types";
import { CARD, Fill, Flip, Slot, TICK_AT, inAt, run } from "./uiBits";
import { photoAlt } from "@/components/rd/photoAlt";

/* UI for the Delaware web design draft only (22 Oct 2026): none of these is
   used on the other Delaware drafts (owner: no shared UI between pages).
   Feature panels (responsive devices, speed scores, lead form), the four
   process steps, the mobile-site phone, the launch report on the dark card
   and the before/after tiles. Illustrations: "Your Business". */

/* ------------------------------------------------------- shared shapes */

/** A tiny homepage: header, hero with a button, three tiles. */
function MiniSite({ compact }: { compact?: boolean }) {
  return (
    <div className="tw:grid tw:gap-1.5">
      <div className="tw:flex tw:items-center tw:justify-between">
        <i className="tw:block tw:h-2 tw:w-10 tw:rounded-full tw:bg-(--ink)" />
        {compact ? (
          <FiMenu className="tw:size-3 tw:text-(--muted)" />
        ) : (
          <span className="tw:flex tw:gap-1.5">
            {[0, 1, 2].map((n) => (
              <i
                key={n}
                className="tw:block tw:h-1.5 tw:w-6 tw:rounded-full tw:bg-[#dfe5ee]"
              />
            ))}
          </span>
        )}
      </div>
      <div
        className={cx(
          "tw:grid tw:gap-1.5 tw:rounded-[8px] tw:bg-[linear-gradient(120deg,#1d4ed8,#7c3aed)] tw:p-2.5",
          compact ? "tw:h-[74px]" : "tw:h-[96px]",
        )}
      >
        <i className="tw:block tw:h-2 tw:w-3/4 tw:rounded-full tw:bg-white/90" />
        <i className="tw:block tw:h-2 tw:w-1/2 tw:rounded-full tw:bg-white/70" />
        <span className="tw:mt-auto tw:w-fit tw:rounded-full tw:bg-(--gold) tw:px-2 tw:py-0.5 tw:text-[8px] tw:font-bold tw:text-(--ink)">
          Get a quote
        </span>
      </div>
      <div
        className={cx(
          "tw:grid tw:gap-1.5",
          compact ? "tw:grid-cols-1" : "tw:grid-cols-3",
        )}
      >
        {[0, 1, 2].slice(0, compact ? 2 : 3).map((n) => (
          <span
            key={n}
            className="tw:grid tw:gap-1 tw:rounded-[6px] tw:bg-(--panel) tw:p-1.5"
          >
            <i className="tw:block tw:size-2.5 tw:rounded-full tw:bg-(--blue)/40" />
            <i className="tw:block tw:h-1 tw:w-4/5 tw:rounded-full tw:bg-[#dfe5ee]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------ feature panels */

/** The same homepage on a desktop browser and a phone, phone first. */
export function DevicesUi() {
  return (
    <div className="tw:relative tw:w-full tw:max-w-[440px] tw:pb-6 tw:pr-10">
      <div className={cx(UI_CARD, "tw:overflow-hidden")} style={inAt(2)}>
        <div className="tw:flex tw:items-center tw:gap-1.5 tw:border-b tw:border-(--line) tw:bg-(--panel) tw:px-3 tw:py-2">
          <i className="tw:size-2 tw:rounded-full tw:bg-[#ff6159]" />
          <i className="tw:size-2 tw:rounded-full tw:bg-[#ffbd2e]" />
          <i className="tw:size-2 tw:rounded-full tw:bg-[#28c840]" />
          <span className="tw:ml-2 tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[10px] tw:text-(--muted)">
            <FiLock className="tw:size-2.5 tw:text-(--green)" />{" "}
            yourbusiness.com
          </span>
        </div>
        <div className="tw:p-3.5">
          <MiniSite />
        </div>
      </div>
      <div
        className="tw:absolute tw:right-0 tw:-bottom-2 tw:w-[118px] tw:rounded-[22px] tw:border-[5px] tw:border-(--ink) tw:bg-white tw:p-2 tw:[box-shadow:var(--lift)]"
        style={inAt(1)}
      >
        <MiniSite compact />
        <span className="tw:mt-1.5 tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--green) tw:py-1 tw:text-[8px] tw:font-bold tw:text-white">
          <FiPhone className="tw:size-2.5" /> Call now
        </span>
      </div>
      <ul className="tw:mt-3 tw:flex tw:gap-1.5" aria-hidden="true">
        {[
          { icon: <FiSmartphone />, t: "Phone" },
          { icon: <FiTablet />, t: "Tablet" },
          { icon: <FiMonitor />, t: "Desktop" },
        ].map((d, i) => (
          <li key={d.t} style={inAt(i + 3)}>
            <Chip tone="green">
              {d.icon} {d.t} <FiCheck />
            </Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SCORES: [string, number][] = [
  ["Performance", 96],
  ["Accessibility", 94],
  ["Best practices", 100],
  ["SEO", 100],
];

/** Four speed and quality scores drawing up, plus Core Web Vitals. */
export function LighthouseUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiZap />}
        tone="green"
        title="Launch speed test"
        right={<Chip tone="blue">Mobile</Chip>}
      />
      <ul className="tw:mt-5 tw:grid tw:grid-cols-4 tw:gap-2">
        {SCORES.map(([label, score]) => {
          const gap = 1 - score / 100;
          return (
            <li
              key={label}
              className="tw:grid tw:justify-items-center tw:gap-1.5 tw:text-center"
            >
              <span className="tw:relative tw:grid tw:size-[64px] tw:place-items-center tw:max-bssm:size-14">
                <svg
                  viewBox="0 0 60 60"
                  className="tw:absolute tw:inset-0 tw:-rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="#e7f6ec"
                    stroke="#cdebd6"
                    strokeWidth="5"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="1"
                    style={
                      {
                        stroke: "var(--green)",
                        strokeDashoffset: gap,
                        "--g": gap,
                        ...run("de-gauge"),
                      } as CSSProperties
                    }
                  />
                </svg>
                <b className="tw:relative tw:text-[17px] tw:text-[#1f7a3a]">
                  {score}
                </b>
              </span>
              <span className="tw:text-[11px]/[1.2] tw:font-medium tw:text-(--ink-2)">
                {label}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="tw:mt-5 tw:rounded-[14px] tw:bg-(--panel) tw:p-3">
        <p className="tw:text-[11px] tw:font-semibold tw:tracking-[0.1em] tw:text-(--muted) tw:uppercase">
          Core Web Vitals
        </p>
        <ul className="tw:mt-2 tw:grid tw:grid-cols-3 tw:gap-2">
          {[
            ["LCP", "1.4 s"],
            ["INP", "90 ms"],
            ["CLS", "0.01"],
          ].map(([k, v], i) => (
            <li
              key={k}
              className="tw:rounded-[10px] tw:bg-white tw:px-2.5 tw:py-2"
              style={inAt(i + 4)}
            >
              <span className="tw:block tw:text-[10.5px] tw:font-semibold tw:text-(--muted)">
                {k}
              </span>
              <b className="tw:text-[14px] tw:text-[#1f7a3a]">{v}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** A short quote form filling in, submitting, and landing as a lead. */
export function LeadFormUi() {
  return (
    <div className="tw:relative tw:w-full tw:max-w-[400px] tw:pb-8">
      <div className={cx(CARD, "tw:max-w-none")}>
        <UiHead
          icon={<FiFileText />}
          title="Request a free quote"
          right={<Chip tone="muted">3 fields</Chip>}
        />
        <div className="tw:mt-4 tw:grid tw:gap-2.5">
          {[
            ["Name", "Jordan Lee"],
            ["Phone", "(302) 555-0175"],
            ["Service", "Bathroom remodel"],
          ].map(([label, value], i) => (
            <label
              key={label}
              className="tw:grid tw:gap-1 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)"
            >
              {label}
              <span className="tw:flex tw:h-9 tw:items-center tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:text-[13px] tw:font-medium tw:text-(--ink)">
                <span
                  className="tw:inline-block tw:overflow-hidden tw:whitespace-nowrap"
                  style={{ maxWidth: 220, ...run(`de-in-${i + 1}`) }}
                >
                  {value}
                </span>
              </span>
            </label>
          ))}
          <span className="tw:mt-1 tw:flex tw:h-10 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:bg-(--blue) tw:text-[13px] tw:font-semibold tw:text-white">
            <FiSend className="tw:size-3.5" /> Send my request
          </span>
        </div>
      </div>
      <div
        className="tw:absolute tw:right-3 tw:bottom-0 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[16px] tw:bg-(--ink) tw:py-2.5 tw:pr-4 tw:pl-2.5 tw:text-white tw:[box-shadow:var(--lift)]"
        style={run("de-late")}
      >
        <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--green)">
          <FiCheck className="tw:[stroke-width:3]" />
        </span>
        <span>
          <b className="tw:block tw:text-[12.5px]">New quote request</b>
          <span className="tw:text-[11px] tw:text-white/70">
            Tracked · sent to your inbox
          </span>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const TEARDOWN: [string, string][] = [
  ["Slow on mobile", "6.8 s"],
  ["No call button up top", "Missing"],
  ["Duplicate page titles", "12 pages"],
];

const SITEMAP = ["Services", "Locations", "About", "Contact"];

const DEVICES = ["iPhone", "Android", "iPad", "Desktop"];

const REDIRECTS: [string, string][] = [
  ["/services.html", "/services/"],
  ["/about-us.php", "/about/"],
  ["/contact-page", "/contact/"],
];

/** Web design process UIs: teardown, sitemap, device tests, redirect map. */
export function webStepUis(process: DelawareData["process"]): ReactNode[] {
  const [, s2, s3, s4] = process.steps;
  return [
    <Slot key="web-teardown">
      <UiHead
        icon={<FiMonitor />}
        title="Current site teardown"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Reviewing…</Chip>}
            to={<Chip tone="red">3 blockers</Chip>}
          />
        }
      />
      <div className="tw:relative tw:h-[84px] tw:overflow-hidden tw:rounded-[12px] tw:border tw:border-(--line) tw:p-2">
        <div className="tw:opacity-60">
          <MiniSite />
        </div>
        {[
          { l: "12%", t: "8%", n: 1 },
          { l: "70%", t: "38%", n: 2 },
          { l: "40%", t: "70%", n: 3 },
        ].map((pin, i) => (
          <b
            key={pin.n}
            className="tw:absolute tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-[10px] tw:text-white tw:ring-2 tw:ring-white"
            style={{ left: pin.l, top: pin.t, ...inAt(i + 2) }}
          >
            {pin.n}
          </b>
        ))}
      </div>
      <ul className="tw:grid tw:gap-1">
        {TEARDOWN.map(([issue, val], i) => (
          <li
            key={issue}
            className="tw:flex tw:items-center tw:gap-2 tw:text-[11.5px] tw:font-medium"
          >
            <b className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-[9px] tw:text-white">
              {i + 1}
            </b>
            {issue}
            <span className="tw:ml-auto tw:text-(--muted)">{val}</span>
          </li>
        ))}
      </ul>
    </Slot>,

    <Slot key="web-sitemap">
      <UiHead
        icon={<FiFileText />}
        tone="gold"
        title="Sitemap"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <div className="tw:grid tw:justify-items-center tw:gap-2">
        <span
          className="tw:rounded-[10px] tw:bg-(--ink) tw:px-4 tw:py-1.5 tw:text-[12px] tw:font-semibold tw:text-white"
          style={inAt(1)}
        >
          Home
        </span>
        <span className="tw:h-3 tw:w-px tw:bg-[#c9d3e3]" />
        <div className="tw:relative tw:grid tw:w-full tw:grid-cols-4 tw:gap-1.5 tw:before:absolute tw:before:-top-2 tw:before:right-[12.5%] tw:before:left-[12.5%] tw:before:border-t tw:before:border-[#c9d3e3] tw:before:content-['']">
          {SITEMAP.map((page, i) => (
            <span
              key={page}
              className="tw:grid tw:gap-1 tw:rounded-[10px] tw:bg-(--panel) tw:px-1.5 tw:py-2 tw:text-center tw:text-[10.5px] tw:font-semibold"
              style={inAt(i + 2)}
            >
              {page}
              <i className="tw:mx-auto tw:block tw:h-1 tw:w-3/4 tw:rounded-full tw:bg-[#dfe5ee]" />
              <i className="tw:mx-auto tw:block tw:h-1 tw:w-1/2 tw:rounded-full tw:bg-[#dfe5ee]" />
            </span>
          ))}
        </div>
        <span className="tw:text-[11px] tw:text-(--muted)">
          Keyword mapped to every page
        </span>
      </div>
    </Slot>,

    <Slot key="web-tests">
      <UiHead
        icon={<FiSmartphone />}
        tone="green"
        title="Device tests"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_repeat(3,44px)] tw:gap-x-2 tw:gap-y-1.5 tw:text-[11.5px]">
        <span />
        {["Layout", "Speed", "Forms"].map((c) => (
          <span
            key={c}
            className="tw:text-center tw:text-[10px] tw:font-semibold tw:text-(--muted) tw:uppercase"
          >
            {c}
          </span>
        ))}
        {DEVICES.map((d, row) => (
          <span key={d} className="tw:contents">
            <span className="tw:rounded-[8px] tw:bg-(--panel) tw:px-2.5 tw:py-1.5 tw:font-medium">
              {d}
            </span>
            {[0, 1, 2].map((col) => (
              <span key={col} className="tw:grid tw:place-items-center">
                <span
                  className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:text-[10px] tw:text-white"
                  style={{
                    background: "var(--green)",
                    ...run(TICK_AT[Math.min(row, 3)]),
                  }}
                >
                  <FiCheck className="tw:[stroke-width:3.5]" />
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </Slot>,

    <Slot key="web-redirects">
      <UiHead
        icon={<FiZap />}
        title="Launch & redirects"
        right={
          <Flip
            n={3}
            from={<Chip tone="amber">Staging</Chip>}
            to={<Chip tone="green">● Live</Chip>}
          />
        }
      />
      <ul className="tw:grid tw:gap-1.5">
        {REDIRECTS.map(([from, to], i) => (
          <li
            key={from}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-[11px]"
          >
            <span className="tw:truncate tw:text-(--muted) tw:line-through">
              {from}
            </span>
            <span className="tw:text-(--muted)">→</span>
            <span className="tw:truncate tw:font-medium">{to}</span>
            <span className="tw:ml-auto">
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={<Chip tone="muted">Pending</Chip>}
                to={<Chip tone="green">301</Chip>}
              />
            </span>
          </li>
        ))}
      </ul>
      <div className="tw:flex tw:flex-wrap tw:gap-1.5">
        {(s4?.chips ?? []).map((chip) => (
          <Chip key={chip} tone="blue">
            {chip}
          </Chip>
        ))}
      </div>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A visitor on the mobile site: hero, services, the sticky call bar and
    the quote request landing. Decorative (the frame is aria-hidden). */
export function WebSitePhone({ image }: { image: { src: string } }) {
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:pt-[38px] tw:text-(--ink)">
        <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:px-4 tw:py-2">
          <b className="tw:text-[13px]">Your Business</b>
          <FiMenu className="tw:size-4 tw:text-(--muted)" />
        </div>
        <div className="tw:relative tw:mx-3 tw:mt-3 tw:h-[150px] tw:overflow-hidden tw:rounded-[16px]">
          <Image
            src={image.src}
            alt={photoAlt(image.src)}
            fill
            sizes="260px"
            className="tw:object-cover"
          />
          <span className="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:justify-end tw:gap-1 tw:bg-linear-to-t tw:from-black/75 tw:to-transparent tw:p-3 tw:text-white">
            <b className="tw:text-[14px]/[1.2]">
              Trusted local service across Delaware
            </b>
            <span className="tw:mt-1 tw:w-fit tw:rounded-full tw:bg-(--gold) tw:px-2.5 tw:py-0.5 tw:text-[10.5px] tw:font-bold tw:text-(--ink)">
              Get a free quote
            </span>
          </span>
        </div>
        <ul className="tw:mt-3 tw:grid tw:gap-1.5 tw:px-3">
          {["Repairs & installs", "Free estimates", "Same-week visits"].map(
            (t, i) => (
              <li
                key={t}
                className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
                style={inAt(i + 1)}
              >
                <FiCheck className="tw:size-3.5 tw:text-(--green)" />
                {t}
              </li>
            ),
          )}
        </ul>
        <div
          className="tw:absolute tw:inset-x-3 tw:bottom-12 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-white tw:px-3 tw:py-2.5 tw:[box-shadow:var(--lift)]"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-7 tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-(--green)">
            <FiCheck className="tw:[stroke-width:3]" />
          </span>
          <span className="tw:text-[11.5px]/[1.3]">
            <b className="tw:block">Quote request sent</b>
            <span className="tw:text-(--muted)">from the mobile homepage</span>
          </span>
        </div>
        <div className="tw:absolute tw:inset-x-0 tw:bottom-0 tw:flex tw:gap-2 tw:border-t tw:border-(--line) tw:bg-white tw:px-3 tw:py-2.5">
          <span className="tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--green) tw:py-2 tw:text-[11.5px] tw:font-bold tw:text-white">
            <FiPhone className="tw:size-3" /> Call now
          </span>
          <span className="tw:flex tw:flex-1 tw:items-center tw:justify-center tw:rounded-full tw:border tw:border-(--line) tw:py-2 tw:text-[11.5px] tw:font-semibold">
            Get a quote
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

/** Launch report for the dark card: the live site, its three headline
    numbers and four quality scores as rings. Decorative. */
export function BuildReportUi({
  console: c,
}: {
  console: DelawareData["band"]["console"];
}) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:overflow-hidden tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-4 tw:py-3">
        <FiLock className="tw:size-3.5 tw:text-(--green)" />
        <span className="tw:text-[12.5px] tw:text-(--muted)">
          yourbusiness.com
        </span>
        <Chip tone="green" className="tw:ml-auto">
          ● Live · {c.tag}
        </Chip>
      </div>
      <div className="tw:p-5 tw:max-bssm:p-4">
        <b className="tw:text-[15px]">{c.title}</b>
        <ul className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-2">
          {c.metrics.map((m, i) => (
            <li
              key={m.label}
              className="tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-3 tw:text-center"
              style={inAt(i + 1)}
            >
              <b className="tw:block tw:text-[24px] tw:leading-none tw:tracking-[-0.03em] tw:text-(--blue) tw:max-bssm:text-[20px]">
                {m.strong}
              </b>
              <span className="tw:mt-1.5 tw:block tw:text-[11px]/[1.3] tw:text-(--muted)">
                {m.label}
              </span>
            </li>
          ))}
        </ul>
        <ul className="tw:mt-4 tw:grid tw:grid-cols-4 tw:gap-2 tw:rounded-[16px] tw:bg-(--panel) tw:p-3">
          {c.bars.map((b) => {
            const gap = 1 - b.val / 100;
            return (
              <li
                key={b.label}
                className="tw:grid tw:justify-items-center tw:gap-1 tw:text-center"
              >
                <span className="tw:relative tw:grid tw:size-12 tw:place-items-center">
                  <svg
                    viewBox="0 0 60 60"
                    className="tw:absolute tw:inset-0 tw:-rotate-90"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="24"
                      fill="none"
                      stroke="#dfe5ee"
                      strokeWidth="6"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="24"
                      fill="none"
                      strokeWidth="6"
                      strokeLinecap="round"
                      pathLength={1}
                      strokeDasharray="1"
                      style={
                        {
                          stroke:
                            b.tone === "gold" ? "var(--gold)" : "var(--blue)",
                          strokeDashoffset: gap,
                          "--g": gap,
                          ...run("de-gauge"),
                        } as CSSProperties
                      }
                    />
                  </svg>
                  <b className="tw:text-[12px]">{b.val}</b>
                </span>
                <span className="tw:text-[10px]/[1.2] tw:font-medium tw:text-(--ink-2)">
                  {b.label}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
          {c.pills.map((p) => (
            <Chip key={p.text} tone="blue">
              {p.text}
            </Chip>
          ))}
        </p>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- scorecard */

/** Before / after as four tiles: the new score large, the old one struck. */
export function ScoreTilesUi({
  rows,
}: {
  rows: DelawareData["compare"]["scoreRows"];
}) {
  return (
    <ul className="tw:grid tw:grid-cols-2 tw:gap-3" aria-hidden="true">
      {rows.map((row, i) => (
        <li
          key={row.label}
          className="tw:rounded-[18px] tw:bg-(--panel) tw:p-4"
          style={inAt(i + 1)}
        >
          <span className="tw:block tw:text-[12.5px]/[1.3] tw:font-medium tw:text-(--ink-2)">
            {row.label}
          </span>
          <b className="tw:mt-2 tw:block tw:text-[34px] tw:leading-none tw:tracking-[-0.03em] tw:text-(--blue)">
            {row.after}
          </b>
          <span className="tw:mt-1 tw:block tw:text-[12px] tw:text-(--muted)">
            from <s>{row.before}</s>
          </span>
          <Fill w={row.after} className="tw:mt-3 tw:h-1.5 tw:bg-white" />
        </li>
      ))}
    </ul>
  );
}
