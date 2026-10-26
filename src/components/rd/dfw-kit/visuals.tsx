import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { FiStar } from "react-icons/fi";
import { cx } from "./primitives";

/* DFW kit visuals (19 Oct 2026): short-utility versions of the shared pieces
   on the reference DFW pages. Keyframes dk-* live in kit.css. */

/* ---------------------------------------------------------- photo slots */

/** Image slot. Without `src` it is a shimmer skeleton with a small caption
    naming the shot and crop; with `src` it renders the photo (label becomes
    the alt text). The wrapper sets size, position and radius. */
export function Ph({
  label,
  ratio,
  src,
  dark,
  light,
  captionTop,
  position,
}: {
  label: string;
  ratio: string;
  src?: string;
  dark?: boolean;
  /** Paler skeleton for tilted photo cards on a coloured backdrop. */
  light?: boolean;
  /** Caption at the top, for slots whose bottom edge is cropped. */
  captionTop?: boolean;
  /** CSS object-position for the photo crop (default centre). */
  position?: string;
}) {
  if (src) {
    return (
      <div className="tw:absolute tw:inset-0 tw:overflow-hidden tw:rounded-[inherit] tw:bg-[#d6deeb] tw:after:absolute tw:after:inset-0 tw:after:bg-[linear-gradient(180deg,rgba(12,21,38,0.02)_50%,rgba(12,21,38,0.48)_100%)] tw:after:content-['']">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="tw:object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
  }
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:overflow-hidden tw:rounded-[inherit] tw:after:absolute tw:after:inset-0 tw:after:animate-[dk-shimmer_2.4s_ease-in-out_infinite] tw:after:[transform:translateX(-100%)] tw:after:content-['']",
        dark
          ? "tw:bg-[linear-gradient(135deg,#1a2742_0%,#22324f_55%,#1b2944_100%)] tw:after:bg-[linear-gradient(100deg,transparent_30%,rgba(255,255,255,0.07)_50%,transparent_70%)]"
          : light
            ? "tw:bg-[linear-gradient(135deg,#f4f6fa_0%,#ffffff_55%,#eef1f6_100%)] tw:after:bg-[linear-gradient(100deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)]"
            : "tw:bg-[linear-gradient(135deg,#d6deeb_0%,#e6ebf3_55%,#d9e0ec_100%)] tw:after:bg-[linear-gradient(100deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)]",
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        className="tw:size-[46px] tw:fill-none tw:stroke-[#a9b5c9] tw:[stroke-linecap:round] tw:[stroke-linejoin:round] tw:[stroke-width:2.2]"
      >
        <rect x="5" y="9" width="38" height="30" rx="5" />
        <circle cx="17" cy="19" r="4" className="tw:fill-[#bcc7d8] tw:stroke-none" />
        <path d="M5 33 L17 24 L26 31 L33 26 L43 33" />
      </svg>
      <span
        className={cx(
          "tw:absolute tw:left-[18px] tw:z-2 tw:max-w-[calc(100%-36px)] tw:text-[11.5px] tw:leading-[1.4] tw:font-medium tw:text-[#6e7d97]",
          captionTop ? "tw:top-4" : "tw:bottom-4",
        )}
      >
        {label} <b className="tw:ml-1 tw:font-semibold">{ratio}</b>
      </span>
    </div>
  );
}

const AVA_TONE = { a: "#f7c58a", b: "#9db9f5", c: "#f2a7a0", d: "#9fdcb1" };

