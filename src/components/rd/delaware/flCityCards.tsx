"use client";

import Link from "next/link";
import { useId, useRef } from "react";
import { FiArrowRight, FiMapPin, FiPlus, FiX } from "react-icons/fi";
import type { DelawareExtras } from "./types";

/* City cards for the Florida hub (owner, 19 Nov 2026): the first cities
   show as cards and the last slot is a card that opens the rest in a
   pop-up, like MoreLocations on the industry pages. The <dialog> is always
   in the HTML (closed, not unmounted), so crawlers see every city link. */

type Cities = NonNullable<DelawareExtras["cities"]>;
type City = Cities["items"][number];

const CARD =
  "tw:relative tw:flex tw:flex-col tw:rounded-[24px] tw:p-6 tw:max-bssm:p-5";

/** Matches the map pins' data-pin (flCitiesSection.tsx). */
const slug = (name: string) => name.toLowerCase().replace(/[^a-z]+/g, "-");

function CityCard({
  city,
  n,
  accent,
  tone,
  Heading,
}: {
  city: City;
  n: number;
  accent: string;
  /** Card background: white on the section, panel grey in the pop-up. */
  tone: "white" | "panel";
  Heading: "h3" | "h4";
}) {
  return (
    <li
      data-city={slug(city.name)}
      className={`${CARD} tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:shadow-[0_26px_50px_-30px_rgba(12,21,38,0.28)] ${
        tone === "white" ? "tw:bg-white" : "tw:bg-(--panel)"
      }`}
    >
      <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
        <span
          className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:text-[13px] tw:font-semibold tw:text-white"
          style={{ background: accent }}
          aria-hidden="true"
        >
          {String(n).padStart(2, "0")}
        </span>
        <span
          className={`tw:rounded-full tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium tw:text-(--ink-2) ${
            tone === "white" ? "tw:bg-(--panel)" : "tw:bg-white"
          }`}
        >
          {city.region}
        </span>
      </span>
      <Heading className="tw:mt-4 tw:text-[22px]/[1.2]">{city.name}</Heading>
      <p className="tw:mt-2 tw:grow tw:text-[15.5px]/[1.6] tw:text-(--text)">
        {city.desc}
      </p>
      {/* The link covers the card; its text is the city page's lead
          search term. */}
      <Link
        href={city.href}
        className="tw:group tw:mt-4 tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue) tw:after:absolute tw:after:inset-0 tw:after:rounded-[inherit] tw:after:content-['']"
      >
        {city.link}
        <FiArrowRight
          aria-hidden="true"
          className="tw:flex-none tw:transition-transform tw:group-hover:translate-x-[3px]"
        />
      </Link>
    </li>
  );
}

