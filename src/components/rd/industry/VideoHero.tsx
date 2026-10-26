import { preload } from "react-dom";
import { FiPhone } from "react-icons/fi";

import { Pill, Strip, Wrap, cx } from "@/components/rd/dfw-kit/primitives";
import { TrustLogos } from "@/components/rd/dfw-kit/visuals";
import { SITE_CONTACT } from "@/shared/siteConfig";
import { HeroVideo } from "./HeroVideo";
import { Icon, type IconKey } from "./icons";
import type { IndustryContent } from "./types";
import { H1Badge, RichText } from "./ui";

/* ---------------------------------------------------------------------------
   VIDEO HERO (26 Oct 2026) — owner, travel page: "i want the hero section
   having video in bg". Used by IndustryTemplate when `hero.video` is set.

   A full-bleed background video under one dark scrim (no two-colour
   gradient), centred white copy, the H1 badge in one solid colour, a white
   CTA and an outline call button, the trust logos on a white plate so they
   stay legible, then the `tiles` bento as four glass outcome cards.
--------------------------------------------------------------------------- */

const LINKS_LIGHT =
  "tw:[&_a]:font-medium tw:[&_a]:text-white tw:[&_a]:underline tw:[&_a]:decoration-white/45 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-white";

export function VideoHero({
  c,
  ctaHref,
}: {
  c: IndustryContent;
  ctaHref: string;
}) {
  const video = c.hero.video;
  if (!video) return null;
  const p = c.palette;
  preload(video.poster, { as: "image", fetchPriority: "high" });

  const b = c.hero.bento;
  const tiles: { icon: IconKey; title: string; sub: string }[] =
    b.kind === "tiles"
      ? [b.wide, b.left, b.right, { icon: c.hero.h1Icon, ...b.bottom }]
      : [b.cardA, b.cardB];

  return (
    <section
      className="tw:relative tw:isolate tw:flex tw:flex-col tw:justify-center tw:overflow-clip tw:bg-[#0b1324] tw:pt-36 tw:pb-16 tw:text-white tw:max-bsmd:pt-[120px] tw:max-bsmd:pb-20 tw:bslg:min-h-[min(100svh,1000px)]"
      aria-labelledby="ind-h1"
    >
      <HeroVideo
        src={video.src}
        srcSmall={video.srcSmall}
        poster={video.poster}
      />
      {/* One dark scrim so white text reads over every frame. */}
      <div
        className="tw:absolute tw:inset-0 tw:-z-1 tw:[background:linear-gradient(180deg,rgba(6,12,26,0.7)_0%,rgba(6,12,26,0.42)_38%,rgba(6,12,26,0.55)_70%,rgba(6,12,26,0.88)_100%)]"
        aria-hidden="true"
      />

      <Wrap>
        <div className="tw:mx-auto tw:max-w-[1120px] tw:text-center">
          <Strip
            as="h1"
            id="ind-h1"
            size="heroWide"
            className="tw:text-balance tw:text-white tw:[text-shadow:0_2px_24px_rgba(0,0,0,0.35)] tw:bssm:text-[clamp(34px,3.5vw,54px)]"
          >
            {c.hero.h1Lead}{" "}
            <H1Badge
              p={p}
              solid={p.aDeep}
              icon={<Icon name={c.hero.h1Icon} />}
            />{" "}
            {c.hero.h1Rest}
          </Strip>
          <p
            className={cx(
              LINKS_LIGHT,
              "tw:mx-auto tw:mt-6 tw:max-w-[660px] tw:text-lg/[1.65] tw:text-white/88",
            )}
          >
            <RichText value={c.hero.lead} />
          </p>
          <div className="tw:mt-8 tw:flex tw:flex-wrap tw:justify-center tw:gap-3">
            <Pill href={ctaHref} tone="white" fullOnPhone>
              {c.hero.cta}
            </Pill>
            <a
              href={SITE_CONTACT.phoneHref}
              className="tw:inline-flex tw:min-h-14 tw:items-center tw:justify-center tw:gap-[9px] tw:rounded-full tw:border-[1.5px] tw:border-white/70 tw:px-7 tw:text-base tw:font-medium tw:whitespace-nowrap tw:text-white tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:bg-white tw:hover:text-(--ink) tw:max-bssm:w-full"
            >
              <FiPhone aria-hidden="true" /> Call {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
          {/* Logos straight on the video, no plate (owner, 26 Oct 2026). */}
          <div className="tw:mt-9 tw:flex tw:justify-center">
            <TrustLogos
              onDark
              mapHref={SITE_CONTACT.mapHref}
              size="row"
              className="tw:justify-center! tw:gap-x-7! tw:max-bssm:gap-x-4!"
            />
          </div>
        </div>

        <ul className="tw:mx-auto tw:mt-14 tw:grid tw:max-w-[1180px] tw:grid-cols-4 tw:gap-3 tw:max-bslg:grid-cols-2 tw:max-bssm:mt-10 tw:max-bssm:gap-2.5">
          {tiles.map((t, i) => (
            <li
              key={t.title}
              className="tw:rounded-[20px] tw:bg-white/10 tw:p-4 tw:text-left tw:ring-1 tw:ring-white/20 tw:backdrop-blur-md tw:max-bssm:p-3.5"
            >
              <span
                className="tw:grid tw:size-10 tw:place-items-center tw:rounded-full tw:text-[18px] tw:text-white tw:max-bssm:size-9"
                style={{ background: i % 2 ? p.bDeep : p.aDeep }}
                aria-hidden="true"
              >
                <Icon name={t.icon} />
              </span>
              <b className="tw:mt-3 tw:block tw:text-[16px] tw:leading-snug tw:font-semibold tw:max-bssm:text-[15px]">
                {t.title}
              </b>
              <span className="tw:mt-1 tw:block tw:text-[13.5px]/[1.5] tw:text-white/75">
                {t.sub}
              </span>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
