import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import {
  FiCheck,
  FiCheckCircle,
  FiFileText,
  FiMessageSquare,
  FiNavigation,
  FiPhoneCall,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiCalendar,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import {
  SiGoogle,
  SiGooglegemini,
  SiOpenai,
  SiPerplexity,
} from "react-icons/si";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { Icon } from "./icons";
import { DirectBookCard, ThingsToDoCard, TripChatCard } from "./travelUi";
import type {
  AiUi,
  CallsUi,
  GrowthUi,
  HeroBento,
  HeroTile,
  MapsUi,
  Palette,
  ReviewsUi,
  Rich,
  WebsiteUi,
} from "./types";
import { photoAlt } from "@/components/rd/photoAlt";

/* Shared UI for the industry redesign templates (24 Oct 2026). Everything
   is driven by the page's palette and words, so each niche and location
   reads as its own page. All static (owner: no animation in heroes). */

/* --------------------------------------------------------------- text */

/** Renders Rich text: strings as text, objects as internal links. */
export function RichText({ value }: { value: Rich }) {
  return (
    <>
      {value.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <Link key={i} href={part.href}>
            {part.label}
          </Link>
        ),
      )}
    </>
  );
}

export const LINKS =
  "tw:[&_a]:font-medium tw:[&_a]:text-(--blue) tw:[&_a]:underline tw:[&_a]:decoration-(--blue)/35 tw:[&_a]:underline-offset-[3px] tw:[&_a:hover]:decoration-(--blue)";

/** Alternating soft chip classes from the palette (inline styles). */
export function softStyle(p: Palette, i: number) {
  return i % 2
    ? { background: p.bSoft, color: p.bText }
    : { background: p.aSoft, color: p.aText };
}

export function grad(p: Palette, which: "a" | "b") {
  return which === "a"
    ? `linear-gradient(150deg, ${p.a} 0%, ${p.aDeep} 100%)`
    : `linear-gradient(150deg, ${p.b} 0%, ${p.bDeep} 100%)`;
}

/* ----------------------------------------------------------- hero marks */

/* "+" marks in the hero, the owner-approved /about-2 background. */
const HERO_MARKS: [number, number][] = [
  [4, 20],
  [3, 62],
  [47, 8],
  [96, 14],
  [52, 92],
];

export const HERO_BG =
  "tw:[background:radial-gradient(circle_at_12%_10%,rgba(49,87,245,0.08),transparent_28%),radial-gradient(circle_at_92%_30%,rgba(110,80,247,0.07),transparent_26%),linear-gradient(180deg,#fdfdff_0%,#f6f8fd_100%)]";

