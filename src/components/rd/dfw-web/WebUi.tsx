import type { ReactNode } from "react";
import {
  FiCheckCircle,
  FiGrid,
  FiLock,
  FiMonitor,
  FiPenTool,
  FiPhone,
  FiStar,
  FiVideo,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import {
  AboutCard,
  AboutUi,
  Appear,
  Chip,
  Line,
  StepUi,
  Swap,
  Tick,
  UI_CARD,
  UiHead,
  uiDelay,
} from "@/components/rd/dfw-kit/ui";

/* UI that replaced the photos on /services/dallas-fort-worth/web-design-
   agency (19 Oct 2026): the about-section card + a before/after redesign
   slider, and one small UI per process step. Card facts come from the page
   (on-page SEO, Core Web Vitals, lead forms and call/form tracking in every
   build; flat project quote; most sites live in 2–6 weeks). */

/* ------------------------------------------------------------ about */

export function BuildCard() {
  return (
    <AboutCard
      tone="blue"
      top={
        <span className="tw:grid tw:size-[58px] tw:place-items-center tw:rounded-full tw:bg-white/15 tw:text-[23px]" aria-hidden="true">
          <FiMonitor />
        </span>
      }
      kicker="Every Zonic website"
      title="Built to bring in leads"
      points={[
        "On-page SEO on every page",
        "Core Web Vitals checked before launch",
        "Click-to-call and short quote forms",
        "Call and form tracking at launch",
      ]}
      foot="Flat project quote. Most sites go live in 2–6 weeks."
    />
  );
}

/** Old cluttered site (left layer) vs the new one (right layer), with a
    handle sliding between them. Resting state: half and half. */
function OldSite() {
  return (
    <div className="tw:absolute tw:inset-0 tw:bg-[#f4f1ea] tw:p-4 tw:font-serif">
      <div className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-[#cfc8b8] tw:pb-2">
        <span className="tw:text-[13px] tw:font-bold tw:text-[#5b4a2f]">YOUR BUSINESS LLC</span>
        <span className="tw:flex tw:gap-1.5 tw:text-[9px] tw:text-[#3a5bb8] tw:underline">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Links</span>
        </span>
      </div>
      <div className="tw:mt-3 tw:grid tw:grid-cols-[1fr_76px] tw:gap-3">
        <div className="tw:grid tw:gap-1.5">
          <span className="tw:text-[11px] tw:text-[#5b4a2f]">Welcome to our website!!</span>
          {[96, 88, 92, 70, 84, 60].map((w, i) => (
            <i key={i} className="tw:block tw:h-1 tw:bg-[#cfc8b8]" style={{ width: `${w}%` }} />
          ))}
          <span className="tw:text-[9px] tw:text-[#3a5bb8] tw:underline">Click here for more info</span>
        </div>
        <span className="tw:h-[64px] tw:bg-[#d8d2c3]" />
      </div>
      <div className="tw:mt-3 tw:grid tw:grid-cols-3 tw:gap-1.5">
        {[0, 1, 2].map((n) => (
          <span key={n} className="tw:h-8 tw:border tw:border-[#cfc8b8] tw:bg-[#ece7dc]" />
        ))}
      </div>
      <span className="tw:mt-2 tw:block tw:text-[8.5px] tw:text-[#8b7d63]">Call us: please see contact page</span>
    </div>
  );
}

function NewSite() {
  return (
    <div className="tw:absolute tw:inset-0 tw:bg-white tw:p-4">
      <div className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:pb-2">
        <span className="tw:size-4 tw:rounded-[5px] tw:bg-(--blue)" />
        <b className="tw:text-[12.5px] tw:font-medium">Your Business</b>
        <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:px-2.5 tw:py-1 tw:text-[10px] tw:font-medium tw:text-white">
          <FiPhone /> Call now
        </span>
      </div>
      <div className="tw:mt-3 tw:grid tw:grid-cols-[1.25fr_1fr] tw:gap-3 tw:rounded-xl tw:bg-[linear-gradient(135deg,#e3ecfd,#efe8ff)] tw:p-3">
        <div className="tw:grid tw:content-start tw:gap-1.5">
          <span className="tw:justify-self-start tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[9px] tw:font-medium tw:text-(--blue-dark)">
            Serving Dallas–Fort Worth
          </span>
          <b className="tw:text-[15px] tw:leading-[1.15] tw:font-medium tw:tracking-[-0.02em]">Local service you can count on</b>
          <span className="tw:flex tw:gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} className="tw:size-2.5 tw:fill-(--gold) tw:text-(--gold)" />
            ))}
          </span>
          <span className="tw:mt-1 tw:justify-self-start tw:rounded-full tw:bg-(--ink) tw:px-2.5 tw:py-1 tw:text-[9.5px] tw:font-medium tw:text-white">
            Get a free quote
          </span>
        </div>
        <span className="tw:relative tw:overflow-hidden tw:rounded-lg tw:bg-[linear-gradient(180deg,#dbe7ff,#f3f7ff)]">
          <i className="tw:absolute tw:top-2.5 tw:right-3 tw:size-4 tw:rounded-full tw:bg-(--gold)" />
          <i className="tw:absolute tw:right-0 tw:bottom-0 tw:left-0 tw:h-1/2 tw:rounded-t-[60%] tw:bg-[#b8eccb]" />
        </span>
      </div>
      <div className="tw:mt-2.5 tw:grid tw:grid-cols-3 tw:gap-1.5">
        {["Services", "Reviews", "Areas"].map((t) => (
          <span key={t} className="tw:rounded-lg tw:bg-(--panel) tw:px-2 tw:py-2 tw:text-[9.5px] tw:font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function RedesignSlider() {
  return (
    <AboutUi>
      <div className={cx(UI_CARD, "tw:w-[min(100%,540px)] tw:overflow-hidden")}>
        <div className="tw:flex tw:items-center tw:gap-1.5 tw:border-b tw:border-(--line) tw:px-3.5 tw:py-2.5">
          {["#f2a7a0", "#f7d58a", "#9fdcb1"].map((c) => (
            <i key={c} className="tw:size-2.5 tw:rounded-full" style={{ background: c }} />
          ))}
          <span className="tw:ml-2 tw:flex tw:min-w-0 tw:items-center tw:gap-1 tw:truncate tw:rounded-full tw:bg-(--panel) tw:px-3 tw:py-1 tw:text-[11px] tw:text-(--muted)">
            <FiLock className="tw:flex-none" /> yourbusiness.com
          </span>
          <span className="tw:ml-auto tw:flex tw:flex-none tw:gap-1">
            <Chip tone="muted">Before</Chip>
            <Chip tone="green">After</Chip>
          </span>
        </div>
        <div className="tw:relative tw:h-[250px] tw:max-bssm:h-[190px]">
          <NewSite />
          <div
            className="tw:absolute tw:inset-0 tw:[clip-path:inset(0_50%_0_0)] tw:animate-[ui-wipe_9s_ease-in-out_infinite]"
          >
            <OldSite />
          </div>
          <span
            className="tw:absolute tw:inset-y-0 tw:left-1/2 tw:z-2 tw:w-0.5 tw:-translate-x-1/2 tw:bg-(--ink) tw:animate-[ui-wipe-x_9s_ease-in-out_infinite]"
          >
            <i className="tw:absolute tw:top-1/2 tw:left-1/2 tw:grid tw:size-7 tw:-translate-1/2 tw:place-items-center tw:rounded-full tw:bg-(--ink) tw:text-[11px] tw:text-white">
              ⇆
            </i>
          </span>
        </div>
      </div>
    </AboutUi>
  );
}

/* --------------------------------------------------------- process */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const SLOTS = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"];

function CallStep() {
  return (
    <StepUi>
      <UiHead icon={<FiVideo />} title="Strategy call" right={<Chip tone="blue">Free · 30 min</Chip>} />
      <div className="tw:grid tw:grid-cols-5 tw:gap-1.5 tw:text-center tw:text-[11.5px] tw:font-medium">
        {DAYS.map((d) => (
          <span
            key={d}
            className={cx("tw:rounded-lg tw:py-1.5", d === "Wed" ? "tw:bg-(--ink) tw:text-white" : "tw:bg-(--panel) tw:text-(--muted)")}
          >
            {d}
          </span>
        ))}
      </div>
      <div className="tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[12px] tw:font-medium">
        {SLOTS.map((s) => (
          <span
            key={s}
            className={cx(
              "tw:rounded-lg tw:border tw:border-(--line) tw:py-2 tw:text-center",
              s === "10:30 AM" && "tw:border-transparent tw:bg-(--blue) tw:text-white tw:animate-[ui-pick_8s_ease_infinite_both]",
            )}
          >
            {s}
          </span>
        ))}
      </div>
      <span className="tw:justify-self-start tw:animate-[ui-late_8s_ease_infinite_both]">
        <Chip tone="green">✓ Booked · video call</Chip>
      </span>
    </StepUi>
  );
}

const PAGES = ["Services", "About", "Reviews", "Contact"];

function SitemapStep() {
  return (
    <StepUi>
      <UiHead
        icon={<FiGrid />}
        title="Sitemap"
        right={<Swap from={<Chip tone="amber">Draft</Chip>} to={<Chip tone="green">Approved</Chip>} />}
      />
      <div className="tw:grid tw:justify-items-center tw:gap-2">
        <span className="tw:rounded-lg tw:bg-(--ink) tw:px-4 tw:py-1.5 tw:text-[12px] tw:font-medium tw:text-white">Home</span>
        <span className="tw:h-2.5 tw:w-px tw:bg-[#c9d3e3]" />
        <div className="tw:relative tw:grid tw:w-full tw:grid-cols-4 tw:gap-1.5 tw:before:absolute tw:before:-top-2 tw:before:right-[12.5%] tw:before:left-[12.5%] tw:before:border-t tw:before:border-[#c9d3e3] tw:before:content-['']">
          {PAGES.map((p, i) => (
            <Appear key={p} at={0.3 + i * 0.3}>
              <span className="tw:block tw:truncate tw:rounded-lg tw:border tw:border-(--line) tw:bg-white tw:py-1.5 tw:text-center tw:text-[11px] tw:font-medium">
                {p}
              </span>
            </Appear>
          ))}
        </div>
        <div className="tw:grid tw:w-full tw:grid-cols-4 tw:gap-1.5">
          <Appear at={1.6} className="tw:col-span-2 tw:grid tw:gap-1">
            {["Service page", "Service page", "City page"].map((p, i) => (
              <span key={i} className="tw:rounded-md tw:bg-(--blue-soft) tw:px-2 tw:py-1 tw:text-[10.5px] tw:font-medium tw:text-(--blue-dark)">
                {p}
              </span>
            ))}
          </Appear>
          <div className="tw:col-span-2 tw:grid tw:content-start tw:gap-1.5 tw:pt-1">
            <Line w="90%" />
            <Line w="70%" />
            <Line w="80%" />
          </div>
        </div>
      </div>
    </StepUi>
  );
}

const SWATCHES = ["var(--ink)", "var(--blue)", "var(--gold)", "var(--green)", "#eef1f6"];

function DesignStep() {
  return (
    <StepUi>
      <UiHead icon={<FiPenTool />} title="Your design system" right={<Chip tone="muted">Weeks 2–4</Chip>} />
      <div className="tw:flex tw:gap-1.5">
        {SWATCHES.map((c, i) => (
          <i
            key={c}
            className="tw:size-7 tw:rounded-full tw:border tw:border-black/5 tw:animate-[ui-in_8s_ease_infinite_both]"
            style={{ background: c, ...uiDelay(i * 0.2) }}
          />
        ))}
      </div>
      <div className="tw:grid tw:grid-cols-[auto_minmax(0,1fr)] tw:items-center tw:gap-3 tw:rounded-xl tw:bg-(--panel) tw:p-3">
        <b className="tw:text-[34px] tw:leading-none tw:font-medium tw:tracking-[-0.03em]">Aa</b>
        <span className="tw:grid tw:gap-1.5">
          <i className="tw:block tw:h-2.5 tw:w-4/5 tw:rounded-full tw:bg-(--ink)" />
          <Line w="95%" />
          <Line w="70%" />
        </span>
      </div>
      <Appear at={1.2} className="tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[11.5px] tw:font-medium">
        <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1.5 tw:text-white">
          <FiPhone /> Call now
        </span>
        <span className="tw:rounded-full tw:border tw:border-(--ink) tw:px-3 tw:py-1.5">Get a quote</span>
        <span className="tw:rounded-full tw:bg-(--gold) tw:px-3 tw:py-1.5">★ 5.0</span>
      </Appear>
    </StepUi>
  );
}

const CHECKS = ["Phones", "Tablets", "Desktops", "Quote forms", "Call and form tracking"];

function LaunchStep() {
  return (
    <StepUi>
      <UiHead
        icon={<FiCheckCircle />}
        tone="green"
        title="Pre-launch checks"
        right={
          <Swap
            from={<Chip tone="amber">Testing</Chip>}
            to={
              <Chip tone="green">
                <i className="tw:size-1.5 tw:rounded-full tw:bg-(--green) tw:animate-[ui-pulse_1.6s_ease-out_infinite]" /> Live
              </Chip>
            }
          />
        }
      />
      <ul className="tw:grid tw:gap-2">
        {CHECKS.map((c, i) => (
          <li key={c} className="tw:flex tw:items-center tw:gap-2.5 tw:text-[12.5px] tw:font-medium">
            <Tick at={0.3 + i * 0.45} />
            {c}
            <Line w="28%" className="tw:ml-auto" />
          </li>
        ))}
      </ul>
    </StepUi>
  );
}

/** One UI per process step, in step order. */
export const webStepUi: ReactNode[] = [
  <CallStep key="call" />,
  <SitemapStep key="sitemap" />,
  <DesignStep key="design" />,
  <LaunchStep key="launch" />,
];
