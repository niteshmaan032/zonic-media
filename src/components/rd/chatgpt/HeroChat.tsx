"use client";

import { FiArrowUp, FiGlobe, FiPhone } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

import { cx } from "@/components/rd/dfw-kit/primitives";
import { span, useInView, useTimeline } from "./hooks";

/* Hero demo (replaces the reference page's launch video): a customer asks
   ChatGPT for a local business, the answer lists two, and the claimed,
   verified profile gets the call. Three niches rotate, 9 s each. Business
   names are fictional. */

type Pick = {
  name: string;
  initials: string;
  tone: string;
  meta: string;
  verified: boolean;
};

const SCENES: { prompt: string; intro: string; picks: [Pick, Pick] }[] = [
  {
    prompt: "Who can fix a leaking water heater today?",
    intro: "Here are plumbers near you that offer same-day repairs:",
    picks: [
      {
        name: "Bluebird Plumbing",
        initials: "BP",
        tone: "#2563eb",
        meta: "Open now · Same-day repairs",
        verified: true,
      },
      {
        name: "Copper Creek Plumbing",
        initials: "CC",
        tone: "#c2410c",
        meta: "Opens 8 AM · Water heaters",
        verified: false,
      },
    ],
  },
  {
    prompt: "Best family dentist near me taking new patients?",
    intro: "These dental offices nearby are accepting new patients:",
    picks: [
      {
        name: "Maple & Main Dental",
        initials: "MM",
        tone: "#0f766e",
        meta: "New patients · Evening hours",
        verified: true,
      },
      {
        name: "Brightside Smiles",
        initials: "BS",
        tone: "#7c3aed",
        meta: "Family dentistry · Saturdays",
        verified: false,
      },
    ],
  },
  {
    prompt: "Who can check my roof for storm damage this week?",
    intro: "These roofers offer storm damage inspections this week:",
    picks: [
      {
        name: "Summit Peak Roofing",
        initials: "SP",
        tone: "#b45309",
        meta: "Free inspections · Claims help",
        verified: true,
      },
      {
        name: "Northgate Roofing",
        initials: "NR",
        tone: "#334155",
        meta: "Repairs and replacements",
        verified: false,
      },
    ],
  },
];

const SCENE_MS = 9000;
const TYPE_AT = 300;
const CHAR_MS = 34;
const SENT_AT = 1900;
const ANSWER_AT = 2900;
const CARD_AT = [3300, 3650];
const HIGHLIGHT_AT = 4600;
const TAP_AT = 6000;
const OUT_AT = 8400;

