"use client";

import type { ReactNode, Ref } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiExternalLink,
  FiGlobe,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { MdVerified } from "react-icons/md";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { span, useInView, useTimeline } from "./hooks";

/* ---------------------------------------------------------------------------
   Feature-row demos (replace the reference page's demo videos). Each is a
   white UI card on a sky panel, driven by a looping timeline that only runs
   on screen. The server render and reduced-motion view show the finished
   state. Business names are fictional; no prices or invented results.
--------------------------------------------------------------------------- */

/** Sky panel + white card, sized like the reference page's demo frames. */
export function DemoFrame({
  label,
  children,
  frameRef,
  className = "tw:max-bssm:min-h-0",
}: {
  label: string;
  children: ReactNode;
  frameRef?: Ref<HTMLDivElement>;
  /** Phone min-height; the steps band keeps one height for all panels. */
  className?: string;
}) {
  return (
    <div
      ref={frameRef}
      role="img"
      aria-label={label}
      className={cx(
        "cg-panel tw:grid tw:min-h-[470px] tw:place-items-center tw:rounded-[20px] tw:p-[clamp(14px,4.4vw,56px)]",
        className,
      )}
    >
      <div className="tw:w-full tw:max-w-[560px] tw:rounded-[18px] tw:bg-white tw:p-5 tw:text-(--ink) tw:[box-shadow:0_30px_60px_-30px_rgba(6,48,90,0.55)] tw:max-bssm:p-4">
        {children}
      </div>
    </div>
  );
}

function CardHead({ title, aside }: { title: string; aside?: ReactNode }) {
  return (
    <div className="tw:mb-4 tw:flex tw:items-center tw:justify-between tw:gap-3">
      <b className="tw:text-[15px] tw:font-medium">{title}</b>
      {aside}
    </div>
  );
}

function Tick({ on, size = "md" }: { on: boolean; size?: "sm" | "md" }) {
  return (
    <span
      className={cx(
        "tw:grid tw:flex-none tw:place-items-center tw:rounded-full tw:transition tw:duration-300",
        size === "sm" ? "tw:size-4 tw:text-[10px]" : "tw:size-5 tw:text-[11px]",
        on ? "tw:bg-(--green) tw:text-white" : "tw:bg-(--panel) tw:text-transparent",
      )}
      aria-hidden="true"
    >
      <FiCheck className="tw:[stroke-width:3.5]" />
    </span>
  );
}

const typed = (text: string, t: number, from: number, ms = 45) =>
  text.slice(0, Math.max(0, Math.floor((t - from) / ms)));

/* ------------------------------------------------------------ 1 · claim */

const CLAIM_MS = 10000;

export function ClaimUi() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const { t } = useTimeline(CLAIM_MS, inView);
  const phase = t < 3000 ? 0 : t < 5600 ? 1 : t < 7400 ? 2 : 3;
  const labels = ["Find", "Verify", "Review", "Live"];

  return (
    <DemoFrame
      frameRef={ref}
      label="Example: claiming and verifying a business profile in ChatGPT's Business Hub"
    >
      <CardHead
        title="Claim your business"
        aside={
          <span className="tw:flex tw:items-center tw:gap-1.5">
            {labels.map((l, i) => (
              <span
                key={l}
                className={cx(
                  "tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:transition tw:max-bssm:hidden",
                  i === phase
                    ? "tw:bg-(--ink) tw:text-white"
                    : i < phase
                      ? "tw:bg-(--green-soft) tw:text-[#1e7a3a]"
                      : "tw:bg-(--panel) tw:text-(--muted)",
                )}
              >
                {l}
              </span>
            ))}
            <span className="tw:text-[12px] tw:text-(--muted) tw:bssm:hidden">
              Step {phase + 1} of 4
            </span>
          </span>
        }
      />
      <div className="tw:relative tw:h-[250px]">
        {phase === 0 ? <ClaimFind t={t} /> : null}
        {phase === 1 ? <ClaimVerify t={t} /> : null}
        {phase === 2 ? <ClaimReview t={t} /> : null}
        {phase === 3 ? <ClaimLive /> : null}
      </div>
    </DemoFrame>
  );
}

