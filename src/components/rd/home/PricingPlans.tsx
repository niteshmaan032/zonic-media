"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiBarChart2,
  FiCheck,
  FiChevronDown,
  FiColumns,
  FiHome,
  FiMinus,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { Pill, cx } from "@/components/rd/dfw-kit/primitives";
import { COMPARE, PLANS, usd, type Billing, type Cell } from "./pricing";

/* Billing toggle, plan cards and the comparison table (23 Oct 2026).
   Annual is selected first (the lower price); the toggle is two buttons
   with aria-pressed and the prices sit in a polite live region so screen
   readers hear the change. The table is either a pop-up opened by the
   "Compare plans" button (section on /home2 and the Delaware pages, owner:
   the inline table made those pages too long) or inline (/pricing). The
   pop-up is a native <dialog>: focus moves in, Esc and the backdrop close
   it, and data-lenis-prevent lets it scroll under Lenis. */

const PLAN_ICON = {
  foundation: <FiHome />,
  growth: <FiBarChart2 />,
  authority: <FiAward />,
};
const BEST_ICON = {
  foundation: <FiUser />,
  growth: <FiUsers />,
  authority: <FiAward />,
};

function CellView({ cell, dark }: { cell: Cell; dark?: boolean }) {
  if (cell === true)
    return (
      <span className="tw:inline-grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--green-soft) tw:text-(--green)">
        <FiCheck aria-label="Included" className="tw:[stroke-width:3]" />
      </span>
    );
  if (cell === false)
    return (
      <FiMinus
        aria-label="Not included"
        className={cx(
          "tw:inline",
          dark ? "tw:text-white/40" : "tw:text-[#b6c0d2]",
        )}
      />
    );
  return <span className="tw:text-[14px] tw:font-medium tw:max-bssm:text-[12.5px]">{cell}</span>;
}

