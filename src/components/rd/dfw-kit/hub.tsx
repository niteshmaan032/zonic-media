import type { ComponentType, ReactNode } from "react";
import { cx } from "./primitives";

/* Platform hub (DFW kit, 19 Oct 2026): app tiles on two sides, joined by
   dashed lines to a ring in the middle. Same layout as the hub on the DFW
   pages; first shared here for /home2. Tiles carry an sr-only name. */

export const APP_TONE = {
  google: "tw:bg-[#4285f4] tw:text-white",
  maps: "tw:bg-[#34a853] tw:text-white",
  apple: "tw:bg-(--ink) tw:text-white",
  yelp: "tw:bg-[#d32323] tw:text-white",
  openai: "tw:bg-[#10a37f] tw:text-white",
  gemini: "tw:bg-[linear-gradient(135deg,#4e82ee,#a26bf4)] tw:text-white",
  facebook: "tw:bg-[#1877f2] tw:text-white",
  waze: "tw:bg-[#33ccff] tw:text-(--ink)",
  instagram:
    "tw:bg-[linear-gradient(45deg,#f9ce34,#ee2a7b_55%,#6228d7)] tw:text-white",
  perplexity: "tw:bg-[#20808d] tw:text-white",
  // Directory tones (Delaware SEO draft, 22 Oct 2026).
  bing: "tw:bg-[#008373] tw:text-white",
  houzz: "tw:bg-[#4dbc15] tw:text-white",
  thumbtack: "tw:bg-[#009fd9] tw:text-white",
  tripadvisor: "tw:bg-[#34e0a1] tw:text-(--ink)",
  // Web stack and lead channels (Delaware web design / Wilmington drafts).
  wordpress: "tw:bg-[#21759b] tw:text-white",
  shopify: "tw:bg-[#95bf47] tw:text-white",
  woocommerce: "tw:bg-[#7f54b3] tw:text-white",
  nextjs: "tw:bg-(--ink) tw:text-white",
  analytics: "tw:bg-[#e37400] tw:text-white",
  searchconsole: "tw:bg-[#458cf5] tw:text-white",
  tagmanager: "tw:bg-[#246fdb] tw:text-white",
  calendly: "tw:bg-[#006bff] tw:text-white",
  googleads: "tw:bg-[#fbbc04] tw:text-(--ink)",
  calls: "tw:bg-[#16a34a] tw:text-white",
  texts: "tw:bg-[#0ea5e9] tw:text-white",
  forms: "tw:bg-[#7c3aed] tw:text-white",
  directions: "tw:bg-[#ea580c] tw:text-white",
  // Social, search and ad-format tones (Philadelphia drafts).
  tiktok: "tw:bg-[#111111] tw:text-white",
  linkedin: "tw:bg-[#0a66c2] tw:text-white",
  youtube: "tw:bg-[#ff0000] tw:text-white",
  pinterest: "tw:bg-[#e60023] tw:text-white",
  mailchimp: "tw:bg-[#ffe01b] tw:text-(--ink)",
  threads: "tw:bg-[#333333] tw:text-white",
  duckduckgo: "tw:bg-[#de5833] tw:text-white",
  meta: "tw:bg-[#0866ff] tw:text-white",
  rose: "tw:bg-[#e11d48] tw:text-white",
  amber: "tw:bg-[#d97706] tw:text-white",
  indigo: "tw:bg-[#4f46e5] tw:text-white",
  emerald: "tw:bg-[#059669] tw:text-white",
  assistant: "tw:bg-white tw:text-[#4285f4] tw:ring-1 tw:ring-(--line)",
  alexa: "tw:bg-[#00caff] tw:text-(--ink)",
  stripe: "tw:bg-[#635bff] tw:text-white",
  square: "tw:bg-(--ink) tw:text-white",
  paypal: "tw:bg-[#003087] tw:text-white",
  hubspot: "tw:bg-[#ff7a59] tw:text-white",
  zapier: "tw:bg-[#ff4f00] tw:text-white",
  trustpilot: "tw:bg-[#00b67a] tw:text-white",
  clutch: "tw:bg-[#17313b] tw:text-white",
  zillow: "tw:bg-[#006aff] tw:text-white",
  nextdoor: "tw:bg-[#8ed500] tw:text-(--ink)",
  homeadvisor: "tw:bg-[#f68315] tw:text-white",
  chrome: "tw:bg-white tw:text-[#4285f4] tw:ring-1 tw:ring-(--line)",
  safari: "tw:bg-[#006cff] tw:text-white",
  firefox: "tw:bg-[#ff7139] tw:text-white",
  edge: "tw:bg-[#0c59a4] tw:text-white",
  android: "tw:bg-[#3ddc84] tw:text-(--ink)",
  samsung: "tw:bg-[#1428a0] tw:text-white",
  windows: "tw:bg-[#00a4ef] tw:text-white",
};

