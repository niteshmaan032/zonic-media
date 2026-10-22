import type { CSSProperties, ReactNode } from "react";
import { FiCheck } from "react-icons/fi";
import { cx } from "./primitives";

/* Mini-UI building blocks for the Dallas–Fort Worth pages (19 Oct 2026):
   the about-section card + UI and the process-step UIs that replaced the
   photos. They only read the shared colour tokens (--ink, --blue, --panel,
   --line, --lift …), which all three DFW page roots define, and the ui-*
   keyframes in ./ui.css. Illustrations only: "Your business", no client
   numbers. */

const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

/* -------------------------------------------------------------- frames */

/** Fills a process-step photo slot (the tilted white card). Content sits
    in the top part because the slot's bottom edge is cropped. */
export function StepUi({
  children,
  className,
  center,
}: {
  children: ReactNode;
  className?: string;
  /** Centre the content vertically (tall slots, e.g. the /home2 service cards). */
  center?: boolean;
}) {
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:bg-white tw:px-5 tw:pt-5 tw:pb-9 tw:text-left tw:text-(--ink) tw:max-bssm:px-4 tw:max-bssm:pt-4",
        center && "tw:flex tw:flex-col tw:justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <div className="tw:mx-auto tw:grid tw:w-full tw:max-w-[380px] tw:gap-2.5">{children}</div>
    </div>
  );
}

/** Fills the wide about-section slot: tinted stage with the UI on it. The
    left padding keeps the UI clear of the rotating Clutch badge. */
