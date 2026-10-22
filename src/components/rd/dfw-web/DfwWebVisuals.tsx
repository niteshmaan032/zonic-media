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
    <div className="dw-panel tw:[.dw-feature--flip_&]:[order:2] tw:[position:relative] tw:[display:grid] tw:[min-height:400px] tw:[padding:44px_36px] tw:[place-items:center] tw:[border-radius:var(--r-xl)] tw:[background:var(--panel)] tw:max-bslg:[.dw-feature--flip_&]:[order:0] tw:max-bssm:[min-height:380px] tw:max-bssm:[padding:92px_18px_30px]" data-anim>
      <div className="dw-mock dw-mock--site tw:[width:min(100%,_390px)] tw:[padding:22px] tw:[border-radius:24px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[text-align:left] tw:max-bssm:[padding:16px]">
        <div className="dw-mock-bar tw:[display:flex] tw:[align-items:center] tw:[gap:5px] tw:[margin:-6px_-6px_16px] tw:[padding:0_4px_12px] tw:[border-bottom:1px_solid_var(--line)] tw:[&>i]:[width:9px] tw:[&>i]:[height:9px] tw:[&>i]:[border-radius:50%] tw:[&>i]:[background:#d5dce7] tw:[&_span]:[margin-left:8px] tw:[&_span]:[padding:4px_12px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[background:var(--panel)] tw:[&_span]:[color:var(--muted)] tw:[&_span]:[font-size:12px]">
          <i />
          <i />
          <i />
          <span>yourbusiness.com</span>
        </div>
        <p className="dw-mock-h tw:[margin-top:20px] tw:[font-size:22px] tw:[font-weight:500] tw:[letter-spacing:-0.02em] tw:[line-height:1.2]">Your Business in Dallas, TX</p>
        <i className="dw-mock-line tw:[display:block] tw:[width:92%] tw:[height:8px] tw:[margin-top:12px] tw:[border-radius:4px] tw:[background:#e2e8f0]" />
        <i className="dw-mock-line dw-mock-line--short tw:[display:block] tw:[height:8px] tw:[border-radius:4px] tw:[background:#e2e8f0] tw:[width:64%] tw:[margin-top:8px]" />
        <div className="dw-mock-btns tw:[display:flex] tw:[gap:8px] tw:[margin-top:20px] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[gap:6px] tw:[&_span]:[padding:9px_14px] tw:[&_span]:[border:1px_solid_var(--line)] tw:[&_span]:[border-radius:999px] tw:[&_span]:[font-size:13px] tw:[&_span]:[font-weight:500] tw:[&_.is-primary]:[border-color:var(--blue)] tw:[&_.is-primary]:[background:var(--blue)] tw:[&_.is-primary]:[color:#fff]">
          <span className="is-primary">
            <FiPhone /> Call now
          </span>
          <span>Get a quote</span>
        </div>
        <div className="dw-wlead-form tw:[display:grid] tw:[gap:8px] tw:[margin-top:18px] tw:[padding:14px] tw:[border:1px_solid_var(--line)] tw:[border-radius:16px] tw:[background:var(--panel)]">
          <span className="dw-wlead-field tw:[display:grid] tw:[gap:4px] tw:[padding:8px_12px] tw:[border-radius:10px] tw:[background:#fff] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px] tw:[&_small]:[font-weight:500] tw:[&_i]:[display:block] tw:[&_i]:[width:60%] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#dfe5ee]">
            <small>Name</small>
            <i />
          </span>
          <span className="dw-wlead-field tw:[display:grid] tw:[gap:4px] tw:[padding:8px_12px] tw:[border-radius:10px] tw:[background:#fff] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px] tw:[&_small]:[font-weight:500] tw:[&_i]:[display:block] tw:[&_i]:[width:60%] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#dfe5ee]">
            <small>Phone</small>
            <i />
          </span>
          <span className="dw-wlead-submit tw:[padding:10px] tw:[border-radius:10px] tw:[background:var(--blue)] tw:[color:#fff] tw:[font-size:13px] tw:[font-weight:500] tw:[text-align:center]">Request a free quote</span>
        </div>
      </div>
      <div className="dw-chip dw-chip--gold tw:[position:absolute] tw:[top:34px] tw:[right:30px] tw:[display:grid] tw:[gap:2px] tw:[padding:20px_26px] tw:[border-radius:24px] tw:[box-shadow:var(--lift)] tw:[animation:dw-float_7s_ease-in-out_infinite] tw:[&_b]:[font-size:40px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.03em] tw:[&_b]:[line-height:1] tw:[&_span]:[font-size:14.5px] tw:[background:var(--gold)] tw:[color:var(--ink)] tw:[.dw-feature--flip_&]:[right:auto] tw:[.dw-feature--flip_&]:[left:30px] tw:max-bssm:[top:18px] tw:max-bssm:[right:18px] tw:max-bssm:[padding:14px_18px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[.dw-feature--flip_&]:[left:18px] tw:max-bssm:[&_b]:[font-size:28px] tw:max-bssm:[&_span]:[font-size:12.5px]">
        <b>Every page</b>
        <span>has a call button and quote form</span>
      </div>
      <div className="dw-wlead-toast tw:[position:absolute] tw:[left:26px] tw:[bottom:40px] tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[padding:12px_16px_12px_12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:16px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[font-size:14px] tw:[font-weight:500] tw:[animation:dw-wtoast_7s_ease_infinite_both] tw:[&>span]:[display:grid] tw:[&>span]:[width:30px] tw:[&>span]:[height:30px] tw:[&>span]:[place-items:center] tw:[&>span]:[border-radius:50%] tw:[&>span]:[background:var(--green)] tw:[&>span]:[color:#fff] tw:[.dw-feature--flip_&]:[left:auto] tw:[.dw-feature--flip_&]:[right:26px] tw:max-bssm:[left:12px] tw:max-bssm:[bottom:16px] tw:max-bssm:[font-size:13px] tw:max-bssm:[.dw-feature--flip_&]:[right:12px]">
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
    <div className="dw-panel tw:[.dw-feature--flip_&]:[order:2] tw:[position:relative] tw:[display:grid] tw:[min-height:400px] tw:[padding:44px_36px] tw:[place-items:center] tw:[border-radius:var(--r-xl)] tw:[background:var(--panel)] tw:max-bslg:[.dw-feature--flip_&]:[order:0] tw:max-bssm:[min-height:380px] tw:max-bssm:[padding:92px_18px_30px]" data-anim>
      <div className="dw-mock dw-wspeed tw:[width:min(100%,_390px)] tw:[padding:22px] tw:[border-radius:24px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[text-align:left] tw:[margin-top:64px] tw:max-bssm:[padding:16px]">
        <div className="dw-mock-head tw:[display:flex] tw:[align-items:center] tw:[justify-content:space-between] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[gap:8px] tw:[&_span]:[font-size:15px] tw:[&_span]:[font-weight:500] tw:[&_svg]:[color:var(--blue)] tw:[&_small]:[padding:3px_10px] tw:[&_small]:[border-radius:999px] tw:[&_small]:[background:var(--panel)] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px]">
          <span>
            <FiZap /> Core Web Vitals
          </span>
          <small>Mobile</small>
        </div>
        <div className="dw-wspeed-ring tw:[position:relative] tw:[display:grid] tw:[width:150px] tw:[height:150px] tw:[margin:18px_auto_16px] tw:[place-items:center] tw:[&_svg]:[position:absolute] tw:[&_svg]:[inset:0] tw:[&_svg]:[width:100%] tw:[&_svg]:[height:100%] tw:[&_svg]:[transform:rotate(-90deg)] tw:[&>span]:[position:relative] tw:[&>span]:[display:grid] tw:[&>span]:[text-align:center] tw:[&_b]:[color:var(--green)] tw:[&_b]:[font-size:22px] tw:[&_b]:[font-weight:600] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px] tw:max-bssm:[width:124px] tw:max-bssm:[height:124px]">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="50" className="dw-wspeed-track tw:[fill:none] tw:[stroke:var(--green-soft)] tw:[&&]:[stroke-width:10]" />
            <circle cx="60" cy="60" r="50" className="dw-wspeed-fill tw:[fill:none] tw:[stroke:var(--green)] tw:[&&]:[stroke-width:10] tw:[&&]:[stroke-linecap:round] tw:[&&]:[stroke-dasharray:1] tw:[&&]:[stroke-dashoffset:0] tw:[animation:dw-wring_7s_ease_infinite_both]" pathLength={1} />
          </svg>
          <span>
            <b>Passed</b>
            <small>Google’s assessment</small>
          </span>
        </div>
        <ul className="dw-wspeed-list tw:[display:grid] tw:[gap:8px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:center] tw:[&_li]:[justify-content:space-between] tw:[&_li]:[gap:12px] tw:[&_li]:[padding:10px_12px] tw:[&_li]:[border:1px_solid_var(--line)] tw:[&_li]:[border-radius:14px] tw:[&_li>span]:[display:grid] tw:[&_b]:[font-size:14px] tw:[&_b]:[font-weight:600] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11.5px] tw:[&_em]:[padding:4px_12px] tw:[&_em]:[border-radius:999px] tw:[&_em]:[background:var(--green-soft)] tw:[&_em]:[color:#1f7a3a] tw:[&_em]:[font-size:12px] tw:[&_em]:[font-style:normal] tw:[&_em]:[font-weight:600] tw:[&_em]:[animation:dw-wgood_7s_ease_infinite_both] tw:[&&_em]:[animation-delay:calc(0.6s_+_var(--i)_*_0.45s)]">
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
      <div className="dw-chip dw-chip--ink tw:[position:absolute] tw:[top:34px] tw:[right:30px] tw:[display:grid] tw:[gap:2px] tw:[padding:20px_26px] tw:[border-radius:24px] tw:[box-shadow:var(--lift)] tw:[animation:dw-float_7s_ease-in-out_infinite] tw:[&_b]:[font-size:40px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.03em] tw:[&_b]:[line-height:1] tw:[&_span]:[font-size:14.5px] tw:[background:var(--ink)] tw:[color:#fff] tw:[.dw-feature--flip_&]:[right:auto] tw:[.dw-feature--flip_&]:[left:30px] tw:max-bssm:[top:18px] tw:max-bssm:[right:18px] tw:max-bssm:[padding:14px_18px] tw:max-bssm:[border-radius:18px] tw:max-bssm:[.dw-feature--flip_&]:[left:18px] tw:max-bssm:[&_b]:[font-size:28px] tw:max-bssm:[&_span]:[font-size:12.5px]">
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
    <div className="dw-phone tw:[position:relative] tw:[width:280px] tw:[height:540px] tw:[overflow:hidden] tw:[border:10px_solid_var(--ink)] tw:[border-radius:44px] tw:[background:#fff] tw:[box-shadow:0_40px_70px_-40px_rgba(12,_21,_38,_0.55)] tw:[text-align:left] tw:max-bssm:[width:260px] tw:max-bssm:[height:520px]" aria-hidden="true">
      <span className="dw-phone-notch tw:[position:absolute] tw:[z-index:3] tw:[top:8px] tw:[left:50%] tw:[width:86px] tw:[height:22px] tw:[border-radius:14px] tw:[background:var(--ink)] tw:[transform:translateX(-50%)]" />

      {/* 1. Google result */}
      <div className="dw-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dw-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 0 } as CSSProperties}>
        <div className="dw-phone-search dw-wj-search tw:[display:flex] tw:[align-items:center] tw:[gap:8px] tw:[padding:10px_14px] tw:[border:1px_solid_var(--line)] tw:[border-radius:999px] tw:[box-shadow:0_6px_16px_-10px_rgba(12,_21,_38,_0.3)] tw:[color:var(--muted)] tw:[font-size:13.5px] tw:[&_svg:last-child]:[margin-left:auto] tw:[&_svg:last-child]:[color:var(--blue)] tw:[margin-bottom:14px] tw:[&_span]:[color:var(--ink)]">
          <FiSearch />
          <span>roof repair plano</span>
        </div>
        <div className="dw-wj-result is-you tw:[position:relative] tw:[display:grid] tw:[gap:5px] tw:[margin-top:8px] tw:[padding:12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:14px] tw:[&_small]:[color:#1f7a3a] tw:[&_small]:[font-size:11px] tw:[&_b]:[color:#1a0dab] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_b]:[line-height:1.3] tw:[&_i]:[display:block] tw:[&_i]:[height:6px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#e2e8f0] tw:[&_i.is-short]:[width:65%] tw:[&_i.is-tiny]:[width:40%] tw:[&_i.is-tiny]:[height:5px] tw:[&_i.is-tiny]:[background:#cfe8d6] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)]">
          <small>yourbusiness.com › plano</small>
          <b>Roof Repair in Plano, TX | Your Business</b>
          <i />
          <i className="is-short" />
          <span className="dw-wj-tap tw:[position:absolute] tw:[top:46%] tw:[left:55%] tw:[width:40px] tw:[height:40px] tw:[margin:-20px_0_0_-20px] tw:[border:2px_solid_var(--blue)] tw:[border-radius:50%] tw:[opacity:0] tw:[animation:dw-tap_12s_ease-out_infinite_both] tw:[&&]:[animation-delay:0.6s]" />
        </div>
        <div className="dw-wj-result tw:[position:relative] tw:[display:grid] tw:[gap:5px] tw:[margin-top:8px] tw:[padding:12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:14px] tw:[&_small]:[color:#1f7a3a] tw:[&_small]:[font-size:11px] tw:[&_b]:[color:#1a0dab] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_b]:[line-height:1.3] tw:[&_i]:[display:block] tw:[&_i]:[height:6px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#e2e8f0] tw:[&_i.is-short]:[width:65%] tw:[&_i.is-tiny]:[width:40%] tw:[&_i.is-tiny]:[height:5px] tw:[&_i.is-tiny]:[background:#cfe8d6] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)]">
          <small>
            <i className="is-tiny" />
          </small>
          <i />
          <i className="is-short" />
        </div>
        <div className="dw-wj-result tw:[position:relative] tw:[display:grid] tw:[gap:5px] tw:[margin-top:8px] tw:[padding:12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:14px] tw:[&_small]:[color:#1f7a3a] tw:[&_small]:[font-size:11px] tw:[&_b]:[color:#1a0dab] tw:[&_b]:[font-size:13.5px] tw:[&_b]:[font-weight:500] tw:[&_b]:[line-height:1.3] tw:[&_i]:[display:block] tw:[&_i]:[height:6px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#e2e8f0] tw:[&_i.is-short]:[width:65%] tw:[&_i.is-tiny]:[width:40%] tw:[&_i.is-tiny]:[height:5px] tw:[&_i.is-tiny]:[background:#cfe8d6] tw:[&.is-you]:[border-color:#bcd2fb] tw:[&.is-you]:[background:var(--blue-soft)]">
          <small>
            <i className="is-tiny" />
          </small>
          <i />
          <i className="is-short" />
        </div>
      </div>

      {/* 2. Homepage */}
      <div className="dw-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dw-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 1 } as CSSProperties}>
        <div className="dw-wj-nav tw:[display:flex] tw:[align-items:center] tw:[justify-content:space-between] tw:[padding-bottom:10px] tw:[border-bottom:1px_solid_var(--line)] tw:[&_b]:[font-size:13px] tw:[&_b]:[font-weight:600] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[gap:4px] tw:[&_span]:[padding:5px_10px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[background:var(--blue)] tw:[&_span]:[color:#fff] tw:[&_span]:[font-size:11px] tw:[&_span]:[font-weight:500]">
          <b>Your Business</b>
          <span>
            <FiPhone /> Call
          </span>
        </div>
        <div className="dw-wj-hero tw:[margin-top:12px] tw:[padding:16px_14px] tw:[border-radius:16px] tw:[background:linear-gradient(135deg,_#e3ecfd,_#efe8ff)] tw:[&_p]:[font-size:17px] tw:[&_p]:[font-weight:500] tw:[&_p]:[letter-spacing:-0.02em] tw:[&_p]:[line-height:1.2]">
          <p>Roof repair in Plano, done right the first time</p>
          <span className="dw-wj-stars tw:[display:flex] tw:[align-items:center] tw:[gap:2px] tw:[margin-top:10px] tw:[&_svg]:[width:11px] tw:[&_svg]:[height:11px] tw:[&_svg]:[color:var(--gold)] tw:[&_svg]:[fill:var(--gold)] tw:[&_small]:[margin-left:6px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px]">
            {[0, 1, 2, 3, 4].map((n) => (
              <FiStar key={n} />
            ))}
            <small>Google reviews</small>
          </span>
          <span className="dw-wj-btn tw:[display:inline-block] tw:[margin-top:12px] tw:[padding:8px_14px] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:12px] tw:[font-weight:500]">Get a free quote</span>
        </div>
        <div className="dw-wj-tiles tw:[display:grid] tw:[grid-template-columns:repeat(2,_minmax(0,_1fr))] tw:[gap:6px] tw:[margin-top:12px] tw:[&_span]:[padding:12px_10px] tw:[&_span]:[border:1px_solid_var(--line)] tw:[&_span]:[border-radius:12px] tw:[&_span]:[font-size:12px] tw:[&_span]:[font-weight:500]">
          <span>Roof repair</span>
          <span>Inspections</span>
          <span>Replacements</span>
          <span>Gutters</span>
        </div>
        <p className="dw-wj-area tw:[display:flex] tw:[align-items:center] tw:[gap:6px] tw:[margin-top:12px] tw:[color:var(--muted)] tw:[font-size:11.5px] tw:[&_svg]:[color:var(--red)]">
          <FiMapPin /> Serving Plano, Frisco and Allen
        </p>
      </div>

      {/* 3. Quote form */}
      <div className="dw-phone-screen tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dw-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1]" style={{ "--i": 2 } as CSSProperties}>
        <p className="dw-wj-title tw:[margin:8px_0_14px] tw:[font-size:19px] tw:[font-weight:500] tw:[letter-spacing:-0.02em]">Request a free quote</p>
        <span className="dw-wj-field tw:[display:grid] tw:[gap:4px] tw:[margin-bottom:10px] tw:[padding:10px_12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px]">
          <small>Name</small>
          <span className="dw-wj-type dw-wj-type--a tw:[display:inline-block] tw:[overflow:hidden] tw:[width:0] tw:[color:var(--ink)] tw:[font-size:13px] tw:[white-space:nowrap] tw:[animation:dw-wtype_12s_steps(16)_infinite_both] tw:[&&]:[animation-delay:0s] tw:motion-reduce:[width:auto]">Maria G.</span>
        </span>
        <span className="dw-wj-field tw:[display:grid] tw:[gap:4px] tw:[margin-bottom:10px] tw:[padding:10px_12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px]">
          <small>Phone</small>
          <span className="dw-wj-type dw-wj-type--b tw:[display:inline-block] tw:[overflow:hidden] tw:[width:0] tw:[color:var(--ink)] tw:[font-size:13px] tw:[white-space:nowrap] tw:[animation:dw-wtype_12s_steps(16)_infinite_both] tw:[&&]:[animation-delay:0.4s] tw:motion-reduce:[width:auto]">(214) 555-0142</span>
        </span>
        <span className="dw-wj-field dw-wj-field--tall tw:[display:grid] tw:[gap:4px] tw:[margin-bottom:10px] tw:[padding:10px_12px] tw:[border:1px_solid_var(--line)] tw:[border-radius:12px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px] tw:[min-height:74px] tw:[align-content:start]">
          <small>What do you need?</small>
          <span className="dw-wj-type dw-wj-type--c tw:[display:inline-block] tw:[overflow:hidden] tw:[width:0] tw:[color:var(--ink)] tw:[font-size:13px] tw:[white-space:nowrap] tw:[animation:dw-wtype_12s_steps(16)_infinite_both] tw:[&&]:[animation-delay:0.8s] tw:motion-reduce:[width:auto]">Leak after the storm</span>
        </span>
        <span className="dw-wj-send tw:[position:relative] tw:[display:flex] tw:[align-items:center] tw:[justify-content:center] tw:[gap:8px] tw:[margin-top:6px] tw:[padding:12px] tw:[border-radius:12px] tw:[background:var(--blue)] tw:[color:#fff] tw:[font-size:13px] tw:[font-weight:500]">
          <FiSend /> Send request
          <i className="dw-phone-tap tw:[position:absolute] tw:[top:50%] tw:[left:50%] tw:[width:44px] tw:[height:44px] tw:[margin:-22px_0_0_-22px] tw:[border:2px_solid_rgba(255,_255,_255,_0.9)] tw:[border-radius:50%] tw:[opacity:0] tw:[animation:dw-tap_12s_ease-out_infinite_both] tw:[&&]:[animation-delay:6s] tw:[.dw-wj-send_&]:[animation-delay:6.8s]" />
        </span>
      </div>

      {/* 4. Sent */}
      <div
        className="dw-phone-screen dw-phone-screen--done tw:[position:absolute] tw:[inset:0] tw:[padding:46px_16px_16px] tw:[opacity:0] tw:[animation:dw-screen_12s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--i)_*_3s)] tw:[&:first-of-type]:[opacity:1] tw:[display:flex] tw:[flex-direction:column] tw:[align-items:center] tw:[text-align:center]"
        style={{ "--i": 3 } as CSSProperties}
      >
        <span className="dw-phone-check tw:[display:grid] tw:[width:70px] tw:[height:70px] tw:[margin:64px_0_16px] tw:[place-items:center] tw:[border-radius:50%] tw:[background:var(--green)] tw:[color:#fff] tw:[font-size:32px] tw:[box-shadow:0_0_0_10px_var(--green-soft)]">
          <FiCheck />
        </span>
        <p className="dw-phone-done tw:[font-size:22px] tw:[font-weight:500] tw:[letter-spacing:-0.02em]">Request sent</p>
        <p className="dw-phone-when tw:[display:flex] tw:[align-items:center] tw:[gap:6px] tw:[margin-top:6px] tw:[color:var(--muted)] tw:[font-size:13px]">We’ll be in touch shortly</p>
        <div className="dw-phone-ticket tw:[display:grid] tw:[gap:2px] tw:[width:100%] tw:[margin-top:26px] tw:[padding:14px_16px] tw:[border:1px_dashed_#c9d3e3] tw:[border-radius:14px] tw:[text-align:left] tw:[&_span]:[font-size:14px] tw:[&_span]:[font-weight:500] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:12px]">
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
    <div className="dw-cov dw-wb tw:[padding:20px] tw:[border-radius:28px] tw:[background:#fff] tw:[&_.wb]:[border:1.5px_dashed_transparent] tw:[&_.wb]:[animation:dw-wb-wire_10s_ease_infinite_both] tw:max-bssm:[padding:14px]" aria-hidden="true">
      <div className="dw-cov-months tw:[position:relative] tw:[display:flex] tw:[justify-content:space-between] tw:[margin-bottom:18px] tw:[padding-bottom:12px] tw:[&_span]:[padding:6px_14px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[color:var(--muted)] tw:[&_span]:[font-size:13px] tw:[&_span]:[font-weight:500] tw:[&_span]:[animation:dw-month_10s_ease_infinite_both] tw:[&&_span]:[animation-delay:calc(var(--i)_*_3.333s)]">
        <span style={{ "--i": 0 } as CSSProperties}>Wireframe</span>
        <span style={{ "--i": 1 } as CSSProperties}>Design</span>
        <span style={{ "--i": 2 } as CSSProperties}>Live</span>
        <i className="dw-cov-bar tw:[position:absolute] tw:[bottom:0] tw:[left:0] tw:[width:100%] tw:[height:3px] tw:[border-radius:3px] tw:[background:var(--blue)] tw:[transform-origin:left] tw:[animation:dw-cov-bar_10s_linear_infinite_both]" />
      </div>

      <div className="dw-wb-browser tw:[overflow:hidden] tw:[border:1px_solid_var(--line)] tw:[border-radius:18px] tw:[background:#fff] tw:[box-shadow:0_18px_36px_-24px_rgba(12,_21,_38,_0.35)]">
        <div className="dw-wb-bar tw:[display:flex] tw:[align-items:center] tw:[gap:10px] tw:[padding:10px_12px] tw:[border-bottom:1px_solid_var(--line)] tw:[background:#f4f6fa]">
          <span className="dw-wb-dots tw:[display:flex] tw:[gap:5px] tw:[&_i]:[width:9px] tw:[&_i]:[height:9px] tw:[&_i]:[border-radius:50%] tw:[&_i]:[background:#d5dce7] tw:[&_i:nth-child(1)]:[background:#f6a29b] tw:[&_i:nth-child(2)]:[background:#fbd56b] tw:[&_i:nth-child(3)]:[background:#9ad8aa]">
            <i />
            <i />
            <i />
          </span>
          <span className="dw-wb-url tw:[display:inline-flex] tw:[flex:1] tw:[align-items:center] tw:[gap:6px] tw:[padding:5px_12px] tw:[border-radius:999px] tw:[background:#fff] tw:[color:var(--muted)] tw:[font-size:12px] tw:[&_svg]:[width:11px] tw:[&_svg]:[height:11px] tw:[&_svg]:[color:var(--green)]">
            <FiLock /> yourbusiness.com
          </span>
          <span className="dw-wb-live tw:[display:inline-flex] tw:[align-items:center] tw:[gap:6px] tw:[padding:4px_10px] tw:[border-radius:999px] tw:[background:var(--green)] tw:[color:#fff] tw:[font-size:11.5px] tw:[font-weight:600] tw:[animation:dw-wb-pop_10s_ease_infinite_both] tw:[&_i]:[width:6px] tw:[&_i]:[height:6px] tw:[&_i]:[border-radius:50%] tw:[&_i]:[background:#fff]">
            <i /> Live
          </span>
        </div>

        <div className="dw-wb-page tw:[position:relative] tw:[display:grid] tw:[gap:16px] tw:[padding:16px_18px_58px] tw:max-bssm:[padding:12px_12px_98px] tw:max-bssm:[gap:12px]">
          <div className="dw-wb-nav tw:[display:flex] tw:[align-items:center] tw:[gap:12px]">
            <span className="dw-wb-logo wb tw:[display:inline-flex] tw:[align-items:center] tw:[gap:7px] tw:[padding:3px_6px_3px_3px] tw:[border-radius:8px] tw:[color:var(--ink)] tw:[font-size:13px] tw:[font-weight:600] tw:max-bssm:[flex:1]">
              <span className="dw-wb-mark tw:[animation:dw-wb-hide_10s_ease_infinite_both] tw:[width:18px] tw:[height:18px] tw:[border-radius:6px] tw:[background:linear-gradient(135deg,_var(--blue),_#6e50f7)]" />
              Your Business
            </span>
            <span className="dw-wb-links tw:[display:flex] tw:[flex:1] tw:[justify-content:center] tw:[gap:10px] tw:[&_i]:[width:34px] tw:[&_i]:[height:7px] tw:[&_i]:[border-radius:4px] tw:[&_i]:[background:#dfe5ee] tw:max-bssm:[display:none]">
              <i className="wb" />
              <i className="wb" />
              <i className="wb" />
            </span>
            <span className="dw-wb-call wb tw:[display:inline-flex] tw:[align-items:center] tw:[gap:5px] tw:[padding:6px_12px] tw:[border-radius:999px] tw:[background:var(--blue)] tw:[color:#fff] tw:[font-size:11.5px] tw:[font-weight:500]">
              <FiPhone /> Call now
            </span>
          </div>

          <div className="dw-wb-hero tw:[display:grid] tw:[grid-template-columns:minmax(0,_1.12fr)_minmax(0,_0.88fr)] tw:[gap:16px] tw:[align-items:stretch] tw:max-bssm:[grid-template-columns:minmax(0,_1fr)]">
            <div className="dw-wb-copy tw:[display:flex] tw:[flex-direction:column] tw:[align-items:flex-start] tw:[gap:8px]">
              <span className="dw-wb-pill wb tw:[padding:3px_10px] tw:[border-radius:999px] tw:[background:var(--blue-soft)] tw:[color:var(--blue-dark)] tw:[font-size:10.5px] tw:[font-weight:500]">Serving Dallas–Fort Worth</span>
              <p className="dw-wb-h wb tw:[border-radius:8px] tw:[color:var(--ink)] tw:[font-size:clamp(17px,_1.7vw,_23px)] tw:[font-weight:500] tw:[letter-spacing:-0.02em] tw:[line-height:1.15]">Local service you can count on</p>
              <i className="dw-wb-line wb tw:[display:block] tw:[width:92%] tw:[height:7px] tw:[border-radius:4px] tw:[background:#e2e8f0]" />
              <i className="dw-wb-line dw-wb-line--short wb tw:[display:block] tw:[height:7px] tw:[border-radius:4px] tw:[background:#e2e8f0] tw:[width:68%]" />
              <span className="dw-wb-btns tw:[display:flex] tw:[flex-wrap:wrap] tw:[gap:6px] tw:[margin-top:2px]">
                <span className="dw-wb-btn wb tw:[padding:7px_12px] tw:[border-radius:999px] tw:[background:var(--ink)] tw:[color:#fff] tw:[font-size:11.5px] tw:[font-weight:500]">Get a free quote</span>
                <span className="dw-wb-btn dw-wb-btn--ghost wb tw:[padding:7px_12px] tw:[border-radius:999px] tw:[font-size:11.5px] tw:[font-weight:500] tw:[background:var(--panel)] tw:[color:var(--ink)]">
                  Our services
                </span>
              </span>
              <span className="dw-wb-stars wb tw:[display:inline-flex] tw:[align-items:center] tw:[gap:2px] tw:[padding:2px_4px] tw:[border-radius:6px] tw:[color:var(--gold)] tw:[&_svg]:[width:12px] tw:[&_svg]:[height:12px] tw:[&_svg]:[fill:currentColor] tw:[&_small]:[margin-left:5px] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:10.5px] tw:[.dw-wb_&_small]:[animation:dw-wb-hide_10s_ease_infinite_both]">
                {[0, 1, 2, 3, 4].map((n) => (
                  <FiStar key={n} />
                ))}
                <small>Google reviews</small>
              </span>
            </div>
            <div className="dw-wb-img wb tw:[&_svg]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:[position:relative] tw:[min-height:150px] tw:[overflow:hidden] tw:[border-radius:14px] tw:[background:linear-gradient(180deg,_#dbe8ff_0%,_#eef3ff_100%)] tw:[&_svg]:[position:absolute] tw:[&_svg]:[inset:auto_0_0] tw:[&_svg]:[width:100%] tw:[&_svg]:[height:100%] tw:max-bssm:[min-height:110px]">
              {/* Neutral hero image (sun, cloud, hills): no trade shown. */}
              <svg viewBox="0 0 160 130" preserveAspectRatio="xMidYMax meet">
                <circle cx="118" cy="34" r="14" className="dw-wb-sun tw:[fill:var(--gold)]" />
                <path d="M30 46 a9 9 0 0 1 17 -3 a7 7 0 0 1 11 6 H30 Z" className="dw-wb-cloud tw:[fill:#fff]" />
                <path d="M0 98 L44 62 L78 90 L108 70 L160 104 V130 H0 Z" className="dw-wb-hill-back tw:[fill:#9db9f5]" />
                <path d="M0 112 Q 44 92 84 108 T 160 104 V130 H0 Z" className="dw-wb-hill tw:[fill:#b8e4c4]" />
              </svg>
            </div>
          </div>

          <div className="dw-wb-cards tw:[display:grid] tw:[grid-template-columns:repeat(3,_minmax(0,_1fr))] tw:[gap:8px]">
            <span className="dw-wb-card wb tw:[&_i]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:[display:grid] tw:[gap:5px] tw:[padding:10px] tw:[border-radius:12px] tw:[background:var(--panel)] tw:[color:var(--blue)] tw:[&_svg]:[width:16px] tw:[&_svg]:[height:16px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-size:11.5px] tw:[&_b]:[font-weight:600] tw:[&_i]:[display:block] tw:[&_i]:[width:80%] tw:[&_i]:[height:5px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#dbe3ef] tw:[&_b]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:max-bssm:[&_b]:[font-size:10.5px]">
              <FiGrid />
              <b>Our services</b>
              <i />
            </span>
            <span className="dw-wb-card wb tw:[&_i]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:[display:grid] tw:[gap:5px] tw:[padding:10px] tw:[border-radius:12px] tw:[background:var(--panel)] tw:[color:var(--blue)] tw:[&_svg]:[width:16px] tw:[&_svg]:[height:16px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-size:11.5px] tw:[&_b]:[font-weight:600] tw:[&_i]:[display:block] tw:[&_i]:[width:80%] tw:[&_i]:[height:5px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#dbe3ef] tw:[&_b]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:max-bssm:[&_b]:[font-size:10.5px]">
              <FiStar />
              <b>Reviews</b>
              <i />
            </span>
            <span className="dw-wb-card wb tw:[&_i]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:[display:grid] tw:[gap:5px] tw:[padding:10px] tw:[border-radius:12px] tw:[background:var(--panel)] tw:[color:var(--blue)] tw:[&_svg]:[width:16px] tw:[&_svg]:[height:16px] tw:[&_b]:[color:var(--ink)] tw:[&_b]:[font-size:11.5px] tw:[&_b]:[font-weight:600] tw:[&_i]:[display:block] tw:[&_i]:[width:80%] tw:[&_i]:[height:5px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#dbe3ef] tw:[&_b]:[animation:dw-wb-hide_10s_ease_infinite_both] tw:max-bssm:[&_b]:[font-size:10.5px]">
              <FiMapPin />
              <b>Service areas</b>
              <i />
            </span>
          </div>

          <span className="dw-wb-cwv tw:[position:absolute] tw:[z-index:2] tw:[display:inline-flex] tw:[align-items:center] tw:[gap:8px] tw:[border-radius:12px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[font-weight:500] tw:[top:58px] tw:[right:14px] tw:[padding:7px_12px] tw:[border:1px_solid_#bfe6cb] tw:[color:#1f7a3a] tw:[font-size:11.5px] tw:[animation:dw-wb-pop_10s_ease_infinite_both] tw:[&&]:[animation-delay:0.3s] tw:max-bssm:[top:auto] tw:max-bssm:[bottom:54px] tw:max-bssm:[right:10px]">
            <FiZap /> Core Web Vitals: Passed
          </span>
          <span className="dw-wb-toast tw:[position:absolute] tw:[z-index:2] tw:[display:inline-flex] tw:[align-items:center] tw:[gap:8px] tw:[border-radius:12px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[font-weight:500] tw:[left:18px] tw:[bottom:12px] tw:[padding:8px_12px_8px_8px] tw:[border:1px_solid_var(--line)] tw:[color:var(--ink)] tw:[font-size:12px] tw:[animation:dw-wb-pop_10s_ease_infinite_both] tw:[&&]:[animation-delay:0.7s] tw:[&>span]:[display:grid] tw:[&>span]:[width:22px] tw:[&>span]:[height:22px] tw:[&>span]:[place-items:center] tw:[&>span]:[border-radius:50%] tw:[&>span]:[background:var(--green)] tw:[&>span]:[color:#fff] tw:max-bssm:[left:10px] tw:max-bssm:[bottom:12px]">
            <span>
              <FiCheck />
            </span>
            New quote request
          </span>
        </div>
      </div>

      <ul className="dw-cov-legend tw:[display:flex] tw:[flex-wrap:wrap] tw:[gap:8px_18px] tw:[margin-top:14px] tw:[&_li]:[display:flex] tw:[&_li]:[align-items:center] tw:[&_li]:[gap:7px] tw:[&_li]:[color:var(--text)] tw:[&_li]:[font-size:12.5px] tw:[&_i]:[width:11px] tw:[&_i]:[height:11px] tw:[&_i]:[border-radius:50%] tw:[&_.is-top]:[background:var(--green)] tw:[&_.is-mid]:[background:#f0b429] tw:[&_.is-low]:[background:#e2574c] tw:[.dw-wb_&_.is-top]:[background:var(--green)] tw:[.dw-wb_&_.is-mid]:[background:var(--blue)] tw:[.dw-wb_&_.is-low]:[background:var(--gold)]">
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
    <div className="dw-cmap tw:[position:absolute] tw:[inset:0] tw:[overflow:hidden] tw:[border-radius:inherit]" aria-hidden="true">
      <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="dw-cmap-bg tw:[position:absolute] tw:[inset:0] tw:[width:100%] tw:[height:100%]">
        <rect width="400" height="400" className="dw-cmap-land tw:[fill:#eaf0fa]" />
        <path d="M120 40 C 150 30 175 50 168 70 C 160 92 132 92 122 76 C 112 62 104 48 120 40 Z" className="dw-cmap-lake tw:[fill:#c9dcf6]" />
        <path d="M330 150 C 348 146 356 168 350 190 C 344 208 326 206 322 188 C 318 172 316 154 330 150 Z" className="dw-cmap-lake tw:[fill:#c9dcf6]" />
        <path d="M0 160 H400 M200 0 V400" className="dw-cmap-county tw:[fill:none] tw:[stroke:#cdd7e6] tw:[&&]:[stroke-width:1.5] tw:[&&]:[stroke-dasharray:6_6] tw:[vector-effect:non-scaling-stroke]" />
        <g className="dw-cmap-roads tw:[&_path]:[fill:none] tw:[&_path]:[stroke:#fff] tw:[&&_path]:[stroke-width:9] tw:[&&_path]:[stroke-linecap:round] tw:[&_path]:[vector-effect:non-scaling-stroke]">
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
            className={`dw-cmap-pin tw:[position:absolute] tw:[z-index:2] tw:[display:inline-flex] tw:[align-items:center] tw:[gap:6px] tw:[padding:5px_12px_5px_6px] tw:[border-radius:999px] tw:[background:#fff] tw:[color:var(--ink)] tw:[font-size:12.5px] tw:[font-weight:500] tw:[white-space:nowrap] tw:[box-shadow:0_8px_18px_-10px_rgba(12,_21,_38,_0.45)] tw:[transform:translate(-50%,_-50%)] tw:[&_i]:[position:relative] tw:[&_i]:[width:10px] tw:[&_i]:[height:10px] tw:[&_i]:[border:3px_solid_var(--blue-soft)] tw:[&_i]:[border-radius:50%] tw:[&_i]:[background:var(--blue)] tw:[&_i]:[box-sizing:content-box] tw:[&.is-page]:[animation:dw-cmap-pin_9s_ease_infinite_both] tw:[&&.is-page]:[animation-delay:calc(var(--k)_*_3s)] tw:[&.is-page_i::after]:[position:absolute] tw:[&.is-page_i::after]:[inset:-6px] tw:[&.is-page_i::after]:[border:2px_solid_var(--blue)] tw:[&.is-page_i::after]:[border-radius:50%] tw:[&.is-page_i::after]:[opacity:0] tw:[&.is-page_i::after]:[animation:dw-cmap-ping_9s_ease-out_infinite_both] tw:[&&.is-page_i::after]:[animation-delay:calc(var(--k)_*_3s)] tw:[&.is-page_i::after]:[content:''] tw:max-bssm:[font-size:10.5px] tw:max-bssm:[padding:3px_8px_3px_4px] tw:max-bssm:[&_i]:[width:7px] tw:max-bssm:[&_i]:[height:7px] tw:max-bssm:[&_i]:[border-width:2px] ${k >= 0 ? " is-page" : ""}`}
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

      <div className="dw-cmap-card tw:[position:absolute] tw:[z-index:3] tw:[right:5%] tw:[bottom:6%] tw:[display:grid] tw:[width:min(230px,_46%)] tw:max-bssm:[width:52%]">
        {PAGE_CITIES.map((city, k) => (
          <div
            key={city}
            className="dw-cmap-page tw:[display:grid] tw:[grid-area:1_/_1] tw:[gap:6px] tw:[padding:14px] tw:[border:1px_solid_var(--line)] tw:[border-radius:16px] tw:[background:#fff] tw:[box-shadow:var(--lift)] tw:[opacity:0] tw:[animation:dw-cmap-page_9s_ease_infinite_both] tw:[&&]:[animation-delay:calc(var(--k)_*_3s)] tw:[&:first-child]:[opacity:1] tw:[&_small]:[display:inline-flex] tw:[&_small]:[align-items:center] tw:[&_small]:[gap:5px] tw:[&_small]:[overflow:hidden] tw:[&_small]:[color:var(--muted)] tw:[&_small]:[font-size:11px] tw:[&_small]:[white-space:nowrap] tw:[&_small_svg]:[flex:none] tw:[&_small_svg]:[width:10px] tw:[&_small_svg]:[height:10px] tw:[&_small_svg]:[color:var(--green)] tw:[&_b]:[font-size:15px] tw:[&_b]:[font-weight:500] tw:[&_b]:[letter-spacing:-0.01em] tw:[&_b]:[line-height:1.25] tw:[&_i]:[display:block] tw:[&_i]:[height:6px] tw:[&_i]:[border-radius:3px] tw:[&_i]:[background:#e2e8f0] tw:[&_i.is-short]:[width:65%] tw:[&_span]:[display:inline-flex] tw:[&_span]:[align-items:center] tw:[&_span]:[justify-self:start] tw:[&_span]:[gap:5px] tw:[&_span]:[margin-top:2px] tw:[&_span]:[padding:4px_10px] tw:[&_span]:[border-radius:999px] tw:[&_span]:[background:var(--green-soft)] tw:[&_span]:[color:#1f7a3a] tw:[&_span]:[font-size:11.5px] tw:[&_span]:[font-weight:600] tw:max-bssm:[padding:10px] tw:max-bssm:[&_b]:[font-size:13px]"
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
