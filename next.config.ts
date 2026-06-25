import type { NextConfig } from "next";

const contentSecurityPolicyReportOnly = [
  "default-src 'self'",
  "base-uri 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://widget.clutch.co https://clutch.co https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://connect.facebook.net",
  "script-src-elem 'self' 'unsafe-inline' https://widget.clutch.co https://clutch.co https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widget.clutch.co https://clutch.co https://www.gstatic.com",
  "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://widget.clutch.co https://clutch.co https://www.gstatic.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://widget.clutch.co https://clutch.co https://www.google.com https://www.gstatic.com https://fonts.googleapis.com https://fonts.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://td.doubleclick.net https://www.googleadservices.com https://www.google.co.in https://www.facebook.com https://connect.facebook.net https://*.ably.io https://*.ably.com https://*.ably.net wss://*.ably.io wss://*.ably.com wss://*.ably.net",
  "frame-src 'self' https://widget.clutch.co https://clutch.co https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net https://bid.g.doubleclick.net https://www.facebook.com",
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy-Report-Only",
            value: contentSecurityPolicyReportOnly,
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Force canonical host: non-www -> www (fixes GSC "Alternate page with proper canonical tag")
      {
        source: "/:path*",
        has: [{ type: "host", value: "zonicllc.com" }],
        destination: "https://www.zonicllc.com/:path*",
        permanent: true,
      },

      // Service URL changes
      {
        source: "/service/google-my-business/gmb-suspension-reinstatement",
        destination: "/services/gmb-reinstatement-help",
        permanent: true,
      },
      {
        source: "/service/web-design",
        destination: "/services/web-design",
        permanent: true,
      },
      { source: "/service/social-media", destination: "/", permanent: true },
      {
        source: "/service/search-engine-marketing",
        destination: "/services/philadelphia/sem",
        permanent: true,
      },
      {
        source: "/service/search-engine-optimization",
        destination: "/services/local-seo-for-home-services",
        permanent: true,
      },
      {
        source: "/service/leads-generation",
        destination: "/services/google-ads",
        permanent: true,
      },
      {
        source: "/service/google-my-business",
        destination: "/services/gmb-optimization",
        permanent: true,
      },
      { source: "/service", destination: "/services", permanent: true },

      // Home inspector marketing moved under /services (parent + state pages)
      {
        source: "/home-inspector-marketing-agency/:path*",
        destination: "/services/home-inspector-marketing/:path*",
        permanent: true,
      },

      // Company URL changes
      { source: "/company/about-us", destination: "/about", permanent: true },
      { source: "/company/our-partners", destination: "/", permanent: true },
      {
        source: "/company/casual-appointment",
        destination: "/contact-us",
        permanent: true,
      },
      { source: "/company/white-label", destination: "/", permanent: true },
      { source: "/company/reviews", destination: "/", permanent: true },
      { source: "/company", destination: "/services", permanent: true },

      // Blog redirects
      {
        source: "/blog/google-business-profile-suspension-guidelines-2025",
        destination: "/services/gmb-reinstatement-help",
        permanent: true,
      },
      {
        source: "/blog/category/google-my-business",
        destination: "/services/gmb-optimization",
        permanent: true,
      },

      // Who we help / healthcare
      {
        source: "/who-we-help/healthcare/chiropractors",
        destination: "/services/industry/chiropractor-local-seo-services",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/dentist",
        destination: "/services/industry/dental-seo-services",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/pediatrician",
        destination: "/services/industry/pediatricians",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare/veterinary",
        destination: "/services/industry/pediatricians",
        permanent: true,
      },
      {
        source: "/who-we-help/healthcare",
        destination: "/services/industry/dental-seo-services",
        permanent: true,
      },

      // Who we help / medical
      {
        source: "/who-we-help/medical/doctors",
        destination: "/services/industry/pediatricians",
        permanent: true,
      },
      { source: "/who-we-help/medical/med-spas", destination: "/", permanent: true },
      {
        source: "/who-we-help/medical/plastic-surgeons",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/medical",
        destination: "/services/industry/dental-seo-services",
        permanent: true,
      },

      // Who we help / service-providers
      {
        source: "/who-we-help/service-providers/contractors",
        destination: "/services/industry/local-seo-for-roofing-companies",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/construction-companies",
        destination: "/services/industry/local-seo-for-roofing-companies",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/electricians",
        destination: "/services/industry/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/hvac",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/plumbers",
        destination: "/services/industry/seo-services-for-plumber",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers/roofers",
        destination: "/services/industry/local-seo-for-roofing-companies",
        permanent: true,
      },
      {
        source: "/who-we-help/service-providers",
        destination: "/services",
        permanent: true,
      },

      // Who we help / home-service
      {
        source: "/who-we-help/home-service/construction-companies",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/plumbers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/hvac",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/electricians",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/roofers",
        destination: "/services/industry/local-seo-for-roofing-companies",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service/contractors",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/who-we-help/home-service",
        destination: "/services/industry/local-seo-services-for-residential-cleaning",
        permanent: true,
      },
      { source: "/who-we-help", destination: "/", permanent: true },

      // Legal
      {
        source: "/refund-policy",
        destination: "/legal/refund-policy",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/legal/terms-conditions",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/legal/privacy-policy",
        permanent: true,
      },

      // Contact
      { source: "/contact", destination: "/contact-us", permanent: true },

      // Services internal redirects
      {
        source: "/services/local-seo",
        destination: "/services/local-seo-for-home-services",
        permanent: true,
      },
      {
        source: "/services/industry/car-towing",
        destination: "/services/industry/seo-services-for-car-towing",
        permanent: true,
      },

      // Other old URLs
      {
        source: "/hvac-seo-services",
        destination: "/services/local-seo-services-for-hvac",
        permanent: true,
      },
      {
        source: "/roofing-seo-services",
        destination: "/services/industry/local-seo-for-roofing-companies",
        permanent: true,
      },
      {
        source: "/white-label-seo",
        destination: "/services/local-seo-for-home-services",
        permanent: true,
      },
      { source: "/price", destination: "/", permanent: true },
      {
        source: "/category/all/digital-marketing",
        destination: "/",
        permanent: true,
      },
      { source: "/category/all", destination: "/", permanent: true },

      // Cleanup / legacy URLs
      { source: "/service/web-desing", destination: "/", permanent: true },
      { source: "/blog/author/zonic_llc", destination: "/", permanent: true },
      { source: "/elementor-1720", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/author/zonic_llc", destination: "/", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
