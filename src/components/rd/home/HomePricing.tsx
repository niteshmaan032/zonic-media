import type { ReactNode } from "react";
import {
  FiCalendar,
  FiFileText,
  FiMapPin,
  FiMonitor,
  FiSettings,
  FiShield,
  FiTarget,
  FiVideo,
  FiZap,
} from "react-icons/fi";
import {
  CenterHead,
  Label,
  Pill,
  Section,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";
import { ADD_ONS } from "./pricing";
import { PricingPlans } from "./PricingPlans";

/* Pricing (owner, 23 Oct 2026; layout after the owner's reference image):
   heading, three trust points, the billing toggle with plan cards and the
   "Compare plans" pop-up (PricingPlans, client), optional add-ons and a
   custom-plan strip. Used as a section on /home2 and the Delaware pages,
   and in pieces on /pricing (where the table is inline). */

const TRUST = [
  {
    icon: <FiCalendar />,
    t: "Monthly or annual",
    d: "Pay monthly, or save with annual billing",
  },
  {
    icon: <FiShield />,
    t: "Clear deliverables",
    d: "Know exactly what you get each month",
  },
  {
    icon: <FiZap />,
    t: "Ad spend separate",
    d: "Paid to Google and Meta, never marked up",
  },
];

const ADD_ON_ICON = {
  site: <FiMonitor />,
  page: <FiFileText />,
  pin: <FiMapPin />,
  ads: <FiTarget />,
  social: <FiVideo />,
  tech: <FiSettings />,
};

/** The three billing/trust points under the pricing heading. */
export function TrustPoints({ className }: { className?: string }) {
  return (
    <ul
      className={cx(
        "tw:flex tw:flex-wrap tw:justify-center tw:gap-x-8 tw:gap-y-4",
        className,
      )}
    >
      {TRUST.map((item) => (
        <li
          key={item.t}
          className="tw:flex tw:items-center tw:gap-3 tw:text-left"
        >
          <span
            className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[18px] tw:text-(--blue)"
            aria-hidden="true"
          >
            {item.icon}
          </span>
          <span className="tw:text-[13.5px]/[1.35] tw:text-(--text)">
            <b className="tw:block tw:text-[15px] tw:text-(--ink)">{item.t}</b>
            {item.d}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Optional add-on services (h3 inside a section, h2 on /pricing). */
export function AddOnsGrid({
  title,
  lead,
  as: Heading = "h3",
  id,
  flush,
}: {
  title: string;
  lead: string;
  as?: "h2" | "h3";
  id?: string;
  /** No top margin (when the grid opens its own section). */
  flush?: boolean;
}) {
  return (
    <div className={flush ? undefined : "tw:mt-20 tw:max-bssm:mt-14"}>
      <Heading
        id={id}
        className="tw:text-center tw:text-[clamp(28px,3vw,42px)] tw:leading-[1.1] tw:tracking-[-0.03em]"
      >
        {title}
      </Heading>
      <p className="tw:mt-3 tw:text-center tw:text-[16.5px] tw:text-(--text)">
        {lead}
      </p>
      <ul className="tw:mt-8 tw:grid tw:grid-cols-6 tw:gap-4 tw:max-bsxl:grid-cols-3 tw:max-bssm:grid-cols-2 tw:max-bssm:gap-3">
        {ADD_ONS.map((a) => (
          <li
            key={a.name}
            className="tw:flex tw:flex-col tw:items-center tw:rounded-[24px] tw:bg-white tw:px-4 tw:py-6 tw:text-center tw:max-bssm:px-3 tw:max-bssm:py-5"
          >
            <span
              className="tw:grid tw:size-12 tw:place-items-center tw:rounded-full tw:bg-(--blue-soft) tw:text-[20px] tw:text-(--blue)"
              aria-hidden="true"
            >
              {ADD_ON_ICON[a.icon]}
            </span>
            <h4 className="tw:mt-4 tw:text-[15px]/[1.3] tw:font-semibold">
              {a.name}
            </h4>
            <p className="tw:mt-auto tw:pt-3 tw:text-[18px] tw:font-semibold tw:text-(--blue)">
              {a.price}
            </p>
            <p className="tw:text-[12.5px] tw:text-(--muted)">{a.unit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Blue "custom plan" strip with the page's call to action. */
export function CustomPlanStrip({
  title,
  text,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="tw:mt-10 tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-6 tw:rounded-(--r-xl) tw:bg-(--blue) tw:px-10 tw:py-8 tw:text-white tw:max-bssm:px-6 tw:max-bssm:py-7">
      <div className="tw:max-w-[620px]">
        <p className="tw:text-[clamp(22px,2.2vw,30px)] tw:leading-[1.2] tw:font-medium tw:tracking-[-0.02em]">
          {title}
        </p>
        <p className="tw:mt-2 tw:text-[16px]/[1.55] tw:text-white/80">{text}</p>
      </div>
      <Pill href={ctaHref} tone="white" arrow fullOnPhone>
        {ctaLabel}
      </Pill>
    </div>
  );
}

export type PricingCopy = {
  title: string;
  /** Ignored: the owner-locked baseline lead is always shown. */
  lead?: ReactNode;
  compareTitle: string;
  /** Ignored (owner-locked baseline). */
  compareLead?: string;
  addOnsTitle: string;
  /** Ignored (owner-locked baseline). */
  addOnsLead?: string;
  customTitle: string;
  /** Ignored (owner-locked baseline). */
  customText?: string;
};

/* Owner (25 Oct 2026): "dont change anything in my pricing page and
   pricing sections on other pages just u can modify the headings so it
   does't get duplicates dont change anything inside the pricing cards".
   Every pricing section shows the /home2 intro, compare, add-on and
   custom-plan text below; only the four headings vary per page. */
const PRICING_BASE = {
  lead: "Choose the mix of local SEO, Google Ads and lead generation that fits your business, then scale up when you are ready.",
  compareLead: "See exactly what each plan includes.",
  addOnsLead: "Add to any plan as your business grows.",
  customText:
    "Every business is different. Tell us your goals and we will put together the right plan.",
};

/** The pricing section with page-specific copy (owner, 23 Oct: same plans
    on every redesigned page, headings written for each page). */
export function PricingSection({
  copy,
  idPrefix,
  label,
  ctaHref,
  ctaLabel,
}: {
  copy: PricingCopy;
  idPrefix: string;
  label?: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <Section id="pricing" labelledBy={`${idPrefix}-price-h`}>
      <Wrap>
        {label ? <Label className="tw:text-center">{label}</Label> : null}
        <CenterHead id={`${idPrefix}-price-h`} title={copy.title}>
          {PRICING_BASE.lead}
        </CenterHead>
        <TrustPoints className="tw:-mt-4 tw:mb-10" />

        <PricingPlans
          ctaHref={ctaHref}
          compareId={`${idPrefix}-compare-h`}
          compareTitle={copy.compareTitle}
          compareLead={PRICING_BASE.compareLead}
        />

        <AddOnsGrid title={copy.addOnsTitle} lead={PRICING_BASE.addOnsLead} />

        <CustomPlanStrip
          title={copy.customTitle}
          text={PRICING_BASE.customText}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />
      </Wrap>
    </Section>
  );
}

/** /home2's pricing section. */
export function HomePricing() {
  return (
    <PricingSection
      idPrefix="home"
      label="Pricing & plans"
      ctaHref="#contact"
      ctaLabel="Get Your Free Marketing Audit"
      copy={{
        title: "Marketing Plans That Grow With You",
        lead: "Choose the mix of local SEO, Google Ads and lead generation that fits your business, then scale up when you are ready.",
        compareTitle: "Compare Plans Side by Side",
        compareLead: "See exactly what each plan includes.",
        addOnsTitle: "Optional Add-On Services",
        addOnsLead: "Add to any plan as your business grows.",
        customTitle: "Have questions or need a custom plan?",
        customText:
          "Every business is different. Tell us your goals and we will put together the right plan.",
      }}
    />
  );
}
