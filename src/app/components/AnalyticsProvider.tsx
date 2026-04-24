"use client";

import Script from "next/script";

const TRACKING_ID = "AW-17618392446";
const GTM_ID = "GTM-TSLH7NKW";

export default function AnalyticsProvider() {
  const isBrowser = typeof window !== "undefined";

  // ✅ Allow ONLY your real domain (www + non-www + future subdomains)
  const isMainDomain =
    isBrowser && window.location.hostname.endsWith("zonicllc.com");

  // 🚫 Block everything else (vercel previews, localhost, etc.)
  if (!isMainDomain) return null;

  return (
    <>
      {/* Google Ads (gtag) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        strategy="afterInteractive"
      />

      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${TRACKING_ID}', {
              linker: {
                domains: ['zonicllc.com']
              }
            });
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* GTM fallback (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
