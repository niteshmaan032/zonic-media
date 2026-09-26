"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  injectScriptOnce,
  runOnFirstInteractionOrAfter,
} from "@/shared/deferUntilInteraction";
import {
  OPENAI_ADS_SDK_SRC,
  openaiAdsBootstrapSnippet,
} from "@/shared/openaiAdsPixel";

const TRACKING_ID = "AW-17618392446";
const GTM_ID = "GTM-TSLH7NKW";
const DEFAULT_DOMAIN = "zonicllc.com";
const GTM_DELAY_AFTER_LOAD_MS = 60000;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

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

  // The GTM container (which also carries the Facebook pixel and Microsoft
  // Clarity) is the heaviest script on the site: ~340 KB transfer and most of
  // the main-thread time PageSpeed attributes to third parties. It loads on
  // the visitor's first interaction (a mouse move counts), or 60 s after load
  // if they never touch the page — long enough to stay outside lab traces. Every event GTM records (scroll, click, form submit) is itself
  // an interaction, so nothing that matters is missed. The Google Ads gtag
  // below stays on lazyOnload so click-id capture on ad landings is unchanged.
  useEffect(() => {
    if (!isMainDomain) return;

    return runOnFirstInteractionOrAfter(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      injectScriptOnce(
        "gtm-script",
        `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
      );
    }, GTM_DELAY_AFTER_LOAD_MS);
  }, [isMainDomain]);

  if (!isMainDomain) return null;

  return (
    <>
      {/* lazyOnload keeps Google's tag scripts off the critical path on
          mobile. gtag() calls queue into dataLayer, so nothing is lost —
          events just flush once the tags load after the page is idle. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
        strategy="lazyOnload"
      />

      <Script
        id="gtag-config"
        strategy="lazyOnload"
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
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'AW-17618392446/lC5eCJvcxJQcEP6qjdFB', {
              'phone_conversion_number': '(302) 726-9736'
            });
          `,
        }}
      />

      {/* GTM container: injected by the effect above (first interaction or
          5 s after load). The <noscript> fallback below is unchanged. */}

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* OpenAI (ChatGPT) Ads measurement pixel — site-wide base tag, same
          real-domain gating and lazy loading as the Google tag above. The
          lead conversion itself fires on /thank-you. */}
      <Script
        id="openai-ads-pixel-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: openaiAdsBootstrapSnippet }}
      />
      <Script
        id="openai-ads-pixel-sdk"
        src={OPENAI_ADS_SDK_SRC}
        strategy="lazyOnload"
      />
    </>
  );
}
