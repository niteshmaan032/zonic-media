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

/* Shared pieces for /services/dallas-fort-worth-marketing-agency (v3,
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
      className={`dfw-ph${dark ? " dfw-ph--dark" : ""}${src ? " dfw-ph--image" : ""}`}
      aria-hidden={src ? undefined : true}
    >
      {src ? (
        <Image src={src} alt={label} fill sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <svg viewBox="0 0 48 48" className="dfw-ph__glyph">
          <rect x="5" y="9" width="38" height="30" rx="5" />
          <circle cx="17" cy="19" r="4" />
          <path d="M5 33 L17 24 L26 31 L33 26 L43 33" />
        </svg>
      )}
      {/* The caption is a note for the empty slot only; with a real photo
          the label is the image's alt text instead. */}
      {src ? null : (
        <span className="dfw-ph__label">
          {label} <b>{ratio}</b>
        </span>
      )}
    </div>
  );
}

/** A small round skeleton, for avatar stacks. */
export function AvatarPh({ tone }: { tone: string }) {
  return <span className={`dfw-ava dfw-ava--${tone}`} aria-hidden="true" />;
}

/* --------------------------------------------- inline headline icons */

/** A glossy Google-Maps-style pin that sits inside the hero headline. */
export function InlinePin({ id = "dfw-pin" }: { id?: string }) {
  return (
    <span className="dfw-inline-icon dfw-inline-icon--pin" aria-hidden="true">
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
        <ellipse cx="32" cy="74" rx="14" ry="4" className="dfw-pin-shadow" />
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
    <span className="dfw-inline-icon dfw-inline-icon--chat" aria-hidden="true">
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
      className={`dfw-hand-arrow ${className}`}
      aria-hidden="true"
    >
      <path d="M8 40 C 40 20 86 6 90 22 C 94 40 30 56 44 58 C 110 62 168 70 196 140" />
      <path d="M170 124 L 197 144 L 206 110" />
    </svg>
  );
}

export function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={`dfw-sparks ${className}`} aria-hidden="true">
      <path d="M40 10 L 30 40" />
      <path d="M44 50 L 58 44" />
      <path d="M46 70 C 70 70 96 78 112 92" />
    </svg>
  );
}

/** Round badge with rotating text, like a stamp. */
export function RatingBadge() {
  return (
    <div className="dfw-badge" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="dfw-badge__ring">
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
      <span className="dfw-badge__core">
        <FiStar />
      </span>
    </div>
  );
}

/* --------------------------------------------- feature panels (ref 2) */

