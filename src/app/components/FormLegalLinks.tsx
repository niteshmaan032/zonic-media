import Link from "next/link";
import { SITE_PATHS } from "@/shared/siteConfig";

/**
 * Centered Privacy Policy / Terms & Conditions links — placed below a form's
 * submit button. Styled by `.consent-legal-links` in globals.css.
 */
export default function FormLegalLinks() {
  return (
    <p className="consent-legal-links">
      <Link href={SITE_PATHS.privacy} target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </Link>
      <span className="consent-legal-sep" aria-hidden="true">
        ·
      </span>
      <Link href={SITE_PATHS.terms} target="_blank" rel="noopener noreferrer">
        Terms &amp; Conditions
      </Link>
    </p>
  );
}
