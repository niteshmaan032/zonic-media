"use client";

import Script from "next/script";

const FORM_ID = "nRQ9EukoKHcVBgxnY6no";

export default function LocalSeoGhlForm() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: 8 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Local SEO"
        data-height="882"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Local SEO"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
