"use client";

import Script from "next/script";

type GoHighLevelFormProps = {
  /**
   * GoHighLevel form id (the part after /widget/form/ in the embed URL).
   */
  formId?: string;
  formName?: string;
  /**
   * Unique suffix so multiple instances of the same form on one page each
   * get a unique element id (avoids duplicate-id resize conflicts).
   */
  instanceId?: string;
  height?: number | string;
};

export default function GoHighLevelForm({
  formId = "nRQ9EukoKHcVBgxnY6no",
  formName = "Local SEO",
  instanceId = "1",
  height = 622,
}: GoHighLevelFormProps) {
  const elementId = `inline-${formId}-${instanceId}`;

  return (
    <>
      <iframe
        src={`https://forms.zonicllc.com/widget/form/${formId}`}
        style={{
          width: "100%",
          height: typeof height === "number" ? `${height}px` : height,
          border: "none",
          borderRadius: "8px",
        }}
        id={elementId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height="622"
        data-layout-iframe-id={elementId}
        data-form-id={formId}
        title={formName}
      />
      <Script
        src="https://forms.zonicllc.com/js/form_embed.js"
        strategy="afterInteractive"
        id="ghl-form-embed"
      />
    </>
  );
}
