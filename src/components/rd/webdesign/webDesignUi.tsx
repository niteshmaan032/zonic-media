import type { CSSProperties, ReactNode } from "react";
import {
  FiActivity,
  FiCheck,
  FiCheckCircle,
  FiCode,
  FiFileText,
  FiGrid,
  FiGitPullRequest,
  FiLayout,
  FiMail,
  FiMessageCircle,
  FiMousePointer,
  FiPackage,
  FiPhone,
  FiStar,
  FiTarget,
  FiX,
} from "react-icons/fi";
import { cx } from "@/components/rd/dfw-kit/primitives";
import { Chip, UI_CARD, UiHead } from "@/components/rd/dfw-kit/ui";
import { PhoneFrame } from "@/components/rd/dfw-kit/visuals";
import { CARD, Flip, Slot, inAt, run } from "@/components/rd/delaware/uiBits";

/* UI for the web design service page redesign (23 Oct 2026); none of it
   appears on another page. Feature panels (page-weight budget, on-page SEO
   outline, click heatmap), the four process steps, the design-feedback
   phone and the old-vs-new comparison on the dark card. Illustrations
   only: "Your Business", no client figures. */

/* ------------------------------------------------------ feature panels */

const WEIGHT: [string, number, string][] = [
  ["Images", 38, "var(--blue)"],
  ["Scripts", 22, "var(--gold)"],
  ["Fonts", 10, "var(--green)"],
  ["HTML & CSS", 8, "#9b8cf2"],
];

/** The page-weight budget: what each part of the page costs, under a
    fixed limit set before the build. */
