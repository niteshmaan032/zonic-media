"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  FiCheck,
  FiGlobe,
  FiMapPin,
  FiMessageCircle,
  FiNavigation,
  FiPhone,
  FiSearch,
  FiStar,
} from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";

/* Launchpad section for /home2 (v2, 19 Oct 2026). The four day-steps are
   clickable: a click shows that step's phone screen and autoplay carries on
   from there (4s per step). Autoplay only runs while the section is on
   screen and never with reduced motion (clicks still work). Phone screens
   are illustrations: "Your Business", no client data. */

export type LaunchStep = { when: string; t: string; d: string };

const STEP_MS = 4000;

/* ------------------------------------------------------------- screens */

function ScreenHead({ step, title }: { step: string; title: string }) {
  return (
    <div className="tw:mb-3 tw:flex tw:items-center tw:justify-between">
      <b className="tw:text-[15px] tw:font-semibold tw:tracking-[-0.01em]">{title}</b>
      <span className="tw:rounded-full tw:bg-(--blue-soft) tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold tw:text-(--blue-dark)">
        {step}
      </span>
    </div>
  );
}

function Stars() {
  return (
    <span className="tw:flex tw:gap-px">
      {[0, 1, 2, 3, 4].map((n) => (
        <FiStar key={n} className="tw:size-3 tw:fill-(--gold) tw:text-(--gold)" />
      ))}
    </span>
  );
}

function BrandScreen() {
  return (
    <>
      <ScreenHead step="Day 1–2" title="Brand identity" />
      <div className="tw:grid tw:h-[128px] tw:place-items-center tw:rounded-2xl tw:bg-(--blue)">
        <span className="tw:grid tw:justify-items-center tw:gap-2">
          <span className="tw:grid tw:size-14 tw:place-items-center tw:rounded-2xl tw:bg-white tw:text-[22px] tw:font-bold tw:tracking-[-0.04em] tw:text-(--blue)">
            YB
          </span>
          <b className="tw:text-[13px] tw:font-semibold tw:tracking-[0.06em] tw:text-white">YOUR BUSINESS</b>
        </span>
      </div>
      <p className="tw:mt-3 tw:text-[10.5px] tw:font-semibold tw:tracking-[0.08em] tw:text-(--muted) tw:uppercase">Colours</p>
      <div className="tw:mt-1.5 tw:grid tw:grid-cols-4 tw:gap-1.5 tw:text-center tw:text-[10px] tw:font-medium tw:text-(--muted)">
        {[
          ["var(--blue)", "Primary"],
          ["var(--ink)", "Text"],
          ["var(--gold)", "Accent"],
          ["#eaf0fd", "Soft"],
        ].map(([c, n]) => (
          <span key={n} className="tw:grid tw:gap-1">
            <i className="tw:h-8 tw:rounded-lg tw:border tw:border-black/5" style={{ background: c }} />
            {n}
          </span>
        ))}
      </div>
      <div className="tw:mt-3 tw:flex tw:items-center tw:gap-3 tw:rounded-xl tw:bg-(--panel) tw:p-3">
        <b className="tw:text-[30px] tw:leading-none tw:font-semibold">Aa</b>
        <span className="tw:grid tw:text-[11px] tw:text-(--text)">
          <span className="tw:font-semibold tw:text-(--ink)">Headlines · Bold</span>
          <span>Body text · Regular</span>
        </span>
      </div>
      <span className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--green) tw:py-2.5 tw:text-[12.5px] tw:font-semibold tw:text-white">
        <FiCheck className="tw:[stroke-width:3]" /> Logo approved
      </span>
    </>
  );
}