/** The plan comparison table; prices follow the billing toggle. */
function CompareTable({
  billing,
  labelledBy,
  className,
  stickyTop = 0,
}: {
  billing: Billing;
  labelledBy: string;
  className?: string;
  /** Where the phone layout's plan header sticks (below the site header on /pricing). */
  stickyTop?: number;
}) {
  return (
    <>
    {/* Phones: the plans sit side by side under each deliverable, so the
        whole comparison is readable without sideways scrolling (owner,
        27 Oct 2026). Same rows and cells as the table. */}
    <div
      className={cx(
        "tw:overflow-clip tw:rounded-[22px] tw:border tw:border-(--line) tw:bg-white tw:bsmd:hidden",
        className,
      )}
      role="group"
      aria-labelledby={labelledBy}
    >
      <div
        className="tw:sticky tw:z-1 tw:grid tw:grid-cols-3 tw:border-b tw:border-(--line) tw:bg-white"
        style={{ top: stickyTop }}
      >
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={cx(
              "tw:px-1.5 tw:py-3 tw:text-center",
              plan.featured ? "tw:bg-(--ink) tw:text-white" : "",
            )}
          >
            <b className={cx("tw:block tw:text-[14.5px]", plan.featured && "tw:text-white")}>
              {plan.name}
            </b>
            <span
              className={cx(
                "tw:text-[12.5px] tw:font-medium",
                plan.featured ? "tw:text-(--gold)" : "tw:text-(--muted)",
              )}
            >
              {usd(plan.price[billing])}/mo
            </span>
          </div>
        ))}
      </div>
      <ul>
        {COMPARE.map((row) => (
          <li key={row.label} className="tw:border-b tw:border-(--line) tw:last:border-b-0">
            <p className="tw:bg-(--panel) tw:px-4 tw:py-2 tw:text-[13px] tw:font-semibold tw:text-(--ink-2)">
              {row.label}
            </p>
            <div className="tw:grid tw:grid-cols-3">
              {row.cells.map((cell, i) => (
                <div
                  key={i}
                  className={cx(
                    "tw:flex tw:items-center tw:justify-center tw:px-1.5 tw:py-2.5 tw:text-center tw:text-[12.5px]/[1.35]",
                    PLANS[i].featured ? "tw:bg-(--ink)/[0.035]" : "",
                  )}
                >
                  <span className="tw:sr-only">{PLANS[i].name}: </span>
                  <CellView cell={cell} />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div
      className={cx(
        "tw:overflow-x-auto tw:rounded-[28px] tw:border tw:border-(--line) tw:bg-white tw:max-bsmd:hidden",
        className,
      )}
    >
      <table
        className="tw:w-full tw:min-w-[720px] tw:border-collapse tw:text-left tw:max-bssm:min-w-[560px]"
        aria-labelledby={labelledBy}
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="tw:sticky tw:left-0 tw:z-1 tw:bg-white tw:px-6 tw:py-5 tw:text-[13px] tw:font-semibold tw:tracking-[0.1em] tw:text-(--muted) tw:uppercase tw:max-bssm:w-[150px] tw:max-bssm:px-4"
            >
              Service / deliverable
            </th>
            {PLANS.map((plan) => (
              <th
                key={plan.id}
                scope="col"
                className={cx(
                  "tw:w-[22%] tw:px-4 tw:py-5 tw:text-center tw:max-bssm:w-[26%] tw:max-bssm:px-2",
                  plan.featured ? "tw:bg-(--ink) tw:text-white" : "",
                )}
              >
                <b
                  className={cx(
                    "tw:block tw:text-[17px]",
                    plan.featured && "tw:text-white",
                  )}
                >
                  {plan.name}
                </b>
                <span
                  className={cx(
                    "tw:text-[13.5px] tw:font-medium",
                    plan.featured ? "tw:text-(--gold)" : "tw:text-(--muted)",
                  )}
                >
                  {usd(plan.price[billing])}/mo
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE.map((row) => (
            <tr key={row.label} className="tw:border-t tw:border-(--line)">
              {/* First column stays put while the table scrolls on phones. */}
              <th
                scope="row"
                className="tw:sticky tw:left-0 tw:z-1 tw:bg-white tw:px-6 tw:py-3.5 tw:text-[15px] tw:font-medium tw:text-(--ink-2) tw:max-bssm:w-[150px] tw:max-bssm:px-4 tw:max-bssm:text-[13.5px] tw:max-bssm:shadow-[6px_0_10px_-8px_rgba(12,21,38,0.25)]"
              >
                {row.label}
              </th>
              {row.cells.map((cell, i) => (
                <td
                  key={i}
                  className={cx(
                    "tw:px-4 tw:py-3.5 tw:text-center tw:max-bssm:px-2",
                    PLANS[i].featured ? "tw:bg-(--ink)/[0.035]" : "",
                  )}
                >
                  <CellView cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export function PricingPlans({
  ctaHref = "#contact",
  compareId = "home-compare-h",
  compareTitle = "Compare Plans Side by Side",
  compareLead = "See exactly what each plan includes.",
  compare = "modal",
}: {
  /** Table as a pop-up behind a "Compare plans" button, or inline. */
  compare?: "modal" | "inline";
  ctaHref?: string;
  compareId?: string;
  compareTitle?: string;
  compareLead?: string;
}) {
  const [billing, setBilling] = useState<Billing>("annual");
  const [open, setOpen] = useState(false);
  // Phones show each plan's first 5 features; "View all" opens the rest
  // (owner, 27 Oct 2026, to keep the cards short on mobile).
  const [more, setMore] = useState<Record<string, boolean>>({});
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Keep the page from scrolling behind the open pop-up.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const before = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = before;
    };
  }, [open]);
  const btn = (value: Billing, label: string) => (
    <button
      type="button"
      aria-pressed={billing === value}
      onClick={() => setBilling(value)}
      className={cx(
        // Explicit border/background/font: redesign pages have no global
        // button reset, so the browser's grey button would show through.
        "tw:inline-flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-full tw:border-0 tw:px-5 tw:font-[inherit] tw:text-[15px] tw:font-medium tw:transition tw:duration-200",
        billing === value
          ? "tw:bg-(--ink) tw:text-white"
          : "tw:bg-transparent tw:text-(--ink-2) tw:hover:bg-(--panel) tw:hover:text-(--ink)",
      )}
    >
      {label}
      {value === "annual" ? (
        <span
          className={cx(
            "tw:rounded-full tw:px-2 tw:py-0.5 tw:text-[11.5px] tw:font-semibold",
            billing === value
              ? "tw:bg-(--gold) tw:text-(--ink)"
              : "tw:bg-(--gold-soft) tw:text-[#8a6400]",
          )}
        >
          Save up to $3,000/yr
        </span>
      ) : null}
    </button>
  );

  const toggle = (
    <div
      role="group"
      aria-label="Billing period"
      className="tw:inline-flex tw:gap-1 tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:p-1"
    >
      {btn("monthly", "Monthly")}
      {btn("annual", "Annual")}
    </div>
  );

  return (
    <>
      <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-3">
        {toggle}
        {compare === "modal" ? (
          // Same track and pill size as the billing toggle (owner, 23 Oct).
          <span className="tw:inline-flex tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:p-1">
            <button
              type="button"
              onClick={() => {
                dialogRef.current?.showModal();
                setOpen(true);
              }}
              aria-haspopup="dialog"
              className="tw:inline-flex tw:min-h-11 tw:cursor-pointer tw:items-center tw:gap-2 tw:rounded-full tw:border-0 tw:bg-transparent tw:px-5 tw:font-[inherit] tw:text-[15px] tw:font-medium tw:text-(--ink) tw:transition tw:duration-200 tw:hover:bg-(--ink) tw:hover:text-white"
            >
              <FiColumns aria-hidden="true" />
              Compare plans
            </button>
          </span>
        ) : null}
      </div>

      {/* ---------------------------------------------------------- cards */}
      <div
        className="tw:mt-10 tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-6 tw:max-bsxl:gap-4 tw:max-bslg:mx-auto tw:max-bslg:max-w-[560px] tw:max-bslg:grid-cols-1 tw:max-bslg:gap-8"
        aria-live="polite"
      >
        {PLANS.map((plan) => {
          const dark = Boolean(plan.featured);
          const price = plan.price[billing];
          const saving = (plan.price.monthly - plan.price.annual) * 12;
          return (
            <article
              key={plan.id}
              className={cx(
                "tw:relative tw:flex tw:flex-col tw:rounded-(--r-xl) tw:p-8 tw:max-bsxl:p-7 tw:max-bssm:p-6",
                dark
                  ? "tw:bg-(--ink) tw:text-white"
                  : "tw:border tw:border-(--line) tw:bg-white",
              )}
            >
              {dark ? (
                <span className="tw:absolute tw:-top-3.5 tw:left-1/2 tw:-translate-x-1/2 tw:rounded-full tw:bg-(--gold) tw:px-4 tw:py-1 tw:text-[12.5px] tw:font-semibold tw:whitespace-nowrap tw:text-(--ink)">
                  Recommended
                </span>
              ) : null}
              <span
                className={cx(
                  "tw:grid tw:size-14 tw:place-items-center tw:rounded-full tw:text-[22px]",
                  dark
                    ? "tw:bg-white/10 tw:text-(--gold)"
                    : "tw:bg-(--blue-soft) tw:text-(--blue)",
                )}
                aria-hidden="true"
              >
                {PLAN_ICON[plan.id]}
              </span>
              <h3
                className={cx(
                  "tw:mt-5 tw:text-[28px]",
                  dark && "tw:text-white",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cx(
                  "tw:mt-1.5 tw:text-[15.5px]/[1.5]",
                  dark ? "tw:text-white/70" : "tw:text-(--text)",
                )}
              >
                {plan.audience}
              </p>

              <p className="tw:mt-6 tw:flex tw:items-baseline tw:gap-1.5">
                <b className="tw:text-[52px] tw:leading-none tw:tracking-[-0.04em] tw:max-bssm:text-[46px]">
                  {usd(price)}
                </b>
                <span
                  className={cx(
                    "tw:text-[15px]",
                    dark ? "tw:text-white/70" : "tw:text-(--muted)",
                  )}
                >
                  / month
                </span>
              </p>
              <p
                className={cx(
                  "tw:mt-2 tw:min-h-[22px] tw:text-[13.5px]",
                  dark ? "tw:text-white/65" : "tw:text-(--muted)",
                )}
              >
                {plan.price.annual === plan.price.monthly
                  ? "Same price monthly or annually"
                  : billing === "annual"
                    ? `Billed annually (${usd(price * 12)}/yr) · save ${usd(saving)}`
                    : `Billed monthly · ${usd(plan.price.annual)}/mo if paid annually`}
              </p>
              <span
                className={cx(
                  "tw:mt-4 tw:w-fit tw:rounded-full tw:px-3.5 tw:py-1 tw:text-[13px] tw:font-semibold",
                  dark
                    ? "tw:bg-(--gold) tw:text-(--ink)"
                    : "tw:bg-(--blue-soft) tw:text-(--blue-dark)",
                )}
              >
                {plan.tag}
              </span>
              {plan.intro ? (
                <p
                  className={cx(
                    "tw:mt-4 tw:text-[14.5px]/[1.5]",
                    dark ? "tw:text-white/75" : "tw:text-(--text)",
                  )}
                >
                  {plan.intro}
                </p>
              ) : null}

              <div
                className={cx(
                  "tw:mt-6 tw:grow tw:border-t tw:pt-6",
                  dark ? "tw:border-white/15" : "tw:border-(--line)",
                )}
              >
                {plan.includesFrom ? (
                  <p
                    className={cx(
                      "tw:mb-3 tw:text-[14.5px] tw:font-semibold",
                      dark ? "tw:text-white" : "tw:text-(--ink)",
                    )}
                  >
                    {plan.includesFrom}
                  </p>
                ) : null}
                <ul className="tw:grid tw:gap-2.5" id={`plan-${plan.id}-features`}>
                  {plan.features.map((f, i) => (
                    <li
                      key={f}
                      className={cx(
                        "tw:flex tw:items-start tw:gap-2.5 tw:text-[15px]/[1.45]",
                        dark ? "tw:text-white/90" : "tw:text-(--ink-2)",
                        i >= 5 && !more[plan.id] && "tw:max-bsmd:hidden",
                      )}
                    >
                      <FiCheck
                        aria-hidden="true"
                        className={cx(
                          "tw:mt-0.5 tw:size-[18px] tw:flex-none tw:rounded-full tw:p-[3px] tw:[stroke-width:3.5]",
                          dark
                            ? "tw:bg-(--gold)/20 tw:text-(--gold)"
                            : "tw:bg-(--green-soft) tw:text-(--green)",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.features.length > 5 ? (
                  <button
                    type="button"
                    aria-expanded={Boolean(more[plan.id])}
                    aria-controls={`plan-${plan.id}-features`}
                    onClick={() =>
                      setMore((m) => ({ ...m, [plan.id]: !m[plan.id] }))
                    }
                    className={cx(
                      "tw:mt-4 tw:inline-flex tw:cursor-pointer tw:items-center tw:gap-1.5 tw:border-0 tw:bg-transparent tw:p-0 tw:text-[14.5px] tw:font-semibold tw:underline tw:underline-offset-4 tw:bsmd:hidden",
                      dark ? "tw:text-(--gold)" : "tw:text-(--blue)",
                    )}
                  >
                    {more[plan.id]
                      ? "Show fewer features"
                      : `View all ${plan.features.length} features`}
                    <FiChevronDown
                      aria-hidden="true"
                      className={cx(
                        "tw:transition-transform",
                        more[plan.id] && "tw:rotate-180",
                      )}
                    />
                  </button>
                ) : null}
              </div>

              <div
                className={cx(
                  "tw:mt-7 tw:flex tw:items-center tw:gap-3 tw:rounded-[18px] tw:p-3.5",
                  dark ? "tw:bg-white/8" : "tw:bg-(--panel)",
                )}
              >
                <span
                  className={cx(
                    "tw:grid tw:size-10 tw:flex-none tw:place-items-center tw:rounded-full",
                    dark
                      ? "tw:bg-white/10 tw:text-(--gold)"
                      : "tw:bg-white tw:text-(--blue)",
                  )}
                  aria-hidden="true"
                >
                  {BEST_ICON[plan.id]}
                </span>
                <span
                  className={cx(
                    "tw:text-[13.5px]/[1.4]",
                    dark ? "tw:text-white/80" : "tw:text-(--text)",
                  )}
                >
                  <b
                    className={cx(
                      "tw:block",
                      dark ? "tw:text-white" : "tw:text-(--ink)",
                    )}
                  >
                    Best for
                  </b>
                  {plan.bestFor}
                </span>
              </div>

              <Pill
                href={ctaHref}
                tone={dark ? "white" : "outline"}
                size="md"
                arrow
                className="tw:mt-5 tw:w-full tw:justify-between"
              >
                {plan.cta}
              </Pill>
            </article>
          );
        })}
      </div>

      {compare === "inline" ? (
        <div className="tw:mt-20 tw:max-bssm:mt-14">
          <h2
            id={compareId}
            className="tw:text-center tw:text-[clamp(28px,3vw,42px)] tw:leading-[1.1] tw:tracking-[-0.03em]"
          >
            {compareTitle}
          </h2>
          <p className="tw:mt-3 tw:text-center tw:text-[16.5px] tw:text-(--text)">
            {compareLead}
          </p>
          <CompareTable
            billing={billing}
            labelledBy={compareId}
            className="tw:mt-8"
            stickyTop={84}
          />
        </div>
      ) : (
        <dialog
          ref={dialogRef}
          aria-labelledby={compareId}
          data-lenis-prevent
          onClose={() => setOpen(false)}
          onClick={(e) => {
            // A click on the dialog box itself (not its content) is the backdrop.
            if (e.target === e.currentTarget) dialogRef.current?.close();
          }}
          // Phones and tablets: full screen (owner, 27 Oct 2026). The title
          // bar stays put and only the comparison scrolls under it.
          className="tw:m-auto tw:max-h-[90vh] tw:w-[min(1120px,calc(100vw-32px))] tw:max-w-none tw:overflow-y-auto tw:rounded-[32px] tw:border-0 tw:bg-(--bg) tw:p-0 tw:text-(--ink) tw:backdrop:bg-[rgba(12,21,38,0.62)] tw:max-bsmd:m-0 tw:max-bsmd:h-dvh tw:max-bsmd:max-h-none tw:max-bsmd:w-screen tw:max-bsmd:overflow-hidden tw:max-bsmd:rounded-none"
        >
          <div className="tw:px-8 tw:pt-7 tw:pb-8 tw:max-bsmd:flex tw:max-bsmd:h-full tw:max-bsmd:min-h-0 tw:max-bsmd:flex-col tw:max-bsmd:p-0">
            <div className="tw:flex tw:items-start tw:justify-between tw:gap-4 tw:max-bsmd:flex-none tw:max-bsmd:items-center tw:max-bsmd:border-b tw:max-bsmd:border-(--line) tw:max-bsmd:bg-white tw:max-bsmd:px-4 tw:max-bsmd:pt-[calc(env(safe-area-inset-top,0px)+12px)] tw:max-bsmd:pb-3">
              <div>
                <h2
                  id={compareId}
                  className="tw:text-[clamp(24px,2.6vw,36px)] tw:leading-[1.1] tw:tracking-[-0.03em] tw:max-bsmd:text-[21px]"
                >
                  {compareTitle}
                </h2>
                <p className="tw:mt-2 tw:text-[15.5px] tw:text-(--text) tw:max-bsmd:mt-1 tw:max-bsmd:text-[13.5px]">
                  {compareLead}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close plan comparison"
                className="tw:grid tw:size-11 tw:flex-none tw:cursor-pointer tw:place-items-center tw:rounded-full tw:border tw:border-(--line) tw:bg-white tw:text-[18px] tw:text-(--ink) tw:transition tw:hover:bg-(--ink) tw:hover:text-white"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
            <div className="tw:max-bsmd:min-h-0 tw:max-bsmd:flex-1 tw:max-bsmd:overflow-y-auto tw:max-bsmd:overscroll-contain tw:max-bsmd:px-4 tw:max-bsmd:pt-4 tw:max-bsmd:pb-[calc(env(safe-area-inset-bottom,0px)+20px)]">
              <div className="tw:mt-5 tw:flex tw:flex-wrap tw:items-center tw:gap-3 tw:max-bsmd:mt-0">
                {toggle}
                <span className="tw:text-[13px] tw:text-(--muted) tw:max-bsmd:w-full">
                  Prices shown per month.
                </span>
              </div>
              <CompareTable
                billing={billing}
                labelledBy={compareId}
                className="tw:mt-5"
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