export function PageWeightUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiPackage />}
        tone="green"
        title="Page weight budget"
        right={
          <Flip
            n={3}
            from={<Chip tone="red">Over budget</Chip>}
            to={<Chip tone="green">Under budget</Chip>}
          />
        }
      />
      <div className="tw:relative tw:mt-5">
        <span className="tw:flex tw:h-6 tw:overflow-hidden tw:rounded-[8px] tw:bg-(--panel)">
          {WEIGHT.map(([label, w, color]) => (
            <i
              key={label}
              className="tw:block tw:h-full"
              style={
                {
                  "--w": `${w}%`,
                  width: `${w}%`,
                  background: color,
                  ...run("de-fill"),
                } as CSSProperties
              }
            />
          ))}
        </span>
        <span
          className="tw:absolute tw:-top-2 tw:-bottom-2 tw:left-[85%] tw:w-0.5 tw:rounded-full tw:bg-(--ink)"
          aria-hidden="true"
        />
        <span className="tw:absolute tw:top-[calc(100%+10px)] tw:left-[85%] tw:-translate-x-1/2 tw:text-[10.5px] tw:font-semibold">
          Limit
        </span>
      </div>
      <ul className="tw:mt-9 tw:grid tw:grid-cols-2 tw:gap-x-4 tw:gap-y-1.5 tw:text-[12px]">
        {WEIGHT.map(([label, , color], i) => (
          <li
            key={label}
            className="tw:flex tw:items-center tw:gap-2"
            style={inAt(i + 1)}
          >
            <i
              className="tw:block tw:size-2.5 tw:rounded-[3px]"
              style={{ background: color }}
            />
            {label}
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {[
          "Images resized and compressed",
          "Scripts loaded only where needed",
        ].map((t, i) => (
          <li
            key={t}
            className="tw:flex tw:items-center tw:gap-2 tw:rounded-[10px] tw:bg-(--panel) tw:px-3 tw:py-2 tw:text-[12px] tw:font-medium"
            style={inAt(i + 5)}
          >
            <FiCheck className="tw:size-3.5 tw:text-(--green)" /> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Niche-neutral placeholders (owner: no single-industry examples on
   service pages for every niche). */
const OUTLINE: [string, string, number][] = [
  ["H1", "[Service] in [Your City]", 0],
  ["H2", "Same-day [service]", 1],
  ["H2", "[Service] estimates", 1],
  ["H3", "Financing options", 2],
  ["H2", "Areas we serve", 1],
];

/** A service page's heading outline with its keyword marked, plus the
    structured data it ships with. */
export function SeoOutlineUi() {
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiFileText />}
        title="Page outline · /your-service"
        right={<Chip tone="blue">SEO-ready</Chip>}
      />
      <ul className="tw:mt-4 tw:grid tw:gap-1.5">
        {OUTLINE.map(([tag, text, depth], i) => (
          <li
            key={text}
            className="tw:flex tw:items-center tw:gap-2.5 tw:rounded-[10px] tw:border tw:border-(--line) tw:px-3 tw:py-2 tw:text-[12.5px]"
            style={{ marginLeft: depth * 16, ...inAt(i + 1) }}
          >
            <span className="tw:rounded-[5px] tw:bg-(--ink) tw:px-1.5 tw:py-0.5 tw:font-mono tw:text-[10px] tw:font-bold tw:text-white">
              {tag}
            </span>
            <span className={cx("tw:truncate", i === 0 && "tw:font-semibold")}>
              {i === 0 ? (
                <>
                  <span className="tw:rounded-[4px] tw:bg-(--gold-soft) tw:px-0.5">
                    [Service]
                  </span>{" "}
                  in [Your City]
                </>
              ) : (
                text
              )}
            </span>
          </li>
        ))}
      </ul>
      <p
        className="tw:mt-3 tw:flex tw:flex-wrap tw:gap-1.5"
        style={run("de-late")}
      >
        <Chip tone="green">LocalBusiness schema</Chip>
        <Chip tone="green">FAQ schema</Chip>
        <Chip tone="green">Fast on mobile</Chip>
      </p>
    </div>
  );
}

/** A homepage with click heat over the places visitors act. */
export function ClickHeatmapUi() {
  const blob = (
    x: string,
    y: string,
    size: number,
    alpha: number,
    i: number,
  ) => (
    <i
      key={i}
      className="tw:pointer-events-none tw:absolute tw:block tw:-translate-1/2 tw:rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(234,67,52,${alpha}) 0%, rgba(253,193,21,${alpha * 0.7}) 45%, transparent 72%)`,
        ...run("de-area"),
      }}
    />
  );
  return (
    <div className={CARD}>
      <UiHead
        icon={<FiMousePointer />}
        tone="gold"
        title="Where visitors click"
        right={<Chip tone="muted">Heatmap</Chip>}
      />
      <div className="tw:relative tw:mt-4 tw:overflow-hidden tw:rounded-[14px] tw:border tw:border-(--line) tw:p-4">
        <span className="tw:flex tw:items-center tw:justify-between">
          <i className="tw:block tw:h-3 tw:w-14 tw:rounded-[3px] tw:bg-(--ink)" />
          <span className="tw:rounded-full tw:bg-(--blue) tw:px-3 tw:py-1 tw:text-[10.5px] tw:font-semibold tw:text-white">
            Call now
          </span>
        </span>
        <b className="tw:mt-4 tw:block tw:text-[15px]/[1.25]">
          Trusted local service, booked today
        </b>
        <i className="tw:mt-2 tw:block tw:h-1.5 tw:w-3/4 tw:rounded-full tw:bg-[#e2e8f0]" />
        <span className="tw:mt-4 tw:inline-block tw:rounded-full tw:bg-(--ink) tw:px-4 tw:py-1.5 tw:text-[11px] tw:font-semibold tw:text-white">
          Get a free quote
        </span>
        <span className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-1.5">
          {[0, 1, 2].map((n) => (
            <i
              key={n}
              className="tw:block tw:h-10 tw:rounded-[8px] tw:bg-(--panel)"
            />
          ))}
        </span>
        {blob("86%", "13%", 90, 0.55, 1)}
        {blob("24%", "64%", 110, 0.6, 2)}
        {blob("50%", "88%", 70, 0.3, 3)}
      </div>
      <p className="tw:mt-3 tw:flex tw:items-center tw:justify-between tw:text-[12px] tw:font-medium">
        Calls and quotes get the clicks
        <Chip tone="green">Layout working</Chip>
      </p>
    </div>
  );
}

/* ------------------------------------------------------- process steps */

const MATRIX: [string, boolean, boolean, boolean][] = [
  ["Loads fast on phones", false, true, true],
  ["Online booking", false, false, true],
  ["Reviews on the page", true, false, true],
  ["A page per service", false, true, true],
];

const TEMPLATES = ["Home", "Service", "Location", "Contact"];

const CHECKS = [
  "Lighthouse performance",
  "Accessibility",
  "Structured data",
  "Broken links",
];

type Step = { tag: string; title: string };

const Mark = ({ ok }: { ok: boolean }) =>
  ok ? (
    <FiCheck className="tw:mx-auto tw:size-3.5 tw:text-(--green)" />
  ) : (
    <FiX className="tw:mx-auto tw:size-3.5 tw:text-(--red)" />
  );

/** Web design page process UIs. */
export function webDesignStepUis(steps: Step[]): ReactNode[] {
  const [s1, s2, s3] = steps;
  return [
    <Slot key="wd-matrix">
      <UiHead
        icon={<FiTarget />}
        title="Your site vs. competitors"
        right={<Chip tone="blue">{s1?.tag}</Chip>}
      />
      <div className="tw:rounded-[12px] tw:border tw:border-(--line) tw:text-[11px]">
        <div className="tw:grid tw:grid-cols-[minmax(0,1fr)_46px_46px_46px] tw:border-b tw:border-(--line) tw:px-2.5 tw:py-1.5 tw:text-center tw:font-semibold tw:text-(--muted)">
          <span className="tw:text-left">Checks</span>
          <span>You</span>
          <span>A</span>
          <span>B</span>
        </div>
        {MATRIX.map(([t, you, a, b], i) => (
          <div
            key={t}
            className="tw:grid tw:grid-cols-[minmax(0,1fr)_46px_46px_46px] tw:items-center tw:px-2.5 tw:py-1.5 tw:font-medium"
            style={inAt(i + 1)}
          >
            <span className="tw:truncate">{t}</span>
            <Mark ok={you} />
            <Mark ok={a} />
            <Mark ok={b} />
          </div>
        ))}
      </div>
    </Slot>,

    <Slot key="wd-templates">
      <UiHead
        icon={<FiLayout />}
        tone="gold"
        title="Page templates"
        right={<Chip tone="blue">{s2?.tag}</Chip>}
      />
      <ul className="tw:grid tw:grid-cols-4 tw:gap-1.5">
        {TEMPLATES.map((t, i) => (
          <li
            key={t}
            className="tw:rounded-[10px] tw:bg-(--panel) tw:p-1.5"
            style={inAt(i + 1)}
          >
            <span className="tw:grid tw:gap-1 tw:rounded-[6px] tw:bg-white tw:p-1.5">
              <i className="tw:block tw:h-1 tw:w-2/3 tw:rounded-full tw:bg-[#cbd5e1]" />
              <i className="tw:block tw:h-5 tw:rounded-[3px] tw:bg-[#e2e8f0]" />
              <i className="tw:block tw:h-1 tw:rounded-full tw:bg-[#e2e8f0]" />
              <i className="tw:block tw:h-2 tw:w-1/2 tw:rounded-full tw:bg-(--blue)" />
            </span>
            <span className="tw:mt-1 tw:block tw:text-center tw:text-[10px] tw:font-semibold">
              {t}
            </span>
          </li>
        ))}
      </ul>
      <p className="tw:flex tw:items-center tw:justify-between tw:text-[11px] tw:font-medium">
        Layouts signed off
        <Flip
          n={3}
          from={<Chip tone="amber">In review</Chip>}
          to={<Chip tone="green">Approved</Chip>}
        />
      </p>
    </Slot>,

    <Slot key="wd-checks">
      <UiHead
        icon={<FiGitPullRequest />}
        tone="green"
        title="Build checks"
        right={<Chip tone="blue">{s3?.tag}</Chip>}
      />
      <div className="tw:rounded-[12px] tw:border tw:border-(--line)">
        <span className="tw:flex tw:items-center tw:gap-2 tw:border-b tw:border-(--line) tw:px-3 tw:py-2 tw:text-[11.5px] tw:font-semibold">
          <FiCode className="tw:size-3.5 tw:text-(--muted)" /> New homepage and
          service pages
        </span>
        {CHECKS.map((c, i) => (
          <span
            key={c}
            className="tw:flex tw:items-center tw:justify-between tw:px-3 tw:py-1.5 tw:text-[11.5px]"
            style={inAt(i + 1)}
          >
            {c}
            <span className="tw:flex tw:items-center tw:gap-1 tw:font-semibold tw:text-[#1f7a3a]">
              <FiCheckCircle className="tw:size-3.5" /> Passed
            </span>
          </span>
        ))}
      </div>
    </Slot>,

    <Slot key="wd-uptime">
      <UiHead
        icon={<FiActivity />}
        title="yourbusiness.com"
        right={<Chip tone="green">Operational</Chip>}
      />
      <div
        className="tw:flex tw:h-8 tw:items-stretch tw:gap-[3px]"
        aria-hidden="true"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <i
            key={i}
            className="tw:block tw:flex-1 tw:rounded-[3px]"
            style={{
              background: "var(--green)",
              ...(i > 24 ? run(`de-dot-${i - 24}`) : {}),
            }}
          />
        ))}
      </div>
      <p className="tw:flex tw:justify-between tw:text-[10.5px] tw:text-(--muted)">
        <span>30 days ago</span>
        <span>Today</span>
      </p>
      <ul className="tw:grid tw:grid-cols-2 tw:gap-1.5 tw:text-[11px] tw:font-medium">
        {["SSL active", "Backups daily", "Forms tested", "Speed monitored"].map(
          (t, i) => (
            <li
              key={t}
              className="tw:flex tw:items-center tw:gap-1.5"
              style={inAt(i + 1)}
            >
              <FiCheck className="tw:size-3.5 tw:text-(--green)" /> {t}
            </li>
          ),
        )}
      </ul>
    </Slot>,
  ];
}

