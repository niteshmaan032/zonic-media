"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const TRACKING_ID = "AW-17618392446";
const GTM_ID = "GTM-TSLH7NKW";
const DEFAULT_DOMAIN = "zonicll.com";

function getConfiguredDomain() {
  const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();

  if (!configuredAppUrl) {
    return DEFAULT_DOMAIN;
  }

  try {
    return new URL(configuredAppUrl).hostname.replace(/^www\./, "");
  } catch {
    return DEFAULT_DOMAIN;
  }
}

const primaryDomain = getConfiguredDomain();
const linkerDomains = [primaryDomain, `www.${primaryDomain}`];

export default function AnalyticsProvider() {
  const [isMainDomain, setIsMainDomain] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;

    setIsMainDomain(
      hostname === primaryDomain || hostname.endsWith(`.${primaryDomain}`),
    );
  }, []);

  if (!isMainDomain) return null;

  return (
    <>
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
                domains: ${JSON.stringify(linkerDomains)}
              }
            });
          `,
        }}
      />

      <Script
        id="gtag-phone-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'AW-17618392446/lC5eCJvcxJQcEP6qjdFB', {
              'phone_conversion_number': '(302) 726-9736'
            });
          `,
        }}
      />

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
