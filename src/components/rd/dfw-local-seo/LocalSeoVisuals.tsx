import type { CSSProperties } from "react";
import {
  FiCheck,
  FiGlobe,
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiPhone,
  FiPhoneOff,
  FiSearch,
  FiSend,
  FiStar,
} from "react-icons/fi";
import { SiGooglegemini, SiGooglemaps, SiOpenai } from "react-icons/si";
import { FloatChip, PanelShell, cx } from "@/components/rd/dfw-kit/primitives";
import { GoogleG, PhoneFrame, PhoneScreen } from "@/components/rd/dfw-kit/visuals";

/* Local SEO UI pieces for /services/dallas-fort-worth/local-seo-agency
   (19 Oct 2026), built on the DFW kit. Keyframes ls-* live in localSeo.css.

   These are illustrations of the work, not client data: "Your business" is
   generic, there are no invented review quotes, rankings carry no numbers,
   and nothing names a trade. With reduced motion every piece shows its
   finished state. */

const CARD =
  "tw:w-[min(100%,390px)] tw:rounded-3xl tw:bg-white tw:p-[22px] tw:text-left tw:[box-shadow:var(--lift)] tw:max-bssm:p-4";

function Stars({ className }: { className?: string }) {
  return (
    <span className={cx("tw:flex tw:gap-0.5", className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((n) => (
        <FiStar key={n} className="tw:size-3 tw:fill-(--gold) tw:text-(--gold)" />
      ))}
    </span>
  );
}

/* ------------------------------------------- 1. Google Business Profile */

const ACTIONS = [
  { Icon: FiPhone, label: "Call" },
  { Icon: FiNavigation, label: "Directions" },
  { Icon: FiGlobe, label: "Website" },
  { Icon: FiSend, label: "Share" },
];

const PROFILE_CHECKS = [
  "Primary category",
  "Services & areas",
  "Photos",
  "Hours & attributes",
  "Weekly posts",
  "Matches website",
];

/** A Google Business Profile card whose strength bar fills while six
    optimization checks tick on (8s loop). */
export function GbpProfilePanel({ flip }: { flip?: boolean }) {
  return (
    <PanelShell flip={flip}>
      <div className={CARD} aria-hidden="true">
        <div className="tw:flex tw:items-start tw:justify-between tw:gap-3">
          <div>
            <b className="tw:block tw:text-[19px] tw:leading-tight tw:tracking-[-0.01em]">
              Your Business
            </b>
            <span className="tw:mt-1.5 tw:flex tw:items-center tw:gap-1.5 tw:text-xs tw:text-(--muted)">
              5.0 <Stars /> · Dallas, TX
            </span>
            <span className="tw:mt-1 tw:block tw:text-xs tw:font-medium tw:text-(--green)">
              Open · Closes 6 PM
            </span>
          </div>
          <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-lg tw:text-(--green)">
            <SiGooglemaps />
          </span>
        </div>

        <div className="tw:mt-4 tw:grid tw:grid-cols-4 tw:gap-2 tw:text-center tw:text-[11px] tw:font-medium tw:text-(--blue-dark)">
          {ACTIONS.map(({ Icon, label }) => (
            <span key={label} className="tw:grid tw:justify-items-center tw:gap-1">
              <span className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[15px]">
                <Icon />
              </span>
              {label}
            </span>
          ))}
        </div>

        <div className="tw:mt-4 tw:border-t tw:border-(--line) tw:pt-4">
          <div className="tw:flex tw:items-center tw:justify-between tw:text-[12.5px] tw:font-medium">
            <span>Profile strength</span>
            <span className="tw:text-(--green) tw:animate-[ls-done_8s_ease_infinite_both]">
              Complete
            </span>
          </div>
          <div className="tw:mt-2 tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
            <i className="tw:block tw:h-full tw:w-full tw:rounded-full tw:bg-[linear-gradient(90deg,var(--blue),var(--green))] tw:animate-[ls-fill_8s_ease_infinite_both]" />
          </div>
          <ul className="tw:mt-3.5 tw:grid tw:grid-cols-2 tw:gap-x-3 tw:gap-y-2">
            {PROFILE_CHECKS.map((item, i) => (
              <li key={item} className="tw:flex tw:items-center tw:gap-2 tw:text-[12.5px] tw:text-(--ink-2)">
                <span
                  className="tw:grid tw:size-[18px] tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[11px] tw:text-white"
                  style={{ animation: `ls-tick-${i + 1} 8s ease infinite both` }}
                >
                  <FiCheck className="tw:[stroke-width:3.5]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FloatChip tone="blue" side={flip ? "left" : "right"} value="Top 3" label="spots in the Map Pack" />
    </PanelShell>
  );
}

/* ------------------------------------------------------------ 2. Reviews */

/** A review request goes out after the job, a 5-star review lands, and the
    owner's reply is posted (9s loop). No review text is invented: the
    review body is skeleton lines. */
export function ReviewsPanel({ flip }: { flip?: boolean }) {
  return (
    <PanelShell flip={flip} chip="bottom">
      <div className={cx(CARD, "tw:grid tw:gap-3")} aria-hidden="true">
        <div className="tw:flex tw:items-center tw:justify-between">
          <b className="tw:text-[17px] tw:tracking-[-0.01em]">Google reviews</b>
          <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[13px] tw:font-semibold">
            5.0 <Stars />
          </span>
        </div>

        <div className="tw:rounded-2xl tw:bg-(--panel) tw:p-3">
          <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[11px] tw:font-medium tw:text-(--muted)">
            <FiMessageSquare /> Text sent after the job
          </span>
          <p className="tw:mt-1.5 tw:text-[13px]/[1.45] tw:text-(--ink-2)">
            Thanks for choosing Your Business! Could you share how it went in
            a quick Google review?
          </p>
        </div>

        <div className="tw:rounded-2xl tw:border tw:border-(--line) tw:p-3 tw:animate-[ls-pop-a_9s_ease_infinite_both]">
          <div className="tw:flex tw:items-center tw:gap-2.5">
            <span className="tw:size-8 tw:flex-none tw:rounded-full tw:bg-[#9db9f5]" />
            <span className="tw:grid tw:gap-1">
              <b className="tw:text-[13px]">New review</b>
              <Stars />
            </span>
            <span className="tw:ml-auto tw:rounded-full tw:bg-(--green-soft) tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]">
              New
            </span>
          </div>
          <i className="tw:mt-3 tw:block tw:h-1.5 tw:w-[92%] tw:rounded-full tw:bg-[#e2e8f0]" />
          <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-[70%] tw:rounded-full tw:bg-[#e2e8f0]" />
          <span className="tw:mt-2.5 tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[11px] tw:font-medium tw:text-(--blue-dark)">
            <span className="tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5">names the service</span>
            <span className="tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5">names the town</span>
          </span>
        </div>

        <div className="tw:ml-6 tw:rounded-2xl tw:border tw:border-(--line) tw:bg-(--blue-soft) tw:p-3 tw:animate-[ls-pop-b_9s_ease_infinite_both] tw:max-bssm:ml-3">
          <span className="tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-medium">
            Reply from the owner
            <span className="tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--green)">
              <FiCheck className="tw:[stroke-width:3]" /> Posted
            </span>
          </span>
          <i className="tw:mt-2.5 tw:block tw:h-1.5 tw:w-[85%] tw:rounded-full tw:bg-white" />
          <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-[55%] tw:rounded-full tw:bg-white" />
        </div>
      </div>
      <FloatChip tone="gold" side={flip ? "left" : "right"} edge="bottom" value="Every" label="review answered" />
    </PanelShell>
  );
}

/* ---------------------------------------------------------- 3. AI answer */

const ENGINES = [
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "AI Mode", Icon: FiSearch },
];

/** A customer asks an AI assistant for a recommendation; the engines take
    turns (4s each) and each answer names "Your business" with the sources
    it read. */
export function AiAnswerPanel({ flip }: { flip?: boolean }) {
  return (
    <PanelShell flip={flip} chip="bottom">
      <div className={cx(CARD, "tw:grid tw:gap-3")} aria-hidden="true">
        <div className="tw:flex tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:p-1">
          {ENGINES.map(({ name, Icon }, i) => (
            <span
              key={name}
              className="tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-1.5 tw:text-[12px] tw:font-medium tw:animate-[ls-tab_12s_ease_infinite_both]"
              style={{ animationDelay: `${i * 4}s` } as CSSProperties}
            >
              <Icon className="tw:size-3" /> {name}
            </span>
          ))}
        </div>

        <p className="tw:ml-auto tw:max-w-[85%] tw:rounded-[18px] tw:rounded-br-md tw:bg-(--blue) tw:px-3.5 tw:py-2.5 tw:text-[13px]/[1.4] tw:text-white">
          Who’s a well-reviewed home service company near Frisco, TX?
        </p>

        <div className="tw:relative tw:min-h-[176px]">
          <span className="tw:absolute tw:top-1 tw:left-0 tw:flex tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-2.5 tw:animate-[ls-dots_4s_ease_infinite_both] tw:motion-reduce:hidden">
            {[0, 1, 2].map((n) => (
              <i
                key={n}
                className="tw:size-1.5 tw:rounded-full tw:bg-(--muted) tw:animate-[ls-blink_0.9s_ease-in-out_infinite]"
                style={{ animationDelay: `${n * 0.15}s` } as CSSProperties}
              />
            ))}
          </span>
          <div className="tw:grid tw:gap-2 tw:animate-[ls-answer_4s_ease_infinite_both]">
            <span className="tw:text-[12.5px] tw:text-(--ink-2)">
              A few well-reviewed options near Frisco:
            </span>
            <div className="tw:rounded-2xl tw:border tw:border-[#bcd2fb] tw:bg-(--blue-soft) tw:p-3">
              <span className="tw:flex tw:items-center tw:gap-2">
                <b className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[11px] tw:font-semibold tw:text-white">
                  1
                </b>
                <b className="tw:text-[13.5px]">Your Business</b>
                <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:text-[11px] tw:text-(--muted)">
                  5.0 <Stars />
                </span>
              </span>
              <span className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1 tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
                {["Google reviews", "yourbusiness.com", "Yelp"].map((s) => (
                  <span key={s} className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5">
                    {s}
                  </span>
                ))}
              </span>
            </div>
            {[2, 3].map((n) => (
              <span key={n} className="tw:flex tw:items-center tw:gap-2 tw:px-3">
                <b className="tw:grid tw:size-5 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[11px] tw:font-semibold tw:text-(--muted)">
                  {n}
                </b>
                <i className={cx("tw:block tw:h-1.5 tw:rounded-full tw:bg-[#e2e8f0]", n === 2 ? "tw:w-3/5" : "tw:w-2/5")} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <FloatChip tone="ink" side={flip ? "left" : "right"} edge="bottom" value="Named" label="in AI answers" />
    </PanelShell>
  );
}

/* ---------------------------------------------------- 4. Maps journey */

const PINS: [number, number, boolean][] = [
  [22, 30, false],
  [64, 22, false],
  [46, 52, true],
  [78, 58, false],
  [30, 72, false],
];

function MiniMap({ className, pins = true }: { className?: string; pins?: boolean }) {
  return (
    <div className={cx("tw:relative tw:overflow-hidden tw:rounded-2xl tw:bg-[#eaf0fa]", className)}>
      <svg viewBox="0 0 200 160" preserveAspectRatio="none" className="tw:absolute tw:inset-0 tw:size-full">
        <path d="M150 20 C 170 18 182 34 176 50 C 170 64 150 62 146 48 C 142 36 136 24 150 20 Z" fill="#c9dcf6" />
        {[
          "M0 110 C 60 104 120 106 200 98",
          "M0 60 C 70 70 140 52 200 58",
          "M70 0 C 80 50 96 110 92 160",
          "M140 0 C 132 60 150 120 170 160",
        ].map((d) => (
          <path key={d} d={d} fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      {pins
        ? PINS.map(([x, y, you]) => (
            <span
              key={`${x}-${y}`}
              className={cx(
                "tw:absolute tw:-translate-1/2 tw:rounded-full tw:border-2 tw:border-white",
                you ? "tw:z-2 tw:size-4 tw:bg-(--blue) tw:shadow-[0_0_0_5px_rgba(37,103,232,0.2)]" : "tw:size-3 tw:bg-(--red)",
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))
        : null}
    </div>
  );
}

function MapsSearch({ typing }: { typing?: boolean }) {
  return (
    <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:px-3.5 tw:py-2.5 tw:text-[13px] tw:shadow-[0_6px_16px_-10px_rgba(12,21,38,0.3)]">
      <FiSearch className="tw:flex-none tw:text-(--muted)" />
      <span
        className={cx(
          "tw:overflow-hidden tw:whitespace-nowrap tw:text-(--ink)",
          typing && "tw:w-[18ch] tw:border-r-2 tw:border-(--blue) tw:animate-[ls-type_12s_steps(18)_infinite_both]",
        )}
      >
        contractor near me
      </span>
      <SiGooglemaps className="tw:ml-auto tw:flex-none tw:text-(--green)" />
    </div>
  );
}

/** Google Maps on a phone: "near me" search → Map Pack with you on top →
    your profile → the call (12s loop, synced with the journey list). */
export function MapsJourneyPhone() {
  return (
    <PhoneFrame>
      <PhoneScreen i={0} className="tw:flex tw:flex-col tw:gap-3">
        <MapsSearch typing />
        <MiniMap className="tw:flex-1" />
        <span className="tw:flex tw:gap-1.5 tw:text-[11px] tw:font-medium">
          {["Open now", "Top rated", "Nearby"].map((c) => (
            <span key={c} className="tw:rounded-full tw:border tw:border-(--line) tw:px-2.5 tw:py-1">
              {c}
            </span>
          ))}
        </span>
      </PhoneScreen>

      <PhoneScreen i={1}>
        <MapsSearch />
        <MiniMap className="tw:mt-3 tw:h-[150px]" />
        <p className="tw:mt-3 tw:text-[11px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
          Places
        </p>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cx(
              "tw:relative tw:mt-2 tw:grid tw:grid-cols-[22px_minmax(0,1fr)] tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:border tw:p-2.5",
              i === 0 ? "tw:border-[#bcd2fb] tw:bg-(--blue-soft)" : "tw:border-(--line)",
            )}
          >
            <b
              className={cx(
                "tw:grid tw:size-[22px] tw:place-items-center tw:rounded-full tw:text-[11px] tw:font-semibold",
                i === 0 ? "tw:bg-(--blue) tw:text-white" : "tw:bg-(--panel) tw:text-(--muted)",
              )}
            >
              {i + 1}
            </b>
            <span className="tw:grid tw:gap-1">
              {i === 0 ? <b className="tw:text-[13px]">Your Business</b> : <i className="tw:block tw:h-1.5 tw:w-3/4 tw:rounded-full tw:bg-[#dfe5ee]" />}
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
                <Stars /> {i === 0 ? "· Open now" : ""}
              </span>
            </span>
            {i === 0 ? (
              <span className="tw:absolute tw:top-1/2 tw:left-[60%] tw:-mt-5 tw:-ml-5 tw:size-10 tw:rounded-full tw:border-2 tw:border-(--blue) tw:opacity-0 tw:animate-[dk-tap_12s_ease-out_infinite_both]"
                style={{ animationDelay: "3.6s" }}
              />
            ) : null}
          </div>
        ))}
      </PhoneScreen>

      <PhoneScreen i={2}>
        <div className="tw:relative tw:grid tw:h-[96px] tw:grid-cols-3 tw:gap-1 tw:overflow-hidden tw:rounded-2xl">
          {["#d6deeb", "#e2e8f2", "#d9e0ec"].map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </div>
        <b className="tw:mt-3 tw:block tw:text-[17px] tw:tracking-[-0.01em]">Your Business</b>
        <span className="tw:mt-1 tw:flex tw:items-center tw:gap-1.5 tw:text-[11.5px] tw:text-(--muted)">
          5.0 <Stars /> · Local service
        </span>
        <span className="tw:mt-0.5 tw:block tw:text-[11.5px] tw:font-medium tw:text-(--green)">Open now</span>
        <div className="tw:relative tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[11px] tw:font-medium">
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-2 tw:text-white">
            <FiPhone /> Call
          </span>
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:border tw:border-(--line) tw:py-2 tw:text-(--blue-dark)">
            <FiNavigation /> Route
          </span>
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:border tw:border-(--line) tw:py-2 tw:text-(--blue-dark)">
            <FiGlobe /> Site
          </span>
          <span className="tw:absolute tw:top-1/2 tw:left-[16%] tw:-mt-5 tw:-ml-5 tw:size-10 tw:rounded-full tw:border-2 tw:border-(--blue) tw:opacity-0 tw:animate-[dk-tap_12s_ease-out_infinite_both]"
            style={{ animationDelay: "6.6s" }}
          />
        </div>
        <div className="tw:mt-3 tw:rounded-2xl tw:border tw:border-(--line) tw:p-3">
          <span className="tw:flex tw:items-center tw:justify-between tw:text-[11.5px] tw:font-medium">
            Recent reviews <Stars />
          </span>
          <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-[90%] tw:rounded-full tw:bg-[#e2e8f0]" />
          <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-[65%] tw:rounded-full tw:bg-[#e2e8f0]" />
          <span className="tw:mt-2.5 tw:block tw:text-[10.5px] tw:text-(--muted)">Response from the owner</span>
          <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-[75%] tw:rounded-full tw:bg-(--blue-soft)" />
        </div>
      </PhoneScreen>

      <PhoneScreen i={3} className="tw:flex tw:flex-col tw:items-center tw:bg-[linear-gradient(180deg,#1d2a44,#0c1526)] tw:text-white">
        <span className="tw:mt-10 tw:grid tw:size-20 tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-3xl">
          <FiPhone />
        </span>
        <b className="tw:mt-5 tw:text-lg">Your Business</b>
        <span className="tw:mt-1 tw:text-[12.5px] tw:text-white/70">Calling from Google Maps…</span>
        <span className="tw:mt-6 tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white/10 tw:px-3 tw:py-1.5 tw:text-[11.5px] tw:text-white/80">
          <FiMapPin /> Counted in your monthly report
        </span>
        <span className="tw:mt-auto tw:mb-6 tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-xl">
          <FiPhoneOff />
        </span>
      </PhoneScreen>
    </PhoneFrame>
  );
}

/* ------------------------------------------------------- 5. Rank board */

/* Each city's marker steps Month 1 → 3 → 6 across three zones (left = not
   in the top 20, middle = top 10, right = top 3). No position numbers: an
   illustration of how reach spreads, with Fort Worth slower because of
   distance. a/b/c = marker position (%), ca/cb/cc = its colour. */
const RED = "#ea4334";
const AMBER = "#f0b429";
const GREEN = "#34a852";
const RANK_ROWS: { city: string; a: number; b: number; c: number }[] = [
  { city: "Dallas", a: 24, b: 58, c: 88 },
  { city: "Plano", a: 30, b: 64, c: 90 },
  { city: "Frisco", a: 16, b: 52, c: 84 },
  { city: "Richardson", a: 28, b: 62, c: 86 },
  { city: "Arlington", a: 12, b: 40, c: 70 },
  { city: "Fort Worth", a: 8, b: 26, c: 56 },
];
const zone = (p: number) => (p > 66 ? GREEN : p > 33 ? AMBER : RED);

export function RankBoard() {
  return (
    <div className="tw:rounded-[28px] tw:bg-white tw:p-6 tw:text-(--ink) tw:max-bssm:rounded-[20px] tw:max-bssm:p-4" aria-hidden="true">
      <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-3">
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[14px] tw:font-medium">
          <GoogleG className="tw:size-5" /> Map Pack reach by city
        </span>
        <span className="tw:flex tw:gap-1 tw:rounded-full tw:bg-(--panel) tw:p-1 tw:text-[11.5px] tw:font-medium">
          {["Month 1", "Month 3", "Month 6"].map((m, i) => (
            <span
              key={m}
              className="tw:rounded-full tw:px-2.5 tw:py-1 tw:animate-[ls-tab_9s_ease_infinite_both]"
              style={{ animationDelay: `${i * 3}s` } as CSSProperties}
            >
              {m}
            </span>
          ))}
        </span>
      </div>

      <div className="tw:mt-5 tw:grid tw:grid-cols-[92px_minmax(0,1fr)] tw:gap-x-3 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.06em] tw:text-(--muted) tw:uppercase tw:max-bssm:grid-cols-[76px_minmax(0,1fr)]">
        <span />
        <span className="tw:grid tw:grid-cols-3 tw:text-center">
          <span>Not ranking</span>
          <span>Top 10</span>
          <span>Top 3</span>
        </span>
      </div>

      <ul className="tw:mt-2 tw:grid tw:gap-2.5">
        {RANK_ROWS.map((row, i) => (
          <li key={row.city} className="tw:grid tw:grid-cols-[92px_minmax(0,1fr)] tw:items-center tw:gap-x-3 tw:max-bssm:grid-cols-[76px_minmax(0,1fr)]">
            <span className="tw:truncate tw:text-[13.5px] tw:font-medium tw:max-bssm:text-[12.5px]">{row.city}</span>
            <span className="tw:relative tw:grid tw:h-8 tw:grid-cols-3 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)">
              <span className="tw:border-r tw:border-dashed tw:border-[#d3dae6]" />
              <span className="tw:border-r tw:border-dashed tw:border-[#d3dae6]" />
              <span className="tw:bg-(--green-soft)" />
              <i
                className="tw:absolute tw:top-1/2 tw:size-[18px] tw:-translate-1/2 tw:rounded-full tw:border-[3px] tw:border-white tw:shadow-[0_4px_10px_-4px_rgba(12,21,38,0.5)] tw:animate-[ls-rank_9s_ease-in-out_infinite_both]"
                style={
                  {
                    "--a": `${row.a}%`,
                    "--b": `${row.b}%`,
                    "--c": `${row.c}%`,
                    "--ca": zone(row.a),
                    "--cb": zone(row.b),
                    "--cc": zone(row.c),
                    left: `${row.c}%`,
                    background: zone(row.c),
                    animationDelay: `${i * 0.08}s`,
                  } as CSSProperties
                }
              />
            </span>
          </li>
        ))}
      </ul>

      <div className="tw:mt-5 tw:flex tw:flex-wrap tw:gap-x-4 tw:gap-y-1.5 tw:border-t tw:border-(--line) tw:pt-4 tw:text-[12px] tw:text-(--text)">
        {[
          [RED, "Not in the top 20"],
          [AMBER, "Top 10"],
          [GREEN, "Map Pack top 3"],
        ].map(([c, l]) => (
          <span key={l} className="tw:flex tw:items-center tw:gap-1.5">
            <i className="tw:size-2.5 tw:rounded-full" style={{ background: c }} /> {l}
          </span>
        ))}
      </div>
    </div>
  );
}
