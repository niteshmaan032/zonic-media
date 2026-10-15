import type { CSSProperties } from "react";
import {
  FiCheck,
  FiGrid,
  FiLock,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiSend,
  FiStar,
  FiZap,
} from "react-icons/fi";

/* Web-design UI pieces for /services/dallas-fort-worth/web-design-agency.
   They reuse the panel, chip, phone and timeline styles from
   dfwMarketing.css and add their own in dfwWebDesign.css. Everything is an
   illustration ("Your business"); no invented client numbers. */

/* --------------------------------------------- feature panels */

/** A website hero with Call / Quote buttons and a short quote form; a
    "New quote request" toast pops in on a loop. */
export function LeadPanel() {
  return (
    <div className="dfw-panel" data-anim>
      <div className="dfw-mock dfw-mock--site">
        <div className="dfw-mock__bar">
          <i />
          <i />
          <i />
          <span>yourbusiness.com</span>
        </div>
        <p className="dfw-mock__h">Your Business in Dallas, TX</p>
        <i className="dfw-mock__line" />
        <i className="dfw-mock__line dfw-mock__line--short" />
        <div className="dfw-mock__btns">
          <span className="is-primary">
            <FiPhone /> Call now
          </span>
          <span>Get a quote</span>
        </div>
        <div className="dfw-wlead__form">
          <span className="dfw-wlead__field">
            <small>Name</small>
            <i />
          </span>
          <span className="dfw-wlead__field">
            <small>Phone</small>
            <i />
          </span>
          <span className="dfw-wlead__submit">Request a free quote</span>
        </div>
      </div>
      <div className="dfw-chip dfw-chip--gold">
        <b>Every page</b>
        <span>has a call button and quote form</span>
      </div>
      <div className="dfw-wlead__toast">
        <span>
          <FiCheck />
        </span>
        New quote request
      </div>
    </div>
  );
}

const VITALS = [
  { code: "LCP", name: "Largest Contentful Paint" },
  { code: "INP", name: "Interaction to Next Paint" },
  { code: "CLS", name: "Cumulative Layout Shift" },
];

/** Core Web Vitals card: a ring that fills and three metrics turning
    "Good" in turn. Labels only, no invented timings. */
export function SpeedPanel() {
  return (
    <div className="dfw-panel" data-anim>
      <div className="dfw-mock dfw-wspeed">
        <div className="dfw-mock__head">
          <span>
            <FiZap /> Core Web Vitals
          </span>
          <small>Mobile</small>
        </div>
        <div className="dfw-wspeed__ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="50" className="dfw-wspeed__track" />
            <circle cx="60" cy="60" r="50" className="dfw-wspeed__fill" pathLength={1} />
          </svg>
          <span>
            <b>Passed</b>
            <small>Google’s assessment</small>
          </span>
        </div>
        <ul className="dfw-wspeed__list">
          {VITALS.map((v, i) => (
            <li key={v.code} style={{ "--i": i } as CSSProperties}>
              <span>
                <b>{v.code}</b>
                <small>{v.name}</small>
              </span>
              <em>Good</em>
            </li>
          ))}
        </ul>
      </div>
      <div className="dfw-chip dfw-chip--ink">
        <b>Passed</b>
        <span>at launch, on every build</span>
      </div>
    </div>
  );
}

/* --------------------------------------------- visit-to-lead phone */

/** Four phone screens in the shared 12s loop (3s each): Google result,
    homepage, quote form, request sent. */
