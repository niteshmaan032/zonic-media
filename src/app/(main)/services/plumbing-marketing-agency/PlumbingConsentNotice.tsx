import { LEAD_CONSENT_TEXT } from "@/shared/consent";

/**
 * SMS/messaging consent disclosure shown in the footer area of the plumbing
 * marketing pages. Reuses the same copy as the lead-form consent checkbox.
 */
export default function PlumbingConsentNotice() {
  return (
    <div className="pmb-consent-footer">
      <div className="pmb-consent-inner">
        <p>{LEAD_CONSENT_TEXT}</p>
      </div>
    </div>
  );
}
