import type { Metadata } from "next";
import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import Script from "next/script";
import Loader from "@/app/components/Loader";
import SmoothScroll from "@/app/components/SmoothScroll";

const neueHaas = localFont({
  src: [
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayRoman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-display/NeueHaasDisplayBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Zonic Media",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://widget.clutch.co" />
        <link rel="dns-prefetch" href="https://widget.clutch.co" />

        <Script
          id="clutch-widget-script"
          src="https://widget.clutch.co/static/js/widget.js"
          strategy="afterInteractive"
        />

        {isProd && (
          <>
            {/* Google Ads Tag */}
            <Script
              id="google-ads-tag-src"
              src="https://www.googletagmanager.com/gtag/js?id=AW-17618392446"
              strategy="afterInteractive"
            />

            <Script
              id="google-ads-tag-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'AW-17618392446', {
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
                  })(window,document,'script','dataLayer','GTM-TSLH7NKW');
                `,
              }}
            />
          </>
        )}
      </head>

      <body className={neueHaas.className}>
        {isProd && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TSLH7NKW"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <Loader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
