import { FiPhone } from "react-icons/fi";
import { Pill, Section, Wrap } from "@/components/rd/dfw-kit/primitives";
import { BannerLoops, GRAIN } from "@/components/rd/dfw-kit/banner";
import { SITE_CONTACT } from "@/shared/siteConfig";

/* Closing banner above the footer in the /home2 style (owner, 25 Oct
   2026: "banner above footer i wanted it have different bg gradient like
   home2", replacing the pale banner on the industry, state, HVAC and SEO
   pages): blue → violet → pink gradient, film grain, hand-drawn loops,
   white text. The heading keeps the kit's 4.4vw/64px size so the
   industry.css cap keeps it below the hero H1. */
export function GradientBanner({
  id,
  title,
  lead,
  cta,
  ctaHref,
}: {
  id: string;
  title: string;
  lead: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <Section labelledBy={id}>
      <Wrap flushOnPhone>
        <div className="tw:relative tw:isolate tw:overflow-hidden tw:rounded-[44px] tw:[background:radial-gradient(60%_80%_at_100%_0%,rgba(59,130,246,0.85),transparent_60%),radial-gradient(55%_70%_at_75%_100%,rgba(244,143,203,0.95),transparent_65%),linear-gradient(105deg,#1b10e8_0%,#3d22f0_32%,#8a4cf0_62%,#d47fe0_100%)] tw:px-10 tw:pt-[84px] tw:pb-[80px] tw:text-center tw:text-white tw:max-bssm:rounded-[28px] tw:max-bssm:px-5 tw:max-bssm:pt-16 tw:max-bssm:pb-28">
          <span
            className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:opacity-[0.22] tw:mix-blend-overlay"
            style={{ backgroundImage: GRAIN }}
            aria-hidden="true"
          />
          <BannerLoops
            id={`${id}-loop-l`}
            className="tw:absolute tw:-bottom-6 tw:-left-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:max-bssm:w-[120px]"
          />
          <BannerLoops
            id={`${id}-loop-r`}
            className="tw:absolute tw:-right-6 tw:-bottom-6 tw:-z-1 tw:w-[clamp(180px,24vw,340px)] tw:-scale-x-100 tw:max-bssm:w-[120px]"
          />
          <h2
            id={id}
            className="tw:mx-auto tw:max-w-[900px] tw:text-[clamp(34px,4.4vw,64px)] tw:leading-[1.06] tw:tracking-[-0.035em] tw:text-balance tw:text-white"
          >
            {title}
          </h2>
          <p className="tw:mx-auto tw:mt-6 tw:max-w-[58ch] tw:text-lg/[1.65] tw:text-white/85">
            {lead}
          </p>
          <div className="tw:mt-9 tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
            <Pill href={ctaHref} tone="white" fullOnPhone>
              {cta}
            </Pill>
            <a
              href={SITE_CONTACT.phoneHref}
              className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-2 tw:rounded-full tw:border-[1.5px] tw:border-white/50 tw:px-7 tw:text-base tw:font-medium tw:text-white tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white/10 tw:max-bssm:w-full"
            >
              <FiPhone aria-hidden="true" />
              {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