export function MapPackPanel() {
  return (
    <div className="dfw-panel" data-anim>
      <div className="dfw-mock dfw-mock--pack">
        <div className="dfw-mock__search">
          <FiMapPin /> roof repair near me
        </div>
        <p className="dfw-mock__cap">Places</p>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`dfw-mock__row${i === 0 ? " is-you" : ""}`}
            style={{ "--i": i } as CSSProperties}
          >
            <span className="dfw-mock__num">{i + 1}</span>
            <span className="dfw-mock__lines">
              {i === 0 ? <b>Your business</b> : <i />}
              <span className="dfw-mock__stars">
                {[0, 1, 2, 3, 4].map((n) => (
                  <FiStar key={n} />
                ))}
              </span>
            </span>
            {i === 0 ? (
              <span className="dfw-mock__call">
                <FiPhone />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="dfw-chip dfw-chip--gold">
        <b>Top 3</b>
        <span>where customers search</span>
      </div>
      <span className="dfw-bubble dfw-bubble--green">
        <FiMapPin />
      </span>
    </div>
  );
}

const CITY_TABS = ["Dallas", "Plano", "Frisco", "Fort Worth"];

export function CityPagesPanel() {
  return (
    <div className="dfw-panel" data-anim>
      <div className="dfw-mock dfw-mock--site">
        <div className="dfw-mock__bar">
          <i />
          <i />
          <i />
          <span>yourbusiness.com/plano</span>
        </div>
        <div className="dfw-mock__tabs">
          {CITY_TABS.map((city, i) => (
            <span key={city} className={i === 1 ? "is-on" : undefined}>
              {city}
            </span>
          ))}
        </div>
        <p className="dfw-mock__h">Roof repair in Plano, TX</p>
        <i className="dfw-mock__line" />
        <i className="dfw-mock__line dfw-mock__line--short" />
        <div className="dfw-mock__btns">
          <span className="is-primary">
            <FiPhone /> Call now
          </span>
          <span>Free inspection</span>
        </div>
      </div>
      <div className="dfw-chip dfw-chip--blue">
        <b>1 page</b>
        <span>per city you serve</span>
      </div>
    </div>
  );
}

export function ReportPanel() {
  return (
    <div className="dfw-panel" data-anim>
      <div className="dfw-mock dfw-mock--report">
        <div className="dfw-mock__head">
          <span>
            <FiBarChart2 /> Monthly report
          </span>
          <small>Example</small>
        </div>
        <div className="dfw-mock__kpis">
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
        <div className="dfw-mock__bars">
          {[30, 42, 38, 52, 60, 58, 72, 80].map((h, i) => (
            <i key={i} style={{ "--h": `${h}%`, "--i": i } as CSSProperties} />
          ))}
        </div>
      </div>
      <div className="dfw-chip dfw-chip--ink">
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
    <div className="dfw-phone" aria-hidden="true">
      <span className="dfw-phone__notch" />

      {/* 1. Search */}
      <div className="dfw-phone__screen" style={{ "--i": 0 } as CSSProperties}>
        <p className="dfw-phone__brand">
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </p>
        <div className="dfw-phone__search">
          <FiSearch />
          <span className="dfw-phone__typing">plumber near me</span>
          <FiMic />
        </div>
        <ul className="dfw-phone__suggest">
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
      <div className="dfw-phone__screen" style={{ "--i": 1 } as CSSProperties}>
        <div className="dfw-phone__map">
          <svg viewBox="0 0 220 110" preserveAspectRatio="none">
            <path d="M-10 70 C 50 50 90 90 150 60 S 210 30 240 40" />
            <path d="M60 -10 C 70 40 50 80 70 130" />
            <path d="M150 -10 C 140 40 170 70 160 130" />
          </svg>
          <span className="dfw-phone__pin dfw-phone__pin--you">
            <FiMapPin />
          </span>
          <span className="dfw-phone__pin dfw-phone__pin--a" />
          <span className="dfw-phone__pin dfw-phone__pin--b" />
        </div>
        <p className="dfw-phone__cap">Places</p>
        <div className="dfw-phone__row is-you">
          <em>1</em>
          <span>
            <b>Your business</b>
            <small>
              <FiStar /> 4.9 · Open now
            </small>
          </span>
        </div>
        <div className="dfw-phone__row">
          <em>2</em>
          <span>
            <i />
            <i className="is-short" />
          </span>
        </div>
        <div className="dfw-phone__row">
          <em>3</em>
          <span>
            <i />
            <i className="is-short" />
          </span>
        </div>
      </div>

      {/* 3. Profile, Call tapped */}
      <div className="dfw-phone__screen" style={{ "--i": 2 } as CSSProperties}>
        <div className="dfw-phone__cover" />
        <p className="dfw-phone__name">Your business</p>
        <p className="dfw-phone__rating">
          4.9
          <span>
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} />
            ))}
          </span>
          Plumber in Plano, TX
        </p>
        <div className="dfw-phone__actions">
          <span className="is-call">
            <FiPhone />
            Call
            <i className="dfw-phone__tap" />
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
        <i className="dfw-phone__line" />
        <i className="dfw-phone__line is-short" />
      </div>

      {/* 4. Booked */}
      <div className="dfw-phone__screen dfw-phone__screen--done" style={{ "--i": 3 } as CSSProperties}>
        <span className="dfw-phone__check">
          <FiCheck />
        </span>
        <p className="dfw-phone__done">Job booked</p>
        <p className="dfw-phone__when">
          <FiCalendar /> Tue, 10:00 AM · Plano
        </p>
        <div className="dfw-phone__ticket">
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
    <div className="dfw-cov" aria-hidden="true">
      <div className="dfw-cov__months">
        <span style={{ "--i": 0 } as CSSProperties}>Month 1</span>
        <span style={{ "--i": 1 } as CSSProperties}>Month 3</span>
        <span style={{ "--i": 2 } as CSSProperties}>Month 6</span>
        <i className="dfw-cov__bar" />
      </div>
      <div className="dfw-cov__map">
        <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="dfw-cov__roads">
          <path d="M-10 250 C 80 230 160 290 250 240 S 360 170 410 190" />
          <path d="M120 -10 C 130 120 100 230 140 410" />
          <path d="M290 -10 C 270 100 310 260 280 410" />
          <path d="M-10 90 C 120 110 260 60 410 100" />
        </svg>
        <div className="dfw-cov__grid">
          {Array.from({ length: size * size }, (_, i) => {
            const ring = Math.max(
              Math.abs(Math.floor(i / size) - mid),
              Math.abs((i % size) - mid),
            );
            const centre = i === mid * size + mid;
            return (
              <span
                key={i}
                className={`dfw-cov__dot${centre ? " is-you" : ""}${ring === 3 ? " is-edge" : ""}`}
                style={{ "--r": ring } as CSSProperties}
              >
                {centre ? <FiMapPin /> : null}
              </span>
            );
          })}
        </div>
      </div>
      <ul className="dfw-cov__legend">
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