/** Faceless avatar placeholder. */
export function AvatarPh({
  tone,
  ring = "#fff",
  size = 48,
}: {
  tone: keyof typeof AVA_TONE;
  ring?: string;
  size?: number;
}) {
  return (
    <span
      // Phones cap the avatar at 44px (owner, 27 Oct 2026: testimonial
      // avatars looked too big on mobile); smaller UI avatars are unchanged.
      className="tw:-ml-3 tw:block tw:size-(--ava) tw:rounded-full tw:border-3 tw:first:ml-0 tw:max-bssm:-ml-2.5 tw:max-bssm:size-[min(var(--ava),44px)] tw:max-bssm:first:ml-0"
      style={{
        ["--ava" as string]: `${size}px`,
        borderColor: ring,
        background: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.85) 0 19%, transparent 20%), radial-gradient(ellipse 46% 34% at 50% 100%, rgba(255,255,255,0.85) 0 98%, transparent 100%), ${AVA_TONE[tone]}`,
      }}
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------ headline icons */

/** Glossy map pin that sits inside a headline (sized in em). */
export function InlinePin({ id = "dk-pin" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.04em] tw:inline-block tw:h-[0.88em] tw:w-[0.7em] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 80" className="tw:block tw:size-full tw:overflow-visible">
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff6a5c" />
            <stop offset="1" stopColor="#c9241a" />
          </linearGradient>
          <radialGradient id={`${id}-shade`} cx="0.32" cy="0.28" r="0.7">
            <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="74" rx="14" ry="4" fill="rgba(12,21,38,0.14)" />
        <path
          d="M32 4 C 16 4 6 16 6 30 C 6 48 32 70 32 70 C 32 70 58 48 58 30 C 58 16 48 4 32 4 Z"
          fill={`url(#${id}-body)`}
        />
        <path
          d="M32 4 C 16 4 6 16 6 30 C 6 48 32 70 32 70 C 32 70 58 48 58 30 C 58 16 48 4 32 4 Z"
          fill={`url(#${id}-shade)`}
        />
        <circle cx="32" cy="29" r="10" fill="#7f1610" />
      </svg>
    </span>
  );
}

/** Glossy chat bubble for a headline. */
export function InlineChat({ id = "dk-chat" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.88em] tw:w-[1.12em] tw:-rotate-6 tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 96 76" className="tw:block tw:size-full tw:overflow-visible">
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4d8cf5" />
            <stop offset="1" stopColor="#1c4fc4" />
          </linearGradient>
        </defs>
        <path
          d="M14 4 H82 C 89 4 92 8 92 15 V46 C 92 53 89 57 82 57 H40 L22 71 L25 57 H14 C 7 57 4 53 4 46 V15 C 4 8 7 4 14 4 Z"
          fill={`url(#${id}-body)`}
        />
        <path
          d="M14 4 H82 C 89 4 92 8 92 15 V22 C 70 14 30 14 4 26 V15 C 4 8 7 4 14 4 Z"
          fill="#fff"
          opacity="0.18"
        />
        <circle cx="30" cy="31" r="5" fill="#fff" />
        <circle cx="48" cy="31" r="5" fill="#fff" />
        <circle cx="66" cy="31" r="5" fill="#fdc115" />
      </svg>
    </span>
  );
}

/* ---------------------------------------------------- hand-drawn bits */

const STROKE = "tw:fill-none tw:[stroke-linecap:round] tw:[stroke-linejoin:round]";

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 170"
      className={cx(STROKE, "tw:stroke-(--ink) tw:[stroke-width:2.2]", className)}
      aria-hidden="true"
    >
      <path d="M8 40 C 40 20 86 6 90 22 C 94 40 30 56 44 58 C 110 62 168 70 196 140" />
      <path d="M170 124 L 197 144 L 206 110" />
    </svg>
  );
}

export function Sparks({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={cx(STROKE, "tw:stroke-(--red) tw:[stroke-width:2.4]", className)}
      aria-hidden="true"
    >
      <path d="M40 10 L 30 40" />
      <path d="M44 50 L 58 44" />
      <path d="M46 70 C 70 70 96 78 112 92" />
    </svg>
  );
}

/** Round stamp with rotating text. */
export function RatingBadge({
  className,
  text,
  compact,
}: {
  className?: string;
  text: string;
  /** Smaller stamp (144 / 120 / 112 px) for tighter layouts. */
  compact?: boolean;
}) {
  return (
    <div
      className={cx(
        "tw:grid tw:place-items-center tw:rounded-full tw:bg-white",
        compact
          ? "tw:size-36 tw:max-bslg:size-[120px] tw:max-bssm:size-28"
          : "tw:size-48 tw:max-bslg:size-[150px] tw:max-bssm:size-32",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="tw:absolute tw:inset-0 tw:size-full tw:animate-[dk-spin_22s_linear_infinite]"
      >
        <defs>
          <path
            id="dk-badge-circle"
            d="M100 100 m -74 0 a 74 74 0 1 1 148 0 a 74 74 0 1 1 -148 0"
          />
        </defs>
        <text className="tw:fill-(--ink) tw:text-[12.5px] tw:font-medium tw:tracking-[0.18em] tw:max-bssm:text-[11px]">
          <textPath href="#dk-badge-circle" textLength="458" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="tw:grid tw:size-16 tw:place-items-center tw:rounded-full tw:bg-(--gold) tw:text-[28px] tw:max-bssm:size-[46px] tw:max-bssm:text-xl">
        <FiStar className="tw:fill-(--ink)" />
      </span>
    </div>
  );
}

/* -------------------------------------------------------- trust badges */

const G_PATHS = [
  ["#EA4335", "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"],
  ["#4285F4", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"],
  ["#FBBC05", "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"],
  ["#34A853", "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"],
];

export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {G_PATHS.map(([fill, d]) => (
        <path key={fill} fill={fill} d={d} />
      ))}
    </svg>
  );
}

/** "5.0 Google Reviews" pill linking to the Maps listing. */
export function GoogleRatingBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tw:inline-flex tw:items-center tw:gap-3 tw:rounded-[18px] tw:border tw:border-(--line) tw:bg-white tw:py-2.5 tw:pr-[18px] tw:pl-3 tw:text-left tw:text-(--ink) tw:transition tw:duration-200 tw:hover:-translate-y-0.5 tw:hover:border-[#c9d6ee]"
      aria-label="Zonic Media is rated 5.0 on Google. See our Google reviews"
    >
      <GoogleG className="tw:size-[38px] tw:flex-none" />
      <span className="tw:grid tw:gap-px">
        <span className="tw:flex tw:items-center tw:gap-2">
          <b className="tw:text-[22px] tw:leading-none tw:font-semibold">5.0</b>
          <span className="tw:flex tw:gap-0.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} className="tw:size-[15px] tw:fill-[#fbbc05] tw:text-[#fbbc05]" />
            ))}
          </span>
        </span>
        <small className="tw:text-[12.5px] tw:font-medium tw:text-(--muted)">
          Google Reviews
        </small>
      </span>
    </a>
  );
}