export type HubApp = {
  icon: ComponentType<{ "aria-hidden"?: boolean | "true" }>;
  name: string;
  tone: keyof typeof APP_TONE;
  /** Optional profile link: the tile opens it in a new tab. */
  href?: string;
};

const SIDE =
  "tw:relative tw:grid tw:grid-cols-3 tw:grid-rows-3 tw:items-center tw:justify-items-center tw:gap-y-6 tw:before:absolute tw:before:top-[12%] tw:before:bottom-[12%] tw:before:left-1/2 tw:before:border-l-[1.5px] tw:before:border-dashed tw:before:border-[#d3dae6] tw:before:content-[''] tw:[&>li:nth-child(1)]:[grid-area:1/2] tw:[&>li:nth-child(2)]:[grid-area:2/1] tw:[&>li:nth-child(3)]:[grid-area:2/3] tw:[&>li:nth-child(4)]:[grid-area:3/2] tw:max-bssm:mx-auto tw:max-bssm:w-full tw:max-bssm:max-w-[320px] tw:max-bssm:grid-cols-4 tw:max-bssm:grid-rows-none tw:max-bssm:gap-x-3 tw:max-bssm:gap-y-0 tw:max-bssm:before:hidden tw:max-bssm:[&>li:nth-child(n)]:[grid-area:auto]";

const TILE =
  "tw:relative tw:z-1 tw:grid tw:size-[100px] tw:place-items-center tw:rounded-[28px] tw:text-[44px] tw:transition tw:duration-200 tw:hover:-translate-y-1 tw:hover:-rotate-3 tw:max-bs2xl:size-[86px] tw:max-bs2xl:rounded-3xl tw:max-bs2xl:text-[38px] tw:max-bsxl:size-[74px] tw:max-bsxl:rounded-[20px] tw:max-bsxl:text-[32px] tw:max-bssm:size-[62px] tw:max-bssm:rounded-[18px] tw:max-bssm:text-[28px]";

function Side({ apps, label }: { apps: HubApp[]; label: string }) {
  return (
    <ul className={SIDE} aria-label={label}>
      {apps.map((app) => (
        <li key={app.name} className={cx(TILE, APP_TONE[app.tone])}>
          {app.href ? (
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tw:grid tw:size-full tw:place-items-center tw:rounded-[inherit] tw:focus-visible:outline-3 tw:focus-visible:outline-offset-3 tw:focus-visible:outline-(--blue)"
            >
              <app.icon aria-hidden="true" />
              <span className="tw:sr-only">
                {app.name} (opens in a new tab)
              </span>
            </a>
          ) : (
            <>
              <app.icon aria-hidden="true" />
              <span className="tw:sr-only">{app.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export function PlatformHub({
  left,
  right,
  leftLabel,
  rightLabel,
  icon,
  title,
  sub,
}: {
  left: HubApp[];
  right: HubApp[];
  leftLabel: string;
  rightLabel: string;
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="tw:relative tw:grid tw:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] tw:items-center tw:gap-10 tw:before:absolute tw:before:top-1/2 tw:before:right-[4%] tw:before:left-[4%] tw:before:border-t-[1.5px] tw:before:border-dashed tw:before:border-[#d3dae6] tw:before:content-[''] tw:max-bsxl:gap-5 tw:max-bslg:grid-cols-2 tw:max-bslg:gap-x-5 tw:max-bslg:gap-y-10 tw:max-bslg:before:hidden tw:max-bssm:grid-cols-1 tw:max-bssm:gap-4">
      <Side apps={left} label={leftLabel} />
      <div className="tw:relative tw:z-1 tw:flex tw:flex-col tw:items-center tw:bg-white tw:px-3 tw:text-center tw:max-bslg:order-first tw:max-bslg:col-span-full tw:max-bssm:mb-3">
        <span
          className="tw:grid tw:size-[220px] tw:place-items-center tw:rounded-full tw:border-[1.5px] tw:border-(--blue) tw:text-[72px] tw:text-(--blue) tw:shadow-[0_0_0_14px_#fff,0_0_0_15.5px_var(--blue-soft)] tw:max-bs2xl:size-[190px] tw:max-bs2xl:text-[62px] tw:max-bsxl:size-40 tw:max-bsxl:text-[52px] tw:max-bssm:size-[132px] tw:max-bssm:text-[44px] tw:max-bssm:shadow-[0_0_0_10px_#fff,0_0_0_11.5px_var(--blue-soft)]"
          aria-hidden="true"
        >
          {icon}
        </span>
        <b className="tw:mt-[30px] tw:text-2xl tw:max-bssm:mt-5 tw:max-bssm:text-[21px]">
          {title}
        </b>
        <span className="tw:text-[15px] tw:text-(--muted)">{sub}</span>
      </div>
      <Side apps={right} label={rightLabel} />
    </div>
  );
}
