import type { ReactNode } from "react";
import {
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiPhoneCall,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { MdLocationOn, MdStorm } from "react-icons/md";
import {
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { FL_AD_SETUP } from "./florida";

/* UI for the Florida HVAC marketing draft (24 Oct 2026). Owner: new UI
   components, none shared with the HVAC agency draft. Pillar colours:
   Gulf teal and sunset coral. All static. */

export const TEAL = "#0d9488";
export const CORAL = "#f97316";

/* --------------------------------------------------------------- hero */

/** Hero bento (owner, 24 Oct: keep this grid, fill it with how we grow
    the client's business, to attract clients; no images, no price or
    ad-cost estimates). Same layout as before: a wide teal tile, a white
    and a coral tile side by side, and a wide ink tile. */
export function FlHeroStats() {
  return (
    <div
      className="tw:grid tw:w-full tw:grid-cols-2 tw:gap-4 tw:text-left tw:max-bssm:gap-3"
      aria-hidden="true"
    >
      <div
        className="tw:col-span-2 tw:flex tw:min-h-[210px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:p-7 tw:text-white tw:max-bssm:min-h-[180px] tw:max-bssm:p-5"
        style={{
          background: `linear-gradient(135deg, #14b8a6 0%, ${TEAL} 55%, #0f766e 100%)`,
        }}
      >
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
          <span className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[19px]">
            <FiMapPin />
          </span>
          <span className="tw:flex tw:flex-wrap tw:justify-end tw:gap-1.5 tw:text-[12px] tw:font-medium tw:max-bssm:hidden">
            {["Tampa", "Miami", "Orlando", "Jacksonville", "+ your city"].map(
              (c) => (
                <span
                  key={c}
                  className="tw:rounded-full tw:bg-white/15 tw:px-2.5 tw:py-1"
                >
                  {c}
                </span>
              ),
            )}
          </span>
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(34px,3.4vw,52px)] tw:leading-[1.02] tw:font-medium tw:tracking-[-0.03em]">
            Top 3 on Google Maps
          </b>
          <span className="tw:mt-2 tw:block tw:text-[15.5px]/[1.45] tw:text-white/85 tw:max-bssm:text-[13px]">
            In every Florida city you serve, in English and Spanish
          </span>
        </span>
      </div>

      <div className="tw:flex tw:min-h-[200px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:bg-white tw:p-6 tw:text-(--ink) tw:[box-shadow:0_24px_50px_-36px_rgba(12,21,38,0.35)] tw:max-bssm:min-h-[170px] tw:max-bssm:p-4">
        <span className="tw:flex tw:items-start tw:justify-between">
          <span
            className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[19px]"
            style={{ background: "#ccfbf1", color: "#0f766e" }}
          >
            <FiPhoneCall />
          </span>
          <FiTrendingUp className="tw:size-6" style={{ color: TEAL }} />
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(22px,2.1vw,32px)] tw:leading-[1.08] tw:max-bssm:text-[20px] tw:font-medium tw:tracking-[-0.02em]">
            More booked jobs
          </b>
          <span className="tw:mt-2 tw:block tw:text-[14.5px]/[1.45] tw:text-(--text) tw:max-bssm:text-[12.5px]">
            Every call tracked from first ring to finished install
          </span>
        </span>
      </div>

      <div
        className="tw:flex tw:min-h-[200px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:p-6 tw:text-white tw:max-bssm:min-h-[170px] tw:max-bssm:p-4"
        style={{
          background: `linear-gradient(150deg, #fb923c 0%, ${CORAL} 50%, #ea580c 100%)`,
        }}
      >
        <span className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[22px]">
          <MdStorm />
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(22px,2.1vw,32px)] tw:leading-[1.08] tw:max-bssm:text-[20px] tw:font-medium tw:tracking-[-0.02em]">
            <span className="tw:whitespace-nowrap">Storm-season</span> ready
          </b>
          <span className="tw:mt-2 tw:block tw:text-[14.5px]/[1.45] tw:text-white/85 tw:max-bssm:text-[12.5px]">
            Pages and ads live before the calls flood in
          </span>
        </span>
      </div>

      <div className="tw:col-span-2 tw:flex tw:items-center tw:justify-between tw:gap-5 tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-7 tw:py-5 tw:text-white tw:max-bssm:flex-col tw:max-bssm:items-start tw:max-bssm:gap-3 tw:max-bssm:px-5">
        <span>
          <b className="tw:block tw:text-[clamp(22px,2vw,30px)] tw:leading-tight tw:font-medium tw:tracking-[-0.02em]">
            A full schedule, all year
          </b>
          <span className="tw:mt-1.5 tw:block tw:text-[14.5px] tw:text-white/70 tw:max-bssm:text-[12.5px]">
            Tune-up and membership offers fill the cooler months
          </span>
        </span>
        <span className="tw:flex tw:items-end tw:gap-1.5">
          {[40, 48, 56, 64, 72, 80, 86, 92, 96, 100].map((h, i) => (
            <i
              key={i}
              className="tw:block tw:w-2.5 tw:rounded-full tw:max-bssm:w-2"
              style={{
                height: `${Math.round(h * 0.34)}px`,
                background: i > 5 ? CORAL : "#fdba74",
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- growth UIs */

/** Google Maps result for "ac repair orlando": a small street map with
    three pins (yours highlighted) over the local list, yours at #1. */
export function FlMapPackUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[470px] tw:overflow-hidden tw:p-0 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <div className="tw:p-4 tw:pb-3">
        <span className="tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[13px] tw:font-medium">
          <SiGoogle className="tw:flex-none tw:text-[#4285f4]" /> ac repair
          orlando
        </span>
      </div>
      <div className="tw:relative tw:h-[150px] tw:overflow-hidden tw:bg-[#e8f3ee]">
        <svg
          viewBox="0 0 470 150"
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:size-full"
        >
          <path d="M330 0 C360 40 420 50 470 40 L470 0 Z" fill="#bfe3f5" />
          <path d="M0 120 C90 110 140 150 200 150 L0 150 Z" fill="#bfe3f5" />
          <g stroke="#ffffff" strokeWidth="7" fill="none">
            <path d="M0 52 L470 70" />
            <path d="M120 0 L150 150" />
            <path d="M290 0 L270 150" />
          </g>
          <g stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.9">
            <path d="M0 98 L470 112" />
            <path d="M40 0 L60 150" />
            <path d="M210 0 L205 150" />
            <path d="M380 40 L400 150" />
          </g>
        </svg>
        <span className="tw:absolute tw:top-[22%] tw:left-[36%] tw:flex tw:flex-col tw:items-center">
          <span
            className="tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11px] tw:font-semibold tw:text-white tw:[box-shadow:0_8px_18px_-8px_rgba(12,21,38,0.6)]"
            style={{ background: TEAL }}
          >
            Your HVAC Co
          </span>
          <MdLocationOn
            className="tw:-mt-0.5 tw:size-9"
            style={{ color: TEAL }}
          />
        </span>
        <MdLocationOn className="tw:absolute tw:top-[48%] tw:left-[66%] tw:size-6 tw:text-[#94a3b8]" />
        <MdLocationOn className="tw:absolute tw:top-[58%] tw:left-[16%] tw:size-6 tw:text-[#94a3b8]" />
      </div>
      <div className="tw:grid tw:gap-2 tw:p-4">
        <div className="tw:rounded-[14px] tw:bg-[#f0fdfa] tw:p-3 tw:ring-[1.5px] tw:ring-[#5eead4]">
          <span className="tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
              style={{ background: TEAL }}
            >
              1
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:truncate tw:text-[14px] tw:font-semibold">
                Your HVAC Co
              </b>
              <span className="tw:block tw:text-[12px] tw:text-(--muted)">
                AC repair · Open 24 hours · Orlando
              </span>
            </span>
          </span>
          <span className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[12px] tw:font-semibold">
            <span
              className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-1.5 tw:text-white"
              style={{ background: TEAL }}
            >
              <FiPhoneCall /> Call
            </span>
            <span className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:py-1.5 tw:ring-1 tw:ring-(--line)">
              <FiNavigation /> Directions
            </span>
          </span>
        </div>
        {[2, 3].map((n) => (
          <span
            key={n}
            className="tw:flex tw:items-center tw:gap-2.5 tw:px-3 tw:py-1.5 tw:opacity-60"
          >
            <span className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[12px] tw:font-bold tw:text-(--muted)">
              {n}
            </span>
            <span className="tw:h-2.5 tw:w-32 tw:rounded-full tw:bg-(--line)" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** A Google AI Overview naming the contractor for a Tampa search, with
    the other assistants that can recommend them underneath. Example. */
export function FlAiOverviewUi() {
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
          <HiSparkles className="tw:size-5" style={{ color: TEAL }} /> AI
          Overview
        </span>
        <Chip tone="muted">Example</Chip>
      </span>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-medium">
        <SiGoogle className="tw:flex-none tw:text-[#4285f4]" /> best ac repair
        company in tampa fl
      </span>
      <div className="tw:mt-3 tw:rounded-[16px] tw:bg-[linear-gradient(160deg,#f0fdfa,#fff7ed)] tw:p-4 tw:text-[13px]/[1.55]">
        For fast AC repair in Tampa,{" "}
        <b className="tw:font-semibold">Your HVAC Co</b> is a well-reviewed
        local choice:
        <ul className="tw:mt-2 tw:grid tw:gap-1.5">
          {[
            "24/7 emergency AC repair",
            "Technicians who speak Spanish",
            "Maintenance plans for Florida summers",
          ].map((t) => (
            <li key={t} className="tw:flex tw:items-center tw:gap-2">
              <i
                className="tw:block tw:size-1.5 tw:flex-none tw:rounded-full"
                style={{ background: TEAL }}
              />
              {t}
            </li>
          ))}
        </ul>
        <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
          {["yourhvacco.com", "Google reviews", "Google Maps"].map((src) => (
            <span
              key={src}
              className="tw:rounded-full tw:bg-white tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-medium tw:text-(--muted) tw:ring-1 tw:ring-(--line)"
            >
              {src}
            </span>
          ))}
        </span>
      </div>
      <span className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:gap-3 tw:text-[12px] tw:font-medium tw:text-(--muted)">
        Also recommended in
        <span className="tw:flex tw:gap-1.5">
          {[
            [<SiOpenai key="o" />, "#0c1526"],
            [<SiGooglegemini key="g" />, "#1a73e8"],
            [<SiPerplexity key="p" />, "#1f8a8a"],
          ].map(([icon, c], k) => (
            <span
              key={k}
              className="tw:grid tw:size-8 tw:place-items-center tw:rounded-[10px] tw:bg-(--panel) tw:text-[15px]"
              style={{ color: c as string }}
            >
              {icon}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}

/** After-job review flow: the text request, then the Google review it
    produces with the owner's reply. Example names. */
export function FlReviewFlowUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[460px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiMessageSquare />}
        title="After-job review request"
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-4 tw:max-w-[88%] tw:rounded-[16px] tw:rounded-bl-[5px] tw:bg-(--panel) tw:px-3.5 tw:py-3 tw:text-[13px]/[1.5]">
        Hi Maria, thanks for choosing Your HVAC Co today! Could you leave us a
        quick Google review?
        <span
          className="tw:mt-1.5 tw:block tw:font-semibold"
          style={{ color: "#1a73e8" }}
        >
          g.page/yourhvacco/review
        </span>
      </div>
      <span className="tw:mt-1.5 tw:block tw:text-[11px] tw:text-(--muted)">
        Sent as the job closed
      </span>
      <div className="tw:mt-4 tw:rounded-[16px] tw:p-4 tw:ring-1 tw:ring-(--line)">
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
          <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px]">
            <span
              className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
              style={{ background: CORAL }}
            >
              C
            </span>
            <b className="tw:font-semibold">Carlos R.</b>
          </span>
          <span className="tw:flex tw:gap-0.5">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar
                key={n}
                className="tw:size-3.5 tw:fill-[#f4b400] tw:text-[#f4b400]"
              />
            ))}
          </span>
        </span>
        <p className="tw:mt-2 tw:text-[13px]/[1.5] tw:text-(--text)">
          Fixed our AC the same afternoon, and the tech explained everything in
          Spanish for my mom.
        </p>
        <span
          className="tw:mt-3 tw:block tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px]/[1.45]"
          style={{ background: "#f0fdfa", color: "#0f766e" }}
        >
          <b className="tw:font-semibold">Owner reply:</b> Thank you, Carlos!
          Glad we could help your family stay cool.
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ ad setup */

/** Example Florida ad setup: what runs in each city, every call tracked.
    No costs (owner, 25 Oct 2026). */
export function FlAdSetupUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiPhoneCall />}
        title="Your Florida ad setup"
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {FL_AD_SETUP.map(([city, runs]) => (
          <li
            key={city}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[13px]"
          >
            <FiMapPin
              className="tw:size-3.5 tw:flex-none"
              style={{ color: TEAL }}
            />
            <span className="tw:min-w-0 tw:flex-1 tw:truncate tw:font-medium">
              {city}
            </span>
            {runs.map((r) => (
              <span
                key={r}
                className="tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11px] tw:font-semibold tw:whitespace-nowrap"
                style={{ background: "#fff7ed", color: "#9a3412" }}
              >
                {r}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: "#f0fdfa", color: "#0f766e" }}
      >
        Every call traced to its city and keyword
      </span>
    </div>
  );
}

/* ------------------------------------------------------------ regions */

/** One region tile: coloured top band, region name, cities, focus. */
export function FlRegionTile({
  name,
  cities,
  focus,
  index,
  icon,
}: {
  name: string;
  cities: string;
  focus: string;
  index: number;
  icon: ReactNode;
}) {
  const tone = index % 2 ? TEAL : CORAL;
  return (
    <div className="tw:flex tw:h-full tw:flex-col tw:overflow-hidden tw:rounded-[24px] tw:bg-white tw:ring-1 tw:ring-(--line)">
      <span
        className="tw:flex tw:items-center tw:gap-2.5 tw:px-5 tw:py-3.5 tw:text-[17px] tw:font-semibold tw:text-white"
        style={{ background: tone }}
      >
        <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[15px]">
          {icon}
        </span>
        {name}
      </span>
      <span className="tw:flex tw:flex-1 tw:flex-col tw:gap-2 tw:px-5 tw:pt-4 tw:pb-5">
        <span className="tw:text-[15px] tw:font-medium tw:text-(--ink)">
          {cities}
        </span>
        <span className="tw:text-[14.5px]/[1.5] tw:text-(--text)">{focus}</span>
      </span>
    </div>
  );
}