/** Clutch, Trustpilot, Yelp partner and Google badges. */
export function TrustLogos({
  mapHref,
  size = "hero",
  className,
  onDark = false,
}: {
  mapHref: string;
  size?: "hero" | "row";
  className?: string;
  /** White Trustpilot wordmark for dark backgrounds (travel video hero). */
  onDark?: boolean;
}) {
  const hero = size === "hero";
  const img = hero
    ? "tw:h-[82px] tw:w-auto tw:object-contain tw:max-bssm:h-16"
    : "tw:h-[66px] tw:w-auto tw:object-contain tw:max-bssm:h-[54px]";
  const wide = hero
    ? "tw:h-14 tw:w-auto tw:max-bssm:h-11"
    : "tw:h-[50px] tw:w-auto tw:max-bssm:h-10";
  return (
    <div
      className={cx(
        "tw:flex tw:flex-wrap tw:items-center tw:justify-center",
        hero ? "tw:gap-x-10 tw:gap-y-4 tw:max-bssm:gap-x-6 tw:max-bssm:gap-y-3" : "tw:gap-x-[52px] tw:gap-y-6 tw:max-bssm:gap-x-7 tw:max-bssm:gap-y-5",
        className,
      )}
    >
      <a href="https://clutch.co/profile/zonic-media?badge=11431" target="_blank" rel="noopener noreferrer">
        <Image
          className={img}
          width={84}
          height={84}
          src="/images/clutch-top-company-2026.png"
          alt="Top Clutch Digital Marketing Company Delaware 2026"
          priority={hero}
        />
      </a>
      <a href="https://www.trustpilot.com/review/zonicllc.com" target="_blank" rel="noopener noreferrer">
        <Image
          className={wide}
          width={128}
          height={60}
          src={onDark ? "/images/trust-white.png" : "/images/trust-black.png"}
          alt="Zonic Media rated 5 stars on Trustpilot"
          priority={hero}
        />
      </a>
      <Image
        className={img}
        width={84}
        height={84}
        src="/images/Partner.webp"
        alt="Yelp Advertising Partner"
        priority={hero}
      />
      <GoogleRatingBadge href={mapHref} />
    </div>
  );
}

/* --------------------------------------------------------------- phone */

/** Phone shell for 4-screen story loops (12s, 3s per screen). */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="tw:relative tw:h-[540px] tw:w-[280px] tw:overflow-hidden tw:rounded-[44px] tw:border-10 tw:border-(--ink) tw:bg-white tw:text-left tw:[box-shadow:0_40px_70px_-40px_rgba(12,21,38,0.55)] tw:max-bssm:h-[520px] tw:max-bssm:w-[260px]"
      aria-hidden="true"
    >
      <span className="tw:absolute tw:top-2 tw:left-1/2 tw:z-3 tw:h-[22px] tw:w-[86px] tw:-translate-x-1/2 tw:rounded-[14px] tw:bg-(--ink)" />
      {children}
    </div>
  );
}

/** One screen in a PhoneFrame; `i` is its slot in the 4-step loop. */
export function PhoneScreen({
  i,
  className,
  children,
}: {
  i: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:px-4 tw:pt-[46px] tw:pb-4 tw:animate-[dk-screen_12s_ease_infinite_both]",
        i === 0 ? "" : "tw:opacity-0",
        className,
      )}
      style={{ animationDelay: `${i * 3}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