function Stars() {
  return (
    <span className="tw:flex tw:gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className="tw:size-3 tw:fill-[#f5b301]">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

function PickCard({
  p,
  shown,
  highlight,
  tapped,
  className,
}: {
  p: Pick;
  shown: boolean;
  highlight: boolean;
  tapped: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "tw:relative tw:rounded-[16px] tw:bg-white tw:p-3.5 tw:transition tw:duration-500",
        !shown
          ? "tw:translate-y-2 tw:opacity-0"
          : highlight && !p.verified
            ? "tw:opacity-55"
            : "tw:opacity-100",
        highlight && p.verified
          ? "tw:ring-2 tw:ring-(--check)"
          : "tw:ring-1 tw:ring-(--line)",
        className,
      )}
    >
      {p.verified && highlight ? (
        <span
          className="cg-ring tw:pointer-events-none tw:absolute tw:inset-0 tw:rounded-[16px]"
          aria-hidden="true"
        />
      ) : null}
      {p.verified && highlight ? (
        <span className="cg-pop tw:absolute tw:-top-3 tw:right-3 tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--check) tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-medium tw:text-white">
          <MdVerified aria-hidden="true" /> Verified profile
        </span>
      ) : null}
      <div className="tw:flex tw:items-center tw:gap-2.5">
        <span
          className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-medium tw:text-white"
          style={{ background: p.tone }}
        >
          {p.initials}
        </span>
        <span className="tw:min-w-0">
          <b className="tw:flex tw:items-center tw:gap-1 tw:text-[14px]/[1.3] tw:font-medium tw:text-(--ink)">
            <span className="tw:truncate">{p.name}</span>
            {p.verified ? (
              <MdVerified
                className="tw:size-4 tw:flex-none tw:text-(--check)"
                aria-label="Verified business"
              />
            ) : null}
          </b>
          <span className="tw:block tw:truncate tw:text-[12px]/[1.4] tw:text-(--muted)">
            {p.meta}
          </span>
        </span>
      </div>
      <div className="tw:mt-2.5 tw:flex tw:items-center tw:justify-between tw:gap-2">
        <Stars />
        <span className="tw:flex tw:gap-1.5">
          <span
            className={cx(
              "tw:relative tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-medium tw:transition",
              tapped
                ? "tw:scale-95 tw:bg-(--check) tw:text-white"
                : "tw:bg-(--ink) tw:text-white",
            )}
          >
            <FiPhone aria-hidden="true" /> Call
            {tapped ? (
              <span className="cg-tap tw:absolute tw:inset-0 tw:rounded-full tw:bg-white/50" />
            ) : null}
          </span>
          <span className="tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-medium tw:text-(--ink) tw:ring-1 tw:ring-(--line)">
            <FiGlobe aria-hidden="true" /> Website
          </span>
        </span>
      </div>
    </div>
  );
}

export function HeroChat() {
  const [ref, inView] = useInView<HTMLDivElement>("0px");
  const { t } = useTimeline(SCENE_MS * SCENES.length, inView, 0);
  const scene = SCENES[Math.floor(t / SCENE_MS) % SCENES.length];
  const lt = t % SCENE_MS;

  const typed = Math.max(0, Math.floor((lt - TYPE_AT) / CHAR_MS));
  const sent = lt >= SENT_AT;
  const draft = sent ? "" : scene.prompt.slice(0, typed);
  const thinking = lt >= SENT_AT + 100 && lt < ANSWER_AT;
  const answered = lt >= ANSWER_AT;
  const highlight = lt >= HIGHLIGHT_AT;
  const tapped = lt >= TAP_AT;
  const fade = 1 - span(lt, OUT_AT, SCENE_MS - 100);
  const verified = scene.picks.find((p) => p.verified)!;

  return (
    <div
      ref={ref}
      className="cg-panel tw:relative tw:mx-auto tw:w-full tw:max-w-[880px] tw:rounded-[24px] tw:px-[clamp(14px,6vw,72px)] tw:pt-[clamp(18px,4vw,44px)] tw:[box-shadow:0_40px_80px_-40px_rgba(6,48,90,0.55)] tw:max-bssm:rounded-[20px]"
      aria-label="Example: a customer asks ChatGPT for a local business and calls the verified profile"
      role="img"
    >
      <div className="tw:flex tw:h-[440px] tw:flex-col tw:overflow-hidden tw:rounded-t-[18px] tw:bg-white tw:[box-shadow:0_-10px_40px_-20px_rgba(6,48,90,0.35)] tw:max-bssm:h-[420px]">
        {/* Window bar */}
        <div className="tw:flex tw:h-11 tw:flex-none tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:px-4">
          <span className="tw:flex tw:gap-1.5" aria-hidden="true">
            <i className="tw:size-2.5 tw:rounded-full tw:bg-[#e5e7eb]" />
            <i className="tw:size-2.5 tw:rounded-full tw:bg-[#e5e7eb]" />
            <i className="tw:size-2.5 tw:rounded-full tw:bg-[#e5e7eb]" />
          </span>
          <span className="tw:text-[12.5px] tw:font-medium tw:text-(--ink)">
            ChatGPT
          </span>
          <span className="tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[11px] tw:text-(--muted)">
            Local results
          </span>
        </div>

        {/* Thread */}
        <div
          className="tw:flex tw:flex-1 tw:flex-col tw:gap-3.5 tw:overflow-hidden tw:px-[clamp(14px,3vw,28px)] tw:pt-5 tw:transition-opacity tw:duration-300"
          style={{ opacity: fade }}
        >
          {sent ? (
            <p className="cg-in tw:ml-auto tw:max-w-[80%] tw:rounded-[18px] tw:bg-(--panel) tw:px-4 tw:py-2.5 tw:text-[14px]/[1.45] tw:text-(--ink)">
              {scene.prompt}
            </p>
          ) : null}
          {thinking ? (
            <span className="tw:flex tw:gap-1 tw:pl-1" aria-hidden="true">
              {[0, 1, 2].map((n) => (
                <i
                  key={n}
                  className="cg-dot tw:size-2 tw:rounded-full tw:bg-(--muted)"
                  style={{ animationDelay: `${n * 0.15}s` }}
                />
              ))}
            </span>
          ) : null}
          {answered ? (
            <p className="cg-in tw:text-[14px]/[1.5] tw:text-(--ink)">
              {scene.intro}
            </p>
          ) : null}
          <div className="tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
            {scene.picks.map((p, i) => (
              <PickCard
                key={p.name}
                p={p}
                shown={lt >= CARD_AT[i]}
                highlight={highlight}
                tapped={tapped && p.verified}
                className={i === 1 ? "tw:max-bssm:hidden" : undefined}
              />
            ))}
          </div>
          {tapped ? (
            <span className="cg-in tw:mx-auto tw:mt-1 tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--ink) tw:px-4 tw:py-2 tw:text-[12.5px] tw:text-white">
              <FiPhone aria-hidden="true" /> Calling {verified.name}…
            </span>
          ) : null}
        </div>

        {/* Composer */}
        <div className="tw:flex-none tw:px-[clamp(14px,3vw,28px)] tw:pb-4">
          <div className="tw:flex tw:h-12 tw:items-center tw:gap-3 tw:rounded-full tw:pr-1.5 tw:pl-5 tw:ring-1 tw:ring-(--line) tw:shadow-[0_8px_24px_-16px_rgba(12,21,38,0.35)]">
            <span
              className={cx(
                "tw:flex-1 tw:truncate tw:text-[14px]",
                draft ? "tw:text-(--ink)" : "tw:text-(--muted)",
              )}
            >
              {draft || "Ask anything"}
              {draft ? (
                <i className="tw:ml-0.5 tw:inline-block tw:h-4 tw:w-px tw:translate-y-0.5 tw:bg-(--ink)" />
              ) : null}
            </span>
            <span
              className={cx(
                "tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:transition",
                draft ? "tw:bg-(--ink) tw:text-white" : "tw:bg-(--panel) tw:text-(--muted)",
              )}
              aria-hidden="true"
            >
              <FiArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