export function WebJourneyPhone() {
  return (
    <div className="dfw-phone" aria-hidden="true">
      <span className="dfw-phone__notch" />

      {/* 1. Google result */}
      <div className="dfw-phone__screen" style={{ "--i": 0 } as CSSProperties}>
        <div className="dfw-phone__search dfw-wj__search">
          <FiSearch />
          <span>roof repair plano</span>
        </div>
        <div className="dfw-wj__result is-you">
          <small>yourbusiness.com › plano</small>
          <b>Roof Repair in Plano, TX | Your Business</b>
          <i />
          <i className="is-short" />
          <span className="dfw-wj__tap" />
        </div>
        <div className="dfw-wj__result">
          <small>
            <i className="is-tiny" />
          </small>
          <i />
          <i className="is-short" />
        </div>
        <div className="dfw-wj__result">
          <small>
            <i className="is-tiny" />
          </small>
          <i />
          <i className="is-short" />
        </div>
      </div>

      {/* 2. Homepage */}
      <div className="dfw-phone__screen" style={{ "--i": 1 } as CSSProperties}>
        <div className="dfw-wj__nav">
          <b>Your Business</b>
          <span>
            <FiPhone /> Call
          </span>
        </div>
        <div className="dfw-wj__hero">
          <p>Roof repair in Plano, done right the first time</p>
          <span className="dfw-wj__stars">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} />
            ))}
            <small>Google reviews</small>
          </span>
          <span className="dfw-wj__btn">Get a free quote</span>
        </div>
        <div className="dfw-wj__tiles">
          <span>Roof repair</span>
          <span>Inspections</span>
          <span>Replacements</span>
          <span>Gutters</span>
        </div>
        <p className="dfw-wj__area">
          <FiMapPin /> Serving Plano, Frisco and Allen
        </p>
      </div>

      {/* 3. Quote form */}
      <div className="dfw-phone__screen" style={{ "--i": 2 } as CSSProperties}>
        <p className="dfw-wj__title">Request a free quote</p>
        <span className="dfw-wj__field">
          <small>Name</small>
          <span className="dfw-wj__type dfw-wj__type--a">Maria G.</span>
        </span>
        <span className="dfw-wj__field">
          <small>Phone</small>
          <span className="dfw-wj__type dfw-wj__type--b">(214) 555-0142</span>
        </span>
        <span className="dfw-wj__field dfw-wj__field--tall">
          <small>What do you need?</small>
          <span className="dfw-wj__type dfw-wj__type--c">Leak after the storm</span>
        </span>
        <span className="dfw-wj__send">
          <FiSend /> Send request
          <i className="dfw-phone__tap" />
        </span>
      </div>

      {/* 4. Sent */}
      <div
        className="dfw-phone__screen dfw-phone__screen--done"
        style={{ "--i": 3 } as CSSProperties}
      >
        <span className="dfw-phone__check">
          <FiCheck />
        </span>
        <p className="dfw-phone__done">Request sent</p>
        <p className="dfw-phone__when">We’ll be in touch shortly</p>
        <div className="dfw-phone__ticket">
          <span>New lead: roof repair</span>
          <small>From your Plano page</small>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------- website build */

/** A homepage that builds itself in a 10s loop. One layout morphs in
    place: dashed wireframe (0–3.3s), full design (3.3–6.6s), then live
    with a "Live" badge, a Core Web Vitals chip and a new-lead toast
    (6.6–10s). Stage tabs reuse the coverage timeline styles. With reduced
    motion the finished, live page shows. */
export function SiteBuild() {
  return (
    <div className="dfw-cov dfw-wb" aria-hidden="true">
      <div className="dfw-cov__months">
        <span style={{ "--i": 0 } as CSSProperties}>Wireframe</span>
        <span style={{ "--i": 1 } as CSSProperties}>Design</span>
        <span style={{ "--i": 2 } as CSSProperties}>Live</span>
        <i className="dfw-cov__bar" />
      </div>

      <div className="dfw-wb__browser">
        <div className="dfw-wb__bar">
          <span className="dfw-wb__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="dfw-wb__url">
            <FiLock /> yourbusiness.com
          </span>
          <span className="dfw-wb__live">
            <i /> Live
          </span>
        </div>

        <div className="dfw-wb__page">
          <div className="dfw-wb__nav">
            <span className="dfw-wb__logo wb">
              <span className="dfw-wb__mark" />
              Your Business
            </span>
            <span className="dfw-wb__links">
              <i className="wb" />
              <i className="wb" />
              <i className="wb" />
            </span>
            <span className="dfw-wb__call wb">
              <FiPhone /> Call now
            </span>
          </div>

          <div className="dfw-wb__hero">
            <div className="dfw-wb__copy">
              <span className="dfw-wb__pill wb">Serving Dallas–Fort Worth</span>
              <p className="dfw-wb__h wb">Local service you can count on</p>
              <i className="dfw-wb__line wb" />
              <i className="dfw-wb__line dfw-wb__line--short wb" />
              <span className="dfw-wb__btns">
                <span className="dfw-wb__btn wb">Get a free quote</span>
                <span className="dfw-wb__btn dfw-wb__btn--ghost wb">
                  Our services
                </span>
              </span>
              <span className="dfw-wb__stars wb">
                {[0, 1, 2, 3, 4].map((n) => (
                  <FiStar key={n} />
                ))}
                <small>Google reviews</small>
              </span>
            </div>
            <div className="dfw-wb__img wb">
              {/* Neutral hero image (sun, cloud, hills): no trade shown. */}
              <svg viewBox="0 0 160 130" preserveAspectRatio="xMidYMax meet">
                <circle cx="118" cy="34" r="14" className="dfw-wb__sun" />
                <path d="M30 46 a9 9 0 0 1 17 -3 a7 7 0 0 1 11 6 H30 Z" className="dfw-wb__cloud" />
                <path d="M0 98 L44 62 L78 90 L108 70 L160 104 V130 H0 Z" className="dfw-wb__hill-back" />
                <path d="M0 112 Q 44 92 84 108 T 160 104 V130 H0 Z" className="dfw-wb__hill" />
              </svg>
            </div>
          </div>

          <div className="dfw-wb__cards">
            <span className="dfw-wb__card wb">
              <FiGrid />
              <b>Our services</b>
              <i />
            </span>
            <span className="dfw-wb__card wb">
              <FiStar />
              <b>Reviews</b>
              <i />
            </span>
            <span className="dfw-wb__card wb">
              <FiMapPin />
              <b>Service areas</b>
              <i />
            </span>
          </div>

          <span className="dfw-wb__cwv">
            <FiZap /> Core Web Vitals: Passed
          </span>
          <span className="dfw-wb__toast">
            <span>
              <FiCheck />
            </span>
            New quote request
          </span>
        </div>
      </div>

      <ul className="dfw-cov__legend">
        <li>
          <i className="is-top" /> Mobile-first
        </li>
        <li>
          <i className="is-mid" /> SEO-ready
        </li>
        <li>
          <i className="is-low" /> Tracking connected
        </li>
      </ul>
    </div>
  );
}