export function FlCityCards({
  items,
  more,
  accent,
}: {
  items: Cities["items"];
  more: Cities["more"];
  accent: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const headingId = useId();
  const close = () => ref.current?.close();
  const shown = more ? more.shown : items.length;
  const rest = items.slice(shown);

  return (
    <>
      <ul className="tw:grid tw:grid-cols-2 tw:gap-4 tw:max-bssm:grid-cols-1">
        {items.slice(0, shown).map((c, i) => (
          <CityCard
            key={c.name}
            city={c}
            n={i + 1}
            accent={accent}
            tone="white"
            Heading="h3"
          />
        ))}

        {more ? (
          <li
            className={`${CARD} tw:text-white tw:transition tw:duration-300 tw:hover:-translate-y-1 tw:hover:shadow-[0_26px_50px_-30px_rgba(12,21,38,0.45)]`}
            style={{ background: accent }}
          >
            <span className="tw:flex tw:items-center tw:justify-between tw:gap-3">
              <span
                className="tw:grid tw:size-9 tw:flex-none tw:place-items-center tw:rounded-full tw:bg-white tw:text-[13px] tw:font-semibold"
                style={{ color: accent }}
                aria-hidden="true"
              >
                +{rest.length}
              </span>
              <span className="tw:rounded-full tw:bg-white/15 tw:px-3 tw:py-1 tw:text-[12.5px] tw:font-medium">
                {more.region}
              </span>
            </span>
            <h3 className="tw:mt-4 tw:text-[22px]/[1.2] tw:text-white">
              {more.title}
            </h3>
            <ul
              className="tw:mt-3 tw:flex tw:grow tw:flex-wrap tw:content-start tw:gap-1.5"
              aria-label={more.title}
            >
              {rest.map((c) => (
                <li
                  key={c.name}
                  className="tw:rounded-full tw:border tw:border-white/35 tw:px-2.5 tw:py-1 tw:text-[13px]/[1.2]"
                >
                  {c.name}
                </li>
              ))}
            </ul>
            {/* Stretched over the card, so the whole card opens the pop-up. */}
            <button
              type="button"
              onClick={() => ref.current?.showModal()}
              aria-haspopup="dialog"
              className="tw:group tw:mt-4 tw:inline-flex tw:cursor-pointer tw:items-center tw:gap-2 tw:self-start tw:border-0 tw:bg-transparent tw:p-0 tw:text-[15px] tw:font-semibold tw:text-white tw:after:absolute tw:after:inset-0 tw:after:rounded-[inherit] tw:after:content-['']"
            >
              {more.open}
              <span className="tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-white tw:transition-transform tw:group-hover:rotate-90">
                <FiPlus aria-hidden="true" style={{ color: accent }} />
              </span>
            </button>
          </li>
        ) : null}
      </ul>

      {more ? (
        <dialog
          ref={ref}
          aria-labelledby={headingId}
          onClick={(e) => {
            // A click on the backdrop (the dialog itself) closes it.
            if (e.target === e.currentTarget) close();
          }}
          className="fl-city-dialog tw:m-auto tw:max-h-[min(760px,calc(100vh-48px))] tw:w-[min(980px,calc(100vw-32px))] tw:overflow-hidden tw:rounded-[28px] tw:border-0 tw:bg-white tw:p-0 tw:text-(--ink) tw:[box-shadow:0_40px_90px_-30px_rgba(12,21,38,0.55)] tw:backdrop:bg-[rgba(12,21,38,0.55)] tw:backdrop:backdrop-blur-[2px]"
        >
          <div className="tw:flex tw:max-h-[min(760px,calc(100vh-48px))] tw:flex-col">
            <div className="tw:flex tw:items-start tw:justify-between tw:gap-4 tw:px-8 tw:pt-7 tw:pb-5 tw:max-bssm:px-5 tw:max-bssm:pt-5">
              <div>
                <h3
                  id={headingId}
                  className="tw:m-0 tw:text-[clamp(22px,2.4vw,30px)]/[1.15] tw:font-medium tw:tracking-[-0.02em]"
                >
                  {more.dialogTitle}
                </h3>
                <p className="tw:mt-2 tw:mb-0 tw:text-[15.5px]/[1.55] tw:text-(--text)">
                  {more.dialogLead}
                </p>
              </div>
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
              <ul className="tw:m-0 tw:grid tw:list-none tw:grid-cols-3 tw:gap-3.5 tw:p-0 tw:max-bsmd:grid-cols-2 tw:max-bssm:grid-cols-1">
                {rest.map((c, i) => (
                  <CityCard
                    key={c.name}
                    city={c}
                    n={shown + i + 1}
                    accent={accent}
                    tone="panel"
                    Heading="h4"
                  />
                ))}
                {/* Fills the last slot: cities without their own page. */}
                <li
                  className={`${CARD} tw:border tw:border-dashed tw:border-(--line)`}
                >
                  <span
                    className="tw:grid tw:size-9 tw:place-items-center tw:rounded-full tw:bg-(--panel) tw:text-[16px]"
                    style={{ color: accent }}
                    aria-hidden="true"
                  >
                    <FiMapPin />
                  </span>
                  <h4 className="tw:mt-4 tw:text-[22px]/[1.2]">
                    {more.elsewhere.title}
                  </h4>
                  <p className="tw:mt-2 tw:grow tw:text-[15.5px]/[1.6] tw:text-(--text)">
                    {more.elsewhere.body}
                  </p>
                  <a
                    href={more.elsewhere.href}
                    onClick={close}
                    className="tw:group tw:mt-4 tw:inline-flex tw:items-center tw:gap-2 tw:text-[15px] tw:font-medium tw:text-(--blue)"
                  >
                    {more.elsewhere.link}
                    <FiArrowRight
                      aria-hidden="true"
                      className="tw:flex-none tw:transition-transform tw:group-hover:translate-x-[3px]"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