export function HeroMarks() {
  return (
    <span
      className="tw:pointer-events-none tw:absolute tw:inset-0 tw:-z-1 tw:max-bssm:hidden"
      aria-hidden="true"
    >
      {HERO_MARKS.map(([x, y], i) => (
        <i
          key={`${x}-${y}`}
          className={cx(
            "tw:absolute tw:before:absolute tw:before:top-1/2 tw:before:left-1/2 tw:before:h-[1.5px] tw:before:w-full tw:before:-translate-1/2 tw:before:rounded-[1px] tw:before:bg-[#3157f5] tw:before:content-[''] tw:after:absolute tw:after:top-1/2 tw:after:left-1/2 tw:after:h-[1.5px] tw:after:w-full tw:after:-translate-1/2 tw:after:rotate-90 tw:after:rounded-[1px] tw:after:bg-[#3157f5] tw:after:content-['']",
            i % 2 ? "tw:size-3.5 tw:opacity-40" : "tw:size-2.5 tw:opacity-30",
          )}
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
    </span>
  );
}

/** A heading string with "\n" marking preferred desktop line breaks (owner,
    25 Oct: e.g. two words on the last line). Below 992px, where split
    headings stack, the breaks are hidden and the text wraps naturally. */
export function TitleLines({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? (
            <>
              {" "}
              <br className="tw:max-bslg:hidden" />
            </>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

/** Small gradient icon badge sized in em, for inside the H1, centred on
    the capital letters (owner, 25 Oct: it sat low). */
export function H1Badge({
  p,
  icon,
  solid,
}: {
  p: Palette;
  icon: ReactNode;
  /** One flat colour instead of the two-accent gradient (owner, 26 Oct
      2026, local SEO pages: "dont add gradient in them just single
      color"). */
  solid?: string;
}) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-grid tw:size-[0.86em] tw:place-items-center tw:rounded-full tw:align-[0.19em] tw:text-white"
      style={{
        background: solid ?? `linear-gradient(135deg, ${p.a}, ${p.b})`,
      }}
      aria-hidden="true"
    >
      <span className="tw:grid tw:place-items-center tw:text-[0.5em]">
        {icon}
      </span>
    </span>
  );
}

/* --------------------------------------------------------- hero bentos */

const TILE =
  "tw:relative tw:flex tw:flex-col tw:justify-between tw:overflow-hidden tw:rounded-(--r-xl) tw:p-6 tw:max-bssm:p-4";

/** One solid growth tile (rising bars + trend arrow, no figures). */
function GrowthCard({
  tile,
  background,
  className,
}: {
  tile: HeroTile;
  background: string;
  className?: string;
}) {
  return (
    <div
      className={cx(TILE, "tw:text-white", className)}
      style={{ background }}
    >
      <span className="tw:flex tw:items-start tw:justify-between tw:gap-3">
        <span className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[20px] tw:max-bssm:size-9 tw:max-bssm:text-[17px]">
          <Icon name={tile.icon} />
        </span>
        <span className="tw:flex tw:h-10 tw:items-end tw:gap-1 tw:max-bssm:h-8">
          {[30, 45, 55, 75, 100].map((h, i) => (
            <i
              key={h}
              className="tw:block tw:w-2 tw:rounded-t-[3px] tw:max-bssm:w-1.5"
              style={{
                height: `${h}%`,
                background: `rgba(255,255,255,${0.35 + i * 0.16})`,
              }}
            />
          ))}
          <FiTrendingUp className="tw:ml-1 tw:size-5 tw:self-start tw:max-bssm:size-4" />
        </span>
      </span>
      <span>
        <b className="tw:block tw:text-[clamp(20px,1.9vw,27px)] tw:leading-[1.12] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[17px]">
          {tile.title}
        </b>
        <span className="tw:mt-1.5 tw:block tw:text-[14px]/[1.4] tw:text-white/80 tw:max-bssm:mt-1 tw:max-bssm:text-[12px]">
          {tile.sub}
        </span>
      </span>
    </div>
  );
}

function PhotoTile({
  src,
  position,
  query,
  className,
  priority,
}: {
  src: string;
  position?: string;
  query: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cx(
        "tw:relative tw:overflow-hidden tw:rounded-(--r-xl)",
        className,
      )}
    >
      <Image
        src={src}
        alt={photoAlt(src)}
        fill
        priority={priority}
        sizes="(max-width: 991px) 50vw, 300px"
        className="tw:object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
      <span className="tw:absolute tw:inset-0 tw:bg-[linear-gradient(180deg,transparent_55%,rgba(12,21,38,0.35))]" />
      <span className="tw:absolute tw:bottom-3 tw:left-3 tw:flex tw:max-w-[calc(100%-24px)] tw:items-center tw:gap-1.5 tw:rounded-full tw:bg-white tw:px-3 tw:py-1.5 tw:text-[13px] tw:font-medium tw:text-(--ink) tw:max-bssm:text-[11px]">
        <SiGoogle className="tw:flex-none tw:text-[#4285f4]" />
        <span className="tw:truncate">{query}</span>
      </span>
    </div>
  );
}

/** Main-page hero bento: photos + growth cards, or four growth tiles. */
export function HeroBentoView({ p, bento }: { p: Palette; bento: HeroBento }) {
  if (bento.kind === "photos") {
    return (
      <div
        className="tw:grid tw:w-full tw:grid-cols-2 tw:gap-4 tw:text-left tw:text-(--ink) tw:max-bssm:gap-3"
        aria-hidden="true"
      >
        <div className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
          <PhotoTile
            {...bento.photoA}
            className="tw:h-[320px] tw:max-bsxl:h-[290px] tw:max-bssm:h-[230px]"
            priority
          />
          <GrowthCard
            tile={bento.cardA}
            background={grad(p, "a")}
            className="tw:h-[180px] tw:max-bsxl:h-[170px] tw:max-bssm:h-[150px]"
          />
        </div>
        <div className="tw:grid tw:gap-4 tw:max-bssm:gap-3">
          <GrowthCard
            tile={bento.cardB}
            background={grad(p, "b")}
            className="tw:h-[180px] tw:max-bsxl:h-[170px] tw:max-bssm:h-[150px]"
          />
          <PhotoTile
            {...bento.photoB}
            className="tw:h-[320px] tw:max-bsxl:h-[290px] tw:max-bssm:h-[230px]"
          />
        </div>
      </div>
    );
  }
  return <TileBento p={p} tiles={bento} />;
}

/** White tile for the floating hero (from a tiles bento's `left`). */
function WhiteTile({ p, tile }: { p: Palette; tile: HeroTile }) {
  return (
    <div className={cx(TILE, "tw:h-full tw:bg-white tw:text-(--ink)")}>
      <span className="tw:flex tw:items-start tw:justify-between">
        <span
          className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[19px] tw:max-bssm:size-9 tw:max-bssm:text-[17px]"
          style={{ background: p.bSoft, color: p.bText }}
        >
          <Icon name={tile.icon} />
        </span>
        <FiTrendingUp className="tw:size-6" style={{ color: p.b }} />
      </span>
      <span>
        <b className="tw:block tw:text-[clamp(20px,1.9vw,27px)] tw:leading-[1.12] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[17px]">
          {tile.title}
        </b>
        <span className="tw:mt-1.5 tw:block tw:text-[14px]/[1.4] tw:text-(--text) tw:max-bssm:mt-1 tw:max-bssm:text-[12px]">
          {tile.sub}
        </span>
      </span>
    </div>
  );
}

/** Dark tile for the floating hero (from a tiles bento's `bottom`). */
function DarkTile({
  p,
  tile,
}: {
  p: Palette;
  tile: { title: string; sub: string };
}) {
  return (
    <div className={cx(TILE, "tw:h-full tw:bg-(--ink) tw:text-white")}>
      <span className="tw:flex tw:h-10 tw:items-end tw:gap-1 tw:max-bssm:h-8">
        {[40, 52, 64, 76, 88, 100].map((h, i) => (
          <i
            key={h}
            className="tw:block tw:w-2 tw:rounded-full tw:max-bssm:w-1.5"
            style={{ height: `${h}%`, background: i > 2 ? p.a : p.aSoft }}
          />
        ))}
      </span>
      <span>
        <b className="tw:block tw:text-[clamp(20px,1.9vw,27px)] tw:leading-[1.12] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[17px]">
          {tile.title}
        </b>
        <span className="tw:mt-1.5 tw:block tw:text-[14px]/[1.4] tw:text-white/70 tw:max-bssm:mt-1 tw:max-bssm:text-[12px]">
          {tile.sub}
        </span>
      </span>
    </div>
  );
}

/** Centred-hero layout (owner, 25 Oct 2026; tested on home inspector, then
    rolled out to every industry page): the four bento cards float around
    the centred hero copy from 1366px up, two per side, slightly tilted.
    Below that they sit in a row under the copy (2 x 2 on phones).
    Photos bento: photo, growth card, growth card, photo. Tiles bento: the
    two gradient tiles take the tall slots, the white and dark ones the
    short slots. */
export function FloatBento({
  p,
  bento,
  part,
}: {
  p: Palette;
  bento: HeroBento;
  /** "float": the absolute layer (render before the copy); "row": the
      fallback row (render after the copy). */
  part: "float" | "row";
}) {
  // Slots in order: top-left (tall), bottom-left, top-right, bottom-right
  // (tall).
  const cards: ReactNode[] =
    bento.kind === "photos"
      ? [
          <PhotoTile
            key="a"
            {...bento.photoA}
            priority={part === "float"}
            className="tw:h-full"
          />,
          <GrowthCard
            key="b"
            tile={bento.cardA}
            background={grad(p, "a")}
            className="tw:h-full"
          />,
          <GrowthCard
            key="c"
            tile={bento.cardB}
            background={grad(p, "b")}
            className="tw:h-full"
          />,
          <PhotoTile key="d" {...bento.photoB} className="tw:h-full" />,
        ]
      : [
          <GrowthCard
            key="a"
            tile={bento.wide}
            background={grad(p, "b")}
            className="tw:h-full"
          />,
          <WhiteTile key="b" p={p} tile={bento.left} />,
          <DarkTile key="c" p={p} tile={bento.bottom} />,
          <GrowthCard
            key="d"
            tile={bento.right}
            background={grad(p, "a")}
            className="tw:h-full"
          />,
        ];
  const spot =
    "tw:absolute tw:w-[clamp(190px,calc(23vw-120px),240px)] tw:rounded-(--r-xl) tw:[box-shadow:0_30px_60px_-28px_rgba(12,21,38,0.45)]";
  const spots = [
    "tw:top-[2%] tw:left-0 tw:h-[260px] tw:-rotate-[5deg]",
    "tw:bottom-[2%] tw:left-[28px] tw:h-[220px] tw:rotate-[4deg]",
    "tw:top-[4%] tw:right-[20px] tw:h-[220px] tw:-rotate-[4deg]",
    "tw:right-0 tw:bottom-0 tw:h-[260px] tw:rotate-[5deg]",
  ];
  if (part === "float")
    return (
      /* Floating around the copy (wide screens). */
      <div
        className="ind-float tw:pointer-events-none tw:absolute tw:inset-y-0 tw:left-1/2 tw:hidden tw:w-full tw:max-w-[1440px] tw:-translate-x-1/2 tw:min-[1366px]:block"
        aria-hidden="true"
      >
        {cards.map((card, i) => (
          <div key={i} className={cx(spot, spots[i])}>
            {card}
          </div>
        ))}
      </div>
    );
  return (
    /* A row under the copy (laptops, tablets, phones). */
    <div
      className="tw:mt-12 tw:grid tw:grid-cols-4 tw:gap-4 tw:min-[1366px]:hidden tw:max-bsmd:grid-cols-2 tw:max-bssm:mt-10 tw:max-bssm:gap-3"
      aria-hidden="true"
    >
      {cards.map((card, i) => (
        <div key={i} className="tw:h-[230px] tw:max-bssm:h-[180px]">
          {card}
        </div>
      ))}
    </div>
  );
}

/** Four solid tiles (Florida layout): wide, two side by side, wide dark. */
export function TileBento({
  p,
  tiles,
}: {
  p: Palette;
  tiles: {
    wide: HeroTile & { chips: string[] };
    left: HeroTile;
    right: HeroTile;
    bottom: { title: string; sub: string };
  };
}) {
  return (
    <div
      className="tw:grid tw:w-full tw:grid-cols-2 tw:gap-4 tw:text-left tw:max-bssm:gap-3"
      aria-hidden="true"
    >
      <div
        className="tw:col-span-2 tw:flex tw:min-h-[210px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:p-7 tw:text-white tw:max-bssm:min-h-[180px] tw:max-bssm:p-5"
        style={{ background: grad(p, "b") }}
      >
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
          <span className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[19px]">
            <Icon name={tiles.wide.icon} />
          </span>
          <span className="tw:flex tw:flex-wrap tw:justify-end tw:gap-1.5 tw:text-[12px] tw:font-medium tw:max-bssm:hidden">
            {tiles.wide.chips.map((c) => (
              <span
                key={c}
                className="tw:rounded-full tw:bg-white/15 tw:px-2.5 tw:py-1"
              >
                {c}
              </span>
            ))}
          </span>
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(30px,3.2vw,50px)] tw:leading-[1.02] tw:font-medium tw:tracking-[-0.03em]">
            {tiles.wide.title}
          </b>
          <span className="tw:mt-2 tw:block tw:text-[15.5px]/[1.45] tw:text-white/85 tw:max-bssm:text-[13px]">
            {tiles.wide.sub}
          </span>
        </span>
      </div>

      <div className="tw:flex tw:min-h-[200px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:bg-white tw:p-6 tw:text-(--ink) tw:[box-shadow:0_24px_50px_-36px_rgba(12,21,38,0.35)] tw:max-bssm:min-h-[170px] tw:max-bssm:p-4">
        <span className="tw:flex tw:items-start tw:justify-between">
          <span
            className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:text-[19px]"
            style={{ background: p.bSoft, color: p.bText }}
          >
            <Icon name={tiles.left.icon} />
          </span>
          <FiTrendingUp className="tw:size-6" style={{ color: p.b }} />
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(22px,2.1vw,32px)] tw:leading-[1.08] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[20px]">
            {tiles.left.title}
          </b>
          <span className="tw:mt-2 tw:block tw:text-[14.5px]/[1.45] tw:text-(--text) tw:max-bssm:text-[12.5px]">
            {tiles.left.sub}
          </span>
        </span>
      </div>

      <div
        className="tw:flex tw:min-h-[200px] tw:flex-col tw:justify-between tw:rounded-(--r-xl) tw:p-6 tw:text-white tw:max-bssm:min-h-[170px] tw:max-bssm:p-4"
        style={{ background: grad(p, "a") }}
      >
        <span className="tw:grid tw:size-11 tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[21px]">
          <Icon name={tiles.right.icon} />
        </span>
        <span>
          <b className="tw:block tw:text-[clamp(22px,2.1vw,32px)] tw:leading-[1.08] tw:font-medium tw:tracking-[-0.02em] tw:max-bssm:text-[20px]">
            {tiles.right.title}
          </b>
          <span className="tw:mt-2 tw:block tw:text-[14.5px]/[1.45] tw:text-white/85 tw:max-bssm:text-[12.5px]">
            {tiles.right.sub}
          </span>
        </span>
      </div>

      <div className="tw:col-span-2 tw:flex tw:items-center tw:justify-between tw:gap-5 tw:rounded-(--r-xl) tw:bg-(--ink) tw:px-7 tw:py-5 tw:text-white tw:max-bssm:flex-col tw:max-bssm:items-start tw:max-bssm:gap-3 tw:max-bssm:px-5">
        <span>
          <b className="tw:block tw:text-[clamp(22px,2vw,30px)] tw:leading-tight tw:font-medium tw:tracking-[-0.02em]">
            {tiles.bottom.title}
          </b>
          <span className="tw:mt-1.5 tw:block tw:text-[14.5px] tw:text-white/70 tw:max-bssm:text-[12.5px]">
            {tiles.bottom.sub}
          </span>
        </span>
        <span className="tw:flex tw:items-end tw:gap-1.5">
          {[40, 48, 56, 64, 72, 80, 86, 92, 96, 100].map((h, i) => (
            <i
              key={i}
              className="tw:block tw:w-2.5 tw:rounded-full tw:max-bssm:w-2"
              style={{
                height: `${Math.round(h * 0.34)}px`,
                background: i > 5 ? p.a : p.aSoft,
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- growth UIs */

function MapsCard({ p, ui }: { p: Palette; ui: MapsUi }) {
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
          <SiGoogle className="tw:flex-none tw:text-[#4285f4]" /> {ui.query}
        </span>
      </div>
      <div className="tw:relative tw:h-[150px] tw:overflow-hidden tw:bg-[#e8f3ee]">
        <svg
          viewBox="0 0 470 150"
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:size-full"
        >
          <path d="M330 0 C360 40 420 50 470 40 L470 0 Z" fill="#bfe3f5" />
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
            style={{ background: p.b }}
          >
            Your Company
          </span>
          <MdLocationOn
            className="tw:-mt-0.5 tw:size-9"
            style={{ color: p.b }}
          />
        </span>
        <MdLocationOn className="tw:absolute tw:top-[48%] tw:left-[66%] tw:size-6 tw:text-[#94a3b8]" />
        <MdLocationOn className="tw:absolute tw:top-[58%] tw:left-[16%] tw:size-6 tw:text-[#94a3b8]" />
      </div>
      <div className="tw:grid tw:gap-2 tw:p-4">
        <div
          className="tw:rounded-[14px] tw:p-3 tw:ring-[1.5px]"
          style={
            {
              background: p.bSoft,
              ["--tw-ring-color"]: p.b,
            } as CSSProperties
          }
        >
          <span className="tw:flex tw:items-center tw:gap-2.5">
            <span
              className="tw:grid tw:size-7 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
              style={{ background: p.b }}
            >
              1
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:truncate tw:text-[14px] tw:font-semibold">
                Your Company
              </b>
              <span className="tw:block tw:truncate tw:text-[12px] tw:text-(--muted)">
                {ui.category} · {ui.city}
              </span>
            </span>
          </span>
          <span className="tw:mt-2.5 tw:grid tw:grid-cols-2 tw:gap-2 tw:text-[12px] tw:font-semibold">
            <span
              className="tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-1.5 tw:text-white"
              style={{ background: p.b }}
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

function AiCard({ p, ui }: { p: Palette; ui: AiUi }) {
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
          <HiSparkles className="tw:size-5" style={{ color: p.b }} /> AI
          Overview
        </span>
        <Chip tone="muted">Example</Chip>
      </span>
      <span className="tw:mt-3 tw:flex tw:items-center tw:gap-2 tw:rounded-full tw:bg-(--panel) tw:px-3.5 tw:py-2 tw:text-[12.5px] tw:font-medium">
        <SiGoogle className="tw:flex-none tw:text-[#4285f4]" /> {ui.query}
      </span>
      <div
        className="tw:mt-3 tw:rounded-[16px] tw:p-4 tw:text-[13px]/[1.55]"
        style={{
          background: `linear-gradient(160deg, ${p.bSoft}, ${p.aSoft})`,
        }}
      >
        {ui.intro} <b className="tw:font-semibold">Your Company</b> is a
        well-reviewed local choice:
        <ul className="tw:mt-2 tw:grid tw:gap-1.5">
          {ui.bullets.map((t) => (
            <li key={t} className="tw:flex tw:items-center tw:gap-2">
              <i
                className="tw:block tw:size-1.5 tw:flex-none tw:rounded-full"
                style={{ background: p.b }}
              />
              {t}
            </li>
          ))}
        </ul>
        <span className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5">
          {["yourcompany.com", "Google reviews", "Google Maps"].map((src) => (
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

function ReviewsCard({ p, ui }: { p: Palette; ui: ReviewsUi }) {
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
        title={ui.title ?? "After-job review request"}
        right={<Chip tone="muted">Example</Chip>}
      />
      <div className="tw:mt-4 tw:max-w-[88%] tw:rounded-[16px] tw:rounded-bl-[5px] tw:bg-(--panel) tw:px-3.5 tw:py-3 tw:text-[13px]/[1.5]">
        {ui.sms}
        <span
          className="tw:mt-1.5 tw:block tw:font-semibold"
          style={{ color: "#1a73e8" }}
        >
          g.page/yourcompany/review
        </span>
      </div>
      <span className="tw:mt-1.5 tw:block tw:text-[11px] tw:text-(--muted)">
        {ui.sentNote ?? "Sent as the job closed"}
      </span>
      <div className="tw:mt-4 tw:rounded-[16px] tw:p-4 tw:ring-1 tw:ring-(--line)">
        <span className="tw:flex tw:items-center tw:justify-between tw:gap-2">
          <span className="tw:flex tw:items-center tw:gap-2 tw:text-[13px]">
            <span
              className="tw:grid tw:size-8 tw:place-items-center tw:rounded-full tw:text-[12px] tw:font-bold tw:text-white"
              style={{ background: p.a }}
            >
              {ui.reviewer.charAt(0)}
            </span>
            <b className="tw:font-semibold">{ui.reviewer}</b>
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
          {ui.review}
        </p>
        <span
          className="tw:mt-3 tw:block tw:rounded-[12px] tw:px-3 tw:py-2 tw:text-[12px]/[1.45]"
          style={{ background: p.bSoft, color: p.bText }}
        >
          <b className="tw:font-semibold">Owner reply:</b> {ui.reply}
        </span>
      </div>
    </div>
  );
}

function CallsCard({ p, ui }: { p: Palette; ui: CallsUi }) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[460px] tw:p-5 tw:text-left tw:text-(--ink)",
      )}
      aria-hidden="true"
    >
      <UiHead
        icon={<FiPhoneCall />}
        title={ui.title}
        right={<Chip tone="muted">Example</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-2.5">
        {ui.calls.map((c, i) => (
          <li
            key={c.service}
            className="tw:flex tw:items-center tw:gap-3 tw:rounded-[14px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5"
          >
            <span
              className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[14px] tw:text-white"
              style={{ background: i % 2 ? p.b : p.a }}
            >
              <FiPhoneCall />
            </span>
            <span className="tw:min-w-0 tw:flex-1">
              <b className="tw:block tw:truncate tw:text-[13.5px] tw:font-semibold">
                {c.service}
              </b>
              <span className="tw:block tw:text-[11.5px] tw:text-(--muted)">
                {c.source}
              </span>
            </span>
            <span className="tw:flex-none tw:text-[11.5px] tw:font-medium tw:text-(--muted)">
              {c.when}
            </span>
          </li>
        ))}
      </ul>
      <span
        className="tw:mt-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:px-3 tw:py-2.5 tw:text-[12px] tw:font-semibold"
        style={{ background: p.bSoft, color: p.bText }}
      >
        <FiCheckCircle className="tw:size-3.5" /> Every call tracked to a booked
        job
      </span>
    </div>
  );
}

function WebsiteCard({ p, ui }: { p: Palette; ui: WebsiteUi }) {
  return (
    <div
      className="tw:w-[260px] tw:overflow-hidden tw:rounded-[34px] tw:border-[7px] tw:border-(--ink) tw:bg-white tw:text-left tw:text-(--ink) tw:[box-shadow:0_40px_70px_-40px_rgba(12,21,38,0.55)]"
      aria-hidden="true"
    >
      <div className="tw:flex tw:items-center tw:justify-center tw:bg-(--panel) tw:py-1.5 tw:text-[10.5px] tw:font-medium tw:text-(--muted)">
        {ui.url}
      </div>
      <div
        className="tw:px-4 tw:pt-5 tw:pb-6 tw:text-white"
        style={{
          background: `linear-gradient(160deg, ${p.bDeep}, ${p.b})`,
        }}
      >
        <span className="tw:block tw:h-2 tw:w-16 tw:rounded-full tw:bg-white/40" />
        <b className="tw:mt-4 tw:block tw:text-[18px]/[1.2] tw:font-semibold">
          {ui.headline}
        </b>
        <span
          className="tw:mt-4 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-full tw:py-2 tw:text-[12px] tw:font-semibold tw:text-white"
          style={{ background: p.a }}
        >
          <FiPhoneCall /> {ui.cta ?? "Tap to call now"}
        </span>
      </div>
      <div className="tw:grid tw:grid-cols-2 tw:gap-2 tw:p-3">
        {ui.services.map((s, i) => (
          <span
            key={s}
            className="tw:rounded-[12px] tw:px-2.5 tw:py-2.5 tw:text-[11px] tw:font-semibold"
            style={softStyle(p, i)}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="tw:mx-3 tw:mb-4 tw:flex tw:items-center tw:gap-2 tw:rounded-[12px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[11px] tw:font-medium">
        <FiCalendar style={{ color: p.b }} />{" "}
        {ui.note ?? "Book online in 60 seconds"}
      </div>
    </div>
  );
}

/** Renders the right growth UI for a row. */
export function GrowthUiView({ p, ui }: { p: Palette; ui: GrowthUi }) {
  switch (ui.kind) {
    case "maps":
      return <MapsCard p={p} ui={ui} />;
    case "ai":
      return <AiCard p={p} ui={ui} />;
    case "reviews":
      return <ReviewsCard p={p} ui={ui} />;
    case "calls":
      return <CallsCard p={p} ui={ui} />;
    case "website":
      return <WebsiteCard p={p} ui={ui} />;
    case "tripChat":
      return <TripChatCard p={p} ui={ui} />;
    case "thingsToDo":
      return <ThingsToDoCard p={p} ui={ui} />;
    case "directBook":
      return <DirectBookCard p={p} ui={ui} />;
  }
}

/* ----------------------------------------------------------- step UIs */

const STATUS: Record<
  "gap" | "behind" | "open" | "good",
  [string, "red" | "amber" | "green" | "blue"]
> = {
  gap: ["Gaps", "red"],
  behind: ["Behind", "amber"],
  open: ["Open", "green"],
  good: ["Strong", "blue"],
};

/** The three process-step UIs (audit, plan, launch). */
export function StepUis({
  p,
  audit,
  plan,
  launch,
}: {
  p: Palette;
  audit: [string, "gap" | "behind" | "open" | "good"][];
  plan: string[];
  launch: string[];
}) {
  return [
    <div
      key="audit"
      className="tw:grid tw:h-full tw:content-start tw:gap-2 tw:bg-white tw:p-4"
    >
      <UiHead
        icon={<FiFileText />}
        tone="gold"
        title="Free marketing audit"
        right={<Chip tone="blue">Free</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {audit.map(([k, v]) => (
          <li
            key={k}
            className="tw:flex tw:items-center tw:justify-between tw:gap-2 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
          >
            <span className="tw:truncate">{k}</span>
            <Chip tone={STATUS[v][1]}>{STATUS[v][0]}</Chip>
          </li>
        ))}
      </ul>
    </div>,
    <div
      key="plan"
      className="tw:grid tw:h-full tw:content-start tw:gap-2.5 tw:bg-white tw:p-4"
    >
      <UiHead
        icon={<FiSearch />}
        title="Your growth plan"
        right={<Chip tone="green">Approved</Chip>}
      />
      <span className="tw:text-[11px] tw:font-semibold tw:tracking-[0.06em] tw:text-(--muted) tw:uppercase">
        Push first
      </span>
      <span className="tw:flex tw:flex-wrap tw:gap-1.5">
        {plan.map((t, i) => (
          <span
            key={t}
            className="tw:rounded-full tw:px-2.5 tw:py-1 tw:text-[11.5px] tw:font-semibold"
            style={softStyle(p, i)}
          >
            {t}
          </span>
        ))}
      </span>
    </div>,
    <div
      key="launch"
      className="tw:grid tw:h-full tw:content-start tw:gap-2 tw:bg-white tw:p-4"
    >
      <UiHead
        icon={<FiCheckCircle />}
        tone="green"
        title="Launch checklist"
        right={<Chip tone="blue">Live</Chip>}
      />
      <ul className="tw:grid tw:gap-1.5">
        {launch.map((t) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-medium"
          >
            <i className="tw:grid tw:size-4 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[9px] tw:text-white">
              <FiCheck />
            </i>
            {t}
          </li>
        ))}
      </ul>
    </div>,
  ];
}
