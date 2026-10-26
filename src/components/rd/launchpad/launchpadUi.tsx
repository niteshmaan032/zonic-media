import type { ReactNode } from "react";
import {
  FiCheck,
  FiCheckCircle,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiMapPin,
  FiPenTool,
  FiPhoneCall,
} from "react-icons/fi";
import {
  SiFacebook,
  SiGoogle,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import {
  Fill,
  Flip,
  Slot,
  TICK_AT,
  inAt,
  run,
} from "@/components/rd/delaware/uiBits";

/* UI for the LaunchPad page redesign (24 Oct 2026); none of it appears on
   another page. Hero "idea → launched business" (owner's pick from three
   sketches, 24 Oct), the three process-step UIs and the
   launch-day card on the dark band. Pillar colours: deep indigo and
   orange (from the page's rocket artwork). "Your Business" placeholders;
   no client figures. No third-party directory names (copy brief, 24 Oct):
   the "where you show up" tile lists channels, not companies. */

const INDIGO = "#2a1aa8";
const ORANGE = "#f97316";

/* ------------------------------------------------------------ H1 icon */

/** A rocket, sized in em to sit inside the H1 (same family as the kit's
    InlinePin / InlineChat). Paths only, no <text>. */
export function InlineRocket({ id = "lp-rocket" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.9em] tw:w-[0.9em] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 80"
        className="tw:block tw:size-full tw:overflow-visible"
      >
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#d9dcef" />
          </linearGradient>
          <linearGradient id={`${id}-flame`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fdba74" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <g transform="rotate(45 40 40)">
          <path
            d="M40 66 C 34 74 36 80 40 84 C 44 80 46 74 40 66 Z"
            fill={`url(#${id}-flame)`}
          />
          <path d="M28 52 L18 64 L30 60 Z" fill={INDIGO} />
          <path d="M52 52 L62 64 L50 60 Z" fill={INDIGO} />
          <path
            d="M40 4 C 52 14 56 32 54 58 L26 58 C 24 32 28 14 40 4 Z"
            fill={`url(#${id}-body)`}
            stroke={INDIGO}
            strokeWidth="3"
          />
          <path
            d="M40 4 C 46 9 50 15 52 22 L28 22 C 30 15 34 9 40 4 Z"
            fill={ORANGE}
          />
          <circle cx="40" cy="36" r="7" fill={INDIGO} />
          <circle cx="40" cy="36" r="3.5" fill="#c7d2fe" />
          <rect x="30" y="57" width="20" height="5" rx="2" fill={INDIGO} />
        </g>
      </svg>
    </span>
  );
}

/* -------------------------------------------------------- hero board */

const SWATCHES = [INDIGO, ORANGE, "#fdba74", "#0c1526"];

/* The questions on the idea note, each answered (? → ✓) as the launched
   business assembles on the right. */
const QUESTIONS = ["Logo?", "Website?", "Google listing?", "Customers?"];

/** Hero (owner, 24 Oct, picked from three sketches): idea → launched
    business. A hand-written idea note whose questions turn into ticks, an
    animated arrow ("Zonic LaunchPad · 2–3 weeks"), and the launched
    business assembling piece by piece: brand, website, Google Business
    Profile on a phone, social profiles and a new-customer call. Real px
    with breakpoints (stacks on tablets and phones, arrow turns down). 8s
    loop on the shared de-* keyframes; resting state is the launched
    business. Decorative. */
export function IdeaToLaunchUi() {
  return (
    <div
      className="tw:mx-auto tw:grid tw:w-full tw:max-w-[1120px] tw:grid-cols-[minmax(0,0.78fr)_150px_minmax(0,1.62fr)] tw:items-center tw:gap-0 tw:text-left tw:text-(--ink) tw:max-bslg:max-w-[640px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-2"
      aria-hidden="true"
    >
      {/* Idea note */}
      <div className="tw:relative tw:-rotate-[3deg] tw:rounded-[22px] tw:bg-[#fff6d6] tw:px-7 tw:pt-9 tw:pb-8 tw:[box-shadow:0_30px_60px_-36px_rgba(12,21,38,0.45)] tw:ring-1 tw:ring-[#f4e3a1] tw:max-bslg:mx-auto tw:max-bslg:w-full tw:max-bslg:max-w-[420px] tw:max-bssm:px-6">
        <span className="tw:absolute tw:-top-3 tw:left-1/2 tw:h-6 tw:w-24 tw:-translate-x-1/2 tw:rotate-2 tw:rounded-[4px] tw:bg-[#c7d2fe]/80" />
        <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px] tw:font-semibold tw:tracking-[0.12em] tw:text-[#8a6400] tw:uppercase">
          <FiEdit3 /> My idea
        </span>
        <p className="tw:mt-3 tw:text-[27px]/[1.15] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[23px]">
          Start my own business
        </p>
        <span className="tw:mt-2 tw:block tw:h-[3px] tw:w-40 tw:rounded-full tw:bg-[#f97316]/60" />
        <ul className="tw:mt-6 tw:grid tw:gap-2.5">
          {QUESTIONS.map((q, i) => (
            <li
              key={q}
              className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:pb-2 tw:[border-bottom:1.5px_dashed_#e9d48a] tw:text-[16px] tw:font-medium"
            >
              {q}
              <Flip
                n={((i % 3) + 1) as 1 | 2 | 3}
                from={
                  <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-[#fde4e1] tw:text-[13px] tw:font-bold tw:text-[#b8352a]">
                    ?
                  </span>
                }
                to={
                  <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[12px] tw:text-white">
                    <FiCheck />
                  </span>
                }
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="tw:relative tw:flex tw:flex-col tw:items-center tw:gap-3 tw:px-2 tw:max-bslg:py-2">
        <span className="tw:rounded-full tw:bg-(--ink) tw:px-3 tw:py-1.5 tw:text-[12px] tw:font-semibold tw:whitespace-nowrap tw:text-white">
          Zonic LaunchPad
        </span>
        <svg
          viewBox="0 0 140 40"
          className="tw:h-10 tw:w-[130px] tw:max-bslg:h-[70px] tw:max-bslg:w-10 tw:max-bslg:rotate-90"
          fill="none"
        >
          <path
            d="M4 20 H118"
            stroke={INDIGO}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="7 6"
            style={run("de-flow", 0.8, "linear")}
          />
          <path
            d="M110 10 L128 20 L110 30"
            stroke={ORANGE}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="tw:rounded-full tw:bg-[#ffedd5] tw:px-3 tw:py-1 tw:text-[12px] tw:font-semibold tw:whitespace-nowrap tw:text-[#c2410c]">
          2–3 weeks
        </span>
      </div>

      {/* Launched business */}
      <div className="tw:relative tw:rounded-[30px] tw:bg-white tw:p-5 tw:ring-1 tw:ring-(--line) tw:[box-shadow:0_50px_90px_-60px_rgba(42,26,168,0.6)] tw:max-bssm:rounded-[22px] tw:max-bssm:p-3.5">
        {/* Brand row */}
        <div
          className="tw:flex tw:flex-wrap tw:items-center tw:gap-3"
          style={inAt(1)}
        >
          <span
            className="tw:grid tw:size-11 tw:place-items-center tw:rounded-[13px] tw:text-[15px] tw:font-bold tw:text-white"
            style={{ background: INDIGO }}
          >
            YB
          </span>
          <span className="tw:min-w-0">
            <b className="tw:block tw:text-[17px] tw:font-semibold">
              Your Business
            </b>
            <span className="tw:flex tw:gap-1">
              {SWATCHES.map((c) => (
                <i
                  key={c}
                  className="tw:mt-1 tw:block tw:size-3.5 tw:rounded-full"
                  style={{ background: c }}
                />
              ))}
            </span>
          </span>
          <span className="tw:ml-auto">
            <Flip
              n={3}
              from={<Chip tone="amber">Launching</Chip>}
              to={
                <Chip tone="green">
                  <FiCheck /> Live
                </Chip>
              }
            />
          </span>
        </div>

        <div className="tw:mt-4 tw:grid tw:grid-cols-[minmax(0,1fr)_178px] tw:gap-3 tw:max-bssm:grid-cols-1">
          <div className="tw:grid tw:content-start tw:gap-3">
            {/* Website */}
            <div
              className="tw:overflow-hidden tw:rounded-[16px] tw:ring-1 tw:ring-(--line)"
              style={inAt(2)}
            >
              <div className="tw:flex tw:items-center tw:gap-1.5 tw:bg-(--panel) tw:px-3 tw:py-2">
                {["#f87171", "#fbbf24", "#34d399"].map((c) => (
                  <i
                    key={c}
                    className="tw:block tw:size-2 tw:rounded-full"
                    style={{ background: c }}
                  />
                ))}
                <span className="tw:ml-2 tw:rounded-full tw:bg-white tw:px-2.5 tw:py-0.5 tw:text-[11px] tw:text-(--muted)">
                  yourbusiness.com
                </span>
              </div>
              <div className="tw:grid tw:grid-cols-[1.15fr_0.85fr] tw:items-center tw:gap-3 tw:bg-white tw:p-4">
                <div>
                  <b className="tw:block tw:text-[17px]/[1.2] tw:font-medium tw:tracking-[-0.02em]">
                    Service you can trust, close to home
                  </b>
                  <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-11/12 tw:rounded-full tw:bg-[#e2e8f0]" />
                  <i className="tw:mt-1.5 tw:block tw:h-1.5 tw:w-2/3 tw:rounded-full tw:bg-[#e2e8f0]" />
                  <span className="tw:mt-3 tw:flex tw:gap-2 tw:text-[11.5px] tw:font-semibold">
                    <span
                      className="tw:rounded-full tw:px-3 tw:py-1.5 tw:text-white"
                      style={{ background: ORANGE }}
                    >
                      Book now
                    </span>
                    <span className="tw:rounded-full tw:border tw:border-(--ink) tw:px-3 tw:py-1.5">
                      Call us
                    </span>
                  </span>
                </div>
                <span className="tw:relative tw:block tw:h-[104px] tw:overflow-hidden tw:rounded-[12px] tw:bg-[linear-gradient(150deg,#e0e7ff,#ede9fe_55%,#ffedd5)]">
                  <svg
                    viewBox="0 0 120 80"
                    preserveAspectRatio="xMidYMid slice"
                    className="tw:absolute tw:inset-0 tw:size-full"
                  >
                    <circle cx="88" cy="22" r="9" fill="#fdba74" />
                    <path
                      d="M0 80 L36 40 L58 62 L76 46 L120 80 Z"
                      fill="#a5b4fc"
                    />
                    <path
                      d="M0 80 L26 58 L48 80 Z"
                      fill={INDIGO}
                      opacity="0.55"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Social profiles + listings */}
            <div className="tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bssm:grid-cols-1">
              <div
                className="tw:rounded-[16px] tw:bg-(--panel) tw:p-3"
                style={inAt(4)}
              >
                <span className="tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
                  Social profiles
                </span>
                <span className="tw:mt-2 tw:flex tw:gap-1.5">
                  {[
                    [<SiFacebook key="f" />, "#1877f2"],
                    [<SiInstagram key="i" />, "#e1306c"],
                    [<SiLinkedin key="l" />, "#0a66c2"],
                    [<SiYoutube key="y" />, "#ff0000"],
                  ].map(([icon, c], i) => (
                    <span
                      key={i}
                      className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[10px] tw:text-[15px] tw:text-white"
                      style={{ background: c as string }}
                    >
                      {icon}
                    </span>
                  ))}
                </span>
              </div>
              <div
                className="tw:rounded-[16px] tw:bg-(--panel) tw:p-3"
                style={inAt(5)}
              >
                <span className="tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
                  Where you show up
                </span>
                <span className="tw:mt-2 tw:grid tw:grid-cols-2 tw:gap-1 tw:text-[11.5px] tw:font-medium">
                  {[
                    [<SiGoogle key="g" />, "Search"],
                    [<FiMapPin key="m" />, "Maps"],
                    [<FiGlobe key="d" />, "Directories"],
                    [<FiPhoneCall key="c" />, "Calls"],
                  ].map(([icon, label], i) => (
                    <span
                      key={i}
                      className="tw:flex tw:items-center tw:gap-1.5"
                    >
                      <span className="tw:text-(--ink-2)">{icon}</span>
                      {label}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Phone: Google Business Profile */}
          <div
            className="tw:relative tw:mx-auto tw:h-[318px] tw:w-[178px] tw:overflow-hidden tw:rounded-[30px] tw:border-[7px] tw:border-(--ink) tw:bg-white tw:[box-shadow:0_30px_50px_-30px_rgba(12,21,38,0.6)] tw:max-bssm:h-[300px]"
            style={inAt(3)}
          >
            <span className="tw:absolute tw:top-1.5 tw:left-1/2 tw:h-3.5 tw:w-14 tw:-translate-x-1/2 tw:rounded-full tw:bg-(--ink)" />
            <div className="tw:relative tw:h-[104px] tw:bg-[#e9eef4]">
              <svg
                viewBox="0 0 160 100"
                preserveAspectRatio="xMidYMid slice"
                className="tw:absolute tw:inset-0 tw:size-full"
              >
                <path
                  d="M0 70 C 40 60 70 90 110 80 S 150 60 160 66 L160 100 L0 100 Z"
                  fill="#d4e6f7"
                />
                <path
                  d="M0 40 H160 M60 0 V100 M120 0 V100 M0 95 L100 0"
                  stroke="#fff"
                  strokeWidth="5"
                  fill="none"
                />
              </svg>
              <svg
                viewBox="0 0 24 30"
                className="tw:absolute tw:top-[30px] tw:left-1/2 tw:h-[30px] tw:w-[24px] tw:-translate-x-1/2"
              >
                <path
                  d="M12 1 C 6 1 2 5.5 2 11 C 2 18 12 29 12 29 C 12 29 22 18 22 11 C 22 5.5 18 1 12 1 Z"
                  fill="#ea4335"
                  stroke="#fff"
                  strokeWidth="1.8"
                />
                <circle cx="12" cy="11" r="4" fill="#fff" />
              </svg>
            </div>
            <div className="tw:px-3 tw:pt-3">
              <span className="tw:flex tw:items-center tw:gap-1.5">
                <b className="tw:text-[14px] tw:font-semibold">Your Business</b>
                <FiCheckCircle className="tw:size-3.5 tw:text-[#1a73e8]" />
              </span>
              <span className="tw:block tw:text-[11px] tw:text-(--muted)">
                Your category · Open now
              </span>
              <span className="tw:mt-2.5 tw:grid tw:grid-cols-3 tw:gap-1 tw:text-[10px] tw:font-semibold tw:text-[#1a73e8]">
                {[
                  [<FiPhoneCall key="c" />, "Call"],
                  [<FiMapPin key="d" />, "Directions"],
                  [<FiGlobe key="w" />, "Website"],
                ].map(([icon, label], i) => (
                  <span
                    key={i}
                    className="tw:grid tw:justify-items-center tw:gap-1"
                  >
                    <span
                      className={cx(
                        "tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-[13px]",
                        i === 0
                          ? "tw:bg-[#1a73e8] tw:text-white"
                          : "tw:bg-[#e8f0fe]",
                      )}
                    >
                      {icon}
                    </span>
                    {label}
                  </span>
                ))}
              </span>
              <span className="tw:mt-3 tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--green-soft) tw:px-2.5 tw:py-1 tw:text-[10.5px] tw:font-semibold tw:text-[#1f7a3a]">
                <FiCheck className="tw:size-3" /> Google Business Profile
                verified
              </span>
            </div>
          </div>
        </div>

        {/* New customer call */}
        <span
          className="tw:absolute tw:-bottom-6 tw:left-8 tw:flex tw:items-center tw:gap-3 tw:rounded-[16px] tw:bg-(--ink) tw:py-2.5 tw:pr-5 tw:pl-2.5 tw:text-white tw:[box-shadow:0_20px_40px_-18px_rgba(12,21,38,0.7)] tw:max-bssm:left-3"
          style={run("de-late")}
        >
          <span className="tw:grid tw:size-10 tw:place-items-center tw:rounded-[12px] tw:bg-(--green) tw:text-[17px]">
            <FiPhoneCall />
          </span>
          <span className="tw:text-[13px]/[1.3]">
            <b className="tw:block tw:font-semibold">New customer call</b>
            <span className="tw:text-white/60">
              From your Google profile · just now
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

/** Small rocket glyph for icon tiles (white, no gradient). */
function InlineRocketGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="tw:size-[1em]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

/* ------------------------------------------------------------ steps */

type Step = { tag: string };

const BRIEF: [string, string][] = [
  ["Business", "Your Business"],
  ["Services", "Your main services"],
  ["Service area", "Your city and nearby towns"],
  ["Customers", "Who you want to reach"],
];

const PAGES = ["Home", "Services", "About", "Contact"];

const LAUNCH = [
  "Local SEO setup",
  "Lead capture tested",
  "Calls and forms tracked",
  "Launch support ready",
];

/** LaunchPad process UIs (one per step). */
export function launchpadStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3] = steps;
  return [
    <Slot key="lp-brief">
      <UiHead
        icon={<FiEdit3 />}
        tone="gold"
        title="Business brief"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {BRIEF.map(([k, v], i) => (
          <li
            key={k}
            className="tw:grid tw:grid-cols-[92px_minmax(0,1fr)] tw:items-center tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px]"
            style={inAt(i + 1)}
          >
            <span className="tw:text-(--muted)">{k}</span>
            <b className="tw:truncate tw:font-semibold">{v}</b>
          </li>
        ))}
      </ul>
      <span
        className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
        style={run("de-late")}
      >
        <FiCheck className="tw:size-3.5" /> Competitors reviewed
      </span>
    </Slot>,

    <Slot key="lp-build">
      <UiHead
        icon={<FiPenTool />}
        title="Brand and build"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <span className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2.5">
        <span
          className="tw:grid tw:size-9 tw:place-items-center tw:rounded-[10px] tw:text-[13px] tw:font-bold tw:text-white"
          style={{ background: INDIGO }}
        >
          YB
        </span>
        <span className="tw:flex tw:gap-1">
          {SWATCHES.map((c) => (
            <i
              key={c}
              className="tw:block tw:size-5 tw:rounded-full tw:ring-2 tw:ring-white"
              style={{ background: c }}
            />
          ))}
        </span>
        <Chip tone="green" className="tw:ml-auto">
          Logo approved
        </Chip>
      </span>
      <ul className="tw:grid tw:grid-cols-4 tw:gap-1.5">
        {PAGES.map((p, i) => (
          <li
            key={p}
            className="tw:rounded-[9px] tw:bg-(--panel) tw:p-1.5"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:gap-1 tw:rounded-[6px] tw:bg-white tw:p-1.5">
              <i className="tw:block tw:h-1 tw:w-2/3 tw:rounded-full tw:bg-[#cbd5e1]" />
              <i className="tw:block tw:h-4 tw:rounded-[3px] tw:bg-[#e0e7ff]" />
              <i
                className="tw:block tw:h-1.5 tw:w-1/2 tw:rounded-full"
                style={{ background: ORANGE }}
              />
            </span>
            <span className="tw:mt-1 tw:block tw:text-center tw:text-[10px] tw:font-semibold">
              {p}
            </span>
          </li>
        ))}
      </ul>
      <span className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium">
        <FiMapPin className="tw:size-3.5 tw:text-[#ea4335]" /> Google Business
        Profile
        <Chip tone="green" className="tw:ml-auto">
          Verified
        </Chip>
      </span>
      <div>
        <span className="tw:mb-1 tw:flex tw:justify-between tw:text-[10.5px] tw:font-semibold">
          <span>Website build</span>
          <span className="tw:text-[#c2410c]">Mobile-ready</span>
        </span>
        <Fill w={100} color={ORANGE} />
      </div>
    </Slot>,

    <Slot key="lp-launch">
      <UiHead
        icon={<FiCheckCircle />}
        tone="green"
        title="Launch checklist"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {LAUNCH.map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
          >
            <i
              className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[9px] tw:text-white"
              style={run(TICK_AT[i])}
            >
              <FiCheck />
            </i>
            {t}
          </li>
        ))}
      </ul>
      <span
        className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold tw:text-white"
        style={{ background: INDIGO, ...run("de-late") }}
      >
        Your business is live
        <span className="tw:text-[15px]">
          <InlineRocketGlyph />
        </span>
      </span>
    </Slot>,
  ];
}

/* ------------------------------------------------------- launch day */

const LIVE: [ReactNode, string, string][] = [
  [<FiGlobe key="w" />, "Website", "Live and mobile-ready"],
  [<FiMapPin key="g" />, "Google Business Profile", "Verified"],
  [<FiFileText key="f" />, "Contact form", "Tested and tracked"],
];

/** Dark band: launch day. Everything live, then the first inquiry
    arriving (example). Decorative. */
export function LaunchDayUi() {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<InlineRocketGlyph />}
        tone="ink"
        title="Launch day · Your Business"
        right={
          <Flip
            n={2}
            from={<Chip tone="amber">Final checks</Chip>}
            to={<Chip tone="green">Live</Chip>}
          />
        }
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {LIVE.map(([icon, k, v], i) => (
          <li
            key={k}
            className="tw:grid tw:grid-cols-[30px_minmax(0,1fr)_auto] tw:items-center tw:gap-2.5 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:size-[30px] tw:place-items-center tw:rounded-[9px] tw:bg-[#ede9fe] tw:text-[14px] tw:text-[#2a1aa8]">
              {icon}
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:truncate tw:text-[12.5px] tw:font-semibold">
                {k}
              </b>
              <span className="tw:block tw:truncate tw:text-[11px] tw:text-(--muted)">
                {v}
              </span>
            </span>
            <FiCheckCircle className="tw:size-4 tw:text-(--green)" />
          </li>
        ))}
      </ul>
      <div className="tw:mt-4">
        <span className="tw:mb-1.5 tw:flex tw:justify-between tw:text-[11px] tw:font-semibold">
          <span>Setup complete</span>
          <span className="tw:text-[#1f7a3a]">100%</span>
        </span>
        <Fill w={100} color={ORANGE} />
      </div>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2.5 tw:rounded-[14px] tw:bg-(--ink) tw:px-3 tw:py-2.5 tw:text-white"
        style={run("de-late")}
      >
        <span className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:bg-(--green) tw:text-[15px]">
          <FiPhoneCall />
        </span>
        <span className="tw:text-[12px]/[1.35]">
          <b className="tw:block tw:font-semibold">First inquiry</b>
          <span className="tw:text-white/60">
            From your Google profile · example
          </span>
        </span>
      </span>
    </div>
  );
}
