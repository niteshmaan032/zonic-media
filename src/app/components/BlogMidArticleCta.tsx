import Link from "next/link";

/**
 * Mid-article service CTA (Aug 2026 SEO plan, action 18). The blog's traffic
 * is informational GBP-suspension reads; this routes those readers to the
 * reinstatement service before they bounce, instead of only at the page end.
 */
export default function BlogMidArticleCta() {
  return (
    <aside className="bp-mid-cta" aria-label="Reinstatement service">
      <p className="bp-mid-cta-kicker">Profile suspended right now?</p>
      <p className="bp-mid-cta-text">
        We recover suspended Google Business Profiles for a living — 700+
        reinstatements handled. Get a free case review before you file another
        appeal on your own.
      </p>
      <div className="bp-mid-cta-actions">
        <Link href="/services/gmb-reinstatement-help" className="bp-mid-cta-btn">
          Get My Profile Back
        </Link>
        <a href="tel:+13027269736" className="bp-mid-cta-phone">
          Or call (302) 726-9736
        </a>
      </div>
    </aside>
  );
}
