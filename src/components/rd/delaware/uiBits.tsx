import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { UI_CARD } from "@/components/rd/dfw-kit/ui";

/* Building blocks shared by the Delaware draft UIs (DelawareUi.tsx and the
   per-page files): inline 8s loops (de-* keyframes in ./delaware.css),
   two-state flips, fill bars, the grey feature stage, the card shell and the
   tilted process-step slot. */

/** Inline animation (inline so new loops never depend on Tailwind
    generating a fresh arbitrary class mid-session). */
export const run = (name: string, dur = 8, easing = "ease"): CSSProperties => ({
  animation: `${name} ${dur}s ${easing} infinite both`,
});
export const inAt = (i: number) => run(`de-in-${Math.min(Math.max(i, 1), 6)}`);

/** Two stacked states; the second one rests (reduced motion shows it). */
export function Flip({
  from,
  to,
  n = 1,
}: {
  from: ReactNode;
  to: ReactNode;
  n?: 1 | 2 | 3;
}) {
  return (
    <span className="tw:grid tw:justify-items-end">
      <span
        className="tw:col-start-1 tw:row-start-1 tw:opacity-0"
        style={run(`de-swap-a${n}`)}
      >
        {from}
      </span>
      <span
        className="tw:col-start-1 tw:row-start-1"
        style={run(`de-swap-b${n}`)}
      >
        {to}
      </span>
    </span>
  );
}

/** Bar track that fills to `w` %. */
export function Fill({
  w,
  color = "var(--blue)",
  className,
}: {
  w: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "tw:block tw:h-2 tw:overflow-hidden tw:rounded-full tw:bg-(--panel)",
        className,
      )}
    >
      <i
        className="tw:block tw:h-full tw:rounded-full"
        style={
          {
            "--w": `${w}%`,
            width: `${w}%`,
            background: color,
            ...run("de-fill"),
          } as CSSProperties
        }
      />
    </span>
  );
}

/** Grey stage with a dot grid behind the UI card. */
export function Stage({
  flip,
  children,
}: {
  flip?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "tw:relative tw:isolate tw:grid tw:min-h-[420px] tw:place-items-center tw:overflow-hidden tw:rounded-(--r-xl) tw:bg-(--panel) tw:px-9 tw:py-11 tw:max-bssm:min-h-0 tw:max-bssm:px-[18px] tw:max-bssm:py-8",
        flip && "tw:bslg:order-2",
      )}
      aria-hidden="true"
    >
      <span
        className="tw:absolute tw:inset-0 tw:-z-1"
        style={{
          backgroundImage:
            "radial-gradient(rgba(12,21,38,0.09) 1.1px, transparent 1.3px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(70% 70% at 50% 50%, #000, transparent)",
        }}
      />
      {children}
    </div>
  );
}

export const CARD = cx(
  UI_CARD,
  "tw:w-full tw:max-w-[420px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
);

/** White slot inside the tilted process frame (content sits high: the
    frame's bottom edge is cropped). */
export function Slot({ children }: { children: ReactNode }) {
  return (
    <div
      className="tw:absolute tw:inset-0 tw:bg-white tw:px-5 tw:pt-5 tw:pb-9 tw:text-left tw:text-(--ink) tw:max-bssm:px-4 tw:max-bssm:pt-4"
      aria-hidden="true"
    >
      <div className="tw:mx-auto tw:grid tw:w-full tw:max-w-[380px] tw:gap-2.5">
        {children}
      </div>
    </div>
  );
}

export const TICK_AT = ["de-dot-1", "de-dot-2", "de-dot-3", "de-dot-4"];
