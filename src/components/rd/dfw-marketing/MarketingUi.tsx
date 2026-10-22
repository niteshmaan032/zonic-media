import type { CSSProperties, ReactNode } from "react";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiGlobe,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { SiGoogle, SiGoogleads, SiGooglemaps } from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { AvatarPh } from "@/components/rd/dfw-kit/visuals";
import {
  AboutCard,
  AboutUi,
  Chip,
  GrowBar,
  StepUi,
  Swap,
  Switch,
  UI_CARD,
  UiHead,
  uiDelay,
} from "@/components/rd/dfw-kit/ui";

/* UI that replaced the photos on /services/dallas-fort-worth/digital-
   marketing-agency (19 Oct 2026): the about-section card + leads dashboard
   and one small UI per process step. Facts on the card come from the page
   copy (one dedicated team, monthly reports on calls and leads, no
   long-term contract). */

/* ------------------------------------------------------------ about */

export function TeamCard() {
  return (
    <AboutCard
      tone="ink"
      top={
        <span className="tw:flex tw:items-center">
          <AvatarPh tone="a" ring="var(--ink)" />
          <AvatarPh tone="b" ring="var(--ink)" />
          <AvatarPh tone="c" ring="var(--ink)" />
          <span
            className="tw:-ml-3 tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:border-3 tw:border-(--ink) tw:bg-(--gold) tw:text-xl tw:text-(--ink) tw:max-bslg:hidden"
            aria-hidden="true"
          >
            <FiPlus />
          </span>
        </span>
      }
      kicker="Your DFW team"
      title="One team for every channel"
      points={[
        "Google Business Profile",
        "Local SEO and city pages",
        "Website and landing pages",
        "Google Ads",
      ]}
      foot="One monthly report on calls and leads. No long-term contract."
    />
  );
}

const CHANNELS = [
  { name: "Google Maps", Icon: SiGooglemaps, color: "#34a853", w: 84 },
  { name: "Google Search", Icon: SiGoogle, color: "#4285f4", w: 64 },
  { name: "Google Ads", Icon: SiGoogleads, color: "#f9ab00", w: 50 },
  { name: "Website forms", Icon: FiGlobe, color: "var(--ink)", w: 72 },
];

const NEW_LEADS = [
  { Icon: FiPhone, text: "New call", from: "Google Maps" },
  { Icon: FiGlobe, text: "New quote form", from: "your website" },
  { Icon: FiPhone, text: "New call", from: "Google Ads" },
];

