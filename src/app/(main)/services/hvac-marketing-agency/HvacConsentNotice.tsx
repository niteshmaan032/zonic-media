import { LEAD_CONSENT_TEXT } from "@/shared/consent";

/**
 * SMS/messaging consent disclosure shown in the footer area of the HVAC
 * marketing pages. Reuses the same copy as the lead-form consent checkbox.
 */
export default function HvacConsentNotice() {
  return (
    <div className="hvac-consent-footer">
      <div className="hvac-consent-inner">
        <p>{LEAD_CONSENT_TEXT}</p>
      </div>
    </div>
  );
}