export function AboutUi({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:grid tw:place-items-center tw:overflow-hidden tw:[background:radial-gradient(60%_60%_at_20%_15%,rgba(49,87,245,0.14),transparent_70%),radial-gradient(55%_55%_at_85%_90%,rgba(110,80,247,0.10),transparent_70%),#fff] tw:py-8 tw:pr-8 tw:pl-[clamp(32px,8vw,120px)] tw:text-left tw:text-(--ink) tw:max-bslg:px-6 tw:max-bssm:p-4",
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

const CARD_TONE = {
  ink: "tw:bg-(--ink) tw:text-white",
  blue: "tw:bg-(--blue) tw:text-white",
  gold: "tw:bg-(--gold) tw:text-(--ink)",
};

/** Solid card for the narrow about-section slot. Content is real page text
    (not aria-hidden). On phones it drops into the flow at its own height. */
export function AboutCard({
  tone,
  top,
  kicker,
  title,
  points,
  foot,
}: {
  tone: keyof typeof CARD_TONE;
  top: ReactNode;
  kicker: string;
  title: string;
  points: ReactNode[];
  foot: string;
}) {
  const dark = tone !== "gold";
  return (
    <div
      className={cx(
        "tw:absolute tw:inset-0 tw:flex tw:flex-col tw:justify-between tw:gap-6 tw:p-8 tw:text-left tw:max-bsxl:gap-4 tw:max-bsxl:p-7 tw:max-bslg:gap-3 tw:max-bslg:p-5 tw:max-bssm:static tw:max-bssm:gap-8 tw:max-bssm:p-7",
        CARD_TONE[tone],
      )}
    >
      <div>{top}</div>
      <div>
        <p
          className={cx(
            "tw:text-[12.5px] tw:font-semibold tw:tracking-[0.14em] tw:uppercase",
            dark ? "tw:text-white/60" : "tw:text-(--ink)/60",
          )}
        >
          {kicker}
        </p>
        <p className="tw:mt-2 tw:text-[clamp(26px,2.6vw,38px)] tw:leading-[1.08] tw:font-medium tw:tracking-[-0.03em] tw:text-balance tw:max-bslg:text-2xl">
          {title}
        </p>
        <ul className={cx("tw:mt-5 tw:grid tw:gap-2 tw:text-[15px]/[1.4] tw:max-bslg:mt-3 tw:max-bslg:gap-1.5 tw:max-bslg:text-[13.5px] tw:max-bssm:mt-5 tw:max-bssm:gap-2", dark ? "tw:text-white/85" : "tw:text-(--ink)/80")}>
          {points.map((p, i) => (
            <li key={i} className="tw:flex tw:items-start tw:gap-2">
              <FiCheck
                aria-hidden="true"
                className={cx(
                  "tw:mt-0.5 tw:size-4 tw:flex-none tw:rounded-full tw:p-0.5 tw:[stroke-width:3.5]",
                  dark ? "tw:bg-(--gold)/20 tw:text-(--gold)" : "tw:bg-white/60 tw:text-(--ink)",
                )}
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className={cx("tw:mt-5 tw:text-[13px] tw:max-bslg:mt-3 tw:max-bssm:mt-5", dark ? "tw:text-white/60" : "tw:text-(--ink)/65")}>{foot}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- pieces */

export const UI_CARD = "tw:rounded-[20px] tw:bg-white tw:[box-shadow:var(--lift)]";

/** Card header: icon tile, title, optional right-hand element. */
export function UiHead({
  icon,
  title,
  right,
  tone = "soft",
}: {
  icon: ReactNode;
  title: ReactNode;
  right?: ReactNode;
  tone?: "soft" | "green" | "gold" | "ink";
}) {
  return (
    <div className="tw:flex tw:items-center tw:gap-2.5">
      <span
        className={cx(
          "tw:grid tw:size-8 tw:flex-none tw:place-items-center tw:rounded-[10px] tw:text-[15px]",
          tone === "soft" && "tw:bg-(--blue-soft) tw:text-(--blue)",
          tone === "green" && "tw:bg-(--green-soft) tw:text-(--green)",
          tone === "gold" && "tw:bg-(--gold-soft) tw:text-[#8a6400]",
          tone === "ink" && "tw:bg-(--ink) tw:text-white",
        )}
      >
        {icon}
      </span>
      <b className="tw:truncate tw:text-[14.5px] tw:font-medium tw:tracking-[-0.01em]">{title}</b>
      {right ? <span className="tw:ml-auto tw:flex-none">{right}</span> : null}
    </div>
  );
}

const CHIP = {
  green: "tw:bg-(--green-soft) tw:text-[#1f7a3a]",
  amber: "tw:bg-[#fff3cc] tw:text-[#8a6400]",
  red: "tw:bg-[#fde4e1] tw:text-[#b8352a]",
  blue: "tw:bg-(--blue-soft) tw:text-(--blue-dark)",
  ink: "tw:bg-(--ink) tw:text-white",
  muted: "tw:bg-(--panel) tw:text-(--muted)",
};

export function Chip({
  tone = "muted",
  className,
  style,
  children,
}: {
  tone?: keyof typeof CHIP;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <span
      className={cx(
        "tw:inline-flex tw:items-center tw:gap-1 tw:rounded-full tw:px-2.5 tw:py-0.5 tw:text-[11.5px] tw:font-semibold tw:whitespace-nowrap",
        CHIP[tone],
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}

/** Grey skeleton text line. */
export function Line({ w = "100%", className }: { w?: string; className?: string }) {
  return (
    <i
      className={cx("tw:block tw:h-1.5 tw:rounded-full tw:bg-[#e2e8f0]", className)}
      style={{ width: w }}
    />
  );
}

/** Track with a bar that fills to `w` % (8s loop, staggered by `at`). */
export function GrowBar({
  w,
  at = 0,
  color = "var(--blue)",
  className,
}: {
  w: number;
  at?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span className={cx("tw:block tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)", className)}>
      <i
        className="tw:block tw:h-full tw:rounded-full tw:animate-[ui-grow_8s_ease_infinite_both]"
        style={{ "--w": `${w}%`, width: `${w}%`, background: color, ...delay(at) } as CSSProperties}
      />
    </span>
  );
}

/** Check circle that turns green at `at` seconds into an 8s loop. */
export function Tick({ at = 0, className }: { at?: number; className?: string }) {
  return (
    <span
      className={cx(
        "tw:grid tw:size-[18px] tw:flex-none tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[11px] tw:text-white tw:animate-[ui-tick_8s_ease_infinite_both]",
        className,
      )}
      style={delay(at)}
    >
      <FiCheck className="tw:[stroke-width:3.5]" />
    </span>
  );
}

/** Toggle switch that flips on at `at` seconds into an 8s loop. */
export function Switch({ at = 0 }: { at?: number }) {
  return (
    <span
      className="tw:relative tw:block tw:h-[18px] tw:w-8 tw:flex-none tw:rounded-full tw:bg-(--green) tw:animate-[ui-switch_8s_ease_infinite_both]"
      style={delay(at)}
    >
      <i
        className="tw:absolute tw:top-0.5 tw:left-0.5 tw:block tw:size-3.5 tw:rounded-full tw:bg-white tw:shadow-sm tw:[transform:translateX(14px)] tw:animate-[ui-knob_8s_ease_infinite_both]"
        style={delay(at)}
      />
    </span>
  );
}

/** Status label that swaps from `from` to `to` once per loop. Resting
    state (reduced motion) shows `to`. */
export function Swap({
  from,
  to,
  at = 0,
  dur = 8,
}: {
  from: ReactNode;
  to: ReactNode;
  at?: number;
  dur?: number;
}) {
  return (
    <span className="tw:grid tw:justify-items-end">
      <span
        className="tw:col-start-1 tw:row-start-1 tw:opacity-0"
        style={{ animation: `ui-swap-a ${dur}s ease infinite both`, ...delay(at) }}
      >
        {from}
      </span>
      <span
        className="tw:col-start-1 tw:row-start-1"
        style={{ animation: `ui-swap-b ${dur}s ease infinite both`, ...delay(at) }}
      >
        {to}
      </span>
    </span>
  );
}

/** Wrapper that fades a row in at `at` seconds into an 8s loop. */
export function Appear({
  at = 0,
  className,
  children,
}: {
  at?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("tw:animate-[ui-in_8s_ease_infinite_both]", className)} style={delay(at)}>
      {children}
    </div>
  );
}

export { delay as uiDelay };
