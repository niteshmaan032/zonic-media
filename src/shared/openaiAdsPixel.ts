// OpenAI (ChatGPT) Ads measurement pixel — set up Sept 2026.
//
// The pixel works like the Google tag: the base script must run on every page
// so OpenAI can see the visitor arrive from an ad, and a separate "measure"
// call fires on the thank-you page to count the lead.
//
// The bootstrap below is safe to run more than once. It creates the `oaiq`
// command queue if it doesn't exist yet and calls "init" exactly once, so a
// page can queue a "measure" call even if the SDK hasn't loaded yet.

export const OPENAI_ADS_PIXEL_ID = "CbEgEXg2H9kDQ3m2WPxkeo";

export const OPENAI_ADS_SDK_SRC = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

/** Conversion event created in OpenAI Ads Manager (base event: Lead). */
export const OPENAI_ADS_LEAD_EVENT = "lead_created";

export const openaiAdsBootstrapSnippet = `
  window.oaiq = window.oaiq || function () {
    (window.oaiq.q = window.oaiq.q || []).push(arguments);
  };
  if (!window.__oaiqInitialized) {
    window.__oaiqInitialized = true;
    oaiq("init", { pixelId: "${OPENAI_ADS_PIXEL_ID}" });
  }
`;
