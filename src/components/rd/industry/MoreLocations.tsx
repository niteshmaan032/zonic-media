"use client";

/* "More locations" card + popup (owner, 25 Oct 2026).

   When a niche has more than six location pages, the locations section
   shows five cards and this one as the sixth. It opens a native <dialog>
   with the rest. The dialog is always in the HTML (closed, not unmounted),
   so crawlers still see every location link. */

import Link from "next/link";
import { useId, useRef, type CSSProperties } from "react";
import { FiArrowRight, FiMapPin, FiPlus, FiX } from "react-icons/fi";

export type MoreLocationItem = { name: string; href: string; cities: string };

export function MoreLocations({
  items,
  title,
  note,
  unit = "states",
  background,
  pinStyles,
}: {
  /** The locations not shown as cards. */
  items: MoreLocationItem[];
  /** Popup heading; must be unique on the site. */
  title: string;
  /** Optional line under the list (e.g. "we serve every state"). */
  note?: string;
  unit?: string;
  /** Card background (the page's accent gradient). */
  background: string;
  /** Pin chip colours in the popup list, cycled. */
  pinStyles?: CSSProperties[];
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-haspopup="dialog"
        className="tw:group tw:flex tw:h-full tw:w-full tw:cursor-pointer tw:items-center tw:gap-3.5 tw:rounded-[22px] tw:border-0 tw:px-5 tw:py-4 tw:text-left tw:text-white tw:transition tw:hover:-translate-y-0.5"
        style={{ background }}
      >
        <span
          className="tw:grid tw:size-11 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white/20 tw:text-[18px]"
          aria-hidden="true"
        >
          <FiPlus />
        </span>
        <span className="tw:min-w-0 tw:flex-1">
          <b className="tw:block tw:text-[17px] tw:font-semibold">
            {items.length} more {unit}
          </b>
          <span className="tw:block tw:truncate tw:text-[13.5px] tw:text-white/80">
            See every {unit.replace(/s$/, "")} we cover
          </span>
        </span>
        <FiArrowRight
          aria-hidden="true"
          className="tw:flex-none tw:transition-transform tw:group-hover:translate-x-[3px]"
        />
      </button>

      <dialog
        ref={ref}
        aria-labelledby={headingId}
        onClick={(e) => {
          // A click on the backdrop (the dialog itself) closes it.
          if (e.target === e.currentTarget) close();
        }}
        className="tw:m-auto tw:max-h-[min(720px,calc(100vh-48px))] tw:w-[min(940px,calc(100vw-32px))] tw:overflow-hidden tw:rounded-[28px] tw:border-0 tw:bg-white tw:p-0 tw:text-(--ink) tw:[box-shadow:0_40px_90px_-30px_rgba(12,21,38,0.55)] tw:backdrop:bg-[rgba(12,21,38,0.55)] tw:backdrop:backdrop-blur-[2px]"
      >
        <div className="tw:flex tw:max-h-[min(720px,calc(100vh-48px))] tw:flex-col">
          <div className="tw:flex tw:items-start tw:justify-between tw:gap-4 tw:px-8 tw:pt-7 tw:pb-5 tw:max-bssm:px-5 tw:max-bssm:pt-5">
            <h3
              id={headingId}
              className="tw:m-0 tw:text-[clamp(22px,2.4vw,30px)]/[1.15] tw:font-medium tw:tracking-[-0.02em]"
            >
              {title}
            </h3>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="tw:grid tw:size-10 tw:flex-none tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border-0 tw:bg-(--panel) tw:text-[18px] tw:text-(--ink) tw:transition tw:hover:bg-(--line)"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>
          <div
            className="tw:min-h-0 tw:overflow-y-auto tw:overscroll-contain tw:px-8 tw:pb-8 tw:max-bssm:px-5 tw:max-bssm:pb-6"
            data-lenis-prevent
          >
            <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-3 tw:gap-2.5 tw:p-0 tw:max-bsmd:grid-cols-2 tw:max-bssm:grid-cols-1">
              {items.map((s, i) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="tw:group tw:flex tw:h-full tw:items-center tw:gap-3 tw:rounded-[18px] tw:bg-(--panel) tw:px-4 tw:py-3 tw:text-(--ink) tw:no-underline tw:transition tw:hover:-translate-y-0.5"
                  >
                    <span
                      className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[15px]"
                      style={pinStyles?.[i % pinStyles.length]}
                      aria-hidden="true"
                    >
                      <FiMapPin />
                    </span>
                    <span className="tw:min-w-0 tw:flex-1">
                      <b className="tw:block tw:text-[15.5px] tw:font-semibold">
                        {s.name}
                      </b>
                      <span className="tw:block tw:truncate tw:text-[12.5px] tw:text-(--muted)">
                        {s.cities}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {note ? (
              <p className="tw:mt-5 tw:mb-0 tw:text-[15px] tw:text-(--text)">
                {note}
              </p>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
