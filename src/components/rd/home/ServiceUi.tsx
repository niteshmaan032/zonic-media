import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCheck,
  FiGlobe,
  FiLayout,
  FiLock,
  FiMapPin,
  FiMessageCircle,
  FiMousePointer,
  FiNavigation,
  FiPenTool,
  FiPhone,
  FiPhoneIncoming,
  FiSearch,
  FiSend,
  FiSquare,
  FiStar,
  FiTarget,
} from "react-icons/fi";
import {
  SiGooglegemini,
  SiGooglemaps,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";

/* Service-card UIs for /home2, v2 (19 Oct 2026). The owner found v1 too
   basic and slow, so each card is now a recognisable mini version of the
   real tool, running on a 6s loop (keyframes sv-* in serviceUi.css):

     Local SEO       Google Maps: pin pulses, you climb from #3 to #1
     AI search       AI chat: question types, answer streams, you're named
     GBP             Business Profile: suspended → reinstated, insights grow
     PPC             Google Ads: sponsored result clicked, call comes in
     Web design      Design-to-launch board: brand kit builds the homepage,
                     cursor clicks Publish, Designing → Live (v4)
     UI/UX           Design-tool canvas: layers, two artboards, cursor
                     selects the CTA, prototype link, comment resolved (v4)
     Graphic design  Brand kit: logo draws, palette, social/card/sign mockups

   Illustrations only: "Your Business", no client numbers or quotes, no
   trade named. The card wrapper (tilted white card) is in HomePage.tsx. */

const d = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:flex tw:flex-col tw:justify-center tw:gap-2.5 tw:overflow-hidden tw:bg-white tw:p-4 tw:text-left tw:text-(--ink) tw:max-bssm:p-3",
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function Stars({ size = "tw:size-2.5" }: { size?: string }) {
  return (
    <span className="tw:flex tw:gap-px">
      {[0, 1, 2, 3, 4].map((n) => (
        <FiStar
          key={n}
          className={cx(size, "tw:fill-(--gold) tw:text-(--gold)")}
        />
      ))}
    </span>
  );
}

const CHIP =
  "tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:whitespace-nowrap";
const SKEL = "tw:block tw:h-1.5 tw:rounded-full tw:bg-[#e2e8f0]";

/* ---------------------------------------------------------- Local SEO */

const COMP_PINS: [number, number][] = [
  [16, 30],
  [32, 70],
  [78, 26],
  [86, 68],
  [44, 22],
];

function LocalSeoUi() {
  return (
    <Card>
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:shadow-[0_6px_16px_-10px_rgba(12,21,38,0.3)]">
        <FiSearch className="tw:flex-none tw:text-(--muted)" />
        <span className="tw:truncate">contractor near me</span>
        <SiGooglemaps className="tw:ml-auto tw:flex-none tw:text-(--green)" />
      </div>

      <div className="tw:relative tw:h-[108px] tw:flex-none tw:overflow-hidden tw:rounded-xl tw:bg-[#eaf0fa]">
        <svg
          viewBox="0 0 300 108"
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:size-full"
        >
          <path
            d="M220 8 C 250 4 270 26 262 46 C 254 62 226 58 220 42 C 214 28 204 14 220 8 Z"
            fill="#c9dcf6"
          />
          {[
            "M0 78 C 70 70 150 74 300 66",
            "M0 34 C 80 44 170 26 300 32",
            "M96 0 C 104 40 118 80 112 108",
            "M196 0 C 186 44 204 82 222 108",
          ].map((p) => (
            <path
              key={p}
              d={p}
              fill="none"
              stroke="#fff"
              strokeWidth={7}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        {COMP_PINS.map(([x, y]) => (
          <i
            key={`${x}-${y}`}
            className="tw:absolute tw:size-3 tw:-translate-1/2 tw:rounded-full tw:border-2 tw:border-white tw:bg-(--red)"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
        <span className="tw:absolute tw:top-[62%] tw:left-[58%] tw:size-10 tw:rounded-full tw:border-2 tw:border-(--blue) tw:animate-[sv-ping_1.6s_ease-out_infinite]" />
        <FiMapPin className="tw:absolute tw:top-[62%] tw:left-[58%] tw:size-7 tw:-translate-x-1/2 tw:-translate-y-full tw:fill-(--blue) tw:text-white tw:animate-[sv-bounce_1.2s_ease-in-out_infinite]" />
        <span
          className="tw:absolute tw:top-[16%] tw:left-[60%] tw:rounded-full tw:bg-(--ink) tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-medium tw:text-white tw:animate-[sv-pop_6s_ease_infinite_both]"
          style={d(0.9)}
        >
          Your Business
        </span>
      </div>

      <div className="tw:grid tw:flex-none tw:grid-cols-[22px_minmax(0,1fr)] tw:gap-x-2">
        <div className="tw:grid tw:gap-1.5">
          {[1, 2, 3].map((n) => (
            <b
              key={n}
              className="tw:grid tw:h-[38px] tw:place-items-center tw:text-[12px] tw:font-semibold tw:text-(--muted)"
            >
              {n}
            </b>
          ))}
        </div>
        <div className="tw:relative tw:h-[126px]">
          <div className="tw:absolute tw:inset-x-0 tw:top-0 tw:z-2 tw:flex tw:h-[38px] tw:items-center tw:gap-2 tw:rounded-xl tw:border tw:border-[#bcd2fb] tw:bg-(--blue-soft) tw:px-2.5 tw:animate-[sv-rank-you_6s_ease-in-out_infinite_both,sv-you-hl_6s_ease_infinite_both]">
            <span className="tw:grid tw:min-w-0">
              <b className="tw:truncate tw:text-[12.5px] tw:font-semibold">
                Your Business
              </b>
              <span className="tw:flex tw:items-center tw:gap-1 tw:text-[10px] tw:text-(--muted)">
                <Stars /> Open now
              </span>
            </span>
            <span className="tw:ml-auto tw:grid tw:size-6 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[11px] tw:text-white">
              <FiPhone />
            </span>
          </div>
          {[
            [
              "tw:top-[44px] tw:animate-[sv-rank-a_6s_ease-in-out_infinite_both]",
              "70%",
            ],
            [
              "tw:top-[88px] tw:animate-[sv-rank-b_6s_ease-in-out_infinite_both]",
              "55%",
            ],
          ].map(([cls, w]) => (
            <div
              key={cls}
              className={cx(
                "tw:absolute tw:inset-x-0 tw:grid tw:h-[38px] tw:content-center tw:gap-1.5 tw:rounded-xl tw:border tw:border-(--line) tw:bg-white tw:px-2.5",
                cls,
              )}
            >
              <i className={SKEL} style={{ width: w }} />
              <Stars />
            </div>
          ))}
        </div>
      </div>

      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        <span
          className={cx(
            CHIP,
            "tw:bg-(--green-soft) tw:text-[#1f7a3a] tw:animate-[sv-pop_6s_ease_infinite_both]",
          )}
          style={d(1.5)}
        >
          <FiArrowUpRight /> Now #1 in the Map Pack
        </span>
        <span className={cx(CHIP, "tw:bg-(--blue-soft) tw:text-(--blue-dark)")}>
          Ranked by neighborhood
        </span>
      </span>
    </Card>
  );
}

/* ---------------------------------------------------------- AI search */

const ENGINES = [
  { Icon: SiOpenai, name: "ChatGPT" },
  { Icon: SiGooglegemini, name: "Gemini" },
  { Icon: SiPerplexity, name: "Perplexity" },
  { Icon: FiSearch, name: "AI Overviews" },
];

function AiSearchUi() {
  return (
    <Card className="tw:gap-3">
      <div className="tw:flex tw:gap-1 tw:overflow-hidden tw:rounded-full tw:bg-(--panel) tw:p-1">
        {ENGINES.map(({ Icon, name }, i) => (
          <span
            key={name}
            className={cx(
              "tw:flex tw:flex-1 tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:py-1.5 tw:text-[10.5px] tw:font-semibold tw:whitespace-nowrap tw:animate-[sv-tab_6s_ease_infinite_both]",
              i === 0 ? "tw:bg-(--ink) tw:text-white" : "tw:text-(--muted)",
            )}
            style={d(i * 1.5)}
          >
            <Icon className="tw:size-3 tw:flex-none" />{" "}
            <span className="tw:max-bssm:hidden">{name}</span>
          </span>
        ))}
      </div>

      <p className="tw:ml-auto tw:rounded-[16px] tw:rounded-br-md tw:bg-(--blue) tw:px-3 tw:py-2 tw:text-[12.5px] tw:text-white">
        <span className="tw:block tw:max-w-[260px] tw:overflow-hidden tw:border-r-2 tw:border-white tw:pr-0.5 tw:whitespace-nowrap tw:animate-[sv-type_6s_steps(32)_infinite_both,sv-caret_0.8s_step-end_infinite]">
          Best-rated local company near me?
        </span>
      </p>

      <div className="tw:flex tw:gap-2.5">
        <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-[linear-gradient(135deg,#4e82ee,#a26bf4)] tw:text-[13px] tw:text-white">
          ✦
        </span>
        <div className="tw:grid tw:flex-1 tw:gap-1.5 tw:pt-1">
          {[
            ["92%", 1.2],
            ["78%", 1.4],
            ["60%", 1.6],
          ].map(([w, at]) => (
            <i
              key={w as string}
              className={cx(
                SKEL,
                "tw:animate-[sv-stream_6s_ease-out_infinite_both]",
              )}
              style={
                {
                  "--w": w,
                  width: w as string,
                  ...d(at as number),
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div
        className="tw:rounded-2xl tw:border tw:border-[#bcd2fb] tw:bg-(--blue-soft) tw:p-3 tw:animate-[sv-pop_6s_ease_infinite_both]"
        style={d(1.9)}
      >
        <span className="tw:flex tw:items-center tw:gap-2">
          <b className="tw:text-[13px] tw:font-semibold">Your Business</b>
          <span
            className={cx(
              CHIP,
              "tw:bg-(--ink) tw:py-0.5 tw:text-[10px] tw:text-white",
            )}
          >
            Top pick
          </span>
          <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
            5.0 <Stars />
          </span>
        </span>
        <i className={cx(SKEL, "tw:mt-2 tw:w-[88%] tw:bg-white")} />
        <span className="tw:mt-2 tw:flex tw:flex-wrap tw:gap-1 tw:text-[10px] tw:font-semibold tw:text-(--muted)">
          Sources:
          {["yourbusiness.com", "Google reviews", "Local directories"].map(
            (s) => (
              <span
                key={s}
                className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5"
              >
                {s}
              </span>
            ),
          )}
        </span>
      </div>
    </Card>
  );
}

/* ------------------------------------------------- Google Business Profile */

function GbpUi() {
  return (
    <Card>
      <div className="tw:grid tw:h-8 tw:flex-none">
        <span className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-1.5 tw:rounded-xl tw:bg-[#fde4e1] tw:px-3 tw:text-[11.5px] tw:font-semibold tw:text-[#b8352a] tw:opacity-0 tw:animate-[sv-swap-a_6s_ease_infinite_both]">
          ⚠ Profile suspended · appeal in review
        </span>
        <span className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-1.5 tw:rounded-xl tw:bg-(--green-soft) tw:px-3 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a] tw:animate-[sv-swap-b_6s_ease_infinite_both]">
          <FiCheck className="tw:[stroke-width:3]" /> Reinstated &amp; verified
          · live on Google
        </span>
      </div>

      <div className="tw:flex tw:items-center tw:gap-2.5">
        <span className="tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[13px] tw:font-semibold tw:text-white">
          YB
        </span>
        <span className="tw:grid tw:min-w-0">
          <span className="tw:flex tw:items-center tw:gap-1">
            <b className="tw:truncate tw:text-[14px] tw:font-semibold">
              Your Business
            </b>
            <FiCheck className="tw:size-3.5 tw:flex-none tw:rounded-full tw:bg-(--blue) tw:p-0.5 tw:text-white tw:[stroke-width:4]" />
          </span>
          <span className="tw:flex tw:items-center tw:gap-1 tw:text-[10.5px] tw:text-(--muted)">
            5.0 <Stars /> ·{" "}
            <span className="tw:font-medium tw:text-(--green)">Open now</span>
          </span>
        </span>
      </div>

      <div className="tw:grid tw:grid-cols-4 tw:gap-1.5 tw:text-center tw:text-[10px] tw:font-medium tw:text-(--blue-dark)">
        {[
          [FiPhone, "Call"],
          [FiNavigation, "Directions"],
          [FiGlobe, "Website"],
          [FiStar, "Reviews"],
        ].map(([Icon, label], i) => {
          const I = Icon as typeof FiPhone;
          return (
            <span
              key={label as string}
              className="tw:grid tw:justify-items-center tw:gap-1"
            >
              <span
                className={cx(
                  "tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-[13px]",
                  i === 0
                    ? "tw:bg-(--green) tw:text-white"
                    : "tw:bg-(--green-soft) tw:text-[#1f7a3a]",
                )}
              >
                <I />
              </span>
              {label as string}
            </span>
          );
        })}
      </div>

      <div className="tw:grid tw:gap-1.5 tw:rounded-xl tw:bg-(--panel) tw:p-2.5">
        <span className="tw:text-[10px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
          Profile insights
        </span>
        {[
          ["Calls", 84],
          ["Directions", 66],
          ["Website clicks", 74],
        ].map(([label, w], i) => (
          <span
            key={label as string}
            className="tw:grid tw:grid-cols-[84px_minmax(0,1fr)_14px] tw:items-center tw:gap-2 tw:text-[11px] tw:font-medium"
          >
            {label as string}
            <span className="tw:block tw:h-1.5 tw:overflow-hidden tw:rounded-full tw:bg-white">
              <i
                className="tw:block tw:h-full tw:rounded-full tw:bg-(--green) tw:animate-[sv-grow_6s_ease_infinite_both]"
                style={
                  {
                    "--w": `${w}%`,
                    width: `${w}%`,
                    ...d(0.9 + i * 0.2),
                  } as CSSProperties
                }
              />
            </span>
            <FiArrowUpRight className="tw:text-(--green)" />
          </span>
        ))}
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------ Google Ads */

/* v2 (owner, 20 Oct: "redesign properly"): one story in two labelled parts.
   Top: the search results page, where your sponsored ad gets a call.
   Bottom: the Google Ads campaign view, where calls and leads rise, cost
   per lead falls, and the call lands as a tracked lead. No figures. */

const LEAD_BARS = [34, 42, 50, 62, 76, 92];

function KpiTile({
  label,
  up,
  children,
}: {
  label: string;
  up: boolean;
  children: ReactNode;
}) {
  return (
    <div className="tw:grid tw:gap-1.5 tw:rounded-xl tw:bg-(--panel) tw:p-2.5">
      <span className="tw:flex tw:items-center tw:justify-between tw:text-[10.5px] tw:font-semibold tw:text-(--ink-2)">
        {label}
        <span className="tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-[10px] tw:text-(--green)">
          {up ? <FiArrowUpRight /> : <FiArrowDownRight />}
        </span>
      </span>
      <span className="tw:flex tw:h-8 tw:items-end tw:gap-[3px]">
        {children}
      </span>
    </div>
  );
}

function AdsUi() {
  return (
    <Card className="tw:gap-2">
      {/* Search results page */}
      <div className="tw:rounded-2xl tw:border tw:border-(--line) tw:p-2.5">
        <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1.5 tw:text-[11.5px]">
          <FiSearch className="tw:text-(--muted)" />
          local service near me
        </div>
        <div className="tw:mt-2.5 tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-3 tw:rounded-xl tw:bg-(--blue-soft)/60 tw:p-2.5">
          <div className="tw:min-w-0">
            <span className="tw:flex tw:items-center tw:gap-1.5 tw:text-[10px] tw:text-(--muted)">
              <b className="tw:font-bold tw:text-(--ink)">Sponsored</b>
              <i className="tw:grid tw:size-4 tw:place-items-center tw:rounded-full tw:bg-(--gold) tw:text-[7px] tw:font-bold tw:text-(--ink) tw:not-italic">
                YB
              </i>
              yourbusiness.com
            </span>
            <b className="tw:mt-1 tw:block tw:truncate tw:text-[13.5px] tw:font-medium tw:text-[#1a0dab]">
              Your Business — Fast, Local Service
            </b>
            <span className="tw:mt-1.5 tw:flex tw:flex-wrap tw:gap-1 tw:text-[9.5px] tw:font-medium tw:text-[#1a0dab]">
              {["Free quote", "Reviews", "Service areas"].map((t) => (
                <span
                  key={t}
                  className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5"
                >
                  {t}
                </span>
              ))}
            </span>
          </div>
          <span className="tw:relative tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-(--blue) tw:text-[17px] tw:text-white">
            <FiPhone />
            <span className="tw:absolute tw:top-1/2 tw:left-1/2 tw:size-12 tw:rounded-full tw:border-2 tw:border-(--blue) tw:opacity-0 tw:animate-[sv-click_6s_ease-out_infinite]" />
            <FiMousePointer
              className="tw:absolute tw:z-3 tw:size-5 tw:fill-white tw:text-(--ink) tw:animate-[sv-cursor_6s_ease-in-out_infinite]"
              style={
                {
                  "--x1": "-160px",
                  "--y1": "-30px",
                  "--x2": "55%",
                  "--y2": "50%",
                  left: "55%",
                  top: "50%",
                } as CSSProperties
              }
            />
          </span>
        </div>
        <div className="tw:mt-2 tw:grid tw:gap-1.5 tw:px-1 tw:max-bssm:hidden">
          <i className={cx(SKEL, "tw:w-3/4")} />
          <i className={cx(SKEL, "tw:w-1/2")} />
        </div>
      </div>

      {/* Google Ads campaign view */}
      <div className="tw:rounded-2xl tw:border tw:border-(--line) tw:p-2.5">
        <div className="tw:mb-2 tw:flex tw:items-center tw:gap-2">
          <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-md tw:bg-(--gold) tw:text-[12px] tw:text-(--ink)">
            <FiTarget />
          </span>
          <b className="tw:text-[12px] tw:font-semibold">
            Google Ads · Local leads
          </b>
          <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:text-[10px] tw:font-semibold tw:text-(--green)">
            <i className="tw:size-1.5 tw:rounded-full tw:bg-(--green) tw:animate-[ui-pulse_1.6s_ease-out_infinite]" />{" "}
            Enabled
          </span>
        </div>
        <div className="tw:grid tw:grid-cols-3 tw:gap-1.5">
          <KpiTile label="Calls" up>
            {LEAD_BARS.map((h, i) => (
              <i
                key={i}
                className="tw:block tw:flex-1 tw:rounded-t-sm tw:bg-(--blue) tw:animate-[sv-rise_6s_ease_infinite_both]"
                style={
                  {
                    "--h": `${h}%`,
                    height: `${h}%`,
                    ...d(0.4 + i * 0.1),
                  } as CSSProperties
                }
              />
            ))}
          </KpiTile>
          <KpiTile label="Leads" up>
            {LEAD_BARS.map((h, i) => (
              <i
                key={i}
                className="tw:block tw:flex-1 tw:rounded-t-sm tw:bg-(--gold) tw:animate-[sv-rise_6s_ease_infinite_both]"
                style={
                  {
                    "--h": `${Math.max(h - 12, 18)}%`,
                    height: `${Math.max(h - 12, 18)}%`,
                    ...d(0.6 + i * 0.1),
                  } as CSSProperties
                }
              />
            ))}
          </KpiTile>
          <KpiTile label="Cost / lead" up={false}>
            <svg
              viewBox="0 0 80 32"
              className="tw:h-8 tw:w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M2 5 C 16 7 22 12 34 16 S 56 24 66 26 S 76 28 78 29"
                pathLength={1}
                fill="none"
                stroke="var(--green)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="1"
                vectorEffect="non-scaling-stroke"
                className="tw:animate-[sv-draw_6s_ease_infinite_both]"
                style={d(0.6)}
              />
            </svg>
          </KpiTile>
        </div>
        <div
          className="tw:mt-2 tw:flex tw:items-center tw:gap-2 tw:rounded-xl tw:bg-(--green-soft) tw:px-2.5 tw:py-2 tw:text-[11px] tw:animate-[sv-pop_6s_ease_infinite_both]"
          style={d(3)}
        >
          <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
            <FiPhoneIncoming />
          </span>
          <span className="tw:grid">
            <b className="tw:font-semibold tw:text-[#1f7a3a]">
              New call from your ad
            </b>
            <span className="tw:text-[10px] tw:text-(--text)">
              Tracked as a lead · just now
            </span>
          </span>
          <FiCheck className="tw:ml-auto tw:text-(--green) tw:[stroke-width:3]" />
        </div>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------ Web design */

/* v4 (owner picked "design to launch board", 22 Oct): the brand kit on the
   left builds the homepage on the right, then the cursor clicks Publish and
   the project flips from Designing to Live. One 8s loop; each stage has its
   own keyframes (wd-* in serviceUi.css), applied inline. */

const WEB_PINK = "#e0478d";
const loop8 = (name: string, easing = "ease"): CSSProperties => ({
  animation: `${name} 8s ${easing} infinite both`,
});

function WebDesignUi() {
  return (
    <Card className="tw:gap-2.5">
      {/* Project bar */}
      <div className="tw:flex tw:items-center tw:gap-2">
        <span
          className="tw:grid tw:size-7 tw:place-items-center tw:rounded-lg tw:text-[13px] tw:text-white"
          style={{ background: WEB_PINK }}
        >
          <FiLayout />
        </span>
        <span className="tw:grid tw:leading-tight">
          <span className="tw:text-[10px] tw:font-semibold tw:text-(--muted) tw:uppercase">
            Website project
          </span>
          <b className="tw:text-[13px] tw:font-semibold">Your Business</b>
        </span>
        <span className="tw:ml-auto tw:grid tw:text-[10.5px] tw:font-semibold">
          <span
            className="tw:col-start-1 tw:row-start-1 tw:rounded-full tw:bg-[#fff3cc] tw:px-2.5 tw:py-1 tw:text-[#8a6400] tw:opacity-0"
            style={loop8("wd-before")}
          >
            Designing…
          </span>
          <span
            className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[#1f7a3a]"
            style={loop8("wd-after")}
          >
            <i className="tw:size-1.5 tw:rounded-full tw:bg-(--green)" /> Live
          </span>
        </span>
      </div>

      <div className="tw:grid tw:grid-cols-[96px_minmax(0,1fr)] tw:gap-2">
        {/* Brand kit */}
        <div className="tw:grid tw:content-start tw:gap-2 tw:rounded-xl tw:bg-(--panel) tw:p-2">
          <span className="tw:text-[9.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
            Brand
          </span>
          <span
            className="tw:grid tw:grid-cols-4 tw:gap-1"
            style={loop8("wd-s1")}
          >
            {[WEB_PINK, "var(--ink)", "var(--gold)", "#f5e9ef"].map((c) => (
              <i
                key={c}
                className="tw:aspect-square tw:rounded-full tw:border tw:border-black/5"
                style={{ background: c }}
              />
            ))}
          </span>
          <span className="tw:grid tw:gap-0.5" style={loop8("wd-s2")}>
            <b className="tw:text-[17px] tw:leading-none tw:font-semibold">
              Aa
            </b>
            <span className="tw:text-[9px] tw:text-(--muted)">
              Headline · Body
            </span>
          </span>
          <span
            className="tw:grid tw:gap-1 tw:text-center tw:text-[9px] tw:font-semibold"
            style={loop8("wd-s3")}
          >
            <span
              className="tw:rounded-full tw:py-1 tw:text-white"
              style={{ background: WEB_PINK }}
            >
              Primary
            </span>
            <span className="tw:rounded-full tw:border tw:border-(--ink) tw:py-1">
              Secondary
            </span>
          </span>
        </div>

        {/* Homepage artboard */}
        <div className="tw:grid tw:content-start tw:gap-1.5 tw:rounded-xl tw:border tw:border-(--line) tw:p-2">
          <span className="tw:text-[9.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
            Homepage
          </span>
          <span
            className="tw:flex tw:items-center tw:gap-1.5"
            style={loop8("wd-s4")}
          >
            <i
              className="tw:size-3 tw:rounded"
              style={{ background: WEB_PINK }}
            />
            <b className="tw:text-[10px] tw:font-semibold">Your Business</b>
            <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--ink) tw:px-1.5 tw:py-0.5 tw:text-[8.5px] tw:font-medium tw:text-white">
              <FiPhone /> Call
            </span>
          </span>
          <span
            className="tw:grid tw:gap-1 tw:rounded-lg tw:bg-[linear-gradient(120deg,#fde2ef,#ece6ff)] tw:p-2.5"
            style={loop8("wd-s5")}
          >
            <b className="tw:text-[13px] tw:leading-tight tw:font-semibold tw:tracking-[-0.02em]">
              Local service you can count on
            </b>
            <Stars />
            <span
              className="tw:mt-0.5 tw:justify-self-start tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[9px] tw:font-semibold tw:text-white"
              style={{ background: WEB_PINK }}
            >
              Get a quote
            </span>
          </span>
          <span
            className="tw:grid tw:grid-cols-3 tw:gap-1"
            style={loop8("wd-s6")}
          >
            {[0, 1, 2].map((n) => (
              <span
                key={n}
                className="tw:grid tw:gap-1 tw:rounded-md tw:bg-(--panel) tw:p-1.5"
              >
                <i
                  className="tw:size-2.5 tw:rounded-full"
                  style={{ background: n === 1 ? "var(--gold)" : WEB_PINK }}
                />
                <i className={cx(SKEL, "tw:w-4/5 tw:bg-white")} />
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Publish bar */}
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-xl tw:bg-(--panel) tw:p-2">
        <span className="tw:flex tw:min-w-0 tw:items-center tw:gap-1 tw:truncate tw:rounded-full tw:bg-white tw:px-2.5 tw:py-1 tw:text-[10.5px] tw:text-(--muted)">
          <FiLock className="tw:flex-none" /> yourbusiness.com
        </span>
        <span className="tw:relative tw:ml-auto tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--ink) tw:px-3.5 tw:py-1.5 tw:text-[11px] tw:font-semibold tw:text-white">
          Publish <FiSend className="tw:size-3" />
          <span
            className="tw:absolute tw:top-1/2 tw:left-1/2 tw:size-10 tw:rounded-full tw:border-2 tw:border-(--ink) tw:opacity-0"
            style={loop8("wd-press", "ease-out")}
          />
          <FiMousePointer
            className="tw:absolute tw:z-3 tw:size-5 tw:fill-white tw:text-(--ink)"
            style={
              {
                "--x1": "-150px",
                "--y1": "-150px",
                "--x2": "55%",
                "--y2": "50%",
                left: "55%",
                top: "50%",
                ...loop8("wd-cursor", "ease-in-out"),
              } as CSSProperties
            }
          />
        </span>
      </div>
    </Card>
  );
}

/* ----------------------------------------------------------------- UI/UX */

/* v4 (owner picked "design tool canvas", 22 Oct): a design tool with a
   layers panel and two artboards. The designer's cursor selects the Book
   button, a prototype link draws to the Booking screen, and a comment pin
   ("Make the CTA clearer") appears and gets resolved. One 8s loop (cv-*). */

const UX_VIOLET = "#7a5cf0";
const SEL_BLUE = "#0d99ff";

function UxUi() {
  return (
    <Card className="tw:gap-2">
      {/* Toolbar */}
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-xl tw:bg-(--ink) tw:px-2.5 tw:py-1.5 tw:text-white">
        <span className="tw:flex tw:gap-2 tw:text-[12px] tw:text-white/60">
          <FiMousePointer className="tw:text-white" />
          <FiLayout />
          <FiPenTool />
        </span>
        <b className="tw:mx-auto tw:truncate tw:text-[11px] tw:font-semibold">
          Booking app · UI
        </b>
        <span className="tw:flex">
          {["#f7c58a", "#9db9f5"].map((c) => (
            <i
              key={c}
              className="tw:-ml-1 tw:size-4 tw:rounded-full tw:border tw:border-(--ink)"
              style={{ background: c }}
            />
          ))}
        </span>
        <span
          className="tw:rounded-md tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold"
          style={{ background: SEL_BLUE }}
        >
          Share
        </span>
      </div>

      <div className="tw:grid tw:grid-cols-[78px_minmax(0,1fr)] tw:gap-2">
        {/* Layers */}
        <div className="tw:grid tw:content-start tw:gap-0.5 tw:rounded-xl tw:bg-(--panel) tw:p-1.5 tw:text-[10px] tw:font-medium tw:text-(--ink-2)">
          <span className="tw:px-1 tw:pb-1 tw:text-[9px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">
            Layers
          </span>
          {["Home", "Hero", "Button", "Booking", "Slots"].map((l) => (
            <span
              key={l}
              className={cx(
                "tw:flex tw:items-center tw:gap-1 tw:truncate tw:rounded tw:px-1 tw:py-0.5",
                (l === "Hero" || l === "Button" || l === "Slots") && "tw:pl-3",
              )}
              style={l === "Button" ? loop8("cv-layer") : undefined}
            >
              <FiSquare className="tw:size-2.5 tw:flex-none tw:opacity-60" />
              {l}
            </span>
          ))}
        </div>

        {/* Canvas */}
        <div className="tw:relative tw:h-[236px] tw:overflow-hidden tw:rounded-xl tw:bg-[#f4f6fa] tw:[background-image:radial-gradient(#d3dae6_1px,transparent_1px)] tw:[background-size:12px_12px]">
          {/* Home artboard */}
          <div className="tw:absolute tw:top-[22px] tw:left-[6%] tw:w-[40%]">
            <span className="tw:text-[9px] tw:font-semibold tw:text-(--muted)">
              Home
            </span>
            <div className="tw:mt-0.5 tw:grid tw:h-[176px] tw:content-start tw:gap-1 tw:rounded-[12px] tw:border tw:border-(--line) tw:bg-white tw:p-1.5">
              <i className="tw:h-12 tw:rounded-md tw:bg-[linear-gradient(135deg,#cbbdfb,#ece6ff)]" />
              <i className="tw:h-1.5 tw:w-4/5 tw:rounded-full tw:bg-(--ink)" />
              <i className={cx(SKEL, "tw:w-3/5")} />
              <i className={cx(SKEL, "tw:w-2/3")} />
              <span
                className="tw:mt-3 tw:grid tw:h-6 tw:place-items-center tw:rounded-full tw:text-[8.5px] tw:font-semibold tw:text-white"
                style={{ background: UX_VIOLET, ...loop8("cv-select") }}
              >
                Book a visit
              </span>
            </div>
          </div>

          {/* Booking artboard */}
          <div className="tw:absolute tw:top-[22px] tw:right-[6%] tw:w-[40%]">
            <span className="tw:text-[9px] tw:font-semibold tw:text-(--muted)">
              Booking
            </span>
            <div className="tw:mt-0.5 tw:grid tw:h-[176px] tw:content-start tw:gap-1 tw:rounded-[12px] tw:border tw:border-(--line) tw:bg-white tw:p-1.5">
              <i className="tw:h-1.5 tw:w-3/5 tw:rounded-full tw:bg-(--ink)" />
              <span className="tw:grid tw:grid-cols-2 tw:gap-1 tw:text-center tw:text-[7.5px] tw:font-semibold">
                {["9:00", "10:30", "1:00", "3:30"].map((t, n) => (
                  <span
                    key={t}
                    className={cx(
                      "tw:rounded tw:py-1",
                      n === 1 ? "tw:text-white" : "tw:bg-(--panel)",
                    )}
                    style={n === 1 ? { background: UX_VIOLET } : undefined}
                  >
                    {t}
                  </span>
                ))}
              </span>
              <i className={cx(SKEL, "tw:mt-1 tw:w-4/5")} />
              <span className="tw:mt-auto tw:grid tw:h-6 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[8.5px] tw:font-semibold tw:text-white">
                Confirm
              </span>
            </div>
          </div>

          {/* Prototype link Home → Booking */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:size-full"
            aria-hidden="true"
          >
            <path
              d="M 40 85 C 56 85 46 24 57 24"
              pathLength={1}
              fill="none"
              stroke={SEL_BLUE}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="1"
              vectorEffect="non-scaling-stroke"
              style={loop8("cv-link")}
            />
          </svg>

          {/* Link start dot and arrowhead */}
          <span
            className="tw:absolute tw:z-1 tw:rounded-full"
            style={{
              left: "40%",
              top: "85%",
              width: 8,
              height: 8,
              marginLeft: -4,
              marginTop: -4,
              background: SEL_BLUE,
              ...loop8("cv-head"),
            }}
          />
          <span
            className="tw:absolute tw:z-1"
            style={{
              left: "57%",
              top: "24%",
              width: 0,
              height: 0,
              marginTop: -5,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: `7px solid ${SEL_BLUE}`,
              ...loop8("cv-head"),
            }}
          />

          {/* Comment pin, under the Book button */}
          <span
            className="tw:absolute tw:z-2 tw:flex tw:items-center tw:gap-1"
            style={{ left: "6%", bottom: 4, ...loop8("cv-pin") }}
          >
            <span className="tw:grid tw:size-5 tw:flex-none tw:place-items-center tw:rounded-full tw:rounded-bl-none tw:bg-(--gold) tw:text-[8px] tw:font-bold tw:text-(--ink)">
              <FiMessageCircle />
            </span>
            <span className="tw:grid tw:rounded-lg tw:bg-white tw:px-2 tw:py-1 tw:text-[9.5px] tw:font-semibold tw:whitespace-nowrap tw:shadow-[0_6px_16px_-8px_rgba(12,21,38,0.4)]">
              <span
                className="tw:col-start-1 tw:row-start-1"
                style={loop8("cv-note")}
              >
                Make the CTA clearer
              </span>
              <span
                className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-1 tw:text-[#1f7a3a] tw:opacity-0"
                style={loop8("cv-done")}
              >
                <FiCheck /> Resolved
              </span>
            </span>
          </span>

          {/* Designer cursor */}
          <span
            className="tw:absolute tw:z-3 tw:flex tw:items-start"
            style={{
              left: "27%",
              top: "78%",
              ...loop8("cv-cursor", "ease-in-out"),
            }}
          >
            <FiMousePointer className="tw:size-4 tw:fill-[#0d99ff] tw:text-white" />
            <span
              className="tw:mt-3 tw:rounded tw:px-1.5 tw:py-0.5 tw:text-[8.5px] tw:font-semibold tw:text-white"
              style={{ background: SEL_BLUE }}
            >
              Designer
            </span>
          </span>
        </div>
      </div>

      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        <span className={cx(CHIP, "tw:bg-[#efeafe] tw:text-[#5b3fd6]")}>
          Clickable prototype
        </span>
        <span className={cx(CHIP, "tw:bg-(--blue-soft) tw:text-(--blue-dark)")}>
          Design system
        </span>
        <span className={cx(CHIP, "tw:bg-(--green-soft) tw:text-[#1f7a3a]")}>
          <FiCheck /> Dev handover
        </span>
      </span>
    </Card>
  );
}

/* -------------------------------------------------------- Graphic design */

const PALETTE = ["#ea4334", "var(--ink)", "var(--gold)", "#f2a7a0", "#f5efe6"];

function BrandUi() {
  return (
    <Card>
      <span className="tw:flex tw:items-center tw:justify-between">
        <b className="tw:text-[13px] tw:font-semibold">Brand kit</b>
        <span className={cx(CHIP, "tw:bg-(--green-soft) tw:text-[#1f7a3a]")}>
          <FiCheck /> Print &amp; social ready
        </span>
      </span>

      <div className="tw:grid tw:grid-cols-[1.1fr_1fr] tw:gap-2">
        <div className="tw:grid tw:place-items-center tw:gap-1 tw:rounded-xl tw:bg-[#fdf1ef] tw:py-3">
          <svg viewBox="0 0 64 64" className="tw:size-16">
            <path
              d="M32 6 L56 20 L56 44 L32 58 L8 44 L8 20 Z"
              pathLength={1}
              fill="#ea4334"
              fillOpacity={1}
              stroke="#ea4334"
              strokeWidth={3}
              strokeDasharray="1"
              strokeLinejoin="round"
              className="tw:animate-[sv-draw_6s_ease_infinite_both,sv-fill_6s_ease_infinite_both]"
            />
            <path d="M22 38 L32 24 L42 38 Z" fill="#fff" />
          </svg>
          <b className="tw:text-[11px] tw:font-semibold tw:tracking-[0.04em]">
            YOUR BUSINESS
          </b>
        </div>
        <div className="tw:grid tw:content-between tw:gap-2">
          <span className="tw:flex tw:gap-1.5">
            {PALETTE.map((c, i) => (
              <i
                key={c}
                className="tw:size-6 tw:rounded-full tw:border tw:border-black/5 tw:animate-[sv-pop_6s_ease_infinite_both]"
                style={{ background: c, ...d(0.6 + i * 0.12) }}
              />
            ))}
          </span>
          <span className="tw:flex tw:items-end tw:gap-2 tw:rounded-xl tw:bg-(--panel) tw:p-2.5">
            <b className="tw:text-[30px] tw:leading-none tw:font-semibold tw:tracking-[-0.03em]">
              Aa
            </b>
            <span className="tw:grid tw:gap-0.5 tw:text-[9.5px] tw:text-(--muted)">
              <span>Display · Bold</span>
              <span>Body · Regular</span>
            </span>
          </span>
        </div>
      </div>

      <div className="tw:grid tw:grid-cols-3 tw:items-end tw:gap-2">
        <span
          className="tw:grid tw:aspect-square tw:content-end tw:gap-1 tw:rounded-xl tw:bg-[linear-gradient(135deg,#ea4334,#f2a7a0)] tw:p-2 tw:text-white tw:animate-[sv-in_6s_ease_infinite_both]"
          style={d(1.3)}
        >
          <b className="tw:text-[10.5px] tw:leading-tight tw:font-semibold">
            Book this week
          </b>
          <i className="tw:h-1 tw:w-3/5 tw:rounded-full tw:bg-white/60" />
        </span>
        <span
          className="tw:grid tw:h-[64%] tw:content-between tw:rounded-lg tw:border tw:border-(--line) tw:bg-white tw:p-2 tw:[transform:rotate(-5deg)] tw:animate-[sv-in_6s_ease_infinite_both]"
          style={d(1.5)}
        >
          <i className="tw:size-3 tw:rounded-sm tw:bg-[#ea4334]" />
          <span className="tw:grid tw:gap-1">
            <i className={cx(SKEL, "tw:w-4/5")} />
            <i className={cx(SKEL, "tw:w-1/2")} />
          </span>
        </span>
        <span
          className="tw:grid tw:justify-items-center tw:animate-[sv-in_6s_ease_infinite_both]"
          style={d(1.7)}
        >
          <span className="tw:grid tw:w-full tw:place-items-center tw:rounded-md tw:bg-(--ink) tw:py-3 tw:text-[9.5px] tw:font-semibold tw:text-white">
            <i className="tw:mb-1 tw:size-3 tw:rounded-sm tw:bg-[#ea4334]" />
            CALL TODAY
          </span>
          <i className="tw:h-5 tw:w-1 tw:bg-[#c9d3e3]" />
        </span>
      </div>
    </Card>
  );
}

/** One UI per service card, keyed by service id. */
export const serviceUi: Record<string, ReactNode> = {
  "local-seo": <LocalSeoUi />,
  "ai-search": <AiSearchUi />,
  gbp: <GbpUi />,
  ppc: <AdsUi />,
  web: <WebDesignUi />,
  ux: <UxUi />,
  graphic: <BrandUi />,
};