function ClaimFind({ t }: { t: number }) {
  const q = typed("Bluebird Plumbing", t, 300);
  const results = t >= 1300;
  const picked = t >= 2200;
  const rows = [
    { name: "Bluebird Plumbing", initials: "BP", place: "Plumber · Dover, DE" },
    { name: "Bluebird Pool & Spa", initials: "BS", place: "Pool service · Wilmington, DE" },
  ];
  return (
    <div className="cg-in">
      <p className="tw:mb-2 tw:text-[13px] tw:text-(--muted)">
        Search for your business
      </p>
      <div className="tw:flex tw:h-11 tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:px-3.5 tw:ring-1 tw:ring-(--line)">
        <FiSearch className="tw:text-(--muted)" aria-hidden="true" />
        <span className="tw:text-[14px]">
          {q}
          <i className="tw:ml-0.5 tw:inline-block tw:h-4 tw:w-px tw:translate-y-0.5 tw:bg-(--ink)" />
        </span>
      </div>
      {results ? (
        <ul className="tw:mt-3 tw:grid tw:gap-2">
          {rows.map((r, i) => (
            <li
              key={r.name}
              className={cx(
                "cg-in tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:px-3.5 tw:py-2.5 tw:transition",
                picked && i === 0
                  ? "tw:bg-(--blue-soft) tw:ring-1 tw:ring-(--blue)"
                  : "tw:ring-1 tw:ring-(--line)",
              )}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[11px] tw:font-medium">
                {r.initials}
              </span>
              <span className="tw:min-w-0 tw:flex-1">
                <b className="tw:block tw:truncate tw:text-[14px] tw:font-medium">
                  {r.name}
                </b>
                <span className="tw:block tw:truncate tw:text-[12px] tw:text-(--muted)">
                  {r.place}
                </span>
              </span>
              {picked && i === 0 ? (
                <span className="cg-pop tw:rounded-full tw:bg-(--blue) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:text-white">
                  Claim
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ClaimVerify({ t }: { t: number }) {
  const chosen = t >= 3600;
  const progress = span(t, 4000, 5300);
  const done = progress >= 1;
  const options = [
    "Call or text the business phone",
    "Email at your business domain",
    "Add a DNS record to your website",
  ];
  return (
    <div className="cg-in">
      <p className="tw:mb-2 tw:text-[13px] tw:text-(--muted)">
        Verify that you represent this business
      </p>
      <ul className="tw:grid tw:gap-2">
        {options.map((o, i) => {
          const on = chosen && i === 2;
          return (
            <li
              key={o}
              className={cx(
                "tw:flex tw:items-center tw:gap-3 tw:rounded-[12px] tw:px-3.5 tw:py-2.5 tw:text-[13.5px] tw:transition",
                on ? "tw:bg-(--blue-soft) tw:ring-1 tw:ring-(--blue)" : "tw:ring-1 tw:ring-(--line)",
              )}
            >
              <span
                className={cx(
                  "tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:ring-1",
                  on ? "tw:ring-(--blue)" : "tw:ring-[#cbd5e1]",
                )}
              >
                {on ? <i className="tw:size-2 tw:rounded-full tw:bg-(--blue)" /> : null}
              </span>
              {o}
            </li>
          );
        })}
      </ul>
      <div className="tw:mt-4 tw:flex tw:items-center tw:gap-3">
        <div className="tw:h-1.5 tw:flex-1 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
          <div
            className="tw:h-full tw:rounded-full tw:bg-(--blue)"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span
          className={cx(
            "tw:inline-flex tw:items-center tw:gap-1 tw:text-[12.5px]",
            done ? "tw:text-[#1e7a3a]" : "tw:text-(--muted)",
          )}
        >
          {done ? (
            <>
              <FiCheck aria-hidden="true" /> Domain verified
            </>
          ) : chosen ? (
            "Checking DNS…"
          ) : (
            "Choose a method"
          )}
        </span>
      </div>
    </div>
  );
}

function ClaimReview({ t }: { t: number }) {
  const items = ["Claim received", "Review in progress", "Approved"];
  return (
    <div className="cg-in">
      <p className="tw:mb-3 tw:text-[13px] tw:text-(--muted)">Claim status</p>
      <ol className="tw:relative tw:grid tw:gap-4 tw:pl-1">
        <span
          className="tw:absolute tw:top-2 tw:bottom-2 tw:left-[11px] tw:w-px tw:bg-(--line)"
          aria-hidden="true"
        />
        {items.map((label, i) => {
          const on = t >= 5800 + i * 500;
          return (
            <li key={label} className="tw:relative tw:flex tw:items-center tw:gap-3">
              <Tick on={on} />
              <span
                className={cx(
                  "tw:text-[14px] tw:transition",
                  on ? "tw:text-(--ink)" : "tw:text-(--muted)",
                )}
              >
                {label}
              </span>
              {on && i === 2 ? (
                <span className="cg-pop tw:ml-auto tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:text-[#1e7a3a]">
                  Email sent to owner
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="tw:mt-5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3.5 tw:py-2.5 tw:text-[12.5px]/[1.5] tw:text-(--text)">
        Next: the owner completes the ID check, then Zonic is added as the
        agency on the profile.
      </p>
    </div>
  );
}

function ClaimLive() {
  return (
    <div className="cg-in tw:overflow-hidden tw:rounded-[14px] tw:ring-1 tw:ring-(--line)">
      <div className="tw:h-16 tw:bg-[linear-gradient(120deg,#bfe3fb,#5db7f3)]" />
      <div className="tw:px-4 tw:pb-4">
        <span className="tw:-mt-7 tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-[#2563eb] tw:text-[16px] tw:font-medium tw:text-white tw:ring-4 tw:ring-white">
          BP
        </span>
        <b className="tw:mt-2 tw:flex tw:items-center tw:gap-1.5 tw:text-[17px] tw:font-medium">
          Bluebird Plumbing
          <MdVerified
            className="cg-pop tw:size-5 tw:text-(--check)"
            aria-label="Verified business"
          />
        </b>
        <span className="tw:block tw:text-[13px] tw:text-(--muted)">
          Plumber · Dover, DE
        </span>
        <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
          <span className="tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:text-[#1e7a3a]">
            Profile live
          </span>
          <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:text-(--text)">
            Agency access: Zonic
          </span>
          <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:text-(--text)">
            Owner verified
          </span>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ 2 · facts */

const FACTS_MS = 10000;
const SOURCES = [
  "Your website",
  "Google Business Profile",
  "Apple Business Connect",
  "Yelp",
  "Bing Places",
  "Review sites",
];

export function FactsUi() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const { t } = useTimeline(FACTS_MS, inView);
  const matched = SOURCES.filter((_, i) => t >= 4200 + i * 550).length;
  const desc = typed(
    "Licensed plumbers for repairs, drains and water heaters.",
    t,
    400,
    32,
  );
  const cats = ["Plumber", "Water heater repair", "Drain cleaning"];

  return (
    <DemoFrame
      frameRef={ref}
      label="Example: a ChatGPT business profile and the sources ChatGPT reads, all matched"
    >
      <div className="tw:grid tw:grid-cols-[1fr_1fr] tw:gap-4 tw:max-bssm:grid-cols-1">
        <div>
          <CardHead title="Business profile" />
          <dl className="tw:grid tw:gap-3 tw:text-[13px]">
            <div>
              <dt className="tw:text-(--muted)">Description</dt>
              <dd className="tw:mt-0.5 tw:min-h-[38px] tw:leading-[1.45]">
                {desc}
              </dd>
            </div>
            <div>
              <dt className="tw:text-(--muted)">Categories</dt>
              <dd className="tw:mt-1 tw:flex tw:min-h-[24px] tw:flex-wrap tw:gap-1.5">
                {cats.map((c, i) =>
                  t >= 2500 + i * 300 ? (
                    <span
                      key={c}
                      className="cg-pop tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5 tw:text-[11.5px] tw:text-(--blue-dark)"
                    >
                      {c}
                    </span>
                  ) : null,
                )}
              </dd>
            </div>
            <div className="tw:grid tw:grid-cols-2 tw:gap-3">
              <div>
                <dt className="tw:text-(--muted)">Hours</dt>
                <dd className="tw:mt-0.5 tw:min-h-[20px]">
                  {t >= 3400 ? <span className="cg-in tw:block">Open 24 hours</span> : null}
                </dd>
              </div>
              <div>
                <dt className="tw:text-(--muted)">Website</dt>
                <dd className="tw:mt-0.5 tw:min-h-[20px] tw:truncate">
                  {t >= 3700 ? (
                    <span className="cg-in tw:block tw:truncate">bluebirdplumbing.com</span>
                  ) : null}
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="tw:rounded-[14px] tw:bg-(--panel) tw:p-3.5">
          <div className="tw:mb-2.5 tw:flex tw:items-center tw:justify-between tw:text-[12.5px]">
            <span className="tw:font-medium">Sources ChatGPT reads</span>
            <span className="tw:text-(--muted)">
              {matched}/{SOURCES.length}
            </span>
          </div>
          <div className="tw:mb-3 tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-white">
            <div
              className="tw:h-full tw:rounded-full tw:bg-(--green) tw:transition-[width] tw:duration-500"
              style={{ width: `${(matched / SOURCES.length) * 100}%` }}
            />
          </div>
          <ul className="tw:grid tw:gap-1.5">
            {SOURCES.map((s, i) => {
              const on = i < matched;
              return (
                <li
                  key={s}
                  className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:bg-white tw:px-2.5 tw:py-1.5 tw:text-[12.5px]"
                >
                  <span className="tw:truncate">{s}</span>
                  <span
                    className={cx(
                      "tw:inline-flex tw:flex-none tw:items-center tw:gap-1 tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:transition",
                      on
                        ? "tw:bg-(--green-soft) tw:text-[#1e7a3a]"
                        : "tw:bg-(--gold-soft) tw:text-[#8a6100]",
                    )}
                  >
                    {on ? (
                      <>
                        <FiCheck aria-hidden="true" /> Matched
                      </>
                    ) : (
                      "Needs update"
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </DemoFrame>
  );
}

/* ------------------------------------------------------------ 3 · agent */

const AGENT_MS = 11000;

function Bubble({
  from,
  children,
}: {
  from: "user" | "agent";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "cg-in tw:max-w-[86%] tw:rounded-[16px] tw:px-3.5 tw:py-2.5 tw:text-[13.5px]/[1.45]",
        from === "user"
          ? "tw:ml-auto tw:bg-(--panel)"
          : "tw:bg-white tw:ring-1 tw:ring-(--line)",
      )}
    >
      {children}
    </div>
  );
}

function Dots() {
  return (
    <span className="tw:flex tw:gap-1 tw:pl-1" aria-hidden="true">
      {[0, 1, 2].map((n) => (
        <i
          key={n}
          className="cg-dot tw:size-1.5 tw:rounded-full tw:bg-(--muted)"
          style={{ animationDelay: `${n * 0.15}s` }}
        />
      ))}
    </span>
  );
}

export function AgentUi() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const { t } = useTimeline(AGENT_MS, inView);
  const rules = [
    "AI disclosed",
    "Your info only",
    "Links to your site",
  ];
  const products = ["Cedar & Sage travel tin", "Linen Breeze travel tin"];

  return (
    <DemoFrame
      frameRef={ref}
      label="Example: a Business Agent in ChatGPT answering a shopper from the store's own policies"
    >
      <div className="tw:flex tw:items-center tw:gap-2.5 tw:border-b tw:border-(--line) tw:pb-3">
        <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-[#14532d] tw:text-[12px] tw:font-medium tw:text-white">
          FW
        </span>
        <span className="tw:min-w-0 tw:flex-1">
          <b className="tw:flex tw:items-center tw:gap-1 tw:text-[14px] tw:font-medium">
            Fern &amp; Wick Candles
            <MdVerified className="tw:size-4 tw:text-(--check)" aria-label="Verified business" />
          </b>
          <span className="tw:block tw:text-[12px] tw:text-(--muted)">
            Business agent · AI
          </span>
        </span>
        <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:text-[11px] tw:text-(--text)">
          Online store
        </span>
      </div>

      <div className="tw:mt-3 tw:flex tw:h-[178px] tw:flex-col tw:justify-end tw:gap-2 tw:overflow-hidden">
        {t >= 300 ? (
          <Bubble from="user">Do you ship to Texas? And can I return a gift?</Bubble>
        ) : null}
        {t >= 1000 && t < 2000 ? <Dots /> : null}
        {t >= 2000 ? (
          <Bubble from="agent">
            Yes, we ship to all 50 states. Unused items, gifts included, can be
            returned within 30 days.
            <span className="tw:mt-2 tw:flex tw:w-fit tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue-soft) tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:text-(--blue-dark)">
              Return policy <FiExternalLink aria-hidden="true" />
            </span>
          </Bubble>
        ) : null}
        {t >= 4300 ? (
          <Bubble from="user">Which candle suits a small bedroom?</Bubble>
        ) : null}
        {t >= 5000 && t < 6000 ? <Dots /> : null}
        {t >= 6000 ? (
          <Bubble from="agent">
            Our travel tins burn clean in small rooms. Two favorites:
            <span className="tw:mt-2 tw:grid tw:grid-cols-2 tw:gap-2">
              {products.map((p, i) => (
                <span
                  key={p}
                  className="cg-in tw:rounded-[12px] tw:bg-(--panel) tw:p-2"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <span
                    className={cx(
                      "tw:block tw:h-7 tw:rounded-[8px]",
                      i === 0 ? "tw:bg-[#d9c6a5]" : "tw:bg-[#c9dbe8]",
                    )}
                  />
                  <span className="tw:mt-1.5 tw:block tw:text-[11.5px]/[1.3] tw:font-medium">
                    {p}
                  </span>
                </span>
              ))}
            </span>
          </Bubble>
        ) : null}
        {t >= 8000 ? (
          <span className="cg-pop tw:mx-auto tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--ink) tw:px-4 tw:py-2 tw:text-[12.5px] tw:text-white">
            Visit store <FiArrowUpRight aria-hidden="true" />
          </span>
        ) : null}
      </div>

      <div className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-1.5 tw:border-t tw:border-(--line) tw:pt-3">
        <span className="tw:mr-1 tw:text-[12px] tw:text-(--muted)">
          Your guidelines
        </span>
        {rules.map((r) => (
          <span
            key={r}
            className="tw:inline-flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:py-1 tw:pr-2.5 tw:pl-1 tw:text-[11.5px] tw:text-(--ink-2)"
          >
            <Tick on size="sm" />
            {r}
          </span>
        ))}
      </div>
    </DemoFrame>
  );
}

/* --------------------------------------------------------- 4 · insights */

const INSIGHTS_MS = 10000;

const SPARKS = {
  week: [
    "M0 30 L14 26 L28 28 L42 20 L56 22 L70 14 L84 10",
    "M0 32 L14 30 L28 24 L42 26 L56 18 L70 16 L84 8",
    "M0 28 L14 29 L28 22 L42 24 L56 16 L70 15 L84 11",
  ],
  month: [
    "M0 34 L10 31 L20 32 L30 27 L40 28 L50 22 L60 20 L70 14 L84 6",
    "M0 33 L10 32 L20 28 L30 29 L40 23 L50 24 L60 17 L70 13 L84 9",
    "M0 32 L10 30 L20 31 L30 25 L40 24 L50 20 L60 18 L70 15 L84 10",
  ],
};

export function InsightsUi() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const { t, loop } = useTimeline(INSIGHTS_MS, inView);
  const month = t >= 5000;
  const range = month ? "month" : "week";
  const tiles = ["Mentions", "Website clicks", "Profile views"];
  const topics = [
    { label: "same-day plumber", w: 92 },
    { label: "water heater repair", w: 74 },
    { label: "drain cleaning", w: 58 },
  ];
  const k = `${loop}-${range}`;

  return (
    <DemoFrame
      frameRef={ref}
      label="Example: Business Hub insights showing mentions, website clicks and discovery topics trending up"
    >
      <CardHead
        title="Business insights"
        aside={
          <span className="tw:flex tw:rounded-full tw:bg-(--panel) tw:p-0.5 tw:text-[11.5px]">
            {["7 days", "28 days"].map((r, i) => (
              <span
                key={r}
                className={cx(
                  "tw:rounded-full tw:px-2.5 tw:py-1 tw:transition",
                  (i === 1) === month
                    ? "tw:bg-white tw:text-(--ink) tw:shadow-[0_1px_3px_rgba(12,21,38,0.15)]"
                    : "tw:text-(--muted)",
                )}
              >
                {r}
              </span>
            ))}
          </span>
        }
      />
      <div className="tw:grid tw:grid-cols-3 tw:gap-2.5">
        {tiles.map((label, i) => (
          <div key={label} className="tw:rounded-[12px] tw:p-2.5 tw:ring-1 tw:ring-(--line)">
            <span className="tw:block tw:text-[11.5px] tw:leading-[1.3] tw:text-(--muted)">
              {label}
            </span>
            <svg
              key={k}
              viewBox="0 0 84 38"
              className="tw:mt-1 tw:h-8 tw:w-full tw:overflow-visible"
              aria-hidden="true"
            >
              <path
                d={SPARKS[range][i]}
                pathLength={1}
                className="cg-draw"
                fill="none"
                stroke={i === 0 ? "#1d8bf1" : i === 1 ? "#34a852" : "#7c3aed"}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="tw:mt-0.5 tw:inline-flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-[#1e7a3a]">
              <FiTrendingUp aria-hidden="true" /> Rising
            </span>
          </div>
        ))}
      </div>
      <div className="tw:mt-4">
        <span className="tw:text-[12.5px] tw:font-medium">Discovery topics</span>
        <ul className="tw:mt-2 tw:grid tw:gap-2">
          {topics.map((tp, i) => (
            <li key={tp.label} className="tw:grid tw:grid-cols-[minmax(0,140px)_1fr] tw:items-center tw:gap-3 tw:text-[12px]">
              <span className="tw:truncate tw:text-(--text)">{tp.label}</span>
              <span className="tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
                <span
                  key={k}
                  className="cg-grow tw:block tw:h-full tw:rounded-full tw:bg-(--check)"
                  style={{
                    width: `${month ? tp.w : tp.w - 14}%`,
                    animationDelay: `${0.15 + i * 0.12}s`,
                  }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="tw:mt-3 tw:flex tw:flex-wrap tw:items-center tw:gap-2 tw:border-t tw:border-(--line) tw:pt-3 tw:text-[11.5px]">
        <span className="tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-1 tw:font-mono tw:text-(--text)">
          <FiGlobe aria-hidden="true" /> utm_source=chatgpt.com
        </span>
        <span className="tw:text-(--muted)">→</span>
        {t >= 2600 ? (
          <span className="cg-pop tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[#1e7a3a]">
            <FiCheck aria-hidden="true" /> Calls and forms tracked
          </span>
        ) : null}
      </div>
    </DemoFrame>
  );
}
