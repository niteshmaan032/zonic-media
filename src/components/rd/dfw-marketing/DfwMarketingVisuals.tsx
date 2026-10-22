import type { CSSProperties } from "react";
import Image from "next/image";
import {
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiGlobe,
  FiMapPin,
  FiMic,
  FiNavigation,
  FiPhone,
  FiSearch,
  FiStar,
} from "react-icons/fi";

/* Shared pieces for /services/dallas-fort-worth/digital-marketing-agency (v3,
   laid out after the supplied "Retro" reference designs).

   PHOTO SLOTS: every <Ph> is a shimmer skeleton standing in for a real
   photo. `label` names the shot and `ratio` the crop. To drop the photo in,
   swap the <Ph> for <Image src="/images/dfw/…" alt="…" fill sizes="…" />
   inside the same wrapper; the wrapper already sets position and radius.

   UI PANELS are illustrations of the work, not client data: they carry no
   invented rankings, call counts or reviews. */

export function Ph({
  label,
  ratio,
  dark = false,
  src,
}: {
  label: string;
  ratio: string;
  dark?: boolean;
  src?: string;
}) {
  return (
    <div
      className={`dm-ph tw:[position:absolute] tw:[inset:0] tw:[overflow:hidden] tw:[display:grid] tw:[place-items:center] tw:[border-radius:inherit] tw:[background:linear-gradient(135deg,_#d6deeb_0%,_#e6ebf3_55%,_#d9e0ec_100%)] tw:[&::after]:[position:absolute] tw:[&::after]:[inset:0] tw:[&::after]:[background:linear-gradient(_100deg,_rgba(255,_255,_255,_0)_30%,_rgba(255,_255,_255,_0.55)_50%,_rgba(255,_255,_255,_0)_70%_)] tw:[&::after]:[transform:translateX(-100%)] tw:[&::after]:[animation:dm-shimmer_2.4s_ease-in-out_infinite] tw:[&::after]:[content:''] tw:[.dm-step-photo_&]:[background:linear-gradient(135deg,_#f4f6fa_0%,_#ffffff_55%,_#eef1f6_100%)] ${dark ? " dm-ph--dark tw:[&.dm-ph--dark]:[background:linear-gradient(135deg,_#1a2742_0%,_#22324f_55%,_#1b2944_100%)] tw:[&.dm-ph--dark::after]:[background:linear-gradient(100deg,_rgba(255,_255,_255,_0)_30%,_rgba(255,_255,_255,_0.07)_50%,_rgba(255,_255,_255,_0)_70%)]" : ""}${src ? " dm-ph--image tw:[&.dm-ph--image]:[background:#d6deeb] tw:[&.dm-ph--image_img]:[z-index:0] tw:[&.dm-ph--image_img]:[width:100%] tw:[&.dm-ph--image_img]:[height:100%] tw:[&.dm-ph--image_img]:[object-fit:cover] tw:[&.dm-ph--image::after]:[z-index:1] tw:[&.dm-ph--image::after]:[background:linear-gradient(180deg,_rgba(12,_21,_38,_0.02)_50%,_rgba(12,_21,_38,_0.48)_100%)] tw:[&.dm-ph--image::after]:[transform:none] tw:[&.dm-ph--image::after]:[animation:none]" : ""}`}
      aria-hidden={src ? undefined : true}
    >
      {src ? (
        <Image src={src} alt={label} fill sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <svg viewBox="0 0 48 48" className="dm-ph-glyph tw:[width:46px] tw:[height:46px] tw:[fill:none] tw:[stroke:#a9b5c9] tw:[&&]:[stroke-width:2.2] tw:[&&]:[stroke-linecap:round] tw:[&&]:[stroke-linejoin:round] tw:[&_circle]:[fill:#bcc7d8] tw:[&_circle]:[stroke:none]">
          <rect x="5" y="9" width="38" height="30" rx="5" />
          <circle cx="17" cy="19" r="4" />
          <path d="M5 33 L17 24 L26 31 L33 26 L43 33" />
        </svg>
      )}
      {/* The caption is a note for the empty slot only; with a real photo
          the label is the image's alt text instead. */}
      {src ? null : (
        <span className="dm-ph-label tw:[position:absolute] tw:[left:18px] tw:[bottom:16px] tw:[z-index:2] tw:[max-width:calc(100%_-_36px)] tw:[color:#6e7d97] tw:[font-size:11.5px] tw:[font-weight:500] tw:[line-height:1.4] tw:[&_b]:[margin-left:4px] tw:[&_b]:[font-weight:600] tw:[.dm-step-photo_&]:[top:16px] tw:[.dm-step-photo_&]:[bottom:auto] tw:[.dm-area-map_&]:[left:auto] tw:[.dm-area-map_&]:[right:18px] tw:[.dm-area-map_&]:[max-width:45%] tw:[.dm-area-map_&]:[text-align:right]">
          {label} <b>{ratio}</b>
        </span>
      )}
    </div>
  );
}

