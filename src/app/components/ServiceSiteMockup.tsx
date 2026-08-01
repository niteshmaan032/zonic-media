import { FaStar } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

/**
 * Decorative "live site preview" browser mockup shown in the "Why … Choose Us"
 * banner of every website-design service page. Purely presentational
 * (aria-hidden) — it represents the kind of high-converting site we build for
 * that trade. All visual styling lives in each page's scoped stylesheet under
 * `.{prefix}-siteui*`, so the mockup automatically picks up that page's theme
 * colours from the `--{prefix}-accent / ink / text / light / divider` tokens.
 */
type ServiceSiteMockupProps = {
  /** CSS scope prefix for the host page, e.g. "rw", "hw", "dw", "hiw". */
  prefix: string;
  brand: string;
  url: string;
  headline: string;
  primaryCta: string;
  chips: string[];
  toastTitle: string;
  navCta?: string;
  secondaryCta?: string;
  rating?: string;
  reviews?: string;
  toastMeta?: string;
};

export default function ServiceSiteMockup({
  prefix: p,
  brand,
  url,
  headline,
  primaryCta,
  chips,
  toastTitle,
  navCta = "Free Quote",
  secondaryCta = "Call Now",
  rating = "4.9",
  reviews = "200+ reviews",
  toastMeta = "Just now · via website",
}: ServiceSiteMockupProps) {
  return (
    <div className={`${p}-siteui`} aria-hidden="true">
      <div className={`${p}-siteui-window`}>
        <div className={`${p}-siteui-bar`}>
          <span className={`${p}-siteui-dot`} />
          <span className={`${p}-siteui-dot`} />
          <span className={`${p}-siteui-dot`} />
          <span className={`${p}-siteui-url`}>{url}</span>
        </div>
        <div className={`${p}-siteui-screen`}>
          <div className={`${p}-siteui-nav`}>
            <span className={`${p}-siteui-brand`}>{brand}</span>
            <span className={`${p}-siteui-navcta`}>{navCta}</span>
          </div>
          <div className={`${p}-siteui-rating`}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <b>{rating}</b>
            <span>· {reviews}</span>
          </div>
          <p className={`${p}-siteui-h`}>{headline}</p>
          <div className={`${p}-siteui-btns`}>
            <span className={`${p}-siteui-btn`}>{primaryCta}</span>
            <span className={`${p}-siteui-btn-ghost`}>{secondaryCta}</span>
          </div>
          <div className={`${p}-siteui-chips`}>
            {chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className={`${p}-siteui-cards`}>
            <span className={`${p}-siteui-card`} />
            <span className={`${p}-siteui-card`} />
            <span className={`${p}-siteui-card`} />
          </div>
        </div>
      </div>
      <div className={`${p}-siteui-toast`}>
        <span className={`${p}-siteui-toast-icon`}>
          <FiBell />
        </span>
        <span className={`${p}-siteui-toast-txt`}>
          <strong>{toastTitle}</strong>
          <small>{toastMeta}</small>
        </span>
      </div>
    </div>
  );
}