/** Leads by channel, with new leads popping in under the card. */
export function LeadsDashboard() {
  return (
    <AboutUi>
      <div className="tw:relative tw:w-[min(100%,520px)] tw:pb-6 tw:max-bssm:pb-0">
        <div className={cx(UI_CARD, "tw:grid tw:gap-4 tw:p-5 tw:max-bssm:gap-3 tw:max-bssm:p-4")}>
          <UiHead icon={<FiTrendingUp />} title="Leads by channel" right={<Chip tone="green">This month</Chip>} />
          <ul className="tw:grid tw:gap-3.5 tw:max-bssm:gap-2.5">
            {CHANNELS.map(({ name, Icon, color, w }, i) => (
              <li
                key={name}
                className="tw:grid tw:grid-cols-[26px_minmax(0,112px)_minmax(0,1fr)_22px] tw:items-center tw:gap-3 tw:max-bssm:grid-cols-[22px_minmax(0,92px)_minmax(0,1fr)_20px] tw:max-bssm:gap-2"
              >
                <span
                  className="tw:grid tw:size-[26px] tw:place-items-center tw:rounded-lg tw:text-[13px] tw:text-white tw:max-bssm:size-[22px]"
                  style={{ background: color }}
                >
                  <Icon />
                </span>
                <span className="tw:truncate tw:text-[13px] tw:font-medium tw:max-bssm:text-[12px]">{name}</span>
                <GrowBar w={w} at={i * 0.35} color={color} />
                <span className="tw:grid tw:size-[22px] tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-xs tw:text-(--green) tw:max-bssm:size-5">
                  <FiArrowUpRight />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="tw:absolute tw:right-6 tw:-bottom-1 tw:grid tw:max-bssm:hidden">
          {NEW_LEADS.map(({ Icon, text, from }, i) => (
            <span
              key={`${text}-${from}`}
              className={cx(
                "tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:gap-2.5 tw:rounded-2xl tw:bg-white tw:py-2.5 tw:pr-4 tw:pl-2.5 tw:text-[13px] tw:[box-shadow:var(--lift)] tw:animate-[ui-cycle_9s_ease_infinite_both]",
                i ? "tw:opacity-0" : "",
              )}
              style={uiDelay(i * 3)}
            >
              <span className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-white">
                <Icon />
              </span>
              <span>
                <b className="tw:block tw:font-medium">{text}</b>
                <span className="tw:text-[11.5px] tw:text-(--muted)">from {from}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </AboutUi>
  );
}

/* --------------------------------------------------------- process */

const AUDIT: [string, number, string, "amber" | "green" | "red" | "blue"][] = [
  ["Google Business Profile", 46, "Fix", "amber"],
  ["Website", 72, "Good", "green"],
  ["Rankings by city", 30, "Gaps", "red"],
  ["Competitors", 64, "Mapped", "blue"],
];

function AuditStep() {
  return (
    <StepUi>
      <UiHead icon={<FiSearch />} title="Metro visibility audit" right={<Chip tone="blue">Free</Chip>} />
      {AUDIT.map(([label, w, status, tone], i) => (
        <div key={label} className="tw:grid tw:grid-cols-[minmax(0,1fr)_auto] tw:items-center tw:gap-x-3 tw:gap-y-1.5">
          <span className="tw:truncate tw:text-[12.5px] tw:font-medium">{label}</span>
          <Chip tone={tone}>{status}</Chip>
          <GrowBar
            w={w}
            at={i * 0.4}
            color={tone === "green" ? "var(--green)" : tone === "red" ? "#ea4334" : tone === "amber" ? "#f0b429" : "var(--blue)"}
            className="tw:col-span-2"
          />
        </div>
      ))}
    </StepUi>
  );
}

const SETUP = ["Categories", "Services", "Service area", "Matching details", "Call tracking"];

function FoundationStep() {
  return (
    <StepUi>
      <UiHead icon={<SiGooglemaps />} tone="green" title="Profile setup" right={<Chip tone="green">Weeks 2–4</Chip>} />
      <ul className="tw:grid tw:gap-1.5">
        {SETUP.map((item, i) => (
          <li
            key={item}
            className="tw:flex tw:items-center tw:justify-between tw:rounded-xl tw:bg-(--panel) tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium"
          >
            {item}
            <Switch at={0.4 + i * 0.5} />
          </li>
        ))}
      </ul>
    </StepUi>
  );
}

const SUBURBS = [
  ["/plano", "Plano, TX"],
  ["/frisco", "Frisco, TX"],
  ["/mckinney", "McKinney, TX"],
];

function SuburbsStep() {
  return (
    <StepUi>
      <UiHead icon={<FiMapPin />} title="City pages" right={<Chip tone="muted">Month 2</Chip>} />
      {SUBURBS.map(([path, city], i) => (
        <div key={path} className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-xl tw:border tw:border-(--line) tw:px-3 tw:py-2">
          <FiMapPin className="tw:flex-none tw:text-[#ea4334]" />
          <span className="tw:grid tw:min-w-0">
            <b className="tw:truncate tw:text-[13px] tw:font-medium">{city}</b>
            <span className="tw:truncate tw:text-[11px] tw:text-(--muted)">yourbusiness.com{path}</span>
          </span>
          <span className="tw:ml-auto">
            <Swap at={i * 0.9} from={<Chip tone="amber">Drafting</Chip>} to={<Chip tone="green">Published</Chip>} />
          </span>
        </div>
      ))}
      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        <Chip tone="blue">+ local links</Chip>
        <Chip tone="blue">+ reviews that name the town</Chip>
      </span>
    </StepUi>
  );
}

const SERIES: [string, string, string][] = [
  ["Calls", "var(--blue)", "M0 92 C 40 88 70 80 100 72 S 170 50 200 40 S 270 18 300 10"],
  ["Forms", "#f0b429", "M0 100 C 50 98 80 92 120 86 S 200 70 240 60 S 280 50 300 46"],
  ["Map views", "var(--green)", "M0 84 C 40 80 80 70 120 60 S 190 44 230 30 S 280 24 300 20"],
];

function ReportStep() {
  return (
    <StepUi>
      <UiHead
        icon={<FiBarChart2 />}
        title="Monthly report"
        right={<Swap from={<Chip tone="amber">Drafting</Chip>} to={<Chip tone="green">Sent</Chip>} />}
      />
      <svg viewBox="0 0 300 110" className="tw:h-[110px] tw:w-full" preserveAspectRatio="none">
        {[28, 56, 84].map((y) => (
          <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#e3e9f2" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
        ))}
        {SERIES.map(([name, color, d], i) => (
          <path
            key={name}
            d={d}
            pathLength={1}
            fill="none"
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray="1"
            vectorEffect="non-scaling-stroke"
            className="tw:animate-[ui-draw_8s_ease_infinite_both]"
            style={uiDelay(i * 0.3) as CSSProperties}
          />
        ))}
      </svg>
      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        {SERIES.map(([name, color]) => (
          <span key={name} className="tw:flex tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-(--panel) tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-medium">
            <i className="tw:size-2 tw:rounded-full" style={{ background: color }} />
            {name}
            <FiArrowUpRight className="tw:text-(--green)" />
          </span>
        ))}
      </span>
    </StepUi>
  );
}

/** One UI per process step, in step order. */
export const marketingStepUi: ReactNode[] = [
  <AuditStep key="audit" />,
  <FoundationStep key="foundation" />,
  <SuburbsStep key="suburbs" />,
  <ReportStep key="report" />,
];
