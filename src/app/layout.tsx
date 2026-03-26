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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager (ONLY on real domain) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var allowedDomain = 'zonicllc.com';
                var currentHost = window.location.hostname;

                if (currentHost === allowedDomain) {
                  (function(w,d,s,l,i){w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-TSLH7NKW');
                }
              })();
            `,
          }}
        />
      </head>

      <body className={neueHaas.className}>
        {/* ✅ GTM noscript (ONLY on real domain) */}
        <Script
          id="gtm-noscript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var allowedDomain = 'zonicllc.com';
                var currentHost = window.location.hostname;

                if (currentHost === allowedDomain) {
                  document.write(\`
                    <noscript>
                      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TSLH7NKW"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>
                    </noscript>
                  \`);
                }
              })();
            `,
          }}
        />

        <Loader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
