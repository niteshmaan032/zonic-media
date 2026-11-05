import {
  FiCheck,
  FiGlobe,
  FiKey,
  FiLayers,
  FiMapPin,
  FiServer,
  FiSliders,
  FiTool,
} from "react-icons/fi";
import {
  CenterHead,
  Label,
  Pill,
  Section,
  Wrap,
  cx,
} from "@/components/rd/dfw-kit/primitives";

/* Website pricing for the web design service pages (owner, 5 Nov 2026):
   "remove the current pricing … only on web design service pages … two
   columns design in which it will show this and in another there will be
   something need a custom plan type thing and a cta". The left card is the
   owner's list word for word; only the headings change per page. The
   monthly plans (PricingSection) stay on every other page. */

export const WEBSITE_PRICE = "$950";

const INCLUDED = [
  { icon: <FiSliders />, text: "No monthly or yearly rental fees" },
  { icon: <FiServer />, text: "No monthly hosting charge" },
  { icon: <FiKey />, text: "You keep the ownership of domain & website" },
  { icon: <FiCheck />, text: "Only one-time website development fee" },
  { icon: <FiTool />, text: "Specialized for home service based businesses" },
];

const CUSTOM = [
  { icon: <FiLayers />, text: "Extra service and city pages" },
  { icon: <FiMapPin />, text: "Sites for several locations or brands" },
  { icon: <FiGlobe />, text: "Booking, estimate and payment tools" },
];

export function WebsitePricing({
  idPrefix,
  label = "Website pricing",
  title,
  customTitle,
  ctaHref,
  ctaLabel,
}: {
  idPrefix: string;
  label?: string;
  /** The section H2, written for each page. */
  title: string;
  /** Heading of the custom-plan card, written for each page. */
  customTitle: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const h = `${idPrefix}-price-h`;
  return (
    <Section id="pricing" labelledBy={h}>
      <Wrap>
        <Label className="tw:text-center">{label}</Label>
        <CenterHead id={h} title={title}>
          One flat development fee for a fast, mobile-ready website that you own
          outright.
        </CenterHead>

        <div className="tw:mx-auto tw:grid tw:max-w-[1120px] tw:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] tw:gap-6 tw:max-bslg:grid-cols-1">
          {/* price card */}
          <article className="tw:relative tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-white tw:p-10 tw:ring-1 tw:ring-(--line) tw:max-bssm:px-6 tw:max-bssm:py-8">
            <span
              className="tw:pointer-events-none tw:absolute tw:-top-24 tw:-right-24 tw:size-64 tw:rounded-full tw:bg-(--blue-soft)"
              aria-hidden="true"
            />
            <div className="tw:relative">
              <span className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--blue-soft) tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold tw:text-(--blue)">
                <FiGlobe aria-hidden="true" /> New business website
              </span>
              <div className="tw:mt-6 tw:flex tw:flex-wrap tw:items-end tw:justify-between tw:gap-x-8 tw:gap-y-4">
                <div>
                  <p className="tw:text-[15px] tw:font-medium tw:text-(--muted)">
                    Starting price
                  </p>
                  <p className="tw:mt-1 tw:flex tw:items-end tw:gap-2">
                    <span className="tw:text-[clamp(56px,6vw,80px)] tw:leading-none tw:font-medium tw:tracking-[-0.045em] tw:text-(--ink)">
                      {WEBSITE_PRICE}
                    </span>
                    <span className="tw:pb-2 tw:text-[15px] tw:font-medium tw:whitespace-nowrap tw:text-(--text)">
                      one-time
                    </span>
                  </p>
                </div>
                <p className="tw:max-w-[30ch] tw:pb-1 tw:text-[15.5px]/[1.6] tw:text-(--text)">
                  Pay once for the build. No rent, no lock-in, no surprise
                  invoices after launch.
                </p>
              </div>
              <ul className="tw:mt-8 tw:grid tw:grid-cols-2 tw:gap-3 tw:max-bsmd:grid-cols-1">
                {INCLUDED.map((it, i) => (
                  <li
                    key={it.text}
                    className={cx(
                      "tw:flex tw:items-center tw:gap-3.5 tw:rounded-[18px] tw:bg-(--panel) tw:px-4 tw:py-3.5 tw:text-[15.5px]/[1.35] tw:font-medium tw:text-(--ink)",
                      i === INCLUDED.length - 1 && "tw:bsmd:col-span-2",
                    )}
                  >
                    <span
                      className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[16px] tw:text-(--blue)"
                      aria-hidden="true"
                    >
                      {it.icon}
                    </span>
                    {it.text}
                  </li>
                ))}
              </ul>
              <Pill href={ctaHref} arrow fullOnPhone className="tw:mt-8">
                {ctaLabel}
              </Pill>
            </div>
          </article>

          {/* custom plan card */}
          <article className="tw:flex tw:flex-col tw:rounded-(--r-xl) tw:bg-(--ink) tw:p-10 tw:text-white tw:max-bssm:px-6 tw:max-bssm:py-8">
            <span className="tw:inline-flex tw:w-fit tw:items-center tw:gap-2 tw:rounded-full tw:bg-white/10 tw:px-3.5 tw:py-1.5 tw:text-[13px] tw:font-semibold tw:text-(--gold)">
              <FiSliders aria-hidden="true" /> Custom plan
            </span>
            <h3 className="tw:mt-6 tw:text-[clamp(26px,2.6vw,36px)] tw:leading-[1.12] tw:tracking-[-0.03em] tw:text-balance tw:text-white">
              {customTitle}
            </h3>
            <p className="tw:mt-4 tw:text-[15.5px]/[1.6] tw:text-[#b7c4dd]">
              Tell us what the site needs to do and we will send one fixed quote
              before any work starts.
            </p>
            <ul className="tw:mt-6 tw:grid tw:gap-3">
              {CUSTOM.map((it) => (
                <li
                  key={it.text}
                  className="tw:flex tw:items-center tw:gap-3 tw:text-[15px] tw:font-medium"
                >
                  <span
                    className="tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/10 tw:text-[14px] tw:text-(--gold)"
                    aria-hidden="true"
                  >
                    {it.icon}
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>
            <div className="tw:mt-auto tw:pt-9">
              <Pill href={ctaHref} tone="white" arrow fullOnPhone>
                Request a Custom Quote
              </Pill>
            </div>
          </article>
        </div>
      </Wrap>
    </Section>
  );
}