/* ---------------------------------------------------------- journey */

/** A design review on a phone: client comments on the mockup, the
    designer replies, the version is approved. Decorative (frame
    aria-hidden). */
export function DesignFeedbackPhone() {
  const bubble =
    "tw:max-w-[86%] tw:rounded-[16px] tw:px-3 tw:py-2 tw:text-[11.5px]/[1.4]";
  return (
    <PhoneFrame>
      <div className="tw:absolute tw:inset-0 tw:bg-white tw:px-3 tw:pt-[40px] tw:text-(--ink)">
        <span className="tw:flex tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:pb-2.5 tw:text-[11px] tw:font-semibold">
          Homepage · design v2
          <Chip tone="blue">Review</Chip>
        </span>
        <div
          className="tw:relative tw:mt-3 tw:overflow-hidden tw:rounded-[14px] tw:bg-(--ink) tw:p-3 tw:text-white"
          style={inAt(1)}
        >
          <i className="tw:block tw:h-2 tw:w-10 tw:rounded-[2px] tw:bg-white/70" />
          <b className="tw:mt-2.5 tw:block tw:text-[13px]/[1.25] tw:font-medium">
            Same-day repairs from a local team
          </b>
          <span
            className="tw:mt-2.5 tw:inline-block tw:rounded-full tw:px-3 tw:py-1 tw:text-[10.5px] tw:font-semibold tw:text-(--ink)"
            style={{ background: "var(--gold)" }}
          >
            Book a visit
          </span>
          <span className="tw:absolute tw:right-3 tw:bottom-3 tw:grid tw:size-6 tw:place-items-center tw:rounded-full tw:bg-(--red) tw:text-[10px] tw:font-bold">
            1
          </span>
        </div>
        <div className="tw:mt-3 tw:grid tw:gap-1.5">
          <span
            className={cx(
              bubble,
              "tw:justify-self-start tw:rounded-bl-[5px] tw:bg-[#eef1f6]",
            )}
            style={inAt(2)}
          >
            Can the button be gold so it stands out?
          </span>
          <span
            className={cx(
              bubble,
              "tw:justify-self-end tw:rounded-br-[5px] tw:bg-(--blue) tw:text-white",
            )}
            style={inAt(3)}
          >
            Done, updated in v2. Have a look!
          </span>
          <span
            className={cx(
              bubble,
              "tw:justify-self-start tw:rounded-bl-[5px] tw:bg-[#eef1f6]",
            )}
            style={inAt(4)}
          >
            Perfect, approved 👍
          </span>
        </div>
        <span
          className="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-[12px] tw:bg-(--green-soft) tw:px-3 tw:py-2 tw:text-[11px] tw:font-semibold tw:text-[#1f7a3a]"
          style={run("de-late")}
        >
          <FiMessageCircle className="tw:size-3.5" /> Design approved · build
          starts
        </span>
      </div>
    </PhoneFrame>
  );
}

