import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

/* DFW kit layout primitives (19 Oct 2026). Pages wrap in <main className=
   "dk-root"> and import ./kit.css for the tokens. Sizes copy the reference
   DFW pages; variants never repeat a property the base sets, because
   Tailwind orders utilities itself and two background utilities on one
   element would fight. */

export const cx = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

/* ---------------------------------------------------------------- layout */

/** Page section. "grey" sits on the page background with the shared
    vertical rhythm; "white" is a full-bleed white band. */
export function Section({
  id,
  labelledBy,
  tone = "grey",
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  tone?: "grey" | "white";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        tone === "white"
          ? "tw:bg-white tw:py-16 tw:max-bssm:py-11"
          : "tw:py-(--sec-y)",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Side insets that track the navbar. `flushOnPhone` lets a full card run
    edge to edge below 576px. */
export function Wrap({
  flushOnPhone,
  className,
  children,
}: {
  flushOnPhone?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:w-full tw:px-(--inset)",
        flushOnPhone && "tw:max-bssm:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- headings */

const STRIP = {
  hero: "tw:text-[clamp(38px,5vw,76px)] tw:max-bssm:text-[clamp(30px,8.6vw,40px)]",
  /** Long H1s that should sit on two lines across the full width (/home2). */
  heroWide: "tw:text-[clamp(34px,4.4vw,64px)] tw:max-bssm:text-[clamp(30px,8.6vw,40px)]",
  section: "tw:text-[clamp(34px,4.6vw,62px)] tw:max-bssm:text-[clamp(30px,8.6vw,40px)]",
  card: "tw:text-[clamp(30px,3.3vw,50px)] tw:max-bssm:text-[clamp(30px,8.6vw,40px)]",
};

/** Big section heading (the reference pages' "Strip"). */
export function Strip({
  as: Tag = "h2",
  id,
  size = "section",
  className,
  children,
}: {
  as?: "h1" | "h2";
  id?: string;
  size?: keyof typeof STRIP;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cx(
        STRIP[size],
        "tw:leading-[1.12] tw:tracking-[-0.03em] tw:max-bsmd:leading-[1.16]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Centred H2 + intro used by the white bands. */
export function CenterHead({
  id,
  title,
  children,
}: {
  id: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="tw:mx-auto tw:mb-12 tw:max-w-[860px] tw:text-center">
      <h2
        id={id}
        className="tw:text-[clamp(32px,4vw,58px)] tw:leading-[1.08] tw:tracking-[-0.03em] tw:text-balance"
      >
        {title}
      </h2>
      {children ? (
        <p className="tw:mt-[18px] tw:text-lg/[1.65] tw:text-(--text)">{children}</p>
      ) : null}
    </div>
  );
}

/** Heading on the left, aside on the right, wrapping on small screens. */
export function RowHead({
  align = "end",
  children,
}: {
  align?: "end" | "start";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:mb-9 tw:flex tw:flex-wrap tw:justify-between tw:gap-6",
        align === "end" ? "tw:items-end" : "tw:items-start",
      )}
    >
      {children}
    </div>
  );
}

/** Small uppercase kicker. */
export function Label({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p
      className={cx(
        "tw:mb-3.5 tw:text-[13px] tw:font-semibold tw:tracking-[0.14em] tw:text-(--muted) tw:uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Body copy at the reference size. */
export const LEAD = "tw:text-lg/[1.65] tw:text-(--ink-2)";

/* ----------------------------------------------------------------- pills */

const PILL_BASE =
  "tw:group tw:inline-flex tw:items-center tw:justify-center tw:rounded-full tw:border-[1.5px] tw:font-medium tw:whitespace-nowrap tw:transition tw:duration-200 tw:hover:-translate-y-0.5";

const PILL_TONE = {
  ink: "tw:border-(--ink) tw:bg-(--ink) tw:text-white tw:hover:border-(--ink-2) tw:hover:bg-(--ink-2)",
  outline:
    "tw:border-(--ink) tw:bg-transparent tw:text-(--ink) tw:hover:bg-(--ink) tw:hover:text-white",
  blue: "tw:border-(--blue) tw:bg-(--blue) tw:text-white tw:hover:border-(--blue-dark) tw:hover:bg-(--blue-dark)",
  white:
    "tw:border-white tw:bg-white tw:text-(--ink) tw:hover:border-(--gold) tw:hover:bg-(--gold)",
};

const PILL_SIZE = {
  lg: "tw:min-h-14 tw:gap-[9px] tw:px-[34px] tw:text-[16.5px]",
  md: "tw:min-h-14 tw:gap-[9px] tw:px-7 tw:text-base",
  sm: "tw:min-h-[50px] tw:gap-[9px] tw:px-7 tw:text-[15.5px]",
  arrow: "tw:min-h-[54px] tw:gap-3.5 tw:pr-2 tw:pl-[26px] tw:text-base",
};

/** Rounded CTA. In-page anchors, tel:, mailto: and external URLs render a
    plain <a>; site paths use next/link. `arrow` adds the circled arrow. */
export function Pill({
  href,
  tone = "ink",
  size,
  arrow,
  fullOnPhone,
  className,
  children,
}: {
  href: string;
  tone?: keyof typeof PILL_TONE;
  size?: keyof typeof PILL_SIZE;
  arrow?: boolean;
  fullOnPhone?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = cx(
    PILL_BASE,
    PILL_TONE[tone],
    PILL_SIZE[arrow ? "arrow" : (size ?? (tone === "outline" ? "sm" : "lg"))],
    fullOnPhone && "tw:max-bssm:w-full",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow ? (
        <span
          className={cx(
            "tw:grid tw:size-[38px] tw:flex-none tw:place-items-center tw:rounded-full tw:text-[17px] tw:transition tw:duration-200 tw:group-hover:rotate-45 tw:group-hover:bg-(--gold) tw:group-hover:text-(--ink)",
            tone === "white" ? "tw:bg-(--blue-soft) tw:text-(--blue)" : "tw:bg-white/15",
          )}
          aria-hidden="true"
        >
          <FiArrowUpRight />
        </span>
      ) : null}
    </>
  );
  return /^(#|tel:|mailto:|https?:)/.test(href) ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ----------------------------------------------------------------- lists */

/** Ticked list with a soft round check, as on the service cards. */
export function TickList({
  items,
  tone = "green",
  className,
}: {
  items: ReactNode[];
  tone?: "green" | "gold";
  className?: string;
}) {
  return (
    <ul className={cx("tw:grid tw:gap-2.5", className)}>
      {items.map((item, i) => (
        <li key={i} className="tw:flex tw:items-start tw:gap-2.5 tw:text-[16.5px]/[1.45]">
          <FiCheck
            aria-hidden="true"
            className={cx(
              "tw:mt-px tw:flex-none tw:rounded-full tw:[stroke-width:3.5]",
              tone === "gold"
                ? "tw:size-5 tw:bg-(--gold)/20 tw:p-1 tw:text-(--gold)"
                : "tw:size-[18px] tw:bg-(--green-soft) tw:p-[3px] tw:text-(--green)",
            )}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------- panel shell */

/** Grey rounded stage for a feature-row UI demo. `chip` says which edge
    the FloatChip sits on, so phones leave room for it there. */
export function PanelShell({
  flip,
  chip = "top",
  children,
}: {
  flip?: boolean;
  chip?: "top" | "bottom";
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:relative tw:grid tw:min-h-[400px] tw:place-items-center tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-9 tw:py-11 tw:max-bssm:min-h-[380px] tw:max-bssm:px-[18px]",
        chip === "top"
          ? "tw:max-bssm:pt-[92px] tw:max-bssm:pb-[30px]"
          : "tw:max-bssm:pt-[30px] tw:max-bssm:pb-[92px]",
        flip && "tw:bslg:order-2",
      )}
    >
      {children}
    </div>
  );
}

const CHIP_TONE = {
  gold: "tw:bg-(--gold) tw:text-(--ink)",
  blue: "tw:bg-(--blue) tw:text-white",
  ink: "tw:bg-(--ink) tw:text-white",
  green: "tw:bg-(--green) tw:text-white",
};

/** Floating stat chip in a panel corner (gently bobbing). */
export function FloatChip({
  tone = "gold",
  side = "right",
  edge = "top",
  value,
  label,
}: {
  tone?: keyof typeof CHIP_TONE;
  side?: "right" | "left";
  edge?: "top" | "bottom";
  value: ReactNode;
  label: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:absolute tw:z-3 tw:grid tw:gap-0.5 tw:rounded-3xl tw:px-[26px] tw:py-5 tw:[box-shadow:var(--lift)] tw:animate-[dk-float_7s_ease-in-out_infinite] tw:max-bssm:rounded-[18px] tw:max-bssm:px-[18px] tw:max-bssm:py-3.5",
        edge === "top"
          ? "tw:top-[34px] tw:max-bssm:top-[18px]"
          : "tw:bottom-[34px] tw:max-bssm:bottom-[18px]",
        side === "right"
          ? "tw:right-[30px] tw:max-bssm:right-[18px]"
          : "tw:left-[30px] tw:max-bssm:left-[18px]",
        CHIP_TONE[tone],
      )}
      aria-hidden="true"
    >
      <b className="tw:text-[40px] tw:leading-none tw:tracking-[-0.03em] tw:max-bssm:text-[28px]">
        {value}
      </b>
      <span className="tw:text-[14.5px] tw:max-bssm:text-[12.5px]">{label}</span>
    </div>
  );
}
