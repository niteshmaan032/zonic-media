// Server component: renders the GoHighLevel (LeadConnector) chat-widget loader
// directly into the page's server-rendered HTML so GHL's compliance crawler —
// which reads the raw HTML and does NOT execute client-side JS — can detect it.
//
// COMPLIANCE: only include this on pages that have NO phone/SMS opt-in form, or
// GHL rejects the widget for "multiple opt-in sources". See the GHL widget
// compliance project memory and SiteFloatingWidgets.tsx.
export default function GhlChatWidget() {
  return (
    // suppressHydrationWarning: loader.js stamps a random data-loader-instance
    // attribute onto this tag at runtime, which otherwise triggers a React
    // hydration-mismatch warning.
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a2ac834e20523fdce854ae4"
      data-source="WEB_USER"
      suppressHydrationWarning
    />
  );
}