/* --------------------------------------------------------- dark card */

const COMPARE: [string, string, string][] = [
  ["Mobile speed", "Slow", "Fast"],
  ["Booking", "Phone only", "Online, 24/7"],
  ["Lead tracking", "None", "Calls and forms"],
  ["Search structure", "One page", "Page per service"],
];

/** Old site vs. new site, row by row, plus three facts. Decorative. */
export function RebuildCompareUi({
  facts,
}: {
  facts: { strong: string; label: string }[];
}) {
  return (
    <div
      className={cx(
        UI_CARD,
        "tw:w-full tw:max-w-[480px] tw:p-5 tw:text-left tw:text-(--ink) tw:max-bssm:p-4",
      )}
      aria-hidden="true"
    >
      <div className="tw:grid tw:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] tw:gap-2 tw:text-[11.5px] tw:font-semibold tw:text-(--muted)">
        <span />
        <span className="tw:rounded-full tw:bg-(--panel) tw:py-1 tw:text-center">
          Old site
        </span>
        <span className="tw:rounded-full tw:bg-(--ink) tw:py-1 tw:text-center tw:text-white">
          New site
        </span>
      </div>
      <ul className="tw:mt-2 tw:grid tw:gap-1.5">
        {COMPARE.map(([k, before, after], i) => (
          <li
            key={k}
            className="tw:grid tw:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)] tw:items-center tw:gap-2 tw:rounded-[12px] tw:border tw:border-(--line) tw:px-3 tw:py-2.5 tw:text-[12px]"
            style={inAt(i + 1)}
          >
            <b className="tw:font-semibold">{k}</b>
            <span className="tw:text-center tw:text-(--muted) tw:line-through">
              {before}
            </span>
            <span className="tw:text-center tw:font-semibold tw:text-[#1f7a3a]">
              {after}
            </span>
          </li>
        ))}
      </ul>
      <ul className="tw:mt-4 tw:grid tw:grid-cols-3 tw:gap-2">
        {facts.map((m) => (
          <li
            key={m.label}
            className="tw:rounded-[12px] tw:bg-[#f3e8ff] tw:px-3 tw:py-2.5"
          >
            <b className="tw:block tw:text-[17px] tw:leading-none tw:tracking-[-0.02em] tw:text-[#6b21a8]">
              {m.strong}
            </b>
            <span className="tw:mt-1 tw:block tw:text-[10.5px]/[1.25] tw:text-(--muted)">
              {m.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------- hero */

/** Browser window with a mini page layout and a cursor, sized in em to sit
    inside the hero H1 (same family as the kit's InlinePin / InlineChat). */
export function InlineBrowser({ id = "wd-browser" }: { id?: string }) {
  return (
    <span
      className="tw:mx-[0.06em] tw:inline-block tw:h-[0.88em] tw:w-[1.06em] tw:rotate-[5deg] tw:animate-[dk-bob_4s_ease-in-out_infinite] tw:align-[-0.1em]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 96 80"
        className="tw:block tw:size-full tw:overflow-visible"
      >
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b7cf6" />
            <stop offset="1" stopColor="#3157f5" />
          </linearGradient>
        </defs>
        <rect
          x="4"
          y="4"
          width="84"
          height="64"
          rx="11"
          fill={`url(#${id}-body)`}
        />
        <circle cx="15" cy="12.5" r="3" fill="#fff" opacity="0.9" />
        <circle cx="24" cy="12.5" r="3" fill="#fff" opacity="0.9" />
        <circle cx="33" cy="12.5" r="3" fill="#fdc115" />
        <rect x="10" y="20" width="72" height="42" rx="5" fill="#fff" />
        <rect x="15" y="25" width="30" height="5" rx="2.5" fill="#0c1526" />
        <rect x="15" y="33" width="22" height="4" rx="2" fill="#c7d2fe" />
        <rect x="15" y="41" width="16" height="7" rx="3.5" fill="#fdc115" />
        <rect x="51" y="25" width="26" height="23" rx="4" fill="#dbe6ff" />
        <path
          d="M51 48 L60 36 L67 43 L71 39 L77 48 Z"
          fill="#3157f5"
          opacity="0.55"
        />
        <rect x="15" y="53" width="18" height="4" rx="2" fill="#e3e8ef" />
        <rect x="37" y="53" width="18" height="4" rx="2" fill="#e3e8ef" />
        <rect x="59" y="53" width="18" height="4" rx="2" fill="#e3e8ef" />
        <path
          d="M72 50 L90 63 L81.8 64.4 L77 71.5 Z"
          fill="#0c1526"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* Web design hero (owner, 24 Oct): one homepage going wireframe -> design
   -> live on a 10s loop (de-wd-* keyframes in delaware.css), on a laptop
   and a phone. Niche-neutral. The wireframe is the same layout drawn with
   text-transparent grey fills, so the crossfade reads as the page filling
   in. Resting state is the live page. Sizes in cqw so it scales. */
const WD_LOOP = 10;
const wd = (name: string): CSSProperties => run(`de-wd-${name}`, WD_LOOP);

/** Text that turns into grey line bars in the wireframe. */
const wireText = (wire?: boolean) =>
  wire
    ? "tw:rounded-[0.4cqw] tw:bg-[#e3e8ef] tw:text-transparent tw:[box-decoration-break:clone]"
    : "";

function ImageSlot({
  wire,
  className,
}: {
  wire?: boolean;
  className?: string;
}) {
  if (wire)
    return (
      <span
        className={cx(
          "tw:relative tw:block tw:border tw:border-dashed tw:border-[#c3ccd9] tw:bg-[#f4f6f9]",
          className,
        )}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="tw:absolute tw:inset-0 tw:size-full tw:stroke-[#d5dce7]"
        >
          <path
            d="M0 0L100 100M100 0L0 100"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
    );
  return (
    <span
      className={cx(
        "tw:relative tw:block tw:overflow-hidden tw:bg-[linear-gradient(150deg,#dbe6ff,#eef2ff_55%,#fff4d6)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 120 80"
        className="tw:absolute tw:inset-0 tw:size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="86" cy="24" r="9" fill="#fdc115" />
        <path d="M0 80 L34 42 L56 62 L74 46 L120 80 Z" fill="#9db7f5" />
        <path d="M0 80 L26 58 L48 80 Z" fill="#2567e8" opacity="0.55" />
      </svg>
    </span>
  );
}

const SITE_CARDS: [string, ReactNode, string][] = [
  ["Our services", <FiGrid key="g" />, "#2567e8"],
  ["Reviews", <FiStar key="s" />, "#f59e0b"],
  ["Contact", <FiPhone key="p" />, "#34a852"],
];

/** The homepage on the laptop, as a wireframe or the finished design. */
function DesktopPage({ wire }: { wire?: boolean }) {
  const at = (k: number) => (wire ? undefined : wd(`in-${k}`));
  const t = wireText(wire);
  return (
    <>
      <div
        className="tw:flex tw:items-center tw:justify-between tw:px-[3.6cqw] tw:py-[2cqw]"
        style={at(1)}
      >
        <span className="tw:flex tw:items-center tw:gap-[1cqw]">
          <i
            className={cx(
              "tw:block tw:size-[2.6cqw] tw:rounded-[0.8cqw]",
              wire ? "tw:bg-[#d5dce7]" : "tw:bg-(--blue)",
            )}
          />
          <b className="tw:text-[1.7cqw] tw:font-semibold">
            <span className={t}>Your Business</span>
          </b>
        </span>
        <span className="tw:flex tw:items-center tw:gap-[2.2cqw] tw:text-[1.35cqw] tw:text-(--text)">
          {["Home", "Services", "About"].map((l) => (
            <span key={l} className={t}>
              {l}
            </span>
          ))}
          <span
            className={cx(
              "tw:rounded-full tw:px-[1.8cqw] tw:py-[0.8cqw] tw:font-semibold",
              wire
                ? "tw:border tw:border-dashed tw:border-[#b8c2d3] tw:text-transparent"
                : "tw:bg-(--ink) tw:text-white",
            )}
          >
            Book now
          </span>
        </span>
      </div>
      <div className="tw:grid tw:grid-cols-[1.1fr_0.9fr] tw:items-center tw:gap-[3cqw] tw:px-[3.6cqw]">
        <div>
          <span
            className="tw:text-[1.25cqw] tw:font-semibold tw:tracking-[0.12em] tw:text-(--blue) tw:uppercase"
            style={at(2)}
          >
            <span className={t}>Welcome</span>
          </span>
          <span className="tw:relative tw:mt-[1.2cqw] tw:block" style={at(2)}>
            <b className="tw:block tw:text-[4.1cqw] tw:leading-[1.08] tw:font-medium tw:tracking-[-0.03em]">
              <span className={t}>
                Grow your business with a better website
              </span>
            </b>
            {!wire && <Selection />}
          </span>
          <span
            className="tw:mt-[2.2cqw] tw:block tw:text-[1.45cqw] tw:leading-[1.5] tw:text-(--text)"
            style={at(3)}
          >
            <span className={t}>
              Clear pages, fast loading and an easy way for customers to reach
              you.
            </span>
          </span>
          <span
            className="tw:mt-[2.2cqw] tw:flex tw:gap-[1.2cqw] tw:text-[1.45cqw] tw:font-semibold"
            style={at(3)}
          >
            <span
              className={cx(
                "tw:rounded-full tw:px-[2.2cqw] tw:py-[1cqw]",
                wire
                  ? "tw:border tw:border-dashed tw:border-[#b8c2d3] tw:text-transparent"
                  : "tw:bg-(--gold)",
              )}
            >
              Get started
            </span>
            <span
              className={cx(
                "tw:rounded-full tw:border tw:px-[2.2cqw] tw:py-[1cqw]",
                wire
                  ? "tw:border-dashed tw:border-[#b8c2d3] tw:text-transparent"
                  : "tw:border-(--ink)",
              )}
            >
              Contact us
            </span>
          </span>
        </div>
        <span style={at(2)}>
          <ImageSlot wire={wire} className="tw:h-[24cqw] tw:rounded-[2cqw]" />
        </span>
      </div>
      <div
        className="tw:mt-[3.4cqw] tw:grid tw:grid-cols-3 tw:gap-[1.6cqw] tw:px-[3.6cqw]"
        style={at(4)}
      >
        {SITE_CARDS.map(([label, icon, c]) => (
          <span
            key={label}
            className={cx(
              "tw:flex tw:items-center tw:gap-[1.2cqw] tw:rounded-[1.4cqw] tw:px-[1.5cqw] tw:py-[2cqw]",
              wire
                ? "tw:border tw:border-dashed tw:border-[#c3ccd9]"
                : "tw:bg-(--panel)",
            )}
          >
            <span
              className="tw:grid tw:size-[3.2cqw] tw:flex-none tw:place-items-center tw:rounded-[0.9cqw] tw:text-[1.7cqw] tw:text-white"
              style={{ background: wire ? "#d5dce7" : c }}
            >
              {!wire && icon}
            </span>
            <b className="tw:text-[1.45cqw] tw:font-semibold">
              <span className={t}>{label}</span>
            </b>
          </span>
        ))}
      </div>
    </>
  );
}

/** Dashed selection with handles, shown while the headline is designed. */
function Selection() {
  return (
    <span
      className="tw:pointer-events-none tw:absolute tw:-inset-[0.8cqw] tw:rounded-[0.4cqw] tw:border-[0.22cqw] tw:border-dashed tw:border-[#5b3df5] tw:opacity-0"
      style={wd("sel")}
    >
      {[
        "tw:-top-[0.8cqw] tw:-left-[0.8cqw]",
        "tw:-top-[0.8cqw] tw:-right-[0.8cqw]",
        "tw:-bottom-[0.8cqw] tw:-left-[0.8cqw]",
        "tw:-right-[0.8cqw] tw:-bottom-[0.8cqw]",
      ].map((pos) => (
        <i
          key={pos}
          className={cx(
            "tw:absolute tw:block tw:size-[1.4cqw] tw:rounded-[0.3cqw] tw:border-[0.22cqw] tw:border-[#5b3df5] tw:bg-white",
            pos,
          )}
        />
      ))}
      <span className="tw:absolute tw:-top-[3.6cqw] tw:right-0 tw:rounded-[0.6cqw] tw:bg-[#5b3df5] tw:px-[1cqw] tw:py-[0.3cqw] tw:text-[1.1cqw] tw:font-semibold tw:text-white">
        H1 · 48px
      </span>
    </span>
  );
}

/** The same page on the phone (stacked mobile layout). */
function PhonePage({ wire }: { wire?: boolean }) {
  const at = (k: number) => (wire ? undefined : wd(`m-${k}`));
  const t = wireText(wire);
  return (
    <>
      <div
        className="tw:flex tw:items-center tw:justify-between tw:px-[6cqw] tw:py-[5cqw]"
        style={at(1)}
      >
        <span className="tw:flex tw:items-center tw:gap-[2cqw]">
          <i
            className={cx(
              "tw:block tw:size-[6cqw] tw:rounded-[1.8cqw]",
              wire ? "tw:bg-[#d5dce7]" : "tw:bg-(--blue)",
            )}
          />
          <b className="tw:text-[5.5cqw] tw:font-semibold">
            <span className={t}>Your Business</span>
          </b>
        </span>
        <span className="tw:grid tw:gap-[1.2cqw]">
          {[0, 1, 2].map((n) => (
            <i
              key={n}
              className={cx(
                "tw:block tw:h-[1.2cqw] tw:w-[6cqw] tw:rounded-full",
                wire ? "tw:bg-[#d5dce7]" : "tw:bg-(--ink)",
              )}
            />
          ))}
        </span>
      </div>
      <span className="tw:block tw:px-[5cqw]" style={at(1)}>
        <ImageSlot wire={wire} className="tw:h-[34cqw] tw:rounded-[5cqw]" />
      </span>
      <b
        className="tw:mx-[6cqw] tw:mt-[5cqw] tw:block tw:text-[8.6cqw] tw:leading-[1.1] tw:font-medium tw:tracking-[-0.03em]"
        style={at(2)}
      >
        <span className={t}>Grow your business with a better website</span>
      </b>
      <span
        className={cx(
          "tw:mx-[6cqw] tw:mt-[4cqw] tw:inline-block tw:rounded-full tw:px-[6cqw] tw:py-[2.6cqw] tw:text-[5cqw] tw:font-semibold",
          wire
            ? "tw:border tw:border-dashed tw:border-[#b8c2d3] tw:text-transparent"
            : "tw:bg-(--gold)",
        )}
        style={at(2)}
      >
        Get started
      </span>
      <span
        className="tw:mx-[5cqw] tw:mt-[5cqw] tw:grid tw:gap-[2.4cqw]"
        style={at(2)}
      >
        {SITE_CARDS.map(([label, icon, c]) => (
          <span
            key={label}
            className={cx(
              "tw:flex tw:items-center tw:gap-[3cqw] tw:rounded-[4cqw] tw:p-[3.4cqw]",
              wire
                ? "tw:border tw:border-dashed tw:border-[#c3ccd9]"
                : "tw:bg-(--panel)",
            )}
          >
            <span
              className="tw:grid tw:size-[7cqw] tw:flex-none tw:place-items-center tw:rounded-[2cqw] tw:text-[4cqw] tw:text-white"
              style={{ background: wire ? "#d5dce7" : c }}
            >
              {!wire && icon}
            </span>
            <b className="tw:text-[5cqw] tw:font-semibold">
              <span className={t}>{label}</span>
            </b>
          </span>
        ))}
      </span>
    </>
  );
}

const STAGES = ["Wireframe", "Design", "Live"];

export function LaptopPhoneSite() {
  return (
    <div
      className="tw:relative tw:mx-auto tw:w-full tw:max-w-[840px] tw:pb-[8%]"
      aria-hidden="true"
    >
      {/* Laptop */}
      <div className="tw:w-[88%]">
        <div className="tw:rounded-[20px] tw:bg-(--ink) tw:p-[1.5%] tw:[box-shadow:0_40px_70px_-40px_rgba(12,21,38,0.55)] tw:max-bssm:rounded-[12px]">
          <div className="tw:relative tw:flex tw:aspect-[16/10] tw:flex-col tw:overflow-hidden tw:rounded-[9px] tw:bg-white tw:text-(--ink) tw:[container-type:inline-size] tw:max-bssm:rounded-[5px]">
            {/* Builder toolbar: stage tabs and the publish button */}
            <div className="tw:flex tw:flex-none tw:items-center tw:justify-between tw:border-b tw:border-(--line) tw:bg-(--panel) tw:px-[2.4cqw] tw:py-[1.2cqw] tw:text-[1.3cqw] tw:font-medium tw:text-(--muted)">
              <span className="tw:flex tw:items-center tw:gap-[0.8cqw]">
                {["#f87171", "#fbbf24", "#34d399"].map((c) => (
                  <i
                    key={c}
                    className="tw:block tw:size-[1.1cqw] tw:rounded-full"
                    style={{ background: c }}
                  />
                ))}
                <span className="tw:ml-[1cqw] tw:text-(--ink)">Homepage</span>
              </span>
              <span className="tw:flex tw:items-center tw:gap-[0.4cqw] tw:rounded-full tw:bg-white tw:p-[0.4cqw]">
                {STAGES.map((stage, i) => (
                  <span
                    key={stage}
                    className={cx(
                      "tw:rounded-full tw:px-[1.4cqw] tw:py-[0.4cqw]",
                      i === 2 && "tw:bg-(--ink) tw:text-white",
                    )}
                    style={wd(`tab-${i + 1}`)}
                  >
                    {stage}
                  </span>
                ))}
              </span>
              <span className="tw:grid tw:rounded-full tw:text-white">
                <span
                  className="tw:col-start-1 tw:row-start-1 tw:rounded-full tw:bg-(--blue) tw:px-[1.6cqw] tw:py-[0.5cqw] tw:text-center tw:opacity-0"
                  style={wd("pub-a")}
                >
                  Publish
                </span>
                <span
                  className="tw:col-start-1 tw:row-start-1 tw:flex tw:items-center tw:justify-center tw:gap-[0.5cqw] tw:rounded-full tw:bg-(--green) tw:px-[1.6cqw] tw:py-[0.5cqw]"
                  style={wd("pub-b")}
                >
                  <FiCheck /> Live
                </span>
              </span>
            </div>

            {/* Canvas: wireframe on top of the finished design */}
            <div className="tw:relative tw:flex-1">
              <div className="tw:absolute tw:inset-0">
                <DesktopPage />
              </div>
              <div
                className="tw:absolute tw:inset-0 tw:bg-white tw:opacity-0"
                style={wd("wire")}
              >
                <DesktopPage wire />
              </div>
              {/* Launch card */}
              <span
                className="tw:absolute tw:bottom-[2.6cqw] tw:left-[3.6cqw] tw:flex tw:items-center tw:gap-[1.2cqw] tw:rounded-[1.4cqw] tw:bg-white tw:py-[1.2cqw] tw:pr-[2cqw] tw:pl-[1.2cqw] tw:[box-shadow:0_10px_28px_-12px_rgba(12,21,38,0.35)] tw:ring-1 tw:ring-(--line) tw:max-bssm:hidden"
                style={wd("live")}
              >
                <span className="tw:grid tw:size-[3.4cqw] tw:place-items-center tw:rounded-full tw:bg-(--green) tw:text-[1.8cqw] tw:text-white">
                  <FiCheck />
                </span>
                <span>
                  <b className="tw:block tw:text-[1.5cqw] tw:font-semibold">
                    Your website is live
                  </b>
                  <span className="tw:mt-[0.3cqw] tw:block tw:text-[1.15cqw] tw:text-(--muted)">
                    Mobile-ready · SEO-ready · Fast
                  </span>
                </span>
              </span>
            </div>

            {/* Cursor */}
            <svg
              viewBox="0 0 24 24"
              className="tw:absolute tw:top-[74%] tw:left-[60%] tw:size-[3cqw] tw:fill-(--ink) tw:stroke-white tw:[stroke-width:1.5]"
              style={wd("cursor")}
            >
              <path d="M4 2l16 11.5-7.3 1.2-4.2 6.3z" />
            </svg>
          </div>
        </div>
        <div className="tw:relative tw:-mx-[5%] tw:h-[16px] tw:rounded-b-[20px] tw:bg-[linear-gradient(#e5e9f0,#c7cfdb)] tw:max-bssm:h-[9px]">
          <span className="tw:absolute tw:top-0 tw:left-1/2 tw:h-[5px] tw:w-[16%] tw:-translate-x-1/2 tw:rounded-b-[6px] tw:bg-[#aeb8c8]" />
        </div>
      </div>

      {/* Phone: the same page, stacked for mobile */}
      <div className="tw:absolute tw:right-0 tw:bottom-0 tw:w-[28%] tw:overflow-hidden tw:rounded-[28px] tw:border-[6px] tw:border-(--ink) tw:bg-white tw:text-(--ink) tw:[box-shadow:0_30px_60px_-28px_rgba(12,21,38,0.6)] tw:[container-type:inline-size] tw:max-bssm:rounded-[16px] tw:max-bssm:border-4">
        <div className="tw:relative tw:aspect-[9/18.5]">
          <span className="tw:mx-auto tw:mt-[3cqw] tw:block tw:h-[5cqw] tw:w-[34cqw] tw:rounded-full tw:bg-(--ink)" />
          <div className="tw:relative">
            <PhonePage />
            <div
              className="tw:absolute tw:inset-0 tw:bg-white tw:opacity-0"
              style={wd("wire-m")}
            >
              <PhonePage wire />
            </div>
          </div>
          {/* Inquiry arriving once the site is live */}
          <span
            className="tw:absolute tw:inset-x-[4cqw] tw:top-[10cqw] tw:flex tw:items-center tw:gap-[3cqw] tw:rounded-[4cqw] tw:bg-white tw:p-[3.4cqw] tw:[box-shadow:0_12px_28px_-10px_rgba(12,21,38,0.4)] tw:ring-1 tw:ring-(--line)"
            style={wd("note")}
          >
            <span className="tw:grid tw:size-[9cqw] tw:flex-none tw:place-items-center tw:rounded-[2.6cqw] tw:bg-(--blue) tw:text-[5cqw] tw:text-white">
              <FiMail />
            </span>
            <span className="tw:min-w-0">
              <b className="tw:block tw:text-[4.6cqw] tw:font-semibold">
                New inquiry
              </b>
              <span className="tw:block tw:text-[3.8cqw] tw:text-(--muted)">
                From your website · now
              </span>
            </span>
          </span>
          <span
            className="tw:absolute tw:inset-x-[5cqw] tw:bottom-[5cqw] tw:flex tw:items-center tw:justify-center tw:rounded-full tw:bg-(--blue) tw:py-[3.6cqw] tw:text-[5cqw] tw:font-semibold tw:text-white"
            style={wd("m-2")}
          >
            Book now
          </span>
        </div>
      </div>
    </div>
  );
}