/** A small round skeleton, for avatar stacks. */
export function AvatarPh({ tone }: { tone: string }) {
  return <span className={`dm-ava tw:[width:48px] tw:[height:48px] tw:[margin-left:-12px] tw:[border:3px_solid_var(--ava-ring,_#fff)] tw:[border-radius:50%] tw:[background:radial-gradient(circle_at_50%_40%,_rgba(255,_255,_255,_0.85)_0_19%,_transparent_20%),_radial-gradient(ellipse_46%_34%_at_50%_100%,_rgba(255,_255,_255,_0.85)_0_98%,_transparent_100%),_var(--tone)] tw:[.dm-avas--lg_&]:[width:70px] tw:[.dm-avas--lg_&]:[height:70px] tw:[.dm-avas--lg_&]:[margin-left:-10px] tw:[.dm-avas--lg_&]:[--ava-ring:var(--bg)] tw:[.dm-avas--lg_&:first-child]:[margin-left:0] tw:max-bssm:[.dm-avas--lg_&]:[width:56px] tw:max-bssm:[.dm-avas--lg_&]:[height:56px] tw:[&.dm-ava--a]:[--tone:#f7c58a] tw:[&.dm-ava--b]:[--tone:#9db9f5] tw:[&.dm-ava--c]:[--tone:#f2a7a0] tw:[&.dm-ava--d]:[--tone:#9fdcb1] dm-ava--${tone}`} aria-hidden="true" />;
}

/* --------------------------------------------- inline headline icons */

/** A glossy Google-Maps-style pin that sits inside the hero headline. */
export function InlinePin({ id = "dfw-pin" }: { id?: string }) {
  return (
    <span className="dm-inline-icon dm-inline-icon--pin tw:[display:inline-block] tw:[vertical-align:-0.1em] tw:[&_svg]:[display:block] tw:[&_svg]:[width:100%] tw:[&_svg]:[height:100%] tw:[&_svg]:[overflow:visible] tw:[width:0.7em] tw:[height:0.88em] tw:[margin:0_0.04em] tw:[animation:dm-bob_4s_ease-in-out_infinite]" aria-hidden="true">
      <svg viewBox="0 0 64 80">
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
        <ellipse cx="32" cy="74" rx="14" ry="4" className="dm-pin-shadow tw:[fill:rgba(12,_21,_38,_0.14)]" />
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

/** A glossy chat bubble for the contact headline. */
export function InlineChat() {
  return (
    <span className="dm-inline-icon dm-inline-icon--chat tw:[display:inline-block] tw:[vertical-align:-0.1em] tw:[&_svg]:[display:block] tw:[&_svg]:[width:100%] tw:[&_svg]:[height:100%] tw:[&_svg]:[overflow:visible] tw:[width:1.12em] tw:[height:0.88em] tw:[margin:0_0.06em] tw:[transform:rotate(-6deg)]" aria-hidden="true">
      <svg viewBox="0 0 96 76">
        <defs>
          <linearGradient id="dfw-chat-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4d8cf5" />
            <stop offset="1" stopColor="#1c4fc4" />
          </linearGradient>
        </defs>
        <path
          d="M14 4 H82 C 89 4 92 8 92 15 V46 C 92 53 89 57 82 57 H40 L22 71 L25 57 H14 C 7 57 4 53 4 46 V15 C 4 8 7 4 14 4 Z"
          fill="url(#dfw-chat-body)"
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

/* --------------------------------------------- hand-drawn details */

export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 170"
      className={`dm-hand-arrow tw:[fill:none] tw:[stroke:var(--ink)] tw:[&&]:[stroke-width:2.2] tw:[&&]:[stroke-linecap:round] tw:[&&]:[stroke-linejoin:round] ${className}`}
      aria-hidden="true"
    >
      <path d="M8 40 C 40 20 86 6 90 22 C 94 40 30 56 44 58 C 110 62 168 70 196 140" />
      <path d="M170 124 L 197 144 L 206 110" />
    </svg>
  );
}

export function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={`dm-sparks tw:[position:absolute] tw:[top:-34px] tw:[left:270px] tw:[width:120px] tw:[fill:none] tw:[stroke:var(--red)] tw:[&&]:[stroke-width:2.4] tw:[&&]:[stroke-linecap:round] tw:max-bsmd:[display:none] ${className}`} aria-hidden="true">
      <path d="M40 10 L 30 40" />
      <path d="M44 50 L 58 44" />
      <path d="M46 70 C 70 70 96 78 112 92" />
    </svg>
  );
}

/** Round badge with rotating text, like a stamp. */
export function RatingBadge() {
  return (
    <div className="dm-badge tw:[position:absolute] tw:[z-index:2] tw:[top:-96px] tw:[left:calc(32%_-_96px)] tw:[display:grid] tw:[width:192px] tw:[height:192px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:#fff] tw:max-bslg:[width:150px] tw:max-bslg:[height:150px] tw:max-bslg:[top:-75px] tw:max-bslg:[left:calc(32%_-_75px)] tw:max-bssm:[width:128px] tw:max-bssm:[height:128px] tw:max-bssm:[top:-64px] tw:max-bssm:[left:auto] tw:max-bssm:[right:24px]" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="dm-badge-ring tw:[position:absolute] tw:[inset:0] tw:[width:100%] tw:[height:100%] tw:[animation:dm-spin_22s_linear_infinite] tw:[&_text]:[fill:var(--ink)] tw:[&_text]:[font-size:12.5px] tw:[&_text]:[font-weight:500] tw:[&_text]:[letter-spacing:0.18em] tw:max-bssm:[&_text]:[font-size:11px]">
        <defs>
          <path id="dfw-badge-circle" d="M100 100 m -74 0 a 74 74 0 1 1 148 0 a 74 74 0 1 1 -148 0" />
        </defs>
        <text>
          <textPath
            href="#dfw-badge-circle"
            textLength="458"
            lengthAdjust="spacing"
          >
            5.0 RATED ON CLUTCH • 21 VERIFIED REVIEWS •
          </textPath>
        </text>
      </svg>
      <span className="dm-badge-core tw:[display:grid] tw:[width:64px] tw:[height:64px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--gold)] tw:[font-size:28px] tw:[&_svg]:[fill:var(--ink)] tw:max-bssm:[width:46px] tw:max-bssm:[height:46px] tw:max-bssm:[font-size:20px]">
        <FiStar />
      </span>
    </div>
  );
}