function WebsiteScreen() {
  return (
    <>
      <ScreenHead step="Day 3–7" title="Your website" />
      <div className="tw:overflow-hidden tw:rounded-2xl tw:border tw:border-(--line)">
        <div className="tw:flex tw:items-center tw:gap-1.5 tw:border-b tw:border-(--line) tw:px-3 tw:py-2">
          <i className="tw:size-3.5 tw:rounded tw:bg-(--blue)" />
          <b className="tw:text-[11.5px] tw:font-semibold">Your Business</b>
          <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-medium tw:text-white">
            <FiPhone /> Call
          </span>
        </div>
        <div className="tw:grid tw:gap-2 tw:bg-[linear-gradient(135deg,#e3ecfd,#efe8ff)] tw:p-3.5">
          <b className="tw:text-[17px] tw:leading-[1.2] tw:font-semibold tw:tracking-[-0.02em]">
            Local service you can count on
          </b>
          <Stars />
          <span className="tw:flex tw:gap-1.5 tw:text-[11px] tw:font-semibold">
            <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1.5 tw:text-white">
              <FiPhone /> Call now
            </span>
            <span className="tw:rounded-full tw:bg-(--ink) tw:px-3 tw:py-1.5 tw:text-white">Free quote</span>
          </span>
        </div>
        <div className="tw:grid tw:grid-cols-2 tw:gap-1.5 tw:p-2.5 tw:text-[11px] tw:font-medium">
          {["Services", "Reviews", "Service areas", "Contact"].map((t) => (
            <span key={t} className="tw:rounded-lg tw:bg-(--panel) tw:px-2.5 tw:py-2">
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5 tw:text-[11px] tw:font-semibold">
        <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[#1f7a3a]">
          <FiCheck /> Mobile-ready
        </span>
        <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[#1f7a3a]">
          <FiCheck /> Tested
        </span>
        <span className="tw:flex tw:items-center tw:gap-1 tw:rounded-full tw:bg-(--blue-soft) tw:px-2.5 tw:py-1 tw:text-(--blue-dark)">
          SEO built in
        </span>
      </span>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <ScreenHead step="Day 8–9" title="Google Business Profile" />
      <div className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:text-(--muted)">
        <FiSearch /> Your Business
        <SiGooglemaps className="tw:ml-auto tw:text-(--green)" />
      </div>
      <div className="tw:relative tw:mt-2.5 tw:h-[104px] tw:overflow-hidden tw:rounded-2xl tw:bg-[#eaf0fa]">
        <svg viewBox="0 0 200 104" preserveAspectRatio="none" className="tw:absolute tw:inset-0 tw:size-full">
          {["M0 70 C 60 64 130 68 200 60", "M0 30 C 70 40 140 24 200 30", "M80 0 C 86 40 96 74 92 104", "M150 0 C 142 40 156 74 170 104"].map((d) => (
            <path key={d} d={d} fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <span className="tw:absolute tw:top-[16%] tw:left-1/2 tw:-translate-x-1/2 tw:rounded-full tw:bg-(--ink) tw:px-2 tw:py-0.5 tw:text-[10px] tw:font-semibold tw:whitespace-nowrap tw:text-white">
          Your Business
        </span>
        <FiMapPin className="tw:absolute tw:top-[64%] tw:left-1/2 tw:size-8 tw:-translate-1/2 tw:fill-(--red) tw:text-white" />
      </div>
      <div className="tw:mt-2.5 tw:rounded-2xl tw:border tw:border-(--line) tw:p-3">
        <span className="tw:flex tw:items-center tw:gap-1.5">
          <b className="tw:text-[15px] tw:font-semibold">Your Business</b>
          <span className="tw:flex tw:items-center tw:gap-0.5 tw:rounded-full tw:bg-(--blue) tw:px-1.5 tw:py-px tw:text-[9.5px] tw:font-semibold tw:text-white">
            <FiCheck className="tw:[stroke-width:3.5]" /> Verified
          </span>
        </span>
        <span className="tw:mt-0.5 tw:block tw:text-[11px] tw:font-medium tw:text-(--green)">Open now · Closes 6 PM</span>
        <div className="tw:mt-2.5 tw:grid tw:grid-cols-3 tw:gap-1.5 tw:text-[10.5px] tw:font-semibold">
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:bg-(--blue) tw:py-1.5 tw:text-white">
            <FiPhone /> Call
          </span>
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:border tw:border-(--line) tw:py-1.5 tw:text-(--blue-dark)">
            <FiNavigation /> Route
          </span>
          <span className="tw:flex tw:items-center tw:justify-center tw:gap-1 tw:rounded-full tw:border tw:border-(--line) tw:py-1.5 tw:text-(--blue-dark)">
            <FiGlobe /> Site
          </span>
        </div>
      </div>
      <span className="tw:mt-2.5 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-(--green-soft) tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-[#1f7a3a]">
        <FiCheck className="tw:[stroke-width:3]" /> Live on Google Maps
      </span>
    </>
  );
}

const LEADS = [
  { Icon: FiPhone, t: "New call", s: "from Google Maps", c: "var(--green)" },
  { Icon: FiGlobe, t: "New quote request", s: "from your website", c: "var(--blue)" },
  { Icon: FiMessageCircle, t: "New message", s: "from Facebook", c: "#1877f2" },
];

function LiveScreen({ on }: { on: boolean }) {
  return (
    <>
      <div className="tw:mb-1 tw:flex tw:items-center tw:justify-between tw:text-white">
        <b className="tw:text-[15px] tw:font-semibold">Live &amp; taking leads</b>
        <span className="tw:rounded-full tw:bg-white/15 tw:px-2 tw:py-0.5 tw:text-[10.5px] tw:font-semibold">Day 10–14</span>
      </div>
      <p className="tw:mt-5 tw:text-center tw:text-[44px] tw:leading-none tw:font-light tw:text-white">9:41</p>
      <p className="tw:mt-1 tw:mb-5 tw:text-center tw:text-[11.5px] tw:text-white/60">Your phone, two weeks in</p>
      <div className="tw:grid tw:gap-2">
        {LEADS.map(({ Icon, t, s, c }, k) => (
          <span
            key={t}
            className={cx(
              "tw:flex tw:items-center tw:gap-2.5 tw:rounded-2xl tw:bg-white/12 tw:p-2.5 tw:text-white tw:backdrop-blur tw:transition-[opacity,transform] tw:duration-500",
              on ? "tw:translate-y-0 tw:opacity-100" : "tw:translate-y-2 tw:opacity-0",
            )}
            style={{ transitionDelay: on ? `${350 + k * 300}ms` : "0ms" }}
          >
            <span className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px]" style={{ background: c }}>
              <Icon />
            </span>
            <span className="tw:grid tw:text-[12.5px]">
              <b className="tw:font-semibold">{t}</b>
              <span className="tw:text-white/60">{s}</span>
            </span>
            <span className="tw:ml-auto tw:self-start tw:text-[10px] tw:text-white/50">now</span>
          </span>
        ))}
      </div>
      <span className="tw:mt-4 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-white/10 tw:py-2 tw:text-[11px] tw:font-medium tw:text-white/80">
        <FiCheck className="tw:text-(--gold)" /> Calls and forms tracked
      </span>
    </>
  );
}

/* -------------------------------------------------------------- section */

export function LaunchpadShowcase({
  steps,
  intro,
  actions,
}: {
  steps: LaunchStep[];
  intro: ReactNode;
  actions: ReactNode;
}) {
  const [active, setActive] = useState(0);
  // Bumped on every click so the timer and the progress bars restart.
  const [run, setRun] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || reduced) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(id);
  }, [active, run, visible, reduced, steps.length]);

  const go = (i: number) => {
    setActive(i);
    setRun((r) => r + 1);
  };

  const playing = visible && !reduced;
  const progress = (i: number) =>
    i < active ? "tw:w-full" : i === active ? (playing ? "tw:w-0 tw:animate-[lp-progress_4s_linear_forwards]" : "tw:w-full") : "tw:w-0";

  const screens = [BrandScreen, WebsiteScreen, ProfileScreen];

  return (
    <div
      ref={rootRef}
      className="tw:grid tw:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:max-bslg:grid-cols-1"
    >
      <div className="tw:px-11 tw:py-10 tw:max-bsxl:px-9 tw:max-bssm:px-[22px] tw:max-bssm:py-7">
        {intro}
        <ol className="tw:mt-6 tw:grid tw:grid-cols-2 tw:gap-2 tw:max-bssm:grid-cols-1">
          {steps.map((step, i) => {
            const on = i === active;
            return (
              <li
                key={step.t}
                className={cx(
                  "tw:relative tw:grid tw:grid-cols-[34px_minmax(0,1fr)] tw:gap-3 tw:overflow-hidden tw:rounded-[18px] tw:p-3 tw:transition-colors tw:duration-300",
                  on ? "tw:bg-(--blue-soft)" : "tw:hover:bg-(--panel)",
                )}
              >
                <span
                  className={cx(
                    "tw:grid tw:size-[34px] tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:text-[14px] tw:font-semibold tw:transition-colors tw:duration-300",
                    on ? "tw:border-(--blue) tw:bg-(--blue) tw:text-white" : "tw:border-(--line) tw:bg-white tw:text-(--blue-dark)",
                  )}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="tw:text-[12px] tw:font-semibold tw:tracking-[0.12em] tw:text-(--muted) tw:uppercase">{step.when}</p>
                  <h3 className="tw:mt-0.5 tw:text-[17px]">
                    {/* Stretched button: the whole step card is clickable. */}
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-pressed={on}
                      aria-controls="lp-phone"
                      className="tw:cursor-pointer tw:appearance-none tw:border-0 tw:bg-transparent tw:p-0 tw:text-left tw:[font:inherit] tw:[letter-spacing:inherit] tw:text-inherit tw:after:absolute tw:after:inset-0 tw:after:rounded-[18px] tw:after:content-[''] tw:focus-visible:outline-none tw:focus-visible:after:outline-2 tw:focus-visible:after:outline-(--blue)"
                    >
                      {step.t}
                    </button>
                  </h3>
                  <p className="tw:mt-1 tw:text-[15px]/[1.5] tw:text-(--text)">{step.d}</p>
                </div>
                {on ? (
                  <span className="tw:absolute tw:inset-x-3 tw:bottom-0 tw:h-[3px] tw:overflow-hidden tw:rounded-full tw:bg-(--blue)/15" aria-hidden="true">
                    <i key={`${active}-${run}`} className={cx("tw:block tw:h-full tw:bg-(--blue)", progress(i))} style={{ animationPlayState: playing ? "running" : "paused" }} />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
        {actions}
      </div>

      <div className="tw:grid tw:place-items-center tw:[background:radial-gradient(60%_50%_at_30%_20%,rgba(49,87,245,0.16),transparent_70%),radial-gradient(60%_50%_at_80%_85%,rgba(110,80,247,0.14),transparent_70%),#f2f5fd] tw:px-6 tw:py-8">
        <div id="lp-phone" className="tw:relative tw:h-[443px] tw:w-[230px] tw:max-bssm:h-[426px] tw:max-bssm:w-[213px]">
          <div className="tw:absolute tw:top-0 tw:left-0 tw:origin-top-left tw:scale-[0.82]">
            <PhoneFrame>
              {/* Story-style progress, one bar per step */}
              <div className="tw:absolute tw:inset-x-4 tw:top-[38px] tw:z-3 tw:flex tw:gap-1">
                {steps.map((s, i) => (
                  <span key={s.t} className={cx("tw:h-[3px] tw:flex-1 tw:overflow-hidden tw:rounded-full", active === 3 ? "tw:bg-white/25" : "tw:bg-(--ink)/10")}>
                    <i
                      key={`${i}-${active}-${run}`}
                      className={cx("tw:block tw:h-full tw:rounded-full", active === 3 ? "tw:bg-white" : "tw:bg-(--blue)", progress(i))}
                      style={{ animationPlayState: playing ? "running" : "paused" }}
                    />
                  </span>
                ))}
              </div>

              {screens.map((Screen, i) => (
                <div
                  key={i}
                  className={cx(
                    "tw:absolute tw:inset-0 tw:px-4 tw:pt-[52px] tw:pb-4 tw:transition-[opacity,transform] tw:duration-500",
                    i === active ? "tw:translate-y-0 tw:opacity-100" : "tw:pointer-events-none tw:translate-y-3 tw:opacity-0",
                  )}
                >
                  <Screen />
                </div>
              ))}
              <div
                className={cx(
                  "tw:absolute tw:inset-0 tw:bg-[linear-gradient(180deg,#1d2a44,#0c1526)] tw:px-4 tw:pt-[52px] tw:pb-4 tw:transition-opacity tw:duration-500",
                  active === 3 ? "tw:opacity-100" : "tw:pointer-events-none tw:opacity-0",
                )}
              >
                <LiveScreen on={active === 3} />
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