/* --------------------------------------------- city pages map */

type MapPin = { name: string; x: number; y: number };

/* The three cities whose pages the card cycles through (3s each, 9s loop). */
const PAGE_CITIES = ["Frisco", "Fort Worth", "Plano"];

/** A drawn DFW map with city pins; a "page live" card cycles through three
    city pages while the matching pin pulses. Pins use real positions (% of
    the box) passed in from the page. Decorative; the county list beside it
    carries the information. */
export function CityPagesMap({ pins }: { pins: MapPin[] }) {
  return (
    <div className="dfw-cmap" aria-hidden="true">
      <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="dfw-cmap__bg">
        <rect width="400" height="400" className="dfw-cmap__land" />
        <path d="M120 40 C 150 30 175 50 168 70 C 160 92 132 92 122 76 C 112 62 104 48 120 40 Z" className="dfw-cmap__lake" />
        <path d="M330 150 C 348 146 356 168 350 190 C 344 208 326 206 322 188 C 318 172 316 154 330 150 Z" className="dfw-cmap__lake" />
        <path d="M0 160 H400 M200 0 V400" className="dfw-cmap__county" />
        <g className="dfw-cmap__roads">
          <path d="M0 258 C 80 250 160 252 256 248 S 360 236 400 230" />
          <path d="M0 300 C 120 312 260 300 400 292" />
          <path d="M256 248 C 220 180 170 110 136 48 L 130 0" />
          <path d="M64 256 C 80 180 110 110 136 48" />
          <path d="M256 248 C 270 180 290 120 320 52 L 330 0" />
          <path d="M240 252 C 238 180 240 110 240 0" />
          <path d="M256 248 C 250 320 240 360 236 400" />
        </g>
      </svg>

      {pins.map((pin) => {
        const k = PAGE_CITIES.indexOf(pin.name);
        return (
          <span
            key={pin.name}
            className={`dfw-cmap__pin${k >= 0 ? " is-page" : ""}`}
            style={
              {
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                "--k": Math.max(k, 0),
              } as CSSProperties
            }
          >
            <i />
            {pin.name}
          </span>
        );
      })}

      <div className="dfw-cmap__card">
        {PAGE_CITIES.map((city, k) => (
          <div
            key={city}
            className="dfw-cmap__page"
            style={{ "--k": k } as CSSProperties}
          >
            <small>
              <FiLock /> yourbusiness.com/
              {city.toLowerCase().replace(" ", "-")}
            </small>
            <b>Web design in {city}, TX</b>
            <i />
            <i className="is-short" />
            <span>
              <FiCheck /> Page live
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