/* --------------------------------------------- feature panels (ref 2) */

export function MapPackPanel() {
  return (
    <div className="dm-panel tw:[.dm-feature--flip_&]:[order:2] tw:[position:relative] tw:[display:grid] tw:[min-height:400px] tw:[padding:44px_36px] tw:[place-items:center] tw:[border-radius:var(--r-xl)] tw:[background:var(--panel)] tw:max-bslg:[.dm-feature--flip_&]:[order:0] tw:max-bssm:[min-height:380px] tw:max-bssm:[padding:92px_18px_30px]" data-anim>
      <div className="dm-mock dm-mock--pack tw:[width:min(100%,_390px)] tw:[padding:22px] tw:[border-radius:24px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[text-align:left] tw:max-bssm:[padding:16px]">
        <div className="dm-mock-search tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[padding:12px_16px] tw:[border-radius:999px] tw:[background:var(--panel)] tw:[color:var(--ink)] tw:[font-size:14.5px] tw:[font-weight:500] tw:[&_svg]:[color:var(--red)]">
          <FiMapPin /> roof repair near me
        </div>
        <p className="dm-mock-cap tw:[margin:16px_0_8px] tw:[color:var(--muted)] tw:[font-size:12px] tw:[font-weight:600] tw:[letter-spacing:0.08em] tw:[text-transform:uppercase]">Places</p>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`dm-mock-row tw:[display:grid] tw:[grid-template-columns:28px_minmax(0,_1fr)_auto] tw:[gap:12px] tw:[align-items:center] tw:[margin-top:8px] tw:[padding:12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:16px] tw:[animation:dm-rise_6s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_0.18s)] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)] ${i === 0 ? " is-you" : ""}`}
            style={{ "--i": i } as CSSProperties}
          >
            <span className="dm-mock-num tw:[display:grid] tw:[width:28px] tw:[height:28px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--panel)] tw:[color:var(--muted)] tw:[font-size:13px] tw:[font-weight:600] tw:[.dm-mock-row.is-you_&]:[background:var(--blue)] tw:[.dm-mock-row.is-you_&]:[color:#fff]">{i + 1}</span>
            <span className="dm-mock-lines tw:[display:grid] tw:[gap:6px] tw:[&_b]:[font-size:15px] tw:[&_b]:[font-weight:500] tw:[&_i]:[display:block] tw:[&_i]:[width:70%] tw:[&_i]:[height:8px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#dfe5ee]">
              {i === 0 ? <b>Your business</b> : <i />}
              <span className="dm-mock-stars tw:[display:flex] tw:[gap:2px] tw:[&_svg]:[width:11px] tw:[&_svg]:[height:11px] tw:[&_svg]:[color:var(--gold)] tw:[&_svg]:[fill:var(--gold)]">
                {[0, 1, 2, 3, 4].map((n) => (
                  <FiStar key={n} />
                ))}
              </span>
            </span>
            {i === 0 ? (
              <span className="dm-mock-call tw:[display:grid] tw:[width:36px] tw:[height:36px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--blue)] tw:[color:#fff]">
                <FiPhone />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="dm-chip dm-chip--gold tw:[position:absolute] tw:[top:34px] tw:[right:30px] tw:[display:grid] tw:[gap:2px] tw:[padding:20px_26px] tw:[border-radius:24px] tw:[box-shadow:var(--lift)] tw:[animation:dm-float_7s_ease-in-out_infinite] tw:[&_b]:[font-size:40px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.03em] tw:[&_b]:[line-height:1] tw:[&_span]:[font-size:14.5px] tw:[background:var(--gold)] tw:[color:var(--ink)] tw:[.dm-feature--flip_&]:[right:auto] tw:[.dm-feature--flip_&]:[left:30px] tw:max-bssm:[top:18px] tw:max-bssm:[right:18px] tw:max-bssm:[padding:14px_18px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[.dm-feature--flip_&]:[left:18px] tw:max-bssm:[&_b]:[font-size:28px] tw:max-bssm:[&_span]:[font-size:12.5px]">
        <b>Top 3</b>
        <span>where customers search</span>
      </div>
      <span className="dm-bubble dm-bubble--green tw:[position:absolute] tw:[left:26px] tw:[bottom:70px] tw:[display:grid] tw:[width:72px] tw:[height:72px] tw:[place-items:center] tw:[border-radius:50%] tw:[color:#fff] tw:[font-size:28px] tw:[box-shadow:var(--lift)] tw:[background:var(--green)] tw:max-bssm:[width:54px] tw:max-bssm:[height:54px] tw:max-bssm:[font-size:22px] tw:max-bssm:[left:10px] tw:max-bssm:[bottom:24px]">
        <FiMapPin />
      </span>
    </div>
  );
}

const CITY_TABS = ["Dallas", "Plano", "Frisco", "Fort Worth"];

export function CityPagesPanel() {
  return (
    <div className="dm-panel tw:[.dm-feature--flip_&]:[order:2] tw:[position:relative] tw:[display:grid] tw:[min-height:400px] tw:[padding:44px_36px] tw:[place-items:center] tw:[border-radius:var(--r-xl)] tw:[background:var(--panel)] tw:max-bslg:[.dm-feature--flip_&]:[order:0] tw:max-bssm:[min-height:380px] tw:max-bssm:[padding:92px_18px_30px]" data-anim>
      <div className="dm-mock dm-mock--site tw:[width:min(100%,_390px)] tw:[padding:22px] tw:[border-radius:24px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[text-align:left] tw:max-bssm:[padding:16px]">
        <div className="dm-mock-bar tw:[display:flex] tw:[align-items:center] tw:[gap:5px] tw:[margin:-6px_-6px_16px] tw:[padding:0_4px_12px] tw:[border-bottom:1px_solid_var(--line)] tw:[&>i]:[width:9px] tw:[&>i]:[height:9px] tw:[&>i]:[border-radius:50%] tw:[&>i]:[background:#d5dce7] tw:[&_span]:[margin-left:8px] tw:[&_span]:[padding:4px_12px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[background:var(--panel)] tw:[&_span]:[color:var(--muted)] tw:[&_span]:[font-size:12px]">
          <i />
          <i />
          <i />
          <span>yourbusiness.com/plano</span>
        </div>
        <div className="dm-mock-tabs tw:[display:flex] tw:[flex-wrap:wrap] tw:[gap:6px] tw:[&_span]:[padding:5px_12px] tw:[&_span]:[border:1px_solid_var(--line)] tw:[&_span]:[border-radius:999px] tw:[&_span]:[color:var(--text)] tw:[&_span]:[font-size:12.5px] tw:[&_span]:[font-weight:500] tw:[&_.is-on]:[border-color:var(--ink)] tw:[&_.is-on]:[background:var(--ink)] tw:[&_.is-on]:[color:#fff]">
          {CITY_TABS.map((city, i) => (
            <span key={city} className={i === 1 ? "is-on" : undefined}>
              {city}
            </span>
          ))}
        </div>
        <p className="dm-mock-h tw:[margin-top:20px] tw:[font-size:22px] tw:[font-weight:500] tw:[letter-spacing:-0.02em] tw:[line-height:1.2]">Roof repair in Plano, TX</p>
        <i className="dm-mock-line tw:[display:block] tw:[width:92%] tw:[height:8px] tw:[margin-top:12px] tw:[border-radius:4px] tw:[background:#e2e8f0]" />
        <i className="dm-mock-line dm-mock-line--short tw:[display:block] tw:[height:8px] tw:[border-radius:4px] tw:[background:#e2e8f0] tw:[width:64%] tw:[margin-top:8px]" />
        <div className="dm-mock-btns tw:[display:flex] tw:[gap:8px] tw:[margin-top:20px] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[gap:6px] tw:[&_span]:[padding:9px_14px] tw:[&_span]:[border:1px_solid_var(--line)] tw:[&_span]:[border-radius:999px] tw:[&_span]:[font-size:13px] tw:[&_span]:[font-weight:500] tw:[&_.is-primary]:[border-color:var(--blue)] tw:[&_.is-primary]:[background:var(--blue)] tw:[&_.is-primary]:[color:#fff]">
          <span className="is-primary">
            <FiPhone /> Call now
          </span>
          <span>Free inspection</span>
        </div>
      </div>
      <div className="dm-chip dm-chip--blue tw:[position:absolute] tw:[top:34px] tw:[right:30px] tw:[display:grid] tw:[gap:2px] tw:[padding:20px_26px] tw:[border-radius:24px] tw:[box-shadow:var(--lift)] tw:[animation:dm-float_7s_ease-in-out_infinite] tw:[&_b]:[font-size:40px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.03em] tw:[&_b]:[line-height:1] tw:[&_span]:[font-size:14.5px] tw:[background:var(--blue)] tw:[color:#fff] tw:[.dm-feature--flip_&]:[right:auto] tw:[.dm-feature--flip_&]:[left:30px] tw:max-bssm:[top:18px] tw:max-bssm:[right:18px] tw:max-bssm:[padding:14px_18px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[.dm-feature--flip_&]:[left:18px] tw:max-bssm:[&_b]:[font-size:28px] tw:max-bssm:[&_span]:[font-size:12.5px]">
        <b>1 page</b>
        <span>per city you serve</span>
      </div>
    </div>
  );
}

export function ReportPanel() {
  return (
    <div className="dm-panel tw:[.dm-feature--flip_&]:[order:2] tw:[position:relative] tw:[display:grid] tw:[min-height:400px] tw:[padding:44px_36px] tw:[place-items:center] tw:[border-radius:var(--r-xl)] tw:[background:var(--panel)] tw:max-bslg:[.dm-feature--flip_&]:[order:0] tw:max-bssm:[min-height:380px] tw:max-bssm:[padding:92px_18px_30px]" data-anim>
      <div className="dm-mock dm-mock--report tw:[width:min(100%,_390px)] tw:[padding:22px] tw:[border-radius:24px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[text-align:left] tw:max-bssm:[padding:16px]">
        <div className="dm-mock-head tw:[display:flex] tw:[align-items:center] tw:[justify-content:space-between] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[gap:8px] tw:[&_span]:[font-size:15px] tw:[&_span]:[font-weight:500] tw:[&_svg]:[color:var(--blue)] tw:[&_small]:[padding:3px_10px] tw:[&_small]:[border-radius:999px] tw:[&_small]:[background:var(--panel)] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px]">
          <span>
            <FiBarChart2 /> Monthly report
          </span>
          <small>Example</small>
        </div>
        <div className="dm-mock-kpis tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[gap:8px] tw:[margin:18px_0] tw:[&_span]:[display:flex] tw:[&_span]:[flex-direction:column] tw:[&_span]:[align-items:flex-start] tw:[&_span]:[gap:8px] tw:[&_span]:[padding:12px] tw:[&_span]:[border-radius:14px] tw:[&_span]:[background:var(--panel)] tw:[&_span]:[font-size:13px] tw:[&_span]:[font-weight:500] tw:[&_svg]:[color:var(--blue)]">
          <span>
            <FiPhone />
            Calls
          </span>
          <span>
            <FiCheck />
            Forms
          </span>
          <span>
            <FiMapPin />
            Rankings
          </span>
        </div>
        <div className="dm-mock-bars tw:[display:flex] tw:[align-items:flex-end] tw:[gap:8px] tw:[height:120px] tw:[&_i]:[flex:1] tw:[&_i]:[height:var(--h)] tw:[&_i]:[border-radius:6px_6px_2px_2px] tw:[&_i]:[background:#c9d9fa] tw:[&_i]:[transform-origin:bottom] tw:[&_i]:[animation:dm-grow_6s_ease_infinite_both] tw:[&&_i]:[animation-delay:calc(var(--i)_*_0.08s)] tw:[&_i:nth-last-child(-n_+_3)]:[background:var(--blue)]">
          {[30, 42, 38, 52, 60, 58, 72, 80].map((h, i) => (
            <i key={i} style={{ "--h": `${h}%`, "--i": i } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="dm-chip dm-chip--ink tw:[position:absolute] tw:[top:34px] tw:[right:30px] tw:[display:grid] tw:[gap:2px] tw:[padding:20px_26px] tw:[border-radius:24px] tw:[box-shadow:var(--lift)] tw:[animation:dm-float_7s_ease-in-out_infinite] tw:[&_b]:[font-size:40px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.03em] tw:[&_b]:[line-height:1] tw:[&_span]:[font-size:14.5px] tw:[background:var(--ink)] tw:[color:#fff] tw:[.dm-feature--flip_&]:[right:auto] tw:[.dm-feature--flip_&]:[left:30px] tw:max-bssm:[top:18px] tw:max-bssm:[right:18px] tw:max-bssm:[padding:14px_18px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[.dm-feature--flip_&]:[left:18px] tw:max-bssm:[&_b]:[font-size:28px] tw:max-bssm:[&_span]:[font-size:12.5px]">
        <b>Every call</b>
        <span>traced to its source</span>
      </div>
    </div>
  );
}

/* --------------------------------------------- search-to-booking phone */

/** A phone that cycles through four screens in a 12s loop: search, Map
    Pack, profile (Call tapped), job booked. Each screen holds for 3s;
    `--i` sets its slot. The step list beside it uses the same timing.
    With reduced motion only the first screen shows. */
export function JourneyPhone() {
  return (
    <div className="dm-phone tw:[position:relative] tw:[width:280px] tw:[height:540px] tw:[overflow:hidden] tw:[border:10px_solid_var(--ink)] tw:[border-radius:44px] tw:[background:#fff] tw:[box-shadow:0_40px_70px_-40px_rgba(12,_21,_38,_0.55)] tw:[text-align:left] tw:max-bssm:[width:260px] tw:max-bssm:[height:520px]" aria-hidden="true">
      <span className="dm-phone-notch tw:[position:absolute] tw:[z-index:3] tw:[top:8px] tw:[left:50%] tw:[width:86px] tw:[height:22px] tw:[border-radius:14px] tw:[background:var(--ink)] tw:[transform:translateX(-50%)]" />

      {/* 1. Search */}
      <div className="dm-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dm-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 0 } as CSSProperties}>
        <p className="dm-phone-brand tw:[margin:34px_0_20px] tw:[font-size:34px] tw:[font-weight:500] tw:[letter-spacing:-0.03em] tw:[text-align:center] tw:[&_span:nth-child(1)]:[color:#4285f4] tw:[&_span:nth-child(4)]:[color:#4285f4] tw:[&_span:nth-child(2)]:[color:#ea4335] tw:[&_span:nth-child(6)]:[color:#ea4335] tw:[&_span:nth-child(3)]:[color:#fbbc05] tw:[&_span:nth-child(5)]:[color:#34a853]">
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </p>
        <div className="dm-phone-search tw:[display:flex] tw:[align-items:center] tw:[gap:8px] tw:[padding:10px_14px] tw:[border:1px_solid_var(--line)] tw:[border-radius:999px] tw:[box-shadow:0_6px_16px_-10px_rgba(12,_21,_38,_0.3)] tw:[color:var(--muted)] tw:[font-size:13.5px] tw:[&_svg:last-child]:[margin-left:auto] tw:[&_svg:last-child]:[color:var(--blue)]">
          <FiSearch />
          <span className="dm-phone-typing tw:[display:inline-block] tw:[overflow:hidden] tw:[width:15ch] tw:[border-right:2px_solid_var(--blue)] tw:[color:var(--ink)] tw:[white-space:nowrap] tw:[animation:dm-typing_12s_steps(15)_infinite_both,_dm-caret_0.8s_step-end_infinite]">plumber near me</span>
          <FiMic />
        </div>
        <ul className="dm-phone-suggest tw:[margin-top:14px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:center] tw:[&_li]:[gap:10px] tw:[&_li]:[padding:10px_4px] tw:[&_li]:[border-bottom:1px_solid_var(--line)] tw:[&_li]:[color:var(--text)] tw:[&_li]:[font-size:12.5px] tw:[&_svg]:[flex:none] tw:[&_svg]:[width:12px] tw:[&_svg]:[height:12px] tw:[&_svg]:[color:var(--muted)]">
          <li>
            <FiSearch /> plumber near me open now
          </li>
          <li>
            <FiSearch /> plumber near me emergency
          </li>
          <li>
            <FiSearch /> plumber plano tx
          </li>
        </ul>
      </div>

      {/* 2. Map Pack */}
      <div className="dm-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dm-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 1 } as CSSProperties}>
        <div className="dm-phone-map tw:[position:relative] tw:[height:130px] tw:[overflow:hidden] tw:[border-radius:16px] tw:[background:#e6edf8] tw:[&>svg]:[position:absolute] tw:[&>svg]:[inset:0] tw:[&>svg]:[width:100%] tw:[&>svg]:[height:100%] tw:[&>svg]:[fill:none] tw:[&>svg]:[stroke:#fff] tw:[&&>svg]:[stroke-width:7]">
          <svg viewBox="0 0 220 110" preserveAspectRatio="none">
            <path d="M-10 70 C 50 50 90 90 150 60 S 210 30 240 40" />
            <path d="M60 -10 C 70 40 50 80 70 130" />
            <path d="M150 -10 C 140 40 170 70 160 130" />
          </svg>
          <span className="dm-phone-pin dm-phone-pin--you tw:[position:absolute] tw:[border-radius:50%] tw:[top:38%] tw:[left:47%] tw:[display:grid] tw:[width:30px] tw:[height:30px] tw:[place-items:center] tw:[border:0] tw:[background:var(--red)] tw:[color:#fff] tw:[font-size:15px] tw:[box-shadow:0_0_0_6px_rgba(234,_67,_52,_0.18)]">
            <FiMapPin />
          </span>
          <span className="dm-phone-pin dm-phone-pin--a tw:[position:absolute] tw:[width:12px] tw:[height:12px] tw:[border:2px_solid_#fff] tw:[border-radius:50%] tw:[background:#9aa7bd] tw:[top:30%] tw:[left:22%]" />
          <span className="dm-phone-pin dm-phone-pin--b tw:[position:absolute] tw:[width:12px] tw:[height:12px] tw:[border:2px_solid_#fff] tw:[border-radius:50%] tw:[background:#9aa7bd] tw:[top:66%] tw:[left:74%]" />
        </div>
        <p className="dm-phone-cap tw:[margin:12px_0_4px] tw:[color:var(--muted)] tw:[font-size:11px] tw:[font-weight:600] tw:[letter-spacing:0.08em] tw:[text-transform:uppercase]">Places</p>
        <div className="dm-phone-row is-you tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[margin-top:6px] tw:[padding:10px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_em]:[display:grid] tw:[&_em]:[flex:none] tw:[&_em]:[width:22px] tw:[&_em]:[height:22px] tw:[&_em]:[place-items:center] tw:[&_em]:[border-radius:50%] tw:[&_em]:[background:var(--light,_#f1f4f9)] tw:[&_em]:[color:var(--muted)] tw:[&_em]:[font-size:11px] tw:[&_em]:[font-style:normal] tw:[&_em]:[font-weight:600] tw:[&>span]:[display:grid] tw:[&>span]:[flex:1] tw:[&>span]:[gap:5px] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_small]:[display:flex] tw:[&_small]:[align-items:center] tw:[&_small]:[gap:4px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px] tw:[&_small_svg]:[width:11px] tw:[&_small_svg]:[height:11px] tw:[&_small_svg]:[color:var(--gold)] tw:[&_small_svg]:[fill:var(--gold)] tw:[&_i]:[display:block] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#e0e6ef] tw:[&_i.is-short]:[width:60%] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)] tw:[&.is-you_em]:[background:var(--blue)] tw:[&.is-you_em]:[color:#fff]">
          <em>1</em>
          <span>
            <b>Your business</b>
            <small>
              <FiStar /> 4.9 · Open now
            </small>
          </span>
        </div>
        <div className="dm-phone-row tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[margin-top:6px] tw:[padding:10px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_em]:[display:grid] tw:[&_em]:[flex:none] tw:[&_em]:[width:22px] tw:[&_em]:[height:22px] tw:[&_em]:[place-items:center] tw:[&_em]:[border-radius:50%] tw:[&_em]:[background:var(--light,_#f1f4f9)] tw:[&_em]:[color:var(--muted)] tw:[&_em]:[font-size:11px] tw:[&_em]:[font-style:normal] tw:[&_em]:[font-weight:600] tw:[&>span]:[display:grid] tw:[&>span]:[flex:1] tw:[&>span]:[gap:5px] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_small]:[display:flex] tw:[&_small]:[align-items:center] tw:[&_small]:[gap:4px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px] tw:[&_small_svg]:[width:11px] tw:[&_small_svg]:[height:11px] tw:[&_small_svg]:[color:var(--gold)] tw:[&_small_svg]:[fill:var(--gold)] tw:[&_i]:[display:block] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#e0e6ef] tw:[&_i.is-short]:[width:60%] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)] tw:[&.is-you_em]:[background:var(--blue)] tw:[&.is-you_em]:[color:#fff]">
          <em>2</em>
          <span>
            <i />
            <i className="is-short" />
          </span>
        </div>
        <div className="dm-phone-row tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[margin-top:6px] tw:[padding:10px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_em]:[display:grid] tw:[&_em]:[flex:none] tw:[&_em]:[width:22px] tw:[&_em]:[height:22px] tw:[&_em]:[place-items:center] tw:[&_em]:[border-radius:50%] tw:[&_em]:[background:var(--light,_#f1f4f9)] tw:[&_em]:[color:var(--muted)] tw:[&_em]:[font-size:11px] tw:[&_em]:[font-style:normal] tw:[&_em]:[font-weight:600] tw:[&>span]:[display:grid] tw:[&>span]:[flex:1] tw:[&>span]:[gap:5px] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_small]:[display:flex] tw:[&_small]:[align-items:center] tw:[&_small]:[gap:4px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px] tw:[&_small_svg]:[width:11px] tw:[&_small_svg]:[height:11px] tw:[&_small_svg]:[color:var(--gold)] tw:[&_small_svg]:[fill:var(--gold)] tw:[&_i]:[display:block] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#e0e6ef] tw:[&_i.is-short]:[width:60%] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)] tw:[&.is-you_em]:[background:var(--blue)] tw:[&.is-you_em]:[color:#fff]">
          <em>3</em>
          <span>
            <i />
            <i className="is-short" />
          </span>
        </div>
      </div>

      {/* 3. Profile, Call tapped */}
      <div className="dm-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dm-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 2 } as CSSProperties}>
        <div className="dm-phone-cover tw:[height:100px] tw:[border-radius:16px] tw:[background:linear-gradient(135deg,_#cddcfb,_#e6dcff)]" />
        <p className="dm-phone-name tw:[margin-top:14px] tw:[font-size:19px] tw:[font-weight:500] tw:[letter-spacing:-0.02em]">Your business</p>
        <p className="dm-phone-rating tw:[display:flex] tw:[flex-wrap:wrap] tw:[align-items:center] tw:[gap:4px_6px] tw:[margin-top:4px] tw:[color:var(--muted)] tw:[font-size:12px] tw:[&_span]:[display:flex] tw:[&_span]:[gap:1px] tw:[&_svg]:[width:11px] tw:[&_svg]:[height:11px] tw:[&_svg]:[color:var(--gold)] tw:[&_svg]:[fill:var(--gold)]">
          4.9
          <span>
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} />
            ))}
          </span>
          Plumber in Plano, TX
        </p>
        <div className="dm-phone-actions tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[gap:6px] tw:[margin:16px_0_18px] tw:[&>span]:[position:relative] tw:[&>span]:[display:flex] tw:[&>span]:[flex-direction:column] tw:[&>span]:[align-items:center] tw:[&>span]:[gap:4px] tw:[&>span]:[padding:11px_0_9px] tw:[&>span]:[border-radius:14px] tw:[&>span]:[background:var(--blue-soft)] tw:[&>span]:[color:var(--blue-dark)] tw:[&>span]:[font-size:11.5px] tw:[&>span]:[font-weight:500] tw:[&_.is-call]:[background:var(--blue)] tw:[&_.is-call]:[color:#fff]">
          <span className="is-call">
            <FiPhone />
            Call
            <i className="dm-phone-tap tw:[position:absolute] tw:[top:50%] tw:[left:50%] tw:[width:44px] tw:[height:44px] tw:[margin:-22px_0_0_-22px] tw:[border:2px_solid_rgba(255,_255,_255,_0.9)] tw:[border-radius:50%] tw:[opacity:0] tw:[animation:dm-tap_12s_ease-out_infinite_both] tw:[&&]:[animation-delay:6s]" />
          </span>
          <span>
            <FiNavigation />
            Directions
          </span>
          <span>
            <FiGlobe />
            Website
          </span>
        </div>
        <i className="dm-phone-line tw:[display:block] tw:[height:8px] tw:[margin-top:8px] tw:[border-radius:4px] tw:[background:#e5eaf2] tw:[&.is-short]:[width:65%]" />
        <i className="dm-phone-line is-short tw:[display:block] tw:[height:8px] tw:[margin-top:8px] tw:[border-radius:4px] tw:[background:#e5eaf2] tw:[&.is-short]:[width:65%]" />
      </div>

      {/* 4. Booked */}
      <div className="dm-phone-screen dm-phone-screen--done tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dm-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1] tw:[display:flex] tw:[flex-direction:column] tw:[align-items:center] tw:[text-align:center]" style={{ "--i": 3 } as CSSProperties}>
        <span className="dm-phone-check tw:[display:grid] tw:[width:70px] tw:[height:70px] tw:[margin:64px_0_16px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--green)] tw:[color:#fff] tw:[font-size:32px] tw:[box-shadow:0_0_0_10px_var(--green-soft)]">
          <FiCheck />
        </span>
        <p className="dm-phone-done tw:[font-size:22px] tw:[font-weight:500] tw:[letter-spacing:-0.02em]">Job booked</p>
        <p className="dm-phone-when tw:[display:flex] tw:[align-items:center] tw:[gap:6px] tw:[margin-top:6px] tw:[color:var(--muted)] tw:[font-size:13px]">
          <FiCalendar /> Tue, 10:00 AM · Plano
        </p>
        <div className="dm-phone-ticket tw:[display:grid] tw:[gap:2px] tw:[width:100%] tw:[margin-top:26px] tw:[padding:14px_16px] tw:[border:1px_dashed_#c9d3e3] tw:[border-radius:14px] tw:[text-align:left] tw:[&_span]:[font-size:14px] tw:[&_span]:[font-weight:500] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:12px]">
          <span>Leak repair</span>
          <small>From a Google Maps call</small>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------- coverage grid */

/** A 7×7 rank grid around a business pin. Each point turns from red to
    amber to green in a 10s loop, delayed by its distance from the centre
    (`--r`), so coverage visibly spreads outward; the outer ring only
    reaches amber. Illustration only, captioned on the page. */
export function CoverageGrid() {
  const size = 7;
  const mid = 3;
  return (
    <div className="dm-cov tw:[padding:20px] tw:[border-radius:28px] tw:[background:#fff] tw:max-bssm:[padding:14px]" aria-hidden="true">
      <div className="dm-cov-months tw:[position:relative] tw:[display:flex] tw:[justify-content:space-between] tw:[margin-bottom:18px] tw:[padding-bottom:12px] tw:[&_span]:[padding:6px_14px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[color:var(--muted)] tw:[&_span]:[font-size:13px] tw:[&_span]:[font-weight:500] tw:[&_span]:[animation:dm-month_10s_ease_infinite_both] tw:[&&_span]:[animation-delay:calc(var(--i)_*_3.333s)]">
        <span style={{ "--i": 0 } as CSSProperties}>Month 1</span>
        <span style={{ "--i": 1 } as CSSProperties}>Month 3</span>
        <span style={{ "--i": 2 } as CSSProperties}>Month 6</span>
        <i className="dm-cov-bar tw:[position:absolute] tw:[bottom:0] tw:[left:0] tw:[width:100%] tw:[height:3px] tw:[border-radius:3px] tw:[background:var(--blue)] tw:[transform-origin:left] tw:[animation:dm-cov-bar_10s_linear_infinite_both]" />
      </div>
      <div className="dm-cov-map tw:[position:relative] tw:[aspect-ratio:1] tw:[overflow:hidden] tw:[border-radius:20px] tw:[background:#edf2fa]">
        <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="dm-cov-roads tw:[position:absolute] tw:[inset:0] tw:[width:100%] tw:[height:100%] tw:[fill:none] tw:[stroke:#fff] tw:[&&]:[stroke-width:12]">
          <path d="M-10 250 C 80 230 160 290 250 240 S 360 170 410 190" />
          <path d="M120 -10 C 130 120 100 230 140 410" />
          <path d="M290 -10 C 270 100 310 260 280 410" />
          <path d="M-10 90 C 120 110 260 60 410 100" />
        </svg>
        <div className="dm-cov-grid tw:[position:absolute] tw:[inset:6%] tw:[display:grid] tw:[grid-template-columns:repeat(7,_minmax(0,_1fr))] tw:[grid-template-rows:repeat(7,_minmax(0,_1fr))] tw:[place-items:center]">
          {Array.from({ length: size * size }, (_, i) => {
            const ring = Math.max(
              Math.abs(Math.floor(i / size) - mid),
              Math.abs((i % size) - mid),
            );
            const centre = i === mid * size + mid;
            return (
              <span
                key={i}
                className={`dm-cov-dot tw:[display:grid] tw:[width:62%] tw:[aspect-ratio:1] tw:[place-items:center] tw:[border:2px_solid_#fff] tw:[border-radius:50%] tw:[background:var(--green)] tw:[box-shadow:0_4px_10px_-4px_rgba(12,_21,_38,_0.35)] tw:[animation:dm-geo_10s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--r)_*_0.45s)] tw:[&.is-edge]:[background:var(--gold)] tw:[&.is-edge]:[animation-name:dm-geo-edge] tw:[&.is-you]:[z-index:1] tw:[&.is-you]:[width:78%] tw:[&.is-you]:[background:var(--blue)] tw:[&.is-you]:[color:#fff] tw:[&.is-you]:[font-size:15px] tw:[&.is-you]:[box-shadow:0_0_0_6px_rgba(37,_103,_232,_0.2)] tw:[&.is-you]:[animation:none] ${centre ? " is-you" : ""}${ring === 3 ? " is-edge" : ""}`}
                style={{ "--r": ring } as CSSProperties}
              >
                {centre ? <FiMapPin /> : null}
              </span>
            );
          })}
        </div>
      </div>
      <ul className="dm-cov-legend tw:[display:flex] tw:[flex-wrap:wrap] tw:[gap:8px_18px] tw:[margin-top:14px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:center] tw:[&_li]:[gap:7px] tw:[&_li]:[color:var(--text)] tw:[&_li]:[font-size:12.5px] tw:[&_i]:[width:11px] tw:[&_i]:[height:11px] tw:[&_i]:[border-radius:50%] tw:[&_.is-top]:[background:var(--green)] tw:[&_.is-mid]:[background:#f0b429] tw:[&_.is-low]:[background:#e2574c]">
        <li>
          <i className="is-top" /> Top 3
        </li>
        <li>
          <i className="is-mid" /> 4–10
        </li>
        <li>
          <i className="is-low" /> 11–20
        </li>
      </ul>
    </div>
  );
}

/* --------------------------------------------- Google rating badge */

/** Google "G" with the 5.0 rating, linking to the Google Maps profile. */
export function GoogleRatingBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="dm-google tw:[display:inline-flex] tw:[align-items:center] tw:[gap:12px] tw:[padding:10px_18px_10px_12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:18px] tw:[background:#fff] tw:[color:var(--ink)] tw:[text-align:left] tw:[transition:border-color_0.2s_ease,_transform_0.2s_ease] tw:[&:hover]:[border-color:#c9d6ee] tw:[&:hover]:[transform:translateY(-2px)] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:12.5px] tw:[&_small]:[font-weight:500]"
      aria-label="Zonic Media is rated 5.0 on Google. See our Google reviews"
    >
      <svg viewBox="0 0 48 48" className="dm-google-g tw:[flex:none] tw:[width:38px] tw:[height:38px]" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
      </svg>
      <span className="dm-google-text tw:[display:grid] tw:[gap:1px]">
        <span className="dm-google-score tw:[display:flex] tw:[align-items:center] tw:[gap:8px] tw:[&_b]:[font-size:22px] tw:[&_b]:[font-weight:600] tw:[&_b]:[line-height:1]">
          <b>5.0</b>
          <span className="dm-google-stars tw:[display:flex] tw:[gap:2px] tw:[&_svg]:[width:15px] tw:[&_svg]:[height:15px] tw:[&_svg]:[color:#fbbc05] tw:[&_svg]:[fill:#fbbc05]" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} />
            ))}
          </span>
        </span>
        <small>Google Reviews</small>
      </span>
    </a>
  );
}
