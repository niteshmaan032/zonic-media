"use client";

import { useState } from "react";
import { LEAD_CONSENT_TEXT } from "@/shared/consent";

// Short preview shown before the visitor expands the full consent text.
const PREVIEW = LEAD_CONSENT_TEXT.slice(0, 96).trimEnd();

type LeadConsentCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** Class for the wrapping <label> so each form keeps its own styling. */
  className: string;
  toggleClassName?: string;
};

export default function LeadConsentCheckbox({
  checked,
  onChange,
  className,
  toggleClassName = "lead-consent-toggle",
}: LeadConsentCheckboxProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <label className={className}>
      <input
        type="checkbox"
        name="smsConsent"
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span>
        {expanded ? LEAD_CONSENT_TEXT : `${PREVIEW}… `}
        <button
          type="button"
          className={toggleClassName}
          aria-expanded={expanded}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setExpanded((value) => !value);
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </span>
    </label>
  );
}
